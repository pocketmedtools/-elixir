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
- Browser smoke test in the session scratchpad (`smoke.mjs`, fixtures) — not
  in the repo; recreate if needed (opens the tab, reads a topic, imports
  PDF/DOCX/TXT and checks first/last sentinel words survive, tests offline).

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

## Status: content complete

As of 2026-09-07 every subject carries **at least 8 topics**, ordered core →
common → less-common → uncommon, plus 2 worked cases. Library totals:

| | |
|---|---|
| Subjects | 20 |
| Topics | 163 |
| Model theory answers | 376 |
| MCQs | 955 |
| Worked cases | 40 |
| Flashcards | 1701 |

All green: `npx tsc -b`, `npm run verify` (zero warnings), `npm run lint`
(6 pre-existing warnings elsewhere in the app), `npm run build`. The browser
smoke test passes 15/15, including importing a 10,800-word document and reading
it to its last word.

## Phase 2 — closing the library gaps found by the past papers (in progress)

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

Two agents must never edit the same subject file at once — `preventive.ts`
alone carries eight of these, so its topics are written one after another.

## If you want to take it further

1. **Clinical review pass.** One adversarial reviewer per subject, checking
   drug doses, diagnostic cut-offs and that every MCQ key matches its
   explanation; apply only confirmed corrections. This is the highest-value
   remaining work.
2. **More depth.** The per-subject table above lists topics not yet written;
   add them with the insert-before-`const cases` method, one per edit.
3. **Re-check the blueprint** against the current NBEMS information bulletin
   before each exam cycle — `examPattern.ts` carries a dated `sourceNote` and
   flags every figure it could not verify.

The authoring protocol above still applies to any further content work.
