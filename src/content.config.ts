import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const experienceEntries = defineCollection({
  loader: glob({ base: "./src/content/experience", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    job: z.string(),
    description: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
  }),
});

const projectEntries = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    github: z.url().optional(),
    website: z.url().optional(),
  }),
});

export const collections = { experienceEntries, projectEntries };
