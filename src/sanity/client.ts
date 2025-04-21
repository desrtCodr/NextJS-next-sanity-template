import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "g6mhf8un",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});