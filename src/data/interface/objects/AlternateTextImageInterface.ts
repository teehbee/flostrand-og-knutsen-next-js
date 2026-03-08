import { LocaleString, LocalePortableText } from "@/data/language";

export interface Bilde {
  asset: {
    _ref?: string;
    _type?: string;
    url?: string;
  };
  alt?: LocaleString;
}

export interface Array {
  tittel: LocaleString;
  undertittel: LocaleString;
  tekstinnhold: LocalePortableText;
  lenketekst?: LocaleString;
  lenkedestinasjon?: string;
  bilde?: Bilde;
}

export interface AlternateTextImageInterface {
  tiles: Array[];
}
