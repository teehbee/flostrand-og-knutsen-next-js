// import { SelectorWithArrowButtons } from "../reusable";
// import { useLanguage } from "@/context/LanguageContext";
// import { projectsPageQuery, globalComponentsQuery } from "@/lib/queries";
// import { ProjectsPageInterface } from "@/data/interface";
// import { ProjectsPreviewAddsInterface } from "@/data/interface/objects";
// import { useSanityData } from "@/utils";

// export const ProjectsPreviewSelector: React.FC = () => {
//   const { language } = useLanguage();

//   const projectData = useSanityData<ProjectsPageInterface>(projectsPageQuery);
//   const globalComponentsData = useSanityData<ProjectsPreviewAddsInterface>(globalComponentsQuery);

//   if (!projectData || !globalComponentsData) {
//     return null;
//   }
//   return (
//     <SelectorWithArrowButtons
//       content={{
//         seksjonstittel: globalComponentsData?.projectsPreviewAdds?.tittel?.[language] ?? "",
//         lenketekst: globalComponentsData?.projectsPreviewAdds?.lenketekst?.[language] ?? "",
//         lenkedestinasjon: globalComponentsData?.projectsPreviewAdds?.lenkedestinasjon ?? "",
//         instance:
//           projectData?.prosjekter?.tiles?.map((project) => ({
//             tittel: project?.tittel?.[language] ?? "",
//             undertittel: project?.undertittel?.[language] ?? "",
//             tekstinnhold: project?.tekstinnhold?.[language] ?? "",
//             lenketekst: project?.lenketekst?.[language] ?? "",
//             lenkedestinasjon: project?.lenkedestinasjon ?? "",
//             bilde: {
//               asset: {
//                 url: project?.bilde?.asset?.url ?? "",
//               },
//               alt: project?.bilde?.alt?.[language] ?? "",
//             },
//           })) ?? [],
//       }}
//     />
//   );
// };
