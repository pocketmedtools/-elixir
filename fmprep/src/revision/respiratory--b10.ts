import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "respiratory-adult-respiratory-vaccines": {
    checked: "2026-10",
    updated: [
      "ACIP October 2024: pneumococcal conjugate vaccine for all adults 50 and over; PCV21 added",
      "ACIP June 2024 and April 2025: single-dose RSV vaccine for 75+, and 50-74 at increased risk",
      "FDA January 2025: GBS warning for Arexvy and Abrysvo",
      "WHO 2023: trivalent influenza vaccine from 2024-25 (B/Yamagata removed)",
      "ACIP 2023: no extra precautions for egg allergy",
      "WHO SAGE 2024: COVID-19 revaccination every 6-12 months for high-priority groups",
      "GOLD 2025: RSV vaccine added for COPD 60 and over",
    ],
    master: {
      heading: "Adult respiratory vaccines on one page",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Influenza yearly, PCV once (PCV20/21 or PCV13/15 then PPSV23), RSV once, Tdap, COVID for high-risk"],
        ["Who", "All 50-65 and over; any age with COPD, asthma, heart failure, diabetes, CKD, liver disease, immunosuppression, asplenia"],
        ["Influenza", "0.5 mL IM yearly; April-June (Southern Hemisphere) for most of India; high-dose preferred 65+"],
        ["Pneumococcal", "PCV20/21 single dose; or PCV13/15 then PPSV23 after 1 year (8 weeks if high-risk)"],
        ["Immunology", "Conjugate = T-cell-dependent, memory, cuts carriage; PPSV23 = T-independent, no memory"],
        ["RSV", "Arexvy, Abrysvo, mRESVIA single 0.5 mL IM; 75+ all, 50-74 at risk; Abrysvo 32-36 weeks pregnancy"],
        ["Tdap", "Once in adulthood, Td/Tdap every 10 years; every pregnancy 27-36 weeks"],
        ["COVID-19", "High-priority adults every 6-12 months (WHO SAGE)"],
        ["Contraindication", "Anaphylaxis to prior dose; egg allergy is NOT one; LAIV not in pregnancy or immunosuppression"],
        ["Adverse effects", "Local pain, fever; GBS (rare); myocarditis after mRNA in young males"],
        ["Special groups", "Pregnancy, HIV (PCV at any CD4), CKD (add hepatitis B), vaccinate 2 weeks before immunosuppression"],
        ["Latest", "PCV age 50 (2024), RSV single dose, trivalent influenza, egg allergy precautions removed"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Pneumococcal decision for an adult",
        steps: [
          { label: "Age 50+ or risk condition?", detail: "COPD, diabetes, CKD, HIV, asplenia, smoker", tone: "decision" },
          { label: "Check previous pneumococcal vaccines", tone: "decision" },
          { label: "None: PCV20 or PCV21 once", detail: "Series complete", tone: "good" },
          { label: "Or PCV13/15 then PPSV23", detail: "PPSV23 after 1 year; 8 weeks if high-risk", tone: "neutral" },
          { label: "PPSV23 only before: PCV20/21", detail: "At least 1 year after PPSV23", tone: "warn" },
        ],
      },
      {
        kind: "ladder",
        heading: "Schedule for a 68-year-old with COPD",
        steps: [
          { label: "Influenza yearly", detail: "0.5 mL IM, April-June in most of India", tone: "good" },
          { label: "Pneumococcal conjugate once", detail: "PCV20/21, or PCV13 then PPSV23", tone: "good" },
          { label: "RSV once", detail: "0.5 mL IM, not annual", tone: "good" },
          { label: "Tdap once, then Td every 10 years", tone: "neutral" },
          { label: "COVID-19 every 6-12 months", detail: "High-priority group", tone: "neutral" },
        ],
      },
      {
        kind: "compare",
        heading: "PPSV23 versus conjugate vaccine",
        columns: ["Feature", "PPSV23", "PCV"],
        rows: [
          ["Response", "T-cell-independent", "T-cell-dependent"],
          ["Memory", "None", "Yes"],
          ["Carriage", "No effect", "Reduced"],
          ["Repeat dose", "Hyporesponsiveness", "Boostable"],
          ["Adult role", "Only after PCV13/15", "First choice"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "Five adult respiratory vaccines: **influenza, pneumococcal, RSV, Tdap and COVID-19**.",
            "India has **no adult UIP schedule** except Td in pregnancy.",
            "Most of India has a **monsoon influenza peak**; southern states peak in winter.",
            "**Pneumococcus** is the commonest bacterial cause of adult pneumonia.",
            "Every chronic-disease visit is a **vaccination opportunity**.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Age** over 50-65 is the main indication.",
            "Chronic **lung, heart, kidney and liver disease** and diabetes.",
            "**Immunosuppression**, HIV, asplenia and sickle cell disease.",
            "**Smoking**, alcohol use disorder, CSF leak and cochlear implant.",
            "**Pregnancy**: influenza, Tdap and RSVpreF.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "**PPSV23** gives a T-cell-independent response with no memory.",
            "**Conjugate vaccines** recruit T-helper cells through carrier protein CRM197.",
            "Conjugates give memory and **reduce carriage**, creating herd protection.",
            "Influenza **antigenic drift** means a new vaccine every year.",
            "RSV vaccines target the **prefusion F protein**.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Influenza** 0.5 mL IM every year, April-June in most of India.",
            "**PCV20 or PCV21** single dose completes the pneumococcal series.",
            "Or **PCV13/15 then PPSV23** after at least 1 year.",
            "**RSV vaccine** single dose for 75 and over, and 50-74 at risk.",
            "**Tdap** once, then Td every 10 years; every pregnancy at 27-36 weeks.",
            "All vaccines can be **co-administered** at different sites.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: influenza any trimester, Tdap 27-36 weeks, Abrysvo 32-36 weeks.",
            "**HIV**: give PCV at any CD4 count; avoid live vaccines.",
            "**CKD**: add hepatitis B vaccine; responses are weaker.",
            "Vaccinate **2 weeks before** splenectomy, chemotherapy or rituximab.",
            "**Elderly**: high-dose or adjuvanted influenza vaccine where available.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**Anaphylaxis**: adrenaline 0.5 mg IM; observe 15 minutes after every vaccine.",
            "**Guillain-Barre syndrome** is rare after influenza and RSV vaccines.",
            "**Myocarditis** after mRNA vaccine, mostly young males.",
            "**Egg allergy is not a contraindication** to influenza vaccine.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Record **batch, date and next due date** on an adult vaccine card.",
            "Review the vaccine record at every **NCD clinic** visit.",
            "Vaccinate at **discharge** after pneumonia, COPD or heart failure admission.",
            "Report serious **AEFI** to the district committee.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**ACIP 2024**: pneumococcal conjugate vaccine for all adults 50 and over.",
            "**PCV21 (Capvaxive)** approved in 2024.",
            "**RSV vaccine** is one dose, extended to 50-59 at risk in 2025.",
            "Influenza vaccine became **trivalent** from 2024-25.",
            "**GOLD 2025** recommends RSV vaccine for COPD 60 and over.",
          ],
        },
      ],
      tables: [
        {
          heading: "Adult respiratory vaccines",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Inactivated influenza vaccine", "0.5 mL IM deltoid", "Every year", "Sore arm; egg allergy not a contraindication"],
            ["PCV20 or PCV21", "0.5 mL IM", "Single dose", "Local pain, fatigue"],
            ["PCV13/15 then PPSV23", "0.5 mL IM, then 0.5 mL IM/SC", "PPSV23 after 1 year (8 weeks high-risk)", "PPSV23 has no memory; avoid early repeats"],
            ["RSV vaccine (Arexvy, Abrysvo, mRESVIA)", "0.5 mL IM", "Single dose", "Fatigue, myalgia; rare GBS"],
            ["Tdap", "0.5 mL IM", "Once, then Td every 10 years; every pregnancy", "Local reaction"],
            ["COVID-19 vaccine", "IM per product", "Every 6-12 months in high-risk", "Rare myocarditis with mRNA"],
          ],
        },
        {
          heading: "Pneumococcal pathways",
          columns: ["Previous vaccine", "Give now", "Interval"],
          rows: [
            ["None", "PCV20/21, or PCV13/15 then PPSV23", "PPSV23 after 1 year"],
            ["PPSV23 only", "PCV20/21 or PCV15", "At least 1 year after PPSV23"],
            ["PCV13 only", "PCV20/21 or PPSV23", "At least 1 year"],
            ["PCV13 and PPSV23", "PCV20/21", "At least 5 years after last dose"],
          ],
        },
        {
          heading: "Who gets what",
          columns: ["Group", "Influenza", "PCV", "RSV"],
          rows: [
            ["Healthy 19-49", "Yearly", "No", "No"],
            ["50-74", "Yearly", "Yes", "If at risk"],
            ["75 and over", "Yearly", "Yes", "Yes"],
            ["Chronic disease any age", "Yearly", "Yes", "If 50 and over"],
            ["Pregnancy", "Any trimester", "If indicated", "Abrysvo 32-36 weeks"],
          ],
        },
      ],
      remember: [
        "**PCV before PPSV23** - never the reverse.",
        "**PCV20/21 alone completes** the pneumococcal series.",
        "**RSV vaccine: one dose**, not yearly.",
        "**Tdap every pregnancy**, 27-36 weeks.",
        "**Egg allergy is no bar** to influenza vaccine.",
        "**Monsoon = flu season** in most of India; vaccinate April-June.",
        "**Discharge is a vaccine visit.**",
      ],
    },
  },
};

export default revision;
