/**
 * "My Documents" — the learner's own study material, held on this device.
 *
 * Everything a doctor has already written (project notes, case presentations,
 * seminar files, question banks) can be brought in and read inside the app.
 * The ORIGINAL FILE IS KEPT BYTE-FOR-BYTE alongside the extracted text, so a
 * document can always be exported again exactly as it came in, and the reader
 * never shows a summary — it shows the whole text, in order, unedited.
 *
 * Storage is IndexedDB (localStorage is a few megabytes and would not hold a
 * folder of PDFs). Nothing is uploaded: there is no server in this app.
 */

export type DocKind = "text" | "markdown" | "pdf" | "docx" | "html" | "image" | "other";

export type StudyDoc = {
  id: string;
  title: string;
  /** User-made subdivision, e.g. "FM Project" or "Case Presentations". */
  collection: string;
  kind: DocKind;
  /** Original file name as imported, or a typed title for pasted notes. */
  fileName: string;
  mime: string;
  bytes: number;
  addedAt: number;
  /** Full extracted text, verbatim and complete. Empty when not extractable. */
  text: string;
  /** Page count for PDFs. */
  pages?: number;
  /** Why text is empty, when it is. */
  extractNote?: string;
};

/** The stored record: metadata plus the untouched original file. */
type DocRecord = StudyDoc & { blob?: Blob };

const DB_NAME = "fmprep-docs";
const DB_VERSION = 1;
const STORE = "docs";

let dbPromise: Promise<IDBDatabase> | null = null;

function openDb(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) {
        const store = db.createObjectStore(STORE, { keyPath: "id" });
        store.createIndex("collection", "collection", { unique: false });
        store.createIndex("addedAt", "addedAt", { unique: false });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error ?? new Error("IndexedDB unavailable"));
  });
  return dbPromise;
}

function tx<T>(mode: IDBTransactionMode, run: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return openDb().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const transaction = db.transaction(STORE, mode);
        const req = run(transaction.objectStore(STORE));
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error ?? new Error("Storage error"));
      }),
  );
}

/* ------------------------------------------------------------------ */
/* React subscription: an in-memory mirror of the metadata            */
/* ------------------------------------------------------------------ */

let cache: StudyDoc[] = [];
let loaded = false;
let version = 0;
const listeners = new Set<() => void>();

function emit() {
  version++;
  for (const l of listeners) l();
}

