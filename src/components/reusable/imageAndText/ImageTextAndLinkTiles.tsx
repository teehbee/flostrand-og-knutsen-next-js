// Array with image, title, textcontent and button
// Cut corner included, remove if not needed

import Image from "next/image";
import { getLocalizedPath } from "@/utils";
import { useLanguage } from "@/context/LanguageContext";
import type { PortableTextBlock } from "@portabletext/types";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

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

export const ImageTextAndLinkTiles: React.FC<ImageTextAndLinkTilesProps> = ({ items }) => {
  const { language } = useLanguage();

  return (
    <section>
      <div className="container">
        <div className="row gy-5">
          {/* Map through cols here */}
          {items.map((item) => (
            <div key={item._id} className="col-12 col-md-6 pb-30 pb-lg-0">
              <div>
                <div className="pb-30 img-clip-wrapper bottom-right">
                  <Image className="aspect-ratio-3-2" src={item.imageUrl} alt={item.imageAlt} width={800} height={600} style={{ width: "100%", height: "auto" }} />
                </div>

                <h3 className="dark-font">{item.title}</h3>

                {item.textContent ? (
                  <div className="pb-5">
                    <PortableText value={item.textContent} />
                  </div>
                ) : null}

                <Link className="btn btn-primary" href={getLocalizedPath(language, item.linkHref)}>
                  {item.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
