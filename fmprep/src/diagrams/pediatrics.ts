/**
 * Diagrams for pediatrics, keyed by topic id.
 */
import type { DiagramSet } from "../lib/types";

const diagrams: DiagramSet = {
  "pediatrics-newborn-care": [
    {
      kind: "flow",
      heading: "Neonatal resuscitation: the golden minute",
      caption:
        "About 10% of newborns need some help to start breathing and 1% need extensive resuscitation. Ventilation, not drugs, is the treatment of neonatal bradycardia.",
      steps: [
        {
          label: "Term, good tone, breathing or crying?",
          detail:
            "The single question at birth. If yes, stay with the mother - dry, skin-to-skin, and delay cord clamping by 1-3 minutes",
          tone: "decision",
        },
        {
          label: "Initial steps within 60 seconds",
          detail:
            "Warmth, head in a neutral sniffing position, clear the airway only if secretions obstruct, dry, stimulate and reposition",
        },
        {
          label: "Still apnoeic or heart rate under 100",
          detail:
            "Start positive pressure ventilation, all within 60 seconds of birth. Meconium-stained liquor in a non-vigorous baby is no longer an indication for routine endotracheal suction",
          tone: "decision",
        },
        {
          label: "Ventilate 40-60 breaths per minute",
          detail:
            "Self-inflating bag of 240-500 mL with a correctly sized mask, room air in a term baby and 21-30% oxygen in a preterm, inflation pressure about 20-25 cm H2O; a rising heart rate is the primary indicator of success",
        },
        {
          label: "Heart rate under 100 after 15 seconds",
          detail:
            "Run the corrective steps before doing anything else - mask adjustment, reposition the head, suction, open the mouth, increase pressure, alternative airway",
          tone: "warn",
        },
        {
          label: "Heart rate under 60 after 30 seconds",
          detail:
            "Chest compressions with the two-thumb technique over the lower third of the sternum, one third of the antero-posterior diameter, 3 compressions to 1 breath - 90 compressions and 30 breaths a minute, oxygen raised to 100%, reassess at 60 seconds",
          tone: "warn",
        },
        {
          label: "Adrenaline if still under 60",
          detail:
            "0.01-0.03 mg/kg, that is 0.1-0.3 mL/kg of 1:10,000, intravenously or by umbilical venous catheter, repeated every 3-5 minutes; the endotracheal dose is higher at 0.05-0.1 mg/kg",
        },
        {
          label: "Volume for blood loss or shock",
          detail:
            "Normal saline or Ringer lactate 10 mL/kg over 5-10 minutes. Discontinuation is considered after 20 minutes of adequate resuscitation with no detectable heart rate",
        },
      ],
    },
    {
      kind: "flow",
      heading: "PSBI in a young infant: stabilise, then refer",
      caption:
        "Possible serious bacterial infection is the label for any baby aged 0-59 days with any one danger sign. Warmth, euglycaemia and the first antibiotic dose before transport are what change outcome.",
      steps: [
        {
          label: "Recognise any one danger sign",
          detail:
            "Not feeding well or stopped breastfeeding; convulsions; fast breathing 60 per minute or more; severe chest indrawing; movement only on stimulation or none; temperature 37.5 degrees C or more or below 35.5; yellow palms and soles",
          tone: "warn",
        },
        {
          label: "Warm the baby",
          detail:
            "Continuous skin-to-skin kangaroo contact under a blanket with a cap, or a radiant warmer; recheck the temperature every 15-30 minutes, aiming for a rise of 0.5 degrees C per hour",
        },
        {
          label: "Prevent hypoglycaemia",
          detail:
            "Breast milk, or expressed milk 5-10 mL by katori-spoon or nasogastric tube; if the glucose is under 45 mg/dL or the baby is unconscious, 2 mL/kg of 10% dextrose intravenously then an infusion at 6 mg/kg/min",
        },
        {
          label: "First dose of antibiotic now",
          detail:
            "Injection ampicillin 50 mg/kg IV or IM plus gentamicin 5 mg/kg IM once daily, 4 mg/kg if under 2000 g. Do not wait for blood culture and C-reactive protein",
          tone: "good",
        },
        {
          label: "Refer to a Special Newborn Care Unit",
          detail:
            "Written referral note with the mother, free ambulance transport, skin-to-skin on the way; give vitamin K1 1 mg intramuscularly if it was not given at birth",
        },
        {
          label: "If referral is truly impossible",
          detail:
            "Oral amoxicillin 50 mg/kg/dose twice daily for 7 days plus injection gentamicin 5-7.5 mg/kg IM once daily for 2 days, with daily review for 3 days and then on days 5 and 7",
          tone: "decision",
        },
      ],
    },
    {
      kind: "compare",
      heading: "PSBI antibiotics: inpatient versus the simplified regimen",
      caption:
        "A 7-59 day old infant whose only sign is fast breathing may be treated with oral amoxicillin alone for 7 days.",
      columns: ["Feature", "Inpatient regimen", "Simplified outpatient regimen"],
      rows: [
        ["When it is used", "Referral accepted and possible", "Referral genuinely refused or impossible"],
        ["Beta-lactam", "Injection ampicillin 50 mg/kg/dose IV or IM", "Oral amoxicillin 50 mg/kg/dose"],
        [
          "Frequency",
          "12-hourly in the first week of life, 8-hourly thereafter",
          "Twice daily for 7 days",
        ],
        [
          "Aminoglycoside",
          "Gentamicin 5 mg/kg once daily if 2000 g or more, 4 mg/kg if under 2000 g",
          "Gentamicin 5-7.5 mg/kg IM once daily for 2 days, 5 mg/kg if under 2 kg",
        ],
        [
          "Duration",
          "7-10 days for sepsis without meningitis, 14 days if culture-proven, 21 days for meningitis",
          "7 days of amoxicillin, 2 days of gentamicin",
        ],
        [
          "If meningitis is suspected",
          "Add or substitute cefotaxime 50 mg/kg/dose 8-12 hourly",
          "Not appropriate - renegotiate the referral",
        ],
        ["Review", "Daily inpatient review; gentamicin usually stopped at 7 days", "Daily review by a trained provider is mandatory"],
      ],
    },
    {
      kind: "ladder",
      heading: "Grading hypothermia by axillary temperature",
      caption:
        "Hypothermia carries a mortality comparable to sepsis and often coexists with it. Take the axillary temperature for 3 minutes.",
      steps: [
        {
          label: "Normal: 36.5-37.5 degrees C",
          detail:
            "Keep the warm chain - delivery room at 25-28 degrees C with no draughts, immediate drying, skin-to-skin, early breastfeeding, delayed bathing, cap and socks, mother and baby together, warm transport",
          tone: "good",
        },
        {
          label: "Cold stress: 36.0-36.4 degrees C",
          detail: "Skin-to-skin contact with the mother, cover the head, feed, and recheck",
        },
        {
          label: "Moderate hypothermia: 32.0-35.9",
          detail:
            "Below 35.5 degrees C is a danger sign in its own right - treat as PSBI, warm, correct the glucose, give the first antibiotic dose and refer",
          tone: "warn",
        },
        {
          label: "Severe hypothermia: below 32 degrees C",
          detail:
            "Very high mortality; rapid rewarming with monitoring for hypoglycaemia and bleeding",
          tone: "warn",
        },
      ],
    },
  ],

  "pediatrics-immunisation": [
    {
      kind: "flow",
      heading: "The Universal Immunisation Programme schedule",
      caption:
        "Intramuscular vaccines go into the anterolateral thigh under 1 year and the deltoid thereafter; the gluteal region is never used.",
      steps: [
        {
          label: "Birth, within 24 hours where possible",
          detail:
            "BCG 0.05 mL intradermally over the left upper arm, OPV zero dose 2 drops orally, hepatitis B birth dose 0.5 mL IM into the anterolateral thigh",
        },
        {
          label: "6 weeks",
          detail:
            "Pentavalent-1 0.5 mL IM, OPV-1 2 drops, rotavirus-1 5 drops, fIPV-1 0.1 mL intradermally, PCV-1 0.5 mL IM",
        },
        { label: "10 weeks", detail: "Pentavalent-2, OPV-2, rotavirus-2" },
        { label: "14 weeks", detail: "Pentavalent-3, OPV-3, rotavirus-3, fIPV-2, PCV-2" },
        {
          label: "9-12 months",
          detail:
            "MR-1 0.5 mL subcutaneously, JE-1 in endemic districts, PCV booster, vitamin A first dose 100,000 IU orally",
        },
        {
          label: "16-24 months",
          detail:
            "MR-2, JE-2, DPT booster-1, OPV booster, vitamin A 200,000 IU, then vitamin A 6-monthly to 5 years - nine doses in all",
        },
        { label: "5-6 years", detail: "DPT booster-2, 0.5 mL IM" },
        {
          label: "10 years and 16 years",
          detail:
            "Td 0.5 mL IM. Pregnant women receive Td-1 and Td-2 four weeks apart, or a single booster if immunised within the last 3 years",
        },
      ],
    },
    {
      kind: "flow",
      heading: "The defaulter: deciding what to give today",
      caption:
        "A schedule is never restarted. All due vaccines are given at the same visit, at different sites, with separate auto-disable syringes.",
      steps: [
        {
          label: "Never restart the series",
          detail:
            "Count what has been given and continue from there; restarting wastes doses and delays protection through the highest-risk period",
          tone: "warn",
        },
        {
          label: "Respect the minimum age",
          detail:
            "Pentavalent not before 6 weeks, MR not before 9 months, DPT booster-1 not before 16 months routinely, though it may be given from 12 months in catch-up if 6 months have passed since the third primary dose",
        },
        {
          label: "Respect the minimum interval",
          detail:
            "4 weeks between primary doses of pentavalent, OPV, IPV, PCV and MR; 6 months between the primary series and booster-1; the second MR dose can come as early as 4 weeks after the first",
        },
        {
          label: "Check the upper age limit",
          detail:
            "BCG, pentavalent, rotavirus, PCV and fIPV up to 1 year; OPV and MR to 5 years; DPT boosters to 7 years, beyond which Td is used",
          tone: "decision",
        },
        {
          label: "Rotavirus is dropped, not delayed",
          detail:
            "The first dose must be given before 1 year under the Indian programme because of the intussusception signal; if the window is missed the vaccine is simply omitted",
          tone: "warn",
        },
        {
          label: "Give everything due at one visit",
          detail:
            "There is no limit on the number of injections. Mild illness, low-grade fever, diarrhoea, malnutrition and antibiotics are not contraindications - the only true ones are anaphylaxis to a previous dose and encephalopathy within 7 days of a pertussis vaccine",
          tone: "good",
        },
        {
          label: "Observe for 30 minutes",
          detail:
            "Every session needs an anaphylaxis kit: adrenaline 0.01 mg/kg of 1:1000 IM into the anterolateral thigh, maximum 0.5 mg, repeated every 5-15 minutes",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Classifying an adverse event following immunisation",
      caption:
        "A serious AEFI - death, hospitalisation, persistent disability, a congenital anomaly or a life-threatening event - is reported within 24 hours and investigated within 48 hours.",
      root: "AEFI by cause",
      arms: [
        {
          label: "Vaccine product-related",
          steps: [
            "An effect of the vaccine itself",
            "Distributed across vials and batches rather than concentrated in one session",
          ],
        },
        {
          label: "Vaccine quality defect",
          steps: [
            "A manufacturing or kit defect",
            "Cases appear across many sessions using that batch",
            "Sequester and test the vial",
          ],
        },
        {
          label: "Immunisation error-related",
          tone: "warn",
          steps: [
            "Wrong diluent, wrong dose or route, a reused syringe",
            "A vial reconstituted more than 4 hours earlier, or contamination",
            "The only fully preventable category and the classic cause of a cluster traceable to one vial",
          ],
        },
        {
          label: "Immunisation anxiety-related",
          steps: [
            "Immediate faints and hyperventilation",
            "Not suppurative abscesses at 48 hours",
          ],
        },
        {
          label: "Coincidental",
          steps: [
            "An event that would have happened anyway",
            "Does not cluster tightly around one vial or one session",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Cold chain: what tolerates what",
      caption:
        "The shake test finds a frozen and thawed adsorbed vaccine - sedimentation in 5-30 minutes leaving a clear supernatant with flakes, against a control vial that stays uniformly turbid. Discard it.",
      columns: ["Vaccine", "Storage", "Damaged by freezing?", "After opening"],
      rows: [
        [
          "OPV",
          "-20 degrees C at district and regional stores; +2 to +8 degrees C at the PHC",
          "No - freezing is safe",
          "4 weeks under the open vial policy",
        ],
        [
          "Pentavalent, hepatitis B, Td, IPV, PCV",
          "+2 to +8 degrees C",
          "Yes - never freeze; do the shake test",
          "4 weeks under the open vial policy",
        ],
        ["Rotavirus (liquid)", "+2 to +8 degrees C", "Yes", "4 weeks under the open vial policy"],
        [
          "BCG",
          "+2 to +8 degrees C",
          "Not damaged by freezing, but heat and light sensitive",
          "Discard 4 hours after reconstitution",
        ],
        [
          "Measles-rubella and JE",
          "+2 to +8 degrees C",
          "Not damaged by freezing; very heat sensitive",
          "Discard 4 hours after reconstitution",
        ],
      ],
    },
  ],

  "pediatrics-growth-monitoring": [
    {
      kind: "compare",
      heading: "Nutritional classification by anthropometry, 6-59 months",
      caption:
        "WHO Multicentre Growth Reference Study standards from birth to 5 years; the IAP 2015 charts from 5 to 18 years.",
      columns: ["Index", "What it means", "Moderate (-2 to -3 SD)", "Severe (below -3 SD)"],
      rows: [
        [
          "Weight-for-age",
          "Underweight - a composite screening index that cannot separate stunting from wasting",
          "Moderately underweight",
          "Severely underweight",
        ],
        ["Height-for-age", "Stunting - chronic undernutrition", "Moderate stunting", "Severe stunting"],
        [
          "Weight-for-height",
          "Wasting - acute undernutrition",
          "Moderate acute malnutrition",
          "Severe acute malnutrition",
        ],
        [
          "MUAC at 6-59 months",
          "Age-independent, needs only a paper tape, the best single mortality predictor",
          "11.5 to under 12.5 cm",
          "Under 11.5 cm",
        ],
        [
          "Bilateral pitting oedema",
          "Oedematous malnutrition",
          "Not applicable",
          "SAM regardless of the weight",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Stunting versus wasting",
      caption: "The distinction drives whether you treat the child or the household.",
      columns: ["Feature", "Stunting", "Wasting"],
      rows: [
        ["Index", "Height-for-age below -2 SD", "Weight-for-height below -2 SD"],
        [
          "What it reflects",
          "Chronic undernutrition beginning in utero and in the first 1000 days",
          "Acute weight loss",
        ],
        [
          "The window",
          "Conception to the second birthday - the only window in which it can be prevented",
          "Any time, usually after illness or food shortage",
        ],
        ["Reversibility", "Largely irreversible after 2 years", "Reversible with feeding"],
        ["NFHS-5 prevalence", "35.5% of under-fives", "19.3% wasted, 7.7% severely wasted"],
        [
          "What you treat",
          "The household and the first 1000 days - maternal nutrition, birth spacing, feeding, sanitation",
          "The child, with therapeutic feeding",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "The child whose weight curve has flattened",
      caption:
        "Growth faltering is a fall across two major centile lines, a flat or falling weight curve over 2-3 months, or weight-for-age crossing below -2 SD.",
      steps: [
        {
          label: "Read the curve, not the point",
          detail:
            "Length lying down under 2 years and height standing after 2 years - the two differ by about 0.7 cm and switching wrongly fakes a loss of height",
        },
        {
          label: "Correct for prematurity",
          detail:
            "Subtract the weeks short of 40 from the chronological age; correct weight to 1 year, length to 18 months and head circumference to 18-24 months",
          tone: "warn",
        },
        {
          label: "Compare with the mid-parental target",
          detail:
            "A child tracking steadily along a low centile within her target range, developing normally and eating well, is a small normal child and needs plotting, not investigation",
          tone: "decision",
        },
        {
          label: "Take a feeding history and watch a feed",
          detail:
            "The six IYCF domains - quantity, consistency (thick, not watery), frequency, diversity (5 of 8 food groups), responsive feeding and hygiene; ask about bottles, animal milk over 500 mL a day and food insecurity",
        },
        {
          label: "Examine and measure MUAC",
          detail:
            "Pallor, oedema, dermatosis, hepatosplenomegaly, a murmur, signs of rickets, dysmorphism and the developmental level; MUAC in every child aged 6-59 months",
        },
        {
          label: "Investigate selectively, feed universally",
          detail:
            "80-90% of growth faltering in Indian primary care is nutritional and psychosocial, not organic",
        },
        {
          label: "Set a numerical catch-up target",
          detail:
            "Catch-up needs 1.5-2 times the expected daily gain - at least 20-30 g/day. Write the number on the card and re-weigh against it in 2 weeks, then monthly",
          tone: "good",
        },
        {
          label: "Link to the anganwadi and ASHA",
          detail:
            "Supplementary nutrition of 500 kcal with 12-15 g protein a day, and 800 kcal with 20-25 g for a severely underweight child; deworm, treat anaemia with iron 3 mg/kg/day, vitamin A per schedule",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Complementary feeding: what changes with age",
      caption:
        "Start at the completion of 6 months alongside continued breastfeeding. Avoid honey before 1 year, added salt and sugar, tea and packaged snacks, bottle feeding, and more than 500 mL of animal milk a day.",
      steps: [
        {
          label: "6-8 months: thick mashed or pureed",
          detail:
            "2-3 meals a day plus breastfeeds; start with 2-3 tablespoons and build to half a 250 mL cup; about 200 kcal a day from complementary food",
        },
        {
          label: "9-11 months: finely chopped, finger foods",
          detail:
            "3-4 meals plus 1-2 snacks; about half to three-quarters of a cup at each meal; about 300 kcal a day",
        },
        {
          label: "12-23 months: family food, chopped",
          detail:
            "3-4 meals plus 1-2 snacks; three-quarters to a full cup at each meal; about 550 kcal a day. Only 11.3% of Indian children aged 6-23 months get an adequate diet",
        },
      ],
    },
  ],

  "pediatrics-imnci": [
    {
      kind: "flow",
      heading: "The IMNCI consultation, in order",
      caption:
        "IMNCI is syndromic and colour coded and needs no laboratory. Two age bands with separate charts: birth to 2 months, and 2 months to 5 years.",
      steps: [
        {
          label: "Check for general danger signs first",
          detail:
            "At 2 months to 5 years: unable to drink or breastfeed, vomits everything, convulsions during this illness, lethargic or unconscious",
          tone: "warn",
        },
        {
          label: "Ask the four main symptoms",
          detail:
            "Cough or difficult breathing (rate for a full minute against 60/min under 2 months, 50/min at 2-11 months, 40/min at 12-59 months); diarrhoea; fever; ear problem",
        },
        {
          label: "Check every child for the rest",
          detail:
            "Malnutrition and anaemia by weight-for-age, MUAC, oedema and palmar pallor; immunisation and vitamin A status; feeding in every child under 2 years; any other problem",
        },
        {
          label: "Classify by colour",
          detail: "Pink means urgent referral, yellow means treatment at the facility, green means home management",
          tone: "decision",
        },
        {
          label: "Treat, including the pre-referral dose",
          detail:
            "Every pink classification gets the first dose of antibiotic in the clinic. Pneumonia (yellow) is oral amoxicillin 40 mg/kg/dose twice daily for 5 days, with the first dose given and demonstrated",
        },
        {
          label: "Counsel with checking questions",
          detail:
            "Ask the mother to state back the dose, frequency and duration in her own words, and watch her give the first dose - a closed question invites a polite yes",
        },
        {
          label: "Fix a follow-up date",
          detail:
            "2 days for pneumonia, dysentery, persisting fever and ear infection; 5 days for a feeding problem or persistent diarrhoea; 14 days for anaemia and low weight for age",
          tone: "good",
        },
      ],
    },
    {
      kind: "branch",
      heading: "The IMNCI colour code",
      root: "Classification of the sick child",
      arms: [
        {
          label: "Pink - urgent referral",
          tone: "warn",
          steps: [
            "Severe pneumonia or very severe disease",
            "Severe dehydration; very severe febrile disease",
            "Severe complicated malnutrition; mastoiditis",
            "Pre-referral first dose, prevent hypoglycaemia, keep warm, refer urgently with a written note",
          ],
        },
        {
          label: "Yellow - treat at the facility",
          steps: [
            "Pneumonia; some dehydration; dysentery",
            "Acute ear infection; anaemia; moderate acute malnutrition",
            "Specific treatment, teach the mother, and a fixed follow-up date",
          ],
        },
        {
          label: "Green - home management",
          tone: "good",
          steps: [
            "Cough or cold with no pneumonia; no dehydration",
            "No anaemia; no growth problem",
            "The four rules of home care, feeding advice, and the return-immediately signs",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Danger signs by age band",
      caption:
        "Severe chest indrawing is the trap: it is a danger sign on the young infant chart, but only a cough-box sign from 2 months to 5 years.",
      columns: ["Sign", "2 months to 5 years", "0 to 59 days (young infant)"],
      rows: [
        ["How many", "Four general danger signs", "Seven signs, any one of which counts"],
        ["Feeding", "Unable to drink or breastfeed", "Not feeding well or stopped breastfeeding"],
        ["Vomiting", "Vomits everything", "Not part of the list"],
        [
          "Neurological",
          "Convulsions during this illness; lethargic or unconscious",
          "Convulsions; movement only on stimulation or no movement",
        ],
        [
          "Breathing",
          "Not a general danger sign - assessed in the cough box",
          "Fast breathing 60 per minute or more; severe chest indrawing",
        ],
        [
          "Temperature",
          "Not a general danger sign",
          "37.5 degrees C or more, or below 35.5 degrees C",
        ],
        ["Jaundice", "Not part of the list", "Jaundice of the palms and soles, or on day 1"],
        [
          "Classification if present",
          "Pink - urgent pre-referral treatment and referral",
          "Possible serious bacterial infection - pink",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Pre-referral treatment before the child leaves",
      caption:
        "Withholding the first antibiotic dose until arrival is the specific practice that pre-referral treatment was designed to eliminate.",
      steps: [
        {
          label: "First dose of antibiotic",
          detail:
            "Injection ampicillin 50 mg/kg IM or IV plus gentamicin 7.5 mg/kg IM once daily; a single IM dose of chloramphenicol, or ceftriaxone 50-100 mg/kg, where the kit differs. In a young infant gentamicin is 5 mg/kg, 4 mg/kg under 2 kg",
          tone: "good",
        },
        {
          label: "Prevent hypoglycaemia",
          detail:
            "If the child can drink, breast milk or sugar water (4 level teaspoons of sugar in 200 mL of clean water); if unconscious, 5 mL/kg of 10% dextrose intravenously, or the same volume of sugar water by nasogastric tube",
        },
        {
          label: "Stop a convulsion",
          detail:
            "Diazepam per rectum 0.5 mg/kg, maximum 10 mg, drawn into a 1 mL syringe with the needle removed and inserted 4-5 cm into the rectum; or intravenous lorazepam 0.1 mg/kg. Check the glucose at the same time",
        },
        {
          label: "Treat severe dehydration on the way",
          detail:
            "Start Ringer lactate by Plan C if a line can be established, or give ORS 20 mL/kg/hour by nasogastric tube during transport",
        },
        {
          label: "Suspected severe malaria",
          detail:
            "Artesunate IM or IV 3 mg/kg for a child under 20 kg, 2.4 mg/kg at 20 kg or more, at 0, 12 and 24 hours then daily; IM artemether or rectal artesunate is an accepted pre-referral option in remote settings",
        },
        {
          label: "Vitamin A for measles or eye signs",
          detail:
            "50,000 IU under 6 months, 100,000 IU at 6-12 months and 200,000 IU over 12 months, on day 1, day 2 and day 14",
        },
        {
          label: "Keep warm, oxygen, written note",
          detail:
            "Oxygen if the saturation is under 90%, continue breastfeeding, and send a written referral note with the mother",
        },
      ],
    },
  ],

  "pediatrics-diarrhoea-dehydration": [
    {
      kind: "branch",
      heading: "Classifying dehydration by the four signs",
      caption:
        "The four signs are the general condition, sunken eyes, the drinking test and the skin pinch. Two or more signs in a column decide the class.",
      root: "Child with diarrhoea",
      arms: [
        {
          label: "Severe dehydration",
          tone: "warn",
          steps: [
            "Lethargic or unconscious",
            "Sunken eyes",
            "Not able to drink or drinking poorly",
            "Skin pinch goes back very slowly, over 2 seconds",
            "About 10% or more of body weight lost - Plan C",
          ],
        },
        {
          label: "Some dehydration",
          tone: "decision",
          steps: [
            "Restless or irritable",
            "Sunken eyes",
            "Drinks eagerly, thirsty",
            "Skin pinch goes back slowly",
            "5-10% of body weight lost - Plan B at the facility",
          ],
        },
        {
          label: "No dehydration",
          tone: "good",
          steps: [
            "Not enough signs to classify as some or severe",
            "Under 5% of body weight - Plan A at home",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "The three treatment plans side by side",
      caption:
        "Low-osmolarity ORS is sodium 75, glucose 75, chloride 65, potassium 20 and citrate 10 mmol/L, total 245 mOsm/L - one sachet in one litre of clean water, discarded after 24 hours.",
      columns: ["Question", "Plan A", "Plan B", "Plan C"],
      rows: [
        ["Who", "No dehydration", "Some dehydration", "Severe dehydration"],
        [
          "Where",
          "At home, with two ORS packets to take",
          "At the facility, the mother gives it under supervision",
          "At the facility with an intravenous line",
        ],
        [
          "Fluid",
          "ORS after each loose stool, plus home fluids and breast milk",
          "Low-osmolarity ORS by cup and spoon",
          "Ringer lactate, or normal saline if it is unavailable",
        ],
        [
          "Volume",
          "50-100 mL under 2 years; 100-200 mL from 2 years",
          "About 75 mL/kg over 4 hours",
          "100 mL/kg in total",
        ],
        [
          "Schedule",
          "After every loose stool",
          "Over 4 hours, then reassess",
          "Under 12 months 30 mL/kg in 1 hour then 70 mL/kg over 5 hours; 12 months to 5 years 30 mL/kg in 30 minutes then 70 mL/kg over 2.5 hours",
        ],
        [
          "If no line is possible",
          "Not applicable",
          "Not applicable",
          "ORS by nasogastric tube 20 mL/kg/hour for 6 hours, 120 mL/kg in all",
        ],
        [
          "Zinc",
          "20 mg daily for 14 days; 10 mg at 2-6 months",
          "The same, as soon as the child can take it",
          "The same, once oral intake is established",
        ],
        [
          "Then what",
          "Return signs taught, follow up in 5 days if not improving",
          "Reassess at 4 hours and reclassify",
          "Reassess at 6 hours in infants and 3 hours in children, and reclassify",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Plan C: intravenous rehydration step by step",
      caption:
        "100 mL/kg of Ringer lactate, given as 30 then 70 mL/kg - fast in the older child, slower in the infant.",
      steps: [
        {
          label: "Secure a line immediately",
          detail:
            "Ringer lactate first choice, normal saline if unavailable. 5% dextrose contains no sodium and causes hyponatraemia; a 20 mL/kg bolus and maintenance does not replace a 10% deficit",
          tone: "warn",
        },
        {
          label: "First 30 mL/kg",
          detail: "Over 1 hour under 12 months; over 30 minutes from 12 months to 5 years",
        },
        {
          label: "Radial pulse still very weak?",
          detail:
            "Repeat the first 30 mL/kg once. Reassess every 15-30 minutes during the bolus and every 1-2 hours after it",
          tone: "decision",
        },
        {
          label: "Then 70 mL/kg",
          detail:
            "Over 5 hours under 12 months; over 2.5 hours from 12 months to 5 years. If hydration is not improving, run the drip faster",
        },
        {
          label: "ORS by mouth as soon as he can drink",
          detail:
            "About 5 mL/kg/hour - usually after 3-4 hours in infants and 1-2 hours in older children - so potassium and base are replaced; give zinc once oral intake is established",
        },
        {
          label: "Reassess and reclassify at the end",
          detail: "6 hours in infants, 3 hours in children; most children then move to Plan B or Plan A",
          tone: "good",
        },
        {
          label: "Still severe after 100 mL/kg",
          detail:
            "Ongoing losses of cholera proportions - give a second course and search for cholera",
          tone: "warn",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Antibiotics in childhood diarrhoea: only two indications",
      caption:
        "Loperamide, diphenoxylate, kaolin-pectin, probiotics as a substitute for ORS and empirical antibiotics for watery diarrhoea have no place, and the first three are dangerous in children.",
      root: "Acute diarrhoea in a child",
      arms: [
        {
          label: "Blood in the stool - dysentery",
          steps: [
            "Treated as shigellosis, the commonest cause",
            "Oral ciprofloxacin 15 mg/kg/dose twice daily for 3 days",
            "Review in 2 days; if no better look for amoebiasis - trophozoites with ingested red cells on a fresh smear - and give metronidazole 10 mg/kg three times daily for 5-10 days",
            "Antimotility drugs can precipitate toxic megacolon and are forbidden",
          ],
        },
        {
          label: "Suspected cholera",
          steps: [
            "A child over 2 years with profuse rice-water stools and severe dehydration, especially during an outbreak",
            "Rehydrate by Plan C with repeated reassessment",
            "Azithromycin 20 mg/kg as a single dose, maximum 1 g, to shorten the purging",
            "Notify the case the same day",
          ],
        },
        {
          label: "Watery diarrhoea, with or without fever",
          tone: "warn",
          steps: [
            "No antibiotic",
            "ORS, zinc for 14 days, and continued feeding with an extra meal a day for 2 weeks after recovery",
            "A single dose of ondansetron 0.15 mg/kg only if persistent vomiting is blocking oral rehydration",
          ],
        },
      ],
    },
  ],

  "pediatrics-severe-acute-malnutrition": [
    {
      kind: "flow",
      heading: "The appetite test decides where the child is treated",
      caption:
        "SAM at 6-59 months is weight-for-height below -3 SD, MUAC under 11.5 cm, or bilateral pitting oedema - any one of the three.",
      steps: [
        {
          label: "Confirm severe acute malnutrition",
          detail:
            "Under 6 months, SAM is weight-for-length below -3 SD, visible severe wasting or bilateral oedema - MUAC is not validated at that age and every such infant is admitted",
        },
        {
          label: "Offer the appetite test",
          detail:
            "Ready-to-use therapeutic food in a quiet place with the mother; he passes if he eats the minimum quantity for his weight within 30 minutes - roughly a third of a 92 g sachet under 7 kg. Refusal is itself a medical complication",
          tone: "decision",
        },
        {
          label: "Look for a medical complication",
          detail:
            "Any IMNCI danger sign, oedema +++, severe pneumonia, severe dehydration, hypothermia under 35 degrees C, fever of 38.5 degrees C or more, hypoglycaemia, severe anaemia, extensive skin lesions, or anything needing intravenous treatment",
          tone: "warn",
        },
        {
          label: "Complicated, failed test or under 6 months",
          detail:
            "Admit to the Nutritional Rehabilitation Centre for the WHO ten steps, starting with F-75",
          tone: "warn",
        },
        {
          label: "Uncomplicated with appetite intact",
          detail:
            "Community management at home: therapeutic food at 175-200 kcal/kg/day (about 2 sachets a day at 5-7 kg, 3 at 7-10 kg), oral amoxicillin 15 mg/kg 8-hourly for 5 days, albendazole, micronutrients and weekly review",
          tone: "good",
        },
        {
          label: "Search for the cause in every child",
          detail:
            "Tuberculosis, HIV (test every SAM child), urinary infection, malaria, measles in the last 3 months, congenital heart disease, cerebral palsy, cleft palate with feeding difficulty",
        },
      ],
    },
    {
      kind: "flow",
      heading: "The WHO ten steps",
      caption:
        "Steps 1-7 are stabilisation in days 1-7, then transition on days 3-7, then rehabilitation in weeks 2-6.",
      steps: [
        {
          label: "1. Hypoglycaemia",
          detail:
            "Glucose under 54 mg/dL: 50 mL of 10% glucose or sugar water orally or by nasogastric tube, or 5 mL/kg of 10% dextrose IV if unconscious; then F-75 within 30 minutes and 2-hourly feeds day and night, recheck at 30 minutes",
          tone: "warn",
        },
        {
          label: "2. Hypothermia",
          detail:
            "Axillary under 35 degrees C: skin-to-skin, cover including the head, room at 25-30 degrees C, feed now and 2-hourly, temperature 2-hourly. Never a hot water bottle against the skin",
          tone: "warn",
        },
        {
          label: "3. Dehydration",
          detail:
            "Assume it with watery diarrhoea; do not rely on the skin pinch or sunken eyes. ReSoMal 5 mL/kg every 30 minutes for 2 hours, then 5-10 mL/kg/hour for 4-10 hours, alternating with F-75. IV only for shock: Ringer lactate with 5% dextrose 15 mL/kg over 1 hour",
        },
        {
          label: "4. Electrolytes",
          detail:
            "Every child is potassium and magnesium depleted and sodium overloaded whatever the serum shows: potassium 3-4 mmol/kg/day and magnesium 0.4-0.6 mmol/kg/day in the mineral mix, low-sodium diet, and never a diuretic for the oedema",
        },
        {
          label: "5. Infection",
          detail:
            "Antibiotics for every child because fever and leucocytosis are absent - oral amoxicillin 15 mg/kg 8-hourly for 5 days if uncomplicated; ampicillin 50 mg/kg 6-hourly for 2 days then oral amoxicillin, plus gentamicin 7.5 mg/kg once daily for 7 days if complicated",
        },
        {
          label: "6. Micronutrients - but no iron yet",
          detail:
            "Vitamin A on day 1 by age, folic acid 5 mg then 1 mg daily, zinc 2 mg/kg/day, copper 0.3 mg/kg/day and a multivitamin. Free iron feeds bacteria and generates oxidative damage in a child who cannot yet bind it",
          tone: "warn",
        },
        {
          label: "7. Cautious feeding with F-75",
          detail:
            "130 mL/kg/day, or 100 mL/kg/day with severe oedema, giving about 100 kcal/kg/day and 1-1.5 g protein/kg/day; 12 two-hourly feeds on days 1-2, 8 three-hourly on days 3-5, 6 four-hourly from day 6. Nasogastric tube if intake is under 80% of target",
        },
        {
          label: "8. Catch-up growth",
          detail:
            "F-100 or RUTF freely to 150-220 kcal/kg/day and 4-6 g protein/kg/day, and elemental iron 3 mg/kg/day now. Over 10 g/kg/day is good gain, 5-10 moderate, under 5 g/kg/day means an untreated infection, missed tuberculosis or a ward feeding problem",
        },
        {
          label: "9. Sensory stimulation",
          detail:
            "Structured play 15-30 minutes a day, the mother present and involved in every feed, a cheerful ward - this is the part of treatment that restores the brain",
        },
        {
          label: "10. Discharge and follow-up",
          detail:
            "At least 15% gain over admission weight, or weight-for-height -2 SD or MUAC 12.5 cm, oedema cleared, appetite good, infections treated, immunisation updated, mother observed feeding; fortnightly for 2 months then monthly",
          tone: "good",
        },
      ],
    },
    {
      kind: "compare",
      heading: "F-75 versus F-100",
      caption:
        "Transition is when the appetite returns and the oedema is going, usually days 3-7: the same volume of F-100 for 2 days, then increase each feed by 10 mL until some is left over.",
      columns: ["Feature", "F-75 (stabilisation)", "F-100 (rehabilitation)"],
      rows: [
        [
          "Composition",
          "75 kcal and 0.9 g protein per 100 mL",
          "100 kcal and 2.9 g protein per 100 mL",
        ],
        [
          "Volume",
          "130 mL/kg/day, or 100 mL/kg/day with severe oedema",
          "The same volume as F-75 for 2 days, then 10 mL more per feed",
        ],
        [
          "Intake delivered",
          "About 100 kcal/kg/day and 1-1.5 g protein/kg/day",
          "150-220 kcal/kg/day and 4-6 g protein/kg/day",
        ],
        [
          "Feed frequency",
          "12 two-hourly, then 8 three-hourly, then 6 four-hourly, by cup and spoon",
          "Free feeding, or RUTF at about 500 kcal per 92 g sachet",
        ],
        [
          "Iron",
          "None - free iron feeds bacteria and oxidises tissue",
          "Elemental iron 3 mg/kg/day once catch-up growth has begun",
        ],
        [
          "What it is preventing",
          "Refeeding syndrome in an adapted circulation",
          "Nothing - it is driving catch-up growth",
        ],
        [
          "Warning sign to watch",
          "Pulse up 15 and respirations up 5, or puffy eyelids, during ReSoMal - stop",
          "Pulse up 25 and respirations up 5 per minute - refeeding heart failure",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "The four killers in the first 48 hours",
      caption:
        "The answer to all four is 2-hourly feeding day and night, warmth, ReSoMal in place of standard boluses, and routine antibiotics.",
      root: "Child with SAM in the ward",
      arms: [
        {
          label: "Hypoglycaemia",
          steps: [
            "Blood glucose under 54 mg/dL",
            "50 mL of 10% glucose orally or by nasogastric tube",
            "5 mL/kg of 10% dextrose IV if unconscious, then F-75 within 30 minutes",
            "Recheck in 30 minutes and start antibiotics",
          ],
        },
        {
          label: "Hypothermia",
          steps: [
            "Axillary temperature under 35 degrees C",
            "Skin-to-skin, cover the head, room at 25-30 degrees C",
            "Feed now and 2-hourly, temperature 2-hourly",
            "Hypoglycaemia and hypothermia both mean sepsis until proved otherwise",
          ],
        },
        {
          label: "Over-hydration",
          steps: [
            "A standard bolus or Plan C precipitates heart failure in an adapted circulation",
            "ReSoMal 5 mL/kg every 30 minutes for 2 hours, then 5-10 mL/kg/hour",
            "Stop if the pulse rises by 15 and respirations by 5, or the eyelids puff",
            "Intravenous fluid only for shock: 15 mL/kg over 1 hour, repeated once if improving",
          ],
        },
        {
          label: "Unrecognised infection",
          steps: [
            "Fever and leucocytosis are absent in the malnourished child",
            "Give antibiotics to every child on admission",
            "Test for HIV, look for tuberculosis, malaria and urinary infection",
            "Measles vaccine on admission if unimmunised and over 6 months",
          ],
        },
      ],
    },
  ],

  "pediatrics-fever-febrile-seizure": [
    {
      kind: "compare",
      heading: "Simple versus complex febrile seizure",
      caption:
        "A febrile seizure is 6 to 60 months, temperature 38 degrees C or higher, no CNS infection, no metabolic disturbance and no previous afebrile seizure.",
      columns: ["Feature", "Simple", "Complex"],
      rows: [
        ["Pattern", "Generalised", "Focal onset"],
        ["Duration", "Under 15 minutes", "15 minutes or more; status if 30 minutes or more"],
        ["Recurrence within 24 hours", "None", "Recurs within the same illness"],
        ["Share of all febrile seizures", "About 70-75%", "About 25-30%"],
        [
          "Risk of later epilepsy",
          "1-2%, barely above the population rate",
          "5-10%, higher with a neurodevelopmental abnormality or a family history of epilepsy",
        ],
        [
          "Investigations",
          "None routinely; lumbar puncture only if meningitis is suspected, or under 12 months and unimmunised",
          "Paediatric referral; lumbar puncture, EEG and imaging as the specialist decides",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "The child who is still convulsing",
      caption:
        "A seizure lasting more than 5 minutes is treated at once, by a route that does not need venous access.",
      steps: [
        {
          label: "Position, airway, oxygen, glucose",
          detail: "On the side, clear the airway, give oxygen, and check the blood glucose",
        },
        {
          label: "Has the seizure passed 5 minutes?",
          detail: "Waiting and sponging is how a febrile seizure becomes status epilepticus",
          tone: "decision",
        },
        {
          label: "Give a benzodiazepine",
          detail:
            "Buccal midazolam 0.3 mg/kg or intranasal midazolam 0.2 mg/kg (maximum 10 mg), intravenous lorazepam 0.1 mg/kg, or rectal diazepam 0.5 mg/kg through a needleless syringe",
          tone: "good",
        },
        {
          label: "Repeat once after 5-10 minutes",
          detail:
            "If it continues, refer as status epilepticus with the airway protected. Intramuscular phenobarbitone and intravenous phenytoin are second line, not first",
          tone: "warn",
        },
        {
          label: "Treat the fever and find its cause",
          detail:
            "Undress the child and give paracetamol 15 mg/kg once he can swallow; treat the underlying infection on its merits",
        },
        {
          label: "Decide about lumbar puncture",
          detail:
            "Mandatory with meningeal signs at any age; strongly considered at 6-12 months when not fully immunised against Hib and pneumococcus, and in any child already on antibiotics in whom the signs are masked",
          tone: "decision",
        },
        {
          label: "Counsel, then home",
          detail:
            "Recurrence one in three, epilepsy risk 1-2%, brain damage nil. Teach the recovery position, no restraint, nothing in the mouth, note the time, and return for a seizure over 5 minutes, repeated seizures or failure to wake within 30 minutes",
          tone: "good",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Fever with no focus in a well child of 3-36 months",
      caption:
        "The temperature is a poor guide to seriousness; the danger signs, the respiratory rate, the skin, the neck and the child's behaviour decide.",
      steps: [
        {
          label: "Is the child toxic?",
          detail:
            "Any general danger sign or a stiff neck is very severe febrile disease: injection ampicillin 50 mg/kg and gentamicin 7.5 mg/kg, prevent hypoglycaemia, paracetamol, artesunate where malaria is possible, and urgent referral",
          tone: "decision",
        },
        {
          label: "Under 2 months? Refer regardless",
          detail:
            "Any fever in an infant under 2 months is a danger sign in its own right - about one in ten has bacteraemia, meningitis or a urinary infection and most of them look well",
          tone: "warn",
        },
        {
          label: "Test for malaria where it occurs",
          detail: "Rapid diagnostic test or microscopy the same day, and treat by species if positive",
        },
        {
          label: "Send a clean-catch urine",
          detail:
            "Dipstick, microscopy and culture if the fever is 39 degrees C or more, has lasted over 2 days, or the child is a girl or an uncircumcised boy - urinary infection is the occult bacterial infection you will actually find",
          tone: "good",
        },
        {
          label: "Treat for comfort, not for the number",
          detail:
            "Paracetamol 15 mg/kg/dose every 4-6 hours, no more than 5 doses in 24 hours, written in millilitres against the concentration on the bottle; ibuprofen 10 mg/kg above 6 months if well hydrated and not dengue. Nimesulide is banned under 12 years and aspirin is avoided",
        },
        {
          label: "Review in 48 hours",
          detail:
            "Most viral fevers declare themselves by then with a rash, coryza or diarrhoea. Teach the return signs: convulsion, inability to drink, drowsiness, fast breathing, rash, or fever beyond 2 days",
        },
        {
          label: "Fever every day beyond 7 days: refer",
          detail:
            "Enteric fever, urinary infection, tuberculosis, malaria, Kawasaki disease, juvenile arthritis and leukaemia - blood culture, blood count, urine culture, chest film and Mantoux as the first tier",
          tone: "warn",
        },
      ],
    },
    {
      kind: "branch",
      heading: "IMNCI classification of fever, 2 months to 5 years",
      caption:
        "Fever for IMNCI is a history of fever, a child who feels hot, or an axillary temperature of 37.5 degrees C or more.",
      root: "Fever in a child of 2 months to 5 years",
      arms: [
        {
          label: "Very severe febrile disease (pink)",
          tone: "warn",
          steps: [
            "Fever with any general danger sign or a stiff neck",
            "First dose of injection ampicillin 50 mg/kg and gentamicin 7.5 mg/kg",
            "Prevent hypoglycaemia; paracetamol if 38.5 degrees C or more",
            "First dose of artesunate in a high malaria risk area, then refer urgently",
          ],
        },
        {
          label: "Malaria (yellow)",
          steps: [
            "Fever with a positive rapid test or smear - test every fever where malaria occurs",
            "Vivax: chloroquine 25 mg/kg base over 3 days plus primaquine 0.25 mg/kg daily for 14 days",
            "Falciparum: artemisinin combination therapy for 3 days plus single-dose primaquine 0.75 mg/kg on day 2",
            "No primaquine under 1 year or in G6PD deficiency",
          ],
        },
        {
          label: "Fever - malaria unlikely",
          steps: [
            "Negative test, or a clear other cause",
            "Paracetamol for 38.5 degrees C or more; treat the cause",
            "Return in 2 days if the fever persists",
            "Refer if the fever is present every day for more than 7 days",
          ],
        },
        {
          label: "Measles with eye or mouth complications",
          steps: [
            "Fever with a generalised maculopapular rash and cough, runny nose or red eyes",
            "Vitamin A 100,000 IU at 6-12 months, 200,000 IU above 12 months, on days 1 and 2",
            "Tetracycline eye ointment for pus; gentian violet for mouth ulcers; follow up in 2 days",
            "Corneal clouding, deep mouth ulcers or a danger sign is severe complicated measles - refer",
          ],
        },
      ],
    },
  ],

  "pediatrics-anaemia-deworming": [
    {
      kind: "compare",
      heading: "Iron deficiency versus beta thalassaemia trait",
      caption:
        "The Mentzer index is the mean corpuscular volume divided by the red cell count in millions - the fastest way to separate the two commonest microcytic anaemias in India.",
      columns: ["Feature", "Iron deficiency", "Beta thalassaemia trait"],
      rows: [
        ["Mentzer index", "Above 13", "Below 13"],
        ["Red cell count", "Low", "High"],
        ["Red cell distribution width", "Raised", "Normal"],
        ["Smear", "Microcytic hypochromic", "Target cells"],
        [
          "Confirmatory test",
          "Serum ferritin under 12 micrograms/L, or under 30 with infection or inflammation",
          "Haemoglobin A2 above 3.5% on HPLC",
        ],
        [
          "Response to 3 months of iron",
          "Haemoglobin rises about 1 g/dL in 2-4 weeks",
          "No response",
        ],
        [
          "What to do next",
          "Iron 3 mg/kg/day, deworm, limit animal milk, iron-rich foods",
          "Family screening, genetic counselling, partner testing before marriage, prenatal diagnosis",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Treating iron deficiency anaemia in a child",
      caption:
        "Iron 3 mg/kg/day, reticulocytes at a week, a gram of haemoglobin a month, and continue for 2-3 months after the haemoglobin is normal - that is a complete prescription.",
      steps: [
        {
          label: "Grade the severity first",
          detail:
            "Anaemia is under 11 g/dL at 6-59 months, under 11.5 at 5-11 years, under 12 at 12-14 years. At 6-59 months: mild 10-10.9, moderate 7-9.9, severe under 7 g/dL",
          tone: "decision",
        },
        {
          label: "Severe anaemia goes to the FRU",
          detail:
            "Refer rather than start iron and wait. Transfuse only under 4 g/dL, or under 6 g/dL with heart failure, distress, severe infection or urgent surgery - packed cells 5-10 mL/kg over 3-4 hours with frusemide 1 mg/kg",
          tone: "warn",
        },
        {
          label: "Elemental iron 3 mg/kg/day",
          detail:
            "Up to 6 mg/kg/day in severe deficiency, in one or two doses between meals with a vitamin C source. The national IFA syrup contains 20 mg elemental iron per mL; ferrous sulphate is 20% elemental iron and ferrous fumarate 33%",
        },
        {
          label: "Deworm and fix the diet",
          detail:
            "Albendazole 400 mg as a single dose, 200 mg at 12-23 months; animal milk under 500 mL a day and none before 1 year; ragi, dal, green leafy vegetables, jaggery, sprouts and egg, with amla, guava or lemon at the meal and no tea",
        },
        {
          label: "Recheck the haemoglobin at 4 weeks",
          detail:
            "Reticulocytosis by day 5-7 and a rise of at least 1 g/dL by 4 weeks confirms the diagnosis where ferritin is not available",
          tone: "decision",
        },
        {
          label: "No response? Rethink",
          detail:
            "Non-adherence, the wrong diagnosis (thalassaemia trait, chronic disease), continuing blood loss from hookworm or cow milk, malabsorption, or persistent infection",
          tone: "warn",
        },
        {
          label: "Continue 2-3 months past normal",
          detail:
            "To refill the stores, 3-6 months in all; then hand the child back to the prophylactic schedule and record it on the MCP card and the Poshan Tracker",
          tone: "good",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Anemia Mukt Bharat: prophylaxis and deworming",
      caption:
        "The 6x6x6 strategy - six beneficiaries, six interventions and six institutional mechanisms - aiming to cut anaemia prevalence by 3 percentage points a year.",
      columns: ["Beneficiary", "Iron and folic acid", "Deworming"],
      rows: [
        [
          "Children 6-59 months",
          "1 mL of IFA syrup - 20 mg iron with 100 micrograms folic acid - twice a week, from the ASHA",
          "Albendazole 200 mg at 12-23 months, 400 mg at 2-5 years, twice a year",
        ],
        [
          "Children 5-9 years",
          "One pink tablet - 45 mg iron with 400 micrograms folic acid - weekly",
          "Albendazole 400 mg twice a year",
        ],
        [
          "Adolescents 10-19 years",
          "One blue tablet - 60 mg iron with 500 micrograms folic acid - weekly under WIFS",
          "Albendazole 400 mg twice a year",
        ],
        [
          "Women 20-49 years, not pregnant",
          "One red tablet - 60 mg iron with 500 micrograms folic acid - weekly",
          "Not applicable",
        ],
        [
          "Pregnant women",
          "60 mg iron with 500 micrograms folic acid daily for 180 days from the second trimester",
          "Albendazole 400 mg once in the second trimester",
        ],
        [
          "Lactating women",
          "60 mg iron with 500 micrograms folic acid daily for 180 days after delivery",
          "Not applicable",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "National Deworming Day",
      caption:
        "10 February and 10 August, with a mop-up day within the following week. Albendazole is not given under 1 year or in the first trimester of pregnancy.",
      steps: [
        {
          label: "Target every child aged 1-19 years",
          detail:
            "Enrolled in school or not, in every state. WHO recommends mass treatment without individual diagnosis wherever prevalence exceeds 20%, twice a year above 50%",
        },
        {
          label: "12-23 months: half a tablet",
          detail:
            "Albendazole 200 mg, crushed between two spoons and given with water - a whole tablet swallowed intact by a toddler is a choking risk and double the programme dose",
          tone: "warn",
        },
        {
          label: "2-19 years: one full tablet, chewed",
          detail: "Albendazole 400 mg chewable tablet",
        },
        {
          label: "Who gives it",
          detail:
            "The teacher in school and the anganwadi worker for 1-5 year olds and out-of-school children, with the ASHA mobilising the community and a health worker at each site",
        },
        {
          label: "Defer the child who is unwell",
          detail:
            "A child sick on the day, or already on other medicines, goes to the mop-up day within the week",
          tone: "decision",
        },
        {
          label: "Expect mild, transient side effects",
          detail:
            "Nausea, abdominal pain, vomiting, diarrhoea, fatigue, and the passage of worms in a heavily infected child - rest and fluids, with a referral plan at every session",
        },
        {
          label: "Never deworm through an obstruction",
          detail:
            "In Ascaris intestinal obstruction the anthelmintic is given only after the obstruction has settled, because paralysed worms can complete the block",
          tone: "warn",
        },
      ],
    },
  ],

  "pediatrics-congenital-heart-disease": [
    {
      kind: "compare",
      heading: "Innocent versus pathological murmur",
      caption:
        "Up to 50-70% of normal children have an innocent murmur at some point. The task is not to name the lesion but to separate the two.",
      columns: ["Feature", "Innocent murmur", "Pathological murmur"],
      rows: [
        [
          "Timing",
          "Always systolic - the venous hum is the only continuous exception",
          "Any diastolic murmur; pansystolic; continuous other than a venous hum",
        ],
        ["Grade and thrill", "Grade 1-2 of 6, never a thrill", "Grade 3 of 6 or louder, or any thrill"],
        [
          "Quality",
          "Musical, vibratory, soft - the Still murmur at the lower left sternal border in a child of 2-7 years",
          "Harsh, blowing, high-pitched",
        ],
        [
          "Radiation",
          "Localised, does not radiate",
          "Radiates to the axilla, back, neck or whole precordium",
        ],
        [
          "Second heart sound",
          "Normal, normally split, no click",
          "Loud, single, or wide and fixed split; an ejection or mid-systolic click",
        ],
        [
          "Effect of position",
          "Louder lying down, softer sitting or standing; a venous hum vanishes lying flat",
          "Little or no change with posture",
        ],
        [
          "The child",
          "Asymptomatic, thriving, normal pulses and femorals, normal blood pressure",
          "Cyanosis, feeding difficulty, sweating, failure to thrive, absent femorals, arm-leg gradient, a syndrome",
        ],
        [
          "Action",
          "Reassure, name the murmur, no echocardiogram, no restriction, no prophylaxis",
          "Echocardiogram and paediatric cardiology referral",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Managing a cyanotic (tet) spell, in order",
      caption:
        "The murmur softening or disappearing confirms that almost no blood is crossing the outflow tract. Never give an inotrope, digoxin, adrenaline, frusemide or any vasodilator.",
      steps: [
        {
          label: "Calm the child, stop all procedures",
          detail: "In the mother's arms; anxiety, crying and pain drive the vicious cycle",
        },
        {
          label: "Knee-chest position",
          detail:
            "Or let an older child squat - it kinks the femoral arteries, raises systemic vascular resistance and reduces venous return from the acidotic legs",
        },
        { label: "100% oxygen by mask" },
        {
          label: "Morphine to abolish the hyperpnoea",
          detail:
            "0.1-0.2 mg/kg subcutaneously or intramuscularly, or 0.05-0.1 mg/kg slowly intravenously",
        },
        {
          label: "Fill the right ventricle",
          detail:
            "Normal saline 10-20 mL/kg intravenously. Frusemide reduces preload, which is the opposite of what a spell needs",
          tone: "warn",
        },
        {
          label: "Sodium bicarbonate if it persists",
          detail: "1-2 mEq/kg intravenously, or if the pH is under 7.2",
        },
        {
          label: "Propranolol for infundibular spasm",
          detail:
            "0.1 mg/kg, range 0.05-0.2, by slow intravenous injection over 5-10 minutes under ECG monitoring, repeated once after 15 minutes",
          tone: "good",
        },
        {
          label: "Raise systemic vascular resistance",
          detail:
            "Phenylephrine 5-20 microgram/kg intravenously then 0.1-0.5 microgram/kg/min, or noradrenaline. Ketamine 1-2 mg/kg IV sedates and raises resistance at the same time",
        },
        {
          label: "Refractory: intubate and call the surgeon",
          detail:
            "Sedate and paralyse, and arrange an emergency shunt or outflow tract stent. A spell is an indication to operate now, not later. Between spells: oral propranolol 1-4 mg/kg/day and elemental iron 3-6 mg/kg/day",
          tone: "warn",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Newborn pulse oximetry screening for critical CHD",
      caption:
        "Done at 24-48 hours of age, or immediately before discharge if that is earlier. It finds about three quarters of critical lesions but misses coarctation and a large VSD - a normal screen never overrides an abnormal examination.",
      steps: [
        {
          label: "Measure right hand and either foot",
          detail: "The right hand is pre-ductal and the foot post-ductal",
        },
        {
          label: "Pass",
          detail:
            "Saturation 95% or more in either limb with a right hand to foot difference of 3% or less",
          tone: "good",
        },
        {
          label: "Immediate fail",
          detail: "Saturation under 90% in either limb - a positive screen; echocardiogram now",
          tone: "warn",
        },
        {
          label: "In between: repeat after 1 hour",
          detail:
            "90-94% in both limbs, or a difference of more than 3%. The 2020 American Academy of Pediatrics revision allows a single repeat where the 2011 algorithm allowed two",
          tone: "decision",
        },
        {
          label: "Still abnormal is a positive screen",
          detail:
            "Echocardiogram before discharge. Do not send home with an outpatient review, and do not give oxygen to make the number look better - it masks the shunt the screen exists to find",
          tone: "warn",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Who still needs endocarditis prophylaxis",
      caption:
        "A single dose 30-60 minutes before the procedure: amoxicillin 50 mg/kg orally, maximum 2 g. One dose, not a course, and it may still be given up to 2 hours afterwards if forgotten.",
      root: "Dental procedure in a child with heart disease",
      arms: [
        {
          label: "Yes - the highest-risk group",
          tone: "warn",
          steps: [
            "A prosthetic valve, or prosthetic material used for valve repair including transcatheter valves, rings and clips",
            "Previous infective endocarditis",
            "Unrepaired cyanotic disease, including palliative shunts and conduits",
            "Any repaired defect with prosthetic material or a device - for the first 6 months",
            "A repaired defect with a residual shunt or regurgitation next to the patch or device - lifelong",
            "Cardiac transplant recipients with valvulopathy",
          ],
        },
        {
          label: "No - oral hygiene only",
          tone: "good",
          steps: [
            "Isolated small ventricular septal defect",
            "Secundum atrial septal defect, unrepaired or with no residual shunt beyond 6 months",
            "Repaired patent ductus arteriosus; mitral valve prolapse; bicuspid aortic valve",
            "Rheumatic valve disease; hypertrophic cardiomyopathy",
            "Dropped by the AHA in 2007 and 2021 and by the ESC in 2023",
          ],
        },
        {
          label: "If penicillin cannot be used",
          steps: [
            "Unable to take oral: ampicillin 50 mg/kg IM or IV (max 2 g), or cefazolin or ceftriaxone 50 mg/kg (max 1 g)",
            "Allergy without anaphylaxis, angioedema or urticaria: cephalexin 50 mg/kg orally, maximum 2 g",
            "Allergy of any kind: azithromycin or clarithromycin 15 mg/kg orally, maximum 500 mg",
            "Or doxycycline 2.2 mg/kg under 45 kg, maximum 100 mg; 100 mg above 45 kg",
            "The AHA 2021 statement removed clindamycin because of Clostridioides difficile colitis",
            "A child already on long-term penicillin needs a different class",
          ],
        },
      ],
    },
  ],

  "pediatrics-nocturnal-enuresis": [
    {
      kind: "compare",
      heading: "Monosymptomatic versus non-monosymptomatic enuresis",
      caption:
        "Enuresis is not diagnosed below 5 years: 80-85% of children are reliably dry at night by their fifth birthday.",
      columns: ["Feature", "Monosymptomatic", "Non-monosymptomatic"],
      rows: [
        [
          "Definition",
          "Bedwetting with no daytime lower urinary tract symptom",
          "Bedwetting plus urgency, daytime wetting, an abnormal void frequency, holding manoeuvres, a weak stream, straining or dribbling",
        ],
        ["Proportion of cases", "About two thirds", "About one third"],
        [
          "Dominant mechanism",
          "Nocturnal polyuria from a blunted vasopressin rhythm, with a high arousal threshold",
          "Detrusor overactivity or dysfunctional voiding with a small functional bladder",
        ],
        [
          "Typical diary findings",
          "Overnight output above 130% of expected bladder capacity; maximum voided volume normal",
          "Maximum voided volume below 65% of expected bladder capacity; frequent small voids",
        ],
        [
          "Constipation and soiling",
          "Look for it, but less often central",
          "Very commonly present and must be treated first",
        ],
        [
          "Investigation",
          "Dipstick and diary only in a well child; no imaging",
          "Ultrasound with post-void residual, uroflowmetry with EMG; spine imaging if any neurological sign",
        ],
        [
          "First treatment",
          "General measures, then alarm or desmopressin",
          "Treat the constipation and the daytime bladder first; the night usually follows",
        ],
        [
          "Refer early?",
          "No - manage in family practice",
          "Yes if daytime symptoms persist, the stream is poor, or the residual is raised",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "The bladder diary, and the two numbers it gives",
      caption:
        "Expected bladder capacity in mL = (age in years + 1) x 30, with a ceiling of about 390 mL. The diary, not the imaging, gives the mechanism.",
      steps: [
        {
          label: "Do not diagnose enuresis under 5 years",
          detail:
            "The decision to investigate and treat rests on the child's distress and motivation, not on the birthday",
          tone: "warn",
        },
        {
          label: "Record 48-72 hours of drinks and voids",
          detail:
            "The time and volume of every void and every drink, plus bowel movements by Bristol stool type and any urgency or wetting episodes",
        },
        {
          label: "Record 7 nights wet or dry",
          detail:
            "Wet episodes per night, the overnight nappy or pad weight (weigh before and after, 1 g equals 1 mL), and the volume of the first morning void",
        },
        {
          label: "Compute EBC = (age + 1) x 30 mL",
          detail: "For a ten-year-old that is 330 mL",
          tone: "decision",
        },
        {
          label: "Overnight output above 130% of EBC",
          detail: "Nocturnal polyuria - this is the child who responds to desmopressin",
        },
        {
          label: "Max voided volume below 65% of EBC",
          detail:
            "A small functional bladder - this is the antimuscarinic candidate; both abnormal calls for combination treatment",
        },
        {
          label: "Dipstick every child",
          detail:
            "Glucose, protein, blood, nitrite, leucocyte esterase and specific gravity. A capillary blood glucose urgently if there is polyuria, polydipsia, weight loss or an abrupt secondary onset - that is new diabetes until proved otherwise",
          tone: "warn",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "The treatment ladder in nocturnal enuresis",
      caption:
        "Constipation, urinary infection, obstructive sleep apnoea and threadworm are treated before, not alongside, enuresis-specific treatment. About 15% of children become dry each year untreated.",
      steps: [
        {
          label: "Explanation and removal of blame",
          detail:
            "Say plainly, with the child in the room, that the wetting is involuntary and not his fault, and that punishing, shaming or teasing makes it worse and must stop",
          tone: "good",
        },
        {
          label: "General measures for 6-8 weeks",
          detail:
            "Spread the normal daily fluid across the day with the last drink 1-2 hours before bed - redistribute, do not restrict; no evening caffeine or cola; void 4-7 times a day; double voiding at bedtime; a night light; no lifting. Reward agreed behaviours, never dry nights",
        },
        {
          label: "Enuresis alarm",
          detail:
            "Every night without exception. About two thirds reach 14 consecutive dry nights and roughly half sustain it - the only treatment that alters the underlying condition, with relapse of 30-50%. Do not call it a failure before 6-8 weeks; overlearning with 200-250 mL extra bedtime fluid afterwards",
        },
        {
          label: "Desmopressin",
          detail:
            "Melt 120 microgram or tablet 200 microgram about an hour before bed, increased to 240 or 400 microgram after 1-2 weeks; never intranasal. No more than about 240 mL of fluid from 1 hour before to 8 hours after, and omit the dose with vomiting, diarrhoea, fever or heavy exertion",
          tone: "warn",
        },
        {
          label: "Add an antimuscarinic",
          detail:
            "Oxybutynin 2.5-5 mg at bedtime (extended-release 5-10 mg daily), tolterodine 2 mg or solifenacin 5 mg, usually combined with desmopressin. Check the post-void residual before and during treatment, and watch for constipation, which will undo the treatment",
        },
        {
          label: "Imipramine, specialist only",
          detail:
            "6-8 years 25 mg, 8-11 years 25-50 mg, over 11 years 50-75 mg at bedtime; 40-50% respond and relapse approaches 90%. Cardiotoxic in overdose - wide QRS, ventricular arrhythmia, seizures - so small quantities, safe storage, baseline ECG where indicated, 3-monthly review and gradual withdrawal",
          tone: "warn",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Secondary and organic causes to exclude",
      caption:
        "Secondary enuresis is wetting that returns after a dry interval of at least six months, and always earns a fuller work-up.",
      root: "Bedwetting that is new, or has daytime symptoms",
      arms: [
        {
          label: "Diabetes mellitus",
          steps: [
            "Polyuria, polydipsia and weight loss",
            "Urine dipstick for glucose and ketones with a capillary blood glucose, the same day",
            "A delay here ends in ketoacidosis",
          ],
        },
        {
          label: "Constipation with rectal loading",
          steps: [
            "Hard infrequent stools, straining or soiling",
            "Present in 30-50%; it compresses the bladder, reduces capacity and provokes detrusor overactivity",
            "The parent never volunteers it and the child never complains of it",
            "Clearing the rectum with a macrogol alone dries a significant minority of beds",
          ],
        },
        {
          label: "Urinary tract infection",
          steps: [
            "Dysuria, frequency, offensive or cloudy urine, fever, new daytime wetting",
            "Urine culture",
          ],
        },
        {
          label: "Obstructive sleep apnoea",
          steps: [
            "Snoring, mouth breathing, restless sleep, witnessed apnoeas",
            "Adenotonsillar hypertrophy",
          ],
        },
        {
          label: "Occult spinal dysraphism",
          tone: "warn",
          steps: [
            "A sacral hair tuft or dimple, an abnormal gait, an absent ankle jerk",
            "Combined urinary and faecal incontinence, straining with a weak stream",
            "MRI of the lumbosacral spine - a plain film misses occult dysraphism and gives false reassurance",
          ],
        },
        {
          label: "Threadworm and psychosocial causes",
          steps: [
            "Perianal itch and disturbed nights",
            "A new sibling, bereavement, separation, migration, bullying, a school change",
            "Consider abuse",
          ],
        },
      ],
    },
  ],

  "pediatrics-oral-thrush": [
    {
      kind: "branch",
      heading: "The clinical variants of oral candidiasis",
      caption:
        "Candida is carried in 30-60% of healthy mouths, so thrush is never simply an infection acquired from outside - it means the host or the local environment has changed.",
      root: "Oral candidiasis",
      arms: [
        {
          label: "Acute pseudomembranous (thrush)",
          steps: [
            "Creamy-white curd-like plaques on the tongue, palate and buccal mucosa",
            "Scrapes off leaving a raw, sometimes bleeding base",
            "Neonate and infant; after antibiotics; inhaled steroids; HIV; chemotherapy",
          ],
        },
        {
          label: "Acute erythematous (antibiotic mouth)",
          steps: [
            "Flat red, glazed, painful, depapillated area on the dorsum of tongue and palate",
            "No white plaque to scrape",
            "After a broad-spectrum antibiotic course; inhaled steroid user",
          ],
        },
        {
          label: "Chronic erythematous (denture stomatitis)",
          steps: [
            "Erythema and oedema confined exactly to the denture-bearing palate",
            "Newton I pinpoint hyperaemia, II diffuse erythema, III papillary hyperplasia",
            "Up to 65% of complete denture wearers; characteristically asymptomatic",
            "The acrylic biofilm is the reservoir - denture out at night and disinfected, or it relapses",
          ],
        },
        {
          label: "Chronic hyperplastic (candidal leukoplakia)",
          tone: "warn",
          steps: [
            "Firm adherent white plaque behind the commissure, often bilateral",
            "Does NOT scrape off - and that is the point",
            "Middle-aged male smoker; the only candidal lesion with malignant potential",
            "Incisional biopsy is mandatory, from the most suspicious red, speckled or indurated area",
          ],
        },
        {
          label: "Angular cheilitis (perleche)",
          steps: [
            "Sore, fissured, crusted erythema at one or both angles of the mouth",
            "Denture wearer with lost vertical dimension; iron, folate or B12 deficiency; drooling child; HIV",
            "Miconazole cream, which also covers Staph aureus; correct the denture height and the haematinic",
          ],
        },
        {
          label: "Median rhomboid glossitis",
          steps: [
            "Rhomboid depapillated red or nodular midline area in front of the circumvallate papillae",
            "May have a palatal kissing lesion",
            "Smoker, inhaled steroid user, diabetic, HIV - stop smoking and correct the cause",
          ],
        },
        {
          label: "Linear gingival erythema",
          steps: [
            "A 2-3 mm fiery red band along the free gingival margin",
            "Out of proportion to the plaque and not responding to scaling",
            "HIV - scaling and chlorhexidine, topical antifungal, and above all antiretroviral therapy",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Telling the oral white lesions apart",
      caption:
        "A white lesion that does not scrape off is biopsied, not treated as thrush.",
      columns: ["Lesion", "Scrapes off?", "Key clue", "What to do"],
      rows: [
        [
          "Pseudomembranous candidiasis",
          "Yes, leaving a raw erythematous base",
          "A predisposing factor is always present",
          "Topical antifungal; find and correct the cause",
        ],
        [
          "Milk curds in an infant",
          "Yes, leaving normal pink mucosa",
          "No erythema, no soreness, the infant feeds happily",
          "Reassure; wipe the mouth with clean water after feeds",
        ],
        [
          "Leukoplakia",
          "No",
          "A clinical diagnosis of exclusion in a smoker or tobacco chewer; premalignant",
          "Biopsy; stop tobacco; long-term surveillance",
        ],
        [
          "Oral lichen planus",
          "No",
          "Bilateral symmetrical lacy Wickham striae; check for hepatitis C",
          "Biopsy if atypical or erosive; topical steroids; periodic review",
        ],
        [
          "Oral hairy leukoplakia",
          "No",
          "Corrugated vertical streaks on the lateral border of the tongue; EBV; a WHO stage 3 HIV marker",
          "Test for HIV; start antiretroviral therapy - it resolves with immune recovery",
        ],
        [
          "Chronic hyperplastic candidiasis",
          "No",
          "Male smoker; PAS shows hyphae invading the parakeratin",
          "Biopsy; systemic antifungal for weeks; excise if dysplasia persists",
        ],
        [
          "Koplik spots",
          "Not applicable",
          "Bluish-white 1 mm grains opposite the second molars in the measles prodrome",
          "Diagnose measles; vitamin A, isolation, notify, look for complications",
        ],
        [
          "Chemical or thermal burn",
          "The slough peels",
          "A patch matching exactly the site of contact - an aspirin tablet, a hot drink, a caustic",
          "Remove the cause; symptomatic care; it heals in days",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Antifungal escalation in oral candidiasis",
      caption:
        "Treat for 7-14 days and for at least 48 hours after the mouth is clear. If it fails, check adherence and technique, then the uncorrected cause, then the species - in that order, before escalating the drug.",
      steps: [
        {
          label: "Nystatin suspension 100,000 units/mL",
          detail:
            "Neonate 1 mL four times daily; infant and child 1-2 mL; older child and adult 4-6 mL held in the mouth then swallowed. Give AFTER feeds or food; not absorbed, so no warfarin interaction. Not within 30 minutes of chlorhexidine, which inactivates it",
          tone: "good",
        },
        {
          label: "Miconazole oral gel 2%",
          detail:
            "1.25 mL four times daily from 1 month to 1 year; 2.5 mL from 2 years and in adults, smeared on the lesions after food. Avoid with warfarin - even the gel inhibits CYP2C9 and has caused dangerous INR rises; prefer nystatin under 4 months because of the choking risk",
          tone: "warn",
        },
        {
          label: "Clotrimazole troche 10 mg",
          detail:
            "Dissolved slowly five times daily - the IDSA first-line topical agent in adults, but troches are not reliably available in India, where 1% mouth paint three to four times daily is the practical substitute. Not for a child too young to hold a lozenge",
        },
        {
          label: "Oral fluconazole",
          detail:
            "Adult 100-200 mg daily; child 6 mg/kg on day 1 then 3 mg/kg daily, maximum 400 mg/day; neonate 6 mg/kg every 72 hours in the first 2 weeks and every 48 hours from 2-4 weeks. Oesophageal disease needs 200-400 mg (3-6 mg/kg) daily for 14-21 days",
        },
        {
          label: "Itraconazole, posaconazole, voriconazole",
          detail:
            "For fluconazole-refractory disease: itraconazole solution 200 mg daily, posaconazole 400 mg twice daily for 3 days then 400 mg daily, or voriconazole 200 mg twice daily, for up to 28 days",
        },
        {
          label: "Echinocandin or amphotericin B",
          detail:
            "Intravenous, for the failed or severely ill patient; amphotericin B deoxycholate 0.3 mg/kg daily. Speciate first - C. krusei is intrinsically fluconazole-resistant and C. glabrata often is",
          tone: "warn",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Thrush in the breastfed infant",
      caption:
        "Thrush affects about 5% of normal newborns and up to 10% of infants in the first month; in a healthy term infant it is a trivial, self-limiting nuisance.",
      steps: [
        {
          label: "Confirm it is not milk curds",
          detail:
            "A plaque that scrapes off leaving a raw, sometimes bleeding base is candidiasis; milk curds wipe away leaving normal pink mucosa with no erythema in a happily feeding baby",
          tone: "decision",
        },
        {
          label: "Nystatin 1 mL four times daily",
          detail:
            "100,000 units dropped into each side of the mouth after feeds, and applied to the whole mucosa including under the tongue with a clean finger or swab",
          tone: "good",
        },
        {
          label: "Continue 7-14 days",
          detail:
            "And for at least 48 hours after the mouth looks clear - treatment that stops the day it looks clean is the commonest reason for a recurrence blamed on resistance",
          tone: "warn",
        },
        {
          label: "Treat the mother at the same time",
          detail:
            "Miconazole 2% or nystatin cream to both nipples and areolae after every feed for 14 days, wiping the excess off before the next feed. Check the latch first - most sore nipples are a poor latch, tongue-tie, vasospasm or bacterial infection",
        },
        {
          label: "Sterilise everything that enters the mouth",
          detail:
            "Boil teats, bottles, nipple shields, dummies and breast-pump parts for 5-10 minutes daily, or use a steriliser; discard and replace teats and dummies after an episode; no bottle in the mouth at sleep and no honey or sugar on the dummy",
        },
        {
          label: "Escalate only when it is earned",
          detail:
            "Fluconazole 6 mg/kg on day 1 then 3 mg/kg daily for moderate to severe disease, immunosuppression, oesophageal involvement or failed topical treatment; in a neonate the interval is every 72 hours in the first 2 weeks and every 48 hours from 2 to 4 weeks",
          tone: "decision",
        },
        {
          label: "Persistent thrush past 6-12 months",
          detail:
            "Test for HIV. If mouth, nails and skin have been involved from infancy, think of chronic mucocutaneous candidiasis and APECED, and check the serum calcium and morning cortisol",
          tone: "warn",
        },
      ],
    },
  ],
};

export default diagrams;
