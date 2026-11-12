import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "infectious-fever-leptospirosis-detail": {
    checked: "2026-10",
    updated: [
      "ICMR STW 2022-23: leptospirosis sits in the AUF algorithm - doxycycline for outpatients, ceftriaxone plus doxycycline for severe febrile illness.",
      "NCDC monsoon and flood advisories 2023-2025: doxycycline 200 mg weekly for exposed groups; report clusters on IHIP.",
      "SSC 2026: NEWS2/MEWS screening, balanced crystalloids and MAP 65 mmHg applied to septic leptospirosis.",
      "ICMR VRDL 2024: real-time PCR (lipL32) increasingly available for week-1 diagnosis.",
    ],
    master: {
      heading: "Master revision table - Leptospirosis in depth",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Zoonotic **spirochaetal vasculitis** (Leptospira interrogans) from **rat-urine-contaminated water/soil** via abraded skin or mucosa."],
        ["Epidemiology", "About 1 million cases, 59,000 deaths/year; India - **Kerala, TN, Karnataka, Maharashtra, Gujarat, Andaman**; peaks 2-4 weeks after floods."],
        ["Risk groups", "Paddy farmers, MGNREGS canal workers, sewage workers, fishermen, flood-relief workers, slum dwellers with rodents."],
        ["Pathophysiology", "Vasculitis and capillary leak; **proximal tubular Na wasting - non-oliguric hypokalaemic AKI**; cholestasis - bilirubin high, ALT modest; alveolar capillary injury - SPHS."],
        ["Phases", "Incubation 5-14 days; **leptospiraemic (days 1-7)** then **immune (day 7-30)**; 90% anicteric, 5-10% **Weil disease (jaundice, AKI, bleeding)**."],
        ["Bedside signs", "**Conjunctival suffusion without discharge**, calf tenderness, deep jaundice, oliguria, haemoptysis; no eschar."],
        ["First-line tests", "CBC (neutrophilia, low platelets), urine casts, creatinine with **low K**, bilirubin vs ALT, CPK, malaria smear."],
        ["Confirmation", "**Blood PCR week 1**; **IgM ELISA from day 5-7**; **MAT** fourfold rise or single **1:400 or more** (endemic); urine PCR after week 1."],
        ["Mild treatment", "**Doxycycline 100 mg BD x 7 days**; amoxicillin 500 mg TDS x 7 days; azithromycin 500 mg OD x 3 days."],
        ["Severe treatment", "**Penicillin G 1.5 MU IV 6-hourly** or **ceftriaxone 1-2 g IV OD** x 7 days; add doxycycline if scrub possible."],
        ["Organ support", "K replacement, **early daily dialysis**, lung-protective ventilation (6 mL/kg), no NSAIDs or aminoglycosides."],
        ["Prophylaxis", "**Doxycycline 200 mg once weekly** from start to end of exposure; boots, gloves, wound cover, rodent control."],
        ["Prognosis", "Weil 5-15% mortality; **SPHS over 50%**; poor markers - oliguria, hyperkalaemia, hypotension, infiltrates, age over 40."],
        ["Exam one-liner", "Bilirubin far above ALT with low-K AKI and suffusion after floods = **leptospirosis**."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Suspected leptospirosis: diagnostic flow",
        steps: [
          { label: "Fever with exposure to floodwater, paddy or drains", detail: "Ask 4-week exposure; check suffusion, calves, urine output" },
          { label: "Bedside triage for severity", detail: "SpO2, BP, urine output, jaundice, bleeding, sensorium", tone: "decision" },
          { label: "First-line labs", detail: "CBC, urine, creatinine, K, bilirubin, ALT, CPK, malaria smear/RDT" },
          { label: "Day 1-7: blood PCR", detail: "Culture in EMJH if available; IgM may be negative", tone: "decision" },
          { label: "Day 5 onwards: IgM ELISA", detail: "Repeat after 5-7 days if early negative" },
          { label: "MAT on paired sera", detail: "Fourfold rise or single titre 1:400 or more confirms", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Leptospirosis treatment ladder",
        steps: [
          { label: "Exposed, well: prophylaxis", detail: "Doxycycline 200 mg once weekly throughout exposure", tone: "good" },
          { label: "Mild, ambulant", detail: "Doxycycline 100 mg BD x 7 days; amoxicillin or azithromycin in pregnancy" },
          { label: "Moderate - jaundice or rising creatinine", detail: "Admit; ceftriaxone 1-2 g IV OD plus doxycycline", tone: "decision" },
          { label: "Severe - oliguria, shock, bleeding", detail: "Penicillin G 1.5 MU IV 6-hourly; early daily dialysis; noradrenaline MAP 65", tone: "warn" },
          { label: "Pulmonary haemorrhage", detail: "ICU, ventilation 6 mL/kg with PEEP; avoid fluid overload", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "Leptospirosis versus scrub typhus",
        columns: ["Feature", "Leptospirosis", "Scrub typhus"],
        rows: [
          ["Exposure", "Floodwater, paddy, drains, rats", "Grass, bushes, farm work (mite)"],
          ["Key sign", "Conjunctival suffusion, calf tenderness", "Eschar, regional nodes"],
          ["Jaundice", "Often deep (bilirubin above 20)", "Mild"],
          ["AKI", "Non-oliguric, hypokalaemic", "Less common"],
          ["Severe treatment", "Penicillin G or ceftriaxone", "Doxycycline or azithromycin (beta-lactams fail)"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Leptospirosis** is a zoonotic spirochaetal infection caught from **rat urine** in water or soil.",
            "Entry is through **cuts, soaked skin or mucosa**; there is no person-to-person spread.",
            "Indian hot spots: **Kerala, Tamil Nadu, Karnataka, Maharashtra, Gujarat and Andaman**.",
            "Cases peak **2-4 weeks after heavy rain or floods**.",
            "About 90% are mild; **5-10% develop Weil disease** or pulmonary haemorrhage.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "The basic lesion is a **vasculitis with capillary leak**.",
            "Proximal tubular injury wastes sodium and potassium: **non-oliguric, hypokalaemic AKI**.",
            "Jaundice is **cholestatic**, so bilirubin is very high but ALT only modestly raised.",
            "Alveolar capillary injury causes **severe pulmonary haemorrhage syndrome**.",
            "Muscle invasion explains **calf pain and raised CPK**.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Incubation is **5-14 days** (range 2-30).",
            "**Leptospiraemic phase**: abrupt fever, headache, calf myalgia, conjunctival suffusion.",
            "**Immune phase** after day 7: aseptic meningitis, uveitis, urine shedding.",
            "**Weil disease**: jaundice, acute kidney injury and bleeding, often myocarditis.",
            "Haemoptysis or breathlessness signals **pulmonary haemorrhage**, the main killer.",
          ],
        },
        {
          title: "Examination",
          points: [
            "**Conjunctival suffusion without discharge** is the most specific sign.",
            "Squeeze the calves: **tenderness** out of proportion to fever.",
            "Check urine output, BP, SpO2, jaundice and bleeding.",
            "**No eschar** helps separate it from scrub typhus.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "CBC shows **neutrophilic leucocytosis** and low platelets.",
            "Raised creatinine with **low or normal potassium** is typical.",
            "**Blood PCR in week 1**, urine PCR after week 1.",
            "**IgM ELISA from day 5-7**; an earlier negative means nothing.",
            "**MAT** is the reference test: fourfold rise or titre **1:400 or more**.",
            "Always send a **malaria smear or RDT** as well.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Treat on suspicion; **do not wait for serology**.",
            "Mild: **doxycycline 100 mg twice daily for 7 days**.",
            "Pregnancy or child: **amoxicillin** or azithromycin.",
            "**Paracetamol only**; no NSAIDs, no aminoglycosides.",
            "Warn about the **Jarisch-Herxheimer reaction** after the first dose.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Severe: **penicillin G 1.5 million units IV 6-hourly** for 7 days.",
            "Or **ceftriaxone 1-2 g IV once daily** for 7 days; equally effective.",
            "Add doxycycline when **scrub typhus** is not excluded.",
            "Replace potassium; start **early daily dialysis** for oliguria or hyperkalaemia.",
            "Pulmonary haemorrhage: **ICU, ventilation at 6 mL/kg** with PEEP; avoid fluid overload.",
            "Steroids and plasma exchange are **not routine**.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**SPHS** carries mortality over 50% once ventilated.",
            "Other complications: myocarditis, DIC, haemolysis, aseptic meningitis, **late uveitis**.",
            "Red flags: haemoptysis, SpO2 under 94%, oliguria, hyperkalaemia, shock, drowsiness.",
            "Poor outlook with age over 40, **oliguria and lung infiltrates**.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Refer early to a centre with **dialysis and ventilation**.",
            "Check creatinine and urine **2-4 weeks** after discharge.",
            "Ask about eye pain or blurred vision for 6 months: **late uveitis**.",
            "**Notify** every case on the IHIP portal.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**Prophylaxis: doxycycline 200 mg once weekly** from start to end of exposure (NCDC).",
            "ICMR STW places leptospirosis in the **AUF algorithm** with empirical doxycycline.",
            "SSC 2026: **balanced crystalloid**, MAP 65 and NEWS2 screening for septic cases.",
            "No human vaccine in India; **rodent control and boots** remain the core prevention.",
          ],
        },
      ],
      tables: [
        {
          heading: "Leptospirosis drugs",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Doxycycline (treatment)", "100 mg oral BD; child 2.2 mg/kg BD", "7 days", "Oesophagitis, photosensitivity; avoid in pregnancy"],
            ["Amoxicillin", "500 mg oral TDS", "7 days", "Rash; safe in pregnancy"],
            ["Azithromycin", "500 mg oral OD", "3 days", "QT prolongation, GI upset"],
            ["Penicillin G", "1.5 million units IV 6-hourly", "7 days", "J-H reaction; reduce in severe renal failure"],
            ["Ceftriaxone", "1-2 g IV OD", "7 days", "Biliary sludge; does not cover scrub"],
            ["Doxycycline (prophylaxis)", "200 mg oral once weekly", "Throughout exposure", "Not in pregnancy or young children"],
          ],
        },
        {
          heading: "Phase decides the test",
          columns: ["Phase", "Timing", "Test that works"],
          rows: [
            ["Leptospiraemic", "Days 1-7", "Blood PCR, blood culture"],
            ["Immune", "Day 7 to 30", "IgM ELISA, MAT, urine PCR"],
            ["Convalescent", "After 2-4 weeks", "Paired MAT showing fourfold rise"],
          ],
        },
        {
          heading: "Lepto versus look-alikes",
          columns: ["Disease", "Discriminating feature"],
          rows: [
            ["Leptospirosis", "Suffusion, calf tenderness, low-K AKI, bilirubin far above ALT"],
            ["Scrub typhus", "Eschar, nodes, mild jaundice"],
            ["Falciparum malaria", "Positive smear or RDT"],
            ["Dengue", "Leucopenia, rising haematocrit"],
            ["Viral hepatitis", "ALT in thousands, no AKI"],
          ],
        },
      ],
      remember: [
        "**Suffusion, calves, kidneys, jaundice** - think rat urine.",
        "Lepto AKI: **non-oliguric and hypokalaemic**.",
        "**Blood PCR early, serology late** - the test follows the phase.",
        "MAT positive: **fourfold rise or 1:400 or more** in endemic areas.",
        "Treat: **doxycycline mild; penicillin G or ceftriaxone severe**.",
        "Prevent: **doxycycline 200 mg once weekly** during exposure.",
        "Death now comes from the **lung**, so watch SpO2 and respiratory rate.",
      ],
    },
  },

  "infectious-fever-chikungunya-zika-arboviral": {
    checked: "2026-10",
    updated: [
      "WHO 2025 arboviral clinical management guideline: paracetamol first, no NSAIDs until dengue excluded, no steroids in acute chikungunya.",
      "FDA 2023-2025: Ixchiq (2023) and Vimkunya (2025) licensed; Ixchiq licence suspended August 2025 after serious events in older adults.",
      "MoHFW 2024 Zika advisory: screen pregnant women in affected areas and monitor fetal growth.",
      "WHO DON 2024: Chandipura encephalitis outbreak in Gujarat children.",
      "ICMR 2024: new-generation KFD vaccine in development.",
    ],
    master: {
      heading: "Master revision table - Chikungunya, Zika and other arboviral fevers",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "**Arthropod-borne viral fevers**: fever-arthralgia-rash (chikungunya, Zika), haemorrhagic (KFD, CCHF), encephalitic (West Nile, Chandipura); Nipah is bat-borne but in the same differential."],
        ["Chikungunya", "**Alphavirus, Aedes aegypti and albopictus**; 2006 Indian epidemic (E1-A226V); abrupt fever with **symmetrical small-joint polyarthritis**, rash, chik sign."],
        ["Chikungunya phases", "**Acute up to 3 weeks, post-acute 3 weeks-3 months, chronic beyond 3 months** (30-40%)."],
        ["Chikungunya treatment", "**Paracetamol**; NSAID only after dengue excluded; **no steroids acutely**; post-acute prednisolone 10 mg taper; chronic **methotrexate weekly**, HCQ, sulfasalazine."],
        ["Zika", "**Flavivirus, Aedes plus sexual and vertical**; 80% asymptomatic; pruritic rash, non-purulent conjunctivitis; **congenital Zika syndrome**, GBS."],
        ["Zika diagnosis", "**RT-PCR serum 7 days, urine 14 days**; IgM cross-reacts with dengue - PRNT; serial ultrasound in pregnancy."],
        ["KFD", "**Flavivirus, Haemaphysalis spinigera tick**; Western Ghats; monkey deaths herald; haemorrhagic then neurological phase; CFR 3-10%; inactivated vaccine."],
        ["CCHF", "**Nairovirus, Hyalomma tick**, livestock, **nosocomial** (Gujarat 2011); ecchymoses, DIC; CFR 10-40%; isolation, PPE; ribavirin weak evidence."],
        ["West Nile", "**Culex, birds**; Kerala; under 1% neuroinvasive - encephalitis, **flaccid paralysis with intact sensation**; CSF IgM."],
        ["Nipah", "**Pteropus bats**, date-palm sap, person to person; Kerala outbreaks 2018-2025; encephalitis plus ARDS; CFR 40-75%; 21-day contact quarantine."],
        ["Pregnancy", "Zika - microcephaly risk highest in first trimester; chikungunya - **intrapartum transmission to half of neonates**, caesarean does not prevent."],
        ["Prevention", "Aedes source reduction, **weekly dry day**, repellents, nets; Zika condoms **3 months men, 2 months women**; KFD vaccine and DMP oil."],
        ["Latest update", "**WHO 2025 arboviral guideline**; chikungunya vaccines licensed abroad, Ixchiq suspended by FDA 2025."],
        ["Exam one-liner", "Paracetamol only till dengue excluded; Zika spreads sexually; monkey deaths mean KFD; CCHF and Nipah spread in hospitals."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Fever with arthralgia or rash: arboviral work-up",
        steps: [
          { label: "Fever with joint pain or rash in Aedes season", detail: "Day of illness, pregnancy, travel, cluster cases" },
          { label: "Exclude dengue shock first", detail: "Pulse pressure, haematocrit, platelets, warning signs", tone: "warn" },
          { label: "Days 1-5: NS1 and chikungunya/Zika RT-PCR", detail: "Plus malaria RDT or smear" },
          { label: "Day 5 onwards: IgM ELISA", detail: "Zika IgM cross-reacts with dengue - PRNT", tone: "decision" },
          { label: "Pregnant with possible Zika", detail: "Serum and urine RT-PCR; serial ultrasound every 3-4 weeks", tone: "warn" },
          { label: "Notify on IHIP; vector control around the home", detail: "Bed net in the viraemic first week", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Chikungunya arthritis treatment ladder",
        steps: [
          { label: "Acute (under 3 weeks): paracetamol, rest, fluids", detail: "500-1000 mg 6-hourly, max 4 g/day; no steroids" },
          { label: "Dengue excluded: add NSAID", detail: "Naproxen 250-500 mg BD for 1-2 weeks; avoid in CKD" },
          { label: "Post-acute (3 weeks-3 months)", detail: "Prednisolone 10 mg OD x 5 days, taper over 10 days; physiotherapy", tone: "decision" },
          { label: "Chronic inflammatory (over 3 months)", detail: "Methotrexate 7.5-25 mg weekly + folic acid; HCQ, sulfasalazine", tone: "warn" },
          { label: "Refractory or erosive", detail: "Rheumatology referral; manage as RA", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "Dengue versus chikungunya versus Zika",
        columns: ["Feature", "Dengue", "Chikungunya", "Zika"],
        rows: [
          ["Joints", "Myalgia, mild arthralgia", "Severe polyarthritis", "Mild arthralgia"],
          ["Rash and eyes", "Flush, retro-orbital pain", "Maculopapular, chik sign", "Pruritic rash, conjunctivitis"],
          ["Blood", "Leucopenia, low platelets, rising haematocrit", "Lymphopenia", "Usually normal"],
          ["Main danger", "Plasma leak, shock", "Chronic arthritis, neonatal disease", "Congenital Zika syndrome, GBS"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Arboviruses** are spread by mosquitoes, ticks or sandflies.",
            "Syndromes: **fever-arthralgia-rash, haemorrhagic fever and encephalitis**.",
            "**Chikungunya** returned to India in 2005-06 with about 1.4 million cases.",
            "**Zika** outbreaks: Ahmedabad 2016-17, Jaipur 2018, Kerala 2021, Maharashtra and Karnataka 2023-24.",
            "**KFD** in the Western Ghats, **CCHF** in Gujarat and Rajasthan, **West Nile** and **Nipah** in Kerala.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "Chikungunya and Zika: **day-biting Aedes** breeding in stored clean water.",
            "Zika also spreads **sexually, transplacentally and by transfusion**.",
            "KFD: **Haemaphysalis tick**; forest workers; monkey deaths come first.",
            "CCHF: **Hyalomma tick**, livestock slaughter and **hospital blood exposure**.",
            "West Nile: **Culex mosquito and birds**; Nipah: **fruit bats** and date-palm sap.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Chikungunya infects **synovial macrophages and tendons**; persisting antigen drives chronic arthritis.",
            "Zika kills **fetal neural progenitor cells**, causing microcephaly and calcifications.",
            "KFD and CCHF injure endothelium and liver, causing **bleeding and DIC**.",
            "West Nile infects **anterior horn cells**, causing flaccid paralysis.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Chikungunya: abrupt fever, **symmetrical small-joint polyarthritis**, rash, brown nasal pigmentation.",
            "Zika: mild fever, **itchy rash, non-purulent conjunctivitis**; 80% have no symptoms.",
            "KFD: fever, myalgia, bleeding, **palatal papulovesicles**; later neurological phase in 10-20%.",
            "CCHF: fever then **large ecchymoses** and bleeding from day 3-5.",
            "West Nile and Nipah: **encephalitis**; Nipah often with cough and breathlessness.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Always exclude **dengue and malaria** first.",
            "Chikungunya: **RT-PCR days 1-7**, IgM ELISA from day 5-7.",
            "Zika: **RT-PCR serum 7 days, urine 14 days**; IgM cross-reacts with dengue.",
            "KFD, CCHF and Nipah samples go to **NIV Pune or a designated BSL-3 lab**.",
            "West Nile neuroinvasive disease: **IgM in CSF**.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "No antiviral; care is **supportive**.",
            "**Paracetamol only** until dengue is excluded.",
            "**No steroids** in acute chikungunya; they cause rebound arthritis.",
            "After dengue is excluded, an **NSAID** for 1-2 weeks.",
            "Bed net and repellent in the **first viraemic week**.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Post-acute chikungunya: **prednisolone 10 mg** for 5 days, then taper.",
            "Chronic arthritis: **methotrexate weekly** with folic acid, plus HCQ or sulfasalazine.",
            "CCHF: **isolation, PPE, blood products**; ribavirin has weak evidence.",
            "Nipah: ICU care; **monoclonal antibody** only under ICMR protocol.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "Zika in pregnancy: **serial ultrasound every 3-4 weeks**; highest risk in first trimester.",
            "Chikungunya at delivery infects **about half of neonates**; observe the baby 7 days.",
            "Caesarean section **does not prevent** neonatal chikungunya.",
            "**Continue breastfeeding** in chikungunya and Zika.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**Chronic arthritis** in 30-40% of chikungunya at 3 months.",
            "Zika: **congenital Zika syndrome** and Guillain-Barre syndrome.",
            "Fatality: KFD 3-10%, **CCHF 10-40%**, Nipah 40-75%.",
            "Red flags: bleeding, shock, **altered sensorium**, flaccid weakness, febrile neonate.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**WHO 2025 arboviral guideline**: paracetamol first, no early NSAIDs, no acute steroids.",
            "Chikungunya vaccines licensed abroad; **FDA suspended Ixchiq in August 2025**.",
            "Zika sexual counselling: condoms **3 months for men, 2 months for women**.",
            "Chandipura encephalitis outbreak hit **Gujarat children in 2024**.",
          ],
        },
      ],
      tables: [
        {
          heading: "Arboviral fever drugs",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Paracetamol", "500-1000 mg oral 6-hourly, max 4 g/day", "Acute phase", "Liver toxicity; first choice"],
            ["Naproxen", "250-500 mg oral BD", "1-2 weeks, after dengue excluded", "GI bleed, AKI; avoid in CKD"],
            ["Prednisolone", "10 mg oral OD", "5 days, taper over 10 days (post-acute only)", "Rebound if given acutely; hyperglycaemia"],
            ["Methotrexate", "7.5-25 mg oral once weekly + folic acid", "3-6 months or more", "Liver, marrow toxicity; teratogenic"],
            ["Hydroxychloroquine", "200-400 mg oral OD", "3-6 months or more", "Retinopathy; yearly eye check after 5 years"],
            ["Ribavirin (CCHF)", "30 mg/kg load, 15 mg/kg 6-hourly x 4 days, 7.5 mg/kg 8-hourly x 6 days", "10 days", "Haemolysis, teratogenic; weak evidence"],
          ],
        },
        {
          heading: "Indian arboviral fevers at a glance",
          columns: ["Virus", "Vector", "Where", "Hallmark"],
          rows: [
            ["Chikungunya", "Aedes", "Nationwide", "Disabling polyarthritis"],
            ["Zika", "Aedes; sexual, vertical", "Gujarat, Rajasthan, Kerala, Maharashtra, Karnataka", "Congenital Zika syndrome"],
            ["KFD", "Haemaphysalis tick", "Western Ghats", "Haemorrhage then neurological phase"],
            ["CCHF", "Hyalomma tick; nosocomial", "Gujarat, Rajasthan", "Ecchymoses, DIC"],
            ["West Nile", "Culex", "Kerala", "Encephalitis, flaccid paralysis"],
            ["Nipah", "Fruit bats; person to person", "Kerala, West Bengal", "Encephalitis with ARDS"],
          ],
        },
        {
          heading: "Chikungunya phases",
          columns: ["Phase", "Duration", "Treatment"],
          rows: [
            ["Acute", "Up to 3 weeks", "Paracetamol; NSAID after dengue excluded; no steroids"],
            ["Post-acute", "3 weeks to 3 months", "NSAID; short prednisolone taper; physiotherapy"],
            ["Chronic", "Over 3 months", "Methotrexate, HCQ, sulfasalazine; rheumatology"],
          ],
        },
      ],
      remember: [
        "Chikungunya means **'that which bends up'** - stooped with joint pain.",
        "**Chik sign**: brown nasal pigmentation.",
        "**Paracetamol only** until dengue is excluded.",
        "Phases: **3 weeks acute, 3 months post-acute**, then chronic.",
        "**Zika spreads sexually** and causes microcephaly.",
        "**Monkey deaths herald KFD**.",
        "**CCHF and Nipah spread in hospitals** - PPE first.",
      ],
    },
  },
};

export default revision;
