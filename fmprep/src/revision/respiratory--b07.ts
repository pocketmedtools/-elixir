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
};

export default revision;
