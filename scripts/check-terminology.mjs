import { readFile } from "node:fs/promises";
import { getAllMarkdownFiles } from "./lib/resolve-changed-content.mjs";

const glossary = JSON.parse(
  await readFile(new URL("../data/glossary/glossary.json", import.meta.url), "utf8")
);

const files = await getAllMarkdownFiles();
const errors = [];

for (const file of files) {
  const content = await readFile(file, "utf8");
  const match = content.match(/^---\r?\n([\s\S]+?)\r?\n---/);
  if (!match) continue;

  const yamlLines = match[1].split("\n");
  let locale = "tr";
  for (const line of yamlLines) {
    if (line.trim().startsWith("locale:")) {
      locale = line.replace("locale:", "").trim();
    }
  }

  // Strip code blocks, inline code, URLs, and file paths to avoid false positives
  let body = content
    .replace(/^---\r?\n[\s\S]+?\r?\n---/, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]+`/g, "")
    .replace(/https?:\/\/[^\s)]+/g, "")
    .replace(/file:\/\/[^\s)]+/g, "");

  for (const term of glossary) {
    let canonical = locale === "tr" ? term.canonical_tr : locale === "es" ? (term.canonical_es || term.canonical_en) : term.canonical_en;
    if (!canonical) continue;

    const validVariants = [canonical];
    if (term.variants) {
      if (term.variants.title) validVariants.push(...term.variants.title);
      if (term.variants.adjective) validVariants.push(...term.variants.adjective);
    }
    if (locale === "tr" && term.aliases_tr) {
      validVariants.push(...term.aliases_tr);
    }

    const escaped = canonical.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const regex = new RegExp(`(?<![a-zA-ZçÇğĞıİöÖşŞüÜ])${escaped}(?![a-zA-ZçÇğĞıİöÖşŞüÜ])`, "i");

    const termMatch = body.match(regex);
    if (termMatch) {
      const matchedText = termMatch[0];
      const isAllowed = validVariants.some((v) => v === matchedText);
      if (!isAllowed) {
        errors.push(`File ${file}: Term '${matchedText}' case mismatch. Expected canonical or allowed variant spelling: '${canonical}'`);
      }
    }
  }
}

if (errors.length > 0) {
  console.error("Terminology Verification Failures:");
  console.error(errors.join("\n"));
  process.exit(1);
} else {
  console.log(`Validated terminology consistency across ${files.length} markdown documents successfully.`);
}
