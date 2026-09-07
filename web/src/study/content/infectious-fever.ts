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

topics.push({
  id: "infectious-fever-malaria",
  title: "Malaria: diagnosis and NVBDCP species-wise treatment",
  oneLiner:
    "Malaria is a protozoal infection transmitted by the female Anopheles mosquito which must be confirmed by rapid diagnostic test or microscopy before treatment, and then treated by species under the national drug policy - chloroquine with 14 days of primaquine for vivax, artesunate plus sulfadoxine-pyrimethamine (artemether-lumefantrine in the North-East) with single-dose primaquine for falciparum, and intravenous artesunate for severe disease.",
  frequency: "core",
  keywords: [
    "malaria",
    "Plasmodium falciparum",
    "Plasmodium vivax",
    "NVBDCP",
    "artesunate",
    "sulfadoxine-pyrimethamine",
    "artemether-lumefantrine",
    "chloroquine",
    "primaquine",
    "G6PD deficiency",
    "rapid diagnostic test",
    "thick and thin smear",
    "cerebral malaria",
    "severe malaria",
    "Anopheles",
    "malaria elimination",
  ],
  sections: [
    {
      heading: "Parasite, vector and Indian epidemiology",
      points: [
        "Five species infect humans; in India **Plasmodium vivax and Plasmodium falciparum account for almost all cases**, with P. malariae reported from Odisha and the Karnataka coast and P. ovale rarely. Transmission is by the bite of an infected female Anopheles mosquito, principally An. culicifacies in rural plains and An. stephensi in urban areas.",
        "Roughly **60-65% of Indian malaria is falciparum and the rest is vivax**, with falciparum dominating Odisha, Chhattisgarh, Jharkhand, Madhya Pradesh and the North-Eastern states, and vivax dominating the northern and western plains and cities.",
        "**Vivax and ovale form hypnozoites in the liver** which cause relapse weeks to months later; this is why radical cure with primaquine for 14 days is mandatory and why a vivax patient who returns with fever three months later has relapsed, not been reinfected.",
        "Incubation is about 12 days for falciparum, 14 days for vivax; the classical paroxysm of cold stage, hot stage and sweating stage occurs every 48 hours in vivax and falciparum (tertian) and every 72 hours in malariae (quartan), but **in practice most Indian patients have a continuous or irregular fever**.",
        "India is committed to the **National Framework for Malaria Elimination 2016-2030**, aiming for zero indigenous cases by 2027 and elimination certification by 2030, and reported cases have fallen by more than 85% since 2015.",
        "**Every fever in a malaria-endemic block must be tested before treatment** - the programme rule is test, treat, track, and presumptive antimalarial treatment without a test is no longer acceptable.",
      ],
    },
    {
      heading: "Clinical features and severe malaria",
      points: [
        "Uncomplicated malaria: fever with chills and rigors, headache, myalgia, nausea, vomiting, and after some days pallor and splenomegaly. **Falciparum can present with almost anything - diarrhoea, cough, jaundice or an acute abdomen - and is the great mimic.**",
        "**Severe malaria (WHO criteria)** is P. falciparum (and increasingly recognised in vivax) parasitaemia with any of: impaired consciousness or coma, prostration, more than two convulsions in 24 hours, acidosis, hypoglycaemia below 40 mg/dL, severe anaemia (haemoglobin below 7 g/dL in adults, below 5 g/dL in children), renal impairment with creatinine above 3 mg/dL, jaundice with bilirubin above 3 mg/dL plus parasitaemia over 100,000/microlitre, pulmonary oedema, significant bleeding, shock, or hyperparasitaemia above 10%.",
        "**Cerebral malaria** is unrousable coma persisting more than 30 minutes after a seizure, with asexual falciparum parasitaemia and no other cause; retinal haemorrhages and retinal whitening are supportive. Neck stiffness and photophobia are absent, which helps separate it from meningitis.",
        "**Blackwater fever** is massive intravascular haemolysis with haemoglobinuria producing cola-coloured urine and acute kidney injury, classically after quinine in a G6PD-deficient or repeatedly infected patient.",
        "Malaria in pregnancy causes maternal anaemia, hypoglycaemia, pulmonary oedema, abortion, stillbirth, low birth weight and placental sequestration; **the pregnant woman and the child under 5 are the two groups in whom uncomplicated malaria becomes severe fastest**.",
        "Vivax is no longer regarded as benign: severe vivax with ARDS, acute kidney injury, severe anaemia and splenic rupture is well documented in Indian series, and thrombocytopenia is as marked as in falciparum.",
      ],
    },
    {
      heading: "Diagnosis",
      points: [
        "**Microscopy of a thick and thin peripheral blood smear stained with Giemsa or JSB stain remains the gold standard** - the thick film detects parasites at low density and the thin film speciates and gives the parasite count.",
        "**Bivalent rapid diagnostic tests detecting HRP2 (falciparum-specific) and pan-species pLDH or aldolase are supplied free under NVBDCP** and are used by ASHAs and at subcentres; they need no electricity or microscope and give a result in 15-20 minutes.",
        "Limitations to quote: **HRP2 remains positive for 2-4 weeks after cure**, so it cannot be used to assess response; HRP2 deletions cause false negatives; and a negative RDT in a strongly suspicious patient must be followed by microscopy and by repeat smears 12-hourly for 48 hours.",
        "Quantify the parasitaemia in falciparum, since more than 10% infected red cells defines severe malaria and the count is used to follow the response to artesunate.",
        "Supporting investigations in the unwell patient: haemoglobin, platelet count (**thrombocytopenia is present in more than half of malaria and its absence should make you doubt the diagnosis**), capillary and laboratory glucose, creatinine, bilirubin, urine for haemoglobin, and arterial or venous blood gas for acidosis.",
        "Exclude co-infection: dengue, enteric fever, scrub typhus and leptospirosis coexist with malaria often enough that a positive smear does not close the file if the patient is not responding by 48-72 hours.",
      ],
    },
    {
      heading: "NVBDCP treatment of uncomplicated malaria",
      points: [
        "**P. vivax:** chloroquine 25 mg base/kg over three days - **10 mg/kg on day 1, 10 mg/kg on day 2 and 5 mg/kg on day 3** (adult 600, 600 then 300 mg base) - plus **primaquine 0.25 mg/kg once daily for 14 days** for radical cure of hypnozoites.",
        "**P. falciparum, all of India except the North-Eastern states:** **artesunate 4 mg/kg once daily for 3 days plus sulfadoxine-pyrimethamine 25/1.25 mg/kg as a single dose on day 1**, supplied as the co-blistered AS+SP pack, plus **primaquine 0.75 mg/kg as a single dose on day 2** as a gametocytocide.",
        "**P. falciparum in the North-Eastern states (Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland and Tripura):** **artemether-lumefantrine (AL) twice daily for 3 days** by age-band blister pack, because of documented resistance to sulfadoxine-pyrimethamine, plus single-dose primaquine 0.75 mg/kg on day 2.",
        "**Mixed infection:** treat as falciparum with a full 3-day ACT, and add **primaquine 0.25 mg/kg daily for 14 days** to eradicate vivax hypnozoites.",
        "**Primaquine is contraindicated in pregnancy, in infants under 1 year and in known G6PD deficiency**; screen or ask about a family history of jaundice after fava beans or sulpha drugs, warn the patient about dark urine, and stop the drug if it appears. Where G6PD status is unknown, weekly primaquine 0.75 mg/kg for 8 weeks under supervision is the alternative for vivax radical cure.",
        "**Malaria in pregnancy:** chloroquine is safe throughout for vivax (with primaquine deferred until after delivery and breastfeeding); for falciparum, **quinine in the first trimester and ACT in the second and third trimesters**. Artemether-lumefantrine is now also accepted in the first trimester by WHO where quinine is not tolerated.",
      ],
    },
    {
      heading: "Severe malaria: the parenteral regimens",
      points: [
        "**Intravenous artesunate is the drug of choice: 2.4 mg/kg intravenously (or intramuscularly) at 0, 12 and 24 hours, then once daily.** Children under 20 kg receive 3 mg/kg per dose. Artesunate reduced mortality by 34.7% compared with quinine in the SEAQUAMAT trial and by 22.5% in African children in AQUAMAT.",
        "Give **a minimum of 24 hours of parenteral therapy**, and continue until the patient can swallow; then complete treatment with a **full 3-day course of an oral ACT** (AS+SP or AL), never with artesunate monotherapy, which selects resistance.",
        "Alternatives where artesunate is unavailable: **artemether 3.2 mg/kg intramuscularly on day 1 then 1.6 mg/kg daily**, or **quinine dihydrochloride 20 mg salt/kg loading over 4 hours then 10 mg/kg 8-hourly** in 5% dextrose, watching for hypoglycaemia, cinchonism and QT prolongation. Do not give a quinine loading dose if the patient has taken quinine or mefloquine in the previous 24 hours.",
        "Supportive care decides survival: **check capillary glucose every 4 hours and treat hypoglycaemia with 25% dextrose**, control seizures with a benzodiazepine, transfuse for haemoglobin below 7 g/dL in adults or below 5 g/dL in children, manage acidosis and acute kidney injury with careful fluids and early dialysis, and nurse the comatose patient with attention to airway and pressure areas.",
        "**Avoid fluid overload** - do not give large boluses in severe malaria, since the FEAST trial showed harm from aggressive bolus fluid in African children with febrile shock; give judicious fluids guided by perfusion and urine output.",
        "**Post-artesunate delayed haemolysis** occurs 1-3 weeks after treatment in patients with high parasitaemia; check haemoglobin at 1 and 2 weeks after severe malaria and transfuse if needed.",
      ],
    },
    {
      heading: "Prevention, prophylaxis and programme",
      points: [
        "Vector control under NVBDCP: **indoor residual spraying, long-lasting insecticidal nets (LLIN) distributed free in high-burden districts, larvivorous fish, anti-larval measures and source reduction**; personal protection with nets, repellents and full-sleeved clothing at dusk and dawn when Anopheles bites.",
        "**Chemoprophylaxis for short-term travellers (under 6 weeks) to a high-risk area: doxycycline 100 mg daily**, started 2 days before travel and continued for 4 weeks after leaving. For long-term travellers, **mefloquine 250 mg weekly**, started 2 weeks before and continued 4 weeks after. Both are contraindicated in pregnancy, and chloroquine prophylaxis is obsolete in India.",
        "Free diagnosis and treatment are provided at all levels including through **ASHA workers, who are trained to use bivalent RDTs and to give the first dose of ACT in the village** - the backbone of the elimination programme.",
        "Malaria is a **notifiable disease** in most states; report every case to the district vector-borne disease control officer for case-based surveillance, active fever survey around the index case, and classification as indigenous or imported.",
        "**Screen every blood donor and every febrile returning traveller**, and remember that transfusion-transmitted, congenital and airport malaria all occur.",
        "Follow up every treated patient with a **repeat smear on day 3, day 7, day 14 and day 28** in programme settings; persistence of asexual parasitaemia on day 3 above 10% of the baseline count is the operational definition of suspected artemisinin partial resistance and must be reported.",
      ],
    },
  ],
  tables: [
    {
      heading: "NVBDCP drug policy: treatment by species",
      columns: ["Diagnosis", "Regimen", "Radical cure / gametocytocide"],
      rows: [
        ["P. vivax", "Chloroquine 25 mg base/kg over 3 days (10, 10, 5 mg/kg)", "Primaquine 0.25 mg/kg daily for 14 days"],
        ["P. falciparum (all India except NE states)", "Artesunate 4 mg/kg daily for 3 days + sulfadoxine-pyrimethamine 25/1.25 mg/kg single dose on day 1", "Primaquine 0.75 mg/kg single dose on day 2"],
        ["P. falciparum (North-Eastern states)", "Artemether-lumefantrine twice daily for 3 days by age-band blister", "Primaquine 0.75 mg/kg single dose on day 2"],
        ["Mixed vivax and falciparum", "Full 3-day ACT as for falciparum", "Primaquine 0.25 mg/kg daily for 14 days"],
        ["Severe malaria, any species", "IV artesunate 2.4 mg/kg at 0, 12, 24 h then daily (3 mg/kg if under 20 kg), minimum 24 h", "Complete with a full 3-day oral ACT once able to swallow"],
        ["Falciparum in first trimester of pregnancy", "Quinine 10 mg salt/kg three times daily for 7 days (ACT if quinine not tolerated)", "Primaquine contraindicated in pregnancy"],
      ],
    },
    {
      heading: "WHO criteria for severe malaria",
      columns: ["Domain", "Criterion"],
      rows: [
        ["Neurological", "Impaired consciousness or coma, more than 2 convulsions in 24 hours, prostration"],
        ["Metabolic", "Blood glucose below 40 mg/dL, acidosis (bicarbonate below 15 mmol/L or lactate above 5 mmol/L)"],
        ["Haematological", "Haemoglobin below 7 g/dL in adults or below 5 g/dL in children; significant bleeding; haemoglobinuria"],
        ["Renal and hepatic", "Creatinine above 3 mg/dL or urea above 20 mmol/L; bilirubin above 3 mg/dL with parasitaemia above 100,000/microlitre"],
        ["Cardiorespiratory", "Pulmonary oedema or oxygen saturation below 92% with respiratory rate above 30; shock with systolic BP below 80 mmHg"],
        ["Parasitological", "Parasitaemia above 10% of red cells"],
      ],
    },
  ],
  redFlags: [
    "Impaired consciousness, seizure or prostration in a patient with malaria - cerebral malaria, admit and start intravenous artesunate.",
    "Capillary glucose below 40 mg/dL - hypoglycaemia from the parasite, from quinine or from starvation; give 25% dextrose immediately.",
    "Cola-coloured urine with falling haemoglobin - blackwater fever with intravascular haemolysis and impending renal failure.",
    "Parasitaemia above 10%, or asexual parasites still present on day 3 - severe malaria or suspected artemisinin partial resistance.",
    "Breathlessness with hypoxia in falciparum malaria - ARDS or pulmonary oedema, which carries very high mortality.",
    "Malaria in pregnancy at any parasite density - admit, because deterioration is rapid and hypoglycaemia is common.",
    "Failure to defervesce by 48-72 hours on correct therapy - look for co-infection, a resistant strain, or an alternative diagnosis.",
  ],
  pearls: [
    "Test before you treat: a bivalent RDT or a smear is mandatory, and presumptive antimalarial therapy has no place under the elimination programme.",
    "HRP2 stays positive for 2-4 weeks after cure, so never use a rapid test to judge the response to treatment - use the smear.",
    "Thrombocytopenia is present in over half of malaria cases; a completely normal platelet count should make you question the diagnosis.",
    "Chloroquine treats the blood stage of vivax, primaquine for 14 days kills the hypnozoite - miss the primaquine and the patient relapses.",
    "Primaquine is forbidden in pregnancy, in infants under one year and in G6PD deficiency; warn every patient about dark urine.",
    "Artesunate monotherapy is never acceptable; always complete parenteral therapy with a full three-day oral ACT.",
    "In the seven North-Eastern states the falciparum regimen is artemether-lumefantrine, not AS+SP, because of sulfadoxine-pyrimethamine resistance.",
    "Check haemoglobin one and two weeks after severe malaria treated with artesunate to catch post-artesunate delayed haemolysis.",
  ],
  theory: [
    {
      id: "infectious-fever-malaria-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "Describe the diagnosis and treatment of malaria as per the National Vector Borne Disease Control Programme, including the management of severe malaria.",
      openingLines: [
        "Malaria is a protozoal illness caused by Plasmodium species and transmitted by the bite of an infected female Anopheles mosquito; in India P. vivax and P. falciparum account for virtually all disease.",
        "National policy is test, treat and track: every suspected case must be confirmed by rapid diagnostic test or microscopy, treated by species with the prescribed regimen, and followed up, with the country working towards elimination by 2030.",
      ],
      answer: [
        {
          heading: "1. Clinical suspicion",
          points: [
            "Fever with chills and rigors, headache, myalgia, vomiting; classical tertian periodicity is often absent and the fever may be continuous or irregular.",
            "Pallor, splenomegaly, jaundice and thrombocytopenia support the diagnosis; falciparum may mimic almost any acute illness including gastroenteritis, hepatitis and an acute abdomen.",
            "Take a travel and residence history for endemic districts, and consider transfusion-transmitted and congenital malaria.",
          ],
        },
        {
          heading: "2. Diagnosis",
          points: [
            "Microscopy of thick and thin films stained with Giemsa or JSB is the gold standard - the thick film for detection and the thin film for species and parasite count.",
            "Bivalent rapid diagnostic tests detecting HRP2 and pan-species pLDH are supplied free under NVBDCP and are used by ASHAs and subcentres.",
            "HRP2 remains positive for 2-4 weeks after cure so it cannot monitor response; a negative test with strong suspicion demands repeat smears 12-hourly for 48 hours.",
            "In the sick patient add haemoglobin, platelets, glucose, creatinine, bilirubin, blood gas and urine for haemoglobin.",
          ],
        },
        {
          heading: "3. Treatment of uncomplicated malaria",
          points: [
            "P. vivax: chloroquine 25 mg base/kg over 3 days as 10, 10 and 5 mg/kg, plus primaquine 0.25 mg/kg daily for 14 days for radical cure.",
            "P. falciparum in all of India except the North-East: artesunate 4 mg/kg daily for 3 days with sulfadoxine-pyrimethamine 25/1.25 mg/kg single dose on day 1, plus primaquine 0.75 mg/kg single dose on day 2.",
            "P. falciparum in the seven North-Eastern states: artemether-lumefantrine twice daily for 3 days by age-band pack, plus single-dose primaquine.",
            "Mixed infection: full 3-day ACT plus primaquine 0.25 mg/kg for 14 days.",
            "Primaquine is contraindicated in pregnancy, in infants under 1 year and in G6PD deficiency; in pregnancy use chloroquine for vivax, quinine in the first trimester and ACT thereafter for falciparum.",
          ],
        },
        {
          heading: "4. Severe malaria",
          points: [
            "Define severity by the WHO criteria: impaired consciousness, prostration, repeated convulsions, acidosis, hypoglycaemia, severe anaemia, renal impairment, jaundice with high parasitaemia, pulmonary oedema, bleeding, shock or parasitaemia above 10%.",
            "Intravenous artesunate 2.4 mg/kg at 0, 12 and 24 hours and then daily (3 mg/kg per dose if under 20 kg) is the drug of choice, given for a minimum of 24 hours and until oral therapy is possible.",
            "Complete with a full 3-day oral ACT; alternatives are intramuscular artemether or intravenous quinine 20 mg salt/kg loading then 10 mg/kg 8-hourly.",
            "Supportive care: 4-hourly capillary glucose with 25% dextrose for hypoglycaemia, benzodiazepine for seizures, transfusion for haemoglobin below 7 g/dL, careful fluid balance avoiding boluses, dialysis for acute kidney injury, and airway care in coma.",
            "Watch for post-artesunate delayed haemolysis at 1-3 weeks and recheck the haemoglobin.",
          ],
        },
        {
          heading: "5. Prevention and programme measures",
          points: [
            "Indoor residual spraying, free long-lasting insecticidal nets in high-burden districts, larvivorous fish and anti-larval measures, and personal protection at dusk and dawn.",
            "Chemoprophylaxis for travellers: doxycycline 100 mg daily for short stays, mefloquine 250 mg weekly for longer stays, with the appropriate lead-in and follow-on periods.",
            "Case notification to the district vector-borne disease control officer, active fever surveys around an index case, and classification as indigenous or imported under the National Framework for Malaria Elimination 2016-2030.",
            "Follow-up smears on days 3, 7, 14 and 28; day 3 asexual parasitaemia above 10% of baseline triggers a report of suspected artemisinin partial resistance.",
          ],
        },
      ],
      mustDraw: [
        "A table of species against NVBDCP regimen with doses, including the North-East exception.",
        "A list of the WHO severe malaria criteria grouped by system.",
      ],
      markSplit: [
        { part: "Clinical features and suspicion", marks: 1.5 },
        { part: "Diagnosis with the limitations of RDT", marks: 2 },
        { part: "Species-wise NVBDCP regimens with doses", marks: 3 },
        { part: "Severe malaria criteria and artesunate regimen", marks: 2.5 },
        { part: "Prevention, prophylaxis and programme", marks: 1 },
      ],
      keywords: ["NVBDCP", "artesunate", "chloroquine primaquine", "severe malaria", "artemether-lumefantrine", "G6PD"],
    },
    {
      id: "infectious-fever-malaria-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on cerebral malaria.",
      openingLines: [
        "Cerebral malaria is defined as unrousable coma persisting for more than 30 minutes after a seizure in a patient with asexual Plasmodium falciparum parasitaemia, with no other identifiable cause of encephalopathy.",
        "It is the commonest fatal complication of falciparum malaria, with a mortality of 15-20% even when treated and higher when treatment is delayed.",
      ],
      answer: [
        {
          heading: "Pathogenesis and clinical features",
          points: [
            "Cytoadherence of parasitised red cells to cerebral capillary endothelium through PfEMP1 with rosetting and sequestration, causing microvascular obstruction, hypoxia and cytokine release.",
            "Onset may be gradual with headache and drowsiness, or abrupt with a generalised seizure followed by coma; children deteriorate faster than adults.",
            "Examination: coma with symmetrical upper motor neurone signs, dysconjugate gaze, bruxism, retinal haemorrhages and retinal whitening on fundoscopy, but **no neck stiffness and no photophobia**, which helps distinguish it from meningitis.",
            "Frequent coexisting features are hypoglycaemia, lactic acidosis, severe anaemia, acute kidney injury and pulmonary oedema.",
          ],
        },
        {
          heading: "Investigation",
          points: [
            "Immediate capillary glucose in every comatose febrile patient before anything else.",
            "Thick and thin smears with parasite count, and a rapid diagnostic test; repeat smears if the first is negative and suspicion remains.",
            "Haemoglobin, platelets, creatinine, bilirubin, electrolytes, blood gas or bicarbonate for acidosis, and blood culture.",
            "Lumbar puncture where meningitis cannot be excluded, once coagulopathy and raised intracranial pressure have been considered; CSF in pure cerebral malaria is essentially normal or shows a mildly raised protein.",
          ],
        },
        {
          heading: "Management",
          points: [
            "Intravenous artesunate 2.4 mg/kg at 0, 12 and 24 hours then daily, for at least 24 hours, followed by a full 3-day oral ACT when the patient can swallow.",
            "Treat hypoglycaemia with 25% dextrose and repeat 4-hourly glucose monitoring; control seizures with intravenous lorazepam or diazepam and treat any precipitant.",
            "Nurse in the lateral position with airway protection, catheterise, monitor fluid balance strictly avoiding overload, transfuse for severe anaemia, and start dialysis early for renal failure.",
            "**Do not give steroids, mannitol routinely, heparin or adrenaline** - all have been shown to be useless or harmful in cerebral malaria.",
            "Expect neurological sequelae in about 10% of children (ataxia, hemiparesis, cortical blindness, epilepsy) and arrange follow-up.",
          ],
        },
      ],
      mustDraw: ["A table separating cerebral malaria from pyogenic meningitis on neck stiffness, CSF, fundus and smear."],
      markSplit: [
        { part: "Definition and pathogenesis", marks: 1 },
        { part: "Clinical features and differentiation from meningitis", marks: 1.5 },
        { part: "Investigation", marks: 1 },
        { part: "Artesunate regimen and supportive care with the do-nots", marks: 1.5 },
      ],
      keywords: ["cerebral malaria", "sequestration", "artesunate", "hypoglycaemia", "no neck stiffness"],
    },
    {
      id: "infectious-fever-malaria-t3",
      paper: "II",
      kind: "differentiate",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Differentiate between Plasmodium vivax and Plasmodium falciparum malaria with respect to clinical features, laboratory findings, complications and treatment.",
      openingLines: [
        "Both species are transmitted by the female Anopheles mosquito and both are common in India, but they differ in the stage of red cell they invade, in their capacity to sequester, and in whether they form hypnozoites.",
        "The distinction determines the drug regimen under the national programme and the need for radical cure.",
      ],
      answer: [
        {
          heading: "Parasitological and clinical differences",
          points: [
            "Vivax invades only reticulocytes so parasitaemia stays low (rarely above 2%); falciparum invades red cells of all ages and parasitaemia can exceed 10%.",
            "Vivax forms hypnozoites in the liver and relapses after weeks to months; falciparum has no hypnozoite and recurrence is recrudescence or reinfection.",
            "Falciparum sequesters in deep capillaries through knob-mediated cytoadherence, so only ring forms are usually seen in the peripheral smear and gametocytes are banana-shaped; vivax shows all stages with Schuffner dots and an enlarged pale red cell.",
            "Vivax typically causes a benign tertian fever with marked rigors; falciparum has a more irregular fever and is the great mimic.",
          ],
        },
        {
          heading: "Complications",
          points: [
            "Falciparum causes cerebral malaria, acute kidney injury, ARDS, blackwater fever, severe anaemia, hypoglycaemia, acidosis and death.",
            "Vivax was traditionally called benign but severe vivax with ARDS, acute kidney injury, severe anaemia and splenic rupture is well recognised in Indian series, and thrombocytopenia is equally common.",
            "Splenic rupture is more characteristic of vivax; placental sequestration and low birth weight are characteristic of falciparum.",
          ],
        },
        {
          heading: "Treatment under NVBDCP",
          points: [
            "Vivax: chloroquine 25 mg base/kg over 3 days plus primaquine 0.25 mg/kg daily for 14 days for radical cure.",
            "Falciparum: artesunate 4 mg/kg daily for 3 days with sulfadoxine-pyrimethamine on day 1 (artemether-lumefantrine in the North-Eastern states), plus single-dose primaquine 0.75 mg/kg on day 2 as a gametocytocide.",
            "Severe disease of either species: intravenous artesunate 2.4 mg/kg at 0, 12 and 24 hours and then daily, completed with a full oral ACT course.",
            "Chloroquine resistance is widespread in falciparum in India, which is why it is no longer used for that species, while vivax remains largely chloroquine-sensitive.",
          ],
        },
      ],
      mustDraw: ["A four-column table: feature, P. vivax, P. falciparum, and the practical implication."],
      markSplit: [
        { part: "Parasitological and smear differences", marks: 1.5 },
        { part: "Clinical features and complications", marks: 1.5 },
        { part: "Treatment regimens including radical cure", marks: 2 },
      ],
      keywords: ["vivax", "falciparum", "hypnozoite", "sequestration", "radical cure", "Schuffner dots"],
    },
  ],
  mcqs: [
    {
      id: "infectious-fever-malaria-q1",
      stem: "A 28-year-old labourer in Raipur has fever with rigors for 3 days. A bivalent rapid test is positive for P. falciparum and the smear confirms it with a parasitaemia of 2%. He is fully conscious, eating, with normal renal function and haemoglobin 11 g/dL. What is the correct treatment?",
      options: [
        "Chloroquine 25 mg base/kg over 3 days plus primaquine for 14 days",
        "Artesunate 4 mg/kg daily for 3 days with sulfadoxine-pyrimethamine on day 1, plus primaquine 0.75 mg/kg single dose on day 2",
        "Intravenous artesunate 2.4 mg/kg at 0, 12 and 24 hours",
        "Artemether-lumefantrine twice daily for 3 days",
        "Oral quinine 600 mg three times daily for 7 days with doxycycline",
      ],
      answer: 1,
      explanation:
        "This is uncomplicated falciparum malaria in Chhattisgarh, which lies outside the North-Eastern states, so the NVBDCP regimen is the co-blistered AS+SP pack with a single gametocytocidal dose of primaquine on day 2. Chloroquine plus 14 days of primaquine is the vivax regimen and would fail against widely chloroquine-resistant falciparum. Intravenous artesunate is reserved for severe malaria, which he does not have. Artemether-lumefantrine is the correct choice only in the seven North-Eastern states, and quinine with doxycycline is a second-line option, not first-line policy.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-malaria-q2",
      stem: "A 35-year-old man is treated for P. vivax malaria with a full course of chloroquine and becomes afebrile. He returns 10 weeks later with the same illness and a smear again showing P. vivax. What is the most likely reason?",
      options: [
        "Chloroquine resistance in P. vivax",
        "Reinfection from a new mosquito bite",
        "Relapse from hepatic hypnozoites because radical cure with primaquine was not given",
        "Recrudescence from persisting erythrocytic forms",
        "Misidentification of the species on the original smear",
      ],
      answer: 2,
      explanation:
        "P. vivax forms dormant hypnozoites in hepatocytes, and chloroquine kills only the blood stage, so without 14 days of primaquine a relapse at 6-12 weeks is expected and is by far the commonest explanation. Chloroquine resistance in Indian vivax is still uncommon and would have caused failure to clear the initial parasitaemia rather than a clean recovery followed by relapse. Reinfection is possible but far less likely than relapse in this timeframe, and recrudescence describes persistence of erythrocytic forms after incomplete blood-stage treatment, which would present much sooner.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-malaria-q3",
      stem: "An 8-year-old boy weighing 18 kg is brought unconscious with a Glasgow Coma Scale of 8, a temperature of 40 C, and a smear showing P. falciparum with 12% parasitaemia. Capillary glucose is 34 mg/dL. Which sequence is correct?",
      options: [
        "Give intravenous quinine loading dose, then correct the glucose",
        "Give 25% dextrose immediately, then intravenous artesunate 3 mg/kg at 0, 12 and 24 hours",
        "Give intravenous artesunate 2.4 mg/kg and mannitol for cerebral oedema",
        "Start oral artemether-lumefantrine through a nasogastric tube",
        "Give intravenous dexamethasone followed by artesunate",
      ],
      answer: 1,
      explanation:
        "Hypoglycaemia must be corrected at once in any comatose febrile patient, and then intravenous artesunate is given, dosed at 3 mg/kg per dose for children under 20 kg rather than the adult 2.4 mg/kg. Quinine is an inferior alternative that itself causes hyperinsulinaemic hypoglycaemia, and correcting glucose after starting it is the wrong order. Mannitol has not been shown to help cerebral malaria and may harm. Oral therapy is inadequate for severe malaria with impaired consciousness, and steroids increase the duration of coma and gastrointestinal bleeding in trials.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-malaria-q4",
      stem: "A pregnant woman at 10 weeks gestation is diagnosed with uncomplicated P. falciparum malaria in Odisha. Which treatment is most appropriate?",
      options: [
        "Artesunate plus sulfadoxine-pyrimethamine for 3 days",
        "Quinine 10 mg salt/kg three times daily for 7 days",
        "Chloroquine 25 mg base/kg over 3 days plus primaquine for 14 days",
        "Primaquine 0.75 mg/kg single dose only",
        "Doxycycline 100 mg twice daily for 7 days",
      ],
      answer: 1,
      explanation:
        "Indian national policy uses quinine for falciparum malaria in the first trimester, reserving artemisinin combination therapy for the second and third trimesters, although WHO now also accepts artemether-lumefantrine in the first trimester where quinine cannot be used. Chloroquine does not treat falciparum in India because of resistance, and primaquine is absolutely contraindicated in pregnancy because of the risk of fetal haemolysis. Doxycycline is contraindicated in pregnancy and is in any case only a partner drug, never monotherapy.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-malaria-q5",
      stem: "A patient completed a full course of treatment for falciparum malaria 10 days ago and is now well. A repeat bivalent rapid diagnostic test is still positive for HRP2, but the peripheral smear shows no parasites. What is the correct interpretation?",
      options: [
        "Treatment failure requiring a second-line regimen",
        "Persisting HRP2 antigen after cure, which can last 2-4 weeks; no further antimalarial is needed",
        "Mixed infection with P. vivax",
        "Laboratory error in the smear",
        "Recrudescence requiring intravenous artesunate",
      ],
      answer: 1,
      explanation:
        "HRP2 antigen persists in the blood for two to four weeks after successful clearance of parasites, so a positive rapid test with a negative smear in a well patient means residual antigen and nothing more - this is precisely why rapid tests must not be used to assess treatment response. Treatment failure and recrudescence would be accompanied by fever and by asexual parasites on the smear. A mixed infection would show vivax forms microscopically, and there is no reason to invoke laboratory error when the finding has a well-known physiological explanation.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-malaria-q6",
      stem: "A 25-year-old man is to receive primaquine for radical cure of vivax malaria. Which single piece of information most changes your prescription?",
      options: [
        "A history of jaundice and dark urine after taking a sulpha drug in childhood",
        "A history of penicillin allergy",
        "A body weight of 70 kg",
        "A history of chloroquine use last year",
        "A family history of hypertension",
      ],
      answer: 0,
      explanation:
        "Jaundice with dark urine after a sulphonamide or after fava beans is a strong pointer to G6PD deficiency, in which primaquine causes severe oxidative haemolysis; the drug must then be withheld or given as a supervised weekly regimen of 0.75 mg/kg for 8 weeks. Penicillin allergy and hypertension have no bearing on primaquine. Body weight determines the dose but not whether the drug can be used, and previous chloroquine exposure does not contraindicate primaquine.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "infectious-fever-malaria-c1",
      front: "NVBDCP regimen for uncomplicated P. vivax malaria.",
      back: "Chloroquine 25 mg base/kg over 3 days (10, 10, 5 mg/kg) plus primaquine 0.25 mg/kg daily for 14 days for radical cure.",
    },
    {
      id: "infectious-fever-malaria-c2",
      front: "NVBDCP regimen for uncomplicated P. falciparum outside the North-East.",
      back: "Artesunate 4 mg/kg daily for 3 days plus sulfadoxine-pyrimethamine 25/1.25 mg/kg single dose on day 1, plus primaquine 0.75 mg/kg single dose on day 2.",
    },
    {
      id: "infectious-fever-malaria-c3",
      front: "Why is the falciparum regimen different in the seven North-Eastern states?",
      back: "Sulfadoxine-pyrimethamine resistance; artemether-lumefantrine twice daily for 3 days is used instead, with single-dose primaquine.",
    },
    {
      id: "infectious-fever-malaria-c4",
      front: "Intravenous artesunate dose in severe malaria.",
      back: "2.4 mg/kg IV at 0, 12 and 24 hours then once daily (3 mg/kg per dose if under 20 kg). Minimum 24 hours, then complete with a full 3-day oral ACT.",
    },
    {
      id: "infectious-fever-malaria-c5",
      front: "Define cerebral malaria.",
      back: "Unrousable coma persisting more than 30 minutes after a seizure, with asexual P. falciparum parasitaemia and no other cause. No neck stiffness or photophobia.",
    },
    {
      id: "infectious-fever-malaria-c6",
      front: "Three contraindications to primaquine.",
      back: "Pregnancy, infants under 1 year, and G6PD deficiency. Where G6PD status is unknown, weekly 0.75 mg/kg for 8 weeks under supervision.",
    },
    {
      id: "infectious-fever-malaria-c7",
      front: "Why can a rapid diagnostic test not be used to monitor treatment response?",
      back: "HRP2 antigen persists for 2-4 weeks after cure. Use the peripheral smear to judge response.",
    },
    {
      id: "infectious-fever-malaria-c8",
      front: "Falciparum malaria in pregnancy: which drug in which trimester?",
      back: "Quinine in the first trimester (WHO now also allows artemether-lumefantrine); artemisinin combination therapy in the second and third. Primaquine never.",
    },
    {
      id: "infectious-fever-malaria-c9",
      front: "Name four WHO criteria for severe malaria.",
      back: "Impaired consciousness, glucose below 40 mg/dL, haemoglobin below 7 g/dL in adults, creatinine above 3 mg/dL. Also acidosis, pulmonary oedema, bleeding, shock, parasitaemia above 10%.",
    },
    {
      id: "infectious-fever-malaria-c10",
      front: "Malaria chemoprophylaxis for a 3-week trip to a high-risk district.",
      back: "Doxycycline 100 mg daily, starting 2 days before travel and continuing 4 weeks after leaving. Mefloquine 250 mg weekly for longer stays.",
    },
    {
      id: "infectious-fever-malaria-c11",
      front: "What is post-artesunate delayed haemolysis?",
      back: "Haemolytic anaemia 1-3 weeks after artesunate for high parasitaemia. Recheck haemoglobin at 1 and 2 weeks and transfuse if required.",
    },
    {
      id: "infectious-fever-malaria-c12",
      front: "India's malaria elimination target.",
      back: "National Framework for Malaria Elimination 2016-2030: zero indigenous cases by 2027 and elimination certification by 2030.",
    },
  ],
  references: [
    "National Drug Policy on Malaria, NVBDCP / NCVBDC, MoHFW, 2013 with subsequent updates",
    "National Framework for Malaria Elimination in India 2016-2030, MoHFW",
    "WHO Guidelines for Malaria, 2023 update",
    "Guidelines for Diagnosis and Treatment of Malaria in India, NIMR-ICMR, 2014",
    "API Textbook of Medicine, 11th edition, 2019 - malaria",
  ],
});

