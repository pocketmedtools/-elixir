/**
 * Makes sure the content a screen needs is actually in memory before it
 * renders, and shows honest progress while the chunks come down.
 *
 * A chunk is fetched once; after that the service worker serves it from the
 * cache and this gate is invisible. Offline, before a first fetch, it says so
 * rather than showing an empty library.
 */
import { useEffect, useState, useSyncExternalStore, type ReactNode } from "react";
import {
  SUBJECT_META,
  contentVersion,
  ensureAll,
  ensureSubject,
  getSubjectMeta,
  isSubjectLoaded,
  loadedSubjectCount,
  subjectFailed,
  subscribeContent,
} from "../content/index";

export default function ContentGate({
  need,
  children,
}: {
  /** "all" for screens that span the library, or the subject ids required. */
  need: "all" | string[];
  children: ReactNode;
}) {
  useSyncExternalStore(subscribeContent, contentVersion);
  const [progress, setProgress] = useState({ done: loadedSubjectCount(), total: SUBJECT_META.length });

  // An unknown id would leave the gate waiting forever, so drop empties.
  const ids = need === "all" ? null : need.filter((id) => id.length > 0);
  // `need` is a fresh array on every render, so the effect keys off its
  // contents rather than its identity.
  const needKey = ids ? ids.join(",") : "all";

  useEffect(() => {
    let alive = true;
    if (needKey === "all") {
      void ensureAll((done, total) => {
        if (alive) setProgress({ done, total });
      });
    } else {
      for (const id of needKey.split(",")) void ensureSubject(id);
    }
    return () => {
      alive = false;
    };
  }, [needKey]);

  const missing = need === "all" ? !allLoaded() : (ids ?? []).filter((id) => !isSubjectLoaded(id));
  const stillMissing = need === "all" ? (missing as boolean) : (missing as string[]).length > 0;

  if (!stillMissing) return <>{children}</>;

  const brokenIds = need === "all" ? SUBJECT_META.map((s) => s.id).filter(subjectFailed) : (missing as string[]).filter(subjectFailed);

  if (brokenIds.length > 0 && (need !== "all" || brokenIds.length === SUBJECT_META.length - loadedSubjectCount())) {
    return (
      <div className="mx-auto max-w-3xl px-3 py-10 md:px-6">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-950">
          <p className="font-bold">This part of the library has not been downloaded yet</p>
          <p className="mt-1 text-sm leading-relaxed">
            {brokenIds.length === 1
              ? `${getSubjectMeta(brokenIds[0])?.title ?? brokenIds[0]} could not be fetched.`
              : `${brokenIds.length} subjects could not be fetched.`}{" "}
            Each subject is downloaded the first time it is opened and then kept for offline use. Connect once and
            open it again — or use "Make the whole library available offline" on the study home screen while you
            have a connection.
          </p>
        </div>
      </div>
    );
  }

  const pct = progress.total ? Math.round((progress.done / progress.total) * 100) : 0;

  return (
    <div className="mx-auto max-w-3xl px-3 py-10 md:px-6">
      <p className="text-center text-sm font-semibold text-slate-700">
        {need === "all" ? `Preparing the library — ${progress.done} of ${progress.total} subjects` : "Opening…"}
      </p>
      {need === "all" && (
        <>
          <div className="mx-auto mt-3 h-2 w-full max-w-sm overflow-hidden rounded-full bg-slate-200">
            <div className="h-full rounded-full bg-teal-700 transition-all" style={{ width: `${pct}%` }} />
          </div>
          <p className="mx-auto mt-2 max-w-sm text-center text-xs text-slate-500">
            This happens once. Afterwards everything opens instantly, with or without a network.
          </p>
        </>
      )}
    </div>
  );
}

function allLoaded(): boolean {
  return loadedSubjectCount() === SUBJECT_META.length;
}
