"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useSanityData } from "@/utils";
import { AboutUsPageInterface } from "@/data/interface/pages/aboutPageInterface";
import { aboutPageQuery } from "@/lib/queries";
import { TopBannerImageTitleTextLink, TextBoxWithBorderAndPageNameLarge, ImageAndTextAlternating1 } from "@/components/reusable";

const AboutUsPageContent: React.FC = () => {
  // CMS data

  const { language } = useLanguage();
  const data = useSanityData<AboutUsPageInterface>(aboutPageQuery);

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
      <TextBoxWithBorderAndPageNameLarge title={data.textBoxWithPageName?.title?.[language] ?? ""} textContent={data.textBoxWithPageName?.textContent?.[language]} />
      <ImageAndTextAlternating1
        items={
          data?.upperArrayWithImageAndText?.tiles?.map((tile, index) => ({
            _id: tile?._key ?? `${index}`,
            title: tile?.title?.[language] ?? "",
            textContent: tile?.textContent?.[language] ?? [],
            imageUrl: tile?.image?.asset?.url ?? "",
            imageAlt: tile?.image?.alt?.[language] ?? "",
            linkText: tile?.linkText?.[language] ?? "",
            linkHref: tile?.linkDestination ?? "",
          })) ?? []
        }
      />
    </>
  );
};

export default AboutUsPageContent;
