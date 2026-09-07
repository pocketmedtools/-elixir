import type { Topic } from "../src/lib/types";

const topics: Topic[] = [];

topics.push({
  id: "surgery-office-spinal-anaesthesia",
  title: "Spinal anaesthesia",
  oneLiner:
    "Spinal (subarachnoid) anaesthesia is the reversible chemical blockade of nerve roots produced by injecting a small dose of local anaesthetic into the cerebrospinal fluid of the lumbar subarachnoid space below the termination of the spinal cord, giving rapid, dense sympathetic, sensory and motor block for surgery below the umbilicus; it is administered only by a trained anaesthetist with full monitoring and resuscitation facilities.",
  frequency: "less-common",
  keywords: [
    "subarachnoid block",
    "intrathecal",
    "bupivacaine",
    "baricity",
    "hyperbaric",
    "L3-L4",
    "ligamentum flavum",
    "dura",
    "cauda equina",
    "post-dural puncture headache",
    "total spinal",
    "ephedrine",
    "phenylephrine",
    "sensory level T4",
    "Tuffier's line",
    "epidural blood patch",
  ],
  sections: [
    {
      heading: "Clinical anatomy - from skin to cerebrospinal fluid",
      points: [
        "**Layers crossed in the midline approach, in order: skin, subcutaneous fat, supraspinous ligament, interspinous ligament, ligamentum flavum, epidural space, dura mater, arachnoid mater, subarachnoid space.** The ligamentum flavum gives the characteristic increased resistance and the dura the final 'give' or click; total skin-to-CSF depth is usually **4-6 cm** in an adult.",
        "The **epidural space** lying between ligamentum flavum and dura contains fat, lymphatics and the **internal vertebral (Batson) venous plexus**, which is engorged in pregnancy - one reason for a bloody tap and for greater cephalad spread of the same dose.",
        "**The spinal cord ends at the lower border of L1 (L1-L2) in the adult and at L3 in the neonate**, because the vertebral column grows faster than the cord; below this the subarachnoid space contains only the **cauda equina** and filum terminale, whose free roots are pushed aside by the needle. **The dural sac ends at S2 in the adult and S3 in the infant.**",
        "**Tuffier's (intercristal) line joins the highest points of the two iliac crests and classically crosses the body of L4 or the L4-L5 interspace.** Ultrasound and MRI studies show the palpated line is frequently **one space higher than estimated**, and anaesthetists are on average one space out, so the safe habit is to identify the space and then choose the one below.",
        "**Injection is therefore made at L3-L4 or L4-L5 (L2-L3 at the very highest), never above L2 in an adult**, so that the needle enters below the conus medullaris; in infants and small children the space chosen is L4-L5 or L5-S1.",
        "**Midline approach:** patient sitting or lateral with maximal spinal flexion, needle perpendicular with a slight cephalad angle, passing between adjacent spinous processes. **Paramedian approach:** entry **1-1.5 cm lateral and 1 cm caudal** to the upper spinous process, angled **10-15 degrees medially and cephalad**, bypassing the supraspinous and interspinous ligaments - the technique of choice in the elderly with calcified ligaments, in degenerative disease and in a patient who cannot flex.",
        "**Needle choice:** a **25-27G pencil-point (Whitacre or Sprotte) needle** separates rather than cuts dural fibres and roughly halves the risk of post-dural puncture headache; if a cutting (Quincke) needle is used, the bevel is aligned parallel to the long axis of the spine. Free flow of clear CSF from the hub is the only acceptable confirmation before injection.",
      ],
    },
    {
      heading: "Bupivacaine - the pharmacology examiners ask for",
      points: [
        "**Amide-linked local anaesthetic of the pipecoloxylidide group** (a butyl homologue of mepivacaine), supplied as a racemic mixture of R(+) and S(-) enantiomers; it acts by blocking voltage-gated sodium channels from the axoplasmic side, preferentially in the small, unmyelinated preganglionic sympathetic B fibres, then C and A-delta pain fibres, then touch, and last the large A-alpha motor fibres - hence the **sympathetic block is 2-6 dermatomes above the sensory level and the motor level 2 segments below it (differential block)**.",
        "**Physicochemistry: pKa 8.1** - only about 15 percent unionised at pH 7.4, so onset is slower than lignocaine (pKa 7.9); **protein binding 95 percent** to alpha-1 acid glycoprotein, giving a long duration; **high lipid solubility**, giving high potency (about four times that of lignocaine).",
        "**Preparation used intrathecally: 0.5 percent hyperbaric ('heavy') bupivacaine in 8 percent dextrose**, density about 1.026 g/mL at 37 degrees C, supplied as a 4 mL ampoule containing 20 mg. **Plain (isobaric) 0.5 percent bupivacaine** is the alternative.",
        "**Dose for caesarean section: 2.0-2.2 mL of 0.5 percent hyperbaric bupivacaine, that is 10-11 mg**, most often with **fentanyl 15-25 mcg**; published practice ranges from **1.8 to 2.5 mL (9-12.5 mg)** and the ED95 without opioid is about 11-13 mg. Doses below 8 mg are 'low-dose' spinals and should only be used where an epidural catheter is available to top up. For lower limb or perineal surgery **2.5-3 mL (12.5-15 mg)** is usual. **The dose is not scaled to body weight; height and weight are poor predictors of spread.**",
        "**Onset of sensory block 2-5 minutes, block fixed by 15-20 minutes; sensory block lasts 1.5-3 hours and motor block 1.5-2 hours**, longer with an adjuvant. Termination of action is by vascular absorption from the subarachnoid space, not by metabolism; hepatic amidase metabolism follows, with a half-life of about 3.5 hours.",
        "**Cardiotoxicity is the reason bupivacaine is more dangerous than lignocaine:** it binds cardiac sodium channels avidly and dissociates slowly during diastole ('fast in, slow out'), so blockade accumulates and produces re-entrant ventricular tachycardia and refractory ventricular fibrillation. **The cardiovascular:CNS toxicity dose ratio is about 2 for bupivacaine versus about 7 for lignocaine**, so cardiac arrest may occur with little warning from convulsions. The R(+) enantiomer is the more cardiotoxic, which is why **levobupivacaine and ropivacaine** were developed. Treatment of systemic toxicity is stop injecting, secure the airway with 100 percent oxygen, control seizures with a benzodiazepine, **20 percent lipid emulsion 1.5 mL/kg bolus then 0.25 mL/kg/min**, amiodarone rather than lignocaine for arrhythmias, and prolonged CPR. **Maximum safe doses of 2 mg/kg (2.5 mg/kg with adrenaline) apply to infiltration and epidural use, not to the far smaller intrathecal dose.**",
        "**Intrathecal additives:** **fentanyl 10-25 mcg** speeds and densifies the block, abolishes visceral discomfort at caesarean section and adds about an hour of analgesia (side effect: pruritus); **preservative-free morphine 100-200 mcg** gives 12-24 hours of analgesia but carries **delayed respiratory depression peaking at 6-12 hours**, so it demands ward monitoring; **clonidine 15-75 mcg** and **dexmedetomidine 5-10 mcg** prolong sensory and motor block at the cost of hypotension and sedation; **adrenaline 100-200 mcg** prolongs the block but adds little to bupivacaine. Only preservative-free solutions may enter the subarachnoid space.",
      ],
    },
    {
      heading: "Baricity, posture and the choice of drug",
      points: [
        "**Baricity is the ratio of the density of the injected solution to the density of CSF at 37 degrees C** (CSF density about 1.0003-1.0009 g/mL). It is the single most important determinant of how a spinal block spreads once the dose has been fixed.",
        "**Hyperbaric (heavy) solutions** - bupivacaine 0.5 percent with 8 percent dextrose, density about 1.026 - **sink with gravity**: predictable, rapid, reliable spread, the standard choice for caesarean section and for most surgery. **Isobaric (plain) bupivacaine** stays near the injection site, gives a more limited but longer-lasting and more haemodynamically stable block and is favoured for lower limb and hip surgery. **Hypobaric solutions** (bupivacaine diluted with sterile water, density below CSF) **rise**, and are used for hip surgery in the lateral position with the operative side uppermost and for perianal surgery in the prone jack-knife position.",
        "**Posture moves a hyperbaric block and posture is the anaesthetist's control lever for the first 15-20 minutes:** sitting for 3-5 minutes gives a **saddle block (S2-S5)** for perianal surgery; lying supine lets the drug run down the lumbar lordosis into the **thoracic kyphotic trough at T4-T6**, which is why an unmodified supine hyperbaric spinal tends to settle around T4-T6; head-down tilt raises the level and head-up limits it. **Once the block is fixed at 15-20 minutes, position no longer alters it.**",
        "**Other determinants of spread:** dose (the dominant factor for plain solutions), site of injection, volume and concentration, CSF volume, and **pregnancy** - engorged epidural veins reduce lumbar CSF volume and progesterone increases neuronal sensitivity, so **a pregnant woman needs roughly a third less drug for the same level**. Raised intra-abdominal pressure from ascites or a large tumour has the same effect. Barbotage, speed of injection and needle bevel direction have minor effects; **patient height and weight are unreliable guides.**",
        "**Lignocaine 5 percent hyperbaric has been effectively abandoned intrathecally**: it causes **transient neurological symptoms (TNS)** - bilateral buttock and thigh pain beginning after full recovery of the block and lasting 2-5 days - in up to **30 percent** of patients, especially after lithotomy positioning and day surgery, and it has been implicated in **cauda equina syndrome** when maldistributed through microcatheters.",
        "**Ropivacaine** is a pure S-enantiomer, less cardiotoxic, produces less motor block and is roughly **half to two-thirds as potent as bupivacaine** intrathecally (about 15-22.5 mg for lower limb surgery); it is not licensed for intrathecal use in many countries, which should be stated in an answer. **Levobupivacaine**, the S-enantiomer of bupivacaine, is essentially equipotent with the racemate with a wider cardiac safety margin.",
        "**Short-acting agents for day surgery:** **preservative-free 2-chloroprocaine 40-50 mg** and **hyperbaric prilocaine 2 percent 40-60 mg** give 60-90 minute blocks with fast recovery of ambulation and micturition and negligible TNS. **Tetracaine and cinchocaine (dibucaine)** are of historical and viva interest only in most Indian units.",
      ],
    },
    {
      heading: "Indications and contraindications",
      points: [
        "**Indications: any surgery below the umbilicus in a cooperative patient** - caesarean section and other obstetric procedures, gynaecological surgery including vaginal hysterectomy, inguinal hernia repair, appendicectomy, perianal and anorectal surgery, urological surgery including transurethral resection of the prostate, and all lower limb orthopaedic and vascular surgery.",
        "**The level required decides the dose and posture: caesarean section T4; upper abdominal or hernia surgery T6; TURP, hip surgery and vaginal delivery T10; lower limb surgery T12; perineal and anorectal surgery S2-S5 (saddle).** A useful dermatome list is **T4 nipple, T6 xiphisternum, T8 lower costal margin, T10 umbilicus, T12 symphysis, L1 inguinal ligament, S2-S5 perineum.**",
        "**Advantages over general anaesthesia:** an awake patient with an intact airway and a much lower aspiration risk, less intraoperative blood loss, a lower rate of deep vein thrombosis, excellent postoperative analgesia, avoidance of polypharmacy and of ventilation in a patient with respiratory disease, early return of bowel function, and low cost - all relevant in Indian district practice.",
        "**Absolute contraindications: patient refusal or inability to consent; infection at the puncture site; raised intracranial pressure with a mass lesion (risk of coning); uncorrected hypovolaemia or shock; clinically significant coagulopathy or full therapeutic anticoagulation; true allergy to amide local anaesthetics; and absence of a trained anaesthetist, monitoring and resuscitation facilities.**",
        "**Relative contraindications: systemic sepsis or bacteraemia, fixed cardiac output states (severe aortic or mitral stenosis, hypertrophic obstructive cardiomyopathy), pre-existing neurological disease such as multiple sclerosis or spinal cord disease, severe spinal stenosis, spinal deformity or previous instrumented spinal surgery, an uncooperative or restless patient, and surgery of unpredictable or prolonged duration.** Texts differ on which of these are absolute - **severe aortic stenosis and demyelinating disease are listed as absolute by some authorities and relative by others**, and the honest exam answer says so.",
        "**Antithrombotic drugs (ASRA 4th edition, 2018): aspirin and NSAIDs alone are not a contraindication.** Wait **12 hours after prophylactic and 24 hours after therapeutic low-molecular-weight heparin**; **4-6 hours after subcutaneous unfractionated heparin 5000 units** or intravenous heparin with a normal aPTT; **5 days after warfarin with INR 1.4 or less**; **5-7 days after clopidogrel and ticagrelor and 7-10 days after prasugrel**; **72 hours after rivaroxaban or apixaban** and 72-120 hours after dabigatran depending on renal function; **36-42 hours after fondaparinux**. European (ESAIC) intervals differ slightly, so quote the guideline you are following.",
        "**Chronic backache, previous simple back surgery, obesity and headache history are not contraindications**, though they predict technical difficulty; **the answer that scores is that the risk-benefit is judged case by case by the anaesthetist, and the family physician's job is to identify and flag these factors preoperatively, not to decide the technique.**",
      ],
    },
    {
      heading: "Complications and their management",
      points: [
        "**Hypotension is the commonest complication** - 15-33 percent generally and up to 80 percent at caesarean section without prophylaxis - caused by preganglionic sympathetic blockade (T5-L1) with venodilatation and a fall in preload, worsened by aortocaval compression in pregnancy. Defined obstetrically as **systolic pressure below 90 mmHg or below 80 percent of baseline**; the target is to keep systolic pressure **at or above 90 percent of baseline**. Manage with left uterine displacement, crystalloid co-load, a **phenylephrine infusion or boluses**, and oxygen. **Nausea and vomiting after a spinal is hypotension until proved otherwise - treat the blood pressure first.**",
        "**Bradycardia** occurs in 10-15 percent, from block of the **cardioaccelerator fibres (T1-T4)** and from the Bezold-Jarisch reflex in an underfilled ventricle; risk factors are baseline heart rate below 60, ASA I status, beta-blockade and a block above T5. Treat with **atropine 0.6 mg IV, ephedrine 6 mg IV, fluids, and adrenaline 10-100 mcg early if the rate is falling towards asystole.**",
        "**High or total spinal** presents as progressive numbness and weakness of the hands (C8-T1), difficulty breathing or speaking, hypotension with bradycardia, then apnoea, dilated pupils and unconsciousness. **Management is airway, breathing, circulation: 100 percent oxygen, immediate intubation and ventilation with cricoid pressure, fluids, vasopressors, atropine and adrenaline, sedation once the blood pressure is restored, delivery of the baby if pregnant, and supportive ventilation for 1-3 hours until the block regresses.** Full recovery is the rule if oxygenation and perfusion are maintained.",
        "**Post-dural puncture headache** follows CSF leak and traction on pain-sensitive structures: **0.5-2 percent with a 25-27G pencil-point needle, 3-5 percent with a 25G Quincke, and up to 30-40 percent with large cutting needles or an accidental dural puncture by a 16-18G epidural needle.** It is **fronto-occipital, postural (worse sitting or standing, relieved by lying flat), begins within 24-48 hours** and may carry neck stiffness, photophobia, tinnitus, nausea or a sixth nerve palsy with diplopia. Risk factors are young age, female sex, pregnancy, low BMI, multiple attempts and a cutting needle. **Treatment: reassurance, regular paracetamol and NSAIDs, oral or IV caffeine 300-500 mg, adequate oral fluids, and an abdominal binder; an epidural blood patch with 15-20 mL of autologous blood is the definitive treatment, usually offered after 24-48 hours, with a 60-90 percent success rate.** Bed rest and aggressive hydration prevent nothing.",
        "**Urinary retention** from S2-S4 blockade is common, particularly with long-acting agents and intrathecal opioids - examine for a palpable bladder in recovery and catheterise. **Backache** occurs in 10-25 percent, usually from ligamentous strain and positioning under a relaxed spine, is self-limiting and responds to simple analgesia; it is not caused by the needle damaging the cord.",
        "**Serious neurological complications are rare but must be named: cauda equina syndrome** (saddle anaesthesia, urinary and faecal incontinence, lower limb weakness) from maldistributed or concentrated local anaesthetic; **arachnoiditis**; **direct nerve root trauma** (a paraesthesia on insertion means withdraw and redirect, never inject); **meningitis**, characteristically streptococcal from the operator's oropharynx, which is why a mask and strict asepsis are mandatory; and **epidural abscess**, presenting days later with fever, back pain and progressive neurological deficit. Permanent injury after spinal anaesthesia is of the order of **1 in 20,000 to 1 in 50,000 or less**.",
        "**Vertebral canal haematoma** is the complication that anticoagulation guidelines exist to prevent: incidence about **1 in 150,000-220,000** after spinal anaesthesia but far higher with unsafe anticoagulant timing. It presents with **severe back pain, unexpectedly prolonged or recurring motor block, and sphincter disturbance**; it demands **immediate MRI and surgical decompression, ideally within 8-12 hours**, because delay converts a recoverable deficit into paraplegia. Other complications to list: failed or patchy block, shivering, pruritus and delayed respiratory depression from intrathecal morphine, and systemic local anaesthetic toxicity from inadvertent intravascular injection.",
      ],
    },
    {
      heading: "Management after the block, and the family physician's role",
      points: [
        "**Immediately after injection: lie the patient supine with a 15 degree left lateral tilt or manual left uterine displacement if pregnant, give oxygen by face mask, start non-invasive blood pressure every minute for the first 10-15 minutes and then every 3-5 minutes, and keep continuous ECG, pulse oximetry, verbal contact and a running intravenous line.** Adjust table tilt to steer a hyperbaric block only within the first 15-20 minutes.",
        "**Checking the level:** test **loss of cold sensation with ice or ethyl chloride first, then pinprick, then light touch**, on both sides, and record the highest dermatome. **Cold is typically 1-2 segments higher than pinprick, and pinprick 1-2 segments higher than touch.** For caesarean section the accepted standard is **loss of cold to T4 and loss of light touch to T5** before incision; motor block is graded on the modified Bromage scale. **A block that is inadequate before the knife goes in is converted to general anaesthesia, not talked through.**",
        "**Haemodynamic management at caesarean section:** **co-load** (not preload) with **10-15 mL/kg of warmed crystalloid started as the spinal is injected**, keep left uterine displacement, and use a **prophylactic phenylephrine infusion 25-50 mcg/min titrated to keep systolic pressure at or above 90 percent of baseline**, with **boluses of 50-100 mcg** as needed. **Phenylephrine is first line** because it preserves fetal acid-base status better than ephedrine. **Ephedrine 6 mg (range 5-10 mg) IV** is preferred **when hypotension is accompanied by bradycardia**, since phenylephrine will worsen the reflex bradycardia. **Noradrenaline 4-6 mcg boluses or 3-5 mcg/min** is an increasingly used alternative with similar fetal outcomes. Colloid preload is more effective than crystalloid preload but is rarely justified.",
        "**Sedation** is given only after the block has been tested and found adequate, never to rescue a failed block. Use **midazolam 0.5-1 mg increments, fentanyl 25-50 mcg, or a propofol infusion 25-75 mcg/kg/min**, titrated to a patient who still responds to voice, with oxygen and continuous oximetry and the airway trolley at hand. **At caesarean section sedation is withheld until after delivery** except for the distressed mother, because of neonatal depression and maternal recall issues.",
        "**Recovery:** monitor until the block regresses - **motor power returned (Bromage 0), sensation back below S2, the patient able to straight-leg raise, blood pressure stable and the bladder emptied or a catheter in place**. Warn about postural headache and give a contact number; look specifically for retention and for any deficit that is not resolving.",
        "**The family physician does not perform spinal anaesthesia.** It is administered by a trained anaesthetist, in an operating theatre or equipped procedure room, with oxygen, suction, a working laryngoscope and tubes, a self-inflating bag, vasopressors, atropine, adrenaline, induction agent, suxamethonium and a defibrillator immediately available, after a WHO checklist and secure large-bore intravenous access.",
        "**The family physician's real role is pre-block and post-block:** preoperative assessment and optimisation, checking coagulation status and antithrombotic timing, fasting and consent counselling, explaining the technique and its risks in the patient's language, arranging timely referral of the patient in whom regional anaesthesia is contraindicated, and afterwards **recognising and managing post-dural puncture headache, urinary retention and backache, and identifying the red-flag patient with fever, escalating back pain or new weakness who needs urgent imaging and a neurosurgical opinion.**",
      ],
    },
  ],
  tables: [
    {
      heading: "Spinal versus epidural anaesthesia",
      columns: ["Feature", "Spinal (subarachnoid block)", "Epidural"],
      rows: [
        ["Site of injection", "Subarachnoid space, into CSF, below L2 in the adult", "Epidural space, at any level from cervical to caudal"],
        ["End point", "Free flow of clear CSF from the needle hub", "Loss of resistance to saline or air at the ligamentum flavum"],
        ["Needle", "25-27G pencil-point or Quincke", "16-18G Tuohy, usually with a catheter"],
        ["Dose of drug", "Small - 2-3 mL of 0.5 percent bupivacaine (10-15 mg)", "Large - 15-20 mL of 0.5 percent bupivacaine (75-100 mg)"],
        ["Onset", "2-5 minutes, fixed by 15-20 minutes", "15-20 minutes"],
        ["Quality of block", "Dense, reliable, profound motor block", "Segmental, may be patchy or unilateral, motor block titratable"],
        ["Control of level", "Determined at injection by dose, baricity and posture", "Titratable and extendable through the catheter"],
        ["Duration", "Fixed by the drug, 1.5-3 hours", "Indefinite - topped up or infused through the catheter"],
        ["Hypotension", "Rapid in onset and more severe", "Gradual, easier to manage"],
        ["Post-dural puncture headache", "0.5-5 percent depending on needle", "Rare, but up to 50 percent if the dura is accidentally punctured by the Tuohy needle"],
        ["Systemic toxicity risk", "Negligible - the dose is tiny", "Real - large dose, risk of intravascular injection, test dose required"],
        ["Typical use", "Caesarean section, lower limb, perineal, urological surgery", "Labour analgesia, postoperative analgesia, thoracic and abdominal surgery, chronic pain"],
      ],
    },
    {
      heading: "Local anaesthetic drugs used intrathecally",
      columns: ["Drug and preparation", "Usual intrathecal dose", "Onset", "Duration of sensory block", "Notes"],
      rows: [
        ["Bupivacaine 0.5 percent hyperbaric (8 percent dextrose)", "Caesarean section 2.0-2.2 mL (10-11 mg); lower limb 2.5-3 mL (12.5-15 mg); saddle 1-1.5 mL", "2-5 min", "1.5-3 hours", "Standard agent worldwide; predictable, gravity-dependent spread; cardiotoxic if given intravascularly"],
        ["Bupivacaine 0.5 percent plain (isobaric)", "2.5-3 mL (12.5-15 mg)", "5-8 min", "2-3.5 hours", "Less cephalad spread and less hypotension; useful for hip and lower limb surgery"],
        ["Levobupivacaine 0.5 percent", "10-15 mg", "3-6 min", "2-3 hours", "S-enantiomer, essentially equipotent, wider cardiac safety margin, costlier"],
        ["Ropivacaine 0.5-0.75 percent", "15-22.5 mg", "3-7 min", "1.5-2.5 hours", "About half to two-thirds the potency of bupivacaine; less motor block; unlicensed intrathecally in many countries"],
        ["Lignocaine 5 percent hyperbaric", "50-75 mg", "1-3 min", "45-90 minutes", "Largely abandoned - transient neurological symptoms in up to 30 percent and reports of cauda equina syndrome"],
        ["2-Chloroprocaine 1 percent preservative-free", "40-50 mg", "2-4 min", "40-90 minutes", "Ester; rapid offset, ideal for ambulatory surgery, minimal transient neurological symptoms"],
        ["Fentanyl (adjuvant)", "10-25 mcg", "Within minutes", "Adds 60-90 minutes of analgesia", "Denser block, abolishes visceral discomfort at caesarean section; pruritus common"],
        ["Preservative-free morphine (adjuvant)", "100-200 mcg", "30-60 min", "12-24 hours of analgesia", "Requires ward monitoring for delayed respiratory depression peaking at 6-12 hours"],
      ],
    },
    {
      heading: "Vasopressors for hypotension after spinal anaesthesia",
      columns: ["Drug", "Bolus dose", "Infusion", "Action", "When to prefer it"],
      rows: [
        ["Phenylephrine", "50-100 mcg IV, repeated", "25-50 mcg/min titrated", "Pure alpha-1 agonist - venoconstriction and increased afterload; causes reflex bradycardia", "First line at caesarean section: best fetal acid-base status; use when the heart rate is normal or high"],
        ["Ephedrine", "6 mg IV (range 5-10 mg), repeated to about 30 mg", "Rarely infused", "Mixed direct and indirect alpha and beta agonist - raises pressure and heart rate", "When hypotension is accompanied by bradycardia; crosses the placenta and causes fetal acidosis in large cumulative doses"],
        ["Noradrenaline", "4-6 mcg IV", "3-5 mcg/min diluted", "Alpha agonist with mild beta-1 activity - less reflex bradycardia than phenylephrine", "Emerging obstetric alternative with comparable neonatal outcomes; dilute carefully, ideally through a good peripheral or central line"],
        ["Atropine", "0.6 mg IV (up to 1.2 mg)", "-", "Antimuscarinic - blocks vagal tone at the sinus node", "Bradycardia below 45-50/min or symptomatic bradycardia; give before the rate collapses"],
        ["Adrenaline", "10-100 mcg IV; 1 mg in cardiac arrest", "0.05-0.1 mcg/kg/min", "Alpha and beta agonist", "Profound bradycardia not responding to atropine and ephedrine, total spinal, or cardiac arrest - escalate early rather than late"],
      ],
    },
  ],
  redFlags: [
    "A sensory level rising above T4 with numbness or weakness of the hands, difficulty speaking or breathing - an ascending high spinal; give 100 percent oxygen, call for help, prepare to intubate and ventilate, and support the circulation.",
    "Bradycardia below 45 beats per minute, or any bradycardia with hypotension after a spinal - give atropine 0.6 mg and ephedrine immediately and escalate to adrenaline early, because asystole after spinal anaesthesia is sudden and has caused deaths in otherwise fit young patients.",
    "Unresponsiveness, apnoea or dilated pupils after a subarachnoid injection - total spinal until proved otherwise; it is an airway and circulation emergency, not a drug reaction, and the patient recovers fully if ventilated and perfused.",
    "Severe back pain with fever, neck stiffness or a discharging puncture site in the days after a spinal - meningitis or epidural abscess; admit, take blood cultures, image urgently and start antibiotics after cultures.",
    "New or progressive leg weakness, numbness or sphincter disturbance after the block should have worn off, or a block that is unexpectedly prolonged - suspect vertebral canal haematoma or cauda equina syndrome; arrange emergency MRI and a neurosurgical opinion, as decompression within 8-12 hours determines whether the patient walks again.",
    "A patient on therapeutic low-molecular-weight heparin, warfarin, clopidogrel or a direct oral anticoagulant presenting for urgent surgery - do not allow a neuraxial block until the ASRA interval has elapsed or coagulation is corrected; discuss general anaesthesia with the anaesthetist instead.",
    "A postural headache after a spinal that loses its postural character, becomes constant, or develops focal neurological signs, seizures or altered consciousness - stop calling it a post-dural puncture headache and image for cerebral venous sinus thrombosis or subdural haematoma.",
  ],
  pearls: [
    "**The spinal cord ends at L1-L2 in the adult and L3 in the neonate, so the needle goes in at L3-L4 or L4-L5 and never above L2.** Tuffier's line is palpated at L4 but is frequently one space higher than it feels, so identify a space and then use the one below.",
    "**Skin, subcutaneous tissue, supraspinous ligament, interspinous ligament, ligamentum flavum, epidural space, dura, arachnoid, CSF** - recite the layers in that order; the paramedian approach misses the two interspinous ligaments and is the rescue technique in the calcified elderly spine.",
    "**Sympathetic block is 2-6 segments above the sensory level and motor block 2 segments below it** - differential blockade explains why a patient with a T6 pinprick level can still be profoundly hypotensive.",
    "**For caesarean section give 2.0-2.2 mL of 0.5 percent hyperbaric bupivacaine (10-11 mg) with fentanyl 15-25 mcg, and confirm loss of cold to T4 and loss of touch to T5 before the incision.** A pregnant woman needs about a third less drug than a non-pregnant one for the same level.",
    "**Baricity plus posture, not dose alone, determines the level of a hyperbaric block - and only for the first 15-20 minutes, after which the block is fixed.**",
    "**Bupivacaine is more cardiotoxic than lignocaine because it dissociates slowly from cardiac sodium channels ('fast in, slow out'), and its cardiovascular:CNS toxicity ratio is about 2 versus 7** - so cardiac arrest can occur without warning convulsions. Lipid emulsion 1.5 mL/kg, not lignocaine, is the antidote.",
    "**Nausea or vomiting on the table after a spinal is hypotension until proved otherwise** - check and treat the blood pressure before reaching for an antiemetic.",
    "**Phenylephrine is the first-line vasopressor at caesarean section, but ephedrine is the drug of choice when hypotension is accompanied by bradycardia**; co-loading with crystalloid at the moment of injection beats preloading before it.",
    "**Post-dural puncture headache is postural, fronto-occipital, appears within 24-48 hours and is prevented by a fine pencil-point needle; the definitive treatment is an epidural blood patch of 15-20 mL of autologous blood with 60-90 percent success.** Bed rest and extra fluids prevent nothing.",
    "**Spinal anaesthesia is given by an anaesthetist with full resuscitation facilities; the family physician's job is assessment, consent counselling, anticoagulant timing, referral and post-block care** - saying this earns marks and is the honest scope-of-practice answer.",
  ],
  theory: [
    {
      id: "surgery-office-spinal-anaesthesia-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "less-common",
      question:
        "A 23-year-old Mrs. Renuka is being posted for emergency section for failed induction. a) Explain the clinical anatomy for spinal anesthesia with a diagram. [3] b) Discuss the pharmacological features of Bupivacaine used for spinal anesthesia. [3] c) What are the indications, contraindications, and complications of spinal anesthesia? [4]",
      openingLines: [
        "Spinal (subarachnoid) anaesthesia is the reversible blockade of nerve roots produced by injecting local anaesthetic into the CSF of the lumbar subarachnoid space below the termination of the spinal cord, and it is the technique of choice for an emergency caesarean section in a fasted, haemodynamically stable woman such as Mrs. Renuka, because it avoids the airway and aspiration risks of general anaesthesia in pregnancy and allows her to be awake for the birth.",
        "It is administered only by a trained anaesthetist in a theatre equipped with oxygen, suction, airway equipment, vasopressors and resuscitation drugs, after consent, secure large-bore intravenous access and a WHO surgical safety checklist.",
      ],
      answer: [
        {
          heading: "a) Clinical anatomy for spinal anaesthesia",
          points: [
            "**Position and surface landmark:** the woman is placed sitting or in the left lateral position with maximal flexion of the lumbar spine. **Tuffier's (intercristal) line joins the highest points of the iliac crests and crosses the body of L4 or the L4-L5 interspace**, though it is often estimated one space too high, so the space identified is confirmed and the one below is used.",
            "**Level of injection: L3-L4 or L4-L5 in the adult, never above L2**, because **the spinal cord ends at the lower border of L1 (L1-L2) in the adult and at L3 in the neonate**; below this level lie only the mobile roots of the **cauda equina**, which are displaced rather than damaged by the advancing needle. **The dural sac ends at S2 in the adult and S3 in the infant.**",
            "**Layers pierced in the midline approach, in order: skin, subcutaneous fat, supraspinous ligament, interspinous ligament, ligamentum flavum, epidural space, dura mater, arachnoid mater, and finally the subarachnoid space containing CSF.** Total depth is usually 4-6 cm; the ligamentum flavum offers increased resistance and the dura a definite click or give.",
            "**The epidural space** between ligamentum flavum and dura contains fat, lymphatics and the **internal vertebral (Batson) venous plexus**, which is engorged in pregnancy - this reduces lumbar CSF volume and is one reason a pregnant woman requires roughly a third less local anaesthetic than a non-pregnant one for the same block height.",
            "**Midline versus paramedian approach:** the midline route is standard. In the paramedian route the needle enters **1-1.5 cm lateral and about 1 cm caudal to the upper spinous process and is angled 10-15 degrees medially and cephalad**, bypassing the supraspinous and interspinous ligaments; it is used in the elderly, in calcified or degenerate spines and when the patient cannot flex.",
            "**Confirmation and technique:** strict asepsis with mask, cap, gown and gloves; a **25-27G pencil-point (Whitacre or Sprotte) needle** through an introducer; the only acceptable end point is **free flow of clear CSF**; a paraesthesia means withdraw and redirect, never inject.",
          ],
        },
        {
          heading: "b) Pharmacological features of bupivacaine",
          points: [
            "**Class and mechanism:** an **amide local anaesthetic of the pipecoloxylidide group**, a racemic mixture of R(+) and S(-) enantiomers, which blocks voltage-gated sodium channels from the axoplasmic side. Small preganglionic sympathetic B fibres are blocked first, then C and A-delta pain fibres, then touch, and last the large motor fibres - hence the **differential block, with sympathetic level 2-6 segments above and motor level about 2 segments below the sensory level.**",
            "**Physicochemistry: pKa 8.1** (only about 15 percent unionised at pH 7.4, so onset is slower than lignocaine); **protein binding 95 percent** to alpha-1 acid glycoprotein, giving a long duration; high lipid solubility giving about four times the potency of lignocaine.",
            "**Preparation and dose: 0.5 percent hyperbaric bupivacaine in 8 percent dextrose** (density about 1.026 g/mL at 37 degrees C, 20 mg in a 4 mL ampoule). **For caesarean section, 2.0-2.2 mL, that is 10-11 mg, usually with fentanyl 15-25 mcg**; published practice ranges from 1.8 to 2.5 mL (9-12.5 mg). The dose is **not calculated by body weight**, and height and weight predict spread poorly.",
            "**Kinetics of the block: onset in 2-5 minutes, block fixed by 15-20 minutes, sensory block lasting 1.5-3 hours and motor block 1.5-2 hours.** Action is terminated by vascular absorption from the subarachnoid space; the absorbed drug is metabolised by hepatic amidases with an elimination half-life of about 3.5 hours.",
            "**Cardiotoxicity:** bupivacaine binds cardiac sodium channels avidly and dissociates slowly in diastole ('fast in, slow out'), producing re-entrant ventricular arrhythmias and refractory ventricular fibrillation. **Its cardiovascular:CNS toxicity ratio is about 2, against about 7 for lignocaine**, so cardiac arrest may precede any convulsion. The R(+) enantiomer is the more toxic, which is why levobupivacaine and ropivacaine exist. **Treatment of systemic toxicity: stop injection, 100 percent oxygen and airway control, benzodiazepine for seizures, 20 percent lipid emulsion 1.5 mL/kg bolus then 0.25 mL/kg/min, amiodarone rather than lignocaine for arrhythmias, and prolonged CPR.** Maximum doses of 2 mg/kg (2.5 mg/kg with adrenaline) apply to infiltration and epidural use, not to the intrathecal dose.",
            "**Adjuvants added to the intrathecal dose (preservative-free only): fentanyl 10-25 mcg** speeds and densifies the block and abolishes visceral discomfort during uterine handling; **morphine 100-200 mcg** gives 12-24 hours of analgesia but requires monitoring for **delayed respiratory depression at 6-12 hours**; **clonidine 15-75 mcg** or **dexmedetomidine 5-10 mcg** prolong the block at the cost of hypotension and sedation; **adrenaline 100-200 mcg** prolongs the block but adds little to bupivacaine.",
          ],
        },
        {
          heading: "c) Indications",
          points: [
            "**Any surgery below the umbilicus in a cooperative patient:** caesarean section and other obstetric procedures, gynaecological surgery, inguinal hernia repair, appendicectomy, perianal and anorectal surgery, urological surgery including transurethral resection of the prostate, and lower limb orthopaedic and vascular surgery.",
            "**Levels required: caesarean section T4; hernia and upper abdominal surgery T6; TURP, hip surgery and vaginal delivery T10; lower limb T12; perineal surgery S2-S5.**",
            "**Advantages relevant to this patient:** an awake mother with an intact airway and greatly reduced aspiration risk (the pregnant airway is difficult and the stomach is never empty in labour), no neonatal drug depression, less blood loss, excellent postoperative analgesia and early breastfeeding and mobilisation.",
          ],
        },
        {
          heading: "c) Contraindications",
          points: [
            "**Absolute: patient refusal or inability to consent; infection at the puncture site; raised intracranial pressure with a mass lesion; uncorrected hypovolaemia or shock (for example antepartum haemorrhage with an unstable mother); clinically significant coagulopathy or therapeutic anticoagulation; true amide local anaesthetic allergy; and the absence of a trained anaesthetist, monitoring or resuscitation facilities.**",
            "**Relative: systemic sepsis or chorioamnionitis, fixed cardiac output states (severe aortic or mitral stenosis, hypertrophic obstructive cardiomyopathy), pre-existing neurological disease such as multiple sclerosis, severe spinal stenosis or deformity, previous instrumented spine surgery, an uncooperative patient and surgery of unpredictable duration.** Authorities differ on whether severe aortic stenosis and demyelinating disease are absolute or relative, and this should be stated.",
            "**Antithrombotic timing (ASRA 4th edition, 2018): aspirin and NSAIDs alone are not a contraindication; wait 12 hours after prophylactic and 24 hours after therapeutic low-molecular-weight heparin, 4-6 hours after subcutaneous unfractionated heparin 5000 units, 5 days after warfarin with an INR of 1.4 or less, 5-7 days after clopidogrel, 72 hours after rivaroxaban or apixaban, and 36-42 hours after fondaparinux.** European guidance differs slightly, so quote the guideline followed.",
          ],
        },
        {
          heading: "c) Complications",
          points: [
            "**Immediate and cardiovascular: hypotension** (up to 80 percent at caesarean section without prophylaxis, from sympathetic block and aortocaval compression), **bradycardia** (10-15 percent, from block of the T1-T4 cardioaccelerator fibres and the Bezold-Jarisch reflex), **nausea and vomiting**, which are usually the first sign of hypotension, and **shivering**.",
            "**High or total spinal:** ascending numbness and weakness of the hands, dyspnoea, dysphonia, then apnoea, dilated pupils and unconsciousness. **Managed as an airway and circulation emergency - 100 percent oxygen, intubation and ventilation, fluids, vasopressors, atropine and adrenaline, delivery of the baby, and supportive ventilation until the block regresses in 1-3 hours.**",
            "**Failed, patchy or unilateral block, and systemic local anaesthetic toxicity** from inadvertent intravascular injection.",
            "**Postoperative: post-dural puncture headache** (0.5-2 percent with a 25-27G pencil-point needle, more with cutting needles; postural, fronto-occipital, within 24-48 hours; treated with analgesia, caffeine and, definitively, an **epidural blood patch of 15-20 mL of autologous blood**); **urinary retention**; **backache** in 10-25 percent; **pruritus and delayed respiratory depression** from intrathecal morphine.",
            "**Neurological and infective: transient neurological symptoms** (chiefly with lignocaine), **cauda equina syndrome**, direct **nerve root trauma**, **arachnoiditis**, **meningitis** (typically streptococcal from the operator's oropharynx - hence the mask) and **epidural abscess**. Permanent injury is of the order of 1 in 20,000 to 1 in 50,000 or less.",
            "**Vertebral canal haematoma:** about 1 in 150,000-220,000 after spinal anaesthesia but far commoner with unsafe anticoagulant timing; presents with severe back pain, unexpectedly prolonged or recurring motor block and sphincter disturbance, and needs **emergency MRI and decompression within 8-12 hours** to avoid permanent paraplegia.",
          ],
        },
      ],
      mustDraw: [
        "A labelled midline sagittal section through the lower lumbar spine, drawn large enough to label: the bodies of L2, L3, L4 and L5 with the intervertebral discs; the spinous processes with the supraspinous and interspinous ligaments between them; the ligamentum flavum; the epidural space with its fat and venous plexus; the dura and arachnoid mater; the subarachnoid space containing CSF; the conus medullaris ending at the lower border of L1; the cauda equina and filum terminale below it; and the dural sac ending at S2. Draw the spinal needle entering the L3-L4 interspace with a slight cephalad tilt and its tip in the subarachnoid space, and mark Tuffier's line across L4.",
        "A small inset showing the paramedian entry point 1-1.5 cm lateral and 1 cm caudal to the spinous process, angled 10-15 degrees medially and cephalad, to contrast with the midline route.",
        "A dermatome stick figure marking T4 at the nipple, T6 at the xiphisternum, T10 at the umbilicus and L1 at the inguinal ligament, with 'T4 required for caesarean section' written beside it.",
      ],
      markSplit: [
        { part: "a) Clinical anatomy with labelled diagram", marks: 3 },
        { part: "b) Pharmacology of bupivacaine", marks: 3 },
        { part: "c) Indications, contraindications and complications", marks: 4 },
      ],
      keywords: [
        "subarachnoid block",
        "caesarean section",
        "bupivacaine",
        "cauda equina",
        "Tuffier's line",
        "contraindications",
      ],
    },
    {
      id: "surgery-office-spinal-anaesthesia-t2",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "less-common",
      question:
        "Discuss the spinal anesthesia under the following headings: a) Choice of spinal drugs and baricity of drugs. [3] b) What complications do you anticipate and how will you manage? [3] c) Management after giving spinal anesthesia - (Hemodynamic management, level of block, sedation during spinal). [4]",
      openingLines: [
        "Spinal anaesthesia is the injection of a small dose of local anaesthetic into the lumbar CSF below L2 to produce a dense sympathetic, sensory and motor block for surgery below the umbilicus; the drug chosen and its baricity decide how the block spreads, and the care given in the twenty minutes after injection decides whether it is safe.",
        "Bupivacaine 0.5 percent hyperbaric in 8 percent dextrose is the standard agent worldwide, and the block is fixed by 15-20 minutes, after which posture can no longer change its height.",
      ],
      answer: [
        {
          heading: "a) Choice of spinal drug",
          points: [
            "**Bupivacaine 0.5 percent hyperbaric (in 8 percent dextrose)** is the agent of choice: onset 2-5 minutes, sensory block 1.5-3 hours, predictable gravity-dependent spread. **Dose: 10-11 mg (2.0-2.2 mL) for caesarean section, 12.5-15 mg (2.5-3 mL) for lower limb surgery, 1-1.5 mL for a saddle block.**",
            "**Plain (isobaric) bupivacaine 0.5 percent, 12.5-15 mg**, spreads less cephalad, gives a longer and more haemodynamically stable block, and suits lower limb and hip surgery. **Levobupivacaine 10-15 mg** is equipotent with a wider cardiac safety margin; **ropivacaine 15-22.5 mg** is about half to two-thirds as potent, gives less motor block and is unlicensed intrathecally in many countries.",
            "**Lignocaine 5 percent hyperbaric is now avoided** because of **transient neurological symptoms in up to 30 percent** and reports of cauda equina syndrome. For day surgery, **preservative-free 2-chloroprocaine 40-50 mg** or **hyperbaric prilocaine 40-60 mg** give a 60-90 minute block with rapid recovery of walking and micturition.",
            "**Adjuvants, preservative-free only: fentanyl 10-25 mcg** (denser, faster block, less visceral discomfort, added analgesia, pruritus); **morphine 100-200 mcg** (12-24 hours of analgesia, but delayed respiratory depression at 6-12 hours needs monitoring); **clonidine 15-75 mcg** or **dexmedetomidine 5-10 mcg** (prolong block, cause hypotension and sedation); **adrenaline 100-200 mcg** (prolongs block, little added value with bupivacaine).",
          ],
        },
        {
          heading: "a) Baricity and how posture moves the block",
          points: [
            "**Baricity is the ratio of the density of the injected solution to the density of CSF at 37 degrees C** (CSF density 1.0003-1.0009 g/mL). **Hyperbaric solutions sink, isobaric solutions stay, hypobaric solutions rise.**",
            "**Hyperbaric:** bupivacaine with 8 percent dextrose, density about 1.026 - the standard. **Isobaric:** plain bupivacaine, density close to that of CSF - limited, longer, more stable block. **Hypobaric:** bupivacaine diluted with sterile water, density below that of CSF - used for hip surgery in the lateral position with the **operative side uppermost** and for perianal surgery in the prone jack-knife position.",
            "**Posture is the control lever, but only until the block fixes at 15-20 minutes:** sitting for 3-5 minutes after a small hyperbaric dose gives a **saddle block (S2-S5)**; supine allows the drug to run down the lumbar lordosis into the **thoracic kyphosis at T4-T6**, which is where an unmodified hyperbaric block tends to settle; head-down tilt raises the level, head-up limits it.",
            "**Other determinants of spread: dose** (the dominant factor, especially for plain solutions), site of injection, volume and concentration, CSF volume, and **pregnancy**, where engorged epidural veins and increased neuronal sensitivity mean about **a third less drug** is needed. Raised intra-abdominal pressure acts the same way. Barbotage, speed of injection and needle direction matter little; **height and weight are poor predictors.**",
          ],
        },
        {
          heading: "b) Complications anticipated and their management",
          points: [
            "**Hypotension (the commonest, up to 80 percent in obstetrics):** sympathetic blockade with venodilatation and reduced preload, plus aortocaval compression. **Manage with left uterine displacement, crystalloid co-load 10-15 mL/kg, oxygen, and phenylephrine 50-100 mcg boluses or an infusion of 25-50 mcg/min**, targeting a systolic pressure at or above 90 percent of baseline. **Nausea and vomiting are hypotension until proved otherwise.**",
            "**Bradycardia (10-15 percent):** block of the **T1-T4 cardioaccelerator fibres** and the Bezold-Jarisch reflex. **Atropine 0.6 mg IV, ephedrine 6 mg IV, fluids, and adrenaline 10-100 mcg early** if the rate is falling towards asystole - sudden asystole after a spinal has killed fit young patients.",
            "**High or total spinal:** hand weakness and numbness, dyspnoea, dysphonia, hypotension with bradycardia, then apnoea and unconsciousness. **100 percent oxygen, rapid sequence intubation and ventilation, fluids, vasopressors, atropine and adrenaline, sedation once the pressure is restored, deliver the baby if pregnant, and ventilate for 1-3 hours until the block recedes.** Recovery is complete if oxygenation and perfusion are maintained.",
            "**Post-dural puncture headache:** postural, fronto-occipital, within 24-48 hours, with neck stiffness, photophobia, tinnitus or diplopia. Prevented by a **25-27G pencil-point needle** (0.5-2 percent versus 3-5 percent with a 25G Quincke). **Treat with reassurance, regular paracetamol and NSAIDs, caffeine 300-500 mg, oral fluids and an abdominal binder; an epidural blood patch with 15-20 mL of autologous blood after 24-48 hours succeeds in 60-90 percent.** Re-image if the headache loses its postural character or develops focal signs.",
            "**Urinary retention** (S2-S4 block - examine for a full bladder and catheterise), **backache** in 10-25 percent (positional ligamentous strain, self-limiting), **shivering**, **pruritus** and **delayed respiratory depression** from intrathecal morphine.",
            "**Rare but serious: cauda equina syndrome, transient neurological symptoms, nerve root trauma, arachnoiditis, meningitis (streptococcal, from the operator's mouth - wear a mask) and epidural abscess.** **Vertebral canal haematoma** (about 1 in 150,000-220,000) presents with back pain, prolonged or recurring motor block and sphincter disturbance and requires **emergency MRI and decompression within 8-12 hours.** Prevention is correct antithrombotic timing (ASRA 2018: 12 hours after prophylactic and 24 hours after therapeutic low-molecular-weight heparin).",
          ],
        },
        {
          heading: "c) Management after the block - haemodynamic management",
          points: [
            "**Position immediately:** supine with a **15 degree left lateral tilt or manual left uterine displacement** in pregnancy; avoid early head-down tilt with a hyperbaric block unless the level is deliberately being raised.",
            "**Monitoring: non-invasive blood pressure every minute for the first 10-15 minutes, then every 3-5 minutes; continuous ECG, pulse oximetry, respiratory rate, oxygen by face mask, verbal contact and a running wide-bore intravenous line.**",
            "**Fluids: co-load with 10-15 mL/kg of warmed crystalloid started at the moment of injection** - co-loading is more effective than preloading, which merely redistributes before the block develops. Colloid preload is more effective than crystalloid but is rarely justified.",
            "**Vasopressors: phenylephrine is first line** at caesarean section, as a **prophylactic infusion of 25-50 mcg/min** titrated to keep systolic pressure at or above 90 percent of baseline, with **50-100 mcg boluses**; it preserves fetal acid-base status better than ephedrine. **Ephedrine 6 mg IV (5-10 mg) is preferred when hypotension is accompanied by bradycardia**, because phenylephrine worsens reflex bradycardia; keep cumulative ephedrine modest to avoid fetal acidosis. **Noradrenaline 4-6 mcg boluses or 3-5 mcg/min** is an accepted alternative. **Atropine 0.6 mg** for bradycardia and **adrenaline** for a collapsing rate.",
          ],
        },
        {
          heading: "c) Management after the block - assessing the level of block",
          points: [
            "**Test in this order: cold (ice or ethyl chloride), then pinprick, then light touch**, comparing both sides and recording the highest dermatome reached and the time. **Cold is typically 1-2 segments higher than pinprick, and pinprick 1-2 segments higher than touch.**",
            "**Landmarks: T4 nipple, T6 xiphisternum, T8 lower costal margin, T10 umbilicus, T12 symphysis pubis, L1 inguinal ligament, S2-S5 perineum.**",
            "**Target levels: caesarean section - loss of cold to T4 and loss of light touch to T5; hernia and upper abdominal surgery T6; TURP, hip and vaginal delivery T10; lower limb T12; perineal surgery S2-S5.**",
            "**Motor block is graded on the modified Bromage scale** (0 = full movement, 3 = unable to move foot or knee). **Document the level, the time and both sides; a block that is inadequate before incision is converted to general anaesthesia, not talked or sedated through.**",
          ],
        },
        {
          heading: "c) Management after the block - sedation, and the family physician's limits",
          points: [
            "**Sedation is given only after the block has been formally tested and found adequate**, for anxiety and for the discomfort of positioning and of a long operation - never as a rescue for a failed block.",
            "**Agents: midazolam 0.5-1 mg intravenous increments, fentanyl 25-50 mcg, a propofol infusion 25-75 mcg/kg/min, or low-dose ketamine**, titrated so that the patient still responds to voice; oxygen by face mask, continuous pulse oximetry and capnography where available, and the airway trolley and drugs immediately at hand, because sedation plus a high block can rapidly become an airway emergency.",
            "**At caesarean section sedation is withheld until after delivery** (except for the seriously distressed mother), because of neonatal depression and maternal memory of the birth; the anaesthetist stays at the head end throughout and maintains verbal contact.",
            "**Recovery:** continue monitoring until **motor power has returned (Bromage 0), sensation is back below S2, the patient can straight-leg raise, blood pressure is stable and the bladder is emptied or catheterised**; document, warn about postural headache and give a contact number.",
            "**Scope of practice: spinal anaesthesia is performed by a trained anaesthetist with full monitoring and resuscitation facilities.** The family physician's role is preoperative assessment and optimisation, checking coagulation and antithrombotic timing, fasting and consent counselling, timely referral, and afterwards the recognition and management of post-dural puncture headache, retention and backache, and urgent referral of the patient with fever, escalating back pain or new weakness.",
          ],
        },
      ],
      mustDraw: [
        "A table of the three baricities - hyperbaric, isobaric, hypobaric - with the preparation, density relative to CSF, direction of movement, effect of posture and a clinical example in each row.",
        "A dermatome figure marking T4 (nipple), T6 (xiphisternum), T10 (umbilicus), L1 (inguinal ligament) and S2-S5 (perineum), annotated with the level required for caesarean section, hernia, TURP and perineal surgery.",
        "A flow chart for hypotension after a spinal: check level and heart rate - left uterine displacement and leg elevation - fluid co-load - phenylephrine if the heart rate is normal or high, ephedrine if bradycardic - atropine if the rate is below 50 - adrenaline and call for help if refractory.",
      ],
      markSplit: [
        { part: "a) Choice of drug and baricity", marks: 3 },
        { part: "b) Complications and their management", marks: 3 },
        { part: "c) Haemodynamic management, level of block and sedation", marks: 4 },
      ],
      keywords: [
        "baricity",
        "hyperbaric bupivacaine",
        "phenylephrine",
        "ephedrine",
        "sensory level T4",
        "total spinal",
        "sedation",
      ],
    },
  ],
  mcqs: [
    {
      id: "surgery-office-spinal-anaesthesia-q1",
      stem: "A 30-year-old man is being given a spinal anaesthetic for inguinal hernia repair. Which interspace is most appropriate, and what is the anatomical reason?",
      options: [
        "T12-L1, because the block must reach T6 and a higher injection gives a higher level",
        "L1-L2, because Tuffier's line crosses L1",
        "L3-L4, because the spinal cord ends at the lower border of L1 in the adult and only the cauda equina lies below",
        "L5-S1, because the dural sac ends at L5",
        "Any lumbar interspace, since the cord is mobile and moves away from the needle",
      ],
      answer: 2,
      explanation:
        "The adult spinal cord terminates at the lower border of L1 (the L1-L2 disc), so injection at L3-L4 or L4-L5 enters a subarachnoid space that contains only the freely mobile roots of the cauda equina, which are pushed aside by the needle. Injecting at T12-L1 or L1-L2 risks direct cord trauma, and the level of the block is determined by dose, baricity and posture rather than by choosing a higher interspace. Tuffier's line crosses L4 or the L4-L5 space, not L1 - and in practice it is often estimated one space higher than it truly lies, which is a further reason to work low. The dural sac ends at S2 in the adult (S3 in the infant), not L5. The cord is tethered by the denticulate ligaments and the filum terminale and does not move out of the way.",
      difficulty: "easy",
    },
    {
      id: "surgery-office-spinal-anaesthesia-q2",
      stem: "A 23-year-old primigravida is to have an emergency caesarean section under spinal anaesthesia. Which dose of intrathecal 0.5 percent hyperbaric bupivacaine is most appropriate?",
      options: [
        "0.5 mL (2.5 mg) with fentanyl 25 mcg",
        "2.0 mL (10 mg) with fentanyl 15-25 mcg",
        "4 mL (20 mg) plain, to guarantee an adequate block",
        "0.3 mg/kg calculated on her actual body weight",
        "5 mL of 0.5 percent lignocaine",
      ],
      answer: 1,
      explanation:
        "The standard adult dose for caesarean section is about 10-11 mg of 0.5 percent hyperbaric bupivacaine (2.0-2.2 mL), commonly with fentanyl 15-25 mcg to densify the block and abolish visceral discomfort during uterine handling; published practice spans 9-12.5 mg and the ED95 without opioid is roughly 11-13 mg. A 2.5 mg dose is far below the effective range and would give an inadequate block. Twenty milligrams greatly exceeds what is needed and invites a high or total spinal, since a pregnant woman needs about a third less drug than a non-pregnant one because engorged epidural veins reduce lumbar CSF volume. Intrathecal doses are not calculated per kilogram - height and weight predict spread poorly. Lignocaine 0.5 percent is not an intrathecal preparation, and hyperbaric lignocaine 5 percent has been abandoned because of transient neurological symptoms.",
      difficulty: "easy",
    },
    {
      id: "surgery-office-spinal-anaesthesia-q3",
      stem: "A 68-year-old man is to have a haemorrhoidectomy in the prone jack-knife position and the anaesthetist wants a block confined to the sacral roots with the patient already prone. Which solution and manoeuvre are correct?",
      options: [
        "Hyperbaric bupivacaine with the patient sitting for 5 minutes after injection",
        "Hypobaric bupivacaine (diluted with sterile water), because it rises to the sacral roots that are uppermost in the jack-knife position",
        "Isobaric bupivacaine with 20 degrees of head-down tilt",
        "Hyperbaric bupivacaine with 20 degrees of head-down tilt",
        "Any preparation, because baricity has no effect once the patient is prone",
      ],
      answer: 1,
      explanation:
        "Baricity is the density of the injected solution relative to CSF at 37 degrees C: hyperbaric solutions sink, hypobaric solutions rise. In the prone jack-knife position the sacral roots are the uppermost part of the spinal canal, so a hypobaric solution floats to them and produces a saddle block without the patient having to be repositioned. A hyperbaric solution given sitting also gives a saddle block, but the patient would then have to be turned prone within the fixation time, so it does not answer the question as posed. Head-down tilt with either an isobaric or a hyperbaric solution would move the drug away from the sacral roots and towards the thoracic segments, risking an unnecessarily high block. Baricity governs spread in every position - it is precisely why position matters for the first 15-20 minutes until the block fixes.",
      difficulty: "moderate",
    },
    {
      id: "surgery-office-spinal-anaesthesia-q4",
      stem: "Five minutes after a spinal for caesarean section the mother complains of nausea; her blood pressure is 78/40 mmHg (baseline 120/70) and her heart rate is 52/min. What is the most appropriate immediate treatment?",
      options: [
        "Ondansetron 4 mg intravenously and reassurance",
        "Phenylephrine 100 mcg intravenously and a rapid crystalloid bolus",
        "Ephedrine 6 mg intravenously with left uterine displacement and a rapid crystalloid bolus",
        "Head-down tilt of 30 degrees to improve venous return",
        "Metoclopramide 10 mg intravenously and continued observation",
      ],
      answer: 2,
      explanation:
        "Nausea after a spinal is hypotension until proved otherwise, and here the hypotension is accompanied by bradycardia. Ephedrine, a mixed alpha and beta agonist, raises both blood pressure and heart rate and is the vasopressor of choice when bradycardia coexists; it is given with left uterine displacement to relieve aortocaval compression and with a rapid crystalloid bolus. Phenylephrine is the correct first-line agent for most obstetric hypotension because it gives better fetal acid-base status, but it acts by pure alpha-1 vasoconstriction and causes reflex bradycardia, so it would worsen a heart rate of 52. An antiemetic treats the symptom and leaves the cause, and delay allows uteroplacental perfusion to fall further. Steep head-down tilt with a still-mobile hyperbaric block risks converting a T4 block into a high or total spinal.",
      difficulty: "moderate",
    },
    {
      id: "surgery-office-spinal-anaesthesia-q5",
      stem: "Eight minutes after an intrathecal injection a patient becomes restless, says her hands feel numb and she cannot take a deep breath, and her voice is weak; blood pressure is 60/30 mmHg and heart rate 38/min. What is the priority?",
      options: [
        "Give 100 percent oxygen, secure the airway and ventilate, and support the circulation with fluids, atropine, vasopressors and adrenaline",
        "Sit the patient up immediately to make the hyperbaric drug run caudally",
        "Give intravenous 20 percent lipid emulsion 1.5 mL/kg for local anaesthetic toxicity",
        "Give hydrocortisone 200 mg and adrenaline intramuscularly for anaphylaxis",
        "Give a fluid bolus and observe, as the block will recede spontaneously",
      ],
      answer: 0,
      explanation:
        "Hand numbness (C8-T1), dyspnoea and a weak voice with profound hypotension and bradycardia are the features of an ascending high or total spinal, which is an airway and circulation emergency: 100 percent oxygen, call for help, rapid sequence intubation and ventilation, fluids, vasopressors, atropine and early adrenaline, then supportive ventilation for one to three hours until the block regresses. Recovery is complete if oxygenation and perfusion are maintained. Sitting a hypotensive patient up removes what venous return remains and can cause cardiac arrest, and by this stage the drug is close to fixation anyway. Lipid emulsion treats systemic local anaesthetic toxicity from intravascular injection, which presents with perioral tingling, tinnitus, convulsions and ventricular arrhythmias, not with an ascending sensory and motor block. Anaphylaxis to a spinal dose of bupivacaine is vanishingly rare and would give bronchospasm, urticaria and angio-oedema. Waiting is not an option when the patient cannot breathe.",
      difficulty: "moderate",
    },
    {
      id: "surgery-office-spinal-anaesthesia-q6",
      stem: "A 26-year-old woman develops a severe fronto-occipital headache 24 hours after a spinal anaesthetic. It is much worse on sitting up, relieved by lying flat, and accompanied by neck stiffness and mild photophobia. She is afebrile with no focal neurological signs. Which statement is correct?",
      options: [
        "Strict bed rest and 3 litres of intravenous fluid a day prevent progression and are the mainstay of treatment",
        "An epidural blood patch with 15-20 mL of autologous blood is the definitive treatment, with a 60-90 percent success rate",
        "A lumbar puncture is required to exclude meningitis before any treatment",
        "The headache is unrelated to needle gauge, so needle choice does not affect its incidence",
        "The headache is characteristically occipital only and worse on lying flat",
      ],
      answer: 1,
      explanation:
        "This is a classical post-dural puncture headache: postural, fronto-occipital, beginning within 24-48 hours, often with neck stiffness, photophobia, tinnitus or diplopia from a sixth nerve palsy. Conservative measures - simple analgesia, caffeine 300-500 mg, oral fluids, an abdominal binder - are offered first, but the definitive treatment is an epidural blood patch with 15-20 mL of autologous blood, usually after 24-48 hours, succeeding in 60-90 percent. Bed rest and aggressive hydration relieve symptoms but prevent nothing, and prolonged bed rest adds thromboembolic risk. A further dural puncture is exactly what should be avoided; meningitis is suggested by fever, and this patient is afebrile with no focal signs. Needle gauge and tip design are the strongest modifiable risk factors - 0.5-2 percent with a 25-27G pencil point against up to 30-40 percent with a large cutting needle. The pain is worse upright, not supine.",
      difficulty: "moderate",
    },
    {
      id: "surgery-office-spinal-anaesthesia-q7",
      stem: "A 62-year-old woman on enoxaparin 1 mg/kg twice daily for a pulmonary embolism needs a hemiarthroplasty. Her last dose was 14 hours ago and her platelet count and INR are normal. Applying the ASRA 4th edition (2018) guidance, what should be done?",
      options: [
        "Proceed with the spinal now, since 12 hours have elapsed since the last dose",
        "Proceed with the spinal, since a normal INR and platelet count exclude any risk",
        "Wait until 24 hours have elapsed since the last therapeutic dose, or use general anaesthesia if surgery cannot wait",
        "Give protamine 1 mg per mg of enoxaparin and then proceed with the spinal",
        "Proceed with an epidural rather than a spinal, since the Tuohy needle is safer in anticoagulated patients",
      ],
      answer: 2,
      explanation:
        "ASRA 4th edition (2018) requires 12 hours after a prophylactic dose of low-molecular-weight heparin but 24 hours after a therapeutic dose such as enoxaparin 1 mg/kg twice daily or 1.5 mg/kg daily; at 14 hours the interval is not met, so the block is deferred or general anaesthesia is used. The INR and platelet count do not reflect anti-Xa activity, so normal results give no reassurance about low-molecular-weight heparin. Protamine reverses low-molecular-weight heparin only partially - roughly 60 percent of anti-Xa activity - and is not accepted as a way to shorten the interval before a neuraxial block. An epidural is more hazardous, not less: it uses a 16-18G Tuohy needle and often a catheter, and both insertion and removal carry haematoma risk. European (ESAIC) intervals differ slightly from ASRA, so the guideline being followed should always be named.",
      difficulty: "hard",
    },
  ],
  cards: [
    {
      id: "surgery-office-spinal-anaesthesia-c1",
      front: "List, in order, the layers a spinal needle crosses in the midline approach.",
      back: "Skin, subcutaneous fat, supraspinous ligament, interspinous ligament, ligamentum flavum, epidural space, dura mater, arachnoid mater, subarachnoid space (CSF). Depth 4-6 cm in an adult. The paramedian route bypasses the supraspinous and interspinous ligaments.",
    },
    {
      id: "surgery-office-spinal-anaesthesia-c2",
      front: "Where does the spinal cord end, where does the dural sac end, and which interspace is used?",
      back: "Cord ends at the lower border of L1 (L1-L2) in the adult and at L3 in the neonate; dural sac ends at S2 in the adult and S3 in the infant. Inject at L3-L4 or L4-L5 (L2-L3 at the highest), never above L2.",
    },
    {
      id: "surgery-office-spinal-anaesthesia-c3",
      front: "What is Tuffier's line and what is the caveat about it?",
      back: "The intercristal line joining the highest points of the iliac crests; it classically crosses the body of L4 or the L4-L5 interspace. Palpation frequently overestimates the level by one space, so identify the space and then use the one below.",
    },
    {
      id: "surgery-office-spinal-anaesthesia-c4",
      front: "Give the dose of 0.5 percent hyperbaric bupivacaine for caesarean section and the level required.",
      back: "2.0-2.2 mL (10-11 mg), commonly with fentanyl 15-25 mcg; the practical range is 1.8-2.5 mL (9-12.5 mg). Confirm loss of cold to T4 and loss of light touch to T5 before incision.",
    },
    {
      id: "surgery-office-spinal-anaesthesia-c5",
      front: "Give the key physicochemical numbers for bupivacaine.",
      back: "Amide (pipecoloxylidide) local anaesthetic; pKa 8.1 (slower onset than lignocaine); protein binding 95 percent (long duration); high lipid solubility (about four times the potency of lignocaine). Hyperbaric preparation: 0.5 percent in 8 percent dextrose, density about 1.026 g/mL, 20 mg in 4 mL.",
    },
    {
      id: "surgery-office-spinal-anaesthesia-c6",
      front: "Why is bupivacaine more cardiotoxic than lignocaine, and how is systemic toxicity treated?",
      back: "It binds cardiac sodium channels avidly and dissociates slowly in diastole ('fast in, slow out'), causing re-entrant VT and refractory VF; the cardiovascular:CNS toxicity ratio is about 2 versus about 7 for lignocaine, so arrest can precede convulsions. Treat with airway control and 100 percent oxygen, a benzodiazepine for seizures, 20 percent lipid emulsion 1.5 mL/kg then 0.25 mL/kg/min, amiodarone (not lignocaine) for arrhythmias, and prolonged CPR.",
    },
    {
      id: "surgery-office-spinal-anaesthesia-c7",
      front: "Define baricity and state what hyperbaric, isobaric and hypobaric solutions do.",
      back: "Baricity is the density of the solution relative to CSF at 37 degrees C (CSF 1.0003-1.0009 g/mL). Hyperbaric (bupivacaine in 8 percent dextrose) sinks with gravity; isobaric (plain bupivacaine) stays near the injection site giving a longer, more stable block; hypobaric (bupivacaine in sterile water) rises - used for hip surgery lateral with the operative side up and perianal surgery in the prone jack-knife position.",
    },
    {
      id: "surgery-office-spinal-anaesthesia-c8",
      front: "For how long can posture change the height of a spinal block, and where does a supine hyperbaric block settle?",
      back: "Posture matters only for the first 15-20 minutes, until the block is fixed. Supine, hyperbaric drug runs down the lumbar lordosis into the thoracic kyphotic trough at T4-T6, which is where an unmodified block tends to settle. Sitting for 3-5 minutes gives a saddle block (S2-S5).",
    },
    {
      id: "surgery-office-spinal-anaesthesia-c9",
      front: "Which sensory levels are needed for which operations?",
      back: "Caesarean section T4; hernia and upper abdominal surgery T6; TURP, hip surgery and vaginal delivery T10; lower limb T12; perineal and anorectal surgery S2-S5. Landmarks: T4 nipple, T6 xiphisternum, T8 lower costal margin, T10 umbilicus, L1 inguinal ligament.",
    },
    {
      id: "surgery-office-spinal-anaesthesia-c10",
      front: "How do you test the level of a spinal block, and in what order?",
      back: "Cold (ice or ethyl chloride) first, then pinprick, then light touch, both sides, recording the highest dermatome and the time. Cold is 1-2 segments higher than pinprick, and pinprick 1-2 segments higher than touch. Motor block is graded on the modified Bromage scale.",
    },
    {
      id: "surgery-office-spinal-anaesthesia-c11",
      front: "Phenylephrine or ephedrine for hypotension after an obstetric spinal?",
      back: "Phenylephrine is first line - infusion 25-50 mcg/min or boluses of 50-100 mcg - because it preserves fetal acid-base status better; it causes reflex bradycardia. Ephedrine 6 mg IV (5-10 mg) is preferred when hypotension is accompanied by bradycardia. Noradrenaline 4-6 mcg boluses is an accepted alternative. Add left uterine displacement and a crystalloid co-load of 10-15 mL/kg given at the moment of injection.",
    },
    {
      id: "surgery-office-spinal-anaesthesia-c12",
      front: "Give the ASRA 2018 waiting times before a neuraxial block for the common antithrombotics.",
      back: "Aspirin and NSAIDs alone - no delay. LMWH: 12 hours prophylactic, 24 hours therapeutic. Subcutaneous unfractionated heparin 5000 units: 4-6 hours. Warfarin: 5 days with INR 1.4 or less. Clopidogrel and ticagrelor 5-7 days, prasugrel 7-10 days. Rivaroxaban and apixaban 72 hours; dabigatran 72-120 hours by renal function. Fondaparinux 36-42 hours. European (ESAIC) intervals differ slightly - name the guideline you follow.",
    },
  ],
  references: [
    "Gropper MA (ed). Miller's Anesthesia, 9th edition, 2020 - Spinal, Epidural and Caudal Anesthesia.",
    "Butterworth JF, Mackey DC, Wasnick JD. Morgan and Mikhail's Clinical Anesthesiology, 6th edition, 2018 - Spinal, Epidural and Caudal Blocks.",
    "Yadav A. Short Textbook of Anaesthesia, 6th edition, 2019 - Subarachnoid (Spinal) Block.",
    "Horlocker TT et al. Regional Anesthesia in the Patient Receiving Antithrombotic or Thrombolytic Therapy: ASRA Evidence-Based Guidelines, 4th edition. Reg Anesth Pain Med 2018;43:263-309.",
    "Kinsella SM et al. International consensus statement on the management of hypotension with vasopressors during caesarean section under spinal anaesthesia. Anaesthesia 2018;73:71-92.",
  ],
});

export default topics;
