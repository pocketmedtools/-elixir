/**
 * Linking a past question to the topics that answer it.
 *
 * Rather than maintaining a mapping table that would rot as the library grows,
 * each question is matched at read time against the loaded topics' titles and
 * keywords. A keyword is only counted on a word boundary, and longer keywords
 * count for more, so "MI" does not fire on "family" and "diabetic ketoacidosis"
 * outweighs "fever".
 */
import { allTopics, type IndexedTopic } from "../content/index";

export type TopicLink = {
  topicId: string;
  topicTitle: string;
  subjectId: string;
  subjectTitle: string;
  score: number;
};

/** Terms that match almost any clinical question and so carry no signal. */
const STOP = new Set([
  "patient", "management", "treatment", "diagnosis", "causes", "clinical",
  "features", "investigations", "history", "examination", "approach", "child",
  "adult", "man", "woman", "family", "physician", "practice", "india", "fever",
  "pain", "acute", "chronic", "care", "risk", "disease", "syndrome",
]);

/**
 * Papers write in shorthand — "Vit.D", "K/C/O", "c/o", "&" — while the library
 * spells things out. Normalising both sides is what lets a question about
 * "Vit.D deficiency" find the vitamin D topic.
 */
const SHORTHAND: [RegExp, string][] = [
  [/\bvit\.?\s*/gi, "vitamin "],
  [/\bk\/c\/o\b/gi, "known case of"],
  [/\bc\/o\b/gi, "complains of"],
  [/\bh\/o\b/gi, "history of"],
  [/\bo\/e\b/gi, "on examination"],
  [/\bd\/d\b/gi, "differential diagnosis"],
  [/\bt2dm\b/gi, "type 2 diabetes"],
  [/\bt1dm\b/gi, "type 1 diabetes"],
  [/\bhtn\b/gi, "hypertension"],
  [/\bdm\b/gi, "diabetes"],
  [/\bckd\b/gi, "chronic kidney disease"],
  [/\bcopd\b/gi, "chronic obstructive pulmonary disease"],
  [/\bpid\b/gi, "pelvic inflammatory disease"],
  [/\baub\b/gi, "abnormal uterine bleeding"],
  [/\bpcos\b/gi, "polycystic ovary syndrome"],
  [/\buti\b/gi, "urinary tract infection"],
  [/\btb\b/gi, "tuberculosis"],
  [/&/g, " and "],
];

export function normalise(text: string): string {
  let out = ` ${text.toLowerCase()} `;
  for (const [re, replacement] of SHORTHAND) out = out.replace(re, replacement);
  return out.replace(/\s+/g, " ");
}

function escapeRegex(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function hits(haystack: string, term: string): number {
  const t = term.trim().toLowerCase();
  if (t.length < 3 || STOP.has(t)) return 0;
  const re = new RegExp(`\\b${escapeRegex(t)}\\b`, "g");
  return (haystack.match(re) ?? []).length;
}

function scoreTopic(haystack: string, entry: IndexedTopic): number {
  const { topic } = entry;
  let score = 0;

  // The title carries the most weight: a question naming the topic is about it.
  for (const word of topic.title.toLowerCase().split(/[^a-z0-9]+/)) {
    if (word.length < 4 || STOP.has(word)) continue;
    score += hits(haystack, word) * 3;
  }
  // A whole-title match is decisive.
  const shortTitle = topic.title.split(/[:(]/)[0].trim().toLowerCase();
  if (shortTitle.length > 6 && haystack.includes(shortTitle)) score += 25;

  // The one-line definition often carries the same words as the question.
  for (const word of topic.oneLiner.toLowerCase().split(/[^a-z0-9]+/)) {
    if (word.length < 6 || STOP.has(word)) continue;
    if (hits(haystack, word) > 0) score += 1;
  }

  for (const keyword of topic.keywords) {
    const n = hits(haystack, keyword);
    if (n === 0) continue;
    // Longer keywords are more specific, so they are worth more.
    score += n * Math.min(6, Math.max(2, Math.round(keyword.length / 4)));
  }
  return score;
}

/**
 * The best library topics for a question, strongest first. Returns nothing
 * rather than a weak guess when the question is not clearly about any of them.
 */
export function linkTopics(questionText: string, limit = 3): TopicLink[] {
  const haystack = normalise(questionText);
  const scored: TopicLink[] = [];
  for (const entry of allTopics()) {
    const score = scoreTopic(haystack, entry);
    if (score >= 10) {
      scored.push({
        topicId: entry.topic.id,
        topicTitle: entry.topic.title,
        subjectId: entry.subjectId,
        subjectTitle: entry.subjectTitle,
        score,
      });
    }
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, limit);
}

/** The subjects a question belongs to, inferred from its best topic matches. */
export function linkSubjects(questionText: string): { id: string; title: string }[] {
  const seen = new Map<string, string>();
  for (const link of linkTopics(questionText, 4)) {
    if (!seen.has(link.subjectId)) seen.set(link.subjectId, link.subjectTitle);
  }
  return [...seen.entries()].map(([id, title]) => ({ id, title }));
}
