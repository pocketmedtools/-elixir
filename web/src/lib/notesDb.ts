/**
 * Notes storage on the device (IndexedDB): note text plus photo, video and
 * audio attachments stored as blobs. Nothing leaves the phone.
 */

export type AttachmentKind = "image" | "video" | "audio";

export interface Attachment {
  id: string;
  kind: AttachmentKind;
  mime: string;
  name: string;
  size: number;
  createdAt: number;
}

export interface Note {
  id: string;
  text: string;
  pinned: boolean;
  createdAt: number;
  updatedAt: number;
  attachments: Attachment[];
}

const DB_NAME = "pocketmed-notes";
const VERSION = 1;

let dbPromise: Promise<IDBDatabase> | null = null;

function db(): Promise<IDBDatabase> {
  dbPromise ??= new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, VERSION);
    req.onupgradeneeded = () => {
      const d = req.result;
      if (!d.objectStoreNames.contains("notes")) d.createObjectStore("notes", { keyPath: "id" });
      if (!d.objectStoreNames.contains("blobs")) d.createObjectStore("blobs");
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return dbPromise;
}

function run<T>(store: "notes" | "blobs", mode: IDBTransactionMode, fn: (s: IDBObjectStore) => IDBRequest<T> | void): Promise<T | undefined> {
  return db().then(
    (d) =>
      new Promise((resolve, reject) => {
        const tx = d.transaction(store, mode);
        const req = fn(tx.objectStore(store));
        let result: T | undefined;
        if (req) req.onsuccess = () => { result = req.result; };
        tx.oncomplete = () => resolve(result);
        tx.onerror = () => reject(tx.error);
        tx.onabort = () => reject(tx.error);
      }),
  );
}

export const newId = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

/** All notes: pinned first, then most recently edited. */
export async function listNotes(): Promise<Note[]> {
  const all = ((await run<Note[]>("notes", "readonly", (s) => s.getAll())) ?? []) as Note[];
  return all.sort((a, b) => Number(b.pinned) - Number(a.pinned) || b.updatedAt - a.updatedAt);
}

export async function getNote(id: string): Promise<Note | undefined> {
  return run<Note>("notes", "readonly", (s) => s.get(id));
}

export async function saveNote(note: Note): Promise<void> {
  await run("notes", "readwrite", (s) => s.put(note));
}

export async function deleteNote(note: Note): Promise<void> {
  await run("notes", "readwrite", (s) => s.delete(note.id));
  for (const a of note.attachments) await run("blobs", "readwrite", (s) => s.delete(a.id));
}

export async function putBlob(id: string, blob: Blob): Promise<void> {
  await run("blobs", "readwrite", (s) => s.put(blob, id));
}

export async function getBlob(id: string): Promise<Blob | undefined> {
  return run<Blob>("blobs", "readonly", (s) => s.get(id));
}

export async function deleteBlob(id: string): Promise<void> {
  await run("blobs", "readwrite", (s) => s.delete(id));
}

export function emptyNote(): Note {
  const now = Date.now();
  return { id: newId(), text: "", pinned: false, createdAt: now, updatedAt: now, attachments: [] };
}

export function kindOf(mime: string): AttachmentKind | null {
  if (mime.startsWith("image/")) return "image";
  if (mime.startsWith("video/")) return "video";
  if (mime.startsWith("audio/")) return "audio";
  return null;
}
