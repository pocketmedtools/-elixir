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

topics.push({
  id: "respiratory-tuberculosis-ntep",
  title: "Pulmonary tuberculosis under NTEP: diagnosis, regimens, follow-up and drug resistance",
  oneLiner:
    "Under the National TB Elimination Programme every presumptive tuberculosis patient gets an upfront molecular test with universal drug susceptibility testing for rifampicin, drug-sensitive disease is treated with daily fixed dose combinations as 2 months of HRZE followed by 4 months of HRE by weight band, and every patient is notified on Ni-kshay and receives nutritional support under Ni-kshay Poshan Yojana.",
  frequency: "core",
  keywords: [
    "TB",
    "NTEP",
    "RNTCP",
    "Ni-kshay",
    "CBNAAT",
    "Xpert MTB/RIF",
    "Truenat",
    "HRZE",
    "fixed dose combination",
    "MDR-TB",
    "BPaLM",
    "bedaquiline",
    "Ni-kshay Poshan Yojana",
    "universal drug susceptibility testing",
    "DOT",
    "Pradhan Mantri TB Mukt Bharat Abhiyaan",
  ],
  sections: [
    {
      heading: "Burden, programme and the definitions you must use",
      points: [
        "India carries the largest tuberculosis burden in the world - about a quarter of global cases. The **India TB Report 2024** recorded roughly 25.5 lakh patients notified in 2023, the highest ever, with an estimated incidence of about **195 per 100,000 population** and mortality of about 22 per 100,000.",
        "The **National TB Prevalence Survey 2019-21** found a prevalence of microbiologically confirmed pulmonary tuberculosis of about **316 per 100,000 among those aged 15 years and over**, and showed that nearly half of prevalent cases had no cough at the time of the survey - which is why symptom screening alone misses disease and chest radiography is now used for screening.",
        "The programme was renamed the **National TB Elimination Programme (NTEP)** in 2020, with the National Strategic Plan aiming at elimination (an incidence below 1 per lakh) by 2025, ahead of the global SDG target of 2030. Its four pillars are Detect, Treat, Prevent and Build.",
        "**Presumptive pulmonary tuberculosis:** any person with cough of **two weeks or more**, fever of two weeks or more, significant unintentional weight loss, haemoptysis, or any abnormality on chest radiograph. In people living with HIV, contacts, and other high-risk groups, **cough of any duration** counts.",
        "**Microbiologically confirmed TB** means demonstration of Mycobacterium tuberculosis by smear, culture or an approved molecular test; **clinically diagnosed TB** is a case diagnosed by a clinician on radiology, histology or clinical grounds and started on a full course of treatment - both must be notified.",
        "**Notification is mandatory for every provider, public and private**, under the 2012 Gazette order amended in 2018, which makes failure to notify an offence under sections 269 and 270 of the Indian Penal Code (now the corresponding sections of the Bharatiya Nyaya Sanhita); notification is done on the **Ni-kshay** portal.",
      ],
    },
    {
      heading: "Diagnosis: the NTEP algorithm",
      points: [
        "**An upfront nucleic acid amplification test (NAAT) is the diagnostic test of first choice** for all presumptive tuberculosis - CBNAAT (Xpert MTB/RIF or Ultra) or Truenat MTB/MTB Plus, which is the point-of-care platform deployed down to peripheral health institutions and Ayushman Arogya Mandirs.",
        "**Universal drug susceptibility testing (UDST)** is programme policy: every diagnosed tuberculosis patient must have at least rifampicin susceptibility established at diagnosis, which the NAAT provides in the same run (Truenat requires the MTB-RIF Dx chip as a reflex test).",
        "Sputum smear microscopy (two samples - a spot and an early-morning specimen, stained by Ziehl-Neelsen or fluorescence) still has a role where NAAT is unavailable and for **follow-up during treatment**, but it is no longer the preferred diagnostic test; it needs 5,000-10,000 bacilli per mL against about 130 per mL for Xpert.",
        "Chest radiography is a **screening and triage** tool, increasingly with artificial-intelligence reading and hand-held X-ray in active case-finding campaigns; a radiological diagnosis alone must always be followed by an attempt at microbiological confirmation.",
        "For **extrapulmonary tuberculosis**, obtain the appropriate specimen and send it for NAAT plus cytology or histopathology and culture: pleural fluid and biopsy, lymph node aspirate, cerebrospinal fluid, ascitic fluid, pus, endometrial or synovial tissue. NAAT sensitivity on paucibacillary fluids is low, so a negative test never excludes the diagnosis.",
        "**Every tuberculosis patient must be offered HIV testing, screened for diabetes, tobacco use and alcohol use, and have a nutritional assessment with weight, height and BMI** - the NTEP comorbidity package, and an easy five marks if listed.",
        "Sputum culture on liquid (MGIT) or solid (Lowenstein-Jensen) medium with line probe assay (first-line LPA for isoniazid and rifampicin, second-line LPA for fluoroquinolones and injectables) is used for all rifampicin-resistant cases and for treatment failures, through the network of Culture and Drug Susceptibility Testing laboratories and the National Reference Laboratories.",
      ],
    },
    {
      heading: "Treating drug-sensitive tuberculosis",
      points: [
        "**The regimen is daily, not intermittent** - thrice-weekly treatment was abandoned in 2017. Drugs are given as **fixed dose combinations** in a patient-wise box supplied free, and the patient is supported by a treatment supporter with 99DOTS or video-observed or family-observed treatment.",
        "**New and previously treated drug-sensitive pulmonary tuberculosis: 2 months of HRZE (intensive phase) followed by 4 months of HRE (continuation phase)** - note that India retains ethambutol in the continuation phase, so the regimen is written 2HRZE + 4HRE. There is no separate Category II regimen: streptomycin-based retreatment was withdrawn in 2021 and previously treated patients are managed by DST.",
        "**Tuberculous meningitis and osteoarticular tuberculosis: 2HRZE + 10HRE, a total of 12 months**, with adjuvant corticosteroid (dexamethasone or prednisolone, tapered over 6-8 weeks) in meningitis and pericarditis. Disseminated and spinal disease may also be extended on clinical grounds.",
        "**Adult weight bands (25 kg and above)** determine the number of FDC tablets: **25-39 kg two tablets, 40-54 kg three, 55-69 kg four, 70 kg and above five**, taken once daily on an empty stomach. The intensive-phase adult tablet contains isoniazid 75 mg, rifampicin 150 mg, pyrazinamide 400 mg and ethambutol 275 mg; the continuation-phase tablet omits pyrazinamide.",
        "**Children** are treated with dispersible paediatric FDCs by weight band (4-7, 8-11, 12-15, 16-24, 25-29 and 30-39 kg) at doses of isoniazid 10 mg/kg (7-15), rifampicin 15 mg/kg (10-20), pyrazinamide 35 mg/kg (30-40) and ethambutol 20 mg/kg (15-25) daily.",
        "**Pyridoxine 10 mg daily is given to every patient on isoniazid** in the programme to prevent peripheral neuropathy, and the dose is increased in pregnancy, malnutrition, alcohol use, diabetes, chronic kidney disease and HIV.",
        "**Anti-tuberculosis treatment in HIV:** start ART in every patient regardless of CD4 count, **within two weeks of starting anti-tuberculosis treatment** (deferred to 4-8 weeks in tuberculous meningitis because of the risk of paradoxical worsening), give cotrimoxazole preventive therapy, and remember that rifampicin requires the dolutegravir dose to be doubled to 50 mg twice daily.",
      ],
    },
    {
      heading: "Follow-up, outcomes and adverse effects",
      points: [
        "Weigh the patient at every visit and **revise the weight band when the weight crosses into the next band** - failing to do so is a classic cause of under-dosing and acquired resistance.",
        "**Follow-up sputum smear microscopy is done at the end of the intensive phase (end of month 2) and at the end of treatment (end of month 6)** for all pulmonary cases, with an additional examination in the continuation phase where the programme protocol requires it, and at any time if the patient deteriorates.",
        "**A positive smear at the end of the intensive phase is not an indication to extend the intensive phase** (extension was dropped from the programme); it is an indication to send a specimen for repeat NAAT with drug susceptibility testing and to re-examine adherence.",
        "**Treatment failure** is defined by a positive sputum smear or culture at **month 5 or later** during treatment, or by clinical or bacteriological evidence of failure at any time - such a patient is re-evaluated with DST and switched to an appropriate regimen.",
        "**Outcome definitions:** cured (microbiologically confirmed at diagnosis, smear or culture negative at the end of treatment and on at least one previous occasion), treatment completed (finished without evidence of failure but without documented end-of-treatment negativity), treatment success (cured plus completed), treatment failed, died, **lost to follow-up (treatment interrupted for one consecutive month or more)**, not evaluated, and treatment regimen changed.",
        "**Adverse effects to know cold:** hepatotoxicity from isoniazid, rifampicin and pyrazinamide - stop all hepatotoxic drugs if ALT is more than three times the upper limit with symptoms or more than five times without, wait for ALT to fall below twice normal and bilirubin to normalise, then reintroduce sequentially, rifampicin first, then isoniazid, then pyrazinamide; **ethambutol** causes dose-related optic neuritis with loss of red-green discrimination (test colour vision and acuity at baseline and warn the patient); **isoniazid** causes peripheral neuropathy and rarely psychosis; **pyrazinamide** causes arthralgia with hyperuricaemia; **rifampicin** turns urine and tears orange (warn about contact lenses), causes flu-like syndrome and is a powerful enzyme inducer - it reduces the efficacy of oral contraceptives, warfarin, oral hypoglycaemics, phenytoin, antiretrovirals and immunosuppressants.",
        "**Special situations:** pregnancy - all four first-line drugs are safe, streptomycin is contraindicated (fetal ototoxicity), and treatment must not be delayed; renal failure - reduce or space out ethambutol and pyrazinamide (three times a week after dialysis) while isoniazid and rifampicin need no change; liver disease - use a modified regimen with fewer hepatotoxic drugs under specialist advice.",
      ],
    },
    {
      heading: "Drug-resistant tuberculosis (PMDT)",
      points: [
        "**Definitions:** mono-resistance is resistance to one first-line drug; **MDR-TB** is resistance to at least isoniazid and rifampicin; **RR-TB** is rifampicin resistance with or without other resistance and is managed as MDR; **pre-XDR-TB** is MDR/RR-TB with additional resistance to any fluoroquinolone; **XDR-TB** (2021 WHO definition) is MDR/RR-TB with fluoroquinolone resistance plus resistance to at least one other Group A drug (bedaquiline or linezolid).",
        "**BPaLM is now the preferred regimen for MDR/RR-TB and pre-XDR-TB in India**, rolled out under NTEP from 2024: **bedaquiline, pretomanid, linezolid and moxifloxacin for 6 months**, in patients aged 15 years and over who have had less than one month of exposure to bedaquiline, pretomanid, linezolid or delamanid, with fluoroquinolone susceptibility confirmed; if the fluoroquinolone is resistant, moxifloxacin is dropped and the regimen becomes BPaL.",
        "BPaLM is not used in pregnancy and lactation, in extrapulmonary disease involving the central nervous system, bone or disseminated forms, or where the eligibility criteria are not met - those patients receive the **shorter oral bedaquiline-containing regimen (9-11 months)** or the **longer oral M/XDR regimen (18-20 months)**.",
        "The longer regimen is built from **Group A (levofloxacin or moxifloxacin, bedaquiline, linezolid - all three included), Group B (clofazimine, cycloserine) and then Group C** (ethambutol, delamanid, pyrazinamide, imipenem-cilastatin or meropenem, amikacin, ethionamide, para-aminosalicylic acid) to make up the required number of effective drugs.",
        "**Monitoring on a DR-TB regimen:** monthly sputum culture, **ECG for QTc prolongation** (bedaquiline, moxifloxacin, clofazimine and delamanid all prolong it), monthly complete blood count for linezolid-induced myelosuppression, visual acuity and colour vision for linezolid and ethambutol, symptom enquiry for peripheral neuropathy, thyroid function on ethionamide and PAS, liver and renal function, and audiometry if an injectable is ever used.",
        "Treatment is delivered through the **Nodal DR-TB Centres and District DR-TB Centres**, with all drugs supplied free, a treatment supporter, active drug-safety monitoring (aDSM) for the newer drugs, and monthly follow-up on the Ni-kshay platform.",
      ],
    },
    {
      heading: "Support, prevention and infection control",
      points: [
        "**Ni-kshay Poshan Yojana:** direct benefit transfer for nutritional support to every notified tuberculosis patient for the whole duration of treatment, **raised from Rs 500 to Rs 1,000 per month with effect from 1 November 2024**, paid into an Aadhaar-linked bank account through Ni-kshay. Undernourished patients additionally receive an energy-dense nutritional supplement under the programme.",
        "**Pradhan Mantri TB Mukt Bharat Abhiyaan** (launched September 2022) enlists **Ni-kshay Mitras** - individuals, institutions, corporates and elected representatives - who adopt patients and provide a monthly food basket and support, typically for at least six months.",
        "Other programme incentives: an honorarium for the treatment supporter (higher for drug-resistant cases), a notification and outcome-reporting incentive for private providers, and an informant incentive for referral of presumptive cases from difficult and tribal areas. Tribal patients receive a transport allowance.",
        "**Infection control follows the administrative-environmental-personal hierarchy:** early identification and fast-tracking of coughing patients, cough hygiene and mask for the patient, separate well-ventilated waiting areas with cross-ventilation and exhaust, sputum collection in the open air rather than in a closed room, and N95 respirators for staff in high-risk areas.",
        "**A patient on effective treatment becomes rapidly non-infectious** - within about two weeks for drug-sensitive smear-positive disease - which is the reassurance the family needs; there is no need to isolate the patient at home beyond basic cough hygiene and ventilation.",
        "**BCG** is given at birth (or as soon as possible up to one year) in the national immunisation schedule; it protects against disseminated and meningeal tuberculosis in children but not reliably against adult pulmonary disease.",
      ],
    },
  ],
  tables: [
    {
      heading: "NTEP adult weight bands and daily fixed dose combination tablets",
      columns: ["Weight band", "Intensive phase (HRZE) tablets/day", "Continuation phase (HRE) tablets/day"],
      rows: [
        ["25-39 kg", "2", "2"],
        ["40-54 kg", "3", "3"],
        ["55-69 kg", "4", "4"],
        ["70 kg and above", "5", "5"],
      ],
    },
    {
      heading: "First-line drugs: dose, key adverse effect and monitoring",
      columns: ["Drug", "Daily adult dose", "Key adverse effect", "Monitoring or antidote"],
      rows: [
        ["Isoniazid (H)", "5 mg/kg (4-6), max 300 mg", "Hepatitis, peripheral neuropathy, psychosis", "Pyridoxine 10 mg daily; liver function if symptomatic"],
        ["Rifampicin (R)", "10 mg/kg (8-12), max 600 mg", "Hepatitis, orange secretions, flu-like syndrome, enzyme induction", "Warn about contraceptive failure and drug interactions"],
        ["Pyrazinamide (Z)", "25 mg/kg (20-30)", "Hepatitis, arthralgia, hyperuricaemia", "Symptomatic; stop for gout-like arthritis"],
        ["Ethambutol (E)", "15 mg/kg (15-20)", "Retrobulbar optic neuritis, red-green colour blindness", "Baseline and periodic visual acuity and colour vision"],
        ["Streptomycin (rarely used)", "15 mg/kg IM", "Ototoxicity, nephrotoxicity, fetal ototoxicity", "Contraindicated in pregnancy; audiometry"],
      ],
    },
    {
      heading: "Drug-resistant TB definitions and the current Indian regimen",
      columns: ["Category", "Definition", "Regimen"],
      rows: [
        ["Mono/poly resistance", "Resistance to one or more first-line drugs but not to both H and R", "Individualised regimen based on DST"],
        ["MDR / RR-TB", "Resistance to at least isoniazid and rifampicin, or rifampicin alone", "BPaLM for 6 months if eligible; otherwise shorter oral (9-11 months) or longer oral (18-20 months) regimen"],
        ["Pre-XDR-TB", "MDR/RR-TB plus fluoroquinolone resistance", "BPaL for 6 months, or longer oral regimen"],
        ["XDR-TB", "MDR/RR-TB plus fluoroquinolone resistance plus resistance to bedaquiline or linezolid", "Individualised longer regimen at a Nodal DR-TB Centre"],
      ],
    },
  ],
  redFlags: [
    "Massive haemoptysis, a fall in blood pressure or respiratory distress in a patient with tuberculosis - admit for airway protection and consider bronchial artery embolisation.",
    "Jaundice, vomiting or right upper quadrant tenderness on treatment - drug-induced hepatitis; stop all hepatotoxic drugs the same day and check liver function.",
    "New blurring of vision or loss of red-green discrimination - ethambutol optic neuritis; stop ethambutol immediately, as recovery depends on early withdrawal.",
    "Headache, vomiting, altered sensorium, seizure or focal deficit in a tuberculosis patient - tuberculous meningitis or a tuberculoma; refer for imaging and cerebrospinal fluid examination the same day.",
    "Rifampicin resistance reported on NAAT - refer to the District or Nodal DR-TB Centre immediately; never continue a first-line regimen.",
    "A patient who has missed treatment for a month or more - lost to follow-up; trace actively, re-evaluate with NAAT and DST before restarting.",
    "Worsening symptoms and enlarging lymph nodes after starting ART in an HIV-positive patient - immune reconstitution inflammatory syndrome; continue both treatments and add steroid rather than stopping therapy.",
    "Breathlessness with a shifted trachea in a patient with cavitary disease - pneumothorax or a large effusion, needs urgent chest radiograph and drainage.",
  ],
  pearls: [
    "The NTEP first-line regimen is 2HRZE + 4HRE, daily, by weight band - the ethambutol in the continuation phase is the detail candidates most often get wrong.",
    "Upfront NAAT with universal drug susceptibility testing means every patient's rifampicin status is known before treatment starts; smear microscopy is now mainly a follow-up test.",
    "Cough of two weeks or more makes a patient presumptive tuberculosis - and in a person living with HIV or a household contact, cough of any duration does.",
    "Re-weigh at every visit and move the patient up a weight band when they gain weight; under-dosing is how acquired resistance is manufactured.",
    "Never add a single drug to a failing regimen - it is the classic way to create resistance.",
    "A positive smear at the end of the intensive phase means send for NAAT and DST, not extend the intensive phase, which the programme no longer does.",
    "Ni-kshay Poshan Yojana now pays Rs 1,000 per month (doubled from Rs 500 in November 2024) for the full duration of treatment.",
    "Rifampicin makes oral contraceptives fail - every woman of reproductive age on treatment needs alternative contraception, and this is a favourite viva question.",
    "In a patient with tuberculosis and HIV, start anti-tuberculosis treatment first and add ART within two weeks - except in tuberculous meningitis, where ART is deferred by 4-8 weeks.",
    "Notification is a legal duty for every doctor, public or private; the Ni-kshay ID is what unlocks free drugs and the patient's nutritional benefit.",
  ],
  theory: [
    {
      id: "respiratory-tuberculosis-ntep-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 35-year-old man presents with cough for one month, evening rise of temperature and weight loss. Describe your approach to diagnosis and management under the National TB Elimination Programme, including follow-up and the support available to the patient.",
      openingLines: [
        "This man fulfils the NTEP definition of presumptive pulmonary tuberculosis - cough of two weeks or more with fever and significant weight loss - and must be investigated with an upfront molecular test.",
        "India accounts for about a quarter of the world's tuberculosis, with roughly 25.5 lakh patients notified in 2023, and the programme aims at elimination by 2025 through the four pillars of Detect, Treat, Prevent and Build.",
      ],
      answer: [
        {
          heading: "1. History and examination",
          points: [
            "Duration and character of cough, sputum, haemoptysis, fever pattern, night sweats, appetite and quantified weight loss, chest pain and breathlessness.",
            "Contact history with a tuberculosis patient, past treatment for tuberculosis with the regimen and outcome, and adherence to it - this determines whether he is a new or previously treated patient.",
            "Risk factors and comorbidity: HIV status, diabetes, smoking, alcohol, undernutrition, silica or biomass exposure, steroid or immunosuppressant use, and occupation and living conditions.",
            "Examination: weight, height and BMI, pallor, lymphadenopathy, and chest examination for crackles, bronchial breathing or effusion; look for extrapulmonary sites.",
          ],
        },
        {
          heading: "2. Investigations under the programme",
          points: [
            "**Upfront NAAT** on a sputum specimen - CBNAAT (Xpert MTB/RIF or Ultra) or Truenat - which detects Mycobacterium tuberculosis and rifampicin resistance simultaneously, satisfying the policy of **universal drug susceptibility testing**.",
            "Sputum smear microscopy where NAAT is not available, and always for follow-up during treatment.",
            "Chest radiograph to define the extent of disease and to detect complications such as effusion, cavitation or a mass.",
            "**HIV test, blood sugar, tobacco and alcohol screening, and a nutritional assessment** in every patient as part of the comorbidity package; complete blood count and liver function as a baseline.",
            "If rifampicin resistance is detected, send for first- and second-line line probe assay and culture, and refer to the District DR-TB Centre.",
          ],
        },
        {
          heading: "3. Notification and treatment",
          points: [
            "**Notify on Ni-kshay** - a legal obligation for every provider - and register the patient for free drugs, follow-up and benefits.",
            "For drug-sensitive disease start **daily fixed dose combination therapy: 2 months of HRZE followed by 4 months of HRE**, dosed by weight band (25-39 kg two tablets, 40-54 kg three, 55-69 kg four, 70 kg and above five), taken once daily.",
            "Add **pyridoxine 10 mg daily**; counsel about orange urine, the need for alternative contraception because rifampicin inactivates oral contraceptives, and the danger of stopping treatment when he feels better.",
            "Arrange treatment adherence support - a treatment supporter with 99DOTS or family-observed treatment - and give the patient the full patient-wise box with a treatment card.",
            "If HIV positive, start cotrimoxazole preventive therapy and antiretroviral therapy within two weeks irrespective of CD4 count.",
          ],
        },
        {
          heading: "4. Follow-up and monitoring",
          points: [
            "Clinical review monthly with weight recorded at every visit and the **weight band revised upward as he gains weight**.",
            "**Follow-up sputum smear at the end of the intensive phase (month 2) and at the end of treatment (month 6)**; a positive smear at the end of the intensive phase prompts repeat NAAT with drug susceptibility testing rather than extension of the intensive phase.",
            "Sputum positive at month 5 or later defines treatment failure, requiring re-evaluation with DST and a change of regimen.",
            "Watch for adverse effects: jaundice and vomiting (hepatitis - stop hepatotoxic drugs), visual blurring or colour disturbance (ethambutol), tingling feet (isoniazid neuropathy), and joint pains (pyrazinamide).",
            "Record the outcome at the end of treatment as cured, treatment completed, failed, died, lost to follow-up or not evaluated.",
          ],
        },
        {
          heading: "5. Prevention, contacts and social support",
          points: [
            "**Household contact investigation**: symptom screening of all contacts, chest radiograph and NAAT for the symptomatic, and TB preventive treatment for eligible contacts after active disease has been excluded.",
            "**Ni-kshay Poshan Yojana** pays Rs 1,000 per month by direct benefit transfer for the whole duration of treatment, with an energy-dense nutritional supplement for the undernourished.",
            "**Pradhan Mantri TB Mukt Bharat Abhiyaan** links the patient to a Ni-kshay Mitra who provides a monthly food basket and support.",
            "Infection control at home: cough hygiene, disposal of sputum, cross-ventilation and sunlight; reassure the family that infectivity falls rapidly once effective treatment starts.",
            "Address the drivers - undernutrition, diabetes control, tobacco and alcohol cessation - and screen the household for diabetes and HIV where indicated.",
          ],
        },
      ],
      mustDraw: [
        "The NTEP diagnostic algorithm from presumptive TB through upfront NAAT to rifampicin-sensitive and rifampicin-resistant arms.",
        "A weight-band table showing the number of intensive and continuation phase FDC tablets.",
      ],
      markSplit: [
        { part: "Presumptive TB definition, history and examination", marks: 2 },
        { part: "Diagnostic algorithm with NAAT and UDST", marks: 2 },
        { part: "Notification and regimen with weight bands", marks: 2 },
        { part: "Follow-up, adverse effects and outcomes", marks: 2 },
        { part: "Contacts, prevention and social support schemes", marks: 2 },
      ],
      keywords: ["NTEP", "CBNAAT", "2HRZE 4HRE", "Ni-kshay", "Ni-kshay Poshan Yojana"],
    },
    {
      id: "respiratory-tuberculosis-ntep-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on multidrug-resistant tuberculosis: definition, diagnosis and current management in India.",
      openingLines: [
        "Multidrug-resistant tuberculosis is disease caused by Mycobacterium tuberculosis resistant to at least isoniazid and rifampicin; rifampicin-resistant tuberculosis detected on a molecular test is managed in the same way.",
        "India has one of the largest burdens of drug-resistant tuberculosis in the world, and programmatic management is delivered through District and Nodal DR-TB Centres with free drugs and active drug-safety monitoring.",
      ],
      answer: [
        {
          heading: "Definitions",
          points: [
            "MDR-TB: resistance to at least isoniazid and rifampicin. RR-TB: rifampicin resistance with or without resistance to other drugs.",
            "Pre-XDR-TB: MDR/RR-TB with additional resistance to any fluoroquinolone.",
            "XDR-TB (2021 definition): MDR/RR-TB with fluoroquinolone resistance plus resistance to at least one other Group A drug, that is bedaquiline or linezolid.",
            "Resistance may be primary (transmitted) or acquired (from inadequate treatment, irregular intake, single-drug addition or under-dosing).",
          ],
        },
        {
          heading: "Diagnosis",
          points: [
            "**Universal drug susceptibility testing:** every diagnosed patient has rifampicin resistance tested upfront by CBNAAT or Truenat MTB-RIF Dx.",
            "Rifampicin resistance triggers first- and second-line line probe assay and liquid culture with phenotypic DST for fluoroquinolones, bedaquiline, linezolid and other drugs.",
            "Groups at higher risk: previously treated patients, treatment failures, contacts of known drug-resistant cases, and patients not improving on first-line therapy.",
          ],
        },
        {
          heading: "Treatment",
          points: [
            "**BPaLM - bedaquiline, pretomanid, linezolid and moxifloxacin for 6 months** - is the preferred regimen for eligible patients aged 15 years and over with MDR/RR-TB or pre-XDR-TB; where the fluoroquinolone is resistant, moxifloxacin is dropped to give BPaL.",
            "Ineligible patients (pregnancy and lactation, central nervous system, bone or disseminated disease, prior exposure of over a month to the component drugs) receive the shorter oral bedaquiline-containing regimen of 9-11 months or the longer oral regimen of 18-20 months.",
            "The longer regimen is constructed from Group A (levofloxacin or moxifloxacin, bedaquiline, linezolid), Group B (clofazimine, cycloserine) and Group C drugs to make up an effective combination.",
            "All drugs are free, treatment is supported and monitored, and adherence support and counselling are essential because the treatment is long and toxic.",
          ],
        },
        {
          heading: "Monitoring and prevention",
          points: [
            "Monthly sputum culture, **ECG for QTc** with bedaquiline, moxifloxacin and clofazimine, monthly blood counts and neurological and visual checks for linezolid, thyroid function on ethionamide and PAS, and liver and renal function.",
            "Active drug-safety monitoring with reporting of serious adverse events; dose modification or drug substitution rather than abandonment of the regimen.",
            "Prevention rests on early diagnosis, correct first-line treatment with weight-band dosing, never adding a single drug to a failing regimen, contact investigation, and airborne infection control.",
          ],
        },
      ],
      mustDraw: ["A table of MDR, pre-XDR and XDR definitions with the corresponding Indian regimen."],
      markSplit: [
        { part: "Definitions including pre-XDR and XDR", marks: 1.5 },
        { part: "Diagnosis and universal DST", marks: 1 },
        { part: "BPaLM and alternative regimens", marks: 1.5 },
        { part: "Monitoring and prevention", marks: 1 },
      ],
      keywords: ["MDR-TB", "BPaLM", "bedaquiline", "pre-XDR", "line probe assay"],
    },
    {
      id: "respiratory-tuberculosis-ntep-t3",
      paper: "II",
      kind: "chart-flow",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Draw and explain the flow chart for the management of anti-tuberculosis drug-induced hepatitis.",
      openingLines: [
        "Drug-induced hepatitis is the commonest serious adverse effect of first-line anti-tuberculosis treatment and is caused chiefly by isoniazid, rifampicin and pyrazinamide.",
        "It is defined as a rise in alanine aminotransferase to more than three times the upper limit of normal with symptoms, or more than five times without symptoms, or a rise in bilirubin with jaundice, once other causes have been considered.",
      ],
      answer: [
        {
          heading: "Recognition",
          points: [
            "Anorexia, nausea, vomiting, right upper quadrant pain, jaundice or dark urine appearing in the first two months of treatment.",
            "Check liver function, bilirubin, prothrombin time, and exclude viral hepatitis A, B and E, alcohol, other hepatotoxic drugs and biliary disease.",
            "Higher risk in undernutrition, alcohol use, pre-existing liver disease, hepatitis B or C, HIV, older age and slow acetylators.",
          ],
        },
        {
          heading: "Immediate action",
          points: [
            "**Stop all hepatotoxic anti-tuberculosis drugs (H, R and Z) immediately.**",
            "If the disease is severe or sputum positive and treatment cannot be interrupted, cover with a non-hepatotoxic holding regimen such as levofloxacin, ethambutol and an aminoglycoside under specialist advice.",
            "Support with hydration and nutrition, monitor prothrombin time and sensorium, and admit if there is encephalopathy or coagulopathy, which indicates acute liver failure.",
          ],
        },
        {
          heading: "Reintroduction",
          points: [
            "Wait until **ALT falls below twice the upper limit of normal and bilirubin normalises** and symptoms settle.",
            "Reintroduce sequentially with liver function monitoring: **rifampicin first, then isoniazid after 3-7 days, then pyrazinamide** last.",
            "If hepatitis recurs on reintroduction, the offending drug is dropped permanently and the regimen is reconstructed and prolonged accordingly - commonly a pyrazinamide-free regimen of 2HRE + 7HR.",
            "Counsel about alcohol, paracetamol dose limits and traditional or over-the-counter remedies, and follow liver function until it has normalised.",
          ],
        },
      ],
      mustDraw: [
        "A flow chart: symptoms or raised ALT, stop H R Z, exclude other causes, holding regimen if needed, wait for ALT under twice normal, sequential reintroduction R then H then Z, and the branch for recurrence.",
      ],
      markSplit: [
        { part: "Definition and recognition", marks: 1.5 },
        { part: "Immediate action and holding regimen", marks: 1.5 },
        { part: "Sequential reintroduction with thresholds", marks: 2 },
      ],
      keywords: ["drug-induced hepatitis", "ALT", "holding regimen", "sequential reintroduction", "pyrazinamide"],
    },
  ],
  mcqs: [
    {
      id: "respiratory-tuberculosis-ntep-q1",
      stem: "A 40-year-old man with cough for three weeks has a sputum Xpert MTB/RIF reported as 'MTB detected, rifampicin resistance detected'. What is the correct next step under NTEP?",
      options: [
        "Start 2HRZE + 4HRE and repeat the test after two months",
        "Refer to the District or Nodal DR-TB Centre for second-line line probe assay, culture DST and an appropriate regimen",
        "Add levofloxacin to the standard first-line regimen",
        "Start streptomycin-based retreatment (Category II)",
        "Repeat the Xpert on a second sample before any action, and start no treatment meanwhile",
      ],
      answer: 1,
      explanation:
        "Rifampicin resistance on a molecular test defines RR-TB, which is managed as multidrug-resistant disease: the patient must be referred for second-line testing and started on a programme regimen such as BPaLM at a DR-TB centre. Giving a first-line regimen exposes the patient to functional monotherapy and amplifies resistance. Adding a single drug to a failing regimen is the classic way resistance is manufactured. The streptomycin-based Category II retreatment regimen was withdrawn from the programme in 2021. Repeating the test may occasionally be done for discordant results, but treatment must not be withheld while the patient is referred.",
      difficulty: "easy",
    },
    {
      id: "respiratory-tuberculosis-ntep-q2",
      stem: "A 52 kg man with newly diagnosed drug-sensitive pulmonary tuberculosis is started on treatment. Which regimen and dose is correct under the current NTEP?",
      options: [
        "Three FDC tablets daily: 2 months HRZE then 4 months HRE",
        "Four FDC tablets daily: 2 months HRZE then 4 months HR",
        "Three FDC tablets thrice weekly: 2 months HRZE then 4 months HR",
        "Two FDC tablets daily: 2 months HRZE then 4 months HRE",
        "Four FDC tablets daily: 3 months HRZE then 5 months HRE",
      ],
      answer: 0,
      explanation:
        "The 40-54 kg weight band receives three fixed dose combination tablets daily, and the Indian regimen retains ethambutol in the continuation phase, so it is written 2HRZE followed by 4HRE. Four tablets belong to the 55-69 kg band, and a continuation phase of HR alone is the WHO formulation, not the Indian one. Thrice-weekly intermittent therapy was abandoned by the programme in 2017 in favour of daily therapy. Routine extension of the intensive phase to three months is no longer part of the programme.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-tuberculosis-ntep-q3",
      stem: "A 28-year-old woman on 2HRZE develops nausea and jaundice in week 6. ALT is 320 U/L (upper limit 40), bilirubin 4.2 mg/dL, and viral markers are negative. What is the correct management?",
      options: [
        "Continue all drugs and add a hepatoprotective agent",
        "Stop isoniazid alone and continue rifampicin, pyrazinamide and ethambutol",
        "Stop isoniazid, rifampicin and pyrazinamide, and reintroduce sequentially once ALT falls below twice normal",
        "Substitute rifampicin with rifabutin and continue the rest",
        "Stop all drugs permanently and treat with fluoroquinolone monotherapy",
      ],
      answer: 2,
      explanation:
        "This is drug-induced hepatitis, and all three hepatotoxic drugs - isoniazid, rifampicin and pyrazinamide - must be stopped, with sequential reintroduction (rifampicin, then isoniazid, then pyrazinamide) once ALT is below twice the upper limit and bilirubin has normalised. Continuing the drugs with a so-called hepatoprotective agent risks acute liver failure and has no evidence base. Stopping isoniazid alone leaves two hepatotoxic drugs running. Rifabutin is also hepatotoxic and is used for interaction problems, not hepatitis. Fluoroquinolone monotherapy would create resistance; if cover is needed while the liver recovers, a non-hepatotoxic multi-drug holding regimen is used.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-tuberculosis-ntep-q4",
      stem: "A patient completing the intensive phase of treatment for smear-positive pulmonary tuberculosis has a follow-up sputum smear that is still positive at the end of month 2. What is the correct action under current NTEP policy?",
      options: [
        "Extend the intensive phase by one month and repeat the smear",
        "Declare treatment failure and start a second-line regimen",
        "Send a specimen for repeat NAAT with drug susceptibility testing, review adherence, and move to the continuation phase",
        "Add streptomycin for one month",
        "Repeat the whole intensive phase from the beginning",
      ],
      answer: 2,
      explanation:
        "The programme no longer extends the intensive phase; a positive smear at the end of the intensive phase is an indication to repeat molecular testing with drug susceptibility testing and to look hard at adherence, while the patient moves into the continuation phase. Treatment failure is defined by positivity at month 5 or later, so it cannot be declared at month 2, and second-line drugs must never be started without evidence of resistance. Adding streptomycin is single-drug addition to a possibly failing regimen. Restarting the intensive phase has no basis in the guidelines.",
      difficulty: "hard",
    },
    {
      id: "respiratory-tuberculosis-ntep-q5",
      stem: "A 30-year-old woman on rifampicin-containing anti-tuberculosis treatment is taking a combined oral contraceptive pill. What advice should she be given?",
      options: [
        "The pill remains fully effective and no change is needed",
        "Rifampicin induces hepatic enzymes and reduces contraceptive efficacy, so an alternative or additional method is needed",
        "She should double the dose of the pill and continue",
        "She should stop rifampicin and take a rifampicin-free regimen",
        "She should stop the pill and rely on the natural infertility caused by tuberculosis",
      ],
      answer: 1,
      explanation:
        "Rifampicin is a potent inducer of cytochrome P450 enzymes and accelerates the metabolism of oestrogen and progestogen, causing contraceptive failure, so she needs an alternative such as an intrauterine device, an injectable, or barrier methods, and this must be discussed at the first visit. Doubling the pill is not a reliable or recommended fix. Rifampicin is essential to the regimen and is never dropped for this reason. Tuberculosis does not confer contraceptive protection, and unintended pregnancy on treatment is a real and avoidable problem.",
      difficulty: "easy",
    },
    {
      id: "respiratory-tuberculosis-ntep-q6",
      stem: "A newly diagnosed patient with pulmonary tuberculosis is also found to be HIV positive with a CD4 count of 180 cells/microlitre. When should antiretroviral therapy be started?",
      options: [
        "Immediately, on the same day as anti-tuberculosis treatment",
        "Within two weeks of starting anti-tuberculosis treatment",
        "After completing the intensive phase",
        "After completing the full six months of anti-tuberculosis treatment",
        "Only if the CD4 count falls below 100 cells/microlitre",
      ],
      answer: 1,
      explanation:
        "National and WHO guidance is to start anti-tuberculosis treatment first and add antiretroviral therapy within two weeks, irrespective of the CD4 count, because early ART reduces mortality; the exception is tuberculous meningitis, where ART is deferred by four to eight weeks because of the danger of paradoxical inflammatory worsening. Starting both on the same day increases the pill burden, the risk of overlapping toxicity and immune reconstitution disease without added benefit. Deferring ART to the end of the intensive phase or the end of treatment increases mortality, and waiting for a lower CD4 count is contrary to the treat-all policy.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-tuberculosis-ntep-q7",
      stem: "Under Ni-kshay Poshan Yojana, what nutritional support is a notified tuberculosis patient entitled to at present?",
      options: [
        "Rs 500 per month for the first two months only",
        "Rs 1,000 per month by direct benefit transfer for the entire duration of treatment",
        "A one-time payment of Rs 5,000 at diagnosis",
        "Free rations from the public distribution system in place of any cash transfer",
        "Rs 1,000 per month only for drug-resistant tuberculosis patients",
      ],
      answer: 1,
      explanation:
        "The nutritional support incentive was doubled from Rs 500 to Rs 1,000 per month with effect from November 2024 and is paid by direct benefit transfer into an Aadhaar-linked account for the whole duration of treatment, for every notified patient including those treated in the private sector. It is not restricted to the intensive phase, is not a lump sum, and is not restricted to drug-resistant disease, although treatment supporters for drug-resistant patients receive a higher honorarium. Food baskets from Ni-kshay Mitras under Pradhan Mantri TB Mukt Bharat Abhiyaan are additional to, not a replacement for, the cash transfer.",
      difficulty: "easy",
    },
    {
      id: "respiratory-tuberculosis-ntep-q8",
      stem: "Which of the following patients with MDR-TB is eligible for the BPaLM regimen under the current Indian programme?",
      options: [
        "A 30-year-old pregnant woman with pulmonary MDR-TB",
        "A 17-year-old boy with pulmonary MDR-TB and fluoroquinolone-sensitive isolate, no prior exposure to bedaquiline or linezolid",
        "A 45-year-old man with MDR tuberculous meningitis",
        "A 50-year-old woman who has taken bedaquiline for four months previously",
        "A 12-year-old child with pulmonary MDR-TB",
      ],
      answer: 1,
      explanation:
        "BPaLM is offered to patients aged 15 years and over with pulmonary MDR/RR-TB or pre-XDR-TB, provided there has been less than one month of previous exposure to bedaquiline, pretomanid, linezolid or delamanid, and it is the boy in this list who fits. Pregnancy and lactation are exclusions. Central nervous system, osteoarticular and disseminated disease are excluded because pretomanid penetration and evidence are inadequate. Four months of previous bedaquiline exposure disqualifies a patient, and children under 15 are treated with other regimens.",
      difficulty: "hard",
    },
  ],
  cards: [
    {
      id: "respiratory-tuberculosis-ntep-c1",
      front: "Definition of presumptive pulmonary tuberculosis under NTEP.",
      back: "Cough of two weeks or more, fever of two weeks or more, significant weight loss, haemoptysis, or any chest radiograph abnormality; cough of any duration in PLHIV, contacts and other high-risk groups.",
    },
    {
      id: "respiratory-tuberculosis-ntep-c2",
      front: "The first-line regimen and its duration in India.",
      back: "2 months of daily HRZE followed by 4 months of daily HRE (ethambutol is retained in the continuation phase); 12 months total for TB meningitis and osteoarticular disease.",
    },
    {
      id: "respiratory-tuberculosis-ntep-c3",
      front: "Adult weight bands and number of FDC tablets per day.",
      back: "25-39 kg two tablets, 40-54 kg three, 55-69 kg four, 70 kg and above five - re-check the band at every visit as the patient gains weight.",
    },
    {
      id: "respiratory-tuberculosis-ntep-c4",
      front: "What is universal drug susceptibility testing?",
      back: "Every diagnosed TB patient must have rifampicin susceptibility tested at diagnosis, which the upfront NAAT (CBNAAT or Truenat) provides.",
    },
    {
      id: "respiratory-tuberculosis-ntep-c5",
      front: "When are follow-up sputum smears done in drug-sensitive pulmonary TB?",
      back: "At the end of the intensive phase (month 2) and at the end of treatment (month 6), plus any time the patient deteriorates.",
    },
    {
      id: "respiratory-tuberculosis-ntep-c6",
      front: "Definition of treatment failure.",
      back: "Sputum smear or culture positive at month 5 or later during treatment (or bacteriological or clinical evidence of failure at any time), prompting DST and a change of regimen.",
    },
    {
      id: "respiratory-tuberculosis-ntep-c7",
      front: "Definition of lost to follow-up.",
      back: "A patient whose treatment was interrupted for one consecutive month or more.",
    },
    {
      id: "respiratory-tuberculosis-ntep-c8",
      front: "MDR, pre-XDR and XDR in one line each.",
      back: "MDR: resistance to at least H and R. Pre-XDR: MDR/RR plus fluoroquinolone resistance. XDR: MDR/RR plus fluoroquinolone resistance plus resistance to bedaquiline or linezolid.",
    },
    {
      id: "respiratory-tuberculosis-ntep-c9",
      front: "What is the BPaLM regimen and how long is it given?",
      back: "Bedaquiline, pretomanid, linezolid and moxifloxacin for 6 months, for eligible MDR/RR and pre-XDR patients aged 15 and above; drop moxifloxacin (BPaL) if fluoroquinolone-resistant.",
    },
    {
      id: "respiratory-tuberculosis-ntep-c10",
      front: "Adverse effect of ethambutol and how it is monitored.",
      back: "Dose-related retrobulbar optic neuritis with loss of red-green colour discrimination; check visual acuity and colour vision at baseline and periodically, and stop the drug at the first symptom.",
    },
    {
      id: "respiratory-tuberculosis-ntep-c11",
      front: "How is drug-induced hepatitis on ATT restarted?",
      back: "Wait until ALT is under twice normal and bilirubin has normalised, then reintroduce sequentially - rifampicin first, then isoniazid, then pyrazinamide.",
    },
    {
      id: "respiratory-tuberculosis-ntep-c12",
      front: "Ni-kshay Poshan Yojana entitlement now.",
      back: "Rs 1,000 per month (doubled from Rs 500 in November 2024) by direct benefit transfer for the whole duration of treatment, plus energy-dense nutritional supplement for the undernourished.",
    },
  ],
  references: [
    "National TB Elimination Programme, Training Modules for Programme Managers and Medical Officers, Central TB Division, MoHFW, 2020 with subsequent updates",
    "Guidelines for Programmatic Management of Drug-Resistant Tuberculosis in India, Central TB Division, 2021, with the 2024 BPaLM operational guidance",
    "India TB Report 2024, Central TB Division, MoHFW",
    "National TB Prevalence Survey in India 2019-2021, ICMR and Central TB Division",
    "WHO Consolidated Guidelines on Tuberculosis: Module 4 - Treatment of drug-resistant tuberculosis, 2022",
  ],
});

