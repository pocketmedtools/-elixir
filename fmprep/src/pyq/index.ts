/**
 * The previous-year question bank.
 *
 * Two authored files, one per pair of papers, joined here with the indexes the
 * PYQ screen needs. Everything carries its provenance, because NBEMS does not
 * publish a complete public archive for this speciality and a good part of
 * what circulates is candidates' recall.
 */
import type { PaperId } from "../lib/types";
import type { PastQuestion, PyqBank, RecurringTheme } from "../lib/pyqTypes";
import { QUESTIONS_12, THEMES_12 } from "./papers12";
import { QUESTIONS_34, THEMES_34 } from "./papers34";

export const PYQ_BANK: PyqBank = {
  sourceNote:
    "Compiled from the NBEMS question-paper listings that are publicly reachable, from published DNB Family Medicine question compilations, and from candidates' recall posted after each sitting. Every question below says which of those it came from. A recalled question is a reliable guide to the theme and only an approximate guide to the exact words, so treat the wording as indicative. Your own question papers can be imported under My documents, where they are searched alongside these.",
  questions: [...QUESTIONS_12, ...QUESTIONS_34],
  themes: [...THEMES_12, ...THEMES_34],
  references: [
    { label: "NBEMS — official site and examination notices", url: "https://natboard.edu.in/" },
  ],
};

export function questionsByPaper(paper: PaperId | "all"): PastQuestion[] {
  const list = paper === "all" ? PYQ_BANK.questions : PYQ_BANK.questions.filter((q) => q.paper === paper);
  // Newest sitting first: a candidate revising works backwards from the last paper.
  return [...list].sort((a, b) => b.year - a.year || a.paper.localeCompare(b.paper));
}

/** The sittings represented, newest first. */
export function sessions(): { session: string; year: number; count: number }[] {
  const map = new Map<string, { session: string; year: number; count: number }>();
  for (const q of PYQ_BANK.questions) {
    const found = map.get(q.session);
    if (found) found.count++;
    else map.set(q.session, { session: q.session, year: q.year, count: 1 });
  }
  return [...map.values()].sort((a, b) => b.year - a.year || a.session.localeCompare(b.session));
}

export function themesByPaper(paper: PaperId | "all"): RecurringTheme[] {
  return paper === "all" ? PYQ_BANK.themes : PYQ_BANK.themes.filter((t) => t.paper === paper);
}

export function pyqCounts(): { questions: number; themes: number; sessions: number } {
  return {
    questions: PYQ_BANK.questions.length,
    themes: PYQ_BANK.themes.length,
    sessions: sessions().length,
  };
}
