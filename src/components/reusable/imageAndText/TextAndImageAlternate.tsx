import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { ImageAndTextAlternateProps } from "@/data/interface";

import { getLocalizedPath } from "@/utils";
import { useLanguage } from "@/context/LanguageContext";
// Disable if single language

export const TextAndImageAlternate: React.FC<ImageAndTextAlternateProps> = ({ content }) => {
  const { language } = useLanguage();
  // Disable if single language

  return (
    <section>
      <div className="container">
        <div className="alternating-tiles">
          {content.tiles.map((tile, index) => (
            <div key={index} className="row tile-row align-items-stretch h-lg-400 mb-30 mb-lg-75">
              <div className="col-12 col-lg-5 d-flex mb-30 mb-lg-0">
                <Image className="img-cover border-radius-5" width={530} height={400} src={tile.bilde?.asset?.url || "/assets/img/placeholder/20240307_110601.jpg"} alt={tile.bilde?.alt || "placeholder"}></Image>
              </div>
              <div className="col-12 col-lg-7 h-100">
                <div className="p-30 p-lg-75 alt-bg-color border-radius-5 h-100 d-flex flex-column justify-content-center">
                  <h3 className="mb-15">{tile.tittel}</h3>
                  <div className="mb-15">{tile.undertittel}</div>
                  <div className="mb-15">
                    <PortableText value={tile.tekstinnhold} />
                  </div>
                  {tile.lenketekst && tile.lenkedestinasjon && (
                    <div>
                      <a className="btn btn-primary" href={getLocalizedPath(language, tile.lenkedestinasjon)} target="_blank" rel="noopener noreferrer">
                        {tile.lenketekst}
                      </a>
                    </div>
                  )}
                  {/* {tile.lenketekst && tile.lenkedestinasjon && (
                    <div>
                      <a className="btn btn-primary" href={tile.lenkedestinasjon}>
                        {tile.lenketekst}
                      </a>
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
