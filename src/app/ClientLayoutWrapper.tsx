"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Header, Footer } from "@/components/navigation";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();

  return (
    <div lang={language}>
      <iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />

      <Header />
      {children}
      <Footer />
    </div>
  );
}
