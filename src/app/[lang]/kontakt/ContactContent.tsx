"use client";

// import { useLanguage } from "@/context/LanguageContext";
import { useSanityData } from "@/utils";
import { ContactPageInterface } from "@/data/interface";
import { contactPageQuery } from "@/lib/queries";

const ContactContent: React.FC = () => {
  // const { language } = useLanguage();
  const data = useSanityData<ContactPageInterface>(contactPageQuery);

  if (!data) {
    return null;
  }

  return (
    <>
      <div className="container">Hello</div>
    </>
  );
};

export default ContactContent;
