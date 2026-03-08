import { LocaleString, LocalePortableText } from "@/data/language";

export interface Bilde {
  asset: {
    _ref?: string;
    _type?: string;
    url?: string;
  };
  alt?: LocaleString;
}

export interface Tjeneste {
  tittel: LocaleString;
  tekstinnhold: LocalePortableText;
  lenketekst?: LocaleString;
  lenkedestinasjon?: string;
  bilde?: Bilde;
}

export interface ServiceSelectorInterface {
  seksjonsTittel: LocaleString;
  tjenester: Tjeneste[];
}