topics.push({
  id: "respiratory-pneumonia-cap",
  title: "Community-acquired pneumonia: CURB-65, empirical antibiotics and follow-up",
  oneLiner:
    "Community-acquired pneumonia is an acute lower respiratory infection acquired outside hospital with new radiographic consolidation, and the family physician's job is to decide the site of care using CURB-65 or CRB-65, start an appropriate empirical antibiotic within four hours, and know which patient will not get better at home.",
  frequency: "core",
  keywords: [
    "CAP",
    "CURB-65",
    "CRB-65",
    "Streptococcus pneumoniae",
    "atypical pneumonia",
    "amoxicillin",
    "azithromycin",
    "ceftriaxone",
    "parapneumonic effusion",
    "empyema",
    "pneumococcal vaccine",
    "IMNCI",
    "melioidosis",
    "aspiration pneumonia",
    "procalcitonin",
    "lung abscess",
  ],
  sections: [
    {
      heading: "Definition, organisms and the Indian context",
      points: [
        "**Definition:** an acute infection of the pulmonary parenchyma acquired outside a hospital or long-term care facility, with symptoms of an acute lower respiratory infection plus **new radiographic shadowing** for which there is no other explanation.",
        "The clinical picture is fever with rigors, cough with rusty or purulent sputum, pleuritic chest pain and breathlessness; the elderly often present atypically with confusion, a fall, poor feeding or simply tachypnoea with no fever.",
        "**Streptococcus pneumoniae** remains the single commonest and most lethal organism worldwide and in India; the other typical organisms are Haemophilus influenzae (in COPD), Staphylococcus aureus (post-influenza, cavitating, rapidly progressive), Klebsiella pneumoniae (diabetics and alcoholics, upper lobe with a bulging fissure) and Moraxella catarrhalis.",
        "**Atypical organisms** - Mycoplasma pneumoniae, Chlamydophila pneumoniae and Legionella pneumophila - produce a subacute illness with prominent dry cough, headache and myalgia, and radiographic changes out of proportion to the chest findings; they do not respond to beta-lactams.",
        "**The Indian differentials that must be part of the answer:** pulmonary tuberculosis in any subacute pneumonia (send sputum for NAAT if the illness has lasted over two weeks or does not resolve), scrub typhus and other rickettsial disease in an undifferentiated fever with pneumonitis (add doxycycline), melioidosis in a diabetic from a coastal or agricultural area, and leptospirosis with pulmonary haemorrhage in the monsoon.",
        "Risk factors worth eliciting: age over 65, smoking, COPD and bronchiectasis, diabetes, chronic kidney or liver disease, heart failure, HIV and other immunosuppression, alcohol excess, aspiration risk from stroke or altered sensorium, poor dentition, and biomass smoke exposure.",
      ],
    },
    {
      heading: "Assessing severity and deciding where to treat",
      points: [
        "**CURB-65 gives one point each for: Confusion (new disorientation in person, place or time, or an Abbreviated Mental Test score of 8 or less), Urea above 7 mmol/L (about 19-20 mg/dL blood urea), Respiratory rate 30 per minute or more, Blood pressure systolic under 90 mmHg or diastolic 60 mmHg or less, and age 65 years or over.**",
        "**Interpretation:** score 0-1 is low mortality and suitable for home treatment; score 2 means intermediate risk and needs hospital-supervised care or a short admission; score 3 or more is severe pneumonia requiring admission, with scores of 4-5 prompting assessment for intensive care.",
        "**CRB-65 drops the urea** and is the version to use in a clinic without a laboratory: 0 treat at home, 1-2 refer for hospital assessment, 3-4 arrange urgent admission.",
        "Neither score replaces clinical judgement: hypoxaemia (SpO2 under 92% on room air), multilobar involvement, an effusion, decompensated comorbidity, vomiting that prevents oral therapy, and an unsupported social situation are all independent reasons to admit whatever the score.",
        "Additional markers of severe pneumonia used in hospital: PaO2/FiO2 ratio under 250, need for vasopressors or mechanical ventilation, leucopenia, thrombocytopenia, hypothermia and acidosis.",
        "**In children the assessment is by the WHO and IMNCI criteria** - fast breathing by age (60 per minute or more under 2 months, 50 or more from 2-12 months, 40 or more from 1-5 years) defines pneumonia, and chest indrawing, stridor at rest, inability to drink, convulsion, lethargy or severe undernutrition defines severe pneumonia requiring referral.",
      ],
    },
    {
      heading: "Investigation - and what is worth doing at each level",
      points: [
        "**Chest radiograph (posteroanterior)** is the confirmatory investigation and should be obtained in every patient in whom the diagnosis is being made, both to confirm consolidation and to detect an effusion, cavitation, a mass or multilobar disease.",
        "Pulse oximetry on room air in every patient - the single most useful bedside number, and the one that decides admission more often than the score does.",
        "In an ambulatory patient with a clear picture, no further investigation is required. For the admitted patient: complete blood count, urea, creatinine, electrolytes, glucose, liver function, C-reactive protein, blood cultures before antibiotics, sputum Gram stain and culture, and HIV testing where relevant.",
        "**Sputum for NAAT or acid-fast bacilli** whenever the illness has lasted more than two weeks, when there is weight loss or haemoptysis, or when the radiograph shows upper lobe or cavitary disease - the reflex an Indian examiner expects.",
        "Test for influenza and SARS-CoV-2 in season; consider Legionella urinary antigen in severe pneumonia, and paired serology or PCR for Mycoplasma only if it changes management.",
        "Procalcitonin can support antibiotic de-escalation where available, but it must not be used to withhold antibiotics in a patient who looks septic. A radiograph that appears normal early in a dehydrated or neutropenic patient does not exclude pneumonia.",
      ],
    },
    {
      heading: "Empirical antibiotic treatment",
      points: [
        "**Outpatient, previously healthy, no antibiotic in the last three months:** amoxicillin 500 mg to 1 g orally three times daily for 5 days; add or substitute a macrolide (azithromycin 500 mg once daily for 3-5 days, or doxycycline 100 mg twice daily) if atypical infection is suspected.",
        "**Outpatient with comorbidity** (COPD, diabetes, heart, liver or kidney disease, alcohol excess, immunosuppression, or recent antibiotics): amoxicillin-clavulanate 625 mg three times daily (or cefuroxime 500 mg twice daily) **plus** azithromycin 500 mg once daily, or a respiratory fluoroquinolone as an alternative.",
        "**Inpatient, non-severe:** ceftriaxone 1-2 g intravenously once daily plus azithromycin 500 mg; **severe or intensive care:** ceftriaxone or piperacillin-tazobactam plus a macrolide, with the addition of anti-MRSA or antipseudomonal cover only where there are specific risk factors.",
        "**Fluoroquinolones are deliberately kept as a second choice in India** because they treat tuberculosis partially, delay its diagnosis and select for resistance; this reasoning is worth writing out in an answer.",
        "**Duration is 5 days** in most patients, provided the patient has been afebrile for 48-72 hours and is clinically stable (no more than one of: temperature above 37.8 C, pulse above 100, respiratory rate above 24, systolic BP under 90, SpO2 under 90%, inability to eat, altered mental state). Longer courses are needed for Staphylococcus aureus, Pseudomonas, cavitation, empyema and lung abscess.",
        "**Aspiration pneumonia** in a patient with stroke, seizure, alcohol excess or poor dentition: amoxicillin-clavulanate, or clindamycin where there is penicillin allergy; anaerobic cover is not routinely needed for simple aspiration pneumonitis without necrotising features.",
        "Supportive care matters: oxygen for SpO2 under 92% (88-92% in known COPD), fluids, paracetamol, early mobilisation, glycaemic control, and thromboprophylaxis in the admitted patient. Chest physiotherapy has no role in uncomplicated pneumonia, and cough suppressants should be avoided.",
      ],
    },
    {
      heading: "Follow-up, non-resolving pneumonia and prevention",
      points: [
        "Review the ambulatory patient at **48-72 hours**; most improve by then, and failure to do so demands reassessment rather than a change of antibiotic by telephone.",
        "**Causes of non-resolving pneumonia - the list to have ready:** wrong organism (tuberculosis, fungus, atypicals, viruses), resistant organism, a complication (parapneumonic effusion, empyema, lung abscess), an obstructing endobronchial lesion such as carcinoma or a foreign body, the wrong diagnosis (pulmonary embolism, pulmonary oedema, eosinophilic pneumonia, vasculitis, organising pneumonia, malignancy), an immunocompromised host, or simply inadequate dose or non-adherence.",
        "**Any parapneumonic effusion should be tapped under ultrasound guidance**: pH under 7.20, glucose under 40-60 mg/dL, LDH above 1000 IU/L, positive Gram stain or culture, or frank pus indicate a complicated effusion or empyema requiring intercostal drainage.",
        "**Repeat the chest radiograph at 6 weeks** in smokers, in those over 50, and in anyone with persistent symptoms, to confirm resolution and to exclude an underlying malignancy - radiographic clearance always lags behind clinical recovery.",
        "**Prevention:** pneumococcal vaccination (PCV in the Universal Immunisation Programme for children; PCV followed by PPSV23 for adults over 65 and for those with chronic heart, lung, liver or kidney disease, diabetes, asplenia, cochlear implants, cerebrospinal fluid leak or immunosuppression), annual influenza vaccine, COVID-19 vaccine as per policy, smoking cessation, oral and dental hygiene, and swallowing assessment after stroke.",
        "Counsel about the natural history so expectations are realistic: fever settles in about a week, chest pain and sputum in about four weeks, cough and fatigue may take six weeks to three months, and full recovery can take six months in the elderly.",
      ],
    },
  ],
  tables: [
    {
      heading: "CURB-65 score, mortality and site of care",
      columns: ["Score", "Approximate 30-day mortality", "Recommended site of care"],
      rows: [
        ["0", "Under 1%", "Home treatment with oral antibiotics"],
        ["1", "About 2-3%", "Home treatment if oxygenation and social circumstances allow"],
        ["2", "About 9%", "Hospital-supervised or short inpatient care"],
        ["3", "About 15-22%", "Admit as severe pneumonia"],
        ["4-5", "About 30-40%", "Admit and assess for intensive care"],
      ],
    },
    {
      heading: "Empirical antibiotic choice by setting",
      columns: ["Setting", "First choice", "Alternative", "Duration"],
      rows: [
        ["Outpatient, no comorbidity", "Amoxicillin 500 mg-1 g PO TDS", "Doxycycline 100 mg PO BD or azithromycin 500 mg PO OD", "5 days"],
        ["Outpatient with comorbidity", "Amoxicillin-clavulanate 625 mg PO TDS plus azithromycin 500 mg PO OD", "Levofloxacin 750 mg PO OD (second line in India)", "5-7 days"],
        ["Inpatient, non-severe", "Ceftriaxone 1-2 g IV OD plus azithromycin 500 mg", "Amoxicillin-clavulanate IV plus macrolide", "5-7 days"],
        ["Severe or ICU", "Ceftriaxone or piperacillin-tazobactam IV plus macrolide", "Add anti-MRSA or antipseudomonal cover if risk factors", "7 days or more"],
        ["Suspected aspiration", "Amoxicillin-clavulanate 1.2 g IV TDS", "Clindamycin if penicillin-allergic", "5-7 days, longer if necrotising"],
      ],
    },
    {
      heading: "Clinical clues to the organism",
      columns: ["Clue", "Suspected organism"],
      rows: [
        ["Rusty sputum, rigors, lobar consolidation, herpes labialis", "Streptococcus pneumoniae"],
        ["Upper lobe consolidation with bulging fissure, red-currant jelly sputum, diabetic or alcoholic", "Klebsiella pneumoniae"],
        ["Cavitating pneumonia after influenza, rapid deterioration", "Staphylococcus aureus"],
        ["Dry cough, headache, myalgia, extrapulmonary features, cold agglutinins", "Mycoplasma pneumoniae"],
        ["Confusion, diarrhoea, hyponatraemia, deranged liver function, air-conditioning or water exposure", "Legionella pneumophila"],
        ["Diabetic from a coastal or paddy-farming area with abscesses and septicaemia", "Burkholderia pseudomallei (melioidosis)"],
        ["Subacute cough over weeks, weight loss, upper lobe or cavitary shadow", "Mycobacterium tuberculosis"],
      ],
    },
  ],
  redFlags: [
    "CURB-65 score of 3 or more, or a CRB-65 of 3-4 in the clinic - severe pneumonia, arrange admission now.",
    "SpO2 below 92% on room air (below 90% in a known COPD patient) or a respiratory rate of 30 or more - admit regardless of the score.",
    "New confusion in an elderly patient with fever or cough - this is often the only presentation of pneumonia and carries a high mortality.",
    "Systolic blood pressure under 90 mmHg, capillary refill over 3 seconds or a lactate above 2 mmol/L - sepsis; start the sepsis bundle including antibiotics within one hour.",
    "Pleuritic pain with dullness and reduced breath sounds - parapneumonic effusion or empyema, needs ultrasound and diagnostic aspiration.",
    "No improvement after 48-72 hours of appropriate antibiotics - reassess for empyema, tuberculosis, obstruction, resistance or an alternative diagnosis.",
    "Chest indrawing, stridor at rest, inability to drink, convulsion or lethargy in a child - severe pneumonia by IMNCI, refer urgently after the first dose of antibiotic.",
    "Cavitary or upper lobe shadowing with weight loss and cough over two weeks - investigate for tuberculosis before repeated courses of antibiotics.",
  ],
  pearls: [
    "Say CURB-65 in full - Confusion, Urea over 7 mmol/L, Respiratory rate 30 or more, Blood pressure under 90 systolic or 60 or less diastolic, and age 65 or over - and give the mortality bands with it.",
    "Use CRB-65 where there is no laboratory; it needs nothing but a history, a watch and a blood pressure cuff.",
    "Oxygen saturation trumps the score: a hypoxaemic patient with CURB-65 of 1 still needs admission.",
    "Five days of antibiotic is enough for most community-acquired pneumonia, provided the patient has been afebrile and stable for 48-72 hours.",
    "Reserve fluoroquinolones in India: they partially treat tuberculosis, mask it, delay its diagnosis and breed resistance.",
    "Any pneumonia that has not settled in two weeks needs a sputum NAAT for tuberculosis and a look at the radiograph for cavitation.",
    "Tap every significant parapneumonic effusion under ultrasound guidance - pH under 7.20 or frank pus means a chest tube, not another antibiotic.",
    "Repeat the chest radiograph at six weeks in smokers and in those over 50 to make sure a carcinoma is not hiding behind the consolidation.",
    "Radiological clearance lags clinical recovery; do not chase a persistent shadow at two weeks in a patient who feels well, and do not ignore one at six weeks in a patient who does not.",
  ],
  theory: [
    {
      id: "respiratory-pneumonia-cap-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 68-year-old man with type 2 diabetes presents to your clinic with fever, cough with purulent sputum and breathlessness for three days. Discuss your assessment of severity, investigations, treatment and follow-up.",
      openingLines: [
        "Community-acquired pneumonia is an acute infection of the lung parenchyma acquired outside hospital, with clinical features of a lower respiratory infection and new radiographic shadowing.",
        "In a 68-year-old diabetic the immediate question is not which antibiotic but where he should be treated, and that is answered by a severity score together with oxygen saturation and social circumstances.",
      ],
      answer: [
        {
          heading: "1. Assessment of severity",
          points: [
            "**CURB-65**: one point each for new confusion, blood urea above 7 mmol/L (about 19-20 mg/dL), respiratory rate 30 per minute or more, systolic BP under 90 or diastolic 60 mmHg or less, and age 65 years or over. He already scores 1 for age.",
            "Score 0-1 home, 2 hospital-supervised, 3 or more severe pneumonia needing admission and assessment for intensive care at 4-5.",
            "Where no laboratory is available use **CRB-65**: 0 home, 1-2 refer, 3-4 urgent admission.",
            "Override the score and admit for hypoxaemia (SpO2 under 92% on air), multilobar disease, effusion, uncontrolled diabetes or another decompensated comorbidity, vomiting, or an unsafe home situation.",
          ],
        },
        {
          heading: "2. Examination and investigations",
          points: [
            "Vital signs including respiratory rate and SpO2, hydration, mental state, capillary refill, and a full chest examination for consolidation, effusion and added sounds.",
            "**Chest radiograph** to confirm consolidation and identify effusion, cavitation, multilobar disease or a mass.",
            "Blood counts, urea, creatinine, electrolytes, blood sugar and HbA1c, liver function and C-reactive protein; blood cultures and sputum Gram stain with culture before antibiotics if admitted.",
            "**Sputum NAAT for tuberculosis** if the illness has lasted more than two weeks, or there is weight loss, haemoptysis or upper lobe or cavitary shadowing; test for influenza and SARS-CoV-2 in season.",
            "Look actively for diabetic decompensation: capillary glucose, urine ketones and an assessment for hyperosmolar state or ketoacidosis, both of which pneumonia commonly precipitates.",
          ],
        },
        {
          heading: "3. Treatment",
          points: [
            "**Antibiotics within four hours of the diagnosis** (within one hour if there is sepsis), after cultures where feasible.",
            "As an outpatient with comorbidity: amoxicillin-clavulanate 625 mg three times daily plus azithromycin 500 mg once daily; if admitted, ceftriaxone 1-2 g intravenously daily plus azithromycin.",
            "Duration 5-7 days, provided he is afebrile and clinically stable for 48-72 hours.",
            "Oxygen to a target SpO2 of 94-98% (88-92% if COPD coexists), adequate hydration, paracetamol for fever and pleuritic pain, and early mobilisation.",
            "Optimise glycaemic control with insulin if necessary during the acute illness, and stop metformin if he becomes hypotensive or dehydrated.",
          ],
        },
        {
          heading: "4. Monitoring and complications",
          points: [
            "Review at 48-72 hours if treated at home, and daily if admitted, with observations, saturation and mental state.",
            "**Non-resolving pneumonia** should prompt a search for empyema, lung abscess, tuberculosis, an obstructing lesion, a resistant organism, or a wrong diagnosis such as pulmonary embolism or cardiac failure.",
            "Any significant pleural effusion needs ultrasound-guided aspiration; pH under 7.20, glucose under 40-60 mg/dL, LDH over 1000 IU/L or pus require intercostal drainage.",
            "Other complications: sepsis and septic shock, acute kidney injury, acute respiratory distress syndrome, metastatic infection, and decompensation of diabetes and cardiac disease.",
          ],
        },
        {
          heading: "5. Follow-up and prevention",
          points: [
            "Repeat the chest radiograph at 6 weeks because of his age, to confirm resolution and exclude an underlying carcinoma.",
            "Vaccinate against pneumococcus (PCV followed by PPSV23) and influenza annually once he has recovered; give COVID-19 vaccination as per current policy.",
            "Advise on smoking cessation, oral hygiene, glycaemic control and nutrition, and explain the expected timeline of recovery so that a lingering cough does not lead to repeated antibiotic courses.",
          ],
        },
      ],
      mustDraw: [
        "A CURB-65 table with the five criteria, score bands, mortality and site of care.",
        "A table of empirical antibiotic choice by setting with doses and duration.",
      ],
      markSplit: [
        { part: "Definition and CURB-65 with interpretation", marks: 3 },
        { part: "Investigations including TB screening", marks: 2 },
        { part: "Antibiotics with doses and supportive care", marks: 3 },
        { part: "Complications, follow-up and prevention", marks: 2 },
      ],
      keywords: ["CURB-65", "amoxicillin-clavulanate", "parapneumonic effusion", "pneumococcal vaccine", "non-resolving pneumonia"],
    },
    {
      id: "respiratory-pneumonia-cap-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on non-resolving pneumonia: definition, causes and approach.",
      openingLines: [
        "Non-resolving pneumonia is pneumonia in which clinical improvement fails to occur within 48-72 hours of appropriate antibiotic treatment, or in which radiographic shadowing persists beyond about four weeks despite treatment.",
        "It is a common reason for referral and the correct response is a systematic re-evaluation of host, organism, drug and diagnosis, not an empirical escalation of antibiotics.",
      ],
      answer: [
        {
          heading: "Causes by category",
          points: [
            "**Host factors:** advanced age, diabetes, alcohol excess, malnutrition, HIV and other immunosuppression, chronic lung disease and heart failure, all of which slow resolution.",
            "**Organism factors:** tuberculosis (the first consideration in India), fungal infection, Nocardia, resistant bacteria, Legionella, and viral pneumonia.",
            "**Complications:** parapneumonic effusion, empyema, lung abscess, necrotising pneumonia and metastatic infection.",
            "**Obstruction:** bronchogenic carcinoma, an inhaled foreign body (especially in children), a broncholith or extrinsic compression by nodes.",
            "**Wrong diagnosis:** pulmonary embolism with infarction, cardiac failure, organising pneumonia, eosinophilic pneumonia, hypersensitivity pneumonitis, vasculitis, drug-induced lung disease and malignancy such as lymphoma or adenocarcinoma.",
            "**Drug factors:** wrong drug, inadequate dose, poor absorption, poor adherence and inadequate duration.",
          ],
        },
        {
          heading: "Approach",
          points: [
            "Re-take the history including occupation, travel, animal and bird exposure, drugs and immunosuppression, and re-examine for effusion, clubbing, lymphadenopathy and extrapulmonary signs.",
            "Repeat the chest radiograph and proceed to **contrast-enhanced CT of the chest**, which defines abscess, empyema, endobronchial obstruction, nodes and interstitial patterns.",
            "Send **sputum for NAAT and culture for mycobacteria**, fungal stain and culture, and blood cultures; test for HIV.",
            "**Ultrasound-guided pleural aspiration** for any effusion, with cell count, protein, LDH, glucose, pH, ADA, cytology, Gram stain, NAAT and culture.",
            "Refer for **bronchoscopy with lavage, brushings and biopsy** where obstruction, malignancy or an unusual infection is suspected, and consider CT-guided or surgical lung biopsy for persistent undiagnosed shadowing.",
          ],
        },
        {
          heading: "Principles of management",
          points: [
            "Treat what you find rather than escalating blindly; stop antibiotics if a non-infective cause is confirmed.",
            "Drain empyema early, treat tuberculosis under the programme, and refer suspected malignancy without delay.",
            "Reassess and address the host: glycaemic control, nutrition, alcohol, smoking, and immunosuppressive medication.",
          ],
        },
      ],
      mustDraw: ["A table of causes grouped as host, organism, complication, obstruction, wrong diagnosis and drug factors."],
      markSplit: [
        { part: "Definition", marks: 1 },
        { part: "Causes in grouped form", marks: 2 },
        { part: "Investigational approach", marks: 1.5 },
        { part: "Management principles", marks: 0.5 },
      ],
      keywords: ["non-resolving pneumonia", "empyema", "bronchoscopy", "endobronchial obstruction", "tuberculosis"],
    },
  ],
  mcqs: [
    {
      id: "respiratory-pneumonia-cap-q1",
      stem: "A 70-year-old woman has fever, cough and breathlessness for two days. She is oriented, respiratory rate 26/min, BP 118/76 mmHg, SpO2 95% on air, blood urea 34 mg/dL. Chest radiograph shows right lower lobe consolidation. What is her CURB-65 score and the appropriate site of care?",
      options: [
        "Score 1, treat at home",
        "Score 2, hospital-supervised care or short admission",
        "Score 3, admit as severe pneumonia",
        "Score 0, treat at home",
        "Score 4, admit to intensive care",
      ],
      answer: 1,
      explanation:
        "She scores one point for age 65 or over and one for a blood urea above 7 mmol/L (34 mg/dL is about 12 mmol/L), giving a CURB-65 of 2, which carries around 9% mortality and calls for hospital-supervised treatment or a short admission. She scores nothing for confusion, for a respiratory rate below 30, or for a blood pressure that is not hypotensive, so scores of 3 and 4 are wrong. Counting only the age or ignoring the urea underestimates her risk and would send home a patient with intermediate-risk pneumonia.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-pneumonia-cap-q2",
      stem: "A 34-year-old previously healthy man has fever, cough and left-sided pleuritic pain for two days. Respiratory rate 20/min, BP 124/80 mmHg, SpO2 97% on air, no confusion. Chest radiograph shows left lower lobe consolidation. Which is the most appropriate treatment?",
      options: [
        "Amoxicillin 500 mg to 1 g orally three times daily for 5 days at home",
        "Levofloxacin 750 mg orally once daily for 7 days at home",
        "Admission for intravenous ceftriaxone plus azithromycin",
        "Azithromycin alone for 3 days with no follow-up",
        "No antibiotic, as most pneumonia is viral",
      ],
      answer: 0,
      explanation:
        "This is low-severity community-acquired pneumonia (CURB-65 zero) in a previously healthy adult, so oral amoxicillin at home for five days with review at 48-72 hours is the correct treatment, covering the pneumococcus which is the commonest and most dangerous organism. A respiratory fluoroquinolone is deliberately avoided as a first choice in India because it partially treats and masks tuberculosis and drives resistance. Admission and intravenous therapy are unnecessary in a well-oxygenated, haemodynamically stable young man. Macrolide monotherapy without follow-up leaves pneumococcal resistance uncovered and abandons the essential 48-72 hour review, and radiographically confirmed consolidation with fever does require antibiotics.",
      difficulty: "easy",
    },
    {
      id: "respiratory-pneumonia-cap-q3",
      stem: "A 45-year-old man treated for four days with amoxicillin-clavulanate for right-sided pneumonia remains febrile with worsening pleuritic pain. Examination shows stony dullness and absent breath sounds at the right base. Ultrasound shows a moderate septated effusion. Aspirate is turbid with pH 7.05, glucose 30 mg/dL and LDH 2,400 IU/L. What is the correct management?",
      options: [
        "Continue the same antibiotic and repeat the radiograph in a week",
        "Change to a fluoroquinolone and observe",
        "Insert an intercostal drain and continue antibiotics",
        "Repeat therapeutic aspiration daily without a drain",
        "Start anti-tuberculosis treatment empirically",
      ],
      answer: 2,
      explanation:
        "A turbid effusion with pH under 7.20, glucose under 40-60 mg/dL and LDH above 1,000 IU/L is a complicated parapneumonic effusion or empyema, and the treatment is prompt intercostal tube drainage together with continued antibiotics, with intrapleural fibrinolytics or surgical referral if drainage is incomplete because of septations. Continuing antibiotics alone allows loculation and a fibrothorax. Changing the antibiotic class does not drain pus. Repeated needle aspiration is inadequate for a septated collection. Anti-tuberculosis treatment is not started empirically in an acutely septic patient with pus and a neutrophilic biochemistry pattern, though fluid should still be sent for mycobacterial testing.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-pneumonia-cap-q4",
      stem: "A 22-year-old student has had dry cough, headache and low-grade fever for ten days. The chest is nearly clear on auscultation but the radiograph shows bilateral patchy reticular shadowing. He has already taken amoxicillin for five days without improvement. Which is the most likely organism and treatment?",
      options: [
        "Streptococcus pneumoniae; increase the amoxicillin dose",
        "Mycoplasma pneumoniae; azithromycin or doxycycline",
        "Klebsiella pneumoniae; ceftriaxone",
        "Staphylococcus aureus; cloxacillin",
        "Pneumocystis jirovecii; cotrimoxazole",
      ],
      answer: 1,
      explanation:
        "A subacute illness in a young adult with prominent dry cough and headache, radiographic changes out of proportion to the chest findings, and failure to respond to a beta-lactam is the classical picture of Mycoplasma pneumoniae, which lacks a cell wall and therefore does not respond to penicillins; a macrolide or doxycycline is required. Pneumococcus produces lobar consolidation with rigors and rusty sputum and usually responds to amoxicillin. Klebsiella affects diabetics and alcoholics with upper lobe consolidation. Staphylococcal pneumonia is acute, cavitating and severe, typically after influenza. Pneumocystis would require immunosuppression, usually advanced HIV, with marked hypoxaemia on exertion.",
      difficulty: "easy",
    },
    {
      id: "respiratory-pneumonia-cap-q5",
      stem: "A 3-year-old child has cough and fever for two days, respiratory rate 46/min, no chest indrawing, is drinking well, and is playful between bouts of coughing. What is the appropriate action under IMNCI?",
      options: [
        "Classify as severe pneumonia and refer urgently",
        "Classify as pneumonia and give oral amoxicillin with home care advice and follow-up in 3 days",
        "Classify as no pneumonia and give a cough syrup",
        "Admit for intravenous antibiotics and oxygen",
        "Start anti-tuberculosis treatment",
      ],
      answer: 1,
      explanation:
        "In a child aged 1-5 years a respiratory rate of 40 per minute or more defines fast breathing and hence pneumonia, and in the absence of any danger sign the IMNCI classification is pneumonia, treated with oral amoxicillin at home with clear advice on when to return and a follow-up visit in three days. Severe pneumonia requires chest indrawing, stridor at rest, inability to drink, convulsion, lethargy or severe undernutrition, none of which is present. Calling it no pneumonia ignores the fast breathing, and cough syrups are not recommended in young children. Admission is not required for a feeding, alert child without hypoxaemia, and there is nothing here to suggest tuberculosis.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-pneumonia-cap-q6",
      stem: "A 55-year-old smoker was treated for left upper lobe pneumonia six weeks ago. He feels well now, but a repeat chest radiograph still shows persistent shadowing in the same area. What is the most appropriate next step?",
      options: [
        "Reassure and repeat the radiograph after one year",
        "Give another course of antibiotics for two weeks",
        "Arrange contrast-enhanced CT of the chest and refer for bronchoscopy",
        "Start empirical anti-tuberculosis treatment",
        "Start inhaled corticosteroids",
      ],
      answer: 2,
      explanation:
        "Persistent radiographic shadowing at six weeks in a smoker over 50 raises the possibility of an underlying bronchogenic carcinoma or an endobronchial lesion causing post-obstructive pneumonia, so CT of the chest with bronchoscopy is the appropriate next step; this is precisely why a six-week follow-up radiograph is recommended in this group. Reassurance and a one-year interval would delay a treatable cancer. Another antibiotic course treats an infection that has already resolved clinically. Anti-tuberculosis treatment should not be started empirically without an attempt at microbiological or histological diagnosis, though sputum for mycobacteria should certainly be sent alongside. Inhaled corticosteroids have no role in this problem.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-pneumonia-cap-q7",
      stem: "Which of the following is the strongest reason to avoid a respiratory fluoroquinolone as first-line empirical therapy for community-acquired pneumonia in India?",
      options: [
        "It has poor activity against Streptococcus pneumoniae",
        "It cannot be given orally",
        "It partially treats tuberculosis, delays its diagnosis and selects for fluoroquinolone-resistant Mycobacterium tuberculosis",
        "It is contraindicated in patients over 60 years",
        "It has no activity against atypical organisms",
      ],
      answer: 2,
      explanation:
        "Fluoroquinolones have good anti-tuberculous activity, so an empirical course can produce partial improvement in an undiagnosed tuberculosis patient, delay diagnosis by weeks, and select for fluoroquinolone resistance that later compromises second-line treatment of drug-resistant disease - a serious problem in a high-burden country. They are in fact highly active against pneumococcus and atypical organisms and have excellent oral bioavailability, which is why they are otherwise attractive. Age over 60 is a caution for tendinopathy and dysglycaemia, not an absolute contraindication, and is not the principal Indian argument.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "respiratory-pneumonia-cap-c1",
      front: "Expand CURB-65 with the exact thresholds.",
      back: "Confusion (new); Urea above 7 mmol/L (about 19-20 mg/dL); Respiratory rate 30/min or more; Blood pressure systolic under 90 or diastolic 60 mmHg or less; age 65 years or over.",
    },
    {
      id: "respiratory-pneumonia-cap-c2",
      front: "CURB-65 score bands and site of care.",
      back: "0-1 home; 2 hospital-supervised or short admission; 3 or more admit as severe; 4-5 assess for intensive care.",
    },
    {
      id: "respiratory-pneumonia-cap-c3",
      front: "What is CRB-65 and when is it used?",
      back: "CURB-65 without the urea, for use in a clinic with no laboratory: 0 home, 1-2 refer for assessment, 3-4 urgent admission.",
    },
    {
      id: "respiratory-pneumonia-cap-c4",
      front: "First-line antibiotic for low-severity CAP in a previously healthy adult.",
      back: "Amoxicillin 500 mg to 1 g orally three times daily for 5 days, with review at 48-72 hours.",
    },
    {
      id: "respiratory-pneumonia-cap-c5",
      front: "Antibiotic for outpatient CAP with comorbidity.",
      back: "Amoxicillin-clavulanate 625 mg TDS plus azithromycin 500 mg OD (or doxycycline), for 5-7 days.",
    },
    {
      id: "respiratory-pneumonia-cap-c6",
      front: "Criteria for clinical stability that allow stopping antibiotics at 5 days.",
      back: "Afebrile 48-72 hours plus no more than one of: temperature above 37.8 C, pulse above 100, respiratory rate above 24, systolic BP under 90, SpO2 under 90%, inability to eat, altered mental state.",
    },
    {
      id: "respiratory-pneumonia-cap-c7",
      front: "Pleural fluid findings that mandate a chest drain in pneumonia.",
      back: "Frank pus, positive Gram stain or culture, pH under 7.20, glucose under 40-60 mg/dL, or LDH above 1,000 IU/L.",
    },
    {
      id: "respiratory-pneumonia-cap-c8",
      front: "IMNCI fast-breathing thresholds by age.",
      back: "60/min or more under 2 months; 50/min or more from 2-12 months; 40/min or more from 1-5 years.",
    },
    {
      id: "respiratory-pneumonia-cap-c9",
      front: "Six categories of cause for non-resolving pneumonia.",
      back: "Host factors, wrong or resistant organism (think tuberculosis), complications such as empyema or abscess, endobronchial obstruction, a wrong diagnosis, and drug or adherence failure.",
    },
    {
      id: "respiratory-pneumonia-cap-c10",
      front: "Clue: upper lobe consolidation with a bulging fissure in an alcoholic diabetic.",
      back: "Klebsiella pneumoniae (Friedlander pneumonia), often with red-currant jelly sputum and a tendency to abscess formation.",
    },
    {
      id: "respiratory-pneumonia-cap-c11",
      front: "Who needs a repeat chest radiograph at six weeks after pneumonia?",
      back: "Smokers, patients over 50, and anyone with persisting symptoms - to confirm resolution and exclude an underlying malignancy.",
    },
    {
      id: "respiratory-pneumonia-cap-c12",
      front: "Vaccines that prevent community-acquired pneumonia in adults.",
      back: "Pneumococcal conjugate followed by polysaccharide vaccine in those over 65 or with chronic disease, annual influenza vaccine, and COVID-19 vaccine as per national policy.",
    },
  ],
  references: [
    "British Thoracic Society guideline for community-acquired pneumonia in adults, with 2015 annotations",
    "ATS/IDSA Guideline on the Diagnosis and Treatment of Adults with Community-acquired Pneumonia, 2019",
    "National Treatment Guidelines for Antimicrobial Use in Infectious Diseases, NCDC, MoHFW, and ICMR Treatment Guidelines for Antimicrobial Use, 2022",
    "Integrated Management of Neonatal and Childhood Illness (IMNCI) training modules, MoHFW",
    "API Textbook of Medicine, 11th edition, 2019 - respiratory infections",
  ],
});

