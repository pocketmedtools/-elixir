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
  "infectious-fever-tb-preventive-therapy": {
    checked: "2026-10",
    updated: [
      "NTEP TPT 2021: TPT extended to all household contacts of pulmonary TB; 3HP and 6Lfx introduced.",
      "WHO 2022: TB antigen-based skin tests (Cy-TB) endorsed as alternatives to TST and IGRA.",
      "WHO 2024 Module 1: 6 months levofloxacin for contacts of MDR/RR-TB; 1HP and 3HP across ages.",
      "MoHFW 2024: Ni-kshay Poshan Rs 1000 per month; Ni-kshay Mitra support extended to household contacts.",
      "MoHFW 2024-25: 100-day TB Mukt Bharat campaign with CXR, NAAT, Cy-TB and TPT scale-up.",
    ],
    master: {
      heading: "Master revision table - TB infection and TPT",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Immune response to MTB antigens (IGRA/TST/TBST) **without active disease**; not infectious."],
        ["Burden", "Quarter of the world; **31.3% of Indian adults** (Prevalence Survey 2019-21); progression 5-10% lifetime, half in 2 years."],
        ["Pathophysiology", "Granuloma held by **Th1, IFN-gamma, TNF-alpha**; anti-TNF and HIV break it; IGRA antigens **ESAT-6, CFP-10 (RD1)** absent in BCG."],
        ["Target groups", "**Household contacts** (all ages; under 5 untested), **PLHIV**, anti-TNF, transplant, dialysis, silicosis, steroids."],
        ["Rule out TB", "**Four-symptom screen + CXR**; any abnormality - sputum NAAT; never TPT to active TB."],
        ["TST", "2 TU RT23, read **induration at 48-72 h**; 5 mm (contacts, PLHIV), 10 mm, 15 mm."],
        ["IGRA", "QFT-Plus **0.35 IU/mL**; T-SPOT **8 spots**; one visit; no BCG effect; indeterminate in immunosuppression."],
        ["Cy-TB", "Indian ESAT-6/CFP-10 skin test; **5 mm** positive; WHO 2022; NTEP 2024."],
        ["Regimens", "**6H** 5 mg/kg (max 300) x 6 mo; **3HP** H 900 + P 900 weekly x 12; **1HP** H 300 + P 600 x 28 d; 3HR; 4R; **6Lfx** for MDR contacts."],
        ["Adverse effects", "Hepatitis (stop if ALT over 3 x with symptoms or 5 x); 3HP flu-like reaction and hypotension; INH neuropathy - pyridoxine; rifamycin-OCP failure."],
        ["Special groups", "Pregnancy: 6H; PLHIV: 3HP with DTG fine, not with PIs; biologics: TPT 1 month before."],
        ["Monitoring", "Monthly review; LFT in risk groups; completion 80% doses in 133% time; Ni-kshay TPT module."],
        ["Programme", "Contact tracing in Ni-kshay; **RATIONS** - food cut TB by about 40%; Ni-kshay Mitra for contacts; adult BCG pilot."],
        ["Exam traps", "Using IGRA to diagnose active TB; TPT without CXR; isoniazid for MDR contacts."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Household contact: from screening to TPT",
        steps: [
          { label: "Index pulmonary TB notified in Ni-kshay", detail: "Home visit; list all household contacts" },
          { label: "Symptom screen in each contact", detail: "Cough, fever, weight loss, night sweats; child: poor growth", tone: "decision" },
          { label: "Symptomatic or CXR abnormal", detail: "Sputum NAAT; treat active TB if positive", tone: "warn" },
          { label: "Asymptomatic and CXR normal", detail: "Under 5 or PLHIV: no test needed" },
          { label: "5 years or more: IGRA, TST or Cy-TB where available", detail: "Unavailability should not delay TPT" },
          { label: "Index MDR/RR-TB?", detail: "Yes: 6 months levofloxacin", tone: "decision" },
          { label: "Start 6H or 3HP; record in Ni-kshay", detail: "Monthly review for adherence and hepatitis", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Choosing a TPT regimen",
        steps: [
          { label: "Default short regimen: 3HP", detail: "H 900 + P 900 weekly x 12; 2 years or more", tone: "good" },
          { label: "Shortest: 1HP", detail: "H 300 + P 600 daily x 28 days; 13 years or more" },
          { label: "Pregnancy, PI-based ART: 6H", detail: "5 mg/kg (max 300) daily x 6 months + pyridoxine" },
          { label: "Isoniazid-resistant index or INH intolerance: 4R", detail: "Rifampicin 10 mg/kg daily x 4 months" },
          { label: "MDR/RR-TB index: 6Lfx", detail: "Levofloxacin daily x 6 months", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "TST versus IGRA",
        columns: ["Feature", "TST", "IGRA"],
        rows: [
          ["Antigen", "PPD", "ESAT-6, CFP-10"],
          ["BCG", "False positive", "Not affected"],
          ["Visits", "Two", "One"],
          ["Positive", "5/10/15 mm", "0.35 IU/mL (QFT)"],
          ["Diagnoses active TB", "No", "No"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**TB infection** is immune memory to TB antigens with no active disease.",
            "These people are **not infectious**.",
            "**31.3%** of Indian adults have TB infection (Prevalence Survey 2019-21).",
            "Lifetime progression risk is **5-10%**, half within 2 years of infection.",
            "PLHIV are about **16 times** more likely to develop TB.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "Highest risk: **recent household contacts**, especially children under 5.",
            "**PLHIV** of any CD4 count, on or off ART.",
            "**Anti-TNF and JAK inhibitors**, long-term steroids, transplant and dialysis.",
            "**Silicosis**, diabetes, undernutrition, smoking and alcohol.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "A **granuloma** held together by IFN-gamma and TNF-alpha contains the bacilli.",
            "**Anti-TNF drugs** and HIV break down the granuloma.",
            "IGRA antigens **ESAT-6 and CFP-10** are absent from BCG.",
            "Low bacillary load lets **one or two drugs** cure the infection.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "First **rule out active TB**: symptom screen and chest X-ray.",
            "**TST**: read induration at 48-72 hours; 5 mm positive in contacts and PLHIV.",
            "**IGRA**: QuantiFERON 0.35 IU/mL or more is positive; BCG does not interfere.",
            "**Cy-TB** skin test: 5 mm or more positive.",
            "No test distinguishes **latent from active** TB.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**3HP**: isoniazid 900 mg plus rifapentine 900 mg once weekly for 12 weeks.",
            "**1HP**: isoniazid 300 mg plus rifapentine 600 mg daily for 28 days.",
            "**6H**: isoniazid 5 mg/kg, maximum 300 mg, daily for 6 months, with pyridoxine.",
            "**6Lfx**: levofloxacin daily for 6 months for MDR-TB contacts.",
            "**4R**: rifampicin daily for 4 months when isoniazid cannot be used.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: 6H is preferred.",
            "**PLHIV**: 3HP works with dolutegravir; avoid with protease inhibitors.",
            "**Children under 5**: TPT without testing once TB is excluded.",
            "**Before biologics**: start TPT at least 1 month earlier.",
            "Rifamycins make **oral contraceptives fail**; advise a barrier method.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**Hepatitis**: stop if ALT is over 3 x ULN with symptoms or over 5 x without.",
            "**3HP reaction**: flu-like illness; stop if hypotension or syncope.",
            "Isoniazid **neuropathy** is prevented by pyridoxine.",
            "TPT given to **active TB** breeds drug resistance.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Review **monthly** for adherence, TB symptoms and hepatitis.",
            "Check LFT only in **risk groups**.",
            "Completion means **80% of doses** within 133% of planned time.",
            "Record every TPT in the **Ni-kshay** TPT module.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**NTEP 2021**: TPT for all household contacts, not only under-5s.",
            "**WHO 2024**: levofloxacin for MDR contacts; 3HP and 1HP widely endorsed.",
            "**WHO 2022**: Cy-TB skin tests endorsed; NTEP rolled them out in 2024.",
            "**RATIONS 2023**: food baskets cut TB in contacts by about 40%.",
            "Ni-kshay Poshan is **Rs 1000 a month** for TB patients since November 2024.",
          ],
        },
      ],
      tables: [
        {
          heading: "TPT drugs at a glance",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Isoniazid (6H)", "5 mg/kg oral daily, max 300 mg; child 10 mg/kg", "6 months", "Hepatitis, neuropathy; give pyridoxine"],
            ["Isoniazid + rifapentine (3HP)", "900 mg + 900 mg oral weekly", "12 doses", "Flu-like reaction, hypotension, OCP failure"],
            ["Isoniazid + rifapentine (1HP)", "300 mg + 600 mg oral daily", "28 days", "As 3HP; 13 years or more"],
            ["Rifampicin (4R)", "10 mg/kg oral daily, max 600 mg", "4 months", "Interactions, orange urine"],
            ["Levofloxacin (6Lfx)", "750-1000 mg oral daily; child 15-20 mg/kg", "6 months", "Tendinopathy, QT, GI upset"],
          ],
        },
        {
          heading: "Tests for TB infection",
          columns: ["Test", "Antigen", "Positive", "BCG effect"],
          rows: [
            ["TST", "PPD", "5, 10 or 15 mm by risk", "False positive"],
            ["QuantiFERON-TB Gold Plus", "ESAT-6, CFP-10", "0.35 IU/mL or more", "None"],
            ["T-SPOT.TB", "ESAT-6, CFP-10", "8 spots or more", "None"],
            ["Cy-TB", "ESAT-6, CFP-10", "5 mm or more", "None"],
          ],
        },
        {
          heading: "Who gets which TPT",
          columns: ["Group", "Testing", "Regimen"],
          rows: [
            ["Contacts under 5", "None; exclude TB", "6H or 3HR"],
            ["Contacts 5 years or more", "TBI test where available", "6H or 3HP"],
            ["PLHIV", "None; exclude TB", "6H, 3HP or 1HP"],
            ["MDR/RR-TB contacts", "Exclude TB", "6Lfx"],
          ],
        },
      ],
      remember: [
        "**Rule out TB, then treat infection.**",
        "**3HP** = 900 + 900 weekly x 12; **1HP** = 300 + 600 daily x 28.",
        "MDR contact = **levofloxacin 6 months**.",
        "IGRA uses **RD1 antigens**, so BCG does not matter.",
        "IGRA and TST **never diagnose active TB**.",
        "Rifamycins **defeat the pill** - advise barrier contraception.",
        "India: **31.3%** of adults carry TB infection.",
      ],
    },
  },
  "infectious-fever-leprosy-reactions": {
    checked: "2026-10",
    updated: [
      "WHO 2018: 3-drug MDT (rifampicin, clofazimine, dapsone) for PB as well as MB; SDR-PEP for contacts.",
      "NLEP National Strategic Plan and Roadmap 2023-2027: interrupt transmission by 2027; uniform 3-drug PB MDT.",
      "WHO Global Leprosy Strategy 2021-2030: Towards zero leprosy targets.",
      "NLEP: Nikusth 2.0 portal for case reporting and follow-up.",
    ],
    master: {
      heading: "Master revision table - Leprosy and reactions",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Chronic granulomatous infection by **M. leprae** of skin and **peripheral nerves**; India over half of world's new cases."],
        ["Organism", "Obligate intracellular, uncultivable, **doubling 12-14 days**, likes 27-30 C; spread by nasal droplets from untreated MB."],
        ["Pathophysiology", "**PGL-1 binds laminin-alpha2** of Schwann cells; Th1 gives TT, Th2 gives LL; type 1 = **type IV**, type 2 = **type III, TNF-alpha**."],
        ["Diagnosis", "**Three cardinal signs**: anaesthetic patch, thickened nerve with loss, AFB on slit-skin smear - any one."],
        ["Classification", "Ridley-Jopling TT-BT-BB-BL-LL; **PB** 1-5 lesions, 0-1 nerve, smear negative; **MB** 6+ lesions, 2+ nerves or smear positive."],
        ["Investigations", "Slit-skin smear (**BI 0-6+**, MI); biopsy (Fite stain); lepromin prognostic only; G6PD before dapsone."],
        ["MDT", "**Rifampicin 600 + clofazimine 300 monthly**; clofazimine 50 + dapsone 100 daily; **PB 6, MB 12 months**."],
        ["Type 1 reaction", "Borderline; old lesions inflamed, oedema, **neuritis**; prednisolone **40 mg taper over 12-20 weeks**."],
        ["Type 2 reaction (ENL)", "BL/LL; tender nodules, fever, iritis, orchitis; prednisolone, **clofazimine 100 mg TDS**, **thalidomide 400 mg/day** (never in pregnancy)."],
        ["Neuritis", "Monthly VMT/ST; steroids for loss within 6 months; splint; decompress nerve abscess."],
        ["Drug toxicity", "Dapsone: haemolysis, methaemoglobinaemia, DHS; clofazimine: pigmentation; thalidomide: phocomelia, DVT."],
        ["Reaction vs relapse", "Reaction: sudden, old lesions, BI same, steroid-responsive; relapse: late, new lesions, BI rises, no steroid response."],
        ["Prevention", "**SDR-PEP rifampicin 600 mg** for contacts; LCDC, SPARSH, DPMR, MCR footwear, RCS; Nikusth reporting."],
        ["Exam traps", "Stopping MDT in reaction; thalidomide for type 1; classifying by lesion count when 2 nerves are involved."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Suspected leprosy in the OPD",
        steps: [
          { label: "Hypopigmented or red patch, numbness, painless injury", detail: "Examine whole skin in daylight" },
          { label: "Look for any cardinal sign", detail: "Anaesthetic patch; thick nerve with loss; AFB on smear", tone: "decision" },
          { label: "Classify PB or MB", detail: "PB 1-5 lesions, 0-1 nerve, smear negative; else MB" },
          { label: "Baseline VMT/ST, disability grade, G6PD", detail: "Exclude TB if steroids likely" },
          { label: "Start MDT", detail: "PB 6 months, MB 12 months; continue through reactions", tone: "good" },
          { label: "Examine all household contacts", detail: "Give SDR-PEP rifampicin 600 mg once after excluding leprosy and TB" },
          { label: "Report on Nikusth; monthly nerve function check", detail: "New loss within 6 months - steroids", tone: "warn" },
        ],
      },
      {
        kind: "ladder",
        heading: "Managing ENL by severity",
        steps: [
          { label: "Mild ENL: NSAIDs, rest", detail: "Continue MDT" },
          { label: "Severe ENL: prednisolone 40-60 mg/day", detail: "Taper over about 12 weeks", tone: "decision" },
          { label: "Steroid-sparing: clofazimine 100 mg TDS", detail: "Up to 12 weeks, then taper" },
          { label: "Chronic or recurrent: thalidomide 400 mg/day", detail: "Taper to 50-100 mg; strict contraception", tone: "warn" },
          { label: "Alternatives: pentoxifylline, methotrexate", detail: "Specialist centre" },
        ],
      },
      {
        kind: "compare",
        heading: "Type 1 versus type 2 reaction",
        columns: ["Feature", "Type 1", "Type 2 (ENL)"],
        rows: [
          ["Immunology", "Type IV", "Type III, TNF-alpha"],
          ["Leprosy", "Borderline", "BL, LL"],
          ["Lesions", "Old lesions flare", "New tender nodules"],
          ["Systemic", "Mild", "Fever, iritis, orchitis, arthritis"],
          ["Key drug", "Prednisolone", "Prednisolone, clofazimine, thalidomide"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Leprosy** is chronic M. leprae infection of skin and peripheral nerves.",
            "India reports **over half** of the world's new cases.",
            "Spread is by **nasal droplets** from untreated MB patients.",
            "Incubation is **years**: 2-5 for PB, 5-10 or more for MB.",
            "NSP 2023-27 aims to **interrupt transmission by 2027**.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "**PGL-1** binds Schwann cell laminin, so nerves are the main target.",
            "Strong **Th1** immunity gives tuberculoid disease; weak immunity gives lepromatous.",
            "**Type 1 reaction** is a type IV flare in borderline disease.",
            "**Type 2 reaction** is type III immune complex with high TNF-alpha.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**Ridley-Jopling**: TT, BT, BB, BL, LL, and indeterminate.",
            "**PB**: 1-5 lesions, 0-1 nerve, smear negative.",
            "**MB**: 6 or more lesions, 2 or more nerves, or smear positive.",
            "**Disability grade 2** means visible deformity or vision under 6/60.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Any **one cardinal sign** diagnoses leprosy.",
            "Signs: **anaesthetic patch**, thick nerve with loss, or AFB on smear.",
            "**Ulnar** is the nerve most often thickened.",
            "Type 1: **old patches** become red, swollen, tender, with neuritis.",
            "Type 2: **new tender nodules**, fever, red eyes, painful testes.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Slit-skin smear** from ear lobes, forehead and lesion gives BI and MI.",
            "**Biopsy** with Fite stain in doubtful cases.",
            "**Lepromin test** is prognostic, not diagnostic.",
            "Check **G6PD** before dapsone; screen TB before long steroids.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Monthly supervised: **rifampicin 600 mg + clofazimine 300 mg**.",
            "Daily: **clofazimine 50 mg + dapsone 100 mg**.",
            "**PB 6 months**, MB 12 months; 3 drugs for both.",
            "**Continue MDT** through every reaction.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Severe type 1 or neuritis: **prednisolone 40 mg**, tapered over 12-20 weeks.",
            "Severe ENL: prednisolone **1 mg/kg** with rapid taper.",
            "Steroid-sparing ENL: **clofazimine 100 mg three times daily** up to 12 weeks.",
            "Chronic ENL: **thalidomide**, never in pregnancy.",
            "Iridocyclitis: **atropine and steroid drops**; nerve abscess: decompress.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**New nerve loss** within 6 months is an emergency for steroids.",
            "**Red painful eye** in ENL threatens sight.",
            "**Dapsone hypersensitivity**: fever, rash, hepatitis at 4-6 weeks.",
            "Dapsone also causes **haemolysis and methaemoglobinaemia**.",
            "Clofazimine causes **red-brown pigmentation**.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Check **nerve function monthly** during MDT.",
            "Follow **PB 2 years, MB 5 years** after release from treatment.",
            "Refer stable deformities for **reconstructive surgery**.",
            "Give contacts **single-dose rifampicin 600 mg** after excluding leprosy and TB.",
            "Report every case on **Nikusth**.",
          ],
        },
      ],
      tables: [
        {
          heading: "Leprosy drugs at a glance",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Rifampicin", "600 mg oral monthly, supervised", "PB 6, MB 12 months", "Orange urine, hepatitis, interactions"],
            ["Clofazimine", "300 mg monthly + 50 mg daily oral", "PB 6, MB 12 months", "Skin pigmentation, ichthyosis"],
            ["Dapsone", "100 mg oral daily", "PB 6, MB 12 months", "Haemolysis in G6PD, DHS, methaemoglobinaemia"],
            ["Prednisolone", "40 mg/day oral, up to 1 mg/kg", "12-20 week taper", "Diabetes, TB, strongyloides"],
            ["Thalidomide", "100 mg four times daily, taper", "Chronic ENL", "Phocomelia, DVT, neuropathy"],
          ],
        },
        {
          heading: "Reaction versus relapse",
          columns: ["Feature", "Reaction", "Relapse"],
          rows: [
            ["Timing", "During MDT or under 3 years after", "Over 3 years after RFT"],
            ["Onset", "Sudden", "Slow"],
            ["Lesions", "Old ones inflamed", "New, quiet"],
            ["BI", "Unchanged", "Rises 2+ or more"],
            ["Steroids", "Rapid response", "No response"],
          ],
        },
        {
          heading: "PB versus MB (NLEP)",
          columns: ["Feature", "PB", "MB"],
          rows: [
            ["Skin lesions", "1-5", "6 or more"],
            ["Nerves", "None or one", "More than one"],
            ["Smear", "Negative", "Positive (any count)"],
            ["MDT duration", "6 months", "12 months"],
          ],
        },
      ],
      remember: [
        "Three cardinal signs: **patch, nerve, smear** - one is enough.",
        "MDT: **600 + 300 monthly; 50 + 100 daily**.",
        "Type 1 = **IV**, type 2 = **III** - same order as the numbers go down.",
        "**Never stop MDT** in a reaction.",
        "Thalidomide: **ENL only**, phocomelia risk.",
        "Ulnar nerve, claw hand, lagophthalmos - the classic disabilities.",
        "SDR-PEP: **rifampicin 600 mg once** for adult contacts.",
      ],
    },
  },
};

export default revision;
