import { TopBannerInterface } from "../objects";
import { TextBoxWithTextContentAndTitleProps } from "../props/reusable";

export interface AboutUsPageInterface {
  _id: string;
  _type: "about-us";
  topBanner?: TopBannerInterface;
  textBoxWithPageName?: TextBoxWithTextContentAndTitleProps;
}
