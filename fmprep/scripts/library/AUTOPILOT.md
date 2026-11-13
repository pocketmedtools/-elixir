# Master library autopilot (user authorised 2026-10-30: keep going through limits, no need to ask, until ALL subjects done)

Order: cardiovascular (DONE) -> respiratory (DONE) -> endocrine (DONE) -> gastro-hepatology (DONE) -> infectious-fever (in progress) -> neurology -> renal-urology -> musculoskeletal -> psychiatry -> dermatology -> eye-ent -> emergency -> pediatrics -> obstetrics -> gynaecology -> surgery-office -> preventive -> geriatrics-ethics -> symptom-approach -> fm-principles

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

USER WANTS UPDATES: at every check-in post one short status line (subject, topics written/total, subjects done) instead of staying silent.

(Pause lifted 2026-11-12 by user: continue.) Infectious-fever 12/48 written; resume its 12 agents (ids in agents.json) when told.


## 2026-11-12 user: "10 times more" - NEW TARGET
- Every subject's library = at least 10x its existing topic count (min 100). Part 1 (b01-b12, 48 topics) as before; then
  part 2: write spec-<sub>-p2.json with batches b13..bNN (4 topics each) for the remaining topics, run gen_batches.py, create
  stubs b13..bNN + revision stubs, and add their imports to src/content/library/<sub>/index.ts. Then launch writers (max ~12 at once).
- Order: infectious-fever (finish part 1, then part 2 to 110) -> neurology -> renal-urology -> ... -> fm-principles.
  After all subjects, top up the four finished ones (cardiovascular, respiratory, endocrine, gastro-hepatology) to 10x.
- Every push builds a new APK and live update automatically; post a one-line status each check-in.
- Scratchpad can be wiped by a container restart: restore with `cp fmprep/scripts/library/* $S/` and regenerate prompts.
  Agent ids: agents.json (also mirrored in fmprep/scripts/library/agents.json).

PAUSED 2026-11-13 06:45 UTC by user ("Pause until further notice"). Do not resume writers or start anything until told.
On resume: infectious-fever b08 (agent afe5a01ea1be3fe1d) was cut off mid-edit; its partial file is saved at
fmprep/scripts/library/b08-partial.ts.txt (the committed b08.ts is the last good version) - tell the agent.
All other writers stopped by the usage limit; resume each by id from agents.json.
