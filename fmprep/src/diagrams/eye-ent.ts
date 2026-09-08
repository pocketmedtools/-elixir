/**
 * Diagrams for eye-ent, keyed by topic id.
 */
import type { DiagramSet } from "../lib/types";

const diagrams: DiagramSet = {
  "eye-ent-red-eye": [
    {
      kind: "compare",
      heading: "Differentiating the red eye at the bedside",
      caption: "Visual acuity is the single most discriminating bedside measurement - record it before any drop.",
      columns: ["Feature", "Conjunctivitis", "Keratitis / ulcer", "Anterior uveitis", "Angle closure"],
      rows: [
        [
          "Pain",
          "Grittiness, burning; no true pain",
          "Severe, sharp, with watering",
          "Deep ache, worse on accommodation",
          "Very severe, with headache and vomiting",
        ],
        [
          "Vision",
          "Normal",
          "Reduced",
          "Mildly to moderately reduced",
          "Markedly reduced, haloes around lights",
        ],
        [
          "Redness",
          "Superficial, maximal in fornices",
          "Ciliary (circumcorneal)",
          "Ciliary (circumcorneal)",
          "Mixed, congested episcleral veins",
        ],
        [
          "Cornea",
          "Clear",
          "Infiltrate that stains with fluorescein",
          "Clear, keratic precipitates behind",
          "Hazy and oedematous",
        ],
        [
          "Pupil",
          "Normal size and reaction",
          "Normal or small",
          "Small, irregular, sluggish (synechiae)",
          "Mid-dilated, vertically oval, fixed",
        ],
        ["Digital tension", "Normal", "Normal", "Normal or low", "Stony hard"],
        [
          "Immediate action",
          "Treat in the clinic",
          "Refer same day",
          "Refer same day",
          "Treat and refer within hours",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "Red eye: what stays in the clinic and what leaves it",
      root: "Red eye - record visual acuity first",
      arms: [
        {
          label: "Vision normal - treat in the clinic",
          tone: "good",
          steps: [
            "Bacterial conjunctivitis - chloramphenicol 1% ointment four times daily for 5 to 7 days",
            "Viral conjunctivitis - hygiene, cold compresses and lubricants only",
            "Allergic conjunctivitis - cold compress and olopatadine 0.1% twice daily",
            "Subconjunctival haemorrhage - check blood pressure, clears in 10 to 14 days",
            "Episcleritis - lubricants and an oral NSAID, self-limiting in 1 to 2 weeks",
          ],
        },
        {
          label: "Vision reduced - the dangerous four",
          tone: "warn",
          steps: [
            "Keratitis or corneal ulcer - stains with fluorescein; remove the contact lens and refer same day",
            "Anterior uveitis - small irregular pupil with ciliary injection; refer same day",
            "Acute angle-closure glaucoma - hard globe, hazy cornea; treat and refer within hours",
            "Endophthalmitis after surgery - hypopyon with falling vision; refer to the operating surgeon at once",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "First aid for acute angle closure while referral is arranged",
      caption: "The true ophthalmic emergency of general practice - pressure is usually above 40 mmHg.",
      steps: [
        {
          label: "Lie the patient supine",
          detail: "Analgesia and an antiemetic; the vomiting is part of the attack",
        },
        {
          label: "Acetazolamide 500 mg stat",
          detail: "Orally or intravenously, then 250 mg six-hourly; avoid in sulpha allergy, sickle disease and renal impairment",
        },
        {
          label: "Timolol 0.5% plus brimonidine 0.2%",
          detail: "Add prednisolone acetate 1%; avoid timolol in asthma, COPD, bradycardia and heart block",
        },
        {
          label: "Pilocarpine 2% only as pressure falls",
          detail: "One drop every 15 minutes for two doses; the sphincter is ischaemic above 40 to 50 mmHg. Never atropine - it worsens the block",
          tone: "warn",
        },
        {
          label: "Mannitol 20% intravenously 1 to 2 g/kg",
          detail: "Over 30 to 45 minutes if pressure stays very high; caution in cardiac failure and renal disease",
        },
        {
          label: "Refer for laser peripheral iridotomy",
          detail: "The same night, and prophylactically to the fellow eye - it carries a 40 to 80% risk of an attack",
          tone: "good",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Episcleritis versus scleritis",
      caption: "A drop of 2.5% phenylephrine is the bedside test when there is no slit lamp.",
      columns: ["Feature", "Episcleritis", "Scleritis"],
      rows: [
        ["Pain", "Mild discomfort or none", "Severe boring pain that wakes the patient"],
        ["Colour", "Bright salmon pink, often sectoral", "Deep violaceous, diffuse or nodular"],
        ["2.5% phenylephrine", "Vessels blanch", "Vessels do not blanch"],
        ["Tenderness", "Absent or slight", "Marked"],
        [
          "Systemic association",
          "Usually none",
          "Rheumatoid arthritis, granulomatosis with polyangiitis, tuberculosis",
        ],
        [
          "Treatment",
          "Lubricants and an oral NSAID; settles in 1 to 2 weeks",
          "Systemic NSAID or steroid, immunosuppression; ophthalmology and rheumatology",
        ],
        ["Threat to sight", "Negligible", "Scleral thinning, perforation, keratitis, glaucoma"],
      ],
    },
  ],

  "eye-ent-otitis": [
    {
      kind: "compare",
      heading: "Separating the painful or discharging ear",
      caption: "The smell and the site of the perforation, not the volume of discharge, decide safe from unsafe.",
      columns: ["Feature", "Acute otitis media", "Otitis externa", "CSOM safe (mucosal)", "CSOM unsafe (squamous)"],
      rows: [
        [
          "Pain",
          "Severe, relieved by perforation",
          "Severe, worse on chewing",
          "Usually painless",
          "Painless; pain suggests a complication",
        ],
        ["Tragal tenderness", "Absent", "Present - the key sign", "Absent", "Absent"],
        [
          "Discharge",
          "Absent until perforation, then mucopurulent",
          "Scanty, watery or purulent, no mucus",
          "Profuse, mucoid, odourless",
          "Scanty, purulent, foul-smelling",
        ],
        [
          "Tympanic membrane",
          "Bulging, red, immobile",
          "Intact but obscured by oedema",
          "Central pars tensa perforation",
          "Attic or marginal perforation, retraction pocket",
        ],
        [
          "Hearing",
          "Mild conductive loss",
          "Normal or mild loss from occlusion",
          "Conductive loss 20 to 40 dB",
          "Conductive, may be mixed if the labyrinth is eroded",
        ],
        [
          "Treatment",
          "Analgesia, oral amoxicillin by rule",
          "Aural toilet plus topical drops",
          "Aural toilet, quinolone drops, elective tympanoplasty",
          "ENT referral for CT and mastoid surgery",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Acute otitis media in the clinic",
      caption: "About 80% settle in 3 days without an antibiotic; 15 children are treated for one extra child better at 2 to 7 days.",
      steps: [
        {
          label: "Confirm it on otoscopy",
          detail: "Bulging or immobile drum on pneumatic otoscopy; redness in a screaming child proves nothing",
        },
        {
          label: "Regular analgesia is the first prescription",
          detail: "Paracetamol 15 mg/kg six-hourly or ibuprofen 10 mg/kg eight-hourly for 48 to 72 hours",
          tone: "good",
        },
        {
          label: "Decide immediate or delayed antibiotic",
          detail: "By age, laterality, perforation and toxicity - see the rule alongside",
          tone: "decision",
        },
        {
          label: "Amoxicillin 80 to 90 mg/kg/day",
          detail: "In 2 to 3 divided doses; 10 days under 2 years or if perforated, 5 to 7 days over 2 years with mild disease",
        },
        {
          label: "No better at 48 to 72 hours",
          detail: "Switch to amoxicillin-clavulanate 90/6.4 mg/kg/day for 10 days; azithromycin 10 mg/kg day 1 then 5 mg/kg if penicillin allergic",
        },
        {
          label: "Review at 6 to 12 weeks",
          detail: "Confirm the effusion has cleared and hearing has returned; refer if bilateral effusion persists beyond 3 months",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Immediate antibiotic or delayed prescription in AOM",
      root: "Child with acute otitis media",
      arms: [
        {
          label: "Give an antibiotic immediately",
          tone: "warn",
          steps: [
            "Age under 6 months",
            "Age 6 to 24 months with bilateral disease",
            "Otorrhoea from a fresh perforation",
            "Severe otalgia, temperature above 39 degrees C or systemic toxicity",
            "Immunodeficiency, craniofacial anomaly or a cochlear implant",
          ],
        },
        {
          label: "Otherwise delayed prescribing",
          tone: "good",
          steps: [
            "Regular analgesia with a written back-up prescription",
            "Start it only if there is no improvement in 48 to 72 hours",
            "Halves antibiotic use without increasing complications",
            "Safety-net: swelling behind the ear, drowsiness, vomiting or facial asymmetry - return today",
          ],
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Otitis externa: escalating treatment",
      caption: "Aural toilet is treatment, not preparation for treatment - drops cannot work through debris.",
      steps: [
        {
          label: "Aural toilet under vision",
          detail: "Dry mopping or suction; syringe only if the drum is known to be intact",
          tone: "good",
        },
        {
          label: "Topical antibiotic-steroid drops",
          detail: "Ciprofloxacin 0.3% with dexamethasone, 3 to 4 drops three times daily for 7 to 10 days",
        },
        {
          label: "Medicated wick if the canal is closed",
          detail: "Ribbon gauze with 8% aluminium acetate or an antibiotic-steroid preparation, for 48 hours",
        },
        {
          label: "Systemic antibiotic only if it spreads",
          detail: "Cellulitis beyond the canal, diabetes with severe disease or immunosuppression; not in uncomplicated disease",
        },
        {
          label: "Admit for malignant otitis externa",
          detail: "Elderly diabetic, unremitting night otalgia, canal-floor granulations, high ESR; ciprofloxacin 750 mg twice daily for 6 to 8 weeks",
          tone: "warn",
        },
      ],
    },
  ],

  "eye-ent-sore-throat": [
    {
      kind: "flow",
      heading: "Managing a sore throat in family practice",
      caption: "About 70 to 85% of adult sore throats are viral; the reason to treat strep in India is rheumatic fever prevention.",
      steps: [
        {
          label: "Symptomatic treatment for everyone",
          detail: "Paracetamol 15 mg/kg six-hourly or ibuprofen 10 mg/kg eight-hourly, fluids, warm saline gargles, rest",
          tone: "good",
        },
        {
          label: "Score with Centor and McIsaac",
          detail: "Fever above 38 degrees C, tonsillar exudate, tender anterior cervical nodes, absence of cough, plus the age adjustment",
          tone: "decision",
        },
        {
          label: "Score 0 to 1 - no test, no antibiotic",
          detail: "Probability of group A strep about 1 to 10%; analgesia and safety-netting",
        },
        {
          label: "Score 2 to 3 - test, or delay the script",
          detail: "RADT or throat culture and treat only if positive; delayed prescription where testing is unavailable",
        },
        {
          label: "Score 4 to 5 - penicillin V for 10 days",
          detail: "Probability about 51 to 53%; empirical treatment is acceptable in a high rheumatic fever setting such as India",
        },
        {
          label: "Treatment within 9 days still prevents ARF",
          detail: "It does not prevent post-streptococcal glomerulonephritis; return to school 24 hours after starting the antibiotic",
          tone: "good",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Acting on the McIsaac score",
      caption: "McIsaac adds one point for age 3 to 14 years, none for 15 to 44, and subtracts one at 45 years or older.",
      columns: ["Score", "Chance of group A strep", "What to do"],
      rows: [
        ["0 to 1", "1 to 10%", "No test, no antibiotic; analgesia, fluids, gargles and safety-netting"],
        ["2", "About 11 to 17%", "RADT or throat culture; treat only if positive, or give a delayed prescription"],
        ["3", "About 28 to 35%", "RADT or culture; treat if positive; delayed prescription if testing is unavailable"],
        [
          "4 to 5",
          "About 51 to 53%",
          "Test where available; empirical penicillin is acceptable in high rheumatic fever settings",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Antibiotics for streptococcal pharyngitis",
      caption: "Streptococcus pyogenes has never been shown to be penicillin resistant.",
      columns: ["Drug", "Dose", "Duration"],
      rows: [
        [
          "Penicillin V (first line)",
          "Under 27 kg 250 mg two to three times daily; 27 kg or more and adults 500 mg twice daily",
          "10 days",
        ],
        ["Amoxicillin (palatable alternative)", "50 mg/kg once daily, maximum 1000 mg", "10 days"],
        [
          "Benzathine penicillin G (poor adherence)",
          "600,000 units intramuscularly under 27 kg; 1.2 million units if 27 kg or more",
          "Single dose",
        ],
        ["Cephalexin (non-anaphylactic allergy)", "20 mg/kg twice daily, maximum 500 mg per dose", "10 days"],
        ["Azithromycin (anaphylactic allergy)", "12 mg/kg once daily, maximum 500 mg", "5 days"],
        ["Clindamycin (alternative)", "7 mg/kg three times daily, maximum 300 mg per dose", "10 days"],
      ],
    },
    {
      kind: "branch",
      heading: "Sore throats that are not simple pharyngitis",
      root: "Sore throat with something else going on",
      arms: [
        {
          label: "Peritonsillar abscess (quinsy)",
          tone: "warn",
          steps: [
            "Trismus, muffled voice, drooling, unilateral palatal bulge with the uvula pushed across",
            "Same-day needle aspiration or incision and drainage",
            "Intravenous amoxicillin-clavulanate 1.2 g eight-hourly, or benzylpenicillin with metronidazole",
            "Dexamethasone 10 mg as an adjunct; interval tonsillectomy after 4 to 6 weeks",
          ],
        },
        {
          label: "Infectious mononucleosis",
          steps: [
            "Membranous tonsillitis with generalised lymphadenopathy, splenomegaly and profound fatigue",
            "Monospot and atypical lymphocytes confirm it",
            "Never ampicillin or amoxicillin - 80 to 90% develop a florid maculopapular rash",
            "Steroids for airway obstruction; no contact sport for 4 to 6 weeks",
          ],
        },
        {
          label: "Diphtheria",
          tone: "warn",
          steps: [
            "Unimmunised child, greyish adherent membrane that bleeds when removed, bull neck",
            "Toxaemia out of proportion to a modest fever",
            "Give antitoxin on clinical suspicion, without waiting for culture",
            "Penicillin or erythromycin, isolation and notification",
          ],
        },
      ],
    },
  ],

  "eye-ent-rhinitis-sinusitis": [
    {
      kind: "ladder",
      heading: "Stepwise treatment of allergic rhinitis",
      caption: "Check spray technique and adherence before adding a second drug; review at 2 to 4 weeks.",
      steps: [
        {
          label: "Allergen avoidance and saline irrigation",
          detail: "5 to 10 mL per nostril once or twice daily; cheap and safe in children and pregnancy",
          tone: "good",
        },
        {
          label: "Oral second-generation antihistamine",
          detail: "Levocetirizine 5 mg at night or fexofenadine 120 to 180 mg daily; avoid chlorpheniramine",
        },
        {
          label: "Intranasal corticosteroid",
          detail: "Fluticasone or mometasone 50 microgram, 2 sprays per nostril once daily; full benefit takes 1 to 2 weeks",
        },
        {
          label: "Add azelastine or montelukast",
          detail: "Azelastine 1 spray per nostril twice daily; montelukast 10 mg at night is an add-on with neuropsychiatric warnings",
        },
        {
          label: "Allergen immunotherapy for 3 to 5 years",
          detail: "The only disease-modifying option, for proven single-allergen sensitisation with inadequate control",
        },
        {
          label: "Not on the ladder: decongestants",
          detail: "Oxymetazoline for no more than 3 to 5 days - rhinitis medicamentosa; no oral prednisolone or depot steroid",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "ARIA classification and first-line treatment",
      caption: "Intermittent is under 4 days a week or under 4 weeks; persistent is 4 or more days a week and over 4 weeks.",
      columns: ["Category", "Definition", "First-line treatment"],
      rows: [
        [
          "Mild intermittent",
          "Under 4 days a week or under 4 weeks; sleep and activity normal",
          "Avoidance, saline irrigation, oral antihistamine as needed",
        ],
        [
          "Moderate-severe intermittent",
          "Under 4 days a week or under 4 weeks, but sleep, school, work or sport impaired",
          "Intranasal corticosteroid with an antihistamine as required",
        ],
        [
          "Mild persistent",
          "4 or more days a week and over 4 weeks; sleep and activity normal",
          "Intranasal corticosteroid, or a regular oral antihistamine",
        ],
        [
          "Moderate-severe persistent",
          "4 or more days a week and over 4 weeks with impairment",
          "Intranasal corticosteroid plus azelastine; review in 2 to 4 weeks; consider immunotherapy",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Viral versus bacterial acute rhinosinusitis",
      caption: "Only 0.5 to 2% of viral upper respiratory infections become bacterial - the time course decides, not the colour.",
      columns: ["Feature", "Viral", "Bacterial"],
      rows: [
        ["Duration", "Peaks at 3 to 5 days, improves by day 7 to 10", "Persists beyond 10 days without improvement"],
        ["Pattern", "Steady improvement", "Double sickening - improvement then worsening after 5 to 6 days"],
        [
          "Fever",
          "Low grade, early, settles in 24 to 48 hours",
          "Above 39 degrees C with purulent discharge for 3 to 4 consecutive days",
        ],
        ["Discharge", "Watery then mucoid; colour alone means nothing", "Persistently purulent, often unilateral"],
        ["Facial pain", "Mild pressure", "Localised unilateral pain, worse on bending forward"],
        [
          "Treatment",
          "Saline irrigation, intranasal steroid, analgesia; no antibiotic",
          "Amoxicillin-clavulanate 625 mg three times daily for 5 to 10 days",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Preseptal versus orbital cellulitis",
      caption: "Orbital cellulitis usually comes from the ethmoid sinus through the lamina papyracea.",
      columns: ["Feature", "Preseptal cellulitis", "Orbital cellulitis"],
      rows: [
        ["Visual acuity", "Normal", "Reduced, with impaired colour vision"],
        ["Eye movements", "Full and painless", "Restricted and painful; diplopia"],
        ["Proptosis", "Absent", "Present"],
        ["Chemosis", "Absent or minimal", "Present"],
        ["Pupil", "Normal", "May show a relative afferent pupillary defect"],
        [
          "Management",
          "Oral amoxicillin-clavulanate, review in 24 hours",
          "Admit, contrast CT of orbit and sinuses, intravenous antibiotics, drainage of any abscess",
        ],
      ],
    },
  ],

  "eye-ent-refractive-error": [
    {
      kind: "compare",
      heading: "Refractive errors at a glance",
      caption: "Acuity that improves with a pinhole is optical and correctable with spectacles.",
      columns: ["Error", "Where the image falls", "Typical symptoms", "Correcting lens"],
      rows: [
        [
          "Myopia",
          "In front of the retina",
          "Blurred distance vision, sitting close to the board",
          "Concave (minus) spherical lens",
        ],
        [
          "Hypermetropia",
          "Behind the retina",
          "Eye strain, frontal headache after reading, convergent squint in children",
          "Convex (plus) spherical lens",
        ],
        [
          "Astigmatism",
          "No single point focus; two focal lines",
          "Distortion, tilted letters, blur at all distances",
          "Cylindrical lens",
        ],
        [
          "Presbyopia",
          "Loss of accommodative amplitude",
          "Holding print further away after age 40",
          "Convex reading addition, +1.00 D to +3.00 D",
        ],
        [
          "Anisometropia",
          "Unequal refraction in the two eyes",
          "Asymptomatic in children; suppression and amblyopia",
          "Spectacles or contact lenses; refer children promptly",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "WHO visual impairment by presenting acuity",
      caption: "Presenting acuity in the better eye - measured as the patient walks in, not best corrected.",
      steps: [
        { label: "Normal or near normal vision", detail: "6/12 or better", tone: "good" },
        { label: "Mild visual impairment", detail: "Worse than 6/12 to 6/18" },
        { label: "Moderate visual impairment", detail: "Worse than 6/18 to 6/60" },
        { label: "Severe visual impairment", detail: "Worse than 6/60 to 3/60" },
        {
          label: "Blindness",
          detail: "Worse than 3/60 - India adopted this definition in 2017, replacing 6/60",
          tone: "warn",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Vision screening across the life course",
      caption: "A child never complains of one bad eye - amblyopia is found only by screening.",
      steps: [
        {
          label: "Newborn and 6 to 8 weeks",
          detail: "Red reflex (Bruckner) test; an absent or white reflex means urgent referral",
        },
        {
          label: "Preterm under 34 weeks or under 2000 g",
          detail: "ROP screening at 4 weeks of age or 31 weeks post-menstrual age, whichever is later",
          tone: "warn",
        },
        {
          label: "3 to 5 years",
          detail: "Picture or Tumbling E acuity, cover test, Hirschberg; refer if worse than 6/9 or a two-line difference",
        },
        {
          label: "School years",
          detail: "Teacher-led screening with a 6/9 Snellen cut-off under NPCBVI; free spectacles for government school children",
        },
        {
          label: "Adults 18 to 40",
          detail: "Opportunistic acuity with pinhole; do not certify driving with acuity worse than 6/12 in the better eye",
        },
        {
          label: "40 years and above",
          detail: "Presbyopic near add, glaucoma risk, and a dilated retinal examination annually in everyone with diabetes",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Presbyopic near addition by age",
      caption: "Physiological, progressive until about 60, and reviewed every 2 to 3 years.",
      steps: [
        { label: "40 to 45 years", detail: "+1.00 D" },
        { label: "45 to 50 years", detail: "+1.50 D" },
        { label: "50 to 55 years", detail: "+2.00 D" },
        { label: "55 to 60 years", detail: "+2.50 D" },
        {
          label: "Over 60 years",
          detail: "+2.50 to +3.00 D, rarely more. Sudden unaided reading in an elderly patient is second sight from nuclear cataract",
          tone: "warn",
        },
      ],
    },
  ],

  "eye-ent-cataract-dr-glaucoma": [
    {
      kind: "compare",
      heading: "Separating the three at the bedside",
      caption: "All three are silent until late; only the cataract announces itself early.",
      columns: ["Feature", "Cataract", "Diabetic retinopathy", "Open-angle glaucoma"],
      rows: [
        [
          "Symptoms",
          "Gradual painless blurring, glare, second sight",
          "None until maculopathy or haemorrhage",
          "None until advanced field loss",
        ],
        ["Pinhole", "Little or no improvement", "No improvement", "No improvement"],
        ["Red reflex", "Dulled, with dark opacity shadows", "Normal until vitreous haemorrhage", "Normal"],
        [
          "Disc",
          "Not visible if dense",
          "Normal, or new vessels on the disc",
          "Cup-to-disc 0.6 or more, rim notching, disc haemorrhage",
        ],
        [
          "Field",
          "Generalised blur",
          "Central loss with maculopathy",
          "Peripheral loss first, central acuity spared until late",
        ],
        [
          "Key clinic test",
          "Red reflex and pinhole",
          "Dilated fundus examination or fundus photography",
          "Disc assessment, intraocular pressure, perimetry",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Diabetic retinopathy screening and referral intervals",
      caption: "Retinopathy is silent - screening, not symptoms, is the intervention.",
      columns: ["Situation", "First screen", "Then", "Refer"],
      rows: [
        ["Type 2 diabetes", "At diagnosis", "Annually if no retinopathy", "Any retinopathy"],
        ["Type 1 diabetes", "5 years after diagnosis, from age 10", "Annually", "Any retinopathy"],
        [
          "Pregnancy with pre-existing diabetes",
          "First trimester",
          "Each trimester and to 12 months postpartum",
          "Any progression",
        ],
        ["Mild non-proliferative retinopathy", "-", "6 to 12 monthly review", "Routine ophthalmology review"],
        [
          "Moderate to severe non-proliferative",
          "-",
          "3 to 6 monthly",
          "Within weeks - may progress to proliferative disease",
        ],
        [
          "Proliferative disease or macular oedema",
          "-",
          "Ophthalmologist directed",
          "Urgent - laser or anti-VEGF needed",
        ],
        ["Sudden loss, floaters or a curtain", "-", "-", "Same day - vitreous haemorrhage or tractional detachment"],
      ],
    },
    {
      kind: "compare",
      heading: "Glaucoma drops in primary care",
      caption: "Teach punctal occlusion for one minute after instillation to cut systemic absorption.",
      columns: ["Drug", "Dose", "Main cautions"],
      rows: [
        [
          "Latanoprost 0.005% (prostaglandin)",
          "1 drop at night, lowers pressure 25 to 35%",
          "Iris and periocular darkening, lash growth, hyperaemia",
        ],
        [
          "Timolol 0.5% (beta-blocker)",
          "1 drop twice daily",
          "Asthma, COPD, bradycardia, heart block, masking of hypoglycaemia",
        ],
        [
          "Brimonidine 0.2% (alpha-2 agonist)",
          "1 drop two to three times daily",
          "Allergic conjunctivitis, drowsiness; contraindicated in infants",
        ],
        [
          "Dorzolamide 2% (carbonic anhydrase)",
          "1 drop three times daily, or twice daily in combination",
          "Stinging, bitter taste, sulpha allergy",
        ],
        [
          "Acetazolamide 250 mg oral",
          "250 mg two to four times daily, short term only",
          "Paraesthesiae, hypokalaemia, renal stones; avoid in sulpha allergy and renal disease",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Referral urgency for the family physician",
      caption: "From the routine list to the same hour - where each eye finding belongs.",
      steps: [
        { label: "Cataract impairing daily function", detail: "Routine referral for elective surgery" },
        {
          label: "Cup-to-disc 0.6 or more, or asymmetry 0.2",
          detail: "Within weeks for perimetry and gonioscopy; a normal pressure does not exclude glaucoma",
        },
        {
          label: "Proliferative retinopathy or macular oedema",
          detail: "Within days - laser or anti-VEGF is needed",
        },
        {
          label: "Leukocoria or absent red reflex in a child",
          detail: "Same day to same week - retinoblastoma or congenital cataract",
          tone: "warn",
        },
        {
          label: "New floaters and flashes in a diabetic",
          detail: "Same day - retinal tear or vitreous haemorrhage",
          tone: "warn",
        },
        {
          label: "Sudden painless loss, or a curtain",
          detail: "Same day - detachment, vascular occlusion or vitreous haemorrhage; do not book a refraction",
          tone: "warn",
        },
        {
          label: "Painful red eye, hard globe, hazy cornea",
          detail: "Within hours - acute angle-closure glaucoma",
          tone: "warn",
        },
      ],
    },
  ],

  "eye-ent-hearing-loss": [
    {
      kind: "compare",
      heading: "Tuning fork tests with a 512 Hz fork",
      caption: "A normal absolute bone conduction proves the cochlea is working, which is what separates a true from a false negative Rinne.",
      columns: ["Condition", "Rinne (affected ear)", "Weber", "Absolute bone conduction"],
      rows: [
        ["Normal hearing", "Positive (AC greater than BC)", "Central, in the midline", "Normal, equal to the examiner"],
        ["Conductive loss", "Negative (BC greater than AC)", "Lateralised to the worse ear", "Normal"],
        ["Sensorineural loss", "Positive, but AC and BC both reduced", "Lateralised to the better ear", "Reduced"],
        [
          "Dead ear (severe unilateral SNHL)",
          "False negative - sound crosses to the other cochlea",
          "Lateralised to the better ear",
          "Reduced in the dead ear",
        ],
        ["Mixed loss", "Negative", "Usually to the larger conductive component", "Reduced"],
      ],
    },
    {
      kind: "flow",
      heading: "The 1-3-6 rule for newborn hearing",
      caption: "Any parent who says the child does not hear must be believed and tested.",
      steps: [
        {
          label: "Screen every newborn by 1 month",
          detail: "Otoacoustic emissions first, with automated auditory brainstem response for referrals and all high-risk babies",
        },
        {
          label: "Confirm the diagnosis by 3 months",
          detail: "Diagnostic audiology; never watchful waiting",
          tone: "decision",
        },
        {
          label: "Start intervention by 6 months",
          detail: "Hearing aid fitting, speech therapy and family communication training",
          tone: "good",
        },
        {
          label: "Cochlear implant before 2 to 3 years",
          detail: "For severe to profound loss with inadequate benefit from aids; funded under ADIP and NPPCD",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Sudden sensorineural hearing loss - the stroke of the ear",
      caption: "The treatment window is largely closed by two weeks.",
      steps: [
        {
          label: "Loss of 30 dB over 3 frequencies in 72 h",
          detail: "With a normal drum on otoscopy - an otological emergency, not wax",
          tone: "warn",
        },
        {
          label: "Start prednisolone within 72 hours",
          detail: "1 mg/kg/day, maximum 60 mg, for 7 to 14 days with a taper",
          tone: "good",
        },
        { label: "Urgent audiometry", detail: "To document the loss before it is treated away or forgotten" },
        { label: "MRI of the internal auditory meatus", detail: "To exclude a vestibular schwannoma" },
        { label: "Intratympanic steroid as salvage", detail: "When the oral course fails or is contraindicated" },
      ],
    },
    {
      kind: "ladder",
      heading: "WHO grades of hearing impairment",
      caption: "Pure tone average in the better ear.",
      steps: [
        { label: "Normal", detail: "Under 20 dB - no difficulty with speech", tone: "good" },
        { label: "Mild", detail: "20 to under 35 dB - difficulty with soft speech and in noise" },
        { label: "Moderate", detail: "35 to under 50 dB - difficulty with conversation; hearing aid usually needed" },
        { label: "Moderately severe", detail: "50 to under 65 dB - difficulty even with loud speech" },
        { label: "Severe", detail: "65 to under 80 dB - hears only very loud speech; aid essential" },
        { label: "Profound", detail: "80 to under 95 dB - little speech perception; consider a cochlear implant" },
        {
          label: "Complete or total deafness",
          detail: "95 dB or more - no useful hearing; cochlear implant or sign language",
          tone: "warn",
        },
      ],
    },
  ],

  "eye-ent-epistaxis-foreign-bodies": [
    {
      kind: "ladder",
      heading: "Stepwise control of epistaxis",
      caption: "About 90 to 95% arise from Little's area, where four arteries anastomose.",
      steps: [
        {
          label: "Assess and resuscitate",
          detail: "Pulse, blood pressure, pallor; intravenous access, haemoglobin, platelets, INR, group and save",
        },
        {
          label: "First aid - the Trotter method",
          detail: "Sit up leaning forward, mouth breathing, pinch the soft part of the nose for 10 to 15 minutes without releasing; ice pack to the bridge",
          tone: "good",
        },
        {
          label: "Topical vasoconstrictor pledget",
          detail: "4% lidocaine with 1:1000 adrenaline, or oxymetazoline, for 5 to 10 minutes; topical tranexamic acid",
        },
        {
          label: "Silver nitrate cautery",
          detail: "To the visible bleeding point for 5 to 10 seconds. Never cauterise both sides of the septum at one sitting",
          tone: "warn",
        },
        {
          label: "Anterior pack",
          detail: "Ribbon gauze in horizontal layers, or a nasal tampon or balloon, for 24 to 48 hours; antibiotic cover beyond 48 hours",
        },
        {
          label: "Posterior pack and admission",
          detail: "Foley balloon with 5 to 10 mL saline in the nasopharynx plus anterior packing; monitor for hypoxia and arrhythmia",
          tone: "warn",
        },
        {
          label: "Definitive surgical control",
          detail: "Endoscopic sphenopalatine artery ligation, embolisation or anterior ethmoidal ligation; correct any coagulopathy",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Anterior versus posterior epistaxis",
      caption: "Hypertension aggravates and prolongs a nosebleed but rarely starts it - treat the bleeding first.",
      columns: ["Feature", "Anterior", "Posterior"],
      rows: [
        ["Proportion of cases", "About 90 to 95%", "About 5 to 10%"],
        [
          "Usual source",
          "Little's area, the Kiesselbach plexus on the septum",
          "Sphenopalatine branches, Woodruff plexus",
        ],
        [
          "Typical patient",
          "Children and young adults; digital trauma, dry air",
          "Elderly, hypertensive, atherosclerotic, anticoagulated",
        ],
        [
          "Direction of bleeding",
          "Out of the nostril, usually one side",
          "Into the pharynx, often both nostrils, blood swallowed",
        ],
        ["Pinching the nose", "Usually effective", "Ineffective"],
        [
          "Management",
          "Pressure, pledget, silver nitrate cautery, anterior pack",
          "Posterior pack or balloon, admission, ligation or embolisation",
        ],
        ["Risk", "Usually minor", "Hypovolaemia, aspiration, hypoxia, arrhythmia; can be fatal"],
      ],
    },
    {
      kind: "branch",
      heading: "Foreign bodies: the site decides the rule",
      root: "Foreign body in ear, nose, throat or airway",
      arms: [
        {
          label: "External ear canal",
          steps: [
            "Pass a fine right-angled hook beyond a smooth round object and withdraw it under vision",
            "Crocodile forceps only for compressible objects - they slip on a bead and push it deeper",
            "Kill a live insect first with 2% lidocaine, mineral oil, glycerine or spirit",
            "Never syringe a vegetable body, a battery, a grommet or a suspected perforation",
          ],
        },
        {
          label: "Nose",
          steps: [
            "Unilateral foul or blood-stained discharge in a child is a foreign body until removed",
            "Try positive pressure - the parent blows into the mouth with the other nostril occluded",
            "Refer to ENT after one or two failed attempts",
          ],
        },
        {
          label: "Button battery - nose or oesophagus",
          tone: "warn",
          steps: [
            "Liquefactive necrosis and septal perforation within hours",
            "Remove from the nose immediately, and from the oesophagus within 2 hours",
            "Do not instil saline drops and do not wait for symptoms",
          ],
        },
        {
          label: "Oesophagus",
          steps: [
            "Drooling, dysphagia, pain, refusal of feeds; coin in children, bolus or bone in adults",
            "Lodges at the cricopharynx (commonest, about 15 cm from the incisors), aortic arch level or diaphragmatic hiatus",
            "Neck and chest radiographs including a lateral view, then rigid oesophagoscopy",
          ],
        },
        {
          label: "Bronchus",
          tone: "warn",
          steps: [
            "Choking, then a quiet interval, then persistent cough with a unilateral wheeze",
            "Right main bronchus is commoner - it is wider, shorter and more vertical",
            "A normal chest radiograph never excludes it; bronchoscope on the history",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Choking first aid by age",
      caption: "Blind finger sweeps are forbidden at every age.",
      columns: ["Age", "Effective cough", "Ineffective cough, conscious", "Unconscious"],
      rows: [
        [
          "Infant under 1 year",
          "Encourage coughing, do not intervene",
          "5 back blows then 5 chest thrusts, repeated; no abdominal thrusts",
          "Start CPR, inspect the mouth each cycle, remove only a visible object",
        ],
        [
          "Child over 1 year",
          "Encourage coughing",
          "5 back blows then 5 abdominal thrusts, repeated",
          "Start CPR, inspect the mouth each cycle",
        ],
        [
          "Adult",
          "Encourage coughing",
          "5 back blows then 5 abdominal thrusts (Heimlich), repeated",
          "Start CPR, inspect the mouth each cycle; call for help early",
        ],
      ],
    },
  ],
};

export default diagrams;