topics.push({
  id: "infectious-fever-enteric-fever",
  title: "Enteric fever: diagnosis, drug resistance and typhoid vaccines",
  oneLiner:
    "Enteric fever is a systemic illness caused by Salmonella enterica serovar Typhi or Paratyphi acquired through faecally contaminated food and water, diagnosed by blood culture rather than by the Widal test, and now treated with azithromycin or a third-generation cephalosporin because fluoroquinolone resistance is near universal in India.",
  frequency: "core",
  keywords: [
    "typhoid",
    "Salmonella Typhi",
    "Salmonella Paratyphi A",
    "Widal test",
    "blood culture",
    "azithromycin",
    "ceftriaxone",
    "cefixime",
    "MDR typhoid",
    "XDR typhoid",
    "H58 haplotype",
    "intestinal perforation",
    "chronic carrier",
    "Typbar-TCV",
    "typhoid conjugate vaccine",
    "relative bradycardia",
  ],
  sections: [
    {
      heading: "Organism, transmission and burden",
      points: [
        "Enteric fever is caused by **Salmonella enterica serovar Typhi and, in about 20-25% of Indian cases, serovar Paratyphi A**; both are human-restricted organisms transmitted by the faecal-oral route through contaminated water, ice, street food, cut fruit and salads.",
        "The infective dose is high, so **transmission requires substantial faecal contamination** - which is why enteric fever is a marker of failed water supply and sanitation, and why it clusters in urban slums and during summer before the monsoon.",
        "India carries one of the world's largest burdens; **community-based studies such as the NSSEFI (National Surveillance System for Enteric Fever in India) estimate incidence of several hundred cases per 100,000 child-years in urban slums**, with the peak in children aged 2-15 years.",
        "**Incubation is 7-14 days** (range 3-60 days depending on inoculum). The organism invades Peyer patches, multiplies in mesenteric nodes, and causes a primary and then a secondary bacteraemia, which is why blood culture yield is highest in the first week.",
        "About **1-4% of patients become chronic carriers**, excreting organisms for more than a year, usually from a chronically infected gall bladder often containing gallstones; the classic example is Mary Mallon, and in India the carrier cook remains a genuine cause of household and canteen outbreaks.",
        "**Untreated typhoid has a case fatality of 10-20%, which falls below 1% with appropriate antibiotics** - the largest single benefit of correct antimicrobial therapy in tropical medicine.",
      ],
    },
    {
      heading: "Clinical course week by week",
      points: [
        "**Week 1:** a step-ladder rise in fever with headache, malaise, anorexia, dry cough, and often constipation in adults or diarrhoea in children. **Relative bradycardia (Faget sign)** may be present. Blood culture is positive in 60-80% at this stage.",
        "**Week 2:** sustained high fever with toxic look, coated tongue with clean red edges, abdominal distension and tenderness, soft splenomegaly and hepatomegaly. **Rose spots** - crops of 2-4 mm blanching pink macules on the trunk - are described in 5-30% of patients but are very hard to see on Indian skin.",
        "**Week 3:** the week of complications - **intestinal haemorrhage and perforation of the terminal ileum**, typhoid encephalopathy with the coma-vigil or muttering delirium described as the typhoid state, myocarditis, and shock.",
        "**Week 4 and beyond:** gradual defervescence and convalescence; **relapse occurs in 5-10%** usually 1-3 weeks after stopping antibiotics and is generally milder.",
        "Other complications to know: acute cholecystitis, hepatitis, osteomyelitis (particularly in sickle cell disease), meningitis in infants, nephritis, arthritis, deep vein thrombosis and haemophagocytic lymphohistiocytosis.",
        "**Sudden severe abdominal pain with guarding, absent liver dullness and a rising pulse in the third week of a fever is ileal perforation until proved otherwise** - it needs an erect abdominal film, resuscitation and urgent surgical referral.",
      ],
    },
    {
      heading: "Diagnosis: culture, not serology",
      points: [
        "**Blood culture is the gold standard.** Take **10-15 mL of blood in adults (2-4 mL in children) into 45-90 mL of broth, ideally two sets before any antibiotic**; yield is 60-80% in week 1 falling to 30-40% by week 3, and falls sharply after even one dose of antibiotic.",
        "**Bone marrow culture is the most sensitive test (80-95%) and stays positive despite prior antibiotics**, and is the answer when a partially treated patient must be diagnosed. Stool and urine cultures become positive from week 2-3 and are used to detect carriers.",
        "**The Widal test is a poor test in India.** It measures agglutinins to the O and H antigens, needs paired sera 7-10 days apart showing a fourfold rise, and a single titre is confounded by past infection, prior vaccination and cross-reacting infections. A single high O titre may support the diagnosis in a non-endemic setting, but **it must never be the sole basis for treatment**.",
        "Rapid tests such as Typhidot, Typhidot-M and Tubex TF detect IgM and are quicker but have **sensitivity and specificity of only about 70-80%** and do not replace culture; they are acceptable only where culture is unavailable, and always with the result interpreted against the clinical picture.",
        "Supportive laboratory findings: **normal or low leucocyte count with a left shift, relative lymphopenia, eosinopenia (aneosinophilia is characteristic), mild thrombocytopenia, and transaminases raised two to three times normal**.",
        "Molecular tests (nested PCR for flagellin or other targets) have good sensitivity in research settings but are not standardised for routine use, and **the practical rule remains: send the culture before the first dose of antibiotic**.",
      ],
    },
    {
      heading: "Antimicrobial resistance and current treatment",
      points: [
        "The resistance story in three steps: **classical MDR typhoid** (resistant to chloramphenicol, ampicillin and cotrimoxazole) emerged in the 1990s with the H58 haplotype; then **fluoroquinolone non-susceptibility became near-universal in India**; and since 2016 **XDR typhoid** (additionally resistant to third-generation cephalosporins) has spread from Sindh in Pakistan, with imported cases reported in India.",
        "**Fluoroquinolones must no longer be used empirically for enteric fever in India.** Nalidixic acid resistance or an MIC of ciprofloxacin of 0.12 microgram/mL or more predicts clinical failure even when the laboratory reports the isolate as sensitive by old breakpoints.",
        "**Uncomplicated enteric fever, outpatient:** **azithromycin 500 mg to 1 g PO once daily for 7 days** in adults, or **20 mg/kg once daily (maximum 1 g) for 7 days** in children; alternative **cefixime 20 mg/kg/day in two divided doses (adult 200 mg BD) for 14 days**, which defervesces more slowly.",
        "**Complicated or hospitalised patients:** **ceftriaxone 2 g IV once daily in adults, or 75-100 mg/kg/day in children, for 10-14 days**; add azithromycin where response is slow or XDR is suspected. Meropenem is reserved for proven XDR disease.",
        "**Severe typhoid with shock, altered sensorium or the typhoid state:** add **dexamethasone 3 mg/kg IV as a loading dose, then 1 mg/kg 6-hourly for 48 hours (8 doses)**, which reduced mortality from 55% to 10% in the classic Hoffman trial.",
        "**Defervescence is slow - expect 3-5 days on an appropriate drug**, so do not switch antibiotics on day 2 for continuing fever. Persistent fever beyond 7 days should prompt a search for a complication, an abscess, or a resistant organism rather than reflex escalation.",
      ],
    },
    {
      heading: "Supportive care, carriers and follow-up",
      points: [
        "Supportive care: **antipyretics (paracetamol), oral or intravenous hydration, a soft low-residue diet, and careful attention to abdominal signs**. Avoid purgatives, enemas and NSAIDs, all of which increase the risk of perforation and bleeding.",
        "Nurse with enteric precautions - handwashing, safe disposal of stool, and separate utensils - and **exclude food handlers, cooks and health workers from work until three consecutive stool cultures taken at least 24 hours apart are negative**.",
        "**Chronic carriage** is defined as excretion of Salmonella Typhi in stool or urine for more than 12 months after the acute illness. Treat with **ciprofloxacin 750 mg twice daily for 28 days, or high-dose amoxicillin, or azithromycin**, with **cholecystectomy** reserved for those with gallstones and persistent excretion after antibiotic therapy.",
        "**Vaccines available in India:** the **Vi polysaccharide vaccine** (single 0.5 mL intramuscular dose, licensed from 2 years, protection about 55-70% for 3 years, needs revaccination every 3 years) and the **typhoid conjugate vaccine (Typbar-TCV, Vi conjugated to tetanus toxoid, WHO prequalified in 2018)**, which is given as a **single 0.5 mL intramuscular dose from 6 months of age** and provides better and longer protection with immunological memory.",
        "The **Indian Academy of Pediatrics recommends TCV at 9-12 months of age with a booster at 4-6 years**; it has been introduced in the routine programme in some states and cities and is offered in campaigns, and it is the vaccine of choice for travellers, household contacts and outbreak control.",
        "Prevention beyond vaccines is water, sanitation and hygiene: **safe drinking water (boiling, chlorination, filtration), safe food handling, handwashing, and avoiding cut fruit, ice and salads from street vendors**. Notification of clusters allows the district team to trace the water source.",
      ],
    },
  ],
  tables: [
    {
      heading: "Diagnostic tests in enteric fever",
      columns: ["Test", "Sensitivity and timing", "Comment"],
      rows: [
        ["Blood culture", "60-80% in week 1, falling to 30-40% by week 3", "Gold standard; 10-15 mL adult sample, two sets, before antibiotics"],
        ["Bone marrow culture", "80-95%, remains positive after antibiotics", "Test of choice in the partially treated patient"],
        ["Stool and urine culture", "Positive from week 2-3", "Used mainly to detect carriers and clear food handlers"],
        ["Widal test", "Paired sera, fourfold rise needed", "Single titre unreliable in an endemic country; never the sole basis for treatment"],
        ["Typhidot / Tubex IgM", "About 70-80% sensitivity and specificity", "Rapid but not confirmatory; use only where culture is unavailable"],
      ],
    },
    {
      heading: "Antibiotic regimens for enteric fever",
      columns: ["Setting", "Drug and dose", "Duration"],
      rows: [
        ["Uncomplicated, adult outpatient", "Azithromycin 500 mg-1 g PO once daily", "7 days"],
        ["Uncomplicated, child", "Azithromycin 20 mg/kg PO once daily (max 1 g)", "7 days"],
        ["Uncomplicated alternative", "Cefixime 20 mg/kg/day PO in 2 doses (adult 200 mg BD)", "14 days"],
        ["Hospitalised or complicated", "Ceftriaxone 2 g IV once daily (75-100 mg/kg/day in children)", "10-14 days"],
        ["Suspected or proven XDR typhoid", "Meropenem 1 g IV 8-hourly with or without azithromycin", "10-14 days"],
        ["Severe typhoid with shock or altered sensorium", "Add dexamethasone 3 mg/kg IV then 1 mg/kg 6-hourly", "48 hours (8 doses)"],
        ["Chronic carrier", "Ciprofloxacin 750 mg PO twice daily (or high-dose amoxicillin, or azithromycin)", "28 days; cholecystectomy if gallstones and failure"],
      ],
    },
    {
      heading: "Typhoid vaccines available in India",
      columns: ["Vaccine", "Age and schedule", "Protection"],
      rows: [
        ["Vi polysaccharide", "2 years and above, single 0.5 mL IM, revaccinate every 3 years", "About 55-70% for 3 years; no immune memory, not for under-2s"],
        ["Typhoid conjugate vaccine (Typbar-TCV)", "6 months and above, single 0.5 mL IM; IAP advises 9-12 months with a booster at 4-6 years", "Higher and longer-lasting efficacy with immunological memory; WHO prequalified 2018"],
        ["Ty21a oral live", "Not routinely marketed in India; 3-4 capsules on alternate days", "Contraindicated in immunosuppression and with concurrent antibiotics"],
      ],
    },
  ],
  redFlags: [
    "Sudden severe abdominal pain with guarding, rigidity and absent liver dullness in week 3 of fever - ileal perforation, resuscitate and refer for surgery.",
    "Melaena or haematochezia with a falling haemoglobin - intestinal haemorrhage from an ulcerated Peyer patch.",
    "Altered sensorium, muttering delirium, coma-vigil or shock - severe typhoid needing dexamethasone and intensive care.",
    "Persistent fever beyond 7 days of an appropriate antibiotic - look for abscess, cholecystitis, osteomyelitis or a resistant organism, and re-culture.",
    "Enteric fever acquired in or after travel to Pakistan, or failure on a third-generation cephalosporin - suspect XDR typhoid and use meropenem.",
    "A food handler or cook diagnosed with enteric fever - exclude from work until three consecutive negative stool cultures.",
    "Relapse of fever 1-3 weeks after completing treatment - re-culture and re-treat; do not assume it is a new infection.",
  ],
  pearls: [
    "Blood culture before the first dose of antibiotic is the single most valuable action in a suspected enteric fever.",
    "A single Widal titre does not diagnose typhoid in India; treat the culture, not the serology.",
    "Fluoroquinolones are no longer empirical therapy for enteric fever in India - azithromycin or a third-generation cephalosporin is the answer.",
    "Defervescence takes 3-5 days even on the right drug; do not change the antibiotic on day 2.",
    "Relative bradycardia, aneosinophilia and a normal or low white count with a fever in the second week is enteric fever until cultured otherwise.",
    "Week 3 is the week of perforation; a rigid abdomen in a febrile patient at that stage is a surgical emergency, not a dose escalation.",
    "Bone marrow culture is the test that rescues the diagnosis in a patient already given antibiotics.",
    "Typbar-TCV can be given from 6 months of age as a single dose and is the vaccine to recommend, since the Vi polysaccharide vaccine cannot protect under-twos.",
  ],
  theory: [
    {
      id: "infectious-fever-enteric-fever-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 19-year-old college student presents with continuous fever of 10 days duration, abdominal discomfort and constipation. Discuss the clinical evaluation, investigations, treatment and prevention of enteric fever, with reference to current antimicrobial resistance in India.",
      openingLines: [
        "Enteric fever is a systemic febrile illness caused by Salmonella enterica serovar Typhi or Paratyphi, acquired through faecally contaminated food and water, with an incubation period of 7-14 days.",
        "The clinical priorities are to confirm the diagnosis by culture before starting an antibiotic, to detect the complications of the third week, and to choose a drug that is still active given near-universal fluoroquinolone resistance in India.",
      ],
      answer: [
        {
          heading: "1. Clinical evaluation",
          points: [
            "History of a step-ladder fever, headache, anorexia, dry cough, constipation in adults or diarrhoea in children; source history of street food, cut fruit, ice, unsafe water, and a similar illness in the household.",
            "Examination: toxic appearance, relative bradycardia, coated tongue with clean edges, abdominal distension and tenderness, soft splenomegaly and hepatomegaly, and rose spots on the trunk.",
            "Assess for the complications of week 3: abdominal rigidity and absent liver dullness suggesting perforation, melaena suggesting haemorrhage, and altered sensorium suggesting the typhoid state or encephalopathy.",
            "Differential diagnosis: malaria, scrub typhus, leptospirosis, dengue, tuberculosis, amoebic liver abscess, infective endocarditis and brucellosis.",
          ],
        },
        {
          heading: "2. Investigations",
          points: [
            "Blood culture is the gold standard - 10-15 mL of blood in adults into 45-90 mL of broth, two sets, drawn before any antibiotic; yield 60-80% in the first week.",
            "Bone marrow culture where the patient has already received antibiotics, since it retains a sensitivity of 80-95%.",
            "Stool and urine cultures from week 2, principally to identify carriers and to clear food handlers.",
            "Supportive findings: normal or low leucocyte count with left shift, aneosinophilia, relative lymphopenia, mild thrombocytopenia and transaminases two to three times normal.",
            "The Widal test requires paired sera with a fourfold rise and is confounded by past infection and vaccination; a single titre must not drive treatment. Typhidot and Tubex are rapid but only 70-80% sensitive and specific.",
          ],
        },
        {
          heading: "3. Antimicrobial resistance in India",
          points: [
            "Multidrug-resistant typhoid (chloramphenicol, ampicillin and cotrimoxazole resistant) emerged with the H58 haplotype in the 1990s.",
            "Fluoroquinolone non-susceptibility is now near universal; nalidixic acid resistance or a ciprofloxacin MIC of 0.12 microgram/mL or more predicts clinical failure despite an apparently sensitive report.",
            "Extensively drug-resistant (XDR) typhoid, additionally resistant to third-generation cephalosporins, emerged in Sindh in 2016 and has been imported into India; it requires azithromycin or meropenem.",
          ],
        },
        {
          heading: "4. Treatment",
          points: [
            "Uncomplicated disease: azithromycin 500 mg to 1 g orally once daily for 7 days in adults, or 20 mg/kg once daily in children; alternatively cefixime 20 mg/kg/day in two doses for 14 days.",
            "Hospitalised or complicated disease: ceftriaxone 2 g intravenously once daily, or 75-100 mg/kg/day in children, for 10-14 days.",
            "Severe disease with shock or altered sensorium: dexamethasone 3 mg/kg intravenously as a loading dose then 1 mg/kg 6-hourly for 48 hours, which reduces mortality substantially.",
            "Supportive care with paracetamol, hydration, a soft low-residue diet, and avoidance of purgatives, enemas and NSAIDs; surgical referral for perforation.",
            "Expect defervescence in 3-5 days; persisting fever beyond a week calls for reassessment rather than reflex escalation.",
          ],
        },
        {
          heading: "5. Prevention and public health",
          points: [
            "Safe water through boiling, chlorination or filtration; safe food handling; handwashing; and avoiding street cut fruit, ice and salads.",
            "Enteric precautions in the ward and exclusion of food handlers until three consecutive negative stool cultures 24 hours apart.",
            "Detection and treatment of chronic carriers with ciprofloxacin 750 mg twice daily for 28 days, with cholecystectomy where gallstones persist with excretion.",
            "Vaccination: typhoid conjugate vaccine (Typbar-TCV) as a single intramuscular dose from 6 months, recommended by the IAP at 9-12 months with a booster at 4-6 years; Vi polysaccharide vaccine from 2 years with revaccination every 3 years.",
            "Report clusters so that the district team can trace and correct the contaminated water source.",
          ],
        },
      ],
      mustDraw: [
        "A week-by-week chart of the natural history of untreated typhoid with the complications of week 3 marked.",
        "A table of antibiotic regimens with drug, dose and duration for uncomplicated, hospitalised and XDR disease.",
      ],
      markSplit: [
        { part: "Clinical features and complications", marks: 2 },
        { part: "Investigations with the limits of the Widal test", marks: 2.5 },
        { part: "Resistance pattern in India", marks: 1.5 },
        { part: "Treatment with doses and duration", marks: 2.5 },
        { part: "Prevention, carriers and vaccines", marks: 1.5 },
      ],
      keywords: ["enteric fever", "blood culture", "Widal", "azithromycin", "XDR typhoid", "Typbar-TCV"],
    },
    {
      id: "infectious-fever-enteric-fever-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on the complications of typhoid fever and their management.",
      openingLines: [
        "Complications of enteric fever occur most often in the third week of untreated or inadequately treated illness, and account for almost all of the 10-20% mortality of untreated disease.",
        "They arise from ulceration of the Peyer patches, from systemic bacteraemia, and from the endotoxin-driven systemic response.",
      ],
      answer: [
        {
          heading: "Intestinal complications",
          points: [
            "**Ileal perforation** - typically a single perforation of the terminal ileum in week 3, presenting with sudden severe abdominal pain, guarding, rigidity, absent liver dullness and rising pulse. Management is resuscitation, nasogastric decompression, broad-spectrum antibiotics and urgent laparotomy with simple closure or resection.",
            "**Intestinal haemorrhage** - melaena or frank bleeding, occasionally massive; managed with transfusion, correction of coagulopathy and, rarely, surgery.",
            "Both are made more likely by purgatives, enemas and NSAIDs, which must be avoided.",
          ],
        },
        {
          heading: "Systemic complications",
          points: [
            "Typhoid encephalopathy with muttering delirium and the coma-vigil state, and rarely meningitis in infants; treated with dexamethasone 3 mg/kg then 1 mg/kg 6-hourly for 48 hours in addition to antibiotics.",
            "Myocarditis with tachycardia, hypotension, ECG changes and heart failure; typhoid hepatitis with jaundice and raised transaminases; and acute cholecystitis.",
            "Shock, disseminated intravascular coagulation, haemophagocytic lymphohistiocytosis, acute kidney injury and nephritis.",
            "Focal infections: osteomyelitis (particularly in sickle cell disease), septic arthritis, splenic and hepatic abscess, and rarely endocarditis or mycotic aneurysm.",
          ],
        },
        {
          heading: "Late problems and prevention of complications",
          points: [
            "Relapse in 5-10% of patients 1-3 weeks after stopping antibiotics - re-culture and re-treat with a full course.",
            "Chronic carriage in 1-4%, defined as excretion beyond 12 months, usually from a gallbladder with stones; treat with 28 days of ciprofloxacin or high-dose amoxicillin, and consider cholecystectomy.",
            "Complications are prevented by early diagnosis and effective antibiotics, by daily abdominal examination during weeks 2-3, and by avoiding purgatives, enemas and NSAIDs.",
          ],
        },
      ],
      mustDraw: ["A table listing the complication, the week it appears, the key clinical sign and the immediate action."],
      markSplit: [
        { part: "Intestinal complications and their surgical management", marks: 2 },
        { part: "Systemic complications", marks: 1.5 },
        { part: "Relapse, carriage and prevention", marks: 1.5 },
      ],
      keywords: ["ileal perforation", "typhoid state", "dexamethasone", "relapse", "chronic carrier"],
    },
    {
      id: "infectious-fever-enteric-fever-t3",
      paper: "II",
      kind: "define-classify",
      marks: 5,
      minutes: 8,
      frequency: "less-common",
      question: "Define multidrug-resistant and extensively drug-resistant typhoid, and outline the rational choice of antibiotics in enteric fever in India today.",
      openingLines: [
        "Multidrug-resistant (MDR) typhoid is disease caused by an isolate resistant to all three first-line agents - chloramphenicol, ampicillin and cotrimoxazole.",
        "Extensively drug-resistant (XDR) typhoid is an MDR isolate that is additionally resistant to fluoroquinolones and to third-generation cephalosporins, leaving azithromycin and the carbapenems as the only reliable options.",
      ],
      answer: [
        {
          heading: "Evolution of resistance",
          points: [
            "Chloramphenicol resistance appeared soon after its introduction; the H58 haplotype carrying an MDR plasmid spread across South Asia in the 1990s.",
            "Fluoroquinolones replaced the first-line drugs and were then lost to gyrA mutations; nalidixic acid resistance, or a ciprofloxacin MIC of 0.12 microgram/mL or more, predicts clinical failure even when the report says sensitive.",
            "XDR typhoid emerged in Hyderabad, Sindh in 2016 through acquisition of a blaCTX-M-15 plasmid by an H58 strain, and imported cases have been documented in India.",
          ],
        },
        {
          heading: "Rational antibiotic choice",
          points: [
            "Uncomplicated outpatient disease: azithromycin 500 mg-1 g once daily for 7 days (20 mg/kg in children), which achieves high intracellular concentrations and remains reliably active.",
            "Alternative oral: cefixime 20 mg/kg/day in two divided doses for 14 days, accepting slower defervescence.",
            "Hospitalised or complicated disease: ceftriaxone 2 g intravenously daily for 10-14 days, with azithromycin added if the response is slow.",
            "Proven or strongly suspected XDR disease: meropenem 1 g 8-hourly with or without azithromycin.",
            "**Fluoroquinolones should not be used empirically anywhere in India**, and should be reserved for a culture-confirmed fully susceptible isolate with a low ciprofloxacin MIC.",
          ],
        },
        {
          heading: "Stewardship points",
          points: [
            "Always send a blood culture before the first dose so that therapy can be de-escalated and so that local resistance data are generated.",
            "Do not change the antibiotic on day 2 for continuing fever - defervescence normally takes 3-5 days.",
            "Vaccinate with typhoid conjugate vaccine, improve water and sanitation, and treat carriers, because reducing incidence is the only durable answer to resistance.",
          ],
        },
      ],
      mustDraw: ["A table of MDR versus XDR typhoid showing the drugs each is resistant to and the drug that remains effective."],
      markSplit: [
        { part: "Definitions of MDR and XDR", marks: 1.5 },
        { part: "Evolution of resistance including H58 and MIC cut-off", marks: 1.5 },
        { part: "Drug choice with doses", marks: 2 },
      ],
      keywords: ["MDR typhoid", "XDR typhoid", "H58", "azithromycin", "meropenem", "ciprofloxacin MIC"],
    },
  ],
  mcqs: [
    {
      id: "infectious-fever-enteric-fever-q1",
      stem: "A 24-year-old man has had continuous fever for 8 days with abdominal discomfort. Examination shows a temperature of 39.4 C, pulse 76 per minute, a coated tongue and a soft palpable spleen. Total leucocyte count is 4,200 with no eosinophils. Which investigation should be done first?",
      options: [
        "Widal test",
        "Blood culture before starting antibiotics",
        "Typhidot IgM",
        "Ultrasound abdomen",
        "Bone marrow aspiration and culture",
      ],
      answer: 1,
      explanation:
        "Blood culture is the gold standard and its yield is highest before any antibiotic is given, so it must be taken first in this classic second-week typhoid picture with relative bradycardia and aneosinophilia. A Widal test in an endemic country with a single sample cannot confirm or exclude the diagnosis. Typhidot IgM has only about 70-80% sensitivity and specificity and is a fallback where culture is unavailable. Ultrasound may show splenomegaly but does not identify the organism, and bone marrow culture, though more sensitive, is reserved for patients already given antibiotics.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-enteric-fever-q2",
      stem: "A 17-year-old girl with culture-confirmed Salmonella Typhi bacteraemia is well enough for outpatient treatment. The isolate is reported sensitive to ciprofloxacin but nalidixic acid resistant. What is the most appropriate treatment?",
      options: [
        "Ciprofloxacin 500 mg twice daily for 7 days",
        "Azithromycin 1 g once daily for 7 days",
        "Cotrimoxazole double strength twice daily for 14 days",
        "Amoxicillin 1 g three times daily for 14 days",
        "Chloramphenicol 500 mg four times daily for 14 days",
      ],
      answer: 1,
      explanation:
        "Nalidixic acid resistance marks reduced fluoroquinolone susceptibility and predicts clinical failure or delayed response even when the laboratory calls ciprofloxacin sensitive by older breakpoints, so ciprofloxacin should not be used. Azithromycin for 7 days is the recommended oral agent for uncomplicated enteric fever in India. Cotrimoxazole, amoxicillin and chloramphenicol are the classic first-line drugs to which MDR strains are resistant, and although susceptibility to them has partly returned they are not the standard empirical choice.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-enteric-fever-q3",
      stem: "A 30-year-old man in the third week of an untreated fever develops sudden severe generalised abdominal pain. He is tachycardic, the abdomen is board-like, and liver dullness is absent on percussion. What is the immediate priority?",
      options: [
        "Give an enema to relieve the distension",
        "Increase the antibiotic dose and observe for 24 hours",
        "Resuscitate, keep nil by mouth with nasogastric decompression, arrange an erect abdominal radiograph and urgent surgical referral",
        "Perform an urgent colonoscopy",
        "Start dexamethasone 3 mg/kg intravenously",
      ],
      answer: 2,
      explanation:
        "Sudden abdominal pain with rigidity and loss of liver dullness in the third week of enteric fever is ileal perforation, which needs resuscitation, decompression, broad-spectrum antibiotics and urgent laparotomy. Enemas and purgatives increase the risk of perforation and bleeding and are contraindicated. Observing on a higher antibiotic dose delays a surgical emergency. Colonoscopy in a perforated abdomen is dangerous, and dexamethasone is indicated for the typhoid state with shock or encephalopathy, not for perforation.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-enteric-fever-q4",
      stem: "A 6-month-old infant is to receive typhoid vaccination before family travel to a high-risk area. Which vaccine is appropriate?",
      options: [
        "Vi polysaccharide vaccine, single dose",
        "Typhoid conjugate vaccine (Typbar-TCV), single intramuscular dose",
        "Ty21a oral live vaccine, three capsules on alternate days",
        "No typhoid vaccine can be given at this age",
        "Vi polysaccharide vaccine with a booster after one month",
      ],
      answer: 1,
      explanation:
        "The typhoid conjugate vaccine is licensed from 6 months of age, is given as a single 0.5 mL intramuscular dose, and generates T-cell dependent immunological memory, which is exactly why it was developed. The Vi polysaccharide vaccine is a pure polysaccharide, is poorly immunogenic below 2 years and is not licensed for this infant. Ty21a is a live oral vaccine used from 5-6 years upwards and is unsuitable here. Saying that no vaccine can be given is incorrect since conjugate vaccine solved this problem.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-enteric-fever-q5",
      stem: "A 45-year-old woman who cooks in a school canteen recovered from culture-proven typhoid 14 months ago. She is asymptomatic but her stool culture is positive for Salmonella Typhi. Ultrasound shows multiple gallstones. What is the most appropriate management?",
      options: [
        "No treatment is needed as she is asymptomatic",
        "A 7-day course of azithromycin and return to work",
        "Ciprofloxacin 750 mg twice daily for 28 days, exclusion from food handling until three negative stool cultures, and cholecystectomy if excretion persists",
        "Immediate cholecystectomy without antibiotics",
        "Vi polysaccharide vaccination to clear the carrier state",
      ],
      answer: 2,
      explanation:
        "Excretion beyond 12 months defines a chronic carrier, and a food handler in this state is a public health hazard, so she needs a prolonged eradication course - classically ciprofloxacin 750 mg twice daily for 28 days - with exclusion from food handling until three consecutive negative stool cultures, and cholecystectomy if she continues to excrete despite treatment, because gallstones harbour the biofilm. A 7-day azithromycin course is designed for acute illness and does not eradicate carriage. Surgery is not the first step, and vaccination protects the recipient rather than clearing an established carrier.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-enteric-fever-q6",
      stem: "A patient with blood-culture-confirmed enteric fever has been on intravenous ceftriaxone 2 g daily for 48 hours and still has a temperature of 38.9 C. He is otherwise stable, eating, with a soft abdomen. What is the most appropriate action?",
      options: [
        "Switch to meropenem for presumed XDR typhoid",
        "Add oral ciprofloxacin",
        "Continue ceftriaxone and reassess, since defervescence normally takes 3-5 days",
        "Add dexamethasone 3 mg/kg",
        "Repeat the blood culture and stop all antibiotics until it is available",
      ],
      answer: 2,
      explanation:
        "Fever in enteric fever falls slowly and a mean defervescence time of three to five days on an appropriate agent is expected, so a stable patient at 48 hours needs continuation and observation rather than a change. Escalating to meropenem on day 2 without evidence of cephalosporin resistance is unnecessary and drives carbapenem resistance. Adding a fluoroquinolone contributes nothing given the near-universal reduced susceptibility. Dexamethasone is for severe disease with shock or altered sensorium, and stopping antibiotics in a confirmed bacteraemia would be dangerous.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "infectious-fever-enteric-fever-c1",
      front: "Gold standard test for enteric fever, and the volume of blood needed.",
      back: "Blood culture, 10-15 mL in adults (2-4 mL in children) into 45-90 mL broth, two sets, before any antibiotic. Yield 60-80% in week 1.",
    },
    {
      id: "infectious-fever-enteric-fever-c2",
      front: "Which test stays positive despite prior antibiotics?",
      back: "Bone marrow culture, 80-95% sensitive. It is the answer for the partially treated patient.",
    },
    {
      id: "infectious-fever-enteric-fever-c3",
      front: "Why is a single Widal titre useless in India?",
      back: "Confounded by past infection, vaccination and cross-reactions; needs paired sera 7-10 days apart with a fourfold rise. Never treat on a single titre.",
    },
    {
      id: "infectious-fever-enteric-fever-c4",
      front: "First-line oral antibiotic for uncomplicated enteric fever in India.",
      back: "Azithromycin 500 mg-1 g once daily for 7 days (20 mg/kg, max 1 g, in children). Alternative cefixime 20 mg/kg/day for 14 days.",
    },
    {
      id: "infectious-fever-enteric-fever-c5",
      front: "Define MDR and XDR typhoid.",
      back: "MDR: resistant to chloramphenicol, ampicillin and cotrimoxazole. XDR: MDR plus fluoroquinolone and third-generation cephalosporin resistance - needs azithromycin or meropenem.",
    },
    {
      id: "infectious-fever-enteric-fever-c6",
      front: "Which laboratory marker predicts fluoroquinolone failure in typhoid?",
      back: "Nalidixic acid resistance, or a ciprofloxacin MIC of 0.12 microgram/mL or more, even when the report says sensitive.",
    },
    {
      id: "infectious-fever-enteric-fever-c7",
      front: "Steroid regimen in severe typhoid with shock or altered sensorium.",
      back: "Dexamethasone 3 mg/kg IV loading, then 1 mg/kg 6-hourly for 48 hours (8 doses). Reduced mortality from 55% to 10% in the Hoffman trial.",
    },
    {
      id: "infectious-fever-enteric-fever-c8",
      front: "In which week do perforation and haemorrhage occur, and where is the perforation?",
      back: "Week 3, in the terminal ileum, from ulcerated Peyer patches. Avoid purgatives, enemas and NSAIDs.",
    },
    {
      id: "infectious-fever-enteric-fever-c9",
      front: "Define a chronic typhoid carrier and how to treat one.",
      back: "Excretion in stool or urine beyond 12 months. Ciprofloxacin 750 mg BD for 28 days (or high-dose amoxicillin or azithromycin); cholecystectomy if gallstones and persistent excretion.",
    },
    {
      id: "infectious-fever-enteric-fever-c10",
      front: "Typbar-TCV: age, dose, schedule.",
      back: "Typhoid conjugate vaccine from 6 months, single 0.5 mL IM. IAP advises 9-12 months with a booster at 4-6 years. WHO prequalified 2018.",
    },
    {
      id: "infectious-fever-enteric-fever-c11",
      front: "Haemogram clues to enteric fever.",
      back: "Normal or low white count with left shift, aneosinophilia, relative lymphopenia, mild thrombocytopenia, transaminases 2-3 times normal.",
    },
    {
      id: "infectious-fever-enteric-fever-c12",
      front: "How long does defervescence take on an appropriate antibiotic?",
      back: "Three to five days. Do not change the antibiotic on day 2 for continuing fever.",
    },
  ],
  references: [
    "ICMR Treatment Guidelines for Antimicrobial Use in Common Syndromes, 3rd edition, 2022 - enteric fever",
    "WHO Typhoid Vaccines: WHO Position Paper, March 2018",
    "Indian Academy of Pediatrics Advisory Committee on Vaccines and Immunization Practices (ACVIP) immunization schedule, 2023-24",
    "Crump JA et al., Epidemiology, Clinical Presentation, Laboratory Diagnosis, Antimicrobial Resistance and Antimicrobial Management of Invasive Salmonella Infections, Clinical Microbiology Reviews",
    "API Textbook of Medicine, 11th edition, 2019 - enteric fever",
  ],
});

