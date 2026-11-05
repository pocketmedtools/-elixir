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
};

export default revision;
