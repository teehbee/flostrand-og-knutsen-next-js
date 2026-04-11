// app/page.tsx
import { HomePageContent } from "../hjem/HomePageContent";
import { getFrontpageMetadata } from "@/lib/metadata/frontpageMetadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getFrontpageMetadata();

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: data.title,
      description: data.description,
      images: data.ogImage
        ? [
            {
              url: data.ogImage.url,
              alt: data.ogImage.alt,
              width: 1200,
              height: 630,
            },
          ]
        : [],
      siteName: "THB Digital",
      locale: "no_NO",
      type: "website",
      url: "https://thbdigital.no/",
    },
  };
}

export default async function Home() {
  return <HomePageContent />;
}
