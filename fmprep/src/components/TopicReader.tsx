/**
 * The topic reader.
 *
 * One topic, whole, in reading order: definition, the sections, the tables,
 * the red flags, the pearls, then the written-paper questions and the MCQs
 * that belong to it. Nothing is hidden behind a tab that a tired reader would
 * never open — the long material is simply further down the page.
 */
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { getTopic, neighbours, subjectIdForTopic } from "../content/index";
import {
  getVersion,
  isBookmarked,
  markTopicRead,
  subscribe,
  toggleBookmark,
  updateSettings,
  getState,
} from "../lib/store";
import { BackBar, Callout, Chip, FrequencyChip, SectionBlock, TableBlock, RichText } from "./ui";
import TheoryAnswer from "./TheoryAnswer";
import DiagramBlock from "./DiagramBlock";
import { ensureDiagrams } from "../diagrams/index";
import { colorVars } from "../lib/hues";
import type { Diagram } from "../lib/types";

function slug(text: string, i: number): string {
  return `sec-${i}-${text.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 32)}`;
}

export default function TopicReader({
  topicId,
  onBack,
  onOpenTopic,
  onPractise,
}: {
  topicId: string;
  onBack: () => void;
  onOpenTopic: (id: string) => void;
  onPractise: (topicId: string) => void;
}) {
  useSyncExternalStore(subscribe, getVersion);
  const found = getTopic(topicId);
  const { readerScale, readerSerif } = getState().settings;
  const [openTheory, setOpenTheory] = useState<string | null>(null);
  const [showAnswers, setShowAnswers] = useState<Record<string, boolean>>({});
  const [diagrams, setDiagrams] = useState<Diagram[]>([]);
  const topRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    markTopicRead(topicId, Date.now());
    topRef.current?.scrollIntoView({ block: "start" });
    setOpenTheory(null);
    setShowAnswers({});
  }, [topicId]);

  // Diagrams live in their own chunk, so a topic that has none costs nothing.
  useEffect(() => {
    let live = true;
    const subjectId = subjectIdForTopic(topicId);
    if (!subjectId) return;
    ensureDiagrams(subjectId).then((set) => {
      if (live) setDiagrams(set[topicId] ?? []);
    });
    return () => {
      live = false;
    };
  }, [topicId]);

  const near = useMemo(() => neighbours(topicId), [topicId]);

  if (!found) {
    return (
      <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
        <BackBar onBack={onBack} label="Back" />
        <p className="mt-6 text-sm text-slate-600">That topic is no longer in the library.</p>
      </div>
    );
  }

  const { topic, subjectTitle } = found;
  const bookmarked = isBookmarked(topic.id);

  return (
    <div
      className="mx-auto max-w-3xl px-3 py-5 md:px-6"
      style={{
        fontSize: `${readerScale}rem`,
        fontFamily: readerSerif ? 'Georgia, "Times New Roman", serif' : undefined,
        // Everything below takes its colour from the subject.
        ...colorVars(subjectIdForTopic(topicId)),
      }}
    >
      <div ref={topRef} />
      <BackBar
        onBack={onBack}
        label={subjectTitle}
        right={
          <>
            <button
              type="button"
              aria-label="Smaller text"
              onClick={() => updateSettings({ readerScale: Math.max(0.9, Number((readerScale - 0.1).toFixed(2))) })}
              className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs font-bold text-slate-700"
            >
              A-
            </button>
            <button
              type="button"
              aria-label="Larger text"
              onClick={() => updateSettings({ readerScale: Math.min(1.5, Number((readerScale + 0.1).toFixed(2))) })}
              className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-sm font-bold text-slate-700"
            >
              A+
            </button>
            <button
              type="button"
              onClick={() => updateSettings({ readerSerif: !readerSerif })}
              className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs font-semibold text-slate-700"
            >
              {readerSerif ? "Sans" : "Serif"}
            </button>
            <button
              type="button"
              onClick={() => toggleBookmark(topic.id)}
              aria-pressed={bookmarked}
              className={`rounded-lg border px-2 py-1 text-xs font-semibold ${
                bookmarked ? "border-amber-300 bg-amber-100 text-amber-900" : "border-slate-300 bg-white text-slate-700"
              }`}
            >
              {bookmarked ? "★ Saved" : "☆ Save"}
            </button>
          </>
        }
      />

      <header className="mt-5">
        <div className="flex flex-wrap items-center gap-2">
          <FrequencyChip frequency={topic.frequency} />
          <Chip>{subjectTitle}</Chip>
        </div>
        <h1 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-slate-900">{topic.title}</h1>
        <p className="mt-2 rounded-xl border border-slate-200 bg-white p-3 leading-relaxed text-slate-800 shadow-sm">
          <RichText text={topic.oneLiner} />
        </p>
      </header>

      {topic.sections.length > 1 && (
        <nav aria-label="Sections" className="mt-4 flex flex-wrap gap-1.5">
          {topic.sections.map((s, i) => (
            <a
              key={i}
              href={`#${slug(s.heading, i)}`}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-200"
            >
              {s.heading}
            </a>
          ))}
        </nav>
      )}

      <article className="mt-2">
        {diagrams.length > 0 && (
          <section className="mt-6">
            <h3
              className="flex items-baseline gap-2.5 pb-2 text-lg font-bold tracking-tight text-slate-900"
              style={{ borderBottom: "2px solid var(--acc-rule)" }}
            >
              <span
                aria-hidden
                className="shrink-0 rounded px-1.5 py-1 font-mono text-[11px] leading-none text-white"
                style={{ background: "var(--acc)" }}
              >
                00
              </span>
              At a glance
            </h3>
            {diagrams.map((d, i) => (
              <DiagramBlock key={i} diagram={d} />
            ))}
          </section>
        )}
        {topic.sections.map((section, i) => (
          <SectionBlock key={i} section={section} id={slug(section.heading, i)} index={i + 1} />
        ))}
        {(topic.tables ?? []).map((table, i) => (
          <TableBlock key={i} table={table} />
        ))}
        <Callout tone="danger" title="Red flags — refer or admit" items={topic.redFlags} />
        <Callout tone="pearl" title="Exam pearls" items={topic.pearls} />
      </article>

      {topic.theory && topic.theory.length > 0 && (
        <section className="mt-8">
          <h2 className="text-lg font-bold tracking-tight text-slate-900">
            Theory questions from this topic ({topic.theory.length})
          </h2>
          <p className="mt-1 text-xs text-slate-600">
            Written-paper style, with the model answer laid out in the order it should be written.
          </p>
          <div className="mt-3 space-y-2">
            {topic.theory.map((q) => {
              const open = openTheory === q.id;
              return (
                <div key={q.id} className="rounded-xl border border-slate-200 bg-white shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenTheory(open ? null : q.id)}
                    className="flex w-full items-start gap-2 p-3.5 text-left"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold leading-snug text-slate-900">{q.question}</span>
                      <span className="mt-1 flex flex-wrap items-center gap-1.5">
                        <Chip tone="blue">Paper {q.paper}</Chip>
                        <Chip>{q.marks} marks</Chip>
                        <Chip>{q.minutes} min</Chip>
                        <FrequencyChip frequency={q.frequency} />
                      </span>
                    </span>
                    <span aria-hidden className="text-slate-400">{open ? "▾" : "▸"}</span>
                  </button>
                  {open && (
                    <div className="border-t border-slate-100 px-3.5 pb-4">
                      {!showAnswers[q.id] ? (
                        <button
                          type="button"
                          onClick={() => setShowAnswers((s) => ({ ...s, [q.id]: true }))}
                          className="mt-3 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white"
                        >
                          Show the model answer
                        </button>
                      ) : (
                        <TheoryAnswer question={q} />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {topic.mcqs.length > 0 && (
        <button
          type="button"
          onClick={() => onPractise(topic.id)}
          className="mt-8 w-full rounded-xl bg-teal-900 px-4 py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-teal-800"
        >
          Practise {topic.mcqs.length} questions from this topic
        </button>
      )}

      {topic.references.length > 0 && (
        <section className="mt-8 border-t border-slate-200 pt-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">References</h2>
          <ul className="mt-2 space-y-1 text-xs leading-relaxed text-slate-600">
            {topic.references.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </section>
      )}

      <nav className="mt-6 flex gap-2 border-t border-slate-200 pt-4">
        {near.prev && (
          <button
            type="button"
            onClick={() => onOpenTopic(near.prev!.topic.id)}
            className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white p-3 text-left shadow-sm"
          >
            <span className="block text-[11px] font-semibold uppercase tracking-wide text-slate-500">Previous</span>
            <span className="mt-0.5 block truncate text-sm font-bold text-slate-900">{near.prev.topic.title}</span>
          </button>
        )}
        {near.next && (
          <button
            type="button"
            onClick={() => onOpenTopic(near.next!.topic.id)}
            className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white p-3 text-right shadow-sm"
          >
            <span className="block text-[11px] font-semibold uppercase tracking-wide text-slate-500">Next</span>
            <span className="mt-0.5 block truncate text-sm font-bold text-slate-900">{near.next.topic.title}</span>
          </button>
        )}
      </nav>
    </div>
  );
}
