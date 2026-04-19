import { PortableTextBlock } from "@portabletext/react";

interface Array {
  title: string;
  subTitle: string;
  textContent: PortableTextBlock[];
  linkText?: string;
  linkDestination?: string;
  image?: {
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
