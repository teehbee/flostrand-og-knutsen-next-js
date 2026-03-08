"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useSanityData } from "@/utils";
import { ToppBannerWithBorderRadiusAndMargin, SelectorWithButtonsAndTextboxes, AccordionWithHeading } from "@/components/reusable";
import { ServicesPageInterface } from "@/data/interface";
import { servicesQuery } from "@/lib/queries";
import { ContactCTA, ProjectsPreviewSelector } from "@/components/globalComponents";

const ServicesPageContent: React.FC = () => {
  // CMS data

  const { language } = useLanguage();
  const data = useSanityData<ServicesPageInterface>(servicesQuery);

  if (!data) {
    return null;
  }

  return (
    <>
      <div className="container">Tjeneste</div>
    </>
  );
};

export default ServicesPageContent;
