/**
 * One subject: its topics grouped commonest-first, its cases, and a shortcut
 * into a practice set drawn from the whole subject.
 */
import { useSyncExternalStore } from "react";
import { getSubject, topicsByFrequency } from "../content/index";
import { getState, getVersion, subscribe } from "../lib/store";
import { FREQUENCY_LABEL } from "../lib/types";
import { BackBar, Chip, Empty, RowButton } from "./ui";

export default function SubjectScreen({
  subjectId,
  onBack,
  onOpenTopic,
  onOpenCase,
  onPractiseSubject,
}: {
  subjectId: string;
  onBack: () => void;
  onOpenTopic: (id: string) => void;
  onOpenCase: (id: string) => void;
  onPractiseSubject: (subjectId: string) => void;
}) {
  useSyncExternalStore(subscribe, getVersion);
  const subject = getSubject(subjectId);
  const read = getState().topics;

  if (!subject) {
    return (
      <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
        <BackBar onBack={onBack} label="Library" />
        <Empty title="Subject not found" body="It may have been renamed. Go back to the library and pick it again." />
      </div>
    );
  }

  const groups = topicsByFrequency(subject);
  const questionCount = subject.topics.reduce((n, t) => n + t.mcqs.length, 0);
  const theoryCount = subject.topics.reduce((n, t) => n + (t.theory?.length ?? 0), 0);

  return (
    <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
      <BackBar onBack={onBack} label="Library" />

      <header className="mt-5">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">{subject.title}</h1>
        <p className="mt-1 leading-relaxed text-slate-700">{subject.blurb}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <Chip tone="blue">Paper {subject.papers.join(", ")}</Chip>
          <Chip>{subject.topics.length} topics</Chip>
          <Chip>{theoryCount} theory questions</Chip>
          <Chip>{questionCount} MCQs</Chip>
          {subject.cases && subject.cases.length > 0 && <Chip>{subject.cases.length} cases</Chip>}
        </div>
      </header>

      {questionCount > 0 && (
        <button
          type="button"
          onClick={() => onPractiseSubject(subject.id)}
          className="mt-4 w-full rounded-xl bg-teal-900 px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-teal-800"
        >
          Practise {Math.min(questionCount, 25)} questions from {subject.title}
        </button>
      )}

      {groups.map((group) => (
        <section key={group.band} className="mt-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
            {FREQUENCY_LABEL[group.band]}
          </h2>
          <div className="mt-2 space-y-2">
            {group.topics.map((topic) => (
              <RowButton
                key={topic.id}
                onClick={() => onOpenTopic(topic.id)}
                title={topic.title}
                subtitle={topic.oneLiner.length > 150 ? `${topic.oneLiner.slice(0, 150)}…` : topic.oneLiner}
                right={
                  read[topic.id] ? (
                    <span aria-label="Read" title="Read" className="shrink-0 text-emerald-600">
                      ✓
                    </span>
                  ) : undefined
                }
              />
            ))}
          </div>
        </section>
      ))}

      {subject.cases && subject.cases.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">Cases in this subject</h2>
          <div className="mt-2 space-y-2">
            {subject.cases.map((c) => (
              <RowButton
                key={c.id}
                onClick={() => onOpenCase(c.id)}
                title={c.title}
                subtitle={c.opening}
                right={<Chip>{c.minutes} min</Chip>}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
