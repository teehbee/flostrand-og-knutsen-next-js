import { TopBannerInterface, AlternateTextImageInterface } from "../objects";

export interface ProjectsPageInterface {
  _id: string;
  _type: "prosjekter";
  toppbanner?: TopBannerInterface;
  prosjekter?: AlternateTextImageInterface;
}
