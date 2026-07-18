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

test("program_info taxonomy exposes every planned top-level section", async () => {
  const data=JSON.parse(await readFile(new URL("../data/taxonomy/taxonomy.json",import.meta.url)));
  assert.equal(data.length,26);
  assert.deepEqual(data.map(item=>item.order),Array.from({length:26},(_,index)=>index));
});

test("RFC obsolescence relationships are reciprocal when both records exist", async () => {
  const data=JSON.parse(await readFile(new URL("../data/rfcs/rfcs.json",import.meta.url)));
  const byNumber=new Map(data.map(item=>[item.number,item]));
  for(const rfc of data) for(const number of rfc.obsoletedBy){
    const successor=byNumber.get(number);
    if(successor) assert.ok(successor.obsoletes.includes(rfc.number),`RFC ${number} must obsolete RFC ${rfc.number}`);
  }
});

test("all 28 requested sections map to canonical taxonomy identifiers", async () => {
  const [taxonomy,mapping]=await Promise.all([
    readFile(new URL("../data/taxonomy/taxonomy.json",import.meta.url)).then(JSON.parse),
    readFile(new URL("../data/taxonomy/request-map.json",import.meta.url)).then(JSON.parse),
  ]);
  const ids=new Set(taxonomy.map(item=>item.id));
  assert.equal(mapping.length,28);
  for(const item of mapping) for(const id of item.canonicalIds) assert.ok(ids.has(id),`${id} must exist in canonical taxonomy`);
});

test("RFC 9846 metadata reflects the current RFC Editor record", async () => {
  const data=JSON.parse(await readFile(new URL("../data/rfcs/rfcs.json",import.meta.url)));
  const rfc=data.find(item=>item.number===9846);
  assert.equal(rfc.publicationDate,"2026-07");
  assert.equal(rfc.status,"Proposed Standard");
  assert.deepEqual(rfc.updates,[5705,6066]);
  assert.deepEqual(rfc.obsoletes,[5077,5246,6961,7627,8422,8446]);
});

test("service worker defines versioned caches and explicit offline strategies", async () => {
  const source=await readFile(new URL("../public/sw.js",import.meta.url),"utf8");
  assert.match(source,/atlas-shell-\$\{VERSION\}/);
  assert.match(source,/networkFirst/);
  assert.match(source,/staleWhileRevalidate/);
  assert.match(source,/\/offline\//);
});

test("requirements are traceable and include acceptance criteria", async () => {
  const data=JSON.parse(await readFile(new URL("../data/requirements/requirements.json",import.meta.url)));
  assert.ok(data.length>=10);
  for(const item of data){assert.match(item.id,/^REQ-[A-Z0-9]+-\d{3}$/);assert.match(item.priority,/^P[0-2]$/);assert.ok(item.owner);assert.ok(item.acceptance);}
});

test("knowledge relations have unique, evidenced edges", async () => {
  const data=JSON.parse(await readFile(new URL("../data/relations/relations.json",import.meta.url)));
  const keys=data.map(item=>`${item.from}|${item.type}|${item.to}`);
  assert.equal(new Set(keys).size,keys.length);
  for(const item of data){assert.notEqual(item.from,item.to);assert.ok(item.evidenceSourceIds.length);}
});

test("claims have localized statements and source locators", async () => {
  const [claims,sources]=await Promise.all([readFile(new URL("../data/claims/claims.json",import.meta.url)).then(JSON.parse),readFile(new URL("../data/sources/sources.json",import.meta.url)).then(JSON.parse)]);
  const sourceIds=new Set(sources.map(item=>item.id));
  for(const claim of claims){assert.match(claim.id,/^claim\./);assert.ok(claim.statement.tr);assert.ok(claim.statement.en);assert.ok(claim.evidence.length);for(const evidence of claim.evidence){assert.ok(sourceIds.has(evidence.sourceId));assert.ok(evidence.locator);}}
});

test("startup scripts do not forcibly terminate port owners", async () => {
  const [shell,batch]=await Promise.all([readFile(new URL("../start.sh",import.meta.url),"utf8"),readFile(new URL("../start.bat",import.meta.url),"utf8")]);
  assert.doesNotMatch(shell,/kill\s+-9/);assert.doesNotMatch(batch,/taskkill\s+\/F/i);
});
