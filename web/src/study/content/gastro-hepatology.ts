import type { ClinicalCase, Subject, Topic } from "../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "gastro-hepatology-acid-peptic-gerd",
  title: "Acid peptic disease, GERD and Helicobacter pylori eradication",
  oneLiner:
    "Acid peptic disease is mucosal injury of the stomach and duodenum caused by acid and pepsin acting on a mucosa weakened by Helicobacter pylori or NSAIDs, and in Indian practice it is managed by testing and treating H. pylori, withdrawing the offending drug, and giving a proton pump inhibitor before breakfast for a defined course rather than indefinitely.",
  frequency: "core",
  keywords: [
    "APD",
    "peptic ulcer disease",
    "PUD",
    "dyspepsia",
    "gastro-oesophageal reflux disease",
    "GERD",
    "GORD",
    "heartburn",
    "Helicobacter pylori",
    "H pylori",
    "urea breath test",
    "stool antigen",
    "omeprazole",
    "pantoprazole",
    "rabeprazole",
    "triple therapy",
    "bismuth quadruple therapy",
    "NSAID ulcer",
    "Barrett oesophagus",
    "alarm features",
    "endoscopy",
    "OGD",
  ],
  sections: [
    {
      heading: "Definitions and the words the examiner wants",
      points: [
        "**Dyspepsia** is epigastric pain or burning, postprandial fullness or early satiety lasting four weeks or more; it is a symptom complex, not a diagnosis, and only about one in four dyspeptic patients has an ulcer.",
        "**Acid peptic disease** covers gastritis, erosive duodenitis and frank gastric or duodenal ulcer - a mucosal break of 5 mm or more penetrating the muscularis mucosae.",
        "**GERD** is troublesome reflux of gastric contents causing symptoms (heartburn or regurgitation at least twice a week) or oesophageal mucosal injury; most Indian patients have **non-erosive reflux disease** with a normal endoscopy.",
        "**Functional dyspepsia** (Rome IV) is dyspepsia for 3 months with onset 6 months earlier, with a normal endoscopy and no H. pylori; it splits into epigastric pain syndrome and postprandial distress syndrome.",
        "Indian burden: community prevalence of dyspepsia is 10-30%, GERD symptoms are reported by about 8-20% of adults and are rising with obesity, and **H. pylori seroprevalence in India is 60-80%** by adulthood, one of the highest in the world.",
        "The exam point is that a very high background H. pylori prevalence with a very low gastric cancer incidence (the **Indian enigma**) means untargeted mass eradication is not policy - we test and treat, we do not screen and treat.",
      ],
    },
    {
      heading: "Clinical assessment and who needs endoscopy",
      points: [
        "History: site and timing of pain (duodenal ulcer classically wakes the patient at 2 am and is relieved by food; gastric ulcer pain is worsened by food and causes weight loss), heartburn and regurgitation, dysphagia, vomiting, melaena, weight loss and appetite.",
        "**Drug history is the single highest-yield question**: NSAIDs and analgesic combinations bought over the counter, low-dose aspirin, steroids, bisphosphonates, SSRIs, potassium chloride, and indigenous or ayurvedic pain preparations that often contain hidden NSAIDs or steroids.",
        "Ask about smoking, alcohol, chewing tobacco, late heavy dinners, spicy and fried food, tea and coffee load, and about stress and sleep, since all of these modify symptom burden even when they do not cause ulcers.",
        "Examination is usually normal; look specifically for pallor, epigastric mass, succussion splash (gastric outlet obstruction), hepatomegaly, Virchow node and a per-rectal examination for melaena.",
        "**Endoscope (OGD) at any age if there are alarm features**: dysphagia, odynophagia, unintentional weight loss, persistent vomiting, gastrointestinal bleeding or iron-deficiency anaemia, a palpable mass, or a family history of gastric cancer.",
        "**Age threshold in India:** because gastric cancer presents younger here than in the West, most Indian authorities scope new-onset dyspepsia from the age of 40-45 rather than the Western 55-60. In those under 40 with no alarm features, a test-and-treat or empirical PPI strategy is correct.",
        "Do not forget the great mimic: **epigastric pain in a diabetic or an elderly patient may be inferior wall myocardial infarction**, and an ECG costs less than an endoscopy.",
      ],
    },
    {
      heading: "Helicobacter pylori: testing and eradication",
      points: [
        "Indications to test: proven peptic ulcer (current or past), gastric MALT lymphoma, after resection of early gastric cancer, first-degree relative of a gastric cancer patient, uninvestigated dyspepsia under 40 without alarm features, and unexplained iron-deficiency anaemia or immune thrombocytopenia.",
        "**Non-invasive tests:** urea breath test and stool antigen test are the tests of choice for both diagnosis and confirmation of cure. Serology (IgG) stays positive for years after cure and **cannot be used to confirm eradication** or to prove active infection in a high-prevalence country.",
        "**Stop the PPI for 2 weeks and antibiotics or bismuth for 4 weeks** before a urea breath test or stool antigen test, or the result will be falsely negative. Invasive testing at endoscopy uses the rapid urease test, histology and culture.",
        "First-line in India where clarithromycin resistance is high (often above 15-20%): **bismuth quadruple therapy for 14 days** - bismuth subcitrate 120 mg QID, tetracycline 500 mg QID, metronidazole 400 mg TDS and a standard-dose PPI BD.",
        "Where bismuth is not available, **concomitant (non-bismuth quadruple) therapy for 14 days** - PPI BD plus amoxicillin 1 g BD plus clarithromycin 500 mg BD plus metronidazole/tinidazole 500 mg BD - outperforms the old 7-day triple regimen, which now cures under 70% and should not be prescribed.",
        "**Confirm cure in every treated patient** by urea breath test or stool antigen at least 4 weeks after finishing antibiotics and 2 weeks off the PPI. Second-line uses levofloxacin-based therapy (PPI + amoxicillin 1 g BD + levofloxacin 500 mg OD for 14 days) if bismuth quadruple was used first.",
        "Counsel on the practical points that decide success: **adherence to a 14-day, four-drug, high-pill-count regimen is the main determinant of cure**, metallic taste and black stools from bismuth are expected, and alcohol must be avoided with metronidazole.",
      ],
    },
    {
      heading: "GERD: management from lifestyle to referral",
      points: [
        "Diagnosis is clinical when typical heartburn and regurgitation dominate; a **PPI trial for 4-8 weeks** is both treatment and a diagnostic test in the patient without alarm features.",
        "Lifestyle measures with real effect: weight loss (the single most effective measure - each unit of BMI reduction improves symptoms), stopping smoking, avoiding a heavy meal within 3 hours of lying down, and **raising the head end of the bed by 6-8 inches on blocks** rather than piling up pillows.",
        "Diet advice should be individualised rather than blanket prohibition, but the usual triggers are large fatty and fried meals, chilli, chocolate, peppermint, citrus, carbonated drinks, tea, coffee and alcohol.",
        "**Standard-dose PPI once daily 30-60 minutes before breakfast for 8 weeks** is first line; taking it with or after food is the commonest reason for apparent PPI failure. Step to twice daily (second dose before dinner) only for proven erosive disease or partial response.",
        "After 8 weeks step down: halve the dose, move to on-demand dosing, or stop. Alginate-antacid preparations are useful for breakthrough and in pregnancy, and **H2 blockers (ranitidine has been withdrawn worldwide over NDMA; use famotidine 20-40 mg at night)** help nocturnal symptoms.",
        "Refer for endoscopy if there are alarm features, if symptoms persist after 8 weeks of optimal PPI, if relapse occurs immediately on stopping, or if long-term therapy is being contemplated in a patient over 50 with chronic reflux (to look for **Barrett oesophagus**).",
        "Extra-oesophageal reflux (chronic cough, hoarseness, non-cardiac chest pain, dental erosion, asthma that is worse at night) needs a longer trial of twice-daily PPI and should never be diagnosed until cardiac and respiratory causes have been excluded.",
      ],
    },
    {
      heading: "Drug therapy, NSAID injury and prophylaxis",
      points: [
        "**PPIs** (omeprazole 20 mg, pantoprazole 40 mg, rabeprazole 20 mg, esomeprazole 40 mg) irreversibly block the H+/K+ ATPase; full effect takes 3-5 days, so a patient who is no better on day two has not failed treatment.",
        "**Duodenal ulcer: PPI once daily for 4 weeks. Gastric ulcer: PPI once daily for 8 weeks, with a repeat endoscopy and biopsy at 8-12 weeks to prove healing and exclude malignancy** - this last point is a common exam answer.",
        "Withdraw the culprit NSAID. If an NSAID cannot be stopped, use the lowest dose of the least gastrotoxic agent and add a PPI; paracetamol and topical NSAIDs are the safer alternatives in osteoarthritis.",
        "**Give PPI co-prescription (gastroprotection) with an NSAID when any of these is present:** age 65 or more, past peptic ulcer or ulcer bleed, concurrent aspirin, anticoagulant, steroid or SSRI, or a high NSAID dose. Aspirin plus an NSAID is a high-risk combination doctors create themselves.",
        "Long-term PPI harms are real but modest and are examined: hypomagnesaemia, vitamin B12 deficiency, hypergastrinaemia, an increased risk of Clostridioides difficile and other enteric infections, community-acquired pneumonia, fundic gland polyps, and an association with fracture and chronic kidney disease. **Review the indication for every patient on a PPI beyond 8 weeks.**",
        "Antacids and alginates give minute-to-minute relief and are useful for breakthrough symptoms; prokinetics (domperidone 10 mg TDS, itopride 50 mg TDS) help when bloating and early satiety dominate but **metoclopramide should be avoided long term because of tardive dyskinesia**.",
        "Sucralfate 1 g QID on an empty stomach is a useful mucosal coating agent in pregnancy and in NSAID-related injury when acid suppression alone has not worked.",
      ],
    },
    {
      heading: "Complications and their recognition",
      points: [
        "**Bleeding** is the commonest complication - haematemesis, coffee-ground vomit or melaena. Any dyspeptic patient with melaena needs admission, resuscitation, an intravenous PPI infusion and urgent endoscopy, not a change of oral tablet.",
        "**Perforation** presents as sudden severe epigastric pain becoming generalised, a board-like rigid abdomen, absent liver dullness and free gas under the diaphragm on an erect chest radiograph; it is a surgical emergency.",
        "**Gastric outlet obstruction** from a chronic scarred pyloric ulcer causes projectile non-bilious vomiting of undigested food eaten hours earlier, visible gastric peristalsis, a succussion splash and hypochloraemic hypokalaemic metabolic alkalosis with paradoxical aciduria.",
        "**Malignancy** must be excluded in every non-healing gastric ulcer; benign-looking ulcers can be malignant, which is why gastric ulcers are re-scoped and biopsied from four quadrants of the rim.",
        "**Refractory disease** should prompt the questions: is he taking the PPI before food, is he still taking NSAIDs, was H. pylori actually eradicated and confirmed, is this functional dyspepsia, and rarely is this Zollinger-Ellison syndrome (multiple or post-bulbar ulcers, diarrhoea, high fasting gastrin).",
        "Iron deficiency anaemia in a man of any age, or in a postmenopausal woman, with dyspepsia is a bidirectional endoscopy indication - the upper and lower tracts are both looked at.",
      ],
    },
  ],
  tables: [
    {
      heading: "Helicobacter pylori eradication regimens used in India",
      columns: ["Regimen", "Drugs and doses", "Duration", "When to use"],
      rows: [
        [
          "Bismuth quadruple (first line)",
          "PPI standard dose BD + bismuth subcitrate 120 mg QID + tetracycline 500 mg QID + metronidazole 400 mg TDS",
          "14 days",
          "Preferred first line given high Indian clarithromycin and metronidazole resistance",
        ],
        [
          "Concomitant non-bismuth quadruple",
          "PPI BD + amoxicillin 1 g BD + clarithromycin 500 mg BD + tinidazole 500 mg BD",
          "14 days",
          "When bismuth is unavailable and there has been no prior macrolide exposure",
        ],
        [
          "Levofloxacin triple (second line)",
          "PPI BD + amoxicillin 1 g BD + levofloxacin 500 mg OD",
          "14 days",
          "Rescue after failed bismuth quadruple; avoid if prior fluoroquinolone use",
        ],
        [
          "Clarithromycin triple (legacy)",
          "PPI BD + amoxicillin 1 g BD + clarithromycin 500 mg BD",
          "14 days",
          "Only where local clarithromycin resistance is proven to be under 15 percent; cure rates now poor",
        ],
      ],
    },
    {
      heading: "Acid suppression: dose, timing and course length",
      columns: ["Drug", "Standard dose", "Timing", "Usual course"],
      rows: [
        ["Omeprazole", "20 mg PO OD", "30-60 min before breakfast", "4 weeks for duodenal ulcer, 8 weeks for gastric ulcer or erosive GERD"],
        ["Pantoprazole", "40 mg PO OD", "30-60 min before breakfast", "Same; 40 mg IV BD or 8 mg/h infusion after an ulcer bleed"],
        ["Rabeprazole", "20 mg PO OD", "30-60 min before breakfast", "Same; least dependent on CYP2C19 genotype"],
        ["Esomeprazole", "40 mg PO OD", "30-60 min before breakfast", "Erosive oesophagitis and PPI-refractory reflux"],
        ["Famotidine", "20-40 mg PO at night", "Bedtime", "Nocturnal breakthrough; add-on to a PPI, or use in pregnancy"],
        ["Sucralfate", "1 g PO QID", "1 hour before meals and at bedtime", "2-4 weeks; safe in pregnancy, binds other drugs so space by 2 hours"],
      ],
    },
    {
      heading: "Duodenal versus gastric ulcer",
      columns: ["Feature", "Duodenal ulcer", "Gastric ulcer"],
      rows: [
        ["Typical age", "25-50 years", "Over 40 years"],
        ["Pain and food", "Relieved by food, wakes the patient at night (hunger pain)", "Worsened by food, so the patient eats less"],
        ["Weight", "Stable or increased", "Loss is common"],
        ["H. pylori association", "About 90 percent", "About 70 percent"],
        ["Acid output", "Normal or high", "Normal or low"],
        ["Malignant potential", "Essentially none", "Real - always biopsy and re-scope at 8-12 weeks"],
      ],
    },
  ],
  redFlags: [
    "Haematemesis, coffee-ground vomiting or melaena in a dyspeptic patient - admit, resuscitate and arrange urgent endoscopy.",
    "Progressive dysphagia or odynophagia - oesophageal carcinoma or a peptic stricture until endoscopy proves otherwise.",
    "Unintentional weight loss of more than 5 percent, anorexia or a palpable epigastric mass - urgent endoscopy for gastric malignancy.",
    "Sudden severe epigastric pain with board-like rigidity and absent liver dullness - perforated peptic ulcer, refer for immediate surgery.",
    "Projectile vomiting of undigested food with a succussion splash - gastric outlet obstruction, admit for decompression and correction of alkalosis.",
    "New dyspepsia over the age of 40-45, or iron-deficiency anaemia at any age with dyspepsia - endoscopy rather than an empirical PPI.",
    "Epigastric pain with sweating, breathlessness or radiation to the jaw in a diabetic or an elderly patient - do an ECG before treating it as acidity.",
  ],
  pearls: [
    "A PPI works only if it is taken 30-60 minutes before food; the commonest cause of PPI failure in the clinic is a patient taking it after dinner.",
    "H. pylori serology cannot confirm eradication and cannot prove active infection in India, where most adults are seropositive - use the urea breath test or stool antigen.",
    "Stop the PPI for two weeks and antibiotics for four weeks before a urea breath test, or the test will read falsely negative.",
    "Every gastric ulcer is biopsied and re-scoped at 8-12 weeks; every duodenal ulcer is not.",
    "Seven-day triple therapy is obsolete in India - use 14 days of bismuth quadruple therapy.",
    "Ask about over-the-counter painkillers and ayurvedic pain powders by name; patients do not consider them medicines and will not volunteer them.",
    "Ranitidine has been withdrawn worldwide over NDMA contamination; the H2 blocker to write is famotidine.",
    "Weight loss and raising the head end of the bed on blocks beat any drug for nocturnal reflux.",
    "Review the indication of every PPI at 8 weeks; indefinite PPI is a prescribing failure, not a treatment plan.",
  ],
  theory: [
    {
      id: "gastro-hepatology-acid-peptic-gerd-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 38-year-old man attends your clinic with epigastric burning for three months, worse at night and relieved by food. Discuss your approach to evaluation and management, including the role of Helicobacter pylori.",
      openingLines: [
        "Dyspepsia is epigastric pain or burning, postprandial fullness or early satiety of at least four weeks duration; the history of night pain relieved by food is classical of duodenal ulcer, of which about 90 percent are Helicobacter pylori related.",
        "In a 38-year-old with no alarm features, the family physician's task is to exclude red flags clinically, adopt a test-and-treat strategy for H. pylori, remove ulcerogenic drugs, and give a defined course of acid suppression with a planned review rather than open-ended therapy.",
      ],
      answer: [
        {
          heading: "1. History and the alarm features that change the plan",
          points: [
            "Characterise the pain: site, periodicity, relation to food, night waking, relief by antacids; ask about heartburn, regurgitation, bloating and early satiety to separate ulcer-like from reflux-like and dysmotility-like dyspepsia.",
            "Take a full drug history including over-the-counter NSAIDs, aspirin, steroids, bisphosphonates, SSRIs and ayurvedic or herbal pain preparations, which often contain undeclared NSAIDs or steroids.",
            "Ask about smoking, tobacco chewing, alcohol, meal timing, and psychosocial stress; establish whether there is a family history of gastric cancer.",
            "Elicit alarm features - dysphagia, odynophagia, vomiting, weight loss, bleeding, anaemia, mass - because any one of them converts the plan from empirical treatment to prompt endoscopy irrespective of age.",
          ],
        },
        {
          heading: "2. Examination and first-line investigations",
          points: [
            "Look for pallor, epigastric tenderness or mass, succussion splash, hepatomegaly and Virchow node; do a per-rectal examination for melaena.",
            "Do an ECG if the pain could be cardiac, particularly in a diabetic, hypertensive or older patient.",
            "Haemoglobin and stool occult blood are the two cheap tests that most often change the plan; iron-deficiency anaemia mandates endoscopy.",
            "Test for H. pylori by urea breath test or stool antigen, having stopped any PPI for two weeks and antibiotics for four weeks; serology is not acceptable in the Indian setting.",
            "Endoscopy is indicated here only if alarm features appear, if he is over 40-45 with new-onset symptoms, or if he fails an adequate course of treatment.",
          ],
        },
        {
          heading: "3. Helicobacter pylori eradication",
          points: [
            "First-line regimen in India is 14-day bismuth quadruple therapy: standard-dose PPI twice daily, bismuth subcitrate 120 mg four times daily, tetracycline 500 mg four times daily and metronidazole 400 mg three times daily.",
            "Where bismuth is unavailable, 14-day concomitant therapy with PPI, amoxicillin 1 g, clarithromycin 500 mg and tinidazole 500 mg, all twice daily.",
            "Counsel about adherence, metallic taste, black stool with bismuth, and absolute avoidance of alcohol with metronidazole; adherence is the main determinant of cure.",
            "Confirm eradication with a urea breath test or stool antigen at least four weeks after antibiotics and two weeks off the PPI; if it fails, use levofloxacin-based rescue therapy for 14 days.",
          ],
        },
        {
          heading: "4. Acid suppression and non-drug measures",
          points: [
            "Standard-dose PPI 30-60 minutes before breakfast; four weeks for a duodenal ulcer, eight weeks for a gastric ulcer or erosive oesophagitis.",
            "Withdraw NSAIDs; if analgesia is essential, use paracetamol or a topical NSAID, and if an oral NSAID is unavoidable, co-prescribe a PPI.",
            "Advise stopping smoking and tobacco chewing, moderating alcohol, avoiding large late meals, and elevating the head end of the bed if there is reflux.",
            "Reassure that dyspepsia is common and that most patients do well; address anxiety, which drives both symptoms and repeat consultation.",
          ],
        },
        {
          heading: "5. Follow-up, step-down and referral",
          points: [
            "Review at four weeks: if asymptomatic, step down to on-demand or stop; if partially better, complete eight weeks and reassess adherence and timing.",
            "Refer for endoscopy if symptoms persist beyond eight weeks of correctly taken therapy, if they relapse immediately on stopping, or if any alarm feature develops.",
            "A gastric ulcer found at endoscopy is biopsied and re-scoped at 8-12 weeks to prove healing and exclude malignancy.",
            "Document the indication for any PPI continued beyond eight weeks and review it at every visit, given the recognised long-term risks of hypomagnesaemia, B12 deficiency, enteric infection and fracture.",
          ],
        },
      ],
      mustDraw: [
        "A flow chart: dyspepsia - alarm features or age over 40-45 leading to endoscopy, otherwise test-and-treat for H. pylori, then PPI trial, then review at 4-8 weeks.",
        "A table of the 14-day bismuth quadruple regimen with drug, dose and frequency.",
      ],
      markSplit: [
        { part: "Definition, differential and alarm features", marks: 2 },
        { part: "History, examination and investigations", marks: 2 },
        { part: "H. pylori testing, regimen and confirmation of cure", marks: 3 },
        { part: "Acid suppression, non-drug measures and NSAID withdrawal", marks: 2 },
        { part: "Follow-up and referral criteria", marks: 1 },
      ],
      keywords: ["dyspepsia", "duodenal ulcer", "test and treat", "bismuth quadruple therapy", "urea breath test", "alarm features"],
    },
    {
      id: "gastro-hepatology-acid-peptic-gerd-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on gastro-oesophageal reflux disease: clinical features, complications and management.",
      openingLines: [
        "GERD is troublesome reflux of gastric contents into the oesophagus causing symptoms at least twice a week or mucosal injury, and it affects roughly 8-20 percent of Indian adults with prevalence rising alongside obesity.",
        "The majority have non-erosive reflux disease with a normal endoscopy, so the diagnosis is clinical and the therapeutic trial of a proton pump inhibitor doubles as a diagnostic test.",
      ],
      answer: [
        {
          heading: "Clinical features",
          points: [
            "Typical: heartburn (retrosternal burning rising towards the throat) and regurgitation of acid or food, worse lying down, bending forward and after large or fatty meals.",
            "Atypical and extra-oesophageal: non-cardiac chest pain, chronic cough, nocturnal asthma, hoarseness, globus, laryngitis and dental erosion.",
            "Predisposing factors: obesity and central adiposity, hiatus hernia, pregnancy, delayed gastric emptying, smoking, alcohol, and drugs that relax the lower oesophageal sphincter such as calcium channel blockers, nitrates and theophylline.",
          ],
        },
        {
          heading: "Complications",
          points: [
            "Erosive oesophagitis, graded by the Los Angeles classification A to D.",
            "Peptic stricture causing progressive dysphagia to solids, and oesophageal ulcer with bleeding or iron-deficiency anaemia.",
            "**Barrett oesophagus** - intestinal metaplasia of the lower oesophagus, a premalignant lesion for oesophageal adenocarcinoma requiring endoscopic surveillance.",
            "Aspiration pneumonia and worsening of asthma, particularly nocturnal.",
          ],
        },
        {
          heading: "Management",
          points: [
            "Lifestyle: weight reduction, stop smoking and alcohol, no meal within 3 hours of lying down, head end of the bed raised 6-8 inches on blocks, avoidance of identified dietary triggers.",
            "Standard-dose PPI once daily 30-60 minutes before breakfast for 8 weeks; twice-daily dosing for erosive disease or partial response; alginate-antacid or famotidine for breakthrough and nocturnal symptoms.",
            "Step down after 8 weeks to the lowest effective or on-demand dose; long-term therapy needs a documented indication such as erosive oesophagitis or Barrett oesophagus.",
            "Endoscopy for alarm features, failure of 8 weeks of optimal therapy, immediate relapse, or long-standing reflux in a patient over 50; anti-reflux surgery (laparoscopic fundoplication) for proven acid reflux with a large hiatus hernia or drug intolerance.",
          ],
        },
      ],
      mustDraw: ["A table of the Los Angeles grades A to D of erosive oesophagitis with the mucosal break length and continuity for each."],
      markSplit: [
        { part: "Definition and clinical features", marks: 1.5 },
        { part: "Complications including Barrett oesophagus", marks: 1.5 },
        { part: "Lifestyle and drug management with dose and timing", marks: 1.5 },
        { part: "Indications for endoscopy and surgery", marks: 0.5 },
      ],
      keywords: ["GERD", "heartburn", "Barrett oesophagus", "proton pump inhibitor", "Los Angeles classification"],
    },
    {
      id: "gastro-hepatology-acid-peptic-gerd-t3",
      paper: "II",
      kind: "enumerate",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Enumerate the alarm features in dyspepsia and the complications of peptic ulcer disease, with the immediate action for each.",
      openingLines: [
        "Alarm features are the clinical findings that make endoscopy mandatory regardless of age, because they raise the probability of malignancy, bleeding or obstruction.",
        "Peptic ulcer complications are bleeding, perforation, gastric outlet obstruction and malignant transformation of a gastric ulcer, and each has a distinct presentation and an immediate action.",
      ],
      answer: [
        {
          heading: "Alarm features in dyspepsia",
          points: [
            "Dysphagia or odynophagia - urgent endoscopy for carcinoma or stricture.",
            "Unintentional weight loss or anorexia - urgent endoscopy for gastric malignancy.",
            "Persistent vomiting - endoscopy for obstruction or malignancy.",
            "Gastrointestinal bleeding, melaena or iron-deficiency anaemia - admit if actively bleeding; bidirectional endoscopy otherwise.",
            "Palpable abdominal mass or lymphadenopathy, jaundice, or a family history of gastric cancer in a first-degree relative.",
            "New-onset dyspepsia over the age of 40-45 in Indian practice, or failure of an adequate 8-week therapeutic trial.",
          ],
        },
        {
          heading: "Complications and the immediate action",
          points: [
            "**Bleeding** (haematemesis, melaena, shock) - two wide-bore cannulae, fluids, group and cross-match, intravenous PPI, and endoscopy within 24 hours; use the Glasgow-Blatchford score to decide who can be managed as an outpatient.",
            "**Perforation** (sudden severe pain, board-like rigidity, absent liver dullness, free gas under the diaphragm) - nil by mouth, nasogastric tube, fluids, antibiotics, analgesia and immediate surgical referral.",
            "**Gastric outlet obstruction** (projectile vomiting of undigested food, succussion splash, hypochloraemic hypokalaemic alkalosis) - nasogastric decompression, correction of fluid and electrolytes with normal saline and potassium, then endoscopy or surgery.",
            "**Malignancy in a non-healing gastric ulcer** - repeat endoscopy with multiple biopsies from the ulcer rim at 8-12 weeks and referral to surgical oncology if positive.",
            "**Penetration into the pancreas** - constant boring back pain unrelieved by antacids with a raised serum amylase; refer for imaging.",
          ],
        },
      ],
      markSplit: [
        { part: "Alarm features listed completely", marks: 2 },
        { part: "Complications with recognition", marks: 2 },
        { part: "Immediate action for each complication", marks: 1 },
      ],
      keywords: ["alarm features", "perforation", "gastric outlet obstruction", "Glasgow-Blatchford", "melaena"],
    },
  ],
  mcqs: [
    {
      id: "gastro-hepatology-acid-peptic-gerd-q1",
      stem: "A 34-year-old man with three months of epigastric burning, no alarm features, is being tested for Helicobacter pylori. He has been taking pantoprazole 40 mg daily bought over the counter for the last 10 days. What is the correct next step before sending a urea breath test?",
      options: [
        "Send the test now, since a PPI does not affect the urea breath test",
        "Stop the pantoprazole for 2 weeks and then test",
        "Send H. pylori IgG serology instead, which is unaffected by the PPI",
        "Double the pantoprazole dose and test after one week",
        "Start empirical eradication therapy without testing",
      ],
      answer: 1,
      explanation:
        "Proton pump inhibitors suppress bacterial urease activity and bacterial density, causing a falsely negative urea breath test or stool antigen, so the PPI must be withheld for two weeks (and antibiotics or bismuth for four weeks) before testing. Serology stays positive for years after cure and, in India where adult seroprevalence is 60-80 percent, a positive IgG cannot distinguish active from past infection, so it is not an acceptable substitute. Empirical eradication without a positive test exposes the patient to a 14-day four-drug regimen he may not need and fuels resistance, and increasing the PPI dose only worsens the false-negative rate.",
      difficulty: "moderate",
    },
    {
      id: "gastro-hepatology-acid-peptic-gerd-q2",
      stem: "A 45-year-old woman has a proven duodenal ulcer with a positive rapid urease test at endoscopy. She has no drug allergy and has never taken a macrolide. Which regimen is the most appropriate first line in current Indian practice?",
      options: [
        "Pantoprazole 40 mg BD, amoxicillin 1 g BD and clarithromycin 500 mg BD for 7 days",
        "Pantoprazole 40 mg BD, bismuth subcitrate 120 mg QID, tetracycline 500 mg QID and metronidazole 400 mg TDS for 14 days",
        "Pantoprazole 40 mg OD alone for 8 weeks",
        "Pantoprazole 40 mg BD and levofloxacin 500 mg OD for 7 days",
        "Pantoprazole 40 mg BD and amoxicillin 1 g TDS for 14 days",
      ],
      answer: 1,
      explanation:
        "Fourteen-day bismuth quadruple therapy is the recommended first-line regimen in India because clarithromycin and metronidazole resistance rates are high and it retains cure rates above 90 percent even against metronidazole-resistant strains. The 7-day clarithromycin triple regimen now achieves under 70 percent eradication and is no longer acceptable, and shortening any regimen below 14 days lowers cure further. A PPI alone heals the ulcer but leaves the infection and the relapse risk untouched, levofloxacin-based therapy is reserved as rescue, and high-dose dual amoxicillin therapy is not a standard Indian first-line option.",
      difficulty: "moderate",
    },
    {
      id: "gastro-hepatology-acid-peptic-gerd-q3",
      stem: "A 58-year-old man has had heartburn for six years, controlled on intermittent antacids. Over the last two months he has had difficulty swallowing solids and has lost 4 kg. What is the most appropriate next step?",
      options: [
        "Start omeprazole 20 mg daily and review in 8 weeks",
        "Refer for upper gastrointestinal endoscopy",
        "Order a barium swallow and treat empirically meanwhile",
        "Test and treat for Helicobacter pylori",
        "Advise weight loss and raising the head end of the bed, and review in 3 months",
      ],
      answer: 1,
      explanation:
        "Progressive dysphagia to solids with weight loss on a background of long-standing reflux is the classic presentation of oesophageal adenocarcinoma arising in Barrett oesophagus, or of a peptic stricture, and endoscopy with biopsy is mandatory and urgent. An empirical PPI or lifestyle advice delays the diagnosis of a curable early cancer and may partially mask symptoms. Barium swallow is less sensitive, cannot obtain tissue, and adds a step before the endoscopy that will be needed anyway, and H. pylori testing addresses neither dysphagia nor weight loss.",
      difficulty: "easy",
    },
    {
      id: "gastro-hepatology-acid-peptic-gerd-q4",
      stem: "A 70-year-old man with osteoarthritis takes diclofenac 50 mg twice daily and aspirin 75 mg daily after a stent. He has no gastrointestinal symptoms. Which is the most appropriate action?",
      options: [
        "No action is needed while he is asymptomatic",
        "Add a proton pump inhibitor and try to replace diclofenac with paracetamol or a topical NSAID",
        "Stop the aspirin and continue diclofenac",
        "Add sucralfate 1 g four times daily and continue both drugs",
        "Add misoprostol 800 microgram daily and continue both drugs unchanged",
      ],
      answer: 1,
      explanation:
        "He has at least three risk factors for NSAID ulcer complications - age over 65, an oral NSAID, and concurrent low-dose aspirin - and most such ulcers bleed without any preceding dyspepsia, so waiting for symptoms is unsafe. The right answer combines gastroprotection with removing the risk: a PPI plus substitution of the systemic NSAID with paracetamol or a topical preparation. Stopping the aspirin after a coronary stent risks stent thrombosis and is the wrong drug to sacrifice. Sucralfate does not prevent NSAID ulcer complications, and misoprostol, although effective, causes diarrhoea and cramps that make adherence poor and is second choice to a PPI.",
      difficulty: "moderate",
    },
    {
      id: "gastro-hepatology-acid-peptic-gerd-q5",
      stem: "A 40-year-old man with a healed duodenal ulcer completed 14 days of bismuth quadruple therapy, finishing 10 days ago. He is asymptomatic. He is still taking pantoprazole. When and how should eradication be confirmed?",
      options: [
        "H. pylori IgG serology now",
        "Urea breath test now, while continuing pantoprazole",
        "Stool antigen test at least 4 weeks after finishing antibiotics and 2 weeks after stopping the PPI",
        "Repeat endoscopy with rapid urease test at 6 months",
        "No confirmation is needed if he is asymptomatic",
      ],
      answer: 2,
      explanation:
        "Cure must be confirmed after every eradication course, because up to a fifth of patients fail and remain at risk of ulcer relapse and bleeding, and confirmation requires a non-invasive test done at least four weeks after the antibiotics and two weeks off the PPI to avoid a false negative. Serology remains positive for years after successful eradication and can never document cure. Testing now, on a PPI and only 10 days after antibiotics, gives an unreliable negative. Repeat endoscopy is invasive and unnecessary for a healed duodenal ulcer, and symptom resolution does not prove eradication.",
      difficulty: "moderate",
    },
    {
      id: "gastro-hepatology-acid-peptic-gerd-q6",
      stem: "A 52-year-old man presents with vomiting of large volumes of undigested food eaten the previous evening, for two weeks. He has lost weight and has a history of chronic ulcer pain. Examination shows a succussion splash. Which electrolyte and acid-base picture is expected?",
      options: [
        "Hyperchloraemic metabolic acidosis with hyperkalaemia",
        "Hypochloraemic hypokalaemic metabolic alkalosis with paradoxical aciduria",
        "Normal anion gap metabolic acidosis with hypernatraemia",
        "Respiratory alkalosis with hypocalcaemia",
        "High anion gap metabolic acidosis with hyperlactataemia",
      ],
      answer: 1,
      explanation:
        "Gastric outlet obstruction causes prolonged loss of hydrogen and chloride ions in vomitus, producing hypochloraemic metabolic alkalosis; secondary hyperaldosteronism from volume depletion drives renal potassium loss and hydrogen excretion, so the urine becomes acidic despite the systemic alkalosis - the classic paradoxical aciduria. Acidosis of any type would be expected with diarrhoeal or renal bicarbonate loss, not with protracted vomiting of gastric contents. Respiratory alkalosis is a ventilatory disturbance and does not fit, and lactic acidosis would require tissue hypoperfusion.",
      difficulty: "hard",
    },
    {
      id: "gastro-hepatology-acid-peptic-gerd-q7",
      stem: "A 29-year-old woman with typical heartburn has been taking rabeprazole 20 mg after dinner for four weeks with little benefit. She has no alarm features. What is the single most useful next step?",
      options: [
        "Change to esomeprazole 40 mg after dinner",
        "Instruct her to take the rabeprazole 30-60 minutes before breakfast",
        "Refer for 24-hour oesophageal pH monitoring",
        "Add domperidone 10 mg three times daily",
        "Refer for laparoscopic fundoplication",
      ],
      answer: 1,
      explanation:
        "Proton pump inhibitors only inhibit proton pumps that are actively secreting, so the drug must be in the blood when the meal-stimulated pumps switch on - taking it 30-60 minutes before a meal, ideally breakfast. Incorrect timing is by far the commonest cause of apparent PPI failure and must be corrected before the regimen is escalated. Switching molecules while keeping the wrong timing repeats the same error, a prokinetic addresses bloating rather than acid, and pH monitoring or surgery are for genuinely refractory disease after correctly taken twice-daily therapy has failed.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "gastro-hepatology-acid-peptic-gerd-c1",
      front: "First-line Helicobacter pylori regimen in India, with duration.",
      back: "Bismuth quadruple therapy for 14 days: PPI BD + bismuth subcitrate 120 mg QID + tetracycline 500 mg QID + metronidazole 400 mg TDS.",
    },
    {
      id: "gastro-hepatology-acid-peptic-gerd-c2",
      front: "How long must a PPI and antibiotics be stopped before a urea breath test?",
      back: "PPI for 2 weeks, antibiotics and bismuth for 4 weeks - otherwise the test is falsely negative.",
    },
    {
      id: "gastro-hepatology-acid-peptic-gerd-c3",
      front: "Why is H. pylori serology useless in India?",
      back: "Adult seroprevalence is 60-80 percent and IgG stays positive for years after cure, so it proves neither active infection nor eradication.",
    },
    {
      id: "gastro-hepatology-acid-peptic-gerd-c4",
      front: "PPI course length for duodenal versus gastric ulcer.",
      back: "Duodenal ulcer 4 weeks; gastric ulcer 8 weeks plus repeat endoscopy and biopsy at 8-12 weeks to prove healing and exclude cancer.",
    },
    {
      id: "gastro-hepatology-acid-peptic-gerd-c5",
      front: "List the alarm features in dyspepsia.",
      back: "Dysphagia, odynophagia, weight loss, persistent vomiting, GI bleeding or iron-deficiency anaemia, abdominal mass, family history of gastric cancer, and new onset over age 40-45 in India.",
    },
    {
      id: "gastro-hepatology-acid-peptic-gerd-c6",
      front: "When must a PPI be co-prescribed with an NSAID?",
      back: "Age 65 or more, past peptic ulcer or bleed, concurrent aspirin, anticoagulant, steroid or SSRI, or high-dose NSAID therapy.",
    },
    {
      id: "gastro-hepatology-acid-peptic-gerd-c7",
      front: "Triad of gastric outlet obstruction.",
      back: "Projectile non-bilious vomiting of undigested food, visible gastric peristalsis with a succussion splash, and hypochloraemic hypokalaemic alkalosis with paradoxical aciduria.",
    },
    {
      id: "gastro-hepatology-acid-peptic-gerd-c8",
      front: "Correct timing of a proton pump inhibitor.",
      back: "30-60 minutes before breakfast; the drug must be present when meal-stimulated pumps are activated. Wrong timing is the commonest cause of PPI failure.",
    },
    {
      id: "gastro-hepatology-acid-peptic-gerd-c9",
      front: "Signs of a perforated peptic ulcer.",
      back: "Sudden severe epigastric pain becoming generalised, board-like rigidity, absent liver dullness, and free gas under the diaphragm on an erect chest film.",
    },
    {
      id: "gastro-hepatology-acid-peptic-gerd-c10",
      front: "What is Barrett oesophagus and why does it matter?",
      back: "Intestinal metaplasia of the lower oesophagus from chronic reflux; it is premalignant for oesophageal adenocarcinoma and needs endoscopic surveillance.",
    },
    {
      id: "gastro-hepatology-acid-peptic-gerd-c11",
      front: "Long-term risks of proton pump inhibitor therapy.",
      back: "Hypomagnesaemia, vitamin B12 deficiency, enteric infection including C. difficile, community-acquired pneumonia, fundic gland polyps, and associations with fracture and CKD.",
    },
    {
      id: "gastro-hepatology-acid-peptic-gerd-c12",
      front: "Which H2 blocker should now be prescribed, and why not ranitidine?",
      back: "Famotidine 20-40 mg at night. Ranitidine was withdrawn worldwide because of NDMA (nitrosamine) contamination.",
    },
  ],
  references: [
    "Indian Society of Gastroenterology consensus on Helicobacter pylori infection, Indian Journal of Gastroenterology, 2021",
    "Maastricht VI / Florence Consensus Report on the management of Helicobacter pylori infection, Gut, 2022",
    "American College of Gastroenterology Clinical Guideline: Diagnosis and Management of GERD, 2022",
    "ACG and Canadian Association of Gastroenterology Clinical Guideline: Management of Dyspepsia, 2017",
    "API Textbook of Medicine, 11th edition, 2019 - diseases of the stomach and duodenum",
    "Harrison's Principles of Internal Medicine, 21st edition, 2022 - peptic ulcer disease and GERD",
  ],
});

