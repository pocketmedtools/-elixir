/**
 * Diagrams for cardiovascular, keyed by topic id.
 */
import type { DiagramSet } from "../lib/types";

const diagrams: DiagramSet = {
  "cardiovascular-hypertension": [
    {
      kind: "flow",
      heading: "Confirming a diagnosis of hypertension",
      caption:
        "Office systolic 140 mmHg or more and/or diastolic 90 mmHg or more, on two visits - India retains 140/90 and does not use the 130/80 label.",
      steps: [
        {
          label: "Measure with correct technique",
          detail:
            "Seated 5 minutes, back supported, feet flat, arm at heart level, no talking; cuff bladder must encircle 75-100% of the arm - a small cuff overreads by 5-15 mmHg",
        },
        {
          label: "Average two readings",
          detail:
            "Two readings 1-2 minutes apart, a third if they differ by more than 10 mmHg; both arms at the first visit, then the higher arm",
        },
        {
          label: "Confirm at a second visit",
          detail:
            "Within 1-4 weeks; one visit is enough if BP is 180/110 mmHg or more or there is target organ damage",
          tone: "decision",
        },
        {
          label: "Confirm out of office where possible",
          detail:
            "Home BP average 135/85 mmHg or more, or ABPM daytime 135/85, 24-hour 130/80, night 120/70; white coat hypertension is 15-30% of raised clinic readings",
        },
        {
          label: "Check standing BP in the at-risk",
          detail:
            "At 1 and 3 minutes in everyone over 65, in diabetics and on alpha-blockers or diuretics; a fall of 20 systolic or 10 diastolic changes the drug choice",
        },
        {
          label: "Stage and look for organ damage",
          detail:
            "ECG for LVH (Sokolow-Lyon S in V1 plus R in V5 or V6 above 35 mm), creatinine, potassium, urine albumin, fundus, glucose, lipids",
        },
        {
          label: "Estimate 10-year cardiovascular risk",
          detail:
            "WHO/ISH South-East Asia charts decide whether low-risk Grade 1 disease gets a 3-6 month lifestyle trial before drugs",
          tone: "decision",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Stepping up treatment: the IHCI protocol",
      caption:
        "Review every 2-4 weeks until controlled, then 3-monthly. Start at step 2 straight away if BP is 20/10 mmHg above target or the grade is 2 or 3.",
      steps: [
        {
          label: "Lifestyle alone in low-risk Grade 1",
          detail:
            "Salt under 5 g/day gives 4-5 mmHg, 150 minutes of brisk walking a week 4-8 mmHg, DASH-style Indian diet 8-11 mmHg, about 1 mmHg per kg lost",
        },
        {
          label: "Step 1: amlodipine 5 mg once daily",
          detail: "Ankle oedema, flushing and gum hypertrophy are the dose-limiting effects",
        },
        {
          label: "Step 2: add telmisartan 40 mg",
          detail:
            "An ACE inhibitor or ARB is mandatory with albuminuria or a raised creatinine; check creatinine and potassium at 1-2 weeks",
        },
        {
          label: "Step 3: amlodipine 10 mg, telmisartan 80 mg",
          detail: "Both at full dose before adding a third class",
        },
        {
          label: "Step 4: add chlorthalidone 12.5 mg",
          detail: "Or hydrochlorothiazide 25 mg in the morning; watch potassium, sodium, urate and glucose",
        },
        {
          label: "Step 5: add spironolactone 25 mg",
          detail:
            "The evidence-based fourth drug in resistant hypertension - above target on three optimally dosed drugs including a diuretic, with adherence confirmed; check potassium and creatinine at 2-4 weeks",
        },
        {
          label: "Target below 140/90 mmHg",
          detail:
            "Below 130/80 if tolerated, and in diabetes, CKD with albuminuria and after stroke; over 80 years aim systolic 130-139 and never below 120",
          tone: "good",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Hypertensive emergency versus urgency",
      caption: "The difference is acute target organ damage, not the height of the reading.",
      columns: ["Feature", "Hypertensive emergency", "Hypertensive urgency"],
      rows: [
        [
          "Definition",
          "Severe BP with acute target organ damage",
          "Severe BP with no acute organ damage",
        ],
        [
          "Typical picture",
          "Encephalopathy, ACS, pulmonary oedema, aortic dissection, eclampsia, acute kidney injury",
          "BP 196/118 mmHg found at a camp in a patient who feels entirely well",
        ],
        [
          "Where treated",
          "Admit, intravenous access, BP every 5-15 minutes",
          "Outpatient; restart or intensify oral drugs",
        ],
        [
          "Drugs",
          "IV labetalol 20 mg bolus then 20-80 mg every 10 min, nitroglycerin 5-100 microgram/min, nitroprusside 0.3-0.5 microgram/kg/min",
          "Oral drugs only",
        ],
        [
          "Speed of lowering",
          "Mean arterial pressure down by no more than 25% in the first hour, then 160/100 over 2-6 hours",
          "Over days, with review in 24-72 hours",
        ],
        [
          "Exceptions to the rule",
          "Aortic dissection needs systolic under 120 mmHg within 20 minutes; acute ischaemic stroke is left alone below 220/120",
          "None",
        ],
        [
          "Never do",
          "Never drop the pressure faster than the 25% rule",
          "No intravenous drugs and no sublingual nifedipine",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "Clues that the hypertension is secondary",
      root: "Hypertension with an atypical feature",
      arms: [
        {
          label: "Primary aldosteronism",
          steps: [
            "Spontaneous hypokalaemia on no diuretic",
            "Metabolic alkalosis, cramps, nocturia",
            "Screen with the plasma aldosterone-to-renin ratio",
            "Stop interfering drugs such as spironolactone first",
          ],
        },
        {
          label: "Renal artery stenosis",
          tone: "warn",
          steps: [
            "Creatinine rise of more than 30% after an ACE inhibitor or ARB",
            "Or potassium above 5.5 mmol/L - stop the drug",
            "ACE inhibitors and ARBs are contraindicated in bilateral disease",
          ],
        },
        {
          label: "Takayasu arteritis",
          steps: [
            "Young Indian woman, absent upper limb pulse, arterial bruit",
            "Raised ESR, femoral pulses normal",
            "Hypertension is renovascular from ostial renal artery disease",
          ],
        },
        {
          label: "Coarctation of the aorta",
          steps: ["Radio-femoral delay", "Weak or absent femoral pulses"],
        },
        {
          label: "Cushing syndrome",
          steps: [
            "Central obesity, striae, proximal myopathy",
            "Overnight 1 mg dexamethasone suppression or late-night salivary cortisol",
          ],
        },
        {
          label: "Phaeochromocytoma",
          steps: [
            "Paroxysmal headache, palpitation and sweating",
            "24-hour urinary metanephrines",
          ],
        },
      ],
    },
  ],

  "cardiovascular-stable-angina": [
    {
      kind: "compare",
      heading: "Typical, atypical and non-anginal chest pain",
      caption: "Three features: substernal character, provoked by exertion, relieved by rest or nitrate.",
      columns: ["Feature", "Typical angina", "Atypical angina", "Non-anginal"],
      rows: [
        ["Substernal, characteristic quality", "Present", "Present or absent", "Usually absent"],
        ["Provoked by exertion or emotion", "Yes", "One of the three missing", "No"],
        ["Relieved by rest or nitrate", "Yes", "One of the three missing", "No"],
        ["Number of features", "All three", "Two of three", "One or none"],
        [
          "Action",
          "Treat as coronary disease and risk-stratify",
          "Functional or anatomical test",
          "Look for a non-cardiac cause, but ECG first if over 35 with risk factors",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Work-up of exertional chest pain",
      steps: [
        {
          label: "Characterise the pain",
          detail:
            "Angina lasts 2-10 minutes; pain lasting seconds, lasting hours unchanged, reproduced by a single finger point, or altered by posture and respiration is not angina",
        },
        {
          label: "Screen for unstable features",
          detail:
            "Rest or night pain, pain over 20 minutes, new within two months, or a crescendo pattern - admit and treat as acute coronary syndrome",
          tone: "warn",
        },
        {
          label: "Resting ECG",
          detail:
            "Normal between attacks in more than half of patients with significant disease - a normal ECG never excludes stable angina",
        },
        {
          label: "Estimate pre-test probability, then test",
          detail: "Treadmill test where the resting ECG is interpretable and the patient can walk",
          tone: "decision",
        },
        {
          label: "Read the treadmill for high-risk features",
          detail:
            "ST depression 2 mm or more, depression appearing in stage 1 or persisting more than 5 minutes into recovery, a fall in systolic BP, exercise-induced VT, or a Duke score of minus 11 or lower",
        },
        {
          label: "Refer for coronary angiography",
          detail:
            "High-risk test, CCS III-IV angina despite two anti-anginals, ejection fraction below 40% with ischaemia, ventricular arrhythmia, or angina limiting an occupation such as driving",
          tone: "decision",
        },
        {
          label: "Secondary prevention for every patient",
          detail:
            "Aspirin 75 mg lifelong, atorvastatin 40-80 mg to LDL below 55 mg/dL, beta-blocker, ACE inhibitor if hypertension or diabetes, tobacco cessation, cardiac rehabilitation (mortality down about 25%)",
          tone: "good",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Canadian Cardiovascular Society grading",
      caption: "Class III or IV despite two optimised anti-anginals is a referral for angiography.",
      steps: [
        {
          label: "Class I: strenuous exertion only",
          detail: "No angina walking to the shop; angina running for a bus",
        },
        {
          label: "Class II: slight limitation",
          detail: "Angina climbing more than one flight briskly, or walking uphill",
        },
        {
          label: "Class III: marked limitation",
          detail: "Angina walking one or two blocks on the level, or one flight at normal pace",
        },
        {
          label: "Class IV: any activity, or at rest",
          detail: "Angina dressing or bathing",
          tone: "warn",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Anti-anginal therapy in sequence",
      caption: "Optimise the first drug before adding the second - a beta-blocker at a resting rate of 78/min is not yet optimised.",
      steps: [
        {
          label: "First line: a beta-blocker",
          detail:
            "Metoprolol succinate 25-200 mg once daily or bisoprolol 2.5-10 mg, titrated to a resting heart rate of 55-60/min",
        },
        {
          label: "Or diltiazem SR 90-180 mg if intolerant",
          detail:
            "Never combine verapamil or diltiazem with a beta-blocker - profound bradycardia and heart block",
          tone: "warn",
        },
        {
          label: "Second line: add a long-acting nitrate",
          detail:
            "Isosorbide mononitrate SR 30-60 mg once daily with a nitrate-free interval of 8-12 hours, or add amlodipine 5-10 mg, which is safe with a beta-blocker",
        },
        {
          label: "Third line: metabolic and rate agents",
          detail:
            "Ranolazine 500 mg twice daily, nicorandil 5-10 mg twice daily, trimetazidine MR 35 mg twice daily; ivabradine 5 mg twice daily only in sinus rhythm at 70/min or more, useless in atrial fibrillation",
        },
        {
          label: "Always: sublingual nitroglycerin 0.5 mg",
          detail:
            "Sit down, repeat at 5-minute intervals up to three doses; pain beyond 15-20 minutes means hospital. Never within 24 hours of sildenafil or vardenafil or 48 hours of tadalafil",
          tone: "warn",
        },
      ],
    },
  ],

  "cardiovascular-acs": [
    {
      kind: "flow",
      heading: "The first hour of STEMI in the clinic",
      caption: "ECG within 10 minutes, aspirin chewed, reperfusion decision within 30 minutes.",
      steps: [
        {
          label: "12-lead ECG within 10 minutes",
          detail:
            "Repeat every 15-30 minutes if non-diagnostic and pain continues; add V3R-V4R if the inferior leads are involved and V7-V9 if there is ST depression in V1-V3 with a tall R",
        },
        {
          label: "Aspirin 300-325 mg chewed and swallowed",
          detail: "Chewing gives platelet inhibition in 15-20 minutes - the single most cost-effective act",
          tone: "good",
        },
        {
          label: "Clopidogrel loading by age and plan",
          detail:
            "300 mg if under 75 years with thrombolysis, 75 mg only if 75 years or over, 600 mg if primary PCI; ticagrelor 180 mg with PCI only and never with a lytic",
          tone: "warn",
        },
        {
          label: "Atorvastatin 80 mg stat",
          detail: "A single loading dose, given early irrespective of the lipid profile",
        },
        {
          label: "Nitrate, morphine and oxygen only if needed",
          detail:
            "Nitroglycerin 0.5 mg sublingual up to three doses if systolic BP is above 90 - withhold in right ventricular infarct, in bradycardia below 50/min and after a PDE-5 inhibitor; morphine 2-4 mg IV for genuine pain; oxygen only if SpO2 is below 90%",
          tone: "warn",
        },
        {
          label: "Reperfusion decision within 30 minutes",
          detail:
            "Primary PCI if first medical contact to balloon is under 120 minutes, otherwise thrombolyse on site with a door-to-needle time under 30 minutes",
          tone: "decision",
        },
        {
          label: "Enoxaparin with a fibrin-specific lytic",
          detail:
            "30 mg IV bolus plus 1 mg/kg subcutaneously, then 1 mg/kg twice daily; omit the bolus and use 0.75 mg/kg twice daily at 75 years or over; 1 mg/kg once daily if creatinine clearance is below 30 mL/min",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Choosing reperfusion",
      root: "Chest pain with a diagnostic ECG",
      arms: [
        {
          label: "STEMI with PCI within 120 minutes",
          tone: "good",
          steps: [
            "Transfer for primary percutaneous coronary intervention",
            "In-hospital target door-to-balloon under 90 minutes",
            "Higher patency and less intracranial bleeding than lysis",
          ],
        },
        {
          label: "STEMI with PCI beyond 120 minutes",
          steps: [
            "Thrombolyse on site, door-to-needle under 30 minutes",
            "Indicated up to 12 hours from onset; benefit is greatest in the first 2 hours",
            "Screen absolute contraindications: prior intracranial haemorrhage, cerebral AVM or tumour, stroke within 3 months, suspected dissection, active bleeding, head or facial trauma within 3 months",
            "Then transfer everyone for angiography at 3-24 hours - the pharmacoinvasive strategy",
          ],
        },
        {
          label: "Failed lysis at 60-90 minutes",
          tone: "warn",
          steps: [
            "Less than 50% resolution of maximal ST elevation with continuing pain",
            "Arrange rescue PCI",
            "Never repeat a lytic; streptokinase cannot be repeated after 5 days",
            "Success looks like more than 50% ST resolution, pain relief and accelerated idioventricular rhythm",
          ],
        },
        {
          label: "NSTEMI or unstable angina",
          tone: "warn",
          steps: [
            "Thrombolysis is harmful here and has no role",
            "Antiplatelets, anticoagulation and risk-guided invasive assessment",
            "Under 2 hours if unstable, in shock, with refractory angina, arrhythmia or a mechanical complication",
            "Within 24 hours if the GRACE score is above 140 or troponin is dynamic",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Thrombolytic agents used in India",
      caption: "Halve the tenecteplase dose at 75 years or over.",
      columns: ["Agent", "Regimen", "Advantage", "Caution"],
      rows: [
        [
          "Tenecteplase",
          "Single IV bolus by weight: 30 mg under 60 kg, 35 mg 60-69, 40 mg 70-79, 45 mg 80-89, 50 mg at 90 kg or more",
          "Fibrin-specific, single bolus, best for pre-hospital use",
          "Cost; intracranial haemorrhage about 1%",
        ],
        [
          "Streptokinase",
          "1.5 million units in 100 mL normal saline IV over 60 minutes",
          "Cheapest and widely available",
          "Hypotension, allergy, cannot be repeated after 5 days",
        ],
        [
          "Alteplase",
          "15 mg bolus, then 0.75 mg/kg over 30 min (max 50 mg), then 0.5 mg/kg over 60 min (max 35 mg)",
          "Fibrin-specific",
          "Needs an infusion pump and 90 minutes",
        ],
        [
          "Reteplase",
          "10 units IV bolus, repeated after 30 minutes",
          "Double bolus, no weight calculation",
          "Availability and cost",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Killip class and in-hospital mortality",
      caption: "Treat pulmonary oedema with sitting up, oxygen, furosemide 40 mg IV and nitrates; treat shock with urgent revascularisation, not inotropes alone.",
      steps: [
        { label: "Class I: no clinical heart failure", detail: "About 5% mortality", tone: "good" },
        {
          label: "Class II: crackles, S3 or raised JVP",
          detail: "Crackles over less than half the lung fields; about 15%",
        },
        { label: "Class III: frank pulmonary oedema", detail: "About 35%" },
        {
          label: "Class IV: cardiogenic shock",
          detail: "Systolic BP below 90 mmHg with hypoperfusion; 70-80% mortality",
          tone: "warn",
        },
      ],
    },
  ],

  "cardiovascular-heart-failure": [
    {
      kind: "compare",
      heading: "HFrEF versus HFpEF at a glance",
      caption: "Mildly reduced ejection fraction, HFmrEF, occupies the 41-49% band between them.",
      columns: ["Feature", "HFrEF", "HFpEF"],
      rows: [
        ["Ejection fraction", "40% or less", "50% or more"],
        [
          "Typical patient",
          "Younger man, prior myocardial infarction, dilated ventricle",
          "Older woman with hypertension, obesity, diabetes and atrial fibrillation",
        ],
        ["Apex beat", "Displaced and diffuse", "Sustained and heaving, not displaced"],
        ["Extra heart sound", "Third heart sound common", "Fourth heart sound more typical"],
        [
          "Echocardiogram",
          "Dilated LV, low ejection fraction, regional or global hypokinesia",
          "Normal cavity, LV hypertrophy, E over e prime above 14, large left atrium",
        ],
        [
          "Mortality-reducing drugs",
          "All four pillars proven",
          "SGLT2 inhibitor; otherwise treat comorbidity and congestion",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "The four pillars of HFrEF",
      caption:
        "Start all four early at low dose rather than maximising one at a time - the mortality benefit appears within 30 days.",
      steps: [
        {
          label: "Pillar 1: ARNI, or an ACE inhibitor",
          detail:
            "Sacubitril/valsartan 49/51 mg twice daily up to 97/103 mg twice daily, after a 36-hour washout from any ACE inhibitor to avoid angioedema; enalapril 2.5 mg twice daily upward where cost prevents it",
        },
        {
          label: "Pillar 2: beta-blocker",
          detail:
            "Only three are proven - carvedilol 3.125 mg twice daily to 25 mg twice daily, bisoprolol 1.25-10 mg, metoprolol succinate 12.5-200 mg. Start low, go slow, and only when euvolaemic",
          tone: "warn",
        },
        {
          label: "Pillar 3: mineralocorticoid antagonist",
          detail:
            "Spironolactone 25 mg daily, or eplerenone if gynaecomastia; potassium and creatinine at 1 week, 4 weeks then 3-monthly, and stop if potassium exceeds 5.5 mmol/L or eGFR falls below 30",
        },
        {
          label: "Pillar 4: SGLT2 inhibitor",
          detail:
            "Dapagliflozin 10 mg or empagliflozin 10 mg once daily irrespective of diabetes, often within the first week; counsel on genital mycotic infection and sick-day rules",
        },
        {
          label: "Congestion: diuretic to a target weight",
          detail:
            "Furosemide 20-40 mg once or twice daily, or torsemide 10-20 mg when gut oedema impairs absorption; fluid 1.5-2 L/day, salt under 5 g/day, daily weights with a 2 kg in 3 days rule",
        },
        {
          label: "Add-ons once the four are in place",
          detail:
            "Ivabradine 5 mg twice daily if sinus rhythm at 70/min or more, digoxin 0.125 mg daily for symptoms, intravenous iron if ferritin is under 100 ng/mL, hydralazine with isosorbide dinitrate if all renin-angiotensin blockade is contraindicated",
        },
        {
          label: "Device referral after 3 months",
          detail:
            "ICD if the ejection fraction stays 35% or less with NYHA II-III on optimal therapy; add resynchronisation if in sinus rhythm with QRS 150 ms or more, particularly with left bundle branch block",
          tone: "decision",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Acute pulmonary oedema in the clinic",
      steps: [
        { label: "Sit upright with the legs dependent", detail: "Secure intravenous access and monitor continuously" },
        { label: "Oxygen to a target SpO2 of 92-96 percent" },
        {
          label: "Furosemide 40 mg intravenously",
          detail:
            "Or 1-2.5 times the total daily oral dose in a patient already taking it; repeat or convert to an infusion, with strict input-output charting",
        },
        {
          label: "Nitrate if systolic BP is above 110 mmHg",
          detail:
            "Sublingual 0.5 mg or an infusion of 5-100 microgram/min - vasodilatation is the fastest relief in the hypertensive phenotype",
        },
        {
          label: "Non-invasive ventilation for distress",
          detail:
            "CPAP 5-10 cm H2O or BiPAP if the respiratory rate is above 25/min or SpO2 stays below 90% despite oxygen; it reduces intubation rates",
        },
        {
          label: "Do not start a beta-blocker now",
          detail:
            "Beta-blockers are negatively inotropic and are begun once euvolaemic; one the patient is already on is usually continued at a reduced dose rather than stopped",
          tone: "warn",
        },
        {
          label: "Inotropes only for cardiogenic shock",
          detail:
            "Dobutamine 2-20 microgram/kg/min if systolic BP is below 90 mmHg with hypoperfusion; they increase mortality if used to treat congestion in a normotensive patient",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Framingham criteria for heart failure",
      caption: "The bedside diagnosis where echocardiography is not immediately available.",
      columns: ["Major criteria", "Minor criteria"],
      rows: [
        ["Paroxysmal nocturnal dyspnoea", "Bilateral ankle oedema"],
        ["Neck vein distension", "Nocturnal cough"],
        ["Crepitations", "Dyspnoea on ordinary exertion"],
        ["Cardiomegaly on chest radiograph", "Hepatomegaly"],
        ["Acute pulmonary oedema", "Pleural effusion"],
        ["Third heart sound gallop", "Tachycardia above 120/min"],
        [
          "Venous pressure above 16 cm H2O, or hepatojugular reflux",
          "Weight loss of 4.5 kg or more in 5 days with treatment counts as major",
        ],
      ],
    },
  ],

  "cardiovascular-dyslipidaemia": [
    {
      kind: "compare",
      heading: "Lipid Association of India risk categories",
      caption: "Non-HDL cholesterol is total cholesterol minus HDL, needs no fasting, and its target is always the LDL target plus 30 mg/dL.",
      columns: ["Category", "Who is in it", "LDL target", "Non-HDL target"],
      rows: [
        [
          "Extreme risk A",
          "ASCVD with diabetes, CKD stage 3B or worse, familial hypercholesterolaemia, or recurrent events",
          "Below 50 mg/dL",
          "Below 80 mg/dL",
        ],
        [
          "Extreme risk B",
          "Recurrent acute coronary syndrome within a year, or polyvascular disease",
          "Below 30 mg/dL",
          "Below 60 mg/dL",
        ],
        [
          "Very high risk",
          "Established atherosclerotic cardiovascular disease",
          "Below 50 mg/dL",
          "Below 80 mg/dL",
        ],
        [
          "High risk",
          "Diabetes with a risk factor, LDL 190 mg/dL or more, or a 10-year risk of 10-20%",
          "Below 70 mg/dL",
          "Below 100 mg/dL",
        ],
        [
          "Moderate and low risk",
          "Two or fewer risk factors with a 10-year risk under 10%",
          "Below 100 mg/dL",
          "Below 130 mg/dL",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Stepping up LDL-lowering therapy",
      caption:
        "Muscle symptoms: stop for 2-4 weeks, recheck, then rechallenge at a lower dose, alternate-day rosuvastatin or a different statin - do not label a patient statin-intolerant on the first complaint.",
      steps: [
        {
          label: "Lifestyle trial in moderate-risk primary care",
          detail:
            "3-6 months: saturated fat under 7% of energy and no trans fat (lowers LDL 10-15%), 25-30 g fibre daily (5-10%), plant sterols 2 g/day (8-10%), 150 minutes of activity a week",
        },
        {
          label: "Statin on day one in four groups",
          detail:
            "Established atherosclerotic disease, LDL 190 mg/dL or more, diabetes aged 40-75, and chronic kidney disease - no risk score needed, and lifestyle will not close those gaps",
          tone: "decision",
        },
        {
          label: "Moderate-intensity statin",
          detail:
            "Atorvastatin 10-20 mg or rosuvastatin 5-10 mg, also simvastatin 20-40 mg, pitavastatin 2-4 mg, pravastatin 40 mg - LDL down 30-49%",
        },
        {
          label: "High-intensity statin",
          detail: "Atorvastatin 40-80 mg or rosuvastatin 20-40 mg once daily - LDL down 50% or more",
        },
        {
          label: "Add ezetimibe 10 mg once daily",
          detail:
            "A further 15-25% reduction and fewer events after acute coronary syndrome in IMPROVE-IT; also the drug of choice in true statin intolerance",
        },
        {
          label: "Add a PCSK9 inhibitor",
          detail:
            "Evolocumab 140 mg subcutaneously every 2 weeks or alirocumab 75-150 mg - a further 50-60%; only after maximal statin plus ezetimibe, and cost restricts use in India",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Triglycerides: what to do at each level",
      caption: "A fasting sample is needed above 400 mg/dL because the Friedewald calculation of LDL becomes invalid.",
      steps: [
        {
          label: "Above 150 mg/dL",
          detail:
            "The atherogenic Indian pattern with HDL below 40 in men and 50 in women; alcohol cessation, less sugar and refined carbohydrate, and 5-10% weight loss lowers triglycerides by 20-30%",
        },
        {
          label: "200-500 mg/dL with low HDL",
          detail:
            "Add fenofibrate 145-160 mg once daily only after LDL is at target; icosapent ethyl 2 g twice daily reduced events in statin-treated patients in REDUCE-IT",
        },
        {
          label: "Above 500 mg/dL",
          detail:
            "Fibrate first, strict alcohol abstinence, low fat diet, tight glycaemic control and omega-3 2-4 g/day; never combine a fibrate with gemfibrozil",
        },
        {
          label: "Above 1000 mg/dL",
          detail: "Imminent acute pancreatitis - admit and treat aggressively",
          tone: "warn",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Lipid management in special situations",
      root: "The case that does not follow the ordinary rule",
      arms: [
        {
          label: "Familial hypercholesterolaemia",
          steps: [
            "LDL 190 mg/dL or more in an adult, 160 mg/dL in a child",
            "Tendon xanthomata, arcus before 45, premature family disease",
            "High-intensity statin plus ezetimibe from diagnosis, from age 8-10 in children",
            "Cascade screening of all first-degree relatives - each has a 50% chance",
          ],
        },
        {
          label: "On maintenance dialysis",
          tone: "warn",
          steps: [
            "Do not initiate a statin de novo",
            "4D, AURORA and SHARP subgroups showed no cardiovascular benefit",
            "A statin started before dialysis is continued",
          ],
        },
        {
          label: "Diabetes",
          steps: [
            "Moderate-intensity statin for everyone aged 40-75",
            "High-intensity with established disease or another major risk factor",
            "LDL below 70 mg/dL, or below 50 with established disease",
          ],
        },
        {
          label: "After acute coronary syndrome",
          steps: [
            "High-intensity statin during the admission whatever the baseline LDL",
            "Recheck the lipid profile at 4-6 weeks",
            "Add ezetimibe if the target is still missed",
          ],
        },
        {
          label: "Muscle symptoms with hypothyroidism",
          steps: [
            "Untreated hypothyroidism itself causes myalgia",
            "A normal creatine kinase argues against true statin myopathy",
            "Treat the thyroid first, then reassess on the same statin",
          ],
        },
      ],
    },
  ],

  "cardiovascular-atrial-fibrillation": [
    {
      kind: "branch",
      heading: "Stroke prevention in atrial fibrillation",
      root: "AF confirmed - choose the antithrombotic",
      arms: [
        {
          label: "Valvular AF",
          tone: "warn",
          steps: [
            "Moderate-to-severe rheumatic mitral stenosis or a mechanical valve",
            "Warfarin 2.5-5 mg daily to an INR of 2.0-3.0, or 2.5-3.5 for most mechanical valves",
            "DOACs are contraindicated - INVICTUS showed higher mortality with rivaroxaban",
            "The CHA2DS2-VASc score does not apply; the risk is high whatever the score",
          ],
        },
        {
          label: "Non-valvular AF",
          steps: [
            "Score CHA2DS2-VASc: heart failure 1, hypertension 1, age 75 or more 2, diabetes 1",
            "Stroke or TIA 2, vascular disease 1, age 65-74 1, female sex 1",
            "Anticoagulate at 2 or more in men, 3 or more in women",
            "Apixaban 5 mg twice daily, rivaroxaban 20 mg once daily with the evening meal, or dabigatran 150 mg twice daily",
          ],
        },
        {
          label: "Dose reduction rules",
          steps: [
            "Apixaban 2.5 mg twice daily if two of: age 80 or over, weight 60 kg or less, creatinine 1.5 mg/dL or more",
            "Dabigatran 110 mg twice daily if 80 years or older, on verapamil, or at high bleeding risk",
            "Rivaroxaban 15 mg once daily if creatinine clearance is 15-49 mL/min",
          ],
        },
        {
          label: "High HAS-BLED score",
          tone: "decision",
          steps: [
            "Never a reason to withhold anticoagulation",
            "Correct the modifiable points: systolic above 160, concomitant aspirin or NSAIDs, labile INR, alcohol",
            "Anticoagulate, stop the aspirin, and review more frequently",
          ],
        },
      ],
    },
    {
      kind: "branch",
      heading: "Cardioversion and the 48-hour rule",
      root: "Decision to cardiovert atrial fibrillation",
      arms: [
        {
          label: "Haemodynamically unstable",
          tone: "warn",
          steps: [
            "Systolic BP below 90 mmHg, pulmonary oedema, ongoing chest pain or altered sensorium",
            "Immediate synchronised DC cardioversion",
            "Do not wait for anticoagulation",
          ],
        },
        {
          label: "AF definitely under 48 hours old",
          steps: ["Cardiovert with anticoagulation started at the same time"],
        },
        {
          label: "48 hours or more, or unknown",
          tone: "decision",
          steps: [
            "Three weeks of therapeutic anticoagulation before cardioversion",
            "Or exclude atrial thrombus with transoesophageal echocardiography",
            "At least 4 weeks of anticoagulation afterwards - the atrium is mechanically stunned",
          ],
        },
        {
          label: "Pre-excited AF in Wolff-Parkinson-White",
          tone: "warn",
          steps: [
            "Irregular, very fast, bizarrely broad QRS with delta waves on old tracings",
            "AV nodal blockers are contraindicated: verapamil, diltiazem, digoxin, adenosine, beta-blockers",
            "They drive conduction down the accessory pathway and can precipitate ventricular fibrillation",
            "Use procainamide, or DC cardioversion if the patient deteriorates",
          ],
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Rate control, the default strategy",
      caption: "A resting rate of 74/min that rises to 160/min on walking is not controlled.",
      steps: [
        {
          label: "First line: a beta-blocker",
          detail:
            "Metoprolol succinate 25-100 mg once daily or bisoprolol 2.5-10 mg; also useful in ischaemic heart disease and heart failure",
        },
        {
          label: "Diltiazem or verapamil if asthma forbids",
          detail:
            "Diltiazem SR 90-360 mg or verapamil SR 120-360 mg daily; contraindicated in heart failure with reduced ejection fraction",
          tone: "warn",
        },
        {
          label: "Add digoxin 0.125-0.25 mg once daily",
          detail:
            "Useful with heart failure or hypotension and in the sedentary elderly; it controls the rate at rest but not on exertion, and toxicity is common with renal or potassium disturbance",
        },
        {
          label: "Rhythm control if still symptomatic",
          detail:
            "Amiodarone 150 mg IV over 10 minutes then 1 mg/min for 6 hours where there is structural disease; flecainide or propafenone only when there is none. Maintenance amiodarone 200 mg daily needs 6-monthly TSH and liver tests and an annual chest radiograph",
        },
        {
          label: "AV node ablation with pacing",
          detail: "A last resort after drug therapy has failed",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Warfarin: managing a high INR",
      caption: "Aim for a time in therapeutic range above 65-70%; INR weekly until stable, then 4-6 weekly.",
      steps: [
        {
          label: "INR 5-9, no or minor bleeding",
          detail: "Withhold warfarin, give vitamin K 1-2.5 mg orally, and recheck the INR in 24 hours",
        },
        {
          label: "INR above 9, no bleeding",
          detail: "Withhold warfarin and give vitamin K 2.5-5 mg orally",
        },
        {
          label: "Major bleeding at any INR",
          detail:
            "Stop warfarin, give vitamin K 10 mg by slow intravenous injection plus 4-factor prothrombin complex concentrate, or fresh frozen plasma if it is unavailable, and treat the source",
          tone: "warn",
        },
      ],
    },
  ],

  "cardiovascular-ecg-interpretation": [
    {
      kind: "flow",
      heading: "The eight-step method, in the same order every time",
      caption: "Record at 25 mm/second and 10 mm/millivolt, and confirm the calibration pulse before measuring anything.",
      steps: [
        {
          label: "Step 1: rate",
          detail:
            "Regular rhythm - 300 divided by the large squares between R waves (300, 150, 100, 75, 60, 50); irregular - count QRS complexes in the 10-second strip and multiply by six",
        },
        {
          label: "Step 2: rhythm",
          detail:
            "Regular or not, a P before every QRS and a QRS after every P, narrow or broad; irregularly irregular with no discernible P waves is atrial fibrillation",
        },
        {
          label: "Step 3: axis",
          detail:
            "Leads I and aVF - positive in both is normal; positive I with negative aVF is left axis deviation; negative I with positive aVF is right axis deviation",
        },
        {
          label: "Step 4: intervals",
          detail:
            "PR 0.12-0.20 s, QRS under 0.12 s, QTc by Bazett up to 440 ms in men and 460 ms in women; above 500 ms carries a real risk of torsades",
        },
        {
          label: "Step 5: P wave morphology",
          detail:
            "Taller than 2.5 mm in lead II is P pulmonale; bifid and wider than 0.12 s with a deep terminal negative in V1 is P mitrale, the sign of mitral stenosis",
        },
        {
          label: "Step 6: QRS",
          detail:
            "Sokolow-Lyon S in V1 plus R in V5 or V6 above 35 mm for LVH; transition normally at V3-V4; a Q wider than 0.04 s or deeper than a quarter of the R means an old infarct",
        },
        {
          label: "Step 7: ST segment",
          detail:
            "Measure deviation at the J point using the TP segment as baseline; contiguous leads localise a territory, scattered changes usually do not",
        },
        {
          label: "Step 8: T and U waves",
          detail:
            "Deep symmetrical inversion suggests ischaemia, tall peaked T waves hyperkalaemia or earliest infarction, a prominent U wave hypokalaemia. Always compare with an old ECG - a new change beats any single morphology",
          tone: "good",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Infarct territory, leads and culprit artery",
      caption: "STEMI criteria: new J-point elevation of 1 mm in two contiguous leads, except V2-V3 where it is 2.5 mm in men under 40, 2 mm in men 40 or over, and 1.5 mm in women.",
      columns: ["Territory", "Leads with ST elevation", "Usual culprit artery", "Practical point"],
      rows: [
        [
          "Anteroseptal",
          "V1-V4",
          "Left anterior descending",
          "Largest infarcts; watch for pump failure and late heart block",
        ],
        [
          "Extensive anterior",
          "V1-V6, I, aVL",
          "Proximal left anterior descending",
          "Highest mortality; Killip class drives prognosis",
        ],
        [
          "Inferior",
          "II, III, aVF",
          "Right coronary in 80%, or circumflex",
          "Always record V3R-V4R and V7-V9; bradycardia is common",
        ],
        [
          "Right ventricular",
          "V3R-V4R, 1 mm",
          "Proximal right coronary",
          "Preload dependent - fluid boluses, and nitrates are contraindicated",
        ],
        [
          "Posterior",
          "ST depression V1-V3 with tall R; elevation in V7-V9",
          "Circumflex or right coronary",
          "Reperfuse - it is a STEMI, not an NSTEMI",
        ],
        [
          "Lateral",
          "I, aVL, V5-V6",
          "Circumflex or diagonal",
          "Reciprocal depression in II, III and aVF",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "ST elevation: infarct or mimic",
      caption: "Left ventricular aneurysm is the fourth mimic - persistent ST elevation with well-formed Q waves weeks after an infarct.",
      columns: ["Feature", "STEMI", "Acute pericarditis", "Early repolarisation"],
      rows: [
        [
          "Distribution",
          "Confined to one coronary territory",
          "Widespread, crossing territories - I, II, aVL, aVF, V2-V6",
          "Precordial leads, typically a young man",
        ],
        ["ST shape", "At the J point in contiguous leads", "Concave", "Concave with a notched J point"],
        ["Reciprocal ST depression", "Present, and supports true infarction", "Absent", "Absent"],
        [
          "PR segment",
          "Normal",
          "PR depression with PR elevation in aVR",
          "Normal",
        ],
        [
          "Pain",
          "Crushing, unaltered by posture",
          "Pleuritic, relieved by sitting forward",
          "None",
        ],
        [
          "Action",
          "Reperfusion within 120 minutes",
          "Treat the pericarditis",
          "Recognise the variant; no action",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Hyperkalaemia on the ECG",
      caption:
        "Any ECG change is an indication for immediate calcium gluconate 10 mL of 10 percent IV over 2-3 minutes, repeated at 5 minutes, then insulin 10 units in 25 g dextrose and salbutamol 10-20 mg nebulised, then definitive removal.",
      steps: [
        {
          label: "5.5-6.5 mmol/L: tall peaked T waves",
          detail: "Narrow-based symmetrical T waves, best seen in the chest leads, with a short QT",
        },
        {
          label: "6.5-7.5: P wave flattens and is lost",
          detail: "PR prolongation, first-degree or higher block",
        },
        {
          label: "7.5-8.5: QRS widens",
          detail: "Bundle branch and fascicular blocks, bizarre QRS morphology - a pre-arrest tracing",
        },
        {
          label: "Above 8.5: sine wave",
          detail: "QRS merges with the T wave, then ventricular fibrillation or asystole",
          tone: "warn",
        },
      ],
    },
  ],

  "cardiovascular-pad-vte": [
    {
      kind: "compare",
      heading: "Ankle-brachial index: what each value means",
      caption: "An index above 1.40 is the trap - incompressible calcified vessels in long-standing diabetes or CKD hide occlusive disease.",
      columns: ["ABI", "Interpretation", "Action"],
      rows: [
        [
          "Above 1.40",
          "Incompressible calcified vessels",
          "Use a toe-brachial index or Doppler waveform; do not call it normal",
        ],
        ["1.00-1.40", "Normal", "No PAD; treat other risk factors"],
        ["0.91-0.99", "Borderline", "Exercise ABI to unmask disease"],
        [
          "0.41-0.90",
          "Mild to moderate PAD",
          "Risk factor control, statin, antiplatelet, exercise programme",
        ],
        [
          "0.40 or less",
          "Severe PAD",
          "Vascular referral; look for rest pain and tissue loss",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Managing peripheral arterial disease",
      caption: "Risk reduction first, symptoms second.",
      steps: [
        {
          label: "Stop tobacco in every form",
          detail: "Bidi, khaini and gutkha included - with diabetes it is the largest driver of PAD in India",
        },
        {
          label: "Statin and antiplatelet",
          detail:
            "Atorvastatin 40-80 mg or rosuvastatin 20-40 mg to LDL below 55 mg/dL; clopidogrel 75 mg daily is preferred over aspirin 75-150 mg in symptomatic PAD on the strength of CAPRIE",
        },
        {
          label: "Blood pressure and glycaemic control",
          detail:
            "Below 140/90 mmHg, below 130/80 with diabetes; beta-blockers are not contraindicated in PAD - a favourite examiner point - and ACE inhibitors reduce events",
        },
        {
          label: "Structured exercise therapy",
          detail:
            "Walk to near-maximal pain, rest, repeat, for 30-45 minutes three times a week for at least 12 weeks; improves maximal walking distance by 50-200%, better than any drug, and safe in heart failure",
          tone: "good",
        },
        {
          label: "Cilostazol 100 mg twice daily",
          detail:
            "The only drug with reproducible benefit on walking distance, 40-60%, but absolutely contraindicated in heart failure of any severity; pentoxifylline is a weak alternative",
          tone: "warn",
        },
        {
          label: "Refer for revascularisation",
          detail:
            "Angioplasty with stenting or bypass when claudication remains lifestyle-limiting after 3-6 months, and urgently in chronic limb-threatening ischaemia",
          tone: "decision",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Acute limb ischaemia: the six-hour window",
      steps: [
        {
          label: "Recognise the six P",
          detail:
            "Pain, pallor, pulselessness, paraesthesia, paralysis and perishing cold - the limb is lost in about six hours, so this is a same-hour referral",
          tone: "warn",
        },
        {
          label: "Heparinise immediately",
          detail: "Unfractionated heparin 80 units/kg intravenous bolus then an infusion, unless contraindicated",
        },
        {
          label: "Analgesia, oxygen, nil by mouth",
          detail:
            "Keep the limb dependent and at room temperature; never elevate it, warm it or apply compression",
          tone: "warn",
        },
        {
          label: "Grade by the Rutherford class",
          detail:
            "I viable with audible Doppler - image first; IIa minimal toe sensory loss - urgent revascularisation; IIb sensory loss beyond the toes with mild weakness and inaudible Doppler - emergency; III fixed mottling, paralysis and rigid muscles - primary amputation",
          tone: "decision",
        },
        {
          label: "Emergency revascularisation",
          detail:
            "Fogarty embolectomy, catheter-directed thrombolysis or bypass; watch for reperfusion injury and compartment syndrome with hyperkalaemia, myoglobinuric kidney injury and acidosis",
        },
        {
          label: "Find the source afterwards",
          detail:
            "ECG and Holter for atrial fibrillation, echocardiography for mural thrombus and valve disease, then lifelong anticoagulation where a cardiac source is proven",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Suspected deep vein thrombosis",
      steps: [
        {
          label: "Score the Wells criteria",
          detail:
            "One point each for active cancer, paralysis or plaster, bedridden 3 days or surgery within 12 weeks, deep vein tenderness, whole-leg swelling, calf more than 3 cm larger, pitting oedema, collateral veins and previous DVT; minus 2 if an alternative diagnosis is as likely",
          tone: "decision",
        },
        {
          label: "DVT unlikely: high-sensitivity D-dimer",
          detail:
            "Age-adjusted cut-off over 50 years, age multiplied by 10 microgram/L; a negative result excludes DVT with a predictive value above 99% and no imaging is needed",
          tone: "good",
        },
        {
          label: "DVT likely or D-dimer positive: ultrasound",
          detail:
            "Compression ultrasonography, where non-compressibility is diagnostic; repeat a negative proximal two-point scan in 5-7 days if suspicion stays high",
        },
        {
          label: "Anticoagulate",
          detail:
            "Rivaroxaban 15 mg twice daily for 21 days then 20 mg once daily with food, or apixaban 10 mg twice daily for 7 days then 5 mg twice daily; enoxaparin 1 mg/kg twice daily in pregnancy and active cancer; warfarin to INR 2-3 in antiphospholipid syndrome, mechanical valves, creatinine clearance under 15, or where cost demands it",
        },
        {
          label: "Set the duration",
          detail:
            "Three months when provoked by a major transient risk factor; at least three months then consider indefinite therapy if unprovoked, recurrent, cancer-associated or antiphospholipid, reassessing bleeding risk annually",
          tone: "decision",
        },
        {
          label: "Aftercare",
          detail:
            "Early mobilisation rather than bed rest, stockings for symptom relief only, an IVC filter only when anticoagulation is absolutely contraindicated; post-thrombotic syndrome affects 20-50% after a proximal DVT",
        },
      ],
    },
  ],
};

export default diagrams;
