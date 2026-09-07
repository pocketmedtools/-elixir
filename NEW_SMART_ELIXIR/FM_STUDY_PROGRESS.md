# FM Study — authoring progress and how to resume

This file is the checkpoint. Whoever picks the work up (a person or a fresh
Claude session) should read it, run the status script, and continue from the
**Next steps** list — never from the beginning.

Branch: `claude/fm-study-material-app-y84obf` in `pocketmedtools/-elixir`.

## What is finished

- App shell, reader, theory bank, case bank, MCQ/mock papers, flashcards,
  progress, My Documents importer (PDF/DOCX/TXT, originals kept), search,
  lazy per-subject chunks, offline download button. Committed and pushed.
- `web/src/study/examPattern.ts` (DNB blueprint, sourced) — done.
- `web/src/study/casePresentation.ts` (presentation guide) — done.
- Content checker `web/scripts/verifyStudyContent.ts` (`npm run verify:study`).
- Browser smoke test in the session scratchpad (`smoke.mjs`, fixtures) — not
  in the repo; recreate if needed (opens the tab, reads a topic, imports
  PDF/DOCX/TXT and checks first/last sentinel words survive, tests offline).

## Content state

Run, from `web/`:

```bash
bash scripts/studyStatus.sh
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
   `web/src/study/content/index.ts` — use exactly those.
2. **Then deepen.** Insert new `topics.push({...});` blocks **immediately
   before the line `const cases: ClinicalCase[]`**, one topic per edit, and run
   the parse check after each:
   ```bash
   npx tsx -e "import('./src/study/content/<id>.ts').then(m=>console.log(m.default.id, m.default.topics.length, m.default.cases?.length))"
   ```
3. **Checkpoint often.** From the repo root:
   ```bash
   git add web/src/study/content && git commit -m "WIP: FM Study content checkpoint" && git push origin claude/fm-study-material-app-y84obf
   ```
   (During a session an autosave loop does this every few minutes.)
4. **Rate limits.** Run at most 6 authoring agents at once. When a 429
   "session limit" appears, stop launching, checkpoint, and resume after the
   reset time it names. Nothing on disk is lost by an interruption.
5. **Finish line.** When every subject prints OK with ≥ 8 topics and 2 cases:
   ```bash
   cd web && npx tsc -b && npm run verify:study && npm run lint && npm run build
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

## Next steps (update this list as work lands)

1. Close every PARTIAL file (cases + subject + export) so the whole app builds.
2. Deepen the thin subjects to ≥ 8 topics by inserting before `const cases`.
3. Author psychiatry (currently a stub).
4. `tsc -b`, `verify:study`, `lint`, `build`, smoke test, final commit, push.
5. Optional clinical review pass: one adversarial reviewer per subject
   checking doses, cut-offs and MCQ keys; apply confirmed fixes.
