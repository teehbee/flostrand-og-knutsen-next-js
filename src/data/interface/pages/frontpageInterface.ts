import { ServiceSelectorInterface, TopBannerInterface, StepsArrayInterface, InfoBoxesInterface } from "../objects";

export interface FrontpageInterface {
  _id: string;
  _type: "forside";
  toppbanner?: TopBannerInterface;
  tjenesteVelger?: ServiceSelectorInterface;
  stepsArray?: StepsArrayInterface;
  infoBokser?: InfoBoxesInterface;
}
