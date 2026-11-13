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

  "infectious-fever-mucormycosis": {
    checked: "2026-10",
    updated: [
      "ECMM/MSG ERC global mucormycosis guideline 2019 (current): liposomal amphotericin 5-10 mg/kg/day, early surgery, isavuconazole/posaconazole alternatives and step-down.",
      "ICMR/MoHFW 2021 advisories on COVID-associated mucormycosis and steroid stewardship.",
      "Honavar 2021 ROCM staging (stage 1-4 with sub-stages a-d) adopted.",
      "EORTC/MSGERC 2020 definitions; WHO FPPL 2022 lists Mucorales as high priority.",
    ],
    master: {
      heading: "Master revision table - Mucormycosis",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Acute **angioinvasive** infection by **Mucorales** (Rhizopus, Mucor, Lichtheimia, Apophysomyces) causing thrombosis and **black necrosis**."],
        ["Indian burden", "About **14 per 100,000** - 70-80 times global; **CAM epidemic 2021** (over 45,000 cases); ROCM two-thirds; **Rhizopus arrhizus** commonest; isolated renal form unique to India."],
        ["Risk factors", "**Uncontrolled diabetes/DKA (over 70%)**, steroids, COVID-19, neutropenia, transplant, deferoxamine, trauma/burns."],
        ["Pathophysiology", "Acidosis frees iron; hyperglycaemia up-regulates **GRP78/CotH**; angioinvasion, infarction; spread nose - sinus - orbit - cavernous sinus - brain."],
        ["Staging (Honavar 2021)", "**1 nasal, 2 sinus (2c palate), 3 orbit (3c vision loss), 4 CNS** - each a-d."],
        ["Clinical features", "Unilateral facial pain/numbness, black nasal discharge, toothache, palatal eschar, periorbital swelling, diplopia, vision loss, altered sensorium."],
        ["Investigations", "Tissue **KOH/calcofluor** - broad aseptate ribbons, right-angle branching; histology for angioinvasion; culture 50%; **contrast MRI - black turbinate**; CT chest reverse halo; GM/BDG negative."],
        ["Antifungal", "**Liposomal amphotericin B 5 mg/kg/day (10 if CNS)**; alternatives isavuconazole or posaconazole; deoxycholate 1-1.5 mg/kg only if no lipid form."],
        ["Surgery", "**Early, repeated debridement**; FESS, maxillectomy; exenteration for blind frozen orbit; TRAMB for selected stage 3a-3b."],
        ["Risk reversal", "Insulin for DKA, glucose 140-180 mg/dL, taper steroids, stop deferoxamine, G-CSF in neutropenia."],
        ["Step-down and duration", "**Posaconazole DR 300 mg daily** (trough over 1) or **isavuconazole 200 mg daily**; total 3-6 months till resolution and immune recovery."],
        ["Monitoring", "Creatinine, K, Mg daily in week 1 then twice weekly; saline preload; MRI and endoscopy at 2-4 weeks."],
        ["Prognosis", "Mortality ROCM 30-50%, pulmonary 50-70%, disseminated over 90%; delayed amphotericin doubles mortality."],
        ["Prevention", "Glycaemic control during steroids, steroid stewardship (dexamethasone 6 mg only in hypoxic COVID), clean humidifier water, early referral."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Suspected rhino-orbito-cerebral mucormycosis",
        steps: [
          { label: "Diabetic or post-steroid patient with facial or eye symptoms", detail: "Facial pain, black discharge, toothache, eyelid swelling, diplopia", tone: "decision" },
          { label: "Check glucose and ketones; refer same day", detail: "Start insulin and fluids if DKA", tone: "warn" },
          { label: "Nasal endoscopy and tissue biopsy", detail: "KOH/calcofluor, histology, culture - not a swab" },
          { label: "Contrast MRI sinus, orbit and brain", detail: "Black turbinate sign; stage by Honavar 1-4" },
          { label: "Start liposomal amphotericin on suspicion", detail: "5 mg/kg/day; 10 mg/kg/day if CNS", tone: "warn" },
          { label: "Urgent surgical debridement", detail: "Repeat as needed; exenteration for blind frozen orbit" },
          { label: "Stable and improving: oral step-down", detail: "Posaconazole 300 mg or isavuconazole 200 mg daily, 3-6 months", tone: "good" },
        ],
      },
      {
        kind: "branch",
        heading: "The three pillars of mucormycosis treatment",
        root: "Mucormycosis confirmed or strongly suspected",
        arms: [
          { label: "Antifungal", tone: "warn", steps: ["Liposomal amphotericin 5-10 mg/kg/day", "Isavuconazole or posaconazole if amphotericin not possible", "Oral step-down for months"] },
          { label: "Surgery", tone: "decision", steps: ["Early debridement of all necrosis", "Repeat endoscopic clearance", "Exenteration for blind, frozen orbit"] },
          { label: "Reverse the risk", tone: "good", steps: ["Correct DKA, glucose 140-180", "Taper steroids, stop deferoxamine", "Recover neutrophils"] },
        ],
      },
      {
        kind: "compare",
        heading: "Mucor versus Aspergillus",
        columns: ["Feature", "Mucormycosis", "Aspergillosis"],
        rows: [
          ["Host in India", "DKA, steroids, COVID", "Neutropenia, transplant, post-TB cavity"],
          ["Hyphae", "Broad, aseptate, right-angle branching", "Narrow, septate, 45 degree branching"],
          ["Galactomannan", "Negative", "Positive"],
          ["CT chest", "Reverse halo", "Halo, air-crescent"],
          ["Voriconazole", "Inactive", "First line"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Mucormycosis** is angioinvasive infection by Mucorales causing thrombosis and black necrosis.",
            "India has about **70-80 times** the global rate, about 14 per 100,000.",
            "The **2021 CAM epidemic** followed steroid use in COVID-19 among diabetics.",
            "**Rhizopus arrhizus** is the commonest species; ROCM is two-thirds of cases.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Uncontrolled diabetes and DKA** cause over 70% of Indian cases.",
            "**Steroids**, COVID-19, tocilizumab, neutropenia and transplant add risk.",
            "**Deferoxamine** acts as a siderophore for Rhizopus.",
            "Trauma and burns cause cutaneous disease, often Apophysomyces in healthy people.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Acidosis frees **iron** from transferrin, feeding the fungus.",
            "Hyperglycaemia up-regulates endothelial **GRP78** and fungal CotH, aiding invasion.",
            "Vessel thrombosis causes **infarction**, so drugs cannot reach dead tissue.",
            "Spread runs nose, sinus, orbit, **cavernous sinus**, brain.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "Forms: rhino-orbito-cerebral, pulmonary, cutaneous, GI, renal, disseminated.",
            "**Honavar 2021**: stage 1 nose, 2 sinuses, 3 orbit, 4 CNS.",
            "**2c** includes palate; **3c** means vision loss or orbital apex; **4b** cavernous sinus thrombosis.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Unilateral **facial pain or numbness** and black nasal discharge appear first.",
            "**Palatal eschar** and loose teeth mean sinus and oral spread.",
            "Proptosis, ptosis, ophthalmoplegia and **sudden blindness** mean orbital apex disease.",
            "Drowsiness or hemiparesis means **brain or carotid** involvement.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Tissue KOH/calcofluor**: broad aseptate ribbon hyphae with right-angle branching.",
            "**Histology** shows angioinvasion; culture is positive in only half.",
            "**Contrast MRI**: black turbinate sign; stages orbit and brain.",
            "**Galactomannan and beta-D-glucan are negative**.",
            "Check glucose, ketones, ABG, creatinine, potassium and magnesium.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Liposomal amphotericin 5 mg/kg/day**, 10 mg/kg/day if brain involved.",
            "**Early, repeated surgical debridement** of all dead tissue.",
            "Correct **DKA**, keep glucose 140-180 mg/dL, taper steroids.",
            "Never use **voriconazole**: Mucorales are resistant.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Step down to **posaconazole 300 mg daily** or **isavuconazole 200 mg daily** when stable.",
            "Total course is usually **3-6 months**, until imaging and immunity recover.",
            "Exenteration for a blind, frozen orbit; **TRAMB** for selected stage 3.",
            "Monitor creatinine, **potassium and magnesium** on amphotericin.",
            "**Deferasirox** is not recommended; it raised mortality.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: liposomal amphotericin; avoid posaconazole and isavuconazole.",
            "Transplant: azoles raise **tacrolimus**; isavuconazole least nephrotoxic.",
            "Neonates: GI mucormycosis mimics necrotising enterocolitis.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "Mortality: ROCM **30-50%**, pulmonary 50-70%, disseminated over 90%.",
            "Delay in amphotericin of about 6 days **doubles mortality**.",
            "Sequelae: blindness, exenteration, maxillectomy defects, stroke, depression.",
            "Prevent with **steroid stewardship** and glucose monitoring during steroid therapy.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs for mucormycosis",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Liposomal amphotericin B", "5 mg/kg/day IV; 10 mg/kg/day for CNS", "3-6 weeks IV, then oral", "Nephrotoxicity, low K and Mg; saline preload"],
            ["Amphotericin deoxycholate", "1-1.5 mg/kg/day IV", "Only if lipid form unavailable", "Severe nephrotoxicity, rigors"],
            ["Isavuconazole", "200 mg 8-hourly x6, then 200 mg daily", "Months, till resolution", "Shortens QT; CYP3A4 interactions"],
            ["Posaconazole DR tablet", "300 mg 12-hourly day 1, then 300 mg daily", "Months; trough over 1 mg/L", "Hepatitis, QT prolongation, raises tacrolimus"],
            ["Insulin", "IV infusion in DKA, then basal-bolus", "Throughout", "Hypoglycaemia, hypokalaemia"],
          ],
        },
        {
          heading: "Honavar staging",
          columns: ["Stage", "Site", "Key sub-stage"],
          rows: [
            ["1", "Nasal mucosa", "1d bilateral"],
            ["2", "Paranasal sinuses", "2c palate or oral cavity"],
            ["3", "Orbit", "3c vision loss, orbital apex, CRAO"],
            ["4", "CNS", "4b cavernous sinus thrombosis; 4c ICA occlusion"],
          ],
        },
        {
          heading: "Differential diagnosis",
          columns: ["Condition", "Clue", "Discriminator"],
          rows: [
            ["Invasive aspergillosis", "Neutropenia, slower course", "Septate narrow hyphae, galactomannan positive"],
            ["Bacterial orbital cellulitis", "Fever, red swollen orbit", "No necrosis, responds to antibiotics"],
            ["Midline lymphoma or GPA", "Destructive nasal lesion", "Biopsy, ANCA, immunohistochemistry"],
            ["Ecthyma gangrenosum", "Black skin lesion in neutropenia", "Pseudomonas culture"],
          ],
        },
      ],
      remember: [
        "**Three pillars**: amphotericin, surgery, reverse the risk.",
        "Mucor hyphae are **broad, aseptate, right-angled**.",
        "**Voriconazole and echinocandins fail** against Mucorales.",
        "**Black turbinate** on MRI; **reverse halo** on CT chest.",
        "DKA: acid frees **iron**, glucose up-regulates **GRP78**.",
        "Honavar: **nose, sinus, orbit, brain** - 1 to 4.",
        "Galactomannan negative mould in a diabetic: **think mucor**.",
      ],
    },
  },

  "infectious-fever-opportunistic-infections-hiv": {
    checked: "2026-10",
    updated: [
      "NACO National Guidelines for HIV Care and Treatment 2021: TLD first line, CPT at CD4 350 or less, AHD package, viral load monitoring.",
      "WHO 2021 consolidated guidelines: rapid ART, ART within 2 weeks of TB treatment, advanced HIV disease package.",
      "WHO 2022 cryptococcal guideline: CrAg screening at CD4 under 100; single high-dose L-AmB; ART at 4-6 weeks.",
      "NTEP TPT guidelines 2021: 3HP and 1HP for PLHIV.",
      "DHHS/NIH/IDSA OI guidelines (living, 2024): no routine MAC prophylaxis if ART started immediately.",
    ],
    master: {
      heading: "Master revision table - Opportunistic infections in HIV",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Infection causing disease (or severe disease) because of **CD4 depletion**; AIDS-defining OIs = WHO stage 4."],
        ["AHD", "**CD4 under 200 or WHO stage 3-4**, or any child under 5 - highest OI mortality."],
        ["Indian burden", "About **25 lakh PLHIV**, adult prevalence 0.2%; **TB is the commonest OI** and top killer; one-third present with CD4 under 200."],
        ["CD4 ladder", "Any - TB, zoster; **under 200 - PCP**, candida oesophagitis; **under 100 - toxo, crypto**, PML; **under 50 - CMV, MAC**, CNS lymphoma."],
        ["Pathophysiology", "CD4 loss - no IFN-gamma macrophage activation - reactivation of latent TB, toxo, CMV, JC virus; IRIS = recovering immunity attacking antigen."],
        ["Screening", "Baseline CD4, VL, CBC, LFT, HBsAg, HCV, VDRL, CXR; **CrAg (CD4 under 100)**, **TB-LAM**, toxo IgG, fundoscopy (CD4 under 100)."],
        ["Prophylaxis", "**Cotrimoxazole 960 mg daily** at CD4 350 or less; **TPT 3HP/6H**; CrAg pre-emptive fluconazole; vaccines; no live vaccines under 200."],
        ["PCP", "TMP 15-20 mg/kg/day x **21 days**; **prednisolone if PaO2 under 70** (40 BD x5, 40 OD x5, 20 OD x11)."],
        ["Toxoplasmosis", "Pyrimethamine + sulfadiazine + folinic acid x 6 weeks, or **cotrimoxazole 5 mg/kg TMP BD**; response in 7-14 days, else biopsy."],
        ["CMV and others", "**Valganciclovir 900 mg BD** x 14-21 days then OD + intravitreal ganciclovir; candida oesophagitis fluconazole 200-400 mg x 14-21 days; MAC clarithromycin + ethambutol."],
        ["TB-HIV", "Standard ATT; **ART within 2 weeks** (TBM 4-8 weeks); **DTG 50 mg BD with rifampicin**."],
        ["ART timing", "Most OIs within 2 weeks; **cryptococcal 4-6 weeks**; crypto/PML/Kaposi - ART is the treatment."],
        ["IRIS", "Paradoxical or unmasking in first 3 months; continue ART; TB-IRIS prednisolone 1.5 then 0.75 mg/kg/day, 2 weeks each."],
        ["Follow-up", "VL at 6 and 12 months then yearly; failure = VL over 1000 twice 3 months apart; refer to ART centre / CoE."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "New PLHIV: screening and prophylaxis",
        steps: [
          { label: "Confirm HIV; CD4 and WHO staging", detail: "AHD if CD4 under 200 or stage 3-4", tone: "decision" },
          { label: "TB 4-symptom screen", detail: "Positive - CBNAAT/Truenat + TB-LAM; negative - TPT (3HP/6H)" },
          { label: "CD4 under 100: serum CrAg", detail: "Positive - LP; CSF negative - pre-emptive fluconazole", tone: "warn" },
          { label: "Cotrimoxazole 960 mg daily", detail: "If CD4 350 or less or WHO stage 3-4" },
          { label: "Fundoscopy if CD4 under 100", detail: "Look for CMV retinitis" },
          { label: "Start TLD rapidly", detail: "Same day to 7 days; delay only for crypto or TB meningitis", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "CD4 ladder of opportunistic infections",
        caption: "Lower rungs need more prophylaxis and screening",
        steps: [
          { label: "Any CD4: TB, zoster, bacterial pneumonia", detail: "TPT after excluding active TB" },
          { label: "Under 350: bacterial, malaria, Isospora", detail: "Cotrimoxazole 960 mg daily (NACO)" },
          { label: "Under 200: PCP, candida oesophagitis", detail: "AHD package; TB-LAM" },
          { label: "Under 100: toxoplasma, cryptococcus, PML", detail: "CrAg screen; toxo IgG", tone: "warn" },
          { label: "Under 50: CMV, MAC, CNS lymphoma", detail: "Fundoscopy 3-monthly; urgent ART", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "When to start ART after an OI",
        columns: ["OI", "Start ART", "Why"],
        rows: [
          ["TB (non-CNS)", "Within 2 weeks", "Lower mortality at low CD4"],
          ["TB meningitis", "4-8 weeks", "Early ART caused more severe events"],
          ["Cryptococcal meningitis", "4-6 weeks", "COAT trial excess deaths"],
          ["PCP, toxoplasma, CMV", "Within 2 weeks", "ACTG A5164 benefit"],
          ["Cryptosporidium, PML, Kaposi", "Immediately", "ART is the only cure"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "An **opportunistic infection** causes disease because HIV has depleted CD4 cells.",
            "**Advanced HIV disease** is CD4 under 200 or WHO stage 3-4, or any child under 5.",
            "India has about **25 lakh PLHIV**; adult prevalence about 0.2%.",
            "**TB is the commonest OI** and the leading cause of death in PLHIV.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "Any CD4: **TB**, zoster, bacterial pneumonia, oral candida.",
            "Under 200: **PCP** and oesophageal candidiasis.",
            "Under 100: **toxoplasmosis, cryptococcus**, cryptosporidium, PML.",
            "Under 50: **CMV retinitis**, disseminated MAC, CNS lymphoma.",
            "**IRIS** is paradoxical or unmasking, mostly in the first 3 months of ART.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "**PCP**: weeks of exertional breathlessness, dry cough, desaturation on walking.",
            "**Toxoplasmosis**: fever, headache, hemiparesis, seizures.",
            "**CMV retinitis**: floaters and painless vision loss; pizza-pie fundus.",
            "**Oesophageal candida**: painful swallowing with oral thrush.",
            "TB 4-symptom screen: **cough, fever, weight loss, night sweats**.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Baseline **CD4 and viral load**; VL at 6 and 12 months, then yearly.",
            "**Serum CrAg** at CD4 under 100 and **urine TB-LAM** in sick or low-CD4 patients.",
            "PCP: induced sputum IF/PCR, **LDH over 500**, ABG for PaO2.",
            "Brain lesions: **contrast MRI**, toxo IgG; negative IgG suggests lymphoma or TB.",
            "Diarrhoea: stool **modified acid-fast stain** for Cryptosporidium and Cystoisospora.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Cotrimoxazole 960 mg daily** at CD4 350 or less prevents PCP, toxo, Isospora.",
            "**TPT**: 3HP weekly for 12 weeks or isoniazid daily for 6 months.",
            "PCP: **high-dose cotrimoxazole for 21 days**; steroids if PaO2 under 70.",
            "Toxo: pyrimethamine-sulfadiazine-folinic acid, or **cotrimoxazole**, for 6 weeks.",
            "CMV: **valganciclovir 900 mg twice daily**, intravitreal ganciclovir for zone 1.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Start ART **within 2 weeks** of most OIs, including TB.",
            "Delay ART **4-6 weeks** in cryptococcal and 4-8 weeks in TB meningitis.",
            "With rifampicin, give **dolutegravir 50 mg twice daily**.",
            "Continue **secondary prophylaxis** until CD4 over 200 for 3-6 months.",
            "**TB-IRIS**: continue ART and ATT, add prednisolone.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Admit with SpO2 under 94%, confusion, focal deficit, seizure or vision loss.",
            "**Danger signs**: RR over 30, HR over 120, cannot walk, temperature 39 C or more.",
            "Start **empirical ATT** in a seriously ill PLHIV when TB is likely and tests are negative.",
            "Watch cotrimoxazole for rash, **hyperkalaemia** and cytopenias.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: continue cotrimoxazole; isoniazid TPT is safe.",
            "**HIV-exposed infants**: cotrimoxazole from 6 weeks until HIV is excluded.",
            "**HBV co-infection**: ART must contain tenofovir plus lamivudine.",
            "No live vaccines at **CD4 under 200**.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "PCP needing ventilation has **over 50% mortality**.",
            "An OI after 6 months on ART suggests **treatment failure**; check viral load.",
            "Failure is **VL over 1000 copies/mL** twice, 3 months apart, after adherence support.",
            "Never **stop ART for IRIS** unless life-threatening.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**NACO 2021**: TLD first line, CPT at CD4 350 or less, AHD package.",
            "**WHO 2021**: rapid ART and ART within 2 weeks of TB treatment.",
            "**WHO 2022**: CrAg screening and single high-dose L-AmB for crypto.",
            "**DHHS 2024**: no MAC prophylaxis if ART starts immediately.",
          ],
        },
      ],
      tables: [
        {
          heading: "OI drugs",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Cotrimoxazole prophylaxis", "960 mg PO once daily", "Until CD4 over 350 twice on ART", "Rash, SJS, cytopenias, hyperkalaemia"],
            ["Cotrimoxazole for PCP", "TMP 15-20 mg/kg/day in 3-4 doses", "21 days", "As above; adjust in CKD"],
            ["Prednisolone for PCP", "40 BD d1-5, 40 OD d6-10, 20 OD d11-21", "21 days", "Hyperglycaemia; unmasks TB"],
            ["Pyrimethamine + sulfadiazine", "200 mg then 50-75 mg daily + 1-1.5 g 6-hourly + folinic acid", "6 weeks", "Marrow suppression, crystalluria"],
            ["Valganciclovir", "900 mg BD then 900 mg OD", "14-21 days, then maintenance", "Neutropenia; renal dosing"],
            ["3HP", "Isoniazid 900 mg + rifapentine 900 mg weekly", "12 weeks", "Flu-like reaction, hepatitis"],
            ["Fluconazole", "200-400 mg daily", "14-21 days (oesophagitis)", "Hepatitis, interactions"],
          ],
        },
        {
          heading: "Ring-enhancing lesions",
          columns: ["Feature", "Toxoplasmosis", "CNS lymphoma", "Tuberculoma"],
          rows: [
            ["CD4", "Under 100", "Under 50", "Any"],
            ["Lesions", "Multiple, basal ganglia", "Single, periventricular", "Multiple, with meningitis"],
            ["Test", "Toxo IgG positive", "CSF EBV PCR", "CBNAAT, chest TB"],
            ["Trial therapy", "Response in 7-14 days", "No response; biopsy", "Slow response to ATT"],
          ],
        },
        {
          heading: "ART timing after OI",
          columns: ["OI", "Start ART", "Note"],
          rows: [
            ["TB (non-CNS)", "Within 2 weeks", "DTG 50 mg BD with rifampicin"],
            ["TB meningitis", "4-8 weeks", "Higher adverse events if early"],
            ["Cryptococcal meningitis", "4-6 weeks", "COAT trial"],
            ["PCP, toxo, CMV", "Within 2 weeks", "ACTG A5164"],
          ],
        },
      ],
      remember: [
        "**CD4 ladder**: 200 PCP, 100 toxo and crypto, 50 CMV and MAC.",
        "One tablet, five infections: **cotrimoxazole** covers PCP, toxo, Isospora, bacteria, malaria.",
        "PCP steroids when **PaO2 under 70** or A-a gradient 35 or more.",
        "**Rifampicin doubles dolutegravir**: 50 mg twice daily.",
        "Crypto ART at **4-6 weeks**; everything else within 2 weeks (except TBM).",
        "**Toxo IgG negative**: think lymphoma.",
        "AHD package: **CrAg, LAM, CPT, TPT, rapid ART**.",
      ],
    },
  },

  "infectious-fever-hiv-special-situations": {
    checked: "2026-10",
    updated: [
      "WHO PEP guideline 2024: TDF + 3TC/FTC + DTG preferred for 28 days; full course at first visit; HIV test at baseline and 3 months.",
      "WHO 2022: long-acting cabotegravir PrEP every 2 months; WHO 2025: twice-yearly lenacapavir PrEP.",
      "WHO 2023 viral load policy brief: undetectable = zero sexual transmission (U=U); under 1000 = almost zero.",
      "NACO 2021: TLD for adults and pregnant women, paediatric DTG, VL at 6 and 12 months then yearly.",
      "WHO 2021: DTG for all women including at conception; high-risk infant dual prophylaxis for 12 weeks if breastfed.",
      "WHO triple elimination framework (HIV, syphilis, hepatitis B); dual HIV/syphilis RDT in Indian ANC.",
    ],
    master: {
      heading: "Master revision table - HIV special situations",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definitions", "**PEP** - ART after exposure; **PrEP** - ART before exposure in HIV-negative people; **PPTCT/EMTCT** - package preventing vertical transmission."],
        ["Burden", "About **25 lakh PLHIV**, about 66,000-68,000 new infections a year, about 20,000 pregnant women with HIV yearly; untreated MTCT **15-45%**, under 1% on suppressive ART."],
        ["Transmission risk", "Needlestick **0.3%**, mucosal 0.09%, receptive anal 1.4%; HBV 6-30%, HCV 1.8%."],
        ["PEP regimen", "Wash with soap and water, no squeezing; **TLD once daily x 28 days**, ideally within 2 hours, **not after 72 hours**; HBIG + vaccine if non-immune."],
        ["Exposure grading (NACO)", "Mild, moderate, **severe (hollow-bore, visible blood, artery/vein needle)**; PEP if source positive or unknown."],
        ["PrEP", "**TDF/FTC daily** (2-1-1 for cisgender men); **CAB-LA 600 mg IM every 8 weeks**; lenacapavir twice yearly; exclude acute HIV; HIV test every 3 months, eGFR 60 or more."],
        ["PPTCT antenatal", "**Dual HIV/syphilis RDT** first visit; lifelong **TLD** irrespective of CD4; DTG safe; VL in late third trimester; benzathine penicillin for syphilis."],
        ["Delivery", "Vaginal if suppressed; CS for obstetric reasons (consider if VL over 1000); avoid ARM, episiotomy, instrumental delivery."],
        ["Infant prophylaxis", "Low-risk: **nevirapine 6 weeks** (10/15 mg); high-risk: **AZT + NVP**, 12 weeks if breastfed; cotrimoxazole from 6 weeks."],
        ["Feeding", "**Exclusive breastfeeding 6 months** with maternal ART; continue to at least 12 months; no mixed feeding."],
        ["EID", "**DBS DNA PCR at 6 weeks**, 6 and 12 months or 6 weeks after weaning; antibody at 18 months (maternal IgG till then)."],
        ["Paediatric ART", "Treat all; **ABC + 3TC + DTG** (pDTG 10 mg from 4 weeks and 3 kg; 50 mg from 20 kg); neonates AZT + 3TC + RAL/NVP."],
        ["HIV-2", "Western India, often dual; slow, low VL; **resistant to NNRTIs**; HIV-1 VL misses it; **TLD suitable**."],
        ["Monitoring and U=U", "VL at 6, 12 months then yearly; failure 1000 or more twice; **undetectable = untransmittable**."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Occupational exposure: PEP pathway",
        steps: [
          { label: "First aid at once", detail: "Soap and water, let bleed; no squeezing, scrubbing or bleach", tone: "warn" },
          { label: "Grade exposure and source status", detail: "Mild, moderate, severe; source positive, unknown or negative", tone: "decision" },
          { label: "Baseline tests of exposed person", detail: "HIV, HBsAg, anti-HBs, anti-HCV, creatinine, pregnancy" },
          { label: "Start TLD once daily x 28 days", detail: "Ideally within 2 hours; not after 72 hours", tone: "warn" },
          { label: "Hepatitis B cover if non-immune", detail: "HBIG 0.06 mL/kg + vaccine 0, 1, 6 months" },
          { label: "Follow-up HIV test at 3 months", detail: "Condoms and no blood donation until negative", tone: "good" },
        ],
      },
      {
        kind: "flow",
        heading: "PPTCT from antenatal visit to 18 months",
        steps: [
          { label: "Dual HIV/syphilis RDT at first ANC", detail: "Plus HBsAg (triple elimination)", tone: "decision" },
          { label: "HIV positive: lifelong TLD now", detail: "Irrespective of CD4; folic acid; DTG safe" },
          { label: "Viral load late third trimester", detail: "Over 1000 or ART under 4 weeks = high-risk infant", tone: "decision" },
          { label: "Infant prophylaxis by risk", detail: "Low: NVP 6 weeks; high: AZT + NVP, 12 weeks if breastfed", tone: "warn" },
          { label: "Exclusive breastfeeding 6 months", detail: "Cotrimoxazole from 6 weeks" },
          { label: "EID by DBS DNA PCR", detail: "6 weeks, 6 and 12 months; antibody at 18 months", tone: "good" },
        ],
      },
      {
        kind: "compare",
        heading: "HIV-1 versus HIV-2",
        columns: ["Feature", "HIV-1", "HIV-2"],
        rows: [
          ["Where", "Worldwide, most of India", "West Africa, western India"],
          ["Progression", "Faster", "Slower"],
          ["Viral load test", "Standard HIV-1 assay", "Not detected by HIV-1 assay"],
          ["Vertical transmission", "15-45% untreated", "About 0-4%"],
          ["NNRTIs", "Active", "Intrinsically resistant"],
          ["Preferred ART", "TLD", "TLD"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**PEP** is 28 days of ART after exposure; **PrEP** is ART before exposure.",
            "Untreated **mother-to-child transmission** is 15-45%; with suppressive ART under 1%.",
            "Needlestick risk from an HIV-positive source is about **0.3%**.",
            "India has about **25 lakh PLHIV** and about 20,000 pregnant women with HIV yearly.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "NACO exposure: mild, moderate, **severe** (hollow-bore needle, visible blood, vessel needle).",
            "**High-risk infant**: mother on ART under 4 weeks, VL over 1000, or new infection.",
            "WHO VL: **undetectable**, under 1000 (suppressed), 1000 or more (unsuppressed).",
            "HIV-2 is told apart by a **differentiating rapid test** or line immunoassay.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "PEP: wash the wound, then **TLD once daily for 28 days**, within 72 hours.",
            "Give **HBIG plus vaccine** if non-immune and source HBsAg positive or unknown.",
            "Sexual assault: PEP, **emergency contraception**, STI cover, counselling.",
            "PrEP: **TDF/FTC daily**; 2-1-1 only for cisgender men.",
            "Long-acting PrEP: **cabotegravir every 8 weeks**; lenacapavir twice yearly.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "PEP: baseline HIV, HBV, HCV, creatinine; **repeat HIV at 3 months**.",
            "PrEP: exclude **acute HIV**; HIV test every 3 months; eGFR 60 or more.",
            "Antenatal: **dual HIV/syphilis RDT** at the first visit.",
            "Infant: **DNA PCR from 6 weeks**; antibody tests only at 18 months.",
            "ART: viral load at **6 and 12 months**, then yearly.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Woman diagnosed in labour: start **TLD now**; treat the infant as high-risk.",
            "Vaginal delivery if suppressed; **caesarean for obstetric reasons**.",
            "Avoid artificial rupture, episiotomy and instrumental delivery where possible.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "Low-risk infant: **nevirapine once daily for 6 weeks**.",
            "High-risk infant: **AZT plus nevirapine**, 12 weeks if breastfed.",
            "**Exclusive breastfeeding** for 6 months with maternal ART; no mixed feeding.",
            "Children: **ABC + 3TC + DTG**; paediatric DTG from 4 weeks and 3 kg.",
            "**HIV-2**: avoid efavirenz and nevirapine; TLD works.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "Fever, rash, sore throat after exposure: suspect **acute HIV**.",
            "PrEP during acute HIV causes **drug resistance**.",
            "Stopping TDF/FTC in HBsAg-positive users can cause a **hepatitis flare**.",
            "Untreated infant HIV kills about **half by 2 years**.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**WHO 2024 PEP**: DTG-based, full 28 days dispensed, test at 3 months.",
            "**WHO 2025**: twice-yearly lenacapavir PrEP recommended.",
            "**WHO 2023**: undetectable viral load means no sexual transmission (**U=U**).",
            "**NACO 2021**: TLD for all adults and pregnant women.",
          ],
        },
      ],
      tables: [
        {
          heading: "PEP, PrEP and PPTCT drugs",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["TLD", "1 tablet PO daily", "PEP 28 days; lifelong in PPTCT", "Nausea, insomnia; DTG BD with rifampicin"],
            ["TDF/FTC PrEP", "1 tablet daily or 2-1-1", "While at risk", "Creatinine rise; HBV flare on stopping"],
            ["Cabotegravir LA", "600 mg IM, 2 doses 4 weeks apart, then every 8 weeks", "While at risk", "Injection-site pain; resistance tail"],
            ["Nevirapine (infant)", "10 mg (2-2.5 kg) or 15 mg (over 2.5 kg) daily", "6 weeks (12 if high-risk breastfed)", "Rash, hepatitis"],
            ["Zidovudine (infant)", "4 mg/kg BD", "6-12 weeks if high-risk", "Anaemia, neutropenia"],
            ["Benzathine penicillin", "2.4 million units IM", "Single or weekly x 3", "Anaphylaxis, Jarisch-Herxheimer"],
          ],
        },
        {
          heading: "NACO exposure grading",
          columns: ["Grade", "Example", "PEP if source positive or unknown"],
          rows: [
            ["Mild", "Small splash, superficial scratch with solid needle", "Yes"],
            ["Moderate", "Large splash, moderate solid-needle injury", "Yes"],
            ["Severe", "Deep hollow-bore injury, visible blood", "Yes, urgently"],
            ["Intact skin", "Blood on intact skin", "No"],
          ],
        },
        {
          heading: "Infant risk and prophylaxis",
          columns: ["Risk", "Definition", "Prophylaxis"],
          rows: [
            ["Low", "Mother on ART over 4 weeks, VL suppressed", "Nevirapine 6 weeks"],
            ["High", "ART under 4 weeks, VL over 1000, new infection", "AZT + NVP, 12 weeks if breastfed"],
            ["Diagnosed while breastfeeding", "Mother found positive postpartum", "Maternal ART + infant dual 12 weeks"],
          ],
        },
      ],
      remember: [
        "**PEP**: TLD x 28 days, 2 hours ideal, 72 hours maximum.",
        "**Wash, don't squeeze**; no bleach.",
        "Infant: **PCR not ELISA** before 18 months.",
        "**Exclusive breastfeeding** with maternal ART; never mixed feeding.",
        "**HIV-2 resists NNRTIs**; give dolutegravir.",
        "**U=U**: undetectable equals untransmittable.",
        "**2-1-1** event-driven PrEP is for cisgender men only.",
      ],
    },
  },
};

export default revision;
