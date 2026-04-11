// import { PortraitAndTextCTA } from "../reusable";
// import { ContactCTAInterface } from "@/data/interface/objects";
// import { globalComponentsQuery } from "@/lib/queries";
// import { useLanguage } from "@/context/LanguageContext";
// import { useSanityData } from "@/utils";

// export const ContactCTA: React.FC = () => {
//   const { language } = useLanguage();

//   const data = useSanityData<ContactCTAInterface>(globalComponentsQuery);

//   if (!data) {
//     return null;
//   }

//   return (
//     <PortraitAndTextCTA
//       bilde={{
//         asset: { url: data.contactCTA?.bilde?.asset?.url ?? "" },
//         alt: data.contactCTA?.bilde?.alt?.[language] ?? "",
//       }}
//       tekst={data.contactCTA?.tekst?.[language] ?? ""}
//       lenketekst={data.contactCTA?.lenketekst?.[language] ?? ""}
//       lenkedestinasjon={data.contactCTA?.lenkedestinasjon}
//     />
//   );
// };