topics.push({
  id: "respiratory-acute-cough-influenza-covid",
  title: "Acute cough, acute bronchitis, influenza-like illness and COVID-19 in the clinic",
  oneLiner:
    "An acute cough is one lasting under three weeks, is viral in more than nine of ten adults and needs no antibiotic; the family physician's job is to pick out the pneumonia, the influenza patient who needs oseltamivir today, the COVID-19 patient with silent hypoxaemia, and the cough that reaches fourteen days and becomes presumptive tuberculosis under NTEP.",
  frequency: "common",
  keywords: [
    "acute bronchitis",
    "influenza",
    "H1N1",
    "swine flu",
    "H3N2",
    "oseltamivir",
    "influenza-like illness",
    "ILI",
    "SARI",
    "COVID-19",
    "SARS-CoV-2",
    "pertussis",
    "whooping cough",
    "antibiotic stewardship",
    "cough syrup",
    "IDSP",
    "Category B",
    "influenza vaccine",
    "post-infectious cough",
    "silent hypoxia",
    "remdesivir",
    "dexamethasone",
  ],
  sections: [
    {
      heading: "The time axis of cough and the definitions to quote",
      points: [
        "**Acute cough lasts less than 3 weeks, subacute cough 3-8 weeks, and chronic cough more than 8 weeks** (CHEST classification). In India this Western time axis is overridden by the NTEP rule: **any cough of 2 weeks or more makes the patient presumptive tuberculosis** and earns a sputum nucleic acid amplification test, whatever else you think is going on.",
        "**Influenza-like illness (WHO 2014 surveillance definition):** an acute respiratory infection with **measured fever of 38 degrees Celsius or higher and cough, with onset within the last 10 days**. **Severe acute respiratory infection (SARI)** is the same illness in a patient who needs hospital admission. These two definitions drive the Integrated Disease Surveillance Programme and the WHO influenza network run through NIV Pune and the Viral Research and Diagnostic Laboratories.",
        "The causes of an acute cough in an Indian outpatient department, in order: the common cold and viral upper respiratory infection (rhinovirus, seasonal coronaviruses, adenovirus, parainfluenza, respiratory syncytial virus), **acute bronchitis, influenza, COVID-19**, community-acquired pneumonia, exacerbations of asthma or COPD, pertussis, allergic rhinitis with post-nasal drip and irritant exposure to smoke or dust; the uncommon but dangerous ones are heart failure, pulmonary embolism, aspiration and an inhaled foreign body in a child.",
        "**Post-infectious cough** follows a viral infection and persists for 3-8 weeks because of airway hyper-responsiveness, epithelial damage and post-nasal drip; it is self-limiting, needs no antibiotic, and in India must be separated from tuberculosis by asking about fever, night sweats, weight loss and haemoptysis and by a sputum test if any of them is present.",
        "**Burden:** acute respiratory infection is the single commonest reason for an outpatient visit and for an antibiotic prescription in India; audits show that **60-80% of acute bronchitis consultations end with an antibiotic**, which is the main driver of the country's ranking among the highest antibiotic consumers in the world.",
      ],
    },
    {
      heading: "Acute bronchitis: the diagnosis that should not earn an antibiotic",
      points: [
        "**Definition:** a self-limited inflammation of the trachea and large bronchi presenting with cough, with or without sputum, lasting 1-3 weeks in a patient without pneumonia and without chronic lung disease. **Viruses cause more than 90%** (influenza, parainfluenza, RSV, rhinovirus, coronaviruses, adenovirus); Mycoplasma, Chlamydophila and Bordetella pertussis account for under 10%.",
        "The cough is often productive, and **purulent sputum reflects neutrophils and shed epithelium, not bacterial infection** - yellow or green phlegm is not an indication for an antibiotic. Wheeze, retrosternal soreness and low-grade fever are common. The **median duration of cough is about 18 days and half the patients are still coughing at 3 weeks**; telling the patient this at the first visit prevents the second visit that ends in an antibiotic.",
        "**Pneumonia discriminators** that force a chest radiograph: pulse over 100/min, respiratory rate over 24/min, temperature over 38 degrees Celsius, focal crackles or bronchial breathing, and SpO2 under 94%. In their absence pneumonia is unlikely enough that no radiograph is needed.",
        "**Point-of-care CRP**, where available, is the best single tool for stewardship: under 20 mg/L no antibiotic, 20-100 mg/L a delayed prescription to be filled only if worse at 3-5 days, over 100 mg/L treat as pneumonia. Procalcitonin does the same job in hospital.",
        "**The evidence:** a Cochrane review found antibiotics shorten the cough of acute bronchitis by about half a day at the cost of more adverse effects; the ICMR Treatment Guidelines for Antimicrobial Use (2019, updated 2022) and the NCDC National Treatment Guidelines therefore state that **acute bronchitis, the common cold, acute pharyngitis without Centor criteria and influenza-like illness need no antibiotic**. The exceptions are pertussis, a clinical suspicion of pneumonia, an exacerbation of COPD meeting antibiotic criteria, and the immunocompromised or very frail patient.",
        "**Symptomatic treatment that is defensible:** paracetamol for fever and aches, warm fluids, and honey (not under 1 year of age) which outperforms placebo for night cough. Dextromethorphan has a small effect in adults; **codeine is not to be used under 12 years or in breastfeeding women**. Salbutamol by inhaler helps only if there is wheeze; inhaled or oral steroids have no place.",
        "**Cough syrups in children:** the DCGI restricted the chlorpheniramine-phenylephrine combination to children over 4 years in 2023, and after the diethylene glycol contamination deaths (Gambia and Uzbekistan in 2022, and Indian children in Madhya Pradesh in 2025 from a contaminated syrup) the MoHFW advised in October 2025 that **cough and cold syrups should not be prescribed to children under 2 years and are generally not recommended under 5**. The safer answer for a small child is fluids, honey after 1 year, saline nasal drops and a review date.",
      ],
    },
    {
      heading: "Pertussis and the cough that lasts a hundred days",
      points: [
        "Pertussis is returning in adolescents and adults because vaccine immunity wanes after 5-10 years, and these coughing adults are the source of infant deaths; **think of it in any paroxysmal cough of over 2 weeks with post-tussive vomiting**, especially in a household with a baby.",
        "Three stages: **catarrhal** (1-2 weeks, indistinguishable from a cold and most infectious), **paroxysmal** (2-6 weeks of paroxysms, an inspiratory whoop, post-tussive vomiting, subconjunctival haemorrhage and cyanosis; infants under 6 months present with apnoea and cyanosis without a whoop), and **convalescent** (weeks to months). A **lymphocytosis of 20,000/microlitre or more** in an afebrile coughing child is a strong clue.",
        "Diagnosis: nasopharyngeal swab for PCR or culture within the first 3 weeks; serology later. Under IDSP a suspected case is reported on the weekly P form.",
        "**Treatment: azithromycin 10 mg/kg on day 1 then 5 mg/kg daily on days 2-5** (adults 500 mg then 250 mg) or clarithromycin for 7 days; antibiotics given after the third week of cough do not shorten the illness but do stop transmission. The patient stays away from school or work until 5 days of antibiotic are complete, and **all household contacts, whatever their vaccination status, receive the same course** if there is an infant, a pregnant woman or an immunocompromised person at home.",
        "Prevention under the Universal Immunisation Programme: pentavalent vaccine at 6, 10 and 14 weeks, DPT boosters at 16-24 months and at 5-6 years; **Tdap in every pregnancy between 27 and 36 weeks** (FOGSI recommendation) protects the newborn through transplacental antibody until its own primary doses.",
      ],
    },
    {
      heading: "Influenza: seasonality, categories and oseltamivir",
      points: [
        "**Viruses:** influenza A subtypes H1N1pdm09 and H3N2, and influenza B (Victoria lineage; the Yamagata lineage has not been detected since 2020, so the **WHO moved the vaccine to a trivalent composition from 2024-25**). Antigenic drift explains yearly epidemics; antigenic shift produced the 2009 pandemic. Incubation is 1-4 days and the patient is infectious from a day before symptoms to 5-7 days after, longer in children.",
        "**Indian seasonality has two peaks:** a monsoon peak from July to September over most of the country and a winter peak from January to March in the north. The 2015 H1N1 wave caused about 42,000 confirmed cases and 3,000 deaths, and 2023 saw a nationwide H3N2 surge; both are worth quoting.",
        "**Clinical features:** abrupt fever, headache, myalgia, prostration, sore throat and dry cough; vomiting and diarrhoea in children. **Complications:** primary viral pneumonia with ARDS, **secondary bacterial pneumonia** (Streptococcus pneumoniae, Staphylococcus aureus including MRSA, Haemophilus influenzae), exacerbation of asthma and COPD, myocarditis, encephalopathy, febrile seizures, rhabdomyolysis and **Reye syndrome when a child with influenza is given aspirin** - which is why aspirin is never an antipyretic in children.",
        "**High-risk groups (MoHFW):** pregnant women (highest in the second and third trimester and 2 weeks post-partum), children under 5 and especially under 2, adults 65 and over, chronic lung, heart, liver, kidney or neurological disease, diabetes, cancer, HIV, long-term steroid use, morbid obesity, and children on long-term aspirin.",
        "**The MoHFW categorisation used since 2009:** **Category A** - mild fever, cough, sore throat, body ache with no high-risk feature: no test, no oseltamivir, home rest and hygiene. **Category B(i)** - Category A plus high-grade fever and severe sore throat: oseltamivir and home isolation, no test. **Category B(ii)** - Category A in any high-risk group: **oseltamivir without waiting for a test**. **Category C** - breathlessness, chest pain, drowsiness, hypotension, haemoptysis, cyanosis, worsening of a chronic disease, or in a child irritability, refusal to feed or fast breathing: **test, admit and treat immediately**. Only Category C is tested, and an unavailable result never delays treatment.",
        "**Oseltamivir:** adults 75 mg twice daily for 5 days, ideally started **within 48 hours** of onset, but given at any stage in severe illness, hospitalised patients and the high-risk groups because the benefit on mortality persists. Children are dosed by weight (30 mg twice daily under 15 kg, 45 mg for 15-23 kg, 60 mg for 24-40 kg, 75 mg over 40 kg; infants under 1 year 3 mg/kg twice daily). **Post-exposure prophylaxis is 75 mg once daily for 10 days** for high-risk contacts. Take it with food to limit nausea; it has been in Schedule H1 since 2017, so any pharmacist can dispense it against a prescription.",
        "Testing is by RT-PCR on a nasopharyngeal and throat swab in viral transport medium sent to the nearest VRDL; rapid antigen tests miss half the cases and a negative rapid test never rules influenza out. **Infection control:** home isolation for 7 days or until 24 hours after the fever settles, a triple-layer mask on the patient, hand hygiene, and N95 masks for staff performing nebulisation or suction.",
      ],
    },
    {
      heading: "Influenza vaccination for the practice",
      points: [
        "Inactivated influenza vaccine, 0.5 mL intramuscular, is given **every year because the strains and the antibody both change**; India uses the **Southern Hemisphere formulation given ideally in April-May before the monsoon peak**, while the north may use the Northern Hemisphere formulation before winter. Effectiveness is 40-60% in a well-matched year and the main benefit is fewer hospital admissions and deaths in the high-risk groups.",
        "**Who:** every high-risk group listed above, health-care workers, **pregnant women in any trimester** (WHO and FOGSI; protects the infant for 6 months), children from 6 months to 5 years and every adult of 65 and over. Children aged 6 months to 8 years receiving it for the first time need **two doses 4 weeks apart**.",
        "Contraindication is only anaphylaxis to a previous dose; **egg allergy is not a contraindication** to the inactivated vaccine, and Guillain-Barre syndrome within 6 weeks of a previous dose is a precaution. Live attenuated intranasal vaccine is licensed for 2-49 years and is avoided in pregnancy and immunosuppression.",
        "Pair it with the pneumococcal vaccine in the elderly and the chronically ill, and with COVID-19 boosters where national policy recommends them - the vaccination consultation is the family physician's most cost-effective act in respiratory medicine.",
      ],
    },
    {
      heading: "COVID-19: what still matters in general practice",
      points: [
        "SARS-CoV-2 now circulates as endemic Omicron-lineage variants with periodic waves; testing is by **rapid antigen test (specific, but 60-80% sensitive in the first symptomatic week) with RT-PCR as the reference** and ICMR advises testing symptomatic patients, high-risk contacts and those needing admission rather than screening the well.",
        "**Severity (AIIMS-ICMR National Task Force):** mild - upper respiratory symptoms without breathlessness and **SpO2 94% or more on room air**; moderate - respiratory rate 24-30/min or **SpO2 90-93%**; severe - respiratory rate over 30/min, **SpO2 under 90%**, ARDS or shock. The danger is **silent hypoxaemia**: the patient looks comfortable while desaturating, so every home-isolated patient needs a pulse oximeter reading twice daily and a **6-minute walk test - a fall of 3% or more, or an SpO2 under 93% after walking, means hospital**.",
        "**Home isolation** is for mild disease with a separate ventilated room, a caregiver and daily telephone follow-up; it ends 7 days after symptom onset provided there has been no fever for 3 days. Elderly patients and those with uncontrolled comorbidity or immunosuppression are managed with a lower threshold for admission.",
        "**Mild disease:** paracetamol, fluids, rest and monitoring. **No steroids** - dexamethasone in patients not needing oxygen increased harm in RECOVERY and drove the 2021 mucormycosis epidemic; **no antibiotics** because bacterial co-infection is under 5%; no ivermectin, hydroxychloroquine, doxycycline or zinc, all of which were dropped from national guidance. Oral antivirals (nirmatrelvir-ritonavir) are used within 5 days of onset in high-risk patients where available, remembering the ritonavir drug interactions; molnupiravir was approved by the DCGI but never entered the ICMR guideline because of safety concerns.",
        "**Moderate and severe disease:** oxygen titrated to SpO2 92-96%, awake proning, **dexamethasone 6 mg daily (or methylprednisolone 32 mg) for up to 10 days only in patients needing oxygen**, prophylactic enoxaparin 40 mg subcutaneously daily, remdesivir 200 mg then 100 mg daily for 4 days within 10 days of onset in patients on oxygen but not yet ventilated, and tocilizumab or baricitinib for rapidly worsening disease with rising CRP once bacterial infection is excluded. Monitor glucose on steroids and watch for **mucormycosis** in every diabetic given steroids: facial pain, nasal crusting, black eschar, periorbital swelling or visual change is an emergency.",
        "**Post-COVID condition** is symptoms persisting beyond 12 weeks - fatigue, breathlessness, cognitive slowing, palpitations; patients who had pneumonia need a chest radiograph and spirometry at 6-12 weeks, pulmonary rehabilitation if breathless, and screening for depression and anxiety. Vaccination remains recommended for high-risk groups as per the current national schedule.",
      ],
    },
    {
      heading: "The public-health duties that come with the prescription",
      points: [
        "**IDSP reporting:** the health worker's weekly **S form** (syndromic), the medical officer's **P form** (presumptive) and the laboratory's **L form** now flow in real time through the Integrated Health Information Platform; a cluster of ILI or SARI in a village, school or hostel is reported the same day, and H1N1 influenza and COVID-19 are notifiable in most states.",
        "**Antibiotic stewardship** is a duty under the National Action Plan on Antimicrobial Resistance and Kerala's state plan: no antibiotic for the common cold, acute bronchitis, ILI or viral pharyngitis, amoxicillin as the first drug for pneumonia in the outpatient, and no dispensing of Schedule H1 drugs without a prescription (the red-line campaign).",
        "Teach cough etiquette, masks for the symptomatic, hand hygiene and ventilation; advise time off school or work; and use every ILI consultation to check the vaccination status of the whole household, because the high-risk person is often the grandparent sitting quietly in the corner of the room.",
      ],
    },
  ],
  tables: [
    {
      heading: "MoHFW categorisation of influenza-like illness (seasonal influenza A H1N1 protocol)",
      columns: ["Category", "Clinical picture", "Test", "Oseltamivir", "Where managed"],
      rows: [
        ["A", "Mild fever, cough, sore throat, body ache; no high-risk feature", "No", "No", "Home, rest, hygiene, review if worse"],
        ["B (i)", "Category A plus high-grade fever and severe sore throat", "No", "Yes", "Home isolation"],
        ["B (ii)", "Category A in a high-risk group: pregnancy, under 5, over 65, chronic disease, immunosuppression", "No", "Yes, without waiting", "Home isolation with close follow-up"],
        ["C", "Breathlessness, chest pain, drowsiness, hypotension, haemoptysis, cyanosis, worsening chronic disease; child irritable, not feeding, fast breathing", "Yes", "Yes, immediately", "Admit"],
      ],
    },
    {
      heading: "Oseltamivir dosing (treatment twice daily for 5 days; prophylaxis once daily for 10 days)",
      columns: ["Age or weight", "Treatment dose", "Prophylaxis dose"],
      rows: [
        ["Under 1 year", "3 mg/kg twice daily", "3 mg/kg once daily (from 3 months)"],
        ["Under 15 kg", "30 mg twice daily", "30 mg once daily"],
        ["15-23 kg", "45 mg twice daily", "45 mg once daily"],
        ["24-40 kg", "60 mg twice daily", "60 mg once daily"],
        ["Over 40 kg and adults", "75 mg twice daily", "75 mg once daily"],
      ],
    },
    {
      heading: "COVID-19 severity and its consequences",
      columns: ["Severity", "Criteria", "Setting", "Key treatment"],
      rows: [
        ["Mild", "No breathlessness, SpO2 94% or more on air", "Home isolation with oximeter", "Symptomatic; antiviral within 5 days if high risk; no steroid, no antibiotic"],
        ["Moderate", "Respiratory rate 24-30/min or SpO2 90-93%", "Ward with oxygen", "Oxygen, proning, dexamethasone 6 mg, enoxaparin, remdesivir within 10 days"],
        ["Severe", "Respiratory rate over 30/min, SpO2 under 90%, ARDS, shock", "High-dependency or intensive care", "High-flow oxygen or ventilation, steroid, anticoagulation, tocilizumab or baricitinib if worsening"],
      ],
    },
  ],
  redFlags: [
    "SpO2 under 94%, respiratory rate over 24/min, pulse over 100/min or focal chest signs in a patient with an acute cough - this is pneumonia until a chest radiograph says otherwise.",
    "Any Category C feature in influenza-like illness - breathlessness, chest pain, drowsiness, hypotension, cyanosis or haemoptysis - admit and start oseltamivir before the test result.",
    "A child with fast breathing, chest indrawing, inability to drink, stridor at rest or lethargy - severe pneumonia or croup, refer under IMNCI the same day.",
    "A pregnant woman with fever and cough during the monsoon - start oseltamivir the same day; influenza in the third trimester kills mothers and fetuses.",
    "Cough reaching 2 weeks, or cough of any duration with fever, night sweats, weight loss or haemoptysis - presumptive tuberculosis, send sputum for NAAT.",
    "An infant under 6 months with paroxysmal cough, apnoea or cyanotic spells - pertussis, admit; and a diabetic recovering from COVID-19 on steroids with facial pain, nasal crusting or visual change - mucormycosis, refer today.",
  ],
  pearls: [
    "Acute cough is under 3 weeks, subacute 3-8 weeks, chronic over 8 weeks - but in India 2 weeks is the number that matters, because that is when a cough becomes presumptive tuberculosis.",
    "Purulent sputum is neutrophils, not bacteria; the colour of the phlegm is never an indication for an antibiotic in acute bronchitis.",
    "Tell every acute bronchitis patient that the cough lasts a median of 18 days - the patient who expects three weeks of cough does not come back for an antibiotic in week two.",
    "Category B(ii) is the one to remember: a pregnant woman, a small child or an elderly diabetic with influenza-like illness gets oseltamivir without a test and without waiting for 48 hours to pass.",
    "Only Category C is tested for H1N1, and a pending or negative result never withholds oseltamivir from a sick patient.",
    "In COVID-19 the steroid is for the patient on oxygen, never for the patient at home; dexamethasone given to a mild case buys mucormycosis, not recovery.",
    "The influenza vaccine in India is the Southern Hemisphere formulation given before the monsoon, repeated every year, and given in any trimester of pregnancy.",
  ],
  theory: [
    {
      id: "respiratory-acute-cough-influenza-covid-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "A 30-year-old woman who is 32 weeks pregnant presents in August with two days of high fever, sore throat, myalgia and dry cough. Discuss the assessment, categorisation and management of influenza-like illness in the community, and the public health measures you would take.",
      openingLines: [
        "Influenza-like illness is an acute respiratory infection with measured fever of 38 degrees Celsius or more and cough, with onset within the last 10 days; during the monsoon in India the likeliest causes are influenza A (H1N1pdm09 or H3N2), influenza B and SARS-CoV-2.",
        "A pregnant woman in the third trimester belongs to the highest-risk group for influenza complications, so under the MoHFW protocol she is Category B(ii) and is started on oseltamivir immediately, without waiting for any laboratory confirmation.",
      ],
      answer: [
        {
          heading: "1. Assessment",
          points: [
            "History: onset and duration, fever pattern, cough, sore throat, breathlessness, chest pain, contact with similar illness, travel, vaccination status, and the obstetric history including fetal movements.",
            "Examination: temperature, pulse, respiratory rate, blood pressure, **SpO2 on room air**, hydration, throat, chest for crackles or bronchial breathing, and fundal height with fetal heart rate.",
            "Look actively for Category C features: breathlessness, respiratory rate over 24/min, SpO2 under 94%, chest pain, drowsiness, hypotension, cyanosis, haemoptysis or reduced fetal movements.",
            "Differential diagnosis in the monsoon: influenza, COVID-19, dengue (test if myalgia is severe or platelets fall), malaria, scrub typhus, leptospirosis, and community-acquired pneumonia; a rapid antigen test for COVID-19 and a complete blood count are reasonable at the first visit.",
          ],
        },
        {
          heading: "2. Categorisation under the MoHFW protocol",
          points: [
            "**Category A:** mild symptoms without risk factors - no test, no antiviral, home care.",
            "**Category B(i):** high-grade fever and severe sore throat - oseltamivir and home isolation, no test.",
            "**Category B(ii):** Category A symptoms in a high-risk group (pregnancy, age under 5 or over 65, chronic lung, heart, kidney or liver disease, diabetes, immunosuppression, long-term steroids) - **oseltamivir immediately without testing**.",
            "**Category C:** any severe feature - admission, RT-PCR on nasopharyngeal and throat swab through the VRDL network, and oseltamivir started before the result.",
            "This patient is Category B(ii); if she has any breathlessness, hypoxaemia or obstetric concern she becomes Category C and is admitted to a facility with obstetric and intensive care.",
          ],
        },
        {
          heading: "3. Treatment",
          points: [
            "**Oseltamivir 75 mg twice daily for 5 days**, started today; the drug is safe in pregnancy and the benefit persists even beyond 48 hours in a high-risk patient.",
            "Paracetamol for fever (fever itself is harmful to the fetus), oral fluids, rest, and no aspirin or NSAIDs in the third trimester.",
            "No antibiotic unless secondary bacterial pneumonia develops - recurrence of fever, purulent sputum or new focal signs after initial improvement, in which case amoxicillin-clavulanate is added and the patient is reviewed for admission.",
            "Home isolation in a separate ventilated room for 7 days or until 24 hours after the fever settles, a triple-layer mask, hand hygiene, and a daily telephone check on breathing, SpO2 if a pulse oximeter is available, and fetal movements.",
            "Written instructions to return immediately for breathlessness, chest pain, drowsiness, bleeding, reduced fetal movements or persistence of fever beyond 3 days of treatment.",
          ],
        },
        {
          heading: "4. Public health and preventive measures",
          points: [
            "Report the case under IDSP on the P form and notify H1N1 if it is confirmed, because it is notifiable in most states; look for other cases in the household and the neighbourhood and report any cluster the same day.",
            "**Post-exposure prophylaxis with oseltamivir 75 mg once daily for 10 days** for high-risk household contacts, such as an elderly diabetic parent or a child under 5.",
            "Vaccinate the household: annual influenza vaccine for high-risk members and the pregnant woman herself once she has recovered, and Tdap for her between 27 and 36 weeks if not already given.",
            "Counsel on cough etiquette, masks and ventilation, and advise the family that antibiotics have no role in influenza-like illness.",
          ],
        },
      ],
      mustDraw: [
        "A table of MoHFW Categories A, B(i), B(ii) and C with the action for each.",
        "A box of high-risk groups for influenza complications.",
      ],
      markSplit: [
        { part: "Definition and clinical assessment", marks: 2 },
        { part: "Categorisation with the high-risk groups", marks: 3 },
        { part: "Oseltamivir with dose, supportive care and isolation", marks: 3 },
        { part: "Public health measures and vaccination", marks: 2 },
      ],
      keywords: ["influenza-like illness", "Category B(ii)", "oseltamivir", "pregnancy", "IDSP"],
    },
    {
      id: "respiratory-acute-cough-influenza-covid-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on acute bronchitis, with emphasis on the rational use of antibiotics.",
      openingLines: [
        "Acute bronchitis is a self-limited inflammation of the trachea and large bronchi presenting as cough, with or without sputum, lasting up to 3 weeks, in a patient without pneumonia or chronic lung disease.",
        "More than 90% of cases are viral, and the central management decision is to withhold the antibiotic that the patient expects while identifying the minority with pneumonia, pertussis or an exacerbation of chronic lung disease who need one.",
      ],
      answer: [
        {
          heading: "Aetiology and clinical features",
          points: [
            "Viruses: influenza A and B, parainfluenza, RSV, rhinovirus, coronaviruses including SARS-CoV-2, adenovirus; bacteria (Mycoplasma pneumoniae, Chlamydophila pneumoniae, Bordetella pertussis) in under 10%.",
            "Cough, often productive, lasting a median of 18 days; wheeze, retrosternal soreness, low-grade fever and coryza; the chest is clear or has scattered rhonchi.",
            "Purulent sputum reflects neutrophils, not bacterial infection.",
          ],
        },
        {
          heading: "Diagnosis and the search for the exceptions",
          points: [
            "A clinical diagnosis; a chest radiograph is needed only for pneumonia discriminators - **pulse over 100/min, respiratory rate over 24/min, temperature over 38 degrees Celsius, focal signs or SpO2 under 94%**.",
            "Point-of-care CRP: under 20 mg/L no antibiotic; 20-100 mg/L delayed prescription; over 100 mg/L treat as pneumonia.",
            "In India, any cough reaching 2 weeks is presumptive tuberculosis and needs a sputum NAAT; paroxysmal cough with post-tussive vomiting and lymphocytosis suggests pertussis.",
          ],
        },
        {
          heading: "Management",
          points: [
            "**No antibiotic** for uncomplicated acute bronchitis (ICMR and NCDC guidelines): antibiotics shorten cough by half a day and add adverse effects and resistance.",
            "Antibiotics are indicated only for pertussis (azithromycin 5 days), suspected pneumonia, an exacerbation of COPD with increased sputum purulence, and the immunocompromised or very frail.",
            "Symptomatic care: paracetamol, fluids, honey after 1 year of age, salbutamol inhaler only if wheezing; no codeine under 12 years, no cough-cold syrups under 2 years and generally not under 5.",
            "Explain the expected 3-week course, use a delayed prescription where the patient insists, and give a written safety net of symptoms that need review.",
          ],
        },
      ],
      mustDraw: ["A three-tier CRP box (under 20, 20-100, over 100 mg/L) with the antibiotic decision for each."],
      markSplit: [
        { part: "Definition and aetiology", marks: 1 },
        { part: "Clinical features and pneumonia discriminators", marks: 1.5 },
        { part: "Antibiotic decision with the exceptions", marks: 1.5 },
        { part: "Symptomatic care and counselling", marks: 1 },
      ],
      keywords: ["acute bronchitis", "antibiotic stewardship", "CRP", "pneumonia discriminators", "delayed prescription"],
    },
  ],
  mcqs: [
    {
      id: "respiratory-acute-cough-influenza-covid-q1",
      stem: "A 26-year-old woman at 28 weeks of pregnancy presents in September with fever of 39 degrees Celsius, sore throat, myalgia and dry cough for 36 hours. Respiratory rate 20/min, SpO2 98% on air, chest clear. Which is the correct management?",
      options: [
        "Send an RT-PCR for H1N1 and start oseltamivir only if it is positive",
        "Start oseltamivir 75 mg twice daily for 5 days today without testing, with home isolation and paracetamol",
        "Start amoxicillin-clavulanate for 7 days because pregnancy increases the risk of bacterial pneumonia",
        "Give paracetamol alone and review in 48 hours, since she is not breathless",
        "Admit to intensive care for observation because of the pregnancy",
      ],
      answer: 1,
      explanation:
        "Pregnancy places her in the MoHFW high-risk group, making this Category B(ii) influenza-like illness, for which oseltamivir is started immediately without a test; the 48-hour window is a reason for urgency, not a reason to wait. Testing is reserved for Category C, and a result must never delay treatment in a high-risk patient. Antibiotics have no role in uncomplicated influenza-like illness. Paracetamol alone with a 48-hour review wastes the window in which the antiviral works best, and intensive care admission is for Category C features, which she does not have.",
      difficulty: "easy",
    },
    {
      id: "respiratory-acute-cough-influenza-covid-q2",
      stem: "A 45-year-old non-smoking man has had a cough with yellow sputum for 6 days after a cold. Temperature 37.5 degrees Celsius, pulse 84/min, respiratory rate 16/min, SpO2 98% on air, chest clear, point-of-care CRP 8 mg/L. What is the best plan?",
      options: [
        "Amoxicillin-clavulanate for 5 days because the sputum is purulent",
        "Azithromycin for 3 days to cover atypical organisms",
        "No antibiotic; explain that the cough may last 3 weeks, treat symptoms and give a written safety net",
        "Chest radiograph today and antibiotics if any shadow is seen",
        "Oral prednisolone for 5 days to shorten the cough",
      ],
      answer: 2,
      explanation:
        "This is uncomplicated acute bronchitis: no pneumonia discriminator is present (pulse under 100, respiratory rate under 24, afebrile, normal saturation, clear chest) and the CRP is under 20 mg/L, so the ICMR and NCDC guidance is no antibiotic, symptomatic care and an explanation of the expected 18-day median duration. Purulent sputum reflects neutrophils and is not a bacterial marker, so neither amoxicillin-clavulanate nor a macrolide is justified. A chest radiograph is not needed without discriminators, and oral steroids have no benefit in acute bronchitis without asthma.",
      difficulty: "easy",
    },
    {
      id: "respiratory-acute-cough-influenza-covid-q3",
      stem: "A 62-year-old man with type 2 diabetes is in home isolation on day 4 of mild COVID-19. He has no breathlessness. His resting SpO2 is 96%, but after a 6-minute walk it falls to 91%. What should be done?",
      options: [
        "Continue home isolation and start oral dexamethasone 6 mg daily",
        "Refer him to hospital today for oxygen assessment and inpatient management",
        "Start ivermectin and doxycycline and review in 48 hours",
        "Reassure him, because the resting saturation is above 94%",
        "Start oral amoxicillin for presumed secondary bacterial pneumonia",
      ],
      answer: 1,
      explanation:
        "A fall of 3% or more, or an SpO2 under 93%, on the 6-minute walk test identifies exertional desaturation, the earliest marker of the silent hypoxaemia of COVID-19 pneumonia, and mandates hospital assessment where oxygen, steroid, anticoagulation and remdesivir can be given under monitoring. Dexamethasone at home without oxygen monitoring is exactly the pattern that produced harm and mucormycosis in diabetics. Ivermectin and doxycycline were dropped from national guidance for lack of benefit. Reassurance ignores the purpose of the walk test, and antibiotics do not treat viral pneumonia.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-acute-cough-influenza-covid-q4",
      stem: "A 14-year-old boy has had a cough for 2 weeks that comes in paroxysms ending in vomiting; he is afebrile between bouts and his mother describes a whooping sound. His total leucocyte count is 24,000/microlitre with 80% lymphocytes. He has a 3-month-old sister at home. What is the most appropriate management?",
      options: [
        "Sputum NAAT for tuberculosis and no treatment until the result",
        "Amoxicillin for 7 days and a salbutamol inhaler",
        "Azithromycin for 5 days for him, the same course for all household contacts, notification, and exclusion from school for 5 days",
        "Inhaled budesonide for 4 weeks for post-infectious cough",
        "Reassurance, because he is beyond the infectious period",
      ],
      answer: 2,
      explanation:
        "Paroxysmal cough with post-tussive vomiting, a whoop and marked lymphocytosis in an afebrile adolescent is pertussis; a macrolide within 3 weeks of cough onset stops transmission, and because there is an infant at home every household contact receives prophylaxis regardless of vaccination status while the case is notified and kept from school for 5 days of antibiotic. Tuberculosis should be excluded in any 2-week cough but does not produce this picture, and waiting would leave the infant exposed. Amoxicillin does not cover Bordetella. Inhaled steroid is for post-infectious cough after the infection has been dealt with, and he remains infectious well into the paroxysmal stage.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-acute-cough-influenza-covid-q5",
      stem: "A 6-year-old girl weighing 20 kg with cerebral palsy presents with fever, cough and sore throat for one day during an H1N1 outbreak. She is Category B(ii). What is the correct oseltamivir prescription?",
      options: [
        "30 mg twice daily for 5 days",
        "45 mg twice daily for 5 days",
        "60 mg twice daily for 5 days",
        "75 mg twice daily for 5 days",
        "75 mg once daily for 10 days",
      ],
      answer: 1,
      explanation:
        "Children are dosed by weight: 30 mg twice daily under 15 kg, 45 mg twice daily for 15-23 kg, 60 mg twice daily for 24-40 kg and the adult 75 mg twice daily above 40 kg, each for 5 days, so a 20 kg child receives 45 mg twice daily. The 30 mg dose under-treats her, the 60 mg and 75 mg doses belong to heavier children and adults, and a once-daily course for 10 days is the prophylaxis schedule for contacts, not the treatment of a symptomatic high-risk child.",
      difficulty: "easy",
    },
    {
      id: "respiratory-acute-cough-influenza-covid-q6",
      stem: "A 70-year-old man with COPD asks in March when he should receive his influenza vaccine in Mumbai. Which advice is correct?",
      options: [
        "The vaccine is given once in a lifetime after 65, so he needs no further dose",
        "Give the Southern Hemisphere formulation in April-May before the monsoon peak, and repeat it every year",
        "Defer the vaccine because egg-based vaccines are contraindicated in COPD",
        "Give two doses one month apart because he is over 65",
        "Give the live attenuated intranasal vaccine because it is more effective in the elderly",
      ],
      answer: 1,
      explanation:
        "Influenza in most of India peaks in the monsoon months of July to September, so the Southern Hemisphere formulation given in April-May protects through the peak, and because both the strains and the antibody titre change it is repeated every year. It is not a once-in-a-lifetime vaccine. COPD is an indication, not a contraindication, and egg allergy short of anaphylaxis is not a contraindication either. Two doses are needed only for children under 9 receiving the vaccine for the first time. The live attenuated vaccine is licensed for ages 2-49 and is not used in the elderly.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "respiratory-acute-cough-influenza-covid-c1",
      front: "WHO surveillance definitions of ILI and SARI.",
      back: "ILI: acute respiratory infection with measured fever of 38 degrees Celsius or more and cough, onset within the last 10 days. SARI: the same illness requiring hospital admission.",
    },
    {
      id: "respiratory-acute-cough-influenza-covid-c2",
      front: "Time axis of cough, and the Indian exception.",
      back: "Acute under 3 weeks, subacute 3-8 weeks, chronic over 8 weeks; but any cough of 2 weeks or more is presumptive tuberculosis under NTEP and needs sputum NAAT.",
    },
    {
      id: "respiratory-acute-cough-influenza-covid-c3",
      front: "MoHFW influenza Category B(ii) - who and what.",
      back: "Influenza-like illness in a high-risk group (pregnancy, under 5, over 65, chronic disease, immunosuppression): oseltamivir immediately, home isolation, no test needed.",
    },
    {
      id: "respiratory-acute-cough-influenza-covid-c4",
      front: "Which influenza patients are tested, and what test?",
      back: "Only Category C (severe or hospitalised) - RT-PCR on nasopharyngeal and throat swab sent to a VRDL; treatment is never delayed for the result.",
    },
    {
      id: "respiratory-acute-cough-influenza-covid-c5",
      front: "Oseltamivir adult treatment and prophylaxis doses.",
      back: "Treatment 75 mg twice daily for 5 days, ideally within 48 hours but at any time in severe or high-risk illness; prophylaxis 75 mg once daily for 10 days.",
    },
    {
      id: "respiratory-acute-cough-influenza-covid-c6",
      front: "Pneumonia discriminators in a patient with acute cough.",
      back: "Pulse over 100/min, respiratory rate over 24/min, temperature over 38 degrees Celsius, focal crackles or bronchial breathing, SpO2 under 94% - any one earns a chest radiograph.",
    },
    {
      id: "respiratory-acute-cough-influenza-covid-c7",
      front: "Point-of-care CRP thresholds for antibiotics in acute cough.",
      back: "Under 20 mg/L: no antibiotic. 20-100 mg/L: delayed prescription. Over 100 mg/L: treat as pneumonia.",
    },
    {
      id: "respiratory-acute-cough-influenza-covid-c8",
      front: "COVID-19 severity bands (AIIMS-ICMR).",
      back: "Mild: no breathlessness, SpO2 94% or more. Moderate: respiratory rate 24-30 or SpO2 90-93%. Severe: rate over 30, SpO2 under 90%, ARDS or shock.",
    },
    {
      id: "respiratory-acute-cough-influenza-covid-c9",
      front: "The 6-minute walk test in home-isolated COVID-19.",
      back: "A fall in SpO2 of 3% or more, or a reading under 93% after walking, unmasks silent hypoxaemia and means hospital referral.",
    },
    {
      id: "respiratory-acute-cough-influenza-covid-c10",
      front: "Pertussis treatment and contact management.",
      back: "Azithromycin 10 mg/kg day 1 then 5 mg/kg days 2-5 (adult 500 then 250 mg); same course for all household contacts if an infant, pregnant woman or immunocompromised person is at home; exclude from school for 5 days; notify.",
    },
    {
      id: "respiratory-acute-cough-influenza-covid-c11",
      front: "Influenza vaccine in India: which formulation, when, how often.",
      back: "Inactivated Southern Hemisphere formulation (trivalent from 2024-25), given in April-May before the monsoon, every year; two doses 4 weeks apart for first-time recipients aged 6 months to 8 years; any trimester of pregnancy.",
    },
    {
      id: "respiratory-acute-cough-influenza-covid-c12",
      front: "Cough syrups in children - the 2025 MoHFW advice.",
      back: "Not to be prescribed under 2 years and generally not recommended under 5; use fluids, honey after 1 year, saline nasal drops and a review date instead.",
    },
  ],
  references: [
    "MoHFW Guidelines on categorisation of seasonal influenza A H1N1 cases during screening for home isolation, testing, treatment and hospitalisation, 2009, with subsequent revisions",
    "ICMR Treatment Guidelines for Antimicrobial Use in Common Syndromes, 2nd edition, 2019, and National Treatment Guidelines for Antimicrobial Use, NCDC, MoHFW",
    "AIIMS/ICMR-COVID-19 National Task Force Clinical Guidance for Management of Adult COVID-19 Patients, revised January 2023",
    "WHO Global Epidemiological Surveillance Standards for Influenza, 2014",
    "CHEST Expert Cough Panel guidelines on the management of cough, 2018-2020",
    "NICE NG120 Cough (acute): antimicrobial prescribing, 2019",
    "Association of Physicians of India Expert Group recommendations on adult immunisation, 2020",
    "MoHFW advisory on the use of cough syrups in children, October 2025",
    "Harrison's Principles of Internal Medicine, 21st edition, 2022 - influenza and COVID-19",
  ],
});

