import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "infectious-fever-fungal-infections-systemic": {
    checked: "2026-10",
    updated: [
      "ECMM/ISHAM/ASM global candidiasis guideline 2025: echinocandin first line, early line removal, step-down at 5-7 days, rezafungin weekly option.",
      "Rezafungin approved by FDA and EMA in 2023 (ReSTORE trial).",
      "WHO 2022 cryptococcal guideline: single liposomal amphotericin B 10 mg/kg plus 14 days flucytosine and fluconazole 1200 mg.",
      "WHO Fungal Priority Pathogens List 2022: C. neoformans, C. auris, A. fumigatus, C. albicans critical.",
      "EORTC/MSGERC 2020 definitions: galactomannan 1.0 in serum or BAL; PCR accepted as mycological evidence.",
      "ISHAM 2024 revised ABPA criteria noted (managed under asthma).",
    ],
    master: {
      heading: "Master revision table - Systemic fungal infections",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Fungus in blood or sterile tissue with damage; graded **proven, probable, possible** (EORTC/MSGERC 2020)."],
        ["Indian burden", "Over 57 million with serious fungal disease; **CPA about 1.7 million** post-TB; ICU candidaemia 6.5/1000 admissions, **C. tropicalis** commonest, **C. auris** first recognised in India."],
        ["Host-organism match", "Neutropenia - moulds and Candida; **CD4 lymphopenia - Cryptococcus, Histoplasma, Talaromyces, PCP**; post-TB cavity - CPA; ICU line/TPN - Candida."],
        ["Pathophysiology", "Candida from gut or catheter biofilm; Aspergillus angioinvasion (halo, air-crescent); cryptococcal capsule blocks arachnoid villi - **raised ICP**."],
        ["Drug targets", "Azoles - CYP51 ergosterol; **echinocandins - beta-1,3-glucan synthase**; polyenes - ergosterol pores; flucytosine - 5-FU. Echinocandins miss Cryptococcus and Mucorales."],
        ["Investigations", "Blood culture (50% sensitive) + MALDI-TOF; **BDG 80 pg/mL**; **galactomannan ODI 1.0**; **CrAg LFA**; Histoplasma urine antigen; Aspergillus IgG for CPA; opening pressure 25 cm H2O."],
        ["Candidaemia", "**Caspofungin 70 then 50 mg**/micafungin 100 mg; remove line; repeat cultures; fundoscopy; fluconazole 400 mg step-down at 5-7 days; **14 days after first negative culture**."],
        ["Aspergillosis", "**Voriconazole 6 mg/kg x2 then 4 mg/kg 12-hourly** (trough 1-5.5) or isavuconazole 200 mg 8-hourly x6 then daily; 6-12 weeks; CPA - itraconazole 200 mg BD for 6 months."],
        ["Cryptococcal meningitis", "**L-AmB 10 mg/kg once + 5FC 100 mg/kg/day + fluconazole 1200 mg x 14 days**; then 800 mg x 8 weeks; 200 mg maintenance; therapeutic LP; ART at 4-6 weeks."],
        ["Histoplasmosis", "Severe: L-AmB 3 mg/kg x 2 weeks, then **itraconazole 200 mg TDS x3 days then BD for 12 months**; adrenal histoplasmosis in Gangetic plains."],
        ["Special groups", "Pregnancy - amphotericin; CKD - avoid IV voriconazole; azoles raise tacrolimus; **rifampicin contraindicated with voriconazole**."],
        ["Complications", "Candidaemia mortality 30-60%; endophthalmitis; IA 30-60%; crypto 10-week mortality about 25%; IRIS; amphotericin hypokalaemia and nephrotoxicity."],
        ["Prevention", "Line bundles, posaconazole prophylaxis in AML/GVHD, **CrAg screen at CD4 under 100**, C. auris isolation and chlorine cleaning."],
        ["Exam one-liners", "GM - Aspergillus, BDG - Candida/PCP, CrAg - Cryptococcus, urine Ag - Histoplasma; no steroids for crypto ICP."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Suspected candidaemia in the ICU",
        steps: [
          { label: "New fever on antibiotics with line, TPN or surgery", detail: "Risk factors and multisite colonisation", tone: "decision" },
          { label: "Two to three blood cultures + beta-D-glucan", detail: "BDG 80 pg/mL or more supports", tone: "neutral" },
          { label: "Start an echinocandin", detail: "Caspofungin 70 mg then 50 mg daily; micafungin 100 mg", tone: "warn" },
          { label: "Remove central lines; repeat cultures", detail: "Every 24-48 h until negative" },
          { label: "Fundoscopy and echo if persistent", detail: "Endophthalmitis or endocarditis prolongs therapy" },
          { label: "Step down at 5-7 days", detail: "Fluconazole 400 mg if susceptible, stable, cultures negative" },
          { label: "Stop 14 days after first negative culture", detail: "If no metastatic focus", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "WHO 2022 cryptococcal treatment ladder (HIV)",
        steps: [
          { label: "Screen: serum CrAg at CD4 under 100", detail: "Positive - LP to exclude meningitis", tone: "decision" },
          { label: "CSF negative: pre-emptive fluconazole", detail: "800 mg x 2 weeks, 400 mg x 8 weeks, then 200 mg" },
          { label: "Meningitis: induction 2 weeks", detail: "L-AmB 10 mg/kg once + 5FC 100 mg/kg/day + fluconazole 1200 mg", tone: "warn" },
          { label: "Raised pressure: daily therapeutic LP", detail: "Opening pressure 25 cm H2O or more; no steroids", tone: "warn" },
          { label: "Consolidation 8 weeks", detail: "Fluconazole 800 mg daily; start ART at 4-6 weeks" },
          { label: "Maintenance until immune recovery", detail: "Fluconazole 200 mg; stop at CD4 200+ after 1 year", tone: "good" },
        ],
      },
      {
        kind: "compare",
        heading: "Four systemic mycoses side by side",
        columns: ["Feature", "Candida", "Aspergillus", "Cryptococcus", "Histoplasma"],
        rows: [
          ["Host", "ICU, line, TPN", "Neutropenia, HSCT; post-TB cavity", "HIV CD4 under 100", "HIV CD4 under 150; Gangetic plains"],
          ["Key test", "Blood culture, BDG", "CT halo, galactomannan", "CrAg LFA, opening pressure", "Urine antigen, marrow GMS"],
          ["First-line drug", "Echinocandin", "Voriconazole or isavuconazole", "L-AmB + 5FC + fluconazole", "L-AmB then itraconazole"],
          ["Drug that fails", "Fluconazole for C. krusei/auris", "Fluconazole", "Echinocandins", "Echinocandins"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Invasive fungal infection** is fungus in blood or sterile tissue, graded proven, probable or possible.",
            "India has over 57 million with serious fungal disease; **CPA after TB** is about 1.7 million.",
            "**C. tropicalis** is the commonest ICU candidaemia species in India.",
            "**C. auris** was first recognised in Indian ICUs and is often fluconazole-resistant.",
            "Cryptococcal meningitis causes about **15-19% of AIDS deaths** worldwide.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Candida**: central line, broad antibiotics, TPN, abdominal surgery, ICU stay over 7 days.",
            "**Aspergillus**: neutrophils under 500 for over 10 days, transplant, high-dose steroids, ICU influenza or COVID.",
            "**Cryptococcus**: HIV with **CD4 under 100**, transplant, steroids.",
            "**Histoplasma**: bat or bird guano; HIV, TNF blockers; adrenal disease in healthy Indian men.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Neutrophils kill moulds; **T cells control yeasts and dimorphs**.",
            "Aspergillus invades vessels: **halo sign** early, **air-crescent** on recovery.",
            "Cryptococcal capsule blocks arachnoid villi, raising **intracranial pressure**.",
            "**Echinocandins** block glucan synthase, so they miss Cryptococcus and Mucorales.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Candidaemia: ICU fever not settling on antibiotics; check the **fundus** for endophthalmitis.",
            "Aspergillosis: neutropenic fever over 96 hours, haemoptysis, pleuritic pain.",
            "CPA: cured TB patient with months of cough, weight loss and **haemoptysis**, sputum NAAT negative.",
            "Crypto: subacute headache, vomiting, visual loss; **neck stiffness often absent**.",
            "Histoplasmosis: fever, oral ulcers, hepatosplenomegaly, **adrenal insufficiency**.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Blood culture detects only **half of invasive candidiasis**; identify by MALDI-TOF.",
            "**Beta-D-glucan 80 pg/mL** or more supports Candida; negative in Cryptococcus and Mucorales.",
            "**Galactomannan ODI 1.0** or more in serum or BAL supports aspergillosis.",
            "**CrAg lateral flow** is over 95% sensitive; measure opening pressure at every LP.",
            "Histoplasma: **urine antigen** and marrow biopsy with GMS stain.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Candidaemia: **caspofungin 70 mg then 50 mg daily**, remove line, repeat cultures.",
            "Step down to **fluconazole 400 mg** at 5-7 days; stop 14 days after first negative culture.",
            "Aspergillosis: **voriconazole** with trough 1-5.5 mg/L, or **isavuconazole**.",
            "Crypto: **L-AmB 10 mg/kg once** plus flucytosine and fluconazole 1200 mg for 14 days.",
            "Histoplasmosis: L-AmB 3 mg/kg for 2 weeks, then **itraconazole for 12 months**.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Give **1 L saline** before amphotericin and supplement potassium and magnesium.",
            "Raised crypto pressure: **daily therapeutic LP**; never steroids or acetazolamide.",
            "Start ART **4-6 weeks** after antifungal therapy in cryptococcal meningitis.",
            "Isolate **C. auris** with contact precautions and chlorine-based cleaning.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: amphotericin is safest; avoid high-dose fluconazole and voriconazole.",
            "CKD: avoid **IV voriconazole** below CrCl 50; reduce fluconazole and flucytosine.",
            "Azoles raise **tacrolimus** levels; rifampicin makes voriconazole useless.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "Candidaemia mortality **30-60%**; metastatic eye, valve and bone disease.",
            "Massive **haemoptysis** from aspergilloma needs bronchial artery embolisation.",
            "Crypto IRIS in 10-30% if ART is started too early.",
            "Amphotericin causes **hypokalaemia**, hypomagnesaemia and kidney injury.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**ECMM/ISHAM/ASM 2025**: echinocandin first line for candidaemia; rezafungin weekly option.",
            "**WHO 2022**: single high-dose liposomal amphotericin for HIV cryptococcal meningitis.",
            "**WHO FPPL 2022**: first fungal priority pathogen list.",
            "**EORTC/MSGERC 2020**: galactomannan cut-off 1.0 and PCR accepted.",
          ],
        },
      ],
      tables: [
        {
          heading: "Antifungal drugs",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Caspofungin", "70 mg IV then 50 mg daily", "Step down at 5-7 days", "Poor CSF and eye entry; no Cryptococcus or Mucorales activity"],
            ["Fluconazole", "800 mg then 400 mg daily; crypto 1200/800/200 mg", "14 days after negative culture", "QT, hepatitis, interactions; no mould activity"],
            ["Voriconazole", "6 mg/kg x2 then 4 mg/kg 12-hourly IV; 200-300 mg BD oral", "6-12 weeks minimum", "Visual flashes, photosensitivity, hepatitis; never with rifampicin"],
            ["Isavuconazole", "200 mg 8-hourly x6, then daily", "6-12 weeks", "Shortens QT; fewer side effects than voriconazole"],
            ["Liposomal amphotericin B", "3-5 mg/kg/day; 10 mg/kg once in crypto", "Varies by disease", "Hypokalaemia, nephrotoxicity, infusion reaction; safe in pregnancy"],
            ["Flucytosine", "100 mg/kg/day in 4 doses", "14 days", "Marrow suppression; never alone"],
            ["Itraconazole", "200 mg BD (TDS x3 days loading)", "6-12 months", "Avoid in heart failure; erratic absorption"],
          ],
        },
        {
          heading: "Biomarker cut-offs",
          columns: ["Test", "Cut-off", "Organism"],
          rows: [
            ["Beta-D-glucan", "80 pg/mL or more", "Candida, Aspergillus, Pneumocystis"],
            ["Galactomannan", "ODI 1.0 serum or BAL", "Aspergillus"],
            ["CrAg LFA", "Any positive", "Cryptococcus"],
            ["Urine antigen", "Kit positive", "Histoplasma"],
            ["Aspergillus IgG", "Kit cut-off", "Chronic pulmonary aspergillosis"],
          ],
        },
        {
          heading: "Differential diagnosis",
          columns: ["Picture", "Fungal cause", "Mimic", "Discriminator"],
          rows: [
            ["Post-TB cavity with haemoptysis", "CPA", "TB relapse", "NAAT negative, Aspergillus IgG positive"],
            ["Neutropenic lung nodules", "Aspergillosis", "Mucormycosis", "Galactomannan positive vs reverse halo"],
            ["HIV chronic meningitis", "Cryptococcal", "TB meningitis", "CSF CrAg positive"],
            ["Fever, pancytopenia, big spleen", "Histoplasmosis", "Kala-azar, TB", "Urine antigen, marrow stain"],
          ],
        },
      ],
      remember: [
        "Candida bundle: **echinocandin, pull the line, repeat cultures, fundoscopy**.",
        "Echinocandins miss **Cryptococcus and Mucorales**; fluconazole misses all moulds.",
        "Crypto WHO 2022: **10 mg/kg L-AmB once + 5FC + fluconazole 1200 mg**.",
        "Crypto pressure: drain by LP; **no steroids**.",
        "Halo = early aspergillosis; **reverse halo = mucor**.",
        "Post-TB haemoptysis with negative NAAT: think **CPA**.",
        "Bilateral adrenal masses in a healthy Bengali man: **histoplasmosis**.",
      ],
    },
  },
};

export default revision;
