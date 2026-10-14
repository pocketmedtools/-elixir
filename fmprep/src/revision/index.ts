/**
 * Revision layer: for each topic, one master table that condenses the whole
 * topic for a single read the night before, high-yield flow charts, and the
 * list of guideline changes made in the latest update pass.
 *
 * One module per subject (src/revision/<subject-id>.ts), picked up
 * automatically, so subjects can be added one at a time without touching
 * this file or the subject content.
 */
import type { Diagram, NoteTable } from "../lib/types";

/** Last-minute revision notes: short points under headings, real tables. */
export type RevisionNotes = {
  /** In exam order; each point one idea, short, plain English, **bold** key word. */
  sections: { title: string; points: string[] }[];
  /** Proper multi-column tables: drugs, differentials, classification, cut-offs. */
  tables: NoteTable[];
  /** Mnemonics and one-line exam pearls. */
  remember?: string[];
};

export type TopicRevision = {
  /** Readable revision notes (preferred over the master table when present). */
  notes?: RevisionNotes;
  /** The whole topic in one table: what to write, in the order to write it. */
  master: NoteTable;
  /** High-yield flow charts: diagnosis, management, escalation. */
  flows: Diagram[];
  /** Guideline changes applied in the latest update, one line each. */
  updated?: string[];
  /** When this topic was last checked against current guidelines (YYYY-MM). */
  checked?: string;
};
export type RevisionSet = Record<string, TopicRevision>;

const MODULES = import.meta.glob<{ default: RevisionSet }>(["./*.ts", "!./index.ts"]);
const LOADERS: Record<string, () => Promise<{ default: RevisionSet }>> = {};
for (const [path, load] of Object.entries(MODULES)) LOADERS[path.slice(2, -3)] = load;

const loaded = new Map<string, RevisionSet>();

export async function ensureRevision(subjectId: string): Promise<RevisionSet> {
  const cached = loaded.get(subjectId);
  if (cached) return cached;
  const load = LOADERS[subjectId];
  if (!load) return {};
  try {
    const mod = await load();
    loaded.set(subjectId, mod.default);
    return mod.default;
  } catch {
    loaded.set(subjectId, {});
    return {};
  }
}

export async function allRevision(): Promise<Record<string, TopicRevision>> {
  const out: Record<string, TopicRevision> = {};
  await Promise.all(
    Object.keys(LOADERS).map(async (id) => Object.assign(out, await ensureRevision(id))),
  );
  return out;
}
