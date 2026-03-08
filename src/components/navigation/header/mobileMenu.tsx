"use-client";

import { globalSettingsQuery } from "@/lib/queries";
import { SiteSettingsInterface, MobileMenuProps } from "@/data/interface";
import { NavLink } from "@/components/reusable";
import Link from "next/link";
import { useRef } from "react";
import { useMenuBehavior, useSanityData } from "../../../utils";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedPath } from "../../../utils";

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose, isMenuOpen }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useMenuBehavior({ isMenuOpen, menuRef, onClose });

  // CMS data

  const { language } = useLanguage();

  const data = useSanityData<SiteSettingsInterface>(globalSettingsQuery);

  if (!data) {
    return null;
  }

  return (
    <div className={`menu-backdrop ${isMenuOpen ? "show" : ""}`}>
      <div ref={menuRef} className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header d-flex justify-content-between">
          <Link href={getLocalizedPath(language, "/")}>Logo</Link>
          <button onClick={onClose} className="mobile-menu-close" aria-label="Close menu">
            <div className="bar bar1" />
            <div className="bar bar2" />
          </button>
        </div>
        <div className="mobile-menu-wrapper d-flex flex-column justify-content-center align-items-center">
          <nav className="d-flex flex-column text-center">
            <NavLink activeClassName="nav-active" href={getLocalizedPath(language, "/")} onClick={onClose}>
              {data.linkForside?.[language] ?? "Hjem"}
            </NavLink>
            <NavLink activeClassName="nav-active" href={getLocalizedPath(language, "/tjenester")} onClick={onClose}>
              {data.linkTjenester?.[language] ?? "Tjenester"}
            </NavLink>
            <NavLink activeClassName="nav-active" href={getLocalizedPath(language, "/prosjekter")} onClick={onClose}>
              {data.linkProsjekter?.[language] ?? "Prosjekter"}
            </NavLink>
            <NavLink activeClassName="nav-active" href={getLocalizedPath(language, "/kontakt")} onClick={onClose}>
              {data.linkKontakt?.[language] ?? "Kontakt"}
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
