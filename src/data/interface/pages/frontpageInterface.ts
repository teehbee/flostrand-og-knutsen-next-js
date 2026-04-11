import { TopBannerWitnVideoTitleAndLinkInterface } from "../props/reusable";

export interface FrontpageInterface {
  _id: string;
  _type: "frontpage";
  topBanner?: TopBannerWitnVideoTitleAndLinkInterface;
}
