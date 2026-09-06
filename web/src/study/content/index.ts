/**
 * The content registry.
 *
 * The library is large — each subject is tens of thousands of words — so
 * subjects are NOT bundled into the app. Each one is its own lazily imported
 * chunk, and this file holds the small static list of what exists plus the
 * loader that pulls a subject in when it is actually opened.
 *
 * Screens read the synchronous accessors below, which return whatever is
 * loaded, and subscribe to `subscribeContent` so they re-render when a chunk
 * arrives. `ensureAll` pulls the whole library in one go — that is what the
 * search box, the mock papers, the flashcards and the "make available
 * offline" button use. Once a chunk has been fetched, the service worker has
 * it cached and it opens with no network at all.
 */
import {
  FREQUENCY_ORDER,
  type ClinicalCase,
  type Flashcard,
  type Frequency,
  type Mcq,
  type PaperId,
  type Subject,
  type TheoryQuestion,
  type Topic,
} from "../lib/types";

export type SubjectMeta = {
  id: string;
  title: string;
  blurb: string;
  papers: PaperId[];
  /** Grouping on the library screen. */
  group: string;
};

/** Everything the library screen needs before a single chunk is downloaded. */
export const SUBJECT_META: SubjectMeta[] = [
  {
    id: "symptom-approach",
    title: "Undifferentiated Symptoms",
    blurb: "The complaint as it actually walks in: tiredness, giddiness, body ache, chest pain, fever without focus.",
    papers: ["I", "II"],
    group: "The consultation",
  },
  {
    id: "fm-principles",
    title: "Principles of Family Medicine & Research",
    blurb: "The consultation models, the family as the unit of care, audit, evidence-based medicine and research methods.",
    papers: ["I"],
    group: "The consultation",
  },
  {
    id: "cardiovascular",
    title: "Cardiovascular",
    blurb: "Hypertension, coronary disease, heart failure, atrial fibrillation, rheumatic heart disease and lipids.",
    papers: ["II"],
    group: "Medicine and allied",
  },
  {
    id: "endocrine",
    title: "Endocrine & Metabolic",
    blurb: "Diabetes from diagnosis to insulin, thyroid disease, obesity and the metabolic syndrome.",
    papers: ["II"],
    group: "Medicine and allied",
  },
  {
    id: "respiratory",
    title: "Respiratory",
    blurb: "Asthma, COPD, tuberculosis under NTEP, pneumonia, and the cough that has lasted a fortnight.",
    papers: ["II"],
    group: "Medicine and allied",
  },
  {
    id: "gastro-hepatology",
    title: "Gastroenterology & Hepatology",
    blurb: "Acid peptic disease, diarrhoea, jaundice, chronic liver disease and the acute abdomen in general practice.",
    papers: ["II"],
    group: "Medicine and allied",
  },
  {
    id: "infectious-fever",
    title: "Fever & Infectious Disease",
    blurb: "Acute undifferentiated fever, dengue, malaria, typhoid, scrub typhus, HIV, rabies and snake bite.",
    papers: ["II"],
    group: "Medicine and allied",
  },
  {
    id: "neurology",
    title: "Neurology",
    blurb: "Headache, stroke, seizures, vertigo, neuropathy, dementia and central nervous system infection.",
    papers: ["II"],
    group: "Medicine and allied",
  },
  {
    id: "renal-urology",
    title: "Renal & Urology",
    blurb: "Chronic kidney disease, acute kidney injury, stones, prostate disease and electrolyte trouble.",
    papers: ["II", "III"],
    group: "Medicine and allied",
  },
  {
    id: "musculoskeletal",
    title: "Musculoskeletal & Rheumatology",
    blurb: "Back pain, osteoarthritis, rheumatoid arthritis, gout, soft tissue rheumatism and osteoporosis.",
    papers: ["II", "III"],
    group: "Medicine and allied",
  },
  {
    id: "psychiatry",
    title: "Psychiatry & Behavioural Medicine",
    blurb: "Depression, anxiety, somatic symptoms, alcohol and tobacco, psychosis, sleep and delirium.",
    papers: ["II"],
    group: "Medicine and allied",
  },
  {
    id: "surgery-office",
    title: "Surgery & Office Procedures",
    blurb: "Wounds and suturing, abscesses, lumps, hernia, diabetic foot and the procedures done in the clinic.",
    papers: ["III"],
    group: "Surgery and allied",
  },
  {
    id: "dermatology",
    title: "Dermatology",
    blurb: "Steroid-modified tinea, scabies, eczema, psoriasis, acne, drug rashes and leprosy.",
    papers: ["III"],
    group: "Surgery and allied",
  },
  {
    id: "eye-ent",
    title: "Eye & ENT",
    blurb: "The red eye, vision screening, otitis, hearing loss, epistaxis, sore throat and oral cancer screening.",
    papers: ["III"],
    group: "Surgery and allied",
  },
  {
    id: "emergency",
    title: "Emergency & Acute Care",
    blurb: "Resuscitation, anaphylaxis, shock, poisoning, burns, trauma and what the clinic tray must hold.",
    papers: ["III"],
    group: "Surgery and allied",
  },
  {
    id: "pediatrics",
    title: "Paediatrics",
    blurb: "Newborn care, growth, immunisation, IMNCI, diarrhoea, malnutrition and the sick child under five.",
    papers: ["IV"],
    group: "Maternal and child health",
  },
  {
    id: "obstetrics",
    title: "Obstetrics",
    blurb: "Antenatal care, anaemia, hypertensive disease, gestational diabetes, labour and postpartum haemorrhage.",
    papers: ["IV"],
    group: "Maternal and child health",
  },
  {
    id: "gynaecology",
    title: "Gynaecology",
    blurb: "Abnormal bleeding, contraception, PCOS, infertility, discharge, menopause and cancer screening.",
    papers: ["IV"],
    group: "Maternal and child health",
  },
  {
    id: "preventive",
    title: "Preventive & Community Medicine",
    blurb: "Screening principles, the national programmes, immunisation, biostatistics and outbreak investigation.",
    papers: ["I", "IV"],
    group: "Community, geriatrics and ethics",
  },
  {
    id: "geriatrics-ethics",
    title: "Geriatrics, Palliative Care & Ethics",
    blurb: "Geriatric assessment, falls, deprescribing, end-of-life care, consent, records and medico-legal duties.",
    papers: ["I", "II"],
    group: "Community, geriatrics and ethics",
  },
];

