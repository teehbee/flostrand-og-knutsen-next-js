import imageUrlBuilder from "@sanity/image-url";
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { client } from "./sanityClient";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder: ImageUrlBuilder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
