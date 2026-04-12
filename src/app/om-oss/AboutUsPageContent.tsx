"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useSanityData } from "@/utils";
import { AboutUsPageInterface } from "@/data/interface/pages/aboutPageInterface";
import { aboutPageQuery } from "@/lib/queries";
import { TopBannerImageTitleTextLink, TextBoxWithBorderAndPageNameLarge } from "@/components/reusable";

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
    </>
  );
};

export default AboutUsPageContent;
