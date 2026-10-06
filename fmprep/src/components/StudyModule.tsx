/**
 * The study module shell.
 *
 * One screen at a time with a real back stack, because this lives inside a
 * tab of the clinical app rather than in the browser's history. Every screen
 * is a plain component; this file only decides which one is showing.
 */
import { Suspense, lazy, useCallback, useEffect, useRef, useState } from "react";
import { mcqIndex, subjectIdForTopic } from "../content/index";
import ContentGate from "./ContentGate";
import { load as loadDocs, seedDocuments } from "../lib/docs";
import type { SearchResult } from "../lib/search";
import StudyHome from "./StudyHome";
import ChartsScreen from "./ChartsScreen";
import { onDailyChartTapped } from "../lib/dailyChart";
import { onDailyTopicTapped } from "../lib/dailyTopic";
import LibraryScreen from "./LibraryScreen";
import SubjectScreen from "./SubjectScreen";
import TopicReader from "./TopicReader";
import TheoryBank from "./TheoryBank";
import { CaseList, CaseReader } from "./CaseBank";
import ExamPatternScreen from "./ExamPatternScreen";
import PresentationScreen from "./PresentationScreen";
import { QuizSession, QuizSetup, type QuizConfig } from "./QuizRunner";
import MyDocuments from "./MyDocuments";
import DocReader from "./DocReader";
import SearchScreen from "./SearchScreen";
import ProgressScreen from "./ProgressScreen";

export type StudyView =
  | { name: "home" }
  | { name: "library" }
  | { name: "subject"; id: string }
  | { name: "topic"; id: string }
  | { name: "theory"; id?: string }
  | { name: "pyq" }
  | { name: "cases" }
  | { name: "case"; id: string }
  | { name: "presentation" }
  | { name: "pattern" }
  | { name: "quizSetup" }
  | { name: "quiz"; config: QuizConfig }
  | { name: "docs" }
  | { name: "doc"; id: string; q?: string }
  | { name: "search"; query?: string }
  | { name: "charts"; q?: string; chartId?: string }
  | { name: "progress" };

// A thousand past questions and their text are worth their own chunk: the app
// opens without them and fetches them the first time the bank is opened.
const PyqScreen = lazy(() => import("./PyqScreen"));

/** The subject a topic belongs to, or the whole library when it cannot be told. */
function subjectsForTopic(topicId: string): string[] | "all" {
  const id = subjectIdForTopic(topicId);
  return id ? [id] : "all";
}

/* The app reopens where it was left - the same screen, the same document,
   scrolled to the same place - even days later. The screen stack and the
   page's scroll are kept in their own key, written as the reader moves, so a
   closed or killed app comes back exactly there. A quiz in progress is the one
   screen not restored: its answers live in memory, not here. */
const NAV_KEY = "FMPREP_NAV_V1";
const RESTORABLE = new Set([
  "home", "library", "subject", "topic", "theory", "pyq", "cases", "case", "presentation",
  "pattern", "quizSetup", "docs", "doc", "search", "charts", "progress",
]);

function loadNav(): { stack: StudyView[]; scrollY: number } {
  try {
    const raw = localStorage.getItem(NAV_KEY);
    if (!raw) return { stack: [{ name: "home" }], scrollY: 0 };
    const parsed = JSON.parse(raw) as { stack?: StudyView[]; scrollY?: number };
    const stack = (parsed.stack ?? []).filter((v) => v && RESTORABLE.has(v.name));
    if (!stack.length) return { stack: [{ name: "home" }], scrollY: 0 };
    if (stack[0].name !== "home") stack.unshift({ name: "home" });
    return { stack, scrollY: Number(parsed.scrollY) || 0 };
  } catch {
    return { stack: [{ name: "home" }], scrollY: 0 };
  }
}

function saveNav(stack: StudyView[], scrollY: number) {
  try {
    const keep = stack.filter((v) => RESTORABLE.has(v.name)).slice(-12);
    localStorage.setItem(NAV_KEY, JSON.stringify({ stack: keep, scrollY: Math.round(scrollY) }));
  } catch {
    /* storage full or blocked: the app still works, it just starts at home */
  }
}

