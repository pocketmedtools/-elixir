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
};

export default revision;
