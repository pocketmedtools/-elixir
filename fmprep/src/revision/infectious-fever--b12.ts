import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "infectious-fever-fever-with-thrombocytopenia": {
    checked: "2026-10",
    updated: [
      "WHO Guidelines for clinical management of arboviral diseases (2025): no prophylactic platelet transfusion in stable dengue",
      "INTREST trial (NEJM 2025): combined IV doxycycline plus azithromycin for severe scrub typhus",
      "Surviving Sepsis Campaign 2026: qSOFA not to be used alone for screening; NEWS2/MEWS/SIRS preferred",
      "WHO Guidelines for malaria (2025) and NCVBDC NSP for Malaria Elimination 2023-2027: IV artesunate for severe malaria",
      "ISTH 2020 TTP guideline: plasma exchange on clinical suspicion with PLASMIC 6-7",
    ],
    master: {
      heading: "Fever with thrombocytopenia and fever with jaundice - what to write",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Platelets under 150,000/uL with fever; severe under 50,000; jaundice = bilirubin over 2-3 mg/dL with icterus"],
        ["Frame", "Fever plus what: thrombocytopenia, bleeding, anaemia, jaundice, AKI, ARDS, encephalopathy"],
        ["Big five", "Dengue, malaria, scrub typhus, leptospirosis, enteric fever"],
        ["Mimics", "DIC (long PT), TTP (schistocytes, normal PT), HLH (ferritin, splenomegaly), leukaemia, pseudothrombocytopenia"],
        ["Fever-jaundice-AKI", "Leptospirosis, severe falciparum, scrub typhus, sepsis, hantavirus, HUS"],
        ["History", "Day of illness, exposure (flood, grass, travel), bleeding, urine colour and output, NSAIDs, LMP"],
        ["Examination", "Pulse pressure, eschar, conjunctival suffusion, spleen, tender liver, purpura, fundus"],
        ["First panel", "CBC + Hct + smear, malaria RDT + smear, NS1 or IgM, LFT, RFT + K, cultures, urine, USG"],
        ["Second panel", "PT/aPTT/fibrinogen/D-dimer (ISTH 5+), LDH, schistocytes (over 1%), PLASMIC, ferritin, MAT, PCR"],
        ["OPD treatment", "Paracetamol only, fluids 2.5-3 L, doxycycline 100 mg BD x 7 days after day 3-5, ACT for malaria"],
        ["Severe empirical", "Cultures, then ceftriaxone 2 g IV + doxycycline within 1 h; add IV artesunate if malaria not excluded"],
        ["Platelets", "Only for significant bleeding in dengue; over 50,000 in bleeding DIC; avoid in TTP"],
        ["Special groups", "Pregnancy: hepatitis E, HELLP, AFLP, azithromycin not doxycycline; diabetes: melioidosis, liver abscess"],
        ["Prevention", "NCVBDC vector control, doxycycline 200 mg weekly for lepto exposure, IDSP/IHIP notification"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Fever with low platelets or jaundice: first hour",
        steps: [
          { label: "Vitals, pulse pressure, SpO2, urine, sensorium", detail: "NEWS2; shock, bleeding, oliguria, INR over 1.5 = admit", tone: "decision" },
          { label: "Unstable - resuscitate and treat empirically", detail: "Cultures, ceftriaxone 2 g IV + doxycycline 100 mg; IV artesunate if malaria possible", tone: "warn" },
          { label: "Undress and search", detail: "Eschar, suffusion, calf pain, spleen, liver, purpura" },
          { label: "First panel by day of illness", detail: "Smear + RDT, NS1 (day 1-5), IgM (day 5+), LFT, RFT + K, CBC + Hct" },
          { label: "Read the smear yourself", detail: "Clumps (pseudo), parasites, schistocytes over 1%, blasts", tone: "decision" },
          { label: "Long PT, low fibrinogen - DIC; normal PT + schistocytes - TTP", detail: "ISTH DIC 5+; PLASMIC 6-7 - plasma exchange", tone: "warn" },
          { label: "Specific cause found - narrow therapy", detail: "ACT, doxycycline, penicillin, azithromycin; notify on IHIP", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Treatment ladder by severity",
        steps: [
          { label: "Stable, no focus, day 1-3", detail: "Paracetamol only, fluids, daily review; no antibiotic yet" },
          { label: "Day 3-5, tests negative, scrub or lepto possible", detail: "Doxycycline 100 mg BD x 7 days (azithromycin 500 mg OD x 5 in pregnancy)" },
          { label: "Malaria positive", detail: "Uncomplicated: ACT; severe: artesunate 2.4 mg/kg IV 0, 12, 24 h then daily", tone: "decision" },
          { label: "Severe leptospirosis or sepsis", detail: "Penicillin G 1.5 MU IV 6-hourly or ceftriaxone; dialysis, ventilation", tone: "warn" },
          { label: "Cytopenias and fever beyond 5-7 days of therapy", detail: "Ferritin, TG, fibrinogen, marrow: HLH, leukaemia, kala-azar, TB", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "Fever with jaundice: the three common causes",
        columns: ["Feature", "Leptospirosis", "Falciparum malaria", "Viral hepatitis A/E"],
        rows: [
          ["Fever and jaundice", "Fever continues with jaundice", "Fever with rigors and jaundice", "Fever settles when jaundice comes"],
          ["ALT", "Under 5 times normal", "Usually under 300", "In the thousands"],
          ["Kidney", "Hypokalaemic non-oliguric AKI", "ATN, haemoglobinuria", "Normal"],
          ["Blood count", "Neutrophilia, low platelets", "Anaemia, low platelets", "Normal or lymphocytosis"],
          ["Clinching test", "IgM ELISA, MAT, PCR", "Smear, RDT", "IgM anti-HAV, IgM anti-HEV"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Thrombocytopenia** is a platelet count below 150,000/uL; severe is below 50,000.",
            "Spontaneous bleeding is unusual until counts fall **below 10,000-20,000**.",
            "Classify acute fever as **fever plus what**: thrombocytopenia, jaundice, AKI, rash or ARDS.",
            "**Dengue** is the commonest cause of fever with thrombocytopenia in Indian series.",
            "The **fever-jaundice-AKI triad** means leptospirosis or severe falciparum until proved otherwise.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "Big five: **dengue, malaria, scrub typhus, leptospirosis, enteric fever**.",
            "Mimics that kill: **DIC, TTP and HLH**; also leukaemia and drug-induced thrombocytopenia.",
            "Fever with jaundice adds **viral hepatitis A and E, cholangitis and liver abscess**.",
            "Exposure clues: flood water for lepto, grass for scrub, travel for malaria.",
            "Pregnancy brings **hepatitis E, HELLP and acute fatty liver** into the list.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Dengue: marrow suppression then **immune destruction**; nadir at defervescence.",
            "Malaria: **splenic sequestration** and immune clearance; low platelets alone are not a severity criterion.",
            "DIC: **tissue factor** drives thrombin, consuming platelets and clotting factors.",
            "TTP: **ADAMTS13 under 10%** gives platelet microthrombi with normal coagulation tests.",
            "Leptospirosis jaundice is **cholestatic**; AKI is non-oliguric with low potassium.",
            "In viral hepatitis **ALT is in the thousands** and fever settles as jaundice appears.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Fix the **day of illness**; dengue platelets fall on day 3-7.",
            "Look for an **eschar** in axilla, groin and waistband: scrub typhus.",
            "**Conjunctival suffusion** and calf tenderness suggest leptospirosis.",
            "**Pulse pressure of 20 mmHg or less** means compensated dengue shock.",
            "Cola-coloured urine suggests **intravascular haemolysis** from malaria or G6PD deficiency.",
            "Splenomegaly suggests malaria, enteric fever, HLH, leukaemia or kala-azar.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Read the smear**: clumps, parasites, schistocytes and blasts change everything.",
            "Malaria **RDT plus smear**; NS1 day 1-5; IgM ELISA from day 5.",
            "**ISTH DIC score of 5 or more** is overt DIC; SIC score 4 or more is early.",
            "Schistocytes **over 1%** with normal PT and PLASMIC 6-7 means likely TTP.",
            "**Leptospira MAT** 1:400 or more, or a fourfold rise, confirms leptospirosis.",
            "Ferritin **over 10,000 ng/mL** in an adult strongly suggests HLH.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Paracetamol only**; no NSAIDs, aspirin or IM injections until dengue is excluded.",
            "Oral fluids **2.5-3 L a day** with urine at least 6-hourly.",
            "**Doxycycline 100 mg twice daily for 7 days** for suspected scrub or lepto after day 3-5.",
            "**Azithromycin 500 mg daily for 5 days** in pregnancy.",
            "Malaria by NCVBDC policy: **ACT for falciparum**, chloroquine plus 14-day primaquine for vivax.",
            "**Do not treat the platelet count** in stable dengue.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Severe undifferentiated: cultures, then **ceftriaxone plus doxycycline** within 1 hour.",
            "Add **IV artesunate 2.4 mg/kg** at 0, 12, 24 hours if malaria is possible.",
            "Severe lepto: **penicillin G 1.5 MU IV 6-hourly** or ceftriaxone; early dialysis.",
            "Severe scrub: **IV doxycycline plus azithromycin** together (INTREST 2025).",
            "DIC with bleeding: platelets over 50,000, **FFP 15-30 mL/kg**, cryoprecipitate for low fibrinogen.",
            "TTP: urgent **plasma exchange**, steroids and rituximab; avoid platelet transfusion.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**Pulmonary haemorrhage** in leptospirosis carries mortality often over 50%.",
            "AKI, ARDS, acute liver failure and **secondary HLH** are the late killers.",
            "Admit for bleeding, shock, oliguria, SpO2 under 94%, confusion or **INR over 1.5**.",
            "Fever persisting with worsening cytopenias after 5-7 days: **screen for HLH**.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Monitor haematocrit and platelets **12-24 hourly** in the critical phase.",
            "Dengue discharge: afebrile 48 hours, stable haematocrit, **platelets over 50,000** and rising.",
            "Malaria: repeat smear on **day 3** and day 28; complete primaquine.",
            "Notify dengue, malaria, lepto, scrub and hepatitis on **IHIP (IDSP)**.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**WHO arboviral guideline 2025**: no prophylactic platelets in stable dengue.",
            "Older Indian 2014 guidance allowed platelets below 10,000; follow the newer advice.",
            "**INTREST 2025**: combination IV therapy for severe scrub typhus.",
            "**SSC 2026**: do not screen for sepsis with qSOFA alone.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in fever with thrombocytopenia or jaundice",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Paracetamol", "500-1000 mg orally 6-hourly", "While febrile; max 3-4 g/day", "Liver injury in overdose"],
            ["Doxycycline", "100 mg orally or IV twice daily", "7 days", "Oesophagitis; avoid in pregnancy"],
            ["Azithromycin", "500 mg orally or IV once daily", "5 days", "QT prolongation"],
            ["Ceftriaxone", "2 g IV once daily", "7 days or by culture", "No scrub or rickettsia cover"],
            ["Penicillin G", "1.5 million units IV 6-hourly", "7 days", "Jarisch-Herxheimer reaction"],
            ["IV artesunate", "2.4 mg/kg at 0, 12, 24 h then daily", "Until oral, then 3-day ACT", "Delayed haemolysis at 1-3 weeks"],
          ],
        },
        {
          heading: "DIC vs TTP vs HLH",
          columns: ["Feature", "DIC", "TTP", "HLH"],
          rows: [
            ["PT/aPTT", "Prolonged", "Normal", "Often prolonged"],
            ["Fibrinogen", "Low", "Normal", "Low"],
            ["Schistocytes", "Few", "Over 1%", "Few"],
            ["Ferritin", "Raised", "Mild rise", "Very high"],
            ["Treatment", "Treat cause, replace products", "Plasma exchange", "Treat trigger, dexamethasone"],
          ],
        },
        {
          heading: "Fever with thrombocytopenia - quick differential",
          columns: ["Cause", "Clue", "Test"],
          rows: [
            ["Dengue", "Leucopenia, rising haematocrit", "NS1, IgM"],
            ["Malaria", "Rigors, anaemia, spleen", "Smear, RDT"],
            ["Scrub typhus", "Eschar, lymph nodes", "IgM ELISA, PCR"],
            ["Leptospirosis", "Suffusion, CK, low K, AKI", "IgM ELISA, MAT"],
            ["Enteric fever", "Step-ladder fever, bradycardia", "Blood culture"],
          ],
        },
      ],
      remember: [
        "**Fever plus what** - name the companion syndrome first.",
        "**Low platelets, normal PT** - not DIC; think dengue, malaria, TTP.",
        "Fever-jaundice-AKI: **LMS-SH** - Lepto, Malaria, Scrub, Sepsis, Hantavirus/HUS.",
        "In hepatitis, **fever goes when jaundice comes**.",
        "**Ceftriaxone alone misses scrub** - add doxycycline.",
        "**Treat the patient, not the platelet count.**",
        "Check the **smear before trusting a low count** - EDTA clumping.",
      ],
    },
  },
  "infectious-fever-hlh-macrophage-activation": {
    checked: "2026-10",
    updated: [
      "2022 EULAR/ACR points to consider for MAS/HLH (published 2023): early ferritin screening, glucocorticoids plus anakinra, ciclosporin or emapalumab",
      "US FDA 2025: emapalumab approved for MAS in Still disease",
      "ASTCT 2023: IEC-HS defined as a CAR-T complication separate from cytokine release syndrome",
      "Histiocyte Society adult HLH recommendations (2019) remain the reference for adult etoposide dosing",
    ],
    master: {
      heading: "HLH and infection-triggered hyperinflammation - what to write",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Hyperinflammatory syndrome of uncontrolled cytotoxic T/NK-cell and macrophage activation"],
        ["Types", "Primary (PRF1, UNC13D, STX11, STXBP2, XLP, Griscelli, Chediak-Higashi); secondary (infection, malignancy, MAS, iatrogenic)"],
        ["Indian triggers", "TB, dengue, EBV, scrub typhus, kala-azar, enteric fever, malaria, HIV"],
        ["Mechanism", "Failed perforin killing, persistent antigen, IFN-gamma, IL-1/6/18, TNF storm"],
        ["Clinical", "Persistent fever, hepatosplenomegaly, cytopenias, bleeding, jaundice, CNS signs"],
        ["HLH-2004", "5 of 8: fever, spleen, 2-lineage cytopenia, TG 265+/fibrinogen 150-, haemophagocytosis, NK low, ferritin 500+, sCD25 2400+"],
        ["HScore", "9 variables; 169 or more = probable HLH (93% sensitive, 86% specific)"],
        ["MAS (sJIA)", "Ferritin over 684 plus 2 of platelets 181,000 or less, AST over 48, TG over 156, fibrinogen 360 or less"],
        ["Bedside clue", "High CRP, low ESR; ferritin over 10,000 ng/mL"],
        ["Work-up", "Marrow, sCD25, EBV PCR, NS1, rK39, scrub IgM, CBNAAT, HIV, PET-CT, node biopsy"],
        ["Treatment", "Treat trigger; dexamethasone 10 mg/m2 tapering over 8 weeks with etoposide (adults 50-100 mg/m2 weekly)"],
        ["Specific", "EBV: early etoposide, rituximab; MAS: anakinra, ciclosporin; kala-azar: liposomal amphotericin B"],
        ["Refractory", "Emapalumab, ruxolitinib, DEP regimen; allogeneic HSCT"],
        ["Prognosis", "Adult mortality about 40%; worst with lymphoma"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Suspecting and confirming HLH",
        steps: [
          { label: "Persistent fever plus cytopenias plus organomegaly", detail: "Fever beyond 5-7 days of right treatment, or dengue beyond day 7", tone: "decision" },
          { label: "Send ferritin, TG, fibrinogen, LFT, LDH", detail: "Ferritin over 3000 - evaluate; over 10,000 - highly suggestive" },
          { label: "Calculate HScore and count HLH-2004", detail: "HScore 169+ or 5 of 8 criteria", tone: "decision" },
          { label: "Refer same day to haematology and ICU", detail: "Do not wait for marrow haemophagocytosis", tone: "warn" },
          { label: "Find the trigger", detail: "EBV PCR, NS1, rK39, scrub IgM, CBNAAT, HIV, PET-CT, node and marrow biopsy" },
          { label: "Trigger-directed therapy plus immunosuppression", detail: "Ferritin fall over 50% by 2 weeks = good response", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "HLH treatment ladder",
        steps: [
          { label: "Treat trigger and support organs", detail: "Antimicrobials, ATT, antileishmanials; blood products; PJP prophylaxis" },
          { label: "Corticosteroids with or without IVIG", detail: "Dexamethasone or methylprednisolone; IVIG 1-1.6 g/kg (dengue, mild infection HLH)" },
          { label: "MAS: add anakinra and ciclosporin", detail: "Anakinra up to 2-10 mg/kg/day in severe MAS", tone: "decision" },
          { label: "Severe or EBV-HLH: HLH-94", detail: "Dexamethasone 10 mg/m2 + etoposide (adults 50-100 mg/m2 weekly); rituximab for EBV", tone: "warn" },
          { label: "Refractory: emapalumab, ruxolitinib, DEP", detail: "Bridge to allogeneic stem-cell transplant", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "HLH vs sepsis vs severe dengue",
        columns: ["Feature", "HLH", "Sepsis with DIC", "Severe dengue"],
        rows: [
          ["Fever", "Persistent, unresponsive", "Responds to source control", "Settles by day 5-7"],
          ["Ferritin", "Often over 10,000", "Usually under 3000", "Raised, falls in recovery"],
          ["Spleen", "Enlarged", "Usually normal", "Mild or normal"],
          ["Triglycerides", "High", "Normal or mild", "Mild rise"],
          ["Counts", "2-3 lineages, worsening", "Low platelets", "Platelets recover by day 8-10"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**HLH** is uncontrolled activation of cytotoxic lymphocytes and macrophages causing a cytokine storm.",
            "**Primary HLH** is familial, usually in infants; **secondary HLH** dominates in adults.",
            "**MAS** is HLH in rheumatic disease, classically sJIA and adult-onset Still disease.",
            "Adult triggers: **infection about half**, malignancy about a third, autoimmune about a tenth.",
            "Adult mortality is about **40%**, worst with lymphoma.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "Familial genes: **PRF1, UNC13D, STX11, STXBP2**; also XLP, Griscelli and Chediak-Higashi.",
            "Indian infectious triggers: **TB, dengue, EBV, scrub typhus, kala-azar**, enteric fever.",
            "Malignancy: **T/NK-cell lymphoma** most often; HLH can precede the diagnosis.",
            "Iatrogenic: **CAR-T** (IEC-HS), checkpoint inhibitors and stem-cell transplant.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Failed perforin killing leaves **antigen persisting**, so stimulation never stops.",
            "CD8 T cells pour out **interferon-gamma**, which activates macrophages.",
            "Macrophages release **IL-1, IL-6, IL-18 and TNF** and secrete ferritin.",
            "TNF blocks lipoprotein lipase, so **triglycerides rise**.",
            "Plasminogen activator lowers **fibrinogen**, so ESR falls despite high CRP.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**HLH-2004**: molecular diagnosis or **5 of 8 criteria**.",
            "The eight: fever, spleen, 2-lineage cytopenia, high TG or low fibrinogen, haemophagocytosis, low NK, ferritin, sCD25.",
            "**Ferritin 500 ng/mL** and **sCD25 2400 U/mL** are the thresholds.",
            "**HScore 169 or more** suggests reactive HLH in adults.",
            "**MAS in sJIA**: ferritin over 684 plus 2 of platelets, AST, TG, fibrinogen.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "**Persistent fever** unresponsive to antibiotics, or returning after expected recovery.",
            "**Hepatosplenomegaly**; massive spleen suggests kala-azar or lymphoma.",
            "Bleeding, jaundice, oedema and **encephalopathy or seizures** in severe cases.",
            "Mimics septic shock; often needs ICU.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Ferritin** is the best screen; over 10,000 ng/mL is highly suggestive.",
            "Fasting **triglycerides** and **fibrinogen**, LFT, LDH and CBC.",
            "**Marrow** for haemophagocytosis, lymphoma, granuloma and LD bodies.",
            "Trigger screen: **EBV PCR**, NS1, rK39, scrub IgM, CBNAAT, HIV.",
            "**PET-CT** and node biopsy to find lymphoma in adults.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Suspect early and **refer the same day**; HLH is not an OPD disease.",
            "**Treat the trigger**: ATT, doxycycline, artesunate, liposomal amphotericin B.",
            "Infection HLH often responds to **steroids with or without IVIG**.",
            "**HLH-94**: dexamethasone 10 mg/m2 tapering over 8 weeks plus etoposide.",
            "Adults get **etoposide 50-100 mg/m2 weekly**, reduced in renal failure.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "**EBV-HLH**: etoposide within 4 weeks; rituximab for B-cell EBV.",
            "**MAS**: methylprednisolone, **anakinra** and ciclosporin.",
            "Refractory: **emapalumab**, ruxolitinib or DEP, then stem-cell transplant.",
            "CNS HLH: intrathecal **methotrexate with hydrocortisone**.",
            "Give **co-trimoxazole** and antifungal prophylaxis during therapy.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Good response: **ferritin falls over 50% by 2 weeks**.",
            "Rising ferritin or sCD25 means relapse or a hidden lymphoma.",
            "Monitor glucose, BP and infection on steroids.",
            "Counsel **25% recurrence risk** per pregnancy in familial HLH.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**EULAR/ACR 2023**: glucocorticoids plus anakinra, ciclosporin or emapalumab for MAS.",
            "**FDA 2025**: emapalumab approved for MAS in Still disease.",
            "**ASTCT 2023**: IEC-HS defined after CAR-T therapy.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in HLH and MAS",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Dexamethasone", "10 mg/m2/day IV or oral", "Taper over 8 weeks", "Hyperglycaemia, infection; masks lymphoma"],
            ["Etoposide", "150 mg/m2 IV (children); 50-100 mg/m2 weekly (adults)", "Up to 8 weeks", "Myelosuppression, secondary AML"],
            ["IVIG", "1-1.6 g/kg total IV", "2-3 days", "Fluid overload, thrombosis"],
            ["Anakinra", "100 mg SC up to 2-10 mg/kg/day", "Until remission", "Neutropenia, infection"],
            ["Ciclosporin", "3-5 mg/kg/day orally", "Months, trough-guided", "Nephrotoxicity, hypertension, PRES"],
            ["Emapalumab", "1 mg/kg IV twice weekly", "Until HSCT or remission", "Infection; screen latent TB"],
          ],
        },
        {
          heading: "HLH-2004 criteria",
          columns: ["Criterion", "Threshold"],
          rows: [
            ["Fever", "38.5 C or more"],
            ["Splenomegaly", "Present"],
            ["Cytopenias", "2 of Hb under 9, platelets under 100,000, ANC under 1000"],
            ["TG / fibrinogen", "TG 265 mg/dL or more and/or fibrinogen 150 mg/dL or less"],
            ["Haemophagocytosis", "Marrow, spleen, node or liver"],
            ["NK activity", "Low or absent"],
            ["Ferritin", "500 ng/mL or more"],
            ["sCD25", "2400 U/mL or more"],
          ],
        },
        {
          heading: "Triggers and what to give",
          columns: ["Trigger", "Test", "Treatment"],
          rows: [
            ["EBV", "EBV PCR", "Early etoposide, rituximab"],
            ["Dengue", "NS1, IgM", "Steroids with or without IVIG"],
            ["TB", "CBNAAT, marrow", "ATT; more steroid with rifampicin"],
            ["Kala-azar", "rK39, LD bodies", "Liposomal amphotericin B"],
            ["Still disease", "Clinical, ferritin", "Steroids, anakinra"],
          ],
        },
      ],
      remember: [
        "**5 of 8** for HLH-2004; **169** for HScore.",
        "**High CRP, low ESR**: think HLH.",
        "**Ferritin over 10,000** with cytopenias: HLH until proved otherwise.",
        "**Haemophagocytosis is neither necessary nor sufficient.**",
        "**Dengue febrile beyond day 7**: check ferritin.",
        "**Adults: find the lymphoma.**",
        "**EBV-HLH: etoposide early.**",
      ],
    },
  },
  "infectious-fever-national-programmes-infection": {
    checked: "2026-10",
    updated: [
      "NCVBDC National Strategic Plan for Malaria Elimination 2023-2027: zero indigenous cases by 2027, elimination by 2030",
      "WHO World Malaria Report 2024: India exited the High Burden High Impact group",
      "NTEP 2024: BPaLM 6-month regimen for MDR/RR-TB; Ni-kshay Poshan Yojana raised to Rs 1000/month (November 2024)",
      "NTEP 100-day TB Mukt Bharat Abhiyaan (December 2024, extended 2025): handheld X-ray and NAAT screening of vulnerable groups",
      "WHO Global TB Report 2025: India incidence 187 per lakh in 2024, about 21% below 2015",
      "NCVBDC 2024: kala-azar block-level elimination sustained; LF elimination target 2027 with IDA MDA",
    ],
    master: {
      heading: "National communicable disease programmes - what to write",
      columns: ["Heading", "What to write"],
      rows: [
        ["Framework", "Centrally sponsored under NHM; free tests and drugs; case definitions, reporting, incentives"],
        ["NCVBDC", "Malaria, dengue, chikungunya, JE/AES, LF, kala-azar"],
        ["Malaria targets", "Zero indigenous by 2027; malaria-free by 2030; API and ABER (over 10%)"],
        ["Malaria drugs", "Vivax: CQ 3 days + PQ 14 days; falciparum: ACT-SP (ACT-AL in North-East) + PQ single dose; severe: IV artesunate"],
        ["LF and kala-azar", "LF elimination 2027 with IDA MDA; KA under 1/10,000 per block; single-dose L-AmB 10 mg/kg"],
        ["NTEP", "Renamed 2020; NAAT for all; 2HRZE/4HRE daily FDC; BPaLM for MDR; TPT 6H/3HP/1HP"],
        ["NTEP support", "Ni-kshay notification (mandatory since 2012); Poshan Yojana Rs 1000/month; Ni-kshay Mitra"],
        ["NTEP incentives", "Private notification Rs 500 + outcome Rs 500; informant Rs 500; tribal Rs 750"],
        ["NACP V", "2021-2026; 95-95-95; test and treat with TLD; viral load; EVTHS; HIV Act 2017"],
        ["NVHCP", "Launched 28 July 2018; HCV elimination 2030; SOF + DCV/VEL 12 weeks; tenofovir for HBV; birth dose"],
        ["IDSP", "2004; S-P-L forms weekly on IHIP; immediate cluster reporting; RRT"],
        ["Clinician role", "Screen, test free, notify same day, link to care, use programme regimens, counsel on benefits"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "From OPD patient to programme",
        steps: [
          { label: "Match symptoms to a case definition", detail: "Cough 2 weeks+, fever in endemic area, jaundice, cluster", tone: "decision" },
          { label: "Test free under the programme", detail: "Malaria RDT, NAAT for TB, HIV ICTC, HBsAg/anti-HCV" },
          { label: "Notify the same day", detail: "TB on Ni-kshay; epidemic-prone fevers on IHIP (P form)" },
          { label: "Start programme regimen", detail: "Weight-band FDC, ACT-SP or ACT-AL, CQ + PQ, TLD" },
          { label: "Link benefits and support", detail: "Poshan Yojana Rs 1000/month, Ni-kshay Mitra, PM-JAY" },
          { label: "Follow to outcome", detail: "Cured/completed; contacts screened and offered TPT", tone: "good" },
        ],
      },
      {
        kind: "flow",
        heading: "IDSP: from signal to response",
        steps: [
          { label: "Weekly S, P, L reports on IHIP", detail: "Health worker, doctor, laboratory" },
          { label: "Unusual rise or cluster?", detail: "Or a single case of cholera, AES, measles, Nipah", tone: "decision" },
          { label: "Verify within 24-48 hours", detail: "District Surveillance Unit" },
          { label: "Rapid Response Team investigates", detail: "Epidemiologist, clinician, microbiologist, entomologist", tone: "warn" },
          { label: "Control, samples, report, feedback", detail: "Weekly outbreak report", tone: "good" },
        ],
      },
      {
        kind: "compare",
        heading: "Programmes compared",
        columns: ["Programme", "Target", "First-line regimen", "Platform"],
        rows: [
          ["NCVBDC (malaria)", "Elimination 2030", "ACT-SP / ACT-AL; CQ + PQ", "Case-based surveillance"],
          ["NTEP", "End TB ahead of 2030", "2HRZE/4HRE; BPaLM", "Ni-kshay"],
          ["NACP V", "95-95-95", "TLD", "SOCH"],
          ["NVHCP", "HCV elimination 2030", "SOF + DCV/VEL 12 weeks", "NVHCP MIS"],
          ["IDSP", "Early outbreak detection", "Not applicable", "IHIP"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "Programmes run under **NHM** with free tests, free drugs, case definitions and incentives.",
            "**NCVBDC** covers six diseases: malaria, dengue, chikungunya, JE/AES, filariasis and kala-azar.",
            "**NTEP** was renamed from RNTCP in 2020.",
            "**NACP phase V** runs 2021-2026; **NVHCP** launched on 28 July 2018.",
            "**IDSP** began in 2004; IHIP made it digital and case-based in 2021.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**API** is confirmed malaria cases per 1000 population per year.",
            "**ABER** is tests per 100 population per year; target over 10%.",
            "Malaria categories 0-3; **Category 2** is state API under 1 with some districts 1 or more.",
            "**Kala-azar elimination**: under 1 case per 10,000 per block per year.",
            "TB: microbiologically confirmed vs clinically diagnosed; DS, Hr, MDR, pre-XDR, XDR.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "**Presumptive TB**: cough or fever 2 weeks or more, weight loss, haemoptysis, night sweats.",
            "In PLHIV and contacts, **cough of any duration** counts.",
            "**Kala-azar**: fever over 2 weeks with splenomegaly in an endemic area.",
            "**AES**: fever with altered mental status or new seizures.",
            "**HIV**: three reactive tests (strategy III); DNA PCR in infants.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Malaria: **bivalent RDT** or smear before any treatment.",
            "TB: **upfront NAAT** (CBNAAT or Truenat) for every presumptive case.",
            "Dengue confirmed only by **ELISA or PCR** at sentinel hospitals.",
            "Kala-azar: **rK39** RDT.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Vivax: **chloroquine 3 days plus primaquine 0.25 mg/kg for 14 days**.",
            "Falciparum: **ACT-SP**, but **ACT-AL in the North-East**; add single-dose primaquine.",
            "TB: **2HRZE + 4HRE** daily weight-band FDC.",
            "MDR/RR-TB: **BPaLM for 6 months**.",
            "HIV: **TLD** once daily; HCV: **sofosbuvir plus daclatasvir or velpatasvir** 12 weeks.",
            "Kala-azar: **single-dose liposomal amphotericin B 10 mg/kg**.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "**Ni-kshay Poshan Yojana**: Rs 1000 per month from November 2024.",
            "Private notification **Rs 500**, outcome **Rs 500**; informant Rs 500.",
            "**Ni-kshay Mitra** adopts patients with food baskets.",
            "**TPT** for contacts and PLHIV: 6H, 3HP or 1HP.",
            "LF: **IDA mass drug administration** swallowed in front of the drug administrator.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Notify **TB on Ni-kshay** and epidemic-prone fevers on **IHIP** the same day.",
            "Report **clusters immediately**, not at the weekly cycle.",
            "Severe malaria: **IV artesunate** and report.",
            "Rifampicin resistance: refer to the **nodal DR-TB centre**.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "Pregnancy: no primaquine; universal **HIV, syphilis and HBsAg** screening.",
            "Newborn: **hepatitis B birth dose within 24 hours**; HBIG if mother HBsAg-positive.",
            "PLHIV: **4-symptom TB screen** at every visit; TPT if negative.",
            "TB patients: test for **diabetes and HIV** (bidirectional screening).",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "Malaria NSP 2023-2027; India **exited WHO HBHI** in 2024.",
            "**BPaLM** and **Rs 1000 Poshan** in NTEP 2024.",
            "100-day **TB Mukt Bharat Abhiyaan** from December 2024 with handheld X-ray.",
            "TB incidence **187 per lakh in 2024**, about 21% below 2015.",
            "Kala-azar elimination sustained; **LF target 2027**.",
          ],
        },
      ],
      tables: [
        {
          heading: "Programme drug regimens",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["HRZE FDC", "Weight-band daily oral", "2 months HRZE + 4 months HRE", "Hepatitis, optic neuritis"],
            ["BPaLM", "Bedaquiline, pretomanid, linezolid, moxifloxacin oral", "6 months", "QT, neuropathy, marrow suppression"],
            ["ACT-SP", "Artesunate 4 mg/kg daily + SP day 1", "3 days", "Sulfa allergy; ACT-AL in North-East"],
            ["CQ + primaquine", "CQ 10, 10, 5 mg/kg; PQ 0.25 mg/kg", "3 days; PQ 14 days", "PQ haemolysis in G6PD deficiency"],
            ["Liposomal amphotericin B", "10 mg/kg IV", "Single dose", "Infusion reaction, hypokalaemia"],
            ["TLD", "TDF 300 + 3TC 300 + DTG 50 mg oral", "Lifelong", "Weight gain; double DTG with rifampicin"],
          ],
        },
        {
          heading: "Programmes at a glance",
          columns: ["Programme", "Diseases", "Target", "Platform"],
          rows: [
            ["NCVBDC", "Six vector-borne diseases", "Malaria 2030, LF 2027", "Case-based surveillance"],
            ["NTEP", "TB", "80% fall in incidence from 2015", "Ni-kshay"],
            ["NACP V", "HIV, STI", "95-95-95", "SOCH"],
            ["NVHCP", "Hepatitis A, B, C, E", "HCV elimination 2030", "NVHCP MIS"],
            ["IDSP", "Epidemic-prone diseases", "Early outbreak detection", "IHIP"],
          ],
        },
        {
          heading: "IDSP forms",
          columns: ["Form", "Filled by", "Diagnosis level"],
          rows: [
            ["S", "ASHA, ANM, MPW", "Syndromic"],
            ["P", "Doctors", "Presumptive (clinical)"],
            ["L", "Laboratory", "Confirmed"],
          ],
        },
      ],
      remember: [
        "NCVBDC six: **Mad Dogs Can Jump Fences Kindly**.",
        "**TB notifiable since 2012**.",
        "**Poshan Yojana Rs 1000** per month.",
        "**ACT-AL in the North-East.**",
        "IDSP forms: **S-P-L**.",
        "Kala-azar: **under 1 per 10,000 per block**.",
        "**NVHCP: 28 July 2018**; HCV elimination 2030.",
      ],
    },
  },
};

export default revision;
