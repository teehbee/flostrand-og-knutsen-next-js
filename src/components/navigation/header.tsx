"use client";

import { useRef, useState } from "react";
import { MobileMenu, Navbar } from "./header/index";
import { useStickyScroll } from "../../utils";
import { usePathname } from "next/navigation";
import { HeaderProps } from "@/data/interface/navigation/headerInterface";

const Header: React.FC<HeaderProps> = ({ stickyOnscroll = true }) => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const { isSticky, spacerHeight } = useStickyScroll(stickyOnscroll, headerRef);

  // Language support
  // Define supported languages here
  const langs = ["", "en"];

  // Define base paths here
  const basePaths = ["", "tjenester", "prosjekter", "kontakt", "personvern"];

  // Automatically define path for all languages
  const knownPaths = langs.flatMap((lang) =>
    basePaths.map((p) => {
      // Make sure correct syntax
      if (lang === "") return p === "" ? "/" : `/${p}`;
      return p === "" ? `/${lang}` : `/${lang}/${p}`;
    })
  );

  // Page detection

  // Check if page is privacy page
  const isPrivacyPage = langs.some((lang) => pathname?.endsWith(`${lang ? `/${lang}` : ""}/personvern`));

  // 404-page, if not amongst known pages
  const is404Page = pathname && !knownPaths.includes(pathname);

  // Render
  return (
    <>
      <header ref={headerRef} className={`main-header ${isSticky ? "is-sticky" : ""} ${isPrivacyPage || is404Page ? "header-abnormal" : ""}`}>
        <Navbar onMenuToggle={() => setMenuOpen(true)} />
        <MobileMenu isMenuOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </header>

      {isSticky && <div style={{ height: spacerHeight }} />}
    </>
  );
};

export default Header;
