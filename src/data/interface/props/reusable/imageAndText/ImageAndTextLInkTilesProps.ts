import { PortableTextBlock } from "@portabletext/react";

export interface ImageTextAndLinkTileItem {
  _id: string;
  title: string;
  textContent?: PortableTextBlock[];
  imageUrl: string;
  imageAlt: string;
  linkText: string;
  linkHref: string;
}

export interface ImageTextAndLinkTilesProps {
  items: ImageTextAndLinkTileItem[];
}
