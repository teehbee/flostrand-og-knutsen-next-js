import { LocaleString, LocalePortableText } from "@/data/language";
import { TopBannerInterface } from "../objects";

export interface ServicePageInterface {
  _id: string;
  _type: "service";
  slug: string;

  subPageTitle?: LocaleString;
  subPageTextContent?: LocalePortableText;

  topBanner?: TopBannerInterface;

  textBoxWithPageName?: {
    title?: LocaleString;
    textBlock?: LocalePortableText;
  };

  tiles?: {
    _key: string;
    image?: {
      asset?: {
        url: string;
      };
      alt?: LocaleString;
    };
    title?: LocaleString;
    textContent?: LocalePortableText;
    linkText?: LocaleString;
    linkDestination?: string;
  }[];
}
