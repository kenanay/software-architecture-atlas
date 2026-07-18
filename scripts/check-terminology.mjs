import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

import { fileURLToPath } from "node:url";

const contentDir = fileURLToPath(new URL("../content", import.meta.url));

// Load glossary
const glossary = JSON.parse(await readFile(new URL("../data/glossary/glossary.json", import.meta.url), "utf8"));

async function getMarkdownFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const res = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getMarkdownFiles(res)));
    } else if (entry.name.endsWith(".md") || entry.name.endsWith(".mdx")) {
      files.push(res);
    }
  }
  return files;
}

const files = await getMarkdownFiles(contentDir);
const warnings = [];

for (const file of files) {
  const content = await readFile(file, "utf8");
  const match = content.match(/^---\r?\n([\s\S]+?)\r?\n---/);
  if (!match) continue;
  
  const yamlLines = match[1].split("\n");
  let locale = "tr";
  for (const line of yamlLines) {
    if (line.startsWith("locale:")) {
      locale = line.replace("locale:", "").trim();
    }
  }
  
  const body = content.replace(/^---\r?\n[\s\S]+?\r?\n---/, "");
  
  for (const term of glossary) {
    const canonical = locale === "tr" ? term.canonical_tr : locale === "es" ? (term.canonical_es || term.canonical_en) : term.canonical_en;
    if (!canonical) continue;
    
    const escaped = canonical.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`(?<![a-zA-ZçÇğĞıİöÖşŞüÜ])${escaped}(?![a-zA-ZçÇğĞıİöÖşŞüÜ])`, "i");
    
    const termMatch = body.match(regex);
    if (termMatch) {
      const matchedText = termMatch[0];
      if (matchedText !== canonical) {
        warnings.push(`File ${file}: Term '${matchedText}' case mismatch. Expected canonical spelling: '${canonical}'`);
      }
    }
  }
}

if (warnings.length > 0) {
  console.warn("Terminology Warnings Found (Non-blocking):");
  console.warn(warnings.join("\n"));
} else {
  console.log("No terminology consistency warnings found.");
}
