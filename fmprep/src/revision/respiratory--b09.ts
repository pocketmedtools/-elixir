import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "respiratory-hypoventilation-sleep": {
    checked: "2026-10",
    updated: [
      "ICSD-3-TR (2023) classification of sleep-related breathing disorders",
      "AASM Scoring Manual v3 (2023): Cheyne-Stokes cycle 40 s or more; sleep hypoventilation rule",
      "AASM 2025 guideline on treatment of central sleep apnoea in adults",
      "ADVENT-HF (2024): ASV neutral in HFrEF; SERVE-HF caution kept",
      "Tirzepatide approved for OSA with obesity (US FDA 2024, SURMOUNT-OSA)",
      "European Insomnia Guideline update (ESRS 2023): CBT-I first line",
    ],
    master: {
      heading: "OHS and central sleep apnoea on one page",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "OHS: BMI 30 or more + awake PaCO2 45 mmHg or more + other causes excluded; CSA: 5/h or more central events, over 50% of events"],
        ["Epidemiology", "8-20% of obese sleep-clinic patients; 90% have OSA; CSB in 25-40% of HFrEF; NFHS-5 obesity rising"],
        ["Pathophysiology OHS", "Low chest-wall compliance, blunted drive, leptin resistance, overnight CO2 rise with bicarbonate retention"],
        ["Pathophysiology CSA", "High loop gain, PaCO2 near apnoeic threshold, long circulation time (45-90 s cycles)"],
        ["Classification", "ICSD-3-TR: OSA, CSA syndromes, sleep hypoventilation disorders, sleep hypoxaemia"],
        ["Clinical", "Snoring, sleepiness, morning headache, oedema; CSA: PND, insomnia, waxing-waning breathing"],
        ["Screen", "Serum bicarbonate under 27 mmol/L rules out OHS"],
        ["Confirm", "Awake ABG PaCO2 45 or more; polysomnography with CO2; echo, TSH, spirometry, CBC"],
        ["Stable OHS", "CPAP first if AHI 30 or more; BPAP-ST if pure hypoventilation or CPAP fails; weight loss 25-30%"],
        ["Acute", "Controlled O2 88-92%, NIV with EPAP 8 or more, discharge on NIV, titrate within 2-3 months"],
        ["CSA treatment", "Optimise HF; CPAP; no ASV if LVEF 45% or less (SERVE-HF); phrenic stimulation, O2, acetazolamide"],
        ["Complications", "Pulmonary hypertension (about 50%), cor pulmonale, polycythaemia, 23% 18-month mortality untreated"],
        ["Follow-up", "4-8 weeks: device download and ABG; then 6-12 monthly; driving advice"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Diagnosing OHS in an obese patient",
        steps: [
          { label: "Obese (BMI 30+) with OSA symptoms or low awake SpO2", tone: "neutral" },
          { label: "Serum bicarbonate", detail: "Under 27 mmol/L: OHS unlikely, treat OSA", tone: "decision" },
          { label: "ABG if HCO3- 27+ or high suspicion", detail: "PaCO2 45 mmHg or more awake", tone: "decision" },
          { label: "Exclude COPD, neuromuscular, chest wall, thyroid, drugs", detail: "Spirometry, TSH, CXR, supine VC", tone: "warn" },
          { label: "Polysomnography with CO2", detail: "AHI and obstructive vs central split", tone: "neutral" },
          { label: "OHS confirmed: start PAP", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Treatment ladder in stable OHS",
        steps: [
          { label: "Weight loss, avoid sedatives and alcohol", detail: "Target 25-30% sustained loss", tone: "neutral" },
          { label: "CPAP if severe OSA (AHI 30+)", detail: "Use 4 h or more nightly; ABG at 4-8 weeks", tone: "good" },
          { label: "BPAP-ST or AVAPS", detail: "Pure hypoventilation or PaCO2 still 45+ on CPAP", tone: "decision" },
          { label: "Add oxygen to PAP", detail: "Only if SpO2 under 88-90% on optimal pressure", tone: "warn" },
          { label: "Bariatric surgery or GLP-1-based drugs", detail: "Tirzepatide 10-15 mg weekly", tone: "neutral" },
        ],
      },
      {
        kind: "compare",
        heading: "OSA vs OHS vs CSA with Cheyne-Stokes",
        columns: ["Feature", "OSA", "OHS", "CSA-CSB"],
        rows: [
          ["Awake PaCO2", "Normal", "45 mmHg or more", "Low-normal"],
          ["Bicarbonate", "Under 27", "27 or more", "Normal or low"],
          ["Effort in apnoea", "Present", "Mixed", "Absent"],
          ["Typical patient", "Obese snorer", "Morbid obesity, oedema", "HFrEF, AF, stroke"],
          ["Treatment", "CPAP", "CPAP or BPAP-ST", "Optimise HF, CPAP; no ASV if EF 45% or less"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**OHS** is BMI 30 or more plus awake PaCO2 45 mmHg or more, other causes excluded.",
            "About **90%** of OHS patients also have OSA, mostly severe.",
            "**Central sleep apnoea** means apnoea without breathing effort; 5 or more per hour and over half of events.",
            "**Cheyne-Stokes breathing** affects 25-40% of patients with HFrEF.",
            "OHS is often missed and mislabelled as **COPD**.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Fat lowers **chest-wall compliance** and raises the work of breathing.",
            "CO2 builds up over the night and the kidney **retains bicarbonate**.",
            "Retained bicarbonate **blunts the CO2 drive**, so daytime hypercapnia sets in.",
            "In heart failure, **J-receptor hyperventilation** keeps PaCO2 near the apnoeic threshold.",
            "Long **circulation time** gives Cheyne-Stokes cycles of 45-90 seconds.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "OHS: snoring, **sleepiness**, morning headache, breathlessness and leg oedema.",
            "Low awake SpO2 and signs of **cor pulmonale** in an obese patient.",
            "CSA: **PND, insomnia** and waxing-waning breathing noticed by the partner.",
            "Ask about **opioids, benzodiazepines and alcohol**, and about driving.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Bicarbonate under 27 mmol/L** rules out OHS in moderate suspicion.",
            "**Awake ABG** confirms hypercapnia; oximetry alone cannot diagnose OHS.",
            "**Polysomnography with CO2** monitoring; home tests are not enough.",
            "Exclude mimics with **spirometry, TSH, CBC, CXR**; echo for pulmonary pressure and LVEF.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**CPAP first** in stable OHS with severe OSA (Pickwick trial).",
            "**BPAP-ST** for pure hypoventilation or persistent hypercapnia on CPAP.",
            "Aim for **25-30% weight loss**; tirzepatide or bariatric surgery help.",
            "Use PAP **4 hours or more** on 70% of nights.",
            "Never use **oxygen alone**; no medroxyprogesterone or acetazolamide in OHS.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Controlled oxygen to **SpO2 88-92%** via Venturi mask.",
            "**NIV** for acidosis, with EPAP 8 cmH2O or more to splint the airway.",
            "Nurse **semi-upright**; expect a difficult airway if intubation is needed.",
            "**Discharge on NIV** and titrate in a sleep lab within 2-3 months.",
          ],
        },
        {
          title: "Central sleep apnoea care",
          points: [
            "First **optimise heart failure** therapy and consider CRT.",
            "**CPAP** is the first device; CANPAP showed benefit only if AHI fell under 15.",
            "**No ASV** in HFrEF with LVEF 45% or less (SERVE-HF mortality).",
            "Phrenic nerve stimulation, low-flow oxygen and **acetazolamide** are specialist options.",
            "Altitude periodic breathing: **acetazolamide 125 mg twice daily** and slow ascent.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Review at **4-8 weeks** with device download and repeat ABG or bicarbonate.",
            "Then every **6-12 months**: weight, BP, sugar, haematocrit, adherence.",
            "Advise **no driving** while sleepy; document advice for Form 1-A drivers.",
            "Persistent sleepiness on good PAP: consider **narcolepsy** and do MSLT.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**AASM 2025** CSA treatment guideline keeps ASV off-limits when LVEF is 45% or less.",
            "**ADVENT-HF 2024** found ASV neutral, not harmful, with a different device.",
            "**Tirzepatide** became the first drug approved for OSA in obesity (FDA 2024).",
            "**ICSD-3-TR 2023** and AASM Scoring Manual v3 updated definitions.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs and devices",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["CPAP", "5-20 cmH2O via mask", "Nightly, lifelong", "Leak, dry nose; fails in pure hypoventilation"],
            ["BPAP-ST", "EPAP 8-10, PS 8-10, backup 12-16/min", "Nightly", "Asynchrony, leak"],
            ["Acetazolamide", "250 mg at night (CSA); 125 mg twice daily (altitude)", "Short courses", "Paraesthesia, acidosis; avoid in hypercapnic OHS"],
            ["Tirzepatide", "2.5 mg SC weekly up to 10-15 mg", "Long term", "Nausea, pancreatitis; not with MEN2"],
            ["Modafinil", "100-200 mg each morning", "Long term", "Insomnia, headache, reduces OCP effect"],
          ],
        },
        {
          heading: "Cut-offs to remember",
          columns: ["Item", "Cut-off"],
          rows: [
            ["OHS PaCO2", "45 mmHg or more awake"],
            ["Bicarbonate screen", "Under 27 mmol/L rules out"],
            ["Sleep hypoventilation", "Over 55 mmHg for 10 min"],
            ["CSA", "5/h or more, over 50% central"],
            ["Cheyne-Stokes", "Cycle 40 s or more, 3+ cycles"],
            ["ASV forbidden", "LVEF 45% or less with predominant CSA"],
          ],
        },
        {
          heading: "Differential of daytime hypercapnia",
          columns: ["Cause", "Clue", "Test"],
          rows: [
            ["OHS", "Morbid obesity, OSA", "ABG, polysomnography"],
            ["COPD", "Smoking, biomass", "FEV1/FVC under 0.70"],
            ["Neuromuscular", "Orthopnoea, weakness", "Supine VC fall over 20-25%"],
            ["Kyphoscoliosis or post-TB", "Deformity, old TB", "CXR, restriction"],
            ["Hypothyroidism", "Myxoedema", "TSH"],
          ],
        },
      ],
      remember: [
        "OHS = **Obesity + Hypercapnia awake + Sleep breathing disorder**, others excluded.",
        "**27 and 45**: bicarbonate screen and PaCO2 cut-off.",
        "**CPAP first** with severe OSA; BPAP for pure hypoventilation.",
        "**Oxygen alone harms** OHS; target 88-92%.",
        "**SERVE-HF**: no ASV when EF is 45% or less.",
        "Cheyne-Stokes cycle is long because **circulation is slow**.",
      ],
    },
  },
};

export default revision;
