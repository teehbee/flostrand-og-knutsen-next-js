"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useSanityData } from "@/utils";
import { ServicePageInterface } from "@/data/interface/pages/servicePageInterface";
import { serviceBySlugQuery } from "@/lib/queries";
import { TopBannerImageTitleTextLink, TextBoxWithBorderAndPageNameLarge, ImageAndTextAlternating1 } from "@/components/reusable";
import { useParams } from "next/navigation";

const ServicesContent: React.FC = () => {
  const { language } = useLanguage();
  const params = useParams<{ slug: string }>();
  const data = useSanityData<ServicePageInterface>(serviceBySlugQuery, { slug: params.slug });

  console.log(data);

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
          data?.tiles?.map((tile, index) => ({
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

export default ServicesContent;
