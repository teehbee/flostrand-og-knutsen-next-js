"use client";

import Link from "next/link";
import { useSanityData } from "@/utils";
import { globalSettingsQuery } from "@/lib/queries";
import { SiteSettingsInterface } from "@/data/interface";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../../assets/icon";

import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedPath } from "@/utils";
// Remove if single language

function Footer() {
  const { language } = useLanguage();

  // CMS data
  const data = useSanityData<SiteSettingsInterface>(globalSettingsQuery);

  if (!data) {
    return null;
  }

  return (
    <footer>
      <div className="container-fluid px-30 py-45 py-lg-75">
        <div className="row pb-15 align-items-start">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
            <div>
              <Link href={getLocalizedPath(language, "/")}>Logo</Link>
            </div>
            <div className="d-flex pt-15 flex-column flex-lg-row">
              <Link className="pb-5 pr-10" href={getLocalizedPath(language, "/om-oss")}>
                {data.linkAboutUs?.[language] ?? "Om oss"}
              </Link>
              <div className="pr-10">•</div>
              <Link className="pb-5 pr-10" href={getLocalizedPath(language, "/kontakt")}>
                {data.linkContact?.[language] ?? "Kontakt"}
              </Link>
              <div className="pr-10">•</div>
              <Link className="pb-5 pr-10" href={getLocalizedPath(language, "/personvern")}>
                {data.linkPrivacy?.[language] ?? "Personvern"}
              </Link>
            </div>
            <div className="fs-0-75-rem-lg-0-875rem d-flex justify-content-between py-15">
              <div>{data.copyrightText?.[language] ?? "Alle rettigheter reservert"}</div>
            </div>
            <div className="fs-0-75-rem-lg-0-875rem">
              {data.websiteCreatedByText?.[language]}{" "}
              <a target="_blank" href={data.websiteCreatedByUrl}>
                {data.companyTitle}
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column align-items-start align-items-lg-end pt-30 pt-lg-0">
            <div>
              <Link className="btn btn-primary" href={getLocalizedPath(language, data.footerCTALinkDestination ?? "/")}>
                {data.footerCTALinkText?.[language]}
              </Link>
            </div>
            {/* <div>
              <Link className="btn btn-primary" href={data.footerCTALenkeDestinasjon ?? "/"}>
                {data.footerCTALenkeTekst?.[language]}
              </Link>
            </div> */}
            <div className="pt-15">
              <a href={`tel:${data.phone}`}>{data.phone ?? "Telefonnr mangler"}</a>
            </div>
            <div>
              <a href={`mailto:${data.email}`}>{data.email ?? "E-post mangler"}</a>
            </div>
            <div className="footer-socials-row d-flex fs-0-75-rem-lg-0-875rem pt-15">
              <div>
                <a className="social-link" target="_blank" rel="noopener noreferrer" href={data.facebookUrl} aria-label="Facebook lenke">
                  <FacebookIcon />
                </a>
              </div>
              <div>
                <a className="social-link" target="_blank" rel="noopener noreferrer" href={data.instagramUrl} aria-label="Instagram lenke">
                  <InstagramIcon />
                </a>
              </div>
              <div>
                <a className="social-link" target="_blank" rel="noopener noreferrer" href={data.linkedinUrl} aria-label="Linkedin lenke">
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
