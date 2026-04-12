"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useSanityData } from "@/utils";
import { ServicePageInterface } from "@/data/interface/pages/servicePageInterface";
import { serviceBySlugQuery } from "@/lib/queries";
import { TopBannerImageTitleTextLink } from "@/components/reusable";
import { useParams } from "next/navigation";

const ServicesContent: React.FC = () => {
  const { language } = useLanguage();
  const params = useParams<{ slug: string }>();
  const data = useSanityData<ServicePageInterface>(serviceBySlugQuery, { slug: params.slug });

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

export default ServicesContent;