topics.push({
  id: "infectious-fever-scrub-typhus",
  title: "Scrub typhus and the rickettsial fevers",
  oneLiner:
    "Scrub typhus is an acute febrile illness caused by Orientia tsutsugamushi, transmitted by the bite of larval trombiculid mites (chiggers), recognised by an eschar with leucocytosis, thrombocytopenia and raised transaminases, and cured by doxycycline within 48 hours if it is thought of.",
  frequency: "common",
  keywords: [
    "scrub typhus",
    "Orientia tsutsugamushi",
    "eschar",
    "chigger",
    "Leptotrombidium",
    "rickettsia",
    "Weil-Felix",
    "OX-K",
    "spotted fever",
    "Indian tick typhus",
    "murine typhus",
    "doxycycline",
    "azithromycin",
    "INTREST trial",
    "DHR-ICMR guidelines",
    "ARDS",
    "meningoencephalitis",
  ],
  sections: [
    {
      heading: "Organism, vector and epidemiology",
      points: [
        "**Orientia tsutsugamushi is an obligate intracellular gram-negative bacterium**, separated from the genus Rickettsia in 1995, with several antigenic strains (Karp, Kato, Gilliam) that explain why one infection gives little protection against the next.",
        "It is transmitted by the **bite of the larval stage (chigger) of trombiculid mites, principally Leptotrombidium deliense in India**; the mite is both vector and reservoir because the organism passes transovarially, and rodents are only maintenance hosts. The chigger is 0.2 mm, feeds once, and the bite is painless and usually unnoticed.",
        "The disease occurs across the **tsutsugamushi triangle** from Japan and Korea through south-east Asia to India, Pakistan and northern Australia; within India it is reported from Tamil Nadu, Puducherry, Kerala, Karnataka, Himachal Pradesh, Uttarakhand, Sikkim, Meghalaya, Rajasthan and Maharashtra, and is now the commonest identified cause of acute undifferentiated fever in several tertiary series.",
        "Transmission peaks in the **cooler months after the monsoon, from August to January**, and follows exposure to scrub vegetation, grassland, plantations, paddy fields and the edges of forests; farmers, plantation workers, soldiers and children who play in long grass are at highest risk.",
        "Incubation is **6-21 days, usually about 10 days**, which is why a history of a picnic, harvest or forest trek two weeks earlier matters more than exposure in the last few days.",
        "Reporting is through the **Integrated Disease Surveillance Programme (IDSP)**; scrub typhus is not a vector-borne disease under the NVBDCP and there is no separate national control programme, so recognition and treatment rest entirely on the clinician.",
      ],
    },
    {
      heading: "Clinical features and the eschar",
      points: [
        "The illness begins abruptly with **high fever, severe headache, myalgia, conjunctival injection and generalised lymphadenopathy**, often with cough, abdominal pain, vomiting and loose stools that misdirect the clinician towards a respiratory or gastrointestinal diagnosis.",
        "**The eschar is the pathognomonic sign**: a painless 5-20 mm black necrotic crust with an erythematous halo at the site of the chigger bite, most often in the axilla, groin, genitalia, perineum, under the breast, on the neck or behind the ear, and typically with tender regional lymph nodes. It is found in 10-50% of Indian series, and the rate is higher the more carefully the patient is undressed and examined.",
        "A maculopapular rash on the trunk spreading to the limbs appears in a minority of Indian patients around day 5-7 and is less prominent than in the spotted fevers; **hepatosplenomegaly** is present in a third to a half.",
        "The laboratory pattern is a **normal or raised leucocyte count with neutrophilia, thrombocytopenia, transaminases raised two to five times with a disproportionately raised alkaline phosphatase, hypoalbuminaemia and hyponatraemia**; this combination in a febrile patient with a negative malaria test should prompt a search for the eschar and an empirical dose of doxycycline.",
        "Differentials are dengue (leucopenia rather than leucocytosis, no eschar), leptospirosis (calf tenderness, jaundice out of proportion, same neutrophilia), enteric fever (relative bradycardia, blood culture), malaria (smear), and in the patient with fever and lymphadenopathy, infectious mononucleosis, HIV seroconversion and lymphoma.",
        "**Defervescence within 48 hours of doxycycline is itself diagnostic**; fever that persists beyond 72 hours on adequate doxycycline should make the clinician doubt the diagnosis, suspect a complication, or consider a second infection.",
      ],
    },
    {
      heading: "Complications and severity",
      points: [
        "Complications appear in **10-30% of untreated or late-treated patients, usually in the second week**, and are caused by disseminated vasculitis of small vessels affecting lung, brain, kidney, heart and liver.",
        "**Acute respiratory distress syndrome and interstitial pneumonitis are the leading cause of death**; breathlessness, bilateral crepitations and a falling saturation in a patient with scrub typhus need oxygen, referral and intravenous therapy the same day.",
        "**Meningoencephalitis** presents with headache, altered sensorium, neck stiffness and seizures; the cerebrospinal fluid shows a lymphocytic pleocytosis with mildly raised protein and normal or slightly low glucose, so it is mistaken for tuberculous or viral meningitis unless an eschar is found or the transaminases are noticed.",
        "**Acute kidney injury** from pre-renal loss, tubular injury and vasculitis, **myocarditis** with arrhythmia and hypotension, **hepatitis**, disseminated intravascular coagulation, haemophagocytic lymphohistiocytosis and multi-organ dysfunction complete the list; in pregnancy scrub typhus causes miscarriage, preterm delivery and stillbirth.",
        "Untreated mortality is **6-35% depending on strain and delay; with early doxycycline it is under 2%**, which makes the time from first visit to first dose the single measure that decides outcome.",
        "Markers of severity that mandate admission are hypotension, hypoxia, altered sensorium, oliguria or creatinine above 2 mg/dL, jaundice, bleeding, platelets below 50,000 per cubic millimetre, and any patient who cannot take oral medication.",
      ],
    },
    {
      heading: "Diagnosis",
      points: [
        "**The diagnosis is clinical and treatment must not wait for serology**; the DHR-ICMR guidelines define a probable case as acute fever with an eschar or with suggestive features in an endemic area, and a confirmed case by IgM ELISA, IFA or PCR.",
        "**IgM ELISA on serum from day 5-7 onwards is the recommended test in India**, with an optical density cut-off of about 0.5 used by most laboratories; it is positive in 85-90% by the second week, and a fourfold rise in paired sera is confirmatory. It cannot distinguish recent past infection in a highly endemic area.",
        "**Indirect immunofluorescence assay (IFA) is the reference standard** but needs a fluorescence microscope and trained staff and is available only at reference laboratories.",
        "**Polymerase chain reaction for the 56 kDa type-specific antigen gene** on blood, buffy coat or, best of all, a swab or biopsy of the eschar is positive in the first week before antibodies appear, and is the test of choice in the early or doxycycline-pretreated patient where available.",
        "**The Weil-Felix test** exploits cross-reacting Proteus antigens: OX-K agglutination at a titre of 1 in 80 or higher suggests scrub typhus, OX-2 and OX-19 the spotted fever group, and OX-19 the typhus group. It is cheap and widely available but has a sensitivity of only 30-50% and poor specificity, so a negative result never excludes the disease and a positive one should be confirmed.",
        "Supporting investigations: complete blood count, liver and renal function, electrolytes for hyponatraemia, chest radiograph for interstitial infiltrates or effusion, and lumbar puncture, ECG and echocardiography as the clinical picture demands; always run a malaria test and dengue serology alongside because co-infections occur.",
      ],
    },
    {
      heading: "Treatment: the DHR-ICMR regimens",
      points: [
        "**Doxycycline 100 mg orally twice daily for 7 days is the treatment of choice in adults**; it is cheap, safe and produces defervescence within 24-48 hours. In children the dose is 4.5 mg/kg/day in two divided doses, and short courses under 21 days do not stain teeth, so doxycycline is permitted in children by both the DHR-ICMR guidelines and the American Academy of Pediatrics.",
        "**Azithromycin 500 mg once daily for 5 days is the alternative for pregnant women** and for those intolerant of tetracyclines; the paediatric dose is 10 mg/kg/day for 5 days. Chloramphenicol 500 mg four times daily for 7 days is a third option where neither is available.",
        "**Severe scrub typhus is treated with intravenous doxycycline 100 mg twice daily or intravenous azithromycin 500 mg daily until the patient can swallow**, then oral therapy to complete 7 days; the **INTREST trial from Vellore (NEJM 2023) showed that the combination of intravenous doxycycline plus azithromycin for 7 days was superior to either drug alone in severe disease**, and combination therapy is now widely used in the intensive care setting.",
        "Supportive care is what saves the complicated patient: oxygen and early ventilation for ARDS, cautious crystalloids with vasopressors for shock, dialysis for acute kidney injury, control of seizures, and correction of hyponatraemia; steroids have no proven role except possibly in haemophagocytosis.",
        "**Empirical doxycycline is justified in any acute undifferentiated fever in an endemic area with neutrophilia, thrombocytopenia and raised transaminases** while serology is awaited, because it also treats leptospirosis and the spotted fevers, and the cost of a missed case is far greater than the cost of a week of doxycycline.",
        "Doxycycline counselling: take with a full glass of water and food, do not lie down for 30 minutes, avoid antacids, iron and milk within two hours of the dose, and use sun protection; rifampicin is reserved for the rare doxycycline-unresponsive strain reported from Thailand and is not first line in India.",
      ],
    },
    {
      heading: "Other rickettsial fevers and prevention",
      points: [
        "**Indian tick typhus (Rickettsia conorii subspecies indica)** belongs to the spotted fever group, is transmitted by dog and cattle ticks, and produces fever with a maculopapular or petechial **rash that involves the palms and soles**, sometimes with a tache noire at the bite site; it is reported from Himachal Pradesh, Jammu, Maharashtra, Karnataka and Tamil Nadu and responds to doxycycline.",
        "**Murine (endemic) typhus (Rickettsia typhi)** is transmitted by the rat flea and causes a milder fever with headache and rash, reported from Tamil Nadu, Karnataka and Kashmir; **epidemic typhus (Rickettsia prowazekii)** is louse-borne, follows overcrowding and war, and can recrudesce decades later as Brill-Zinsser disease.",
        "The Weil-Felix pattern helps group them: OX-K for scrub typhus, OX-2 with OX-19 for spotted fevers, and OX-19 alone for the typhus group; doxycycline is the treatment for every one of them, with azithromycin as the alternative in pregnancy.",
        "**There is no vaccine for scrub typhus.** Prevention is personal protection: long sleeves and trousers tucked into socks, permethrin-treated clothing, DEET repellent on exposed skin, avoiding sitting or lying on grass, bathing and changing clothes after field work, and clearing scrub vegetation and rodent harbourage around houses.",
        "**Chemoprophylaxis with doxycycline 200 mg orally once weekly**, started before entering a high-risk area and continued for up to 6 weeks after leaving, prevents disease in soldiers and expedition workers and is reserved for short intense exposures rather than for endemic residents.",
        "Notify cases through IDSP, alert the district surveillance officer to a cluster, and use the diagnosis in one patient to lower the threshold for empirical doxycycline in the next febrile patient from the same village.",
      ],
    },
  ],
  tables: [
    {
      heading: "Rickettsial diseases seen in India",
      columns: ["Disease", "Organism", "Vector", "Clinical clue", "Weil-Felix pattern"],
      rows: [
        ["Scrub typhus", "Orientia tsutsugamushi", "Larval trombiculid mite (chigger)", "Eschar in axilla or groin, lymphadenopathy, ARDS", "OX-K"],
        ["Indian tick typhus", "Rickettsia conorii subsp. indica", "Ixodid tick (dog, cattle)", "Rash on palms and soles, tache noire", "OX-2 and OX-19"],
        ["Murine typhus", "Rickettsia typhi", "Rat flea (Xenopsylla cheopis)", "Milder fever, rash, urban rat contact", "OX-19"],
        ["Epidemic typhus", "Rickettsia prowazekii", "Human body louse", "Overcrowding, severe illness, Brill-Zinsser recrudescence", "OX-19"],
      ],
    },
    {
      heading: "DHR-ICMR treatment regimens for scrub typhus",
      columns: ["Patient group", "First choice", "Alternative", "Duration"],
      rows: [
        ["Adult, uncomplicated", "Doxycycline 100 mg PO twice daily", "Azithromycin 500 mg PO once daily for 5 days", "7 days"],
        ["Child, uncomplicated", "Doxycycline 4.5 mg/kg/day in two divided doses", "Azithromycin 10 mg/kg/day for 5 days", "7 days"],
        ["Pregnancy", "Azithromycin 500 mg PO once daily", "Doxycycline only if azithromycin unavailable", "5 days"],
        ["Severe or unable to swallow", "IV doxycycline 100 mg twice daily plus IV azithromycin 500 mg daily (INTREST)", "IV doxycycline or IV azithromycin alone; chloramphenicol", "7 days total, switch to oral when able"],
      ],
    },
  ],
  redFlags: [
    "Breathlessness, respiratory rate above 24 per minute, bilateral crepitations or saturation below 94% - evolving ARDS, admit for oxygen and intravenous therapy.",
    "Altered sensorium, seizures or neck stiffness - meningoencephalitis, needs lumbar puncture after imaging and intravenous doxycycline.",
    "Systolic BP below 90 mmHg or cold peripheries - vasculitic shock or myocarditis; fluids, vasopressors and ECG.",
    "Oliguria or creatinine above 2 mg/dL - acute kidney injury that may need dialysis.",
    "Jaundice, bleeding, platelets below 50,000 per cubic millimetre or a rising ferritin - hepatitis, DIC or haemophagocytosis.",
    "Fever persisting beyond 72 hours on doxycycline - wrong diagnosis, co-infection or a complication; re-evaluate rather than continue.",
  ],
  pearls: [
    "Fever with neutrophil leucocytosis, thrombocytopenia and transaminases in the hundreds in an endemic area is scrub typhus until proved otherwise - give doxycycline and then send the serology.",
    "The eschar is painless, so the patient never mentions it; you find it only by undressing the patient and looking in the axilla, groin, perineum and under the breast.",
    "Doxycycline defervescence within 48 hours is a therapeutic test; a fever that ignores doxycycline is not scrub typhus.",
    "Weil-Felix OX-K 1 in 80 supports the diagnosis but a negative test excludes nothing - sensitivity is 30-50%.",
    "Short courses of doxycycline are safe in children; azithromycin is the drug for pregnancy.",
    "Severe scrub typhus in intensive care is treated with intravenous doxycycline plus azithromycin - the INTREST trial from Vellore.",
    "One drug, doxycycline, treats scrub typhus, spotted fever, murine typhus and leptospirosis - which is why it is the empirical drug of Indian tropical fever.",
  ],
  theory: [
    {
      id: "infectious-fever-scrub-typhus-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "A 40-year-old woman from a plantation area presents in October with fever, headache and myalgia for 7 days and a black crusted lesion in the groin. Discuss the aetiology, clinical features, complications, diagnosis and management of scrub typhus.",
      openingLines: [
        "Scrub typhus is an acute febrile illness caused by Orientia tsutsugamushi, an obligate intracellular bacterium transmitted by the bite of the larval trombiculid mite, and is now the commonest identified cause of acute undifferentiated fever in many parts of India.",
        "The painless eschar at the bite site, the combination of leucocytosis, thrombocytopenia and raised transaminases, and defervescence within 48 hours of doxycycline are the three features that make the diagnosis.",
      ],
      answer: [
        {
          heading: "1. Aetiology and epidemiology",
          points: [
            "Orientia tsutsugamushi, with antigenic strains Karp, Kato and Gilliam; chigger of Leptotrombidium deliense is vector and reservoir with transovarial transmission, rodents are maintenance hosts.",
            "Post-monsoon and winter transmission, August to January; exposure to scrub, grassland, plantations and paddy; incubation 6-21 days.",
            "Endemic in Tamil Nadu, Kerala, Karnataka, Himachal Pradesh, Uttarakhand, the North-East, Rajasthan and Maharashtra; reported through IDSP.",
          ],
        },
        {
          heading: "2. Clinical features",
          points: [
            "Abrupt fever, severe headache, myalgia, conjunctival injection, generalised lymphadenopathy, cough, abdominal pain and vomiting; hepatosplenomegaly in a third to a half.",
            "Eschar: painless black necrotic crust with erythematous halo in axilla, groin, perineum, under the breast or behind the ear, with tender regional nodes; found in 10-50% when searched for.",
            "Maculopapular truncal rash in a minority around day 5-7.",
            "Laboratory pattern: neutrophil leucocytosis, thrombocytopenia, transaminases two to five times normal, raised alkaline phosphatase, hypoalbuminaemia, hyponatraemia.",
          ],
        },
        {
          heading: "3. Complications",
          points: [
            "Second-week vasculitic complications in 10-30% of untreated patients: ARDS and pneumonitis (leading cause of death), meningoencephalitis with lymphocytic CSF, acute kidney injury, myocarditis, hepatitis, DIC, haemophagocytosis and multi-organ failure.",
            "Pregnancy loss, preterm birth and stillbirth; untreated mortality 6-35%, under 2% with early treatment.",
          ],
        },
        {
          heading: "4. Diagnosis",
          points: [
            "Clinical diagnosis with immediate treatment; probable case per DHR-ICMR is fever with eschar or suggestive features in an endemic area.",
            "IgM ELISA from day 5-7 (recommended test in India); IFA reference standard; PCR for the 56 kDa gene on blood or eschar in the first week.",
            "Weil-Felix OX-K 1 in 80 or more is supportive but insensitive; malaria test and dengue serology in parallel; chest radiograph, liver and renal function, electrolytes.",
          ],
        },
        {
          heading: "5. Management",
          points: [
            "Doxycycline 100 mg twice daily for 7 days (children 4.5 mg/kg/day in two divided doses); azithromycin 500 mg daily for 5 days in pregnancy; chloramphenicol as third option.",
            "Severe disease: intravenous doxycycline plus intravenous azithromycin for 7 days (INTREST trial), oxygen, ventilation, cautious fluids, vasopressors, dialysis as needed.",
            "Expect defervescence in 48 hours; re-evaluate if fever persists beyond 72 hours.",
            "Prevention: protective clothing, permethrin, DEET, avoiding grass, weekly doxycycline 200 mg chemoprophylaxis for short high-risk exposures; no vaccine; notify through IDSP.",
          ],
        },
      ],
      mustDraw: [
        "A labelled sketch of an eschar with its erythematous halo and the sites to search (axilla, groin, perineum, under breast, behind ear).",
        "A table of treatment regimens by patient group: adult, child, pregnancy, severe disease.",
      ],
      markSplit: [
        { part: "Aetiology, vector and epidemiology", marks: 2 },
        { part: "Clinical features including eschar and laboratory pattern", marks: 2.5 },
        { part: "Complications", marks: 1.5 },
        { part: "Diagnosis", marks: 2 },
        { part: "Treatment and prevention", marks: 2 },
      ],
      keywords: ["scrub typhus", "eschar", "Orientia tsutsugamushi", "doxycycline", "IgM ELISA", "INTREST"],
    },
    {
      id: "infectious-fever-scrub-typhus-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write a short note on the Weil-Felix test and the laboratory diagnosis of rickettsial infections.",
      openingLines: [
        "The Weil-Felix test is a heterophile agglutination test that detects antibodies against rickettsiae by their cross-reaction with the O antigens of Proteus vulgaris OX-19 and OX-2 and Proteus mirabilis OX-K.",
        "It is cheap and widely available in India but has low sensitivity and specificity, so it supports rather than makes the diagnosis, and treatment should never wait for it.",
      ],
      answer: [
        {
          heading: "Principle and interpretation",
          points: [
            "Serum is tested for agglutination of the three Proteus strains; a single titre of 1 in 80 or more, or a fourfold rise in paired sera 7-10 days apart, is considered significant.",
            "OX-K agglutination suggests scrub typhus; OX-2 and OX-19 suggest the spotted fever group (Indian tick typhus); OX-19 alone suggests the typhus group (epidemic and murine typhus).",
            "Antibodies appear at the end of the first week, so the test is negative early; false positives occur in Proteus urinary infection, leptospirosis, brucellosis and liver disease.",
          ],
        },
        {
          heading: "Limitations",
          points: [
            "Sensitivity 30-50% and specificity poor; a negative test never excludes rickettsial disease, and a positive one should be confirmed by a specific test where possible.",
            "Rickettsialpox and Q fever do not produce Weil-Felix agglutinins at all.",
          ],
        },
        {
          heading: "Better tests",
          points: [
            "IgM ELISA from day 5-7 is the recommended test in India for scrub typhus and spotted fever; indirect immunofluorescence is the reference standard; PCR on blood or eschar detects infection in the first week.",
            "Supportive haematology: neutrophil leucocytosis, thrombocytopenia, raised transaminases and alkaline phosphatase, hyponatraemia.",
            "Therapeutic test: defervescence within 48 hours of doxycycline is the most useful confirmation in a district hospital.",
          ],
        },
      ],
      mustDraw: ["A table of Weil-Felix agglutination patterns (OX-K, OX-2, OX-19) against scrub typhus, spotted fever group and typhus group."],
      markSplit: [
        { part: "Principle and interpretation with titres", marks: 2 },
        { part: "Limitations", marks: 1 },
        { part: "Specific tests and therapeutic test", marks: 2 },
      ],
      keywords: ["Weil-Felix", "OX-K", "OX-19", "IgM ELISA", "IFA", "rickettsia"],
    },
  ],
  mcqs: [
    {
      id: "infectious-fever-scrub-typhus-q1",
      stem: "A 28-year-old woman at 24 weeks of gestation from Himachal Pradesh has fever for 6 days with headache and a 1 cm painless black crusted lesion with a red rim under the left breast. Platelets are 90,000 per cubic millimetre and ALT is 180 U/L. Which is the most appropriate treatment?",
      options: [
        "Doxycycline 100 mg twice daily for 7 days",
        "Azithromycin 500 mg once daily for 5 days",
        "Ceftriaxone 2 g intravenously once daily for 7 days",
        "Chloroquine 25 mg/kg over 3 days",
        "Ciprofloxacin 500 mg twice daily for 7 days",
      ],
      answer: 1,
      explanation:
        "This is scrub typhus with an eschar in a pregnant woman, and azithromycin 500 mg daily for 5 days is the DHR-ICMR recommended regimen in pregnancy. Doxycycline is the drug of choice outside pregnancy but is avoided in the second and third trimesters because of fetal bone and tooth effects. Ceftriaxone has no activity against Orientia and is the commonest wrong reflex. Chloroquine treats vivax malaria, which does not produce an eschar, and ciprofloxacin is both unreliable against Orientia and avoided in pregnancy.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-scrub-typhus-q2",
      stem: "A 35-year-old farmer from Tamil Nadu presents on day 4 of fever with headache, myalgia and tender inguinal nodes. No eschar is seen. Total leucocyte count is 13,500 with 80% neutrophils, platelets 110,000, ALT 160 U/L. Malaria rapid test and dengue NS1 are negative. Which is the most appropriate next step?",
      options: [
        "Send scrub typhus IgM ELISA and wait for the result before treating",
        "Send a Weil-Felix test and treat only if OX-K is 1 in 80 or more",
        "Start doxycycline 100 mg twice daily now and send IgM ELISA on day 5-7",
        "Start cefixime 200 mg twice daily for 7 days",
        "Start artesunate because the malaria test may be falsely negative",
      ],
      answer: 2,
      explanation:
        "Fever with neutrophil leucocytosis, thrombocytopenia and raised transaminases in an endemic area with negative malaria and dengue tests is scrub typhus or leptospirosis until proved otherwise, and both are treated by doxycycline, so empirical doxycycline is started now while serology is sent at the appropriate time. IgM ELISA on day 4 is likely to be falsely negative and waiting delays a drug that changes mortality. The Weil-Felix test is too insensitive to gate treatment. Cefixime treats neither organism, and artesunate without any evidence of malaria is unjustified.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-scrub-typhus-q3",
      stem: "A 50-year-old man with scrub typhus confirmed by IgM ELISA has been on oral doxycycline for 2 days. He now has a respiratory rate of 32 per minute, saturation 86% on room air, BP 84/50 mmHg, and bilateral infiltrates on chest radiograph. Which is the most appropriate antimicrobial plan?",
      options: [
        "Continue oral doxycycline and add oxygen",
        "Change to oral azithromycin 500 mg daily",
        "Intravenous doxycycline plus intravenous azithromycin for 7 days with intensive care support",
        "Intravenous meropenem and vancomycin",
        "Add rifampicin 600 mg daily to oral doxycycline",
      ],
      answer: 2,
      explanation:
        "This patient has severe scrub typhus with ARDS and shock, and the INTREST trial showed that intravenous doxycycline combined with intravenous azithromycin for 7 days produced better outcomes than either drug alone in severe disease; intensive care support with oxygen, ventilation and vasopressors runs in parallel. Continuing oral therapy in a shocked patient with poor absorption is inadequate, and switching to oral azithromycin alone is a step down. Meropenem and vancomycin treat no rickettsia. Rifampicin is reserved for doxycycline-resistant strains from Thailand and is not indicated here.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-scrub-typhus-q4",
      stem: "A 7-year-old boy has fever for 5 days, lymphadenopathy and an eschar on the neck. His father is worried about tooth staining if doxycycline is given. Which statement is correct?",
      options: [
        "Doxycycline is absolutely contraindicated under 8 years and azithromycin must be used",
        "Doxycycline 4.5 mg/kg/day in two divided doses for 7 days is recommended and short courses do not stain teeth",
        "Chloramphenicol is the drug of choice in children",
        "No treatment is needed because scrub typhus is self-limiting in children",
        "Ciprofloxacin 10 mg/kg twice daily is the preferred paediatric drug",
      ],
      answer: 1,
      explanation:
        "The DHR-ICMR guidelines recommend doxycycline 4.5 mg/kg/day in two divided doses for 7 days in children with scrub typhus, and the American Academy of Pediatrics states that courses under 21 days do not cause dental staining, so the old absolute contraindication under 8 years no longer applies. Azithromycin 10 mg/kg/day for 5 days is an acceptable alternative but not mandatory. Chloramphenicol is a third-line option with marrow toxicity. Untreated scrub typhus carries significant mortality in children, and fluoroquinolones are unreliable against Orientia.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-scrub-typhus-q5",
      stem: "A 45-year-old man from Karnataka has fever for 5 days with a maculopapular rash that involves the palms and soles, a small black lesion on the leg where a tick was removed, and a dog at home. Weil-Felix shows OX-2 1 in 160 and OX-19 1 in 160 with OX-K negative. Which is the most likely diagnosis?",
      options: [
        "Scrub typhus",
        "Indian tick typhus (spotted fever group)",
        "Murine typhus",
        "Secondary syphilis",
        "Dengue fever",
      ],
      answer: 1,
      explanation:
        "A tick exposure, a rash involving the palms and soles and Weil-Felix agglutination of OX-2 and OX-19 with negative OX-K is the pattern of the spotted fever group, in India most often Indian tick typhus caused by Rickettsia conorii subspecies indica. Scrub typhus would agglutinate OX-K and its rash spares the palms and soles. Murine typhus agglutinates OX-19 alone and follows rat flea exposure. Secondary syphilis also involves palms and soles but is afebrile or mildly febrile and has no tick eschar. Dengue rash does not favour palms and soles and does not produce Weil-Felix agglutinins.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "infectious-fever-scrub-typhus-c1",
      front: "Organism, vector and reservoir of scrub typhus.",
      back: "Orientia tsutsugamushi; larval trombiculid mite (chigger) of Leptotrombidium deliense, which is both vector and reservoir via transovarial transmission. Rodents are maintenance hosts.",
    },
    {
      id: "infectious-fever-scrub-typhus-c2",
      front: "Describe the eschar and where to look.",
      back: "Painless 5-20 mm black necrotic crust with an erythematous halo and tender regional nodes. Look in axilla, groin, perineum, genitalia, under the breast, neck and behind the ear.",
    },
    {
      id: "infectious-fever-scrub-typhus-c3",
      front: "Laboratory pattern that suggests scrub typhus over dengue.",
      back: "Neutrophil leucocytosis (dengue has leucopenia), thrombocytopenia, transaminases 2-5 times normal, raised alkaline phosphatase, hyponatraemia, hypoalbuminaemia.",
    },
    {
      id: "infectious-fever-scrub-typhus-c4",
      front: "Weil-Felix patterns for scrub typhus, spotted fever group and typhus group.",
      back: "OX-K: scrub typhus. OX-2 plus OX-19: spotted fever group. OX-19 alone: typhus group. Significant titre 1 in 80; sensitivity only 30-50%.",
    },
    {
      id: "infectious-fever-scrub-typhus-c5",
      front: "Treatment of scrub typhus in an adult, a child and a pregnant woman.",
      back: "Adult: doxycycline 100 mg BD 7 days. Child: doxycycline 4.5 mg/kg/day in two divided doses 7 days (or azithromycin 10 mg/kg/day 5 days). Pregnancy: azithromycin 500 mg OD 5 days.",
    },
    {
      id: "infectious-fever-scrub-typhus-c6",
      front: "Treatment of severe scrub typhus and the trial behind it.",
      back: "Intravenous doxycycline 100 mg BD plus intravenous azithromycin 500 mg OD for 7 days - INTREST trial, Vellore, NEJM 2023 - with oxygen, ventilation and organ support.",
    },
    {
      id: "infectious-fever-scrub-typhus-c7",
      front: "Leading cause of death in scrub typhus and the timing.",
      back: "ARDS and interstitial pneumonitis, appearing in the second week of untreated illness; untreated mortality 6-35%, under 2% with early doxycycline.",
    },
    {
      id: "infectious-fever-scrub-typhus-c8",
      front: "Chemoprophylaxis and vaccine for scrub typhus.",
      back: "Doxycycline 200 mg once weekly before, during and up to 6 weeks after a short high-risk exposure. There is no vaccine; prevention is protective clothing, permethrin and DEET.",
    },
  ],
  references: [
    "DHR-ICMR Guidelines for Diagnosis and Management of Rickettsial Diseases in India, 2015",
    "Varghese GM et al., Intravenous Doxycycline, Azithromycin, or Both for Severe Scrub Typhus (INTREST trial), New England Journal of Medicine, 2023",
    "ICMR Treatment Guidelines for Antimicrobial Use in Common Syndromes, 3rd edition, 2022 - rickettsial infections",
    "Integrated Disease Surveillance Programme, NCDC, MoHFW - reporting of scrub typhus",
    "Harrison's Principles of Internal Medicine, 21st edition, 2022 - rickettsial diseases",
  ],
});

