import { TopBannerWitnVideoTitleAndLinkInterface, TextBoxWithTextContentAndTitleProps, TwoImagesWithTextAndLink } from "../props/reusable";
import { BannerInterface } from "./contentInterfaces";

export interface FrontpageInterface {
  _id: string;
  _type: "frontpage";
  topBanner?: TopBannerWitnVideoTitleAndLinkInterface;
  frontpageUpperTextBox?: TextBoxWithTextContentAndTitleProps;
  frontpageLowerTextBox?: TextBoxWithTextContentAndTitleProps;
  frontpageTiles?: TwoImagesWithTextAndLink;
  bottomBanner?: BannerInterface;
}
