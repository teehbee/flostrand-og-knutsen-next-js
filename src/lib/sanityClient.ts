import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "bhdle05g",
  dataset: "production",
  apiVersion: "2025-06-18",
  useCdn: true,
});
