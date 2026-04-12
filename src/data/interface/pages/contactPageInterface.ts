import { TopBannerInterface } from "../objects";

export interface ContactPageInterface {
  _id: string;
  _type: "contact";
  topBanner?: TopBannerInterface;
}
