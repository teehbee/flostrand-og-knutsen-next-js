"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useSanityData } from "@/utils";
import { FrontpageInterface } from "@/data/interface";
import { frontpageQuery } from "@/lib/queries";
import { TopBannerWithVideoTitleAndLink } from "@/components/reusable";

export const HomePageContent: React.FC = () => {
  const { language } = useLanguage();

  // CMS data
  const data = useSanityData<FrontpageInterface>(frontpageQuery);

  if (!data) {
    return null;
  }
  return (
    <>
      <TopBannerWithVideoTitleAndLink
        title={data.topBanner?.title?.[language] ?? ""}
        textContent={data?.topBanner?.textContent?.[language]}
        linkDestination={data.topBanner?.linkDestination}
        linkText={data.topBanner?.linkText?.[language] ?? ""}
        media={{
          video: data.topBanner?.media?.video?.asset?.url
            ? {
                asset: {
                  url: data.topBanner.media.video.asset.url,
                },
              }
            : undefined,
          fallbackImage: data.topBanner?.media?.fallbackImage?.asset?.url
            ? {
                asset: {
                  url: data.topBanner.media.fallbackImage.asset.url,
                },
                alt: data.topBanner.media.fallbackImage.alt?.[language],
              }
            : undefined,
        }}
      />
    </>
  );
};
