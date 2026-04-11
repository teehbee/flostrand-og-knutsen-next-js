import AboutUsPageContent from "./AboutUsPageContent";
// import { Metadata } from "next";
// import { getProjectPageMetadata } from "@/lib/metadata/projectMetadata";

// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getProjectPageMetadata();

//   return {
//     title: data.title,
//     description: data.description,
//     keywords: data.keywords,
//     openGraph: {
//       title: data.title,
//       description: data.description,
//       images: data.ogImage
//         ? [
//             {
//               url: data.ogImage.url,
//               alt: data.ogImage.alt,
//               width: 1200,
//               height: 630,
//             },
//           ]
//         : [],
//       siteName: "THB Digital",
//       locale: "no_NO",
//       type: "website",
//       url: "https://thbdigital.no/",
//     },
//   };
// }

const AboutUsPage = async () => {
  return <AboutUsPageContent />;
};

export default AboutUsPage;
