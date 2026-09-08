/**
 * Integrity check for the Family Medicine study content.
 * Run: npx tsx scripts/verifyStudyContent.ts
 * Exits non-zero on any failure, so a broken content file cannot ship.
 */
import {
  SUBJECT_META,
  allCards,
  allCases,
  allMcqs,
  allTheory,
  contentCounts,
  ensureAll,
  subjects,
} from "../src/content/index";
import blueprint from "../src/examPattern";
import guide from "../src/casePresentation";
import { FREQUENCY_ORDER } from "../src/lib/types";
import { MIN_EASE, newCard, schedule } from "../src/lib/srs";
import { buildQuiz } from "../src/lib/quiz";

// Content is code-split for the app, so the checker pulls every chunk in
// before it can look at anything.
await ensureAll();
const SUBJECTS = subjects();
if (SUBJECTS.length !== SUBJECT_META.length)
  console.error(`Only ${SUBJECTS.length} of ${SUBJECT_META.length} subject files loaded.`);

const failures: string[] = [];
const warnings: string[] = [];
const fail = (msg: string) => failures.push(msg);
const warn = (msg: string) => warnings.push(msg);
const section = (name: string) => console.log(`\n=== ${name} ===`);

const PAPERS = new Set(["I", "II", "III", "IV"]);
const FREQS = new Set<string>(FREQUENCY_ORDER);

/* ---------- 1. Subjects and topics ---------- */
section("Subjects and topics");
{
  const subjectIds = new Set<string>();
  const topicIds = new Set<string>();

  for (const subject of SUBJECTS) {
    if (subjectIds.has(subject.id)) fail(`duplicate subject id: ${subject.id}`);
    subjectIds.add(subject.id);
    if (!subject.title.trim() || !subject.blurb.trim()) fail(`${subject.id}: empty title or blurb`);
    if (subject.papers.length === 0) fail(`${subject.id}: no papers listed`);
    for (const p of subject.papers) if (!PAPERS.has(p)) fail(`${subject.id}: bad paper "${p}"`);
    // A stub left behind during authoring must never reach a build.
    if (subject.topics.length === 0) fail(`${subject.id}: no topics at all - this is still a stub`);
    else if (subject.topics.length < 6) warn(`${subject.id}: only ${subject.topics.length} topics`);

    for (const topic of subject.topics) {
      if (topicIds.has(topic.id)) fail(`duplicate topic id: ${topic.id}`);
      topicIds.add(topic.id);
      // A topic whose id belongs to another subject means a block was written
      // into the wrong file — this has happened when several authoring agents
      // edited neighbouring files at once, so it fails the build rather than
      // warning.
      if (!topic.id.startsWith(subject.id))
        fail(`${subject.id}.ts contains topic "${topic.id}", which belongs to another subject`);
      if (!FREQS.has(topic.frequency)) fail(`${topic.id}: bad frequency "${topic.frequency}"`);
      if (topic.oneLiner.trim().length < 40) fail(`${topic.id}: oneLiner is too short to be an answer`);
      if (topic.sections.length < 3) warn(`${topic.id}: only ${topic.sections.length} sections`);
      for (const s of topic.sections) {
        if (!s.heading.trim()) fail(`${topic.id}: a section has no heading`);
        if (s.points.length === 0) fail(`${topic.id}: section "${s.heading}" has no points`);
        for (const point of s.points)
          if ((point.match(/\*\*/g)?.length ?? 0) % 2 !== 0)
            fail(`${topic.id}: unbalanced ** in "${point.slice(0, 60)}"`);
      }
      for (const table of topic.tables ?? []) {
        if (table.columns.length === 0) fail(`${topic.id}: table "${table.heading}" has no columns`);
        for (const [i, row] of table.rows.entries())
          if (row.length !== table.columns.length)
            fail(
              `${topic.id}: table "${table.heading}" row ${i + 1} has ${row.length} cells, expected ${table.columns.length}`,
            );
      }
      if (topic.redFlags.length === 0) warn(`${topic.id}: no red flags`);
      if (topic.pearls.length === 0) warn(`${topic.id}: no pearls`);
      if (topic.references.length === 0) warn(`${topic.id}: no references`);
    }
  }
  console.log(`subjects: ${SUBJECTS.length}, topics: ${topicIds.size}`);
}

