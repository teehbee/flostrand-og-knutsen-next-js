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
          <nav className="d-flex flex-column">
            <NavLink activeClassName="nav-active" href={getLocalizedPath(language, "/")} onClick={onClose}>
              {data.linkFrontpage?.[language] ?? "Hjem"}
            </NavLink>
            <div className="pb-15">
              <div className="dark-font fw-700 pb-5">Tjenester</div>
              <div className="pl-15">
                <div className="dark-font">Tjeneste 1</div>
                <div className="dark-font">Tjeneste 2</div>
                <div className="dark-font">Tjeneste 3</div>
              </div>
            </div>

            <NavLink activeClassName="nav-active" href={getLocalizedPath(language, "/om-oss")} onClick={onClose}>
              {data.linkAboutUs?.[language] ?? "Om oss"}
            </NavLink>
            <NavLink activeClassName="nav-active" href={getLocalizedPath(language, "/kontakt")} onClick={onClose}>
              {data.linkContact?.[language] ?? "Kontakt"}
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
