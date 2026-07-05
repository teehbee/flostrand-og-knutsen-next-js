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
  const langs = ["", "en"];

  // Static pages
  const basePaths = ["", "om-oss", "kontakt", "personvern", "tjenester"];

  // Normalize pathname, removes trailing slash except for "/"
  const normalizePath = (path?: string | null) => {
    if (!path) return "/";
    return path !== "/" ? path.replace(/\/+$/, "") : path;
  };

  const makePath = (lang: string, path: string) => {
    const parts = [lang, path].filter(Boolean);
    return parts.length ? `/${parts.join("/")}` : "/";
  };

  const currentPath = normalizePath(pathname);

  // Static paths
  const knownStaticPaths = langs.flatMap((lang) => basePaths.map((p) => makePath(lang, p)));

  // Dynamic service paths: /tjenester/[slug] and /en/tjenester/[slug]
  const knownDynamicPaths = langs.map((lang) => {
    const prefix = makePath(lang, "tjenester");
    return new RegExp(`^${prefix}/[^/]+$`);
  });

  // Check if page is privacy page
  const isPrivacyPage = langs.some((lang) => currentPath === makePath(lang, "personvern"));

  // 404-page, if not amongst known pages
  const isKnownStaticPath = knownStaticPaths.includes(currentPath);
  const isKnownDynamicPath = knownDynamicPaths.some((regex) => regex.test(currentPath));

  const is404Page = pathname && !isKnownStaticPath && !isKnownDynamicPath;

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
