/**
 * The study module shell.
 *
 * One screen at a time with a real back stack, because this lives inside a
 * tab of the clinical app rather than in the browser's history. Every screen
 * is a plain component; this file only decides which one is showing.
 */
import { useCallback, useEffect, useState } from "react";
import { mcqIndex, subjectIdForTopic } from "../content/index";
import ContentGate from "./ContentGate";
import { load as loadDocs } from "../lib/docs";
import type { SearchResult } from "../lib/search";
import StudyHome from "./StudyHome";
import LibraryScreen from "./LibraryScreen";
import SubjectScreen from "./SubjectScreen";
import TopicReader from "./TopicReader";
import TheoryBank from "./TheoryBank";
import PyqScreen from "./PyqScreen";
import { CaseList, CaseReader } from "./CaseBank";
import ExamPatternScreen from "./ExamPatternScreen";
import PresentationScreen from "./PresentationScreen";
import { QuizSession, QuizSetup, type QuizConfig } from "./QuizRunner";
import Flashcards from "./Flashcards";
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
  | { name: "cards" }
  | { name: "docs" }
  | { name: "doc"; id: string }
  | { name: "search"; query?: string }
  | { name: "progress" };

/** The subject a topic belongs to, or the whole library when it cannot be told. */
function subjectsForTopic(topicId: string): string[] | "all" {
  const id = subjectIdForTopic(topicId);
  return id ? [id] : "all";
}

export default function StudyModule() {
  const [stack, setStack] = useState<StudyView[]>([{ name: "home" }]);
  const view = stack[stack.length - 1];

  // The document list is needed by search and by the home counts, so it is
  // read once when the module first mounts rather than on each screen.
  useEffect(() => {
    void loadDocs();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [stack.length, view.name]);

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
          <PyqScreen onBack={back} onOpenTopic={(id) => go({ name: "topic", id })} />
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

    case "cards":
      return (
        <ContentGate need="all">
          <Flashcards onBack={back} onOpenTopic={(id) => go({ name: "topic", id })} />
        </ContentGate>
      );

    case "docs":
      return <MyDocuments onBack={back} onOpenDoc={(id) => go({ name: "doc", id })} />;

    case "doc":
      return (
        <DocReader
          docId={view.id}
          onBack={back}
          onSearchLibrary={(query) => go({ name: "search", query })}
        />
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
}
