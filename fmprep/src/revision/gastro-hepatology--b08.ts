import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "gastro-hepatology-gallstones-biliary": {
    checked: "2026-10",
    updated: [
      "Tokyo Guidelines 2018 (TG18) diagnostic criteria, severity grading and drainage timing",
      "ASGE 2019 choledocholithiasis risk tiers replacing the 2010 criteria",
      "ESGE 2019 CBD stone guideline: remove all duct stones, EUS/MRCP for intermediate risk",
      "ESGAR/EAES/EFISDS/ESGE 2022 gallbladder polyp guideline (Asian ethnicity a risk factor)",
      "ACG 2024 acute pancreatitis: urgent ERCP only with cholangitis",
      "ESMO 2023 / NCCN 2024: gemcitabine-cisplatin plus durvalumab or pembrolizumab for advanced GBC",
    ],
    master: {
      heading: "Gallstones, cholecystitis and cholangitis - whole topic in one table",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Cholelithiasis = GB stones; choledocholithiasis = CBD stones; cholangitis = obstruction plus infection of the duct"],
        ["Epidemiology", "10-15% adults in West; India about 6% North vs 1-2% South; Gangetic belt highest; 80% asymptomatic"],
        ["Risk factors", "5 F, pregnancy, OCP, rapid weight loss, TPN, ceftriaxone, octreotide, haemolysis (black), infection (brown)"],
        ["Pathogenesis", "Cholesterol supersaturation + nucleation (mucin) + gallbladder stasis"],
        ["Biliary colic", "Steady RUQ pain 30 min-6 h after fatty meal, radiates to right scapula; NSAID analgesia"],
        ["Cholecystitis TG18", "A local + B systemic + C imaging; Grade III organ failure, Grade II WBC > 18,000 / mass / > 72 h / local complication"],
        ["Cholangitis TG18", "A inflammation + B cholestasis + C imaging; Grade II any two of WBC, fever >= 39, age >= 75, bilirubin >= 5, low albumin"],
        ["ASGE 2019", "High: stone seen, bili > 4 + dilated CBD, cholangitis - ERCP; intermediate - EUS/MRCP; low - cholecystectomy"],
        ["Investigations", "USG first; HIDA for equivocal cholecystitis; MRCP/EUS for CBD; ERCP therapeutic only"],
        ["Cholecystitis treatment", "Early LC within 72 h (up to 7 days); PTGBD if unfit; antibiotics stop within 24 h of surgery for Grade I-II"],
        ["Cholangitis treatment", "Antibiotics within 1 h if septic; drainage by grade; ERCP first, PTBD if fails; 4-7 days antibiotics after source control"],
        ["Asymptomatic stones", "Leave alone; operate for porcelain GB, stones > 3 cm, polyp >= 10 mm, haemolysis"],
        ["Complications", "Empyema, gangrene, perforation, Mirizzi, gallstone ileus (Rigler triad), pancreatitis, GBC"],
        ["GBC in India", "North and North-East women; stones in 70-90%; T1b+ radical cholecystectomy; gem-cis + durvalumab for advanced"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Suspected CBD stone - ASGE 2019",
        steps: [
          { label: "Symptomatic gallstones", detail: "USG and LFT in every patient" },
          { label: "Any high-risk predictor?", detail: "Stone on imaging, bilirubin > 4 mg/dL + dilated CBD, cholangitis", tone: "decision" },
          { label: "Yes: ERCP or lap CBD exploration", tone: "warn" },
          { label: "Intermediate: EUS or MRCP", detail: "Abnormal LFT, age > 55, dilated CBD" },
          { label: "Low risk: cholecystectomy", detail: "No further ductal imaging", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Acute cholangitis - drainage by TG18 grade",
        steps: [
          { label: "All grades: fluids, cultures, antibiotics", detail: "Within 1 h if septic; ceftriaxone + metronidazole" },
          { label: "Grade I: drain if no response in 24 h", tone: "neutral" },
          { label: "Grade II: early ERCP drainage", detail: "Within 24-48 h", tone: "decision" },
          { label: "Grade III: organ support then urgent drainage", detail: "ERCP; PTBD if ERCP fails", tone: "warn" },
          { label: "After control: cholecystectomy same admission", tone: "good" },
        ],
      },
      {
        kind: "compare",
        heading: "Biliary colic vs cholecystitis vs cholangitis",
        columns: ["Feature", "Biliary colic", "Acute cholecystitis", "Acute cholangitis"],
        rows: [
          ["Pain", "30 min to 6 h", "> 6 h, RUQ", "RUQ, may be mild"],
          ["Fever", "No", "Low grade", "High with rigors"],
          ["Jaundice", "No", "Mild or none", "Yes"],
          ["Key sign", "None", "Murphy sign", "Charcot triad"],
          ["Key test", "USG stones", "USG wall > 4 mm, HIDA", "Dilated CBD, high bilirubin"],
          ["Treatment", "NSAID, elective LC", "Early LC", "Antibiotics + ERCP drainage"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Cholelithiasis** is stones in the gallbladder; **choledocholithiasis** is stones in the bile duct.",
            "About **80%** of gallstones stay silent; **1-4% per year** become symptomatic.",
            "India: about **6%** prevalence in the North versus **1-2%** in the South.",
            "**Gallbladder cancer** is commonest in women of the **Gangetic belt** and North-East.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**5 F**: female, fertile, fat, forty, fair.",
            "**Rapid weight loss**, pregnancy, oestrogens, TPN, octreotide and **ceftriaxone** sludge.",
            "**Black pigment** stones: haemolysis, cirrhosis, ileal resection.",
            "**Brown pigment** stones: duct infection, strictures, parasites.",
            "Stones need **supersaturation, nucleation and gallbladder stasis** together.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "**Biliary colic** is steady pain for 30 minutes to 6 hours after a fatty meal.",
            "Pain over **6 hours** with fever means **cholecystitis**.",
            "**Murphy sign**: inspiratory arrest on pressing under the right costal margin.",
            "**Charcot triad**: fever, RUQ pain, jaundice; **Reynolds pentad** adds shock and confusion.",
            "Bloating and belching are **not** gallstone symptoms.",
            "**Courvoisier law**: palpable non-tender gallbladder with jaundice suggests cancer, not stones.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**TG18** diagnosis uses A local or systemic, B, and C imaging criteria.",
            "Cholecystitis **Grade II**: WBC over 18,000, RUQ mass, over 72 hours, or local complication.",
            "Cholangitis **Grade II**: any two of WBC, fever 39, age 75, bilirubin 5, low albumin.",
            "**Grade III** in both means organ dysfunction: vasopressor, confusion, INR over 1.5, low platelets.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Ultrasound** first: over 95% sensitive for gallbladder stones.",
            "Cholecystitis on ultrasound: **wall over 4 mm**, pericholecystic fluid, sonographic Murphy.",
            "**HIDA** scan is the most accurate test for cholecystitis.",
            "**MRCP or EUS** for intermediate-risk duct stones; **ERCP** only for treatment.",
            "**ASGE high risk**: stone seen, bilirubin over 4 with dilated duct, or cholangitis.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Asymptomatic stones**: leave alone, with listed exceptions.",
            "Biliary colic: **diclofenac 75 mg IM**; NSAIDs also reduce cholecystitis.",
            "Symptomatic stones: **elective laparoscopic cholecystectomy**.",
            "**UDCA** dissolves only small radiolucent cholesterol stones; half recur.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Cholecystitis: **early laparoscopic cholecystectomy** within 72 hours, acceptable up to 7 days.",
            "Unfit patients: **percutaneous gallbladder drainage** or EUS-guided drainage.",
            "Cholangitis: antibiotics plus **ERCP drainage** timed by grade.",
            "Antibiotics stop **24 hours after surgery** in Grade I-II cholecystitis.",
            "Cholangitis antibiotics: **4-7 days** after source control.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: laparoscopic cholecystectomy safe in any trimester, best in second.",
            "**Diabetics**: watch for **emphysematous cholecystitis**.",
            "**Children** with stones: look for **haemolytic anaemia**.",
            "**Cirrhosis**: surgery in Child A or B only.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**Gallstone ileus**: Rigler triad of pneumobilia, obstruction, ectopic stone.",
            "**Mirizzi syndrome**: stone in Hartmann pouch compressing the hepatic duct.",
            "**Gallbladder polyp 10 mm or more** needs cholecystectomy.",
            "Send every gallbladder for **histopathology** in North India.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**ESGAR 2022** lists **Asian ethnicity** as a polyp risk factor.",
            "**ACG 2024**: urgent ERCP in gallstone pancreatitis only with cholangitis.",
            "Advanced GBC: **gemcitabine-cisplatin plus durvalumab or pembrolizumab**.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in gallstone disease",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Diclofenac", "75 mg IM or 50 mg oral 8-hourly; 100 mg rectal peri-ERCP", "1-2 days", "Peptic ulcer, AKI, avoid in CKD and late pregnancy"],
            ["Ceftriaxone + metronidazole", "2 g IV daily + 500 mg IV 8-hourly", "Stop 24 h after LC; 4-7 days in cholangitis", "Sludge; disulfiram-like reaction"],
            ["Piperacillin-tazobactam", "4.5 g IV 6- to 8-hourly", "4-7 days after source control", "Penicillin allergy, hypokalaemia"],
            ["Meropenem", "1 g IV 8-hourly", "Grade III or ESBL, then de-escalate", "Reserve drug, C. difficile"],
            ["UDCA", "10-15 mg/kg/day oral", "6-24 months; 6 months after bariatric surgery", "Diarrhoea; useless for pigment stones"],
          ],
        },
        {
          heading: "TG18 severity grading",
          columns: ["Grade", "Cholecystitis", "Cholangitis"],
          rows: [
            ["III severe", "Organ dysfunction", "Organ dysfunction"],
            ["II moderate", "Any one: WBC > 18,000, mass, > 72 h, local complication", "Any two: WBC > 12,000 or < 4,000, fever >= 39 C, age >= 75, bilirubin >= 5, low albumin"],
            ["I mild", "Neither", "Neither"],
          ],
        },
        {
          heading: "ASGE 2019 CBD stone risk",
          columns: ["Risk", "Predictors", "Action"],
          rows: [
            ["High", "Stone on imaging; bilirubin > 4 + dilated CBD; cholangitis", "ERCP"],
            ["Intermediate", "Abnormal LFT; age > 55; dilated CBD", "EUS or MRCP"],
            ["Low", "None", "Cholecystectomy"],
          ],
        },
      ],
      remember: [
        "**5 F**: female, fertile, fat, forty, fair.",
        "Biliary colic is **steady**, not colicky.",
        "Cholangitis: **drain the duct** - antibiotics alone fail.",
        "**Charcot** triad, **Reynolds** pentad, **Rigler** triad, **Courvoisier** law.",
        "ASGE high risk goes to **ERCP**; intermediate to **EUS or MRCP**.",
        "Polyp **10 mm** means cholecystectomy.",
        "Ceftriaxone causes **pseudolithiasis** in children.",
      ],
    },
  },
};

export default revision;
