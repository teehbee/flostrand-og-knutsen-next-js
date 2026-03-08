import { TopBannerInterface, ButtonSelectorWithTextBoxesInterface, AccordionsWithTitleInterface } from "../objects";

export interface ServicesPageInterface {
  _id: string;
  _type: "tjenester";
  toppbanner?: TopBannerInterface;
  tjenestevelger: ButtonSelectorWithTextBoxesInterface;
  faqAccordion: AccordionsWithTitleInterface;
}
