// Interface for component

import { PortableTextBlock } from "node_modules/@portabletext/react/dist/index.cjs";

export interface TopBannerWithVideoTitleAndLinkProps {
  title?: string;
  linkText?: string;
  textContent?: PortableTextBlock[];
  linkDestination?: string;
  media: {
    video?: {
      asset?: {
        url: string;
      };
    };
    fallbackImage?: {
      asset?: {
        url: string;
      };
      alt?: string;
    };
  };
}
