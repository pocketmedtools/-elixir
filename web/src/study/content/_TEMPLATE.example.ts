/**
 * Format anchor for subject files. Every file in this folder mirrors this
 * exact shape: topics pushed one at a time, then one default-exported Subject.
 * This file is excluded from the registry, so it never ships in the bundle.
 */
import type { Subject, Topic } from "../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "example-topic",
  title: "Example topic",
  oneLiner: "The definition-level sentence a candidate should be able to give.",
  // "core" | "common" | "less-common" | "uncommon" — the library orders by this.
  frequency: "core",
  keywords: ["synonym", "drug name", "abbreviation"],
  sections: [
    {
      heading: "Definition & burden",
      points: [
        "**Definition:** the criterion, with the number that defines it.",
        "Indian burden with the survey it comes from (NFHS-5, ICMR-INDIAB).",
      ],
    },
    {
      heading: "Approach in the clinic",
      points: [
        "History: the three questions that change management.",
        "Examination: the sign that rules the differential in or out.",
        "Investigations: the first-line panel, and what each result would change.",
      ],
    },
    {
      heading: "Management",
      points: [
        "Non-drug: the counselling point, with its effect size.",
        "First line: **drug, dose, frequency, duration** as it would be written on a prescription.",
        "Step-up and failure: what to add, and when to call it a failure.",
      ],
    },
  ],
  tables: [
    {
      heading: "Drug options at a glance",
      columns: ["Drug", "Dose", "Watch for"],
      rows: [["Drug name", "500 mg PO BD", "The one adverse effect that stops it"]],
    },
  ],
  redFlags: ["The finding that means refer or admit today."],
  pearls: ["The line an examiner rewards, phrased the way it should be said."],
  mcqs: [
    {
      id: "example-topic-q1",
      stem: "A vignette carrying the age, the setting and the numbers that decide the answer. What is the next best step?",
      options: [
        "The correct next step",
        "A plausible but premature investigation",
        "A treatment that fits a different diagnosis",
        "A referral that is not yet indicated",
      ],
      answer: 0,
      explanation:
        "Why the key is correct, then one clause each on why the tempting distractors are wrong.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "example-topic-c1",
      front: "The question side, short.",
      back: "The answer side, one or two lines.",
    },
  ],
  theory: [
    {
      id: "example-topic-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "common",
      question: "The written-paper question, in the words the paper would use.",
      openingLines: [
        "The definition, with the number that defines it, in one sentence.",
        "One line of burden or relevance, with its source.",
      ],
      answer: [
        {
          heading: "Aetiology and classification",
          points: ["The grouped list an examiner can tick off."],
        },
        {
          heading: "Management",
          points: ["Drug, dose, route, frequency, duration, and what failure looks like."],
        },
      ],
      mustDraw: ["The flow chart or table the examiner expects on the page."],
      markSplit: [
        { part: "Definition and classification", marks: 3 },
        { part: "Management", marks: 7 },
      ],
      keywords: ["synonym", "abbreviation"],
    },
  ],
  references: ["Guideline name, edition/year"],
});

const subject: Subject = {
  id: "example",
  title: "Example subject",
  blurb: "One line saying what this subject covers in the exam.",
  icon: "BookOpen",
  papers: ["II"],
  topics,
};

export default subject;
