import { PortableTextBlock } from "@portabletext/react";

export interface Service {
  tittel: string;
  tekstinnhold: PortableTextBlock[];
  lenketekst?: string;
  lenkedestinasjon?: string;
  bilde?: {
    asset?: {
      url: string;
    };
    alt?: string;
  };
}

export interface SelectorWithButtonsImageAndTextProps {
  content: {
    seksjonsTittel: string;
    tjenester: Service[];
  };
}
