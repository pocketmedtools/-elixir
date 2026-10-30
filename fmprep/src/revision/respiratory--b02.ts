import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "respiratory-haemoptysis": {
    checked: "2026-10",
    updated: [
      "CIRSE Standards of Practice on BAE (2022): CT angiography before BAE when stable, particles of at least 300 micrometres, no proximal coils",
      "Nebulised tranexamic acid 500 mg three times daily as a bridge (Wand RCT 2018; AIIMS New Delhi emergency trial 2023)",
      "NTEP 2023: haemoptysis of any duration is presumptive TB; upfront NAAT is the first test",
      "ESC/EACTS 2025 valvular guideline: percutaneous mitral commissurotomy first-line for suitable rheumatic MS",
      "KDIGO 2024 ANCA vasculitis: rituximab or cyclophosphamide, reduced-dose steroids, avacopan for alveolar haemorrhage",
    ],
    master: {
      heading: "Master revision table - Haemoptysis and massive haemoptysis",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Blood coughed from **below the vocal cords**; **massive** = 600 mL or more in 24 h (100-1000 mL used) or **any volume causing airway, gas-exchange or haemodynamic compromise**."],
        ["Why it kills", "**Asphyxia, not exsanguination** - dead space only about 150-200 mL; blood spills into the good lung."],
        ["Source", "**Bronchial arteries about 90%** (systemic pressure, hypertrophied by chronic inflammation); pulmonary arteries about 5% (**Rasmussen aneurysm**); non-bronchial systemic collaterals."],
        ["Causes in India", "**Active TB and post-TB sequelae** (bronchiectasis, cavity, **aspergilloma**), lung cancer, bronchiectasis, **mitral stenosis**, PE, DAH/vasculitis, anticoagulants, **paragonimiasis** (North-East), cryptogenic 10-20%."],
        ["Exclude pseudohaemoptysis", "Nose, mouth, gums, aspirated **haematemesis** (dark, acidic, food), Serratia red pigment; haemoptysis is **bright red, frothy, alkaline**."],
        ["Grading", "Streaking; mild under 100 mL; moderate 100-600 mL; massive 600 mL or more / 100-150 mL per hour; **life-threatening by consequence**."],
        ["History and examination", "Volume, side, TB symptoms and past ATT, smoking and age 40+, MS (opening snap, AF), vasculitis (haematuria, sinusitis), DVT, anticoagulants; examine nose and throat; clubbing; Horner."],
        ["OPD tests", "**Sputum NAAT** (presumptive TB), **CXR** (normal in 20-30%), CBC, PT/INR, crossmatch, urine for RBC casts, ECG/echo, HIV and sugar."],
        ["Tertiary tests", "**CT angiography** first if stable (side, cause, arterial map); bronchoscopy (mandatory if smoker 40+); rigid bronchoscopy in massive bleed; bronchial and pulmonary angiography."],
        ["Emergency care", "Oxygen, **bleeding side down**, two cannulae, transfuse Hb 7-8, platelets if under 50,000, reverse anticoagulants, **TXA 1 g IV 8-hourly or 500 mg nebulised TDS**."],
        ["Airway", "Intubate with **8.0 mm or larger ETT**; mainstem intubation of good lung, **bronchial blocker** or double-lumen tube; iced saline, adrenaline 1:20,000."],
        ["BAE", "First-line definitive; **particles 300-500 micrometres**, no proximal coils; control 70-99%, rebleed 10-30% at 1 year; chest pain commonest, **spinal cord ischaemia** feared."],
        ["Surgery and cause", "Surgery for failed BAE, PA rupture, trauma, selected aspergilloma; treat cause - ATT, itraconazole, bronchiectasis care, cancer pathway."],
        ["Follow-up and prevention", "Review 1, 3, 6 months after BAE; complete ATT under NTEP; smoking cessation (1800-112-356); RHD penicillin prophylaxis."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Haemoptysis - diagnostic approach",
        caption: "From the first question to the localising test.",
        steps: [
          { label: "Is it true haemoptysis?", detail: "Exclude nose, mouth, gums and haematemesis", tone: "decision" },
          { label: "Grade volume and stability", detail: "Massive: 600 mL/24 h, 100-150 mL/h, or airway/SpO2/BP compromise", tone: "warn" },
          { label: "CXR, sputum NAAT, CBC, coagulation", detail: "Every patient in India is presumptive TB" },
          { label: "Localised or diffuse?", detail: "Diffuse infiltrates plus falling Hb - think DAH, coagulopathy, MS", tone: "decision" },
          { label: "CT angiography chest if stable", detail: "Side, cause and arterial map before BAE" },
          { label: "Bronchoscopy", detail: "Mandatory if smoker 40 or over, even with normal CXR" },
          { label: "Treat cause and follow up", detail: "ATT, antifungals, bronchiectasis care, cancer pathway", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Massive haemoptysis - escalation",
        caption: "Protect the good lung, stop the bleed, then fix the cause.",
        steps: [
          { label: "Bleeding side down, oxygen, IV access", detail: "Crossmatch; Hb target 7-8 g/dL; platelets if under 50,000" },
          { label: "Reverse anticoagulants, give tranexamic acid", detail: "Vitamin K 10 mg + PCC 25-50 IU/kg; TXA 1 g IV 8-hourly or 500 mg nebulised" },
          { label: "Secure and isolate the airway", detail: "8.0 mm ETT, mainstem intubation of good lung, bronchial blocker", tone: "warn" },
          { label: "Bronchoscopic haemostasis", detail: "Rigid scope, iced saline, adrenaline 1:20,000, tamponade" },
          { label: "Bronchial artery embolisation", detail: "Particles 300-500 micrometres; pulmonary embolisation for Rasmussen", tone: "decision" },
          { label: "Surgery if BAE fails", detail: "PA rupture, trauma, selected aspergilloma; elective after stabilisation", tone: "good" },
        ],
      },
      {
        kind: "compare",
        heading: "Haemoptysis versus haematemesis",
        columns: ["Feature", "Haemoptysis", "Haematemesis"],
        rows: [
          ["Preceded by", "Cough", "Nausea, vomiting"],
          ["Appearance", "Bright red, frothy", "Dark, coffee-ground, food"],
          ["pH", "Alkaline", "Acidic"],
          ["Afterwards", "Streaky sputum for days", "Melaena"],
          ["Microscopy", "Haemosiderin-laden macrophages", "Food particles"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Haemoptysis** is blood coughed up from below the vocal cords.",
            "**Massive haemoptysis**: 600 mL or more in 24 hours, or any bleed threatening airway, oxygen or circulation.",
            "Patients die of **asphyxia**, not blood loss; dead space is only about 150 mL.",
            "**Bronchial arteries** cause about 90% of massive bleeds, at systemic pressure.",
            "In India, haemoptysis is **presumptive TB** until sputum NAAT says otherwise.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Active TB** and post-TB bronchiectasis, cavities and **aspergilloma** lead in India.",
            "**Lung cancer** in smokers aged 40 or over, even with a normal chest X-ray.",
            "**Mitral stenosis** causes pulmonary apoplexy from ruptured bronchial veins.",
            "PE, vasculitis with alveolar haemorrhage, anticoagulants and **paragonimiasis** in North-East India.",
            "**Rasmussen aneurysm** is a pulmonary artery pseudoaneurysm in a TB cavity wall.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Confirm **true haemoptysis**: frothy, bright red, alkaline, mixed with sputum.",
            "Ask volume, side, TB symptoms, past ATT, smoking, rheumatic fever and drugs.",
            "Examine the **nose and mouth** to exclude pseudohaemoptysis.",
            "Look for clubbing, nodes, opening snap of MS, telangiectasia and calf swelling.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Sputum NAAT** and chest X-ray for every patient.",
            "CBC, **PT/INR**, crossmatch, creatinine and urine for red cell casts.",
            "**CT angiography** first if stable: finds side, cause and arteries for BAE.",
            "**Bronchoscopy** is mandatory in a smoker aged 40 or over with unexplained bleeding.",
            "Echocardiography if mitral stenosis or heart failure is suspected.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Mild: treat the cause, hold anticoagulants if safe, and **review promptly**.",
            "Oral **tranexamic acid 500 mg-1 g three times daily** for recurrent minor bleeding.",
            "Bronchiectasis flare: **amoxicillin-clavulanate 625 mg three times daily for 14 days**.",
            "Start NTEP regimen when TB is confirmed.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Lie the patient **bleeding side down** to protect the good lung.",
            "Two large cannulae, crossmatch, and correct clotting and platelets.",
            "**Tranexamic acid 1 g IV 8-hourly**, or 500 mg nebulised three times daily.",
            "Intubate with an **8.0 mm tube**; isolate the good lung with mainstem intubation or blocker.",
            "Avoid vasopressin before angiography; it hides the bronchial arteries.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "**Bronchial artery embolisation** is the first-line definitive treatment.",
            "Use particles of **at least 300 micrometres**; avoid proximal coils.",
            "Rebleeding occurs in **10-30% within a year**, often from missed collaterals.",
            "**Rasmussen aneurysm** needs pulmonary artery embolisation.",
            "Surgery for failed BAE, artery rupture, trauma and selected aspergilloma.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**Asphyxia**, aspiration pneumonia, ARDS and shock.",
            "BAE: chest pain and dysphagia commonly; **spinal cord ischaemia** rarely.",
            "Red flags: over 100 mL a day, hypoxaemia, hypotension, anticoagulants, known cavity.",
            "Haemoptysis with haematuria suggests **pulmonary-renal syndrome**.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Refer massive or recurrent bleeding the **same day** to a centre with BAE.",
            "Age 40 or over with unexplained haemoptysis: **cancer pathway within 2 weeks**.",
            "Review 1, 3 and 6 months after BAE and keep treating the cause.",
            "Complete ATT, stop smoking, and give **penicillin prophylaxis** for rheumatic heart disease.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in haemoptysis",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Tranexamic acid IV", "1 g over 10 min, then 1 g 8-hourly", "3-5 days", "Thrombosis, seizures; reduce in renal failure"],
            ["Tranexamic acid nebulised", "500 mg three times daily", "Up to 5 days", "Bronchospasm rarely"],
            ["Tranexamic acid oral", "500 mg-1 g three times daily", "5-7 days", "Avoid with past VTE"],
            ["Vitamin K + 4-factor PCC", "10 mg IV + 25-50 IU/kg IV", "Single dose", "Anaphylactoid reaction, thrombosis"],
            ["Protamine", "1 mg per 100 units heparin (max 50 mg)", "Single dose", "Hypotension, anaphylaxis"],
            ["Topical adrenaline", "1:20,000 via bronchoscope, small aliquots", "During bronchoscopy", "Arrhythmia if absorbed"],
            ["Itraconazole", "200 mg twice daily orally", "At least 6 months", "Liver injury, heart failure, rifampicin interaction"],
          ],
        },
        {
          heading: "Grading haemoptysis",
          columns: ["Grade", "Volume / features", "Where to treat"],
          rows: [
            ["Streaking", "Flecks in sputum", "OPD"],
            ["Mild", "Under 100 mL/24 h", "OPD or short stay"],
            ["Moderate", "100-600 mL/24 h", "Ward or HDU"],
            ["Massive", "600 mL or more, or 100-150 mL/h", "ICU"],
            ["Life-threatening", "Any volume with airway, SpO2 or BP compromise", "ICU, resuscitation"],
          ],
        },
        {
          heading: "Causes of haemoptysis and clues",
          columns: ["Cause", "Clue", "Key test"],
          rows: [
            ["Active TB", "Cough over 2 weeks, cavity", "Sputum NAAT"],
            ["Aspergilloma", "Old cavity, air-crescent sign", "CT, Aspergillus IgG"],
            ["Lung cancer", "Smoker 40 or over, weight loss", "CT, bronchoscopy"],
            ["Mitral stenosis", "Opening snap, AF, pregnancy", "Echocardiography"],
            ["Pulmonary embolism", "Pleuritic pain, DVT", "CT pulmonary angiography"],
            ["Alveolar haemorrhage", "Diffuse infiltrates, haematuria", "ANCA, anti-GBM, BAL"],
          ],
        },
      ],
      remember: [
        "Bleeding side down - always.",
        "Death is by asphyxia; dead space is about 150 mL.",
        "Bronchial arteries bleed in 90%; Rasmussen aneurysm is the pulmonary exception.",
        "Haemoptysis in India = sputum NAAT first.",
        "Normal CXR in a smoker over 40 still needs CT and bronchoscopy.",
        "BAE: commonest complication chest pain; feared one spinal cord ischaemia.",
        "Rusty = pneumococcus, red-currant jelly = Klebsiella, pink frothy = pulmonary oedema.",
      ],
    },
  },
  "respiratory-lung-cancer": {
    checked: "2026-10",
    updated: [
      "IASLC TNM 9th edition (2024, in use from 2025): N2a/N2b and M1c1/M1c2 introduced; T1N1 now IIA",
      "NCCN 2026: perioperative chemo-immunotherapy (nivolumab, pembrolizumab, durvalumab) standard for resectable stage II-III",
      "ALINA 2024: adjuvant alectinib 2 years for resected ALK-positive; LAURA 2024: osimertinib after chemoradiation in EGFR stage III",
      "ESMO 2023 living guideline: osimertinib plus chemotherapy (FLAURA2) or amivantamab-lazertinib (MARIPOSA) as first-line EGFR options",
      "ADRIATIC 2024: durvalumab consolidation after chemoradiation in limited-stage SCLC; tarlatamab for relapsed SCLC",
      "USPSTF 2021 (50-80 years, 20 pack-years, quit within 15 years) versus ACS 2023 (no years-since-quit limit)",
    ],
    master: {
      heading: "Master revision table - Lung cancer (TNM 9)",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Malignant epithelial tumour of airways/lung; **NSCLC 85%** (adenocarcinoma commonest), **SCLC 15%**; leading cause of cancer death worldwide."],
        ["India", "Younger, **mostly stage III-IV**, never-smokers and women common, **EGFR in about a quarter to a third** of adenocarcinomas; **TB misdiagnosis delay**; highest rates in Mizoram."],
        ["Risk factors", "Cigarette and **bidi**, second-hand smoke, **biomass and PM2.5**, asbestos (synergy), radon, silica, COPD, ILD, TB scar, HIV."],
        ["Types", "Adeno peripheral (TTF-1; EGFR, ALK); squamous central (p40; PTHrP, cavity); small cell central (neuroendocrine; SIADH, ACTH, LEMS)."],
        ["Clinical", "Cough, haemoptysis, non-resolving pneumonia, hoarseness, **SVCO**, **Pancoast with Horner**, bone pain, seizures, weight loss."],
        ["Paraneoplastic", "SCLC: **SIADH, ACTH, LEMS, anti-Hu**; squamous: **PTHrP**; adeno: **HPOA, Trousseau**; large cell: gynaecomastia."],
        ["Work-up", "CXR, **CECT chest + upper abdomen**, PET-CT, **MRI brain** (stage II-IV), biopsy giving diagnosis and highest stage (EBUS-TBNA), **NGS + PD-L1**, spirometry with DLCO."],
        ["TNM 9", "T unchanged (T1 3 cm or less, T2 3-5, T3 5-7, T4 over 7); **N2a single / N2b multiple stations**; **M1c1 one system / M1c2 multiple**; T1N1 now IIA."],
        ["Early stage", "Lobectomy or **segmentectomy (2 cm or less)**; SBRT if unfit; **adjuvant osimertinib 3 years** (EGFR) or **alectinib 2 years** (ALK)."],
        ["Stage III", "Resectable: **perioperative chemo-immunotherapy**; unresectable: **chemoradiation 60 Gy then durvalumab 12 months** (osimertinib if EGFR)."],
        ["Stage IV", "Driver: **osimertinib 80 mg OD**, alectinib 600 mg BD, lorlatinib; none: **pembrolizumab alone if PD-L1 50%+**, else platinum doublet + pembrolizumab."],
        ["SCLC", "Limited: **chemoradiation with platinum-etoposide**, then durvalumab, PCI or MRI surveillance; extensive: **carboplatin-etoposide + atezolizumab/durvalumab**."],
        ["Screening", "USPSTF 2021: **LDCT yearly, 50-80 years, 20 pack-years**, quit within 15 years; no Indian programme (TB false positives)."],
        ["Palliation and follow-up", "**Early palliative care** (Temel 2010); morphine for breathlessness; pleural catheter; bone protection; CT every 6 months for 2-3 years after cure."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Suspected lung cancer - diagnostic pathway",
        caption: "One biopsy should give both diagnosis and the highest stage.",
        steps: [
          { label: "Symptoms or abnormal CXR", detail: "Smoker 40+, haemoptysis, non-resolving pneumonia, ATT failure" },
          { label: "Sputum NAAT to exclude TB", detail: "Positive NAAT does not exclude coexisting cancer", tone: "decision" },
          { label: "CECT chest and upper abdomen", detail: "Primary, nodes, liver, adrenals" },
          { label: "Biopsy the highest-stage accessible site", detail: "Supraclavicular node, effusion, EBUS node, CT-guided or bronchoscopic biopsy" },
          { label: "Histology, NGS and PD-L1", detail: "EGFR, ALK, ROS1, BRAF, KRAS G12C, MET, RET, NTRK, HER2" },
          { label: "Stage with PET-CT and MRI brain", detail: "Tissue-confirm PET-positive nodes (TB false positives)", tone: "warn" },
          { label: "Multidisciplinary tumour board", detail: "Stage, ECOG PS, fitness (FEV1, DLCO), patient wishes", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "NSCLC - treatment by stage",
        caption: "Higher stage, more systemic therapy.",
        steps: [
          { label: "Stage I", detail: "Lobectomy or segmentectomy (2 cm or less); SBRT if unfit" },
          { label: "Stage II-IIIA resectable", detail: "Perioperative chemo-immunotherapy; adjuvant osimertinib or alectinib for drivers" },
          { label: "Stage III unresectable", detail: "Chemoradiation 60 Gy/30 fractions, then durvalumab 12 months (osimertinib if EGFR)" },
          { label: "Stage IV with driver", detail: "Osimertinib 80 mg OD, alectinib 600 mg BD, lorlatinib 100 mg OD", tone: "decision" },
          { label: "Stage IV, no driver", detail: "PD-L1 50%+: pembrolizumab alone; else platinum doublet plus pembrolizumab" },
          { label: "Best supportive and palliative care", detail: "ECOG 3-4 without driver; early palliative care for all stage IV", tone: "good" },
        ],
      },
      {
        kind: "compare",
        heading: "NSCLC versus SCLC",
        columns: ["Feature", "NSCLC", "SCLC"],
        rows: [
          ["Share", "About 85%", "About 15%"],
          ["Site", "Adeno peripheral, squamous central", "Central, hilar"],
          ["Paraneoplastic", "PTHrP (squamous), HPOA (adeno)", "SIADH, ACTH, LEMS, anti-Hu"],
          ["Drivers", "EGFR, ALK and others, targetable", "TP53, RB1; none targetable"],
          ["Staging used", "TNM 9", "TNM plus limited versus extensive"],
          ["Main treatment", "Surgery early; TKI or immunotherapy late", "Chemoradiation or chemo-immunotherapy"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Lung cancer** is the commonest cancer and leading cancer killer worldwide.",
            "**NSCLC** is about 85%; **adenocarcinoma** is now the commonest type.",
            "**SCLC** is about 15%, almost always in smokers, and spreads early.",
            "In India patients are younger and most present at **stage III-IV**.",
            "Many Indian patients first receive **ATT for presumed TB**, delaying diagnosis.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Cigarette and bidi smoking** cause most cases; risk rises with pack-years.",
            "**Biomass smoke and air pollution** explain many cancers in never-smoking women.",
            "**Asbestos** multiplies risk with smoking; radon, silica and arsenic also cause it.",
            "COPD, lung fibrosis and **old TB scars** raise risk.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Cough, **haemoptysis**, breathlessness, weight loss and non-resolving pneumonia.",
            "**Hoarseness** means left recurrent laryngeal nerve involvement.",
            "**Pancoast tumour**: shoulder and arm pain, hand wasting and **Horner syndrome**.",
            "**SVC obstruction**: facial swelling, non-pulsatile neck veins, chest wall veins.",
            "SCLC: **SIADH, ectopic ACTH, Lambert-Eaton**; squamous: **PTHrP hypercalcaemia**; adeno: **HPOA**.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "CXR, then **contrast CT chest and upper abdomen**.",
            "Biopsy the site that gives **diagnosis and highest stage** together.",
            "**EBUS-TBNA** samples mediastinal nodes; **PET-CT** and **MRI brain** complete staging.",
            "Test **EGFR, ALK and other drivers by NGS**, and **PD-L1**, in non-squamous NSCLC.",
            "Fitness: **ppoFEV1 and DLCO over 60%** fit; under 30% needs CPET.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**TNM 9** keeps T1 3 cm or less, T2 3-5, T3 5-7, T4 over 7 cm.",
            "**N2a** is one mediastinal station; **N2b** is several stations.",
            "**M1c1** is many metastases in one organ system; **M1c2** in several systems.",
            "SCLC is also split into **limited and extensive** stage for treatment.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Stage I: **lobectomy**, or segmentectomy for 2 cm or less; **SBRT** if unfit.",
            "Resectable stage II-III: **chemo-immunotherapy** before and after surgery.",
            "Unresectable stage III: **chemoradiation then durvalumab** for 12 months.",
            "Stage IV EGFR: **osimertinib 80 mg daily**; ALK: **alectinib 600 mg twice daily**.",
            "Stage IV, no driver: **pembrolizumab**, alone if PD-L1 50% or more.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "SCLC limited: **platinum-etoposide with radiotherapy**, then durvalumab.",
            "SCLC extensive: **carboplatin-etoposide plus atezolizumab or durvalumab**.",
            "**Early palliative care** improves quality of life and survival.",
            "Bone metastases: single **8 Gy** radiotherapy and zoledronic acid.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**SVC obstruction**: biopsy before steroids; stent for stridor.",
            "**Cord compression**: dexamethasone 16 mg and MRI spine the same day.",
            "**Hypercalcaemia** and **SIADH** cause confusion and seizures.",
            "Immunotherapy can cause **pneumonitis, colitis and thyroiditis**; treat with steroids.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Refer within **2 weeks** for a suspicious CXR or unexplained haemoptysis at 40 or over.",
            "After curative treatment, **CT every 6 months for 2-3 years**, then yearly.",
            "**USPSTF 2021 screening**: LDCT yearly at 50-80 years with 20 pack-years.",
            "India has no LDCT programme; focus on **tobacco cessation** and clean fuel.",
          ],
        },
      ],
      tables: [
        {
          heading: "Lung cancer drugs",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Osimertinib", "80 mg orally once daily", "Until progression; adjuvant 3 years", "Diarrhoea, rash, QT prolongation, ILD"],
            ["Gefitinib", "250 mg orally once daily", "Until progression", "Rash, diarrhoea, hepatitis; rifampicin interaction"],
            ["Alectinib", "600 mg orally twice daily", "Until progression; adjuvant 2 years", "Myalgia, raised CK, bradycardia"],
            ["Pembrolizumab", "200 mg IV every 3 weeks", "Up to 2 years", "Immune pneumonitis, colitis, thyroiditis"],
            ["Durvalumab", "1500 mg IV every 4 weeks", "12 months after chemoradiation", "Pneumonitis, immune events"],
            ["Carboplatin + pemetrexed", "AUC 5 + 500 mg/m2 IV every 3 weeks", "4 cycles then maintenance", "Myelosuppression; folate and B12 needed"],
            ["Platinum + etoposide (SCLC)", "Etoposide 100 mg/m2 days 1-3, every 3 weeks", "4 cycles", "Myelosuppression, nephrotoxicity"],
          ],
        },
        {
          heading: "TNM 9 stage groups",
          columns: ["Stage", "Examples", "Intent"],
          rows: [
            ["IA", "T1 N0", "Surgery or SBRT"],
            ["IIA", "T2b N0, T1 N1", "Surgery plus systemic therapy"],
            ["IIB", "T2 N1, T3 N0, T1 N2a", "Perioperative therapy and surgery"],
            ["IIIA-IIIC", "N2b, N3, T4 disease", "Chemoradiation or multimodality"],
            ["IVA", "M1a, M1b", "Systemic therapy"],
            ["IVB", "M1c1, M1c2", "Systemic therapy and palliation"],
          ],
        },
        {
          heading: "Paraneoplastic syndromes by type",
          columns: ["Syndrome", "Mediator", "Histology"],
          rows: [
            ["SIADH", "ADH", "Small cell"],
            ["Cushing syndrome", "Ectopic ACTH", "Small cell, carcinoid"],
            ["Hypercalcaemia", "PTHrP", "Squamous cell"],
            ["Lambert-Eaton", "Anti-VGCC antibody", "Small cell"],
            ["HPOA and clubbing", "VEGF, PDGF", "Adenocarcinoma"],
            ["Gynaecomastia", "hCG", "Large cell"],
          ],
        },
      ],
      remember: [
        "Squamous: central, cavitates, causes hypercalcaemia (PTHrP).",
        "Small cell: SIADH, ACTH, LEMS - and the most chemosensitive.",
        "TNM 9 news: N2a/N2b and M1c1/M1c2.",
        "Driver first, PD-L1 second: test EGFR and ALK before immunotherapy.",
        "PET-positive node in India may be TB - get tissue.",
        "No steroids before biopsy in SVCO.",
        "USPSTF 2021: 50-80 years, 20 pack-years, quit within 15 years.",
      ],
    },
  },
};

export default revision;
