/**
 * Diagrams for gastro-hepatology, keyed by topic id.
 */
import type { DiagramSet } from "../lib/types";

const diagrams: DiagramSet = {
  "gastro-hepatology-acid-peptic-gerd": [
    {
      kind: "flow",
      heading: "Helicobacter pylori: test, treat, confirm",
      caption:
        "Test off acid suppression, treat for 14 days, and prove cure rather than assume it.",
      steps: [
        {
          label: "Stop PPI 2 weeks, antibiotics 4 weeks",
          detail:
            "PPIs suppress urease activity and bacterial density, so a urea breath test or stool antigen sent on treatment reads falsely negative",
          tone: "warn",
        },
        {
          label: "Urea breath test or stool antigen",
          detail:
            "Serology stays positive for years and cannot separate active from past infection where 60-80 percent of Indian adults are seropositive",
          tone: "decision",
        },
        {
          label: "Bismuth quadruple therapy for 14 days",
          detail:
            "PPI standard dose BD, bismuth subcitrate 120 mg QID, tetracycline 500 mg QID, metronidazole 400 mg TDS - first line in India",
        },
        {
          label: "If bismuth is unavailable: concomitant",
          detail:
            "PPI BD with amoxicillin 1 g BD, clarithromycin 500 mg BD and tinidazole 500 mg BD for 14 days; 7-day triple therapy now cures under 70 percent",
        },
        {
          label: "Confirm cure in every treated patient",
          detail:
            "Urea breath test or stool antigen at least 4 weeks after finishing antibiotics and 2 weeks off the PPI",
          tone: "good",
        },
        {
          label: "Failure: levofloxacin triple for 14 days",
          detail:
            "PPI BD with amoxicillin 1 g BD and levofloxacin 500 mg OD; avoid where there has been prior fluoroquinolone use",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Who needs an endoscopy in dyspepsia",
      caption: "Alarm features scope at any age; in India the age threshold is 40-45, not 55-60.",
      root: "New dyspepsia in the clinic",
      arms: [
        {
          label: "Alarm features at any age",
          tone: "warn",
          steps: [
            "Dysphagia or odynophagia",
            "Unintentional weight loss or anorexia",
            "Persistent vomiting, bleeding or melaena",
            "Iron-deficiency anaemia or a palpable mass",
            "Family history of gastric cancer",
            "Endoscope now, whatever the age",
          ],
        },
        {
          label: "New dyspepsia over 40-45 years",
          tone: "decision",
          steps: [
            "Gastric cancer presents younger in India than in the West",
            "Most Indian authorities scope from 40-45, not 55-60",
            "Endoscopy rather than an empirical PPI",
          ],
        },
        {
          label: "Under 40 with no alarm features",
          tone: "good",
          steps: [
            "Test and treat for H. pylori, or an empirical PPI trial",
            "Standard-dose PPI 30-60 minutes before breakfast",
            "Scope if 8 weeks of optimal therapy fail",
          ],
        },
        {
          label: "Epigastric pain in a diabetic or the elderly",
          tone: "warn",
          steps: [
            "Inferior wall myocardial infarction is the great mimic",
            "Sweating, breathlessness or radiation to the jaw",
            "An ECG costs less than an endoscopy - do it first",
          ],
        },
      ],
    },
    {
      kind: "ladder",
      heading: "GERD: from lifestyle to referral",
      caption: "Step up only when the step below has been taken correctly.",
      steps: [
        {
          label: "Lifestyle measures that actually work",
          detail:
            "Weight loss is the single most effective; stop smoking, no meal within 3 hours of lying down, head end of the bed raised 6-8 inches on blocks rather than pillows",
        },
        {
          label: "Standard-dose PPI once daily for 8 weeks",
          detail:
            "Taken 30-60 minutes before breakfast; taking it with or after food is the commonest cause of apparent PPI failure",
          tone: "warn",
        },
        {
          label: "Twice-daily PPI",
          detail:
            "Second dose before dinner, only for proven erosive disease or a partial response; full effect of a PPI takes 3-5 days",
        },
        {
          label: "Add-on for breakthrough and night symptoms",
          detail:
            "Alginate-antacid preparations, useful in pregnancy, and famotidine 20-40 mg at night since ranitidine has been withdrawn worldwide over NDMA",
        },
        {
          label: "Step down at 8 weeks",
          detail:
            "Halve the dose, move to on-demand dosing, or stop; review the indication of every PPI beyond 8 weeks",
          tone: "good",
        },
        {
          label: "Refer for endoscopy",
          detail:
            "Alarm features, failure of 8 weeks of optimal therapy, immediate relapse on stopping, or chronic reflux over 50 to look for Barrett oesophagus",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Duodenal versus gastric ulcer",
      caption: "The malignant potential row is the one that changes what you do afterwards.",
      columns: ["Feature", "Duodenal ulcer", "Gastric ulcer"],
      rows: [
        ["Typical age", "25-50 years", "Over 40 years"],
        [
          "Pain and food",
          "Relieved by food, wakes the patient at night with hunger pain",
          "Worsened by food, so the patient eats less",
        ],
        ["Weight", "Stable or increased", "Loss is common"],
        ["H. pylori association", "About 90 percent", "About 70 percent"],
        ["Acid output", "Normal or high", "Normal or low"],
        ["Healing course of PPI", "4 weeks", "8 weeks"],
        [
          "Malignant potential",
          "Essentially none",
          "Real - always biopsy and re-scope at 8-12 weeks",
        ],
      ],
    },
  ],

  "gastro-hepatology-acute-diarrhoea": [
    {
      kind: "compare",
      heading: "WHO and IMNCI dehydration assessment",
      caption: "Two or more signs in a column put the child in that plan.",
      columns: [
        "Assessment",
        "No dehydration (Plan A)",
        "Some dehydration (Plan B)",
        "Severe dehydration (Plan C)",
      ],
      rows: [
        ["General condition", "Well, alert", "Restless, irritable", "Lethargic or unconscious"],
        ["Eyes", "Normal", "Sunken", "Sunken"],
        [
          "Thirst",
          "Drinks normally",
          "Thirsty, drinks eagerly",
          "Drinks poorly or unable to drink",
        ],
        [
          "Skin pinch",
          "Goes back at once",
          "Goes back slowly",
          "Goes back very slowly, over 2 seconds",
        ],
        [
          "Fluid",
          "ORS after each stool at home",
          "75 mL/kg ORS over 4 hours",
          "Ringer lactate 100 mL/kg IV by age schedule",
        ],
        [
          "Zinc",
          "20 mg daily for 14 days",
          "20 mg daily for 14 days",
          "20 mg daily for 14 days once drinking",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Plan C: severe dehydration",
      caption: "Ringer lactate 100 mL/kg, split by age, with ORS started as soon as it is possible.",
      steps: [
        {
          label: "Infant under 12 months",
          detail: "30 mL/kg of Ringer lactate in the first hour, then 70 mL/kg over the next 5 hours",
        },
        {
          label: "Over 12 months and adults",
          detail: "30 mL/kg in the first 30 minutes, then 70 mL/kg over the next 2.5 hours",
        },
        {
          label: "Reassess every 15-30 minutes",
          detail: "Step down to Plan B when the signs of severe dehydration have gone",
          tone: "decision",
        },
        {
          label: "Start ORS as soon as the patient can drink",
          detail: "By cup and spoon alongside the drip, adding ORS for ongoing stool losses",
        },
        {
          label: "If intravenous access fails",
          detail: "ORS by nasogastric tube at 20 mL/kg/hour for 6 hours while arranging transfer",
          tone: "warn",
        },
        {
          label: "In severe acute malnutrition",
          detail:
            "ReSoMal 5-10 mL/kg after each stool and avoid rapid intravenous fluids, which precipitate heart failure",
          tone: "warn",
        },
        {
          label: "Zinc 20 mg daily for 14 days once drinking",
          detail: "10 mg daily for infants under 6 months, whatever the type of diarrhoea",
          tone: "good",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Which diarrhoea gets an antibiotic",
      caption: "The syndrome, not the culture, chooses the drug at first contact.",
      root: "Acute diarrhoea: name the syndrome",
      arms: [
        {
          label: "Acute watery diarrhoea, no fever",
          tone: "good",
          steps: [
            "Virus, ETEC or a food toxin",
            "No antibiotic at all",
            "ORS and zinc are the whole treatment",
          ],
        },
        {
          label: "Bloody dysentery with fever and tenesmus",
          tone: "warn",
          steps: [
            "Shigella, invasive E. coli, Campylobacter",
            "Adult: ciprofloxacin 500 mg BD for 3 days",
            "Child: azithromycin 10-12 mg/kg once daily for 3 days",
            "Loperamide is contraindicated - it risks toxic megacolon",
          ],
        },
        {
          label: "Rice-water stools with rapid collapse",
          steps: [
            "Vibrio cholerae O1, usually in an outbreak",
            "Rehydrate first, then doxycycline 300 mg as a single dose",
            "Azithromycin 20 mg/kg for children and in pregnancy",
            "Antibiotics shorten illness and transmission, never replace fluids",
          ],
        },
        {
          label: "Sub-acute bloody mucoid stool, little fever",
          steps: [
            "Entamoeba histolytica - trophozoites with ingested red cells",
            "Metronidazole 800 mg TDS for 7-10 days",
            "Then diloxanide furoate 500 mg TDS for 10 days to clear cysts",
          ],
        },
        {
          label: "Frothy foul stools, bloating, weight loss",
          steps: [
            "Giardia lamblia",
            "Tinidazole 2 g as a single dose",
            "Or metronidazole 400 mg TDS for 5-7 days",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "Water-borne diarrhoea outbreak response",
      caption: "The examinable sequence: treat, define, plot, chlorinate, sample, supply, notify.",
      steps: [
        {
          label: "Treat the cases first",
          detail:
            "ORS and zinc for all; doxycycline 300 mg single dose for adults with suspected cholera once rehydration has begun",
        },
        {
          label: "Define a case and search actively",
          detail:
            "For example three or more loose stools in 24 hours in a resident of the colony since a stated date",
        },
        {
          label: "Plot the epidemic curve",
          detail: "Count and describe the cases by time, place and person",
        },
        {
          label: "Inspect and chlorinate the water source",
          detail:
            "Bleaching powder to a residual chlorine of 0.5 mg/L after 30 minutes contact; advise boiling or household chlorine tablets meanwhile",
        },
        {
          label: "Collect samples",
          detail: "Water for coliform counts and stool for culture",
        },
        { label: "Set up an ORS depot in the community" },
        {
          label: "Notify the district health authority",
          detail: "Through IDSP-IHIP, and reinforce handwashing, sanitation and food hygiene",
          tone: "good",
        },
      ],
    },
  ],

  "gastro-hepatology-jaundice": [
    {
      kind: "compare",
      heading: "Separating the three types of jaundice",
      caption: "Urine and stool colour place the patient in a box before any test is sent.",
      columns: ["Feature", "Prehepatic (haemolytic)", "Hepatocellular", "Cholestatic (obstructive)"],
      rows: [
        [
          "Predominant bilirubin",
          "Unconjugated, over 85 percent",
          "Both fractions",
          "Conjugated",
        ],
        ["Urine colour", "Normal", "Dark", "Dark"],
        ["Stool colour", "Normal or dark", "Normal or pale", "Pale, clay-coloured"],
        ["Urine bile salts", "Absent", "Present", "Present"],
        ["Transaminases", "Normal", "Markedly raised", "Mildly raised"],
        [
          "Alkaline phosphatase",
          "Normal",
          "Mildly raised",
          "Markedly raised, with a high GGT",
        ],
        ["Pruritus", "Absent", "Variable", "Prominent"],
        [
          "Typical causes",
          "Haemolysis, malaria, G6PD deficiency, thalassaemia, Gilbert syndrome",
          "Viral hepatitis, alcohol, drugs, autoimmune, Wilson disease",
          "Gallstones, carcinoma head of pancreas, stricture, PBC, drugs",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Investigating jaundice in a rational sequence",
      caption: "Ultrasound divides the work-up: dilated ducts go one way, non-dilated the other.",
      steps: [
        {
          label: "First-line bloods for everyone",
          detail:
            "Total and direct bilirubin, AST, ALT, ALP, GGT, protein and albumin, prothrombin time with INR, blood count with smear and reticulocytes, urine for bile salts and pigments",
        },
        {
          label: "Urine and stool colour place the box",
          detail:
            "Dark urine with pale stool is cholestasis; normal urine with normal stool is unconjugated hyperbilirubinaemia",
          tone: "decision",
        },
        {
          label: "Ultrasound abdomen is the key next test",
          detail:
            "It separates dilated from non-dilated ducts and shows stones, liver texture, focal lesions, spleen, portal vein and the pancreatic head",
        },
        {
          label: "Dilated ducts mean extrahepatic obstruction",
          detail: "Go on to MRCP, endoscopic ultrasound or ERCP",
          tone: "decision",
        },
        {
          label: "Non-dilated ducts mean liver disease",
          detail:
            "Viral panel of HBsAg, anti-HCV, IgM anti-HAV and IgM anti-HEV, with autoimmune, Wilson and haemochromatosis work-up in the young",
        },
        {
          label: "Febrile jaundice in the monsoon",
          detail:
            "Malaria smear and rapid test, leptospirosis serology, dengue NS1 and scrub typhus - a tropical infection until proved otherwise",
          tone: "warn",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Anti-tuberculosis drug hepatitis",
      caption: "Stop the three together, then reintroduce one at a time in a fixed order.",
      steps: [
        {
          label: "Recognise it",
          detail:
            "ALT more than three times the upper limit of normal with symptoms and jaundice meets the NTEP definition of ATT-induced hepatitis",
          tone: "warn",
        },
        {
          label: "Stop isoniazid, rifampicin, pyrazinamide",
          detail:
            "All three together, because it is impossible to know which is responsible until they are reintroduced one at a time",
        },
        {
          label: "Hold with the non-hepatotoxic drugs",
          detail:
            "Ethambutol, levofloxacin and an aminoglycoside such as streptomycin or amikacin if treatment cannot be interrupted",
        },
        {
          label: "Wait for the liver to recover",
          detail: "ALT below twice the upper limit of normal and bilirubin normalised",
          tone: "decision",
        },
        {
          label: "Rifampicin first, at full dose",
          detail: "Check liver tests before each further addition",
        },
        { label: "Isoniazid after 3-7 days" },
        {
          label: "Pyrazinamide last, or omit it permanently",
          detail:
            "Often dropped after a severe hepatitis, with the regimen extended; hepatoprotective agents have no evidence base",
          tone: "good",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Reading the liver function test pattern",
      caption: "The R factor sorts the pattern before the differential is even opened.",
      columns: ["Pattern", "R factor", "Typical numbers", "Think of"],
      rows: [
        [
          "Hepatocellular",
          "5 or more",
          "ALT over 1000 U/L",
          "Acute viral hepatitis, paracetamol, ischaemic hepatitis, autoimmune hepatitis",
        ],
        [
          "Hepatocellular, alcohol type",
          "5 or more",
          "AST to ALT ratio over 2, both under 300 U/L",
          "Alcohol-related hepatitis, often with macrocytosis and a high GGT",
        ],
        [
          "Cholestatic",
          "2 or less",
          "ALP over 3 times normal with a raised GGT",
          "Biliary obstruction, drug cholestasis, primary biliary cholangitis",
        ],
        [
          "Mixed",
          "Between 2 and 5",
          "Both moderately raised",
          "Drug-induced liver injury, sepsis, infiltrative disease",
        ],
        [
          "Isolated unconjugated bilirubin",
          "Not applicable",
          "Bilirubin 1.5-4 mg/dL with normal enzymes",
          "Gilbert syndrome, haemolysis",
        ],
        [
          "Isolated raised ALP with normal GGT",
          "Not applicable",
          "ALP raised alone",
          "Bone origin - Paget disease, osteomalacia, growth, pregnancy",
        ],
      ],
    },
  ],

  "gastro-hepatology-viral-hepatitis": [
    {
      kind: "compare",
      heading: "The five hepatitis viruses",
      caption: "A and E are water, B C and D are blood; only the blood-borne ones become chronic.",
      columns: ["Feature", "Hepatitis A", "Hepatitis B", "Hepatitis C", "Hepatitis D", "Hepatitis E"],
      rows: [
        [
          "Virus",
          "RNA picornavirus",
          "DNA hepadnavirus",
          "RNA flavivirus",
          "Defective RNA virus",
          "RNA hepevirus",
        ],
        [
          "Transmission",
          "Faeco-oral",
          "Blood, sexual, perinatal",
          "Blood, injection, dialysis",
          "Blood, with HBV only",
          "Faeco-oral, water-borne",
        ],
        [
          "Incubation",
          "15-50 days",
          "45-180 days",
          "15-150 days",
          "30-180 days",
          "15-60 days",
        ],
        [
          "Chronicity",
          "Never",
          "Adults under 5 percent, neonates 90 percent",
          "55-85 percent",
          "High with superinfection",
          "Only in the immunosuppressed",
        ],
        [
          "Vaccine",
          "Yes, not in the UIP",
          "Yes, UIP with a birth dose",
          "No",
          "Prevented by the HBV vaccine",
          "Not licensed in India",
        ],
        [
          "Special risk",
          "Cholestatic and relapsing forms",
          "Cirrhosis and hepatocellular carcinoma",
          "Cirrhosis and hepatocellular carcinoma",
          "Accelerated cirrhosis",
          "15-25 percent mortality in the third trimester",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Reading the hepatitis B serology panel",
      caption: "Anti-HBc separates vaccination from natural infection - it never follows a vaccine.",
      columns: ["HBsAg", "Anti-HBs", "Anti-HBc total", "IgM anti-HBc", "Interpretation"],
      rows: [
        ["Positive", "Negative", "Positive", "Positive", "Acute hepatitis B"],
        [
          "Positive",
          "Negative",
          "Positive",
          "Negative",
          "Chronic hepatitis B if positive beyond 6 months",
        ],
        ["Negative", "Positive", "Positive", "Negative", "Resolved past infection, natural immunity"],
        ["Negative", "Positive", "Negative", "Negative", "Immunity from vaccination"],
        ["Negative", "Negative", "Positive", "Positive", "Window period of acute infection"],
        ["Negative", "Negative", "Negative", "Negative", "Susceptible - vaccinate"],
      ],
    },
    {
      kind: "flow",
      heading: "Preventing mother-to-child hepatitis B",
      caption:
        "Combined active and passive prophylaxis prevents about 90-95 percent of perinatal transmission.",
      steps: [
        {
          label: "Screen every pregnant woman for HBsAg",
          detail: "A programme requirement under the National Viral Hepatitis Control Programme",
        },
        {
          label: "Tenofovir from 28 weeks if the load is high",
          detail:
            "Tenofovir disoproxil fumarate 300 mg daily if HBV DNA is above 200000 IU/mL or HBeAg is positive, continued to delivery and 4-12 weeks postpartum",
        },
        {
          label: "Immunoglobulin within 12 hours of birth",
          detail: "Hepatitis B immunoglobulin 0.5 mL intramuscularly to the newborn",
          tone: "warn",
        },
        {
          label: "Birth dose of vaccine within 24 hours",
          detail: "Given at a different site from the immunoglobulin",
        },
        {
          label: "Pentavalent vaccine at 6, 10 and 14 weeks",
          detail: "The routine Universal Immunisation Programme schedule",
        },
        {
          label: "Breastfeed once the infant is immunised",
          detail: "Check HBsAg and anti-HBs in the child at 9-12 months to confirm protection",
          tone: "good",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Needle-stick exposure: what to give",
      caption: "One virus has both vaccine and immunoglobulin, one has neither, one has drugs.",
      root: "Needle-stick injury from an infected source",
      arms: [
        {
          label: "Hepatitis B",
          steps: [
            "A documented responder with anti-HBs above 10 mIU/mL needs nothing",
            "Unvaccinated or non-responder: immunoglobulin 0.06 mL/kg within 24 hours",
            "Never later than 7 days, plus a full vaccine course at a separate site",
          ],
        },
        {
          label: "Hepatitis C",
          tone: "warn",
          steps: [
            "There is no vaccine and no immunoglobulin",
            "Baseline anti-HCV and HCV RNA",
            "HCV RNA at 4-6 weeks and anti-HCV at 3-6 months",
            "Treat early with direct-acting antivirals if infection is confirmed",
          ],
        },
        {
          label: "HIV",
          steps: [
            "Three drugs such as tenofovir, lamivudine and dolutegravir",
            "Start within 2 hours where indicated",
            "Continue 28 days with follow-up testing",
          ],
        },
      ],
    },
  ],

  "gastro-hepatology-chronic-liver-disease": [
    {
      kind: "compare",
      heading: "Child-Turcotte-Pugh score",
      caption:
        "Bilirubin, albumin, INR, ascites and encephalopathy - creatinine and sodium belong to MELD.",
      columns: ["Variable", "1 point", "2 points", "3 points"],
      rows: [
        ["Serum bilirubin (mg/dL)", "Less than 2", "2 to 3", "More than 3"],
        ["Serum albumin (g/dL)", "More than 3.5", "2.8 to 3.5", "Less than 2.8"],
        ["INR", "Less than 1.7", "1.7 to 2.3", "More than 2.3"],
        ["Ascites", "None", "Mild, diuretic responsive", "Moderate to tense, refractory"],
        ["Encephalopathy", "None", "Grade 1 to 2", "Grade 3 to 4"],
        [
          "Class and 1-year survival",
          "Class A, 5 to 6 points, about 100 percent",
          "Class B, 7 to 9 points, about 80 percent",
          "Class C, 10 to 15 points, about 45 percent",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "What the ascitic fluid says",
      caption:
        "Every new ascites gets a diagnostic tap - it is safe at any INR and any platelet count.",
      root: "Diagnostic paracentesis",
      arms: [
        {
          label: "SAAG 1.1 g/dL or more",
          steps: [
            "Portal hypertension, about 97 percent accurate",
            "Cirrhosis, alcoholic hepatitis, cardiac failure, Budd-Chiari",
            "Salt to 2 g sodium a day, spironolactone 100 mg with furosemide 40 mg",
            "Protein over 2.5 g/dL with a high SAAG suggests a cardiac or Budd-Chiari cause",
          ],
        },
        {
          label: "SAAG below 1.1 g/dL",
          steps: [
            "Not portal hypertensive - peritoneal or exudative disease",
            "Tuberculous peritonitis, carcinomatosis, pancreatic ascites, nephrotic syndrome",
            "Diuretics do not work; send ADA, cytology and amylase",
            "ADA above 39 U/L in lymphocytic fluid means tuberculous peritonitis",
          ],
        },
        {
          label: "Neutrophils 250/mm3 or more",
          tone: "warn",
          steps: [
            "Spontaneous bacterial peritonitis, treated even if the culture is negative",
            "Cultures are sterile in up to 40 percent",
            "Cefotaxime 2 g eight-hourly plus albumin, started at once",
          ],
        },
        {
          label: "Ascitic protein below 1.5 g/dL",
          steps: [
            "Low opsonic activity, so a high risk of SBP",
            "Consider primary norfloxacin 400 mg daily prophylaxis in advanced disease",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "Spontaneous bacterial peritonitis",
      caption: "Treated on the cell count, never on the culture result.",
      steps: [
        {
          label: "Suspect it in any cirrhotic who declines",
          detail:
            "Fever, abdominal pain, new encephalopathy or renal impairment; tap the abdomen rather than wait",
        },
        {
          label: "Ascitic neutrophils 250/mm3 or more",
          detail: "Diagnosis is made on the cell count alone; cultures are negative in up to 40 percent",
          tone: "decision",
        },
        {
          label: "Cefotaxime 2 g intravenously eight-hourly",
          detail:
            "Or ceftriaxone 2 g daily, for 5-7 days; piperacillin-tazobactam or a carbapenem where the infection is nosocomial",
        },
        {
          label: "Albumin 1.5 g/kg day 1 and 1 g/kg day 3",
          detail:
            "Prevents hepatorenal syndrome and cuts mortality from about 30 percent to 10 percent - quote the numbers",
          tone: "good",
        },
        {
          label: "Avoid gentamicin and other nephrotoxics",
          detail:
            "Aminoglycosides, NSAIDs and ACE inhibitors or ARBs precipitate acute kidney injury in a cirrhotic with ascites",
          tone: "warn",
        },
        {
          label: "Repeat the tap at 48 hours if not improving",
          detail:
            "Failure of the neutrophil count to fall by 25 percent suggests resistance or secondary peritonitis",
        },
        {
          label: "Lifelong norfloxacin 400 mg daily after",
          detail:
            "Secondary prophylaxis until the ascites resolves or the patient is transplanted; ceftriaxone 1 g daily for 7 days during any future GI bleed",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Hepatic encephalopathy",
      caption: "Encephalopathy is almost never spontaneous - the precipitant is the first rung.",
      steps: [
        {
          label: "Hunt and treat the precipitant",
          detail:
            "GI bleeding, infection including SBP, constipation, dehydration and over-diuresis, hypokalaemia or hyponatraemia, sedatives, alcohol binge, renal failure, TIPS",
          tone: "decision",
        },
        {
          label: "Lactulose 30 mL two or three times daily",
          detail:
            "Titrated to 2-3 soft stools a day; it acidifies the colon, converting ammonia to non-absorbable ammonium",
        },
        {
          label: "Retention enema in grade 3-4",
          detail: "300 mL of lactulose in 700 mL of water when the patient cannot swallow",
        },
        {
          label: "Add rifaximin 550 mg twice daily",
          detail:
            "For breakthrough on lactulose or after a second episode; with lactulose it reduces recurrence and hospitalisation",
        },
        {
          label: "Feed, do not starve",
          detail:
            "Protein 1.2-1.5 g/kg/day with a late-evening snack; protein restriction is obsolete and worsens the sarcopenia that drives encephalopathy",
          tone: "warn",
        },
        {
          label: "Do not titrate to the ammonia level",
          detail:
            "Serum ammonia is neither needed for the diagnosis nor useful for monitoring - the diagnosis is clinical",
        },
      ],
    },
  ],

  "gastro-hepatology-gi-bleeding": [
    {
      kind: "flow",
      heading: "Upper gastrointestinal bleed: the first hour",
      caption: "Resuscitate, transfuse restrictively, decide the mechanism, then scope.",
      steps: [
        {
          label: "Airway, breathing, circulation",
          detail:
            "Protect the airway in massive haematemesis or grade 3-4 encephalopathy before anything else",
        },
        {
          label: "Two large-bore cannulae and crystalloid",
          detail:
            "16G or 18G; send group and crossmatch, blood count, urea, creatinine, electrolytes, liver tests, INR and glucose",
        },
        {
          label: "Transfuse to a threshold of 7 g/dL",
          detail:
            "Target 7-9 g/dL, using 8 g/dL in ischaemic heart disease; over-transfusion raises portal pressure and increases rebleeding and death",
        },
        {
          label: "Decide variceal or non-variceal",
          detail:
            "Stigmata of chronic liver disease, splenomegaly or ascites means variceal until proved otherwise",
          tone: "decision",
        },
        {
          label: "Start the drug that matches",
          detail:
            "Terlipressin plus ceftriaxone for the cirrhotic; pantoprazole 80 mg bolus then 8 mg/hour for the ulcer",
        },
        {
          label: "Endoscopy within 24 hours, 12 if unstable",
          detail:
            "Endoscopy within 24 hours is the intervention that saves lives; a PPI downstages the lesion but does not reduce mortality",
        },
        {
          label: "Admit a Blatchford score of 2 or more",
          detail:
            "Also any active haematemesis, melaena, syncope, pulse above 100 or systolic below 100 mmHg; a clinic without blood banking transfers rather than observes",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Variceal versus non-variceal upper GI bleed",
      caption: "The two columns diverge at the very first drug given.",
      columns: ["Feature", "Variceal bleed", "Non-variceal, usually peptic ulcer"],
      rows: [
        [
          "Background",
          "Chronic liver disease, splenomegaly, ascites, alcohol or hepatitis B or C",
          "NSAID or aspirin use, prior dyspepsia or ulcer, Helicobacter pylori",
        ],
        [
          "Bleed character",
          "Large-volume painless haematemesis, often with melaena and shock",
          "Coffee-ground vomit or melaena, often preceded by epigastric pain",
        ],
        [
          "Drug to start immediately",
          "Terlipressin 2 mg IV six-hourly plus ceftriaxone 1 g IV daily",
          "Pantoprazole 80 mg IV bolus then 8 mg/hour infusion",
        ],
        [
          "Endoscopy timing",
          "Within 12 hours of presentation",
          "Within 24 hours, within 12 hours if unstable",
        ],
        [
          "Endoscopic therapy",
          "Band ligation for oesophageal varices, cyanoacrylate glue for gastric varices",
          "Dual therapy - adrenaline plus a clip or thermal coagulation",
        ],
        [
          "Rescue if it fails",
          "Balloon tamponade for up to 24 hours as a bridge, then TIPS",
          "Repeat endoscopy, then arterial embolisation or surgery",
        ],
        [
          "Secondary prevention",
          "Non-selective beta blocker plus banding to obliteration, treat the liver disease",
          "H. pylori eradication with confirmed cure, stop the NSAID, oral PPI",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Variceal bleeding that does not stop",
      caption: "Drugs before the scope, the scope within 12 hours, tamponade only as a bridge.",
      steps: [
        {
          label: "Terlipressin before the endoscope",
          detail:
            "2 mg intravenously six-hourly, reduced to 1 mg six-hourly after control, continued 2-5 days; watch for hyponatraemia and ischaemia",
        },
        {
          label: "Ceftriaxone 1 g daily in every cirrhotic",
          detail:
            "For up to 7 days in any cirrhotic with a gastrointestinal bleed - it reduces infection, rebleeding and mortality",
          tone: "good",
        },
        {
          label: "Band ligation within 12 hours",
          detail:
            "The definitive treatment for oesophageal varices; gastric fundal varices take cyanoacrylate glue injection instead",
        },
        {
          label: "Balloon tamponade as a bridge",
          detail:
            "Sengstaken-Blakemore or Minnesota tube for a maximum of 24 hours with the airway secured; oesophageal rupture and aspiration are its dangers",
          tone: "warn",
        },
        {
          label: "Early or pre-emptive TIPS within 72 hours",
          detail:
            "For Child C 10-13, or Child B with active bleeding at endoscopy; rescue TIPS when drugs and endoscopy fail",
        },
        {
          label: "Secondary prophylaxis before discharge",
          detail:
            "Non-selective beta blocker plus repeat banding every 2-4 weeks to obliteration, then surveillance and transplant assessment",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Forrest grade at endoscopy",
      caption: "The grade decides who gets endoscopic therapy and a PPI infusion.",
      columns: ["Forrest grade", "What is seen", "What it means"],
      rows: [
        [
          "Ia",
          "Spurting arterial bleeding",
          "Active bleeding - endoscopic haemostasis first, embolisation or surgery only if it fails",
        ],
        [
          "Ib",
          "Oozing from the ulcer base",
          "Active bleeding - endoscopic haemostasis first, embolisation or surgery only if it fails",
        ],
        [
          "IIa",
          "Non-bleeding visible vessel",
          "Rebleeds in 40-50 percent untreated - dual endoscopic therapy plus high-dose IV PPI for 72 hours",
        ],
        ["IIc", "Flat pigmented spot", "Low risk - oral acid suppression alone"],
        ["III", "Clean ulcer base", "Low risk - oral acid suppression alone"],
      ],
    },
  ],

  "gastro-hepatology-ibs-constipation": [
    {
      kind: "flow",
      heading: "Irritable bowel syndrome: a positive diagnosis",
      caption: "IBS is diagnosed on criteria in the absence of alarm features, not by exclusion.",
      steps: [
        {
          label: "Apply the Rome IV core criterion",
          detail:
            "Recurrent abdominal pain at least 1 day a week for 3 months with onset at least 6 months earlier; pain is required, discomfort alone is not enough",
        },
        {
          label: "Confirm two of the three associations",
          detail:
            "Related to defecation, associated with a change in stool frequency, associated with a change in stool form",
        },
        {
          label: "Screen for alarm features",
          detail:
            "Onset over 50, over 45 in Indian practice, rectal bleeding, weight loss, nocturnal symptoms, fever, anaemia, a mass, progressive change in bowel habit, family history of cancer, coeliac disease or IBD",
          tone: "decision",
        },
        {
          label: "Nocturnal pain or diarrhoea is never IBS",
          detail: "Waking from sleep with pain or stool is an organic red flag and is investigated",
          tone: "warn",
        },
        {
          label: "Do the minimum tests, not a colonoscopy",
          detail:
            "Blood count, ESR or CRP, coeliac serology with total IgA in diarrhoea, stool for Giardia and Entamoeba, and faecal calprotectin",
        },
        {
          label: "Calprotectin under 50 microgram/g",
          detail:
            "Effectively excludes inflammatory bowel disease and saves the colonoscopy in IBS-D",
          tone: "good",
        },
        {
          label: "Name the diagnosis and start treatment",
          detail:
            "Repeated normal investigation reinforces illness behaviour rather than reassures; review at 4-6 weeks",
        },
      ],
    },
    {
      kind: "branch",
      heading: "IBS subtype decides the drug",
      caption: "Subtype by Bristol stool form, then treat the dominant symptom.",
      root: "Irritable bowel syndrome",
      arms: [
        {
          label: "IBS-C",
          steps: [
            "Over 25 percent of stools Bristol 1-2 and under 25 percent Bristol 6-7",
            "Soluble fibre and polyethylene glycol",
            "Avoid lactulose - it is a FODMAP and worsens bloating",
            "An SSRI is preferred if a neuromodulator is needed",
          ],
        },
        {
          label: "IBS-D",
          steps: [
            "Over 25 percent Bristol 6-7 and under 25 percent Bristol 1-2",
            "Loperamide 2 mg titrated for urgency",
            "Rifaximin 550 mg three times daily for 14 days",
            "Amitriptyline 10-25 mg at night as a gut neuromodulator",
          ],
        },
        {
          label: "IBS-M",
          steps: [
            "Over 25 percent Bristol 1-2 and over 25 percent Bristol 6-7",
            "Treat the dominant symptom at the time and review",
          ],
        },
        {
          label: "For every subtype",
          tone: "good",
          steps: [
            "Dietitian-supervised low FODMAP diet for 4-6 weeks then systematic reintroduction",
            "Antispasmodics before meals - mebeverine 135 mg TDS, hyoscine butylbromide 10 mg",
            "Enteric-coated peppermint oil capsules",
            "Gut-directed CBT, hypnotherapy, yoga and regular exercise",
          ],
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Chronic constipation, step by step",
      caption: "Posture and toilet training are often the whole treatment.",
      steps: [
        {
          label: "Remove the cause and fix the lifestyle",
          detail:
            "Review constipating drugs - opioids, iron, calcium and aluminium antacids, calcium channel blockers, anticholinergics; fibre 25-30 g/day raised gradually with fluid 1.5-2 litres/day",
        },
        {
          label: "Toilet training and posture",
          detail:
            "Sit 20-30 minutes after a meal to use the gastrocolic reflex, unhurried, never suppress the call to stool, and use a footstool to raise the knees above the hips",
          tone: "good",
        },
        {
          label: "Bulk-forming laxative",
          detail:
            "Ispaghula 1-2 teaspoons at night with a full glass of water; raising fibre without raising fluid makes constipation and bloating worse",
          tone: "warn",
        },
        {
          label: "Osmotic laxative",
          detail:
            "Polyethylene glycol 13-26 g daily is the best-evidenced and the drug of choice; lactulose 15-30 mL is the cheaper alternative with more bloating",
        },
        {
          label: "Add a stimulant",
          detail:
            "Bisacodyl 5-10 mg or senna at night, as rescue or regular use; dependence and cathartic colon are myths",
        },
        {
          label: "Rectal measures for impaction and the frail",
          detail: "Glycerine or bisacodyl suppository, or a phosphate enema",
        },
        {
          label: "Prokinetic or secretagogue",
          detail:
            "Prucalopride 1-2 mg daily or linaclotide 290 microgram daily for refractory slow transit; cost limits their use in India",
        },
        {
          label: "Biofeedback when the outlet is the problem",
          detail:
            "Paradoxical puborectalis contraction on straining is dyssynergic defecation, present in up to half of refractory cases, and retraining beats any laxative",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Laxatives: class, dose and caution",
      caption: "Onset time tells you which one to reach for tonight and which one to plan with.",
      columns: ["Class", "Drug and dose", "Onset", "Caution"],
      rows: [
        [
          "Bulk forming",
          "Ispaghula or isabgol 1-2 teaspoons at night with a full glass of water",
          "12-72 hours",
          "Needs adequate fluid; avoid in impaction, obstruction and opioid-induced constipation",
        ],
        [
          "Osmotic - macrogol",
          "Polyethylene glycol 13-26 g daily in water",
          "1-3 days",
          "Drug of choice; higher doses used for disimpaction",
        ],
        [
          "Osmotic - disaccharide",
          "Lactulose 15-30 mL once or twice daily",
          "1-3 days",
          "Bloating and flatulence; it is a FODMAP, so avoid in IBS",
        ],
        [
          "Osmotic - saline",
          "Magnesium hydroxide 30-45 mL",
          "30 minutes to 6 hours",
          "Avoid in renal impairment and in the elderly",
        ],
        [
          "Stimulant",
          "Bisacodyl 5-10 mg at night, or senna 7.5-15 mg",
          "6-12 hours",
          "Cramps; safe for regular use, dependence is a myth",
        ],
        [
          "Rectal",
          "Glycerine or bisacodyl suppository, phosphate enema",
          "15-60 minutes",
          "For impaction and for the frail or immobile patient",
        ],
        [
          "Prokinetic and secretagogue",
          "Prucalopride 1-2 mg daily; linaclotide 290 microgram daily",
          "Days",
          "Refractory slow-transit constipation and IBS-C; cost limits use in India",
        ],
      ],
    },
  ],

  "gastro-hepatology-acute-abdomen-pancreatitis": [
    {
      kind: "compare",
      heading: "The acute abdomen by region",
      caption: "Region narrows the list; one discriminating feature usually settles it.",
      columns: ["Region", "Likely causes", "Discriminating feature"],
      rows: [
        [
          "Right hypochondrium",
          "Acute cholecystitis, biliary colic, cholangitis, hepatitis, right basal pneumonia",
          "Murphy sign; the Charcot triad of fever, jaundice and pain means cholangitis needing urgent drainage",
        ],
        [
          "Epigastrium",
          "Perforated peptic ulcer, acute pancreatitis, inferior wall myocardial infarction",
          "Board-like rigidity with lost liver dullness versus pain boring to the back; ECG in anyone over 40",
        ],
        [
          "Right iliac fossa",
          "Appendicitis, ileocaecal tuberculosis, mesenteric adenitis, ovarian or tubal disease, ureteric colic",
          "Migratory pain with anorexia and the Alvarado score; a urine pregnancy test in every woman",
        ],
        [
          "Left iliac fossa",
          "Diverticulitis, colitis, ovarian pathology, constipation",
          "Fever with localised tenderness in an older patient",
        ],
        [
          "Loin to groin",
          "Ureteric colic, pyelonephritis",
          "A restless patient unable to lie still, with haematuria on dipstick",
        ],
        [
          "Generalised",
          "Perforation, obstruction, mesenteric ischaemia, ruptured aneurysm, ruptured ectopic pregnancy",
          "Rigidity with a silent abdomen, pain out of proportion to signs, a pulsatile mass, or shock with a positive pregnancy test",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "The acute abdomen: the first hour",
      caption: "Serial examination by the same doctor beats any single investigation.",
      steps: [
        {
          label: "Airway, breathing, circulation, consciousness",
          detail:
            "Pulse, blood pressure, respiratory rate, temperature, saturation, capillary refill and a qSOFA or NEWS score; shock means transfer now, whatever the diagnosis",
        },
        {
          label: "Inspect, including the hernial orifices",
          detail:
            "An obstructed inguinal or femoral hernia is missed only by not looking; check the flanks for Cullen and Grey Turner bruising, which appear after 24-48 hours",
        },
        {
          label: "Palpate gently, starting away from the pain",
          detail:
            "Guarding, rigidity and rebound are peritonitis; percussion tenderness is kinder and more reliable, and loss of liver dullness suggests free gas",
        },
        {
          label: "Auscultate and examine the rectum",
          detail:
            "Silent in peritonitis and ileus, tinkling in mechanical obstruction; add a vaginal examination in women for cervical excitation and pelvic collections",
        },
        {
          label: "Bedside tests that change management",
          detail:
            "Urine pregnancy test in every woman of childbearing age, capillary glucose, urine dipstick, ECG in anyone over 40 with epigastric pain, haemoglobin",
          tone: "decision",
        },
        {
          label: "First investigations to request",
          detail:
            "Erect chest radiograph for free gas, supine abdominal film, blood count, urea, creatinine, electrolytes, glucose, amylase and lipase, liver tests and urinalysis; ultrasound is first-line imaging in India",
        },
        {
          label: "Transfer, or observe actively with a plan",
          detail:
            "Shock or rigidity transfers immediately; otherwise review at 4-6 hours or the next morning with written safety-netting on pain, fever, vomiting, fainting and passing flatus",
          tone: "warn",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Acute pancreatitis: diagnosis and the first 72 hours",
      caption: "Two of three Atlanta criteria diagnose it; imaging is not needed to make the call.",
      steps: [
        {
          label: "Two of three Atlanta criteria",
          detail:
            "Characteristic severe epigastric pain radiating to the back, lipase or amylase at least three times the upper limit of normal, or characteristic imaging on CT, MRI or ultrasound",
          tone: "decision",
        },
        {
          label: "Lipase beats amylase",
          detail:
            "More sensitive and specific and raised for 8-14 days against 3-5 days; the height of the enzyme does not correlate with severity",
        },
        {
          label: "Moderate goal-directed Ringer lactate",
          detail:
            "About 1.5 mL/kg/hour after a 10 mL/kg bolus if hypovolaemic, titrated to urine output above 0.5 mL/kg/hour, heart rate, mean arterial pressure and falling haematocrit",
        },
        {
          label: "Do not over-resuscitate",
          detail:
            "The WATERFALL trial showed aggressive high-volume fluid causes overload without benefit; Ringer lactate is preferred to normal saline",
          tone: "warn",
        },
        {
          label: "Feed enterally within 24-72 hours",
          detail:
            "Orally as tolerated, or nasogastric or nasojejunal; prolonged nil by mouth and routine parenteral nutrition are obsolete and increase infected necrosis",
          tone: "good",
        },
        {
          label: "No prophylactic antibiotics, even in necrosis",
          detail:
            "Only for proven or strongly suspected infected necrosis, cholangitis or extrapancreatic infection; suspect infected necrosis at 7-10 days with gas in the collection",
          tone: "warn",
        },
        {
          label: "Contrast-enhanced CT at 72-96 hours",
          detail:
            "Necrosis is not radiologically apparent earlier; early scanning underestimates severity and risks contrast nephropathy in a volume-depleted patient",
        },
        {
          label: "ERCP only for cholangitis or obstruction",
          detail:
            "Urgent ERCP within 24-48 hours only with concurrent cholangitis or persistent biliary obstruction; same-admission cholecystectomy for mild gallstone pancreatitis, since 25-30 percent otherwise return within six weeks",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Revised Atlanta severity grading",
      caption:
        "BISAP at 24 hours - blood urea over 25 mg/dL, impaired mental status, SIRS, age over 60, pleural effusion, one point each - predicts severe disease at 3 or more; haematocrit above 44 percent, a rising urea at 24 hours and CRP above 150 mg/L at 48 hours are the simple markers.",
      steps: [
        {
          label: "Mild",
          detail: "No organ failure and no local or systemic complications",
          tone: "good",
        },
        {
          label: "Moderately severe",
          detail:
            "Transient organ failure resolving within 48 hours, or local or systemic complications such as an acute peripancreatic fluid collection",
        },
        {
          label: "Severe",
          detail:
            "Persistent organ failure beyond 48 hours, with a mortality of 20-30 percent; needs critical care",
          tone: "warn",
        },
      ],
    },
  ],
};

export default diagrams;
