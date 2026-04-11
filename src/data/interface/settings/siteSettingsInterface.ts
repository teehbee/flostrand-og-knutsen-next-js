import { LocaleString } from "@/data/language";

export interface SiteSettingsInterface {
  siteTitle: string;
  companyTitle: string;
  siteURL: string;
  orgNumber: string;
  logo: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  phone?: string;
  email?: string;
  address?: string;
  zipAndCity?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  linkFrontpage?: LocaleString;
  linkContact?: LocaleString;
  linkAboutUs?: LocaleString;
  linkPrivacy?: LocaleString;
  copyrightText?: LocaleString;
  websiteCreatedByText?: LocaleString;
  websiteCreatedByUrl?: string;
  footerCTALinkText?: LocaleString;
  footerCTALinkDestination?: string;
}
