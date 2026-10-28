import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "cardiovascular-bradyarrhythmias-pacing": {
    checked: "2026-10",
    updated: [
      "ESC 2021 pacing and CRT guideline: bradycardia under 50 bpm; pace Mobitz II, high-grade and complete block irrespective of symptoms; CRT over RV pacing in HFrEF with AV block.",
      "ESC 2021: waiting periods before permanent pacing - 5 days after MI, about 5 days after cardiac surgery, 24-48 h after TAVI; imaging for unexplained AV block under 60 years.",
      "2023 HRS/APHRS/LAHRS physiologic pacing guideline: conduction system or biventricular pacing when LVEF 36-50% and ventricular pacing over 40% expected.",
      "AHA 2025 adult ALS: atropine 1 mg every 3-5 min (maximum 3 mg), then transcutaneous pacing or adrenaline/dopamine infusion.",
      "Dual-chamber leadless pacing approved 2023; ESC 2024 AF uses CHA2DS2-VA for tachy-brady syndrome with AF.",
    ],
    master: {
      heading: "Master revision table - Bradyarrhythmias, heart block and pacemakers",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Heart rate **under 50 bpm** (ESC 2021) from **sinus node dysfunction** or **AV block**; matters when symptomatic or infranodal."],
        ["Classification", "First-degree (PR over 200 ms), **Mobitz I** (progressive PR, nodal), **Mobitz II** (constant PR, infranodal), 2:1, high-grade, **complete block** (AV dissociation)."],
        ["Causes", "Degenerative fibrosis (Lenegre, Lev), **drugs** (beta-blocker, diltiazem, verapamil, digoxin, ivabradine, donepezil), **hyperkalaemia**, inferior/anterior MI, hypothyroidism, endocarditis abscess, diphtheria, sarcoid, TAVI, anti-Ro, OP and oleander poisoning."],
        ["Mechanism", "Vagus acts on SA and AV node, not His-Purkinje - so **atropine helps nodal block only**; junctional escape 40-60 narrow, ventricular escape 20-40 wide and unreliable."],
        ["Clinical", "Stokes-Adams attacks, dizziness, fatigue, HF, falls in elderly; **slow pulse, irregular cannon a waves, variable S1, wide pulse pressure**."],
        ["Investigations", "12-lead ECG with long strip, K, Mg, TSH, digoxin level, troponin; Holter/loop recorder by symptom frequency; exercise test; echo; **CMR/PET if AV block under 60 y**; EP study (**HV 70 ms or more** = pace)."],
        ["Emergency", "ABCDE, adverse features; **atropine 1 mg IV every 3-5 min to 3 mg**; then **transcutaneous pacing** or adrenaline 2-10 mcg/min, dopamine 5-20 mcg/kg/min, isoprenaline 5 mcg/min; transvenous wire via right IJV."],
        ["Reversible causes", "Stop AV nodal drugs; **calcium gluconate 10% 10-30 mL** for hyperkalaemia; glucagon for beta-blocker overdose; Fab for digoxin/oleander; atropine titration for OP."],
        ["PPM indications (ESC 2021)", "**Mobitz II, high-grade, complete block - irrespective of symptoms**; symptomatic SND; alternating BBB; syncope with BBB and HV 70 ms or more; post-MI block after 5 days; post-TAVI 24-48 h."],
        ["Mode", "NBG code (paced, sensed, response, rate); **DDD** for AV block; DDD minimal V pacing for SND; **VVIR** for permanent AF; **CRT** if HFrEF; conduction system pacing if EF 36-50%; leadless if no venous access."],
        ["Special groups", "Pregnancy - echo-guided implant after 8 weeks; neonatal lupus - hydroxychloroquine; dialysis - leadless; transplant - atropine useless; athletes - physiological."],
        ["Pacemaker problems", "Failure to capture, failure to output, undersensing, oversensing, **pacemaker syndrome**, endless-loop tachycardia (magnet), pocket infection (**complete extraction**), pacing-induced cardiomyopathy."],
        ["Follow-up", "Wound 7-10 days; arm below shoulder 4-6 weeks; device check 2-12 weeks then 6-12 monthly or remote; battery 8-12 years."],
        ["Exam traps", "2:1 block is not automatically Mobitz II; stop drugs and fix potassium before pacing; regular slow AF = complete block from digoxin."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Slow pulse in the OPD: from ECG to decision",
        steps: [
          { label: "Pulse under 50 bpm or pauses - record 12-lead ECG", detail: "Long lead II strip; map every P to QRS" },
          { label: "Adverse features?", detail: "Shock, syncope, ischaemia, heart failure, confusion", tone: "decision" },
          { label: "Yes - emergency bradycardia algorithm", detail: "Atropine 1 mg IV, pacing or infusion, transfer", tone: "warn" },
          { label: "Look for reversible causes", detail: "Drugs, potassium, ischaemia, thyroid, temperature, poisoning" },
          { label: "Classify the block", detail: "First-degree, Mobitz I, Mobitz II, 2:1, high-grade, complete", tone: "decision" },
          { label: "Mobitz II, high-grade or complete block", detail: "Same-day referral for permanent pacing even if asymptomatic", tone: "warn" },
          { label: "Sinus bradycardia, first-degree, Mobitz I without symptoms", detail: "No treatment; review drugs; Holter if symptoms", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Unstable bradycardia: escalation ladder",
        steps: [
          { label: "Treat cause and monitor", detail: "IV access, 12-lead ECG, stop AV nodal drugs, correct potassium" },
          { label: "Atropine", detail: "1 mg IV every 3-5 min, maximum 3 mg; useless in infranodal block or transplant" },
          { label: "Chronotropic infusion", detail: "Adrenaline 2-10 mcg/min, dopamine 5-20 mcg/kg/min or isoprenaline 5 mcg/min" },
          { label: "Transcutaneous pacing", detail: "Rate 60-70, raise current to capture, check femoral pulse, sedate", tone: "warn" },
          { label: "Temporary transvenous pacing", detail: "Right internal jugular or femoral vein" },
          { label: "Permanent pacemaker", detail: "Once reversible causes excluded; mode by rhythm and LVEF", tone: "good" },
        ],
      },
      {
        kind: "compare",
        heading: "Mobitz I versus Mobitz II versus complete heart block",
        columns: ["Feature", "Mobitz I", "Mobitz II", "Complete block"],
        rows: [
          ["PR interval", "Lengthens until a drop", "Constant, sudden drop", "Varies randomly - no conduction"],
          ["Level", "AV node", "His-Purkinje", "Node or infranodal"],
          ["QRS", "Usually narrow", "Often wide (BBB)", "Narrow or wide escape"],
          ["Atropine", "Improves", "No help, may worsen", "Narrow escape may rise slightly"],
          ["Risk", "Low", "High - progresses to complete block", "Syncope, asystole, torsades"],
          ["Pacing", "Only if symptomatic", "Yes, irrespective of symptoms", "Yes, irrespective of symptoms"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Bradycardia** is a heart rate under 50 bpm in the ESC 2021 guideline.",
            "Two groups: **sinus node dysfunction** and **AV block**.",
            "AV block in India is the leading pacing indication; SND leads in Europe.",
            "Prognosis depends on the **level of block**, not just the rate.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "Commonest chronic cause is **degenerative fibrosis** of the conduction system in the elderly.",
            "Commonest reversible cause is **drugs**: beta-blockers, diltiazem, verapamil, digoxin, ivabradine, donepezil.",
            "Check **potassium**; hyperkalaemia with AV nodal blockers causes BRASH syndrome.",
            "Inferior MI gives nodal transient block; **anterior MI** gives infranodal dangerous block.",
            "Indian causes: diphtheria, rheumatic fever, endocarditis abscess, organophosphate and **oleander** poisoning.",
            "Unexplained AV block under 60 years: think **cardiac sarcoidosis**.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**First-degree**: PR over 200 ms, every P conducted.",
            "**Mobitz I**: PR lengthens until one P drops; nodal and usually benign.",
            "**Mobitz II**: constant PR then sudden drop; infranodal; always paced.",
            "**2:1 block** cannot be labelled from one strip; wide QRS suggests infranodal.",
            "**Complete block**: atria and ventricles beat independently; atrial rate faster.",
            "SND: sinus pauses over 3 s awake, chronotropic incompetence, **tachy-brady syndrome**.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "**Stokes-Adams attack**: sudden blackout without warning, pale then flushed on recovery.",
            "Elderly present with falls, confusion, fatigue or worsening heart failure.",
            "Complete block signs: slow pulse, **irregular cannon a waves**, variable first heart sound.",
            "Wide pulse pressure and a systolic flow murmur reflect large stroke volume.",
            "Regular slow rhythm in AF on digoxin means **complete heart block**.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**12-lead ECG with long rhythm strip** is the key test.",
            "Bloods: potassium, magnesium, TSH, creatinine, digoxin level, troponin.",
            "Holter for daily symptoms; **implantable loop recorder** for rare syncope.",
            "Echo before pacing to choose the device by **LVEF**.",
            "EP study: **HV interval 70 ms or more** with syncope means pace.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Look for adverse features: shock, syncope, ischaemia, heart failure.",
            "**Atropine 1 mg IV** every 3-5 minutes, maximum 3 mg.",
            "Atropine fails in **infranodal block** and in transplanted hearts.",
            "Next: **transcutaneous pacing** or adrenaline 2-10 micrograms per minute infusion.",
            "Confirm pacing capture by the **femoral pulse**, not the carotid.",
            "Temporary wire via right internal jugular vein; keep left subclavian for the permanent device.",
            "Treat cause: calcium gluconate for potassium, glucagon for beta-blocker overdose, Fab for digoxin.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Permanent pacing for **Mobitz II, high-grade and complete block** even without symptoms.",
            "Pace SND only when symptoms clearly come from the slow rate.",
            "After MI wait **at least 5 days**; after TAVI 24-48 hours.",
            "**DDD** for AV block, **VVIR** for permanent AF, **CRT** if ejection fraction is reduced.",
            "**Leadless pacemaker** when veins are blocked or infection risk is high.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: implant after 8 weeks with echo guidance.",
            "Maternal **anti-Ro** antibodies cause congenital heart block; hydroxychloroquine reduces recurrence.",
            "Dialysis patients: prefer **leadless** devices to save veins.",
            "Athletes: resting rate in the 40s and nocturnal Mobitz I are normal.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Wound check at 7-10 days; keep arm below shoulder for **4-6 weeks**.",
            "Device check at 2-12 weeks, then every 6-12 months or remotely.",
            "**Pacemaker syndrome**: cannon waves and hypotension with VVI; upgrade to dual-chamber.",
            "Pocket infection needs **complete device extraction**, not antibiotics alone.",
            "Magnet: asynchronous pacing on a pacemaker; shocks off on an ICD.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in bradycardia",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Atropine", "1 mg IV bolus", "Every 3-5 min, maximum 3 mg", "Useless in infranodal block and transplant; glaucoma, retention"],
            ["Adrenaline", "2-10 micrograms/min IV infusion", "Bridge to pacing", "Tachyarrhythmia, ischaemia"],
            ["Isoprenaline", "5 micrograms/min IV (2-10)", "Bridge to pacing", "Hypotension, ischaemia, VT"],
            ["Dopamine", "5-20 micrograms/kg/min IV", "Bridge to pacing", "Tachyarrhythmia, extravasation necrosis"],
            ["Calcium gluconate 10%", "10-30 mL IV over 5-10 min", "Repeat if ECG unchanged", "Extravasation injury; caution with digoxin"],
            ["Glucagon", "5-10 mg IV, then infusion", "Until recovery from beta-blocker overdose", "Vomiting, hyperglycaemia"],
          ],
        },
        {
          heading: "AV block at a glance",
          columns: ["Type", "ECG", "Level", "Pacing"],
          rows: [
            ["First-degree", "PR over 200 ms", "Node", "Rarely"],
            ["Mobitz I", "PR lengthens then drop", "Node", "Only if symptomatic"],
            ["Mobitz II", "Constant PR, sudden drop", "His-Purkinje", "Always"],
            ["High-grade", "Two or more P waves in a row blocked", "Usually infranodal", "Always"],
            ["Complete", "AV dissociation, atrial rate faster", "Node or infranodal", "Always unless reversible"],
          ],
        },
        {
          heading: "Pacemaker problems",
          columns: ["Problem", "Clue", "Action"],
          rows: [
            ["Failure to capture", "Spike without QRS", "X-ray, potassium, device check"],
            ["Failure to output", "No spike when rate falls", "Magnet, urgent device check"],
            ["Pacemaker syndrome", "Cannon waves, hypotension on VVI", "Upgrade to dual-chamber"],
            ["Endless-loop tachycardia", "Paced tachycardia at upper rate in DDD", "Magnet, reprogram"],
            ["Pocket infection", "Redness, erosion, fever", "Cultures, TOE, complete extraction"],
          ],
        },
      ],
      remember: [
        "Atropine works above the His bundle, not below it.",
        "Longer, longer, longer, drop - Wenckebach; sudden drop with constant PR - Mobitz II, which is paced.",
        "Bedside complete block: slow pulse, irregular cannon a waves, variable first heart sound.",
        "Before pacing, check the five: drugs, potassium, ischaemia, thyroid, temperature.",
        "Pacing improves survival in AV block but only symptoms in sinus node dysfunction.",
        "RV apical pacing gives LBBB pattern; RBBB pattern means think lead in LV.",
        "HFrEF needing ventricular pacing: CRT, not plain RV pacing.",
      ],
    },
  },
};

export default revision;
