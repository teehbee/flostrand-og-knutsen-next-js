import { LocaleString, LocalePortableText } from "@/data/language";

export interface Bilde {
  asset: {
    _ref?: string;
    _type?: string;
    url?: string;
  };
  alt?: LocaleString;
}

export interface Process {
  tittel: LocaleString;
  tekstinnhold: LocalePortableText;
  lenketekst?: LocaleString;
  lenkedestinasjon?: string;
  bilde?: Bilde;
}

export interface StepsArrayInterface {
  seksjonsTittel: LocaleString;
  prosessSteg: Process[];
}