/** One dynamic import per subject: this is what makes each one its own chunk. */
const LOADERS: Record<string, () => Promise<{ default: Subject }>> = {
  "symptom-approach": () => import("./symptom-approach"),
  "fm-principles": () => import("./fm-principles"),
  cardiovascular: () => import("./cardiovascular"),
  endocrine: () => import("./endocrine"),
  respiratory: () => import("./respiratory"),
  "gastro-hepatology": () => import("./gastro-hepatology"),
  "infectious-fever": () => import("./infectious-fever"),
  neurology: () => import("./neurology"),
  "renal-urology": () => import("./renal-urology"),
  musculoskeletal: () => import("./musculoskeletal"),
  psychiatry: () => import("./psychiatry"),
  "surgery-office": () => import("./surgery-office"),
  dermatology: () => import("./dermatology"),
  "eye-ent": () => import("./eye-ent"),
  emergency: () => import("./emergency"),
  pediatrics: () => import("./pediatrics"),
  obstetrics: () => import("./obstetrics"),
  gynaecology: () => import("./gynaecology"),
  preventive: () => import("./preventive"),
  "geriatrics-ethics": () => import("./geriatrics-ethics"),
};

export const SUBJECT_GROUPS: { heading: string; subjects: SubjectMeta[] }[] = [
  "The consultation",
  "Medicine and allied",
  "Surgery and allied",
  "Maternal and child health",
  "Community, geriatrics and ethics",
].map((heading) => ({ heading, subjects: SUBJECT_META.filter((s) => s.group === heading) }));

/* ------------------------------------------------------------------ */
/* Loading                                                             */
/* ------------------------------------------------------------------ */

