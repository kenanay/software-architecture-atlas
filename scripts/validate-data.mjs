import { readFile } from "node:fs/promises";

const load = async path => JSON.parse(await readFile(new URL(`../${path}`, import.meta.url), "utf8"));
const [taxonomy, requestMap, glossary, sources, standards, rfcs, people, relations, requirements] = await Promise.all([
  load("data/taxonomy/taxonomy.json"), load("data/taxonomy/request-map.json"), load("data/glossary/glossary.json"), load("data/sources/sources.json"),
  load("data/standards/standards.json"), load("data/rfcs/rfcs.json"), load("data/people/people.json"), load("data/relations/relations.json"),
  load("data/requirements/requirements.json"),
]);

const errors = [];
const unique = (items, label, key = "id") => {
  const seen = new Set();
  for (const item of items) {
    if (!item[key]) errors.push(`${label}: missing ${key}`);
    else if (seen.has(item[key])) errors.push(`${label}: duplicate ${key} ${item[key]}`);
    seen.add(item[key]);
  }
};

unique(taxonomy, "taxonomy"); unique(glossary, "glossary"); unique(sources, "sources");
unique(standards, "standards"); unique(rfcs, "rfcs"); unique(rfcs, "rfcs", "number"); unique(people, "people");
unique(requirements, "requirements");

const sourceIds = new Set(sources.map(source => source.id));
const taxonomyIds = new Set(taxonomy.map(section => section.id));
if (requestMap.length !== 28) errors.push(`taxonomy map: expected 28 requested headings, found ${requestMap.length}`);
for (const item of requestMap) for (const canonicalId of item.canonicalIds) if (!taxonomyIds.has(canonicalId)) errors.push(`taxonomy map: unknown canonical ID ${canonicalId}`);
for (const term of glossary) if (!sourceIds.has(term.source)) errors.push(`glossary: unknown source ${term.source}`);
for (const relation of relations) for (const sourceId of relation.evidenceSourceIds ?? []) if (!sourceIds.has(sourceId)) errors.push(`relations: unknown evidence source ${sourceId}`);
const relationKeys = new Set();
for (const relation of relations) {
  const key = `${relation.from}|${relation.type}|${relation.to}`;
  if (relationKeys.has(key)) errors.push(`relations: duplicate edge ${key}`);
  if (relation.from === relation.to) errors.push(`relations: self edge ${key}`);
  if (!relation.evidenceSourceIds?.length) errors.push(`relations: missing evidence ${key}`);
  relationKeys.add(key);
}
const requirementStatuses = new Set(["planned","in-progress","implemented","deferred"]);
for (const requirement of requirements) {
  if (!/^REQ-[A-Z0-9]+-\d{3}$/.test(requirement.id)) errors.push(`requirements: invalid ID ${requirement.id}`);
  if (!/^P[0-2]$/.test(requirement.priority)) errors.push(`requirements: invalid priority ${requirement.id}`);
  if (!requirementStatuses.has(requirement.status)) errors.push(`requirements: invalid status ${requirement.id}`);
  if (!requirement.acceptance?.trim()) errors.push(`requirements: missing acceptance ${requirement.id}`);
}
for (const standard of standards) {
  if (!standard.url?.startsWith("https://")) errors.push(`standards: invalid URL ${standard.id}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(standard.lastVerified)) errors.push(`standards: invalid lastVerified ${standard.id}`);
}
for (const rfc of rfcs) {
  if (rfc.url !== `https://www.rfc-editor.org/info/rfc${rfc.number}`) errors.push(`rfcs: noncanonical URL RFC ${rfc.number}`);
  for (const field of ["updates", "updatedBy", "obsoletes", "obsoletedBy"]) if (!Array.isArray(rfc[field])) errors.push(`rfcs: ${field} must be an array for RFC ${rfc.number}`);
}
if (taxonomy.length < 26) errors.push("taxonomy: program_info requires at least 26 top-level sections");

if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`Validated ${requestMap.length}→${taxonomy.length} taxonomy mappings, ${glossary.length} terms, ${sources.length} sources, ${standards.length} standards, ${rfcs.length} RFCs, ${relations.length} relations, ${requirements.length} requirements and ${people.length} people.`);
