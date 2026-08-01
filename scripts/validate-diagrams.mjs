import { readFile } from "node:fs/promises";
import { getAllMarkdownFiles } from "./lib/resolve-changed-content.mjs";

const files = await getAllMarkdownFiles();
let totalDiagrams = 0;
const errors = [];
const warnings = [];

const supportedTypes = [
  "graph", "flowchart", "sequenceDiagram", "classDiagram",
  "stateDiagram", "erDiagram", "gantt", "pie", "gitGraph", "C4Context"
];

for (const file of files) {
  const content = await readFile(file, "utf8");
  const mermaidRegex = /```mermaid\r?\n([\s\S]*?)\r?\n```/g;
  const matches = [...content.matchAll(mermaidRegex)];

  if (matches.length > 0) {
    totalDiagrams += matches.length;

    for (let i = 0; i < matches.length; i++) {
      const diagramBody = matches[i][1].trim();

      if (!diagramBody) {
        errors.push(`File ${file}: Empty Mermaid diagram block (diagram #${i + 1}).`);
        continue;
      }

      // Check first word/line for supported diagram type
      const firstLine = diagramBody.split("\n")[0].trim();
      const isValidType = supportedTypes.some((type) => firstLine.startsWith(type));

      if (!isValidType) {
        warnings.push(`File ${file}: Mermaid diagram #${i + 1} uses unsupported or custom type in '${firstLine}'.`);
      }

      // Check accessibility fallback annotation in content nearby
      const hasFallback = content.includes("accessible-fallback") || content.includes("fallback") || content.includes("aria-label");
      if (!hasFallback) {
        warnings.push(`File ${file}: Mermaid diagram #${i + 1} lacks explicit accessible fallback annotation.`);
      }
    }
  }
}

if (errors.length > 0) {
  console.error("Diagram Validation Errors:");
  console.error(errors.join("\n"));
  process.exit(1);
}

if (warnings.length > 0) {
  console.warn("Diagram Validation Warnings:");
  console.warn(warnings.join("\n"));
}

console.log(`Validated ${totalDiagrams} Mermaid diagrams successfully.`);