topics.push({
  id: "gastro-hepatology-acute-diarrhoea",
  title: "Acute diarrhoea and dysentery: ORS, zinc and the water-borne outbreak",
  oneLiner:
    "Acute diarrhoea is the passage of three or more loose or watery stools in 24 hours for less than 14 days, and its management rests on assessing dehydration clinically, replacing losses with low-osmolarity ORS, giving zinc for 14 days in every child under five, continuing feeding, and reserving antibiotics for dysentery, cholera and severe systemic illness.",
  frequency: "core",
  keywords: [
    "acute gastroenteritis",
    "diarrhoea",
    "dysentery",
    "ORS",
    "oral rehydration solution",
    "low osmolarity ORS",
    "zinc",
    "cholera",
    "Vibrio cholerae",
    "Shigella",
    "amoebic dysentery",
    "Entamoeba histolytica",
    "giardiasis",
    "rotavirus",
    "typhoid",
    "IMNCI",
    "Plan A Plan B Plan C",
    "Ringer lactate",
    "traveller's diarrhoea",
    "food poisoning",
    "ORS-Zinc corner",
  ],
  sections: [
    {
      heading: "Definitions, burden and the Indian programme",
      points: [
        "**Acute diarrhoea** is three or more loose or watery stools in 24 hours (or any increase from the individual's normal) lasting under 14 days; **persistent diarrhoea** lasts 14 days or more; **chronic diarrhoea** lasts 4 weeks or more.",
        "**Dysentery** is diarrhoea with visible blood in the stool, usually with fever, tenesmus and small-volume frequent stools - it means colonic invasion and it changes the antibiotic decision.",
        "Diarrhoeal disease remains among the top causes of under-five death in India; the **Intensified Diarrhoea Control Fortnight (IDCF)** each year distributes ORS and zinc house-to-house and sets up ORS-Zinc corners at every facility.",
        "Rotavirus caused about 40 percent of severe childhood diarrhoea hospitalisations before **Rotavirus vaccine was introduced into the Universal Immunisation Programme in 2016 and scaled nationally by 2019**, given at 6, 10 and 14 weeks.",
        "Adults in India most often have viral gastroenteritis, enterotoxigenic E. coli, or food-borne staphylococcal or Bacillus cereus toxin illness; **water-borne outbreaks of cholera, hepatitis E, typhoid and shigellosis** cluster after the monsoon, after pipeline contamination and at fairs and mass gatherings.",
        "The single most important message of the topic is that **death is from dehydration and electrolyte loss, not from the organism**, so rehydration always precedes and outranks any antimicrobial decision.",
      ],
    },
    {
      heading: "Assessing dehydration and deciding the plan",
      points: [
        "Ask: duration, stool frequency and character, blood or mucus, vomiting, fever, urine output, last feed, drugs (especially recent antibiotics), other cases in the household or locality, and the water source.",
        "**WHO/IMNCI classification:** no dehydration (fewer than two signs), some dehydration (two or more of restless and irritable, sunken eyes, drinks eagerly and thirstily, skin pinch goes back slowly), severe dehydration (two or more of lethargic or unconscious, sunken eyes, unable to drink or drinking poorly, skin pinch goes back very slowly).",
        "Weigh the child; percentage weight loss is the gold standard where a recent weight is known - under 5 percent is mild, 5-10 percent moderate, over 10 percent severe.",
        "**Plan A** (no dehydration): treat at home - extra fluids, ORS after each loose stool, zinc for 14 days, continued feeding, and the four danger signs to return with.",
        "**Plan B** (some dehydration): 75 mL/kg of low-osmolarity ORS over 4 hours at the facility, then reassess; continue breastfeeding throughout, and add ORS for ongoing losses.",
        "**Plan C** (severe dehydration): **Ringer lactate IV 100 mL/kg** - in infants under 12 months 30 mL/kg in the first hour then 70 mL/kg over 5 hours; in children over 12 months and adults 30 mL/kg in the first 30 minutes then 70 mL/kg over 2.5 hours. Reassess every 15-30 minutes and start ORS as soon as the patient can drink.",
        "In adults with cholera-like purging, losses can exceed a litre an hour; **the rate of replacement is dictated by the rate of loss**, and an intake-output chart with a cholera cot is the traditional and still correct answer.",
      ],
    },
    {
      heading: "ORS and zinc: the two interventions that save lives",
      points: [
        "**Low-osmolarity ORS (WHO 2004 formula)** contains sodium 75, chloride 65, glucose 75, potassium 20 and citrate 10 mmol/L, with a total osmolarity of 245 mOsm/L. It reduces stool output, vomiting and the need for unscheduled intravenous fluids compared with the older 311 mOsm/L formula.",
        "The physiological basis worth stating in a viva is the **sodium-glucose co-transporter (SGLT1) in the enterocyte brush border, which continues to work in secretory diarrhoea** and drags water with it - which is why glucose must be present in the right ratio and why plain water, sugar water alone or a soft drink will not do.",
        "Preparation: one sachet in exactly one litre of clean water, made fresh, discarded after 24 hours; **never make it stronger** - hypertonic ORS causes hypernatraemia and osmotic diarrhoea.",
        "**Zinc 20 mg per day for 14 days in children over 6 months, 10 mg per day for infants under 6 months**, given regardless of the type of diarrhoea. It shortens the episode by about 25 percent, reduces stool volume, and reduces recurrence over the next 2-3 months.",
        "**Feeding is continued throughout, including breastfeeding** - starving the gut prolongs the illness. Lactose-free formula is not routinely needed; give age-appropriate energy-dense food and an extra meal a day for two weeks after recovery.",
        "Avoid the drinks patients reach for: carbonated soft drinks and packaged fruit juices are hyperosmolar and worsen diarrhoea; sugarcane juice and roadside lemon water carry the same contamination risk as the original source.",
        "Home fluids that are acceptable when ORS is unavailable: salted rice water (kanji), salted buttermilk, coconut water and dal water - but they are a stopgap, and ORS must be procured.",
      ],
    },
    {
      heading: "When antibiotics are and are not indicated",
      points: [
        "**Most acute watery diarrhoea needs no antibiotic** - it is viral or toxin-mediated and self-limiting, and antibiotics prolong Salmonella carriage, promote resistance and risk Clostridioides difficile.",
        "**Dysentery (visible blood in stool):** treat empirically for Shigella - **ciprofloxacin 500 mg PO BD for 3 days in adults; in children, azithromycin 10-12 mg/kg once daily for 3 days or cefixime 8 mg/kg/day for 5 days** given widespread quinolone resistance in Indian Shigella.",
        "**Cholera** (profuse painless rice-water stools with rapid dehydration, often in an outbreak): rehydrate first, then a single dose of **doxycycline 300 mg PO in adults**, or azithromycin 1 g single dose in pregnancy and in children (20 mg/kg). Antibiotics shorten the illness and reduce transmission but never replace fluids.",
        "**Amoebic dysentery** (subacute, cramping, blood and mucus without much fever, trophozoites with ingested red cells on stool microscopy): **metronidazole 800 mg PO TDS for 7-10 days (children 30-50 mg/kg/day)** followed by a luminal amoebicide such as diloxanide furoate 500 mg TDS for 10 days or paromomycin.",
        "**Giardiasis** (foul-smelling frothy stools, bloating, flatulence, weight loss after 1-2 weeks): metronidazole 400 mg TDS for 5-7 days, tinidazole 2 g single dose, or nitazoxanide 500 mg BD for 3 days.",
        "**Enteric fever** must be considered when fever dominates and diarrhoea or constipation is secondary: blood culture before antibiotics, and cefixime or azithromycin as first line given multi-drug and quinolone resistance across India.",
        "Antimotility drugs: **loperamide is contraindicated in dysentery, in suspected C. difficile and in children under 12** because it precipitates toxic megacolon and masks fluid loss; it may be used for short-term symptom control in adult afebrile non-bloody diarrhoea. Racecadotril, an antisecretory drug, is an alternative with a better safety profile in children but is not a substitute for ORS and zinc.",
      ],
    },
    {
      heading: "Investigations, outbreaks and prevention",
      points: [
        "Most cases need no investigation. **Stool routine and microscopy** is worthwhile in dysentery, in persistent diarrhoea, and in the immunocompromised, looking for red cells, pus cells, trophozoites, cysts, ova and hanging-drop motility for cholera.",
        "Stool culture is indicated in dysentery not responding to treatment, in suspected outbreaks, in severe or systemic illness and in the immunosuppressed; **blood culture if fever is prominent** to catch enteric fever and bacteraemic salmonellosis.",
        "Serum electrolytes, creatinine and glucose in severe dehydration, in the elderly and in anyone with altered sensorium; hypokalaemia and metabolic acidosis are the usual disturbances and hyponatraemia complicates over-enthusiastic plain water rehydration.",
        "**Outbreak response** is examinable: define a case, count and plot the epidemic curve by time, place and person, inspect and chlorinate the water source (bleaching powder to a residual chlorine of 0.5 mg/L), collect water samples for coliform and stool samples for culture, set up an ORS depot, and notify the district health authority (IDSP-IHIP).",
        "Look for the classic Indian scenario in the question: **a cluster of watery diarrhoea in a colony after a pipeline burst or monsoon flooding**, which points to faecal contamination of piped water and mandates public health action rather than individual prescriptions.",
        "Prevention: safe water (boiling, chlorine tablets, household filters), sanitation and toilet use, handwashing with soap at the five critical times, exclusive breastfeeding for 6 months, rotavirus and measles vaccination, vitamin A, and food hygiene at fairs and street stalls.",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**The elderly and diabetics** decompensate quickly: they under-perceive thirst, are often on ACE inhibitors, ARBs, diuretics, metformin or SGLT2 inhibitors, and all of these should be held during significant diarrhoea (sick-day rules) to avoid acute kidney injury, lactic acidosis and euglycaemic ketoacidosis.",
        "**Antibiotic-associated diarrhoea and Clostridioides difficile** should be suspected after clindamycin, cephalosporins or fluoroquinolones, and treated by stopping the offending drug and giving oral vancomycin 125 mg QID or fidaxomicin; metronidazole is now a second-line option.",
        "**Traveller's diarrhoea** is usually ETEC; treat with fluids and, if moderate to severe, a single dose of azithromycin 1 g (preferred in South and South-East Asia because of quinolone resistance) with loperamide only if there is no fever or blood.",
        "**Diarrhoea in HIV or other immunosuppression** demands stool examination for Cryptosporidium, Cystoisospora, Cyclospora and Microsporidia with modified acid-fast staining, and a low threshold for referral.",
        "Persistent diarrhoea in a child (14 days or more) requires nutritional rehabilitation, a search for coexisting infection, micronutrient supplementation including zinc and vitamin A, and referral if there is severe acute malnutrition.",
        "Pregnancy: rehydration is unchanged, azithromycin is the safest antibiotic when one is needed, and **tetracyclines and quinolones are avoided**.",
      ],
    },
  ],
  tables: [
    {
      heading: "WHO/IMNCI dehydration assessment and treatment plan",
      columns: ["Assessment", "No dehydration (Plan A)", "Some dehydration (Plan B)", "Severe dehydration (Plan C)"],
      rows: [
        ["General condition", "Well, alert", "Restless, irritable", "Lethargic or unconscious"],
        ["Eyes", "Normal", "Sunken", "Sunken"],
        ["Thirst", "Drinks normally", "Thirsty, drinks eagerly", "Drinks poorly or unable to drink"],
        ["Skin pinch", "Goes back at once", "Goes back slowly", "Goes back very slowly (over 2 seconds)"],
        ["Fluid", "ORS after each stool at home", "75 mL/kg ORS over 4 hours", "Ringer lactate 100 mL/kg IV as per age schedule"],
        ["Zinc", "20 mg daily for 14 days", "20 mg daily for 14 days", "20 mg daily for 14 days once drinking"],
      ],
    },
    {
      heading: "Composition of low-osmolarity ORS (WHO 2004)",
      columns: ["Component", "Concentration (mmol/L)"],
      rows: [
        ["Sodium", "75"],
        ["Chloride", "65"],
        ["Glucose (anhydrous)", "75"],
        ["Potassium", "20"],
        ["Citrate", "10"],
        ["Total osmolarity", "245 mOsm/L"],
      ],
    },
    {
      heading: "Antibiotic choice by clinical syndrome",
      columns: ["Syndrome", "Likely organism", "Drug and dose", "Duration"],
      rows: [
        ["Acute watery diarrhoea, no fever", "Virus, ETEC, food toxin", "No antibiotic - ORS and zinc only", "-"],
        ["Bloody dysentery, fever, tenesmus", "Shigella, invasive E. coli, Campylobacter", "Ciprofloxacin 500 mg BD (adult); azithromycin 10-12 mg/kg OD (child)", "3 days"],
        ["Rice-water stools, rapid collapse, outbreak", "Vibrio cholerae O1", "Doxycycline 300 mg single dose (adult); azithromycin 20 mg/kg (child, pregnancy)", "Single dose"],
        ["Sub-acute bloody mucoid stool, little fever", "Entamoeba histolytica", "Metronidazole 800 mg TDS then diloxanide furoate 500 mg TDS", "7-10 days, then 10 days"],
        ["Frothy foul stools, bloating, weight loss", "Giardia lamblia", "Tinidazole 2 g single dose or metronidazole 400 mg TDS", "Single dose or 5-7 days"],
        ["Fever dominant, relative bradycardia", "Salmonella Typhi", "Cefixime 20 mg/kg/day or azithromycin 500 mg OD after blood culture", "7-14 days"],
      ],
    },
  ],
  redFlags: [
    "Lethargy, inability to drink, sunken eyes and a skin pinch that goes back very slowly - severe dehydration, start intravenous Ringer lactate immediately.",
    "Diarrhoea with no urine output for 8 hours or more, or a rising creatinine - acute kidney injury, admit.",
    "Visible blood in stool with high fever and abdominal tenderness in a toxic patient - invasive dysentery or perforation risk, refer.",
    "Profuse painless rice-water stools with rapid collapse, especially with other cases in the locality - suspected cholera, admit and notify.",
    "Abdominal distension with absent bowel sounds during dysentery - toxic megacolon; stop antimotility drugs and refer urgently.",
    "Persistent vomiting preventing oral intake, or convulsions during rehydration - suspect hyponatraemia or hypernatraemia and admit.",
    "Diarrhoea in a child with severe acute malnutrition (weight-for-height below minus 3 SD, oedema, MUAC under 11.5 cm) - refer, and use ReSoMal rather than standard ORS.",
    "Diarrhoea lasting beyond 14 days, or with weight loss and nocturnal stools in an adult - investigate rather than repeat the antibiotic.",
  ],
  pearls: [
    "Nobody dies of the organism; they die of the dehydration - rehydration always comes before the antibiotic decision.",
    "Zinc for 14 days in every child under five with diarrhoea, whatever the cause, shortens the episode by about a quarter and reduces recurrence for the next three months.",
    "Low-osmolarity ORS is 245 mOsm/L: sodium 75, glucose 75, chloride 65, potassium 20, citrate 10.",
    "Never make ORS stronger than one sachet per litre, and never substitute a soft drink - hyperosmolar fluids worsen the diarrhoea.",
    "Continue feeding and breastfeeding through the episode and give an extra meal daily for two weeks afterwards.",
    "Loperamide is forbidden in dysentery, in children under 12 and in suspected C. difficile - it can precipitate toxic megacolon.",
    "Trophozoites with ingested red blood cells, not cysts, are what make a stool diagnostic of invasive amoebiasis.",
    "Amoebiasis needs a tissue amoebicide followed by a luminal amoebicide - metronidazole alone leaves the patient a cyst passer.",
    "A cluster of cases in one colony is a public health emergency: chlorinate the water, notify under IDSP-IHIP, and set up an ORS depot.",
    "Hold metformin, SGLT2 inhibitors, ACE inhibitors, ARBs, diuretics and NSAIDs during significant diarrhoea - the sick-day rules.",
  ],
  theory: [
    {
      id: "gastro-hepatology-acute-diarrhoea-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 2-year-old child is brought with loose watery stools for two days and vomiting. Describe how you would assess the degree of dehydration and manage the child, and outline the preventive advice you would give the family.",
      openingLines: [
        "Acute diarrhoea is the passage of three or more loose or watery stools in 24 hours for less than 14 days; in a child under five the immediate risk is death from dehydration and electrolyte loss rather than from the causative organism.",
        "Management follows the WHO/IMNCI framework: classify dehydration clinically, choose Plan A, B or C, give low-osmolarity ORS and zinc for 14 days, continue feeding, and reserve antibiotics for specific indications.",
      ],
      answer: [
        {
          heading: "1. History",
          points: [
            "Duration, frequency and character of stools; blood or mucus; vomiting and whether fluids are being retained; fever; urine output over the last 6-8 hours.",
            "Feeding history including whether breastfeeding has been stopped, and what fluids have been given at home.",
            "Immunisation status with particular reference to rotavirus and measles vaccine, and vitamin A dosing.",
            "Drugs already given, especially antibiotics and antimotility agents bought over the counter.",
            "Other cases in the household or neighbourhood, and the source and storage of drinking water - this changes the answer from a prescription to a public health action.",
          ],
        },
        {
          heading: "2. Examination and classification of dehydration",
          points: [
            "General condition (alert, restless and irritable, or lethargic and unconscious), eyes (normal or sunken), thirst (drinks normally, eagerly, or poorly) and skin pinch (immediate, slow, or very slow).",
            "Two or more signs from the middle column classify some dehydration; two or more from the last column classify severe dehydration.",
            "Weigh the child and compare with any recent weight; assess for severe acute malnutrition using weight-for-height, MUAC and pedal oedema, since this changes the fluid used.",
            "Look for associated infection - pneumonia, otitis media, urinary infection, measles - and check for abdominal distension and absent bowel sounds.",
          ],
        },
        {
          heading: "3. Fluid management by plan",
          points: [
            "Plan A (no dehydration): ORS after each loose stool - 50-100 mL under 2 years, 100-200 mL for 2-10 years; continue breastfeeding; teach the mother to prepare ORS correctly and give the danger signs.",
            "Plan B (some dehydration): 75 mL/kg of low-osmolarity ORS over 4 hours at the facility, given by cup and spoon, with reassessment at 4 hours and continued breastfeeding.",
            "Plan C (severe dehydration): Ringer lactate 100 mL/kg intravenously - for a child over 12 months, 30 mL/kg in the first 30 minutes and 70 mL/kg over the next 2.5 hours; reassess every 15-30 minutes and start ORS by mouth as soon as the child can drink.",
            "If intravenous access fails, give ORS by nasogastric tube at 20 mL/kg/hour for 6 hours while arranging transfer.",
            "In severe acute malnutrition use ReSoMal at 5-10 mL/kg after each stool and avoid rapid intravenous fluids because of the risk of heart failure.",
          ],
        },
        {
          heading: "4. Zinc, feeding and drugs",
          points: [
            "Zinc 20 mg daily for 14 days (10 mg if under 6 months), which shortens the episode by about 25 percent and reduces recurrence for 2-3 months.",
            "Continue age-appropriate feeding and breastfeeding throughout; give one extra meal a day for two weeks after recovery to make up the nutritional deficit.",
            "No antibiotic for acute watery diarrhoea. Antibiotics only for dysentery (azithromycin 10-12 mg/kg once daily for 3 days), suspected cholera (azithromycin 20 mg/kg single dose) or an identified systemic infection.",
            "No antimotility drugs, no antiemetics as a routine, and no antisecretory drug in place of ORS and zinc; ondansetron may be used as a single dose in a child vomiting persistently to allow oral rehydration.",
            "Vitamin A if it is due or if there are eye signs or measles.",
          ],
        },
        {
          heading: "5. Danger signs and preventive advice",
          points: [
            "Return immediately if the child drinks poorly, becomes lethargic, passes blood in stool, develops fever, or is not better in three days.",
            "Safe water: boiling or chlorination, safe storage in a narrow-mouthed covered vessel with a ladle, and never dipping hands into stored water.",
            "Handwashing with soap after defecation, after cleaning a child, and before preparing or eating food; use of a toilet and safe disposal of children's stools.",
            "Exclusive breastfeeding for six months and appropriate complementary feeding thereafter; rotavirus vaccine at 6, 10 and 14 weeks under the Universal Immunisation Programme; measles-rubella vaccine and biannual vitamin A.",
            "Keep an ORS packet and zinc tablets in the house; the ORS-Zinc corner at the health facility and the Intensified Diarrhoea Control Fortnight exist for exactly this.",
          ],
        },
      ],
      mustDraw: [
        "The WHO/IMNCI dehydration assessment table with the four signs and the three columns leading to Plan A, B and C.",
        "The Plan C intravenous fluid schedule as a small table separating infants under 12 months from older children.",
      ],
      markSplit: [
        { part: "History including water source and immunisation", marks: 1.5 },
        { part: "Assessment and classification of dehydration", marks: 2.5 },
        { part: "Fluid management by plan with volumes and rates", marks: 3 },
        { part: "Zinc, feeding and rational antibiotic use", marks: 2 },
        { part: "Danger signs and prevention", marks: 1 },
      ],
      keywords: ["IMNCI", "Plan C", "Ringer lactate", "low osmolarity ORS", "zinc 14 days", "rotavirus vaccine"],
    },
    {
      id: "gastro-hepatology-acute-diarrhoea-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on oral rehydration solution: composition, rationale, indications and limitations.",
      openingLines: [
        "Oral rehydration solution is a glucose-electrolyte solution designed to replace the water and electrolytes lost in diarrhoea by exploiting intestinal sodium-glucose co-transport, and it is one of the most important public health interventions of the twentieth century.",
        "The current WHO formula is the low-osmolarity solution of 245 mOsm/L, which replaced the original 311 mOsm/L formula in 2004.",
      ],
      answer: [
        {
          heading: "Composition and rationale",
          points: [
            "Sodium 75, chloride 65, glucose 75, potassium 20 and citrate 10 mmol/L; total osmolarity 245 mOsm/L.",
            "The **sodium-glucose co-transporter SGLT1** in the brush border of the enterocyte remains functional even in secretory diarrhoea such as cholera, and absorbs sodium with glucose in a 1:1 molar ratio, with water following osmotically.",
            "Potassium replaces stool potassium losses and prevents hypokalaemia; citrate corrects the metabolic acidosis of bicarbonate loss and gives the solution a longer shelf life than bicarbonate.",
            "Reducing the osmolarity lowers stool output by about 20 percent, reduces vomiting by about 30 percent, and cuts the need for unscheduled intravenous fluid by about 30 percent.",
          ],
        },
        {
          heading: "Indications and method of use",
          points: [
            "All degrees of dehydration except severe dehydration and shock, where intravenous Ringer lactate is started first and ORS added as soon as the patient can drink.",
            "Plan A: ORS after every loose stool at home; Plan B: 75 mL/kg over 4 hours under supervision.",
            "One sachet is dissolved in exactly one litre of clean water, given by cup and spoon or small frequent sips, and discarded after 24 hours.",
            "ORS may be given by nasogastric tube at 20 mL/kg/hour when intravenous access is impossible.",
          ],
        },
        {
          heading: "Limitations and contraindications",
          points: [
            "Not to be used alone in shock, severe dehydration, persistent vomiting, paralytic ileus or abdominal distension, or in an unconscious patient.",
            "Does not reduce stool frequency or duration - this must be explained to parents, or they will abandon it and buy an antibiotic.",
            "Standard ORS is unsuitable in severe acute malnutrition, where **ReSoMal** with lower sodium and higher potassium is used instead.",
            "Incorrect preparation is the main practical failure: too concentrated causes hypernatraemia, too dilute fails to correct sodium loss.",
            "ORS does not replace zinc, continued feeding, or the public health action needed when cases are clustering.",
          ],
        },
      ],
      mustDraw: ["A table of the low-osmolarity ORS composition in mmol/L with the total osmolarity, and a one-line diagram of SGLT1 co-transport at the brush border."],
      markSplit: [
        { part: "Composition with figures", marks: 1.5 },
        { part: "Physiological rationale (SGLT1, citrate, potassium)", marks: 1.5 },
        { part: "Indications and correct use", marks: 1 },
        { part: "Limitations and contraindications", marks: 1 },
      ],
      keywords: ["ORS", "SGLT1", "low osmolarity", "ReSoMal", "citrate"],
    },
    {
      id: "gastro-hepatology-acute-diarrhoea-t3",
      paper: "II",
      kind: "chart-flow",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question:
        "Twelve people from one colony report to your clinic in a single morning with acute watery diarrhoea and vomiting. Outline your response as a family physician.",
      openingLines: [
        "A sudden clustering of acute diarrhoea in one locality is an outbreak until proved otherwise, and the response has two simultaneous arms: clinical care of the individual cases and an epidemiological and environmental investigation.",
        "Cholera, enterotoxigenic E. coli, viral gastroenteritis, hepatitis E and food-borne toxin illness all present this way, and the water supply is the first suspect after monsoon flooding or a pipeline leak.",
      ],
      answer: [
        {
          heading: "1. Immediate clinical care",
          points: [
            "Triage by dehydration status; start Ringer lactate at once for anyone with severe dehydration, and set up an oral rehydration corner with ORS for the rest.",
            "Set up a cholera cot with an intake-output chart for high-volume purgers, and admit or refer those with shock, no urine output, or an inability to drink.",
            "Zinc for all children, continued feeding, and a single dose of doxycycline 300 mg for adults with confirmed or strongly suspected cholera after rehydration has begun.",
            "Keep a line list of every case with name, age, sex, address, date of onset and outcome.",
          ],
        },
        {
          heading: "2. Epidemiological investigation",
          points: [
            "Define a case (for example, three or more loose stools in 24 hours in a resident of the colony since a stated date) and search actively for further cases.",
            "Plot the epidemic curve by date of onset; map cases by household to see whether they follow a single water line, a common well, or one function or eatery.",
            "Take a food history for a common meal, marriage or festival if the curve is a sharp point-source spike within hours.",
            "Collect stool samples in Cary-Blair medium for culture and do hanging-drop microscopy for the darting motility of Vibrio cholerae.",
          ],
        },
        {
          heading: "3. Environmental and public health action",
          points: [
            "Inspect the water source and distribution line for leaks and cross-connection with sewage; collect water samples for coliform count and residual chlorine.",
            "Chlorinate the source with bleaching powder to achieve a residual chlorine of 0.5 mg/L after 30 minutes contact; advise boiling or household chlorine tablets meanwhile.",
            "Notify the medical officer and report under IDSP-IHIP; mobilise ASHA and anganwadi workers for house-to-house ORS distribution and case finding.",
            "Health education on handwashing, safe water storage, safe disposal of excreta and food hygiene; consider oral cholera vaccine in a confirmed and continuing outbreak.",
            "Follow up until two incubation periods have passed with no new case, and record the lessons for the next monsoon.",
          ],
        },
      ],
      mustDraw: [
        "An epidemic curve (cases against date of onset) contrasting a point-source spike with a propagated wave.",
        "A flow chart: cluster of cases leading in parallel to case management, line listing and epidemic curve, water sampling and chlorination, and notification.",
      ],
      markSplit: [
        { part: "Immediate clinical care and triage", marks: 1.5 },
        { part: "Case definition, line list and epidemic curve", marks: 1.5 },
        { part: "Water investigation and chlorination", marks: 1 },
        { part: "Notification, community mobilisation and health education", marks: 1 },
      ],
      keywords: ["outbreak", "epidemic curve", "residual chlorine", "IDSP-IHIP", "cholera", "line list"],
    },
  ],
  mcqs: [
    {
      id: "gastro-hepatology-acute-diarrhoea-q1",
      stem: "A 14-month-old boy weighing 9 kg has had watery stools for a day. He is restless and irritable, has sunken eyes, drinks eagerly when offered ORS, and the skin pinch goes back slowly. What is the correct fluid management?",
      options: [
        "ORS 50-100 mL after each loose stool at home",
        "Low-osmolarity ORS 675 mL over 4 hours at the facility, then reassess",
        "Ringer lactate 900 mL intravenously over 3 hours",
        "Ringer lactate 270 mL over 30 minutes then 630 mL over 2.5 hours",
        "Plain water and diluted fruit juice as much as he will take",
      ],
      answer: 1,
      explanation:
        "He has two or more signs of some dehydration - restlessness, sunken eyes, eager drinking and a slow skin pinch - which is Plan B: 75 mL/kg of low-osmolarity ORS over 4 hours under supervision, that is 675 mL for a 9 kg child, with reassessment at 4 hours. Plan A with ORS after each stool is for a child with no dehydration and would under-treat him. The intravenous options belong to Plan C, which requires severe dehydration with lethargy or an inability to drink, and he is drinking eagerly. Plain water and juice supply no sodium and juice is hyperosmolar, which worsens stool output.",
      difficulty: "moderate",
    },
    {
      id: "gastro-hepatology-acute-diarrhoea-q2",
      stem: "A 3-year-old girl has had diarrhoea for two days with no dehydration. Her mother asks what else to give besides ORS. What is the correct advice about zinc?",
      options: [
        "Zinc 20 mg daily for 3 days",
        "Zinc 20 mg daily for 14 days",
        "Zinc 10 mg daily for 14 days",
        "Zinc is only indicated in persistent or bloody diarrhoea",
        "Zinc should be avoided as it worsens vomiting",
      ],
      answer: 1,
      explanation:
        "WHO and the Government of India recommend zinc 20 mg daily for 14 days in every child over 6 months with diarrhoea of any type, which shortens the episode by about 25 percent, reduces stool volume and reduces recurrence over the next two to three months. Three days is too short to deliver the protective effect on subsequent episodes, and 10 mg is the dose for infants under 6 months. Restricting zinc to persistent or bloody diarrhoea abandons its main benefit in ordinary acute diarrhoea. Zinc may cause transient vomiting, which is managed by giving it after a feed rather than by withholding it.",
      difficulty: "easy",
    },
    {
      id: "gastro-hepatology-acute-diarrhoea-q3",
      stem: "A 30-year-old man from a flood-affected area has passed 15 litres of painless watery stool with flecks of mucus in 12 hours, and is now hypotensive with a thready pulse. Several neighbours are similarly ill. After starting Ringer lactate, which antimicrobial is most appropriate?",
      options: [
        "Ciprofloxacin 500 mg twice daily for 5 days",
        "Doxycycline 300 mg as a single oral dose",
        "Metronidazole 800 mg three times daily for 7 days",
        "Cefixime 200 mg twice daily for 7 days",
        "No antimicrobial is ever indicated in cholera",
      ],
      answer: 1,
      explanation:
        "Painless rice-water purging with rapid hypovolaemia in an outbreak setting is cholera, and once rehydration has been started a single 300 mg dose of doxycycline reduces stool volume, shortens the illness and shortens the duration of vibrio excretion, thereby limiting transmission. Fluoroquinolone resistance in Vibrio cholerae is now widespread in South Asia, so ciprofloxacin is unreliable. Metronidazole treats amoebiasis and giardiasis, neither of which causes rice-water stools, and cefixime is used for enteric fever. It is wrong to say antibiotics are never indicated - they are adjunctive to, though never a substitute for, fluid replacement.",
      difficulty: "moderate",
    },
    {
      id: "gastro-hepatology-acute-diarrhoea-q4",
      stem: "A 7-year-old boy has fever, cramping abdominal pain, tenesmus and small-volume stools with visible blood for two days. He is not dehydrated. What is the most appropriate antibiotic?",
      options: [
        "Loperamide 2 mg after each loose stool",
        "Ciprofloxacin 15 mg/kg twice daily for 5 days",
        "Azithromycin 10-12 mg/kg once daily for 3 days",
        "Metronidazole 30 mg/kg/day in three divided doses for 10 days",
        "Ofloxacin plus ornidazole combination for 5 days",
      ],
      answer: 2,
      explanation:
        "Fever with tenesmus and frequent small bloody stools is bacillary dysentery, most often Shigella, and azithromycin for three days is the recommended first line in children in India because fluoroquinolone resistance in Shigella is now high and quinolones are avoided in children where an alternative exists. Loperamide is contraindicated in dysentery at any age and in all children under 12, as it can precipitate toxic megacolon and prolong bacterial carriage. Metronidazole treats amoebic dysentery, which is subacute with less fever and shows trophozoites containing red cells. Fixed-dose quinolone-nitroimidazole combinations are irrational, widely misused in India, and add toxicity without covering the likely resistant organism.",
      difficulty: "moderate",
    },
    {
      id: "gastro-hepatology-acute-diarrhoea-q5",
      stem: "A mother says her child refuses ORS and asks whether she can give him a bottled carbonated soft drink or packaged apple juice instead. What is the correct explanation?",
      options: [
        "They are acceptable substitutes because they contain glucose and water",
        "They are hyperosmolar and low in sodium, so they worsen the diarrhoea",
        "They are safe if diluted with an equal volume of plain water",
        "They are better than ORS because children take them willingly",
        "They should be used only if the child has vomiting",
      ],
      answer: 1,
      explanation:
        "Carbonated soft drinks and packaged juices have an osmolarity two to three times that of low-osmolarity ORS with almost no sodium and no potassium, so they draw water into the lumen and increase stool output while failing to replace the sodium being lost. Dilution lowers the osmolarity but still leaves a sodium-free fluid that risks hyponatraemia when large volumes are given. Palatability is a real problem, but the answer is small frequent sips of ORS by cup and spoon, or an acceptable home fluid such as salted rice water or salted buttermilk, rather than a hyperosmolar sweet drink. Vomiting is not an indication for them; it is an indication for slower, smaller, more frequent ORS.",
      difficulty: "easy",
    },
    {
      id: "gastro-hepatology-acute-diarrhoea-q6",
      stem: "A 45-year-old man has passed loose stools with mucus and streaks of blood for ten days, with lower abdominal cramps but little fever. Stool microscopy shows motile trophozoites containing ingested red blood cells. What is the complete treatment?",
      options: [
        "Metronidazole 800 mg three times daily for 7-10 days only",
        "Metronidazole 800 mg three times daily for 7-10 days followed by diloxanide furoate 500 mg three times daily for 10 days",
        "Diloxanide furoate 500 mg three times daily for 10 days only",
        "Ciprofloxacin 500 mg twice daily for 5 days",
        "Albendazole 400 mg as a single dose",
      ],
      answer: 1,
      explanation:
        "Trophozoites with ingested erythrocytes are diagnostic of invasive Entamoeba histolytica, which requires a tissue amoebicide followed by a luminal amoebicide: metronidazole or tinidazole clears the invading trophozoites but does not eradicate cysts in the colonic lumen, so without diloxanide furoate or paromomycin the patient remains a cyst passer and may relapse. A luminal agent alone does not treat invasive disease. Ciprofloxacin targets bacillary dysentery, which produces pus cells rather than red-cell-containing trophozoites, and albendazole treats helminths, not protozoa.",
      difficulty: "moderate",
    },
    {
      id: "gastro-hepatology-acute-diarrhoea-q7",
      stem: "A 68-year-old man with type 2 diabetes on metformin, an SGLT2 inhibitor, telmisartan and a diuretic develops acute diarrhoea with poor oral intake. Apart from rehydration, what is the most important immediate step?",
      options: [
        "Increase his metformin to control the stress hyperglycaemia",
        "Temporarily stop metformin, the SGLT2 inhibitor, telmisartan and the diuretic",
        "Start loperamide to reduce fluid losses",
        "Start empirical ciprofloxacin to prevent complications",
        "Continue all drugs unchanged as stopping them destabilises control",
      ],
      answer: 1,
      explanation:
        "Sick-day rules require temporary withdrawal of drugs that become dangerous in volume depletion: metformin risks lactic acidosis, SGLT2 inhibitors risk euglycaemic ketoacidosis and volume loss, and ACE inhibitors, ARBs, diuretics and NSAIDs together precipitate acute kidney injury by removing the kidney's autoregulatory reserve. Increasing metformin compounds the lactic acidosis risk. Loperamide gives symptomatic relief at best and does nothing about the renal and metabolic hazard, and an empirical fluoroquinolone treats a self-limiting illness while adding tendon, QT and C. difficile risk in an older patient.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "gastro-hepatology-acute-diarrhoea-c1",
      front: "Composition of low-osmolarity ORS.",
      back: "Sodium 75, chloride 65, glucose 75, potassium 20, citrate 10 mmol/L; total osmolarity 245 mOsm/L.",
    },
    {
      id: "gastro-hepatology-acute-diarrhoea-c2",
      front: "Zinc dose and duration in childhood diarrhoea.",
      back: "20 mg daily for 14 days (10 mg daily if under 6 months), whatever the type of diarrhoea.",
    },
    {
      id: "gastro-hepatology-acute-diarrhoea-c3",
      front: "Plan B fluid volume and time.",
      back: "75 mL/kg of low-osmolarity ORS over 4 hours at the facility, then reassess.",
    },
    {
      id: "gastro-hepatology-acute-diarrhoea-c4",
      front: "Plan C: fluid, total volume and schedule.",
      back: "Ringer lactate 100 mL/kg. Under 12 months: 30 mL/kg in 1 hour then 70 mL/kg over 5 hours. Over 12 months: 30 mL/kg in 30 minutes then 70 mL/kg over 2.5 hours.",
    },
    {
      id: "gastro-hepatology-acute-diarrhoea-c5",
      front: "The four IMNCI signs used to classify dehydration.",
      back: "General condition, sunken eyes, thirst and drinking, and skin pinch. Two or more signs in a column classify that grade.",
    },
    {
      id: "gastro-hepatology-acute-diarrhoea-c6",
      front: "Why does ORS work in secretory diarrhoea?",
      back: "The SGLT1 sodium-glucose co-transporter in the enterocyte brush border stays intact and absorbs sodium with glucose 1:1, with water following osmotically.",
    },
    {
      id: "gastro-hepatology-acute-diarrhoea-c7",
      front: "Treatment of cholera in an adult after rehydration.",
      back: "Doxycycline 300 mg as a single oral dose; azithromycin 1 g single dose in pregnancy and 20 mg/kg in children.",
    },
    {
      id: "gastro-hepatology-acute-diarrhoea-c8",
      front: "Bacillary versus amoebic dysentery on stool microscopy.",
      back: "Bacillary: many pus cells and red cells, no trophozoites. Amoebic: trophozoites containing ingested red blood cells, few pus cells.",
    },
    {
      id: "gastro-hepatology-acute-diarrhoea-c9",
      front: "Complete treatment of amoebic dysentery.",
      back: "Metronidazole 800 mg TDS (or tinidazole 2 g OD) for 7-10 days, then a luminal amoebicide - diloxanide furoate 500 mg TDS for 10 days or paromomycin.",
    },
    {
      id: "gastro-hepatology-acute-diarrhoea-c10",
      front: "When is loperamide contraindicated?",
      back: "Dysentery or any bloody diarrhoea, fever, suspected C. difficile, and all children under 12 - risk of toxic megacolon and masked fluid loss.",
    },
    {
      id: "gastro-hepatology-acute-diarrhoea-c11",
      front: "Residual chlorine target when chlorinating a suspect water source.",
      back: "0.5 mg/L after 30 minutes of contact time.",
    },
    {
      id: "gastro-hepatology-acute-diarrhoea-c12",
      front: "Which ORS is used in severe acute malnutrition, and why?",
      back: "ReSoMal - lower sodium and higher potassium, because these children are sodium-overloaded and potassium-depleted and tolerate rapid fluid poorly.",
    },
  ],
  references: [
    "WHO/UNICEF Joint Statement on the Clinical Management of Acute Diarrhoea, and WHO Diarrhoea Treatment Guidelines, 2005 onwards",
    "Government of India, Ministry of Health and Family Welfare - Intensified Diarrhoea Control Fortnight operational guidelines",
    "IMNCI chart booklet, Government of India, current edition",
    "Indian Academy of Pediatrics guidelines on management of acute diarrhoea, 2020",
    "National Centre for Disease Control guidelines on cholera and outbreak investigation, IDSP-IHIP",
    "Park's Textbook of Preventive and Social Medicine, 27th edition, 2023 - epidemiology of diarrhoeal diseases",
  ],
});

