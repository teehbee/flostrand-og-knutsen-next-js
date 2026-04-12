"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useSanityData } from "@/utils";
import { ContactPageInterface } from "@/data/interface";
import { contactPageQuery } from "@/lib/queries";
import { TopBannerImageTitleTextLink } from "@/components/reusable";

const ContactContent: React.FC = () => {
  const { language } = useLanguage();
  const data = useSanityData<ContactPageInterface>(contactPageQuery);

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
    </>
  );
};

export default ContactContent;
