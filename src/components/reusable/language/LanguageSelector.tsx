"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/context/LanguageContext";

const LanguageSelector: React.FC = () => {
  const { language } = useLanguage();
  // Get language without setting
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  // To navigate between languages

  const pathname = usePathname();
  // To see current path

  const altLanguage: Language = language === "no" ? "en" : "no";
  // Add more languages here if needed

  const flagMap: Record<Language, string> = {
    no: "/assets/flags/flag_no.png",
    en: "/assets/flags/flag_uk.png",
  };

  // Add more language flags here if needed

  const handleLanguageChange = (newLang: Language) => {
    const segments = pathname.split("/").filter(Boolean);
    // Changes url to change language

    if (segments[0] === "en") {
      segments.shift();
    }
    // Remove any previous prefix

    const newPath =
      newLang === "no"
        ? `/${segments.join("/")}` // Norwegian when no prefix
        : `/${newLang}/${segments.join("/")}`; // English with prefix
    // Build new language path

    router.push(newPath);
    // Navigate to new path

    setDropdownOpen(false);
    // Close language dropdown
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownOpen && wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);
  // Close dropdown when clicking outside

  return (
    <div ref={wrapperRef} className="language-dropdown-desktop pos-relative mr-10">
      {/* Button to open language dropdown */}
      <div onClick={() => setDropdownOpen(!dropdownOpen)} className="d-flex align-items-center justify-content-between cursor-pointer" tabIndex={0} role="button" onKeyDown={(e) => e.key === "Enter" && setDropdownOpen(!dropdownOpen)} aria-label="Språkvalg" aria-expanded={dropdownOpen}>
        <span className="language-menu-text text-uppercase mr-5">{language}</span>
        <Image className="img-full" src={flagMap[language]} alt={`${language} flag`} width={24} height={16} />
      </div>

      {/* Dropdown with alternative language */}
      {dropdownOpen && (
        <div className="language-dropdown-menu pos-absolute">
          <div onClick={() => handleLanguageChange(altLanguage)} className="d-flex align-items-center justify-content-between cursor-pointer" tabIndex={0} role="button" onKeyDown={(e) => e.key === "Enter" && handleLanguageChange(altLanguage)}>
            <span className="language-menu-text text-uppercase mr-5">{altLanguage}</span>
            <Image className="img-full" src={flagMap[altLanguage]} alt={`${altLanguage} flag`} width={24} height={16} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
