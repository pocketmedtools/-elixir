import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "gastro-hepatology-dyspepsia-functional": {
    checked: "2026-10",
    updated: [
      "BSG functional dyspepsia guideline 2022: TCA second line, SSRIs not recommended, mirtazapine and brain-gut psychotherapy for refractory FD.",
      "Maastricht VI/Florence 2022: test-and-treat first in uninvestigated dyspepsia; H. pylori gastritis is an infectious disease.",
      "ACG H. pylori guideline 2024: 14-day bismuth quadruple preferred; vonoprazan-based regimens as alternatives.",
      "NLEM 2022: ranitidine removed; famotidine is the H2 blocker of choice.",
      "EMA domperidone restriction retained: 10 mg up to three times daily for about 1 week.",
    ],
    master: {
      heading: "Uninvestigated and functional dyspepsia - one-page answer",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Epigastric pain/burning, postprandial fullness, early satiation; FD = Rome IV 3 months, onset 6 months earlier, normal endoscopy"],
        ["Subtypes", "PDS (fullness/early satiation, 3 days a week) and EPS (pain/burning, 1 day a week); overlap common"],
        ["Epidemiology", "Uninvestigated 20% of adults; FD about 7% (Rome Foundation 2021); 70-80% of scoped dyspeptics are functional"],
        ["Causes to exclude", "Ulcer, NSAIDs, metformin, GLP-1 RA, cancer, coeliac, gastroparesis, pancreatic disease, angina"],
        ["Pathophysiology", "Impaired accommodation, delayed emptying, visceral hypersensitivity, duodenal eosinophils, gut-brain axis, H. pylori"],
        ["Alarm features", "Weight loss, dysphagia, vomiting, bleeding/anaemia, mass, family history of gastric cancer, age about 45+ in India"],
        ["First tests", "Hb, ferritin, UBT or stool antigen (not serology); ECG if cardiac risk"],
        ["Endoscopy", "Alarm features or age about 45+ (ACG/CAG 60); Sydney biopsies; avoid repeat scopes"],
        ["Step 1", "Explain, diet, stop culprit drug; test-and-treat H. pylori with 14-day bismuth quadruple"],
        ["Step 2", "PPI once daily before breakfast 8 weeks (EPS) or itopride 50 mg tds (PDS)"],
        ["Step 3", "Amitriptyline 10 mg at night titrated to 30-50 mg for 6-12 months"],
        ["Refractory", "Mirtazapine, buspirone, acotiamide, CBT or gut-directed hypnotherapy; refer"],
        ["Pitfalls", "No SSRIs for FD, no cholecystectomy for incidental stones, domperidone only 1 week"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Uninvestigated dyspepsia in Indian primary care",
        steps: [
          { label: "Dyspepsia: pain, burning, fullness, early satiation", detail: "Take drug history; stop NSAIDs, review metformin" },
          { label: "Any alarm feature or age about 45 or more?", detail: "Weight loss, dysphagia, vomiting, bleeding, anaemia, mass, family history", tone: "decision" },
          { label: "Yes: upper GI endoscopy with biopsies", detail: "Structural lesion: treat cause; normal: functional dyspepsia", tone: "warn" },
          { label: "No: urea breath test or stool antigen", detail: "Stop PPI 2 weeks before; not serology" },
          { label: "Positive: 14-day bismuth quadruple therapy", detail: "Confirm cure 4 weeks later" },
          { label: "Negative or persisting: treat as functional dyspepsia", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Functional dyspepsia treatment ladder",
        steps: [
          { label: "Explain, reassure, small meals, exercise", detail: "Stop smoking and NSAIDs" },
          { label: "PPI once daily for 8 weeks (EPS)", detail: "Omeprazole 20 mg or pantoprazole 40 mg before breakfast" },
          { label: "Prokinetic (PDS)", detail: "Itopride 50 mg tds or acotiamide 100 mg tds; domperidone 1 week only" },
          { label: "Low-dose TCA", detail: "Amitriptyline 10 mg at night up to 30-50 mg, 6-12 months" },
          { label: "Mirtazapine, buspirone, quetiapine", detail: "Specialist; mirtazapine if weight loss" },
          { label: "CBT or gut-directed hypnotherapy", detail: "Refractory FD", tone: "good" },
        ],
      },
      {
        kind: "compare",
        heading: "PDS versus EPS",
        columns: ["Feature", "PDS", "EPS"],
        rows: [
          ["Symptom", "Fullness, early satiation", "Epigastric pain or burning"],
          ["Frequency", "3 days a week", "1 day a week"],
          ["Mechanism", "Accommodation, emptying", "Hypersensitivity, acid"],
          ["First drug", "Prokinetic, buspirone", "PPI or H2RA"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Dyspepsia** is epigastric pain, burning, postprandial fullness or early satiation.",
            "**Functional dyspepsia** needs 3 months of symptoms, onset 6 months earlier and a **normal endoscopy**.",
            "It is a **disorder of gut-brain interaction**, not 'nothing wrong'.",
            "About **70-80%** of dyspeptic patients who are scoped have functional dyspepsia.",
            "Global FD prevalence is about **7%**; uninvestigated dyspepsia about 20%.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "Exclude **NSAIDs, metformin, iron and GLP-1 agonists** first.",
            "**H. pylori** dyspepsia resolves 6-12 months after eradication.",
            "**Post-infectious FD** follows gastroenteritis in about 10%.",
            "Anxiety, depression, female sex, smoking and IBS raise risk.",
            "**Gallstones do not cause dyspepsia**.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "**Impaired fundic accommodation** in 40% causes early satiation.",
            "**Delayed gastric emptying** in 25-35% causes fullness and nausea.",
            "**Visceral hypersensitivity** explains pain and the benefit of tricyclics.",
            "Duodenal **eosinophils and mast cells** sensitise local nerves.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**PDS**: fullness or early satiation, at least **3 days a week**.",
            "**EPS**: pain or burning, at least **1 day a week**.",
            "Overlap is common; treat the dominant symptom.",
            "Vomiting is unusual in FD; think gastroparesis or obstruction.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Ask the four symptoms and which bothers most.",
            "Ask **alarm features**: weight loss, dysphagia, vomiting, bleeding, anaemia, family history.",
            "Take a full **drug history** including ayurvedic pain powders.",
            "Examination is normal apart from mild **epigastric tenderness**.",
            "Exertional epigastric pain in a diabetic needs an **ECG**.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Check **haemoglobin and ferritin** in everyone.",
            "**Urea breath test or stool antigen** for H. pylori; not serology.",
            "Stop PPI **2 weeks** and antibiotics **4 weeks** before testing.",
            "**Endoscopy** for alarm features or age about **45** in India.",
            "Avoid repeat endoscopy unless symptoms change.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Explain the diagnosis positively; reassurance is therapy.",
            "Small frequent meals, less fat, regular exercise, stop smoking.",
            "**Test and treat** H. pylori with 14-day bismuth quadruple therapy.",
            "**PPI once daily for 8 weeks**, then stop or use on demand.",
            "**Itopride 50 mg three times daily** for postprandial distress.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "**Amitriptyline 10 mg at night**, titrate to 30-50 mg for 6-12 months.",
            "**SSRIs do not help** FD symptoms.",
            "Mirtazapine helps early satiation with weight loss.",
            "Buspirone and acotiamide improve fundic accommodation.",
            "**CBT or hypnotherapy** for refractory cases.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Review every **4-8 weeks**; change one drug at a time.",
            "Confirm H. pylori cure **4 weeks** after therapy.",
            "Refer for weight loss, refractory symptoms or diagnostic doubt.",
            "Deprescribe PPIs that are not clearly helping.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**BSG 2022**: TCA second line, SSRIs not recommended, psychotherapy for refractory FD.",
            "**ACG 2024**: 14-day bismuth quadruple preferred for H. pylori.",
            "**Domperidone**: 10 mg up to three times daily for about 1 week only.",
            "Indian endoscopy age about **45**, lower than ACG/CAG 60.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs for functional dyspepsia",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Omeprazole", "20 mg orally before breakfast", "8 weeks", "Diarrhoea; long-term B12, magnesium, C. difficile"],
            ["Famotidine", "20 mg orally twice daily", "4-8 weeks", "Reduce dose in CKD"],
            ["Itopride", "50 mg orally three times daily before meals", "4-8 weeks", "Diarrhoea, rare prolactin rise"],
            ["Domperidone", "10 mg orally up to three times daily", "About 1 week", "QT prolongation, sudden death"],
            ["Amitriptyline", "10 mg at night, up to 30-50 mg", "6-12 months", "Dry mouth, constipation, sedation, QT"],
            ["Mirtazapine", "7.5-15 mg at night", "8-12 weeks", "Weight gain, sedation"],
          ],
        },
        {
          heading: "Rome IV subtypes",
          columns: ["Feature", "PDS", "EPS"],
          rows: [
            ["Main symptom", "Postprandial fullness, early satiation", "Epigastric pain or burning"],
            ["Frequency", "3 days a week", "1 day a week"],
            ["First drug", "Prokinetic", "PPI"],
            ["Second line", "TCA, mirtazapine, buspirone", "TCA"],
          ],
        },
        {
          heading: "Differential diagnosis of dyspepsia",
          columns: ["Condition", "Clue", "Test"],
          rows: [
            ["Peptic ulcer", "Night pain relieved by food, NSAID", "Endoscopy"],
            ["Gastric cancer", "Age 45+, weight loss, anaemia", "Endoscopy and biopsy"],
            ["Gastroparesis", "Vomiting, long-standing diabetes", "4-hour emptying scan"],
            ["Biliary pain", "Severe episodic pain over 30 minutes", "Ultrasound"],
            ["Angina", "Exertional, sweating", "ECG, troponin"],
          ],
        },
      ],
      remember: [
        "FD is the **3-6 rule**: 3 months of symptoms, onset 6 months ago.",
        "**PDS 3 days, EPS 1 day** a week.",
        "**Test and treat before PPI** in the young.",
        "**TCA, not SSRI** in FD.",
        "Do not remove gallbladders for dyspepsia.",
        "Domperidone: **10 mg, three times daily, 1 week**.",
        "Alarm features: **VBAD** - vomiting, bleeding/anaemia, abdominal mass/weight loss, dysphagia.",
      ],
    },
  },
};

export default revision;
