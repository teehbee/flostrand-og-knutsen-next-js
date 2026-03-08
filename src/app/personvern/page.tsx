// import { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";
// import { getAboutPageMetadata } from "@/lib/metadata/aboutMetadata";

// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getAboutPageMetadata();

//   return {
//     title: data.title,
//     description: data.description,
//     keywords: data.keywords,
//     openGraph: {
//       title: data.title,
//       description: data.description,
//       images: data.ogImage
//         ? [

//               url: data.ogImage,
//               width: 1200,
//               height: 630,
//             },
//           ]
//         : [],
//       siteName: "Bengt Johansson",
//       locale: "no_NO",
//       type: "website",
//       url: "https://dittdomene.no/om", // Husk å tilpasse denne for hver side
//     },
//   };
// }

const PrivacyPage = async () => {
  return <PrivacyContent />;
};

export default PrivacyPage;
