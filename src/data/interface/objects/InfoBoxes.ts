import { LocaleString, LocalePortableText } from "@/data/language";

export interface InfoBoxes {
  tittel: LocaleString;
  tekstinnhold: LocalePortableText;
}

export interface InfoBoxesInterface {
  seksjonsTittel: LocaleString;
  bokser: InfoBoxes[];
}
