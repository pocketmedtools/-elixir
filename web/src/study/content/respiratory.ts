import type { ClinicalCase, Subject, Topic } from "../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "respiratory-asthma",
  title: "Asthma: diagnosis, control and the GINA ladder in India",
  oneLiner:
    "Asthma is a chronic inflammatory airway disease defined by a history of variable respiratory symptoms together with demonstrated variable expiratory airflow limitation, and GINA now treats every adult and adolescent with an inhaled corticosteroid-containing reliever rather than a short-acting beta-2 agonist alone.",
  frequency: "core",
  keywords: [
    "bronchial asthma",
    "GINA",
    "ICS-formoterol",
    "MART",
    "anti-inflammatory reliever",
    "budesonide",
    "salbutamol",
    "reversibility",
    "peak expiratory flow",
    "spacer",
    "acute severe asthma",
    "status asthmaticus",
    "montelukast",
    "inhaler technique",
    "occupational asthma",
    "ABPA",
  ],
  sections: [
    {
      heading: "Definition, burden and why it is under-treated in India",
      points: [
        "**Definition (GINA):** a heterogeneous disease characterised by chronic airway inflammation, defined by a history of respiratory symptoms - wheeze, breathlessness, chest tightness and cough - that vary over time and in intensity, together with **variable expiratory airflow limitation**. Both halves of that sentence are needed for the diagnosis.",
        "The four historical pointers that make asthma likely are: more than one symptom, symptoms worse at night or on waking, symptoms varying over time and in intensity, and symptoms triggered by exercise, cold air, dust, smoke, allergens, laughter or viral infection.",
        "**Burden:** the Global Burden of Disease India State-Level study found about 34 million asthmatics in India - roughly 13% of the world's asthma cases but **over 40% of the world's asthma deaths**, which is the single most quotable line in an asthma answer.",
        "The reason for that mortality gap is behavioural, not biological: inhaler avoidance because of the belief that inhalers are addictive or are a last resort, reliance on oral salbutamol and theophylline syrups, over-the-counter oral steroids and steroid-containing ayurvedic or unlabelled preparations, and reliever-only use with no controller.",
        "**Over-use of a SABA inhaler is itself a mortality marker:** dispensing three or more salbutamol canisters a year is associated with increased exacerbations, and twelve or more with increased asthma death. Under-use of ICS is the mirror image of the same problem.",
        "Asthma in India is also modified by the environment: outdoor particulate pollution, indoor biomass smoke, mosquito coils, incense, damp housing and Aspergillus sensitisation, all of which are worth naming in a management answer as things you actually address.",
      ],
    },
    {
      heading: "Confirming the diagnosis objectively",
      points: [
        "Never label asthma on symptoms alone if a spirometer or even a peak flow meter is reachable - the objective test is what separates asthma from COPD, from post-infective cough and from vocal cord dysfunction, and it is a mark in every paper.",
        "**Bronchodilator reversibility:** an increase in FEV1 of more than 12% AND more than 200 mL from baseline, 10-15 minutes after 200-400 microgram of salbutamol, in the presence of documented airflow limitation (FEV1/FVC below the lower limit of normal, roughly under 0.75-0.80 in adults).",
        "**Peak flow variability** where spirometry is unavailable: average daily diurnal PEF variability of more than 10% in adults (more than 13% in children) over two weeks, calculated as (highest minus lowest) divided by the mean of the two, or an improvement of more than 20% after 4 weeks of anti-inflammatory treatment.",
        "Other acceptable confirmations are a positive exercise challenge (fall in FEV1 of more than 10% and more than 200 mL), excessive variation between visits, or a positive bronchial provocation test in a specialist setting.",
        "**Normal spirometry does not exclude asthma** - it is common between attacks. Repeat when symptomatic, or treat and demonstrate improvement, but record what you did.",
        "Confirm the diagnosis **before** starting a controller wherever possible; once ICS is started, reversibility is often lost and the label becomes unverifiable for life. If treatment must be started first, document baseline PEF and re-test after 6-8 weeks or during a step-down.",
        "Differentials worth excluding by history and examination: COPD in a smoker over 40 with fixed obstruction, upper airway cough syndrome and rhinitis, gastro-oesophageal reflux, cardiac failure with orthopnoea, endobronchial tuberculosis or a foreign body causing unilateral wheeze, and inducible laryngeal obstruction with inspiratory stridor and a normal flow-volume loop expiratory limb.",
      ],
    },
    {
      heading: "Assessing control and future risk at every visit",
      points: [
        "**GINA symptom control over the last 4 weeks - the four questions:** daytime symptoms more than twice a week, any night waking due to asthma, reliever needed more than twice a week (excluding pre-exercise use), and any activity limitation due to asthma.",
        "None of the four is well controlled, one or two is partly controlled, three or four is uncontrolled. Say these numbers in a viva rather than saying that the patient is 'doing all right'.",
        "**Independent risk factors for exacerbation** even when symptoms look controlled: any exacerbation in the past 12 months, over-use of SABA, poor adherence, incorrect inhaler technique, low FEV1 (especially under 60% predicted), smoking, obesity, chronic rhinosinusitis, pregnancy and blood eosinophilia.",
        "Risk factors for **fixed airflow limitation**: absence of ICS treatment, tobacco and biomass exposure, occupational exposure, chronic mucus hypersecretion and severe exacerbations.",
        "At every visit, in this order: check adherence (open the box, count the doses), watch the patient use the inhaler, review comorbidities (rhinitis, reflux, obesity, obstructive sleep apnoea, anxiety), and only then consider stepping up the drug.",
        "**Incorrect inhaler technique is present in up to 70-80% of users**; correcting it produces a bigger gain than any step-up, and it is the manoeuvre an examiner will ask you to demonstrate.",
      ],
    },
    {
      heading: "The GINA treatment tracks, translated into Indian prescriptions",
      points: [
        "GINA's central rule since 2019: **no adult or adolescent should receive short-acting beta-2 agonist alone**. Every patient needs ICS-containing treatment, either as a combined reliever or as a daily controller with the SABA.",
        "**Track 1 (preferred): low-dose ICS-formoterol as the reliever throughout.** Steps 1-2 as-needed only; Steps 3-5 as maintenance and reliever therapy (MART). The advantage is that the anti-inflammatory dose rises automatically exactly when the airway is inflamed, and it halves severe exacerbations compared with SABA reliever.",
        "**Track 2 (alternative): ICS whenever SABA is taken, or daily ICS plus SABA reliever.** Use it if ICS-formoterol is unaffordable or unavailable, if the patient will not accept a reliever that is also a controller, or if the patient is already well controlled on daily ICS-LABA with a SABA reliever.",
        "Formulations actually available in India: budesonide-formoterol 100/6, 200/6 and 400/6 as DPI capsules or rotacaps and as pMDI; beclometasone-formoterol 100/6 pMDI; fluticasone-salmeterol 125/25 and 250/25 pMDI and DPI (salmeterol is **not** suitable as a reliever - only formoterol has a rapid onset).",
        "**MART prescription, written out:** budesonide-formoterol 200/6 one inhalation twice daily as maintenance, plus one inhalation as needed for symptoms, to a maximum of 12 total inhalations in a day; the patient must be told that the same device treats both the symptom and the inflammation and that no separate salbutamol is needed.",
        "Step 5 is severe asthma: add a LAMA (tiotropium 5 microgram once daily via soft mist inhaler), check the phenotype, and refer for assessment for biologics (omalizumab for allergic, mepolizumab or dupilumab for eosinophilic) before ever settling for maintenance oral steroids.",
        "**Montelukast** is a weak controller with a place in allergic rhinitis with asthma and exercise-induced symptoms; it is never a substitute for ICS, and the patient must be warned about the neuropsychiatric adverse effects (nightmares, agitation, depression) that carry a regulatory boxed warning.",
        "Oral bronchodilators, oral theophylline syrups and long-term oral steroids are the three prescriptions that mark out untreated asthma in India; replacing them with a correctly used ICS inhaler is the answer the examiner wants.",
      ],
    },
    {
      heading: "Acute exacerbation: assessment and treatment",
      points: [
        "**Assess severity in one look:** able to speak in sentences, sitting up, pulse under 100, PEF over 50% predicted or personal best and SpO2 over 95% is mild-moderate; unable to complete sentences, sitting forward, accessory muscle use, pulse over 120, respiratory rate over 30, PEF 50% or less, SpO2 under 90% is severe.",
        "**Life-threatening features:** drowsiness, confusion, exhaustion, a silent chest, cyanosis, feeble respiratory effort, bradycardia or hypotension, and a normal or rising PaCO2 in an asthmatic who is tiring. A 'normal' PaCO2 in acute severe asthma is a pre-terminal sign, not reassurance.",
        "**First hour:** oxygen titrated to SpO2 93-95% (94-98% in children), salbutamol 4-10 puffs by pMDI with a spacer every 20 minutes for one hour (equivalent to a nebulisation and preferred outside critical care), and **prednisolone 40-50 mg orally within one hour** - oral is as effective as intravenous if the patient can swallow.",
        "Add ipratropium bromide 4-8 puffs or 500 microgram nebulised every 20 minutes for the first hour in severe exacerbations; it reduces admissions when combined with salbutamol.",
        "**Magnesium sulphate 2 g intravenously over 20 minutes** as a single dose for severe exacerbations not responding to the first hour of treatment or with FEV1 under 25-30% predicted.",
        "Antibiotics are **not** given routinely - most exacerbations are viral or allergen-driven; give them only for a documented pneumonia or purulent sinusitis. Sedatives are absolutely contraindicated.",
        "**Before discharge:** continue prednisolone 40-50 mg daily for 5-7 days (no taper needed for a course under 2 weeks), start or step up the ICS-containing controller, correct inhaler technique, provide a written action plan, and arrange review within 2-7 days. An exacerbation is a failure of control, so never send a patient home on the same regimen that failed.",
      ],
    },
    {
      heading: "Special situations and the questions that follow them",
      points: [
        "**Pregnancy:** control matters more than any theoretical drug risk; uncontrolled asthma causes low birth weight, prematurity and pre-eclampsia. Continue ICS, LABA and oral steroids when indicated, and treat exacerbations aggressively. Budesonide has the largest safety database.",
        "**Aspirin-exacerbated respiratory disease:** asthma, nasal polyps and NSAID sensitivity; avoid all COX-1 inhibitors, use paracetamol at doses under 1 g cautiously or a selective COX-2 inhibitor, and treat the polyps.",
        "**Allergic bronchopulmonary aspergillosis** should be suspected in poorly controlled asthma with fleeting infiltrates, thick mucus plugs, proximal bronchiectasis or eosinophilia; screen with Aspergillus-specific IgE and total IgE (over 1000 IU/mL is supportive), and treat with oral prednisolone plus itraconazole.",
        "**Occupational asthma** (flour, isocyanates, latex, wood dust, chemicals): symptoms improve on holidays and worsen back at work; document with serial peak flow at and away from work, and remove the exposure early because delay causes permanent impairment.",
        "**Exercise-induced bronchoconstriction** is treated by improving underlying control with regular ICS, warming up, and using a reliever (low-dose ICS-formoterol on Track 1) before exertion.",
        "**Step-down** only after 3 months of good control, by about 25-50% of the ICS dose, never stopping ICS altogether in an adult, and always with a follow-up date and an action plan in hand.",
      ],
    },
  ],
  tables: [
    {
      heading: "GINA 2024-25 stepwise treatment for adults and adolescents",
      columns: ["Step", "Track 1 (preferred, ICS-formoterol reliever)", "Track 2 (alternative, SABA reliever)"],
      rows: [
        ["1", "As-needed low-dose ICS-formoterol only", "ICS taken whenever SABA is taken"],
        ["2", "As-needed low-dose ICS-formoterol only", "Daily low-dose ICS plus as-needed SABA"],
        ["3", "Low-dose maintenance ICS-formoterol (MART)", "Daily low-dose ICS-LABA plus as-needed SABA"],
        ["4", "Medium-dose maintenance ICS-formoterol (MART)", "Daily medium or high-dose ICS-LABA plus as-needed SABA"],
        ["5", "Add LAMA, assess phenotype, consider biologic; refer", "Add LAMA, assess phenotype, consider biologic; refer"],
      ],
    },
    {
      heading: "Daily inhaled corticosteroid dose bands in adults (metered dose)",
      columns: ["Drug", "Low daily dose", "Medium daily dose", "High daily dose"],
      rows: [
        ["Budesonide (DPI or pMDI)", "200-400 microgram", "over 400 to 800 microgram", "over 800 microgram"],
        ["Beclometasone dipropionate (standard particle)", "200-500 microgram", "over 500 to 1000 microgram", "over 1000 microgram"],
        ["Fluticasone propionate", "100-250 microgram", "over 250 to 500 microgram", "over 500 microgram"],
        ["Ciclesonide", "80-160 microgram", "over 160 to 320 microgram", "over 320 microgram"],
      ],
    },
    {
      heading: "Grading an acute asthma attack at the front desk",
      columns: ["Feature", "Mild-moderate", "Severe", "Life-threatening"],
      rows: [
        ["Speech", "Sentences", "Words or phrases", "Unable to speak"],
        ["Posture and effort", "Can lie down", "Sits forward, accessory muscles", "Exhausted, feeble effort"],
        ["Pulse", "Under 100/min", "Over 120/min", "Bradycardia or hypotension"],
        ["PEF (% best or predicted)", "Over 50%", "33-50%", "Under 33%"],
        ["SpO2 on air", "Over 95%", "90-95%", "Under 90% or cyanosis"],
        ["Chest", "Wheeze", "Loud wheeze", "Silent chest"],
      ],
    },
  ],
  redFlags: [
    "Silent chest, cyanosis, drowsiness, confusion or feeble respiratory effort in an acute attack - impending respiratory arrest, call for help and prepare for ventilation.",
    "A normal or rising PaCO2 with a normalising pH in an asthmatic who is tiring - the patient is failing, not improving; do not be reassured by the number.",
    "SpO2 below 92% on room air after the first hour of bronchodilator and systemic steroid - admit.",
    "PEF below 33% of predicted or personal best, or failure of PEF to reach 60% one hour after treatment - admit.",
    "Any patient using three or more salbutamol canisters a year, or with an intensive care admission or intubation for asthma in the past - high-risk asthma, needs controller escalation and close follow-up.",
    "New unilateral wheeze that does not move with coughing, especially in a child or in a smoker - foreign body, endobronchial tuberculosis or tumour, not asthma.",
    "Poorly controlled asthma with fleeting radiographic shadows, mucus plugs and eosinophilia - allergic bronchopulmonary aspergillosis; measure total and Aspergillus-specific IgE.",
    "Cough with wheeze plus weight loss, fever or haemoptysis lasting over two weeks in India - evaluate for tuberculosis before intensifying asthma treatment.",
  ],
  pearls: [
    "Say the GINA sentence in full: variable respiratory symptoms PLUS variable expiratory airflow limitation - the two halves earn the definition mark.",
    "Reversibility means a rise in FEV1 of more than 12% and more than 200 mL; both criteria must be satisfied, and the numbers must be quoted.",
    "SABA-only treatment is no longer acceptable at any step for anyone aged 12 or over; the modern answer is an ICS-containing reliever.",
    "Only formoterol can be used as a reliever among the long-acting beta agonists - it is a rapid-onset LABA; salmeterol never can.",
    "The maximum daily total in a MART regimen with budesonide-formoterol 200/6 is 12 inhalations in adults; write the limit on the action plan.",
    "In an acute attack, a pMDI with a spacer works as well as a nebuliser, costs less, needs no electricity and generates no aerosol - use it in the clinic.",
    "A five-day course of oral prednisolone at 40-50 mg needs no taper; tapering is only for courses longer than about two weeks or repeated courses.",
    "Every exacerbation must lead to a change in the controller before the patient leaves - otherwise you have treated the attack and not the asthma.",
    "Rinse the mouth and spit after every ICS dose to prevent candidiasis and dysphonia, and use a spacer with pMDI which halves oropharyngeal deposition.",
  ],
  theory: [
    {
      id: "respiratory-asthma-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 28-year-old woman presents with recurrent episodes of wheeze and nocturnal cough for two years, using a salbutamol inhaler about five times a week. Discuss your approach to establishing the diagnosis, assessing control, and instituting long-term management.",
      openingLines: [
        "Asthma is a chronic inflammatory airway disease defined by a history of variable respiratory symptoms - wheeze, breathlessness, chest tightness and cough - together with documented variable expiratory airflow limitation.",
        "This patient's pattern of nocturnal cough with wheeze and reliever use five times a week already indicates uncontrolled asthma on the GINA assessment, so my objectives are to confirm the diagnosis objectively, exclude alternative and aggravating conditions, and start inhaled corticosteroid-containing therapy with a written action plan.",
      ],
      answer: [
        {
          heading: "1. History that supports the diagnosis",
          points: [
            "More than one respiratory symptom, worse at night and on waking, varying in intensity over time, and provoked by dust, smoke, cold air, exercise, viral infection or laughter.",
            "Ask specifically for a personal or family history of atopy, allergic rhinitis, eczema, seasonal variation, and exposure at work or at home to flour, chemicals, biomass smoke, mosquito coils, incense or damp.",
            "Quantify reliever use in canisters per year, previous courses of oral steroids, emergency visits, hospital admissions and any intensive care admission or intubation, which define high-risk asthma.",
            "Document the drugs already taken, including oral salbutamol, theophylline syrups and over-the-counter steroid preparations, and elicit the beliefs behind inhaler avoidance.",
          ],
        },
        {
          heading: "2. Examination and objective confirmation",
          points: [
            "Examination is often normal between attacks; look for polyphonic expiratory wheeze, hyperinflation, nasal polyps, allergic rhinitis and eczema, and record height, weight and BMI.",
            "**Spirometry with post-bronchodilator reversibility** is the confirmatory test: obstruction on the baseline curve with a rise in FEV1 of more than 12% and more than 200 mL fifteen minutes after 200-400 microgram salbutamol.",
            "If spirometry is unavailable, use a peak flow meter: twice-daily readings for two weeks showing average diurnal variability of more than 10%, or an improvement of more than 20% after four weeks of inhaled corticosteroid.",
            "A normal test between episodes does not exclude asthma; repeat when symptomatic or document the response to treatment.",
            "Chest radiograph only if there are atypical features - fever, weight loss, haemoptysis, focal signs, clubbing - mainly to exclude tuberculosis, which is the practical Indian differential for a chronic cough.",
          ],
        },
        {
          heading: "3. Assessing control and future risk",
          points: [
            "**GINA symptom control** over four weeks: daytime symptoms more than twice a week, night waking, reliever use more than twice a week, activity limitation. Three or four positives is uncontrolled asthma, which is this patient.",
            "Risk factors for exacerbation to record: previous exacerbation in the last year, SABA over-use, poor adherence, wrong technique, low FEV1, smoking, obesity, rhinosinusitis and pregnancy.",
            "Assess comorbidities that keep asthma uncontrolled: allergic rhinitis, gastro-oesophageal reflux, obesity, obstructive sleep apnoea, anxiety, and in resistant cases allergic bronchopulmonary aspergillosis.",
          ],
        },
        {
          heading: "4. Pharmacological management",
          points: [
            "Track 1 of GINA is preferred: **low-dose ICS-formoterol** used as the reliever, and from Step 3 as maintenance and reliever therapy.",
            "For this uncontrolled patient, start budesonide-formoterol 200/6 one inhalation twice daily plus one as needed, maximum 12 inhalations a day, and stop the salbutamol-only inhaler.",
            "If ICS-formoterol is unaffordable, Track 2 is acceptable: daily low-dose ICS (budesonide 200-400 microgram) with a salbutamol reliever, with the instruction that the ICS is taken every day whether or not she has symptoms.",
            "Add-on options in order: increase to medium dose, add a LAMA, treat the rhinitis, and only at Step 5 refer for phenotyping and biologics. Montelukast is an adjunct for coexisting allergic rhinitis, never a replacement for ICS.",
            "Review at 4-8 weeks; step down after 3 months of control by 25-50% of the ICS dose without ever stopping ICS.",
          ],
        },
        {
          heading: "5. Non-drug management and self-management education",
          points: [
            "Demonstrate inhaler technique, then have her demonstrate it back; supply a spacer for a pMDI and teach mouth rinsing after ICS.",
            "A **written action plan**: her usual doses, how to recognise worsening (falling PEF, rising reliever use, night waking), when to quadruple or increase the ICS-containing treatment, when to start prednisolone 40-50 mg, and when to come to hospital.",
            "Trigger control: tobacco smoke including second-hand and biomass exposure, indoor damp and mould, pets, dust exposure, and NSAIDs if there is any suggestion of aspirin sensitivity.",
            "Influenza vaccination annually, treat rhinitis with intranasal steroid, weight reduction if obese, and breathing exercises as an adjunct.",
            "Counsel on pregnancy: asthma drugs are continued in pregnancy because uncontrolled asthma is more dangerous to the fetus than the medication.",
          ],
        },
      ],
      mustDraw: [
        "The GINA Track 1 and Track 2 five-step ladder as a two-column table.",
        "A written asthma action plan in three zones - green, yellow and red - with PEF thresholds and actions.",
      ],
      markSplit: [
        { part: "Definition and history features", marks: 2 },
        { part: "Objective confirmation with numbers", marks: 2 },
        { part: "Assessment of control and risk", marks: 2 },
        { part: "Drug plan with doses and step-up", marks: 2 },
        { part: "Education, action plan and follow-up", marks: 2 },
      ],
      keywords: ["GINA", "reversibility", "MART", "ICS-formoterol", "asthma action plan"],
    },
    {
      id: "respiratory-asthma-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "core",
      question: "Write short notes on the emergency management of acute severe asthma in an adult.",
      openingLines: [
        "Acute severe asthma is an exacerbation with inability to complete sentences, respiratory rate over 30 per minute, pulse over 120 per minute, or peak expiratory flow 50% or less of predicted or personal best.",
        "It is a medical emergency in which assessment and treatment proceed simultaneously, and in which the presence of any life-threatening feature - silent chest, cyanosis, exhaustion, bradycardia, hypotension, confusion or a normal to raised PaCO2 - mandates immediate critical care involvement.",
      ],
      answer: [
        {
          heading: "Rapid assessment",
          points: [
            "Speech, posture, accessory muscle use, respiratory rate, pulse, blood pressure, SpO2 and PEF where the patient can perform it.",
            "Life-threatening features: silent chest, cyanosis, feeble respiratory effort, bradycardia, arrhythmia, hypotension, exhaustion, confusion, PEF under 33%.",
            "Arterial blood gas if SpO2 remains under 92% or there are life-threatening features; a normal or rising PaCO2 indicates a tiring patient and is near-fatal asthma.",
            "Look for a precipitant and for the mimics: pneumothorax, pneumonia, anaphylaxis, pulmonary embolism, inhaled foreign body and cardiac failure.",
          ],
        },
        {
          heading: "Immediate treatment in the first hour",
          points: [
            "Oxygen titrated to **SpO2 93-95%** by face mask or nasal prongs; do not withhold oxygen while awaiting a gas.",
            "**Salbutamol 4-10 puffs by pMDI with spacer, or 2.5-5 mg nebulised, every 20 minutes for one hour**, then hourly as needed; continuous nebulisation in the severest cases.",
            "**Ipratropium bromide 500 microgram nebulised (or 4-8 puffs) every 20 minutes for the first hour** in severe attacks - it reduces admissions.",
            "**Prednisolone 40-50 mg orally, or hydrocortisone 100 mg intravenously** if unable to swallow, given within the first hour; the benefit begins at about 4 hours, so it must not be delayed.",
            "**Magnesium sulphate 2 g intravenously over 20 minutes** as a single dose if there is no response after the first hour or FEV1 is under 25-30% predicted.",
            "No sedatives, no routine antibiotics, no chest physiotherapy, and no mucolytics.",
          ],
        },
        {
          heading: "Monitoring, escalation and discharge",
          points: [
            "Reassess clinically and with PEF after each treatment cycle and one hour after starting treatment; a PEF above 60-80% of best with settled symptoms allows discharge planning.",
            "Escalate to intensive care for exhaustion, deteriorating gases, drowsiness, refractory hypoxaemia or need for intubation; ventilation uses low tidal volumes, low rates, long expiratory times and permissive hypercapnia to avoid dynamic hyperinflation.",
            "Discharge on **prednisolone 40-50 mg daily for 5-7 days** with no taper, an ICS-containing controller started or stepped up, corrected inhaler technique, a written action plan, and review within 2-7 days.",
          ],
        },
      ],
      mustDraw: [
        "A table grading mild-moderate, severe and life-threatening asthma by speech, pulse, PEF, SpO2 and chest findings.",
      ],
      markSplit: [
        { part: "Definition and severity assessment", marks: 1.5 },
        { part: "Oxygen, bronchodilators and steroid with doses", marks: 2 },
        { part: "Magnesium, escalation and what not to give", marks: 1 },
        { part: "Discharge plan", marks: 0.5 },
      ],
      keywords: ["acute severe asthma", "silent chest", "magnesium sulphate", "spacer", "prednisolone"],
    },
    {
      id: "respiratory-asthma-t3",
      paper: "II",
      kind: "differentiate",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Differentiate between asthma and chronic obstructive pulmonary disease on clinical and laboratory grounds.",
      openingLines: [
        "Both asthma and COPD cause chronic airflow obstruction, but asthma is characterised by variable, largely reversible obstruction with eosinophilic airway inflammation, while COPD is characterised by persistent, incompletely reversible obstruction caused by noxious particle exposure.",
        "The distinction matters because inhaled corticosteroid is the foundation of asthma treatment and is used selectively in COPD, and because a wrong label commits the patient to the wrong drug for decades.",
      ],
      answer: [
        {
          heading: "Clinical differences",
          points: [
            "Age at onset: asthma usually begins in childhood or early adult life, COPD after 40 years with a cumulative exposure of tobacco or biomass smoke.",
            "Symptom pattern: asthma varies from day to day and is worse at night or on waking with symptom-free intervals; COPD is a slowly progressive daily breathlessness with chronic productive cough and little day-to-day variation.",
            "Associated features: atopy, allergic rhinitis, eczema and a family history in asthma; twenty or more pack-years of smoking or decades of chulha exposure in COPD.",
            "Weight and course: asthma is typically stable between attacks; COPD progresses with declining exercise tolerance, weight loss in emphysema, and features of cor pulmonale in advanced disease.",
          ],
        },
        {
          heading: "Investigational differences",
          points: [
            "Spirometry is the discriminator: asthma shows obstruction with **significant reversibility (FEV1 rise over 12% and over 200 mL)** and may normalise completely; COPD shows a **post-bronchodilator FEV1/FVC under 0.70 that persists**.",
            "Peak flow variability over 10% a day favours asthma; a fixed low PEF favours COPD.",
            "Blood and sputum eosinophilia and a raised total IgE favour asthma; neutrophilic sputum favours COPD.",
            "Diffusing capacity is normal in asthma and reduced in emphysema; chest radiograph and HRCT are normal in asthma and show hyperinflation or emphysema in COPD.",
          ],
        },
        {
          heading: "Overlap and practical rule",
          points: [
            "Asthma-COPD overlap is recognised where a smoker with long-standing asthma has persistent airflow limitation with significant reversibility and eosinophilia; such patients must **never be treated with a LABA or LAMA without an inhaled corticosteroid**.",
            "Where the diagnosis is uncertain, treat as asthma (that is, always include an ICS), because untreated asthmatic inflammation is the more dangerous error.",
            "In India, exclude tuberculosis and post-tuberculous obstructive airway disease before settling on either label in a patient with a productive cough.",
          ],
        },
      ],
      mustDraw: [
        "A three-column table (Feature / Asthma / COPD) covering age of onset, exposure, variability, atopy, reversibility, DLCO and radiology.",
      ],
      markSplit: [
        { part: "Clinical differentiation", marks: 2 },
        { part: "Investigations with numbers", marks: 2 },
        { part: "Overlap and practical rule", marks: 1 },
      ],
      keywords: ["asthma-COPD overlap", "reversibility", "FEV1/FVC 0.70", "DLCO", "atopy"],
    },
  ],
  mcqs: [
    {
      id: "respiratory-asthma-q1",
      stem: "A 24-year-old man has episodic wheeze and nocturnal cough for a year. Spirometry shows FEV1 2.10 L (66% predicted) and FEV1/FVC 0.64. Fifteen minutes after 400 microgram of salbutamol, FEV1 is 2.42 L. Which statement about his test is correct?",
      options: [
        "Reversibility is significant because FEV1 rose by more than 12%",
        "Reversibility is not significant because the rise is 320 mL but only 15%, and both criteria are needed",
        "Reversibility is significant because both a rise over 12% and over 200 mL are present",
        "The test is uninterpretable without a diffusing capacity",
        "The result excludes asthma and confirms COPD",
      ],
      answer: 2,
      explanation:
        "The rise is 320 mL, which is 15.2% of the baseline FEV1, so both the 12% and the 200 mL thresholds are met and reversibility is significant in the presence of a reduced FEV1/FVC - this confirms variable expiratory airflow limitation. The first option states the right conclusion for the wrong reason by ignoring the volume criterion, and the second miscalculates by treating the change as insufficient. DLCO is used to detect emphysema and is not needed to diagnose asthma, and COPD is not diagnosed in a 24-year-old with fully reversible obstruction and no exposure history.",
      difficulty: "easy",
    },
    {
      id: "respiratory-asthma-q2",
      stem: "A 31-year-old woman with asthma uses salbutamol on most days, wakes twice a week with cough, and takes no controller. She can afford a budesonide-formoterol inhaler. Following GINA, what should be prescribed?",
      options: [
        "Salbutamol as needed plus oral montelukast 10 mg at night",
        "Budesonide-formoterol 200/6 one inhalation twice daily plus one as needed, stopping the salbutamol inhaler",
        "Salmeterol-fluticasone 25/125 two puffs twice daily as reliever and controller",
        "Oral prednisolone 10 mg daily for a month, then review",
        "Salbutamol as needed with advice to return if it worsens",
      ],
      answer: 1,
      explanation:
        "She has uncontrolled asthma on three of the four GINA control questions and needs Step 3 treatment, which on the preferred Track 1 is maintenance and reliever therapy with low-dose ICS-formoterol; this removes SABA-only use, which is the practice most strongly associated with asthma death. Montelukast is a weak controller and is not a substitute for an inhaled corticosteroid. Salmeterol has too slow an onset to be used as a reliever, so a salmeterol-fluticasone inhaler can never be a MART device. Maintenance oral steroid is a Step 5 last resort with severe toxicity, and continued reliever-only treatment is exactly what GINA abandoned in 2019.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-asthma-q3",
      stem: "A 40-year-old asthmatic arrives breathless and unable to complete sentences. Pulse 128/min, respiratory rate 32/min, SpO2 89% on air. After 45 minutes of nebulised salbutamol and ipratropium plus oral prednisolone, he is drowsy with a quiet chest, and arterial blood gas shows pH 7.34, PaCO2 44 mmHg, PaO2 58 mmHg on oxygen. What does the gas indicate?",
      options: [
        "He is improving, since the PaCO2 is within the normal range",
        "He has metabolic acidosis from salbutamol and needs bicarbonate",
        "He has near-fatal asthma with a tiring respiratory pump and needs urgent critical care",
        "He has a chronic carbon dioxide retainer pattern and oxygen should be reduced",
        "The gas is a technical artefact and should be repeated before acting",
      ],
      answer: 2,
      explanation:
        "An acute asthmatic should be hyperventilating with a low PaCO2; a normal or rising PaCO2 with drowsiness and a quiet chest signals exhaustion of the respiratory pump and impending arrest, so this is near-fatal asthma requiring immediate senior and critical care input, intravenous magnesium and preparation for ventilation. Reading a 'normal' PaCO2 as improvement is the classic fatal error. Salbutamol does cause a lactic acidosis but that would not explain the drowsiness and silent chest and is never treated with bicarbonate. Chronic retention does not develop over an hour in an asthmatic, and reducing oxygen in a patient with a PaO2 of 58 mmHg would be dangerous.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-asthma-q4",
      stem: "A 9-year-old girl with asthma has repeated oral thrush and a hoarse voice since starting a beclometasone pMDI. Her technique is otherwise correct. What is the best action?",
      options: [
        "Stop the inhaled corticosteroid and start oral montelukast alone",
        "Add a large-volume spacer and teach mouth rinsing and spitting after each dose",
        "Switch to oral prednisolone on alternate days",
        "Halve the inhaled corticosteroid dose and accept poorer control",
        "Add oral fluconazole prophylaxis for six weeks",
      ],
      answer: 1,
      explanation:
        "Oropharyngeal candidiasis and dysphonia are local deposition effects of inhaled corticosteroid, and a spacer plus rinsing and spitting after each dose reduces oropharyngeal deposition substantially while preserving the lung dose, so control is not sacrificed. Stopping the ICS for montelukast alone leaves the airway inflammation untreated and increases exacerbations. Alternate-day oral steroid delivers far greater systemic toxicity for a trivial local problem. Halving the dose treats the side effect at the cost of control when a mechanical solution exists, and antifungal prophylaxis does not address the cause.",
      difficulty: "easy",
    },
    {
      id: "respiratory-asthma-q5",
      stem: "A 35-year-old man with asthma on medium-dose ICS-LABA remains symptomatic with recurrent brownish sputum plugs, fleeting shadows on chest radiographs and a blood eosinophil count of 1,400/microlitre. Which investigation is most likely to explain his poor control?",
      options: [
        "Serum total IgE and Aspergillus fumigatus-specific IgE",
        "Sweat chloride estimation",
        "Serum alpha-1 antitrypsin level",
        "Methacholine challenge test",
        "Serum precipitins for Micropolyspora faeni",
      ],
      answer: 0,
      explanation:
        "Difficult asthma with mucus plugs, fleeting infiltrates and marked eosinophilia is the classical presentation of allergic bronchopulmonary aspergillosis, which is diagnosed by Aspergillus-specific IgE positivity with a raised total IgE (usually over 1000 IU/mL), supported by central bronchiectasis on HRCT; treatment is oral prednisolone with itraconazole. Sweat chloride tests for cystic fibrosis, which presents in childhood with failure to thrive and steatorrhoea. Alpha-1 antitrypsin deficiency causes basal emphysema, not eosinophilic plugging. A methacholine challenge only confirms hyper-responsiveness that is already established, and precipitins for Micropolyspora relate to farmer's lung, a hypersensitivity pneumonitis with restriction rather than eosinophilic asthma.",
      difficulty: "hard",
    },
    {
      id: "respiratory-asthma-q6",
      stem: "A 26-year-old woman with moderate persistent asthma on budesonide-formoterol becomes pregnant and asks whether she should stop her inhalers. What is the correct advice?",
      options: [
        "Stop all inhalers in the first trimester and restart after organogenesis",
        "Continue the same inhaled treatment, because uncontrolled asthma harms the fetus more than the drugs do",
        "Replace inhalers with oral theophylline, which is safer in pregnancy",
        "Switch to as-needed salbutamol alone for the whole pregnancy",
        "Continue inhalers but avoid oral steroids even in a severe exacerbation",
      ],
      answer: 1,
      explanation:
        "Inhaled corticosteroids, formoterol and short-acting beta agonists are all continued in pregnancy because poorly controlled asthma causes prematurity, low birth weight, pre-eclampsia and perinatal mortality, whereas the inhaled drugs have an extensive safety record - budesonide in particular. Stopping treatment for the first trimester is the commonest cause of a pregnancy exacerbation. Theophylline has a narrow therapeutic index with altered clearance in pregnancy and is not safer. Reverting to reliever-only treatment abandons the anti-inflammatory therapy she needs, and systemic steroids must still be given for a severe exacerbation, where the risk of maternal hypoxaemia is far greater than the drug risk.",
      difficulty: "easy",
    },
    {
      id: "respiratory-asthma-q7",
      stem: "During a follow-up visit, a 45-year-old asthmatic on low-dose ICS-formoterol MART reports needing extra as-needed doses on most days for the last month, with two night wakings a week. Inhaler technique is checked and is correct, and adherence is good. What is the appropriate next step?",
      options: [
        "Add a short course of oral prednisolone and continue the same regimen",
        "Step up to medium-dose maintenance ICS-formoterol and review in 4-8 weeks",
        "Add regular salbutamol four times a day",
        "Add oral theophylline 400 mg at night",
        "Refer immediately for a biologic agent",
      ],
      answer: 1,
      explanation:
        "With technique and adherence verified, persistent symptoms on Step 3 MART require a step up to Step 4, which is medium-dose maintenance ICS-formoterol with the same reliever, reassessed after 4-8 weeks. A steroid burst treats a flare but does nothing to change the maintenance inflammation that is driving daily symptoms. Regular scheduled SABA is obsolete and increases exacerbation risk. Theophylline is a weak bronchodilator with a narrow therapeutic index and no place at this step. Biologics are considered only at Step 5 after high-dose ICS-LABA plus LAMA has failed and a phenotype has been established.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "respiratory-asthma-c1",
      front: "GINA definition of asthma in one sentence.",
      back: "A history of variable respiratory symptoms (wheeze, breathlessness, chest tightness, cough) together with variable expiratory airflow limitation, on a background of chronic airway inflammation.",
    },
    {
      id: "respiratory-asthma-c2",
      front: "Criteria for significant bronchodilator reversibility.",
      back: "FEV1 increase of more than 12% AND more than 200 mL, 10-15 minutes after 200-400 microgram of salbutamol.",
    },
    {
      id: "respiratory-asthma-c3",
      front: "PEF variability that supports a diagnosis of asthma.",
      back: "Average daily diurnal variability of more than 10% in adults (over 13% in children) across two weeks of twice-daily readings.",
    },
    {
      id: "respiratory-asthma-c4",
      front: "The four GINA symptom control questions (last 4 weeks).",
      back: "Daytime symptoms more than twice a week; any night waking; reliever needed more than twice a week; any activity limitation. 0 = controlled, 1-2 = partly, 3-4 = uncontrolled.",
    },
    {
      id: "respiratory-asthma-c5",
      front: "Why is salmeterol never used as a reliever?",
      back: "It has a slow onset of action; only formoterol among the LABAs has a rapid onset, which is why ICS-formoterol is the anti-inflammatory reliever in GINA Track 1.",
    },
    {
      id: "respiratory-asthma-c6",
      front: "Maximum inhalations per day in adult MART with budesonide-formoterol 200/6.",
      back: "12 inhalations in total in any one day; exceeding this or needing that many repeatedly means the patient must be reassessed the same day.",
    },
    {
      id: "respiratory-asthma-c7",
      front: "Life-threatening features in acute asthma.",
      back: "Silent chest, cyanosis, feeble respiratory effort, exhaustion, confusion or drowsiness, bradycardia or hypotension, PEF under 33%, and a normal or rising PaCO2.",
    },
    {
      id: "respiratory-asthma-c8",
      front: "Steroid dose and duration after an acute asthma exacerbation.",
      back: "Prednisolone 40-50 mg orally daily for 5-7 days in adults (1-2 mg/kg, maximum 40 mg, for 3-5 days in children); no taper needed for courses under two weeks.",
    },
    {
      id: "respiratory-asthma-c9",
      front: "Dose and role of magnesium sulphate in acute asthma.",
      back: "2 g intravenously over 20 minutes as a single dose, for severe exacerbations not responding to the first hour of bronchodilator and steroid, or FEV1 under 25-30% predicted.",
    },
    {
      id: "respiratory-asthma-c10",
      front: "Number of salbutamol canisters per year that marks high-risk asthma.",
      back: "Three or more a year is associated with increased exacerbations; twelve or more is associated with increased asthma death.",
    },
    {
      id: "respiratory-asthma-c11",
      front: "India's share of global asthma cases versus asthma deaths.",
      back: "About 13% of the world's asthma cases but over 40% of the world's asthma deaths (GBD India State-Level Disease Burden Initiative).",
    },
    {
      id: "respiratory-asthma-c12",
      front: "When and how do you step down asthma treatment?",
      back: "After 3 months of good control, reduce the ICS dose by 25-50% with a follow-up date and an action plan; never stop inhaled corticosteroid completely in an adult.",
    },
  ],
  references: [
    "Global Initiative for Asthma (GINA), Global Strategy for Asthma Management and Prevention, 2024-2025 update",
    "India Guidelines for Diagnosis and Management of Bronchial Asthma - Joint ICS/NCCP recommendations, 2023",
    "GBD India State-Level Disease Burden Initiative, chronic respiratory diseases, Lancet Global Health 2018",
    "National Programme for Prevention and Control of Non-Communicable Diseases (NP-NCD) operational guidelines, MoHFW",
    "API Textbook of Medicine, 11th edition, 2019 - bronchial asthma",
  ],
});

