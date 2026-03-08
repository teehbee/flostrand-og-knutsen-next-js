import { PortableTextBlock } from "@portabletext/react";

export interface ImageAndTextProps {
  bilde?: {
    asset?: {
      url: string;
      _type?: string;
    };
    alt?: string;
  };
  tittel?: string;
  tekstinnhold: PortableTextBlock[];
  lenketekst?: string;
  lenkedestinasjon?: string;
}
