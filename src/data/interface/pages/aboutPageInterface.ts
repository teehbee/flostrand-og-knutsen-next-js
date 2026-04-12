import { TopBannerInterface } from "../objects";

export interface AboutUsPageInterface {
  _id: string;
  _type: "about-us";
  topBanner?: TopBannerInterface;
}
