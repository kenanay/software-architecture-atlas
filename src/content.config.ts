import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const trilingual = z.object({ tr: z.string(), en: z.string(), es: z.string().optional() });

const documents = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content" }),
  schema: z.object({
    id: z.string(),
    type: z.enum(["guide", "history", "concept", "programming-language", "architecture", "framework", "tool", "platform", "protocol", "standard", "rfc", "algorithm", "ai-model", "comparison", "application-domain-guide", "directory-template", "architecture-decision-record", "case-study", "academic-source-summary", "historical-event", "glossary-entry", "research-note", "unverified-draft", "decision-guide"]),
    title: trilingual,
    summary: trilingual,
    status: z.enum(["draft", "review-required", "reviewed", "verified", "deprecated", "historical", "archived"]),
    maturity: z.enum(["experimental", "emerging", "active", "mature", "maintenance", "deprecated", "historical"]),
    categories: z.array(z.string()).min(1),
    tags: z.array(z.string()).default([]),
    locale: z.enum(["tr", "en", "es"]),
    translationKey: z.string(),
    canonicalId: z.string(),
    translationStatus: z.enum(["original", "translated", "review-required", "reviewed", "outdated", "missing"]),
    translationMethod: z.enum(["original", "human", "ai-assisted"]).default("original"),
    translationReviewedBy: z.string().optional(),
    version: z.string(),
    lastReviewedAt: z.coerce.date(),
    sources: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    contributors: z.array(z.object({ personId: z.string(), roles: z.array(z.string()).min(1) })).min(1),
    qualityAttributes: z.array(z.string()).default([]),
    applicableDomains: z.array(z.string()).default([]),
  }),
});

export const collections = { documents };
