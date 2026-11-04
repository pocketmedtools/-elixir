import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "gastro-hepatology-lft-interpretation": {
    checked: "2026-10",
    updated: [
      "ACG 2017 abnormal liver chemistries guideline confirmed current: ALT ULN 33 IU/L men, 25 IU/L women",
      "2023 multisociety MASLD nomenclature applied to the commonest cause of raised ALT",
      "AASLD 2023 and EASL-EASD-EASO 2024: FIB-4 then elastography triage added",
      "AASLD 2023 DILI practice guidance: R ratio for DILI and RECAM causality",
    ],
    master: {
      heading: "Master revision table - interpreting abnormal liver function tests",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "LFTs = **injury markers (ALT, AST), cholestasis markers (ALP, GGT)** and **true function (albumin, INR, bilirubin)**; ACG 2017 ALT ULN **33 IU/L men, 25 IU/L women**."],
        ["Epidemiology", "Abnormal in 10-20% of primary-care tests; in India commonest cause **MASLD (about 38% of adults)**, then alcohol, HBV (2-4%), HCV (0.5-1%)."],
        ["Physiology", "ALT liver-specific (half-life 47 h); AST also muscle/RBC (17 h); ALP induced by bile acids; albumin half-life 3 weeks; **factor VII 6 hours, so INR is earliest**."],
        ["Pattern", "**R = (ALT/ULN)/(ALP/ULN)**: 5 or more hepatocellular, 2 or less cholestatic, 2-5 mixed."],
        ["Magnitude (ACG)", "Borderline under 2x, mild 2-5x, moderate 5-15x, severe over 15x, massive over 10,000 IU/L."],
        ["Ratios", "AST:ALT over 2 alcohol; over 1 cirrhosis; ALT:LDH under 1.5 ischaemic; **ALP:bilirubin under 4 plus AST:ALT over 2.2 acute Wilson**."],
        ["ALT over 1000", "Ischaemic, viral, paracetamol/toxin, acute CBD stone, autoimmune, Wilson."],
        ["Bilirubin", "Unconjugated (direct under 15-20%): **Gilbert**, haemolysis, drugs; conjugated with normal enzymes: Dubin-Johnson, Rotor; dark urine = conjugated."],
        ["First-line screen", "Repeat; alcohol, drugs, herbals; **HBsAg, anti-HCV, ultrasound, HbA1c, lipids, ferritin, transferrin saturation, FIB-4**."],
        ["Second-line screen", "ANA, ASMA, IgG, ceruloplasmin, alpha-1 antitrypsin, anti-tTG, TSH, CK; elastography; biopsy if unexplained."],
        ["Cholestatic work-up", "Ultrasound: dilated ducts, MRCP/EUS/ERCP; non-dilated, AMA then MRCP; isolated ALP with normal GGT is bone or placenta."],
        ["Management", "Treat cause, stop culprit drug, alcohol abstinence, **7-10% weight loss**, vaccinate HAV/HBV; no liver tonics; statins safe."],
        ["Admit / refer", "**INR 1.5 or more**, encephalopathy, ALT over 1000, cholangitis, **Hy's law (ALT over 3x plus bilirubin over 2x)**, mass, FIB-4 over 2.67."],
        ["Special groups", "Pregnancy: ALP up 2-4x normal, ALT never; children: ALP up to 3x; dialysis: ALT runs low; ATT: stop if ALT over 3x with symptoms or 5x without."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Asymptomatic raised ALT - stepwise work-up",
        caption: "ACG 2017 and BSG 2018 approach, with FIB-4 triage from AASLD 2023.",
        steps: [
          { label: "Raised ALT on a health check", detail: "Above 33 IU/L men or 25 IU/L women" },
          { label: "Check urgency first", detail: "INR 1.5 or more, confusion, ALT over 1000, jaundice with fever", tone: "warn" },
          { label: "History", detail: "Alcohol units, drugs and herbals in last 6 months, metabolic and viral risk" },
          { label: "First-line screen", detail: "HBsAg, anti-HCV, ultrasound, HbA1c, lipids, ferritin, transferrin saturation" },
          { label: "Cause found?", detail: "Treat cause; MASLD: compute FIB-4", tone: "decision" },
          { label: "Second-line screen if negative and persistent", detail: "ANA, ASMA, IgG, ceruloplasmin, alpha-1 antitrypsin, anti-tTG, TSH, CK" },
          { label: "Stage fibrosis", detail: "FIB-4 1.3 or more: elastography; over 12 kPa: hepatology" },
          { label: "Liver biopsy if still unexplained", tone: "good" },
        ],
      },
      {
        kind: "branch",
        heading: "Cholestatic pattern - where is the block?",
        root: "ALP raised (R ratio 2 or less)",
        arms: [
          { label: "GGT normal", tone: "neutral", steps: ["Bone: growth, Paget, metastases", "Placenta: third trimester", "Check calcium, vitamin D, PTH"] },
          { label: "GGT raised, ducts dilated", tone: "warn", steps: ["CBD stone or malignancy", "MRCP or EUS", "ERCP for drainage; urgent if cholangitis"] },
          { label: "GGT raised, ducts normal", tone: "decision", steps: ["Drugs, infiltration (TB, lymphoma)", "AMA for PBC", "MRCP for PSC; biopsy if negative"] },
        ],
      },
      {
        kind: "compare",
        heading: "Hepatocellular vs cholestatic vs isolated hyperbilirubinaemia",
        columns: ["Feature", "Hepatocellular", "Cholestatic", "Isolated bilirubin"],
        rows: [
          ["Dominant test", "ALT, AST", "ALP, GGT", "Bilirubin only"],
          ["R ratio", "5 or more", "2 or less", "Not applicable"],
          ["Common causes", "MASLD, alcohol, viral, drugs", "Stones, cancer, PBC, PSC, drugs", "Gilbert, haemolysis"],
          ["Key first test", "HBsAg, anti-HCV, ultrasound", "Ultrasound for ducts", "CBC, reticulocytes, direct fraction"],
          ["Urine", "Dark if jaundiced", "Dark, pale stools", "Normal in unconjugated"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**LFTs** mostly measure injury; only **albumin, INR and bilirubin** measure real liver function.",
            "**ACG 2017** ALT upper limit is **33 IU/L in men and 25 IU/L in women**.",
            "Abnormal tests occur in **10-20%** of adults tested; most are mild.",
            "In India, **MASLD** is the commonest cause of mildly raised ALT.",
            "Persistently raised ALT predicts higher mortality, so **investigate, do not keep repeating**.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "**ALT** is liver-specific; **AST** also comes from muscle, heart and red cells.",
            "Alcohol lowers pyridoxal phosphate, so **AST:ALT exceeds 2**.",
            "**ALP** is induced by retained bile acids, so it rises over days.",
            "Only **conjugated bilirubin** enters urine; dark urine excludes Gilbert.",
            "**INR** changes within hours (factor VII); albumin takes weeks.",
            "Low **platelets** suggest portal hypertension and cirrhosis.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**R ratio** = (ALT/ULN) divided by (ALP/ULN).",
            "R 5 or more is **hepatocellular**; 2 or less **cholestatic**; 2-5 **mixed**.",
            "ACG grades: borderline under 2x, mild 2-5x, moderate 5-15x, severe over 15x.",
            "**ALT over 1000**: ischaemia, viral, paracetamol, CBD stone, autoimmune, Wilson.",
            "Unconjugated bilirubin when the **direct fraction is under 15-20%**.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Most patients are **asymptomatic**; the test was done for another reason.",
            "Quantify **alcohol** and list every drug, herbal and gym supplement.",
            "Ask about **diabetes, obesity**, transfusions, injections and family liver disease.",
            "Itching, pale stools and dark urine suggest **cholestasis**.",
            "Mild jaundice on fasting with normal enzymes suggests **Gilbert syndrome**.",
            "Look for **stigmata of chronic liver disease**, splenomegaly and KF rings.",
          ],
        },
        {
          title: "Differential diagnosis",
          points: [
            "**Ischaemic hepatitis**: ALT in thousands after shock, very high LDH, rapid fall.",
            "**Acute Wilson**: ALP:bilirubin under 4 and haemolysis in a young patient.",
            "Isolated AST rise: check **CK**, haemolysis or macro-AST.",
            "Isolated ALP with normal GGT: **bone or placenta**, not liver.",
            "Isolated GGT: alcohol or enzyme-inducing drugs; needs no work-up.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "First line: **HBsAg, anti-HCV, ultrasound**, HbA1c, lipids, ferritin, transferrin saturation.",
            "Calculate **FIB-4**: under 1.3 low risk, over 2.67 high risk.",
            "Second line: ANA, ASMA, IgG, ceruloplasmin, alpha-1 antitrypsin, anti-tTG, TSH.",
            "Cholestasis with normal ducts: **AMA** first, then MRCP.",
            "**Vitamin K 10 mg** correcting the INR means cholestasis, not liver failure.",
            "Liver biopsy only when non-invasive work-up is inconclusive.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Treat the cause**; there is no drug for raised enzymes.",
            "Stop the suspected drug and **recheck in 2-4 weeks**.",
            "MASLD: lose **7-10% of weight**; alcohol: abstain.",
            "Gilbert: **reassure**; warn about irinotecan and atazanavir.",
            "Statins are safe with ALT under **3 times ULN**.",
            "Vaccinate non-immune patients against **hepatitis A and B**.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Admit if **INR 1.5 or more**, encephalopathy or ALT over 1000.",
            "Paracetamol toxicity: **IV N-acetylcysteine** whatever the time since ingestion.",
            "Jaundice, fever and rigors: treat as **cholangitis**, arrange ERCP.",
            "Do not give FFP just to correct INR; it hides prognosis.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "Pregnancy: ALP rises normally; **any ALT or bilirubin rise is abnormal**.",
            "Children: ALP up to **3 times adult values** during growth.",
            "Dialysis: ALT runs low, so screen HBV and HCV anyway.",
            "On ATT: stop if ALT over **3x with symptoms or 5x without**.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "**Hy's law**: ALT over 3x plus bilirubin over 2x on a drug; refer.",
            "Refer FIB-4 over 2.67 or stiffness over **12 kPa** to hepatology.",
            "Recheck mild unexplained rise at **3-6 months**; refer if persistent.",
            "Cirrhosis: ultrasound every **6 months** for HCC.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs used once the cause is known",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["N-acetylcysteine", "150 mg/kg IV over 1 h, 50 mg/kg over 4 h, 100 mg/kg over 16 h", "Until INR under 2 and ALT falling", "Anaphylactoid reaction; slow, do not stop"],
            ["Vitamin K", "10 mg IV slowly or SC", "Single dose, recheck INR 24-48 h", "Reaction with fast IV push"],
            ["Ursodeoxycholic acid", "13-15 mg/kg/day oral, divided", "Lifelong in PBC", "Diarrhoea; not for undiagnosed raised LFTs"],
            ["Hepatitis B vaccine", "20 microgram IM deltoid", "0, 1, 6 months", "Double dose in dialysis; check anti-HBs"],
          ],
        },
        {
          heading: "Patterns of abnormal liver tests",
          columns: ["Pattern", "Clue", "Common causes"],
          rows: [
            ["Hepatocellular", "R 5 or more", "MASLD, alcohol, viral, drugs, AIH"],
            ["Cholestatic", "R 2 or less, GGT up", "Stones, cancer, PBC, PSC, drugs"],
            ["Mixed", "R 2-5", "Amoxicillin-clavulanate, infiltration"],
            ["Isolated ALP", "GGT normal", "Bone, placenta, growth"],
            ["Unconjugated bilirubin", "Direct under 15-20%", "Gilbert, haemolysis"],
            ["Conjugated, enzymes normal", "Bilirubinuria", "Dubin-Johnson, Rotor"],
          ],
        },
        {
          heading: "Tests of injury vs function",
          columns: ["Test", "Reflects", "Pearl"],
          rows: [
            ["ALT", "Hepatocyte injury", "ULN 33 men, 25 women"],
            ["AST", "Liver, muscle, RBC", "AST:ALT over 2 alcohol"],
            ["ALP / GGT", "Cholestasis", "GGT confirms liver source"],
            ["Albumin", "Chronic function", "Half-life 3 weeks"],
            ["INR", "Acute function", "Earliest sign of failure"],
            ["Platelets", "Portal hypertension", "Under 150,000 suggests cirrhosis"],
          ],
        },
      ],
      remember: [
        "**R ratio**: 5 or more hepatocellular, 2 or less cholestatic.",
        "ALT over 1000: **I VIT-AW** (Ischaemic, Viral, Ingested toxin, Tract stone, Autoimmune, Wilson).",
        "**AST:ALT over 2** means alcohol.",
        "**Dark urine excludes Gilbert.**",
        "**INR is the earliest marker** of liver failure.",
        "Vitamin K corrects cholestatic INR, not cirrhotic INR.",
        "Falling ALT with rising INR is **massive necrosis**, not recovery.",
      ],
    },
  },
};

export default revision;
