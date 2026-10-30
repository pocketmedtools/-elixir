import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "respiratory-occupational-lung": {
    checked: "2026-10",
    updated: [
      "ILO International Classification of Radiographs of Pneumoconioses, revised 2022 (digital standard images)",
      "Labour Codes in force November 2025: OSH Code 2020 and Code on Social Security 2020 replace Factories, Mines, EC and ESI Acts",
      "Engineered stone silicosis: Australian ban from 1 July 2024",
      "ATS/ERS/JRS/ALAT 2022 progressive pulmonary fibrosis: nintedanib for progressive fibrotic pneumoconiosis",
      "NTEP TPT 2021 and 2023 modules: silicosis a high-risk group for TB screening and 3HP",
    ],
    master: {
      heading: "Occupational lung disease on one page",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Pneumoconiosis = mineral dust retained in lung plus tissue reaction; byssinosis = cotton-dust airway disease"],
        ["Indian burden", "About 10 million at silica risk (NIOH); stone crushing, sandstone, agate (Khambhat), slate pencil (Mandsaur)"],
        ["Pathogenesis", "Macrophage, NLRP3, IL-1beta, TGF-beta, fibroblast, silicotic nodule; asbestos frustrated phagocytosis"],
        ["Silicosis types", "Chronic over 10 years, accelerated 5-10 years, acute silicoproteinosis under 5 years"],
        ["Radiology", "Silica/coal: upper rounded p/q/r, eggshell nodes; asbestos: lower irregular s/t/u, pleural plaques"],
        ["ILO", "Profusion 0/- to 3/+; 1/0 or more positive; large opacity over 10 mm = PMF A/B/C"],
        ["Byssinosis", "Monday chest tightness, Schilling grades 1/2 to 3, cross-shift FEV1 fall"],
        ["Key complication", "Silicotuberculosis - CBNAAT, culture, standard NTEP regimen, TPT 3HP"],
        ["Treatment", "Remove from exposure, stop smoking, vaccines, bronchodilators, rehab, LTOT, nintedanib if progressive, transplant"],
        ["Asbestos cancers", "Lung cancer about 50-fold with smoking; mesothelioma latency 30-40 years"],
        ["Prevention", "Substitution, wet methods, exhaust ventilation, fit-tested respirators, periodic X-ray"],
        ["Legal", "Notifiable (Factories Act s.89, Mines Act; now OSH Code 2020); compensation EC Act, ESI (now Social Security Code)"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Dust worker with an abnormal chest X-ray",
        steps: [
          { label: "Detailed occupational history", detail: "Job, material, dry or wet, years, mask, co-workers" },
          { label: "PA chest X-ray read by ILO", detail: "Profusion 1/0 or more; large opacity over 10 mm = PMF" },
          { label: "Fever, weight loss or changing X-ray?", tone: "decision", detail: "Sputum CBNAAT and culture" },
          { label: "Silicotuberculosis: start NTEP regimen", tone: "warn", detail: "HRZE 2 months, HRE 4 months" },
          { label: "Spirometry, DLCO, HRCT, echo as needed", detail: "Restrictive or mixed; low DLCO" },
          { label: "Certify, notify, refer to pneumoconiosis board", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Management ladder for pneumoconiosis",
        steps: [
          { label: "Remove from exposure and stop smoking", tone: "good" },
          { label: "Vaccinate and screen for TB every visit", detail: "Influenza yearly, pneumococcal; TPT 3HP if latent TB" },
          { label: "Bronchodilators for airflow obstruction", detail: "LAMA or LABA-LAMA" },
          { label: "Pulmonary rehabilitation and LTOT", detail: "LTOT if PaO2 55 mmHg or less" },
          { label: "Nintedanib if progressive fibrosis", detail: "150 mg twice daily, specialist" },
          { label: "Whole-lung lavage or lung transplant", tone: "warn", detail: "Acute silicoproteinosis or end-stage" },
        ],
      },
      {
        kind: "compare",
        heading: "Silicosis vs asbestosis vs byssinosis",
        columns: ["Feature", "Silicosis", "Asbestosis", "Byssinosis"],
        rows: [
          ["Zone", "Upper", "Lower", "Airways"],
          ["Opacities", "Rounded p/q/r", "Irregular s/t/u, plaques", "None"],
          ["Function", "Restrictive or mixed", "Restrictive, low DLCO", "Obstructive"],
          ["Big risk", "TB", "Lung cancer, mesothelioma", "Fixed COPD"],
          ["Clue", "Eggshell nodes", "Clubbing, Velcro crackles", "Monday chest tightness"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Pneumoconiosis** is mineral dust retained in the lung plus the tissue reaction to it.",
            "Fibrogenic dusts are **silica, coal and asbestos**; iron, tin and barium are benign.",
            "**Byssinosis** is airway narrowing from cotton, flax or hemp dust.",
            "India has about **10 million workers** at risk of silica exposure (ICMR-NIOH).",
            "All are **notifiable** and **compensable** occupational diseases.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Respirable particles** of 0.5-5 micrometres reach the alveoli.",
            "Silica jobs: **stone crushing, sandstone mining, agate, slate pencil**, foundry, glass, engineered stone.",
            "Asbestos: **AC sheet factories, ship-breaking**, brake linings; amphiboles most carcinogenic.",
            "Byssinosis: textile **blowing and carding rooms**; endotoxin is the main agent.",
            "**Smoking** multiplies asbestos cancer risk and adds COPD.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Silica kills **macrophages** via NLRP3; IL-1beta and TGF-beta drive fibroblasts.",
            "The **silicotic nodule** is whorled hyalinised collagen in upper zones and hilar nodes.",
            "Damaged macrophages cannot kill TB, so **silicotuberculosis** is common.",
            "Asbestos fibres cause **frustrated phagocytosis** and lower-lobe subpleural fibrosis.",
            "Silicosis **keeps progressing** after exposure stops.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "Silicosis: **chronic** over 10 years, **accelerated** 5-10 years, **acute** under 5 years.",
            "ILO small opacities: rounded **p, q, r**; irregular **s, t, u**.",
            "ILO profusion **1/0 or more** counts as pneumoconiosis.",
            "**PMF** is a large opacity over 10 mm, graded A, B, C.",
            "Byssinosis **Schilling grades** 0, 1/2, 1, 2, 3.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Simple silicosis is often **asymptomatic** with a normal chest examination.",
            "PMF gives breathlessness, cough and later **cor pulmonale**.",
            "Asbestosis: **Velcro crackles** and clubbing in about one-third.",
            "Byssinosis: **Monday chest tightness**, easing through the week.",
            "Coal miner with black sputum: **melanoptysis** from cavitating PMF.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**ILO-read PA chest X-ray** with the occupational history is the diagnosis.",
            "**HRCT** shows perilymphatic nodules, eggshell nodes or calcified pleural plaques.",
            "**Spirometry**: restrictive with low DLCO; byssinosis shows cross-shift FEV1 fall.",
            "**Sputum CBNAAT and culture** in every silicosis patient with symptoms.",
            "Echo for pulmonary hypertension in advanced disease.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Remove from exposure** - no drug reverses fibrosis.",
            "**Stop smoking**, vaccinate against influenza and pneumococcus.",
            "**Inhaled bronchodilators** for airflow obstruction.",
            "**TPT with 3HP** for latent TB; NTEP regimen for active TB.",
            "Pulmonary rehabilitation and **LTOT** when PaO2 is 55 mmHg or less.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Admit for **haemoptysis, hypoxaemia, cor pulmonale** or pneumothorax.",
            "**Controlled oxygen** to 88-92% if hypercapnic.",
            "**Whole-lung lavage** for acute silicoproteinosis in a specialist centre.",
            "**Nintedanib** for progressive fibrosis; transplant referral for end-stage disease.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "Silicosis: **TB**, PMF, cor pulmonale, lung cancer, systemic sclerosis, CKD.",
            "Asbestos plus smoking: about **50-fold** lung cancer risk.",
            "New effusion or chest pain after asbestos: think **mesothelioma**.",
            "**Caplan syndrome**: RA with pneumoconiosis nodules.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Refer to a **pneumoconiosis board** or NIOH for certification.",
            "**Notify** under Factories or Mines Act, now the OSH Code 2020.",
            "Compensation under **EC Act and ESI**, now the Code on Social Security 2020.",
            "Review **3-6 monthly** for TB; spirometry and X-ray yearly.",
            "Rajasthan Policy 2019 pays a lump sum on **certification** and on death.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drug table",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["3HP (isoniazid + rifapentine)", "Weekly weight-band oral dose; over 50 kg H 900 mg + P 900 mg", "12 weekly doses", "Flu-like reaction, hepatitis; exclude active TB"],
            ["HRZE FDC", "Weight-banded oral daily", "2 months HRZE, 4 months HRE", "Hepatitis, optic neuritis, gout"],
            ["Tiotropium", "18 microgram inhaled once daily", "Long term", "Dry mouth, urinary retention"],
            ["Nintedanib", "150 mg orally twice daily", "Long term with LFT monitoring", "Diarrhoea, hepatitis, bleeding"],
            ["Varenicline", "Titrate to 1 mg orally twice daily", "12 weeks", "Nausea, vivid dreams"],
          ],
        },
        {
          heading: "Differential on the X-ray",
          columns: ["Condition", "Zone", "Clue"],
          rows: [
            ["Silicosis", "Upper", "Eggshell nodes, stable, dust history"],
            ["Pulmonary TB", "Upper", "Fever, cavities, CBNAAT positive"],
            ["Sarcoidosis", "Upper/mid", "Symmetric hilar nodes, uveitis, no dust"],
            ["Asbestosis", "Lower", "Pleural plaques, clubbing"],
            ["IPF", "Lower", "Honeycombing, no plaques, no exposure"],
          ],
        },
        {
          heading: "ILO classification",
          columns: ["Element", "Codes", "Meaning"],
          rows: [
            ["Rounded small", "p, q, r", "Under 1.5, 1.5-3, 3-10 mm"],
            ["Irregular small", "s, t, u", "Same sizes, linear"],
            ["Profusion", "0/- to 3/+", "1/0 or more is positive"],
            ["Large", "A, B, C", "Over 10 mm; C exceeds right upper zone"],
          ],
        },
      ],
      remember: [
        "Upper zone: silicosis, coal, berylliosis; lower zone: asbestosis.",
        "Eggshell calcification = silicosis until proved otherwise.",
        "Commonest asbestos finding = pleural plaques; earliest = benign effusion.",
        "Crocidolite (blue) is the most mesotheliomagenic fibre.",
        "Caplan = RA + pneumoconiosis; Erasmus = silica + scleroderma.",
        "Monday chest tightness = byssinosis.",
        "Name it, notify it, certify it - the family gets compensation.",
      ],
    },
  },
  "respiratory-pneumothorax": {
    checked: "2026-10",
    updated: [
      "BTS Pleural Disease Guideline 2023: management by symptoms and high-risk features, not size",
      "BTS 2023: conservative management for minimally symptomatic PSP (PSP trial 2020)",
      "BTS 2023: ambulatory pleural vent as an option (RAMPP 2020); surgery may be offered after first PSP",
      "BTS 2023: autologous blood patch and endobronchial valves for persistent air leak",
      "ATLS 10th edition: adult needle decompression at 4th/5th ICS anterior to mid-axillary line",
    ],
    master: {
      heading: "Pneumothorax on one page",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Air in pleural space; PSP, SSP, traumatic, iatrogenic; tension = one-way valve with shock"],
        ["PSP", "Tall thin young male smokers, apical blebs; recurrence about 30%"],
        ["SSP", "COPD, TB (India), ILD, PCP, CF, LAM, BHD, catamenial"],
        ["Symptoms", "Sudden pleuritic pain and breathlessness; SSP more breathless"],
        ["Signs", "Reduced expansion, hyper-resonance, absent breath sounds and vocal resonance"],
        ["Tension signs", "Hypotension, raised JVP, tachycardia, late tracheal deviation"],
        ["Imaging", "Erect PA CXR; ultrasound lung point; CT for bulla vs pneumothorax"],
        ["Size", "2 cm interpleural at hilum = large (BTS 2010) - no longer drives treatment"],
        ["BTS 2023 PSP", "Minimal symptoms: conservative; symptomatic: aspiration, ambulatory vent or small drain"],
        ["BTS 2023 SSP", "Admit; small-bore drain 14F or less; controlled oxygen"],
        ["Tension", "Decompress 4th/5th ICS anterior to MAL (child 2nd ICS MCL), then drain"],
        ["Persistent leak", "3-5 days: thoracic surgery; blood patch or valves if unfit"],
        ["Recurrence prevention", "VATS bullectomy + pleurectomy; talc if unfit; stop smoking"],
        ["Advice", "No flying until resolved; no diving unless bilateral pleurectomy"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "BTS 2023 approach to spontaneous pneumothorax",
        steps: [
          { label: "Tension physiology?", tone: "decision", detail: "Hypotension, hypoxia, raised JVP" },
          { label: "Yes: decompress now, then chest drain", tone: "warn", detail: "Adult 4th/5th ICS anterior to MAL" },
          { label: "No: symptomatic or high-risk features?", tone: "decision", detail: "Instability, hypoxia, bilateral, lung disease, 50+ smoker" },
          { label: "PSP, minimal symptoms: conservative", tone: "good", detail: "Review in 2-4 days" },
          { label: "PSP symptomatic: aspiration or ambulatory vent", detail: "Aspirate up to 2.5 L; drain if it fails" },
          { label: "SSP: admit and small-bore drain", detail: "14F or less; oxygen 88-92% if hypercapnic" },
          { label: "Persistent leak 3-5 days: surgical referral", tone: "warn" },
        ],
      },
      {
        kind: "ladder",
        heading: "Escalation of intervention",
        steps: [
          { label: "Conservative observation", tone: "good", detail: "Minimal symptoms PSP" },
          { label: "Needle aspiration", detail: "16-18G cannula, stop at 2.5 L" },
          { label: "Ambulatory pleural vent", detail: "PSP, specialist pathway" },
          { label: "Small-bore Seldinger chest drain", detail: "Underwater seal, no routine suction" },
          { label: "Blood patch or endobronchial valve", detail: "Persistent leak, unfit for surgery" },
          { label: "VATS bullectomy and pleurectomy", tone: "warn", detail: "Recurrence under 5%" },
        ],
      },
      {
        kind: "compare",
        heading: "Pneumothorax vs massive effusion vs giant bulla",
        columns: ["Feature", "Pneumothorax", "Massive effusion", "Giant bulla"],
        rows: [
          ["Percussion", "Hyper-resonant", "Stony dull", "Hyper-resonant"],
          ["Trachea", "Away if tension", "Away", "Usually central"],
          ["X-ray edge", "Visceral pleural line parallel to wall", "Meniscus", "Concave inner margin, septa"],
          ["Key test", "Ultrasound lung point", "Ultrasound fluid", "CT"],
          ["Do not", "Clamp bubbling drain", "Drain over 1.5 L at once", "Insert a drain"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Pneumothorax** is air in the pleural space with lung collapse.",
            "**PSP** has no known lung disease; **SSP** has underlying lung disease.",
            "**Tension** is a one-way valve causing obstructive shock.",
            "PSP recurrence is about **30%**, mostly in the first year.",
            "In India **TB and COPD** are the main causes of SSP.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Smoking** is the strongest modifiable risk for PSP.",
            "Apical **blebs and bullae** in tall thin young men.",
            "SSP: **COPD, TB**, ILD, PCP in HIV, cystic fibrosis.",
            "Cystic diseases: **LAM, Birt-Hogg-Dube**, Langerhans cell histiocytosis.",
            "**Iatrogenic**: lung biopsy, central lines, thoracocentesis, ventilation.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "**Sudden pleuritic pain** and breathlessness, often at rest.",
            "Signs: **hyper-resonance**, reduced breath sounds and vocal resonance.",
            "Tension: **hypotension, raised JVP**, tachycardia, late tracheal shift.",
            "Ventilated patient: **rising airway pressure** and falling SpO2.",
            "**Hamman's sign**: crunch with heartbeat in left pneumothorax.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Erect PA chest X-ray**; expiratory films not needed.",
            "Ultrasound: **absent sliding, barcode sign, lung point**.",
            "**CT** separates giant bulla from pneumothorax.",
            "**Tension is clinical** - never wait for an X-ray.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "BTS 2023: decide by **symptoms and high-risk features**, not size.",
            "Minimal-symptom PSP: **conservative**, review in 2-4 days.",
            "Symptomatic PSP: **needle aspiration** or ambulatory vent.",
            "SSP: **admit** and small-bore drain 14F or less.",
            "Oxygen to **94-98%**, or 88-92% if hypercapnic risk.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Tension: decompress at **4th/5th ICS anterior to MAL** in adults.",
            "Children: **2nd ICS midclavicular** line.",
            "Drain in the **triangle of safety**; underwater seal.",
            "**Never clamp** a bubbling drain; avoid early suction.",
            "Persistent leak at **3-5 days**: thoracic surgery referral.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: aspiration first, early epidural, assisted second stage.",
            "**Catamenial**: VATS diaphragm repair plus hormonal suppression.",
            "**HIV with PCP**: often bilateral, persistent leak.",
            "**Divers**: no diving unless bilateral surgical pleurectomy.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**Tension** and cardiac arrest - a reversible cause in ALS.",
            "**Re-expansion pulmonary oedema** after rapid re-expansion.",
            "**Haemopneumothorax**, empyema, surgical emphysema.",
            "Bilateral pneumothorax or hypoxaemia means **admit**.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Clinic review at **2-4 weeks** to confirm resolution.",
            "**Stop smoking** to cut recurrence.",
            "**No flying** until radiological resolution.",
            "Surgery after **second episode**, bilateral, persistent leak or high-risk job.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**BTS 2023** replaced the 2010 size-based algorithm.",
            "**PSP trial 2020** supports conservative care.",
            "**RAMPP 2020** supports ambulatory vents.",
            "Surgery may be offered after a **first PSP** by choice.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drug table",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Oxygen", "Titrate to SpO2 94-98% (88-92% hypercapnic risk)", "Until hypoxaemia resolves", "CO2 retention in COPD"],
            ["Paracetamol", "1 g orally or IV 6-hourly, max 4 g/day", "As needed", "Liver toxicity"],
            ["Lidocaine 1%", "Up to 3 mg/kg local infiltration", "Single procedure", "Seizures, arrhythmia in overdose"],
            ["Sterile talc", "4-5 g slurry or poudrage", "Once", "Pain, fever"],
            ["Autologous blood patch", "50-100 mL via drain", "Repeat once if needed", "Infection, drain block"],
          ],
        },
        {
          heading: "PSP vs SSP",
          columns: ["Feature", "PSP", "SSP"],
          rows: [
            ["Age", "15-35", "Over 50"],
            ["Lung", "Normal apart from blebs", "COPD, TB, ILD"],
            ["Symptoms", "Mild", "Severe, hypoxic"],
            ["Default care", "Conservative or aspiration", "Admit, drain"],
            ["Recurrence", "About 30%", "40% or more"],
          ],
        },
        {
          heading: "High-risk characteristics (BTS 2023)",
          columns: ["Feature", "Why it matters"],
          rows: [
            ["Haemodynamic instability", "Possible tension"],
            ["Significant hypoxia", "Little reserve"],
            ["Bilateral", "Both lungs compromised"],
            ["Underlying lung disease", "Secondary pneumothorax"],
            ["Age 50+ with smoking", "Treat as secondary"],
            ["Haemopneumothorax", "Bleeding source"],
          ],
        },
      ],
      remember: [
        "Treat the patient, not the X-ray (BTS 2023).",
        "Tension is clinical - decompress first.",
        "Adult decompression: 4th/5th ICS anterior to mid-axillary line.",
        "Triangle of safety: lat dorsi, pec major, 5th ICS, axilla apex.",
        "Never clamp a bubbling drain.",
        "Lung point = 100% specific.",
        "Over 50 and smoker = secondary pneumothorax.",
      ],
    },
  },
};

export default revision;
