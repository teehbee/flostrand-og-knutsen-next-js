import { LocaleString } from "@/data/language";

export interface ContactCTAInterface {
  contactCTA: {
    bilde?: {
      asset?: {
        url: string;
        _type?: string;
      };
      alt?: LocaleString;
    };
    tekst?: LocaleString;
    lenketekst?: LocaleString;
    lenkedestinasjon?: string;
  };
}