const loaded = new Map<string, Subject>();
const inFlight = new Map<string, Promise<Subject | null>>();
const failed = new Set<string>();

let version = 0;
const listeners = new Set<() => void>();

function emit() {
  version++;
  clearIndexes();
  for (const l of listeners) l();
}

export function subscribeContent(fn: () => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function contentVersion(): number {
  return version;
}

export function isSubjectLoaded(id: string): boolean {
  return loaded.has(id);
}

export function loadedSubjectCount(): number {
  return loaded.size;
}

export function allSubjectsLoaded(): boolean {
  return loaded.size === SUBJECT_META.length;
}

/** Pull one subject in. Repeat calls share the same request. */
export function ensureSubject(id: string): Promise<Subject | null> {
  const already = loaded.get(id);
  if (already) return Promise.resolve(already);
  const running = inFlight.get(id);
  if (running) return running;
  const loader = LOADERS[id];
  if (!loader) return Promise.resolve(null);

  const promise = loader()
    .then((module) => {
      loaded.set(id, module.default);
      inFlight.delete(id);
      emit();
      return module.default;
    })
    .catch(() => {
      // Offline and not yet cached: record it so the screen can say so.
      inFlight.delete(id);
      failed.add(id);
      emit();
      return null;
    });
  inFlight.set(id, promise);
  return promise;
}

export function subjectFailed(id: string): boolean {
  return failed.has(id);
}

/** Pull the whole library in, reporting how far it has got. */
export async function ensureAll(onProgress?: (done: number, total: number) => void): Promise<void> {
  const total = SUBJECT_META.length;
  let done = loaded.size;
  onProgress?.(done, total);
  // Sequential on purpose: twenty parallel chunk downloads on a phone are
  // slower overall and make the progress meaningless.
  for (const meta of SUBJECT_META) {
    if (!loaded.has(meta.id)) {
      await ensureSubject(meta.id);
      done = loaded.size;
      onProgress?.(done, total);
    }
  }
}

/* ------------------------------------------------------------------ */
/* Synchronous views over whatever is loaded                           */
/* ------------------------------------------------------------------ */

export type IndexedTopic = { topic: Topic; subjectId: string; subjectTitle: string };
export type IndexedMcq = {
  mcq: Mcq;
  subjectId: string;
  subjectTitle: string;
  topicId: string;
  topicTitle: string;
};
export type IndexedCard = {
  card: Flashcard;
  subjectId: string;
  subjectTitle: string;
  topicId: string;
  topicTitle: string;
};
export type IndexedTheory = {
  question: TheoryQuestion;
  subjectId: string;
  subjectTitle: string;
  topicId: string;
  topicTitle: string;
};
export type IndexedCase = { clinicalCase: ClinicalCase; subjectId: string; subjectTitle: string };

let topicMemo: Map<string, IndexedTopic> | null = null;
let mcqListMemo: IndexedMcq[] | null = null;
let mcqMapMemo: Map<string, IndexedMcq> | null = null;
let cardListMemo: IndexedCard[] | null = null;
let theoryListMemo: IndexedTheory[] | null = null;
let caseListMemo: IndexedCase[] | null = null;

function clearIndexes() {
  topicMemo = null;
  mcqListMemo = null;
  mcqMapMemo = null;
  cardListMemo = null;
  theoryListMemo = null;
  caseListMemo = null;
}

/** Loaded subjects, in library order. */
export function subjects(): Subject[] {
  return SUBJECT_META.map((m) => loaded.get(m.id)).filter((s): s is Subject => s != null);
}

export function getSubject(id: string): Subject | undefined {
  return loaded.get(id);
}

export function getSubjectMeta(id: string): SubjectMeta | undefined {
  return SUBJECT_META.find((s) => s.id === id);
}

export function topicIndex(): Map<string, IndexedTopic> {
  if (topicMemo) return topicMemo;
  const map = new Map<string, IndexedTopic>();
  for (const subject of subjects())
    for (const topic of subject.topics)
      map.set(topic.id, { topic, subjectId: subject.id, subjectTitle: subject.title });
  topicMemo = map;
  return map;
}

export function getTopic(id: string): IndexedTopic | undefined {
  return topicIndex().get(id);
}

/** Which subject a topic id belongs to, without needing it loaded. */
export function subjectIdForTopic(topicId: string): string | undefined {
  return SUBJECT_META.map((m) => m.id)
    .filter((id) => topicId.startsWith(id))
    .sort((a, b) => b.length - a.length)[0];
}

export function allTopics(): IndexedTopic[] {
  return [...topicIndex().values()];
}

export function allMcqs(): IndexedMcq[] {
  if (mcqListMemo) return mcqListMemo;
  const list: IndexedMcq[] = [];
  for (const subject of subjects())
    for (const topic of subject.topics)
      for (const mcq of topic.mcqs)
        list.push({
          mcq,
          subjectId: subject.id,
          subjectTitle: subject.title,
          topicId: topic.id,
          topicTitle: topic.title,
        });
  mcqListMemo = list;
  return list;
}

export function mcqIndex(): Map<string, IndexedMcq> {
  if (mcqMapMemo) return mcqMapMemo;
  mcqMapMemo = new Map(allMcqs().map((q) => [q.mcq.id, q]));
  return mcqMapMemo;
}

export function allCards(): IndexedCard[] {
  if (cardListMemo) return cardListMemo;
  const list: IndexedCard[] = [];
  for (const subject of subjects())
    for (const topic of subject.topics)
      for (const card of topic.cards)
        list.push({
          card,
          subjectId: subject.id,
          subjectTitle: subject.title,
          topicId: topic.id,
          topicTitle: topic.title,
        });
  cardListMemo = list;
  return list;
}

export function allTheory(): IndexedTheory[] {
  if (theoryListMemo) return theoryListMemo;
  const list: IndexedTheory[] = [];
  for (const subject of subjects())
    for (const topic of subject.topics)
      for (const question of topic.theory ?? [])
        list.push({
          question,
          subjectId: subject.id,
          subjectTitle: subject.title,
          topicId: topic.id,
          topicTitle: topic.title,
        });
  theoryListMemo = list;
  return list;
}

export function allCases(): IndexedCase[] {
  if (caseListMemo) return caseListMemo;
  const list: IndexedCase[] = [];
  for (const subject of subjects())
    for (const clinicalCase of subject.cases ?? [])
      list.push({ clinicalCase, subjectId: subject.id, subjectTitle: subject.title });
  caseListMemo = list;
  return list;
}

export function getCase(id: string): IndexedCase | undefined {
  return allCases().find((c) => c.clinicalCase.id === id);
}

export function getTheory(id: string): IndexedTheory | undefined {
  return allTheory().find((t) => t.question.id === id);
}

/** A subject's topics split into frequency bands, commonest band first. */
export function topicsByFrequency(subject: Subject): { band: Frequency; topics: Topic[] }[] {
  return FREQUENCY_ORDER.map((band) => ({
    band,
    topics: subject.topics.filter((t) => t.frequency === band),
  })).filter((group) => group.topics.length > 0);
}

export function contentCounts(): {
  subjects: number;
  subjectsAvailable: number;
  topics: number;
  mcqs: number;
  cards: number;
  theory: number;
  cases: number;
} {
  return {
    subjects: loaded.size,
    subjectsAvailable: SUBJECT_META.length,
    topics: topicIndex().size,
    mcqs: allMcqs().length,
    cards: allCards().length,
    theory: allTheory().length,
    cases: allCases().length,
  };
}

/** Reading order across the loaded library, for next/previous links. */
export function topicOrder(): IndexedTopic[] {
  const out: IndexedTopic[] = [];
  for (const subject of subjects())
    for (const topic of subject.topics)
      out.push({ topic, subjectId: subject.id, subjectTitle: subject.title });
  return out;
}

export function neighbours(topicId: string): { prev: IndexedTopic | null; next: IndexedTopic | null } {
  const order = topicOrder();
  const i = order.findIndex((t) => t.topic.id === topicId);
  if (i < 0) return { prev: null, next: null };
  return { prev: order[i - 1] ?? null, next: order[i + 1] ?? null };
}
