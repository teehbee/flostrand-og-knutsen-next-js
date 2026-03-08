"use client";

import { CheckedIconWithBorder } from "@/assets/icon";
import { PortableText } from "@portabletext/react";
import { useScrollSelector } from "@/utils";
import { SelectorWithButtonsAndTextboxesProps } from "@/data/interface";

import { getLocalizedPath } from "@/utils";
import { useLanguage } from "@/context/LanguageContext";
// Disable if single language

export const SelectorWithButtonsAndTextboxes: React.FC<SelectorWithButtonsAndTextboxesProps> = ({ content }) => {
  // Imported useScrollSelector
  const { selectedIndex, handleClick, linkRefs } = useScrollSelector<HTMLAnchorElement>();

  // const for selected instance
  const selected = content.instances?.[selectedIndex];

  const { language } = useLanguage();
  // Disable if single language

  return (
    <section className="m-15 m-lg-30">
      <div className="container">
        <div className="row">
          {/* Title links for opening corresponding content */}
          <div className="col-12 pb-15 mb-30 mb-lg-75 d-flex justify-content-start align-items-center overflow-auto">
            {content.instances.map((instance, index) => (
              <a
                key={index}
                ref={(el) => {
                  linkRefs.current[index] = el;
                }}
                className={`mr-15 btn btn-selector ${selectedIndex === index ? " btn-selector-active" : ""}`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(index);
                }}
              >
                {instance.tittel}
              </a>
            ))}
          </div>
          {/* Text and image content */}
          <div className="col-12 col-lg-6 pr-lg-75 mb-75 mb-lg-0">
            <h2 className="mb-30 mb-lg-50 fs-2-rem-lg-3rem">{selected.tittel}</h2>
            <div className="mb-30 mb-lg-50">
              <PortableText value={selected.tekstinnhold} />
            </div>
            <div className="mb-30 mb-lg-50">
              <a className="btn btn-primary" href={getLocalizedPath(language, selected?.lenkedestinasjon ?? "#")}>
                {selected?.lenketekst}
              </a>
              {/* <a className="btn btn-primary" href={selected?.lenkedestinasjon}>
                {selected?.lenketekst}
              </a> */}
            </div>
          </div>
          {/* Loop textbox array */}
          <div className="col-12 col-lg-6 text-box-with-icon-text-box-col">
            {selected?.textboxes.map((textbox, index) => (
              <div key={index} className="text-box-with-icon-wrapper alt-bg-color pos-relative mb-45">
                <h3>{textbox.textBoxTitle}</h3>
                <div>
                  <PortableText value={textbox.textBoxContent} />
                </div>
                <div className="text-box-with-icon-wrapper-icon-wrapper alt-bg-color pos-absolute border-radius-full d-inline-block">
                  <CheckedIconWithBorder />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