topics.push({
  id: "gastro-hepatology-jaundice",
  title: "The approach to jaundice, including drug-induced liver injury",
  oneLiner:
    "Jaundice is yellow discolouration of skin, sclerae and mucous membranes from a serum bilirubin above about 2-3 mg/dL, and the clinical task is to place it in one of three boxes - prehepatic haemolytic, hepatocellular, or cholestatic - using the history, the urine and stool colour, the pattern of liver function tests and an ultrasound, before naming a cause.",
  frequency: "core",
  keywords: [
    "jaundice",
    "icterus",
    "hyperbilirubinaemia",
    "conjugated",
    "unconjugated",
    "cholestasis",
    "obstructive jaundice",
    "haemolysis",
    "Gilbert syndrome",
    "AST ALT ratio",
    "alkaline phosphatase",
    "GGT",
    "Courvoisier law",
    "drug induced liver injury",
    "DILI",
    "anti-tuberculosis therapy",
    "isoniazid",
    "rifampicin",
    "pyrazinamide",
    "R factor",
    "Hy law",
    "ultrasound abdomen",
  ],
  sections: [
    {
      heading: "Definition, bilirubin metabolism and the three boxes",
      points: [
        "**Jaundice becomes clinically visible at a serum bilirubin of about 2.5-3 mg/dL**, first in the sclerae and under the tongue, and it is best seen in natural daylight; below that level it is latent (biochemical) jaundice.",
        "Bilirubin comes from senescent red cells, travels bound to albumin (unconjugated, water-insoluble, not excreted in urine), is conjugated in the hepatocyte by UDP-glucuronosyltransferase, and is excreted in bile as conjugated (water-soluble) bilirubin.",
        "**Prehepatic (unconjugated) jaundice:** haemolysis or defective conjugation. Urine is normal in colour, stools are normal or dark, there is no itching, and the unconjugated fraction is more than 85 percent of the total.",
        "**Hepatocellular jaundice:** hepatocyte injury, so both fractions rise. Transaminases are disproportionately elevated, urine is dark, and prothrombin time is the marker of severity.",
        "**Cholestatic (obstructive) jaundice:** impaired bile flow, whether intrahepatic or extrahepatic. **Dark urine, pale clay-coloured stools and pruritus** with a disproportionate rise in alkaline phosphatase and GGT.",
        "Pseudo-jaundice from carotenaemia (excess carrot, papaya or pumpkin) or from mepacrine spares the sclerae - a favourite viva trap; **scleral icterus is what makes jaundice real**.",
      ],
    },
    {
      heading: "History: the questions that make the diagnosis",
      points: [
        "Onset and course: abrupt with a viral prodrome (fever, anorexia, nausea, aversion to food and cigarettes) suggests acute viral hepatitis; painless, progressive and relentless deepening suggests malignant obstruction; fluctuating jaundice with fever and rigors suggests choledocholithiasis with cholangitis.",
        "**Colour of urine and stool** decides the box before any test: dark urine with pale stool is cholestasis; normal urine with normal stool is unconjugated hyperbilirubinaemia.",
        "**Complete drug history over the last 6 months** - anti-tuberculosis therapy, paracetamol dose and preparations, NSAIDs, antiepileptics, methotrexate, antiretrovirals, herbal, ayurvedic and siddha preparations, bodybuilding and weight loss supplements, and any indigenous medication for a joint or skin problem.",
        "Alcohol quantified honestly in units per week and years of drinking; ask about the pattern (daily country liquor, weekend binge) and use AUDIT-C to structure the question.",
        "Risk factors for viral hepatitis: jaundice in the family or locality, roadside food and water, sea food, recent travel, blood transfusion, surgery, dialysis, tattoo, ear or nose piercing, injecting drug use, sexual exposure, and occupational needle-stick.",
        "Systemic clues: pruritus (cholestasis), weight loss (malignancy), pale stools with a palpable gallbladder (periampullary carcinoma), anaemia with dark urine and splenomegaly (haemolysis), and fever with rigors before the jaundice (cholangitis or malaria).",
        "In pregnancy always ask specifically about pruritus without a rash in the third trimester (intrahepatic cholestasis of pregnancy) and about vomiting with encephalopathy (acute fatty liver of pregnancy or fulminant hepatitis E).",
      ],
    },
    {
      heading: "Examination and the biochemical pattern",
      points: [
        "Look for depth of jaundice, scratch marks, xanthelasma (chronic cholestasis), pallor, stigmata of chronic liver disease (spider naevi, palmar erythema, gynaecomastia, testicular atrophy, caput medusae, parotid enlargement, Dupuytren contracture), and asterixis.",
        "Abdominal examination: liver size, surface and tenderness; splenomegaly (portal hypertension, haemolysis, malaria, kala-azar); ascites; and a **palpable, non-tender, distended gallbladder in a jaundiced patient (Courvoisier sign), which argues against gallstones and for malignant distal obstruction**.",
        "**A tender hepatomegaly with a high fever and a high ALP in a young Indian man is amoebic liver abscess** until proved otherwise - intercostal tenderness is the sign to elicit.",
        "The **R factor = (ALT / upper limit of normal ALT) divided by (ALP / upper limit of normal ALP)**; R of 5 or more is hepatocellular, 2 or less is cholestatic, and between 2 and 5 is mixed. Learn this - it structures the whole answer.",
        "ALT above 1000 U/L points to acute viral hepatitis, drug or toxin injury (paracetamol), or ischaemic hepatitis; **an AST:ALT ratio above 2 with values under 300 U/L points to alcohol**.",
        "**Prothrombin time / INR and serum albumin measure liver function; transaminases measure only liver injury.** A rising INR with encephalopathy defines acute liver failure and mandates immediate referral.",
        "Isolated unconjugated hyperbilirubinaemia with normal enzymes, normal haemoglobin and normal reticulocytes, rising on fasting or intercurrent illness, is **Gilbert syndrome** - a benign condition needing reassurance and no further tests.",
      ],
    },
    {
      heading: "Investigations in a rational sequence",
      points: [
        "First line for everyone: total and direct bilirubin, AST, ALT, ALP, GGT, total protein and albumin, prothrombin time with INR, complete blood count with peripheral smear and reticulocyte count, and urine for bile salts and bile pigments.",
        "**Ultrasound of the abdomen is the single most useful next test** - it separates dilated from non-dilated ducts, shows gallstones, liver texture, focal lesions, splenomegaly, portal vein diameter, ascites and the pancreatic head.",
        "**Dilated intrahepatic ducts mean extrahepatic obstruction** and lead to MRCP, endoscopic ultrasound or ERCP; non-dilated ducts point to hepatocellular or intrahepatic cholestatic disease and lead to a serological work-up.",
        "Viral panel: HBsAg, anti-HCV, IgM anti-HAV and IgM anti-HEV, chosen by the clinical setting; add HIV where risk factors exist.",
        "If haemolysis is suspected: reticulocyte count, peripheral smear, LDH, haptoglobin, direct Coombs test, haemoglobin electrophoresis for thalassaemia and sickle cell disease, and G6PD assay after the acute episode.",
        "If autoimmune or metabolic disease is suspected in a young patient: ANA, anti-smooth muscle antibody, IgG, serum ceruloplasmin and 24-hour urinary copper for Wilson disease, and ferritin with transferrin saturation for haemochromatosis.",
        "Malaria rapid test and smear in any febrile jaundice in India, plus leptospirosis serology, dengue NS1 and scrub typhus in the appropriate season - **febrile jaundice in the monsoon is a tropical infection until proved otherwise**.",
      ],
    },
    {
      heading: "Drug-induced liver injury, especially anti-tuberculosis therapy",
      points: [
        "DILI is the commonest cause of acute liver failure in the West and is a major and often missed cause in India, where over-the-counter analgesics, ATT and herbal and ayurvedic preparations dominate; it is a **diagnosis of exclusion requiring a temporal relationship, exclusion of viral and biliary causes, and improvement on withdrawal (dechallenge)**.",
        "**Hy's law** - hepatocellular injury with ALT more than 3 times the upper limit of normal together with bilirubin more than 2 times the upper limit of normal and no cholestasis - predicts a mortality of about 10 percent and mandates immediate withdrawal and referral.",
        "**Anti-tuberculosis drug-induced hepatitis** occurs in 5-10 percent of Indian patients on regimens containing isoniazid, rifampicin and pyrazinamide; risk factors are age over 35, malnutrition, alcohol, pre-existing liver disease, HIV, hepatitis B or C carriage, pregnancy and the postpartum state, and slow acetylator status.",
        "**NTEP definition of ATT hepatitis: ALT more than 5 times the upper limit of normal without symptoms, or more than 3 times with symptoms (nausea, vomiting, abdominal pain, jaundice).** Stop all hepatotoxic drugs immediately - isoniazid, rifampicin and pyrazinamide.",
        "While waiting for recovery, if treatment cannot be interrupted (severe or disseminated tuberculosis, meningitis), give a **non-hepatotoxic holding regimen of levofloxacin, ethambutol and an aminoglycoside such as streptomycin or amikacin**.",
        "**Reintroduce sequentially once ALT falls below twice the upper limit of normal and bilirubin normalises**: rifampicin first at full dose, then isoniazid after 3-7 days, then pyrazinamide, checking liver tests before each addition; pyrazinamide is often permanently omitted after severe hepatitis and the regimen extended.",
        "Paracetamol remains the safest analgesic in liver disease at up to 2 g a day, but **paracetamol overdose - including staggered therapeutic excess in a fasting or alcoholic patient - is treated with N-acetylcysteine, which should be started on suspicion without waiting for levels**.",
      ],
    },
    {
      heading: "Management and referral in the family practice",
      points: [
        "Treat the cause, not the colour. Supportive care is a normal balanced diet (there is **no evidence for the traditional fat-free rice-and-glucose diet**, which simply causes muscle loss), adequate calories, rest as tolerated, and abstinence from alcohol and all non-essential drugs.",
        "Stop every hepatotoxic drug and every herbal or ayurvedic preparation; write down what has been stopped so it is not restarted by another prescriber.",
        "Pruritus of cholestasis: cool baths, emollients, **cholestyramine 4 g before and after breakfast**, and second-line rifampicin 150-300 mg daily or naltrexone under supervision. Give vitamin K if the INR is prolonged in cholestasis.",
        "Admit or refer the same day for: encephalopathy or any change in behaviour or sleep pattern, INR above 1.5 with encephalopathy, persistent vomiting preventing oral intake, fever with rigors and right upper quadrant pain (cholangitis, which needs urgent biliary drainage), suspected malignant obstruction, jaundice in pregnancy, and jaundice in an infant lasting beyond 14 days.",
        "**Neonatal jaundice beyond 14 days with pale stools and dark urine is biliary atresia until proved otherwise, and the Kasai portoenterostomy must be done before 60 days of life** - a delayed referral costs the child a liver.",
        "Follow-up: repeat bilirubin, ALT, ALP and INR weekly in acute hepatitis until falling, then fortnightly; counsel about the expected 4-8 week course of viral hepatitis, and about the need for household vaccination and hygiene where relevant.",
      ],
    },
  ],
  tables: [
    {
      heading: "Separating the three types of jaundice",
      columns: ["Feature", "Prehepatic (haemolytic)", "Hepatocellular", "Cholestatic (obstructive)"],
      rows: [
        ["Predominant bilirubin", "Unconjugated (over 85 percent)", "Both fractions", "Conjugated"],
        ["Urine colour", "Normal", "Dark", "Dark"],
        ["Stool colour", "Normal or dark", "Normal or pale", "Pale, clay-coloured"],
        ["Urine bile salts", "Absent", "Present", "Present"],
        ["Transaminases", "Normal", "Markedly raised", "Mildly raised"],
        ["Alkaline phosphatase", "Normal", "Mildly raised", "Markedly raised (with high GGT)"],
        ["Pruritus", "Absent", "Variable", "Prominent"],
        ["Typical causes", "Haemolysis, malaria, G6PD deficiency, thalassaemia, Gilbert syndrome", "Viral hepatitis, alcohol, drugs, autoimmune, Wilson disease", "Gallstones, carcinoma head of pancreas, stricture, PBC, drugs"],
      ],
    },
    {
      heading: "Interpreting the liver function test pattern",
      columns: ["Pattern", "R factor", "Typical numbers", "Think of"],
      rows: [
        ["Hepatocellular", "5 or more", "ALT over 1000 U/L", "Acute viral hepatitis, paracetamol, ischaemic hepatitis, autoimmune hepatitis"],
        ["Hepatocellular, alcohol type", "5 or more", "AST:ALT over 2, both under 300 U/L", "Alcohol-related hepatitis"],
        ["Cholestatic", "2 or less", "ALP over 3 times normal with raised GGT", "Biliary obstruction, drug cholestasis, primary biliary cholangitis"],
        ["Mixed", "Between 2 and 5", "Both moderately raised", "Drug-induced liver injury, sepsis, infiltrative disease"],
        ["Isolated unconjugated bilirubin", "Not applicable", "Bilirubin 1.5-4 mg/dL, enzymes normal", "Gilbert syndrome, haemolysis"],
        ["Isolated raised ALP with normal GGT", "Not applicable", "ALP raised alone", "Bone origin - Paget disease, osteomalacia, growth, pregnancy"],
      ],
    },
    {
      heading: "Anti-tuberculosis drugs and hepatotoxicity",
      columns: ["Drug", "Hepatotoxic", "Typical injury", "Action in ATT hepatitis"],
      rows: [
        ["Isoniazid", "Yes", "Hepatocellular, dose-independent, may be severe", "Stop; reintroduce second after rifampicin"],
        ["Rifampicin", "Yes", "Cholestatic or mixed; also benign unconjugated hyperbilirubinaemia", "Stop; reintroduce first"],
        ["Pyrazinamide", "Yes (most hepatotoxic)", "Hepatocellular, dose-related", "Stop; reintroduce last or omit permanently"],
        ["Ethambutol", "No", "Optic neuritis, not hepatic", "Continue as part of the holding regimen"],
        ["Streptomycin or amikacin", "No", "Ototoxic and nephrotoxic", "May be used in the holding regimen"],
        ["Levofloxacin", "No (rarely)", "QT prolongation, tendinopathy", "Backbone of the non-hepatotoxic holding regimen"],
      ],
    },
  ],
  redFlags: [
    "Jaundice with altered behaviour, drowsiness, reversed sleep rhythm or asterixis - acute liver failure or encephalopathy, admit today.",
    "Jaundice with INR above 1.5 and any encephalopathy, or INR above 2 alone - refer to a centre with liver transplant access.",
    "Fever with rigors, right upper quadrant pain and jaundice (Charcot triad) - acute cholangitis needing antibiotics and urgent biliary drainage.",
    "Painless progressive jaundice with weight loss and a palpable non-tender gallbladder - malignant distal biliary obstruction, urgent imaging and referral.",
    "Jaundice in pregnancy, especially the third trimester, with vomiting or encephalopathy - fulminant hepatitis E or acute fatty liver, admit immediately.",
    "Jaundice in a patient on anti-tuberculosis therapy with ALT above 3 times normal and symptoms - stop the hepatotoxic drugs the same day.",
    "Neonatal jaundice persisting beyond 14 days with pale stools and dark urine - suspect biliary atresia and refer before day 60 of life.",
    "Jaundice with anaemia, dark urine and splenomegaly in a febrile patient - severe malaria or haemolysis, admit and start antimalarials on suspicion.",
  ],
  pearls: [
    "Ask the colour of the urine and the stool before ordering a single test - it sorts the jaundice into its box.",
    "Scleral icterus is what distinguishes true jaundice from carotenaemia, which spares the sclerae.",
    "Transaminases measure injury; prothrombin time and albumin measure function. Only the second pair tells you how sick the patient is.",
    "The R factor - ALT over its upper limit divided by ALP over its upper limit - names the pattern: 5 or more hepatocellular, 2 or less cholestatic.",
    "AST:ALT above 2 with both under 300 U/L is alcohol; ALT above 1000 U/L is viral, drug, toxin or ischaemia.",
    "Dilated ducts on ultrasound send the patient to the endoscopist or surgeon; non-dilated ducts send you back to the serology.",
    "Always take a six-month drug history including ayurvedic, herbal and gym supplements - patients do not consider these to be medicines.",
    "In ATT hepatitis stop isoniazid, rifampicin and pyrazinamide together, and reintroduce rifampicin first, then isoniazid, then pyrazinamide.",
    "Hy's law - ALT above 3 times normal with bilirubin above 2 times normal in hepatocellular injury - carries about 10 percent mortality.",
    "There is no such thing as a liver-friendly fat-free diet; starving a patient with hepatitis of protein and fat only costs him muscle.",
  ],
  theory: [
    {
      id: "gastro-hepatology-jaundice-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 42-year-old man presents with yellow discolouration of the eyes for ten days. Discuss your clinical approach, investigations and initial management.",
      openingLines: [
        "Jaundice is yellowish discolouration of the skin, sclerae and mucous membranes due to a raised serum bilirubin, clinically detectable above about 2.5-3 mg/dL.",
        "The clinical task is to place the jaundice in one of three categories - prehepatic, hepatocellular or cholestatic - from the history, the colour of urine and stool, the pattern of liver function tests and an ultrasound, and only then to name a cause.",
      ],
      answer: [
        {
          heading: "1. History",
          points: [
            "Onset, duration and progression; prodrome of fever, anorexia, nausea and aversion to food or tobacco suggests viral hepatitis, while painless progressive deepening with weight loss suggests malignant obstruction.",
            "Colour of urine and stool - dark urine with pale stools indicates cholestasis; normal urine indicates unconjugated hyperbilirubinaemia.",
            "Pain: colicky right upper quadrant pain with fever and rigors suggests choledocholithiasis with cholangitis; painless jaundice suggests malignancy.",
            "Complete drug history for six months including anti-tuberculosis therapy, paracetamol, NSAIDs, antiepileptics, antiretrovirals, and all herbal, ayurvedic and gym supplements.",
            "Alcohol quantified in units and years; risk factors for viral hepatitis - contaminated food and water, jaundice in the locality, transfusion, surgery, dialysis, tattoos, injecting drug use, sexual exposure, needle-stick injury.",
            "Family history of jaundice, anaemia or splenectomy for haemolytic disease, and past episodes of self-limiting jaundice with fasting suggesting Gilbert syndrome.",
          ],
        },
        {
          heading: "2. Examination",
          points: [
            "Confirm scleral icterus in daylight and exclude carotenaemia, which spares the sclerae; grade pallor and look for scratch marks and xanthelasma.",
            "Stigmata of chronic liver disease: spider naevi, palmar erythema, gynaecomastia, testicular atrophy, parotid enlargement, Dupuytren contracture, caput medusae, and asterixis.",
            "Abdomen: liver size, surface and tenderness; splenomegaly; ascites by shifting dullness and fluid thrill; a palpable non-tender gallbladder (Courvoisier sign) indicating malignant distal obstruction.",
            "Look for fever, lymphadenopathy and a Virchow node, and examine for the intercostal tenderness of amoebic liver abscess.",
            "Assess mental state and sleep pattern for encephalopathy, which converts this from an outpatient problem into an admission.",
          ],
        },
        {
          heading: "3. Investigations",
          points: [
            "Liver function tests with total and direct bilirubin, AST, ALT, ALP, GGT, albumin and globulin, plus prothrombin time and INR - the key measure of hepatic synthetic function.",
            "Complete blood count with peripheral smear and reticulocyte count; urine for bile salts and bile pigments; blood sugar and creatinine.",
            "Calculate the R factor to classify the injury as hepatocellular, cholestatic or mixed.",
            "Ultrasound of the abdomen to assess duct dilatation, gallstones, liver texture and size, focal lesions, portal vein and spleen; dilated ducts lead on to MRCP or ERCP.",
            "Viral markers as indicated: IgM anti-HAV, IgM anti-HEV, HBsAg and anti-HCV; malaria smear or rapid test, leptospiral and scrub typhus serology in febrile jaundice.",
            "Autoimmune and metabolic screen in the young or unexplained case - ANA, anti-smooth muscle antibody, IgG, ceruloplasmin and 24-hour urinary copper.",
          ],
        },
        {
          heading: "4. Initial management",
          points: [
            "Stop alcohol absolutely and withdraw every hepatotoxic and non-essential drug including herbal and ayurvedic preparations.",
            "Normal balanced diet with adequate calories and protein; there is no place for a fat-free rice-and-glucose diet. Maintain hydration and correct hypoglycaemia.",
            "Treat the identified cause: antivirals or supportive care for viral hepatitis, biliary drainage for obstruction, corticosteroids for autoimmune hepatitis after specialist confirmation, N-acetylcysteine for paracetamol toxicity.",
            "Symptomatic care: antiemetic, cholestyramine 4 g before and after breakfast for pruritus, and vitamin K if the INR is prolonged in a cholestatic picture.",
            "Vaccinate household contacts against hepatitis A and B where relevant and give hygiene advice, since hepatitis A and E are faeco-orally transmitted.",
          ],
        },
        {
          heading: "5. When to refer or admit",
          points: [
            "Any encephalopathy, INR above 1.5 with altered sensorium, persistent vomiting, or hypoglycaemia - acute liver failure, refer to a centre with transplant access.",
            "Charcot triad of fever with rigors, right upper quadrant pain and jaundice - acute cholangitis needing antibiotics and urgent biliary drainage.",
            "Dilated bile ducts, a mass in the pancreatic head, or a palpable gallbladder - urgent surgical or gastroenterology referral.",
            "Jaundice in pregnancy and jaundice in a neonate persisting beyond 14 days - both are emergencies with time-critical outcomes.",
            "Follow-up otherwise with weekly bilirubin, ALT and INR until they are clearly falling, and counsel on the expected four to eight week course.",
          ],
        },
      ],
      mustDraw: [
        "The three-column table separating prehepatic, hepatocellular and cholestatic jaundice by urine, stool, bilirubin fraction, transaminases and ALP.",
        "A flow chart: jaundice - liver function test pattern and R factor - ultrasound - dilated ducts to MRCP/ERCP versus non-dilated ducts to viral, autoimmune and metabolic serology.",
      ],
      markSplit: [
        { part: "Definition and classification into three types", marks: 2 },
        { part: "History including drug, alcohol and risk exposure", marks: 2 },
        { part: "Examination including stigmata and Courvoisier sign", marks: 1.5 },
        { part: "Investigations in sequence with the role of ultrasound", marks: 2.5 },
        { part: "Initial management and referral criteria", marks: 2 },
      ],
      keywords: ["jaundice", "R factor", "Courvoisier", "cholestasis", "ultrasound", "acute liver failure"],
    },
    {
      id: "gastro-hepatology-jaundice-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "core",
      question:
        "A 45-year-old man on category I anti-tuberculosis therapy for six weeks develops nausea, vomiting and jaundice. Write short notes on anti-tuberculosis drug-induced hepatitis and its management.",
      openingLines: [
        "Anti-tuberculosis drug-induced hepatitis complicates 5-10 percent of Indian patients on isoniazid, rifampicin and pyrazinamide, and it is the commonest reason for interrupting first-line tuberculosis treatment.",
        "It is defined under NTEP as an ALT rise of more than five times the upper limit of normal without symptoms, or more than three times the upper limit of normal with symptoms such as nausea, vomiting, abdominal pain or jaundice.",
      ],
      answer: [
        {
          heading: "Risk factors and mechanism",
          points: [
            "Patient factors: age over 35, malnutrition and low body mass index, alcohol use, pre-existing chronic liver disease, hepatitis B or C carriage, HIV infection, pregnancy and the postpartum period, and slow acetylator status.",
            "Drug factors: pyrazinamide is the most hepatotoxic, isoniazid causes dose-independent hepatocellular injury through toxic metabolites, and rifampicin causes cholestatic or mixed injury as well as a benign competitive unconjugated hyperbilirubinaemia in the first days.",
            "Ethambutol, streptomycin, amikacin and levofloxacin are not hepatotoxic and form the holding regimen.",
          ],
        },
        {
          heading: "Diagnosis and exclusion",
          points: [
            "Confirm the temporal relationship and exclude viral hepatitis (IgM anti-HAV, IgM anti-HEV, HBsAg, anti-HCV), biliary obstruction by ultrasound, alcohol, and other drugs including herbal preparations.",
            "Apply Hy's law: hepatocellular injury with ALT more than three times normal plus bilirubin more than twice normal carries about 10 percent mortality and demands immediate withdrawal.",
            "Monitor ALT, bilirubin and INR; a rising INR with encephalopathy is acute liver failure and needs referral to a transplant centre.",
          ],
        },
        {
          heading: "Management and reintroduction",
          points: [
            "Stop isoniazid, rifampicin and pyrazinamide immediately; supportive care with hydration, antiemetics and adequate nutrition; no specific antidote exists.",
            "If tuberculosis is severe or disseminated, or is meningeal or miliary, continue a non-hepatotoxic holding regimen of levofloxacin, ethambutol and an aminoglycoside until liver tests recover.",
            "Wait until ALT falls below twice the upper limit of normal and bilirubin normalises, then reintroduce sequentially: **rifampicin first at full dose, isoniazid after 3-7 days, pyrazinamide last**, checking liver tests before each addition.",
            "If hepatitis recurs on reintroduction, permanently omit the offending drug; pyrazinamide is commonly dropped and the regimen extended to nine months.",
            "Prevent: baseline liver tests in the at-risk, counselling about alcohol, pyridoxine 10 mg daily, and clear instructions to stop the drugs and return if nausea, vomiting or jaundice appear.",
          ],
        },
      ],
      mustDraw: ["A table of the five first-line anti-tuberculosis drugs against hepatotoxicity, type of injury and action, plus the reintroduction sequence with intervals."],
      markSplit: [
        { part: "Definition and NTEP criteria", marks: 1 },
        { part: "Risk factors and drug-wise hepatotoxicity", marks: 1.5 },
        { part: "Diagnosis, exclusion and Hy's law", marks: 1 },
        { part: "Stopping, holding regimen and sequential reintroduction", marks: 1.5 },
      ],
      keywords: ["ATT hepatitis", "NTEP", "Hy's law", "holding regimen", "sequential reintroduction", "pyrazinamide"],
    },
    {
      id: "gastro-hepatology-jaundice-t3",
      paper: "II",
      kind: "differentiate",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Differentiate between hepatocellular and obstructive jaundice on clinical and laboratory grounds, and state how ultrasound is used.",
      openingLines: [
        "Both hepatocellular and obstructive jaundice cause conjugated hyperbilirubinaemia with dark urine, so the separation rests on the stool colour, the presence of pruritus, and the relative rise of the transaminases against the alkaline phosphatase.",
        "The R factor and the ultrasound together resolve almost every case at the level of a family practice.",
      ],
      answer: [
        {
          heading: "Clinical differences",
          points: [
            "Hepatocellular: viral prodrome of fever, anorexia and nausea; tender soft hepatomegaly; no pruritus early; stools normal or only mildly pale; often a drug or alcohol history.",
            "Obstructive: pruritus is prominent and may precede the jaundice; stools are pale and clay-coloured and may be offensive and float; steatorrhoea and weight loss occur; the gallbladder may be palpable and non-tender in malignant obstruction (Courvoisier sign).",
            "Fever with rigors and pain favours stone disease with cholangitis; painless progressive jaundice with weight loss favours periampullary or pancreatic head malignancy.",
            "Chronic cholestasis produces xanthelasma, easy bruising from vitamin K deficiency, and bone pain from osteomalacia.",
          ],
        },
        {
          heading: "Laboratory differences",
          points: [
            "Hepatocellular: ALT and AST rise markedly, often above ten times normal; ALP is less than three times normal; the R factor is 5 or more; albumin falls and INR rises in severe disease.",
            "Obstructive: ALP rises to more than three times normal with a parallel GGT rise confirming a hepatic rather than bony origin; transaminases rise only modestly; the R factor is 2 or less.",
            "In obstruction the prolonged prothrombin time is due to fat-soluble vitamin K malabsorption and therefore **corrects after parenteral vitamin K**, whereas in hepatocellular failure it does not - a classic discriminating test.",
            "Urine bile salts appear in both; urobilinogen is absent from the urine in complete biliary obstruction.",
          ],
        },
        {
          heading: "Role of ultrasound and next steps",
          points: [
            "Ultrasound is the first imaging in every jaundiced patient: it is cheap, available, free of radiation and needs no contrast.",
            "Dilated intra- and extrahepatic ducts confirm mechanical obstruction and lead to MRCP, endoscopic ultrasound or therapeutic ERCP with stenting or stone extraction.",
            "Non-dilated ducts with a coarse liver, splenomegaly and a dilated portal vein point to chronic liver disease; a normal liver with non-dilated ducts points to hepatitis, drug injury or intrahepatic cholestasis and prompts serology.",
            "Ultrasound also detects gallstones, liver abscess, focal lesions, a pancreatic head mass, ascites and lymphadenopathy, each of which changes the referral pathway.",
          ],
        },
      ],
      mustDraw: ["A two-column comparison table of hepatocellular against obstructive jaundice covering stool colour, pruritus, transaminases, ALP, R factor, vitamin K response and ultrasound findings."],
      markSplit: [
        { part: "Clinical differences", marks: 2 },
        { part: "Laboratory differences with the R factor and vitamin K test", marks: 2 },
        { part: "Role of ultrasound and next investigation", marks: 1 },
      ],
      keywords: ["obstructive jaundice", "R factor", "vitamin K test", "MRCP", "Courvoisier"],
    },
  ],
  mcqs: [
    {
      id: "gastro-hepatology-jaundice-q1",
      stem: "A 22-year-old man is found to have a total bilirubin of 3.1 mg/dL with a direct fraction of 0.3 mg/dL after two days of fasting for a religious observance. AST, ALT, ALP, haemoglobin and reticulocyte count are all normal. He is asymptomatic. What is the most likely diagnosis?",
      options: [
        "Acute viral hepatitis A",
        "Gilbert syndrome",
        "Autoimmune haemolytic anaemia",
        "Dubin-Johnson syndrome",
        "Early obstructive jaundice from a common bile duct stone",
      ],
      answer: 1,
      explanation:
        "Isolated unconjugated hyperbilirubinaemia that rises with fasting, intercurrent illness or exertion in an otherwise well young adult, with normal enzymes, normal haemoglobin and normal reticulocytes, is Gilbert syndrome - a reduced-activity UDP-glucuronosyltransferase variant needing only reassurance. Viral hepatitis would raise the transaminases substantially. Haemolysis would show anaemia, reticulocytosis, raised LDH and low haptoglobin. Dubin-Johnson syndrome causes conjugated hyperbilirubinaemia with a pigmented liver, and biliary obstruction raises the direct fraction and the alkaline phosphatase.",
      difficulty: "easy",
    },
    {
      id: "gastro-hepatology-jaundice-q2",
      stem: "A 60-year-old man has painless progressive jaundice for six weeks with 8 kg weight loss, pale stools and pruritus. The gallbladder is palpable, globular and non-tender. Which statement is most accurate?",
      options: [
        "A palpable gallbladder makes gallstone obstruction the most likely cause",
        "Courvoisier law suggests the obstruction is malignant rather than from stones",
        "The findings are typical of acute viral hepatitis",
        "Pruritus in this setting indicates a haemolytic cause",
        "An ultrasound is unlikely to add anything and MRCP should be done first",
      ],
      answer: 1,
      explanation:
        "Courvoisier law states that in a jaundiced patient a palpably distended non-tender gallbladder is unlikely to be due to stones, because chronic stone disease scars and shrinks the gallbladder, so a malignant distal obstruction such as carcinoma of the head of the pancreas or a periampullary tumour is far more likely. Viral hepatitis causes a tender liver with high transaminases, not a distended gallbladder with pale stools. Pruritus reflects cholestasis, never haemolysis, in which the bilirubin is unconjugated and does not reach the skin in the same way. Ultrasound remains the correct first imaging - it is cheap and available and will show duct dilatation and often the mass itself before MRCP is arranged.",
      difficulty: "easy",
    },
    {
      id: "gastro-hepatology-jaundice-q3",
      stem: "A 38-year-old woman on category I anti-tuberculosis therapy for five weeks presents with vomiting and jaundice. ALT is 480 U/L (normal up to 40), ALP 160 U/L (normal up to 120), total bilirubin 5.2 mg/dL, INR 1.2. Viral markers are negative and ultrasound is normal. What should be done?",
      options: [
        "Continue all drugs and add a hepatoprotective agent",
        "Stop only pyrazinamide and continue isoniazid, rifampicin and ethambutol",
        "Stop isoniazid, rifampicin and pyrazinamide, and reassess liver tests",
        "Stop all drugs and restart the same regimen after one week irrespective of the liver tests",
        "Halve the dose of all four drugs and monitor weekly",
      ],
      answer: 2,
      explanation:
        "This meets the NTEP definition of anti-tuberculosis drug-induced hepatitis - ALT more than three times the upper limit of normal with symptoms and jaundice - and also satisfies Hy's law, so all three hepatotoxic drugs must be stopped together, since it is impossible to know which one is responsible until sequential reintroduction. Hepatoprotective agents have no evidence base and continuing therapy risks acute liver failure. Dropping pyrazinamide alone leaves two hepatotoxic drugs in place. Restarting on a fixed calendar date without checking that ALT has fallen below twice normal and bilirubin has normalised risks a more severe second injury, and dose reduction of a hepatotoxic drug is neither safe nor effective.",
      difficulty: "moderate",
    },
    {
      id: "gastro-hepatology-jaundice-q4",
      stem: "A jaundiced patient has a prolonged prothrombin time. After 10 mg of parenteral vitamin K daily for three days the prothrombin time returns to normal. What does this indicate?",
      options: [
        "Severe hepatocellular failure",
        "Cholestasis with fat-soluble vitamin malabsorption and intact hepatocyte synthetic function",
        "Disseminated intravascular coagulation",
        "Haemophilia B",
        "Warfarin overdose is the only possible explanation",
      ],
      answer: 1,
      explanation:
        "Vitamin K is fat-soluble and needs bile salts for absorption, so obstructive jaundice produces a coagulopathy that corrects promptly with parenteral vitamin K because the hepatocytes can still make clotting factors. Failure to correct indicates that the hepatocytes themselves cannot synthesise the factors, which is the hallmark of hepatocellular failure and a poor prognostic sign. Disseminated intravascular coagulation would show thrombocytopenia, a low fibrinogen and raised D-dimer and would not correct with vitamin K alone. Haemophilia B is a congenital factor IX deficiency unrelated to jaundice, and while warfarin does respond to vitamin K it is only one of several possibilities and does not explain the jaundice.",
      difficulty: "moderate",
    },
    {
      id: "gastro-hepatology-jaundice-q5",
      stem: "A 6-week-old exclusively breastfed infant has had jaundice since day 5 of life. The stools are pale and putty-coloured and the urine stains the nappy yellow. Weight gain is adequate. What is the most appropriate action?",
      options: [
        "Reassure the mother that this is breast milk jaundice and review in one month",
        "Advise stopping breastfeeding for 48 hours and reassess",
        "Arrange urgent fractionated bilirubin, liver function tests and hepatobiliary ultrasound, and refer to a paediatric surgeon",
        "Start phototherapy at the health centre",
        "Start ursodeoxycholic acid and review in six weeks",
      ],
      answer: 2,
      explanation:
        "Conjugated hyperbilirubinaemia in an infant, signalled by pale stools and bilirubin-stained urine beyond 14 days of age, is biliary atresia until proved otherwise, and the Kasai portoenterostomy must be performed before 60 days of life for the best chance of biliary drainage, so investigation and referral are urgent. Breast milk jaundice is an unconjugated hyperbilirubinaemia with normally pigmented stools and clear urine, so reassurance or a breastfeeding interruption test would waste the surgical window. Phototherapy treats unconjugated bilirubin and is useless, indeed harmful in conjugated hyperbilirubinaemia because of the bronze baby syndrome. Ursodeoxycholic acid does not substitute for establishing the diagnosis.",
      difficulty: "hard",
    },
    {
      id: "gastro-hepatology-jaundice-q6",
      stem: "A 50-year-old man has jaundice with AST 210 U/L, ALT 95 U/L, ALP 140 U/L, GGT 480 U/L, MCV 104 fL and platelets 96000/microlitre. Which is the most likely cause?",
      options: [
        "Acute hepatitis A infection",
        "Alcohol-related liver disease",
        "Choledocholithiasis",
        "Paracetamol hepatotoxicity",
        "Autoimmune hepatitis",
      ],
      answer: 1,
      explanation:
        "An AST to ALT ratio above 2 with both transaminases under 300 U/L, a disproportionately high GGT, macrocytosis and thrombocytopenia is the classic biochemical signature of alcohol-related liver disease, reflecting pyridoxine-dependent ALT synthesis, mitochondrial injury, direct marrow toxicity and portal hypertension. Acute hepatitis A and paracetamol toxicity both give ALT higher than AST and usually above 1000 U/L. Choledocholithiasis produces a cholestatic picture with ALP more than three times normal and a much smaller transaminase rise. Autoimmune hepatitis typically shows a hepatocellular pattern with high globulins and positive autoantibodies rather than macrocytosis with a high GGT.",
      difficulty: "moderate",
    },
    {
      id: "gastro-hepatology-jaundice-q7",
      stem: "A 28-year-old woman at 34 weeks of pregnancy has jaundice, vomiting and drowsiness for two days. She was well before. Bilirubin is 9 mg/dL, ALT 1800 U/L, INR 2.4. Which is the most important immediate action?",
      options: [
        "Start oral ursodeoxycholic acid and review in a week",
        "Admit immediately to a centre with obstetric, intensive care and hepatology support",
        "Prescribe a high-protein diet and iron supplements",
        "Start empirical antibiotics for cholangitis and manage as an outpatient",
        "Arrange an outpatient MRCP",
      ],
      answer: 1,
      explanation:
        "Jaundice with encephalopathy and a rising INR in the third trimester is acute liver failure, most commonly from fulminant hepatitis E in India but also from acute fatty liver of pregnancy or HELLP syndrome, and it carries a maternal mortality of 15-25 percent, so admission to a centre able to deliver the baby and support the liver is the only correct answer. Ursodeoxycholic acid treats intrahepatic cholestasis of pregnancy, which causes pruritus with modest liver test derangement and no encephalopathy. Nutritional advice and iron do not address a failing liver. There is nothing to suggest cholangitis, and an outpatient MRCP delays definitive care in a woman who may deteriorate within hours.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "gastro-hepatology-jaundice-c1",
      front: "At what bilirubin level does jaundice become clinically visible, and where is it seen first?",
      back: "About 2.5-3 mg/dL, first in the sclerae and under the tongue, best seen in natural daylight.",
    },
    {
      id: "gastro-hepatology-jaundice-c2",
      front: "How do you calculate and interpret the R factor?",
      back: "R = (ALT / upper limit of normal) divided by (ALP / upper limit of normal). 5 or more = hepatocellular; 2 or less = cholestatic; between 2 and 5 = mixed.",
    },
    {
      id: "gastro-hepatology-jaundice-c3",
      front: "Urine and stool colour in the three types of jaundice.",
      back: "Haemolytic: normal urine, normal or dark stool. Hepatocellular: dark urine, normal or pale stool. Obstructive: dark urine, pale clay-coloured stool.",
    },
    {
      id: "gastro-hepatology-jaundice-c4",
      front: "Which tests measure liver function rather than liver injury?",
      back: "Prothrombin time / INR, serum albumin and bilirubin. Transaminases measure injury only.",
    },
    {
      id: "gastro-hepatology-jaundice-c5",
      front: "State Courvoisier law.",
      back: "In a jaundiced patient a palpable, non-tender, distended gallbladder is unlikely to be due to stones - suspect malignant distal biliary obstruction.",
    },
    {
      id: "gastro-hepatology-jaundice-c6",
      front: "AST:ALT ratio above 2 with both under 300 U/L means what?",
      back: "Alcohol-related liver disease. ALT above 1000 U/L means viral hepatitis, drug or toxin injury, or ischaemic hepatitis.",
    },
    {
      id: "gastro-hepatology-jaundice-c7",
      front: "NTEP definition of anti-tuberculosis drug-induced hepatitis.",
      back: "ALT more than 5 times the upper limit of normal without symptoms, or more than 3 times with symptoms such as nausea, vomiting, abdominal pain or jaundice.",
    },
    {
      id: "gastro-hepatology-jaundice-c8",
      front: "Order of reintroduction of anti-tuberculosis drugs after hepatitis has settled.",
      back: "Rifampicin first, then isoniazid after 3-7 days, then pyrazinamide last - once ALT is below twice normal and bilirubin has normalised.",
    },
    {
      id: "gastro-hepatology-jaundice-c9",
      front: "The non-hepatotoxic holding regimen for tuberculosis.",
      back: "Levofloxacin plus ethambutol plus an aminoglycoside (streptomycin or amikacin).",
    },
    {
      id: "gastro-hepatology-jaundice-c10",
      front: "State Hy's law and why it matters.",
      back: "Hepatocellular injury with ALT above 3 times normal plus bilirubin above 2 times normal, without cholestasis, predicts about 10 percent mortality - stop the drug and refer.",
    },
    {
      id: "gastro-hepatology-jaundice-c11",
      front: "Prolonged prothrombin time that corrects with parenteral vitamin K - what does it mean?",
      back: "Cholestasis with fat-soluble vitamin malabsorption. Failure to correct means hepatocellular synthetic failure.",
    },
    {
      id: "gastro-hepatology-jaundice-c12",
      front: "Neonatal jaundice beyond 14 days with pale stools - diagnosis and deadline.",
      back: "Biliary atresia until proved otherwise; Kasai portoenterostomy must be done before 60 days of life.",
    },
  ],
  references: [
    "EASL Clinical Practice Guidelines on drug-induced liver injury, Journal of Hepatology, 2019",
    "National Tuberculosis Elimination Programme (NTEP) technical and operational guidelines for tuberculosis in India, 2023",
    "Indian National Association for Study of the Liver (INASL) position papers on acute liver failure and DILI",
    "Harrison's Principles of Internal Medicine, 21st edition, 2022 - jaundice and evaluation of liver function",
    "Sherlock's Diseases of the Liver and Biliary System, 13th edition, 2018",
    "API Textbook of Medicine, 11th edition, 2019 - approach to the jaundiced patient",
  ],
});

