import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "respiratory-drtb": {
    checked: "2026-10",
    updated: [
      "WHO 2021 definitions of pre-XDR and XDR-TB (fluoroquinolone, bedaquiline, linezolid based)",
      "WHO 2022 and WHO 2025 Module 4: 6-month BPaLM/BPaL; 9-month endTB regimens added in 2025",
      "MoHFW 2024: BPaLM rolled out under NTEP; Ni-kshay Poshan Yojana raised to Rs 1000/month",
      "WHO 2024: levofloxacin 6 months as TPT for MDR/RR-TB contacts; targeted NGS and Xpert MTB/XDR endorsed",
    ],
    master: {
      heading: "Master revision table - Drug-resistant TB (WHO 2025, NTEP)",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definitions", "**RR-TB** (rifampicin resistance), **MDR** (R + H), **pre-XDR** (MDR + any FQ), **XDR** (pre-XDR + bedaquiline and/or linezolid) - WHO 2021; **Hr-TB** separate."],
        ["Burden", "India about a quarter of global MDR/RR-TB; **NDRS 2014-16: 2.84% new, 11.6% previously treated**; FQ resistance about 22% of MDR."],
        ["Risk factors", "Previous treatment, failure, loss to follow-up, contact of MDR, HIV, diabetes, irregular private-sector treatment, single drug added to failing regimen."],
        ["Mechanism", "**rpoB RRDR** (rifampicin, over 95%), **katG** (high-level H), **inhA** (low-level H + ethionamide), **gyrA/gyrB** (FQ), **Rv0678** (bedaquiline + clofazimine)."],
        ["Diagnosis", "**UDST**: CBNAAT/Truenat for all; if RR then FL-LPA, SL-LPA or **Xpert MTB/XDR**, plus MGIT culture DST; tNGS at reference labs."],
        ["Pre-treatment evaluation", "CBC, LFT, RFT, K/Mg/Ca, HbA1c, HIV, TSH, pregnancy test, **ECG-QTcF**, CXR, vision (Snellen, Ishihara), neuropathy screen, audiometry if amikacin."],
        ["Drug groups", "**A: Lfx/Mfx, Bdq, Lzd**; B: Cfz, Cs/Trd; C: E, Dlm, Z, carbapenem, Am, Eto/Pto, PAS; kanamycin and capreomycin dropped."],
        ["BPaLM", "**Bdq 400 mg OD x 2 wk then 200 mg TIW x 22 wk + Pa 200 mg + Lzd 600 mg + Mfx 400 mg OD, 26 weeks**; age 14+; BPaL if FQ-resistant; extend to 39 weeks if culture positive months 4-6."],
        ["Other regimens", "**Shorter oral Bdq**: 4-6 Bdq Lfx Cfz Z E Hh Eto / 5 Lfx Cfz Z E (9-11 months); **longer oral** 18-20 months; **Hr-TB** 6 months REZ-Lfx; endTB 9-month options (WHO 2025)."],
        ["Monitoring", "Monthly smear and culture; **QTcF over 500 ms stop**; CBC for linezolid (Hb under 8, platelets under 75,000 hold); vision; LFT monthly; TSH 3-monthly on Eto/PAS; aDSM in Ni-kshay."],
        ["Special groups", "Pregnancy: no BPaLM, no aminoglycoside or ethionamide; children: shorter regimen, Bdq and Dlm any age; HIV: dolutegravir, not efavirenz; renal: E, Z, Lfx, Cs thrice weekly."],
        ["Programme", "N-DR-TBC and D-DR-TBC; **Ni-kshay Poshan Yojana Rs 1000/month**; Ni-kshay Mitra; 99DOTS/MERM; post-treatment follow-up 6-monthly for 2 years."],
        ["Contacts", "Screen household contacts; **levofloxacin 6 months TPT** for MDR/RR-TB contacts (WHO 2024)."],
        ["Exam traps", "Do not define XDR by injectables; inhA + katG excludes shorter regimen; cycloserine needs pyridoxine 50 mg per 250 mg."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "NTEP diagnostic algorithm for drug resistance",
        caption: "Universal DST: every diagnosed TB patient gets a rapid rifampicin test.",
        steps: [
          { label: "Presumptive TB: sputum for CBNAAT or Truenat", detail: "Cough over 2 weeks, fever, weight loss, contacts, previously treated" },
          { label: "MTB detected - rifampicin result?", tone: "decision", detail: "RR not detected: FL-LPA for isoniazid (Hr-TB)" },
          { label: "RR detected: second sample", detail: "FL-LPA, SL-LPA or Xpert MTB/XDR, plus MGIT liquid culture DST", tone: "warn" },
          { label: "FQ sensitive?", tone: "decision", detail: "Sensitive: BPaLM (age 14+) or shorter oral; resistant: BPaL or longer" },
          { label: "Pre-treatment evaluation at DR-TB centre", detail: "ECG-QTcF, CBC, LFT, RFT, TSH, HIV, HbA1c, vision, pregnancy test" },
          { label: "Start regimen; register in Ni-kshay", detail: "Monthly culture, aDSM, Ni-kshay Poshan Rs 1000/month", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Regimen ladder for MDR/RR-TB",
        caption: "Shortest effective regimen first.",
        steps: [
          { label: "BPaLM 6 months", detail: "Bdq, Pa 200 mg, Lzd 600 mg, Mfx 400 mg; FQ-sensitive, age 14+", tone: "good" },
          { label: "BPaL 6 months", detail: "Pre-XDR (FQ resistant); same exclusions" },
          { label: "Shorter oral bedaquiline regimen 9-11 months", detail: "Children, pregnancy-ineligible for BPaLM; FQ-sensitive; no katG + inhA" },
          { label: "Longer oral regimen 18-20 months", detail: "XDR, failure, extensive EPTB; all Group A + one or two Group B", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "Pre-XDR versus XDR (WHO 2021)",
        columns: ["Feature", "Pre-XDR-TB", "XDR-TB"],
        rows: [
          ["Base", "MDR/RR-TB", "MDR/RR-TB"],
          ["Fluoroquinolone resistance", "Yes", "Yes"],
          ["Bedaquiline or linezolid resistance", "No", "Yes (one or both)"],
          ["Usual regimen", "BPaL 6 months or longer regimen", "Individualised longer regimen"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**RR-TB** is rifampicin resistance; it is treated exactly like MDR-TB.",
            "**MDR-TB** is resistance to at least rifampicin and isoniazid.",
            "**Pre-XDR** is MDR plus resistance to any fluoroquinolone.",
            "**XDR** is pre-XDR plus resistance to bedaquiline or linezolid (WHO 2021).",
            "India carries about **a quarter** of the world's MDR/RR-TB.",
            "NDRS 2014-16: MDR in **2.84% of new** and **11.6% of previously treated** patients.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "Resistance comes from **chromosomal mutations** selected by monotherapy or irregular treatment.",
            "**Previous treatment**, failure and loss to follow-up are the strongest risks.",
            "Contacts of MDR-TB patients often have **transmitted (primary) resistance**.",
            "HIV, diabetes and malabsorption lower drug levels.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "**rpoB** mutations cause over 95% of rifampicin resistance.",
            "**katG** gives high-level isoniazid resistance; **inhA** gives low-level plus ethionamide cross-resistance.",
            "**gyrA/gyrB** mutations cause fluoroquinolone resistance.",
            "**Rv0678** mutations cause bedaquiline and clofazimine cross-resistance.",
            "Linezolid blocks mitochondrial protein synthesis, causing **anaemia and neuropathy**.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "DR-TB looks exactly like ordinary TB; resistance is a **laboratory diagnosis**.",
            "Suspect it when there is **no response after 2 months** of first-line ATT.",
            "Record all past drugs, including private-sector **fluoroquinolones**.",
            "Record **weight, vision, neuropathy and mood** before starting treatment.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Universal DST**: CBNAAT or Truenat for every diagnosed TB patient.",
            "If rifampicin resistant, do **FL-LPA, SL-LPA or Xpert MTB/XDR**, and liquid culture.",
            "Baseline **ECG-QTcF**, CBC, LFT, RFT, electrolytes, TSH, HIV, HbA1c and pregnancy test.",
            "Monthly smear and culture; **conversion** is two negative cultures 30 days apart.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**BPaLM** for 26 weeks is preferred for FQ-sensitive MDR/RR-TB aged 14 or over.",
            "Use **BPaL** (no moxifloxacin) when fluoroquinolone resistance is present.",
            "BPaLM is not used in **pregnancy, children under 14 or CNS/bone TB**.",
            "**Hr-TB** gets 6 months of rifampicin, ethambutol, pyrazinamide and levofloxacin.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "**Shorter oral bedaquiline regimen** lasts 9-11 months and suits children.",
            "Both **katG and inhA** mutations exclude the shorter regimen.",
            "**Longer oral regimen** of 18-20 months is for XDR-TB or failure.",
            "Give **pyridoxine 50 mg per 250 mg** cycloserine.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**QTcF over 500 ms**: stop QT drugs and correct potassium and magnesium.",
            "**Visual loss** on linezolid: stop it permanently.",
            "Haemoglobin under 8 g/dL or platelets under 75,000: hold linezolid.",
            "Cycloserine can cause **depression, psychosis and seizures**.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Start treatment at a **Nodal or District DR-TB centre**.",
            "**Ni-kshay Poshan Yojana** pays Rs 1000 per month during treatment.",
            "Follow up every 6 months for **2 years** after treatment.",
            "Give contacts **levofloxacin 6 months** as preventive treatment.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**WHO 2022**: 6-month BPaLM and BPaL recommended.",
            "**India 2024**: BPaLM rolled out under NTEP.",
            "**WHO 2025**: 9-month endTB regimens added, including for pregnancy and children.",
            "**WHO 2024**: Xpert MTB/XDR and targeted sequencing endorsed.",
          ],
        },
      ],
      tables: [
        {
          heading: "DR-TB drugs",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Bedaquiline", "400 mg oral OD x 2 weeks, then 200 mg thrice weekly", "24 weeks (BPaLM)", "QT prolongation, hepatitis; avoid efavirenz"],
            ["Pretomanid", "200 mg oral OD", "26 weeks", "Hepatitis; not in pregnancy or under 14"],
            ["Linezolid", "600 mg oral OD (300 mg if toxic)", "26 weeks", "Anaemia, neuropathy, optic neuritis, lactic acidosis"],
            ["Moxifloxacin", "400 mg oral OD", "26 weeks", "QT prolongation, tendinopathy, dysglycaemia"],
            ["Clofazimine", "100 mg oral OD", "Whole regimen", "Skin discolouration, QT prolongation"],
            ["Cycloserine", "500-750 mg/day oral with pyridoxine", "Longer regimen", "Psychosis, depression, seizures"],
          ],
        },
        {
          heading: "Resistance definitions",
          columns: ["Type", "Resistant to", "Regimen"],
          rows: [
            ["Hr-TB", "Isoniazid only (rifampicin sensitive)", "6 months REZ + levofloxacin"],
            ["MDR/RR-TB", "Rifampicin with or without isoniazid", "BPaLM or shorter oral"],
            ["Pre-XDR", "MDR + fluoroquinolone", "BPaL or longer"],
            ["XDR", "Pre-XDR + bedaquiline or linezolid", "Individualised longer"],
          ],
        },
        {
          heading: "Rapid resistance tests",
          columns: ["Test", "Detects", "Where"],
          rows: [
            ["CBNAAT / Truenat", "MTB + rifampicin", "District and peripheral labs"],
            ["FL-LPA", "Rifampicin, isoniazid (katG, inhA)", "IRL / C&DST labs"],
            ["SL-LPA / Xpert MTB/XDR", "Fluoroquinolone, injectable, ethionamide", "After RR detected"],
            ["MGIT DST", "Bedaquiline, linezolid and others", "Reference labs"],
          ],
        },
      ],
      remember: [
        "Group A is **LBL**: levofloxacin/moxifloxacin, bedaquiline, linezolid.",
        "Pre-XDR = MDR + FQ; XDR = pre-XDR + **B or L**.",
        "BPaLM: **4 drugs, 6 months, all oral, 14 years and over**.",
        "**inhA** kills ethionamide; **katG + inhA** kills the shorter regimen.",
        "Linezolid toxicity triad: **blood, nerves, eyes**.",
        "QTcF **over 500 ms** stops bedaquiline.",
        "Bedaquiline and efavirenz do not mix - use **dolutegravir**.",
      ],
    },
  },
};

export default revision;
