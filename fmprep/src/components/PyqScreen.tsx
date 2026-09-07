/**
 * Previous-year questions — the learner's own papers, read three ways.
 *
 * By sitting: every question of every paper from June 2022 to June 2025.
 * By topic:   the 2011-2022 compilation, grouped as it groups itself, with the
 *             most-asked topics first and the years each has appeared in.
 * Sources:    both documents in full, word for word, and the originals to
 *             download.
 *
 * Every question is matched against the library at read time, so it opens onto
 * the topic that answers it.
 */
import { useMemo, useState } from "react";
import {
  PAPER_QUESTIONS,
  PYQ_SOURCE_NOTE,
  papersFor,
  pyqCounts,
  recurringTopics,
  sittings,
  topicGroups,
  type SourceQuestion,
  type TopicwiseQuestion,
} from "../pyq/index";
import { linkTopics } from "../pyq/link";
import type { PaperId } from "../lib/types";
import { BackBar, Chip, Empty } from "./ui";

const PAPERS: PaperId[] = ["I", "II", "III", "IV"];

const KIND_LABEL: Record<string, string> = {
  long: "Long answer",
  "short-note": "Short note",
  enumerate: "Enumerate",
  differentiate: "Differentiate",
  "define-classify": "Define & classify",
  "chart-flow": "Flow chart",
};

