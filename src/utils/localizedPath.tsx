import { Language } from "@/context/LanguageContext";

export function getLocalizedPath(language: Language, path: string) {
  if (language === "no") return path;
  return `/${language}${path}`;
}
