import { LocaleString } from "@/data/language";

export interface BannerInterface {
  banner?: {
    asset?: {
      _id?: string;
      url?: string;
    };
    alt?: LocaleString;
  };
  title?: LocaleString;
  linkText?: LocaleString;
  linkDestination?: string;
}
