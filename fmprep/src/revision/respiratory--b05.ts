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
  "respiratory-extrapulmonary-tb": {
    checked: "2026-10",
    updated: [
      "INDEX-TB 2016 remains the Indian site-specific EPTB guideline",
      "WHO 2024: Xpert Ultra on CSF as initial TBM test; urine LF-LAM in advanced HIV",
      "ACT HIV trial 2023: no survival benefit of dexamethasone in HIV-associated TBM",
      "NTEP 2023: 12 months for CNS and osteoarticular TB; Ni-kshay Poshan Rs 1000/month (2024)",
    ],
    master: {
      heading: "Master revision table - Extrapulmonary TB (INDEX-TB 2016, NTEP)",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "TB of organs other than lung parenchyma; pleural TB counted as EPTB; **lung plus EPTB = pulmonary TB**."],
        ["Burden", "About 16% of global notified TB; roughly one-fifth to one-quarter in India; **lymph node commonest, then pleural**."],
        ["Pathogenesis", "Lymphatic and haematogenous seeding; **paucibacillary, hypersensitivity-driven** caseation; Rich focus in TBM; paradiscal start in spine."],
        ["Grading", "**Jones-Campbell** node stages 1-5; **BMRC TBM grades I-III** by GCS and deficit; Lancet consensus TBM score."],
        ["Lymph node", "Painless matted cervical nodes, cold abscess, collar-stud, sinus; **FNAC + Xpert**; 6 months."],
        ["Pleural / pericardial", "Lymphocytic exudate, **ADA over 40 U/L**; pleural biopsy best yield; steroids in pericarditis optional (IMPI), not in HIV."],
        ["Abdominal", "Ileocaecal commonest; **SAAG under 1.1, ADA 39+**; colonoscopy biopsy; 6 months = 9 months; differentiate Crohn's."],
        ["CNS", "Subacute headache, VI palsy; CSF lymphocytes, protein high, glucose under 50%; **Xpert Ultra CSF**; MRI; **12 months + dexamethasone**."],
        ["Spine", "Thoracolumbar, gibbus, psoas abscess, paraplegia; **MRI + CT-guided biopsy**; 12 months; surgery for deficit or instability."],
        ["Genitourinary", "Sterile pyuria; **3-5 early-morning urines**; putty kidney, thimble bladder; endometrial biopsy; never treat on PCR alone."],
        ["Steroid doses", "**Dexamethasone 0.4 mg/kg/day** week 1, reduce 0.1 weekly, then oral taper (total 6-8 weeks); IMPI prednisolone 120 mg tapering over 6 weeks."],
        ["Paradoxical reaction", "Worsening after initial improvement in 10-25% of node TB; **continue ATT**, aspirate, exclude resistance, steroids if severe."],
        ["HIV", "ART within 2 weeks for most EPTB but **4-8 weeks delay in TBM**; LF-LAM if CD4 200 or less."],
        ["Exam traps", "TST/IGRA cannot diagnose active EPTB; serology banned; residual nodes at 6 months are not failure."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Diagnosing EPTB - get tissue",
        caption: "Paucibacillary disease: send everything from one specimen.",
        steps: [
          { label: "Suspect EPTB by site and constitutional symptoms", detail: "Chest X-ray in all; HIV and diabetes screen" },
          { label: "Obtain fluid or tissue", detail: "FNAC, pleural/ascitic/CSF fluid, biopsy, early-morning urine" },
          { label: "Send NAAT, liquid culture with DST and histology together", tone: "decision", detail: "Xpert Ultra or Truenat; caseating granulomas" },
          { label: "Add surrogate markers", detail: "ADA pleural 40, ascitic 39, pericardial 40 U/L; CSF glucose under 50%" },
          { label: "Do not use TST, IGRA or serology to diagnose", tone: "warn" },
          { label: "Notify on Ni-kshay and start ATT by site", tone: "good", detail: "6 months most sites; 12 months CNS and bone" },
        ],
      },
      {
        kind: "branch",
        heading: "Treatment duration and steroids by site",
        root: "Drug-sensitive EPTB",
        arms: [
          { label: "6 months (2HRZE + 4HRE)", tone: "good", steps: ["Lymph node", "Pleural", "Abdominal", "Genitourinary", "Pericardial"] },
          { label: "12 months (2HRZE + 10HRE)", tone: "warn", steps: ["TB meningitis and tuberculoma", "Spinal and osteoarticular TB"] },
          { label: "Steroids", tone: "decision", steps: ["TBM: dexamethasone (HIV-negative)", "Pericarditis: consider, not in HIV", "Severe paradoxical reaction"] },
        ],
      },
      {
        kind: "compare",
        heading: "CSF in chronic and acute meningitis",
        columns: ["Feature", "TB meningitis", "Bacterial", "Cryptococcal"],
        rows: [
          ["Onset", "Subacute, weeks", "Acute, hours to days", "Subacute, HIV"],
          ["Cells", "Lymphocytes 100-500", "Neutrophils over 1000", "Lymphocytes, often few"],
          ["Protein", "1-5 g/L", "High", "Mildly raised"],
          ["Glucose ratio", "Under 0.5", "Under 0.4", "Low or normal"],
          ["Key test", "Xpert Ultra, culture", "Gram stain, culture", "CrAg, India ink"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**EPTB** is TB outside the lung parenchyma; pleural TB counts as EPTB.",
            "Lung plus another site is notified as **pulmonary TB**.",
            "**Lymph node TB** is commonest, then pleural TB.",
            "India uses the **INDEX-TB guidelines (2016)** for EPTB.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Bacilli spread by **lymph and blood** during primary infection and reactivate later.",
            "Damage comes from **hypersensitivity**, so fluids hold few bacilli.",
            "TBM follows rupture of a **Rich focus**; basal exudate causes palsies and hydrocephalus.",
            "Spinal TB starts **paradiscally** and destroys the disc.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Nodes: painless **matted cervical** nodes, cold abscess, sinus.",
            "TBM: weeks of headache, fever, vomiting, then **VI palsy** and confusion.",
            "Spine: back pain, **gibbus**, psoas abscess, paraplegia.",
            "Abdomen: pain, **subacute obstruction**, ascites, right iliac fossa mass.",
            "GU: **sterile pyuria**, haematuria and female infertility.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**Jones-Campbell** stages nodes from firm mobile to sinus.",
            "**BMRC** grade I is GCS 15, II is 11-14 or deficit, III is 10 or less.",
            "Abdominal TB is gut, peritoneal, nodal or solid-organ.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Send tissue or fluid for **NAAT, culture and histology** together.",
            "**ADA** over 40 in pleura and pericardium, 39 or more in ascites.",
            "CSF: lymphocytes, high protein, **glucose under half of blood**; Xpert Ultra first.",
            "**MRI** is best for spine and brain; CT-guided biopsy for spine.",
            "**TST, IGRA and serology** cannot diagnose active EPTB.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Most sites: **2HRZE + 4HRE** daily for 6 months.",
            "CNS and bone: **2HRZE + 10HRE** for 12 months.",
            "Abdominal TB: 6 months works as well as 9.",
            "Residual nodes at 6 months are **not failure**.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "**Dexamethasone** for HIV-negative TBM, tapered over 6-8 weeks.",
            "Steroids may be used in **pericarditis** but avoided in HIV.",
            "Hydrocephalus needs **acetazolamide** or a shunt.",
            "Spine surgery for **deficit, instability or kyphosis**.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "HIV: delay ART **4-8 weeks in TBM**; within 2 weeks otherwise.",
            "**Paradoxical reaction**: continue ATT, aspirate, exclude resistance.",
            "Pregnancy: first-line drugs are safe with **pyridoxine**.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "TBM mortality reaches **50% in Grade III**.",
            "Pott's paraplegia, kyphosis, strictures and **tubal infertility**.",
            "Constrictive pericarditis if pericardial TB is untreated.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**WHO 2024**: Xpert Ultra on CSF is the first test for TBM.",
            "**ACT HIV 2023**: dexamethasone gave no survival benefit in HIV TBM.",
            "**High-dose rifampicin** for TBM is still not routine.",
          ],
        },
      ],
      tables: [
        {
          heading: "EPTB drugs",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["HRZE fixed-dose combination", "Oral by weight band: 2-6 tablets daily", "2 months intensive", "Hepatitis, optic neuritis, gout"],
            ["HRE fixed-dose combination", "Oral by weight band daily", "4 months (10 in CNS/bone)", "Hepatitis, neuropathy"],
            ["Dexamethasone", "0.4 mg/kg/day IV, cut by 0.1 weekly, then oral taper", "6-8 weeks (TBM)", "Hyperglycaemia; no benefit in HIV"],
            ["Prednisolone", "120 mg/day oral tapering (IMPI)", "6 weeks (pericarditis)", "Avoid in HIV"],
            ["Pyridoxine", "10 mg oral daily", "Whole course", "Prevents isoniazid neuropathy"],
          ],
        },
        {
          heading: "Site, test and duration",
          columns: ["Site", "Key test", "Duration"],
          rows: [
            ["Lymph node", "FNAC + Xpert", "6 months"],
            ["Pleural", "ADA over 40, pleural biopsy", "6 months"],
            ["Abdominal", "Colonoscopic biopsy, ADA 39+", "6 months"],
            ["TBM", "CSF Xpert Ultra, MRI", "12 months"],
            ["Spine", "MRI, CT-guided biopsy", "12 months"],
            ["Genitourinary", "Early-morning urine culture", "6 months"],
          ],
        },
        {
          heading: "Ileocaecal TB versus Crohn's",
          columns: ["Feature", "TB", "Crohn's"],
          rows: [
            ["Ulcers", "Transverse", "Longitudinal, aphthous"],
            ["Granulomas", "Large, confluent, caseating", "Small, non-caseating"],
            ["Perianal disease", "Rare", "Common"],
            ["CT", "Necrotic nodes, ascites", "Comb sign, fibrofatty change"],
          ],
        },
      ],
      remember: [
        "EPTB is **paucibacillary**: tissue beats sputum.",
        "ADA **40-39-40**: pleura, ascites, pericardium.",
        "**Brain and bone: 12 months**; the rest: 6.",
        "Steroids: **TBM yes**, pericarditis maybe, pleural no.",
        "TBM in HIV: **ART after 4-8 weeks**.",
        "Cold abscess: **no heat, no redness, no pain**.",
        "Paradoxical reaction is **not** treatment failure.",
      ],
    },
  },
  "respiratory-tb-special-situations": {
    checked: "2026-10",
    updated: [
      "WHO 2021 / NACO 2021: ART within 2 weeks of ATT (TBM 4-8 weeks); TLD with dolutegravir 50 mg BD on rifampicin",
      "WHO 2024: urine LF-LAM for PLHIV with CD4 200 or less or serious illness",
      "MoHFW 2024: Ni-kshay Poshan Yojana Rs 1000/month, energy-dense nutrition for underweight, differentiated TB care",
      "RATIONS trial (Lancet 2023): nutritional support for patients and household contacts",
    ],
    master: {
      heading: "Master revision table - TB in special situations",
      columns: ["Heading", "What to write"],
      rows: [
        ["Why it matters", "**Undernutrition** is India's largest attributable TB risk; HIV raises risk about 18-fold; **diabetes triples** risk and worsens outcomes."],
        ["Rifampicin pharmacology", "**CYP3A4/UGT1A1/P-gp inducer**: lowers dolutegravir, PIs, OCP, warfarin, sulfonylureas, steroids, tacrolimus."],
        ["HIV - diagnosis", "Four-symptom screen; **Xpert Ultra**; **LF-LAM** if CD4 200 or less; atypical, smear-negative, extrapulmonary at low CD4."],
        ["HIV - treatment", "Same 2HRZE/4HRE; **ART within 2 weeks (TBM 4-8 weeks)**; **DTG 50 mg BD**; rifabutin with boosted PI; **CPT 960 mg OD**."],
        ["IRIS", "2-8 weeks after ART; continue both; NSAID or prednisolone; **PredART prophylaxis** if CD4 100 or less."],
        ["Diabetes", "**Bidirectional screening** (NTEP-NP-NCD 2017); insulin if uncontrolled; metformin fine; sulfonylurea levels fall; pyridoxine."],
        ["Pregnancy", "H, R, Z, E safe; **no streptomycin**; pyridoxine; breastfeed; newborn TPT then BCG; OCP failure."],
        ["DILI - stop", "**ALT over 3x ULN with symptoms or jaundice, or over 5x without**: stop H, R, Z; bridge with **E + Lfx**."],
        ["DILI - restart", "When ALT under 2x ULN: **R first, H after 3-7 days**; omit Z after severe DILI and give 9 months HRE."],
        ["Liver disease", "Fewer hepatotoxic drugs, e.g. 9 HRE without Z; monthly LFT."],
        ["Kidney disease", "CrCl under 30 or dialysis: **Z 25 mg/kg and E 15 mg/kg thrice weekly after dialysis**; H, R unchanged."],
        ["Other ADRs", "H neuropathy (pyridoxine); E optic neuritis; Z gout; R flu-like, thrombocytopenia (never restart); rash: stop all and rechallenge."],
        ["Nutrition", "**Ni-kshay Poshan Rs 1000/month**; energy-dense supplement 2 months if BMI under 18.5; Ni-kshay Mitra; **RATIONS**."],
        ["Exam traps", "TBM ART delay; DTG BD for 2 weeks after rifampicin; steroids need doubling on rifampicin."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Drug-induced liver injury on ATT",
        caption: "Stop, bridge, then reintroduce one drug at a time.",
        steps: [
          { label: "Symptoms of hepatitis or jaundice on ATT", detail: "Check ALT, bilirubin; exclude viral hepatitis and alcohol" },
          { label: "ALT over 3x ULN with symptoms or over 5x without?", tone: "decision", detail: "Under 3x without symptoms: continue and monitor" },
          { label: "Stop isoniazid, rifampicin and pyrazinamide", tone: "warn", detail: "Bridge with ethambutol plus levofloxacin if ill or infectious" },
          { label: "Wait for ALT under 2x ULN and normal bilirubin" },
          { label: "Reintroduce rifampicin, then isoniazid after 3-7 days", detail: "Check ALT after each drug" },
          { label: "Omit pyrazinamide if DILI was severe", tone: "good", detail: "Complete 9 months HRE" },
        ],
      },
      {
        kind: "flow",
        heading: "HIV-TB co-infection: first month",
        steps: [
          { label: "TB diagnosed in PLHIV", detail: "Xpert Ultra; LF-LAM if CD4 200 or less" },
          { label: "Start 2HRZE with pyridoxine and cotrimoxazole 960 mg OD" },
          { label: "Meningitis?", tone: "decision", detail: "Yes: ART after 4-8 weeks; no: ART within 2 weeks" },
          { label: "Start TLD with dolutegravir 50 mg BD", detail: "Continue BD for 2 weeks after rifampicin ends" },
          { label: "Watch for IRIS at 2-8 weeks", tone: "warn", detail: "Continue both; NSAID or prednisolone" },
        ],
      },
      {
        kind: "compare",
        heading: "Dose adjustment: kidney versus liver disease",
        columns: ["Drug", "CKD (CrCl under 30 / dialysis)", "Chronic liver disease"],
        rows: [
          ["Isoniazid", "Unchanged, daily", "Use with monitoring"],
          ["Rifampicin", "Unchanged, daily", "Use with monitoring"],
          ["Pyrazinamide", "25 mg/kg thrice weekly", "Usually omit"],
          ["Ethambutol", "15 mg/kg thrice weekly", "Unchanged"],
          ["Levofloxacin", "Thrice weekly", "Safe substitute"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "The standard **2HRZE/4HRE** backbone is adjusted to the host, not abandoned.",
            "**Undernutrition** is the largest attributable TB risk factor in India.",
            "HIV raises TB risk about **18-fold**; diabetes **triples** it.",
            "**Rifampicin** induces liver enzymes and lowers many drug levels.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Low CD4 TB is often **smear-negative, extrapulmonary or disseminated**.",
            "Screen PLHIV with the **four-symptom screen** at every visit.",
            "**IRIS** causes worsening fever or nodes 2-8 weeks after starting ART.",
            "DILI presents with **nausea, vomiting, abdominal pain or jaundice**.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Use **Xpert Ultra** first; add **urine LF-LAM** if CD4 is 200 or less.",
            "Test every TB patient for **diabetes** and HIV.",
            "Recheck glucose after 2-3 months to exclude **stress hyperglycaemia**.",
            "Check baseline **LFT** in alcohol use, hepatitis, HIV, pregnancy and the elderly.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "HIV: **ART within 2 weeks**; TBM waits 4-8 weeks.",
            "Give **dolutegravir 50 mg twice daily** with rifampicin.",
            "Give **cotrimoxazole 960 mg daily** to all HIV-TB patients.",
            "Diabetes: insulin if uncontrolled; rifampicin weakens **sulfonylureas**.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "DILI: stop H, R, Z if ALT is **over 3x with symptoms or 5x without**.",
            "Bridge with **ethambutol plus levofloxacin** if the patient is ill.",
            "Restart **rifampicin first**, then isoniazid; skip pyrazinamide if severe.",
            "Rash: stop all drugs and **rechallenge one at a time**.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "Pregnancy: first-line drugs are safe; **avoid streptomycin**.",
            "Rifampicin makes the **pill fail**; use a copper IUD.",
            "Newborn of an infectious mother gets **TPT, then BCG**.",
            "CKD: **pyrazinamide and ethambutol thrice weekly** after dialysis.",
            "Liver disease: use fewer hepatotoxic drugs, often **no pyrazinamide**.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**Jaundice or confusion** on ATT means liver failure risk.",
            "**SJS/TEN**: never rechallenge the culprit drug.",
            "Visual loss on **ethambutol**: stop and refer.",
            "Rifampicin **thrombocytopenia or haemolysis**: never restart rifampicin.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "**Ni-kshay Poshan Yojana** pays Rs 1000 per month.",
            "Underweight patients get **energy-dense nutrition** for 2 months.",
            "**Ni-kshay Mitra** donors provide food baskets.",
            "Weigh monthly; **5% gain in 2 months** predicts better outcome.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**RATIONS 2023**: food for contacts cut TB incidence by about 40-50%.",
            "**NTEP 2024**: differentiated care triages severe patients for admission.",
            "**WHO 2024**: LF-LAM recommended in advanced HIV.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs and adjustments",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Isoniazid", "5 mg/kg oral daily", "6 months", "Hepatitis, neuropathy; give pyridoxine"],
            ["Rifampicin", "10 mg/kg oral daily", "6 months", "Hepatitis, interactions, thrombocytopenia"],
            ["Pyrazinamide", "25 mg/kg daily; thrice weekly in CKD", "2 months", "Hepatitis, gout, arthralgia"],
            ["Ethambutol", "15 mg/kg daily; thrice weekly in CKD", "6 months", "Optic neuritis"],
            ["Dolutegravir", "50 mg oral BD with rifampicin", "Until 2 weeks after rifampicin", "Insomnia, weight gain"],
            ["Cotrimoxazole", "960 mg oral OD", "Throughout ATT", "Rash, cytopenias"],
          ],
        },
        {
          heading: "DILI criteria",
          columns: ["Finding", "Action"],
          rows: [
            ["ALT under 3x ULN, well", "Continue, monitor"],
            ["ALT over 3x with symptoms", "Stop H, R, Z"],
            ["ALT over 5x without symptoms", "Stop H, R, Z"],
            ["ALT under 2x and bilirubin normal", "Restart R, then H"],
          ],
        },
        {
          heading: "Situation and key change",
          columns: ["Situation", "Key change"],
          rows: [
            ["HIV", "ART in 2 weeks; DTG BD; CPT"],
            ["Diabetes", "Bidirectional screening; insulin if uncontrolled"],
            ["Pregnancy", "No streptomycin; pyridoxine"],
            ["CKD", "Z and E thrice weekly"],
            ["Liver disease", "Omit Z; monthly LFT"],
          ],
        },
      ],
      remember: [
        "ART in **2 weeks**, TBM in **4-8 weeks**.",
        "**DTG BD** while on rifampicin and 2 weeks after.",
        "DILI rule: **3 with symptoms, 5 without**.",
        "Restart order: **R, H, then Z or never**.",
        "CKD: **Z and E thrice weekly**; H and R daily.",
        "Pregnancy: only **streptomycin** is banned.",
        "Rifampicin **doubles steroid dose** and defeats the pill.",
      ],
    },
  },
  "respiratory-ntm-post-tb": {
    checked: "2026-10",
    updated: [
      "ATS/ERS/ESCMID/IDSA 2020 NTM guideline: thrice-weekly MAC regimen, azithromycin preferred, ALIS for refractory MAC",
      "PTLD clinical standards (Migliori 2021): assess every patient at end of TB treatment",
      "2nd International Post-TB Symposium (IJTLD 2023): post-TB health and wellbeing",
      "WHO 2024: culture to confirm recurrence because NAAT can stay positive after cure",
    ],
    master: {
      heading: "Master revision table - NTM and post-TB lung disease",
      columns: ["Heading", "What to write"],
      rows: [
        ["NTM definition", "Environmental mycobacteria other than MTB complex and M. leprae; **not spread person to person**; MAC commonest."],
        ["Runyon groups", "I photochromogens (**kansasii**), II scotochromogens (gordonae), III non-chromogens (**MAC**), IV rapid growers (**abscessus**, fortuitum, chelonae)."],
        ["Risk factors", "Bronchiectasis, **previous TB**, COPD, CF, silicosis; HIV CD4 under 50; anti-TNF; anti-IFN-gamma autoantibodies."],
        ["Phenotypes", "**Fibrocavitary**, **nodular-bronchiectatic (Lady Windermere)**, hot tub lung, disseminated."],
        ["NTM diagnosis", "Symptoms + CXR/HRCT findings + exclusion + **2 positive sputum cultures** (or 1 BAL, or biopsy); species ID; macrolide/amikacin DST."],
        ["India clue", "**Smear positive, NAAT negative**, MPT64 negative; 'TB failure' or 'MDR suspect' may be NTM."],
        ["MAC treatment", "**Azithromycin + rifampicin + ethambutol**: thrice weekly (nodular) or daily + amikacin 2-3 months (cavitary); **12 months after conversion**; ALIS 590 mg if refractory."],
        ["Other NTM", "**M. kansasii**: R + E + H or azithromycin, 12 months; **M. abscessus**: IV amikacin + imipenem/cefoxitin/tigecycline, erm(41), surgery."],
        ["PTLD definition", "Chronic respiratory abnormality, with or without symptoms, **attributable at least in part to previous TB**."],
        ["PTLD spectrum", "Airway (obstruction, bronchiectasis, stenosis), parenchyma (cavity, fibrosis, destroyed lung), pleura (fibrothorax), vessels (PH, Rasmussen), complications (CPA, NTM, cancer)."],
        ["PTLD assessment", "**End of treatment**: symptoms, SGRQ, **spirometry, SpO2, 6MWT**, CXR; HRCT, Aspergillus IgG, echo as needed."],
        ["PTLD management", "Quit smoking/biomass; **pulmonary rehab**; LAMA/LABA; cautious ICS; airway clearance; itraconazole for CPA; BAE; LTOT; vaccines."],
        ["Recurrence trap", "**Xpert stays positive for years**; confirm with culture before repeating ATT."],
        ["Exam one-liners", "Never macrolide monotherapy; Lady Windermere = middle lobe and lingula; childhood NTM node = excise."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Is it NTM lung disease?",
        caption: "ATS/ERS/ESCMID/IDSA 2020 criteria.",
        steps: [
          { label: "Chronic cough, weight loss; smear positive", detail: "Or TB not responding despite adherence" },
          { label: "MTB NAAT negative?", tone: "decision", detail: "Positive: treat as TB; negative: suspect NTM" },
          { label: "Culture two separate sputa (or one BAL)", detail: "MPT64 negative; species identification" },
          { label: "Compatible CXR or HRCT, other diagnoses excluded", tone: "decision" },
          { label: "M. gordonae or single isolate?", tone: "warn", detail: "Likely contaminant - repeat, do not treat" },
          { label: "Species-specific regimen with DST", tone: "good", detail: "MAC: azithromycin + rifampicin + ethambutol" },
        ],
      },
      {
        kind: "ladder",
        heading: "MAC treatment ladder",
        steps: [
          { label: "Mild nodular disease: consider watchful waiting", detail: "Airway clearance, repeat cultures" },
          { label: "Nodular-bronchiectatic: thrice weekly", detail: "Azithromycin 500 mg, rifampicin 600 mg, ethambutol 25 mg/kg" },
          { label: "Cavitary or severe: daily plus amikacin", detail: "Azithromycin 250-500 mg, rifampicin 450-600 mg, ethambutol 15 mg/kg; IV amikacin 2-3 months", tone: "decision" },
          { label: "Refractory at 6 months: add ALIS", detail: "Amikacin liposome inhalation 590 mg OD", tone: "warn" },
          { label: "Localised destroyed lung: surgery", tone: "good" },
        ],
      },
      {
        kind: "branch",
        heading: "Spectrum of post-TB lung disease",
        root: "Post-TB lung disease",
        arms: [
          { label: "Airway", steps: ["Obstructive airflow limitation", "Traction bronchiectasis", "Tracheobronchial stenosis"] },
          { label: "Parenchyma", steps: ["Residual cavities", "Fibrosis", "Destroyed lung"] },
          { label: "Pleura and vessels", steps: ["Fibrothorax", "Pulmonary hypertension", "Rasmussen aneurysm"] },
          { label: "Complications", tone: "warn", steps: ["Chronic pulmonary aspergillosis", "NTM infection", "Recurrence", "Lung cancer"] },
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**NTM** are environmental mycobacteria; they do not spread person to person.",
            "**MAC** is the commonest NTM lung pathogen.",
            "**PTLD** is chronic respiratory abnormality caused at least partly by past TB.",
            "About **half of TB survivors** have abnormal lung function.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "NTM infect **damaged lungs**: bronchiectasis, old TB, COPD, silicosis.",
            "**HIV with CD4 under 50** causes disseminated MAC.",
            "PTLD follows **extensive, delayed or repeated** TB, smoking and MDR-TB.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "Runyon: I **kansasii**, II gordonae, III **MAC**, IV **abscessus**.",
            "NTM phenotypes: **fibrocavitary** and **nodular-bronchiectatic**.",
            "**Lady Windermere**: slender older woman, middle lobe and lingula.",
            "PTLD affects **airway, parenchyma, pleura and vessels**.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "NTM symptoms mimic TB: **chronic cough**, weight loss, haemoptysis.",
            "**Smear positive, NAAT negative** suggests NTM.",
            "PTLD gives breathlessness and cough **after cure**.",
            "PTLD is often mislabelled as **COPD or relapse**.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "NTM needs **two positive sputum cultures** or one BAL, plus imaging.",
            "Identify the **species**; M. gordonae is usually a contaminant.",
            "Test **macrolide and amikacin** susceptibility.",
            "PTLD: **spirometry, SpO2 and 6MWT** at the end of treatment.",
            "**Xpert can stay positive** after cure; confirm recurrence by culture.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "MAC: **azithromycin, rifampicin and ethambutol**.",
            "Thrice weekly for nodular disease; **daily plus amikacin** for cavities.",
            "Treat for **12 months after culture conversion**.",
            "**Never use a macrolide alone**.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Refractory MAC: add **inhaled liposomal amikacin**.",
            "**M. abscessus** needs IV amikacin plus imipenem or cefoxitin.",
            "PTLD: **pulmonary rehabilitation**, bronchodilators and airway clearance.",
            "CPA in a cavity: **itraconazole 200 mg twice daily** for 6 months or more.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**Massive haemoptysis** from bronchial arteries or Rasmussen aneurysm.",
            "Hypoxaemia and **cor pulmonale** in destroyed lung.",
            "New mass in a scar: think **lung cancer**.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**ATS/ERS 2020**: azithromycin preferred; ALIS for refractory MAC.",
            "**PTLD standards 2021**: assess every patient at end of treatment.",
            "**Post-TB Symposium 2023**: focus on whole post-TB health and wellbeing.",
          ],
        },
      ],
      tables: [
        {
          heading: "NTM and PTLD drugs",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Azithromycin", "500 mg oral thrice weekly or 250-500 mg daily", "12 months after conversion", "QT, hearing loss; never alone"],
            ["Rifampicin", "600 mg thrice weekly or 450-600 mg daily", "12 months after conversion", "Hepatitis, interactions"],
            ["Ethambutol", "25 mg/kg thrice weekly or 15 mg/kg daily", "12 months after conversion", "Optic neuritis"],
            ["Amikacin IV", "15 mg/kg daily or 25 mg/kg thrice weekly", "2-3 months", "Ototoxicity, nephrotoxicity"],
            ["Amikacin liposome inhaled", "590 mg once daily", "Refractory MAC", "Dysphonia, bronchospasm"],
            ["Itraconazole", "200 mg oral BD", "6 months or more", "Hepatitis, heart failure"],
          ],
        },
        {
          heading: "TB versus NTM versus PTLD",
          columns: ["Feature", "TB", "NTM", "PTLD"],
          rows: [
            ["NAAT for MTB", "Positive", "Negative", "Negative or residual"],
            ["Culture", "MTB", "NTM species", "Negative"],
            ["Imaging", "New lesion", "Nodules, bronchiectasis, cavities", "Stable scars"],
            ["Treatment", "ATT", "Macrolide regimen", "Rehabilitation"],
          ],
        },
        {
          heading: "NTM diagnostic criteria",
          columns: ["Domain", "Requirement"],
          rows: [
            ["Clinical", "Respiratory symptoms"],
            ["Radiology", "Nodules, cavities, or bronchiectasis with nodules"],
            ["Exclusion", "TB, cancer, aspergillosis excluded"],
            ["Microbiology", "Two positive sputum cultures, or one BAL, or biopsy"],
          ],
        },
      ],
      remember: [
        "**Smear positive, NAAT negative**: think NTM.",
        "Two sputum cultures make the **NTM diagnosis**.",
        "**ARE** for MAC: azithromycin, rifampicin, ethambutol.",
        "Treat MAC **12 months after conversion**.",
        "**Lady Windermere**: middle lobe and lingula MAC.",
        "PTLD is **not relapse**; culture before repeating ATT.",
        "End of TB treatment: **spirometry, SpO2, 6MWT**.",
      ],
    },
  },
};

export default revision;
