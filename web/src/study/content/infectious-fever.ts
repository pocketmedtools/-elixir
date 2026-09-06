import type { ClinicalCase, Subject, Topic } from "../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "infectious-fever-acute-undifferentiated-fever",
  title: "Acute undifferentiated fever: the Indian approach",
  oneLiner:
    "Acute undifferentiated fever is fever of less than two weeks with no localising features on history and examination, and in India the working rule is to exclude malaria, dengue, scrub typhus, enteric fever and leptospirosis by the day of illness before any antibiotic is written.",
  frequency: "core",
  keywords: [
    "AUFI",
    "acute febrile illness",
    "undifferentiated fever",
    "fever without focus",
    "tropical fever",
    "dengue",
    "malaria",
    "scrub typhus",
    "enteric fever",
    "leptospirosis",
    "NS1",
    "IgM ELISA",
    "rapid diagnostic test",
    "doxycycline trial",
    "IDSP",
    "thrombocytopenia",
  ],
  sections: [
    {
      heading: "Definition, burden and why the label exists",
      points: [
        "**Definition:** an acute febrile illness of less than 14 days duration in which a careful history, examination and basic bedside tests fail to localise the infection to an organ system. It is a working label, not a diagnosis, and it must be replaced by a specific one within 5-7 days.",
        "Acute undifferentiated fever accounts for **20-40% of all outpatient attendances in Indian general practice during and after the monsoon**, and for a large share of medical admissions between July and November.",
        "The five diagnoses that carry almost all the mortality are **malaria, dengue, scrub typhus, enteric fever and leptospirosis**; multicentre ICMR studies show these plus influenza account for 60-70% of cases where an aetiology is established, and 30-40% remain undiagnosed even in good laboratories.",
        "Geography drives probability: scrub typhus dominates the sub-Himalayan belt, Tamil Nadu, Puducherry and Rajasthan; leptospirosis dominates coastal Kerala, Gujarat, Maharashtra, Andamans and post-flood settings; malaria persists in Odisha, Jharkhand, Chhattisgarh and the North-East.",
        "**The single commonest error is treating every fever with a third-generation cephalosporin.** It treats none of the top three tropical causes, drives resistance, and delays the doxycycline or artesunate that would actually have worked.",
        "Fever with any warning feature - bleeding, breathlessness, altered sensorium, oliguria, hypotension, jaundice - stops being undifferentiated and becomes an emergency to be triaged, not investigated at leisure.",
      ],
    },
    {
      heading: "History: the questions that narrow the field",
      points: [
        "**Day of illness is the most important single number in the history** - it decides which test will be positive, when the dengue critical phase is due, and whether a negative serology means anything at all. Record it on every prescription.",
        "Fever pattern: a step-ladder continuous fever with relative bradycardia suggests enteric fever; alternate-day or tertian paroxysms with rigors and sweating suggest vivax malaria; a saddleback biphasic curve suggests dengue.",
        "Exposure history in one breath: travel in the last month, forest or plantation visit, wading through flood water or paddy fields, contact with rodents or cattle, mosquito exposure, raw milk, street food, unprotected sex, injections or transfusions, and any animal bite or scratch.",
        "Ask specifically about **retro-orbital pain and severe myalgia (dengue), calf tenderness with red eyes (leptospirosis), an unnoticed painless scab (scrub typhus eschar), and severe crippling small-joint pain (chikungunya)** - each is a one-question shortcut to a diagnosis.",
        "Drug history matters twice: partial antibiotic or antimalarial self-treatment blunts the classical picture and turns cultures negative, and drug fever itself is a diagnosis.",
        "In women of reproductive age ask about the last menstrual period, and in every febrile patient ask about tuberculosis contact and weight loss, because a fortnight-old fever is where undiagnosed TB and HIV first surface.",
      ],
    },
    {
      heading: "Examination: the signs that decide",
      points: [
        "**Vital signs first:** temperature, pulse, respiratory rate, blood pressure with postural drop, capillary refill and oxygen saturation. A narrow pulse pressure of 20 mmHg or less in a febrile patient on day 4-6 is dengue shock until proved otherwise.",
        "**Relative bradycardia (Faget sign)** - a pulse lower than expected for the temperature, roughly less than 10 beats per minute rise for each 1 degree F - points to enteric fever, brucellosis, leptospirosis and some drug fevers rather than to pyogenic sepsis.",
        "Search the skin methodically for a rash and for an **eschar**: axillae, groin, perineum, under the breasts, behind the ears and in the natal cleft. Scrub typhus eschar is painless, black-crusted with an erythematous halo, and is missed in every patient who is not undressed.",
        "Conjunctival suffusion without discharge suggests leptospirosis; a flushed face with a positive tourniquet test suggests dengue; splenomegaly points to malaria, enteric fever, kala-azar or infective endocarditis; generalised lymphadenopathy points to scrub typhus, HIV or a lymphoma.",
        "Examine for meningism, chest signs, an abdominal tenderness pattern, hepatosplenomegaly, murmurs and the perineum or genitalia - the four commonest hidden foci in a supposedly undifferentiated fever are **the urinary tract, the perineum and anorectum, the teeth and sinuses, and an intra-abdominal collection**.",
        "Repeat the examination daily. In tropical fevers the diagnostic sign - the eschar, the rash, the splenic tip, the murmur - very often appears on day 5, not on day 1.",
      ],
    },
    {
      heading: "First-line investigations and what each result changes",
      points: [
        "**Day 1-4 panel:** complete blood count with platelet count and haematocrit, malaria rapid diagnostic test plus thick and thin smear, dengue NS1 antigen, urine routine, and blood culture (two sets before any antibiotic).",
        "**Day 5 onwards add:** dengue IgM MAC-ELISA, scrub typhus IgM ELISA, leptospira IgM ELISA, and repeat blood culture. Sending an IgM before day 5 wastes the sample and produces a falsely reassuring negative result.",
        "The **haemogram is the cheapest discriminator**: leucopenia with thrombocytopenia suggests dengue, malaria or enteric fever; leucocytosis with neutrophilia suggests leptospirosis, scrub typhus, a pyogenic focus or amoebic liver abscess; eosinophilia suggests a parasite or a drug reaction.",
        "Add liver and renal function, and a chest radiograph, in anyone unwell, hypoxic or febrile beyond a week. Transaminases in the 100-500 range with a normal or near-normal bilirubin are typical of dengue, scrub typhus and enteric fever, while bilirubin far out of proportion to transaminases suggests leptospirosis or falciparum malaria.",
        "**A single Widal test is not a diagnosis of enteric fever** in an endemic country - it is positive from past infection, vaccination and cross-reaction, and negative in the first week of true disease. Blood culture is the test that counts.",
        "Notify and think population, not just patient: cluster of cases, IDSP reporting under the Integrated Disease Surveillance Programme, and a look at what the neighbouring households have, which frequently makes the diagnosis before the laboratory does.",
      ],
    },
    {
      heading: "Syndromic pattern recognition",
      points: [
        "**Fever with thrombocytopenia:** dengue, malaria, scrub typhus, leptospirosis, enteric fever, sepsis, and in the chronic setting kala-azar and haematological disease. This is the commonest tropical syndrome and the one every examiner asks.",
        "**Fever with rash:** dengue (macular blanching rash then islands of white in a sea of red), chikungunya, measles and rubella, rickettsial spotted fevers (rash involving palms and soles), enteric rose spots, meningococcaemia (purpuric, an emergency), and drug rash.",
        "**Fever with jaundice:** malaria, leptospirosis, viral hepatitis A and E, enteric fever, dengue with hepatitis, cholangitis and liver abscess. A febrile jaundiced patient with a tender liver and a swinging fever is an amoebic liver abscess until imaged.",
        "**Fever with altered sensorium:** cerebral malaria, meningitis and encephalitis including Japanese encephalitis, scrub typhus meningoencephalitis, enteric encephalopathy, and metabolic causes such as hypoglycaemia and hyponatraemia. Do a capillary glucose before anything else.",
        "**Fever with arthralgia:** chikungunya, dengue, acute rheumatic fever, reactive arthritis, brucellosis and the early phase of connective tissue disease.",
        "**Fever with breathlessness or hypoxia:** pneumonia and influenza, severe dengue with pleural effusion, scrub typhus with ARDS, leptospiral pulmonary haemorrhage, and pulmonary embolism masquerading as sepsis.",
      ],
    },
    {
      heading: "Empirical treatment, safety-netting and follow-up",
      points: [
        "Antipyresis with **paracetamol 500-1000 mg PO 6-hourly, maximum 4 g in 24 hours** (15 mg/kg per dose in children), tepid sponging and oral fluids. **Avoid aspirin, ibuprofen and all NSAIDs until dengue is excluded** because of bleeding and acute kidney injury.",
        "Do not give a blind antibiotic in the first 3 days of an uncomplicated fever in a well patient with stable vitals: review daily, and let the day of illness and the tests decide.",
        "When empirical cover is genuinely needed in an unwell patient in an endemic area, **doxycycline 100 mg PO twice daily for 7 days covers scrub typhus, other rickettsioses and leptospirosis** and is the single highest-yield empirical drug in Indian tropical fever; azithromycin 500 mg daily is the substitute in pregnancy and in young children.",
        "Severe illness with shock, organ dysfunction or a suspected pyogenic focus needs blood cultures then intravenous ceftriaxone 2 g daily plus doxycycline, with intravenous artesunate added if a smear or rapid test is positive for falciparum malaria.",
        "**Safety-net every patient who goes home:** written advice to return immediately for bleeding, black stools, severe abdominal pain, persistent vomiting, breathlessness, reduced urine output, cold extremities, drowsiness or fever persisting beyond day 5, and a named review date within 48 hours.",
        "**The defervescence day is the dangerous day in dengue** - warn the family that the patient may get worse just as the fever settles, which is the counselling point that prevents most deaths.",
      ],
    },
  ],
  tables: [
    {
      heading: "Which test on which day of illness",
      columns: ["Day of illness", "Test to send", "What a positive means"],
      rows: [
        ["Day 1-5", "Dengue NS1 antigen", "Confirms dengue; sensitivity falls sharply after day 5"],
        ["Any day", "Malaria RDT plus thick and thin smear", "Species identification decides NVBDCP treatment; repeat smear 12-hourly if negative and suspicion high"],
        ["Any day", "Blood culture, two sets before antibiotic", "Enteric fever, bacteraemia, endocarditis; highest yield in week 1 of typhoid"],
        ["Day 5 onwards", "Dengue IgM MAC-ELISA", "Recent dengue; negative before day 5 is meaningless"],
        ["Day 5 onwards", "Scrub typhus IgM ELISA", "Scrub typhus; a fourfold rise in paired sera is confirmatory"],
        ["Day 5 onwards", "Leptospira IgM ELISA (MAT if available)", "Leptospirosis; MAT on paired sera is the reference standard"],
        ["Day 7 onwards", "Repeat CBC, LFT, RFT, chest radiograph", "Detects the complication rather than the organism"],
      ],
    },
    {
      heading: "Haemogram patterns in Indian tropical fever",
      columns: ["Pattern", "Think of", "Next step"],
      rows: [
        ["Leucopenia with thrombocytopenia", "Dengue, malaria, enteric fever", "NS1 or IgM, malaria smear, blood culture"],
        ["Neutrophil leucocytosis with thrombocytopenia", "Leptospirosis, scrub typhus, sepsis", "Doxycycline empirically, IgM ELISA, cultures"],
        ["Normal counts with high transaminases", "Scrub typhus, dengue, viral hepatitis", "Scrub IgM, hepatitis serology"],
        ["Anaemia with splenomegaly and pancytopenia", "Malaria, kala-azar, haematological disease", "Smear, rK39, bone marrow"],
        ["Eosinophilia", "Parasitic infection, drug fever", "Stool examination, review drug chart"],
      ],
    },
  ],
  redFlags: [
    "Systolic BP below 90 mmHg, narrow pulse pressure of 20 mmHg or less, cold clammy peripheries or capillary refill over 3 seconds - shock, resuscitate and admit.",
    "Bleeding from any site, black stools, or a platelet count falling rapidly with a rising haematocrit - severe dengue or a coagulopathy.",
    "Altered sensorium, seizure, neck stiffness or a new focal neurological deficit - cerebral malaria, meningitis or encephalitis; check capillary glucose immediately.",
    "Breathlessness, respiratory rate above 24 per minute or oxygen saturation below 94% - ARDS from scrub typhus, leptospiral pulmonary haemorrhage or severe dengue.",
    "Urine output below 0.5 mL/kg/hour, or a rising creatinine - acute kidney injury from malaria, leptospirosis or sepsis.",
    "Jaundice with fever and a tender liver, or jaundice with bleeding - severe malaria, leptospirosis or liver abscess.",
    "Fever persisting beyond 7 days without a diagnosis, or fever recurring after apparent defervescence - re-evaluate from the beginning, do not simply escalate antibiotics.",
  ],
  pearls: [
    "Write the day of illness on every prescription; it decides which test is worth sending and when the danger period falls.",
    "Undress the patient and look in the axilla, groin and under the breast for an eschar - the single highest-yield physical sign in Indian tropical fever.",
    "Doxycycline 100 mg twice daily is the most useful empirical antimicrobial in the Indian febrile patient because it covers scrub typhus, spotted fevers and leptospirosis at once.",
    "A single Widal titre proves nothing in an endemic population; treat the culture, not the serology.",
    "Never give an NSAID to a febrile patient until dengue has been excluded - paracetamol only.",
    "The patient who deteriorates as the fever settles has dengue entering the critical phase, not a recovering viral illness.",
    "Repeat the examination every day: the eschar, the splenic tip and the murmur usually appear on day 5, not on day 1.",
    "Thirty to forty per cent of acute undifferentiated fever remains without an aetiological label even in good centres; a self-limiting fever that resolves with a normal haemogram needs follow-up, not a widening antibiotic.",
  ],
  theory: [
    {
      id: "infectious-fever-acute-undifferentiated-fever-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 30-year-old man from a rural district presents in September with fever of 5 days duration without any localising symptoms. Discuss your approach to diagnosis and management of acute undifferentiated fever in a family practice setting.",
      openingLines: [
        "Acute undifferentiated febrile illness is fever of less than two weeks duration in which history, examination and bedside tests fail to localise the infection to an organ system; it accounts for a fifth to two-fifths of monsoon outpatient attendance in India.",
        "The objective in a family practice is to identify the five treatable and potentially fatal causes - malaria, dengue, scrub typhus, enteric fever and leptospirosis - to recognise severity early, and to avoid an unnecessary antibiotic.",
      ],
      answer: [
        {
          heading: "1. History",
          points: [
            "Day of illness, fever pattern, and whether the fever has ever touched normal; associated retro-orbital pain, myalgia, calf tenderness, joint pain, rash, cough, diarrhoea, dysuria or headache.",
            "Exposure history: travel, forest or plantation visit, wading in flood water or paddy field, rodent and cattle contact, raw milk, street food, unprotected sexual contact, injections, transfusions, animal bite.",
            "Drug history including self-medication with antibiotics and antimalarials, which blunts the classical picture and sterilises cultures; past history of tuberculosis, diabetes, HIV, and current pregnancy.",
            "Family and neighbourhood history of similar fevers, which frequently establishes an outbreak of dengue or chikungunya before any laboratory does.",
          ],
        },
        {
          heading: "2. Examination",
          points: [
            "Vital signs with pulse pressure, postural blood pressure, capillary refill, respiratory rate and oxygen saturation; look for relative bradycardia.",
            "A full skin survey with the patient undressed, searching axilla, groin, perineum, under the breasts and behind the ears for an eschar, and describing any rash.",
            "Conjunctival suffusion, jaundice, pallor, lymphadenopathy, hepatosplenomegaly, meningism, chest signs, cardiac murmur and abdominal tenderness.",
            "Repeat the examination daily, because the discriminating sign usually appears around day 5.",
          ],
        },
        {
          heading: "3. Investigations",
          points: [
            "First line: complete blood count with platelet count and haematocrit, malaria rapid diagnostic test with thick and thin smear, dengue NS1 if within day 5, urine routine, and two sets of blood culture before any antibiotic.",
            "From day 5: dengue IgM MAC-ELISA, scrub typhus IgM ELISA, leptospira IgM ELISA.",
            "Supportive: liver and renal function, serum electrolytes, chest radiograph, ultrasound abdomen for splenomegaly, gall bladder wall oedema, ascites or a liver abscess.",
            "Interpret the haemogram as a discriminator: leucopenia with thrombocytopenia versus neutrophil leucocytosis; and remember that a single Widal test is not diagnostic in an endemic setting.",
          ],
        },
        {
          heading: "4. Management",
          points: [
            "Triage first: shock, bleeding, hypoxia, altered sensorium, oliguria or jaundice mandate admission and resuscitation rather than outpatient work-up.",
            "Symptomatic care with paracetamol 500-1000 mg 6-hourly to a maximum of 4 g a day, oral fluids and ORS; NSAIDs and aspirin are prohibited until dengue is excluded.",
            "Specific therapy once the cause is known: artemisinin combination therapy or intravenous artesunate for malaria, doxycycline for scrub typhus and leptospirosis, azithromycin or ceftriaxone for enteric fever, and supportive fluid therapy for dengue.",
            "Where empirical treatment is unavoidable in an unwell patient in an endemic area, doxycycline 100 mg twice daily for 7 days is the rational empirical choice, with ceftriaxone added if bacterial sepsis is suspected.",
          ],
        },
        {
          heading: "5. Follow-up, safety-netting and public health",
          points: [
            "Daily review during the critical window of days 3-7 with a repeat platelet count and haematocrit where dengue is suspected.",
            "Written warning signs for the family: bleeding, black stools, severe abdominal pain, persistent vomiting, breathlessness, cold extremities, reduced urine, drowsiness, and worsening as the fever settles.",
            "Notification of dengue, malaria and any cluster of fevers under the Integrated Disease Surveillance Programme; source reduction advice for Aedes breeding and rodent control.",
            "Review the whole diagnosis afresh if fever persists beyond 7 days rather than escalating the antibiotic, and consider tuberculosis, HIV, abscess, endocarditis and non-infective causes.",
          ],
        },
      ],
      mustDraw: [
        "A table of day of illness against the test to be sent (NS1 day 1-5, IgM ELISA day 5 onwards, blood culture any day).",
        "A flow chart from acute fever through triage for danger signs, to syndromic grouping (thrombocytopenia, jaundice, rash, altered sensorium), to specific therapy.",
      ],
      markSplit: [
        { part: "Definition, burden and the five key causes", marks: 2 },
        { part: "History and exposure", marks: 2 },
        { part: "Examination including the eschar search", marks: 1.5 },
        { part: "Investigations with the day-of-illness logic", marks: 2 },
        { part: "Management, empirical therapy and safety-netting", marks: 2.5 },
      ],
      keywords: ["acute undifferentiated fever", "day of illness", "eschar", "doxycycline", "NS1", "IDSP"],
    },
    {
      id: "infectious-fever-acute-undifferentiated-fever-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "core",
      question: "Write short notes on the approach to fever with thrombocytopenia in India.",
      openingLines: [
        "Thrombocytopenia is a platelet count below 150,000 per cubic millimetre, and its combination with acute fever is the commonest diagnostic syndrome in Indian medical practice during and after the monsoon.",
        "The purpose of the approach is to separate the causes that need a specific drug within hours from those that need only fluid and observation.",
      ],
      answer: [
        {
          heading: "Causes",
          points: [
            "Infective and common: dengue, malaria (both vivax and falciparum), scrub typhus and other rickettsioses, leptospirosis, enteric fever, and bacterial sepsis with disseminated intravascular coagulation.",
            "Infective and less common: HIV seroconversion, viral hepatitis, brucellosis, infective endocarditis, chikungunya and Kyasanur forest disease in the Western Ghats.",
            "Non-infective mimics that must not be missed: acute leukaemia, aplastic anaemia, immune thrombocytopenia, thrombotic thrombocytopenic purpura, drug-induced thrombocytopenia and megaloblastic anaemia.",
          ],
        },
        {
          heading: "Clinical clues",
          points: [
            "Eschar with leucocytosis and high transaminases suggests scrub typhus; conjunctival suffusion with calf tenderness and jaundice suggests leptospirosis.",
            "Rigors with splenomegaly and a haemolytic picture suggests malaria; a step-ladder fever with relative bradycardia suggests enteric fever.",
            "Rising haematocrit with a falling platelet count around defervescence, plus ascites or a pleural effusion, is dengue plasma leakage.",
            "Lymphadenopathy, hepatosplenomegaly with pancytopenia and a long history suggests leukaemia or kala-azar rather than an acute arbovirus.",
          ],
        },
        {
          heading: "Investigation and management",
          points: [
            "Complete blood count with peripheral smear, haematocrit trend, malaria RDT and smear, dengue NS1 or IgM by day of illness, scrub and leptospira IgM, blood culture, liver and renal function, and coagulation profile if bleeding.",
            "Treat the cause: artemisinin combination therapy or artesunate for malaria, doxycycline for rickettsial and leptospiral disease, ceftriaxone or azithromycin for enteric fever, and crystalloid guided by haematocrit for dengue.",
            "**Do not transfuse platelets on a count alone.** Transfuse for clinically significant bleeding, or prophylactically only when the count is below 10,000 per cubic millimetre or below 20,000 with a bleeding risk factor.",
            "Avoid NSAIDs, aspirin, intramuscular injections and invasive procedures while the count is low.",
          ],
        },
      ],
      mustDraw: ["A three-column table of cause, discriminating clinical clue, and confirmatory test for fever with thrombocytopenia."],
      markSplit: [
        { part: "Causes, infective and non-infective", marks: 2 },
        { part: "Clinical discriminators", marks: 1.5 },
        { part: "Investigation and the platelet transfusion rule", marks: 1.5 },
      ],
      keywords: ["fever with thrombocytopenia", "dengue", "scrub typhus", "platelet transfusion threshold"],
    },
    {
      id: "infectious-fever-acute-undifferentiated-fever-t3",
      paper: "II",
      kind: "chart-flow",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Draw a flow chart for the outpatient evaluation of a patient presenting with fever of less than 7 days without localising features, and justify each branch point.",
      openingLines: [
        "The flow chart has three sequential decisions: is the patient sick, is there a focus, and which endemic pathogen fits the day of illness.",
        "Every branch is designed to identify a treatable cause early while avoiding an unnecessary antimicrobial in a self-limiting illness.",
      ],
      answer: [
        {
          heading: "Step 1: triage for severity",
          points: [
            "Check pulse, pulse pressure, blood pressure, capillary refill, respiratory rate, oxygen saturation, sensorium and urine output.",
            "Any danger sign - shock, bleeding, hypoxia, altered sensorium, oliguria, jaundice, seizure - diverts the patient immediately to resuscitation and admission.",
          ],
        },
        {
          heading: "Step 2: look for a focus",
          points: [
            "A focused system review and examination for pharyngitis, otitis, pneumonia, urinary tract infection, cellulitis, dental or perianal sepsis, diarrhoea and meningism.",
            "If a focus is found, treat it specifically; if not, the patient enters the undifferentiated fever pathway.",
          ],
        },
        {
          heading: "Step 3: investigate by day of illness",
          points: [
            "Day 1-4: complete blood count, malaria RDT and smear, dengue NS1, urine routine, blood culture.",
            "Day 5 and beyond: add dengue, scrub typhus and leptospira IgM ELISA, and repeat the haemogram.",
            "Interpret the count: leucopenia with thrombocytopenia versus neutrophil leucocytosis directs the next test and the empirical drug.",
          ],
        },
        {
          heading: "Step 4: treat and safety-net",
          points: [
            "Specific therapy where a diagnosis is made; doxycycline 100 mg twice daily for 7 days as empirical cover only in the unwell patient in an endemic area.",
            "Paracetamol, oral fluids, no NSAIDs, daily review through days 3-7, and written warning signs with a named return date.",
            "If fever exceeds 7 days without diagnosis, restart the evaluation and consider tuberculosis, HIV, abscess, endocarditis, malignancy and connective tissue disease.",
          ],
        },
      ],
      mustDraw: [
        "The four-step flow chart: triage for danger signs, search for focus, day-of-illness investigation, then treat with safety-netting.",
      ],
      markSplit: [
        { part: "Triage branch with danger signs", marks: 1.5 },
        { part: "Focus versus no focus branch", marks: 1 },
        { part: "Day-of-illness investigation branch", marks: 1.5 },
        { part: "Treatment and safety-netting", marks: 1 },
      ],
      keywords: ["flow chart", "triage", "day of illness", "safety-netting", "empirical doxycycline"],
    },
  ],
  mcqs: [
    {
      id: "infectious-fever-acute-undifferentiated-fever-q1",
      stem: "A 26-year-old man from Vellore has had fever for 6 days with severe headache and myalgia. He has a temperature of 39.2 C, a 1 cm black crusted lesion with an erythematous rim in the left axilla, tender axillary nodes, and bibasal crepitations. Total leucocyte count is 14,800 per cubic millimetre, platelets 82,000, ALT 210 U/L. What is the most appropriate immediate treatment?",
      options: [
        "Intravenous ceftriaxone 2 g once daily",
        "Doxycycline 100 mg orally twice daily",
        "Artemether-lumefantrine for 3 days",
        "Intravenous acyclovir",
        "Oseltamivir 75 mg twice daily",
      ],
      answer: 1,
      explanation:
        "An eschar with regional lymphadenopathy, neutrophil leucocytosis, thrombocytopenia and raised transaminases in an endemic district is scrub typhus, and doxycycline produces defervescence within 48 hours, which is itself a diagnostic response. Ceftriaxone has no activity against Orientia tsutsugamushi and is the classic wrong reflex in tropical fever. Antimalarials are irrelevant without a positive smear or rapid test, acyclovir treats no cause of this syndrome, and oseltamivir would only be appropriate for an influenza-like illness without an eschar.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-acute-undifferentiated-fever-q2",
      stem: "A 34-year-old woman has had fever for 3 days with retro-orbital pain. She is haemodynamically stable, and the haemogram shows a total count of 3,200 per cubic millimetre and platelets of 128,000. Which single test is most likely to establish the diagnosis today?",
      options: [
        "Dengue IgM MAC-ELISA",
        "Dengue NS1 antigen",
        "Widal test",
        "Scrub typhus IgM ELISA",
        "Blood culture",
      ],
      answer: 1,
      explanation:
        "NS1 antigen is detectable from day 1 to about day 5 of illness and is the correct dengue test on day 3, whereas dengue IgM only becomes reliably positive from day 5 and would be falsely negative now. Scrub typhus IgM is subject to the same timing problem. A Widal test on day 3 is both too early and non-specific in an endemic population, and blood culture, though always worth sending, is unlikely to be positive in a patient whose leucopenia and retro-orbital pain point to an arbovirus.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-acute-undifferentiated-fever-q3",
      stem: "A 45-year-old farmer from coastal Kerala presents after the monsoon with 5 days of fever, severe calf pain, red eyes without discharge, jaundice and oliguria. Bilirubin is 8.4 mg/dL, ALT 96 U/L, creatinine 3.2 mg/dL, total leucocyte count 17,000 with neutrophilia. Which is the most likely diagnosis?",
      options: [
        "Dengue with severe plasma leakage",
        "Acute viral hepatitis E",
        "Leptospirosis (Weil disease)",
        "Falciparum malaria",
        "Enteric fever with hepatitis",
      ],
      answer: 2,
      explanation:
        "Conjunctival suffusion, intense calf myalgia, neutrophil leucocytosis, acute kidney injury and a bilirubin grossly out of proportion to only modestly raised transaminases is the classic Weil syndrome of leptospirosis in a post-monsoon coastal farmer. Dengue characteristically causes leucopenia and a haematocrit rise rather than neutrophilia with renal failure. Hepatitis E produces transaminases in the thousands with bilirubin proportionate. Falciparum malaria must be excluded with a smear but does not explain conjunctival suffusion and calf tenderness, and enteric fever usually shows relative bradycardia with a normal or low leucocyte count.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-acute-undifferentiated-fever-q4",
      stem: "A 20-year-old student has had fever for 4 days. She is fully alert, drinking well, with a pulse of 92 per minute, BP 116/76 mmHg, no rash, no bleeding, platelets 96,000 and haematocrit 38%. NS1 is positive. Which is the most appropriate management?",
      options: [
        "Admit for prophylactic platelet transfusion",
        "Admit for intravenous fluids because the platelet count is below 100,000",
        "Home care with oral fluids, paracetamol, written warning signs and daily review of haematocrit and platelet count",
        "Start oral ibuprofen for symptom relief and review in 5 days",
        "Start doxycycline 100 mg twice daily and review in a week",
      ],
      answer: 2,
      explanation:
        "This is dengue Group A - tolerating oral fluids, passing urine, with no warning signs - which is managed at home with oral fluids, paracetamol, daily monitoring through the critical phase and clear return instructions. Platelet transfusion is not given for a count alone and never prophylactically at 96,000. Admission for intravenous fluid is triggered by warning signs or an inability to drink, not by a number on the haemogram. Ibuprofen is contraindicated in dengue, and doxycycline treats a different set of pathogens and is unnecessary once NS1 is positive.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-acute-undifferentiated-fever-q5",
      stem: "A 40-year-old man has had continuous fever for 8 days with a temperature of 39.5 C and a pulse of 78 per minute. He has a coated tongue, mild abdominal distension and a palpable spleen. Total leucocyte count is 3,800 per cubic millimetre. Which finding in this vignette most specifically supports the likely diagnosis?",
      options: [
        "Splenomegaly",
        "Leucopenia",
        "Relative bradycardia in the presence of high fever",
        "Continuous fever for more than a week",
        "Abdominal distension",
      ],
      answer: 2,
      explanation:
        "Relative bradycardia, or Faget sign, is a pulse inappropriately slow for the height of the fever and is the most specific of the listed features, pointing to enteric fever, and also to brucellosis, leptospirosis and drug fever. Splenomegaly, leucopenia, prolonged fever and abdominal distension are all consistent with typhoid but occur equally in malaria, dengue and many other tropical fevers, so none of them discriminates. Blood culture remains the confirmatory test whatever the clinical impression.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-acute-undifferentiated-fever-q6",
      stem: "A previously healthy 32-year-old man has had fever for 3 days with no localising features, normal vital signs, a normal examination, a total leucocyte count of 7,200 and platelets of 210,000. Malaria RDT and NS1 are negative. What is the most appropriate next step?",
      options: [
        "Start oral cefixime 200 mg twice daily for 5 days",
        "Start oral azithromycin 500 mg once daily for 5 days",
        "Paracetamol, oral fluids, written warning signs and review in 48 hours with a repeat haemogram",
        "Order a contrast CT of the abdomen",
        "Send a Widal test and treat if the titre is 1 in 80 or higher",
      ],
      answer: 2,
      explanation:
        "A well patient in the first three days of an undifferentiated fever with normal counts and negative first-line tests needs symptomatic treatment, safety-netting and a review, because most such illnesses are self-limiting viral infections and the discriminating features appear around day 5. Empirical cefixime or azithromycin at this point treats nothing likely and contributes to resistance. Cross-sectional imaging is not indicated on day 3 of an undifferentiated fever with a normal examination, and acting on a single Widal titre in an endemic country produces large numbers of false diagnoses.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "infectious-fever-acute-undifferentiated-fever-c1",
      front: "Define acute undifferentiated febrile illness.",
      back: "Fever of less than 14 days with no localising features on history, examination and bedside tests. It is a working label, not a diagnosis.",
    },
    {
      id: "infectious-fever-acute-undifferentiated-fever-c2",
      front: "The five causes of acute undifferentiated fever in India that must be excluded first.",
      back: "Malaria, dengue, scrub typhus, enteric fever and leptospirosis.",
    },
    {
      id: "infectious-fever-acute-undifferentiated-fever-c3",
      front: "Which dengue test on day 3, and which on day 7?",
      back: "NS1 antigen day 1-5; IgM MAC-ELISA from day 5 onwards. An IgM sent before day 5 is falsely reassuring.",
    },
    {
      id: "infectious-fever-acute-undifferentiated-fever-c4",
      front: "Where do you look for a scrub typhus eschar?",
      back: "Axilla, groin, perineum, under the breasts, behind the ears and the natal cleft - the patient must be undressed.",
    },
    {
      id: "infectious-fever-acute-undifferentiated-fever-c5",
      front: "What is relative bradycardia (Faget sign) and what does it suggest?",
      back: "A pulse inappropriately slow for the temperature. Suggests enteric fever, brucellosis, leptospirosis and drug fever.",
    },
    {
      id: "infectious-fever-acute-undifferentiated-fever-c6",
      front: "Best single empirical antimicrobial in undifferentiated tropical fever in India, and why.",
      back: "Doxycycline 100 mg twice daily for 7 days - it covers scrub typhus, other rickettsioses and leptospirosis. Azithromycin substitutes in pregnancy and young children.",
    },
    {
      id: "infectious-fever-acute-undifferentiated-fever-c7",
      front: "Haemogram pattern: leucopenia with thrombocytopenia versus neutrophil leucocytosis with thrombocytopenia.",
      back: "Leucopenia: dengue, malaria, enteric fever. Neutrophil leucocytosis: leptospirosis, scrub typhus, bacterial sepsis.",
    },
    {
      id: "infectious-fever-acute-undifferentiated-fever-c8",
      front: "Why are NSAIDs banned in undifferentiated fever?",
      back: "Bleeding risk and acute kidney injury if the diagnosis turns out to be dengue. Paracetamol up to 4 g a day is the only antipyretic until dengue is excluded.",
    },
    {
      id: "infectious-fever-acute-undifferentiated-fever-c9",
      front: "Fever with jaundice: name five causes seen in Indian practice.",
      back: "Falciparum malaria, leptospirosis, viral hepatitis A and E, enteric fever, and amoebic liver abscess or cholangitis.",
    },
    {
      id: "infectious-fever-acute-undifferentiated-fever-c10",
      front: "What proportion of acute undifferentiated fever remains without an aetiological diagnosis in Indian studies?",
      back: "About 30-40% even where good serology and culture are available; the top five pathogens account for 60-70% of those diagnosed.",
    },
    {
      id: "infectious-fever-acute-undifferentiated-fever-c11",
      front: "The single most useful number to record in the history of a febrile patient.",
      back: "The day of illness - it decides which test will be positive and when the dengue critical phase falls.",
    },
    {
      id: "infectious-fever-acute-undifferentiated-fever-c12",
      front: "Under which national programme is a cluster of fever cases reported?",
      back: "The Integrated Disease Surveillance Programme (IDSP), through the weekly S, P and L forms.",
    },
  ],
  references: [
    "ICMR Treatment Guidelines for Antimicrobial Use in Common Syndromes, 3rd edition, 2022 - acute febrile illness",
    "National Vector Borne Disease Control Programme (NVBDCP / NCVBDC), MoHFW - guidelines for dengue, malaria and other vector-borne diseases",
    "WHO Dengue: Guidelines for Diagnosis, Treatment, Prevention and Control, 2009 and the 2012 SEARO handbook",
    "Integrated Disease Surveillance Programme operational manual, NCDC, MoHFW",
    "API Textbook of Medicine, 11th edition, 2019 - approach to fever and tropical infections",
  ],
});

