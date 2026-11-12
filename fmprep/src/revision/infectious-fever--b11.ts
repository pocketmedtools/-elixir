import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "infectious-fever-drug-resistant-tb": {
    checked: "2026-10",
    updated: [
      "WHO 2022 Module 4: 6-month BPaLM/BPaL for MDR/RR-TB and pre-XDR, age 14 or more.",
      "NTEP 2024: MoHFW approved BPaLM in September 2024, phased roll-out from 2025.",
      "WHO 2025 Module 4: new 6-month regimens (BDLLfxC, endTB regimens); BDLLfxC usable in children and pregnancy.",
      "WHO 2024 Module 3: targeted NGS endorsed for multi-drug resistance detection.",
      "WHO 2024 Module 1: 6 months levofloxacin TPT for contacts of MDR/RR-TB.",
      "MoHFW November 2024: Ni-kshay Poshan Yojana raised to Rs 1000 per month.",
    ],
    master: {
      heading: "Master revision table - Drug-resistant TB",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definitions (WHO 2021)", "**RR-TB**: rifampicin resistant; **MDR**: R + H; **pre-XDR**: MDR/RR + any FQ; **XDR**: MDR/RR + FQ + **bedaquiline or linezolid**; Hr-TB: H resistant, R susceptible."],
        ["Epidemiology", "About 4 lakh MDR/RR-TB globally (2023); India about one quarter; NDRS 2014-16: MDR 2.8% new, 11.6% previously treated; FQ resistance about 22% of MDR."],
        ["Mechanism", "Chromosomal mutations: **rpoB RRDR** (rifampicin), **katG/inhA** (isoniazid), **gyrA/B** (FQ), **Rv0678** (bedaquiline + clofazimine cross-resistance)."],
        ["Drug groups", "**A**: Lfx/Mfx, Bdq, Lzd; **B**: Cfz, Cs/Trd; **C**: E, Dlm, Z, carbapenem, Am, Eto/Pto, PAS; kanamycin and capreomycin dropped."],
        ["Diagnosis", "**Universal DST** by CBNAAT/Truenat; RR detected - FL-LPA + **SL-LPA**; liquid culture DST for Bdq, Lzd, Cfz; tNGS at reference labs."],
        ["Baseline work-up", "CBC, LFT, RFT, K, Mg, TSH, glucose, HIV, pregnancy test, **ECG QTcF**, visual acuity and colour vision, neuropathy screen."],
        ["BPaLM", "**Bdq 400 mg OD x 2 wk then 200 mg thrice weekly; Pa 200 mg OD; Lzd 600 mg OD; Mfx 400 mg OD - 26 weeks**; age 14 or more."],
        ["Pre-XDR", "**BPaL** (drop moxifloxacin) for 26 weeks."],
        ["Not BPaLM", "Pregnancy, breastfeeding, under 14, CNS/osteoarticular/disseminated TB, over 1 month prior Bdq/Pa/Lzd/Dlm - shorter (9-11 mo) or longer (18-20 mo) oral regimen."],
        ["Hr-TB", "6 months **Lfx + R + E + Z**."],
        ["Monitoring", "Monthly smear and culture; ECG baseline, week 2, monthly - **QTcF over 500 ms stop QT drugs**; monthly CBC, vision, LFT; follow-up 6-monthly for 2 years."],
        ["Special groups", "HIV: dolutegravir, not efavirenz; pregnancy: avoid ethionamide and aminoglycosides; CKD: adjust Lfx, E, Z, Cs."],
        ["Programme", "**Ni-kshay** notification; **Ni-kshay Poshan Rs 1000/month**; Ni-kshay Mitra food baskets; VOT and treatment supporter; 6Lfx TPT for contacts."],
        ["Exam traps", "Quoting injectables in XDR; adding one drug to failing regimen; forgetting ECG, vision and pregnancy test."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Diagnostic pathway for DR-TB under NTEP",
        steps: [
          { label: "Presumptive TB", detail: "Cough over 2 weeks, fever, weight loss, CXR abnormal" },
          { label: "CBNAAT or Truenat (universal DST)", detail: "MTB and rifampicin resistance in about 2 hours", tone: "decision" },
          { label: "Rifampicin resistance detected", detail: "Start BPaLM pre-treatment evaluation; do not wait for LPA", tone: "warn" },
          { label: "Second sample: FL-LPA and SL-LPA", detail: "katG/inhA for H; gyrA/B for FQ; rrs/eis for amikacin" },
          { label: "FQ susceptible - BPaLM", detail: "26 weeks", tone: "good" },
          { label: "FQ resistant (pre-XDR) - BPaL", detail: "Send liquid culture DST for Bdq, Lzd, Cfz", tone: "decision" },
          { label: "Resistant to Bdq or Lzd (XDR)", detail: "Individualised longer regimen at expert DR-TB centre", tone: "warn" },
        ],
      },
      {
        kind: "ladder",
        heading: "Choosing the DR-TB regimen",
        steps: [
          { label: "Hr-TB: 6 months Lfx + R + E + Z", detail: "Rifampicin susceptible, isoniazid resistant" },
          { label: "MDR/RR-TB: BPaLM 26 weeks", detail: "Age 14 or more, not pregnant, no severe EPTB", tone: "good" },
          { label: "Pre-XDR: BPaL 26 weeks", detail: "Moxifloxacin dropped" },
          { label: "Not BPaLM eligible, FQ susceptible", detail: "Shorter oral Bdq regimen 9-11 months" },
          { label: "XDR, failure, extensive EPTB, intolerance", detail: "Longer oral individualised regimen 18-20 months", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "Bedaquiline versus linezolid toxicity",
        columns: ["Feature", "Bedaquiline", "Linezolid"],
        rows: [
          ["Target", "Mycobacterial ATP synthase", "23S rRNA of 50S ribosome"],
          ["Main toxicity", "QT prolongation", "Myelosuppression, neuropathy, optic neuritis"],
          ["Monitoring", "ECG baseline, week 2, monthly", "CBC, vision, colour vision monthly"],
          ["Action", "QTcF over 500 ms - stop", "Reduce to 300 mg or stop; optic neuritis - stop for good"],
          ["Interaction", "Efavirenz lowers level", "SSRIs - serotonin syndrome"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**RR-TB** is rifampicin resistance; it is treated exactly like MDR-TB.",
            "**MDR-TB** is resistance to rifampicin and isoniazid.",
            "**Pre-XDR** adds resistance to any fluoroquinolone.",
            "**XDR** adds fluoroquinolone plus bedaquiline or linezolid resistance (WHO 2021).",
            "India carries about **one quarter** of the world's MDR/RR-TB.",
            "NDRS found MDR in **2.8% of new** and **11.6% of previously treated** patients.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Resistance comes from **chromosomal mutations** selected by poor treatment.",
            "Over 95% of rifampicin resistance lies in the **rpoB RRDR**, read by Xpert.",
            "**katG** gives high-level and **inhA** low-level isoniazid resistance with ethionamide cross-resistance.",
            "**Rv0678** efflux gives bedaquiline and clofazimine cross-resistance.",
            "Linezolid blocks **human mitochondrial** ribosomes, causing marrow and nerve toxicity.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Symptoms are the **same as drug-sensitive TB**; resistance is a lab diagnosis.",
            "Suspect it with **persistent positivity at month 2-3** or worsening on treatment.",
            "Ask previous treatment, private fluoroquinolone courses and **DR-TB contact**.",
            "Check vision, neuropathy, pulse, jaundice and pregnancy before starting.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**CBNAAT or Truenat** for every presumptive TB patient: universal DST.",
            "Rifampicin resistant: send **first- and second-line LPA**.",
            "The fluoroquinolone result decides **BPaLM or BPaL**.",
            "Liquid culture DST for bedaquiline, linezolid and clofazimine in pre-XDR.",
            "Baseline **ECG QTcF**, CBC, LFT, K, Mg, TSH, HIV, glucose, pregnancy test.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**BPaLM**: bedaquiline, pretomanid, linezolid, moxifloxacin for **26 weeks**.",
            "Bedaquiline **400 mg daily for 2 weeks**, then 200 mg three times weekly.",
            "Pretomanid 200 mg, linezolid 600 mg, moxifloxacin 400 mg, all once daily.",
            "Pre-XDR gets **BPaL**, dropping moxifloxacin.",
            "Hr-TB gets **levofloxacin, rifampicin, ethambutol, pyrazinamide** for 6 months.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Not BPaLM eligible: **shorter oral bedaquiline regimen**, 9-11 months.",
            "XDR, failure or severe EPTB: **longer individualised regimen**, 18-20 months.",
            "Never **add one drug** to a failing regimen.",
            "Admit for haemoptysis, respiratory failure, jaundice, QTcF over 500 ms or psychosis.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: no BPaLM; avoid ethionamide and aminoglycosides.",
            "**Children under 14**: shorter or longer oral regimens; bedaquiline allowed at all ages.",
            "**HIV**: start ART in 2-8 weeks; use dolutegravir, not efavirenz.",
            "**CKD**: adjust levofloxacin, ethambutol, pyrazinamide and cycloserine.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**QTcF over 500 ms**: stop bedaquiline, moxifloxacin, clofazimine; correct K and Mg.",
            "Linezolid **optic neuritis** means permanent stop.",
            "Cycloserine causes **psychosis and seizures**.",
            "Clofazimine causes **skin pigmentation**.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Sputum **smear and culture monthly**; culture conversion needs two negatives 30 days apart.",
            "ECG at **baseline, week 2, then monthly**.",
            "Monthly CBC, vision, colour vision and LFT.",
            "Follow up **6-monthly for 2 years** after treatment.",
            "Record everything in **Ni-kshay**; Ni-kshay Poshan pays **Rs 1000 a month**.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**WHO 2022**: BPaLM replaced most 18-20 month regimens.",
            "**India 2024**: BPaLM approved, rolling out nationally from 2025.",
            "**WHO 2025**: BDLLfxC 6-month regimen usable in children and pregnancy.",
            "**WHO 2024**: levofloxacin TPT for MDR contacts; targeted NGS endorsed.",
          ],
        },
      ],
      tables: [
        {
          heading: "DR-TB drugs at a glance",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Bedaquiline", "400 mg oral OD x 2 weeks, then 200 mg thrice weekly", "24 weeks", "QT prolongation, hepatitis; avoid efavirenz"],
            ["Pretomanid", "200 mg oral OD", "26 weeks", "Hepatotoxicity; not in pregnancy"],
            ["Linezolid", "600 mg oral OD (300 mg if toxic)", "26 weeks", "Anaemia, neuropathy, optic neuritis"],
            ["Moxifloxacin", "400 mg oral OD", "26 weeks (not in pre-XDR)", "QT, dysglycaemia, tendinopathy"],
            ["Levofloxacin", "750-1000 mg oral OD", "Shorter/Hr-TB regimen; 6 months TPT", "QT, tendinopathy; adjust in CKD"],
            ["Clofazimine", "100 mg oral OD", "Shorter or longer regimen", "Pigmentation, QT"],
          ],
        },
        {
          heading: "Types of drug-resistant TB",
          columns: ["Type", "Resistance", "Regimen"],
          rows: [
            ["Hr-TB", "Isoniazid only", "6 Lfx-R-E-Z"],
            ["RR/MDR-TB", "Rifampicin with or without isoniazid", "BPaLM 26 weeks"],
            ["Pre-XDR", "Plus fluoroquinolone", "BPaL 26 weeks"],
            ["XDR", "Plus FQ and bedaquiline or linezolid", "Individualised longer regimen"],
          ],
        },
        {
          heading: "Which test tells what",
          columns: ["Test", "Shows", "Time"],
          rows: [
            ["CBNAAT/Truenat", "MTB and rifampicin resistance", "2 hours"],
            ["First-line LPA", "Isoniazid (katG, inhA)", "2-3 days"],
            ["Second-line LPA", "Fluoroquinolone, amikacin", "2-3 days"],
            ["Liquid culture DST", "Bedaquiline, linezolid, clofazimine", "4-6 weeks"],
          ],
        },
      ],
      remember: [
        "**BPaLM** = Bedaquiline, Pretomanid, Linezolid, Moxifloxacin; 26 weeks; 14 years and above.",
        "Pre-XDR: **drop the M**.",
        "XDR 2021 = MDR + FQ + **B or L**; injectables are gone from the definition.",
        "QT drugs: **B, M, C, D** - bedaquiline, moxifloxacin, clofazimine, delamanid.",
        "Xpert reads the **81-bp rpoB RRDR**.",
        "inhA = low-level isoniazid resistance plus **ethionamide** cross-resistance.",
        "Ni-kshay Poshan = **Rs 1000 a month** since November 2024.",
      ],
    },
  },
};

export default revision;
