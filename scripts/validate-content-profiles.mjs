import { readFile } from "node:fs/promises";
import { getAllMarkdownFiles, extractFrontmatterField, resolveChangedTranslationGroups } from "./lib/resolve-changed-content.mjs";

const args = process.argv.slice(2);
const isStrict = args.includes("--strict");
const isChanged = args.includes("--changed");

const profilesUrl = new URL("../data/content-profiles/content-profiles.json", import.meta.url);
const profilesData = JSON.parse(await readFile(profilesUrl, "utf8"));

let filesToValidate = [];

if (isChanged) {
  const { targetFiles } = await resolveChangedTranslationGroups(args);
  filesToValidate = targetFiles;
  if (filesToValidate.length === 0) {
    console.log("No changed translation groups found for content profile validation.");
    process.exit(0);
  }
} else {
  filesToValidate = await getAllMarkdownFiles();
}

const errors = [];
const warnings = [];
let validatedCount = 0;

for (const file of filesToValidate) {
  const content = await readFile(file, "utf8");
  let profileKey = extractFrontmatterField(content, "contentProfile");
  const docType = extractFrontmatterField(content, "type");

  // Fallback map from docType to profileKey if contentProfile is not explicitly set
  if (!profileKey) {
    if (docType === "architecture") profileKey = "architecture";
    else if (docType === "guide" || docType === "programming-language") profileKey = "guide";
    else if (docType === "ai-model" || docType === "concept") profileKey = "ai-system";
  }

  if (profileKey && profilesData[profileKey]) {
    validatedCount++;
    const requiredSections = profilesData[profileKey].requiredSections || [];
    const sectionMatches = [...content.matchAll(/<!--\s*section:([a-zA-Z0-9_-]+)\s*-->/g)].map((m) => m[1]);
    const presentSections = new Set(sectionMatches);

    const missingSections = requiredSections.filter((s) => !presentSections.has(s));

    if (missingSections.length > 0) {
      const msg = `File ${file} (Profile '${profileKey}'): Missing required semantic sections [${missingSections.join(", ")}].`;
      if (isStrict) errors.push(msg); else warnings.push(msg);
    }
  }
}

if (errors.length > 0) {
  console.error("Content Profile Validation Errors:");
  console.error(errors.join("\n"));
  process.exit(1);
}

if (warnings.length > 0) {
  console.warn("Content Profile Validation Warnings (Report Mode):");
  console.warn(warnings.join("\n"));
} else {
  console.log(`Validated content profiles across ${validatedCount} documents successfully.`);
}
