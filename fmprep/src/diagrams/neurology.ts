/**
 * Diagrams for neurology, keyed by topic id.
 */
import type { DiagramSet } from "../lib/types";

const diagrams: DiagramSet = {
  "neurology-headache": [
    {
      kind: "compare",
      heading: "The three primary headaches at a glance",
      caption:
        "More than 90% of headaches reaching a family physician are primary, and the first decision - primary or secondary - is made by history and examination, not by a scan.",
      columns: ["Feature", "Migraine", "Tension-type", "Cluster"],
      rows: [
        [
          "Site",
          "Unilateral in 60%, may alternate",
          "Bilateral, band-like",
          "Strictly unilateral, orbital or temporal",
        ],
        [
          "Character",
          "Pulsating, throbbing",
          "Pressing, tightening, non-pulsatile",
          "Boring, stabbing, excruciating",
        ],
        ["Duration untreated", "4-72 hours", "30 minutes to 7 days", "15-180 minutes"],
        [
          "Frequency",
          "1-4 a month typically",
          "Episodic or daily",
          "1 every other day to 8 a day, in bouts",
        ],
        [
          "Associated features",
          "Nausea, vomiting, photophobia and phonophobia, aura in 25%",
          "None, or one of photophobia or phonophobia",
          "Ipsilateral lacrimation, conjunctival injection, rhinorrhoea, ptosis, miosis",
        ],
        [
          "Behaviour in the attack",
          "Lies still in a dark quiet room",
          "Continues activity",
          "Restless, paces, may bang the head",
        ],
        [
          "Typical patient",
          "Woman 25-45 years",
          "Any adult, stress and posture related",
          "Man 20-50 years, smoker",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Acute treatment of migraine, step by step",
      caption:
        "Treat early and at an adequate dose. An antiemetic is added at every step because it treats the nausea and restores gastric emptying so the analgesic is absorbed.",
      steps: [
        {
          label: "Simple analgesia with an antiemetic",
          detail:
            "Naproxen 500 mg, ibuprofen 400-600 mg, diclofenac 50 mg or aspirin 900 mg PO, with domperidone 10 mg or metoclopramide 10 mg, taken at the first sign",
        },
        {
          label: "A triptan",
          detail:
            "Sumatriptan 50-100 mg PO, rizatriptan 10 mg or naratriptan 2.5 mg; repeat once after 2 hours for a partial response, maximum two doses in 24 hours",
        },
        {
          label: "Triptan and NSAID together",
          detail:
            "Sumatriptan 85 mg with naproxen 500 mg - more effective than either alone and reduces recurrence; the single most useful tip in resistant attacks",
          tone: "good",
        },
        {
          label: "Change route if vomiting starts early",
          detail:
            "Sumatriptan 6 mg subcutaneously or 20 mg intranasal; the subcutaneous route works within 10-15 minutes when tablets are not retained",
        },
        {
          label: "Clinic rescue for a severe attack",
          detail:
            "IV fluids, metoclopramide 10 mg IV, diclofenac 75 mg IM or ketorolac 30 mg IV, and dexamethasone 8 mg IV which reduces recurrence over the next 72 hours",
        },
        {
          label: "Say the medication-day limit out loud",
          detail:
            "Triptans, opioids and combination analgesics on fewer than 10 days a month, simple analgesics on fewer than 15 days a month - stated at the first visit",
          tone: "warn",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Thunderclap headache: excluding subarachnoid haemorrhage",
      caption:
        "Maximum intensity within one minute is subarachnoid haemorrhage until proved otherwise.",
      steps: [
        {
          label: "Thunderclap onset",
          detail: "Peak intensity within one minute, often with vomiting and neck stiffness",
          tone: "warn",
        },
        {
          label: "Non-contrast CT head immediately",
          detail:
            "Performed within 6 hours of onset on a modern scanner it is close to 100% sensitive for subarachnoid blood",
        },
        {
          label: "CT negative and beyond 6 hours",
          detail:
            "Lumbar puncture at 12 hours or later looking for xanthochromia - it takes that long to develop",
          tone: "decision",
        },
        {
          label: "CT or MR angiography if suspicion persists",
          detail: "Digital subtraction angiography defines the aneurysm once blood is demonstrated",
        },
        {
          label: "Consider the other thunderclap causes",
          detail:
            "Reversible cerebral vasoconstriction syndrome, cervical artery dissection, pituitary apoplexy, cerebral venous sinus thrombosis",
        },
        {
          label: "No triptan before the cause is known",
          detail: "A triptan is contraindicated until haemorrhage has been excluded",
          tone: "warn",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Headache red flags and the action each demands",
      root: "New headache, or a change in a long-standing pattern",
      arms: [
        {
          label: "Thunderclap - peak within a minute",
          tone: "warn",
          steps: [
            "Subarachnoid haemorrhage until excluded",
            "Non-contrast CT within 6 hours of onset",
            "Lumbar puncture at 12 hours for xanthochromia if the CT is late or negative",
          ],
        },
        {
          label: "New headache after 50 with scalp tenderness",
          tone: "warn",
          steps: [
            "Jaw claudication, transient visual loss, ESR above 50 mm/h",
            "Giant cell arteritis - sight lost is not recovered",
            "Prednisolone 40-60 mg daily (1 mg/kg) the same day, IV methylprednisolone if vision is lost",
            "Temporal artery biopsy within 1-2 weeks; it stays positive for days after steroids",
          ],
        },
        {
          label: "New headache in or just after pregnancy",
          steps: [
            "Any new or severe headache after 20 weeks is pre-eclampsia until proved otherwise",
            "Check blood pressure and urine protein first",
            "Then consider cerebral venous sinus thrombosis",
          ],
        },
        {
          label: "Papilloedema in an obese young woman",
          steps: [
            "Transient visual obscurations on standing, pulsatile tinnitus, worse on waking and on coughing",
            "MRI and MR venogram first to exclude a mass and sinus thrombosis",
            "Then lumbar puncture - opening pressure above 25 cm of water with normal constituents",
            "Urgent visual fields, weight loss, acetazolamide 250-500 mg twice daily",
          ],
        },
        {
          label: "Analgesic use on 15 or more days a month",
          steps: [
            "Medication overuse headache complicating a primary headache",
            "Triptans, opioids, ergots or combination analgesics on 10 or more days a month qualify",
            "Withdraw the overused drug and start a preventive at the same time",
            "Warn that headache worsens for 1-2 weeks; bridge with naproxen or a short prednisolone taper",
          ],
        },
      ],
    },
  ],

  "neurology-stroke-acute": [
    {
      kind: "flow",
      heading: "The first hour in a suspected stroke",
      caption:
        "An untreated large-vessel ischaemic stroke destroys about 1.9 million neurons a minute.",
      steps: [
        {
          label: "Capillary glucose before anything else",
          detail:
            "Hypoglycaemia is the commonest stroke mimic - 25% dextrose 50 mL IV and reassess the deficit; never send a suspected stroke to the scanner without this number",
          tone: "warn",
        },
        {
          label: "Airway, breathing, circulation",
          detail:
            "Head up 30 degrees, oxygen only if saturation is below 94%, IV line in the non-paretic arm, normal saline and never a dextrose-containing fluid",
        },
        {
          label: "Nil by mouth, including drugs and water",
          detail:
            "Until a bedside swallow screen is done - dysphagia affects up to half of acute strokes and aspiration pneumonia is a leading cause of early death",
        },
        {
          label: "Record the time last seen well",
          detail:
            "Not the time the deficit was noticed; a wake-up stroke is timed from going to sleep unless perfusion imaging is available",
        },
        {
          label: "Do not give aspirin, do not drop the pressure",
          detail:
            "No antithrombotic before the CT; treat blood pressure only above 220/120 mmHg or when thrombolysing. No sublingual nifedipine, no intramuscular injections",
          tone: "warn",
        },
        {
          label: "Transfer to a CT-capable centre, phone ahead",
          detail:
            "A pre-notified arrival roughly halves door-to-needle time; go to the thrombolysis-ready hospital even if it is further than the nearest one",
        },
        {
          label: "Non-contrast CT, then decide on reperfusion",
          detail:
            "Alteplase within 4.5 hours; thrombectomy within 6 hours, extended to 24 hours in selected large-vessel occlusion with imaging mismatch",
          tone: "decision",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Thrombolysis: the checks before the bolus",
      caption:
        "About 1 in 3 thrombolysed within 90 minutes and about 1 in 10 across the whole window gain a better functional outcome; symptomatic intracranial haemorrhage runs at about 6%.",
      steps: [
        {
          label: "Within 4.5 hours of time last seen well",
          detail: "Age 18 or above, with no upper age limit in current guidance",
          tone: "decision",
        },
        {
          label: "CT excludes haemorrhage",
          detail: "Disabling deficit, quantified with the NIHSS where possible",
        },
        {
          label: "Bring blood pressure below 185/110 mmHg",
          detail:
            "Labetalol 10-20 mg IV boluses; pressure that stays above this despite treatment is a contraindication",
        },
        {
          label: "Run through the absolute contraindications",
          detail:
            "Intracranial haemorrhage now or ever, platelets below 100 000/microlitre, INR above 1.7 or a DOAC within 48 hours, glucose below 50 mg/dL, major surgery or serious head injury within 3 months, active bleeding, aortic dissection, known intracranial neoplasm or arteriovenous malformation",
          tone: "warn",
        },
        {
          label: "Give the bolus",
          detail:
            "Alteplase 0.9 mg/kg to a maximum of 90 mg - 10% over 1 minute then the remainder over 60 minutes; or tenecteplase 0.25 mg/kg as a single bolus, maximum 25 mg",
        },
        {
          label: "The next 24 hours",
          detail:
            "No antiplatelet, anticoagulant or invasive procedure for 24 hours, blood pressure below 180/105 mmHg, neurological observations every 15 minutes for 2 hours, repeat CT at 24 hours before starting aspirin",
        },
        {
          label: "If the window is missed",
          detail:
            "Stroke unit care, aspirin 300 mg within 48 hours once haemorrhage is excluded, swallow screen, early mobilisation, DVT prophylaxis. A stroke unit bed reduces death and dependency more than any single drug, NNT about 20",
          tone: "good",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Localising the stroke from the bedside deficit",
      root: "Sudden focal neurological deficit",
      arms: [
        {
          label: "Middle cerebral artery, dominant side",
          steps: [
            "Contralateral face and arm weaker than leg, with hemisensory loss",
            "Homonymous hemianopia and aphasia",
            "Gaze deviates towards the lesion",
          ],
        },
        {
          label: "Middle cerebral artery, non-dominant",
          steps: [
            "Same motor pattern with neglect and anosognosia",
            "Dressing and constructional apraxia",
            "The patient may deny the deficit altogether",
          ],
        },
        {
          label: "Anterior cerebral artery",
          steps: [
            "Contralateral leg weaker than arm, face usually spared",
            "Abulia, urinary incontinence, grasp reflex",
          ],
        },
        {
          label: "Posterior cerebral artery",
          steps: [
            "Homonymous hemianopia with macular sparing",
            "Alexia without agraphia, memory disturbance",
            "Motor power often normal",
          ],
        },
        {
          label: "Vertebrobasilar and brainstem",
          tone: "warn",
          steps: [
            "Vertigo, diplopia, dysarthria, dysphagia, ataxia, altered consciousness",
            "Crossed signs - ipsilateral cranial nerve palsy with contralateral limb weakness - localise to the brainstem and nowhere else",
            "Lateral medullary (PICA): ipsilateral facial sensory loss, Horner syndrome, palatal palsy, ataxia, with contralateral body pain and temperature loss, hiccups and vomiting",
          ],
        },
        {
          label: "Lacunar, small vessel",
          steps: [
            "Pure motor hemiparesis, pure sensory stroke or sensorimotor stroke",
            "Ataxic hemiparesis or dysarthria-clumsy hand syndrome",
            "No cortical signs at all - no aphasia, no neglect, no field defect",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Ischaemic versus haemorrhagic stroke at the bedside",
      caption:
        "About 80% of strokes are ischaemic and 20% haemorrhagic, with a higher proportion of haemorrhage in India because of untreated hypertension. No bedside feature is decisive - the CT is.",
      columns: ["Feature", "Ischaemic", "Haemorrhagic"],
      rows: [
        [
          "Onset",
          "Sudden, often on waking, deficit maximal at onset",
          "Sudden during activity or straining, may progress over minutes to hours",
        ],
        ["Headache and vomiting", "Uncommon", "Common and early"],
        ["Early loss of consciousness", "Uncommon except basilar occlusion", "Common with large bleeds"],
        ["Blood pressure at presentation", "Often raised", "Usually very high"],
        ["Seizure at onset", "Uncommon", "More common"],
        [
          "Blood pressure target",
          "Do not treat unless above 220/120 mmHg, then lower by no more than 15% in 24 hours",
          "Lower systolic to about 140 mmHg over the first hour",
        ],
        [
          "Decisive test",
          "Non-contrast CT, which may be normal early",
          "Non-contrast CT, hyperdense from the outset",
        ],
      ],
    },
  ],

  "neurology-tia": [
    {
      kind: "flow",
      heading: "The first 24 hours after a suspected TIA",
      caption:
        "About 5% have a stroke at 2 days and 10-17% at 90 days untreated; half of the strokes that follow a TIA happen within the first 48 hours. Urgent treatment cuts 90-day risk by roughly 80%.",
      steps: [
        {
          label: "Aspirin 300 mg the moment a TIA is suspected",
          detail:
            "Unless there is bleeding or a contraindication - do not wait for imaging in a patient with no deficit",
          tone: "good",
        },
        {
          label: "Specialist assessment within 24 hours",
          detail:
            "Everyone with a suspected TIA, whatever the ABCD2 score - the score misses carotid stenosis and atrial fibrillation",
        },
        {
          label: "MRI with diffusion-weighted imaging",
          detail:
            "Within 24 hours - it separates true TIA from minor stroke and finds mimics; CT is acceptable where MRI is unavailable but a normal CT proves nothing",
        },
        {
          label: "Carotid imaging within 24 hours",
          detail:
            "Doppler first for every anterior circulation event in a candidate for revascularisation, then CT or MR angiography to confirm the degree of stenosis",
        },
        {
          label: "ECG in everyone, then rhythm monitoring",
          detail:
            "24-72 hour Holter or longer - paroxysmal atrial fibrillation is found in 10-15% of apparently cryptogenic events and changes an antiplatelet into an anticoagulant",
        },
        {
          label: "Admit if any of these",
          detail:
            "Crescendo TIA, newly detected atrial fibrillation, known high-grade carotid stenosis, an event while already on antiplatelet therapy, or no reliable access to assessment within 24 hours",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "TIA versus its common mimics",
      caption:
        "A TIA produces sudden, focal, negative symptoms that are maximal at onset and resolve completely. Isolated vertigo, presyncope on standing and transient global amnesia are not TIAs.",
      columns: ["Feature", "TIA", "Migraine aura", "Focal seizure"],
      rows: [
        [
          "Onset",
          "Sudden, maximal at onset",
          "Gradual march over 5-20 minutes",
          "Sudden, spreads over seconds",
        ],
        [
          "Symptom type",
          "Negative - loss of power, sensation, vision, speech",
          "Positive then negative - flashing lights then scotoma",
          "Positive - jerking, tingling, deja vu",
        ],
        [
          "Duration",
          "Usually 5-20 minutes, under 1 hour",
          "20-60 minutes",
          "Seconds to 2 minutes, then a postictal state",
        ],
        ["Headache", "Rare", "Follows the aura in most", "Postictal headache common"],
        [
          "Age at first event",
          "Usually over 50 with vascular risk factors",
          "Usually under 40, long history",
          "Any age",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "ABCD2 bands and what they actually mean",
      caption:
        "Age 60 or over 1; blood pressure 140/90 mmHg or more 1; unilateral weakness 2 or speech disturbance without weakness 1; duration 60 minutes or more 2 or 10-59 minutes 1; diabetes 1. Maximum 7. The score is prognostic only - it is no longer used to decide who is seen urgently.",
      steps: [
        {
          label: "Score 0-3: low risk",
          detail:
            "About 1% stroke risk at 2 days - but still assessed within 24 hours, because a low score does not exclude carotid stenosis or atrial fibrillation",
        },
        {
          label: "Score 4-5: moderate risk",
          detail:
            "About 4% at 2 days; the high-risk band in which aspirin plus clopidogrel is given for 21 days",
        },
        {
          label: "Score 6-7: high risk",
          detail: "About 8% stroke risk at 2 days",
          tone: "warn",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Secondary prevention: the five pillars",
      root: "Confirmed TIA or minor ischaemic stroke",
      arms: [
        {
          label: "1. Antithrombotic therapy",
          steps: [
            "Non-cardioembolic: aspirin 75-150 mg or clopidogrel 75 mg daily, lifelong",
            "Aspirin plus clopidogrel for 21 days after a high-risk TIA or minor stroke, then a single agent",
            "Atrial fibrillation: anticoagulate with warfarin to INR 2-3 or a DOAC - aspirin is not an acceptable substitute",
            "Rheumatic mitral stenosis or a mechanical valve: warfarin, never a DOAC",
          ],
        },
        {
          label: "2. Blood pressure",
          steps: [
            "The single most powerful long-term intervention",
            "Target below 130/80 mmHg once the acute phase is over",
            "ACE inhibitor or ARB with a thiazide-like diuretic or amlodipine",
            "Every 10 mmHg fall in systolic pressure cuts recurrent stroke by about a quarter",
          ],
        },
        {
          label: "3. Lipids",
          steps: [
            "High-intensity statin for every ischaemic event, whatever the baseline LDL",
            "Atorvastatin 40-80 mg or rosuvastatin 20-40 mg daily",
            "LDL below 70 mg/dL, below 55 mg/dL if very high risk; add ezetimibe 10 mg if the target is missed",
          ],
        },
        {
          label: "4. Diabetes and lifestyle",
          steps: [
            "HbA1c to an individualised target, ideally below 7%",
            "Complete tobacco cessation in every form including gutkha, khaini and bidi",
            "Salt below 5 g a day, 150 minutes of moderate activity a week, alcohol reduction",
            "BMI below 23 kg/m2 by Asian-Indian criteria; treat obstructive sleep apnoea",
          ],
        },
        {
          label: "5. Carotid revascularisation",
          tone: "warn",
          steps: [
            "Endarterectomy for symptomatic stenosis of 70-99%, considered for 50-69% in men",
            "Within 2 weeks of the event - the benefit largely evaporates after that",
            "Surgeon with an audited perioperative stroke or death rate below 6%",
            "No benefit for near-occlusion or asymptomatic mild stenosis",
          ],
        },
      ],
    },
  ],

  "neurology-vertigo": [
    {
      kind: "branch",
      heading: "Sorting vertigo by timing and trigger",
      caption:
        "Establish first how long a single episode lasts and what brings it on. About half of dizziness is vestibular, a quarter cardiovascular or drug-related, and 3-5% is a posterior circulation stroke.",
      root: "How long does one episode last, and what triggers it?",
      arms: [
        {
          label: "Triggered by head position, seconds",
          steps: [
            "Benign paroxysmal positional vertigo - the commonest cause of vertigo",
            "Posterior canal in 85-90%, horizontal canal in about 10%",
            "Dix-Hallpike; supine roll test if that is negative",
            "Epley manoeuvre, or the Lempert barbecue roll for horizontal canal",
          ],
        },
        {
          label: "Triggered by standing, seconds to minutes",
          steps: [
            "Orthostatic hypotension - presyncope, not spinning",
            "Lying and standing blood pressure at 1 and 3 minutes; a fall of 20 mmHg systolic or 10 mmHg diastolic",
            "Review the drug load, salt and fluids, compression stockings",
          ],
        },
        {
          label: "Spontaneous, recurrent, 5 min to 72 hours",
          steps: [
            "Vestibular migraine - the commonest cause of recurrent spontaneous vertigo, and massively under-diagnosed",
            "At least 5 episodes with migrainous features in half of them; normal hearing and audiogram",
            "Prophylaxis as for migraine - propranolol, amitriptyline, flunarizine or topiramate",
          ],
        },
        {
          label: "Spontaneous, recurrent, 20 min to 12 hours",
          steps: [
            "Meniere disease with fluctuating aural symptoms in the affected ear",
            "Audiogram documents low-to-mid frequency sensorineural loss",
            "Salt under 2 g sodium a day, betahistine 16 mg TDS or 24 mg BD, a thiazide diuretic",
            "Then intratympanic dexamethasone; gentamicin ablation only for intractable vertigo",
          ],
        },
        {
          label: "Spontaneous and continuous for days",
          tone: "warn",
          steps: [
            "Acute vestibular syndrome - vestibular neuritis or a posterior circulation stroke",
            "HINTS decides which, with a hearing test",
            "Peripheral: vestibular sedative for no more than 48-72 hours, then rehabilitation; prednisolone 1 mg/kg for 5 days with a taper",
            "Central: stroke pathway, and watch for malignant cerebellar oedema in the first 72 hours",
          ],
        },
        {
          label: "Spontaneous and brief, with other deficits",
          steps: [
            "Posterior circulation transient ischaemic attack",
            "Vascular risk assessment and imaging",
            "Urgent TIA clinic, antiplatelet, statin",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "HINTS in the acute vestibular syndrome",
      caption:
        "Valid only in continuous vertigo with nystagmus lasting days - never in positional or brief vertigo. In trained hands it is 96-100% sensitive for posterior circulation stroke.",
      steps: [
        {
          label: "Head Impulse",
          detail:
            "Turn the head rapidly 10-20 degrees with the patient fixating on your nose. A corrective refixation saccade is peripheral and reassuring; a normal test in a clearly vertiginous patient is the worrying central finding",
          tone: "decision",
        },
        {
          label: "Nystagmus",
          detail:
            "Unidirectional horizontal with a torsional component is peripheral; direction-changing on lateral gaze, purely vertical or purely torsional is central",
        },
        {
          label: "Test of Skew",
          detail:
            "Alternate cover test - a vertical corrective movement means skew deviation, which is central",
        },
        {
          label: "INFARCT pattern means manage as a stroke",
          detail:
            "Impulse Normal, Fast-phase Alternating, Refixation on Cover Test - admit and treat as posterior circulation stroke even when the limb examination is normal",
          tone: "warn",
        },
        {
          label: "A normal early MRI does not overrule it",
          detail:
            "Diffusion-weighted MRI misses 15-20% of small posterior fossa infarcts in the first 48 hours - repeat at 72 hours or admit and observe",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Peripheral versus central vertigo at the bedside",
      columns: ["Feature", "Peripheral", "Central"],
      rows: [
        [
          "Onset and severity",
          "Sudden, severe spinning with marked nausea and vomiting",
          "May be milder and vaguer, with other brainstem symptoms",
        ],
        [
          "Nystagmus direction",
          "Unidirectional, horizontal with a torsional component, never changes direction",
          "May change direction on lateral gaze, or be purely vertical or purely torsional",
        ],
        [
          "Effect of visual fixation",
          "Nystagmus suppressed by fixation",
          "Nystagmus not suppressed, may be enhanced",
        ],
        [
          "Head impulse test",
          "Abnormal - a corrective refixation saccade is seen",
          "Normal - no catch-up saccade, which is the worrying finding",
        ],
        ["Skew deviation", "Absent", "Present in brainstem lesions"],
        [
          "Hearing",
          "May be affected in Meniere disease and labyrinthitis",
          "Usually normal, except an AICA infarct which causes deafness",
        ],
        [
          "Gait",
          "Unsteady but can walk unaided, falls towards the affected side",
          "Often cannot stand or walk unaided - truncal ataxia",
        ],
        [
          "Other neurology",
          "Absent apart from the ear",
          "Dysarthria, diplopia, dysphagia, limb ataxia, Horner syndrome, crossed sensory loss",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "The Epley manoeuvre for right posterior canal BPPV",
      caption:
        "One manoeuvre resolves about 80%, and 90-95% resolve after two or three. Warn that it will reproduce the vertigo; postural restrictions afterwards add nothing. Mirror the whole sequence for the left side.",
      steps: [
        {
          label: "1. Sit upright, head turned 45 degrees right",
          detail: "A few seconds; nothing to see yet",
        },
        {
          label: "2. Lie back rapidly to Dix-Hallpike right",
          detail:
            "Head 20-30 degrees below horizontal, still turned 45 degrees right; hold 30-60 seconds. Latency, then upbeating torsional nystagmus towards the lower right ear, with vertigo",
        },
        {
          label: "3. Rotate the head 90 degrees to the left",
          detail:
            "The head now lies 45 degrees to the left; hold 30-60 seconds. Nystagmus may recur in the same direction, which is a good sign",
        },
        {
          label: "4. Roll onto the left shoulder",
          detail:
            "Head rotated a further 90 degrees so the nose points about 45 degrees down; hold 30-60 seconds for a further burst of nystagmus in the same direction",
        },
        {
          label: "5. Sit up slowly with the chin tucked",
          detail:
            "Hold 30 seconds. Brief vertigo, then repeat the cycle or recheck with the Dix-Hallpike",
        },
        {
          label: "Counsel before the patient leaves",
          detail:
            "Recurrence is about 15% a year and up to 50% at five years; check vitamin D and assess for osteoporosis in recurrent cases",
          tone: "good",
        },
      ],
    },
  ],

  "neurology-peripheral-neuropathy": [
    {
      kind: "branch",
      heading: "Define the pattern before hunting the cause",
      root: "Peripheral neuropathy",
      arms: [
        {
          label: "Distal symmetric sensory or sensorimotor",
          steps: [
            "Glove and stocking, burning feet, absent ankle jerks, slowly progressive",
            "Diabetes, alcohol, B12 deficiency, uraemia, hypothyroidism, drugs, idiopathic",
            "HbA1c, B12, TSH, renal function, ESR",
            "About 20-25% of chronic axonal neuropathies stay idiopathic after a full work-up",
          ],
        },
        {
          label: "Painful small fibre",
          steps: [
            "Burning and allodynia with normal reflexes and a normal nerve conduction study",
            "Prediabetes and diabetes, alcohol, HIV, amyloid, Sjogren syndrome",
            "Oral glucose tolerance test, HIV serology, skin biopsy if needed",
          ],
        },
        {
          label: "Mononeuritis multiplex",
          tone: "warn",
          steps: [
            "Painful, asymmetric, stepwise, two or more named nerves",
            "Leprosy, diabetes, vasculitis, HIV, hepatitis C cryoglobulinaemia",
            "ESR, ANA, ANCA, slit-skin smear, HIV, nerve biopsy",
            "An anaesthetic hypopigmented patch with a thickened nerve is leprosy until proved otherwise",
          ],
        },
        {
          label: "Acute ascending demyelinating",
          tone: "warn",
          steps: [
            "Days, symmetric, areflexia, weakness dominant, respiration may be involved",
            "Guillain-Barre syndrome - admit",
            "CSF for albuminocytological dissociation, serial forced vital capacity",
          ],
        },
        {
          label: "Chronic demyelinating over 8 weeks",
          steps: [
            "Proximal and distal weakness with areflexia, out of proportion to wasting",
            "CIDP - the treatable chronic mimic that must not be dismissed as diabetic neuropathy",
            "Nerve conduction study, serum protein electrophoresis",
          ],
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Treating painful diabetic neuropathy",
      caption:
        "Choose the first drug by comorbidity, not by any claimed superiority. Most failures are under-dosing, not the wrong drug.",
      steps: [
        {
          label: "Pick one first-line drug by comorbidity",
          detail:
            "Amitriptyline 10-25 mg at night to 50-75 mg (cheapest, helps sleep); duloxetine 30 mg then 60 mg daily if depressed; pregabalin 75 mg twice daily to 300 mg if a fast onset is needed; gabapentin 300 mg at night to 1800-3600 mg where cost dominates",
        },
        {
          label: "Titrate to the maximum tolerated dose",
          detail: "Over 4-8 weeks before declaring failure - abandoning a drug at its starting dose is the common error",
          tone: "good",
        },
        {
          label: "Switch class if one fails at full dose",
        },
        {
          label: "Combine if the response is only partial",
          detail: "An antidepressant with a gabapentinoid",
        },
        {
          label: "Add a topical agent for localised allodynia",
          detail:
            "Capsaicin 0.075% cream four times daily for 6-8 weeks, or a lidocaine 5% patch",
        },
        {
          label: "Tramadol or tapentadol, second line only",
          detail:
            "50 mg twice daily, short course only. Strong opioids should not be used for chronic neuropathic pain - tolerance, dependence, hyperalgesia and no benefit at 12 months. NSAIDs and paracetamol do not work at all",
          tone: "warn",
        },
      ],
    },
    {
      kind: "flow",
      heading: "The annual diabetic foot screen",
      caption:
        "Screen at diagnosis of type 2 diabetes, 5 years after diagnosis of type 1, and annually thereafter.",
      steps: [
        {
          label: "10 g Semmes-Weinstein monofilament",
          detail:
            "Perpendicular to buckling for 1-2 seconds at the plantar surface of the great toe and the first, third and fifth metatarsal heads, with the eyes closed",
        },
        {
          label: "Add at least one other modality",
          detail:
            "128 Hz tuning fork at the great toe, pinprick, temperature discrimination or the ankle reflex",
        },
        {
          label: "Any site not felt: protective sensation lost",
          detail:
            "Record it in the notes as a yes or no, not as an impression - it is the single finding that changes management and identifies the foot at risk of ulceration",
          tone: "warn",
        },
        {
          label: "Protect the foot",
          detail: "Intensive education and protective footwear for the at-risk foot",
          tone: "good",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Guillain-Barre: what to watch and what to give",
      caption:
        "Respiratory failure is what kills, and it is anticipated by serial bedside numbers rather than by a blood gas.",
      steps: [
        {
          label: "Recognise the pattern",
          detail:
            "Ascending symmetric weakness over days with generalised areflexia, often after gastroenteritis; bilateral facial palsy is never Bell palsy",
        },
        {
          label: "Admit and measure the 20/30/40 rule serially",
          detail:
            "Anticipate intubation when forced vital capacity falls below 20 mL/kg, maximum inspiratory pressure is weaker than -30 cmH2O, or maximum expiratory pressure is below 40 cmH2O",
          tone: "warn",
        },
        {
          label: "Oximetry and blood gases mislead here",
          detail:
            "Both stay normal until the patient is close to respiratory arrest, because the problem is bellows failure rather than gas exchange. A single-breath count under 20 is a useful proxy",
          tone: "warn",
        },
        {
          label: "Immunotherapy",
          detail:
            "Intravenous immunoglobulin 0.4 g/kg/day for 5 days OR plasma exchange - equally effective and never combined. Corticosteroids are ineffective and must not be used",
        },
        {
          label: "Supportive care decides the outcome",
          detail:
            "Venous thromboembolism prophylaxis, pain control, physiotherapy, pressure care; watch for autonomic instability with arrhythmias and swinging blood pressure",
        },
      ],
    },
  ],

  "neurology-cns-infection": [
    {
      kind: "flow",
      heading: "Suspected bacterial meningitis: the first hour",
      caption:
        "Time to the first antibiotic dose is the strongest modifiable determinant of death and disability.",
      steps: [
        {
          label: "Two of the four features are enough",
          detail:
            "Fever, headache, neck stiffness, altered sensorium - the full triad is present in fewer than half of adults but two of the four in about 95%. Kernig and Brudzinski are specific but very insensitive",
        },
        {
          label: "Blood cultures, then antibiotic in the hour",
          detail:
            "Ceftriaxone 2 g IV 12-hourly plus vancomycin 15-20 mg/kg IV 8-12 hourly, in meningeal doses - half doses do not cross the blood-brain barrier",
          tone: "good",
        },
        {
          label: "Dexamethasone with or just before that dose",
          detail:
            "0.15 mg/kg IV 6-hourly for 4 days, first dose 15-20 minutes before or with the antibiotic. It only works when timed this way, and is stopped if the organism is not pneumococcus",
        },
        {
          label: "Add ampicillin if Listeria is possible",
          detail:
            "2 g IV 4-hourly if over 50, pregnant, immunosuppressed, alcoholic or debilitated - Listeria is intrinsically resistant to all cephalosporins",
        },
        {
          label: "Never delay the antibiotic for the scanner",
          detail:
            "Image before the tap only for a focal deficit, papilloedema, a new seizure or immunosuppression - and give the antibiotic before going. In a rural setting give ceftriaxone and dexamethasone, then transfer",
          tone: "warn",
        },
        {
          label: "Lumbar puncture, then tailor",
          detail:
            "Cell count and differential, protein, glucose with a simultaneous blood glucose, Gram stain and culture; PCR and CBNAAT yields survive several hours of antibiotic. Send 5-10 mL if tuberculosis is possible",
        },
        {
          label: "Altered behaviour or seizures: add acyclovir",
          detail:
            "10 mg/kg IV 8-hourly empirically for herpes simplex encephalitis while investigating - delay beyond 48 hours multiplies mortality",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Cerebrospinal fluid patterns",
      caption:
        "Normal values for comparison: under 5 cells, protein 15-45 mg/dL, CSF to blood glucose ratio 0.6, opening pressure 10-20 cm H2O.",
      columns: ["Parameter", "Bacterial", "Tuberculous", "Viral"],
      rows: [
        [
          "Appearance",
          "Turbid, purulent",
          "Clear or opalescent, cobweb on standing",
          "Clear",
        ],
        ["Cells per microlitre", "1000-5000", "100-500", "50-500"],
        [
          "Predominant cell",
          "Neutrophils, over 80%",
          "Lymphocytes, neutrophils early",
          "Lymphocytes",
        ],
        [
          "Protein (mg/dL)",
          "Over 100",
          "100-500, may exceed 1000 with spinal block",
          "50-100",
        ],
        ["CSF to blood glucose ratio", "Under 0.4", "Under 0.5", "Normal, over 0.6"],
        [
          "Confirmatory test",
          "Gram stain and culture, positive in 60-90% before antibiotics",
          "CBNAAT (Xpert Ultra), AFB culture, adenosine deaminase",
          "PCR for herpes simplex and enterovirus",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Tuberculous meningitis: BMRC stage drives steroid and prognosis",
      caption:
        "Treatment is 12 months for CNS tuberculosis - 2HRZE then 10 months of continuation (HRE under the Indian NTEP, HR under WHO), daily and never intermittent, with pyridoxine 10 mg daily throughout. Every patient gets a steroid, reduced weekly, switched to oral and tapered over 6-8 weeks. A negative CBNAAT never excludes the diagnosis - its sensitivity is only 60-70%.",
      steps: [
        {
          label: "Stage I - conscious, no focal deficit",
          detail: "Dexamethasone 0.3 mg/kg/day; mortality under 10%",
        },
        {
          label: "Stage II - GCS 11-14 or a focal sign",
          detail:
            "Conscious with meningism plus a cranial nerve palsy or focal deficit; dexamethasone 0.4 mg/kg/day IV",
        },
        {
          label: "Stage III - GCS 10 or below, or hemiplegia",
          detail:
            "Stuporous or comatose; dexamethasone 0.4 mg/kg/day IV; mortality over 50%, which is why treatment must not wait for confirmation",
          tone: "warn",
        },
        {
          label: "Watch for the paradoxical reaction",
          detail:
            "Clinical or radiological worsening at 4-8 weeks despite good adherence - increase the steroid and continue the same regimen, do not change drugs. Monthly liver function; visual acuity and colour vision on ethambutol; start antiretroviral therapy after 4-8 weeks of ATT, not immediately",
          tone: "warn",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Neurocysticercosis: treatment by lesion type",
      caption:
        "Steroids are started 1-3 days before the antiparasitic and continued through the course, because dying cysts provoke oedema and seizures. Fundoscopy first to exclude ocular cysts. Antiseizure medication is continued until the lesion resolves or calcifies and the patient has been seizure-free for 6 months to 2 years.",
      root: "Ring-enhancing lesion with an eccentric scolex",
      arms: [
        {
          label: "Solitary cysticercus granuloma",
          steps: [
            "Albendazole 15 mg/kg/day in two divided doses for 7-14 days",
            "Prednisolone 1 mg/kg/day from 1-3 days before, through the course, then tapered",
            "Antiseizure drug; repeat imaging at 6 months",
          ],
        },
        {
          label: "One or two viable parenchymal cysts",
          steps: [
            "Albendazole 15 mg/kg/day, maximum 1200 mg/day, for 10-14 days, with a fatty meal",
            "Same steroid cover",
          ],
        },
        {
          label: "More than two viable parenchymal cysts",
          steps: [
            "Albendazole 15 mg/kg/day PLUS praziquantel 50 mg/kg/day, both for 10-14 days",
            "Same steroid cover",
            "Clears cysts better than albendazole alone",
          ],
        },
        {
          label: "Calcified lesions only",
          tone: "warn",
          steps: [
            "The parasite is already dead - no antiparasitic drug",
            "Antiseizure medication alone",
            "Albendazole here risks hepatotoxicity, marrow suppression and provoked perilesional inflammation",
            "Calcified lesions carry the highest risk of seizure recurrence",
          ],
        },
        {
          label: "Subarachnoid or racemose disease",
          tone: "warn",
          steps: [
            "A different and far more serious illness",
            "Albendazole for at least 28 days, often repeated or prolonged over months",
            "High-dose corticosteroids throughout, under specialist supervision",
            "Shunt for hydrocephalus; intraventricular cysts removed neuroendoscopically",
          ],
        },
      ],
    },
  ],

  "neurology-bell-palsy": [
    {
      kind: "compare",
      heading: "Upper versus lower motor neurone facial palsy",
      caption: "The forehead decides it, and it decides which pathway the patient enters.",
      columns: ["Feature", "Upper motor neurone", "Lower motor neurone"],
      rows: [
        [
          "Forehead and frontalis",
          "Spared - the patient can wrinkle the brow",
          "Paralysed - no forehead wrinkling",
        ],
        [
          "Eye closure",
          "Preserved",
          "Incomplete (lagophthalmos), Bell phenomenon visible",
        ],
        [
          "Site of lesion",
          "Contralateral cortex, corona radiata, internal capsule, pons above the nucleus",
          "Facial nucleus, facial canal, stylomastoid foramen, parotid",
        ],
        [
          "Usual cause",
          "Stroke, tumour, demyelination",
          "Bell palsy, Ramsay Hunt, otitis media, trauma, parotid tumour, leprosy",
        ],
        [
          "Associated signs",
          "Hemiparesis, dysarthria, dysphagia, sparing of the emotional smile",
          "Hyperacusis, loss of taste, reduced lacrimation, ear vesicles or discharge",
        ],
        [
          "Action",
          "Acute stroke pathway, immediate non-contrast CT head",
          "Clinical diagnosis, steroid within 72 hours, eye care",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Acute Bell palsy in the first 72 hours",
      caption:
        "Bell palsy reaches its maximum within 72 hours and accounts for 60-75% of acute unilateral facial palsies. Avoid facial electrical stimulation, which aggravates synkinesis.",
      steps: [
        {
          label: "Confirm the palsy is lower motor neurone",
          detail:
            "The forehead is paralysed and eye closure is incomplete. A spared forehead with limb signs is a stroke call, not a facial palsy consultation",
          tone: "decision",
        },
        {
          label: "Look inside the ear and at the palate",
          detail:
            "Vesicles in the concha, canal, pinna or palate with severe otalgia, vertigo or hearing loss mean Ramsay Hunt, which is treated differently",
          tone: "warn",
        },
        {
          label: "Prednisolone, started within 72 hours",
          detail:
            "50 mg daily for 10 days, or 60 mg daily for 5 days then tapered by 10 mg a day over 5 days, with food. It raises complete recovery from about 70% to about 85%, NNT about 10",
          tone: "good",
        },
        {
          label: "Add an antiviral only if the palsy is severe",
          detail:
            "House-Brackmann IV to VI: valacyclovir 1 g three times daily for 7 days, or acyclovir 400 mg five times daily. Never give an antiviral alone - alone it does nothing",
        },
        {
          label: "Eye protection prevents corneal damage",
          detail:
            "Carboxymethylcellulose 0.5% or hypromellose drops hourly while awake, paraffin or carbomer ointment at night, horizontal eyelid taping at night, protective glasses outdoors",
          tone: "warn",
        },
        {
          label: "Review at 1 week, 3 weeks and 3 months",
          detail:
            "About 85% show the first sign of recovery within 3 weeks. Refer if there is no improvement at 3 months, any progression, recurrence, a mass, bilateral involvement or a corneal problem",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Facial palsy that is not Bell palsy",
      root: "Acute facial weakness",
      arms: [
        {
          label: "Forehead spared",
          tone: "warn",
          steps: [
            "Upper motor neurone lesion - stroke, tumour, demyelination",
            "Look for arm drift, dysarthria, a hemispheric syndrome",
            "Acute stroke pathway with immediate non-contrast CT",
          ],
        },
        {
          label: "Vesicles in the ear or on the palate",
          steps: [
            "Ramsay Hunt syndrome - zoster in the geniculate ganglion, with otalgia, vertigo and hearing loss",
            "Prednisolone 1 mg/kg/day for 5 days then tapered, PLUS acyclovir 800 mg five times daily for 7 days",
            "Start within 72 hours; audiometry and vestibular assessment",
            "Complete recovery in only about 50-60% even when treated",
          ],
        },
        {
          label: "Discharging ear",
          steps: [
            "Acute or chronic suppurative otitis media, cholesteatoma eroding the facial canal",
            "An ENT emergency needing imaging and often surgery",
            "Never simply a course of prednisolone",
          ],
        },
        {
          label: "Bilateral palsy",
          tone: "warn",
          steps: [
            "Never Bell palsy - admit and investigate",
            "Guillain-Barre syndrome, Lyme disease, sarcoidosis, HIV seroconversion, meningeal infiltration",
            "Check areflexia, ascending weakness, single-breath count and serial vital capacity",
          ],
        },
        {
          label: "Slowly progressive over weeks, or a mass",
          steps: [
            "Bell palsy reaches its maximum within 72 hours - creeping weakness is not Bell palsy",
            "Parotid malignancy, facial nerve schwannoma, cerebellopontine angle or skull base lesion",
            "Contrast MRI of brain, internal auditory meatus and parotid, with urgent ENT referral",
          ],
        },
        {
          label: "Anaesthetic patch with thickened nerves",
          steps: [
            "Leprosy - classically the zygomatic branch with lagophthalmos",
            "Palpate great auricular, ulnar and common peroneal nerves; look for hypopigmented anaesthetic patches",
            "Multidrug therapy plus prednisolone for the reaction, not a Bell palsy course",
          ],
        },
      ],
    },
    {
      kind: "ladder",
      heading: "House-Brackmann facial nerve grading",
      caption:
        "Grades IV to VI define the severe palsy in which an antiviral is added to the steroid. Complete paralysis (grade VI) is a poor prognostic marker, as are age over 60, diabetes, hypertension, severe pain, pregnancy and no recovery by 3 weeks.",
      steps: [
        {
          label: "Grade I - normal",
          detail: "Normal facial function in all areas; eye closes completely",
        },
        {
          label: "Grade II - mild dysfunction",
          detail:
            "Slight weakness noticeable only on close inspection, slight synkinesis; eye closes completely with minimum effort",
        },
        {
          label: "Grade III - moderate dysfunction",
          detail:
            "Obvious but not disfiguring difference, noticeable synkinesis or contracture; eye closes completely with effort",
        },
        {
          label: "Grade IV - moderately severe",
          detail:
            "Obvious weakness and disfiguring asymmetry, no forehead movement; eye closure incomplete",
        },
        {
          label: "Grade V - severe dysfunction",
          detail: "Barely perceptible motion, asymmetry at rest; eye closure incomplete",
        },
        {
          label: "Grade VI - total paralysis",
          detail: "No movement at all; the eye does not close",
          tone: "warn",
        },
      ],
    },
  ],

  "neurology-low-back-pain-neuro": [
    {
      kind: "branch",
      heading: "The three-way triage of low back pain",
      caption:
        "Every consultation for back pain answers one question first, and it is answered by the history, a neurological examination and a direct question about bladder, bowel and saddle sensation.",
      root: "Which of the three is this?",
      arms: [
        {
          label: "Non-specific mechanical - 90-95%",
          tone: "good",
          steps: [
            "No red flags, normal neurological examination",
            "No imaging at all - degenerative change is near universal after 40 and buys a label, not a diagnosis",
            "Stay active, hurt is not harm, avoid bed rest and corsets",
            "Ibuprofen 400 mg three times daily or naproxen 250-500 mg twice daily, shortest effective course, with a PPI over 60 or at gastrointestinal risk",
          ],
        },
        {
          label: "Radicular pain (sciatica) - about 5%",
          steps: [
            "Pain radiating below the knee in a dermatomal distribution, worse than the back pain itself",
            "Posterolateral disc prolapse, most often L4-L5 or L5-S1",
            "About 90% settle within 6-12 weeks with conservative care",
            "Amitriptyline 10-25 mg at night for persistent pain; gabapentinoids do not work for sciatica",
            "MRI and a surgical opinion only beyond 6-12 weeks, or if a motor deficit progresses",
          ],
        },
        {
          label: "Serious spinal pathology - under 1-2%",
          tone: "warn",
          steps: [
            "Cauda equina syndrome - emergency same-day MRI of the whole spine",
            "Metastatic cord compression - dexamethasone 16 mg daily started immediately, MRI within 24 hours",
            "Infection, especially tuberculous spondylitis in India - contrast MRI and tissue for CBNAAT and culture, then 12 months of ATT",
            "Fracture and axial spondyloarthritis",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "Suspected cauda equina syndrome",
      caption:
        "The emergency hidden inside a very common complaint. Outcome depends on decompressing before retention is established.",
      steps: [
        {
          label: "Ask about bladder and saddle sensation",
          detail:
            "In every single back pain patient, and write the answer down - the negative record is as valuable as the positive finding",
        },
        {
          label: "The cardinal findings",
          detail:
            "Saddle or perineal numbness, bilateral sciatica, loss of the sensation of the urinary stream, faecal incontinence, lax anal tone",
          tone: "warn",
        },
        {
          label: "Rectal examination and perianal pinprick",
          detail: "Resting anal tone and voluntary squeeze; anal wink and bulbocavernosus reflex",
        },
        {
          label: "Bladder scan for post-void residual",
          detail:
            "A residual above 200 mL, or a patient who cannot say whether urine is passing, mandates emergency MRI on the same admission",
          tone: "decision",
        },
        {
          label: "Emergency MRI of the whole spine the same day",
          detail:
            "Out of hours if necessary - not an outpatient scan, not a trial of analgesia, and never a plain radiograph, which cannot see neural tissue",
        },
        {
          label: "Same-day spinal surgical referral",
          detail:
            "Decompression within 24-48 hours, and within 24 hours where feasible; catheterise in the interim. Patients decompressed while still incomplete do substantially better than those already in retention",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Lumbosacral root localisation",
      caption:
        "L5 has no reflex of its own, which is exactly why preserved reflexes point towards it rather than away from radiculopathy.",
      columns: ["Root", "Motor weakness", "Sensory loss", "Reflex"],
      rows: [
        ["L3", "Hip flexion and knee extension", "Anterior thigh", "Knee jerk may be reduced"],
        [
          "L4",
          "Knee extension, ankle dorsiflexion",
          "Medial leg and medial malleolus",
          "Knee jerk reduced or absent",
        ],
        [
          "L5",
          "Big toe dorsiflexion, foot dorsiflexion, hip abduction",
          "Dorsum of foot, lateral leg, first web space",
          "No reflex change",
        ],
        [
          "S1",
          "Plantar flexion and foot eversion",
          "Lateral border of foot, sole, little toe",
          "Ankle jerk absent",
        ],
        [
          "S2-S4",
          "Anal sphincter and bladder detrusor",
          "Saddle or perineal area",
          "Anal wink and bulbocavernosus lost",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Cauda equina, canal stenosis and vascular claudication",
      columns: [
        "Feature",
        "Cauda equina syndrome",
        "Lumbar canal stenosis",
        "Vascular claudication",
      ],
      rows: [
        [
          "Onset",
          "Acute or subacute, over hours to days",
          "Chronic, over months to years",
          "Chronic, progressive",
        ],
        [
          "Leg symptoms",
          "Bilateral sciatica, often with weakness",
          "Bilateral buttock and leg heaviness on walking",
          "Calf cramp at a fixed claudication distance",
        ],
        [
          "Relief",
          "None; may worsen",
          "Sitting or flexing forward; better uphill or leaning on a trolley",
          "Standing still, irrespective of posture",
        ],
        ["Saddle sensation", "Impaired or absent - the cardinal sign", "Normal", "Normal"],
        [
          "Bladder",
          "Loss of filling sensation, then poor stream, then painless retention with overflow",
          "Normal until very advanced",
          "Normal",
        ],
        ["Peripheral pulses", "Normal", "Normal", "Reduced or absent, with bruits"],
        [
          "Action",
          "Emergency MRI and decompression",
          "Elective MRI, physiotherapy, consider decompression",
          "Ankle-brachial index, risk factor control, vascular referral",
        ],
      ],
    },
  ],

  "neurology-parkinsonism": [
    {
      kind: "branch",
      heading: "Classification of parkinsonism",
      caption:
        "Parkinsonism is bradykinesia with decrement, plus at least one of rest tremor or rigidity. Bradykinesia is the only mandatory element in the MDS 2015 criteria.",
      root: "Parkinsonism",
      arms: [
        {
          label: "Idiopathic Parkinson's disease - 75-80%",
          steps: [
            "Sporadic in most; genetic in 5-10%",
            "LRRK2 (G2019S) is the commonest dominant; PRKN, PINK1 and DJ-1 in recessive young-onset disease",
            "GBA is the commonest genetic risk factor and predicts faster cognitive decline",
            "About 1% of people over 60 and 3-4% over 80",
          ],
        },
        {
          label: "Drug-induced - the only reversible cause",
          tone: "warn",
          steps: [
            "Levosulpiride, flunarizine, cinnarizine, metoclopramide, antipsychotics",
            "Symmetrical, subacute over days to weeks, postural rather than rest tremor, often with orofacial dyskinesia",
            "Stop the drug and reassess at 6-12 weeks and again at 6 months - withdrawal is both treatment and diagnostic test",
            "10-20% persist because the drug unmasked underlying Parkinson's disease",
          ],
        },
        {
          label: "Vascular - 3-6%",
          steps: [
            "Small-vessel disease of the basal ganglia and frontal white matter",
            "Lower-body predominant, gait-led, symmetrical, with pyramidal signs",
            "Hypertension and diabetes, often a stepwise course",
          ],
        },
        {
          label: "Parkinson-plus syndromes - 10-15%",
          steps: [
            "Progressive supranuclear palsy and multiple system atrophy",
            "Corticobasal degeneration and dementia with Lewy bodies",
            "The main reason a poor levodopa responder is not idiopathic disease",
          ],
        },
        {
          label: "Other secondary causes",
          steps: [
            "Wilson disease in anyone under 50 - serum ceruloplasmin and slit-lamp for Kayser-Fleischer rings",
            "Normal pressure hydrocephalus, structural lesions, head injury",
            "Toxins such as manganese",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Parkinson's disease versus its mimics",
      caption:
        "The discriminating feature and the levodopa response together settle most of these at the bedside.",
      columns: ["Condition", "Discriminating feature", "Levodopa response"],
      rows: [
        [
          "Idiopathic Parkinson's disease",
          "Asymmetric onset, 4-6 Hz rest tremor, bradykinesia with decrement, postural instability only late",
          "Excellent and sustained",
        ],
        [
          "Essential tremor",
          "Bilateral postural and action tremor of hands, head and voice; no bradykinesia; alcohol responsive",
          "None, and not indicated",
        ],
        [
          "Drug-induced parkinsonism",
          "Symmetrical, subacute, postural more than rest tremor",
          "Poor - the receptors are blocked",
        ],
        [
          "Progressive supranuclear palsy",
          "Backward falls in the first year, vertical supranuclear gaze palsy affecting downgaze, axial rigidity, erect posture",
          "Poor or transient",
        ],
        [
          "Multiple system atrophy",
          "Early severe autonomic failure, cerebellar signs, antecollis, stridor",
          "Poor or short-lived",
        ],
        [
          "Corticobasal degeneration",
          "Markedly asymmetric limb with apraxia, alien limb, cortical sensory loss, myoclonus",
          "Absent",
        ],
        [
          "Dementia with Lewy bodies",
          "Dementia before or within a year of parkinsonism, fluctuating cognition, visual hallucinations",
          "Partial, and worsens the hallucinations",
        ],
        [
          "Normal pressure hydrocephalus",
          "Magnetic broad-based gait, urinary incontinence, dementia; arms and face spared",
          "None",
        ],
        [
          "Vascular parkinsonism",
          "Lower-body predominant, gait-led, symmetrical, with pyramidal signs",
          "Poor; a minority respond partially",
        ],
        [
          "Wilson disease",
          "Parkinsonism under 50 with dystonia, tremor, dysarthria, psychiatric or hepatic disease",
          "Not the treatment - chelation is",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Starting treatment in Parkinson's disease",
      caption:
        "The diagnosis is wrong in a substantial minority when it is made without specialist review.",
      steps: [
        {
          label: "Refer quickly and untreated",
          detail:
            "NICE NG71 - to a neurologist or movement-disorder specialist within 6 weeks, within 2 weeks if severe or complex. Do not start dopaminergic therapy in primary care to see if it works",
          tone: "decision",
        },
        {
          label: "Stop any offending drug first and wait",
          detail:
            "Levosulpiride, flunarizine, cinnarizine, metoclopramide or an antipsychotic - review in 4-8 weeks before labelling anyone. Exclude Wilson disease under 50",
        },
        {
          label: "Levodopa with carbidopa is most effective",
          detail:
            "100/25 mg: half a tablet three times daily or one tablet twice daily, titrated weekly to 300-600 mg of levodopa a day in 3-4 doses, taken 30-60 minutes before food. The 100/10 formulation supplies too little carbidopa unless taken four or more times a day",
        },
        {
          label: "Or a dopamine agonist in the younger patient",
          detail:
            "Pramipexole 0.125 mg three times daily up to 0.5-1.0 mg three times daily (max 4.5 mg/day), or ropinirole 0.25 mg three times daily to 3-9 mg/day (max 24 mg/day). Fewer dyskinesias, but more sedation and psychotoxicity",
        },
        {
          label: "Add for specific problems",
          detail:
            "Amantadine 100 mg once or twice daily is the drug of choice for levodopa-induced dyskinesia; entacapone 200 mg with each levodopa dose or a MAO-B inhibitor for wearing off; trihexyphenidyl 1 mg twice daily for tremor in the young but not over 65-70",
        },
        {
          label: "Non-drug care is half the treatment",
          detail:
            "LSVT-BIG physiotherapy with cueing and 150 minutes of exercise a week, LSVT-LOUD speech therapy and swallow assessment, home falls assessment, macrogol or lactulose for constipation, vitamin D and fracture risk",
          tone: "good",
        },
        {
          label: "Ask the spouse at every review",
          detail:
            "Gambling, spending, hypersexuality and binge eating are concealed and affect about one in six on an agonist - the answer is supervised reduction of the agonist, substituting levodopa",
          tone: "warn",
        },
        {
          label: "Never haloperidol, risperidone or olanzapine",
          detail:
            "For hallucinations reduce the anticholinergic, amantadine and agonist first; if a drug is unavoidable use quetiapine 12.5-25 mg at night or clozapine. For nausea use domperidone 10 mg three times daily, never metoclopramide",
          tone: "warn",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Modified Hoehn and Yahr staging",
      steps: [
        {
          label: "Stage 1 - unilateral involvement only",
          detail: "Function preserved; treat only if the symptoms bother the patient",
        },
        {
          label: "Stage 1.5 - unilateral plus axial involvement",
          detail: "Early speech and posture change; start structured exercise",
        },
        {
          label: "Stage 2 - bilateral, balance intact",
          detail: "Most patients need dopaminergic treatment by now",
        },
        {
          label: "Stage 2.5 - recovery on the pull test",
          detail: "Mild bilateral disease; balance is beginning to fail, so start formal physiotherapy",
        },
        {
          label: "Stage 3 - postural instability, independent",
          detail:
            "Mild to moderate bilateral disease; falls risk begins, so do a home safety assessment and review bone health",
        },
        {
          label: "Stage 4 - severe disability, still walks",
          detail: "Needs carer support and aids; review for advanced therapy",
        },
        {
          label: "Stage 5 - wheelchair-bound or bedridden",
          detail: "Pressure care, nutrition and swallowing, palliative approach, carer respite",
          tone: "warn",
        },
      ],
    },
  ],

  "neurology-seizures-epilepsy": [
    {
      kind: "flow",
      heading: "Convulsive status epilepticus by the clock",
      caption:
        "Status is a convulsion lasting 5 minutes or more, or two or more seizures without full recovery of consciousness between them. GABA-A receptors are internalised within 20-30 minutes, so a benzodiazepine that would have worked at 5 minutes fails at 40.",
      steps: [
        {
          label: "0-5 minutes - stabilise",
          detail:
            "Position on the side, clear and suction the airway, high-flow oxygen, note the time, pulse oximeter, two IV lines and bloods. Do not force anything between the teeth",
        },
        {
          label: "Check capillary glucose immediately",
          detail:
            "25% dextrose 100 mL IV in an adult, or 2 mL/kg in a child, preceded by thiamine 100 mg IV in anyone malnourished or alcohol-dependent",
        },
        {
          label: "5-20 minutes - a benzodiazepine, twice only",
          detail:
            "IV lorazepam 0.1 mg/kg (max 4 mg per dose), repeated once after 5-10 minutes; or IV diazepam 0.2 mg/kg (max 10 mg). No IV access: IM midazolam 0.2 mg/kg, buccal or intranasal midazolam 0.2-0.3 mg/kg, or rectal diazepam 0.2-0.5 mg/kg",
        },
        {
          label: "Do not give a third benzodiazepine dose",
          detail:
            "It will not stop the seizure, because the receptors are already internalised, and it will stop the breathing",
          tone: "warn",
        },
        {
          label: "20-40 minutes - one second-line drug",
          detail:
            "ESETT showed these are equally effective, each terminating about half: levetiracetam 60 mg/kg IV (max 4500 mg) over 10-15 minutes, sodium valproate 40 mg/kg IV (max 3000 mg) over 10 minutes, or fosphenytoin 20 mg PE/kg at up to 150 mg PE/min",
          tone: "decision",
        },
        {
          label: "Beyond 40 minutes - refractory status",
          detail:
            "Intubate, transfer to intensive care, midazolam infusion 0.2 mg/kg bolus then 0.05-2 mg/kg/h, or propofol or thiopentone, titrated on continuous EEG to seizure or burst suppression",
          tone: "warn",
        },
        {
          label: "Think eclampsia in pregnancy or puerperium",
          detail:
            "A convulsion after 20 weeks or within 6 weeks of delivery is eclampsia until proved otherwise - magnesium sulphate, blood pressure control and delivery, not a benzodiazepine alone",
          tone: "warn",
        },
      ],
    },
    {
      kind: "branch",
      heading: "ILAE 2017 classification of seizure types",
      caption:
        "Three tiers - seizure type, then epilepsy type, then epilepsy syndrome - naming the aetiology and comorbidities at every tier. Getting focal versus generalised wrong is how juvenile myoclonic epilepsy ends up on carbamazepine.",
      root: "Where did the seizure start?",
      arms: [
        {
          label: "Focal onset",
          steps: [
            "Divide first by awareness - focal aware, or focal impaired awareness",
            "Awareness, not memory or responsiveness, is the deciding feature",
            "Then label by the first prominent sign: motor onset or non-motor onset",
            "A focal seizure that spreads is a focal to bilateral tonic-clonic seizure; secondarily generalised is retired",
          ],
        },
        {
          label: "Generalised onset",
          steps: [
            "Bilateral networks from the start, with awareness almost always impaired",
            "Motor: tonic-clonic, clonic, tonic, myoclonic, myoclonic-atonic, atonic, epileptic spasms",
            "Non-motor (absence): typical, atypical, myoclonic absence, absence with eyelid myoclonia",
          ],
        },
        {
          label: "Unknown onset",
          steps: [
            "Used when the beginning was unwitnessed",
            "May still be labelled motor (tonic-clonic, epileptic spasms) or non-motor (behaviour arrest)",
            "Unclassified is only for inadequate information - never guess an onset you did not have described",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Absence, focal impaired awareness and day-dreaming",
      caption:
        "Three minutes of hyperventilation in the consulting room settles most of this, and repeated at follow-up it measures control.",
      columns: [
        "Feature",
        "Typical absence",
        "Focal impaired awareness",
        "Day-dreaming",
      ],
      rows: [
        [
          "Onset",
          "Abrupt, no warning, no aura",
          "Often an aura - epigastric rising, fear, deja vu, smell",
          "Gradual, drifts off",
        ],
        ["Duration", "4-20 seconds, usually under 15", "30 seconds to 2 minutes", "Minutes, variable"],
        [
          "Frequency",
          "Tens to hundreds a day",
          "A few a week or a month",
          "Many, but only when bored or tired",
        ],
        [
          "Setting",
          "Any activity - mid-sentence, mid-meal, while running",
          "Any activity",
          "Never during physical activity or conversation",
        ],
        [
          "Interruptible",
          "No - touch, shouting and shaking do not stop it",
          "No",
          "Yes - a touch or a call ends it at once",
        ],
        [
          "After the event",
          "Immediate full recovery, resumes where she left off",
          "Post-ictal confusion, tiredness, headache",
          "Immediate, and the child knows she was not attending",
        ],
        [
          "Hyperventilation for 3 minutes",
          "Provokes an attack in over 90% untreated",
          "Does not provoke it",
          "Does not provoke it",
        ],
        [
          "EEG",
          "Generalised symmetrical 3 Hz spike-and-wave on a normal background",
          "Focal, often temporal, spikes or sharp waves",
          "Normal",
        ],
        [
          "Imaging",
          "Not required if typical",
          "MRI required - hippocampal sclerosis, dysplasia, neurocysticercosis",
          "Not required",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Seizure type: first line and the drugs that make it worse",
      caption:
        "The seizure type dictates the drug. Monotherapy controls about 70% - start one drug low, titrate to seizure freedom or intolerance, and only then switch to a second single drug.",
      columns: ["Seizure or epilepsy type", "First line", "Drugs to avoid"],
      rows: [
        [
          "Focal, with or without bilateral tonic-clonic spread",
          "Lamotrigine or levetiracetam; carbamazepine 400-1400 mg/day is a cheap and reasonable Indian first choice",
          "None specifically contraindicated; watch HLA-B*1502 and rash with carbamazepine",
        ],
        [
          "Generalised tonic-clonic",
          "Sodium valproate 1000-2000 mg/day, but not in girls or women of childbearing potential",
          "Carbamazepine, oxcarbazepine, phenytoin, gabapentin and vigabatrin if myoclonus or absence coexists",
        ],
        [
          "Typical absence (childhood absence epilepsy)",
          "Ethosuximide 20-30 mg/kg/day, max 1500 mg/day; valproate if a tonic-clonic seizure has ever occurred",
          "Carbamazepine, oxcarbazepine, phenytoin, gabapentin, pregabalin, vigabatrin, tiagabine - all aggravate absence",
        ],
        [
          "Myoclonic seizures and juvenile myoclonic epilepsy",
          "Sodium valproate; levetiracetam in a woman of childbearing potential",
          "Carbamazepine, oxcarbazepine, phenytoin, gabapentin, pregabalin, tiagabine, vigabatrin; lamotrigine may worsen the jerks",
        ],
        [
          "Tonic or atonic (Lennox-Gastaut and similar)",
          "Sodium valproate, with lamotrigine, rufinamide, clobazam or a ketogenic diet as adjuncts",
          "Carbamazepine, oxcarbazepine, gabapentin, pregabalin, vigabatrin",
        ],
        [
          "Provoked (acute symptomatic) seizure",
          "Correct the cause - glucose, sodium, calcium, alcohol withdrawal, drug",
          "Long-term antiseizure medicine is usually not indicated and is a common error",
        ],
      ],
    },
  ],
};

export default diagrams;