topics.push({
  id: "respiratory-tb-infection-contacts-tpt",
  title: "TB infection, contact investigation and TB preventive treatment under NTEP",
  oneLiner:
    "TB infection is a state of persistent immune response to Mycobacterium tuberculosis antigens without clinical or radiological evidence of active disease; under NTEP every household contact of a pulmonary tuberculosis patient is screened, active disease is excluded, and eligible contacts and all people living with HIV are offered TB preventive treatment with 6H or 3HP, recorded on Ni-kshay.",
  frequency: "common",
  keywords: [
    "latent tuberculosis",
    "LTBI",
    "TB infection",
    "TB preventive treatment",
    "TPT",
    "isoniazid preventive therapy",
    "IPT",
    "3HP",
    "6H",
    "rifapentine",
    "Mantoux",
    "tuberculin skin test",
    "IGRA",
    "QuantiFERON",
    "Cy-Tb",
    "household contact",
    "contact tracing",
    "index case",
    "NTEP",
    "Ni-kshay",
    "levofloxacin prophylaxis",
    "TB Mukt Bharat",
  ],
  sections: [
    {
      heading: "Definitions, the size of the reservoir and why prevention decides elimination",
      points: [
        "**TB infection (WHO, replacing the older term latent TB infection):** a state of persistent immune response to stimulation by Mycobacterium tuberculosis antigens without evidence of clinically manifest active tuberculosis. The infected person has no symptoms, is not infectious, has a normal chest radiograph, and is identified only by a positive test of immune memory.",
        "About a **quarter of the world's population** and an estimated **30-40% of Indian adults - over 35 crore people - carry TB infection**; this reservoir, not new transmission alone, produces a large share of the roughly 27 lakh incident cases India records every year, which is why the National Strategic Plan 2017-25 and the End TB targets cannot be reached by treating disease alone.",
        "**Lifetime risk of progression is 5-10%, half of it within the first 2 years** of infection. The risk multipliers you must be able to list: **HIV (about 10% per year)**, age under 5 (40-50% in infants under 1 year, 25% at 1-2 years), recent infection, **undernutrition** (the single largest population-attributable factor in India), diabetes (three-fold), silicosis (30-fold), anti-TNF and other immunosuppressive therapy, dialysis and transplantation, smoking, alcohol use disorder, and fibrotic lesions on chest radiograph.",
        "**TB preventive treatment (TPT)** reduces progression to disease by 60-90% in those who complete it. The 2021 Guidelines for Programmatic Management of TB Preventive Treatment in India expanded TPT from children under 6 and PLHIV to **all household contacts of pulmonary TB patients of any age and to other high-risk groups**, and made TPT a recorded outcome on Ni-kshay.",
        "The **TB Mukt Bharat Abhiyaan** and the **100-day intensified campaign (December 2024 to March 2025) in 347 high-burden districts** took this further with active case finding among the vulnerable using hand-held digital radiography with artificial-intelligence reading, upfront NAAT, nutrition support and TPT for contacts; a family physician who notifies a case is expected to help the programme complete this cascade for the household.",
      ],
    },
    {
      heading: "Contact investigation: who is a contact and how the household is screened",
      points: [
        "**Household contact (NTEP definition):** a person who shared the same enclosed living space as the index patient for **one or more nights, or for frequent or extended periods during the day, in the 3 months before the start of the current treatment**. A **close contact** shares an enclosed space outside the household - workplace, hostel, classroom, prison cell - for extended periods.",
        "**Every pulmonary tuberculosis patient, bacteriologically confirmed or clinically diagnosed, is an index case** whose household is investigated; and for **every child diagnosed with tuberculosis the process is reversed** to find the adult source case at home. Extrapulmonary index cases do not need household screening unless there is also a pulmonary component.",
        "**The screening cascade for each contact:** the four-symptom screen (cough of any duration, fever, weight loss, night sweats - remember that in contacts a cough of any duration counts), **a chest radiograph for every household contact irrespective of symptoms**, and a sputum NAAT (CBNAAT or Truenat) for anyone with a symptom or an abnormal radiograph. In children the screen adds poor weight gain, reduced playfulness and lethargy, with gastric aspirate or induced sputum when a sample is needed.",
        "The purpose of the cascade is twofold: to find the **5-10% of household contacts who already have active disease** (co-prevalent cases), and to identify the remainder as eligible for TPT once active disease has been excluded, because giving isoniazid alone to a person with unrecognised active disease breeds resistance.",
        "Contacts of **drug-resistant tuberculosis** are screened the same way and then followed with a symptom screen every 6 months for 2 years, because progression must be caught early and treated with a regimen built on the index patient's resistance pattern.",
        "The health worker or ASHA line-lists the contacts on Ni-kshay at notification, the screening and TPT are recorded against the index patient's ID, and the family physician who diagnosed the index case should confirm at the first follow-up visit that the household has actually been visited - the commonest gap in the cascade is a contact who was listed and never screened.",
      ],
    },
    {
      heading: "Tests of TB infection: tuberculin skin test, IGRA and Cy-Tb",
      points: [
        "**Tuberculin skin test (Mantoux):** 0.1 mL of purified protein derivative - **5 tuberculin units of PPD-S or 2 TU of PPD RT23** - injected intradermally on the volar aspect of the forearm to raise a 6-10 mm wheal, and **read at 48-72 hours by measuring the transverse diameter of induration, not erythema**, in millimetres with the ballpoint method. Record the millimetres, never just 'positive'.",
        "**Interpretation under NTEP:** **induration of 5 mm or more is positive in PLHIV, severely malnourished children and the immunosuppressed; 10 mm or more is positive in everybody else**, including household contacts and health workers. A 15 mm cut-off for persons with no risk factors is an American convention that is not used in India.",
        "**False negatives** (anergy): HIV with low CD4, severe undernutrition, measles or other recent viral infection, live vaccines within the previous 6 weeks, miliary or meningeal tuberculosis, corticosteroids and immunosuppressants, infants under 6 months, sarcoidosis, and technical faults - subcutaneous injection, light-exposed or outdated tuberculin, reading erythema. **False positives:** BCG (mainly within 10 years of vaccination and more so when BCG was given after infancy) and non-tuberculous mycobacteria. The **booster phenomenon** means a second test within 1-4 weeks of the first can be larger without new infection, which is why health workers get a two-step baseline.",
        "**Interferon-gamma release assays** (QuantiFERON-TB Gold Plus, an ELISA on whole blood, and T-SPOT.TB, an ELISPOT on lymphocytes) measure the interferon-gamma response to **ESAT-6 and CFP-10**, antigens absent from BCG and from most non-tuberculous mycobacteria, so they are **not confounded by BCG**, need a single visit and have no booster effect; their disadvantages are cost (about Rs 2,000-3,500), the need for a laboratory within 16 hours, indeterminate results in immunosuppression and reduced reliability under 2 years of age.",
        "**Cy-Tb** is an Indian-manufactured skin test using recombinant ESAT-6 and CFP-10 in place of PPD, approved by the DCGI in 2022 and being rolled out under NTEP; it is given and read exactly like the Mantoux test, with **5 mm or more of induration taken as positive**, and combines the specificity of IGRA with the cost and logistics of a skin test.",
        "**What no test can do:** none distinguishes infection from disease, none predicts who will progress (the positive predictive value for disease within 2 years is only 2-5%), and a negative test does not exclude infection in a recently exposed or immunosuppressed person. **Testing is therefore never a prerequisite for TPT in the two highest-risk groups** - children under 5 who are household contacts and people living with HIV - and, where a test is unavailable, contacts aged 5 and above may still receive TPT after active disease is excluded.",
      ],
    },
    {
      heading: "TB preventive treatment: who is eligible and how active disease is excluded first",
      points: [
        "**Eligible groups under the 2021 Indian guidelines:** (1) **all people living with HIV** - adults, adolescents and children over 12 months regardless of contact history, and infants under 12 months only if they are contacts; (2) **all household contacts of pulmonary TB patients** - children under 5 years without any test of infection, and contacts aged 5 and above after a test of infection where available; (3) **other clinical risk groups after a positive test** - patients starting anti-TNF or other biologic therapy, patients on dialysis or preparing for organ or haematological transplantation, and patients with silicosis; and (4) groups where TPT **may be considered on clinical judgement** - prisoners, health workers, migrants, the homeless, people who use drugs, and patients with diabetes, undernutrition, smoking or alcohol use disorder.",
        "**Excluding active disease is the non-negotiable first step:** a negative four-symptom screen plus a normal chest radiograph. Anyone with a symptom or a radiographic abnormality gets a NAAT and, if that is negative and doubt persists, a clinician's review - **TPT is deferred until active tuberculosis has been excluded**. In PLHIV the WHO adds C-reactive protein (over 5 mg/L) as a screening trigger.",
        "**Contraindications and reasons to defer:** active tuberculosis; active hepatitis or ALT more than three times normal; a history of severe hypersensitivity to isoniazid or rifamycins; and, for the rifapentine regimens, pregnancy, age under 2 years and antiretroviral regimens containing protease inhibitors or nevirapine. Previous completed treatment for tuberculosis is not a contraindication if there has been a new exposure.",
        "Contacts of **MDR/RR-TB** patients are the special case: the index strain is isoniazid-resistant, so 6H and 3HP are useless; **6 months of daily levofloxacin** (750-1000 mg in adults, 15-20 mg/kg in children) is the regimen recommended by the WHO in 2024 on the strength of the V-QUIN and TB-CHAMP trials, and is being adopted under NTEP alongside 6-monthly clinical follow-up for 2 years. Contacts of a fluoroquinolone-resistant index case get follow-up alone.",
      ],
    },
    {
      heading: "The regimens, their doses and how completion is defined",
      points: [
        "**6H:** isoniazid daily for 6 months - **10 mg/kg (range 7-15, maximum 300 mg) in children and 5 mg/kg to a maximum of 300 mg in adults**, with pyridoxine 10-25 mg daily for PLHIV, pregnant and lactating women, diabetics, the undernourished and alcohol users. It is the regimen for children under 2, pregnant women and PLHIV on protease inhibitor or nevirapine-based ART, and is usable at any age.",
        "**3HP:** **12 once-weekly doses of isoniazid plus rifapentine over 3 months**, for contacts and PLHIV **aged 2 years and above**. Adults and adolescents receive isoniazid 15 mg/kg (maximum 900 mg) and rifapentine by weight band - 300 mg for 10-15.9 kg, 450 mg for 16-23.9 kg, 600 mg for 24-30.9 kg, 750 mg for 31-49.9 kg and **900 mg at 50 kg or more**; children of 2-14 years get isoniazid 25 mg/kg weekly. Completion in 12 doses rather than 180 makes it the programme's preferred adult regimen, and it is compatible with efavirenz and dolutegravir without dose adjustment.",
        "**3HR:** isoniazid plus rifampicin daily for 3 months using the paediatric dispersible fixed-dose combination, the regimen for children under 2 years; **1HP** (daily isoniazid plus rifapentine for 1 month) is an option for those aged 13 and above; **4R** (rifampicin daily for 4 months) is used when isoniazid is contraindicated or the index strain is isoniazid-monoresistant.",
        "**Adverse effects to warn about and monitor monthly:** hepatotoxicity from isoniazid (stop if ALT is over three times normal with symptoms or over five times without, and do not restart the same regimen without specialist advice), peripheral neuropathy prevented by pyridoxine, rash and hypersensitivity, a **flu-like reaction with weekly rifapentine**, orange discolouration of urine and secretions, and **failure of oral contraceptives with any rifamycin** - advise a barrier or depot method. Baseline liver tests are needed only for those with liver disease, heavy alcohol use, HIV, pregnancy or the puerperium.",
        "**Completion:** a course is complete when at least 80% of the doses have been taken within 133% of the intended duration - in practice **180 doses of 6H within 9 months, or 12 doses of 3HP within 16 weeks**; missed doses are added to the end rather than restarting. The outcome (completed, lost to follow-up, stopped for adverse effects, developed TB, died) is recorded on Ni-kshay, and the drugs are free at every DMC and health and wellness centre.",
        "A person who develops symptoms during TPT is evaluated for active disease immediately and, if disease is confirmed, is switched to full four-drug treatment; a person who is re-exposed to a new infectious index case after completing TPT may be offered a second course.",
      ],
    },
    {
      heading: "Counselling, infection control at home and the family physician's role",
      points: [
        "Explain the difference between infection and disease in plain words: the germ is asleep in the body, it cannot spread to others, and a short course of one or two medicines kills it before it can wake up. Families that understand this complete TPT; families told only that 'the child must take tablets for 6 months' do not.",
        "**Airborne infection control at home** for the first 2 weeks of the index patient's treatment: sleep in a separate, well-ventilated room where possible, keep windows open, let sunlight in, cover the mouth when coughing, never spit in the open, and keep the infant and the elderly out of the sick room. A patient on effective treatment becomes non-infectious within about 2 weeks.",
        "Watch the whole household for the next 2 years: the ASHA screens the contacts at each visit to the index patient, and the family physician repeats the four-symptom screen at every consultation for any member of that household, because a co-prevalent or incident case is commonest in the first year.",
        "Special groups the examiner likes: a **pregnant contact** gets 6H (rifapentine regimens are deferred to after delivery); a **health worker** gets a two-step baseline tuberculin test and annual symptom screening, with TPT after a conversion; a **diabetic contact** is screened with the same cascade and is a reasonable candidate for TPT on clinical judgement; and a **child under 5 at home with a sputum-positive parent gets TPT the same week, with no test**.",
        "India has also begun an **adult BCG vaccination programmatic study in high-risk adults** (household contacts, previously treated patients, diabetics, smokers, the undernourished and the elderly) in several states since 2024; it is given only with consent within the study framework and is not yet routine policy.",
      ],
    },
  ],
  tables: [
    {
      heading: "TB preventive treatment regimens under NTEP (Indian guidelines 2021, with WHO 2024 additions)",
      columns: ["Regimen", "Composition and duration", "Adult dose", "Who", "Completion"],
      rows: [
        ["6H", "Isoniazid daily for 6 months", "5 mg/kg, maximum 300 mg daily, with pyridoxine in those at risk", "Any age; children under 2, pregnancy, PLHIV on protease inhibitor or nevirapine", "180 doses within 9 months"],
        ["3HP", "Isoniazid plus rifapentine once weekly, 12 doses", "Isoniazid 15 mg/kg (maximum 900 mg) plus rifapentine 900 mg at 50 kg or more, weight-banded below", "Age 2 years and above, including PLHIV on efavirenz or dolutegravir; not in pregnancy", "12 doses within 16 weeks"],
        ["3HR", "Isoniazid plus rifampicin daily for 3 months", "Paediatric dispersible fixed-dose combination by weight band", "Children under 2 years", "About 90 doses within 4 months"],
        ["1HP", "Isoniazid plus rifapentine daily for 1 month", "Isoniazid 300 mg plus rifapentine 600 mg daily", "Age 13 years and above; not in pregnancy", "28 doses within 6 weeks"],
        ["4R", "Rifampicin daily for 4 months", "10 mg/kg, maximum 600 mg daily", "Isoniazid intolerance or isoniazid-monoresistant index case", "120 doses within 6 months"],
        ["6Lfx", "Levofloxacin daily for 6 months", "750 mg under 50 kg, 1000 mg at 50 kg or more; children 15-20 mg/kg", "Household contacts of MDR/RR-TB (WHO 2024; being adopted under NTEP)", "180 doses within 9 months"],
      ],
    },
    {
      heading: "Reading and acting on the tuberculin skin test under NTEP",
      columns: ["Induration at 48-72 hours", "Population", "Interpretation"],
      rows: [
        ["5 mm or more", "PLHIV, severely malnourished children, immunosuppressed patients", "Positive"],
        ["10 mm or more", "Everyone else, including household contacts and health workers", "Positive"],
        ["Under the cut-off", "Recently exposed contact, immunosuppressed, infant under 6 months", "Does not exclude infection; treat children under 5 and PLHIV regardless"],
        ["Any size", "Person with symptoms or an abnormal chest radiograph", "Irrelevant to the decision - exclude active disease with NAAT first"],
      ],
    },
  ],
  redFlags: [
    "A household contact with cough of any duration, fever, weight loss or night sweats - this is presumptive tuberculosis, not a TPT candidate; send a sputum NAAT before any isoniazid is dispensed.",
    "A child under 5 living with a sputum-positive adult who has not been screened within a week of the index diagnosis - the risk of disseminated or meningeal tuberculosis is highest in this group and the delay is the programme's commonest failure.",
    "Jaundice, persistent vomiting, dark urine or right upper quadrant pain in anyone on TPT - stop the drugs and measure ALT and bilirubin the same day.",
    "Fever, chills and myalgia within hours of a weekly rifapentine dose - a flu-like or hypersensitivity reaction; stop the regimen and review, and do not simply repeat the dose the following week.",
    "A household contact of an MDR-TB patient who develops any symptom in the 2-year follow-up period - needs immediate NAAT and treatment tailored to the index patient's resistance pattern, never first-line drugs.",
  ],
  pearls: [
    "TB infection is asymptomatic, non-infectious and radiologically silent; 5-10% of the infected progress in a lifetime, half of them within 2 years, and PLHIV progress at 10% a year.",
    "The Mantoux test is read at 48-72 hours by measuring induration, not erythema, in millimetres; 5 mm is positive in PLHIV and the severely malnourished child, 10 mm in everyone else.",
    "A test of infection is never required before TPT in a child under 5 who is a household contact or in a person living with HIV; excluding active disease is what is required.",
    "Every household contact of a pulmonary TB patient gets the four-symptom screen and a chest radiograph, and a NAAT if either is abnormal - the cascade finds the 5-10% who already have disease.",
    "3HP is 12 weekly doses of isoniazid 900 mg plus rifapentine 900 mg for an adult of 50 kg or more, allowed from 2 years of age, compatible with dolutegravir, and not used in pregnancy.",
    "Contacts of MDR-TB never get isoniazid-based TPT; the answer is 6 months of levofloxacin with 6-monthly screening for 2 years.",
    "Any rifamycin, including rifapentine, defeats the oral contraceptive pill - the barrier or depot advice is part of the prescription.",
  ],
  theory: [
    {
      id: "respiratory-tb-infection-contacts-tpt-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "A 35-year-old man is diagnosed with sputum-positive pulmonary tuberculosis. He lives with his wife, a 3-year-old son, a 7-year-old daughter and his 68-year-old mother who has diabetes. Describe the contact investigation and TB preventive treatment you would organise for this household under NTEP.",
      openingLines: [
        "Under NTEP every household contact - a person who shared the same enclosed living space as the index patient for one or more nights or for extended daytime periods in the 3 months before treatment began - is screened for active tuberculosis, and those without disease are offered TB preventive treatment, because household contacts carry a 5-10% risk of co-prevalent disease and a high risk of progression, greatest in the child under 5.",
        "All four members of this household are contacts; the 3-year-old is eligible for preventive treatment without any test of infection, the wife and the 7-year-old after a test of infection where available, and the diabetic mother on the same basis with clinical judgement favouring treatment.",
      ],
      answer: [
        {
          heading: "1. Notification and line-listing",
          points: [
            "Notify the index patient on Ni-kshay, which generates the contact line-list; the ASHA or TB health visitor visits the home within a week.",
            "Record every contact's age, symptoms, HIV status where known, and comorbidity; the diabetic mother and the 3-year-old are flagged as high risk.",
            "Counsel the family on infection control for the first 2 weeks: separate ventilated sleeping space, cough hygiene, no spitting, sunlight, and keeping the child and the grandmother out of the sick room.",
          ],
        },
        {
          heading: "2. Screening every contact for active disease",
          points: [
            "**Four-symptom screen** for each: cough of any duration, fever, weight loss and night sweats; in the children add poor weight gain, lethargy and reduced playfulness.",
            "**Chest radiograph for all four contacts irrespective of symptoms**; the diabetic mother additionally has her glycaemic control assessed because diabetes trebles her risk.",
            "**NAAT (CBNAAT or Truenat)** on sputum for any contact with a symptom or an abnormal radiograph; in the children, gastric aspirate or induced sputum if a specimen is needed.",
            "Anyone found to have disease is notified, started on daily fixed-dose 2HRZE/4HRE by weight band, and becomes a new index case; nobody with symptoms receives preventive treatment until active disease is excluded.",
          ],
        },
        {
          heading: "3. Tests of infection and the decision for each member",
          points: [
            "**3-year-old son:** no test needed; after a negative symptom screen and normal radiograph, start TPT within the week.",
            "**7-year-old daughter and the wife:** tuberculin skin test (read at 48-72 hours, 10 mm or more positive), IGRA or Cy-Tb where available; if positive, TPT. If no test is available, TPT may still be offered after excluding disease, because the household exposure itself carries high risk.",
            "**68-year-old diabetic mother:** same test and screen; diabetes plus household exposure makes TPT the favoured decision on clinical judgement, with liver function checked at baseline because of age.",
            "Offer HIV testing to the adults; a positive result would make TPT unconditional.",
          ],
        },
        {
          heading: "4. Regimen, doses and monitoring",
          points: [
            "**3-year-old:** 6H at 10 mg/kg daily (about 150 mg using dispersible 100 mg tablets) for 6 months with pyridoxine, or 3HP with weight-banded rifapentine since he is over 2 years; 6H is the simpler option where rifapentine paediatric supply is uncertain.",
            "**7-year-old:** 3HP with isoniazid 25 mg/kg weekly and rifapentine 450-600 mg by weight band for 12 doses, or 6H.",
            "**Wife (if not pregnant) and mother:** **3HP - isoniazid 900 mg plus rifapentine 900 mg once weekly for 12 doses** (750 mg rifapentine if under 50 kg); if the wife is pregnant, 6H at 300 mg daily with pyridoxine and rifapentine deferred; advise the wife on contraception because rifapentine defeats the oral pill.",
            "Monthly review for adherence, hepatotoxicity (jaundice, vomiting, dark urine), neuropathy, rash and a flu-like reaction with rifapentine; ALT if symptoms appear, stopping for ALT over three times normal with symptoms or over five times without.",
            "Record each contact's TPT start and outcome on Ni-kshay; completion is 180 doses of 6H within 9 months or 12 doses of 3HP within 16 weeks.",
          ],
        },
        {
          heading: "5. Follow-up of the household",
          points: [
            "Repeat the four-symptom screen for every member at each visit of the index patient during his 6 months of treatment and at any consultation for 2 years.",
            "Ensure the index patient's sputum follow-up is done at the end of the intensive phase and at the end of treatment, and confirm that he receives Ni-kshay Poshan Yojana support of Rs 1,000 per month, because a well-nourished, adherent index patient is the household's best protection.",
            "Any contact who develops symptoms during or after TPT is evaluated immediately with NAAT and never simply continued on isoniazid.",
          ],
        },
      ],
      mustDraw: [
        "A flow chart: household contact -> four-symptom screen plus chest radiograph -> NAAT if abnormal -> active TB treated as a new index case OR TPT after exclusion.",
        "A table of TPT regimens (6H, 3HP, 3HR, 6Lfx) with doses, eligible ages and completion criteria.",
      ],
      markSplit: [
        { part: "Definition of contact and notification", marks: 1.5 },
        { part: "Screening cascade for active disease", marks: 2.5 },
        { part: "Tests of infection and decision for each member", marks: 2 },
        { part: "Regimens with doses and monitoring", marks: 3 },
        { part: "Household follow-up", marks: 1 },
      ],
      keywords: ["household contact", "TB preventive treatment", "3HP", "6H", "Ni-kshay"],
    },
    {
      id: "respiratory-tb-infection-contacts-tpt-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on the tuberculin skin test: technique, interpretation and limitations.",
      openingLines: [
        "The tuberculin skin test (Mantoux test) is a delayed-type hypersensitivity test in which purified protein derivative of Mycobacterium tuberculosis is injected intradermally and the resulting induration at 48-72 hours is measured as evidence of prior sensitisation to mycobacterial antigens.",
        "It identifies TB infection, not disease, and its reading is interpreted against cut-offs that depend on the person's risk of infection and of progression.",
      ],
      answer: [
        {
          heading: "Technique",
          points: [
            "0.1 mL of PPD - **5 TU of PPD-S or 2 TU of PPD RT23** - drawn into a tuberculin syringe from a vial protected from light and heat.",
            "Intradermal injection on the volar aspect of the forearm with the bevel up, raising a 6-10 mm pale wheal; a failed intradermal injection is repeated at a site 5 cm away.",
            "**Read at 48-72 hours**: palpate the edges of induration, mark them with a ballpoint pen drawn towards the centre, and measure the transverse diameter in millimetres; erythema is ignored.",
            "Record the result in millimetres with the date, not as 'positive' or 'negative'.",
          ],
        },
        {
          heading: "Interpretation",
          points: [
            "**5 mm or more is positive** in PLHIV, severely malnourished children and other immunosuppressed persons; **10 mm or more is positive** in all others, including household contacts and health workers (NTEP).",
            "A positive test means infection at some time; it cannot distinguish infection from disease, cannot time the infection and cannot predict progression (positive predictive value for disease within 2 years only 2-5%).",
            "A negative test does not exclude infection in a recently exposed, immunosuppressed or very young person, and is never a reason to withhold TPT from a child under 5 who is a contact or from a person living with HIV.",
            "Uses: eligibility for TPT in contacts aged 5 and above and in clinical risk groups, supporting evidence in childhood tuberculosis, and baseline and conversion testing in health workers.",
          ],
        },
        {
          heading: "Limitations",
          points: [
            "**False negatives:** HIV, undernutrition, measles and other viral infections, live vaccines within 6 weeks, miliary or meningeal tuberculosis, steroids and immunosuppressants, infants under 6 months, sarcoidosis, and technical error including subcutaneous injection and light-damaged tuberculin.",
            "**False positives:** BCG vaccination (mainly within 10 years, more when given after infancy) and non-tuberculous mycobacteria.",
            "The **booster phenomenon**: a repeat test within 1-4 weeks may enlarge without new infection, so health workers receive a two-step baseline.",
            "Requires two visits, trained reading and cold-chain tuberculin; IGRA (QuantiFERON, T-SPOT) and the Indian Cy-Tb skin test using ESAT-6 and CFP-10 avoid the BCG cross-reaction, and Cy-Tb keeps the cost and logistics of a skin test with a 5 mm cut-off.",
          ],
        },
      ],
      mustDraw: ["A two-row cut-off table: 5 mm (PLHIV, severely malnourished, immunosuppressed) and 10 mm (all others)."],
      markSplit: [
        { part: "Technique and reading", marks: 1.5 },
        { part: "Cut-offs and meaning of a positive or negative result", marks: 2 },
        { part: "False negatives, false positives, booster effect and alternatives", marks: 1.5 },
      ],
      keywords: ["Mantoux", "PPD", "induration", "booster phenomenon", "Cy-Tb"],
    },
  ],
  mcqs: [
    {
      id: "respiratory-tb-infection-contacts-tpt-q1",
      stem: "A 3-year-old boy is a household contact of his father, who was notified last week with sputum-positive pulmonary tuberculosis. The child is asymptomatic, gaining weight, and his chest radiograph is normal. Tuberculin is not available at the centre. What should be done?",
      options: [
        "Defer any treatment until a tuberculin test or IGRA can be arranged",
        "Start TB preventive treatment now, because a test of infection is not required in a household contact under 5 years",
        "Give a repeat BCG vaccination and review in 3 months",
        "Start full four-drug anti-tuberculosis treatment because contacts under 5 are assumed to have disease",
        "Repeat the chest radiograph every 3 months for 2 years without any drug",
      ],
      answer: 1,
      explanation:
        "A household contact under 5 years is at the highest risk of progression to disseminated disease, so once active tuberculosis has been excluded by a negative symptom screen and a normal radiograph the Indian guidelines start TPT without any test of infection; 6H at 10 mg/kg is the simplest choice and 3HP is permitted above 2 years. Waiting for a test delays protection during the highest-risk window and is not required. BCG revaccination has no role in a contact. Four-drug treatment is for disease, which has been excluded, and radiographic surveillance alone abandons a child who can be protected with one drug.",
      difficulty: "easy",
    },
    {
      id: "respiratory-tb-infection-contacts-tpt-q2",
      stem: "The 32-year-old wife of a newly diagnosed pulmonary tuberculosis patient weighs 55 kg, is asymptomatic, is not pregnant, has a normal chest radiograph and a tuberculin induration of 14 mm at 72 hours. She asks for the shortest effective preventive regimen. What do you prescribe?",
      options: [
        "Isoniazid 300 mg daily for 6 months, because rifapentine regimens are not used in adults",
        "Isoniazid 900 mg plus rifapentine 900 mg once weekly for 12 doses",
        "Standard 2HRZE/4HRE, since a positive tuberculin test in a contact indicates disease",
        "No treatment, because BCG in childhood explains the induration",
        "Repeat the tuberculin test after 8 weeks and treat only if it enlarges",
      ],
      answer: 1,
      explanation:
        "An asymptomatic adult contact with a normal radiograph and a positive test of infection is the ideal 3HP candidate: 12 weekly doses of isoniazid 15 mg/kg (900 mg) plus rifapentine 900 mg at 50 kg or more, completed within 16 weeks, with advice that rifapentine defeats the oral contraceptive pill. 3HP is the programme's preferred adult regimen, so the first option is wrong in its reasoning even though 6H would also work. A positive tuberculin test signifies infection, not disease, so four-drug treatment is not indicated. BCG given at birth does not produce a 14 mm induration three decades later in a fresh household contact, and repeating the test wastes the 2-year window in which progression is most likely.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-tb-infection-contacts-tpt-q3",
      stem: "A 40-year-old man newly diagnosed with HIV has a CD4 count of 220/microlitre, no cough, fever, weight loss or night sweats, and a normal chest radiograph. He is being started on tenofovir-lamivudine-dolutegravir. Regarding TB preventive treatment, which statement is correct?",
      options: [
        "TPT must wait until a tuberculin test or IGRA is positive",
        "TPT should be deferred until he has completed 6 months of antiretroviral therapy",
        "TPT is started now without a test of infection, and 3HP may be used with dolutegravir without dose adjustment",
        "TPT is contraindicated because his CD4 count is below 250/microlitre",
        "Only 6H may be used because rifapentine cannot be combined with any antiretroviral drug",
      ],
      answer: 2,
      explanation:
        "Every person living with HIV who screens negative on the four-symptom screen and has a normal radiograph receives TPT regardless of any test of infection and regardless of CD4 count, and it is started alongside ART rather than after it. 3HP is compatible with efavirenz and with dolutegravir without dose change; the rifapentine restriction applies to protease inhibitor and nevirapine-based regimens, not to all antiretrovirals. A low CD4 count increases the need for TPT rather than contraindicating it, and waiting for a test or for 6 months of ART leaves him unprotected during his highest-risk period.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-tb-infection-contacts-tpt-q4",
      stem: "A healthy 26-year-old nurse has a tuberculin test read at 48 hours: erythema 22 mm in diameter with induration measuring 6 mm. She has no symptoms and no known contact. How should the result be recorded and interpreted?",
      options: [
        "Positive, because the erythema exceeds 10 mm",
        "Positive, because 5 mm of induration is the cut-off for health workers",
        "Induration 6 mm - negative for her category, since the cut-off in an immunocompetent adult is 10 mm",
        "Uninterpretable, because the test can only be read at exactly 72 hours",
        "Positive, and she should start 3HP immediately",
      ],
      answer: 2,
      explanation:
        "Only induration is measured, recorded in millimetres, and under NTEP the 5 mm cut-off is reserved for PLHIV, the severely malnourished child and the immunosuppressed; for everyone else, including health workers, 10 mm or more is positive, so 6 mm is negative in this nurse. Erythema is ignored regardless of its size. Readings are valid anywhere between 48 and 72 hours. Starting 3HP on a negative test with no symptoms and no exposure would be treatment without indication; what she needs is a two-step baseline and annual symptom screening as a health worker.",
      difficulty: "easy",
    },
    {
      id: "respiratory-tb-infection-contacts-tpt-q5",
      stem: "A 4-year-old girl is the household contact of her uncle, whose sputum shows rifampicin resistance on CBNAAT and who has been started on an all-oral MDR-TB regimen. She is asymptomatic with a normal chest radiograph. What is the most appropriate preventive management?",
      options: [
        "Isoniazid 10 mg/kg daily for 6 months",
        "3HP with weight-banded rifapentine",
        "Daily levofloxacin 15-20 mg/kg for 6 months with symptom screening every 6 months for 2 years",
        "No preventive drug; observe only, because no regimen is recommended for MDR contacts",
        "Full MDR-TB treatment with bedaquiline and linezolid",
      ],
      answer: 2,
      explanation:
        "The index strain is resistant to rifampicin and almost always to isoniazid, so the isoniazid-based 6H and the rifapentine-based 3HP are ineffective. The WHO's 2024 recommendation, adopted under NTEP, is 6 months of daily levofloxacin for household contacts of MDR/RR-TB on the basis of the TB-CHAMP and V-QUIN trials, together with clinical follow-up every 6 months for 2 years. Observation alone was the older approach and leaves a high-risk child unprotected. Full second-line treatment is reserved for confirmed disease, not for an asymptomatic contact with a normal radiograph.",
      difficulty: "hard",
    },
    {
      id: "respiratory-tb-infection-contacts-tpt-q6",
      stem: "A 45-year-old diabetic household contact of a pulmonary tuberculosis patient has an IGRA that is positive. On direct questioning he admits to a cough for 10 days and 2 kg of weight loss. What is the next step?",
      options: [
        "Start 3HP today, because the IGRA confirms infection",
        "Start 6H and review the cough in a month",
        "Send sputum for CBNAAT and withhold preventive treatment until active tuberculosis is excluded",
        "Start 2HRZE/4HRE empirically on the strength of the IGRA and symptoms",
        "Repeat the IGRA to confirm the result before deciding",
      ],
      answer: 2,
      explanation:
        "A positive symptom screen in a contact makes him presumptive tuberculosis, and giving isoniazid alone or with rifapentine to a person with unrecognised active disease is monotherapy that breeds resistance; the correct sequence is a sputum NAAT, a chest radiograph and clinical review, with TPT only after disease is excluded. Starting 3HP or 6H on the IGRA alone ignores the symptoms. Empirical four-drug treatment without a specimen throws away the chance of bacteriological confirmation and rifampicin susceptibility testing, both of which NTEP demands up front. Repeating the IGRA answers a question that is no longer relevant.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "respiratory-tb-infection-contacts-tpt-c1",
      front: "Definition of TB infection.",
      back: "A state of persistent immune response to M. tuberculosis antigens without evidence of clinically manifest active tuberculosis - asymptomatic, non-infectious, normal chest radiograph.",
    },
    {
      id: "respiratory-tb-infection-contacts-tpt-c2",
      front: "Lifetime risk of progression from infection, and the groups where it is highest.",
      back: "5-10%, half within the first 2 years; PLHIV about 10% per year; infants under 1 year 40-50%; also undernutrition, diabetes, silicosis, anti-TNF therapy, dialysis and recent infection.",
    },
    {
      id: "respiratory-tb-infection-contacts-tpt-c3",
      front: "NTEP definition of a household contact.",
      back: "A person who shared the same enclosed living space as the index patient for one or more nights, or for frequent or extended daytime periods, in the 3 months before the current treatment began.",
    },
    {
      id: "respiratory-tb-infection-contacts-tpt-c4",
      front: "Screening cascade for every household contact.",
      back: "Four-symptom screen (cough of any duration, fever, weight loss, night sweats) plus a chest radiograph for all; NAAT for any symptom or radiographic abnormality; TPT only after disease is excluded.",
    },
    {
      id: "respiratory-tb-infection-contacts-tpt-c5",
      front: "Mantoux technique and reading.",
      back: "0.1 mL of 5 TU PPD-S or 2 TU PPD RT23 intradermally on the volar forearm; read induration (not erythema) transversely in millimetres at 48-72 hours.",
    },
    {
      id: "respiratory-tb-infection-contacts-tpt-c6",
      front: "Tuberculin cut-offs under NTEP.",
      back: "5 mm or more: PLHIV, severely malnourished children, immunosuppressed. 10 mm or more: everyone else including contacts and health workers. Cy-Tb: 5 mm or more.",
    },
    {
      id: "respiratory-tb-infection-contacts-tpt-c7",
      front: "Who gets TPT without any test of infection?",
      back: "Household contacts under 5 years of age and all people living with HIV - once active disease has been excluded.",
    },
    {
      id: "respiratory-tb-infection-contacts-tpt-c8",
      front: "3HP: composition, dose and eligibility.",
      back: "12 once-weekly doses of isoniazid 15 mg/kg (maximum 900 mg) plus rifapentine 900 mg at 50 kg or more (weight-banded below), age 2 years and above, not in pregnancy, compatible with efavirenz and dolutegravir; complete within 16 weeks.",
    },
    {
      id: "respiratory-tb-infection-contacts-tpt-c9",
      front: "6H dosing and who it is chosen for.",
      back: "Isoniazid 10 mg/kg (maximum 300 mg) in children and 5 mg/kg (maximum 300 mg) in adults daily for 6 months with pyridoxine; regimen for children under 2, pregnant women and PLHIV on protease inhibitor or nevirapine ART; 180 doses within 9 months.",
    },
    {
      id: "respiratory-tb-infection-contacts-tpt-c10",
      front: "Preventive management for a household contact of MDR-TB.",
      back: "Daily levofloxacin for 6 months (750-1000 mg adult; 15-20 mg/kg child) per WHO 2024, plus symptom screening every 6 months for 2 years; never isoniazid-based regimens.",
    },
    {
      id: "respiratory-tb-infection-contacts-tpt-c11",
      front: "When to stop TPT for hepatotoxicity.",
      back: "ALT more than three times the upper limit with symptoms, or more than five times without; stop the drugs, check bilirubin, and do not restart without specialist advice.",
    },
    {
      id: "respiratory-tb-infection-contacts-tpt-c12",
      front: "Three causes each of a false-negative and a false-positive tuberculin test.",
      back: "False negative: HIV, severe undernutrition, measles or live vaccine within 6 weeks, miliary TB, steroids, infants under 6 months. False positive: recent BCG (mainly within 10 years) and non-tuberculous mycobacteria.",
    },
  ],
  references: [
    "Guidelines for Programmatic Management of Tuberculosis Preventive Treatment in India, Central TB Division, MoHFW, 2021",
    "WHO consolidated guidelines on tuberculosis, Module 1: Prevention - tuberculosis preventive treatment, 2nd edition, 2024",
    "National TB Elimination Programme Training Modules for Programme Managers and Medical Officers, 2020, and Guidance for TB Mukt Bharat Abhiyaan, 2024-25",
    "India TB Report 2024, Central TB Division, MoHFW",
    "National Strategic Plan for Tuberculosis Elimination 2017-2025, MoHFW",
    "Park's Textbook of Preventive and Social Medicine, 27th edition, 2023 - tuberculosis",
    "Harrison's Principles of Internal Medicine, 21st edition, 2022 - tuberculosis",
  ],
});

