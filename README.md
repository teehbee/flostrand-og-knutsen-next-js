🌍 Language Setup Guide

This project supports two operation modes:

🟢 Single-Language (Default)

For projects that only use one language (e.g. Norwegian, / without language prefix).

How to enable:

Layout
In app/layout.tsx

Remove or comment out:

import { LanguageProvider } from "@/context/LanguageContext";
import ClientLayoutWrapper from "./clientLayoutWrapper";

Remove the <LanguageProvider> and <ClientLayoutWrapper> wrappers around {children}.

Keep a simple structure:

<html lang="no">
  <body className={getFontClasses()}>
    <Header />
    {children}
    <Footer />
  </body>
</html>

Middleware
In middleware.ts, remove any language logic.
Use only the 404 handler:

const knownPaths = ["/", "/tjenester", "/prosjekter", "/kontakt", "/personvern"];
if (!knownPaths.includes(pathname)) {
url.pathname = "/404";
return NextResponse.rewrite(url);
}

Clean up (optional)

Delete or ignore:

/app/[lang]/
/context/LanguageContext.tsx
/components/reusable/LanguageSelector.tsx
/utils/useToggleLanguage.ts

Keep not-found.tsx and app/404/page.tsx for proper 404 behavior.

✅ Result:
All routes render in a single language (lang="no").
404 pages work correctly via /404.

🌍 Multi-Language Mode

For sites that support several languages via URL prefix (e.g. / for Norwegian, /en for English).

How to enable:

Restore / keep:

LanguageContext.tsx

ClientLayoutWrapper.tsx

LanguageSelector component

[lang]/ folder for translated routes

Wrap your layout:

<LanguageProvider>
  <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
</LanguageProvider>

Use multilingual middleware.ts:

const supportedLangs = ["en"];
const firstSegment = pathname.split("/")[1];
if (supportedLangs.includes(firstSegment)) return NextResponse.next();
// ...

✅ Result:

/ → Norwegian (default)

/en/... → English

404s handled for both correctly

🧩 Notes

app/not-found.tsx is used by Next internally (e.g. when calling notFound() from a server component).

app/404/page.tsx is used by the middleware rewrite for client-side 404s.

dynamicParams = true and dynamic = "force-dynamic" in layout.tsx ensure the router properly handles dynamic or unknown paths.

test
