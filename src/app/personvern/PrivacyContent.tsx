"use client";

// import { useLanguage } from "@/context/LanguageContext";
import { useSanityData } from "@/utils";
import { PrivacyPageInterface } from "@/data/interface";
import { privacyPageQuery } from "@/lib/queries";
// import { PortableText } from "@portabletext/react";

const PrivacyContent: React.FC = () => {
  // CMS Data
  // const { language } = useLanguage();
  const data = useSanityData<PrivacyPageInterface>(privacyPageQuery);

  if (!data) {
    return null;
  }

  return (
    <>
      <section className="pb-45 pb-lg-90 pt-125 m-15 m-lg-30 alt-bg-color border-radius-5">
        <div className="container ">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
              Personvern
              {/* <h1 className="pb-15">{data?.title?.[language]}</h1>
              <div>
                <PortableText value={data?.textContent?.[language]} />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyContent;
