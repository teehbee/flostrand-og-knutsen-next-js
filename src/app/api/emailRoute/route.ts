import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

// Simple in-memory cache for IP-tracking
const ipRequestCounts: Record<string, { count: number; firstRequestTime: number }> = {};

// Verify reCAPTCHA-token (v3)
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    console.error("Mangler RECAPTCHA_SECRET_KEY i miljøvariabler");
    return false;
  }

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secret}&response=${token}`,
  });

  const data = await res.json();

  // Check success, score and action
  return data.success && data.score >= 0.5 && data.action === "submit";
}

// API call from contact form
export async function POST(req: Request) {
  try {
    console.log("[EMAIL] Startet e-post-forespørsel");
    // Fetch IP from request headers
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("remote-address") || "unknown";
    console.log("[EMAIL] IP:", ip);

    const now = Date.now();

    if (!ipRequestCounts[ip]) {
      ipRequestCounts[ip] = { count: 1, firstRequestTime: now };
    } else {
      const timeSinceFirstRequest = now - ipRequestCounts[ip].firstRequestTime;

      if (timeSinceFirstRequest < RATE_LIMIT_WINDOW) {
        // Innenfor vindu, øk count
        ipRequestCounts[ip].count += 1;

        if (ipRequestCounts[ip].count > MAX_REQUESTS_PER_WINDOW) {
          return NextResponse.json({ error: `Rate limit exceeded. Maks ${MAX_REQUESTS_PER_WINDOW} forespørsler per minutt.` }, { status: 429 });
        }
      } else {
        // Window expired, reset counter and time
        ipRequestCounts[ip] = { count: 1, firstRequestTime: now };
      }
    }

    // JSON from client
    const body = await req.json();
    console.log("[EMAIL] Data mottatt fra klient:", body);

    const { name, email, message, recaptchaToken } = body;

    // Simple server side validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Manglende felt" }, { status: 400 });
    }

    if (!recaptchaToken) {
      return NextResponse.json({ error: "Mangler reCAPTCHA-token" }, { status: 400 });
    }

    // Validate reCAPTCHA
    const isCaptchaValid = await verifyRecaptcha(recaptchaToken);
    console.log("[EMAIL] reCAPTCHA valid:", isCaptchaValid);
    if (!isCaptchaValid) {
      return NextResponse.json({ error: "Ugyldig reCAPTCHA" }, { status: 403 });
    }

    // Transporter from gmail
    const transporter = nodemailer.createTransport({
      host: "send.one.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Define used email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Ny henvendelse fra ${name}`,
      text: `Navn: ${name}\nE-post: ${email}\n\nMelding:\n${message}`,
      replyTo: email,
    };

    // Send
    console.log("[EMAIL] Klar til å sende e-post med følgende info:", mailOptions);
    await transporter.sendMail(mailOptions);

    // Return OK
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[EMAIL ERROR]", error);
    console.error("[EMAIL ERROR - detaljer]", error);
    return NextResponse.json({ error: "Noe gikk galt under sending" }, { status: 500 });
  }
}
