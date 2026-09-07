/**
 * The library: every subject, grouped the way the papers group them, with the
 * amount of material and how much of it has been opened.
 *
 * Subjects that have not been downloaded yet still list here — they carry
 * their description and papers from the static index, and fill in their topic
 * counts once their chunk arrives.
 */
import { useSyncExternalStore } from "react";
import { SUBJECT_GROUPS, contentVersion, getSubject, subscribeContent } from "../content/index";
import { getState, getVersion, subscribe } from "../lib/store";
import { BackBar, Chip } from "./ui";

export default function LibraryScreen({
  onBack,
  onOpenSubject,
}: {
  onBack: () => void;
  onOpenSubject: (id: string) => void;
}) {
  useSyncExternalStore(subscribe, getVersion);
  useSyncExternalStore(subscribeContent, contentVersion);
  const read = getState().topics;

  return (
    <div className="mx-auto max-w-4xl px-3 py-5 md:px-6">
      <BackBar onBack={onBack} label="Study" />
      <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">Subject library</h1>
      <p className="mt-1 leading-relaxed text-slate-700">
        Inside every subject the topics run commonest first, so a short revision session covers what is most
        likely to be asked, and the uncommon material is still there when there is time for it.
      </p>

      {SUBJECT_GROUPS.map((group) => (
        <section key={group.heading} className="mt-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">{group.heading}</h2>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {group.subjects.map((meta) => {
              const subject = getSubject(meta.id);
              const opened = subject ? subject.topics.filter((t) => read[t.id]).length : 0;
              const total = subject?.topics.length ?? 0;
              const pct = total ? Math.round((opened / total) * 100) : 0;
              return (
                <button
                  key={meta.id}
                  type="button"
                  onClick={() => onOpenSubject(meta.id)}
                  className="rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:shadow"
                >
                  <span className="flex items-baseline justify-between gap-2">
                    <span className="font-bold text-slate-900">{subject?.title ?? meta.title}</span>
                    <Chip tone="blue">Paper {meta.papers.join(", ")}</Chip>
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-slate-600">{meta.blurb}</span>
                  {subject ? (
                    <>
                      <span className="mt-2 block h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                        <span className="block h-full rounded-full bg-emerald-500" style={{ width: `${pct}%` }} />
                      </span>
                      <span className="mt-1 block text-[11px] text-slate-500">
                        {opened} of {total} topics opened
                      </span>
                    </>
                  ) : (
                    <span className="mt-2 block text-[11px] text-slate-400">Opens on first tap</span>
                  )}
                </button>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
