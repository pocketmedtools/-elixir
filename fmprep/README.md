# FM Prep — the Family Medicine exam app

A standalone app for the DNB / MD Family Medicine examination. Everything runs
on the device: no account, no server, and once the library is downloaded, no
network either.

```bash
cd fmprep
npm install
npm run dev          # http://127.0.0.1:5174/
npm run verify       # content integrity checks
npm run status       # one line per subject: topics, cases, does it compile
npm run build        # production build into dist/
```

The clinical calculators live in the sibling `web/` app (Pocket-Med) and link
across from their menu.

## What is inside

| Section | What it holds |
|---|---|
| **Exam pattern & blueprint** | The four papers, what each covers, marks and duration, the practical, the rules, how to write an answer, and a study plan. Sourced and dated; anything that could not be verified is flagged. |
| **Previous-year questions** | What was actually asked, sitting by sitting, filtered by paper — each question labelled with where its wording came from, and linked to the topic that answers it. Repeating themes are listed separately. |
| **Subject library** | 20 subjects, each ordered **core → common → less common → uncommon**, so a short session covers the likeliest material first. |
| **Theory question bank** | Written-paper questions in DNB shapes with model answers laid out in writing order, what to draw, and where the marks sit. |
| **Case presentations** | Worked long, short, OSCE and viva cases: opening line, history and examination in presentation order, summary statement, differential argued both ways, investigations with a reason each, management, and the viva that follows. |
| **How to present a case** | Running orders, the sentences to have ready, genogram / family APGAR / SCREEM / life cycle, socio-economic scales, and how it is marked. |
| **MCQs & mock papers** | Practice sets that favour unseen and previously-wrong questions; timed mock papers scored by subject. |
| **Flashcards** | SM-2 spaced repetition with four grades, each showing where the card goes next. |
| **My documents** | Your own notes, question papers and project files — imported, read and searched here. |
| **Progress** | Streak, coverage, weakest subjects, past mock scores, export and import. |

## Bringing your own material in

**My documents → Choose a whole folder** imports an entire project directory in
one go; **Choose files** takes individual files; **Paste notes** stores typed or
pasted text.

Text is extracted **inside the app** — nothing is uploaded:

| Format | What happens |
|---|---|
| `.pdf` | Text extracted page by page with page markers. A scanned PDF has no text layer, so it is stored and exportable but not searchable. |
| `.docx` | Text extracted. |
| `.txt`, `.md`, `.csv`, `.json`, `.log` | Read as they are. |
| `.html` | Tags stripped, text kept. |
| Images | Stored and displayed. |
| Anything else | Stored unchanged and exportable. |

Every document keeps **the original bytes** as well as the extracted text, so
"Export the original file" returns exactly what came in. The reader never
truncates: long files paint in blocks as you scroll and end with a character
count. Documents live in IndexedDB on that one device; clearing site data
removes them.

Your own previous-year papers belong here. Once imported they are searched
alongside the library, and a phrase in one of them can be looked up in the
library with a single tap.

## Adding or editing content

Content is typed data, not markup — one file per subject in `src/content/`,
each default-exporting a `Subject`.

1. Copy `src/content/_TEMPLATE.example.ts` (excluded from the registry).
2. Fill in topics, ordered by `frequency`.
3. Add one import line and one entry in `src/content/index.ts`
   (`SUBJECT_META` and `LOADERS`).
4. `npm run verify`.

The checker fails the build on duplicate ids, a topic written into the wrong
subject file, an MCQ whose answer index does not point at an option, ragged
tables, unbalanced `**` markers, bad frequency or paper values, mark splits
that exceed the marks on offer, thin explanations, and a stub with no topics.
It also exercises the spaced-repetition scheduler and the paper builder.

Models: `src/lib/types.ts` (content), `src/lib/frameTypes.ts` (blueprint and
presentation guide), `src/lib/pyqTypes.ts` (previous-year questions).

## Deploying

- **GitHub Pages** — the repo workflow builds both apps and publishes this one
  at `/fm/`.
- **Netlify** — point a site at this directory; `fmprep/netlify.toml` carries
  the build command and the security headers.
- **Anywhere static** — `npm run build` and serve `dist/`.

Progress is kept in `localStorage` under `FMPREP_STATE_V1`; documents are in the
`fmprep-docs` IndexedDB database. Both are per-device and can be exported.

## Accuracy

Every topic carries its own references. The blueprint carries a dated
`sourceNote`. Previous-year questions carry a provenance label, because a
recalled question is a reliable guide to the theme and only an approximate
guide to the exact words. **The clinical content has not been reviewed by a
doctor** — check any dose before acting on it, and confirm exam logistics
against the current NBEMS information bulletin.
