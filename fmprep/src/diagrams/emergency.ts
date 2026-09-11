/**
 * Diagrams for emergency, keyed by topic id.
 */
import type { DiagramSet } from "../lib/types";

const diagrams: DiagramSet = {
  "emergency-cardiac-arrest": [
    {
      kind: "flow",
      heading: "Adult advanced life support",
      caption: "From recognition to return of spontaneous circulation, in the order it is done.",
      steps: [
        {
          label: "Unresponsive with agonal gasps",
          detail:
            "Gasping occurs in up to 40% of arrests and is the commonest reason CPR is not started - treat gasping as arrest",
          tone: "warn",
        },
        {
          label: "Compressions within 10 seconds",
          detail:
            "Lower half of sternum, 5-6 cm, 100-120/min, full recoil, 30:2; send a named person for the defibrillator",
        },
        {
          label: "Attach pads and check the rhythm",
          detail:
            "Sternal-apical: right infraclavicular and left mid-axillary at the 5th space; paediatric pads under 8 years or 25 kg",
          tone: "decision",
        },
        {
          label: "Shockable: one shock, then 2 min CPR",
          detail:
            "VF or pulseless VT: 150-200 J biphasic (360 J monophasic), resume compressions at once with no pulse check",
        },
        {
          label: "Non-shockable: adrenaline at once",
          detail: "Asystole or PEA: adrenaline 1 mg IV or IO as soon as access is available, repeated every 3-5 minutes",
        },
        {
          label: "Drugs after the third shock",
          detail:
            "Adrenaline 1 mg IV every 3-5 min and amiodarone 300 mg, with a further 150 mg after the fifth shock",
        },
        {
          label: "Search the 4 Hs and 4 Ts",
          detail:
            "Check glucose in every arrest; needle a tension pneumothorax before imaging; calcium if hyperkalaemia is likely",
        },
        {
          label: "ROSC: post-resuscitation care",
          detail:
            "SpO2 94-98%, normocapnia, 12-lead ECG within 10 minutes, systolic above 100 mmHg, temperature 37.5 C or below for 72 hours",
          tone: "good",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Reversible causes: the 4 Hs and 4 Ts",
      caption: "The list to run through in every arrest that will not respond, with the bedside fix.",
      root: "Arrest not responding to the algorithm",
      arms: [
        {
          label: "The 4 Hs",
          steps: [
            "Hypoxia - oxygenate and confirm the airway; the commonest cause in children",
            "Hypovolaemia - fluid, blood, and stop the bleeding",
            "Hyperkalaemia and metabolic causes - calcium gluconate 10% 10-30 mL IV, insulin 10 units with 25 g dextrose, bicarbonate 50 mmol",
            "Hypoglycaemia - 25 g of dextrose; check capillary glucose in every arrest",
            "Hypothermia - active rewarming; no one is dead until warm and dead",
          ],
        },
        {
          label: "The 4 Ts",
          steps: [
            "Tension pneumothorax - needle decompression before any imaging",
            "Tamponade - pericardiocentesis or thoracotomy",
            "Toxins - sodium bicarbonate 1 mmol/kg for tricyclic overdose; magnesium 2 g for torsades",
            "Thrombosis - coronary (PCI or thrombolysis after ROSC) or pulmonary (thrombolyse, then continue CPR 60-90 minutes)",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Adrenaline: arrest against anaphylaxis",
      caption: "The classic examination trap and a real-world killer. Learn the two columns as a pair.",
      columns: ["Item", "Cardiac arrest", "Anaphylaxis"],
      rows: [
        ["Concentration", "1:10,000 - 1 mg in 10 mL", "1:1000 - 1 mg in 1 mL"],
        ["Adult dose", "1 mg", "0.5 mg"],
        ["Route", "Intravenous or intraosseous", "Intramuscular, anterolateral thigh"],
        ["Repeat interval", "Every 3-5 minutes while the arrest continues", "Every 5 minutes if there is no improvement"],
        [
          "Child",
          "10 microgram/kg = 0.1 mL/kg of 1:10,000, max 1 mg",
          "0.01 mg/kg of 1:1000, maximum 0.5 mg",
        ],
        [
          "The fatal error",
          "Giving the anaphylaxis dose IM - absorption is negligible without a circulation",
          "Giving 1:1000 as an IV bolus - hypertensive crisis and arrhythmia",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "BLS numbers: adult, child and infant",
      caption: "Child means 1 year to puberty; infant means under 1 year.",
      columns: ["Parameter", "Adult", "Child", "Infant"],
      rows: [
        ["Compression depth", "5-6 cm", "About one-third of chest depth, about 5 cm", "About one-third, about 4 cm"],
        ["Hand position", "Two hands, lower half of sternum", "One or two hands, lower half of sternum", "Two fingers, or two thumbs encircling"],
        ["Rate", "100-120/min", "100-120/min", "100-120/min"],
        ["Ratio, single rescuer", "30:2", "30:2", "30:2"],
        ["Ratio, two rescuers", "30:2", "15:2", "15:2"],
        ["Rescue breaths first", "No, compressions first", "Yes, 5 initial breaths", "Yes, 5 initial breaths"],
        ["Defibrillation energy", "150-200 J biphasic", "4 J/kg", "4 J/kg"],
      ],
    },
  ],

  "emergency-anaphylaxis": [
    {
      kind: "flow",
      heading: "Anaphylaxis: the first ten minutes",
      caption: "Adrenaline is the whole answer to the first question; everything after it is an adjunct.",
      steps: [
        {
          label: "Sudden airway, breathing or circulation fault",
          detail:
            "After a trigger. Skin signs are absent in up to 20% of fatal reactions - hypotension alone is enough for the diagnosis",
          tone: "warn",
        },
        {
          label: "Adrenaline 0.5 mg IM into the thigh",
          detail: "0.5 mL of 1:1000 into the anterolateral mid-thigh, repeated every 5 minutes if there is no improvement",
        },
        {
          label: "Lie flat with the legs raised",
          detail:
            "Left lateral in pregnancy. Never sit or stand the patient up - sudden death from an empty ventricle has followed a change of posture",
          tone: "warn",
        },
        {
          label: "High-flow oxygen and call for help",
          detail: "10-15 L/min through a mask with a reservoir bag; call an ambulance in every case",
        },
        {
          label: "Fluid challenge through a wide cannula",
          detail:
            "500-1000 mL of balanced crystalloid over 5-10 minutes in an adult, 10 mL/kg in a child, repeated to blood pressure",
        },
        {
          label: "Adjuncts for the airway and the chest",
          detail: "Nebulised adrenaline 5 mL of 1:1000 for stridor; nebulised salbutamol 5 mg (2.5 mg under 5 years) for wheeze",
        },
        {
          label: "Still shocked: think beta-blocker",
          detail:
            "Glucagon 1-2 mg IV over 5 minutes (child 20-30 microgram/kg, max 1 mg), start an adrenaline infusion and transfer",
          tone: "decision",
        },
        {
          label: "Observe, then discharge with a plan",
          detail:
            "At least 6 hours; 12 hours or overnight if severe, if repeat adrenaline was needed, or if the patient lives far from care",
          tone: "good",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Adrenaline in anaphylaxis by age",
      caption: "All intramuscular, all 1:1000, all into the anterolateral thigh.",
      columns: ["Age band", "Dose of 1:1000", "Volume"],
      rows: [
        ["Adult and child over 12 years", "0.5 mg", "0.5 mL"],
        ["Child 6-12 years", "0.3 mg", "0.3 mL"],
        ["Child 6 months to 6 years", "0.15 mg", "0.15 mL"],
        ["Infant under 6 months", "0.1-0.15 mg", "0.1-0.15 mL"],
        ["Any age, by weight", "0.01 mg/kg, maximum 0.5 mg", "0.01 mL/kg"],
      ],
    },
    {
      kind: "compare",
      heading: "Anaphylaxis against its mimics",
      caption: "What separates each look-alike, and what changes about the treatment.",
      columns: ["Condition", "Distinguishing feature", "Treatment difference"],
      rows: [
        [
          "Vasovagal syncope",
          "Bradycardia, pallor, sweating, no urticaria, recovers on lying flat",
          "Lie flat and reassure; adrenaline not needed",
        ],
        [
          "Acute severe asthma",
          "Wheeze without urticaria, hypotension or angioedema",
          "Bronchodilators and steroids; adrenaline only if anaphylaxis is suspected",
        ],
        [
          "ACE inhibitor angioedema",
          "Isolated lip and tongue swelling, no urticaria, no itch, days to years on the drug",
          "Stop the drug; adrenaline usually ineffective, the airway is the priority",
        ],
        [
          "Panic attack with hyperventilation",
          "Tingling, carpopedal spasm, normal blood pressure, no rash",
          "Reassurance and breathing control",
        ],
        [
          "Scombroid fish poisoning",
          "Flushing and headache after spoiled fish, several people affected",
          "Antihistamines usually suffice",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Drugs in anaphylaxis: order of use",
      caption: "Reaching down the ladder before the top rung is given is a recognised cause of death.",
      steps: [
        {
          label: "Adrenaline 1:1000 intramuscularly",
          detail: "0.5 mg into the thigh, repeated every 5 minutes. First and always; there is no contraindication",
          tone: "good",
        },
        {
          label: "Oxygen and crystalloid",
          detail: "10-15 L/min with a reservoir mask; 500-1000 mL rapidly in an adult, 10 mL/kg boluses in a child",
        },
        {
          label: "Nebulised adrenaline or salbutamol",
          detail: "5 mL of 1:1000 for stridor; salbutamol 5 mg for persistent wheeze. Adjuncts, never substitutes",
        },
        {
          label: "Glucagon for the beta-blocked patient",
          detail: "1-2 mg IV over 5 minutes, repeatable; it bypasses the blocked beta receptor by activating adenylate cyclase",
        },
        {
          label: "Intravenous adrenaline, monitored only",
          detail:
            "Refractory shock: 50 microgram boluses of 1:10,000 or an infusion, by a trained practitioner. Never 1:1000 as an IV bolus",
          tone: "warn",
        },
        {
          label: "Chlorphenamine and hydrocortisone",
          detail:
            "10 mg IM or slow IV and 200 mg IV, third-line and after stabilisation only; removed from the 2021 initial algorithm",
        },
      ],
    },
  ],

  "emergency-shock": [
    {
      kind: "branch",
      heading: "Classifying shock at the bedside",
      caption: "Neck veins, peripheries and lung fields, examined before a fluid bolus is prescribed.",
      root: "Shocked patient: JVP, peripheries, lungs",
      arms: [
        {
          label: "Hypovolaemic",
          steps: [
            "JVP low or flat",
            "Cold, clammy, capillary refill over 3 seconds",
            "Lungs clear",
            "Crystalloid boluses, blood, and stop the bleeding",
          ],
        },
        {
          label: "Distributive",
          steps: [
            "Septic: warm early and cold late - 30 mL/kg crystalloid, cultures, antibiotics within 1 hour",
            "Anaphylactic: warm and urticated with wheeze - adrenaline 0.5 mg IM and fluids",
            "Neurogenic: warm, dry and bradycardic - fluids then noradrenaline, atropine for the bradycardia",
          ],
        },
        {
          label: "Cardiogenic",
          steps: [
            "JVP raised, peripheries cold and mottled",
            "Basal crepitations",
            "Cautious 250 mL challenge, inotrope, reperfusion",
            "Inferior infarct with clear lungs is RV infarction - fluid, and absolutely no nitrates",
          ],
          tone: "warn",
        },
        {
          label: "Obstructive",
          steps: [
            "JVP raised with clear lung fields - the one discriminating sign",
            "Tension pneumothorax: absent breath sounds one side - needle decompression then drain",
            "Tamponade: pulsus paradoxus - pericardiocentesis",
            "Massive pulmonary embolism - thrombolysis",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "The first hour in shock",
      caption: "Hypotension is a late sign; the resuscitation starts before the blood pressure falls.",
      steps: [
        {
          label: "Diagnose before the pressure falls",
          detail:
            "A narrow pulse pressure and tachycardia come first - up to 30% of blood volume is lost before the systolic falls",
          tone: "warn",
        },
        {
          label: "Read the three windows of perfusion",
          detail:
            "Skin (refill over 3 s, mottling, cold), brain (restless, drowsy, confused), kidney (urine under 0.5 mL/kg/h)",
        },
        {
          label: "Two large-bore cannulae and bloods",
          detail:
            "16-18 G, or intraosseous after two failed attempts; group, haemoglobin, glucose, creatinine, electrolytes, lactate",
        },
        {
          label: "Choose the fluid by the type of shock",
          detail:
            "Septic 30 mL/kg over 3 h; haemorrhage 500 mL boluses while blood arrives; cardiogenic 250 mL only, stopping at the first crackle",
          tone: "decision",
        },
        {
          label: "Reassess after every bolus",
          detail:
            "Balanced crystalloid preferred to 0.9% saline; starches are contraindicated. A passive leg raise gives about 300 mL of reversible auto-transfusion",
        },
        {
          label: "MAP still under 65: noradrenaline",
          detail:
            "0.05-0.5 microgram/kg/min titrated to a mean arterial pressure of 65 mmHg; may run peripherally briefly while central access is arranged",
        },
        {
          label: "Add an inotrope or steroid selectively",
          detail:
            "Dobutamine 2.5-10 microgram/kg/min for low output despite filling; hydrocortisone 200 mg/day only if vasopressors persist",
        },
        {
          label: "Reassess every 15 minutes and escalate",
          detail:
            "Lactate above 4 mmol/L, or a lactate that will not fall, means escalate rather than repeat what has already failed twice",
          tone: "good",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Classes of haemorrhagic shock, 70 kg adult",
      caption: "The class is read from the pulse pressure and the sensorium, not from the systolic alone.",
      steps: [
        {
          label: "Class I - up to 750 mL (15%)",
          detail: "Pulse below 100/min, normal blood pressure, slightly anxious, urine above 30 mL/h",
        },
        {
          label: "Class II - 750-1500 mL (15-30%)",
          detail: "Pulse 100-120/min, normal systolic with a narrow pulse pressure, mildly anxious, urine 20-30 mL/h",
        },
        {
          label: "Class III - 1500-2000 mL (30-40%)",
          detail: "Pulse 120-140/min, systolic falls, anxious and confused, urine 5-15 mL/h",
        },
        {
          label: "Class IV - over 2000 mL (over 40%)",
          detail: "Pulse above 140/min and weak, markedly low pressure, confused or unconscious, negligible urine",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Vasoactive drugs in shock",
      caption: "Noradrenaline first in almost everything; dopamine is second-line at best.",
      columns: ["Drug", "Dose", "Action", "When it is used"],
      rows: [
        [
          "Noradrenaline",
          "0.05-0.5 microgram/kg/min IV infusion",
          "Alpha-1 vasoconstriction, some beta-1",
          "First-line in septic, in hypovolaemic after volume, and in most shock",
        ],
        [
          "Adrenaline",
          "0.05-0.5 microgram/kg/min IV infusion",
          "Alpha and beta",
          "Anaphylaxis, refractory shock, post-arrest",
        ],
        [
          "Dobutamine",
          "2.5-10 microgram/kg/min IV infusion",
          "Beta-1 inotrope, mild vasodilator",
          "Low cardiac output with an adequate mean arterial pressure",
        ],
        ["Vasopressin", "0.03 units/min, fixed infusion", "V1 vasoconstriction", "Added to noradrenaline to spare its dose"],
        [
          "Dopamine",
          "5-15 microgram/kg/min",
          "Dose-dependent",
          "Second-line only; more arrhythmias and higher mortality than noradrenaline",
        ],
      ],
    },
  ],

  "emergency-poisoning": [
    {
      kind: "flow",
      heading: "The poisoned patient: the first ten minutes",
      caption: "Resuscitate, then decontaminate, then diagnose. In that order.",
      steps: [
        {
          label: "Resuscitate first, diagnose after",
          detail:
            "Intubate for GCS below 8, respiratory rate below 8 or above 30, SpO2 below 90% on oxygen, or unclearable secretions",
        },
        {
          label: "Give the universal antidotes",
          detail:
            "Oxygen to SpO2 94-98%; dextrose 25 g IV if glucose is low or unmeasurable; naloxone 0.4-2 mg IV; thiamine 100 mg IV",
        },
        {
          label: "Read the toxidrome",
          detail: "Pupils, skin, pulse. Pinpoint and wet is cholinergic; pinpoint and dry is opioid; dilated and dry is anticholinergic",
          tone: "decision",
        },
        {
          label: "Keep the container, take the history",
          detail:
            "The label gives agent and concentration, which converts a volume into a dose. One adult mouthful is 20-30 mL. Record the time",
        },
        {
          label: "Decontaminate only where it helps",
          detail:
            "Activated charcoal 1 g/kg (adult 50 g, child 25 g) within 1 hour with a protected airway. Gastric lavage has almost no place",
        },
        {
          label: "Never induce vomiting",
          detail:
            "Charcoal is useless or dangerous for iron, lithium, alcohols, acids, alkalis and hydrocarbons; lavage is banned after corrosives",
          tone: "warn",
        },
        {
          label: "Give the specific antidote",
          detail:
            "Atropine for organophosphate; N-acetylcysteine 150 then 50 then 100 mg/kg for paracetamol; vitamin K1 10 mg for superwarfarin",
          tone: "good",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Atropinisation in organophosphate poisoning",
      caption: "Double the dose every 5 minutes. Small fixed doses are the classic way to lose the patient.",
      steps: [
        {
          label: "Atropine 1.8-3 mg IV as a bolus",
          detail:
            "3-5 ampoules of 0.6 mg. Start on the clinical picture; never wait for a cholinesterase level. Child 0.02-0.05 mg/kg, minimum 0.1 mg",
        },
        {
          label: "Reassess at 5 minutes and double it",
          detail: "3, 6, 12, 24 mg. There is no maximum dose - severe poisoning may need 50-100 mg or more in the first hours",
        },
        {
          label: "Stop at all five end-points together",
          detail:
            "Clear chest, heart rate above 80, systolic above 80 mmHg, dry axillae, pupils no longer pinpoint. Trust the chest and the axillae",
          tone: "good",
        },
        {
          label: "Infusion at 10-20% of the loading dose",
          detail: "If 30 mg atropinised him, run 3-6 mg per hour, titrate hourly to the same end-points, and taper over 24-48 hours",
        },
        {
          label: "Add pralidoxime, never before atropine",
          detail:
            "30 mg/kg (1-2 g) IV over 15-30 minutes, then 8-10 mg/kg/hour, or 1 g every 4-6 hours with no pump, for at least 24 hours",
        },
        {
          label: "Watch for atropine toxicity",
          detail:
            "Fever with dry skin, absent bowel sounds, urinary retention, delirium, heart rate above 140 - stop, wait, restart at half the rate",
          tone: "warn",
        },
        {
          label: "Expect intermediate syndrome at 24-96 h",
          detail:
            "Neck flexor and respiratory weakness after apparent recovery - test by asking him to lift his head. It needs a ventilator, not more atropine",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Toxidromes at the bedside",
      caption: "Pupils, skin and pulse identify the poison before any laboratory does.",
      columns: ["Toxidrome", "Pupils", "Skin", "Pulse", "First move"],
      rows: [
        [
          "Cholinergic",
          "Pinpoint",
          "Wet and sweaty",
          "Slow, may be fast if nicotinic",
          "Atropine 1.8-3 mg IV, doubling every 5 minutes",
        ],
        ["Anticholinergic", "Dilated", "Dry, hot, flushed", "Fast", "Cooling, benzodiazepines, fluids; physostigmine rarely"],
        ["Opioid", "Pinpoint", "Normal or cool", "Slow or normal", "Naloxone 0.4-2 mg IV, repeated to 10 mg"],
        ["Sympathomimetic", "Dilated", "Wet and sweaty", "Fast", "Benzodiazepines, cooling, fluids"],
        ["Cardiac glycoside", "Normal", "Normal", "Slow with blocks", "Monitor, charcoal, atropine, pacing, digoxin Fab"],
        ["Sedative-hypnotic", "Normal or small", "Normal", "Normal or slow", "Airway and supportive care; flumazenil rarely"],
      ],
    },
    {
      kind: "compare",
      heading: "Organophosphate against carbamate",
      caption: "Same toxidrome, same atropine, different duration and a different answer on pralidoxime.",
      columns: ["Feature", "Organophosphate", "Carbamate"],
      rows: [
        ["Enzyme binding", "Irreversible, then ages", "Reversible carbamylation"],
        ["Duration of illness", "Days to weeks", "Usually under 24-48 hours"],
        ["Central nervous system", "Marked - coma and seizures", "Less, as it crosses the blood-brain barrier poorly"],
        ["Atropine", "Essential, often in very large cumulative doses", "Essential, but for a shorter period"],
        ["Pralidoxime", "Indicated, and useless once the enzyme has aged", "Not indicated routinely"],
        ["Intermediate syndrome", "Occurs at 24-96 hours", "Does not occur"],
        ["Delayed neuropathy", "At 2-3 weeks with certain agents", "Does not occur"],
      ],
    },
    {
      kind: "flow",
      heading: "Paracetamol overdose to N-acetylcysteine",
      caption: "The patient who looks well at 6 hours has proved nothing.",
      steps: [
        {
          label: "Above 150 mg/kg, or 7.5 g in an adult",
          detail:
            "The threshold falls to 75-100 mg/kg in the malnourished, the alcoholic, in anorexia and on phenytoin, carbamazepine, rifampicin or isoniazid",
        },
        {
          label: "Charcoal 50 g if within 1 hour",
          detail: "Only with a protected airway, and never as a substitute for the antidote",
        },
        {
          label: "Level at 4 hours, never earlier",
          detail:
            "Plot on the Rumack-Matthew nomogram; the treatment line runs from 150 microgram/mL at 4 hours to 37.5 microgram/mL at 12 hours",
          tone: "decision",
        },
        {
          label: "Time unknown or staggered: treat now",
          detail:
            "Also if the level cannot be obtained within 8 hours. Treat first and ask questions afterwards - the nomogram needs a single known time",
          tone: "warn",
        },
        {
          label: "The intravenous 21-hour regimen",
          detail:
            "150 mg/kg over 60 minutes, then 50 mg/kg over 4 hours, then 100 mg/kg over 16 hours - 300 mg/kg in all",
        },
        {
          label: "Anaphylactoid reaction: pause, never abandon",
          detail:
            "It is rate-related, not allergic. Stop the infusion, chlorphenamine 10 mg IV, salbutamol for wheeze, then restart more slowly",
        },
        {
          label: "Nearly 100% protective within 8 hours",
          detail:
            "Still given after 24 hours and in established liver failure. Refer on the King's College criteria: pH below 7.30, or INR above 6.5 with creatinine above 3.4 mg/dL and grade III-IV encephalopathy",
          tone: "good",
        },
      ],
    },
  ],

  "emergency-burns": [
    {
      kind: "flow",
      heading: "Burns: first aid and the first hour",
      caption: "Twenty minutes of cool running water is the single most valuable thing a family clinic does.",
      steps: [
        {
          label: "Stop the burning",
          detail: "Extinguish flames, isolate the electrical supply, brush off dry chemical powder, remove hot clothing",
        },
        {
          label: "Cool the burn for 20 minutes",
          detail:
            "Cool running tap water, still useful up to 3 hours after injury. Never ice, and never toothpaste, turmeric, ink, oil, ghee or mud",
        },
        {
          label: "Cool the burn but warm the patient",
          detail:
            "Cover the rest with blankets; stop cooling if the patient shivers or the burn exceeds 20%. Hypothermia worsens coagulopathy and mortality",
          tone: "warn",
        },
        {
          label: "Airway and 100% oxygen from any fire",
          detail:
            "Soot, hoarseness, singed nasal hair - intubate early with an uncut tube. The oximeter cannot see carbon monoxide, so a normal reading means nothing",
          tone: "warn",
        },
        {
          label: "Analgesia by the intravenous route",
          detail:
            "Morphine 0.1 mg/kg IV titrated in 2 mg increments with an antiemetic; 0.05-0.1 mg/kg in a child. Never intramuscular in burn shock",
        },
        {
          label: "Estimate the area and the depth",
          detail:
            "Rule of nines on a front and back diagram, counting only partial and full thickness; the patient's palm with fingers is about 1%",
        },
        {
          label: "Start fluid above the threshold",
          detail:
            "Above 15% TBSA in an adult and above 10% in a child, through two large cannulae placed through burnt skin if necessary",
        },
        {
          label: "Cover, protect, refer",
          detail:
            "Cling film in longitudinal strips or a clean dry sheet, tetanus prophylaxis; refer above 10% adult, 5% child, face, hands, feet, perineum, circumferential, electrical and chemical",
          tone: "good",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Parkland, done correctly",
      caption: "The formula gives the first hour's rate; the urine output gives every hour after that.",
      steps: [
        {
          label: "4 mL x weight in kg x %TBSA",
          detail: "Ringer's lactate for the first 24 hours; count only partial and full thickness, never simple erythema",
        },
        {
          label: "Half of it within 8 hours of the burn",
          detail:
            "The 8 hours run from the time of the burn, not from arrival. If 2 hours are lost, the same half must go in over 6 hours",
          tone: "warn",
        },
        {
          label: "The other half over the next 16 hours",
          detail: "60 kg with 40% burn: 9600 mL in 24 h, 4800 mL in the first 8 h at 600 mL/h, then 300 mL/h",
        },
        {
          label: "Add maintenance in a child",
          detail:
            "The 4-2-1 rule with a dextrose-containing fluid, on top of the Parkland volume, because glycogen stores are small; monitor glucose",
        },
        {
          label: "Catheterise and titrate hourly",
          detail:
            "0.5 mL/kg/h in an adult (30-50 mL/h), 1 mL/kg/h in a child under 30 kg, 1-2 mL/kg/h if there is myoglobinuria",
          tone: "good",
        },
        {
          label: "Adjust by a third, not by boluses",
          detail: "Reassess every hour; the formula is only a starting estimate and the urine output is the guide",
        },
        {
          label: "No colloid in the first 8-12 hours",
          detail:
            "Capillary leak is maximal. Current American Burn Association practice starts adults at 2 mL/kg/% and titrates up, to avoid fluid creep",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Rule of nines: adult against child",
      caption: "Roughly 1% moves from head to legs for each year of age until about 10 years.",
      columns: ["Body part", "Adult", "Infant or young child", "Note"],
      rows: [
        ["Head and neck", "9%", "18%", "About 1% moves from head to legs per year of age"],
        ["Each upper limb", "9%", "9%", "Unchanged with age"],
        ["Each lower limb", "18%", "14%", "Reaches 18% by about 10 years"],
        ["Anterior trunk", "18%", "18%", "Chest and abdomen"],
        ["Posterior trunk", "18%", "18%", "Back and buttocks"],
        ["Perineum", "1%", "1%", "Genitalia and perineum"],
        ["Patient's palm with fingers", "About 1%", "About 1%", "Use for scattered patches only, and use the patient's palm"],
      ],
    },
    {
      kind: "ladder",
      heading: "Burn depth at the bedside",
      caption: "Depth is dynamic: a burn deepens over 48 hours if under-resuscitated, cold or infected.",
      steps: [
        {
          label: "Superficial epidermal",
          detail: "Red, dry, no blisters, painful, brisk blanching. Heals in 5-7 days without scar and is not counted in the TBSA",
        },
        {
          label: "Superficial partial thickness",
          detail: "Blisters, pink, moist, weeping, very painful, brisk blanching. Heals in 10-14 days with minimal scarring",
        },
        {
          label: "Deep partial thickness",
          detail: "Blotchy red or fixed staining, drier, reduced sensation, sluggish or absent blanching. Over 3 weeks; usually grafted",
        },
        {
          label: "Full thickness",
          detail:
            "White, waxy, brown or charred and leathery, insensate, no blanching. Will not heal; needs excision and graft, and escharotomy if circumferential",
          tone: "warn",
        },
      ],
    },
  ],

  "emergency-trauma-primary-survey": [
    {
      kind: "flow",
      heading: "The primary survey: <C>ABCDE",
      caption: "Nothing moves on until the problem found has been treated.",
      steps: [
        {
          label: "C - catastrophic external haemorrhage",
          detail:
            "Direct pressure with a gloved hand and pad; a windlass tourniquet proximally if that fails, with the time written on the patient",
        },
        {
          label: "A - airway with cervical spine protection",
          detail:
            "Jaw thrust or chin lift, never a head tilt. Definitive airway for apnoea, GCS 8 or less, airway burn or expanding neck haematoma",
        },
        {
          label: "B - breathing and ventilation",
          detail:
            "Expose the chest, exclude the six lethal injuries, oxygen 15 L/min by non-rebreathing mask to every major trauma patient",
        },
        {
          label: "C - circulation and haemorrhage control",
          detail:
            "Two 14-16 G cannulae, cross-match, 1 L of warmed crystalloid; blood is the next fluid if the response is transient or absent",
        },
        {
          label: "Tranexamic acid within 3 hours of injury",
          detail:
            "1 g IV over 10 minutes, then 1 g over 8 hours (child 15 mg/kg then 2 mg/kg/h). After 3 hours it increases mortality",
          tone: "warn",
        },
        {
          label: "D - disability",
          detail:
            "GCS, pupils, glucose. For herniation give mannitol 20% 0.25-1 g/kg over 15-20 min, or 3% saline 3-5 mL/kg, and transfer",
        },
        {
          label: "E - exposure and environment",
          detail:
            "Log roll, warm the patient, splint fractures, cover wounds, tetanus, and antibiotics within one hour for an open fracture",
        },
        {
          label: "Reassess from the beginning",
          detail:
            "After every intervention and every deterioration. Sudden decline in a bagged trauma patient is a tension pneumothorax until proved otherwise",
          tone: "decision",
        },
      ],
    },
    {
      kind: "compare",
      heading: "The six lethal chest injuries",
      caption: "All six are found at B, and all six are treated before C is mentioned.",
      columns: ["Injury", "Clinical clue", "Immediate treatment"],
      rows: [
        [
          "Airway obstruction",
          "Stridor, gurgling, no air movement, agitation",
          "Suction, jaw thrust, airway adjunct, definitive airway",
        ],
        [
          "Tension pneumothorax",
          "Distress, absent air entry, hyper-resonance, distended neck veins, deviated trachea, shock",
          "Needle decompression, 5th intercostal space anterior axillary line, 14G, then a chest drain",
        ],
        [
          "Open pneumothorax",
          "Sucking chest wound larger than two-thirds of the tracheal diameter",
          "Three-sided occlusive dressing, then a chest drain sited away from the wound",
        ],
        [
          "Massive haemothorax",
          "Shock with dullness and absent air entry on one side",
          "Chest drain, blood; thoracotomy if over 1500 mL at once or over 200 mL/h for 2-4 h",
        ],
        [
          "Flail chest with contusion",
          "Paradoxical segment movement, severe pain, hypoxia",
          "Oxygen, analgesia including regional block, careful fluids, ventilation if failing",
        ],
        [
          "Cardiac tamponade",
          "Penetrating injury, shock, muffled sounds, distended neck veins, pulsus paradoxus",
          "Pericardiocentesis or resuscitative thoracotomy; fluid as a holding measure",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Permissive hypotension, or not",
      caption: "Where both are present the brain wins and the pressure is supported.",
      columns: ["Target", "Torso haemorrhage, no head injury", "Significant head injury"],
      rows: [
        [
          "Systolic blood pressure",
          "80-90 mmHg with a palpable radial pulse until surgical control",
          "Above 110 mmHg - hypotension roughly doubles mortality",
        ],
        [
          "Fluid",
          "Blood products in a 1:1:1 ratio; avoid large-volume crystalloid, which dilutes clotting factors",
          "Support perfusion; withholding fluid to reduce oedema causes the hypotension that does the damage",
        ],
        ["Oxygen", "SpO2 above 94%", "SpO2 above 94% - hypoxia also roughly doubles mortality"],
        ["Carbon dioxide", "Normocapnia", "Normocapnia; routine hyperventilation causes vasoconstriction and ischaemia"],
        [
          "Position and airway",
          "Flat, warmed, splinted, transferred for surgical control",
          "Head up 30 degrees, definitive airway if GCS is 8 or less",
        ],
        ["Steroids", "Not indicated", "Increase mortality - the CRASH trial. Do not give"],
      ],
    },
    {
      kind: "flow",
      heading: "The trauma clock",
      caption: "What must have happened by when, from the moment the patient arrives.",
      steps: [
        {
          label: "0-2 minutes",
          detail: "Control catastrophic bleeding, assess and open the airway with cervical spine protection, oxygen 15 L/min",
        },
        {
          label: "2-5 minutes",
          detail: "Expose the chest, exclude and treat the six lethal chest injuries, attach the monitor",
        },
        {
          label: "5-10 minutes",
          detail:
            "Two wide cannulae, bloods and cross-match, pelvic binder and splints, 1 L of warmed crystalloid, tranexamic acid 1 g",
        },
        {
          label: "10-15 minutes",
          detail: "GCS, pupils, glucose, log roll, warm the patient, catheter and gastric tube if indicated",
        },
        {
          label: "By 20 minutes",
          detail: "Telephone the receiving unit, acceptance confirmed, ambulance called, written record started",
        },
        {
          label: "By 30 minutes",
          detail: "Patient packaged, escorted and on the road with an ATMIST handover written out",
          tone: "good",
        },
      ],
    },
  ],

  "emergency-altered-sensorium": [
    {
      kind: "flow",
      heading: "The unconscious patient: the first five minutes",
      caption: "Hypoxia, hypotension, hypoglycaemia and hyperthermia are all correctable in the clinic itself.",
      steps: [
        {
          label: "Airway, breathing, circulation",
          detail:
            "Oxygen to SpO2 94-98% (88-92% in known chronic hypercapnic lung disease); bag and mask if the respiratory rate is below 8",
        },
        {
          label: "Capillary glucose in every patient",
          detail: "Below 70 mg/dL, or any unconscious diabetic whatever the reading, is treated as hypoglycaemia",
          tone: "decision",
        },
        {
          label: "Thiamine before or with the glucose",
          detail:
            "100 mg IV or IM in the malnourished, alcoholic, vomiting pregnancy or dialysis patient - the glucose load can precipitate Wernicke",
          tone: "warn",
        },
        {
          label: "Dextrose",
          detail:
            "Adult 25% dextrose 100 mL IV over 1-3 min through a large vein; child 10% dextrose 5 mL/kg; neonate 10% dextrose 2 mL/kg",
        },
        {
          label: "Naloxone if pinpoint and slow-breathing",
          detail:
            "0.4 mg IV every 2-3 minutes titrated to respiratory rate, not to wakefulness, up to about 10 mg; child 0.01 mg/kg",
        },
        {
          label: "Examine, then run the cause list",
          detail:
            "Pupils, tone, posture, neck stiffness, temperature, rash; then AEIOU TIPS. Ask the relatives about drugs, illnesses and the last 24 hours",
        },
        {
          label: "Cause-specific treatment before transfer",
          detail:
            "Ceftriaxone 2 g IV with dexamethasone 0.15 mg/kg for meningitis; artesunate 2.4 mg/kg for cerebral malaria; atropine for organophosphate",
        },
        {
          label: "Secure the airway, transfer, write it down",
          detail:
            "Naloxone wears off in 30-90 minutes, so a patient who wakes is still observed or transferred; the record is medico-legal",
          tone: "good",
        },
      ],
    },
    {
      kind: "branch",
      heading: "AEIOU TIPS",
      caption: "Reciting a structured list earns more marks than naming ten diseases at random.",
      root: "Altered sensorium: the structured cause list",
      arms: [
        {
          label: "AEIOU",
          steps: [
            "Alcohol and acidosis",
            "Epilepsy, endocrine and electrolytes",
            "Insulin - hypoglycaemia and hyperglycaemia",
            "Opiates and oxygen lack",
            "Uraemia",
          ],
        },
        {
          label: "TIPS",
          steps: [
            "Trauma and temperature",
            "Infection",
            "Psychiatric and porphyria",
            "Stroke, shock, space-occupying lesion and snake bite",
          ],
        },
        {
          label: "Commonest in Indian practice",
          steps: [
            "Adult: hypoglycaemia from sulfonylureas or insulin, alcohol, sepsis with delirium, stroke, uraemic and hepatic encephalopathy, self-poisoning",
            "Child: hypoglycaemia, febrile status, bacterial meningitis, cerebral malaria, dengue shock, first-presentation ketoacidosis, kerosene ingestion",
            "Elderly: delirium from a cause outside the brain - infection, retention, constipation, dehydration, or a newly added anticholinergic",
            "Never accept alcohol, psychiatric illness or a postictal state at first contact",
          ],
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Bedside finding to the immediate drug",
      caption: "One sign, one cause, one dose - the table worth memorising verbatim.",
      columns: ["Bedside finding", "Cause it signals", "Immediate drug and dose"],
      rows: [
        [
          "Capillary glucose below 70 mg/dL",
          "Hypoglycaemia - sulfonylurea, insulin, alcohol, sepsis, malaria",
          "Adult 25% dextrose 100 mL IV over 1-3 min; child 10% dextrose 5 mL/kg; neonate 2 mL/kg",
        ],
        [
          "Pinpoint pupils, respiratory rate under 12",
          "Opioid toxicity",
          "Naloxone 0.4 mg IV or IM every 2-3 min to about 10 mg; child 0.01 mg/kg",
        ],
        [
          "Pinpoint pupils, sweating, fasciculations",
          "Organophosphate or carbamate poisoning",
          "Atropine 2-5 mg IV (child 0.05 mg/kg), doubled every 5 min until the chest is clear and the skin dry, then pralidoxime",
        ],
        [
          "Seizure continuing for 5 minutes",
          "Convulsive status epilepticus",
          "Lorazepam 4 mg IV over 2 min, repeat once at 10 min; no vein, midazolam 10 mg IM. Child lorazepam 0.1 mg/kg, max 4 mg",
        ],
        [
          "Fever with neck stiffness or purpura",
          "Bacterial meningitis or meningococcaemia",
          "Ceftriaxone 2 g IV (child 50 mg/kg per dose) plus dexamethasone 0.15 mg/kg, before transfer and before imaging",
        ],
        [
          "Malnourished or alcoholic needing glucose",
          "Risk of precipitating Wernicke encephalopathy",
          "Thiamine 100 mg IV or IM before or with the dextrose; 500 mg IV three times daily if Wernicke is suspected",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Convulsive status epilepticus",
      caption: "Status begins at 5 minutes, and no more than two doses of benzodiazepine are given.",
      steps: [
        {
          label: "It is status at 5 minutes",
          detail:
            "A seizure of 5 minutes or more, or repeated seizures without recovery. Position, oxygen, and check capillary glucose in every fitting patient",
        },
        {
          label: "First benzodiazepine",
          detail: "Lorazepam 4 mg IV over 2 minutes; with no vein, midazolam 10 mg IM (5 mg if 13-40 kg) or diazepam 10 mg rectally",
        },
        {
          label: "Repeat once after 10 minutes",
          detail:
            "Maximum two doses. A third adds respiratory depression without improving seizure control. Child: lorazepam 0.1 mg/kg, max 4 mg per dose",
          tone: "warn",
        },
        {
          label: "Second-line agent while arranging transfer",
          detail:
            "Levetiracetam 60 mg/kg over 10 min (max 4500 mg), or sodium valproate 40 mg/kg (max 3000 mg), or fosphenytoin 20 mg PE/kg",
        },
        {
          label: "Plain phenytoin only with care",
          detail:
            "20 mg/kg diluted in normal saline only, never dextrose, at no more than 50 mg/min in an adult with cardiac monitoring. Never intramuscularly",
          tone: "warn",
        },
        {
          label: "Pregnant or recently delivered: eclampsia",
          detail:
            "Magnesium sulphate 4 g of 20% IV over 5 min plus 10 g of 50% IM, then 5 g IM 4-hourly; antidote calcium gluconate 10% 10 mL IV",
        },
      ],
    },
  ],

  "emergency-tray-and-readiness": [
    {
      kind: "branch",
      heading: "The irreducible emergency tray",
      caption: "One tray, one owner, one checklist, in one place everyone knows.",
      root: "What the clinic must be able to reach in 30 seconds",
      arms: [
        {
          label: "Drugs",
          steps: [
            "Adrenaline 1:1000 ampoules and 1:10,000 for arrest - the single most important drug",
            "Atropine 0.6 mg/mL, stocked generously where pesticide poisoning is common",
            "Dextrose 25% and 10%, thiamine 100 mg, glucagon 1 mg",
            "Lorazepam or midazolam for seizures",
            "Aspirin 300 mg, clopidogrel 300 mg, GTN, furosemide, salbutamol with ipratropium, hydrocortisone",
            "Magnesium sulphate with calcium gluconate, oxytocin 10 IU, tranexamic acid, naloxone, chlorpheniramine",
          ],
        },
        {
          label: "Airway and breathing",
          steps: [
            "Oxygen cylinder with regulator, flowmeter and key attached, plus a spare",
            "Non-rebreathing mask with reservoir - about 85% oxygen at 15 L/min",
            "Self-inflating bags 1500-1600 mL, 500 mL and 240 mL, each with its reservoir",
            "Masks 0 to 5 and oropharyngeal airways 000 to 4",
            "Suction that works without mains power",
          ],
        },
        {
          label: "Circulation and monitoring",
          steps: [
            "Cannulae 14G to 24G, giving sets, pressure infusion bag, normal saline and Ringer lactate",
            "Intraosseous needle where staff are trained",
            "Tourniquet for catastrophic limb haemorrhage",
            "Glucometer with in-date strips, pulse oximeter, thermometer",
            "Cuffs in paediatric, adult and large-adult sizes; ECG machine and an AED where affordable",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Atropine: bradycardia against poisoning",
      caption: "Applying the bradycardia ceiling to a poisoned farmer is fatal undertreatment.",
      columns: ["Item", "Symptomatic bradycardia", "Organophosphate poisoning"],
      rows: [
        ["Adult dose", "0.5-0.6 mg IV bolus", "2-5 mg IV"],
        ["Repeat", "Every 3-5 minutes", "Dose doubled every 5 minutes, then an infusion"],
        ["Ceiling", "Maximum total 3 mg", "There is no maximum dose"],
        [
          "End-point",
          "Heart rate and perfusion restored",
          "Clear chest, dry axillae, heart rate above 80, systolic above 80 mmHg",
        ],
        [
          "Child",
          "0.02 mg/kg IV, minimum 0.1 mg, maximum single dose 0.5 mg",
          "0.05 mg/kg IV, doubled on the same principle",
        ],
        ["What to stock", "A few ampoules", "At least 25 ampoules where pesticide poisoning is common"],
      ],
    },
    {
      kind: "cycle",
      heading: "The readiness cycle",
      caption: "Delay to the first drug is a systems problem, and the audit closes only on the second measurement.",
      steps: [
        {
          label: "Weekly tray check",
          detail:
            "Adrenaline first, every time: expiry, concentration, cylinder pressure. First-expiry-first-out, and replace anything within 3 months of expiry",
        },
        {
          label: "Unannounced mock drill every 3 months",
          detail:
            "Use a real scenario - anaphylaxis after an injection, a collapsed adult in the waiting room, a fitting child, postpartum haemorrhage",
        },
        {
          label: "Time three things",
          detail: "Seconds to first compression, seconds to adrenaline drawn up, minutes to the ambulance call being made",
        },
        {
          label: "Change the system, not the people",
          detail:
            "Fixed roles assigned in advance, one sealed tray in one known place, drugs grouped by emergency, laminated dose chart in the lid",
        },
        {
          label: "Train and recertify everyone",
          detail:
            "Every staff member, clinical and non-clinical, recognises collapse, shouts for help, starts compressions and brings the tray; BLS renewed every 2 years",
        },
        {
          label: "Re-time the drill",
          detail: "Record the times, compare them with the last round, and feed the result back into the next weekly check",
          tone: "good",
        },
      ],
    },
    {
      kind: "flow",
      heading: "The immunisation session anaphylaxis kit",
      caption: "Required at the table by the Government of India AEFI operational guidelines.",
      steps: [
        {
          label: "Kit at the table, not in another room",
          detail: "An immunisation session cannot proceed without in-date adrenaline; its absence is by itself indefensible",
          tone: "warn",
        },
        {
          label: "Contents",
          detail:
            "At least five adrenaline 1:1000 ampoules in their carton and in date, 1 mL and 2 mL syringes with 23-25G needles, self-inflating bag with paediatric and infant masks, oral airways, oxygen where available, a written dose card by age",
        },
        {
          label: "The vaccinator states the dose unprompted",
          detail:
            "1:1000 intramuscularly into the anterolateral thigh, 0.01 mg/kg: 0.15 mg under 6 years, 0.3 mg for 6-12 years, 0.5 mg above 12 years",
        },
        {
          label: "Observe every beneficiary for 30 minutes",
          detail: "Before allowing anyone to leave the session site",
        },
        {
          label: "If it happens: adrenaline, repeat, transfer",
          detail: "Repeat the same dose every 5 minutes; two or more doses define a refractory case needing urgent transfer",
        },
        {
          label: "Report as a serious AEFI within 24 hours",
          detail:
            "To the district immunisation officer; retain the vial and the syringe; counsel the family without discouraging future immunisation",
          tone: "good",
        },
      ],
    },
  ],

  "emergency-ards": [
    {
      kind: "flow",
      heading: "Applying the Berlin definition",
      caption: "Four components, four ticks - say all four in the first two lines of the answer.",
      steps: [
        {
          label: "Timing: within 1 week of a known insult",
          detail: "New or worsening respiratory symptoms following a recognised precipitant",
        },
        {
          label: "Imaging: bilateral opacities",
          detail:
            "Not fully explained by effusion, collapse or nodules. The 2023 global definition accepts lung ultrasound by a trained operator",
        },
        {
          label: "Origin of oedema: not cardiac",
          detail:
            "Not fully explained by cardiac failure or fluid overload; echocardiography where doubt exists. Berlin abolished the wedge pressure of 18 mmHg",
          tone: "decision",
        },
        {
          label: "Oxygenation on PEEP or CPAP of 5 or more",
          detail:
            "PaO2 in mmHg divided by FiO2 as a fraction. A PaO2 of 60 on 60% oxygen is 60/0.6 = 100, not 1",
          tone: "warn",
        },
        {
          label: "Grade the severity",
          detail: "Mild above 200 up to 300; moderate above 100 up to 200; severe 100 or less. Berlin abolished the term acute lung injury",
        },
        {
          label: "No blood gas machine: use SpO2/FiO2",
          detail:
            "315 or less, valid only when SpO2 is 97% or below; the severity equivalents are 315, 235 and 148 (2023 New Global Definition)",
          tone: "good",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Causes by route of injury",
      caption: "The grouping earns the marks; a flat unclassified list does not, even with the same items.",
      root: "Insult to the alveolar-capillary membrane",
      arms: [
        {
          label: "Direct - reaches the alveolar epithelium",
          steps: [
            "Pneumonia - bacterial, viral including influenza A H1N1 and SARS-CoV-2, Pneumocystis, miliary tuberculosis; the commonest direct cause",
            "Aspiration of gastric contents (Mendelson syndrome) and near-drowning",
            "Inhalation of smoke, chlorine, ammonia, oxides of nitrogen or phosgene",
            "Pulmonary contusion; fat embolism after long-bone fracture",
            "Less recruitable, so it responds less well to high PEEP; the target is the antibiotic or the drainage",
          ],
        },
        {
          label: "Indirect - reaches the capillary endothelium",
          steps: [
            "Sepsis of any source - the single commonest cause overall, about 40% of cases",
            "Severe non-thoracic trauma with shock, massive transfusion, TRALI within 6 hours of a transfusion",
            "Acute pancreatitis, extensive burns, cardiopulmonary bypass, DIC, tumour lysis",
            "Drug overdose - opioids, salicylates, tricyclics, paraquat",
            "Eclampsia and pre-eclampsia, amniotic fluid embolism",
          ],
        },
        {
          label: "Tropical causes to name in India",
          steps: [
            "Severe falciparum malaria",
            "Dengue with capillary leak",
            "Leptospirosis and scrub typhus",
            "Organophosphate and paraquat poisoning, snake envenomation",
            "Disseminated tuberculosis",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "ARDS against cardiogenic pulmonary oedema",
      caption: "Separated by history, examination, imaging, a natriuretic peptide and an echo - not by any one alone.",
      columns: ["Feature", "ARDS", "Cardiogenic pulmonary oedema"],
      rows: [
        [
          "History",
          "A recognised precipitant - sepsis, pneumonia, aspiration, pancreatitis, trauma; often no cardiac history",
          "Ischaemic heart disease, hypertension, valve disease, missed dialysis or missed diuretic",
        ],
        [
          "Onset",
          "Over hours to a few days, with the illness that caused it",
          "Often minutes to hours, with preceding orthopnoea and paroxysmal nocturnal dyspnoea",
        ],
        [
          "Neck veins and oedema",
          "Normal or low JVP unless also shocked and fluid-loaded",
          "Raised JVP, dependent oedema, tender hepatomegaly",
        ],
        [
          "Peripheries and sputum",
          "Warm and vasodilated if septic; sputum purulent or absent",
          "Cold, clammy, shut down; pink frothy sputum",
        ],
        [
          "Chest radiograph",
          "Peripheral, patchy, often asymmetrical opacities; air bronchograms; normal heart size; no Kerley B lines",
          "Perihilar bat's-wing shadowing, cardiomegaly, upper-lobe diversion, Kerley B lines, effusions",
        ],
        [
          "Lung ultrasound",
          "Irregular thickened fragmented pleural line, spared areas beside B-lines, subpleural consolidation",
          "Homogeneous symmetrical gravity-dependent B-lines, smooth pleural line, effusions, no spared areas",
        ],
        [
          "BNP",
          "Usually low; below 100 pg/mL argues strongly against heart failure",
          "Usually high; above 500 pg/mL supports it, though sepsis and renal failure blunt it",
        ],
        [
          "Response to oxygen and diuretic",
          "Poor - a true shunt; the FiO2 climbs while the SpO2 does not, and diuretics give little gain",
          "Good, and better still with CPAP; rapid relief, diuresis and clearing of the film",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Management of ARDS, in order of escalation",
      caption: "Only lung-protective ventilation and proning have a proven mortality benefit.",
      steps: [
        {
          label: "Treat the cause and stabilise",
          detail:
            "Oxygen 15 L/min targeting SpO2 88-95%; antibiotics within the first hour if septic; no reflex fluid bolus in a hypoxic but normotensive patient",
        },
        {
          label: "Lung-protective ventilation",
          detail:
            "Tidal volume 6 mL/kg predicted body weight (range 4-8), plateau at or below 30 cmH2O, driving pressure below 15 cmH2O",
          tone: "good",
        },
        {
          label: "Accept permissive hypercapnia",
          detail:
            "Rate up to about 35 per minute and a pH down to about 7.20 rather than a larger tidal volume; PaO2 55-80 mmHg is the target",
        },
        {
          label: "Conservative fluids once shock resolves",
          detail: "Neutral to negative balance guided by perfusion; FACTT gave about 2.5 more ventilator-free days without a mortality change",
        },
        {
          label: "Prone for at least 16 hours a day",
          detail:
            "When PaO2/FiO2 is below 150 on FiO2 0.6 with PEEP 5. PROSEVA 28-day mortality 16.0% against 32.8%. It needs staff, not equipment",
        },
        {
          label: "Neuromuscular blockade, selectively",
          detail:
            "Cisatracurium for 48 hours - not routine after ROSE; reserve it for dyssynchrony, unacceptable plateau pressure, or to enable proning",
        },
        {
          label: "Inhaled vasodilators as a bridge only",
          detail:
            "Nitric oxide or nebulised prostacyclin improve oxygenation transiently, have never improved survival, and risk renal impairment",
          tone: "warn",
        },
        {
          label: "Veno-venous ECMO, referred early",
          detail:
            "EOLIA 60-day mortality 35% against 46%, p = 0.09 with 28% crossover; reasonable in very severe but reversible disease at an experienced centre",
        },
      ],
    },
  ],
};

export default diagrams;
