import ContactContent from "./ContactContent";
import type { Metadata } from "next";
import { getContactMetadata } from "@/lib/metadata/contactMetadata";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getContactMetadata();

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
      siteName: "Flostrand og Knutsen",
      locale: "no_NO",
      type: "website",
      url: "https://thbdigital.no/",
    },
  };
}

const ContactPage = async () => {
  return (
    <>
      <ContactContent />
    </>
  );
};

export default ContactPage;
