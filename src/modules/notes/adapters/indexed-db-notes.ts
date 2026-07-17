import type { NotesRepository, UserNote } from "../../../core/domain/models";

const DB_NAME = "software-architecture-atlas";
const STORE = "notes";

function database(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE)) {
        const store = db.createObjectStore(STORE, { keyPath: "id" });
        store.createIndex("documentId", "documentId");
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function requestResult<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export class IndexedDbNotesRepository implements NotesRepository {
  async save(note: UserNote) {
    const db = await database();
    await requestResult(db.transaction(STORE, "readwrite").objectStore(STORE).put(note));
  }
  async findByDocumentId(documentId: string) {
    const db = await database();
    return requestResult<UserNote[]>(db.transaction(STORE).objectStore(STORE).index("documentId").getAll(documentId));
  }
  async remove(noteId: string) {
    const db = await database();
    await requestResult(db.transaction(STORE, "readwrite").objectStore(STORE).delete(noteId));
  }
  async exportAll() {
    const db = await database();
    return requestResult<UserNote[]>(db.transaction(STORE).objectStore(STORE).getAll());
  }
}
