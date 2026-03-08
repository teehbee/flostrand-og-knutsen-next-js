import { Metadata } from "next";
import { getServicesPageMetadata } from "@/lib/metadata/servicesMetadata";
import ServicesPageContent from "./ServicesPageContent";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getServicesPageMetadata();

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

const ServicesPage = async () => {
  return <ServicesPageContent />;
};

export default ServicesPage;
