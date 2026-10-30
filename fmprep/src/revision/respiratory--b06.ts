import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "respiratory-ild-ipf": {
    checked: "2026-10",
    updated: [
      "ATS/ERS/JRS/ALAT 2022: progressive pulmonary fibrosis defined; nintedanib suggested for PPF",
      "ATS/ERS/JRS/ALAT 2022: probable UIP can support IPF without biopsy; TBLC accepted; anti-reflux therapy not advised",
      "FIBRONEER-IPF and FIBRONEER-ILD (NEJM 2025): nerandomilast 18 mg BD slowed FVC decline; FDA approval for IPF 2025",
      "PACIFY 2023: low-dose morphine for IPF cough",
      "ISHLT 2021 lung transplant referral criteria",
    ],
    master: {
      heading: "ILD approach and IPF on one page",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "ILD: 200+ disorders of interstitium, restriction, low DLCO; IPF: fibrosing IIP of older adults with UIP pattern, cause unknown"],
        ["India", "ILD-India registry 2017: HP 47%, CTD-ILD 14%, IPF 14%; often misdiagnosed as TB"],
        ["Cause history", "Occupation/environment (birds, coolers, mould), drugs, CTD, smoking, family history"],
        ["Pathogenesis", "Repeated epithelial injury, aberrant repair, TGF-beta, myofibroblasts, fibroblast foci; MUC5B, telomere genes"],
        ["Classification", "Known cause; IIPs (IPF, NSIP, RB-ILD, DIP, COP, AIP, LIP, PPFE); granulomatous; others (LAM, PLCH, PAP)"],
        ["Clinical", "Man over 60, ex-smoker, dry cough, exertional dyspnoea; velcro crackles; clubbing 25-50%"],
        ["HRCT 2022", "UIP, probable UIP, indeterminate, alternative diagnosis"],
        ["Tests", "Spirometry (low FVC, normal ratio), DLCO low, 6MWT, serology, BAL (lymphocytes over 30% against IPF), TBLC, MDD"],
        ["Antifibrotics", "Nintedanib 150 mg BD; pirfenidone 801 mg TDS after titration; nerandomilast 18 mg BD (USA 2025)"],
        ["Supportive", "Rehab, oxygen, vaccines, stop smoking, morphine for cough, palliative care"],
        ["Avoid", "Prednisolone-azathioprine-NAC, warfarin, ambrisentan, routine anti-reflux therapy"],
        ["AE-IPF", "New bilateral GGO under 1 month; exclude infection/PE/HF; oxygen, antibiotics, steroids; no cyclophosphamide; mortality about 50%"],
        ["PPF", "Non-IPF fibrotic ILD, 2 of 3 in a year: symptoms, FVC fall 5% or DLCO fall 10%, scan worse; nintedanib"],
        ["Prognosis and referral", "Median survival 3-5 years; GAP index; transplant referral at diagnosis or FVC under 80%/DLCO under 40%"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Diagnostic flow for suspected ILD",
        steps: [
          { label: "Breathless, dry cough, velcro crackles, low DLCO", tone: "neutral" },
          { label: "Cause history: exposure, drugs, CTD, smoking, family", detail: "Birds, coolers, mould, amiodarone, MTX, Raynaud", tone: "decision" },
          { label: "HRCT with prone and expiratory images", detail: "UIP / probable UIP / indeterminate / alternative" },
          { label: "Serology and exclude TB", detail: "ANA, RF, anti-CCP, myositis panel; sputum CBNAAT" },
          { label: "BAL or cryobiopsy if HRCT not diagnostic", detail: "BAL lymphocytes over 30% favours HP, sarcoid, NSIP" },
          { label: "Multidisciplinary discussion", detail: "Final diagnosis and confidence", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Management ladder in IPF",
        steps: [
          { label: "Confirm IPF at MDD; stop smoking; vaccinate", tone: "neutral" },
          { label: "Start antifibrotic early", detail: "Nintedanib 150 mg BD or pirfenidone 801 mg TDS", tone: "good" },
          { label: "Rehabilitation, ambulatory oxygen, cough control", detail: "Morphine 5 mg BD for cough; O2 if SpO2 under 88%" },
          { label: "Screen comorbidity: PH, OSA, lung cancer, depression", tone: "decision" },
          { label: "Transplant referral if eligible", detail: "FVC under 80%, DLCO under 40%, any decline" },
          { label: "Palliative care and advance planning", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "Nintedanib versus pirfenidone",
        columns: ["Feature", "Nintedanib", "Pirfenidone"],
        rows: [
          ["Mechanism", "Tyrosine kinase inhibitor (PDGFR, FGFR, VEGFR)", "Anti-TGF-beta, antifibroblast"],
          ["Dose", "150 mg BD with food", "801 mg TDS with food after 2-week titration"],
          ["Main side effects", "Diarrhoea, raised ALT, bleeding", "Nausea, anorexia, photosensitive rash, raised ALT"],
          ["Use in PPF", "Yes (INBUILD; 2022 guideline)", "Insufficient evidence"],
          ["Key caution", "Pregnancy, anticoagulants, Child-Pugh B/C", "Fluvoxamine, CrCl under 30, sun exposure"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**ILD** is a group of over 200 disorders scarring or inflaming the alveolar walls.",
            "**IPF** is fibrosing interstitial pneumonia of unknown cause in older adults with a **UIP pattern**.",
            "Untreated IPF has a **median survival of 3-5 years**.",
            "In India **hypersensitivity pneumonitis is the commonest ILD** (about 47%, ILD-India registry).",
            "ILD is often **misdiagnosed as TB** in India.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "Ask about **exposures, drugs, CTD, smoking and family history** in every ILD.",
            "IPF risk: **age over 60, male sex, smoking**, metal and wood dust.",
            "**MUC5B promoter variant** and **telomere gene mutations** raise IPF risk.",
            "Indian exposures: **pigeons, feather pillows, desert air coolers** and damp walls.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Repeated **epithelial injury with failed repair** drives fibrosis, not inflammation.",
            "**TGF-beta** turns fibroblasts into myofibroblasts forming **fibroblast foci**.",
            "Stiff lungs give **low FVC and TLC** with a normal or high FEV1/FVC.",
            "A thick membrane lowers **DLCO**, causing **exertional desaturation**.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Insidious **exertional breathlessness** and **dry cough** for months.",
            "**Fine bibasal velcro crackles** are heard in over 90% of IPF.",
            "**Clubbing** in 25-50% of IPF; rare in sarcoidosis and HP.",
            "Look for **Raynaud, skin thickening, synovitis and mechanic's hands** to find hidden CTD.",
            "Loud P2, raised JVP and oedema signal **pulmonary hypertension**.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**HRCT with prone and expiratory images** is the key test.",
            "Spirometry shows **restriction**; **DLCO** is the most sensitive test.",
            "**6MWT desaturation below 88%** predicts mortality.",
            "Serology: **ANA, RF, anti-CCP** and myositis panel for every new ILD.",
            "**BAL lymphocytes over 30%** argue against IPF.",
            "**Cryobiopsy** is accepted instead of surgical biopsy in expert centres.",
            "Final diagnosis is made at **multidisciplinary discussion**.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Offer an **antifibrotic** to every IPF patient: nintedanib or pirfenidone.",
            "Antifibrotics **halve the FVC decline** but do not reverse scarring.",
            "Add **pulmonary rehabilitation, oxygen, vaccines** and smoking cessation.",
            "**Low-dose morphine 5 mg BD** helps refractory IPF cough (PACIFY 2023).",
            "**Never** give prednisolone-azathioprine-NAC; it increased deaths.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "**AE-IPF**: new bilateral ground-glass on UIP within one month.",
            "Exclude **infection, PE and heart failure** first.",
            "Give oxygen or **high-flow nasal oxygen**, antibiotics and steroids.",
            "**Cyclophosphamide is not recommended**; it raised mortality in EXAFIP.",
            "In-hospital mortality is about **50%**; avoid intubation unless bridging to transplant.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: nintedanib is contraindicated; use contraception.",
            "**CrCl under 30**: avoid pirfenidone.",
            "**Child-Pugh B or C**: avoid nintedanib.",
            "On **anticoagulants**: use nintedanib with caution due to bleeding risk.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Review **every 3-6 months** with FVC, DLCO, 6MWT and LFT.",
            "Refer for **transplant** early: FVC under 80% or DLCO under 40%.",
            "Use the **GAP index** for prognosis.",
            "Start **palliative care** early alongside active treatment.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**ATS/ERS/JRS/ALAT 2022** defined progressive pulmonary fibrosis and backed nintedanib for it.",
            "Probable UIP can confirm **IPF without biopsy** after MDD.",
            "**Nerandomilast 18 mg BD** slowed FVC decline in IPF and PPF (NEJM 2025).",
            "**Anti-reflux treatment** is no longer advised to improve IPF outcomes.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in IPF and PPF",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Nintedanib", "150 mg oral BD with food", "Lifelong", "Diarrhoea, raised ALT, bleeding; not in pregnancy"],
            ["Pirfenidone", "801 mg oral TDS after 2-week titration", "Lifelong", "Nausea, photosensitivity, raised ALT; avoid fluvoxamine"],
            ["Nerandomilast", "18 mg oral BD", "Long term", "Diarrhoea, weight loss; new in 2025"],
            ["Morphine CR", "5 mg oral BD", "Review in 2-4 weeks", "Constipation, drowsiness"],
            ["Methylprednisolone (AE-IPF)", "500-1,000 mg IV daily x 3 days", "Then oral taper", "Hyperglycaemia, infection"],
          ],
        },
        {
          heading: "HRCT categories (2022)",
          columns: ["Category", "Key features", "Action"],
          rows: [
            ["UIP", "Basal subpleural honeycombing, traction bronchiectasis", "IPF if no cause; no biopsy"],
            ["Probable UIP", "Same distribution, no honeycombing", "IPF at MDD in right context"],
            ["Indeterminate", "Subtle reticulation, mild GGO", "BAL and biopsy"],
            ["Alternative", "Cysts, mosaic, nodules, upper-zone", "Think HP, sarcoid, NSIP"],
          ],
        },
        {
          heading: "IPF versus its mimics",
          columns: ["Disease", "Clue", "Test"],
          rows: [
            ["IPF", "Old male ex-smoker, clubbing", "UIP on HRCT, negative serology"],
            ["Fibrotic HP", "Bird or cooler exposure", "Mosaic attenuation, BAL lymphocytosis"],
            ["CTD-ILD", "Young woman, Raynaud", "ANA, Scl-70, myositis panel"],
            ["Asbestosis", "Construction or shipyard work", "Pleural plaques"],
            ["Heart failure", "Orthopnoea, oedema", "NT-proBNP, echo"],
          ],
        },
      ],
      remember: [
        "**Velcro crackles + clubbing + old male = IPF** until proved otherwise.",
        "**IPF: failed repair, not inflammation** - steroids harm.",
        "**Nintedanib: diarrhoea. Pirfenidone: photosensitivity.**",
        "**PPF 2 of 3 in a year: Symptoms, Spirometry, Scan.**",
        "**India: HP more common than IPF** - ask about birds and coolers.",
        "**Cyclophosphamide in AE-IPF raised mortality** (EXAFIP).",
        "**DLCO falls first**; FEV1/FVC stays normal or high.",
      ],
    },
  },
};

export default revision;
