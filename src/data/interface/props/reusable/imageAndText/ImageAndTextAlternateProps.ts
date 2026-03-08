import { PortableTextBlock } from "@portabletext/react";

interface Array {
  tittel: string;
  undertittel: string;
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

export interface ImageAndTextAlternateProps {
  content: {
    tiles: Array[];
  };
}