/** One question, with the library topics that answer it. */
function QuestionCard({
  id,
  question,
  meta,
  onOpenTopic,
}: {
  id: string;
  question: string;
  meta: React.ReactNode;
  onOpenTopic: (topicId: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const links = useMemo(() => (open ? linkTopics(question) : []), [open, question]);

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start gap-2 p-3.5 text-left"
      >
        <span className="min-w-0 flex-1">
          <span className="block leading-relaxed text-slate-900">{question}</span>
          <span className="mt-1.5 flex flex-wrap items-center gap-1.5">{meta}</span>
        </span>
        <span aria-hidden className="text-slate-400">
          {open ? "▾" : "▸"}
        </span>
      </button>

      {open && (
        <div className="border-t border-slate-100 px-3.5 pb-4 pt-3">
          {links.length === 0 ? (
            <p className="text-sm text-slate-600">
              No single library topic covers this one closely. Search the library for a phrase from
              the question, or read the subject it belongs to.
            </p>
          ) : (
            <>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Answer it from
              </p>
              <div className="mt-1.5 flex flex-col gap-1.5">
                {links.map((l) => (
                  <button
                    key={`${id}-${l.topicId}`}
                    type="button"
                    onClick={() => onOpenTopic(l.topicId)}
                    className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-left text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    {l.topicTitle}
                    <span className="ml-1.5 font-normal text-slate-500">· {l.subjectTitle}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function PyqScreen({
  onBack,
  onOpenTopic,
  onOpenSources,
}: {
  onBack: () => void;
  onOpenTopic: (id: string) => void;
  onOpenSources: () => void;
}) {
  const [view, setView] = useState<"sittings" | "topics" | "recurring">("sittings");
  const [paper, setPaper] = useState<PaperId | "all">("all");
  const [session, setSession] = useState<string | "all">("all");
  const [topicQuery, setTopicQuery] = useState("");
  const [openTopic, setOpenTopic] = useState<string | null>(null);

  const counts = pyqCounts();
  const sittingList = sittings();
  const paperList = papersFor(session, paper);
  const groups = topicGroups();
  const recurring = recurringTopics();

  const shownGroups = useMemo(() => {
    const q = topicQuery.trim().toLowerCase();
    const base = view === "recurring" ? recurring : groups;
    if (!q) return base;
    return base.filter(
      (g) =>
        g.topic.toLowerCase().includes(q) ||
        g.questions.some((x) => x.question.toLowerCase().includes(q)),
    );
  }, [groups, recurring, topicQuery, view]);

  const tab = (active: boolean) =>
    `flex-1 rounded-xl border p-2.5 text-sm font-bold ${
      active ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white text-slate-800"
    }`;
  const pill = (active: boolean) =>
    `rounded-full px-3 py-1.5 text-xs font-semibold transition ${
      active ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
    }`;

  return (
    <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
      <BackBar onBack={onBack} label="Home" />
      <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">
        Previous-year questions
      </h1>
      <p className="mt-1 leading-relaxed text-slate-700">
        {counts.paperQuestions} questions from {counts.sittings} sittings (2022–2025), and{" "}
        {counts.topicwiseQuestions} filed under {counts.topics} topics (2011–2022). Every one opens
        onto the topic that answers it.
      </p>
      <p className="mt-2 rounded-xl border border-slate-200 bg-white p-3 text-sm leading-relaxed text-slate-700 shadow-sm">
        {PYQ_SOURCE_NOTE}
      </p>
      <button
        type="button"
        onClick={onOpenSources}
        className="mt-2 w-full rounded-xl border border-cyan-200 bg-cyan-50 px-4 py-3 text-left text-sm font-semibold text-cyan-950"
      >
        Read the source documents in full →
      </button>

      <div className="mt-4 flex gap-2">
        <button type="button" onClick={() => setView("sittings")} className={tab(view === "sittings")}>
          By sitting
        </button>
        <button type="button" onClick={() => setView("topics")} className={tab(view === "topics")}>
          By topic
        </button>
        <button
          type="button"
          onClick={() => setView("recurring")}
          className={tab(view === "recurring")}
        >
          Repeaters
        </button>
      </div>

      {view === "sittings" ? (
        <>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <button type="button" className={pill(paper === "all")} onClick={() => setPaper("all")}>
              All papers
            </button>
            {PAPERS.map((p) => (
              <button key={p} type="button" className={pill(paper === p)} onClick={() => setPaper(p)}>
                Paper {p}
              </button>
            ))}
          </div>
          <select
            value={session}
            onChange={(e) => setSession(e.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800"
          >
            <option value="all">Every sitting ({PAPER_QUESTIONS.length})</option>
            {sittingList.map((s) => (
              <option key={s.session} value={s.session}>
                {s.session} — {s.count} questions, papers {s.papers.join(", ")}
              </option>
            ))}
          </select>

          <p className="mt-3 text-xs text-slate-500">{paperList.length} questions</p>
          <div className="mt-2 space-y-2">
            {paperList.map((q: SourceQuestion) => (
              <QuestionCard
                key={q.id}
                id={q.id}
                question={q.question}
                onOpenTopic={onOpenTopic}
                meta={
                  <>
                    <Chip tone="blue">Paper {q.paper}</Chip>
                    <Chip>{q.session}</Chip>
                    <Chip>Q{q.number}</Chip>
                    {q.marks > 0 && <Chip>{q.marks} marks</Chip>}
                    <Chip tone="teal">{KIND_LABEL[q.kind] ?? q.kind}</Chip>
                  </>
                }
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <input
            value={topicQuery}
            onChange={(e) => setTopicQuery(e.target.value)}
            placeholder="Find a topic or a phrase"
            className="mt-3 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-500"
          />
          <p className="mt-2 text-xs text-slate-500">
            {view === "recurring"
              ? `${shownGroups.length} topics asked in three or more different years`
              : `${shownGroups.length} topics`}
          </p>

          {shownGroups.length === 0 ? (
            <Empty title="Nothing matches" body="Try a shorter phrase, or clear the box." />
          ) : (
            <div className="mt-2 space-y-2">
              {shownGroups.map((g) => {
                const isOpen = openTopic === g.topic;
                return (
                  <div key={g.topic} className="rounded-xl border border-slate-200 bg-white shadow-sm">
                    <button
                      type="button"
                      onClick={() => setOpenTopic(isOpen ? null : g.topic)}
                      className="flex w-full items-start gap-2 p-3.5 text-left"
                    >
                      <span className="min-w-0 flex-1">
                        <span className="block font-bold text-slate-900">{g.topic}</span>
                        <span className="mt-1 flex flex-wrap items-center gap-1.5">
                          <Chip tone="blue">
                            {g.questions.length} question{g.questions.length > 1 ? "s" : ""}
                          </Chip>
                          <Chip>{g.years.length} years</Chip>
                          <span className="text-[11px] text-slate-500">{g.years.join(", ")}</span>
                        </span>
                      </span>
                      <span aria-hidden className="text-slate-400">
                        {isOpen ? "▾" : "▸"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="space-y-2 border-t border-slate-100 p-3">
                        {g.questions.map((q: TopicwiseQuestion) => (
                          <QuestionCard
                            key={q.id}
                            id={q.id}
                            question={q.question}
                            onOpenTopic={onOpenTopic}
                            meta={
                              <>
                                <Chip>{q.session}</Chip>
                                {q.marks > 0 && <Chip>{q.marks} marks</Chip>}
                                <Chip tone="teal">{KIND_LABEL[q.kind] ?? q.kind}</Chip>
                              </>
                            }
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
