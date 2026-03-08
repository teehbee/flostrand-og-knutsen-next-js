// Large single instance of image and rich text including header

import { ImageAndTextProps } from "@/data/interface/props";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { getLocalizedPath } from "@/utils";
import { useLanguage } from "@/context/LanguageContext";
// Disable if single language

export const SingleImageAndTextLarge: React.FC<ImageAndTextProps> = (content) => {
  const { tittel, bilde, tekstinnhold, lenketekst, lenkedestinasjon } = content;

  const { language } = useLanguage();
  // Disable if single language

  return (
    <section className="pb-45 pb-lg-90">
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-12 col-sm-7 mb-30 mb-sm-0 pr-lg-75">
            <div className="border-radius-5 alt-bg-color p-45 h-100 d-flex flex-column justify-content-between">
              <h2 className="mb-15 mb-lg-30">{tittel}</h2>
              <div className="mb-15 mb-lg-30">
                {" "}
                <PortableText value={tekstinnhold ?? []} />{" "}
              </div>
              <div>
                <a className="btn btn-primary" href={getLocalizedPath(language, lenkedestinasjon ?? "#")}>
                  {lenketekst ?? "Lenketekst"}
                </a>
              </div>
              {/* <div>
                <a className="btn btn-primary" href={lenkedestinasjon}>
                  {lenketekst ?? "Lenketekst"}
                </a>
              </div> */}
            </div>
          </div>
          <div className="col-12 col-sm-5">
            <div>
              <Image className="img-cover" height={590} width={530} src={bilde?.asset?.url ?? "/assets/img/placeholder/20240307_110601.jpg"} alt={bilde?.alt ?? ""}></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
