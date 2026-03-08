import { LocaleString } from "@/data/language";

export interface ContactFormInterface {
  tittel?: LocaleString;
  navn?: LocaleString;
  epost?: LocaleString;
  melding?: LocaleString;
  paakrevd?: LocaleString;
  send?: LocaleString;
  sender?: LocaleString;
  suksess?: LocaleString;
  feil?: LocaleString;
  placeholderName?: LocaleString;
  placeholderEmail?: LocaleString;
  placeholderMessage?: LocaleString;
  godkjenning?: LocaleString;
  paakrevdFelt?: LocaleString;
}