const INITIAL_NAV = loadNav();

export default function StudyModule() {
  const [stack, setStack] = useState<StudyView[]>(INITIAL_NAV.stack);
  const view = stack[stack.length - 1];
  const restoring = useRef(INITIAL_NAV.scrollY > 0);

  // Every change of screen is written at once; the scroll a moment after it settles.
  useEffect(() => {
    saveNav(stack, restoring.current ? INITIAL_NAV.scrollY : window.scrollY);
  }, [stack]);
  useEffect(() => {
    let timer: number | undefined;
    const onScroll = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        if (!restoring.current) saveNav(stack, window.scrollY);
      }, 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [stack]);
  // Closing or backgrounding the app saves the exact spot.
  useEffect(() => {
    const flush = () => {
      if (document.visibilityState === "hidden" && !restoring.current) saveNav(stack, window.scrollY);
    };
    document.addEventListener("visibilitychange", flush);
    return () => document.removeEventListener("visibilitychange", flush);
  }, [stack]);

  // The document list is needed by search and by the home counts, so it is
  // read once when the module first mounts rather than on each screen. The
  // source question papers that ship with the app are put in at the same time,
  // from their own chunk so the first paint does not carry their text.
  useEffect(() => {
    void loadDocs().then(async () => {
      const { SOURCE_DOCUMENTS } = await import("../pyq/sourceText.generated");
      await seedDocuments(SOURCE_DOCUMENTS);
    });
  }, []);

  useEffect(() => {
    if (restoring.current) {
      // The first screen after reopening goes back to where it was read. The
      // content may still be loading, so the scroll is retried until it
      // holds or the reader moves on their own.
      const target = INITIAL_NAV.scrollY;
      let tries = 0;
      const step = () => {
        window.scrollTo({ top: target });
        tries++;
        if (Math.abs(window.scrollY - target) > 4 && tries < 12) timer = window.setTimeout(step, 250);
        else restoring.current = false;
      };
      const stop = () => {
        restoring.current = false;
        window.clearTimeout(timer);
      };
      let timer = window.setTimeout(step, 120);
      window.addEventListener("touchstart", stop, { once: true, passive: true });
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0 });
  }, [stack.length, view.name]);

  /* Tapping the daily notification should land on that chart, not the home
     screen. Registered once; a no-op anywhere but the installed app. */
  useEffect(() => {
    void onDailyChartTapped((chartId) =>
      setStack((s) => [...s, { name: "charts", chartId }]),
    );
    void onDailyTopicTapped((id) => setStack((s) => [...s, { name: "topic", id }]));
  }, []);

  const go = useCallback((next: StudyView) => setStack((s) => [...s, next]), []);
  const back = useCallback(
    () => setStack((s) => (s.length > 1 ? s.slice(0, -1) : s)),
    [],
  );
  const home = useCallback(() => setStack([{ name: "home" }]), []);

  const openSearchResult = useCallback(
    (result: SearchResult) => {
      if (result.kind === "topic") go({ name: "topic", id: result.id });
      else if (result.kind === "theory") go({ name: "theory", id: result.id });
      else if (result.kind === "case") go({ name: "case", id: result.id });
      else if (result.kind === "document") go({ name: "doc", id: result.id });
      else {
        const found = mcqIndex().get(result.id);
        if (found) go({ name: "topic", id: found.topicId });
      }
    },
    [go],
  );

  const screen = (() => {
  switch (view.name) {
    case "library":
      return <LibraryScreen onBack={back} onOpenSubject={(id) => go({ name: "subject", id })} />;

    case "subject":
      return (
        <ContentGate need={[view.id]}>
        <SubjectScreen
          subjectId={view.id}
          onBack={back}
          onOpenTopic={(id) => go({ name: "topic", id })}
          onOpenCase={(id) => go({ name: "case", id })}
          onPractiseSubject={(subjectId) =>
            go({
              name: "quiz",
              config: { mode: "practice", subjectIds: [subjectId], count: 25, wrongOnly: false, minutes: 60 },
            })
          }
        />
        </ContentGate>
      );

    case "topic":
      return (
        <ContentGate need={subjectIdForTopic(view.id) ? [subjectIdForTopic(view.id) as string] : "all"}>
        <TopicReader
          topicId={view.id}
          onBack={back}
          onOpenTopic={(id) => setStack((s) => [...s.slice(0, -1), { name: "topic", id }])}
          onPractise={(topicId) =>
            go({
              name: "quiz",
              config: { mode: "practice", subjectIds: [], topicId, count: 20, wrongOnly: false, minutes: 60 },
            })
          }
        />
        </ContentGate>
      );

    case "theory":
      return (
        <ContentGate need="all">
          <TheoryBank onBack={back} initialId={view.id} onOpenTopic={(id) => go({ name: "topic", id })} />
        </ContentGate>
      );

    case "pyq":
      // The bank itself is static, but every question links into a topic, so
      // the library is pulled in behind it.
      return (
        <ContentGate need="all">
          <Suspense
            fallback={
              <p className="mx-auto max-w-3xl px-3 py-10 text-center text-[15px] text-slate-600">
                Opening the question papers…
              </p>
            }
          >
            <PyqScreen
              onBack={back}
              onOpenTopic={(id) => go({ name: "topic", id })}
              onOpenSources={() => go({ name: "docs" })}
            />
          </Suspense>
        </ContentGate>
      );

    case "cases":
      return (
        <ContentGate need="all">
          <CaseList
            onBack={back}
            onOpenCase={(id) => go({ name: "case", id })}
            onHowTo={() => go({ name: "presentation" })}
          />
        </ContentGate>
      );

    case "case":
      return (
        <ContentGate need="all">
          <CaseReader caseId={view.id} onBack={back} />
        </ContentGate>
      );

    case "presentation":
      return <PresentationScreen onBack={back} />;

    case "pattern":
      return <ExamPatternScreen onBack={back} />;

    case "quizSetup":
      return (
        <ContentGate need="all">
          <QuizSetup onBack={back} onStart={(config) => go({ name: "quiz", config })} />
        </ContentGate>
      );

    case "quiz":
      return (
        <ContentGate
          need={
            view.config.topicId
              ? subjectsForTopic(view.config.topicId)
              : view.config.subjectIds.length
                ? view.config.subjectIds
                : "all"
          }
        >
          <QuizSession config={view.config} onExit={back} onOpenTopic={(id) => go({ name: "topic", id })} />
        </ContentGate>
      );


    case "docs":
      return <MyDocuments onBack={back} onOpenDoc={(id, q) => go({ name: "doc", id, q })} />;

    case "doc":
      return (
        <DocReader
          docId={view.id}
          initialQuery={view.q}
          onBack={back}
          onSearchLibrary={(query) => go({ name: "search", query })}
        />
      );

    case "charts":
      return (
        <ContentGate need="all">
          <ChartsScreen
            onBack={back}
            onOpenTopic={(id) => go({ name: "topic", id })}
            initialQuery={view.q}
            initialChartId={view.chartId}
          />
        </ContentGate>
      );

    case "search":
      return (
        <ContentGate need="all">
          <SearchScreen onBack={back} onOpen={openSearchResult} initialQuery={view.query} />
        </ContentGate>
      );

    case "progress":
      return (
        <ContentGate need="all">
          <ProgressScreen onBack={back} />
        </ContentGate>
      );

    default:
      return <StudyHome onGo={(next) => (next.name === "home" ? home() : go(next))} />;
  }
  })();

  /* Fixed, not sticky. A sticky bar depends on no ancestor being a scroll
     container, which has broken twice; a fixed control depends on nothing
     and is on screen however far down a topic the reader is. */
  return (
    <>
      {screen}
      {view.name !== "home" && (
        <button type="button" className="home-fab" onClick={home} aria-label="Home">
          Home
        </button>
      )}
    </>
  );
}