topics.push({
  id: "infectious-fever-urinary-tract-infection",
  title: "Urinary tract infection: cystitis, pyelonephritis and the special groups",
  oneLiner:
    "Urinary tract infection is symptomatic bacterial invasion of the urinary tract, classified as uncomplicated cystitis in the healthy non-pregnant woman and complicated in everyone else, and in India it is treated with nitrofurantoin or fosfomycin rather than a fluoroquinolone because Escherichia coli resistance exceeds 70%.",
  frequency: "common",
  keywords: [
    "UTI",
    "cystitis",
    "pyelonephritis",
    "dysuria",
    "nitrofurantoin",
    "fosfomycin",
    "ESBL",
    "E. coli",
    "asymptomatic bacteriuria",
    "UTI in pregnancy",
    "recurrent UTI",
    "catheter-associated UTI",
    "sterile pyuria",
    "urine culture",
    "dipstick nitrite",
    "vesicoureteric reflux",
    "emphysematous pyelonephritis",
  ],
  sections: [
    {
      heading: "Definitions, classification and organisms",
      points: [
        "**Uncomplicated UTI is acute cystitis or pyelonephritis in a non-pregnant, pre-menopausal woman with a structurally and functionally normal urinary tract and no comorbidity**; every other UTI - in men, children, pregnant women, diabetics, the catheterised, the immunosuppressed, the transplanted, or in the presence of stones, obstruction, reflux or a neurogenic bladder - is complicated, because the risk of treatment failure, resistant organisms and renal damage is higher.",
        "**Asymptomatic bacteriuria** is 100,000 colony-forming units per mL of a single organism in two consecutive midstream samples in a woman, or one sample in a man, without symptoms; it is common in the elderly, diabetics and the catheterised and **is treated only in pregnancy and before urological procedures that breach the mucosa** (IDSA 2019).",
        "**Recurrent UTI is two or more episodes in 6 months or three or more in 12 months**; relapse is recurrence with the same organism within 2 weeks of finishing treatment and suggests a persistent focus, whereas reinfection is a new organism after an interval and reflects host susceptibility.",
        "**Escherichia coli causes 70-80% of community infections**, followed by Klebsiella, Proteus (urease-producing, alkaline urine, struvite stones), Enterococcus, Staphylococcus saprophyticus in sexually active young women, and Pseudomonas and Candida in the catheterised or hospitalised.",
        "**Extended-spectrum beta-lactamase production is present in over 60% of E. coli isolates from Indian centres** in ICMR surveillance, and fluoroquinolone resistance exceeds 70%, which means that ciprofloxacin, cefixime and cotrimoxazole are unreliable empirical choices in India even for a simple cystitis.",
        "Women are affected far more often because of the short urethra and its proximity to the anus; sexual intercourse, spermicide use, a new partner, post-menopausal oestrogen loss, incomplete emptying and constipation are the principal modifiable risk factors.",
      ],
    },
    {
      heading: "Clinical features: cystitis, pyelonephritis and the mimics",
      points: [
        "**Cystitis** presents with dysuria, frequency, urgency, suprapubic pain and sometimes haematuria, with no fever or only a low-grade one; in a woman with dysuria and frequency but without vaginal discharge or irritation the probability of UTI is over 90% and treatment is empirical.",
        "**Acute pyelonephritis** adds fever with rigors, flank pain, renal angle tenderness, nausea and vomiting, and may present with sepsis; in the elderly it can present as confusion or a fall without any urinary symptom, and in infants as fever without a focus, poor feeding, vomiting or jaundice.",
        "Ask about vaginal discharge and pruritus (vaginitis and cervicitis cause dysuria without frequency), pelvic pain and dyspareunia (pelvic inflammatory disease), urethral discharge in men (urethritis), and perineal pain with a tender prostate (prostatitis), because each is a different diagnosis with a different drug.",
        "**Sterile pyuria** - pus cells with a negative routine culture - should raise genitourinary tuberculosis, partially treated UTI, chlamydial urethritis, stones, interstitial nephritis, papillary necrosis and an adjacent appendix or diverticular abscess; send three early-morning urine samples for AFB and CBNAAT.",
        "In diabetics look for the dangerous variants: **emphysematous pyelonephritis** with gas in the renal parenchyma on ultrasound or CT, papillary necrosis with sloughed papillae causing obstruction, perinephric abscess, and fungal infection; a diabetic with pyelonephritis who does not improve in 48 hours needs imaging that day.",
        "**Infection above an obstructed system (pyonephrosis) is a urological emergency**: fever with a hydronephrotic kidney needs percutaneous nephrostomy or a ureteric stent as well as antibiotics, because antibiotics alone do not sterilise an obstructed collecting system.",
      ],
    },
    {
      heading: "Investigations and how to interpret them",
      points: [
        "**Uncomplicated cystitis in a non-pregnant woman needs no culture**; a dipstick is enough, and a positive nitrite (specific, about 95%, but insensitive because Enterococcus, Pseudomonas and Acinetobacter do not reduce nitrate) or leucocyte esterase (sensitive but less specific) supports empirical treatment.",
        "**Send a urine culture before antibiotics in every complicated UTI, pyelonephritis, pregnancy, men, children, recurrence, treatment failure and recent antibiotic use.** A midstream clean-catch sample transported within 2 hours or refrigerated; catheter specimens from a fresh catheter, and suprapubic aspiration or catheter sampling in infants because bag specimens are contaminated.",
        "Microscopy: **more than 10 leucocytes per cubic millimetre of uncentrifuged urine or more than 5 per high-power field in the spun deposit is pyuria**; bacteriuria on Gram stain of uncentrifuged urine correlates with 100,000 CFU/mL; white cell casts localise the infection to the kidney.",
        "Culture thresholds: 100,000 CFU/mL of a single organism is the classical Kass criterion; 1,000 CFU/mL in a symptomatic woman and 10,000 CFU/mL in pyelonephritis or a catheter sample are accepted as significant; mixed growth of three organisms is contamination.",
        "In pyelonephritis add a complete blood count, creatinine and electrolytes, blood culture in the febrile or septic patient, and a **renal ultrasound in every man, child, pregnant woman, diabetic, patient with stones or obstruction, and anyone not improving at 48-72 hours**; CT with contrast is the test for abscess, emphysematous infection and small stones.",
        "Children: ultrasound of the kidneys and bladder after the first febrile UTI in every child; micturating cystourethrogram if the ultrasound is abnormal, the infection is atypical or recurrent, or the child is under 2 years with a febrile UTI according to Indian Society of Pediatric Nephrology guidance; DMSA scan 4-6 months later for scarring where reflux is found.",
      ],
    },
    {
      heading: "Treatment of cystitis and pyelonephritis in India",
      points: [
        "**Uncomplicated cystitis: nitrofurantoin 100 mg orally twice daily for 5 days or fosfomycin trometamol 3 g as a single oral dose** are the ICMR first-line choices because both retain over 90% activity against Indian E. coli including ESBL producers. Nitrofurantoin needs a creatinine clearance above 30 mL/min and does not reach the kidney, so it is for cystitis only.",
        "**Do not use ciprofloxacin, levofloxacin, cefixime or cotrimoxazole empirically for cystitis in India**; resistance exceeds the 20% threshold at which empirical use fails, fluoroquinolones carry tendon, neuropathy and aortic warnings, and every course selects for resistant gut flora. Amoxicillin-clavulanate 625 mg three times daily for 5-7 days is a second-line option guided by culture.",
        "**Mild to moderate pyelonephritis in a patient who can take oral drugs** is started on a single intravenous or intramuscular dose of ceftriaxone 1-2 g or amikacin 15 mg/kg, then oral therapy according to culture for 7-10 days; oral fluoroquinolone for 7 days is used only when the isolate is proven susceptible.",
        "**Severe pyelonephritis, sepsis, vomiting, pregnancy, obstruction or a known ESBL organism needs admission and intravenous therapy**: piperacillin-tazobactam 4.5 g 6-hourly or amikacin 15 mg/kg once daily for a mild ESBL infection, and meropenem 1 g 8-hourly or ertapenem 1 g daily for severe ESBL infection, for 7-14 days total with an oral switch once afebrile for 48 hours.",
        "Supportive: paracetamol, 2-3 litres of fluid a day, phenazopyridine 200 mg three times daily for 2 days for severe dysuria; review at 48-72 hours, and **image any patient still febrile at 72 hours** for obstruction or abscess rather than adding a second antibiotic.",
        "Men are treated for 7-14 days with a drug that penetrates the prostate once culture is known (a fluoroquinolone or cotrimoxazole if susceptible), and 4-6 weeks if prostatitis is present; investigate every man with a first UTI for obstruction, stones or prostatic disease.",
      ],
    },
    {
      heading: "Pregnancy, children and the catheterised patient",
      points: [
        "**Screen every pregnant woman with a urine culture at the first antenatal visit or at 12-16 weeks**, because untreated asymptomatic bacteriuria progresses to pyelonephritis in 20-40% and is associated with preterm labour and low birth weight; treat asymptomatic bacteriuria and cystitis for 7 days and repeat the culture after treatment as a test of cure.",
        "**Safe drugs in pregnancy: nitrofurantoin 100 mg twice daily (avoid after 36 weeks because of neonatal haemolysis), cephalexin 500 mg four times daily, amoxicillin-clavulanate 625 mg three times daily, and fosfomycin 3 g single dose.** Avoid fluoroquinolones throughout, cotrimoxazole in the first trimester (folate antagonist) and near term (kernicterus), and tetracyclines.",
        "**Pyelonephritis in pregnancy is admitted** for intravenous ceftriaxone 1-2 g daily or cefotaxime until afebrile for 48 hours, then oral therapy to complete 10-14 days, followed by nightly nitrofurantoin 50-100 mg or cephalexin 250 mg prophylaxis until delivery because recurrence is common.",
        "**Febrile infants under 3 months and any toxic child are admitted for intravenous ceftriaxone or cefotaxime**; older well children receive oral cefixime 8 mg/kg/day or amoxicillin-clavulanate for 7-10 days, and cystitis in older girls 3-5 days. Fever without a focus in a child under 2 years carries a 5-7% probability of UTI, so a properly collected urine sample is mandatory.",
        "**Catheter-associated UTI is diagnosed by symptoms plus a culture from a freshly placed catheter, not by pyuria or a smell, which are universal in long-term catheters**; remove or replace the catheter, treat symptomatic infection for 7 days if the response is prompt and 10-14 days if delayed, and never treat asymptomatic catheter bacteriuria.",
        "In the elderly, a positive dipstick in a confused patient without urinary symptoms or fever is far more often asymptomatic bacteriuria than the cause of the confusion; look for the real cause before writing an antibiotic.",
      ],
    },
    {
      heading: "Recurrent UTI and prevention",
      points: [
        "Confirm recurrence by culture and exclude a cause: post-void residual on ultrasound, stones, atrophic vaginitis, diabetes, and in men prostatic disease; cystoscopy is needed only for haematuria, relapse with the same organism, or a suspected fistula.",
        "**Behavioural advice with evidence: fluid intake of at least 1.5 litres extra a day (halves recurrences), voiding after intercourse, avoiding spermicides and diaphragms, and treating constipation**; cranberry products and D-mannose have weak evidence and are optional.",
        "**Topical vaginal oestrogen cream in post-menopausal women restores lactobacilli and reduces recurrences** and is the first pharmacological step in that group.",
        "**Antibiotic prophylaxis for 6-12 months - nitrofurantoin 50-100 mg at night or post-coital - reduces recurrences by 85%** but selects resistance; methenamine hippurate 1 g twice daily is a non-antibiotic alternative shown non-inferior to prophylaxis in the ALTAR trial (BMJ 2022) in women with a normal tract.",
        "Self-start therapy: a reliable woman with proven recurrent cystitis can be given a standby course of nitrofurantoin or fosfomycin to begin at symptom onset, with a culture bottle to fill first.",
        "Vaccination against UTI is not available in India; long-term low-dose antibiotic in children is reserved for high-grade reflux under paediatric nephrology supervision, and circumcision reduces UTI in boys with reflux.",
      ],
    },
  ],
  tables: [
    {
      heading: "Uncomplicated versus complicated urinary tract infection",
      columns: ["Feature", "Uncomplicated", "Complicated"],
      rows: [
        ["Patient", "Non-pregnant pre-menopausal woman, normal tract", "Men, children, pregnancy, diabetes, elderly, catheter, transplant, immunosuppression"],
        ["Anatomy", "Normal", "Stones, obstruction, reflux, neurogenic bladder, recent instrumentation"],
        ["Culture before treatment", "Not needed for cystitis", "Always"],
        ["Empirical drug", "Nitrofurantoin 5 days or fosfomycin single dose", "Ceftriaxone or amikacin then culture-guided; piperacillin-tazobactam or carbapenem if severe or ESBL"],
        ["Duration", "3-5 days cystitis, 7 days pyelonephritis", "7-14 days; 4-6 weeks if prostatitis"],
        ["Imaging", "Not needed", "Ultrasound in all; CT if not improving at 72 hours"],
      ],
    },
    {
      heading: "Antibiotic regimens for UTI following ICMR guidance",
      columns: ["Situation", "Drug and dose", "Duration", "Comment"],
      rows: [
        ["Uncomplicated cystitis", "Nitrofurantoin 100 mg PO BD", "5 days", "Needs creatinine clearance above 30; not for pyelonephritis"],
        ["Uncomplicated cystitis", "Fosfomycin trometamol 3 g PO", "Single dose", "Active against most ESBL E. coli"],
        ["Cystitis in pregnancy", "Nitrofurantoin 100 mg BD or cephalexin 500 mg QID", "7 days", "Avoid nitrofurantoin after 36 weeks; test of cure culture"],
        ["Mild pyelonephritis, outpatient", "Ceftriaxone 1-2 g IV/IM stat, then oral by culture", "7-10 days", "Fluoroquinolone only if isolate susceptible"],
        ["Severe pyelonephritis or ESBL", "Piperacillin-tazobactam 4.5 g IV 6-hourly or meropenem 1 g IV 8-hourly", "7-14 days", "Amikacin 15 mg/kg OD is an option for mild ESBL infection"],
        ["Febrile UTI in infant under 3 months", "Ceftriaxone 50-75 mg/kg IV OD or cefotaxime", "7-10 days", "Admit; ultrasound after first febrile UTI"],
        ["Prophylaxis for recurrent UTI", "Nitrofurantoin 50-100 mg HS or post-coital", "6-12 months", "Methenamine hippurate 1 g BD is the non-antibiotic alternative"],
      ],
    },
  ],
  redFlags: [
    "Fever with rigors, hypotension, tachycardia or altered sensorium - urosepsis; blood and urine cultures, intravenous antibiotics and admission.",
    "Fever with a hydronephrotic kidney on ultrasound - pyonephrosis; urgent nephrostomy or stent, not antibiotics alone.",
    "Pyelonephritis in pregnancy - admit for intravenous therapy; risk of preterm labour and ARDS.",
    "Diabetic with pyelonephritis not improving in 48 hours - image for emphysematous pyelonephritis, papillary necrosis or abscess.",
    "Febrile infant under 3 months with a positive urine - admit for intravenous antibiotics and imaging.",
    "Persistent fever at 72 hours on appropriate antibiotic, or relapse with the same organism - obstruction, abscess, stone or prostatitis.",
  ],
  pearls: [
    "Nitrofurantoin or fosfomycin for cystitis in India; ciprofloxacin and cefixime fail in most E. coli isolates.",
    "Nitrofurantoin never treats pyelonephritis - it does not reach the renal parenchyma.",
    "Asymptomatic bacteriuria is treated in only two situations: pregnancy and before an instrumentation that breaches the mucosa.",
    "Screen every pregnancy with a urine culture at the first visit; untreated bacteriuria becomes pyelonephritis in a fifth to two-fifths.",
    "Sterile pyuria in India is genitourinary tuberculosis until three early-morning urines say otherwise.",
    "Fever plus hydronephrosis is a drainage problem, not an antibiotic problem.",
    "A confused elderly patient with a positive dipstick usually has asymptomatic bacteriuria and a different cause for the confusion.",
  ],
  theory: [
    {
      id: "infectious-fever-urinary-tract-infection-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "A 32-year-old woman presents with dysuria, frequency and fever with rigors for 2 days. Discuss the classification, aetiology, investigations and management of urinary tract infection in adults, with special reference to antimicrobial resistance in India.",
      openingLines: [
        "Urinary tract infection is symptomatic bacterial invasion of the urinary tract, classified as uncomplicated when it occurs in a non-pregnant pre-menopausal woman with a normal tract, and complicated in all other patients or in the presence of structural or functional abnormality.",
        "Escherichia coli causes 70-80% of cases, and in India over 60% of isolates produce extended-spectrum beta-lactamases with fluoroquinolone resistance above 70%, which dictates the empirical choices.",
      ],
      answer: [
        {
          heading: "1. Classification and aetiology",
          points: [
            "Uncomplicated cystitis and pyelonephritis versus complicated UTI (men, pregnancy, children, diabetes, catheter, stones, obstruction, reflux, immunosuppression); asymptomatic bacteriuria; recurrent UTI (2 in 6 months or 3 in 12).",
            "Organisms: E. coli, Klebsiella, Proteus, Enterococcus, S. saprophyticus, Pseudomonas and Candida in the catheterised; risk factors of intercourse, spermicide, menopause, incomplete emptying, diabetes.",
          ],
        },
        {
          heading: "2. Clinical features",
          points: [
            "Cystitis: dysuria, frequency, urgency, suprapubic pain, haematuria without fever; pyelonephritis: fever with rigors, flank pain, renal angle tenderness, vomiting, sepsis.",
            "Mimics: vaginitis and cervicitis, urethritis, pelvic inflammatory disease, prostatitis; atypical presentations in the elderly and infants.",
          ],
        },
        {
          heading: "3. Investigations",
          points: [
            "Dipstick nitrite and leucocyte esterase; microscopy for pyuria (more than 10 leucocytes per cubic millimetre) and white cell casts; urine culture with 100,000 CFU/mL (1,000 in symptomatic women) before antibiotics in every complicated case and pyelonephritis.",
            "Blood count, creatinine, blood culture in the febrile patient; ultrasound in men, children, pregnancy, diabetes, stones and non-responders; CT for abscess and emphysematous infection; three early-morning urines for AFB in sterile pyuria.",
          ],
        },
        {
          heading: "4. Management",
          points: [
            "Cystitis: nitrofurantoin 100 mg twice daily for 5 days or fosfomycin 3 g single dose; avoid fluoroquinolones, cefixime and cotrimoxazole empirically because of resistance; amoxicillin-clavulanate by culture.",
            "Pyelonephritis, mild: ceftriaxone 1-2 g IV or amikacin 15 mg/kg as initial dose then oral by culture for 7-10 days; severe, septic, pregnant, vomiting or ESBL: admit for piperacillin-tazobactam 4.5 g 6-hourly or meropenem 1 g 8-hourly for 7-14 days with oral switch after 48 hours afebrile.",
            "Drain an obstructed infected kidney; supportive fluids, paracetamol, phenazopyridine; review at 48-72 hours and image if still febrile.",
            "Special groups: pregnancy screening and 7-day treatment with nitrofurantoin or cephalexin, admission for pyelonephritis; children with ultrasound after the first febrile UTI; men 7-14 days with prostate-penetrating drug; catheterised patients treated only when symptomatic after catheter change.",
          ],
        },
        {
          heading: "5. Prevention of recurrence and stewardship",
          points: [
            "Fluids, post-coital voiding, avoid spermicide, vaginal oestrogen after menopause, nitrofurantoin prophylaxis or methenamine hippurate for 6-12 months, self-start therapy.",
            "Culture-guided therapy, shortest effective course, no treatment of asymptomatic bacteriuria outside pregnancy and instrumentation, and avoidance of fluoroquinolones preserve the remaining oral options.",
          ],
        },
      ],
      mustDraw: [
        "A table of uncomplicated versus complicated UTI with the empirical drug and duration for each.",
        "A flow chart from dysuria through dipstick and culture decisions to cystitis and pyelonephritis pathways.",
      ],
      markSplit: [
        { part: "Classification and aetiology with resistance data", marks: 2 },
        { part: "Clinical features and mimics", marks: 1.5 },
        { part: "Investigations and interpretation", marks: 2 },
        { part: "Management of cystitis and pyelonephritis", marks: 3 },
        { part: "Special groups and prevention", marks: 1.5 },
      ],
      keywords: ["urinary tract infection", "nitrofurantoin", "fosfomycin", "ESBL", "pyelonephritis", "asymptomatic bacteriuria"],
    },
    {
      id: "infectious-fever-urinary-tract-infection-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write a short note on urinary tract infection in pregnancy.",
      openingLines: [
        "Pregnancy predisposes to urinary infection through progesterone-induced ureteric dilatation, mechanical compression by the uterus, glycosuria and reduced bladder tone, so that asymptomatic bacteriuria in 2-10% of pregnant women progresses to pyelonephritis in 20-40% if untreated.",
        "Because bacteriuria is associated with preterm labour, low birth weight and maternal sepsis, it is the one setting where asymptomatic bacteriuria is always screened for and treated.",
      ],
      answer: [
        {
          heading: "Screening and diagnosis",
          points: [
            "Urine culture at the first antenatal visit or 12-16 weeks; 100,000 CFU/mL of a single organism is significant; dipstick alone is insufficient for screening.",
            "Symptomatic cystitis with dysuria and frequency; pyelonephritis with fever, rigors, flank pain and vomiting, commonest in the second and third trimesters, right side more often.",
          ],
        },
        {
          heading: "Treatment",
          points: [
            "Asymptomatic bacteriuria and cystitis: nitrofurantoin 100 mg twice daily (not after 36 weeks), cephalexin 500 mg four times daily, or amoxicillin-clavulanate 625 mg three times daily for 7 days, or fosfomycin 3 g single dose; repeat culture after treatment as a test of cure.",
            "Avoid fluoroquinolones, tetracyclines, cotrimoxazole in the first trimester and near term, and aminoglycosides unless essential.",
            "Pyelonephritis: admit, intravenous ceftriaxone 1-2 g daily or cefotaxime, fluids, monitor for preterm labour and ARDS, switch to oral after 48 hours afebrile to complete 10-14 days.",
          ],
        },
        {
          heading: "Follow-up and prophylaxis",
          points: [
            "Monthly urine culture for the rest of pregnancy after any infection; nightly nitrofurantoin 50-100 mg or cephalexin 250 mg prophylaxis until delivery after pyelonephritis or recurrent bacteriuria.",
            "Ultrasound of the renal tract for recurrent infection or failure to respond; group B streptococcal bacteriuria also mandates intrapartum penicillin prophylaxis.",
          ],
        },
      ],
      mustDraw: ["A table of drugs safe and unsafe in pregnancy for UTI with the trimester restrictions."],
      markSplit: [
        { part: "Physiology, screening and consequences", marks: 1.5 },
        { part: "Treatment with safe and unsafe drugs", marks: 2.5 },
        { part: "Follow-up and prophylaxis", marks: 1 },
      ],
      keywords: ["asymptomatic bacteriuria", "pregnancy", "nitrofurantoin", "cephalexin", "pyelonephritis"],
    },
  ],
  mcqs: [
    {
      id: "infectious-fever-urinary-tract-infection-q1",
      stem: "A 25-year-old non-pregnant woman has dysuria, frequency and suprapubic discomfort for 2 days with no fever, flank pain or vaginal discharge. Dipstick shows nitrite and leucocyte esterase positive. Which is the most appropriate management in India?",
      options: [
        "Ciprofloxacin 500 mg twice daily for 3 days",
        "Cefixime 200 mg twice daily for 5 days",
        "Nitrofurantoin 100 mg twice daily for 5 days without a culture",
        "Send urine culture and withhold antibiotics until the report",
        "Cotrimoxazole double strength twice daily for 3 days",
      ],
      answer: 2,
      explanation:
        "This is uncomplicated cystitis, which is treated empirically without a culture, and nitrofurantoin 100 mg twice daily for 5 days is the ICMR first-line choice because Indian E. coli remains over 90% susceptible. Ciprofloxacin and cefixime face resistance rates above 70% and 50% respectively and fluoroquinolones carry safety warnings, and cotrimoxazole is only appropriate where local resistance is under 20%, which is not the case in India. Withholding treatment for a culture in an uncomplicated cystitis prolongs symptoms without benefit.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-urinary-tract-infection-q2",
      stem: "A 30-year-old woman at 14 weeks of gestation has a routine antenatal urine culture showing E. coli 100,000 CFU/mL. She has no symptoms. Which is the most appropriate action?",
      options: [
        "No treatment because she is asymptomatic",
        "Repeat culture at 28 weeks and treat only if symptomatic",
        "Nitrofurantoin 100 mg twice daily for 7 days and a test-of-cure culture",
        "Ciprofloxacin 500 mg twice daily for 7 days",
        "Cotrimoxazole double strength twice daily for 3 days",
      ],
      answer: 2,
      explanation:
        "Asymptomatic bacteriuria in pregnancy is always treated because 20-40% progress to pyelonephritis and it is associated with preterm birth; nitrofurantoin for 7 days with a follow-up culture is the standard approach before 36 weeks. Leaving it untreated or deferring to a later culture ignores the risk. Ciprofloxacin is avoided throughout pregnancy, and cotrimoxazole is a folate antagonist contraindicated in the first trimester and again near term because of kernicterus.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-urinary-tract-infection-q3",
      stem: "A 58-year-old man with type 2 diabetes has fever with rigors, right flank pain and vomiting for 3 days. He was given oral cefixime by a pharmacist. Pulse 118, BP 96/60 mmHg, creatinine 2.1 mg/dL. Urine shows plenty of pus cells. Which is the most appropriate management?",
      options: [
        "Oral levofloxacin 750 mg daily and review in 3 days",
        "Oral nitrofurantoin 100 mg twice daily for 7 days",
        "Admit, blood and urine cultures, intravenous piperacillin-tazobactam or meropenem, and an urgent ultrasound of the kidneys",
        "Intramuscular ceftriaxone 1 g single dose and oral cefixime for 10 days",
        "Oral amoxicillin-clavulanate 625 mg three times daily for 14 days",
      ],
      answer: 2,
      explanation:
        "A diabetic man with pyelonephritis, hypotension, acute kidney injury and prior oral cephalosporin failure has complicated UTI with sepsis and a high likelihood of an ESBL organism, and needs admission, cultures, an intravenous beta-lactam-beta-lactamase inhibitor or carbapenem, and same-day ultrasound to exclude obstruction, emphysematous pyelonephritis or abscess. Oral levofloxacin or amoxicillin-clavulanate are inadequate for a septic patient with probable resistant organisms. Nitrofurantoin does not reach the kidney and is contraindicated with a reduced creatinine clearance. A single ceftriaxone dose followed by the cefixime that already failed is not rational.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-urinary-tract-infection-q4",
      stem: "An 82-year-old woman in a care home is brought with confusion for one day. She is afebrile, haemodynamically normal, with no dysuria or flank pain. A dipstick shows leucocyte esterase positive and nitrite negative. Which is the most appropriate next step?",
      options: [
        "Start nitrofurantoin for a urinary tract infection causing delirium",
        "Start ciprofloxacin and send a urine culture",
        "Look for another cause of delirium - medication review, glucose, electrolytes, hypoxia, constipation, stroke - and do not treat the bacteriuria",
        "Insert a urinary catheter to obtain a sterile sample",
        "Give a single dose of fosfomycin as a precaution",
      ],
      answer: 2,
      explanation:
        "Asymptomatic bacteriuria and pyuria are present in up to half of elderly women in institutions, and a positive dipstick in a confused patient without fever or urinary symptoms is far more likely to be incidental than causal; guidelines advise against treatment and instead a search for the real precipitant of delirium. Treating with nitrofurantoin, ciprofloxacin or fosfomycin exposes her to adverse effects and resistance without benefit, and inserting a catheter to obtain a sample introduces infection rather than clarifying the diagnosis.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-urinary-tract-infection-q5",
      stem: "A 40-year-old man has had dysuria and frequency for 3 months with two courses of antibiotics. Repeated urine routine shows 30-40 pus cells per high-power field but routine cultures are sterile. Urine pH is 5.0 and ultrasound shows a mildly dilated left ureter. Which is the most appropriate next investigation?",
      options: [
        "Cystoscopy",
        "Three early-morning urine samples for acid-fast bacilli and CBNAAT",
        "Prostate-specific antigen",
        "Urine cytology",
        "Serum uric acid",
      ],
      answer: 1,
      explanation:
        "Persistent sterile pyuria with acid urine, chronic irritative symptoms and a dilated ureter in an Indian adult is genitourinary tuberculosis until proved otherwise, and the first test is three early-morning urine samples for AFB smear, culture and CBNAAT. Cystoscopy and cytology may follow to assess a contracted bladder or exclude malignancy but are not the first step. PSA and uric acid do not address sterile pyuria.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "infectious-fever-urinary-tract-infection-c1",
      front: "Define uncomplicated UTI.",
      back: "Cystitis or pyelonephritis in a non-pregnant, pre-menopausal woman with a structurally and functionally normal urinary tract and no comorbidity. Everyone else is complicated.",
    },
    {
      id: "infectious-fever-urinary-tract-infection-c2",
      front: "First-line drugs for uncomplicated cystitis in India and why not ciprofloxacin.",
      back: "Nitrofurantoin 100 mg BD 5 days or fosfomycin 3 g single dose. E. coli fluoroquinolone resistance exceeds 70% and over 60% of isolates are ESBL producers.",
    },
    {
      id: "infectious-fever-urinary-tract-infection-c3",
      front: "When is asymptomatic bacteriuria treated?",
      back: "Only in pregnancy and before urological procedures that breach the mucosa. Not in the elderly, diabetics, or catheterised patients.",
    },
    {
      id: "infectious-fever-urinary-tract-infection-c4",
      front: "Safe and unsafe UTI drugs in pregnancy.",
      back: "Safe: nitrofurantoin (not after 36 weeks), cephalexin, amoxicillin-clavulanate, fosfomycin. Unsafe: fluoroquinolones, tetracyclines, cotrimoxazole in first trimester and near term.",
    },
    {
      id: "infectious-fever-urinary-tract-infection-c5",
      front: "Definition of recurrent UTI and the prophylaxis options.",
      back: "Two or more in 6 months or three or more in 12 months. Nitrofurantoin 50-100 mg at night or post-coital for 6-12 months; methenamine hippurate 1 g BD (ALTAR trial); vaginal oestrogen after menopause.",
    },
    {
      id: "infectious-fever-urinary-tract-infection-c6",
      front: "Causes of sterile pyuria.",
      back: "Genitourinary tuberculosis, partially treated UTI, chlamydial urethritis, stones, interstitial nephritis, papillary necrosis, adjacent appendicitis or diverticulitis.",
    },
    {
      id: "infectious-fever-urinary-tract-infection-c7",
      front: "Which patient with pyelonephritis needs imaging, and when?",
      back: "Every man, child, pregnant woman, diabetic and patient with stones or obstruction - ultrasound at presentation; and anyone still febrile at 72 hours on appropriate antibiotics.",
    },
    {
      id: "infectious-fever-urinary-tract-infection-c8",
      front: "Imaging after a first febrile UTI in a child.",
      back: "Ultrasound of kidneys and bladder in all; MCUG if ultrasound abnormal, atypical or recurrent infection, or under 2 years per ISPN; DMSA 4-6 months later for scarring when reflux is found.",
    },
  ],
  references: [
    "ICMR Treatment Guidelines for Antimicrobial Use in Common Syndromes, 3rd edition, 2022 - urinary tract infections",
    "ICMR Antimicrobial Resistance Surveillance Network annual report, 2022 - Enterobacterales resistance data",
    "IDSA Clinical Practice Guideline for the Management of Asymptomatic Bacteriuria, 2019",
    "Indian Society of Pediatric Nephrology, Revised Statement on Management of Urinary Tract Infections, Indian Pediatrics 2011 and 2023 update",
    "Harding C et al., Alternative to prophylactic antibiotics for the treatment of recurrent urinary tract infection in women (ALTAR trial), BMJ 2022",
  ],
});

