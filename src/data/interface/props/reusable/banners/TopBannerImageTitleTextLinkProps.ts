import { PortableTextBlock } from "node_modules/@portabletext/react/dist/index.cjs";

export interface TopBannerImageTitleTextLinkProps {
  title?: string;
  textContent?: PortableTextBlock[];
  linkText?: string;
  linkDestination?: string;
  banner: {
    asset?: {
      url: string;
    };
    alt?: string;
  };
}
