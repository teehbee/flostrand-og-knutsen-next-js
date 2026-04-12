// Top banner with 80& viewheight, image, title, textcontent and CTA. Clipart in the bottom which can be commented out

import { TopBannerImageTitleTextLinkProps } from "@/data/interface/props/reusable";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getLocalizedPath } from "@/utils";
import { useLanguage } from "@/context/LanguageContext";

export const TopBannerImageTitleTextLink: React.FC<TopBannerImageTitleTextLinkProps> = (content) => {
  const { banner, title, linkText, linkDestination, textContent } = content;

  const { language } = useLanguage();

  return (
    <section className="p-0">
      <div className="top-banner-wrapper container-fluid h-80vh p-0 pos-relative">
        <Image className="img-cover filter-30-brightness" priority width={1920} height={650} src={banner.asset?.url ?? "/assets/img/placeholder/20240307_110601.jpg"} alt={banner?.alt ?? "Bildebeskrivelse mangler"} />
        <div className="overlay p-15 p-lg-30 d-flex flex-column justify-content-center">
          <div className="container-wide">
            <div className="row">
              <div className="col-12 col-lg-6">
                <h1 className="light-font fs-2-rem-lg-4rem pb-15">{title ?? "test"}</h1>
                <div className="fs-1-rem-lg-1-5rem light-font pb-15">
                  <PortableText value={textContent ?? []} />
                </div>
                <div>
                  <a className="btn btn-primary" href={getLocalizedPath(language, linkDestination ?? "#")}>
                    {linkText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Remove if no clip art is needed */}
        <div className="top-banner-bottom-clip"></div>
      </div>
    </section>
  );
};
