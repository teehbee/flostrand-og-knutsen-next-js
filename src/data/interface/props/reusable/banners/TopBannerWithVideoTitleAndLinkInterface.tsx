import { LocaleString, LocalePortableText } from "@/data/language";

export interface TopBannerWitnVideoTitleAndLinkInterface {
  title?: LocaleString;
  textContent?: LocalePortableText;
  linkText?: LocaleString;
  linkDestination?: string;
  media: {
    video?: {
      asset?: {
        url: string;
      };
    };
    fallbackImage?: {
      asset?: {
        url: string;
      };
      alt?: LocaleString;
    };
  };
}
