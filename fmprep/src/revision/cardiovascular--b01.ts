import type { RevisionSet } from "./index";

const revision: RevisionSet = {};

revision["cardiovascular-cv-examination"] = {
  checked: "2026-10",
  updated: [
    "ESC 2024 hypertension: validated upper-arm device, BP in both arms at the first visit, and an orthostatic check at diagnosis.",
    "AHA/ACC 2025 hypertension: correct office technique and out-of-office confirmation before labelling or escalating.",
    "ACC/AHA 2024 PAD: ABI bands - 0.90 or less abnormal, 0.91-0.99 borderline, over 1.40 non-compressible.",
    "WHF 2023 RHD echo criteria: simplified criteria for task-shifted handheld echo screening.",
    "ESC/EACTS 2025 valvular heart disease: echo first for any suspected lesion; earlier intervention in asymptomatic severe AS.",
  ],
  master: {
    heading: "Master revision table - Cardiovascular examination",
    columns: ["Heading", "What to write"],
    rows: [
      ["Purpose", "Find the **lesion**, its **severity**, decompensation and cause; decide who needs echo."],
      ["Order", "General survey, hands, pulse, BP (both arms, postural), face, **JVP**, carotids, precordium, lung bases, liver, oedema, peripheral pulses."],
      ["General survey", "Posture, cyanosis, **clubbing**, endocarditis stigmata, xanthomas, syndromic features, malar flush, pallor, fever."],
      ["Pulse", "Rate, rhythm, volume, **character** (slow-rising AS, collapsing AR, jerky HCM, alternans LV failure, paradoxus tamponade), radio-femoral delay."],
      ["Blood pressure", "Correct cuff, palpate first, phase I and V; **both arms** (over 20 mmHg difference abnormal); standing at 1 and 3 min (20/10 fall); ABI 0.90 or less = PAD."],
      ["JVP", "45 degrees, height above **sternal angle** (normal 3-4 cm); absent a in AF, cannon a in CHB, cv wave in TR, absent y in tamponade, Kussmaul in constriction."],
      ["Precordium", "Scars, apex position and **character** (tapping, heaving, hyperdynamic, double), parasternal heave, palpable P2, thrills."],
      ["Heart sounds", "S1 loud or soft; S2 splitting (**fixed - ASD**, reversed - LBBB or AS, single - severe AS); S3, S4, opening snap, clicks, knock, rub."],
      ["Murmurs", "Timing, site, radiation, **Levine grade 1-6** (diastolic 1-4), pitch, character, configuration; severity from signs, not loudness."],
      ["Manoeuvres", "Inspiration - right-sided louder; **Valsalva** - all softer except HCM and MVP; handgrip - MR, AR, VSD louder, AS and HCM softer."],
      ["Eponymous signs", "AR: Corrigan, de Musset, Quincke, Traube, **Duroziez**, Hill; MS: Graham Steell, Ortner; TR: Carvallo, Lancisi; tamponade: Beck triad."],
      ["When to echo", "Any diastolic or continuous murmur, pansystolic, **grade 3 or more**, click, symptoms, abnormal ECG; not for a soft innocent ESM."],
      ["Latest updates", "ESC 2024 BP technique and orthostatic check; ACC/AHA 2024 ABI bands; WHF 2023 RHD echo criteria; ESC/EACTS 2025 VHD."],
      ["Viva pitfalls", "JVP from the clavicle, no carotid timing, missed radio-femoral delay, one-arm BP, assuming loud means severe."],
    ],
  },
  flows: [
    {
      kind: "flow",
      heading: "Bedside sequence of the CVS examination",
      steps: [
        { label: "General survey and vitals", detail: "Posture, cyanosis, clubbing, SpO2, temperature, respiratory rate" },
        { label: "Hands and arterial pulse", detail: "Rate, rhythm, character at carotid, radio-femoral delay" },
        { label: "Blood pressure", detail: "Both arms; standing at 1 and 3 min; ABI if PAD suspected" },
        { label: "JVP and carotids", detail: "Height above sternal angle at 45 degrees; waveform; Kussmaul; abdominojugular test" },
        { label: "Precordium: inspect and palpate", detail: "Scars, apex position and character, heaves, thrills, palpable P2" },
        { label: "Auscultate all areas, diaphragm and bell", detail: "S1, S2 splitting, added sounds, murmurs timed with the carotid", tone: "decision" },
        { label: "Positions and manoeuvres", detail: "Left lateral (MS), sitting forward (AR), respiration, Valsalva, handgrip" },
        { label: "Lung bases, liver, oedema, peripheral pulses", detail: "Crackles, pulsatile liver, sacral oedema" },
        { label: "Summarise: lesion, severity, complications, cause", tone: "good" },
      ],
    },
    {
      kind: "flow",
      heading: "Murmur found in the OPD: what next",
      steps: [
        { label: "Murmur heard", detail: "Time it against the carotid; describe fully" },
        { label: "Red flags present?", detail: "Fever, syncope, angina, hypotension, new murmur after MI", tone: "decision" },
        { label: "Yes - same-day referral or admission", detail: "Blood cultures if febrile; ECG; urgent echo", tone: "warn" },
        { label: "Diastolic, continuous, pansystolic or grade 3+?", detail: "Or click, radiation to neck or back, abnormal ECG", tone: "decision" },
        { label: "Yes - ECG, chest X-ray and echo", detail: "Refer to cardiology with the echo report" },
        { label: "Soft ESM, normal S2, no symptoms", detail: "Innocent - reassure; review if symptoms appear", tone: "good" },
      ],
    },
    {
      kind: "branch",
      heading: "Murmurs by timing",
      root: "Murmur",
      arms: [
        { label: "Ejection systolic", steps: ["Aortic stenosis", "Pulmonary stenosis", "Obstructive HCM", "ASD (pulmonary flow)", "Innocent or flow murmur"] },
        { label: "Pansystolic", steps: ["Mitral regurgitation", "Tricuspid regurgitation", "Ventricular septal defect"] },
        { label: "Late systolic", steps: ["Mitral valve prolapse", "Papillary muscle dysfunction"] },
        { label: "Early diastolic", tone: "warn", steps: ["Aortic regurgitation", "Pulmonary regurgitation (Graham Steell)"] },
        { label: "Mid-diastolic", tone: "warn", steps: ["Mitral stenosis", "Austin Flint", "Carey Coombs", "Flow rumble (MR, VSD, PDA)"] },
        { label: "Continuous", steps: ["PDA", "AV fistula", "Ruptured sinus of Valsalva", "Venous hum (benign)"] },
      ],
    },
  ],
  notes: {
    sections: [
      {
        title: "Definition and key facts",
        points: [
          "The CVS examination finds the **lesion**, grades its **severity** and looks for decompensation.",
          "**Cardiovascular disease** causes about 28% of all deaths in India.",
          "**Rheumatic heart disease** remains the commonest valve long case in India.",
          "Auscultation misses most early RHD; echo finds it in about **20 per 1000** schoolchildren.",
          "Order: general survey, hands, pulse, BP, neck, precordium, lung bases, liver, legs.",
        ],
      },
      {
        title: "Pathophysiology",
        points: [
          "**Inspiration** fills the right heart more, so P2 is delayed and right-sided murmurs get louder.",
          "Murmur loudness reflects **velocity**, not severity; a tiny VSD is loud.",
          "**Pressure overload** gives a heaving apex; **volume overload** gives a displaced hyperdynamic apex.",
          "**S3** is rapid early filling of a failing ventricle; **S4** is the atrial kick into a stiff one.",
          "**Pulsus paradoxus** comes from ventricular competition inside a tight pericardium.",
        ],
      },
      {
        title: "Clinical features",
        points: [
          "Rate and rhythm at the radial; **character** at the carotid; always check radio-femoral delay.",
          "**Slow-rising** pulse means severe AS; **collapsing** pulse means AR or a high-output state.",
          "**Pulsus alternans** means severe LV dysfunction; a **jerky** pulse suggests obstructive HCM.",
          "Measure BP in **both arms**; a difference over 20 mmHg suggests subclavian disease or dissection.",
          "**Orthostatic hypotension**: fall of 20 systolic or 10 diastolic within 3 minutes of standing.",
          "**ABI** of 0.90 or less means peripheral arterial disease; over 1.40 means stiff vessels.",
        ],
      },
      {
        title: "Examination",
        points: [
          "JVP is the height above the **sternal angle** at 45 degrees; normal is up to 3-4 cm.",
          "**Absent a** wave in AF; **cannon a** waves in heart block; **large cv** wave in TR.",
          "**Absent y** descent means tamponade; **steep y** with Kussmaul sign means constriction.",
          "Apex: **tapping** in MS, **heaving** in AS, **hyperdynamic** in MR and AR.",
          "**Left parasternal heave** with a palpable P2 means pulmonary hypertension.",
          "**Fixed split** S2 means ASD; **reversed split** means LBBB or severe AS.",
          "A short **A2-OS interval** means severe mitral stenosis.",
        ],
      },
      {
        title: "Classification that matters",
        points: [
          "**Levine grade**: 1 faint, 3 loud without thrill, 4 with thrill, 6 heard off the chest.",
          "Diastolic murmurs are graded 1-4 and are **always pathological**.",
          "Ejection systolic: AS, PS, HCM, flow. **Pansystolic**: MR, TR, VSD.",
          "Early diastolic: AR, PR. **Mid-diastolic**: MS, Austin Flint, flow rumbles.",
          "Continuous: **PDA**, AV fistula, venous hum.",
          "Innocent murmur, **7 S**: soft, systolic, short, single, small, sweet, sensitive.",
        ],
      },
      {
        title: "Differential diagnosis",
        points: [
          "**Inspiration** makes right-sided murmurs louder (Carvallo sign in TR).",
          "**Valsalva** softens all murmurs except **HCM** and mitral valve prolapse.",
          "**Handgrip** makes MR, VSD and AR louder, and AS and HCM softer.",
          "Apical rumble: **MS** has an opening snap and loud S1; **Austin Flint** has AR signs.",
          "Basal ejection murmur: **aortic sclerosis** has a normal pulse and A2, unlike AS.",
          "A venous hum disappears **lying flat**; a PDA murmur does not.",
        ],
      },
      {
        title: "Investigations",
        points: [
          "**ECG** for LVH, RVH, P mitrale, AF and bundle branch block.",
          "**Echo** for any diastolic, continuous, pansystolic or grade 3+ systolic murmur.",
          "No echo needed for a soft ejection murmur in a well young person.",
          "Handheld ultrasound **extends** the examination but does not grade valve lesions.",
          "Fever with a new murmur: **three blood cultures** before antibiotics, then echo.",
        ],
      },
      {
        title: "Special groups",
        points: [
          "**Pregnancy**: S3, soft flow murmur and mammary souffle are normal; diastolic murmurs are not.",
          "**Elderly**: aortic sclerosis in about a quarter over 65; stiff arteries hide a slow-rising pulse.",
          "**Children**: Still's murmur and venous hum are innocent; always feel the femoral pulses.",
          "**Newborn** pulse oximetry: pass if SpO2 is 95% or more with a difference of 3% or less.",
          "**Athletes**: a murmur louder on Valsalva needs echo to exclude HCM.",
        ],
      },
      {
        title: "Complications and red flags",
        points: [
          "Fever with a new murmur: suspect **infective endocarditis**.",
          "Hypotension, raised JVP, paradoxus and soft heart sounds: **tamponade**.",
          "Pulse deficit or inter-arm difference with chest pain: suspect **aortic dissection**.",
          "Ejection murmur with exertional syncope or angina: **severe AS**.",
          "New pansystolic murmur after MI: **papillary muscle or septal rupture**.",
          "Irregular cannon waves with a slow pulse: **complete heart block**.",
        ],
      },
      {
        title: "Latest updates",
        points: [
          "**ESC 2024**: BP in both arms and an orthostatic check at diagnosis.",
          "**ACC/AHA 2024 PAD**: ABI 0.91-0.99 is borderline; 0.90 or less is abnormal.",
          "**WHF 2023**: simplified echo criteria allow handheld screening for RHD.",
          "**ESC/EACTS 2025**: earlier intervention for asymptomatic severe aortic stenosis.",
        ],
      },
    ],
    tables: [
      {
        heading: "Drugs that change bedside findings",
        columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
        rows: [
          ["Amyl nitrite (manoeuvre)", "0.3 mL ampoule, inhaled 2-3 breaths", "Effect 30 s, lasts 2-3 min", "Hypotension, flushing; AS and HCM louder, MR and AR softer"],
          ["Metoprolol succinate", "25-200 mg oral once daily", "Long term", "Bradycardia hides compensatory tachycardia; do not stop abruptly"],
          ["Digoxin", "0.0625-0.25 mg oral once daily", "Long term", "Regular slow pulse in AF suggests toxicity"],
          ["Amlodipine", "2.5-10 mg oral once daily", "Long term", "Ankle oedema with normal JVP - not heart failure"],
          ["Glyceryl trinitrate", "0.4-0.5 mg sublingual, up to 3 doses", "Acute", "Postural drop, headache; avoid with PDE5 inhibitors and severe AS"],
          ["Prazosin", "0.5-1 mg oral at night first dose", "Titrate slowly", "First-dose orthostatic hypotension and syncope"],
          ["Furosemide", "20-80 mg oral or IV once or twice daily", "Adjust to weight and JVP", "Low JVP, postural hypotension, hypokalaemia when overdiuresed"],
        ],
      },
      {
        heading: "Pulse character and cause",
        columns: ["Pulse", "Cause"],
        rows: [
          ["Slow-rising", "Severe aortic stenosis"],
          ["Collapsing", "AR, PDA, high-output states"],
          ["Bisferiens", "Severe AR, mixed AS and AR, HCM"],
          ["Jerky", "Obstructive HCM"],
          ["Dicrotic", "DCM, septic shock, typhoid"],
          ["Alternans", "Severe LV systolic dysfunction"],
          ["Paradoxus", "Tamponade, acute severe asthma, massive PE"],
          ["Radio-femoral delay", "Coarctation of the aorta"],
        ],
      },
      {
        heading: "Manoeuvres: louder or softer",
        columns: ["Manoeuvre", "Louder", "Softer"],
        rows: [
          ["Inspiration", "Right-sided murmurs (TR, PS, PR)", "Pulmonary ejection click"],
          ["Valsalva or standing", "HCM, MVP (longer)", "Almost all others"],
          ["Squatting or leg raise", "AS, MR, VSD, AR", "HCM"],
          ["Handgrip", "MR, VSD, AR", "AS, HCM"],
          ["Amyl nitrite", "AS, HCM, MS", "MR, VSD, AR, Austin Flint"],
        ],
      },
    ],
    remember: [
      "Carvallo: right-sided murmurs louder on inspiration.",
      "Valsalva softens everything except HCM and MVP.",
      "S4 is never heard in AF.",
      "Innocent murmur - 7 S: soft, systolic, short, single, small, sweet, sensitive.",
      "Absent y = tamponade; steep y plus Kussmaul = constriction.",
      "Short A2-OS interval = tight mitral stenosis.",
      "Severity lives in the signs, not the loudness.",
    ],
  },
};

export default revision;
