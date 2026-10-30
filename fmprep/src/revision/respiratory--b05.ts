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
};

export default revision;
