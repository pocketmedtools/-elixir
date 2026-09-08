/**
 * Diagrams, kept beside the library rather than inside it.
 *
 * A subject file is 350-450 KB, and adding diagrams into those objects would
 * mean every author editing the same enormous files. Diagrams live here instead,
 * one module per subject, keyed by topic id — so they can be written, reviewed
 * and replaced without touching a line of the topic they illustrate, and a topic
 * with no diagram yet simply renders without one.
 */
import type { Diagram, DiagramSet } from "../lib/types";

const LOADERS: Record<string, () => Promise<{ default: DiagramSet }>> = {
  cardiovascular: () => import("./cardiovascular"),
  dermatology: () => import("./dermatology"),
  emergency: () => import("./emergency"),
  endocrine: () => import("./endocrine"),
  "eye-ent": () => import("./eye-ent"),
  "fm-principles": () => import("./fm-principles"),
  "gastro-hepatology": () => import("./gastro-hepatology"),
  "geriatrics-ethics": () => import("./geriatrics-ethics"),
  gynaecology: () => import("./gynaecology"),
  "infectious-fever": () => import("./infectious-fever"),
  musculoskeletal: () => import("./musculoskeletal"),
  neurology: () => import("./neurology"),
  obstetrics: () => import("./obstetrics"),
  pediatrics: () => import("./pediatrics"),
  preventive: () => import("./preventive"),
  psychiatry: () => import("./psychiatry"),
  "renal-urology": () => import("./renal-urology"),
  respiratory: () => import("./respiratory"),
  "surgery-office": () => import("./surgery-office"),
  "symptom-approach": () => import("./symptom-approach"),
};

const loaded = new Map<string, DiagramSet>();

/** Load one subject's diagrams. A subject with no module yet returns nothing. */
export async function ensureDiagrams(subjectId: string): Promise<DiagramSet> {
  const cached = loaded.get(subjectId);
  if (cached) return cached;
  const load = LOADERS[subjectId];
  if (!load) return {};
  try {
    const mod = await load();
    loaded.set(subjectId, mod.default);
    return mod.default;
  } catch {
    // A subject whose diagrams have not been written yet is not an error.
    loaded.set(subjectId, {});
    return {};
  }
}

export async function ensureAllDiagrams(): Promise<Record<string, DiagramSet>> {
  const out: Record<string, DiagramSet> = {};
  await Promise.all(
    Object.keys(LOADERS).map(async (id) => {
      out[id] = await ensureDiagrams(id);
    }),
  );
  return out;
}

/** Every diagram written so far, keyed by topic id. */
export async function diagramsByTopic(): Promise<Record<string, Diagram[]>> {
  const all = await ensureAllDiagrams();
  const out: Record<string, Diagram[]> = {};
  for (const set of Object.values(all)) {
    for (const [topicId, list] of Object.entries(set)) {
      if (list.length) out[topicId] = list;
    }
  }
  return out;
}
