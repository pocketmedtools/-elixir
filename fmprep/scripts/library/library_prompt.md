# Master library: write textbook-depth topics for FM Prep

You are writing new topics for **FM Prep**, an exam-prep app for the Indian **DNB/MD Family Medicine** postgraduate exam. The app is in `/home/user/-elixir/fmprep` (React + TypeScript). The user wants a **master library**: every topic a PG must know for OPD, IPD and the exam, at **Harrison's (22nd ed, 2025) / Braunwald depth**, updated to the **latest guidelines (2023-2026)**, with tables, flow charts and revision notes.

## Your assignment

- Subject: **{{SUBJECT}}**
- Batch: **{{BATCH}}**
- Topic file (write here): `/home/user/-elixir/fmprep/src/content/library/{{SUBJECT}}/{{BATCH}}.ts`
- Revision file (write here): `/home/user/-elixir/fmprep/src/revision/{{SUBJECT}}--{{BATCH}}.ts`
- Topics (id | title | frequency | scope):
{{TOPICS}}

Both files already exist as empty stubs. **Edit only these two files.** Other agents write other batches at the same time. Do not commit. Do not touch any other file.

## Resuming

If some of your topics are already in the files (from an earlier interrupted run), keep them, finish any half-written topic or missing revision entry, then write the rest.

## Before writing

1. Read `src/lib/types.ts` (types `Topic`, `NoteSection`, `NoteTable`, `Mcq`, `TheoryQuestion`, `Diagram`) and `src/revision/index.ts` (`TopicRevision`, `RevisionNotes`).
2. Skim ONE existing topic for house style: the first entry in `src/content/rewrite/{{SUBJECT}}.ts` (style of points, bold, source tags) and the first entry in `src/revision/{{SUBJECT}}.ts` (the `notes`, `master`, `flows` shapes). Don't read whole big files - use head/sed on a range.
3. Existing topics in this subject (do NOT duplicate them; refer to them in one line where relevant, e.g. "see the Hypertension topic"):
{{EXISTING}}
4. Other batches are writing these sibling topics - stay inside your own scope and don't cover theirs in depth:
{{SIBLINGS}}

## Work order - save as you go

Write **one topic at a time**: compose the full `Topic`, insert it into the topic file (with `topics.push({...});` before `export default topics;`), then insert its revision entry into the revision file, then run `cd /home/user/-elixir/fmprep && npx tsc -b` and fix errors. Then the next topic. Never hold several topics only in memory - if you are interrupted, finished topics must already be on disk.

At the end run `cd /home/user/-elixir/fmprep && npx tsc -b && npm run -s verify 2>&1 | grep -iE "{{BATCH_IDS_REGEX}}|passed|FAIL" | head -40` and fix anything for your topics.

## Topic content (`Topic` in the topic file)

- `id` exactly as assigned (must start with `{{SUBJECT}}-`). `frequency` as assigned.
- `oneLiner`: the definition-level sentence an examiner wants (40+ chars, **bold** key terms).
- `keywords`: 10-20 synonyms, abbreviations, drug names, eponyms.
- `sections`: **12-16 sections**, each **5-10 points**. Cover, in this order where it applies:
  1. Definition and epidemiology (global + **Indian** burden with the survey/registry)
  2. Aetiology and risk factors
  3. Pathophysiology / mechanism (Harrison depth - the "why" that explains the signs and the drugs)
  4. Classification / staging / grading (the one examiners ask)
  5. Clinical features - history (OPD presentation, atypical presentations)
  6. Examination findings (bedside signs with their meaning; eponymous signs)
  7. Differential diagnosis (what it is confused with and the discriminating feature)
  8. Investigations - first line in an OPD/district hospital, then advanced/tertiary; interpretation cut-offs
  9. Management in OPD / primary care (non-drug + drugs with **dose, route, frequency, duration**)
  10. Management in IPD / emergency (admission criteria, protocols, monitoring)
  11. Special situations (pregnancy, elderly, CKD, diabetes, children where relevant, resource-limited setting)
  12. Complications and prognosis
  13. Referral, follow-up and monitoring (what to check, how often)
  14. Prevention / counselling / national programme link (NP-NCD, NTEP etc. where relevant)
  15. **Latest guideline updates** (what changed in 2023-2026 guidelines - name the guideline and year)
  16. Exam and viva angle (classic questions, common mistakes)
