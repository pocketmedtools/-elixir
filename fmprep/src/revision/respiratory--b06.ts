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
  "respiratory-hypersensitivity-pneumonitis": {
    checked: "2026-10",
    updated: [
      "ATS/JRS/ALAT 2020: non-fibrotic vs fibrotic HP replaces acute/subacute/chronic",
      "ATS/JRS/ALAT 2020: HRCT typical/compatible/indeterminate and diagnostic confidence levels",
      "CHEST 2021 HP diagnosis guideline",
      "ATS/ERS/JRS/ALAT 2022: progressive fibrotic HP managed as PPF with nintedanib",
      "FIBRONEER-ILD 2025: nerandomilast effective in PPF including fibrotic HP",
    ],
    master: {
      heading: "Hypersensitivity pneumonitis on one page",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Immune-mediated ILD from inhaled antigen in a sensitised host"],
        ["India", "Commonest ILD (about 47%, ILD-India registry); birds and air coolers"],
        ["Antigens", "Avian proteins, moulds, thermophilic actinomycetes (farmer's lung, bagassosis), isocyanates"],
        ["Mechanism", "Type III plus type IV; cellular bronchiolitis, interstitial pneumonia, poorly formed granulomas"],
        ["Classification", "Non-fibrotic vs fibrotic (ATS/JRS/ALAT 2020)"],
        ["Clinical", "Flu-like episodes 4-8 h after exposure, or insidious dyspnoea; crackles, squeaks"],
        ["HRCT", "Centrilobular nodules, GGO, mosaic, air trapping; fibrotic: three-density sign, mid-upper fibrosis"],
        ["BAL and serology", "BAL lymphocytes 30% or more; specific IgG shows exposure only"],
        ["Diagnosis", "Exposure + HRCT + BAL +/- biopsy at MDD; confidence definite to low"],
        ["Treatment", "Antigen avoidance first; prednisolone 0.5 mg/kg taper; MMF or azathioprine"],
        ["Progressive fibrotic HP", "Nintedanib 150 mg BD; transplant referral"],
        ["Prognosis", "Non-fibrotic reversible; fibrotic with honeycombing like IPF; unidentified antigen worse"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Diagnosing HP",
        steps: [
          { label: "ILD with cough, dyspnoea, episodes after exposure", tone: "neutral" },
          { label: "Detailed exposure history and home survey", detail: "Birds, feathers, coolers, damp, AC, farming, bagasse", tone: "decision" },
          { label: "HRCT with expiratory images", detail: "Typical / compatible / indeterminate for HP" },
          { label: "Exclude TB and CTD", detail: "CBNAAT, ANA, RF, anti-CCP, myositis panel" },
          { label: "BAL lymphocyte count; specific IgG", detail: "Lymphocytes 30% or more supports HP" },
          { label: "Biopsy if still uncertain; MDD", detail: "Assign confidence level", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Treatment ladder in HP",
        steps: [
          { label: "Complete antigen avoidance", detail: "Remove birds and feathers, clean or replace cooler, fix damp", tone: "good" },
          { label: "Prednisolone if persistent or severe", detail: "0.5 mg/kg/day for 4-8 weeks, taper over 3-6 months" },
          { label: "Steroid-sparing agent", detail: "MMF 1-1.5 g BD or azathioprine 1-2 mg/kg/day" },
          { label: "Nintedanib for progressive fibrosis", detail: "150 mg BD; PPF criteria met", tone: "decision" },
          { label: "Oxygen, rehab, transplant referral", tone: "warn" },
        ],
      },
      {
        kind: "branch",
        heading: "ATS/JRS/ALAT 2020 classification",
        root: "Hypersensitivity pneumonitis",
        arms: [
          { label: "Non-fibrotic HP", tone: "good", steps: ["Centrilobular nodules, GGO, mosaic", "BAL lymphocytes often over 40%", "Reversible with avoidance"] },
          { label: "Fibrotic HP", tone: "warn", steps: ["Reticulation, traction bronchiectasis, three-density sign", "Partly irreversible", "May become PPF; nintedanib"] },
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**HP** is immune-mediated ILD caused by inhaled antigens in a sensitised person.",
            "It is the **commonest ILD in India**, about 47% in the ILD-India registry.",
            "Classified as **non-fibrotic or fibrotic** (ATS/JRS/ALAT 2020).",
            "No antigen is found in **30-60%** of patients.",
            "**Non-smokers** get HP more often than smokers.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Birds**: pigeons, parrots, feather pillows and duvets.",
            "**Desert air coolers** with stagnant water grow moulds: air cooler lung.",
            "**Farmer's lung** from mouldy hay; **bagassosis** from mouldy sugarcane.",
            "Damp walls, humidifiers, AC units and **isocyanates** in paint workers.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Small particles reach **bronchioles and alveoli**, so disease centres on small airways.",
            "**Type III and type IV** hypersensitivity reactions both contribute.",
            "Histology triad: **cellular bronchiolitis**, interstitial pneumonia, **poorly formed granulomas**.",
            "Continued exposure leads to **fibrosis**.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "**Fever, chills and cough 4-8 hours** after heavy exposure, settling in 1-2 days.",
            "Or **insidious breathlessness** and dry cough over months.",
            "**Better away from home**, worse on return, worse in cooler season.",
            "Crackles and **mid-inspiratory squeaks**; clubbing is uncommon.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "HRCT: **centrilobular nodules, ground-glass and mosaic attenuation** with air trapping.",
            "Fibrotic HP: **three-density sign** and mid-upper zone fibrosis.",
            "**BAL lymphocytes 30% or more** support HP.",
            "**Specific IgG** shows exposure, not disease.",
            "Always exclude **TB with CBNAAT** before steroids.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Antigen avoidance** is the most important treatment.",
            "Clean house dust well; **feathers persist for months**.",
            "Drain and dry **cooler tanks weekly**, change pads, or switch to a fan.",
            "**Prednisolone 0.5 mg/kg/day** for 4-8 weeks, then slow taper.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "**Mycophenolate 1-1.5 g BD** or azathioprine to spare steroids.",
            "**Nintedanib 150 mg BD** for progressive fibrotic HP.",
            "Give **PJP prophylaxis** and bone protection with long immunosuppression.",
            "Admit for **SpO2 under 90%**, rest dyspnoea or uncertain fever with infiltrates.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "Fibrotic HP with honeycombing has a prognosis **close to IPF**.",
            "**Unidentified antigen** and continued exposure predict a worse outcome.",
            "Watch for **pulmonary hypertension** and opportunistic infection on steroids.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Review **4-12 weeks** after avoidance or steroids with FVC and DLCO.",
            "Then every **3-6 months** with PFT, glucose, blood count and LFT.",
            "Refer **progressive fibrotic HP** for antifibrotics and transplant review.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**ATS/JRS/ALAT 2020** replaced acute/subacute/chronic with non-fibrotic and fibrotic.",
            "Diagnosis uses **confidence levels** from definite to low.",
            "**2022 PPF guidance** includes progressive fibrotic HP for nintedanib.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in HP",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Prednisolone", "0.5 mg/kg/day oral", "4-8 weeks then taper over 3-6 months", "Diabetes, osteoporosis, TB reactivation"],
            ["Mycophenolate mofetil", "1-1.5 g oral BD", "1-2 years or more", "Diarrhoea, cytopenia; teratogenic"],
            ["Azathioprine", "1-2 mg/kg/day oral", "Long term", "Marrow suppression, hepatitis"],
            ["Nintedanib", "150 mg oral BD", "Lifelong", "Diarrhoea, raised ALT; not in pregnancy"],
          ],
        },
        {
          heading: "Antigens and diseases",
          columns: ["Disease", "Source", "Antigen"],
          rows: [
            ["Bird fancier's lung", "Pigeons, parrots, feather pillows", "Avian proteins"],
            ["Air cooler lung", "Desert coolers", "Moulds, actinomycetes"],
            ["Farmer's lung", "Mouldy hay", "Saccharopolyspora rectivirgula"],
            ["Bagassosis", "Mouldy sugarcane", "Thermoactinomyces sacchari"],
            ["Hot tub lung", "Hot tubs", "Mycobacterium avium complex"],
          ],
        },
        {
          heading: "HP versus IPF versus sarcoidosis",
          columns: ["Feature", "HP", "IPF", "Sarcoidosis"],
          rows: [
            ["CT zone", "Mid-upper, diffuse", "Basal subpleural", "Upper, perilymphatic"],
            ["Key CT sign", "Mosaic, centrilobular nodules", "Honeycombing", "Hilar nodes"],
            ["BAL", "Lymphocytes over 30%", "Lymphocytes under 30%", "CD4/CD8 over 3.5"],
            ["Granuloma", "Poorly formed", "None", "Well formed"],
          ],
        },
      ],
      remember: [
        "**Avoidance is the treatment** - steroids only help recovery.",
        "**HP is India's commonest ILD**: ask about birds and coolers.",
        "**Three-density sign** = fibrotic HP.",
        "**Precipitins = exposure, not disease.**",
        "**Squeaks** point to bronchiolitis and HP.",
        "**Smokers are protected** from HP.",
      ],
    },
  },
  "respiratory-sarcoidosis": {
    checked: "2026-10",
    updated: [
      "ATS 2020: three diagnostic criteria; no node biopsy in Lofgren, lupus pernio, Heerfordt; EBUS-TBNA preferred",
      "ATS 2020: baseline calcium, creatinine, ALP, ECG and eye exam for all; ACE not diagnostic",
      "ERS 2021: prednisolone 20-40 mg/day; methotrexate second line; infliximab for persistent disease",
      "BTS Clinical Statement on pulmonary sarcoidosis 2021",
      "EFZO-FIT 2025: efzofitimod missed its primary endpoint",
    ],
    master: {
      heading: "Sarcoidosis on one page",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Multisystem disease of unknown cause with non-necrotising granulomas; lungs and nodes in over 90%"],
        ["India", "Often misdiagnosed as TB; ATT trials common and wrong"],
        ["Mechanism", "Th1 response, TNF-alpha; 1-alpha hydroxylase (calcium); ACE from granulomas"],
        ["Scadding stages", "0 normal, I BHL, II BHL + infiltrates, III infiltrates, IV fibrosis; remission 55-90% to 0%"],
        ["Syndromes", "Lofgren (EN, BHL, fever, ankles); Heerfordt (uveitis, parotid, facial palsy, fever)"],
        ["Organs", "Eye 20-30%, skin, heart (5% clinical, 25% autopsy), nerves, calcium, liver"],
        ["Diagnosis", "Compatible clinical picture + non-necrotising granuloma + exclusion (ATS 2020)"],
        ["Tissue", "EBUS-TBNA; skin/node biopsy; AFB, CBNAAT, culture on every sample"],
        ["Baseline tests", "Calcium, creatinine, ALP, CBC, ECG, eye exam; ACE not diagnostic; BAL CD4/CD8 over 3.5"],
        ["Treatment", "Observe if mild; prednisolone 20-40 mg/day for 6-12 months; methotrexate; infliximab"],
        ["Emergencies", "Heart block, VT, severe hypercalcaemia, neurosarcoid, uveitis"],
        ["Prognosis", "Mortality 1-5%: fibrosis with PH and cardiac disease"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Diagnosing suspected sarcoidosis",
        steps: [
          { label: "BHL or perilymphatic nodules on CXR/CT", tone: "neutral" },
          { label: "Lofgren, lupus pernio or Heerfordt?", detail: "Yes: clinical diagnosis, no node biopsy", tone: "decision" },
          { label: "Tissue: EBUS-TBNA, skin or node biopsy", detail: "Look for non-necrotising granulomas" },
          { label: "Exclude TB, fungus, lymphoma", detail: "AFB smear, CBNAAT, culture, cytology", tone: "warn" },
          { label: "Organ screen", detail: "Calcium, creatinine, ALP, ECG, eye exam, PFT" },
          { label: "Sarcoidosis confirmed; decide on treatment", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Treatment ladder (ERS 2021)",
        steps: [
          { label: "Observe: asymptomatic or stage I", detail: "Review 3-6 monthly", tone: "good" },
          { label: "Prednisolone 20-40 mg/day", detail: "Taper to 5-10 mg; total 6-12 months" },
          { label: "Methotrexate 10-20 mg weekly + folic acid", detail: "Relapse or steroid toxicity" },
          { label: "Infliximab 3-5 mg/kg IV", detail: "Persistent disease; screen TB and HBV first", tone: "decision" },
          { label: "Transplant or PH therapy for end-stage", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "Sarcoidosis versus TB",
        columns: ["Feature", "Sarcoidosis", "Tuberculosis"],
        rows: [
          ["Granuloma", "Non-necrotising", "Caseating"],
          ["Microbiology", "Negative", "AFB, CBNAAT or culture positive"],
          ["Nodes", "Symmetrical BHL", "Asymmetric, necrotic"],
          ["Tuberculin", "Often negative", "Usually positive"],
          ["Patient", "Often well", "Unwell, weight loss"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Sarcoidosis** is multisystem disease with **non-necrotising granulomas** of unknown cause.",
            "Lungs and hilar nodes are involved in **over 90%**.",
            "Peak age **20-50 years**; often asymptomatic BHL on X-ray.",
            "In India it is often **mistaken for TB**.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Th1 cells release **TNF-alpha and IFN-gamma**, forming tight granulomas.",
            "Granuloma macrophages make **1,25(OH)2D**, causing hypercalciuria and hypercalcaemia.",
            "Granulomas make **ACE**, so ACE reflects granuloma load only.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**Scadding stage I** BHL; **II** BHL plus infiltrates; **III** infiltrates; **IV** fibrosis.",
            "Remission falls from **55-90% in stage I to 0% in stage IV**.",
            "**Lofgren**: erythema nodosum, BHL, fever, ankle arthritis; excellent prognosis.",
            "**Heerfordt**: uveitis, parotid swelling, facial palsy and fever.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Dry cough, breathlessness and **marked fatigue**.",
            "Chest often **clear despite a big X-ray**; clubbing is rare.",
            "**Uveitis** in 20-30%; skin lesions and **lupus pernio**.",
            "**Cardiac** disease: heart block, VT, sudden death.",
            "**Neuro**: facial palsy, meningitis, diabetes insipidus.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "CXR **1-2-3 sign**; CT perilymphatic nodules along fissures and bronchovascular bundles.",
            "**EBUS-TBNA** is the preferred node biopsy.",
            "Send every sample for **AFB, CBNAAT and culture**.",
            "Baseline **calcium, creatinine, ALP, ECG and eye exam** for all.",
            "**ACE** is neither sensitive nor specific; BAL **CD4/CD8 over 3.5** supports.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Observe** stage I and asymptomatic patients.",
            "**NSAIDs** for Lofgren syndrome.",
            "**Prednisolone 20-40 mg/day**, taper to 5-10 mg over months.",
            "Total course about **6-12 months**.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "**Methotrexate 10-20 mg weekly** with folic acid for relapse or steroid toxicity.",
            "**Infliximab** for persistent disease after TB and hepatitis B screening.",
            "**Hydroxychloroquine** for skin disease and hypercalcaemia.",
            "Cardiac: steroids plus **pacemaker or ICD** as needed.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: often improves; stop methotrexate 3 months before conception.",
            "Check **1,25(OH)2D and urine calcium** before giving vitamin D.",
            "**IGRA-positive** patients need TB preventive treatment before high-dose immunosuppression.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "Mortality **1-5%**, from fibrosis with PH and **cardiac sarcoid**.",
            "Red flags: **syncope, heart block, calcium over 3 mmol/L**, red eye.",
            "Stage IV cavities can harbour **aspergilloma**.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Review **every 3-6 months** with PFT, calcium and creatinine.",
            "**Annual ECG and eye exam** for all patients.",
            "Methotrexate needs **CBC, LFT and creatinine** every 4-12 weeks.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in sarcoidosis",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Prednisolone", "20-40 mg/day oral", "6-12 months with taper", "Diabetes, osteoporosis, TB reactivation"],
            ["Methotrexate", "10-20 mg weekly oral + folic acid 5 mg weekly", "At least 6-12 months", "Liver toxicity, cytopenia; teratogenic"],
            ["Hydroxychloroquine", "200-400 mg/day oral", "Months", "Retinopathy"],
            ["Infliximab", "3-5 mg/kg IV wk 0, 2, then 4-8 weekly", "Refractory disease", "TB reactivation; screen IGRA, HBV"],
            ["Naproxen", "250-500 mg BD oral", "Weeks (Lofgren)", "Gastritis, renal impairment"],
          ],
        },
        {
          heading: "Scadding stages",
          columns: ["Stage", "X-ray", "Remission"],
          rows: [
            ["I", "BHL only", "55-90%"],
            ["II", "BHL + infiltrates", "40-70%"],
            ["III", "Infiltrates only", "10-20%"],
            ["IV", "Fibrosis", "0%"],
          ],
        },
        {
          heading: "Causes of bilateral hilar lymphadenopathy",
          columns: ["Cause", "Pointer"],
          rows: [
            ["Sarcoidosis", "Symmetrical, well patient, EN or uveitis"],
            ["Tuberculosis", "Fever, weight loss, necrotic nodes"],
            ["Lymphoma", "B symptoms, bulky anterior mediastinal nodes"],
            ["Silicosis", "Eggshell calcification, stone work"],
            ["Metastasis", "Known primary, asymmetry"],
          ],
        },
      ],
      remember: [
        "**Exclude TB on every biopsy** - AFB, CBNAAT, culture.",
        "**Well patient, big X-ray** suggests sarcoidosis.",
        "**Lofgren needs no biopsy**; it usually remits.",
        "**ACE does not diagnose sarcoidosis.**",
        "**ECG and eye exam for everyone.**",
        "**Never an empirical ATT trial.**",
        "Ladder: **steroid, methotrexate, infliximab**.",
      ],
    },
  },
  "respiratory-ctd-drug-ild": {
    checked: "2026-10",
    updated: [
      "ACR/CHEST 2023: screen at-risk SARD patients with HRCT and PFT; not CXR or 6MWD",
      "ACR/CHEST 2023: mycophenolate first line; against first-line steroids in SSc-ILD",
      "EULAR 2023 SSc update: MMF, cyclophosphamide, rituximab, tocilizumab, nintedanib for SSc-ILD",
      "RECITAL 2023: rituximab not superior to cyclophosphamide but fewer adverse events",
      "ASCO 2021 irAE guideline: grade-based checkpoint pneumonitis management",
    ],
    master: {
      heading: "CTD-ILD and drug-induced lung disease on one page",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "ILD in systemic autoimmune rheumatic disease; DI-ILD from drugs (over 1,000 on pneumotox)"],
        ["Burden", "SSc 50-65% on HRCT; RA 5-10% clinical; myositis 20-80%; India CTD-ILD 14% of ILD"],
        ["Patterns", "SSc NSIP; RA UIP; myositis NSIP-OP; anti-MDA5 RP-ILD; Sjogren LIP"],
        ["Risk", "Anti-Scl-70, diffuse SSc; RA older male smoker with high anti-CCP"],
        ["Screening", "HRCT + PFT with DLCO; PFT every 3-6 months in first year (SSc, myositis)"],
        ["SSc-ILD treatment", "MMF first line; tocilizumab, rituximab, cyclophosphamide; nintedanib if progressive"],
        ["SSc caution", "Avoid prednisolone over 15 mg/day - renal crisis"],
        ["Anti-MDA5 RP-ILD", "Steroid pulse + tacrolimus + cyclophosphamide; ferritin predicts death"],
        ["Amiodarone", "Over 400 mg/day; high-attenuation CT; DLCO fall; stop + steroids for months"],
        ["Methotrexate", "First year; hypersensitivity; exclude PJP; stop, steroids, no rechallenge"],
        ["Nitrofurantoin and bleomycin", "Acute/chronic forms; bleomycin over 400 units, renal failure, oxygen"],
        ["Checkpoint inhibitors", "Grade 1 watch; 2 hold + prednisolone 1-2 mg/kg; 3-4 stop + IV steroids"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Suspected drug-induced ILD",
        steps: [
          { label: "New ILD shadows on a potentially toxic drug", tone: "neutral" },
          { label: "Check timing, dose and pneumotox.com", detail: "Amiodarone, MTX, nitrofurantoin, bleomycin, ICI", tone: "decision" },
          { label: "Exclude infection, heart failure, cancer", detail: "BAL: PJP PCR, cultures, CBNAAT; NT-proBNP", tone: "warn" },
          { label: "Grade severity (CTCAE)", detail: "Grade 1-4 by symptoms and oxygen need" },
          { label: "Stop drug; steroids by grade", detail: "Prednisolone 1-2 mg/kg for grade 2 or more" },
          { label: "Follow CT and DLCO; avoid rechallenge", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Treatment ladder for SSc-ILD",
        steps: [
          { label: "Screen: HRCT + PFT at diagnosis", tone: "neutral" },
          { label: "Mycophenolate first line", detail: "Up to 1-1.5 g BD", tone: "good" },
          { label: "Add or switch: tocilizumab or rituximab", detail: "Tocilizumab 162 mg SC weekly; rituximab 1 g x 2" },
          { label: "Add nintedanib if progressive", detail: "150 mg BD; PPF criteria" },
          { label: "Cyclophosphamide for severe or refractory", detail: "500-750 mg/m2 IV monthly", tone: "decision" },
          { label: "Transplant referral", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "SSc-ILD vs RA-ILD vs anti-MDA5 ILD",
        columns: ["Feature", "SSc-ILD", "RA-ILD", "Anti-MDA5 ILD"],
        rows: [
          ["Pattern", "Fibrotic NSIP", "UIP", "RP-ILD, DAD"],
          ["Antibody", "Anti-Scl-70", "RF, anti-CCP", "Anti-MDA5"],
          ["Tempo", "Years", "Years", "Weeks"],
          ["First treatment", "MMF", "MMF/rituximab; nintedanib if UIP progresses", "Steroid pulse + tacrolimus + cyclophosphamide"],
          ["Caution", "Steroids over 15 mg: renal crisis", "Behaves like IPF", "High early mortality"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**CTD-ILD** is ILD in systemic sclerosis, RA, myositis, Sjogren, SLE or MCTD.",
            "ILD is the **leading cause of death in systemic sclerosis**.",
            "In India **CTD-ILD is about 14%** of all ILD.",
            "Over **1,000 drugs** can injure the lung; check pneumotox.com.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "SSc: **diffuse skin disease and anti-Scl-70**; anti-centromere protects.",
            "RA: **older male smoker** with high-titre RF and anti-CCP.",
            "Myositis: **anti-Jo-1** (anti-synthetase) and **anti-MDA5** (rapidly progressive).",
            "Drug risk: high dose, old age, **renal failure**, oxygen, radiation.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**RA gives UIP**; most other CTDs give **NSIP**.",
            "SSc-ILD is **extensive** when HRCT extent is over 20%.",
            "Checkpoint pneumonitis is graded **1-4 by CTCAE**.",
            "Nitrofurantoin causes **acute and chronic** lung reactions.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Dry cough and breathlessness, often hidden by **joint or muscle disease**.",
            "Look for **mechanic's hands**, Gottron papules, sclerodactyly and synovitis.",
            "**Anti-MDA5**: palmar papules, skin ulcers, high ferritin, little weakness.",
            "Methotrexate pneumonitis: fever, dry cough, usually in the **first year**.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Screen with **HRCT and PFT with DLCO**, not chest X-ray.",
            "Send ANA, Scl-70, RF, anti-CCP, Ro and **extended myositis panel**.",
            "**BAL** excludes PJP and TB before calling it drug toxicity.",
            "Amiodarone: **high-attenuation CT** and DLCO fall of 15-20% or more.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Mycophenolate 1-1.5 g BD** is first line for CTD-ILD.",
            "**Avoid prednisolone over 15 mg/day in SSc**: renal crisis risk.",
            "For drug ILD, **stop the drug first** and exclude infection.",
            "Checkpoint grade 2: **hold drug, prednisolone 1-2 mg/kg**, taper over 4-6 weeks.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "**Tocilizumab, rituximab or cyclophosphamide** when MMF fails.",
            "**Nintedanib 150 mg BD** for progressive fibrotic CTD-ILD.",
            "Anti-MDA5: **steroid pulse plus tacrolimus plus cyclophosphamide** early.",
            "Checkpoint grade 3-4: **stop permanently**, IV methylprednisolone, infliximab if no response.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: MMF, methotrexate, cyclophosphamide and nintedanib are teratogenic.",
            "Screen **latent TB and hepatitis B** before biologics in India.",
            "Avoid long-term **nitrofurantoin** in the elderly (Beers criteria).",
            "After bleomycin, keep **oxygen low** during anaesthesia.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "SSc and myositis: **PFT every 3-6 months** in the first year.",
            "RA and Sjogren: PFT every 3-12 months in the first year.",
            "Amiodarone: **TFT and LFT every 6 months**, baseline PFT and CXR.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**ACR/CHEST 2023** set screening, monitoring and treatment for CTD-ILD.",
            "**RECITAL 2023**: rituximab equal to cyclophosphamide with fewer side effects.",
            "**EULAR 2023**: five drug options for SSc-ILD including tocilizumab and nintedanib.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs for CTD-ILD",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Mycophenolate mofetil", "1-1.5 g oral BD", "At least 2 years", "Diarrhoea, cytopenia; teratogenic"],
            ["Tocilizumab", "162 mg SC weekly", "Long term", "Infection, neutropenia; masks CRP"],
            ["Rituximab", "1 g IV day 1 and 15, every 6 months", "Long term", "Infusion reaction, HBV reactivation"],
            ["Cyclophosphamide", "500-750 mg/m2 IV monthly", "6 doses then MMF", "Cytopenia, cystitis, infertility"],
            ["Nintedanib", "150 mg oral BD", "Long term", "Diarrhoea, raised ALT"],
          ],
        },
        {
          heading: "CTD and lung pattern",
          columns: ["Disease", "Antibody", "Pattern"],
          rows: [
            ["Systemic sclerosis", "Anti-Scl-70", "Fibrotic NSIP"],
            ["Rheumatoid arthritis", "RF, anti-CCP", "UIP"],
            ["Anti-synthetase", "Anti-Jo-1", "NSIP with OP"],
            ["Dermatomyositis", "Anti-MDA5", "Rapidly progressive ILD"],
            ["Sjogren", "Anti-Ro, anti-La", "LIP, NSIP, cysts"],
          ],
        },
        {
          heading: "Drug-induced lung disease",
          columns: ["Drug", "Clue", "Action"],
          rows: [
            ["Amiodarone", "Over 400 mg/day, high-attenuation CT", "Stop; prednisolone for months"],
            ["Methotrexate", "First year, fever; exclude PJP", "Stop; steroids; no rechallenge"],
            ["Nitrofurantoin", "Long-term prophylaxis, eosinophilia", "Stop; steroids if chronic"],
            ["Bleomycin", "Over 400 units, renal failure", "Stop; low FiO2 for life"],
            ["Checkpoint inhibitor", "2-3 months after start", "Grade-based steroids"],
          ],
        },
      ],
      remember: [
        "**RA = UIP; others = NSIP.**",
        "**MMF first; no high-dose steroids in SSc.**",
        "**Anti-MDA5 = ulcers, ferritin, RP-ILD.**",
        "**Screen with HRCT and PFT, not chest X-ray.**",
        "**Amiodarone lung worsens after stopping** - long half-life.",
        "**MTX pneumonitis: always exclude PJP.**",
        "**Bleomycin: low oxygen for life.**",
      ],
    },
  },
};

export default revision;
