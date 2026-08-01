import test from "node:test";
import assert from "node:assert/strict";

test("user note structure validation", () => {
  const note = {
    id: "note-101",
    documentId: "guide.python-architecture-guide.tr",
    body: "Hexagonal Architecture in Python separates core domain from adapters.",
    tags: ["python", "hexagonal", "architecture"],
    type: "observation",
    status: "inbox",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  assert.ok(note.id);
  assert.ok(note.documentId);
  assert.ok(note.body.length > 0);
  assert.ok(Array.isArray(note.tags));
  assert.equal(note.tags.length, 3);
  assert.equal(note.type, "observation");
  assert.equal(note.status, "inbox");
});

test("user note export and import payload validity", () => {
  const notes = [
    {
      id: "note-1",
      documentId: "guide.rust-architecture-guide.tr",
      body: "Ownership & Borrowing ensures memory safety without GC.",
      tags: ["rust", "memory-safety"],
      createdAt: "2026-08-01T20:00:00.000Z",
      updatedAt: "2026-08-01T20:00:00.000Z",
    },
    {
      id: "note-2",
      documentId: "architecture.actor-model.tr",
      body: "Actors communicate asynchronously via mailboxes.",
      tags: ["actor-model", "concurrency"],
      createdAt: "2026-08-01T20:05:00.000Z",
      updatedAt: "2026-08-01T20:05:00.000Z",
    },
  ];

  const exported = JSON.stringify(notes);
  const imported = JSON.parse(exported);

  assert.equal(imported.length, 2);
  assert.equal(imported[0].id, "note-1");
  assert.equal(imported[1].tags[0], "actor-model");
});