topics.push({
  id: "gastro-hepatology-viral-hepatitis",
  title: "Viral hepatitis A to E and the National Viral Hepatitis Control Programme",
  oneLiner:
    "Viral hepatitis is inflammation of the liver caused by the five hepatotropic viruses A to E, of which A and E are faeco-orally transmitted and cause acute self-limiting illness with a risk of fulminant failure in pregnancy, while B and C are blood-borne, become chronic, and are the drivers of cirrhosis and hepatocellular carcinoma addressed by India's National Viral Hepatitis Control Programme.",
  frequency: "core",
  keywords: [
    "hepatitis A",
    "hepatitis B",
    "hepatitis C",
    "hepatitis D",
    "hepatitis E",
    "HBsAg",
    "anti-HBs",
    "anti-HBc",
    "HBeAg",
    "HBV DNA",
    "anti-HCV",
    "HCV RNA",
    "tenofovir",
    "sofosbuvir",
    "daclatasvir",
    "velpatasvir",
    "NVHCP",
    "National Viral Hepatitis Control Programme",
    "birth dose",
    "post-exposure prophylaxis",
    "fulminant hepatic failure",
    "vertical transmission",
  ],
  sections: [
    {
      heading: "The five viruses and how they differ",
      points: [
        "**Hepatitis A** - RNA picornavirus, faeco-oral, incubation 15-50 days, no chronic carriage. Most Indian children are infected subclinically and are immune by adolescence, so **symptomatic hepatitis A in an adult is becoming commoner as sanitation improves** and the age of first infection rises.",
        "**Hepatitis E** - RNA hepevirus, faeco-oral, incubation 15-60 days, causes large water-borne epidemics in India (Kanpur 1991, Delhi 1955-56). Usually self-limiting, but **case fatality reaches 15-25 percent in the third trimester of pregnancy**, and genotype 3 can become chronic in transplant recipients and the immunosuppressed.",
        "**Hepatitis B** - DNA hepadnavirus, blood-borne, sexual and perinatal, incubation 45-180 days. India has an intermediate endemicity of about 1-2 percent HBsAg positivity, roughly 3-4 crore infected people; **perinatal and early childhood infection carries a 90 percent and 30 percent risk of chronicity respectively, against under 5 percent in adults**.",
        "**Hepatitis C** - RNA flavivirus, blood-borne through unsafe injections, transfusion before screening, dialysis and injecting drug use, incubation 15-150 days. **About 55-85 percent become chronic**, and Punjab, Haryana and the north-east carry a disproportionate burden.",
        "**Hepatitis D** - a defective RNA virus needing the hepatitis B surface antigen. Co-infection with B is usually self-limiting, whereas **superinfection of a chronic hepatitis B carrier causes severe hepatitis and accelerated cirrhosis**.",
        "The examinable rule of thumb: **the faeco-oral viruses (A and E) never become chronic in the immunocompetent, and the blood-borne viruses (B, C, D) do**; only A and B have vaccines, and only B and C have effective long-term antiviral therapy in the national programme.",
      ],
    },
    {
      heading: "Clinical course and the danger points",
      points: [
        "Four phases: incubation, prodromal or pre-icteric (5-7 days of fever, malaise, anorexia, nausea, vomiting, aversion to food and cigarettes, right upper quadrant discomfort), icteric (jaundice appears as fever settles, urine darkens, stools may be pale, the liver is tender), and convalescent.",
        "Peak transaminases are typically 1000-3000 U/L with ALT above AST; **the height of the transaminases does not indicate prognosis**, whereas a rising prothrombin time and falling transaminases with deepening jaundice signal massive necrosis.",
        "**Acute liver failure** is encephalopathy plus coagulopathy (INR 1.5 or more) developing within 26 weeks of the onset of illness in a patient with no pre-existing liver disease; in India hepatitis E and A dominate the aetiology, with drugs and ATT next.",
        "Look actively for the danger signs at every visit: **persistent vomiting, altered behaviour or sleep reversal, bleeding gums or purpura, shrinking liver span, hypoglycaemia and a rising INR**.",
        "Cholestatic hepatitis A is a recognised prolonged variant with itching and deep jaundice for weeks to months, and it recovers fully; relapsing hepatitis A occurs in about 10 percent and is not a treatment failure.",
        "Chronic hepatitis B and C are usually silent, and the patient presents either through screening (blood donation, antenatal care, pre-operative testing) or with the complications of established cirrhosis - which is why case-finding matters more than symptom-based diagnosis.",
      ],
    },
    {
      heading: "Serology: reading the panel",
      points: [
        "**IgM anti-HAV** confirms acute hepatitis A; IgG anti-HAV alone means past infection or vaccination and immunity.",
        "**IgM anti-HEV** confirms acute hepatitis E; it is the test to send in a jaundiced pregnant woman and in an outbreak.",
        "**HBsAg** means the person is infected, acutely or chronically. **Anti-HBc IgM** indicates recent infection and is also the only marker positive during the window period; **anti-HBc total** stays positive for life after any infection.",
        "**Anti-HBs alone (with negative anti-HBc) means vaccination-induced immunity**; anti-HBs with anti-HBc total means natural immunity after resolved infection. This distinction is the single most asked serology question.",
        "**HBeAg and HBV DNA measure replication and infectivity.** HBeAg-negative chronic hepatitis B with a high HBV DNA occurs with precore mutants and is common in India, so HBeAg negativity does not mean the patient is safe.",
        "**Anti-HCV is a screening test that stays positive after cure; HCV RNA (or core antigen) confirms active infection** and is what must be sent before and after treatment.",
        "Chronic hepatitis B is HBsAg positive for more than 6 months; further classification into immune-tolerant, immune-active, inactive carrier and reactivation phases uses ALT, HBeAg status and HBV DNA level together.",
      ],
    },
    {
      heading: "Management of acute viral hepatitis",
      points: [
        "**Most acute viral hepatitis needs supportive care only**: rest as tolerated, adequate calories and normal protein, small frequent meals, plenty of fluids, and complete avoidance of alcohol and hepatotoxic drugs.",
        "There is **no place for the traditional fat-free diet, glucose drips, hepatoprotective tonics, silymarin or liver enzyme cocktails**; state this explicitly in the answer because the examiner is looking for it.",
        "Antiemetics for vomiting (ondansetron is preferred to metoclopramide), paracetamol up to 2 g a day for fever and pain, and no NSAIDs. Avoid sedatives, which mask early encephalopathy.",
        "Follow up weekly with bilirubin, ALT and prothrombin time until they are clearly falling; the illness generally settles over 4-8 weeks with normalisation of transaminases by 8-12 weeks.",
        "**Acute hepatitis B with severe or protracted course** (INR above 1.5, bilirubin persistently high, or acute liver failure) is treated with tenofovir or entecavir; the majority of acute hepatitis B in adults resolves and needs no antiviral.",
        "**Acute hepatitis C should be treated**, as early direct-acting antiviral therapy achieves very high cure rates and prevents chronicity - a change from the older practice of waiting 6 months for spontaneous clearance.",
        "Admit for: encephalopathy of any grade, INR 1.5 or more, persistent vomiting, hypoglycaemia, age over 60 or comorbidity, pregnancy, and any patient who cannot be reliably reviewed.",
      ],
    },
    {
      heading: "Chronic hepatitis B and C and the National Viral Hepatitis Control Programme",
      points: [
        "The **National Viral Hepatitis Control Programme (NVHCP), launched in 2018** under the National Health Mission, provides free diagnosis and treatment for hepatitis B and C at model treatment centres and treatment centres in every district, with the goal of eliminating hepatitis C by 2030 and reducing hepatitis B mortality.",
        "**Chronic hepatitis C treatment is pan-genotypic and free under NVHCP: sofosbuvir 400 mg plus velpatasvir 100 mg once daily for 12 weeks** (adding ribavirin or extending to 24 weeks in decompensated cirrhosis, where velpatasvir-based regimens are used with specialist input). Cure - a sustained virological response - is confirmed by an undetectable HCV RNA 12 weeks after therapy ends.",
        "**Chronic hepatitis B is treated with tenofovir disoproxil fumarate 300 mg once daily** (or tenofovir alafenamide, or entecavir) when there is cirrhosis, a high HBV DNA with a raised ALT, or extrahepatic disease. Treatment is usually long term and suppressive rather than curative; monitor creatinine and phosphate on TDF.",
        "**Screen every HBsAg-positive patient for hepatitis D and HIV, screen the family, and vaccinate all susceptible household and sexual contacts**; give lifelong six-monthly ultrasound and alpha-fetoprotein surveillance for hepatocellular carcinoma in those with cirrhosis, Asian men over 40 and women over 50, and any patient with a family history of liver cancer.",
        "**Reactivation of hepatitis B on immunosuppression is a preventable disaster**: test HBsAg and anti-HBc before rituximab, chemotherapy, high-dose steroids or biologics, and give prophylactic tenofovir or entecavir to those who are positive.",
        "Prevention of vertical transmission: **screen every pregnant woman for HBsAg; if positive, give the baby hepatitis B immunoglobulin and the birth dose of vaccine within 12 hours, and give the mother tenofovir from 28 weeks if HBV DNA exceeds 200000 IU/mL**. Breastfeeding is permitted once the baby is immunised.",
        "Hepatitis B vaccination in India: birth dose within 24 hours followed by pentavalent vaccine at 6, 10 and 14 weeks under the Universal Immunisation Programme; adult schedule 0, 1 and 6 months with a check of anti-HBs one to two months after the last dose in health workers, dialysis patients and the immunosuppressed (protective titre 10 mIU/mL or more).",
      ],
    },
    {
      heading: "Prevention, post-exposure prophylaxis and public health",
      points: [
        "**Hepatitis A and E prevention is sanitation**: safe drinking water, chlorination, boiling, safe food handling, handwashing, protection of water sources from sewage, and health education. Hepatitis A vaccine (single-dose live attenuated or two-dose inactivated) is available in the private sector but is not in the UIP.",
        "**There is no licensed hepatitis E vaccine in India** (the recombinant vaccine is licensed only in China), so protection of pregnant women in an outbreak rests entirely on safe water and early referral.",
        "**Needle-stick exposure to a HBsAg-positive source:** if the exposed person is unvaccinated or a non-responder, give hepatitis B immunoglobulin 0.06 mL/kg intramuscularly within 24 hours (and ideally within 7 days) plus start the vaccine series at a different site. A documented responder with anti-HBs above 10 mIU/mL needs nothing.",
        "**There is no immunoglobulin or vaccine for hepatitis C after exposure**: test anti-HCV and HCV RNA at baseline, then HCV RNA at 4-6 weeks and anti-HCV at 3-6 months, and treat early if infection is confirmed.",
        "Universal precautions, safe injection practice with auto-disable syringes, screening of every unit of blood for HBsAg, anti-HCV, HIV, syphilis and malaria, sterilisation of dental and surgical instruments, and licensing of tattoo and barber establishments are the programme-level answers.",
        "Notify clusters of jaundice under IDSP-IHIP; investigate as a water-borne outbreak with the same case definition, epidemic curve, water sampling and chlorination sequence used for cholera, since hepatitis A and E outbreaks follow contaminated piped water and monsoon flooding.",
      ],
    },
  ],
  tables: [
    {
      heading: "The five hepatitis viruses compared",
      columns: ["Feature", "Hepatitis A", "Hepatitis B", "Hepatitis C", "Hepatitis D", "Hepatitis E"],
      rows: [
        ["Virus", "RNA picornavirus", "DNA hepadnavirus", "RNA flavivirus", "Defective RNA virus", "RNA hepevirus"],
        ["Transmission", "Faeco-oral", "Blood, sexual, perinatal", "Blood, injection, dialysis", "Blood, with HBV only", "Faeco-oral, water-borne"],
        ["Incubation", "15-50 days", "45-180 days", "15-150 days", "30-180 days", "15-60 days"],
        ["Chronicity", "Never", "Adults under 5 percent, neonates 90 percent", "55-85 percent", "High with superinfection", "Only in the immunosuppressed"],
        ["Vaccine", "Yes (not in UIP)", "Yes (UIP, birth dose)", "No", "Prevented by HBV vaccine", "Not licensed in India"],
        ["Special risk", "Cholestatic and relapsing forms", "Cirrhosis and hepatocellular carcinoma", "Cirrhosis and hepatocellular carcinoma", "Accelerated cirrhosis", "15-25 percent mortality in third trimester"],
      ],
    },
    {
      heading: "Reading the hepatitis B serology panel",
      columns: ["HBsAg", "Anti-HBs", "Anti-HBc total", "IgM anti-HBc", "Interpretation"],
      rows: [
        ["Positive", "Negative", "Positive", "Positive", "Acute hepatitis B"],
        ["Positive", "Negative", "Positive", "Negative", "Chronic hepatitis B (if positive beyond 6 months)"],
        ["Negative", "Positive", "Positive", "Negative", "Resolved past infection with natural immunity"],
        ["Negative", "Positive", "Negative", "Negative", "Immunity from vaccination"],
        ["Negative", "Negative", "Positive", "Positive", "Window period of acute infection"],
        ["Negative", "Negative", "Negative", "Negative", "Susceptible - vaccinate"],
      ],
    },
    {
      heading: "Treatment available under the National Viral Hepatitis Control Programme",
      columns: ["Condition", "Regimen", "Duration", "Test of cure or monitoring"],
      rows: [
        ["Chronic hepatitis C, no cirrhosis or compensated cirrhosis", "Sofosbuvir 400 mg + velpatasvir 100 mg once daily", "12 weeks", "HCV RNA 12 weeks after therapy (SVR12)"],
        ["Chronic hepatitis C with decompensated cirrhosis", "Sofosbuvir + velpatasvir + ribavirin under specialist care", "12-24 weeks", "SVR12; avoid protease inhibitors"],
        ["Chronic hepatitis B needing treatment", "Tenofovir disoproxil fumarate 300 mg once daily", "Long term", "HBV DNA, ALT, creatinine and phosphate 6-monthly"],
        ["Pregnant woman with HBV DNA above 200000 IU/mL", "Tenofovir from 28 weeks to delivery", "Until 4-12 weeks postpartum", "HBV DNA at 28 weeks; infant HBIG and birth dose"],
        ["Cirrhosis from any viral cause", "Six-monthly ultrasound and alpha-fetoprotein", "Lifelong", "Hepatocellular carcinoma surveillance"],
      ],
    },
  ],
  redFlags: [
    "Altered behaviour, drowsiness or reversed sleep pattern in a jaundiced patient - hepatic encephalopathy, admit immediately.",
    "INR 1.5 or more with encephalopathy, or a prothrombin time that keeps climbing - acute liver failure, refer to a transplant-capable centre.",
    "Shrinking liver span with deepening jaundice and falling transaminases - massive hepatic necrosis, not recovery.",
    "Jaundice in a pregnant woman, particularly in the third trimester - fulminant hepatitis E carries 15-25 percent mortality, admit.",
    "Persistent vomiting preventing oral intake, or documented hypoglycaemia - admit for intravenous dextrose and monitoring.",
    "Bleeding gums, purpura or melaena in acute hepatitis - coagulopathy of liver failure, admit.",
    "A cluster of jaundice cases in one locality - suspected water-borne hepatitis A or E outbreak, notify and investigate the water source.",
    "Any HBsAg-positive patient about to receive rituximab, chemotherapy or high-dose steroids - start antiviral prophylaxis before reactivation occurs.",
  ],
  pearls: [
    "Anti-HBs alone means vaccination; anti-HBs with anti-HBc total means resolved natural infection. That single line answers most hepatitis B serology questions.",
    "Anti-HCV persists after cure - only HCV RNA proves active infection and only HCV RNA at 12 weeks after treatment proves cure.",
    "Hepatitis E kills pregnant women in the third trimester; hepatitis A almost never does.",
    "The younger the age at hepatitis B infection, the higher the chance of chronicity - 90 percent perinatally, under 5 percent in adults.",
    "Hepatitis B birth dose within 24 hours, plus immunoglobulin within 12 hours if the mother is HBsAg positive, is the intervention that prevents a lifetime of chronic infection.",
    "There is no vaccine and no immunoglobulin for hepatitis C - the answer to exposure is testing and early treatment, not prophylaxis.",
    "Hepatitis C is now curable in 12 weeks with free pan-genotypic sofosbuvir-velpatasvir under NVHCP; not offering it is a missed opportunity, not a resource problem.",
    "Never give hepatotoxic tonics, glucose drips or a fat-free diet in acute hepatitis - supportive care means normal food and no alcohol.",
    "Test HBsAg and anti-HBc before any immunosuppression; reactivation hepatitis is entirely preventable.",
    "In an unexplained severe flare in a known hepatitis B carrier, think hepatitis D superinfection and send anti-HDV.",
  ],
  theory: [
    {
      id: "gastro-hepatology-viral-hepatitis-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "Classify viral hepatitis. Describe the clinical features, complications and management of acute viral hepatitis, and outline the National Viral Hepatitis Control Programme.",
      openingLines: [
        "Viral hepatitis is inflammation of the liver caused by the five hepatotropic viruses A, B, C, D and E; A and E are faeco-orally transmitted and cause acute illness only, while B, C and D are blood-borne and can become chronic.",
        "Acute viral hepatitis is a self-limiting illness in most patients, but it carries the risk of acute liver failure, which in India is most often caused by hepatitis E and A.",
      ],
      answer: [
        {
          heading: "1. Classification and epidemiology",
          points: [
            "Faeco-oral, water-borne, never chronic in the immunocompetent: hepatitis A (RNA picornavirus, incubation 15-50 days) and hepatitis E (RNA hepevirus, incubation 15-60 days).",
            "Blood-borne, sexually and perinatally transmitted, capable of chronicity: hepatitis B (DNA hepadnavirus, 45-180 days), hepatitis C (RNA flavivirus, 15-150 days) and hepatitis D, which requires HBsAg to replicate.",
            "India carries an intermediate hepatitis B endemicity of 1-2 percent, roughly 3-4 crore chronically infected people, and a hepatitis C prevalence of about 0.5-1 percent that is much higher in Punjab, Haryana and the north-east.",
            "Hepatitis A is hyperendemic, with most children infected subclinically; as sanitation improves the age of first infection rises and symptomatic adult disease increases.",
          ],
        },
        {
          heading: "2. Clinical features",
          points: [
            "Pre-icteric or prodromal phase of 5-7 days: fever, malaise, anorexia, nausea, vomiting, distaste for food and cigarettes, and right upper quadrant discomfort.",
            "Icteric phase: fever settles as jaundice appears, urine darkens, stools may become pale, and the liver is enlarged and tender; the spleen is palpable in a minority.",
            "Convalescent phase over 4-8 weeks with gradual return of appetite and resolution of jaundice; transaminases normalise by 8-12 weeks.",
            "Variants: anicteric hepatitis, cholestatic hepatitis A with prolonged itching and deep jaundice, relapsing hepatitis A in about 10 percent, and asymptomatic chronic infection with B and C.",
          ],
        },
        {
          heading: "3. Investigations",
          points: [
            "Liver function tests: ALT and AST 1000-3000 U/L with ALT above AST, raised bilirubin with both fractions, mildly raised ALP.",
            "Prothrombin time and INR at every visit - the single most important prognostic test; albumin and blood sugar.",
            "Serology by clinical setting: IgM anti-HAV, IgM anti-HEV, HBsAg with IgM anti-HBc, and anti-HCV with HCV RNA.",
            "Ultrasound to exclude biliary obstruction where the pattern is cholestatic or the diagnosis is uncertain.",
          ],
        },
        {
          heading: "4. Complications",
          points: [
            "Acute liver failure - encephalopathy with INR 1.5 or more within 26 weeks of onset in a previously normal liver; mortality is high without transplantation.",
            "Fulminant hepatitis E in the third trimester of pregnancy, with 15-25 percent maternal mortality and high fetal loss.",
            "Cholestatic and relapsing hepatitis A; aplastic anaemia, and extrahepatic manifestations such as arthritis, glomerulonephritis and polyarteritis nodosa with hepatitis B.",
            "Chronic hepatitis with B, C and D, leading over decades to cirrhosis, portal hypertension and hepatocellular carcinoma.",
            "Hepatitis D superinfection of a hepatitis B carrier causing a severe flare and accelerated cirrhosis.",
          ],
        },
        {
          heading: "5. Management",
          points: [
            "Supportive care: rest as tolerated, a normal balanced diet with adequate calories and protein, small frequent meals, good hydration, and no alcohol.",
            "Explicitly avoid: fat-free diets, glucose drips, hepatoprotective tonics and silymarin, all hepatotoxic drugs, NSAIDs and sedatives.",
            "Antiemetics as needed, paracetamol up to 2 g daily for fever, and weekly monitoring of bilirubin, ALT and prothrombin time until they fall.",
            "Antivirals: tenofovir or entecavir for severe or protracted acute hepatitis B; direct-acting antivirals for acute hepatitis C, which should be treated rather than observed.",
            "Admit for encephalopathy, INR 1.5 or more, persistent vomiting, hypoglycaemia, pregnancy, extremes of age or comorbidity.",
          ],
        },
        {
          heading: "6. National Viral Hepatitis Control Programme",
          points: [
            "Launched in 2018 under the National Health Mission with the goal of eliminating hepatitis C by 2030 and reducing hepatitis B related morbidity and mortality.",
            "Components: awareness and behaviour change, immunisation with the hepatitis B birth dose and pentavalent vaccine, safe blood and injection practice, safe drinking water and sanitation, free diagnosis and free treatment at model treatment centres and treatment centres, and surveillance.",
            "Free pan-genotypic treatment for hepatitis C with sofosbuvir and velpatasvir for 12 weeks, and free tenofovir for eligible chronic hepatitis B.",
            "Screening of all pregnant women for HBsAg, birth dose of hepatitis B vaccine within 24 hours, and hepatitis B immunoglobulin for babies of HBsAg-positive mothers.",
          ],
        },
      ],
      mustDraw: [
        "A comparison table of the five hepatitis viruses covering genome, transmission, incubation, chronicity, vaccine and special risk.",
        "The hepatitis B serology interpretation table with HBsAg, anti-HBs, anti-HBc and IgM anti-HBc.",
      ],
      markSplit: [
        { part: "Classification with virology and transmission", marks: 2 },
        { part: "Clinical features and phases", marks: 2 },
        { part: "Investigations including serology and INR", marks: 1.5 },
        { part: "Complications including acute liver failure and pregnancy", marks: 2 },
        { part: "Management and the National Viral Hepatitis Control Programme", marks: 2.5 },
      ],
      keywords: ["viral hepatitis", "acute liver failure", "hepatitis E pregnancy", "NVHCP", "serology"],
    },
    {
      id: "gastro-hepatology-viral-hepatitis-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "core",
      question: "Write short notes on the prevention of mother-to-child transmission of hepatitis B, and on post-exposure prophylaxis after a needle-stick injury.",
      openingLines: [
        "Perinatal transmission is the main route by which hepatitis B is perpetuated in India, and it carries a 90 percent risk of chronic infection in the infant, against under 5 percent when infection is acquired in adult life.",
        "Both mother-to-child transmission and occupational needle-stick exposure are almost entirely preventable with timely immunoprophylaxis, which makes them a favourite examination topic.",
      ],
      answer: [
        {
          heading: "Prevention of mother-to-child transmission",
          points: [
            "Screen every pregnant woman for HBsAg at the first antenatal visit - this is mandated under the National Viral Hepatitis Control Programme and integrated with HIV and syphilis testing.",
            "If HBsAg positive, check HBeAg, HBV DNA and liver function, and screen the woman for hepatitis D and HIV.",
            "Give **tenofovir disoproxil fumarate 300 mg daily from 28 weeks of gestation until delivery (continued 4-12 weeks postpartum) if the HBV DNA exceeds 200000 IU/mL or HBeAg is positive**, which reduces transmission further.",
            "At birth give the infant **hepatitis B immunoglobulin 0.5 mL intramuscularly within 12 hours plus the hepatitis B birth dose vaccine within 24 hours at a different site**, followed by pentavalent vaccine at 6, 10 and 14 weeks.",
            "Breastfeeding is safe once the infant has received immunoprophylaxis; check HBsAg and anti-HBs in the child at 9-12 months to confirm protection.",
            "Caesarean section is not indicated purely to prevent transmission, and invasive intrapartum procedures should be minimised.",
          ],
        },
        {
          heading: "Post-exposure prophylaxis after needle-stick injury",
          points: [
            "Immediate first aid: wash the site with soap and running water, do not squeeze or scrub, and do not apply caustics or antiseptics such as bleach into the wound.",
            "Test the source for HBsAg, anti-HCV and HIV with consent, and test the exposed person for anti-HBs, anti-HCV and HIV at baseline.",
            "**Hepatitis B:** a documented responder with anti-HBs above 10 mIU/mL needs nothing. An unvaccinated or non-responding person exposed to an HBsAg-positive source needs hepatitis B immunoglobulin 0.06 mL/kg within 24 hours plus a full vaccine course started at a separate site.",
            "**Hepatitis C:** there is no vaccine and no immunoglobulin. Follow up with HCV RNA at 4-6 weeks and anti-HCV at 3-6 months, and treat early with direct-acting antivirals if infection occurs.",
            "**HIV:** start a three-drug regimen such as tenofovir, lamivudine and dolutegravir within 2 hours where indicated, and continue for 28 days with follow-up testing.",
            "Report the exposure, document it, counsel on safe sex and not donating blood during follow-up, and review injection safety practice in the unit.",
          ],
        },
      ],
      mustDraw: ["A flow chart of needle-stick management: first aid, source and exposed testing, and the hepatitis B decision branch by vaccination and anti-HBs status."],
      markSplit: [
        { part: "Antenatal screening and maternal antiviral therapy", marks: 1.5 },
        { part: "Infant immunoprophylaxis with timing and doses", marks: 1.5 },
        { part: "Needle-stick first aid and testing", marks: 1 },
        { part: "Hepatitis B, C and HIV prophylaxis decisions", marks: 1 },
      ],
      keywords: ["vertical transmission", "HBIG", "birth dose", "tenofovir 28 weeks", "needle-stick", "post-exposure prophylaxis"],
    },
    {
      id: "gastro-hepatology-viral-hepatitis-t3",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on hepatitis E in India, with particular reference to pregnancy and to outbreak control.",
      openingLines: [
        "Hepatitis E is an RNA hepevirus transmitted by the faeco-oral route through contaminated drinking water, with an incubation period of 15-60 days, and it is the commonest cause of sporadic and epidemic acute viral hepatitis in Indian adults.",
        "It is usually self-limiting, but it carries a case fatality of 15-25 percent in the third trimester of pregnancy, which makes every jaundiced pregnant woman an emergency.",
      ],
      answer: [
        {
          heading: "Epidemiology and clinical features",
          points: [
            "Large water-borne epidemics have been documented in India, notably Delhi in 1955-56 and Kanpur in 1991, typically following sewage contamination of piped water or monsoon flooding.",
            "Genotypes 1 and 2 cause the human epidemic disease in India; genotypes 3 and 4 are zoonotic, are transmitted by undercooked pork and can cause chronic infection in transplant recipients and other immunosuppressed patients.",
            "Clinical course mirrors hepatitis A: prodrome of fever, anorexia, nausea and vomiting followed by jaundice, tender hepatomegaly, dark urine and recovery over 4-6 weeks.",
            "Diagnosis is by IgM anti-HEV; there is no chronic carrier state in the immunocompetent.",
          ],
        },
        {
          heading: "Hepatitis E in pregnancy",
          points: [
            "Severity increases with gestational age, and the third trimester carries the highest risk, with maternal mortality of 15-25 percent from fulminant hepatic failure, disseminated intravascular coagulation and obstetric haemorrhage.",
            "Fetal and neonatal outcomes are poor, with high rates of preterm labour, stillbirth, intrauterine death and vertical transmission.",
            "Any pregnant woman with jaundice must be admitted, monitored for encephalopathy, INR, blood sugar and creatinine, and managed jointly by the obstetrician and physician in a centre with intensive care.",
            "Management is supportive - correction of hypoglycaemia, careful fluid balance, avoidance of sedatives and nephrotoxic drugs, lactulose for encephalopathy, and timely delivery decided obstetrically; there is no specific antiviral therapy in acute disease.",
          ],
        },
        {
          heading: "Prevention and outbreak control",
          points: [
            "There is no licensed hepatitis E vaccine in India and no immunoglobulin, so prevention is entirely environmental.",
            "Provide safe drinking water: protect the source, repair leaking pipelines, chlorinate to a residual chlorine of 0.5 mg/L, and advise boiling water at household level during an outbreak.",
            "Investigate a cluster as a water-borne outbreak - case definition, line list, epidemic curve, spot map, water sampling for coliforms and residual chlorine, and notification under IDSP-IHIP.",
            "Health education on handwashing, sanitation, safe food handling and avoidance of ice and cut fruit from street vendors; specifically identify and protect pregnant women in the affected area.",
          ],
        },
      ],
      mustDraw: ["An epidemic curve of a point-source water-borne hepatitis E outbreak, and a table of hepatitis A versus hepatitis E."],
      markSplit: [
        { part: "Virology, transmission and epidemiology in India", marks: 1.5 },
        { part: "Clinical features and diagnosis", marks: 1 },
        { part: "Course and management in pregnancy", marks: 1.5 },
        { part: "Prevention and outbreak control", marks: 1 },
      ],
      keywords: ["hepatitis E", "pregnancy mortality", "water-borne outbreak", "IgM anti-HEV", "residual chlorine"],
    },
  ],
  mcqs: [
    {
      id: "gastro-hepatology-viral-hepatitis-q1",
      stem: "A 30-year-old nurse has the following results: HBsAg negative, anti-HBs positive at 120 mIU/mL, anti-HBc total negative. What do these results indicate?",
      options: [
        "Acute hepatitis B infection",
        "Chronic hepatitis B carrier state",
        "Immunity acquired from hepatitis B vaccination",
        "Immunity following resolved natural infection",
        "Window period of hepatitis B infection",
      ],
      answer: 2,
      explanation:
        "Anti-HBs is the only positive marker, and anti-HBc is negative; since core antibody develops after natural infection but never after vaccination, isolated anti-HBs means vaccine-induced immunity, and a titre above 10 mIU/mL is protective. Resolved natural infection would show anti-HBs together with anti-HBc total. Acute infection would show HBsAg with IgM anti-HBc, and the chronic carrier state requires HBsAg positivity beyond six months. The window period is defined by isolated anti-HBc positivity when HBsAg has cleared but anti-HBs has not yet appeared.",
      difficulty: "easy",
    },
    {
      id: "gastro-hepatology-viral-hepatitis-q2",
      stem: "A woman at 32 weeks of pregnancy presents with jaundice, vomiting and malaise for five days. ALT is 1600 U/L and IgM anti-HEV is positive. Which is the most appropriate statement about her management?",
      options: [
        "She can be managed at home with a fat-free diet and reviewed after a week",
        "She needs admission and close monitoring because third-trimester hepatitis E carries 15-25 percent mortality",
        "Ribavirin should be started immediately as it is standard therapy in acute hepatitis E",
        "Immediate caesarean section is indicated to prevent vertical transmission",
        "Hepatitis E immunoglobulin should be given to prevent fulminant failure",
      ],
      answer: 1,
      explanation:
        "Hepatitis E in the third trimester carries a maternal case fatality of 15-25 percent from fulminant hepatic failure, disseminated intravascular coagulation and obstetric haemorrhage, so admission with monitoring of sensorium, INR, blood sugar and renal function in a centre with obstetric and intensive care support is mandatory. Home management with dietary advice ignores a condition that can kill within days. Ribavirin has a role only in chronic hepatitis E in the immunosuppressed and is teratogenic, so it is contraindicated in pregnancy. Delivery is decided on obstetric grounds, not to prevent transmission, and no hepatitis E immunoglobulin or licensed vaccine exists in India.",
      difficulty: "moderate",
    },
    {
      id: "gastro-hepatology-viral-hepatitis-q3",
      stem: "A 40-year-old man is found to be anti-HCV positive at a blood donation camp. He is asymptomatic with normal liver function tests. What is the correct next step?",
      options: [
        "Reassure him that a normal ALT excludes active infection",
        "Send HCV RNA to confirm active infection",
        "Start sofosbuvir and velpatasvir immediately on the basis of the antibody",
        "Repeat anti-HCV after six months",
        "Give hepatitis C immunoglobulin and vaccinate him",
      ],
      answer: 1,
      explanation:
        "Anti-HCV indicates exposure and remains positive for life, including after spontaneous clearance or successful treatment, so it cannot distinguish active from past infection; HCV RNA, or the core antigen where RNA is unavailable, is required before any treatment decision. A normal ALT is common in chronic hepatitis C and does not exclude ongoing viraemia or fibrosis. Treating on the basis of an antibody alone exposes a possibly cured patient to unnecessary drugs and cost. Repeating the antibody adds nothing, and no hepatitis C immunoglobulin or vaccine exists.",
      difficulty: "easy",
    },
    {
      id: "gastro-hepatology-viral-hepatitis-q4",
      stem: "A baby is born to a mother who is HBsAg and HBeAg positive. What is the correct immunoprophylaxis for the newborn?",
      options: [
        "Hepatitis B vaccine alone at 6, 10 and 14 weeks",
        "Hepatitis B immunoglobulin within 12 hours plus hepatitis B vaccine birth dose within 24 hours at a different site",
        "Hepatitis B immunoglobulin alone within 24 hours",
        "Delay all immunisation until the infant is tested for HBsAg at 6 weeks",
        "Hepatitis B vaccine birth dose only, with immunoglobulin reserved for a positive infant HBsAg",
      ],
      answer: 1,
      explanation:
        "Combined active and passive immunoprophylaxis - hepatitis B immunoglobulin within 12 hours and the birth dose of vaccine within 24 hours given at a separate site, followed by the pentavalent schedule - prevents about 90-95 percent of perinatal transmission, which otherwise leads to chronic infection in around 90 percent of infants. Vaccine alone, starting at 6 weeks, misses the critical window when the infant is exposed at delivery. Immunoglobulin alone gives only transient protection with no lasting immunity. Waiting to test the infant wastes the window entirely, since infection is established long before HBsAg becomes detectable.",
      difficulty: "easy",
    },
    {
      id: "gastro-hepatology-viral-hepatitis-q5",
      stem: "A 55-year-old known HBsAg carrier with stable disease is about to start rituximab-based chemotherapy for lymphoma. What must be done?",
      options: [
        "Nothing, provided his ALT and HBV DNA are currently normal",
        "Start tenofovir or entecavir prophylaxis before chemotherapy and continue it during and after treatment",
        "Give hepatitis B immunoglobulin before each chemotherapy cycle",
        "Vaccinate him against hepatitis B before starting chemotherapy",
        "Monitor ALT monthly and start antivirals only if it rises",
      ],
      answer: 1,
      explanation:
        "Rituximab and other B-cell depleting agents carry a high risk of hepatitis B reactivation, which can present as severe hepatitis or acute liver failure, so prophylactic nucleoside or nucleotide analogue therapy is started before immunosuppression and continued for at least 12 months after rituximab. A currently normal ALT and HBV DNA do not protect against reactivation and are exactly the situation prophylaxis is designed for. Immunoglobulin has no role in this setting, and vaccinating an already HBsAg-positive patient is pointless. Waiting for the ALT to rise means waiting for the reactivation hepatitis one is trying to prevent, by which time mortality is substantial.",
      difficulty: "moderate",
    },
    {
      id: "gastro-hepatology-viral-hepatitis-q6",
      stem: "A known chronic hepatitis B carrier, previously stable with normal transaminases, develops a severe flare with ALT 1400 U/L and jaundice. HBsAg remains positive and IgM anti-HBc is negative. Which additional test is most important?",
      options: [
        "Anti-HDV (hepatitis D) antibody",
        "Repeat anti-HBs",
        "IgG anti-HAV",
        "Serum ceruloplasmin",
        "Anti-mitochondrial antibody",
      ],
      answer: 0,
      explanation:
        "A severe unexplained flare in a previously stable hepatitis B carrier, with negative IgM anti-HBc excluding recent acute hepatitis B, should raise the possibility of hepatitis D superinfection, which requires HBsAg for its own replication and produces exactly this picture of accelerated severe hepatitis and rapid progression to cirrhosis. Repeating anti-HBs is uninformative while HBsAg is positive. IgG anti-HAV only shows past exposure or vaccination and would not explain the flare, though IgM anti-HAV or IgM anti-HEV superinfection is worth excluding. Ceruloplasmin and anti-mitochondrial antibody investigate Wilson disease and primary biliary cholangitis, neither of which fits this presentation.",
      difficulty: "hard",
    },
    {
      id: "gastro-hepatology-viral-hepatitis-q7",
      stem: "Under the National Viral Hepatitis Control Programme, which regimen is provided free for a patient with chronic hepatitis C and compensated cirrhosis, and how is cure defined?",
      options: [
        "Pegylated interferon plus ribavirin for 48 weeks; cure is normalisation of ALT",
        "Sofosbuvir plus velpatasvir daily for 12 weeks; cure is an undetectable HCV RNA 12 weeks after therapy ends",
        "Tenofovir 300 mg daily lifelong; cure is loss of HBsAg",
        "Sofosbuvir alone for 24 weeks; cure is a negative anti-HCV",
        "Ribavirin monotherapy for 24 weeks; cure is a fall in transaminases",
      ],
      answer: 1,
      explanation:
        "The programme supplies free pan-genotypic sofosbuvir plus velpatasvir for 12 weeks, and cure is defined as a sustained virological response at 12 weeks (SVR12), meaning undetectable HCV RNA twelve weeks after completing therapy. Interferon-based therapy is obsolete, poorly tolerated and far less effective. Tenofovir treats hepatitis B, not C, and loss of HBsAg is a hepatitis B endpoint. Sofosbuvir monotherapy is inadequate and would breed resistance, and ribavirin alone has no useful antiviral effect in hepatitis C. Anti-HCV never becomes negative after cure, so it can never be a test of cure.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "gastro-hepatology-viral-hepatitis-c1",
      front: "Which hepatitis viruses are faeco-oral and which are blood-borne?",
      back: "Faeco-oral: A and E (never chronic in the immunocompetent). Blood-borne: B, C and D (can become chronic).",
    },
    {
      id: "gastro-hepatology-viral-hepatitis-c2",
      front: "Risk of chronicity of hepatitis B by age at infection.",
      back: "Perinatal about 90 percent, early childhood about 30 percent, adult acquisition under 5 percent.",
    },
    {
      id: "gastro-hepatology-viral-hepatitis-c3",
      front: "Anti-HBs positive, anti-HBc negative - what does it mean?",
      back: "Immunity from vaccination. Anti-HBs with anti-HBc total positive means resolved natural infection.",
    },
    {
      id: "gastro-hepatology-viral-hepatitis-c4",
      front: "Which marker is positive in the hepatitis B window period?",
      back: "IgM anti-HBc alone, with HBsAg already cleared and anti-HBs not yet detectable.",
    },
    {
      id: "gastro-hepatology-viral-hepatitis-c5",
      front: "Why can anti-HCV not be used as a test of cure?",
      back: "It stays positive for life after exposure, including after spontaneous clearance or successful treatment. Cure is undetectable HCV RNA 12 weeks after therapy (SVR12).",
    },
    {
      id: "gastro-hepatology-viral-hepatitis-c6",
      front: "Free hepatitis C regimen under NVHCP and its duration.",
      back: "Sofosbuvir 400 mg plus velpatasvir 100 mg once daily for 12 weeks, pan-genotypic.",
    },
    {
      id: "gastro-hepatology-viral-hepatitis-c7",
      front: "Maternal mortality of hepatitis E in the third trimester.",
      back: "15-25 percent, from fulminant hepatic failure, DIC and obstetric haemorrhage. There is no licensed vaccine in India.",
    },
    {
      id: "gastro-hepatology-viral-hepatitis-c8",
      front: "Immunoprophylaxis for a baby born to an HBsAg-positive mother.",
      back: "Hepatitis B immunoglobulin 0.5 mL IM within 12 hours plus hepatitis B vaccine birth dose within 24 hours at a different site, then pentavalent at 6, 10 and 14 weeks.",
    },
    {
      id: "gastro-hepatology-viral-hepatitis-c9",
      front: "When is maternal tenofovir given in pregnancy for hepatitis B?",
      back: "From 28 weeks until delivery (continued 4-12 weeks postpartum) when HBV DNA exceeds 200000 IU/mL or HBeAg is positive.",
    },
    {
      id: "gastro-hepatology-viral-hepatitis-c10",
      front: "Define acute liver failure.",
      back: "Encephalopathy with coagulopathy (INR 1.5 or more) developing within 26 weeks of the onset of illness in a patient with no pre-existing liver disease.",
    },
    {
      id: "gastro-hepatology-viral-hepatitis-c11",
      front: "Post-exposure prophylaxis after a needle-stick from an HBsAg-positive source in an unvaccinated worker.",
      back: "Hepatitis B immunoglobulin 0.06 mL/kg IM within 24 hours plus a full vaccine course started at a different site. Nothing is needed if anti-HBs is already above 10 mIU/mL.",
    },
    {
      id: "gastro-hepatology-viral-hepatitis-c12",
      front: "Hepatocellular carcinoma surveillance in chronic viral hepatitis.",
      back: "Six-monthly ultrasound with alpha-fetoprotein in all cirrhotics, Asian men over 40 and women over 50 with hepatitis B, and anyone with a family history of liver cancer.",
    },
  ],
  references: [
    "National Viral Hepatitis Control Programme operational guidelines, MoHFW Government of India, 2018 and subsequent updates",
    "WHO Guidelines for the prevention, diagnosis, care and treatment of people with chronic hepatitis B infection, 2024",
    "WHO Guidelines on hepatitis C: consolidated guidelines on testing, care and treatment, 2022",
    "Indian National Association for Study of the Liver (INASL) consensus on hepatitis B and hepatitis C management",
    "Park's Textbook of Preventive and Social Medicine, 27th edition, 2023 - viral hepatitis",
    "Harrison's Principles of Internal Medicine, 21st edition, 2022 - acute and chronic viral hepatitis",
  ],
});

