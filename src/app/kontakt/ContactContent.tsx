"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useSanityData } from "@/utils";
import { ContactPageInterface, SiteSettingsInterface } from "@/data/interface";
import { contactPageQuery, globalSettingsQuery } from "@/lib/queries";
import { TopBannerImageTitleTextLink, ContactInfo } from "@/components/reusable";

const ContactContent: React.FC = () => {
  const { language } = useLanguage();
  const data = useSanityData<ContactPageInterface>(contactPageQuery);
  const globalSettingsData = useSanityData<SiteSettingsInterface>(globalSettingsQuery);

  if (!data) {
    return null;
  }

  return (
    <>
      <TopBannerImageTitleTextLink
        title={data.topBanner?.title?.[language] ?? ""}
        textContent={data?.topBanner?.textContent?.[language]}
        linkDestination={data.topBanner?.linkDestination}
        linkText={data.topBanner?.linkText?.[language] ?? ""}
        banner={{
          asset: { url: data.topBanner?.banner?.asset?.url ?? "" },
          alt: data.topBanner?.banner?.alt?.[language] ?? "",
        }}
      />
      <ContactInfo
        pageTitle={data.contactInfo?.pageTitle?.[language] ?? ""}
        subHeading={data.contactInfo?.subHeading?.[language] ?? ""}
        textContent={data.contactInfo?.textContent?.[language] ?? ""}
        phoneTitle={data.contactInfo?.phoneTitle?.[language] ?? ""}
        phone={globalSettingsData?.phone ?? ""}
        emailTitle={data.contactInfo?.emailTitle?.[language] ?? ""}
        email={globalSettingsData?.email ?? ""}
        adressTitle={data.contactInfo?.adressTitle?.[language] ?? ""}
        address={globalSettingsData?.address ?? ""}
        zipAndCity={globalSettingsData?.zipAndCity ?? ""}
        image={{
          asset: { url: data.contactInfo?.image?.asset?.url ?? "" },
          alt: data.contactInfo?.image?.alt?.[language] ?? "",
        }}
      />
    </>
  );
};

export default ContactContent;
