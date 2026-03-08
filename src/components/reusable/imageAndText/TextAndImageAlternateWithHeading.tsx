import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { TextAndImageAlternateWithHeadingProps } from "@/data/interface";

import { getLocalizedPath } from "@/utils";
import { useLanguage } from "@/context/LanguageContext";
// Disable if single language

export const TextAndImageAlternateWithHeading: React.FC<TextAndImageAlternateWithHeadingProps> = ({ content }) => {
  const { language } = useLanguage();
  // Disable if single language

  return (
    <section>
      <div className="container">
        <div className="row mb-30 mb-lg-75">
          <div className="col-7 col-lg-4">
            <h2 className="fs-2-rem-lg-3rem">{content.seksjonsTittel ?? ""}</h2>
          </div>
        </div>
        <div className="alternating-tiles">
          {content.prosessSteg.map((prosess, index) => (
            <div key={index} className="row tile-row align-items-stretch h-lg-400 mb-30 mb-lg-75">
              <div className="col-12 col-lg-5 d-flex mb-30 mb-lg-0">
                <Image className="img-cover border-radius-5" width={530} height={400} src={prosess.bilde?.asset?.url || "/assets/img/placeholder/20240307_110601.jpg"} alt={prosess.bilde?.alt || "placeholder"}></Image>
              </div>
              <div className="col-12 col-lg-7 h-100">
                <div className="p-30 p-lg-75 alt-bg-color border-radius-5 h-100 d-flex flex-column justify-content-center">
                  <h3 className="mb-15">{prosess.tittel}</h3>
                  <div className="mb-15">
                    <PortableText value={prosess.tekstinnhold} />
                  </div>
                  {prosess.lenketekst && prosess.lenkedestinasjon && (
                    <div>
                      <a className="btn btn-primary" href={getLocalizedPath(language, prosess.lenkedestinasjon)}>
                        {prosess.lenketekst}
                      </a>
                    </div>
                  )}
                  {/* {prosess.lenketekst && prosess.lenkedestinasjon && (
                    <div>
                      <a className="btn btn-primary" href={prosess.lenkedestinasjon}>
                        {prosess.lenketekst}
                      </a>
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          ))}
          {/* From loop */}
        </div>
      </div>
    </section>
  );
};
