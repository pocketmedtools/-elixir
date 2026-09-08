/**
 * Diagrams for obstetrics, keyed by topic id.
 */
import type { DiagramSet } from "../lib/types";

const diagrams: DiagramSet = {
  "obstetrics-antenatal-care": [
    {
      kind: "flow",
      heading: "The first antenatal visit, in order",
      caption:
        "Registration within 12 weeks is the single most examinable point - dating, screening, anaemia correction and the legal MTP window all depend on it.",
      steps: [
        {
          label: "Register within 12 weeks",
          detail: "Issue the Mother and Child Protection Card, the woman-held clinical and legal record",
          tone: "good",
        },
        {
          label: "Date by Naegele's rule",
          detail: "LMP plus 9 months plus 7 days; add or subtract the difference from a 28-day cycle",
        },
        {
          label: "Confirm dating by crown-rump length",
          detail:
            "Scan overrides the LMP if apart by more than 7 days before 14 weeks, 10 days at 14-22 weeks, 14 days after 22 weeks",
          tone: "decision",
        },
        {
          label: "Booking bloods and urine",
          detail:
            "Haemoglobin, blood group with Rh, urine routine and microscopy, DIPSI 75 g, HIV (opt-out), VDRL, HBsAg",
        },
        {
          label: "Dating ultrasound with Form F",
          detail:
            "PCPNDT Act: registered centre and machine, Form F retained 2 years, notice that sex determination is an offence",
          tone: "warn",
        },
        {
          label: "Record the baseline examination",
          detail: "Weight, blood pressure, pallor, oedema, urine albumin and sugar",
        },
        {
          label: "Start supplements and Td-1",
          detail: "Folic acid 400 microgram daily; Td 0.5 mL IM with the second dose 4 weeks later",
        },
        {
          label: "Mark high risk and teach danger signs",
          detail: "Aspirin 75-150 mg at night from 12-16 weeks if she is at high risk of pre-eclampsia",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Antenatal visit schedule: Indian programme versus WHO 2016",
      caption:
        "India's programme indicator remains four visits; WHO 2016 recommends eight contacts because eight reduce perinatal mortality.",
      columns: ["Visit", "Government of India", "WHO 2016 contact", "What is done"],
      rows: [
        [
          "1",
          "Within 12 weeks",
          "Up to 12 weeks",
          "Registration, MCP card, full investigation panel, dating scan, Td-1",
        ],
        [
          "2",
          "14-26 weeks",
          "20 weeks",
          "Anomaly scan at 18-20 weeks, IFA and calcium, albendazole, Td-2",
        ],
        [
          "3",
          "28-34 weeks",
          "26 and 30 weeks",
          "Repeat haemoglobin and blood sugar, anti-D at 28 weeks if Rh negative",
        ],
        [
          "4",
          "36 weeks to term",
          "34, 36, 38 and 40 weeks",
          "Presentation and lie, birth plan, danger signs, place of delivery",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Routine antenatal prescriptions, in the order they start",
      caption: "Every visit also repeats the danger-sign counselling.",
      steps: [
        {
          label: "Folic acid 400 microgram daily",
          detail:
            "Preconception to 12 weeks; 5 mg if previous neural tube defect, antiepileptics, diabetes, obesity or haemoglobinopathy",
        },
        {
          label: "Td 0.5 mL IM, two doses",
          detail: "4 weeks apart, first as early as possible; a single booster if 2 doses within the last 3 years",
        },
        {
          label: "Aspirin 75-150 mg at night",
          detail: "From 12-16 weeks to 36 weeks in high risk only - it prevents about two in three early pre-eclampsias",
          tone: "good",
        },
        {
          label: "Calcium 500 mg twice daily",
          detail: "With vitamin D from 14 weeks for six months; take at a different time from iron",
        },
        {
          label: "Iron-folic acid, one red tablet daily",
          detail:
            "60 mg elemental iron with 500 microgram folic acid, from the second trimester for 180 days antenatal and 180 postpartum",
        },
        {
          label: "Albendazole 400 mg single dose",
          detail: "After the first trimester, in hookworm-endemic areas, under Anemia Mukt Bharat",
        },
        {
          label: "Anti-D 300 microgram at 28 weeks",
          detail:
            "Rh-negative women, with indirect Coombs at booking and 28 weeks; repeat within 72 hours of an Rh-positive baby",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Antenatal danger signs and the action each demands",
      root: "Danger sign reported at any antenatal contact",
      arms: [
        {
          label: "Bleeding per vaginum after 20 weeks",
          tone: "warn",
          steps: [
            "Suspect placenta praevia or abruption",
            "Do not perform a vaginal examination",
            "Secure intravenous access and refer to a facility with blood and a theatre",
          ],
        },
        {
          label: "Blood pressure 140/90 mmHg or more",
          tone: "warn",
          steps: [
            "With headache, blurred vision, epigastric pain or vomiting",
            "Pre-eclampsia until proven otherwise",
            "A convulsion is eclampsia: magnesium sulphate 4 g IV over 5-15 min plus 10 g IM, then transfer",
          ],
        },
        {
          label: "Fever above 38 degrees C",
          steps: [
            "Foul discharge or abdominal tenderness suggests sepsis",
            "Consider chorioamnionitis, urinary infection or malaria",
            "Start antibiotics and refer the same day",
          ],
        },
        {
          label: "Reduced fetal movements after 28 weeks",
          steps: [
            "Fewer than ten movements in twelve hours by the Cardiff count",
            "The commonest late danger sign to be dismissed",
            "Same-day cardiotocography or ultrasound",
          ],
        },
        {
          label: "Fundal height lagging over 3 cm",
          steps: [
            "Height in cm equals gestation in weeks from 24 to 36 weeks",
            "Growth restriction, oligohydramnios or wrong dates",
            "Ultrasound for biometry, amniotic fluid and umbilical artery Doppler",
          ],
        },
        {
          label: "Haemoglobin below 7 g/dL",
          tone: "warn",
          steps: [
            "Or below 9 g/dL beyond 36 weeks",
            "Refer for parenteral iron or transfusion",
            "Plan delivery in an equipped facility",
          ],
        },
      ],
    },
  ],

  "obstetrics-anaemia-pregnancy": [
    {
      kind: "ladder",
      heading: "Grading of anaemia in pregnancy and where she is treated",
      caption:
        "Anaemia in pregnancy is a haemoglobin below 11 g/dL. The grade, not the symptoms, decides the route of iron.",
      steps: [
        {
          label: "Mild: 10.0-10.9 g/dL",
          detail: "Two IFA tablets daily (120 mg elemental iron) for 180 days; outpatient and community",
        },
        {
          label: "Moderate: 7.0-9.9 g/dL",
          detail:
            "Oral iron under 12 weeks; intravenous iron beyond 12 weeks or after oral failure; PHC or CHC with resuscitation",
        },
        {
          label: "Severe: 4.0-6.9 g/dL",
          detail:
            "Intravenous iron; transfuse if below 7 g/dL after 34 weeks, in labour or decompensated; FRU or district hospital",
          tone: "warn",
        },
        {
          label: "Very severe: below 4 g/dL",
          detail:
            "Admit; packed cells one unit over 3-4 hours with furosemide 20 mg IV between units; exchange transfusion if in failure near term",
          tone: "warn",
        },
      ],
    },
    {
      kind: "flow",
      heading: "The oral iron trial and what counts as failure",
      caption:
        "Physiological haemodilution never takes the haemoglobin below 10 g/dL - anything lower is pathological.",
      steps: [
        {
          label: "Prescribe 120 mg elemental iron daily",
          detail: "Two IFA tablets in two divided doses for mild or moderate anaemia, for 180 days",
        },
        {
          label: "Take it away from tea, with lemon water",
          detail: "Tea reduces non-haem iron absorption by up to 60 percent - the commonest reason oral iron fails",
          tone: "warn",
        },
        {
          label: "Reticulocyte rise by day 5-7",
          detail: "The first sign the iron is being used",
        },
        {
          label: "Recheck the haemoglobin at 4 weeks",
          detail: "Expect a rise of about 0.8-1 g/dL every 2 weeks, roughly 2 g/dL in 4 weeks",
          tone: "decision",
        },
        {
          label: "Rise under 1 g/dL in 4 weeks is failure",
          detail: "Switch to intravenous iron; reconsider thalassaemia trait, B12 deficiency or ongoing loss",
          tone: "warn",
        },
        {
          label: "Continue 3 months after it normalises",
          detail: "Then the prophylactic dose for 180 days postpartum",
          tone: "good",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Iron deficiency versus beta-thalassaemia trait",
      caption: "Microcytosis with a preserved red cell count and a normal ferritin is not iron deficiency.",
      columns: ["Finding", "Iron deficiency", "Beta-thalassaemia trait"],
      rows: [
        ["Red cell count", "Low", "Preserved or high"],
        ["RDW", "High, above 15 percent", "Normal - the cells are uniformly small"],
        ["Mentzer index (MCV divided by RBC)", "Above 13", "Below 13"],
        ["Serum ferritin", "Low", "Normal"],
        ["HbA2 on electrophoresis", "Normal or low", "Above 3.5 percent"],
        ["Response to oral iron", "Haemoglobin rises 1 g/dL in 4 weeks", "No response"],
        [
          "What the diagnosis obliges",
          "Correct the deficiency and find the cause",
          "Screen the husband; if both carriers, offer chorionic villus sampling at 11-13 weeks",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Parenteral iron: which preparation and how much",
      caption:
        "Iron deficit in mg = 2.4 x weight in kg x (target haemoglobin minus actual haemoglobin), plus 500 mg for stores.",
      columns: ["Preparation", "Dose and rate", "Ceiling", "Caution"],
      rows: [
        [
          "Iron sucrose",
          "200 mg in 100 mL normal saline over 15-30 min",
          "Alternate days, maximum 600 mg per week",
          "Safe after the first trimester; observe for 30 minutes",
        ],
        [
          "Ferric carboxymaltose",
          "1000-1500 mg in 250 mL normal saline over 15-30 min",
          "Single sitting, repeat after 1 week if needed",
          "After 12-14 weeks; hypophosphataemia",
        ],
        [
          "Iron sorbitol citrate (IM)",
          "1.5 mg/kg deep IM daily",
          "Obsolete where IV access exists",
          "Painful, skin staining, abscess",
        ],
      ],
    },
  ],

  "obstetrics-hypertensive-disorders": [
    {
      kind: "branch",
      heading: "Classification of hypertensive disorders of pregnancy",
      caption:
        "Hypertension is 140/90 mmHg or more on two occasions at least 4 hours apart, sitting, with an appropriate cuff and Korotkoff phase V.",
      root: "Raised blood pressure in pregnancy",
      arms: [
        {
          label: "Chronic hypertension",
          steps: [
            "Before 20 weeks, or persisting past 12 weeks postpartum",
            "No proteinuria unless superimposed",
            "Needs aspirin and pre-eclampsia surveillance",
          ],
        },
        {
          label: "Gestational hypertension",
          steps: [
            "New after 20 weeks, no proteinuria, no organ dysfunction",
            "Up to 25 percent progress to pre-eclampsia",
            "Treat towards 135/85 mmHg; deliver at 37-39 weeks",
          ],
        },
        {
          label: "Pre-eclampsia",
          steps: [
            "After 20 weeks with proteinuria 300 mg in 24 h, PCR 0.3, or dipstick 2+",
            "Or hypertension with organ dysfunction and no proteinuria (ISSHP 2018)",
            "Deliver at 37 weeks if there are no severe features",
          ],
        },
        {
          label: "Pre-eclampsia with severe features",
          tone: "warn",
          steps: [
            "160/110 mmHg, platelets below 100,000, AST or ALT twice normal",
            "Creatinine above 1.1 mg/dL, pulmonary oedema, new cerebral or visual symptoms",
            "Magnesium sulphate and delivery from 34 weeks",
          ],
        },
        {
          label: "Eclampsia",
          tone: "warn",
          steps: [
            "Convulsion from 20 weeks up to 6 weeks postpartum",
            "About 50 percent antepartum, 25 percent intrapartum, 25 percent postpartum",
            "In a fifth, hypertension and proteinuria are minimal before the fit",
            "Stabilise, magnesium sulphate, then deliver",
          ],
        },
        {
          label: "Superimposed pre-eclampsia",
          steps: [
            "New proteinuria or new organ dysfunction on chronic hypertension",
            "The worst maternal and perinatal outcomes of all the categories",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "The eclamptic fit: the sequence to recite",
      caption: "Stabilise first, deliver second - caesarean section during a fit kills.",
      steps: [
        {
          label: "Call for help and note the time",
          detail: "Do not restrain the limbs or force anything between the teeth",
          tone: "warn",
        },
        {
          label: "Left lateral, airway, oxygen",
          detail: "Oxygen 8-10 L/min by face mask; nil by mouth",
        },
        {
          label: "Magnesium sulphate loading dose",
          detail:
            "Pritchard: 4 g of 20 percent IV over 5 minutes plus 10 g of 50 percent deep IM, 5 g into each buttock with lignocaine",
        },
        {
          label: "Control the blood pressure",
          detail:
            "Labetalol 20 mg IV, then 40 mg, then 80 mg every 10 min to 300 mg; or nifedipine 10 mg orally, never sublingual",
        },
        {
          label: "Catheterise and restrict fluids",
          detail: "80 mL per hour or 1 mL/kg/h - over-infusion causes pulmonary oedema, a leading iatrogenic death",
          tone: "warn",
        },
        {
          label: "Steroids between 24 and 34 weeks",
          detail:
            "Betamethasone 12 mg IM 24 h apart, or dexamethasone 6 mg IM 12-hourly for four doses - never delay transfer or delivery for them",
        },
        {
          label: "Deliver once she is stable",
          detail: "Ideally within 6-12 hours; oxytocin 10 IU IM for the third stage, never ergometrine",
          tone: "good",
        },
        {
          label: "Continue magnesium for 24 hours",
          detail:
            "After delivery or after the last fit, whichever is later; blood pressure for 72 hours and again at day 7-10",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Magnesium sulphate regimens compared",
      caption: "Pritchard is the regimen to write where infusion pumps are unavailable.",
      columns: ["Regimen", "Loading dose", "Maintenance", "Duration"],
      rows: [
        [
          "Pritchard (IM)",
          "4 g of 20 percent IV over 5 min plus 10 g of 50 percent deep IM",
          "5 g of 50 percent deep IM into alternate buttocks every 4 hours",
          "24 hours after delivery or the last fit",
        ],
        [
          "Zuspan (IV)",
          "4 g of 20 percent IV over 15-20 min",
          "1 g per hour by IV infusion",
          "24 hours after delivery or the last fit",
        ],
        [
          "Sibai (IV)",
          "6 g IV over 15-20 min",
          "2 g per hour by IV infusion",
          "24 hours after delivery or the last fit",
        ],
        [
          "Low-dose Dhaka",
          "4 g IV plus 6 g IM",
          "2.5 g IM every 4 hours",
          "24 hours after delivery or the last fit",
        ],
        [
          "Recurrent fit",
          "A further 2 g of 20 percent IV over 5 minutes",
          "Continue the existing maintenance",
          "Image the brain if fits persist",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Magnesium toxicity: the order in which things are lost",
      caption:
        "Three checks before every maintenance dose: respiratory rate 16 or more, urine output 30 mL per hour or more, patellar reflex present.",
      steps: [
        {
          label: "Therapeutic range 4-7 mEq/L",
          detail: "Calcium gluconate 1 g (10 mL of 10 percent) kept drawn up at the bedside",
          tone: "good",
        },
        {
          label: "Patellar reflex lost at 8-10 mEq/L",
          detail: "The earliest sign of toxicity - withhold the next dose and reassess",
          tone: "decision",
        },
        {
          label: "Respiratory depression at 12 mEq/L",
          detail: "Stop magnesium; calcium gluconate 1 g intravenously over 10 minutes",
          tone: "warn",
        },
        {
          label: "Cardiac arrest above 25-30 mEq/L",
          detail: "Magnesium is renally excreted - halve or omit if urine output falls or creatinine rises",
          tone: "warn",
        },
      ],
    },
  ],

  "obstetrics-gdm": [
    {
      kind: "flow",
      heading: "The DIPSI test, step by step",
      caption:
        "Say irrespective of the last meal in the exam - that phrase carries the mark, and it is why the test was chosen for India.",
      steps: [
        {
          label: "Test every pregnant woman twice",
          detail: "At the first antenatal contact and again at 24-28 weeks, when placental insulin resistance peaks",
          tone: "good",
        },
        {
          label: "75 g glucose in 300 mL of water",
          detail: "Drunk over 5-10 minutes, irrespective of the last meal",
        },
        {
          label: "Vomiting within 30 minutes: repeat",
          detail: "Repeat the test the next day; if she vomits after 30 minutes the test continues",
        },
        {
          label: "One venous plasma glucose at 2 hours",
          detail: "A single sample - no fasting value is needed",
          tone: "decision",
        },
        {
          label: "140 mg/dL or more is GDM",
          detail: "Start medical nutrition therapy the same day",
          tone: "warn",
        },
        {
          label: "120-139 mg/dL is an intermediate result",
          detail: "Decreased gestational glucose tolerance - nutrition therapy and repeat the test",
        },
        {
          label: "Negative before 24 weeks: retest",
          detail: "A negative early test must still be repeated at 24-28 weeks",
        },
        {
          label: "Fasting 126 mg/dL or HbA1c 6.5 percent",
          detail:
            "In the first trimester this is diabetes in pregnancy, not GDM - insulin, fetal echocardiography, screen for retinopathy and nephropathy",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "DIPSI versus IADPSG/WHO 2013 criteria",
      caption:
        "India chose the single-step non-fasting test because fasting attendance is poor and one visit maximises coverage.",
      columns: ["Feature", "DIPSI (Indian programme)", "IADPSG / WHO 2013"],
      rows: [
        ["Fasting required", "No - test irrespective of the last meal", "Yes - an 8 hour fast"],
        ["Glucose load", "75 g anhydrous glucose in 300 mL water", "75 g anhydrous glucose"],
        ["Samples", "One, at 2 hours", "Three: fasting, 1 hour and 2 hours"],
        [
          "Diagnostic threshold",
          "2-hour plasma glucose 140 mg/dL or more",
          "Fasting 92, 1-hour 180 or 2-hour 153 mg/dL - any one value",
        ],
        [
          "Intermediate category",
          "120-139 mg/dL is decreased gestational glucose tolerance",
          "Not defined",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Treatment escalation in gestational diabetes",
      caption:
        "Targets: fasting below 95 mg/dL, 1-hour postprandial below 140 mg/dL, 2-hour below 120 mg/dL, HbA1c below 6 percent.",
      steps: [
        {
          label: "Medical nutrition therapy for 2 weeks",
          detail:
            "30-35 kcal/kg ideal body weight (25 if overweight, 40 if underweight); carbohydrate 40-50 percent with at least 175 g a day; controls 70-85 percent",
          tone: "good",
        },
        {
          label: "Thirty minutes of exercise daily",
          detail: "Most practically a brisk 15-20 minute walk after each major meal",
        },
        {
          label: "Metformin if targets missed at 2 weeks",
          detail:
            "The trigger is a 2-hour value 120 mg/dL or more, or fasting 95 mg/dL or more; 500 mg once or twice daily with meals, up to 2000-2500 mg a day",
          tone: "decision",
        },
        {
          label: "Add insulin on maximum metformin",
          detail:
            "0.1-0.2 units/kg/day, usually premixed 30/70 twice daily; titrate 2-4 units every 2-3 days against the worst value",
        },
        {
          label: "Start insulin directly if control is far off",
          detail: "Fasting above 110-120 mg/dL or 2-hour above 160-180 mg/dL at diagnosis",
          tone: "warn",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Surveillance, delivery and the postpartum pathway",
      caption: "Do not allow a GDM pregnancy to go beyond 40 weeks.",
      steps: [
        {
          label: "Anomaly scan at 18-20 weeks",
          detail: "With particular attention to the fetal heart; daily fetal movement counting from 28 weeks",
        },
        {
          label: "Growth scans every 3-4 weeks from 28 weeks",
          detail: "With amniotic fluid assessment",
        },
        {
          label: "Non-stress tests from 32-34 weeks",
          detail:
            "Twice weekly, only if on insulin, poorly controlled, hypertensive or growth restricted - diet-controlled GDM needs no intensive testing",
        },
        {
          label: "Deliver 39-40 weeks on diet, 38-39 on drugs",
          detail: "Earlier for poor control, macrosomia, hypertension or fetal compromise",
          tone: "decision",
        },
        {
          label: "Discuss caesarean if weight 4000-4500 g",
          detail:
            "Truncal fat deposition makes shoulder dystocia and brachial plexus injury disproportionately likely",
          tone: "warn",
        },
        {
          label: "Intrapartum glucose 70-110 mg/dL",
          detail: "Hourly to 2-hourly; omit the morning subcutaneous insulin once labour starts",
        },
        {
          label: "Check the baby at 30-60 minutes",
          detail:
            "Anticipate hypoglycaemia, hypocalcaemia, polycythaemia, jaundice; early frequent breastfeeding is the best prevention",
        },
        {
          label: "75 g OGTT at 6-12 weeks postpartum",
          detail:
            "The step most often omitted; about half develop type 2 diabetes in 5-10 years, so screening is lifelong",
          tone: "good",
        },
      ],
    },
  ],

  "obstetrics-labour-partograph": [
    {
      kind: "compare",
      heading: "Latent phase of labour versus false labour",
      caption:
        "Contractions without any cervical change on two examinations four hours apart define false labour, whatever their frequency.",
      columns: ["Feature", "Latent phase of the first stage", "False labour"],
      rows: [
        ["Contractions", "Regular, from their onset", "Painful tightenings of any frequency"],
        ["Cervix at first examination", "Effacing and dilating, however slowly", "Closed, uneffaced, posterior"],
        ["Examination 4 hours later", "Some cervical change", "Unchanged"],
        ["Ends at", "4 cm dilatation (5 cm in WHO 2018)", "Not applicable"],
        [
          "Duration allowed",
          "Up to 20 hours in a primigravida, 14 in a multipara",
          "Not applicable",
        ],
        ["Plotted on the partograph", "No - plotting starts at 4 cm", "No"],
        [
          "Action",
          "Reassess 4-hourly; do not admit to a labour bed, augment or refer for slow progress",
          "Not in labour - no augmentation and no partograph",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "The modified partograph: plotting and the referral decision",
      caption:
        "Refer regardless of the line for a fetal heart below 110 or above 160, thick meconium, moulding ++ or more, no descent with good contractions, pulse above 100, 140/90 mmHg or more, 38 degrees C or more, or membranes ruptured beyond 18 hours.",
      steps: [
        {
          label: "Start plotting at 4 cm",
          detail: "Active phase with at least two contractions in 10 minutes; the first X goes on the alert line",
          tone: "decision",
        },
        {
          label: "Fetal heart every 30 minutes",
          detail:
            "Normal 110-160 per minute; record liquor as I, C, M, B or A and moulding 0 to +++ at each examination",
        },
        {
          label: "Vaginal examination every 4 hours",
          detail:
            "Cervix as X, descent in fifths as O (2/5 or less is engaged); earlier if membranes rupture or the heart is abnormal",
        },
        {
          label: "Contractions and pulse every 30 minutes",
          detail:
            "Blood pressure 4-hourly, temperature 2-hourly, urine volume with protein and acetone at every void",
        },
        {
          label: "Progress slower than 1 cm per hour",
          detail: "The plot crosses to the right of the alert line",
          tone: "warn",
        },
        {
          label: "Right of the alert line: refer now",
          detail: "The four hours to the action line are the transfer time to a first referral unit",
          tone: "warn",
        },
        {
          label: "Right of the action line: intervene",
          detail:
            "Amniotomy, oxytocin or caesarean - only in a hospital with a theatre; augmenting at a PHC makes obstructed labour",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Active management of the third stage",
      caption: "Active management cuts postpartum haemorrhage by about 60 percent.",
      steps: [
        {
          label: "Palpate to exclude a second twin",
          detail: "Before any uterotonic is given",
          tone: "decision",
        },
        {
          label: "Oxytocin 10 units IM within one minute",
          detail: "The uterotonic of choice - fast, cheap and safe in hypertension",
          tone: "good",
        },
        {
          label: "No oxytocin: misoprostol 600 microgram",
          detail: "Orally; or ergometrine 0.2 mg IM, never in hypertension, pre-eclampsia or heart disease",
          tone: "warn",
        },
        {
          label: "Delayed cord clamping at 1-3 minutes",
          detail: "In every baby who does not need immediate resuscitation; 80-100 mL of extra blood",
        },
        {
          label: "Controlled cord traction",
          detail: "By a skilled attendant, with counter-traction on the uterus",
        },
        {
          label: "Uterine massage until it is contracted",
          detail: "Then palpate the uterus every 15 minutes for two hours",
        },
        {
          label: "Placenta undelivered at 30 minutes",
          detail:
            "Retained placenta - oxytocin infusion, empty the bladder, one further attempt at traction, then refer for manual removal",
          tone: "warn",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Emergencies to treat before the ambulance leaves",
      root: "Intrapartum emergency at a primary health centre",
      arms: [
        {
          label: "Cord prolapse",
          tone: "warn",
          steps: [
            "Knee-chest or exaggerated Sims position",
            "Push the presenting part off the cord with two fingers and keep them there",
            "Fill the bladder with 500 mL of saline if the journey is long",
            "Do not handle the cord; send for immediate caesarean section",
          ],
        },
        {
          label: "Preterm labour at 24-34 weeks",
          steps: [
            "Dexamethasone 6 mg IM 12-hourly for four doses, the first before transfer",
            "Or betamethasone 12 mg IM, two doses 24 hours apart",
            "Nifedipine 20 mg orally then 10-20 mg every 6-8 hours for up to 48 hours",
            "Magnesium sulphate 4 g IV for neuroprotection if delivery before 32 weeks is imminent",
          ],
        },
        {
          label: "Prelabour rupture of membranes",
          steps: [
            "Speculum only; record the colour of the liquor and the fetal heart",
            "Ampicillin or amoxicillin if ruptured beyond 18 hours",
            "Preterm rupture also gets erythromycin 250 mg four times daily for ten days and steroids",
          ],
        },
        {
          label: "Retained placenta beyond 30 minutes",
          steps: [
            "Oxytocin infusion, empty the bladder, repeat controlled cord traction once",
            "Refer for manual removal under anaesthesia",
            "A placenta that is not bleeding still transfers within the hour",
          ],
        },
      ],
    },
  ],

  "obstetrics-pph": [
    {
      kind: "flow",
      heading: "The first fifteen minutes of postpartum haemorrhage",
      caption:
        "The WHO 2023 E-MOTIVE bundle - early detection, massage, oxytocic, tranexamic acid, IV fluids, examination and escalation - delivered together, not one step at a time.",
      steps: [
        {
          label: "Recognise the loss early",
          detail:
            "500 mL vaginal, 1000 mL caesarean, or any loss that destabilises her; visual estimation understates by 30-50 percent",
          tone: "warn",
        },
        {
          label: "Lie flat, legs up, oxygen 10-15 L/min",
          detail: "Pulse, blood pressure and shock index every 5 minutes",
        },
        {
          label: "Two 16-18 gauge cannulae",
          detail:
            "Blood for haemoglobin, group and cross-match and clotting; warmed Ringer lactate 1-2 L fast, under 3.5 L before blood arrives",
        },
        {
          label: "Massage the uterus, empty the bladder",
          detail: "A full bladder is a reversible cause of atony",
        },
        {
          label: "Oxytocin 20 units in 500 mL Ringer lactate",
          detail:
            "40-60 drops per minute; never a rapid IV bolus, and never more than 3 L of oxytocin-containing fluid",
          tone: "warn",
        },
        {
          label: "Tranexamic acid 1 g IV over 10 minutes",
          detail:
            "Within 3 hours of birth, repeated once after 30 minutes; benefit falls about 10 percent for every 15 minutes of delay",
          tone: "good",
        },
        {
          label: "Examine for the cause and escalate",
          detail: "Uterus, genital tract, placenta and clotting - the four Ts",
          tone: "decision",
        },
      ],
    },
    {
      kind: "branch",
      heading: "The four Ts: causes of postpartum haemorrhage",
      caption: "Two-thirds of postpartum haemorrhage happens to women with no risk factor at all.",
      root: "Bleeding after delivery",
      arms: [
        {
          label: "Tone - about 70 percent",
          tone: "warn",
          steps: [
            "Overdistension: twins, polyhydramnios, macrosomia",
            "Prolonged or precipitate labour, oxytocin augmentation, grand multiparity",
            "Chorioamnionitis, a full bladder, retained placental fragments",
            "Relaxant drugs: magnesium sulphate, nifedipine, halogenated anaesthetics",
          ],
        },
        {
          label: "Trauma - about 20 percent",
          steps: [
            "Perineal, vaginal and cervical tears",
            "Extension of a caesarean incision, uterine rupture, uterine inversion",
            "A firm uterus with bright red bleeding is trauma until the tract has been inspected",
          ],
        },
        {
          label: "Tissue - about 10 percent",
          steps: [
            "Retained placenta or membranes",
            "A succenturiate lobe",
            "Placenta accreta spectrum, rising with the caesarean rate",
          ],
        },
        {
          label: "Thrombin - about 1 percent",
          steps: [
            "Von Willebrand disease, thrombocytopenia",
            "DIC from abruption, amniotic fluid embolism, severe pre-eclampsia, HELLP, fetal death or sepsis",
            "Dilutional coagulopathy after massive transfusion",
          ],
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Escalating treatment of atonic postpartum haemorrhage",
      caption: "Refer as soon as bleeding continues after massage, one uterotonic and an empty bladder.",
      steps: [
        {
          label: "Massage, empty bladder, oxytocin infusion",
          detail: "20 units in 500 mL Ringer lactate at 40-60 drops per minute",
          tone: "good",
        },
        {
          label: "Methylergometrine 0.2 mg IM or slow IV",
          detail:
            "Repeat every 15 minutes to 5 doses (1 mg); never in hypertension, pre-eclampsia or heart disease",
          tone: "warn",
        },
        {
          label: "Carboprost 250 microgram IM",
          detail: "Every 15 minutes to 8 doses (2 mg); never in asthma",
          tone: "warn",
        },
        {
          label: "Misoprostol 800 microgram sublingual",
          detail: "A single dose where injectables are unavailable, or in addition to them",
        },
        {
          label: "Bimanual or external aortic compression",
          detail:
            "Aortic: a closed fist above and left of the umbilicus against the spine until the femoral pulse disappears",
        },
        {
          label: "Condom balloon tamponade",
          detail:
            "300-500 mL of saline, vaginal pack, oxytocin continued, antibiotics, left 12-24 hours; over 85 percent success",
        },
        {
          label: "Transfer with the lines running",
          detail:
            "NASG on, catheter in, a note of the estimated loss and drugs given, and a relative who can donate blood",
          tone: "decision",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Estimating blood loss from the woman's response",
      caption: "Shock index is heart rate divided by systolic blood pressure, normally below 0.9 after delivery.",
      columns: ["Blood loss", "Percent of volume", "Signs", "Shock index"],
      rows: [
        ["500-1000 mL", "10-15 percent", "Usually none; palpitations, mild tachycardia", "Below 0.9"],
        [
          "1000-1500 mL",
          "15-25 percent",
          "Pulse above 100, narrow pulse pressure, delayed capillary refill, weakness",
          "0.9-1.2",
        ],
        ["1500-2000 mL", "25-35 percent", "Systolic 70-80 mmHg, restlessness, pallor, oliguria", "1.2-1.5"],
        ["Above 2000 mL", "Above 35 percent", "Systolic below 70 mmHg, collapse, air hunger, anuria", "Above 1.5"],
      ],
    },
  ],

  "obstetrics-early-pregnancy-bleeding": [
    {
      kind: "branch",
      heading: "Bleeding in early pregnancy: the three that matter",
      caption:
        "Anti-D goes to every Rh-negative woman after any bleed, miscarriage, ectopic or termination: 50 microgram before 12 weeks, 300 microgram after, within 72 hours.",
      root: "Bleeding before 20 weeks",
      arms: [
        {
          label: "Miscarriage - 10-20 percent of pregnancies",
          steps: [
            "Threatened, inevitable, incomplete, complete, missed or septic",
            "The state of the os separates them",
            "Septic abortion gets ampicillin 2 g, gentamicin 5 mg/kg and metronidazole 500 mg, then evacuation",
          ],
        },
        {
          label: "Ectopic pregnancy - 1-2 percent",
          tone: "warn",
          steps: [
            "Pain before bleeding, dark scanty loss; syncope or shoulder-tip pain on rupture",
            "An empty uterus above the discriminatory zone of 1500-2000 mIU/mL is ectopic until proven otherwise",
            "A rise under 50 percent in 48 hours points away from a viable intrauterine pregnancy",
            "Half occur in women with no risk factor at all",
          ],
        },
        {
          label: "Molar pregnancy - about 1 in 1000",
          steps: [
            "Uterus larger than dates, hyperemesis, theca-lutein cysts",
            "Pre-eclampsia before 20 weeks; hCG above 100,000 mIU/mL",
            "Snowstorm on ultrasound; refer for suction evacuation",
            "Then weekly hCG to three negatives, and monthly for six months",
          ],
        },
        {
          label: "Benign causes - by exclusion only",
          tone: "good",
          steps: [
            "Cervical ectropion, polyp, vaginitis",
            "Implantation bleeding",
            "Named only once the three above are excluded",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Types of miscarriage: findings and management",
      caption: "Manual vacuum aspiration, not sharp curettage, is the surgical method of choice under 12 weeks.",
      columns: ["Type", "Bleeding and pain", "Os", "Ultrasound", "Management"],
      rows: [
        [
          "Threatened",
          "Slight bleeding, mild or no pain",
          "Closed",
          "Viable intrauterine pregnancy",
          "Reassure and warn; vaginal progesterone 400 mg BD only if a previous miscarriage",
        ],
        [
          "Inevitable",
          "Heavy bleeding, cramping",
          "Open",
          "Sac low or in the cervix",
          "Misoprostol 600 microgram orally or MVA; anti-D if Rh negative",
        ],
        [
          "Incomplete",
          "Heavy, continuing",
          "Open, products may be seen",
          "Retained products, thick endometrium",
          "Remove products from the os; misoprostol 600 microgram orally or MVA",
        ],
        [
          "Missed",
          "Minimal; loss of pregnancy symptoms",
          "Closed",
          "CRL 7 mm or more with no cardiac activity, or MSD 25 mm with no embryo",
          "Mifepristone 200 mg then misoprostol 800 microgram vaginally at 24-48 h, or MVA",
        ],
        [
          "Complete",
          "Bleeding has settled",
          "Closed",
          "Empty uterus",
          "hCG falling by more than 50 percent in 48 hours confirms it",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Ectopic pregnancy: the methotrexate pathway",
      caption: "A single hCG value can neither make nor exclude the diagnosis.",
      steps: [
        {
          label: "Confirm she is stable and unruptured",
          detail: "Instability, rupture or a mass over 3.5 cm means surgery, not methotrexate",
          tone: "warn",
        },
        {
          label: "Check the criteria for medical treatment",
          detail:
            "No fetal cardiac activity, hCG under 5000 mIU/mL, normal liver, renal and blood counts, not breastfeeding",
          tone: "decision",
        },
        {
          label: "Confirm she can return for follow-up",
          detail: "Reliable follow-up is itself one of the criteria",
        },
        {
          label: "Methotrexate 50 mg per square metre IM",
          detail: "A single dose; best results with an hCG under 1500-3000 mIU/mL",
        },
        {
          label: "Repeat the hCG on days 4 and 7",
          detail: "A fall of at least 15 percent between them predicts success",
          tone: "decision",
        },
        {
          label: "Second dose if it has not fallen",
          detail: "Otherwise follow the hCG down to negative",
          tone: "good",
        },
        {
          label: "Anti-D if she is Rh negative",
          detail: "50 microgram (250 IU) IM within 72 hours before 12 weeks",
        },
      ],
    },
    {
      kind: "compare",
      heading: "The MTP Act: what the 2021 amendment changed",
      caption:
        "Consent is the woman's own at 18 or above; a guardian consents for a minor or a mentally ill woman, and the husband's consent is never required.",
      columns: ["Provision", "MTP Act 1971", "As amended in 2021"],
      rows: [
        ["Opinion of one RMP", "Up to 12 weeks", "Up to 20 weeks"],
        [
          "Opinion of two RMPs",
          "12 to 20 weeks",
          "20 to 24 weeks, only for the seven Rule 3B categories",
        ],
        [
          "Beyond 24 weeks",
          "Not permitted except to save life",
          "A state Medical Board may permit it for substantial fetal abnormality",
        ],
        [
          "Outpatient medical abortion",
          "Up to 7 weeks (2003 Rules)",
          "Up to 9 weeks (63 days) with mifepristone 200 mg then misoprostol 800 microgram",
        ],
        [
          "Contraceptive failure ground",
          "A married woman or her husband",
          "Any woman or her partner",
        ],
        [
          "Sex-selective termination",
          "An offence under the PCPNDT Act",
          "Still an offence - never a lawful ground",
        ],
      ],
    },
  ],

  "obstetrics-postnatal-care": [
    {
      kind: "flow",
      heading: "Postnatal contacts from delivery to six weeks",
      caption:
        "Iron-folic acid continues for 180 days and calcium for six months; anti-D 300 microgram IM within 72 hours if she is Rh negative with an Rh-positive baby.",
      steps: [
        {
          label: "First 48 hours in the facility",
          detail:
            "JSSK stay - vitals, fundal tone, lochia, bladder and feeding every 15 minutes for 2 hours, then at least four times a day",
          tone: "good",
        },
        {
          label: "Facility check within 24 hours",
          detail:
            "Breastfeeding initiation, BCG, OPV-0, hepatitis B birth dose, vitamin K 1 mg IM, danger signs taught",
        },
        {
          label: "ASHA home visits from day 3",
          detail: "HBNC on days 3, 7, 14, 21, 28 and 42; a day 1 visit is added after a home delivery",
        },
        {
          label: "Facility contacts at day 3 and day 7",
          detail: "Full examination of mother and baby by the ANM or medical officer",
        },
        {
          label: "Six-week visit ties it all together",
          detail:
            "Haemoglobin, blood pressure if she was hypertensive, 75 g OGTT if she had GDM, EPDS, contraception, the baby's immunisation",
          tone: "good",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Mood after delivery: three different things",
      root: "Mood change in the puerperium",
      arms: [
        {
          label: "Postpartum blues - 50-80 percent",
          tone: "good",
          steps: [
            "Begins day 3-5 and resolves within two weeks",
            "Tearfulness, lability and anxiety without loss of function",
            "Reassurance, sleep and support - not drugs",
            "If not settled by two weeks, screen for depression",
          ],
        },
        {
          label: "Postpartum depression - 10-20 percent",
          steps: [
            "Screened with the EPDS at six weeks and whenever there is concern",
            "A score of 13 or more, or any positive item 10 on self-harm, needs assessment the same day",
            "Mild: structured psychosocial support, as in the Thinking Healthy Programme",
            "Moderate or severe: sertraline 50-100 mg daily, and breastfeeding continues",
          ],
        },
        {
          label: "Postpartum psychosis - 1-2 per 1000",
          tone: "warn",
          steps: [
            "Begins within the first two weeks",
            "Confusion, insomnia, delusions about the baby, hallucinations, rapid mood swings",
            "Risk of suicide and infanticide - never leave her alone with the baby",
            "Same-day admission, ideally to a mother-baby unit; half have underlying bipolar disorder",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Postpartum contraception: when each method may be started",
      caption:
        "Ovulation can return as early as day 25 in a woman who is not breastfeeding, so contraception must be in place by three weeks.",
      columns: ["Method", "Breastfeeding", "Not breastfeeding", "Caution"],
      rows: [
        [
          "LAM",
          "Birth to 6 months while amenorrhoeic and feeding exclusively",
          "Not applicable",
          "98 percent effective; ends when any one criterion fails",
        ],
        [
          "PPIUCD (copper 380A)",
          "Within 10 min of the placenta, at caesarean, or within 48 h; else after 4-6 weeks",
          "Same",
          "Never between 48 hours and 4-6 weeks; check the threads at 6 weeks",
        ],
        [
          "Postpartum sterilisation",
          "Within 7 days or after 6 weeks; at caesarean",
          "Same",
          "Her own consent; age 22-49; one living child",
        ],
        [
          "DMPA 150 mg IM 3-monthly (Antara)",
          "From delivery (WHO MEC 2 before 6 weeks)",
          "From delivery",
          "Return of fertility delayed 6-12 months; irregular bleeding",
        ],
        ["Progestogen-only pill", "From delivery (MEC 2 before 6 weeks)", "From delivery", "Same time every day"],
        [
          "Centchroman 30 mg (Chhaya)",
          "From delivery",
          "From delivery",
          "Twice weekly for 3 months then weekly; non-hormonal, no effect on lactation",
        ],
        [
          "Combined oral contraceptive",
          "Not before 6 weeks (MEC 4), MEC 3 to 6 months",
          "After 21 days, 42 days if VTE risk factors",
          "Oestrogen reduces the milk supply",
        ],
        [
          "Emergency pill (levonorgestrel 1.5 mg)",
          "Within 72 hours of unprotected sex",
          "Same",
          "Safe in lactation; not a regular method",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Lactational mastitis: what to do",
      caption: "Perceived insufficient milk is the commonest reason for stopping - judge adequacy by wet nappies and weight, not by her perception.",
      steps: [
        {
          label: "Red, hot, tender wedge with fever",
          detail: "Fever above 38.5 degrees C with malaise, usually Staphylococcus aureus",
        },
        {
          label: "Keep feeding from the affected breast",
          detail: "The milk is not harmful to the baby; stopping and binding cause stasis and an abscess",
          tone: "warn",
        },
        {
          label: "Flucloxacillin or cephalexin 500 mg 6-hourly",
          detail: "Dicloxacillin is an alternative; give it for 10-14 days",
        },
        {
          label: "Add an NSAID and protect her rest",
          detail: "Analgesia and fluids alongside continued drainage of the breast",
        },
        {
          label: "Review at 48 hours",
          detail: "Failure to improve or a fluctuant mass means an abscess",
          tone: "decision",
        },
        {
          label: "Abscess: ultrasound-guided aspiration",
          detail: "Or incision and drainage; feeding continues from the other breast",
          tone: "warn",
        },
      ],
    },
  ],
};

export default diagrams;