/* ---------- 2. MCQs ---------- */
section("MCQ bank");
{
  const ids = new Set<string>();
  for (const { mcq, topicId } of allMcqs()) {
    if (ids.has(mcq.id)) fail(`duplicate mcq id: ${mcq.id}`);
    ids.add(mcq.id);
    if (mcq.options.length < 4) fail(`${mcq.id}: only ${mcq.options.length} options`);
    if (new Set(mcq.options).size !== mcq.options.length) fail(`${mcq.id}: duplicate options`);
    if (!Number.isInteger(mcq.answer) || mcq.answer < 0 || mcq.answer >= mcq.options.length)
      fail(`${mcq.id}: answer index ${mcq.answer} is outside its ${mcq.options.length} options`);
    if (mcq.explanation.trim().length < 60) fail(`${mcq.id}: explanation is too thin (${topicId})`);
    if (/all of the above|none of the above/i.test(mcq.options.join(" ")))
      warn(`${mcq.id}: uses an "all/none of the above" option`);
    if (!["easy", "moderate", "hard"].includes(mcq.difficulty)) fail(`${mcq.id}: bad difficulty`);

    // The quiz screen labels the choices A, B, C, D. An explanation that says
    // "option 1" is pointing at something the reader cannot see, and one that
    // argues against the option it just marked correct contradicts itself.
    //
    // "The option 400% is the relative risk misread" names a choice by its
    // content, which is better than any label — so a number only counts as a
    // label when it stands alone as the subject of the sentence.
    if (/\b[Oo]ptions?\s+[1-5](?!\d)(?=[.,;:)]|\s+(?:is|are|was|were|and\s+[1-5]\b))/.test(mcq.explanation))
      fail(`${mcq.id}: explanation refers to a numbered option, but the screen labels them A-E`);
    for (const m of mcq.explanation.matchAll(/\b[Oo]ptions?\s+\(?([A-E])\)?\b/g)) {
      const index = m[1].charCodeAt(0) - 65;
      if (index >= mcq.options.length)
        fail(`${mcq.id}: explanation names option ${m[1]}, but there are only ${mcq.options.length}`);
      else if (index === mcq.answer)
        fail(`${mcq.id}: explanation argues against option ${m[1]}, which is the key`);
    }
  }
  console.log(`mcqs: ${ids.size}`);
}

/* ---------- 3. Flashcards ---------- */
section("Flashcards");
{
  const ids = new Set<string>();
  for (const { card } of allCards()) {
    if (ids.has(card.id)) fail(`duplicate card id: ${card.id}`);
    ids.add(card.id);
    if (!card.front.trim() || !card.back.trim()) fail(`${card.id}: empty side`);
  }
  console.log(`cards: ${ids.size}`);
}

/* ---------- 4. Theory questions ---------- */
section("Theory question bank");
{
  const ids = new Set<string>();
  for (const { question } of allTheory()) {
    if (ids.has(question.id)) fail(`duplicate theory id: ${question.id}`);
    ids.add(question.id);
    if (!PAPERS.has(question.paper)) fail(`${question.id}: bad paper "${question.paper}"`);
    if (!FREQS.has(question.frequency)) fail(`${question.id}: bad frequency`);
    if (question.marks <= 0 || question.marks > 50) fail(`${question.id}: implausible marks ${question.marks}`);
    if (question.minutes <= 0 || question.minutes > 90) fail(`${question.id}: implausible minutes`);
    if (question.openingLines.length === 0) fail(`${question.id}: no opening lines`);
    if (question.answer.length < 2) fail(`${question.id}: model answer has fewer than two sections`);
    const split = question.markSplit?.reduce((n, part) => n + part.marks, 0) ?? question.marks;
    if (split > question.marks)
      fail(`${question.id}: mark split totals ${split}, more than the ${question.marks} on offer`);
  }
  console.log(`theory questions: ${ids.size}`);
}

/* ---------- 5. Cases ---------- */
section("Case bank");
{
  const ids = new Set<string>();
  for (const { clinicalCase: c } of allCases()) {
    if (ids.has(c.id)) fail(`duplicate case id: ${c.id}`);
    ids.add(c.id);
    if (!["long", "short", "osce", "viva"].includes(c.kind)) fail(`${c.id}: bad case kind`);
    if (!FREQS.has(c.frequency)) fail(`${c.id}: bad frequency`);
    if (c.sections.length < 3) fail(`${c.id}: fewer than three presentation sections`);
    if (c.summaryStatement.trim().length < 60) fail(`${c.id}: summary statement is too short`);
    if (c.differential.length === 0) warn(`${c.id}: no differential`);
    if (c.viva.length === 0) warn(`${c.id}: no viva questions`);
    if (!SUBJECTS.some((s) => s.id === c.subjectId)) fail(`${c.id}: subjectId "${c.subjectId}" is not a subject`);
  }
  console.log(`cases: ${ids.size}`);
}

