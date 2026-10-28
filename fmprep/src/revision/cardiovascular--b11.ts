import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "cardiovascular-antiarrhythmic-digoxin": {
    checked: "2026-10",
    updated: [
      "ESC 2024 AF: rhythm-control drug chosen by substrate - flecainide/propafenone only without HFrEF, coronary disease or significant LVH; amiodarone in HFrEF; dronedarone in HFmrEF/HFpEF or coronary disease.",
      "ESC 2024 AF: digoxin is a first-line rate-control option alongside beta-blockers and diltiazem/verapamil, at low dose with a level under 1.2 ng/mL.",
      "AHA 2025 adult ALS: amiodarone 300 mg then 150 mg, or lidocaine 1-1.5 mg/kg, for shock-refractory VF/pVT; adenosine 6 mg then 12 mg.",
      "VANISH2 2024: first-line catheter ablation beat antiarrhythmic drugs for VT in ischaemic cardiomyopathy.",
      "DIGIT-HF 2025: digitoxin reduced death or HF hospitalisation in HFrEF (digitoxin not marketed in India).",
      "AGS Beers 2023: avoid digoxin over 0.125 mg/day and as first-line for AF or HF in older adults.",
    ],
    master: {
      heading: "Master revision table - Antiarrhythmic drugs and digoxin toxicity",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Drugs that alter ion channels, receptors or calcium handling to suppress arrhythmia; all are **proarrhythmic** (CAST: flecainide after MI raised mortality 2.5-fold)."],
        ["Classification", "**Modernised Vaughan Williams 2018**: 0 ivabradine; I Na (Ia quinidine, Ib lidocaine, Ic flecainide, Id ranolazine); II autonomic (beta-blockers, atropine, digoxin, adenosine); III K (amiodarone, sotalol, dofetilide); IV Ca (verapamil, diltiazem); V-VI experimental; VII upstream (ACEi, statins)."],
        ["Mechanism", "Ic: use-dependent QRS widening, 1:1 flutter risk; III: reverse use-dependent QT prolongation, torsades at slow rates; digoxin: Na/K-ATPase block, calcium overload, vagal AV slowing."],
        ["Drug choice in AF", "Rate: beta-blocker, diltiazem/verapamil (EF over 40%), **digoxin**; rhythm: **flecainide/propafenone if normal heart**, **amiodarone in HFrEF**, dronedarone in HFmrEF/HFpEF or CAD."],
        ["Acute doses", "Adenosine 6 then 12 mg; verapamil 5-10 mg IV; amiodarone 300 mg over 30-60 min then 900-1200 mg/24 h (150 mg over 10 min for stable VT); lidocaine 1-1.5 mg/kg."],
        ["Amiodarone toxicity", "Thyroid 15-20% (hypo; AIT type 1 thionamides + perchlorate, type 2 steroids), lung 1-5%, liver 15-30% enzymes, corneal deposits over 90%, optic neuropathy, photosensitivity, blue-grey skin."],
        ["Amiodarone monitoring", "Baseline TSH, LFT, CXR, PFT with DLCO, ECG; **TSH and LFT 6-monthly**, CXR yearly; halve digoxin, cut warfarin 30-50%, simvastatin max 20 mg."],
        ["Flecainide and sotalol rules", "Flecainide: **no structural disease, add AV-nodal blocker, stop if QRS up over 25%**; sotalol: in hospital 3 days, QTc under 450 to start, stop over 500 ms, avoid if CrCl under 40."],
        ["Digoxin dosing and level", "0.0625-0.25 mg daily (lower in elderly/CKD); level 6+ h post-dose; **0.5-0.9 ng/mL in HF**, under 1.2 in AF; half-life 36-48 h; not dialysable."],
        ["Digoxin toxicity features", "Nausea, vomiting, confusion, **xanthopsia**; ectopics/bigeminy, atrial tachycardia with block, junctional rhythm, regularised AF, **bidirectional VT**; acute = high K, chronic = low K."],
        ["Precipitants", "Old age, CKD, dehydration, **hypokalaemia**, hypomagnesaemia, hypercalcaemia, hypothyroidism; amiodarone, dronedarone, verapamil, macrolides."],
        ["Emergency management", "Stop drug, monitor, charcoal 50 g within 1-2 h, correct K and Mg, atropine, lidocaine; **Fab** if life-threatening arrhythmia, K over 5.0, over 10 mg ingested; vials = level x weight / 100."],
        ["Special groups", "Pregnancy: avoid amiodarone, beta-blockers/digoxin/flecainide usable; elderly: Beers 2023 digoxin max 0.125 mg; CKD: dose digoxin, sotalol, dofetilide by CrCl; amiodarone + sofosbuvir = severe bradycardia."],
        ["Exam one-liners", "Lupus - procainamide; cinchonism - quinidine; blue-grey skin - amiodarone; phosphenes - ivabradine; reverse tick = effect not toxicity."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Suspected digoxin toxicity: bedside to antidote",
        steps: [
          { label: "Patient on digoxin: vomiting, confusion or odd vision", detail: "Or deliberate overdose, or yellow oleander seeds" },
          { label: "Monitor, IV access, stop digoxin and interacting drugs", detail: "12-lead ECG, K, Mg, Ca, creatinine, glucose" },
          { label: "Digoxin level at least 6 hours post-dose", detail: "Over 2 ng/mL usually toxic; low K makes normal levels toxic" },
          { label: "Life-threatening arrhythmia or K over 5.0?", detail: "Or over 10 mg ingested, level over 10-15 ng/mL", tone: "decision" },
          { label: "Give digoxin-specific Fab", detail: "Vials = level x kg / 100; empiric 10 acute, 3-6 chronic", tone: "warn" },
          { label: "No Fab available or not indicated", detail: "Charcoal 50 g, correct K/Mg, atropine 0.5-1 mg, lidocaine; pacing last" },
          { label: "Restart at lower dose once level falls", detail: "Target 0.5-0.9 ng/mL; fix the precipitant", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Amiodarone monitoring and toxicity ladder",
        steps: [
          { label: "Baseline before starting", detail: "TSH, LFT, chest X-ray, PFT with DLCO, ECG; halve digoxin, cut warfarin" },
          { label: "Every visit", detail: "Heart rate, QTc, visual symptoms, cough, skin" },
          { label: "Every 6 months", detail: "TSH and LFT; yearly chest X-ray" },
          { label: "Abnormal TSH", detail: "Hypo: levothyroxine; AIT type 1 carbimazole + perchlorate; type 2 prednisolone", tone: "decision" },
          { label: "Cough, DLCO fall or visual loss", detail: "Stop amiodarone; steroids for pneumonitis; optic neuropathy is an absolute stop", tone: "warn" },
        ],
      },
      {
        kind: "branch",
        heading: "AF rhythm-control drug by heart substrate (ESC 2024)",
        root: "AF needing an antiarrhythmic drug",
        arms: [
          { label: "No structural heart disease", tone: "good", steps: ["Flecainide or propafenone", "Plus AV-nodal blocker", "Pill-in-the-pocket possible"] },
          { label: "CAD, HFmrEF or HFpEF", tone: "decision", steps: ["Dronedarone", "Sotalol with QT and CrCl checks", "Amiodarone if others fail"] },
          { label: "HFrEF", tone: "warn", steps: ["Amiodarone only", "No flecainide, no dronedarone", "Consider ablation"] },
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Antiarrhythmic drugs** suppress arrhythmias by acting on ion channels, receptors or calcium handling.",
            "Every antiarrhythmic can cause **proarrhythmia**, a new or worse arrhythmia.",
            "**CAST** showed flecainide after MI raised mortality about 2.5-fold.",
            "**Digoxin** has a narrow therapeutic index; most toxicity is chronic in the elderly.",
            "Yellow oleander seeds cause the same **cardiac glycoside poisoning** in South India.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "Use the **modernised Vaughan Williams** classification (2018), classes 0 to VII.",
            "Class 0 is **ivabradine**; class I blocks sodium; class II is autonomic.",
            "Digoxin is **class IId** and adenosine **class IIe** in the new scheme.",
            "Class III blocks potassium: **amiodarone**, sotalol, dofetilide; class IV is verapamil and diltiazem.",
            "Class VII is **upstream therapy**: ACE inhibitors, ARBs and statins.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Class Ic drugs show **use dependence**: QRS widens at fast rates.",
            "Ic drugs can slow flutter enough for **1:1 conduction**, so add an AV-nodal blocker.",
            "Class III drugs show **reverse use dependence**: torsades comes at slow rates.",
            "Digoxin blocks **Na+/K+-ATPase**, raising cell calcium and contractility.",
            "Toxic calcium overload causes **delayed afterdepolarisations** and ectopy, while vagal action blocks the AV node.",
            "Low potassium **increases digoxin binding**, so toxicity appears at normal levels.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "AF rate control: beta-blocker, diltiazem or verapamil if EF over 40%, or **digoxin**.",
            "Normal heart: **flecainide or propafenone** with an AV-nodal blocker.",
            "HFrEF: **amiodarone** is the only safe rhythm-control drug.",
            "Narrow-complex tachycardia: **adenosine 6 mg**, then 12 mg, rapid IV push with flush.",
            "Shock-refractory VF: **amiodarone 300 mg** then 150 mg, or lidocaine 1-1.5 mg/kg.",
            "Digoxin maintenance **0.0625-0.25 mg daily**; lower dose in elderly and CKD.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "Amiodarone thyroid: **hypothyroidism** treated with levothyroxine; continue the drug.",
            "**AIT type 1** needs carbimazole plus perchlorate; **type 2** needs prednisolone.",
            "Amiodarone lung toxicity: cough, infiltrates, falling DLCO; **stop and give steroids**.",
            "Corneal deposits are harmless; **optic neuropathy** means stop amiodarone.",
            "Sotalol or dofetilide: **stop if QTc exceeds 500 ms**.",
            "Flecainide: reduce or stop if **QRS widens over 25%**.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Digoxin toxicity starts with **nausea, vomiting** and anorexia.",
            "Confusion and **yellow-green vision (xanthopsia)** follow, especially in the elderly.",
            "Signature rhythms: **atrial tachycardia with block** and **bidirectional VT**.",
            "Ventricular bigeminy is the commonest arrhythmia; regularised AF suggests complete block.",
            "Acute overdose gives **high potassium**; chronic toxicity often gives low potassium.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Digoxin level at least **6 hours after the dose**; target 0.5-0.9 ng/mL in HF.",
            "Check **potassium, magnesium, calcium and creatinine** in every suspected case.",
            "Reverse-tick ST depression is **digoxin effect**, not toxicity.",
            "Amiodarone baseline: **TSH, LFT, chest X-ray, PFT with DLCO, ECG**.",
            "Repeat TSH and LFT every **6 months** and chest X-ray yearly.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Stop digoxin, monitor, and give **charcoal 50 g** within 1-2 hours of acute ingestion.",
            "Keep potassium 4-5 mmol/L and give **magnesium 2 g IV** for ectopy.",
            "Bradycardia: **atropine 0.5-1 mg IV**; pace only if Fab is unavailable.",
            "Give **Fab** for life-threatening arrhythmia, potassium over 5.0 or over 10 mg ingested.",
            "Fab vials equal **level times weight divided by 100**; empiric 10 vials in acute toxicity.",
            "Avoid amiodarone and class Ia drugs; **dialysis does not remove digoxin**.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "Pregnancy: **avoid amiodarone**; beta-blockers, digoxin and flecainide are usable.",
            "Elderly: Beers 2023 says digoxin **no more than 0.125 mg daily**.",
            "CKD: avoid **sotalol if CrCl under 40**; reduce digoxin and flecainide.",
            "Amiodarone with **sofosbuvir** causes dangerous bradycardia; avoid together.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**ESC 2024 AF** chooses the rhythm drug by heart substrate.",
            "ESC 2024 makes digoxin a **first-line rate-control** option, level under 1.2 ng/mL.",
            "**VANISH2 2024**: ablation beat antiarrhythmic drugs for ischaemic VT.",
            "**DIGIT-HF 2025**: digitoxin reduced death or HF admission in HFrEF.",
          ],
        },
      ],
      tables: [
        {
          heading: "Antiarrhythmic and digoxin drugs",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Amiodarone", "IV 300 mg over 30-60 min, then 900-1200 mg/24 h; oral load to 10 g", "Maintenance 100-200 mg daily", "Thyroid, lung, liver, eye, skin; halve digoxin, cut warfarin"],
            ["Flecainide", "50-150 mg oral twice daily; pill-in-pocket 200-300 mg", "Long term; ECG after changes", "No MI, CAD, HFrEF, LVH; add AV-nodal blocker"],
            ["Sotalol", "80-160 mg oral twice daily", "Start in hospital, 3 days ECG", "Torsades; avoid if CrCl under 40 or QTc over 450"],
            ["Adenosine", "6 mg rapid IV, then 12 mg", "Single doses", "Flushing, brief asystole; 3 mg with central line"],
            ["Lidocaine", "1-1.5 mg/kg IV, then 1-4 mg/min", "Hours to days", "Confusion, seizures; lower in liver failure"],
            ["Digoxin", "0.0625-0.25 mg oral daily; 0.5 mg IV load", "Long term; level at 6+ h", "Toxic with low K, CKD, amiodarone, verapamil"],
            ["Digoxin Fab", "Vials = level x kg / 100; 40 mg vial binds 0.5 mg", "10 vials acute, 3-6 chronic", "Hypokalaemia, rebound in renal failure"],
          ],
        },
        {
          heading: "Modernised Vaughan Williams classes",
          columns: ["Class", "Mechanism", "Examples"],
          rows: [
            ["0", "HCN (If) block", "Ivabradine"],
            ["I", "Sodium block (Ia-Id)", "Quinidine, lidocaine, flecainide, ranolazine"],
            ["II", "Autonomic", "Beta-blockers, atropine, digoxin, adenosine"],
            ["III", "Potassium block", "Amiodarone, sotalol, dofetilide"],
            ["IV", "Calcium handling", "Verapamil, diltiazem; flecainide (RyR2)"],
            ["V-VI", "Mechanosensitive, gap junction", "None in clinical use"],
            ["VII", "Upstream remodelling", "ACE inhibitors, ARBs, statins"],
          ],
        },
        {
          heading: "Digoxin effect versus digoxin toxicity",
          columns: ["Feature", "Digoxin effect", "Digoxin toxicity"],
          rows: [
            ["Symptoms", "None", "Nausea, confusion, xanthopsia"],
            ["ST segment", "Sagging reverse-tick depression", "May persist"],
            ["QT interval", "Short", "Short"],
            ["Rhythm", "Sinus or rate-controlled AF", "Bigeminy, atrial tachycardia with block, bidirectional VT"],
            ["Level", "0.5-1.2 ng/mL", "Usually over 2 ng/mL"],
            ["Action", "None", "Stop drug, correct K, consider Fab"],
          ],
        },
      ],
      remember: [
        "Digoxin toxicity = more automaticity plus more block.",
        "Reverse tick = effect, not toxicity.",
        "Amiodarone added: halve digoxin, cut warfarin, simvastatin max 20 mg.",
        "Flecainide: normal heart, AV-nodal blocker, watch the QRS.",
        "Sotalol: dose by CrCl, start in hospital, stop at QTc 500.",
        "AIT type 1 = Iodine, thIonamides; type 2 = inflammation, steroids.",
        "Fab vials = level x weight / 100.",
        "CAST: suppressing ectopy is not preventing death.",
      ],
    },
  },
};

export default revision;
