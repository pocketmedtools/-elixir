import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "infectious-fever-pyrexia-unknown-origin": {
    checked: "2026-10",
    updated: [
      "Harrison 22e (2025): quality-based PUO definition using obligatory investigations; FDG PET-CT next when CRP/ESR raised.",
      "EULAR/PReS 2024: systemic JIA and AOSD treated as one Still disease; early IL-1/IL-6 blockade, MAS screening.",
      "ACR/EULAR 2022 GCA classification criteria and EULAR 2023 large-vessel vasculitis advice: ultrasound first.",
      "ESC 2023 endocarditis: FDG PET-CT and cardiac CT added as major imaging criteria (culture-negative endocarditis as PUO).",
      "WHO TB diagnosis 2024 update: molecular rapid tests (Xpert Ultra, Truenat) as initial test on extrapulmonary samples.",
    ],
    master: {
      heading: "Master revision table - Pyrexia of unknown origin",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Fever **38.3 C or more on several occasions, over 3 weeks**, undiagnosed after **3 OPD visits or 3 days in hospital** (Durack-Street 1991) or after obligatory investigations (Harrison 22e)."],
        ["Classification", "**Classic, nosocomial, neutropenic, HIV-associated**; nosocomial and neutropenic need 3 days with 2 days of culture; HIV needs 4 weeks OPD or 3 days IPD."],
        ["Causes in India", "Infection 40-60% (**TB commonest**, enteric, endocarditis, abscess, kala-azar, brucella, melioidosis); neoplasm 10-20% (**lymphoma**); NIID 10-20% (**AOSD**, SLE, GCA); miscellaneous (drug fever, factitious); undiagnosed 10-20%."],
        ["Pathophysiology", "Persistent cytokines (IL-1, IL-6, TNF) raise the set-point via PGE2; intracellular organisms hide in macrophages and form granulomas; AOSD is an IL-1/IL-18 autoinflammatory storm."],
        ["History", "Confirm fever with a chart; night sweats, weight loss, exposures (raw milk, soil, kala-azar block), every drug in 6 weeks, past TB, valve disease, HIV risk."],
        ["Examination (PDCs)", "Repeat every few days: fundus (choroid tubercles, Roth spots), nodes, murmur, spleen, temporal arteries, spine tenderness, rectal examination, rash."],
        ["Stage 1 tests", "CBC, smear, **ESR, CRP**, LFT, **LDH, ferritin**, CK, electrophoresis, ANA, RF, urine, **3 blood cultures**, HIV, IGRA, chest X-ray, ultrasound abdomen."],
        ["Advanced tests", "CECT, echo, rK39, Brucella SAT; **FDG PET-CT** if CRP/ESR raised (40-60% yield); **excision node biopsy**, marrow with culture, temporal artery biopsy; Xpert Ultra on tissue."],
        ["OPD management", "**No blind antibiotics or steroids** in a stable patient; stop non-essential drugs 72 h; paracetamol only for distress; naproxen test 375 mg BD x 3 days is suggestive only."],
        ["Empirical trials allowed", "Unstable/septic patient, **culture-negative endocarditis, suspected miliary TB, suspected GCA** (prednisolone 40-60 mg, IV methylprednisolone if visual loss)."],
        ["Targeted treatment", "ATT HRZE by NTEP weight band 2 months then HRE 4 months; AOSD prednisolone 0.5-1 mg/kg then anakinra/tocilizumab; kala-azar L-AmB 10 mg/kg single dose."],
        ["Prognosis", "Malignancy worst; **undiagnosed PUO after full work-up has a good prognosis** and often resolves spontaneously."],
        ["Referral", "Stage 1 negative at 3 weeks, needs PET-CT or invasive biopsy, HIV, neutropenia, cytopenias with high ferritin (HLH), visual symptoms over 50."],
        ["Exam one-liners", "Uncommon presentation of common disease; TB first in India; biopsy before ATT or steroids; PET-CT localises, does not characterise; normal CRP - witness the thermometer."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Staged work-up of classic PUO",
        steps: [
          { label: "Confirm fever with a witnessed chart", detail: "38.3 C on at least 2 occasions, off antipyretics", tone: "decision" },
          { label: "Unstable, neutropenic or HIV with low CD4?", detail: "Sepsis or febrile neutropenia pathway now - not PUO", tone: "warn" },
          { label: "Stage 1 obligatory tests", detail: "CBC, ESR, CRP, LFT, LDH, ferritin, ANA, RF, 3 blood cultures, HIV, IGRA, CXR, USG" },
          { label: "Look for potentially diagnostic clues", detail: "Repeat history and examination every few days" },
          { label: "PDC-directed tests", detail: "Echo, CECT, rK39, Brucella SAT, Xpert on fluids, temporal artery USG" },
          { label: "FDG PET-CT if CRP/ESR raised", detail: "Localises a biopsy target in 40-60%" },
          { label: "Biopsy the accessible lesion", detail: "Excision node, marrow with culture, liver, temporal artery" },
          { label: "Still undiagnosed and stable - watchful waiting", detail: "Review every 2-4 weeks; good prognosis", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Treatment ladder in PUO",
        steps: [
          { label: "Observe, chart, stop non-essential drugs", detail: "Paracetamol only if distressed; drug fever settles in 72 h" },
          { label: "Naproxen test (diagnostic aid)", detail: "375 mg BD x 3 days; defervescence favours tumour fever" },
          { label: "Targeted therapy once tissue diagnosis made", detail: "ATT, L-AmB, steroids or IL-1 blockade, chemotherapy", tone: "good" },
          { label: "Empirical trial - limited indications", detail: "Suspected miliary TB, culture-negative IE, GCA with visual symptoms", tone: "decision" },
          { label: "Blind steroids before biopsy", detail: "Masks lymphoma, spreads TB - avoid", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "The four Durack-Street categories",
        columns: ["Category", "Time criterion", "Think of"],
        rows: [
          ["Classic", "Over 3 weeks; 3 visits or 3 days", "TB, enteric, IE, lymphoma, AOSD"],
          ["Nosocomial", "Arose in hospital; 3 days with 2 days culture", "Lines, C. difficile, drug fever, DVT, sinusitis"],
          ["Neutropenic", "ANC under 500; 3 days with 2 days culture", "Invasive fungi, perianal infection, typhlitis"],
          ["HIV-associated", "4 weeks OPD or 3 days IPD", "TB, MAC, cryptococcus, histoplasma, talaromyces, lymphoma"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**PUO** is fever of 38.3 C or more on several occasions for over 3 weeks.",
            "It stays undiagnosed after **3 OPD visits or 3 days in hospital** (Durack-Street 1991).",
            "Harrison 22e defines it by completing a list of **obligatory investigations**, not by days.",
            "**Inflammation of unknown origin** is the same work-up with raised CRP but lower temperature.",
            "Most PUO is an **uncommon presentation of a common disease**.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**Classic**: over 3 weeks, 3 visits or 3 days.",
            "**Nosocomial**: arises in hospital; 3 days of work-up including 2 days of cultures.",
            "**Neutropenic**: ANC under 500; treat as febrile neutropenia within 1 hour.",
            "**HIV-associated**: over 4 weeks as outpatient or 3 days as inpatient.",
            "Classic PUO causes: infection, neoplasm, **NIID**, miscellaneous and undiagnosed.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "In India infection causes 40-60%; **tuberculosis** is the commonest single cause.",
            "Other infections: enteric fever, endocarditis, abscess, **kala-azar**, brucellosis, melioidosis, HIV.",
            "Neoplasm 10-20%, led by **lymphoma**; also leukaemia, renal cell and liver cancer.",
            "NIID: **adult-onset Still disease** in the young, GCA and PMR over 50.",
            "Miscellaneous: **drug fever**, thyroiditis, pulmonary emboli, factitious fever.",
            "Over-the-counter antibiotics make enteric fever and endocarditis **culture-negative**.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "First **confirm the fever** with a witnessed 4-6 hourly chart.",
            "Night sweats, weight loss and pruritus suggest **lymphoma or TB**.",
            "Salmon rash, sore throat and arthritis with fever spikes suggest **Still disease**.",
            "Jaw claudication and visual symptoms over 50 suggest **giant cell arteritis**.",
            "Repeat examination: **fundus**, nodes, murmur, spleen, spine, temporal arteries, rectum.",
            "**Relative bradycardia** suggests drug fever, enteric fever, brucellosis or factitious fever.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Stage 1: CBC, **ESR, CRP**, LFT, LDH, ferritin, ANA, RF, urine, HIV, IGRA.",
            "Take **3 blood culture sets** of 20 mL each before any antibiotic.",
            "**Ferritin over 3000** with glycosylated fraction under 20% supports Still disease.",
            "**FDG PET-CT** is next if CRP or ESR is raised; yield 40-60%.",
            "PET-CT **localises but does not characterise**; follow with biopsy.",
            "Prefer **excision node biopsy** with Xpert Ultra and culture over FNAC.",
            "Marrow biopsy helps when there is **cytopenia or high LDH**.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "In a stable patient **withhold antibiotics and steroids** until tissue is taken.",
            "Stop non-essential drugs for **72 hours** to test for drug fever.",
            "Use **paracetamol** only for distress; record temperature before each dose.",
            "**Naproxen test**: 375 mg twice daily for 3 days; quick response suggests tumour fever.",
            "Treat the proven cause, such as ATT by **NTEP weight band** for TB.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Empirical trials are limited to unstable patients and specific suspicions.",
            "Suspected **GCA with visual symptoms**: prednisolone 40-60 mg at once.",
            "Suspected **miliary TB**: start HRZE after sending samples.",
            "**Culture-negative endocarditis**: empirical therapy after 3 culture sets.",
            "Still disease: **prednisolone 0.5-1 mg/kg**, then anakinra or tocilizumab.",
            "Kala-azar: **liposomal amphotericin B 10 mg/kg** single infusion.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Elderly**: GCA, TB, cancer and drug fever; fever may be blunted.",
            "**Diabetes**: melioidosis abscesses, TB and emphysematous infection; CT early.",
            "**HIV**: TB first; send urine LF-LAM, cryptococcal antigen and marrow culture.",
            "**Pregnancy**: ultrasound and MRI first; HRZE is safe, streptomycin is not.",
            "**Children**: infection first, then systemic JIA and leukaemia; marrow before steroids.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "Blind **steroids** spread TB, mask lymphoma and trigger strongyloides hyperinfection.",
            "Cytopenias, big spleen and ferritin over 10000 suggest **HLH**.",
            "Visual symptoms over 50 mean **GCA**; blindness can follow within days.",
            "New murmur with emboli means **endocarditis**; admit for cultures and echo.",
            "**Undiagnosed PUO** after a complete work-up usually has a good prognosis.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Refer when stage 1 is negative at **3 weeks** or biopsy or PET-CT is needed.",
            "Review stable undiagnosed patients every **2-4 weeks** with CBC and CRP.",
            "On empirical ATT, expect response in **2-3 weeks**; re-evaluate if none.",
            "Send a **fever summary** with chart, tests, dates and antibiotics given.",
          ],
        },
      ],
      tables: [
        {
          heading: "PUO drugs at a glance",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Paracetamol", "500-1000 mg oral 6-hourly, max 4 g/day", "Only when distressed", "Liver toxicity; 2-3 g/day in liver disease"],
            ["Naproxen (test)", "375 mg oral BD", "3 days", "GI bleed, AKI; suggestive only"],
            ["HRZE FDC (NTEP)", "Weight band: 2-6 tablets daily", "2 months, then HRE 4 months", "Hepatitis, optic neuritis, gout, interactions"],
            ["Prednisolone", "GCA 40-60 mg/day; Still 0.5-1 mg/kg/day", "Slow taper", "Exclude TB and lymphoma first; glucose, bone"],
            ["Anakinra", "100 mg SC daily", "Long term", "Neutropenia, infection; screen latent TB"],
            ["Liposomal amphotericin B", "10 mg/kg IV single infusion", "Single dose", "Infusion reaction, low potassium"],
          ],
        },
        {
          heading: "Durack-Street categories",
          columns: ["Category", "Criterion", "Leading causes"],
          rows: [
            ["Classic", "Over 3 weeks; 3 visits or 3 days", "TB, enteric, IE, lymphoma, AOSD"],
            ["Nosocomial", "Hospital-onset; 3 days, 2 days culture", "Lines, C. difficile, drug fever, DVT"],
            ["Neutropenic", "ANC under 500; 3 days, 2 days culture", "Fungi, perianal infection, typhlitis"],
            ["HIV-associated", "4 weeks OPD or 3 days IPD", "TB, MAC, cryptococcus, lymphoma"],
          ],
        },
        {
          heading: "Clue to diagnosis",
          columns: ["Clue", "Think of", "Test"],
          rows: [
            ["Relative bradycardia", "Drug fever, enteric, brucella", "Stop drug, culture, SAT"],
            ["Salmon rash, sore throat", "Still disease", "Ferritin, glycosylated ferritin"],
            ["Massive spleen, pancytopenia", "Kala-azar, lymphoma, CML", "rK39, marrow"],
            ["Age over 50, jaw claudication", "Giant cell arteritis", "Temporal artery ultrasound"],
            ["Normal CRP and ESR", "Factitious fever", "Witnessed temperature"],
          ],
        },
      ],
      remember: [
        "Durack-Street: **3 weeks, 3 visits or 3 days; 2 days of culture; HIV 4 weeks**.",
        "India: **TB first**, then enteric, endocarditis, lymphoma, Still disease.",
        "**Biopsy before ATT or steroids.**",
        "PET-CT **localises, does not characterise**.",
        "Ferritin over 3000 with low glycosylated fraction: **Still disease**.",
        "Normal CRP with fever: **witness the thermometer**.",
        "Undiagnosed PUO after full work-up: **good prognosis**.",
      ],
    },
  },
};

export default revision;