/* ---------- 6. Frame documents ---------- */
section("Exam blueprint and presentation guide");
{
  if (SUBJECTS.length !== SUBJECT_META.length)
    fail(`${SUBJECT_META.length - SUBJECTS.length} subject files are missing or failed to load`);
  if (blueprint.papers.length === 0) fail("blueprint has no papers");
  for (const paper of blueprint.papers) {
    if (!PAPERS.has(paper.id)) fail(`blueprint: bad paper id "${paper.id}"`);
    if (paper.covers.length === 0) fail(`blueprint paper ${paper.id}: covers nothing`);
    for (const t of paper.recurringThemes)
      if (!FREQS.has(t.frequency)) fail(`blueprint paper ${paper.id}: theme "${t.theme}" has a bad frequency`);
  }
  if (blueprint.practical.length === 0) fail("blueprint has no practical components");
  if (!blueprint.sourceNote.trim()) fail("blueprint has no source note");
  if (blueprint.references.length === 0) warn("blueprint cites no sources");

  if (guide.templates.length < 4) fail(`presentation guide has only ${guide.templates.length} templates`);
  const templateIds = new Set<string>();
  for (const t of guide.templates) {
    if (templateIds.has(t.id)) fail(`duplicate template id: ${t.id}`);
    templateIds.add(t.id);
    if (t.steps.length < 3) fail(`${t.id}: fewer than three steps`);
  }
  if (guide.familyTools.length === 0) fail("presentation guide has no family tools");
  console.log(
    `blueprint papers: ${blueprint.papers.length}, practical parts: ${blueprint.practical.length}, templates: ${guide.templates.length}`,
  );
}

/* ---------- 7. Scheduler and quiz behaviour ---------- */
section("Scheduler and quiz behaviour");
{
  const now = 1_700_000_000_000;
  const fresh = newCard(now);

  const again = schedule(fresh, "again", now);
  if (again.due - now !== 10 * 60_000) fail("srs: 'again' should bring a card back in ten minutes");
  if (again.lapses !== 1) fail("srs: 'again' should count a lapse");

  let card = schedule(fresh, "good", now);
  if (card.interval !== 1) fail(`srs: first 'good' should give a 1-day interval, gave ${card.interval}`);
  card = schedule(card, "good", now);
  if (card.interval !== 6) fail(`srs: second 'good' should give a 6-day interval, gave ${card.interval}`);
  const third = schedule(card, "good", now);
  if (third.interval <= 6) fail("srs: the third 'good' should grow the interval");
  if (schedule(card, "easy", now).interval <= third.interval)
    fail("srs: 'easy' should grow the interval more than 'good'");

  let punished = fresh;
  for (let i = 0; i < 20; i++) punished = schedule(punished, "again", now);
  if (punished.ease < MIN_EASE - 1e-9) fail(`srs: ease fell below the ${MIN_EASE} floor`);

  let long = { ...fresh, interval: 3000, reps: 9, ease: 3 };
  long = schedule(long, "easy", now);
  if (long.interval > 3650) fail(`srs: interval ran past the ten-year ceiling (${long.interval})`);

  const states: Record<string, never> = {};
  const paper = buildQuiz({
    count: 30,
    mode: "exam",
    seed: 42,
    mcqStates: states,
    now,
  });
  if (paper.length === 0) fail("quiz: an exam paper came back empty");
  if (paper.length > 30) fail(`quiz: asked for 30 questions, got ${paper.length}`);
  if (new Set(paper.map((q) => q.mcq.id)).size !== paper.length) fail("quiz: a question repeated in one paper");
  const again2 = buildQuiz({ count: 30, mode: "exam", seed: 42, mcqStates: states, now });
  if (again2.map((q) => q.mcq.id).join() !== paper.map((q) => q.mcq.id).join())
    fail("quiz: the same seed did not rebuild the same paper");
  if (SUBJECTS.length > 3 && new Set(paper.map((q) => q.subjectId)).size < 3)
    fail("quiz: an exam paper should draw across subjects");

  const single = SUBJECTS[0];
  if (single) {
    const set = buildQuiz({
      subjectIds: [single.id],
      count: 10,
      mode: "practice",
      seed: 7,
      mcqStates: states,
      now,
    });
    if (set.some((q) => q.subjectId !== single.id)) fail("quiz: a subject filter leaked another subject in");
  }
  console.log(`exam paper: ${paper.length} questions across ${new Set(paper.map((q) => q.subjectId)).size} subjects`);
}

/* ---------- Result ---------- */
const counts = contentCounts();
console.log(
  `\nTotals — subjects ${counts.subjects}, topics ${counts.topics}, theory ${counts.theory}, mcqs ${counts.mcqs}, cards ${counts.cards}, cases ${counts.cases}`,
);

if (warnings.length) {
  console.log(`\n${warnings.length} warnings:`);
  for (const w of warnings.slice(0, 60)) console.log(`  ! ${w}`);
  if (warnings.length > 60) console.log(`  … ${warnings.length - 60} more`);
}

if (failures.length) {
  console.error(`\n${failures.length} FAILURES:`);
  for (const f of failures) console.error(`  x ${f}`);
  process.exit(1);
}

console.log("\nAll study content checks passed.");
