import { PortableTextBlock } from "@portabletext/react";

interface Process {
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

export interface TextAndImageAlternateWithHeadingProps {
  content: {
    seksjonsTittel: string;
    prosessSteg: Process[];
  };
}
