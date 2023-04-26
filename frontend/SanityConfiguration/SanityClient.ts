import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "7s1tmrtg",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});
