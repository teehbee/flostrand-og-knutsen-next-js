import { PortableTextBlock } from "node_modules/@portabletext/react/dist/index.cjs";

export interface TopBannerWithTitleTextAndLinkButtonProps {
  tittel?: string;
  tekstinnhold?: PortableTextBlock[];
  lenketekst?: string;
  lenkedestinasjon?: string;
  banner: {
    asset?: {
      url: string;
    };
    alt?: string;
  };
}
