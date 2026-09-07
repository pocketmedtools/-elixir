/**
 * Hand-made links from a past question to the topics that answer it.
 *
 * Keyword matching gets about half the questions right; the rest are clinical
 * vignettes where the diagnosis is implied rather than named ("a 45-year-old
 * overweight man with tiredness, dry mouth, weight loss and nocturia" is type 2
 * diabetes). Those were read one by one and mapped here, in batches.
 *
 * An empty array is a deliberate answer: the library has nothing that genuinely
 * covers that question, and a wrong link would be worse than none. Those gaps
 * are worth reading as a to-do list for the library.
 */
import { topicIndex } from "../content/index";
import { LINKS_PART1 } from "./links.part1";
import { LINKS_PART2 } from "./links.part2";
import { LINKS_PART3 } from "./links.part3";
import { LINKS_PART4 } from "./links.part4";
import { LINKS_PART5 } from "./links.part5";
import { LINKS_PART6 } from "./links.part6";
import { LINKS_GAPS } from "./links.gaps";

/**
 * Corrections applied after the batches were written. The list of allowed ids
 * handed to the mapping pass wrongly withheld the type 2 diabetes topic, so the
 * questions that needed it were sent to the subject instead.
 */
const CORRECTIONS: Record<string, string[]> = {
  // The allowed-id list handed to the mapping pass wrongly withheld the type 2
  // diabetes topic, so this vignette was sent to the subject instead.
  "pyq-2022-june-pi-05": [
    "endocrine-t2dm-diagnosis-oral-drugs",
    "endocrine-diabetes-complication-screening",
  ],
  // "Classify psychiatric disorders and describe the treatment modalities" was
  // mapped to the subject rather than to topics.
  "pyqtw-0209": ["psychiatry-psychosis-schizophrenia", "psychiatry-depression"],
};

export const MANUAL_LINKS: Record<string, string[]> = {
  ...LINKS_PART1,
  ...LINKS_PART2,
  ...LINKS_PART3,
  ...LINKS_PART4,
  ...LINKS_PART5,
  ...LINKS_PART6,
  ...CORRECTIONS,
  // Written last, so a topic added to close a gap wins over the batch answer
  // of "nothing covers this".
  ...LINKS_GAPS,
};

/**
 * The mapped topic ids for a question, with anything that is not a real topic
 * dropped — a stale id from an edited subject file must not break the screen.
 */
export function manualTopicIds(questionId: string): string[] {
  const ids = MANUAL_LINKS[questionId];
  if (!ids || ids.length === 0) return [];
  const index = topicIndex();
  return ids.filter((id) => index.has(id));
}

/** How many questions have been mapped by hand, for the screen's footnote. */
export function manualLinkCount(): number {
  return Object.values(MANUAL_LINKS).filter((ids) => ids.length > 0).length;
}
