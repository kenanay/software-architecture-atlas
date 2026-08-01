import { execFileSync } from "node:child_process";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const contentDir = fileURLToPath(new URL("../../content", import.meta.url));

/**
 * Gets all markdown files recursively inside the content directory.
 */
export async function getAllMarkdownFiles(dir = contentDir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const res = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getAllMarkdownFiles(res)));
    } else if (entry.name.endsWith(".md") || entry.name.endsWith(".mdx")) {
      files.push(res);
    }
  }
  return files;
}

/**
 * Extracts YAML frontmatter key value or returns undefined.
 */
export function extractFrontmatterField(content, fieldName) {
  const match = content.match(/^---\r?\n([\s\S]+?)\r?\n---/);
  if (!match) return undefined;
  
  const yamlLines = match[1].split("\n");
  for (const line of yamlLines) {
    const trimmed = line.trim();
    if (trimmed.startsWith(`${fieldName}:`)) {
      let val = trimmed.replace(`${fieldName}:`, "").trim();
      // Unquote string if quotes exist
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      return val;
    }
  }
  return undefined;
}

/**
 * Resolves the Git diff base reference safely using execFileSync array parameters
 * and returns the full set of markdown files belonging to all changed translationKey groups.
 */
export async function resolveChangedTranslationGroups(args = process.argv.slice(2)) {
  let baseRef = process.env.BASE_SHA;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith("--base=")) {
      baseRef = arg.split("=")[1];
    } else if (arg === "--base" && args[i + 1]) {
      baseRef = args[i + 1];
    }
  }

  if (!baseRef) {
    baseRef = "origin/main";
  }

  let diffOutput = "";
  try {
    diffOutput = execFileSync("git", ["diff", "--name-only", `${baseRef}...HEAD`], {
      encoding: "utf8",
      stdio: ["pipe", "pipe", "pipe"],
    });
  } catch (_err) {
    try {
      diffOutput = execFileSync("git", ["diff", "--name-only", baseRef], {
        encoding: "utf8",
        stdio: ["pipe", "pipe", "pipe"],
      });
    } catch (_err2) {
      console.error(`ERROR: Unable to resolve Git comparison base '${baseRef}'.`);
      console.error("Provide --base=<ref>, set BASE_SHA, or fetch origin/main.");
      process.exit(1);
    }
  }

  const changedFiles = diffOutput
    .split("\n")
    .map((f) => f.trim())
    .filter((f) => f.length > 0 && (f.endsWith(".md") || f.endsWith(".mdx")) && f.startsWith("content/"));

  if (changedFiles.length === 0) {
    return { changedTranslationKeys: new Set(), targetFiles: [] };
  }

  const allFiles = await getAllMarkdownFiles();
  const fileToKeyMap = new Map();
  const keyToFilesMap = new Map();

  for (const filePath of allFiles) {
    const content = await readFile(filePath, "utf8");
    const key = extractFrontmatterField(content, "translationKey");
    if (key) {
      fileToKeyMap.set(filePath, key);
      if (!keyToFilesMap.has(key)) {
        keyToFilesMap.set(key, []);
      }
      keyToFilesMap.get(key).push(filePath);
    }
  }

  const changedTranslationKeys = new Set();
  for (const relativePath of changedFiles) {
    const absolutePath = fileURLToPath(new URL(`../../${relativePath}`, import.meta.url));
    const key = fileToKeyMap.get(absolutePath);
    if (key) {
      changedTranslationKeys.add(key);
    }
  }

  const targetFilesSet = new Set();
  for (const key of changedTranslationKeys) {
    const files = keyToFilesMap.get(key) || [];
    for (const f of files) {
      targetFilesSet.add(f);
    }
  }

  return {
    changedTranslationKeys,
    targetFiles: Array.from(targetFilesSet),
  };
}