- Points: one fact each, precise numbers (cut-offs, doses, percentages), **bold** the key term (balanced `**` pairs - verify fails on an odd count). End factual points with a source tag in square brackets, e.g. `[ESC 2024]`, `[Harrison 22e]`, `[ICMR STW 2023]`, `[AHA/ACC 2025]`.
- `tables`: **4-6 tables** with real columns. Include: a **drug table** (Drug | Dose and route | Duration/titration | Key adverse effects / contraindications), a classification/staging table, a differential-diagnosis table, and an investigations/cut-offs table where relevant. Every row must have exactly as many cells as `columns`.
- `redFlags`: 5-8 findings that mean admit/refer now.
- `pearls`: 6-10 examiner-rewarded one-liners (mnemonics welcome).
- `mcqs`: **5 MCQs**, ids `<topic-id>-q1`..`-q5`, 4 options each, `answer` index 0-3 (vary the position of the key), `explanation` 60+ chars explaining why the key is right and why the main distractors are wrong (never write "option 1"; name choices by content), `difficulty` easy/moderate/hard. No "all/none of the above".
- `theory`: **2 questions** (ids `<topic-id>-t1`, `-t2`), `paper: "{{PAPER}}"`, one `kind: "long"` (10 marks, 18 minutes) and one `short-note` or `differentiate`/`chart-flow` (5 marks, 9 minutes); `frequency`; `openingLines` (2); `answer` as 4-8 `NoteSection`s in the order to write; `mustDraw` (the diagram/table to draw); `markSplit` totalling no more than the marks; `keywords`.
- `references`: 4-8, with edition/year: e.g. "Harrison's Principles of Internal Medicine, 22nd edition, 2025", "Braunwald's Heart Disease, 12th edition, 2022", the exact guideline name and year, and Indian sources (ICMR Standard Treatment Workflows, CSI, API, MoHFW) where they exist.

## Revision entry (in the revision file, keyed by the topic id)

```ts
"<topic-id>": {
  checked: "2026-10",
  updated: ["One line per guideline change reflected (name + year)"],
  master: { heading: "...", columns: ["Heading", "What to write"], rows: [...8-14 rows...] },
  flows: [ /* 3 diagrams: a diagnostic flow, a management ladder or flow, and a compare or branch */ ],
  notes: {
    sections: [ /* 7-10 sections, each 3-7 points; every point <= 25 words, plain English, **bold** the key word; never use "->" */ ],
    tables: [ /* 3 tables: the drug table with columns exactly ["Drug", "Dose and route", "Duration", "Key side effects / cautions"], plus two of differential / classification / criteria */ ],
    remember: [ /* 6-8 mnemonics and one-line exam pearls */ ],
  },
},
```

Diagram shapes (from `src/lib/types.ts`): `{kind:"flow"|"ladder"|"cycle", heading, caption?, steps:[{label, detail?, tone?}]}` (labels <= 60 chars, details carry doses/thresholds; tone "neutral"|"decision"|"warn"|"good"), `{kind:"branch", heading, root, arms:[{label, tone?, steps:string[]}]}` (2+ arms), `{kind:"compare", heading, columns, rows}`.

Revision notes section titles, in answer order, chosen from: "Definition and key facts", "Causes and risk factors", "Pathophysiology", "Classification that matters", "Clinical features", "Examination", "Differential diagnosis", "Investigations", "Treatment - first line", "Treatment - next steps", "Inpatient / emergency care", "Special groups", "Complications and red flags", "Referral and follow-up", "Latest updates". Max 10 sections - merge related ones.

## Accuracy rules

- Use the **current** guideline for every number and dose. If two sources differ, give the current one and note the difference in one point. If you are not sure of a number, leave the number out rather than guess.
- Indian practice: drugs available in India, Jan Aushadhi/NLEM where it matters, programme names as they are now (NP-NCD, Ayushman Arogya Mandir, PM-JAY), Indian epidemiology from named surveys.
- No placeholders, no "TBD", no lorem. Every topic complete.

## Report back (your final message)

One line per topic: `<id>: N sections, N tables, 5 MCQs, 2 theory, revision (N notes sections, N flows)`; then any guideline conflicts you found; confirm `tsc` and verify results for your ids.
