/**
 * Automatic per-tool history: the last 5 completed calculations of every
 * tool, kept on this device (no sign-in needed). A result is recorded once it
 * has stayed unchanged for a moment, so half-typed values are not stored.
 */

export interface HistoryEntry {
  at: number;
  title: string;
  detail: string;
}

const KEY = "POCKETMED_HISTORY";
const MAX = 5;

type Store = Record<string, HistoryEntry[]>;

const listeners = new Set<() => void>();
let version = 0;

function read(): Store {
  try {
    const raw = localStorage.getItem(KEY);
    const s = raw ? JSON.parse(raw) : {};
    return s && typeof s === "object" && !Array.isArray(s) ? (s as Store) : {};
  } catch {
    return {};
  }
}

export function getHistory(tool: string): HistoryEntry[] {
  const list = read()[tool];
  return Array.isArray(list) ? list.slice(0, MAX) : [];
}

/** Newest first; an identical result moves to the top instead of repeating. */
export function addHistory(tool: string, title: string, detail: string, at = Date.now()): void {
  const s = read();
  const prev = (s[tool] ?? []).filter((e) => !(e.title === title && e.detail === detail));
  s[tool] = [{ at, title, detail }, ...prev].slice(0, MAX);
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* storage full: history simply isn't kept */
  }
  version++;
  listeners.forEach((l) => l());
}

export function clearHistory(tool: string): void {
  const s = read();
  delete s[tool];
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* ignore */
  }
  version++;
  listeners.forEach((l) => l());
}

export function subscribeHistory(l: () => void): () => void {
  listeners.add(l);
  return () => listeners.delete(l);
}

export const historyVersion = () => version;

// The open tool's id, set by App while it renders, so any tool component can
// record into its own history without knowing its id.
let active = "";
export const setActiveTool = (id: string) => { active = id; };
export const activeTool = () => active;
