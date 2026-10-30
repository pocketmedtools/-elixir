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
};

export default revision;
