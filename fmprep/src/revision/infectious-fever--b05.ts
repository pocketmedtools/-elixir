import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "infectious-fever-visceral-leishmaniasis": {
    checked: "2026-10",
    updated: [
      "WHO 2022: HIV-VL treated with LAmB 30 mg/kg total plus miltefosine (14 days South Asia).",
      "WHO 2022: PKDL treated with miltefosine 12 weeks (allometric) or LAmB 5 mg/kg twice weekly x 3 weeks.",
      "WHO 2024: East Africa first line changed to paromomycin + miltefosine 14 days.",
      "NCVBDC 2024: India reached under 1 per 10,000 in all endemic blocks (2023); Bangladesh WHO-validated October 2023.",
    ],
    master: {
      heading: "Master revision table - Visceral leishmaniasis and PKDL",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Chronic RES infection by **Leishmania donovani**, spread by **Phlebotomus argentipes**; fatal in over 95% if untreated."],
        ["Epidemiology", "**Bihar, Jharkhand, West Bengal, eastern UP** - 54 districts, 633 blocks; **anthroponotic**; under 1,000 cases a year since 2022."],
        ["Pathogenesis", "Amastigotes in macrophages; **Th1 failure, IL-10 high**; hypersplenism gives pancytopenia; polyclonal hypergammaglobulinaemia."],
        ["Case definition", "**Fever over 2 weeks + splenomegaly** in an endemic area, not responding to antimalarials/antibiotics; confirmed by **rK39** or LD bodies."],
        ["Clinical", "Double-quotidian fever, **massive soft spleen**, hepatomegaly, wasting, **dark skin**, bleeding; nodes uncommon in India."],
        ["Investigations", "Pancytopenia, reversed A:G; **rK39 95-99% sensitive**; splenic aspirate 93-99%; marrow 53-86%; PCR in HIV and PKDL."],
        ["First-line treatment", "**LAmB 10 mg/kg IV single dose** over 2 h; cure over 95%."],
        ["Alternatives", "LAmB 5 mg/kg + miltefosine 7 d; LAmB 5 + paromomycin 10 d; miltefosine + paromomycin 10 d; AmB deoxycholate 1 mg/kg x 15 doses."],
        ["HIV-VL", "LAmB 5 mg/kg days 1-11 alternate (30 mg/kg) + **miltefosine 100 mg/day x 14 d**; ART; secondary prophylaxis if CD4 under 200."],
        ["Pregnancy", "**LAmB** only; miltefosine teratogenic; antimonials cause abortion."],
        ["PKDL", "5-15% after VL, years later; macular commonest; **miltefosine 12 weeks** or LAmB 5 mg/kg twice weekly x 3 weeks."],
        ["Follow-up", "1, 3, 6, 12 months; **definitive cure at 6 months**; watch for PKDL for 3 years; KAMIS entry."],
        ["Programme", "Target **under 1 per 10,000 per block per year**; IRS alpha-cypermethrin twice yearly up to 6 feet; ACD; ASHA incentive; wage compensation."],
        ["Viva traps", "rK39 cannot diagnose relapse; SSG and miltefosine monotherapy obsolete in Bihar; PKDL is the reservoir."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Suspected kala-azar: PHC to definitive cure",
        steps: [
          { label: "Fever over 2 weeks + splenomegaly, endemic block", detail: "Not responding to antimalarials or antibiotics", tone: "decision" },
          { label: "rK39 RDT at PHC/CHC", detail: "Fingerprick; read in 10-20 min" },
          { label: "rK39 negative but strong suspicion", detail: "Refer for marrow or splenic aspirate, PCR; rule out malaria, leukaemia", tone: "decision" },
          { label: "rK39 positive - confirmed VL", detail: "Screen HIV, TB, CBC, creatinine, potassium" },
          { label: "Severe features?", detail: "Hb under 5, bleeding, jaundice, HIV, pregnancy, age under 2", tone: "warn" },
          { label: "Single-dose LAmB 10 mg/kg IV", detail: "Over 2 h in 5% dextrose; treat infections" },
          { label: "Follow up 1, 3, 6, 12 months", detail: "Spleen, Hb, weight; enter in KAMIS" },
          { label: "Definitive cure at 6 months", detail: "Watch for PKDL for 3 years", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "VL treatment choices in India",
        steps: [
          { label: "LAmB 10 mg/kg single dose", detail: "First line; pregnancy, children, CKD", tone: "good" },
          { label: "LAmB 5 mg/kg + miltefosine 7 days", detail: "Or LAmB 5 + paromomycin 10 days" },
          { label: "Miltefosine + paromomycin 10 days", detail: "When LAmB unavailable; contraception" },
          { label: "AmB deoxycholate 1 mg/kg x 15 doses", detail: "Admit; monitor creatinine, potassium", tone: "warn" },
          { label: "HIV-VL or relapse", detail: "LAmB 30 mg/kg total + miltefosine 14 days; ART; prophylaxis", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "VL versus PKDL",
        columns: ["Feature", "Visceral leishmaniasis", "PKDL"],
        rows: [
          ["Site", "Spleen, liver, marrow", "Skin"],
          ["Presentation", "Fever, massive spleen, pancytopenia", "Hypopigmented macules or nodules around mouth"],
          ["Mortality", "Fatal untreated", "Not fatal; cosmetic and stigma"],
          ["Diagnosis", "rK39, aspirate", "rK39 + clinical; skin PCR"],
          ["Treatment", "LAmB 10 mg/kg single dose", "Miltefosine 12 weeks or LAmB 30 mg/kg over 3 weeks"],
          ["Programme role", "Index case", "Reservoir sustaining transmission"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Kala-azar** is visceral infection of macrophages by **Leishmania donovani**.",
            "The Indian vector is the sandfly **Phlebotomus argentipes**; humans are the only reservoir.",
            "Endemic in **Bihar, Jharkhand, West Bengal and eastern UP**: 54 districts, 633 blocks.",
            "Untreated symptomatic VL is **fatal in over 95%**.",
            "Elimination target is **under 1 case per 10,000** per block per year, reached in 2023.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "Sandflies breed in **moist soil and cracks of mud walls** and cattle sheds.",
            "They are weak hoppers, flying low, active from dusk.",
            "Risk rises with **malnutrition, HIV**, poor housing and a household case.",
            "Incubation is usually **2-6 months**; most infections stay silent.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Amastigotes survive inside macrophages by blocking the oxidative burst.",
            "Disease follows **Th1 failure with high IL-10**.",
            "Hypersplenism and marrow infiltration cause **pancytopenia**.",
            "Polyclonal B-cell activation gives **high globulin** and reversed A:G ratio.",
            "Liposomal amphotericin is carried into the same macrophages, so it works well.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Fever over 2 weeks, sometimes **double-quotidian**, in a patient who stays ambulant.",
            "**Massive soft splenomegaly**, moderate liver, weight loss and dark skin.",
            "Pallor, bleeding and secondary infections follow cytopenia.",
            "**Lymph nodes are uncommon** in Indian VL but common in Sudan.",
            "HIV-VL may have a small spleen and unusual sites.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "CBC shows **pancytopenia**; albumin low, globulin high.",
            "**rK39 rapid test** is first line: about 95-99% sensitive in South Asia.",
            "rK39 stays positive for years, so it **cannot diagnose relapse**.",
            "**Splenic aspirate** is 93-99% sensitive but can bleed; marrow is safer.",
            "Use **PCR** for HIV-VL, PKDL and relapse; screen all for HIV and TB.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Give **liposomal amphotericin B 10 mg/kg IV once** over 2 hours.",
            "Treatment is free and supervised at kala-azar treatment centres.",
            "Treat infections, correct anaemia and improve nutrition alongside.",
            "Cure exceeds 95% with a single hospital day.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Combinations: **LAmB plus miltefosine 7 days** or LAmB plus paromomycin 10 days.",
            "Miltefosine plus paromomycin for 10 days if LAmB is unavailable.",
            "**Amphotericin deoxycholate 1 mg/kg for 15 doses** needs creatinine and potassium monitoring.",
            "**SSG and miltefosine monotherapy** are no longer used in Bihar.",
            "Relapse needs a tissue diagnosis and LAmB 15-30 mg/kg total.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**HIV-VL**: LAmB 30 mg/kg total plus miltefosine 14 days, then ART.",
            "Give secondary prophylaxis with LAmB every 3-4 weeks while CD4 is under 200.",
            "**Pregnancy**: LAmB only; miltefosine is teratogenic.",
            "Women on miltefosine need contraception during and for months after treatment.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**Secondary infection** is the main cause of death.",
            "Admit for Hb under 5, bleeding, jaundice, oedema, HIV or extremes of age.",
            "**PKDL** follows 5-15% of Indian cases, often 2-3 years later.",
            "Miltefosine can cause **keratitis**; stop it if the eyes hurt.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Review at 1, 3, 6 and 12 months; **definitive cure at 6 months**.",
            "Watch for PKDL for **3 years**; enter every case in **KAMIS**.",
            "Programme uses **IRS with alpha-cypermethrin** twice a year, up to 6 feet.",
            "Active case search, ASHA incentives and **wage compensation** support completion.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs for kala-azar and PKDL",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Liposomal amphotericin B", "10 mg/kg IV over 2 h", "Single dose", "Infusion reaction, hypokalaemia; safe in pregnancy"],
            ["LAmB + miltefosine", "5 mg/kg IV once + 2.5 mg/kg/day oral", "Miltefosine 7 days", "Vomiting, hepatotoxicity, teratogenic"],
            ["LAmB + paromomycin", "5 mg/kg IV once + 11 mg/kg base IM daily", "Paromomycin 10 days", "Ototoxicity, nephrotoxicity"],
            ["Amphotericin B deoxycholate", "1 mg/kg IV daily or alternate days", "15 doses", "Nephrotoxicity, low potassium, rigors"],
            ["HIV-VL", "LAmB 5 mg/kg x 6 doses + miltefosine 100 mg/day", "14 days, then prophylaxis", "Start ART; relapse common"],
            ["PKDL miltefosine", "Allometric, adult about 50 mg BD", "12 weeks", "Keratitis; contraception"],
          ],
        },
        {
          heading: "Fever with big spleen - differential",
          columns: ["Condition", "Clue", "Test"],
          rows: [
            ["Kala-azar", "Endemic area, pancytopenia, dark skin", "rK39"],
            ["Hyperreactive malarial splenomegaly", "Repeated malaria, high IgM", "Malaria antibody"],
            ["CML", "High WBC, basophils", "BCR-ABL"],
            ["Myelofibrosis", "Tear-drop cells, dry tap", "Marrow biopsy"],
            ["Lymphoma", "Nodes, B symptoms", "Biopsy"],
          ],
        },
        {
          heading: "PKDL versus leprosy",
          columns: ["Feature", "PKDL", "Leprosy"],
          rows: [
            ["Sensation", "Normal", "Lost"],
            ["Nerves", "Normal", "Thickened"],
            ["Site", "Around mouth, symmetric", "Asymmetric patches"],
            ["Test", "rK39, skin PCR", "Slit-skin smear AFB"],
          ],
        },
      ],
      remember: [
        "**Two weeks, big spleen, Bihar** - do rK39.",
        "**One dose, ten mg per kg** - LAmB.",
        "rK39 stays positive - **never use it for relapse**.",
        "**PKDL is the reservoir** in anthroponotic Indian VL.",
        "**Nodes in Sudan, dark skin in India.**",
        "Spray **6 feet high** - the sandfly is a low hopper.",
        "Miltefosine: **oral, teratogenic, eyes**.",
      ],
    },
  },
  "infectious-fever-filariasis": {
    checked: "2026-10",
    updated: [
      "WHO 2017 alternative MDA guideline: IDA (ivermectin + DEC + albendazole) where onchocerciasis and loiasis are absent.",
      "NCVBDC 2024: India targets LF elimination by 2027 with biannual nationwide MDA rounds (February and August).",
      "WHO 2021 MMDP aide-memoire (2nd ed): minimum package now includes mental-health and psychosocial care.",
      "WHO 2024 progress report: 21 countries validated, including Bangladesh and Lao PDR (2023) and Brazil (2024).",
    ],
    master: {
      heading: "Master revision table - Lymphatic filariasis",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Mosquito-borne infection of **lymphatics** by **W. bancrofti** and **B. malayi**; leading cause of permanent disability."],
        ["Burden", "India about **40% of global burden**; **345 districts, 20 states/UTs**; elimination target **2027**."],
        ["Vector", "**Culex quinquefasciatus** (dirty water) for W. bancrofti; **Mansonia** (Pistia) for B. malayi; nocturnal periodicity 10 pm-2 am."],
        ["Pathogenesis", "Adult worms cause **lymphangiectasia**; bacterial **ADLA** through entry lesions drives elephantiasis; **Wolbachia** endosymbiont."],
        ["Clinical", "Asymptomatic mf; acute **ADLA, AFL**; chronic **lymphoedema, hydrocele, chyluria**; occult **TPE**."],
        ["Staging", "**Dreyer 1-7**: reversible, irreversible, shallow folds, knobs, deep folds, mossy, dependent."],
        ["Diagnosis", "**Night smear 8:30 pm-12:30 am** (sheathed mf); **FTS antigen any time**; ultrasound filarial dance sign."],
        ["Individual treatment", "**DEC 6 mg/kg + albendazole 400 mg**; DEC 12 days classic; **doxycycline 200 mg x 4-6 weeks**."],
        ["Lymphoedema care", "**Wash, dry, treat entry lesions, elevate, exercise, footwear**; cuts ADLA by 50-75%."],
        ["ADLA", "Rest, elevation, paracetamol, **amoxicillin**; no DEC in attack; benzathine penicillin 3-weekly if recurrent."],
        ["TPE", "Eosinophils over 3,000, IgE over 1,000, no mf; **DEC 6 mg/kg/day x 21 days**."],
        ["MDA", "**DA or IDA** yearly, directly observed, 65% coverage; exclude under 2, pregnancy, seriously ill; ivermectin not under 5 y/90 cm."],
        ["Stopping MDA", "Pre-TAS mf under 1% or antigen under 2%; **TAS-1, 2, 3** with FTS in children **6-7 years**."],
        ["Surgery", "**Hydrocelectomy (excision)** free at CHC/DH; chyluria - low-fat MCT diet, sclerotherapy."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Suspected filariasis: diagnosis in the OPD",
        steps: [
          { label: "Endemic area + limb/scrotal swelling, ADLA or nocturnal cough", tone: "decision" },
          { label: "Acute red hot limb with fever?", detail: "ADLA: antibiotics first, no DEC", tone: "warn" },
          { label: "FTS antigen test (any time)", detail: "75-100 microlitres finger-prick, read at 10 min" },
          { label: "Night blood smear", detail: "60 microlitres, 8:30 pm-12:30 am; sheathed mf" },
          { label: "Eosinophils over 3,000, IgE over 1,000, no mf", detail: "TPE: DEC 6 mg/kg/day x 21 days", tone: "decision" },
          { label: "Mf/antigen positive", detail: "DEC 6 mg/kg + albendazole 400 mg; doxycycline 4-6 weeks" },
          { label: "Lymphoedema or hydrocele", detail: "Line-list for MMDP; hygiene; refer for hydrocelectomy", tone: "good" },
        ],
      },
      {
        kind: "flow",
        heading: "Elimination pathway: MDA to validation",
        steps: [
          { label: "Map endemic district", detail: "Antigen or mf over 1%" },
          { label: "MDA rounds", detail: "DA 5 rounds or IDA 2 rounds; 65% coverage; directly observed" },
          { label: "Pre-TAS at sentinel and spot sites", detail: "Mf under 1% or antigen under 2%", tone: "decision" },
          { label: "TAS-1 in children 6-7 years", detail: "FTS; pass - stop MDA; fail - 2 more rounds", tone: "decision" },
          { label: "TAS-2 and TAS-3", detail: "At 2-3-year intervals" },
          { label: "MMDP package in every district", detail: "Lymphoedema care, ADLA, hydrocele surgery" },
          { label: "WHO validation and post-validation surveillance", tone: "good" },
        ],
      },
      {
        kind: "compare",
        heading: "W. bancrofti versus B. malayi",
        columns: ["Feature", "Wuchereria bancrofti", "Brugia malayi"],
        rows: [
          ["Share in India", "Over 99%", "Under 1%; Kerala, Odisha pockets"],
          ["Vector", "Culex quinquefasciatus", "Mansonia"],
          ["Breeding", "Polluted water, drains", "Aquatic plants (Pistia)"],
          ["Mf tail", "No nuclei at tail tip", "Two terminal nuclei"],
          ["Genital disease", "Hydrocele common", "Spares genitalia"],
          ["Lymphoedema", "Whole limb", "Below knee or elbow"],
          ["Antigen test", "FTS", "Brugia Rapid (antibody)"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Lymphatic filariasis** is infection of lymphatics by filarial worms.",
            "**W. bancrofti** causes over 99% of Indian cases; **B. malayi** the rest.",
            "India has about **40% of the world's burden** in 345 districts.",
            "India aims to **eliminate LF by 2027**.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Culex** breeds in drains and septic tanks; **Mansonia** on Pistia plants.",
            "Microfilariae peak in blood between **10 pm and 2 am**.",
            "There is no multiplication in the mosquito, so repeated bites are needed.",
            "Adult worms live **5-7 years** in lymphatics.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Adult worms dilate lymphatics (**lymphangiectasia**) even without symptoms.",
            "Bacteria enter through toe-web cracks and cause **ADLA**.",
            "Each ADLA attack adds fibrosis, pushing towards **elephantiasis**.",
            "**Wolbachia** bacteria inside worms are killed by doxycycline.",
            "**TPE** is an allergic response to microfilariae trapped in the lungs.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Many carriers have **no symptoms**.",
            "**ADLA**: fever with a red, hot, painful limb for 4-7 days.",
            "**Lymphoedema** is staged by **Dreyer 1-7**.",
            "**Hydrocele** is the commonest chronic sign in men.",
            "Milky urine is **chyluria**; nocturnal cough and wheeze suggest **TPE**.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Night smear** 8:30 pm to 12:30 am shows sheathed microfilariae.",
            "**FTS** detects adult worm antigen at any time of day.",
            "Ultrasound shows the **filarial dance sign**.",
            "TPE shows eosinophils **over 3,000** and IgE **over 1,000**.",
            "Most patients with chronic swelling are **smear-negative**.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Give **DEC 6 mg/kg plus albendazole 400 mg** for active infection.",
            "**Doxycycline 200 mg daily for 4-6 weeks** helps early lymphoedema.",
            "Lymphoedema care: **wash, dry, treat cracks, elevate, exercise, footwear**.",
            "**ADLA**: rest, elevation, paracetamol and amoxicillin; no DEC during attack.",
            "**TPE**: DEC 6 mg/kg/day for 21 days.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Admit severe ADLA with sepsis or abscess for **IV penicillin or ceftriaxone**.",
            "**Hydrocelectomy by excision** is the definitive treatment.",
            "Chyluria needs a **low-fat MCT diet** and sometimes sclerotherapy.",
            "Recurrent ADLA: **benzathine penicillin every 3 weeks**.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnant women** and children **under 2** are excluded from MDA.",
            "No ivermectin **under 5 years or under 90 cm**.",
            "Lactating mothers in the first week skip ivermectin.",
            "Albendazole may trigger seizures in **neurocysticercosis**.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Line-list every patient for **MMDP** and review every 3-6 months.",
            "Count **ADLA episodes per year** as the key outcome.",
            "Refer hydrocele, chyluria and wounds to the district hospital.",
            "FTS can stay positive for years; it is **not a test of cure**.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**IDA** (ivermectin, DEC, albendazole) is used where DA failed (WHO 2017).",
            "India runs **biannual MDA rounds in February and August**.",
            "MDA needs **65% coverage**, swallowed in front of the drug administrator.",
            "**TAS** uses FTS in children aged 6-7 to decide stopping MDA.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in filariasis",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["DEC", "6 mg/kg oral (MDA 100/200/300 mg by age)", "Single yearly; 12 days individual; 21 days TPE", "Fever, headache; not in pregnancy or under 2"],
            ["Albendazole", "400 mg chewed", "Single yearly", "Seizures if neurocysticercosis"],
            ["Ivermectin", "200 micrograms/kg (3-12 mg by height)", "Single yearly (IDA)", "Not under 5 y/90 cm, pregnancy"],
            ["Doxycycline", "200 mg oral daily", "4-6 weeks", "Not in pregnancy or under 8"],
            ["Amoxicillin", "500 mg oral 8-hourly", "7-10 days (ADLA)", "Penicillin allergy"],
            ["Benzathine penicillin", "1.2 MU deep IM", "Every 3 weeks", "Anaphylaxis rare"],
          ],
        },
        {
          heading: "Dreyer stages of lymphoedema",
          columns: ["Stage", "Feature", "Key care"],
          rows: [
            ["1", "Swelling reversible overnight", "Hygiene, elevation, exercise"],
            ["2", "Swelling not reversible", "Hygiene, compression, doxycycline"],
            ["3", "Shallow skin folds", "Hygiene, treat entry lesions"],
            ["4", "Knobs or bumps", "Hygiene, footwear"],
            ["5", "Deep skin folds", "Clean inside folds, antibiotic prophylaxis"],
            ["6", "Mossy lesions", "Wound care, prevent ADLA"],
            ["7", "Dependent for daily activities", "Family care, disability support"],
          ],
        },
        {
          heading: "Leg swelling - differential",
          columns: ["Condition", "Clue", "Test"],
          rows: [
            ["Filarial lymphoedema", "Endemic area, recurrent ADLA, Stemmer sign", "Clinical, FTS"],
            ["DVT", "Acute, calf pain", "Doppler"],
            ["Venous insufficiency", "Varicose veins, pigmentation", "Venous Doppler"],
            ["Systemic oedema", "Bilateral, heart/kidney/liver disease", "Echo, urine, LFT"],
            ["Lipoedema", "Symmetrical, spares feet", "Clinical"],
          ],
        },
      ],
      remember: [
        "**Culex, dirty water, bancrofti; Mansonia, Pistia, malayi.**",
        "**Night smear by night; FTS any time.**",
        "**IDA = Ivermectin, DEC, Albendazole.**",
        "**ADLA is bacterial** - antibiotic, not DEC.",
        "**Wash, dry, elevate, exercise, footwear.**",
        "**TPE**: eosinophils over 3,000, no mf, DEC 21 days.",
        "**Brugia spares the scrotum.**",
        "**TAS kids are 6-7 years old.**",
      ],
    },
  },
  "infectious-fever-helminths-tissue": {
    checked: "2026-10",
    updated: [
      "IDSA/ASTMH 2017 (published 2018): albendazole for 1-2 cysts, albendazole + praziquantel for more than 2, steroids with all.",
      "WHO 2021 Taenia solium NCC guideline: albendazole-based therapy with steroids; individualised antiseizure medicine withdrawal.",
      "Revised Del Brutto diagnostic criteria 2017 replace the 2001 criteria.",
      "WHO-IWGE expert consensus: continuous albendazole without breaks; watch and wait for CE4/CE5.",
    ],
    master: {
      heading: "Master revision table - Tissue helminths",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Larval helminths in **tissues** (brain, liver, lung, muscle, eye); man is an intermediate or dead-end host; stool unhelpful."],
        ["NCC aetiology", "**T. solium eggs** swallowed from a human carrier; pork gives taeniasis only; **vegetarians get NCC**."],
        ["NCC burden", "About **30% of epilepsy** in endemic countries; **SCG** commonest Indian form."],
        ["NCC staging", "**Escobar**: vesicular (hole with dot), colloidal (ring), granular-nodular, calcified; parenchymal vs extraparenchymal."],
        ["NCC diagnosis", "**Del Brutto 2017**; MRI for cysts, CT for calcium; **EITB** under 50% sensitive for single lesion; fundus first."],
        ["NCC treatment", "**Albendazole 15 mg/kg/day x 10-14 d + steroids**; add **praziquantel 50 mg/kg/day if over 2 cysts**; none for calcified; ICP first."],
        ["SCG vs tuberculoma", "SCG **under 20 mm, round, no shift, scolex**; tuberculoma larger, irregular, lipid peak on MRS."],
        ["Hydatid aetiology", "**E. granulosus**; dog definitive host; liver 70%, lung 20%; fluid antigenic - anaphylaxis."],
        ["Hydatid staging", "**WHO-IWGE**: CE1-CE2 active, CE3a (water lily)/CE3b transitional, CE4 (ball of wool)/CE5 inactive."],
        ["Hydatid treatment", "Under 5 cm albendazole; 5-10 cm **PAIR**; CE2/CE3b catheter or surgery; CE4/CE5 watch and wait; albendazole 400 mg BD continuous."],
        ["PAIR", "Puncture, Aspirate, Inject 95% ethanol or 20% saline, Re-aspirate; **not for lung or biliary-communicating cysts**."],
        ["Toxocara", "VLM - child with pica, eosinophilia, hepatomegaly; OLM - leukocoria, exclude **retinoblastoma**; albendazole 5 days."],
        ["Trichinella", "Wild boar/pork; **myalgia, periorbital oedema, eosinophilia**; albendazole 8-14 d + prednisolone."],
        ["Prevention", "Treat tapeworm carriers, sanitation, pig confinement, deworm dogs, hand hygiene, cook pork to 71 C."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "New seizure with a brain lesion: NCC work-up and treatment",
        steps: [
          { label: "Seizure: start antiseizure medicine", detail: "Levetiracetam, carbamazepine or phenytoin" },
          { label: "MRI (CT for calcification), fundoscopy", detail: "Papilloedema or eye cyst?", tone: "decision" },
          { label: "Raised ICP / hydrocephalus / encephalitis", detail: "Steroids, mannitol, shunt; no antiparasitic yet", tone: "warn" },
          { label: "Calcified lesions only", detail: "No antiparasitic; antiseizure medicine alone" },
          { label: "1-2 viable or enhancing cysts", detail: "Albendazole 15 mg/kg/day x 10-14 days + steroids" },
          { label: "More than 2 viable cysts", detail: "Add praziquantel 50 mg/kg/day x 10-14 days" },
          { label: "MRI at 6 months", detail: "Resolved - taper antiseizure medicine after seizure-free period", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Hydatid liver cyst: stage-based ladder",
        steps: [
          { label: "CE4 / CE5 inactive", detail: "Watch and wait; ultrasound yearly", tone: "good" },
          { label: "CE1 / CE3a under 5 cm", detail: "Albendazole 400 mg BD continuous 3-6 months" },
          { label: "CE1 / CE3a 5-10 cm", detail: "PAIR + albendazole cover (before and 1 month after)" },
          { label: "CE2 / CE3b or over 10 cm", detail: "Catheterisation or surgery + albendazole", tone: "decision" },
          { label: "Complicated: rupture, biliary, infected, lung", detail: "Surgery; adrenaline for anaphylaxis; ERCP for biliary", tone: "warn" },
        ],
      },
      {
        kind: "branch",
        heading: "Tissue helminth by organ",
        root: "Tissue helminth suspected",
        arms: [
          { label: "Brain", tone: "warn", steps: ["Neurocysticercosis", "Seizures, raised ICP", "MRI, EITB", "Albendazole + steroids"] },
          { label: "Liver / lung cyst", steps: ["Hydatid (E. granulosus)", "Ultrasound WHO-IWGE stage", "Albendazole, PAIR, surgery"] },
          { label: "Eye", tone: "decision", steps: ["Ocular toxocariasis", "Leukocoria, squint", "Exclude retinoblastoma", "Steroids + albendazole"] },
          { label: "Muscle", steps: ["Trichinellosis", "Myalgia, periorbital oedema, eosinophilia", "Albendazole + prednisolone"] },
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "Tissue helminths are **larvae living in organs**, so stool tests are unhelpful.",
            "**NCC** is brain infection by **Taenia solium** larvae.",
            "NCC causes about **30% of epilepsy** in endemic countries.",
            "**Hydatid** is the larval cyst of the dog tapeworm **E. granulosus**.",
            "**Toxocara** and **Trichinella** cause larva migrans with eosinophilia.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "NCC comes from **swallowing eggs** from a human tapeworm carrier.",
            "Eating pork gives the intestinal tapeworm, so **vegetarians still get NCC**.",
            "Hydatid eggs come from **dog faeces**; cysts form in liver and lungs.",
            "Toxocara affects children with **pica** and puppies at home.",
            "Trichinella follows undercooked **pork or wild boar** meat.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**Escobar stages**: vesicular, colloidal, granular-nodular, calcified.",
            "**Del Brutto 2017** criteria: absolute, neuroimaging and clinical/exposure groups.",
            "**SCG** is a single round lesion under 20 mm without midline shift.",
            "**WHO-IWGE** hydatid stages: CE1-2 active, CE3 transitional, CE4-5 inactive.",
            "CE3a shows the **water lily sign**; CE4 looks like a **ball of wool**.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "NCC presents with **seizures**, headache or raised ICP.",
            "Liver hydatid is often silent; lung hydatid may cause **hydatoptysis**.",
            "VLM: fever, wheeze, big liver and **very high eosinophils**.",
            "OLM: unilateral visual loss, squint, **leukocoria**.",
            "Trichinellosis: **myalgia, periorbital oedema**, splinter haemorrhages.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**MRI** shows cysts and scolex; **CT** shows calcification best.",
            "**EITB** is very specific but misses many single lesions.",
            "Check **fundus**, latent TB and Strongyloides before steroids.",
            "**Ultrasound** stages hydatid; serology misses many lung cysts.",
            "Trichinella: high **CK**, eosinophilia, serology after 3-5 weeks.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Give antiseizure medicine to every NCC patient with seizures.",
            "**Albendazole 15 mg/kg/day for 10-14 days** with steroids for 1-2 cysts.",
            "Add **praziquantel** for more than 2 viable cysts.",
            "**No antiparasitic** for calcified lesions only.",
            "Hydatid: **albendazole 400 mg twice daily**, continuous, with a fatty meal.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Hydatid 5-10 cm CE1/CE3a: **PAIR** with albendazole cover.",
            "CE2, CE3b or large cysts need catheterisation or **surgery**.",
            "CE4 and CE5 are inactive: **watch and wait**.",
            "Toxocara: albendazole 5 days; steroids for eye disease.",
            "Trichinellosis: albendazole 8-14 days plus **prednisolone** if severe.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "**Raised ICP**: steroids, mannitol, shunt; delay antiparasitics.",
            "Ventricular cysts need **endoscopic removal**.",
            "Ruptured hydatid: treat **anaphylaxis** with IM adrenaline first.",
            "Intrabiliary rupture needs **ERCP** and surgery.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "Papilloedema or eye cyst means **no albendazole yet**.",
            "SCG seizure recurrence is higher when the lesion **calcifies**.",
            "Hydatid rupture causes anaphylaxis and **secondary cysts**.",
            "Trichinella deaths come from **myocarditis and encephalitis**.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Repeat **MRI at 6 months** for NCC.",
            "Hydatid ultrasound every 3-6 months in the first year.",
            "Check **LFT and CBC** every 2 weeks on long albendazole courses.",
            "Treat household tapeworm carriers and **deworm dogs**.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs for tissue helminths",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Albendazole (NCC)", "15 mg/kg/day oral in 2 doses, max 1,200 mg", "10-14 days", "Seizures from inflammation; give with steroids"],
            ["Praziquantel (NCC)", "50 mg/kg/day oral in 3 doses", "10-14 days with albendazole", "Levels cut by dexamethasone and enzyme inducers"],
            ["Prednisolone", "1 mg/kg/day oral (or dexamethasone 0.1 mg/kg/day)", "Course of antiparasitic, then taper", "Strongyloides, TB, high sugar"],
            ["Albendazole (hydatid)", "400 mg twice daily with fatty meal", "Continuous 3-6 months, or around PAIR/surgery", "Hepatotoxicity, neutropenia, alopecia"],
            ["Albendazole (Toxocara)", "400 mg twice daily", "5 days", "Add steroids for eye or severe disease"],
            ["Albendazole (Trichinella)", "400 mg twice daily", "8-14 days", "Add prednisolone 30-60 mg/day if severe"],
          ],
        },
        {
          heading: "WHO-IWGE hydatid stages",
          columns: ["Stage", "Look", "Plan"],
          rows: [
            ["CE1", "Unilocular, double wall, sand", "Albendazole or PAIR"],
            ["CE2", "Multivesicular honeycomb", "Catheter or surgery"],
            ["CE3a", "Water lily sign", "Albendazole or PAIR"],
            ["CE3b", "Daughter cysts in solid matrix", "Catheter or surgery"],
            ["CE4", "Ball of wool", "Watch and wait"],
            ["CE5", "Calcified wall", "Watch and wait"],
          ],
        },
        {
          heading: "SCG versus tuberculoma",
          columns: ["Feature", "SCG", "Tuberculoma"],
          rows: [
            ["Size", "Under 20 mm", "Often over 20 mm"],
            ["Shape", "Round, regular", "Irregular"],
            ["Midline shift", "None", "May be present"],
            ["Scolex", "May be seen", "Absent"],
            ["MRS", "No lipid peak", "Lipid peak"],
          ],
        },
      ],
      remember: [
        "**Pork, tapeworm; eggs, cysticercosis.**",
        "**Fundus first** before albendazole.",
        "**Steroids always** with cysticidal drugs.",
        "**Calcified = dead** - no albendazole.",
        "**Over 2 cysts: add praziquantel.**",
        "**PAIR**: Puncture, Aspirate, Inject, Re-aspirate.",
        "**CE4-CE5 inactive** - watch and wait.",
        "**Pork feast, puffy eyes, sore muscles** - trichinellosis.",
      ],
    },
  },
};

export default revision;
