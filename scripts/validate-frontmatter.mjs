import { readFile } from "node:fs/promises";
import { getAllMarkdownFiles, extractFrontmatterField, resolveChangedTranslationGroups } from "./lib/resolve-changed-content.mjs";

const args = process.argv.slice(2);
const isStrict = args.includes("--strict");
const isChanged = args.includes("--changed");

let filesToValidate = [];

if (isChanged) {
  const { targetFiles } = await resolveChangedTranslationGroups(args);
  filesToValidate = targetFiles;
  if (filesToValidate.length === 0) {
    console.log("No changed translation groups found for frontmatter validation.");
    process.exit(0);
  }
} else {
  filesToValidate = await getAllMarkdownFiles();
}

const errors = [];
const warnings = [];

const keyToDocsMap = new Map();

for (const file of filesToValidate) {
  const content = await readFile(file, "utf8");
  const match = content.match(/^---\r?\n([\s\S]+?)\r?\n---/);
  
  if (!match) {
    const msg = `File ${file}: Missing YAML frontmatter block.`;
    if (isStrict) errors.push(msg); else warnings.push(msg);
    continue;
  }

  const id = extractFrontmatterField(content, "id");
  const locale = extractFrontmatterField(content, "locale");
  const translationKey = extractFrontmatterField(content, "translationKey");
  const canonicalId = extractFrontmatterField(content, "canonicalId");
  const translationStatus = extractFrontmatterField(content, "translationStatus");
  const version = extractFrontmatterField(content, "version");
  const status = extractFrontmatterField(content, "status");

  if (!id) errors.push(`File ${file}: Missing 'id' in frontmatter.`);
  if (!locale || !["tr", "en", "es"].includes(locale)) {
    errors.push(`File ${file}: Invalid or missing 'locale' (must be tr, en, or es).`);
  }
  if (!translationKey) errors.push(`File ${file}: Missing 'translationKey' in frontmatter.`);
  if (!canonicalId) errors.push(`File ${file}: Missing 'canonicalId' in frontmatter.`);
  if (!translationStatus) errors.push(`File ${file}: Missing 'translationStatus' in frontmatter.`);
  if (!version) errors.push(`File ${file}: Missing 'version' in frontmatter.`);

  if (translationKey) {
    if (!keyToDocsMap.has(translationKey)) {
      keyToDocsMap.set(translationKey, []);
    }
    keyToDocsMap.get(translationKey).push({ file, locale, version, status, translationStatus });
  }
}

// Check version consistency across reviewed files of the same translationKey group
for (const [key, group] of keyToDocsMap.entries()) {
  const reviewedDocs = group.filter(
    (d) => d.status === "reviewed" || d.translationStatus === "reviewed"
  );
  if (reviewedDocs.length > 1) {
    const versions = new Set(reviewedDocs.map((d) => d.version));
    if (versions.size > 1) {
      const msg = `TranslationKey '${key}': Version mismatch among reviewed languages (${Array.from(versions).join(", ")}).`;
      if (isStrict) errors.push(msg); else warnings.push(msg);
    }
  }
}

if (errors.length > 0) {
  console.error("Frontmatter Validation Errors:");
  console.error(errors.join("\n"));
  process.exit(1);
}

if (warnings.length > 0) {
  console.warn("Frontmatter Validation Warnings (Report Mode):");
  console.warn(warnings.join("\n"));
} else {
  console.log(`Validated frontmatter across ${filesToValidate.length} documents successfully.`);
}