export function subscribe(fn: () => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function getVersion(): number {
  return version;
}

/** Metadata for every document, newest first. Empty until load() resolves. */
export function getDocs(): StudyDoc[] {
  return cache;
}

export function isLoaded(): boolean {
  return loaded;
}

function strip(record: DocRecord): StudyDoc {
  const { blob: _blob, ...meta } = record;
  void _blob;
  return meta;
}

/** Read every record's metadata into memory. Safe to call repeatedly. */
export async function load(): Promise<void> {
  try {
    const all = await tx<DocRecord[]>("readonly", (store) => store.getAll() as IDBRequest<DocRecord[]>);
    cache = all.map(strip).sort((a, b) => b.addedAt - a.addedAt);
  } catch {
    cache = [];
  }
  loaded = true;
  emit();
}

export function collections(): string[] {
  const set = new Set<string>();
  for (const d of cache) set.add(d.collection);
  return [...set].sort((a, b) => a.localeCompare(b));
}

/* ------------------------------------------------------------------ */
/* Text extraction                                                     */
/* ------------------------------------------------------------------ */

function kindFor(file: { name: string; type: string }): DocKind {
  const name = file.name.toLowerCase();
  const type = file.type.toLowerCase();
  if (name.endsWith(".pdf") || type === "application/pdf") return "pdf";
  if (name.endsWith(".docx")) return "docx";
  if (name.endsWith(".md") || name.endsWith(".markdown")) return "markdown";
  if (name.endsWith(".html") || name.endsWith(".htm") || type === "text/html") return "html";
  if (type.startsWith("image/")) return "image";
  if (
    type.startsWith("text/") ||
    name.endsWith(".txt") ||
    name.endsWith(".csv") ||
    name.endsWith(".json") ||
    name.endsWith(".rtf") ||
    name.endsWith(".log")
  )
    return "text";
  return "other";
}

async function pdfToText(file: File): Promise<{ text: string; pages: number }> {
  // Loaded on demand so the reader's first paint never waits for the PDF engine.
  const pdfjs = await import("pdfjs-dist");
  // The worker is an ES module, so it is handed over as a live port built by
  // the bundler rather than as a script URL, which would be loaded classically
  // and fail. Extraction then runs off the main thread and the page stays
  // responsive while a long PDF is read.
  const PdfWorker = (await import("pdfjs-dist/build/pdf.worker.min.mjs?worker")).default;
  pdfjs.GlobalWorkerOptions.workerPort = new PdfWorker();
  const data = new Uint8Array(await file.arrayBuffer());
  const doc = await pdfjs.getDocument({ data }).promise;
  const chunks: string[] = [];
  for (let p = 1; p <= doc.numPages; p++) {
    const page = await doc.getPage(p);
    const content = await page.getTextContent();
    // Re-insert the line breaks the PDF text layer drops, using each item's
    // own end-of-line flag, so paragraphs survive instead of running together.
    let line = "";
    const lines: string[] = [];
    for (const item of content.items) {
      if (!("str" in item)) continue;
      line += item.str;
      if (item.hasEOL) {
        lines.push(line);
        line = "";
      }
    }
    if (line) lines.push(line);
    chunks.push(`\n\n[Page ${p}]\n${lines.join("\n")}`);
  }
  return { text: chunks.join("").trim(), pages: doc.numPages };
}

async function docxToText(file: File): Promise<string> {
  const mammoth = await import("mammoth/mammoth.browser");
  const result = await mammoth.extractRawText({ arrayBuffer: await file.arrayBuffer() });
  return result.value;
}

function htmlToText(html: string): string {
  const parsed = new DOMParser().parseFromString(html, "text/html");
  // A parsed document has no layout, so innerText can come back empty even
  // when there is text; textContent is the reliable read.
  const body = parsed.body;
  if (!body) return "";
  const rendered = body.innerText?.trim();
  return rendered && rendered.length > 0 ? body.innerText : (body.textContent ?? "");
}

async function extract(file: File, kind: DocKind): Promise<{ text: string; pages?: number; note?: string }> {
  try {
    if (kind === "pdf") {
      const { text, pages } = await pdfToText(file);
      if (!text.trim())
        return {
          text: "",
          pages,
          note: "This PDF holds scanned pages, not selectable text, so there is nothing to extract. The original file is stored and can be exported.",
        };
      return { text, pages };
    }
    if (kind === "docx") return { text: await docxToText(file) };
    if (kind === "html") return { text: htmlToText(await file.text()) };
    if (kind === "text" || kind === "markdown") return { text: await file.text() };
    if (kind === "image")
      return { text: "", note: "An image is stored and shown as it is; there is no text to extract." };
    return {
      text: "",
      note: "This file type cannot be read as text. It is stored unchanged and can be exported. Save it as PDF, DOCX, TXT or MD to read it here.",
    };
  } catch (e) {
    return {
      text: "",
      note: `Could not read this file (${e instanceof Error ? e.message : "unknown error"}). The original is stored and can be exported.`,
    };
  }
}

/* ------------------------------------------------------------------ */
/* Writing                                                             */
/* ------------------------------------------------------------------ */

function newId(): string {
  return `d${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}

export type ImportResult = { added: StudyDoc[]; failed: { name: string; error: string }[] };

/** Import one or more picked files into a collection, keeping the originals. */
export async function addFiles(files: File[], collection: string): Promise<ImportResult> {
  const added: StudyDoc[] = [];
  const failed: { name: string; error: string }[] = [];
  for (const file of files) {
    try {
      const kind = kindFor(file);
      const { text, pages, note } = await extract(file, kind);
      const record: DocRecord = {
        id: newId(),
        title: file.name.replace(/\.[^.]+$/, ""),
        collection: collection.trim() || "Unfiled",
        kind,
        fileName: file.name,
        mime: file.type || "application/octet-stream",
        bytes: file.size,
        addedAt: Date.now(),
        text,
        pages,
        extractNote: note,
        blob: file,
      };
      await tx("readwrite", (store) => store.put(record));
      added.push(strip(record));
    } catch (e) {
      failed.push({ name: file.name, error: e instanceof Error ? e.message : "Could not store this file." });
    }
  }
  if (added.length) {
    cache = [...added, ...cache].sort((a, b) => b.addedAt - a.addedAt);
    emit();
  }
  return { added, failed };
}

/** Save typed or pasted notes as a document. */
export async function addText(title: string, text: string, collection: string): Promise<StudyDoc> {
  const record: DocRecord = {
    id: newId(),
    title: title.trim() || "Untitled note",
    collection: collection.trim() || "Unfiled",
    kind: "markdown",
    fileName: `${(title.trim() || "note").replace(/[^\w -]/g, "")}.md`,
    mime: "text/markdown",
    bytes: new Blob([text]).size,
    addedAt: Date.now(),
    text,
    blob: new Blob([text], { type: "text/markdown" }),
  };
  await tx("readwrite", (store) => store.put(record));
  cache = [strip(record), ...cache];
  emit();
  return strip(record);
}

/**
 * Put the documents that ship with the app into the library, once.
 *
 * These are the learner's own source papers, carried word for word. They are
 * inserted under fixed ids, so a second call is a no-op and a document the
 * learner has renamed, moved or deleted is not resurrected or overwritten.
 */
export async function seedDocuments(
  seeds: { id: string; title: string; fileName: string; note: string; text: string; originalPath: string }[],
): Promise<void> {
  const added: StudyDoc[] = [];
  for (const seed of seeds) {
    try {
      const marker = `seeded:${seed.id}`;
      // A tombstone remembers a seed the learner deleted, so it stays deleted.
      if (localStorage.getItem(marker) === "done") continue;
      const existing = await tx<DocRecord | undefined>("readonly", (store) => store.get(seed.id) as IDBRequest<DocRecord | undefined>);
      if (!existing) {
        const record: DocRecord = {
          id: seed.id,
          title: seed.title,
          collection: "Question papers",
          kind: "text",
          fileName: seed.fileName,
          mime: "text/plain",
          bytes: new Blob([seed.text]).size,
          addedAt: Date.now(),
          text: seed.text,
          extractNote: `${seed.note} The original file can be downloaded from ${seed.originalPath}.`,
          blob: new Blob([seed.text], { type: "text/plain" }),
        };
        await tx("readwrite", (store) => store.put(record));
        added.push(strip(record));
      }
      localStorage.setItem(marker, "done");
    } catch {
      // Storage unavailable: the app still works, the papers just are not seeded.
    }
  }
  if (added.length) {
    cache = [...added, ...cache].sort((a, b) => b.addedAt - a.addedAt);
    emit();
  }
}

export async function updateDoc(
  id: string,
  patch: Partial<Pick<StudyDoc, "title" | "collection" | "text">>,
): Promise<void> {
  const existing = await tx<DocRecord | undefined>("readonly", (store) => store.get(id) as IDBRequest<DocRecord | undefined>);
  if (!existing) return;
  const next: DocRecord = { ...existing, ...patch };
  if (patch.text != null && existing.kind === "markdown") {
    next.blob = new Blob([patch.text], { type: "text/markdown" });
    next.bytes = next.blob.size;
  }
  await tx("readwrite", (store) => store.put(next));
  cache = cache.map((d) => (d.id === id ? strip(next) : d));
  emit();
}

export async function deleteDoc(id: string): Promise<void> {
  await tx("readwrite", (store) => store.delete(id));
  cache = cache.filter((d) => d.id !== id);
  emit();
}

/** Rename a whole subdivision, moving every document in it. */
export async function renameCollection(from: string, to: string): Promise<void> {
  const target = to.trim() || "Unfiled";
  for (const doc of cache.filter((d) => d.collection === from)) {
    await updateDoc(doc.id, { collection: target });
  }
}

/** The full record, including the original file, for reading or export. */
export async function getDoc(id: string): Promise<DocRecord | undefined> {
  return tx<DocRecord | undefined>("readonly", (store) => store.get(id) as IDBRequest<DocRecord | undefined>);
}

/* ------------------------------------------------------------------ */
/* Reading helpers                                                     */
/* ------------------------------------------------------------------ */

export type DocHit = {
  doc: StudyDoc;
  /** Character offset of the match in doc.text. */
  at: number;
  /** Text around the match, for the result list. */
  snippet: string;
};

/** Case-insensitive search over every stored document's full text. */
export function searchDocs(query: string, limit = 60): DocHit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const hits: DocHit[] = [];
  for (const doc of cache) {
    const haystack = `${doc.title}\n${doc.text}`.toLowerCase();
    let from = 0;
    let found = 0;
    while (found < 3) {
      const at = haystack.indexOf(q, from);
      if (at < 0) break;
      const start = Math.max(0, at - 70);
      const source = `${doc.title}\n${doc.text}`;
      hits.push({
        doc,
        at: Math.max(0, at - doc.title.length - 1),
        snippet: `${start > 0 ? "…" : ""}${source.slice(start, at + q.length + 90).replace(/\s+/g, " ")}…`,
      });
      from = at + q.length;
      found++;
      if (hits.length >= limit) return hits;
    }
  }
  return hits;
}

export function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${Math.round(n / 1024)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}

/** Words in the extracted text — shown so nothing looks silently truncated. */
export function wordCount(text: string): number {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}
