import { LocaleString, LocalePortableText } from "@/data/language";

export interface TopBannerInterface {
  banner: {
    asset: {
      url: string;
      _type?: string;
    };
    alt: LocaleString;
  };
  tittel: LocaleString;
  tekstinnhold: LocalePortableText;
  lenketekst: LocaleString;
  lenkedestinasjon: string;
}
