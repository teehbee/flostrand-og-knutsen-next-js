// Two images where one is large, the other is small, text with title and link below the small one

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getLocalizedPath } from "@/utils";
import { useLanguage } from "@/context/LanguageContext";

import { PortableTextBlock } from "@portabletext/react";

export interface ImageWithAlt {
  asset: {
    url: string;
  };
  alt?: string;
}

export interface TwoImagesWithTextAndLinkInterface {
  mainImage: ImageWithAlt;
  secondaryImage: ImageWithAlt;
  textContent: PortableTextBlock[];
  linkText?: string;
  linkDestination?: string;
}

export const TwoImagesWithTextTitleAndLink: React.FC<TwoImagesWithTextAndLinkInterface> = (content) => {
  const { mainImage, secondaryImage, textContent, linkDestination, linkText } = content;

  const { language } = useLanguage();
  return (
    <section>
      <div className="container-wide">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="img-clip-wrapper top-right pb-30 pb-lg-0">
              <Image className="aspect-ratio-1-1 img-cover" width={800} height={800} src={mainImage.asset?.url ?? ""} alt={mainImage.asset.url ?? ""}></Image>
            </div>
          </div>
          <div className="col-12 col-md-4 offset-md-1">
            <div className="img-clip-wrapper bottom-right pl-75 pl-md-0">
              {" "}
              <Image className="aspect-ratio-1-1 img-cover pb-30" width={400} height={400} src={secondaryImage.asset?.url ?? ""} alt={secondaryImage.asset.url ?? ""}></Image>
            </div>
            <div className="pb-30">
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
    </section>
  );
};
