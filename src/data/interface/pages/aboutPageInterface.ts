import { TopBannerInterface } from "../objects";
import { TextBoxWithTextContentAndTitleProps } from "../props/reusable";
import { BannerInterface } from "./contentInterfaces";
import { LocaleString, LocalePortableText } from "@/data/language";

export interface AboutUsPageInterface {
  _id: string;
  _type: "about-us";
  topBanner?: TopBannerInterface;
  textBoxWithPageName?: TextBoxWithTextContentAndTitleProps;
  upperArrayWithImageAndText?: ImageAndTextAlternateProps;
  bottomBanner?: BannerInterface;
  lowerArrayWithImageAndText?: ImageAndTextAlternateProps;
}

// Props for alternating images and text

export interface TileItem {
  _key: string;

  title?: LocaleString;

  textContent?: LocalePortableText;

  linkText?: LocaleString;

  linkDestination?: string;

  image?: {
    asset?: {
      _id?: string;
      url?: string;
    };

    alt?: LocaleString;
  };
}

export interface ImageAndTextAlternateProps {
  tiles?: TileItem[];
}
