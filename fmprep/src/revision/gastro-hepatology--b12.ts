import type { RevisionSet } from "./index";

const revision: RevisionSet = {
};

revision["gastro-hepatology-gi-emergencies-ipd"] = {
  checked: "2026-10",
  updated: [
    "ESGE 2016 foreign body guideline: emergent endoscopy within 2-6 h for batteries, sharp objects and complete obstruction (still current).",
    "ESPGHAN 2021: honey and sucralfate first aid for button battery ingestion in children.",
    "ASGE 2020: neostigmine 2 mg IV for acute colonic pseudo-obstruction after excluding mechanical obstruction.",
    "WSES 2023 sigmoid volvulus: endoscopic detorsion then sigmoidectomy in the same admission.",
    "IDSA/SHEA 2021: oral vancomycin plus IV metronidazole, with rectal vancomycin if ileus, for fulminant C. difficile.",
    "ACG 2025 ulcerative colitis: IV steroids, day-3 review, rescue therapy or colectomy for acute severe colitis.",
  ],
  master: {
    heading: "GI ward emergencies in one table",
    columns: ["Heading", "What to write"],
    rows: [
      ["Definition", "Time-critical GI conditions where timing of endoscopy, decompression or surgery decides outcome"],
      ["Foreign body timing", "ESGE 2016: battery, sharp object, complete obstruction in oesophagus within 2-6 h; other oesophageal within 24 h"],
      ["Large gastric objects", "Over 6 cm long or 2.5 cm wide, magnets, batteries, sharp objects: remove within 24 h"],
      ["Battery first aid", "Honey 10 mL every 10 min up to 6 doses (child over 1 year, within 12 h); sucralfate in hospital"],
      ["Caustic do-nots", "No emesis, no neutralising, no charcoal, no blind NG tube, no routine steroids"],
      ["Caustic grading", "Zargar 0, 1, 2a, 2b, 3a, 3b at endoscopy 12-48 h; avoid days 5-15"],
      ["Caustic plan", "0-2a oral diet; 2b-3a nasojejunal feeding; 3b or CT transmural necrosis: oesophagogastrectomy"],
      ["Caustic late effects", "Stricture (dilate from 3-6 weeks), gastric outlet obstruction, SCC after 15-40 years"],
      ["Toxic megacolon", "Jalan: colon over 6 cm + 3 of fever, HR over 120, WBC over 10.5, anaemia + 1 of dehydration, sensorium, electrolytes, BP"],
      ["Toxic megacolon care", "Stop antimotility drugs, IV steroids or C. difficile therapy, K and Mg, colectomy if no response 24-72 h"],
      ["Adhesive SBO", "Drip and suck, Gastrografin challenge; contrast in colon by 24 h predicts resolution; operate if strangulation"],
      ["Sigmoid volvulus", "Coffee-bean sign; endoscopic detorsion then elective sigmoidectomy same admission"],
      ["Ogilvie syndrome", "Exclude obstruction by CT; conservative 24-72 h; neostigmine 2 mg IV; colonoscopic decompression; PEG maintenance"],
      ["Viva traps", "Battery read as coin, barium for foreign body, scope in week 2, loperamide in colitis, neostigmine before CT"],
    ],
  },
  flows: [
    {
      kind: "flow",
      heading: "Suspected ingested foreign body",
      steps: [
        { label: "Airway, ability to swallow saliva, perforation signs", detail: "Drooling = complete obstruction", tone: "decision" },
        { label: "X-ray neck, chest, abdomen AP and lateral", detail: "No barium; CT if perforation or bone suspected" },
        { label: "Battery, sharp object or complete obstruction in oesophagus?", detail: "Emergent endoscopy within 2-6 h", tone: "warn" },
        { label: "Other oesophageal object", detail: "Urgent endoscopy within 24 h" },
        { label: "In stomach: sharp, magnet, battery, over 6 x 2.5 cm", detail: "Remove within 24 h; medium blunt within 72 h" },
        { label: "Small blunt object beyond stomach", detail: "Observe, weekly X-ray; remove if stuck over 1 week", tone: "good" },
        { label: "Food bolus cleared", detail: "Biopsy oesophagus for EoE, treat the cause", tone: "good" },
      ],
    },
    {
      kind: "ladder",
      heading: "Acute colonic pseudo-obstruction ladder",
      steps: [
        { label: "CT abdomen to exclude mechanical obstruction", detail: "Never skip this step", tone: "warn" },
        { label: "Conservative care 24-72 h", detail: "NBM, NG and rectal tube, stop opioids, correct K, Mg, Ca, mobilise" },
        { label: "Neostigmine 2 mg IV over 3-5 min", detail: "Supine, cardiac monitor, atropine 0.6 mg ready; HR over 60", tone: "decision" },
        { label: "Colonoscopic decompression with tube", detail: "If neostigmine fails or is contraindicated" },
        { label: "PEG 3350 daily maintenance", detail: "Reduces recurrence", tone: "good" },
        { label: "Surgery: caecostomy or resection", detail: "Perforation, ischaemia, failure of all measures", tone: "warn" },
      ],
    },
    {
      kind: "compare",
      heading: "Acid vs alkali ingestion",
      columns: ["Feature", "Acid", "Alkali"],
      rows: [
        ["Necrosis", "Coagulative, eschar limits depth", "Liquefactive, penetrates deep"],
        ["Main organ", "Stomach (antrum, pylorus)", "Oesophagus"],
        ["Common Indian agent", "Toilet cleaner (HCl), battery acid", "Drain cleaner, washing soda, lye"],
        ["Late complication", "Gastric outlet obstruction", "Oesophageal stricture, SCC"],
        ["Shared rules", "Grade at 12-48 h, avoid days 5-15", "Grade at 12-48 h, avoid days 5-15"],
      ],
    },
  ],
  notes: {
    sections: [
      {
        title: "Definition and key facts",
        points: [
          "**80-90% of foreign bodies** pass spontaneously; under 1% need surgery.",
          "Adult **food bolus** usually unmasks disease: EoE, ring, stricture or cancer.",
          "Indian **caustic ingestion** is mostly acid toilet cleaner, often deliberate.",
          "**Toxic megacolon** is colitis with colon over 6 cm and systemic toxicity.",
          "**Ogilvie syndrome** is colonic dilatation without a mechanical block in sick inpatients.",
        ],
      },
      {
        title: "Pathophysiology",
        points: [
          "**Button battery** makes hydroxide and burns the oesophagus within 2 hours.",
          "**Alkali** causes deep liquefactive necrosis; **acid** causes coagulative eschar in the stomach.",
          "Caustic wall is **weakest at days 5-15**, so no endoscopy or dilatation then.",
          "**Laplace law**: the wide caecum perforates first.",
          "Ogilvie is **autonomic imbalance**, so neostigmine works.",
        ],
      },
      {
        title: "Classification that matters",
        points: [
          "**ESGE timing**: within 2-6 h for battery, sharp object or complete obstruction.",
          "**Zargar** grades 0, 1, 2a, 2b, 3a, 3b; stricture from **2b** onward.",
          "**Jalan criteria**: colon over 6 cm, 3 toxicity signs, plus 1 systemic sign.",
          "**Rule of 3-6-9** for small bowel, colon and caecum diameters.",
        ],
      },
      {
        title: "Clinical features",
        points: [
          "**Drooling** and inability to swallow saliva mean complete oesophageal obstruction.",
          "No oral burns does **not exclude** severe caustic oesophageal injury.",
          "Toxic megacolon: diarrhoea lessens while **distension and tachycardia** worsen.",
          "Constant pain and fever in obstruction suggest **strangulation**.",
          "Ogilvie: painless distension in a **bedbound post-operative** patient.",
        ],
      },
      {
        title: "Investigations",
        points: [
          "**X-ray AP and lateral** for objects; double-halo means battery.",
          "**Never barium** for a foreign body.",
          "**Contrast CT** for perforation, caustic transmural necrosis and obstruction.",
          "Toxic megacolon: X-ray, electrolytes, **C. difficile** stool test, CMV biopsy.",
          "**Gastrografin** in colon by 24 h predicts adhesive SBO will settle.",
        ],
      },
      {
        title: "Treatment - first line",
        points: [
          "**Airway first**, then NBM, IV fluids and analgesia.",
          "Caustic: no emesis, neutralising, charcoal or blind NG tube; **IV PPI**.",
          "Toxic megacolon: stop antimotility drugs, correct **potassium and magnesium**, IV steroids.",
          "Obstruction: **drip and suck** with hourly urine output.",
          "Ogilvie: conservative care, then **neostigmine 2 mg IV** with atropine ready.",
        ],
      },
      {
        title: "Inpatient / emergency care",
        points: [
          "Take **oesophageal biopsies** at every adult food bolus endoscopy.",
          "Never endoscopically retrieve **drug packets**.",
          "Zargar 2b-3a: **nasojejunal feeding**; 3b: emergency oesophagogastrectomy.",
          "Toxic megacolon: **colectomy** if no response in 24-72 h or perforation.",
          "Sigmoid volvulus: **detorsion** then sigmoidectomy in the same admission.",
        ],
      },
      {
        title: "Complications and red flags",
        points: [
          "Battery: **aorto-oesophageal fistula** can bleed days later.",
          "Caustic oesophagus: stricture, and **SCC after 15-40 years**.",
          "Acid: **gastric outlet obstruction** at 4-8 weeks.",
          "Caecum **over 12 cm** for over 6 days risks perforation.",
        ],
      },
      {
        title: "Referral and follow-up",
        points: [
          "District hospitals refer any **battery, sharp object or complete obstruction** at once.",
          "**Psychiatric review** and Tele-MANAS 14416 for every deliberate ingestion.",
          "Review caustic patients at **3 weeks** for dysphagia and contrast swallow.",
          "Start **surveillance endoscopy** 15-20 years after caustic injury.",
        ],
      },
      {
        title: "Latest updates",
        points: [
          "**ESPGHAN 2021**: honey 10 mL every 10 minutes for battery ingestion in children.",
          "**ASGE 2020**: neostigmine is first drug for pseudo-obstruction.",
          "**WSES 2023**: detorsion then same-admission sigmoidectomy for volvulus.",
          "**ACG 2025** UC: day-3 review and early colectomy in acute severe colitis.",
        ],
      },
    ],
    tables: [
      {
        heading: "Drugs in ward GI emergencies",
        columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
        rows: [
          ["Neostigmine", "2 mg IV over 3-5 min", "Single dose, may repeat once", "Bradycardia, bronchospasm; not in obstruction or HR under 60"],
          ["Hydrocortisone", "100 mg IV 6-hourly", "Review at day 3", "Masks peritonism; exclude C. difficile and CMV"],
          ["Vancomycin (C. difficile)", "500 mg oral or NG 6-hourly; rectal if ileus", "10-14 days", "Oral route only for C. difficile"],
          ["Metronidazole", "500 mg IV 8-hourly", "10-14 days", "Neuropathy, alcohol reaction"],
          ["Pantoprazole", "40 mg IV twice daily", "2-4 weeks", "Headache, low magnesium with long use"],
          ["Honey (child over 1 year)", "10 mL orally every 10 minutes, up to 6 doses", "Before arrival, within 12 h of battery ingestion", "Never delays endoscopy; not under 1 year"],
        ],
      },
      {
        heading: "Zargar grading",
        columns: ["Grade", "Finding", "Plan"],
        rows: [
          ["0-1", "Normal or oedema and hyperaemia", "Oral diet, discharge"],
          ["2a", "Erosions, blisters, superficial ulcers", "Soft diet, PPI"],
          ["2b", "Deep or circumferential ulcers", "Nasojejunal feeding, dilate from 3-6 weeks"],
          ["3a", "Scattered small necrosis", "Admit, enteral feeding, watch for perforation"],
          ["3b", "Extensive necrosis", "Emergency oesophagogastrectomy"],
        ],
      },
      {
        heading: "Colonic distension: three causes",
        columns: ["Feature", "Toxic megacolon", "Ogilvie syndrome", "Mechanical LBO"],
        rows: [
          ["Toxicity", "Present", "Absent", "Only if strangulated"],
          ["Cause", "Colitis", "Autonomic imbalance", "Cancer, volvulus, hernia"],
          ["Transition point on CT", "No", "No", "Yes"],
          ["Neostigmine", "No role", "Yes, after CT", "Contraindicated"],
        ],
      },
    ],
    remember: [
      "**Battery = 2 hours**, double halo on AP, step-off on lateral.",
      "**Acid hits the antrum, alkali the oesophagus.**",
      "**Scope caustic burns at 12-48 h, never days 5-15.**",
      "**Zargar 2b** is the stricture threshold.",
      "**Jalan: 6 + 3 + 1.**",
      "**3-6-9 rule**; caecum over 12 cm means act.",
      "**Neostigmine only after CT**, with atropine at the bedside.",
    ],
  },
};

export default revision;
