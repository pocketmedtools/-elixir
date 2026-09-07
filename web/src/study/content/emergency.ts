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

topics.push({
  id: "emergency-anaphylaxis",
  title: "Anaphylaxis",
  oneLiner:
    "Anaphylaxis is an acute, life-threatening, generalised hypersensitivity reaction with sudden airway, breathing or circulation compromise usually accompanied by skin changes, and it is treated with intramuscular adrenaline 0.5 mg of 1:1000 into the anterolateral thigh, repeated every 5 minutes as needed.",
  frequency: "core",
  keywords: [
    "anaphylaxis",
    "anaphylactic shock",
    "adrenaline",
    "epinephrine",
    "1:1000",
    "auto-injector",
    "EpiPen",
    "angioedema",
    "urticaria",
    "biphasic reaction",
    "mast cell tryptase",
    "penicillin allergy",
    "ASV reaction",
    "iron sucrose reaction",
    "food allergy",
    "bee sting",
  ],
  sections: [
    {
      heading: "Definition, mechanism and clinical criteria",
      points: [
        "**Anaphylaxis is a serious systemic hypersensitivity reaction of rapid onset that may cause death**; the World Allergy Organization and the Resuscitation Council both define it by the combination of sudden onset with **airway, breathing or circulation compromise**, usually with skin and mucosal changes.",
        "It is diagnosed clinically at the bedside on one of two patterns: sudden illness with typical skin or mucosal changes plus respiratory or cardiovascular compromise, or sudden hypotension and collapse after exposure to a known allergen for that patient, even with no rash at all.",
        "**Skin changes are absent in up to 20% of fatal reactions** - a patient who collapses after an injection with no urticaria still has anaphylaxis until proved otherwise.",
        "The mechanism is IgE-mediated mast cell and basophil degranulation in most cases; non-IgE mechanisms (radiocontrast, vancomycin, NSAIDs, opioids) produce an identical picture, and the older term anaphylactoid is no longer used because the treatment is the same.",
        "Death is from **upper airway obstruction (median 5 minutes in iatrogenic reactions), bronchospasm (median 15 minutes in food-related reactions) or profound vasodilatory shock with plasma leak** - up to 35% of the circulating volume can shift into the interstitium within 10 minutes.",
        "Common triggers in Indian practice: injectable and oral penicillins and cephalosporins, NSAIDs including diclofenac, iron sucrose and iron dextran infusions, anti-snake venom, radiocontrast, vaccines, hymenoptera (bee and wasp) stings, and foods such as peanut, sesame, prawn, egg and cow milk.",
      ],
    },
    {
      heading: "Immediate treatment: adrenaline first",
      points: [
        "**Adrenaline is the only drug that reverses all three problems - it is an alpha-1 vasoconstrictor that reverses the vasodilatation and mucosal oedema, a beta-1 inotrope, and a beta-2 bronchodilator and mast cell stabiliser.** There is no absolute contraindication to it in anaphylaxis.",
        "**Adult dose: adrenaline 0.5 mg = 0.5 mL of 1:1000 (1 mg/mL) intramuscularly into the anterolateral aspect of the mid-thigh (vastus lateralis), repeated every 5 minutes if there is no improvement.**",
        "**Paediatric doses of 1:1000 intramuscularly: over 12 years 0.5 mg (0.5 mL); 6-12 years 0.3 mg (0.3 mL); 6 months to 6 years 0.15 mg (0.15 mL); under 6 months 0.1-0.15 mg. The weight-based equivalent is 0.01 mg/kg to a maximum of 0.5 mg.**",
        "**Never give 1:1000 adrenaline intravenously as a bolus** - this causes hypertensive crisis, myocardial ischaemia and arrhythmia, and is the classic fatal error. Intravenous adrenaline is only for a trained practitioner with monitoring, as **50 microgram boluses (0.5 mL of 1:10,000) or an infusion**, in refractory shock.",
        "The thigh is chosen over the deltoid because absorption is faster and peak plasma levels higher; subcutaneous and inhaled routes are inadequate and must not be used.",
        "Lay the patient flat and raise the legs (sit up only if breathing is the dominant problem, and put a pregnant woman in the left lateral position). **Do not stand the patient up or walk them to a couch - sudden postural change has caused death in the empty-ventricle syndrome.**",
      ],
    },
    {
      heading: "The rest of the first ten minutes",
      points: [
        "Remove the trigger where possible: stop the drug infusion, remove a bee sting by scraping, but never delay adrenaline to do this, and never induce vomiting after a food trigger.",
        "**High-flow oxygen 10-15 L/min by a mask with reservoir bag**, and a call for help and for an ambulance in every case.",
        "**Fluid challenge: 500-1000 mL of a balanced crystalloid or 0.9% saline over 5-10 minutes in an adult, and 10 mL/kg in a child, repeated as needed guided by blood pressure.** Large volumes are frequently required because of the capillary leak.",
        "**Nebulised salbutamol 5 mg (2.5 mg under 5 years)** for persistent bronchospasm and **nebulised adrenaline 5 mL of 1:1000** for stridor from upper airway oedema, both as adjuncts and never as substitutes for intramuscular adrenaline.",
        "**Glucagon 1-2 mg IV over 5 minutes (child 20-30 microgram/kg, maximum 1 mg), repeatable, is the answer for the patient on beta-blockers** who does not respond to adrenaline.",
        "Antihistamines and steroids are **third-line and no longer routine**: the 2021 Resuscitation Council UK guidance removed routine chlorphenamine and hydrocortisone from the anaphylaxis algorithm because they do nothing for airway, breathing or circulation and delay adrenaline. If used after stabilisation for skin symptoms, chlorphenamine 10 mg IM/slow IV and hydrocortisone 200 mg IV in an adult.",
        "Prepare for airway obstruction early: an anaesthetist or the nearest facility with intubation capability should be called at the first hint of stridor or tongue swelling, because a delayed airway in anaphylaxis is often an impossible one.",
      ],
    },
    {
      heading: "Refractory anaphylaxis, observation and biphasic reactions",
      points: [
        "**Refractory anaphylaxis is defined as persisting airway, breathing or circulation problems despite two appropriate intramuscular doses of adrenaline**; it requires an adrenaline infusion, aggressive fluids and expert help, and the patient must be moved to critical care.",
        "Patients on beta-blockers and ACE inhibitors have more severe and more refractory reactions - the first because the beta-2 response is blocked, the second because bradykinin degradation is impaired.",
        "**A biphasic reaction - recurrence after apparent recovery without further exposure - occurs in about 3-5% of cases, typically within 4-12 hours.** This is why observation is mandatory even if the patient looks perfectly well.",
        "Observation periods: **at least 6 hours** for a reaction that responded promptly to a single dose of adrenaline; **at least 12 hours, or overnight admission**, for severe reactions, those needing more than one dose, those with a history of biphasic reactions or severe asthma, those presenting late in the evening, or those who live far from medical care - a common situation in rural India.",
        "Serum mast cell tryptase drawn as soon as possible after treatment, at 1-2 hours and at 24 hours (baseline), confirms mast cell degranulation retrospectively; a normal level does not exclude anaphylaxis, and treatment is never delayed for it.",
      ],
    },
    {
      heading: "Discharge, prevention and the family physician's role",
      points: [
        "**Prescribe two adrenaline auto-injectors where they are available and affordable (0.3 mg for over 30 kg, 0.15 mg for 7.5-25 kg) and demonstrate the technique**; where auto-injectors are unavailable, as in much of India, prescribe adrenaline ampoules with a labelled 1 mL syringe and train the family in person.",
        "Give a **written anaphylaxis action plan**, name the trigger explicitly in the record and on a card the patient carries, and issue a medical alert bracelet or card where possible.",
        "Refer to an allergy clinic or physician for confirmation of the trigger by specific IgE or skin testing, for advice on cross-reactivity, and for consideration of venom immunotherapy after a systemic hymenoptera sting reaction.",
        "**Document the drug allergy prominently in the clinic record and on every prescription; a written allergy label is the single most effective preventive measure a family physician can implement.**",
        "For known trigger avoidance, teach food label reading, warn about hidden allergens in restaurant food, and counsel about co-factors that amplify reactions - exercise, alcohol, NSAIDs and intercurrent infection.",
        "In the clinic itself, prevention means asking about drug allergy before every injection, keeping the patient in the clinic for 20-30 minutes after an injectable penicillin, iron infusion or vaccine, and having adrenaline drawn up and checked before the injection is given.",
      ],
    },
  ],
  tables: [
    {
      heading: "Adrenaline in anaphylaxis by age",
      columns: ["Age group", "Dose of 1:1000 IM", "Volume", "Auto-injector"],
      rows: [
        ["Adult and child over 12 years", "0.5 mg", "0.5 mL", "0.3 mg (0.5 mg device if available)"],
        ["Child 6-12 years", "0.3 mg", "0.3 mL", "0.3 mg"],
        ["Child 6 months to 6 years", "0.15 mg", "0.15 mL", "0.15 mg"],
        ["Infant under 6 months", "0.1-0.15 mg", "0.1-0.15 mL", "0.15 mg if nothing else available"],
        ["Any age, weight-based", "0.01 mg/kg", "0.01 mL/kg of 1:1000", "By weight band"],
      ],
    },
    {
      heading: "Drugs in anaphylaxis: order of use",
      columns: ["Drug", "Adult dose", "Paediatric dose", "Place in treatment"],
      rows: [
        ["Adrenaline 1:1000 IM", "0.5 mg IM thigh, repeat every 5 min", "0.01 mg/kg, max 0.5 mg, repeat every 5 min", "First and always; no contraindication"],
        ["Oxygen", "10-15 L/min with reservoir mask", "Same, titrated to SpO2 94-98%", "Immediately with adrenaline"],
        ["Crystalloid bolus", "500-1000 mL rapidly, repeat as needed", "10 mL/kg boluses", "For hypotension or poor response"],
        ["Nebulised salbutamol", "5 mg, repeat as needed", "2.5 mg under 5 years", "Persistent wheeze after adrenaline"],
        ["Nebulised adrenaline", "5 mL of 1:1000", "5 mL of 1:1000", "Stridor from laryngeal oedema"],
        ["Glucagon", "1-2 mg IV over 5 min, repeat", "20-30 microgram/kg, max 1 mg", "Patient on beta-blockers not responding"],
        ["Chlorphenamine", "10 mg IM or slow IV", "2.5-5 mg by age", "Third-line, after stabilisation, for skin symptoms"],
        ["Hydrocortisone", "200 mg IV", "50-100 mg IV by age", "Third-line; may help asthma, not the acute event"],
      ],
    },
    {
      heading: "Anaphylaxis versus its mimics",
      columns: ["Condition", "Distinguishing feature", "Treatment difference"],
      rows: [
        ["Vasovagal syncope", "Bradycardia, pallor, sweating, no urticaria, recovers on lying flat", "Lie flat and reassure; adrenaline not needed"],
        ["Acute severe asthma", "Wheeze without urticaria, hypotension or angioedema", "Bronchodilators and steroids; adrenaline only if anaphylaxis suspected"],
        ["ACE inhibitor angioedema", "Isolated lip and tongue swelling, no urticaria, no itch, days to years on the drug", "Stop the drug; adrenaline usually ineffective, airway is the priority"],
        ["Panic attack with hyperventilation", "Tingling, carpopedal spasm, normal BP and no rash", "Reassurance and breathing control"],
        ["Scombroid fish poisoning", "Flushing and headache after spoiled fish, several people affected", "Antihistamines usually suffice"],
      ],
    },
  ],
  redFlags: [
    "Stridor, hoarseness, tongue or throat swelling, or a sensation of the throat closing - impending airway obstruction; give intramuscular adrenaline and call for airway help immediately.",
    "Systolic BP below 90 mmHg (or a fall of more than 30% from the patient's usual) after any injection, sting or food - anaphylactic shock even without a rash.",
    "Persistent symptoms after two doses of intramuscular adrenaline - refractory anaphylaxis; start an adrenaline infusion and transfer to critical care.",
    "Anaphylaxis in a patient on a beta-blocker who is not responding - give glucagon 1-2 mg IV and expect a prolonged course.",
    "Collapse during or immediately after an iron sucrose infusion, anti-snake venom or an injectable antibiotic - stop the infusion and treat as anaphylaxis, not as a simple reaction.",
    "Anaphylaxis in pregnancy - treat identically with intramuscular adrenaline, position in the left lateral tilt, and involve obstetrics, as fetal compromise follows maternal hypotension quickly.",
    "Any patient who wants to leave before the 6-12 hour observation period, particularly late at night or from a remote village - explain the risk of a biphasic reaction and document the discussion.",
  ],
  pearls: [
    "Adrenaline 0.5 mg of 1:1000 intramuscularly into the thigh is the whole answer to the first question; everything else is an adjunct.",
    "Never give 1:1000 adrenaline as an intravenous bolus - the intravenous concentration is 1:10,000 and the intravenous bolus is 50 microgram, given only with monitoring.",
    "No rash does not exclude anaphylaxis: skin signs are absent in up to a fifth of fatal reactions.",
    "Lay the patient flat and lift the legs; sitting or standing an anaphylactic patient up has caused sudden death from an empty ventricle.",
    "Antihistamines and steroids do not treat anaphylaxis. They have been removed from the initial algorithm precisely because reaching for them delays adrenaline.",
    "A patient on a beta-blocker who does not respond to adrenaline needs glucagon, not more adrenaline.",
    "Observe for 6 hours minimum, 12 hours or overnight if the reaction was severe, needed repeat adrenaline, or the patient lives far from care - biphasic reactions occur in 3-5%.",
    "The prevention that matters in family practice: ask about allergy before every injection, keep the patient 20-30 minutes after a penicillin, iron infusion or vaccine, and write the allergy in red on the record.",
  ],
  theory: [
    {
      id: "emergency-anaphylaxis-t1",
      paper: "III",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 28-year-old woman develops generalised urticaria, wheeze and dizziness five minutes after an intramuscular injection of ceftriaxone in your clinic. Discuss the diagnosis and detailed management, including doses, observation and follow-up.",
      openingLines: [
        "This is anaphylaxis - an acute, life-threatening generalised hypersensitivity reaction with sudden onset of airway, breathing or circulation compromise, here with typical skin changes, following a known trigger.",
        "The diagnosis is clinical and immediate, and the first and definitive treatment is intramuscular adrenaline; no investigation should delay it.",
      ],
      answer: [
        {
          heading: "1. Recognition",
          points: [
            "Sudden onset within minutes of a parenteral trigger, with urticaria and angioedema (skin and mucosal changes) plus bronchospasm (breathing) and dizziness from hypotension (circulation).",
            "Assess airway for hoarseness, stridor and tongue swelling; breathing for wheeze, respiratory rate and SpO2; circulation for pulse rate, blood pressure and capillary refill; and disability for level of consciousness.",
            "Remember that skin signs are absent in up to 20% of fatal reactions, and that hypotension after a known trigger alone is sufficient for the diagnosis.",
          ],
        },
        {
          heading: "2. Immediate treatment",
          points: [
            "**Adrenaline 0.5 mg (0.5 mL of 1:1000) intramuscularly into the anterolateral mid-thigh immediately, repeated every 5 minutes if there is no improvement.**",
            "Lay her flat with the legs elevated; do not sit or stand her up. If breathing is the dominant problem allow her to sit, and use the left lateral position if she were pregnant.",
            "High-flow oxygen 15 L/min through a mask with a reservoir bag.",
            "Establish wide-bore intravenous access and give 500-1000 mL of crystalloid rapidly, repeated according to blood pressure.",
            "Call for help and for an ambulance; assign one person to monitor pulse, blood pressure, SpO2 and level of consciousness every 5 minutes.",
          ],
        },
        {
          heading: "3. Adjuncts and refractory reaction",
          points: [
            "Nebulised salbutamol 5 mg for persistent wheeze; nebulised adrenaline 5 mL of 1:1000 for stridor.",
            "Glucagon 1-2 mg IV if she is on a beta-blocker and fails to respond.",
            "If symptoms persist after two intramuscular doses, this is refractory anaphylaxis: start an adrenaline infusion under monitoring, continue aggressive fluids and arrange critical care transfer.",
            "Antihistamines (chlorphenamine 10 mg IM) and hydrocortisone 200 mg IV are third-line, given only after stabilisation, and are no longer part of the initial algorithm.",
            "Prepare for airway compromise early - early intubation by the most experienced person available, and a surgical airway plan if the airway is lost.",
          ],
        },
        {
          heading: "4. Observation and investigation",
          points: [
            "Observe for at least 6 hours after full resolution, and for 12 hours or overnight if the reaction was severe, needed more than one dose of adrenaline, involved asthma, occurred late at night, or the patient lives far from medical care.",
            "Serum mast cell tryptase as soon as possible after treatment, at 1-2 hours, and a baseline sample at 24 hours or at follow-up, where the facility exists.",
            "Warn her and her family about biphasic reactions, which occur in 3-5% of cases up to 12 hours later, and about what to do if symptoms recur.",
          ],
        },
        {
          heading: "5. Discharge, prevention and follow-up",
          points: [
            "Record **cephalosporin and penicillin allergy prominently in the case record, on the prescription and on a card she carries**, and counsel about cross-reactivity between penicillins and cephalosporins.",
            "Prescribe two adrenaline auto-injectors (0.3 mg) with a demonstration, or, where unavailable, adrenaline ampoules with a labelled syringe and in-person training of a family member.",
            "Give a written anaphylaxis action plan and arrange allergy referral for confirmation of the trigger.",
            "Audit the clinic process: allergy history before every injection, a 20-30 minute wait after injectables, and a checked emergency tray with in-date adrenaline.",
          ],
        },
      ],
      mustDraw: [
        "A table of intramuscular adrenaline doses by age with the corresponding volume of 1:1000.",
        "A flow chart: recognise, adrenaline IM, position and oxygen, fluids, reassess at 5 minutes, second dose, refractory pathway.",
      ],
      markSplit: [
        { part: "Definition and clinical recognition", marks: 2 },
        { part: "Adrenaline with dose, route, site and repeat interval", marks: 3 },
        { part: "Positioning, oxygen, fluids and adjuncts", marks: 2 },
        { part: "Observation, biphasic reaction and tryptase", marks: 1.5 },
        { part: "Discharge planning, documentation and prevention", marks: 1.5 },
      ],
      keywords: ["anaphylaxis", "adrenaline 0.5 mg IM", "1:1000", "biphasic reaction", "auto-injector", "mast cell tryptase"],
    },
    {
      id: "emergency-anaphylaxis-t2",
      paper: "III",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on adrenaline: preparations, routes, doses and pitfalls in emergency use.",
      openingLines: [
        "Adrenaline is a direct-acting sympathomimetic with alpha-1, beta-1 and beta-2 activity, and it is the single most important emergency drug in general practice.",
        "Its dangers in practice come almost entirely from confusion between the two available concentrations and between the intramuscular and intravenous routes.",
      ],
      answer: [
        {
          heading: "Preparations",
          points: [
            "**1:1000 = 1 mg in 1 mL** - the standard ampoule, used intramuscularly in anaphylaxis and by nebuliser for croup and laryngeal oedema.",
            "**1:10,000 = 1 mg in 10 mL** - the pre-filled cardiac arrest syringe, used intravenously.",
            "An auto-injector delivers a fixed 0.3 mg or 0.15 mg intramuscularly.",
          ],
        },
        {
          heading: "Indications, doses and routes",
          points: [
            "**Anaphylaxis: 0.5 mg IM of 1:1000 into the anterolateral thigh in an adult, 0.01 mg/kg in children (max 0.5 mg), repeated every 5 minutes.**",
            "**Cardiac arrest: 1 mg IV/IO of 1:10,000 every 3-5 minutes in an adult; 10 microgram/kg in a child.**",
            "**Croup and post-extubation stridor: nebulised adrenaline 5 mL of 1:1000 (or 0.5 mL/kg of 1:1000, maximum 5 mL).**",
            "Symptomatic bradycardia and post-arrest shock: infusion of 2-10 microgram/min in an adult, titrated to response.",
            "Added to local anaesthetic at 1:200,000 to prolong action and reduce bleeding - traditionally avoided in digits, nose, ear and penis, though modern evidence questions the digital rule.",
          ],
        },
        {
          heading: "Pitfalls and adverse effects",
          points: [
            "**Giving 1:1000 intravenously as a bolus is the classic fatal error** - hypertensive crisis, ventricular arrhythmia and myocardial ischaemia. Intravenous use requires 1:10,000, monitoring and 50 microgram boluses.",
            "Subcutaneous administration in anaphylaxis is too slow and is no longer recommended; the deltoid is inferior to the thigh.",
            "Expected effects are tremor, palpitation, anxiety, headache and pallor; these are not a reason to withhold the drug in anaphylaxis.",
            "Caution but no contraindication in ischaemic heart disease, hypertension and pregnancy - untreated anaphylaxis is far more dangerous.",
            "Storage: protect from light and heat, discard discoloured or brown solution, and check expiry monthly as part of the emergency tray audit.",
          ],
        },
      ],
      mustDraw: ["A table comparing 1:1000 and 1:10,000 - concentration, route, indication and dose."],
      markSplit: [
        { part: "Preparations and concentrations", marks: 1 },
        { part: "Indications with doses and routes", marks: 2.5 },
        { part: "Pitfalls, adverse effects and storage", marks: 1.5 },
      ],
      keywords: ["adrenaline", "1:1000 versus 1:10,000", "intramuscular thigh", "nebulised adrenaline", "emergency tray"],
    },
    {
      id: "emergency-anaphylaxis-t3",
      paper: "III",
      kind: "differentiate",
      marks: 5,
      minutes: 8,
      frequency: "less-common",
      question: "Differentiate anaphylaxis from vasovagal syncope and from ACE inhibitor angioedema occurring after a clinic procedure.",
      openingLines: [
        "All three present as sudden collapse or swelling soon after a clinic intervention, and all three are commonly confused, but their physiology, signs and treatment are entirely different.",
        "The distinction rests on the pulse rate, the presence of urticaria and itch, and the response to lying flat.",
      ],
      answer: [
        {
          heading: "Anaphylaxis",
          points: [
            "Onset within minutes of a trigger, with **tachycardia**, hypotension, urticaria, angioedema, itch, wheeze and often gastrointestinal symptoms.",
            "Warm peripheries from vasodilatation in the early phase, then cold and shut down as shock deepens.",
            "Treatment: intramuscular adrenaline, oxygen, fluids, and observation for a biphasic reaction.",
          ],
        },
        {
          heading: "Vasovagal syncope",
          points: [
            "Onset often at the sight of the needle or immediately after it, with **bradycardia**, pallor, sweating, nausea and a brief loss of consciousness.",
            "No urticaria, no itch, no wheeze, no angioedema; the skin is cold and clammy but not raised.",
            "Recovery within a minute or two of lying flat with the legs raised; treatment is reassurance and fluids, with atropine only for prolonged symptomatic bradycardia.",
          ],
        },
        {
          heading: "ACE inhibitor angioedema",
          points: [
            "Bradykinin-mediated, so **no urticaria and no itch**; typically isolated lip, tongue, facial or laryngeal swelling.",
            "May occur at any time from the first dose to years after starting the drug, and is more common in patients of African origin.",
            "Adrenaline, antihistamines and steroids are usually ineffective; the priorities are airway protection, permanent discontinuation of the drug and switching to a non-ACE agent, with icatibant or C1 inhibitor concentrate where available.",
          ],
        },
      ],
      mustDraw: ["A three-column table with pulse, skin findings, itch, response to lying flat and the drug of choice."],
      markSplit: [
        { part: "Anaphylaxis features and treatment", marks: 2 },
        { part: "Vasovagal syncope features and treatment", marks: 1.5 },
        { part: "ACE inhibitor angioedema features and treatment", marks: 1.5 },
      ],
      keywords: ["vasovagal", "bradycardia versus tachycardia", "bradykinin angioedema", "icatibant", "urticaria"],
    },
  ],
  mcqs: [
    {
      id: "emergency-anaphylaxis-q1",
      stem: "A 34-year-old man develops widespread urticaria, wheeze and a blood pressure of 78/40 mmHg five minutes after an injection of diclofenac. What is the correct first drug, dose and route?",
      options: [
        "Adrenaline 0.5 mg (0.5 mL of 1:1000) intramuscularly into the thigh",
        "Adrenaline 1 mg (10 mL of 1:10,000) intravenously",
        "Hydrocortisone 200 mg intravenously",
        "Chlorphenamine 10 mg intramuscularly",
        "Adrenaline 0.5 mg (0.5 mL of 1:1000) subcutaneously in the deltoid",
      ],
      answer: 0,
      explanation:
        "Anaphylaxis is treated with 0.5 mg of 1:1000 adrenaline intramuscularly into the anterolateral thigh, repeated every 5 minutes as required, because vastus lateralis absorption is faster and gives higher peak levels than any other accessible route. The 1 mg intravenous dose of 1:10,000 is the cardiac arrest regimen and would cause hypertensive crisis and arrhythmia in a perfusing patient. Hydrocortisone and chlorphenamine are third-line adjuncts that do nothing for airway, breathing or circulation and have been removed from the initial algorithm because reaching for them delays adrenaline. The subcutaneous deltoid route is absorbed too slowly and is no longer recommended.",
      difficulty: "easy",
    },
    {
      id: "emergency-anaphylaxis-q2",
      stem: "A 5-year-old child weighing 18 kg develops stridor and hypotension after eating a peanut sweet. What dose of intramuscular adrenaline should be given?",
      options: [
        "0.5 mg (0.5 mL of 1:1000)",
        "0.3 mg (0.3 mL of 1:1000)",
        "0.15 mg (0.15 mL of 1:1000)",
        "0.18 mg (1.8 mL of 1:10,000)",
        "0.05 mg (0.05 mL of 1:1000)",
      ],
      answer: 2,
      explanation:
        "A child between 6 months and 6 years receives 0.15 mg of 1:1000 intramuscularly, which is also close to the weight-based 0.01 mg/kg calculation for 18 kg and can be repeated after 5 minutes. The 0.5 mg and 0.3 mg doses belong to adults or older children and risk hypertension and arrhythmia in a small child. The 1:10,000 dilution is used for intravenous administration in cardiac arrest, not for intramuscular use in anaphylaxis, where the large volume is impractical. A dose of 0.05 mg is far too small and would fail to reverse the airway oedema.",
      difficulty: "moderate",
    },
    {
      id: "emergency-anaphylaxis-q3",
      stem: "A 60-year-old man on metoprolol develops anaphylaxis after a bee sting. He has had two doses of intramuscular adrenaline 0.5 mg and 1500 mL of saline but remains hypotensive at 82/50 mmHg with wheeze. What should be given next?",
      options: [
        "A third intramuscular dose of adrenaline 0.5 mg and continue observation",
        "Glucagon 1-2 mg intravenously over 5 minutes",
        "Chlorphenamine 10 mg intravenously",
        "Hydrocortisone 200 mg intravenously",
        "Dopamine infusion at 5 microgram/kg/min",
      ],
      answer: 1,
      explanation:
        "Beta-blockade blunts the beta-adrenergic response to adrenaline and produces refractory anaphylaxis; glucagon bypasses the beta receptor by activating adenylate cyclase directly and is the specific answer here, alongside starting an adrenaline infusion and continuing fluids. A third intramuscular dose alone ignores the pharmacological block and simply repeats a treatment that has already failed twice. Chlorphenamine and hydrocortisone are third-line and have no effect on the hypotension in the timeframe that matters. Dopamine is an inferior vasopressor here and does not address the beta blockade.",
      difficulty: "hard",
    },
    {
      id: "emergency-anaphylaxis-q4",
      stem: "A 22-year-old woman who had anaphylaxis to a prawn curry has been treated with one dose of intramuscular adrenaline and is now completely asymptomatic after 2 hours. She lives 60 km away and wants to leave. What is the most appropriate advice?",
      options: [
        "She may leave now, since a single dose of adrenaline was sufficient",
        "She should stay for at least 6 hours, and preferably 12 hours or overnight given the distance from care",
        "She should stay for 30 minutes more and then leave with an antihistamine prescription",
        "She needs admission for 72 hours regardless of her progress",
        "She may leave once a serum tryptase result is available",
      ],
      answer: 1,
      explanation:
        "Biphasic reactions occur in about 3-5% of anaphylaxis cases, usually within 4-12 hours, so a minimum 6-hour observation is standard, extended to 12 hours or overnight when the reaction was severe, needed repeated adrenaline, occurred late at night or when the patient lives far from emergency care. Discharging her at 2 hours or after another 30 minutes leaves the highest-risk window uncovered, with a two-hour journey to the nearest help. Seventy-two hours of admission is not required for a reaction that settled with one dose. Tryptase is a retrospective confirmatory test and never governs discharge timing.",
      difficulty: "moderate",
    },
    {
      id: "emergency-anaphylaxis-q5",
      stem: "A 45-year-old woman becomes breathless and collapses during an iron sucrose infusion. She has no rash. Blood pressure is 70/40 mmHg with a pulse of 130/min. What is the most likely diagnosis and the immediate action?",
      options: [
        "Vasovagal syncope; lie her flat and reassure",
        "Anaphylaxis; stop the infusion and give adrenaline 0.5 mg IM",
        "Pulmonary embolism; give heparin",
        "A simple Fishbane reaction; slow the infusion and continue",
        "Panic attack; provide breathing control",
      ],
      answer: 1,
      explanation:
        "Sudden hypotension and respiratory compromise after exposure to a known trigger is anaphylaxis even when the skin is normal, because skin changes are absent in up to a fifth of severe and fatal reactions, and intravenous iron is a well-recognised cause. Vasovagal syncope produces bradycardia with pallor and no respiratory compromise, whereas she is tachycardic. A Fishbane reaction gives transient flushing and back or chest tightness without hypotension and does settle on slowing the infusion, but hypotension excludes it. Pulmonary embolism and panic attack do not follow this temporal relationship with an infusion and would both delay the treatment that saves her.",
      difficulty: "moderate",
    },
    {
      id: "emergency-anaphylaxis-q6",
      stem: "Which single statement about positioning in anaphylaxis is correct?",
      options: [
        "The patient should be sat upright to help breathing in all cases",
        "The patient should be walked to the emergency couch for monitoring",
        "The patient should lie flat with legs raised, and a pregnant woman should be in the left lateral position",
        "The head-down Trendelenburg position should be maintained for at least an hour",
        "Positioning makes no measurable difference once adrenaline is given",
      ],
      answer: 2,
      explanation:
        "Lying flat with the legs elevated maintains venous return in a profoundly vasodilated circulation, and a pregnant woman is placed in the left lateral position to relieve aortocaval compression. Sitting upright is used only when breathing is the dominant problem, and even then the patient must not stand. Making an anaphylactic patient stand or walk has caused sudden death from an empty ventricle and is explicitly warned against. The Trendelenburg position is not recommended, and positioning is not neutral - deaths have followed a change of posture even after adrenaline was given.",
      difficulty: "easy",
    },
    {
      id: "emergency-anaphylaxis-q7",
      stem: "A 70-year-old man on enalapril presents with tongue and lip swelling that has developed over 6 hours. There is no urticaria, no itch and no wheeze, and his blood pressure is 148/86 mmHg. What is the most appropriate management?",
      options: [
        "Adrenaline 0.5 mg IM, repeated every 5 minutes until the swelling settles",
        "Stop the enalapril, protect the airway and arrange urgent ENT or anaesthetic review",
        "Give hydrocortisone 200 mg IV and discharge on an antihistamine",
        "Reassure and review in a week with a lower dose of enalapril",
        "Start an adrenaline infusion and admit to intensive care",
      ],
      answer: 1,
      explanation:
        "Painless, non-itchy angioedema without urticaria in a patient on an ACE inhibitor is bradykinin-mediated, so the essential actions are permanent withdrawal of the drug and airway surveillance by someone able to secure a difficult airway, with icatibant or C1 inhibitor concentrate where available. Adrenaline, steroids and antihistamines target histamine-mediated reactions and are largely ineffective here, though adrenaline is still given if there is genuine diagnostic doubt with airway compromise. Reducing the dose does not remove the risk, since the reaction is not dose-dependent and can recur fatally. Intensive care admission may follow, but the specific answer is stopping the drug and protecting the airway.",
      difficulty: "hard",
    },
  ],
  cards: [
    {
      id: "emergency-anaphylaxis-c1",
      front: "Adult adrenaline dose in anaphylaxis: dose, concentration, site, interval.",
      back: "0.5 mg = 0.5 mL of 1:1000, intramuscular into the anterolateral mid-thigh, repeated every 5 minutes if no improvement.",
    },
    {
      id: "emergency-anaphylaxis-c2",
      front: "Paediatric intramuscular adrenaline doses by age.",
      back: "Over 12 y: 0.5 mg. 6-12 y: 0.3 mg. 6 months-6 y: 0.15 mg. Under 6 months: 0.1-0.15 mg. Weight-based 0.01 mg/kg, max 0.5 mg.",
    },
    {
      id: "emergency-anaphylaxis-c3",
      front: "Why must 1:1000 adrenaline never be given as an intravenous bolus?",
      back: "It causes hypertensive crisis, myocardial ischaemia and ventricular arrhythmia. IV use is 1:10,000, in 50 microgram boluses or an infusion, with monitoring.",
    },
    {
      id: "emergency-anaphylaxis-c4",
      front: "Clinical criteria for anaphylaxis.",
      back: "Sudden onset with airway, breathing or circulation compromise, usually with skin or mucosal changes; or sudden hypotension after a known trigger. Skin signs are absent in up to 20% of fatal cases.",
    },
    {
      id: "emergency-anaphylaxis-c5",
      front: "Fluid resuscitation in anaphylaxis.",
      back: "500-1000 mL crystalloid rapidly in an adult, 10 mL/kg in a child, repeated as needed - up to 35% of plasma volume leaks out within 10 minutes.",
    },
    {
      id: "emergency-anaphylaxis-c6",
      front: "Definition of refractory anaphylaxis and its treatment.",
      back: "Persisting airway, breathing or circulation problems after two appropriate IM doses of adrenaline. Start an adrenaline infusion, give aggressive fluids and get expert help.",
    },
    {
      id: "emergency-anaphylaxis-c7",
      front: "Anaphylaxis in a patient on beta-blockers.",
      back: "Reactions are more severe and refractory. Give glucagon 1-2 mg IV over 5 minutes (child 20-30 microgram/kg, max 1 mg), repeatable.",
    },
    {
      id: "emergency-anaphylaxis-c8",
      front: "Biphasic reaction: frequency, timing and consequence.",
      back: "3-5% of cases, usually within 4-12 hours, with no re-exposure. It is the reason for 6-12 hours of observation.",
    },
    {
      id: "emergency-anaphylaxis-c9",
      front: "Where do antihistamines and steroids sit in the anaphylaxis algorithm?",
      back: "Third-line, after stabilisation, for skin symptoms only. Removed from the initial algorithm in 2021 because they delay adrenaline and do not treat A, B or C.",
    },
    {
      id: "emergency-anaphylaxis-c10",
      front: "Position of the anaphylactic patient.",
      back: "Flat with legs raised; sitting only if breathing dominates; left lateral in pregnancy. Never stand or walk the patient - empty ventricle syndrome kills.",
    },
    {
      id: "emergency-anaphylaxis-c11",
      front: "Adrenaline auto-injector strengths and how many to prescribe.",
      back: "0.3 mg for over 30 kg, 0.15 mg for 7.5-25 kg. Prescribe two, and demonstrate the technique to the patient and a family member.",
    },
    {
      id: "emergency-anaphylaxis-c12",
      front: "Investigation that retrospectively confirms anaphylaxis.",
      back: "Serum mast cell tryptase as soon as possible, at 1-2 hours, and a baseline at 24 hours. A normal value does not exclude anaphylaxis and never delays treatment.",
    },
  ],
  references: [
    "Resuscitation Council UK, Emergency Treatment of Anaphylaxis: Guidelines for Healthcare Providers, 2021",
    "World Allergy Organization Anaphylaxis Guidance, 2020",
    "EAACI Guidelines: Anaphylaxis, 2021 update",
    "Indian Academy of Allergy and Indian College of Allergy, Asthma and Applied Immunology consensus on anaphylaxis management",
    "Tintinalli's Emergency Medicine, 9th edition, 2020 - anaphylaxis and acute allergic reactions",
  ],
});

