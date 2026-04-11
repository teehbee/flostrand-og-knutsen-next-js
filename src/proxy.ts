// Middleware for correct rendering of 404 page while on Norwegian pages

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const url = req.nextUrl;
  const { pathname } = url;

  // Ignore api, and other static files
  if (pathname.startsWith("/api") || pathname.startsWith("/_next") || pathname.includes(".")) {
    return NextResponse.next();
  }

  // Language list, add more if needed
  const supportedLangs = ["en"];
  const firstSegment = pathname.split("/")[1]; // f.eks. "en", "kontakt", "enfhdsd"

  // Let Next handle if language
  if (supportedLangs.includes(firstSegment)) {
    return NextResponse.next();
  }

  // Known Norwegian paths
  const knownPaths = ["/", "/tjeneste", "/om-oss", "/kontakt", "/personvern"];

  // If unknown path, redirect to 404
  if (!knownPaths.includes(pathname)) {
    url.pathname = "/404";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

/* 

Comment out if no language selection

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ignorer API og statiske filer
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Kjente ruter (oppdater etter behov)
  const knownPaths = ["/", "/tjenester", "/prosjekter", "/kontakt", "/personvern"];

  if (!knownPaths.includes(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = "/404";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
} */
