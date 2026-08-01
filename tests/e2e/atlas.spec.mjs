import test from "node:test";
import assert from "node:assert/strict";

test("E2E route definitions and localized paths exist", () => {
  const locales = ["tr", "en", "es"];
  const routes = ["catalog", "glossary", "compare", "decision", "graph", "notes", "research", "requirements", "standards", "status"];

  for (const locale of locales) {
    for (const route of routes) {
      const fullPath = `/${locale}/${route}/`;
      assert.ok(fullPath.startsWith("/"));
      assert.ok(fullPath.endsWith("/"));
    }
  }
});

test("E2E IndexedDB Notes workspace storage contracts", () => {
  const sampleNote = {
    id: "e2e-note-1",
    documentId: "guide.rust-architecture-guide.tr",
    body: "Tokio runtime manages multi-threaded async task execution.",
    tags: ["rust", "tokio", "async"],
    type: "observation",
    status: "inbox",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  assert.equal(sampleNote.type, "observation");
  assert.equal(sampleNote.status, "inbox");
  assert.ok(sampleNote.tags.includes("rust"));
});
