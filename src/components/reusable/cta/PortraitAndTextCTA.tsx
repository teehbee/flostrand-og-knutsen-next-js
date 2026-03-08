// Banner with portrait on the left with negative margin, text and link tekst on the right

import Image from "next/image";
import { PortraitAndTextCTAProps } from "@/data/interface";

import { getLocalizedPath } from "@/utils";
import { useLanguage } from "@/context/LanguageContext";
// Disable if single language

export const PortraitAndTextCTA: React.FC<PortraitAndTextCTAProps> = (content) => {
  const { bilde, tekst, lenkedestinasjon, lenketekst } = content;

  const { language } = useLanguage();
  // Disable if single language

  return (
    <section className="alt-dark-bg-color m-15 m-lg-30 border-radius-5 p-0 mt-100 mt-lg-200px">
      <div className="container py-30 py-lg-75">
        <div className="row align-items-center">
          <div className="col-6 col-lg-3">
            <div className="mt--75 mt-lg--150">
              <Image className="border-radius-5 img-cover" width={412} height={524} src={bilde?.asset?.url ?? ""} alt={bilde?.alt ?? "Bildebeskrivelse mangler"}></Image>
            </div>
          </div>
          <div className="col-12 col-lg-4 offset-lg-1 pt-30 pt-lg-0">
            <h2 className="light-font pb-15 pb-lg-30 fs-1-5-rem-lg-2-25rem">{tekst ?? "Tror du jeg kan hjelpe deg med ditt prosjekt?"}</h2>
            <div>
              <a className="light-font text-underline-hover-none" href={getLocalizedPath(language, lenkedestinasjon ?? "#")}>
                {lenketekst ?? "Ta kontakt i dag for et godt tilbud"}
              </a>
            </div>
            {/* <div>
              <a className="light-font text-underline-hover-none" href={lenkedestinasjon ?? "#"}>
                {lenketekst ?? "Ta kontakt i dag for et godt tilbud"}
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