topics.push({
  id: "respiratory-pleural-effusion",
  title: "Pleural effusion: Light's criteria, the tubercular effusion and the parapneumonic one that needs a tube",
  oneLiner:
    "A pleural effusion is an abnormal collection of fluid in the pleural space that is classified as a transudate or an exudate by Light's criteria on a diagnostic thoracentesis; in India a lymphocyte-predominant exudate with adenosine deaminase above 40 U/L in a young adult is tubercular until proven otherwise, and a parapneumonic effusion with a pH under 7.20 needs a chest drain.",
  frequency: "common",
  keywords: [
    "pleural effusion",
    "Light's criteria",
    "thoracentesis",
    "pleural tap",
    "exudate",
    "transudate",
    "adenosine deaminase",
    "ADA",
    "tubercular pleural effusion",
    "parapneumonic effusion",
    "empyema",
    "malignant pleural effusion",
    "pleurodesis",
    "chest tube",
    "intercostal drain",
    "pleural biopsy",
    "chylothorax",
    "re-expansion pulmonary oedema",
  ],
  sections: [
    {
      heading: "Physiology, mechanisms and the causes that matter in India",
      points: [
        "The pleural space normally holds about **0.1-0.2 mL/kg of fluid** (10-20 mL), formed from the parietal pleural capillaries and absorbed by parietal pleural lymphatics whose capacity can rise twenty-fold. An effusion forms when formation outstrips absorption through **five mechanisms: raised hydrostatic pressure, reduced oncotic pressure, increased capillary permeability, obstructed lymphatic drainage, and passage of fluid from the peritoneum across the diaphragm**.",
        "**Transudates** arise from altered pressures with an intact pleura: heart failure (bilateral, right larger than left), cirrhosis with hepatic hydrothorax (right-sided in 85%), nephrotic syndrome, hypoalbuminaemia, peritoneal dialysis, hypothyroidism, urinothorax, constrictive pericarditis and atelectasis.",
        "**Exudates** arise from pleural disease: **tuberculosis, parapneumonic effusion and empyema, malignancy** (lung, breast, lymphoma, ovary, mesothelioma), pulmonary embolism (exudative in three-quarters), rheumatoid arthritis and lupus, pancreatitis (left-sided, high amylase), oesophageal rupture (salivary amylase, pH under 7.0), subphrenic abscess, drugs (nitrofurantoin, methotrexate, amiodarone), post-cardiac injury syndrome, benign asbestos effusion, chylothorax and haemothorax.",
        "In an Indian outpatient the ranking is simple: **a unilateral exudate in a young adult is tuberculosis** (pleural disease is the second commonest extrapulmonary form after lymph node), **a unilateral exudate in a smoker over 50 is malignancy** until cytology or biopsy says otherwise, an effusion with pneumonia is parapneumonic, and **a bilateral effusion with cardiomegaly is heart failure** and does not need a needle.",
        "**Massive effusion** (opacifying the hemithorax) is most often malignant, then tubercular, then empyema or hepatic hydrothorax; a massive effusion **without contralateral mediastinal shift** means the lung underneath has collapsed - endobronchial carcinoma or a fixed mediastinum from mesothelioma - and is a bronchoscopy and CT question, not a tap-and-forget.",
      ],
    },
    {
      heading: "Clinical assessment and imaging",
      points: [
        "Symptoms: breathlessness proportional to size and speed of accumulation, **pleuritic pain that fades as the fluid separates the pleural surfaces**, and a dry cough; ask for fever and night sweats, weight loss, smoking, occupational asbestos exposure, previous tuberculosis, orthopnoea and oedema, joint disease, and drugs.",
        "**Signs need at least 300-500 mL**: reduced movement on the affected side, **stony dull percussion**, absent or diminished breath sounds, and **reduced vocal fremitus and vocal resonance** - the combination that separates effusion from consolidation, where fremitus and resonance are increased. Bronchial breathing and aegophony may be heard just above the fluid level, the trachea and apex beat shift away in a large effusion, and Traube's space is obliterated by a left effusion.",
        "**Chest radiograph:** the posteroanterior film shows costophrenic blunting once **about 200 mL** has collected, the lateral film at 50 mL, and a **meniscus** curving up laterally; a supine film shows only a homogeneous haze. A **subpulmonic effusion** mimics a raised hemidiaphragm with a laterally placed dome, and a lateral decubitus film layers free fluid - a layer over 1 cm is safe to tap.",
        "**Thoracic ultrasound** detects as little as 5-20 mL, shows septations, loculation and pleural thickening that predict a complicated effusion, distinguishes fluid from consolidation and a raised diaphragm, and is now the **standard of care for guiding every pleural aspiration and drain** (BTS 2023), cutting the pneumothorax rate from 10-20% to under 5%.",
        "**Contrast CT of the thorax** is for the unexplained exudate: nodular or circumferential pleural thickening, thickening over 1 cm and involvement of the mediastinal pleura point to malignancy, and CT also shows the underlying lung, lymph nodes and any endobronchial lesion.",
      ],
    },
    {
      heading: "Diagnostic thoracentesis and Light's criteria",
      points: [
        "**Tap every new effusion of more than 1 cm on ultrasound or decubitus film**, except a bilateral effusion in obvious heart failure - and tap even that if it is unilateral or unequal, febrile, painful, without cardiomegaly, or fails to clear after 3 days of diuretics.",
        "Technique: patient sitting and leaning forward, site chosen by ultrasound one to two spaces below the top of dullness in the posterior axillary or mid-scapular line, local anaesthetic, needle passed **over the upper border of the rib** to avoid the neurovascular bundle below the rib, and 50-60 mL withdrawn for analysis. Relative contraindications are an INR over 1.5-2, platelets under 50,000/microlitre, uncorrected anticoagulation and skin infection at the site.",
        "**Light's criteria: the fluid is an exudate if any one is met - pleural fluid protein to serum protein ratio over 0.5, pleural fluid LDH to serum LDH ratio over 0.6, or pleural fluid LDH more than two-thirds of the upper limit of the laboratory's normal serum LDH.** Sensitivity for exudate is about 98%, but about a quarter of transudates in patients on diuretics are misclassified; when the clinical picture is heart failure and only one criterion is marginally met, a **serum-to-pleural protein gradient over 3.1 g/dL or albumin gradient over 1.2 g/dL** identifies the transudate.",
        "Send in order of value: appearance, **protein, LDH and glucose** with paired serum values, **pH in a heparinised blood-gas syringe** (never from a lidocaine-contaminated sample), total and differential cell count, Gram stain and culture in blood-culture bottles, **AFB smear, NAAT (Xpert Ultra) and mycobacterial culture, adenosine deaminase, and cytology** (at least 50 mL, a second sample adds 10-15% to the 60% yield of the first). Add triglycerides for milky fluid, amylase for suspected pancreatitis or oesophageal rupture, and haematocrit for bloody fluid.",
        "**Cell pattern:** neutrophils in acute processes (parapneumonic, embolism, pancreatitis, the first days of tuberculosis); **lymphocytes over 50%, and usually over 80%, in tuberculosis**, lymphoma and carcinoma; eosinophils over 10% after air or blood in the pleural space, with drugs, parasites and asbestos; and **fewer than 5% mesothelial cells is a clue to tuberculosis**. **Glucose under 60 mg/dL and pH under 7.30** occur in complicated parapneumonic effusion and empyema, tuberculosis, malignancy, rheumatoid effusion (glucose often under 30) and oesophageal rupture.",
        "A **therapeutic tap** removes no more than **1-1.5 L at one sitting** and stops at once for chest pain, persistent cough or lightheadedness, because **re-expansion pulmonary oedema** follows the rapid emptying of a large or long-standing effusion.",
      ],
    },
    {
      heading: "Tubercular pleural effusion: diagnosis and treatment under NTEP",
      points: [
        "Tubercular effusion is usually a delayed hypersensitivity reaction to a few bacilli that reach the pleura from a subpleural focus 3-6 months after infection, which is why it is **paucibacillary, occurs in young adults, and is often unilateral with little parenchymal disease** on the radiograph; fever, pleuritic pain and dry cough evolve over 1-3 weeks.",
        "**The fluid:** straw-coloured lymphocyte-predominant exudate with protein usually over 5 g/dL, glucose modestly low, **ADA over 40 U/L** (over 70 U/L is highly specific; empyema, lymphoma and rheumatoid effusion are the false positives), a lymphocyte-to-neutrophil ratio over 0.75, and mesothelial cells under 5%. Interferon-gamma over 140 pg/mL performs even better but is rarely available.",
        "**Bacteriology is weak:** AFB smear under 10%, **Xpert Ultra about 50%** (though a positive result is specific and reports rifampicin susceptibility), and liquid culture 25-50%. **Closed pleural biopsy with an Abrams or Cope needle shows granulomas in about 80%** and, combined with biopsy culture, confirms over 90%; thoracoscopic biopsy approaches 100%. Send sputum for NAAT too, because even a normal-looking lung is positive in 10-20%.",
        "In practice, NTEP allows a **clinically diagnosed extrapulmonary tuberculosis** label for a lymphocytic exudate with a high ADA in a patient with a compatible picture once malignancy and empyema are unlikely, so treatment is not held for a culture that takes 6 weeks. Notify on Ni-kshay and treat with **daily fixed-dose 2HRZE/4HRE for 6 months by weight band**, the same regimen as pulmonary disease; the continuation phase is extended only for neurological, skeletal and disseminated disease, not for the pleura.",
        "**Steroids are not routinely recommended**: they hasten fluid resolution but do not reduce residual thickening or improve outcome. Do a therapeutic tap for breathlessness, encourage breathing exercises, and expect the fluid to clear over 6-12 weeks; **paradoxical enlargement in the first weeks of treatment is recognised and is not failure**. Residual pleural thickening remains in up to half of patients and needs no extension of treatment.",
      ],
    },
    {
      heading: "Parapneumonic effusion, empyema and the chest drain",
      points: [
        "About 40% of pneumonias produce an effusion. **An uncomplicated parapneumonic effusion** is small, free-flowing, with pH over 7.20, glucose over 60 mg/dL and negative Gram stain and culture, and resolves with the antibiotic alone. **A complicated parapneumonic effusion** has any of **pH under 7.20, glucose under 40-60 mg/dL, LDH over 1,000 IU/L, a positive Gram stain or culture, or loculation on ultrasound**, and **empyema is frank pus** - both need drainage, because antibiotics cannot sterilise a loculated, acidic collection.",
        "Drain with an **ultrasound-guided small-bore (12-14 French) intercostal tube** inserted in the **safe triangle** (bounded by the anterior border of latissimus dorsi, the lateral border of pectoralis major and a line above the nipple, with its apex below the axilla) in the fifth intercostal space, connected to an underwater seal; flush regularly to keep it patent.",
        "Antibiotics must cover anaerobes as well as streptococci and staphylococci: **amoxicillin-clavulanate, or ceftriaxone plus metronidazole**, for 2-6 weeks depending on response, with clindamycin or vancomycin where MRSA or penicillin allergy is an issue. In India, keep tuberculosis in the differential of any chronic empyema and send the pus for NAAT and culture.",
        "Failure of drainage at 5-7 days with persisting sepsis or loculation calls for **intrapleural tissue plasminogen activator with DNase** (MIST2 protocol) or **surgical decortication by video-assisted thoracoscopy**; delay is what converts a treatable empyema into a trapped lung. The RAPID score (renal function, age, purulence, infection source and dietary factors as albumin) stratifies mortality at presentation.",
        "In children, empyema is commonest after staphylococcal or pneumococcal pneumonia and needs paediatric surgical referral; in adults, poor dentition, alcohol use and aspiration point to anaerobic empyema and a lung abscess.",
      ],
    },
    {
      heading: "Malignant effusion, other exudates and the transudates",
      points: [
        "**Malignant effusion** is an exudate, bloody in half, with lymphocyte predominance; **cytology confirms about 60% on the first sample**, and when it is negative the next step is CT and thoracoscopic (or image-guided) pleural biopsy, not a third tap. Median survival is 4-6 months, so management is palliative: **therapeutic aspiration for symptoms, and for recurrence either an indwelling pleural catheter or talc pleurodesis if the lung re-expands** - a trapped lung that does not re-expand after drainage cannot be pleurodesed.",
        "**Chylothorax** is milky fluid with **triglycerides over 110 mg/dL** or chylomicrons; lymphoma is the commonest non-traumatic cause, then thoracic duct injury at surgery and, in women of reproductive age, lymphangioleiomyomatosis. **Haemothorax** is a pleural haematocrit over 50% of the blood haematocrit and needs a large-bore drain and a surgeon.",
        "**Rheumatoid effusion** has the lowest glucose of all (often under 30 mg/dL), a low pH, high LDH and rheumatoid factor; **lupus effusion** has a positive ANA in fluid and responds to steroids; **post-cardiac injury (Dressler) effusion** follows infarction or cardiac surgery with fever and pericarditis and responds to NSAIDs or colchicine.",
        "**Transudates are treated by treating the cause**: diuretics for heart failure, salt restriction with diuretics for hepatic hydrothorax (a chest tube is contraindicated because it drains litres of protein-rich fluid and precipitates renal failure), and albumin replacement only where indicated; a transudate that fails to resolve or is painful or febrile is re-tapped because a second process may have supervened.",
        "**Refer** every unexplained exudate after a first analysis, every effusion needing a drain, every malignant effusion, and every effusion with a mediastinal shift towards the fluid or with haemoptysis; the family physician's task is the first tap, the notification of tuberculosis, and the follow-up radiograph at the end of treatment.",
      ],
    },
  ],
  tables: [
    {
      heading: "Light's criteria and the adjuncts that correct its errors",
      columns: ["Test", "Exudate if", "Note"],
      rows: [
        ["Pleural fluid protein / serum protein", "Over 0.5", "Any one criterion makes it an exudate"],
        ["Pleural fluid LDH / serum LDH", "Over 0.6", "LDH reflects pleural inflammation"],
        ["Pleural fluid LDH", "Over two-thirds of the upper limit of normal serum LDH", "About 200 U/L in most laboratories"],
        ["Serum minus pleural protein", "Under 3.1 g/dL supports exudate", "Over 3.1 g/dL reclassifies a diuretic-treated heart failure effusion as transudate"],
        ["Serum minus pleural albumin", "Under 1.2 g/dL supports exudate", "Over 1.2 g/dL reclassifies as transudate"],
        ["Pleural NT-proBNP", "Not applicable", "Over 1,500 pg/mL points to heart failure even when Light's criteria say exudate"],
      ],
    },
    {
      heading: "Pleural fluid patterns by cause",
      columns: ["Cause", "Appearance", "Predominant cells", "Glucose", "The deciding test"],
      rows: [
        ["Tuberculosis", "Straw-coloured", "Lymphocytes over 80%, mesothelial cells under 5%", "Mildly low", "ADA over 40 U/L; pleural biopsy granulomas; Xpert Ultra positive in about half"],
        ["Complicated parapneumonic / empyema", "Turbid or frank pus", "Neutrophils", "Under 40-60 mg/dL", "pH under 7.20, LDH over 1,000, positive Gram stain or culture; loculation on ultrasound"],
        ["Malignancy", "Bloody in half", "Lymphocytes; malignant cells", "Normal or low", "Cytology 60% first sample; thoracoscopic biopsy"],
        ["Heart failure", "Clear, bilateral", "Few mononuclear cells", "Normal", "Transudate; protein gradient over 3.1 g/dL; NT-proBNP"],
        ["Rheumatoid arthritis", "Turbid, yellow-green", "Lymphocytes", "Under 30 mg/dL", "Rheumatoid factor in fluid, very low pH, high LDH"],
        ["Pancreatitis or oesophageal rupture", "Serous or turbid, left-sided", "Neutrophils", "Low in rupture", "Amylase high (salivary isoenzyme and pH under 7.0 in rupture)"],
        ["Chylothorax", "Milky", "Lymphocytes", "Normal", "Triglycerides over 110 mg/dL or chylomicrons"],
        ["Haemothorax", "Frank blood", "Red cells", "Normal", "Pleural haematocrit over 50% of blood haematocrit"],
      ],
    },
  ],
  redFlags: [
    "A massive effusion with the trachea central or pulled towards the fluid - the underlying lung is collapsed; think endobronchial carcinoma or mesothelioma, arrange CT and bronchoscopy rather than repeated taps.",
    "Pleural fluid pH under 7.20, glucose under 40 mg/dL, frank pus or loculation on ultrasound in a patient with pneumonia - this needs a chest drain today, not another course of antibiotics.",
    "Chest pain, unrelenting cough or falling saturation during a therapeutic tap, or after more than 1.5 L has been removed - stop; re-expansion pulmonary oedema is developing.",
    "Sudden breathlessness after a pleural procedure - pneumothorax or haemothorax until a radiograph or ultrasound says otherwise.",
    "Bloody effusion in a smoker over 50, or an effusion with weight loss, clubbing or hoarseness - malignancy; cytology and CT before any empirical anti-tuberculosis treatment.",
    "An effusion that enlarges or fails to improve after 2 months of anti-tuberculosis treatment with good adherence - wrong diagnosis (lymphoma, carcinoma, empyema) or drug resistance; re-tap, biopsy and send for culture and susceptibility.",
  ],
  pearls: [
    "Light's criteria: protein ratio over 0.5, LDH ratio over 0.6, or pleural LDH over two-thirds of the upper normal serum LDH - any one makes an exudate; quote all three with the numbers.",
    "Effusion versus consolidation at the bedside: both are dull with reduced breath sounds, but vocal fremitus and vocal resonance are reduced in effusion and increased in consolidation.",
    "About 200 mL is needed to blunt the costophrenic angle on a PA film, 50 mL on a lateral film, and 5-20 mL is visible on ultrasound - which is why every tap is now ultrasound-guided.",
    "A lymphocyte-predominant exudate with ADA over 40 U/L and under 5% mesothelial cells in a young Indian adult is tubercular; treat with 2HRZE/4HRE for 6 months, notify, and do not give steroids routinely.",
    "The parapneumonic effusion that needs a tube: pH under 7.20, glucose under 40-60 mg/dL, LDH over 1,000 IU/L, positive Gram stain or culture, loculation, or frank pus.",
    "Never remove more than 1-1.5 L at one sitting, and never put a chest tube into a hepatic hydrothorax.",
    "The needle goes over the upper border of the rib below the space, because the neurovascular bundle runs under the lower border of the rib above.",
  ],
  theory: [
    {
      id: "respiratory-pleural-effusion-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "A 24-year-old student presents with low-grade fever, dry cough and right-sided chest pain for three weeks, and examination reveals a right-sided pleural effusion. Discuss the differential diagnosis, investigations and management.",
      openingLines: [
        "A pleural effusion is an abnormal accumulation of fluid in the pleural space, classified as a transudate or an exudate by Light's criteria on diagnostic thoracentesis; in a young adult in India a unilateral effusion with fever of three weeks' duration is an exudate and is tubercular until proved otherwise.",
        "My approach is to confirm and size the effusion with a radiograph and ultrasound, aspirate it under ultrasound guidance for analysis that discriminates tuberculosis from parapneumonic effusion, malignancy and the rarer exudates, and then treat under NTEP with notification and follow-up.",
      ],
      answer: [
        {
          heading: "1. Differential diagnosis",
          points: [
            "**Tubercular pleural effusion** - the first diagnosis: subacute fever, dry cough, pleuritic pain, a young adult, often a contact history; a hypersensitivity effusion that is paucibacillary.",
            "**Parapneumonic effusion or empyema** - preceded by an acute febrile pneumonia with purulent sputum and leucocytosis.",
            "**Malignant effusion** - lymphoma in this age group; look for lymphadenopathy, night sweats and weight loss, and mediastinal widening.",
            "Others: pulmonary embolism (sudden pain, tachycardia, risk factors), connective tissue disease (lupus in a young woman, rheumatoid effusion), subphrenic abscess or pancreatitis, and post-viral or drug-induced effusion.",
            "A transudate is unlikely in a febrile 24-year-old, but heart failure, nephrotic syndrome and cirrhosis are excluded on examination.",
          ],
        },
        {
          heading: "2. Clinical examination",
          points: [
            "Fever, pallor, clubbing, lymph nodes, BCG scar, weight and BMI.",
            "Reduced chest movement, stony dull percussion, absent breath sounds with reduced vocal fremitus and resonance on the right, tracheal and apical shift to the left in a large effusion, and bronchial breathing above the fluid.",
            "Abdomen for hepatosplenomegaly and ascites; joints and skin for connective tissue disease.",
          ],
        },
        {
          heading: "3. Investigations",
          points: [
            "Chest radiograph (blunted costophrenic angle with a meniscus; parenchymal lesion) and **thoracic ultrasound** to confirm, size and mark the tap site.",
            "Complete blood count, ESR, HIV test, blood glucose, and sputum NAAT for tuberculosis even though the lung looks clear.",
            "**Ultrasound-guided diagnostic thoracentesis** for protein, LDH and glucose with paired serum values, pH, cell count and differential, Gram stain and culture, AFB smear, Xpert Ultra and mycobacterial culture, **ADA**, and cytology.",
            "**Expected in tuberculosis:** straw-coloured exudate by Light's criteria, protein over 5 g/dL, lymphocytes over 80%, mesothelial cells under 5%, ADA over 40 U/L; Xpert positive in about half.",
            "If the picture is atypical or the fluid analysis is not diagnostic: contrast CT of the thorax and closed or thoracoscopic pleural biopsy for histology and culture.",
          ],
        },
        {
          heading: "4. Management",
          points: [
            "Notify on Ni-kshay as clinically diagnosed or bacteriologically confirmed extrapulmonary tuberculosis and start **daily fixed-dose 2HRZE/4HRE by weight band for 6 months**, with pyridoxine if at risk of neuropathy and baseline liver tests.",
            "Therapeutic aspiration of up to 1-1.5 L for breathlessness; no routine steroids; breathing exercises; paracetamol for pleuritic pain.",
            "Counsel about adherence, adverse effects (jaundice, visual change), the possibility of paradoxical enlargement in the first weeks, and Ni-kshay Poshan Yojana nutritional support.",
            "Household contact screening with symptom screen and chest radiograph, and TB preventive treatment for eligible contacts.",
            "Follow-up clinically and with a radiograph at 2 months and at the end of treatment; residual pleural thickening needs no extension. Re-evaluate with repeat tap, biopsy and culture if the effusion enlarges after 8 weeks of adherent treatment.",
            "If the fluid is instead purulent or has pH under 7.20, insert an ultrasound-guided intercostal drain and give amoxicillin-clavulanate or ceftriaxone with metronidazole for 2-6 weeks; if cytology shows lymphoma, refer for staging and chemotherapy.",
          ],
        },
      ],
      mustDraw: [
        "A table of Light's criteria with the three thresholds.",
        "A comparison table of pleural fluid in tuberculosis, parapneumonic effusion and malignancy (cells, glucose, ADA, pH, deciding test).",
      ],
      markSplit: [
        { part: "Differential diagnosis with reasoning", marks: 2 },
        { part: "Clinical signs of effusion", marks: 1 },
        { part: "Investigations including Light's criteria and fluid analysis", marks: 4 },
        { part: "Treatment under NTEP, follow-up and contacts", marks: 3 },
      ],
      keywords: ["pleural effusion", "Light's criteria", "ADA", "tubercular effusion", "2HRZE/4HRE"],
    },
    {
      id: "respiratory-pleural-effusion-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on Light's criteria and the analysis of pleural fluid.",
      openingLines: [
        "Light's criteria classify a pleural effusion as an exudate if any one of three is met: a pleural fluid to serum protein ratio over 0.5, a pleural fluid to serum LDH ratio over 0.6, or a pleural fluid LDH more than two-thirds of the upper limit of normal for serum LDH; an effusion meeting none is a transudate.",
        "The distinction directs the entire work-up, because a transudate is treated by treating heart, liver or kidney disease, whereas an exudate demands a search for pleural disease - tuberculosis, infection or malignancy.",
      ],
      answer: [
        {
          heading: "Light's criteria and their limitations",
          points: [
            "Sensitivity for exudate about 98%; specificity limited because about 25% of transudates in patients on diuretics are misclassified as exudates.",
            "Correction when heart failure is likely and the criteria are marginal: serum minus pleural protein over 3.1 g/dL, or serum minus pleural albumin over 1.2 g/dL, indicates a transudate; pleural NT-proBNP over 1,500 pg/mL supports heart failure.",
            "Transudates: heart failure, cirrhosis, nephrotic syndrome, hypoalbuminaemia, peritoneal dialysis, hypothyroidism, urinothorax. Exudates: tuberculosis, parapneumonic effusion and empyema, malignancy, pulmonary embolism, connective tissue disease, pancreatitis, oesophageal rupture, drugs, chylothorax.",
          ],
        },
        {
          heading: "The routine analysis",
          points: [
            "Appearance: straw-coloured (tuberculosis), turbid or pus (empyema), bloody (malignancy, embolism, trauma; haematocrit over 50% of blood is haemothorax), milky (chylothorax, triglycerides over 110 mg/dL).",
            "Protein and LDH with paired serum values for Light's criteria; **glucose under 60 mg/dL and pH under 7.30** in complicated parapneumonic effusion, empyema, tuberculosis, malignancy and rheumatoid effusion; pH under 7.20 in a parapneumonic effusion mandates drainage.",
            "Cell count and differential: neutrophils in acute infection and embolism; lymphocytes over 80% with mesothelial cells under 5% in tuberculosis; eosinophils after air or blood in the pleural space, drugs and parasites.",
            "Microbiology: Gram stain and culture in blood-culture bottles, AFB smear, Xpert Ultra and mycobacterial culture; cytology on at least 50 mL, 60% yield on the first sample.",
          ],
        },
        {
          heading: "Special tests",
          points: [
            "**ADA over 40 U/L** with lymphocyte predominance is the practical marker of tubercular effusion in India (false positives in empyema, lymphoma and rheumatoid effusion).",
            "Amylase for pancreatitis and oesophageal rupture; rheumatoid factor and ANA for connective tissue disease; triglycerides for chylothorax.",
            "Pleural biopsy (closed needle or thoracoscopic) when fluid analysis fails - granulomas in 80% of tubercular effusions.",
          ],
        },
      ],
      mustDraw: ["The three-line Light's criteria table with the two correction gradients beneath it."],
      markSplit: [
        { part: "Light's criteria stated with numbers and their limitation", marks: 2 },
        { part: "Routine fluid analysis and what each finding means", marks: 2 },
        { part: "Special tests including ADA and biopsy", marks: 1 },
      ],
      keywords: ["Light's criteria", "exudate", "transudate", "ADA", "pleural fluid pH"],
    },
  ],
  mcqs: [
    {
      id: "respiratory-pleural-effusion-q1",
      stem: "A 58-year-old man with a right pleural effusion has pleural fluid protein 3.9 g/dL, serum protein 6.5 g/dL, pleural fluid LDH 310 U/L and serum LDH 420 U/L; the laboratory's upper limit of normal serum LDH is 250 U/L. How is the effusion classified?",
      options: [
        "Transudate, because the LDH ratio is below 0.6",
        "Transudate, because the protein ratio is exactly 0.6 and the threshold must be exceeded by more",
        "Exudate, because the protein ratio is 0.6 and the pleural LDH exceeds two-thirds of the upper normal serum LDH",
        "Indeterminate until pleural fluid pH is measured",
        "Exudate only if the pleural glucose is below 60 mg/dL",
      ],
      answer: 2,
      explanation:
        "The protein ratio is 3.9/6.5 = 0.60, which exceeds 0.5, and the pleural LDH of 310 U/L exceeds two-thirds of 250 (167 U/L), so two of the three Light's criteria are met and the effusion is an exudate; any single criterion would have sufficed. The LDH ratio of 0.74 in fact also exceeds 0.6, so the first option miscalculates. Light's criteria do not require pH or glucose, which are used afterwards to characterise the exudate, not to define it.",
      difficulty: "easy",
    },
    {
      id: "respiratory-pleural-effusion-q2",
      stem: "A 22-year-old woman has a 3-week history of fever and left pleuritic pain with a moderate left effusion. Pleural fluid: protein 5.4 g/dL, LDH 480 U/L, glucose 55 mg/dL, lymphocytes 92%, mesothelial cells 2%, ADA 72 U/L, Xpert Ultra negative, cytology negative for malignant cells. What is the most appropriate management?",
      options: [
        "Wait 6 weeks for mycobacterial culture before starting any treatment",
        "Notify as clinically diagnosed extrapulmonary tuberculosis and start daily 2HRZE/4HRE, with therapeutic aspiration if breathless",
        "Start amoxicillin-clavulanate for a parapneumonic effusion and review in one week",
        "Give prednisolone 40 mg daily alone to resolve a hypersensitivity effusion",
        "Insert an intercostal drain because the glucose is below 60 mg/dL",
      ],
      answer: 1,
      explanation:
        "A lymphocyte-predominant exudate with an ADA above 40 U/L (here 72), scanty mesothelial cells and no malignant cells in a young adult with a subacute febrile illness is tubercular pleural effusion; Xpert is negative in about half of these paucibacillary effusions, and NTEP permits treatment as clinically diagnosed extrapulmonary tuberculosis with the standard 6-month daily regimen while culture is awaited. Waiting 6 weeks abandons the patient. A parapneumonic effusion would be neutrophilic after an acute pneumonia. Steroids alone treat nothing and are not routinely recommended even as an adjunct. A drain is for pH under 7.20, pus or loculation in a parapneumonic effusion, not for a modestly low glucose in a tubercular one.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-pleural-effusion-q3",
      stem: "A 50-year-old alcoholic man with right lower lobe pneumonia on intravenous ceftriaxone for 4 days remains febrile. Ultrasound shows a septated right effusion; aspirated fluid is turbid with pH 7.10, glucose 32 mg/dL and LDH 1,800 U/L, Gram stain negative. What is the correct next step?",
      options: [
        "Continue ceftriaxone for another week and repeat the aspiration",
        "Insert an ultrasound-guided intercostal drain and add metronidazole to cover anaerobes",
        "Add oral prednisolone to reduce pleural inflammation",
        "Perform talc pleurodesis to prevent recurrence",
        "Start anti-tuberculosis treatment because the glucose is low",
      ],
      answer: 1,
      explanation:
        "Septation on ultrasound, pH under 7.20, glucose under 40 mg/dL and LDH over 1,000 IU/L define a complicated parapneumonic effusion that antibiotics alone cannot sterilise; it needs tube drainage, and in an alcoholic with probable aspiration the antibiotic must cover anaerobes, hence metronidazole with the ceftriaxone (or amoxicillin-clavulanate). A negative Gram stain does not exclude infection. Continuing antibiotics alone allows organisation into a trapped lung. Steroids have no role, pleurodesis is for recurrent malignant effusions with an expanded lung, and a neutrophilic acidic effusion after acute pneumonia is not the picture of tuberculosis, although the fluid should still be sent for NAAT and culture.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-pleural-effusion-q4",
      stem: "A 68-year-old woman with known heart failure on furosemide has bilateral effusions, larger on the right. Fluid analysis: pleural protein 3.5 g/dL, serum protein 6.6 g/dL, pleural LDH 150 U/L, serum LDH 300 U/L (upper limit of normal 250), pleural albumin 1.9 g/dL, serum albumin 3.4 g/dL. How should this be interpreted?",
      options: [
        "Exudate - proceed to CT and pleural biopsy",
        "Exudate - start empirical anti-tuberculosis treatment",
        "Transudate misclassified by the protein ratio; the albumin gradient of 1.5 g/dL confirms heart failure, so optimise diuretics",
        "Indeterminate - repeat the tap after stopping furosemide for a week",
        "Chylothorax - measure triglycerides",
      ],
      answer: 2,
      explanation:
        "The protein ratio is 0.53, marginally over 0.5, but the LDH ratio (0.5) and the absolute LDH (150, below 167) are transudative; in a diuretic-treated heart failure patient this is the classical misclassification, and a serum-to-pleural albumin gradient over 1.2 g/dL (here 1.5) or a protein gradient over 3.1 g/dL restores the transudate label, so the effusion is managed by treating the heart failure. There is no indication for CT, biopsy or anti-tuberculosis treatment. Stopping diuretics in heart failure to repeat a tap is harmful and unnecessary, and clear bilateral fluid is not chylothorax.",
      difficulty: "hard",
    },
    {
      id: "respiratory-pleural-effusion-q5",
      stem: "A 62-year-old smoker has a complete opacification of the left hemithorax on a chest radiograph, with the trachea deviated to the left. What is the most likely explanation?",
      options: [
        "A massive tubercular effusion pushing the mediastinum",
        "A massive effusion with underlying lung collapse from an obstructing endobronchial carcinoma",
        "Tension hydrothorax requiring immediate needle decompression",
        "A large empyema that has fixed the mediastinum in the midline",
        "A left pneumothorax with fluid level",
      ],
      answer: 1,
      explanation:
        "A massive effusion normally pushes the trachea and mediastinum away from the fluid; deviation towards the opaque side means volume loss under the fluid, which in a smoker of this age means collapse from an endobronchial tumour (or, less often, a mesothelioma encasing the lung), so the next steps are contrast CT and bronchoscopy rather than repeated aspiration. A tubercular effusion would shift the trachea to the right. Tension physiology also pushes the mediastinum away. A fixed midline mediastinum in mesothelioma is possible but does not explain a shift towards the lesion, and a pneumothorax is lucent, not opaque.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-pleural-effusion-q6",
      stem: "During a therapeutic aspiration of a large 3-week-old right effusion, a 45-year-old woman develops chest tightness and an irritating cough after 1.2 L has been removed. What is the correct action?",
      options: [
        "Continue until the effusion is completely drained to avoid a second procedure",
        "Stop the procedure immediately; the symptoms herald re-expansion pulmonary oedema",
        "Give intravenous furosemide and continue draining",
        "Change to a chest tube and drain the remainder over the next hour",
        "Inject lidocaine into the pleural space and continue",
      ],
      answer: 1,
      explanation:
        "Chest tightness and a persistent cough during large-volume aspiration are the warning signs of re-expansion pulmonary oedema, which follows rapid removal of more than about 1-1.5 L or the re-inflation of a lung that has been collapsed for days, and the only correct response is to stop and reassess with saturation, a radiograph and, if needed, oxygen. Complete drainage in one sitting is exactly what causes the complication. Furosemide does not prevent it. A chest tube draining the remainder in the next hour reproduces the same rapid re-expansion, and intrapleural lidocaine treats neither the symptom nor the cause.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "respiratory-pleural-effusion-c1",
      front: "Light's criteria for an exudate.",
      back: "Any one of: pleural/serum protein over 0.5; pleural/serum LDH over 0.6; pleural LDH over two-thirds of the upper limit of normal serum LDH.",
    },
    {
      id: "respiratory-pleural-effusion-c2",
      front: "How to rescue a diuretic-treated heart failure effusion misclassified as exudate.",
      back: "Serum minus pleural protein over 3.1 g/dL, or serum minus pleural albumin over 1.2 g/dL, indicates a transudate; pleural NT-proBNP over 1,500 pg/mL supports heart failure.",
    },
    {
      id: "respiratory-pleural-effusion-c3",
      front: "Bedside signs that separate effusion from consolidation.",
      back: "Both are dull with reduced breath sounds; effusion is stony dull with reduced vocal fremitus and resonance and shift away; consolidation has bronchial breathing with increased fremitus and resonance and no shift.",
    },
    {
      id: "respiratory-pleural-effusion-c4",
      front: "Volumes of fluid needed to show on each imaging method.",
      back: "About 200 mL to blunt the costophrenic angle on a PA film, 50 mL on a lateral film, 5-20 mL on ultrasound; a decubitus layer over 1 cm is safe to tap.",
    },
    {
      id: "respiratory-pleural-effusion-c5",
      front: "Pleural fluid profile of tubercular effusion.",
      back: "Straw-coloured exudate, protein often over 5 g/dL, lymphocytes over 80%, mesothelial cells under 5%, ADA over 40 U/L (over 70 highly specific), Xpert Ultra positive in about half, closed biopsy granulomas in 80%.",
    },
    {
      id: "respiratory-pleural-effusion-c6",
      front: "Treatment of tubercular pleural effusion under NTEP.",
      back: "Notify; daily fixed-dose 2HRZE/4HRE for 6 months by weight band; therapeutic tap for breathlessness; no routine steroids; paradoxical enlargement early is not failure; residual thickening needs no extension.",
    },
    {
      id: "respiratory-pleural-effusion-c7",
      front: "Criteria for draining a parapneumonic effusion.",
      back: "pH under 7.20, glucose under 40-60 mg/dL, LDH over 1,000 IU/L, positive Gram stain or culture, loculation on ultrasound, or frank pus (empyema).",
    },
    {
      id: "respiratory-pleural-effusion-c8",
      front: "Boundaries of the safe triangle for a chest drain.",
      back: "Anterior border of latissimus dorsi, lateral border of pectoralis major, a horizontal line at the level of the nipple, with the apex below the axilla; fifth intercostal space, over the upper border of the rib.",
    },
    {
      id: "respiratory-pleural-effusion-c9",
      front: "Maximum volume to remove at one therapeutic tap, and why.",
      back: "1-1.5 L; stop for chest pain, cough or lightheadedness - re-expansion pulmonary oedema follows rapid emptying of a large or long-standing effusion.",
    },
    {
      id: "respiratory-pleural-effusion-c10",
      front: "Fluid clues: very low glucose, milky fluid, bloody fluid, high amylase.",
      back: "Glucose under 30 mg/dL - rheumatoid effusion (also empyema, TB, malignancy); milky - chylothorax with triglycerides over 110 mg/dL; bloody - malignancy, embolism, trauma (haemothorax if haematocrit over 50% of blood); amylase - pancreatitis or oesophageal rupture.",
    },
    {
      id: "respiratory-pleural-effusion-c11",
      front: "Massive effusion without contralateral mediastinal shift - what does it mean?",
      back: "The lung beneath has collapsed: endobronchial carcinoma or a mesothelioma fixing the mediastinum; needs CT and bronchoscopy, not repeated aspiration.",
    },
    {
      id: "respiratory-pleural-effusion-c12",
      front: "Management options for a recurrent malignant pleural effusion.",
      back: "Therapeutic aspiration for symptoms; for recurrence an indwelling pleural catheter, or talc pleurodesis if the lung re-expands (impossible in trapped lung); palliative care with a median survival of 4-6 months.",
    },
  ],
  references: [
    "British Thoracic Society Guideline for Pleural Disease, 2023",
    "Light RW. Pleural Diseases, 6th edition, 2013, and the original Light's criteria, Annals of Internal Medicine 1972",
    "Index-TB Guidelines: Guidelines on extrapulmonary tuberculosis for India, MoHFW and WHO Country Office, 2016",
    "National TB Elimination Programme Training Modules for Medical Officers, 2020 - extrapulmonary tuberculosis",
    "Harrison's Principles of Internal Medicine, 21st edition, 2022 - disorders of the pleura",
    "API Textbook of Medicine, 11th edition, 2019 - pleural diseases",
  ],
});

