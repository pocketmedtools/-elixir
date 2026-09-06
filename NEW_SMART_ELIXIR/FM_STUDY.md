# FM Study — the Family Medicine exam module

The study module lives inside the same app as the clinical tools, under the
**FM Study** tab (also in the ☰ menu, under *Exam preparation*). It is a
separate lazily-loaded chunk, so the calculators still open instantly and the
library is downloaded once, on first use, then cached for offline reading.

## What is inside

| Subdivision | What it holds |
|---|---|
| **Exam pattern & blueprint** | The papers, what each covers, marks and duration, the practical, the rules, how to write an answer, and a study plan. Sources are listed and dated. |
| **Subject library** | 20 subjects grouped the way the papers group them. Inside each subject topics run **core → common → less common → uncommon**, so a short session always covers the likeliest material first. |
| **Theory question bank** | Written-paper questions in DNB shapes (long answer, short note, enumerate, differentiate) with a model answer laid out in the order it should be written, what to draw, and where the marks sit. Filter by paper, frequency and subject. |
| **Case presentations** | Long, short, OSCE and viva cases worked end to end: opening line, history and examination in presentation order, summary statement, differential argued both ways, investigations with a reason each, management, and the viva that follows. |
| **How to present a case** | The running orders, the sentences to have ready, the family-medicine tools (genogram, family APGAR, SCREEM, life cycle, socio-economic scales), and how it is marked. |
| **MCQs & mock exams** | Practice sets that favour unseen and previously-wrong questions; timed mock papers scored by subject. |
| **Flashcards** | SM-2 spaced repetition, four grades, each showing where the card would go next. |
| **My documents** | Your own files, imported and read here. |
| **Progress** | Streak, coverage, weakest subjects, past mock papers, export/import, reset. |

## My documents — bringing your own material in

Open **FM Study → My documents**.

- **Choose a whole folder** imports an entire project directory in one go.
- **Choose files** imports individual files.
- **Paste notes** stores typed or pasted text.

Text is extracted **inside the app** — nothing is uploaded, and there is no
server involved:

| Format | What happens |
|---|---|
| `.pdf` | Text extracted page by page with page markers. A scanned PDF has no text layer, so it is stored and can be exported, but cannot be searched. |
| `.docx` | Text extracted. |
| `.txt`, `.md`, `.csv`, `.json`, `.log` | Read as they are. |
| `.html` | Tags stripped, text kept. |
| Images | Stored and displayed; no text extraction. |
| Anything else | Stored unchanged and exportable. |

Every document keeps **the original bytes** as well as the extracted text, so
"Export the original file" always returns exactly what was imported. The reader
never truncates: long files are painted in blocks as you scroll and end with a
character count so you can see the whole file is present.

Documents are held in IndexedDB on that one device. They are not synced, not
backed up and not readable by anyone else; clearing the browser's site data
removes them.

**Subdivisions** are just named collections (`FM Project`, `Case
Presentations`, `Seminars`, …). Rename or move a document at any time from the
list.

## Adding or editing study content

Content is typed data, not markup. One file per subject in
`web/src/study/content/`, default-exporting a `Subject`.

1. Copy `web/src/study/content/_TEMPLATE.example.ts` (it is excluded from the
   registry and never ships).
2. Fill in topics, ordered by `frequency`.
3. Add one import line and one array entry in
   `web/src/study/content/index.ts`.
4. Run the checker:

```bash
cd web
npm run verify:study
```

It fails the build on duplicate ids, an MCQ whose answer index does not point
at an option, ragged tables, unbalanced `**` markers, bad frequency or paper
values, mark splits that exceed the marks on offer, and thin explanations.

The content model is `web/src/study/lib/types.ts`; the blueprint and
presentation-guide models are in `web/src/study/lib/frameTypes.ts`.

## Where progress is kept

`localStorage` key `FMPREP_STATE_V1` holds cards, question history, topics
read, bookmarks, mock attempts, study days and reader settings. It is separate
from the clinical app's saved calculations, and can be exported and re-imported
as JSON from the Progress screen.

## Accuracy

Every topic carries its own `references`. The exam blueprint carries a
`sourceNote` naming what was checked and when. Examination logistics change:
confirm papers, marks and dates against the current NBEMS information bulletin
before relying on them.
