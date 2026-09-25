import type { Topic } from "../../lib/types";

const topics: Topic[] = [
  {
    id: "gastro-hepatology-liver-abscess",
    title: "Liver abscess: amoebic and pyogenic",
    oneLiner:
      "A liver abscess is **a pus-filled cavity in the liver**, either **amoebic** (Entamoeba histolytica reaching the liver by the portal vein - the commonest type in India, typically a single right-lobe abscess in a young alcohol-using man, treated with metronidazole followed by a luminal agent) or **pyogenic** (bacterial, usually biliary or portal in origin, often multiple, in older and diabetic patients, needing drainage and 4-6 weeks of antibiotics).",
    frequency: "common",
    keywords: [
      "liver abscess",
      "amoebic liver abscess",
      "ALA",
      "pyogenic liver abscess",
      "PLA",
      "Entamoeba histolytica",
      "anchovy sauce pus",
      "intercostal tenderness",
      "metronidazole",
      "tinidazole",
      "diloxanide furoate",
      "paromomycin",
      "percutaneous catheter drainage",
      "needle aspiration",
      "Klebsiella pneumoniae",
      "amoebic serology",
      "rupture into pleura",
      "pericardial rupture",
      "hepatomegaly",
    ],
    sections: [
      {
        heading: "Epidemiology and risk factors",
        points: [
          "**Amoebiasis** infects about 10 per cent of the world population, and invasive disease is common in India, where **amoebic abscess makes up most liver abscesses**. [Harrison 22e]",
          "Amoebic liver abscess (ALA) typically affects **men aged 20-50**, with a male-to-female ratio of about **7-10:1**. [Harrison 22e]",
          "**Alcohol**, especially locally brewed liquor and toddy, is strongly associated with ALA in India - it impairs Kupffer cell function and liver defences. [Sabiston 22e]",
          "Other ALA risk factors: **poor sanitation, unsafe water, malnutrition, steroid therapy, pregnancy and HIV**. [Harrison 22e]",
          "Pyogenic liver abscess (PLA) affects **older patients** with **diabetes, biliary stones or malignancy, recent abdominal sepsis or liver transplant**. [Sabiston 22e]",
          "**Diabetes** strongly predisposes to **Klebsiella pneumoniae** abscess, including the hypervirulent K1/K2 strains that spread to eyes and brain. [Harrison 22e]",
          "Only **a minority of ALA patients** give a history of preceding dysentery, and stool microscopy is usually negative. [Harrison 22e]",
          "Mortality of uncomplicated ALA is **under 1-3 per cent** with treatment; PLA mortality remains **5-10 per cent** and higher with delay. [Sabiston 22e]",
        ],
      },
      {
        heading: "Pathogenesis: amoebic vs pyogenic",
        points: [
          "**E. histolytica cysts** are swallowed with faecally contaminated water or food, excyst in the intestine and become trophozoites in the colon. [Harrison 22e]",
          "Trophozoites invade colonic mucosa using **Gal/GalNAc lectin, amoebapores and cysteine proteases**, producing flask-shaped ulcers. [Harrison 22e]",
          "They then reach the liver via the **portal vein**, mostly the **right lobe** (streaming effect of superior mesenteric blood), and cause liquefactive necrosis. [Bailey and Love 28e]",
          "ALA is usually **single and in the posterosuperior right lobe**; the pus is sterile, odourless, chocolate-brown **anchovy sauce** of necrotic liver, with trophozoites only in the wall. [Bailey and Love 28e]",
          "PLA arises by **biliary route (commonest - ascending cholangitis from stones, stricture, malignancy or stents)**, portal route (appendicitis, diverticulitis, pylephlebitis), hepatic artery (bacteraemia), direct spread or trauma. [Sabiston 22e]",
          "About a fifth of PLA are **cryptogenic**; colorectal cancer should be excluded in Klebsiella or Streptococcus milleri abscess. [Sabiston 22e]",
          "PLA organisms: **E. coli, Klebsiella pneumoniae, Streptococcus anginosus (milleri) group, enterococci, anaerobes such as Bacteroides**, and S. aureus when haematogenous. [Harrison 22e]",
          "PLA is often **multiple** when biliary in origin and single when portal or cryptogenic. [Sabiston 22e]",
          "**Secondary bacterial infection** of an ALA, often after aspiration, behaves like a pyogenic abscess. [Bailey and Love 28e]",
        ],
      },
      {
        heading: "Clinical features",
        points: [
          "**Fever with right upper quadrant pain** - dull, constant, radiating to the right shoulder or worse on deep breathing - is the classic pair. [Harrison 22e]",
          "**Tender hepatomegaly** is the main sign, and **intercostal tenderness** - pain on pressing the right lower intercostal spaces - is characteristic of ALA. [Bailey and Love 28e]",
          "The right lower intercostal spaces may **bulge** or show oedema over a large superficial abscess. [Bailey and Love 28e]",
          "**Right basal signs** - dullness, reduced breath sounds, crackles - reflect a raised hemidiaphragm, reactive effusion or impending rupture. [Harrison 22e]",
          "**Jaundice is uncommon in ALA** (under 10 per cent) but more common in PLA of biliary origin. [Harrison 22e]",
          "**Left-lobe abscess** presents with epigastric pain and mass and carries a risk of rupture into the pericardium. [Bailey and Love 28e]",
          "PLA presents more often with **rigors, sepsis, hypotension** and features of the source (cholangitis, appendicitis). [Sabiston 22e]",
          "Elderly and diabetic patients may present only with **fever of unknown origin** and weight loss. [Harrison 22e]",
          "Differentials: **acute cholecystitis, right basal pneumonia, viral hepatitis, hepatoma with necrosis, infected hydatid cyst, subphrenic abscess**. [Bailey and Love 28e]",
        ],
      },
      {
        heading: "Investigations",
        points: [
          "**CBC:** neutrophil leucocytosis without eosinophilia (eosinophilia suggests hydatid or fasciola); mild anaemia. [Harrison 22e]",
          "**LFT:** raised **alkaline phosphatase** is the commonest abnormality, with mildly raised transaminases, low albumin and prolonged INR in severe cases. [Harrison 22e]",
          "**Chest X-ray:** **raised right hemidiaphragm**, blunted costophrenic angle or effusion. [Bailey and Love 28e]",
          "**Ultrasound** is the first imaging test: a round or oval **hypoechoic lesion without a significant wall**, abutting the liver capsule, with low-level internal echoes. [Sabiston 22e]",
          "**Contrast CT** is used for small, multiple, left-lobe or complicated abscesses, suspected rupture and to find the source of PLA. [Sabiston 22e]",
          "**Amoebic serology (IgG ELISA)** is positive in over 90 per cent of ALA, but **stays positive for years** in endemic areas - a negative test helps more than a positive. [Harrison 22e]",
          "**E. histolytica antigen** (Gal/GalNAc lectin) in serum or pus and **PCR of aspirate** are more specific for current infection. [Harrison 22e]",
          "Stool microscopy for cysts or trophozoites is positive in **only a minority** of ALA and cannot distinguish E. histolytica from E. dispar by morphology. [Harrison 22e]",
          "For PLA, take **blood cultures before antibiotics** (positive in about half) and culture any aspirate, including anaerobes. [Sabiston 22e]",
          "Check **blood sugar** in every liver abscess, and do **hydatid serology** before aspirating a cystic lesion with septa or daughter cysts. [Bailey and Love 28e]",
        ],
      },
      {
        heading: "Treatment of amoebic liver abscess",
        points: [
          "**Metronidazole 750 mg PO TDS for 7-10 days** is the drug of choice; give **500 mg IV 8-hourly** if the patient is vomiting or toxic. [Harrison 22e]",
          "Children: **metronidazole 35-50 mg/kg/day in 3 divided doses for 7-10 days**. [Nelson 22e]",
          "Alternative: **tinidazole 2 g PO once daily for 3-5 days** (children 50-60 mg/kg/day), which is better tolerated. [Harrison 22e]",
          "Warn about **metallic taste, nausea and a disulfiram-like reaction with alcohol** - no alcohol during and 48-72 hours after the course. [Harrison 22e]",
          "After tissue treatment, always give a **luminal agent** to clear intestinal cysts and prevent relapse. [Harrison 22e]",
          "Luminal agents: **diloxanide furoate 500 mg PO TDS for 10 days** or **paromomycin 25-35 mg/kg/day in 3 divided doses for 7 days**. [Harrison 22e]",
          "Clinical response - falling fever and pain - is expected within **72-96 hours**. [Sabiston 22e]",
          "The cavity takes **3-12 months to resolve** on ultrasound, so repeat scanning does not guide treatment duration if the patient is well. [Harrison 22e]",
          "Advise **abstinence from alcohol** and screen for alcohol use disorder with AUDIT during follow-up. [Harrison 22e]",
        ],
      },
      {
        heading: "Aspiration, drainage and pyogenic abscess treatment",
        points: [
          "Indications to aspirate or drain ALA: **no response after 3-5 days of metronidazole**, **large abscess (over 5-10 cm)** or thin rim of liver, **left-lobe abscess** and **impending rupture**. [Sabiston 22e]",
          "Also drain when the diagnosis is uncertain or **secondary bacterial infection** is suspected. [Sabiston 22e]",
          "**USG-guided needle aspiration** suits abscesses under 5 cm; **percutaneous catheter drainage (PCD)** is preferred for larger or thick-pus abscesses. [Sabiston 22e]",
          "PLA needs **drainage plus antibiotics**; small (under 3 cm) or multiple microabscesses may respond to antibiotics alone. [Sabiston 22e]",
          "Empirical PLA regimen: **ceftriaxone 2 g IV daily plus metronidazole 500 mg IV 8-hourly**, which also covers amoebic abscess until serology returns. [ICMR 2019]",
          "Alternatives: **piperacillin-tazobactam 4.5 g IV 6-8 hourly**, or a carbapenem where ESBL organisms are likely. [ICMR 2019]",
          "Total antibiotic duration for PLA is **4-6 weeks** - 2-3 weeks IV then oral (e.g. amoxicillin-clavulanate or ciprofloxacin plus metronidazole) guided by culture and imaging. [Harrison 22e]",
          "Treat the source: **ERCP with stenting or stone clearance** for biliary obstruction, appendicectomy for appendicitis. [Sabiston 22e]",
          "After a Klebsiella or Streptococcus milleri abscess, arrange **colonoscopy** once recovered, and examine the eyes for **endophthalmitis**. [Sabiston 22e]",
        ],
      },
      {
        heading: "Complications and surgical referral",
        points: [
          "**Pleuropulmonary** complications are the commonest: reactive effusion, **rupture into the pleura (empyema)** and **hepatobronchial fistula** with anchovy-sauce sputum. [Bailey and Love 28e]",
          "**Rupture into the peritoneum** causes acute peritonitis and shock, needing resuscitation and surgery or drainage. [Bailey and Love 28e]",
          "**Rupture into the pericardium**, from a left-lobe abscess, causes **cardiac tamponade** and has the highest mortality. [Harrison 22e]",
          "Other complications: **secondary infection, IVC or hepatic vein thrombosis (Budd-Chiari), biliary fistula, brain abscess and septicaemia**. [Harrison 22e]",
          "Pyogenic abscess can cause **septic shock, metastatic infection (endophthalmitis, meningitis) and multiorgan failure**. [Harrison 22e]",
          "Refer for surgery when there is **frank rupture with peritonitis, failed percutaneous drainage, multiloculated thick-walled abscess or an intra-abdominal surgical source**. [Sabiston 22e]",
          "**Laparoscopic or open drainage** is reserved for these situations - most abscesses are now managed percutaneously. [Bailey and Love 28e]",
          "Refer urgently for **jaundice with cholangitis, sepsis, left-lobe abscess, pleural or pericardial signs, or pregnancy**. [Sabiston 22e]",
        ],
      },
      {
        heading: "Prevention and the family physician",
        points: [
          "**Safe drinking water:** boiling kills amoebic cysts, which **resist usual chlorine doses**; filtration also removes them. [Park 28e]",
          "**Sanitary latrines and hand-washing with soap** break faeco-oral transmission - the aim of Swachh Bharat and Jal Jeevan Mission. [Park 28e]",
          "**Food hygiene:** wash raw vegetables in safe water, cover food from flies, and screen and treat **food handlers** who pass cysts. [Park 28e]",
          "Treat **asymptomatic E. histolytica cyst passers** with a luminal agent, as they spread infection and can develop invasive disease. [Harrison 22e]",
          "**Alcohol reduction** and **diabetes control** reduce the risk of amoebic and Klebsiella abscess respectively. [Harrison 22e]",
          "The family physician should **suspect liver abscess in fever with RUQ pain and tender hepatomegaly**, order an early ultrasound and start metronidazole. [Harrison 22e]",
          "Follow up at **72 hours** for response, complete the luminal course, and teach warning signs - breathlessness, chest pain, abdominal distension or jaundice. [Sabiston 22e]",
          "Notify clusters of amoebic dysentery and liver abscess through **IDSP/IHIP**, as they point to a contaminated water source. [NCDC IHIP 2021]",
        ],
      },
    ],
    tables: [
      {
        heading: "Amoebic vs pyogenic liver abscess types",
        columns: ["Feature", "Amoebic", "Pyogenic"],
        rows: [
          ["Age and sex", "Young men 20-50", "Older, either sex"],
          ["Risk factors", "Alcohol, poor sanitation", "Diabetes, biliary disease, malignancy"],
          ["Number and site", "Usually single, right lobe", "Often multiple, either lobe"],
          ["Onset", "Subacute, 1-2 weeks", "Acute, with rigors and sepsis"],
          ["Jaundice", "Uncommon", "More common (biliary source)"],
          ["Pus", "Sterile anchovy sauce", "Foul, culture positive"],
          ["Serology", "Amoebic IgG positive in over 90 per cent", "Negative; blood culture positive in half"],
          ["Treatment", "Metronidazole then luminal agent; drain selected", "Drainage plus 4-6 weeks of antibiotics"],
        ],
      },
      {
        heading: "Drug doses at a glance",
        columns: ["Drug", "Dose", "Duration", "Use"],
        rows: [
          ["Metronidazole", "750 mg PO TDS (500 mg IV 8-hourly)", "7-10 days", "Amoebic abscess, anaerobic cover"],
          ["Tinidazole", "2 g PO once daily", "3-5 days", "Amoebic abscess alternative"],
          ["Diloxanide furoate", "500 mg PO TDS", "10 days", "Luminal clearance"],
          ["Paromomycin", "25-35 mg/kg/day in 3 doses", "7 days", "Luminal clearance"],
          ["Ceftriaxone plus metronidazole", "2 g IV daily plus 500 mg IV 8-hourly", "2-3 weeks IV, total 4-6 weeks", "Pyogenic abscess"],
        ],
      },
    ],
    redFlags: [
      "Sudden severe abdominal pain with guarding and shock in a known abscess - peritoneal rupture.",
      "Breathlessness, pleuritic pain or anchovy-sauce sputum - pleural or bronchial rupture.",
      "Left-lobe abscess with chest pain, raised JVP or muffled heart sounds - pericardial rupture and tamponade.",
      "Fever with jaundice and rigors - cholangitis with pyogenic abscess; needs ERCP.",
      "No improvement after 72-96 hours of metronidazole - aspirate or drain.",
      "Abscess over 5-10 cm or thin liver rim - high rupture risk.",
      "Visual loss in a diabetic with Klebsiella abscess - endophthalmitis.",
    ],
    pearls: [
      "Fever, RUQ pain, tender hepatomegaly and intercostal tenderness in a young alcohol user is amoebic abscess until proved otherwise.",
      "Anchovy-sauce pus is sterile necrotic liver; trophozoites live in the wall.",
      "Amoebic serology is positive in over 90 per cent but stays positive for years in endemic areas.",
      "Metronidazole then a luminal agent - never stop at metronidazole alone.",
      "Drain if no response in 72-96 hours, large, left lobe or impending rupture.",
      "Cavity resolution on ultrasound lags clinical cure by months.",
      "Pleuropulmonary spread is the commonest complication; pericardial rupture is the deadliest.",
      "Pyogenic abscess is biliary in origin most often; Klebsiella in diabetics.",
      "Klebsiella or Strep milleri abscess - colonoscopy after recovery.",
      "Boil water - amoebic cysts resist routine chlorination.",
    ],
    mcqs: [
      {
        id: "gastro-hepatology-liver-abscess-q1",
        stem: "A 35-year-old man who drinks locally brewed liquor presents with 10 days of fever and right upper quadrant pain. He has tender hepatomegaly and tenderness over the right lower intercostal spaces. USG shows a single 6 cm hypoechoic lesion in the right lobe. What is the most appropriate initial treatment?",
        options: [
          "Metronidazole 750 mg TDS for 7-10 days followed by a luminal agent",
          "Immediate open surgical drainage",
          "Albendazole 400 mg BD for 4 weeks",
          "Diloxanide furoate alone",
        ],
        answer: 0,
        explanation:
          "This is a classic amoebic liver abscess, treated with metronidazole followed by a luminal agent such as diloxanide furoate. Open surgery is reserved for rupture or failed drainage, albendazole is for hydatid disease, and a luminal agent alone does not reach tissue trophozoites.",
        difficulty: "easy",
      },
      {
        id: "gastro-hepatology-liver-abscess-q2",
        stem: "An amoebic abscess in which location carries the greatest risk of rupture into the pericardium?",
        options: [
          "Posterior right lobe",
          "Left lobe",
          "Caudate lobe",
          "Inferior segment of the right lobe",
        ],
        answer: 1,
        explanation:
          "Left-lobe abscesses lie close to the pericardium and can rupture causing tamponade, so they are aspirated early. Posterior right-lobe abscesses rupture towards the pleura, inferior right-lobe ones towards the peritoneum, and caudate lobe abscesses are rare and more likely to compress the IVC.",
        difficulty: "moderate",
      },
      {
        id: "gastro-hepatology-liver-abscess-q3",
        stem: "A 62-year-old diabetic woman has fever with rigors, and CT shows a 5 cm multiloculated liver abscess. Blood cultures grow Klebsiella pneumoniae. After drainage and antibiotics, which additional evaluation is most appropriate?",
        options: [
          "Amoebic serology every month",
          "Hydatid serology",
          "Liver biopsy",
          "Eye examination now and colonoscopy after recovery",
        ],
        answer: 3,
        explanation:
          "Klebsiella liver abscess in diabetics can seed the eye (endophthalmitis), and Klebsiella or Strep milleri abscess is associated with colorectal cancer, so an eye check and later colonoscopy are advised. Repeated amoebic serology, hydatid serology and liver biopsy add nothing once a bacterial cause is proven.",
        difficulty: "hard",
      },
      {
        id: "gastro-hepatology-liver-abscess-q4",
        stem: "A patient with a 7 cm right-lobe amoebic liver abscess remains febrile with persistent pain after 4 days of adequate metronidazole. What is the next best step?",
        options: [
          "Add chloroquine and continue for 3 more weeks",
          "Switch to oral tinidazole",
          "USG-guided percutaneous aspiration or catheter drainage",
          "Laparotomy and open drainage",
        ],
        answer: 2,
        explanation:
          "Failure to respond within 72-96 hours and a large abscess are indications for image-guided percutaneous aspiration or catheter drainage. Switching nitroimidazoles or adding chloroquine delays drainage, and laparotomy is reserved for rupture or failed percutaneous drainage.",
        difficulty: "moderate",
      },
      {
        id: "gastro-hepatology-liver-abscess-q5",
        stem: "Which is the commonest source of pyogenic liver abscess in adults?",
        options: [
          "Biliary tract disease",
          "Penetrating liver trauma",
          "Infective endocarditis",
          "Pneumonia",
        ],
        answer: 0,
        explanation:
          "Ascending cholangitis from stones, strictures, malignancy or stents is the commonest route for pyogenic liver abscess. Trauma, endocarditis-related bacteraemia and pneumonia are less common routes via direct spread or the hepatic artery.",
        difficulty: "easy",
      },
    ],
    theory: [
      {
        id: "gastro-hepatology-liver-abscess-t1",
        paper: "II",
        kind: "long",
        marks: 10,
        minutes: 18,
        frequency: "common",
        question:
          "A 40-year-old alcohol user presents with fever, right upper quadrant pain and tender hepatomegaly. Discuss the differential diagnosis, investigations and management of amoebic liver abscess. [2+3+5]",
        openingLines: [
          "Amoebic liver abscess is a collection of liquefied necrotic liver caused by Entamoeba histolytica trophozoites reaching the liver via the portal vein.",
          "It is the commonest liver abscess in India, typically single, in the right lobe of a young alcohol-using man.",
        ],
        answer: [
          {
            heading: "Differential diagnosis",
            points: [
              "Pyogenic liver abscess, infected hydatid cyst, necrotic hepatoma, acute cholecystitis, right basal pneumonia, viral hepatitis.",
            ],
          },
          {
            heading: "Investigations",
            points: [
              "CBC, LFT (raised ALP), CRP, blood sugar; chest X-ray - raised right dome.",
              "USG - hypoechoic lesion abutting capsule; CT if complicated or left lobe.",
              "Amoebic IgG ELISA, antigen or PCR; blood cultures if pyogenic suspected.",
            ],
          },
          {
            heading: "Medical treatment",
            points: [
              "Metronidazole 750 mg PO TDS 7-10 days or tinidazole 2 g daily 3-5 days.",
              "Luminal agent: diloxanide furoate 500 mg TDS 10 days or paromomycin 25-35 mg/kg/day 7 days.",
            ],
          },
          {
            heading: "Drainage and surgery",
            points: [
              "Aspiration or PCD: no response in 72-96 hours, over 5-10 cm, left lobe, thin rim, impending rupture.",
              "Surgery for rupture with peritonitis or failed percutaneous drainage.",
            ],
          },
          {
            heading: "Complications and prevention",
            points: [
              "Rupture into pleura, lung, peritoneum, pericardium; secondary infection.",
              "Safe water (boiling), sanitation, food hygiene, alcohol cessation.",
            ],
          },
        ],
        mustDraw: ["Diagram of routes of rupture of a liver abscess", "Table comparing amoebic and pyogenic abscess"],
        markSplit: [
          { part: "Differential diagnosis", marks: 2 },
          { part: "Investigations", marks: 3 },
          { part: "Management", marks: 5 },
        ],
        keywords: ["amoebic liver abscess", "metronidazole", "aspiration", "intercostal tenderness"],
      },
      {
        id: "gastro-hepatology-liver-abscess-t2",
        paper: "III",
        kind: "short-note",
        marks: 10,
        minutes: 18,
        frequency: "less-common",
        question:
          "Pyogenic liver abscess: aetiology, clinical features and management. [3+3+4]",
        openingLines: [
          "Pyogenic liver abscess is a bacterial collection in the liver, most often from biliary tract disease, in older and diabetic patients.",
          "It carries 5-10 per cent mortality even with drainage and antibiotics.",
        ],
        answer: [
          {
            heading: "Aetiology",
            points: [
              "Routes: biliary (commonest), portal, arterial, direct extension, trauma, cryptogenic.",
              "Organisms: E. coli, Klebsiella, Strep milleri, anaerobes, S. aureus.",
            ],
          },
          {
            heading: "Clinical features",
            points: [
              "Fever with rigors, RUQ pain, tender hepatomegaly, jaundice with biliary source, sepsis.",
            ],
          },
          {
            heading: "Management",
            points: [
              "Blood cultures, USG or CT, drainage of abscesses over 3-5 cm.",
              "Ceftriaxone plus metronidazole or piperacillin-tazobactam; 4-6 weeks total.",
              "Treat source: ERCP, appendicectomy; colonoscopy after Klebsiella or Strep milleri abscess.",
              "Surgery for failed drainage, rupture, multiloculated or surgical source.",
            ],
          },
        ],
        mustDraw: ["Routes of infection to the liver diagram"],
        markSplit: [
          { part: "Aetiology", marks: 3 },
          { part: "Clinical features", marks: 3 },
          { part: "Management", marks: 4 },
        ],
        keywords: ["pyogenic liver abscess", "Klebsiella", "percutaneous drainage"],
      },
    ],
    references: [
      "Harrison's Principles of Internal Medicine, 22nd ed, 2025",
      "Sabiston Textbook of Surgery, 22nd ed, 2025",
      "Bailey and Love's Short Practice of Surgery, 28th ed, 2023",
      "Nelson Textbook of Pediatrics, 22nd ed, 2024",
      "ICMR Treatment Guidelines for Antimicrobial Use in Common Syndromes, 2019",
      "Park's Textbook of Preventive and Social Medicine, 28th ed, 2025",
    ],
  },
];

export default topics;
