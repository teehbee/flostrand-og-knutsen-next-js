"use client";

// import { useLanguage } from "@/context/LanguageContext";
import { useSanityData } from "@/utils";
import { notFoundQuery } from "@/lib/queries";
import { NotFoundPageInterface } from "@/data/interface";
// import { PortableText } from "node_modules/@portabletext/react/dist/index.cjs";

export const NotFoundContent: React.FC = () => {
  // CMS data

  // const { language } = useLanguage();
  const data = useSanityData<NotFoundPageInterface>(notFoundQuery);

  if (!data) {
    return null;
  }

  return (
    <section className="h-80vh page-is-404 alt-bg-color">
      <div className="container text-center">Side ikke funnet</div>
    </section>
  );
};
