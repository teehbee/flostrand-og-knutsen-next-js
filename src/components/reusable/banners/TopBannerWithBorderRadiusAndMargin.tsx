// Top banner with heading textoverlay with heading, text, link and filter on image

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { TopBannerWithTitleTextAndLinkButtonProps } from "@/data/interface";

import { getLocalizedPath } from "@/utils";
import { useLanguage } from "@/context/LanguageContext";
// Disable if single language

export const ToppBannerWithBorderRadiusAndMargin: React.FC<TopBannerWithTitleTextAndLinkButtonProps> = (content) => {
  const { banner, tittel, tekstinnhold, lenketekst, lenkedestinasjon } = content;

  const { language } = useLanguage();
  // Disable if single language

  return (
    <section className="p-0">
      <div className="container-fluid h-80vh p-15 p-lg-30 pb-0 pos-relative">
        <Image className="border-radius-5 img-cover filter-30-brightness" priority width={1920} height={650} src={banner?.asset?.url ?? "/assets/img/placeholder/20240307_110601.jpg"} alt={banner.alt ?? "Bildebeskrivelse mangler"}></Image>
        <div className="overlay p-15 p-lg-30 d-flex flex-column justify-content-center">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 light-font">
                <h1 className="light-font fs-2-rem-lg-4rem">{tittel ?? ""}</h1>
                <div>
                  <PortableText value={tekstinnhold ?? []} />
                </div>
                <div>
                  <a className="btn btn-primary" href={getLocalizedPath(language, lenkedestinasjon ?? "#")}>
                    {lenketekst}
                  </a>
                </div>
                {/* <div>
                  <a className="btn btn-primary" href={lenkedestinasjon}>
                    {lenketekst}
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
