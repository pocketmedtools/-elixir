import { useEffect, useState } from "react";
import { GraduationCap } from "lucide-react";
import StudyModule from "./components/StudyModule";

/**
 * FM Prep — the Family Medicine exam app.
 *
 * A thin shell: a header, the study module (which owns its own screens and
 * back stack), and the disclaimer. Everything below runs on the device, with
 * no server and no account.
 */
export default function App() {
  // A brief opening card, so a cold start does not flash an empty page while
  // the first chunk parses.
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setSplash(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      {splash && (
        <div
          aria-hidden
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity"
        >
          <GraduationCap className="h-14 w-14 text-[var(--accent)]" />
          <p className="mt-3 text-lg font-bold tracking-tight text-slate-900">FM Prep</p>
          <p className="mt-1 text-[13px] text-slate-500">Family Medicine exam</p>
        </div>
      )}

      {/* Not sticky: each screen has its own sticky back bar, and two stacked
          sticky rows would cover it. */}
      <header className="app-header border-b border-[var(--line)] bg-white">
        <div className="mx-auto flex max-w-4xl items-center gap-2.5 px-3 py-3 md:px-6">
          <GraduationCap className="h-6 w-6 shrink-0 text-[var(--accent)]" aria-hidden />
          <div className="min-w-0 flex-1">
            <p className="text-[15px] font-bold leading-tight tracking-tight text-slate-900">FM Prep</p>
            <p className="hidden text-[13px] leading-snug text-slate-500 sm:block">
              DNB / MD Family Medicine — notes, papers, cases, questions
            </p>
          </div>
          {/* A direct file URL, not a release redirect: Android's download
              manager stalls on the github.com -> S3 hop. */}
          <a
            href="https://raw.githubusercontent.com/pocketmedtools/-elixir/fmprep-apk/FM-Prep.apk"
            target="_blank"
            rel="noopener"
            className="shrink-0 rounded-lg bg-slate-900 px-3 py-2 text-[13px] font-semibold text-white hover:bg-slate-800"
          >
            <span className="hidden sm:inline">Download Android app</span>
            <span className="sm:hidden">Get app</span>
          </a>
        </div>
        <div className="brand-ribbon" />
      </header>

      <main className="study-stage flex-1">
        <StudyModule />
      </main>

      <footer className="border-t border-[var(--line)] bg-white px-3 py-4 text-center text-xs leading-relaxed text-[var(--muted)] md:px-6">
        Study material for examination preparation, written for licensed doctors and doctors in
        training. Verify every dose and every guideline against a current primary source before you
        act on it clinically. Examination logistics change: confirm papers, marks and dates against
        the current NBEMS information bulletin.
      </footer>
    </div>
  );
}
