"use client";

import { TopBannerImageTitleTextLinkProps } from "@/data/interface/props/reusable";
import Image from "next/image";
import { getLocalizedPath } from "@/utils";
import { useLanguage } from "@/context/LanguageContext";
import { PortableText } from "@portabletext/react";

export const BannerTopBottomClipArtWithTextContent: React.FC<TopBannerImageTitleTextLinkProps> = (content) => {
  const { banner, title, linkText, linkDestination, textContent } = content;

  const { language } = useLanguage();

  return (
    <section className="pb-45 pb-lg-90">
      <div className="top-bottom-clip-art container-fluid p-0 pos-relative h-350-lg-700">
        <Image className="img-cover filter-30-brightness" priority width={1920} height={650} src={banner.asset?.url ?? ""} alt={banner?.alt ?? "Bildebeskrivelse mangler"} />
        <div className="overlay p-15 p-lg-30 d-flex flex-column justify-content-center">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div>
                  <h1 className="light-font fs-2-rem-lg-3rem pb-15">{title ?? ""}</h1>
                </div>
                <div className="light-font pb-15">
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
      </div>
    </section>
  );
};
