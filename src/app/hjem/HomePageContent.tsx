"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useSanityData } from "@/utils";
import { FrontpageInterface } from "@/data/interface";
import { frontpageQuery, servicesQuery } from "@/lib/queries";
import { TopBannerWithVideoTitleAndLink, TextBoxWithBorderAndPageNameLarge, TextBoxWithBorderAndPageNameMedium, TwoImagesWithTextTitleAndLink, ImageTextAndLinkTiles, BannerTopBottomClipArt } from "@/components/reusable";
import { ServiceFrontpageItemInterface } from "@/data/interface/pages/contentInterfaces";

export const HomePageContent: React.FC = () => {
  const { language } = useLanguage();

  // CMS data
  const data = useSanityData<FrontpageInterface>(frontpageQuery);
  const services = useSanityData<ServiceFrontpageItemInterface[]>(servicesQuery);

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
      <TextBoxWithBorderAndPageNameLarge title={data.frontpageUpperTextBox?.title?.[language] ?? ""} textContent={data?.frontpageUpperTextBox?.textContent?.[language]} />
      <TwoImagesWithTextTitleAndLink
        textContent={data.frontpageTiles?.textContent?.[language]}
        linkText={data.frontpageTiles?.linkText?.[language]}
        linkDestination={data.frontpageTiles?.linkDestination}
        mainImage={{
          asset: { url: data.frontpageTiles?.mainImage.asset.url ?? "" },
          alt: data.frontpageTiles?.mainImage.alt?.[language] ?? "",
        }}
        secondaryImage={{
          asset: { url: data.frontpageTiles?.secondaryImage.asset.url ?? "" },
          alt: data.frontpageTiles?.secondaryImage.alt?.[language] ?? "",
        }}
      />
      <TextBoxWithBorderAndPageNameMedium title={data.frontpageLowerTextBox?.title?.[language] ?? ""} textContent={data?.frontpageLowerTextBox?.textContent?.[language]} />
      <ImageTextAndLinkTiles
        items={
          services?.map((service) => ({
            _id: service._id,
            title: service.subPageTitle?.[language] ?? "",
            textContent: service.subPageTextContent?.[language] ?? [],
            imageUrl: service.subPageImage?.asset?.url ?? "",
            imageAlt: service.subPageImage?.alt?.[language] ?? "",
            linkText: service.subPageLinkText?.[language] ?? "Les mer",
            linkHref: `/tjenester/${service.slug}`,
          })) ?? []
        }
      />
      <BannerTopBottomClipArt
        banner={{
          asset: { url: data.bottomBanner?.banner?.asset?.url ?? "" },
          alt: data.bottomBanner?.banner?.alt?.[language] ?? "",
        }}
        title={data.bottomBanner?.title?.[language] ?? "Tester"}
        linkText={data.bottomBanner?.linkText?.[language] ?? ""}
        linkDestination={data.bottomBanner?.linkDestination ?? ""}
      />
    </>
  );
};
