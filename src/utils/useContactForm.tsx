"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

// Interface for contact data

export interface ContactData {
  name: string;
  email: string;
  message: string;
  recaptchaToken?: string;
}

// Yup validation

const contactSchema = yup.object().shape({
  name: yup.string().required("Feltet er påkrevd"),
  email: yup.string().email("Vennligst skriv inn en gyldig e-postadresse").required("Feltet er påkrevd"),
  message: yup.string().required("Feltet er påkrevd"),
});

export function useContactForm() {
  // State showing if form is sending
  const [isSending, setIsSending] = useState(false);
  // State showing if form is sent
  const [formSent, setFormSent] = useState<null | "success" | "error">(null);

  // Initialize react-hook-form with Yup as validation resolver
  // Mode: "onSubmit" makes form validation when form is sent
  const form = useForm<ContactData>({
    resolver: yupResolver(contactSchema),
    mode: "onSubmit",
  });

  // Function run when form is sent
  async function onSubmit(data: ContactData) {
    setIsSending(true);
    setFormSent(null);

    try {
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;
      const token = await window.grecaptcha.execute(siteKey, { action: "submit" });

      const res = await fetch("/api/emailRoute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken: token }),
      });

      // Error if not okay
      if (!res.ok) throw new Error("Noe gikk galt ved sending");

      setFormSent("success");
      form.reset();
    } catch (error) {
      setFormSent("error");
      console.error(error);
    } finally {
      setIsSending(false);
    }
  }

  // Return all methods and states
  return {
    ...form,
    isSending,
    formSent,
    onSubmit,
  };
}