topics.push({
  id: "infectious-fever-skin-soft-tissue-infection",
  title: "Skin and soft tissue infection: impetigo to necrotising fasciitis",
  oneLiner:
    "Skin and soft tissue infections range from superficial impetigo and folliculitis through cellulitis and abscess to necrotising fasciitis, are caused mainly by Staphylococcus aureus and Streptococcus pyogenes, and are managed by deciding whether the lesion needs drainage, whether MRSA cover is needed, and whether pain out of proportion means the surgeon is needed tonight.",
  frequency: "common",
  keywords: [
    "SSTI",
    "cellulitis",
    "erysipelas",
    "impetigo",
    "abscess",
    "furuncle",
    "carbuncle",
    "necrotising fasciitis",
    "LRINEC",
    "MRSA",
    "cloxacillin",
    "cephalexin",
    "clindamycin",
    "diabetic foot infection",
    "Fournier gangrene",
    "ADLA",
    "incision and drainage",
  ],
  sections: [
    {
      heading: "Classification and organisms",
      points: [
        "**Skin and soft tissue infections are classified by depth and by whether pus is present: superficial (impetigo, ecthyma, folliculitis), dermal and subcutaneous (erysipelas, cellulitis), purulent collections (furuncle, carbuncle, abscess) and deep necrotising infections (necrotising fasciitis, myonecrosis).** The IDSA 2014 guideline separates purulent from non-purulent infection and grades each as mild, moderate (systemic signs) or severe (SIRS with hypotension, immunocompromise, or failed initial therapy).",
        "**Staphylococcus aureus causes almost all purulent infections and Streptococcus pyogenes almost all non-purulent cellulitis and erysipelas**; this single distinction drives the choice between an anti-staphylococcal penicillin and a simple penicillin or amoxicillin.",
        "**About 40% of S. aureus isolates in ICMR surveillance are methicillin-resistant**, and community-acquired MRSA carrying the Panton-Valentine leucocidin gene produces recurrent furunculosis and abscesses in otherwise healthy people; MRSA cover is therefore added for purulent infection that is severe, recurrent, in a household cluster, or failing beta-lactam therapy.",
        "Special exposures change the organism: Pasteurella multocida in dog and cat bites, Eikenella corrodens in human bites, Aeromonas in fresh-water wounds, Vibrio vulnificus in sea-water wounds and raw shellfish in the cirrhotic, Pseudomonas in the diabetic foot and in hot-tub folliculitis, and Clostridium perfringens in contaminated crush wounds.",
        "Risk factors for cellulitis are lymphoedema, venous insufficiency, obesity, tinea pedis and fissured web spaces, previous cellulitis, diabetes, injection drug use and immunosuppression; in filarial lymphoedema the recurrent streptococcal cellulitis is called **acute dermatolymphangioadenitis (ADLA)** and its prevention is the core of morbidity management under the NVBDCP filariasis programme.",
        "Diagnosis is clinical: cultures are taken from pus, bullae, debrided tissue and blood in the severe or immunocompromised patient, but swabs of intact cellulitic skin are not helpful, and imaging is reserved for suspected abscess (ultrasound), osteomyelitis (radiograph, MRI) and necrotising infection (CT for gas, though it must never delay surgery).",
      ],
    },
    {
      heading: "Superficial infections: impetigo, folliculitis, furuncle, carbuncle and abscess",
      points: [
        "**Impetigo** in children presents as honey-coloured crusted erosions on the face and limbs (non-bullous, S. aureus or S. pyogenes) or flaccid bullae (bullous, staphylococcal exfoliative toxin); limited disease is treated with **topical mupirocin 2% or fusidic acid three times daily for 5-7 days**, and extensive disease with oral cephalexin 25-50 mg/kg/day or cloxacillin for 7 days. Post-streptococcal glomerulonephritis can follow skin infection and is not prevented by antibiotic treatment, so warn the family about oedema and dark urine.",
        "**Folliculitis** needs hygiene, antiseptic washes and topical mupirocin; a **furuncle** (boil) is a deep follicular abscess treated with warm compresses and drainage when fluctuant, and a **carbuncle** is a coalescing cluster of furuncles with multiple sinuses on the nape or back of a diabetic, needing drainage, an anti-staphylococcal antibiotic and glucose control.",
        "**Incision and drainage is the primary treatment of any cutaneous abscess**, with a culture of the pus; adjunctive antibiotics for 5-7 days (cotrimoxazole or clindamycin in the American trials) improve cure and reduce recurrence and are given when the abscess is over 2 cm, multiple, surrounded by cellulitis, on the face or hand, in a diabetic or immunocompromised patient, or with systemic signs.",
        "Furuncles in the **danger area of the face - nose, upper lip and medial cheek - must never be squeezed** because the valveless facial veins drain to the cavernous sinus; treat with oral or intravenous anti-staphylococcal antibiotic and warm compresses only.",
        "**Recurrent furunculosis** is managed by decolonisation: intranasal mupirocin twice daily for 5 days, chlorhexidine body wash, hot washing of linen, treatment of household carriers, and a check for diabetes, HIV, iron deficiency and neutrophil disorders.",
        "Scabies with secondary impetigo is common in Indian children and hostels: treat both, with permethrin 5% for the whole household and an antibiotic for the pyoderma, or the pyoderma recurs.",
      ],
    },
    {
      heading: "Cellulitis and erysipelas",
      points: [
        "**Cellulitis is a spreading infection of the dermis and subcutaneous tissue** presenting as a warm, red, tender, oedematous area with indistinct margins, commonly on the leg, often with fever, lymphangitic streaking and tender regional nodes; **erysipelas is the superficial variant with a raised, sharply demarcated, bright-red edge**, typically on the face or leg and almost always streptococcal.",
        "Mark the margin with a pen and the date, elevate the limb, treat pain, and look for the portal of entry - tinea pedis, a fissure, an ulcer, an insect bite, an injection site - because treating the portal prevents the next episode.",
        "**Non-purulent mild cellulitis: oral amoxicillin 500 mg three times daily or cephalexin 500 mg four times daily for 5 days**, extended only if not resolving; **purulent cellulitis or a suspected staphylococcal source: cloxacillin 500 mg four times daily or cephalexin**, and if MRSA is likely add or substitute cotrimoxazole double strength twice daily, doxycycline 100 mg twice daily or clindamycin 300-450 mg three times daily.",
        "**Moderate infection with fever needs intravenous therapy: cefazolin 1-2 g 8-hourly or cloxacillin 1-2 g 4-6 hourly**, and severe infection with sepsis, immunocompromise or failed oral therapy needs vancomycin or linezolid for MRSA plus piperacillin-tazobactam until cultures return; switch to oral once afebrile for 48 hours and the erythema is receding.",
        "The important differentials of a red hot leg are deep vein thrombosis (unilateral swelling without well-defined erythema, risk factors), venous eczema (bilateral, itchy, chronic), gout (joint-centred), contact dermatitis, and necrotising fasciitis; bilateral cellulitis is rare and is usually stasis dermatitis or lipodermatosclerosis.",
        "**Recurrent cellulitis (two or more episodes a year) is prevented by treating tinea pedis and lymphoedema, compression stockings, skin care, and penicillin V 250 mg twice daily prophylaxis for 12 months (PATCH I trial)**; in filarial ADLA the NVBDCP advises daily foot washing with soap and water, drying between the toes, antiseptic for entry lesions, limb elevation and exercise, with penicillin for each acute attack.",
      ],
    },
    {
      heading: "Necrotising soft tissue infection: recognising the emergency",
      points: [
        "**Necrotising fasciitis is a rapidly spreading infection along the deep fascia with thrombosis of perforating vessels and necrosis of overlying skin**; type I is polymicrobial (aerobes and anaerobes) in diabetics, the perineum (Fournier gangrene) and after surgery, type II is monomicrobial S. pyogenes or S. aureus in healthy people after minor trauma, and type III includes clostridial myonecrosis and Vibrio vulnificus.",
        "**The clinical clue is pain out of proportion to the visible signs**, followed by tense oedema extending beyond the erythema, skin that becomes dusky or anaesthetic, haemorrhagic bullae, crepitus, grey dishwater discharge, and systemic toxicity with tachycardia, confusion and hypotension; progression is measured in hours, and the mortality is 20-30% even with treatment.",
        "**The LRINEC score (CRP, leucocyte count, haemoglobin, sodium, creatinine, glucose) helps: 6 or more is intermediate risk and 8 or more is high risk**, but a low score never excludes the diagnosis; a bedside finger test through a small incision showing lack of bleeding, murky fluid and easy separation of fascia confirms it, and CT showing gas or fascial thickening supports it but must never delay surgery.",
        "**Immediate surgical debridement is the only treatment that alters survival**, repeated every 24-48 hours until the tissue is clean; antibiotics alone fail because the thrombosed vessels cannot deliver them.",
        "**Empirical antibiotics: piperacillin-tazobactam 4.5 g 6-hourly or meropenem 1 g 8-hourly, plus clindamycin 600-900 mg 8-hourly to suppress toxin production, plus vancomycin or linezolid until MRSA is excluded**; for proven streptococcal disease penicillin G 4 million units 4-hourly with clindamycin; intravenous immunoglobulin is used in streptococcal toxic shock with weak evidence.",
        "In the family clinic the task is recognition and immediate transfer: intravenous access, fluids, blood cultures, the first dose of antibiotic, and a phone call to the surgeon - not observation overnight to see whether the antibiotic works.",
      ],
    },
    {
      heading: "Diabetic foot infection and bite wounds",
      points: [
        "**Diabetic foot infection is diagnosed clinically by two or more of purulence, erythema, warmth, tenderness, induration or swelling in a foot wound**, and graded by the IWGDF/IDSA 2023 system as mild (skin and subcutaneous tissue only, erythema under 2 cm), moderate (deeper structures or erythema over 2 cm, no systemic signs) and severe (systemic inflammatory response).",
        "**Probe the wound with a sterile blunt probe: contact with bone (positive probe-to-bone test) means osteomyelitis until proved otherwise**, supported by an ESR above 70 mm in the first hour, a plain radiograph (changes lag 2-3 weeks) and MRI; a sausage toe and a wound over 2 cm square or present for over 6 weeks also predict bone involvement.",
        "Mild infection is treated for 1-2 weeks with oral cephalexin, cloxacillin or amoxicillin-clavulanate covering staphylococci and streptococci; moderate and severe infections need admission, tissue culture from the debrided base rather than a surface swab, and intravenous piperacillin-tazobactam or amoxicillin-clavulanate with MRSA cover for 2-3 weeks, extended to 6 weeks for osteomyelitis without resection.",
        "**Antibiotics are one quarter of diabetic foot care: debridement of dead tissue, complete off-loading of the ulcer, assessment of arterial supply with pulses and ankle-brachial index, and glycaemic control are the other three**, and an ischaemic infected foot needs a vascular opinion before any hope of healing.",
        "**Dog, cat and human bites need thorough irrigation, debridement, tetanus prophylaxis, rabies post-exposure prophylaxis for animal bites, and no primary closure of punctures or hand wounds**; give amoxicillin-clavulanate 625 mg three times daily for 3-5 days as prophylaxis for hand, face, deep puncture, cat and immunocompromised bites, and for 7-14 days if infected, because it covers Pasteurella, Eikenella and anaerobes that cephalexin and cloxacillin miss.",
        "Hand infections deserve special respect: a swollen finger held in flexion with pain on passive extension and tenderness along the tendon sheath (Kanavel signs) is flexor tenosynovitis needing surgical drainage within 24 hours, and a bite over the knuckle from a punch to the mouth is a joint injury until proven otherwise.",
      ],
    },
  ],
  tables: [
    {
      heading: "Skin and soft tissue infections: organism and first-line treatment",
      columns: ["Condition", "Usual organism", "First-line treatment", "Duration"],
      rows: [
        ["Impetigo, limited", "S. aureus, S. pyogenes", "Topical mupirocin 2% or fusidic acid TDS", "5-7 days"],
        ["Impetigo, extensive", "S. aureus, S. pyogenes", "Oral cephalexin or cloxacillin", "7 days"],
        ["Abscess, furuncle, carbuncle", "S. aureus (40% MRSA)", "Incision and drainage; cotrimoxazole or clindamycin if adjunct indicated", "5-7 days"],
        ["Non-purulent cellulitis, erysipelas", "Beta-haemolytic streptococci", "Amoxicillin 500 mg TDS or cephalexin 500 mg QID", "5 days, extend if not improving"],
        ["Purulent cellulitis", "S. aureus", "Cloxacillin 500 mg QID; add cotrimoxazole, doxycycline or clindamycin for MRSA", "5-7 days"],
        ["Severe cellulitis with sepsis", "Streptococci, S. aureus including MRSA", "IV vancomycin or linezolid plus piperacillin-tazobactam", "7-14 days, oral switch when afebrile 48 hours"],
        ["Necrotising fasciitis", "Polymicrobial or S. pyogenes", "Urgent debridement; piperacillin-tazobactam or meropenem plus clindamycin plus vancomycin", "Until source controlled, usually 2-3 weeks"],
        ["Animal or human bite", "Pasteurella, Eikenella, anaerobes, staphylococci", "Amoxicillin-clavulanate 625 mg TDS", "3-5 days prophylaxis; 7-14 days if infected"],
        ["Diabetic foot, mild", "S. aureus, streptococci", "Oral cephalexin, cloxacillin or amoxicillin-clavulanate", "1-2 weeks"],
        ["Diabetic foot, moderate to severe", "Polymicrobial including Pseudomonas, anaerobes, MRSA", "IV piperacillin-tazobactam plus MRSA cover; debridement and off-loading", "2-3 weeks; 6 weeks for osteomyelitis"],
      ],
    },
    {
      heading: "LRINEC score for necrotising fasciitis",
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
  redFlags: [
    "Pain out of proportion to the visible signs, tense oedema beyond the erythema, dusky or anaesthetic skin, bullae or crepitus - necrotising fasciitis; surgeon tonight.",
    "Cellulitis with hypotension, tachycardia, confusion or rapidly spreading margins over hours - sepsis; intravenous antibiotics and admission.",
    "Periorbital swelling with proptosis, painful eye movements or reduced vision - orbital cellulitis; CT and intravenous therapy.",
    "Furuncle in the nasal and upper lip danger area with headache, fever or eye signs - cavernous sinus thrombosis risk.",
    "Finger held in flexion with pain on passive extension and tenderness along the tendon sheath - flexor tenosynovitis needing drainage within 24 hours.",
    "Diabetic foot infection with systemic signs, a positive probe-to-bone test or absent pulses - admission, imaging and surgical and vascular review.",
  ],
  pearls: [
    "Purulent means staphylococcus, non-purulent means streptococcus - that one distinction chooses the antibiotic.",
    "An abscess is cured by a scalpel; the antibiotic is the adjunct.",
    "Five days of amoxicillin or cephalexin is enough for uncomplicated cellulitis that is improving; longer courses add resistance, not cure.",
    "Pain out of proportion is the single most important sign in soft tissue infection - it means necrotising fasciitis until the surgeon says otherwise.",
    "Never squeeze a boil on the nose or upper lip.",
    "Probe every diabetic foot ulcer: touching bone means osteomyelitis.",
    "Bites get amoxicillin-clavulanate because cloxacillin and cephalexin do not cover Pasteurella.",
    "Treat the tinea pedis and the lymphoedema, or the cellulitis comes back next year.",
  ],
  theory: [
    {
      id: "infectious-fever-skin-soft-tissue-infection-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "Classify skin and soft tissue infections. Discuss the clinical features, diagnosis and management of cellulitis, and describe how you would recognise and manage necrotising fasciitis in a district hospital.",
      openingLines: [
        "Skin and soft tissue infections are classified by depth and by the presence of pus into superficial (impetigo, folliculitis), dermal and subcutaneous (erysipelas, cellulitis), purulent collections (furuncle, carbuncle, abscess) and deep necrotising infections (necrotising fasciitis, myonecrosis), and graded as mild, moderate or severe by systemic signs.",
        "Staphylococcus aureus, of which about 40% of Indian isolates are methicillin-resistant, causes most purulent infections, and Streptococcus pyogenes causes most cellulitis and erysipelas.",
      ],
      answer: [
        {
          heading: "1. Classification",
          points: [
            "Superficial: impetigo, ecthyma, folliculitis. Dermal-subcutaneous: erysipelas, cellulitis. Purulent: furuncle, carbuncle, abscess. Necrotising: necrotising fasciitis types I to III, gas gangrene, Fournier gangrene. Special: diabetic foot, bite wounds, surgical site infection.",
            "Severity grading (IDSA 2014): mild - no systemic signs; moderate - systemic signs; severe - SIRS with hypotension, immunocompromise or failure of initial therapy.",
          ],
        },
        {
          heading: "2. Cellulitis: clinical features and diagnosis",
          points: [
            "Warm, red, tender, oedematous area with indistinct margins, usually on the leg, with fever, lymphangitis and regional nodes; erysipelas has a raised sharply demarcated edge.",
            "Portal of entry: tinea pedis, fissures, ulcers, bites, injections; risk factors of lymphoedema, venous disease, obesity, diabetes, previous cellulitis.",
            "Differentials: deep vein thrombosis, venous eczema, gout, contact dermatitis, necrotising fasciitis; bilateral cellulitis is rare.",
            "Diagnosis is clinical; blood cultures and pus cultures in severe or purulent disease; ultrasound for occult abscess; mark the margin.",
          ],
        },
        {
          heading: "3. Management of cellulitis",
          points: [
            "Mild non-purulent: amoxicillin 500 mg TDS or cephalexin 500 mg QID for 5 days; purulent or staphylococcal: cloxacillin 500 mg QID, with cotrimoxazole, doxycycline or clindamycin for MRSA risk.",
            "Moderate: intravenous cefazolin or cloxacillin; severe: vancomycin or linezolid plus piperacillin-tazobactam; oral switch after 48 hours afebrile.",
            "Elevation, analgesia, treatment of portal of entry, drainage of any collection; prevention of recurrence with foot care, compression, treatment of tinea, and penicillin V 250 mg BD for a year after two or more episodes; ADLA care in filarial lymphoedema.",
          ],
        },
        {
          heading: "4. Necrotising fasciitis",
          points: [
            "Recognition: pain out of proportion, oedema beyond erythema, dusky anaesthetic skin, haemorrhagic bullae, crepitus, dishwater discharge, rapid progression, systemic toxicity; LRINEC 6 or more supports, low score does not exclude; finger test at the bedside.",
            "Management: resuscitation with fluids, blood cultures, first dose of piperacillin-tazobactam or meropenem plus clindamycin plus vancomycin, and immediate surgical debridement repeated until clean; transfer to a surgical centre without delay; tetanus prophylaxis; intensive care support.",
            "Mortality 20-30%; every hour of delay to the theatre increases it.",
          ],
        },
      ],
      mustDraw: [
        "A classification table of skin and soft tissue infections by depth with organism and first-line drug.",
        "A list or table of the LRINEC score parameters and interpretation.",
      ],
      markSplit: [
        { part: "Classification and organisms", marks: 2 },
        { part: "Cellulitis clinical features, differentials and diagnosis", marks: 2.5 },
        { part: "Cellulitis management and prevention of recurrence", marks: 2.5 },
        { part: "Necrotising fasciitis recognition and management", marks: 3 },
      ],
      keywords: ["cellulitis", "necrotising fasciitis", "LRINEC", "MRSA", "cloxacillin", "clindamycin"],
    },
    {
      id: "infectious-fever-skin-soft-tissue-infection-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write a short note on the classification and management of diabetic foot infection.",
      openingLines: [
        "Diabetic foot infection is infection of any tissue below the malleoli in a person with diabetes, diagnosed clinically by two or more of purulence, erythema, warmth, tenderness, induration or swelling, and it is the commonest cause of non-traumatic lower limb amputation in India.",
        "Neuropathy, ischaemia and immune dysfunction combine so that a trivial wound becomes a limb-threatening infection, and management rests on antibiotics, debridement, off-loading and revascularisation together.",
      ],
      answer: [
        {
          heading: "Classification (IWGDF/IDSA 2023)",
          points: [
            "Uninfected: no signs. Mild: skin and subcutaneous tissue only, erythema 0.5-2 cm. Moderate: erythema over 2 cm or deeper structures (abscess, osteomyelitis, tendon, joint), no systemic signs. Severe: any infection with systemic inflammatory response.",
            "Osteomyelitis suspected by positive probe-to-bone test, ESR above 70, ulcer over 2 cm square or lasting over 6 weeks, sausage toe; confirmed by radiograph, MRI or bone biopsy.",
          ],
        },
        {
          heading: "Assessment",
          points: [
            "Wound depth and probe, peripheral pulses and ankle-brachial index, neuropathy testing with monofilament, glycaemic status, renal function, and tissue culture from the debrided base rather than a surface swab.",
          ],
        },
        {
          heading: "Management",
          points: [
            "Mild: oral cephalexin, cloxacillin or amoxicillin-clavulanate for 1-2 weeks. Moderate and severe: admission, intravenous piperacillin-tazobactam or amoxicillin-clavulanate plus MRSA cover with vancomycin or linezolid, 2-3 weeks for soft tissue, 6 weeks for osteomyelitis without resection.",
            "Surgical debridement of necrotic tissue and drainage of abscess, off-loading with total contact cast or removable walker, revascularisation if ischaemic, glycaemic control, and dressing care.",
            "Prevention: daily foot inspection, appropriate footwear, callus care, smoking cessation, annual foot risk screening, and education of the patient and family.",
          ],
        },
      ],
      mustDraw: ["A table of the mild, moderate and severe grades with the treatment setting, drug and duration for each."],
      markSplit: [
        { part: "Definition and classification with osteomyelitis clues", marks: 2 },
        { part: "Assessment", marks: 1 },
        { part: "Management and prevention", marks: 2 },
      ],
      keywords: ["diabetic foot infection", "probe-to-bone", "IWGDF", "off-loading", "osteomyelitis"],
    },
  ],
  mcqs: [
    {
      id: "infectious-fever-skin-soft-tissue-infection-q1",
      stem: "A 45-year-old man with diabetes presents with a painful, swollen left thigh 2 days after a minor scratch. Temperature 39.5 C, pulse 128, BP 88/56 mmHg. The thigh is tense and exquisitely tender well beyond a 10 cm area of dusky erythema, with two haemorrhagic bullae and crepitus. Which is the most appropriate immediate management?",
      options: [
        "Oral amoxicillin-clavulanate and review in 24 hours",
        "Intravenous cefazolin, elevation and observation overnight to assess the response",
        "Intravenous fluids, blood cultures, intravenous piperacillin-tazobactam plus clindamycin, and immediate surgical debridement",
        "MRI of the thigh before any intervention",
        "Intravenous vancomycin alone and CT of the thigh",
      ],
      answer: 2,
      explanation:
        "Pain out of proportion, tense oedema beyond the erythema, dusky skin, haemorrhagic bullae, crepitus and shock in a diabetic is necrotising fasciitis, and survival depends on immediate surgical debridement with resuscitation and broad-spectrum antibiotics plus clindamycin for toxin suppression. Oral therapy or overnight observation on cefazolin allows the infection to spread along the fascia. MRI or CT can support the diagnosis but must never delay surgery in a patient with this clinical picture, and vancomycin alone does not cover the polymicrobial flora of type I necrotising infection.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-skin-soft-tissue-infection-q2",
      stem: "A 30-year-old woman has a 3 cm fluctuant, tender abscess on the thigh for 4 days with 1 cm of surrounding erythema, no fever and no comorbidity. Which is the most appropriate management?",
      options: [
        "Oral cloxacillin for 7 days and review",
        "Incision and drainage with culture of the pus; consider a short course of cotrimoxazole",
        "Intravenous vancomycin for 5 days",
        "Warm compresses only",
        "Needle aspiration and oral ciprofloxacin",
      ],
      answer: 1,
      explanation:
        "Incision and drainage is the definitive treatment of a fluctuant abscess, with the pus sent for culture because 40% of Indian S. aureus is MRSA; a short adjunctive course of cotrimoxazole or clindamycin improves cure modestly for an abscess over 2 cm. Antibiotics alone, whether oral cloxacillin or intravenous vancomycin, do not sterilise a collection with no blood supply, and vancomycin is disproportionate for a well patient. Warm compresses suit an early non-fluctuant furuncle, not a 3 cm collection. Needle aspiration has inferior cure rates and ciprofloxacin is a poor anti-staphylococcal agent.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-skin-soft-tissue-infection-q3",
      stem: "A 55-year-old woman has a warm, red, tender area with indistinct margins on the right shin, fever of 38.2 C and fissured toe webs. She is otherwise well with normal vital signs. Which is the most appropriate treatment?",
      options: [
        "Oral amoxicillin 500 mg three times daily or cephalexin 500 mg four times daily for 5 days, topical antifungal for the toe webs, and elevation",
        "Oral clindamycin for 14 days",
        "Intravenous vancomycin because MRSA is common in India",
        "Oral azithromycin 500 mg daily for 3 days",
        "Topical mupirocin alone",
      ],
      answer: 0,
      explanation:
        "Non-purulent cellulitis is streptococcal in the great majority and is treated with amoxicillin or cephalexin for 5 days, extended only if not improving, with treatment of the tinea pedis that served as the portal of entry and elevation of the limb. Clindamycin or vancomycin for MRSA are reserved for purulent infection, severe disease or failed beta-lactam therapy, and a 14-day course is unnecessarily long. Azithromycin has unreliable streptococcal activity because of macrolide resistance. Topical mupirocin does not treat dermal and subcutaneous infection.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-skin-soft-tissue-infection-q4",
      stem: "A 62-year-old man with type 2 diabetes for 15 years has a 2.5 cm plantar ulcer under the first metatarsal head for 2 months with purulent discharge and 3 cm of surrounding erythema, no fever. A sterile probe passed into the ulcer touches bone. ESR is 88 mm in the first hour. Which statement is correct?",
      options: [
        "The infection is mild and oral cephalexin for 7 days is sufficient",
        "Osteomyelitis is likely; obtain a radiograph and bone or deep tissue culture, and plan antibiotics for about 6 weeks with debridement and off-loading",
        "A surface swab of the ulcer should guide antibiotic choice",
        "Antibiotics can be stopped once the surrounding erythema resolves",
        "Immediate below-knee amputation is indicated",
      ],
      answer: 1,
      explanation:
        "A positive probe-to-bone test with an ESR above 70 and a chronic ulcer over 2 cm square makes osteomyelitis highly likely, so a radiograph (and MRI if unclear), deep tissue or bone culture, surgical debridement, complete off-loading and 6 weeks of antibiotics without resection are the plan. Erythema over 2 cm with deep involvement makes this moderate, not mild. Surface swabs grow colonisers and mislead. Stopping antibiotics on resolution of erythema undertreats bone infection, and amputation is not the first step in a foot with no sepsis and unknown vascular status.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-skin-soft-tissue-infection-q5",
      stem: "A 24-year-old man was bitten on the hand by a stray dog 6 hours ago. There are two deep puncture wounds over the dorsum with mild bleeding. Which of the following is the correct management of the wound infection risk?",
      options: [
        "Primary suturing after cleaning to reduce infection",
        "Cloxacillin 500 mg four times daily for 5 days",
        "Wound irrigation, no primary closure, tetanus prophylaxis, rabies post-exposure prophylaxis, and amoxicillin-clavulanate 625 mg three times daily for 3-5 days",
        "Topical mupirocin and review in a week",
        "Cephalexin 500 mg four times daily for 7 days",
      ],
      answer: 2,
      explanation:
        "Deep puncture bites on the hand carry a high infection risk from Pasteurella multocida, anaerobes and staphylococci, and amoxicillin-clavulanate is the drug that covers all of them; the wound is irrigated and left open, tetanus toxoid is given, and a category III exposure needs rabies vaccine and immunoglobulin. Primary closure of hand punctures seals in infection. Cloxacillin and cephalexin miss Pasteurella, which is the organism most likely to cause rapid cellulitis after a bite. Topical therapy alone is inadequate for a deep puncture.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "infectious-fever-skin-soft-tissue-infection-c1",
      front: "Organism rule for skin and soft tissue infection.",
      back: "Purulent (abscess, furuncle, carbuncle) - Staphylococcus aureus. Non-purulent (cellulitis, erysipelas) - Streptococcus pyogenes.",
    },
    {
      id: "infectious-fever-skin-soft-tissue-infection-c2",
      front: "Treatment of limited and extensive impetigo.",
      back: "Limited: topical mupirocin 2% or fusidic acid TDS for 5-7 days. Extensive: oral cephalexin or cloxacillin for 7 days. Warn about post-streptococcal glomerulonephritis.",
    },
    {
      id: "infectious-fever-skin-soft-tissue-infection-c3",
      front: "Oral drugs that cover community MRSA in India.",
      back: "Cotrimoxazole double strength BD, doxycycline 100 mg BD, clindamycin 300-450 mg TDS; linezolid 600 mg BD for severe infection.",
    },
    {
      id: "infectious-fever-skin-soft-tissue-infection-c4",
      front: "Duration of antibiotics for uncomplicated cellulitis.",
      back: "Five days if improving (Hepburn trial); extend only if the infection has not improved.",
    },
    {
      id: "infectious-fever-skin-soft-tissue-infection-c5",
      front: "Clinical clues to necrotising fasciitis.",
      back: "Pain out of proportion, oedema beyond erythema, dusky or anaesthetic skin, haemorrhagic bullae, crepitus, dishwater discharge, systemic toxicity, progression over hours.",
    },
    {
      id: "infectious-fever-skin-soft-tissue-infection-c6",
      front: "LRINEC score components and cut-offs.",
      back: "CRP, leucocyte count, haemoglobin, sodium, creatinine, glucose. Score 6-7 intermediate, 8 or more high risk. A low score does not exclude the diagnosis.",
    },
    {
      id: "infectious-fever-skin-soft-tissue-infection-c7",
      front: "Antibiotic regimen for necrotising fasciitis and why clindamycin.",
      back: "Piperacillin-tazobactam or meropenem plus clindamycin plus vancomycin, with immediate debridement. Clindamycin suppresses toxin production and works in the stationary phase (Eagle effect).",
    },
    {
      id: "infectious-fever-skin-soft-tissue-infection-c8",
      front: "Prevention of recurrent cellulitis.",
      back: "Treat tinea pedis and lymphoedema, compression, skin care, and penicillin V 250 mg BD for 12 months after two or more episodes (PATCH I). Foot hygiene for filarial ADLA under NVBDCP.",
    },
  ],
  references: [
    "Stevens DL et al., IDSA Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections, 2014 update",
    "ICMR Treatment Guidelines for Antimicrobial Use in Common Syndromes, 3rd edition, 2022 - skin and soft tissue infections",
    "IWGDF/IDSA Guidelines on the Diagnosis and Treatment of Diabetes-related Foot Infections, 2023",
    "Wong CH et al., The LRINEC score: a tool for distinguishing necrotizing fasciitis from other soft tissue infections, Critical Care Medicine 2004",
    "Thomas KS et al., Penicillin to prevent recurrent leg cellulitis (PATCH I), New England Journal of Medicine 2013",
    "NVBDCP Guidelines on Morbidity Management and Disability Prevention for lymphatic filariasis, MoHFW",
  ],
});

topics.push({
  id: "infectious-fever-rabies-animal-bite",
  title: "Animal bite and rabies post-exposure prophylaxis",
  oneLiner:
    "Rabies is a uniformly fatal Lyssavirus encephalitis transmitted by the saliva of a rabid animal, almost always a dog in India, and it is completely preventable by immediate wound washing for 15 minutes, a cell culture vaccine by the intradermal or intramuscular schedule, and rabies immunoglobulin infiltrated into every category III wound.",
  frequency: "common",
  keywords: [
    "rabies",
    "dog bite",
    "animal bite",
    "post-exposure prophylaxis",
    "PEP",
    "PrEP",
    "WHO category",
    "rabies immunoglobulin",
    "RIG",
    "ERIG",
    "HRIG",
    "rabies monoclonal antibody",
    "Essen regimen",
    "Zagreb regimen",
    "Thai Red Cross intradermal",
    "National Rabies Control Programme",
    "NAPRE",
    "hydrophobia",
    "Negri bodies",
  ],
  sections: [
    {
      heading: "Virus, burden and the disease",
      points: [
        "**Rabies virus is a bullet-shaped, single-stranded negative-sense RNA virus of the genus Lyssavirus, family Rhabdoviridae**; it enters through a bite, scratch or lick on broken skin or mucosa, replicates in muscle, travels centripetally along peripheral nerves at 50-100 mm a day, multiplies in the brain, and then spreads centrifugally to the salivary glands.",
        "**India accounts for about 36% of the world's rabies deaths, an estimated 18,000-20,000 a year**, with 96-97% transmitted by dogs, the rest by cats, monkeys, mongooses, jackals and cattle; children under 15 years are 40% of victims because they are bitten on the face and head and often do not report the bite.",
        "**Incubation is usually 20-90 days but ranges from 4 days to several years**, shorter with bites on the face, head and neck, multiple or deep bites, and in children, because the distance the virus must travel to the brain is shorter and the inoculum larger.",
        "**Furious rabies (80%)** begins with fever and paraesthesia or itching at the healed bite site, then agitation, hydrophobia (painful pharyngeal spasm on attempting to drink or even on seeing water), aerophobia, hypersalivation and autonomic instability, with death within a week; **paralytic (dumb) rabies (20%)** presents as an ascending flaccid paralysis that mimics Guillain-Barre syndrome and is missed unless the bite history is sought.",
        "**Once symptoms begin rabies is virtually 100% fatal**; the Milwaukee protocol has not reproduced its single success, and treatment is palliative sedation with barrier precautions for saliva. Ante-mortem diagnosis uses nuchal skin biopsy for viral antigen by direct fluorescent antibody, saliva RT-PCR and CSF antibody; post-mortem diagnosis is by fluorescent antibody testing of brain and the Negri bodies in hippocampal and Purkinje neurons.",
        "**Rabies is a notifiable disease in India (2021), reported through IDSP**, and the **National Rabies Control Programme (NRCP)** under NCDC, launched in the 12th Five Year Plan, together with the **National Action Plan for Dog Mediated Rabies Elimination (NAPRE, 2021)** aims at zero dog-mediated human rabies deaths by 2030 through PEP availability, dog vaccination, animal birth control and surveillance; the Semple nerve tissue vaccine was discontinued in 2004.",
      ],
    },
    {
      heading: "Categorising the exposure",
      points: [
        "**Category I: touching or feeding an animal, or licks on intact skin - no exposure; wash the skin, no prophylaxis** if the history is reliable.",
        "**Category II: nibbling of uncovered skin, minor scratches or abrasions without bleeding - wound washing and vaccine**; rabies immunoglobulin is added for the immunocompromised.",
        "**Category III: single or multiple transdermal bites or scratches, licks on broken skin, contamination of mucous membranes with saliva, and any direct contact with a bat - wound washing, vaccine and rabies immunoglobulin.** A bite through clothing that has broken the skin is category III, and a scratch that bleeds is category III.",
        "Do not downgrade because the bite was provoked, because the dog was a pet, because the dog was vaccinated, or because the wound looks clean: **a provoked bite from a rabid animal transmits rabies just as well**, and vaccine failure in dogs is well documented. Bites from rats, squirrels, hares and birds essentially never transmit rabies and do not need PEP.",
        "**If a dog or cat is healthy and available for observation, it is observed for 10 days**; if it remains healthy the vaccine course may be stopped after the doses already given, but PEP is always started on day 0 and never delayed for the observation, because a dog shedding virus in saliva will show signs within 10 days.",
        "**There is no time limit for starting PEP**: a patient who presents weeks or months after a bite still receives the full course, because the incubation period may not yet have ended; pregnancy, lactation, infancy and old age are never contraindications.",
      ],
    },
    {
      heading: "Wound management: the step that halves the risk",
      points: [
        "**Wash the wound immediately with soap and running water for 15 minutes**, flushing every puncture; this removes and inactivates virus at the site and alone reduces the risk of rabies by about half. Then apply a virucidal agent such as povidone iodine or 70% alcohol.",
        "**Do not apply chilli, turmeric, lime, oil, plant juice, cow dung or any traditional irritant**, and do not cauterise; these delay healing and do nothing to the virus.",
        "**Do not suture the wound.** If closure is unavoidable for cosmetic or haemostatic reasons, infiltrate rabies immunoglobulin into the wound first, wait several hours, and then place loose sutures; primary closure without RIG drives virus into the tissue.",
        "Give **tetanus toxoid or Td according to immunisation status**, and antibiotics (amoxicillin-clavulanate for 3-5 days) for deep punctures, hand, face and genital bites, cat bites, crush injuries and the immunocompromised; assess for tendon, nerve, joint and vascular injury and refer when present.",
        "Explore and irrigate deep wounds under local anaesthesia, remove foreign material and devitalised tissue, and leave the wound open with a light dressing; review at 48 hours for infection.",
        "Record the animal, the circumstances, the category, the sites of wounds and the doses given, in the patient's card and in the clinic register, because the schedule spans a month and the patient will be seen by others.",
      ],
    },
    {
      heading: "Vaccination schedules: intramuscular and intradermal",
      points: [
        "**Only cell culture or embryonated egg vaccines are used - purified chick embryo cell (PCECV), purified Vero cell (PVRV) and human diploid cell vaccine - each with a potency of at least 2.5 IU per intramuscular dose**; the whole vial (0.5 mL or 1 mL depending on the brand) is one intramuscular dose regardless of age or weight.",
        "**Intramuscular Essen regimen: one dose on days 0, 3, 7, 14 and 28 (five doses, five visits)** into the **deltoid in adults and the anterolateral thigh in children under 2 years - never the gluteal region**, where fat delays absorption and lowers the antibody response.",
        "**Intramuscular Zagreb regimen (2-1-1): two doses on day 0, one in each deltoid, then one dose on day 7 and one on day 21 (four doses, three visits)**, which improves completion because there are fewer visits.",
        "**Intradermal updated Thai Red Cross regimen (2-2-2-0-2): 0.1 mL at each of two sites (both deltoids) on days 0, 3, 7 and 28 - eight doses in four visits**, raising a papule at each site; a reconstituted vial must be used within 6-8 hours and shared between patients, which is why the intradermal route is used at anti-rabies clinics with adequate throughput and cuts vaccine cost by 60-80%. WHO 2018 also endorses a 1-week 2-site intradermal schedule (days 0, 3, 7) and a 4-dose intramuscular schedule (days 0, 3, 7 and 14-28) as abbreviated options.",
        "**Previously fully vaccinated patients (complete PEP or PrEP with a cell culture vaccine) need only two doses on days 0 and 3, intramuscular or intradermal, with no immunoglobulin, whatever the interval since the last dose**; WHO 2018 also allows a single-visit 4-site intradermal dose on day 0. Those who received nerve tissue vaccine or an incomplete course are treated as unvaccinated.",
        "**Pre-exposure prophylaxis (PrEP)** for veterinarians, animal handlers, laboratory workers, wildlife staff, and children in high-risk settings: intradermal or intramuscular doses on days 0 and 7 (WHO 2018), or days 0, 7 and 21 or 28 in the Indian schedule; a booster is given only on exposure or when the titre falls below 0.5 IU/mL in those tested. Intercurrent illness, chloroquine and steroids reduce the response, and the immunocompromised should have a rapid fluorescent focus inhibition test titre of 0.5 IU/mL or more checked after the course.",
      ],
    },
    {
      heading: "Rabies immunoglobulin and monoclonal antibodies",
      points: [
        "**Rabies immunoglobulin provides passive antibody at the wound for the 7-10 days before the vaccine produces active immunity, and it is indicated for every category III exposure and for category II exposure in the immunocompromised**; it is given once, on day 0, or as late as day 7 after the first vaccine dose, and never after that because it would suppress the vaccine response.",
        "**Equine RIG: 40 IU/kg, maximum 3000 IU; human RIG: 20 IU/kg, maximum 1500 IU; rabies monoclonal antibody: 3.33 IU/kg for the single-antibody product (docaravimab, Rabishield) or 40 IU/kg for the two-antibody cocktail (Twinrab)**; the monoclonal products are Indian-manufactured, free of serum sickness and now widely used in government anti-rabies clinics.",
        "**Infiltrate as much of the calculated dose as anatomically possible into and around every wound**, including the fingertip and face wounds, using a fine needle; if the volume is too small for multiple or large wounds, dilute two- to three-fold with normal saline so that every wound is infiltrated. The remaining volume, if any, may be injected intramuscularly at a site distant from the vaccine, though WHO 2018 states this adds nothing.",
        "**Never exceed the calculated dose**, never give RIG in the same syringe or the same site as the vaccine, and never give RIG to a patient who has previously completed a full vaccine course, because the pre-existing memory response is faster than passive antibody and RIG would blunt it.",
        "**Skin sensitivity testing before equine RIG is no longer recommended** (Indian guidelines 2019), because it does not predict anaphylaxis; instead give ERIG with adrenaline, antihistamine and resuscitation equipment at hand, observe for 30 minutes, and warn about serum sickness at 7-14 days, which is treated with antihistamines and a short course of steroids.",
        "Where RIG is unavailable the vaccine must still be started immediately and the patient referred to the nearest centre that stocks RIG within 7 days; a category III bite on the face with no RIG is an emergency referral, not a note in the file.",
      ],
    },
  ],
  tables: [
    {
      heading: "WHO categories of exposure and the prophylaxis for each",
      columns: ["Category", "Type of contact with a suspect rabid animal", "Recommended prophylaxis"],
      rows: [
        ["I", "Touching or feeding the animal; licks on intact skin", "None if the history is reliable; wash the skin"],
        ["II", "Nibbling of uncovered skin; minor scratches or abrasions without bleeding", "Wound washing and vaccine; add RIG if immunocompromised"],
        ["III", "Single or multiple transdermal bites or scratches; licks on broken skin; saliva on mucous membranes; any contact with a bat", "Wound washing, vaccine and rabies immunoglobulin infiltrated into all wounds"],
      ],
    },
    {
      heading: "Vaccine regimens and immunoglobulin products used in India",
      columns: ["Regimen or product", "Route and dose", "Schedule", "Notes"],
      rows: [
        ["Essen (IM)", "One vial (0.5 or 1 mL) IM in deltoid or anterolateral thigh", "Days 0, 3, 7, 14, 28", "Five doses, five visits; never gluteal"],
        ["Zagreb 2-1-1 (IM)", "One vial IM per site", "Two doses day 0 (one each deltoid), then days 7 and 21", "Four doses, three visits"],
        ["Updated Thai Red Cross (ID)", "0.1 mL at each of two sites", "Days 0, 3, 7, 28", "Eight doses, four visits; vial shared, use within 6-8 hours"],
        ["Re-exposure after complete prior course", "One dose IM or ID per visit", "Days 0 and 3", "No RIG; any interval since prior course; WHO also allows 4-site ID on day 0"],
        ["Pre-exposure prophylaxis", "IM or ID", "Days 0 and 7 (WHO 2018) or 0, 7, 21/28 (India)", "For occupational risk; booster only on exposure or low titre"],
        ["Equine RIG", "40 IU/kg, maximum 3000 IU", "Day 0, up to day 7", "No skin test; adrenaline ready; serum sickness possible"],
        ["Human RIG", "20 IU/kg, maximum 1500 IU", "Day 0, up to day 7", "Costly; no serum sickness"],
        ["Rabies monoclonal antibody", "3.33 IU/kg (single mAb) or 40 IU/kg (two-mAb cocktail)", "Day 0, up to day 7", "Indian products; infiltrate into wounds like RIG"],
      ],
    },
  ],
  redFlags: [
    "Category III bite on the face, head, neck or fingers, or multiple deep bites - shortest incubation; RIG and vaccine today, not tomorrow.",
    "Any bite in a child, an immunocompromised patient or a patient who reports a bite from an unprovoked, sick or dead animal - full PEP without debate.",
    "Bite from a wild animal (mongoose, jackal, fox, monkey) or any contact with a bat - category III.",
    "Paraesthesia or itching at a healed bite site with fever, anxiety or difficulty swallowing - prodrome of rabies; palliative care and protection of contacts.",
    "Ascending flaccid paralysis with a bite history in the preceding months - paralytic rabies, not Guillain-Barre syndrome.",
    "Category III wound in a clinic with no rabies immunoglobulin - start vaccine and refer the same day; RIG must be given within 7 days of the first vaccine dose.",
  ],
  pearls: [
    "Fifteen minutes of soap and running water halves the risk of rabies before any vaccine is opened.",
    "Blood at the site of a scratch or bite makes it category III: vaccine plus immunoglobulin.",
    "The whole vial is one intramuscular dose whatever the age or weight; in the deltoid or thigh, never the buttock.",
    "Essen 0-3-7-14-28 intramuscular; Zagreb 2-1-1 on days 0-7-21; Thai Red Cross intradermal 0.1 mL at two sites on days 0-3-7-28.",
    "ERIG 40 IU/kg, HRIG 20 IU/kg, infiltrated into every wound, up to day 7 - and never for a previously fully vaccinated patient.",
    "A previously fully vaccinated patient needs two doses on days 0 and 3 and no immunoglobulin, however many years ago the course was.",
    "Observe the dog for 10 days but start the vaccine on day 0; the observation may shorten the course, never delay its start.",
    "No time limit for PEP and no contraindication - pregnancy, infancy and a bite three months old all get the full course.",
  ],
  theory: [
    {
      id: "infectious-fever-rabies-animal-bite-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 6-year-old boy is brought to your clinic one hour after being bitten on the cheek and hand by a stray dog. Describe the categorisation of the exposure and the complete post-exposure prophylaxis you would give, including wound management, vaccine schedules and rabies immunoglobulin. Add a note on the National Rabies Control Programme.",
      openingLines: [
        "Rabies is a fatal Lyssavirus encephalitis transmitted through the saliva of a rabid animal, causing an estimated 18,000-20,000 deaths a year in India, 96% from dog bites, with children under 15 forming 40% of victims.",
        "Transdermal bites on the face and hand with bleeding constitute a WHO category III exposure requiring immediate wound washing, a cell culture vaccine and rabies immunoglobulin, and the short incubation of facial bites in a child makes the first hour decisive.",
      ],
      answer: [
        {
          heading: "1. Categorisation and assessment",
          points: [
            "Category III: transdermal bites with bleeding on the face and hand; also assess for tendon, nerve, joint and vascular injury on the hand and cosmetic injury on the face.",
            "History of the dog (stray, provoked or not, available for observation), the child's tetanus immunisation status, previous rabies vaccination, and any immunosuppression.",
            "Provoked bite, pet dog or vaccinated dog does not downgrade the category; there is no contraindication and no time limit to PEP.",
          ],
        },
        {
          heading: "2. Wound management",
          points: [
            "Immediate washing with soap and running water for 15 minutes, flushing each puncture; then povidone iodine or 70% alcohol; no irritants, no cautery.",
            "No suturing; if facial closure is unavoidable, infiltrate RIG first and place loose sutures after several hours; tetanus toxoid according to status; amoxicillin-clavulanate for 3-5 days for hand and face bites; wound review at 48 hours.",
          ],
        },
        {
          heading: "3. Rabies immunoglobulin",
          points: [
            "Given on day 0 (up to day 7 of the first vaccine dose): equine RIG 40 IU/kg (maximum 3000 IU), human RIG 20 IU/kg (maximum 1500 IU), or rabies monoclonal antibody 3.33 IU/kg or 40 IU/kg according to product.",
            "Infiltrate the full calculated dose into and around all wounds, diluting with saline if volume is insufficient; any remainder IM distant from the vaccine site; no skin test before ERIG but adrenaline ready; never exceed the dose, never in the same syringe as vaccine.",
          ],
        },
        {
          heading: "4. Vaccination",
          points: [
            "Cell culture vaccine (PCECV, PVRV or HDCV, potency at least 2.5 IU per dose); intramuscular in the deltoid (anterolateral thigh under 2 years), never gluteal.",
            "Essen IM: days 0, 3, 7, 14, 28; or Zagreb IM 2-1-1: two doses day 0, then days 7 and 21; or intradermal updated Thai Red Cross: 0.1 mL at two sites on days 0, 3, 7, 28.",
            "If the dog is available, observe for 10 days; the course may be stopped if the dog remains healthy, but is never delayed for the observation. Re-exposure in a fully vaccinated person: two doses on days 0 and 3, no RIG.",
            "Counsel the family on completing every dose, record on the card, and report the bite in the clinic register and to IDSP.",
          ],
        },
        {
          heading: "5. National Rabies Control Programme",
          points: [
            "NRCP under NCDC (launched in the 12th Five Year Plan): human health component - training, availability of vaccine and RIG at anti-rabies clinics, intradermal vaccination, surveillance and IEC; animal health component - dog vaccination and animal birth control.",
            "National Action Plan for Dog Mediated Rabies Elimination (NAPRE, 2021) with a One Health approach targeting zero human deaths from dog-mediated rabies by 2030; rabies made notifiable in 2021; nerve tissue vaccine discontinued 2004; World Rabies Day 28 September.",
          ],
        },
      ],
      mustDraw: [
        "A table of WHO categories I, II and III with the prophylaxis for each.",
        "A table of the Essen, Zagreb and updated Thai Red Cross schedules with days and doses, and the RIG doses.",
      ],
      markSplit: [
        { part: "Categorisation and assessment", marks: 1.5 },
        { part: "Wound management", marks: 2 },
        { part: "Rabies immunoglobulin with doses and technique", marks: 2.5 },
        { part: "Vaccine schedules and observation of the animal", marks: 2.5 },
        { part: "National Rabies Control Programme", marks: 1.5 },
      ],
      keywords: ["rabies", "post-exposure prophylaxis", "category III", "rabies immunoglobulin", "Essen", "intradermal", "NRCP"],
    },
    {
      id: "infectious-fever-rabies-animal-bite-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "core",
      question: "Write a short note on rabies immunoglobulin: indications, preparations, dose and method of administration.",
      openingLines: [
        "Rabies immunoglobulin provides immediate passive neutralising antibody at the site of inoculation during the 7-10 days before the vaccine generates an active response, and it is the component of post-exposure prophylaxis most often omitted in practice and most often responsible for vaccine failure deaths.",
        "It is indicated for every WHO category III exposure and for category II exposure in the immunocompromised, given once, on day 0 or at the latest within 7 days of the first vaccine dose.",
      ],
      answer: [
        {
          heading: "Preparations and dose",
          points: [
            "Equine RIG 40 IU/kg body weight, maximum 3000 IU; human RIG 20 IU/kg, maximum 1500 IU; rabies monoclonal antibodies manufactured in India: single antibody 3.33 IU/kg, two-antibody cocktail 40 IU/kg.",
            "Skin sensitivity testing before ERIG is no longer recommended; administer with adrenaline and resuscitation facilities available and observe for 30 minutes; serum sickness at 7-14 days in 1-6%, treated with antihistamines and steroids.",
          ],
        },
        {
          heading: "Administration",
          points: [
            "Infiltrate the maximum anatomically feasible volume into and around every wound, including fingers and face, with a fine needle; dilute two- to three-fold with normal saline if the volume is insufficient for multiple wounds.",
            "Any remainder may be given intramuscularly at a site distant from the vaccine; never the same syringe, site or limb as the vaccine.",
            "Never exceed the calculated dose, because excess suppresses the active response; if wounds are sutured, RIG must be infiltrated first.",
          ],
        },
        {
          heading: "When not to give",
          points: [
            "Not after day 7 of the first vaccine dose; not to a patient who has completed a previous full course of cell culture vaccine or PrEP (two vaccine doses on days 0 and 3 suffice); not for category I or immunocompetent category II exposures.",
            "If RIG is unavailable, start the vaccine immediately and refer for RIG within 7 days.",
          ],
        },
      ],
      mustDraw: ["A table of ERIG, HRIG and monoclonal antibody with dose per kg, maximum dose and key precautions."],
      markSplit: [
        { part: "Indications and timing", marks: 1.5 },
        { part: "Preparations and dose", marks: 1.5 },
        { part: "Method of administration and contraindications", marks: 2 },
      ],
      keywords: ["rabies immunoglobulin", "ERIG", "HRIG", "monoclonal antibody", "category III", "infiltration"],
    },
  ],
  mcqs: [
    {
      id: "infectious-fever-rabies-animal-bite-q1",
      stem: "A 35-year-old woman was scratched on the forearm by a stray cat 2 hours ago. There are three linear scratches, one of which is oozing blood. She has never received rabies vaccine. Which is the correct post-exposure prophylaxis?",
      options: [
        "Wound washing only, because cat scratches do not transmit rabies",
        "Wound washing and vaccine on days 0, 3, 7, 14 and 28 without immunoglobulin",
        "Wound washing, rabies immunoglobulin infiltrated into the scratches, and a full vaccine course",
        "Vaccine on days 0 and 3 only",
        "Observe the cat for 10 days and vaccinate only if it dies",
      ],
      answer: 2,
      explanation:
        "A scratch that bleeds is a transdermal injury and therefore a WHO category III exposure, which requires washing, rabies immunoglobulin into the wounds and a full vaccine course; cats are the second commonest source of human rabies in India. Vaccine alone would be correct for category II, where there is no bleeding. Two doses on days 0 and 3 are for patients who have previously completed a full course. Delaying prophylaxis until the animal is observed is never acceptable, though the course may be stopped if a healthy cat remains well for 10 days.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-rabies-animal-bite-q2",
      stem: "A 40-year-old veterinary worker who completed a three-dose pre-exposure prophylaxis course 4 years ago is bitten on the hand by a dog that later dies. Which is the correct management?",
      options: [
        "Full five-dose Essen course with rabies immunoglobulin",
        "Wound washing and two doses of vaccine on days 0 and 3 without immunoglobulin",
        "Rabies immunoglobulin alone",
        "No prophylaxis because pre-exposure prophylaxis gives lifelong protection",
        "Full course of vaccine without immunoglobulin",
      ],
      answer: 1,
      explanation:
        "A previously fully immunised person needs only two booster doses on days 0 and 3, and immunoglobulin is not given because the memory response is faster than passive antibody and RIG would blunt it; this applies regardless of the interval since the prior course. A full course with or without RIG is unnecessary and wasteful. RIG alone provides no lasting immunity. Pre-exposure prophylaxis primes but does not remove the need for boosters after an exposure.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-rabies-animal-bite-q3",
      stem: "A 20 kg child with multiple deep bites on the face and both hands from a stray dog is to receive equine rabies immunoglobulin. Which statement about the immunoglobulin is correct?",
      options: [
        "The dose is 20 IU/kg, so 400 IU are given intramuscularly in the gluteal region",
        "The dose is 40 IU/kg, so 800 IU are infiltrated into and around all wounds, diluted with saline if the volume is insufficient",
        "A skin sensitivity test is mandatory and the dose is withheld if positive",
        "The dose may be doubled because there are multiple wounds",
        "It should be given on day 3 together with the second vaccine dose",
      ],
      answer: 1,
      explanation:
        "Equine RIG is dosed at 40 IU/kg, which for a 20 kg child is 800 IU, and the whole dose is infiltrated into and around every wound, diluting two- to three-fold with normal saline when many wounds must be covered. Human RIG, not equine, is dosed at 20 IU/kg, and the gluteal region is never used. Skin testing before ERIG has been abandoned in the Indian guidelines because it does not predict anaphylaxis. The calculated dose must never be exceeded because excess antibody suppresses the vaccine response. RIG is given on day 0, or at the latest by day 7, not scheduled for day 3.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-rabies-animal-bite-q4",
      stem: "A busy anti-rabies clinic uses the intradermal regimen for category II exposures. Which of the following correctly describes the updated Thai Red Cross intradermal schedule?",
      options: [
        "0.1 mL at one site on days 0, 3, 7, 14 and 28",
        "0.1 mL at two sites on days 0, 3, 7 and 28",
        "0.5 mL at two sites on days 0, 7 and 21",
        "1 mL intradermally on days 0, 3 and 7",
        "0.1 mL at four sites on day 0 only",
      ],
      answer: 1,
      explanation:
        "The updated Thai Red Cross regimen (2-2-2-0-2) gives 0.1 mL intradermally at two sites, one over each deltoid, on days 0, 3, 7 and 28, which is eight doses in four visits and uses a fraction of the vaccine of the intramuscular course. The 0-3-7-14-28 schedule with one full vial is the intramuscular Essen regimen, and 0-7-21 with two doses on day 0 is the intramuscular Zagreb regimen. One millilitre cannot be given intradermally. Four-site intradermal on day 0 alone is a WHO 2018 option only for the previously vaccinated.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-rabies-animal-bite-q5",
      stem: "A 28-year-old man presents with 3 days of fever, anxiety, difficulty swallowing and spasms of the throat when offered water, and severe agitation. He was bitten by a dog on the leg 6 weeks ago and did not seek treatment. Which is the correct statement about his management?",
      options: [
        "Immediate full post-exposure prophylaxis with vaccine and immunoglobulin will still prevent death",
        "The disease is almost invariably fatal; treatment is palliative, with barrier precautions against saliva and PEP for contacts with mucosal or wound exposure",
        "High-dose intravenous acyclovir is the treatment of choice",
        "The Milwaukee protocol of induced coma has a survival rate of over 50%",
        "Isolation is unnecessary because rabies is not transmitted from humans",
      ],
      answer: 1,
      explanation:
        "Hydrophobia with agitation after an untreated dog bite is furious rabies, which is virtually always fatal once symptoms begin; management is palliative sedation and analgesia, with gloves and eye protection against saliva, and post-exposure prophylaxis for anyone with mucosal or broken-skin contact with his saliva. Vaccine and immunoglobulin do not alter the course after onset. Acyclovir has no activity against rabies virus. The Milwaukee protocol has failed in almost every subsequent attempt. Human-to-human transmission is theoretically possible through saliva and has occurred through transplanted organs, so barrier precautions are appropriate even though airborne isolation is not needed.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "infectious-fever-rabies-animal-bite-c1",
      front: "WHO category II versus category III exposure.",
      back: "II: nibbling of uncovered skin, minor scratches without bleeding - wash plus vaccine. III: transdermal bites or scratches, licks on broken skin, saliva on mucosa, bat contact - wash plus vaccine plus RIG.",
    },
    {
      id: "infectious-fever-rabies-animal-bite-c2",
      front: "First step in every animal bite and how long.",
      back: "Wash with soap and running water for 15 minutes, then povidone iodine or 70% alcohol. No irritants, no cautery, no suturing.",
    },
    {
      id: "infectious-fever-rabies-animal-bite-c3",
      front: "Essen and Zagreb intramuscular schedules.",
      back: "Essen: days 0, 3, 7, 14, 28 (five doses). Zagreb 2-1-1: two doses day 0 (one in each deltoid), then days 7 and 21 (four doses, three visits). Deltoid or thigh, never gluteal.",
    },
    {
      id: "infectious-fever-rabies-animal-bite-c4",
      front: "Updated Thai Red Cross intradermal schedule.",
      back: "0.1 mL at two sites on days 0, 3, 7 and 28 (2-2-2-0-2), eight doses in four visits; reconstituted vial used within 6-8 hours.",
    },
    {
      id: "infectious-fever-rabies-animal-bite-c5",
      front: "Doses of ERIG, HRIG and monoclonal antibody.",
      back: "ERIG 40 IU/kg (max 3000 IU); HRIG 20 IU/kg (max 1500 IU); rabies mAb 3.33 IU/kg (single) or 40 IU/kg (cocktail). Infiltrate into all wounds; day 0, up to day 7.",
    },
    {
      id: "infectious-fever-rabies-animal-bite-c6",
      front: "PEP for a previously fully vaccinated person.",
      back: "Two doses on days 0 and 3 (IM or ID), no RIG, regardless of the interval since the prior course. Nerve tissue vaccine or incomplete course counts as unvaccinated.",
    },
    {
      id: "infectious-fever-rabies-animal-bite-c7",
      front: "Rule on observing the biting dog.",
      back: "Start PEP on day 0; observe a healthy available dog or cat for 10 days; stop the course if it remains healthy. Observation never delays the first dose.",
    },
    {
      id: "infectious-fever-rabies-animal-bite-c8",
      front: "National programme facts for rabies in India.",
      back: "National Rabies Control Programme under NCDC (12th Plan); NAPRE 2021 targets zero dog-mediated deaths by 2030; rabies notifiable since 2021; nerve tissue vaccine stopped 2004; World Rabies Day 28 September.",
    },
  ],
  references: [
    "National Guidelines for Rabies Prophylaxis, National Rabies Control Programme, NCDC, MoHFW, 2019",
    "WHO Expert Consultation on Rabies, Third Report, WHO Technical Report Series 1012, 2018",
    "WHO Rabies Vaccines: WHO Position Paper, April 2018",
    "National Action Plan for Dog Mediated Rabies Elimination from India by 2030 (NAPRE), MoHFW and Ministry of Fisheries, Animal Husbandry and Dairying, 2021",
    "Park's Textbook of Preventive and Social Medicine, 27th edition, 2023 - rabies",
  ],
});
