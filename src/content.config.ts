import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const bilingual = z.object({ tr: z.string(), en: z.string() });

const documents = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content" }),
  schema: z.object({
    id: z.string(),
    type: z.enum(["guide", "history", "concept", "programming-language", "architecture", "framework", "platform", "algorithm", "ai-model", "standard", "rfc", "comparison", "decision-guide"]),
    title: bilingual,
    summary: bilingual,
    status: z.enum(["draft", "review-required", "reviewed", "verified", "deprecated", "historical", "archived"]),
    maturity: z.enum(["experimental", "emerging", "active", "mature", "maintenance", "deprecated", "historical"]),
    categories: z.array(z.string()).min(1),
    tags: z.array(z.string()).default([]),
    locale: z.enum(["tr", "en"]),
    translationKey: z.string(),
    version: z.string(),
    lastReviewedAt: z.coerce.date(),
    sources: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { documents };
