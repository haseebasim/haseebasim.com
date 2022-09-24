import { createClient } from "next-sanity";
import { useNextSanityImage } from "next-sanity-image";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false, // `false` if you want to ensure fresh data
});

