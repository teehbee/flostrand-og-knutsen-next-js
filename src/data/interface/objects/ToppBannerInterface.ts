import { LocaleString, LocalePortableText } from "@/data/language";

export interface TopBannerInterface {
  banner: {
    asset: {
      url: string;
      _type?: string;
    };
    alt: LocaleString;
  };
  title: LocaleString;
  textContent: LocalePortableText;
  linkText: LocaleString;
  linkDestination: string;
}
