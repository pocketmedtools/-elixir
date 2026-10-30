# Master library autopilot (user authorised 2026-10-30: keep going through limits, no need to ask, until ALL subjects done)

Order: cardiovascular (DONE) -> respiratory (DONE) -> endocrine (in progress) -> gastro-hepatology -> infectious-fever -> neurology -> renal-urology -> musculoskeletal -> psychiatry -> dermatology -> eye-ent -> emergency -> pediatrics -> obstetrics -> gynaecology -> surgery-office -> preventive -> geriatrics-ethics -> symptom-approach -> fm-principles

Per subject: >= 5x existing topic count new topics (min 40), 12 batches of ~4.
Setup: write $S/<sub>_batches.py like resp_batches.py (B dict + existing list), run with library_prompt.md;
 stubs src/content/library/<sub>/bNN.ts + index.ts, src/revision/<sub>--bNN.ts; add LIBRARY_LOADERS entry in src/content/index.ts; commit; launch 12 general-purpose background agents "Read your full instructions from $S/lib-<sub>-bNN.md ...". Record agent ids in agents.json.

Each check-in (hourly scheduled task "Library autopilot"):
1. Count topics per batch file (grep -c '^topics.push') and revision entries.
2. If tsc+verify pass: commit+push checkpoint of library + revision files.
3. Resume any non-finished agent (SendMessage id from agents.json) with "Limit reset; continue...". If an id fails, launch a fresh agent on the same md file (it skips done topics).
4. If subject complete (all batches done & each reported): final commit, send user the new topic list briefly, start next subject.
5. When all subjects done: delete the scheduled task, final summary.
Paper ids: medicine subjects "I"; surgery-office/dermatology/eye-ent/emergency "II"; pediatrics/obstetrics/gynaecology "III"; fm-principles/preventive/geriatrics-ethics/symptom-approach "IV".
Backup copy of these files: fmprep/scripts/library/ in the repo.
Setup per subject: write spec-<sub>.json (like spec-endocrine.json) then python3 gen_batches.py spec.json library_prompt.md $S
