"use client";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/context/LanguageContext";

export function useToggleLanguage() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = (newLang: string) => {
    setLanguage(newLang as Language);
  };

  return { language, toggleLanguage };
}