topics.push({
  id: "emergency-shock",
  title: "Shock: recognition and the first hour of fluids",
  oneLiner:
    "Shock is acute circulatory failure with inadequate tissue oxygen delivery, recognised at the bedside by tachycardia, a narrow pulse pressure, delayed capillary refill, altered sensorium and oliguria, and treated in the first hour by classifying the type, giving type-appropriate fluid, starting noradrenaline when fluid fails, and treating the cause.",
  frequency: "core",
  keywords: [
    "shock",
    "hypovolaemic shock",
    "septic shock",
    "cardiogenic shock",
    "obstructive shock",
    "distributive shock",
    "capillary refill",
    "lactate",
    "noradrenaline",
    "Surviving Sepsis",
    "qSOFA",
    "passive leg raise",
    "shock index",
    "MAP 65",
    "fluid responsiveness",
  ],
  sections: [
    {
      heading: "Definition and the bedside diagnosis",
      points: [
        "**Shock is a state of acute circulatory failure in which oxygen delivery fails to meet cellular demand, producing tissue hypoperfusion and, if untreated, irreversible organ injury** - it is a clinical diagnosis and does not require a low blood pressure.",
        "**Hypotension is a late sign**: young adults, children and pregnant women compensate by vasoconstriction and tachycardia and can lose 30% of blood volume before the systolic pressure falls at all. Waiting for hypotension is waiting for decompensation.",
        "The three windows of perfusion that can be examined without any equipment are **skin (capillary refill more than 3 seconds, mottling, cold peripheries), brain (anxiety, restlessness, drowsiness, confusion) and kidney (urine output under 0.5 mL/kg/h in adults, under 1 mL/kg/h in children)**.",
        "**A narrow pulse pressure (below about 25% of the systolic value) is an early and reliable marker of hypovolaemic and cardiogenic shock** because stroke volume falls while diastolic pressure is maintained by vasoconstriction.",
        "**Shock index = heart rate divided by systolic BP; a value above 0.9 predicts significant blood loss and the need for transfusion** even when the blood pressure still looks acceptable.",
        "**Serum lactate above 2 mmol/L indicates tissue hypoperfusion and above 4 mmol/L defines a high-risk patient**; where a point-of-care lactate is unavailable, the clinical windows above are the substitute.",
      ],
    },
    {
      heading: "Classifying shock in the first five minutes",
      points: [
        "**Hypovolaemic** - haemorrhage (trauma, upper gastrointestinal bleed, ruptured ectopic pregnancy, postpartum haemorrhage) or fluid loss (cholera and other diarrhoeal disease, burns, diabetic ketoacidosis). Cold peripheries, flat neck veins, empty pulse.",
        "**Distributive** - sepsis, anaphylaxis, neurogenic (spinal cord injury) and adrenal crisis. Warm peripheries with bounding pulses early, low diastolic pressure and a wide pulse pressure; the neurogenic form is uniquely bradycardic with warm dry skin.",
        "**Cardiogenic** - acute myocardial infarction, myocarditis, arrhythmia, valve failure, and in India rheumatic valve disease and peripartum cardiomyopathy. Raised jugular venous pressure, basal crepitations, gallop rhythm, cold peripheries.",
        "**Obstructive** - tension pneumothorax, cardiac tamponade, massive pulmonary embolism. Raised jugular venous pressure with clear lungs, and in tension pneumothorax absent breath sounds with a deviated trachea.",
        "**The single most useful discriminator at the bedside is the jugular venous pressure combined with the lung fields: empty neck veins with clear lungs mean fluid; distended neck veins with crackles mean the pump; distended neck veins with clear lungs mean an obstruction.**",
        "In practice shock is often mixed - the septic patient with a myocardial depression, the trauma patient with a tension pneumothorax and blood loss - so reassess after every intervention rather than committing to one label.",
      ],
    },
    {
      heading: "The first hour: fluids",
      points: [
        "**Two large-bore cannulae (16-18 G in adults), or intraosseous access if two attempts fail, with blood drawn at the same time for grouping, haemoglobin, glucose, creatinine, electrolytes and lactate.**",
        "**Septic shock: 30 mL/kg of balanced crystalloid within the first 3 hours (Surviving Sepsis Campaign 2021), given as repeated boluses with reassessment after each, not as an uncritical bag hung wide open.**",
        "**Hypovolaemic and haemorrhagic shock: 500 mL crystalloid boluses in an adult while arranging blood, with a target of controlling the bleeding rather than normalising the blood pressure - permissive hypotension with a systolic of 80-90 mmHg is acceptable in penetrating trauma until haemostasis, but not in head injury, where the target is a systolic above 110 mmHg.**",
        "**Children: 10-20 mL/kg boluses of isotonic crystalloid over 5-20 minutes, reassessing after each; in septic shock in a setting with no ventilator support, give more cautious 10 mL/kg boluses**, as the FEAST trial showed increased mortality from liberal boluses in febrile African children without critical care backup.",
        "**Balanced crystalloids (Ringer lactate, Plasmalyte) are preferred to 0.9% saline**, which causes hyperchloraemic acidosis and more kidney injury in large volumes; starches are contraindicated and albumin is not a first-line fluid.",
        "**Cardiogenic shock is the exception: give a cautious 250 mL fluid challenge only if the lungs are clear, and stop at the first crackle** - the pump needs inotropes and reperfusion, not volume.",
        "Assess fluid responsiveness rather than guessing: **a passive leg raise that improves blood pressure and narrows the pulse pressure predicts a response**, whereas rising jugular venous pressure, new crackles, or a falling SpO2 mean stop.",
      ],
    },
    {
      heading: "The first hour: vasopressors, oxygen and the cause",
      points: [
        "**Noradrenaline is the first-line vasopressor in septic, hypovolaemic (after volume) and most other shock: 0.05-0.5 microgram/kg/min titrated to a mean arterial pressure of 65 mmHg.** It may be run through a well-sited large peripheral vein for a short period while central access is arranged, with vigilance for extravasation.",
        "Add vasopressin or adrenaline if noradrenaline requirements escalate; **dobutamine 2.5-10 microgram/kg/min is added when the cardiac output is low despite adequate filling pressure and mean arterial pressure**, as in cardiogenic and some septic shock.",
        "**Dopamine is no longer first-line** - it produces more arrhythmias and higher mortality than noradrenaline in septic shock (SOAP II) - and so-called renal-dose dopamine does not protect the kidney.",
        "**In septic shock take blood cultures and give broad-spectrum antibiotics within the first hour**, choosing empirically by the likely source and local resistance; source control (drainage of an abscess, removal of an infected line, surgery for perforation) is as important as the antibiotic.",
        "Give oxygen to maintain SpO2 94-98% (88-92% in known chronic hypercapnic lung disease), keep the patient warm, and treat pain, because pain and cold both worsen the physiology.",
        "**Do not give steroids routinely; hydrocortisone 200 mg per day in divided doses or by infusion is added only in septic shock still requiring vasopressors** after adequate fluid resuscitation, and immediately in suspected adrenal crisis.",
        "Reassess every 15 minutes in the first hour using the same three windows plus urine output through a catheter, and escalate rather than repeat an intervention that has already failed twice.",
      ],
    },
    {
      heading: "Shock in special Indian contexts",
      points: [
        "**Dengue shock syndrome**: narrowing pulse pressure to 20 mmHg or less with a rising haematocrit and falling platelets on days 4-6 of fever; treat with isotonic crystalloid 5-10 mL/kg/h titrated to the pulse pressure and haematocrit, avoid over-transfusion, and remember that a falling haematocrit with continuing shock means bleeding.",
        "**Severe malaria and enteric fever** produce a distributive picture with hepatosplenomegaly and thrombocytopenia; artesunate and appropriate antibiotics are as urgent as the fluid.",
        "**Obstetric shock** - postpartum haemorrhage, ruptured ectopic pregnancy, septic abortion, amniotic fluid embolism - must be assumed in any woman of reproductive age with shock and no obvious cause, and a urine pregnancy test is mandatory.",
        "**Poisoning-related shock** - aluminium phosphide, oleander, organophosphate, snake envenoming - is common in rural practice and responds poorly to fluids alone; the antidote and early referral matter more.",
        "**Anaemic heart failure and severe nutritional anaemia** are widespread; a haemoglobin of 3-4 g/dL with a high-output state needs slow packed cell transfusion with furosemide cover, never rapid crystalloid.",
        "Referral is part of resuscitation: **stabilise, communicate directly with the receiving unit, and transfer with an escort, oxygen, a running line and written notes** - a patient in shock sent alone in an auto-rickshaw will not arrive resuscitated.",
      ],
    },
  ],
  tables: [
    {
      heading: "Classifying shock at the bedside",
      columns: ["Type", "JVP", "Peripheries", "Lungs", "First action"],
      rows: [
        ["Hypovolaemic", "Low or flat", "Cold, clammy, delayed refill", "Clear", "Crystalloid boluses, blood, stop the bleeding"],
        ["Distributive (septic)", "Low or normal", "Warm early, cold late", "Clear or focal consolidation", "30 mL/kg crystalloid, cultures, antibiotics within 1 hour"],
        ["Distributive (anaphylactic)", "Low", "Warm, urticated", "Wheeze", "Adrenaline 0.5 mg IM, fluids"],
        ["Distributive (neurogenic)", "Low", "Warm and dry, bradycardic", "Clear", "Fluids, then noradrenaline; atropine for bradycardia"],
        ["Cardiogenic", "Raised", "Cold, mottled", "Basal crepitations", "Cautious 250 mL challenge, inotrope, reperfusion"],
        ["Obstructive (tension pneumothorax)", "Raised", "Cold", "Absent breath sounds one side", "Needle decompression then chest drain"],
        ["Obstructive (tamponade)", "Raised with pulsus paradoxus", "Cold", "Clear", "Pericardiocentesis"],
      ],
    },
    {
      heading: "Classes of haemorrhagic shock (adult, 70 kg)",
      columns: ["Class", "Blood loss", "Pulse", "Blood pressure", "Mental state and urine"],
      rows: [
        ["I", "Up to 750 mL (15%)", "Below 100/min", "Normal", "Slightly anxious, urine above 30 mL/h"],
        ["II", "750-1500 mL (15-30%)", "100-120/min", "Normal systolic, narrow pulse pressure", "Mildly anxious, urine 20-30 mL/h"],
        ["III", "1500-2000 mL (30-40%)", "120-140/min", "Systolic falls", "Anxious and confused, urine 5-15 mL/h"],
        ["IV", "Over 2000 mL (over 40%)", "Above 140/min, weak", "Markedly low", "Confused or unconscious, negligible urine"],
      ],
    },
    {
      heading: "Vasoactive drugs in shock",
      columns: ["Drug", "Dose range", "Main action", "Use in"],
      rows: [
        ["Noradrenaline", "0.05-0.5 microgram/kg/min IV infusion", "Alpha-1 vasoconstriction, some beta-1", "First-line in septic, hypovolaemic after volume, most shock"],
        ["Adrenaline", "0.05-0.5 microgram/kg/min IV infusion", "Alpha and beta", "Anaphylaxis, refractory shock, post-arrest"],
        ["Dobutamine", "2.5-10 microgram/kg/min IV infusion", "Beta-1 inotrope, mild vasodilator", "Low cardiac output with adequate MAP"],
        ["Vasopressin", "0.03 units/min fixed infusion", "V1 vasoconstriction", "Added to noradrenaline to spare its dose"],
        ["Dopamine", "5-15 microgram/kg/min", "Dose-dependent", "Second-line only; more arrhythmias than noradrenaline"],
      ],
    },
  ],
  redFlags: [
    "Capillary refill over 3 seconds with mottled knees in a febrile patient - septic shock; start fluids and antibiotics now, do not wait for the blood pressure to fall.",
    "Narrowing pulse pressure to 20 mmHg or less on day 4-6 of a dengue-like fever - dengue shock syndrome; begin fluids and refer immediately.",
    "Any woman of reproductive age with unexplained shock and abdominal pain - ruptured ectopic pregnancy until a pregnancy test and ultrasound say otherwise.",
    "Shock with a raised jugular venous pressure and clear lungs - obstructive shock; look for tension pneumothorax, tamponade and pulmonary embolism, all of which are killed by fluids alone.",
    "Shock persisting after 30 mL/kg of fluid - start noradrenaline and arrange critical care transfer; further boluses alone will cause pulmonary oedema.",
    "Lactate above 4 mmol/L, or a lactate that does not fall after resuscitation - high mortality; escalate care rather than observe.",
    "A shocked patient with cold peripheries and a systolic under 90 mmHg after an inferior myocardial infarction - suspect right ventricular infarction, which needs fluid and absolutely no nitrates.",
  ],
  pearls: [
    "Hypotension is a late sign of shock. Diagnose it on capillary refill, sensorium, urine output and pulse pressure instead.",
    "Look at the neck veins and listen to the lungs before you hang a bag: empty neck veins mean fluid, full neck veins with crackles mean the pump, full neck veins with clear lungs mean an obstruction.",
    "Shock index (heart rate divided by systolic BP) above 0.9 predicts significant blood loss before the blood pressure changes.",
    "Septic shock: 30 mL/kg of balanced crystalloid within 3 hours, blood cultures then antibiotics within the first hour, and noradrenaline to a mean arterial pressure of 65 mmHg.",
    "Fluid is a drug with a dose and a toxic level; give it in boluses with reassessment after each, and stop when the neck veins rise, crackles appear or the SpO2 falls.",
    "Noradrenaline, not dopamine, is the first-line vasopressor; dopamine causes more arrhythmias and higher mortality in septic shock.",
    "In cardiogenic shock the fluid challenge is 250 mL and the answer is reperfusion and an inotrope, not more volume.",
    "Never transfuse a chronically anaemic patient rapidly - packed cells slowly with furosemide cover, or you will convert anaemia into pulmonary oedema.",
  ],
  theory: [
    {
      id: "emergency-shock-t1",
      paper: "III",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 45-year-old man is brought to your clinic with fever for four days, drowsiness, a pulse of 128/min, blood pressure 84/56 mmHg and cold clammy extremities. Classify shock, and describe your assessment and management in the first hour.",
      openingLines: [
        "Shock is acute circulatory failure with tissue hypoperfusion and inadequate oxygen delivery to cells; this man is in shock with a systolic pressure of 84 mmHg, tachycardia, altered sensorium and poor peripheral perfusion.",
        "With four days of fever the working diagnosis is septic shock, but the first task is a structured resuscitation running in parallel with the search for the cause.",
      ],
      answer: [
        {
          heading: "1. Classification of shock",
          points: [
            "Hypovolaemic - haemorrhagic or from fluid loss such as diarrhoea, vomiting, burns or diabetic ketoacidosis.",
            "Distributive - septic, anaphylactic, neurogenic and adrenal crisis.",
            "Cardiogenic - myocardial infarction, arrhythmia, myocarditis, valve failure.",
            "Obstructive - tension pneumothorax, cardiac tamponade, massive pulmonary embolism.",
            "Mixed forms are common, and the classification is confirmed by the jugular venous pressure, the peripheries and the lung fields.",
          ],
        },
        {
          heading: "2. Immediate assessment (first 5 minutes)",
          points: [
            "Airway, breathing with SpO2 and respiratory rate, circulation with pulse, blood pressure, capillary refill and jugular venous pressure, disability with GCS and capillary glucose, and exposure looking for rash, cellulitis, abscess, ulcer and pressure sores.",
            "Focused history from relatives: fever pattern, urinary or respiratory symptoms, loose stools, recent surgery or catheter, drug intake, diabetes, and any poison or snake bite.",
            "Examine for the source: chest, abdomen, skin, perineum, an infected diabetic foot, and meningism.",
            "Send blood for haemogram, glucose, creatinine, electrolytes, liver function, lactate, malaria and dengue tests, and take two sets of blood cultures before antibiotics.",
          ],
        },
        {
          heading: "3. Resuscitation in the first hour",
          points: [
            "Two large-bore cannulae; oxygen to keep SpO2 94-98%; monitoring of pulse, BP, SpO2 and urine output through a catheter.",
            "**Balanced crystalloid 30 mL/kg (about 2 litres for a 70 kg man) over the first 3 hours, given as 500 mL boluses with reassessment after each.**",
            "**Blood cultures first, then broad-spectrum intravenous antibiotics within one hour**, chosen for the likely source and local resistance - for example ceftriaxone with or without doxycycline covering scrub typhus and leptospirosis in a monsoon setting.",
            "**If the mean arterial pressure remains below 65 mmHg after fluid, start noradrenaline 0.05-0.5 microgram/kg/min**, initially through a large peripheral vein if central access is not available.",
            "Consider hydrocortisone 200 mg per day only if vasopressors are still needed after adequate fluid; give paracetamol for fever and treat pain.",
          ],
        },
        {
          heading: "4. Search for the specific tropical causes",
          points: [
            "Malaria - peripheral smear and rapid antigen test; treat severe malaria with intravenous artesunate.",
            "Dengue - day of illness, platelet count, haematocrit and pulse pressure; fluids are titrated to the haematocrit and pulse pressure.",
            "Scrub typhus - look for an eschar in the axilla, groin and under the breast; doxycycline or azithromycin.",
            "Leptospirosis, enteric fever, hepatitis and urinary sepsis; and remember tuberculosis and HIV as underlying conditions.",
          ],
        },
        {
          heading: "5. Reassessment, referral and documentation",
          points: [
            "Reassess every 15 minutes using capillary refill, sensorium, urine output, blood pressure and lactate; a lactate that does not fall means the resuscitation is failing.",
            "Refer to a hospital with intensive care after stabilisation, communicating directly with the receiving doctor.",
            "Transfer with an escort, oxygen, a running line, the drugs already given documented with times, and the culture bottles.",
            "Counsel the family honestly about severity and prognosis before transfer.",
          ],
        },
      ],
      mustDraw: [
        "A table classifying shock by type against JVP, peripheries, lungs and first action.",
        "A first-hour timeline: 0-5 min assessment, 5-20 min access and fluids, within 60 min cultures and antibiotics, 60 min reassessment and vasopressor decision.",
      ],
      markSplit: [
        { part: "Classification of shock", marks: 2 },
        { part: "Structured assessment and search for source", marks: 2 },
        { part: "Fluids, antibiotics and vasopressor with doses and timing", marks: 3 },
        { part: "Tropical differential diagnosis", marks: 1.5 },
        { part: "Reassessment, referral and communication", marks: 1.5 },
      ],
      keywords: ["septic shock", "30 mL/kg", "noradrenaline", "lactate", "Surviving Sepsis", "capillary refill"],
    },
    {
      id: "emergency-shock-t2",
      paper: "III",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on the assessment of fluid responsiveness and the safe use of intravenous fluids in the shocked patient.",
      openingLines: [
        "Fluid is a drug: it has a dose, a therapeutic window and a toxic level, and only about half of shocked patients actually increase their cardiac output in response to a bolus.",
        "The aim of fluid therapy is to restore tissue perfusion, not to normalise a number on the monitor.",
      ],
      answer: [
        {
          heading: "Assessing responsiveness",
          points: [
            "**Passive leg raise** from a semi-recumbent position for 60-90 seconds gives a reversible auto-transfusion of about 300 mL; an improvement in blood pressure and pulse pressure predicts a response to fluid.",
            "A **fluid challenge** of 250-500 mL over 10-15 minutes with reassessment of pulse, blood pressure, pulse pressure, capillary refill and urine output is the practical bedside test where no monitoring is available.",
            "Dynamic markers such as pulse pressure variation and inferior vena cava collapsibility on ultrasound are better than static ones; **central venous pressure alone is a poor predictor and should not drive fluid decisions**.",
            "Signs to stop: rising jugular venous pressure, new basal crackles, falling SpO2, increasing respiratory rate, and a tender enlarging liver in children.",
          ],
        },
        {
          heading: "Choice and dose of fluid",
          points: [
            "**Balanced crystalloids (Ringer lactate, Plasmalyte) are preferred**; 0.9% saline in large volumes causes hyperchloraemic metabolic acidosis and more acute kidney injury.",
            "Septic shock 30 mL/kg over 3 hours; haemorrhagic shock 500 mL boluses while blood is arranged; children 10-20 mL/kg boluses, and a more cautious 10 mL/kg where no ventilator support exists.",
            "**Hydroxyethyl starch is contraindicated** (kidney injury and death); albumin is a second-line option in some septic patients and has no place as first-line resuscitation.",
            "Blood is the fluid of choice in haemorrhage; in massive transfusion aim for a balanced ratio of packed cells, plasma and platelets, and give tranexamic acid 1 g intravenously within 3 hours of trauma.",
          ],
        },
        {
          heading: "Harms of too much fluid",
          points: [
            "Pulmonary oedema and worsening oxygenation, particularly in cardiogenic shock, chronic anaemia and the elderly.",
            "Interstitial and gut oedema with delayed wound healing, ileus and abdominal compartment syndrome.",
            "Dilutional coagulopathy and hypothermia in trauma, both of which worsen bleeding.",
            "In children, fluid overload is a recognised cause of death, which is why boluses are smaller and reassessment after each is mandatory.",
          ],
        },
      ],
      mustDraw: ["A simple flow chart: assess perfusion, give a 250-500 mL challenge, reassess - improved, continue; not improved and signs of overload, stop and start a vasopressor."],
      markSplit: [
        { part: "Methods of assessing responsiveness", marks: 2 },
        { part: "Choice, dose and type of fluid", marks: 2 },
        { part: "Harms of excess fluid", marks: 1 },
      ],
      keywords: ["fluid responsiveness", "passive leg raise", "balanced crystalloid", "fluid overload", "tranexamic acid"],
    },
  ],
  mcqs: [
    {
      id: "emergency-shock-q1",
      stem: "A 24-year-old man after a road traffic crash has a pulse of 124/min, blood pressure 118/96 mmHg, cold extremities, capillary refill of 4 seconds and anxiety. What is the correct interpretation?",
      options: [
        "He is not in shock because the systolic blood pressure is normal",
        "He is in compensated hypovolaemic shock with a narrow pulse pressure",
        "He has neurogenic shock from a spinal injury",
        "He has an anxiety reaction to the accident",
        "He has cardiogenic shock from a cardiac contusion",
      ],
      answer: 1,
      explanation:
        "A narrow pulse pressure of 22 mmHg with tachycardia, cold peripheries and delayed capillary refill is compensated (class II) hypovolaemic shock, in which vasoconstriction maintains the systolic pressure while stroke volume falls, so the diagnosis is made before hypotension appears. Insisting on a low systolic reading before diagnosing shock is precisely the error that leads to late resuscitation in young trauma patients. Neurogenic shock produces warm dry skin with bradycardia and a wide pulse pressure. Anxiety does not delay capillary refill, and cardiogenic shock would show raised neck veins and crackles rather than the empty, vasoconstricted picture described.",
      difficulty: "moderate",
    },
    {
      id: "emergency-shock-q2",
      stem: "A 62-year-old man with septic shock from pneumonia remains at 82/48 mmHg after 30 mL/kg of Ringer lactate. Lactate is 4.6 mmol/L. What is the next step?",
      options: [
        "Give a further 30 mL/kg of crystalloid",
        "Start noradrenaline titrated to a mean arterial pressure of 65 mmHg",
        "Start dopamine at 10 microgram/kg/min",
        "Give 500 mL of hydroxyethyl starch",
        "Transfuse two units of packed red cells",
      ],
      answer: 1,
      explanation:
        "Once adequate fluid resuscitation has failed to restore perfusion, noradrenaline is the first-line vasopressor and is titrated to a mean arterial pressure of 65 mmHg, and it may be started peripherally while central access is obtained. Repeating another 30 mL/kg risks pulmonary oedema without improving perfusion in a patient who has already declared himself fluid-unresponsive. Dopamine causes significantly more arrhythmias and higher mortality than noradrenaline in septic shock. Starches are contraindicated because of kidney injury and increased mortality, and transfusion is not indicated in septic shock unless the haemoglobin is below 7 g/dL.",
      difficulty: "moderate",
    },
    {
      id: "emergency-shock-q3",
      stem: "A 58-year-old man with an inferior wall myocardial infarction becomes hypotensive at 84/60 mmHg with clear lung fields and a raised jugular venous pressure. What is the most appropriate immediate treatment?",
      options: [
        "Sublingual nitroglycerin followed by intravenous furosemide",
        "A cautious intravenous fluid bolus and avoidance of nitrates",
        "Intravenous furosemide 40 mg and fluid restriction",
        "Intravenous morphine 5 mg and observation",
        "Immediate synchronised cardioversion",
      ],
      answer: 1,
      explanation:
        "Hypotension with raised neck veins and clear lungs after an inferior infarct is right ventricular infarction, which is preload-dependent, so it is treated with fluid loading and by scrupulously avoiding nitrates, diuretics and morphine, all of which reduce preload and can cause profound collapse. Nitroglycerin in this setting is the classic examination trap and a genuine cause of cardiac arrest. Furosemide worsens an already underfilled right ventricle. Cardioversion is for an unstable tachyarrhythmia, which is not described here.",
      difficulty: "hard",
    },
    {
      id: "emergency-shock-q4",
      stem: "A 6-year-old boy weighing 20 kg with severe gastroenteritis has sunken eyes, cold peripheries, capillary refill of 5 seconds and a pulse of 160/min. What is the correct initial fluid?",
      options: [
        "200-400 mL of Ringer lactate as a bolus over 5-20 minutes, then reassess",
        "600 mL of Ringer lactate over 20 minutes",
        "100 mL of 5% dextrose over 30 minutes",
        "20 mL/kg of hydroxyethyl starch",
        "Oral rehydration solution only, since he is conscious",
      ],
      answer: 0,
      explanation:
        "A shocked child receives 10-20 mL/kg of isotonic crystalloid as a bolus with reassessment after each, which for 20 kg is 200-400 mL, repeated as required. Giving 30 mL/kg at once exceeds the recommended bolus and risks fluid overload, which is a recognised cause of death in children. Dextrose 5% is hypotonic, distributes out of the intravascular space and does not resuscitate, besides causing hyponatraemia. Starch is contraindicated at any age, and oral rehydration is appropriate for some dehydration but not for a child in decompensated shock with a 5-second capillary refill.",
      difficulty: "moderate",
    },
    {
      id: "emergency-shock-q5",
      stem: "A 19-year-old woman on day 5 of a febrile illness has a pulse of 118/min, blood pressure 96/80 mmHg, cold clammy hands, haematocrit that has risen from 38% to 48% and platelets of 42,000/microlitre. What is the diagnosis and correct action?",
      options: [
        "Septic shock; give 30 mL/kg crystalloid and antibiotics",
        "Dengue shock syndrome; give isotonic crystalloid titrated to pulse pressure and haematocrit",
        "Immune thrombocytopenia; transfuse platelets",
        "Haemorrhagic shock; transfuse packed red cells",
        "Anaphylaxis; give adrenaline 0.5 mg IM",
      ],
      answer: 1,
      explanation:
        "A narrow pulse pressure of 16 mmHg with a rising haematocrit and falling platelets on day 5 of fever is dengue shock syndrome from plasma leak in the critical phase, and treatment is isotonic crystalloid titrated carefully against pulse pressure, haematocrit and urine output, since both under- and over-transfusion kill. A blanket 30 mL/kg approach belongs to septic shock and causes dangerous fluid overload once the leak reverses. Platelet transfusion is not indicated for a count of 42,000 without bleeding and does not treat the shock. There is no evidence of bleeding here - the haematocrit is rising, not falling - and nothing suggests anaphylaxis.",
      difficulty: "moderate",
    },
    {
      id: "emergency-shock-q6",
      stem: "Which single bedside finding best distinguishes obstructive shock from hypovolaemic shock?",
      options: [
        "Cold peripheries",
        "Tachycardia",
        "Raised jugular venous pressure with clear lung fields",
        "Delayed capillary refill",
        "Oliguria",
      ],
      answer: 2,
      explanation:
        "Raised neck veins with clear lungs point to a mechanical obstruction to filling or outflow - tension pneumothorax, tamponade or massive pulmonary embolism - all of which will worsen if treated with fluid alone and need decompression, drainage or thrombolysis. Cold peripheries, tachycardia, delayed capillary refill and oliguria are common to every type of shock and therefore have no discriminating value. This is why the neck veins and lung fields are examined before a fluid bolus is prescribed.",
      difficulty: "easy",
    },
    {
      id: "emergency-shock-q7",
      stem: "A 30-year-old woman with a spinal injury at T4 after a fall has a blood pressure of 80/50 mmHg with a pulse of 52/min, warm dry pink extremities and no external bleeding. What is the most likely diagnosis?",
      options: [
        "Haemorrhagic shock from an occult abdominal injury",
        "Neurogenic shock",
        "Septic shock",
        "Cardiogenic shock",
        "Vasovagal syncope",
      ],
      answer: 1,
      explanation:
        "Hypotension with bradycardia and warm, dry, well-perfused skin after a high spinal injury is neurogenic shock, caused by loss of sympathetic outflow with unopposed vagal tone; management is fluids followed by noradrenaline and atropine for symptomatic bradycardia. Haemorrhagic shock produces tachycardia with cold clammy skin, though occult bleeding must still be excluded before settling on this diagnosis. Septic shock requires an infective source and evolves over hours to days, not immediately after a fall. Cardiogenic shock gives raised neck veins and crackles, and vasovagal syncope is transient and resolves on lying flat.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "emergency-shock-c1",
      front: "Define shock and name the three clinical windows of perfusion.",
      back: "Acute circulatory failure with inadequate tissue oxygen delivery. Windows: skin (capillary refill, mottling), brain (sensorium) and kidney (urine output).",
    },
    {
      id: "emergency-shock-c2",
      front: "Why is hypotension a late sign of shock?",
      back: "Compensatory tachycardia and vasoconstriction maintain systolic pressure until about 30% of blood volume is lost, especially in the young and in pregnancy.",
    },
    {
      id: "emergency-shock-c3",
      front: "Shock index: formula and threshold.",
      back: "Heart rate divided by systolic BP. Above 0.9 predicts significant blood loss and need for transfusion before the BP falls.",
    },
    {
      id: "emergency-shock-c4",
      front: "The four types of shock with one physical sign each.",
      back: "Hypovolaemic (flat neck veins), distributive (warm peripheries, wide pulse pressure), cardiogenic (raised JVP with crackles), obstructive (raised JVP with clear lungs).",
    },
    {
      id: "emergency-shock-c5",
      front: "Surviving Sepsis fluid and antibiotic targets.",
      back: "30 mL/kg balanced crystalloid within 3 hours; blood cultures then broad-spectrum antibiotics within 1 hour; noradrenaline to a MAP of 65 mmHg.",
    },
    {
      id: "emergency-shock-c6",
      front: "Paediatric fluid bolus in shock.",
      back: "10-20 mL/kg isotonic crystalloid over 5-20 minutes, reassess after each; use cautious 10 mL/kg boluses where there is no ventilator support (FEAST).",
    },
    {
      id: "emergency-shock-c7",
      front: "First-line vasopressor and why not dopamine.",
      back: "Noradrenaline 0.05-0.5 microgram/kg/min. Dopamine causes more arrhythmias and higher mortality in septic shock (SOAP II), and renal-dose dopamine does not protect kidneys.",
    },
    {
      id: "emergency-shock-c8",
      front: "Fluid rule in cardiogenic shock.",
      back: "A cautious 250 mL challenge only if the lungs are clear; stop at the first crackle. The treatment is reperfusion plus dobutamine or noradrenaline.",
    },
    {
      id: "emergency-shock-c9",
      front: "Right ventricular infarction: three drugs to avoid.",
      back: "Nitrates, diuretics and morphine - all reduce preload in a preload-dependent ventricle. Give fluid instead.",
    },
    {
      id: "emergency-shock-c10",
      front: "Passive leg raise: what it does and what it shows.",
      back: "Reversible auto-transfusion of about 300 mL; an improvement in BP and pulse pressure predicts fluid responsiveness without committing to a bolus.",
    },
    {
      id: "emergency-shock-c11",
      front: "Signs that a fluid bolus must be stopped.",
      back: "Rising JVP, new basal crackles, falling SpO2, rising respiratory rate, and an enlarging tender liver in a child.",
    },
    {
      id: "emergency-shock-c12",
      front: "Lactate thresholds in shock.",
      back: "Above 2 mmol/L indicates hypoperfusion; above 4 mmol/L marks high risk. Failure of lactate to fall with treatment predicts death.",
    },
  ],
  references: [
    "Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock, 2021",
    "Advanced Trauma Life Support (ATLS), 10th edition, American College of Surgeons - shock classification",
    "National Guidelines for Clinical Management of Dengue Fever, NVBDCP, MoHFW India, 2023",
    "FEAST trial - Maitland K et al., Mortality after Fluid Bolus in African Children with Severe Infection, NEJM 2011",
    "SOAP II trial - De Backer D et al., Comparison of Dopamine and Norepinephrine in the Treatment of Shock, NEJM 2010",
  ],
});
