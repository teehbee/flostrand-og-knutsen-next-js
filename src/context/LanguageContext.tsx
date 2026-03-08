"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export type Language = "no" | "en";

const languageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
}>({
  language: "no",
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [language, setLanguage] = useState<Language>("no");

  useEffect(() => {
    // Se på første del av path
    const firstSegment = pathname?.split("/")?.[1];

    // Oppdater språk ut fra URL
    if (firstSegment === "en") {
      setLanguage("en");
    } else {
      setLanguage("no");
    }
  }, [pathname]);

  return <languageContext.Provider value={{ language, setLanguage }}>{children}</languageContext.Provider>;
};

export const useLanguage = () => useContext(languageContext);
