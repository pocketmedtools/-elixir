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
  TOPICWISE_QUESTIONS,
  papersFor,
  recurringTopics,
  sittings,
  topicGroups,
  type SourceQuestion,
  type TopicwiseQuestion,
} from "../pyq/index";
import { linksFor } from "../pyq/link";
import { PREDICTED, type PredictedQuestion } from "../pyq/predicted";
import { getTopic } from "../content/index";
import type { PaperId } from "../lib/types";
import { BackBar, Chip, Empty } from "./ui";
import { markSplit, repeatIndex, type MarkSplit, type Repeat } from "../lib/pyqStats";

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
/* How often a question has been asked matters more than anything else on the
   card: one that has come up in three sittings is the one to learn first. The
   mark split is the examiner's own bracket notation, lifted out of the question
   text where it was reading as ordinary prose. */
function QuestionHistory({ repeat, split, stated }: { repeat?: Repeat; split?: MarkSplit | null; stated: number }) {
  if (!repeat?.sittings.length && !split) return null;
  return (
    <>
      {repeat && repeat.times > 1 && (
        <p className="mt-2 text-[13px] leading-snug" style={{ color: "var(--quiet)" }}>
          Sittings: {repeat.sittings.join(" · ")}
        </p>
      )}
      {split && (
        <p className="mt-2.5 flex flex-wrap items-center gap-1.5">
          <span className="text-[12px] font-bold" style={{ color: "var(--label)" }}>Marks</span>
          {split.parts.map((n, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[12px] font-semibold"
              style={{ background: "var(--mint)", borderColor: "var(--rule)", color: "var(--label)" }}
            >
              {i + 1}
              <b className="text-[13.5px]" style={{ color: "var(--head)" }}>{n}</b>
            </span>
          ))}
          <span className="text-[12.5px] font-bold" style={{ color: "var(--head)" }}>
            = {split.total}
            {split.disagrees ? ` (stated ${stated})` : ""}
          </span>
        </p>
      )}
    </>
  );
}

/** "a) ... [3] b) ... [3] c) ... [4]" becomes a stem and three numbered parts,
 *  each with its own marks, which is how the paper prints it and how a
 *  candidate divides the answer. A question with no lettered parts is left
 *  whole. */
function splitParts(q: string): { stem: string; parts: { label: string; text: string; marks: string }[] } {
  const rx = /(?:^|\s)\(?([a-h]|[ivx]{1,4})\)\s+/g;
  const hits = [...q.matchAll(rx)];
  if (hits.length < 2) return { stem: q.trim(), parts: [] };
  const stem = q.slice(0, hits[0].index).trim();
  const parts = hits.map((h, i) => {
    const start = (h.index ?? 0) + h[0].length;
    const end = i + 1 < hits.length ? (hits[i + 1].index ?? q.length) : q.length;
    let text = q.slice(start, end).trim();
    let marks = "";
    // "[3]", "[2+2]", "(4 marks)" - the bracket is kept as written.
    const m = text.match(/\s*(?:\[([\d.+ ]+)\]|\(([\d.+ ]+)\s*marks?\))\s*$/i);
    if (m) { marks = (m[1] ?? m[2]).replace(/\s+/g, ""); text = text.slice(0, m.index).trim(); }
    return { label: h[1] + ")", text, marks };
  });
  return { stem, parts };
}

