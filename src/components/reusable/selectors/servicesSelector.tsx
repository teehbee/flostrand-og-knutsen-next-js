"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { useScrollSelector } from "@/utils";
import { SelectorWithButtonsImageAndTextProps } from "@/data/interface";

import { getLocalizedPath } from "@/utils";
import { useLanguage } from "@/context/LanguageContext";
// Disable if single language

export const ServicesSelector: React.FC<SelectorWithButtonsImageAndTextProps> = ({ content }) => {
  const { selectedIndex, handleClick, linkRefs } = useScrollSelector<HTMLAnchorElement>();

  const selected = content.tjenester?.[selectedIndex];

  const { language } = useLanguage();
  // Disable if single language

  return (
    <section className="m-15 m-lg-30 alt-bg-color px-15 py-60 px-lg-0 py-lg-90 border-radius-5">
      <div className="container p-0">
        <div className="row">
          {/* Main title */}
          <div className="col-12 col-md-3 pb-60">
            <h2 className="fs-2-rem-lg-3rem">{content.seksjonsTittel}</h2>
          </div>

          {/* Title links for opening corresponding content */}
          <div className="col-12 col-md-8 offset-lg-1 d-flex justify-content-around align-items-center pb-45 pb-md-30 overflow-auto mb-15">
            {/* Mapping through titles and set index on click as well as add button classes for active title */}
            {content.tjenester.map((tjeneste, index) => (
              <a
                key={index}
                // Set reference for scrolling into view
                ref={(el) => {
                  linkRefs.current[index] = el;
                }}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(index);
                }}
                className={`mr-15 btn btn-selector ${selectedIndex === index ? " btn-selector-active" : ""}`}
              >
                {tjeneste.tittel}
              </a>
            ))}
          </div>

          {/* Selected content image */}
          <div className="col-12 col-md-6 col-xl-5 offset-md-0 pb-30 pb-md-0">{selected.bilde?.asset?.url && <Image width={379} height={210} className="img-cover aspect-ratio-3-2 border-radius-5" src={selected.bilde.asset.url} alt={selected.bilde.alt ?? ""} />}</div>

          {/* Text and links */}
          <div className="col-12 col-md-6 col-xl-5 offset-xl-1 d-flex flex-column align-items-start justify-content-center pl-md-30 pl-xl-0">
            <div className="pb-30 w-100">
              <PortableText value={selected.tekstinnhold} />
            </div>

            {selected.lenkedestinasjon && (
              <div className="w-100">
                <a className="btn btn-primary w-100" href={getLocalizedPath(language, selected.lenkedestinasjon)}>
                  {selected.lenketekst ?? "Les mer"}
                </a>
              </div>
            )}
            {/* {selected.lenkedestinasjon && (
              <div className="w-100">
                <a className="btn btn-primary w-100" href={selected.lenkedestinasjon}>
                  {selected.lenketekst ?? "Les mer"}
                </a>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
};
