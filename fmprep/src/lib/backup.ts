/**
 * A safety copy of "My documents" outside the app.
 *
 * The documents live in the app's own storage, which Android deletes when the
 * app is uninstalled or its data is cleared. So every document is also copied,
 * as the original file, into the phone's public Documents folder:
 *
 *   Documents/FM Prep backup/
 *     index-<install>.json  names, folders, dates, extracted text
 *     <id>-<file name>      each original file, byte for byte
 *
 * Each install of the app writes its own index file and never touches
 * another's. So if the app's storage is wiped and it starts again empty, its
 * new index cannot overwrite the old one: the earlier backup stays whole and
 * Restore reads every index it finds.
 *
 * That folder survives uninstalling the app. The copy is kept in step
 * automatically a few seconds after anything is added, renamed, moved or
 * deleted. "Restore" reads it back - directly when the app can still see the
 * folder, otherwise from the files the user picks in that folder (Android 11+
 * does not let a reinstalled app read files an earlier install wrote).
 *
 * On the website (no native shell) the same backup is one .zip download.
 */
import { Capacitor } from "@capacitor/core";
import { allRecords, getDocs, restoreFolders, restoreRecord, storedFolderList, subscribe, type StudyDoc } from "./docs";

export const BACKUP_DIR = "FM Prep backup";
const SYNCED_KEY = "FMPREP_BACKUP_SYNCED_V1";
const STATUS_KEY = "FMPREP_BACKUP_STATUS_V1";
const INSTALL_KEY = "FMPREP_INSTALL_ID_V1";

function installId(): string {
  try {
    let id = localStorage.getItem(INSTALL_KEY);
    if (!id) {
      id = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
      localStorage.setItem(INSTALL_KEY, id);
    }
    return id;
  } catch {
    return "x";
  }
}
const indexName = () => `index-${installId()}.json`;

type IndexEntry = Omit<StudyDoc, "text"> & { text: string; file: string };
type BackupIndex = { app: "fm-prep"; version: 1; savedAt: number; folders: string[]; docs: IndexEntry[] };

export type BackupStatus = { at: number; count: number; ok: boolean; error?: string };

export const hasNativeBackup = () => Capacitor.isNativePlatform();

export function backupStatus(): BackupStatus | null {
  try {
    const raw = localStorage.getItem(STATUS_KEY);
    return raw ? (JSON.parse(raw) as BackupStatus) : null;
  } catch {
    return null;
  }
}
function setStatus(s: BackupStatus) {
  try {
    localStorage.setItem(STATUS_KEY, JSON.stringify(s));
  } catch {
    /* storage blocked */
  }
  statusListeners.forEach((l) => l());
}
const statusListeners = new Set<() => void>();
export function subscribeBackup(l: () => void): () => void {
  statusListeners.add(l);
  return () => statusListeners.delete(l);
}

function syncedMap(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(SYNCED_KEY) ?? "{}") as Record<string, string>;
  } catch {
    return {};
  }
}
function saveSynced(m: Record<string, string>) {
  try {
    localStorage.setItem(SYNCED_KEY, JSON.stringify(m));
  } catch {
    /* storage blocked */
  }
}

const fileNameFor = (d: { id: string; fileName: string }) =>
  `${d.id}-${d.fileName.replace(/[\\/:*?"<>|\u0000-\u001f]/g, "_").slice(0, 120)}`;

/** Bytes to base64 without building one giant string per file. */
function toBase64(bytes: Uint8Array): string {
  let s = "";
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(s);
}

async function fs() {
  return (await import("@capacitor/filesystem")).Filesystem;
}
async function dirDocuments() {
  return (await import("@capacitor/filesystem")).Directory.Documents;
}

/** Write a Blob in 3 MB pieces, so a large PDF never needs one huge string. */
async function writeBlob(path: string, blob: Blob): Promise<void> {
  const F = await fs();
  const directory = await dirDocuments();
  const CHUNK = 3 * 1024 * 1024; // a multiple of 3: each piece encodes on its own
  if (blob.size === 0) {
    await F.writeFile({ path, directory, data: "", recursive: true });
    return;
  }
  for (let at = 0; at < blob.size; at += CHUNK) {
    const data = toBase64(new Uint8Array(await blob.slice(at, at + CHUNK).arrayBuffer()));
    if (at === 0) await F.writeFile({ path, directory, data, recursive: true });
    else await F.appendFile({ path, directory, data });
  }
}

let running = false;
let again = false;

