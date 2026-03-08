import { TopBannerInterface, AboutContentInterface, ContactFormInterface, ContactSectionSelectorInterface } from "../objects";

export interface ContactPageInterface {
  _id: string;
  _type: "kontakt";
  toppbanner?: TopBannerInterface;
  portrettOgTekstLarge?: AboutContentInterface;
  kontaktSkjemaInnhold?: ContactFormInterface;
  kontaktSideVelger?: ContactSectionSelectorInterface;
}
