/**
 * Remembers the last open tool and every tool's entries on this device, so a
 * reopen — hours or days later, signed in or not — shows exactly the last
 * calculation until the user changes it.
 *
 * Everything sits under one localStorage key. Values are checked against the
 * field's starting value on load, so an entry saved by an older version that
 * no longer fits is simply ignored.
 */
import { useCallback, useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";

const KEY = "POCKETMED_LAST";

type Store = Record<string, Record<string, unknown>>;

let store: Store | null = null;
let timer: number | null = null;

function data(): Store {
  if (store) return store;
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    store = parsed && typeof parsed === "object" && !Array.isArray(parsed) ? (parsed as Store) : {};
  } catch {
    store = {};
  }
  return store;
}

function flush(): void {
  if (timer != null) {
    window.clearTimeout(timer);
    timer = null;
  }
  try {
    localStorage.setItem(KEY, JSON.stringify(data()));
  } catch {
    /* storage full or blocked: this session still works */
  }
}

function scheduleFlush(): void {
  if (timer == null) timer = window.setTimeout(flush, 250);
}

if (typeof window !== "undefined") {
  // Write immediately when the app is hidden or closed.
  window.addEventListener("pagehide", flush);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") flush();
  });
}

export function readLast(tool: string, field: string): unknown {
  return data()[tool]?.[field];
}

export function writeLast(tool: string, field: string, value: unknown): void {
  const s = data();
  (s[tool] ??= {})[field] = value;
  scheduleFlush();
}

/** Does a stored value fit the field it is being restored into? */
export function fits(raw: unknown, initial: unknown): boolean {
  if (raw === undefined) return false;
  if (Array.isArray(initial)) return Array.isArray(raw);
  if (initial === null || initial === "") {
    return raw === null || ["string", "number", "boolean"].includes(typeof raw);
  }
  if (typeof initial === "number") return (typeof raw === "number" && Number.isFinite(raw)) || raw === "";
  return typeof raw === typeof initial;
}

export interface Codec<T> {
  save: (v: T) => unknown;
  load: (raw: unknown) => T | undefined;
}

/**
 * useState that restores its last value for this tool and saves every change.
 * A codec stores an id instead of a whole object (e.g. a drug), so a restored
 * entry always uses the current data rather than an old copy.
 */
export function usePersist<T>(
  tool: string,
  field: string,
  initial: T | (() => T),
  codec?: Codec<T>,
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const start = typeof initial === "function" ? (initial as () => T)() : initial;
    const raw = readLast(tool, field);
    if (raw === undefined) return start;
    if (codec) return codec.load(raw) ?? start;
    return fits(raw, start) ? (raw as T) : start;
  });

  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    writeLast(tool, field, codec ? codec.save(value) : value);
  }, [tool, field, value, codec]);

  const set = useCallback<Dispatch<SetStateAction<T>>>((v) => setValue(v), []);
  return [value, set];
}

/** Forget every entry of one tool ("New patient"). */
export function clearLast(tool: string): void {
  delete data()[tool];
  flush();
}