topics.push({
  id: "infectious-fever-dengue",
  title: "Dengue: warning signs, phases and fluid management",
  oneLiner:
    "Dengue is a mosquito-borne flaviviral illness with febrile, critical and recovery phases, in which death results from plasma leakage rather than from the platelet count, and management is entirely about recognising the WHO warning signs and giving titrated isotonic crystalloid during the 24-48 hour critical phase.",
  frequency: "core",
  keywords: [
    "dengue fever",
    "DHF",
    "dengue haemorrhagic fever",
    "dengue shock syndrome",
    "NS1 antigen",
    "IgM MAC-ELISA",
    "warning signs",
    "plasma leakage",
    "haematocrit",
    "Aedes aegypti",
    "tourniquet test",
    "Group A B C",
    "expanded dengue syndrome",
    "NVBDCP",
    "platelet transfusion",
    "critical phase",
  ],
  sections: [
    {
      heading: "Virology, vector and burden",
      points: [
        "Dengue is caused by a **flavivirus with four serotypes DENV 1 to 4**, all of which circulate in India; infection with one serotype gives lifelong immunity to that serotype but only transient cross-immunity to the others.",
        "**Secondary infection with a different serotype carries the greatest risk of severe dengue** through antibody-dependent enhancement, which is why severe disease clusters in older children and in adults living in hyperendemic cities.",
        "The vector is **Aedes aegypti** (and Aedes albopictus), a day-biting mosquito that breeds in clean stored water - coolers, overhead tanks, discarded tyres, flower pots and construction sites - so control is source reduction, not fogging.",
        "Incubation is **4 to 10 days**; the patient is viraemic and infective to mosquitoes from a day before fever until about day 5.",
        "India reports well over 100,000 laboratory-confirmed cases a year to the NVBDCP with true burden many times higher; peak transmission follows the monsoon from August to November, with a longer season in the south.",
        "Case fatality in properly managed dengue is **below 1%, but severe dengue managed badly carries a mortality of 10-20%**, and almost all the difference is fluid management.",
      ],
    },
    {
      heading: "The three phases",
      points: [
        "**Febrile phase (days 1-3):** abrupt high fever, severe headache, retro-orbital pain, myalgia and arthralgia (break-bone fever), facial flushing, a transient macular rash, and a positive tourniquet test. Dehydration and febrile seizures are the risks here.",
        "**Critical phase (days 3-7, beginning at defervescence and lasting 24-48 hours):** plasma leakage from increased capillary permeability. This is when shock, effusions, ascites and severe bleeding occur, and it is heralded by the warning signs.",
        "**Recovery phase (days 7-10):** reabsorption of extravasated fluid, a falling haematocrit, a rising platelet count, bradycardia, and a confluent itchy rash with islands of white in a sea of red on the limbs. **Fluid overload and pulmonary oedema are the danger of this phase**, so intravenous fluids must be stopped.",
        "The **tourniquet test** is done by inflating the cuff midway between systolic and diastolic pressure for 5 minutes; more than 10 petechiae per square inch on the forearm is positive. It supports dengue but is neither sensitive nor specific.",
        "**Laboratory hallmarks of the critical phase are a rising haematocrit with a rapidly falling platelet count**, progressive leucopenia, and hypoalbuminaemia; a haematocrit rise of 20% or more above baseline indicates significant plasma leakage.",
        "Warn the family explicitly that **the patient may worsen just as the fever settles** - this counselling point saves more lives than any drug in dengue.",
      ],
    },
    {
      heading: "WHO warning signs and case classification",
      points: [
        "**The WHO 2009 warning signs are:** abdominal pain or tenderness, persistent vomiting, clinical fluid accumulation (ascites or pleural effusion), mucosal bleeding, lethargy or restlessness, liver enlargement more than 2 cm, and a rise in haematocrit with a rapid fall in platelet count.",
        "**Group A** is dengue without warning signs in a patient who tolerates oral fluids and passes urine at least every 6 hours - managed at home with review every day.",
        "**Group B** is dengue with warning signs, or dengue with a co-existing condition (infancy, pregnancy, old age, diabetes, renal or heart disease, obesity, haemoglobinopathy) or an adverse social situation such as living alone or far from hospital - admit for observation and intravenous fluid.",
        "**Group C is severe dengue** and requires emergency treatment: severe plasma leakage causing shock or respiratory distress from fluid accumulation, severe bleeding, or severe organ involvement (AST or ALT 1000 IU/L or more, impaired consciousness, myocarditis, renal failure).",
        "The old classification of dengue fever, dengue haemorrhagic fever grades I-IV and dengue shock syndrome is still used in Indian programme documents: **grade I is fever with a positive tourniquet test only, grade II adds spontaneous bleeding, grade III is circulatory failure with a narrow pulse pressure, and grade IV is profound shock with unrecordable BP**.",
        "**Expanded dengue syndrome** covers the unusual presentations - encephalitis and encephalopathy, myocarditis, acute liver failure, acute kidney injury, Guillain-Barre syndrome, acalculous cholecystitis and haemophagocytic lymphohistiocytosis - recognised because they occur without classical plasma leakage.",
      ],
    },
    {
      heading: "Diagnosis",
      points: [
        "**NS1 antigen is the test of days 1 to 5**, with a sensitivity of 70-90% in primary infection and lower in secondary infection; it may remain positive up to day 9 in some patients.",
        "**IgM MAC-ELISA is the test from day 5 onwards**, remaining positive for 2-3 months. India's national policy is to confirm dengue by NS1 or IgM MAC-ELISA performed at a **Sentinel Surveillance Hospital, where the test is free under the NVBDCP**.",
        "**Rapid combo cards for IgM and IgG are not acceptable for case confirmation** because of poor specificity, and an isolated IgG positive result means past infection, not current dengue.",
        "Serial complete blood counts are the real monitoring tool: **record haematocrit and platelet count at least once daily from day 3, and 4-6 hourly in a Group B or C patient**, because it is the trend and not a single value that guides fluid.",
        "Do a chest radiograph in the right lateral decubitus position or, better, an ultrasound looking for a right pleural effusion, ascites and gall bladder wall thickening more than 3 mm - all early objective evidence of plasma leakage.",
        "Add liver function, renal function, serum albumin, blood grouping and cross-matching in any patient with warning signs; a **coagulation profile is needed only if there is significant bleeding**.",
      ],
    },
    {
      heading: "Fluid management, the core of treatment",
      points: [
        "**Group A:** oral fluids - ORS, coconut water, rice kanji, buttermilk, fruit juice, soup - to maintain a urine output of at least once every 6 hours, plus paracetamol 500-1000 mg 6-hourly to a maximum of 4 g a day. **No aspirin, no NSAIDs, no steroids, no intramuscular injections.**",
        "**Group B with warning signs:** isotonic crystalloid (0.9% saline or Ringer lactate) at **5-7 mL/kg/hour for 1-2 hours, then 3-5 mL/kg/hour for 2-4 hours, then 2-3 mL/kg/hour**, reassessing clinically and by haematocrit at every step and reducing as soon as the patient improves.",
        "**Group C, compensated shock (narrow pulse pressure, tachycardia, cold peripheries but measurable BP):** isotonic crystalloid **5-10 mL/kg over 1 hour**, then reassess; if improving step down through 5-7, 3-5 and 2-3 mL/kg/hour and stop by 24-48 hours.",
        "**Group C, hypotensive shock:** crystalloid or colloid **20 mL/kg as a bolus over 15-30 minutes**; if the patient improves reduce to 10 mL/kg/hour and then step down. If there is no improvement, check the haematocrit - a **rising haematocrit means give more fluid or switch to a colloid, a falling haematocrit means occult bleeding and the need for blood**.",
        "**Total intravenous fluid should not exceed maintenance plus 5% deficit over about 48 hours**, and infusion should be stopped once the patient is haemodynamically stable, appetite returns, urine output is good and the haematocrit falls in the recovery phase - continuing fluid into reabsorption causes pulmonary oedema.",
        "Calculate maintenance by the Holliday-Segar rule using ideal body weight: 100 mL/kg for the first 10 kg, 50 mL/kg for the next 10 kg, 20 mL/kg thereafter.",
      ],
    },
    {
      heading: "Blood products, complications and prevention",
      points: [
        "**Platelet transfusion is not given on a count alone.** Indications are clinically significant bleeding, or a prophylactic transfusion when the count is below 10,000 per cubic millimetre (or below 20,000 with a bleeding risk factor such as an invasive procedure or peptic ulcer).",
        "**Fresh whole blood or packed cells are given for significant bleeding with haemodynamic compromise**, guided by a falling haematocrit in a patient still in shock; fresh frozen plasma and cryoprecipitate are reserved for documented coagulopathy with bleeding.",
        "There is **no role for steroids, intravenous immunoglobulin, carica papaya leaf extract, platelet-raising tonics or prophylactic antibiotics** in dengue; the papaya leaf preparations widely sold in India have no evidence of benefit on hard outcomes.",
        "Watch for and manage the specific complications: fluid overload with pulmonary oedema (stop fluids, sit up, oxygen, cautious furosemide if the leak has stopped), acute liver failure, myocarditis, encephalopathy, and secondary bacterial infection.",
        "**Discharge criteria:** afebrile for 48 hours without antipyretic, improving appetite and general condition, stable haematocrit off intravenous fluids for 24 hours, urine output adequate, no respiratory distress, and a **rising platelet count above 50,000 per cubic millimetre**.",
        "Prevention is source reduction - weekly dry day, emptying and scrubbing coolers and containers, covering overhead tanks, larvivorous fish, personal protection with repellents and full-sleeved clothing - plus community action and notification under the NVBDCP; the CYD-TDV vaccine is not part of Indian public health practice.",
      ],
    },
  ],
  tables: [
    {
      heading: "WHO 2009 case classification and disposal",
      columns: ["Group", "Criteria", "Where managed", "Fluid"],
      rows: [
        ["A", "Dengue without warning signs, tolerating oral fluids, urine at least 6-hourly", "Home with daily review", "Oral fluids and ORS only"],
        ["B", "Any warning sign, or co-existing condition or adverse social circumstance", "Admit for observation", "Isotonic crystalloid 5-7 then 3-5 then 2-3 mL/kg/h, titrated"],
        ["C", "Severe plasma leakage with shock or respiratory distress, severe bleeding, or severe organ impairment", "Emergency care, high dependency or ICU", "5-10 mL/kg over 1 h for compensated shock; 20 mL/kg bolus for hypotensive shock"],
      ],
    },
    {
      heading: "The seven WHO warning signs",
      columns: ["Warning sign", "What it reflects"],
      rows: [
        ["Abdominal pain or tenderness", "Hepatic congestion, ascites, serositis"],
        ["Persistent vomiting", "Inability to maintain oral intake plus visceral leak"],
        ["Clinical fluid accumulation (ascites, pleural effusion)", "Established plasma leakage"],
        ["Mucosal bleeding", "Thrombocytopenia with vasculopathy"],
        ["Lethargy or restlessness", "Early hypoperfusion"],
        ["Liver enlargement more than 2 cm", "Hepatic involvement, common in children"],
        ["Rising haematocrit with rapid fall in platelet count", "Haemoconcentration from plasma leakage"],
      ],
    },
    {
      heading: "Interpreting the haematocrit in a shocked dengue patient",
      columns: ["Situation", "Haematocrit", "Action"],
      rows: [
        ["Shock persists after crystalloid bolus", "Rising or still high", "Give a further bolus or switch to colloid; leakage continues"],
        ["Shock persists after crystalloid bolus", "Falling", "Suspect concealed haemorrhage; transfuse fresh whole blood or packed cells"],
        ["Improving with warm peripheries and good urine output", "Falling with widening pulse pressure", "Step down the infusion rate; recovery phase beginning"],
        ["Breathless with basal crackles and puffy face", "Falling with a raised jugular venous pressure", "Fluid overload; stop fluids, oxygen, consider furosemide once leak has stopped"],
      ],
    },
  ],
  redFlags: [
    "Any of the seven WHO warning signs on days 3-7 - admit for intravenous fluid and 4-6 hourly monitoring.",
    "Narrow pulse pressure of 20 mmHg or less, cold clammy extremities, or capillary refill over 3 seconds - dengue shock syndrome, give a fluid bolus now.",
    "Haematocrit rise of 20% or more above baseline with a rapidly falling platelet count - established plasma leakage.",
    "Bleeding that is not merely petechial - haematemesis, melaena, menorrhagia or gum bleeding with haemodynamic change.",
    "AST or ALT 1000 IU/L or more, jaundice, or altered sensorium - severe organ involvement or expanded dengue syndrome.",
    "Breathlessness with basal crackles and a falling haematocrit during the recovery phase - fluid overload, stop the drip.",
    "Dengue in pregnancy, in infancy, in the elderly, or with diabetes, renal or cardiac disease - admit even without warning signs.",
  ],
  pearls: [
    "The critical phase begins as the fever falls; a patient who worsens on defervescence has dengue entering plasma leakage, not a recovering viral fever.",
    "Death in dengue is from plasma leakage, not from the platelet count - resuscitate the circulation and stop counting platelets.",
    "Never transfuse platelets for a number alone; transfuse for bleeding, or prophylactically only below 10,000 per cubic millimetre.",
    "A shocked dengue patient whose haematocrit is falling is bleeding, not leaking - give blood, not more crystalloid.",
    "Stop the intravenous fluid when the patient improves; pulmonary oedema in the recovery phase is an iatrogenic death.",
    "NS1 for the first five days, IgM MAC-ELISA from day five - and never diagnose current dengue on an IgG alone.",
    "Paracetamol only, maximum 4 g a day; aspirin, ibuprofen, diclofenac and intramuscular injections are all prohibited.",
    "Discharge when afebrile 48 hours off antipyretics, appetite returning, haematocrit stable off fluids for 24 hours, and platelets rising above 50,000.",
  ],
  theory: [
    {
      id: "infectious-fever-dengue-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "Describe the clinical phases, warning signs and fluid management of dengue. How would you decide which patient can be managed at home and which needs admission?",
      openingLines: [
        "Dengue is an acute febrile illness caused by any of four serotypes of dengue flavivirus transmitted by Aedes aegypti, and it evolves through febrile, critical and recovery phases.",
        "Mortality is determined by plasma leakage during the critical phase and by the fluid given in response to it, not by the platelet count, so recognition of the WHO warning signs and titrated isotonic crystalloid are the whole of treatment.",
      ],
      answer: [
        {
          heading: "1. Phases of the illness",
          points: [
            "Febrile phase, days 1-3: high fever, headache, retro-orbital pain, severe myalgia and arthralgia, flushing, transient macular rash, positive tourniquet test. Dehydration and febrile convulsions are the risks.",
            "Critical phase, days 3-7 beginning at defervescence and lasting 24-48 hours: increased capillary permeability with plasma leakage causing effusions, ascites, haemoconcentration, shock and bleeding.",
            "Recovery phase, days 7-10: reabsorption of fluid, falling haematocrit, rising platelet count, bradycardia and a confluent itchy rash described as islands of white in a sea of red. Fluid overload is the danger here.",
          ],
        },
        {
          heading: "2. WHO warning signs",
          points: [
            "Abdominal pain or tenderness; persistent vomiting; clinical fluid accumulation as ascites or pleural effusion; mucosal bleeding; lethargy or restlessness; liver enlargement more than 2 cm; and a rise in haematocrit with a rapid fall in platelet count.",
            "Each warning sign indicates that plasma leakage has begun and that the patient needs admission and intravenous fluid.",
          ],
        },
        {
          heading: "3. Classification and disposal",
          points: [
            "Group A - no warning signs, tolerating oral fluids, passing urine at least 6-hourly, no co-morbidity and reliable home circumstances: home care with oral fluids, paracetamol, written warning signs and daily review with a haemogram.",
            "Group B - any warning sign, or a co-existing condition such as infancy, pregnancy, age above 60, diabetes, renal, hepatic or cardiac disease, obesity, or an adverse social situation: admit for observation and intravenous fluid.",
            "Group C - severe dengue with shock or respiratory distress from plasma leakage, severe bleeding, or severe organ impairment (transaminases 1000 IU/L or more, impaired consciousness, myocarditis, renal failure): emergency resuscitation and intensive care.",
          ],
        },
        {
          heading: "4. Fluid management",
          points: [
            "Group A: oral fluids to maintain urine output, ORS, coconut water, kanji and soups; paracetamol only, with aspirin and NSAIDs prohibited.",
            "Group B: isotonic crystalloid 5-7 mL/kg/hour for 1-2 hours, then 3-5 mL/kg/hour for 2-4 hours, then 2-3 mL/kg/hour, titrated to clinical status, haematocrit and urine output of 0.5 mL/kg/hour.",
            "Group C compensated shock: 5-10 mL/kg of isotonic crystalloid over 1 hour, reassess, then step down through 5-7, 3-5 and 2-3 mL/kg/hour.",
            "Group C hypotensive shock: 20 mL/kg bolus over 15-30 minutes, then reduce on improvement; if shock persists, a rising haematocrit means more fluid or colloid while a falling haematocrit means concealed bleeding and the need for blood.",
            "Total fluid should approximate maintenance plus 5% deficit over 48 hours; stop the infusion in the recovery phase to avoid pulmonary oedema.",
          ],
        },
        {
          heading: "5. Blood products, monitoring and discharge",
          points: [
            "Platelet transfusion only for clinically significant bleeding, or prophylactically below 10,000 per cubic millimetre; fresh whole blood or packed cells for bleeding with haemodynamic compromise.",
            "Monitor pulse, blood pressure with pulse pressure, capillary refill, urine output and haematocrit 4-6 hourly in Group B and C patients.",
            "No steroids, no immunoglobulin, no papaya leaf extract, no prophylactic antibiotics.",
            "Discharge when afebrile for 48 hours without antipyretics, appetite improving, stable haematocrit off intravenous fluids for 24 hours, adequate urine output and platelets rising above 50,000 per cubic millimetre.",
          ],
        },
        {
          heading: "6. Prevention and notification",
          points: [
            "Source reduction of Aedes breeding in clean stored water - weekly dry day, covered tanks, emptying coolers, removing tyres and discarded containers, larvivorous fish.",
            "Personal protection with repellents, full-sleeved clothing and bed nets during the day, since Aedes bites in daylight.",
            "Notify under the NVBDCP and IDSP; confirm cases by NS1 or IgM MAC-ELISA at a Sentinel Surveillance Hospital, where the test is provided free.",
          ],
        },
      ],
      mustDraw: [
        "The triphasic fever, haematocrit and platelet curve of dengue with the critical phase marked at defervescence.",
        "A table of Group A, B and C with criteria, place of management and fluid regimen.",
      ],
      markSplit: [
        { part: "Phases of illness", marks: 2 },
        { part: "Warning signs", marks: 2 },
        { part: "Group A, B, C classification and disposal", marks: 2 },
        { part: "Fluid regimens with doses", marks: 3 },
        { part: "Blood products, discharge criteria and prevention", marks: 1 },
      ],
      keywords: ["dengue", "warning signs", "critical phase", "plasma leakage", "haematocrit", "Group A B C"],
    },
    {
      id: "infectious-fever-dengue-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "core",
      question: "Write short notes on dengue shock syndrome and its management.",
      openingLines: [
        "Dengue shock syndrome is severe dengue in which plasma leakage produces circulatory failure, defined clinically by a narrow pulse pressure of 20 mmHg or less, or by hypotension with cold clammy extremities and restlessness.",
        "It occurs in the critical phase, typically between days 3 and 7, at or shortly after defervescence, and it is fully reversible if fluid resuscitation is prompt and titrated.",
      ],
      answer: [
        {
          heading: "Recognition",
          points: [
            "Compensated shock: tachycardia, cold clammy peripheries, capillary refill over 2 seconds, narrowed pulse pressure with a normal systolic pressure, restlessness, reduced urine output.",
            "Decompensated shock: hypotension or unrecordable blood pressure, feeble or absent pulses, mottled skin, tachypnoea, metabolic acidosis and altered sensorium.",
            "Supporting evidence: rising haematocrit, rapidly falling platelet count, pleural effusion on right lateral decubitus film or ultrasound, ascites, gall bladder wall oedema and hypoalbuminaemia.",
          ],
        },
        {
          heading: "Immediate management",
          points: [
            "Compensated shock: isotonic crystalloid 5-10 mL/kg over one hour, then reassess; if improving step down to 5-7, then 3-5, then 2-3 mL/kg/hour and stop by 24-48 hours.",
            "Hypotensive shock: 20 mL/kg of crystalloid or colloid over 15-30 minutes, oxygen, and repeated reassessment every 15-30 minutes.",
            "If shock persists after the bolus, recheck the haematocrit: a high or rising value indicates continued leakage and calls for a further bolus or a colloid such as dextran or a starch-free alternative, while a falling value indicates concealed bleeding requiring fresh whole blood or packed cells.",
            "Correct hypoglycaemia, hypocalcaemia and metabolic acidosis; inotropes are used only after intravascular volume has been restored.",
          ],
        },
        {
          heading: "Monitoring, pitfalls and outcome",
          points: [
            "Monitor pulse, blood pressure and pulse pressure, capillary refill, respiratory rate, urine output aiming for 0.5-1 mL/kg/hour, and haematocrit every 4-6 hours or sooner.",
            "**The two commonest fatal errors are giving too little fluid in the first hour of shock, and continuing fluid into the reabsorption phase and causing pulmonary oedema.**",
            "Avoid intramuscular injections, NSAIDs, steroids and unnecessary invasive procedures; do not transfuse platelets for a count alone.",
            "With prompt recognition and titrated fluid, mortality falls below 1%; untreated or mismanaged shock carries a mortality of 10-20%.",
          ],
        },
      ],
      mustDraw: ["An algorithm for compensated and hypotensive dengue shock, showing the fluid boluses, the reassessment point, and the haematocrit branch into more fluid versus blood."],
      markSplit: [
        { part: "Definition and recognition", marks: 1.5 },
        { part: "Fluid regimens with doses", marks: 2 },
        { part: "Haematocrit interpretation and blood products", marks: 1 },
        { part: "Monitoring and pitfalls", marks: 0.5 },
      ],
      keywords: ["dengue shock syndrome", "narrow pulse pressure", "20 mL/kg bolus", "colloid", "haematocrit"],
    },
    {
      id: "infectious-fever-dengue-t3",
      paper: "II",
      kind: "enumerate",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Enumerate the warning signs of dengue and the criteria for severe dengue, and state the indications for platelet transfusion.",
      openingLines: [
        "The WHO 2009 classification divides dengue into dengue without warning signs, dengue with warning signs, and severe dengue, and this division drives the place of care and the fluid regimen.",
        "Platelet transfusion in dengue is guided by bleeding and not by the count, and this is one of the commonest errors in Indian practice.",
      ],
      answer: [
        {
          heading: "Warning signs (seven)",
          points: [
            "Abdominal pain or tenderness.",
            "Persistent vomiting.",
            "Clinical fluid accumulation - ascites or pleural effusion.",
            "Mucosal bleeding.",
            "Lethargy or restlessness.",
            "Liver enlargement more than 2 cm below the costal margin.",
            "Increase in haematocrit with a rapid fall in platelet count.",
          ],
        },
        {
          heading: "Criteria for severe dengue (any one)",
          points: [
            "Severe plasma leakage leading to shock (dengue shock syndrome) or to respiratory distress from fluid accumulation.",
            "Severe bleeding as judged by the clinician - haematemesis, melaena, intracranial or heavy vaginal bleeding.",
            "Severe organ involvement - AST or ALT 1000 IU/L or more, impaired consciousness, myocarditis, or renal failure.",
          ],
        },
        {
          heading: "Indications for platelet transfusion",
          points: [
            "Clinically significant bleeding at any platelet count.",
            "Prophylactic transfusion when the platelet count is below 10,000 per cubic millimetre, or below 20,000 when there is an additional bleeding risk such as an invasive procedure, peptic ulcer or anticoagulant use.",
            "**A low count alone, however dramatic, is not an indication**; counts routinely fall to 20,000-30,000 and recover spontaneously within 48-72 hours.",
            "Fresh whole blood or packed cells are given instead for bleeding with haemodynamic compromise, particularly when the haematocrit falls in a patient still in shock.",
          ],
        },
      ],
      markSplit: [
        { part: "Seven warning signs", marks: 2 },
        { part: "Criteria for severe dengue", marks: 1.5 },
        { part: "Platelet transfusion indications", marks: 1.5 },
      ],
      keywords: ["warning signs", "severe dengue", "platelet transfusion", "WHO 2009"],
    },
  ],
  mcqs: [
    {
      id: "infectious-fever-dengue-q1",
      stem: "A 22-year-old man with NS1-positive dengue is on day 5 of illness. His fever has settled today. He is restless, has vomited four times, complains of right hypochondrial pain, and the liver is palpable 3 cm below the costal margin. Pulse is 108 per minute, BP 108/90 mmHg. Haematocrit has risen from 40% to 48% and platelets have fallen from 120,000 to 42,000. What is the most appropriate immediate action?",
      options: [
        "Reassure and continue oral fluids at home with review tomorrow",
        "Transfuse 6 units of random donor platelets",
        "Admit and start isotonic crystalloid 5-10 mL/kg over one hour with reassessment",
        "Start intravenous ceftriaxone and metronidazole for possible cholecystitis",
        "Give intravenous hydrocortisone 100 mg to reduce capillary leak",
      ],
      answer: 2,
      explanation:
        "He has multiple warning signs plus a pulse pressure of 18 mmHg, which is compensated dengue shock in the critical phase, and the correct action is admission with a titrated isotonic crystalloid load of 5-10 mL/kg over an hour followed by reassessment. Home management is unsafe once warning signs appear. Platelets are not transfused at 42,000 in the absence of significant bleeding. The abdominal pain and hepatomegaly are dengue serositis and hepatic congestion, not cholecystitis, and antibiotics change nothing. Steroids have repeatedly failed to show benefit in dengue and are not recommended.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-dengue-q2",
      stem: "A 30-year-old woman with dengue shock has received 20 mL/kg of Ringer lactate over 20 minutes. She remains hypotensive at 80/60 mmHg with cold peripheries. Her haematocrit has fallen from 50% to 33%. What should be done next?",
      options: [
        "Give a further 20 mL/kg bolus of Ringer lactate",
        "Start a colloid infusion",
        "Transfuse fresh whole blood or packed red cells",
        "Start noradrenaline infusion",
        "Give intravenous furosemide because the haematocrit has normalised",
      ],
      answer: 2,
      explanation:
        "A falling haematocrit in a patient who remains shocked after adequate fluid means concealed haemorrhage, most often gastrointestinal, and the treatment is blood rather than more crystalloid. Repeating crystalloid or moving to colloid is the right answer only when the haematocrit is high or rising, which indicates ongoing plasma leakage. Vasopressors are used only once intravascular volume has been restored and are not the answer to unrecognised bleeding. Furosemide in a shocked, bleeding patient would be dangerous; the low haematocrit here reflects blood loss, not fluid overload.",
      difficulty: "hard",
    },
    {
      id: "infectious-fever-dengue-q3",
      stem: "A 9-year-old boy is on day 8 of dengue. He is afebrile, hungry, and his platelet count is 38,000 rising from 22,000 yesterday. He becomes breathless with bilateral basal crackles and puffiness of the face while receiving intravenous fluid at 3 mL/kg/hour. Haematocrit has fallen from 46% to 36%. What is the most likely explanation?",
      options: [
        "Progression to severe dengue with plasma leakage",
        "Fluid overload in the recovery phase",
        "Dengue myocarditis",
        "Secondary bacterial pneumonia",
        "Concealed gastrointestinal bleeding",
      ],
      answer: 1,
      explanation:
        "On day 8, with an improving appetite, a rising platelet count and a falling haematocrit, he is in the reabsorption or recovery phase, and continuing intravenous fluid at this stage produces pulmonary oedema - the classic iatrogenic complication of dengue. Plasma leakage has ended, as the rising platelets and improving clinical state show. Myocarditis would give arrhythmia, gallop and cardiogenic shock rather than this picture in a clinically improving child. Pneumonia would come with fever and focal signs, and concealed bleeding would produce shock with pallor, not basal crackles with facial puffiness.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-dengue-q4",
      stem: "A febrile patient presents on day 6 of illness. Which single investigation is most appropriate to confirm dengue?",
      options: [
        "NS1 antigen",
        "Dengue IgM MAC-ELISA",
        "Dengue IgG rapid card test",
        "RT-PCR for dengue virus",
        "Tourniquet test",
      ],
      answer: 1,
      explanation:
        "IgM MAC-ELISA becomes reliably positive from day 5 and is the nationally recommended confirmatory test after that point, performed free at Sentinel Surveillance Hospitals under the NVBDCP. NS1 sensitivity declines sharply after day 5, particularly in secondary infection. An IgG card indicates past exposure and, alone, cannot confirm current infection. RT-PCR is a day 1-5 test, expensive and not widely available. The tourniquet test is a bedside supportive sign, not a confirmatory investigation.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-dengue-q5",
      stem: "A 28-year-old man with confirmed dengue on day 4 has a platelet count of 16,000 per cubic millimetre. He has a few petechiae on the forearms, no mucosal or gastrointestinal bleeding, normal vital signs and a stable haematocrit. What is the correct management of the platelet count?",
      options: [
        "Transfuse single donor platelets immediately",
        "Transfuse 4 units of random donor platelets and repeat daily until above 50,000",
        "No transfusion; observe, avoid injections and NSAIDs, and repeat the count in 12-24 hours",
        "Give intravenous immunoglobulin",
        "Start oral prednisolone 1 mg/kg to raise the count",
      ],
      answer: 2,
      explanation:
        "Petechiae are not clinically significant bleeding, and at 16,000 with stable haemodynamics the correct approach is observation with a repeat count, avoiding intramuscular injections, NSAIDs and invasive procedures, because counts recover spontaneously within 48-72 hours. Prophylactic transfusion is reserved for counts below 10,000 or below 20,000 with an added bleeding risk. Immunoglobulin and steroids have no established role in dengue thrombocytopenia and expose the patient to harm and cost without benefit.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-dengue-q6",
      stem: "Which statement about the vector and transmission of dengue is correct?",
      options: [
        "Aedes aegypti bites mainly at night and breeds in stagnant dirty water",
        "Aedes aegypti bites during the day and breeds in clean stored water in and around houses",
        "Dengue is transmitted by Culex quinquefasciatus, the same vector as Japanese encephalitis",
        "Dengue is transmitted by Anopheles culicifacies in rural India",
        "Fogging with insecticide is the mainstay of dengue vector control",
      ],
      answer: 1,
      explanation:
        "Aedes aegypti is a day-biting mosquito that breeds in clean stored water in domestic and peridomestic containers such as coolers, overhead tanks, tyres and flower pots, which is why source reduction and a weekly dry day are the mainstay of control. Culex is the vector of Japanese encephalitis and bancroftian filariasis, and Anopheles transmits malaria. Fogging only kills adult mosquitoes transiently during an outbreak and does not touch the larval habitat, so it cannot be the mainstay.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-dengue-q7",
      stem: "A 24-year-old woman with dengue is being considered for discharge. Which combination of findings best satisfies the discharge criteria?",
      options: [
        "Platelet count above 100,000 regardless of other parameters",
        "Afebrile for 24 hours on regular paracetamol with platelets of 40,000",
        "Afebrile for 48 hours without antipyretics, improving appetite, stable haematocrit off intravenous fluids for 24 hours, good urine output, platelets rising above 50,000",
        "Negative NS1 antigen on repeat testing",
        "Two consecutive normal haematocrit values on the same day",
      ],
      answer: 2,
      explanation:
        "The standard discharge criteria are clinical and combined: no fever for 48 hours without antipyretic, returning appetite and general wellbeing, stable haematocrit with no intravenous fluid for 24 hours, adequate urine output, no respiratory distress, and a platelet count that is rising above 50,000. A single platelet number does not qualify a patient for discharge because the direction of change matters more than the value. Being afebrile only because of regular paracetamol conceals ongoing illness. Repeat NS1 testing has no role in monitoring, and two haematocrit values in one day say nothing about the trend.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "infectious-fever-dengue-c1",
      front: "List the seven WHO warning signs in dengue.",
      back: "Abdominal pain or tenderness; persistent vomiting; clinical fluid accumulation; mucosal bleeding; lethargy or restlessness; liver enlargement over 2 cm; rising haematocrit with rapidly falling platelets.",
    },
    {
      id: "infectious-fever-dengue-c2",
      front: "When does the critical phase of dengue occur and how long does it last?",
      back: "Days 3-7, beginning at defervescence, lasting 24-48 hours. Plasma leakage, shock and bleeding all happen here.",
    },
    {
      id: "infectious-fever-dengue-c3",
      front: "Fluid regimen for dengue with warning signs (Group B).",
      back: "Isotonic crystalloid 5-7 mL/kg/h for 1-2 h, then 3-5 mL/kg/h for 2-4 h, then 2-3 mL/kg/h, titrated to clinical state, haematocrit and urine output.",
    },
    {
      id: "infectious-fever-dengue-c4",
      front: "Fluid bolus for compensated versus hypotensive dengue shock.",
      back: "Compensated: 5-10 mL/kg isotonic crystalloid over 1 hour. Hypotensive: 20 mL/kg crystalloid or colloid over 15-30 minutes.",
    },
    {
      id: "infectious-fever-dengue-c5",
      front: "Shock persists after a fluid bolus - what does a falling haematocrit mean?",
      back: "Concealed haemorrhage. Give fresh whole blood or packed cells. A rising haematocrit instead means continued leakage - more fluid or colloid.",
    },
    {
      id: "infectious-fever-dengue-c6",
      front: "Indications for platelet transfusion in dengue.",
      back: "Clinically significant bleeding at any count; or prophylactically below 10,000 per cubic millimetre (below 20,000 with an added bleeding risk). Never for a count alone.",
    },
    {
      id: "infectious-fever-dengue-c7",
      front: "Which dengue test on day 2, and which on day 7?",
      back: "Day 2: NS1 antigen (useful days 1-5). Day 7: IgM MAC-ELISA (positive from day 5, free at Sentinel Surveillance Hospitals under NVBDCP).",
    },
    {
      id: "infectious-fever-dengue-c8",
      front: "Discharge criteria in dengue.",
      back: "Afebrile 48 hours without antipyretics, appetite improving, stable haematocrit off IV fluids for 24 hours, good urine output, no respiratory distress, platelets rising above 50,000.",
    },
    {
      id: "infectious-fever-dengue-c9",
      front: "What is expanded dengue syndrome?",
      back: "Unusual manifestations without classical plasma leakage - encephalitis, myocarditis, acute liver failure, AKI, Guillain-Barre syndrome, acalculous cholecystitis, HLH.",
    },
    {
      id: "infectious-fever-dengue-c10",
      front: "Why is secondary dengue infection more severe?",
      back: "Antibody-dependent enhancement: non-neutralising antibody from a previous serotype increases viral uptake into monocytes, worsening capillary leak.",
    },
    {
      id: "infectious-fever-dengue-c11",
      front: "Old WHO grading: what separates DHF grade II from grade III?",
      back: "Grade II is fever with spontaneous bleeding; grade III adds circulatory failure with a narrow pulse pressure of 20 mmHg or less. Grade IV is unrecordable BP.",
    },
    {
      id: "infectious-fever-dengue-c12",
      front: "Treatments with no role in dengue.",
      back: "Steroids, intravenous immunoglobulin, papaya leaf extract, prophylactic antibiotics, aspirin and NSAIDs, and intramuscular injections.",
    },
  ],
  references: [
    "WHO Dengue: Guidelines for Diagnosis, Treatment, Prevention and Control, new edition 2009",
    "National Guidelines for Clinical Management of Dengue Fever, NVBDCP / NCVBDC, MoHFW, 2015 (revised)",
    "WHO SEARO Comprehensive Guidelines for Prevention and Control of Dengue and Dengue Haemorrhagic Fever, revised 2011",
    "Indian Academy of Pediatrics guidelines on management of dengue in children, 2020",
    "API Textbook of Medicine, 11th edition, 2019 - dengue and other arboviral infections",
  ],
});
