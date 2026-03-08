"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useSanityData } from "@/utils";
import { ProjectsPageInterface } from "@/data/interface";
import { projectsPageQuery } from "@/lib/queries";

const ProjectPageContent: React.FC = () => {
  // CMS data

  // const { language } = useLanguage();
  const data = useSanityData<ProjectsPageInterface>(projectsPageQuery);

  if (!data) {
    return null;
  }

  return (
    <>
      <div className="container">About us</div>
    </>
  );
};

export default ProjectPageContent;
