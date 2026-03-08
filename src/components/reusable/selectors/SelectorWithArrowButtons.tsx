import Image from "next/image";
import { useState } from "react";
import { PortableText } from "@portabletext/react";
import { SelectorWithArrowButtonsProps } from "@/data/interface";

import { getLocalizedPath } from "@/utils";
import { useLanguage } from "@/context/LanguageContext";
// Disable if single language

export const SelectorWithArrowButtons: React.FC<SelectorWithArrowButtonsProps> = ({ content }) => {
  const { language } = useLanguage();
  // Disable if single language

  const [currentIndex, setCurrentIndex] = useState(0);
  const instances = content.instance;

  const currentInstance = instances[currentIndex];

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < instances.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <section className="px-15 py-60 px-lg-0 py-lg-90">
      <div className="container">
        <div className="row">
          <div className="col-7 col-lg-4 mb-30 mb-lg-75">
            <h2 className="fs-2-rem-lg-3rem">{content.seksjonstittel}</h2>
          </div>
        </div>
      </div>
      <div className="alt-dark-bg-color m-15 m-lg-30 border-radius-5">
        <div className="row selector-with-arrows-row light-font">
          <div className="col-12 col-sm-10 offset-sm-1 offset-md-0 col-md-5 col-lg-4">
            <div className="selector-with-arrows-img-wrapper px-15 pt-30 p-md-0 h-100">
              <Image className="img-cover p-md-0" height={650} width={650} src={currentInstance?.bilde?.asset?.url ?? ""} alt={currentInstance?.bilde?.alt ?? "Bildebeskrivelse mangler"}></Image>
            </div>
          </div>
          <div className="col-12 col-sm-10 offset-sm-1 offset-md-0 col-md-6 d-flex flex-column justify-content-center py-30 py-lg-45">
            <div className="selector-with-arrows-row-text-content p-15">
              <h3 className="mb-15 light-font fs-1-5-rem-lg-2rem">{currentInstance?.tittel}</h3>
              <div className="mb-15">{currentInstance?.undertittel}</div>
              <div className="mb-15">
                <PortableText value={currentInstance?.tekstinnhold} />
              </div>
              <div className="mb-30">
                <a className="light-font text-underline-hover-none" href={currentInstance?.lenkedestinasjon}>
                  {currentInstance?.lenketekst}
                </a>
              </div>
              <div className="d-flex selector-with-arrows-arrows-wrapper">
                {currentIndex > 0 && (
                  <div onClick={handlePrevious} className="selector-arrow selector-arrow-left">
                    ←
                  </div>
                )}
                {currentIndex < instances.length - 1 && (
                  <div onClick={handleNext} className="selector-arrow selector-arrow-right">
                    →
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-end">
          <div className="d-flex justify-content-end">
            <a className="text-underline-hover-none" href={getLocalizedPath(language, content.lenkedestinasjon)}>
              {content.lenketekst}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
