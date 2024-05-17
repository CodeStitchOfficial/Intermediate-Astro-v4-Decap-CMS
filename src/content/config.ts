import { defineCollection, z } from "astro:content";
const blogCollection = defineCollection({
  schema: ({ image }) => z.object({
    image: image(),
    imageAlt: z.string(),
  }),
});
export const collections = { blog: blogCollection, };