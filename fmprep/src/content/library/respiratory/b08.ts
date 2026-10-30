import type { Topic } from "../../../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "respiratory-mechanical-ventilation",
  title: "Mechanical ventilation basics for the physician",
  frequency: "common",
  oneLiner:
    "**Invasive mechanical ventilation** is positive-pressure support through an endotracheal or tracheostomy tube for patients who cannot **protect the airway, oxygenate or ventilate**; it is started with **lung-protective settings (tidal volume 6-8 mL/kg predicted body weight, plateau pressure under 30 cmH2O)**, adjusted to the ABG, troubleshot with **DOPE**, and ended as early as possible by a daily **spontaneous breathing trial** while the **VAP bundle** prevents its commonest complication.",
  keywords: [
    "mechanical ventilation",
    "ventilator",
    "rapid sequence intubation",
    "RSI",
    "volume control",
    "pressure control",
    "pressure support ventilation",
    "SIMV",
    "PEEP",
    "plateau pressure",
    "driving pressure",
    "auto-PEEP",
    "DOPE mnemonic",
    "spontaneous breathing trial",
    "RSBI",
    "weaning",
    "ventilator-associated pneumonia bundle",
    "predicted body weight",
    "ABCDEF bundle",
    "tracheostomy",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "**Invasive mechanical ventilation (IMV)** delivers positive-pressure breaths through an **endotracheal tube or tracheostomy** to replace or assist the work of the respiratory muscles and to improve gas exchange. [Harrison 22e]",
        "**Non-invasive ventilation (NIV)** gives the same support through a mask; it is first-line in hypercapnic COPD exacerbation and cardiogenic pulmonary oedema and is covered in the COPD exacerbation topic, while this topic deals with **intubated patients**. [ERS/ATS 2017]",
        "In the international Esteban cohort about **one-third of ICU patients needed IMV**, the main reasons being acute respiratory failure (about two-thirds), coma and COPD exacerbation, and hospital mortality of ventilated patients was about **31%**. [Esteban JAMA 2002]",
        "In India the common reasons a district or medical college ICU ventilates are **organophosphate poisoning, neurotoxic snake bite (krait), sepsis with pneumonia, Guillain-Barre syndrome, tetanus, head injury and severe COPD or asthma** - several are reversible with good ventilator care alone. [ISCCM 2020]",
        "**Ventilator-associated pneumonia** in Indian ICUs is dominated by **carbapenem-resistant Acinetobacter baumannii and Klebsiella pneumoniae**, with carbapenem resistance in A. baumannii over 80% in the ICMR antimicrobial resistance network - prevention matters more than any antibiotic. [ICMR AMRSN 2023]",
        "**Prolonged mechanical ventilation** is defined as ventilation for **21 days or more for at least 6 hours a day**; these patients usually need a tracheostomy and long-term weaning facility. [NAMDRC 2005]",
      ],
    },
    {
      heading: "Indications for intubation and ventilation",
      points: [
        "**Failure to protect the airway**: GCS **8 or less**, absent gag or cough, pooling secretions or vomitus, as in head injury, stroke, overdose and OP poisoning. [Harrison 22e]",
        "**Failure of oxygenation**: SpO2 under 90% (PaO2 under 60 mmHg) despite high-flow oxygen, HFNO or NIV, or a **PaO2/FiO2 ratio falling below 150** with rising work of breathing. [ESICM 2023]",
        "**Failure of ventilation**: acute respiratory acidosis with **pH under 7.25 and rising PaCO2** despite NIV, or a drowsy patient who cannot tolerate the mask. [BTS/ICS 2016]",
        "**Excessive work of breathing**: respiratory rate over 35, use of accessory muscles, **paradoxical abdominal movement**, inability to speak and exhaustion - intubate before the arrest, not after it. [Harrison 22e]",
        "**Neuromuscular failure**: in Guillain-Barre syndrome and myasthenia the **20/30/40 rule** - vital capacity under 20 mL/kg, maximal inspiratory pressure weaker than -30 cmH2O, or maximal expiratory pressure under 40 cmH2O - predicts the need for ventilation. [AAN 2023]",
        "**Anticipated course**: shock with lactic acidosis, airway burns or angioedema, severe agitation needing CT or procedures, and transfer of an unstable patient over long distances. [Harrison 22e]",
        "**Failure of NIV** - no improvement in pH, PaCO2 or respiratory rate after **1-2 hours**, or worsening at any time - is itself an indication; delayed intubation after failed NIV or HFNO increases mortality. [ERS/ATS 2017]",
      ],
    },
    {
      heading: "Physiology: why positive pressure helps and how it harms",
      points: [
        "**Equation of motion**: airway pressure = (flow x resistance) + (volume / compliance) + PEEP, so the ventilator pressure reflects both the airway (resistance) and the lung and chest wall (compliance) - the basis of all troubleshooting. [Harrison 22e]",
        "**Peak pressure** is measured during inspiratory flow and rises with resistance or poor compliance; **plateau pressure** is measured during a **0.5-second end-inspiratory hold** with no flow and reflects only alveolar pressure (compliance). [Harrison 22e]",
        "**Driving pressure** = plateau pressure minus PEEP (= tidal volume / respiratory system compliance); a value **under 15 cmH2O** is associated with lower mortality in ARDS. [Amato NEJM 2015]",
        "**PEEP** keeps alveoli open at end-expiration, recruits collapsed lung, reduces shunt and improves oxygenation, but high PEEP reduces venous return and can overdistend normal lung. [Harrison 22e]",
        "**Haemodynamics**: positive intrathoracic pressure reduces **venous return (RV preload)** and LV afterload - post-intubation hypotension is common in the hypovolaemic septic patient, while the failing LV benefits. [Harrison 22e]",
        "**Ventilator-induced lung injury (VILI)** has four parts: **volutrauma** (overstretch), **barotrauma** (air leak), **atelectrauma** (repetitive opening and closing) and **biotrauma** (cytokine release spreading to other organs). [ESICM 2023]",
        "**Predicted body weight** sets tidal volume because lung size depends on height and sex, not on fat: men **50 + 0.91 x (height cm - 152.4)** kg, women **45.5 + 0.91 x (height cm - 152.4)** kg. [ARDSNet NEJM 2000]",
        "**Auto-PEEP (intrinsic PEEP)** occurs when expiration is incomplete before the next breath, as in asthma and COPD; trapped gas raises intrathoracic pressure, causes hypotension and makes triggering hard. [Harrison 22e]",
      ],
    },
    {
      heading: "Rapid sequence intubation - the essentials",
      points: [
        "**Prepare (SOAP-ME)**: Suction, Oxygen, Airway devices (laryngoscope, bougie, supraglottic airway, tube 7.0-7.5 in women and 7.5-8.0 in men), Positioning (ear-to-sternal-notch), Monitoring and **waveform capnography**, Medicines drawn and labelled. [DAS 2018]",
        "**Pre-oxygenate for 3 minutes** (or 8 vital-capacity breaths) with a tight-fitting mask or NIV; **NIV pre-oxygenation reduced peri-intubation hypoxaemia** compared with face-mask oxygen in the PREOXI trial, and nasal cannula oxygen during apnoea extends safe apnoea time. [PREOXI NEJM 2024]",
        "**Resuscitate before induction**: fluid bolus, push-dose or infused **noradrenaline** ready, because induction plus positive pressure can cause cardiac arrest in shock. [SCCM RSI 2023]",
        "**Induction agents**: **ketamine 1-2 mg/kg IV** (keeps BP, bronchodilates - asthma, shock), **etomidate 0.2-0.3 mg/kg IV** (haemodynamically neutral, single-dose adrenal suppression), **propofol 1-2 mg/kg IV** (hypotension - reduce dose in shock). [SCCM RSI 2023]",
        "**Paralytics**: **succinylcholine 1-1.5 mg/kg IV** (onset 45-60 s, lasts 8-10 min) or **rocuronium 1.2 mg/kg IV** (onset 60 s, lasts 45-70 min; reversed by **sugammadex 16 mg/kg**); SCCM found no clear difference in first-pass success between them. [SCCM RSI 2023]",
        "**Avoid succinylcholine** in hyperkalaemia, burns or crush injury after 24-48 hours, denervation (GBS, spinal cord injury, stroke after days), myopathies and a history of **malignant hyperthermia**. [Goodman and Gilman 14e]",
        "**Video laryngoscopy** increased first-attempt success over direct laryngoscopy in critically ill adults (DEVICE trial) - use it where available, but every physician must also be competent with a Macintosh blade. [DEVICE NEJM 2023]",
        "**Confirm tube position** with sustained **waveform capnography (end-tidal CO2 trace for at least 6 breaths)**, bilateral chest rise and auscultation, then chest X-ray (tip 3-5 cm above the carina, tube at about **21 cm at the teeth in women, 23 cm in men**); no trace means wrong place. [DAS 2018]",
      ],
    },
    {
      heading: "Modes of ventilation - the classification examiners ask",
      points: [
        "**Assist-control volume control (VC-AC)**: the clinician sets tidal volume, rate, flow and PEEP; every breath, triggered or not, receives the full set volume - **pressure varies with lung mechanics**, so a rising peak pressure is a warning. [Harrison 22e]",
        "**Pressure control (PC-AC)**: the clinician sets inspiratory pressure, inspiratory time, rate and PEEP; **tidal volume varies** with compliance and resistance, so a falling minute volume is the warning; decelerating flow may improve comfort and distribution. [Harrison 22e]",
        "**Pressure support ventilation (PSV)**: a purely spontaneous mode - the patient triggers each breath, the ventilator adds a set pressure (usually 5-15 cmH2O), and the breath **cycles off when flow falls to about 25% of peak**; no backup rate, so apnoea alarms are essential. [Harrison 22e]",
        "**Synchronised intermittent mandatory ventilation (SIMV)**: a set number of mandatory breaths synchronised to the patient, with spontaneous (often pressure-supported) breaths in between; SIMV as a weaning mode **prolongs weaning** compared with PSV or T-piece trials. [ATS/CHEST 2017]",
        "**CPAP**: a constant pressure throughout the cycle with spontaneous breaths only - used with or without pressure support during a spontaneous breathing trial. [Harrison 22e]",
        "**Dual and advanced modes**: **PRVC** (pressure-regulated volume control, a pressure breath adjusted to reach a target volume), **APRV** (airway pressure release ventilation) and **NAVA** are specialist modes; none has shown a mortality benefit over well-applied VC or PC. [ESICM 2023]",
        "**Triggering**: flow trigger (1-3 L/min) or pressure trigger (-1 to -2 cmH2O); too sensitive causes auto-triggering from circuit leak or cardiac oscillation, too insensitive causes **ineffective efforts and asynchrony**. [Harrison 22e]",
      ],
    },
    {
      heading: "Initial ventilator settings after intubation",
      points: [
        "**Mode**: VC-AC (or PC-AC) for the first 24 hours in most patients, with full rest of the respiratory muscles while the cause is treated. [Harrison 22e]",
        "**Tidal volume 6-8 mL/kg predicted body weight** in everyone, and **6 mL/kg (range 4-8)** in ARDS - large tidal volumes injure even normal lungs. [ESICM 2023]",
        "**Respiratory rate 14-20/min**, higher (up to 30-35) in metabolic acidosis to match the patient's pre-intubation minute ventilation, and lower (**10-12**) in asthma and COPD to allow full expiration. [Harrison 22e]",
        "**PEEP 5 cmH2O** to start, raised with FiO2 using the ARDSNet PEEP-FiO2 table in hypoxaemic failure. [ARDSNet NEJM 2000]",
        "**FiO2 1.0 immediately after intubation**, then titrated down within 30-60 minutes to **SpO2 92-96%** (88-92% in hypercapnic COPD) - hyperoxia is not harmless. [BTS 2017]",
        "**Inspiratory flow 60 L/min with an I:E of 1:2** in most; in obstructive disease use **high flow (80-100 L/min) and I:E of 1:4 or 1:5** to lengthen expiration. [Harrison 22e]",
        "**Check at 15-30 minutes**: ABG, plateau pressure (target **under 30 cmH2O**), driving pressure (**under 15**), BP, and the chest X-ray for tube position and pneumothorax. [ESICM 2023]",
        "**Write the sedation and analgesia plan** at the same time: analgesia-first with **fentanyl 25-100 microgram/h**, then light sedation with **propofol 0.3-3 mg/kg/h or dexmedetomidine 0.2-1.4 microgram/kg/h**, target **RASS -2 to 0**; avoid benzodiazepine infusions. [SCCM PADIS 2018]",
      ],
    },
    {
      heading: "ABG-guided adjustment",
      points: [
        "**Ventilation (PaCO2) is changed by minute ventilation** (rate x tidal volume): new rate = current rate x current PaCO2 / desired PaCO2 - change rate first because tidal volume is fixed by lung protection. [Harrison 22e]",
        "**Oxygenation (PaO2) is changed by FiO2 and mean airway pressure** (PEEP, inspiratory time); aim for **PaO2 60-80 mmHg or SpO2 92-96%** and bring FiO2 under 0.6 as soon as possible. [ESICM 2023]",
        "**Permissive hypercapnia**: accept PaCO2 above normal if **pH stays 7.20 or above** to keep plateau pressure and tidal volume safe - contraindicated in raised intracranial pressure and severe pulmonary hypertension. [ESICM 2023]",
        "**In COPD, ventilate to the patient's usual PaCO2 and a normal pH**, not to 40 mmHg - normalising PaCO2 in a chronic retainer causes **post-hypercapnic metabolic alkalosis**, seizures and failed weaning. [BTS/ICS 2016]",
        "**In severe metabolic acidosis** (DKA, salicylate, methanol, sepsis) the patient's own minute ventilation may be 20-30 L/min; set a high rate and check the ABG within 30 minutes, because a 'normal' rate causes catastrophic acidaemia and arrest. [Harrison 22e]",
        "**In raised intracranial pressure** keep **PaCO2 35-40 mmHg**; brief hyperventilation to 30-35 mmHg is a bridge only for impending herniation, as cerebral vasoconstriction causes ischaemia. [BTF 2016]",
        "**Respiratory alkalosis on the ventilator** (pain, anxiety, fever, sepsis, over-setting) is corrected by treating the cause and reducing the set rate; if the patient is overbreathing the set rate, the problem is the patient, not the ventilator. [Harrison 22e]",
      ],
    },
    {
      heading: "Pressures and troubleshooting - DOPE",
      points: [
        "**High peak pressure with a normal plateau (peak-plateau gap over 10 cmH2O)** means **high airway resistance**: kinked or bitten tube, secretions, bronchospasm or small tube - suction, bite block, bronchodilator. [Harrison 22e]",
        "**High peak and high plateau pressure** means **low compliance**: pneumothorax, right main-bronchus intubation, ARDS or pulmonary oedema, atelectasis, abdominal distension, or **auto-PEEP**. [Harrison 22e]",
        "**Low peak pressure with a low exhaled volume** means a **leak or disconnection**: cuff leak, extubation, circuit disconnection or bronchopleural fistula. [Harrison 22e]",
        "**DOPE** for sudden desaturation or rising pressure: **Displacement** of the tube, **Obstruction** (secretions, kink, biting), **Pneumothorax**, **Equipment failure** (oxygen supply, circuit, ventilator); add **S for stacked breaths** (auto-PEEP). [AHA PALS 2020]",
        "**First action**: disconnect from the ventilator and **hand-ventilate with 100% oxygen** with a bag - if the patient improves, the problem is the ventilator or circuit; if bagging is hard, the problem is the tube or the patient. [Harrison 22e]",
        "**Then**: check capnography trace and tube length at the teeth, pass a suction catheter (it will not pass a blocked tube), auscultate both sides, look at the trachea and neck veins; **tension pneumothorax** is decompressed by needle in the 4th-5th intercostal space mid-axillary line followed by a chest drain. [ATLS 2018]",
        "**Auto-PEEP** is measured with a **0.5-1 second end-expiratory hold**; treat by **disconnecting briefly to let the chest empty**, lowering rate and tidal volume, shortening inspiratory time, and bronchodilating. [Harrison 22e]",
        "**Patient-ventilator asynchrony** (double triggering, ineffective efforts, flow starvation) causes distress and wasted work; adjust trigger, flow and inspiratory time before deepening sedation. [Harrison 22e]",
      ],
    },
    {
      heading: "Daily care of the ventilated patient - ABCDEF and the VAP bundle",
      points: [
        "**ABCDEF (ICU Liberation) bundle**: **A**ssess and treat pain, **B**oth spontaneous awakening and breathing trials, **C**hoice of sedation (light, non-benzodiazepine), **D**elirium assess and prevent (CAM-ICU), **E**arly mobility, **F**amily engagement - full compliance lowers mortality and delirium. [SCCM PADIS 2018]",
        "**Head of bed elevated 30-45 degrees** unless contraindicated - reduces aspiration of gastric contents. [SHEA/IDSA 2022]",
        "**Daily sedation interruption paired with an SBT** (the ABC trial approach) shortens ventilation and ICU stay. [SHEA/IDSA 2022]",
        "**Oral care with toothbrushing** is recommended; **routine chlorhexidine mouthwash is no longer recommended** because of a possible mortality signal. [SHEA/IDSA 2022]",
        "**Subglottic secretion drainage tubes** for patients expected to need ventilation over **48-72 hours**, cuff pressure kept at **20-30 cmH2O**, and circuits changed only when **visibly soiled or malfunctioning**. [SHEA/IDSA 2022]",
        "**Early enteral nutrition** within 24-48 hours, **thromboprophylaxis** (enoxaparin 40 mg SC daily or unfractionated heparin 5000 units SC 8-12 hourly), and glucose kept at 140-180 mg/dL. [SCCM/ASPEN 2022]",
        "**Stress ulcer prophylaxis**: **pantoprazole 40 mg IV daily** reduced clinically important upper GI bleeding without changing mortality in ventilated patients (REVISE); stop when the patient is extubated and eating. [REVISE NEJM 2024]",
        "**Avoid intubation and re-intubation** where possible (NIV, HFNO), and use the oral not the nasal route - the strongest VAP prevention is a shorter time on the tube. [SHEA/IDSA 2022]",
      ],
    },
    {
      heading: "Weaning: readiness, spontaneous breathing trial and extubation",
      points: [
        "**Screen every morning for readiness**: cause improving, **PaO2/FiO2 150-200 or more on PEEP 5-8 and FiO2 0.4-0.5 or less**, pH 7.25 or above, haemodynamically stable on no or low-dose vasopressor, and able to initiate breaths. [ATS/CHEST 2017]",
        "**Spontaneous breathing trial (SBT)** for **30-120 minutes** on **pressure support 5-8 cmH2O with PEEP 5** (preferred - more patients pass and are extubated) or on a T-piece. [ATS/CHEST 2017]",
        "**SBT failure criteria**: respiratory rate over 35 for 5 minutes, **SpO2 under 90%**, heart rate over 140 or a 20% change, SBP over 180 or under 90, agitation, sweating, accessory muscle use or a fall in consciousness - stop the trial and rest the patient on full support. [ATS/CHEST 2017]",
        "**Rapid shallow breathing index (RSBI)** = respiratory rate / tidal volume in litres; **under 105** predicts successful weaning (Yang-Tobin), but it is a screen, not a substitute for the SBT. [Yang-Tobin NEJM 1991]",
        "**Before extubation** check cough strength, secretion volume (suctioning more often than every 2 hours predicts failure) and mental status; do a **cuff-leak test** in high-risk patients (traumatic intubation, over 6 days on the tube, large tube, women). [ATS/CHEST 2017]",
        "**Failed cuff leak**: give **systemic corticosteroids at least 4 hours before extubation** (for example methylprednisolone 20 mg IV 4-hourly, started 12 hours before) to reduce post-extubation stridor. [ATS/CHEST 2017]",
        "**High-risk patients** (age over 65, cardiac disease, COPD, hypercapnia during SBT) should be **extubated directly to NIV or high-flow nasal oxygen**; NIV is not a rescue for established post-extubation failure, which needs re-intubation. [ERS/ATS 2017]",
        "**Extubation failure** (re-intubation within 48-72 hours) occurs in about **10-20%** and carries high mortality; consider **tracheostomy** if weaning is prolonged - early tracheostomy (day 1-4) did not reduce mortality in TracMan. [TracMan JAMA 2013]",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**Acute severe asthma**: ketamine induction, large tube, **low rate (10-12), tidal volume 6-8 mL/kg, high flow and long expiration**, accept PaCO2 rise with pH over 7.20, and measure auto-PEEP and plateau pressure often. [GINA 2025]",
        "**COPD**: low minute ventilation, long expiratory time, apply extrinsic PEEP at about 80% of measured auto-PEEP to ease triggering, and plan early extubation to NIV. [GOLD 2025]",
        "**ARDS**: 6 mL/kg PBW, plateau under 30, higher PEEP in moderate-severe disease, **prone positioning for 16 hours a day if PaO2/FiO2 under 150**; the full protocol is in the ARDS topic. [ATS 2024]",
        "**Pregnancy**: difficult airway (oedema, aspiration risk), use a smaller tube (6.0-7.0), left uterine displacement, and target the **pregnancy-normal PaCO2 of 30-32 mmHg**; foetal oxygenation needs maternal PaO2 over 70 mmHg. [Williams Obstetrics 26e]",
        "**Obesity**: tidal volume by height (PBW), not actual weight; ramped position for intubation, higher PEEP to offset chest wall load, and reverse Trendelenburg. [ESICM 2023]",
        "**Organophosphate poisoning (common in India)**: ventilate for respiratory failure at presentation or the **intermediate syndrome** (neck flexor and proximal weakness at 24-96 hours); continue atropine titration to dry chest, and wean by neck-lift and cough strength. [ICMR STW 2023]",
        "**Neurotoxic snake bite (krait, cobra)**: ventilation for ptosis progressing to neck and respiratory weakness; patients recover fully with ventilation and antivenom, so **never withhold ventilation** in a district hospital - even manual bagging saves life. [MoHFW SBE 2017]",
        "**Elderly and frail**: discuss goals of care and the likely outcome with the family before or soon after intubation; frailty predicts prolonged ventilation and poor long-term function. [Harrison 22e]",
      ],
    },
    {
      heading: "Complications and prognosis",
      points: [
        "**Airway**: tube displacement, oesophageal or main-bronchus intubation, cuff injury, **post-extubation stridor**, and late **tracheal stenosis or tracheomalacia** after prolonged intubation. [Harrison 22e]",
        "**Lung**: barotrauma (pneumothorax, pneumomediastinum), VILI, atelectasis, **oxygen toxicity** and **ventilator-associated pneumonia** (pneumonia after 48 hours on the ventilator). [Harrison 22e]",
        "**Cardiovascular**: post-intubation hypotension and arrest, reduced cardiac output from high PEEP or auto-PEEP, and venous thromboembolism. [Harrison 22e]",
        "**Muscle and nerve**: **ventilator-induced diaphragm dysfunction** begins within 24-48 hours of full rest, and **ICU-acquired weakness** (critical illness polyneuropathy and myopathy) prolongs weaning. [Harrison 22e]",
        "**Brain**: **delirium** in up to 60-80% of ventilated patients, linked to benzodiazepines and deep sedation, and long-term cognitive impairment (post-intensive care syndrome). [SCCM PADIS 2018]",
        "**Gut and other**: stress ulcer bleeding, ileus, sinusitis (nasal tubes), pressure injuries and **acalculous cholecystitis**. [Harrison 22e]",
        "**Prognosis** depends on the cause: drug overdose and OP poisoning have good outcomes, while ARDS (about 35-45% mortality), sepsis with multiorgan failure and end-stage lung disease have poor outcomes. [LUNG SAFE JAMA 2016]",
      ],
    },
    {
      heading: "Referral, transfer and follow-up",
      points: [
        "A district hospital without an ICU should **intubate, stabilise and transfer** with a transport ventilator or bag, oxygen for twice the journey time, capnography and a trained escort; never transfer an unsecured failing airway. [ISCCM 2020]",
        "**Refer early to a tertiary ICU** for ARDS needing prone ventilation or ECMO assessment, refractory hypoxaemia (PaO2/FiO2 under 80 despite optimisation), or prolonged weaning. [ATS 2024]",
        "**Monitor** every ventilated patient with continuous SpO2 and ECG, **end-tidal CO2**, plateau and peak pressure each shift, ABG at least daily and after changes, and a daily chest X-ray only when clinically indicated. [Harrison 22e]",
        "**After discharge** screen ICU survivors for **post-intensive care syndrome** - weakness, cognitive decline, anxiety, depression and PTSD - and for tracheal stenosis (stridor or effort dyspnoea weeks after extubation). [SCCM 2012]",
        "**Tracheostomy patients at home**: teach the family suction, tube care and humidification, and what to do if the tube blocks or falls out; review at an ENT or pulmonology clinic for decannulation. [Harrison 22e]",
      ],
    },
    {
      heading: "Prevention and counselling",
      points: [
        "**Prevent intubation** where you can: early recognition of respiratory failure, timely **NIV for hypercapnic COPD**, HFNO for hypoxaemic failure, and treating the cause early. [ERS/ATS 2017]",
        "**Prevent the commonest Indian causes**: pesticide safe-storage and restriction (OP poisoning), sleeping under a net or on a raised cot (krait bite), tetanus immunisation, and seat-belt and helmet use (head injury). [MoHFW 2024]",
        "**Advance care planning** for end-stage COPD, ILD, cancer and frailty: document wishes about intubation before the crisis; Indian law permits withholding or withdrawing life support under the **Supreme Court 2018 and 2023 guidance on advance directives**. [Supreme Court of India 2023]",
        "**Counsel families** in plain words: the ventilator supports breathing while the illness is treated, it does not cure; explain daily trials of weaning, the tube's discomfort and the risk of infection. [Harrison 22e]",
        "**Hand hygiene, closed suction systems and antimicrobial stewardship** reduce VAP and the spread of carbapenem-resistant organisms in the ICU. [ICMR AMSP 2023]",
      ],
    },
    {
      heading: "Latest guideline updates (2023-2026)",
      points: [
        "**ESICM 2023 ARDS guideline**: low tidal volume (4-8 mL/kg PBW) and **prone position for at least 16 hours** in moderate-severe ARDS; recommends against routine prolonged high-pressure recruitment manoeuvres. [ESICM 2023]",
        "**ATS 2024 ARDS update**: suggests **corticosteroids** for ARDS, **VV-ECMO** in selected severe ARDS, **neuromuscular blockade** in early severe ARDS, and higher PEEP without prolonged recruitment manoeuvres. [ATS 2024]",
        "**SCCM 2023 RSI guideline**: no recommendation favouring etomidate over other induction agents, and no difference between **rocuronium and succinylcholine** for first-pass success. [SCCM RSI 2023]",
        "**Trials changing practice**: **DEVICE (2023)** - video laryngoscopy improves first-pass success; **PREOXI (2024)** - NIV pre-oxygenation reduces hypoxaemia; **REVISE (2024)** - pantoprazole reduces GI bleeding in ventilated patients. [NEJM 2023-2024]",
        "**SHEA/IDSA/APIC 2022 VAE compendium**: essential practices are avoiding intubation, minimising sedation, **paired SAT and SBT**, early mobility, toothbrushing, head-up and subglottic drainage; chlorhexidine oral care was dropped. [SHEA/IDSA 2022]",
        "**ERS 2023 and ESICM 2023** support **HFNO or NIV after extubation** in patients at high risk of failure; the choice between them depends on hypercapnia and tolerance. [ESICM 2023]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "**Classic viva**: 'Peak pressure is high - what do you do?' Answer with the **peak-plateau logic** and DOPE, starting by disconnecting and hand-bagging with 100% oxygen. [Harrison 22e]",
        "**Common mistake**: setting tidal volume by actual body weight - always calculate **predicted body weight from height**. [ARDSNet NEJM 2000]",
        "**Common mistake**: 'normalising' PaCO2 in a COPD retainer, or using a normal respiratory rate after intubating a patient with DKA. [Harrison 22e]",
        "**Remember the targets**: VT 6-8 mL/kg PBW, plateau under 30, driving pressure under 15, SpO2 92-96%, pH over 7.20, cuff pressure 20-30, head-up 30-45 degrees. [ESICM 2023]",
        "**Weaning one-liner**: daily screen, **SAT then SBT on PS 5-8 for 30-120 minutes**, extubate if passed, high-risk to NIV or HFNO; RSBI under 105. [ATS/CHEST 2017]",
        "**Mode one-liner**: in volume control watch the pressure, in pressure control watch the volume. [Harrison 22e]",
      ],
    },
  ],
  tables: [
    {
      heading: "Drugs used for intubation and sedation of the ventilated adult",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        ["Ketamine", "1-2 mg/kg IV for induction", "Onset 30-60 s, lasts 10-15 min; infusion 0.5-2 mg/kg/h for sedation", "Raises BP and HR (preferred in shock, asthma); emergence reactions; caution in uncontrolled hypertension, ACS"],
        ["Etomidate", "0.2-0.3 mg/kg IV", "Single dose; onset 30-60 s", "Haemodynamically neutral; transient adrenal suppression; myoclonus"],
        ["Propofol", "1-2 mg/kg IV induction; 0.3-3 mg/kg/h infusion", "Titrate to RASS -2 to 0", "Hypotension, propofol infusion syndrome over 4 mg/kg/h for over 48 h; check triglycerides"],
        ["Succinylcholine", "1-1.5 mg/kg IV", "Onset 45-60 s, lasts 8-10 min", "Hyperkalaemia; avoid in burns/crush after 24-48 h, denervation, myopathy, malignant hyperthermia"],
        ["Rocuronium", "1.2 mg/kg IV for RSI", "Onset 60 s, lasts 45-70 min; reversal sugammadex 16 mg/kg", "Prolonged paralysis means sedation must be ensured; anaphylaxis rare"],
        ["Fentanyl", "25-100 microgram/h IV infusion (bolus 25-50 microgram)", "Analgesia-first; daily interruption", "Respiratory depression, chest wall rigidity with fast bolus, ileus"],
        ["Dexmedetomidine", "0.2-1.4 microgram/kg/h IV (no loading dose in ICU)", "Light sedation, rousable; helps delirium and weaning", "Bradycardia, hypotension; avoid in heart block"],
        ["Noradrenaline (peri-intubation)", "0.05-0.5 microgram/kg/min IV infusion", "Start before induction in shock", "Peripheral line only short-term; extravasation necrosis"],
      ],
    },
    {
      heading: "Modes of ventilation compared",
      columns: ["Mode", "Clinician sets", "Varies with lung mechanics", "Best use / caution"],
      rows: [
        ["Volume control (VC-AC)", "Tidal volume, rate, flow, PEEP, FiO2", "Peak and plateau pressure", "Initial mode, ARDS lung protection; watch pressures"],
        ["Pressure control (PC-AC)", "Inspiratory pressure, Ti, rate, PEEP, FiO2", "Tidal volume and minute volume", "Pressure-limited ventilation, leaks; watch volumes"],
        ["Pressure support (PSV)", "Support pressure, PEEP, trigger, cycle %", "Tidal volume, rate (patient-set)", "Weaning and SBT; no backup rate - apnoea alarm"],
        ["SIMV", "Mandatory rate and volume or pressure, plus PS", "Spontaneous breath size", "Older mode; slows weaning compared with PSV or T-piece"],
        ["CPAP", "Constant pressure only", "Everything else is the patient's", "SBT, NIV for pulmonary oedema and OSA"],
        ["PRVC / APRV", "Target volume (PRVC) or high and low pressure (APRV)", "Pressure (PRVC); volume (APRV)", "Specialist use; no proven mortality benefit"],
      ],
    },
    {
      heading: "Reading airway pressures - differential diagnosis at the bedside",
      columns: ["Pattern", "Meaning", "Causes", "Immediate action"],
      rows: [
        ["High peak, normal plateau", "Raised airway resistance", "Kinked or bitten tube, secretions, bronchospasm, small tube", "Suction, bite block, bronchodilator"],
        ["High peak, high plateau", "Low respiratory system compliance", "Pneumothorax, main-bronchus intubation, ARDS, oedema, abdominal distension, auto-PEEP", "Examine chest, check tube depth, X-ray or ultrasound, decompress if tension"],
        ["Low peak, low exhaled volume", "Leak", "Cuff leak, disconnection, extubation, bronchopleural fistula", "Check connections, cuff pressure and capnography trace"],
        ["Rising auto-PEEP", "Air trapping", "Asthma, COPD, high rate, long inspiratory time", "Disconnect briefly, lower rate, lengthen expiration, bronchodilate"],
        ["Sudden desaturation, any pressure", "DOPE", "Displacement, Obstruction, Pneumothorax, Equipment failure", "Hand-bag with 100% oxygen and work through DOPE"],
      ],
    },
    {
      heading: "Initial settings and targets - cut-offs to remember",
      columns: ["Parameter", "Starting setting", "Target / limit", "Adjust when"],
      rows: [
        ["Tidal volume", "6-8 mL/kg PBW (6 in ARDS)", "Plateau under 30 cmH2O", "Plateau over 30 - reduce by 1 mL/kg to minimum 4"],
        ["Respiratory rate", "14-20/min (10-12 obstructive; high in metabolic acidosis)", "pH 7.30-7.45 (over 7.20 permissive)", "Use new RR = RR x PaCO2 / desired PaCO2"],
        ["PEEP", "5 cmH2O", "Driving pressure under 15", "Raise with FiO2 by ARDSNet table in hypoxaemia"],
        ["FiO2", "1.0 at intubation", "SpO2 92-96% (88-92% in COPD)", "Wean below 0.6 quickly"],
        ["I:E ratio", "1:2", "No auto-PEEP", "1:4-1:5 in asthma or COPD"],
        ["Cuff pressure", "20-30 cmH2O", "No leak, no mucosal ischaemia", "Check each shift"],
        ["SBT readiness", "PEEP 8 or less, FiO2 0.5 or less", "PaO2/FiO2 150-200 or more, RSBI under 105", "Screen every morning"],
      ],
    },
  ],
  redFlags: [
    "Sudden desaturation or loss of the capnography trace in a ventilated patient - tube displacement until proved otherwise",
    "Rising peak and plateau pressure with hypotension and unilateral absent breath sounds - tension pneumothorax",
    "Hypotension or arrest within minutes of intubation in a septic or hypovolaemic patient",
    "GCS 8 or less, pooling secretions or failing NIV after 1-2 hours - intubate now",
    "Neck flexor weakness, falling single-breath count or vital capacity under 20 mL/kg in GBS, OP poisoning or krait bite",
    "Refractory hypoxaemia (PaO2/FiO2 under 80) or plateau over 30 despite protective settings - refer for prone or ECMO",
    "Stridor after extubation or effort dyspnoea weeks later - post-extubation oedema or tracheal stenosis",
  ],
  pearls: [
    "In volume control watch the pressure; in pressure control watch the volume.",
    "Tidal volume follows height (predicted body weight), never actual weight.",
    "High peak with normal plateau is the airway; high peak with high plateau is the lung or pleura.",
    "DOPE: Displacement, Obstruction, Pneumothorax, Equipment - and the first move is to hand-bag with 100% oxygen.",
    "No trace, wrong place: waveform capnography is the only reliable confirmation of tracheal intubation.",
    "Ventilate the COPD patient to his own PaCO2 and a normal pH, not to 40 mmHg.",
    "Match the pre-intubation minute ventilation in metabolic acidosis, or the patient arrests.",
    "SIMV is a poor weaning mode - use daily SBTs on PS 5-8 or T-piece.",
    "Chlorhexidine mouthwash is out; toothbrushing, head-up, paired SAT-SBT and subglottic drainage are in.",
  ],
  mcqs: [
    {
      id: "respiratory-mechanical-ventilation-q1",
      stem: "A 30-year-old man ventilated for asthma on volume control suddenly sets off the high-pressure alarm. Peak pressure is 52 cmH2O and plateau pressure is 22 cmH2O. Breath sounds are equal with widespread wheeze. What is the most likely problem?",
      options: [
        "Right main-bronchus intubation",
        "Tension pneumothorax",
        "Increased airway resistance from bronchospasm or secretions",
        "Worsening lung compliance from pulmonary oedema",
      ],
      answer: 2,
      explanation:
        "A wide peak-plateau gap (30 cmH2O) with a normal plateau means the problem is resistance to flow in the tube or airways - bronchospasm, secretions or a kinked or bitten tube. Pneumothorax, main-bronchus intubation and pulmonary oedema all reduce compliance and raise the plateau pressure along with the peak, and the first two give unequal breath sounds.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-mechanical-ventilation-q2",
      stem: "A 170 cm tall man weighing 95 kg is intubated for ARDS. What initial tidal volume is appropriate?",
      options: [
        "About 570 mL (6 mL/kg actual weight)",
        "About 400 mL (6 mL/kg predicted body weight)",
        "About 760 mL (8 mL/kg actual weight)",
        "About 950 mL (10 mL/kg actual weight)",
      ],
      answer: 1,
      explanation:
        "Predicted body weight for a man is 50 + 0.91 x (170 - 152.4) = about 66 kg, so 6 mL/kg PBW is about 400 mL. Lung size follows height and sex, not fat; using actual weight in an obese patient gives a tidal volume of 570-950 mL that overdistends the lung and raises mortality, as shown by the ARDSNet low tidal volume trial.",
      difficulty: "easy",
    },
    {
      id: "respiratory-mechanical-ventilation-q3",
      stem: "A ventilated patient with a head injury on volume control at a rate of 14/min has PaCO2 60 mmHg. You want PaCO2 of 40 mmHg without changing tidal volume. What new rate should you set?",
      options: ["10/min", "16/min", "18/min", "21/min"],
      answer: 3,
      explanation:
        "PaCO2 is inversely proportional to alveolar ventilation, so new rate = 14 x 60 / 40 = 21/min. A rate of 16 or 18 would leave the patient hypercapnic, which raises intracranial pressure through cerebral vasodilatation, and 10/min would worsen the hypercapnia. Tidal volume is left fixed because it is set for lung protection.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-mechanical-ventilation-q4",
      stem: "During a spontaneous breathing trial on pressure support 5 cmH2O and PEEP 5 cmH2O, a patient has a respiratory rate of 38/min and tidal volume of 280 mL after 20 minutes, with sweating. What is the best next step?",
      options: [
        "Stop the trial, return to full support and look for the cause of failure",
        "Extubate to high-flow nasal oxygen because the trial has lasted 20 minutes",
        "Switch to SIMV with a low mandatory rate to train the muscles",
        "Extubate and give methylprednisolone to prevent stridor",
      ],
      answer: 0,
      explanation:
        "A respiratory rate over 35, a rapid shallow breathing index of about 136 (over 105) and sweating are SBT failure criteria, so the patient goes back to full rest and the reason for failure (fluid overload, secretions, weakness, sedation) is treated before the next daily trial. Extubation now would likely fail, and SIMV is known to prolong weaning compared with daily SBTs; steroids are for a failed cuff-leak test, not for a failed SBT.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-mechanical-ventilation-q5",
      stem: "Which practice is no longer recommended as part of the ventilator-associated pneumonia prevention bundle in the SHEA/IDSA/APIC 2022 compendium?",
      options: [
        "Elevating the head of the bed to 30-45 degrees",
        "Daily paired sedation interruption and spontaneous breathing trials",
        "Routine oral care with chlorhexidine mouthwash",
        "Subglottic secretion drainage in patients ventilated over 48-72 hours",
      ],
      answer: 2,
      explanation:
        "The 2022 compendium removed routine chlorhexidine oral care because meta-analyses showed no VAP benefit outside cardiac surgery and a possible increase in mortality; toothbrushing is advised instead. Head-of-bed elevation, paired SAT and SBT, and subglottic drainage remain recommended practices that shorten ventilation or reduce aspiration.",
      difficulty: "easy",
    },
  ],
  theory: [
    {
      id: "respiratory-mechanical-ventilation-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "common",
      question:
        "Discuss the indications for invasive mechanical ventilation. Describe the common modes, the initial ventilator settings and how you would troubleshoot a ventilated patient who suddenly desaturates.",
      openingLines: [
        "Invasive mechanical ventilation is positive-pressure support through an endotracheal or tracheostomy tube for patients who cannot protect the airway, oxygenate or ventilate.",
        "It is started with lung-protective settings - tidal volume 6-8 mL/kg predicted body weight and plateau pressure under 30 cmH2O - and is troubleshot by peak-plateau logic and DOPE.",
      ],
      answer: [
        {
          heading: "Indications",
          points: [
            "Airway protection: GCS 8 or less, absent gag, secretions.",
            "Hypoxaemic failure: SpO2 under 90% despite HFNO or NIV, PaO2/FiO2 falling below 150 with distress.",
            "Hypercapnic failure: pH under 7.25 with rising PaCO2 despite NIV, or NIV failure at 1-2 hours.",
            "Work of breathing, neuromuscular failure (VC under 20 mL/kg), shock, anticipated course.",
          ],
        },
        {
          heading: "Modes",
          points: [
            "Volume control assist-control: set volume, pressure varies.",
            "Pressure control: set pressure and Ti, volume varies.",
            "Pressure support: spontaneous, flow-cycled at 25% of peak, used for weaning.",
            "SIMV and CPAP; PRVC and APRV as specialist modes.",
          ],
        },
        {
          heading: "Initial settings",
          points: [
            "VC-AC, VT 6-8 mL/kg PBW (6 in ARDS); PBW men 50 + 0.91 x (height - 152.4).",
            "Rate 14-20 (10-12 in asthma/COPD, high in metabolic acidosis), PEEP 5, FiO2 1.0 then to SpO2 92-96%.",
            "Flow 60 L/min, I:E 1:2 (1:4 in obstructive disease).",
            "Check ABG, plateau under 30, driving pressure under 15, chest X-ray at 30 minutes.",
          ],
        },
        {
          heading: "ABG-guided adjustment",
          points: [
            "PaCO2 by minute ventilation: new RR = RR x PaCO2 / target PaCO2.",
            "PaO2 by FiO2 and PEEP; permissive hypercapnia with pH over 7.20.",
          ],
        },
        {
          heading: "Troubleshooting sudden desaturation",
          points: [
            "Disconnect and hand-ventilate with 100% oxygen.",
            "DOPE: Displacement, Obstruction, Pneumothorax, Equipment failure; plus stacked breaths.",
            "High peak with normal plateau = resistance; both high = compliance; low pressures = leak.",
            "Needle decompression and chest drain for tension pneumothorax.",
          ],
        },
        {
          heading: "Care bundle and weaning",
          points: [
            "Head-up 30-45, paired SAT-SBT, toothbrushing, subglottic drainage, DVT and stress ulcer prophylaxis.",
            "Daily SBT on PS 5-8 for 30-120 minutes; RSBI under 105; high-risk extubated to NIV or HFNO.",
          ],
        },
      ],
      mustDraw: [
        "Pressure-time curve showing peak and plateau pressure with an end-inspiratory hold",
        "DOPE troubleshooting flow chart",
      ],
      markSplit: [
        { part: "Indications", marks: 2 },
        { part: "Modes", marks: 2 },
        { part: "Initial settings and ABG adjustment", marks: 3 },
        { part: "Troubleshooting with diagram", marks: 3 },
      ],
      keywords: ["indications", "volume control", "pressure control", "PBW", "plateau pressure", "DOPE"],
    },
    {
      id: "respiratory-mechanical-ventilation-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "common",
      question: "Write a short note on weaning from mechanical ventilation and the spontaneous breathing trial.",
      openingLines: [
        "Weaning is the process of liberating a patient from mechanical ventilation; most patients can be extubated after passing a single spontaneous breathing trial.",
        "Daily screening, paired sedation interruption and an SBT on low pressure support shorten ventilation (ATS/CHEST 2017).",
      ],
      answer: [
        {
          heading: "Readiness criteria",
          points: [
            "Cause improving, PaO2/FiO2 150-200 or more on PEEP 8 or less and FiO2 0.5 or less.",
            "Haemodynamically stable, awake enough, able to initiate breaths, pH 7.25 or more.",
          ],
        },
        {
          heading: "The SBT",
          points: [
            "Pressure support 5-8 cmH2O with PEEP 5, or T-piece, for 30-120 minutes.",
            "RSBI (f/VT in litres) under 105 predicts success.",
          ],
        },
        {
          heading: "Failure criteria",
          points: [
            "RR over 35, SpO2 under 90%, HR over 140 or 20% change, SBP over 180 or under 90.",
            "Agitation, sweating, accessory muscles - return to full support and find the cause.",
          ],
        },
        {
          heading: "Extubation",
          points: [
            "Assess cough, secretions, consciousness; cuff-leak test in high-risk patients; steroids at least 4 hours before if failed.",
            "High-risk patients extubated directly to NIV or HFNO; tracheostomy if weaning is prolonged.",
          ],
        },
      ],
      mustDraw: ["Weaning flow: daily screen, SAT, SBT, extubation or rest"],
      markSplit: [
        { part: "Readiness", marks: 1 },
        { part: "SBT method and RSBI", marks: 2 },
        { part: "Failure criteria and extubation", marks: 2 },
      ],
      keywords: ["weaning", "SBT", "RSBI", "cuff leak", "post-extubation NIV"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - Mechanical ventilatory support",
    "ESICM guidelines on acute respiratory distress syndrome: definition, phenotyping and respiratory support strategies, 2023",
    "American Thoracic Society clinical practice guideline update: management of ARDS, 2024",
    "Society of Critical Care Medicine Clinical Practice Guidelines for Rapid Sequence Intubation in the Critically Ill Adult Patient, 2023",
    "ATS/CHEST clinical practice guideline: Liberation from mechanical ventilation in critically ill adults, 2017",
    "SHEA/IDSA/APIC Strategies to prevent ventilator-associated pneumonia, ventilator-associated events and non-ventilator hospital-acquired pneumonia in acute-care hospitals, 2022 update",
    "SCCM PADIS guideline (pain, agitation/sedation, delirium, immobility, sleep) in adult ICU patients, 2018",
    "ICMR Antimicrobial Resistance Research and Surveillance Network annual report, 2023",
  ],
});

export default topics;
