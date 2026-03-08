import { LocaleString, LocalePortableText } from "@/data/language";

interface Accordions {
  title: LocaleString;
  textContent: LocalePortableText;
}

export interface AccordionsWithTitleInterface {
  sectionTitle: LocaleString;
  accordions: Accordions[];
}
