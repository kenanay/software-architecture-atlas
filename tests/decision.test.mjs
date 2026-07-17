import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("taxonomy identifiers are unique", async () => {
  const data=JSON.parse(await readFile(new URL("../data/taxonomy/taxonomy.json",import.meta.url)));
  assert.equal(new Set(data.map(item=>item.id)).size,data.length);
});

test("glossary terms include bilingual definitions and sources", async () => {
  const data=JSON.parse(await readFile(new URL("../data/glossary/glossary.json",import.meta.url)));
  for(const term of data){assert.ok(term.definition_tr);assert.ok(term.definition_en);assert.ok(term.source);}
});

test("source identifiers are unique and access dates exist", async () => {
  const data=JSON.parse(await readFile(new URL("../data/sources/sources.json",import.meta.url)));
  assert.equal(new Set(data.map(item=>item.id)).size,data.length);
  for(const source of data) assert.match(source.accessed_at,/^\d{4}-\d{2}-\d{2}$/);
});
