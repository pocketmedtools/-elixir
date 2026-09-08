/**
 * Diagrams for infectious-fever, keyed by topic id.
 */
import type { DiagramSet } from "../lib/types";

const diagrams: DiagramSet = {
  "infectious-fever-acute-undifferentiated-fever": [
    {
      kind: "flow",
      heading: "Working up an acute undifferentiated fever",
      caption:
        "Fever under 14 days with no localising focus. The label is a working one and must be replaced by a specific diagnosis within 5-7 days.",
      steps: [
        {
          label: "Record the day of illness",
          detail:
            "The single most important number in the history - it decides which test will be positive and when the dengue critical phase is due",
          tone: "decision",
        },
        {
          label: "Vital signs and red flags first",
          detail:
            "Narrow pulse pressure of 20 mmHg or less on day 4-6 is dengue shock until proved otherwise; any warning feature makes this an emergency, not a leisurely work-up",
          tone: "warn",
        },
        {
          label: "Undress the patient and hunt the eschar",
          detail:
            "Axillae, groin, perineum, under the breasts, behind the ears, natal cleft; also look for conjunctival suffusion, calf tenderness and relative bradycardia",
        },
        {
          label: "Day 1-4 panel",
          detail:
            "CBC with platelets and haematocrit, malaria RDT plus thick and thin smear, dengue NS1, urine routine, two sets of blood culture before any antibiotic",
        },
        {
          label: "Day 5 onwards add serology",
          detail:
            "Dengue IgM MAC-ELISA, scrub typhus IgM ELISA, leptospira IgM ELISA; an IgM sent before day 5 wastes the sample and gives a falsely reassuring negative",
        },
        {
          label: "Treat, safety-net, review in 48 hours",
          detail:
            "Paracetamol 500-1000 mg 6-hourly to a maximum of 4 g a day; no aspirin, ibuprofen or NSAID until dengue is excluded; doxycycline 100 mg twice daily for 7 days only if the patient is unwell",
          tone: "good",
        },
        {
          label: "Fever beyond day 7 - start again",
          detail:
            "Re-evaluate from the beginning for tuberculosis, HIV, abscess, endocarditis, malignancy and connective tissue disease; do not simply escalate the antibiotic",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Which test on which day of illness",
      caption: "Sending the right test on the wrong day is the commonest reason a tropical fever stays undiagnosed.",
      columns: ["Day of illness", "Test to send", "What a positive means"],
      rows: [
        ["Day 1-5", "Dengue NS1 antigen", "Confirms dengue; sensitivity falls sharply after day 5"],
        [
          "Any day",
          "Malaria RDT plus thick and thin smear",
          "Species identification decides NVBDCP treatment; repeat smear 12-hourly if negative and suspicion high",
        ],
        [
          "Any day",
          "Blood culture, two sets before antibiotic",
          "Enteric fever, bacteraemia, endocarditis; highest yield in week 1 of typhoid",
        ],
        ["Day 5 onwards", "Dengue IgM MAC-ELISA", "Recent dengue; negative before day 5 is meaningless"],
        ["Day 5 onwards", "Scrub typhus IgM ELISA", "Scrub typhus; a fourfold rise in paired sera is confirmatory"],
        [
          "Day 5 onwards",
          "Leptospira IgM ELISA, MAT if available",
          "Leptospirosis; MAT on paired sera is the reference standard",
        ],
        ["Day 7 onwards", "Repeat CBC, LFT, RFT, chest radiograph", "Detects the complication rather than the organism"],
      ],
    },
    {
      kind: "compare",
      heading: "Haemogram patterns in Indian tropical fever",
      caption: "The haemogram is the cheapest discriminator available in a district clinic.",
      columns: ["Pattern", "Think of", "Next step"],
      rows: [
        [
          "Leucopenia with thrombocytopenia",
          "Dengue, malaria, enteric fever",
          "NS1 or IgM, malaria smear, blood culture",
        ],
        [
          "Neutrophil leucocytosis with thrombocytopenia",
          "Leptospirosis, scrub typhus, sepsis",
          "Doxycycline empirically, IgM ELISA, cultures",
        ],
        [
          "Normal counts with high transaminases",
          "Scrub typhus, dengue, viral hepatitis",
          "Scrub IgM, hepatitis serology",
        ],
        [
          "Anaemia with splenomegaly and pancytopenia",
          "Malaria, kala-azar, haematological disease",
          "Smear, rK39, bone marrow",
        ],
        ["Eosinophilia", "Parasitic infection, drug fever", "Stool examination, review the drug chart"],
      ],
    },
    {
      kind: "branch",
      heading: "Syndromic pattern recognition",
      caption: "Fever plus one dominant feature narrows the field faster than any single test.",
      root: "Acute fever with a dominant syndrome",
      arms: [
        {
          label: "Fever with thrombocytopenia",
          steps: [
            "Dengue, malaria, scrub typhus",
            "Leptospirosis, enteric fever, sepsis",
            "Chronic setting: kala-azar, haematological disease",
            "The commonest tropical syndrome and the one every examiner asks",
          ],
        },
        {
          label: "Fever with rash",
          steps: [
            "Dengue - macular blanching, then islands of white in a sea of red",
            "Chikungunya, measles, rubella",
            "Rickettsial spotted fever - rash on palms and soles",
            "Meningococcaemia - purpuric, an emergency",
          ],
        },
        {
          label: "Fever with jaundice",
          steps: [
            "Malaria, leptospirosis, hepatitis A and E",
            "Enteric fever, dengue with hepatitis, cholangitis",
            "Tender liver with a swinging fever is an amoebic liver abscess until imaged",
          ],
        },
        {
          label: "Fever with altered sensorium",
          tone: "warn",
          steps: [
            "Cerebral malaria, meningitis, encephalitis including JE",
            "Scrub typhus meningoencephalitis, enteric encephalopathy",
            "Metabolic: hypoglycaemia, hyponatraemia",
            "Do a capillary glucose before anything else",
          ],
        },
        {
          label: "Fever with breathlessness or hypoxia",
          tone: "warn",
          steps: [
            "Pneumonia and influenza",
            "Severe dengue with pleural effusion",
            "Scrub typhus with ARDS",
            "Leptospiral pulmonary haemorrhage; pulmonary embolism mimicking sepsis",
          ],
        },
        {
          label: "Fever with arthralgia",
          steps: [
            "Chikungunya, dengue",
            "Acute rheumatic fever, reactive arthritis",
            "Brucellosis and early connective tissue disease",
          ],
        },
      ],
    },
  ],

  "infectious-fever-dengue": [
    {
      kind: "flow",
      heading: "The three phases of dengue",
      caption:
        "Incubation 4 to 10 days. Warn the family that the patient may worsen just as the fever settles - the counselling point that saves most lives.",
      steps: [
        {
          label: "Febrile phase, days 1-3",
          detail:
            "Abrupt high fever, severe headache, retro-orbital pain, break-bone myalgia, facial flushing, transient macular rash, positive tourniquet test; risks are dehydration and febrile seizures",
        },
        {
          label: "Critical phase, days 3-7",
          detail:
            "Begins at defervescence and lasts 24-48 hours: plasma leakage, rising haematocrit with rapidly falling platelets, effusions, ascites, shock and bleeding. A haematocrit rise of 20% or more means significant leakage",
          tone: "warn",
        },
        {
          label: "Recovery phase, days 7-10",
          detail:
            "Reabsorption with falling haematocrit, rising platelets, bradycardia and a confluent itchy rash. Stop intravenous fluid here or cause pulmonary oedema",
          tone: "good",
        },
      ],
    },
    {
      kind: "compare",
      heading: "The seven WHO warning signs",
      caption: "Any one of these on days 3-7 means admission for intravenous fluid and 4-6 hourly monitoring.",
      columns: ["Warning sign", "What it reflects"],
      rows: [
        ["Abdominal pain or tenderness", "Hepatic congestion, ascites, serositis"],
        ["Persistent vomiting", "Inability to maintain oral intake plus visceral leak"],
        ["Clinical fluid accumulation - ascites, pleural effusion", "Established plasma leakage"],
        ["Mucosal bleeding", "Thrombocytopenia with vasculopathy"],
        ["Lethargy or restlessness", "Early hypoperfusion"],
        ["Liver enlargement more than 2 cm", "Hepatic involvement, common in children"],
        ["Rising haematocrit with rapid fall in platelets", "Haemoconcentration from plasma leakage"],
      ],
    },
    {
      kind: "compare",
      heading: "WHO 2009 case classification and disposal",
      caption: "The group decides the place of care and the fluid, not the platelet count.",
      columns: ["Group", "Criteria", "Where managed", "Fluid"],
      rows: [
        [
          "A",
          "No warning signs, tolerating oral fluids, urine at least 6-hourly",
          "Home with daily review",
          "Oral fluids and ORS only",
        ],
        [
          "B",
          "Any warning sign, or a co-existing condition or adverse social circumstance",
          "Admit for observation",
          "Isotonic crystalloid 5-7 then 3-5 then 2-3 mL/kg/h, titrated",
        ],
        [
          "C",
          "Severe plasma leakage with shock or respiratory distress, severe bleeding, or severe organ impairment",
          "Emergency care, high dependency or ICU",
          "5-10 mL/kg over 1 h for compensated shock; 20 mL/kg bolus for hypotensive shock",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Fluid management in dengue, group by group",
      caption:
        "Case fatality is below 1% when fluid is titrated and 10-20% when it is not. Almost all the difference is fluid management.",
      steps: [
        {
          label: "Group A - oral fluids only",
          detail:
            "ORS, coconut water, rice kanji, buttermilk, soup, to keep urine passing at least every 6 hours; paracetamol to 4 g a day. No aspirin, no NSAID, no steroid, no intramuscular injection",
          tone: "good",
        },
        {
          label: "Group B - warning signs, admit",
          detail:
            "Isotonic crystalloid 5-7 mL/kg/h for 1-2 hours, then 3-5 mL/kg/h for 2-4 hours, then 2-3 mL/kg/h, reassessing clinically and by haematocrit at every step",
        },
        {
          label: "Group C - compensated shock",
          detail:
            "Narrow pulse pressure, tachycardia, cold peripheries but measurable BP: isotonic crystalloid 5-10 mL/kg over 1 hour, then step down through 5-7, 3-5 and 2-3 mL/kg/h",
          tone: "warn",
        },
        {
          label: "Group C - hypotensive shock",
          detail:
            "Crystalloid or colloid 20 mL/kg as a bolus over 15-30 minutes, then reduce to 10 mL/kg/h on improvement; oxygen and reassessment every 15-30 minutes",
          tone: "warn",
        },
        {
          label: "Still shocked - read the haematocrit",
          detail:
            "Rising or still high means leakage continues, so give more fluid or switch to colloid. Falling means concealed haemorrhage, so transfuse fresh whole blood or packed cells",
          tone: "decision",
        },
        {
          label: "Stop by 24-48 hours",
          detail:
            "Total intravenous fluid is maintenance plus 5% deficit over about 48 hours; continuing into the reabsorption phase causes pulmonary oedema",
          tone: "good",
        },
      ],
    },
  ],

  "infectious-fever-malaria": [
    {
      kind: "branch",
      heading: "NVBDCP drug policy: treatment by species",
      caption: "The species and the state decide the regimen. Primaquine differs in dose and duration between them.",
      root: "Confirmed malaria on smear or RDT",
      arms: [
        {
          label: "P. vivax",
          steps: [
            "Chloroquine 25 mg base/kg over 3 days",
            "Given as 10, 10 then 5 mg/kg on days 1, 2 and 3",
            "Adult 600, 600 then 300 mg base",
            "Primaquine 0.25 mg/kg daily for 14 days for radical cure of hypnozoites",
          ],
        },
        {
          label: "P. falciparum, India except the North-East",
          steps: [
            "Artesunate 4 mg/kg once daily for 3 days",
            "Sulfadoxine-pyrimethamine 25/1.25 mg/kg single dose on day 1",
            "Supplied as the co-blistered AS+SP pack",
            "Primaquine 0.75 mg/kg single dose on day 2 as a gametocytocide",
          ],
        },
        {
          label: "P. falciparum, North-Eastern states",
          steps: [
            "Artemether-lumefantrine twice daily for 3 days",
            "By age-band blister pack",
            "Used because sulfadoxine-pyrimethamine resistance is documented there",
            "Primaquine 0.75 mg/kg single dose on day 2",
          ],
        },
        {
          label: "Mixed vivax and falciparum",
          steps: [
            "Full 3-day ACT as for falciparum",
            "Primaquine 0.25 mg/kg daily for 14 days to eradicate vivax hypnozoites",
          ],
        },
        {
          label: "Falciparum in the first trimester",
          tone: "warn",
          steps: [
            "Quinine 10 mg salt/kg three times daily for 7 days",
            "ACT in the second and third trimesters",
            "Primaquine is contraindicated in pregnancy, in infants under 1 year and in G6PD deficiency",
          ],
        },
      ],
    },
    {
      kind: "branch",
      heading: "WHO criteria for severe malaria",
      caption: "Parasitaemia plus any one of these makes the malaria severe and the artesunate parenteral.",
      root: "Falciparum parasitaemia plus any one feature",
      arms: [
        {
          label: "Neurological",
          tone: "warn",
          steps: [
            "Impaired consciousness or coma",
            "More than 2 convulsions in 24 hours",
            "Prostration",
            "Cerebral malaria is unrousable coma over 30 minutes after a seizure with no other cause",
          ],
        },
        {
          label: "Metabolic",
          steps: [
            "Blood glucose below 40 mg/dL",
            "Acidosis: bicarbonate below 15 mmol/L or lactate above 5 mmol/L",
          ],
        },
        {
          label: "Haematological",
          steps: [
            "Haemoglobin below 7 g/dL in adults or below 5 g/dL in children",
            "Significant bleeding",
            "Haemoglobinuria",
          ],
        },
        {
          label: "Renal and hepatic",
          steps: [
            "Creatinine above 3 mg/dL or urea above 20 mmol/L",
            "Bilirubin above 3 mg/dL with parasitaemia above 100,000 per microlitre",
          ],
        },
        {
          label: "Cardiorespiratory",
          steps: [
            "Pulmonary oedema",
            "Oxygen saturation below 92% with respiratory rate above 30",
            "Shock with systolic BP below 80 mmHg",
          ],
        },
        {
          label: "Parasitological",
          steps: ["Parasitaemia above 10% of red cells"],
        },
      ],
    },
    {
      kind: "flow",
      heading: "Severe malaria: the emergency sequence",
      caption: "Artesunate cut mortality by 34.7% against quinine in SEAQUAMAT and by 22.5% in AQUAMAT.",
      steps: [
        {
          label: "Capillary glucose before anything else",
          detail:
            "Below 40 mg/dL is a severity criterion; give 25% dextrose immediately and recheck the glucose every 4 hours",
          tone: "warn",
        },
        {
          label: "IV artesunate 2.4 mg/kg",
          detail:
            "At 0, 12 and 24 hours, then once daily; children under 20 kg receive 3 mg/kg per dose. Intramuscular is acceptable if intravenous access fails",
          tone: "good",
        },
        {
          label: "At least 24 hours of parenteral therapy",
          detail:
            "Continue until the patient can swallow. If artesunate is unavailable: artemether 3.2 mg/kg IM on day 1 then 1.6 mg/kg daily, or quinine 20 mg salt/kg loading over 4 hours then 10 mg/kg 8-hourly",
        },
        {
          label: "Complete a full 3-day oral ACT",
          detail: "Never finish with artesunate monotherapy, which selects resistance",
          tone: "warn",
        },
        {
          label: "Supportive care decides survival",
          detail:
            "Benzodiazepine for seizures, transfuse below 7 g/dL in adults or 5 g/dL in children, careful fluids without boluses, early dialysis for acute kidney injury, airway and pressure-area care in coma",
        },
        {
          label: "Recheck haemoglobin at 1 and 2 weeks",
          detail:
            "Post-artesunate delayed haemolysis occurs 1-3 weeks after treatment in patients with high parasitaemia; transfuse if needed",
        },
      ],
    },
    {
      kind: "compare",
      heading: "P. vivax versus P. falciparum",
      caption: "The difference in the red cell invaded and in the hypnozoite decides both the smear and the regimen.",
      columns: ["Feature", "P. vivax", "P. falciparum"],
      rows: [
        [
          "Red cells invaded",
          "Reticulocytes only, so parasitaemia rarely above 2%",
          "Red cells of all ages, so parasitaemia can exceed 10%",
        ],
        [
          "Liver stage",
          "Hypnozoites, so relapse weeks to months later",
          "No hypnozoite; recurrence is recrudescence or reinfection",
        ],
        [
          "Smear",
          "All stages seen, Schuffner dots, enlarged pale red cell",
          "Usually ring forms only from sequestration, banana-shaped gametocytes",
        ],
        ["Fever", "Benign tertian with marked rigors", "More irregular fever; the great mimic"],
        [
          "Complications",
          "Severe vivax with ARDS, kidney injury and anaemia is recognised; splenic rupture more characteristic",
          "Cerebral malaria, kidney injury, ARDS, blackwater fever, hypoglycaemia, acidosis, placental sequestration",
        ],
        [
          "Blood-stage drug",
          "Chloroquine 25 mg base/kg over 3 days; still largely sensitive",
          "Artesunate plus sulfadoxine-pyrimethamine, or artemether-lumefantrine in the North-East; chloroquine resistance is widespread",
        ],
        [
          "Primaquine",
          "0.25 mg/kg daily for 14 days for radical cure",
          "0.75 mg/kg single dose on day 2 as a gametocytocide",
        ],
      ],
    },
  ],

  "infectious-fever-enteric-fever": [
    {
      kind: "flow",
      heading: "Enteric fever week by week",
      caption:
        "Incubation 7-14 days. Untreated case fatality is 10-20% and falls below 1% with an appropriate antibiotic.",
      steps: [
        {
          label: "Week 1 - step-ladder fever",
          detail:
            "Headache, malaise, anorexia, dry cough, constipation in adults or diarrhoea in children; relative bradycardia (Faget sign). Blood culture is positive in 60-80% now",
        },
        {
          label: "Week 2 - toxic and distended",
          detail:
            "Sustained high fever, coated tongue with clean red edges, abdominal distension and tenderness, soft splenomegaly. Rose spots in 5-30% but very hard to see on Indian skin",
        },
        {
          label: "Week 3 - the week of complications",
          detail:
            "Intestinal haemorrhage and perforation of the terminal ileum, typhoid encephalopathy with the coma-vigil or muttering delirium, myocarditis and shock",
          tone: "warn",
        },
        {
          label: "Week 4 - defervescence and convalescence",
          detail: "Relapse in 5-10%, usually 1-3 weeks after stopping antibiotics and generally milder; re-culture and re-treat",
          tone: "good",
        },
        {
          label: "Beyond 12 months - chronic carriage",
          detail:
            "1-4% excrete in stool or urine beyond a year, usually from a gallbladder with stones; exclude food handlers until three consecutive negative stool cultures 24 hours apart",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Diagnostic tests in enteric fever",
      caption: "Culture, not serology. A single Widal titre in an endemic country is not a diagnosis.",
      columns: ["Test", "Sensitivity and timing", "Comment"],
      rows: [
        [
          "Blood culture",
          "60-80% in week 1, falling to 30-40% by week 3",
          "Gold standard; 10-15 mL adult sample, two sets, before antibiotics",
        ],
        [
          "Bone marrow culture",
          "80-95%, remains positive after antibiotics",
          "Test of choice in the partially treated patient",
        ],
        ["Stool and urine culture", "Positive from week 2-3", "Used mainly to detect carriers and clear food handlers"],
        [
          "Widal test",
          "Paired sera, fourfold rise needed",
          "Single titre unreliable in an endemic country; never the sole basis for treatment",
        ],
        [
          "Typhidot or Tubex IgM",
          "About 70-80% sensitivity and specificity",
          "Rapid but not confirmatory; use only where culture is unavailable",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Antibiotic choice in enteric fever",
      caption:
        "Fluoroquinolones are no longer empirical: nalidixic acid resistance, or a ciprofloxacin MIC of 0.12 microgram/mL or more, predicts failure despite a sensitive report.",
      steps: [
        {
          label: "Uncomplicated adult outpatient",
          detail: "Azithromycin 500 mg to 1 g PO once daily for 7 days",
          tone: "good",
        },
        {
          label: "Uncomplicated child",
          detail: "Azithromycin 20 mg/kg PO once daily, maximum 1 g, for 7 days",
        },
        {
          label: "Oral alternative",
          detail: "Cefixime 20 mg/kg/day PO in two doses, adult 200 mg twice daily, for 14 days; defervescence is slower",
        },
        {
          label: "Hospitalised or complicated",
          detail: "Ceftriaxone 2 g IV once daily, or 75-100 mg/kg/day in children, for 10-14 days; add azithromycin if the response is slow",
        },
        {
          label: "Suspected or proven XDR typhoid",
          detail: "Meropenem 1 g IV 8-hourly with or without azithromycin for 10-14 days",
          tone: "warn",
        },
        {
          label: "Severe disease with shock or coma",
          detail:
            "Add dexamethasone 3 mg/kg IV loading then 1 mg/kg 6-hourly for 48 hours, eight doses - mortality fell from 55% to 10% in the Hoffman trial",
          tone: "warn",
        },
        {
          label: "Chronic carrier",
          detail:
            "Ciprofloxacin 750 mg PO twice daily for 28 days, or high-dose amoxicillin or azithromycin; cholecystectomy if gallstones and excretion persist",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Typhoid vaccines available in India",
      caption: "The conjugate vaccine solved the problem the polysaccharide vaccine could not - protection under 2 years.",
      columns: ["Vaccine", "Age and schedule", "Protection"],
      rows: [
        [
          "Vi polysaccharide",
          "2 years and above, single 0.5 mL IM, revaccinate every 3 years",
          "About 55-70% for 3 years; no immune memory, not for under-2s",
        ],
        [
          "Typhoid conjugate vaccine (Typbar-TCV)",
          "6 months and above, single 0.5 mL IM; IAP advises 9-12 months with a booster at 4-6 years",
          "Higher and longer-lasting efficacy with immunological memory; WHO prequalified 2018",
        ],
        [
          "Ty21a oral live",
          "Not routinely marketed in India; 3-4 capsules on alternate days",
          "Contraindicated in immunosuppression and with concurrent antibiotics",
        ],
      ],
    },
  ],

  "infectious-fever-scrub-typhus": [
    {
      kind: "flow",
      heading: "Scrub typhus: from suspicion to treatment",
      caption:
        "Untreated mortality is 6-35%; with early doxycycline it is under 2%. The time from first visit to first dose is the measure that decides outcome.",
      steps: [
        {
          label: "Suspect it on exposure and season",
          detail:
            "Post-monsoon and winter, August to January; scrub, grassland, plantation or paddy exposure; incubation 6-21 days, usually about 10",
        },
        {
          label: "Undress and search for the eschar",
          detail:
            "Painless 5-20 mm black necrotic crust with an erythematous halo in axilla, groin, genitalia, perineum, under the breast, neck or behind the ear, with tender regional nodes; found in 10-50% when looked for",
          tone: "decision",
        },
        {
          label: "Start doxycycline now, do not wait",
          detail:
            "Doxycycline 100 mg PO twice daily for 7 days; IgM ELISA on day 4 is likely falsely negative and waiting delays a drug that changes mortality",
          tone: "good",
        },
        {
          label: "Send IgM ELISA from day 5-7",
          detail:
            "Optical density cut-off about 0.5; positive in 85-90% by the second week; a fourfold rise in paired sera is confirmatory. Weil-Felix OX-K 1 in 80 supports but its sensitivity is only 30-50%",
        },
        {
          label: "Defervescence within 48 hours confirms",
          detail: "The therapeutic response is itself diagnostic and is the most useful confirmation in a district hospital",
          tone: "good",
        },
        {
          label: "Fever beyond 72 hours - doubt the diagnosis",
          detail: "Wrong diagnosis, co-infection or a complication; re-evaluate rather than continue",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "DHR-ICMR treatment regimens for scrub typhus",
      caption: "Doxycycline for almost everyone; azithromycin is the pregnancy drug.",
      columns: ["Patient group", "First choice", "Alternative", "Duration"],
      rows: [
        [
          "Adult, uncomplicated",
          "Doxycycline 100 mg PO twice daily",
          "Azithromycin 500 mg PO once daily for 5 days",
          "7 days",
        ],
        [
          "Child, uncomplicated",
          "Doxycycline 4.5 mg/kg/day in two divided doses",
          "Azithromycin 10 mg/kg/day for 5 days",
          "7 days",
        ],
        [
          "Pregnancy",
          "Azithromycin 500 mg PO once daily",
          "Doxycycline only if azithromycin is unavailable",
          "5 days",
        ],
        [
          "Severe or unable to swallow",
          "IV doxycycline 100 mg twice daily plus IV azithromycin 500 mg daily (INTREST)",
          "IV doxycycline or IV azithromycin alone; chloramphenicol",
          "7 days total, switch to oral when able",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Rickettsial diseases seen in India",
      caption: "The vector, the site of the rash and the Weil-Felix pattern separate them.",
      columns: ["Disease", "Organism", "Vector", "Clinical clue", "Weil-Felix"],
      rows: [
        [
          "Scrub typhus",
          "Orientia tsutsugamushi",
          "Larval trombiculid mite (chigger)",
          "Eschar in axilla or groin, lymphadenopathy, ARDS",
          "OX-K",
        ],
        [
          "Indian tick typhus",
          "Rickettsia conorii subsp. indica",
          "Ixodid tick from dog or cattle",
          "Rash on palms and soles, tache noire",
          "OX-2 and OX-19",
        ],
        [
          "Murine typhus",
          "Rickettsia typhi",
          "Rat flea (Xenopsylla cheopis)",
          "Milder fever, rash, urban rat contact",
          "OX-19",
        ],
        [
          "Epidemic typhus",
          "Rickettsia prowazekii",
          "Human body louse",
          "Overcrowding, severe illness, Brill-Zinsser recrudescence",
          "OX-19",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "Second-week complications of scrub typhus",
      caption:
        "Disseminated small-vessel vasculitis in 10-30% of untreated or late-treated patients, usually in the second week.",
      root: "Vasculitis of small vessels by organ",
      arms: [
        {
          label: "Lung",
          tone: "warn",
          steps: [
            "ARDS and pneumonitis - the leading cause of death",
            "Respiratory rate above 24, bilateral crepitations or saturation below 94% means admit for oxygen and intravenous therapy",
          ],
        },
        {
          label: "Brain",
          steps: ["Meningoencephalitis with a lymphocytic CSF", "Altered sensorium mandates admission"],
        },
        {
          label: "Kidney",
          steps: ["Acute kidney injury", "Oliguria or creatinine above 2 mg/dL may need dialysis"],
        },
        {
          label: "Heart and liver",
          steps: ["Myocarditis with vasculitic shock", "Hepatitis with raised transaminases"],
        },
        {
          label: "Blood and pregnancy",
          steps: [
            "DIC, haemophagocytosis, platelets below 50,000",
            "Pregnancy loss, preterm birth and stillbirth",
          ],
        },
      ],
    },
  ],

  "infectious-fever-urinary-tract-infection": [
    {
      kind: "compare",
      heading: "Uncomplicated versus complicated urinary tract infection",
      caption: "This single distinction decides whether a culture, an antibiotic class and an ultrasound are needed.",
      columns: ["Feature", "Uncomplicated", "Complicated"],
      rows: [
        [
          "Patient",
          "Non-pregnant pre-menopausal woman, normal tract",
          "Men, children, pregnancy, diabetes, elderly, catheter, transplant, immunosuppression",
        ],
        ["Anatomy", "Normal", "Stones, obstruction, reflux, neurogenic bladder, recent instrumentation"],
        ["Culture before treatment", "Not needed for cystitis", "Always"],
        [
          "Empirical drug",
          "Nitrofurantoin 5 days or fosfomycin single dose",
          "Ceftriaxone or amikacin then culture-guided; piperacillin-tazobactam or carbapenem if severe or ESBL",
        ],
        ["Duration", "3-5 days cystitis, 7 days pyelonephritis", "7-14 days; 4-6 weeks if prostatitis"],
        ["Imaging", "Not needed", "Ultrasound in all; CT if not improving at 72 hours"],
      ],
    },
    {
      kind: "ladder",
      heading: "Antibiotic escalation in UTI under ICMR guidance",
      caption:
        "Over 60% of Indian E. coli are ESBL producers and fluoroquinolone resistance exceeds 70%, so ciprofloxacin, cefixime and cotrimoxazole are not empirical drugs here.",
      steps: [
        {
          label: "Uncomplicated cystitis",
          detail:
            "Nitrofurantoin 100 mg PO twice daily for 5 days, or fosfomycin trometamol 3 g as a single dose; both keep over 90% activity against Indian E. coli including ESBL producers",
          tone: "good",
        },
        {
          label: "Cystitis in pregnancy",
          detail:
            "Nitrofurantoin 100 mg twice daily or cephalexin 500 mg four times daily for 7 days, with a test-of-cure culture; avoid nitrofurantoin after 36 weeks",
        },
        {
          label: "Mild to moderate pyelonephritis",
          detail:
            "Ceftriaxone 1-2 g IV or IM stat, or amikacin 15 mg/kg, then oral therapy guided by culture for 7-10 days. Nitrofurantoin does not reach the kidney and must not be used here",
          tone: "warn",
        },
        {
          label: "Severe pyelonephritis or known ESBL",
          detail:
            "Admit for piperacillin-tazobactam 4.5 g IV 6-hourly or amikacin 15 mg/kg daily for mild ESBL infection, for 7-14 days with an oral switch once afebrile for 48 hours",
        },
        {
          label: "Sepsis or severe ESBL infection",
          detail: "Meropenem 1 g IV 8-hourly or ertapenem 1 g daily; drain an obstructed infected kidney",
          tone: "warn",
        },
        {
          label: "Still febrile at 72 hours - image it",
          detail:
            "Do not add a second antibiotic. Look for obstruction, abscess, emphysematous pyelonephritis or papillary necrosis; a diabetic not improving at 48 hours needs imaging that day",
          tone: "decision",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Asymptomatic bacteriuria in pregnancy",
      caption:
        "Untreated it progresses to pyelonephritis in 20-40% and is associated with preterm labour and low birth weight.",
      steps: [
        {
          label: "Screen with a urine culture",
          detail: "At the first antenatal visit or at 12-16 weeks; 100,000 CFU/mL of a single organism is significant. Dipstick alone is not adequate screening",
        },
        {
          label: "Treat every positive culture",
          detail:
            "Nitrofurantoin 100 mg twice daily, cephalexin 500 mg four times daily, amoxicillin-clavulanate 625 mg three times daily for 7 days, or fosfomycin 3 g single dose",
          tone: "good",
        },
        {
          label: "Avoid the unsafe drugs",
          detail:
            "Fluoroquinolones throughout; cotrimoxazole in the first trimester as a folate antagonist and near term for kernicterus; tetracyclines; nitrofurantoin after 36 weeks",
          tone: "warn",
        },
        {
          label: "Repeat the culture as a test of cure",
          detail: "Then monthly urine culture for the rest of the pregnancy after any infection",
        },
        {
          label: "Pyelonephritis is admitted",
          detail:
            "Intravenous ceftriaxone 1-2 g daily or cefotaxime until afebrile for 48 hours, then oral to complete 10-14 days; monitor for preterm labour and ARDS",
          tone: "warn",
        },
        {
          label: "Prophylaxis until delivery",
          detail: "Nightly nitrofurantoin 50-100 mg or cephalexin 250 mg after pyelonephritis or recurrent bacteriuria",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Positive urine that should not be treated",
      caption: "Pyuria and bacteriuria are common findings, not automatic diagnoses.",
      root: "Abnormal urine without a UTI syndrome",
      arms: [
        {
          label: "Elderly institutionalised woman",
          tone: "warn",
          steps: [
            "Asymptomatic bacteriuria and pyuria in up to half of them",
            "A positive dipstick in a confused patient with no fever or urinary symptom is incidental",
            "Look for the real precipitant: drugs, glucose, electrolytes, hypoxia, constipation, stroke",
            "Do not catheterise to obtain a sample - it introduces infection",
          ],
        },
        {
          label: "Long-term catheter",
          tone: "warn",
          steps: [
            "Pyuria and smell are universal and diagnose nothing",
            "Diagnose by symptoms plus a culture from a freshly placed catheter",
            "Remove or replace the catheter, then treat for 7 days if the response is prompt and 10-14 if delayed",
            "Never treat asymptomatic catheter bacteriuria",
          ],
        },
        {
          label: "Sterile pyuria",
          steps: [
            "Persistent pus cells with repeatedly sterile routine cultures",
            "Acid urine, chronic irritative symptoms, a dilated ureter",
            "Genitourinary tuberculosis until proved otherwise",
            "Three early-morning urine samples for AFB smear, culture and CBNAAT",
          ],
        },
      ],
    },
  ],

  "infectious-fever-skin-soft-tissue-infection": [
    {
      kind: "branch",
      heading: "Classifying skin and soft tissue infection",
      caption:
        "By depth and by whether pus is present. S. aureus causes almost all purulent infection and S. pyogenes almost all non-purulent cellulitis.",
      root: "Skin and soft tissue infection",
      arms: [
        {
          label: "Superficial",
          steps: [
            "Impetigo, ecthyma, folliculitis",
            "Honey-coloured crusts, or flaccid bullae from staphylococcal exfoliative toxin",
            "Limited disease: topical mupirocin 2% or fusidic acid three times daily for 5-7 days",
            "Warn about post-streptococcal glomerulonephritis - antibiotics do not prevent it",
          ],
        },
        {
          label: "Dermal and subcutaneous",
          steps: [
            "Erysipelas and cellulitis, usually beta-haemolytic streptococci",
            "Mild non-purulent: amoxicillin 500 mg three times daily or cephalexin 500 mg four times daily for 5 days",
            "Treat the portal of entry - tinea pedis and fissured web spaces - and elevate the limb",
            "Recurrent attacks: penicillin V 250 mg twice daily for 12 months (PATCH I)",
          ],
        },
        {
          label: "Purulent collections",
          steps: [
            "Furuncle, carbuncle, abscess; S. aureus, about 40% MRSA in ICMR surveillance",
            "Incision and drainage is the primary treatment, with culture of the pus",
            "Add cotrimoxazole or clindamycin for 5-7 days if over 2 cm, multiple, on face or hand, or with systemic signs",
            "Recurrent furunculosis: decolonise with nasal mupirocin and chlorhexidine, and screen for diabetes and HIV",
          ],
        },
        {
          label: "Deep necrotising infection",
          tone: "warn",
          steps: [
            "Necrotising fasciitis and myonecrosis, polymicrobial or S. pyogenes",
            "Pain out of proportion, tense oedema beyond the erythema, dusky skin, haemorrhagic bullae, crepitus",
            "Progression is measured in hours; mortality 20-30% even with treatment",
            "Urgent debridement plus piperacillin-tazobactam or meropenem with clindamycin and vancomycin",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Organism and first-line treatment by infection",
      caption: "Purulent or not is the single question that chooses the antibiotic.",
      columns: ["Infection", "Usual organism", "First-line treatment", "Duration"],
      rows: [
        ["Impetigo, limited", "S. aureus, S. pyogenes", "Topical mupirocin 2% or fusidic acid three times daily", "5-7 days"],
        ["Impetigo, extensive", "S. aureus, S. pyogenes", "Oral cephalexin or cloxacillin", "7 days"],
        [
          "Abscess, furuncle, carbuncle",
          "S. aureus, about 40% MRSA",
          "Incision and drainage; cotrimoxazole or clindamycin if an adjunct is indicated",
          "5-7 days",
        ],
        [
          "Non-purulent cellulitis, erysipelas",
          "Beta-haemolytic streptococci",
          "Amoxicillin 500 mg TDS or cephalexin 500 mg QID",
          "5 days, extend if not improving",
        ],
        [
          "Purulent cellulitis",
          "S. aureus",
          "Cloxacillin 500 mg QID; add cotrimoxazole, doxycycline or clindamycin for MRSA",
          "5-7 days",
        ],
        [
          "Severe cellulitis with sepsis",
          "Streptococci, S. aureus including MRSA",
          "IV vancomycin or linezolid plus piperacillin-tazobactam",
          "7-14 days, oral switch when afebrile 48 hours",
        ],
        [
          "Necrotising fasciitis",
          "Polymicrobial or S. pyogenes",
          "Urgent debridement; piperacillin-tazobactam or meropenem plus clindamycin plus vancomycin",
          "Until source controlled, usually 2-3 weeks",
        ],
        [
          "Animal or human bite",
          "Pasteurella, Eikenella, anaerobes, staphylococci",
          "Amoxicillin-clavulanate 625 mg TDS",
          "3-5 days prophylaxis; 7-14 days if infected",
        ],
        ["Diabetic foot, mild", "S. aureus, streptococci", "Oral cephalexin, cloxacillin or amoxicillin-clavulanate", "1-2 weeks"],
        [
          "Diabetic foot, moderate to severe",
          "Polymicrobial with Pseudomonas, anaerobes, MRSA",
          "IV piperacillin-tazobactam plus MRSA cover, debridement and off-loading",
          "2-3 weeks; 6 weeks for osteomyelitis",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Necrotising fasciitis: the emergency sequence",
      caption: "Immediate surgical debridement is the only treatment that alters survival. Every hour of delay costs.",
      steps: [
        {
          label: "Recognise pain out of proportion",
          detail:
            "Then tense oedema beyond the erythema, dusky or anaesthetic skin, haemorrhagic bullae, crepitus, grey dishwater discharge, tachycardia, confusion and hypotension",
          tone: "warn",
        },
        {
          label: "Resuscitate and take blood cultures",
          detail: "Intravenous fluids while the theatre is being arranged; do not wait for imaging",
        },
        {
          label: "Broad-spectrum antibiotics with clindamycin",
          detail:
            "Piperacillin-tazobactam 4.5 g 6-hourly or meropenem 1 g 8-hourly, plus clindamycin 600-900 mg 8-hourly to suppress toxin, plus vancomycin or linezolid until MRSA is excluded",
        },
        {
          label: "Immediate surgical debridement",
          detail:
            "Antibiotics alone fail because thrombosed vessels cannot deliver them. CT or MRI may support the diagnosis but must never delay surgery",
          tone: "good",
        },
        {
          label: "Re-look every 24-48 hours",
          detail: "Repeat debridement until the tissue is clean",
        },
        {
          label: "Streptococcal disease proven",
          detail:
            "Penicillin G 4 million units 4-hourly with clindamycin; intravenous immunoglobulin is used in streptococcal toxic shock on weak evidence",
        },
      ],
    },
    {
      kind: "compare",
      heading: "LRINEC score for necrotising fasciitis",
      caption: "A supportive score, never a reason to delay the surgeon in a patient who looks like this.",
      columns: ["Parameter", "Value", "Points"],
      rows: [
        ["C-reactive protein", "150 mg/L or more", "4"],
        ["Total leucocyte count", "15,000-25,000 per cubic millimetre", "1"],
        ["Total leucocyte count", "More than 25,000 per cubic millimetre", "2"],
        ["Haemoglobin", "11-13.5 g/dL", "1"],
        ["Haemoglobin", "Less than 11 g/dL", "2"],
        ["Serum sodium", "Less than 135 mmol/L", "2"],
        ["Serum creatinine", "More than 1.6 mg/dL", "2"],
        ["Blood glucose", "More than 180 mg/dL", "1"],
        ["Interpretation", "6-7 intermediate risk; 8 or more high risk", "Maximum 13"],
      ],
    },
  ],

  "infectious-fever-rabies-animal-bite": [
    {
      kind: "compare",
      heading: "WHO categories of exposure and the prophylaxis for each",
      caption:
        "India carries about 36% of the world's rabies deaths, an estimated 18,000-20,000 a year, and 96-97% follow a dog bite.",
      columns: ["Category", "Type of contact with a suspect rabid animal", "Recommended prophylaxis"],
      rows: [
        ["I", "Touching or feeding the animal; licks on intact skin", "None if the history is reliable; wash the skin"],
        [
          "II",
          "Nibbling of uncovered skin; minor scratches or abrasions without bleeding",
          "Wound washing and vaccine; add immunoglobulin if immunocompromised",
        ],
        [
          "III",
          "Single or multiple transdermal bites or scratches; licks on broken skin; saliva on mucous membranes; any contact with a bat",
          "Wound washing, vaccine and rabies immunoglobulin infiltrated into all wounds",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Post-exposure prophylaxis after an animal bite",
      caption: "Once symptoms begin rabies is virtually 100% fatal, so the whole game is prophylaxis on the day of the bite.",
      steps: [
        {
          label: "Wash with soap and running water",
          detail:
            "For 15 minutes, flushing every puncture; this alone halves the risk. Then apply povidone iodine or 70% alcohol. No irritants, no cautery",
          tone: "good",
        },
        {
          label: "Categorise the exposure",
          detail: "Category I needs nothing, II needs vaccine, III needs vaccine plus immunoglobulin",
          tone: "decision",
        },
        {
          label: "Infiltrate immunoglobulin on day 0",
          detail:
            "Equine RIG 40 IU/kg to a maximum of 3000 IU, human RIG 20 IU/kg to a maximum of 1500 IU, into and around every wound, diluted with saline if the volume is short. Never exceed the calculated dose",
        },
        {
          label: "Start vaccine the same day",
          detail:
            "Essen intramuscular on days 0, 3, 7, 14 and 28 into deltoid, or anterolateral thigh under 2 years - never the gluteal region; or intradermal Thai Red Cross 0.1 mL at two sites on days 0, 3, 7 and 28",
        },
        {
          label: "Do not close the wound",
          detail:
            "Explore and irrigate under local anaesthesia, remove foreign material, leave open with a light dressing. If facial closure is unavoidable, infiltrate immunoglobulin first and place loose sutures after several hours",
          tone: "warn",
        },
        {
          label: "Tetanus and antibiotic cover",
          detail:
            "Tetanus toxoid or Td by immunisation status; amoxicillin-clavulanate for 3-5 days for deep punctures and hand, face, genital and cat bites; review the wound at 48 hours",
        },
        {
          label: "Observe the dog for 10 days",
          detail:
            "The course may be stopped if the animal stays healthy, but prophylaxis is started on day 0 and never delayed for the observation",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Vaccine regimens and immunoglobulin products used in India",
      caption: "Only cell culture or embryonated egg vaccines, each at least 2.5 IU per intramuscular dose.",
      columns: ["Regimen or product", "Route and dose", "Schedule", "Notes"],
      rows: [
        [
          "Essen, intramuscular",
          "One vial, 0.5 or 1 mL, in deltoid or anterolateral thigh",
          "Days 0, 3, 7, 14, 28",
          "Five doses, five visits; never gluteal",
        ],
        [
          "Updated Thai Red Cross, intradermal",
          "0.1 mL at each of two sites",
          "Days 0, 3, 7, 28",
          "Eight doses, four visits; vial shared and used within 6-8 hours",
        ],
        [
          "Pre-exposure prophylaxis",
          "Intramuscular or intradermal",
          "Days 0 and 7 (WHO 2018), or 0, 7, 21 or 28 in India",
          "For occupational risk; booster only on exposure or a titre below 0.5 IU/mL",
        ],
        [
          "Equine RIG",
          "40 IU/kg, maximum 3000 IU",
          "Day 0, up to day 7",
          "No skin test; adrenaline ready; serum sickness at 7-14 days possible",
        ],
        ["Human RIG", "20 IU/kg, maximum 1500 IU", "Day 0, up to day 7", "Costly; no serum sickness"],
        [
          "Rabies monoclonal antibody",
          "3.33 IU/kg single antibody, or 40 IU/kg two-antibody cocktail",
          "Day 0, up to day 7",
          "Indian products; infiltrate into wounds like RIG",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "The two clinical forms of rabies",
      caption:
        "Incubation is usually 20-90 days but ranges from 4 days to several years, shorter with face, head and neck bites and in children.",
      root: "Established rabies - virtually 100% fatal",
      arms: [
        {
          label: "Furious rabies, about 80%",
          tone: "warn",
          steps: [
            "Fever with paraesthesia or itching at the healed bite site",
            "Agitation, hydrophobia, aerophobia, hypersalivation",
            "Autonomic instability, death within a week",
            "Treatment is palliative sedation with barrier precautions against saliva",
          ],
        },
        {
          label: "Paralytic or dumb rabies, about 20%",
          tone: "warn",
          steps: [
            "Ascending flaccid paralysis mimicking Guillain-Barre syndrome",
            "Missed unless the bite history is sought",
            "Ante-mortem tests: nuchal skin biopsy for antigen, saliva RT-PCR, CSF antibody",
            "Post-mortem: fluorescent antibody on brain, Negri bodies in hippocampal and Purkinje neurons",
          ],
        },
      ],
    },
  ],

  "infectious-fever-hiv-art": [
    {
      kind: "flow",
      heading: "NACO Strategy III: the Indian three-test algorithm",
      caption:
        "Three tests using three different antigen preparations or test principles, so that no two share the same false-positive tendency.",
      steps: [
        {
          label: "Test A1",
          detail: "Non-reactive on A1 is reported negative, provided the person is outside the window period",
          tone: "decision",
        },
        {
          label: "Reactive on A1 - do A2",
          detail: "A different antigen preparation or test principle from A1",
        },
        {
          label: "Reactive on A2 - do A3",
          detail: "Reactive on all three is reported HIV positive",
          tone: "good",
        },
        {
          label: "Reactive on two of three is indeterminate",
          detail:
            "Recall at 14-28 days and, if still indeterminate, at 3 months, or settle it with a nucleic acid test. Reactive on A1 alone with A2 and A3 non-reactive is negative",
          tone: "warn",
        },
        {
          label: "Mind the window period",
          detail:
            "About 3-12 weeks for a third-generation antibody test, 2-4 weeks for a fourth-generation antigen-antibody assay, about 10-14 days for a nucleic acid test; retest at 6 weeks and 3 months after a defined exposure",
          tone: "warn",
        },
        {
          label: "Under 18 months, antibody tests the mother",
          detail:
            "Maternal IgG persists up to 18 months, so use HIV-1 DNA-PCR on a dried blood spot at 6 weeks, again at 6 months and 12 months, at 6 weeks after breastfeeding stops, and a confirmatory antibody test at 18 months",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "WHO clinical staging in adults and adolescents",
      caption: "Staging is clinical. It no longer decides when ART starts, but it still decides prophylaxis and prognosis.",
      steps: [
        {
          label: "Stage 1 - asymptomatic",
          detail:
            "Asymptomatic infection, or persistent generalised lymphadenopathy with nodes 1 cm or larger at two or more extra-inguinal sites for more than 3 months",
          tone: "good",
        },
        {
          label: "Stage 2 - mild",
          detail:
            "Weight loss under 10%; recurrent upper respiratory infections; herpes zoster; angular cheilitis; recurrent oral ulceration; papular pruritic eruption; seborrhoeic dermatitis; fungal nail infection",
        },
        {
          label: "Stage 3 - advanced",
          detail:
            "Weight loss over 10%; chronic diarrhoea or fever over 1 month; oral candidiasis; oral hairy leukoplakia; pulmonary tuberculosis; severe bacterial infection; necrotising gingivitis; anaemia under 8 g/dL, neutropenia under 500 or platelets under 50,000",
          tone: "warn",
        },
        {
          label: "Stage 4 - severe, AIDS-defining",
          detail:
            "HIV wasting; Pneumocystis pneumonia; extrapulmonary tuberculosis; oesophageal candidiasis; Kaposi sarcoma; cerebral toxoplasmosis; cryptococcal meningitis; CMV disease; HIV encephalopathy; lymphoma; invasive cervical carcinoma",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "NACO antiretroviral regimens and their cautions",
      caption:
        "Treat all: free lifelong ART for every diagnosed person regardless of CD4, stage, age or pregnancy, started the same day or within 7 days.",
      columns: ["Line and group", "Regimen", "Main adverse effects and cautions"],
      rows: [
        [
          "First line, adult and adolescent over 30 kg",
          "Tenofovir 300 mg + lamivudine 300 mg + dolutegravir 50 mg (TLD), one tablet once daily",
          "Tenofovir: renal tubular dysfunction, falling bone density, avoid if creatinine clearance under 50. Dolutegravir: insomnia, weight gain, hyperglycaemia; double the dose with rifampicin; separate from antacids, iron and calcium",
        ],
        [
          "First line alternative",
          "Tenofovir + lamivudine + efavirenz 400 mg (TLE), or zidovudine or abacavir replacing tenofovir in renal impairment",
          "Efavirenz: vivid dreams, insomnia, dizziness, depression, rash. Zidovudine: anaemia, neutropenia, lipoatrophy. Abacavir: hypersensitivity, never rechallenge",
        ],
        [
          "First line, child 4 weeks and 3 kg or more",
          "Abacavir + lamivudine + paediatric dispersible dolutegravir 10 mg, dosed by weight band",
          "Abacavir hypersensitivity; recheck the weight band at every visit - under-dosing a growing child is the commonest cause of paediatric failure",
        ],
        [
          "First line, neonate under 4 weeks",
          "Zidovudine + lamivudine with nevirapine or raltegravir, changed to a dolutegravir regimen when eligible",
          "Nevirapine: hepatitis and severe rash including Stevens-Johnson syndrome. Zidovudine: anaemia",
        ],
        [
          "Second line, after confirmed failure",
          "Boosted protease inhibitor - atazanavir, lopinavir or darunavir with ritonavir - and an optimised backbone, usually zidovudine + lamivudine",
          "Failure is a viral load above 1000 copies/mL on two samples 3 months apart with adherence counselling between. Lopinavir: diarrhoea, dyslipidaemia. Atazanavir: jaundice. Substitute rifabutin for rifampicin",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "PPTCT: the package that takes transmission under 2%",
      caption:
        "Without intervention mother-to-child transmission is 20-45%; with the full package it falls below 2%.",
      steps: [
        {
          label: "Universal opt-out testing in pregnancy",
          detail:
            "At the first antenatal visit, repeated in the third trimester or in labour for those who tested negative, with a rapid kit for any untested woman in labour, plus partner testing",
        },
        {
          label: "Start lifelong ART the same day",
          detail:
            "Option B+ with the same tenofovir + lamivudine + dolutegravir tablet, whatever the CD4 count, stage or gestation. A woman diagnosed late still benefits",
          tone: "good",
        },
        {
          label: "Viral load at 34-36 weeks",
          detail: "This result decides the delivery plan and the infant's prophylaxis",
          tone: "decision",
        },
        {
          label: "Mode of delivery follows the viral load",
          detail:
            "Undetectable or below 1000 copies/mL at 36 weeks means vaginal delivery is appropriate; above 1000, unknown, or ART started late means elective caesarean at 38 completed weeks before labour and before membranes rupture",
        },
        {
          label: "Careful intrapartum care",
          detail:
            "Avoid artificial rupture of membranes, fetal scalp electrodes and scalp blood sampling, avoid routine episiotomy and instrumental delivery, minimise the duration of ruptured membranes, active third stage",
          tone: "warn",
        },
        {
          label: "Infant nevirapine from birth",
          detail:
            "Syrup nevirapine daily for 6 weeks in the low-risk breastfed infant, extended to 12 weeks with zidovudine for the first 6 weeks if high risk; about 2 mg/kg under 2000 g, 10 mg for 2000-2499 g, 15 mg from 2500 g. Cotrimoxazole starts at 6 weeks",
        },
        {
          label: "Exclusive breastfeeding for 6 months",
          detail:
            "Then complementary feeds with breastfeeding to 12 and up to 24 months while the mother is on ART. Mixed feeding in the first 6 months is the most dangerous option; replacement feeding only if all the AFASS conditions are met",
          tone: "good",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Post-exposure prophylaxis after a needlestick or sexual exposure",
      caption:
        "A same-hour emergency: give the first dose before the paperwork. Percutaneous risk is about 0.3%, mucosal splash about 0.09%, receptive anal intercourse about 1.4%.",
      steps: [
        {
          label: "First aid and risk assessment",
          detail:
            "High risk: deep injury, hollow-bore needle, visible blood, a needle from the source's vein or artery, large-volume splash. No risk: intact skin, or urine, faeces, sweat, tears, saliva or vomitus without visible blood",
          tone: "decision",
        },
        {
          label: "Consent, counsel and take baselines",
          detail: "Baseline HIV, HBsAg, anti-HCV, haemogram, liver and renal function, and a pregnancy test",
        },
        {
          label: "Start TLD within 2 hours",
          detail:
            "Tenofovir 300 mg + lamivudine 300 mg + dolutegravir 50 mg, one tablet daily for 28 days - a single regimen for all exposures under current NACO policy",
          tone: "good",
        },
        {
          label: "The outer limit is 72 hours",
          detail:
            "Beyond 72 hours there is no benefit; do not start prophylaxis, and instead counsel, do baseline and follow-up testing and consider PrEP if the risk is ongoing",
          tone: "warn",
        },
        {
          label: "Add the sexual-exposure package",
          detail:
            "Emergency contraception - levonorgestrel 1.5 mg within 72 hours or a copper intrauterine device within 5 days - presumptive STI treatment, hepatitis B vaccine with immunoglobulin, tetanus cover, forensic samples and medico-legal documentation in assault, and psychological support",
        },
        {
          label: "Test at 6 weeks, 3 months and 6 months",
          detail:
            "Review at 2 weeks for adherence and toxicity; advise condom use, no blood or organ donation and no pregnancy attempt during follow-up; report the injury formally as an occupational event",
        },
      ],
    },
  ],
};

export default diagrams;