topics.push({
  id: "respiratory-copd",
  title: "COPD: GOLD assessment, inhalers and exacerbations",
  oneLiner:
    "COPD is a heterogeneous lung condition causing persistent, often progressive airflow obstruction, confirmed by a post-bronchodilator FEV1/FVC below 0.70 in a patient with chronic respiratory symptoms and a history of exposure to tobacco smoke, biomass fuel or occupational dust.",
  frequency: "core",
  keywords: [
    "chronic obstructive pulmonary disease",
    "GOLD",
    "emphysema",
    "chronic bronchitis",
    "mMRC",
    "CAT score",
    "tiotropium",
    "formoterol",
    "LAMA",
    "LABA",
    "biomass",
    "chulha",
    "cor pulmonale",
    "long-term oxygen therapy",
    "pulmonary rehabilitation",
    "non-invasive ventilation",
  ],
  sections: [
    {
      heading: "Definition, causes and the Indian pattern",
      points: [
        "**Definition (GOLD 2024-25):** a heterogeneous lung condition characterised by chronic respiratory symptoms (breathlessness, cough, sputum production, exacerbations) due to abnormalities of the airways or alveoli that cause persistent, often progressive airflow obstruction.",
        "**The diagnosis is spirometric:** a **post-bronchodilator FEV1/FVC below 0.70** is mandatory. Symptoms and a chest radiograph alone are not enough, and a substantial proportion of patients labelled COPD in Indian practice have never had spirometry.",
        "COPD is the **second leading cause of death and of DALYs in India** after ischaemic heart disease, with an estimated 55 million cases; India carries roughly a third of the global COPD mortality burden.",
        "Tobacco - cigarettes, bidis and hookah - remains the dominant cause, but **biomass smoke from chulha cooking is responsible for a large share of Indian COPD, particularly in non-smoking rural women**; the NFHS-5 finding that a large minority of households still cook on solid fuel is the number to quote.",
        "Other causes to name: occupational dust and fumes (stone crushing, construction, textile), untreated childhood respiratory infection, **post-tuberculous obstructive airway disease** (a distinctly Indian entity), poorly controlled chronic asthma, and alpha-1 antitrypsin deficiency, which is rare in India but is the reason to think again in a young non-smoker with basal emphysema.",
        "The two classical phenotypes still earn marks: the 'pink puffer' emphysematous type with weight loss, pursed-lip breathing and relatively preserved gases, and the 'blue bloater' chronic bronchitic type with cough, cyanosis, hypercapnia, oedema and cor pulmonale - though most patients sit between them.",
      ],
    },
    {
      heading: "Assessment: the ABE grouping",
      points: [
        "GOLD assessment has three separate axes: confirm obstruction, grade its **severity by FEV1**, and place the patient in a **symptom-exacerbation group (A, B or E)** which is what actually chooses the inhaler.",
        "**Airflow limitation grades (post-bronchodilator FEV1 % predicted):** GOLD 1 mild, 80% or more; GOLD 2 moderate, 50-79%; GOLD 3 severe, 30-49%; GOLD 4 very severe, under 30%.",
        "**Symptom burden:** mMRC dyspnoea scale (0 breathless on strenuous exercise, 1 hurrying or slight hill, 2 walks slower than peers or stops on the level, 3 stops after about 100 metres, 4 breathless dressing or leaving the house) and the CAT score out of 40. The cut-offs are **mMRC 2 or more, or CAT 10 or more**.",
        "**Exacerbation history in the last year** is the other axis: two or more moderate exacerbations, or one or more requiring hospitalisation, puts the patient in **Group E** whatever the symptom score.",
        "**Group A** is low symptoms and low exacerbation risk; **Group B** is high symptoms (mMRC 2 or more or CAT 10 or more) with low exacerbation risk; **Group E** is the high-exacerbation group, which replaced the old C and D groups in GOLD 2023.",
        "Complete the assessment with a **blood eosinophil count**, which decides whether an inhaled corticosteroid belongs in the regimen, plus SpO2, BMI, a chest radiograph to exclude alternatives, and screening for the comorbidities that kill these patients - ischaemic heart disease, heart failure, lung cancer, osteoporosis, depression, anxiety and diabetes.",
      ],
    },
    {
      heading: "Inhaled treatment: what to start and how to escalate",
      points: [
        "**Group A:** a bronchodilator, usually a long-acting one (LAMA such as tiotropium 18 microgram once daily, or glycopyrronium, or a LABA such as formoterol or indacaterol); a SABA alone is acceptable only for very mild intermittent symptoms.",
        "**Group B:** start with **LABA plus LAMA combination** - it outperforms either alone on symptoms and lung function (formoterol-glycopyrronium, indacaterol-glycopyrronium or vilanterol-umeclidinium are all marketed in India).",
        "**Group E:** start with **LABA plus LAMA**, and add an inhaled corticosteroid (making it triple therapy) if the **blood eosinophil count is 300 cells/microlitre or more**, or if there is a history of asthma.",
        "**Follow-up escalation:** if breathlessness persists, ensure LABA-LAMA, check technique and adherence, and look for another cause. If exacerbations persist on LABA-LAMA, add ICS when eosinophils are **100 cells/microlitre or more**; if eosinophils are under 100 the added ICS is unlikely to help and adds pneumonia risk.",
        "**Reasons not to use ICS in COPD:** repeated pneumonia, blood eosinophils under 100/microlitre, and a history of mycobacterial infection - which matters enormously in India, where inhaled steroids in a patient with old tuberculosis carry a real risk of reactivation.",
        "Additional oral agents for the frequent exacerbator already on triple therapy: **roflumilast 500 microgram daily** if FEV1 is under 50% with chronic bronchitis, or **azithromycin 250 mg daily or 500 mg three times a week** for a year (check QTc, hearing and sputum for non-tuberculous mycobacteria first, and remember the resistance implications).",
        "Oral theophylline is a weak bronchodilator with a narrow therapeutic index and a long list of interactions; it survives in Indian practice because it is cheap, but it should not be a first choice, and oral salbutamol has no place at all.",
      ],
    },
    {
      heading: "Non-pharmacological management - the parts that change outcome",
      points: [
        "**Smoking cessation is the only intervention that alters the rate of FEV1 decline**, and it works at every stage; use the 5A framework, offer nicotine replacement or bupropion or varenicline, and refer to a national tobacco cessation centre or the quitline. Ask about bidis, hookah and smokeless tobacco separately.",
        "**Reducing biomass exposure** is the equivalent intervention for the non-smoking rural woman: LPG under the Pradhan Mantri Ujjwala Yojana, an improved chulha with a chimney, cooking in a ventilated space, and keeping small children away from the kitchen.",
        "**Pulmonary rehabilitation** - a structured 6-8 week programme of exercise training, education and breathing techniques - improves dyspnoea, exercise capacity and quality of life more than any inhaler, and reduces readmission when started after an exacerbation. A home walking programme is an acceptable substitute where no formal programme exists.",
        "**Vaccination:** annual influenza vaccine (reduces exacerbations and mortality), pneumococcal vaccine, COVID-19 vaccine as per national policy, Tdap if not previously given, and RSV vaccine in those aged 60 and over where available.",
        "**Long-term oxygen therapy** improves survival, and is indicated when the resting PaO2 is 55 mmHg or less (SpO2 88% or less), or PaO2 56-59 mmHg with cor pulmonale, right heart failure or polycythaemia (haematocrit over 55%). It must be used **at least 15 hours a day** to gain the survival benefit, and it must be prescribed on stable-state readings, not on a value taken during an exacerbation.",
        "Nutrition (both malnutrition and obesity worsen outcome), treatment of depression and anxiety, an action plan with a rescue supply of prednisolone and antibiotic in selected reliable patients, and end-of-life discussion in advanced disease with morphine for refractory breathlessness.",
      ],
    },
    {
      heading: "Acute exacerbation of COPD",
      points: [
        "**Definition:** an acute worsening of dyspnoea, cough or sputum over less than 14 days, usually with increased local and systemic inflammation, caused by infection, pollution or an unidentified factor.",
        "The **Anthonisen cardinal symptoms** are increased dyspnoea, increased sputum volume and increased sputum purulence; all three (or two including purulence) constitutes a type 1 exacerbation and predicts benefit from antibiotics.",
        "**Treatment:** increase the short-acting bronchodilator (salbutamol 2.5 mg with ipratropium 500 microgram nebulised, or by pMDI with spacer, every 4-6 hours), give **prednisolone 40 mg orally once daily for 5 days**, and give antibiotics only when sputum is purulent or ventilatory support is needed.",
        "**Antibiotic choice** for 5 days: amoxicillin-clavulanate 625 mg three times daily, doxycycline 100 mg twice daily, or azithromycin 500 mg daily; escalate and culture in frequent exacerbators, those recently hospitalised, or those with bronchiectasis where Pseudomonas is a concern.",
        "**Controlled oxygen to a target SpO2 of 88-92%** using a Venturi mask at 24-28% or low-flow nasal prongs; uncontrolled high-flow oxygen causes worsening hypercapnia and narcosis through loss of hypoxic drive, ventilation-perfusion mismatch and the Haldane effect.",
        "**Non-invasive ventilation is indicated when arterial pH is under 7.35 with PaCO2 above 45 mmHg**, or there is severe dyspnoea with respiratory muscle fatigue; it reduces intubation, mortality and length of stay and is the single highest-yield intervention in an exacerbation answer.",
        "Always exclude the mimics before settling for 'exacerbation': pneumonia, pneumothorax, pulmonary embolism (COPD patients are at high risk and it is under-diagnosed), acute left ventricular failure, and arrhythmia. A chest radiograph and ECG are mandatory in any admitted patient.",
        "Before discharge: confirm inhaler technique, optimise the maintenance regimen, arrange follow-up within 4 weeks, refer for pulmonary rehabilitation, vaccinate, and reassess oxygenation at 8-12 weeks before committing to long-term oxygen.",
      ],
    },
  ],
  tables: [
    {
      heading: "GOLD ABE assessment and initial inhaled therapy",
      columns: ["Group", "Symptoms", "Exacerbations in past year", "Initial treatment"],
      rows: [
        ["A", "mMRC 0-1 or CAT under 10", "0 or 1 moderate, no admission", "A long-acting bronchodilator (LAMA or LABA)"],
        ["B", "mMRC 2 or more or CAT 10 or more", "0 or 1 moderate, no admission", "LABA plus LAMA"],
        ["E", "Any symptom level", "2 or more moderate, or 1 or more with admission", "LABA plus LAMA; add ICS if eosinophils 300/microlitre or more"],
      ],
    },
    {
      heading: "GOLD grades of airflow limitation (post-bronchodilator, FEV1/FVC under 0.70)",
      columns: ["Grade", "Severity", "FEV1 % predicted"],
      rows: [
        ["GOLD 1", "Mild", "80% or more"],
        ["GOLD 2", "Moderate", "50-79%"],
        ["GOLD 3", "Severe", "30-49%"],
        ["GOLD 4", "Very severe", "Under 30%"],
      ],
    },
    {
      heading: "Common long-acting inhaled drugs available in India",
      columns: ["Class", "Drug and dose", "Notes"],
      rows: [
        ["LAMA", "Tiotropium 18 microgram DPI or 5 microgram soft mist, once daily", "Dry mouth, urinary retention, caution in narrow-angle glaucoma"],
        ["LAMA", "Glycopyrronium 50 microgram once daily", "Often combined with indacaterol or formoterol"],
        ["LABA", "Formoterol 6-12 microgram twice daily; indacaterol 150-300 microgram once daily", "Tremor, palpitation, hypokalaemia"],
        ["LABA-LAMA", "Indacaterol-glycopyrronium 110/50 once daily; formoterol-glycopyrronium 12/50 twice daily", "First-line for Group B and E"],
        ["Triple (ICS-LABA-LAMA)", "Budesonide-formoterol-glycopyrronium; fluticasone-vilanterol-umeclidinium", "Only if eosinophils 300 or more, or exacerbations on LABA-LAMA with eosinophils 100 or more"],
      ],
    },
  ],
  redFlags: [
    "Arterial pH under 7.35 with PaCO2 above 45 mmHg in an exacerbation - start non-invasive ventilation now, do not wait for a repeat gas.",
    "Drowsiness, confusion, flapping tremor or a falling respiratory rate in a breathless COPD patient - carbon dioxide narcosis; check the oxygen flow rate immediately.",
    "Sudden severe breathlessness with unilateral hyperresonance and absent breath sounds - pneumothorax in a bullous lung, needs immediate decompression.",
    "Haemoptysis, weight loss or a new focal shadow in a COPD patient - lung cancer or tuberculosis, investigate rather than treating another exacerbation.",
    "Pleuritic chest pain and hypoxia out of proportion to the wheeze, particularly after immobility - pulmonary embolism, which is common and missed in COPD.",
    "New peripheral oedema with a raised jugular venous pressure and a loud pulmonary component of the second sound - cor pulmonale, assess for long-term oxygen.",
    "Resting SpO2 of 88% or less on room air in a stable patient - arrange arterial gases and assess for long-term oxygen therapy.",
  ],
  pearls: [
    "No spirometry, no COPD: the label requires a post-bronchodilator FEV1/FVC below 0.70, and using a pre-bronchodilator value over-diagnoses the disease.",
    "GOLD grades (1-4) are set by FEV1 and describe severity; GOLD groups (A, B, E) are set by symptoms and exacerbations and choose the drug - never mix them up in an answer.",
    "In India, always ask a non-smoking woman with COPD how many years she cooked on a chulha; biomass exposure is the exposure history the examiner is listening for.",
    "Blood eosinophils decide the inhaled corticosteroid: 300 or more supports it, under 100 argues against it, and a history of tuberculosis or repeated pneumonia argues against it strongly.",
    "Target SpO2 in an exacerbation is 88-92%, not 95% - uncontrolled oxygen kills COPD patients through hypercapnia.",
    "Only three interventions alter mortality in COPD: stopping smoking, long-term oxygen in the hypoxaemic, and non-invasive ventilation in acidotic exacerbations (with lung volume reduction and transplant in selected cases).",
    "Pulmonary rehabilitation gives a larger symptomatic gain than any bronchodilator and is the most under-prescribed treatment in the country.",
    "Steroid course for an exacerbation is prednisolone 40 mg for 5 days - the REDUCE trial showed longer courses add toxicity, not benefit.",
    "Do not commit a patient to long-term oxygen on gases taken during an exacerbation; reassess after 8-12 weeks of stability.",
  ],
  theory: [
    {
      id: "respiratory-copd-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 60-year-old man who has smoked 20 bidis a day for 35 years presents with progressive breathlessness and chronic productive cough. Discuss the diagnosis, assessment and comprehensive management of his condition in a family practice setting.",
      openingLines: [
        "This history suggests chronic obstructive pulmonary disease, defined by GOLD as a heterogeneous lung condition with chronic respiratory symptoms due to airway or alveolar abnormalities, causing persistent and often progressive airflow obstruction.",
        "The diagnosis must be confirmed by spirometry showing a post-bronchodilator FEV1/FVC below 0.70, after which the patient is assessed for airflow severity, symptom burden, exacerbation risk and comorbidity, because these determine treatment.",
      ],
      answer: [
        {
          heading: "1. History and examination",
          points: [
            "Quantify exposure in pack-years or bidi-years, ask about biomass and occupational dust exposure, and take a childhood and tuberculosis history.",
            "Grade the breathlessness with the **mMRC scale** and the overall impact with the **CAT score**; record the number of exacerbations and hospitalisations in the past year.",
            "Ask about the features that suggest an alternative or additional diagnosis: haemoptysis, weight loss, fever, orthopnoea, paroxysmal nocturnal dyspnoea and chest pain.",
            "Examine for hyperinflation (barrel chest, reduced cricosternal distance, hyper-resonance, obliterated cardiac dullness), pursed-lip breathing, accessory muscle use, tracheal tug, prolonged expiration with rhonchi, cyanosis, flapping tremor, and signs of cor pulmonale.",
          ],
        },
        {
          heading: "2. Investigations",
          points: [
            "**Spirometry before and after bronchodilator** - confirms the diagnosis and grades severity (GOLD 1-4 by FEV1 percent predicted).",
            "Chest radiograph to exclude tuberculosis, bronchiectasis, cancer and heart failure and to show hyperinflation; SpO2 with arterial gases if it is 92% or less.",
            "**Complete blood count with eosinophil count** (drives the ICS decision and shows polycythaemia), blood sugar, ECG and echocardiography if cor pulmonale is suspected.",
            "Sputum for acid-fast bacilli by NAAT if cough has lasted over two weeks or there is weight loss - in India this is a routine step, not an afterthought.",
            "Alpha-1 antitrypsin level only in the young non-smoker with basal emphysema or a strong family history.",
          ],
        },
        {
          heading: "3. Assessment and grouping",
          points: [
            "Assign the GOLD grade from FEV1 and the GOLD group from symptoms and exacerbations: Group A (low symptom, low risk), Group B (high symptom, low risk), Group E (two or more moderate exacerbations or one hospitalisation).",
            "Screen for comorbidities that determine prognosis: ischaemic heart disease, heart failure, lung cancer, osteoporosis, anxiety and depression, diabetes and obstructive sleep apnoea.",
          ],
        },
        {
          heading: "4. Pharmacological management",
          points: [
            "Group B or E: start a **LABA-LAMA combination**, for example indacaterol-glycopyrronium 110/50 microgram once daily.",
            "Add an inhaled corticosteroid only if blood eosinophils are 300/microlitre or more, or the patient exacerbates on LABA-LAMA with eosinophils of 100 or more; avoid ICS if there is prior tuberculosis or recurrent pneumonia.",
            "Consider roflumilast 500 microgram daily in chronic bronchitis with FEV1 under 50%, or long-term azithromycin in the frequent exacerbator after checking QTc and excluding non-tuberculous mycobacteria.",
            "Provide a short-acting reliever, teach the device, and review technique at every visit.",
          ],
        },
        {
          heading: "5. Non-pharmacological management and follow-up",
          points: [
            "**Smoking cessation** using the 5A approach with pharmacotherapy - the only measure that changes the rate of decline in lung function.",
            "**Pulmonary rehabilitation**, nutritional advice, and a home exercise programme where formal rehabilitation is unavailable.",
            "Vaccination: annual influenza, pneumococcal, COVID-19 and Tdap.",
            "Assess for **long-term oxygen therapy** when stable: PaO2 55 mmHg or less or SpO2 88% or less, or PaO2 56-59 mmHg with cor pulmonale or polycythaemia, used for at least 15 hours a day.",
            "Provide a written action plan for exacerbations, arrange 3-monthly follow-up with symptom and exacerbation review, treat comorbid depression, and discuss palliative measures including opioids for refractory breathlessness in advanced disease.",
          ],
        },
      ],
      mustDraw: [
        "The GOLD ABE grid with initial inhaled therapy in each box.",
        "A table of the four GOLD spirometric grades with FEV1 cut-offs.",
      ],
      markSplit: [
        { part: "Definition and confirmation by spirometry", marks: 2 },
        { part: "History, examination and investigations", marks: 2 },
        { part: "GOLD grading and grouping", marks: 2 },
        { part: "Inhaled and oral drug plan", marks: 2 },
        { part: "Non-drug measures, oxygen and follow-up", marks: 2 },
      ],
      keywords: ["GOLD ABE", "mMRC", "CAT", "LABA-LAMA", "long-term oxygen therapy"],
    },
    {
      id: "respiratory-copd-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "core",
      question: "Write short notes on the management of an acute exacerbation of COPD, including the role of oxygen and non-invasive ventilation.",
      openingLines: [
        "An acute exacerbation of COPD is an acute worsening of dyspnoea, cough or sputum over less than 14 days, requiring a change in treatment, and is most often precipitated by respiratory infection or air pollution.",
        "Exacerbations accelerate lung function decline and carry substantial mortality, so the aims are to relieve obstruction, correct hypoxaemia without inducing hypercapnia, support ventilation when the pH falls, and prevent the next episode.",
      ],
      answer: [
        {
          heading: "Assessment",
          points: [
            "Grade severity by the ability to speak, respiratory rate, use of accessory muscles, level of consciousness, SpO2 and haemodynamics.",
            "Investigate with chest radiograph, ECG, arterial blood gas, blood counts, blood sugar and electrolytes; sputum culture in severe or frequent exacerbations.",
            "Exclude the imitators: pneumonia, pneumothorax, pulmonary embolism, acute left ventricular failure and arrhythmia.",
          ],
        },
        {
          heading: "Drug treatment",
          points: [
            "**Short-acting bronchodilators:** salbutamol 2.5 mg plus ipratropium 500 microgram nebulised every 4-6 hours, or the equivalent by pMDI with spacer; drive the nebuliser with air, not oxygen, in a hypercapnic patient.",
            "**Systemic corticosteroid:** prednisolone 40 mg orally once daily for 5 days shortens recovery and reduces relapse; longer courses add adverse effects without benefit.",
            "**Antibiotics** only for increased sputum purulence with increased volume or dyspnoea, or if ventilatory support is needed: amoxicillin-clavulanate, doxycycline or azithromycin for 5 days.",
            "Treat comorbid heart failure, arrhythmia and hyperglycaemia; give thromboprophylaxis to admitted patients.",
          ],
        },
        {
          heading: "Oxygen and ventilatory support",
          points: [
            "**Controlled oxygen to a target SpO2 of 88-92%**, ideally with a 24-28% Venturi mask; recheck the gas after 30-60 minutes for a rise in PaCO2 or a fall in pH.",
            "**Non-invasive ventilation** is indicated for respiratory acidosis (pH under 7.35 with PaCO2 above 45 mmHg), severe dyspnoea with fatigue or accessory muscle use, or persistent hypoxaemia despite oxygen; it reduces intubation, mortality and length of stay.",
            "Invasive ventilation is needed for failure of or intolerance to NIV, respiratory or cardiac arrest, impaired consciousness, massive aspiration or haemodynamic instability.",
          ],
        },
        {
          heading: "Before discharge",
          points: [
            "Optimise the maintenance inhaler and check technique, immunise, refer for pulmonary rehabilitation within 4 weeks, provide an action plan, arrange follow-up in 1-4 weeks, and reassess oxygenation at 8-12 weeks before committing to long-term oxygen.",
          ],
        },
      ],
      mustDraw: ["A flow chart from arrival through bronchodilator, steroid, antibiotic and controlled oxygen to the pH-triggered decision for NIV."],
      markSplit: [
        { part: "Definition and assessment", marks: 1 },
        { part: "Bronchodilators, steroid, antibiotics with doses", marks: 2 },
        { part: "Controlled oxygen and NIV criteria", marks: 1.5 },
        { part: "Discharge and prevention", marks: 0.5 },
      ],
      keywords: ["AECOPD", "Anthonisen criteria", "SpO2 88-92%", "NIV", "prednisolone 40 mg"],
    },
    {
      id: "respiratory-copd-t3",
      paper: "II",
      kind: "enumerate",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Enumerate the indications for long-term oxygen therapy in COPD and outline how it should be prescribed and monitored.",
      openingLines: [
        "Long-term oxygen therapy is one of only a few interventions shown to prolong survival in COPD, and it works only in chronic severe resting hypoxaemia and only if used for enough hours a day.",
        "Eligibility must be assessed when the patient is clinically stable, at least 8-12 weeks after an exacerbation, and on optimal medical treatment.",
      ],
      answer: [
        {
          heading: "Indications",
          points: [
            "Resting **PaO2 of 55 mmHg or less** (or SpO2 88% or less) on room air, confirmed on two occasions three weeks apart.",
            "**PaO2 of 56-59 mmHg** (SpO2 about 89%) with evidence of cor pulmonale, right heart failure, peripheral oedema, pulmonary hypertension, or secondary polycythaemia with haematocrit above 55%.",
            "Desaturation during sleep or exercise not corrected by other treatment may justify supplemental oxygen in selected patients, though the survival evidence is for resting hypoxaemia.",
          ],
        },
        {
          heading: "Prescription",
          points: [
            "Flow rate titrated to achieve a **PaO2 above 60 mmHg or SpO2 of 90% or more at rest**, usually 1-3 L/min by nasal cannula, increased by 1 L/min during sleep and exercise if needed.",
            "Duration **at least 15 hours a day including overnight**; benefit increases with hours used and there is no survival benefit below this threshold.",
            "Source: oxygen concentrator is the practical device for home use in India; cylinders are a backup, and portable concentrators aid mobility.",
            "Absolute requirement to stop smoking - continued smoking with home oxygen is a serious fire and burn hazard.",
          ],
        },
        {
          heading: "Monitoring and cautions",
          points: [
            "Reassess arterial gases or oximetry at 60-90 days to confirm continuing need and adequacy of the flow rate, then at least annually.",
            "Watch for hypercapnia after starting or increasing flow, particularly in patients with a raised baseline PaCO2.",
            "Address adherence, nasal dryness and skin trauma from the cannula, and the electricity supply and cost of running a concentrator, which are the real reasons therapy fails at home in India.",
            "Long-term oxygen is not a treatment for breathlessness with normal oxygen saturation - in that setting it gives no survival or symptom benefit, and opioids and rehabilitation are the correct answers.",
          ],
        },
      ],
      markSplit: [
        { part: "Indications with numbers", marks: 2 },
        { part: "Prescription including hours per day", marks: 2 },
        { part: "Monitoring and cautions", marks: 1 },
      ],
      keywords: ["long-term oxygen therapy", "PaO2 55 mmHg", "15 hours", "cor pulmonale", "oxygen concentrator"],
    },
  ],
  mcqs: [
    {
      id: "respiratory-copd-q1",
      stem: "A 58-year-old smoker has an mMRC grade of 3, a CAT score of 22 and three exacerbations in the past year, one requiring admission. Post-bronchodilator FEV1 is 42% predicted with FEV1/FVC 0.55, and the blood eosinophil count is 380 cells/microlitre. Which initial inhaled regimen is correct?",
      options: [
        "LAMA alone",
        "LABA alone",
        "LABA plus LAMA",
        "LABA plus LAMA plus inhaled corticosteroid",
        "Inhaled corticosteroid plus LABA",
      ],
      answer: 3,
      explanation:
        "He is GOLD grade 3 by FEV1 and GOLD group E by exacerbation history, and with a blood eosinophil count of 300 cells/microlitre or more GOLD advises starting triple therapy with LABA-LAMA-ICS rather than dual bronchodilation. Monotherapy with a LAMA or LABA is initial treatment for group A only and would under-treat a frequent exacerbator. LABA-LAMA is the correct start for group E only when eosinophils are below 300. ICS-LABA without a LAMA is not a recommended initial regimen in COPD, as the LAMA contributes more to exacerbation reduction than the ICS.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-copd-q2",
      stem: "A 65-year-old man with COPD is brought in with worsening breathlessness. He is drowsy, respiratory rate 28/min, SpO2 99% on a face mask running 8 L/min of oxygen. Arterial gas: pH 7.22, PaCO2 82 mmHg, PaO2 140 mmHg, bicarbonate 33 mmol/L. What is the immediate priority?",
      options: [
        "Increase oxygen flow to 10 L/min",
        "Reduce oxygen to target SpO2 88-92% and start non-invasive ventilation",
        "Give intravenous sodium bicarbonate to correct the acidosis",
        "Give intravenous doxapram infusion",
        "Intubate immediately without a trial of non-invasive ventilation",
      ],
      answer: 1,
      explanation:
        "This is oxygen-induced hypercapnic respiratory failure with decompensated acidosis: the excessive oxygen must be dialled back to a target SpO2 of 88-92%, and NIV is indicated because the pH is below 7.35 with a PaCO2 above 45 mmHg, which is the setting where NIV reduces intubation and mortality. Increasing oxygen worsens the hypercapnia. Bicarbonate does not treat a respiratory acidosis and can raise the PaCO2 further. Doxapram is obsolete since NIV became available. Immediate intubation is reserved for failure of or contraindication to NIV, arrest, or an unprotected airway, and a trial of NIV should come first in a patient who is still rousable.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-copd-q3",
      stem: "A 55-year-old non-smoking woman from a village has had breathlessness and cough for four years and cooks on a wood-burning chulha. Post-bronchodilator spirometry shows FEV1/FVC 0.62 with FEV1 58% predicted and only 6% reversibility. Which statement is correct?",
      options: [
        "She cannot have COPD because she has never smoked",
        "Biomass smoke exposure is a recognised cause of COPD and her spirometry confirms the diagnosis",
        "The absence of reversibility excludes COPD and confirms interstitial lung disease",
        "She should be treated as asthma because she is a non-smoker",
        "The diagnosis requires a high-resolution CT scan showing emphysema",
      ],
      answer: 1,
      explanation:
        "COPD is defined by persistent airflow obstruction after a bronchodilator in someone with chronic symptoms and a relevant exposure, and household biomass smoke is a major cause of COPD in Indian women who have never smoked. Never smoking does not exclude COPD. Absent reversibility supports rather than refutes COPD, and interstitial lung disease produces restriction with a preserved or raised ratio, not obstruction. Labelling her as asthma on the basis of gender and smoking status would commit her to the wrong long-term treatment, and HRCT is not required for the diagnosis, which is spirometric.",
      difficulty: "easy",
    },
    {
      id: "respiratory-copd-q4",
      stem: "A 62-year-old man with COPD and prior treated pulmonary tuberculosis has two exacerbations a year on tiotropium. His blood eosinophil count is 80 cells/microlitre. What is the most appropriate change?",
      options: [
        "Add an inhaled corticosteroid to make triple therapy",
        "Add a LABA to make LABA-LAMA dual bronchodilation",
        "Start oral prednisolone 10 mg daily long term",
        "Start oral theophylline 400 mg at night",
        "Stop the tiotropium and start an ICS-LABA combination",
      ],
      answer: 1,
      explanation:
        "The correct escalation from LAMA monotherapy in a patient with continuing exacerbations is dual bronchodilation with a LABA, and inhaled corticosteroid is specifically discouraged here because the eosinophil count is below 100 cells/microlitre and he has had tuberculosis, which raises the risk of pneumonia and of mycobacterial reactivation. Long-term oral steroids have no place in stable COPD and cause substantial harm. Theophylline is a weak bronchodilator with a narrow therapeutic index and would not be preferred over an inhaled LABA. Stopping the LAMA loses the agent with the strongest exacerbation-reduction evidence.",
      difficulty: "hard",
    },
    {
      id: "respiratory-copd-q5",
      stem: "A 68-year-old man with stable COPD on optimal inhalers has a resting room-air SpO2 of 87% on two occasions three weeks apart, with a PaO2 of 53 mmHg. Which intervention will improve his survival?",
      options: [
        "Adding oral theophylline",
        "Home oxygen for at least 15 hours a day",
        "Nocturnal oxygen for 4 hours a night",
        "Adding a mucolytic agent",
        "Adding long-term prednisolone",
      ],
      answer: 1,
      explanation:
        "Long-term oxygen therapy prolongs survival in COPD with chronic resting hypoxaemia (PaO2 of 55 mmHg or less, or SpO2 88% or less), but only when used for at least 15 hours a day, which is why the duration is part of the answer. Four hours of nocturnal oxygen does not reach the threshold at which the survival benefit was demonstrated. Theophylline, mucolytics and long-term oral steroids improve neither survival nor the rate of lung function decline, and chronic oral steroids add myopathy, osteoporosis and hyperglycaemia.",
      difficulty: "easy",
    },
    {
      id: "respiratory-copd-q6",
      stem: "A 60-year-old man with COPD presents with three days of increased breathlessness, increased sputum volume and yellow-green sputum, but no fever and a clear chest radiograph. Which is the most appropriate treatment package?",
      options: [
        "Nebulised bronchodilators alone",
        "Nebulised bronchodilators plus prednisolone 40 mg daily for 5 days plus a 5-day oral antibiotic",
        "Intravenous hydrocortisone for 10 days with no antibiotic",
        "Oral prednisolone 40 mg for 14 days with a tapering course",
        "Intravenous piperacillin-tazobactam for 7 days",
      ],
      answer: 1,
      explanation:
        "He has all three Anthonisen cardinal symptoms including sputum purulence, so an antibiotic is indicated alongside intensified bronchodilators and a 5-day course of prednisolone 40 mg, the regimen supported by the REDUCE trial. Bronchodilators alone under-treat both the inflammation and the bacterial trigger. Prolonged or tapering steroid courses add hyperglycaemia, myopathy and infection risk without extra benefit. Broad-spectrum intravenous antipseudomonal therapy is not justified in an ambulatory exacerbation without risk factors for Pseudomonas such as bronchiectasis, recent hospitalisation or repeated antibiotic courses.",
      difficulty: "easy",
    },
    {
      id: "respiratory-copd-q7",
      stem: "Which single intervention has been shown to slow the accelerated rate of decline in FEV1 in a patient with COPD?",
      options: [
        "Inhaled corticosteroid",
        "Long-acting muscarinic antagonist",
        "Smoking cessation",
        "Pulmonary rehabilitation",
        "Long-term azithromycin",
      ],
      answer: 2,
      explanation:
        "The Lung Health Study and subsequent data show that stopping smoking is the intervention that returns the rate of FEV1 decline towards that of a non-smoker, at any stage of disease. Inhaled corticosteroids and long-acting bronchodilators improve symptoms, lung function and exacerbations but do not convincingly change the long-term slope of decline. Pulmonary rehabilitation improves exercise capacity and quality of life without altering FEV1, and azithromycin reduces exacerbation frequency in selected patients but does not change lung function decline.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "respiratory-copd-c1",
      front: "Spirometric criterion that defines COPD.",
      back: "Post-bronchodilator FEV1/FVC below 0.70 in a patient with chronic respiratory symptoms and a relevant exposure history.",
    },
    {
      id: "respiratory-copd-c2",
      front: "GOLD grades 1 to 4 by FEV1 percent predicted.",
      back: "GOLD 1 mild 80% or more; GOLD 2 moderate 50-79%; GOLD 3 severe 30-49%; GOLD 4 very severe under 30%.",
    },
    {
      id: "respiratory-copd-c3",
      front: "What defines GOLD group E?",
      back: "Two or more moderate exacerbations in the past year, or one or more requiring hospitalisation, regardless of symptom score.",
    },
    {
      id: "respiratory-copd-c4",
      front: "Symptom cut-offs that separate group A from group B.",
      back: "mMRC 2 or more, or CAT score 10 or more, defines the high-symptom group B.",
    },
    {
      id: "respiratory-copd-c5",
      front: "Eosinophil thresholds for inhaled corticosteroid in COPD.",
      back: "300 cells/microlitre or more favours adding ICS; 100 or more supports it if exacerbations continue on LABA-LAMA; under 100 argues against it.",
    },
    {
      id: "respiratory-copd-c6",
      front: "Target oxygen saturation in an acute exacerbation of COPD.",
      back: "88-92%, ideally with a 24-28% Venturi mask, rechecking the arterial gas within 30-60 minutes.",
    },
    {
      id: "respiratory-copd-c7",
      front: "Gas criteria for starting non-invasive ventilation in COPD.",
      back: "pH under 7.35 with PaCO2 above 45 mmHg, or severe dyspnoea with respiratory muscle fatigue despite medical therapy.",
    },
    {
      id: "respiratory-copd-c8",
      front: "Anthonisen cardinal symptoms of an exacerbation.",
      back: "Increased dyspnoea, increased sputum volume, increased sputum purulence; antibiotics benefit those with all three, or two including purulence.",
    },
    {
      id: "respiratory-copd-c9",
      front: "Indications for long-term oxygen therapy.",
      back: "Resting PaO2 55 mmHg or less (SpO2 88% or less), or PaO2 56-59 mmHg with cor pulmonale, oedema or haematocrit above 55%; used at least 15 hours a day.",
    },
    {
      id: "respiratory-copd-c10",
      front: "Steroid regimen for an acute exacerbation of COPD.",
      back: "Prednisolone 40 mg orally once daily for 5 days, without a taper (REDUCE trial).",
    },
    {
      id: "respiratory-copd-c11",
      front: "Two options for the frequent exacerbator already on triple therapy.",
      back: "Roflumilast 500 microgram daily if FEV1 under 50% with chronic bronchitis, or azithromycin 250 mg daily / 500 mg three times weekly after checking QTc and excluding non-tuberculous mycobacteria.",
    },
    {
      id: "respiratory-copd-c12",
      front: "Why is inhaled corticosteroid risky in Indian COPD patients?",
      back: "It increases the risk of pneumonia and of reactivation of tuberculosis, so it is avoided in patients with prior mycobacterial disease or eosinophils under 100 cells/microlitre.",
    },
  ],
  references: [
    "Global Initiative for Chronic Obstructive Lung Disease (GOLD), Global Strategy for Prevention, Diagnosis and Management of COPD, 2024-2025 report",
    "Indian Chest Society / National College of Chest Physicians guidelines for the diagnosis and management of COPD, 2013 with subsequent updates",
    "GBD India State-Level Disease Burden Initiative, chronic respiratory diseases, Lancet Global Health 2018",
    "REDUCE trial - short-term versus conventional glucocorticoid therapy in acute exacerbations of COPD, JAMA 2013",
    "Nocturnal Oxygen Therapy Trial and Medical Research Council long-term oxygen trial",
  ],
});
