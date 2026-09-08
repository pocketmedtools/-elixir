/**
 * Does each MCQ key agree with its own explanation?
 *
 * A wrong `answer` index is the worst defect this library can carry: the
 * learner memorises the wrong fact and is confident about it. It is also the
 * one defect that can be hunted mechanically, because the explanation is
 * written to justify the key — so if the explanation never mentions the key and
 * instead argues for a distractor, something is wrong with one of them.
 *
 * Two independent signals, both reported so a human can judge:
 *
 *   letter   the explanation names an option ("the answer is B", "option 3")
 *            that is not the key.
 *   overlap  the key's distinctive words are absent from the explanation while
 *            a distractor's are present.
 *
 * Neither is proof. This prints suspects, in confidence order, for a reader to
 * confirm — it is a net, not a judge.
 */
import { ensureAll, subjects } from "../src/content/index";
import type { Mcq } from "../src/lib/types";

const STOP = new Set([
  "the", "and", "for", "with", "that", "this", "from", "are", "not", "但", "all",
  "any", "its", "than", "then", "into", "over", "under", "more", "less", "most",
  "least", "which", "when", "what", "who", "whom", "because", "should", "would",
  "could", "may", "might", "can", "will", "has", "have", "had", "was", "were",
  "been", "being", "does", "did", "done", "only", "also", "both", "each",
  "other", "same", "such", "very", "about", "after", "before", "during",
  "patient", "patients", "treatment", "management", "cause", "causes", "used",
  "use", "using", "give", "given", "gives", "correct", "incorrect", "wrong",
  "right", "answer", "option", "options", "key", "best", "first", "second",
]);

function words(text: string): Set<string> {
  const out = new Set<string>();
  for (const w of text.toLowerCase().split(/[^a-z0-9]+/)) {
    if (w.length >= 4 && !STOP.has(w)) out.add(w);
  }
  return out;
}

/** How much of an option's distinctive vocabulary the explanation repeats. */
function overlap(option: string, explanation: string): number {
  const ow = words(option);
  if (ow.size === 0) return 1; // Nothing distinctive to look for; do not accuse.
  const ew = words(explanation);
  let hit = 0;
  for (const w of ow) if (ew.has(w)) hit++;
  return hit / ow.size;
}

/**
 * An option the explanation names outright, as a letter or a number.
 *
 * The letter has to be unmistakably a label, because English is full of things
 * that look like one: "the correct sequence is a blood culture" is not a vote
 * for option A. So only a parenthesised letter, an explicit "option b", or
 * "the answer is 3" counts — and a bare "a" never does, since the indefinite
 * article is indistinguishable from the label.
 */
function namedOption(q: Mcq): number | null {
  const found = new Set<number>();
  const add = (token: string) => {
    const index = /[0-9]/.test(token) ? Number(token) - 1 : token.toLowerCase().charCodeAt(0) - 97;
    if (index >= 0 && index < q.options.length) found.add(index);
  };
  for (const m of q.explanation.matchAll(/\(([a-eA-E])\)/g)) add(m[1]);
  for (const m of q.explanation.matchAll(/\boptions?\s+([a-eA-E1-5])\b/g)) add(m[1]);
  for (const m of q.explanation.matchAll(/\b(?:answer|key)\s+(?:here\s+)?is\s+([b-eB-E1-5])\b/g)) add(m[1]);
  return found.size === 1 ? [...found][0] : null;
}

await ensureAll();

type Suspect = { subject: string; topic: string; id: string; why: string; detail: string };
const suspects: Suspect[] = [];
let checked = 0;

for (const subject of subjects()) {
  for (const topic of subject.topics) {
    for (const q of topic.mcqs) {
      checked++;

      const named = namedOption(q);
      if (named !== null && named !== q.answer) {
        suspects.push({
          subject: subject.id,
          topic: topic.id,
          id: q.id,
          why: "letter",
          detail: `explanation names option ${named} but answer is ${q.answer}`,
        });
        continue;
      }

      const keyScore = overlap(q.options[q.answer], q.explanation);
      if (keyScore > 0) continue;
      const rivals = q.options
        .map((o, i) => ({ i, score: i === q.answer ? -1 : overlap(o, q.explanation) }))
        .filter((r) => r.score >= 0.5)
        .sort((a, b) => b.score - a.score);
      if (rivals.length === 0) continue;

      suspects.push({
        subject: subject.id,
        topic: topic.id,
        id: q.id,
        why: "overlap",
        detail:
          `key ${q.answer} "${q.options[q.answer]}" is absent from the explanation; ` +
          `option ${rivals[0].i} "${q.options[rivals[0].i]}" matches it at ${Math.round(rivals[0].score * 100)}%`,
      });
    }
  }
}

console.log(`checked ${checked} MCQs`);
const byWhy = (w: string) => suspects.filter((s) => s.why === w);
console.log(`suspects: ${byWhy("letter").length} named-a-different-option, ${byWhy("overlap").length} key-absent-from-explanation\n`);
for (const s of [...byWhy("letter"), ...byWhy("overlap")]) {
  console.log(`${s.why.padEnd(8)} ${s.id}  (${s.subject})`);
  console.log(`         ${s.detail}`);
}
