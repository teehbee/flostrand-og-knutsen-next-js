import { TopBannerInterface } from "../objects";
import { LocalePortableText, LocaleString } from "@/data/language";

export interface ContactPageInterface {
  _id: string;
  _type: "contact";
  topBanner?: TopBannerInterface;
  contactInfo: ContactInfoInterface;
}

export interface ContactInfoInterface {
  pageTitle: LocaleString;
  subHeading: LocaleString;
  textContent: LocalePortableText;
  phoneTitle: LocaleString;
  phone: string;
  emailTitle: LocaleString;
  email: string;
  adressTitle: LocaleString;
  address: string;
  zipAndCity: string;
  image: {
    asset: {
      url: string;
      _type?: string;
    };
    alt: LocaleString;
  };
}
