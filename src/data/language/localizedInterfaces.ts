import { PortableTextBlock } from "@portabletext/react";

export interface LocaleString {
  _type?: string;
  no: string;
  en: string;
}

export interface LocaleText {
  no: string;
  en: string;
}

export interface LocalePortableText {
  no: PortableTextBlock[];
  en: PortableTextBlock[];
}
