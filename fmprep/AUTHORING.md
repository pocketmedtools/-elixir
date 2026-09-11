# FM Study — authoring progress and how to resume

This file is the checkpoint. Whoever picks the work up (a person or a fresh
Claude session) should read it, run the status script, and continue from the
**Next steps** list — never from the beginning.

Branch: `claude/fm-study-material-app-y84obf` in `pocketmedtools/-elixir`.

## What is finished

- App shell, reader, theory bank, case bank, MCQ/mock papers, flashcards,
  progress, My Documents importer (PDF/DOCX/TXT, originals kept), search,
  lazy per-subject chunks, offline download button. Committed and pushed.
- `fmprep/src/examPattern.ts` (DNB blueprint, sourced) — done.
- `fmprep/src/casePresentation.ts` (presentation guide) — done.
- Content checker `fmprep/scripts/verifyContent.ts` (`npm run verify`).
- Browser smoke test at `fmprep/scripts/smoke.mjs` (`npm run smoke`). It drives
  the app the way a candidate would — reads a topic, opens the past papers,
  follows a question into the library, scrolls a seeded source document to its
  last word, imports a file of its own, and searches across all three. Start
  `npm run preview` on port 4174 first, or point `SMOKE_BASE` at another URL;
  `SMOKE_SCREENSHOT=<path>` saves a screenshot at the end.

## Content state

Run, from `fmprep/`:

```bash
bash scripts/status.sh
```

A subject prints `OK topics N cases M` when its file compiles and default-exports
a Subject; `PARTIAL` means it still ends after a `topics.push({...});` block
with no `cases`/`subject`/`export default` yet. Every complete
`topics.push` block on disk is a valid checkpoint: agents append one topic at a
time, so an interruption loses at most the topic being written.

Target per subject: **at least 8 topics** ordered core → common → less-common →
uncommon, **2 cases**, then `const subject` and `export default subject`.
Existing topics are never rewritten or shortened.

## Authoring protocol (keeps the app buildable at every checkpoint)

1. **Close the file first.** If a file is PARTIAL, append the closing block
   *before* adding more topics:
   ```ts
   const cases: ClinicalCase[] = [ /* 2 cases obeying ClinicalCase */ ];
   const subject: Subject = { id, title, blurb, icon, papers, topics, cases };
   export default subject;
   ```
   Titles/blurbs/papers/icons are listed in `SUBJECT_META` inside
   `fmprep/src/content/index.ts` — use exactly those.
2. **Then deepen.** Insert new `topics.push({...});` blocks **immediately
   before the line `const cases: ClinicalCase[]`**, one topic per edit, and run
   the parse check after each:
   ```bash
   npx tsx -e "import('./src/study/content/<id>.ts').then(m=>console.log(m.default.id, m.default.topics.length, m.default.cases?.length))"
   ```
3. **Checkpoint often.** From the repo root:
   ```bash
   git add fmprep/src/content && git commit -m "WIP: FM Study content checkpoint" && git push origin claude/fm-study-material-app-y84obf
   ```
   (During a session an autosave loop does this every few minutes.)
