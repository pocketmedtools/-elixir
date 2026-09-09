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
        "Diagnose arrest on **two findings only: unresponsive plus absent or abnormal breathing** - no other test is needed to start CPR. [ERC 2021]",
        "Do not delay compressions to feel for a pulse - the pulse check is unreliable and must never exceed 10 seconds. [ERC 2021]",
        "Trained staff misjudge the carotid pulse in about **4 of 10 attempts** and take far longer than the 10 seconds allowed - so breathing, not pulse, drives the decision.",
        "**Agonal gasping is not breathing** - slow, noisy, irregular gasps must be treated as cardiac arrest. [ERC 2021]",
        "Agonal gasps occur in up to **40% of arrests** in the first minutes - the single commonest reason a bystander or nurse fails to start CPR.",
        "Shout for help and send a **named person** for the defibrillator or AED and the emergency tray - unnamed instructions to a crowd produce no action.",
        "Send a second named person to call the ambulance - **108** in most Indian states.",
        "Put the patient supine on a **firm flat surface** - compressions on a soft mattress lose depth and are ineffective.",
        "A patient on a soft examination couch needs a backboard or the floor before compressions begin.",
        "**Start compressions within 10 seconds** of recognition. [AHA 2020]",
        "Every minute of delay to CPR reduces survival by about **10%**. [AHA 2020]",
        "Every minute of delay to defibrillation in VF reduces survival by a further **7-10%**. [AHA 2020]",
        "Chain of survival: early recognition and call for help, early CPR, early defibrillation, early advanced care, post-resuscitation care. [AHA 2020]",
        "A family clinic owns the **first three links** of the chain and must deliver them without waiting for an ambulance.",
      ],
    },
    {
      heading: "High-quality chest compressions and ventilation",
      points: [
        "Adult compression site: **lower half of the sternum**. [ERC 2021]",
        "Adult compression depth **5-6 cm** - shallower compressions do not generate cardiac output. [ERC 2021]",
        "Compression rate **100-120 per minute**. [ERC 2021]",
        "Allow **full chest recoil** between compressions - leaning prevents venous return. [ERC 2021]",
        "Keep interruptions in compressions **under 10 seconds**. [ERC 2021]",
        "Compression to ventilation ratio **30:2** until the airway is secured. [ERC 2021]",
        "Change the person compressing **every 2 minutes** (five cycles of 30:2). [ERC 2021]",
        "Measured compression depth falls after **60-90 seconds** even when the rescuer does not feel tired - hence the fixed 2-minute swap.",
        "Once a supraglottic airway or endotracheal tube is in, give **continuous compressions** at 100-120/min and stop pausing for ventilation. [AHA 2020]",
        "With an advanced airway ventilate **one breath every 6 seconds** (10 breaths per minute). [AHA 2020]",
        "Hyperventilation kills - it raises intrathoracic pressure and reduces venous return and coronary perfusion pressure.",
        "Hyperventilation is the **commonest error** of an anxious team with a bag-valve-mask.",
        "Give just enough volume to make the chest **rise visibly**, delivered over about one second. [ERC 2021]",
        "**Compression-only CPR** is acceptable for untrained lay rescuers and for the first minutes of an adult arrest. [AHA 2020]",
        "Teach compression-only CPR to family members and clinic staff who will not do mouth-to-mouth on a stranger.",
        "Waveform capnography guides CPR quality where available. [ERC 2021]",
        "End-tidal CO2 **below 10 mmHg** means compressions are inadequate. [ERC 2021]",
        "An abrupt end-tidal CO2 rise **above 35-40 mmHg** is the earliest sign of ROSC - it avoids an unnecessary rhythm check. [ERC 2021]",
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

topics.push({
  id: "emergency-poisoning",
  title: "Poisoning in Indian practice: organophosphate, paracetamol, corrosive, rodenticide and oleander",
  oneLiner:
    "Acute poisoning is managed by resuscitation and decontamination before diagnosis, by recognising the toxidrome at the bedside, and by giving the specific antidote in full dose - atropine titrated to a dry chest in organophosphate poisoning, N-acetylcysteine 150 mg/kg then 50 mg/kg then 100 mg/kg in paracetamol overdose, vitamin K1 in superwarfarin ingestion, and digoxin-specific antibody or temporary pacing in yellow oleander - while corrosives and hydrocarbons are never lavaged and aluminium phosphide has no antidote at all.",
  frequency: "core",
  keywords: [
    "organophosphate",
    "OP poisoning",
    "atropine",
    "atropinisation",
    "pralidoxime",
    "2-PAM",
    "carbamate",
    "paracetamol overdose",
    "acetaminophen",
    "N-acetylcysteine",
    "NAC",
    "Rumack-Matthew nomogram",
    "corrosive ingestion",
    "acid ingestion",
    "Zargar grading",
    "aluminium phosphide",
    "celphos",
    "zinc phosphide",
    "superwarfarin",
    "bromadiolone",
    "vitamin K1",
    "phytomenadione",
    "yellow phosphorus",
    "Ratol paste",
    "yellow oleander",
    "Thevetia peruviana",
    "Cerbera odollam",
    "digoxin Fab",
    "activated charcoal",
    "gastric lavage",
    "toxidrome",
    "Peradeniya score",
    "intermediate syndrome",
    "naloxone",
    "medico-legal case",
  ],
  sections: [
    {
      heading: "The first ten minutes: resuscitate, decontaminate, then diagnose",
      points: [
        "**Treat the patient, not the poison: airway, breathing, circulation, disability and a capillary glucose come before any attempt to name the compound.** A poisoned patient dies of an obstructed airway, aspiration, hypoxia, hypotension, an arrhythmia, a seizure or hypoglycaemia, and every one of these is treatable without knowing the molecule.",
        "**Give the universal antidotes to any unconscious poisoned adult: oxygen to keep SpO2 94-98%, dextrose 25 g IV (50 mL of 50% dextrose, or 100 mL of 25% dextrose, through a large vein) if the glucose is below 70 mg/dL or cannot be measured, naloxone 0.4-2 mg IV repeated every 2-3 minutes to a maximum of 10 mg if the respiratory rate is below 12 with pinpoint pupils, and thiamine 100 mg IV in the malnourished or alcoholic.** In children, dextrose is **2 mL/kg of 10% dextrose IV** and naloxone is **0.01 mg/kg IV**, escalating to 0.1 mg/kg if there is no response.",
        "Protect yourself and the room first in organophosphate and in any liquid pesticide: **wear gloves and an apron, strip all clothing including underclothes, and wash the skin and hair with soap and copious water**, because staff have been poisoned by handling a soaked patient and because unwashed skin keeps re-dosing the patient for hours.",
        "**Gastric lavage has almost no place.** It is considered only within 1 hour of a life-threatening ingestion, in a patient with a protected airway, and it is absolutely contraindicated after corrosives, hydrocarbons such as kerosene, and in a drowsy patient without a cuffed tube. Induced emesis, salt water, milk and the various village remedies are forbidden and cause aspiration.",
        "**Activated charcoal 1 g/kg (adult 50 g, child 25 g) as a single dose within 1 hour of ingestion is the only decontamination that still earns marks**, and it is useless or dangerous for iron, lithium, alcohols, acids and alkalis, and hydrocarbons. **Multiple-dose activated charcoal, 50 g then 25 g every 4-6 hours, is specifically useful in yellow oleander, carbamazepine, dapsone, phenobarbitone, quinine and theophylline.**",
        "Take the history from whoever is present and keep the container: **the label gives the active ingredient and the concentration, and the concentration converts a volume into a dose**. Record the time of ingestion, the amount in mouthfuls (one adult mouthful is 20-30 mL), the intent, any co-ingested alcohol or tablets, and what was already given by a local practitioner.",
        "Every case of poisoning in India is a **medico-legal case**: make a timed, legible entry, preserve the bottle, vomitus and gastric aspirate in a labelled sealed container, inform the police in writing without delaying treatment, and never certify the intent yourself. Consent for treatment is never withheld from a life-saving intervention on medico-legal grounds.",
      ],
    },
    {
      heading: "Reading the toxidrome at the bedside",
      points: [
        "**Cholinergic (organophosphate, carbamate): pinpoint pupils, bradycardia, salivation, lacrimation, sweating, vomiting, diarrhoea, incontinence, wet noisy chest from bronchorrhoea, fasciculations and weakness.** Remember DUMBELS for the muscarinic half and remember that the nicotinic half - fasciculations, weakness, tachycardia, hypertension - is the half that stops the breathing.",
        "**Anticholinergic (dhatura or Datura seeds, atropine, antihistamines, tricyclics): dilated pupils, dry hot flushed skin, tachycardia, urinary retention, agitation and hallucinations** - hot as a hare, blind as a bat, dry as a bone, red as a beet, mad as a hatter. In rural India, Datura is eaten accidentally in adulterated flour or given criminally to travellers.",
        "**Opioid: pinpoint pupils with a respiratory rate below 12 and coma.** The combination of small pupils with a slow respiratory rate separates opioid from organophosphate, where the chest is wet and the patient is sweating rather than dry.",
        "**Sympathomimetic (amphetamine, cocaine, theophylline, thyroxine): dilated pupils, tachycardia, hypertension, sweating and agitation** - the sweating is what distinguishes it from the anticholinergic toxidrome, where the skin is dry.",
        "**Cardiac glycoside (yellow oleander, digoxin): vomiting, bradycardia, any arrhythmia, yellow-green visual haloes and hyperkalaemia.** Hyperkalaemia in acute glycoside poisoning is a marker of severity, and a serum potassium above 5.5 mmol/L predicts death without antibody therapy.",
        "Bedside clues that name the poison faster than any test: **the garlic or kerosene smell of an organophosphate formulation, the decaying-fish or garlic smell of phosphine from aluminium phosphide, burns around the mouth in a corrosive, and a bitter almond smell in cyanide**. Check the axillae for sweating and the chest for crackles before you commit to a toxidrome.",
      ],
    },
    {
      heading: "Organophosphate and carbamate poisoning: atropine to a dry chest, then pralidoxime",
      points: [
        "Organophosphates irreversibly phosphorylate acetylcholinesterase, and the enzyme then ages, after which oximes no longer work; **carbamates carbamylate the enzyme reversibly, recover in 24-48 hours, and do not need pralidoxime**. Confirmation, where available, is a red cell acetylcholinesterase or a plasma pseudocholinesterase below 50% of normal, but treatment is always started on the clinical picture.",
        "**Atropine, adult: give 1.8-3 mg IV as a bolus (that is 3-5 ampoules of 0.6 mg), then reassess at 5 minutes, and double the dose at each 5-minute reassessment - 3, 6, 12, 24 mg - until atropinisation is reached.** Under-dosing by giving 0.6 mg every 15 minutes is the commonest fatal error; severe poisoning may need a cumulative 50-100 mg or more in the first hours.",
        "**The end-points of atropinisation are all five together: a clear chest with no crackles or wheeze, a heart rate above 80 per minute, a systolic blood pressure above 80 mmHg, dry axillae, and pupils no longer pinpoint.** The chest and the axillae are the ones that matter - **do not stop atropine because the pupils are still small or because the heart rate has reached 100**, and never titrate atropine to pupil size alone.",
        "**After atropinisation, run an atropine infusion at 10-20% of the total loading dose per hour** (for example, if 30 mg were needed to atropinise, run 3-6 mg per hour) and titrate hourly to the same end-points, tapering over 24-48 hours. **Watch for atropine toxicity: fever with dry skin, absent bowel sounds, urinary retention, delirium and a heart rate above 140** - stop the infusion, wait, and restart at half the rate.",
        "**Atropine, paediatric: 0.02-0.05 mg/kg IV as the first dose (minimum 0.1 mg), doubled every 5 minutes to the same end-points**, then an infusion at 10-20% of the loading dose per hour. There is no maximum dose in poisoning.",
        "**Pralidoxime, adult: 30 mg/kg (usually 1-2 g) IV in 100 mL normal saline over 15-30 minutes as a loading dose, followed by a continuous infusion of 8-10 mg/kg/hour (about 500 mg/hour) for at least 24 hours and until the patient is off atropine and breathing normally.** Where an infusion pump is not available, give **1 g IV every 4-6 hours**. **Paediatric pralidoxime is 25-50 mg/kg IV over 30 minutes, then 10-20 mg/kg/hour.**",
        "**Give pralidoxime only after atropine has been started, never before and never instead.** Rapid injection causes hypertension, tachycardia and laryngospasm, so it is always diluted and infused. It is renally cleared and the dose is reduced in renal failure.",
        "**Intermediate syndrome appears 24-96 hours after apparent recovery: proximal limb, neck flexor and respiratory muscle weakness with cranial nerve palsies, and it needs ventilation, not more atropine.** Test it at the bedside by asking the patient to lift the head off the pillow. **Organophosphate-induced delayed polyneuropathy is a distal sensorimotor neuropathy at 2-3 weeks and has no specific treatment.**",
        "**Never use succinylcholine to intubate an organophosphate-poisoned patient** - it is metabolised by the same cholinesterase and produces a block lasting hours; use a non-depolarising agent such as rocuronium 1 mg/kg. Aminoglycosides and morphine are also avoided because they worsen neuromuscular weakness.",
      ],
    },
    {
      heading: "Paracetamol overdose and N-acetylcysteine",
      points: [
        "**A single acute ingestion above 150 mg/kg, or above 7.5 g in an adult, is potentially hepatotoxic**; the thresholds fall to 75-100 mg/kg in the malnourished, the chronic alcoholic, the patient on enzyme-inducing drugs such as phenytoin, carbamazepine, rifampicin or isoniazid, and in anorexia. Paracetamol is depleted of glutathione and the reactive metabolite NAPQI causes centrilobular necrosis.",
        "The clinical course deceives: **stage 1 (0-24 hours) is nausea and vomiting or nothing at all, stage 2 (24-72 hours) brings right upper quadrant pain with rising transaminases and INR, stage 3 (72-96 hours) is fulminant hepatic failure with encephalopathy, and stage 4 is recovery or death.** A well-looking patient at 6 hours proves nothing.",
        "**Draw the paracetamol level at 4 hours after ingestion, never earlier, and plot it on the Rumack-Matthew nomogram; the treatment line runs from 150 microgram/mL at 4 hours to 37.5 microgram/mL at 12 hours.** If the time of ingestion is unknown, if the ingestion was staggered over more than an hour, or if the level cannot be obtained within 8 hours, **treat first and ask questions afterwards**.",
        "**N-acetylcysteine intravenously, the 21-hour regimen: 150 mg/kg in 200 mL of 5% dextrose over 60 minutes, then 50 mg/kg in 500 mL of 5% dextrose over 4 hours, then 100 mg/kg in 1000 mL of 5% dextrose over 16 hours - a total of 300 mg/kg over 21 hours.** The first bag was formerly given over 15 minutes; giving it over 60 minutes halves the anaphylactoid reactions without losing efficacy.",
        "**Oral N-acetylcysteine, where the intravenous drug is unavailable: 140 mg/kg loading, then 70 mg/kg every 4 hours for 17 doses (72 hours total).** If the patient vomits within an hour of a dose, repeat that dose after an antiemetic such as ondansetron.",
        "**N-acetylcysteine is nearly 100% protective when started within 8 hours of ingestion, and it is still given after 24 hours and in established liver failure, where it improves survival.** Do not withhold it because the patient presented late.",
        "**An anaphylactoid reaction to the first bag - flushing, urticaria, wheeze - is rate-related, not allergic: stop the infusion, give chlorphenamine 10 mg IV (with salbutamol nebulisation for wheeze), and restart at a slower rate.** It is not a reason to abandon treatment.",
        "**Refer for transplant assessment using the King's College criteria: arterial pH below 7.30 after resuscitation, or the triad of INR above 6.5, creatinine above 3.4 mg/dL and grade III-IV encephalopathy.** A rising lactate and a rising INR on day 3 are the practical clinic warnings; check INR, creatinine, ALT, glucose and pH.",
      ],
    },
    {
      heading: "Corrosive ingestion: the value is in what you do not do",
      points: [
        "Acids (toilet and drain cleaners containing hydrochloric or sulphuric acid) cause **coagulative necrosis with an eschar that limits depth and injures the stomach preferentially**; alkalis (caustic soda, lye, button batteries) cause **liquefactive necrosis that burrows deeply and injures the oesophagus preferentially**. In India acid ingestion predominates, both deliberate and accidental from decanting cleaners into drink bottles.",
        "**Do not induce vomiting, do not pass a gastric lavage tube, do not give activated charcoal, and do not attempt neutralisation with milk, vinegar or bicarbonate** - re-exposing the mucosa and generating heat converts a survivable burn into a perforation, and charcoal blinds the endoscopist.",
        "**The airway is the emergency: stridor, hoarseness, drooling or oropharyngeal oedema means early intubation by the most experienced person available, or a surgical airway.** Oedema progresses over hours, so intubate on the trend rather than waiting for failure; blind nasal intubation is dangerous.",
        "Keep the patient **nil by mouth, give intravenous fluids, give opioid analgesia, give a proton pump inhibitor intravenously, and give antibiotics only if there is perforation or mediastinitis**. Steroids are not given routinely as they do not prevent stricture and may mask perforation.",
        "**The absence of oral burns does not exclude oesophageal injury and the presence of oral burns does not prove it** - about a third of patients with significant oesophageal burns have a normal-looking mouth, so the decision to scope is based on symptoms and the substance, not on the lips.",
        "**Upper gastrointestinal endoscopy between 12 and 48 hours grades the burn (Zargar grade I to IV) and predicts stricture**; scoping before 12 hours underestimates and after 48 hours risks perforation. Erect chest and abdominal radiographs look for free air and mediastinal air. **Grade IIb and III burns are the ones that stricture, typically at 3-6 weeks, and need dilatation programmes.**",
        "Refer every deliberate corrosive ingestion and every symptomatic accidental one to a centre with endoscopy and surgery; long-term risks are stricture, gastric outlet obstruction, and **oesophageal carcinoma with a 1000-fold increased risk decades later**, so these patients need lifelong follow-up.",
      ],
    },
    {
      heading: "Rodenticides and yellow oleander",
      points: [
        "**Aluminium phosphide (Celphos, Quickphos, the wheat pill) releases phosphine gas on contact with gastric acid and moisture; a single 3 g tablet contains enough to kill an adult.** It presents with vomiting, a garlic or decaying-fish smell, profound refractory hypotension, severe metabolic acidosis, arrhythmias and multi-organ failure, with a mortality of 60-90%. **There is no antidote.**",
        "Aluminium phosphide is treated supportively and aggressively: **decontamination with coconut oil and sodium bicarbonate lavage (the oil is said to retard phosphine release and the bicarbonate to reduce acid-driven hydrolysis), high-flow oxygen, large-volume crystalloid, noradrenaline for the vasoplegic shock, sodium bicarbonate for acidosis, magnesium sulphate for arrhythmias, and intensive care.** Ventilate the room and avoid mouth-to-mouth, because the exhaled gas is toxic to the rescuer.",
        "**Superwarfarin rodenticides (bromadiolone, brodifacoum) are long-acting vitamin K antagonists with a half-life of weeks.** A single small accidental paediatric ingestion usually needs only an INR at 24 and 48 hours. **In bleeding, give vitamin K1 (phytomenadione) 10 mg by slow intravenous injection over at least 20 minutes plus fresh frozen plasma 15 mL/kg or a prothrombin complex concentrate; then continue oral vitamin K1 10-50 mg daily for weeks to months, guided by the INR.** Prophylactic vitamin K in the asymptomatic patient masks the INR and is not given.",
        "**Yellow phosphorus paste (Ratol) is deceptively benign at first and then destroys the liver**: phase one is vomiting with luminescent, garlic-smelling, so-called smoking stools; phase two is a symptom-free window of 1-3 days; phase three is fulminant hepatic failure with renal failure and coagulopathy at day 4-8. There is no antidote and the only definitive treatment is liver transplantation, so refer early to a liver unit.",
        "**Yellow oleander (Thevetia peruviana) and the suicide tree (Cerbera odollam) contain cardiac glycosides**; two to five chewed seeds can kill. The picture is vomiting, bradycardia, any degree of atrioventricular block, ventricular ectopy or bidirectional ventricular tachycardia, and **hyperkalaemia**, which reflects the sodium-potassium pump blockade rather than a potassium load.",
        "**Manage oleander with continuous cardiac monitoring, multiple-dose activated charcoal 50 g then 25 g every 6 hours, atropine 0.6-1.2 mg IV for symptomatic bradycardia (repeatable to 3 mg), correction of hypokalaemia and magnesium, and temporary transvenous pacing for high-grade block; digoxin-specific antibody fragments are the definitive antidote where affordable.** **Avoid intravenous calcium in glycoside toxicity** by convention, and treat hyperkalaemia with insulin-dextrose and bicarbonate instead.",
        "For every one of these, the deciding factor in Indian practice is transfer: **a clinic can atropinise, load pralidoxime, start N-acetylcysteine, give vitamin K and charcoal, and secure an airway, but ventilators, endoscopy, pacing and dialysis are elsewhere** - so call the receiving unit and send a written note of every drug, dose and time with the patient.",
      ],
    },
  ],
  tables: [
    {
      heading: "Toxidromes at the bedside",
      columns: ["Toxidrome", "Pupils", "Skin", "Pulse", "Typical Indian agents", "First move"],
      rows: [
        ["Cholinergic", "Pinpoint", "Wet and sweaty", "Slow (may be fast if nicotinic)", "Chlorpyrifos, monocrotophos, dichlorvos, carbamates", "Atropine 1.8-3 mg IV, doubling every 5 min"],
        ["Anticholinergic", "Dilated", "Dry, hot, flushed", "Fast", "Datura seeds, antihistamines, tricyclics", "Cooling, benzodiazepines, fluids; physostigmine rarely"],
        ["Opioid", "Pinpoint", "Normal or cool", "Slow or normal", "Heroin, tramadol, codeine syrups", "Naloxone 0.4-2 mg IV, repeat to 10 mg"],
        ["Sympathomimetic", "Dilated", "Wet and sweaty", "Fast", "Amphetamine, cocaine, theophylline, thyroxine", "Benzodiazepines, cooling, fluids"],
        ["Cardiac glycoside", "Normal", "Normal", "Slow with blocks", "Yellow oleander, Cerbera odollam, digoxin", "Monitor, charcoal, atropine, pacing, Fab"],
        ["Sedative-hypnotic", "Normal or small", "Normal", "Normal or slow", "Benzodiazepines, alcohol, barbiturates", "Airway and supportive care; flumazenil rarely"],
      ],
    },
    {
      heading: "Antidotes with exact doses",
      columns: ["Poison", "Antidote", "Adult dose", "Paediatric dose", "Repeat or end-point"],
      rows: [
        ["Organophosphate", "Atropine", "1.8-3 mg IV bolus, doubled every 5 min", "0.02-0.05 mg/kg IV (min 0.1 mg), doubled every 5 min", "Clear chest, HR above 80, SBP above 80, dry axillae; then infuse 10-20% of loading dose per hour"],
        ["Organophosphate", "Pralidoxime", "30 mg/kg (1-2 g) IV over 15-30 min, then 8-10 mg/kg/h", "25-50 mg/kg IV over 30 min, then 10-20 mg/kg/h", "Continue at least 24 h and until off atropine; never before atropine"],
        ["Paracetamol", "N-acetylcysteine IV", "150 mg/kg over 1 h, then 50 mg/kg over 4 h, then 100 mg/kg over 16 h", "Same mg/kg in smaller fluid volumes (3 mL/kg, 7 mL/kg, 14 mL/kg)", "Total 300 mg/kg over 21 h; extend if INR or ALT still rising"],
        ["Paracetamol", "N-acetylcysteine oral", "140 mg/kg loading, then 70 mg/kg 4-hourly", "Same mg/kg", "17 maintenance doses over 72 h; repeat a dose vomited within 1 h"],
        ["Opioid", "Naloxone", "0.4-2 mg IV every 2-3 min, max 10 mg", "0.01 mg/kg IV, escalate to 0.1 mg/kg", "Titrate to a respiratory rate above 12, not to full wakefulness"],
        ["Superwarfarin", "Vitamin K1 (phytomenadione)", "10 mg slow IV over 20 min plus FFP 15 mL/kg if bleeding", "0.25-0.3 mg/kg IV, max 10 mg", "Then oral 10-50 mg daily for weeks, guided by INR"],
        ["Yellow oleander / digoxin", "Digoxin-specific Fab", "Empirical 5-10 vials IV in acute poisoning", "Same, by estimated load", "Repeat once if arrhythmia persists; pace if Fab unavailable"],
        ["Benzodiazepine", "Flumazenil", "0.2 mg IV over 15 s, repeat to 1 mg", "0.01 mg/kg IV, max 0.2 mg per dose", "Avoid in mixed overdose or chronic use - precipitates seizures"],
        ["Methanol / ethylene glycol", "Ethanol or fomepizole", "Fomepizole 15 mg/kg IV then 10 mg/kg 12-hourly", "Same mg/kg", "With haemodialysis and folinic acid or thiamine and pyridoxine"],
        ["Aluminium phosphide", "None exists", "Supportive: fluids, noradrenaline, bicarbonate, magnesium, ICU", "Same principles", "Coconut oil and bicarbonate lavage; ventilate the room"],
      ],
    },
    {
      heading: "Organophosphate versus carbamate poisoning",
      columns: ["Feature", "Organophosphate", "Carbamate"],
      rows: [
        ["Enzyme binding", "Irreversible, then ages", "Reversible carbamylation"],
        ["Duration of illness", "Days to weeks", "Usually under 24-48 hours"],
        ["Central nervous system effects", "Marked - coma and seizures", "Less, as it crosses the blood-brain barrier poorly"],
        ["Atropine", "Essential, often in very large cumulative doses", "Essential, but for a shorter period"],
        ["Pralidoxime", "Indicated, and useless once the enzyme has aged", "Not indicated routinely"],
        ["Intermediate syndrome", "Occurs at 24-96 hours", "Does not occur"],
        ["Delayed neuropathy", "Occurs at 2-3 weeks with certain agents", "Does not occur"],
      ],
    },
  ],
  redFlags: [
    "A wet, crackling chest with pinpoint pupils and sweating - organophosphate poisoning; start atropine 1.8-3 mg IV now and double it every 5 minutes rather than waiting for a cholinesterase level.",
    "Inability to lift the head off the pillow, or a falling respiratory rate, 24-96 hours after organophosphate poisoning - intermediate syndrome; this needs a ventilator, and more atropine will not help.",
    "Any deliberate paracetamol ingestion above 150 mg/kg, or a staggered ingestion, or an unknown time of ingestion - start N-acetylcysteine immediately and do not wait for a drug level.",
    "Stridor, drooling, hoarseness or oropharyngeal oedema after a corrosive - the airway will close over hours; intubate early or transfer immediately with an airway plan, and never pass a lavage tube.",
    "Refractory hypotension with severe metabolic acidosis and a garlic or fish smell - aluminium phosphide; there is no antidote, so resuscitate hard and transfer to intensive care at once.",
    "Bradycardia with any degree of heart block plus a serum potassium above 5.5 mmol/L after eating seeds - yellow oleander; monitor continuously, give charcoal and atropine, and arrange pacing or digoxin-specific Fab.",
    "Bleeding or an INR above 4 days after a rodenticide ingestion - superwarfarin; give vitamin K1 10 mg slow IV plus plasma, and plan weeks of oral vitamin K.",
  ],
  pearls: [
    "Atropine is titrated to a clear chest and dry axillae, never to pupil size. A patient with pinpoint pupils and a dry chest is adequately atropinised; a patient with normal pupils and a wet chest is not.",
    "Double the atropine dose every 5 minutes. Giving 0.6 mg every 15 minutes to a severely poisoned farmer is the classic way to lose the patient while appearing to treat him.",
    "Pralidoxime always follows atropine and never replaces it, is infused rather than pushed, and is pointless once the enzyme has aged - which is why it is loaded early.",
    "N-acetylcysteine is nearly completely protective within 8 hours, is still worth giving at 24 hours and beyond, and an anaphylactoid reaction to the first bag is treated by slowing the infusion, not by stopping treatment.",
    "In corrosive ingestion the marks are for what you withhold: no emesis, no lavage, no charcoal, no neutralisation. Normal lips do not exclude a burnt oesophagus.",
    "Aluminium phosphide has no antidote and kills more than half its victims; the only real interventions are early large-volume resuscitation, noradrenaline, bicarbonate and an intensive care bed.",
    "Hyperkalaemia in oleander or digoxin poisoning is a severity marker, and calcium is avoided; treat with insulin-dextrose, charcoal, pacing and Fab.",
    "Never use succinylcholine in organophosphate poisoning - the block lasts hours because the same enzyme is inhibited.",
    "Every poisoning is a medico-legal case: preserve the container and the gastric aspirate, inform the police in writing, document the times, and never delay treatment for paperwork.",
  ],
  theory: [
    {
      id: "emergency-poisoning-t1",
      paper: "III",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 28-year-old farmer is brought to your rural clinic one hour after consuming an unknown pesticide. He is drowsy, sweating, with pinpoint pupils and a wet chest. Discuss the diagnosis and management in detail, with doses.",
      openingLines: [
        "This is acute organophosphate poisoning, an anticholinesterase poisoning producing a cholinergic crisis from accumulated acetylcholine at muscarinic, nicotinic and central receptors, and it is a medico-legal emergency.",
        "Management is simultaneous resuscitation, skin and gut decontamination, aggressive atropinisation titrated to a clear chest, pralidoxime for the nicotinic effects, and early planning for ventilation and transfer.",
      ],
      answer: [
        {
          heading: "1. Immediate resuscitation and staff protection",
          points: [
            "Wearing gloves and apron, position the patient in the left lateral position, suction the airway, give high-flow oxygen and attach a monitor and pulse oximeter.",
            "Secure two intravenous lines, check capillary glucose, and give dextrose 25 g IV (50 mL of 50% dextrose) if it is low or unmeasurable.",
            "Remove all clothing and wash the skin and hair with soap and water; unwashed skin continues to absorb poison and has poisoned staff.",
            "Assess the airway for the need to intubate: GCS below 8, a respiratory rate below 8 or above 30, SpO2 below 90% on oxygen, or copious secretions that cannot be cleared.",
          ],
        },
        {
          heading: "2. Confirming the diagnosis",
          points: [
            "The cholinergic toxidrome - miosis, bradycardia, salivation, lacrimation, sweating, vomiting, diarrhoea, incontinence, bronchorrhoea, bronchospasm - is diagnostic at the bedside; DUMBELS.",
            "Nicotinic features are fasciculations, weakness of the neck flexors and limbs, tachycardia and hypertension, and these predict respiratory failure.",
            "Grade severity with the Peradeniya Organophosphorus Poisoning scale (0-3 mild, 4-7 moderate, 8-11 severe) using pupils, respiratory rate, heart rate, fasciculations, consciousness and seizures.",
            "Red cell acetylcholinesterase or plasma pseudocholinesterase below 50% of normal supports the diagnosis but treatment is never delayed for it; obtain the container and read the label for the compound and concentration.",
          ],
        },
        {
          heading: "3. Atropine, titrated",
          points: [
            "Give atropine 1.8-3 mg intravenously as a bolus, reassess at 5 minutes, and double the dose at every reassessment (3, 6, 12, 24 mg) until atropinisation.",
            "The end-points are a clear chest on auscultation, heart rate above 80 per minute, systolic blood pressure above 80 mmHg, dry axillae and pupils no longer pinpoint; the chest and axillae are the ones to trust.",
            "Then run an infusion at 10-20% of the total loading dose per hour, titrated hourly, and taper over 24-48 hours.",
            "Recognise atropine toxicity - fever with dry skin, absent bowel sounds, retention, delirium, heart rate above 140 - by stopping the infusion and restarting at half the rate.",
            "Paediatric dose is 0.02-0.05 mg/kg IV, minimum 0.1 mg, doubled every 5 minutes to the same end-points.",
          ],
        },
        {
          heading: "4. Pralidoxime and other measures",
          points: [
            "Pralidoxime 30 mg/kg (1-2 g) IV in 100 mL normal saline over 15-30 minutes, then an infusion of 8-10 mg/kg/hour, or 1 g IV every 4-6 hours if no pump is available, for at least 24 hours.",
            "Paediatric pralidoxime is 25-50 mg/kg over 30 minutes then 10-20 mg/kg/hour; it is renally cleared and reduced in renal failure.",
            "Pralidoxime is given only after atropine has been started and is always infused, since rapid injection causes hypertension and laryngospasm.",
            "Activated charcoal 50 g may be given once within one hour if the airway is protected; gastric lavage is not routine and induced emesis is forbidden.",
            "Treat seizures with lorazepam 4 mg IV (child 0.1 mg/kg, maximum 4 mg) or diazepam 5-10 mg IV; benzodiazepines also reduce central toxicity.",
          ],
        },
        {
          heading: "5. Complications, transfer and after-care",
          points: [
            "Anticipate aspiration pneumonitis, respiratory failure, arrhythmias including prolonged QT and torsades, pancreatitis and hyperglycaemia.",
            "Intermediate syndrome at 24-96 hours produces proximal, neck flexor and respiratory muscle weakness and needs ventilation; delayed polyneuropathy appears at 2-3 weeks.",
            "Avoid succinylcholine, aminoglycosides, morphine, phenothiazines and theophylline in these patients.",
            "Transfer to a ventilator bed with a written record of every dose and time, escorted with oxygen, suction, atropine and a self-inflating bag.",
            "Complete the medico-legal formalities, preserve the container and gastric aspirate, and arrange a psychiatric assessment and family counselling before discharge, since repeat attempts are common.",
          ],
        },
      ],
      mustDraw: [
        "A flow chart of the atropine doubling regimen with the five end-points of atropinisation.",
        "A table of the muscarinic, nicotinic and central features of the cholinergic toxidrome.",
      ],
      markSplit: [
        { part: "Resuscitation, decontamination and staff protection", marks: 2 },
        { part: "Diagnosis, toxidrome and severity grading", marks: 2 },
        { part: "Atropine dose, doubling and end-points", marks: 3 },
        { part: "Pralidoxime and adjuncts with doses", marks: 2 },
        { part: "Complications, transfer and medico-legal duties", marks: 1 },
      ],
      keywords: ["organophosphate", "atropinisation", "pralidoxime 30 mg/kg", "intermediate syndrome", "Peradeniya score"],
    },
    {
      id: "emergency-poisoning-t2",
      paper: "III",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write a short note on the management of acute paracetamol overdose, including the use of N-acetylcysteine.",
      openingLines: [
        "Paracetamol overdose causes dose-dependent centrilobular hepatic necrosis through the reactive metabolite NAPQI once glutathione stores are exhausted, and a single ingestion above 150 mg/kg or 7.5 g in an adult is potentially hepatotoxic.",
        "N-acetylcysteine replenishes glutathione and is close to completely protective if started within 8 hours of ingestion, so the decision to treat is clinical and never waits for a level that cannot be obtained.",
      ],
      answer: [
        {
          heading: "Assessment",
          points: [
            "Establish the time, the dose in mg/kg, whether the ingestion was single or staggered, and co-ingestants, particularly alcohol.",
            "Identify high-risk patients in whom the threshold falls to 75-100 mg/kg: chronic alcohol use, malnutrition, anorexia, and enzyme inducers such as phenytoin, carbamazepine, rifampicin and isoniazid.",
            "Recognise the four clinical stages, remembering that the patient looks well in the first 24 hours.",
            "Send paracetamol level at 4 hours or later, with ALT, INR, creatinine, glucose, arterial pH and lactate.",
          ],
        },
        {
          heading: "Decontamination and the decision to treat",
          points: [
            "Activated charcoal 50 g may be given if the patient presents within 1 hour of a substantial ingestion with a protected airway.",
            "Plot the 4-hour level on the Rumack-Matthew nomogram; the treatment line runs from 150 microgram/mL at 4 hours to 37.5 microgram/mL at 12 hours.",
            "Treat empirically without a level if the time is unknown, the ingestion was staggered, the presentation is beyond 8 hours, or the level cannot be obtained in time.",
          ],
        },
        {
          heading: "N-acetylcysteine regimens",
          points: [
            "Intravenous 21-hour regimen: 150 mg/kg in 200 mL of 5% dextrose over 60 minutes, then 50 mg/kg in 500 mL over 4 hours, then 100 mg/kg in 1000 mL over 16 hours, a total of 300 mg/kg.",
            "Oral regimen: 140 mg/kg loading followed by 70 mg/kg every 4 hours for 17 doses, repeating any dose vomited within an hour after an antiemetic.",
            "Extend the final infusion beyond 21 hours if the ALT is still rising, the INR is above 1.3, or paracetamol remains detectable.",
            "Anaphylactoid reactions are rate-related: stop, give chlorphenamine 10 mg IV, nebulise salbutamol for wheeze, and restart at a slower rate.",
          ],
        },
        {
          heading: "Monitoring, referral and prevention",
          points: [
            "Repeat ALT, INR, creatinine, glucose and pH at the end of the infusion and at 24 hours.",
            "Refer for transplant assessment on King's College criteria: arterial pH below 7.30 after resuscitation, or INR above 6.5 with creatinine above 3.4 mg/dL and grade III-IV encephalopathy.",
            "Manage hypoglycaemia, coagulopathy and encephalopathy supportively; avoid unnecessary fresh frozen plasma, which masks the prognostic INR.",
            "Every deliberate overdose needs psychiatric assessment, a risk assessment before discharge, and counselling about the danger of over-the-counter combination products containing paracetamol.",
          ],
        },
      ],
      mustDraw: [
        "The Rumack-Matthew nomogram with the treatment line from 150 microgram/mL at 4 hours to 37.5 microgram/mL at 12 hours.",
        "A three-step table of the intravenous N-acetylcysteine regimen with dose, volume and duration.",
      ],
      markSplit: [
        { part: "Risk assessment, stages and high-risk groups", marks: 1.5 },
        { part: "Nomogram and the decision to treat", marks: 1 },
        { part: "N-acetylcysteine regimens with exact doses", marks: 1.5 },
        { part: "Monitoring, King's College criteria and psychiatric follow-up", marks: 1 },
      ],
      keywords: ["paracetamol", "NAPQI", "N-acetylcysteine 150 mg/kg", "Rumack-Matthew", "King's College criteria"],
    },
  ],
  mcqs: [
    {
      id: "emergency-poisoning-q1",
      stem: "A 30-year-old man who drank chlorpyrifos 90 minutes ago has been given atropine 0.6 mg IV every 15 minutes for the last hour. He remains sweaty with coarse crackles throughout both lungs, a heart rate of 72 and pinpoint pupils. What is the most appropriate next step?",
      options: [
        "Continue 0.6 mg every 15 minutes until the pupils dilate",
        "Give atropine 1.8-3 mg IV as a bolus and double the dose every 5 minutes until the chest is clear and the axillae are dry",
        "Stop atropine and give pralidoxime 1 g IV alone",
        "Give glycopyrrolate instead, as it does not cross the blood-brain barrier",
        "Perform gastric lavage before giving any further atropine",
      ],
      answer: 1,
      explanation:
        "He is not atropinised: a wet chest and wet axillae mean the dose is far too small, and the correct regimen is a bolus of 1.8-3 mg doubled every 5 minutes until the chest is clear, the heart rate is above 80, the systolic pressure is above 80 and the axillae are dry. Continuing small fixed doses titrated to pupil size is the classic fatal error, since miosis persists long after adequate atropinisation. Pralidoxime never replaces atropine and is given only after atropine has been started, because it does not reverse the muscarinic bronchorrhoea that is drowning him. Glycopyrrolate does not treat the central effects and is only an adjunct. Gastric lavage 90 minutes after ingestion in an unprotected airway offers no benefit and risks aspiration.",
      difficulty: "moderate",
    },
    {
      id: "emergency-poisoning-q2",
      stem: "A 22-year-old woman took an unknown number of paracetamol tablets at an uncertain time yesterday evening. She is asymptomatic, and the laboratory cannot report a paracetamol level before tomorrow. What should you do?",
      options: [
        "Observe her and treat only if the ALT rises above 1000 U/L",
        "Give activated charcoal 50 g and discharge her with advice",
        "Start intravenous N-acetylcysteine 150 mg/kg over 1 hour now, then 50 mg/kg over 4 hours, then 100 mg/kg over 16 hours",
        "Wait for the level tomorrow and plot it on the Rumack-Matthew nomogram",
        "Give oral methionine and repeat the liver function tests in a week",
      ],
      answer: 2,
      explanation:
        "When the time of ingestion is unknown, the ingestion is staggered, or a level cannot be obtained in time, N-acetylcysteine is started empirically in the full 21-hour regimen of 150 mg/kg, then 50 mg/kg, then 100 mg/kg. Waiting for a transaminase rise means treating after the injury has already occurred, when protection is far less complete. Charcoal is useless this late and is not a substitute for the antidote. The nomogram is only valid for a single acute ingestion at a known time, so it cannot be applied here, and delaying a day forfeits the window in which N-acetylcysteine works. Methionine is an obsolete oral alternative and has no role when N-acetylcysteine is available.",
      difficulty: "moderate",
    },
    {
      id: "emergency-poisoning-q3",
      stem: "A 4-year-old boy has swallowed a mouthful of toilet cleaner. He is drooling, has burns on the lips and is hoarse. Which is the correct immediate management?",
      options: [
        "Pass a nasogastric tube and lavage with milk to neutralise the acid",
        "Give activated charcoal 25 g and induce vomiting",
        "Keep nil by mouth, secure the airway early, give intravenous fluids, analgesia and a proton pump inhibitor, and arrange endoscopy at 12-48 hours",
        "Give oral sodium bicarbonate solution and observe for 4 hours",
        "Start high-dose intravenous steroids to prevent stricture formation",
      ],
      answer: 2,
      explanation:
        "Corrosive ingestion is managed by withholding harmful interventions and protecting the airway: hoarseness and drooling predict progressive oedema and demand early intubation by the most experienced operator, with nil by mouth, fluids, analgesia and a proton pump inhibitor, and endoscopy between 12 and 48 hours to grade the burn. Lavage and neutralisation re-expose the mucosa and generate heat, converting a burn into a perforation. Charcoal does not bind corrosives and obscures the endoscopic view, and induced emesis is absolutely contraindicated. Bicarbonate is a neutralisation attempt with the same objection. Steroids do not prevent stricture, and may mask perforation, so they are not given routinely.",
      difficulty: "easy",
    },
    {
      id: "emergency-poisoning-q4",
      stem: "A 45-year-old man is brought in after eating a paste sold as a rat killer. Two hours later he has vomiting, a garlic-like smell on his breath, a blood pressure of 70/40 mmHg unresponsive to 2 litres of crystalloid, and an arterial pH of 7.09. Which statement is correct?",
      options: [
        "Aluminium phosphide poisoning has no antidote; treat with oxygen, fluids, noradrenaline, sodium bicarbonate and intensive care",
        "Give N-acetylcysteine 150 mg/kg, which is the specific antidote",
        "Give vitamin K1 10 mg IV, since all rodenticides are anticoagulants",
        "Give atropine 3 mg IV and pralidoxime 1 g IV",
        "Give calcium gluconate 10% 10 mL IV as the specific antidote",
      ],
      answer: 0,
      explanation:
        "Vomiting with a garlic or decaying-fish smell, refractory vasoplegic shock and severe metabolic acidosis after a rodenticide is aluminium phosphide poisoning, for which no antidote exists; management is high-flow oxygen, large-volume crystalloid, noradrenaline, sodium bicarbonate, magnesium for arrhythmias and intensive care, with coconut oil and bicarbonate lavage where feasible. N-acetylcysteine treats paracetamol and has been tried only as an unproven adjunct here. Vitamin K1 is the antidote for superwarfarin rodenticides such as bromadiolone, which cause bleeding days later rather than shock in two hours. Atropine and pralidoxime belong to organophosphate poisoning, where the picture is a wet chest with pinpoint pupils. Calcium gluconate is not an antidote to phosphine.",
      difficulty: "hard",
    },
    {
      id: "emergency-poisoning-q5",
      stem: "A 19-year-old woman ate several yellow oleander seeds four hours ago. Her pulse is 42 per minute, the ECG shows complete heart block, and the serum potassium is 6.2 mmol/L. Which of the following should be avoided?",
      options: [
        "Multiple-dose activated charcoal 50 g then 25 g every 6 hours",
        "Atropine 0.6-1.2 mg IV, repeated to a maximum of 3 mg",
        "Intravenous calcium gluconate to treat the hyperkalaemia",
        "Insulin with dextrose to shift potassium intracellularly",
        "Arrangement of temporary transvenous pacing",
      ],
      answer: 2,
      explanation:
        "In cardiac glycoside poisoning intravenous calcium is conventionally avoided, since the myocardium is already calcium-loaded from sodium-potassium pump inhibition and calcium is held to risk refractory contraction; hyperkalaemia is instead shifted with insulin and dextrose and bicarbonate, and definitively reversed by digoxin-specific antibody fragments. Multiple-dose activated charcoal is specifically effective in yellow oleander and reduces mortality. Atropine is the correct first drug for symptomatic bradycardia and high-grade block. Insulin-dextrose is the appropriate potassium-shifting measure here. Temporary pacing is the correct bridge when digoxin-specific Fab is unavailable, which is the usual situation in Indian district practice.",
      difficulty: "hard",
    },
  ],
  cards: [
    {
      id: "emergency-poisoning-c1",
      front: "Atropine regimen in organophosphate poisoning.",
      back: "Adult 1.8-3 mg IV bolus, doubled every 5 minutes until atropinised; child 0.02-0.05 mg/kg (minimum 0.1 mg) doubled every 5 minutes. Then infuse 10-20% of the total loading dose per hour.",
    },
    {
      id: "emergency-poisoning-c2",
      front: "The five end-points of atropinisation.",
      back: "Clear chest with no crackles, heart rate above 80/min, systolic BP above 80 mmHg, dry axillae, and pupils no longer pinpoint. Trust the chest and the axillae, never the pupils alone.",
    },
    {
      id: "emergency-poisoning-c3",
      front: "Pralidoxime dose and rules.",
      back: "Adult 30 mg/kg (1-2 g) IV over 15-30 minutes, then 8-10 mg/kg/hour, or 1 g IV every 4-6 hours, for at least 24 hours. Child 25-50 mg/kg then 10-20 mg/kg/hour. Always after atropine, always infused, never in carbamate poisoning.",
    },
    {
      id: "emergency-poisoning-c4",
      front: "Intravenous N-acetylcysteine 21-hour regimen.",
      back: "150 mg/kg in 200 mL of 5% dextrose over 60 minutes, then 50 mg/kg in 500 mL over 4 hours, then 100 mg/kg in 1000 mL over 16 hours - 300 mg/kg in total.",
    },
    {
      id: "emergency-poisoning-c5",
      front: "When is paracetamol ingestion potentially hepatotoxic?",
      back: "Above 150 mg/kg or 7.5 g in an adult; above 75-100 mg/kg in alcoholics, the malnourished, and those on phenytoin, carbamazepine, rifampicin or isoniazid.",
    },
    {
      id: "emergency-poisoning-c6",
      front: "Four things never done after a corrosive ingestion.",
      back: "No induced emesis, no gastric lavage, no activated charcoal, no attempt at neutralisation with milk, vinegar or bicarbonate. Endoscopy is done at 12-48 hours.",
    },
    {
      id: "emergency-poisoning-c7",
      front: "Superwarfarin rodenticide with bleeding.",
      back: "Vitamin K1 10 mg by slow IV injection over 20 minutes plus fresh frozen plasma 15 mL/kg or prothrombin complex, then oral vitamin K1 10-50 mg daily for weeks, guided by INR.",
    },
    {
      id: "emergency-poisoning-c8",
      front: "Intermediate syndrome.",
      back: "Proximal limb, neck flexor and respiratory muscle weakness 24-96 hours after organophosphate poisoning. Tested by asking the patient to lift the head off the pillow. Needs ventilation, not more atropine.",
    },
  ],
  references: [
    "Eddleston M, Buckley NA, Eyer P, Dawson AH. Management of acute organophosphorus pesticide poisoning, The Lancet 2008",
    "World Health Organization. Clinical management of acute pesticide intoxication: prevention of suicidal behaviours, WHO 2008",
    "National Poisons Information Centre, All India Institute of Medical Sciences, New Delhi - Standard Treatment Guidelines for Poisoning, 2022",
    "Standard Treatment Workflows of India, Volume on Emergency Medicine, ICMR and MoHFW, 2022 - poisoning workflows",
    "Rumack BH, Matthew H. Acetaminophen poisoning and toxicity, Pediatrics 1975 - the nomogram",
    "National Institute for Health and Care Excellence and Royal College of Emergency Medicine guidance on paracetamol overdose and the 21-hour acetylcysteine regimen, 2023",
    "Zargar SA et al. The role of fiberoptic endoscopy in the management of corrosive ingestion, Gastrointestinal Endoscopy 1991 - Zargar grading",
    "de Silva HA et al. Multiple-dose activated charcoal for treatment of yellow oleander poisoning, The Lancet 2003",
    "Mehrpour O, Jafarzadeh M, Abdollahi M. A systematic review of aluminium phosphide poisoning, Arhiv za Higijenu Rada i Toksikologiju 2012",
    "Goldfrank's Toxicologic Emergencies, 11th edition, 2019",
  ],
});

topics.push({
  id: "emergency-burns",
  title: "Burns: first aid, fluid estimation and referral",
  oneLiner:
    "A burn is assessed by cooling the wound with running water for 20 minutes while keeping the patient warm, by estimating burn surface area with the rule of nines or the patient's palm as 1%, by estimating depth, and by starting Ringer's lactate at 4 mL per kg per percent burn in the first 24 hours from the time of the burn with half given in the first 8 hours, titrated to a urine output of 0.5 mL/kg/hour in adults and 1 mL/kg/hour in children, with referral of any burn above 10% in an adult or 5% in a child and of all burns to the face, hands, feet, perineum or major joints.",
  frequency: "common",
  keywords: [
    "burns",
    "thermal injury",
    "scald",
    "rule of nines",
    "Wallace rule of nines",
    "Lund and Browder chart",
    "total body surface area",
    "TBSA",
    "Parkland formula",
    "Ringer lactate",
    "escharotomy",
    "inhalation injury",
    "carbon monoxide",
    "carboxyhaemoglobin",
    "silver sulfadiazine",
    "burn referral criteria",
    "chemical burn",
    "hydrofluoric acid",
    "Baux score",
    "burn first aid",
    "cling film",
    "tetanus prophylaxis",
  ],
  sections: [
    {
      heading: "First aid: the twenty minutes that change the wound",
      points: [
        "**Stop the burning process first: extinguish flames by stop-drop-and-roll or smothering, switch off the electrical supply before touching an electrical casualty, and brush off dry chemical powder before any water is applied.** Remove burnt clothing, nappies and all rings, bangles and watches before swelling begins, but leave anything stuck to the wound in place.",
        "**Cool the burn with cool running tap water for 20 minutes, and it still helps up to 3 hours after the injury.** Twenty minutes of cooling reduces depth of injury, reduces the need for grafting and reduces pain, and it is the single most valuable thing a family clinic does.",
        "**Never use ice or iced water** - it causes vasoconstriction and deepens the burn - and never use the traditional applications that arrive on the wound in Indian practice: toothpaste, turmeric, ink, kerosene, mud, egg white, butter, ghee or oil. These trap heat, introduce infection and make the wound impossible to assess.",
        "**Cool the burn but warm the patient.** Cooling a large burn, especially in a child, causes hypothermia, which worsens coagulopathy and mortality; cool only the burnt area, cover the rest with blankets, and stop cooling if the patient starts to shiver or the burn exceeds 20% of body surface.",
        "**Cover the wound with cling film laid on in longitudinal strips, never wrapped circumferentially, or with a clean dry cotton sheet.** Cling film is transparent, sterile from the inner roll, non-adherent and analgesic. Do not apply creams before the patient is assessed at the referral centre if transfer is imminent.",
        "Give analgesia early and by the intravenous route: **morphine 0.1 mg/kg IV titrated in 2 mg increments in an adult, or 0.05-0.1 mg/kg IV in a child, with an antiemetic** - intramuscular and subcutaneous drugs are not absorbed reliably in burn shock and are dumped into the circulation later when perfusion is restored.",
        "**Give tetanus prophylaxis according to immunisation status: a burn is a tetanus-prone wound.** Do not give prophylactic systemic antibiotics, which select resistant organisms without reducing burn wound infection.",
      ],
    },
    {
      heading: "Estimating the area burnt",
      points: [
        "**Use the Wallace rule of nines in adults: head and neck 9%, each arm 9%, each leg 18%, front of trunk 18%, back of trunk 18%, and the perineum 1%.** Count only partial-thickness and full-thickness burn; **simple erythema without blistering, as in sunburn, is not included in the total body surface area**, and including it is the commonest reason for over-resuscitation.",
        "**Children have proportionally large heads and small legs, so the rule of nines is inaccurate below about 15 years: use a Lund and Browder chart, or remember that in an infant the head is about 18% and each leg about 14%, with roughly 1% moving from the head to each leg for every year of age until adult proportions are reached at about 10 years.**",
        "**For scattered or patchy burns, the surface of the patient's own palm including the closed fingers is approximately 1% of that patient's body surface area** - use the patient's palm, not yours, and use it for the patient's own scattered patches rather than for a large confluent burn.",
        "Record the estimate on a body diagram, front and back, with the depth marked, and repeat it at 24 hours, because burns declare their true depth and extent over the first day and the initial estimate is often 10-20% out in either direction.",
        "**Estimate mortality risk with the Baux score, which is age plus percentage burn; the revised Baux score adds 17 points for inhalation injury.** A score approaching 100 in an Indian district setting without a burns intensive care unit signals a very poor prognosis and should shape the honest conversation with the family.",
      ],
    },
    {
      heading: "Estimating the depth",
      points: [
        "**Superficial epidermal burn: red, dry, painful, no blisters, blanches briskly and refills. It heals in 5-7 days without scarring and is not counted in the burn surface area or in the fluid calculation.**",
        "**Superficial partial-thickness (superficial dermal) burn: blisters, moist, pink, very painful, blanches with brisk capillary refill. It heals in 10-14 days without grafting and with minimal scarring.**",
        "**Deep partial-thickness (deep dermal) burn: blotchy red or fixed staining, drier, less painful, sluggish or absent blanching. It takes over three weeks to heal, scars badly and usually needs excision and grafting.**",
        "**Full-thickness burn: white, waxy, brown or charred; dry and leathery; painless and insensate to pin-prick; does not blanch, and thrombosed vessels may be visible.** It never heals from the base and always needs excision and grafting.",
        "**The three bedside tests are blanching on pressure, sensation to pin-prick, and the appearance of the wound after the blisters are removed.** An insensate, non-blanching burn is deep whatever it looks like, and a burn that is exquisitely painful is superficial.",
        "Depth is dynamic: a burn deepens over 48 hours if the patient is under-resuscitated, hypotensive, hypothermic or infected, which is why the fluid regimen and warmth matter as much as the dressing.",
      ],
    },
    {
      heading: "Fluid resuscitation: the Parkland formula done correctly",
      points: [
        "**Start intravenous fluid in every adult with more than 15% total body surface area burnt and every child with more than 10%**, through two large peripheral cannulae, placed through burnt skin if necessary. Below these thresholds, oral fluid with added salt is usually adequate.",
        "**Parkland formula: 4 mL x body weight in kg x percentage total body surface area burnt = the volume of Ringer's lactate for the first 24 hours. Give half of that volume in the first 8 hours and the other half over the next 16 hours.**",
        "**The eight hours run from the time of the burn, not from the time of arrival.** If a patient arrives 3 hours after the burn, the first half must be delivered in the remaining 5 hours, which means running it faster. This single point is the commonest examination question and the commonest clinical error.",
        "**Worked example: a 60 kg man with 40% burns needs 4 x 60 x 40 = 9600 mL of Ringer's lactate in 24 hours; 4800 mL in the first 8 hours (600 mL per hour) and 4800 mL over the next 16 hours (300 mL per hour).** Check your arithmetic in the examination by writing the sum out.",
        "**Children need maintenance fluid in addition to the Parkland volume, because they have small glycogen stores: add maintenance by the 4-2-1 rule (4 mL/kg/hour for the first 10 kg, 2 mL/kg/hour for the next 10 kg, 1 mL/kg/hour for each kilogram thereafter) as a dextrose-containing solution, and monitor blood glucose.**",
        "**The formula is only a starting estimate: the resuscitation is titrated hourly to urine output through a urinary catheter. Target 0.5 mL/kg/hour (about 30-50 mL/hour) in an adult, 1 mL/kg/hour in a child under 30 kg, and 1-2 mL/kg/hour where there is myoglobinuria from an electrical or very deep burn.** Adjust the infusion rate by about a third up or down each hour rather than by boluses.",
        "**The American Burn Association now recommends starting adults with thermal burns at 2 mL/kg/% and titrating upwards, reserving 4 mL/kg/% for children and for electrical injury, because over-resuscitation causes the abdominal and limb compartment syndromes known as fluid creep.** Quote Parkland as the classical formula and this modification as current practice.",
        "Colloid is not given in the first 8-12 hours, when capillary leak is maximal; albumin may be added in the second 24 hours in large burns. Do not give a fluid bolus for hypotension alone in an isolated burn without looking for bleeding, since burn shock develops over hours and immediate hypotension means another injury.",
      ],
    },
    {
      heading: "Airway, inhalation injury and the circumferential burn",
      points: [
        "**Suspect inhalation injury with a fire in an enclosed space, loss of consciousness at the scene, facial and neck burns, singed nasal hair or eyebrows, soot in the mouth or sputum, hoarseness, a brassy cough, or stridor.** These are the features that decide the airway, not the arterial blood gas.",
        "**Intubate early and by the most experienced person available, using an uncut endotracheal tube of the largest size that will pass, because oedema progresses for 12-36 hours and a delayed intubation becomes a surgical airway.** If in doubt before a long transfer, intubate before departure.",
        "**Give 100% oxygen through a non-rebreathing mask to every patient from a fire: the pulse oximeter reads falsely normal in carbon monoxide poisoning because it cannot distinguish carboxyhaemoglobin from oxyhaemoglobin.** The half-life of carboxyhaemoglobin is about 4 hours in air and about 1 hour on 100% oxygen.",
        "**Suspect cyanide toxicity where plastics or upholstery have burned and the patient has a persistent lactic acidosis with a normal or high mixed venous oxygen despite adequate resuscitation; hydroxocobalamin 5 g IV over 15 minutes (child 70 mg/kg) is the antidote of choice** as it does not cause the methaemoglobinaemia of nitrite kits.",
        "**A circumferential full-thickness burn of a limb causes compartment ischaemia: watch for increasing pain, tense swelling, paraesthesia, cold pale skin, absent capillary refill and finally an absent Doppler pulse, and treat with escharotomy** - a longitudinal incision through the eschar down the mid-medial and mid-lateral lines, made in a facility that can control the bleeding.",
        "**A circumferential full-thickness burn of the chest restricts ventilation, producing rising airway pressures and hypoxia in a ventilated patient, and needs chest escharotomy in the anterior axillary lines joined by a transverse incision below the clavicles and along the costal margin.** Do not wait for the arterial blood gas.",
        "**Insert a nasogastric tube in burns above 20%, because gastric stasis and ileus are the rule**, and begin enteral feeding within 6-12 hours to reduce stress ulceration and translocation; add a proton pump inhibitor for Curling ulcer prophylaxis.",
      ],
    },
    {
      heading: "Wound care, referral and follow-up",
      points: [
        "Clean with running water or saline and a mild soap, deroof large or tense blisters and leave small intact blisters over palms and soles, and take a photograph or a diagram for the record before dressing.",
        "**Dress a superficial partial-thickness burn with a non-adherent paraffin gauze, an absorbent layer and a light bandage, and review at 48 hours; silver sulfadiazine 1% cream is used for larger and dirtier wounds, but avoid it on the face, in pregnancy, in infants under 2 months and in glucose-6-phosphate dehydrogenase deficiency,** and remember it obscures the appearance of the wound for the surgeon who will assess depth.",
        "**Refer or admit: burns above 10% total body surface in an adult and above 5% in a child; any full-thickness burn above 5%; burns of the face, hands, feet, genitalia, perineum or over a major joint; circumferential burns; all electrical and lightning injuries; all chemical burns; suspected inhalation injury; burns with associated trauma; the very young, the elderly and those with significant comorbidity; and any burn where non-accidental injury is suspected.**",
        "**Chemical burns are irrigated with copious running water for at least 20 minutes and for 60 minutes or longer for alkalis, checking the pH of the run-off where possible; never attempt chemical neutralisation, which generates heat.** The exception that must be named is **hydrofluoric acid, treated with topical calcium gluconate 2.5% gel massaged in, with local infiltration or intra-arterial calcium and correction of hypocalcaemia**.",
        "Refer immediately when the history does not fit the burn: **scalds with a clean upper level and no splash marks, glove-and-stocking or buttock immersion patterns, cigarette burns, delayed presentation, an implausible or changing history, or burns to a child who is not yet mobile** all suggest non-accidental injury and require the child protection pathway.",
        "**Suspect a dowry-related or intimate-partner assault in any adult woman with a kerosene flame burn, take a dying declaration only if the patient is conscious and oriented, record it verbatim in the patient's own words with a note of who was present, and inform the police - burns in a married woman within seven years of marriage are a mandatory medico-legal report in India.**",
        "Follow-up is about function and scar: early physiotherapy and splinting in a position of function, pressure garments and silicone for hypertrophic scarring, sun protection of the healed area for a year, itch controlled with moisturiser and antihistamine, and screening for post-traumatic stress and depression in the patient and the family.",
      ],
    },
  ],
  tables: [
    {
      heading: "Rule of nines: adult against child",
      columns: ["Body part", "Adult", "Infant (under 1 year)", "Note"],
      rows: [
        ["Head and neck", "9%", "18%", "Roughly 1% moves from head to legs per year of age"],
        ["Each upper limb", "9%", "9%", "Unchanged with age"],
        ["Each lower limb", "18%", "14%", "Reaches 18% by about 10 years"],
        ["Anterior trunk", "18%", "18%", "Chest and abdomen"],
        ["Posterior trunk", "18%", "18%", "Back and buttocks"],
        ["Perineum", "1%", "1%", "Genitalia and perineum"],
        ["Patient's palm with fingers", "About 1%", "About 1%", "Use for scattered patches only"],
      ],
    },
    {
      heading: "Burn depth at the bedside",
      columns: ["Depth", "Appearance", "Blisters", "Pain and pin-prick", "Blanching", "Healing"],
      rows: [
        ["Superficial epidermal", "Red, dry", "None", "Painful", "Brisk", "5-7 days, no scar; not counted in TBSA"],
        ["Superficial partial thickness", "Pink, moist, weeping", "Present", "Very painful", "Brisk", "10-14 days, minimal scar"],
        ["Deep partial thickness", "Blotchy red or fixed staining, drier", "May be present", "Reduced sensation", "Sluggish or absent", "Over 3 weeks; usually grafted"],
        ["Full thickness", "White, waxy, brown or charred, leathery", "Absent", "Insensate", "Absent", "Will not heal; needs excision and graft"],
      ],
    },
    {
      heading: "Fluid resuscitation worked out",
      columns: ["Item", "Adult", "Child", "Comment"],
      rows: [
        ["Threshold to start IV fluid", "Above 15% TBSA", "Above 10% TBSA", "Below this, oral fluid with salt"],
        ["Fluid", "Ringer's lactate", "Ringer's lactate", "Warmed; no colloid in the first 8-12 hours"],
        ["Classical Parkland volume", "4 mL x kg x %TBSA in 24 hours", "4 mL x kg x %TBSA in 24 hours", "Half in the first 8 hours from the time of burn"],
        ["Current starting estimate", "2 mL x kg x %TBSA, titrated up", "3-4 mL x kg x %TBSA", "American Burn Association, to avoid fluid creep"],
        ["Maintenance in addition", "Not required", "4-2-1 rule with dextrose-containing fluid", "Children have small glycogen stores"],
        ["Target urine output", "0.5 mL/kg/h (30-50 mL/h)", "1 mL/kg/h under 30 kg", "1-2 mL/kg/h if myoglobinuria"],
        ["Example: 60 kg, 40% burn", "9600 mL in 24 h", "-", "4800 mL in 8 h (600 mL/h), then 300 mL/h"],
        ["Example: 20 kg child, 25% burn", "-", "2000 mL Parkland plus 60 mL/h maintenance", "1000 mL in the first 8 h plus maintenance"],
      ],
    },
  ],
  redFlags: [
    "Facial or neck burn with singed nasal hair, soot in the sputum, hoarseness or stridor after a fire in an enclosed space - the airway will swell shut over hours; intubate early with an uncut tube rather than transferring and hoping.",
    "A normal pulse oximeter reading in a patient rescued from a fire - carbon monoxide is invisible to the oximeter; give 100% oxygen by non-rebreathing mask to everyone from a fire.",
    "A circumferential full-thickness limb burn with increasing pain, tense swelling, paraesthesia or a lost Doppler signal - this needs escharotomy now, and waiting for an absent radial pulse is waiting too long.",
    "A circumferential chest burn with rising airway pressures or falling saturations - chest escharotomy is a bedside procedure, not one to defer for imaging.",
    "Hypotension in the first hour after an isolated burn - burn shock takes hours to develop, so look for concealed haemorrhage, another injury or carbon monoxide before blaming the burn.",
    "Dark red or brown urine after an electrical or very deep burn - myoglobinuria; increase fluids to a urine output of 1-2 mL/kg/hour and transfer for consideration of alkalinisation.",
    "A scald with a clean upper level, no splash marks, a glove-and-stocking or buttock immersion pattern, or a burn in a child who cannot yet walk - non-accidental injury until proved otherwise.",
    "A kerosene flame burn in a married woman, especially within seven years of marriage - mandatory police report, careful documentation and a dying declaration if she is conscious and oriented.",
  ],
  pearls: [
    "Twenty minutes of cool running water, useful up to three hours later, is the highest-value intervention in the first hour. Cool the burn, warm the patient.",
    "Nothing from the kitchen goes on a burn: no toothpaste, turmeric, ink, ghee, oil, egg white or mud, and never ice.",
    "The eight hours of the Parkland formula start at the time of the burn, not at the time of arrival. Late arrival means a faster infusion, not a later clock.",
    "Simple erythema is not counted in the burn surface area. Counting sunburn-type redness is the standard way to over-resuscitate a patient.",
    "The formula gives the first hour's rate; the urine output gives every hour after that. Titrate to 0.5 mL/kg/hour in adults and 1 mL/kg/hour in children.",
    "Children need Parkland plus maintenance fluid with dextrose, because they run out of glycogen and become hypoglycaemic.",
    "An insensate, non-blanching, leathery burn is full thickness and will never heal from the base, however clean it looks.",
    "A pulse oximeter cannot see carbon monoxide. Give 100% oxygen to every fire casualty regardless of the saturation displayed.",
    "Face, hands, feet, perineum, major joints, circumferential, electrical, chemical and inhalation - eight reasons to refer whatever the percentage.",
  ],
  theory: [
    {
      id: "emergency-burns-t1",
      paper: "III",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "A 25-year-old woman is brought to your clinic 90 minutes after sustaining flame burns to the front of the chest, both arms and the front of both legs when her sari caught fire at a stove. She weighs 50 kg. Describe your assessment and management, including fluid calculation and criteria for referral.",
      openingLines: [
        "This is a major thermal burn requiring assessment by the Advanced Trauma Life Support sequence of airway with cervical spine control, breathing, circulation, disability and exposure, with the burn-specific additions of surface area estimation, fluid resuscitation and referral.",
        "Using the Wallace rule of nines her burn is the anterior trunk 18%, both arms 18% and the anterior half of both legs 18%, a total of 54% total body surface area, and by the Parkland formula she requires 4 x 50 x 54 = 10,800 mL of Ringer's lactate in the first 24 hours from the time of the burn.",
      ],
      answer: [
        {
          heading: "1. Primary survey and immediate measures",
          points: [
            "Airway: look for facial burns, singed nasal hair, soot in the mouth, hoarseness and stridor; give 100% oxygen by non-rebreathing mask and intubate early with an uncut tube if there is any sign of inhalation injury, since a stove fire in a kitchen is an enclosed-space exposure.",
            "Breathing: exclude a circumferential chest burn restricting ventilation, and consider carbon monoxide poisoning, remembering that the pulse oximeter reads falsely normal.",
            "Circulation: two large-bore cannulae, through burnt skin if necessary, blood for group and cross-match, haemoglobin, urea, electrolytes, glucose and where possible carboxyhaemoglobin; hypotension this early suggests another injury.",
            "Disability and exposure: record GCS and glucose, remove all clothing and jewellery, keep the patient warm with blankets and a warmed room, and record the temperature.",
            "Analgesia with morphine 0.1 mg/kg intravenously, titrated in 2 mg increments with an antiemetic; never by the intramuscular route in burn shock.",
          ],
        },
        {
          heading: "2. Burn-specific assessment",
          points: [
            "Estimate the area by the rule of nines on a front and back diagram, counting only partial and full-thickness burn and excluding simple erythema; use the patient's palm as 1% for scattered patches.",
            "Estimate the depth by appearance, blistering, pin-prick sensation and blanching, and record it on the same diagram.",
            "Take the burn history: the agent, whether the fire was in an enclosed space, the duration of exposure, the first aid given, and the circumstances, since a sari or kerosene burn in a young married woman requires a careful medico-legal record and a police report.",
            "Calculate the revised Baux score (age plus percentage plus 17 if inhalation injury) to inform the discussion with the family and the urgency of transfer.",
          ],
        },
        {
          heading: "3. Fluid resuscitation",
          points: [
            "Parkland: 4 mL x 50 kg x 54% = 10,800 mL of Ringer's lactate in the first 24 hours.",
            "Half, that is 5400 mL, is given in the first 8 hours measured from the time of the burn; as 90 minutes have already elapsed, this must be delivered in the remaining 6.5 hours, about 830 mL per hour.",
            "The remaining 5400 mL is given over the next 16 hours at about 340 mL per hour.",
            "Insert a urinary catheter and titrate hourly to a urine output of 0.5 mL/kg/hour, that is 25 mL per hour in this patient, adjusting the rate by about a third at a time rather than giving boluses.",
            "Avoid colloid in the first 8-12 hours; note that current American Burn Association practice starts adults at 2 mL/kg/% and titrates upwards to avoid over-resuscitation.",
          ],
        },
        {
          heading: "4. Wound care and supportive measures",
          points: [
            "Cool the wound with running water for 20 minutes if within 3 hours of the burn, while keeping the rest of the body covered and warm.",
            "Cover with cling film in longitudinal strips or a clean dry sheet; do not apply creams if transfer is imminent, as they obscure assessment of depth.",
            "Give tetanus prophylaxis; do not give prophylactic systemic antibiotics.",
            "Pass a nasogastric tube because the burn exceeds 20%, start early enteral feeding, and give a proton pump inhibitor for Curling ulcer prophylaxis.",
            "Examine for circumferential burns of chest or limbs and arrange escharotomy if ventilation or distal perfusion is compromised.",
          ],
        },
        {
          heading: "5. Referral and transfer",
          points: [
            "This patient meets multiple referral criteria - burn above 10% in an adult, likely inhalation injury, and burns crossing major joints - and must go to a burns unit.",
            "Transfer with the airway secured if there is any doubt, with warmed fluids running through two cannulae, a urinary catheter, a nasogastric tube, analgesia given, and the patient wrapped to prevent hypothermia.",
            "Send a written note of the time of burn, the estimated area and depth with the diagram, the fluid already given with times, drugs given, and the observations.",
            "Complete the medico-legal formalities, record a dying declaration verbatim if the patient is conscious and oriented and her condition is critical, and inform the police.",
            "Counsel the family honestly about prognosis using the Baux score, and arrange psychological support.",
          ],
        },
      ],
      mustDraw: [
        "A front and back body diagram with the rule of nines percentages marked and the burnt areas shaded.",
        "The Parkland calculation written out in full with the two time blocks and the hourly rates.",
      ],
      markSplit: [
        { part: "Primary survey, airway and inhalation injury", marks: 2.5 },
        { part: "Surface area and depth estimation", marks: 2 },
        { part: "Parkland calculation with the clock from the time of burn and the urine output target", marks: 3 },
        { part: "Wound care, analgesia, tetanus, nasogastric tube", marks: 1.5 },
        { part: "Referral criteria, transfer and medico-legal duties", marks: 1 },
      ],
      keywords: ["rule of nines", "Parkland formula", "Ringer lactate", "urine output 0.5 mL/kg/h", "burn referral criteria"],
    },
    {
      id: "emergency-burns-t2",
      paper: "III",
      kind: "enumerate",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Enumerate the criteria for referring a burn patient to a specialised burns unit, and outline the first aid measures for burns.",
      openingLines: [
        "Referral criteria exist because the depth and extent of a burn, the site involved and the presence of inhalation injury determine whether the patient will need excision, grafting, ventilation and specialised rehabilitation that a primary care setting cannot provide.",
        "First aid has three objectives: stop the burning process, limit the depth of the burn by cooling with running water for 20 minutes, and prevent hypothermia and infection while the patient is prepared for transfer.",
      ],
      answer: [
        {
          heading: "Referral by extent and depth",
          points: [
            "Partial-thickness burn above 10% of total body surface area in an adult.",
            "Partial-thickness burn above 5% in a child or an elderly patient.",
            "Any full-thickness burn above 5% of total body surface area, and any full-thickness burn in a child.",
            "Burns that have failed to heal in 2-3 weeks, which by definition are deep dermal.",
          ],
        },
        {
          heading: "Referral by site and mechanism",
          points: [
            "Burns of the face, eyes, ears, hands, feet, genitalia, perineum, or overlying a major joint.",
            "Circumferential burns of a limb, the neck or the chest.",
            "All electrical burns, including lightning strike, and all significant chemical burns.",
            "Suspected inhalation injury, or a burn sustained in an enclosed-space fire.",
          ],
        },
        {
          heading: "Referral by patient and context",
          points: [
            "Extremes of age, pregnancy, and significant comorbidity such as diabetes, cardiac, renal or immunosuppressive disease.",
            "Burns with associated trauma, fractures or a fall from height.",
            "Suspected non-accidental injury in a child or a suspected assault, dowry-related or intimate-partner burn in an adult woman.",
            "Any burn where adequate pain control, dressing or follow-up cannot be provided locally.",
          ],
        },
        {
          heading: "First aid",
          points: [
            "Stop the burning: extinguish flames, isolate the electrical supply, brush off dry chemical powder, and irrigate chemical burns with running water for 20-60 minutes.",
            "Remove clothing, nappies, rings, bangles and watches, leaving adherent material in place.",
            "Cool the burn with cool running tap water for 20 minutes, effective up to 3 hours after injury; never use ice, and never apply toothpaste, turmeric, ink, oil, ghee, mud or egg white.",
            "Keep the patient warm with blankets while the burn is cooled, since hypothermia worsens outcome, especially in children and burns above 20%.",
            "Cover with cling film in longitudinal strips or a clean dry sheet, give intravenous analgesia, give tetanus prophylaxis, and start fluid resuscitation if the burn exceeds 15% in an adult or 10% in a child.",
          ],
        },
      ],
      mustDraw: [
        "A table of referral criteria grouped as extent, site and mechanism, and patient factors.",
        "A flow chart of first aid: stop the burn, cool 20 minutes, warm the patient, cover, analgesia, refer.",
      ],
      markSplit: [
        { part: "Referral by extent and depth with percentages", marks: 1.5 },
        { part: "Referral by site and mechanism", marks: 1.5 },
        { part: "Referral by patient and context, including non-accidental injury", marks: 0.5 },
        { part: "First aid measures including the 20-minute cooling rule and what is forbidden", marks: 1.5 },
      ],
      keywords: ["burn referral criteria", "20 minutes cooling", "cling film", "circumferential burn", "inhalation injury"],
    },
  ],
  mcqs: [
    {
      id: "emergency-burns-q1",
      stem: "A 70 kg man sustains 30% total body surface area burns at 8 pm and reaches your clinic at 10 pm. Using the Parkland formula, how much Ringer's lactate should he receive, and over what period?",
      options: [
        "8400 mL in 24 hours, with 4200 mL over the 8 hours from 10 pm to 6 am",
        "8400 mL in 24 hours, with 4200 mL to be completed by 4 am, that is 700 mL/hour for the remaining 6 hours",
        "4200 mL in 24 hours, with 2100 mL in the first 8 hours",
        "8400 mL in 24 hours given at a constant 350 mL/hour throughout",
        "2100 mL in the first hour as a bolus, then reassess",
      ],
      answer: 1,
      explanation:
        "Parkland gives 4 x 70 x 30 = 8400 mL of Ringer's lactate over 24 hours, and half of it, 4200 mL, must be delivered within 8 hours of the burn itself. The burn was at 8 pm, so the first half must be completed by 4 am; two hours have already been lost, leaving 6 hours and a rate of 700 mL per hour. Starting the 8-hour clock at arrival delays resuscitation by the time taken to reach the clinic and is the classic error. Halving the total confuses the 24-hour volume with the 8-hour volume. A constant rate ignores the front-loading that the formula requires, and a large undirected bolus is not part of burn resuscitation, which is titrated to a urine output of 0.5 mL/kg/hour.",
      difficulty: "moderate",
    },
    {
      id: "emergency-burns-q2",
      stem: "A 3-year-old is pulled from a house fire. He is coughing, has soot around the nostrils, a hoarse cry, and an SpO2 of 99% on room air. What is the most appropriate immediate action?",
      options: [
        "Reassure the family, since the saturation is normal",
        "Give 100% oxygen by non-rebreathing mask and prepare for early intubation",
        "Nebulise salbutamol and observe for 6 hours",
        "Obtain a chest radiograph before deciding on the airway",
        "Give intravenous hydrocortisone to reduce airway oedema",
      ],
      answer: 1,
      explanation:
        "Soot around the nostrils with a hoarse cry after an enclosed-space fire is inhalation injury, and the airway must be secured early because oedema progresses over 12-36 hours in a small child whose airway is already narrow; 100% oxygen is given simultaneously because pulse oximetry cannot distinguish carboxyhaemoglobin from oxyhaemoglobin, so a saturation of 99% is meaningless here. Reassurance on the basis of that reading is exactly the trap. Salbutamol treats bronchospasm and does nothing for supraglottic oedema. A chest radiograph is normal in the first hours of inhalation injury and delays the airway decision. Steroids do not prevent airway oedema in burns and increase infection.",
      difficulty: "moderate",
    },
    {
      id: "emergency-burns-q3",
      stem: "Which of the following burn areas should be included when calculating total body surface area for the Parkland formula?",
      options: [
        "Areas of simple erythema that blanch and have no blisters",
        "Blistered, moist, painful areas and white leathery insensate areas",
        "All areas touched by the flame, whether or not the skin is broken",
        "Only full-thickness burn",
        "Erythema plus half of the blistered area",
      ],
      answer: 1,
      explanation:
        "Only partial-thickness and full-thickness burn is counted, that is blistered moist painful skin and white leathery insensate skin. Simple erythema without blistering, the sunburn-type injury, is excluded, and including it systematically over-estimates the area and leads to over-resuscitation with pulmonary oedema and compartment syndromes. Counting every area touched by flame has the same effect. Counting only full-thickness burn under-estimates the area and leads to under-resuscitation with deepening of the wound and acute kidney injury. Arbitrarily halving areas has no basis in any burn protocol.",
      difficulty: "easy",
    },
    {
      id: "emergency-burns-q4",
      stem: "A 20 kg child with 25% burns is being resuscitated. In addition to the Parkland volume of Ringer's lactate, what else must be given, and what urine output is targeted?",
      options: [
        "Nothing additional; target 0.5 mL/kg/hour",
        "Maintenance fluid by the 4-2-1 rule with a dextrose-containing solution; target 1 mL/kg/hour",
        "Colloid in the first 8 hours; target 2 mL/kg/hour",
        "Half-normal saline at twice maintenance; target 0.25 mL/kg/hour",
        "Blood transfusion; target 0.5 mL/kg/hour",
      ],
      answer: 1,
      explanation:
        "Children have small glycogen stores and become hypoglycaemic during burn resuscitation, so maintenance fluid containing dextrose is given by the 4-2-1 rule in addition to the Parkland volume, and the target urine output in a child under 30 kg is 1 mL/kg/hour rather than the adult 0.5 mL/kg/hour. Giving Parkland alone risks hypoglycaemia and under-resuscitation in a child. Colloid is avoided in the first 8-12 hours when capillary leak is maximal, and a target of 2 mL/kg/hour is reserved for myoglobinuria. Hypotonic fluids risk hyponatraemia and cerebral oedema. Blood is given for haemorrhage or after excision, not as part of initial burn resuscitation.",
      difficulty: "moderate",
    },
    {
      id: "emergency-burns-q5",
      stem: "A labourer has a full-thickness circumferential burn of the right forearm. Six hours later he has severe pain, a tense swollen forearm, numb fingers and an absent Doppler signal at the radial artery. What is required?",
      options: [
        "Elevation and observation for a further 6 hours",
        "Increase the intravenous fluid rate and repeat the assessment hourly",
        "Escharotomy through the eschar along the mid-medial and mid-lateral lines",
        "Immediate amputation",
        "Application of silver sulfadiazine and a firm compression bandage",
      ],
      answer: 2,
      explanation:
        "A circumferential full-thickness burn forms an inelastic eschar that acts as a tourniquet as oedema accumulates, and the treatment is escharotomy, a longitudinal incision through the full thickness of the eschar along the mid-medial and mid-lateral lines, performed where bleeding can be controlled. Elevation and observation allow irreversible ischaemia, and by the time the Doppler signal is lost the limb is already critically threatened. Increasing fluid worsens the oedema driving the compression. Amputation is not indicated for a limb that can be decompressed. A compression bandage adds external pressure to a limb that is already ischaemic, and silver sulfadiazine treats infection, not compartment pressure.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "emergency-burns-c1",
      front: "Burn first aid: the cooling rule.",
      back: "Cool running tap water for 20 minutes, still useful up to 3 hours after the burn. Never ice, never toothpaste, turmeric, ink, oil, ghee, mud or egg white. Cool the burn but warm the patient.",
    },
    {
      id: "emergency-burns-c2",
      front: "Wallace rule of nines in the adult.",
      back: "Head and neck 9%, each arm 9%, each leg 18%, front of trunk 18%, back of trunk 18%, perineum 1%. Patient's palm with fingers is about 1% for scattered patches.",
    },
    {
      id: "emergency-burns-c3",
      front: "Parkland formula.",
      back: "4 mL x kg x %TBSA of Ringer's lactate in the first 24 hours; half in the first 8 hours measured from the time of the burn, the rest over the next 16 hours. Only partial and full-thickness burn is counted.",
    },
    {
      id: "emergency-burns-c4",
      front: "Target urine output in burn resuscitation.",
      back: "Adult 0.5 mL/kg/hour (30-50 mL/hour); child under 30 kg 1 mL/kg/hour; 1-2 mL/kg/hour if there is myoglobinuria. Titrate the infusion hourly by about a third at a time.",
    },
    {
      id: "emergency-burns-c5",
      front: "What extra do children need in burn resuscitation?",
      back: "Maintenance fluid by the 4-2-1 rule with a dextrose-containing solution, in addition to the Parkland volume, because glycogen stores are small. Monitor blood glucose.",
    },
    {
      id: "emergency-burns-c6",
      front: "Signs of inhalation injury.",
      back: "Enclosed-space fire, loss of consciousness, facial or neck burns, singed nasal hair, soot in mouth or sputum, hoarseness, brassy cough, stridor. Intubate early with an uncut tube.",
    },
    {
      id: "emergency-burns-c7",
      front: "Why does the pulse oximeter mislead after a fire?",
      back: "It cannot distinguish carboxyhaemoglobin from oxyhaemoglobin, so it reads falsely normal in carbon monoxide poisoning. Give 100% oxygen; carboxyhaemoglobin half-life falls from about 4 hours in air to about 1 hour on 100% oxygen.",
    },
    {
      id: "emergency-burns-c8",
      front: "Burn depth: the three bedside tests.",
      back: "Blanching on pressure, sensation to pin-prick, and appearance after deroofing blisters. Insensate and non-blanching means full thickness; exquisitely painful and briskly blanching means superficial.",
    },
  ],
  references: [
    "Advanced Trauma Life Support (ATLS), 10th edition, American College of Surgeons, 2018 - thermal injuries chapter",
    "American Burn Association. Advanced Burn Life Support Provider Manual, 2023 update - fluid resuscitation and referral criteria",
    "Emergency Management of Severe Burns (EMSB) course manual, Australian and New Zealand Burn Association, 2021",
    "Baxter CR, Shires T. Physiological response to crystalloid resuscitation of severe burns, Annals of the New York Academy of Sciences 1968 - the Parkland formula",
    "National Programme for Prevention and Management of Burn Injuries, Ministry of Health and Family Welfare, Government of India, operational guidelines 2023",
    "Standard Treatment Workflows of India, ICMR and MoHFW, 2022 - burns workflow",
    "International Society for Burn Injuries. ISBI Practice Guidelines for Burn Care, Burns 2018",
    "Bailey and Love's Short Practice of Surgery, 28th edition, 2023 - burns chapter",
  ],
});

topics.push({
  id: "emergency-trauma-primary-survey",
  title: "The trauma primary survey and safe transfer",
  oneLiner:
    "The trauma primary survey treats injuries in the order that kills - catastrophic external haemorrhage, then airway with cervical spine protection, breathing, circulation with haemorrhage control, disability and exposure - fixing each problem before moving on, giving tranexamic acid 1 g intravenously within 3 hours of injury, resuscitating with warmed blood rather than large volumes of crystalloid, and transferring the packaged patient early with a structured ATMIST handover rather than delaying for investigations that will not change what the clinic can do.",
  frequency: "common",
  keywords: [
    "trauma",
    "primary survey",
    "ATLS",
    "ABCDE",
    "catastrophic haemorrhage",
    "cervical spine",
    "tension pneumothorax",
    "needle decompression",
    "open pneumothorax",
    "massive haemothorax",
    "flail chest",
    "cardiac tamponade",
    "pelvic binder",
    "tranexamic acid",
    "CRASH-2",
    "permissive hypotension",
    "damage control resuscitation",
    "lethal triad",
    "Glasgow Coma Scale",
    "secondary survey",
    "AMPLE history",
    "ATMIST handover",
    "log roll",
    "FAST scan",
    "golden hour",
  ],
  sections: [
    {
      heading: "The principle and the order",
      points: [
        "**The primary survey finds and treats what kills first, in the order in which it kills, and nothing moves on until the problem found has been treated.** A candidate who lists the whole of ABCDE and then goes back to treat has failed the sequence; the correct answer decompresses the tension pneumothorax at B and does not mention C until it is done.",
        "**Modern practice puts catastrophic external haemorrhage before the airway, giving <C>ABCDE: Catastrophic haemorrhage, Airway with cervical spine protection, Breathing and ventilation, Circulation with haemorrhage control, Disability, and Exposure with environmental control.** An exsanguinating femoral or scalp wound kills faster than an unprotected airway.",
        "**Reassess from the beginning after every intervention and whenever the patient deteriorates.** Sudden deterioration in a ventilated or bagged trauma patient is a tension pneumothorax until proved otherwise, and the answer is to go back to A and B, not to give more fluid.",
        "The three peaks of trauma death are **immediate (seconds to minutes, from major neurological or vascular disruption), early (minutes to hours, the golden hour, from airway obstruction, tension pneumothorax, haemothorax, tamponade and haemorrhage), and late (days to weeks, from sepsis and multi-organ failure)**. A family clinic influences only the second peak, and every part of the primary survey is aimed at it.",
        "**Trauma teams work horizontally, not vertically:** with three people the airway is one person's job, the chest and lines another's, and exposure, monitoring and the written record the third's, all at the same time, with one person nominated as team leader who touches nobody.",
      ],
    },
    {
      heading: "C, A and B: haemorrhage, airway and breathing",
      points: [
        "**Catastrophic haemorrhage: apply firm direct pressure with a gloved hand and a pad; if that fails on a limb, apply a windlass tourniquet proximally, tighten until the bleeding stops, and write the time of application on the patient.** Junctional and scalp bleeding is controlled by packing and sustained pressure; do not blindly clamp in a wound.",
        "**Airway with cervical spine protection: talk to the patient, because a patient who answers in a normal voice has a patent airway, is breathing and is perfusing the brain.** Look for blood, vomit, teeth and swelling, suction under direct vision, and open the airway with a **jaw thrust or chin lift - never a head tilt in a trauma patient**, followed by an oropharyngeal airway in the unconscious.",
        "**Indications for a definitive airway are apnoea, an unprotected airway with a GCS of 8 or less, sustained hypoxia despite oxygen, an expanding neck haematoma or airway burn, and the combative head injury needing transfer.** Where intubation is not possible, a supraglottic airway or a surgical cricothyroidotomy is the fallback, and every clinic that receives trauma should own a scalpel, a bougie and a size 6 tube for it.",
        "**Protect the cervical spine with manual in-line stabilisation while the airway is managed, then a rigid collar with blocks and tape, or with the patient held still and calm.** A collar alone does not immobilise, and in an agitated or head-injured patient a fighting patient in a collar raises intracranial pressure, so allow controlled motion restriction instead.",
        "**Breathing: expose the chest, count the respiratory rate, look for asymmetry and paradox, feel for surgical emphysema and tracheal deviation, percuss, and auscultate both axillae.** Give oxygen at 15 L/min through a non-rebreathing mask to every major trauma patient.",
        "**The six immediately life-threatening chest injuries are airway obstruction, tension pneumothorax, open pneumothorax, massive haemothorax, flail chest with pulmonary contusion, and cardiac tamponade.** Every one of them is a clinical diagnosis and none of them waits for a radiograph.",
        "**Tension pneumothorax is decompressed immediately by needle thoracostomy with a 14-gauge cannula in the fifth intercostal space in the anterior axillary line (the traditional second space in the mid-clavicular line often fails to reach the pleura in adults), followed at once by an intercostal drain in the safe triangle.** In children the second space mid-clavicular line remains appropriate.",
        "**Open pneumothorax (a sucking chest wound) is covered with a square dressing taped on three sides so that air escapes but does not enter, and a chest drain is placed away from the wound; massive haemothorax (more than 1500 mL immediately, or more than 200 mL/hour for 2-4 hours) needs a drain, blood replacement and thoracotomy; tamponade needs pericardiocentesis or thoracotomy.**",
      ],
    },
    {
      heading: "C: circulation and haemorrhage control",
      points: [
        "**Assume that hypotension in trauma is haemorrhage until proved otherwise, and remember the five places blood hides: on the floor and four more - the chest, the abdomen, the pelvis and retroperitoneum, and the long bones (a femoral fracture can hold 1-1.5 litres, and the pelvis several litres).**",
        "**A narrow pulse pressure and a rising heart rate come before a falling blood pressure: a normal systolic pressure does not exclude significant blood loss, particularly in a fit young adult who compensates until about 30% of blood volume is lost, and in a pregnant woman whose expanded volume masks loss while the fetus is already shocked.** Elderly patients on beta-blockers do not mount a tachycardia at all.",
        "**Control the bleeding mechanically before reaching for fluid: direct pressure and tourniquets for limbs, a pelvic binder applied at the level of the greater trochanters (not the iliac crests) for a suspected pelvic fracture, and traction splinting and realignment for long bones.** Do not spring the pelvis repeatedly, which disturbs clot.",
        "**Insert two short wide cannulae (14 or 16 gauge) in the antecubital fossae, draw blood for cross-match, haemoglobin, glucose and a pregnancy test, and give one litre of warmed crystalloid; if the patient does not improve, or improves only transiently, the next fluid is blood, not more crystalloid.** In children give **20 mL/kg of warmed crystalloid, then 10 mL/kg of blood**.",
        "**Give tranexamic acid 1 g intravenously over 10 minutes as early as possible and always within 3 hours of injury, followed by 1 g by infusion over 8 hours; given after 3 hours it increases mortality, so the time of injury governs the decision.** The paediatric dose is **15 mg/kg (maximum 1 g) over 10 minutes, then 2 mg/kg/hour**. This is one of the very few interventions a small clinic can give that measurably saves lives.",
        "**Damage control resuscitation means permissive hypotension to a systolic of 80-90 mmHg (radial pulse present, patient talking) until surgical control, warmed balanced blood product transfusion in a 1:1:1 ratio of red cells, plasma and platelets, and avoidance of large-volume crystalloid**, which dilutes clotting factors, displaces clot and worsens acidosis.",
        "**Permissive hypotension is not applied to the patient with a significant head injury**, in whom cerebral perfusion must be maintained with a systolic pressure above 110 mmHg; where both are present, the brain wins and the pressure is supported.",
        "**Prevent the lethal triad of hypothermia, acidosis and coagulopathy: warm the fluids, warm the patient, remove wet clothing, use a warming blanket and turn up the room heater.** A cold trauma patient will not clot however much plasma is given.",
      ],
    },
    {
      heading: "D and E, adjuncts and the secondary survey",
      points: [
        "**Disability: record the Glasgow Coma Scale as its three components (eye 4, verbal 5, motor 6), examine pupil size and reaction, look for lateralising signs, and check the capillary glucose in every unconscious trauma patient.** A GCS of 8 or less means the airway is unprotected.",
        "**Hypoxia and hypotension double the mortality of traumatic brain injury: keep the SpO2 above 94%, the systolic pressure above 110 mmHg, avoid hypercapnia and hypocapnia, nurse the head up 30 degrees, and treat pain and agitation.** These simple measures matter more than any drug.",
        "**For signs of herniation - a unilateral fixed dilated pupil, extensor posturing, or a fall of 2 or more GCS points - give mannitol 20% at 0.25-1 g/kg IV over 15-20 minutes, or 3% hypertonic saline 3-5 mL/kg, and transfer immediately to a centre with a computed tomography scanner and neurosurgery.** Mannitol requires an adequate blood pressure and a urinary catheter.",
        "**Exposure and environment: undress the patient fully, log roll with four people and manual in-line stabilisation to inspect and palpate the back and perform a rectal examination if indicated, then cover immediately with warm blankets.** Hypothermia sets in within minutes on a trolley in a cold room.",
        "**Adjuncts to the primary survey: monitoring and pulse oximetry, an ECG, chest and pelvic radiographs, an extended FAST scan where available, a urinary catheter and a gastric tube.** Do not pass a urethral catheter if there is blood at the meatus, perineal or scrotal bruising or a high-riding prostate, and pass a gastric tube by the oral route if a base-of-skull fracture is suspected.",
        "**The secondary survey is a head-to-toe examination with an AMPLE history - Allergies, Medications, Past illness and Pregnancy, Last meal, Events and Environment of the injury - and it begins only when the primary survey is complete and the patient is not deteriorating.** In a clinic preparing a transfer, the secondary survey often happens at the receiving hospital, and that is acceptable.",
        "Give **analgesia in titrated intravenous doses (morphine 0.1 mg/kg titrated, or ketamine 0.25-0.5 mg/kg IV, which preserves blood pressure in shock), tetanus prophylaxis, and antibiotics within one hour for an open fracture**; splint fractures, cover open wounds with saline-soaked gauze, and photograph or document them before dressing.",
      ],
    },
    {
      heading: "Safe transfer",
      points: [
        "**Decide to transfer early: the decision is made on injury pattern and physiology, not on the results of investigations, and no test that will not change what you can do in the clinic should delay departure.** In Indian district practice the commonest avoidable death is the patient who spent an hour waiting for a radiograph.",
        "**Speak doctor to doctor before the patient leaves, name the receiving consultant and the receiving unit, agree the destination bed, and get an acceptance.** Sending an unannounced trauma patient to a hospital that has no vacant bed or no surgeon on site wastes the golden hour twice.",
        "**Package the patient before departure: airway secured or a clear plan for it, oxygen with enough cylinder for twice the journey time, two working cannulae taped and running, fluids and blood, haemorrhage controlled with pressure dressings, tourniquets or a binder, fractures splinted, spine motion restricted, urinary catheter and gastric tube where indicated, and the patient wrapped and warm.**",
        "**Never transfer a patient with an untreated tension pneumothorax, an uncontrolled external haemorrhage, an unprotected airway, or an unsplinted pelvis.** Deterioration in a moving ambulance without space, light or help is the situation to avoid at all costs.",
        "**Hand over in the ATMIST format: Age, Time of injury, Mechanism, Injuries found and suspected, Signs (the observations, with trends), and Treatment given with times.** Deliver it once, in a quiet room, with everyone listening, and give a written copy with the ambulance.",
        "**Send with the patient: a written record of the times of injury, arrival, drugs and fluids; the tranexamic acid time; radiographs and reports if available; a cross-match sample; the medico-legal register entry number; and the name and telephone number of a relative who has been told where the patient is going.**",
        "**Escort every unstable patient with a trained person, not the driver alone**, and equip that escort with oxygen, suction, a self-inflating bag, a monitor if available, and the drugs likely to be needed. Reassess the primary survey immediately before the doors close and again on arrival.",
      ],
    },
  ],
  tables: [
    {
      heading: "The six immediately life-threatening chest injuries",
      columns: ["Injury", "Clinical clue", "Immediate treatment"],
      rows: [
        ["Airway obstruction", "Stridor, gurgling, no air movement, agitation", "Suction, jaw thrust, airway adjunct, definitive airway"],
        ["Tension pneumothorax", "Respiratory distress, absent air entry, hyper-resonance, distended neck veins, deviated trachea, shock", "Needle decompression 5th ICS anterior axillary line with a 14G cannula, then chest drain"],
        ["Open pneumothorax", "Sucking chest wound larger than two-thirds of the tracheal diameter", "Three-sided occlusive dressing, then a chest drain sited away from the wound"],
        ["Massive haemothorax", "Shock with dullness and absent air entry on one side", "Chest drain, blood transfusion, thoracotomy if over 1500 mL at once or over 200 mL/h for 2-4 h"],
        ["Flail chest with contusion", "Paradoxical segment movement, severe pain, hypoxia", "Oxygen, analgesia including regional block, careful fluids, ventilation if failing"],
        ["Cardiac tamponade", "Penetrating injury, shock, muffled sounds, distended neck veins, pulsus paradoxus", "Pericardiocentesis or resuscitative thoracotomy; fluid as a holding measure"],
      ],
    },
    {
      heading: "ATLS classes of haemorrhagic shock in a 70 kg adult",
      columns: ["Class", "Blood loss", "Pulse", "Blood pressure", "Pulse pressure", "Respiratory rate", "Urine output", "Mental state"],
      rows: [
        ["I", "Up to 750 mL (up to 15%)", "Under 100", "Normal", "Normal", "14-20", "Above 30 mL/h", "Slightly anxious"],
        ["II", "750-1500 mL (15-30%)", "100-120", "Normal", "Narrowed", "20-30", "20-30 mL/h", "Mildly anxious"],
        ["III", "1500-2000 mL (30-40%)", "120-140", "Falling", "Narrowed", "30-40", "5-15 mL/h", "Anxious and confused"],
        ["IV", "Over 2000 mL (over 40%)", "Above 140 or bradycardic pre-arrest", "Markedly low", "Narrowed", "Above 35", "Negligible", "Confused and lethargic"],
      ],
    },
    {
      heading: "The trauma clock: what must happen and when",
      columns: ["Time from arrival", "Action"],
      rows: [
        ["0-2 minutes", "Control catastrophic bleeding, assess and open the airway with cervical spine protection, oxygen 15 L/min"],
        ["2-5 minutes", "Expose the chest, exclude and treat the six lethal chest injuries, attach the monitor"],
        ["5-10 minutes", "Two wide cannulae, bloods and cross-match, pelvic binder and splints, 1 L warmed crystalloid, tranexamic acid 1 g"],
        ["10-15 minutes", "GCS, pupils, glucose, log roll, warm the patient, catheter and gastric tube if indicated"],
        ["By 20 minutes", "Telephone the receiving unit, accept confirmed, ambulance called, written record started"],
        ["By 30 minutes", "Patient packaged, escorted and on the road with an ATMIST handover written out"],
      ],
    },
  ],
  redFlags: [
    "Respiratory distress with a deviated trachea, absent air entry and distended neck veins - tension pneumothorax; decompress with a needle in the fifth intercostal space at the anterior axillary line before any imaging.",
    "Sudden deterioration in a bagged or ventilated trauma patient - go back to A and B, because this is a tension pneumothorax, a displaced tube or an obstructed tube until proved otherwise.",
    "A transiently responding or non-responding shocked patient after one litre of crystalloid - this is ongoing haemorrhage; the next fluid is blood and the next step is surgery, not a second and third litre of saline.",
    "Blood at the urethral meatus, perineal bruising or a high-riding prostate - do not pass a urethral catheter; this is a urethral injury needing suprapubic drainage.",
    "A unilateral fixed dilated pupil, extensor posturing, or a drop of 2 or more GCS points - impending herniation; give mannitol 0.25-1 g/kg or 3% saline 3-5 mL/kg and transfer at once to neurosurgery.",
    "Any significant trauma patient beyond 3 hours from injury who has not had tranexamic acid - the window has closed and giving it now increases mortality, so document the time of injury on every trauma patient.",
    "A pregnant trauma patient beyond 20 weeks - resuscitate the mother, tilt her to the left or manually displace the uterus, and get obstetric review, because the fetus is shocked long before the mother's blood pressure falls.",
    "A cold trauma patient who continues to ooze from puncture sites - trauma-induced coagulopathy with hypothermia; warm aggressively, give blood products rather than crystalloid, and transfer urgently.",
  ],
  pearls: [
    "Treat as you find. The examiner marks the sequence, so decompress the chest at B and never say the word circulation until the tension pneumothorax has a needle in it.",
    "Catastrophic external haemorrhage comes before the airway - <C>ABCDE - because an open femoral artery empties a patient faster than an obstructed airway.",
    "A patient who speaks to you in a normal voice has, in that moment, a patent airway, adequate breathing and cerebral perfusion. It is the cheapest examination in medicine.",
    "Blood hides in five places: on the floor, and four more - chest, abdomen, pelvis and retroperitoneum, and long bones.",
    "Tranexamic acid 1 g IV over 10 minutes within 3 hours of injury, then 1 g over 8 hours. After 3 hours it does harm, so record the time of injury before anything else.",
    "The next fluid after one litre of crystalloid is blood. Chasing a blood pressure with crystalloid dilutes clotting factors and pushes out clot.",
    "Permissive hypotension to a systolic of 80-90 mmHg until surgical control - except in head injury, where the systolic must be kept above 110 mmHg.",
    "Warm everything: the fluids, the patient and the room. The lethal triad of hypothermia, acidosis and coagulopathy is prevented, never treated.",
    "Do not delay a transfer for an investigation that will not change what you can do. Telephone the receiving consultant, get an acceptance, and package the patient properly.",
    "Hand over once, in ATMIST, with everyone listening and a written copy in the ambulance.",
  ],
  theory: [
    {
      id: "emergency-trauma-primary-survey-t1",
      paper: "III",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "A 32-year-old motorcyclist is brought to your rural clinic 40 minutes after a collision with a truck. He is restless, with a respiratory rate of 34, a pulse of 128, a blood pressure of 88/70 mmHg, and an obvious deformity of the right thigh. Describe the primary survey and your management up to transfer.",
      openingLines: [
        "This is a major blunt trauma patient in class III haemorrhagic shock with a narrow pulse pressure, in whom management follows the Advanced Trauma Life Support primary survey - catastrophic haemorrhage, airway with cervical spine protection, breathing, circulation with haemorrhage control, disability and exposure - treating each abnormality as it is found.",
        "The immediate priorities are to exclude and treat the six lethal chest injuries, to control haemorrhage mechanically, to give tranexamic acid within 3 hours of injury, to resuscitate towards a radial pulse rather than a normal blood pressure, and to arrange an accepted, escorted transfer without delay for investigations.",
      ],
      answer: [
        {
          heading: "1. Preparation and catastrophic haemorrhage",
          points: [
            "Universal precautions, allocate roles horizontally to the available staff, and nominate a team leader who does not perform procedures.",
            "Look immediately for and control catastrophic external bleeding with direct pressure, a pad and, if a limb wound cannot be controlled, a windlass tourniquet applied proximally with the time written on the patient.",
            "Attach monitor, pulse oximeter and blood pressure cuff, and record baseline observations with the time.",
          ],
        },
        {
          heading: "2. Airway with cervical spine protection and breathing",
          points: [
            "Speak to him: restlessness may be hypoxia or hypoperfusion rather than intoxication. Inspect for blood, teeth, vomit and swelling and suction under vision.",
            "Open the airway with a jaw thrust, never a head tilt, insert an oropharyngeal airway if tolerated, and maintain manual in-line stabilisation followed by a collar, blocks and tape.",
            "Give oxygen 15 L/min by non-rebreathing mask.",
            "Expose the chest and look, feel, percuss and listen: a respiratory rate of 34 with shock demands exclusion of tension pneumothorax, open pneumothorax, massive haemothorax, flail chest and tamponade.",
            "If a tension pneumothorax is found, decompress at once with a 14-gauge cannula in the fifth intercostal space in the anterior axillary line and follow with an intercostal drain in the safe triangle.",
          ],
        },
        {
          heading: "3. Circulation and haemorrhage control",
          points: [
            "He is in class III shock: pulse 128, narrow pulse pressure, tachypnoea and agitation, corresponding to a loss of 30-40% of blood volume.",
            "Search the five sites of concealed loss - chest, abdomen, pelvis and retroperitoneum, long bones, and the floor - and note that a femoral fracture alone can hold 1-1.5 litres.",
            "Apply a pelvic binder at the level of the greater trochanters if a pelvic fracture is suspected, splint and gently realign the femur with traction, and dress open wounds.",
            "Insert two 14-16 gauge cannulae, take blood for cross-match, haemoglobin and glucose, and give 1 litre of warmed crystalloid; if the response is transient or absent, the next fluid is blood.",
            "Give tranexamic acid 1 g intravenously over 10 minutes now, well within 3 hours of injury, followed by 1 g over 8 hours, and record the time.",
            "Resuscitate to a palpable radial pulse and a systolic of 80-90 mmHg rather than to a normal blood pressure, unless a significant head injury requires a systolic above 110 mmHg.",
          ],
        },
        {
          heading: "4. Disability, exposure and adjuncts",
          points: [
            "Record GCS in its three components, pupil size and reaction, lateralising signs and the capillary glucose.",
            "Undress fully, log roll with four people to examine the back, then cover with warm blankets and warm the fluids and the room to prevent the lethal triad.",
            "Adjuncts as available: chest and pelvic radiographs, extended FAST, ECG, urinary catheter (withheld if there is blood at the meatus, perineal bruising or a high-riding prostate) and an orogastric tube if a base-of-skull fracture is suspected.",
            "Give titrated intravenous morphine 0.1 mg/kg or ketamine 0.25-0.5 mg/kg, tetanus prophylaxis, and antibiotics within one hour if the femoral fracture is open.",
          ],
        },
        {
          heading: "5. Transfer",
          points: [
            "Decide to transfer on the injury pattern and physiology and do not wait for imaging that will not change clinic management.",
            "Telephone the receiving surgeon, confirm acceptance and a bed, and call the ambulance early.",
            "Package the patient: airway secure or planned, oxygen for twice the journey, two running cannulae, haemorrhage controlled, femur splinted, spine motion restricted, warm and covered.",
            "Escort with a trained person carrying oxygen, suction, a self-inflating bag and drugs; reassess the primary survey before departure.",
            "Hand over in ATMIST with a written copy, send the cross-match sample and records, complete the medico-legal entry, and inform the family with the destination.",
          ],
        },
      ],
      mustDraw: [
        "A flow chart of <C>ABCDE with the intervention listed against each letter.",
        "The ATLS table of classes I-IV of haemorrhagic shock with pulse, blood pressure, pulse pressure, respiratory rate, urine output and mental state.",
      ],
      markSplit: [
        { part: "Preparation, team roles and catastrophic haemorrhage control", marks: 1.5 },
        { part: "Airway with cervical spine protection and the lethal chest injuries", marks: 2.5 },
        { part: "Circulation, shock class, haemorrhage control, fluids and tranexamic acid", marks: 3 },
        { part: "Disability, exposure, adjuncts and analgesia", marks: 1.5 },
        { part: "Transfer, packaging and ATMIST handover", marks: 1.5 },
      ],
      keywords: ["primary survey", "ABCDE", "class III shock", "tranexamic acid", "permissive hypotension", "ATMIST"],
    },
    {
      id: "emergency-trauma-primary-survey-t2",
      paper: "III",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write a short note on the principles of safe transfer of a critically injured patient from a primary care setting.",
      openingLines: [
        "Safe transfer is an active clinical intervention, not a handover of responsibility: the referring doctor remains responsible until the patient is physically received, and most avoidable deterioration in transit follows from an unresuscitated or unpackaged patient rather than from the journey itself.",
        "The principles are early decision, resuscitation and stabilisation before departure, a doctor-to-doctor accepted destination, meticulous packaging, an appropriately skilled escort with equipment, a structured handover, and complete documentation.",
      ],
      answer: [
        {
          heading: "Decide early and communicate",
          points: [
            "Base the decision on the mechanism, the injury pattern and the physiology, not on investigation results, and never delay for a test that will not change what the clinic can do.",
            "Speak doctor to doctor, name the receiving consultant and unit, confirm acceptance and a bed, and agree the destination department, whether that is the emergency department, theatre or intensive care.",
            "Call the ambulance early and state the level of transport required, since the wait is often the longest part of the process.",
          ],
        },
        {
          heading: "Stabilise and package",
          points: [
            "Complete the primary survey and treat every abnormality found: airway secured or a written plan for it, chest decompressed and drained, haemorrhage controlled by pressure, tourniquet, binder or splint.",
            "Two secure, taped, running cannulae; warmed fluid and blood as needed; tranexamic acid given within 3 hours; analgesia and antiemetic given.",
            "Urinary catheter and gastric tube where indicated, fractures splinted, wounds dressed, spinal motion restricted, and the patient wrapped to prevent hypothermia.",
            "Never transfer with an untreated tension pneumothorax, an unprotected airway, uncontrolled bleeding or an unsplinted pelvis.",
          ],
        },
        {
          heading: "Escort, equipment and monitoring",
          points: [
            "Send a trained escort with every unstable patient, never the driver alone, and match the escort's skill to the anticipated problems.",
            "Carry oxygen sufficient for twice the estimated journey time, suction, a self-inflating bag with masks, airway adjuncts, monitoring, and the drugs likely to be needed including adrenaline and analgesia.",
            "Reassess the primary survey immediately before departure and repeat observations at fixed intervals throughout the journey, recording them.",
            "Secure the patient and all equipment; the commonest transfer incidents are a displaced cannula, a disconnected oxygen supply, an exhausted cylinder and a lost tube.",
          ],
        },
        {
          heading: "Handover and documentation",
          points: [
            "Hand over once, in a quiet space, using ATMIST: Age, Time of injury, Mechanism, Injuries, Signs with trends, and Treatment given with times.",
            "Send a written copy along with radiographs, laboratory results, a cross-match sample and the medico-legal register number.",
            "Document the time of injury, arrival, each intervention and drug, the observations, the name of the accepting doctor, and the time of departure.",
            "Inform the family of the destination and give them the hospital's contact details; arrange for a relative to travel or follow, and complete police intimation where the case is medico-legal.",
          ],
        },
      ],
      mustDraw: [
        "A checklist table for the packaged patient - airway, breathing, circulation, splints, warmth, lines, drains, documents, escort, equipment.",
        "The ATMIST handover mnemonic written out with an example line for each letter.",
      ],
      markSplit: [
        { part: "Early decision and doctor-to-doctor acceptance", marks: 1 },
        { part: "Stabilisation and packaging, with the absolute contraindications to transfer", marks: 2 },
        { part: "Escort, equipment and en-route monitoring", marks: 1 },
        { part: "ATMIST handover and documentation", marks: 1 },
      ],
      keywords: ["safe transfer", "packaging", "ATMIST", "escort", "pre-alert", "medico-legal"],
    },
  ],
  mcqs: [
    {
      id: "emergency-trauma-primary-survey-q1",
      stem: "A 25-year-old man arrives after a road crash with severe respiratory distress, absent breath sounds on the right, hyper-resonance, distended neck veins and a blood pressure of 76/50 mmHg. What is the immediate next step?",
      options: [
        "Obtain an urgent portable chest radiograph to confirm the diagnosis",
        "Insert an intercostal drain in the fifth intercostal space after local anaesthesia",
        "Needle decompression with a 14-gauge cannula in the fifth intercostal space at the anterior axillary line",
        "Give 2 litres of crystalloid rapidly and reassess",
        "Intubate and ventilate with positive pressure",
      ],
      answer: 2,
      explanation:
        "Tension pneumothorax is a clinical diagnosis treated by immediate needle decompression, and ATLS now places the needle in the fifth intercostal space at the anterior axillary line because the traditional second space in the mid-clavicular line frequently fails to reach the pleura in adults; a chest drain follows. Waiting for a radiograph to confirm it is the classic error and costs the patient the minutes in which decompression works. Formal drain insertion with infiltration takes several minutes that this patient does not have, though it must follow immediately. Fluid does not relieve the mechanical obstruction to venous return. Positive-pressure ventilation before decompression converts a tension pneumothorax into a cardiac arrest.",
      difficulty: "easy",
    },
    {
      id: "emergency-trauma-primary-survey-q2",
      stem: "A trauma patient injured 4 hours ago arrives shocked from ongoing bleeding. Regarding tranexamic acid, which statement is correct?",
      options: [
        "Give 1 g intravenously now, since benefit is independent of timing",
        "Do not give it, because after 3 hours from injury it increases mortality from bleeding",
        "Give a double dose of 2 g to compensate for the delay",
        "Give it only if the platelet count is below 50,000 per microlitre",
        "Give it only after blood transfusion has been started",
      ],
      answer: 1,
      explanation:
        "The CRASH-2 trial showed that tranexamic acid reduces death from bleeding when given within 3 hours of injury and that treatment started after 3 hours increases the risk of death from bleeding, so the time of injury and not the time of arrival governs the decision, and the drug is withheld here. Benefit is strongly time-dependent, being greatest within the first hour, so timing is not irrelevant. Doubling the dose does not overcome a biologically adverse late effect and increases thrombotic risk. The platelet count has nothing to do with the indication, which is significant traumatic haemorrhage or risk of it. Making it conditional on transfusion delays a drug whose whole value lies in being given early.",
      difficulty: "moderate",
    },
    {
      id: "emergency-trauma-primary-survey-q3",
      stem: "A 40-year-old man with a stab wound to the abdomen has a pulse of 130 and a blood pressure of 82/64 mmHg. He has had 1 litre of warmed crystalloid with only transient improvement. He has no head injury. What is the most appropriate approach?",
      options: [
        "Give a further 3 litres of crystalloid to restore a systolic of 120 mmHg",
        "Start blood transfusion, accept a systolic of 80-90 mmHg with a palpable radial pulse, and transfer urgently for surgery",
        "Start a noradrenaline infusion to raise the mean arterial pressure",
        "Give intravenous furosemide to protect the kidneys",
        "Observe for 2 hours to see whether the bleeding settles",
      ],
      answer: 1,
      explanation:
        "A transient responder with penetrating abdominal injury has ongoing haemorrhage, and damage control resuscitation means blood products rather than more crystalloid, permissive hypotension to a systolic of 80-90 mmHg with a palpable radial pulse until surgical control, and immediate transfer to theatre. Chasing a normal blood pressure with several more litres of crystalloid dilutes clotting factors, cools the patient and dislodges formed clot. Vasopressors in uncontrolled haemorrhage raise the pressure without replacing volume and worsen tissue perfusion and outcome. Furosemide in a hypovolaemic patient causes further intravascular depletion. Observation in a transient responder with a penetrating injury allows exsanguination.",
      difficulty: "moderate",
    },
    {
      id: "emergency-trauma-primary-survey-q4",
      stem: "Which of these findings should prevent you from passing a urethral catheter in a trauma patient?",
      options: [
        "A pelvic fracture seen on the radiograph",
        "Blood at the urethral meatus with perineal bruising",
        "Gross haematuria on the first specimen",
        "A distended bladder on palpation",
        "Inability of the patient to void spontaneously",
      ],
      answer: 1,
      explanation:
        "Blood at the urethral meatus, perineal or scrotal bruising and a high-riding prostate indicate urethral disruption, and passing a catheter can convert a partial tear into a complete one; suprapubic drainage and urological assessment are required instead. A pelvic fracture alone raises suspicion and prompts the examination but does not by itself contraindicate catheterisation once those signs are excluded. Gross haematuria indicates renal or bladder injury and is in fact a reason to drain and investigate. A distended bladder and inability to void are indications for drainage, and it is precisely in that setting that the meatus and perineum must be inspected first.",
      difficulty: "easy",
    },
    {
      id: "emergency-trauma-primary-survey-q5",
      stem: "During transfer preparation of a head-injured trauma patient with a GCS of 7, which target set is correct?",
      options: [
        "SpO2 above 94%, systolic blood pressure above 110 mmHg, head up 30 degrees, airway secured",
        "SpO2 above 88%, permissive hypotension to a systolic of 80 mmHg, flat supine, airway unsupported",
        "Routine hyperventilation to a PaCO2 of 25 mmHg for the whole journey",
        "Dexamethasone 8 mg IV and transfer without securing the airway",
        "Withhold all fluids to reduce cerebral oedema",
      ],
      answer: 0,
      explanation:
        "In traumatic brain injury both hypoxia and hypotension roughly double mortality, so the targets are an SpO2 above 94%, a systolic pressure above 110 mmHg, normocapnia, the head up 30 degrees, and a definitive airway because a GCS of 8 or less means the airway is unprotected. Permissive hypotension is specifically abandoned when a significant head injury is present, since cerebral perfusion pressure depends on the systemic pressure. Prolonged hyperventilation causes cerebral vasoconstriction and ischaemia and is reserved as a very short-term measure for impending herniation. Steroids increase mortality in head injury, as the CRASH trial showed, and transferring an unprotected airway is indefensible. Fluid restriction produces hypotension, which is far more damaging than the oedema it is meant to prevent.",
      difficulty: "hard",
    },
  ],
  cards: [
    {
      id: "emergency-trauma-primary-survey-c1",
      front: "The order of the primary survey.",
      back: "<C>ABCDE - Catastrophic haemorrhage, Airway with cervical spine protection, Breathing, Circulation with haemorrhage control, Disability, Exposure. Treat each problem as it is found before moving on, and reassess from A after every intervention.",
    },
    {
      id: "emergency-trauma-primary-survey-c2",
      front: "The six immediately life-threatening chest injuries.",
      back: "Airway obstruction, tension pneumothorax, open pneumothorax, massive haemothorax, flail chest with pulmonary contusion, cardiac tamponade. All are clinical diagnoses; none waits for a radiograph.",
    },
    {
      id: "emergency-trauma-primary-survey-c3",
      front: "Needle decompression of a tension pneumothorax.",
      back: "14-gauge cannula in the fifth intercostal space at the anterior axillary line in adults (second space mid-clavicular line in children), followed immediately by an intercostal drain in the safe triangle.",
    },
    {
      id: "emergency-trauma-primary-survey-c4",
      front: "Where does blood hide in trauma?",
      back: "On the floor and four more: the chest, the abdomen, the pelvis and retroperitoneum, and the long bones. A femur holds 1-1.5 litres and a pelvis several litres.",
    },
    {
      id: "emergency-trauma-primary-survey-c5",
      front: "Tranexamic acid in trauma.",
      back: "1 g IV over 10 minutes as early as possible and always within 3 hours of injury, then 1 g over 8 hours. Child 15 mg/kg (max 1 g) then 2 mg/kg/hour. After 3 hours it increases mortality.",
    },
    {
      id: "emergency-trauma-primary-survey-c6",
      front: "Fluid strategy in haemorrhagic shock.",
      back: "One litre of warmed crystalloid (child 20 mL/kg), then blood (child 10 mL/kg) in a 1:1:1 ratio with plasma and platelets. Permissive hypotension to a systolic of 80-90 mmHg until surgical control, except in head injury where the systolic must exceed 110 mmHg.",
    },
    {
      id: "emergency-trauma-primary-survey-c7",
      front: "The lethal triad.",
      back: "Hypothermia, acidosis and coagulopathy, each worsening the others. Prevented by warmed fluids, a warm patient, a warm room, early blood products and rapid surgical control of bleeding.",
    },
    {
      id: "emergency-trauma-primary-survey-c8",
      front: "ATMIST handover.",
      back: "Age, Time of injury, Mechanism, Injuries found and suspected, Signs with trends, Treatment given with times. Delivered once, with everyone listening, and a written copy sent with the ambulance.",
    },
  ],
  references: [
    "Advanced Trauma Life Support (ATLS) Student Course Manual, 10th edition, American College of Surgeons Committee on Trauma, 2018",
    "CRASH-2 collaborators. Effects of tranexamic acid on death, vascular occlusive events and blood transfusion in trauma patients with significant haemorrhage, The Lancet 2010",
    "CRASH-3 collaborators. Effects of tranexamic acid on death, disability and vascular occlusive events in traumatic brain injury, The Lancet 2019",
    "National Institute for Health and Care Excellence NG39. Major trauma: assessment and initial management, 2016 (updated 2023)",
    "Spahn DR et al. The European guideline on management of major bleeding and coagulopathy following trauma, 6th edition, Critical Care 2019",
    "Association of Anaesthetists of Great Britain and Ireland. Recommendations for the safe transfer of patients with brain injury, 2019",
    "Brain Trauma Foundation. Guidelines for the Management of Severe Traumatic Brain Injury, 4th edition, 2016",
    "National Programme for Prevention and Management of Trauma and Burn Injuries, Ministry of Health and Family Welfare, Government of India, 2023",
  ],
});

topics.push({
  id: "emergency-altered-sensorium",
  title: "Altered sensorium in the clinic",
  oneLiner:
    "Altered sensorium is any acute change in the level of arousal or the content of consciousness, and in a family clinic it is managed by securing airway, breathing and circulation first, then excluding hypoglycaemia, hypoxia, opioid effect and seizure at the bedside within minutes, before a structured search through the AEIOU TIPS causes and an early, escorted transfer.",
  frequency: "core",
  keywords: [
    "altered sensorium",
    "altered mental status",
    "coma",
    "unconscious patient",
    "delirium",
    "Glasgow Coma Scale",
    "GCS",
    "AEIOU TIPS",
    "hypoglycaemia",
    "coma cocktail",
    "naloxone",
    "thiamine",
    "Wernicke encephalopathy",
    "status epilepticus",
    "hepatic encephalopathy",
    "cerebral malaria",
    "hyponatraemia",
    "meningitis",
    "AVPU",
    "pupillary signs",
  ],
  sections: [
    {
      heading: "Definition, triage and the first five minutes",
      points: [
        "**Altered sensorium is an acute disturbance of either arousal (the level of consciousness) or content (awareness, attention and cognition), and it is a symptom, never a diagnosis.** The examiner wants that distinction in the first line: a drowsy patient has reduced arousal, a confused but awake patient has disordered content, and both are emergencies until a cause is found.",
        "Grade the level immediately with **AVPU - Alert, responds to Voice, responds to Pain, Unresponsive - because it takes five seconds, and any patient who is P or U has a Glasgow Coma Scale of about 8 or less and an airway that is no longer protected.** Convert to a formal GCS with the three components written separately (E, V, M) once the airway is safe.",
        "Work in the fixed order airway, breathing, circulation, disability, exposure. **The commonest avoidable death in altered sensorium is aspiration or obstruction from an unsupported airway, not the underlying disease**, so a head-tilt chin-lift or jaw thrust, suction, an oropharyngeal airway and the recovery position come before any history taking.",
        "Attach oxygen to keep saturation 94-98% (88-92% if known chronic hypercapnic lung disease), attach a pulse oximeter, take the blood pressure, count the respiratory rate, and check the temperature; hypoxia, hypotension, hypoglycaemia and hyperthermia are all causes of coma that are correctable in the clinic itself.",
        "**Check capillary blood glucose in every single patient with altered sensorium, without exception, before anything else diagnostic** - it is the one cause that is both instantly reversible and instantly fatal if missed, and no clinical sign reliably separates hypoglycaemia from stroke or sepsis.",
        "While the examination proceeds, send a named person to call the ambulance service and a named person to bring the emergency tray and glucometer; simultaneously ask a relative for the three questions that solve most cases - what drugs and alcohol, what illnesses, and what happened in the last 24 hours.",
      ],
    },
    {
      heading: "The structured cause list: AEIOU TIPS in Indian practice",
      points: [
        "**AEIOU TIPS: Alcohol and Acidosis; Epilepsy, Endocrine and Electrolytes; Insulin (hypo- and hyperglycaemia); Opiates and Oxygen lack; Uraemia; Trauma and Temperature; Infection; Psychiatric and Porphyria; Stroke, Shock, Space-occupying lesion and Snake bite.** Reciting a structured list is worth more marks than naming ten diseases at random.",
        "In Indian family practice the commonest causes in an adult are **hypoglycaemia from sulfonylureas or insulin, alcohol intoxication and withdrawal, sepsis with delirium in the elderly, stroke, uraemic and hepatic encephalopathy, and organophosphate or other deliberate self-poisoning**; add cerebral malaria, enteric fever and tuberculous meningitis where those are endemic.",
        "In a child the priorities differ: **hypoglycaemia, febrile status epilepticus, acute bacterial meningitis, cerebral malaria, dengue with shock, diabetic ketoacidosis presenting for the first time, accidental kerosene or drug ingestion, and inflicted head injury.** A child with fever and altered sensorium has meningitis until proved otherwise.",
        "In the elderly, altered sensorium is usually **delirium from a systemic cause outside the brain - urinary or chest infection, dehydration, urinary retention, constipation, hypoxia, or a newly added anticholinergic, benzodiazepine, opioid or steroid** - and the drug chart is part of the neurological examination.",
        "Never accept the label of alcohol intoxication, psychiatric illness or postictal state at first contact. **A patient who smells of alcohol may still have a subdural haematoma, hypoglycaemia or Wernicke encephalopathy**, and the diagnosis of a functional cause is one of exclusion made after glucose, oxygenation and a neurological examination are documented as normal.",
        "Ask specifically about the tempo: a sudden onset over seconds to minutes suggests vascular, seizure or cardiac causes; hours to days suggests infection, metabolic or drug causes; days to weeks suggests a space-occupying lesion, chronic subdural haematoma, tuberculous meningitis or hypothyroidism.",
      ],
    },
    {
      heading: "The focused examination that localises the problem",
      points: [
        "**Record the GCS as its three components (for example E2 V2 M4 = 8) rather than the total alone**, because the motor score carries most of the prognostic weight and a total score hides deterioration in one component. A fall of 2 or more points, or any fall to 8 or below, mandates immediate airway support and transfer.",
        "**Pupils are the single most useful sign in an unconscious patient**: pinpoint and reactive suggests opioids or pontine haemorrhage; a unilateral fixed dilated pupil suggests uncal herniation from an expanding mass and is an emergency; mid-position fixed pupils suggest midbrain injury; and widely dilated reactive pupils suggest anticholinergic or sympathomimetic poisoning.",
        "Look for lateralising signs by observing spontaneous movement and the response to a painful stimulus on each side; **asymmetry of movement, tone or plantar response points to a structural lesion, while a symmetrical picture with preserved brainstem reflexes points to a metabolic or toxic cause.**",
        "Examine the neck for stiffness (absent in the very young, the very old and the deeply comatose), the fundus for papilloedema and subhyaloid haemorrhage, the skin for rash, needle marks, jaundice, cyanosis and injury, the breath for alcohol, ketones or the garlic odour of organophosphate, and the scalp and mastoids for injury.",
        "**Look for the treatable poisoning toxidromes: cholinergic (pinpoint pupils, sweating, salivation, bradycardia, fasciculations - organophosphate), opioid (pinpoint pupils, slow shallow respiration, coma), anticholinergic (dry, hot, flushed, dilated pupils, retention) and sympathomimetic (dilated pupils, sweating, tachycardia, hypertension).**",
        "Document the time of every observation. A single GCS has limited value; **the trend of the GCS, pupils and vital signs over 15-minute intervals is what the receiving hospital and the court will read**, and it is the trend that decides whether transfer becomes urgent.",
      ],
    },
    {
      heading: "The bedside cocktail: what to give, at what dose, and when",
      points: [
        "**Hypoglycaemia (capillary glucose below 70 mg/dL, or any unconscious diabetic whatever the reading): adult 25% dextrose 100 mL (25 g) intravenously over 1-3 minutes through a large-bore cannula, repeated after 10-15 minutes if the patient has not woken and the glucose remains low.** Recheck glucose 15 minutes after every dose.",
        "**Paediatric hypoglycaemia: 10% dextrose 5 mL/kg (0.5 g/kg) intravenously; for a neonate use 10% dextrose 2 mL/kg. Never give 25% or 50% dextrose to a small child through a peripheral vein** - it is hyperosmolar, scleroses veins and causes tissue necrosis on extravasation. If no vein is available, glucagon 1 mg intramuscularly for an adult or child over 25 kg, and 0.5 mg if under 25 kg.",
        "**Give thiamine 100 mg intravenously or intramuscularly before or with the glucose in anyone malnourished, alcoholic, vomiting in pregnancy or on dialysis**, because a glucose load in thiamine deficiency can precipitate Wernicke encephalopathy. Where Wernicke is suspected clinically, the treatment dose is thiamine 500 mg intravenously three times a day for 2 days, then 250 mg daily.",
        "**Suspected opioid overdose (respiratory rate below 12, pinpoint pupils, coma): naloxone 0.4 mg intravenously, repeated every 2-3 minutes titrated to an adequate respiratory rate rather than to full wakefulness, up to a total of about 10 mg before the diagnosis is reconsidered.** If no vein, give the same dose intramuscularly. Child: 0.01 mg/kg intravenously, repeated every 2-3 minutes.",
        "**Naloxone is shorter acting than every opioid it reverses (its effect wanes in 30-90 minutes), so a patient who wakes must still be observed or transferred, and long-acting agents such as methadone or sustained-release morphine need an infusion.** Sudden full reversal in a dependent patient causes agitation, vomiting and aspiration - titrate.",
        "**Do not give flumazenil routinely for suspected benzodiazepine overdose**: in a mixed overdose or a chronically dependent patient it precipitates intractable seizures and arrhythmia, and supportive airway care is safer. Similarly, avoid empirical sedation of an agitated confused patient until glucose and hypoxia have been excluded.",
      ],
    },
    {
      heading: "Cause-specific treatment started before transfer",
      points: [
        "**Convulsive status epilepticus (a seizure lasting 5 minutes or more, or repeated seizures without recovery between): lorazepam 4 mg intravenously over 2 minutes in an adult, repeated once after 10 minutes; if no intravenous access, midazolam 10 mg intramuscularly (5 mg if 13-40 kg).** Child: lorazepam 0.1 mg/kg intravenously to a maximum of 4 mg per dose, or buccal or intranasal midazolam 0.2 mg/kg to a maximum of 10 mg, or rectal diazepam 0.5 mg/kg to a maximum of 20 mg.",
        "**If seizures continue after two doses of benzodiazepine, give a second-line agent while arranging transfer: levetiracetam 60 mg/kg intravenously over 10 minutes (maximum 4500 mg), or sodium valproate 40 mg/kg (maximum 3000 mg), or fosphenytoin 20 mg phenytoin-equivalents/kg.** Plain phenytoin 20 mg/kg must be diluted in normal saline only and infused at no more than 50 mg/min in an adult (1 mg/kg/min in a child) with cardiac monitoring.",
        "**Suspected bacterial meningitis (fever, headache, neck stiffness, altered sensorium, purpuric rash): give the first dose of ceftriaxone before transfer - adult 2 g intravenously (then 12-hourly), child 50 mg/kg per dose (100 mg/kg/day in two divided doses, maximum 4 g/day)**, with dexamethasone 0.15 mg/kg intravenously 6-hourly given with or just before the first antibiotic dose. Do not delay antibiotics for imaging or lumbar puncture.",
        "**Cerebral malaria in an endemic area: intravenous artesunate 2.4 mg/kg at 0, 12 and 24 hours and then daily; children under 20 kg receive 3 mg/kg per dose.** Treat the hypoglycaemia that accompanies it, avoid fluid overload, and never use quinine as first line where artesunate is available.",
        "Hepatic encephalopathy is treated by finding and stopping the precipitant - gastrointestinal bleeding, sepsis, constipation, diuretics, sedatives, high protein load - together with lactulose 30 mL orally or by nasogastric tube two to four times a day, titrated to two or three soft stools daily.",
        "**Severe symptomatic hyponatraemia with seizures or coma: 3% saline 100 mL intravenously over 10 minutes, repeated up to three times until symptoms improve, while keeping total correction within 8 mmol/L in 24 hours** - faster correction risks osmotic demyelination. In hypertensive encephalopathy, lower the mean arterial pressure by no more than 20-25% in the first hour, with a titratable agent such as labetalol.",
      ],
    },
    {
      heading: "Airway, transfer and the medico-legal record",
      points: [
        "**A GCS of 8 or less, loss of the gag reflex, or vomit or blood in the airway means the airway must be secured**; in a clinic without intubation skills this is a jaw thrust, suction, an oropharyngeal airway, the left lateral recovery position, high-flow oxygen and the fastest possible escorted transfer.",
        "Restrict spinal motion in any unconscious patient in whom trauma cannot be excluded from the history, and log-roll rather than lift. **A patient found unconscious at the roadside or at the bottom of stairs is a trauma patient until the mechanism is known.**",
        "Send with the patient: the timed observation chart including serial GCS and pupils, the capillary glucose readings and everything given with times and doses, the drug packets or poison container brought by the family, and a written referral naming the accepting doctor if one has been contacted.",
        "**Do not send an unconscious patient in a private car with only a relative.** Send a trained escort, a self-inflating bag with mask, suction, oxygen sufficient for at least twice the journey time, and the drugs already needed, and hand over face to face.",
        "Record the medico-legal essentials when the cause may be poisoning, assault, road traffic injury, burns or a suspicious fall: the time and place found, who brought the patient, the exact words of the informant, the findings, the police intimation, and the identifying marks; alcohol should be described as an odour, never certified.",
        "Explain honestly to the family that the cause is not yet known, that the patient is being transferred because the clinic cannot provide imaging and intensive care, and document the explanation and the consent for transfer.",
      ],
    },
  ],
  tables: [
    {
      heading: "Glasgow Coma Scale - record E, V and M separately",
      columns: ["Score", "Eye opening (E)", "Verbal response (V)", "Best motor response (M)"],
      rows: [
        ["6", "Not applicable", "Not applicable", "Obeys commands"],
        ["5", "Not applicable", "Oriented", "Localises to pain"],
        ["4", "Spontaneous", "Confused conversation", "Withdraws from pain"],
        ["3", "To speech", "Inappropriate words", "Abnormal flexion (decorticate)"],
        ["2", "To pain", "Incomprehensible sounds", "Extension (decerebrate)"],
        ["1", "None", "None", "None"],
      ],
    },
    {
      heading: "Bedside finding, the cause it signals, and the immediate drug with dose",
      columns: ["Bedside finding", "Cause it signals", "Immediate action with dose"],
      rows: [
        [
          "Capillary glucose below 70 mg/dL",
          "Hypoglycaemia (sulfonylurea, insulin, alcohol, sepsis, malaria)",
          "Adult 25% dextrose 100 mL IV over 1-3 min, repeat in 10-15 min if still low; child 10% dextrose 5 mL/kg IV; neonate 10% dextrose 2 mL/kg IV",
        ],
        [
          "Pinpoint pupils with respiratory rate below 12",
          "Opioid toxicity",
          "Naloxone 0.4 mg IV (or IM if no vein), repeat every 2-3 min titrated to respiration, up to about 10 mg total; child 0.01 mg/kg IV every 2-3 min",
        ],
        [
          "Pinpoint pupils with sweating, salivation, fasciculations",
          "Organophosphate or carbamate poisoning",
          "Atropine 2-5 mg IV in an adult (child 0.05 mg/kg), dose doubled every 5 min until chest is clear and skin dry; then pralidoxime",
        ],
        [
          "Continuous seizure for 5 minutes or more",
          "Convulsive status epilepticus",
          "Lorazepam 4 mg IV over 2 min, repeat once after 10 min; no vein: midazolam 10 mg IM (adult). Child: lorazepam 0.1 mg/kg IV, max 4 mg per dose",
        ],
        [
          "Fever with neck stiffness or purpuric rash",
          "Bacterial meningitis or meningococcaemia",
          "Ceftriaxone 2 g IV in an adult (child 50 mg/kg per dose) plus dexamethasone 0.15 mg/kg IV, given before transfer and before imaging",
        ],
        [
          "Malnourished or alcoholic patient needing glucose",
          "Risk of precipitating Wernicke encephalopathy",
          "Thiamine 100 mg IV or IM before or with the dextrose; if Wernicke is suspected, thiamine 500 mg IV three times daily for 2 days",
        ],
      ],
    },
  ],
  redFlags: [
    "Glasgow Coma Scale 8 or less, or a fall of 2 or more points on serial charting - the airway is unprotected and transfer is immediate.",
    "A unilateral fixed dilated pupil, new asymmetric weakness, bradycardia with hypertension and irregular breathing (Cushing response) - raised intracranial pressure with herniation.",
    "Fever with neck stiffness, a purpuric or petechial rash, or altered sensorium in a child with fever - give ceftriaxone and transfer without waiting for investigations.",
    "Altered sensorium with a capillary glucose below 70 mg/dL that recurs after treatment, especially on a sulfonylurea - these patients need admission and a dextrose infusion, never discharge.",
    "Any unconscious patient with an unclear mechanism of injury, blood at the meatus, scalp wound or possible fall - manage as trauma with spinal motion restriction.",
    "Focal seizure or seizure that does not stop after two doses of benzodiazepine, or a postictal state that does not clear within 30 minutes.",
  ],
  pearls: [
    "Glucose first, every time. A capillary glucose takes 30 seconds and is the only test that can end the emergency; forgetting it is the commonest single error in the viva and in the clinic.",
    "Give thiamine 100 mg before or with dextrose in the malnourished or alcoholic patient - the glucose load consumes the last of the thiamine and can precipitate Wernicke encephalopathy.",
    "Record GCS as E, V and M, not as a total. The examiner will ask you to break down a total of 8, and the motor score carries the prognosis.",
    "Naloxone is titrated to respiratory rate, not to wakefulness, and wears off before the opioid does - so the patient still needs observation or transfer after waking.",
    "A patient smelling of alcohol has an alternative diagnosis until glucose, oxygenation, a neurological examination and a head-to-toe survey say otherwise; subdural haematoma is the classic missed cause.",
    "In the elderly, delirium is usually caused outside the brain - infection, retention, constipation, dehydration or a new drug - so review the prescription as part of the neurological examination.",
  ],
  theory: [
    {
      id: "emergency-altered-sensorium-t1",
      paper: "III",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 58-year-old man is brought to your clinic by his family, unresponsive for the last one hour. Describe your immediate assessment and management, and outline the causes you would consider.",
      openingLines: [
        "Altered sensorium is an acute disturbance of the level of arousal or the content of consciousness; it is a symptom and not a diagnosis, and in an unresponsive adult it is an immediate threat to the airway.",
        "My management runs in parallel rather than in sequence: airway, breathing and circulation are secured while a capillary blood glucose is checked, reversible causes are treated at the bedside, and a structured search for the cause proceeds using the AEIOU TIPS framework, with early escorted transfer.",
      ],
      answer: [
        {
          heading: "Immediate resuscitation (first 5 minutes)",
          points: [
            "Assess responsiveness with AVPU; a patient responding only to pain or unresponsive has a GCS of about 8 or less and an unprotected airway.",
            "Open the airway with head-tilt chin-lift, or jaw thrust if trauma is possible; suction secretions or vomit, insert an oropharyngeal airway if tolerated, and place in the left lateral recovery position.",
            "Give oxygen to maintain saturation 94-98%, support ventilation with a bag and mask if the respiratory rate is below 8 or breathing is inadequate, and attach a pulse oximeter.",
            "Secure two intravenous cannulae, record pulse, blood pressure, respiratory rate and temperature, and treat shock with a fluid bolus while looking for its cause.",
            "Check capillary blood glucose immediately in every patient, without exception.",
          ],
        },
        {
          heading: "The bedside reversible-cause cocktail with doses",
          points: [
            "Hypoglycaemia: 25% dextrose 100 mL (25 g) intravenously over 1-3 minutes in an adult, repeated after 10-15 minutes if not awake and glucose remains low; in a child 10% dextrose 5 mL/kg, and in a neonate 10% dextrose 2 mL/kg. Recheck glucose 15 minutes after each dose.",
            "Thiamine 100 mg intravenously or intramuscularly before or with the dextrose in the malnourished or alcoholic patient; 500 mg intravenously three times daily for 2 days if Wernicke encephalopathy is suspected.",
            "Suspected opioid toxicity: naloxone 0.4 mg intravenously repeated every 2-3 minutes, titrated to an adequate respiratory rate, to a maximum of about 10 mg; child 0.01 mg/kg. Observe after waking because naloxone wears off in 30-90 minutes.",
            "Seizure lasting 5 minutes or more: lorazepam 4 mg intravenously over 2 minutes, repeated once after 10 minutes; midazolam 10 mg intramuscularly if there is no venous access.",
            "Avoid flumazenil for suspected benzodiazepine overdose because of the risk of precipitating seizures in a mixed overdose or dependent patient.",
          ],
        },
        {
          heading: "Focused history and examination",
          points: [
            "History from the family: diabetes and its drugs, alcohol, epilepsy, liver or kidney disease, psychiatric illness, recent fever or headache, trauma, all prescribed and traditional medicines, and access to poisons or pesticides.",
            "Examine for GCS recorded as E, V and M; pupil size, symmetry and reaction; lateralising motor signs; neck stiffness; fundus for papilloedema; and a head-to-toe survey for injury, needle marks, rash and jaundice.",
            "Identify toxidromes: cholinergic, opioid, anticholinergic and sympathomimetic, each of which has a specific antidote or specific supportive treatment.",
            "Repeat and chart the observations at 15-minute intervals; the trend, not the single reading, drives decisions.",
          ],
        },
        {
          heading: "Causes - AEIOU TIPS",
          points: [
            "Alcohol and Acidosis; Epilepsy, Endocrine (thyroid, adrenal) and Electrolytes; Insulin - both hypoglycaemia and hyperglycaemic emergencies; Opiates and Oxygen lack.",
            "Uraemia and other organ failures including hepatic encephalopathy; Trauma including chronic subdural haematoma, and Temperature (heat stroke, hypothermia).",
            "Infection - meningitis, encephalitis, cerebral malaria, enteric fever, sepsis with delirium in the elderly; Psychiatric and Porphyria.",
            "Stroke, Shock, Space-occupying lesion and Snake bite (neurotoxic envenomation presenting as ptosis and paralysis rather than true coma).",
          ],
        },
        {
          heading: "Investigations and definitive plan",
          points: [
            "At the clinic: capillary glucose, pulse oximetry, ECG, urine dipstick, and where available haemoglobin, urea, creatinine, sodium, potassium and a malaria rapid test.",
            "At the referral centre: computed tomography of the head, lumbar puncture where meningitis is suspected and there is no contraindication, arterial blood gas, liver and thyroid function, ammonia, blood cultures and a toxicology screen.",
            "Cause-specific treatment begun before transfer where indicated: ceftriaxone 2 g intravenously plus dexamethasone 0.15 mg/kg for suspected bacterial meningitis; artesunate 2.4 mg/kg intravenously for cerebral malaria; atropine for organophosphate poisoning.",
            "Transfer with a trained escort, oxygen, suction, a self-inflating bag, the timed observation chart and the drug or poison containers; hand over face to face and complete medico-legal documentation where required.",
          ],
        },
      ],
      mustDraw: [
        "A flow chart: unresponsive patient - AVPU and airway - oxygen and monitoring - capillary glucose - reversible-cause cocktail - focused examination with GCS and pupils - AEIOU TIPS search - stabilise and transfer.",
        "The AEIOU TIPS mnemonic expanded, with one Indian example against each letter.",
        "A GCS table with the E, V and M components scored out.",
      ],
      markSplit: [
        { part: "Definition and the parallel ABCDE approach with airway protection", marks: 2 },
        { part: "Capillary glucose and the reversible-cause cocktail with correct doses", marks: 3 },
        { part: "Focused examination including GCS, pupils and toxidromes", marks: 2 },
        { part: "AEIOU TIPS cause list", marks: 2 },
        { part: "Investigations, cause-specific treatment and safe transfer", marks: 1 },
      ],
      keywords: [
        "altered sensorium",
        "coma",
        "AEIOU TIPS",
        "GCS",
        "hypoglycaemia",
        "naloxone",
        "thiamine",
      ],
    },
    {
      id: "emergency-altered-sensorium-t2",
      paper: "III",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Short note: Convulsive status epilepticus - recognition and emergency management in family practice.",
      openingLines: [
        "Convulsive status epilepticus is a generalised convulsion lasting 5 minutes or longer, or two or more seizures without full recovery of consciousness between them; the older 30-minute definition is now used only to define established status.",
        "It is a time-critical emergency because neuronal injury and pharmacoresistance both increase with duration, so treatment is by the clock and not by observation.",
      ],
      answer: [
        {
          heading: "Immediate measures",
          points: [
            "Protect from injury, do not restrain the limbs and do not put anything into the mouth; turn the patient into the left lateral position and suction the airway.",
            "Give high-flow oxygen, attach a pulse oximeter, note the time the seizure began, and secure intravenous access.",
            "Check capillary blood glucose in every fitting patient and correct hypoglycaemia with 25% dextrose 100 mL intravenously in an adult, or 10% dextrose 5 mL/kg in a child.",
            "Give thiamine 100 mg intravenously before glucose in the alcoholic or malnourished patient.",
          ],
        },
        {
          heading: "First-line drug treatment with doses",
          points: [
            "Adult: lorazepam 4 mg intravenously over 2 minutes, repeated once after 10 minutes if the seizure continues (maximum two doses).",
            "Adult without intravenous access: midazolam 10 mg intramuscularly, or diazepam 10 mg by the rectal route.",
            "Child: lorazepam 0.1 mg/kg intravenously to a maximum of 4 mg per dose; without access, buccal or intranasal midazolam 0.2 mg/kg to a maximum of 10 mg, or rectal diazepam 0.5 mg/kg to a maximum of 20 mg.",
            "Never exceed two doses of benzodiazepine - a third dose adds respiratory depression without adding seizure control.",
          ],
        },
        {
          heading: "Second line and transfer",
          points: [
            "Levetiracetam 60 mg/kg intravenously over 10 minutes (maximum 4500 mg), or sodium valproate 40 mg/kg (maximum 3000 mg), or fosphenytoin 20 mg phenytoin-equivalents/kg.",
            "Plain phenytoin 20 mg/kg must be diluted in normal saline only, never dextrose, and given no faster than 50 mg/min in an adult or 1 mg/kg/min in a child, with pulse and blood pressure monitoring.",
            "If seizures persist after the second-line agent, this is refractory status requiring anaesthesia and ventilation - arrange immediate escorted transfer with airway support.",
            "Look for and treat the precipitant: missed antiepileptic doses, alcohol withdrawal, hypoglycaemia, hyponatraemia, meningitis, cerebral malaria, eclampsia, head injury or a space-occupying lesion.",
          ],
        },
        {
          heading: "Special situation",
          points: [
            "In a pregnant or recently delivered woman with a seizure, treat as eclampsia: magnesium sulphate 4 g of 20% solution intravenously over 5 minutes plus 10 g of 50% solution intramuscularly (5 g into each buttock), then 5 g intramuscularly every 4 hours, with 2 g intravenously for a recurrent fit.",
            "Monitor for magnesium toxicity by knee jerks, respiratory rate above 16 per minute and urine output above 30 mL per hour; the antidote is calcium gluconate 10%, 10 mL intravenously over 10 minutes.",
          ],
        },
      ],
      mustDraw: [
        "A timeline: 0 min recognise and airway - 5 min first benzodiazepine - 15 min second benzodiazepine - 20-25 min second-line agent - 40 min refractory status and anaesthesia.",
      ],
      markSplit: [
        { part: "Definition by the 5-minute rule", marks: 1 },
        { part: "Immediate airway, oxygen and glucose measures", marks: 1 },
        { part: "First-line benzodiazepine doses, adult and paediatric", marks: 2 },
        { part: "Second-line agents, transfer and precipitants", marks: 1 },
      ],
      keywords: ["status epilepticus", "lorazepam", "midazolam", "levetiracetam", "eclampsia", "magnesium sulphate"],
    },
  ],
  mcqs: [
    {
      id: "emergency-altered-sensorium-q1",
      stem: "A 62-year-old man with type 2 diabetes on glibenclamide is brought unconscious to your clinic. Capillary glucose reads 38 mg/dL. He has no intravenous access yet and is thin and alcoholic. What is the most appropriate immediate action?",
      options: [
        "Secure a cannula and give 25% dextrose 100 mL intravenously, with thiamine 100 mg intravenously before or with the dextrose",
        "Give 50% dextrose 50 mL through a small hand vein without thiamine, as thiamine delays treatment",
        "Give oral glucose gel by placing it under the tongue while he is unconscious",
        "Give intramuscular glucagon 1 mg first and withhold dextrose until he wakes",
        "Transfer immediately without treatment because the cause requires hospital investigation",
      ],
      answer: 0,
      explanation:
        "Hypoglycaemia is the one instantly reversible cause of coma, and the adult dose is 25% dextrose 100 mL (25 g) intravenously, with thiamine 100 mg given before or with the glucose in an alcoholic or malnourished patient because a glucose load in thiamine deficiency can precipitate Wernicke encephalopathy; thiamine takes seconds to draw up and does not delay treatment. Fifty per cent dextrose through a small vein is unnecessarily hyperosmolar and risks phlebitis and extravasation necrosis, and omitting thiamine in this patient is the error the question tests. Anything oral in an unconscious patient risks aspiration. Glucagon is a fallback only when there is no venous access and works poorly in an alcoholic with depleted glycogen stores, so it does not replace dextrose. Transferring an untreated hypoglycaemic patient wastes the minutes in which brain injury becomes permanent, and a sulfonylurea-induced hypoglycaemia will in any case relapse and needs both immediate dextrose and admission.",
      difficulty: "easy",
    },
    {
      id: "emergency-altered-sensorium-q2",
      stem: "A 24-year-old man is found unconscious with a respiratory rate of 8 per minute and pinpoint pupils. Capillary glucose is 96 mg/dL. What is the correct use of naloxone?",
      options: [
        "Give 2 mg intravenously as a single dose and discharge him once he is fully awake",
        "Give 0.4 mg intravenously and repeat every 2-3 minutes titrated to an adequate respiratory rate, then observe or transfer because naloxone wears off before the opioid does",
        "Give flumazenil first, since a mixed sedative overdose is more likely",
        "Withhold naloxone and simply ventilate, since naloxone always causes seizures",
        "Give naloxone by intravenous infusion only, since bolus dosing is contraindicated",
      ],
      answer: 1,
      explanation:
        "Naloxone is titrated in 0.4 mg intravenous increments every 2-3 minutes against the respiratory rate rather than against wakefulness, because full abrupt reversal in a dependent patient causes agitation, vomiting and aspiration; and since its action lasts only 30-90 minutes, which is shorter than most opioids, the patient must be observed or transferred even after waking. A single large dose followed by discharge is the classic fatal error, as re-narcotisation occurs after naloxone wears off. Flumazenil is not indicated here and is avoided in mixed overdose because it can precipitate intractable seizures. Ventilation alone is inferior when a safe specific antidote exists, and naloxone does not routinely cause seizures. An infusion is used for long-acting opioids after initial boluses, not instead of them.",
      difficulty: "moderate",
    },
    {
      id: "emergency-altered-sensorium-q3",
      stem: "A 3-year-old child with fever for two days is brought drowsy, responding only to pain, with neck stiffness and two purpuric spots on the leg. There is a two-hour journey to the nearest hospital. What should you do before transfer?",
      options: [
        "Arrange transfer immediately without antibiotics so that the lumbar puncture is not affected",
        "Give ceftriaxone 50 mg/kg intravenously with dexamethasone 0.15 mg/kg, then transfer with oxygen and an escort",
        "Give oral amoxicillin and paracetamol and review in the morning",
        "Perform a lumbar puncture in the clinic before starting any antibiotic",
        "Give only intravenous fluids, since antibiotics in the clinic will mask the diagnosis",
      ],
      answer: 1,
      explanation:
        "Fever with altered sensorium, neck stiffness and a purpuric rash is meningococcal disease until proved otherwise, and mortality falls with the earliest possible parenteral antibiotic; the correct paediatric dose is ceftriaxone 50 mg/kg per dose (100 mg/kg/day in two divided doses) with dexamethasone 0.15 mg/kg given with or just before the first dose, followed by escorted transfer. Withholding antibiotics to protect the lumbar puncture result is wrong, because blood cultures, polymerase chain reaction and the clinical picture still allow diagnosis while a two-hour delay costs lives. Oral amoxicillin with next-day review in a child with reduced consciousness is indefensible. Lumbar puncture in a drowsy child in a clinic without resuscitation facilities is unsafe and must not precede antibiotics. Fluids alone treat neither the infection nor the raised risk of rapid deterioration.",
      difficulty: "moderate",
    },
    {
      id: "emergency-altered-sensorium-q4",
      stem: "A 45-year-old man has been fitting continuously for 7 minutes. He has no intravenous access. Which is the correct first-line treatment?",
      options: [
        "Wait until 30 minutes have elapsed, as status epilepticus is defined by that duration",
        "Midazolam 10 mg intramuscularly, with a second dose of benzodiazepine after 10 minutes if the seizure continues",
        "Phenytoin 20 mg/kg intramuscularly",
        "Three successive doses of intramuscular diazepam at 2-minute intervals",
        "Intravenous levetiracetam before any benzodiazepine, once access is obtained",
      ],
      answer: 1,
      explanation:
        "Status epilepticus is now defined by a seizure of 5 minutes or more, and when there is no intravenous access the correct first-line drug is intramuscular midazolam 10 mg in an adult, with at most one further benzodiazepine dose after 10 minutes. Waiting for 30 minutes uses an obsolete definition and allows neuronal injury and benzodiazepine resistance to develop. Phenytoin must never be given intramuscularly because it is erratically absorbed and causes severe tissue necrosis; only fosphenytoin can be given by that route. Giving three or more benzodiazepine doses adds respiratory depression without improving seizure control, which is why the limit is two. Levetiracetam is a second-line agent used after two benzodiazepine doses have failed, not before them.",
      difficulty: "easy",
    },
    {
      id: "emergency-altered-sensorium-q5",
      stem: "An 80-year-old woman is brought with two days of fluctuating confusion, worse at night, with visual hallucinations. She is afebrile, GCS 14, and was started on a bladder antispasmodic last week. Which statement best guides management?",
      options: [
        "This is dementia and needs no acute evaluation, only a memory clinic appointment",
        "This is delirium, usually driven by a cause outside the brain such as infection, retention, constipation, dehydration or a new anticholinergic drug, and the search begins with a urine dipstick, bladder scan and drug review",
        "The fluctuating course and hallucinations make an urgent computed tomogram of the head the single most useful first test",
        "Start haloperidol at once, before looking for a cause, since agitation is the main risk",
        "Because she is afebrile, infection is excluded and a psychiatric referral is appropriate",
      ],
      answer: 1,
      explanation:
        "An acute, fluctuating disturbance of attention with hallucinations is delirium, and in the elderly its cause is nearly always systemic - urinary or chest infection, urinary retention, constipation, dehydration, hypoxia, pain or a newly added anticholinergic, benzodiazepine or opioid - so a urine dipstick, palpation or scan of the bladder, bowel history and a line-by-line drug review come first, and the recently started antispasmodic is the prime suspect. Dementia is chronic and progressive without the acute fluctuating attentional deficit, and calling this dementia delays a reversible diagnosis. Imaging has a low yield in delirium without head injury, focal signs or anticoagulation, and should follow rather than precede the systemic search. Sedating with haloperidol before the cause is found masks deterioration, prolongs delirium and is reserved for dangerous agitation at the lowest effective dose. The elderly frequently mount no fever with significant infection, so being afebrile excludes nothing.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "emergency-altered-sensorium-c1",
      front: "First test in every patient with altered sensorium?",
      back: "Capillary blood glucose, without exception. It is the only cause of coma that is both instantly reversible and instantly fatal if missed, and no clinical sign distinguishes it reliably from stroke or sepsis.",
    },
    {
      id: "emergency-altered-sensorium-c2",
      front: "Dose of dextrose for hypoglycaemic coma - adult, child, neonate?",
      back: "Adult: 25% dextrose 100 mL (25 g) IV over 1-3 minutes, repeat after 10-15 minutes if still low. Child: 10% dextrose 5 mL/kg IV. Neonate: 10% dextrose 2 mL/kg IV. Recheck glucose 15 minutes after each dose; never give 25% or 50% peripherally to a small child.",
    },
    {
      id: "emergency-altered-sensorium-c3",
      front: "Why thiamine before glucose, and at what dose?",
      back: "A glucose load consumes the remaining thiamine and can precipitate Wernicke encephalopathy in the alcoholic or malnourished. Give thiamine 100 mg IV or IM before or with the dextrose; if Wernicke is suspected, 500 mg IV three times daily for 2 days, then 250 mg daily.",
    },
    {
      id: "emergency-altered-sensorium-c4",
      front: "Naloxone: dose, endpoint and the trap.",
      back: "0.4 mg IV (or IM without a vein) repeated every 2-3 minutes, titrated to an adequate respiratory rate rather than to full wakefulness, up to about 10 mg total; child 0.01 mg/kg. Trap: naloxone lasts only 30-90 minutes, shorter than the opioid, so never discharge a patient who has woken.",
    },
    {
      id: "emergency-altered-sensorium-c5",
      front: "Expand AEIOU TIPS.",
      back: "Alcohol and Acidosis; Epilepsy, Endocrine and Electrolytes; Insulin (hypo- and hyperglycaemia); Opiates and Oxygen lack; Uraemia and organ failure; Trauma and Temperature; Infection; Psychiatric and Porphyria; Stroke, Shock, Space-occupying lesion and Snake bite.",
    },
    {
      id: "emergency-altered-sensorium-c6",
      front: "Definition and first-line dose in convulsive status epilepticus.",
      back: "A convulsion lasting 5 minutes or more, or repeated seizures without recovery between. Adult: lorazepam 4 mg IV over 2 minutes, repeat once after 10 minutes; no access - midazolam 10 mg IM. Child: lorazepam 0.1 mg/kg IV (max 4 mg per dose), or buccal/intranasal midazolam 0.2 mg/kg (max 10 mg). Maximum two benzodiazepine doses.",
    },
    {
      id: "emergency-altered-sensorium-c7",
      front: "What do the pupils tell you in an unconscious patient?",
      back: "Pinpoint reactive - opioids or pontine haemorrhage; pinpoint with sweating, salivation and fasciculations - organophosphate; unilateral fixed dilated - uncal herniation, an emergency; mid-position fixed - midbrain lesion; widely dilated reactive - anticholinergic or sympathomimetic poisoning.",
    },
    {
      id: "emergency-altered-sensorium-c8",
      front: "Antibiotic and steroid before transfer in suspected bacterial meningitis?",
      back: "Ceftriaxone 2 g IV in an adult (12-hourly thereafter), or 50 mg/kg per dose in a child (100 mg/kg/day in two divided doses, maximum 4 g/day), with dexamethasone 0.15 mg/kg IV 6-hourly given with or just before the first antibiotic dose. Never delay antibiotics for imaging or lumbar puncture.",
    },
  ],
  references: [
    "Kasper DL, Fauci AS et al (eds). Harrison's Principles of Internal Medicine, 21st edition, 2022 - Coma and Acute Confusional State",
    "Ropper AH, Samuels MA, Klein JP, Prasad S. Adams and Victor's Principles of Neurology, 12th edition, 2023 - Coma and Related Disorders of Consciousness",
    "Glasgow Coma Scale, Teasdale G et al. The Glasgow Coma Scale at 40 years: standing the test of time, Lancet Neurology 2014, and the structured GCS assessment aid, 2014",
    "Neurocritical Care Society. Guidelines for the Evaluation and Management of Status Epilepticus, 2012, and Glauser T et al. Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus, Epilepsy Currents 2016",
    "National Health Mission, Government of India. Standard Treatment Guidelines for Medical Officers - Emergency and Critical Care, 2016",
    "National Vector Borne Disease Control Programme, Government of India. National Drug Policy on Malaria, 2013 - management of severe and cerebral malaria",
    "Nice CG. Head injury: assessment and early management, NICE guideline NG232, 2023",
    "Indian Academy of Pediatrics. Standard Treatment Guidelines - Approach to a Child with Altered Sensorium, 2022",
    "World Health Organization. Guidelines for Malaria, 2023 - intravenous artesunate dosing",
    "Federation of Obstetric and Gynaecological Societies of India. Good Clinical Practice Recommendations on Pre-eclampsia and Eclampsia, 2019 - magnesium sulphate regimens",
  ],
});

topics.push({
  id: "emergency-tray-and-readiness",
  title: "The emergency tray: drugs, equipment and the clinic's readiness drill",
  oneLiner:
    "The emergency tray is a single sealed, checklist-controlled tray holding the small set of drugs and equipment that a family clinic must be able to reach within 30 seconds - adrenaline, atropine, dextrose, a benzodiazepine, oxygen, a self-inflating bag and suction being the irreducible core - kept usable by a named person, a dated log, expiry rotation and a quarterly mock drill.",
  frequency: "common",
  keywords: [
    "emergency tray",
    "crash cart",
    "emergency drugs",
    "resuscitation equipment",
    "adrenaline",
    "atropine",
    "AEFI kit",
    "anaphylaxis kit",
    "self-inflating bag",
    "Ambu bag",
    "oropharyngeal airway",
    "oxygen cylinder",
    "mock drill",
    "expiry check",
    "clinic preparedness",
    "referral pathway",
    "weight-based dosing chart",
    "AED",
  ],
  sections: [
    {
      heading: "Principles: one tray, one owner, one checklist",
      points: [
        "**The tray exists to remove decisions from the emergency.** Everything on it is chosen because it treats a condition that kills within minutes, and nothing is on it because it might one day be useful; a crowded tray costs seconds and seconds are the whole point.",
        "**Keep a single tray, in a single fixed location known to every member of staff, sealed with a numbered breakable tag and never locked in a cupboard whose key is with one person.** A locked emergency cupboard has caused more deaths in audits than an empty one.",
        "One named person - usually the senior nurse - owns the tray, checks it against a printed checklist on a fixed day each week, signs and dates the log, and reports shortages to the doctor the same day; **a tray without a signed dated log is presumed unchecked.**",
        "Arrange drugs by indication, not alphabetically, in labelled compartments: anaphylaxis, arrest, seizure, hypoglycaemia, cardiac, respiratory, obstetric. **Laminate a weight-based paediatric dose chart on the inside of the lid** so nobody calculates a paediatric dose from memory under pressure.",
        "Rotate stock first-expiry-first-out; anything within 3 months of expiry is moved into routine clinic use and replaced. **Adrenaline degrades with light and heat, so keep ampoules in their carton, away from the window, and never store the tray on top of a refrigerator or near a sterilizer.**",
        "The tray is only half the system. The other half is a written referral pathway with the names and numbers of the nearest hospital with a ventilator, blood bank and dialysis, the ambulance number (108 in most Indian states), and a standing arrangement so that a call is answered rather than negotiated.",
      ],
    },
    {
      heading: "The irreducible drug list with adult and paediatric doses",
      points: [
        "**Adrenaline 1:1000 (1 mg/mL) ampoules - the single most important drug on the tray. Anaphylaxis: 0.5 mg (0.5 mL) intramuscularly into the anterolateral thigh for an adult and a child over 12 years, 0.3 mg for 6-12 years, 0.15 mg for 6 months to 6 years, repeated every 5 minutes as needed.** Cardiac arrest: 1 mg intravenously as 10 mL of 1:10,000 every 3-5 minutes; child 0.01 mg/kg (0.1 mL/kg of 1:10,000, maximum 1 mg) every 3-5 minutes.",
        "**Atropine (Indian ampoules are commonly 0.6 mg/mL). Symptomatic bradycardia: 0.5-0.6 mg intravenously repeated every 3-5 minutes to a maximum of 3 mg in an adult; child 0.02 mg/kg with a minimum single dose of 0.1 mg and a maximum single dose of 0.5 mg.** Organophosphate poisoning: 2-5 mg intravenously in an adult (child 0.05 mg/kg), the dose doubled every 5 minutes until the chest is clear and the skin dry - stock at least 25 ampoules where pesticide poisoning is common.",
        "**Dextrose 25% (100 mL) for adult hypoglycaemia, 25 g intravenously over 1-3 minutes; 10% dextrose for children at 5 mL/kg and for neonates at 2 mL/kg. Thiamine 100 mg ampoules to give before or with dextrose in the alcoholic or malnourished.** Glucagon 1 mg intramuscularly (0.5 mg if under 25 kg) covers the patient with no venous access.",
        "**A benzodiazepine for seizures: lorazepam 4 mg intravenously over 2 minutes in an adult, repeated once after 10 minutes; midazolam 10 mg intramuscularly, buccally or intranasally when there is no vein; diazepam 10 mg intravenously or per rectum. Child: lorazepam 0.1 mg/kg intravenously (maximum 4 mg per dose), midazolam 0.2 mg/kg buccal or intranasal (maximum 10 mg), rectal diazepam 0.5 mg/kg (maximum 20 mg).**",
        "**Cardiac and respiratory drugs: soluble aspirin 300 mg to be chewed and clopidogrel 300 mg for suspected myocardial infarction; glyceryl trinitrate 0.5 mg sublingually, repeated every 5 minutes up to 3 doses only while the systolic pressure stays above 90 mmHg; furosemide 40 mg slow intravenously for acute pulmonary oedema; salbutamol nebuliser solution 5 mg for a child over 5 years and an adult, 2.5 mg under 5 years, with ipratropium 500 micrograms (250 micrograms under 5 years); hydrocortisone 100 mg intravenously (child 4 mg/kg).**",
        "**Obstetric and miscellaneous: magnesium sulphate for eclampsia - 4 g of 20% solution intravenously over 5 minutes plus 10 g of 50% solution intramuscularly (5 g into each buttock), then 5 g intramuscularly 4-hourly, with calcium gluconate 10% 10 mL intravenously over 10 minutes as the antidote; oxytocin 10 IU intramuscularly for postpartum haemorrhage; tranexamic acid 1 g intravenously over 10 minutes within 3 hours of trauma or postpartum bleeding; naloxone 0.4 mg; chlorpheniramine 10 mg; oral rehydration salts; normal saline and Ringer lactate.**",
      ],
    },
    {
      heading: "Equipment: airway, oxygen, circulation and monitoring",
      points: [
        "**Oxygen: a full cylinder with a working regulator, flowmeter and key kept attached, plus a spare cylinder. A non-rebreathing mask with reservoir delivers about 85% oxygen at 15 L/min and is what an emergency needs; nasal cannulae at 1-4 L/min are for the stable patient.** Log the cylinder pressure at every weekly check.",
        "**Self-inflating bags with masks in three sizes - adult 1500-1600 mL, paediatric about 500 mL, neonatal 240 mL - each with a reservoir bag, because without the reservoir the delivered oxygen falls from about 90% to 50%.** Masks in sizes 0 to 5, and a paediatric mask must cover the bridge of the nose to the cleft of the chin without covering the eyes.",
        "**Oropharyngeal airways in sizes 000 to 4, sized from the incisors to the angle of the mandible (or the angle of the mouth to the tragus); they are inserted upside down and rotated in an adult, but the right way up over a tongue depressor in a child, where rotation damages the palate.** An airway that provokes gagging means the patient does not need one.",
        "Suction that works without mains electricity - a foot-operated or manual suction pump with wide-bore Yankauer and soft catheters - because power fails exactly when it matters. Test it at every check and listen for the vacuum rather than assuming it.",
        "**Circulation and monitoring: intravenous cannulae 14G to 24G, an intraosseous needle where staff are trained, giving sets, a pressure infusion bag, a tourniquet for catastrophic limb haemorrhage, a glucometer with in-date strips, a pulse oximeter, a thermometer, blood pressure cuffs in paediatric, adult and large-adult sizes, an ECG machine and an automated external defibrillator with adult and paediatric pads where affordable.**",
        "Add the small things that get forgotten and stop a resuscitation dead: a torch with working cells, scissors, adhesive tape, a spacer with mask for a wheezing child, sterile dressings and a bandage, a cervical collar, a splint, gloves and eye protection, a sharps bin, and a written record sheet with a clock visible from the couch.",
      ],
    },
    {
      heading: "The readiness drill: checks, mock drills and audit",
      points: [
        "**Run a mock drill at least once every 3 months, unannounced, using a real scenario - anaphylaxis after an injection, a collapsed adult in the waiting room, a fitting child, a woman with postpartum haemorrhage - and time three things: seconds to first compression, seconds to adrenaline drawn up, and minutes to the ambulance call being made.** Record the times and improve them.",
        "Give every person a fixed role before the emergency happens: who compresses, who brings the tray, who draws up drugs, who calls the ambulance, who manages the family and clears the corridor, and who writes the timed record. **Unassigned roles produce a crowd around the patient and an empty doorway.**",
        "**Every clinical and non-clinical staff member, including the receptionist and the cleaner, should be trained to recognise a collapsed patient, shout for help, start chest compressions and call for the tray.** Basic life support certification renewed every 2 years is the standard to quote.",
        "Debrief within the same day, in a blame-free way, on three questions: what went well, what delayed us, what will change by next week - and record the change with a named owner and a date. **An undocumented drill has no value in accreditation or in a negligence claim.**",
        "Audit two indicators quarterly: the proportion of weekly tray checks completed and signed, and the proportion of items found expired or missing at an unannounced spot check. **NABH entry-level standards for clinics require documented emergency drugs and equipment, a defined referral pathway and evidence of staff training - the log is the evidence.**",
        "Restock immediately after every use, before the next patient is called, and reseal with a new numbered tag; **the commonest cause of an empty tray is the previous emergency**, not slow purchasing.",
      ],
    },
    {
      heading: "Special trays: immunisation, procedure room and home visit",
      points: [
        "**Every immunisation session must have its own anaphylaxis kit at the table, not in another room, as required by the Government of India AEFI operational guidelines: adrenaline 1:1000 ampoules, 1 mL and 2 mL syringes with needles, a self-inflating bag with paediatric and infant masks, oral airways, an oxygen source where available, and a written dose card by age.**",
        "**The vaccinator must be able to state without looking: adrenaline 1:1000 intramuscular anterolateral thigh, 0.01 mg/kg, that is 0.15 mg under 6 years, 0.3 mg for 6-12 years and 0.5 mg above 12 years, repeated every 5 minutes if there is no improvement.** Beneficiaries are observed for 30 minutes after immunisation before leaving.",
        "The minor procedure room needs, in addition, a means of pressure haemostasis, local anaesthetic without and with adrenaline clearly separated to prevent digital ischaemia, intravenous lipid emulsion 20% where regional blocks are performed, and a written protocol for vasovagal syncope, which is far commoner than anaphylaxis and is distinguished by bradycardia with pallor rather than tachycardia with urticaria.",
        "**A home-visit bag is a miniature tray: adrenaline, a benzodiazepine, dextrose, aspirin, glyceryl trinitrate, furosemide, hydrocortisone, salbutamol with a spacer, a self-inflating bag with mask, oral airways, a glucometer, a pulse oximeter, a blood pressure cuff and cannulae with fluid.** It is checked on the same weekly cycle as the clinic tray.",
        "Match the tray to what the clinic actually does. **A clinic that immunises must be ready for anaphylaxis; a rural clinic in a pesticide belt must carry enough atropine for hours of doubling doses; a clinic that conducts deliveries must carry oxytocin, magnesium sulphate and tranexamic acid.**",
        "Where cold chain matters, keep a thermometer in the vaccine refrigerator with a twice-daily temperature log, and never store emergency drugs inside the vaccine refrigerator, where freezing destroys adrenaline and the door is opened all day.",
      ],
    },
  ],
  tables: [
    {
      heading: "Core emergency tray drugs - indication, adult dose, paediatric dose, repeat",
      columns: ["Drug and strength", "Indication", "Adult dose and route", "Paediatric dose and route", "Repeat interval"],
      rows: [
        [
          "Adrenaline 1:1000 (1 mg/mL)",
          "Anaphylaxis",
          "0.5 mg (0.5 mL) IM into anterolateral thigh",
          "0.01 mg/kg IM: 0.15 mg under 6 years, 0.3 mg for 6-12 years, 0.5 mg above 12 years",
          "Every 5 minutes until improvement",
        ],
        [
          "Adrenaline 1:10,000 (0.1 mg/mL)",
          "Cardiac arrest",
          "1 mg (10 mL) IV or IO",
          "0.01 mg/kg = 0.1 mL/kg IV or IO, maximum 1 mg",
          "Every 3-5 minutes during CPR",
        ],
        [
          "Atropine 0.6 mg/mL",
          "Symptomatic bradycardia",
          "0.5-0.6 mg IV bolus, maximum total 3 mg",
          "0.02 mg/kg IV, minimum 0.1 mg, maximum single dose 0.5 mg",
          "Every 3-5 minutes to the maximum",
        ],
        [
          "Atropine 0.6 mg/mL",
          "Organophosphate or carbamate poisoning",
          "2-5 mg IV, dose doubled until chest clear and skin dry",
          "0.05 mg/kg IV, dose doubled on the same principle",
          "Double every 5 minutes, then infusion",
        ],
        [
          "Dextrose 25% (adult) and 10% (child)",
          "Hypoglycaemia",
          "25% dextrose 100 mL (25 g) IV over 1-3 minutes",
          "10% dextrose 5 mL/kg IV; neonate 10% dextrose 2 mL/kg IV",
          "Repeat after 10-15 minutes if still low",
        ],
        [
          "Lorazepam 2 mg/mL or midazolam 5 mg/mL",
          "Seizure lasting 5 minutes or more",
          "Lorazepam 4 mg IV over 2 minutes; no vein: midazolam 10 mg IM",
          "Lorazepam 0.1 mg/kg IV, max 4 mg; buccal or intranasal midazolam 0.2 mg/kg, max 10 mg",
          "Once only after 10 minutes - maximum two doses",
        ],
        [
          "Hydrocortisone 100 mg vial",
          "Acute severe asthma, adrenal crisis, adjunct after anaphylaxis",
          "100-200 mg IV",
          "4 mg/kg IV",
          "6-hourly if continued",
        ],
        [
          "Magnesium sulphate 50%",
          "Eclampsia",
          "4 g of 20% IV over 5 minutes plus 10 g of 50% IM (5 g each buttock)",
          "Not applicable - obstetric use",
          "5 g IM 4-hourly; 2 g IV for a recurrent fit",
        ],
        [
          "Naloxone 0.4 mg/mL",
          "Opioid-induced respiratory depression",
          "0.4 mg IV or IM, titrated to respiratory rate",
          "0.01 mg/kg IV or IM",
          "Every 2-3 minutes, up to about 10 mg total",
        ],
      ],
    },
    {
      heading: "Equipment checklist with the check to perform, not just the item to see",
      columns: ["Item", "Sizes or specification", "The check that actually matters"],
      rows: [
        [
          "Oxygen cylinder",
          "Full cylinder plus one spare, regulator, flowmeter, key attached",
          "Open the valve and read the pressure; record it dated in the log",
        ],
        [
          "Self-inflating bag with reservoir",
          "Adult 1500-1600 mL, paediatric 500 mL, neonatal 240 mL",
          "Squeeze against an occluded mask and feel the valve open and reseal",
        ],
        [
          "Face masks",
          "Sizes 0 to 5, cushioned rim",
          "Fit test on a manikin: nose bridge to chin cleft, eyes uncovered",
        ],
        [
          "Oropharyngeal airways",
          "Sizes 000 to 4",
          "Size against incisors to angle of mandible; confirm the whole range is present",
        ],
        [
          "Suction",
          "Foot-operated or manual pump, Yankauer and soft catheters",
          "Test with the mains off - it must work in a power cut",
        ],
        [
          "Glucometer",
          "Meter, in-date strips, lancets, control solution",
          "Run a control strip and check the strip expiry date, not just the box",
        ],
        [
          "Defibrillator or AED",
          "Adult and paediatric pads, spare battery",
          "Run the self-test, check pad expiry and battery indicator weekly",
        ],
        [
          "Documentation",
          "Timed record sheet, weight-based dose chart, referral numbers",
          "Confirm the chart is legible, laminated and current, and the numbers answer",
        ],
      ],
    },
  ],
  redFlags: [
    "Adrenaline missing, expired, discoloured or stored loose in a hot room - the clinic cannot treat anaphylaxis or arrest and must not immunise or inject until it is replaced.",
    "The emergency tray locked in a cupboard whose key is held by one absent person, or moved from its fixed location without every staff member being told.",
    "An oxygen cylinder that reads empty or has no regulator, or a suction unit that fails when the mains supply is switched off.",
    "A tray check log with gaps, unsigned entries or back-dated signatures - in a negligence claim this is treated as no check having been done.",
    "No laminated weight-based paediatric dose chart, so paediatric doses are calculated from memory under pressure.",
    "The tray not restocked and resealed immediately after the last emergency, leaving the next patient with an empty tray.",
  ],
  pearls: [
    "Adrenaline is the only drug on the tray whose absence is by itself indefensible; check it first at every check, and check the concentration on the ampoule, because giving 1:1000 intravenously in place of 1:10,000 is a lethal ten-fold error.",
    "For anaphylaxis the route is intramuscular into the anterolateral thigh, never subcutaneous and never intravenous outside a monitored setting; the thigh gives higher and faster peak levels than the deltoid.",
    "A self-inflating bag without its reservoir delivers only about 50% oxygen instead of 90% - the reservoir is part of the equipment, not an accessory.",
    "Time the drill, not the discussion: seconds to first compression, seconds to adrenaline drawn up, minutes to the ambulance call. Numbers improve; impressions do not.",
    "Arrange the tray by emergency, laminate the paediatric dose chart inside the lid, and seal with a numbered tag - the three changes that most reduce time to first drug.",
    "The commonest reason a tray is empty is the previous emergency, so restocking is part of finishing the emergency, not a task for the next day.",
  ],
  theory: [
    {
      id: "emergency-tray-and-readiness-t1",
      paper: "III",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "Describe the drugs and equipment that should be available in the emergency tray of a family practice clinic, and how you would ensure that the clinic and its staff remain ready to use them.",
      openingLines: [
        "The emergency tray is a single, sealed, checklist-controlled collection of drugs and equipment, kept in one fixed and universally known location, containing only what treats conditions that kill within minutes.",
        "Readiness has two halves that must both be answered: the contents, and the system of ownership, checking, training and drilling that keeps the contents usable - a tray without a signed log and a trained team is stock, not preparedness.",
      ],
      answer: [
        {
          heading: "Principles of tray design",
          points: [
            "One tray, one fixed location known to all staff, sealed with a numbered breakable tag, never locked behind a single key holder.",
            "Contents arranged by indication - anaphylaxis, arrest, seizure, hypoglycaemia, cardiac, respiratory, obstetric - in labelled compartments, with a laminated weight-based paediatric dose chart inside the lid.",
            "Stock rotated first-expiry-first-out, items within 3 months of expiry moved to routine use, adrenaline kept in its carton away from heat and light.",
            "The tray matched to the clinic's actual work: immunisation means anaphylaxis readiness, a pesticide belt means abundant atropine, deliveries mean oxytocin, magnesium sulphate and tranexamic acid.",
          ],
        },
        {
          heading: "Essential drugs with doses",
          points: [
            "Adrenaline 1:1000 - anaphylaxis 0.5 mg intramuscularly into the anterolateral thigh in an adult, 0.3 mg for 6-12 years and 0.15 mg for 6 months to 6 years, repeated every 5 minutes; cardiac arrest 1 mg intravenously as 10 mL of 1:10,000 every 3-5 minutes, child 0.01 mg/kg.",
            "Atropine - bradycardia 0.5-0.6 mg intravenously every 3-5 minutes to a maximum of 3 mg, child 0.02 mg/kg (minimum 0.1 mg, maximum single dose 0.5 mg); organophosphate poisoning 2-5 mg intravenously doubled every 5 minutes until the chest is clear and the skin dry.",
            "Dextrose 25% 100 mL intravenously for adult hypoglycaemia, 10% dextrose 5 mL/kg for a child and 2 mL/kg for a neonate, with thiamine 100 mg for the alcoholic or malnourished.",
            "Benzodiazepine for seizures - lorazepam 4 mg intravenously repeated once after 10 minutes, or midazolam 10 mg intramuscularly; child lorazepam 0.1 mg/kg (maximum 4 mg) or buccal midazolam 0.2 mg/kg (maximum 10 mg).",
            "Cardiac and respiratory - aspirin 300 mg chewed, clopidogrel 300 mg, glyceryl trinitrate 0.5 mg sublingually up to 3 doses if systolic above 90 mmHg, furosemide 40 mg intravenously, salbutamol nebulisation 5 mg (2.5 mg under 5 years) with ipratropium 500 micrograms (250 micrograms under 5 years), hydrocortisone 100 mg intravenously or 4 mg/kg in a child.",
            "Others - magnesium sulphate with calcium gluconate 10% as its antidote, oxytocin 10 IU intramuscularly, tranexamic acid 1 g intravenously, naloxone 0.4 mg, chlorpheniramine 10 mg, normal saline, Ringer lactate and oral rehydration salts.",
          ],
        },
        {
          heading: "Essential equipment",
          points: [
            "Airway and breathing: oxygen cylinder with regulator and a spare, non-rebreathing mask for 15 L/min, self-inflating bags with reservoirs in adult 1600 mL, paediatric 500 mL and neonatal 240 mL sizes, masks 0-5, oropharyngeal airways 000-4, and suction that works without mains power.",
            "Circulation: cannulae 14G to 24G, giving sets, intravenous fluids, a pressure bag, a tourniquet, and an intraosseous needle where staff are trained.",
            "Monitoring and diagnostics: glucometer with in-date strips, pulse oximeter, thermometer, blood pressure cuffs in three sizes, ECG machine, and an automated external defibrillator with adult and paediatric pads where affordable.",
            "Support items: torch, scissors, tape, spacer with mask, dressings, cervical collar, splint, gloves, sharps bin, a timed record sheet and a visible clock.",
          ],
        },
        {
          heading: "The readiness system",
          points: [
            "A named owner checks the tray weekly against a printed checklist and signs and dates the log; shortages are reported the same day and the tray is resealed with a new numbered tag.",
            "Every staff member, clinical and non-clinical, is trained to recognise collapse, shout for help, start chest compressions and bring the tray; basic life support certification is renewed every 2 years.",
            "Fixed roles are assigned in advance - compressions, tray, drugs, ambulance call, family and documentation - so that no role is left vacant in a real event.",
            "An unannounced mock drill at least quarterly, with measured times to first compression, to adrenaline drawn up and to the ambulance call, followed by a same-day blame-free debrief producing one dated, owned change.",
            "Quarterly audit of the proportion of checks completed and of items found expired or missing, and a written referral pathway with working numbers for the nearest hospital with ventilator, blood bank and dialysis and for the ambulance service.",
          ],
        },
      ],
      mustDraw: [
        "A two-column table of drugs against adult and paediatric doses, with the repeat interval in a third column.",
        "A tray layout diagram with compartments labelled by emergency - anaphylaxis, arrest, seizure, hypoglycaemia, cardiac, respiratory, obstetric.",
        "The weekly check log format: date, items checked, expiries due, action taken, signature.",
      ],
      markSplit: [
        { part: "Principles of tray design, location, sealing and ownership", marks: 2 },
        { part: "Drug list with correct adult and paediatric doses", marks: 3 },
        { part: "Equipment list including airway, oxygen, circulation and monitoring", marks: 2 },
        { part: "Checking, logging, training and staff roles", marks: 2 },
        { part: "Mock drills, audit and the written referral pathway", marks: 1 },
      ],
      keywords: [
        "emergency tray",
        "crash cart",
        "adrenaline",
        "atropine",
        "mock drill",
        "referral pathway",
        "NABH",
      ],
    },
    {
      id: "emergency-tray-and-readiness-t2",
      paper: "III",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Short note: The anaphylaxis kit at an immunisation session - contents, doses and the observation protocol.",
      openingLines: [
        "Anaphylaxis after immunisation is rare, at roughly one to two episodes per million doses, but it is the reason no immunisation session may be conducted without an anaphylaxis kit physically at the vaccination table.",
        "The Government of India AEFI Surveillance and Response Operational Guidelines make the kit, the trained vaccinator and the 30-minute observation period mandatory components of every session.",
      ],
      answer: [
        {
          heading: "Contents of the kit",
          points: [
            "Adrenaline 1:1000 ampoules, at least five, in their carton and within expiry; 1 mL and 2 mL syringes with 23G to 25G needles for intramuscular injection.",
            "A self-inflating bag with reservoir and infant, child and adult masks; oropharyngeal airways in paediatric sizes; a suction device where available.",
            "Oxygen source with tubing and mask where available; intravenous cannulae, a giving set and normal saline; a torch, gloves and cotton with spirit swabs.",
            "A laminated dose card by age, an AEFI reporting form, and the telephone numbers for the ambulance and the referral hospital.",
          ],
        },
        {
          heading: "Recognition and dose",
          points: [
            "Suspect anaphylaxis when there is sudden onset of airway, breathing or circulation compromise, usually with skin or mucosal change such as urticaria, flushing or angio-oedema, within minutes of the injection.",
            "Adrenaline 1:1000 intramuscularly into the anterolateral thigh, 0.01 mg/kg: 0.15 mg for 6 months to 6 years, 0.3 mg for 6-12 years and 0.5 mg above 12 years and in adults.",
            "Repeat the same dose every 5 minutes if there is no improvement; two or more doses define a refractory case needing urgent transfer.",
            "Lay the patient flat with the legs raised (sitting up if breathing is difficult, left lateral if pregnant), give high-flow oxygen, and never stand the patient up, since sudden upright posture has caused fatal empty-ventricle arrest.",
          ],
        },
        {
          heading: "Protocol around the session",
          points: [
            "Observe every beneficiary for 30 minutes after immunisation before allowing them to leave the session site.",
            "Distinguish anaphylaxis from vasovagal syncope, which is commoner, has bradycardia with pallor and sweating rather than tachycardia with urticaria, and recovers on lying flat with the legs raised.",
            "After adrenaline, arrange transfer with an escort and oxygen; record the vaccine name, batch number, site, time of injection, time of onset and every dose given with its time.",
            "Report the event as a serious AEFI within 24 hours to the district immunisation officer, retain the vial and the syringe, and counsel the family without discouraging future immunisation of the community.",
          ],
        },
      ],
      mustDraw: [
        "The age-banded adrenaline dose card: under 6 years 0.15 mg, 6-12 years 0.3 mg, over 12 years and adults 0.5 mg, all 1:1000 intramuscular into the anterolateral thigh, repeated every 5 minutes.",
        "A two-column comparison of anaphylaxis against vasovagal syncope.",
      ],
      markSplit: [
        { part: "Kit contents", marks: 2 },
        { part: "Adrenaline dose by age, route, site and repeat interval", marks: 2 },
        { part: "Observation period, AEFI reporting and differentiation from syncope", marks: 1 },
      ],
      keywords: ["AEFI", "anaphylaxis kit", "immunisation", "adrenaline", "vasovagal syncope", "30-minute observation"],
    },
  ],
  mcqs: [
    {
      id: "emergency-tray-and-readiness-q1",
      stem: "A 30-year-old woman develops urticaria, wheeze and a blood pressure of 80/50 mmHg two minutes after an intramuscular injection in your clinic. Which is the correct first drug, dose and route?",
      options: [
        "Adrenaline 1:10,000, 0.5 mg intravenously",
        "Adrenaline 1:1000, 0.5 mg intramuscularly into the anterolateral thigh, repeated every 5 minutes if needed",
        "Hydrocortisone 200 mg intravenously, with adrenaline reserved for failure to respond",
        "Chlorpheniramine 10 mg intravenously followed by nebulised salbutamol",
        "Adrenaline 1:1000, 0.5 mg subcutaneously into the upper arm",
      ],
      answer: 1,
      explanation:
        "Anaphylaxis is treated with adrenaline 1:1000, 0.5 mg (0.5 mL) intramuscularly into the anterolateral thigh, repeated every 5 minutes while the reaction continues; the thigh gives faster and higher peak concentrations than any other accessible site. Intravenous adrenaline in an unmonitored clinic risks arrhythmia and hypertensive crisis and is reserved for monitored settings by infusion, so the 1:10,000 intravenous option is wrong here even though the concentration named is the arrest concentration. Steroids have no role in the first minutes because their onset is measured in hours, and delaying adrenaline for hydrocortisone is a recognised cause of death. Antihistamines and salbutamol treat urticaria and bronchospasm respectively but do nothing for the airway oedema and vasodilatory shock that kill. The subcutaneous route is obsolete for anaphylaxis because absorption is slow and unpredictable, particularly in a shocked, vasoconstricted patient.",
      difficulty: "easy",
    },
    {
      id: "emergency-tray-and-readiness-q2",
      stem: "During an unannounced mock drill, an 8 kg infant is the simulated cardiac arrest patient. What dose of adrenaline should be drawn up, and how often is it repeated?",
      options: [
        "0.08 mg (0.8 mL of 1:10,000) intravenously every 3-5 minutes",
        "0.8 mg (0.8 mL of 1:1000) intravenously every 3-5 minutes",
        "1 mg (10 mL of 1:10,000) intravenously every 3-5 minutes, as for an adult",
        "0.08 mg (0.08 mL of 1:1000) intramuscularly every 5 minutes",
        "0.08 mg intravenously as a single dose only",
      ],
      answer: 0,
      explanation:
        "The paediatric arrest dose is 0.01 mg/kg intravenously or intraosseously, which for 8 kg is 0.08 mg, and since 1:10,000 contains 0.1 mg/mL this is 0.8 mL, repeated every 3-5 minutes throughout the resuscitation - the 0.1 mL/kg rule for 1:10,000 is the version worth memorising. Drawing 0.8 mL of 1:1000 would give 0.8 mg, a ten-fold overdose and exactly the error that concentration labelling on the tray is designed to prevent. The adult 1 mg dose in an 8 kg infant is a twelve-fold overdose. The intramuscular route is for anaphylaxis, not for arrest, where circulation is absent and absorption unreliable. Adrenaline in arrest is repeated every 3-5 minutes for as long as resuscitation continues, not given once.",
      difficulty: "moderate",
    },
    {
      id: "emergency-tray-and-readiness-q3",
      stem: "You are setting up a clinic in a rural area where organophosphate self-poisoning is common. Regarding atropine on the tray, which statement is correct?",
      options: [
        "A total of 3 mg is the ceiling in poisoning as it is in bradycardia, so six ampoules suffice",
        "There is no ceiling dose in organophosphate poisoning; give 2-5 mg intravenously in an adult and double the dose every 5 minutes until the chest is clear and the skin is dry, so stock at least 25 ampoules",
        "Atropine should be withheld until pralidoxime is available, since pralidoxime is the definitive antidote",
        "Atropine is titrated to pupil size, and dilated pupils are the endpoint of atropinisation",
        "The paediatric dose is the same 2-5 mg, since children have proportionally larger receptor reserves",
      ],
      answer: 1,
      explanation:
        "In organophosphate poisoning there is no maximum atropine dose: the adult regimen is 2-5 mg intravenously with the dose doubled every 5 minutes until the endpoint of atropinisation, and hundreds of milligrams may be needed over hours, so a rural clinic must stock generously rather than to the bradycardia ceiling. The 3 mg maximum belongs only to symptomatic bradycardia and applying it in poisoning leads to fatal undertreatment. Pralidoxime is an adjunct that reactivates cholinesterase but does not replace atropine, and withholding atropine to wait for it is dangerous. The endpoints of atropinisation are a clear chest on auscultation, dry axillae, a heart rate above 80 per minute and a systolic pressure above 80 mmHg; pupil size is a late and unreliable guide. The paediatric dose is 0.05 mg/kg doubled on the same principle, not the adult dose.",
      difficulty: "hard",
    },
    {
      id: "emergency-tray-and-readiness-q4",
      stem: "At a weekly tray check, which of the following findings is the one that most urgently stops the clinic from running its immunisation session that morning?",
      options: [
        "The pulse oximeter probe cable is frayed but the device still reads",
        "Two adrenaline 1:1000 ampoules expired last month and no in-date ampoules remain",
        "The paediatric blood pressure cuff is missing",
        "The oral rehydration salt sachets are running low",
        "The ECG machine paper roll is nearly finished",
      ],
      answer: 1,
      explanation:
        "Adrenaline is the only treatment for anaphylaxis, and the AEFI operational guidelines make an anaphylaxis kit with in-date adrenaline a precondition for conducting an immunisation session, so no in-date adrenaline means the session cannot proceed until it is replaced. A frayed oximeter cable is a maintenance item that does not prevent the treatment of a life-threatening reaction. A missing paediatric cuff impairs assessment but does not remove the ability to give the drug that saves the patient. Oral rehydration salts are not part of the anaphylaxis pathway at all. Missing ECG paper affects documentation of a rhythm rather than any immediate emergency treatment. The examinable principle is that adrenaline is the single item whose absence is by itself indefensible.",
      difficulty: "easy",
    },
    {
      id: "emergency-tray-and-readiness-q5",
      stem: "Your clinic's mock drill for a collapsed adult repeatedly shows a delay of over 4 minutes before adrenaline is drawn up. Which change is most likely to reduce this time?",
      options: [
        "Buying a more expensive defibrillator with a larger screen",
        "Assigning fixed roles in advance, keeping the tray sealed in one fixed known location with drugs grouped by emergency and a laminated dose chart in the lid, and re-timing the drill",
        "Sending only the doctor for an advanced life support course and leaving other staff untrained",
        "Storing the tray in a locked cupboard so that stock is never lost",
        "Replacing the weekly check with a monthly check to save staff time",
      ],
      answer: 1,
      explanation:
        "Delay to the first drug is a systems problem, and the interventions that reliably shorten it are pre-assigned roles, a single sealed tray in one universally known location, drugs grouped by emergency rather than alphabetically, and a laminated weight-based dose chart inside the lid, with the drill re-timed to confirm the improvement. Better hardware does not address the human and layout factors causing the delay. Training only the doctor leaves the team unable to act in the minutes before the doctor arrives, and it is the whole staff, including non-clinical members, who should be trained. Locking the tray protects stock at the direct cost of access and is a recognised cause of fatal delay. Reducing the frequency of checks worsens readiness rather than improving response time.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "emergency-tray-and-readiness-c1",
      front: "Adrenaline for anaphylaxis - concentration, dose, route, site, repeat?",
      back: "1:1000 (1 mg/mL), intramuscular into the anterolateral thigh, 0.01 mg/kg: 0.15 mg for 6 months to 6 years, 0.3 mg for 6-12 years, 0.5 mg for over 12 years and adults. Repeat every 5 minutes until improvement; two or more doses means refractory anaphylaxis needing urgent transfer.",
    },
    {
      id: "emergency-tray-and-readiness-c2",
      front: "Adrenaline for cardiac arrest - concentration, dose, route, repeat?",
      back: "1:10,000 (0.1 mg/mL): adult 1 mg (10 mL) IV or IO every 3-5 minutes throughout resuscitation. Child 0.01 mg/kg, that is 0.1 mL/kg of 1:10,000, maximum 1 mg, every 3-5 minutes. Confusing 1:1000 with 1:10,000 is a ten-fold lethal error.",
    },
    {
      id: "emergency-tray-and-readiness-c3",
      front: "Atropine: bradycardia dose versus organophosphate poisoning dose.",
      back: "Bradycardia: adult 0.5-0.6 mg IV every 3-5 minutes to a maximum of 3 mg; child 0.02 mg/kg, minimum 0.1 mg, maximum single dose 0.5 mg. Organophosphate poisoning: adult 2-5 mg IV (child 0.05 mg/kg) doubled every 5 minutes until the chest is clear and the skin dry - there is no ceiling dose.",
    },
    {
      id: "emergency-tray-and-readiness-c4",
      front: "Self-inflating bag sizes, and why the reservoir matters.",
      back: "Adult 1500-1600 mL, paediatric about 500 mL, neonatal 240 mL. Without the reservoir bag attached the delivered oxygen concentration falls from roughly 90% to about 50%, so the reservoir is part of the equipment rather than an optional extra.",
    },
    {
      id: "emergency-tray-and-readiness-c5",
      front: "How is an oropharyngeal airway sized and inserted?",
      back: "Sizes 000 to 4, measured from the incisors to the angle of the mandible (or angle of the mouth to the tragus). In adults insert upside down and rotate 180 degrees; in children insert the right way up over a tongue depressor, because rotation damages the soft palate. Gagging means the patient does not need one.",
    },
    {
      id: "emergency-tray-and-readiness-c6",
      front: "Four rules that keep an emergency tray usable.",
      back: "One tray in one fixed known location, sealed with a numbered breakable tag and never locked behind a single key holder; a named owner checking weekly against a printed list and signing a dated log; first-expiry-first-out rotation with anything within 3 months moved to routine use; restock and reseal immediately after every use.",
    },
    {
      id: "emergency-tray-and-readiness-c7",
      front: "What is measured in a clinic mock drill?",
      back: "Seconds to first chest compression, seconds to adrenaline drawn up, and minutes to the ambulance call. Run it unannounced at least quarterly, with pre-assigned roles, and debrief the same day producing one dated change with a named owner.",
    },
    {
      id: "emergency-tray-and-readiness-c8",
      front: "Immunisation session: minimum anaphylaxis readiness required in India.",
      back: "An anaphylaxis kit at the vaccination table with in-date adrenaline 1:1000, syringes and needles, a self-inflating bag with infant and child masks and oral airways; a vaccinator who knows the age-banded dose; and observation of every beneficiary for 30 minutes before leaving, with serious AEFI reported within 24 hours.",
    },
  ],
  references: [
    "Ministry of Health and Family Welfare, Government of India. AEFI Surveillance and Response Operational Guidelines, 2015 - anaphylaxis kit and 30-minute observation",
    "Resuscitation Council UK. Emergency treatment of anaphylaxis: guidelines for healthcare providers, 2021",
    "Indian Resuscitation Council and American Heart Association. Guidelines for CPR and Emergency Cardiovascular Care, 2020, with the 2023 focused update",
    "National Accreditation Board for Hospitals and Healthcare Providers (NABH). Standards for Small Healthcare Organisations, 3rd edition, and Entry Level Certification Standards for Clinics, 2020 - emergency drugs, equipment and staff training",
    "Indian Public Health Standards (IPHS), Ministry of Health and Family Welfare, Government of India. Guidelines for Primary Health Centres and Health and Wellness Centres, 2022 - essential emergency drug and equipment list",
    "World Health Organization. WHO Model List of Essential Medicines, 23rd list, 2023",
    "Eddleston M, Buckley NA, Eyer P, Dawson AH. Management of acute organophosphorus pesticide poisoning, Lancet 2008 - incremental atropine dosing and endpoints",
    "Indian Academy of Pediatrics. Pediatric Advanced Life Support - Indian guidelines, 2019 - weight-based emergency drug chart",
    "Federation of Obstetric and Gynaecological Societies of India. Good Clinical Practice Recommendations on Postpartum Haemorrhage and on Eclampsia, 2019",
  ],
});

topics.push({
  id: "emergency-ards",
  title: "Acute respiratory distress syndrome",
  oneLiner:
    "Acute respiratory distress syndrome is acute, diffuse, inflammatory lung injury defined by the Berlin criteria of 2012 - onset within one week of a known insult or new or worsening respiratory symptoms, bilateral opacities on chest imaging not fully explained by effusion, collapse or nodules, respiratory failure not fully explained by cardiac failure or fluid overload, and hypoxaemia graded by the PaO2/FiO2 ratio (mild 201-300, moderate 101-200, severe 100 or less) measured on a PEEP or CPAP of at least 5 cmH2O - the histological substrate being diffuse alveolar damage, and the treatment being treatment of the cause plus lung-protective ventilation in an intensive care unit, so that the family physician's job is recognition, oxygenation, early referral and long-term follow-up rather than definitive care.",
  frequency: "less-common",
  keywords: [
    "ARDS",
    "acute respiratory distress syndrome",
    "Berlin definition",
    "PaO2/FiO2 ratio",
    "P/F ratio",
    "SpO2/FiO2 ratio",
    "bilateral opacities",
    "non-cardiogenic pulmonary oedema",
    "lung-protective ventilation",
    "PEEP",
    "prone positioning",
    "driving pressure",
    "plateau pressure",
    "ARDSNet",
    "diffuse alveolar damage",
    "permissive hypercapnia",
    "ECMO",
  ],
  sections: [
    {
      heading: "Definition: the Berlin definition 2012, and what 2023 added",
      points: [
        "**The Berlin definition (ARDS Definition Task Force, JAMA 2012) has four components, and an answer that gives fewer than four does not earn the definition marks.** They are timing, chest imaging, origin of the oedema, and oxygenation - remembered as **T-I-O-O**, and all four must be satisfied simultaneously.",
        "**Timing: onset within one week of a known clinical insult, or of new or worsening respiratory symptoms.** This deliberately excludes the slowly progressive interstitial diseases; a patient whose bilateral shadowing has been evolving over a month has an interstitial lung disease or a malignancy until proved otherwise, not ARDS.",
        "**Chest imaging: bilateral opacities on chest radiograph or CT, not fully explained by pleural effusion, lobar or whole-lung collapse, or nodules.** The word is *opacities*, not *infiltrates*, and they need not be symmetrical or diffuse; the qualifier *not fully explained by* is what stops a large effusion with compressive collapse being called ARDS.",
        "**Origin of oedema: respiratory failure not fully explained by cardiac failure or fluid overload.** Berlin abolished the old pulmonary artery occlusion pressure cut-off of 18 mmHg from the 1994 American-European Consensus Conference and replaced it with a clinical judgement supported, **where no ARDS risk factor is evident, by objective assessment such as echocardiography** to exclude hydrostatic oedema. Note *not fully explained by* - heart failure and ARDS can coexist, and the presence of an enlarged heart does not by itself exclude ARDS.",
        "**Oxygenation, measured on a PEEP or CPAP of at least 5 cmH2O: mild 200 < PaO2/FiO2 no more than 300; moderate 100 < PaO2/FiO2 no more than 200; severe PaO2/FiO2 no more than 100.** PaO2 is in mmHg and FiO2 is a fraction, so a PaO2 of 60 mmHg on 60% oxygen is 60/0.6 = 100, that is severe ARDS. Berlin also **abolished the term acute lung injury (ALI)** and the old \"acute lung injury/ARDS\" split; mild ARDS is what ALI used to describe.",
        "**Berlin allows mild ARDS to be diagnosed on non-invasive CPAP of at least 5 cmH2O, but moderate and severe categories in the original statement assume an intubated patient**, and the ratio must be interpreted with the ventilator settings quoted alongside it. If altitude is significant, PaO2/FiO2 is corrected by multiplying by barometric pressure divided by 760.",
        "**The 2023 New Global Definition of ARDS (a consensus conference statement, published in the American Journal of Respiratory and Critical Care Medicine in 2024) keeps timing, imaging and the origin-of-oedema rule but widens access to the diagnosis in three ways**: it recognises **non-intubated ARDS** in patients on high-flow nasal oxygen at a flow of at least 30 L/min or on CPAP/NIV with PEEP of at least 5 cmH2O; it accepts **SpO2/FiO2 of 315 or less (valid only when SpO2 is 97% or below) as an alternative to PaO2/FiO2** where arterial blood gases are unavailable; and it accepts **lung ultrasound by a trained operator as imaging**, and in resource-limited settings drops the PEEP and flow-rate requirement altogether.",
        "**Where the two definitions differ, say so rather than choosing silently: Berlin remains the reference standard quoted by trials, examiners and most textbooks, and the 2023 global definition is a proposal designed for exactly the settings Indian family physicians work in - a district hospital with a pulse oximeter and an ultrasound but no blood gas machine.** Quote Berlin first, then note the 2023 addition; that is the answer that reads as current.",
      ],
    },
    {
      heading: "Associated disorders: direct and indirect causes",
      points: [
        "**The associated disorders are classified by the route of injury to the alveolar-capillary membrane: direct (pulmonary) insults reach the alveolar epithelium from the airway, and indirect (extrapulmonary) insults reach the capillary endothelium through the bloodstream.** This grouping is the answer the paper wants; a flat unclassified list loses marks even when it contains the same items.",
        "**Direct (pulmonary) causes: pneumonia - bacterial, viral (influenza A H1N1, SARS-CoV-2), Pneumocystis jirovecii and, in India, severe miliary tuberculosis; aspiration of gastric contents (Mendelson syndrome); inhalation injury from smoke, chlorine, ammonia, oxides of nitrogen or phosgene; near-drowning; pulmonary contusion; fat embolism after long-bone fracture; and reperfusion injury after lung transplantation or pulmonary embolectomy.** Pneumonia is the commonest single direct cause.",
        "**Indirect (extrapulmonary) causes: sepsis of any source - the single commonest cause of ARDS overall, accounting for roughly 40% of cases; severe non-thoracic trauma with shock; massive transfusion; acute pancreatitis; extensive burns; drug overdose (opioids, salicylates, tricyclic antidepressants, paraquat); transfusion-related acute lung injury (TRALI); eclampsia and pre-eclampsia, and amniotic fluid embolism; and cardiopulmonary bypass.** Add disseminated intravascular coagulation, tumour lysis syndrome and the post-cardiac-arrest syndrome to complete the list.",
        "**In Indian practice the tropical causes must be named or the answer looks imported: severe falciparum malaria, dengue with capillary leak, leptospirosis, scrub typhus, organophosphate and paraquat poisoning, snake envenomation, and disseminated tuberculosis are all recognised precipitants**, and several of them present first to a family physician.",
        "**The distinction is not merely academic.** Direct ARDS tends to produce more consolidation, a stiffer lung than chest wall, focal loss of aeration and less recruitability, so it responds less well to high PEEP and recruitment; indirect ARDS produces more interstitial oedema, diffuse ground-glass change and greater recruitability. Direct ARDS also has the clearer surgical or antimicrobial target - drain the empyema, treat the pneumonia.",
        "**Risk of ARDS after any given insult is modified by host factors: chronic alcohol misuse, cigarette smoking, hypoalbuminaemia, older age, obesity, recent chemotherapy and the number of simultaneous insults.** A septic patient who is also transfused and also aspirates has a far higher risk than one insult alone would predict - the \"multiple-hit\" model.",
        "**Not everything bilateral and hypoxic is ARDS: diffuse alveolar haemorrhage, acute eosinophilic pneumonia, acute interstitial pneumonia (Hamman-Rich), hypersensitivity pneumonitis, cryptogenic organising pneumonia, drug-induced pneumonitis (amiodarone, methotrexate, bleomycin, nitrofurantoin), lymphangitic carcinomatosis and leukaemic infiltration are the ARDS mimics**, and several of them respond to steroids or to withdrawal of a drug, which is why the cause must always be pursued.",
      ],
    },
    {
      heading: "Pathophysiology and the three phases",
      points: [
        "**The histological hallmark is diffuse alveolar damage (DAD): injury to both sides of the alveolar-capillary membrane - the type I alveolar epithelial cell and the capillary endothelial cell - so that the barrier becomes permeable and a protein-rich exudate floods the alveolus.** The oedema fluid protein to plasma protein ratio exceeds 0.75 in ARDS and is below 0.65 in hydrostatic oedema, which is the physiological statement of the difference from cardiogenic pulmonary oedema.",
        "**Mechanism: the insult activates alveolar macrophages, which release IL-1 beta, IL-6, IL-8 and TNF-alpha, recruiting neutrophils that degranulate, releasing proteases, reactive oxygen species and neutrophil extracellular traps.** Type II pneumocyte injury destroys surfactant production, so alveoli collapse; the same injury impairs the epithelial sodium channel and Na/K-ATPase, so the alveolar fluid that has accumulated cannot be cleared.",
        "**The physiological consequences are three: a true intrapulmonary shunt (perfused but unventilated alveoli), which is why the hypoxaemia is refractory to supplemental oxygen; a fall in compliance, because the aerated lung is small and stiff; and an increase in dead-space fraction, which predicts death independently (a dead-space fraction above 0.6 carries a markedly higher mortality).** Pulmonary hypertension from hypoxic vasoconstriction, microthrombi and vascular obliteration can precipitate acute cor pulmonale.",
        "**The \"baby lung\" concept (Gattinoni): in ARDS the aerated compartment shrinks to the volume of a 5- or 6-year-old child's lung, so a \"normal\" tidal volume of 10-12 mL/kg delivered to that small compartment is a massive relative overdistension.** This single idea is the whole justification for low-tidal-volume ventilation and should be stated in any management answer.",
        "**Exudative phase (roughly day 0-7): interstitial and alveolar oedema, hyaline membranes (condensed plasma protein and cellular debris lining the alveolar duct), neutrophil infiltration, capillary congestion and microthrombosis, loss of type I pneumocytes.** Clinically this is the phase of severe refractory hypoxaemia, low compliance and dense bilateral opacities; most patients either improve from here or die of their underlying illness.",
        "**Proliferative phase (roughly day 7-21): type II pneumocytes proliferate and differentiate to restore the epithelium, fibroblasts and myofibroblasts migrate into the alveolar space, and the exudate is organised.** Compliance begins to recover; this is when weaning becomes possible and when ventilator-associated pneumonia, delirium and ICU-acquired weakness dominate the clinical picture.",
        "**Fibrotic phase (from about day 10-14 onward, in a minority): collagen deposition, obliteration of alveolar architecture, cyst formation and honeycombing, with a persistently high dead space and pulmonary hypertension.** Ventilator-induced lung injury accelerates it, which is the practical reason lung-protective ventilation matters: **volutrauma** (overdistension), **barotrauma** (high pressure with pneumothorax and pneumomediastinum), **atelectrauma** (cyclical opening and closing of collapsed units), and **biotrauma** (release of mediators into the circulation, driving multi-organ failure).",
      ],
    },
    {
      heading: "Recognition and differential diagnosis at first contact",
      points: [
        "**Suspect ARDS in any patient with a recognised insult who becomes breathless and hypoxic over hours to days with bilateral crackles, a rising oxygen requirement and bilateral shadowing.** The clinical picture is tachypnoea, laboured breathing, use of accessory muscles, cyanosis and hypoxaemia that does not correct with a face mask - the last of these is the discriminating feature, because a true shunt does not respond to oxygen the way V/Q mismatch does.",
        "**Compute the ratio at the bedside rather than describing the patient as \"very hypoxic\": PaO2 in mmHg divided by FiO2 as a fraction.** Where there is no blood gas machine, use **SpO2/FiO2, which is valid only if SpO2 is 97% or below**; SpO2/FiO2 of 315 corresponds approximately to PaO2/FiO2 of 300, 235 to 200 and 148 to 100. A patient on 60% oxygen with an SpO2 of 90% has SpO2/FiO2 of 150 - moderate to severe disease that needs an intensive care unit now.",
        "**The single most important differential is cardiogenic pulmonary oedema, and it is separated by history, examination, imaging, a natriuretic peptide and an echocardiogram - not by any one of them alone.** Against a cardiac cause: no ischaemic or valvular history, no orthopnoea preceding the illness, a normal or low jugular venous pressure, no third heart sound, no dependent oedema, a normal-sized heart, and a clear precipitant such as sepsis or pancreatitis.",
        "**BNP below 100 pg/mL (NT-proBNP below 300 pg/mL) argues strongly against acute heart failure; a value above 500 pg/mL supports it, but the intermediate zone is common in critical illness, and sepsis, renal failure, atrial fibrillation, right ventricular strain and age all raise it.** Echocardiography is the more useful test: preserved left ventricular systolic function, normal filling pressures (a low E/e'), no significant valve lesion and a non-plethoric inferior vena cava point away from a hydrostatic cause.",
        "**Lung ultrasound is the tool a family physician can actually deploy, and it distinguishes the two better than a portable chest film.** ARDS gives an **irregular, thickened, fragmented pleural line, spared areas of normal lung next to B-lines, subpleural consolidations and reduced lung sliding**; cardiogenic oedema gives **homogeneous, symmetrical, gravity-dependent B-lines with a smooth regular pleural line, bilateral effusions and no spared areas**.",
        "**A therapeutic trial is diagnostic information: brisk symptomatic improvement, diuresis and clearing of the chest film after intravenous furosemide and nitrates points to a cardiogenic cause; failure to improve, or worsening as the patient is diuresed towards hypotension, points to ARDS.** Never withhold antibiotics while this trial runs if sepsis is possible.",
        "**Initial assessment and stabilisation before transfer, in the order it is done: airway and conscious level; oxygen by non-rebreathing mask at 15 L/min aiming for SpO2 88-95% (a higher target confers no benefit and costs time); intravenous access and blood for culture, glucose, counts, creatinine, electrolytes, and where available lactate; broad-spectrum antibiotics within the first hour if sepsis is suspected; and an ECG.** Do not give a reflex fluid bolus to a hypoxic patient who is not hypotensive - it worsens the oedema.",
        "**If high-flow nasal oxygen or CPAP is available, start it, but treat it as a bridge and not as a destination: watch the ROX index (SpO2/FiO2 divided by respiratory rate), where a value below about 4.88 at 12 hours predicts failure, and escalate rather than persist.** Arrange an ambulance with oxygen and a trained escort, telephone the receiving intensivist before the patient leaves, and send a written note with the timeline, the FiO2 and SpO2 trend, drugs and doses given, and the suspected cause.",
      ],
    },
    {
      heading: "Principles of management",
      points: [
        "**Principle one: treat the cause, because nothing else changes mortality as much.** Source control means the right antibiotic in the right dose within the first hour of suspected septic shock, drainage of pus or an infected collection, removal of an infected line, laparotomy for a perforation, antivenom, atropine and pralidoxime for organophosphates, antimalarials for severe falciparum malaria. ARDS itself has no specific drug therapy.",
        "**Principle two: lung-protective mechanical ventilation, which is the only ventilator strategy with a proven mortality benefit (ARDSNet ARMA trial, NEJM 2000: 6 mL/kg versus 12 mL/kg, hospital mortality 31.0% versus 39.8%, absolute reduction 8.8%, number needed to treat about 11).** Set **tidal volume 6 mL/kg predicted body weight, adjustable within 4-8 mL/kg**, calculated from height and sex, never from actual weight: **males 50 + 0.91 x (height in cm - 152.4); females 45.5 + 0.91 x (height in cm - 152.4)**.",
        "**Keep plateau pressure (measured on a 0.5-second end-inspiratory hold) at or below 30 cmH2O, and driving pressure (plateau minus PEEP) below 15 cmH2O.** If plateau exceeds 30, step tidal volume down by 1 mL/kg at a time to a floor of 4 mL/kg before doing anything else. Driving pressure is the variable most strongly associated with survival in the mediation analysis of Amato and colleagues (NEJM 2015), but that is an association from re-analysed trials, not a randomised target - say so rather than presenting it as proven. **Accept permissive hypercapnia to achieve this: increase the respiratory rate up to about 35 per minute and tolerate a pH down to about 7.20 (the ARDSNet protocol tolerates 7.15-7.30) rather than raise the tidal volume**, the contraindications being raised intracranial pressure, severe pulmonary hypertension with right ventricular failure and significant metabolic acidosis; and keep the oxygenation target deliberately modest at **PaO2 55-80 mmHg or SpO2 88-95%**.",
        "**Set PEEP from an ARDSNet PEEP-FiO2 table rather than by guesswork; higher-PEEP tables have not improved mortality overall (ALVEOLI, LOVS, EXPRESS), although meta-analysis suggests benefit confined to moderate and severe disease with PaO2/FiO2 of 200 or less.** Aggressive stepwise recruitment with decremental PEEP titration **increased** mortality in the ART trial (JAMA 2017) and should not be used routinely; brief recruitment manoeuvres remain a rescue option only.",
        "**Prone positioning for at least 16 consecutive hours a day, started early, in patients with PaO2/FiO2 below 150 on FiO2 of 0.6 or more with PEEP of at least 5 cmH2O, after 12-24 hours of stabilisation (PROSEVA, NEJM 2013): 28-day mortality 16.0% versus 32.8% and 90-day mortality 23.6% versus 41.0%.** It works by recruiting dorsal lung, making the distribution of stress more uniform and improving V/Q matching. It needs three to five trained staff, eye and pressure-point protection and secure tubes; unplanned extubation is the feared complication.",
        "**Conservative fluid management once shock has resolved (FACTT, NEJM 2006): a conservative strategy did not reduce mortality but produced about 2.5 more ventilator-free days and shorter ICU stay, so aim for a neutral to negative balance with diuretics, guided by perfusion and not by a single filling pressure.** Neuromuscular blockade with cisatracurium for 48 hours improved adjusted survival in ACURASYS (2010) but showed no benefit against a light-sedation strategy in ROSE (2019), so it is **not routine** - reserve it for severe ARDS with dyssynchrony, unacceptable plateau pressures, or to enable proning.",
        "**Rescue for refractory hypoxaemia, in order: optimise sedation and consider paralysis; prone; inhaled pulmonary vasodilators (nitric oxide or nebulised prostacyclin), which improve oxygenation transiently but have never improved survival and are associated with renal impairment - a bridge, not a treatment; and veno-venous ECMO.** EOLIA (NEJM 2018) found 60-day mortality 35% with ECMO versus 46% with conventional care (p = 0.09, with 28% crossover), so the trial was formally negative while Bayesian re-analyses and meta-analysis favour ECMO; the honest position is that ECMO is reasonable in very severe, potentially reversible ARDS at an experienced centre and that patient selection, not the technique, decides the result.",
        "**Corticosteroids: genuinely contested.** Dexamethasone 20 mg daily for 5 days then 10 mg daily for 5 days reduced 60-day mortality (21% versus 36%) in moderate-to-severe ARDS in DEXA-ARDS (2020), and dexamethasone 6 mg for 10 days is established in COVID-19 requiring oxygen (RECOVERY, 2021). Against this, the older ARDSNet LaSRS study found **harm** when methylprednisolone was started after 14 days, steroids are avoided in influenza and in undrained infection, and guideline bodies grade the recommendation as conditional. State the evidence and the caveat rather than asserting that steroids are standard care. **By contrast the therapies that are settled as ineffective, and are worth naming because examiners ask for them, are exogenous surfactant in adults, inhaled or intravenous beta-agonists (BALTI-2 showed harm), statins (SAILS, HARP-2), high-frequency oscillatory ventilation (OSCILLATE showed harm, OSCAR was neutral), routine inhaled nitric oxide, ketoconazole and N-acetylcysteine** - none of these is part of modern management.",
        "**Supportive care is where the remaining mortality is won: head of bed elevated 30-45 degrees and a ventilator-associated pneumonia bundle; early enteral nutrition within 24-48 hours (trophic and full feeding were equivalent in EDEN); analgesia-first sedation with the lightest effective depth, daily sedation interruption and daily spontaneous breathing trials, with CAM-ICU delirium screening; VTE prophylaxis with low-molecular-weight heparin unless contraindicated; stress-ulcer prophylaxis with a proton pump inhibitor or H2 blocker for those ventilated beyond 48 hours or coagulopathic; a transfusion threshold of 7 g/dL; glucose 140-180 mg/dL; and early mobilisation and physiotherapy.**",
      ],
    },
    {
      heading: "Outcome, prognosis and what the family physician does",
      points: [
        "**Hospital mortality is about 35-45% and tracks severity: the Berlin derivation cohort reported 27% for mild, 32% for moderate and 45% for severe, and the international LUNG SAFE study (JAMA 2016) reported hospital mortality of 34.9%, 40.3% and 46.1% across the same bands.** Quote a range and its source rather than a single confident figure; case mix, ICU resources and the underlying cause dominate.",
        "**Most patients who die do not die of hypoxaemia; they die of the underlying illness and of multi-organ failure.** This is why source control outranks ventilator manipulation, and why a candidate who spends the whole management answer on ventilator settings has missed the point.",
        "**ARDS is systematically under-recognised: in LUNG SAFE it accounted for 10.4% of ICU admissions and 23.4% of ventilated patients, yet clinicians recognised it in only about 60% of cases (and only about half of mild cases), and low tidal volumes were used in a minority.** Recognising the syndrome and naming it is itself an intervention, because it changes the ventilator prescription.",
        "**Pulmonary recovery in survivors is better than the acute illness suggests: lung volumes and spirometry are usually near normal by 6-12 months, with a mildly reduced diffusing capacity (DLCO) as the commonest residual abnormality; significant fibrosis and chronic oxygen dependence are the minority.** Persistent breathlessness a year later is far more often deconditioning, weakness or anxiety than fixed lung damage.",
        "**The dominant long-term disability is extrapulmonary. ICU-acquired weakness from critical illness polyneuropathy and myopathy leaves survivors with muscle wasting, joint contractures and reduced exercise capacity - in Herridge's 5-year cohort (NEJM 2011) the median 6-minute walk distance was still about 76% of predicted, and only about half of survivors had returned to work at one year.**",
        "**Cognitive and psychological morbidity is the part that is missed in general practice: cognitive impairment at 12 months in roughly a third of survivors (BRAIN-ICU), depression in about 30%, clinically significant anxiety in up to 40% and post-traumatic stress symptoms in about 20-25%.** Together with the physical domain these constitute the **post-intensive care syndrome (PICS)**, which also affects family carers (PICS-F).",
        "**The family physician's follow-up work is concrete: reconcile medications and stop what the ICU started (sedatives, antipsychotics, proton pump inhibitors, insulin scales); check weight, nutrition and swallowing; review the tracheostomy site, voice and any pressure ulcers; screen with PHQ-9 and GAD-7 and ask directly about nightmares and flashbacks; refer to pulmonary rehabilitation and physiotherapy; arrange spirometry with DLCO at about 3-6 months if breathlessness persists; complete influenza, pneumococcal and COVID-19 vaccination; and address smoking and alcohol.**",
        "**Refer back to hospital for persistent or new hypoxaemia, an oxygen requirement that is not falling, new or progressive fibrosis on imaging, unexplained functional decline, suspected pulmonary hypertension, or psychiatric illness beyond the scope of primary care - and be explicit with the family that ARDS is managed in an intensive care unit, that recovery is measured in months, and that a plateau at three months is not a failure.**",
      ],
    },
  ],
  tables: [
    {
      heading: "Berlin severity bands, with the 2023 SpO2/FiO2 equivalents and mortality",
      columns: [
        "Severity",
        "PaO2/FiO2 (mmHg) on PEEP or CPAP of at least 5 cmH2O",
        "SpO2/FiO2 equivalent (2023 global definition; valid only if SpO2 is 97% or less)",
        "Reported hospital mortality",
        "What it changes at the bedside",
      ],
      rows: [
        [
          "Mild",
          "More than 200 and up to 300",
          "More than 235 and up to 315",
          "About 27% (Berlin cohort) to 35% (LUNG SAFE)",
          "May be managed on CPAP, NIV or high-flow nasal oxygen with close monitoring; low tidal volumes if intubated; watch for progression over 48 hours",
        ],
        [
          "Moderate",
          "More than 100 and up to 200",
          "More than 148 and up to 235",
          "About 32% (Berlin) to 40% (LUNG SAFE)",
          "Intubation and lung-protective ventilation; higher-PEEP strategy is reasonable; consider proning if the ratio is below 150",
        ],
        [
          "Severe",
          "100 or less",
          "148 or less",
          "About 45% (Berlin) to 46% (LUNG SAFE)",
          "Prone for at least 16 hours a day, consider neuromuscular blockade, and telephone an ECMO centre early rather than after multi-organ failure has set in",
        ],
        [
          "Worked example",
          "PaO2 60 mmHg on FiO2 0.6 = 100",
          "SpO2 90% on FiO2 0.6 = 150",
          "-",
          "Severe by PaO2/FiO2, borderline severe by SpO2/FiO2 - proning territory; the two indices agree closely but are not identical",
        ],
      ],
    },
    {
      heading: "Associated disorders: direct (pulmonary) versus indirect (extrapulmonary) causes",
      columns: ["Route of injury", "Conditions", "The point that decides the mark"],
      rows: [
        [
          "Direct - infection",
          "Bacterial and viral pneumonia (including influenza A H1N1 and SARS-CoV-2), Pneumocystis jirovecii pneumonia, miliary tuberculosis",
          "Commonest direct cause; the ARDS is only the presentation - the antimicrobial and any drainage are the treatment",
        ],
        [
          "Direct - aspiration",
          "Aspiration of gastric contents (Mendelson syndrome), near-drowning in fresh or salt water",
          "Chemical injury from acid, not infection; antibiotics are not automatic on day one, and steroids do not help",
        ],
        [
          "Direct - inhalation and trauma",
          "Smoke, chlorine, ammonia, oxides of nitrogen, phosgene; pulmonary contusion; fat embolism after long-bone fracture",
          "Look for the enclosed-space fire, the crush injury, the femoral fracture with petechiae and confusion",
        ],
        [
          "Direct - other",
          "Reperfusion injury after lung transplantation or pulmonary embolectomy, high-altitude and re-expansion oedema as differentials",
          "Rare in family practice but named in the classification for completeness",
        ],
        [
          "Indirect - sepsis",
          "Sepsis and septic shock of any source, most often abdominal or urinary",
          "The single commonest cause of ARDS overall, around 40% of cases; source control is the treatment",
        ],
        [
          "Indirect - trauma and transfusion",
          "Severe non-thoracic trauma with shock, massive transfusion, transfusion-related acute lung injury (TRALI)",
          "TRALI occurs within 6 hours of a transfusion, is not volume overload, and the unit and donor must be reported",
        ],
        [
          "Indirect - inflammatory",
          "Acute pancreatitis, extensive burns, cardiopulmonary bypass, disseminated intravascular coagulation, tumour lysis syndrome",
          "Hypoxia on day 2-4 of severe pancreatitis is ARDS until proved otherwise and is part of the severity scores",
        ],
        [
          "Indirect - drugs and poisons",
          "Opioid, salicylate and tricyclic overdose; paraquat and organophosphate poisoning; snake envenomation",
          "Paraquat causes progressive fibrosis and high-flow oxygen makes it worse - the one situation where oxygen is restricted",
        ],
        [
          "Indirect - obstetric",
          "Eclampsia and severe pre-eclampsia, amniotic fluid embolism, septic abortion, postpartum haemorrhage with massive transfusion",
          "In pregnancy, deliver the mother's oxygenation first; the obstetric cause must be treated in parallel",
        ],
        [
          "Indirect - tropical (India)",
          "Severe falciparum malaria, dengue, leptospirosis, scrub typhus, disseminated tuberculosis",
          "Name these; they are the causes that actually present to an Indian family physician",
        ],
      ],
    },
    {
      heading: "ARDS versus cardiogenic pulmonary oedema",
      columns: ["Feature", "ARDS", "Cardiogenic pulmonary oedema"],
      rows: [
        [
          "History",
          "A recognised precipitant - sepsis, pneumonia, aspiration, pancreatitis, trauma, transfusion; often no cardiac history",
          "Ischaemic heart disease, hypertension, valve disease, atrial fibrillation, missed dialysis or missed diuretic",
        ],
        [
          "Onset and preceding symptoms",
          "Over hours to a few days, with the illness that caused it",
          "Often minutes to hours, with preceding orthopnoea and paroxysmal nocturnal dyspnoea",
        ],
        [
          "Jugular venous pressure and peripheral oedema",
          "Normal or low unless the patient is also in shock and fluid-loaded",
          "Raised JVP, dependent oedema, tender hepatomegaly",
        ],
        [
          "Cardiac examination",
          "No third heart sound, no new murmur, apex not displaced",
          "Third heart sound, displaced apex, murmur of mitral regurgitation or aortic stenosis",
        ],
        [
          "Peripheries and sputum",
          "Warm and vasodilated if septic; sputum is purulent or absent",
          "Cold, clammy, peripherally shut down; pink frothy sputum",
        ],
        [
          "Chest radiograph",
          "Peripheral, patchy, often asymmetrical opacities extending to the periphery; air bronchograms; normal heart size; effusions small or absent; no Kerley B lines or upper-lobe blood diversion",
          "Perihilar bat's-wing distribution, cardiomegaly, upper-lobe blood diversion, Kerley B lines, bilateral effusions",
        ],
        [
          "Lung ultrasound",
          "Irregular thickened fragmented pleural line, spared areas beside B-lines, subpleural consolidation, reduced lung sliding",
          "Homogeneous symmetrical gravity-dependent B-lines, smooth regular pleural line, bilateral effusions, no spared areas",
        ],
        [
          "Echocardiography",
          "Preserved left ventricular function, low filling pressure (low E/e'), non-plethoric inferior vena cava; right ventricle may be strained",
          "Impaired systolic or diastolic function, raised filling pressures, dilated inferior vena cava, valve lesion",
        ],
        [
          "BNP / NT-proBNP",
          "Usually low; BNP below 100 pg/mL argues strongly against heart failure",
          "Usually high; BNP above 500 pg/mL supports it, though sepsis and renal failure blunt the discrimination",
        ],
        [
          "Response to diuretic and nitrate",
          "Little symptomatic gain; hypotension if pushed",
          "Rapid symptomatic relief, diuresis and clearing of the film",
        ],
        [
          "Oedema fluid protein to plasma protein ratio",
          "Above 0.75 (permeability oedema)",
          "Below 0.65 (hydrostatic oedema)",
        ],
        [
          "Response of hypoxaemia to oxygen",
          "Poor - true intrapulmonary shunt; the FiO2 climbs while the SpO2 does not",
          "Usually good, and better still with CPAP, which offloads the left ventricle as well as recruiting alveoli",
        ],
      ],
    },
  ],
  redFlags: [
    "SpO2 remaining below 90% despite 15 L/min of oxygen by non-rebreathing mask, or an FiO2 requirement that is climbing hour on hour - a true shunt that oxygen alone will not fix, and a signal to arrange intubation and transfer now rather than to add another mask.",
    "A respiratory rate above 30 per minute with a PaCO2 that is rising, or even one that has merely become normal - a normal PaCO2 in an exhausted tachypnoeic hypoxic patient is a pre-terminal sign of impending ventilatory failure, not reassurance.",
    "Exhaustion: inability to complete a sentence, paradoxical abdominal movement, sweating, an inability to lie flat, a falling respiratory rate without any improvement in oxygenation, or a rising then falling conscious level.",
    "A silent chest, or new drowsiness, agitation or confusion in a hypoxic patient - both indicate that the patient can no longer move enough air, and both mandate immediate airway support.",
    "Haemodynamic instability - systolic blood pressure below 90 mmHg, mottling, cold peripheries, lactate above 2 mmol/L, urine output below 0.5 mL/kg/hour - which usually means septic shock or acute cor pulmonale complicating the lung injury.",
    "A PaO2/FiO2 ratio below 100 (or SpO2/FiO2 below 148) - severe ARDS, with a mortality approaching 45%, needing proning, possible neuromuscular blockade and an early conversation with an ECMO-capable centre.",
    "Any of the above occurring outside a facility with intubation, mechanical ventilation and intensive care - including a patient being sustained on high-flow nasal oxygen or CPAP in a ward that cannot intubate; the referral call should be made while the oxygen is being set up, not after it has failed.",
  ],
  pearls: [
    "Say all four Berlin components in the first two lines: timing within one week, bilateral opacities not fully explained by effusion, collapse or nodules, respiratory failure not fully explained by cardiac failure or fluid overload, and PaO2/FiO2 graded on a PEEP or CPAP of at least 5 cmH2O. Four components, four ticks.",
    "PaO2 is in mmHg and FiO2 is a fraction: a PaO2 of 60 mmHg on 60% oxygen is 60/0.6 = 100, which is severe ARDS. Candidates who divide by 60 instead of 0.6 report a ratio of 1 and lose the question.",
    "Berlin 2012 abolished the term acute lung injury and abolished the pulmonary capillary wedge pressure criterion of 18 mmHg; the 2023 global definition added high-flow nasal oxygen, SpO2/FiO2 and lung ultrasound so that the diagnosis can be made where there is no blood gas machine.",
    "Classify the associated disorders as direct and indirect - the route of injury to the alveolar-capillary membrane - and the marks follow the classification, not the length of the list. Sepsis is the commonest cause overall; pneumonia is the commonest direct cause.",
    "The histology is diffuse alveolar damage, and the phases are exudative (day 0-7, hyaline membranes), proliferative (day 7-21, type II pneumocyte and fibroblast proliferation) and fibrotic (after about two weeks, in a minority).",
    "Tidal volume is 6 mL/kg of **predicted** body weight, calculated from height and sex, never from the weight on the scales. A 95 kg man 175 cm tall has a predicted body weight of about 70 kg and gets about 420 mL, not 570 mL.",
    "Plateau pressure at or below 30 cmH2O, driving pressure below 15 cmH2O, respiratory rate up to 35, and permissive hypercapnia down to a pH of about 7.20 - the numbers that make an examiner stop asking.",
    "Prone positioning for at least 16 consecutive hours a day, when PaO2/FiO2 is below 150, halved 28-day mortality in PROSEVA (16.0% versus 32.8%). It is the cheapest intervention in the syndrome and needs staff, not equipment.",
    "Inhaled nitric oxide and recruitment manoeuvres improve the number on the monitor without improving survival, and aggressive recruitment increased mortality in the ART trial - improving oxygenation is not the same as improving outcome.",
    "Patients die of the underlying disease and multi-organ failure, not usually of hypoxaemia; and the survivors' main disability is neuromuscular, cognitive and psychological, not pulmonary - which is where the family physician does the work that the ICU cannot.",
  ],
  theory: [
    {
      id: "emergency-ards-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "less-common",
      question:
        "Define Acute Respiratory Distress Syndrome. What are the associated disorders? Write the principles of management of Acute Respiratory Distress Syndrome.",
      openingLines: [
        "Acute respiratory distress syndrome is an acute, diffuse, inflammatory lung injury defined by the Berlin definition (2012) as respiratory failure of onset within one week of a known clinical insult or of new or worsening respiratory symptoms, with bilateral opacities on chest imaging that are not fully explained by pleural effusion, lobar or lung collapse or nodules, respiratory failure that is not fully explained by cardiac failure or fluid overload, and hypoxaemia graded by the PaO2/FiO2 ratio measured on a PEEP or CPAP of at least 5 cmH2O.",
        "The pathological substrate is diffuse alveolar damage with increased alveolar-capillary permeability; it is therefore a non-cardiogenic pulmonary oedema, it is always secondary to an identifiable insult, and its management is treatment of that cause plus lung-protective ventilation in an intensive care unit.",
      ],
      answer: [
        {
          heading: "Definition - the Berlin definition, 2012",
          points: [
            "**Timing:** onset within one week of a known clinical insult, or of new or worsening respiratory symptoms.",
            "**Chest imaging:** bilateral opacities on chest radiograph or CT, not fully explained by effusion, lobar or whole-lung collapse, or nodules.",
            "**Origin of oedema:** respiratory failure not fully explained by cardiac failure or fluid overload; where no ARDS risk factor is present, objective assessment such as echocardiography is required to exclude hydrostatic oedema.",
            "**Oxygenation, on PEEP or CPAP of at least 5 cmH2O:** mild, PaO2/FiO2 more than 200 and up to 300; moderate, more than 100 and up to 200; severe, 100 or less. (PaO2 in mmHg, FiO2 as a fraction.)",
            "Berlin **replaced** the 1994 American-European Consensus Conference definition: it removed the term *acute lung injury* and removed the pulmonary artery occlusion pressure criterion of 18 mmHg or less, and it graded severity into three bands that carry different mortality - approximately 27%, 32% and 45% in the derivation cohort.",
            "The **2023 New Global Definition** additionally recognises non-intubated ARDS on high-flow nasal oxygen at 30 L/min or more, or on CPAP/NIV with PEEP of at least 5 cmH2O; accepts **SpO2/FiO2 of 315 or less (when SpO2 is 97% or below)** in place of PaO2/FiO2; and accepts lung ultrasound as imaging, with the PEEP and flow requirements waived in resource-limited settings. Berlin remains the standard used in trials and textbooks.",
          ],
        },
        {
          heading: "Associated disorders - direct (pulmonary) insults",
          points: [
            "**Pneumonia** - bacterial, viral (influenza A H1N1, SARS-CoV-2), Pneumocystis jirovecii; **miliary tuberculosis**. The commonest direct cause.",
            "**Aspiration of gastric contents** (Mendelson syndrome) and **near-drowning**.",
            "**Inhalation injury** - smoke, chlorine, ammonia, oxides of nitrogen, phosgene.",
            "**Pulmonary contusion** after blunt chest trauma, and **fat embolism** after long-bone fracture.",
            "**Reperfusion injury** after lung transplantation or pulmonary embolectomy.",
          ],
        },
        {
          heading: "Associated disorders - indirect (extrapulmonary) insults",
          points: [
            "**Sepsis and septic shock of any source** - the commonest single cause of ARDS overall, about 40% of cases.",
            "**Severe non-thoracic trauma with shock**, and **massive blood transfusion**.",
            "**Acute pancreatitis** and **extensive burns**.",
            "**Drug overdose and poisoning** - opioids, salicylates, tricyclic antidepressants, paraquat, organophosphates; snake envenomation.",
            "**Transfusion-related acute lung injury (TRALI)** - within 6 hours of transfusion, and distinct from circulatory overload.",
            "**Obstetric causes** - eclampsia and severe pre-eclampsia, amniotic fluid embolism, septic abortion.",
            "**Cardiopulmonary bypass**, disseminated intravascular coagulation, tumour lysis syndrome and the post-cardiac-arrest syndrome.",
            "In Indian practice add **severe falciparum malaria, dengue, leptospirosis and scrub typhus**; risk after any insult is increased by chronic alcohol misuse, smoking, hypoalbuminaemia, older age and multiple simultaneous insults.",
          ],
        },
        {
          heading: "Principles of management - general",
          points: [
            "**ARDS is a syndrome managed in an intensive care unit, and there is no specific drug therapy; the two things that alter outcome are treatment of the cause and avoidance of ventilator-induced lung injury.**",
            "**Treat the cause and achieve source control:** appropriate antibiotics within the first hour of suspected septic shock, drainage of pus or infected collections, removal of infected lines, laparotomy for perforation, antivenom, antimalarials, atropine and pralidoxime as the cause dictates.",
            "**Oxygenation targets are deliberately modest - PaO2 55-80 mmHg or SpO2 88-95%** - because chasing a normal saturation costs FiO2 and pressure without benefit.",
            "**Escalate support in steps:** face mask, then high-flow nasal oxygen or CPAP/NIV in mild disease with close monitoring, then intubation without delay when the work of breathing is unsustainable, PaCO2 is rising, the conscious level is falling or the ROX index is falling.",
            "**Conservative fluid strategy once shock has resolved** (FACTT, 2006): aim for a neutral to negative balance, which yields more ventilator-free days, while maintaining perfusion.",
          ],
        },
        {
          heading: "Principles of management - lung-protective ventilation",
          points: [
            "**Tidal volume 6 mL/kg predicted body weight (permissible range 4-8 mL/kg)**, predicted body weight calculated as 50 + 0.91 x (height in cm - 152.4) for men and 45.5 + 0.91 x (height in cm - 152.4) for women. This is the ARDSNet ARMA regimen (NEJM 2000), which reduced hospital mortality from 39.8% to 31.0%.",
            "**Plateau pressure at or below 30 cmH2O** on an end-inspiratory hold; if exceeded, reduce tidal volume by 1 mL/kg steps to a floor of 4 mL/kg. **Keep driving pressure (plateau minus PEEP) below 15 cmH2O** - strongly associated with survival, though not itself a randomised target.",
            "**Permissive hypercapnia:** raise the respiratory rate to a maximum of about 35 and accept a pH down to about 7.20 rather than increase the tidal volume. Avoid in raised intracranial pressure and severe pulmonary hypertension.",
            "**Set PEEP from an ARDSNet PEEP-FiO2 table**; higher-PEEP strategies have not improved mortality overall but may help moderate and severe disease. **Routine aggressive recruitment manoeuvres with decremental PEEP titration are not recommended - they increased mortality in the ART trial (2017).**",
            "**Prone positioning for at least 16 consecutive hours a day when PaO2/FiO2 is below 150 on FiO2 of 0.6 or more with PEEP of at least 5 cmH2O** - PROSEVA (2013) reduced 28-day mortality from 32.8% to 16.0% and 90-day mortality from 41.0% to 23.6%.",
            "**Neuromuscular blockade with cisatracurium is not routine:** beneficial in ACURASYS (2010) but neutral against light sedation in ROSE (2019); reserve for severe dyssynchrony, unacceptable plateau pressure or to enable proning.",
          ],
        },
        {
          heading: "Principles of management - rescue, adjuncts and supportive care",
          points: [
            "**Refractory hypoxaemia ladder:** optimise sedation and consider paralysis, prone, then inhaled pulmonary vasodilators (nitric oxide or nebulised prostacyclin - improve oxygenation transiently with no survival benefit and a risk of renal impairment), then **veno-venous ECMO** at an experienced centre for very severe but potentially reversible disease. EOLIA (2018) was formally negative (60-day mortality 35% versus 46%, p = 0.09, 28% crossover); meta-analysis and Bayesian re-analysis favour ECMO, so selection and early referral matter more than the technique.",
            "**Corticosteroids remain contested:** dexamethasone 20 mg daily for 5 days then 10 mg daily for 5 days reduced 60-day mortality in moderate-to-severe ARDS in DEXA-ARDS (2020), and dexamethasone is established in COVID-19 requiring oxygen; but steroids started after 14 days caused harm in the ARDSNet LaSRS study, are avoided in influenza and in undrained infection, and guidelines grade the recommendation as conditional.",
            "**Interventions that do not work and should not be offered:** exogenous surfactant in adults, beta-agonists, statins, high-frequency oscillatory ventilation, routine inhaled nitric oxide, N-acetylcysteine.",
            "**Supportive care:** head of bed at 30-45 degrees with a VAP-prevention bundle; early enteral nutrition within 24-48 hours; analgesia-first, lightest-effective sedation with daily interruption, daily spontaneous breathing trials and CAM-ICU delirium screening; VTE prophylaxis with low-molecular-weight heparin; stress-ulcer prophylaxis for those ventilated beyond 48 hours or coagulopathic; transfusion threshold 7 g/dL; glucose 140-180 mg/dL; early mobilisation and physiotherapy.",
            "**Outcome and the family physician's role:** hospital mortality is about 35-45% and rises with severity; death is usually from the underlying illness and multi-organ failure rather than from hypoxaemia. Survivors have near-normal spirometry with a reduced DLCO but substantial ICU-acquired weakness, cognitive impairment in about a third, and depression, anxiety or post-traumatic stress in 20-40% - the post-intensive care syndrome. The family physician's contribution is **recognition and oxygenation at first contact, early referral, and long-term rehabilitation, mental health screening, vaccination and medication reconciliation after discharge.**",
          ],
        },
      ],
      mustDraw: [
        "A box of the four Berlin criteria (timing, imaging, origin of oedema, oxygenation) with the three severity bands and their PaO2/FiO2 cut-offs of 300, 200 and 100 written against them.",
        "A two-column table of associated disorders headed Direct (pulmonary) and Indirect (extrapulmonary), with at least five entries in each column.",
        "A flow chart of management: treat the cause and achieve source control - lung-protective ventilation (6 mL/kg predicted body weight, plateau 30 cmH2O or less, driving pressure under 15 cmH2O, permissive hypercapnia, PEEP-FiO2 table) - conservative fluids - prone for 16 hours or more if PaO2/FiO2 is under 150 - rescue (neuromuscular blockade, inhaled vasodilators, ECMO) - supportive care bundle.",
      ],
      markSplit: [
        { part: "Definition: the four Berlin criteria with the severity bands, and a line on the 2023 global definition", marks: 3 },
        { part: "Associated disorders, correctly grouped as direct and indirect with adequate examples in each", marks: 3 },
        { part: "Principles of management: treat the cause, lung-protective ventilation with numbers, fluids, proning", marks: 2 },
        { part: "Rescue therapies, supportive care bundle, and outcome with the family physician's role", marks: 2 },
      ],
      keywords: [
        "ARDS",
        "Berlin definition",
        "PaO2/FiO2",
        "direct and indirect causes",
        "diffuse alveolar damage",
        "lung-protective ventilation",
        "prone positioning",
        "ARDSNet",
        "predicted body weight",
        "driving pressure",
      ],
    },
    {
      id: "emergency-ards-t2",
      paper: "II",
      kind: "differentiate",
      marks: 5,
      minutes: 9,
      frequency: "less-common",
      question:
        "A 48-year-old man being treated for severe acute pancreatitis becomes acutely breathless with an SpO2 of 86% on room air on the third day. Differentiate acute respiratory distress syndrome from cardiogenic pulmonary oedema, and outline the initial assessment and stabilisation of such a patient at a first-contact facility before transfer.",
      openingLines: [
        "Both present as acute breathlessness with hypoxaemia and bilateral pulmonary shadowing, but ARDS is a permeability (non-cardiogenic) oedema arising from a systemic or pulmonary insult, whereas cardiogenic pulmonary oedema is a hydrostatic oedema arising from raised left atrial pressure - and in this man, with severe pancreatitis on day three, ARDS is by far the more likely.",
        "The distinction is made on the combination of history, jugular venous pressure and cardiac examination, the pattern on chest imaging or lung ultrasound, a natriuretic peptide, an echocardiogram and the response to diuresis - never on any single one of these.",
      ],
      answer: [
        {
          heading: "Clinical differentiation",
          points: [
            "**History:** ARDS follows an identifiable insult - here, severe acute pancreatitis; typical onset is over hours to days. Cardiogenic oedema follows ischaemic, hypertensive or valvular heart disease, atrial fibrillation, a missed diuretic or missed dialysis, and is usually preceded by orthopnoea and paroxysmal nocturnal dyspnoea.",
            "**Examination:** in ARDS the jugular venous pressure is normal or low, there is no third heart sound, no displaced apex and no dependent oedema, and the periphery is warm if the patient is septic. In cardiogenic oedema the JVP is raised, there is a third heart sound and often a murmur, the periphery is cold and clammy, and pink frothy sputum may be produced.",
            "**Response of the hypoxaemia to oxygen:** ARDS produces a true intrapulmonary shunt, so the FiO2 rises while the SpO2 does not; cardiogenic oedema usually responds to oxygen and responds particularly well to CPAP, which offloads the left ventricle as well as recruiting alveoli.",
          ],
        },
        {
          heading: "Investigative differentiation",
          points: [
            "**Chest radiograph:** ARDS gives peripheral, patchy, often asymmetrical opacities with air bronchograms, a normal cardiac silhouette, and no Kerley B lines or upper-lobe blood diversion. Cardiogenic oedema gives a perihilar bat's-wing pattern with cardiomegaly, upper-lobe diversion, Kerley B lines and bilateral effusions.",
            "**Lung ultrasound (available at the bedside and better than a portable film):** ARDS shows an irregular thickened fragmented pleural line, spared areas of normal lung between B-lines, subpleural consolidation and reduced lung sliding; cardiogenic oedema shows homogeneous, symmetrical, gravity-dependent B-lines with a smooth pleural line and no spared areas.",
            "**Echocardiography** is the decisive test: preserved systolic function, a low E/e' and a non-plethoric inferior vena cava point to ARDS; impaired function, high filling pressures, a dilated IVC or a significant valve lesion point to a cardiac cause.",
            "**BNP or NT-proBNP:** BNP below 100 pg/mL (NT-proBNP below 300 pg/mL) argues strongly against acute heart failure and a value above 500 pg/mL supports it, but sepsis, renal impairment, atrial fibrillation and right ventricular strain blunt the discrimination in exactly this population.",
            "**Physiological confirmation, rarely performed:** an oedema fluid to plasma protein ratio above 0.75 indicates permeability oedema; below 0.65 indicates hydrostatic oedema. The Berlin definition no longer requires a wedge pressure of 18 mmHg or less.",
            "**Apply the Berlin criteria explicitly to this man:** onset within one week of a known insult (yes, pancreatitis on day three), bilateral opacities not explained by effusion or collapse, respiratory failure not fully explained by cardiac failure or fluid overload, and a PaO2/FiO2 ratio measured on a PEEP or CPAP of at least 5 cmH2O - or, if no blood gas is available, an SpO2/FiO2 ratio of 315 or less under the 2023 global definition.",
          ],
        },
        {
          heading: "Initial assessment and stabilisation before transfer",
          points: [
            "**Assess airway, breathing and circulation together with conscious level; count the respiratory rate, note accessory muscle use and the ability to speak in sentences, and record SpO2 with the FiO2 it was measured on** - the trend of that pair over the next hour is the single most useful piece of information for the receiving unit.",
            "**Give oxygen by non-rebreathing mask at 15 L/min targeting SpO2 88-95%; sit the patient up; and start high-flow nasal oxygen or CPAP if it is available and staff can monitor it continuously.** Track the ROX index (SpO2/FiO2 divided by respiratory rate) and escalate rather than persist if it is falling.",
            "**Obtain intravenous access and send blood for counts, glucose, creatinine, electrolytes, calcium, cultures and lactate where available; do an ECG; and, if sepsis is suspected, give broad-spectrum antibiotics within the first hour.** In pancreatitis, also correct calcium and look for a collection needing drainage.",
            "**Be deliberate about fluids: do not give a reflex bolus to a breathless hypoxic patient who is not hypotensive, because it worsens the permeability oedema; if the patient is shocked, give a measured 250-500 mL crystalloid challenge and reassess perfusion, and start a vasopressor early rather than continuing to fill.**",
            "**Decide about intubation on the trajectory, not on a single number:** exhaustion, a rising or normalising PaCO2 in a tachypnoeic patient, falling conscious level, or an FiO2 requirement climbing hour on hour all mean the patient needs a ventilator, and that decision should be made before the ambulance leaves rather than in it.",
            "**Arrange transfer actively:** an ambulance with an oxygen supply calculated for the journey and a trained escort, a telephone call to the receiving intensivist before departure, and a written handover with the timeline, the SpO2 and FiO2 trend, drugs and doses given, and the suspected cause. Counsel the family honestly that this is an intensive-care illness with a mortality of about a third to a half.",
          ],
        },
      ],
      mustDraw: [
        "A three-column table headed Feature / ARDS / Cardiogenic pulmonary oedema, with rows for history, JVP and heart sounds, chest radiograph, lung ultrasound, echocardiography, BNP and response to diuretic.",
        "A short flow chart of first-contact stabilisation: ABC and SpO2 with FiO2 recorded - oxygen 15 L/min targeting 88-95% - access, bloods, ECG, antibiotics if septic - avoid fluid boluses unless shocked - reassess trajectory - call the receiving unit and transfer with oxygen and an escort.",
      ],
      markSplit: [
        { part: "Differentiating features of ARDS and cardiogenic pulmonary oedema, clinical and investigative", marks: 3 },
        { part: "Initial assessment, oxygenation, fluid discipline and organised transfer", marks: 2 },
      ],
      keywords: [
        "non-cardiogenic pulmonary oedema",
        "BNP",
        "lung ultrasound",
        "B-lines",
        "echocardiography",
        "ROX index",
        "SpO2/FiO2",
        "transfer",
      ],
    },
  ],
  mcqs: [
    {
      id: "emergency-ards-q1",
      stem: "A 52-year-old woman admitted with severe acute pancreatitis becomes breathless on day 3. The chest radiograph shows bilateral peripheral opacities, the jugular venous pressure is normal and echocardiography shows good left ventricular function. An arterial blood gas on 50% oxygen with a PEEP of 8 cmH2O shows a PaO2 of 80 mmHg. Using the Berlin definition, how is she classified?",
      options: [
        "Does not meet the definition, because the PaO2 is above 60 mmHg",
        "Mild ARDS",
        "Moderate ARDS",
        "Severe ARDS",
        "Acute lung injury rather than ARDS",
      ],
      answer: 2,
      explanation:
        "PaO2/FiO2 is 80 divided by 0.50, which equals 160; this falls in the band above 100 and up to 200, which is moderate ARDS, and it is measured on a PEEP of 8 cmH2O, satisfying the requirement of at least 5. The absolute PaO2 is irrelevant to the classification - a PaO2 of 80 mmHg on 100% oxygen would be severe disease, which is exactly why the ratio, not the PaO2, is used. A ratio of 160 is below 200 so it is not mild. Severe requires a ratio of 100 or less, which would need a PaO2 of 50 mmHg at this FiO2. The term acute lung injury was abolished by the Berlin definition in 2012 and is not an available answer in any current classification; what used to be called ALI is now mild ARDS.",
      difficulty: "moderate",
    },
    {
      id: "emergency-ards-q2",
      stem: "Which one of the following is an indirect (extrapulmonary) cause of acute respiratory distress syndrome?",
      options: [
        "Aspiration of gastric contents",
        "Pulmonary contusion after blunt chest trauma",
        "Acute pancreatitis",
        "Inhalation of chlorine gas",
        "Near-drowning",
      ],
      answer: 2,
      explanation:
        "Acute pancreatitis injures the lung indirectly: the systemic inflammatory response, circulating cytokines and activated enzymes reach the pulmonary capillary endothelium through the bloodstream, and hypoxia on day 2-4 of severe pancreatitis is ARDS until proved otherwise. The other four are all direct (pulmonary) insults that reach the alveolar epithelium through the airway or by direct mechanical injury: aspiration delivers acid to the alveolus, contusion is direct mechanical injury to lung parenchyma, chlorine is an inhaled irritant, and near-drowning floods the alveoli and washes out surfactant. The grouping matters because direct ARDS is generally less recruitable and responds less well to high PEEP than indirect ARDS, and because examiners award the marks for the classification rather than for the length of the list.",
      difficulty: "easy",
    },
    {
      id: "emergency-ards-q3",
      stem: "A man 175 cm tall and weighing 95 kg is intubated for ARDS following aspiration pneumonia. What tidal volume should be set initially according to the ARDSNet lung-protective protocol?",
      options: [
        "About 285 mL",
        "About 420 mL",
        "About 570 mL",
        "About 760 mL",
        "About 950 mL",
      ],
      answer: 1,
      explanation:
        "Tidal volume is 6 mL/kg of predicted body weight, and predicted body weight for a man is 50 + 0.91 x (height in cm - 152.4) = 50 + 0.91 x 22.6 = about 70.6 kg, giving roughly 420 mL. Predicted body weight depends only on height and sex, because lung size does so; using the actual 95 kg would give about 570 mL, which is the classic error and delivers a 35% overdose of volume into a lung whose aerated compartment - the baby lung - is already small. 760 mL is about 11 mL/kg of predicted body weight, close to the 12 mL/kg control arm of the ARMA trial that increased mortality. 285 mL is 4 mL/kg of predicted body weight, which is the floor used only when the plateau pressure cannot be brought below 30 cmH2O at 6 mL/kg, not a starting value. 950 mL is 10 mL/kg of actual weight and is frankly injurious.",
      difficulty: "moderate",
    },
    {
      id: "emergency-ards-q4",
      stem: "A 40-year-old man with ARDS from H1N1 pneumonia has a PaO2/FiO2 ratio of 110 on FiO2 0.8 with PEEP 12 cmH2O, 18 hours after intubation, on 6 mL/kg predicted body weight. Which intervention has the strongest randomised evidence for reducing mortality in this situation?",
      options: [
        "Inhaled nitric oxide at 20 parts per million",
        "Prone positioning for at least 16 consecutive hours a day",
        "A stepwise recruitment manoeuvre with decremental PEEP titration",
        "High-frequency oscillatory ventilation",
        "Nebulised salbutamol to accelerate alveolar fluid clearance",
      ],
      answer: 1,
      explanation:
        "The PROSEVA trial (NEJM 2013) enrolled precisely this patient - PaO2/FiO2 below 150 on FiO2 of at least 0.6 with PEEP of at least 5 after a 12-24 hour stabilisation period - and proning for at least 16 consecutive hours a day reduced 28-day mortality from 32.8% to 16.0% and 90-day mortality from 41.0% to 23.6%. Inhaled nitric oxide improves oxygenation transiently but has never improved survival and is associated with renal impairment, so it is a bridge rather than a treatment. Aggressive stepwise recruitment with decremental PEEP titration increased mortality in the ART trial (JAMA 2017). High-frequency oscillatory ventilation increased mortality in OSCILLATE and was neutral in OSCAR, and is no longer recommended. Beta-agonists were neutral in ALTA and harmful in BALTI-2. The general lesson is that improving the number on the monitor is not the same as improving survival.",
      difficulty: "moderate",
    },
    {
      id: "emergency-ards-q5",
      stem: "A patient with ARDS is ventilated at 6 mL/kg predicted body weight with a PEEP of 12 cmH2O. An end-inspiratory hold shows a plateau pressure of 34 cmH2O and the pH is 7.31. What is the most appropriate next step?",
      options: [
        "Increase the PEEP to 16 cmH2O to recruit more lung",
        "Reduce the tidal volume in 1 mL/kg steps towards 4 mL/kg, increasing the respiratory rate as needed",
        "Increase the tidal volume to improve carbon dioxide clearance",
        "Increase the FiO2 to 1.0 and continue at the present settings",
        "Give a bolus of sodium bicarbonate and continue at the present settings",
      ],
      answer: 1,
      explanation:
        "A plateau pressure above 30 cmH2O means the lung is being overdistended, and the ARDSNet protocol responds by stepping the tidal volume down 1 mL/kg at a time to a floor of 4 mL/kg, raising the respiratory rate up to about 35 to protect the pH. Note that the driving pressure here is 34 minus 12, that is 22 cmH2O, well above the target of under 15, which reinforces the same action. Raising PEEP without reducing tidal volume raises the plateau further and worsens overdistension. Increasing the tidal volume is the exact opposite of lung protection and is what killed patients in the control arm of the ARMA trial. Raising FiO2 addresses oxygenation but does nothing about the injurious pressure, and a pH of 7.31 is entirely acceptable under permissive hypercapnia, which tolerates values down to about 7.20; bicarbonate is not used to permit an injurious tidal volume.",
      difficulty: "hard",
    },
    {
      id: "emergency-ards-q6",
      stem: "A 66-year-old man with a history of hypertension presents with breathlessness, bilateral crackles and bilateral chest radiograph shadowing after 4 days of fever and cough. Which single finding best supports ARDS rather than cardiogenic pulmonary oedema?",
      options: [
        "Bilateral opacities on the chest radiograph",
        "An SpO2 of 88% requiring supplemental oxygen",
        "Preserved left ventricular function with a low E/e' on echocardiography and an NT-proBNP of 180 pg/mL",
        "Bilateral basal crackles on auscultation",
        "Improvement in symptoms after sitting the patient upright",
      ],
      answer: 2,
      explanation:
        "The Berlin criterion is that the respiratory failure is not fully explained by cardiac failure or fluid overload, and objective assessment is specifically recommended where doubt exists. Preserved systolic function with a low E/e' indicates normal left atrial filling pressure, and an NT-proBNP of 180 pg/mL is below the 300 pg/mL rule-out threshold for acute heart failure - together these make a hydrostatic cause very unlikely, leaving a permeability oedema from the pneumonia. Bilateral opacities, hypoxaemia and basal crackles occur in both conditions and cannot discriminate; they are the features the two share, which is precisely why they are the wrong answer. Sitting upright helps breathlessness of almost any cause and is not discriminating; the diuretic and nitrate response, not the postural one, is the therapeutic test that carries information.",
      difficulty: "hard",
    },
    {
      id: "emergency-ards-q7",
      stem: "Which statement about the 2023 New Global Definition of ARDS is correct?",
      options: [
        "It reinstated the pulmonary artery occlusion pressure criterion of 18 mmHg or less",
        "It allows the diagnosis in non-intubated patients on high-flow nasal oxygen and accepts SpO2/FiO2 of 315 or less in place of PaO2/FiO2",
        "It requires computed tomography of the chest in every case",
        "It abolished the three severity categories in favour of a single diagnostic threshold",
        "It replaced the requirement for an identifiable risk factor with a mandatory bronchoalveolar lavage",
      ],
      answer: 1,
      explanation:
        "The 2023 global definition, published in 2024, was written to make the diagnosis possible outside well-resourced intensive care units: it recognises non-intubated ARDS in patients on high-flow nasal oxygen at a flow of at least 30 L/min or on CPAP or NIV with PEEP of at least 5 cmH2O, and it accepts SpO2/FiO2 of 315 or less - valid only when SpO2 is 97% or below - as an alternative oxygenation criterion, with the PEEP and flow requirements waived in resource-limited settings. The wedge pressure criterion belonged to the 1994 American-European Consensus Conference definition and was deliberately removed by Berlin in 2012; it was not reinstated. Imaging was widened, not narrowed - lung ultrasound performed by a trained operator is now acceptable alongside radiograph and CT. Severity bands were retained, with SpO2/FiO2 equivalents of 315, 235 and 148. No definition of ARDS has ever required bronchoalveolar lavage.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "emergency-ards-c1",
      front: "The four components of the Berlin definition of ARDS.",
      back: "1) Timing: within one week of a known insult or new/worsening respiratory symptoms. 2) Imaging: bilateral opacities not fully explained by effusion, collapse or nodules. 3) Origin of oedema: not fully explained by cardiac failure or fluid overload (objective assessment such as echocardiography if no risk factor). 4) Oxygenation: PaO2/FiO2 graded, measured on PEEP or CPAP of at least 5 cmH2O.",
    },
    {
      id: "emergency-ards-c2",
      front: "Berlin severity bands and their mortality.",
      back: "Mild: PaO2/FiO2 more than 200 and up to 300, mortality about 27-35%. Moderate: more than 100 and up to 200, about 32-40%. Severe: 100 or less, about 45-46%. PaO2 in mmHg, FiO2 as a fraction - PaO2 60 on FiO2 0.6 = 100 = severe.",
    },
    {
      id: "emergency-ards-c3",
      front: "What did the 2023 New Global Definition add to Berlin?",
      back: "Non-intubated ARDS on high-flow nasal oxygen at 30 L/min or more, or CPAP/NIV with PEEP of at least 5 cmH2O; SpO2/FiO2 of 315 or less (only valid when SpO2 is 97% or below) as an alternative to PaO2/FiO2; lung ultrasound as acceptable imaging; and PEEP/flow requirements waived in resource-limited settings. Berlin remains the reference standard in trials and textbooks.",
    },
    {
      id: "emergency-ards-c4",
      front: "Associated disorders of ARDS: direct versus indirect.",
      back: "Direct (pulmonary): pneumonia, aspiration, inhalation injury, near-drowning, pulmonary contusion, fat embolism, reperfusion after transplant. Indirect (extrapulmonary): sepsis (commonest overall, about 40%), severe trauma, massive transfusion, acute pancreatitis, burns, drug overdose, TRALI, eclampsia, cardiopulmonary bypass. In India add malaria, dengue, leptospirosis, scrub typhus, organophosphate poisoning.",
    },
    {
      id: "emergency-ards-c5",
      front: "Histology and the three phases of ARDS.",
      back: "Histology is diffuse alveolar damage. Exudative phase day 0-7: oedema, hyaline membranes, neutrophils, type I pneumocyte loss. Proliferative phase day 7-21: type II pneumocyte and fibroblast proliferation, organisation of exudate, compliance recovering. Fibrotic phase from about day 10-14 in a minority: collagen deposition, cysts, honeycombing, high dead space.",
    },
    {
      id: "emergency-ards-c6",
      front: "One line each: ARDS versus cardiogenic pulmonary oedema.",
      back: "ARDS - permeability oedema, precipitant present, JVP normal, no third heart sound, peripheral patchy opacities with normal heart size, irregular pleural line with spared areas on ultrasound, BNP low, normal echo, poor response to diuresis, oedema/plasma protein ratio above 0.75. Cardiogenic - hydrostatic oedema, cardiac history, raised JVP, third heart sound, perihilar bat's wing with cardiomegaly and Kerley B lines, homogeneous B-lines, BNP high, abnormal echo, brisk response to diuresis, ratio below 0.65.",
    },
    {
      id: "emergency-ards-c7",
      front: "The ARDSNet lung-protective numbers.",
      back: "Tidal volume 6 mL/kg predicted body weight (range 4-8); plateau pressure 30 cmH2O or less on an end-inspiratory hold; driving pressure (plateau minus PEEP) under 15 cmH2O; respiratory rate up to 35 with permissive hypercapnia to a pH of about 7.20; PEEP from a PEEP-FiO2 table; oxygenation target PaO2 55-80 mmHg or SpO2 88-95%. The rationale is the baby lung - the aerated compartment is the size of a young child's lung.",
    },
    {
      id: "emergency-ards-c8",
      front: "How is predicted body weight calculated, and why?",
      back: "Men: 50 + 0.91 x (height in cm - 152.4). Women: 45.5 + 0.91 x (height in cm - 152.4). Lung size tracks height and sex, not fat mass, so using actual weight in an obese patient delivers a large overdose of tidal volume. A 95 kg man of 175 cm has a predicted body weight of about 70 kg and gets about 420 mL, not 570 mL.",
    },
    {
      id: "emergency-ards-c9",
      front: "Prone positioning: indication, dose and evidence.",
      back: "PROSEVA (NEJM 2013): PaO2/FiO2 below 150 on FiO2 of 0.6 or more with PEEP of at least 5, after 12-24 hours of stabilisation; prone for at least 16 consecutive hours a day. 28-day mortality 16.0% versus 32.8%, 90-day mortality 23.6% versus 41.0%. Needs 3-5 trained staff, eye and pressure-point care and secure tubes; the feared complication is unplanned extubation.",
    },
    {
      id: "emergency-ards-c10",
      front: "Fluids and neuromuscular blockade in ARDS.",
      back: "Conservative fluid strategy once shock has resolved (FACTT 2006): no mortality difference but about 2.5 more ventilator-free days - aim neutral to negative balance while maintaining perfusion. Neuromuscular blockade with cisatracurium for 48 hours helped in ACURASYS (2010) but was neutral against light sedation in ROSE (2019), so it is not routine - reserve it for severe dyssynchrony, unacceptable plateau pressure, or to enable proning.",
    },
    {
      id: "emergency-ards-c11",
      front: "Corticosteroids in ARDS: what is and is not established.",
      back: "Supportive: DEXA-ARDS (2020) dexamethasone 20 mg daily for 5 days then 10 mg daily for 5 days in moderate-to-severe ARDS reduced 60-day mortality (21% versus 36%); dexamethasone 6 mg for 10 days is established for COVID-19 needing oxygen. Against: ARDSNet LaSRS showed harm when started after 14 days; steroids are avoided in influenza and in undrained infection; guideline recommendations remain conditional. State both sides rather than asserting steroids are standard.",
    },
    {
      id: "emergency-ards-c12",
      front: "Long-term outcome of ARDS survivors and the family physician's job.",
      back: "Spirometry is usually near normal by 6-12 months with a reduced DLCO; the real disability is extrapulmonary - ICU-acquired weakness (6-minute walk about 76% of predicted at 5 years, only half back at work at 1 year), cognitive impairment in about a third, depression about 30%, anxiety up to 40%, PTSD 20-25% - the post-intensive care syndrome. Primary care: medication reconciliation, nutrition and weight, pulmonary rehabilitation, PHQ-9 and GAD-7 screening, spirometry with DLCO at 3-6 months if breathless, vaccination, carer support, and referral back for persistent hypoxaemia or progressive fibrosis.",
    },
  ],
  references: [
    "ARDS Definition Task Force (Ranieri VM, Rubenfeld GD, Thompson BT, et al). Acute Respiratory Distress Syndrome: The Berlin Definition. JAMA 2012;307(23):2526-2533",
    "Matthay MA, Arabi Y, Arroliga AC, et al. A New Global Definition of Acute Respiratory Distress Syndrome. American Journal of Respiratory and Critical Care Medicine 2024;209(1):37-47 - the 2023 consensus conference definition",
    "The Acute Respiratory Distress Syndrome Network. Ventilation with Lower Tidal Volumes as Compared with Traditional Tidal Volumes for Acute Lung Injury and the Acute Respiratory Distress Syndrome. New England Journal of Medicine 2000;342(18):1301-1308 - the ARDSNet ARMA trial",
    "Guerin C, Reignier J, Richard JC, et al. Prone Positioning in Severe Acute Respiratory Distress Syndrome. New England Journal of Medicine 2013;368(23):2159-2168 - the PROSEVA trial",
    "Harrison's Principles of Internal Medicine, 21st edition, 2022 - chapter on the acute respiratory distress syndrome",
  ],
});
const cases: ClinicalCase[] = [
  {
    id: "emergency-case-1",
    title: "Organophosphate poisoning: a farmer carried into the clinic after drinking pesticide",
    kind: "long",
    subjectId: "emergency",
    opening:
      "A 30-year-old farmer from a village 35 km from the district hospital is carried into the clinic by his brothers at 7 in the evening, drowsy, drenched in sweat and vomit, with froth at the mouth and noisy wet breathing, about 45 minutes after he was found beside an empty 100 mL bottle of chlorpyrifos 20% EC in the field, following a quarrel at home over a crop loan.",
    minutes: 30,
    frequency: "core",
    sections: [
      {
        heading: "How to open a resuscitation long case",
        points: [
          "Open with the identifying data, the poison and the clock in one breath, because in a poisoning case the examiner wants the compound and the time before anything else: 'Mr X, a 30-year-old farmer, brought 45 minutes after ingesting an estimated 100 mL of chlorpyrifos 20% emulsifiable concentrate, drowsy, with a florid cholinergic toxidrome.'",
          "State at once that this is a resuscitation case and that the history was taken from the relatives while treatment had already started, because the examiner marks the sequence of actions, and a candidate who describes twenty minutes of history-taking before the first dose of atropine has failed the case.",
          "Give the findings in the order the drugs were needed: the wet chest and the vomiting first, because they were treated with atropine, then the level of consciousness and the breathing effort, because they decided the airway plan.",
          "Name the grade and the diagnosis in the same sentence: this is severe organophosphate poisoning, Peradeniya score 8 of 11, needing atropine now, an airway plan and transfer to a ventilator bed.",
          "Close the opening by declaring what the clinic did and when: first atropine at minute 3 after arrival, atropinised by minute 20 on a cumulative 18 mg, pralidoxime loaded at minute 25, and the ambulance called at minute 5.",
        ],
      },
      {
        heading: "History from the relatives while treatment runs",
        points: [
          "Ask the brothers for the bottle and read the label yourself: the active ingredient (chlorpyrifos, a diethyl organophosphate of WHO class II), the concentration (20% EC is 200 mg/mL, so 100 mL holds 20 g), and the solvent, since the aromatic hydrocarbon in the formulation explains the kerosene-like smell and the risk of chemical pneumonitis if he aspirates.",
          "Fix the timeline: when he was last seen well, when he was found, whether he vomited in the field or on the way, and what was done before arrival, because a village practitioner may already have given atropine or made him drink salt water to induce vomiting.",
          "Estimate the amount from the bottle and the family in mouthfuls (one mouthful is about 20-30 mL), knowing that the family's estimate is unreliable and that any deliberate ingestion of a class II organophosphate is treated as potentially fatal.",
          "Take the intent history with the family present but without judgement: the quarrel, the crop loan, previous attempts, alcohol taken with the poison (common, and it worsens aspiration), and what he said before he drank it; this is needed for the medico-legal record and the psychiatric referral, not for a lecture.",
          "Past history changes the drugs you are about to give: asthma or chronic lung disease (bronchorrhoea is worse), heart disease (atropine tachycardia and pralidoxime hypertension), epilepsy, kidney disease (pralidoxime is renally cleared), and whether he sprays pesticide for a living, which lowers his baseline cholinesterase.",
          "Ask about co-ingestants that change the picture: a pyrethroid or carbamate mixed in the same bottle, paracetamol, sleeping tablets missing from the house, and country liquor.",
        ],
      },
      {
        heading: "Examination: reading the toxidrome and grading it",
        points: [
          "The muscarinic picture fills the room: profuse salivation, lacrimation, sweating, vomiting, diarrhoea and urinary incontinence, pinpoint pupils, a pulse of 48 per minute, and a chest full of coarse crackles and wheeze from bronchorrhoea and bronchospasm; remember it as DUMBELS (diarrhoea, urination, miosis, bradycardia with bronchorrhoea and bronchospasm, emesis, lacrimation, salivation and sweating).",
          "The nicotinic picture is the one that kills quietly: fasciculations over the chest, thighs and tongue, and weakness of the neck flexors and limbs from depolarising block at the neuromuscular junction, progressing to paralysis of the respiratory muscles; tachycardia, hypertension and even dilated pupils appear when nicotinic effects dominate, so a fast pulse or a normal pupil does not exclude poisoning.",
          "The central picture is drowsiness, agitation or confusion, a GCS recorded as its three components, seizures and central respiratory depression; a GCS below 8, a respiratory rate below 8 or above 30, or an SpO2 below 90% on oxygen means the airway is the next problem.",
          "Grade severity with the Peradeniya Organophosphorus Poisoning scale, which scores pupil size, respiratory rate, heart rate, fasciculations, level of consciousness and seizures from 0 to 11 (0-3 mild, 4-7 moderate, 8-11 severe): this patient, with pinpoint pupils (2), a respiratory rate of 28 with central cyanosis (2), a heart rate of 48 (1), generalised fasciculations (2), impaired response to command (1) and no seizure (0), scores 8 and is severe.",
          "Examine the skin and clothes for pesticide, the mouth for the smell and for chemical burns, the chest for aspiration and the abdomen for the tenderness of pancreatitis, and record the temperature, because a rising temperature with dry skin later is atropine toxicity rather than infection.",
          "Present the examination as timed observations rather than a snapshot - pulse, blood pressure, respiratory rate, SpO2, pupils, chest sounds and GCS every 5 minutes for the first hour - because the examiner will ask what changed with each dose of atropine.",
        ],
      },
      {
        heading: "Atropine: the loading, the end-points and the infusion",
        points: [
          "Atropine is the most urgent action in the clinic and is given before the oxygen is connected, before the line is dressed and before any decontamination; the Indian ampoule is 0.6 mg in 1 mL, so the starting adult dose of 1.2 mg is two ampoules intravenously (intramuscularly for the first dose if the line is not yet in).",
          "Use the doubling regimen from the Sri Lankan and Bangladeshi trials: 1.2 mg IV, and if the chest has not cleared after 5 minutes give 2.4 mg, then 4.8 mg, then 9.6 mg, then 19.2 mg at 5-minute intervals until the end-points are reached; most patients are atropinised within 20-30 minutes on a cumulative 10-40 mg, and a few need more than 100 mg in the first day.",
          "In a child the starting dose is 0.02 mg/kg IV (0.05 mg/kg if the child is already in respiratory distress), doubled every 5 minutes on the same end-points; in an adult the same doubling applies whatever the weight, because the dose is titrated to the chest and not to the kilogram.",
          "The end-points of atropinisation are a chest clear of crackles and wheeze on auscultation, a heart rate above 80 per minute, a systolic blood pressure above 80 mmHg, dry axillae and pupils that are no longer pinpoint; the chest and the heart rate are the ones that matter, and because the pupils dilate late and stay dilated, a candidate who titrates atropine to pupil size will overdose the patient.",
          "Once atropinised, start an infusion at 10-20% of the total loading dose per hour - here 18 mg were needed, so 1.8-3.6 mg per hour, prepared as 30 mg (50 ampoules) in 500 mL of 0.9% saline at 30-60 mL per hour - and review every 15 minutes in the first hour and hourly after that for returning secretions (too little) or for delirium, a heart rate above 120, absent bowel sounds, urinary retention and hyperthermia (too much).",
          "If atropine toxicity appears, stop the infusion, wait 30-60 minutes for the signs to fade, and restart at 70-80% of the previous rate; where no pump or drip counter exists, 20% of the loading dose as an intravenous bolus every hour is the acceptable substitute, and the clinic must hold at least 50 ampoules to do any of this.",
        ],
      },
      {
        heading: "Airway, breathing, decontamination and pralidoxime",
        points: [
          "Suction the mouth and pharynx repeatedly, keep him in the left lateral position with the head down until atropine has dried the secretions, and give oxygen 15 L/min by a mask with a reservoir bag; atropine, not suction, is what finally clears the airway.",
          "Ventilate with a bag-valve-mask the moment the respiratory rate falls, the chest movement weakens or the SpO2 stays below 90% on oxygen, and intubate if a doctor able to do it is present: induce with ketamine 1-2 mg/kg IV (the same in a child) and paralyse with rocuronium 1.2 mg/kg IV, never suxamethonium, which is broken down by the same plasma cholinesterase and will paralyse him for hours.",
          "Decontaminate without contaminating yourself: gloves, apron and eye protection for everyone, remove and bag his clothes, wash the skin and hair with soap and water, and take the vomit-soaked cloth out of the room; two staff members feeling faint from the fumes is a familiar clinic story.",
          "Gastric lavage is not routine: it is considered only within one hour of a large ingestion, only with the airway protected by a cuffed tube or a fully conscious cooperative patient, and only after atropinisation, in aliquots of 200-300 mL of water; activated charcoal (50 g in an adult, 1 g/kg in a child) showed no benefit in organophosphate poisoning in the largest trial, and emesis is never induced.",
          "Pralidoxime reactivates the phosphorylated enzyme before it ages, so it is given as early as possible and only after atropine has begun: pralidoxime chloride 30 mg/kg (2 g for a 65 kg adult) IV in 100 mL of 0.9% saline over 20-30 minutes, then 8 mg/kg per hour (about 500 mg per hour) by infusion until atropine has not been needed for 12-24 hours; a child receives the same 30 mg/kg (maximum 2 g) over 30 minutes and then 8 mg/kg per hour, and where an infusion is impossible the adult alternative is 1 g IV over 30 minutes every 4-6 hours.",
          "Rapid injection of pralidoxime causes vomiting, hypertension, laryngospasm and cardiac arrest, so it is never pushed; check the vial, because Indian preparations exist as both the chloride and the iodide salt, and 1 g of the iodide carries only about two-thirds as much active oxime as 1 g of the chloride.",
        ],
      },
      {
        heading: "Transfer, the complications to expect and the aftercare",
        points: [
          "Every symptomatic organophosphate ingestion goes to a hospital with a ventilator, because respiratory failure can occur at any time in the first 96 hours; phone the receiving casualty officer yourself, name the compound, the doses given and the current atropine rate, and pass on the number of the National Poisons Information Centre at AIIMS, New Delhi (toll-free 1800 116 117) if the receiving team is unsure.",
          "Transfer with the atropine infusion running, at least 30 spare ampoules, oxygen, suction, a bag-valve-mask and an escort who can bag the patient; the commonest death on the road is a patient sent 'stable' after a single 0.6 mg dose of atropine with no one watching the chest.",
          "Warn the receiving team and the family about the intermediate syndrome, which appears 24-96 hours after ingestion in 10-40% of moderate and severe cases, more often after dimethyl compounds and inadequate oxime therapy: weakness of neck flexion so that the patient cannot lift his head off the pillow, proximal limb and cranial nerve weakness and then respiratory muscle failure, lasting 1-3 weeks and treated with ventilation alone.",
          "The late complication is organophosphate-induced delayed polyneuropathy, a distal motor neuropathy with foot drop 2-3 weeks after exposure, described after chlorpyrifos among others, with no specific treatment; the family physician is the one who notices it at follow-up.",
          "Register the case as a medico-legal case, intimate the police, preserve the bottle, the vomitus and the first gastric aspirate in sealed labelled containers for forensic analysis, and record everything with times; under Section 115 of the Mental Healthcare Act 2017 a person who attempts suicide is presumed to be under severe stress and is to be treated and rehabilitated, not prosecuted.",
          "Before discharge from hospital and again at the first clinic visit, assess suicide risk, refer to psychiatry, treat alcohol dependence, and counsel the family on locking pesticides away; Sri Lanka's bans on its most toxic pesticides cut its suicide rate by about 70% between 1995 and 2015, and India has banned methyl parathion, phorate, dichlorvos and triazophos and restricts monocrotophos for the same reason.",
        ],
      },
    ],
    summaryStatement:
      "This is a 30-year-old farmer, brought 45 minutes after the deliberate ingestion of an estimated 100 mL of chlorpyrifos 20% EC following a domestic quarrel, who presented drowsy with a florid cholinergic toxidrome - salivation, sweating, vomiting, pinpoint pupils, a pulse of 48 per minute, generalised fasciculations, a chest full of crackles and wheeze and an SpO2 of 86% on air - a Peradeniya score of 8 out of 11, which is severe organophosphate poisoning; he was atropinised within 20 minutes on a cumulative 18 mg of atropine, loaded with 2 g of pralidoxime, ventilated by bag and mask while the secretions cleared, and transferred with an atropine infusion running to a centre with a ventilator, where the intermediate syndrome, the psychiatric assessment and the medico-legal formalities remain to be addressed.",
    differential: [
      {
        diagnosis: "Carbamate poisoning (carbofuran, methomyl, carbaryl, propoxur)",
        forIt:
          "An identical muscarinic and nicotinic picture, and carbofuran and methomyl are sold in the same shops and kept in the same shed; the label is the only reliable way to tell them apart.",
        againstIt:
          "The bottle says chlorpyrifos, and carbamate poisoning is usually milder, resolves within 24-48 hours because carbamylation of the enzyme is spontaneously reversible, and penetrates the brain less; the practical difference is that atropine is given identically, pralidoxime is unnecessary, and the intermediate syndrome is rare.",
      },
      {
        diagnosis: "Aluminium phosphide (Celphos) poisoning",
        forIt:
          "Also a farmer's poison from the same shops, with vomiting, a garlic-like odour and collapse within an hour of ingestion.",
        againstIt:
          "It causes refractory hypotension, severe metabolic acidosis and arrhythmias without miosis, bronchorrhoea or fasciculations, atropine does nothing for it and there is no antidote; the wet chest and pinpoint pupils here exclude it.",
      },
      {
        diagnosis: "Yellow oleander (Cascabela thevetia) seed poisoning",
        forIt:
          "A common self-harm agent in rural South India and Sri Lanka, producing vomiting, bradycardia and drowsiness within hours.",
        againstIt:
          "Cardiac glycoside poisoning gives heart block and hyperkalaemia with dry skin, normal pupils and no secretions or fasciculations; atropine treats only the bradycardia, and the definitive treatment is digoxin-specific antibody fragments.",
      },
      {
        diagnosis: "Opioid overdose or a pontine lesion",
        forIt:
          "Pinpoint pupils with a depressed level of consciousness and slow breathing are shared with opioid poisoning and with a pontine haemorrhage.",
        againstIt:
          "Neither produces sweating, bronchorrhoea, bradycardia with wet lungs or fasciculations, naloxone changes nothing, and a pontine stroke at 30 without hypertension beside an empty pesticide bottle is not the diagnosis.",
      },
    ],
    investigations: [
      {
        test: "Continuous SpO2 monitoring, and an arterial blood gas where available",
        why: "Hypoxaemia from bronchorrhoea, bronchospasm and muscle weakness is what kills; the gas separates the hypoxaemia that atropine will fix from the hypoventilation that needs a tube.",
        expected: "SpO2 below 90% on air at arrival; a PaCO2 above 50 mmHg or a rising lactate means ventilatory failure and the need for intubation.",
      },
      {
        test: "Capillary blood glucose",
        why: "Every patient with altered consciousness has a glucose checked; organophosphates cause hyperglycaemia in adults and hypoglycaemia in children.",
        expected: "Often 150-250 mg/dL from catecholamine release; below 70 mg/dL is treated with 100 mL of 25% dextrose in an adult and 2 mL/kg of 10% dextrose in a child.",
      },
      {
        test: "12-lead ECG and continuous cardiac monitoring",
        why: "Cholinergic bradycardia, conduction block and QT prolongation predict torsades and sudden death, and atropine and pralidoxime both act on the rhythm.",
        expected: "Sinus bradycardia, a QTc above 450 ms in about a third of patients, ST-T changes and occasionally complete heart block; QT prolongation correlates with mortality.",
      },
      {
        test: "Plasma butyrylcholinesterase (pseudocholinesterase) and, where available, red cell acetylcholinesterase",
        why: "Confirms exposure when the history is doubtful or the patient is found unconscious, and the red cell enzyme tracks the effect of the oxime; it is never needed before treatment and is not available in the clinic.",
        expected: "Plasma enzyme below 50% of the laboratory's lower limit confirms poisoning and below 10% suggests severe poisoning, but the level correlates poorly with the clinical grade; red cell enzyme rises with effective oxime therapy.",
      },
      {
        test: "Chest X-ray after stabilisation",
        why: "Aspiration of vomit and hydrocarbon solvent, pulmonary oedema from bronchorrhoea, and tube position after intubation.",
        expected: "Bilateral patchy infiltrates or right lower lobe consolidation of aspiration in 10-20%; a normal early film does not exclude later chemical pneumonitis.",
      },
      {
        test: "Serum electrolytes, urea and creatinine, and serum amylase",
        why: "Hypokalaemia and hypomagnesaemia from vomiting and secretions worsen arrhythmias, pralidoxime is renally excreted, and pancreatitis complicates about 10% of moderate to severe cases.",
        expected: "Potassium often 2.8-3.5 mmol/L; amylase raised threefold or more when there is epigastric pain; creatinine normal unless there has been prolonged hypotension.",
      },
      {
        test: "Forensic samples: the bottle, 50 mL of the first gastric aspirate or vomitus, 10 mL of blood and the stained clothes, sealed and labelled",
        why: "Poisoning is a medico-legal case and the compound identified by the forensic laboratory is what the court and the insurer rely on.",
        expected: "Chlorpyrifos confirmed and a co-ingested carbamate or pyrethroid excluded; the chain of custody is recorded in the case sheet.",
      },
    ],
    management: [
      {
        heading: "The first fifteen minutes in the clinic",
        points: [
          "**Call the diagnosis aloud, put on gloves, and give atropine 1.2 mg IV (two 0.6 mg ampoules) within 3 minutes of arrival - before oxygen, before decontamination and before the history is complete; child 0.02-0.05 mg/kg IV.**",
          "Left lateral position with the head down, repeated pharyngeal suction, oxygen 15 L/min through a reservoir mask, and a bag-valve-mask at the head end with one person assigned to breathing alone.",
          "Two intravenous lines; 500 mL of 0.9% saline over 15-20 minutes if the systolic BP is below 90 mmHg (child 10-20 mL/kg), because hypotension in severe poisoning is a marker of death.",
          "One person owns the clock and the record: the time of each atropine dose, pulse, chest findings and SpO2 every 5 minutes, the time of pralidoxime, and the time the ambulance was called.",
          "Call the ambulance (108) at minute 5, not after stabilisation, and phone the receiving hospital so that a ventilator bed is kept.",
        ],
      },
      {
        heading: "Atropine: loading, end-points, infusion and toxicity",
        points: [
          "**Doubling regimen: 1.2 mg, 2.4 mg, 4.8 mg, 9.6 mg, 19.2 mg IV at 5-minute intervals until the chest is clear, the heart rate is above 80/min, the systolic BP is above 80 mmHg and the axillae are dry; pupil size is not an end-point.**",
          "Total the loading dose and infuse 10-20% of it per hour (here 1.8-3.6 mg/h, as 30 mg in 500 mL of 0.9% saline at 30-60 mL/h); without a pump, give 20% of the loading dose as an IV bolus every hour.",
          "Review every 15 minutes for the first hour and hourly thereafter; returning crackles, sweating or bradycardia mean a repeat bolus and a higher rate.",
          "**Atropine toxicity - delirium, heart rate above 120/min, absent bowel sounds, urinary retention, hot dry skin and fever - means stop the infusion for 30-60 minutes and restart at 70-80% of the rate**; the confused patient on day 2 is usually over-atropinised, not septic.",
          "Atropine is usually needed for 2-5 days after a diethyl compound such as chlorpyrifos and is weaned against the same end-points; secretions that return mean the wean was too fast.",
        ],
      },
      {
        heading: "Pralidoxime, decontamination and adjuncts",
        points: [
          "**Pralidoxime chloride 30 mg/kg (2 g in an adult) IV over 20-30 minutes once atropine has started, then 8 mg/kg/h (about 500 mg/h) until atropine has not been needed for 12-24 hours; child 30 mg/kg (maximum 2 g) then 8 mg/kg/h; never as a rapid bolus.**",
          "Give it early: dimethyl compounds (dimethoate, monocrotophos, methyl parathion, malathion) age the enzyme with a half-life of about 4 hours and diethyl compounds (chlorpyrifos, quinalphos, diazinon) in about 30 hours, so the window is hours for the first group and about a day for the second; it is not needed for carbamates.",
          "Remove the clothes and wash the skin with soap and water; gastric lavage only within 1 hour of a large ingestion with a protected airway and after atropinisation; no charcoal, no ipecac, no salt water.",
          "**Diazepam 5-10 mg IV (child 0.1-0.3 mg/kg, maximum 10 mg) for seizures or severe agitation**; no aminophylline, and no drug hydrolysed by plasma cholinesterase.",
          "Check the vial (chloride versus iodide), reduce the pralidoxime dose in renal failure, and expect transient hypertension, dizziness and blurred vision as side effects.",
        ],
      },
      {
        heading: "Airway, ventilation and the transfer",
        points: [
          "**Bag and then intubate for a GCS below 8, a respiratory rate below 8 or above 30 with fatigue, an SpO2 below 90% on 15 L/min oxygen, or a weak cough with copious secretions despite atropine.**",
          "Induction: ketamine 1-2 mg/kg IV with rocuronium 1.2 mg/kg IV (a larger dose may be needed); **suxamethonium is contraindicated** because its hydrolysis by plasma cholinesterase is blocked.",
          "Ventilate with 100% oxygen initially and then target SpO2 94-98%; mechanical ventilation may be needed for days to weeks if the intermediate syndrome develops.",
          "Transfer with the infusion running, 30 spare ampoules of atropine, oxygen, suction, a bag-valve-mask and a trained escort; hand over the compound, the time of ingestion, the cumulative atropine dose, the infusion rate and the pralidoxime given.",
        ],
      },
      {
        heading: "After the acute phase: complications, psychiatry, law and prevention",
        points: [
          "Watch daily for the **intermediate syndrome (24-96 hours: neck flexion weakness, proximal weakness, cranial nerve palsies, respiratory failure)** and at 2-3 weeks for **delayed polyneuropathy (foot drop)**.",
          "Medico-legal case registration, police intimation, preserved samples and a contemporaneous record with times; consent for treatment is implied in the emergency.",
          "Psychiatric assessment before discharge, treatment of depression and alcohol dependence, means restriction at home (locked storage, buying only what the season needs) and a clinic review within a week; Section 115 of the Mental Healthcare Act 2017 protects him from prosecution.",
          "Report the case for district pesticide-poisoning surveillance and use it for a community conversation on safe storage and on protective equipment during spraying.",
        ],
      },
    ],
    viva: [
      {
        q: "What are the end-points of atropinisation, and why is pupil size not one of them?",
        a: "A chest clear of crackles and wheeze, a heart rate above 80 per minute, a systolic blood pressure above 80 mmHg, dry axillae and pupils that are no longer pinpoint. The chest is the end-point that matters because bronchorrhoea is what kills; the pupils dilate late, can stay pinpoint for hours after the chest has cleared and stay dilated for days after atropine is stopped, so titrating to the pupil produces atropine toxicity.",
      },
      {
        q: "Why is suxamethonium avoided for intubation, and what do you use instead?",
        a: "Suxamethonium is hydrolysed by plasma butyrylcholinesterase, which the organophosphate has inhibited, so a single dose can paralyse the patient for hours. Use a non-depolarising agent such as rocuronium 1.2 mg/kg after ketamine 1-2 mg/kg; a larger dose of the non-depolariser may be needed because the excess acetylcholine competes with it at the receptor.",
      },
      {
        q: "What is the intermediate syndrome?",
        a: "A syndrome of weakness beginning 24-96 hours after exposure, after the cholinergic crisis has been controlled: weakness of neck flexion so that the patient cannot lift the head off the pillow, of the proximal limb muscles, of the muscles supplied by the motor cranial nerves and of the respiratory muscles, with depressed tendon reflexes. It affects 10-40% of moderate to severe cases, is commoner with dimethyl compounds and inadequate oxime treatment, does not respond to atropine or more pralidoxime, and needs ventilation for 1-3 weeks; missing it means a patient is discharged on day 2 and dies at home on day 3.",
      },
      {
        q: "How do organophosphates and carbamates differ in management?",
        a: "Both inhibit acetylcholinesterase and produce the same toxidrome, and atropine is given identically. Carbamylation is reversible within about 24 hours, so carbamate poisoning is shorter and pralidoxime is unnecessary; if the compound is unknown, treat as an organophosphate and give pralidoxime, because the old belief that oximes worsen carbaryl poisoning has not held up in clinical practice.",
      },
      {
        q: "What is the evidence for pralidoxime?",
        a: "Conflicting. Pawar's Indian trial in 2006 found that a high-dose regimen (2 g then 1 g per hour for 48 hours) reduced ventilation and mortality compared with intermittent 1 g boluses; Eddleston's Sri Lankan trial in 2009 (2 g then 0.5 g per hour) found no benefit and a trend to harm, and the Cochrane review of 2011 could not recommend for or against. The WHO still recommends 30 mg/kg then 8 mg/kg per hour, given early and slowly, because the drug is logical, the enzyme ages quickly with dimethyl compounds, and the trials differed in compounds, timing and severity.",
      },
      {
        q: "What is aging, and why does it decide the timing of the oxime?",
        a: "Aging is the loss of an alkyl group from the phosphorylated enzyme, after which the bond is permanent and no oxime can reactivate it. Dimethyl compounds (dimethoate, monocrotophos, methyl parathion, malathion) age with a half-life of about 4 hours and diethyl compounds (chlorpyrifos, quinalphos, diazinon, parathion) in about 30 hours, so pralidoxime must be started within hours for the first group and remains useful for a day or more for the second.",
      },
      {
        q: "What is the place of gastric lavage and activated charcoal?",
        a: "Neither has shown benefit in organophosphate poisoning. Lavage is considered only within one hour of a large ingestion, with the airway protected and after atropinisation, in small aliquots, and is never forced on a struggling patient or done before atropine. The largest trial of multiple-dose activated charcoal (Eddleston, Lancet 2008, more than 4,600 patients) showed no reduction in mortality, and induced emesis is harmful.",
      },
      {
        q: "What are your legal and psychiatric obligations?",
        a: "Treat first; consent is implied in an emergency. Register a medico-legal case and intimate the police, preserve the bottle, vomitus, gastric aspirate and clothes with a chain of custody, and record everything with times. Under Section 115 of the Mental Healthcare Act 2017 a person who attempts suicide is presumed to be under severe stress and is not to be prosecuted, and the government has a duty to provide care; arrange a psychiatric assessment before discharge, treat depression and alcohol use, counsel the family on locked storage, and follow him up in the clinic.",
      },
    ],
    pitfalls: [
      "Timid atropine - 0.6 mg every 10-15 minutes - is the commonest cause of death in the first hour; the dose is doubled every 5 minutes until the chest is dry.",
      "Waiting for oxygen, a line, a cholinesterase result or the ambulance before the first dose of atropine.",
      "Titrating atropine to pupil size or heart rate alone, producing a delirious, hyperthermic patient with an ileus who is then treated for sepsis.",
      "Pralidoxime pushed as a rapid bolus, given before atropine, or omitted because the clinic does not stock it and no one asked the receiving hospital to give it on arrival.",
      "Suxamethonium for intubation, and gastric lavage forced on an unprotected airway.",
      "Discharging a patient who looks well on day 2, before the window of the intermediate syndrome has closed, and sending him home without a psychiatric assessment or a word about locking the pesticide away.",
    ],
    references: [
      "Eddleston M, Buckley NA, Eyer P, Dawson AH. Management of acute organophosphorus pesticide poisoning, Lancet 2008;371:597-607",
      "World Health Organization. Clinical management of acute pesticide intoxication: prevention of suicidal behaviours, 2008",
      "Abedin MJ et al. Open-label randomized clinical trial of atropine bolus injection versus incremental boluses plus infusion for organophosphate poisoning in Bangladesh, Journal of Medical Toxicology 2012",
      "Pawar KS et al. Continuous pralidoxime infusion versus repeated bolus injection to treat organophosphorus pesticide poisoning: a randomised controlled trial, Lancet 2006",
      "Eddleston M et al. Pralidoxime in acute organophosphorus insecticide poisoning: a randomised controlled trial, PLoS Medicine 2009",
      "Buckley NA, Eddleston M, Li Y, Bevan M, Robertson J. Oximes for acute organophosphate pesticide poisoning, Cochrane Database of Systematic Reviews 2011",
      "Eddleston M et al. Multiple-dose activated charcoal in acute self-poisoning: a randomised controlled trial, Lancet 2008",
      "Senanayake N, de Silva HJ, Karalliedde L. A scale to assess severity in organophosphorus intoxication: POP scale, Human and Experimental Toxicology 1993",
      "Mental Healthcare Act 2017, Government of India - Section 115",
      "Pillay VV. Modern Medical Toxicology, 4th edition, Jaypee, 2013 - organophosphates and carbamates",
    ],
  },
  {
    id: "emergency-case-2",
    title: "OSCE: anaphylaxis after an intramuscular injection in the clinic",
    kind: "osce",
    subjectId: "emergency",
    opening:
      "A 35-year-old man who received 75 mg of intramuscular diclofenac in the gluteal region for acute low back pain 5 minutes ago calls out from the injection room that he is itching all over; the nurse reports a flushed face with hives, swollen lips, an audible wheeze, a pulse of 124 per minute and a blood pressure of 84/50 mmHg. The station provides a manikin, an emergency tray and a monitor, and asks you to manage him and then answer the examiner's questions.",
    minutes: 10,
    frequency: "core",
    sections: [
      {
        heading: "Reading the station and the first ten seconds",
        points: [
          "Read the whole task card before touching anything, because OSCE marks sit on a checklist and the card usually tells you what is on it: recognise, call for help, adrenaline, position, oxygen, fluids, reassess, observe, document.",
          "Say what you see and what it means in one sentence: 'Urticaria, lip swelling, wheeze and hypotension within minutes of an intramuscular injection - this is anaphylaxis, and I am giving intramuscular adrenaline now.' Naming the diagnosis aloud earns the recognition mark and fixes the sequence.",
          "Delegate by name and task - 'Sister, please call 108 and bring the oxygen cylinder; brother, please stay at his head and keep talking to him' - because the examiner watches whether your instructions can actually be carried out.",
          "Put on gloves and check the ampoule aloud - adrenaline, 1 mg in 1 mL (1:1000), in date - because drawing up the wrong concentration is the error the station is built to catch.",
          "Do not stop to take a history, examine the back or hunt for the drug chart; everything else waits for the first dose of adrenaline, which must be in within 60 seconds of the diagnosis.",
        ],
      },
      {
        heading: "Recognise and assess: ABCDE spoken aloud",
        points: [
          "Airway: ask him to speak and listen for hoarseness or stridor, and look at the tongue and lips - 'his voice is hoarse and the lips are swollen, so the airway is threatened.'",
          "Breathing: count the respiratory rate, look for accessory muscle use and cyanosis, listen for wheeze and read the SpO2 - 'respiratory rate 28, wheeze on both sides, SpO2 91% on air.'",
          "Circulation: pulse rate and volume, blood pressure, capillary refill and skin colour - 'pulse 124 and thready, BP 84/50, capillary refill 4 seconds, so he is in shock.'",
          "Disability and exposure: level of consciousness on AVPU, a capillary glucose, and a look at the whole skin for urticaria and angioedema, remembering that skin signs are absent in up to 20% of fatal reactions and that hypotension after a known trigger is enough for the diagnosis.",
          "State the two diagnostic patterns you are applying - sudden onset of skin or mucosal changes with airway, breathing or circulation compromise, or sudden hypotension after exposure to a known allergen - and that he fulfils the first.",
        ],
      },
      {
        heading: "Adrenaline: dose, concentration, route, site and repeat",
        points: [
          "Adult: adrenaline 0.5 mg, which is 0.5 mL of 1:1000 (1 mg/mL), intramuscularly into the anterolateral aspect of the middle third of the thigh with a 25 mm needle (38 mm in an obese patient), through clothing if necessary; say the dose, the concentration and the site aloud as you inject.",
          "Write the time of the dose on the whiteboard or the case sheet, and say that you will repeat the same dose at 5 minutes if the airway, breathing or circulation signs have not improved, and again at 5-minute intervals thereafter.",
          "The paediatric doses, which the examiner will ask for: over 12 years 0.5 mg (0.5 mL); 6-12 years 0.3 mg (0.3 mL); 6 months to 6 years 0.15 mg (0.15 mL); under 6 months 0.1-0.15 mg; or 0.01 mg/kg of 1:1000 to a maximum of 0.5 mg, measured in a 1 mL syringe.",
          "Explain why the thigh: peak plasma levels are higher and earlier than from the deltoid, and the subcutaneous, inhaled and deltoid routes deliver too little in a shocked patient whose skin and arm muscles are poorly perfused.",
          "Say clearly that 1:1000 adrenaline is never given intravenously as a bolus; intravenous adrenaline is 1:10,000 in 50 microgram (0.5 mL) boluses or a low-dose infusion, given only by someone trained, with continuous monitoring, for refractory anaphylaxis.",
          "If the tray holds an auto-injector, it delivers 0.3 mg (over 30 kg) or 0.15 mg (7.5-25 kg) into the outer thigh and is held in place for 3-10 seconds according to the device; it is an acceptable first dose, and the ampoule is used for the repeat.",
        ],
      },
      {
        heading: "Positioning, oxygen and fluids",
        points: [
          "Lay him flat on the couch or the floor and raise the legs, because circulation is the dominant problem; if breathing were the dominant problem he could sit up with the legs raised, a pregnant woman goes into the left lateral position, and nobody is stood up or walked to a bed, because the empty-ventricle syndrome kills.",
          "High-flow oxygen 15 L/min through a non-rebreathing mask with the reservoir bag inflated, aiming for an SpO2 of 94-98%.",
          "Two wide-bore cannulae (18 G or larger) and a rapid bolus of 500-1000 mL of a balanced crystalloid or 0.9% saline over 5-10 minutes for the hypotension, repeated according to the blood pressure; a child gets 10 mL/kg, repeated, and large volumes may be needed because a third of the plasma volume can leak out in 10 minutes.",
          "Attach the monitor - SpO2, non-invasive blood pressure every 2-3 minutes at first, and a three-lead ECG - because adrenaline can cause tachyarrhythmia and ischaemia and the monitor is how you see the response.",
          "Keep the diclofenac ampoule and the drug chart, give no further dose of anything from the same class, and if the trigger had been an infusion, stop the infusion and leave the cannula in place.",
        ],
      },
      {
        heading: "Adjuncts and what not to reach for",
        points: [
          "For persistent wheeze after adrenaline: nebulised salbutamol 5 mg (2.5 mg under 5 years) driven by oxygen; for stridor from laryngeal oedema: nebulised adrenaline 5 mL of 1:1000 (child 0.5 mL/kg to a maximum of 5 mL) as a bridge while intramuscular adrenaline is repeated.",
          "If he were on a beta-blocker and did not respond: glucagon 1-2 mg IV over 5 minutes, repeatable (child 20-30 microgram/kg, maximum 1 mg), because the beta-2 response to adrenaline is blocked.",
          "After stabilisation, for skin symptoms only: chlorphenamine 10 mg IM or slow IV (child 6-12 years 5 mg, 6 months to 6 years 2.5 mg, under 6 months 250 microgram/kg) and hydrocortisone 200 mg IV (child 6-12 years 100 mg, 6 months to 6 years 50 mg, under 6 months 25 mg), saying aloud that these are third-line, that they do nothing for airway, breathing or circulation, and that the 2021 Resuscitation Council UK algorithm removed them from the initial treatment.",
          "If the airway is closing, call for an anaesthetist or the most experienced airway operator at once and prepare for early intubation, because a delayed airway in anaphylaxis is often an impossible one; the surgical airway plan is stated, not improvised.",
          "Refractory anaphylaxis - airway, breathing or circulation problems persisting after two intramuscular doses - needs an adrenaline infusion (1 mg in 100 mL of 0.9% saline, that is 10 microgram/mL, started at 0.5-1 mL/kg per hour and titrated) with monitoring, further fluid and transfer to critical care; in the clinic, keep giving intramuscular doses every 5 minutes until the ambulance arrives.",
        ],
      },
      {
        heading: "Reassessment, observation and transfer",
        points: [
          "Reassess ABCDE after every intervention and say the findings aloud - at 5 minutes, 'the wheeze is less, BP 98/60, SpO2 96% on oxygen, the lips are still swollen, so I am giving a second 0.5 mg intramuscular dose because the airway signs persist.'",
          "Every patient with anaphylaxis is transferred to hospital for observation, even if he looks well: a minimum of 6 hours after full resolution for a reaction that responded to a single dose, and 12 hours or overnight admission if it was severe, needed more than one dose, involved asthma, came late in the evening, or if he lives far from care.",
          "Biphasic reactions - a recurrence without re-exposure - occur in about 3-5%, usually within 4-12 hours, and are the reason a clinic must not send a recovered patient home.",
          "Where the facility exists, ask for serum mast cell tryptase as soon as possible after treatment, at 1-2 hours, and a baseline at 24 hours; it confirms the mechanism retrospectively and never delays treatment.",
          "Hand over to the ambulance crew with times - the drug and dose injected, the time of onset, each adrenaline dose with time and route, the fluid given, the observations and the trend - and send the used ampoule and a copy of the record with him.",
        ],
      },
      {
        heading: "Documentation, disclosure and prevention",
        points: [
          "Write a contemporaneous, timed note: the drug, dose, batch number, route and site of the injection and who gave it; the time of onset and the features; each set of observations; each dose of adrenaline with time, dose, concentration, route and site; other drugs and fluids; the response; the time of transfer; and the advice given.",
          "Label the record in red - 'Anaphylaxis to diclofenac (NSAID)' - put the same label on every prescription and a wallet card, and tell him and his family in plain words what happened and what to avoid, including other NSAIDs (ibuprofen, naproxen, aceclofenac, aspirin), because NSAID hypersensitivity often cross-reacts within the class.",
          "Report the reaction to the Pharmacovigilance Programme of India on the suspected ADR form, or to the district immunisation officer within 24 hours as an AEFI if the trigger had been a vaccine, and record the ampoule and batch number.",
          "At discharge from hospital he needs a written anaphylaxis action plan, two adrenaline auto-injectors (0.3 mg for over 30 kg; 0.15 mg for 7.5-25 kg) or, where they are unavailable, adrenaline ampoules with a labelled 1 mL syringe and hands-on training for the family, and referral to an allergist for confirmation and advice on safe analgesics such as paracetamol.",
          "Audit the clinic afterwards: an anaphylaxis tray with adrenaline 1:1000 ampoules checked monthly, 1 mL syringes and 25 mm needles, oxygen with a reservoir mask, cannulae and saline, a nebuliser and a wall algorithm; every patient asked about drug allergy before every injection and kept for 20-30 minutes after injectable antibiotics, NSAIDs, iron and vaccines; and adrenaline drawn up before anti-snake venom or an iron infusion.",
        ],
      },
    ],
    summaryStatement:
      "This is a 35-year-old man who developed generalised urticaria, lip angioedema with hoarseness, bilateral wheeze with an SpO2 of 91% and hypotension of 84/50 mmHg within 5 minutes of 75 mg of intramuscular diclofenac, fulfilling the clinical criteria for anaphylaxis with airway, breathing and circulation compromise; he was given adrenaline 0.5 mg of 1:1000 intramuscularly into the anterolateral thigh at 0 and 5 minutes, laid flat with the legs raised, given oxygen at 15 L/min and a 1 L crystalloid bolus, with nebulised salbutamol for persistent wheeze, and is being transferred for a minimum of 12 hours of observation with a timed record, a red allergy label and an adverse drug reaction report.",
    differential: [
      {
        diagnosis: "Vasovagal syncope after the injection",
        forIt:
          "Faintness, pallor, sweating and hypotension within minutes of an injection are common and benign, especially in a young man who stands up straight after an intramuscular injection.",
        againstIt:
          "A vasovagal reaction produces bradycardia, not a pulse of 124, and never urticaria, angioedema or wheeze, and it recovers within a minute or two of lying flat; when in doubt adrenaline is given, because the cost of a missed anaphylaxis is death and the cost of an unnecessary intramuscular dose is a fast pulse.",
      },
      {
        diagnosis: "Acute severe asthma",
        forIt:
          "Wheeze, tachycardia, tachypnoea and hypoxaemia in a man who may have undiagnosed asthma, and NSAIDs precipitate bronchospasm in aspirin-exacerbated respiratory disease.",
        againstIt:
          "Asthma does not cause urticaria, lip swelling or hypotension, and the link to the injection is too tight; NSAID-induced bronchospasm with any airway or circulation compromise is treated as anaphylaxis, so salbutamol is an adjunct here and not the answer.",
      },
      {
        diagnosis: "Isolated urticaria or angioedema without anaphylaxis",
        forIt:
          "A drug can cause hives and lip swelling alone, and an anxious, itching patient may hyperventilate and feel faint.",
        againstIt:
          "Wheeze, hoarseness, an SpO2 of 91% and a blood pressure of 84/50 mmHg are breathing and circulation compromise, which converts a skin reaction into anaphylaxis; a rash alone with normal observations would be watched and given an antihistamine, but the moment any airway, breathing or circulation sign appears adrenaline is given.",
      },
      {
        diagnosis: "Panic attack with hyperventilation",
        forIt:
          "Fear after a painful injection, tingling of the hands, a sense of throat tightness and a fast pulse can look alarming.",
        againstIt:
          "The blood pressure is normal or high in panic, there is no urticaria, angioedema, wheeze or hypoxaemia, and carpopedal spasm with perioral tingling is the clue; none of that fits a man with hives and a blood pressure of 84/50 mmHg.",
      },
    ],
    investigations: [
      {
        test: "Continuous pulse oximetry, blood pressure every 2-3 minutes and a cardiac monitor",
        why: "Anaphylaxis is a clinical diagnosis and no test precedes adrenaline; the monitor shows whether the treatment is working and whether adrenaline is causing an arrhythmia.",
        expected: "SpO2 rising above 94% on oxygen and systolic BP above 100 mmHg within 5-10 minutes of adrenaline and fluid; persistent compromise after two doses defines refractory anaphylaxis.",
      },
      {
        test: "Capillary blood glucose",
        why: "Every collapsed patient has a glucose checked, because hypoglycaemia mimics and complicates shock.",
        expected: "Normal; adrenaline may raise it transiently.",
      },
      {
        test: "12-lead ECG once stable",
        why: "The reaction itself and adrenaline can cause myocardial ischaemia (Kounis syndrome) and arrhythmias, particularly in older patients or after an accidental intravenous bolus.",
        expected: "Sinus tachycardia; ST changes or a new arrhythmia mean a medical assessment before discharge.",
      },
      {
        test: "Serum mast cell tryptase at 1-2 hours after onset and a baseline sample at 24 hours or at follow-up",
        why: "Confirms mast cell degranulation retrospectively and helps the allergist separate anaphylaxis from its mimics; it is drawn only after treatment has started.",
        expected: "A peak above 11.4 microgram/L, or a rise of more than 20% plus 2 microgram/L above baseline, supports anaphylaxis; a normal level does not exclude it, especially in food-triggered reactions.",
      },
      {
        test: "Peak expiratory flow once he can perform it, and a chest X-ray only if wheeze or hypoxaemia persists",
        why: "Documents residual bronchospasm and excludes aspiration or pneumothorax in a patient who stays breathless after the reaction.",
        expected: "Peak flow returning towards predicted within hours; the film is usually normal.",
      },
      {
        test: "Allergy work-up at 4-6 weeks: skin prick and intradermal testing where validated, specific IgE, and a supervised challenge with an alternative analgesic",
        why: "Confirms the culprit, separates a single-NSAID IgE-mediated reaction from cross-reactive COX-1 hypersensitivity, and tells him which painkillers he can safely use.",
        expected: "Diclofenac positive with tolerance of paracetamol and, often, of a selective COX-2 inhibitor such as etoricoxib under supervision; the result is written on the allergy card.",
      },
    ],
    management: [
      {
        heading: "First minute: recognise and give adrenaline",
        points: [
          "**Adult: adrenaline 0.5 mg = 0.5 mL of 1:1000 (1 mg/mL) IM into the anterolateral mid-thigh; repeat every 5 minutes while airway, breathing or circulation signs persist.**",
          "**Child: over 12 years 0.5 mg; 6-12 years 0.3 mg; 6 months to 6 years 0.15 mg; under 6 months 0.1-0.15 mg; or 0.01 mg/kg to a maximum of 0.5 mg**, same route and repeat interval.",
          "Never 1:1000 intravenously; there is no absolute contraindication to intramuscular adrenaline in anaphylaxis, including ischaemic heart disease and pregnancy.",
          "Call for help and the ambulance (108) as the first dose goes in; remove or stop the trigger without delaying adrenaline.",
        ],
      },
      {
        heading: "Position, oxygen and fluids",
        points: [
          "Flat with the legs raised (sitting up with the legs raised if breathing is the dominant problem; left lateral in pregnancy); never stand the patient up.",
          "Oxygen 15 L/min by non-rebreathing mask; SpO2 target 94-98%.",
          "**Crystalloid 500-1000 mL rapidly in an adult, 10 mL/kg in a child, repeated against the blood pressure**, through two wide-bore cannulae.",
          "Monitor SpO2, BP and ECG continuously; one person records the times.",
        ],
      },
      {
        heading: "Adjuncts, refractory anaphylaxis and the airway",
        points: [
          "Nebulised salbutamol 5 mg (2.5 mg under 5 years) for wheeze; nebulised adrenaline 5 mL of 1:1000 (child 0.5 mL/kg, maximum 5 mL) for stridor - adjuncts, never substitutes.",
          "Glucagon 1-2 mg IV over 5 minutes (child 20-30 microgram/kg, maximum 1 mg) if on a beta-blocker and not responding.",
          "**Refractory (no improvement after two IM doses): adrenaline infusion of 1 mg in 100 mL of 0.9% saline (10 microgram/mL) at 0.5-1 mL/kg/h titrated, with monitoring, plus further fluid and critical care transfer**; in the clinic, continue IM doses every 5 minutes until help arrives.",
          "Chlorphenamine 10 mg IM or slow IV and hydrocortisone 200 mg IV (child 6-12 years 5 mg and 100 mg; 6 months to 6 years 2.5 mg and 50 mg; under 6 months 250 microgram/kg and 25 mg) only after stabilisation and only for skin symptoms or asthma.",
          "Call for airway expertise at the first sign of stridor, hoarseness or tongue swelling.",
        ],
      },
      {
        heading: "Observation, transfer and discharge",
        points: [
          "Transfer every case; observe at least 6 hours after resolution, and 12 hours or overnight if the reaction was severe, needed repeat adrenaline, involved asthma, came in the evening or the home is remote; biphasic reactions occur in 3-5% within 4-12 hours.",
          "Tryptase at 1-2 hours and 24 hours where available.",
          "Discharge with a written action plan, two auto-injectors (0.3 mg over 30 kg, 0.15 mg for 7.5-25 kg) or ampoules with a 1 mL syringe and training, an allergy card and an allergy clinic referral.",
        ],
      },
      {
        heading: "Documentation, reporting and prevention",
        points: [
          "Timed record: the injection (drug, dose, batch, route, site, by whom), onset, features, observations, each adrenaline dose (time, dose, concentration, route, site), other drugs and fluids, response, transfer time, advice given, and open disclosure to the patient and family.",
          "Red allergy label on the record and every prescription; ADR report to the Pharmacovigilance Programme of India (AEFI report within 24 hours if a vaccine).",
          "Clinic prevention: ask about allergy before every injection, keep patients 20-30 minutes after injectable antibiotics, NSAIDs, iron and vaccines, keep a checked anaphylaxis tray and a wall algorithm, and draw up adrenaline before anti-snake venom or an iron infusion.",
        ],
      },
    ],
    viva: [
      {
        q: "Suppose this had been a 4-year-old weighing 16 kg after the MMR vaccine - what changes?",
        a: "Adrenaline 0.15 mg, which is 0.15 mL of 1:1000, intramuscularly into the anterolateral thigh, drawn up in a 1 mL syringe and repeated every 5 minutes; the weight-based dose of 0.01 mg/kg gives 0.16 mg, the same. Oxygen, lie the child flat, a fluid bolus of 10 mL/kg (160 mL) of crystalloid repeated to response, nebulised salbutamol 2.5 mg for wheeze, and the same observation rules. Report it as an AEFI to the district immunisation officer within 24 hours; other vaccines can continue, but this one needs specialist advice before any further dose.",
      },
      {
        q: "Why the thigh and not the deltoid, and why not subcutaneous?",
        a: "The vastus lateralis is large and stays well perfused in shock, so peak plasma adrenaline is reached in about 8 minutes after an intramuscular thigh injection compared with about 34 minutes after a subcutaneous one, and the deltoid gives lower levels; in a shocked patient with peripheral vasoconstriction the subcutaneous route may deliver nothing at all.",
      },
      {
        q: "What is the intravenous dose of adrenaline, and when would you use it?",
        a: "Only for refractory anaphylaxis, under continuous monitoring, by someone trained: boluses of 50 microgram, which is 0.5 mL of 1:10,000, titrated, or an infusion of 1 mg in 100 mL of saline started at 0.5-1 mL/kg per hour. In the clinic the answer is repeated intramuscular doses every 5 minutes, because an intravenous bolus of 1:1000 causes hypertensive crisis, ventricular arrhythmia and myocardial infarction and is the classic fatal error.",
      },
      {
        q: "How long do you observe, and why?",
        a: "At least 6 hours after complete resolution for a reaction that responded to a single dose of adrenaline; 12 hours or overnight admission if the reaction was severe, needed more than one dose, involved asthma or a previous biphasic reaction, occurred in the evening, or the patient lives far from care. Biphasic reactions occur in 3-5%, typically within 4-12 hours, and can be fatal.",
      },
      {
        q: "What must be written in the record?",
        a: "The drug, dose, batch number, route, site and the person who injected; the time of onset and the features on ABCDE; each set of observations with time; each adrenaline dose with time, dose, concentration, route and site; other drugs and fluids; the response and the time of transfer; the allergy label; the advice given and the ADR report. A record without times is indefensible.",
      },
      {
        q: "He asks whether he can take ibuprofen for his back in future.",
        a: "Not until an allergist has tested him. NSAID reactions can be IgE-mediated to a single drug or cross-reactive across all COX-1 inhibitors, and the history cannot tell them apart; he uses paracetamol for now, and a selective COX-2 inhibitor may be tolerated after a supervised challenge. The label 'NSAID anaphylaxis' stays on the record until then.",
      },
      {
        q: "What if he is on propranolol for migraine and does not respond?",
        a: "Glucagon 1-2 mg IV over 5 minutes, repeated, because it raises cyclic AMP in the heart independently of the blocked beta receptors; continue intramuscular adrenaline, expect a prolonged course and give large fluid volumes. In a child the dose is 20-30 microgram/kg to a maximum of 1 mg.",
      },
      {
        q: "What should the clinic have done to prevent this, and what does the tray hold?",
        a: "Ask about previous reactions to any painkiller before the injection, prefer oral analgesia where the injection is not needed, keep every patient 20-30 minutes after an intramuscular NSAID, antibiotic, iron or vaccine, and have the tray ready: at least 5 ampoules of adrenaline 1:1000 checked monthly for expiry, 1 mL syringes and 25 mm needles, an oxygen cylinder with a non-rebreathing mask, cannulae and 0.9% saline, a nebuliser with salbutamol, chlorphenamine and hydrocortisone as second-line, a bag-valve-mask, an oropharyngeal airway, a pulse oximeter and a printed algorithm.",
      },
    ],
    pitfalls: [
      "Giving chlorphenamine or hydrocortisone first and adrenaline last; antihistamines and steroids do not treat airway, breathing or circulation.",
      "Drawing up the wrong concentration or giving 1:1000 intravenously; say the concentration aloud and never give it into a vein.",
      "Injecting the deltoid or subcutaneously, or halving the dose because the patient 'looks alright'; the dose is 0.5 mg into the thigh.",
      "Sitting or standing the patient up, or walking him to a bed, in the middle of the hypotension.",
      "Letting him leave once he improves, without transfer and observation and without a timed record; a biphasic reaction at home at midnight is the outcome.",
      "Failing to label the allergy and to report the reaction, so that the next doctor injects the same drug.",
    ],
    references: [
      "Resuscitation Council UK. Emergency treatment of anaphylaxis: guidelines for healthcare providers, 2021",
      "Cardona V et al. World Allergy Organization Anaphylaxis Guidance 2020, World Allergy Organization Journal 2020",
      "Muraro A et al. EAACI guidelines: Anaphylaxis (2021 update), Allergy 2022",
      "Shaker MS et al. Anaphylaxis - a 2020 practice parameter update, systematic review and GRADE analysis, Journal of Allergy and Clinical Immunology 2020",
      "Simons FER, Roberts JR, Gu X, Simons KJ. Epinephrine absorption in children with a history of anaphylaxis, Journal of Allergy and Clinical Immunology 1998",
      "Ministry of Health and Family Welfare, Government of India. AEFI Surveillance and Response Operational Guidelines, 2015 - management of anaphylaxis",
      "Pharmacovigilance Programme of India, Indian Pharmacopoeia Commission - suspected adverse drug reaction reporting form",
    ],
  },
];

const subject: Subject = {
  id: "emergency",
  title: "Emergency & Acute Care",
  blurb: "Resuscitation, anaphylaxis, shock, poisoning, burns, trauma and what the clinic tray must hold.",
  icon: "Activity",
  papers: ["III"],
  topics,
  cases,
};

export default subject;
