import type { ClinicalCase, Subject, Topic } from "../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "emergency-cardiac-arrest",
  title: "Cardiac arrest: BLS and ACLS essentials for the clinic",
  oneLiner:
    "Cardiac arrest is the sudden cessation of effective cardiac mechanical activity, recognised in an unresponsive person who is not breathing normally, and treated by immediate high-quality chest compressions, early defibrillation of shockable rhythms, adrenaline 1 mg IV every 3-5 minutes, and correction of the 4 Hs and 4 Ts.",
  frequency: "core",
  keywords: [
    "CPR",
    "cardiopulmonary resuscitation",
    "BLS",
    "ACLS",
    "basic life support",
    "advanced cardiac life support",
    "chain of survival",
    "defibrillation",
    "AED",
    "ventricular fibrillation",
    "pulseless electrical activity",
    "asystole",
    "adrenaline",
    "amiodarone",
    "return of spontaneous circulation",
    "ROSC",
    "agonal gasping",
    "4 Hs and 4 Ts",
  ],
  sections: [
    {
      heading: "Recognition and the first sixty seconds",
      points: [
        "**Diagnose arrest on two findings only: unresponsiveness and absent or abnormal breathing.** Do not delay compressions to feel for a pulse; even trained staff are wrong about the carotid pulse in about 4 out of 10 attempts and take far longer than the 10 seconds allowed.",
        "**Agonal gasping is not breathing.** Slow, noisy, irregular gasps occur in up to 40% of arrests in the first minutes and are the single commonest reason a bystander or a nurse fails to start CPR; treat gasping as arrest.",
        "Shout for help, send a specific named person for the defibrillator or AED and the emergency tray, and ask a second named person to call the ambulance service (108 in most Indian states) - unnamed instructions to a crowd produce no action.",
        "Put the patient supine on a firm flat surface. A patient on an examination couch with a soft mattress needs a backboard or the floor; compressions on a soft surface lose depth and are ineffective.",
        "**Start compressions within 10 seconds of recognition.** Every minute of delay to CPR reduces survival by about 10%, and every minute of delay to defibrillation in ventricular fibrillation reduces survival by a further 7-10%.",
        "The chain of survival is early recognition and call for help, early CPR, early defibrillation, early advanced care, and post-resuscitation care; a family clinic owns the first three links and must be able to deliver them without waiting for an ambulance.",
      ],
    },
    {
      heading: "High-quality chest compressions and ventilation",
      points: [
        "**Adult compressions: lower half of the sternum, depth 5-6 cm, rate 100-120 per minute, full chest recoil between compressions, interruptions under 10 seconds, ratio 30:2 until the airway is secured.**",
        "Change the person compressing every 2 minutes (five cycles of 30:2), because measured compression depth falls after 60-90 seconds even when the rescuer does not feel tired.",
        "**Once a supraglottic airway or endotracheal tube is in place, give continuous compressions at 100-120/min with one breath every 6 seconds (10 breaths per minute)** and stop pausing for ventilation.",
        "Hyperventilation kills: it raises intrathoracic pressure, reduces venous return and coronary perfusion pressure, and is the commonest error made by an anxious team with a bag-valve-mask. Give just enough volume to make the chest rise visibly, over about one second.",
        "Compression-only CPR is acceptable for untrained lay rescuers and for the first minutes of an adult arrest, and is what should be taught to family members and clinic staff who will not do mouth-to-mouth on a stranger.",
        "Where available, waveform capnography guides quality: **end-tidal CO2 below 10 mmHg means compressions are inadequate, and an abrupt rise above 35-40 mmHg is the earliest sign of return of spontaneous circulation** and lets you avoid an unnecessary rhythm check.",
      ],
    },
    {
      heading: "Defibrillation and the shockable arm",
      points: [
        "Shockable rhythms are **ventricular fibrillation and pulseless ventricular tachycardia**; non-shockable rhythms are asystole and pulseless electrical activity. Shocking asystole has no benefit and wastes compression time.",
        "**Biphasic defibrillator: 150-200 J for the first shock (or the manufacturer's stated setting), with subsequent shocks the same or higher. Monophasic: 360 J for every shock. Paediatric: 4 J/kg for the first and all subsequent shocks.**",
        "Deliver the shock and immediately resume compressions for 2 minutes without checking the pulse or the rhythm - the myocardium is stunned and a perfusing rhythm rarely produces a palpable pulse in the first seconds.",
        "Pad position is sternal-apical: right infraclavicular and left mid-axillary at the level of the fifth intercostal space. Shave heavy chest hair, wipe the chest dry, avoid placing a pad over a pacemaker box or a transdermal patch, and use paediatric pads or an attenuator for children under 8 years or 25 kg.",
        "**An automated external defibrillator is safe in untrained hands and should be in every clinic that can afford one**; it will not shock a non-shockable rhythm and its voice prompts substitute for rhythm interpretation.",
        "Precordial thump has almost no place - it is permitted only for a monitored, witnessed onset of pulseless VT when a defibrillator is not instantly to hand, and it must never delay compressions.",
      ],
    },
    {
      heading: "Drugs in cardiac arrest",
      points: [
        "**Adrenaline (epinephrine), adult: 1 mg IV or IO, which is 10 mL of 1:10,000 or 1 mL of 1:1000 diluted to 10 mL, repeated every 3-5 minutes (that is, every second cycle) for as long as the arrest continues.**",
        "**Timing differs by rhythm: in a non-shockable rhythm give adrenaline as soon as intravenous access is obtained; in a shockable rhythm give it after the third shock, and then alternate with 2-minute cycles.**",
        "**Amiodarone 300 mg IV bolus after the third shock in refractory VF or pulseless VT, with a further 150 mg after the fifth shock.** Lidocaine 100 mg (1-1.5 mg/kg) IV is the alternative where amiodarone is unavailable, with a repeat of 50 mg.",
        "**Paediatric adrenaline is 10 microgram/kg (0.1 mL/kg of 1:10,000) IV or IO to a maximum of 1 mg, every 3-5 minutes; paediatric amiodarone is 5 mg/kg (maximum 300 mg) after the third shock, repeatable once.**",
        "Situation-specific drugs: **calcium gluconate 10% 10-30 mL IV** for hyperkalaemia, hypocalcaemia or calcium-channel blocker overdose; **sodium bicarbonate 1 mmol/kg** only for hyperkalaemia or tricyclic overdose; **magnesium sulphate 2 g IV** for torsades de pointes; thrombolysis if pulmonary embolism is the presumed cause, continuing CPR for 60-90 minutes afterwards.",
        "**Atropine has been removed from the asystole and PEA algorithms** and routine sodium bicarbonate is not given for the acidosis of arrest, because it worsens intracellular acidosis and shifts the oxygen dissociation curve.",
        "Intraosseous access at the proximal tibia is the correct route when a peripheral line fails after two attempts or 90 seconds; the endotracheal route is obsolete and unreliable.",
      ],
    },
    {
      heading: "Reversible causes: the 4 Hs and 4 Ts",
      points: [
        "**Hypoxia** - the commonest cause of arrest in children and in drowning, asthma and airway obstruction; fix it with a patent airway, high-flow oxygen and adequate ventilation, not with drugs.",
        "**Hypovolaemia** - trauma, gastrointestinal or obstetric haemorrhage, ruptured ectopic pregnancy, severe dehydration; give rapid crystalloid and blood, and stop the bleeding.",
        "**Hyperkalaemia, hypokalaemia, hypoglycaemia and other metabolic causes** - suspect in chronic kidney disease, in crush injury and in a diabetic on insulin; give calcium, insulin-dextrose and bicarbonate empirically if hyperkalaemia is likely, and check capillary glucose in every arrest.",
        "**Hypothermia** - drowning, exposure, the elderly found on the floor; continue resuscitation while rewarming, because neurological recovery is possible after very prolonged arrest, and no one is dead until warm and dead.",
        "**Tension pneumothorax** - needle decompression in the fifth intercostal space at the anterior axillary line (or the traditional second space mid-clavicular line) followed by a chest drain; **Tamponade** - pericardiocentesis or thoracotomy; **Toxins** - organophosphate, aluminium phosphide, oleander, tricyclics, opioids; **Thrombosis** - coronary or pulmonary.",
        "In Indian practice the reversible causes that actually turn up in a clinic arrest are hypoxia, hypovolaemia from haemorrhage, hyperkalaemia in dialysis patients, poisoning, and acute myocardial infarction - rehearse these five.",
      ],
    },
    {
      heading: "Post-resuscitation care and when to stop",
      points: [
        "After return of spontaneous circulation, reassess airway, breathing and circulation, get a **12-lead ECG within 10 minutes** looking for ST elevation, and arrange transfer to a centre with catheterisation and intensive care.",
        "**Target SpO2 94-98% - do not leave the patient on 100% oxygen** - and ventilate to normocapnia (PaCO2 35-45 mmHg); both hyperoxia and hypocapnia worsen neurological outcome.",
        "Maintain systolic BP above 100 mmHg and mean arterial pressure above 65 mmHg with fluids and noradrenaline, treat glucose above 180 mg/dL, treat seizures, and **actively prevent fever, keeping core temperature at or below 37.5 C for at least 72 hours**.",
        "Stopping is a team decision, taken after at least 20 minutes of advanced life support with persistent asystole, no reversible cause, and an end-tidal CO2 that remains below 10 mmHg despite good compressions.",
        "Continue longer than usual in hypothermia, in drowning, in poisoning, in pregnancy (where perimortem caesarean section within 5 minutes may save both), and in the young.",
        "Debrief the team, document the arrest with times (collapse, CPR start, first shock, drugs, ROSC), and speak to the family in a private room with a named person and plain words - the communication is examined as often as the algorithm.",
      ],
    },
  ],
  tables: [
    {
      heading: "BLS numbers: adult, child and infant",
      columns: ["Parameter", "Adult", "Child (1 year to puberty)", "Infant (under 1 year)"],
      rows: [
        ["Compression depth", "5-6 cm", "At least one-third of chest depth, about 5 cm", "At least one-third, about 4 cm"],
        ["Hand position", "Two hands, lower half of sternum", "One or two hands, lower half of sternum", "Two fingers, or two thumbs encircling"],
        ["Rate", "100-120/min", "100-120/min", "100-120/min"],
        ["Ratio, single rescuer", "30:2", "30:2", "30:2"],
        ["Ratio, two rescuers", "30:2", "15:2", "15:2"],
        ["Rescue breaths first?", "No, compressions first", "Yes, 5 initial breaths", "Yes, 5 initial breaths"],
        ["Defibrillation energy", "150-200 J biphasic", "4 J/kg", "4 J/kg"],
      ],
    },
    {
      heading: "Drugs in cardiac arrest",
      columns: ["Drug", "Adult dose and route", "Paediatric dose", "When to give"],
      rows: [
        ["Adrenaline", "1 mg IV/IO (10 mL of 1:10,000) every 3-5 min", "10 microgram/kg (0.1 mL/kg of 1:10,000), max 1 mg, every 3-5 min", "Immediately in asystole/PEA; after the 3rd shock in VF/pVT"],
        ["Amiodarone", "300 mg IV bolus, then 150 mg", "5 mg/kg (max 300 mg), repeat once", "After the 3rd and 5th shocks in refractory VF/pVT"],
        ["Lidocaine (alternative)", "100 mg (1-1.5 mg/kg) IV, then 50 mg", "1 mg/kg IV", "Only if amiodarone is unavailable"],
        ["Magnesium sulphate", "2 g (8 mmol) IV over 10-20 min", "25-50 mg/kg (max 2 g)", "Torsades de pointes, digoxin toxicity, hypomagnesaemia"],
        ["Calcium gluconate 10%", "10-30 mL IV", "0.5 mL/kg IV", "Hyperkalaemia, hypocalcaemia, calcium blocker overdose"],
        ["Sodium bicarbonate 8.4%", "50 mL (1 mmol/kg) IV", "1 mmol/kg diluted", "Hyperkalaemia and tricyclic overdose only, not routine"],
      ],
    },
    {
      heading: "4 Hs and 4 Ts with the bedside fix",
      columns: ["Cause", "Clue", "Immediate action"],
      rows: [
        ["Hypoxia", "Drowning, asthma, choking, child", "Open airway, high-flow oxygen, effective ventilation"],
        ["Hypovolaemia", "Trauma, melaena, ectopic pregnancy, post-partum bleed", "Two wide-bore lines, rapid crystalloid, blood, stop the bleeding"],
        ["Hyper/hypokalaemia, metabolic", "Dialysis patient, crush injury, insulin use", "Calcium gluconate, insulin-dextrose, bicarbonate; check glucose"],
        ["Hypothermia", "Exposure, drowning, elderly found on floor", "Prolonged CPR with active rewarming"],
        ["Tension pneumothorax", "Trauma, asthma, absent air entry, deviated trachea", "Needle decompression then chest drain"],
        ["Tamponade", "Penetrating chest injury, uraemia, malignancy", "Pericardiocentesis or thoracotomy"],
        ["Toxins", "Poison bottle, pinpoint pupils, garlic breath, bradycardia", "Specific antidote: atropine, naloxone, bicarbonate, digoxin Fab"],
        ["Thrombosis", "Chest pain before collapse, immobility, cancer", "Thrombolysis, and continue CPR 60-90 min afterwards"],
      ],
    },
  ],
  redFlags: [
    "Any collapsed patient with agonal gasping - this is cardiac arrest, not breathing; start compressions immediately rather than watching for another gasp.",
    "Chest pain with syncope, or syncope during exertion or while lying flat - impending arrhythmic arrest; monitor, get an ECG and refer the same hour.",
    "Bradycardia below 40/min with hypotension or altered sensorium - peri-arrest; give atropine 0.6 mg IV (up to 3 mg) and arrange pacing.",
    "A dialysis patient with peaked T waves, a broad QRS or a sine wave pattern - hyperkalaemic peri-arrest; give calcium gluconate before the ECG becomes an arrest.",
    "Broad-complex tachycardia above 150/min with hypotension, chest pain or heart failure - synchronised cardioversion now, not adenosine.",
    "Return of spontaneous circulation with ST elevation on the post-arrest ECG - this needs catheterisation, so transfer with a pre-alert rather than admitting locally.",
    "An arrest in a pregnant woman beyond 20 weeks - manually displace the uterus to the left and get obstetric help; perimortem caesarean section is indicated within 5 minutes if there is no ROSC.",
  ],
  pearls: [
    "Two findings make the diagnosis: unresponsive and not breathing normally. Feeling for a pulse wastes time and is unreliable even in trained hands.",
    "Push hard, push fast, let the chest recoil fully, and do not stop for more than 10 seconds - compression fraction is the variable most strongly linked to survival.",
    "Adrenaline in cardiac arrest is 1 mg of 1:10,000 intravenously; adrenaline in anaphylaxis is 0.5 mg of 1:1000 intramuscularly. Mixing these two up is the classic examination trap and a real-world killer.",
    "Shock first in VF and pulseless VT; drugs first in asystole and PEA. Adrenaline in a shockable rhythm waits until after the third shock.",
    "The commonest reversible cause in a paediatric arrest is hypoxia, so children get five rescue breaths first and a 15:2 ratio with two rescuers.",
    "A sudden rise in end-tidal CO2 above 35-40 mmHg during CPR means the patient has a pulse - look at the monitor, not at the patient's neck.",
    "No one is dead until they are warm and dead: continue in hypothermia, drowning and poisoning far beyond the usual 20 minutes.",
    "Every clinic should rehearse a mock arrest quarterly; the failures found are always the same - no backboard, a flat oxygen cylinder, an unchecked bag-valve-mask and adrenaline that expired last year.",
  ],
  theory: [
    {
      id: "emergency-cardiac-arrest-t1",
      paper: "III",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 55-year-old man collapses in the waiting area of your clinic. Describe your management from recognition to transfer, including the drugs and their doses.",
      openingLines: [
        "Cardiac arrest is the sudden cessation of effective cardiac mechanical activity, diagnosed clinically in a person who is unresponsive and not breathing normally; a pulse check must not delay treatment.",
        "Management follows the chain of survival - immediate recognition and a call for help, high-quality chest compressions, early defibrillation, advanced life support with correction of reversible causes, and structured post-resuscitation care.",
      ],
      answer: [
        {
          heading: "1. Recognition and calling for help",
          points: [
            "Ensure the scene is safe, check responsiveness by shaking and shouting, open the airway with a head tilt and chin lift, and look, listen and feel for normal breathing for no more than 10 seconds.",
            "Agonal gasping is not breathing and must be treated as arrest.",
            "Shout for help, send a named person for the defibrillator, oxygen and emergency tray, and send a second named person to activate the ambulance service on 108.",
            "Move the patient to a firm flat surface, preferably the floor, and expose the chest.",
          ],
        },
        {
          heading: "2. Basic life support",
          points: [
            "Begin chest compressions on the lower half of the sternum at a depth of 5-6 cm and a rate of 100-120 per minute, allowing full recoil, with a compression to ventilation ratio of 30:2.",
            "Ventilate with a bag-valve-mask and reservoir on high-flow oxygen, delivering just enough volume over one second to make the chest rise; avoid hyperventilation, which reduces venous return.",
            "Rotate the person compressing every 2 minutes and keep every interruption under 10 seconds.",
            "Once an advanced airway is placed, give continuous compressions with 10 breaths per minute.",
          ],
        },
        {
          heading: "3. Defibrillation and the rhythm-specific algorithm",
          points: [
            "Attach the defibrillator or AED as soon as it arrives and pause compressions for the rhythm analysis only.",
            "Shockable rhythm (VF or pulseless VT): give a single shock at 150-200 J biphasic (360 J monophasic) and resume compressions immediately for 2 minutes without a pulse check.",
            "Give adrenaline 1 mg IV after the third shock and repeat every 3-5 minutes; give amiodarone 300 mg IV after the third shock and 150 mg after the fifth.",
            "Non-shockable rhythm (asystole or PEA): give adrenaline 1 mg IV as soon as access is available, repeat every 3-5 minutes, and continue 2-minute cycles with rhythm checks between them.",
            "Obtain intravenous access, or intraosseous access at the proximal tibia if two peripheral attempts fail.",
          ],
        },
        {
          heading: "4. Reversible causes",
          points: [
            "Search actively for the 4 Hs - hypoxia, hypovolaemia, hyperkalaemia and other metabolic causes including hypoglycaemia, and hypothermia.",
            "Search for the 4 Ts - tension pneumothorax, tamponade, toxins and thrombosis (coronary or pulmonary).",
            "Check capillary glucose in every arrest, decompress a tension pneumothorax with a needle before imaging, and give calcium gluconate 10% 10-30 mL IV if hyperkalaemia is likely.",
            "History from bystanders and relatives about chest pain, poisoning, dialysis or trauma is obtained by a team member while resuscitation continues.",
          ],
        },
        {
          heading: "5. Post-resuscitation care and transfer",
          points: [
            "After ROSC reassess airway, breathing and circulation, record a 12-lead ECG within 10 minutes, and check glucose and electrolytes.",
            "Titrate oxygen to an SpO2 of 94-98%, ventilate to normocapnia, keep systolic BP above 100 mmHg with fluids and noradrenaline, treat seizures and prevent fever.",
            "Pre-alert and transfer to a hospital with catheterisation laboratory and intensive care, accompanied by a trained person with oxygen, monitor and drugs.",
            "Document collapse time, CPR start time, shocks, drugs with times, and time of ROSC; debrief the team and speak to the family.",
          ],
        },
      ],
      mustDraw: [
        "The adult ALS algorithm as a flow chart with the shockable and non-shockable arms and the 2-minute loop.",
        "A table of the 4 Hs and 4 Ts against their bedside treatment.",
      ],
      markSplit: [
        { part: "Recognition, call for help and scene organisation", marks: 2 },
        { part: "High-quality CPR with numbers", marks: 2 },
        { part: "Defibrillation and rhythm-specific drug timing with doses", marks: 3 },
        { part: "Reversible causes", marks: 1.5 },
        { part: "Post-resuscitation care, transfer and documentation", marks: 1.5 },
      ],
      keywords: ["cardiac arrest", "chain of survival", "defibrillation", "adrenaline 1 mg", "amiodarone 300 mg", "4 Hs and 4 Ts"],
    },
    {
      id: "emergency-cardiac-arrest-t2",
      paper: "III",
      kind: "differentiate",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Differentiate basic life support in an adult from that in a child and an infant, and justify each difference.",
      openingLines: [
        "Adult arrest is usually primary and cardiac, most often from a shockable rhythm due to myocardial infarction, so circulation and early defibrillation come first.",
        "Paediatric arrest is usually secondary and hypoxic, following respiratory failure or shock, so oxygenation and ventilation come first and the sequence and ratios change accordingly.",
      ],
      answer: [
        {
          heading: "Sequence and ventilation",
          points: [
            "Adults: compressions first, and compression-only CPR is acceptable for an untrained rescuer.",
            "Children and infants: **five initial rescue breaths before compressions**, because hypoxia is the mechanism, and ventilation is never omitted.",
            "Two-rescuer ratio is 30:2 in adults but **15:2 in children and infants**, giving proportionally more ventilation.",
          ],
        },
        {
          heading: "Technique and depth",
          points: [
            "Adult: two hands on the lower half of the sternum, depth 5-6 cm.",
            "Child: one or two hands, depth at least one-third of the chest diameter, about 5 cm.",
            "Infant: two fingers for a single rescuer or the two-thumb encircling technique for two rescuers, depth about 4 cm; the head is kept in a neutral position because over-extension occludes the soft trachea.",
            "Rate is 100-120 per minute at every age.",
          ],
        },
        {
          heading: "Drugs, energy and access",
          points: [
            "Adrenaline: 1 mg IV in the adult; **10 microgram/kg (0.1 mL/kg of 1:10,000), maximum 1 mg, in the child**, both every 3-5 minutes.",
            "Amiodarone: 300 mg in the adult, 5 mg/kg in the child.",
            "Defibrillation: 150-200 J biphasic in the adult, **4 J/kg at every shock in the child**, with paediatric pads or an attenuator under 8 years or 25 kg.",
            "Intraosseous access is the early default in children because peripheral access is often impossible.",
          ],
        },
        {
          heading: "Causes to look for",
          points: [
            "Adults: acute coronary syndrome, arrhythmia, pulmonary embolism, haemorrhage.",
            "Children: hypoxia from airway obstruction, foreign body, pneumonia, bronchiolitis, asthma, drowning; and shock from gastroenteritis, sepsis or trauma.",
            "This is why the paediatric emphasis is on recognising and treating the compensated child before arrest ever happens.",
          ],
        },
      ],
      mustDraw: ["A three-column table (adult, child, infant) with depth, hand position, ratio, initial breaths, energy and adrenaline dose."],
      markSplit: [
        { part: "Sequence and initial breaths with justification", marks: 1.5 },
        { part: "Technique, depth and ratios", marks: 1.5 },
        { part: "Drug doses and energy", marks: 1.5 },
        { part: "Difference in aetiology", marks: 0.5 },
      ],
      keywords: ["paediatric BLS", "15:2", "five rescue breaths", "4 J/kg", "10 microgram/kg adrenaline"],
    },
    {
      id: "emergency-cardiac-arrest-t3",
      paper: "III",
      kind: "enumerate",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Enumerate the reversible causes of cardiac arrest and state the specific treatment of each.",
      openingLines: [
        "The reversible causes are memorised as the 4 Hs and the 4 Ts, and they must be considered during every 2-minute cycle of advanced life support.",
        "Resuscitation that does not search for a reversible cause is simply the mechanical repetition of compressions and adrenaline.",
      ],
      answer: [
        {
          heading: "The 4 Hs",
          points: [
            "Hypoxia - open the airway, ventilate with high-flow oxygen, relieve any foreign body or airway obstruction.",
            "Hypovolaemia - two wide-bore cannulae, rapid crystalloid and blood, surgical or obstetric control of the bleeding source.",
            "Hyperkalaemia, hypokalaemia, hypocalcaemia, acidosis and hypoglycaemia - calcium gluconate 10% 10-30 mL IV, insulin 10 units with 25 g dextrose, sodium bicarbonate 50 mmol, potassium replacement for hypokalaemia, and 25 g of dextrose for hypoglycaemia.",
            "Hypothermia - active rewarming with warmed fluids and blankets, prolonged CPR, and withholding repeated drug doses until the core temperature is above 30 C.",
          ],
        },
        {
          heading: "The 4 Ts",
          points: [
            "Tension pneumothorax - immediate needle decompression followed by an intercostal drain.",
            "Tamponade - pericardiocentesis, or resuscitative thoracotomy in penetrating trauma.",
            "Toxins - naloxone for opioids, atropine and pralidoxime for organophosphates, sodium bicarbonate for tricyclics, digoxin-specific Fab for digoxin and oleander, calcium and high-dose insulin for calcium channel blockers, intravenous lipid emulsion for local anaesthetic toxicity.",
            "Thrombosis - coronary (thrombolysis or primary PCI after ROSC) and pulmonary (thrombolysis during CPR, then continue compressions for 60-90 minutes).",
          ],
        },
        {
          heading: "How they are found",
          points: [
            "History from relatives, a rapid look at the drug chart or poison container, capillary glucose, and a bedside ultrasound where available.",
            "Clinical clues: distended neck veins with absent breath sounds in tension pneumothorax, pinpoint pupils in opioid poisoning, a fistula in a dialysis patient with hyperkalaemia.",
          ],
        },
      ],
      markSplit: [
        { part: "The 4 Hs with treatment", marks: 2 },
        { part: "The 4 Ts with treatment", marks: 2 },
        { part: "How the cause is identified during resuscitation", marks: 1 },
      ],
      keywords: ["reversible causes", "4 Hs", "4 Ts", "hyperkalaemia", "tension pneumothorax", "thrombolysis in arrest"],
    },
  ],
  mcqs: [
    {
      id: "emergency-cardiac-arrest-q1",
      stem: "A 60-year-old man collapses in your clinic. He is unresponsive and taking occasional slow noisy gasps. Two staff members are with you. What is the immediate next action?",
      options: [
        "Palpate the carotid pulse for a full 10 seconds before deciding",
        "Start chest compressions at once and send someone for the defibrillator",
        "Give five rescue breaths, since he is still making respiratory effort",
        "Place him in the recovery position and give high-flow oxygen",
        "Obtain a 12-lead ECG to identify the rhythm before starting CPR",
      ],
      answer: 1,
      explanation:
        "Agonal gasping in an unresponsive patient is cardiac arrest, and compressions must begin within 10 seconds while a named person fetches the defibrillator. Pulse palpation is unreliable even for professionals and only delays compressions, which is why current guidelines removed it as a prerequisite for lay and clinic-level CPR. Five rescue breaths first is the paediatric sequence for a hypoxic arrest, not the adult one. The recovery position is for an unconscious patient who is breathing normally, and waiting for a 12-lead ECG in an unmonitored arrest wastes the minutes in which defibrillation still works.",
      difficulty: "easy",
    },
    {
      id: "emergency-cardiac-arrest-q2",
      stem: "During resuscitation of a 48-year-old woman, the monitor shows ventricular fibrillation. She has received two shocks and CPR is ongoing. A third shock is delivered. What should be given now?",
      options: [
        "Adrenaline 1 mg IV only",
        "Amiodarone 300 mg IV only",
        "Adrenaline 1 mg IV and amiodarone 300 mg IV",
        "Sodium bicarbonate 50 mmol IV",
        "Atropine 3 mg IV",
      ],
      answer: 2,
      explanation:
        "In a shockable rhythm both adrenaline 1 mg and amiodarone 300 mg are given immediately after the third shock, with adrenaline repeated every 3-5 minutes and a further 150 mg of amiodarone after the fifth shock. Giving only one of the two omits a recommended drug at the point in the algorithm where both are due. Sodium bicarbonate is not given for the acidosis of arrest and is reserved for hyperkalaemia or tricyclic overdose. Atropine has been removed from the arrest algorithms altogether and has no role in ventricular fibrillation.",
      difficulty: "moderate",
    },
    {
      id: "emergency-cardiac-arrest-q3",
      stem: "A 4-year-old child weighing 16 kg is in cardiac arrest with asystole. Which adrenaline dose and route is correct?",
      options: [
        "1 mg of 1:1000 intramuscularly, repeated every 5 minutes",
        "0.16 mg IV/IO (1.6 mL of 1:10,000) every 3-5 minutes",
        "1 mg IV (10 mL of 1:10,000) every 3-5 minutes",
        "0.16 mg of 1:1000 subcutaneously, single dose",
        "0.5 mg of 1:1000 intramuscularly, repeated every 5 minutes",
      ],
      answer: 1,
      explanation:
        "Paediatric arrest adrenaline is 10 microgram/kg, that is 0.1 mL/kg of 1:10,000, given intravenously or intraosseously every 3-5 minutes, so a 16 kg child receives 0.16 mg or 1.6 mL. The adult dose of 1 mg would be a tenfold overdose in this child and risks severe hypertension and myocardial injury if ROSC occurs. The intramuscular 1:1000 doses listed are the anaphylaxis regimen, which has no place in arrest because absorption from muscle is negligible without a circulation, and the subcutaneous route is never used for either indication.",
      difficulty: "moderate",
    },
    {
      id: "emergency-cardiac-arrest-q4",
      stem: "Waveform capnography during CPR shows an end-tidal CO2 that suddenly rises from 12 to 42 mmHg. What does this indicate?",
      options: [
        "The endotracheal tube has been displaced into the oesophagus",
        "Return of spontaneous circulation",
        "Compressions have become too shallow",
        "The patient has developed a tension pneumothorax",
        "Hyperventilation by the person bagging",
      ],
      answer: 1,
      explanation:
        "An abrupt rise in end-tidal CO2 to above 35-40 mmHg reflects a sudden increase in pulmonary blood flow and is the earliest and most reliable sign of return of spontaneous circulation, allowing the team to check the rhythm at the next planned pause rather than interrupting compressions. Oesophageal intubation produces a fall to near zero, not a rise. Shallow compressions and tension pneumothorax both reduce cardiac output and therefore lower the end-tidal value. Hyperventilation blows off CO2 and also lowers the reading.",
      difficulty: "moderate",
    },
    {
      id: "emergency-cardiac-arrest-q5",
      stem: "A 52-year-old man on maintenance haemodialysis missed his last two sessions and now arrests in your clinic. The monitor shows a slow, very broad complex rhythm with no pulse. Which drug should be given first alongside adrenaline?",
      options: [
        "Amiodarone 300 mg IV",
        "Calcium gluconate 10% 10-30 mL IV",
        "Magnesium sulphate 2 g IV",
        "Atropine 1 mg IV",
        "Dopamine infusion at 5 microgram/kg/min",
      ],
      answer: 1,
      explanation:
        "A missed dialysis session with a slow broad-complex pulseless rhythm is hyperkalaemic cardiac arrest, and intravenous calcium immediately stabilises the myocardial membrane, followed by insulin-dextrose and sodium bicarbonate to shift potassium intracellularly. Amiodarone treats refractory ventricular fibrillation and does nothing for the underlying electrolyte cause. Magnesium is for torsades de pointes. Atropine has no role in pulseless electrical activity, and vasopressor infusions are irrelevant during arrest, where bolus adrenaline plus correction of the reversible cause is what restores a rhythm.",
      difficulty: "moderate",
    },
    {
      id: "emergency-cardiac-arrest-q6",
      stem: "You are resuscitating a 30-year-old woman rescued from a village pond after an estimated 15 minutes of submersion. Her core temperature is 29 C and she remains in asystole after 20 minutes of advanced life support. What is the most appropriate decision?",
      options: [
        "Stop resuscitation, since 20 minutes of asystole indicates futility",
        "Continue resuscitation with active rewarming and do not stop until the core temperature is above 32-35 C",
        "Give three further doses of adrenaline at 1-minute intervals and then stop",
        "Give a single shock at 360 J and stop if there is no response",
        "Stop compressions and transfer the body for post-mortem examination",
      ],
      answer: 1,
      explanation:
        "Hypothermic arrest, particularly after cold-water drowning in a young person, carries a well-documented potential for full neurological recovery, so resuscitation continues with active rewarming and no one is declared dead until warm and dead. The 20-minute rule for stopping applies to normothermic asystole with no reversible cause, which is not this situation. Shortening the adrenaline interval to 1 minute is not recommended and drug metabolism is unpredictable below 30 C, where repeated doses are actually withheld. Defibrillating asystole is never indicated, at any temperature.",
      difficulty: "hard",
    },
    {
      id: "emergency-cardiac-arrest-q7",
      stem: "Your clinic nurse is ventilating an intubated patient during CPR at about 25 breaths per minute. What is the most important harm of this?",
      options: [
        "Excessive oxygen delivery causing oxygen toxicity",
        "Raised intrathoracic pressure reducing venous return and coronary perfusion",
        "Gastric distension leading inevitably to aspiration",
        "Rapid development of respiratory alkalosis with tetany",
        "Displacement of the endotracheal tube into the right main bronchus",
      ],
      answer: 1,
      explanation:
        "Hyperventilation during CPR raises mean intrathoracic pressure, which impedes venous return, lowers coronary and cerebral perfusion pressure and measurably reduces survival, which is why the intubated patient receives only 10 breaths per minute. Oxygen toxicity is a concern for prolonged post-arrest care, not for the minutes of resuscitation. Gastric distension is a problem of bag-mask ventilation, and the airway here is already secured by a tube. Alkalosis and tube displacement are not the primary mechanisms of harm.",
      difficulty: "moderate",
    },
    {
      id: "emergency-cardiac-arrest-q8",
      stem: "After 6 minutes of CPR, a 58-year-old man regains a spontaneous circulation with a blood pressure of 104/64 mmHg. He remains unresponsive. Which of the following is correct post-resuscitation care?",
      options: [
        "Continue 100% oxygen by non-rebreathing mask until he wakes",
        "Hyperventilate to a PaCO2 of 25-30 mmHg to reduce cerebral oedema",
        "Titrate oxygen to an SpO2 of 94-98%, record a 12-lead ECG and prevent fever",
        "Give a bolus of sodium bicarbonate 100 mmol to correct the arrest acidosis",
        "Warm the patient actively to 38.5 C to improve cerebral perfusion",
      ],
      answer: 2,
      explanation:
        "Post-arrest care aims for normoxia with an SpO2 of 94-98%, normocapnia, an early 12-lead ECG to identify an occlusion needing catheterisation, and active prevention of fever, keeping temperature at or below 37.5 C for 72 hours. Sustained 100% oxygen produces hyperoxia, which increases free-radical injury and worsens outcome. Routine hyperventilation causes cerebral vasoconstriction and secondary ischaemic injury. Bicarbonate does not improve outcome and worsens intracellular acidosis, and deliberately raising the temperature is directly harmful to the post-arrest brain.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "emergency-cardiac-arrest-c1",
      front: "Two findings that diagnose cardiac arrest.",
      back: "Unresponsive and not breathing normally. Agonal gasps count as not breathing. A pulse check must not delay compressions.",
    },
    {
      id: "emergency-cardiac-arrest-c2",
      front: "Adult compression depth, rate and ratio.",
      back: "Depth 5-6 cm, rate 100-120/min, ratio 30:2, full recoil, interruptions under 10 seconds. Once intubated: continuous compressions with 10 breaths/min.",
    },
    {
      id: "emergency-cardiac-arrest-c3",
      front: "Adrenaline in cardiac arrest: dose, concentration, route and interval.",
      back: "Adult 1 mg IV/IO (10 mL of 1:10,000) every 3-5 minutes. Child 10 microgram/kg (0.1 mL/kg of 1:10,000), maximum 1 mg, every 3-5 minutes.",
    },
    {
      id: "emergency-cardiac-arrest-c4",
      front: "When is adrenaline given in a shockable versus a non-shockable rhythm?",
      back: "Shockable (VF/pVT): after the third shock. Non-shockable (asystole/PEA): as soon as access is available. Then every 3-5 minutes in both.",
    },
    {
      id: "emergency-cardiac-arrest-c5",
      front: "Amiodarone in refractory VF.",
      back: "300 mg IV after the third shock and 150 mg after the fifth (child 5 mg/kg, max 300 mg). Lidocaine 100 mg is the alternative if amiodarone is unavailable.",
    },
    {
      id: "emergency-cardiac-arrest-c6",
      front: "Defibrillation energies for adults and children.",
      back: "Adult 150-200 J biphasic (360 J monophasic), subsequent shocks the same or higher. Child 4 J/kg for every shock.",
    },
    {
      id: "emergency-cardiac-arrest-c7",
      front: "Which rhythms are shockable?",
      back: "Ventricular fibrillation and pulseless ventricular tachycardia only. Asystole and PEA are never shocked.",
    },
    {
      id: "emergency-cardiac-arrest-c8",
      front: "List the 4 Hs and 4 Ts.",
      back: "Hypoxia, hypovolaemia, hyper/hypokalaemia and metabolic causes, hypothermia; tension pneumothorax, tamponade, toxins, thrombosis.",
    },
    {
      id: "emergency-cardiac-arrest-c9",
      front: "Paediatric BLS differences from the adult sequence.",
      back: "Five rescue breaths first, 15:2 with two rescuers, depth at least one-third of the chest, two-thumb technique in infants, and hypoxia as the usual cause.",
    },
    {
      id: "emergency-cardiac-arrest-c10",
      front: "What does an end-tidal CO2 below 10 mmHg during CPR mean?",
      back: "Compressions are inadequate. A sudden rise above 35-40 mmHg means return of spontaneous circulation.",
    },
    {
      id: "emergency-cardiac-arrest-c11",
      front: "Post-ROSC oxygen and temperature targets.",
      back: "SpO2 94-98%, PaCO2 35-45 mmHg, systolic BP above 100 mmHg, glucose below 180 mg/dL, and temperature at or below 37.5 C for 72 hours.",
    },
    {
      id: "emergency-cardiac-arrest-c12",
      front: "Arrest in pregnancy beyond 20 weeks: two extra steps.",
      back: "Manual left uterine displacement during CPR, and perimortem caesarean section within 5 minutes if there is no ROSC.",
    },
  ],
  references: [
    "European Resuscitation Council Guidelines 2021 - Adult Advanced Life Support and Basic Life Support",
    "American Heart Association Guidelines for CPR and Emergency Cardiovascular Care, 2020, with 2023 focused updates",
    "Resuscitation Council UK Adult Advanced Life Support Guidelines, 2021",
    "Indian Resuscitation Council / National Emergency Life Support (NELS) provider manual, MoHFW, 2020",
    "Tintinalli's Emergency Medicine, 9th edition, 2020 - cardiac arrest and resuscitation",
  ],
});
