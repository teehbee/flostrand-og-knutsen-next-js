// Middleware for correct rendering of 404 page while on Norwegian pages

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const url = req.nextUrl.clone();
  const { pathname } = url;

  // Ignore api, next internals, and static files
  if (pathname.startsWith("/api") || pathname.startsWith("/_next") || pathname.includes(".")) {
    return NextResponse.next();
  }

  // English routes
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return NextResponse.next();
  }

  // Known Norwegian static routes
  const knownPaths = ["/", "/tjenester", "/om-oss", "/kontakt", "/personvern"];

  if (knownPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // Dynamic service pages
  if (pathname.startsWith("/tjenester/")) {
    return NextResponse.next();
  }

  // Everything else -> 404
  url.pathname = "/404";
  return NextResponse.rewrite(url);
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
