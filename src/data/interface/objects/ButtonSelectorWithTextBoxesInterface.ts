import { LocaleString, LocalePortableText } from "@/data/language";

export interface Textbox {
  textBoxTitle?: LocaleString;
  textBoxContent?: LocalePortableText;
}

export interface Instance {
  tittel: LocaleString;
  tekstinnhold: LocalePortableText;
  lenketekst?: LocaleString;
  lenkedestinasjon?: string;
  textboxes?: Textbox[];
}

export interface ButtonSelectorWithTextBoxesInterface {
  instances: Instance[];
}
