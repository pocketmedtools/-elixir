import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "gastro-hepatology-gi-functional-other": {
    checked: "2026-10",
    updated: [
      "AGA Clinical Practice Update on belching, bloating and distension 2023: positive Rome IV diagnosis, biofeedback for abdominophrenic dyssynergia, neuromodulators, no routine probiotics.",
      "AGA Clinical Practice Update on gut-brain behavioural therapies 2022: BGBT for all DGBI including digital delivery.",
      "European (ESNM-UEG) breath test guideline 2022: standard glucose and lactose doses and cut-offs; fructose testing not routine.",
      "Rome Foundation Global Epidemiology Study 2021: DGBI in about 40% of adults worldwide.",
      "Rome V due 2026: Rome IV retained here as the examined standard.",
    ],
    master: {
      heading: "Master revision table - functional bloating, belching and CAPS",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "**DGBI** (Rome IV): symptoms from hypersensitivity, motility, microbiota and central processing changes without structural disease."],
        ["Functional bloating (C3)", "Bloating or distension **at least 1 day a week**, predominant; IBS, FD, FC not met; **3 months, onset 6 months**."],
        ["Belching disorders (B3)", "Bothersome belching **more than 3 days a week**; **supragastric** (behavioural) or **gastric** (TLESR venting)."],
        ["CAPS (D1)", "**Continuous pain**, little relation to eating or defecation, **limits function**, not feigned."],
        ["Narcotic bowel (D2)", "Pain **worsens with escalating opioids**; soar and crash; progression."],
        ["Burden", "DGBI **40%** internet, **21%** household (Rome GES 2021); bloating as symptom 15-30%."],
        ["Mechanism", "Visceral hypersensitivity, gas retention, FODMAP fermentation, SIBO, constipation; **abdominophrenic dyssynergia** for distension."],
        ["Red flags", "Onset over 45-50, weight loss, bleeding, anaemia, nocturnal symptoms, **new bloating in woman over 50**, ascites, family history."],
        ["Minimal tests", "CBC, CRP, **tTG-IgA with total IgA**, TSH, glucose; CA-125 and pelvic USG where indicated."],
        ["Breath test", "Glucose 75 g: **H2 rise 20 ppm in 90 min**; **methane 10 ppm** = IMO."],
        ["Treatment - bloating", "Explain, diet, low-FODMAP, **treat constipation**, biofeedback, **amitriptyline 10-50 mg**, rifaximin if SIBO."],
        ["Treatment - belching", "Supragastric: **diaphragmatic breathing, CBT**; gastric: reduce air swallowing, **baclofen 5-10 mg tds**."],
        ["Treatment - CAPS", "**TCA or SNRI**, augment quetiapine or pregabalin, **BGBT**, one clinician, **opioid taper**."],
        ["Exam traps", "Carnett sign for wall pain; never escalate opioids; no routine probiotics or repeat imaging."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Chronic bloating or distension - work-up",
        caption: "AGA Clinical Practice Update 2023 approach.",
        steps: [
          { label: "Alarm features present?", detail: "Age over 45-50, weight loss, bleeding, anaemia, woman over 50 with new bloating", tone: "decision" },
          { label: "Yes: organic work-up", detail: "Endoscopy or colonoscopy, CA-125 and pelvic USG, CT as indicated", tone: "warn" },
          { label: "No: Rome IV positive diagnosis", detail: "Separate IBS, FD, functional constipation from functional bloating" },
          { label: "Minimal tests", detail: "CBC, CRP, tTG-IgA with total IgA, TSH, glucose" },
          { label: "Constipation or dyssynergia?", detail: "DRE push test; anorectal manometry if suspected", tone: "decision" },
          { label: "Breath test if risk factors for SIBO", detail: "Glucose 75 g: H2 rise 20 ppm in 90 min" },
          { label: "Diet, laxative, neuromodulator, biofeedback", detail: "Low-FODMAP with dietitian; amitriptyline 10-50 mg", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Treatment ladder for CAPS",
        steps: [
          { label: "Positive diagnosis and explanation", detail: "One named clinician, scheduled visits, stop test cycling", tone: "neutral" },
          { label: "TCA or SNRI", detail: "Amitriptyline 10 mg up to 75 mg at night; duloxetine 30-60 mg", tone: "good" },
          { label: "Brain-gut behavioural therapy", detail: "CBT, gut-directed hypnotherapy, mindfulness", tone: "good" },
          { label: "Augment", detail: "Quetiapine 25-100 mg or pregabalin 75-150 mg twice daily", tone: "decision" },
          { label: "Opioid withdrawal if on opioids", detail: "Taper 10-20% every 2-3 days; clonidine; laxatives", tone: "warn" },
          { label: "Multidisciplinary pain clinic", detail: "Refractory cases", tone: "neutral" },
        ],
      },
      {
        kind: "compare",
        heading: "Supragastric belching vs gastric belching vs rumination",
        columns: ["Feature", "Supragastric belching", "Gastric belching", "Rumination"],
        rows: [
          ["What comes up", "Air from oesophagus", "Air from stomach", "Recently eaten food"],
          ["Mechanism", "Learned UES relaxation and air suction", "TLESR venting", "Abdominal wall contraction over 30 mmHg"],
          ["Clue", "Up to 20 a minute, stops on talking", "After meals and fizzy drinks", "Effortless, no retching, re-chewed"],
          ["Test", "Impedance-pH", "Impedance-pH", "HR impedance manometry"],
          ["Treatment", "Diaphragmatic breathing, CBT", "Reduce air swallowing, baclofen", "Diaphragmatic breathing at meals"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**DGBI** is the Rome IV name for functional GI disorders.",
            "**Functional bloating**: bloating or distension at least 1 day a week, predominant, for 3 months.",
            "**Belching disorder**: bothersome belching more than 3 days a week.",
            "**CAPS**: continuous pain, not linked to eating or defecation, limiting daily life.",
            "**Narcotic bowel**: pain worsens as opioid dose rises.",
            "DGBI affect about **40%** of adults worldwide (Rome GES 2021).",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "**Visceral hypersensitivity**: normal gas is felt as painful bloating.",
            "**Abdominophrenic dyssynergia**: diaphragm drops, wall relaxes, belly protrudes without extra gas.",
            "**Supragastric belching** is a learned habit of sucking air into the oesophagus.",
            "**CAPS** is central sensitisation with weak descending pain inhibition.",
            "**Opioids** activate glia and cause hyperalgesia.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Bloating **worse by evening, flat by morning** suggests functional disease.",
            "Ask **Bristol stool type**, straining and digital help for dyssynergia.",
            "Supragastric belching **stops while the patient talks**.",
            "CAPS patients often have **many scans and surgeries** behind them.",
            "**Carnett sign** positive means abdominal wall pain.",
          ],
        },
        {
          title: "Differential diagnosis",
          points: [
            "**IBS** if pain is linked to defecation.",
            "**Coeliac disease**: check tTG-IgA with total IgA.",
            "**SIBO** with PPIs, diabetes, scleroderma or past surgery.",
            "**Ovarian cancer** in a woman over 50 with new bloating.",
            "**Porphyria** and abdominal wall pain mimic CAPS.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Minimal tests**: CBC, CRP, tTG-IgA, TSH, glucose.",
            "**Glucose breath test**: hydrogen rise 20 ppm within 90 minutes is positive.",
            "**Methane 10 ppm** or more means intestinal methanogen overgrowth.",
            "**Impedance manometry** separates belching types and rumination.",
            "**No repeat imaging** in established functional disease.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Explain** the gut-brain loop; it reduces visits and symptoms.",
            "**Low-FODMAP diet** with a dietitian for bloating with IBS overlap.",
            "**Treat constipation** with PEG or prucalopride; biofeedback for dyssynergia.",
            "**Diaphragmatic breathing** for supragastric belching and rumination.",
            "**Baclofen** 5-10 mg thrice daily for gastric belching.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "**Amitriptyline** 10 mg at night, titrate to 25-75 mg.",
            "**Duloxetine** 30-60 mg daily as alternative.",
            "**Augment** CAPS with quetiapine or pregabalin.",
            "**Rifaximin** 550 mg thrice daily for 14 days if SIBO proven.",
            "**CBT and gut-directed hypnotherapy** for refractory symptoms.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**Iatrogenic harm**: needless surgery, CT radiation, opioid dependence.",
            "**ARFID** risk from long restrictive diets.",
            "Red flags: **weight loss, bleeding, anaemia, nocturnal symptoms, onset over 50**.",
            "**Ascites or mass** means organic disease.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Review neuromodulator at **4-6 weeks**; continue 6-12 months after response.",
            "Refer for **alarm features** or refractory symptoms after 3-6 months.",
            "Refer **narcotic bowel** for supervised opioid taper.",
            "Use **Tele-MANAS 14416** for psychological support.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**AGA 2023**: biofeedback, neuromodulators, no routine probiotics for bloating.",
            "**AGA 2022**: brain-gut behavioural therapy for all DGBI.",
            "**European breath test guideline 2022** standardised doses and cut-offs.",
            "**Rome V** due 2026; quote Rome IV for now.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in bloating, belching and CAPS",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Amitriptyline", "10 mg orally at night, up to 75 mg", "6-12 months after response", "Dry mouth, constipation, QT; ECG over 50"],
            ["Duloxetine", "30-60 mg orally daily", "6-12 months", "Nausea, sweating; avoid eGFR under 30"],
            ["Pregabalin", "75-150 mg orally twice daily", "Augmentation", "Sedation, oedema, misuse; renal dosing"],
            ["Baclofen", "5-10 mg orally three times daily", "Weeks; taper off", "Sedation; withdrawal seizures"],
            ["Rifaximin", "550 mg orally three times daily", "14 days", "Minimal absorption; recurrence common"],
            ["Prucalopride", "2 mg orally daily (1 mg over 65)", "Review at 4 weeks", "Headache, diarrhoea"],
          ],
        },
        {
          heading: "Rome IV criteria",
          columns: ["Disorder", "Criterion", "Key point"],
          rows: [
            ["Functional bloating", "At least 1 day a week, predominant", "IBS, FD, FC not met"],
            ["Supragastric belching", "More than 3 days a week", "Stops on talking"],
            ["Gastric belching", "More than 3 days a week", "TLESR venting"],
            ["Rumination", "Effortless food regurgitation", "No retching"],
            ["CAPS", "Continuous pain, limits function", "Little link to gut events"],
            ["Narcotic bowel", "Pain worse with more opioid", "Soar and crash"],
          ],
        },
        {
          heading: "Breath test cut-offs",
          columns: ["Test", "Dose", "Positive"],
          rows: [
            ["Glucose H2 breath test", "75 g", "H2 rise 20 ppm within 90 min"],
            ["Lactulose H2 breath test", "10 g", "H2 rise 20 ppm within 90 min"],
            ["Methane", "Either substrate", "10 ppm or more at any time"],
            ["Jejunal aspirate", "Endoscopy", "10^3 CFU/mL or more"],
          ],
        },
      ],
      remember: [
        "**Bloating is felt, distension is seen.**",
        "**Talk stops supragastric belching.**",
        "**20 in 90** - hydrogen 20 ppm within 90 minutes means SIBO.",
        "**Methane 10** at any time means methanogen overgrowth.",
        "**More opioid, more pain** - narcotic bowel.",
        "**Carnett positive** - look at the wall, not the gut.",
        "Neuromodulators: **start low, go slow, explain**.",
      ],
    },
  },
};

export default revision;