const cases: ClinicalCase[] = [
  {
    id: "respiratory-case-1",
    title: "Long case: acute exacerbation in a bidi smoker with COPD",
    kind: "long",
    subjectId: "respiratory",
    opening:
      "A 58-year-old farmer who has smoked bidis for 35 years presents with 4 days of worsening breathlessness, increased sputum that has turned yellow-green, and low-grade fever, on a background of 5 years of exertional breathlessness and morning cough treated with salbutamol tablets and an occasional inhaler.",
    minutes: 30,
    frequency: "core",
    sections: [
      {
        heading: "How to open the presentation",
        points: [
          "Give the identifying data, the presenting complaints in the patient's own order with duration, and then a one-line problem statement before any detail, because the examiner decides in the first thirty seconds whether you have understood the case.",
          "Say: 'Mr X, a 58-year-old farmer from a village 40 km from the district hospital, a bidi smoker of 35 years, a known case of chronic obstructive pulmonary disease for 5 years, presents with increased breathlessness for 4 days, increased volume and purulence of sputum for 4 days, and low-grade fever for 3 days.'",
          "Add the negatives that matter early: no chest pain, no haemoptysis, no orthopnoea or paroxysmal nocturnal dyspnoea, no calf swelling, no drowsiness, and no recent travel or immobilisation.",
          "State the current treatment honestly as the patient takes it - salbutamol 4 mg tablets twice daily bought from a chemist, a salbutamol inhaler used two or three times a week, and a theophylline syrup - because the therapeutic gap is the heart of the management discussion.",
          "Close the opening with the current status: he walked into the ward breathless on the flat, is speaking in short phrases, and has an oxygen saturation of 88% on room air.",
        ],
      },
      {
        heading: "History of the present exacerbation and of the chronic disease",
        points: [
          "Describe the exacerbation by the three Anthonisen cardinal symptoms - increased dyspnoea, increased sputum volume and increased sputum purulence - and say explicitly that all three are present, which makes this a type 1 exacerbation and predicts benefit from antibiotics.",
          "Take the chronic course from the beginning: cough with white morning sputum for 8 years, breathlessness on climbing a slope for 5 years, now breathless after walking about 100 metres on level ground, which is mMRC grade 3.",
          "Count the exacerbations in the past year: two courses of antibiotics and prednisolone from the local practitioner, one of which required 5 days of admission with oxygen, which places him in GOLD Group E regardless of the symptom score.",
          "Ask about the symptoms of the mimics: pleuritic chest pain and rigors for pneumonia, sudden onset with unilateral pain for pneumothorax, a swollen calf or long immobility for embolism, and orthopnoea or oedema for left heart failure.",
          "Ask the four tuberculosis screening questions - cough for 2 weeks or more, fever, night sweats and weight loss - because a chronic cougher who becomes 'different' may have tuberculosis, and every such patient in India needs a sputum NAAT at some point.",
          "Document weight loss, appetite, sleep and mood, since undernutrition and depression are the commonest untreated comorbidities in COPD and both change the prognosis.",
        ],
      },
      {
        heading: "Exposure, occupational and comorbidity history",
        points: [
          "Quantify the tobacco: 20 bidis a day for 35 years is roughly 17 pack-years by the conventional calculation, but say that bidi smoke delivers more tar and carbon monoxide per stick than a cigarette so the biological dose is higher than the number suggests.",
          "Ask whether he has tried to stop, what happened when he did, the time to the first bidi after waking, and whether anyone else in the house smokes - these decide the cessation plan.",
          "Ask about biomass exposure: the household cooked on a wood and dung-cake chulha until 6 years ago when an LPG connection arrived under the Ujjwala scheme, and his wife has cooked on it for 30 years, which puts her at risk of the same disease.",
          "Occupational exposure as a farmer includes grain dust, pesticide spraying without a mask, and burning of crop residue, all of which aggravate airway disease.",
          "Record comorbidities that alter treatment: hypertension on amlodipine, no known diabetes, no ischaemic heart disease, no glaucoma or prostatic symptoms that would matter for an antimuscarinic, and no peptic ulcer that would matter for steroids.",
          "Ask about previous chest radiographs, any spirometry ever done, and any previous treatment for tuberculosis, and bring the documents to the examiner if they exist.",
        ],
      },
      {
        heading: "Family, social and functional history",
        points: [
          "He is the main earner for a family of five with two acres of land; a season lost to breathlessness means borrowed money, so the cost of every inhaler you propose matters.",
          "Describe the house: two rooms, LPG cylinder refilled irregularly with a return to the chulha when money is short, no electricity supply for a concentrator for hours each day, and a bus journey of an hour to the hospital.",
          "Ask what he can no longer do - ploughing, walking to the field, climbing the temple steps - and what he wants to be able to do again, because that is the outcome measure that will keep him on treatment.",
          "Ask who will supervise the inhaler at home, whether he can read the counter on a device, and whether his son can be taught alongside him.",
          "Check enrolment for Ayushman Bharat PM-JAY and whether the family collects free drugs from the Ayushman Arogya Mandir, and screen the wife for chronic cough and breathlessness from her own biomass exposure.",
        ],
      },
      {
        heading: "Examination to demonstrate",
        points: [
          "General survey: thin man with a BMI of 18, sitting forward with hands on his knees, pursed-lip breathing, using the sternomastoids and alae nasi, respiratory rate 28 per minute, pulse 108 regular, blood pressure 140/90 mmHg, temperature 37.8 degrees Celsius, SpO2 88% on room air, no cyanosis and no clubbing.",
          "Look for the signs of carbon dioxide retention and demonstrate their absence: warm peripheries, bounding pulse, flapping tremor on holding the wrists dorsiflexed for 30 seconds, drowsiness and papilloedema - a candidate who does not look for the flap will be asked why.",
          "Chest: barrel-shaped with increased anteroposterior diameter, tracheal tug with a shortened cricosternal distance of two finger-breadths, reduced chest expansion of 2 cm, hyperresonant percussion note with obliterated cardiac and liver dullness, and on auscultation diminished vesicular breath sounds with prolonged expiration, polyphonic expiratory wheeze and scattered coarse crepitations at both bases that alter on coughing.",
          "Say what you did not find, because it excludes the mimics: no area of dullness with bronchial breathing to suggest consolidation, no unilateral silence with hyperresonance to suggest pneumothorax, no stony dullness to suggest effusion, and no pleural rub.",
          "Cardiovascular: raised jugular venous pressure of 6 cm with a prominent a wave, a left parasternal heave, a loud pulmonary component of the second heart sound, and pitting oedema to the mid-shin, which together are the clinical picture of cor pulmonale; the apex is impalpable because of hyperinflation.",
          "Complete with the abdomen for a tender pulsatile liver of right heart failure, the calves for asymmetry, a nutritional assessment with mid-arm circumference, and a mention that you looked at the sputum pot and found thick yellow-green sputum.",
        ],
      },
      {
        heading: "Presenting the assessment",
        points: [
          "State the diagnosis in layers: the disease, its severity grade if spirometry exists, its GOLD group, the acute problem, its severity, and the complications and comorbidities - not simply 'a case of COPD'.",
          "Grade the exacerbation as severe on clinical grounds: speaking in phrases, respiratory rate over 25, pulse over 100, accessory muscle use, SpO2 under 90%, in a patient with a previous admission - and say that an arterial blood gas is needed within the hour to decide on non-invasive ventilation.",
          "Offer the differential diagnosis for the acute deterioration before it is asked for, and say which single investigation excludes each.",
          "Finish with the two questions that decide the maintenance plan: what he is on now, and why it failed - a short-acting bronchodilator alone in a Group E patient is a treatment failure waiting to happen.",
        ],
      },
    ],
    summaryStatement:
      "This is a 58-year-old undernourished farmer and bidi smoker of about 17 pack-years with additional biomass and agricultural dust exposure, a known case of chronic obstructive pulmonary disease for 5 years in GOLD Group E on the basis of two exacerbations in the past year including one admission, with mMRC grade 3 breathlessness, presenting with a severe type 1 Anthonisen exacerbation of 4 days with all three cardinal symptoms, hypoxaemia with SpO2 of 88% on room air without clinical evidence of carbon dioxide narcosis, clinical cor pulmonale, and no clinical features of pneumonia, pneumothorax, effusion or pulmonary embolism, in a patient treated so far with a short-acting bronchodilator and oral theophylline alone.",
