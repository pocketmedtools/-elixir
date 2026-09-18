/**
 * The study module's front page: the subdivisions, the library grouped the way
 * the papers are grouped, and one button that pulls the whole library down for
 * offline use.
 */
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  BookMarked,
  BookOpen,
  ClipboardList,
  Download,
  FileText,
  FolderOpen,
  GraduationCap,
  History,
  Layers,
  ListChecks,
  Search,
  Stethoscope,
  TrendingUp,
} from "lucide-react";
import {
  SUBJECT_GROUPS,
  SUBJECT_META,
  allSubjectsLoaded,
  contentVersion,
  ensureAll,
  ensureSubject,
  getTopic,
  loadedSubjectCount,
  subjectIdForTopic,
  subscribeContent,
} from "../content/index";
import { currentStreak, getState, getVersion, subscribe } from "../lib/store";
import type { StudyView } from "./StudyModule";
import {} from "./ui";
import { colorVars } from "../lib/hues";

const SECTIONS: {
  id: string;
  title: string;
  body: string;
  view: StudyView;
  icon: typeof BookOpen;
}[] = [
  {
    id: "pattern",
    title: "Exam pattern & blueprint",
    body: "What the papers are, what they carry, and how to write them.",
    view: { name: "pattern" },
    icon: GraduationCap,
  },
  {
    id: "library",
    title: "Subject library",
    body: "Every subject, ordered common to uncommon.",
    view: { name: "library" },
    icon: BookOpen,
  },
  {
    id: "pyq",
    title: "Previous-year questions",
    body: "What was actually asked, sitting by sitting, linked to the answer.",
    view: { name: "pyq" },
    icon: History,
  },
  {
    id: "theory",
    title: "Theory question bank",
    body: "Written-paper questions with model answers, by paper.",
    view: { name: "theory" },
    icon: FileText,
  },
  {
    id: "cases",
    title: "Case presentations",
    body: "Long, short, OSCE and viva — worked end to end.",
    view: { name: "cases" },
    icon: Stethoscope,
  },
  {
    id: "howto",
    title: "How to present a case",
    body: "The running order, the phrases, the family tools.",
    view: { name: "presentation" },
    icon: ClipboardList,
  },
  {
    id: "mcq",
    title: "MCQs & mock exams",
    body: "Practice sets that target what you get wrong.",
    view: { name: "quizSetup" },
    icon: ListChecks,
  },
  {
    id: "charts",
    title: "Charts, Scores & Tables",
    body: "Every classification, scoring system, flow chart and table in one place, searchable.",
    view: { name: "charts" },
    icon: Layers,
  },
  {
    id: "docs",
    title: "My documents",
    body: "Your own notes and files, read here, complete and offline.",
    view: { name: "docs" },
    icon: FolderOpen,
  },
  {
    id: "progress",
    title: "Progress",
    body: "Streak, coverage, weak subjects, past mock scores.",
    view: { name: "progress" },
    icon: TrendingUp,
  },
];

