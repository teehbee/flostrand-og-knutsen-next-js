// Array with image with clipped corners, title, text and cta button

import Image from "next/image";
import { getLocalizedPath } from "@/utils";
import { useLanguage } from "@/context/LanguageContext";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

import { PortableTextBlock } from "@portabletext/react";

export interface ImageTextAndLinkTileItem {
  _id: string;
  title: string;
  textContent?: PortableTextBlock[];
  imageUrl: string;
  imageAlt: string;
  linkText: string;
  linkHref: string;
}

export interface ImageTextAndLinkTilesProps {
  items: ImageTextAndLinkTileItem[];
}

export const ImageAndTextAlternating1: React.FC<ImageTextAndLinkTilesProps> = ({ items }) => {
  const { language } = useLanguage();

  return (
    <section>
      <div className="container">
        <div>
          {items.map((item) => (
            <div key={item._id} className="pb-30">
              <div className="d-flex flex-column flex-lg-row row pb-60">
                <div className="d-flex col-12 col-lg-6 align-items-center">
                  <div className="aspect-ratio-1">
                    <Image className="img-cover" src={item.imageUrl} alt={item.imageAlt} width={550} height={500} />
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-between col-12 col-lg-6">
                  <div>
                    <div className="pb-15">
                      <h3>{item.title}</h3>
                    </div>

                    <div className="pb-15">
                      {item.textContent?.length ? (
                        <div>
                          <PortableText value={item.textContent} />
                        </div>
                      ) : null}
                    </div>
                    <div className="pb-15">
                      <Link className="btn btn-primary" href={getLocalizedPath(language, item.linkHref)}>
                        {item.linkText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