4. **Rate limits.** Run at most 6 authoring agents at once, and tell every
   agent NOT to read whole content files (they are 100-450 KB each; one full
   read costs most of an agent's budget). Agents should use `grep -n '^  id:'`,
   `head`, `tail`, and `sed -n '/^const cases/,/^export default/p'` on a
   finished sibling for the closing-block shape. When a 429 "session limit"
   appears, stop launching, checkpoint, and resume after the reset time it
   names. Nothing on disk is lost by an interruption; if a file no longer
   parses, delete everything from its `const cases` line onward and re-close.
5. **Finish line.** When every subject prints OK with ≥ 8 topics and 2 cases:
   ```bash
   cd fmprep && npx tsc -b && npm run verify && npm run lint && npm run build
   ```
   then run the browser smoke test, remove the `WIP` wording in the final
   commit message, and push.

## Per-subject topic briefs

The remaining-topic candidates for each subject are the ones listed in the
original agent briefs; in short:

| Subject | Still-missing candidates (pick the most examinable) |
|---|---|
| cardiovascular | RHD & valve lesions with prophylaxis, dyslipidaemia/statins, PAD & VTE, infective endocarditis, palpitations & syncope, ECG reading |
| respiratory | latent TB & contacts, drug-resistant TB, acute cough, ILI/COVID, pleural effusion, spirometry, OSA, bronchiectasis, biomass lung disease, haemoptysis |
| gastro-hepatology | IBS, constipation, acute abdomen triage, viral hepatitis A–E, cirrhosis complications, alcohol liver disease, NAFLD, jaundice approach, GI bleed, pancreatitis, anorectal, worms |
| infectious-fever | UTI, SSTI, rabies PEP, snake bite, HIV/ART/PEP, STI syndromic kits, stewardship, leptospirosis, chikungunya, kala-azar, PUO |
| neurology | TIA, seizures/status, vertigo, neuropathy, back pain with signs, Bell palsy, CNS infection incl. NCC/TBM, Parkinson, dementia, tremor, GBS/myasthenia |
| renal-urology | AKI, UTI, LUTS/BPH, stones, haematuria, nephrotic/nephritic, Na/K disorders, renal dosing, dialysis follow-up, ED, acute scrotum, PSA debate |
| musculoskeletal | OA knee, RA, gout, shoulder, neck, soft-tissue rheumatism, osteoporosis, vitamin D, fibromyalgia, SpA, SLE recognition, fractures/splinting, overuse injury |
| dermatology | scabies, eczema, psoriasis, acne, urticaria, SSTI, drug eruptions/SJS-TEN, leprosy NLEP, vitiligo, melasma, hair loss, systemic signs, steroid ladder, skin cancer |
| psychiatry (stub) | depression/PHQ-9/suicide risk, anxiety, somatic symptoms, alcohol & withdrawal, tobacco, substances, psychosis, bipolar, insomnia, delirium, child/adolescent, grief, prescribing, MHCA 2017 |
| pediatrics | (8 done) diarrhoea plans, fever <5, SAM, anaemia/deworming, asthma, milestones, neonatal jaundice, febrile seizure, UTI, adolescent, abuse |
| obstetrics | (8 done) medical disorders, drugs in pregnancy, labour/partograph, PPH, postnatal/breastfeeding, early bleeding/ectopic, MTP Act 2021, Rh-negative, IUGR, emergencies |
| gynaecology | infertility work-up, discharge/PID, dysmenorrhoea/endometriosis, fibroids, menopause/MHT, cervical screening & HPV, breast lump, prolapse, incontinence, cancer red flags |
| emergency | shock, chest/breathlessness triage, altered sensorium, poisoning (OP, paracetamol, corrosive, rodenticide, oleander), snake/scorpion, burns, trauma survey, heat stroke, drowning/electrical, acute asthma, hypoglycaemia, status, the emergency tray |
| eye-ent | conjunctivitis, refractive error/screening, cataract, glaucoma, DR screening, trauma/chemical, sudden visual loss, otitis externa/media/CSOM, hearing loss, epistaxis, rhinitis/sinusitis, sore throat scoring, tonsillitis, foreign body, ENT vertigo, oral cancer screening |
| symptom-approach | (9 done) any remaining from: chest pain, cough >2 wk, weakness/somatisation, periodic health check |
| preventive | (8 done) any remaining from: occupational health, WASH/vector control, health economics/insurance, disaster, demography |
| geriatrics-ethics | falls, polypharmacy/deprescribing, frailty, incontinence, dementia care, pressure ulcers, elder abuse, palliative/morphine, SPIKES, advance care planning, ethics principles, consent/capacity, records/medico-legal, death certification, MTP/PCPNDT legal points |
| surgery-office | abscess I&D, minor procedures, diabetic foot, burns dressing, hernia, hydrocele, breast lump triple assessment, thyroid swelling, abdominal lump, varicose veins, catheter, NG tube, injections, pre-op fitness, post-op follow-up |
| fm-principles | continuity/comprehensiveness, family tools (genogram, APGAR, SCREEM), home visits, records/SOAP/POMR/ICPC, audit cycle, EBM/PICO/appraisal, research methods, thesis/protocol, telemedicine 2020, referral/gatekeeping |

## Status: content complete, and every past question answered

Every subject carries at least 8 topics, ordered core → common → less-common →
uncommon, plus 2 worked cases. Library totals:

| | |
|---|---|
| Subjects | 20 |
| Topics | 183 |
| Model theory answers | 419 |
| MCQs | 1095 |
| Worked cases | 40 |
| Flashcards | 1941 |
| Past questions answered | 1055 of 1055 |

All green: `npx tsc -b`, `npm run verify` (zero warnings), `npm run lint`
(8 pre-existing warnings in app components, none in content), `npm run build`,
and `npm run smoke` at 20/20 — which includes scrolling a seeded source paper
through all 19,136 of its words and following a real 2022 question into the
topic that answers it.

## Phase 2 — closing the library gaps found by the past papers (done)

**Every question in `src/pyq/` now opens onto a topic that answers it:
237/237 of the June 2022 to June 2025 papers, and 818/818 of the 2011-2022
topic-wise compilation. `npm run gaps` prints "0 unanswered".**

The twenty topics below were written because a real question had no honest
answer without them. The table is kept as the record of why each exists.

Every question in `src/pyq/` is matched against the library. 32 of them still
have no honest answer, and `npx tsx scripts/gaps.ts` prints them. They ask for
20 topics the library has never carried. Each is written the normal way —
appended immediately before the `const cases: ClinicalCase[]` line of its
subject file, one topic per edit — and each one written removes its questions
from the gaps list, so `scripts/gaps.ts` is the progress bar.

| # | Topic id | Subject file | Answers |
|---|---|---|---|
| 1 | `neurology-parkinsonism` | neurology.ts | Oct 2024 P1 Q10 |
| 2 | `neurology-seizures-epilepsy` | neurology.ts | absence seizures (Jun 2021) |
| 3 | `surgery-office-spinal-anaesthesia` | surgery-office.ts | Dec 2022 P2 Q1, Jun 2025 P2 Q6 |
| 4 | `surgery-office-procedural-sedation-ketamine` | surgery-office.ts | Dec 2019 |
| 5 | `surgery-office-tracheostomy` | surgery-office.ts | Dec 2011 |
| 6 | `surgery-office-blood-transfusion` | surgery-office.ts | Apr 2016, Dec 2011 |
| 7 | `emergency-ards` | emergency.ts | Jun 2014 |
| 8 | `infectious-fever-hiv-art` | infectious-fever.ts | Apr 2023 P3 Q2, Dec 2012 |
| 9 | `pediatrics-congenital-heart-disease` | pediatrics.ts | Apr 2023 P3 Q6, Jun 2021 |
| 10 | `pediatrics-nocturnal-enuresis` | pediatrics.ts | Jun 2017, Dec 2014 |
| 11 | `pediatrics-oral-thrush` | pediatrics.ts | Dec 2013 |
| 12 | `gynaecology-uterine-prolapse` | gynaecology.ts | Dec 2012 |
| 13 | `preventive-disaster-management` | preventive.ts | Jun 2022, Dec 2020, Jun 2019 |
| 14 | `preventive-climate-change-health` | preventive.ts | Jun 2021 |
| 15 | `preventive-iec-social-marketing` | preventive.ts | Dec 2011, Dec 2020, Dec 2013 |
| 16 | `preventive-health-planning-management` | preventive.ts | Jun 2013, Dec 2020 (SWOT) |
| 17 | `preventive-health-information-gis` | preventive.ts | Dec 2020 |
| 18 | `preventive-sex-ratio-pcpndt` | preventive.ts | Dec 2013 |
| 19 | `preventive-child-women-legislation` | preventive.ts | Apr 2016 (JJ Act, NPEW) |
| 20 | `preventive-occupational-health` | preventive.ts | Jun 2014 (chemical carcinogens) |

No two authors ever touch the same subject file. Each writes its topic as a
standalone, typecheckable module in `pending/<topic-id>.ts` — shaped as

```ts
import type { Topic } from "../src/lib/types";
const topics: Topic[] = [];
topics.push({ id: "<topic-id>", /* ... */ });
export default topics;
```

— and `npm run merge` lifts the `topics.push` block out verbatim and inserts it
before the subject's `const cases: ClinicalCase[]` line, deleting the pending
file as it goes. So `pending/` is both the staging area and the queue: whatever
is still in it has been written but not yet merged.

Progress is measured, not guessed:

```bash
npm run gaps     # the questions the library still cannot answer
npm run merge    # fold finished topics into their subject files
npm run verify   # the content checker, which must stay green
```

## Phase 4 — points, a professional palette, and an Android app (done)

**Point form.** Every one of the 183 topics was re-cut from paragraphs into
points: 14,381 points became 29,430, the mean fell from 260 characters to 135,
and nearly half now name their source. The house style is one fact per point,
under 160 characters, the figure in bold, the reason as a clause after a dash,
the guideline in square brackets. `npm run prose` measures the distance from
that per subject; `npm run prosetopic <subject>` per topic. `npm run factcheck
<subject> 5cbd390` compares every quantity in a subject file against the
pre-rewrite baseline commit and fails if one is gone entirely - it was run on
all twenty subjects and nothing was lost.

**Palette.** Twenty subject colours, deep and saturated, none of them blue,
generated rather than picked: `scripts/genTheme.mjs` walks OKLCH lightness at a
fixed hue and keeps the most saturated value inside a band that still clears
4.6:1 against both grounds of its theme. The band is what stops a dark-theme
teal from resolving to fluorescent cyan. Colour marks structure only - a section
rule, a number badge, a diagram frame, a chip - and never washes behind running
text: a line that decides management is marked by the weight of its letters.
Green, ochre and carmine are reserved for safe, caution and danger.

**One theme, and why.** A white page, black letters, colour only where it
carries meaning. There is deliberately no dark variant. The app is written in
Tailwind utilities naming a literal shade - `bg-white`, `text-slate-900` - so a
dark theme means redefining the ramps those resolve through, and any component
that slips through keeps a light surface under light type. That is exactly what
happened: the token colours switched under `prefers-color-scheme` while the
utilities did not, so on a phone in dark mode the cards stayed white, the panels
went black and the headings went near-white. Whole sections rendered invisible
while every token-level check passed, because each token was individually
correct. `color-scheme: light` is pinned so the phone's setting cannot repaint
form controls underneath. One theme cannot drift.

**Marked words.** Three kinds of word are worth finding without reading the line
around them, and each is written in its own colour: carmine for the line that
decides management, violet for a name or an eponym to attach, green for a
measured quantity. They are coloured letters, not highlighter washes - a wash
behind the words fights the letters, and a page of marked points ends up looking
like a used textbook. Three is the limit: a fourth colour stops the eye sorting
them without reading, which is the only reason to have any. A name is detected
by pattern in `RichText` and in the template's `rich()` - an acronym, or a
capitalised word with a four-digit year - so the two regexes must stay in step.

The lesson from all of this is the check that now exists. `npm run readable`
drives the built app in both colour schemes and, for every element holding
visible text, resolves the real painted background by walking up through
transparent ancestors before measuring contrast. It caught 119 unreadable
elements the token checks called clean, and it now doubles as the regression
test that the phone's dark setting changes nothing. Run it, not just
`npm run contrast`, after any colour change. It parses OKLCH as well as rgb,
because Chrome reports Tailwind colours in OKLCH and a naive parser reads 0.98
as a red channel and invents failures everywhere.

**Phone.** Two faults, both about width. The past-question topic links were
nowrap monospace pills, so one long title pushed the page wider than the screen
and the tab bar scrolled out of reach; they wrap now and neither `html` nor
`body` can scroll sideways. And a three-column comparison table needs about
34rem, which a 390px screen does not have, so it was clipping its last column -
usually the one holding the answer. Below 640px each row becomes its own card
and each cell carries the column it sat under, so the comparison reads down
instead of across. Anything new that sets `white-space: nowrap` on content of
unbounded length, or a `min-width` in rem on a table, breaks this again.

**Android.** `capacitor.config.ts` plus `.github/workflows/fmprep-apk.yml`.
The Android project is generated in CI from the config, never committed. The
APK is signed with a stable identity kept on the `fmprep-signing-key` release
and published two ways. The rolling `fmprep-apk-latest` release is the archive;
the link the app itself offers is
`https://raw.githubusercontent.com/pocketmedtools/-elixir/fmprep-apk/FM-Prep.apk`,
a single-commit branch force-pushed each build. That indirection exists because
a release asset redirects github.com to a signed S3 URL and Android's download
manager stalls on that hop at 100 per cent; raw.githubusercontent serves the
bytes directly. Updates install over old versions either way. Entirely separate from
Pocket-Med: own workflow, own app id (`in.fmprep.app`), own tags; it never
touches `web/` or `gh-pages`. The runner image has no ImageMagick, so the
launcher icon is the 512px PWA icon copied into each density folder as-is.

**Diagram checks.** Two layers. `npm run diagrams` is the mechanical one and
passes clean: every diagram key names a real topic, every string is plain ASCII,
no label exceeds 52 characters, and every shape holds (compare rows matching
their column count, branches with at least two non-empty arms, cycles of three
or more). It is cheap, so run it after touching `src/diagrams/`.

**Clinical read.** All twenty subjects are now read: one agent per subject
against `src/diagrams/<subject>.ts`, with `review/<subject>/` as the source of
truth and the content file off limits except by `sed` on a line range. Six
diagrams across four subjects carried a real error, and the pattern is worth
knowing before writing more: none was a typo, and none was reachable by any
structural check. A deprescribing step named "taper what needs tapering"
listed only the drugs that need no taper. A sarcopenia step that says "on DXA"
quoted the bioimpedance cut-off. A caption claimed one centimetre divides every
pair of lesions when its own last row is a 3 mm petechia. A gout box made the
patient's own baseline urate the treatment target instead of 6 mg/dL,
contradicting the next diagram in the same topic. Two were tone: ophthalmology
review made conditional on visible eye signs in toxic epidermal necrolysis, and
the minutes-to-hours arm holding anaphylaxis left neutral while slower
reactions carried a warning. So the faults to hunt are a label that contradicts
its own detail, a number borrowed from the neighbouring instrument, and a
dangerous step left unmarked.

## Phase 3 — making it glanceable (done)

The library read like a textbook because it was rendered like one. Three things
changed, and the third is ongoing.

**Colour is navigation.** `src/lib/hues.ts` gives each subject one hue. The
reader sets it as `--h` on its root and `src/index.css` derives the accent, wash,
rule and highlighter from it, so a subject is one number rather than a palette to
keep in step. Semantic colour stays separate: red is danger, gold is a pearl or a
drawing the examiner expects, green is the right answer. Never add a colour that
means nothing.

**Marked lines.** `RichText` in `src/components/ui.tsx` renders a `**bold**` run
as a highlighter mark, not merely bold — the authors used bold for the lines that
decide management, so those are the lines that get marked. It also picks every
quantity into its own chip, matching a list of the units the library actually
writes. That list is the whole trick: matching any digit would light up "a grade
2 of 6 murmur", and matching too few leaves "1.6 microgram/kg/day" split down the
middle. If a dose renders half-highlighted, the unit belongs in that list.

**Diagrams, as data.** `Diagram` in `src/lib/types.ts` defines five shapes with
deterministic layouts:

| kind | for |
|---|---|
| `flow` | an algorithm, a protocol, a resuscitation sequence, a work-up |
| `branch` | a classification, a differential, causes grouped by mechanism |
| `ladder` | escalation in order: a treatment ladder, severity grades |
| `cycle` | a closed loop: audit, planning, transmission |
| `compare` | what tells look-alikes apart — the highest-value shape in an exam library |

They live in `src/diagrams/<subject>.ts` keyed by topic id, **beside** the library
rather than inside it, so illustrating a topic never means editing a 400 KB
subject file and several authors can work at once. A topic with no entry renders
without one, which is the honest state: a diagram that misrepresents the material
is worse than none.

`npm run verify` validates them — a comparison row whose cell count does not
match its columns, a branch with one arm, a cycle that does not close, a label
too long for a box, or a key that is not a real topic id all fail the build.
`DiagramBlock.tsx` draws them for the app and `scripts/singlefile.template.html`
for the single-file build; connectors are CSS borders rather than SVG paths so
they reflow on a phone and inherit the subject hue.

To write more, copy `src/diagrams/_TEMPLATE.example.ts`, and give the author the
per-topic digests in `review/<subject>/` rather than the subject file.

**State:** eight subjects drawn. Run this to see where it stands:

```bash
for f in src/diagrams/*.ts; do echo "$(grep -c 'kind:' $f) $(basename $f .ts)"; done | sort -rn
```

## Reading it without a server

```bash
npm run single      # packs the whole library into one self-contained HTML file
```

`dist-single/fm-prep.html` carries every topic, model answer, question,
flashcard, diagram and past question with its links — about 10 MB, no server, no
build step to open it. What it cannot carry is the document importer (that needs
pdf.js and mammoth) and the offline service worker; for those, run the app.

## If you want to take it further

1. **Clinical review pass.** One adversarial reviewer per subject, checking
   drug doses, diagnostic cut-offs and that every MCQ key matches its
   explanation; apply only confirmed corrections. This is the highest-value
   remaining work. Start from `CLINICAL-REVIEW.md`, where each author recorded
   the lines they could not settle — the caesarean dose of heavy bupivacaine,
   the transfusion threshold after myocardial infarction, ketamine in raised
   intracranial pressure, driving after a seizure in India. Those are written in
   the app as contested rather than settled, so they are a reading list for a
   primary source, not a defect list.
2. **More depth.** The per-subject table above lists topics not yet written;
   add them with the insert-before-`const cases` method, one per edit.
3. **Re-check the blueprint** against the current NBEMS information bulletin
   before each exam cycle — `examPattern.ts` carries a dated `sourceNote` and
   flags every figure it could not verify.

The authoring protocol above still applies to any further content work.
