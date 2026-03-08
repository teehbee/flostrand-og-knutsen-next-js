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
  linkForside?: LocaleString;
  linkTjenester?: LocaleString;
  linkProsjekter?: LocaleString;
  linkKontakt?: LocaleString;
  linkPersonvern?: LocaleString;
  copyrightTekst?: LocaleString;
  nettsideLagetAvTekst?: LocaleString;
  nettsideLagetAvUrl?: string;
  footerCTALenkeTekst?: LocaleString;
  footerCTALenkeDestinasjon?: string;
}
