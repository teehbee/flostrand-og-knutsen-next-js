import { client } from "../sanityClient";
import { urlFor } from "../sanityImage";
import { metadataFields } from "./metaDataFields";

const query = `*[_type == "tjenester"][0] {
  ${metadataFields}
}`;

export async function getServicesPageMetadata() {
  const data = await client.fetch(query);

  const { metadata } = data || {};

  return {
    title: metadata?.title ?? "SEO tittel mangler",
    description: metadata?.description ?? "SEO beskrivelse mangler",
    ogImage: metadata?.ogImage
      ? {
          url: urlFor(metadata.ogImage).width(1200).height(630).format("jpg").url(),
          alt: metadata.ogImage.alt ?? "Bildebeskrivelse mangler",
        }
      : undefined,
    keywords: metadata?.keywords ?? [],
  };
}
