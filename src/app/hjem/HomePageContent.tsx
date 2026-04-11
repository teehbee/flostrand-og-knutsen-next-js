"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useSanityData } from "@/utils";
import { FrontpageInterface } from "@/data/interface";
import { frontpageQuery } from "@/lib/queries";
import { TopBannerWithVideoTitleAndLink } from "@/components/reusable";

export const HomePageContent: React.FC = () => {
  const { language } = useLanguage();

  // CMS data
  const frontpageData = useSanityData<FrontpageInterface>(frontpageQuery);

  if (!frontpageData) {
    return null;
  }
  return (
    <>
      <TopBannerWithVideoTitleAndLink
        title={frontpageData.topBanner?.title?.[language] ?? ""}
        textContent={frontpageData?.topBanner?.textContent?.[language]}
        linkDestination={frontpageData.topBanner?.linkDestination}
        linkText={frontpageData.topBanner?.linkText?.[language] ?? ""}
        media={{
          video: frontpageData.topBanner?.media?.video?.asset?.url
            ? {
                asset: {
                  url: frontpageData.topBanner.media.video.asset.url,
                },
              }
            : undefined,
          fallbackImage: frontpageData.topBanner?.media?.fallbackImage?.asset?.url
            ? {
                asset: {
                  url: frontpageData.topBanner.media.fallbackImage.asset.url,
                },
                alt: frontpageData.topBanner.media.fallbackImage.alt?.[language],
              }
            : undefined,
        }}
      />
    </>
  );
};