function QuestionCard({
  id,
  question,
  label,
  where,
  marks,
  kind,
  onOpenTopic,
  repeat,
  split,
  stated = 0,
}: {
  id: string;
  question: string;
  /** "Q1", or nothing for the topic-wise compilation. */
  label?: string;
  /** "Paper II - June 2025" */
  where: string;
  marks: number;
  kind: string;
  onOpenTopic: (topicId: string) => void;
  repeat?: Repeat;
  split?: MarkSplit | null;
  stated?: number;
}) {
  const shaped = useMemo(() => splitParts(question), [question]);
  const [open, setOpen] = useState(false);
  const links = useMemo(() => (open ? linksFor(id, question) : []), [open, id, question]);

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <button type="button" onClick={() => setOpen((o) => !o)} className="w-full p-3.5 text-left">
        <span className="q-head">
          {label && <span className="q-no">{label}</span>}
          <span className="q-where">{where}</span>
          {marks > 0 && <span className="q-marks">{marks} marks</span>}
        </span>
        {shaped.stem && <span className="q-stem block">{shaped.stem}</span>}
        {shaped.parts.length > 0 && (
          <ul className="q-parts">
            {shaped.parts.map((p, i) => (
              <li key={i}>
                <span className="q-l">{p.label}</span>
                <span>{p.text}</span>
                {p.marks ? <span className="q-m">{p.marks}</span> : <span />}
              </li>
            ))}
          </ul>
        )}
        <span className="q-kind block">
          {kind}
          {repeat && repeat.times > 1 ? ` - asked ${repeat.times} times` : ""}
        </span>
      </button>

      {/* Outside the button, not inside it. A paragraph nested in a button is
          invalid, and it folded the sitting list into the button's accessible
          name - which is what made the smoke test click the card instead of
          the link to the answer. */}
      <div className="px-3.5 pb-3 -mt-1">
        {/* The parts above already carry their marks; the split row is for a
            question printed without lettered parts. */}
        <QuestionHistory repeat={repeat} split={shaped.parts.length ? null : split} stated={stated} />
      </div>

      {open && (
        <div className="border-t border-slate-100 px-3.5 pb-4 pt-3">
          {links.length === 0 ? (
            <p className="text-[15.5px] leading-[1.6] text-slate-600">
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
                    className="rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-left text-[15px] font-semibold text-slate-800 hover:bg-slate-50"
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

function predictedFor(paper: PaperId | "all"): PredictedQuestion[] {
  const rank = { high: 0, medium: 1 };
  return PREDICTED.filter((q) => paper === "all" || q.paper === paper).sort(
    (a, b) => rank[a.likelihood] - rank[b.likelihood] || a.paper.localeCompare(b.paper),
  );
}

/** A predicted question: the question as the paper would print it, why it is
 *  expected, and the topic that answers it. */
function PredictedCard({
  q,
  n,
  onOpenTopic,
}: {
  q: PredictedQuestion;
  n: number;
  onOpenTopic: (topicId: string) => void;
}) {
  const shaped = useMemo(() => splitParts(q.question), [q.question]);
  const topic = getTopic(q.topicId);
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
      <span className="q-head">
        <span className="q-no">P{n}</span>
        <span className="q-where">Paper {q.paper}</span>
        <span className="q-marks">{q.marks} marks</span>
        <span className={`q-likely q-likely-${q.likelihood}`}>
          {q.likelihood === "high" ? "High" : "Medium"}
        </span>
      </span>
      {shaped.stem && <span className="q-stem block">{shaped.stem}</span>}
      {shaped.parts.length > 0 && (
        <ul className="q-parts">
          {shaped.parts.map((p, i) => (
            <li key={i}>
              <span className="q-l">{p.label}</span>
              <span>{p.text}</span>
              {p.marks ? <span className="q-m">{p.marks}</span> : <span />}
            </li>
          ))}
        </ul>
      )}
      <p className="q-basis">{q.basis}</p>
      {topic && (
        <button
          type="button"
          onClick={() => onOpenTopic(q.topicId)}
          className="mt-2.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-left text-[15px] font-semibold text-slate-800 hover:bg-slate-50"
        >
          {topic.topic.title}
          <span className="ml-1.5 font-normal text-slate-500">· {topic.subjectTitle}</span>
        </button>
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
  const [view, setView] = useState<"sittings" | "topics" | "recurring" | "predicted">("sittings");
  const [paper, setPaper] = useState<PaperId | "all">("all");
  const [session, setSession] = useState<string | "all">("all");
  const [topicQuery, setTopicQuery] = useState("");
  const [openTopic, setOpenTopic] = useState<string | null>(null);

  const sittingList = sittings();
  /* Built once over every question from both sources, because a question can
     repeat between a sitting paper and the topic-wise compilation. */
  const stats = useMemo(() => {
    const every = [
      ...PAPER_QUESTIONS.map((q) => ({ id: q.id, question: q.question, session: q.session, year: q.year })),
      ...TOPICWISE_QUESTIONS.map((q) => ({ id: q.id, question: q.question, session: q.session, year: q.year })),
    ];
    return { repeats: repeatIndex(every) };
  }, []);

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
    `flex-1 rounded-xl border p-3 text-[15px] font-bold ${
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
      <div className="mt-4 grid grid-cols-2 gap-2">
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
        <button type="button" onClick={() => setView("predicted")} className={tab(view === "predicted")}>
          Predicted
        </button>
      </div>

      {view === "predicted" ? (
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
          <p className="mt-3 text-xs text-slate-500">
            {predictedFor(paper).length} likely questions, most likely first
          </p>
          <div className="mt-2 space-y-2">
            {predictedFor(paper).map((q, i) => (
              <PredictedCard key={q.id} q={q} n={i + 1} onOpenTopic={onOpenTopic} />
            ))}
          </div>
        </>
      ) : view === "sittings" ? (
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
                repeat={stats.repeats[q.id]}
                split={markSplit(q.question, q.marks)}
                stated={q.marks}
                label={`Q${q.number}`}
                where={`Paper ${q.paper} - ${q.session}`}
                marks={q.marks}
                kind={KIND_LABEL[q.kind] ?? q.kind}
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
                        <span className="block text-[17.5px] font-bold leading-[1.45] text-slate-900">{g.topic}</span>
                        <span className="mt-1 flex flex-wrap items-center gap-1.5">
                          <Chip tone="blue">
                            {g.questions.length} question{g.questions.length > 1 ? "s" : ""}
                          </Chip>
                          <Chip>{g.years.length} years</Chip>
                          <span className="text-[13px] text-slate-500">{g.years.join(", ")}</span>
                        </span>
                      </span>
                      <span aria-hidden className="text-slate-400">
                        {isOpen ? "▾" : "▸"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="space-y-3 border-t border-slate-100 p-3.5">
                        {g.questions.map((q: TopicwiseQuestion) => (
                          <QuestionCard
                            key={q.id}
                            id={q.id}
                            question={q.question}
                            onOpenTopic={onOpenTopic}
                            repeat={stats.repeats[q.id]}
                            split={markSplit(q.question, q.marks)}
                            stated={q.marks}
                            where={q.session}
                            marks={q.marks}
                            kind={KIND_LABEL[q.kind] ?? q.kind}
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
      <button
        type="button"
        onClick={onOpenSources}
        className="mt-6 w-full rounded-lg border px-4 py-3 text-left text-sm font-semibold"
        style={{ borderColor: "var(--rule)", background: "var(--mint)", color: "var(--head)" }}
      >
        Read the source documents in full &rarr;
      </button>
    </div>
  );
}
