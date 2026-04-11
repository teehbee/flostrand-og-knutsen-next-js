"use client";

// import { useLanguage } from "@/context/LanguageContext";
import { useSanityData } from "@/utils";
import { FrontpageInterface } from "@/data/interface";
import { frontpageQuery } from "@/lib/queries";

export const HomePageContent: React.FC = () => {
  // const { language } = useLanguage();

  // CMS data
  const data = useSanityData<FrontpageInterface>(frontpageQuery);

  if (!data) {
    return null;
  }
  return (
    <>
      <div className="container">Frontpage</div>
    </>
  );
};
