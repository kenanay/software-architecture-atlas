import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

import { fileURLToPath } from "node:url";

const contentDir = fileURLToPath(new URL("../content", import.meta.url));

// Load canonical source list
const sources = JSON.parse(await readFile(new URL("../data/sources/sources.json", import.meta.url), "utf8"));
const claims = JSON.parse(await readFile(new URL("../data/claims/claims.json", import.meta.url), "utf8"));
const sourceIds = new Set(sources.map(s => s.id));

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
const errors = [];
const documentIds = new Set();
const canonicalIds = new Set();
const fileData = [];

// First pass: collect all document IDs from frontmatter
for (const file of files) {
  const content = await readFile(file, "utf8");
  // Simple frontmatter extractor
  const match = content.match(/^---\r?\n([\s\S]+?)\r?\n---/);
  if (!match) {
    errors.push(`File ${file}: Missing frontmatter`);
    continue;
  }
  
  const yamlLines = match[1].split("\n");
  let id = "";
  let related = [];
  let fileSources = [];
  let locale = "";
  let canonicalId = "";
  
  for (const line of yamlLines) {
    if (line.startsWith("id:")) {
      id = line.replace("id:", "").trim();
    } else if (line.startsWith("canonicalId:")) {
      canonicalId = line.replace("canonicalId:", "").trim();
    } else if (line.startsWith("locale:")) {
      locale = line.replace("locale:", "").trim();
    } else if (line.startsWith("related:")) {
      // parse array like [a, b]
      const arrayStr = line.substring(line.indexOf("[") + 1, line.indexOf("]"));
      related = arrayStr.split(",").map(s => s.trim()).filter(Boolean);
    } else if (line.startsWith("sources:")) {
      const arrayStr = line.substring(line.indexOf("[") + 1, line.indexOf("]"));
      fileSources = arrayStr.split(",").map(s => s.trim()).filter(Boolean);
    }
  }
  
  if (!id) {
    errors.push(`File ${file}: Missing 'id' in frontmatter`);
  } else {
    documentIds.add(id);
    canonicalIds.add(canonicalId);
    fileData.push({ file, id, related, sources: fileSources, locale, canonicalId });
  }
}

for (const claim of claims) if (!canonicalIds.has(claim.documentCanonicalId)) errors.push(`Claim '${claim.id}': References unknown canonical document '${claim.documentCanonicalId}'`);

// Second pass: validate relationships and sources
for (const doc of fileData) {
  for (const rel of doc.related) {
    if (!documentIds.has(rel)) {
      errors.push(`Document '${doc.id}' (in ${doc.file}): References unknown related document '${rel}'`);
    }
  }
  
  for (const src of doc.sources) {
    if (!sourceIds.has(src)) {
      errors.push(`Document '${doc.id}' (in ${doc.file}): References unknown source '${src}'`);
    }
  }
}

if (errors.length > 0) {
  console.error("Link & Reference Validation Failed:");
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${fileData.length} markdown documents, checked cross-links and sources successfully.`);
