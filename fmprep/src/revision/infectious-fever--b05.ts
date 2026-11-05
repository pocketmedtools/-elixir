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
};

export default revision;
