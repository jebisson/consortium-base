import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    url_slug: z.string(),
    meta_description: z.string(),
    angle: z.string(),
    cta_principal: z.string(),
    cta_secondaire: z.string(),
    mots: z.number(),
    lang: z.string().default("fr"),
    date: z.string().optional(),
  }),
});

export const collections = { blog };
