import { TopBannerWitnVideoTitleAndLinkInterface, TextBoxWithTextContentAndTitleProps, TwoImagesWithTextAndLink } from "../props/reusable";

export interface FrontpageInterface {
  _id: string;
  _type: "frontpage";
  topBanner?: TopBannerWitnVideoTitleAndLinkInterface;
  frontpageUpperTextBox?: TextBoxWithTextContentAndTitleProps;
  frontpageLowerTextBox?: TextBoxWithTextContentAndTitleProps;
  frontpageTiles?: TwoImagesWithTextAndLink;
}