/** Bring the backup folder in step with the documents on this device. */
export async function syncBackup(): Promise<void> {
  if (!hasNativeBackup()) return;
  if (running) {
    again = true;
    return;
  }
  running = true;
  try {
    const F = await fs();
    const directory = await dirDocuments();
    try {
      await F.requestPermissions();
    } catch {
      /* not needed on Android 11+ */
    }
    const records = await allRecords();
    const synced = syncedMap();
    const live = new Set<string>();
    const entries: IndexEntry[] = [];
    for (const r of records) {
      const file = fileNameFor(r);
      live.add(r.id);
      // A document's bytes never change after import (only its name, folder
      // or notes text), so a file already copied is not written again.
      const stamp = `${file}:${r.bytes}`;
      if (r.blob && synced[r.id] !== stamp) {
        await writeBlob(`${BACKUP_DIR}/${file}`, r.blob);
        synced[r.id] = stamp;
        saveSynced(synced);
      }
      const { blob: _b, ...meta } = r;
      void _b;
      entries.push({ ...meta, text: meta.text ?? "", file });
    }
    const index: BackupIndex = { app: "fm-prep", version: 1, savedAt: Date.now(), folders: storedFolderList(), docs: entries };
    await F.writeFile({
      path: `${BACKUP_DIR}/${indexName()}`,
      directory,
      data: JSON.stringify(index),
      encoding: (await import("@capacitor/filesystem")).Encoding.UTF8,
      recursive: true,
    });
    // Files of documents deleted on purpose go from the backup too.
    for (const id of Object.keys(synced)) {
      if (live.has(id)) continue;
      const name = synced[id].replace(/:\d+$/, "");
      await F.deleteFile({ path: `${BACKUP_DIR}/${name}`, directory }).catch(() => undefined);
      delete synced[id];
    }
    saveSynced(synced);
    setStatus({ at: Date.now(), count: entries.length, ok: true });
  } catch (e) {
    setStatus({ at: Date.now(), count: getDocs().length, ok: false, error: e instanceof Error ? e.message : String(e) });
  } finally {
    running = false;
    if (again) {
      again = false;
      void syncBackup();
    }
  }
}

let started = false;
/** Keep the backup in step automatically. Called once, after the documents load. */
export function startAutoBackup(): void {
  if (started || !hasNativeBackup()) return;
  started = true;
  let timer = 0;
  const kick = () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => void syncBackup(), 3000);
  };
  subscribe(kick);
  kick();
}

/** Ask the browser/web view never to clear the app's storage on its own. */
export async function askPersistentStorage(): Promise<void> {
  try {
    if (navigator.storage?.persist && !(await navigator.storage.persisted?.())) await navigator.storage.persist();
  } catch {
    /* not supported */
  }
}

/* ------------------------------------------------------------------ */
/* Restore                                                             */
/* ------------------------------------------------------------------ */

export type RestoreResult = { restored: number; skipped: number; missing: string[] };

function fromBase64(b64: string, type: string): Blob {
  const bin = atob(b64);
  const bytes = new Uint8Array(new ArrayBuffer(bin.length));
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new Blob([bytes], { type });
}

/** Every index merged, newest first, one entry per document. */
function merge(indexes: BackupIndex[]): { folders: string[]; docs: IndexEntry[] } {
  const ok = indexes.filter((i) => i?.app === "fm-prep" && Array.isArray(i.docs)).sort((a, b) => b.savedAt - a.savedAt);
  if (!ok.length) throw new Error("No FM Prep backup found in what was picked.");
  const seen = new Map<string, IndexEntry>();
  for (const i of ok) for (const d of i.docs) if (!seen.has(d.id)) seen.set(d.id, d);
  return { folders: [...new Set(ok.flatMap((i) => i.folders ?? []))], docs: [...seen.values()] };
}

async function restoreFrom(indexes: BackupIndex[], getFile: (name: string, mime: string) => Promise<Blob | null>): Promise<RestoreResult> {
  const index = merge(indexes);
  restoreFolders(index.folders);
  let restored = 0;
  let skipped = 0;
  const missing: string[] = [];
  for (const e of index.docs) {
    if (getDocs().some((d) => d.id === e.id)) {
      skipped++;
      continue;
    }
    const blob = await getFile(e.file, e.mime);
    if (!blob) {
      missing.push(e.fileName);
      continue;
    }
    const { file: _f, ...meta } = e;
    void _f;
    if (await restoreRecord({ ...meta, blob })) restored++;
    else skipped++;
  }
  return { restored, skipped, missing };
}

