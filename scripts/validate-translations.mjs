import { readFile } from "node:fs/promises";
import { getAllMarkdownFiles, extractFrontmatterField, resolveChangedTranslationGroups } from "./lib/resolve-changed-content.mjs";

const args = process.argv.slice(2);
const isStrict = args.includes("--strict");
const isChanged = args.includes("--changed");

let allFiles = [];

if (isChanged) {
  const { targetFiles } = await resolveChangedTranslationGroups(args);
  allFiles = targetFiles;
  if (allFiles.length === 0) {
    console.log("No changed translation groups found for translation validation.");
    process.exit(0);
  }
} else {
  allFiles = await getAllMarkdownFiles();
}

const keyToDocsMap = new Map();

for (const file of allFiles) {
  const content = await readFile(file, "utf8");
  const translationKey = extractFrontmatterField(content, "translationKey");
  const locale = extractFrontmatterField(content, "locale");

  if (translationKey && locale) {
    if (!keyToDocsMap.has(translationKey)) {
      keyToDocsMap.set(translationKey, []);
    }
    keyToDocsMap.get(translationKey).push({ file, locale, content });
  }
}

const errors = [];
const warnings = [];

for (const [key, docs] of keyToDocsMap.entries()) {
  const localesPresent = docs.map((d) => d.locale);
  const requiredLocales = ["tr", "en", "es"];
  const missingLocales = requiredLocales.filter((l) => !localesPresent.includes(l));

  if (missingLocales.length > 0) {
    const msg = `TranslationKey '${key}': Missing language versions [${missingLocales.join(", ")}].`;
    if (isStrict) errors.push(msg); else warnings.push(msg);
  }

  // Extract semantic section markers <!-- section:id --> for each document
  const docSectionsMap = new Map();
  const docCodeBlockCountsMap = new Map();

  for (const doc of docs) {
    const sectionMatches = [...doc.content.matchAll(/<!--\s*section:([a-zA-Z0-9_-]+)\s*-->/g)].map((m) => m[1]);
    docSectionsMap.set(doc.locale, new Set(sectionMatches));

    // Count code blocks ```
    const codeBlocks = doc.content.match(/```/g) || [];
    docCodeBlockCountsMap.set(doc.locale, codeBlocks.length / 2);
  }

  // Compare semantic section markers across present languages
  if (docs.length > 1) {
    const baseLocale = docs[0].locale;
    const baseSections = docSectionsMap.get(baseLocale);

    for (let i = 1; i < docs.length; i++) {
      const otherLocale = docs[i].locale;
      const otherSections = docSectionsMap.get(otherLocale);

      // Check missing sections in other locale
      for (const sectionId of baseSections) {
        if (!otherSections.has(sectionId)) {
          const msg = `TranslationKey '${key}': Section '${sectionId}' present in '${baseLocale}' but missing in '${otherLocale}'.`;
          if (isStrict) errors.push(msg); else warnings.push(msg);
        }
      }
      for (const sectionId of otherSections) {
        if (!baseSections.has(sectionId)) {
          const msg = `TranslationKey '${key}': Section '${sectionId}' present in '${otherLocale}' but missing in '${baseLocale}'.`;
          if (isStrict) errors.push(msg); else warnings.push(msg);
        }
      }
    }
  }
}

if (errors.length > 0) {
  console.error("Translation Validation Errors:");
  console.error(errors.join("\n"));
  process.exit(1);
}

if (warnings.length > 0) {
  console.warn("Translation Validation Warnings (Report Mode):");
  console.warn(warnings.join("\n"));
} else {
  console.log(`Validated translation consistency across ${keyToDocsMap.size} translation groups successfully.`);
}
