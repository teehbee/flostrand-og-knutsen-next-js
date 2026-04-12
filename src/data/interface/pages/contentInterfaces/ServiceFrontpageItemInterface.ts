import { LocaleString, LocalePortableText } from "@/data/language";

export interface ServiceFrontpageItemInterface {
  _id: string;
  _type: "service";
  title?: string;
  slug: string;
  subPageImage?: {
    asset?: {
      _id: string;
      url: string;
    };
    alt?: LocaleString;
  };
  subPageTitle?: LocaleString;
  subPageTextContent?: LocalePortableText;
  subPageLinkText?: LocaleString;
  subPageLinkDestination?: string;
}
