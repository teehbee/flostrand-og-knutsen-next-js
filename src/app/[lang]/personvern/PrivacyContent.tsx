"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useSanityData } from "@/utils";
import { PrivacyPageInterface } from "@/data/interface";
import { privacyPageQuery } from "@/lib/queries";
import { PortableText } from "@portabletext/react";

const PrivacyContent: React.FC = () => {
  // CMS Data
  const { language } = useLanguage();
  const data = useSanityData<PrivacyPageInterface>(privacyPageQuery);

  if (!data) {
    return null;
  }

  return (
    <>
      <section>
        <div className="container">Privacy</div>
      </section>
    </>
  );
};

export default PrivacyContent;
