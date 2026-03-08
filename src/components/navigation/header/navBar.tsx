"use-client";

import { useSanityData } from "@/utils";
import { globalSettingsQuery } from "@/lib/queries";
import { useLanguage } from "@/context/LanguageContext";
import { SiteSettingsInterface, NavbarProps } from "@/data/interface";
import Link from "next/link";
import { NavLink } from "@/components/reusable";
import { useRef } from "react";
import { LanguageSelector } from "@/components/reusable";
import { getLocalizedPath } from "@/utils";

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  const { language } = useLanguage();
  const navRef = useRef<HTMLElement>(null);

  const data = useSanityData<SiteSettingsInterface>(globalSettingsQuery);

  if (!data) return null;

  return (
    <nav role="navigation" ref={navRef} className="main-navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center nav-container">
        <Link className="header-logo" href={getLocalizedPath(language, "/")} aria-label="Link til forsiden">
          Logo
        </Link>
        <div className="nav-desktop-and-menu-toggle d-flex align-items-center">
          <div className="nav-desktop-links d-none d-lg-block mr-30">
            <NavLink activeClassName="nav-active" className="nav-desktop-link" href={getLocalizedPath(language, "/")}>
              {data.linkForside?.[language] ?? "Hjem"}
            </NavLink>
            <NavLink activeClassName="nav-active" className="nav-desktop-link" href={getLocalizedPath(language, "/tjenester")}>
              {data.linkTjenester?.[language] ?? "Tjenester"}
            </NavLink>
            <NavLink activeClassName="nav-active" className="nav-desktop-link" href={getLocalizedPath(language, "/prosjekter")}>
              {data.linkProsjekter?.[language] ?? "Prosjekter"}
            </NavLink>
            <NavLink activeClassName="nav-active" className="nav-desktop-link" href={getLocalizedPath(language, "/kontakt")}>
              {data.linkKontakt?.[language] ?? "Kontakt"}
            </NavLink>
          </div>

          {/* Language selector with dropdown */}
          <LanguageSelector />
          {/* Hamburger menu toggle */}
          <div onClick={onMenuToggle} className="d-block d-lg-none menu-toggle" aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