export default function StudyHome({ onGo }: { onGo: (view: StudyView) => void }) {
  useSyncExternalStore(subscribe, getVersion);
  useSyncExternalStore(subscribeContent, contentVersion);
  const state = getState();
  const streak = currentStreak(Date.now());

  const readCount = Object.keys(state.topics).length;
  const [downloading, setDownloading] = useState<{ done: number; total: number } | null>(null);

  // The "continue reading" card needs the last topic's subject in memory.
  useEffect(() => {
    if (!state.lastTopicId) return;
    const subjectId = subjectIdForTopic(state.lastTopicId);
    if (subjectId) void ensureSubject(subjectId);
  }, [state.lastTopicId]);

  const last = state.lastTopicId ? getTopic(state.lastTopicId) : undefined;
  const ready = allSubjectsLoaded();

  return (
    <div className="mx-auto max-w-4xl px-3 py-6 md:px-6">
      <header>
        {/* One line, capitals, a book face: the name of the thing and nothing
            under it. The strapline and the count chips were noise on a phone,
            and every count is one tap away in the tiles. */}
        <h1
          className="whitespace-nowrap text-[17px] font-bold tracking-[0.04em] sm:text-[24px]"
          style={{ fontFamily: '"Times New Roman", Times, Georgia, serif', color: "var(--head)" }}
        >
          FAMILY MEDICINE EXAM PREPARATION
        </h1>
      </header>

      <button
        type="button"
        onClick={() => onGo({ name: "search" })}
        className="mt-5 flex w-full items-center gap-2.5 rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-left text-[15px] text-slate-500 shadow-sm"
      >
        <Search className="h-4 w-4" aria-hidden /> Search notes, answers, cases and your documents
      </button>

      {(last || streak > 0 || readCount > 0) && (
        <div className="mt-4 flex flex-wrap items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-3.5 text-[15px] shadow-sm">
          {streak > 0 && (
            <span className="text-[17px] font-bold text-slate-900">
              {streak} day{streak > 1 ? "s" : ""} in a row
            </span>
          )}
          {readCount > 0 && <span className="text-slate-600">{readCount} topics opened</span>}
          {last && (
            <button
              type="button"
              onClick={() => onGo({ name: "topic", id: last.topic.id })}
              className="ml-auto flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-2 text-[13px] font-bold text-white"
            >
              <BookMarked className="h-3.5 w-3.5" aria-hidden /> Continue: {last.topic.title.slice(0, 30)}
              {last.topic.title.length > 34 ? "…" : ""}
            </button>
          )}
        </div>
      )}

      <section className="mt-6 grid gap-3.5 sm:grid-cols-2">
        {SECTIONS.map((s) => {
          const Icon = s.icon;
          /* Every tile is the same card. Ten pastel tints - half of them in
             the blue family - read as ten unrelated things and fought the one
             palette the rest of the app had settled on. The green bar down the
             left edge is what the web page uses to say "this is a way in", and
             it is the only colour a tile needs. */
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onGo(s.view)}
              className="relative flex items-start gap-3.5 overflow-hidden rounded-lg border p-4.5 pl-5 text-left transition"
              style={{ borderColor: "var(--rule)", background: "var(--card)" }}
            >
              <span aria-hidden className="absolute left-0 top-0 h-full w-1" style={{ background: "var(--head)" }} />
              <span
                className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                style={{ background: "var(--mint)", color: "var(--head)" }}
              >
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-[17px] font-bold leading-snug" style={{ color: "var(--head)" }}>
                  {s.title}
                </span>
                <span className="mt-1.5 block text-[13.5px] leading-[1.55]" style={{ color: "var(--quiet)" }}>
                  {s.body}
                </span>
              </span>
            </button>
          );
        })}
      </section>

      {!ready && (
        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-4.5 shadow-sm">
          <p className="text-[17px] font-bold text-slate-900">Make the whole library available offline</p>
          <p className="mt-2 text-[15px] leading-[1.65] text-slate-700">
            Subjects download as you open them. Do it in one go now, on a connection you trust, and the entire
            library — every topic, answer, case and question — works with no network afterwards.
          </p>
          {downloading ? (
            <>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-teal-700 transition-all"
                  style={{ width: `${Math.round((downloading.done / downloading.total) * 100)}%` }}
                />
              </div>
              <p className="mt-2 text-[13px] text-slate-600">
                {downloading.done} of {downloading.total} subjects downloaded
              </p>
            </>
          ) : (
            <button
              type="button"
              onClick={async () => {
                setDownloading({ done: loadedSubjectCount(), total: SUBJECT_META.length });
                await ensureAll((done, total) => setDownloading({ done, total }));
                setDownloading(null);
              }}
              className="mt-4 flex items-center gap-2 rounded-lg bg-slate-900 px-3.5 py-2.5 text-[15px] font-semibold text-white"
            >
              <Download className="h-4 w-4" aria-hidden /> Download everything ({loadedSubjectCount()} of{" "}
              {SUBJECT_META.length} already here)
            </button>
          )}
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-[13px] font-bold uppercase tracking-widest text-slate-500">Jump to a subject</h2>
        {SUBJECT_GROUPS.map((group) => (
          <div key={group.heading} className="mt-4">
            <p className="text-[15px] font-bold text-slate-800">{group.heading}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {group.subjects.map((meta) => (
                <button
                  key={meta.id}
                  type="button"
                  onClick={() => onGo({ name: "subject", id: meta.id })}
                  // Its own colour, so the chip a reader is looking for is found
                  // before its name is read.
                  style={{ ...colorVars(meta.id), borderColor: "var(--acc-rule)", background: "var(--wash)" }}
                  className="subject-theme rounded-full border px-3.5 py-2 text-[13.5px] font-semibold shadow-sm"
                >
                  <span style={{ color: "var(--acc)" }}>{meta.title}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