/** Every index file in the backup folder this install can read. */
async function readIndexes(): Promise<BackupIndex[]> {
  const F = await fs();
  const directory = await dirDocuments();
  const { Encoding } = await import("@capacitor/filesystem");
  const out: BackupIndex[] = [];
  try {
    const list = await F.readdir({ path: BACKUP_DIR, directory });
    for (const f of list.files) {
      if (!/^index(-[\w]+)?\.json$/.test(f.name)) continue;
      try {
        const raw = await F.readFile({ path: `${BACKUP_DIR}/${f.name}`, directory, encoding: Encoding.UTF8 });
        out.push(JSON.parse(String(raw.data)) as BackupIndex);
      } catch {
        /* written by an earlier install and not readable now */
      }
    }
  } catch {
    /* no folder yet */
  }
  return out;
}

/** How many backed-up documents are not on this device (0 if none or unreadable). */
export async function backupMissingCount(): Promise<number> {
  if (!hasNativeBackup()) return 0;
  try {
    const { docs } = merge(await readIndexes());
    const here = new Set(getDocs().map((d) => d.id));
    return docs.filter((d) => !here.has(d.id)).length;
  } catch {
    return 0;
  }
}

/** Restore straight from the backup folder, when the app can still read it. */
export async function restoreFromFolder(): Promise<RestoreResult> {
  const F = await fs();
  const directory = await dirDocuments();
  const indexes = await readIndexes();
  if (!indexes.length) throw new Error("The backup folder cannot be read from here.");
  return restoreFrom(indexes, async (name, mime) => {
    try {
      const r = await F.readFile({ path: `${BACKUP_DIR}/${name}`, directory });
      return typeof r.data === "string" ? fromBase64(r.data, mime) : (r.data as Blob);
    } catch {
      return null;
    }
  });
}

/**
 * Restore from files the user picked: either every file in the
 * "FM Prep backup" folder (index.json and the rest), or one backup .zip.
 */
export async function restoreFromPicked(files: File[]): Promise<RestoreResult> {
  const zip = files.find((f) => f.name.toLowerCase().endsWith(".zip"));
  if (zip && files.length === 1) {
    const JSZip = (await import("jszip")).default;
    const z = await JSZip.loadAsync(await zip.arrayBuffer());
    const idxFiles = z.file(/(^|\/)index(-[\w]+)?\.json$/);
    if (!idxFiles.length) throw new Error("No index file in this zip - it is not an FM Prep backup.");
    const prefix = idxFiles[0].name.includes("/") ? idxFiles[0].name.replace(/[^/]+$/, "") : "";
    const indexes = await Promise.all(idxFiles.map(async (f) => JSON.parse(await f.async("string")) as BackupIndex));
    return restoreFrom(indexes, async (name, mime) => {
      const f = z.file(prefix + name);
      return f ? new Blob([await f.async("arraybuffer")], { type: mime }) : null;
    });
  }
  const idx = files.filter((f) => /^index(-[\w]+)?( ?\(\d+\))?\.json$/.test(f.name));
  if (!idx.length) throw new Error("Select all the files in Documents › FM Prep backup (including the index files).");
  const indexes = await Promise.all(idx.map(async (f) => JSON.parse(await f.text()) as BackupIndex));
  const byName = new Map(files.map((f) => [f.name, f]));
  return restoreFrom(indexes, async (name) => byName.get(name) ?? null);
}

/** Website: the whole backup as one .zip download. */
export async function downloadBackupZip(): Promise<void> {
  const JSZip = (await import("jszip")).default;
  const z = new JSZip();
  const records = await allRecords();
  const docs: IndexEntry[] = [];
  for (const r of records) {
    const file = fileNameFor(r);
    if (r.blob) z.file(file, r.blob);
    const { blob: _b, ...meta } = r;
    void _b;
    docs.push({ ...meta, text: meta.text ?? "", file });
  }
  const index: BackupIndex = { app: "fm-prep", version: 1, savedAt: Date.now(), folders: storedFolderList(), docs };
  z.file(indexName(), JSON.stringify(index));
  const blob = await z.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `FM-Prep-backup-${new Date().toISOString().slice(0, 10)}.zip`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

/** Save one original file where the user can find it (Documents/FM Prep). */
export async function saveToDevice(name: string, blob: Blob): Promise<string> {
  const path = `FM Prep/${name.replace(/[\\/:*?"<>|]/g, "_")}`;
  await writeBlob(path, blob);
  return `Documents/${path}`;
}