const cases: ClinicalCase[] = [
  {
    id: "gastro-hepatology-case-1",
    title: "Decompensated alcohol-related cirrhosis with ascites after a first variceal bleed",
    kind: "long",
    subjectId: "gastro-hepatology",
    opening:
      "A 45-year-old lorry driver from a small town near Bathinda in Punjab, who has drunk 180-250 mL of country liquor every evening for 20 years, presents 10 days after discharge from the district hospital, where he was admitted with haematemesis and melaena, transfused two units of blood and had oesophageal varices banded, with progressive abdominal distension for 2 months, swelling of both feet for 6 weeks and yellowness of the eyes for 3 weeks, and is presented at the table with tense ascites and the stigmata of chronic liver disease.",
    minutes: 30,
    frequency: "core",
    sections: [
      {
        heading: "How to open the presentation",
        points: [
          "Give the identifying data, the presenting complaints in the patient's own order with their durations, and the one-line problem statement before any detail, because the examiner decides within the first thirty seconds whether the candidate has understood the case.",
          "Say: 'Mr X, a 45-year-old lorry driver from Punjab who has taken about 200 mL of country liquor daily for 20 years, presents with progressive distension of the abdomen for 2 months, swelling of both feet for 6 weeks and yellow discolouration of the eyes for 3 weeks, and had one episode of vomiting of blood with black stools 10 days ago, for which he was admitted, transfused and had his varices banded.'",
          "Bring in the relevant negatives at once: no fever or abdominal pain, no altered sleep, confusion or tremulousness, no fall in urine output, no bleeding from the gums or skin, and no chest pain or breathlessness beyond that produced by the distension.",
          "State the discharge drugs with doses and the real adherence - propranolol 20 mg twice daily, which he stopped after 3 days because of giddiness, spironolactone 100 mg with furosemide 40 mg each morning, and lactulose 20 mL twice daily - and say in the same breath that he has not taken alcohol since the admission.",
          "Close the opening with a functional statement: he can walk to the market but is breathless on lying flat because of the distension, has lost about 8 kg of muscle over a year by his wife's account, and has not driven since the bleed.",
        ],
      },
      {
        heading: "History of the presenting illness",
        points: [
          "Characterise the distension: it began as fullness of the flanks noticed by the tightness of his trousers, became generalised over 2 months, and now causes early satiety, breathlessness on lying flat and a lump at the umbilicus that appears on straining - the natural history of ascites in the patient's own words.",
          "Reconstruct the bleed from the discharge summary: the number and volume of vomits, whether the blood was fresh or coffee-ground, the duration of melaena, giddiness or syncope on standing, the units transfused, the endoscopy finding of grade 3 oesophageal varices with red wale signs that were banded, and whether terlipressin, antibiotics and lactulose were given.",
          "Trace the jaundice: gradual deepening over 3 weeks with dark urine but no pale stools or itching, which points to hepatocellular jaundice rather than obstruction, and ask directly about fever and abdominal pain, because spontaneous bacterial peritonitis in a cirrhotic may present with nothing more than that.",
          "Screen for hepatic encephalopathy that the patient will not report: reversal of the sleep rhythm, irritability, slowness at counting money, tremor of the outstretched hands noticed by the family, and any episode of drowsiness or inappropriate behaviour in the last month.",
          "Hunt for the precipitant of decompensation in order: a drinking binge in the weeks before the bleed, painkillers bought for body ache, indigenous or ayurvedic preparations, a febrile illness, constipation, and any recent large-volume tapping without albumin.",
          "Finish with the other things that decompensation brings: loss of libido and impotence, bruising, gum bleeding, muscle cramps at night, and the reduction in urine volume that would mark hepatorenal syndrome.",
        ],
      },
      {
        heading: "Alcohol, past and treatment history",
        points: [
          "Quantify the alcohol as it is actually taken: 180-250 mL of country liquor of roughly 40% strength every evening for 20 years is 60-80 g of ethanol a day, well above the 40-60 g a day for 10 years that makes cirrhosis likely, and describe the pattern - daily rather than binge, morning drinking, and drinking alone.",
          "Ask about dependence and withdrawal: shakes on waking, a drink to steady the hands, previous withdrawal seizures or delirium tremens, previous attempts to stop and what happened, and score the CAGE or AUDIT questions so that alcohol use disorder is diagnosed explicitly rather than implied.",
          "Take the risk history for the other liver diseases the examiner will raise: jaundice in the past, blood transfusion before this bleed, tattoos, injections from unqualified practitioners, unprotected sex on the highway, and any previous test for hepatitis B or C.",
          "Past illnesses that change management: diabetes, tuberculosis and its treatment, previous admissions for ascites or bleeding, previous paracentesis, pancreatitis, and any psychiatric illness or depression.",
          "List every drug with dose and frequency, separate the discharge prescription from what is actually swallowed, count the lactulose stools per day, and ask about the hepatotoxic and nephrotoxic drugs - NSAIDs, aminoglycosides, antitubercular drugs and herbal preparations - that a cirrhotic must not take.",
          "Record the vaccination history for hepatitis A and B, and the family history of liver disease, diabetes, alcohol use and sudden death.",
        ],
      },
      {
        heading: "Family, personal and socio-economic history",
        points: [
          "Occupation in real terms: a lorry driver on the Punjab-Rajasthan route for 20 years, away from home 20 days a month, who has not driven since the bleed and has already lost the family's only income - and who cannot safely drive again while there is any degree of encephalopathy.",
          "The family: wife, three children of school age and an elderly mother; who cooks, who supervises the tablets, who took the loan for the hospital admission, and whether the family holds an Ayushman Bharat PM-JAY card that would pay for endoscopy, albumin and a future transplant assessment.",
          "The wife's account of the drinking, of any violence at home and of the money spent on liquor belongs in the case, because the family is the unit of care and abstinence will succeed or fail at home rather than in the clinic.",
          "Diet as eaten: two meals of roti and dal, meat twice a month, meals often replaced by liquor on the road, salt and pickle at every meal and no evening snack - the pattern that produces the sarcopenia visible at the shoulders.",
          "Tobacco as beedi or gutkha, and the patient's own understanding of the illness and his readiness to stop drinking, stated as a stage of change, since the whole management plan is built on it.",
        ],
      },
      {
        heading: "General examination to demonstrate",
        points: [
          "General survey: a wasted man with a swollen abdomen, temporalis and shoulder-girdle wasting, icterus of the sclerae, mild pallor, bilateral pitting pedal oedema up to the knees, no clubbing, no lymphadenopathy and no cyanosis, with a mid-arm circumference under 22 cm.",
          "The stigmata of chronic liver disease named one by one: palmar erythema, more than five spider naevi over the upper chest and arms that blanch on pressure and fill from the centre, leuconychia, bilateral parotid enlargement, Dupuytren contracture, gynaecomastia, loss of axillary and pubic hair, and testicular atrophy.",
          "Vital signs with their meaning: pulse 92 per minute and regular, blood pressure 100/64 mmHg, temperature normal, respiratory rate 22 per minute from the raised diaphragm, and the observation that a systolic pressure below 90 mmHg would not tolerate a beta-blocker.",
          "Test for hepatic encephalopathy in front of the examiner: orientation to time and place, a five-pointed star drawn on paper, serial subtraction of sevens, and asterixis with the arms outstretched and the wrists dorsiflexed for 30 seconds - then state the West Haven grade, which here is grade 0.",
          "Look for the bleeding tendency and the fetor: ecchymoses at injection sites, bleeding gums, petechiae, and the sweet musty smell of fetor hepaticus.",
          "Look for alcohol's other targets: peripheral neuropathy with absent ankle jerks and glove-and-stocking sensory loss, a cerebellar gait, the nystagmus and ophthalmoplegia of Wernicke encephalopathy, proximal myopathy, and the displaced apex of alcoholic cardiomyopathy.",
        ],
      },
      {
        heading: "Abdominal examination to demonstrate",
        points: [
          "Inspection: a uniformly distended abdomen with full flanks, an everted umbilicus with a reducible umbilical hernia of 3 cm, dilated veins radiating from the umbilicus in which the flow, tested by milking a segment between two fingers, runs away from the umbilicus, no scars of previous tapping, and skin that is shiny and stretched.",
          "Palpation of the liver from the right iliac fossa upwards with the patient breathing deeply: the edge is felt 2 cm below the right costal margin, firm, sharp, smooth and non-tender, with the upper border percussed in the fifth intercostal space to give a span of 13 cm - and in tense ascites the organs are found by dipping palpation.",
          "The spleen palpated from the right iliac fossa towards the left hypochondrium, and in the right lateral position if it is not felt supine: it is palpable 3 cm below the left costal margin along its long axis, firm, non-tender, with a notch, moving with respiration and with no band of resonance in front - the findings that distinguish it from a kidney.",
          "Shifting dullness demonstrated correctly: percuss from the umbilicus towards the left flank with the finger parallel to the fluid level, keep the finger at the point where the note becomes dull, turn the patient onto the right side, wait 30 seconds and percuss again to show resonance; then the fluid thrill, with the patient's own hand pressed along the midline, which confirms grade 3 ascites.",
          "Auscultation for bowel sounds, a venous hum at the umbilicus, and a bruit over the liver that would suggest hepatocellular carcinoma or alcoholic hepatitis, followed by the statement that the abdomen is not tender and there is no guarding, rigidity or rebound, which argues against spontaneous bacterial peritonitis.",
          "Say that the examination is completed by inspection of the external genitalia for testicular atrophy and hydrocele, the hernial orifices, and a per-rectal examination for melaena and haemorrhoids, with the respiratory system examined for the right pleural effusion of hepatic hydrothorax and the cardiovascular system for a raised jugular venous pressure, which would redirect the diagnosis towards a cardiac cause.",
        ],
      },
      {
        heading: "Closing the examination and the functional assessment",
        points: [
          "Grade the ascites by the International Ascites Club as grade 3, say whether it is tense and whether it is causing breathlessness or an umbilical hernia, and grade the encephalopathy by West Haven, since both feed directly into the Child-Pugh class.",
          "State the clinical Child-Pugh estimate before the laboratory numbers - deep jaundice, grade 3 ascites and no encephalopathy already give 7 of the points - and say that albumin and INR will complete it and that a MELD-Na score will be calculated for transplant referral.",
          "Comment on nutrition and frailty as separate findings: the mid-arm muscle circumference, the hand-grip strength, the ability to rise from a chair without using the hands, and the weight before the ascites, because sarcopenia is now a recognised predictor of survival in cirrhosis.",
          "State the significant negatives that separate the diagnosis from its neighbours: no fever, no abdominal tenderness, no lymphadenopathy, a normal jugular venous pressure, a non-pulsatile liver and no hepatic bruit.",
          "Summarise the positive findings and the negatives in two sentences before the summary statement, so that the examiner hears the diagnosis being assembled from the findings rather than announced from the history.",
        ],
      },
    ],
    summaryStatement:
      "This is a 45-year-old lorry driver who has taken 60-80 g of ethanol a day as country liquor for 20 years, presenting with progressive abdominal distension for 2 months, pedal oedema for 6 weeks and jaundice for 3 weeks, with a first oesophageal variceal bleed 10 days ago that was endoscopically banded, who on examination is icteric and wasted with parotid enlargement, palmar erythema, multiple spider naevi, gynaecomastia and testicular atrophy, has grade 3 ascites with shifting dullness and a fluid thrill, a firm non-tender liver with a sharp edge 2 cm below the costal margin and a span of 13 cm, a spleen palpable 3 cm below the left costal margin, and no asterixis with intact orientation - a picture of decompensated alcohol-related cirrhosis of the liver with portal hypertension, clinically Child-Pugh class C, presenting with grade 3 ascites and a recent variceal bleed, without overt hepatic encephalopathy and without clinical evidence of spontaneous bacterial peritonitis.",
    differential: [
      {
        diagnosis: "Alcohol-related cirrhosis with portal hypertension",
        forIt:
          "Twenty years of 60-80 g of ethanol a day, the full set of stigmata including parotid enlargement and Dupuytren contracture, a firm liver with splenomegaly and ascites, and proven oesophageal varices.",
        againstIt:
          "Nothing clinically, but alcohol is a diagnosis of exclusion in India: hepatitis B and C must be tested for in every drinker, cirrhosis must be confirmed on ultrasound or elastography, and about one heavy drinker in ten has a second cause of liver disease.",
      },
      {
        diagnosis: "Cirrhosis from chronic hepatitis B or C with alcohol as a cofactor",
        forIt:
          "HBsAg prevalence in India is 3-4%, a lorry driver has occupational sexual risk, and alcohol accelerates both viral diseases; the clinical picture of viral cirrhosis is identical.",
        againstIt:
          "No past jaundice, transfusion, tattoos or injections from unqualified practitioners, and the parotid enlargement and Dupuytren contracture point to alcohol, but only HBsAg and anti-HCV settle it, and a positive result changes the whole treatment.",
      },
      {
        diagnosis: "Severe alcoholic hepatitis superimposed on cirrhosis",
        forIt:
          "Jaundice of recent onset in a heavy drinker who was drinking until 10 days ago, with a raised bilirubin, and the possibility of a tender enlarged liver, fever and leucocytosis.",
        againstIt:
          "The liver is not tender, there is no fever and the jaundice is moderate rather than deep; the Maddrey discriminant function from the prothrombin time and bilirubin decides, and a value above 32 would raise the question of prednisolone once infection is excluded.",
      },
      {
        diagnosis: "Tuberculous peritonitis or malignant ascites from hepatocellular carcinoma",
        forIt:
          "Both are common in India, both produce ascites with weight loss, and a cirrhotic of 20 years' drinking is at real risk of hepatocellular carcinoma, which can present as new or refractory ascites.",
        againstIt:
          "No fever, night sweats or doughy abdomen, a smooth non-tender liver with no bruit, and the expectation of a serum-ascites albumin gradient of 1.1 g/dL or more with a low ascitic protein and an adenosine deaminase under 39 U/L; ultrasound with alpha-fetoprotein excludes a focal lesion.",
      },
    ],
    investigations: [
      {
        test: "Complete blood count with platelet count and peripheral smear",
        why: "Anaemia from the bleed, thrombocytopenia from hypersplenism, the macrocytosis of alcohol, and leucocytosis that would suggest spontaneous bacterial peritonitis or alcoholic hepatitis.",
        expected:
          "Haemoglobin 8-9 g/dL, mean corpuscular volume above 100 fL, platelets 60000-90000 per cubic millimetre, and a normal white cell count with no left shift.",
      },
      {
        test: "Liver function tests with serum albumin and prothrombin time with INR",
        why: "To stage the disease by Child-Pugh and MELD, to support alcohol as the cause by the AST:ALT ratio, and to detect alcoholic hepatitis by the bilirubin and prothrombin time.",
        expected:
          "Bilirubin 3-4 mg/dL, AST about 120 U/L with ALT about 50 U/L - a ratio above 2 with both under 300 - gamma-glutamyl transferase raised, albumin 2.4 g/dL and INR 1.8.",
      },
      {
        test: "Serum creatinine, urea, sodium and potassium",
        why: "A baseline before diuretics, the sodium and creatinine for MELD-Na, and the detection of hyponatraemia, hyperkalaemia and the acute kidney injury that precedes hepatorenal syndrome.",
        expected:
          "Creatinine 0.9-1.1 mg/dL, urea 20-30 mg/dL, sodium 130-133 mmol/L and potassium 4.0-4.5 mmol/L; a creatinine that rises by 0.3 mg/dL within 48 hours defines acute kidney injury in cirrhosis.",
      },
      {
        test: "Diagnostic paracentesis of ascitic fluid",
        why: "Mandatory in every new ascites and every admission: cell count with differential, albumin for the serum-ascites albumin gradient, total protein, adenosine deaminase, and culture inoculated into blood culture bottles at the bedside.",
        expected:
          "A serum-ascites albumin gradient of 1.1 g/dL or more with an ascitic protein under 2.5 g/dL, a polymorphonuclear count under 250 cells per cubic millimetre, adenosine deaminase under 39 U/L and a sterile culture - the high-gradient, low-protein ascites of cirrhosis without peritonitis.",
      },
      {
        test: "Ultrasound of the abdomen with Doppler of the portal venous system",
        why: "To confirm cirrhosis, to measure the spleen and the portal vein, to exclude portal vein thrombosis and hepatocellular carcinoma, to grade the ascites and to look at the kidneys before diuretics.",
        expected:
          "A shrunken liver with a coarse echotexture and nodular surface, caudate lobe hypertrophy, a spleen of 15 cm, a portal vein of 15 mm with hepatopetal flow, gross ascites and no focal lesion or thrombus.",
      },
      {
        test: "HBsAg, anti-HCV and HIV serology",
        why: "To exclude a coexisting or alternative cause that is treatable in its own right and that must be known before any transplant assessment; alcohol and viral hepatitis multiply each other's damage.",
        expected:
          "All negative; a positive HBsAg would demand HBV DNA and a nucleoside analogue irrespective of the alcohol, and a positive anti-HCV would demand HCV RNA and direct-acting antivirals under the National Viral Hepatitis Control Programme.",
      },
      {
        test: "Upper gastrointestinal endoscopy at 2-4 weeks after the index banding",
        why: "The eradication programme after a first variceal bleed: repeat band ligation until the varices are obliterated, and a look for gastric varices and portal hypertensive gastropathy that change the plan.",
        expected:
          "Residual grade 2 oesophageal varices with healing banding ulcers, no gastric varices and mild portal hypertensive gastropathy; banding is repeated every 2-4 weeks until eradication, then surveillance at 3-6 months and 6-12 monthly thereafter.",
      },
      {
        test: "Alpha-fetoprotein, fasting glucose with HbA1c, and a chest radiograph",
        why: "Alpha-fetoprotein with the ultrasound starts six-monthly surveillance for hepatocellular carcinoma, diabetes is common in cirrhosis and changes the diet plan, and the chest film shows a hepatic hydrothorax or the tuberculosis that alcohol and malnutrition invite.",
        expected:
          "Alpha-fetoprotein under 10 ng/mL, fasting glucose in the impaired range, and a chest radiograph with a small right pleural effusion and clear lung fields.",
      },
    ],
    management: [
      {
        heading: "Immediate priorities and the management of the ascites",
        points: [
          "Admit rather than treat from the clinic: tense ascites in a patient 10 days after a variceal bleed needs a diagnostic tap before anything else, and if the polymorphonuclear count is 250 cells per cubic millimetre or more, treat spontaneous bacterial peritonitis with cefotaxime 2 g IV every 8 hours for 5 days plus albumin 1.5 g/kg on day 1 and 1 g/kg on day 3.",
          "For grade 3 ascites do a single large-volume paracentesis with 6-8 g of albumin for every litre removed once more than 5 L is taken off, and start diuretics the same day rather than trying to diurese a tense abdomen.",
          "Diuretics as a fixed ratio: spironolactone 100 mg with furosemide 40 mg together in the morning, stepped up every 3-5 days in the same 100:40 ratio to a ceiling of 400 mg and 160 mg, aiming at a weight loss of 0.5 kg a day without oedema and up to 1 kg a day with oedema.",
          "Sodium under 2 g a day, which is 5 g of salt with no added salt, pickle or papad, no fluid restriction unless sodium is under 125 mmol/L, no bed rest, and an absolute ban on NSAIDs, ACE inhibitors, ARBs and aminoglycosides.",
          "Check sodium, potassium and creatinine at one week and after each dose change, and stop the diuretics for a sodium under 125 mmol/L, a potassium above 6 mmol/L, a rising creatinine, encephalopathy or disabling cramps; ascites that fails 400/160 or recurs early is refractory and needs repeated paracentesis with albumin and a transplant referral.",
        ],
      },
      {
        heading: "Secondary prophylaxis after the variceal bleed",
        points: [
          "A non-selective beta-blocker with band ligation is the standard: restart carvedilol 6.25 mg once daily, increasing to 6.25 mg twice daily after 3 days if the systolic pressure stays above 90 mmHg, because carvedilol lowers portal pressure more than propranolol and is now the preferred agent; propranolol 20 mg twice daily titrated to a resting pulse of 55-60 is the alternative.",
          "Continue the beta-blocker indefinitely, but hold it during spontaneous bacterial peritonitis, acute kidney injury, a sodium under 130 mmol/L or a systolic pressure under 90 mmHg, and restart when these resolve - his giddiness was a reason to reduce the dose, not to abandon it.",
          "Endoscopic band ligation every 2-4 weeks until the varices are eradicated, with surveillance endoscopy at 3-6 months and then every 6-12 months, and a short course of a proton pump inhibitor only for the banding ulcers.",
          "Teach the family what a rebleed looks like and to come at once: in hospital he should receive restrictive transfusion to a haemoglobin of 7-8 g/dL, terlipressin 2 mg IV every 4 hours or octreotide 50 microgram bolus then 50 microgram an hour for 2-5 days, ceftriaxone 1 g IV daily for up to 7 days, lactulose, and endoscopy within 12 hours, with an early transjugular intrahepatic portosystemic shunt considered within 72 hours if he is Child-Pugh C with a score up to 13.",
          "Ban aspirin and NSAIDs for pain, use paracetamol up to 2 g a day, and write down the drugs he must never accept from a chemist.",
        ],
      },
      {
        heading: "Alcohol cessation, nutrition and the other complications",
        points: [
          "Total abstinence is the single intervention that improves survival at every stage: deliver a brief intervention at this visit, refer to a de-addiction service, and prescribe baclofen 5 mg three times a day increasing to 10 mg three times a day, which is the anti-craving drug with safety data in cirrhosis; acamprosate is the alternative, and disulfiram and naltrexone are avoided in decompensated disease.",
          "Treat any withdrawal with lorazepam or oxazepam rather than long-acting benzodiazepines, and give thiamine 100 mg daily, with 500 mg IV three times a day for 3 days if there is any sign of Wernicke encephalopathy, always before glucose.",
          "Feed him: 35 kcal/kg and 1.2-1.5 g/kg of protein a day, never a protein restriction, in small frequent meals with a late-evening carbohydrate snack and an early breakfast so that no fast exceeds 6 hours, plus a multivitamin, zinc and vitamin D, and resistance exercise as the ascites comes under control.",
          "Encephalopathy prevention: lactulose 15-30 mL two to three times a day titrated to 2-3 soft stools, with rifaximin 550 mg twice daily added after a recurrence on lactulose; avoid sedatives, and treat every precipitant - bleeding, infection, constipation, hypokalaemia and dehydration after paracentesis - as it appears.",
          "Vaccinate against hepatitis A and B if not immune, influenza yearly, pneumococcus and COVID-19, and start six-monthly ultrasound with alpha-fetoprotein for hepatocellular carcinoma surveillance.",
        ],
      },
      {
        heading: "Follow-up, referral and the family physician's long-term role",
        points: [
          "Review at one week with electrolytes and weight, every 2 weeks while the diuretics are titrated, then monthly, weighing him and testing for asterixis at every visit and recording the Child-Pugh and MELD-Na scores in a hand-held record.",
          "Refer to a gastroenterologist for the endoscopy programme now, and to a transplant centre if the MELD score is 15 or more or he remains Child-Pugh C after 3-6 months of abstinence, or sooner for refractory ascites, a second bleed, hepatorenal syndrome or recurrent encephalopathy; living-donor transplantation is the realistic route in India and PM-JAY enrolment decides its affordability.",
          "Tell the family the prognosis honestly: Child-Pugh C carries a one-year survival of about 45% without transplantation and the best predictor of his survival is whether he drinks again; document the abstinence at each visit, because the transplant programme will ask.",
          "Practical counselling that the examiner rewards: he must not drive a lorry with any encephalopathy, the umbilical hernia can ulcerate or rupture in tense ascites and needs prompt paracentesis if the skin thins, diuretics are stopped during vomiting or diarrhoea, and any fever, abdominal pain, black stool or confusion means the hospital that day.",
          "Care of the family: screen the wife and children for hepatitis B if he proves positive, counsel the children about alcohol, support the wife through the local self-help group, and begin the conversation about goals of care and palliative support if he is not a transplant candidate.",
        ],
      },
    ],
    viva: [
      {
        q: "How is the Child-Pugh score calculated, and what class is this patient?",
        a: "Five parameters scored 1 to 3 each: bilirubin under 2, 2-3 or over 3 mg/dL; albumin over 3.5, 2.8-3.5 or under 2.8 g/dL; INR under 1.7, 1.7-2.3 or over 2.3; ascites absent, mild or diuretic-controlled, or moderate to severe; and encephalopathy absent, grade 1-2 or grade 3-4. Totals of 5-6 are class A, 7-9 class B and 10-15 class C. With a bilirubin of 3.5 mg/dL, albumin 2.4 g/dL, INR 1.8, grade 3 ascites and no encephalopathy he scores 3 + 3 + 2 + 3 + 1 = 12, class C, with a one-year survival of about 45% and a two-year survival of about 35% without transplantation.",
      },
      {
        q: "What is the serum-ascites albumin gradient and how does it change your thinking?",
        a: "It is the serum albumin minus the ascitic fluid albumin from samples taken on the same day. A gradient of 1.1 g/dL or more identifies portal hypertension with about 97% accuracy - cirrhosis, alcoholic hepatitis, cardiac ascites, Budd-Chiari syndrome and portal vein thrombosis - whereas a gradient under 1.1 g/dL means a peritoneal cause such as tuberculosis, carcinomatosis, pancreatic ascites or nephrotic syndrome. The ascitic total protein then splits the high-gradient group: under 2.5 g/dL in cirrhosis and 2.5 g/dL or more in cardiac ascites and hepatic venous outflow obstruction; an ascitic protein under 1.5 g/dL also marks a high risk of spontaneous bacterial peritonitis.",
      },
      {
        q: "How do you diagnose and treat spontaneous bacterial peritonitis, and who gets prophylaxis?",
        a: "The diagnosis is an ascitic polymorphonuclear count of 250 cells per cubic millimetre or more without a surgical source, whatever the culture shows, and the culture is inoculated into blood culture bottles at the bedside to raise the yield. Treatment is cefotaxime 2 g IV every 8 hours or ceftriaxone for 5 days, with albumin 1.5 g/kg on day 1 and 1 g/kg on day 3 when the creatinine is over 1 mg/dL, the urea over 30 mg/dL or the bilirubin over 4 mg/dL, because albumin halves the hepatorenal syndrome and the mortality. Every survivor gets norfloxacin 400 mg daily for life as secondary prophylaxis, and primary prophylaxis is given when the ascitic protein is under 1.5 g/dL with advanced liver failure or renal impairment.",
      },
      {
        q: "Why combine a beta-blocker with band ligation, and when would you stop the beta-blocker?",
        a: "After a first bleed the combination of a non-selective beta-blocker with band ligation roughly halves rebleeding compared with either alone, because ligation removes the varix while the beta-blocker lowers the portal pressure that made it. Carvedilol 6.25-12.5 mg a day is preferred by the Baveno VII consensus for its additional alpha-blockade, and in compensated patients with clinically significant portal hypertension it also delays decompensation. It is held, not stopped, when the systolic pressure falls below 90 mmHg, the sodium below 130 mmol/L, or acute kidney injury or spontaneous bacterial peritonitis develops, and restarted when they resolve.",
      },
      {
        q: "His creatinine rises to 1.8 mg/dL at the second visit. What is your approach?",
        a: "Acute kidney injury in cirrhosis is a rise of 0.3 mg/dL within 48 hours or of 50% within 7 days. Stop the diuretics and every nephrotoxic drug, tap the ascites to exclude peritonitis, treat any infection, and expand the volume with albumin 1 g/kg a day for 2 days. If the creatinine does not fall, and there is no shock, no nephrotoxin, no proteinuria over 500 mg a day, no haematuria and a normal kidney ultrasound, this is hepatorenal syndrome-acute kidney injury, treated with terlipressin as a continuous infusion of 2-12 mg a day with albumin 20-40 g a day, or noradrenaline in intensive care, and it is an indication for urgent transplant referral because survival without transplantation is measured in weeks.",
      },
      {
        q: "How is hepatic encephalopathy graded, and how is a first overt episode managed?",
        a: "West Haven grades: minimal, detectable only on psychometric testing; grade 1, reversed sleep rhythm and shortened attention; grade 2, lethargy, disorientation in time and asterixis; grade 3, somnolence with confusion and disorientation in place; grade 4, coma. The precipitant is found and treated - bleeding, infection, constipation, diuretic-induced hypokalaemia and alkalosis, dehydration after paracentesis, sedatives and dietary indiscretion - while lactulose 25 mL is given every 1-2 hours until two soft stools are passed and then titrated to 2-3 stools a day, with a lactulose enema in grade 3-4 and airway protection in grade 4. Protein is not restricted, and rifaximin 550 mg twice daily is added to lactulose after a recurrence to prevent further episodes.",
      },
      {
        q: "When would you refer him for liver transplantation, and what is the six-month rule?",
        a: "Referral is made for decompensated cirrhosis with a MELD score of 15 or more or Child-Pugh C, refractory ascites, recurrent variceal bleeding despite treatment, hepatorenal syndrome, recurrent encephalopathy, or hepatocellular carcinoma within the Milan criteria. Most programmes ask for 6 months of documented abstinence, which allows recovery that may make transplantation unnecessary and predicts, though only modestly, the risk of relapse; selected patients with severe alcoholic hepatitis who fail steroids are now transplanted earlier. In India this is usually a living-donor transplant costing 20-25 lakh rupees, partially covered under some state schemes, and the family physician's contribution is early referral, documented abstinence and psychiatric assessment.",
      },
      {
        q: "Which drugs must he avoid, and how would you treat his pain or a fever?",
        a: "NSAIDs and aspirin cause bleeding, acute kidney injury and diuretic-resistant ascites; aminoglycosides are nephrotoxic; ACE inhibitors and ARBs drop the pressure and the renal perfusion; benzodiazepines and opioids precipitate encephalopathy; metformin risks lactic acidosis in decompensated disease and sulfonylureas cause hypoglycaemia. Paracetamol up to 2 g a day is the safe analgesic. Fever in a cirrhotic is infection until proved otherwise: the ascites is tapped, blood and urine are cultured, and a third-generation cephalosporin is started that day, avoiding a fluoroquinolone if he is already on norfloxacin prophylaxis.",
      },
    ],
    pitfalls: [
      "Presenting the ascites without showing the technique: shifting dullness is percussed with the finger parallel to the fluid level, the finger is kept in place while the patient turns, and the examiner waits 30 seconds before re-percussing - the examiner marks the method more than the conclusion.",
      "Forgetting to grade the encephalopathy at the bedside: ask the date and the place, hold the wrists extended for 30 seconds, ask for a five-pointed star, and then state the West Haven grade in the summary; a candidate who cannot say whether the patient is encephalopathic cannot say whether the beta-blocker or the lactulose is working.",
      "Restricting protein in a wasted cirrhotic: the old advice deepens the sarcopenia that predicts death; he needs 1.2-1.5 g/kg of protein with a late-evening snack.",
      "Accepting alcohol as the whole answer: hepatitis B and C are common in India and a positive HBsAg rewrites the treatment, and every new ascites needs a diagnostic tap because tuberculosis and hepatocellular carcinoma both present this way.",
      "Ignoring the practicalities that a family physician is examined on: he drives a lorry and must not while encephalopathic, the umbilical hernia in tense ascites can rupture, and diuretics must be stopped during vomiting or diarrhoea.",
      "Quoting a Child-Pugh class without the numbers, or calling every cirrhotic 'Child C' - be ready with the five parameters, the points and the survival figures.",
    ],
    references: [
      "EASL Clinical Practice Guidelines for the management of patients with decompensated cirrhosis, Journal of Hepatology 2018",
      "Baveno VII consensus workshop: Renewing consensus in portal hypertension, Journal of Hepatology 2022",
      "AASLD Practice Guidance on risk stratification and management of portal hypertension and varices in cirrhosis, Hepatology 2024",
      "AASLD Guidance on the diagnosis, evaluation and management of ascites, spontaneous bacterial peritonitis and hepatorenal syndrome, Hepatology 2021",
      "AASLD Practice Guidance on the diagnosis and treatment of alcohol-associated liver disease, Hepatology 2020",
      "EASL Clinical Practice Guidelines: Management of alcohol-related liver disease, Journal of Hepatology 2018",
      "Harrison's Principles of Internal Medicine, 21st edition, 2022 - cirrhosis and its complications",
      "Hutchison's Clinical Methods, 24th edition, 2018 - the abdomen",
    ],
  },
