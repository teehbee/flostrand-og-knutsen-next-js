import { LocaleString, LocalePortableText } from "@/data/language";

export interface ImageWithAlt {
  asset: {
    url: string;
  };
  alt?: LocaleString;
}

export interface TwoImagesWithTextAndLink {
  mainImage: ImageWithAlt;
  secondaryImage: ImageWithAlt;
  textContent?: LocalePortableText;
  linkText?: LocaleString;
  linkDestination?: string;
}
