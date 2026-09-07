import type { ClinicalCase, Subject, Topic } from "../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "neurology-headache",
  title: "Headache and migraine",
  oneLiner:
    "Headache is the commonest neurological complaint in family practice, and its management turns on a single first decision - whether this is a primary headache (migraine, tension-type or cluster) that can be diagnosed clinically and treated, or a secondary headache flagged by thunderclap onset, fever with neck stiffness, papilloedema, a new focal deficit, immunosuppression or new-onset headache after 50, which needs same-day imaging.",
  frequency: "core",
  keywords: [
    "migraine",
    "aura",
    "tension-type headache",
    "cluster headache",
    "ICHD-3",
    "sumatriptan",
    "naproxen",
    "flunarizine",
    "propranolol",
    "topiramate",
    "amitriptyline",
    "medication overuse headache",
    "thunderclap headache",
    "SNNOOP10",
    "idiopathic intracranial hypertension",
    "subarachnoid haemorrhage",
    "trigeminal neuralgia",
    "giant cell arteritis",
  ],
  sections: [
    {
      heading: "Burden and the first decision",
      points: [
        "Headache accounts for roughly 3-5% of all family practice consultations and more than a third of neurology referrals; the lifetime prevalence of headache in adults exceeds 90%.",
        "Indian community studies (the Karnataka and Bangalore door-to-door surveys) put the one-year prevalence of **migraine at about 25%**, with a female-to-male ratio near 3:1 and a peak between 25 and 45 years - the most economically productive decades.",
        "**The first decision is always primary versus secondary headache**, and it is made by history and examination, not by a scan. More than 90% of headaches reaching a family physician are primary.",
        "A confident **positive** diagnosis of migraine or tension-type headache using ICHD-3 criteria is far more useful than a negative CT scan, because a normal scan does not exclude any of the primary headaches and does not treat the patient.",
        "In a patient with a typical primary headache pattern, a normal neurological examination and no red flags, the yield of neuroimaging for a clinically significant lesion is **under 1%** - lower than the rate of incidental findings that generate anxiety and further tests.",
        "Three questions carry most of the diagnostic weight: how many different types of headache do you get, how did the worst one begin (over seconds, minutes or days), and how many days a month do you take a painkiller.",
        "Always record the **headache days per month and the analgesic days per month** in the notes; both are needed to diagnose chronic migraine and medication overuse headache and both are the outcome you follow.",
      ],
    },
    {
      heading: "Migraine: making the diagnosis by ICHD-3",
      points: [
        "**Migraine without aura (ICHD-3):** at least 5 attacks lasting 4-72 hours untreated, with at least **two of** unilateral site, pulsating quality, moderate or severe intensity, and aggravation by routine physical activity; **plus at least one of** nausea or vomiting, or photophobia together with phonophobia.",
        "**Migraine with aura:** at least 2 attacks of fully reversible visual, sensory, speech, motor, brainstem or retinal symptoms, each spreading gradually over 5 minutes or more and lasting 5-60 minutes, followed by headache within 60 minutes. The commonest aura is visual - a scintillating scotoma or fortification spectra marching across the field.",
        "**Chronic migraine:** headache on **15 or more days a month for more than 3 months**, with the features of migraine on at least 8 of those days. Most chronic migraine begins as episodic migraine that transformed, usually with medication overuse as the driver.",
        "The attack has four phases the patient will recognise once asked: prodrome (yawning, food craving, irritability, neck stiffness, hours to a day before), aura, headache, and postdrome (the washed-out day after).",
        "The **POUND** mnemonic is a useful bedside screen - Pulsating, duration 4-72 hOurs, Unilateral, Nausea, Disabling; four of five features give a likelihood ratio above 20 for migraine.",
        "**Menstrual migraine** occurs from two days before to three days after the onset of menstruation in at least two of three cycles; it is longer, more severe and less responsive to treatment, and responds to perimenstrual naproxen or frovatriptan.",
        "**Aura that should worry you:** sudden rather than gradual onset, always on the same side, lasting more than 60 minutes, associated with motor weakness, or first occurring after 50 - these need imaging to exclude TIA, focal seizure, arteriovenous malformation or a structural lesion.",
      ],
    },
    {
      heading: "Tension-type headache, cluster and the other primaries",
      points: [
        "**Tension-type headache** is bilateral, pressing or tightening (a band, a weight, a tight cap), mild to moderate, **not aggravated by routine activity**, and without nausea or vomiting; photophobia or phonophobia may be present but not both. It is the commonest headache in the population but the least often brought to the doctor.",
        "**Cluster headache** is strictly unilateral orbital, supraorbital or temporal pain of excruciating severity lasting 15-180 minutes, occurring from once every other day to eight times a day, with **ipsilateral cranial autonomic features** - conjunctival injection, lacrimation, nasal congestion or rhinorrhoea, eyelid oedema, ptosis and miosis - and a striking **restlessness and pacing** (contrast with the migraineur who lies still in a dark room).",
        "Cluster favours men, smokers and alcohol as a trigger during a bout, and shows circadian (often waking the patient at the same hour) and circannual clustering with pain-free remissions of months to years.",
        "**Acute cluster attack:** **high-flow oxygen 12-15 L/min by non-rebreathing mask for 15-20 minutes** and **subcutaneous sumatriptan 6 mg** (or intranasal sumatriptan 20 mg / zolmitriptan 5 mg); oral triptans and oral analgesics act too slowly to be useful.",
        "**Cluster prophylaxis:** verapamil 240-480 mg daily in divided doses, titrated with a baseline and serial ECG for PR prolongation and heart block, with a bridging course of **prednisolone 60 mg daily for 5 days then tapering over 2-3 weeks** while verapamil takes effect.",
        "**Trigeminal neuralgia:** paroxysms of electric-shock pain lasting seconds in the V2 or V3 distribution, triggered by chewing, talking, shaving, cold wind or touching a trigger zone, with a refractory period between paroxysms. First-line treatment is **carbamazepine 100 mg PO twice daily, titrated to 200 mg three or four times daily** (oxcarbazepine as an alternative); MRI is indicated in anyone under 40, with sensory loss, bilateral pain or a poor drug response, to exclude multiple sclerosis or a cerebellopontine angle tumour.",
        "**Hemicrania continua and paroxysmal hemicrania respond absolutely to indomethacin** (25-75 mg TDS) - the response is a diagnostic test, and a strictly unilateral daily headache with autonomic features deserves an indomethacin trial with gastric protection.",
      ],
    },
    {
      heading: "Red flags and who actually needs a scan",
      points: [
        "The SNNOOP10 list is the modern successor to SNOOP: **S**ystemic symptoms including fever, **N**eoplasm history, **N**eurological deficit, **O**nset sudden or thunderclap, **O**lder age (new headache after 50), **P**attern change, **P**ositional headache, **P**recipitated by Valsalva, **P**apilloedema, **P**rogressive headache, **P**regnancy or puerperium, **P**ainful eye with autonomic features, **P**ost-traumatic onset, **P**athology of the immune system such as HIV, and **P**ainkiller overuse.",
        "**Thunderclap headache** - maximum intensity within one minute - is subarachnoid haemorrhage until proved otherwise. A non-contrast CT within 6 hours of onset is close to 100% sensitive; beyond 6 hours a negative CT must be followed by **lumbar puncture at 12 hours or later looking for xanthochromia**, and by CT or MR angiography if suspicion persists (also consider reversible cerebral vasoconstriction syndrome, cervical artery dissection and pituitary apoplexy).",
        "**Fever with headache and neck stiffness** is meningitis: do not delay the first dose of antibiotic for imaging or for the lumbar puncture.",
        "**New headache after 50 with scalp tenderness, jaw claudication, visual symptoms and an ESR above 50 mm/h** is giant cell arteritis - start **prednisolone 40-60 mg daily (1 mg/kg, or intravenous methylprednisolone if there is visual loss) immediately** and arrange temporal artery biopsy within 1-2 weeks; the biopsy stays positive for days after steroids and sight lost is not recovered.",
        "**Headache worse on lying down, on waking, or with coughing and straining, with papilloedema**, suggests raised intracranial pressure - a mass lesion, cerebral venous sinus thrombosis, or idiopathic intracranial hypertension in a young obese woman (needs MRI with MR venography, then lumbar puncture with an opening pressure above 25 cm of water, then acetazolamide and weight loss, with urgent referral if vision is threatened).",
        "**Headache in pregnancy or the puerperium** demands exclusion of pre-eclampsia (blood pressure and urine protein first, always), cerebral venous sinus thrombosis and posterior reversible encephalopathy syndrome.",
        "**Headache in an immunosuppressed or HIV-positive patient** needs contrast imaging and usually cerebrospinal fluid examination - cryptococcal meningitis, cerebral toxoplasmosis, tuberculoma and primary CNS lymphoma all present with slowly progressive headache and few signs.",
        "Choose the test to the question: **non-contrast CT** for acute haemorrhage and trauma, **MRI** for posterior fossa and pituitary lesions, low-pressure and high-pressure syndromes, **MR venography** for sinus thrombosis, and **CT or MR angiography** for aneurysm and dissection.",
      ],
    },
    {
      heading: "Acute treatment of migraine",
      points: [
        "Two principles decide success: **treat early, while the pain is still mild**, and **use an adequate single dose** rather than repeated small doses, because gastric stasis during an attack impairs absorption once the headache is established.",
        "**Step 1 - simple analgesia with an antiemetic:** naproxen 500 mg, ibuprofen 400-600 mg, diclofenac 50 mg or aspirin 900 mg orally, combined with **domperidone 10 mg or metoclopramide 10 mg**, which treats the nausea and restores gastric emptying so the analgesic is absorbed.",
        "**Step 2 - a triptan:** sumatriptan 50-100 mg PO, rizatriptan 10 mg, or naratriptan 2.5 mg; repeat once after 2 hours if there is a partial response, to a maximum of two doses in 24 hours. Use **subcutaneous sumatriptan 6 mg or intranasal sumatriptan 20 mg** when there is early vomiting.",
        "A **triptan plus an NSAID together** (for example sumatriptan 85 mg with naproxen 500 mg) is more effective than either alone and reduces headache recurrence - the single most useful prescribing tip in resistant attacks.",
        "**Triptans are contraindicated** in ischaemic heart disease, previous myocardial infarction, uncontrolled hypertension, previous stroke, peripheral vascular disease, hemiplegic and brainstem-aura migraine, and within 24 hours of an ergot preparation; they are avoided rather than absolutely forbidden in pregnancy.",
        "**Do not use opioids, tramadol, butalbital combinations or ergotamine** for routine migraine: they are less effective, they are the drugs most likely to produce medication overuse headache, and ergot adds vascular risk.",
        "**Limit acute medication days** - triptans, opioids and combination analgesics to fewer than 10 days a month, and simple analgesics to fewer than 15 days a month - and say this number out loud to the patient at the first visit.",
        "**Clinic rescue for a severe or prolonged attack:** intravenous fluids, **metoclopramide 10 mg IV** (or chlorpromazine 12.5 mg IV with fluid preloading), **diclofenac 75 mg IM** or ketorolac 30 mg IV, and **dexamethasone 8 mg IV** which reduces headache recurrence in the following 72 hours.",
      ],
    },
    {
      heading: "Prevention and medication overuse headache",
      points: [
        "**Offer prophylaxis when** there are 4 or more attacks a month, attacks are prolonged or severely disabling despite optimal acute treatment, acute drugs are contraindicated or overused, or the migraine is hemiplegic, brainstem-aura or with prolonged aura.",
        "**Propranolol 20-40 mg PO twice daily, titrated to 80-160 mg a day** is the standard first choice; avoid it in asthma, in bradycardia and in depression, and remember it blunts the tachycardia of hypoglycaemia in a diabetic.",
        "**Amitriptyline 10-25 mg at night, titrated to 50-75 mg**, is best where there is coexistent tension-type headache, insomnia or a chronic pain syndrome; warn about dry mouth, sedation and weight gain, and avoid it in glaucoma, prostatism and cardiac conduction disease.",
        "**Topiramate 25 mg at night, increased by 25 mg weekly to 50-100 mg a day**, is effective and causes weight loss, but produces paraesthesiae, word-finding difficulty and renal stones, and is **teratogenic and reduces the efficacy of combined oral contraceptives**.",
        "**Flunarizine 5-10 mg at night** is inexpensive, widely used in India and genuinely effective; the price is weight gain, sedation, depression and, in the elderly, drug-induced parkinsonism. **Sodium valproate 500-1000 mg** works well but must not be used in women of childbearing potential.",
        "An adequate trial is **8-12 weeks at the target dose**, judged against a headache diary, and success is defined as a **50% reduction in headache days**, not abolition. Continue a successful preventive for 6-12 months, then taper.",
        "**Medication overuse headache** is headache on 15 or more days a month in a patient with a pre-existing primary headache, with regular overuse for more than 3 months of simple analgesics on 15 or more days a month, or triptans, opioids, ergots or combination analgesics on 10 or more days a month. Treatment is **withdrawal of the offending drug**, a preventive started at the same time, an explanation that headache will worsen for 1-2 weeks, and a bridging course of naproxen or a short prednisolone taper.",
        "Non-drug measures that genuinely work: regular sleep and meal times, hydration, aerobic exercise, treatment of comorbid depression and anxiety, and a trigger diary - but avoid imposing long elimination diets, which rarely help and often harm nutrition.",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**Pregnancy:** paracetamol 1 g is first line; NSAIDs may be used in the second trimester but are avoided after 30 weeks (ductal closure) and near conception; metoclopramide is safe; accumulated registry data for sumatriptan are reassuring. For prevention use low-dose propranolol or amitriptyline. **Any new or severe headache after 20 weeks is pre-eclampsia until blood pressure and urine protein prove otherwise.**",
        "**Migraine with aura is an absolute contraindication to combined hormonal contraception (WHO Medical Eligibility Criteria category 4)** because the ischaemic stroke risk multiplies; offer progestogen-only pills, injectables, implants, the copper or levonorgestrel intrauterine device, or barrier methods.",
        "Migraine improves in about two-thirds of women during the second and third trimesters and typically worsens again postpartum and around the perimenopause.",
        "**Children and adolescents:** attacks are shorter (2-72 hours), more often bilateral and frontotemporal, with prominent abdominal pain, motion sickness and travel-related vomiting. Ibuprofen 10 mg/kg is first line, with intranasal sumatriptan in adolescents; flunarizine and propranolol are the usual preventives.",
        "**New headache in a person over 50** is secondary until proved otherwise - giant cell arteritis, subdural haematoma (ask about a fall or anticoagulation), a mass lesion, cervical spondylosis and glaucoma all present this way.",
        "Migraine with aura roughly doubles the risk of ischaemic stroke, and the risk multiplies with smoking and combined oral contraceptives - which makes smoking cessation and contraceptive review part of migraine care, not a separate consultation.",
        "**Idiopathic intracranial hypertension** in an obese young woman with headache, transient visual obscurations, pulsatile tinnitus and papilloedema needs urgent visual field assessment; weight loss and acetazolamide 250-500 mg twice daily are first line, and failing vision is an indication for shunting or optic nerve sheath fenestration.",
      ],
    },
  ],
  tables: [
    {
      heading: "The three primary headaches at a glance",
      columns: ["Feature", "Migraine", "Tension-type", "Cluster"],
      rows: [
        ["Site", "Unilateral in 60%, may alternate", "Bilateral, band-like", "Strictly unilateral, orbital or temporal"],
        ["Character", "Pulsating, throbbing", "Pressing, tightening, non-pulsatile", "Boring, stabbing, excruciating"],
        ["Duration untreated", "4-72 hours", "30 minutes to 7 days", "15-180 minutes"],
        ["Frequency", "1-4 a month typically", "Episodic or daily", "1 every other day to 8 a day, in bouts"],
        ["Associated features", "Nausea, vomiting, photophobia and phonophobia, aura in 25%", "None, or one of photophobia or phonophobia", "Ipsilateral lacrimation, conjunctival injection, rhinorrhoea, ptosis, miosis"],
        ["Behaviour in attack", "Lies still in a dark quiet room", "Continues activity", "Restless, paces, may bang the head"],
        ["Typical patient", "Woman 25-45 years", "Any adult, stress and posture related", "Man 20-50 years, smoker"],
      ],
    },
    {
      heading: "Acute migraine drugs and doses",
      columns: ["Step", "Drug and dose", "Practical notes"],
      rows: [
        ["Antiemetic (add to every step)", "Domperidone 10 mg PO or metoclopramide 10 mg PO/IV", "Treats nausea and restores gastric emptying; metoclopramide can cause acute dystonia in the young"],
        ["Step 1 NSAID", "Naproxen 500 mg, ibuprofen 400-600 mg, diclofenac 50 mg or aspirin 900 mg PO", "Take at the first sign; avoid in peptic ulcer, CKD and third trimester"],
        ["Step 2 triptan", "Sumatriptan 50-100 mg PO, rizatriptan 10 mg PO, naratriptan 2.5 mg PO", "Repeat once after 2 hours; maximum two doses in 24 hours"],
        ["Vomiting at onset", "Sumatriptan 6 mg SC or 20 mg intranasal", "Fastest route; SC works within 10-15 minutes"],
        ["Best combination", "Sumatriptan 85 mg plus naproxen 500 mg together", "Superior to either alone and reduces recurrence"],
        ["Clinic rescue", "IV fluids, metoclopramide 10 mg IV, diclofenac 75 mg IM, dexamethasone 8 mg IV", "Dexamethasone reduces 72-hour recurrence"],
        ["Never", "Pethidine, tramadol, other opioids, ergotamine", "Poor efficacy and the highest risk of medication overuse headache"],
      ],
    },
    {
      heading: "Migraine preventives",
      columns: ["Drug", "Dose", "Best in", "Avoid in"],
      rows: [
        ["Propranolol", "20-40 mg PO BD up to 160 mg/day", "Coexistent hypertension, anxiety, tremor", "Asthma, bradycardia, depression, brittle diabetes"],
        ["Amitriptyline", "10-25 mg at night up to 75 mg", "Coexistent tension-type headache, insomnia, chronic pain", "Glaucoma, prostatism, cardiac conduction disease"],
        ["Topiramate", "25 mg at night, up to 50-100 mg/day", "Obesity, coexistent epilepsy", "Pregnancy, renal stones, cognitive-demanding work"],
        ["Flunarizine", "5-10 mg at night", "Cost-constrained practice, vestibular migraine", "Depression, obesity, elderly (parkinsonism)"],
        ["Sodium valproate", "500-1000 mg/day", "Coexistent epilepsy in men", "Any woman of childbearing potential, liver disease"],
        ["Candesartan", "8-16 mg PO OD", "Coexistent hypertension, intolerance of beta-blockers", "Pregnancy, hyperkalaemia, renal artery stenosis"],
      ],
    },
  ],
  redFlags: [
    "Thunderclap headache reaching maximum intensity within one minute - subarachnoid haemorrhage until excluded by CT within 6 hours, and by lumbar puncture for xanthochromia after 12 hours if the CT is late or negative.",
    "Headache with fever, neck stiffness or a purpuric rash - bacterial meningitis; give the first dose of ceftriaxone before imaging or lumbar puncture.",
    "New headache after 50 with scalp tenderness, jaw claudication or transient visual loss - giant cell arteritis; start prednisolone 40-60 mg the same day and arrange temporal artery biopsy.",
    "Papilloedema, or headache worse on lying flat, on waking, or with coughing and straining - raised intracranial pressure; image before lumbar puncture.",
    "Headache with any new focal neurological deficit, seizure, personality change or progressive cognitive decline - structural lesion, image urgently.",
    "New or changed headache in an HIV-positive, transplanted or otherwise immunosuppressed patient - cryptococcal meningitis, toxoplasmosis, tuberculoma or lymphoma.",
    "New headache in pregnancy or within 6 weeks of delivery - check blood pressure and urine protein for pre-eclampsia, then consider cerebral venous sinus thrombosis.",
    "Headache with a painful red eye, a fixed mid-dilated pupil and haloes around lights - acute angle-closure glaucoma; same-hour ophthalmology referral.",
  ],
  pearls: [
    "The commonest cause of daily headache in a patient who already had migraine is medication overuse headache - always count analgesic days a month before adding another drug.",
    "The migraineur lies still in a dark room; the cluster patient paces the veranda. Behaviour during the attack is a free diagnostic test.",
    "A triptan plus an NSAID taken together beats either alone, and treating early beats treating hard.",
    "Migraine with aura plus combined oral contraceptives plus smoking is the stroke triad in a young woman - the pill must be stopped, not merely discussed.",
    "Absolute response to indomethacin defines hemicrania continua and paroxysmal hemicrania; give the trial before labelling any strictly unilateral daily headache as chronic migraine.",
    "In suspected giant cell arteritis, steroids are started before the biopsy - the biopsy remains positive for up to two weeks, but sight lost is never regained.",
    "A normal CT scan does not exclude migraine, meningitis, giant cell arteritis, venous sinus thrombosis or idiopathic intracranial hypertension; the history remains the test.",
    "Success in prophylaxis is a halving of headache days recorded in a diary, not the disappearance of headache; say so at the start or the patient will call the drug a failure at week three.",
  ],
  theory: [
    {
      id: "neurology-headache-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 28-year-old schoolteacher presents with recurrent throbbing headaches for four years, now occurring six times a month and interfering with her work. Describe how you would evaluate her and outline the acute and preventive management of migraine in family practice.",
      openingLines: [
        "Migraine is a chronic disorder of recurrent headache diagnosed by the ICHD-3 criteria - at least five attacks lasting 4-72 hours with two of unilateral, pulsating, moderate to severe or activity-aggravated pain, plus nausea or vomiting or the combination of photophobia and phonophobia.",
        "It affects about 25% of Indian women of this age group, and the objectives here are to make a positive clinical diagnosis, exclude secondary headache by red flags rather than by scanning, treat the acute attack adequately, and start prophylaxis because she has six disabling headache days a month.",
      ],
      answer: [
        {
          heading: "1. History",
          points: [
            "Ask how many distinct types of headache she has and take each separately; then onset, site, character, severity, duration, frequency and headache days per month.",
            "Associated features: nausea, vomiting, photophobia, phonophobia, osmophobia, aura (visual scintillations spreading over minutes and lasting under an hour), prodrome and postdrome.",
            "Behaviour during the attack, effect on work and family (use the MIDAS or HIT-6 score to record disability objectively).",
            "Triggers: sleep deprivation, missed meals, menstruation, stress and the let-down after stress, bright light and travel; relationship to the menstrual cycle.",
            "Drug history is critical: name every analgesic and count the number of days a month she takes one, plus combined oral contraceptive use, and any preventive already tried with dose and duration.",
            "Screen for red flags directly: thunderclap onset, fever, new deficit, seizure, morning headache with vomiting, positional change, pregnancy, immunosuppression, cancer, head injury.",
          ],
        },
        {
          heading: "2. Examination and investigations",
          points: [
            "Blood pressure, temperature, fundus examination for papilloedema, cranial nerves including visual fields, motor and sensory screen, gait, and neck movements; palpate the temporal arteries and the temporomandibular joints and examine the sinuses and teeth.",
            "A completely normal examination with a typical history and no red flags is the strongest evidence against a secondary cause.",
            "Investigations are directed, not routine: haemoglobin, blood sugar and thyroid function if the picture is atypical, refraction assessment if the headache is eye-strain related.",
            "Neuroimaging is indicated only for red flags, an abnormal examination, first or worst headache, a change in an established pattern, or new headache after 50 - not for reassurance.",
          ],
        },
        {
          heading: "3. Explanation and non-drug management",
          points: [
            "Explain migraine as a disorder of a hyperexcitable brain, not a sign of a tumour - explicit reassurance reduces repeat consultation and imaging demand.",
            "Regularise sleep and meal times, ensure hydration, encourage 30 minutes of aerobic exercise most days, and treat coexistent anxiety, depression and neck pain.",
            "Keep a headache diary recording headache days, severity, analgesic days and menstrual relationship - it is both the diagnostic and the outcome tool.",
            "Identify but do not obsess over triggers; avoid long elimination diets.",
          ],
        },
        {
          heading: "4. Acute treatment",
          points: [
            "Treat early at an adequate dose: naproxen 500 mg or ibuprofen 400-600 mg with domperidone 10 mg orally at the first sign.",
            "If this fails, sumatriptan 50-100 mg PO, repeated once after 2 hours if needed, maximum two doses in 24 hours; combine sumatriptan with naproxen for resistant attacks.",
            "Use subcutaneous or intranasal sumatriptan if she vomits early.",
            "Cap acute drug use at fewer than 10 triptan or combination-analgesic days and fewer than 15 simple-analgesic days per month, and record the limit in the notes.",
            "Avoid opioids, tramadol and ergotamine entirely.",
          ],
        },
        {
          heading: "5. Preventive treatment and follow-up",
          points: [
            "She qualifies for prophylaxis: six disabling attacks a month.",
            "Start propranolol 20 mg twice daily and titrate to 80-160 mg a day; alternatives are amitriptyline 10-25 mg at night, topiramate 25-100 mg daily, or flunarizine 5-10 mg at night.",
            "Continue for an adequate trial of 8-12 weeks at target dose before calling it a failure; success is a 50% reduction in headache days.",
            "If she uses combined oral contraceptives and has aura, stop them and switch to a progestogen-only or intrauterine method - WHO MEC category 4.",
            "Review at 4-6 weeks with the diary, treat any medication overuse by withdrawal, and continue a successful preventive for 6-12 months before tapering. Refer if there is diagnostic doubt, failure of two adequate preventives, or chronic migraine needing specialist options such as botulinum toxin or a CGRP monoclonal antibody.",
          ],
        },
      ],
      mustDraw: [
        "A table of the ICHD-3 diagnostic criteria for migraine without aura.",
        "A three-column table comparing migraine, tension-type headache and cluster headache.",
        "A stepwise flow chart: red flag screen, then positive diagnosis, then acute treatment ladder, then prophylaxis threshold.",
      ],
      markSplit: [
        { part: "Definition and ICHD-3 criteria", marks: 2 },
        { part: "History including red flags and analgesic days", marks: 2 },
        { part: "Examination and rational use of imaging", marks: 1 },
        { part: "Acute treatment with drugs and doses", marks: 2.5 },
        { part: "Prophylaxis, contraception and follow-up", marks: 2.5 },
      ],
      keywords: ["migraine", "ICHD-3", "sumatriptan", "propranolol", "medication overuse headache", "MIDAS"],
    },
    {
      id: "neurology-headache-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "core",
      question: "Write short notes on the red flags in a patient presenting with headache and the investigations each demands.",
      openingLines: [
        "More than 90% of headaches in primary care are primary headaches, but a small group carry serious secondary pathology, and red flags are the clinical filter that identifies them.",
        "The SNNOOP10 list is the currently recommended framework, and each flag maps to a specific diagnosis and a specific first test.",
      ],
      answer: [
        {
          heading: "The red flags and what each suggests",
          points: [
            "Sudden thunderclap onset reaching peak within a minute - subarachnoid haemorrhage, reversible cerebral vasoconstriction syndrome, cervical artery dissection, pituitary apoplexy.",
            "Systemic symptoms - fever, neck stiffness, rash, weight loss - meningitis, encephalitis, brain abscess, malignancy.",
            "Neurological deficit, seizure, altered consciousness or personality change - space-occupying lesion, stroke, encephalitis.",
            "Onset after 50 years with scalp tenderness or jaw claudication - giant cell arteritis; onset in a child with morning vomiting - posterior fossa tumour.",
            "Papilloedema, or headache worsened by lying flat, coughing or straining - raised intracranial pressure, venous sinus thrombosis, idiopathic intracranial hypertension.",
            "Positional headache worse on standing - low cerebrospinal fluid pressure, often post lumbar puncture.",
            "Pregnancy or puerperium - pre-eclampsia, cerebral venous sinus thrombosis, posterior reversible encephalopathy syndrome.",
            "Immunosuppression, HIV or malignancy - opportunistic infection, tuberculoma, metastasis, lymphoma.",
            "Progressive headache or a change in a long-standing pattern; painful red eye with haloes - acute angle-closure glaucoma; analgesic use on more than 15 days a month - medication overuse headache.",
          ],
        },
        {
          heading: "Investigations mapped to the flag",
          points: [
            "Thunderclap headache: non-contrast CT head within 6 hours; if negative and beyond 6 hours, lumbar puncture at 12 hours for xanthochromia, then CT or MR angiography.",
            "Fever with meningism: blood cultures, then the first dose of ceftriaxone, then CT if focal signs or altered sensorium, then lumbar puncture with cell count, protein, glucose, Gram stain, culture, CBNAAT and India ink as indicated.",
            "Suspected giant cell arteritis: ESR and C-reactive protein immediately, prednisolone the same day, temporal artery biopsy within 1-2 weeks.",
            "Raised intracranial pressure: MRI brain with MR venography, then lumbar puncture with opening pressure once a mass is excluded.",
            "Focal deficit or seizure: contrast MRI brain, which is superior to CT for posterior fossa, temporal lobe and small lesions.",
            "Immunosuppression: contrast MRI plus cerebrospinal fluid for India ink, cryptococcal antigen, CBNAAT for tuberculosis and toxoplasma serology.",
          ],
        },
      ],
      mustDraw: ["A two-column table listing each red flag against the diagnosis it suggests and the first investigation."],
      markSplit: [
        { part: "Concept of primary versus secondary headache", marks: 1 },
        { part: "The red flag list", marks: 2 },
        { part: "Investigation matched to each flag", marks: 2 },
      ],
      keywords: ["SNNOOP10", "thunderclap headache", "xanthochromia", "giant cell arteritis", "papilloedema"],
    },
    {
      id: "neurology-headache-t3",
      paper: "II",
      kind: "differentiate",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Differentiate cluster headache from migraine, and outline the management of an acute cluster attack and its prophylaxis.",
      openingLines: [
        "Cluster headache is a trigeminal autonomic cephalalgia characterised by strictly unilateral, excruciating orbital pain lasting 15-180 minutes with ipsilateral cranial autonomic features and marked restlessness.",
        "Migraine is a recurrent throbbing headache lasting 4-72 hours with nausea and photophobia in which the patient prefers to lie still; the two differ in sex ratio, periodicity, duration, behaviour and treatment.",
      ],
      answer: [
        {
          heading: "Points of difference",
          points: [
            "Sex ratio: cluster is 3-4 times commoner in men; migraine is 3 times commoner in women.",
            "Site and character: cluster is strictly unilateral orbital, boring and excruciating; migraine is unilateral in only 60%, pulsating and moderate to severe.",
            "Duration and frequency: cluster lasts 15-180 minutes and recurs up to 8 times a day in bouts lasting weeks, often waking the patient at a fixed hour; migraine lasts 4-72 hours and occurs a few times a month.",
            "Autonomic features: lacrimation, conjunctival injection, rhinorrhoea, ptosis, miosis and eyelid oedema, all ipsilateral, are the hallmark of cluster and are absent or minor in migraine.",
            "Behaviour: cluster patients are restless and pace; migraineurs lie still in a dark room.",
            "Triggers: alcohol reliably triggers an attack during a cluster bout but not in remission; migraine triggers are sleep, hunger, stress and menstruation.",
          ],
        },
        {
          heading: "Acute treatment of cluster",
          points: [
            "High-flow oxygen 12-15 L/min through a non-rebreathing mask for 15-20 minutes, sitting forward - aborts the attack in most patients.",
            "Subcutaneous sumatriptan 6 mg, or intranasal sumatriptan 20 mg or zolmitriptan 5 mg where the injection is unavailable.",
            "Oral analgesics, oral triptans and opioids are useless because they act too slowly.",
          ],
        },
        {
          heading: "Prophylaxis",
          points: [
            "Verapamil 80 mg three times daily, titrated to 240-480 mg a day, with a baseline ECG and repeat ECG after each increment for PR prolongation and heart block - the mainstay of preventive treatment.",
            "Prednisolone 60 mg daily for 5 days then tapered over 2-3 weeks as a bridge until verapamil is effective, or a greater occipital nerve block.",
            "Lithium, topiramate and melatonin are second-line; refer chronic cluster to neurology.",
            "Advise complete abstinence from alcohol and tobacco during a bout, and warn that bouts recur seasonally.",
          ],
        },
      ],
      mustDraw: ["A comparison table of cluster headache and migraine across site, duration, frequency, autonomic features, behaviour and sex ratio."],
      markSplit: [
        { part: "Definitions", marks: 1 },
        { part: "Points of difference in tabular form", marks: 2 },
        { part: "Acute treatment of cluster", marks: 1 },
        { part: "Prophylaxis", marks: 1 },
      ],
      keywords: ["cluster headache", "trigeminal autonomic cephalalgia", "high-flow oxygen", "verapamil", "sumatriptan"],
    },
  ],
  mcqs: [
    {
      id: "neurology-headache-q1",
      stem: "A 34-year-old woman describes headaches on 20 days a month for the last eight months. They began as typical unilateral throbbing headaches with nausea occurring three times a month. She now takes a paracetamol-caffeine-codeine combination tablet on about 18 days a month with temporary relief. Neurological examination is normal. What is the most appropriate next step?",
      options: [
        "Urgent MRI brain with contrast",
        "Withdraw the combination analgesic and start a preventive such as amitriptyline",
        "Increase the analgesic to a regular four-times-daily schedule",
        "Start sumatriptan 100 mg to be taken daily",
        "Refer for botulinum toxin injections",
      ],
      answer: 1,
      explanation:
        "This is medication overuse headache complicating episodic migraine - headache on 15 or more days a month with a combination analgesic used on 10 or more days a month for over 3 months - and the treatment is withdrawal of the overused drug together with a preventive started at the same time, with a warning that headache worsens for one to two weeks. Imaging is not indicated because the examination is normal, there are no red flags and the pattern is fully explained. Increasing the analgesic or adding a daily triptan perpetuates the overuse and is the commonest iatrogenic error here. Botulinum toxin has a role in chronic migraine but only after medication overuse has been treated and oral preventives have failed.",
      difficulty: "moderate",
    },
    {
      id: "neurology-headache-q2",
      stem: "A 46-year-old man develops the worst headache of his life while lifting a sack, reaching maximum intensity in under a minute, with vomiting. He is now alert with a Glasgow Coma Scale of 15, mild neck stiffness and no focal deficit. He reaches the clinic three hours after onset. What is the single most appropriate immediate step?",
      options: [
        "Non-contrast CT scan of the head",
        "Lumbar puncture for xanthochromia",
        "MRI brain with MR venography",
        "Intravenous sumatriptan and observation",
        "Digital subtraction angiography",
      ],
      answer: 0,
      explanation:
        "Thunderclap headache is subarachnoid haemorrhage until proved otherwise, and a non-contrast CT performed within 6 hours of onset by a modern scanner is close to 100% sensitive for subarachnoid blood, so it is both the first and the highest-yield test at three hours. Lumbar puncture is the correct next step only if the CT is negative and is performed at 12 hours or later, because xanthochromia takes that long to develop. MR venography looks for sinus thrombosis, a later consideration once haemorrhage is excluded. A triptan is contraindicated before the cause is known, and digital subtraction angiography is reserved for defining an aneurysm after blood has been demonstrated.",
      difficulty: "easy",
    },
    {
      id: "neurology-headache-q3",
      stem: "A 23-year-old woman with migraine with visual aura twice a month asks for contraception. She smokes five cigarettes a day, has a blood pressure of 118/74 mmHg and a body mass index of 22 kg/m2. Which contraceptive advice is correct?",
      options: [
        "A low-dose combined oral contraceptive pill is acceptable as her blood pressure is normal",
        "A combined pill may be used if she stops smoking",
        "Combined hormonal contraception is contraindicated; offer a progestogen-only method or an intrauterine device",
        "Contraception should be deferred until the migraine is controlled with prophylaxis",
        "A combined transdermal patch avoids the risk associated with oral contraceptives",
      ],
      answer: 2,
      explanation:
        "Migraine with aura is WHO Medical Eligibility Criteria category 4 for combined hormonal contraception at any age and by any route, because oestrogen multiplies the already doubled ischaemic stroke risk of aura, and smoking compounds it further. Normal blood pressure and body mass index do not remove the category 4 restriction, and the patch, ring and pill all deliver oestrogen so switching route changes nothing. Deferring contraception exposes her to unintended pregnancy for no benefit; progestogen-only pills, injectables, implants and both intrauterine devices are category 1 or 2 and are the correct offer, alongside smoking cessation advice.",
      difficulty: "moderate",
    },
    {
      id: "neurology-headache-q4",
      stem: "A 41-year-old male smoker has had 6 weeks of severe left orbital pain waking him at 2 a.m. each night, lasting about 45 minutes, with left eye watering, a blocked left nostril and drooping of the left eyelid. He paces the room during attacks. Between attacks he is well. Which treatment aborts the acute attack most reliably?",
      options: [
        "Oral sumatriptan 100 mg",
        "High-flow oxygen 12-15 L/min by non-rebreathing mask",
        "Intramuscular diclofenac 75 mg",
        "Oral indomethacin 75 mg",
        "Intravenous morphine 5 mg",
      ],
      answer: 1,
      explanation:
        "This is cluster headache, and high-flow oxygen by non-rebreathing mask for 15-20 minutes aborts the attack in the majority of patients within minutes, with subcutaneous sumatriptan 6 mg the other first-line option. Oral sumatriptan is too slow - the attack has often ended before it is absorbed - which is why the subcutaneous or intranasal route is specified. Diclofenac and morphine act far too slowly and opioids risk dependence in a condition with frequent daily attacks. Indomethacin is the diagnostic and therapeutic agent for paroxysmal hemicrania and hemicrania continua, whose attacks are shorter and far more frequent, not for cluster headache.",
      difficulty: "moderate",
    },
    {
      id: "neurology-headache-q5",
      stem: "A 68-year-old woman has a new right temporal headache for three weeks, pain in the jaw while chewing, and a tender, thickened, pulseless right temporal artery. ESR is 82 mm in the first hour. Vision is currently normal. What is the correct immediate action?",
      options: [
        "Arrange temporal artery biopsy and start steroids only if it is positive",
        "Start prednisolone 40-60 mg daily today and arrange temporal artery biopsy within 1-2 weeks",
        "Start naproxen 500 mg twice daily and review in one week",
        "Arrange an urgent MRI brain before any treatment",
        "Start prednisolone 10 mg daily and titrate against the ESR",
      ],
      answer: 1,
      explanation:
        "Giant cell arteritis with jaw claudication and a raised ESR threatens irreversible anterior ischaemic optic neuropathy, so high-dose prednisolone at 40-60 mg daily (1 mg/kg) is started the same day and the biopsy is arranged afterwards, since histology remains positive for one to two weeks after steroids are begun. Waiting for the biopsy risks sudden permanent blindness, which steroids largely prevent. NSAIDs do not modify the arteritis. MRI does not diagnose giant cell arteritis and would only delay treatment. A dose of 10 mg is a polymyalgia rheumatica dose and is inadequate to protect vision in arteritis.",
      difficulty: "easy",
    },
    {
      id: "neurology-headache-q6",
      stem: "A 26-year-old obese woman has a 3-month history of daily headache worse on waking and on coughing, with brief episodes of greying of vision on standing and pulsatile tinnitus. Fundoscopy shows bilateral papilloedema. MRI brain and MR venogram are normal. What is the next investigation?",
      options: [
        "Lumbar puncture with measurement of opening pressure",
        "CT brain with contrast",
        "Visual evoked potentials",
        "Electroencephalogram",
        "Cerebrospinal fluid cytology only",
      ],
      answer: 0,
      explanation:
        "This is idiopathic intracranial hypertension, and once a mass lesion and venous sinus thrombosis have been excluded by MRI and MR venography the diagnosis requires a lumbar puncture demonstrating an opening pressure above 25 cm of water with normal cerebrospinal fluid constituents. Contrast CT adds nothing after a normal MRI. Visual evoked potentials do not measure pressure and formal perimetry is the correct visual test rather than evoked potentials. An electroencephalogram has no role in a patient without seizures, and cytology alone omits the pressure measurement which is the whole point of the tap.",
      difficulty: "moderate",
    },
    {
      id: "neurology-headache-q7",
      stem: "A 30-year-old man with migraine attacks twice a month gets good relief from naproxen but continues to vomit within 30 minutes of onset so that tablets are not retained. He has no cardiovascular disease. Which is the most appropriate change?",
      options: [
        "Add oral domperidone 10 mg and continue oral naproxen",
        "Start subcutaneous sumatriptan 6 mg or intranasal sumatriptan 20 mg for attacks",
        "Start daily propranolol 40 mg twice daily",
        "Prescribe oral tramadol 50 mg for attacks",
        "Prescribe ergotamine with caffeine at onset",
      ],
      answer: 1,
      explanation:
        "Early vomiting defeats the oral route, so a parenteral or intranasal triptan is the logical choice and gives rapid, reliable relief in a man with no vascular contraindication. Adding oral domperidone helps gastric stasis but is still an oral drug that will be vomited in this scenario. Prophylaxis is not indicated for two attacks a month that respond well once absorbed; the problem is route, not frequency. Tramadol and other opioids are less effective and are the leading cause of medication overuse headache, and ergotamine is obsolete because of its vascular toxicity and rebound headache.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "neurology-headache-c1",
      front: "ICHD-3 criteria for migraine without aura.",
      back: "At least 5 attacks, 4-72 hours untreated, 2 of 4 (unilateral, pulsating, moderate-severe, worse with routine activity), plus nausea or vomiting, or photophobia AND phonophobia.",
    },
    {
      id: "neurology-headache-c2",
      front: "Definition of chronic migraine.",
      back: "Headache on 15 or more days a month for more than 3 months, with migraine features on at least 8 of those days.",
    },
    {
      id: "neurology-headache-c3",
      front: "Diagnostic thresholds for medication overuse headache.",
      back: "Headache 15 or more days a month with regular use for over 3 months of simple analgesics on 15 or more days a month, or triptans, ergots, opioids or combination analgesics on 10 or more days a month.",
    },
    {
      id: "neurology-headache-c4",
      front: "Two first-line treatments for an acute cluster attack.",
      back: "High-flow oxygen 12-15 L/min by non-rebreathing mask for 15-20 minutes, and subcutaneous sumatriptan 6 mg.",
    },
    {
      id: "neurology-headache-c5",
      front: "Sensitivity of non-contrast CT for subarachnoid haemorrhage by time from onset.",
      back: "Close to 100% within 6 hours; it falls steadily after that, so a negative late CT must be followed by lumbar puncture at 12 hours or later for xanthochromia.",
    },
    {
      id: "neurology-headache-c6",
      front: "First-line drug for trigeminal neuralgia and its dose.",
      back: "Carbamazepine 100 mg PO BD titrated to 200 mg TDS-QDS; MRI if under 40, bilateral, with sensory loss or drug-resistant.",
    },
    {
      id: "neurology-headache-c7",
      front: "Which headache responds absolutely to indomethacin?",
      back: "Paroxysmal hemicrania and hemicrania continua - the response is itself diagnostic.",
    },
    {
      id: "neurology-headache-c8",
      front: "Contraceptive rule in migraine with aura.",
      back: "Combined hormonal contraception is WHO MEC category 4 (absolutely contraindicated); use progestogen-only methods, implants or intrauterine devices.",
    },
    {
      id: "neurology-headache-c9",
      front: "Four first-line oral migraine preventives with doses.",
      back: "Propranolol 40-160 mg/day, amitriptyline 10-75 mg at night, topiramate 25-100 mg/day, flunarizine 5-10 mg at night.",
    },
    {
      id: "neurology-headache-c10",
      front: "What counts as success from a migraine preventive, and after how long?",
      back: "A 50% reduction in headache days on a diary, judged after an 8-12 week trial at the target dose.",
    },
    {
      id: "neurology-headache-c11",
      front: "Immediate treatment of suspected giant cell arteritis.",
      back: "Prednisolone 40-60 mg daily at once (IV methylprednisolone if visual loss), then temporal artery biopsy within 1-2 weeks; do not wait for histology.",
    },
    {
      id: "neurology-headache-c12",
      front: "Which triptan contraindications must be checked before prescribing?",
      back: "Ischaemic heart disease, previous MI or stroke, uncontrolled hypertension, peripheral vascular disease, hemiplegic or brainstem-aura migraine, and ergot use within 24 hours.",
    },
  ],
  references: [
    "International Classification of Headache Disorders, 3rd edition (ICHD-3), Cephalalgia 2018",
    "NICE Clinical Guideline CG150, Headaches in over 12s: diagnosis and management, updated 2021",
    "American Headache Society Consensus Statement on integrating new treatments into the acute and preventive treatment of migraine, 2021",
    "Do TP et al., Red and orange flags for secondary headaches (SNNOOP10), Neurology 2019",
    "API Textbook of Medicine, 11th edition, 2019 - headache and facial pain",
  ],
});

topics.push({
  id: "neurology-stroke-acute",
  title: "Acute stroke: recognition and the first hour",
  oneLiner:
    "Stroke is a sudden focal neurological deficit of vascular origin lasting more than 24 hours or leading to death, and because intravenous thrombolysis is effective only within 4.5 hours and mechanical thrombectomy within 6-24 hours of a selected large-vessel occlusion, the family physician's job is to recognise it in seconds, check the capillary glucose, stabilise, and move the patient to a CT-capable stroke-ready hospital without stopping to lower the blood pressure or give aspirin.",
  frequency: "core",
  keywords: [
    "cerebrovascular accident",
    "CVA",
    "ischaemic stroke",
    "intracerebral haemorrhage",
    "thrombolysis",
    "alteplase",
    "tenecteplase",
    "thrombectomy",
    "FAST",
    "BE-FAST",
    "NIHSS",
    "window period",
    "middle cerebral artery",
    "lacunar syndrome",
    "stroke unit",
    "dysphagia screen",
    "aspiration pneumonia",
  ],
  sections: [
    {
      heading: "Definition, burden and the two kinds of stroke",
      points: [
        "**Definition:** rapidly developing clinical signs of focal (or global) disturbance of cerebral function lasting more than 24 hours or leading to death, with no apparent cause other than vascular origin (WHO). A deficit that resolves fully within 24 hours with no infarct on imaging is a transient ischaemic attack.",
        "**Burden in India:** stroke incidence is roughly 105-152 per 100 000 per year, the age-standardised burden is higher than in high-income countries, and Indian patients are on average **a decade younger** at presentation. Stroke is among the top three causes of death and the leading cause of adult disability.",
        "**About 80% of strokes are ischaemic and 20% haemorrhagic** (intracerebral haemorrhage and subarachnoid haemorrhage), and the proportion of haemorrhage is higher in India than in the West because of the burden of untreated hypertension.",
        "Ischaemic stroke subtypes (TOAST): large-artery atherosclerosis, cardioembolism (atrial fibrillation, rheumatic mitral stenosis, prosthetic valves, recent myocardial infarction), **small-vessel or lacunar disease** driven by hypertension and diabetes, stroke of other determined cause (dissection, vasculitis, antiphospholipid syndrome, sickle cell disease), and cryptogenic stroke.",
        "**Nothing at the bedside reliably separates infarction from haemorrhage** - headache, vomiting, early depressed consciousness and very high blood pressure make haemorrhage more likely, but only a CT scan decides. This is why no antiplatelet is given before imaging.",
        "**Time is brain:** an untreated large-vessel ischaemic stroke destroys about 1.9 million neurons a minute, and every 15 minutes saved in door-to-needle time translates into measurable disability-free survival.",
        "The single greatest determinant of outcome that a general practice can influence is the **interval from symptom onset to the CT scanner**, and most Indian delay is pre-hospital - the patient waits at home to see if it passes.",
      ],
    },
    {
      heading: "Recognising stroke: BE-FAST and the vascular syndromes",
      points: [
        "**BE-FAST:** **B**alance (sudden loss of balance), **E**yes (sudden visual loss or diplopia), **F**ace drooping, **A**rm weakness, **S**peech difficulty, **T**ime to call for help. Adding balance and eyes to the original FAST captures the posterior circulation strokes that FAST misses.",
        "**Anterior circulation (carotid) territory:** contralateral hemiparesis and hemisensory loss with the face and arm affected more than the leg in middle cerebral artery strokes, homonymous hemianopia, gaze deviation towards the lesion, **aphasia with dominant hemisphere lesions** and neglect or dressing apraxia with non-dominant lesions. Anterior cerebral artery strokes weaken the leg more than the arm and cause abulia and incontinence.",
        "**Posterior circulation (vertebrobasilar):** vertigo, nausea, ataxia, diplopia, dysarthria, dysphagia, crossed signs (ipsilateral cranial nerve palsy with contralateral limb weakness), Horner syndrome, cortical blindness and sudden decreased consciousness. **Lateral medullary (Wallenberg) syndrome** is the classic: ipsilateral facial sensory loss, Horner syndrome, palatal and vocal cord palsy with ataxia, and contralateral spinothalamic loss over the body.",
        "**Lacunar syndromes** have no cortical signs - no aphasia, no neglect, no visual field defect - and take five forms: pure motor hemiparesis (internal capsule or pons), pure sensory stroke (thalamus), sensorimotor stroke, ataxic hemiparesis, and dysarthria-clumsy hand syndrome.",
        "**Stroke mimics to exclude at the bedside:** hypoglycaemia (check capillary glucose in every single patient before anything else), Todd paresis after a seizure, complicated migraine with aura, hypertensive encephalopathy, subdural haematoma, brain tumour, Bell palsy (spares the forehead in stroke, involves it in Bell palsy), conversion disorder, and sepsis unmasking an old deficit.",
        "Document the **exact time the patient was last seen well**, not the time the deficit was noticed; a stroke on waking is timed from when the patient went to sleep unless perfusion imaging is available.",
        "Quantify the deficit with the **NIHSS** where possible: it predicts outcome, guides thrombolysis and thrombectomy decisions, and gives a reproducible baseline; a score above 6 with a gaze deviation and dense hemiplegia suggests large-vessel occlusion.",
      ],
    },
    {
      heading: "What the clinic actually does in the first hour",
      points: [
        "**Check capillary blood glucose immediately** - hypoglycaemia is the commonest stroke mimic and is corrected in one minute with 25% dextrose; never send a suspected stroke to the scanner without this number.",
        "Airway, breathing, circulation: position at 30 degrees head up if there is any risk of aspiration or raised pressure, keep the patient **nil by mouth including oral drugs and water** until a bedside swallow screen is done, give oxygen only if saturation is below 94%, and secure an intravenous line in the non-paretic arm.",
        "**Arrange transport at once** to the nearest CT-capable, preferably thrombolysis-ready, hospital, and telephone ahead so that the CT and the stroke team are ready - a pre-notified arrival roughly halves door-to-needle time. Send a written note stating the exact time last seen well, the deficit, the glucose, the blood pressure, current drugs (especially anticoagulants) and comorbidity.",
        "**Do not give aspirin, clopidogrel, heparin or any antithrombotic before the CT scan** - if this is a haemorrhage, they cause harm.",
        "**Do not lower the blood pressure** in the acute phase of an ischaemic stroke unless it exceeds **220/120 mmHg**, or thrombolysis is planned, when it must be brought below **185/110 mmHg** before the bolus. High pressure maintains perfusion in the ischaemic penumbra and dropping it extends the infarct. In intracerebral haemorrhage the target is a systolic of 140 mmHg, achieved gradually.",
        "Treat fever with paracetamol, treat hyperglycaemia above 180 mg/dL with insulin while avoiding hypoglycaemia, correct hypotension and dehydration with normal saline, and **avoid dextrose-containing fluids** which worsen cerebral oedema.",
        "Avoid three specific errors that recur in examinations: sublingual nifedipine, intramuscular injections (they preclude thrombolysis), and urinary catheterisation as a reflex rather than for retention.",
      ],
    },
    {
      heading: "Thrombolysis and thrombectomy: the windows and the rules",
      points: [
        "**Intravenous alteplase 0.9 mg/kg (maximum 90 mg), 10% as a bolus over 1 minute and the rest over 60 minutes, is given within 4.5 hours of symptom onset** in eligible patients with a disabling deficit and a CT that excludes haemorrhage. **Tenecteplase 0.25 mg/kg as a single bolus** is an accepted alternative and is increasingly used in India because a single bolus is far simpler.",
        "**Absolute contraindications:** intracranial haemorrhage on CT, a history of intracranial haemorrhage, blood pressure above 185/110 mmHg that cannot be lowered, platelets below 100 000/microlitre, INR above 1.7 or a DOAC taken within 48 hours, glucose below 50 mg/dL, major surgery or serious head injury within 3 months, active internal bleeding, aortic dissection and known intracranial neoplasm or arteriovenous malformation.",
        "**Mechanical thrombectomy is offered within 6 hours of onset for a proven large-vessel occlusion** (internal carotid or proximal middle cerebral artery) on CT or MR angiography, and can be extended to **24 hours** in carefully selected patients using perfusion imaging or clinical-core mismatch criteria (DAWN and DEFUSE-3). Thrombectomy is given in addition to thrombolysis when both are possible.",
        "**Number needed to treat:** roughly 1 in 3 thrombolysed within 90 minutes and about 1 in 10 across the whole 4.5-hour window achieve an improved functional outcome; the risk of symptomatic intracranial haemorrhage is about 6%. The benefit falls steeply with every hour, which is the entire argument for speed.",
        "After thrombolysis: no antiplatelet, no anticoagulant and no invasive procedure for 24 hours, blood pressure kept below 180/105 mmHg, neurological observations every 15 minutes for 2 hours, and a repeat CT at 24 hours before starting aspirin.",
        "**If the window is missed** - the situation in most of India - the patient still benefits enormously from stroke unit care: **aspirin 300 mg started within 48 hours after haemorrhage is excluded**, dysphagia screening, early mobilisation, physiotherapy, prevention of aspiration, deep vein thrombosis prophylaxis and secondary prevention. **Admission to a stroke unit reduces death and dependency more than any single drug**, with a number needed to treat of about 20.",
        "For minor non-cardioembolic stroke (NIHSS 3 or less) or high-risk TIA, **dual antiplatelet therapy with aspirin plus clopidogrel for 21 days** followed by single antiplatelet reduces recurrence (CHANCE and POINT trials); longer dual therapy only increases bleeding.",
      ],
    },
    {
      heading: "Investigations and the search for a cause",
      points: [
        "**Non-contrast CT head is the first investigation in every stroke** - it is fast, available and reliably excludes haemorrhage. Early ischaemic signs (loss of grey-white differentiation, insular ribbon sign, a hyperdense middle cerebral artery, sulcal effacement) may be subtle in the first hours, and a normal CT does not exclude infarction.",
        "**MRI with diffusion-weighted imaging** detects infarction within minutes and is the test of choice for posterior fossa strokes, small lacunes, and where the diagnosis is in doubt; CT or MR angiography identifies large-vessel occlusion and dissection.",
        "**Every stroke patient needs:** blood glucose, complete blood count, prothrombin time and INR, creatinine and electrolytes, lipid profile, HbA1c, ECG, and chest radiograph. Add troponin if there is chest pain or ECG change.",
        "**Look for the source of embolism:** a 12-lead ECG and at least 24 hours of cardiac monitoring or Holter for paroxysmal atrial fibrillation, echocardiography for rheumatic mitral stenosis, prosthetic valves, left ventricular thrombus, dilated cardiomyopathy and (in the young) a patent foramen ovale with a bubble study.",
        "**Carotid Doppler** in every anterior circulation ischaemic stroke or TIA who would be a candidate for endarterectomy - symptomatic stenosis of 70-99% should be operated within 2 weeks.",
        "**Stroke in the young (under 45) needs an extended work-up** in India: echocardiography for rheumatic heart disease, vasculitis screen, antiphospholipid antibodies, homocysteine, protein C, protein S and antithrombin, haemoglobin electrophoresis for sickle cell disease, HIV and VDRL, cervical artery dissection on MR angiography, and a careful history of oral contraceptives, smoking, substance use and the puerperium (cerebral venous sinus thrombosis).",
        "**Cerebral venous sinus thrombosis** deserves separate mention because it is common in Indian obstetric practice: headache, seizures, papilloedema and deficits that cross arterial territories, in a postpartum or dehydrated patient; diagnose with MR venography and **treat with anticoagulation even when there is haemorrhagic infarction**.",
      ],
    },
    {
      heading: "The first week: complications and rehabilitation",
      points: [
        "**Dysphagia affects up to half of acute strokes** and is the main cause of aspiration pneumonia. Perform a bedside swallow screen before the first oral intake; if it fails, keep the patient nil by mouth and pass a nasogastric tube within 24 hours rather than starving the patient.",
        "Prevent aspiration by feeding sitting upright, thickened fluids, small boluses and oral hygiene; pneumonia and urinary infection are the commonest causes of death after the first 48 hours.",
        "**Deep vein thrombosis prophylaxis** with intermittent pneumatic compression and early mobilisation; low molecular weight heparin from 48 hours in immobile patients with ischaemic stroke, but not in intracerebral haemorrhage until bleeding is stable.",
        "Prevent pressure ulcers with 2-hourly turning and a pressure-relieving mattress; prevent shoulder subluxation with correct positioning and by never pulling on the paretic arm; treat constipation and urinary retention actively.",
        "**Start rehabilitation on day one**: passive range of movement, sitting out of bed as soon as the patient is stable, physiotherapy, occupational therapy and speech therapy. Most motor recovery occurs in the first 3 months but useful gains continue for a year.",
        "**Post-stroke depression affects about a third of survivors** and is under-treated; screen at follow-up with PHQ-9 and treat with an SSRI (sertraline or escitalopram) plus counselling. Also screen for post-stroke pain, spasticity, seizures and vascular cognitive impairment.",
        "The family physician owns the long game: blood pressure to below 130/80 mmHg, a statin, an antiplatelet or anticoagulant as indicated, glycaemic control, tobacco and alcohol cessation, secondary prevention counselling, carer support, disability certification and vocational advice.",
      ],
    },
  ],
  tables: [
    {
      heading: "Localising the stroke from the bedside deficit",
      columns: ["Territory", "Key clinical features", "Extra clue"],
      rows: [
        ["Middle cerebral artery (dominant)", "Contralateral face and arm weakness more than leg, hemisensory loss, homonymous hemianopia, aphasia", "Gaze deviates towards the lesion"],
        ["Middle cerebral artery (non-dominant)", "Same motor pattern with neglect, anosognosia, dressing and constructional apraxia", "Patient may deny the deficit"],
        ["Anterior cerebral artery", "Contralateral leg weakness more than arm, abulia, urinary incontinence, grasp reflex", "Face is usually spared"],
        ["Posterior cerebral artery", "Homonymous hemianopia with macular sparing, alexia without agraphia, memory disturbance", "Motor power often normal"],
        ["Vertebrobasilar / brainstem", "Vertigo, diplopia, dysarthria, dysphagia, ataxia, crossed signs, altered consciousness", "Crossed signs are pathognomonic of brainstem"],
        ["Lateral medullary (PICA)", "Ipsilateral facial sensory loss, Horner syndrome, palatal palsy, ataxia; contralateral body pain and temperature loss", "Hiccups and intractable vomiting"],
        ["Lacunar (small vessel)", "Pure motor, pure sensory, sensorimotor, ataxic hemiparesis or dysarthria-clumsy hand", "No cortical signs at all"],
      ],
    },
    {
      heading: "Thrombolysis: windows, doses and blood pressure rules",
      columns: ["Item", "Rule"],
      rows: [
        ["Window for intravenous thrombolysis", "Within 4.5 hours of time last seen well"],
        ["Alteplase dose", "0.9 mg/kg, maximum 90 mg; 10% as bolus over 1 minute, remainder over 60 minutes"],
        ["Tenecteplase dose", "0.25 mg/kg single intravenous bolus, maximum 25 mg"],
        ["Blood pressure before thrombolysis", "Must be below 185/110 mmHg; use labetalol 10-20 mg IV boluses"],
        ["Blood pressure if not thrombolysing (ischaemic)", "Do not treat unless above 220/120 mmHg; then lower by no more than 15% in 24 hours"],
        ["Blood pressure in intracerebral haemorrhage", "Lower systolic to about 140 mmHg over the first hour"],
        ["Thrombectomy window", "Within 6 hours routinely; up to 24 hours in selected large-vessel occlusion with imaging mismatch"],
        ["After thrombolysis", "No antiplatelet or anticoagulant for 24 hours; repeat CT at 24 hours before starting aspirin"],
      ],
    },
    {
      heading: "Ischaemic versus haemorrhagic stroke: what the clinic can and cannot tell",
      columns: ["Feature", "Ischaemic", "Haemorrhagic"],
      rows: [
        ["Proportion of all strokes", "About 80%", "About 20%"],
        ["Onset", "Sudden, often on waking, deficit maximal at onset", "Sudden during activity or straining, deficit may progress over minutes to hours"],
        ["Headache and vomiting", "Uncommon", "Common and early"],
        ["Early loss of consciousness", "Uncommon except basilar occlusion", "Common with large bleeds"],
        ["Blood pressure at presentation", "Often raised", "Usually very high"],
        ["Seizure at onset", "Uncommon", "More common"],
        ["Decisive test", "Non-contrast CT (may be normal early)", "Non-contrast CT (hyperdense from the outset)"],
      ],
    },
  ],
  redFlags: [
    "Any sudden focal deficit - the patient goes to a CT-capable hospital now; do not observe overnight and do not treat at home.",
    "Capillary glucose below 70 mg/dL in a patient with a focal deficit - treat hypoglycaemia first, it is the commonest reversible stroke mimic.",
    "Sudden headache with vomiting, neck stiffness and depressed consciousness - haemorrhagic stroke or subarachnoid haemorrhage; no antiplatelet before imaging.",
    "Deteriorating consciousness with a new pupillary asymmetry in the first 72 hours - malignant middle cerebral artery infarction or expanding haematoma; needs urgent neurosurgical assessment for decompressive craniectomy.",
    "Sudden vertigo with inability to sit or stand unsupported, or vertigo with any new cranial nerve sign - a cerebellar stroke masquerading as peripheral vertigo.",
    "Stroke in a patient under 45, in a pregnant or postpartum woman, or with a known prosthetic valve or rheumatic heart disease - urgent referral for an extended aetiological work-up.",
    "Fever with new focal deficit in a stroke patient - aspiration pneumonia, infective endocarditis or brain abscess, not simply post-stroke fever.",
    "Failure of a bedside swallow screen - keep nil by mouth including oral medication, and arrange a nasogastric tube within 24 hours.",
  ],
  pearls: [
    "The time that matters is the time the patient was last seen well, not the time somebody noticed the deficit - record it in the referral note.",
    "Check the capillary glucose before anything else in every suspected stroke; hypoglycaemia and Todd paresis are the two mimics that repeatedly catch candidates.",
    "Never give aspirin before the CT scan and never lower blood pressure in acute ischaemic stroke unless it exceeds 220/120 mmHg or you are about to thrombolyse.",
    "Sublingual nifedipine, intramuscular injections and dextrose-containing fluids are the three reflex errors of acute stroke care.",
    "A stroke unit bed saves more lives and more independence than thrombolysis does, and it is available to every patient who arrives outside the window.",
    "Crossed signs - an ipsilateral cranial nerve palsy with contralateral limb weakness - localise the lesion to the brainstem and to nowhere else.",
    "A lacunar syndrome has no cortical signs; if there is aphasia, neglect or a visual field defect the stroke is not lacunar.",
    "In a young woman with headache, seizures and deficits crossing arterial territories in the puerperium, think cerebral venous sinus thrombosis and anticoagulate even if there is haemorrhagic infarction.",
  ],
  theory: [
    {
      id: "neurology-stroke-acute-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 58-year-old hypertensive man is brought to your clinic 70 minutes after developing sudden weakness of the right arm and leg with difficulty in speaking. Describe your immediate assessment and management, and outline the criteria and contraindications for intravenous thrombolysis.",
      openingLines: [
        "Stroke is a rapidly developing focal neurological deficit of vascular origin lasting more than 24 hours or leading to death; this man has a left hemisphere syndrome with right hemiparesis and aphasia, most likely a left middle cerebral artery territory infarct.",
        "He is within the 4.5-hour window for intravenous thrombolysis, so the whole of the immediate management is directed at stabilising him and moving him to a CT-capable stroke-ready hospital in the shortest possible time.",
      ],
      answer: [
        {
          heading: "1. Immediate bedside actions in the first five minutes",
          points: [
            "Record the exact time he was last seen well and the time of onset - this determines eligibility for thrombolysis.",
            "Check capillary blood glucose at once and treat hypoglycaemia with 25% dextrose; it is the commonest stroke mimic.",
            "Assess airway, breathing, circulation; oxygen only if saturation is below 94%; head end raised 30 degrees; keep strictly nil by mouth.",
            "Secure intravenous access in the non-paretic arm with normal saline; avoid dextrose-containing fluids and avoid intramuscular injections which preclude thrombolysis.",
            "Record blood pressure, pulse, temperature, Glasgow Coma Scale and an NIHSS score, and take an ECG looking for atrial fibrillation.",
          ],
        },
        {
          heading: "2. Focused examination",
          points: [
            "Confirm the vascular syndrome: face, arm and leg power, sensory loss, visual fields, gaze deviation, speech (fluency, comprehension, naming, repetition), neglect, and plantar responses.",
            "Look for the cause: irregular pulse, cardiac murmurs of rheumatic mitral stenosis, carotid bruit, blood pressure in both arms.",
            "Exclude mimics: examine for signs of head injury, tongue bite or incontinence suggesting a seizure with Todd paresis, and fever suggesting sepsis or meningitis.",
          ],
        },
        {
          heading: "3. Transfer and communication",
          points: [
            "Arrange immediate ambulance transfer to the nearest CT-capable, thrombolysis-ready hospital and telephone ahead so the CT and stroke team are ready on arrival - pre-notification roughly halves door-to-needle time.",
            "Send a written note stating the exact time last seen well, the deficit and NIHSS, capillary glucose, blood pressure, current medication including anticoagulants and antiplatelets, comorbidity and allergies.",
            "Do not give aspirin, clopidogrel or heparin before the CT scan, and do not lower blood pressure unless it exceeds 220/120 mmHg or thrombolysis is planned.",
          ],
        },
        {
          heading: "4. Criteria for intravenous thrombolysis",
          points: [
            "Clinical diagnosis of ischaemic stroke causing a measurable and disabling neurological deficit.",
            "Treatment can be started within 4.5 hours of the time last seen well.",
            "Non-contrast CT excludes intracranial haemorrhage and shows no established large infarct.",
            "Age 18 years or above, with no upper age limit in current guidance.",
            "Blood pressure controlled below 185/110 mmHg before the bolus, using intravenous labetalol boluses.",
            "Alteplase 0.9 mg/kg (maximum 90 mg), 10% as a bolus over one minute and the remainder over 60 minutes; or tenecteplase 0.25 mg/kg as a single bolus.",
          ],
        },
        {
          heading: "5. Contraindications to thrombolysis",
          points: [
            "Intracranial haemorrhage on CT, previous intracranial haemorrhage, known arteriovenous malformation, aneurysm or intracranial neoplasm.",
            "Blood pressure persistently above 185/110 mmHg despite treatment.",
            "Platelet count below 100 000/microlitre, INR above 1.7, heparin within 48 hours with a raised APTT, or a direct oral anticoagulant within 48 hours.",
            "Blood glucose below 50 mg/dL, or a deficit that clears with correction of glucose.",
            "Major surgery or serious trauma within 14 days, head injury or previous stroke within 3 months, gastrointestinal or urinary bleeding within 21 days, arterial puncture at a non-compressible site within 7 days.",
            "Active internal bleeding, suspected aortic dissection, suspected infective endocarditis, and seizure at onset with a residual deficit attributable to the seizure.",
          ],
        },
        {
          heading: "6. If the window is missed or thrombolysis is contraindicated",
          points: [
            "Admit to a stroke unit - this alone reduces death and dependency with a number needed to treat of about 20.",
            "Aspirin 300 mg within 48 hours once CT excludes haemorrhage, then 75-150 mg daily; dual antiplatelet therapy with clopidogrel for 21 days in minor stroke and high-risk TIA.",
            "Bedside swallow screen before any oral intake, deep vein thrombosis prophylaxis, glycaemic and temperature control, early mobilisation and physiotherapy.",
            "Secondary prevention from day 1-2: blood pressure to below 130/80 mmHg, high-intensity statin, anticoagulation if atrial fibrillation, tobacco and alcohol cessation, and carotid imaging with endarterectomy within 2 weeks for symptomatic 70-99% stenosis.",
          ],
        },
      ],
      mustDraw: [
        "A time-line flow chart from symptom onset through glucose check, transfer and CT to the thrombolysis decision, with the 4.5-hour and 6-24 hour windows marked.",
        "A table of blood pressure thresholds in acute stroke: no thrombolysis, planned thrombolysis, and intracerebral haemorrhage.",
      ],
      markSplit: [
        { part: "Definition and immediate bedside stabilisation including glucose", marks: 2 },
        { part: "Focused examination and localisation", marks: 1.5 },
        { part: "Transfer, pre-notification and what not to do", marks: 1.5 },
        { part: "Thrombolysis criteria with dose", marks: 2.5 },
        { part: "Contraindications and the alternative pathway if the window is missed", marks: 2.5 },
      ],
      keywords: ["acute ischaemic stroke", "alteplase", "tenecteplase", "4.5-hour window", "NIHSS", "stroke unit"],
    },
    {
      id: "neurology-stroke-acute-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on stroke in the young: causes and investigations.",
      openingLines: [
        "Stroke in the young is conventionally defined as stroke occurring below 45 years of age, and it accounts for a strikingly high proportion of Indian strokes - between 15% and 30% in hospital series, far above Western figures.",
        "The aetiological spectrum is different from that of older patients, so an extended and systematic work-up is mandatory rather than optional.",
      ],
      answer: [
        {
          heading: "Cardiac causes",
          points: [
            "Rheumatic heart disease with mitral stenosis and atrial fibrillation - still a leading cause in India.",
            "Prosthetic valves with inadequate anticoagulation, infective endocarditis, cardiomyopathy with mural thrombus, recent myocardial infarction.",
            "Patent foramen ovale with paradoxical embolism, atrial septal defect and atrial myxoma.",
          ],
        },
        {
          heading: "Vascular and haematological causes",
          points: [
            "Cervical artery dissection after trauma, neck manipulation or trivial strain - presents with neck pain and Horner syndrome.",
            "Vasculitis including Takayasu arteritis, systemic lupus erythematosus, primary CNS angiitis, and infective arteritis from tuberculous meningitis or neurosyphilis.",
            "Antiphospholipid antibody syndrome, protein C, protein S and antithrombin deficiency, factor V Leiden, hyperhomocysteinaemia.",
            "Sickle cell disease, polycythaemia, severe iron deficiency anaemia in children and nephrotic syndrome.",
            "Moyamoya disease and fibromuscular dysplasia.",
          ],
        },
        {
          heading: "Situational and drug-related causes",
          points: [
            "Pregnancy and the puerperium, particularly cerebral venous sinus thrombosis, eclampsia and postpartum angiopathy.",
            "Combined oral contraceptives, especially with smoking and migraine with aura.",
            "Substance use - cocaine, amphetamines, cannabis - and anabolic steroid abuse.",
            "HIV infection, neurocysticercosis-associated vasculitis and tuberculous meningitis with basal arteritis.",
          ],
        },
        {
          heading: "Investigations",
          points: [
            "Non-contrast CT first, then MRI brain with diffusion-weighted imaging and MR angiography of the intracranial and cervical vessels; MR venography if venous thrombosis is suspected.",
            "ECG, 24-hour Holter or longer monitoring, transthoracic echocardiography, and transoesophageal echocardiography with a bubble study for patent foramen ovale.",
            "Complete blood count, ESR, prothrombin time with INR, lipid profile, HbA1c, renal and liver function, homocysteine.",
            "Thrombophilia screen (protein C, protein S, antithrombin, factor V Leiden), antiphospholipid antibodies including lupus anticoagulant, antinuclear antibody and ANCA.",
            "Haemoglobin electrophoresis, HIV, VDRL, and cerebrospinal fluid examination where vasculitis or infection is suspected.",
          ],
        },
      ],
      mustDraw: ["A classification chart of causes of young stroke under the headings cardiac, vascular, haematological, infective and situational."],
      markSplit: [
        { part: "Definition and Indian burden", marks: 0.5 },
        { part: "Cardiac causes", marks: 1 },
        { part: "Vascular and haematological causes", marks: 1.5 },
        { part: "Situational and drug causes", marks: 0.5 },
        { part: "Investigation protocol", marks: 1.5 },
      ],
      keywords: ["young stroke", "rheumatic heart disease", "cervical artery dissection", "antiphospholipid syndrome", "cerebral venous sinus thrombosis"],
    },
    {
      id: "neurology-stroke-acute-t3",
      paper: "II",
      kind: "chart-flow",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Draw and explain a flow chart for the management of a suspected acute stroke reaching a primary health centre without a CT scanner.",
      openingLines: [
        "The primary health centre cannot image or thrombolyse, so its task is recognition, stabilisation, exclusion of mimics, and the fastest possible transfer to a CT-capable stroke-ready facility with a good handover.",
        "The flow chart runs: recognise, check glucose, stabilise, decide destination, pre-notify, transfer, and hand over with a written time-stamped note.",
      ],
      answer: [
        {
          heading: "Step 1 - Recognise",
          points: [
            "Apply BE-FAST: balance, eyes, face droop, arm weakness, speech difficulty, time.",
            "Record the exact time last seen well and quantify the deficit; note whether the forehead is spared (stroke) or involved (Bell palsy).",
          ],
        },
        {
          heading: "Step 2 - Exclude mimics and stabilise",
          points: [
            "Capillary glucose immediately; treat hypoglycaemia with 25% dextrose 50 mL intravenously and reassess.",
            "Airway, breathing, circulation; head up 30 degrees; oxygen only if saturation below 94%; nil by mouth; intravenous normal saline in the non-paretic arm.",
            "Look for seizure with Todd paresis, head injury, sepsis and hypertensive encephalopathy.",
          ],
        },
        {
          heading: "Step 3 - Decide and do not delay",
          points: [
            "If within 4.5 hours of onset, transfer to the nearest thrombolysis-capable centre even if it is further than the nearest hospital.",
            "If beyond the window, transfer to the nearest hospital with a CT scanner and inpatient stroke care.",
            "Do not give aspirin, do not give antihypertensives unless blood pressure exceeds 220/120 mmHg, do not give intramuscular injections, do not give sublingual nifedipine.",
          ],
        },
        {
          heading: "Step 4 - Pre-notify and hand over",
          points: [
            "Telephone the receiving hospital so the CT and the stroke team are ready; use the state ambulance service (108) rather than private transport where possible.",
            "Send a written note: time last seen well, deficit, glucose, blood pressure, ECG finding, drugs including anticoagulants, comorbidity, and the name and telephone number of the referring doctor.",
            "Send an accompanying relative who can give consent for thrombolysis.",
          ],
        },
        {
          heading: "Step 5 - After discharge, the continuing role",
          points: [
            "Secondary prevention: blood pressure below 130/80 mmHg, high-intensity statin, antiplatelet or anticoagulant, glycaemic control, tobacco cessation.",
            "Community rehabilitation, dysphagia and aspiration prevention, home safety and fall prevention, carer training and support.",
            "Screening and treatment of post-stroke depression, spasticity and seizures, and disability certification.",
          ],
        },
      ],
      mustDraw: ["The five-box flow chart: recognise (BE-FAST) - glucose and stabilise - decide destination by window - pre-notify and transfer - long-term secondary prevention."],
      markSplit: [
        { part: "Recognition and timing", marks: 1 },
        { part: "Glucose and stabilisation, mimics", marks: 1.5 },
        { part: "Transfer decision and the things not to do", marks: 1.5 },
        { part: "Handover and continuing care", marks: 1 },
      ],
      keywords: ["BE-FAST", "primary health centre", "pre-notification", "window period", "secondary prevention"],
    },
  ],
  mcqs: [
    {
      id: "neurology-stroke-acute-q1",
      stem: "A 62-year-old man arrives 2 hours after sudden onset of left hemiparesis. Blood pressure is 208/116 mmHg, capillary glucose 142 mg/dL, and non-contrast CT shows no haemorrhage. Thrombolysis is planned. What should be done about the blood pressure?",
      options: [
        "Leave it alone; high pressure maintains penumbral perfusion",
        "Lower it below 185/110 mmHg with intravenous labetalol before giving alteplase",
        "Give sublingual nifedipine 5 mg to bring it down rapidly",
        "Lower systolic blood pressure to 120 mmHg before thrombolysis",
        "Withhold thrombolysis permanently because of the blood pressure",
      ],
      answer: 1,
      explanation:
        "Blood pressure must be brought below 185/110 mmHg before intravenous thrombolysis, and intravenous labetalol boluses are the standard means of doing so, because thrombolysis at a higher pressure sharply increases the risk of symptomatic intracranial haemorrhage. Leaving it alone is the correct policy only when thrombolysis is not planned and pressure is under 220/120 mmHg. Sublingual nifedipine causes an uncontrolled fall and extends the infarct and has no place in stroke care. Lowering systolic to 120 mmHg would drop perfusion of the penumbra, and treatable hypertension is a temporary, not a permanent, contraindication.",
      difficulty: "moderate",
    },
    {
      id: "neurology-stroke-acute-q2",
      stem: "A 70-year-old woman with atrial fibrillation is found by her family at 6 a.m. with right-sided weakness and no speech. She was last seen normal at 10 p.m. the previous night. CT at 7 a.m. shows no haemorrhage and no established infarct. Which statement is correct?",
      options: [
        "She is eligible for intravenous alteplase because CT is normal",
        "The time last seen well is 10 p.m., so she is outside the 4.5-hour window for standard thrombolysis and should be assessed for thrombectomy or imaging-guided treatment",
        "Thrombolysis should be given because a wake-up stroke is timed from waking",
        "She should be given intravenous heparin immediately for atrial fibrillation",
        "No further acute intervention is possible and she should be admitted to a general ward",
      ],
      answer: 1,
      explanation:
        "Stroke onset is timed from when the patient was last seen well, which is 10 p.m., so eight hours have elapsed and standard 4.5-hour thrombolysis criteria are not met; a wake-up stroke is never timed from waking. She should nevertheless be assessed urgently for mechanical thrombectomy, which can extend to 24 hours in selected large-vessel occlusion, or for advanced imaging-selected thrombolysis at a centre offering it. Immediate intravenous heparin is not given in cardioembolic stroke because it increases haemorrhagic transformation without reducing recurrence. A general ward is inferior to a stroke unit, which reduces death and dependency regardless of reperfusion therapy.",
      difficulty: "hard",
    },
    {
      id: "neurology-stroke-acute-q3",
      stem: "A 55-year-old diabetic is brought with sudden right hemiparesis and drowsiness. Capillary glucose is 38 mg/dL. He takes glibenclamide and had missed breakfast. What is the most appropriate immediate action?",
      options: [
        "Send immediately for CT scan without treatment",
        "Give 50 mL of 25% dextrose intravenously and reassess the deficit",
        "Give aspirin 300 mg and observe",
        "Start an insulin infusion to normalise glucose slowly",
        "Give intravenous mannitol for cerebral oedema",
      ],
      answer: 1,
      explanation:
        "Hypoglycaemia is the commonest stroke mimic and can produce a dense focal deficit that reverses completely with dextrose, so 50 mL of 25% dextrose intravenously followed by reassessment is the correct first move, with a sulfonylurea-treated patient needing prolonged observation and a dextrose infusion because glibenclamide has a long duration of action. Scanning first wastes the minutes in which the brain is being damaged by a reversible cause. Aspirin treats the wrong disease and is contraindicated before imaging in any case. Insulin and mannitol both worsen the situation.",
      difficulty: "easy",
    },
    {
      id: "neurology-stroke-acute-q4",
      stem: "A 48-year-old man has sudden vertigo, vomiting, hoarseness and difficulty swallowing. Examination shows loss of pain and temperature sensation on the left side of the face and the right side of the body, a left Horner syndrome and left limb ataxia. Where is the lesion?",
      options: [
        "Left lateral medulla",
        "Right internal capsule",
        "Left cerebellar hemisphere only",
        "Left midbrain",
        "Right pontine base",
      ],
      answer: 0,
      explanation:
        "Crossed sensory loss - ipsilateral face and contralateral body - with Horner syndrome, palatal and vocal cord palsy, ataxia and vertigo is the lateral medullary or Wallenberg syndrome, from posterior inferior cerebellar artery or vertebral artery occlusion, and the side is given by the face and the Horner syndrome, which are on the left. An internal capsular lesion causes a pure motor hemiparesis without cranial nerve or crossed findings. An isolated cerebellar lesion gives ataxia and vertigo but not the crossed sensory pattern, Horner syndrome or bulbar palsy. Midbrain lesions produce third nerve palsy with contralateral weakness, and a pontine base lesion produces sixth and seventh nerve involvement with contralateral hemiparesis.",
      difficulty: "moderate",
    },
    {
      id: "neurology-stroke-acute-q5",
      stem: "A 66-year-old man is admitted with an acute ischaemic stroke and moderate right hemiparesis with slurred speech. He is alert. His daughter asks when he can eat. What should be done first?",
      options: [
        "Allow a normal diet since he is alert",
        "Perform a bedside swallow screen before any oral intake, including medicines and water",
        "Insert a percutaneous endoscopic gastrostomy on day 1",
        "Keep him nil by mouth for 7 days as a routine",
        "Allow only oral fluids but no solids",
      ],
      answer: 1,
      explanation:
        "Up to half of acute strokes have dysphagia and aspiration pneumonia is a leading cause of early death, so every stroke patient must have a bedside swallow screen before the first oral intake of anything, including tablets and sips of water; alertness and clear speech do not exclude an unsafe swallow. If the screen fails, a nasogastric tube within 24 hours provides nutrition rather than starving the patient, and a gastrostomy is considered only if dysphagia persists for weeks. Routinely withholding all oral intake for a week causes malnutrition and delays recovery, and a fluids-only rule is unsafe because thin liquids are the hardest bolus to control.",
      difficulty: "easy",
    },
    {
      id: "neurology-stroke-acute-q6",
      stem: "A 30-year-old woman presents 8 days after a normal delivery with severe headache, two generalised seizures, papilloedema and mild left hemiparesis. CT shows a right parietal haemorrhagic infarct that does not respect an arterial territory. What is the most likely diagnosis and appropriate treatment?",
      options: [
        "Hypertensive intracerebral haemorrhage; lower blood pressure aggressively",
        "Cerebral venous sinus thrombosis; anticoagulate with low molecular weight heparin",
        "Arterial ischaemic stroke; give intravenous thrombolysis",
        "Eclampsia; give magnesium sulphate alone and observe",
        "Brain abscess; start intravenous antibiotics",
      ],
      answer: 1,
      explanation:
        "Headache, seizures, papilloedema and a haemorrhagic lesion crossing arterial boundaries in the puerperium is cerebral venous sinus thrombosis, confirmed by MR venography, and anticoagulation with low molecular weight heparin is indicated even in the presence of haemorrhagic infarction because the haemorrhage results from venous congestion that anticoagulation relieves. Aggressive blood pressure lowering treats a diagnosis she does not have. Thrombolysis is contraindicated with haemorrhage on imaging and this is not an arterial stroke. Eclampsia should be excluded by blood pressure and urine protein, but it does not explain a focal haemorrhagic infarct, and there is no fever or ring lesion to suggest abscess.",
      difficulty: "hard",
    },
    {
      id: "neurology-stroke-acute-q7",
      stem: "A 59-year-old man had a minor ischaemic stroke with an NIHSS of 2 twenty hours ago, and CT excludes haemorrhage. He is not in atrial fibrillation. Which antithrombotic regimen is best supported by evidence?",
      options: [
        "Aspirin 75 mg alone lifelong from today",
        "Aspirin plus clopidogrel for 21 days, then a single antiplatelet long term",
        "Warfarin titrated to an INR of 2-3",
        "Aspirin plus clopidogrel indefinitely",
        "Low molecular weight heparin for 7 days then aspirin",
      ],
      answer: 1,
      explanation:
        "In minor non-cardioembolic ischaemic stroke with an NIHSS of 3 or less, or in high-risk TIA, short-course dual antiplatelet therapy with aspirin and clopidogrel started within 24 hours and continued for 21 days reduces early recurrence, after which a single antiplatelet is continued long term - the CHANCE and POINT evidence. Aspirin alone is inferior in the first three weeks in this specific group. Warfarin has no advantage over antiplatelets in non-cardioembolic stroke and adds bleeding. Continuing dual antiplatelet therapy indefinitely progressively increases major bleeding without further ischaemic benefit, and heparin does not reduce recurrence in acute ischaemic stroke.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "neurology-stroke-acute-c1",
      front: "WHO definition of stroke.",
      back: "Rapidly developing clinical signs of focal or global disturbance of cerebral function lasting more than 24 hours or leading to death, with no apparent cause other than vascular origin.",
    },
    {
      id: "neurology-stroke-acute-c2",
      front: "What does BE-FAST stand for?",
      back: "Balance, Eyes, Face droop, Arm weakness, Speech difficulty, Time to call for help - the two extra letters catch posterior circulation stroke.",
    },
    {
      id: "neurology-stroke-acute-c3",
      front: "Alteplase dose and window for acute ischaemic stroke.",
      back: "0.9 mg/kg (maximum 90 mg) within 4.5 hours of time last seen well; 10% as a bolus over 1 minute, the rest over 60 minutes. Tenecteplase 0.25 mg/kg single bolus is an alternative.",
    },
    {
      id: "neurology-stroke-acute-c4",
      front: "Blood pressure rules in acute ischaemic stroke.",
      back: "Do not treat unless above 220/120 mmHg. If thrombolysing, bring below 185/110 mmHg first and keep below 180/105 mmHg for 24 hours. In intracerebral haemorrhage aim systolic 140 mmHg.",
    },
    {
      id: "neurology-stroke-acute-c5",
      front: "Thrombectomy window for large-vessel occlusion.",
      back: "Within 6 hours routinely; extended to 24 hours in selected patients with perfusion or clinical-core mismatch (DAWN, DEFUSE-3).",
    },
    {
      id: "neurology-stroke-acute-c6",
      front: "Five lacunar syndromes.",
      back: "Pure motor hemiparesis, pure sensory stroke, sensorimotor stroke, ataxic hemiparesis, dysarthria-clumsy hand syndrome - all without cortical signs.",
    },
    {
      id: "neurology-stroke-acute-c7",
      front: "Features of lateral medullary (Wallenberg) syndrome.",
      back: "Ipsilateral facial pain and temperature loss, Horner syndrome, palatal and vocal cord palsy, limb ataxia, vertigo and hiccups; contralateral body pain and temperature loss.",
    },
    {
      id: "neurology-stroke-acute-c8",
      front: "When is aspirin started after ischaemic stroke, and at what dose?",
      back: "300 mg within 48 hours once CT excludes haemorrhage, then 75-150 mg daily; delay 24 hours after thrombolysis and repeat CT first.",
    },
    {
      id: "neurology-stroke-acute-c9",
      front: "Dual antiplatelet regimen after minor stroke or high-risk TIA.",
      back: "Aspirin plus clopidogrel for 21 days started within 24 hours, then a single antiplatelet long term (CHANCE, POINT).",
    },
    {
      id: "neurology-stroke-acute-c10",
      front: "Which single intervention reduces death and dependency in stroke most broadly?",
      back: "Admission to an organised stroke unit - number needed to treat about 20, and available even to patients outside the thrombolysis window.",
    },
    {
      id: "neurology-stroke-acute-c11",
      front: "Timing of carotid endarterectomy after a stroke or TIA.",
      back: "Within 2 weeks of the event for symptomatic internal carotid stenosis of 70-99%; benefit falls sharply with delay.",
    },
    {
      id: "neurology-stroke-acute-c12",
      front: "Three reflex errors to avoid in acute stroke.",
      back: "Sublingual nifedipine, intramuscular injections (they preclude thrombolysis) and dextrose-containing intravenous fluids.",
    },
  ],
  references: [
    "AHA/ASA Guidelines for the Early Management of Patients with Acute Ischemic Stroke, 2019 with 2019-2023 focused updates",
    "Indian Stroke Association / Indian Academy of Neurology consensus guidelines for acute ischaemic stroke, 2022",
    "ESO Guidelines on Intravenous Thrombolysis for Acute Ischaemic Stroke, 2021",
    "DAWN and DEFUSE-3 trials of late-window thrombectomy, NEJM 2018",
    "Harrison's Principles of Internal Medicine, 21st edition, 2022 - cerebrovascular diseases",
  ],
});

topics.push({
  id: "neurology-tia",
  title: "Transient ischaemic attack and secondary prevention",
  oneLiner:
    "A transient ischaemic attack is a transient episode of focal neurological dysfunction caused by focal brain, spinal cord or retinal ischaemia without infarction on imaging, and it is a medical emergency rather than a reassuring event because up to 10% of patients have a completed stroke within 7 days - a risk that specialist assessment, dual antiplatelet therapy, a statin, blood pressure control and carotid surgery within 2 weeks can cut by about 80%.",
  frequency: "core",
  keywords: [
    "TIA",
    "mini stroke",
    "amaurosis fugax",
    "ABCD2 score",
    "carotid stenosis",
    "carotid endarterectomy",
    "clopidogrel",
    "dual antiplatelet",
    "atorvastatin",
    "atrial fibrillation",
    "CHA2DS2-VASc",
    "secondary prevention",
    "crescendo TIA",
    "vertebrobasilar insufficiency",
  ],
  sections: [
    {
      heading: "Definition and why it is an emergency",
      points: [
        "**Tissue-based definition (AHA/ASA, current):** a transient episode of neurological dysfunction caused by focal brain, spinal cord or retinal ischaemia **without acute infarction on imaging**. The older time-based definition of a deficit resolving within 24 hours is obsolete because a third of such patients have infarcts on diffusion-weighted MRI.",
        "**Most TIAs last under an hour**, and typically 5-20 minutes; an event lasting more than an hour usually leaves an infarct and is a minor stroke.",
        "**The risk of stroke after a TIA is front-loaded:** about 5% at 2 days, 8-10% at 7 days and 10-17% at 90 days without treatment. Half of the strokes that follow a TIA occur within the first 48 hours.",
        "Urgent evaluation and treatment within 24 hours reduces the 90-day stroke risk by roughly 80% (the EXPRESS and SOS-TIA studies), which is a larger absolute benefit than most interventions in medicine.",
        "**A TIA is therefore a warning that must be acted upon the same day**, not an event to investigate at leisure; in the Indian setting the practical message to the patient and family is that this is as urgent as chest pain.",
        "The name 'mini stroke' is best avoided with patients because it implies triviality; call it a warning stroke.",
      ],
    },
    {
      heading: "Recognising a TIA and its mimics",
      points: [
        "**Carotid territory TIA:** unilateral weakness or clumsiness of the face, arm or leg, unilateral sensory disturbance, dysphasia, and **amaurosis fugax** - painless monocular visual loss described as a curtain descending, lasting minutes and clearing completely.",
        "**Vertebrobasilar TIA:** bilateral or alternating limb weakness, ataxia and unsteadiness, diplopia, dysarthria, dysphagia, bilateral visual loss or a homonymous field defect, and vertigo. **Vertigo alone is almost never a TIA**; it must be accompanied by other posterior circulation features.",
        "The onset is **sudden and maximal at the start**, and the resolution is complete - a march of symptoms over minutes suggests migraine aura, and a march over seconds with positive symptoms suggests a focal seizure.",
        "**Symptoms that are NOT a TIA on their own:** isolated dizziness or light-headedness, syncope or presyncope, generalised weakness, confusion, incontinence, tinnitus, transient global amnesia, and 'my whole body went numb'.",
        "**Mimics to exclude:** migraine with aura (positive visual phenomena, gradual march, headache follows), focal seizure with Todd paresis, hypoglycaemia, syncope, vestibular disorders, subdural haematoma, brain tumour, multiple sclerosis in the young, and functional neurological disorder.",
        "**Crescendo TIA** - two or more attacks in a week, or increasing frequency, duration or severity - carries a very high stroke risk and warrants admission.",
        "Ask about the specifics that change the diagnosis: neck pain or recent neck trauma or manipulation (dissection), palpitation (atrial fibrillation), claudication and previous vascular surgery, and the drug and contraceptive history.",
      ],
    },
    {
      heading: "Risk stratification and the immediate plan",
      points: [
        "**ABCD2 score:** **A**ge 60 or over = 1; **B**lood pressure 140/90 mmHg or more = 1; **C**linical features - unilateral weakness = 2, speech disturbance without weakness = 1; **D**uration 60 minutes or more = 2, 10-59 minutes = 1; **D**iabetes = 1. Maximum 7.",
        "A score of 0-3 is low risk, 4-5 moderate and 6-7 high, with 2-day stroke risks of roughly 1%, 4% and 8%. **However, current UK and American guidance no longer uses ABCD2 to decide who is seen urgently - everyone with a suspected TIA is assessed within 24 hours** - because the score misses carotid stenosis and atrial fibrillation, which are high-risk regardless of the score.",
        "**Start aspirin 300 mg immediately** (unless bleeding or contraindication) at the moment a TIA is suspected, and refer for specialist assessment within 24 hours.",
        "**Admit** if there is crescendo TIA, atrial fibrillation newly detected, a known high-grade carotid stenosis, an event while already on antiplatelet therapy, or the patient cannot be reliably assessed within 24 hours - a common reason to admit in Indian practice.",
        "**Advise the patient not to drive** until assessed - a month for a private licence and considerably longer for a commercial licence in most jurisdictions.",
        "Give the family written warning symptoms with the instruction to call an ambulance immediately if a deficit recurs and does not clear within a few minutes.",
      ],
    },
    {
      heading: "Investigations after a TIA",
      points: [
        "**Neuroimaging:** MRI with diffusion-weighted imaging is preferred and should be done within 24 hours - it distinguishes true TIA from minor stroke, identifies the vascular territory, and finds mimics. Non-contrast CT is acceptable where MRI is unavailable but a normal CT proves nothing.",
        "**Carotid imaging within 24 hours** for all anterior circulation events in patients who would be candidates for revascularisation: carotid Doppler first, then CT or MR angiography to confirm the degree of stenosis before surgery.",
        "**Cardiac evaluation:** 12-lead ECG in everyone, plus prolonged rhythm monitoring (24-72 hour Holter, or longer where available) because paroxysmal atrial fibrillation is found in 10-15% of apparently cryptogenic events and completely changes treatment from an antiplatelet to an anticoagulant.",
        "**Echocardiography** where a cardiac source is suspected - murmur, rheumatic heart disease, prosthetic valve, recent myocardial infarction, young patient, or no other cause found; add a bubble study for patent foramen ovale in the young.",
        "**Blood tests:** complete blood count (polycythaemia, thrombocytosis, anaemia), blood glucose and HbA1c, lipid profile, creatinine and electrolytes, ESR (giant cell arteritis in amaurosis fugax over 50), and prothrombin time with INR.",
        "In the young or where no cause is found, extend to thrombophilia and antiphospholipid antibodies, homocysteine, vasculitis screen and, in India, evaluation for rheumatic heart disease and cervical artery dissection.",
      ],
    },
    {
      heading: "Secondary prevention: the five pillars",
      points: [
        "**1. Antithrombotic therapy.** For non-cardioembolic events, **aspirin 75-150 mg daily, or clopidogrel 75 mg daily, lifelong**; give **aspirin plus clopidogrel for 21 days** after a high-risk TIA (ABCD2 4 or more) or minor stroke, then drop to one agent. For **atrial fibrillation, anticoagulate** with warfarin (INR 2-3) or a DOAC - aspirin is not an acceptable substitute - and remember that rheumatic mitral stenosis or a mechanical valve requires warfarin, never a DOAC.",
        "**2. Blood pressure.** The single most powerful long-term intervention. Aim **below 130/80 mmHg** after the acute phase; every 10 mmHg fall in systolic pressure reduces recurrent stroke by about a quarter. Start or intensify within a few days of a TIA (immediately, since there is no penumbra to protect), using an ACE inhibitor or ARB with a thiazide-like diuretic or amlodipine.",
        "**3. Lipids.** **High-intensity statin - atorvastatin 40-80 mg or rosuvastatin 20-40 mg daily - for every ischaemic TIA or stroke regardless of the baseline LDL**, targeting LDL cholesterol below 70 mg/dL (below 55 mg/dL for very high risk per the Lipid Association of India). Add ezetimibe 10 mg if the target is missed.",
        "**4. Diabetes and lifestyle.** HbA1c to individualised target, ideally below 7%; complete tobacco cessation in every form including gutkha, khaini and bidi; alcohol reduction; 150 minutes a week of moderate activity; salt below 5 g a day; weight reduction to a BMI below 23 kg/m2 by Asian-Indian criteria; and treatment of obstructive sleep apnoea.",
        "**5. Carotid revascularisation.** **Carotid endarterectomy within 2 weeks** for symptomatic stenosis of **70-99%** (and considered for 50-69% in men with recent symptoms), performed by a surgeon with an audited perioperative stroke or death rate below 6%. Benefit falls sharply after 2 weeks and there is no benefit for near-occlusion or asymptomatic mild stenosis. Carotid stenting is an alternative in the young or where the neck is hostile to surgery.",
        "Set the whole package in a written care plan with named review dates - the failure mode in Indian practice is not ignorance of the drugs but non-adherence and loss to follow-up, so use fixed-dose combinations, the NP-NCD clinic, a treatment card and a family member as the treatment supporter.",
      ],
    },
    {
      heading: "Follow-up and the conversation with the patient",
      points: [
        "Review at 2 weeks, 3 months, then 6-monthly: blood pressure, adherence, bleeding, symptoms of recurrence, HbA1c, lipids annually, renal function on ACE inhibitor or diuretic, INR if on warfarin.",
        "Explain the diagnosis in plain language: a blood vessel to the brain blocked briefly, the brain recovered, and the treatment is to prevent the next one which may not recover.",
        "Explicitly say the numbers - roughly one in ten will have a stroke within a week untreated, and treatment removes most of that risk - because this is what drives adherence.",
        "Address the fear directly, screen for anxiety and depression, and involve the family so that warning symptoms are recognised at home.",
        "Check for and treat the conditions that often coexist: atrial fibrillation, heart failure, peripheral arterial disease, chronic kidney disease and obstructive sleep apnoea.",
        "Document driving advice, work restrictions and, in occupational drivers, the need for formal fitness assessment.",
      ],
    },
  ],
  tables: [
    {
      heading: "ABCD2 score for early stroke risk after TIA",
      columns: ["Component", "Criterion", "Points"],
      rows: [
        ["A - Age", "60 years or more", "1"],
        ["B - Blood pressure", "140/90 mmHg or more at assessment", "1"],
        ["C - Clinical features", "Unilateral weakness", "2"],
        ["C - Clinical features", "Speech disturbance without weakness", "1"],
        ["D - Duration", "60 minutes or more", "2"],
        ["D - Duration", "10-59 minutes", "1"],
        ["D - Diabetes", "Present", "1"],
        ["Interpretation", "0-3 low, 4-5 moderate, 6-7 high (2-day risk about 1%, 4%, 8%)", "Max 7"],
      ],
    },
    {
      heading: "TIA versus its common mimics",
      columns: ["Feature", "TIA", "Migraine aura", "Focal seizure"],
      rows: [
        ["Onset", "Sudden, maximal at onset", "Gradual march over 5-20 minutes", "Sudden, spreads over seconds"],
        ["Symptom type", "Negative - loss of power, sensation, vision, speech", "Positive then negative - flashing lights then scotoma", "Positive - jerking, tingling, deja vu"],
        ["Duration", "Usually 5-20 minutes, under 1 hour", "20-60 minutes", "Seconds to 2 minutes, then postictal state"],
        ["Headache", "Rare", "Follows the aura in most", "Postictal headache common"],
        ["Recurrence pattern", "Stereotyped, in the same territory", "Stereotyped, often lifelong history", "Stereotyped, may generalise"],
        ["Age at first event", "Usually over 50 with vascular risk factors", "Usually under 40, long history", "Any age"],
      ],
    },
    {
      heading: "Secondary prevention package after a non-cardioembolic TIA",
      columns: ["Pillar", "Intervention", "Target or dose"],
      rows: [
        ["Antiplatelet", "Aspirin 75-150 mg or clopidogrel 75 mg daily; aspirin plus clopidogrel for the first 21 days if high risk", "Lifelong single agent thereafter"],
        ["Blood pressure", "ACE inhibitor or ARB with a thiazide-like diuretic or amlodipine", "Below 130/80 mmHg"],
        ["Lipids", "Atorvastatin 40-80 mg or rosuvastatin 20-40 mg daily, add ezetimibe if needed", "LDL below 70 mg/dL (below 55 mg/dL if very high risk)"],
        ["Glycaemia", "Metformin-based regimen; consider an SGLT2 inhibitor or GLP-1 agonist if atherosclerotic disease", "HbA1c below 7% individualised"],
        ["Carotid", "Endarterectomy for symptomatic 70-99% stenosis", "Within 2 weeks of the event"],
        ["Lifestyle", "Tobacco cessation, alcohol reduction, salt below 5 g/day, 150 minutes activity a week", "BMI below 23 kg/m2, waist below 90 cm (men) and 80 cm (women)"],
      ],
    },
  ],
  redFlags: [
    "Two or more TIAs in a week, or attacks increasing in frequency, duration or severity - crescendo TIA, admit today.",
    "A TIA occurring while already on aspirin or clopidogrel - antiplatelet failure; admit and investigate for carotid stenosis or a cardiac source.",
    "TIA with a newly irregular pulse - undiagnosed atrial fibrillation; this patient needs anticoagulation, not an antiplatelet.",
    "Amaurosis fugax in a patient over 50 with headache, scalp tenderness or jaw claudication - giant cell arteritis; check ESR and start steroids the same day.",
    "TIA with neck pain, a Horner syndrome or a recent history of neck trauma or manipulation - carotid or vertebral artery dissection.",
    "Deficit that has not fully resolved by the time you examine the patient - this is a stroke, not a TIA; apply the stroke pathway and the thrombolysis window.",
    "TIA in a patient with a prosthetic valve, rheumatic mitral stenosis or infective endocarditis - urgent cardiology referral; anticoagulation decisions differ.",
  ],
  pearls: [
    "The tissue-based definition rules: transient symptoms with an infarct on diffusion-weighted MRI is a stroke, not a TIA, and it changes prognosis and paperwork.",
    "Half of the strokes that follow a TIA happen in the first 48 hours - which is why the assessment window is 24 hours and not next week's outpatient slot.",
    "Isolated dizziness, syncope, generalised weakness and transient global amnesia are not TIAs; a TIA produces focal negative symptoms with sudden onset.",
    "Vertigo counts as a posterior circulation TIA only when it comes with other brainstem or cerebellar features.",
    "Start aspirin 300 mg the moment a TIA is suspected in the clinic - do not wait for imaging in a patient with no deficit and no bleeding risk.",
    "Do not use ABCD2 to decide who gets seen quickly: everyone with a suspected TIA is assessed within 24 hours, because the score misses carotid stenosis and atrial fibrillation.",
    "Carotid endarterectomy for symptomatic 70-99% stenosis must happen within two weeks; the benefit largely evaporates after that.",
    "Every ischaemic TIA gets a high-intensity statin regardless of the baseline LDL - the benefit is not confined to those with high cholesterol.",
  ],
  theory: [
    {
      id: "neurology-tia-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 64-year-old man with diabetes and hypertension had 20 minutes of right arm weakness and slurred speech yesterday, which resolved completely. Define transient ischaemic attack, describe your evaluation and outline a complete secondary prevention plan.",
      openingLines: [
        "A transient ischaemic attack is a transient episode of neurological dysfunction caused by focal brain, spinal cord or retinal ischaemia without acute infarction on imaging - a tissue-based definition that has replaced the old 24-hour rule.",
        "It is a medical emergency: the risk of completed stroke is about 5% at 2 days and 10% at 7 days, and urgent assessment with immediate secondary prevention reduces the 90-day risk by roughly 80%.",
      ],
      answer: [
        {
          heading: "1. Confirm that it was a TIA",
          points: [
            "History from the patient and a witness: sudden onset, maximal at onset, focal negative symptoms, complete resolution, and duration.",
            "Determine the territory: right arm weakness with dysarthria is a left carotid (anterior circulation) event; ask specifically about amaurosis fugax in the left eye.",
            "Exclude mimics: hypoglycaemia (was he on a sulfonylurea or insulin), focal seizure with Todd paresis, migraine aura, syncope, vestibular disorder and functional symptoms.",
            "Ask about previous similar events, current antiplatelet or anticoagulant use, palpitation, neck trauma, and claudication.",
          ],
        },
        {
          heading: "2. Examination",
          points: [
            "Full neurological examination to confirm that no deficit remains - a residual deficit means this is a stroke.",
            "Pulse for atrial fibrillation, blood pressure in both arms, carotid bruits, cardiac murmurs, peripheral pulses, fundus for retinal emboli and hypertensive or diabetic retinopathy.",
            "Calculate an ABCD2 score for prognostic information, but do not use it to delay assessment.",
          ],
        },
        {
          heading: "3. Investigations",
          points: [
            "MRI brain with diffusion-weighted imaging within 24 hours; CT if MRI is unavailable.",
            "Carotid Doppler within 24 hours since this is an anterior circulation event and he is a surgical candidate.",
            "ECG in all, plus 24-72 hours of rhythm monitoring for paroxysmal atrial fibrillation; echocardiography if a cardiac source is suspected.",
            "Blood glucose and HbA1c, complete blood count, lipid profile, creatinine and electrolytes, ESR, prothrombin time with INR.",
          ],
        },
        {
          heading: "4. Immediate treatment",
          points: [
            "Aspirin 300 mg immediately, then aspirin 75 mg plus clopidogrel 75 mg for 21 days (high-risk TIA), followed by a single antiplatelet lifelong.",
            "If atrial fibrillation is found, stop the antiplatelet and anticoagulate - warfarin to INR 2-3, or a DOAC in non-valvular AF; warfarin only if there is rheumatic mitral stenosis or a mechanical valve.",
            "Atorvastatin 40-80 mg daily started at once, irrespective of baseline LDL.",
            "Refer for specialist assessment within 24 hours; admit if crescendo TIA, new atrial fibrillation, event on antiplatelet therapy, or no reliable access to rapid assessment.",
          ],
        },
        {
          heading: "5. Long-term secondary prevention",
          points: [
            "Blood pressure to below 130/80 mmHg with an ACE inhibitor or ARB plus a thiazide-like diuretic or amlodipine - the largest long-term risk reduction.",
            "LDL cholesterol below 70 mg/dL, adding ezetimibe 10 mg if the target is missed on a maximal statin.",
            "Glycaemic control with an individualised HbA1c target, preferring agents with cardiovascular benefit.",
            "Complete tobacco cessation including smokeless forms, alcohol reduction, salt below 5 g a day, 150 minutes a week of activity, weight to a BMI below 23 kg/m2.",
            "Carotid endarterectomy within 2 weeks if the Doppler shows symptomatic 70-99% stenosis.",
            "Written care plan, driving advice, warning symptoms given to the family, and structured follow-up at 2 weeks, 3 months and then 6-monthly.",
          ],
        },
      ],
      mustDraw: [
        "The ABCD2 score as a table with points and risk bands.",
        "A flow chart of the 24-hour TIA pathway: suspect - aspirin 300 mg - urgent imaging and carotid Doppler and ECG - decide antiplatelet versus anticoagulant - five-pillar secondary prevention.",
      ],
      markSplit: [
        { part: "Definition, tissue-based, and early stroke risk", marks: 2 },
        { part: "History, mimics and localisation", marks: 2 },
        { part: "Examination and investigations", marks: 2 },
        { part: "Immediate antithrombotic and statin decisions", marks: 2 },
        { part: "Long-term five-pillar prevention including carotid surgery", marks: 2 },
      ],
      keywords: ["transient ischaemic attack", "ABCD2", "dual antiplatelet", "carotid endarterectomy", "secondary prevention"],
    },
    {
      id: "neurology-tia-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on the secondary prevention of ischaemic stroke.",
      openingLines: [
        "Secondary prevention is the set of interventions started after an ischaemic stroke or TIA to prevent recurrence, and about 80% of recurrent strokes are preventable by a combination of drugs and risk factor control.",
        "It rests on five pillars: antithrombotic therapy chosen by mechanism, blood pressure control, lipid lowering, control of diabetes and lifestyle, and revascularisation where indicated.",
      ],
      answer: [
        {
          heading: "Antithrombotic therapy chosen by mechanism",
          points: [
            "Non-cardioembolic stroke or TIA: aspirin 75-150 mg or clopidogrel 75 mg daily lifelong; aspirin plus clopidogrel for 21 days only after minor stroke or high-risk TIA.",
            "Atrial fibrillation: anticoagulation with warfarin to INR 2-3 or a direct oral anticoagulant; aspirin is not an adequate substitute.",
            "Rheumatic mitral stenosis or a mechanical prosthetic valve: warfarin, never a DOAC.",
            "Timing after stroke: start anticoagulation 1-14 days after the event depending on infarct size and haemorrhagic risk.",
          ],
        },
        {
          heading: "Blood pressure and lipids",
          points: [
            "Target below 130/80 mmHg once the acute phase is over; each 10 mmHg systolic reduction cuts recurrence by about a quarter.",
            "Preferred combination is an ACE inhibitor or ARB with a thiazide-like diuretic (the PROGRESS regimen) or amlodipine.",
            "High-intensity statin for every ischaemic event irrespective of baseline LDL, targeting LDL below 70 mg/dL, with ezetimibe as the first add-on.",
          ],
        },
        {
          heading: "Diabetes, lifestyle and comorbidity",
          points: [
            "Individualised HbA1c target around 7%; agents with proven cardiovascular benefit preferred.",
            "Complete tobacco cessation in every form, alcohol within limits, salt under 5 g a day, DASH-style diet, 150 minutes of moderate activity weekly, weight to a BMI below 23 kg/m2.",
            "Screen and treat obstructive sleep apnoea, depression and physical deconditioning; adherence support with fixed-dose combinations and a treatment card.",
          ],
        },
        {
          heading: "Revascularisation and follow-up",
          points: [
            "Carotid endarterectomy within 2 weeks for symptomatic internal carotid stenosis of 70-99%; consider for 50-69% in men.",
            "Carotid stenting where surgery is high risk or the patient is young with a suitable lesion.",
            "Structured follow-up with a written plan, warning symptoms taught to the family, driving advice, and rehabilitation continued in the community.",
          ],
        },
      ],
      mustDraw: ["A table of the five pillars of secondary prevention with the drug, dose and target for each."],
      markSplit: [
        { part: "Antithrombotic choice by mechanism", marks: 1.5 },
        { part: "Blood pressure and lipid targets", marks: 1.5 },
        { part: "Diabetes and lifestyle", marks: 1 },
        { part: "Carotid revascularisation and follow-up", marks: 1 },
      ],
      keywords: ["secondary prevention", "PROGRESS", "LDL target", "carotid endarterectomy", "anticoagulation"],
    },
  ],
  mcqs: [
    {
      id: "neurology-tia-q1",
      stem: "A 68-year-old hypertensive man had 15 minutes of painless loss of vision in the right eye described as a curtain coming down, which cleared fully 6 hours ago. He is neurologically normal now. What is the single most important investigation to arrange urgently?",
      options: [
        "Fundus fluorescein angiography",
        "Carotid Doppler of the neck vessels",
        "Visual evoked potentials",
        "MRI of the orbits",
        "Erythrocyte sedimentation rate only",
      ],
      answer: 1,
      explanation:
        "Amaurosis fugax is a retinal TIA in the internal carotid territory, and the urgent question is whether there is a surgically correctable carotid stenosis, so carotid Doppler within 24 hours is the key investigation because symptomatic 70-99% stenosis needs endarterectomy within two weeks. Fluorescein angiography and orbital MRI investigate intrinsic eye disease that does not present with brief complete resolution. Visual evoked potentials test the optic nerve pathway and have no role here. ESR should certainly be checked to exclude giant cell arteritis in a man of this age, but it does not replace the carotid study that determines whether he needs surgery.",
      difficulty: "moderate",
    },
    {
      id: "neurology-tia-q2",
      stem: "A 59-year-old woman is seen 4 hours after a 10-minute episode of left arm weakness that resolved fully. Pulse is irregularly irregular at 96/min, and ECG confirms atrial fibrillation. Echocardiography shows no valve lesion and normal ventricular function. Which is the correct antithrombotic plan?",
      options: [
        "Aspirin 75 mg daily lifelong",
        "Aspirin plus clopidogrel for 21 days then clopidogrel alone",
        "Anticoagulation with a direct oral anticoagulant or warfarin to INR 2-3",
        "Aspirin plus warfarin together",
        "No antithrombotic until MRI confirms infarction",
      ],
      answer: 2,
      explanation:
        "A TIA in a patient with atrial fibrillation is cardioembolic and requires anticoagulation; her CHA2DS2-VASc score already exceeds the threshold once the TIA is counted, and non-valvular AF permits either a DOAC or warfarin. Aspirin alone gives little protection against cardioembolic stroke and is explicitly not an acceptable alternative. Dual antiplatelet therapy is the regimen for non-cardioembolic minor stroke and high-risk TIA, not for AF. Combining aspirin with warfarin adds bleeding without ischaemic benefit in the absence of a coronary indication, and treatment should not be delayed for imaging in a patient with no residual deficit.",
      difficulty: "moderate",
    },
    {
      id: "neurology-tia-q3",
      stem: "Which of the following episodes is most consistent with a transient ischaemic attack?",
      options: [
        "Ten minutes of spinning vertigo with vomiting and no other symptoms",
        "Twenty minutes of sudden painless right-sided face and arm weakness with slurred speech, resolving completely",
        "A 30-second episode of light-headedness and greying of vision on standing up quickly",
        "One hour of tingling that started in the right hand and marched to the face over 20 minutes, followed by a throbbing headache",
        "Sudden inability to recall recent events for 4 hours with repetitive questioning, then full recovery",
      ],
      answer: 1,
      explanation:
        "A TIA produces sudden, focal, negative neurological symptoms that are maximal at onset and resolve completely - unilateral face and arm weakness with dysarthria is the classic anterior circulation event. Isolated vertigo without other brainstem features is almost never a TIA and usually reflects a peripheral vestibular disorder. Light-headedness with greying of vision on standing is presyncope from orthostatic hypotension, a global rather than focal event. A sensory march over 20 minutes followed by headache is migraine aura, and 4 hours of anterograde amnesia with repetitive questioning is transient global amnesia, which carries no stroke risk.",
      difficulty: "easy",
    },
    {
      id: "neurology-tia-q4",
      stem: "A 71-year-old man had a TIA 5 days ago and carotid Doppler shows 85% stenosis of the symptomatic left internal carotid artery. He is fit for surgery. What is the correct timing of carotid endarterectomy?",
      options: [
        "Within 2 weeks of the index event",
        "After 6 weeks to allow the plaque to stabilise",
        "After 3 months of medical therapy, only if symptoms recur",
        "Only if the stenosis progresses beyond 90%",
        "Immediately, within 24 hours, in all cases",
      ],
      answer: 0,
      explanation:
        "The benefit of endarterectomy for symptomatic 70-99% stenosis is greatest when performed within two weeks of the event, when the risk of recurrent stroke is highest, and it falls steeply with delay so that surgery after three months confers little advantage. Waiting six weeks or three months exposes the patient to precisely the period of maximum recurrence risk. There is no requirement for the stenosis to progress, since it is already in the range with proven benefit. Operating within 24 hours in every case is not recommended because very early surgery after a large infarct increases perioperative risk; two weeks is the accepted target.",
      difficulty: "easy",
    },
    {
      id: "neurology-tia-q5",
      stem: "A 55-year-old man presents with three episodes of right hand weakness and dysphasia in the past 4 days, each lasting 5-10 minutes, the last one this morning. He already takes aspirin 75 mg daily. Neurological examination is normal. What is the most appropriate management?",
      options: [
        "Add clopidogrel and review in the outpatient clinic in 2 weeks",
        "Admit the same day for urgent imaging, carotid and cardiac evaluation",
        "Reassure and arrange an MRI in one month",
        "Start warfarin empirically",
        "Increase aspirin to 150 mg and review after one week",
      ],
      answer: 1,
      explanation:
        "Recurrent stereotyped events of increasing frequency define crescendo TIA, and their occurrence on established antiplatelet therapy marks a very high short-term stroke risk, so same-day admission for urgent brain imaging, carotid imaging and cardiac rhythm assessment is required. Adding a second antiplatelet is part of the eventual plan but does not address the need to find a treatable carotid stenosis or cardiac source now. Reassurance and a scan in a month ignore the fact that half the strokes after a TIA occur within 48 hours. Empirical warfarin without a demonstrated cardioembolic source adds bleeding risk without benefit, and simply increasing the aspirin dose has no evidence base.",
      difficulty: "moderate",
    },
    {
      id: "neurology-tia-q6",
      stem: "Which statement about the ABCD2 score is correct in current practice?",
      options: [
        "A score of 3 or less allows safe deferral of assessment for a week",
        "It reliably identifies patients with carotid stenosis needing surgery",
        "It gives prognostic information but should not be used to decide who receives urgent assessment, as all suspected TIAs are assessed within 24 hours",
        "It is used to decide whether to give thrombolysis",
        "A score of 7 is an indication for immediate anticoagulation",
      ],
      answer: 2,
      explanation:
        "Current UK and American guidance retains ABCD2 as a rough prognostic index but no longer uses it to triage access to specialist assessment, because low scores still occur in patients with severe carotid stenosis or atrial fibrillation who face a high recurrence risk - so everyone with a suspected TIA is assessed within 24 hours. Deferring a low-score patient for a week is exactly the practice the guidance abandoned. The score contains no information about carotid or cardiac status. Thrombolysis is not given for a resolved deficit, and a high score is not by itself an indication for anticoagulation, which depends on finding a cardioembolic source.",
      difficulty: "hard",
    },
    {
      id: "neurology-tia-q7",
      stem: "A 63-year-old woman with a TIA two days ago has an LDL cholesterol of 96 mg/dL, blood pressure 148/86 mmHg and HbA1c 6.4%. She is on no lipid-lowering therapy. What is the appropriate lipid management?",
      options: [
        "No statin, since the LDL is below 100 mg/dL",
        "Start atorvastatin 10 mg daily and recheck in 3 months",
        "Start a high-intensity statin such as atorvastatin 40-80 mg daily targeting LDL below 70 mg/dL",
        "Start fenofibrate 145 mg daily",
        "Advise dietary change alone for 6 months before any drug",
      ],
      answer: 2,
      explanation:
        "Every ischaemic stroke or TIA is a secondary prevention indication for a high-intensity statin regardless of the baseline LDL, with a target below 70 mg/dL and below 55 mg/dL in the very high risk category defined by the Lipid Association of India; the SPARCL and treat-to-target evidence supports this. Withholding a statin because the LDL is under 100 mg/dL misapplies a primary prevention threshold. Low-dose atorvastatin gives an LDL reduction under 50% and is not high-intensity therapy. Fenofibrate treats hypertriglyceridaemia and does not reduce stroke recurrence, and a six-month diet trial wastes the period of highest risk.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "neurology-tia-c1",
      front: "Current (tissue-based) definition of TIA.",
      back: "Transient focal neurological dysfunction from brain, spinal cord or retinal ischaemia WITHOUT acute infarction on imaging. The old 24-hour time-based definition is obsolete.",
    },
    {
      id: "neurology-tia-c2",
      front: "Stroke risk after an untreated TIA at 2 days, 7 days and 90 days.",
      back: "About 5% at 2 days, 8-10% at 7 days, 10-17% at 90 days. Urgent treatment reduces the 90-day risk by roughly 80%.",
    },
    {
      id: "neurology-tia-c3",
      front: "Components of the ABCD2 score.",
      back: "Age 60+ (1), BP 140/90+ (1), unilateral weakness (2) or speech disturbance alone (1), duration 60 min+ (2) or 10-59 min (1), Diabetes (1). Maximum 7.",
    },
    {
      id: "neurology-tia-c4",
      front: "What is amaurosis fugax and what does it imply?",
      back: "Painless transient monocular visual loss like a curtain descending - a retinal TIA in the internal carotid territory; arrange carotid Doppler urgently and check ESR if over 50.",
    },
    {
      id: "neurology-tia-c5",
      front: "Dual antiplatelet regimen after a high-risk TIA.",
      back: "Aspirin plus clopidogrel started within 24 hours and continued for 21 days, then a single antiplatelet lifelong.",
    },
    {
      id: "neurology-tia-c6",
      front: "Blood pressure and LDL targets after an ischaemic TIA.",
      back: "Blood pressure below 130/80 mmHg; LDL cholesterol below 70 mg/dL (below 55 mg/dL if very high risk), on a high-intensity statin regardless of baseline LDL.",
    },
    {
      id: "neurology-tia-c7",
      front: "Indication and timing for carotid endarterectomy.",
      back: "Symptomatic internal carotid stenosis of 70-99% (consider 50-69% in men), operated within 2 weeks of the event by a surgeon with a complication rate under 6%.",
    },
    {
      id: "neurology-tia-c8",
      front: "Symptoms that are NOT a TIA when they occur in isolation.",
      back: "Dizziness, syncope or presyncope, generalised weakness, confusion, incontinence, tinnitus, transient global amnesia, whole-body numbness.",
    },
    {
      id: "neurology-tia-c9",
      front: "Definition of crescendo TIA and what it demands.",
      back: "Two or more TIAs in a week, or attacks increasing in frequency, duration or severity - admit the same day for urgent evaluation.",
    },
    {
      id: "neurology-tia-c10",
      front: "When must a TIA patient be anticoagulated rather than given an antiplatelet?",
      back: "When there is atrial fibrillation or another cardioembolic source; warfarin (INR 2-3) if there is rheumatic mitral stenosis or a mechanical valve, otherwise a DOAC or warfarin.",
    },
    {
      id: "neurology-tia-c11",
      front: "What proportion of cryptogenic TIA and stroke patients have paroxysmal atrial fibrillation on prolonged monitoring?",
      back: "About 10-15% with 24-72 hours of monitoring, rising further with longer recording - which is why rhythm monitoring is mandatory.",
    },
    {
      id: "neurology-tia-c12",
      front: "First drug to give in the clinic when a TIA is suspected.",
      back: "Aspirin 300 mg orally at once (if there is no bleeding or contraindication), then refer for specialist assessment within 24 hours.",
    },
  ],
  references: [
    "NICE Guideline NG128, Stroke and transient ischaemic attack in over 16s: diagnosis and initial management, updated 2022",
    "AHA/ASA Guideline for the Prevention of Stroke in Patients with Stroke and Transient Ischemic Attack, 2021",
    "Rothwell PM et al., Effect of urgent treatment of TIA and minor stroke on early recurrent stroke (EXPRESS study), Lancet 2007",
    "CHANCE and POINT trials of dual antiplatelet therapy after minor stroke and high-risk TIA, NEJM 2013 and 2018",
    "Indian Academy of Neurology guidelines on secondary prevention of stroke, 2022",
  ],
});

topics.push({
  id: "neurology-vertigo",
  title: "Vertigo and dizziness - the bedside tests",
  oneLiner:
    "Dizziness is sorted not by asking the patient to describe the sensation but by timing and triggers - episodic and positional dizziness lasting under a minute is benign paroxysmal positional vertigo diagnosed by the Dix-Hallpike test and cured by the Epley manoeuvre, while continuous dizziness lasting days (the acute vestibular syndrome) is separated into vestibular neuritis and posterior circulation stroke by the three-step HINTS examination, which in trained hands is more sensitive for stroke than an early diffusion-weighted MRI.",
  frequency: "core",
  keywords: [
    "vertigo",
    "benign paroxysmal positional vertigo",
    "BPPV",
    "Dix-Hallpike",
    "Epley manoeuvre",
    "HINTS",
    "head impulse test",
    "skew deviation",
    "vestibular neuritis",
    "labyrinthitis",
    "Meniere disease",
    "vestibular migraine",
    "betahistine",
    "prochlorperazine",
    "nystagmus",
    "supine roll test",
    "Brandt-Daroff",
    "orthostatic hypotension",
    "posterior circulation stroke",
    "vestibular rehabilitation",
  ],
  sections: [
    {
      heading: "Dizziness is a symptom of four different problems",
      points: [
        "Dizziness accounts for **3-4% of primary care and emergency visits**; about half is vestibular, a quarter is cardiovascular or medication-related, and a small but critical **3-5% is a posterior circulation stroke** that will be missed if the examination stops at a normal power and reflex check.",
        "The four traditional categories are **vertigo** (an illusion of movement, usually spinning, implying the vestibular system), **presyncope** (about to faint, implying global cerebral hypoperfusion), **disequilibrium** (unsteady on the feet with no head sensation, implying proprioception, cerebellum or a multisensory deficit in the elderly) and **non-specific light-headedness** (often anxiety, hyperventilation or drugs).",
        "**Do not build the diagnosis on the patient's choice of word.** Studies show patients describe the same episode differently minutes apart, and 'giddiness' in Indian practice is used for everything from vertigo to fatigue to anaemia; the quality of the sensation is the least reliable part of the history.",
        "The modern approach is **TiTrATE - Timing, Triggers And Targeted Examination**. Ask: how long does an episode last, what brings it on, and is there anything happening between episodes? These two questions place the patient in one of three vestibular syndromes and each syndrome has its own bedside test.",
        "**Acute vestibular syndrome** is dizziness of sudden onset that is continuous for days, with nausea, vomiting, nystagmus and gait unsteadiness - the differential is vestibular neuritis versus brainstem or cerebellar stroke, and the test is HINTS.",
        "**Episodic vestibular syndrome, triggered** means brief episodes of seconds provoked by head position - the differential is benign paroxysmal positional vertigo versus orthostatic hypotension versus (rarely) a central positional vertigo, and the tests are Dix-Hallpike, the supine roll test and a lying-to-standing blood pressure.",
        "**Episodic vestibular syndrome, spontaneous** means attacks of minutes to hours arising out of the blue - the differential is vestibular migraine, Meniere disease, transient ischaemic attack, panic disorder and arrhythmia, and the work is done by the history, an audiogram and an ECG.",
      ],
    },
    {
      heading: "The history and the general examination that must not be skipped",
      points: [
        "Establish first **how long a single episode lasts**: seconds with position change means BPPV; minutes means transient ischaemic attack or panic; 20 minutes to 12 hours with hearing symptoms means Meniere disease; 4 to 72 hours with headache or photophobia means vestibular migraine; days of continuous vertigo means an acute vestibular syndrome.",
        "Ask specifically about **hearing loss, tinnitus and aural fullness** (Meniere disease, labyrinthitis, acoustic neuroma), about **headache, photophobia and a personal or family history of migraine** (vestibular migraine, which is far commoner than Meniere disease and is the commonest cause of spontaneous recurrent vertigo), and about **ear discharge** (cholesteatoma with a labyrinthine fistula, which is still common in Indian practice).",
        "Take a full **drug history**: aminoglycosides and high-dose furosemide are vestibulotoxic, and antihypertensives, alpha blockers, nitrates, tricyclics, antipsychotics, anticonvulsants, benzodiazepines and alcohol all cause dizziness by other routes. Phenytoin toxicity produces vertigo with gaze-evoked nystagmus and ataxia.",
        "**Every dizzy patient gets a lying and standing blood pressure**, measured supine after 5 minutes and then at 1 and 3 minutes of standing. A fall of **20 mmHg systolic or 10 mmHg diastolic within 3 minutes** defines orthostatic hypotension, and it is one of the commonest and most fixable causes of dizziness in an older Indian patient on multiple antihypertensives in hot weather.",
        "Examine the ears with an otoscope for wax, perforation, effusion and cholesteatoma; do a **Rinne and Weber test** at the bedside and arrange pure tone audiometry whenever there is any hearing symptom or unilateral tinnitus.",
        "Check for **nystagmus in primary gaze and on lateral gaze without fixation** where possible, do finger-nose and heel-shin testing, look for dysarthria and dysmetria, and above all **watch the patient walk and attempt tandem gait** - the inability to stand or walk unaided is the single most useful sign that the lesion is central.",
        "Do not forget the non-vestibular causes that present as 'giddiness' in Indian general practice: **anaemia, hypoglycaemia, dehydration, arrhythmia, aortic stenosis, hypothyroidism, vitamin B12 deficiency and depression** - a haemogram, blood glucose, ECG and thyroid function are reasonable baseline tests when the pattern is not clearly vestibular.",
      ],
    },
    {
      heading: "BPPV and the Dix-Hallpike test",
      points: [
        "**Benign paroxysmal positional vertigo is the single commonest cause of vertigo**, accounting for roughly a fifth to a quarter of all vertigo, rising steeply with age. It is caused by otoconia displaced from the utricular macula into a semicircular canal - the **posterior canal in 85-90%** of cases, the horizontal canal in about 10%, and the anterior canal rarely.",
        "The history is diagnostic before any test: **brief episodes of true spinning lasting less than a minute, provoked by turning over in bed, lying down, sitting up, looking up to a shelf or bending forward**, with lingering nausea and unsteadiness between episodes but no hearing loss, no tinnitus and no neurological symptoms.",
        "**The Dix-Hallpike test** is the diagnostic test for posterior canal BPPV. Seat the patient on a couch with enough room to lie back with the head over the end. **Turn the head 45 degrees to the side being tested**, then lie the patient rapidly supine with the **head extended 20-30 degrees below the horizontal**, keeping the 45 degree rotation. Support the head, keep the eyes open, and watch the eyes for at least 30 seconds.",
        "**A positive Dix-Hallpike shows four features:** a **latency of 1-5 seconds** before the nystagmus starts; **upbeating torsional nystagmus with the top pole of the eye beating towards the dependent (lower) ear**; a **duration of less than 60 seconds** with crescendo then decrescendo; and **reversal of the nystagmus on sitting up**, with **fatiguing on repetition**. The vertigo the patient reports mirrors the nystagmus exactly.",
        "The side that provokes the nystagmus is the **affected side**, and that determines which way the Epley manoeuvre is performed - getting the side wrong is the commonest reason a manoeuvre fails.",
        "If the Dix-Hallpike is negative but the history is positional, perform the **supine roll test (Pagnini-McClure)** for horizontal canal BPPV: lie the patient supine with the head flexed 30 degrees, turn the head rapidly 90 degrees to one side, observe, return to centre, then turn to the other side. **Geotropic** (beating towards the ground) horizontal nystagmus that is stronger on one side indicates canalolithiasis of that ear; **apogeotropic** (beating away from the ground) nystagmus indicates cupulolithiasis of the opposite, less symptomatic side.",
        "**Nystagmus that is purely vertical (downbeating), purely torsional, has no latency, does not fatigue, lasts longer than a minute, or is accompanied by severe vomiting out of proportion, headache or any other neurological sign, is central positional vertigo** - most often a posterior fossa lesion at the fourth ventricle or cerebellar nodulus - and needs MRI, not an Epley.",
        "**Do not perform Dix-Hallpike** in a patient with unstable cervical spine disease, severe cervical spondylosis with myelopathy, recent neck surgery, carotid dissection or severe carotid stenosis; the side-lying (Semont) test is the safer alternative.",
      ],
    },
    {
      heading: "The Epley manoeuvre and the other repositioning treatments",
      points: [
        "**BPPV is treated mechanically, not with drugs.** Vestibular suppressants such as betahistine, cinnarizine and prochlorperazine do not cure BPPV, they blunt the nystagmus that guides the manoeuvre, and they delay central compensation - so they are explicitly **not recommended** as treatment for BPPV.",
        "**The Epley (canalith repositioning) manoeuvre for right posterior canal BPPV**, with each position held for 30-60 seconds or until the nystagmus stops: **(1)** sit the patient upright with the head turned 45 degrees to the right; **(2)** lie back rapidly to the Dix-Hallpike position, head extended 20-30 degrees below horizontal, still turned 45 degrees right; **(3)** rotate the head 90 degrees to the left, so it is now 45 degrees to the left; **(4)** roll the patient onto the left shoulder while rotating the head a further 90 degrees so the **nose points about 45 degrees down towards the floor**; **(5)** sit the patient up slowly with the chin tucked down. Mirror the whole sequence for left-sided BPPV.",
        "**A single Epley manoeuvre resolves about 80% of posterior canal BPPV, and 90-95% resolve after two or three manoeuvres** performed at the same or successive visits - this is one of the highest cure rates for any procedure a family physician can perform, and it takes five minutes and no equipment.",
        "Warn the patient that the manoeuvre **will reproduce their vertigo** and may cause vomiting; an antiemetic 30 minutes beforehand in a very nauseated patient is reasonable, but routine post-procedure postural restrictions (sleeping upright, avoiding bending) have been shown to add nothing and are no longer advised.",
        "The **Semont liberatory manoeuvre** is an equally effective alternative for the posterior canal and is easier in the obese, the kyphotic and those who cannot extend the neck. **Brandt-Daroff exercises**, done by the patient at home in sets of five to each side three times a day, are less effective than an Epley but are the right prescription when the manoeuvre cannot be done in the clinic or symptoms recur.",
        "**Horizontal canal BPPV** does not respond to the Epley; it is treated by the **Lempert (barbecue) 360 degree roll** away from the affected ear in 90 degree steps, or by the Gufoni manoeuvre, and it often resolves spontaneously within days.",
        "Reassess at **one to four weeks**. **Failure of two or three correctly performed manoeuvres, atypical nystagmus, or persistent unsteadiness between episodes should prompt reconsideration of the diagnosis and imaging**, since central positional vertigo and vestibular migraine both mimic BPPV.",
        "Tell the patient BPPV **recurs in about 15% a year and up to 50% at five years**, so that a recurrence is recognised as the old problem rather than a new catastrophe; look for and correct **vitamin D deficiency and osteoporosis**, which are associated with recurrent BPPV.",
      ],
    },
    {
      heading: "The acute vestibular syndrome and the HINTS examination",
      points: [
        "The dangerous scenario is the patient with **continuous vertigo for hours to days with nausea, vomiting, spontaneous nystagmus, head-motion intolerance and unsteadiness** - the acute vestibular syndrome. Most cases are vestibular neuritis, but **up to a quarter are a cerebellar or brainstem infarct**, and about half of those have no other neurological sign.",
        "**HINTS is a three-step oculomotor examination: Head Impulse, Nystagmus, Test of Skew.** It is validated **only in a patient who has the acute vestibular syndrome with nystagmus present at the time of testing** - it is meaningless and misleading in a patient with episodic, positional or resolved dizziness.",
        "**Head impulse test (Halmagyi-Curthoys):** with the patient fixating on your nose, hold the head, and turn it rapidly about 10-20 degrees to one side. A **normal test** (eyes stay locked on your nose) means the vestibulo-ocular reflex is intact - which in a patient who is clearly vertiginous is **the abnormal, worrying finding and points to a central lesion**. A **positive or abnormal test** - the eyes are dragged off target and make a **corrective refixation saccade** back to your nose - localises the lesion to the peripheral vestibular nerve or labyrinth and is reassuring.",
        "**Nystagmus:** peripheral nystagmus is **unidirectional and horizontal with a small torsional component, beats away from the affected ear, obeys Alexander's law** (increases on gaze towards the fast phase) and is suppressed by visual fixation. **Direction-changing nystagmus on lateral gaze, or nystagmus that is purely vertical (especially downbeating) or purely torsional, is central.**",
        "**Test of skew (alternate cover test):** cover and uncover each eye in turn. A **vertical refixation movement of the uncovered eye is skew deviation**, a sign of a brainstem lesion disrupting the otolith-ocular pathway, and it is essentially never seen in vestibular neuritis. Skew deviation with ptosis and miosis suggests a lateral medullary syndrome.",
        "**The mnemonic INFARCT names the dangerous combination: Impulse Normal, Fast-phase Alternating, Refixation on Cover Test.** Any one of these three central findings makes the syndrome central until proved otherwise. A benign, peripheral HINTS requires **all three** to be peripheral - an abnormal head impulse, unidirectional nystagmus and no skew.",
        "In the hands of a trained examiner, **HINTS is more sensitive (about 96-100%) for posterior circulation stroke in the acute vestibular syndrome than a diffusion-weighted MRI performed in the first 24-48 hours, which misses 15-20% of small posterior fossa infarcts**. A normal early MRI therefore does not overrule a central HINTS - repeat the imaging at 72 hours or admit and observe.",
        "**HINTS plus** adds a bedside test of hearing (finger rub or whispered voice): **new unilateral hearing loss with an acute vestibular syndrome suggests an anterior inferior cerebellar artery (AICA) infarct** involving the labyrinthine artery, not a benign labyrinthitis, and raises rather than lowers concern.",
        "**Vestibular neuritis** is treated with **vestibular sedatives for no more than 48-72 hours** (prochlorperazine 5-10 mg TDS, or promethazine), fluids for the vomiting, and then **early vestibular rehabilitation exercises**, which speed central compensation - prolonged sedative use is the commonest cause of chronic persistent dizziness after neuritis. A short course of **prednisolone 1 mg/kg for 5 days with a taper** improves caloric recovery, though evidence for better symptomatic outcome is weak; antivirals do not help.",
      ],
    },
    {
      heading: "Meniere disease, vestibular migraine and the recurrent attacks",
      points: [
        "**Vestibular migraine is the commonest cause of recurrent spontaneous vertigo** and is massively under-diagnosed. Diagnosis requires at least 5 episodes of moderate or severe vestibular symptoms lasting **5 minutes to 72 hours**, a current or past history of migraine, and migrainous features (headache, photophobia, phonophobia or visual aura) with at least half the episodes. Vertigo and headache often do not occur together, which is why the link is missed.",
        "Treat vestibular migraine as migraine: identify triggers, and use **propranolol, amitriptyline, flunarizine or topiramate as prophylaxis** with acute attacks managed with an antiemetic and an NSAID or triptan. Flunarizine is particularly popular in India and works well for this indication.",
        "**Meniere disease (definite)** requires **two or more spontaneous episodes of vertigo lasting 20 minutes to 12 hours**, **audiometrically documented low-to-mid frequency sensorineural hearing loss in the affected ear** on at least one occasion, and **fluctuating aural symptoms - hearing loss, tinnitus or fullness - in that ear**, with no better explanation. The hearing loss is initially fluctuant and low-frequency and becomes permanent and flat over years.",
        "**Management of Meniere disease** is stepwise: **salt restriction to under 2 g of sodium a day**, reduction of caffeine, alcohol and tobacco; **betahistine 16 mg TDS or 24 mg BD**; a thiazide or thiazide-like diuretic; then **intratympanic dexamethasone**; then, for intractable vertigo with useful hearing, intratympanic gentamicin (chemical ablation, at the cost of hearing) or surgery. Acute attacks are treated with prochlorperazine and fluids.",
        "**Drop attacks without loss of consciousness (Tumarkin otolithic crises)** in a patient with Meniere disease indicate advanced disease and are an indication for specialist referral because of the injury risk.",
        "**Persistent postural-perceptual dizziness (PPPD)** is a common and treatable sequel: three months or more of non-vertiginous dizziness and unsteadiness, worse on standing, with active or complex visual motion, usually following an acute vestibular event. It is treated with **vestibular rehabilitation, an SSRI or SNRI and cognitive behavioural therapy**, not with vestibular sedatives, which make it worse.",
        "**Acoustic neuroma (vestibular schwannoma)** rarely causes true vertigo because it grows slowly and allows compensation; it presents with **progressive unilateral sensorineural hearing loss, unilateral tinnitus and unsteadiness**, and any asymmetric sensorineural hearing loss on audiometry needs an **MRI of the internal auditory meatus with gadolinium**.",
        "**Vestibular sedatives - betahistine, cinnarizine, prochlorperazine, dimenhydrinate - are the most over-prescribed drugs in Indian dizziness practice.** They have a role for 48-72 hours in an acute vestibular syndrome or a Meniere attack. Beyond that they prevent central compensation, and cinnarizine and prochlorperazine cause **drug-induced parkinsonism and tardive dyskinesia in the elderly**.",
      ],
    },
  ],
  tables: [
    {
      heading: "Peripheral versus central vertigo at the bedside",
      columns: ["Feature", "Peripheral", "Central"],
      rows: [
        ["Onset and severity", "Sudden, severe spinning with marked nausea and vomiting", "May be milder and vaguer, often with other brainstem symptoms"],
        ["Nystagmus direction", "Unidirectional, horizontal with a torsional component, never changes direction", "May be direction-changing on lateral gaze, purely vertical (downbeating) or purely torsional"],
        ["Effect of visual fixation", "Nystagmus suppressed by fixation", "Nystagmus not suppressed, may be enhanced"],
        ["Head impulse test", "Abnormal - a corrective refixation saccade is seen", "Normal - no catch-up saccade, which is the worrying finding"],
        ["Skew deviation", "Absent", "Present in brainstem lesions"],
        ["Hearing", "May be affected (Meniere, labyrinthitis)", "Usually normal, except AICA infarct which causes deafness"],
        ["Gait", "Unsteady but can walk unaided, falls towards the affected side", "Often cannot stand or walk unaided - truncal ataxia"],
        ["Other neurology", "Absent apart from the ear", "Dysarthria, diplopia, dysphagia, limb ataxia, Horner syndrome, crossed sensory loss"],
      ],
    },
    {
      heading: "Sorting vertigo by timing and trigger",
      columns: ["Pattern", "Duration of an episode", "Likely cause", "Bedside test", "First treatment"],
      rows: [
        ["Triggered by head position", "Seconds to under a minute", "Benign paroxysmal positional vertigo", "Dix-Hallpike; supine roll test if negative", "Epley manoeuvre (Lempert roll for horizontal canal)"],
        ["Triggered by standing up", "Seconds to a few minutes", "Orthostatic hypotension", "Lying and standing blood pressure at 1 and 3 minutes", "Review drugs, salt and fluids, compression stockings"],
        ["Spontaneous, recurrent", "5 minutes to 72 hours, with migraine features", "Vestibular migraine", "History; normal interictal examination", "Migraine prophylaxis - propranolol, amitriptyline, flunarizine"],
        ["Spontaneous, recurrent with ear symptoms", "20 minutes to 12 hours", "Meniere disease", "Pure tone audiogram showing low-to-mid frequency loss", "Salt restriction, betahistine, diuretic"],
        ["Spontaneous, single, continuous", "Days, continuous", "Vestibular neuritis or posterior circulation stroke", "HINTS (with hearing test)", "Peripheral - sedative 48-72 h then rehabilitation; central - stroke pathway"],
        ["Spontaneous, brief, with other deficits", "Minutes", "Posterior circulation transient ischaemic attack", "ABCD2, vascular risk assessment, imaging", "Urgent TIA clinic, antiplatelet, statin"],
      ],
    },
    {
      heading: "The Epley manoeuvre for right posterior canal BPPV, step by step",
      columns: ["Step", "Position", "Hold", "What you should see"],
      rows: [
        ["1", "Sitting upright, head turned 45 degrees to the right", "A few seconds", "Nothing yet"],
        ["2", "Lie back rapidly to Dix-Hallpike right - head 20-30 degrees below horizontal, still 45 degrees right", "30-60 seconds", "Latency then upbeating torsional nystagmus towards the right (lower) ear, with vertigo"],
        ["3", "Rotate the head 90 degrees to the left, so it lies 45 degrees to the left", "30-60 seconds", "Nystagmus may recur in the same direction - a good sign"],
        ["4", "Roll the whole body onto the left shoulder, head rotated a further 90 degrees so the nose points 45 degrees to the floor", "30-60 seconds", "A further burst of nystagmus in the same direction"],
        ["5", "Sit up slowly with the chin tucked to the chest", "30 seconds", "Brief vertigo; then repeat the whole cycle or recheck with Dix-Hallpike"],
      ],
    },
  ],
  redFlags: [
    "A normal head impulse test in a patient with continuous vertigo and nystagmus - the lesion is central until proved otherwise (Impulse Normal of INFARCT).",
    "Direction-changing nystagmus on lateral gaze, or nystagmus that is purely vertical or purely torsional.",
    "Skew deviation - a vertical corrective movement on the alternate cover test.",
    "Inability to stand or walk unaided, or truncal ataxia out of proportion to the vertigo - a cerebellar infarct or haemorrhage.",
    "New sudden unilateral deafness with acute vertigo - suspect an AICA territory infarct rather than labyrinthitis.",
    "Vertigo with headache, neck pain, dysarthria, diplopia, dysphagia, facial numbness, hiccups or Horner syndrome - vertebral artery dissection or lateral medullary syndrome.",
    "Positional nystagmus with no latency, no fatiguing, lasting more than a minute, or with disproportionate vomiting - central positional vertigo needing MRI.",
    "Vertigo in a patient with chronic ear discharge and a positive fistula sign - cholesteatoma with a labyrinthine fistula, needing same-day ENT referral.",
  ],
  pearls: [
    "Do not ask what the dizziness feels like; ask how long it lasts, what brings it on, and what happens in between. Timing and triggers beat the quality of the sensation every time.",
    "In the head impulse test the counter-intuitive result is the dangerous one: a NORMAL head impulse in a vertiginous patient means central. Say this to yourself before you do the test.",
    "HINTS applies only to the acute vestibular syndrome with nystagmus present. Performing HINTS on a patient with positional or resolved dizziness produces a meaningless answer.",
    "A negative early diffusion-weighted MRI does not exclude a posterior fossa infarct - it misses 15-20% in the first 48 hours - so a central HINTS overrules a normal scan.",
    "BPPV is cured by a manoeuvre, not by a tablet. Betahistine and cinnarizine prescribed for BPPV suppress the nystagmus you need to see and delay recovery.",
    "The side that provokes the nystagmus on Dix-Hallpike is the affected side, and it decides which way the Epley is done - most failed Epleys are done on the wrong side.",
    "Every dizzy patient gets a lying and standing blood pressure and a drug review; polypharmacy and postural hypotension explain a very large share of dizziness in the elderly.",
    "Vestibular migraine is commoner than Meniere disease as a cause of recurrent spontaneous vertigo, and the vertigo often occurs without any headache at all.",
  ],
  theory: [
    {
      id: "neurology-vertigo-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 58-year-old woman presents with acute continuous vertigo, vomiting and unsteadiness of 12 hours. Describe how you would clinically distinguish a peripheral from a central cause at the bedside, and outline your management.",
      openingLines: [
        "This is an acute vestibular syndrome - rapid-onset, continuous vertigo lasting more than 24 hours with nausea, vomiting, nystagmus, head-motion intolerance and gait unsteadiness.",
        "The critical decision is between vestibular neuritis, a benign peripheral disorder, and a cerebellar or brainstem infarction, which is present in up to a quarter of such patients and in half of those without any other neurological sign.",
      ],
      answer: [
        {
          heading: "History that separates the two",
          points: [
            "Vascular risk factors - age over 50, hypertension, diabetes, smoking, atrial fibrillation, dyslipidaemia - shift the odds towards stroke.",
            "A preceding viral illness favours vestibular neuritis; sudden onset with headache or neck pain suggests vertebral artery dissection.",
            "Ask for double vision, slurred speech, difficulty swallowing, facial or limb numbness, weakness and hiccups - any positive answer makes the syndrome central.",
            "New unilateral hearing loss with vertigo is not reassuring: it may be an anterior inferior cerebellar artery infarct involving the labyrinthine artery.",
          ],
        },
        {
          heading: "The HINTS examination",
          points: [
            "Head impulse test: rapid small-amplitude head turns with the patient fixating on the examiner's nose. A corrective refixation saccade (abnormal test) indicates a peripheral lesion; a normal test in a vertiginous patient indicates a central lesion.",
            "Nystagmus: peripheral nystagmus is unidirectional and horizontal-torsional, beats away from the affected ear, obeys Alexander's law and is suppressed by fixation. Direction-changing, purely vertical or purely torsional nystagmus is central.",
            "Test of skew: alternate cover test. Any vertical refixation is skew deviation and indicates a brainstem lesion.",
            "The mnemonic for the dangerous pattern is INFARCT - Impulse Normal, Fast-phase Alternating, Refixation on Cover Test. Any single central finding makes the syndrome central.",
            "HINTS in trained hands is about 96-100% sensitive for stroke in this syndrome, exceeding early diffusion-weighted MRI, which misses 15-20% of small posterior fossa infarcts in the first 48 hours.",
          ],
        },
        {
          heading: "Supporting bedside findings",
          points: [
            "Gait: a peripheral patient is unsteady but can walk with support and falls to the affected side; inability to stand or walk unaided is central.",
            "Limb ataxia, dysmetria, dysarthria and Horner syndrome are central.",
            "Hearing assessment by finger rub or whispered voice, followed by audiometry.",
            "General examination for pulse irregularity, blood pressure in both arms, carotid bruit and a lying-standing blood pressure.",
          ],
        },
        {
          heading: "Management if peripheral (vestibular neuritis)",
          points: [
            "Intravenous fluids and an antiemetic for vomiting.",
            "Vestibular sedative - prochlorperazine 5-10 mg three times daily - for no more than 48-72 hours, because prolonged use prevents central compensation.",
            "Prednisolone 1 mg/kg daily for 5 days with a taper may hasten recovery of caloric function; antivirals are not indicated.",
            "Early vestibular rehabilitation exercises, gait training and reassurance; expect substantial recovery over 2-6 weeks.",
          ],
        },
        {
          heading: "Management if central",
          points: [
            "Treat as an acute stroke: admit, non-contrast CT to exclude haemorrhage, MRI with diffusion-weighted imaging and MR angiography of the posterior circulation.",
            "Assess thrombolysis eligibility within the window; posterior circulation stroke is often missed and eligible patients are denied treatment.",
            "Watch for malignant cerebellar oedema with fourth ventricular compression and hydrocephalus in the first 72 hours - deteriorating consciousness needs urgent neurosurgical referral for decompression.",
            "Start secondary prevention - antiplatelet or anticoagulant as appropriate, high-intensity statin, blood pressure and diabetes control, smoking cessation.",
          ],
        },
      ],
      mustDraw: [
        "A three-column table of the HINTS components against their peripheral and central findings.",
        "A flow chart: acute vestibular syndrome, then HINTS, branching to peripheral (neuritis - sedative then rehabilitation) and central (stroke pathway).",
      ],
      markSplit: [
        { part: "Definition of the acute vestibular syndrome", marks: 1 },
        { part: "History distinguishing peripheral from central", marks: 2 },
        { part: "HINTS examination described correctly", marks: 3 },
        { part: "Other bedside signs including gait", marks: 1 },
        { part: "Management of vestibular neuritis", marks: 1.5 },
        { part: "Management of posterior circulation stroke", marks: 1.5 },
      ],
      keywords: ["acute vestibular syndrome", "HINTS", "head impulse test", "skew deviation", "vestibular neuritis", "cerebellar infarct"],
    },
    {
      id: "neurology-vertigo-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "core",
      question: "Write a short note on benign paroxysmal positional vertigo - diagnosis by the Dix-Hallpike test and treatment by the Epley manoeuvre.",
      openingLines: [
        "Benign paroxysmal positional vertigo is the commonest cause of vertigo, due to otoconia displaced from the utricle into a semicircular canal, the posterior canal in 85-90% of cases.",
        "It causes brief episodes of spinning lasting under a minute provoked by changes of head position, with no hearing loss and no neurological signs, and it is cured mechanically by a repositioning manoeuvre.",
      ],
      answer: [
        {
          heading: "Clinical features",
          points: [
            "Episodes of true rotatory vertigo lasting seconds to less than a minute, triggered by turning over in bed, lying down, sitting up, bending forward or looking upwards.",
            "Nausea and residual unsteadiness may persist for minutes to hours after the episode.",
            "No hearing loss, no tinnitus, no aural fullness and no headache or focal neurological deficit.",
            "Commoner with age, in women, after head trauma, after vestibular neuritis, and in vitamin D deficiency and osteoporosis.",
          ],
        },
        {
          heading: "The Dix-Hallpike test",
          points: [
            "Seat the patient on a couch so the head can extend beyond the end; explain that the test will bring on the vertigo.",
            "Turn the head 45 degrees towards the side being tested, then lie the patient down rapidly with the head extended 20-30 degrees below the horizontal, maintaining the rotation.",
            "Keep the eyes open and observe for at least 30 seconds.",
            "A positive test shows a latency of 1-5 seconds, upbeating torsional nystagmus with the upper pole beating towards the dependent ear, duration under 60 seconds, reversal on sitting up and fatiguing on repetition.",
            "The provoking side is the affected side. If Dix-Hallpike is negative, perform the supine roll test for horizontal canal BPPV.",
          ],
        },
        {
          heading: "The Epley manoeuvre",
          points: [
            "Position 1 - sitting, head turned 45 degrees to the affected side.",
            "Position 2 - lie back to the Dix-Hallpike position, head 20-30 degrees below horizontal; hold 30-60 seconds.",
            "Position 3 - rotate the head 90 degrees to the opposite side; hold 30-60 seconds.",
            "Position 4 - roll the body onto the unaffected shoulder with a further 90 degrees of head rotation so the nose points 45 degrees to the floor; hold 30-60 seconds.",
            "Position 5 - sit up slowly with the chin tucked. Repeat until the Dix-Hallpike is negative.",
            "About 80% resolve after one manoeuvre and 90-95% after two or three; postural restrictions afterwards are unnecessary.",
          ],
        },
        {
          heading: "What not to do, and when to reconsider",
          points: [
            "Do not treat BPPV with betahistine, cinnarizine or prochlorperazine - they do not cure it, they mask the nystagmus and they delay compensation.",
            "Brandt-Daroff exercises at home are the second choice if a manoeuvre cannot be performed.",
            "Horizontal canal BPPV is treated with the Lempert 360 degree barbecue roll, not the Epley.",
            "Reconsider the diagnosis and image if two or three correct manoeuvres fail, if the nystagmus is atypical or central in character, or if there is unsteadiness between episodes.",
            "Counsel that recurrence occurs in about 15% a year, and check vitamin D.",
          ],
        },
      ],
      mustDraw: [
        "A five-panel line diagram of the Epley manoeuvre positions with the head angle marked at each step.",
        "A table of the four features of a positive Dix-Hallpike - latency, direction, duration, fatiguability.",
      ],
      markSplit: [
        { part: "Definition and pathophysiology", marks: 1 },
        { part: "Clinical features", marks: 1 },
        { part: "Dix-Hallpike technique and positive findings", marks: 1.5 },
        { part: "Epley manoeuvre steps and success rate", marks: 1.5 },
      ],
      keywords: ["BPPV", "otoconia", "Dix-Hallpike", "Epley manoeuvre", "posterior semicircular canal", "Brandt-Daroff"],
    },
  ],
  mcqs: [
    {
      id: "neurology-vertigo-q1",
      stem: "A 61-year-old hypertensive man has had continuous vertigo, vomiting and unsteadiness for 18 hours. He has spontaneous left-beating horizontal nystagmus in primary gaze that becomes right-beating on right gaze. The head impulse test is normal in both directions. The alternate cover test shows a small vertical corrective movement. Power, reflexes and coordination appear normal. What is the most appropriate next step?",
      options: [
        "Reassure, prescribe betahistine and review in one week",
        "Perform the Epley manoeuvre for left posterior canal BPPV",
        "Admit and manage as an acute posterior circulation stroke",
        "Prescribe prednisolone 1 mg/kg for presumed vestibular neuritis",
        "Discharge if a diffusion-weighted MRI done now is normal",
      ],
      answer: 2,
      explanation:
        "All three HINTS components are central - the head impulse is normal (Impulse Normal), the nystagmus changes direction with gaze (Fast-phase Alternating) and there is skew deviation (Refixation on Cover Test) - which is the INFARCT pattern and mandates management as a posterior circulation stroke even though the limb examination is normal, since half of such infarcts have no other sign. Betahistine and reassurance would discharge a stroke. The Epley treats positional vertigo lasting seconds, not continuous vertigo of 18 hours, and there is no positional history. Steroids for neuritis would be treating the wrong diagnosis. Discharging on a normal early diffusion-weighted MRI is the classic trap: it misses 15-20% of small posterior fossa infarcts in the first 48 hours, so a central HINTS overrules a normal scan.",
      difficulty: "hard",
    },
    {
      id: "neurology-vertigo-q2",
      stem: "A 54-year-old woman has 20-second episodes of spinning whenever she turns over in bed or looks up. There is no hearing loss or tinnitus. On right Dix-Hallpike, after a 3-second latency she develops upbeating torsional nystagmus with the upper pole beating towards the right ear, lasting 25 seconds and fatiguing on repetition. What is the correct treatment?",
      options: [
        "Betahistine 16 mg three times daily for six weeks",
        "The Epley manoeuvre performed for the right side",
        "The Lempert 360 degree barbecue roll to the right",
        "Cinnarizine 25 mg three times daily and bed rest",
        "MRI of the brain before any treatment",
      ],
      answer: 1,
      explanation:
        "The latency, upbeating torsional direction towards the dependent right ear, duration under a minute and fatiguing on repetition are the four defining features of a positive right Dix-Hallpike, diagnosing right posterior canal BPPV, which is treated by a right-sided Epley manoeuvre with roughly 80% resolution after one attempt. Betahistine and cinnarizine do not cure BPPV, mask the nystagmus needed to guide and confirm the manoeuvre, and delay central compensation; cinnarizine also risks drug-induced parkinsonism. The Lempert roll is the treatment for horizontal canal BPPV, which is diagnosed by the supine roll test and shows horizontal geotropic or apogeotropic nystagmus, not torsional. Imaging is unnecessary when the history and the Dix-Hallpike are classical and there are no central features.",
      difficulty: "easy",
    },
    {
      id: "neurology-vertigo-q3",
      stem: "A 44-year-old woman has had five attacks over two years of spinning vertigo lasting 3-6 hours, each with reduced hearing, roaring tinnitus and fullness in the left ear that improve as the attack settles. An audiogram during an attack showed low-frequency sensorineural hearing loss on the left. Which is the most appropriate first-line management?",
      options: [
        "Salt restriction to under 2 g sodium a day plus betahistine and a thiazide diuretic",
        "Intratympanic gentamicin ablation of the left labyrinth",
        "Propranolol 40 mg twice daily as migraine prophylaxis",
        "The Epley manoeuvre to the left",
        "Long-term prochlorperazine 5 mg three times daily",
      ],
      answer: 0,
      explanation:
        "Two or more spontaneous vertigo attacks of 20 minutes to 12 hours, audiometrically documented low-to-mid frequency sensorineural loss in the affected ear and fluctuating aural symptoms in that ear define definite Meniere disease, whose first-line management is dietary sodium restriction below 2 g a day with reduction of caffeine and alcohol, betahistine and a thiazide diuretic. Intratympanic gentamicin is a late, hearing-sacrificing option reserved for intractable vertigo after conservative measures fail. Propranolol treats vestibular migraine, which lacks the documented fluctuating low-frequency hearing loss seen here. The Epley treats positional vertigo of seconds, not attacks of hours. Continuous prochlorperazine prevents central compensation and causes parkinsonism and tardive dyskinesia.",
      difficulty: "moderate",
    },
    {
      id: "neurology-vertigo-q4",
      stem: "A 66-year-old man on amlodipine, telmisartan, tamsulosin and glimepiride complains of light-headedness on getting out of bed and out of a chair, lasting under a minute, with two near-faints. There is no spinning, no hearing symptom and no nystagmus. Supine blood pressure is 138/82 mmHg; at 3 minutes of standing it is 112/70 mmHg with a pulse rise from 72 to 78. What is the most appropriate action?",
      options: [
        "Perform the Dix-Hallpike test and treat with the Epley manoeuvre",
        "Perform HINTS to exclude a brainstem stroke",
        "Review and reduce the antihypertensive and alpha blocker load, advise slow rising, salt and fluid intake",
        "Start betahistine 16 mg three times daily",
        "Arrange an urgent MRI of the internal auditory meatus",
      ],
      answer: 2,
      explanation:
        "The fall of 26 mmHg systolic within 3 minutes of standing meets the definition of orthostatic hypotension (a drop of 20 mmHg systolic or 10 mmHg diastolic), and the symptom is presyncope on standing rather than vertigo, so the treatment is deprescribing - reducing the antihypertensive burden and the alpha blocker tamsulosin - together with slow rising, adequate salt and fluid, and consideration of compression stockings. Dix-Hallpike and the Epley address positional vertigo from BPPV, which spins and is triggered by lying and rolling rather than by standing. HINTS is validated only in a continuous acute vestibular syndrome with nystagmus and would be meaningless here. Betahistine treats Meniere disease and would add a drug to an already excessive list. An MRI of the internal auditory meatus is for asymmetric sensorineural hearing loss, absent in this man.",
      difficulty: "moderate",
    },
    {
      id: "neurology-vertigo-q5",
      stem: "A 35-year-old woman has had eight episodes in two years of vertigo lasting 2-8 hours with nausea, photophobia and sensitivity to sound; about half are accompanied by a throbbing unilateral headache. Hearing is normal and pure tone audiometry is normal. Neurological and otological examination between attacks is normal. What is the diagnosis and the most appropriate preventive treatment?",
      options: [
        "Meniere disease - salt restriction and betahistine",
        "Vestibular migraine - propranolol, amitriptyline or flunarizine",
        "Recurrent vestibular neuritis - a repeated steroid course",
        "Benign paroxysmal positional vertigo - Brandt-Daroff exercises",
        "Persistent postural-perceptual dizziness - an SSRI and vestibular rehabilitation",
      ],
      answer: 1,
      explanation:
        "Repeated episodes of vestibular symptoms lasting between 5 minutes and 72 hours with migrainous features - photophobia, phonophobia and headache - in at least half the attacks, with normal hearing and a normal audiogram, meet the criteria for vestibular migraine, and prophylaxis follows migraine practice with propranolol, amitriptyline, flunarizine or topiramate. Meniere disease requires audiometrically documented low-to-mid frequency sensorineural hearing loss and fluctuating aural symptoms, both absent here. Vestibular neuritis is a single monophasic illness of continuous vertigo lasting days, not a recurrent episodic disorder. BPPV lasts under a minute and is triggered by head position. Persistent postural-perceptual dizziness is continuous non-spinning unsteadiness for three months or more, not discrete attacks of hours.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "neurology-vertigo-c1",
      front: "The four features of a positive Dix-Hallpike test.",
      back: "Latency of 1-5 seconds; upbeating torsional nystagmus with the upper pole beating towards the dependent ear; duration under 60 seconds; reversal on sitting up with fatiguing on repetition.",
    },
    {
      id: "neurology-vertigo-c2",
      front: "The three components of HINTS and the central pattern.",
      back: "Head Impulse, Nystagmus, Test of Skew. Central = INFARCT: Impulse Normal, Fast-phase Alternating (direction-changing), Refixation on Cover Test (skew). Any one central finding means central.",
    },
    {
      id: "neurology-vertigo-c3",
      front: "Why is a NORMAL head impulse test the worrying result?",
      back: "In a patient with continuous vertigo and nystagmus, an intact vestibulo-ocular reflex means the peripheral apparatus is working, so the lesion must be central - a brainstem or cerebellar stroke.",
    },
    {
      id: "neurology-vertigo-c4",
      front: "Which canal is involved in most BPPV, and what treats it?",
      back: "The posterior semicircular canal in 85-90%; treated by the Epley manoeuvre (about 80% cured after one, 90-95% after two or three). Horizontal canal BPPV needs the Lempert 360 degree roll.",
    },
    {
      id: "neurology-vertigo-c5",
      front: "The five positions of the Epley manoeuvre for the right side.",
      back: "1 Sit, head 45 degrees right. 2 Lie back to Dix-Hallpike right, head 20-30 degrees below horizontal. 3 Head 90 degrees to the left. 4 Roll onto the left shoulder, nose 45 degrees to the floor. 5 Sit up with the chin tucked. Hold each 30-60 seconds.",
    },
    {
      id: "neurology-vertigo-c6",
      front: "Diagnostic criteria for definite Meniere disease.",
      back: "Two or more spontaneous vertigo attacks of 20 minutes to 12 hours; audiometrically documented low-to-mid frequency sensorineural hearing loss in the affected ear on at least one occasion; fluctuating hearing loss, tinnitus or fullness in that ear; no better explanation.",
    },
    {
      id: "neurology-vertigo-c7",
      front: "Definition of orthostatic hypotension.",
      back: "A fall of 20 mmHg or more in systolic, or 10 mmHg or more in diastolic, blood pressure within 3 minutes of standing from a supine position.",
    },
    {
      id: "neurology-vertigo-c8",
      front: "How long may vestibular sedatives be used, and why not longer?",
      back: "48-72 hours only. Beyond that betahistine, cinnarizine, prochlorperazine and dimenhydrinate delay central compensation and cause chronic dizziness; cinnarizine and prochlorperazine also cause drug-induced parkinsonism and tardive dyskinesia in the elderly.",
    },
    {
      id: "neurology-vertigo-c9",
      front: "Commonest cause of recurrent spontaneous vertigo.",
      back: "Vestibular migraine - 5 minutes to 72 hours, migraine history, migrainous features in at least half the attacks; the vertigo often occurs without any headache.",
    },
    {
      id: "neurology-vertigo-c10",
      front: "What does new unilateral deafness with an acute vestibular syndrome suggest?",
      back: "An anterior inferior cerebellar artery (AICA) infarct involving the labyrinthine artery - it raises rather than lowers the concern for stroke (HINTS plus).",
    },
  ],
  references: [
    "Barany Society International Classification of Vestibular Disorders - BPPV (2015), Meniere disease (2015) and vestibular migraine (2012) diagnostic criteria",
    "AAO-HNS Clinical Practice Guideline: Benign Paroxysmal Positional Vertigo (Update), Otolaryngology-Head and Neck Surgery 2017",
    "Kattah JC et al., HINTS to diagnose stroke in the acute vestibular syndrome, Stroke 2009",
    "Newman-Toker DE, Edlow JA, TiTrATE - a novel approach to diagnosing acute dizziness and vertigo, Neurologic Clinics 2015",
    "API Textbook of Medicine, 11th edition, 2019 - approach to vertigo",
    "Harrison's Principles of Internal Medicine, 21st edition, 2022 - dizziness and vertigo",
  ],
});

topics.push({
  id: "neurology-peripheral-neuropathy",
  title: "Peripheral neuropathy, especially diabetic",
  oneLiner:
    "Peripheral neuropathy is damage to peripheral nerves producing a length-dependent glove-and-stocking loss of sensation, burning pain, absent ankle reflexes and eventually weakness, and in Indian family practice the first four causes to exclude in every case are diabetes, alcohol, vitamin B12 deficiency and leprosy - the last being the commonest treatable neuropathy in the world and the only one where a thickened palpable nerve makes the diagnosis at the bedside.",
  frequency: "core",
  keywords: [
    "peripheral neuropathy",
    "diabetic peripheral neuropathy",
    "distal symmetric polyneuropathy",
    "glove and stocking",
    "monofilament",
    "Semmes-Weinstein",
    "vibration",
    "128 Hz tuning fork",
    "pregabalin",
    "duloxetine",
    "amitriptyline",
    "gabapentin",
    "vitamin B12 deficiency",
    "subacute combined degeneration",
    "leprosy",
    "mononeuritis multiplex",
    "Guillain-Barre syndrome",
    "carpal tunnel syndrome",
    "isoniazid",
    "pyridoxine",
    "diabetic foot",
    "autonomic neuropathy",
  ],
  sections: [
    {
      heading: "Defining the pattern before hunting the cause",
      points: [
        "The first job is not to name a cause but to **define the pattern**, using four questions: which fibres (sensory, motor, autonomic or mixed), what distribution (symmetric and length-dependent, asymmetric and multifocal, or proximal), what time course (acute over days, subacute over weeks, chronic over months to years), and what pathology (axonal or demyelinating).",
        "**Distal symmetric sensorimotor polyneuropathy** is by far the commonest pattern - the classic **glove-and-stocking** distribution, worst distally, beginning in the toes because the longest axons fail first, with absent ankle jerks before knee jerks. Symptoms reach the mid-shin before the fingertips are involved.",
        "**Mononeuropathy** is one nerve (carpal tunnel median neuropathy, ulnar neuropathy at the elbow, common peroneal palsy at the fibular neck with foot drop, meralgia paraesthetica). **Mononeuritis multiplex** is the painful, stepwise, asymmetric involvement of two or more named nerves - and in India that means **leprosy, diabetes, vasculitis (polyarteritis nodosa, rheumatoid, ANCA-associated) or HIV** until proved otherwise.",
        "**Small-fibre involvement** produces burning, tingling, electric-shock pain, allodynia and loss of pinprick and temperature, with preserved reflexes and normal nerve conduction studies. **Large-fibre involvement** produces numbness, loss of vibration and joint position sense, sensory ataxia with a positive Romberg sign, and absent reflexes.",
        "**Axonal neuropathies** (diabetes, alcohol, uraemia, drugs, nutritional) are length-dependent, chronic and produce wasting; **demyelinating neuropathies** (Guillain-Barre syndrome, chronic inflammatory demyelinating polyradiculoneuropathy, hereditary Charcot-Marie-Tooth disease) produce weakness out of proportion to wasting, early global areflexia and involvement of proximal as well as distal muscles.",
        "**Weakness that is proximal as well as distal, or that dominates over sensory symptoms, or that is progressing over days, is not a routine metabolic neuropathy** - think Guillain-Barre syndrome, CIDP or a vasculitic neuropathy and refer the same day.",
      ],
    },
    {
      heading: "Causes that matter in Indian practice",
      points: [
        "**Diabetes mellitus is the commonest cause of neuropathy in India**, affecting up to half of all people with diabetes over their lifetime; roughly 10-15% have neuropathy at the time of diagnosis of type 2 diabetes, and **prediabetes alone causes a small-fibre painful neuropathy**.",
        "**Alcohol** causes a painful, burning, predominantly small-fibre axonal neuropathy through direct toxicity compounded by thiamine, pyridoxine, folate and B12 deficiency; it is common, under-asked-about, and partly reversible with abstinence and B-complex replacement.",
        "**Vitamin B12 deficiency** is widespread in India because of vegetarian diets, and is aggravated by **metformin** (which reduces B12 absorption and should prompt periodic B12 measurement in long-term users), by proton pump inhibitors, by gastric surgery and by pernicious anaemia. It produces a mixed picture - **subacute combined degeneration** with dorsal column loss plus corticospinal signs, so ankle jerks are absent but knee jerks brisk and plantars extensor, often with a normal haemoglobin and a normal mean corpuscular volume.",
        "**Leprosy remains the commonest treatable cause of peripheral neuropathy worldwide and India carries over half the global burden.** Look for **hypopigmented or erythematous anaesthetic patches, loss of sensation over the patch, and thickened palpable nerves** - the ulnar at the elbow, common peroneal at the fibular neck, posterior tibial behind the medial malleolus, greater auricular in the neck and radial cutaneous at the wrist. A pure neuritic form with no skin lesion exists and is easily missed.",
        "**Drugs:** isoniazid (prevented by **pyridoxine 10 mg daily routinely with anti-tuberculosis treatment, 50 mg daily in the malnourished, diabetic, pregnant, alcoholic or HIV-positive**), metronidazole in prolonged courses, phenytoin, dapsone, nitrofurantoin, linezolid, vincristine, cisplatin, taxanes, thalidomide, amiodarone and older antiretrovirals such as stavudine and didanosine.",
        "**Other systemic causes:** chronic kidney disease, hypothyroidism, chronic liver disease, HIV (both the disease and its treatment), hepatitis C with cryoglobulinaemia, monoclonal gammopathy and amyloidosis, connective tissue disease and vasculitis, sarcoidosis, hereditary Charcot-Marie-Tooth disease (high arches, hammer toes, inverted champagne-bottle legs, a positive family history), and chronic arsenic exposure from contaminated groundwater in parts of West Bengal and Bihar.",
        "About **20-25% of chronic axonal polyneuropathies remain idiopathic** after a full work-up; in the elderly with a mild, slowly progressive, purely sensory neuropathy this is an acceptable conclusion once diabetes, B12 deficiency and a paraprotein have been excluded.",
      ],
    },
    {
      heading: "Diabetic neuropathy: the forms and the screening examination",
      points: [
        "**Distal symmetric polyneuropathy accounts for about 75% of diabetic neuropathy.** It is length-dependent and progresses proximally; when sensory loss reaches the knee, the fingertips become involved, and involvement of the anterior abdominal wall is a late sign.",
        "**Screen for diabetic peripheral neuropathy at the diagnosis of type 2 diabetes and 5 years after diagnosis of type 1 diabetes, and annually thereafter.** The screening examination is a **10 g Semmes-Weinstein monofilament** at the plantar surface of the great toe and the first, third and fifth metatarsal heads, **plus at least one of** a 128 Hz tuning fork at the great toe (vibration), pinprick, temperature discrimination or the ankle reflex.",
        "**Inability to feel the 10 g monofilament defines loss of protective sensation and identifies the foot at risk of ulceration** - it is the single most important finding of the diabetic foot examination, and it should be recorded in the notes as a yes or no, not as an impression.",
        "**Painful diabetic neuropathy** affects a fifth to a quarter of patients: burning, shooting, stabbing or electric-shock pain, worse at night, with allodynia so that the bedsheet hurts. **Painless neuropathy is more dangerous**, because the insensate foot is the one that ulcerates - so an absence of pain must never be taken as an absence of neuropathy.",
        "**Diabetic autonomic neuropathy** is systematically under-diagnosed: **resting tachycardia and a fixed heart rate**, orthostatic hypotension, **gastroparesis** (early satiety, bloating, erratic postprandial glucose), nocturnal diabetic diarrhoea alternating with constipation, **erectile dysfunction** (often the earliest sign), neurogenic bladder with retention and overflow, gustatory sweating with anhidrosis of the feet, and, most dangerous, **hypoglycaemia unawareness and silent myocardial ischaemia**.",
        "**Other diabetic neuropathies to recognise:** third nerve palsy that **spares the pupil** (a diabetic microvascular infarct, unlike a compressive aneurysm which involves the pupil); **diabetic amyotrophy (proximal diabetic radiculoplexus neuropathy)** with severe asymmetric thigh pain, quadriceps wasting and weight loss in an older type 2 patient, which is self-limiting over months; truncal radiculopathy mimicking herpes zoster or an acute abdomen; and pressure palsies such as carpal tunnel syndrome, which is three times commoner in diabetes.",
        "**Never attribute a neuropathy to diabetes without checking the alternatives.** A patient with diabetes may also be B12 deficient, hypothyroid, alcoholic or have leprosy, and diabetes does not explain a rapidly progressive, asymmetric, predominantly motor or proximal neuropathy.",
      ],
    },
    {
      heading: "Investigation - a small, defensible panel",
      points: [
        "First-line tests in every chronic polyneuropathy: **fasting plasma glucose and HbA1c** (with a 75 g oral glucose tolerance test if these are normal but suspicion is high, since impaired glucose tolerance alone causes small-fibre neuropathy), **serum vitamin B12**, **thyroid stimulating hormone**, complete blood count, renal and liver function, and **erythrocyte sedimentation rate**.",
        "A **low-normal B12 (150-300 pg/mL) does not exclude deficiency**; confirm with **serum methylmalonic acid and homocysteine**, both raised in true deficiency, or simply treat and reassess if the clinical picture fits.",
        "Add according to the clinical setting: **serum protein electrophoresis with immunofixation** in any progressive neuropathy over 50 (monoclonal gammopathy), **HIV serology**, hepatitis B and C serology, slit-skin smear and nerve or skin biopsy where leprosy is suspected, ANA and ANCA in mononeuritis multiplex, and heavy metal levels where the exposure history warrants.",
        "**Nerve conduction studies with electromyography** are not needed for a typical, symmetric, distal, slowly progressive diabetic neuropathy. They are indicated when the neuropathy is **asymmetric, predominantly motor, rapidly progressive, proximal, or has demyelinating features**, when the diagnosis is in doubt, and to confirm a treatable entrapment before surgery.",
        "Nerve conduction studies test only **large myelinated fibres**, so they are normal in pure small-fibre neuropathy - a normal study does not disprove a painful small-fibre neuropathy, which is confirmed if necessary by skin biopsy for intra-epidermal nerve fibre density or quantitative sensory testing.",
        "In suspected **Guillain-Barre syndrome**, cerebrospinal fluid shows **albuminocytological dissociation** - a raised protein with fewer than 10 cells - though this may be absent in the first week; the essential monitoring test is **serial forced vital capacity, not oxygen saturation**, which falls only after the patient is close to arrest.",
        "In suspected **leprous neuritis**, the diagnosis is clinical and bacteriological - an anaesthetic patch, a thickened nerve, or a positive slit-skin smear - and it does not require electrophysiology.",
      ],
    },
    {
      heading: "Treating painful neuropathy and preventing the diabetic foot ulcer",
      points: [
        "**Treat the cause first:** optimise glycaemic control (which clearly prevents neuropathy in type 1 diabetes and slows it modestly in type 2), stop alcohol, replace B12, correct hypothyroidism, withdraw the offending drug, and start multidrug therapy for leprosy. Explain honestly that established nerve damage rarely reverses; the aim is to halt progression and control pain.",
        "**First-line drugs for painful diabetic neuropathy are amitriptyline, duloxetine, pregabalin and gabapentin** - choose by comorbidity, not by any claimed superiority. **Amitriptyline 10-25 mg at night titrated to 50-75 mg** is cheapest and helps sleep, but causes dry mouth, sedation, urinary retention and postural hypotension, and is avoided in cardiac conduction disease, glaucoma and prostatism and used with care over 65.",
        "**Duloxetine 30 mg daily for a week then 60 mg daily** (maximum 120 mg) is first choice when there is coexistent depression; watch for nausea, and avoid in significant hepatic impairment and uncontrolled hypertension. **Pregabalin 75 mg twice daily titrated to 300 mg a day** (maximum 600 mg, reduced in renal impairment) works fast but causes sedation, dizziness, peripheral oedema and weight gain and is liable to misuse. **Gabapentin 300 mg at night titrated over weeks to 1800-3600 mg daily in three divided doses** is the cheaper alternative and needs dose reduction in chronic kidney disease.",
        "Titrate to the **maximum tolerated dose over 4-8 weeks before declaring failure**; a common error is to abandon a drug at a starting dose. If one class fails at full dose, switch class; if the response is partial, combine an antidepressant with a gabapentinoid. Topical **capsaicin 0.075% cream** or a lidocaine 5% patch helps localised allodynia.",
        "**Tramadol and tapentadol are second-line and time-limited; strong opioids should not be used for chronic neuropathic pain** because of tolerance, dependence, hyperalgesia and no benefit at 12 months. Nonsteroidal anti-inflammatory drugs and paracetamol do not work for neuropathic pain.",
        "**The foot examination prevents the amputation.** At least annually - and at every visit in anyone with loss of protective sensation, deformity, callus or previous ulcer - inspect between the toes and under the metatarsal heads, test with the monofilament, palpate the dorsalis pedis and posterior tibial pulses, and check the footwear for foreign bodies and pressure points.",
        "Educate every patient with an insensate foot: **inspect the feet daily with a mirror, never walk barefoot even indoors or in the temple, test bath water with the elbow or a thermometer, avoid hot water bottles and sitting near fires, cut nails straight across, moisturise the skin but not between the toes, and report any blister, crack or colour change the same day**. Callus over a metatarsal head is a pre-ulcer and needs professional debridement and offloading footwear.",
        "A **hot, red, swollen, deformed but relatively painless foot in a neuropathic diabetic patient is Charcot neuroarthropathy until proved otherwise** - it is misdiagnosed as cellulitis or gout, and the treatment is immediate total-contact casting and complete offloading, not antibiotics.",
      ],
    },
    {
      heading: "The neuropathies that must be referred today",
      points: [
        "**Guillain-Barre syndrome:** ascending, symmetric, progressive limb weakness developing over days, with **early global areflexia**, often after a diarrhoeal or respiratory illness, with back pain and distal paraesthesiae but little objective sensory loss. Admit immediately - about a quarter need ventilation.",
        "Monitor the Guillain-Barre patient with the **20/30/40 rule**: intubation should be anticipated when the **forced vital capacity falls below 20 mL/kg, maximum inspiratory pressure is weaker than -30 cmH2O, or maximum expiratory pressure is below 40 cmH2O**. Single-breath counting under 20 at the bedside is a useful proxy. Look also for autonomic instability with arrhythmias and swinging blood pressure.",
        "**Treatment of Guillain-Barre syndrome is intravenous immunoglobulin 0.4 g/kg/day for 5 days or plasma exchange; the two are equally effective and are not combined. Corticosteroids are ineffective and must not be used.** Supportive care - venous thromboembolism prophylaxis, pain control, physiotherapy and pressure care - determines outcome as much as immunotherapy.",
        "**Chronic inflammatory demyelinating polyradiculoneuropathy** is the treatable chronic mimic: progressive or relapsing proximal and distal weakness with areflexia developing over more than 8 weeks. It responds to steroids, immunoglobulin or plasma exchange, so it must not be dismissed as diabetic neuropathy.",
        "**Mononeuritis multiplex** with systemic features - fever, weight loss, rash, purpura, arthritis, haematuria, raised ESR - is a vasculitic neuropathy needing urgent rheumatology or neurology assessment, nerve biopsy and immunosuppression, because untreated it causes irreversible deficits within weeks.",
        "**Leprosy with a type 1 reaction (acute neuritis)** - a nerve that becomes painful, tender and enlarged with new sensory or motor loss - is a neurological emergency: continue multidrug therapy and add **prednisolone 40 mg daily, tapered over 12-24 weeks** with nerve splinting, because a nerve untreated for more than 6 months will not recover.",
        "**A diabetic foot ulcer with surrounding cellulitis, purulence, probe-to-bone, crepitus or systemic sepsis** requires same-day admission, wound cultures, intravenous antibiotics, imaging for osteomyelitis, surgical debridement and vascular assessment.",
      ],
    },
  ],
  tables: [
    {
      heading: "Pattern recognition in peripheral neuropathy",
      columns: ["Pattern", "Typical features", "Leading causes", "First tests"],
      rows: [
        ["Distal symmetric sensory or sensorimotor", "Glove and stocking, burning feet, absent ankle jerks, slowly progressive", "Diabetes, alcohol, B12 deficiency, uraemia, hypothyroidism, drugs, idiopathic", "HbA1c, B12, TSH, renal function, ESR"],
        ["Painful small fibre", "Burning, allodynia, normal reflexes, normal nerve conduction study", "Prediabetes and diabetes, alcohol, HIV, amyloid, Sjogren syndrome", "OGTT, HIV serology, skin biopsy if needed"],
        ["Mononeuropathy", "One named nerve, entrapment site, focal deficit", "Carpal tunnel, ulnar at elbow, peroneal at fibular neck; diabetes predisposes", "Clinical; nerve conduction study before surgery"],
        ["Mononeuritis multiplex", "Painful, asymmetric, stepwise, two or more named nerves", "Leprosy, diabetes, vasculitis, HIV, hepatitis C cryoglobulinaemia", "ESR, ANA, ANCA, slit-skin smear, HIV, nerve biopsy"],
        ["Acute demyelinating, ascending", "Days, symmetric, areflexia, weakness dominant, may involve respiration", "Guillain-Barre syndrome", "CSF for albuminocytological dissociation, serial FVC - admit"],
        ["Chronic demyelinating, proximal and distal", "Over 8 weeks, areflexia, weakness out of proportion to wasting", "CIDP, hereditary neuropathy, paraproteinaemic neuropathy", "Nerve conduction study, serum protein electrophoresis"],
        ["Autonomic predominant", "Postural drop, resting tachycardia, gastroparesis, erectile dysfunction", "Diabetes, amyloidosis, alcohol, HIV", "Lying-standing BP, heart rate variability, gastric emptying"],
      ],
    },
    {
      heading: "Drugs for painful diabetic neuropathy",
      columns: ["Drug", "Starting dose", "Target dose", "Best in", "Main cautions"],
      rows: [
        ["Amitriptyline", "10-25 mg at night", "50-75 mg at night", "Insomnia, low cost, coexisting tension headache", "Anticholinergic effects, postural drop, cardiac conduction disease, glaucoma, prostatism, age over 65"],
        ["Duloxetine", "30 mg once daily", "60 mg daily (max 120 mg)", "Coexisting depression or anxiety", "Nausea, hepatic impairment, uncontrolled hypertension"],
        ["Pregabalin", "75 mg twice daily", "300 mg daily (max 600 mg)", "Rapid onset needed, coexisting anxiety", "Sedation, dizziness, oedema, weight gain, misuse; reduce in renal impairment"],
        ["Gabapentin", "300 mg at night", "1800-3600 mg daily in 3 doses", "Cost-constrained prescribing", "Slow titration, sedation; reduce in chronic kidney disease"],
        ["Capsaicin 0.075% cream", "Apply four times daily", "Continue 6-8 weeks", "Localised allodynia", "Initial burning; wash hands, avoid mucosae"],
        ["Tramadol or tapentadol", "50 mg twice daily", "Short course only", "Rescue while titrating first-line drugs", "Second line only; dependence, serotonin syndrome, seizures"],
      ],
    },
    {
      heading: "Annual diabetic foot screen - what to do and what it means",
      columns: ["Test", "How", "Abnormal result", "Action"],
      rows: [
        ["10 g Semmes-Weinstein monofilament", "Perpendicular to buckling for 1-2 seconds at great toe and 1st, 3rd, 5th metatarsal heads, eyes closed", "Any site not felt", "Loss of protective sensation - foot at risk; intensive education and protective footwear"],
        ["128 Hz tuning fork", "On the dorsum of the interphalangeal joint of the great toe", "Vibration not felt or lost early", "Large-fibre neuropathy - same risk category"],
        ["Ankle reflex", "With reinforcement", "Absent bilaterally", "Supports length-dependent neuropathy"],
        ["Pinprick and temperature", "Compare distal with proximal", "Distal loss", "Small-fibre neuropathy - counsel on burns and hot water"],
        ["Foot pulses", "Dorsalis pedis and posterior tibial; ankle-brachial index if absent", "Absent or index below 0.9", "Peripheral arterial disease - vascular referral"],
        ["Inspection", "Between toes, under metatarsal heads, nails, callus, deformity, footwear", "Callus, fissure, deformity, ulcer", "Callus is a pre-ulcer - debride and offload; ulcer needs same-day assessment"],
      ],
    },
  ],
  redFlags: [
    "Rapidly progressive symmetric weakness over days with areflexia - Guillain-Barre syndrome; admit and monitor forced vital capacity, not oxygen saturation.",
    "Falling forced vital capacity below 20 mL/kg, or single-breath count under 20, or bulbar weakness with a weak cough - impending respiratory failure.",
    "Painful asymmetric stepwise involvement of separate named nerves with fever, weight loss, rash or raised ESR - vasculitic mononeuritis multiplex.",
    "A painful, tender, newly enlarged nerve with fresh motor or sensory loss in a patient with leprosy - a type 1 reaction needing prednisolone the same day.",
    "Weakness that is proximal, or motor loss far exceeding sensory loss, or a sensory level on the trunk - think CIDP, myelopathy or cord compression, not diabetic neuropathy.",
    "A diabetic foot ulcer with cellulitis, purulence, probe-to-bone, crepitus or systemic upset - same-day admission for debridement and intravenous antibiotics.",
    "A hot, swollen, deformed but relatively painless foot in a neuropathic diabetic - Charcot neuroarthropathy needing immediate offloading and total-contact casting.",
    "Autonomic instability with arrhythmias, wide blood pressure swings, urinary retention or ileus complicating an acute neuropathy.",
  ],
  pearls: [
    "Say the four causes out loud in every neuropathy in India: diabetes, alcohol, vitamin B12 deficiency, leprosy. Three are cheap to test and all four are treatable.",
    "Palpate the ulnar nerve at the elbow and the common peroneal at the fibular neck in every neuropathy - a thickened nerve is leprosy until proved otherwise and needs no laboratory.",
    "Absent ankle jerks with brisk knee jerks and extensor plantars is B12 deficiency (subacute combined degeneration) until proved otherwise, and the blood count is often completely normal.",
    "Metformin lowers vitamin B12 - check the level periodically in long-term users, especially vegetarians with neuropathy.",
    "Painless neuropathy is more dangerous than painful neuropathy, because it is the insensate foot that ulcerates and is amputated.",
    "Inability to feel the 10 g monofilament is loss of protective sensation - record it as a yes or no in the notes, because it is the finding that changes management.",
    "Give pyridoxine 10 mg daily with isoniazid routinely and 50 mg daily in the malnourished, alcoholic, diabetic, pregnant or HIV-positive patient - prevention costs almost nothing.",
    "Titrate a neuropathic pain drug to the maximum tolerated dose over 4-8 weeks before calling it a failure; most failures are under-dosing, not the wrong drug.",
    "Steroids do not work in Guillain-Barre syndrome. The treatment is intravenous immunoglobulin or plasma exchange, one or the other, never both.",
  ],
  theory: [
    {
      id: "neurology-peripheral-neuropathy-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "Discuss the clinical features, screening, complications and management of diabetic peripheral neuropathy, including the prevention of the diabetic foot ulcer.",
      openingLines: [
        "Diabetic peripheral neuropathy is the presence of symptoms or signs of peripheral nerve dysfunction in a person with diabetes after other causes have been excluded, and it affects up to half of all patients over the course of the disease.",
        "The commonest form, accounting for about 75% of cases, is a chronic length-dependent distal symmetric sensorimotor polyneuropathy, and its principal consequences are neuropathic pain and the insensate foot that ulcerates and is amputated.",
      ],
      answer: [
        {
          heading: "Classification of diabetic neuropathy",
          points: [
            "Distal symmetric polyneuropathy - the commonest, length-dependent, glove and stocking.",
            "Autonomic neuropathy - cardiovascular, gastrointestinal, genitourinary and sudomotor.",
            "Focal neuropathies - cranial (third nerve palsy sparing the pupil, sixth and seventh nerves) and entrapment (carpal tunnel, ulnar, peroneal).",
            "Diabetic amyotrophy or proximal radiculoplexus neuropathy - asymmetric thigh pain, quadriceps wasting and weight loss in older type 2 patients; self-limiting over months.",
            "Truncal radiculopathy - band-like abdominal or chest wall pain mimicking zoster or an acute abdomen.",
            "Treatment-induced neuropathy of diabetes - acute painful neuropathy following a rapid fall in HbA1c.",
          ],
        },
        {
          heading: "Clinical features",
          points: [
            "Symptoms begin in the toes and ascend; the fingertips are involved only when sensory loss reaches the knees.",
            "Small-fibre symptoms - burning, shooting, stabbing pain, worse at night, allodynia, loss of pinprick and temperature.",
            "Large-fibre symptoms - numbness, deadness, loss of vibration and joint position sense, sensory ataxia and a positive Romberg sign, absent ankle jerks.",
            "Autonomic features - resting tachycardia, postural hypotension, gastroparesis, nocturnal diarrhoea, erectile dysfunction, neurogenic bladder, gustatory sweating with dry feet, hypoglycaemia unawareness and silent myocardial ischaemia.",
            "Motor involvement is late - wasting of the small muscles of the foot, clawing of the toes, high plantar pressures and eventually foot drop.",
          ],
        },
        {
          heading: "Screening and diagnosis",
          points: [
            "Screen at diagnosis in type 2 diabetes, 5 years after diagnosis in type 1 diabetes, and annually thereafter.",
            "Use the 10 g Semmes-Weinstein monofilament at the great toe and the first, third and fifth metatarsal heads, plus at least one of a 128 Hz tuning fork, pinprick, temperature or the ankle reflex.",
            "Inability to feel the 10 g monofilament defines loss of protective sensation and identifies the foot at risk of ulceration.",
            "Exclude other causes before attributing neuropathy to diabetes - measure vitamin B12, thyroid stimulating hormone, renal function and ESR, take an alcohol and drug history, and examine for thickened nerves and anaesthetic patches of leprosy.",
            "Nerve conduction studies are unnecessary in a typical symmetric distal neuropathy and are reserved for atypical, asymmetric, motor-predominant or rapidly progressive cases.",
          ],
        },
        {
          heading: "Management of the neuropathy and its pain",
          points: [
            "Optimise glycaemic control - this clearly prevents neuropathy in type 1 diabetes and slows progression modestly in type 2; avoid a very rapid fall in HbA1c which can precipitate treatment-induced neuropathy.",
            "Address blood pressure, lipids, smoking and alcohol, and correct vitamin B12 deficiency, which is common on long-term metformin.",
            "First-line drugs for pain - amitriptyline 10-75 mg at night, duloxetine 60 mg daily, pregabalin 75 mg twice daily up to 300 mg daily, or gabapentin titrated to 1800-3600 mg daily; choose by comorbidity and titrate to the maximum tolerated dose over 4-8 weeks.",
            "Switch class if one fails at full dose; combine an antidepressant with a gabapentinoid for partial response; add topical capsaicin or lidocaine for localised allodynia.",
            "Tramadol or tapentadol are second-line and short-term; strong opioids are not appropriate for chronic neuropathic pain. NSAIDs and paracetamol are ineffective.",
            "Treat autonomic complications - fludrocortisone, midodrine, compression stockings and slow rising for postural hypotension; small frequent low-fat meals and prokinetics for gastroparesis; phosphodiesterase-5 inhibitors for erectile dysfunction.",
          ],
        },
        {
          heading: "Prevention of the diabetic foot ulcer",
          points: [
            "Annual foot examination for all, and examination at every visit once protective sensation is lost or there is deformity, callus or a previous ulcer.",
            "The examination has four parts - inspection including between the toes, monofilament and vibration testing, palpation of dorsalis pedis and posterior tibial pulses with an ankle-brachial index if absent, and inspection of footwear.",
            "Patient education - daily self-inspection with a mirror, never walking barefoot indoors or in places of worship, testing bath water with the elbow, avoiding hot water bottles, cutting nails straight across, moisturising the skin but not between the toes, and reporting any blister or crack the same day.",
            "Professional debridement of callus, pressure-relieving footwear and custom insoles, and prompt treatment of fungal infection and ingrowing nails.",
            "Recognise Charcot neuroarthropathy - a hot, swollen, deformed but relatively painless foot - and offload it immediately in a total-contact cast.",
            "Refer any ulcer with cellulitis, purulence, probe-to-bone, crepitus, ischaemia or systemic sepsis the same day for debridement, cultures and intravenous antibiotics.",
          ],
        },
      ],
      mustDraw: [
        "A diagram of the foot marking the four monofilament testing sites - great toe and first, third and fifth metatarsal heads.",
        "A table of first-line drugs for painful diabetic neuropathy with starting dose, target dose and main caution.",
      ],
      markSplit: [
        { part: "Definition and classification of diabetic neuropathy", marks: 2 },
        { part: "Clinical features including autonomic", marks: 2 },
        { part: "Screening schedule and the monofilament examination", marks: 2 },
        { part: "Management of pain and of the neuropathy", marks: 2 },
        { part: "Foot care and prevention of ulceration", marks: 2 },
      ],
      keywords: ["diabetic peripheral neuropathy", "monofilament", "loss of protective sensation", "pregabalin", "duloxetine", "diabetic foot", "Charcot"],
    },
    {
      id: "neurology-peripheral-neuropathy-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Enumerate the causes of peripheral neuropathy relevant to Indian practice and outline the clinical approach and initial investigation of a patient with numb, burning feet.",
      openingLines: [
        "Peripheral neuropathy is dysfunction of peripheral nerves producing sensory loss, pain, weakness or autonomic disturbance, most often in a length-dependent glove-and-stocking distribution.",
        "In India the four causes to exclude first are diabetes, alcohol, vitamin B12 deficiency and leprosy, since all are common and all are treatable.",
      ],
      answer: [
        {
          heading: "Causes",
          points: [
            "Metabolic and endocrine - diabetes mellitus and prediabetes, hypothyroidism, chronic kidney disease, chronic liver disease.",
            "Nutritional and toxic - vitamin B12, thiamine, pyridoxine and folate deficiency, alcohol, chronic arsenic exposure.",
            "Infective - leprosy (the commonest treatable neuropathy worldwide, with India carrying over half the global burden), HIV, hepatitis C with cryoglobulinaemia, diphtheria.",
            "Drug induced - isoniazid, metronidazole, phenytoin, dapsone, nitrofurantoin, linezolid, vincristine, cisplatin, taxanes, thalidomide, amiodarone, stavudine.",
            "Inflammatory and immune - Guillain-Barre syndrome, CIDP, vasculitis, connective tissue disease, sarcoidosis.",
            "Neoplastic and paraproteinaemic - monoclonal gammopathy, amyloidosis, paraneoplastic neuropathy.",
            "Hereditary - Charcot-Marie-Tooth disease with pes cavus, hammer toes and a family history.",
            "Idiopathic in about 20-25% of chronic axonal neuropathies.",
          ],
        },
        {
          heading: "Clinical approach",
          points: [
            "Define the pattern - fibres involved, distribution, time course, and axonal versus demyelinating.",
            "History - onset and progression, pain character, alcohol, diet and vegetarianism, drugs including anti-tuberculosis treatment, family history, occupational and water exposure.",
            "Examination - pinprick, temperature, vibration with a 128 Hz fork, joint position, reflexes, power, wasting, gait and Romberg sign.",
            "Palpate the peripheral nerves - ulnar at the elbow, common peroneal at the fibular neck, posterior tibial behind the medial malleolus, greater auricular - and search the skin for hypopigmented anaesthetic patches.",
            "Examine the feet for ulcers, callus, deformity and pulses, and record a lying and standing blood pressure to detect autonomic involvement.",
          ],
        },
        {
          heading: "Initial investigations",
          points: [
            "Fasting plasma glucose and HbA1c, with an oral glucose tolerance test if normal and suspicion persists.",
            "Serum vitamin B12, with methylmalonic acid and homocysteine if the level is low-normal.",
            "Thyroid stimulating hormone, complete blood count, renal and liver function, ESR.",
            "Serum protein electrophoresis with immunofixation in progressive neuropathy over 50; HIV and hepatitis serology where indicated.",
            "Slit-skin smear and nerve or skin biopsy where leprosy is suspected.",
            "Nerve conduction studies only if the neuropathy is asymmetric, motor-predominant, proximal, rapidly progressive or demyelinating in character.",
          ],
        },
      ],
      mustDraw: [
        "A table classifying causes as metabolic, nutritional, toxic, infective, immune, hereditary and idiopathic.",
        "A diagram marking the sites where peripheral nerves are palpated for thickening in leprosy.",
      ],
      markSplit: [
        { part: "Enumeration of causes", marks: 2 },
        { part: "Clinical approach and pattern recognition", marks: 1.5 },
        { part: "Investigations", marks: 1.5 },
      ],
      keywords: ["peripheral neuropathy", "leprosy", "vitamin B12", "alcohol", "nerve thickening", "nerve conduction study"],
    },
  ],
  mcqs: [
    {
      id: "neurology-peripheral-neuropathy-q1",
      stem: "A 52-year-old strict vegetarian on metformin for 9 years complains of numb, tingling feet and unsteadiness in the dark. Ankle jerks are absent, knee jerks are brisk, plantars are extensor, vibration is lost to the knees and Romberg sign is positive. Haemoglobin is 13.4 g/dL and mean corpuscular volume is 88 fL. What is the most likely diagnosis?",
      options: [
        "Diabetic distal symmetric polyneuropathy",
        "Vitamin B12 deficiency with subacute combined degeneration",
        "Chronic inflammatory demyelinating polyradiculoneuropathy",
        "Lumbar canal stenosis",
        "Alcoholic peripheral neuropathy",
      ],
      answer: 1,
      explanation:
        "The combination of absent ankle jerks with brisk knee jerks and extensor plantars is the signature of a simultaneous peripheral neuropathy and corticospinal-plus-dorsal-column myelopathy, that is subacute combined degeneration of the cord from vitamin B12 deficiency, made far more likely by strict vegetarianism and by nine years of metformin, which impairs B12 absorption. A normal haemoglobin and normal mean corpuscular volume are common in B12 deficiency and do not exclude it, since neurological disease often precedes anaemia. Pure diabetic neuropathy causes absent ankle jerks but not brisk knee jerks or extensor plantars. CIDP causes global areflexia with weakness out of proportion to sensory loss, not upper motor neurone signs. Lumbar canal stenosis produces exertional neurogenic claudication with normal fixed signs, and there is no alcohol history.",
      difficulty: "moderate",
    },
    {
      id: "neurology-peripheral-neuropathy-q2",
      stem: "A 60-year-old man with type 2 diabetes of 12 years has burning pain in both feet, worse at night, disturbing sleep. He is depressed, has stable angina and takes ramipril and metformin. HbA1c is 7.4%. Renal function is normal. Examination shows absent ankle jerks and loss of the 10 g monofilament at all four sites. Which is the most appropriate first-line drug?",
      options: [
        "Amitriptyline 25 mg at night",
        "Duloxetine 30 mg daily increased to 60 mg after a week",
        "Diclofenac 50 mg twice daily",
        "Tramadol 50 mg twice daily",
        "Vitamin B complex injections weekly",
      ],
      answer: 1,
      explanation:
        "Duloxetine is a first-line agent for painful diabetic neuropathy and is the best choice here because it treats the coexisting depression at the same time, and it carries no cardiac conduction risk. Amitriptyline is also first line and cheaper but is relatively contraindicated by ischaemic heart disease and its anticholinergic and postural effects in a 60-year-old. NSAIDs such as diclofenac do not work for neuropathic pain and add cardiovascular and renal risk in a diabetic on an ACE inhibitor. Tramadol is a second-line agent to be used briefly, not as the initial choice. Vitamin B complex has no role unless a specific deficiency is documented, and this man has loss of protective sensation, so the other essential action is foot protection and education, not another injection.",
      difficulty: "moderate",
    },
    {
      id: "neurology-peripheral-neuropathy-q3",
      stem: "A 28-year-old man has a 4-month history of a numb patch on the right forearm and weakness of grip. There is a well-defined hypopigmented anaesthetic patch over the right forearm, a thickened non-tender right ulnar nerve at the elbow, and wasting of the right first dorsal interosseous with clawing of the ring and little fingers. Sensation is normal elsewhere. What is the diagnosis?",
      options: [
        "Cervical radiculopathy at C8",
        "Leprosy with ulnar mononeuropathy",
        "Ulnar entrapment at Guyon canal",
        "Diabetic mononeuropathy",
        "Vitamin B12 deficiency",
      ],
      answer: 1,
      explanation:
        "A hypopigmented anaesthetic skin patch together with a palpably thickened peripheral nerve supplying that region is diagnostic of leprosy, which remains the commonest treatable neuropathy worldwide with India carrying over half the global burden, and it is confirmed by slit-skin smear or nerve or skin biopsy and treated with WHO multidrug therapy. C8 radiculopathy causes neck and arm pain in a dermatomal distribution without a hypopigmented anaesthetic patch or a thickened nerve. Entrapment at Guyon canal spares the dorsal ulnar cutaneous territory and never produces a skin patch or nerve thickening. A diabetic mononeuropathy would not cause an anaesthetic hypopigmented patch, and there is no diabetes here. B12 deficiency causes a symmetric length-dependent neuropathy with cord signs, not a single thickened nerve.",
      difficulty: "easy",
    },
    {
      id: "neurology-peripheral-neuropathy-q4",
      stem: "A 34-year-old woman develops tingling in the feet followed over 4 days by symmetric weakness ascending from the legs to the thighs, so that she can no longer climb stairs. All deep tendon reflexes are absent. There is no sensory level and no bladder involvement. She had gastroenteritis three weeks ago. Which is the most important bedside measurement to repeat every few hours?",
      options: [
        "Pulse oximetry",
        "Forced vital capacity",
        "Arterial blood gas",
        "Peak expiratory flow rate",
        "Respiratory rate alone",
      ],
      answer: 1,
      explanation:
        "This is Guillain-Barre syndrome, and the danger is neuromuscular respiratory failure, which is anticipated by serial forced vital capacity - intubation is planned when it falls below 20 mL/kg, with maximum inspiratory pressure weaker than -30 cmH2O and maximum expiratory pressure below 40 cmH2O completing the 20/30/40 rule. Pulse oximetry and arterial blood gases are dangerously reassuring because both stay normal until the patient is close to respiratory arrest, since the problem is bellows failure rather than gas exchange. Peak expiratory flow measures airflow obstruction and is not a validated measure of neuromuscular strength. Respiratory rate alone rises only late. Treatment is intravenous immunoglobulin 0.4 g/kg/day for 5 days or plasma exchange, and steroids are ineffective.",
      difficulty: "moderate",
    },
    {
      id: "neurology-peripheral-neuropathy-q5",
      stem: "A 58-year-old woman with type 2 diabetes and known neuropathy presents with a right foot that has been hot, swollen and red for two weeks. It aches only mildly. There is no ulcer or break in the skin, no fever, and the temperature of the foot is 3 degrees Celsius higher than the left. White cell count and C-reactive protein are normal. Pedal pulses are bounding. What is the most likely diagnosis and immediate management?",
      options: [
        "Cellulitis - oral amoxicillin-clavulanate and review in 48 hours",
        "Acute gout - colchicine and a short course of NSAIDs",
        "Deep vein thrombosis - Doppler ultrasound and anticoagulation",
        "Charcot neuroarthropathy - immediate total-contact casting and complete offloading",
        "Osteomyelitis - MRI and six weeks of intravenous antibiotics",
      ],
      answer: 3,
      explanation:
        "A hot, red, swollen but relatively painless foot with bounding pulses in a neuropathic diabetic patient, with intact skin and normal inflammatory markers, is Charcot neuroarthropathy, and the treatment that preserves the foot is immediate and complete offloading in a total-contact cast, since continued weight bearing destroys the arch and produces a rocker-bottom deformity that ulcerates. Cellulitis requires a portal of entry and usually raises the white cell count and C-reactive protein, and treating Charcot as cellulitis while the patient keeps walking is the classic error. Gout is exquisitely painful and usually monoarticular at the first metatarsophalangeal joint. Deep vein thrombosis causes calf rather than forefoot swelling and does not raise skin temperature by this margin. Osteomyelitis in the diabetic foot almost always follows an ulcer, and the skin here is intact.",
      difficulty: "hard",
    },
  ],
  cards: [
    {
      id: "neurology-peripheral-neuropathy-c1",
      front: "The four causes of peripheral neuropathy to exclude first in India.",
      back: "Diabetes mellitus, alcohol, vitamin B12 deficiency and leprosy - all common, all treatable, three of them tested with cheap blood tests and the fourth by palpating nerves.",
    },
    {
      id: "neurology-peripheral-neuropathy-c2",
      front: "When and how is diabetic peripheral neuropathy screened for?",
      back: "At diagnosis in type 2 diabetes, 5 years after diagnosis in type 1, then annually. Use a 10 g monofilament at the great toe and 1st, 3rd and 5th metatarsal heads, plus one of a 128 Hz tuning fork, pinprick, temperature or the ankle reflex.",
    },
    {
      id: "neurology-peripheral-neuropathy-c3",
      front: "What does inability to feel the 10 g monofilament mean?",
      back: "Loss of protective sensation - the foot is at risk of ulceration. It is the single most important finding of the diabetic foot examination and must be recorded as a yes or no.",
    },
    {
      id: "neurology-peripheral-neuropathy-c4",
      front: "First-line drugs for painful diabetic neuropathy with target doses.",
      back: "Amitriptyline 10-75 mg at night; duloxetine 60 mg daily; pregabalin 75 mg BD to 300 mg daily (max 600); gabapentin to 1800-3600 mg daily in 3 doses. Titrate to maximum tolerated over 4-8 weeks before declaring failure.",
    },
    {
      id: "neurology-peripheral-neuropathy-c5",
      front: "Absent ankle jerks with brisk knee jerks and extensor plantars - diagnosis?",
      back: "Vitamin B12 deficiency with subacute combined degeneration. Haemoglobin and mean corpuscular volume are often normal; confirm with methylmalonic acid and homocysteine if B12 is low-normal.",
    },
    {
      id: "neurology-peripheral-neuropathy-c6",
      front: "Which nerves are palpated for thickening in suspected leprosy?",
      back: "Ulnar at the elbow, common peroneal at the fibular neck, posterior tibial behind the medial malleolus, greater auricular in the neck, and the radial cutaneous at the wrist.",
    },
    {
      id: "neurology-peripheral-neuropathy-c7",
      front: "Pyridoxine dose to prevent isoniazid neuropathy.",
      back: "10 mg daily routinely with anti-tuberculosis treatment, and 50 mg daily in the malnourished, alcoholic, diabetic, pregnant, uraemic or HIV-positive patient.",
    },
    {
      id: "neurology-peripheral-neuropathy-c8",
      front: "The 20/30/40 rule in Guillain-Barre syndrome.",
      back: "Anticipate intubation when forced vital capacity falls below 20 mL/kg, maximum inspiratory pressure is weaker than -30 cmH2O, or maximum expiratory pressure is below 40 cmH2O. Oxygen saturation stays normal until near arrest.",
    },
    {
      id: "neurology-peripheral-neuropathy-c9",
      front: "Treatment of Guillain-Barre syndrome.",
      back: "Intravenous immunoglobulin 0.4 g/kg/day for 5 days OR plasma exchange - equally effective, never combined. Corticosteroids are ineffective and must not be used.",
    },
    {
      id: "neurology-peripheral-neuropathy-c10",
      front: "Hot, swollen, deformed but relatively painless foot in a neuropathic diabetic.",
      back: "Charcot neuroarthropathy. Treat with immediate total-contact casting and complete offloading, not antibiotics; misdiagnosis as cellulitis destroys the foot.",
    },
  ],
  references: [
    "American Diabetes Association Standards of Care in Diabetes, 2024 - Retinopathy, Neuropathy and Foot Care",
    "Pop-Busui R et al., Diabetic Neuropathy: A Position Statement by the American Diabetes Association, Diabetes Care 2017",
    "NICE Clinical Guideline CG173, Neuropathic pain in adults: pharmacological management in non-specialist settings, updated 2020",
    "IWGDF Guidelines on the prevention and management of diabetes-related foot disease, 2023",
    "WHO Guidelines for the Diagnosis, Treatment and Prevention of Leprosy, 2018",
    "RSSDI Clinical Practice Recommendations for the Management of Type 2 Diabetes Mellitus in India, 2022",
    "API Textbook of Medicine, 11th edition, 2019 - peripheral neuropathy",
  ],
});

topics.push({
  id: "neurology-cns-infection",
  title: "Central nervous system infection - bacterial meningitis, tuberculous meningitis and neurocysticercosis",
  oneLiner:
    "Central nervous system infection in Indian practice has three faces the family physician must be able to separate on the first visit - acute bacterial meningitis, where the first dose of ceftriaxone with dexamethasone within the first hour decides survival; tuberculous meningitis, which creeps in over two to three weeks with fever, headache and cranial nerve palsies and needs twelve months of anti-tuberculosis treatment with adjunctive steroids started on clinical suspicion alone; and neurocysticercosis, the commonest cause of new-onset seizures in the country, which is treated with albendazole under steroid cover, or with no antiparasitic drug at all if the lesion is calcified.",
  frequency: "common",
  keywords: [
    "bacterial meningitis",
    "ceftriaxone",
    "dexamethasone",
    "lumbar puncture",
    "cerebrospinal fluid",
    "tuberculous meningitis",
    "TBM",
    "ATT",
    "HRZE",
    "CBNAAT",
    "Xpert MTB/RIF Ultra",
    "neurocysticercosis",
    "albendazole",
    "praziquantel",
    "solitary cysticercus granuloma",
    "hydrocephalus",
    "encephalitis",
    "herpes simplex",
    "acyclovir",
    "cryptococcal meningitis",
    "meningococcal prophylaxis",
  ],
  sections: [
    {
      heading: "Recognising CNS infection and the first hour",
      points: [
        "The classic triad of **fever, neck stiffness and altered mental state is present in fewer than half of adults with bacterial meningitis**, but **at least two of fever, headache, neck stiffness and altered sensorium are present in about 95%** - so the absence of the full triad must never be used to exclude the diagnosis.",
        "**Kernig and Brudzinski signs are specific but very insensitive (around 5-30%)** and a negative sign proves nothing; **jolt accentuation of headache** (worsening on rotating the head horizontally twice a second) is more sensitive but also unreliable. Neck stiffness may be absent in the very young, the very old, the deeply comatose and the immunosuppressed.",
        "**Time to the first antibiotic dose is the strongest modifiable determinant of death and disability in bacterial meningitis. Give the first dose within one hour of the patient arriving, and never delay it for a CT scan, for the lumbar puncture, or for transfer.** Take blood cultures first if that takes less than a few minutes, otherwise treat and culture afterwards.",
        "In a primary care or rural setting where a lumbar puncture cannot be performed, **give ceftriaxone 2 g intravenously (or intramuscularly if no line is available) and dexamethasone, then transfer** - the yield of blood cultures and cerebrospinal fluid polymerase chain reaction and CBNAAT survives several hours of antibiotic.",
        "**A purpuric or petechial non-blanching rash with fever means meningococcaemia**: give the first dose of parenteral antibiotic immediately, expect shock and disseminated intravascular coagulation, and isolate with droplet precautions for the first 24 hours.",
        "Separate meningitis from **encephalitis**, where the brain parenchyma itself is inflamed: **altered behaviour, confusion, personality change, seizures and focal deficits dominate over meningism**. Any patient with fever and altered behaviour or seizures should receive **intravenous acyclovir 10 mg/kg every 8 hours empirically** for possible herpes simplex encephalitis while investigations proceed, because delay beyond 48 hours multiplies mortality.",
        "In India also think of **Japanese encephalitis** (rural, monsoon and post-monsoon, eastern Uttar Pradesh, Bihar, Assam, with acute parkinsonism and a movement disorder), **cerebral malaria** (do a rapid diagnostic test and peripheral smear in any febrile encephalopathy from an endemic area), **scrub typhus meningoencephalitis** (look for an eschar; treat with doxycycline), **dengue and enteric encephalopathy**, and **rabies** in an unvaccinated patient with hydrophobia and aerophobia.",
      ],
    },
    {
      heading: "Lumbar puncture, when to image first, and reading the CSF",
      points: [
        "**Perform CT of the head before lumbar puncture only if there is one of: immunocompromise, a known central nervous system lesion, a new-onset seizure within the last week, papilloedema, an abnormal level of consciousness, or a focal neurological deficit.** In everyone else, tap first. **In every case, antibiotics come before the scan.**",
        "The lumbar puncture is done at the **L3-L4 or L4-L5 interspace**, below the conus, with the patient in the left lateral position with hips and knees flexed, under full aseptic precautions. **Measure and record the opening pressure** - it is free information that is almost always omitted and is essential in tuberculous, cryptococcal and idiopathic intracranial hypertension.",
        "Send cerebrospinal fluid for **cell count with differential, protein, glucose with a simultaneous blood glucose, Gram stain and bacterial culture; add India ink and cryptococcal antigen, CBNAAT (Xpert MTB/RIF Ultra), adenosine deaminase, acid-fast bacilli smear and mycobacterial culture, and herpes simplex polymerase chain reaction** according to the clinical picture. Collect enough - a tuberculous tap needs at least 5-10 mL for reasonable sensitivity.",
        "**Bacterial pattern:** turbid fluid, high opening pressure, **cells in the hundreds to thousands with over 80% neutrophils**, protein above 1 g/L (100 mg/dL), and a **CSF-to-blood glucose ratio below 0.4** with an absolute CSF glucose usually under 40 mg/dL. Gram stain is positive in 60-90% before antibiotics.",
        "**Tuberculous pattern:** clear or slightly opalescent fluid that may form a cobweb (pellicle) on standing, high opening pressure, **cells 100-500 with a lymphocyte predominance** (though neutrophils may dominate in the first days), **markedly raised protein, often 1-5 g/L and occasionally higher when there is spinal block**, and **low glucose with a ratio below 0.5**.",
        "**Viral pattern:** clear fluid, **cells usually under 500 and lymphocytic**, mildly raised protein and a **normal glucose** - the normal glucose is the single most useful discriminator from bacterial and tuberculous meningitis.",
        "**Cryptococcal pattern:** in an HIV-positive or otherwise immunosuppressed patient, a **very high opening pressure with surprisingly few cells**, moderately raised protein and low glucose; **India ink shows the encapsulated yeast and cryptococcal antigen in blood or CSF is over 95% sensitive**. Raised pressure is managed with repeated therapeutic lumbar punctures, not with steroids or acetazolamide.",
        "**Contraindications to lumbar puncture:** signs of raised intracranial pressure with a mass effect, a posterior fossa lesion or obstructive hydrocephalus on imaging, coagulopathy or a platelet count below 50,000, and skin sepsis at the puncture site.",
      ],
    },
    {
      heading: "Acute bacterial meningitis - empirical treatment",
      points: [
        "In Indian adults the commonest organisms are **Streptococcus pneumoniae and Neisseria meningitidis**, with **Listeria monocytogenes** added over 50 years and in the immunosuppressed, pregnant, diabetic or alcoholic, and **Gram-negative bacilli and Staphylococcus aureus** after neurosurgery, head injury or a cerebrospinal fluid leak. Haemophilus influenzae type b has fallen sharply since the pentavalent vaccine entered the Universal Immunisation Programme.",
        "**Standard empirical regimen for a community-acquired adult: ceftriaxone 2 g intravenously every 12 hours (or cefotaxime 2 g every 4-6 hours) plus vancomycin 15-20 mg/kg intravenously every 8-12 hours** to cover cephalosporin-resistant pneumococci, given in a meningeal dose - half doses do not cross the blood-brain barrier.",
        "**Add ampicillin 2 g intravenously every 4 hours if the patient is over 50, pregnant, immunosuppressed, alcoholic or debilitated**, to cover Listeria, which is intrinsically resistant to all cephalosporins. Cotrimoxazole is the alternative in penicillin allergy.",
        "**Dexamethasone 0.15 mg/kg intravenously every 6 hours for 4 days, with the first dose given 15-20 minutes before or together with the first dose of antibiotic**, reduces death and hearing loss in pneumococcal meningitis. **It is of no proven benefit and should be stopped if the organism turns out not to be pneumococcus**, and it should not be started for the first time after antibiotics have already been given.",
        "**Duration of treatment by organism: Neisseria meningitidis and Haemophilus influenzae 7 days; Streptococcus pneumoniae 10-14 days; Listeria monocytogenes at least 21 days (with gentamicin added for the first week); aerobic Gram-negative bacilli 21 days; Streptococcus agalactiae 14-21 days.**",
        "Supportive care decides much of the outcome: nurse with the **head end elevated to 30 degrees**, maintain euvolaemia rather than fluid restriction, control fever and seizures, treat hyponatraemia (both syndrome of inappropriate antidiuresis and cerebral salt wasting occur), monitor for subdural effusion or empyema, cerebral venous sinus thrombosis, hydrocephalus and cerebral oedema, and **arrange audiometry before discharge in every survivor**, especially in children.",
        "**Chemoprophylaxis for close contacts is required only for meningococcal (and Haemophilus influenzae type b) disease**, and is given to household members, those sharing sleeping arrangements, and anyone with direct exposure to respiratory secretions such as mouth-to-mouth resuscitation. Use **rifampicin 600 mg orally twice daily for 2 days (10 mg/kg twice daily in children over 1 month, 5 mg/kg twice daily under 1 month), or ciprofloxacin 500 mg orally as a single dose, or ceftriaxone 250 mg intramuscularly as a single dose (125 mg in children under 12, and the drug of choice in pregnancy)**. Contacts of pneumococcal meningitis need no prophylaxis.",
      ],
    },
    {
      heading: "Tuberculous meningitis - diagnosis, staging and the ATT protocol",
      points: [
        "**Tuberculous meningitis is the commonest cause of chronic meningitis in India** and carries the highest mortality and disability of any form of tuberculosis. The presentation is **subacute over 2-3 weeks**: a prodrome of low-grade fever, malaise, anorexia, weight loss and personality change, followed by headache, vomiting, meningism, cranial nerve palsies and finally altered consciousness.",
        "The three features that point to tuberculosis rather than pyogenic meningitis are the **long prodrome, the cranial nerve palsies (the sixth nerve most often, then the third and seventh, from basal exudate) and the disproportionately high cerebrospinal fluid protein with a low glucose and a lymphocytic pleocytosis**. **Hydrocephalus, usually communicating, and basal ganglia infarcts from vasculitis are the two complications that kill and disable.**",
        "**British Medical Research Council staging drives prognosis and steroid dosing: Stage I - conscious, no focal deficit; Stage II - conscious but with meningism plus a focal deficit or cranial nerve palsy, or Glasgow Coma Scale 11-14; Stage III - stuporous or comatose with Glasgow Coma Scale 10 or below, or dense hemiplegia.** Mortality rises from under 10% in Stage I to over 50% in Stage III, which is why treatment must not wait for confirmation.",
        "Investigation: **CBNAAT (Xpert MTB/RIF Ultra) on a large-volume cerebrospinal fluid sample is the recommended first test** and also gives rifampicin resistance, but its sensitivity is only about 60-70%, so **a negative CBNAAT never excludes tuberculous meningitis**. Send acid-fast bacilli smear and mycobacterial culture, adenosine deaminase, and take a **contrast MRI of the brain looking for basal meningeal enhancement, hydrocephalus, infarcts and tuberculomas**, plus a chest radiograph, sputum and an HIV test in every case.",
        "**The anti-tuberculosis regimen for CNS tuberculosis is 12 months in total: an intensive phase of 2 months of isoniazid, rifampicin, pyrazinamide and ethambutol (2HRZE), followed by a continuation phase of 10 months. The Indian National Tuberculosis Elimination Programme uses isoniazid, rifampicin and ethambutol in the continuation phase (10HRE), while WHO permits isoniazid and rifampicin alone (10HR); both give a total of 12 months.** Drugs are given daily in weight-band fixed-dose combinations, never intermittently, in CNS disease.",
        "Adult daily doses are **isoniazid 5 mg/kg (up to 300 mg), rifampicin 10 mg/kg (450 mg under 50 kg, 600 mg at 50 kg and above), pyrazinamide 25 mg/kg and ethambutol 15 mg/kg**. **Give pyridoxine 10 mg daily throughout to prevent isoniazid neuropathy.** Isoniazid and pyrazinamide penetrate the inflamed meninges well; **ethambutol and streptomycin penetrate poorly**, which is why some units substitute levofloxacin or use higher-dose rifampicin in severe disease.",
        "**Adjunctive corticosteroids reduce mortality in tuberculous meningitis at every stage and must be given to all patients.** The standard is **dexamethasone 0.4 mg/kg/day intravenously for Stage II and III disease (0.3 mg/kg/day for Stage I), reduced by about a quarter of the original dose each week and switched to oral, tapering over a total of 6-8 weeks**. An equivalent widely used alternative is **prednisolone 1-2 mg/kg/day (maximum 60 mg) for 4 weeks, then tapered over the following 4 weeks**.",
        "**Monitor for the complications rather than waiting for them:** serial fundoscopy and consciousness for hydrocephalus (which may need a ventriculoperitoneal shunt or an external ventricular drain), monthly liver function for drug-induced hepatitis, monthly visual acuity and colour vision on ethambutol, and a **paradoxical reaction** - clinical or radiological worsening at 4-8 weeks despite good adherence - which is treated by continuing the regimen and increasing steroids, not by changing drugs. Screen for HIV, and if positive start antiretroviral therapy after **4-8 weeks of anti-tuberculosis treatment**, not immediately, because early initiation increases severe adverse events in tuberculous meningitis.",
      ],
    },
    {
      heading: "Neurocysticercosis - the commonest cause of new-onset seizures in India",
      points: [
        "Neurocysticercosis is infection of the central nervous system by the **larval stage of Taenia solium**, acquired by ingesting the eggs in food or water contaminated by human faeces - **so a strict vegetarian can and often does get neurocysticercosis; eating pork is not required**, and this misconception must be corrected explicitly with families.",
        "**It causes about a third to a half of all new-onset focal seizures in Indian adults and children**, and the commonest single radiological form in India is the **solitary cysticercus granuloma** - a small ring- or disc-enhancing lesion with surrounding oedema, usually at the grey-white junction, presenting with a single focal seizure with or without secondary generalisation in an otherwise well person.",
        "**Staging by imaging determines treatment**, and MRI is far superior to CT for cysts and for the scolex, while **CT is better for detecting calcification**. The stages are **vesicular** (viable, a thin-walled cyst with an eccentric scolex, no oedema, no enhancement), **colloidal vesicular** (dying, ring-enhancing with oedema - the symptomatic stage), **granular nodular** (involuting), and **calcified** (dead).",
        "**Before giving any antiparasitic drug, do a dilated fundoscopy to exclude intraocular cysticercosis, and exclude hydrocephalus on imaging.** Killing an intraocular cyst can blind the eye, and killing cysts in the presence of untreated hydrocephalus can be fatal - **the shunt goes in first**.",
        "**Antiparasitic regimen for viable parenchymal cysts: albendazole 15 mg/kg/day (maximum 1200 mg/day) orally in two divided doses with a fatty meal, for 10-14 days.** For **more than two viable parenchymal cysts, add praziquantel 50 mg/kg/day in three divided doses for the same 10-14 days**, which clears cysts better than albendazole alone. For a **single enhancing lesion or solitary cysticercus granuloma, albendazole 15 mg/kg/day for 7-14 days** is sufficient.",
        "**Corticosteroids must be started before and continued through the antiparasitic course**, because the dying cysts provoke an inflammatory storm with cerebral oedema and seizures. Give **prednisolone 1 mg/kg/day orally (or dexamethasone 0.1 mg/kg/day) beginning 1-3 days before albendazole and continued throughout the 10-14 days, then tapered**. Steroids also raise albendazole levels and lower praziquantel levels, which is one reason albendazole is the preferred backbone.",
        "**Calcified lesions must never be given antiparasitic treatment** - the parasite is dead, there is nothing to kill, and the drug only causes harm; these patients need antiseizure medication alone. **Cysticercal encephalitis** - a heavy infection with diffuse oedema and raised intracranial pressure - is likewise an **absolute contraindication to antiparasitic drugs**, and is managed with high-dose steroids and mannitol until the oedema settles.",
        "**Extraparenchymal disease is a different and far more serious illness. Subarachnoid or racemose neurocysticercosis needs prolonged albendazole for at least 28 days and often repeated or continuous courses over months, with high-dose corticosteroids and specialist supervision; intraventricular cysts are best removed neuroendoscopically**, with shunting for hydrocephalus.",
        "**Antiseizure medication is the treatment that actually controls the presenting problem.** A single agent - phenytoin, carbamazepine, levetiracetam or sodium valproate - is usually sufficient, and it is continued until the lesion has resolved or calcified on repeat imaging **and the patient has been seizure-free for at least 6 months to 2 years**; risk of recurrence is highest with calcified lesions and persistent perilesional oedema.",
        "Prevention is public health: **hand washing, safe drinking water, washing raw vegetables, sanitation and latrine use, treating human taeniasis carriers (a single dose of praziquantel 5-10 mg/kg or niclosamide) and inspecting pork**. A household member with taeniasis is the source, so screen and treat the family.",
      ],
    },
    {
      heading: "The other CNS infections and what prevents them",
      points: [
        "**Herpes simplex encephalitis** presents with fever, headache, confusion, personality or behavioural change, dysphasia and seizures, with a temporal lobe focus on MRI and on electroencephalography. **Start intravenous acyclovir 10 mg/kg 8-hourly for 14-21 days empirically on suspicion**, before the polymerase chain reaction result returns, and maintain hydration to protect the kidneys. Untreated mortality exceeds 70%.",
        "**Cryptococcal meningitis** in advanced HIV is treated with **induction using amphotericin B (liposomal 3-4 mg/kg/day preferred, or deoxycholate 0.7-1 mg/kg/day) plus flucytosine 100 mg/kg/day for 2 weeks, then consolidation with fluconazole 800 mg daily for 8 weeks, then secondary prophylaxis with fluconazole 200 mg daily** until immune reconstitution. **Repeated therapeutic lumbar punctures to control raised intracranial pressure save more lives than any change in antifungal**, and antiretroviral therapy is deferred for 4-6 weeks to avoid immune reconstitution inflammatory syndrome.",
        "**Brain abscess** presents with the triad of fever, headache and a focal deficit, often with papilloedema and without meningism; it follows otitis media, sinusitis, dental sepsis, cyanotic congenital heart disease or penetrating trauma. Contrast imaging shows a ring lesion with a thin, smooth, uniform enhancing wall; treatment is **aspiration or excision plus prolonged intravenous antibiotics (typically ceftriaxone with metronidazole, adding vancomycin where staphylococci are likely) for 6-8 weeks**. **Lumbar puncture is contraindicated.**",
        "The commonest **ring-enhancing lesions on Indian imaging** are the tuberculoma, the cysticercus granuloma, pyogenic abscess, and in HIV, toxoplasmosis and primary central nervous system lymphoma - the size, wall thickness, scolex, perilesional oedema and clinical setting distinguish them, and a **solitary small ring lesion with a scolex in a well patient with one seizure is a cysticercus granuloma**.",
        "**Vaccination is the intervention with the largest effect:** Haemophilus influenzae type b as part of the pentavalent vaccine and the pneumococcal conjugate vaccine are both in the Universal Immunisation Programme; meningococcal vaccine is required for Hajj and Umrah pilgrims and used in outbreaks; Japanese encephalitis vaccine is given in endemic districts; rabies pre- and post-exposure prophylaxis; and BCG at birth reduces disseminated tuberculosis and tuberculous meningitis in children.",
        "**Notify and act on the public health dimension**: tuberculosis is a notifiable disease in India and household contacts must be screened and offered tuberculosis preventive treatment; meningococcal disease requires contact prophylaxis and notification; neurocysticercosis points to a taeniasis carrier and a sanitation problem in the household.",
      ],
    },
  ],
  tables: [
    {
      heading: "Cerebrospinal fluid patterns",
      columns: ["Parameter", "Normal", "Bacterial", "Tuberculous", "Viral", "Cryptococcal"],
      rows: [
        ["Appearance", "Clear, colourless", "Turbid, purulent", "Clear or opalescent, cobweb on standing", "Clear", "Clear"],
        ["Opening pressure (cm H2O)", "10-20", "Raised, often over 30", "Raised", "Normal or mildly raised", "Very high, often over 30"],
        ["Cells per microlitre", "Under 5", "1000-5000", "100-500", "50-500", "Few, often under 50"],
        ["Predominant cell", "Lymphocytes", "Neutrophils, over 80%", "Lymphocytes (neutrophils early)", "Lymphocytes", "Lymphocytes"],
        ["Protein (mg/dL)", "15-45", "Over 100", "100-500, may exceed 1000 with spinal block", "50-100", "50-200"],
        ["CSF to blood glucose ratio", "0.6", "Under 0.4", "Under 0.5", "Normal, over 0.6", "Low"],
        ["Confirmatory test", "-", "Gram stain and culture", "CBNAAT (Xpert Ultra), AFB culture, ADA", "PCR for HSV and enterovirus", "India ink, cryptococcal antigen"],
      ],
    },
    {
      heading: "Empirical antibiotics and steroid in acute bacterial meningitis",
      columns: ["Situation", "Regimen", "Notes"],
      rows: [
        ["Adult, community acquired", "Ceftriaxone 2 g IV 12-hourly plus vancomycin 15-20 mg/kg IV 8-12 hourly", "Meningeal doses; cefotaxime 2 g 4-6 hourly is equivalent"],
        ["Age over 50, pregnant, immunosuppressed, alcoholic", "Add ampicillin 2 g IV 4-hourly", "Covers Listeria, which is resistant to all cephalosporins"],
        ["Post-neurosurgical, head injury or CSF shunt", "Vancomycin plus ceftazidime or meropenem", "Covers staphylococci and Pseudomonas"],
        ["Adjunctive steroid", "Dexamethasone 0.15 mg/kg IV 6-hourly for 4 days", "First dose 15-20 minutes before or with the first antibiotic; stop if not pneumococcal"],
        ["Duration - meningococcus or H. influenzae", "7 days", "Droplet isolation for the first 24 hours in meningococcal disease"],
        ["Duration - pneumococcus", "10-14 days", "Audiometry before discharge"],
        ["Duration - Listeria", "At least 21 days", "Add gentamicin for the first week"],
        ["Duration - Gram-negative bacilli", "21 days", "Guided by culture and sensitivity"],
        ["Contact prophylaxis (meningococcus only)", "Rifampicin 600 mg BD for 2 days, or ciprofloxacin 500 mg single dose, or ceftriaxone 250 mg IM single dose", "Ceftriaxone is the choice in pregnancy; no prophylaxis for pneumococcal contacts"],
      ],
    },
    {
      heading: "Anti-tuberculosis treatment and steroids in tuberculous meningitis",
      columns: ["Component", "Detail"],
      rows: [
        ["Total duration", "12 months for CNS tuberculosis"],
        ["Intensive phase", "2 months of isoniazid, rifampicin, pyrazinamide and ethambutol (2HRZE), daily"],
        ["Continuation phase", "10 months - HRE under the Indian NTEP, or HR under WHO guidance; daily, never intermittent"],
        ["Adult daily doses", "Isoniazid 5 mg/kg (max 300 mg); rifampicin 10 mg/kg (450 mg under 50 kg, 600 mg at 50 kg and above); pyrazinamide 25 mg/kg; ethambutol 15 mg/kg"],
        ["Pyridoxine", "10 mg daily throughout to prevent isoniazid neuropathy"],
        ["Steroid - stage II and III", "Dexamethasone 0.4 mg/kg/day IV, reduced weekly and switched to oral, tapering over 6-8 weeks in total"],
        ["Steroid - stage I", "Dexamethasone 0.3 mg/kg/day, tapered over about 6 weeks"],
        ["Steroid alternative", "Prednisolone 1-2 mg/kg/day (max 60 mg) for 4 weeks, then tapered over 4 weeks"],
        ["HIV co-infection", "Start antiretroviral therapy after 4-8 weeks of ATT, not immediately"],
        ["Monitoring", "Monthly liver function; visual acuity and colour vision on ethambutol; watch for hydrocephalus and paradoxical reaction at 4-8 weeks"],
      ],
    },
    {
      heading: "Neurocysticercosis - treatment by lesion type",
      columns: ["Lesion type", "Antiparasitic", "Steroid", "Other"],
      rows: [
        ["Solitary cysticercus granuloma (single enhancing lesion)", "Albendazole 15 mg/kg/day in 2 divided doses for 7-14 days", "Prednisolone 1 mg/kg/day started 1-3 days before and continued through the course, then tapered", "Antiseizure drug; repeat imaging at 6 months"],
        ["1-2 viable parenchymal cysts", "Albendazole 15 mg/kg/day (max 1200 mg/day) for 10-14 days", "Same steroid cover", "Fundoscopy first to exclude ocular cysts"],
        ["More than 2 viable parenchymal cysts", "Albendazole 15 mg/kg/day PLUS praziquantel 50 mg/kg/day, both for 10-14 days", "Same steroid cover", "Better cyst clearance than albendazole alone"],
        ["Calcified lesions only", "None - the parasite is dead", "Not indicated routinely", "Antiseizure medication alone"],
        ["Cysticercal encephalitis (heavy infection, diffuse oedema)", "Contraindicated", "High-dose corticosteroids", "Mannitol, intensive care; defer any antiparasitic"],
        ["Subarachnoid or racemose", "Albendazole for at least 28 days, often repeated or prolonged over months", "High-dose corticosteroids throughout", "Specialist care; shunt for hydrocephalus"],
        ["Intraventricular", "Generally after removal, not before", "As required", "Neuroendoscopic removal is the treatment of choice"],
        ["Any case with hydrocephalus", "Only after cerebrospinal fluid diversion", "Yes", "Shunt or external ventricular drain first"],
      ],
    },
  ],
  redFlags: [
    "Fever with headache and any alteration of consciousness or behaviour - give the first dose of antibiotic within one hour and do not wait for imaging or the lumbar puncture.",
    "A non-blanching petechial or purpuric rash with fever - meningococcaemia; parenteral antibiotic immediately and anticipate shock and disseminated intravascular coagulation.",
    "Focal neurological deficit, new seizure, papilloedema, immunocompromise or a depressed conscious level - CT the head before the lumbar puncture, but after the antibiotic.",
    "Progressive drowsiness, vomiting, a widening pulse pressure with bradycardia, or a new sixth nerve palsy in tuberculous meningitis - hydrocephalus or raised intracranial pressure needing urgent neurosurgical referral.",
    "Deteriorating vision or a very high opening pressure in cryptococcal meningitis - repeat therapeutic lumbar punctures the same day.",
    "Fever, headache and a focal deficit without meningism - suspect brain abscess; image first and do not perform a lumbar puncture.",
    "A patient with neurocysticercosis and hydrocephalus, intraocular cysts, or diffuse cerebral oedema - albendazole is dangerous until the shunt is in and the eye is cleared.",
    "Clinical or radiological worsening at 4-8 weeks of anti-tuberculosis treatment despite good adherence - a paradoxical reaction, treated with more steroid, not a change of drugs.",
  ],
  pearls: [
    "The classic triad is present in fewer than half of bacterial meningitis cases, but two of fever, headache, neck stiffness and altered sensorium are present in about 95%.",
    "Antibiotic first, then imaging, then the tap. Every hour of delay to the first dose of ceftriaxone costs lives, and cerebrospinal fluid PCR and CBNAAT survive several hours of treatment.",
    "Dexamethasone in bacterial meningitis works only if it is given with or just before the first antibiotic dose - starting it later is pointless.",
    "A normal cerebrospinal fluid glucose is the most useful single pointer to a viral rather than a bacterial or tuberculous meningitis.",
    "A negative CBNAAT on cerebrospinal fluid does not exclude tuberculous meningitis - sensitivity is only about 60-70%, so treat on clinical and imaging grounds and do not wait.",
    "CNS tuberculosis is 12 months of treatment - 2HRZE followed by 10 months of continuation therapy - and every patient gets adjunctive dexamethasone, which reduces mortality at all stages.",
    "Vegetarians get neurocysticercosis. The infection comes from swallowing eggs shed in human faeces, not from eating pork, and saying so aloud prevents a great deal of family conflict.",
    "Never give albendazole for calcified lesions, in cysticercal encephalitis, or before excluding intraocular cysts and relieving hydrocephalus.",
    "Steroids go in before the albendazole, not after - the dying cyst is what causes the seizure and the oedema.",
    "Fever with altered behaviour or seizures gets empirical intravenous acyclovir while you investigate; delay beyond 48 hours in herpes simplex encephalitis multiplies mortality.",
  ],
  theory: [
    {
      id: "neurology-cns-infection-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "A 32-year-old man presents with fever, headache and vomiting of 18 days with a left sixth nerve palsy and drowsiness. Discuss the diagnosis, investigation and complete management of tuberculous meningitis.",
      openingLines: [
        "Tuberculous meningitis is a granulomatous inflammation of the meninges caused by Mycobacterium tuberculosis, characteristically involving the basal meninges and producing exudate, hydrocephalus and vasculitic infarction.",
        "It is the commonest cause of chronic meningitis in India, carries the highest mortality and disability of any form of tuberculosis, and treatment must be started on clinical suspicion because delay, not diagnostic uncertainty, is what kills.",
      ],
      answer: [
        {
          heading: "Clinical features and staging",
          points: [
            "A subacute course over 2-3 weeks: prodrome of low-grade fever, malaise, anorexia, weight loss, night sweats and personality change.",
            "Meningitic phase with headache, vomiting, neck stiffness and photophobia; then cranial nerve palsies, most often the sixth, then the third and seventh, from basal exudate.",
            "Paralytic phase with altered sensorium, hemiparesis from vasculitic infarction of the basal ganglia and internal capsule, seizures and coma.",
            "British Medical Research Council staging - Stage I conscious with no deficit; Stage II conscious with meningism plus a cranial nerve palsy or focal deficit, or Glasgow Coma Scale 11-14; Stage III stuporous or comatose with Glasgow Coma Scale 10 or below or dense hemiplegia.",
            "Mortality is under 10% in Stage I and over 50% in Stage III, which is the argument for treating on suspicion.",
          ],
        },
        {
          heading: "Investigation",
          points: [
            "Lumbar puncture after imaging in this drowsy patient with a focal sign - record the opening pressure and send at least 5-10 mL.",
            "Cerebrospinal fluid shows a clear or opalescent fluid that may form a cobweb, 100-500 cells with lymphocyte predominance, protein markedly raised at 100-500 mg/dL, and glucose low with a ratio below 0.5.",
            "CBNAAT (Xpert MTB/RIF Ultra) on cerebrospinal fluid is the first-line confirmatory test and also detects rifampicin resistance, but sensitivity is only 60-70% - a negative result does not exclude the diagnosis.",
            "Also send acid-fast bacilli smear, mycobacterial culture and adenosine deaminase.",
            "Contrast MRI of the brain for basal meningeal enhancement, hydrocephalus, infarcts and tuberculomas; CT if MRI is unavailable.",
            "Chest radiograph, sputum for CBNAAT, Mantoux test where relevant, HIV testing in every case, and baseline liver and renal function, blood counts and sodium.",
          ],
        },
        {
          heading: "Anti-tuberculosis treatment",
          points: [
            "Total duration of treatment for CNS tuberculosis is 12 months.",
            "Intensive phase - 2 months of isoniazid, rifampicin, pyrazinamide and ethambutol (2HRZE), given daily in weight-band fixed-dose combinations.",
            "Continuation phase - 10 months, using isoniazid, rifampicin and ethambutol under the Indian National Tuberculosis Elimination Programme, or isoniazid and rifampicin under WHO guidance.",
            "Adult daily doses - isoniazid 5 mg/kg up to 300 mg, rifampicin 10 mg/kg (450 mg under 50 kg, 600 mg at 50 kg and above), pyrazinamide 25 mg/kg, ethambutol 15 mg/kg.",
            "Pyridoxine 10 mg daily throughout to prevent isoniazid-induced peripheral neuropathy.",
            "Treatment is daily, never intermittent, in CNS tuberculosis; ethambutol and streptomycin penetrate the meninges poorly, and levofloxacin is sometimes substituted in severe disease.",
          ],
        },
        {
          heading: "Adjunctive corticosteroids and supportive care",
          points: [
            "Corticosteroids reduce mortality at every stage and are given to all patients.",
            "Dexamethasone 0.4 mg/kg/day intravenously for Stage II and III (0.3 mg/kg/day for Stage I), reduced weekly, switched to oral and tapered over 6-8 weeks in total.",
            "An equivalent alternative is prednisolone 1-2 mg/kg/day to a maximum of 60 mg for 4 weeks, then tapered over 4 weeks.",
            "Nurse with the head elevated to 30 degrees; treat seizures; correct hyponatraemia from inappropriate antidiuresis or cerebral salt wasting; maintain nutrition and prevent pressure sores and aspiration.",
            "Hydrocephalus, usually communicating, is the commonest treatable complication - it needs serial assessment, medical treatment with acetazolamide and furosemide in mild cases, and ventriculoperitoneal shunting or an external ventricular drain when consciousness deteriorates.",
          ],
        },
        {
          heading: "Monitoring, HIV and public health",
          points: [
            "Monthly liver function tests for drug-induced hepatitis; stop all drugs if transaminases exceed five times normal, or three times normal with symptoms or jaundice, and reintroduce sequentially.",
            "Monthly visual acuity and colour vision while on ethambutol.",
            "Recognise the paradoxical reaction at 4-8 weeks - clinical or radiological worsening despite adherence - and treat by increasing steroids and continuing the same regimen.",
            "If HIV positive, start antiretroviral therapy after 4-8 weeks of anti-tuberculosis treatment rather than immediately, because early initiation increases severe adverse events in tuberculous meningitis.",
            "Notify the case, register under the National Tuberculosis Elimination Programme, ensure treatment support and adherence, screen household contacts and offer tuberculosis preventive treatment where indicated.",
          ],
        },
      ],
      mustDraw: [
        "A table of the anti-tuberculosis regimen showing intensive and continuation phases with drugs, doses and durations.",
        "A table of cerebrospinal fluid findings in tuberculous, bacterial and viral meningitis.",
      ],
      markSplit: [
        { part: "Clinical features and BMRC staging", marks: 2 },
        { part: "Cerebrospinal fluid and imaging findings, CBNAAT", marks: 2 },
        { part: "The 12-month ATT regimen with doses", marks: 3 },
        { part: "Adjunctive steroids with dose and taper", marks: 2 },
        { part: "Complications, monitoring and public health", marks: 1 },
      ],
      keywords: ["tuberculous meningitis", "BMRC staging", "CBNAAT", "HRZE", "dexamethasone", "hydrocephalus", "paradoxical reaction"],
    },
    {
      id: "neurology-cns-infection-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write a short note on neurocysticercosis - its presentation, radiological staging and management, including the albendazole and steroid regimens.",
      openingLines: [
        "Neurocysticercosis is infection of the central nervous system by the larval stage of Taenia solium, acquired by ingesting eggs passed in human faeces, so it occurs in vegetarians as readily as in pork eaters.",
        "It is the commonest cause of new-onset focal seizures in India, accounting for a third to a half of cases, and the commonest form in this country is the solitary cysticercus granuloma.",
      ],
      answer: [
        {
          heading: "Clinical presentation",
          points: [
            "Seizures in about 70-80% - typically a single focal seizure with or without secondary generalisation in an otherwise well person.",
            "Headache and features of raised intracranial pressure when there is hydrocephalus or a heavy cyst burden.",
            "Focal neurological deficits, and rarely a stroke from cysticercal arteritis.",
            "Cysticercal encephalitis in heavy infection - diffuse oedema, seizures and depressed consciousness, mostly in children and young women.",
            "Extraparenchymal disease - subarachnoid or racemose and intraventricular forms - which causes hydrocephalus and carries a much worse prognosis.",
          ],
        },
        {
          heading: "Radiological staging",
          points: [
            "Vesicular - a viable thin-walled cyst with an eccentric scolex, no enhancement and no oedema.",
            "Colloidal vesicular - the dying cyst, ring-enhancing with surrounding oedema; this is the symptomatic stage.",
            "Granular nodular - involuting, a smaller nodular enhancing lesion.",
            "Calcified - the dead parasite, best seen on CT.",
            "MRI is superior for cysts, the scolex and extraparenchymal disease; CT is superior for calcification.",
          ],
        },
        {
          heading: "Management",
          points: [
            "Before any antiparasitic drug - dilated fundoscopy to exclude intraocular cysticercosis, and imaging to exclude hydrocephalus, which must be shunted first.",
            "Solitary cysticercus granuloma - albendazole 15 mg/kg/day in two divided doses for 7-14 days.",
            "One or two viable parenchymal cysts - albendazole 15 mg/kg/day, maximum 1200 mg/day, for 10-14 days.",
            "More than two viable parenchymal cysts - albendazole 15 mg/kg/day plus praziquantel 50 mg/kg/day, both for 10-14 days.",
            "Corticosteroids - prednisolone 1 mg/kg/day, or dexamethasone 0.1 mg/kg/day, started 1-3 days before albendazole, continued through the course and then tapered.",
            "Antiseizure medication as a single agent, continued until the lesion resolves or calcifies on repeat imaging and the patient has been seizure-free for 6 months to 2 years.",
            "Subarachnoid or racemose disease - albendazole for at least 28 days, often prolonged or repeated, with high-dose steroids under specialist care; intraventricular cysts are removed neuroendoscopically.",
          ],
        },
        {
          heading: "When antiparasitic treatment must not be given, and prevention",
          points: [
            "Calcified lesions - the parasite is dead; give antiseizure medication only.",
            "Cysticercal encephalitis with diffuse oedema - treat with high-dose steroids and mannitol; antiparasitic drugs are contraindicated.",
            "Untreated hydrocephalus or intraocular cysts - relieve the pressure and clear the eye first.",
            "Prevention - hand washing, safe water, washing raw vegetables, sanitation and latrine use, meat inspection, and identifying and treating the household taeniasis carrier with praziquantel or niclosamide.",
          ],
        },
      ],
      mustDraw: [
        "A table of the four radiological stages with the appearance and whether antiparasitic treatment is indicated.",
        "A flow chart: seizure with a ring lesion, then fundoscopy and check for hydrocephalus, then albendazole with steroid cover, or antiseizure drug alone if calcified.",
      ],
      markSplit: [
        { part: "Definition and mode of transmission", marks: 1 },
        { part: "Clinical presentation", marks: 1 },
        { part: "Radiological staging", marks: 1 },
        { part: "Albendazole and steroid regimens", marks: 1.5 },
        { part: "Contraindications and prevention", marks: 0.5 },
      ],
      keywords: ["neurocysticercosis", "Taenia solium", "albendazole", "praziquantel", "solitary cysticercus granuloma", "calcified lesion"],
    },
  ],
  mcqs: [
    {
      id: "neurology-cns-infection-q1",
      stem: "A 27-year-old man is brought with 12 hours of fever, severe headache, vomiting and drowsiness. He has neck stiffness, a Glasgow Coma Scale of 13 and no focal deficit or papilloedema. Blood cultures are drawn at 10 minutes. The CT scanner is busy and will be free in 90 minutes. What should be done next?",
      options: [
        "Wait for the CT scan, then lumbar puncture, then antibiotics",
        "Give ceftriaxone 2 g IV with vancomycin and dexamethasone now, then proceed to imaging and lumbar puncture",
        "Perform lumbar puncture immediately without imaging and withhold antibiotics until the Gram stain result",
        "Start oral amoxicillin and observe for six hours",
        "Give dexamethasone alone and defer antibiotics until the cerebrospinal fluid result",
      ],
      answer: 1,
      explanation:
        "Time to the first antibiotic dose is the strongest modifiable determinant of death and disability in bacterial meningitis, so ceftriaxone with vancomycin must be given within the hour, and dexamethasone 0.15 mg/kg is given with or just before that first dose because it only works when timed this way. Waiting 90 minutes for a scanner would be a lethal delay, and in any case a lumbar puncture before imaging would be acceptable here since he has no focal deficit, no papilloedema, no new seizure and no immunosuppression - but the antibiotic still comes first. Withholding antibiotics for a Gram stain result gains nothing because cerebrospinal fluid PCR and culture yields survive several hours of treatment. Oral amoxicillin cannot achieve meningeal concentrations, and dexamethasone without an antibiotic treats nothing.",
      difficulty: "easy",
    },
    {
      id: "neurology-cns-infection-q2",
      stem: "A 30-year-old woman has had fever, headache and vomiting for 20 days with a right sixth nerve palsy and a Glasgow Coma Scale of 13. Cerebrospinal fluid shows 240 cells with 85% lymphocytes, protein 280 mg/dL, glucose 32 mg/dL with a blood glucose of 96 mg/dL. CBNAAT on cerebrospinal fluid is negative. What is the correct management?",
      options: [
        "Withhold treatment and repeat the CBNAAT in one week",
        "Start 2HRZE followed by 10 months of continuation therapy, with dexamethasone 0.4 mg/kg/day tapered over 6-8 weeks",
        "Start ceftriaxone and vancomycin for partially treated pyogenic meningitis",
        "Start 2HRZE followed by 4 months of HRE, without steroids",
        "Start acyclovir 10 mg/kg 8-hourly for presumed herpes encephalitis",
      ],
      answer: 1,
      explanation:
        "A three-week prodrome, a cranial nerve palsy, a lymphocytic pleocytosis, a markedly raised protein and a cerebrospinal fluid to blood glucose ratio of 0.33 make this BMRC Stage II tuberculous meningitis, and CBNAAT has a sensitivity of only 60-70% on cerebrospinal fluid so a negative result cannot exclude it. CNS tuberculosis is treated for 12 months in total - 2 months of HRZE then 10 months of continuation therapy - and every patient receives adjunctive dexamethasone, 0.4 mg/kg/day for Stage II and III disease tapered over 6-8 weeks, which reduces mortality at all stages. Waiting a week in Stage II disease risks progression to Stage III, where mortality exceeds 50%. The 6-month regimen with 4 months of continuation therapy is for pulmonary tuberculosis and is inadequate for the CNS, and omitting steroids discards a proven survival benefit. The glucose is far too low and the course far too long for herpes encephalitis or for a pyogenic meningitis.",
      difficulty: "hard",
    },
    {
      id: "neurology-cns-infection-q3",
      stem: "A 19-year-old vegetarian college student has a single focal seizure with secondary generalisation. He is neurologically normal afterwards. Contrast MRI shows one 12 mm ring-enhancing lesion at the right grey-white junction with a small eccentric scolex and mild perilesional oedema. There is no hydrocephalus and fundoscopy is normal. What is the correct treatment?",
      options: [
        "Antiseizure medication alone, since single lesions resolve spontaneously",
        "Albendazole 15 mg/kg/day for 7-14 days with prednisolone started 1-3 days earlier, plus an antiseizure drug",
        "Albendazole 15 mg/kg/day plus praziquantel 50 mg/kg/day for 14 days with steroids",
        "Anti-tuberculosis treatment for a presumed tuberculoma",
        "Craniotomy and excision biopsy of the lesion",
      ],
      answer: 1,
      explanation:
        "A small ring-enhancing lesion with a visible eccentric scolex at the grey-white junction in a well young person presenting with a single seizure is a solitary cysticercus granuloma, the commonest form of neurocysticercosis in India, and vegetarianism is irrelevant because the infection comes from swallowing Taenia solium eggs shed in human faeces rather than from eating pork. The correct treatment is albendazole 15 mg/kg/day in two divided doses for 7-14 days with corticosteroid cover started one to three days before the albendazole to blunt the inflammatory response to the dying cyst, together with a single antiseizure drug. Antiseizure medication alone forgoes faster radiological resolution and better seizure control. Combination albendazole with praziquantel is reserved for more than two viable parenchymal cysts. A tuberculoma is usually larger with a thicker irregular wall and no scolex, and biopsy is unnecessary when the imaging is this characteristic.",
      difficulty: "moderate",
    },
    {
      id: "neurology-cns-infection-q4",
      stem: "A 24-year-old woman with well-controlled epilepsy has a CT showing three small calcified lesions in the cerebral hemispheres, consistent with old neurocysticercosis. She has had no seizure for eight months on levetiracetam. Which is the correct management?",
      options: [
        "Albendazole 15 mg/kg/day for 14 days with steroid cover",
        "Albendazole plus praziquantel for 14 days",
        "Continue the antiseizure medication alone; no antiparasitic treatment",
        "A 28-day course of albendazole because there are three lesions",
        "Praziquantel 50 mg/kg/day alone for 14 days",
      ],
      answer: 2,
      explanation:
        "Calcification means the parasite is already dead, so there is nothing for an antiparasitic drug to kill, and giving albendazole only exposes her to hepatotoxicity, marrow suppression and the risk of provoking perilesional inflammation and further seizures. Management of calcified neurocysticercosis is antiseizure medication alone, continued until she has been seizure-free for a defined period, with the knowledge that calcified lesions carry the highest risk of seizure recurrence. Albendazole with or without praziquantel, and the prolonged 28-day course, are regimens for viable parenchymal and subarachnoid disease respectively. Praziquantel alone is not a recommended single agent for parenchymal neurocysticercosis and shares all the same objections here.",
      difficulty: "moderate",
    },
    {
      id: "neurology-cns-infection-q5",
      stem: "A 61-year-old diabetic man with confirmed pneumococcal meningitis has been on ceftriaxone and vancomycin for four days and is improving. His wife, two adult children and a neighbour who visited daily ask about preventive treatment for themselves. What is the correct advice?",
      options: [
        "Rifampicin 600 mg twice daily for two days for all household contacts",
        "Ciprofloxacin 500 mg single dose for all close contacts",
        "Ceftriaxone 250 mg intramuscularly for the household contacts only",
        "No chemoprophylaxis is required for contacts of pneumococcal meningitis",
        "Pneumococcal conjugate vaccine given today acts as chemoprophylaxis",
      ],
      answer: 3,
      explanation:
        "Chemoprophylaxis for contacts is indicated only after meningococcal disease and after Haemophilus influenzae type b disease in specific household settings; Streptococcus pneumoniae is not transmitted in a way that makes contact prophylaxis useful, so none of the antibiotic options is appropriate. Rifampicin 600 mg twice daily for two days, ciprofloxacin 500 mg as a single dose and ceftriaxone 250 mg intramuscularly are all correct meningococcal regimens but are being applied to the wrong organism here. Pneumococcal conjugate or polysaccharide vaccination is worth discussing for the patient himself and for eligible contacts as routine preventive care, but a vaccine given today provides no immediate post-exposure protection and is not chemoprophylaxis. The correct action is reassurance and an explanation of why prophylaxis differs between the two organisms.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "neurology-cns-infection-c1",
      front: "Empirical antibiotics for community-acquired bacterial meningitis in an adult.",
      back: "Ceftriaxone 2 g IV 12-hourly plus vancomycin 15-20 mg/kg IV 8-12 hourly; add ampicillin 2 g IV 4-hourly if over 50, pregnant, immunosuppressed or alcoholic, to cover Listeria.",
    },
    {
      id: "neurology-cns-infection-c2",
      front: "Dexamethasone in bacterial meningitis - dose and timing.",
      back: "0.15 mg/kg IV every 6 hours for 4 days, first dose 15-20 minutes before or with the first antibiotic dose. Stop it if the organism is not pneumococcus; do not start it late.",
    },
    {
      id: "neurology-cns-infection-c3",
      front: "When must CT precede lumbar puncture?",
      back: "Immunocompromise, known CNS lesion, new seizure within a week, papilloedema, altered consciousness, or focal deficit. Antibiotics are given before the scan in every case.",
    },
    {
      id: "neurology-cns-infection-c4",
      front: "The ATT regimen for CNS tuberculosis.",
      back: "12 months total - 2 months HRZE intensive phase, then 10 months continuation (HRE under the Indian NTEP, HR under WHO). Daily, never intermittent, with pyridoxine 10 mg daily.",
    },
    {
      id: "neurology-cns-infection-c5",
      front: "Steroid regimen in tuberculous meningitis.",
      back: "Dexamethasone 0.4 mg/kg/day IV for BMRC Stage II and III (0.3 mg/kg/day for Stage I), reduced weekly and switched to oral, tapering over 6-8 weeks. Alternative: prednisolone 1-2 mg/kg/day (max 60 mg) for 4 weeks then taper over 4 weeks.",
    },
    {
      id: "neurology-cns-infection-c6",
      front: "BMRC staging of tuberculous meningitis.",
      back: "Stage I - conscious, no deficit. Stage II - conscious with meningism plus cranial nerve palsy or focal deficit, or GCS 11-14. Stage III - stuporous or comatose, GCS 10 or below, or dense hemiplegia.",
    },
    {
      id: "neurology-cns-infection-c7",
      front: "Albendazole regimen for viable parenchymal neurocysticercosis.",
      back: "Albendazole 15 mg/kg/day (max 1200 mg/day) in two divided doses for 10-14 days; for more than two viable cysts add praziquantel 50 mg/kg/day for the same period. Solitary granuloma: albendazole 15 mg/kg/day for 7-14 days.",
    },
    {
      id: "neurology-cns-infection-c8",
      front: "Steroid cover for neurocysticercosis treatment.",
      back: "Prednisolone 1 mg/kg/day (or dexamethasone 0.1 mg/kg/day) started 1-3 days BEFORE albendazole, continued throughout the course, then tapered - the dying cyst causes the oedema and seizures.",
    },
    {
      id: "neurology-cns-infection-c9",
      front: "When is antiparasitic treatment contraindicated in neurocysticercosis?",
      back: "Calcified lesions (parasite already dead), cysticercal encephalitis with diffuse oedema, untreated hydrocephalus (shunt first), and untreated intraocular cysticercosis (fundoscopy first).",
    },
    {
      id: "neurology-cns-infection-c10",
      front: "Meningococcal contact chemoprophylaxis regimens.",
      back: "Rifampicin 600 mg BD for 2 days, or ciprofloxacin 500 mg single dose, or ceftriaxone 250 mg IM single dose (drug of choice in pregnancy). No prophylaxis for pneumococcal contacts.",
    },
    {
      id: "neurology-cns-infection-c11",
      front: "Empirical treatment of suspected herpes simplex encephalitis.",
      back: "Intravenous acyclovir 10 mg/kg every 8 hours for 14-21 days, started on suspicion before the PCR result; untreated mortality exceeds 70% and delay beyond 48 hours multiplies it.",
    },
    {
      id: "neurology-cns-infection-c12",
      front: "How is neurocysticercosis acquired, and why does it matter?",
      back: "By ingesting Taenia solium eggs shed in human faeces, through contaminated food, water or hands - not by eating pork. Vegetarians get it, and the household taeniasis carrier is the source and must be treated.",
    },
  ],
  references: [
    "IDSA Practice Guidelines for the Management of Bacterial Meningitis, Clinical Infectious Diseases (with ESCMID 2016 update)",
    "WHO Consolidated Guidelines on Tuberculosis, Module 4: Treatment - Drug-susceptible tuberculosis treatment, 2022",
    "India National Tuberculosis Elimination Programme, Technical and Operational Guidelines for TB Control in India, 2021 - extrapulmonary and CNS tuberculosis",
    "Thwaites GE et al., Dexamethasone for the treatment of tuberculous meningitis in adolescents and adults, NEJM 2004",
    "White AC Jr et al., Diagnosis and Treatment of Neurocysticercosis: 2017 IDSA and ASTMH Clinical Practice Guidelines, Clinical Infectious Diseases 2018",
    "Garcia HH et al., Efficacy of combined antiparasitic therapy with praziquantel and albendazole for neurocysticercosis, Lancet Infectious Diseases 2014",
    "Indian Academy of Neurology consensus guidelines on the diagnosis and management of neurocysticercosis, 2021",
    "API Textbook of Medicine, 11th edition, 2019 - CNS infections",
  ],
});

topics.push({
  id: "neurology-bell-palsy",
  title: "Bell palsy and the facial nerve",
  oneLiner:
    "An acute unilateral facial weakness is a lower motor neurone palsy - and therefore Bell palsy until proved otherwise - only when the forehead is involved and the eye cannot be closed on that side; forehead sparing means an upper motor neurone lesion and an acute stroke pathway, while vesicles, bilateral weakness, ear discharge, a parotid mass or a slowly progressive course all mean it is not Bell palsy.",
  frequency: "common",
  keywords: [
    "Bell palsy",
    "facial nerve",
    "seventh cranial nerve",
    "lower motor neurone facial palsy",
    "House-Brackmann grading",
    "Ramsay Hunt syndrome",
    "herpes zoster oticus",
    "prednisolone",
    "valacyclovir",
    "acyclovir",
    "lagophthalmos",
    "Bell phenomenon",
    "exposure keratopathy",
    "synkinesis",
    "crocodile tears",
    "chorda tympani",
    "hyperacusis",
    "stapedius",
    "leprosy",
    "parotid tumour",
    "electroneuronography",
  ],
  sections: [
    {
      heading: "Anatomy that earns marks, and the first decision",
      points: [
        "The facial nerve leaves the pons, crosses the cerebellopontine angle with the eighth nerve, enters the internal acoustic meatus, turns at the geniculate ganglion, runs through the facial canal in the petrous temporal bone and exits at the **stylomastoid foramen** to divide within the parotid gland into temporal, zygomatic, buccal, marginal mandibular and cervical branches.",
        "Four branches given off before the nerve leaves the skull localise the lesion: the **greater petrosal nerve** (lacrimation), the **nerve to stapedius** (hyperacusis), the **chorda tympani** (taste from the anterior two-thirds of the tongue and secretion from the submandibular and sublingual glands), and then the motor supply to all the muscles of facial expression.",
        "**The single decision that must be made in the first minute is upper motor neurone versus lower motor neurone.** The forehead has bilateral cortical representation, so a supranuclear (upper motor neurone) lesion spares the frontalis - the patient can still wrinkle the brow and close the eye - whereas a nuclear or infranuclear (lower motor neurone) lesion paralyses the whole hemiface including the forehead.",
        "Forehead sparing with a lower facial droop, especially with any arm drift, dysarthria or sensory change, is an **acute stroke until proved otherwise** and belongs in the stroke pathway with an immediate non-contrast CT head and thrombolysis assessment, not in a Bell palsy consultation.",
        "In a true lower motor neurone palsy look for **lagophthalmos** (incomplete eye closure) and the **Bell phenomenon** - the eyeball rolling up and out on attempted closure, which is a normal protective reflex made visible by the palsy and is not itself a sign of disease.",
        "Emotional and volitional facial movement travel by different pathways, so a patient with a cortical lesion may have an obvious droop on command but a symmetrical spontaneous smile; the reverse dissociation points to an extrapyramidal lesion.",
      ],
    },
    {
      heading: "Bell palsy: making the diagnosis",
      points: [
        "**Bell palsy is an acute, idiopathic, unilateral lower motor neurone facial palsy that reaches its maximum severity within 72 hours**, and it is a diagnosis of exclusion made clinically - there is no confirmatory test required in a typical case.",
        "It accounts for **about 60-75% of all acute unilateral facial palsies**, with an annual incidence of 20-30 per 100,000, no sex predilection, and peaks in the third to fifth decades; risk is roughly threefold in pregnancy (especially the third trimester and the first week postpartum), diabetes and hypertension.",
        "The prevailing mechanism is reactivation of latent **herpes simplex virus type 1** in the geniculate ganglion causing inflammatory oedema of the nerve within the unyielding bony facial canal, and therefore a compressive demyelinating or axonal injury.",
        "The typical story is a patient who wakes with a drooping face, dribbling from the corner of the mouth, food collecting in the cheek, an eye that waters and will not close, and often a preceding day or two of **retroauricular or mastoid pain**, altered taste and hyperacusis - all of which are consistent with Bell palsy and do not indicate a sinister cause.",
        "Examination must include the **whole ear and the palate** - otoscopy for vesicles and for a discharging or cholesteatomatous ear, the external canal and concha for zoster vesicles, the tympanic membrane, the parotid for a mass, the neck for nodes, and the other cranial nerves - and every case needs a documented **grading of severity** at the first visit.",
        "**Grade the palsy with the House-Brackmann scale (I to VI) at every visit**; it is the outcome measure used in every trial, it dictates how urgently the eye needs protecting, and a documented baseline is what allows you to say at week 3 whether the patient is recovering.",
      ],
    },
    {
      heading: "The differential - what a facial palsy is when it is not Bell palsy",
      points: [
        "**Ramsay Hunt syndrome (herpes zoster oticus)** is varicella-zoster reactivation in the geniculate ganglion, presenting with severe deep ear pain, vesicles in the concha, external canal, on the pinna or on the anterior tongue and palate, often with vertigo and sensorineural hearing loss from eighth nerve involvement; it is more severe and recovers less completely than Bell palsy, so **always look inside the ear and at the palate before calling a palsy idiopathic**.",
        "**Otological causes** are common in Indian practice - acute suppurative otitis media in children and chronic suppurative otitis media with cholesteatoma in adults erode the facial canal; a facial palsy with a discharging ear is an ENT emergency needing imaging and often surgery, never a course of prednisolone.",
        "**Bilateral facial palsy is never Bell palsy** and demands admission and investigation: Guillain-Barre syndrome (look for areflexia and ascending weakness and check the single-breath count), Lyme disease, sarcoidosis (Heerfordt syndrome with uveitis and parotid swelling), HIV seroconversion, leukaemic or lymphomatous meningeal infiltration, and brainstem lesions.",
        "**Leprosy** must be actively considered in India: it produces a painless, often slowly evolving facial weakness, classically of the **zygomatic branch with lagophthalmos**, alongside thickened nerves (great auricular, ulnar, common peroneal), anaesthetic hypopigmented patches and other mononeuropathies, and it is treated with multidrug therapy plus prednisolone for the reaction, not with a Bell palsy course.",
        "**A slowly progressive facial weakness developing over weeks, or one that fails to improve at all by three months, is a tumour until imaged** - parotid malignancy, facial nerve schwannoma, cerebellopontine angle lesion, skull base or metastatic disease - so palpate the parotid and get contrast MRI of the brain, internal auditory meatus and parotid.",
        "Other causes to enumerate are temporal bone trauma and facial injury, iatrogenic injury during parotid or mastoid surgery, diabetes mellitus, hypertension in children, Melkersson-Rosenthal syndrome (recurrent palsy, facial oedema and a fissured tongue), and rarely tuberculous otitis media.",
      ],
    },
    {
      heading: "Treatment: steroid, antiviral and the eye",
      points: [
        "**Oral corticosteroid started within 72 hours of onset is the only treatment with a clear, large benefit** - it raises the proportion recovering complete function from roughly 70% to about 85% and reduces synkinesis; the number needed to treat for complete recovery is about 10.",
        "The two accepted regimens are **prednisolone 50 mg daily for 10 days**, or **prednisolone 60 mg daily for 5 days then tapered by 10 mg a day over the next 5 days**; either is given with food, and there is no advantage to a longer course.",
        "**Antivirals alone are of no benefit and should never be given alone.** Adding an antiviral to steroid gives at best a small additional benefit and is reasonable in severe palsy (House-Brackmann IV to VI): **valacyclovir 1 g three times daily for 7 days**, or acyclovir 400 mg five times daily for 7 days.",
        "**Ramsay Hunt syndrome is treated differently and more aggressively:** prednisolone 1 mg/kg/day for 5 days then tapered, plus **acyclovir 800 mg five times daily for 7 days** (or valacyclovir 1 g three times daily), started as early as possible because outcomes fall away sharply after 72 hours.",
        "**Eye protection is the part of the treatment that prevents permanent harm** - the cornea is anaesthetic to the patient's awareness of drying, and exposure keratopathy can blind. Prescribe **carboxymethylcellulose 0.5% or hypromellose drops hourly while awake**, a lubricating ointment (liquid paraffin with white soft paraffin, or carbomer gel) at night, **taping the eyelid closed horizontally at night**, and protective glasses outdoors.",
        "Steroids are still given in diabetes and in pregnancy - in diabetes with warning about hyperglycaemia and more frequent glucose monitoring or a short-term insulin adjustment, and in pregnancy after discussion, since prednisolone is extensively metabolised by the placenta. Facial physiotherapy with mirror biofeedback and gentle massage helps, but **electrical stimulation of the face should not be used** as it may worsen synkinesis.",
      ],
    },
    {
      heading: "Course, complications and when to refer",
      points: [
        "**About 85% of patients show the first sign of recovery within three weeks** and roughly 70% recover completely without any treatment; incomplete palsies do far better than complete ones, and recovery beginning after three weeks predicts a poorer final outcome.",
        "Poor prognostic markers to record are complete paralysis (House-Brackmann VI), age over 60, diabetes, hypertension, severe pain, pregnancy, and no recovery by three weeks; **electroneuronography showing more than 90% degeneration within the first two weeks** identifies the small group considered for surgical decompression at specialist centres.",
        "Sequelae of aberrant reinnervation are **synkinesis** (the eye narrows when the mouth moves, or the mouth twitches on blinking), **crocodile tears** (gustatory lacrimation from misdirected fibres to the lacrimal gland), hemifacial spasm and facial contracture; botulinum toxin to the overactive muscles is the treatment of choice for troublesome synkinesis and spasm.",
        "**Refer the same day** for a discharging ear with palsy, a red or painful eye or any corneal staining, bilateral palsy, or associated other cranial nerve or long tract signs.",
        "**Refer for MRI and specialist opinion** if there is no improvement whatsoever at three months, if the weakness is progressive beyond three weeks, if the palsy is recurrent on the same side, or if a parotid or neck mass is felt.",
        "Document at every review the House-Brackmann grade, the state of the cornea and the eye closure, and whether the eye care is actually being done - the commonest avoidable harm in Bell palsy is a corneal ulcer in a patient whose face is recovering well.",
      ],
    },
  ],
  tables: [
    {
      heading: "Upper versus lower motor neurone facial palsy",
      columns: ["Feature", "Upper motor neurone (supranuclear)", "Lower motor neurone (nuclear or infranuclear)"],
      rows: [
        ["Forehead and frontalis", "Spared - patient can wrinkle the brow", "Paralysed - no forehead wrinkling"],
        ["Eye closure", "Preserved", "Incomplete (lagophthalmos), Bell phenomenon visible"],
        ["Site of lesion", "Contralateral cortex, corona radiata, internal capsule, pons above the nucleus", "Facial nucleus, facial canal, stylomastoid foramen, parotid"],
        ["Usual cause", "Stroke, tumour, demyelination", "Bell palsy, Ramsay Hunt, otitis media, trauma, parotid tumour, leprosy"],
        ["Associated signs", "Hemiparesis, dysarthria, dysphagia, sparing of emotional smile", "Hyperacusis, loss of taste, reduced lacrimation, ear vesicles or discharge"],
        ["Action", "Acute stroke pathway, immediate non-contrast CT head", "Clinical diagnosis, steroid within 72 hours, eye care"],
      ],
    },
    {
      heading: "House-Brackmann facial nerve grading",
      columns: ["Grade", "Description", "Eye closure"],
      rows: [
        ["I - Normal", "Normal facial function in all areas", "Complete"],
        ["II - Mild dysfunction", "Slight weakness noticeable only on close inspection, slight synkinesis", "Complete with minimum effort"],
        ["III - Moderate dysfunction", "Obvious but not disfiguring difference, noticeable synkinesis or contracture", "Complete with effort"],
        ["IV - Moderately severe", "Obvious weakness and disfiguring asymmetry, no forehead movement", "Incomplete"],
        ["V - Severe dysfunction", "Barely perceptible motion, asymmetry at rest", "Incomplete"],
        ["VI - Total paralysis", "No movement at all", "None"],
      ],
    },
    {
      heading: "Drug regimens in acute facial palsy",
      columns: ["Situation", "Regimen", "Notes"],
      rows: [
        ["Bell palsy, any severity, within 72 hours", "Prednisolone 50 mg daily for 10 days, OR 60 mg daily for 5 days then taper 10 mg/day over 5 days", "The single intervention with clear benefit; give with food"],
        ["Bell palsy, severe (House-Brackmann IV-VI)", "Add valacyclovir 1 g three times daily for 7 days, or acyclovir 400 mg five times daily for 7 days", "Small added benefit; never give an antiviral alone"],
        ["Ramsay Hunt syndrome", "Prednisolone 1 mg/kg/day for 5 days then taper, PLUS acyclovir 800 mg five times daily for 7 days", "Start within 72 hours; audiometry and vestibular assessment"],
        ["Eye care in all cases with lagophthalmos", "Carboxymethylcellulose 0.5% drops hourly while awake, paraffin or carbomer ointment at night, horizontal eyelid taping, protective glasses", "Prevents exposure keratopathy - the only blinding complication"],
        ["Diabetes with Bell palsy", "Same steroid course, with intensified glucose monitoring and temporary insulin or dose adjustment", "Do not withhold the steroid; warn about hyperglycaemia"],
        ["Pregnancy with Bell palsy", "Prednisolone at the standard dose after discussion", "Prednisolone is largely inactivated by placental 11-beta-hydroxysteroid dehydrogenase"],
        ["Troublesome synkinesis or hemifacial spasm after recovery", "Botulinum toxin type A to the overactive muscles, repeated 3-4 monthly", "With mirror biofeedback physiotherapy; avoid facial electrical stimulation"],
      ],
    },
  ],
  redFlags: [
    "Forehead sparing with a lower facial droop - this is an upper motor neurone palsy and an acute stroke until proved otherwise; activate the stroke pathway immediately.",
    "Bilateral facial weakness - never Bell palsy; admit and investigate for Guillain-Barre syndrome, sarcoidosis, Lyme disease, HIV and meningeal infiltration, and check the single-breath count and vital capacity.",
    "Vesicles in the ear canal, concha, pinna or on the palate with severe otalgia, vertigo or hearing loss - Ramsay Hunt syndrome needs high-dose steroid plus acyclovir 800 mg five times daily started the same day.",
    "Facial palsy with a discharging ear, mastoid tenderness or a cholesteatoma - an ENT emergency requiring imaging and surgical drainage, not oral steroids.",
    "A red, painful or hazy eye, or fluorescein staining of the cornea, in a patient with lagophthalmos - exposure keratopathy or corneal ulcer; same-day ophthalmology referral.",
    "Facial weakness that is slowly progressive over weeks, recurrent on the same side, or accompanied by a parotid or neck mass or other cranial nerve palsies - image for tumour with contrast MRI of the brain, internal auditory meatus and parotid.",
    "No recovery whatsoever at three months - the diagnosis of Bell palsy is wrong until imaging says otherwise.",
  ],
  pearls: [
    "Forehead involved means lower motor neurone and Bell palsy is possible; forehead spared means upper motor neurone and the patient goes to the stroke pathway - this one line answers most examination questions on facial palsy.",
    "Steroid within 72 hours is the whole of the evidence-based drug treatment; antivirals alone do nothing, and adding one only makes sense in a severe palsy or in Ramsay Hunt.",
    "Always look inside the ear and at the palate before calling a facial palsy idiopathic - the vesicles of Ramsay Hunt change both the drug and the prognosis.",
    "Bilateral facial palsy is a neurological emergency, not a double Bell palsy; think Guillain-Barre syndrome first and measure the respiratory reserve.",
    "The eye, not the face, is what can be permanently damaged - lubricants hourly, ointment and taping at night, and review the cornea at every visit.",
    "Retroauricular pain, altered taste and hyperacusis are expected in Bell palsy and are reassuring, not red flags; they simply localise the lesion above the chorda tympani and the stapedial branch.",
    "In India, add leprosy and chronic suppurative otitis media to the differential of every facial palsy - the first is painless and slow with thickened nerves, the second has a wet ear.",
    "House-Brackmann grade at every visit; a documented baseline is the only way to prove at three weeks whether recovery has started.",
    "Do not use electrical stimulation of the facial muscles - it is popular and it aggravates synkinesis; use mirror biofeedback exercises instead.",
  ],
  theory: [
    {
      id: "neurology-bell-palsy-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "A 34-year-old woman presents with sudden onset right-sided facial weakness of one day's duration. Discuss the clinical approach, differential diagnosis and management of lower motor neurone facial palsy.",
      openingLines: [
        "Bell palsy is an acute, idiopathic, unilateral lower motor neurone facial (seventh cranial nerve) palsy that reaches maximum severity within 72 hours, accounting for 60-75% of all acute facial palsies, and is a diagnosis of exclusion made on clinical grounds.",
        "The first and most important step is to separate an upper motor neurone palsy, in which the forehead is spared and which represents a stroke until proved otherwise, from a lower motor neurone palsy in which the whole hemiface including the frontalis is paralysed.",
      ],
      answer: [
        {
          heading: "Applied anatomy and localisation",
          points: [
            "The facial nerve arises from the pons, traverses the cerebellopontine angle and internal acoustic meatus, turns at the geniculate ganglion, runs in the facial canal and exits at the stylomastoid foramen to branch within the parotid.",
            "Branches given off in the canal localise the lesion: greater petrosal nerve (lacrimation), nerve to stapedius (hyperacusis), chorda tympani (taste from the anterior two-thirds of the tongue, submandibular and sublingual secretion).",
            "Loss of lacrimation places the lesion at or above the geniculate ganglion; hyperacusis places it above the stapedial branch; loss of taste places it above the chorda tympani; pure motor weakness places it at or below the stylomastoid foramen.",
            "Upper motor neurone lesions spare the forehead because frontalis has bilateral cortical representation; lower motor neurone lesions paralyse the entire hemiface.",
            "Lagophthalmos with a visible Bell phenomenon confirms a lower motor neurone lesion at the bedside.",
          ],
        },
        {
          heading: "Clinical assessment",
          points: [
            "History: speed of onset and time to maximum weakness, retroauricular pain, altered taste, hyperacusis, watering eye, dribbling, ear discharge, hearing loss, vertigo, rash, trauma, recent surgery, diabetes, hypertension, pregnancy and previous episodes.",
            "Examination: test all facial muscle groups - wrinkle the forehead, close the eyes against resistance, screw up the nose, blow out the cheeks, show the teeth, purse the lips and tense the platysma.",
            "Examine the ear canal, tympanic membrane, palate and tongue for zoster vesicles, otitis media or cholesteatoma; palpate the parotid and the neck.",
            "Examine all other cranial nerves, the limbs for long tract signs, the peripheral nerves for thickening (leprosy) and the skin for anaesthetic patches.",
            "Grade the palsy on the House-Brackmann scale from I (normal) to VI (total paralysis) and record it; assess corneal integrity and the completeness of eye closure.",
          ],
        },
        {
          heading: "Differential diagnosis",
          points: [
            "Ramsay Hunt syndrome - herpes zoster oticus with ear vesicles, severe otalgia, vertigo and sensorineural hearing loss.",
            "Otological - acute suppurative otitis media, chronic suppurative otitis media with cholesteatoma, tuberculous otitis media, temporal bone fracture.",
            "Neoplastic - parotid malignancy, facial nerve schwannoma, cerebellopontine angle tumour, skull base or metastatic disease; suggested by a progressive course or a mass.",
            "Systemic and infective - diabetes mellitus, leprosy, HIV, Lyme disease, sarcoidosis (Heerfordt syndrome), Guillain-Barre syndrome and Melkersson-Rosenthal syndrome; bilateral palsy is never Bell palsy.",
            "Central - pontine infarct or tumour involving the facial nucleus, which gives a lower motor neurone facial palsy with a contralateral hemiparesis (Millard-Gubler syndrome).",
          ],
        },
        {
          heading: "Investigations",
          points: [
            "No investigation is required in a typical Bell palsy; it is a clinical diagnosis.",
            "Blood glucose and HbA1c, blood pressure, and HIV serology where indicated by risk.",
            "Contrast MRI of the brain, internal auditory meatus and parotid if the course is progressive, recurrent, bilateral, associated with other cranial nerve palsies, or shows no recovery at three months.",
            "High resolution CT of the temporal bone for suspected cholesteatoma, trauma or a bony lesion.",
            "Electroneuronography and electromyography between days 3 and 14 in complete palsy, to quantify degeneration and identify the small group considered for surgical decompression.",
            "Cerebrospinal fluid examination and nerve conduction studies if Guillain-Barre syndrome is suspected, and slit-skin smear for leprosy.",
          ],
        },
        {
          heading: "Management",
          points: [
            "Prednisolone 50 mg daily for 10 days, or 60 mg daily for 5 days then tapered over 5 days, started within 72 hours of onset - this raises complete recovery from about 70% to about 85%.",
            "Add valacyclovir 1 g three times daily for 7 days (or acyclovir 400 mg five times daily) in severe palsy; never give an antiviral alone.",
            "Ramsay Hunt syndrome: prednisolone 1 mg/kg/day plus acyclovir 800 mg five times daily for 7 days, started as early as possible.",
            "Eye care in every patient with incomplete closure - carboxymethylcellulose 0.5% drops hourly while awake, lubricating ointment and horizontal eyelid taping at night, and protective glasses.",
            "Facial physiotherapy with mirror biofeedback and gentle massage; avoid electrical stimulation, which aggravates synkinesis.",
            "Explain the natural history, reassure that most recover, and review at 1 week, 3 weeks and 3 months; refer if there is no improvement at three months, progression, recurrence, a mass, bilateral involvement or any corneal problem.",
            "Late sequelae - synkinesis, crocodile tears, hemifacial spasm and contracture - are managed with botulinum toxin type A and physiotherapy; long-standing paralysis may need a tarsorrhaphy, gold weight implant or facial reanimation surgery.",
          ],
        },
      ],
      mustDraw: [
        "A labelled diagram of the facial nerve from the pons to the stylomastoid foramen showing the greater petrosal nerve, nerve to stapedius and chorda tympani, with the localising sign for each.",
        "A two-column table contrasting upper and lower motor neurone facial palsy.",
        "The House-Brackmann grades I to VI in a table.",
      ],
      markSplit: [
        { part: "Applied anatomy and upper versus lower motor neurone localisation", marks: 2 },
        { part: "Clinical assessment and House-Brackmann grading", marks: 2 },
        { part: "Differential diagnosis", marks: 2 },
        { part: "Investigations and their indications", marks: 1 },
        { part: "Steroid and antiviral regimens with doses", marks: 2 },
        { part: "Eye care, physiotherapy, follow-up and sequelae", marks: 1 },
      ],
      keywords: ["Bell palsy", "facial nerve", "House-Brackmann", "prednisolone", "lagophthalmos", "Ramsay Hunt"],
    },
    {
      id: "neurology-bell-palsy-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "less-common",
      question: "Write a short note on Ramsay Hunt syndrome.",
      openingLines: [
        "Ramsay Hunt syndrome, or herpes zoster oticus, is reactivation of latent varicella-zoster virus in the geniculate ganglion producing a lower motor neurone facial palsy with a painful vesicular eruption in the distribution of the sensory branches of the facial nerve.",
        "It is the second commonest cause of atraumatic facial palsy after Bell palsy, accounts for about 7-12% of cases, and is both more severe and less completely reversible, which makes early recognition and early treatment the whole point of the diagnosis.",
      ],
      answer: [
        {
          heading: "Clinical features",
          points: [
            "A prodrome of severe, deep, boring pain in and behind the ear, often preceding the rash and the weakness by one to three days.",
            "Vesicles in the concha, external auditory canal, on the pinna, or on the anterior two-thirds of the tongue and soft palate; the rash may be scanty and is missed unless the ear and mouth are examined.",
            "A lower motor neurone facial palsy that is typically complete, with lagophthalmos and loss of forehead movement.",
            "Eighth nerve involvement in up to half of cases - sensorineural hearing loss, tinnitus and vertigo, because the vestibulocochlear nerve shares the internal acoustic meatus.",
            "Zoster sine herpete describes the same syndrome without a visible rash, diagnosed by varicella-zoster serology or cerebrospinal fluid PCR, and it should be considered in any severe or atypical facial palsy.",
          ],
        },
        {
          heading: "Management",
          points: [
            "Prednisolone 1 mg/kg/day for 5 days followed by a taper, started as early as possible.",
            "Acyclovir 800 mg five times daily for 7 days, or valacyclovir 1 g three times daily for 7 days, or famciclovir 500 mg three times daily - the antiviral is essential here, unlike in Bell palsy.",
            "Both drugs should be started within 72 hours; benefit falls sharply with delay.",
            "Analgesia for a pain that is often severe - paracetamol with a weak opioid initially, and amitriptyline 10-25 mg at night, gabapentin or pregabalin for the neuropathic component and for post-herpetic neuralgia.",
            "Eye care with hourly lubricants, night-time ointment and taping; audiometry and vestibular assessment; ENT and ophthalmology referral.",
            "Isolate from pregnant women, neonates and the immunosuppressed until the vesicles have crusted, since the vesicle fluid transmits varicella.",
          ],
        },
        {
          heading: "Prognosis",
          points: [
            "Complete recovery occurs in only about 50-60% even with treatment, compared with 85% in treated Bell palsy.",
            "Poor prognostic factors are complete paralysis at presentation, age over 50, diabetes, hearing loss and delay in starting treatment.",
            "Post-herpetic neuralgia, permanent hearing loss, vestibular dysfunction and synkinesis are recognised long-term sequelae.",
          ],
        },
      ],
      mustDraw: [
        "A table comparing Bell palsy and Ramsay Hunt syndrome by rash, pain, hearing, treatment and prognosis.",
      ],
      markSplit: [
        { part: "Definition and aetiology", marks: 1 },
        { part: "Clinical features including eighth nerve involvement", marks: 1.5 },
        { part: "Treatment with drug names and doses", marks: 2 },
        { part: "Prognosis and complications", marks: 0.5 },
      ],
      keywords: ["Ramsay Hunt", "herpes zoster oticus", "geniculate ganglion", "acyclovir", "zoster sine herpete"],
    },
  ],
  mcqs: [
    {
      id: "neurology-bell-palsy-q1",
      stem: "A 34-year-old woman wakes with right facial droop that worsened over the next few hours. She cannot wrinkle the right forehead or close the right eye, has retroauricular pain and says food tastes odd. The ear canal, drum and palate are normal, and there is no other neurological abnormality. She presents 18 hours after onset. What is the best management?",
      options: [
        "Reassurance and eye lubricants alone, as corticosteroids have no proven benefit in this condition",
        "Prednisolone 60 mg daily for 5 days then tapered over 5 days, with hourly eye lubricants, night ointment and eyelid taping",
        "Valacyclovir 1 g three times daily for 7 days as the sole treatment",
        "Urgent non-contrast CT of the head before any treatment is started",
        "Facial electrical stimulation and physiotherapy, with steroids deferred until day 7 if there is no recovery",
      ],
      answer: 1,
      explanation:
        "Forehead involvement with inability to close the eye makes this a lower motor neurone palsy, and with a normal ear, palate and remaining neurological examination it is Bell palsy. Oral corticosteroid started within 72 hours is the only treatment with clear benefit, lifting complete recovery from around 70% to around 85%, and eye protection is what prevents the one permanently damaging complication, exposure keratopathy. Reassurance alone discards that benefit. An antiviral given alone has repeatedly been shown to be ineffective and is at most an add-on to steroid in severe palsy. CT is unnecessary because the forehead is involved, which excludes an upper motor neurone lesion, and waiting for imaging would waste part of the 72-hour window. Delaying the steroid to day 7 puts it outside the window where it works, and facial electrical stimulation is specifically discouraged because it aggravates synkinesis.",
      difficulty: "easy",
    },
    {
      id: "neurology-bell-palsy-q2",
      stem: "A 62-year-old hypertensive man develops weakness of the left lower face over minutes while at work. He can wrinkle both sides of his forehead and close both eyes fully. His left arm drifts on outstretched arm testing and his speech is slurred. He arrives 50 minutes after onset. What is the correct interpretation and action?",
      options: [
        "Bell palsy - start prednisolone 50 mg daily for 10 days",
        "Ramsay Hunt syndrome - start acyclovir 800 mg five times daily",
        "An upper motor neurone facial palsy from a contralateral hemispheric stroke - activate the acute stroke pathway with immediate non-contrast CT and thrombolysis assessment",
        "Ocular myasthenia gravis - arrange acetylcholine receptor antibodies and an ice pack test",
        "Parotid malignancy infiltrating the facial nerve - arrange an urgent MRI of the parotid",
      ],
      answer: 2,
      explanation:
        "The forehead is spared and eye closure is intact, which localises the lesion above the facial nucleus, and the accompanying arm drift and dysarthria complete a hemispheric syndrome; within the thrombolysis window this is a stroke call, not a facial palsy consultation. Bell palsy is excluded by definition because it always paralyses the forehead. Ramsay Hunt requires a lower motor neurone palsy with zoster vesicles and ear pain, neither of which is present. Myasthenia gravis produces fatigable ptosis and ophthalmoparesis with fluctuation rather than an abrupt fixed lower facial weakness with limb signs. A parotid tumour causes a lower motor neurone palsy evolving over weeks with a palpable mass, not a stroke-like onset over minutes.",
      difficulty: "easy",
    },
    {
      id: "neurology-bell-palsy-q3",
      stem: "A 55-year-old diabetic man has two days of severe deep pain in the left ear followed by complete left facial paralysis. There are vesicles in the left concha and on the left half of the soft palate, and he complains of spinning vertigo and reduced hearing on the left. He presents on day 2. What is the correct treatment?",
      options: [
        "Prednisolone 50 mg daily for 10 days alone, with eye care",
        "Prednisolone 1 mg/kg/day with a taper, plus acyclovir 800 mg five times daily for 7 days, with eye care and audiometry",
        "Acyclovir 400 mg five times daily for 7 days alone, with steroids withheld because of his diabetes",
        "Topical acyclovir cream to the vesicles with oral analgesia and observation",
        "Amoxicillin-clavulanate for suspected acute otitis media with facial nerve involvement",
      ],
      answer: 1,
      explanation:
        "Vesicles in the concha and on the palate with severe otalgia, complete facial paralysis and eighth nerve symptoms are Ramsay Hunt syndrome, and unlike Bell palsy it needs both a high-dose corticosteroid and a full antiviral dose - acyclovir 800 mg five times daily is the zoster dose, not the 400 mg herpes simplex dose. Treating it as Bell palsy with steroid alone omits the antiviral that matters in varicella-zoster reactivation. Withholding steroid because of diabetes is wrong: the steroid is given with intensified glucose monitoring and temporary insulin adjustment, since Ramsay Hunt recovers completely in only about half of patients even when treated. Topical acyclovir has no role in a cranial neuropathy. There is no otitis media here, and an antibiotic treats nothing in this presentation.",
      difficulty: "moderate",
    },
    {
      id: "neurology-bell-palsy-q4",
      stem: "A 40-year-old man develops right facial weakness and then, three days later, left facial weakness, so that he cannot close either eye or wrinkle either forehead. He also reports tingling in both feet and unsteadiness. Ankle and knee jerks are absent. What is the most appropriate next step?",
      options: [
        "Prednisolone 60 mg daily for 5 days for bilateral Bell palsy",
        "Admit for observation with serial single-breath count and vital capacity, nerve conduction studies and cerebrospinal fluid examination",
        "Reassure and review in three weeks, since bilateral Bell palsy has the same good prognosis",
        "Start acyclovir 800 mg five times daily for presumed bilateral zoster sine herpete",
        "Arrange an outpatient MRI of the parotid glands in six weeks",
      ],
      answer: 1,
      explanation:
        "Bilateral facial palsy is never Bell palsy, and sequential bilateral facial weakness with distal paraesthesiae and generalised areflexia is Guillain-Barre syndrome until proved otherwise, so the patient needs admission and repeated measurement of respiratory reserve because respiratory failure is what kills in this condition, along with nerve conduction studies and cerebrospinal fluid showing albuminocytological dissociation. Treating it as bilateral Bell palsy with prednisolone is doubly wrong: the label is wrong and corticosteroids are of no benefit in Guillain-Barre syndrome, where the treatment is intravenous immunoglobulin or plasma exchange. Reassurance and outpatient review risk a respiratory arrest at home. Zoster sine herpete does not produce areflexia and distal sensory symptoms, and an outpatient parotid MRI in six weeks addresses none of the urgency.",
      difficulty: "moderate",
    },
    {
      id: "neurology-bell-palsy-q5",
      stem: "A 58-year-old man reports right facial weakness that began as a slight droop ten weeks ago and has slowly worsened since. He now cannot close the right eye. There is a firm 2 cm swelling in the right parotid region and a hard node in the upper neck. He was given a course of prednisolone by another doctor eight weeks ago with no effect. What should be done?",
      options: [
        "Repeat the prednisolone course at a higher dose for a further 10 days",
        "Reassure him that Bell palsy sometimes takes six months to recover and review at that point",
        "Arrange contrast MRI of the brain, internal auditory meatus and parotid, with urgent ENT referral for the parotid mass",
        "Start acyclovir 800 mg five times daily for presumed zoster sine herpete",
        "Refer for facial electrical stimulation and mirror biofeedback physiotherapy",
      ],
      answer: 2,
      explanation:
        "Bell palsy reaches its maximum within 72 hours; weakness that creeps on over ten weeks and is accompanied by a parotid mass and a hard cervical node is a parotid malignancy infiltrating the facial nerve until imaging proves otherwise, so contrast MRI of the brain, internal auditory meatus and parotid with urgent ENT referral is the only acceptable answer. Repeating the steroid treats a diagnosis that has already been disproved by the failure of the first course and the progressive course. Reassuring him and waiting six months allows a treatable cancer to advance; the rule is that no improvement at three months, or any progression beyond three weeks, mandates imaging. Zoster sine herpete presents acutely, not over weeks, and does not produce a mass. Physiotherapy, and particularly electrical stimulation which aggravates synkinesis, addresses nothing in an untreated tumour.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "neurology-bell-palsy-c1",
      front: "How do you distinguish an upper from a lower motor neurone facial palsy at the bedside?",
      back: "The forehead. Upper motor neurone lesions spare frontalis (brow wrinkles, eye closes) because of bilateral cortical representation; lower motor neurone lesions paralyse the whole hemiface with lagophthalmos and a visible Bell phenomenon.",
    },
    {
      id: "neurology-bell-palsy-c2",
      front: "Steroid regimen for Bell palsy and the time window.",
      back: "Prednisolone 50 mg daily for 10 days, or 60 mg daily for 5 days then tapered 10 mg/day over 5 days. Start within 72 hours of onset - it raises complete recovery from about 70% to about 85%.",
    },
    {
      id: "neurology-bell-palsy-c3",
      front: "When is an antiviral added in facial palsy, and at what dose?",
      back: "Never alone. Add valacyclovir 1 g TDS or acyclovir 400 mg five times daily for 7 days in severe Bell palsy (House-Brackmann IV-VI). In Ramsay Hunt use the zoster dose - acyclovir 800 mg five times daily for 7 days - with prednisolone 1 mg/kg/day.",
    },
    {
      id: "neurology-bell-palsy-c4",
      front: "Eye care in a patient with lagophthalmos.",
      back: "Carboxymethylcellulose 0.5% or hypromellose drops hourly while awake, paraffin or carbomer ointment at night, horizontal taping of the eyelid at night, protective glasses outdoors. Review the cornea at every visit - exposure keratopathy is the one blinding complication.",
    },
    {
      id: "neurology-bell-palsy-c5",
      front: "Which branches of the facial nerve localise the lesion, and how?",
      back: "Greater petrosal nerve - reduced lacrimation means at or above the geniculate ganglion. Nerve to stapedius - hyperacusis means above the stapedial branch. Chorda tympani - loss of taste on the anterior two-thirds of the tongue means above the chorda. Pure motor weakness means at or below the stylomastoid foramen.",
    },
    {
      id: "neurology-bell-palsy-c6",
      front: "Causes of bilateral facial palsy.",
      back: "Never Bell palsy. Guillain-Barre syndrome, Lyme disease, sarcoidosis (Heerfordt syndrome), HIV seroconversion, leukaemic or lymphomatous meningeal infiltration, leprosy, Melkersson-Rosenthal syndrome, and brainstem lesions. Admit and check respiratory reserve.",
    },
    {
      id: "neurology-bell-palsy-c7",
      front: "House-Brackmann grades in one line each.",
      back: "I normal; II slight weakness on close inspection, eye closes with minimum effort; III obvious but not disfiguring, eye closes with effort, synkinesis; IV disfiguring asymmetry, no forehead movement, incomplete closure; V barely perceptible motion; VI total paralysis.",
    },
    {
      id: "neurology-bell-palsy-c8",
      front: "When must a facial palsy be imaged?",
      back: "Progressive weakness beyond three weeks, no recovery at all by three months, recurrent ipsilateral palsy, bilateral palsy, other cranial nerve or long tract signs, or a parotid or neck mass. Contrast MRI of the brain, internal auditory meatus and parotid.",
    },
    {
      id: "neurology-bell-palsy-c9",
      front: "Late sequelae of facial palsy from aberrant reinnervation.",
      back: "Synkinesis (eye narrows when the mouth moves), crocodile tears (gustatory lacrimation), hemifacial spasm and facial contracture. Treat with botulinum toxin type A plus mirror biofeedback physiotherapy; never facial electrical stimulation.",
    },
    {
      id: "neurology-bell-palsy-c10",
      front: "Prognosis of Bell palsy.",
      back: "About 85% show the first sign of recovery within three weeks; about 70% recover completely untreated and about 85% with steroid. Poor markers: complete paralysis, age over 60, diabetes, hypertension, severe pain, pregnancy, and no recovery by three weeks.",
    },
  ],
  references: [
    "Clinical Practice Guideline: Bell's Palsy, American Academy of Otolaryngology-Head and Neck Surgery Foundation, Otolaryngology-Head and Neck Surgery, 2013 (Executive Summary and 2013 guideline)",
    "Sullivan FM et al., Early treatment with prednisolone or acyclovir in Bell's palsy (the Scottish Bell's Palsy Study), New England Journal of Medicine 2007",
    "Gagyor I et al., Antiviral treatment for Bell's palsy (idiopathic facial paralysis), Cochrane Database of Systematic Reviews, 2019 update",
    "Madhok VB et al., Corticosteroids for Bell's palsy (idiopathic facial paralysis), Cochrane Database of Systematic Reviews, 2016",
    "NICE Clinical Knowledge Summaries, Bell's palsy, 2023 revision",
    "House JW and Brackmann DE, Facial nerve grading system, Otolaryngology-Head and Neck Surgery 1985",
    "Dhingra PL and Dhingra S, Diseases of Ear, Nose and Throat, 8th edition, 2021 - facial nerve disorders",
    "National Leprosy Eradication Programme, Government of India, Guidelines on Management of Reactions and Prevention of Disabilities, 2020",
  ],
});

topics.push({
  id: "neurology-low-back-pain-neuro",
  title: "Low back pain with neurological signs, including cauda equina syndrome",
  oneLiner:
    "Low back pain is triaged at the first consultation into three groups - simple non-specific back pain that needs advice and analgesia and no imaging, radicular pain from nerve root compression that follows a dermatomal map and usually settles with conservative care, and serious spinal pathology signalled by red flags, of which cauda equina syndrome is the one that must be recognised in minutes and decompressed within hours.",
  frequency: "common",
  keywords: [
    "low back pain",
    "sciatica",
    "radiculopathy",
    "cauda equina syndrome",
    "saddle anaesthesia",
    "straight leg raise",
    "Lasegue sign",
    "femoral stretch test",
    "prolapsed intervertebral disc",
    "L5 radiculopathy",
    "S1 radiculopathy",
    "foot drop",
    "lumbar canal stenosis",
    "neurogenic claudication",
    "Pott spine",
    "spinal epidural abscess",
    "post-void residual",
    "red flags",
    "pregabalin",
    "amitriptyline",
    "STarT Back",
  ],
  sections: [
    {
      heading: "The size of the problem and the three-way triage",
      points: [
        "Low back pain has a lifetime prevalence of about 60-80% and is the leading cause of years lived with disability worldwide; Indian community studies report a point prevalence of roughly 6-10% and a one-year prevalence above 40%, with a higher burden in manual labourers, drivers and women engaged in prolonged floor-level household work.",
        "**Every consultation for back pain answers one question first: is this non-specific mechanical back pain, radicular pain from nerve root compression, or serious spinal pathology?** Roughly 90-95% of presentations fall into the first group, about 5% are radicular, and under 1-2% represent malignancy, infection, fracture or cauda equina syndrome.",
        "**Non-specific low back pain needs no imaging at all**, and imaging it does measurable harm: degenerative changes, disc bulges and Modic changes are present in a majority of asymptomatic adults over 40, so a scan generates a label, a fear of movement and a referral chain without changing management.",
        "**Radicular pain (sciatica) is pain radiating below the knee in a dermatomal distribution, usually with paraesthesiae, and is worse than the back pain itself**; the commonest cause in adults under 50 is a posterolateral prolapsed intervertebral disc, most often at **L4-L5 and L5-S1**, and about 90% settle without surgery within 6-12 weeks.",
        "In practice the useful history is the onset (sudden lift, gradual, or no trigger), the exact radiation and whether it crosses the knee, whether coughing or straining aggravates it, night pain, morning stiffness lasting over 30 minutes, fever, weight loss, cancer history, steroid or intravenous drug use, and a direct question about **bladder, bowel and saddle sensation in every single patient**.",
        "Psychosocial factors - fear-avoidance beliefs, catastrophising, low mood, dissatisfaction at work and ongoing compensation claims - predict chronicity better than any imaging finding, and stratified tools such as the **STarT Back** questionnaire identify who needs early psychologically informed physiotherapy.",
      ],
    },
    {
      heading: "Examining for neurological signs and localising the root",
      points: [
        "Inspect the standing patient for the loss of lumbar lordosis, a sciatic list, a gibbus (angular kyphosis of tuberculous spine), scars and skin lesions; palpate for midline bony tenderness (fracture, infection, metastasis) versus paraspinal muscle tenderness (mechanical), and percuss the spinous processes.",
        "**Test the three roots that matter with three movements, three sensory areas and two reflexes:** L4 - knee extension and ankle dorsiflexion, sensation over the medial leg and medial malleolus, reduced knee jerk; L5 - big toe dorsiflexion (extensor hallucis longus) and foot dorsiflexion, sensation over the dorsum of the foot and lateral leg, **no reflex change**; S1 - plantar flexion and eversion, sensation over the lateral foot and sole, **lost ankle jerk**.",
        "**The straight leg raise (Lasegue sign)** reproduces the patient's radiating leg pain between 30 and 70 degrees of passive hip flexion with the knee extended, and is sensitive but not specific for L5 and S1 root tension; **the crossed straight leg raise** - raising the good leg reproduces pain in the affected leg - is far more specific and, when positive, strongly predicts a large central or paracentral disc.",
        "**The femoral stretch test** (prone hip extension with the knee flexed) is the equivalent for the upper lumbar roots L2, L3 and L4, and an upper lumbar radiculopathy is unusual enough that it deserves imaging and a search for a non-disc cause.",
        "Ask the patient to **walk on the heels (L5) and on the toes (S1)**, look for a positive Trendelenburg from gluteus medius weakness (L5), and grade any weakness on the MRC scale, since a documented power grade is the only way to prove progression later.",
        "Perform a **digital rectal examination with assessment of anal tone and voluntary squeeze, plus perianal pinprick sensation over the S2-S4 dermatomes, in every patient with bilateral leg symptoms or any urinary complaint**, and measure a bladder scan post-void residual - these three findings are what convert a suspicion into an emergency.",
      ],
    },
    {
      heading: "Cauda equina syndrome - the emergency in the middle of a common complaint",
      points: [
        "**Cauda equina syndrome is compression of the lumbosacral nerve roots below the conus medullaris (below L1-L2)**, most often by a large central disc prolapse at L4-L5 or L5-S1, and less often by tumour, epidural abscess, haematoma, trauma or severe canal stenosis; it is rare, at about 1 in 65,000 per year, but it is the single most litigated diagnosis in back pain.",
        "The classical features are **bilateral sciatica, saddle (perineal) anaesthesia, bladder dysfunction, faecal incontinence or loss of anal tone, and sexual dysfunction**, with variable lower limb weakness and areflexia; **no single feature is reliable enough to rule the diagnosis in or out, which is why the whole set must be asked about and examined every time**.",
        "**Bladder involvement evolves in a sequence that must be understood**: first loss of the sensation of bladder filling and of the urinary stream passing, then difficulty initiating micturition and a poor stream, then painless retention with overflow incontinence. **Painless retention with overflow is late (cauda equina syndrome with retention, CESR) and carries a far worse prognosis than the incomplete stage (CESI) where sensation is impaired but voiding is preserved.**",
        "**A post-void residual volume above 200 mL, or a patient who cannot say whether urine is passing, mandates emergency MRI of the whole spine on the same admission, out of hours if necessary** - not an outpatient scan, not a trial of analgesia, and not a plain radiograph, which cannot see neural tissue.",
        "**Definitive treatment is emergency surgical decompression, and outcome depends on operating before retention is established**; the widely accepted target is decompression within 48 hours of symptom onset, and within 24 hours where feasible, with the strongest evidence being that patients decompressed while still incomplete (CESI) do substantially better than those already in retention.",
        "In practice the family physician's job is complete when the diagnosis is suspected and the patient is transferred that same hour to a centre with MRI and spinal surgery, with the time of onset of each symptom documented; **safety-netting every patient discharged with sciatica by explaining in writing the symptoms that mandate immediate return is a medico-legal necessity, not a courtesy**.",
      ],
    },
    {
      heading: "The other red flags and their Indian weighting",
      points: [
        "**Infection - tuberculosis of the spine (Pott disease) is the commonest cause of serious spinal infection in India** and must be considered in any patient with constitutional symptoms, unremitting night pain, thoracolumbar involvement, a gibbus or a paravertebral cold abscess; MRI shows contiguous vertebral body destruction with relative disc preservation and a paravertebral collection, and treatment is 12 months of anti-tuberculosis therapy (2HRZE then 10 months of continuation) with surgery reserved for instability, deformity or neurological deficit.",
        "**Pyogenic spinal epidural abscess and vertebral osteomyelitis** present with fever, severe localised spinal tenderness, a rising C-reactive protein and erythrocyte sedimentation rate, and progressive neurological deficit, typically in diabetics, dialysis patients, intravenous drug users and after spinal procedures; blood cultures and urgent contrast MRI come before any empirical antibiotic in a stable patient, but never delay antibiotics in sepsis.",
        "**Malignancy** is suggested by age over 50 with new back pain, a known cancer (breast, prostate, lung, thyroid, kidney, myeloma), unexplained weight loss, pain that is unremitting at night and not relieved by lying down, and a raised alkaline phosphatase or a monoclonal band; **new or progressive neurological signs in a patient with cancer are metastatic spinal cord compression until MRI of the whole spine proves otherwise, and dexamethasone 16 mg daily should be started while arranging it**.",
        "**Fracture** is suggested by a fall or trauma, age over 65 with osteoporosis risk, prolonged corticosteroid use, and sudden severe pain with midline tenderness; a vertebral fragility fracture is diagnosed on plain radiographs and mandates assessment and treatment of osteoporosis in addition to analgesia.",
        "**Inflammatory back pain (axial spondyloarthritis)** is the opposite pattern and is regularly missed for years - onset before 45, insidious, morning stiffness over 30 minutes, improvement with exercise and not with rest, night pain in the second half of the night, alternating buttock pain, and a good response to NSAIDs; check HLA-B27, C-reactive protein and sacroiliac joint imaging and refer to rheumatology.",
        "**Lumbar canal stenosis** in older patients gives neurogenic claudication - bilateral buttock and leg pain and heaviness on walking, relieved by sitting or by flexing forward, with a longer walking distance uphill or leaning on a trolley, and normal peripheral pulses; the key differentiation from vascular claudication is the posture dependence and the preserved pulses.",
      ],
    },
    {
      heading: "Investigation and conservative management",
      points: [
        "**Do not image non-specific low back pain.** Image urgently (MRI, same day) for suspected cauda equina syndrome, metastatic cord compression, spinal infection or a progressive motor deficit; image routinely (MRI within weeks) for radicular pain that has failed 6-12 weeks of conservative care and where surgery is being considered, or where a red flag is present but not an emergency.",
        "Baseline blood tests when serious pathology is suspected are a complete blood count, erythrocyte sedimentation rate and C-reactive protein, blood glucose, renal function, calcium, alkaline phosphatase, and prostate-specific antigen or serum protein electrophoresis where the history points that way; plain radiographs are useful only for fracture, deformity and alignment, and never exclude a disc or a tumour.",
        "**The core of conservative treatment is to stay active and avoid bed rest**; more than a day or two in bed worsens outcomes. Explain that hurt does not equal harm, that the natural history is favourable, and give a specific graded return-to-activity plan rather than a period of rest.",
        "**Analgesia: an NSAID is first line** - ibuprofen 400 mg three times daily, or naproxen 250-500 mg twice daily, or diclofenac 50 mg three times daily, at the lowest effective dose for the shortest period, with a proton pump inhibitor in those over 60 or with gastrointestinal risk, and avoided in renal impairment, uncontrolled hypertension and established cardiovascular disease. Paracetamol 1 g up to four times daily is a poor sole agent for acute back pain but is a useful adjunct.",
        "A short course of a **weak opioid (tramadol 50 mg up to three times daily, or codeine with paracetamol)** may be added for severe pain for a few days only. **Gabapentinoids should not be used for sciatica** - trials show no benefit and significant sedation, dizziness and misuse potential - although **amitriptyline 10-25 mg at night** or duloxetine 30-60 mg daily are reasonable for established chronic neuropathic or persistent pain.",
        "Structured exercise and physiotherapy, with manual therapy only as part of a package that includes exercise, are the mainstay beyond the first fortnight; **epidural corticosteroid injection provides short-term relief of severe radicular pain** and can avert surgery in some, and **elective discectomy is offered for radicular pain persisting beyond 6-12 weeks with concordant imaging, giving faster relief of leg pain but a similar outcome at one to two years compared with conservative care**.",
      ],
    },
  ],
  tables: [
    {
      heading: "Lumbosacral root localisation",
      columns: ["Root", "Motor weakness", "Sensory loss", "Reflex", "Provocation test"],
      rows: [
        ["L3", "Hip flexion and knee extension", "Anterior thigh", "Knee jerk may be reduced", "Femoral stretch test"],
        ["L4", "Knee extension, ankle dorsiflexion (tibialis anterior)", "Medial leg and medial malleolus", "Knee jerk reduced or absent", "Femoral stretch test"],
        ["L5", "Big toe dorsiflexion (extensor hallucis longus), foot dorsiflexion, hip abduction", "Dorsum of foot and lateral leg, first web space", "No reflex change", "Straight leg raise; heel walking; Trendelenburg"],
        ["S1", "Plantar flexion and foot eversion", "Lateral border of foot, sole, little toe", "Ankle jerk absent", "Straight leg raise; toe walking"],
        ["S2-S4", "Anal sphincter and bladder detrusor", "Saddle or perineal area", "Anal wink and bulbocavernosus lost", "Digital rectal examination and perianal pinprick"],
      ],
    },
    {
      heading: "Red flags in low back pain and the action each demands",
      columns: ["Red flag", "Suspected pathology", "Action"],
      rows: [
        ["Saddle anaesthesia, bilateral sciatica, urinary retention or incontinence, faecal incontinence, lax anal tone", "Cauda equina syndrome", "Emergency same-day MRI whole spine and immediate spinal surgical referral; aim to decompress within 24-48 hours"],
        ["Known cancer with new back pain, or progressive neurological deficit in a cancer patient", "Metastatic spinal cord compression", "Dexamethasone 16 mg daily started immediately, urgent MRI whole spine within 24 hours, oncology and spinal referral"],
        ["Fever, night sweats, weight loss, unremitting night pain, gibbus, thoracolumbar pain", "Tuberculosis of the spine (Pott disease)", "ESR, CRP, chest radiograph, contrast MRI spine, tissue or pus for CBNAAT and culture; 12 months of ATT (2HRZE + 10 months continuation)"],
        ["Fever with severe focal spinal tenderness, diabetes, dialysis, intravenous drug use or recent spinal procedure", "Pyogenic vertebral osteomyelitis or epidural abscess", "Blood cultures, ESR and CRP, urgent contrast MRI; antibiotics after cultures unless septic; spinal surgical opinion"],
        ["Age over 65, osteoporosis, prolonged steroids, trauma, sudden pain with midline tenderness", "Vertebral fragility or traumatic fracture", "Plain radiographs, consider CT; analgesia, bone protection, DEXA, treat osteoporosis"],
        ["Onset before 45, insidious, morning stiffness over 30 minutes, better with exercise, night pain, alternating buttock pain", "Axial spondyloarthritis", "HLA-B27, CRP, sacroiliac joint radiographs or MRI, rheumatology referral, NSAID trial"],
        ["Progressive or severe motor weakness such as a new foot drop", "Significant root or cord compression", "Urgent MRI and spinal surgical opinion within days, not weeks"],
      ],
    },
    {
      heading: "Cauda equina syndrome versus lumbar canal stenosis versus vascular claudication",
      columns: ["Feature", "Cauda equina syndrome", "Lumbar canal stenosis", "Vascular claudication"],
      rows: [
        ["Onset", "Acute or subacute, over hours to days", "Chronic, over months to years", "Chronic, progressive"],
        ["Leg symptoms", "Bilateral sciatica, often with weakness", "Bilateral buttock and leg heaviness on walking", "Calf cramp at a fixed claudication distance"],
        ["Relief", "None; may worsen", "Sitting or flexing forward; better uphill or leaning on a trolley", "Standing still, irrespective of posture"],
        ["Saddle sensation", "Impaired or absent - the cardinal sign", "Normal", "Normal"],
        ["Bladder", "Loss of filling sensation, then poor stream, then painless retention with overflow", "Normal until very advanced", "Normal"],
        ["Peripheral pulses", "Normal", "Normal", "Reduced or absent, with bruits"],
        ["Action", "Emergency MRI and decompression", "Elective MRI, physiotherapy, consider decompression", "Ankle-brachial index, risk factor control, vascular referral"],
      ],
    },
  ],
  redFlags: [
    "New urinary hesitancy, loss of the sensation of the stream, painless retention or overflow incontinence in a patient with back pain - suspect cauda equina syndrome; check post-void residual and arrange emergency MRI of the whole spine the same hour.",
    "Saddle or perineal numbness, loss of anal tone on rectal examination, or bilateral sciatica - cauda equina syndrome until MRI proves otherwise; refer immediately for decompression within 24-48 hours.",
    "A progressive or severe motor deficit such as a new foot drop or a rapidly worsening weakness - urgent MRI and a spinal surgical opinion within days.",
    "Back pain in a patient with a known malignancy, or a new deficit with cancer history - start dexamethasone 16 mg daily and arrange MRI of the whole spine within 24 hours for metastatic cord compression.",
    "Fever, night sweats, weight loss, unremitting night pain or a gibbus - tuberculous spondylitis or a pyogenic spinal infection; investigate with inflammatory markers and contrast MRI, and take tissue before committing to long treatment.",
    "Severe localised spinal tenderness with fever in a diabetic, a dialysis patient or an intravenous drug user - spinal epidural abscess; blood cultures and emergency contrast MRI.",
    "First episode of significant back pain over 50 or under 20, or thoracic rather than lumbar pain - a lower threshold for investigation applies in both.",
  ],
  pearls: [
    "Ask every back pain patient about bladder function and saddle sensation, and write the answer in the notes - the negative record is as valuable as the positive finding.",
    "Painless urinary retention with overflow is a late sign of cauda equina syndrome, not an early one; by then the prognosis has already worsened, so act on the loss of the sensation of the stream.",
    "The crossed straight leg raise is much more specific than the straight leg raise, and when positive predicts a large central or paracentral disc.",
    "L5 has no reflex - a radiculopathy with weak big toe dorsiflexion, numbness of the first web space and normal ankle and knee jerks is L5 until proved otherwise.",
    "An absent ankle jerk with weak plantar flexion and numbness of the lateral border of the foot is S1; an absent knee jerk with weak knee extension and medial leg numbness is L4.",
    "Do not image non-specific low back pain - degenerative changes are near universal after 40 and the scan buys a label, a fear of movement and a referral, not a diagnosis.",
    "Avoid bed rest; staying active is the single most consistently effective piece of advice in acute back pain.",
    "Gabapentin and pregabalin do not work for sciatica and should not be prescribed for it, despite how often they are.",
    "In India, tuberculosis of the spine is the commonest serious spinal infection; think of it with night pain, constitutional symptoms and thoracolumbar involvement, and remember CNS and skeletal tuberculosis are treated for 12 months, not six.",
    "Ninety per cent of sciatica settles within 6-12 weeks with conservative care, so surgery is for the persistent, the progressive and the emergency, and the conversation about it belongs at week six, not week one.",
  ],
  theory: [
    {
      id: "neurology-low-back-pain-neuro-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "A 42-year-old lorry driver presents with severe low back pain radiating to the left leg for ten days, with numbness of the perineum and difficulty passing urine since this morning. Discuss the clinical evaluation and management of low back pain with neurological signs, with emphasis on cauda equina syndrome.",
      openingLines: [
        "Cauda equina syndrome is compression of the lumbosacral nerve roots below the conus medullaris, most commonly by a large central prolapsed intervertebral disc at L4-L5 or L5-S1, and it is a surgical emergency in which the outcome is determined by the interval between the onset of bladder dysfunction and decompression.",
        "In this patient, low back pain with unilateral radiation accompanied by perineal numbness and new urinary difficulty is cauda equina syndrome until an emergency MRI of the whole spine proves otherwise, and the immediate task is transfer to a centre with MRI and spinal surgery rather than analgesia and review.",
      ],
      answer: [
        {
          heading: "Triage of low back pain",
          points: [
            "Non-specific mechanical low back pain - 90-95% of presentations, no imaging, advice, analgesia and activity.",
            "Radicular pain (sciatica) - pain radiating below the knee in a dermatomal distribution, usually from a posterolateral disc prolapse at L4-L5 or L5-S1, of which about 90% settle in 6-12 weeks.",
            "Serious spinal pathology - under 1-2%: cauda equina syndrome, malignancy and metastatic cord compression, infection including tuberculous spondylitis, fracture and inflammatory spondyloarthritis.",
            "The triage is made by history and examination; imaging follows the suspicion rather than creating it.",
          ],
        },
        {
          heading: "History",
          points: [
            "Onset, site, radiation, whether the leg pain is worse than the back pain, aggravation by coughing or straining, and any preceding lifting injury.",
            "Direct questions in every case about bladder emptying and the sensation of the urinary stream, faecal continence, saddle numbness and sexual function, with the time of onset of each recorded.",
            "Red flag screen - fever, night sweats, weight loss, night pain, known cancer, corticosteroid use, intravenous drug use, trauma, osteoporosis risk, and age at first onset.",
            "Occupational and psychosocial history - a lorry driver has prolonged seated vibration exposure, and fear-avoidance beliefs, low mood and compensation issues predict chronicity.",
          ],
        },
        {
          heading: "Examination",
          points: [
            "Gait, posture, sciatic list, loss of lumbar lordosis, gibbus, midline versus paraspinal tenderness, and range of lumbar movement.",
            "Root-level motor testing - knee extension (L3-L4), ankle dorsiflexion (L4-L5), big toe dorsiflexion (L5), plantar flexion and eversion (S1) - graded on the MRC scale, with heel and toe walking.",
            "Sensory testing of the L4, L5 and S1 dermatomes and, critically, the S2-S4 saddle area to pinprick and light touch.",
            "Reflexes - knee jerk (L3-L4), ankle jerk (S1), plantar response; an upgoing plantar or hyperreflexia indicates a cord rather than a cauda equina lesion.",
            "Straight leg raise and crossed straight leg raise for L5 and S1 tension, femoral stretch test for L2 to L4.",
            "Digital rectal examination for resting anal tone and voluntary squeeze, and a bladder scan for post-void residual volume - a residual above 200 mL is highly significant.",
          ],
        },
        {
          heading: "Cauda equina syndrome - features, stages and urgency",
          points: [
            "Cardinal features - bilateral sciatica, saddle anaesthesia, bladder dysfunction, faecal incontinence or loss of anal tone, sexual dysfunction, and variable lower limb weakness with areflexia.",
            "Bladder involvement progresses from loss of the sensation of filling and of the stream, to difficulty initiating micturition and a poor stream, to painless retention with overflow incontinence.",
            "Incomplete cauda equina syndrome (CESI), where sensation is altered but voiding is preserved, carries a substantially better prognosis than cauda equina syndrome with retention (CESR).",
            "Emergency MRI of the whole spine is the investigation of choice and must be done on the same admission, out of hours if necessary; plain radiographs and CT are inadequate for neural tissue.",
            "Treatment is emergency surgical decompression, targeted within 24-48 hours of symptom onset, and the earlier the better within that window.",
            "Document the time of onset of each symptom and the findings of rectal and saddle examination - this is the most litigated diagnosis in musculoskeletal practice.",
          ],
        },
        {
          heading: "Management of the other groups and follow-up",
          points: [
            "Non-specific back pain - reassurance that hurt is not harm, stay active, avoid bed rest, an NSAID such as ibuprofen 400 mg three times daily or naproxen 500 mg twice daily with gastroprotection where indicated, paracetamol as an adjunct, heat, and early graded exercise.",
            "Radicular pain - the same measures, with amitriptyline 10-25 mg at night for persistent neuropathic pain (gabapentinoids are not recommended for sciatica), structured physiotherapy, and consideration of epidural corticosteroid injection for severe radicular pain.",
            "Refer for MRI and a surgical opinion if radicular pain persists beyond 6-12 weeks, if there is a progressive motor deficit, or if a red flag emerges; discectomy gives faster relief of leg pain with a similar outcome at one to two years.",
            "Treat the underlying serious pathology when identified - dexamethasone 16 mg daily and urgent MRI for suspected metastatic cord compression, 12 months of anti-tuberculosis treatment for Pott spine, culture-directed antibiotics for pyogenic spinal infection, bone protection after a fragility fracture.",
            "Safety-net every discharged patient in writing with the symptoms that mandate immediate return - new numbness of the perineum, any change in urination or defecation, worsening weakness, or fever.",
          ],
        },
      ],
      mustDraw: [
        "A table of L4, L5 and S1 root levels with motor, sensory and reflex findings.",
        "A flow chart: low back pain, then red flag screen, then cauda equina features present - emergency MRI whole spine and decompression within 48 hours; red flag without cauda equina - urgent MRI; radicular - conservative care for 6-12 weeks; non-specific - advice and analgesia with no imaging.",
      ],
      markSplit: [
        { part: "Triage into non-specific, radicular and serious pathology", marks: 1.5 },
        { part: "History including the bladder and saddle questions and red flag screen", marks: 1.5 },
        { part: "Examination and root localisation", marks: 2 },
        { part: "Cauda equina syndrome - features, staging and time to decompression", marks: 3 },
        { part: "Conservative management with drugs and doses", marks: 1.5 },
        { part: "Referral criteria and safety-netting", marks: 0.5 },
      ],
      keywords: ["cauda equina syndrome", "sciatica", "straight leg raise", "saddle anaesthesia", "post-void residual", "discectomy"],
    },
    {
      id: "neurology-low-back-pain-neuro-t2",
      paper: "II",
      kind: "enumerate",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question:
        "Enumerate the red flags in low back pain and outline the action required for each.",
      openingLines: [
        "Red flags in low back pain are clinical features that raise the probability of serious spinal pathology - cauda equina syndrome, malignancy, infection, fracture and inflammatory disease - which together account for under 2% of presentations but for almost all of the avoidable harm.",
        "Their purpose is not to be ticked off as a list but to change the next action, so each flag should be stated together with the pathology it suggests and the investigation or referral it demands.",
      ],
      answer: [
        {
          heading: "Cauda equina syndrome",
          points: [
            "Saddle or perineal anaesthesia, bilateral sciatica, urinary retention or overflow incontinence, faecal incontinence, loss of anal tone, sexual dysfunction.",
            "Action - digital rectal examination, perianal pinprick, post-void residual measurement, emergency MRI of the whole spine the same day, immediate spinal surgical referral for decompression within 24-48 hours.",
          ],
        },
        {
          heading: "Malignancy and metastatic cord compression",
          points: [
            "Age over 50 with new back pain, known cancer of the breast, prostate, lung, thyroid or kidney, myeloma, unexplained weight loss, unremitting night pain not relieved by lying down, and failure to improve after a month.",
            "Action - full blood count, ESR and CRP, calcium, alkaline phosphatase, PSA or serum protein electrophoresis; MRI of the whole spine within 24 hours if a deficit is present, with dexamethasone 16 mg daily started immediately.",
          ],
        },
        {
          heading: "Infection",
          points: [
            "Fever, night sweats, weight loss, unremitting night pain, gibbus or angular kyphosis, a paravertebral swelling, diabetes, dialysis, intravenous drug use, immunosuppression or recent spinal instrumentation.",
            "Action - blood cultures, ESR and CRP, chest radiograph, contrast MRI of the spine, and tissue or pus for CBNAAT, acid-fast bacilli and pyogenic culture; tuberculous spondylitis is treated with 12 months of anti-tuberculosis therapy, pyogenic infection with culture-directed intravenous antibiotics.",
          ],
        },
        {
          heading: "Fracture",
          points: [
            "Significant trauma, or minor trauma in a patient over 65 or on prolonged corticosteroids, sudden severe pain with midline bony tenderness, and known osteoporosis.",
            "Action - plain radiographs of the affected region, CT if the radiograph is equivocal or an unstable injury is suspected, analgesia, bracing where indicated, DEXA and osteoporosis treatment.",
          ],
        },
        {
          heading: "Inflammatory back pain and progressive neurological deficit",
          points: [
            "Onset before 45, insidious course, morning stiffness over 30 minutes, improvement with exercise but not with rest, night pain waking the patient in the second half of the night, alternating buttock pain, and a good response to NSAIDs - suggests axial spondyloarthritis; check HLA-B27, CRP and sacroiliac imaging and refer to rheumatology.",
            "Any progressive or severe motor deficit, such as a new foot drop or worsening weakness over days - urgent MRI and a spinal surgical opinion within days rather than weeks.",
          ],
        },
      ],
      mustDraw: [
        "A three-column table of red flag, suspected pathology and required action.",
      ],
      markSplit: [
        { part: "Cauda equina syndrome features and action", marks: 1.5 },
        { part: "Malignancy and cord compression", marks: 1 },
        { part: "Infection including tuberculous spondylitis", marks: 1 },
        { part: "Fracture", marks: 0.75 },
        { part: "Inflammatory back pain and progressive deficit", marks: 0.75 },
      ],
      keywords: ["red flags", "cauda equina", "Pott spine", "cord compression", "axial spondyloarthritis"],
    },
  ],
  mcqs: [
    {
      id: "neurology-low-back-pain-neuro-q1",
      stem: "A 45-year-old man has had left-sided sciatica for two weeks. Today he reports that he cannot feel the toilet seat, has passed urine only twice since morning and did not feel the stream. Examination shows reduced pinprick sensation over both buttocks and the perineum, and reduced resting anal tone. A bladder scan shows a post-void residual of 380 mL. What is the most appropriate next step?",
      options: [
        "Prescribe naproxen 500 mg twice daily and review in one week",
        "Arrange an outpatient MRI of the lumbar spine within two weeks and refer to physiotherapy",
        "Order urgent plain radiographs of the lumbosacral spine and catheterise",
        "Refer immediately for emergency MRI of the whole spine and a spinal surgical opinion the same day, with urinary catheterisation in the interim",
        "Start pregabalin 75 mg twice daily and refer for an epidural steroid injection",
      ],
      answer: 3,
      explanation:
        "Saddle anaesthesia, bilateral perineal sensory loss, reduced anal tone and a post-void residual of 380 mL constitute cauda equina syndrome, and the only acceptable action is emergency MRI of the whole spine with immediate spinal surgical referral, because outcome depends on decompression within 24-48 hours of symptom onset. An NSAID with review in a week and an outpatient scan in two weeks both allow an incomplete syndrome to progress to established retention, which is the point at which recovery of bladder and sexual function becomes unlikely. Plain radiographs cannot visualise neural tissue or a disc and add nothing beyond delay, although catheterisation is appropriate as an interim measure alongside, not instead of, referral. Pregabalin has no evidence base in sciatica and an epidural injection is contraindicated when the patient needs decompression.",
      difficulty: "easy",
    },
    {
      id: "neurology-low-back-pain-neuro-q2",
      stem: "A 38-year-old woman has right leg pain radiating to the dorsum of the foot. She cannot dorsiflex her right great toe (power 3/5) and has numbness in the first web space. Knee and ankle jerks are both normal and symmetrical. Straight leg raise reproduces her pain at 40 degrees on the right. Which nerve root is involved?",
      options: [
        "L3",
        "L4",
        "L5",
        "S1",
        "S2",
      ],
      answer: 2,
      explanation:
        "Weak extensor hallucis longus with sensory loss in the first web space and over the dorsum of the foot, in the presence of entirely normal reflexes, is the classic L5 pattern - L5 is the root with no tendon reflex of its own, which is exactly why the preserved reflexes point towards it rather than away from radiculopathy. L4 would reduce the knee jerk and cause weak knee extension with medial leg numbness. S1 would abolish the ankle jerk and cause weak plantar flexion with numbness of the lateral border of the foot. L3 affects hip flexion and knee extension with anterior thigh sensory loss and is tested by the femoral stretch test rather than the straight leg raise. S2 supplies the posterior thigh and, with S3 and S4, the saddle area, and does not produce toe dorsiflexion weakness.",
      difficulty: "easy",
    },
    {
      id: "neurology-low-back-pain-neuro-q3",
      stem: "A 34-year-old office worker has had low back pain for eight days after lifting a suitcase. The pain does not radiate below the buttock. There is no fever, weight loss, night pain, bladder symptom or saddle numbness, and the neurological examination of both legs is normal. He asks for an MRI. What is the correct management?",
      options: [
        "MRI of the lumbar spine to reassure him and exclude a disc prolapse",
        "Plain radiographs of the lumbosacral spine as a reasonable compromise",
        "Advice to stay active with an explanation that hurt is not harm, a short course of an NSAID with gastroprotection if indicated, and review if red flags develop - with no imaging",
        "Two weeks of bed rest with a lumbar corset and tramadol 50 mg three times daily",
        "Referral to a spinal surgeon for an opinion before any treatment is started",
      ],
      answer: 2,
      explanation:
        "This is non-specific mechanical low back pain with no red flags and a normal neurological examination, and the evidence-based response is advice to remain active, a short NSAID course and safety-netting, with no imaging at all. MRI in this setting almost always shows degenerative change or a disc bulge, findings present in most asymptomatic adults over 40, which produce a label, fear of movement and a referral cascade without improving outcome, so it does not reassure in the long run. Plain radiographs share that problem while also delivering a substantial gonadal radiation dose and being unable to see a disc. Bed rest and a corset actively worsen outcomes and tramadol is not first-line for an acute mechanical strain. A surgical referral before any conservative treatment inverts the order of care for a condition that resolves in most people within weeks.",
      difficulty: "easy",
    },
    {
      id: "neurology-low-back-pain-neuro-q4",
      stem: "A 55-year-old man with poorly controlled type 2 diabetes has three weeks of severe mid-thoracic back pain, worse at night, with evening fevers and 6 kg weight loss. There is marked tenderness over T9-T10 and a mild spastic paraparesis with brisk knee jerks and extensor plantars. ESR is 88 mm/hour. What is the most appropriate next investigation and initial action?",
      options: [
        "Plain radiographs of the thoracic spine and a trial of NSAIDs for two weeks",
        "Urgent contrast MRI of the whole spine, with tissue or pus sent for CBNAAT, acid-fast bacilli and pyogenic culture before committing to prolonged therapy",
        "Nerve conduction studies and electromyography of the lower limbs",
        "Lumbar puncture for cerebrospinal fluid analysis",
        "Start empirical anti-tuberculosis treatment immediately without any imaging or tissue diagnosis",
      ],
      answer: 1,
      explanation:
        "Thoracic back pain with night pain, fever, weight loss, a very high ESR and long tract signs is spinal infection with cord compression - tuberculous spondylitis being the commonest such cause in India, with pyogenic vertebral osteomyelitis and epidural abscess close behind in a poorly controlled diabetic - so urgent contrast MRI of the whole spine is mandatory, and tissue should be obtained for CBNAAT and culture because the two diagnoses have entirely different treatments. Plain radiographs miss early disease and a two-week NSAID trial wastes the window in which a compressing lesion can be decompressed before the paraparesis becomes fixed. Nerve conduction studies assess peripheral nerve, not cord, and are irrelevant to an upper motor neurone syndrome. Lumbar puncture below a compressive lesion risks deterioration and yields nothing here. Committing to 12 months of anti-tuberculosis treatment without imaging or tissue is unjustifiable when the alternative is a pyogenic abscess needing drainage and different antibiotics.",
      difficulty: "hard",
    },
    {
      id: "neurology-low-back-pain-neuro-q5",
      stem: "A 68-year-old man describes bilateral buttock and thigh heaviness with tingling that comes on after walking about 200 metres, is relieved within a minute or two of sitting down, and does not trouble him at all when he cycles or pushes a shopping trolley. Dorsalis pedis and posterior tibial pulses are strong bilaterally. Saddle sensation and bladder function are normal. What is the most likely diagnosis?",
      options: [
        "Peripheral arterial disease with vascular claudication",
        "Lumbar canal stenosis with neurogenic claudication",
        "Cauda equina syndrome",
        "Bilateral S1 radiculopathy from a disc prolapse",
        "Diabetic lumbosacral radiculoplexus neuropathy",
      ],
      answer: 1,
      explanation:
        "Posture-dependent bilateral leg symptoms that are relieved by sitting or by lumbar flexion, and are absent when cycling or leaning on a trolley, together with normal peripheral pulses, are the signature of neurogenic claudication from lumbar canal stenosis, because flexion enlarges the spinal canal while extension narrows it. Vascular claudication is excluded by the strong pulses and by the fact that it depends on the level of exertion rather than on posture, so cycling would provoke it rather than relieve it. Cauda equina syndrome is excluded by normal saddle sensation and bladder function and by the chronic exertional pattern. A bilateral S1 radiculopathy would give constant radicular pain below the knee with an absent ankle jerk rather than exertional heaviness relieved by flexion. Diabetic lumbosacral radiculoplexus neuropathy presents with severe asymmetrical thigh pain followed by proximal wasting and weight loss, not with a reproducible walking distance.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "neurology-low-back-pain-neuro-c1",
      front: "The five cardinal features of cauda equina syndrome.",
      back: "Bilateral sciatica, saddle (perineal) anaesthesia, bladder dysfunction, faecal incontinence or loss of anal tone, and sexual dysfunction, with variable lower limb weakness and areflexia. No single feature rules it in or out - ask and examine for all of them.",
    },
    {
      id: "neurology-low-back-pain-neuro-c2",
      front: "How does bladder involvement evolve in cauda equina syndrome, and why does it matter?",
      back: "Loss of the sensation of filling and of the stream, then difficulty initiating micturition with a poor stream, then painless retention with overflow. Incomplete disease (CESI) has a far better prognosis than established retention (CESR), so act on the earliest stage.",
    },
    {
      id: "neurology-low-back-pain-neuro-c3",
      front: "Investigation and timing for suspected cauda equina syndrome.",
      back: "Emergency MRI of the whole spine on the same admission, out of hours if needed, plus post-void residual measurement (over 200 mL is significant). Surgical decompression within 24-48 hours of symptom onset; document the time of onset of each symptom.",
    },
    {
      id: "neurology-low-back-pain-neuro-c4",
      front: "L4, L5 and S1 root patterns in one line each.",
      back: "L4 - weak knee extension and ankle dorsiflexion, medial leg numbness, reduced knee jerk. L5 - weak big toe dorsiflexion, first web space and dorsum of foot numbness, no reflex change. S1 - weak plantar flexion and eversion, lateral foot and sole numbness, absent ankle jerk.",
    },
    {
      id: "neurology-low-back-pain-neuro-c5",
      front: "Straight leg raise versus crossed straight leg raise.",
      back: "Straight leg raise reproduces radiating leg pain between 30 and 70 degrees and is sensitive but not specific for L5 and S1 root tension. The crossed test - raising the good leg reproduces pain in the bad leg - is much more specific and predicts a large central or paracentral disc.",
    },
    {
      id: "neurology-low-back-pain-neuro-c6",
      front: "When should low back pain be imaged?",
      back: "Never for non-specific back pain. Emergency MRI for suspected cauda equina, cord compression, spinal infection or a progressive motor deficit. Routine MRI for radicular pain failing 6-12 weeks of conservative care when surgery is being considered, or for a non-emergent red flag.",
    },
    {
      id: "neurology-low-back-pain-neuro-c7",
      front: "First-line drug treatment of acute low back pain and sciatica.",
      back: "An NSAID at the lowest effective dose for the shortest time - ibuprofen 400 mg TDS, naproxen 250-500 mg BD or diclofenac 50 mg TDS, with a PPI if over 60 or at gastrointestinal risk. Paracetamol 1 g QDS as an adjunct, tramadol 50 mg for a few days if severe. Amitriptyline 10-25 mg at night for persistent neuropathic pain.",
    },
    {
      id: "neurology-low-back-pain-neuro-c8",
      front: "Why should gabapentin and pregabalin not be prescribed for sciatica?",
      back: "Randomised evidence shows no benefit over placebo for sciatic leg pain, while sedation, dizziness, weight gain and misuse potential are real. Use exercise, an NSAID, amitriptyline or duloxetine for persistent pain, and consider epidural steroid injection for severe radicular pain.",
    },
    {
      id: "neurology-low-back-pain-neuro-c9",
      front: "Neurogenic versus vascular claudication.",
      back: "Neurogenic - bilateral buttock and leg heaviness, relieved by sitting or forward flexion, better uphill or leaning on a trolley, pulses normal. Vascular - calf cramp at a fixed distance, relieved by standing still regardless of posture, pulses reduced with bruits.",
    },
    {
      id: "neurology-low-back-pain-neuro-c10",
      front: "Tuberculosis of the spine (Pott disease) - clues and treatment.",
      back: "Thoracolumbar pain with night pain, fever, weight loss, gibbus, cold abscess; MRI shows contiguous vertebral destruction with relative disc preservation and a paravertebral collection. Treat with 12 months of ATT (2HRZE then 10 months continuation); surgery for instability, deformity or neurological deficit.",
    },
    {
      id: "neurology-low-back-pain-neuro-c11",
      front: "Suspected metastatic spinal cord compression - immediate action.",
      back: "Start dexamethasone 16 mg daily at once and arrange MRI of the whole spine within 24 hours, with oncology and spinal surgical referral. Do not wait for the scan to give the steroid.",
    },
    {
      id: "neurology-low-back-pain-neuro-c12",
      front: "What must be documented for every patient discharged with sciatica?",
      back: "That bladder function, bowel function and saddle sensation were asked about and were normal, and that written safety-netting advice was given to return immediately for perineal numbness, any change in urination or defecation, worsening weakness or fever.",
    },
  ],
  references: [
    "NICE Guideline NG59, Low back pain and sciatica in over 16s: assessment and management, 2016 (updated 2020)",
    "NICE Guideline NG75, Spinal metastases and metastatic spinal cord compression, 2023",
    "Todd NV and Dickson RA, Standards of care in cauda equina syndrome, British Journal of Neurosurgery 2016",
    "British Association of Spine Surgeons and Society of British Neurological Surgeons, Standards of Care for Investigation and Management of Cauda Equina Syndrome, 2018",
    "Mathieson S et al., Trial of pregabalin for acute and chronic sciatica, New England Journal of Medicine 2017",
    "Peul WC et al., Surgery versus prolonged conservative treatment for sciatica, New England Journal of Medicine 2007",
    "WHO Consolidated Guidelines on Tuberculosis, Module 4: Treatment - Drug-susceptible tuberculosis treatment, 2022, and India NTEP Technical and Operational Guidelines, 2021 - osteoarticular tuberculosis",
    "Hutchinson's Clinical Methods, 24th edition, 2018 - examination of the spine and lower limb neurology",
    "API Textbook of Medicine, 11th edition, 2019 - approach to low back pain",
  ],
});

const cases: ClinicalCase[] = [
  {
    id: "neurology-case-1",
    title: "Left hemiparesis of 2 days in a 62-year-old hypertensive diabetic - right middle cerebral artery territory ischaemic stroke",
    kind: "long",
    subjectId: "neurology",
    opening:
      "A 62-year-old retired schoolteacher from a taluk town, a known hypertensive for 12 years and type 2 diabetic for 9 years on irregular treatment, and a smoker of 20 beedis a day for 40 years, presents with weakness of the left arm and leg noticed on waking 2 days ago, with deviation of the angle of the mouth to the right and slurring of speech, without headache, vomiting, seizure or loss of consciousness.",
    minutes: 30,
    frequency: "core",
    sections: [
      {
        heading: "How to open the presentation",
        points: [
          "Give the identifying data, the risk factors and the presenting complaint with its exact timing in one breath, because in stroke the time of onset and the time last known to be well are the two facts on which the whole management turns.",
          "Say: 'Mr X, a 62-year-old retired schoolteacher, a known hypertensive for 12 years and type 2 diabetic for 9 years on irregular treatment, and a current beedi smoker, was last seen well at 10 pm two nights ago and woke at 6 am the next morning unable to lift his left arm or stand on his left leg, with deviation of the mouth to the right and slurred speech.'",
          "State the relevant negatives immediately after the complaint: no headache, no vomiting, no seizure, no loss of consciousness, no neck pain, no fever, no recent head injury, no chest pain or palpitations, and no previous transient episodes of weakness, numbness or visual loss.",
          "Mention in the opening what happened between onset and arrival - that he was carried to a private nursing home 8 hours after waking, had a CT scan reported as normal, was given aspirin and antihypertensives, and was referred here on day 2 - because the examiner will judge the delay and every decision made in it.",
          "Close the opening with the functional state now: he cannot walk without two people supporting him, needs help to eat and dress, has not choked on food or water since the onset, and has passed urine normally.",
        ],
      },
      {
        heading: "History of the presenting illness - onset, course and the negatives that matter",
        points: [
          "Establish the tempo precisely: the deficit was maximal on waking and has neither worsened nor improved over 48 hours, which fits a completed ischaemic stroke and argues against the progressive course of a tumour, subdural haematoma or an expanding haemorrhage.",
          "Characterise the weakness limb by limb: the left arm is weaker than the leg, the hand is worse than the shoulder, the face is involved on the same side as the limbs, and the patient noticed that the left hand feels heavy and numb - a cortical or capsular pattern rather than a spinal one.",
          "Ask directly for cortical symptoms that localise the lesion: does he ignore the left side of his body or bump into things on the left, is there loss of the left half of the visual field, is his speech slurred (dysarthria) or is he unable to find words (aphasia, which would be unexpected in a right-hemisphere lesion in a right-handed man)?",
          "Search for the warning events the family has not thought worth mentioning: transient weakness or numbness of a limb, a curtain coming down over one eye, brief slurring of speech or a fall in the preceding months, any of which would have been a transient ischaemic attack that was missed.",
          "Ask about symptoms of the alternative mechanisms: palpitations or a known irregular heartbeat pointing to atrial fibrillation, chest pain or breathlessness pointing to a recent infarction, neck pain or a recent neck manipulation pointing to dissection, and drenching sweats or missed meals pointing to hypoglycaemia in a man on a sulfonylurea.",
          "Document swallowing, speech intelligibility, bladder and bowel function, and whether he has had any fall, choking episode or breathlessness since the onset, since aspiration pneumonia, urinary retention and venous thrombosis are the complications that kill in the first fortnight.",
        ],
      },
      {
        heading: "Risk-factor work-up presented as a table",
        points: [
          "Present the vascular risk factors as a table with four columns - factor, duration, control and evidence of end-organ damage - because the examiner is marking the completeness of the work-up as much as the diagnosis, and a table makes the gaps impossible to hide.",
          "Hypertension: 12 years, diagnosed at a camp, treated with amlodipine 5 mg taken on most days, no home readings, last clinic reading a month ago 170/100 mmHg; enquire about previous nosebleeds, breathlessness, ankle swelling and any earlier stroke or TIA, and record the fundus and the ECG as the end-organ markers.",
          "Diabetes: 9 years, on metformin 500 mg twice daily and glimepiride 2 mg once daily, no HbA1c ever done, fasting sugars of 180-220 mg/dL when checked, with burning feet for a year and a healed foot ulcer 2 years ago; the end-organ markers are the retinopathy on fundoscopy, the monofilament and vibration sense in the feet, and the urine albumin.",
          "Tobacco: 20 beedis a day for 40 years, which is 40 pack-year equivalents; alcohol as 90 mL of arrack most evenings; no physical activity beyond walking to the market; diet with rice thrice a day, pickle at every meal and salt added at the table.",
          "Lipids and the vascular bed elsewhere: no lipid profile has ever been done; no history of angina, claudication or erectile dysfunction, all of which are surrogates for atherosclerosis at other sites; the carotid bruit and the peripheral pulses on examination belong in this row of the table.",
          "Cardiac sources of embolism and the family: no known rheumatic heart disease, no palpitations, no previous myocardial infarction; father died of a stroke at 65, one brother has diabetes and hypertension - a family history that makes screening of the children part of the management.",
        ],
      },
      {
        heading: "Past, drug, personal and socio-economic history",
        points: [
          "List every drug with its dose, frequency, who prescribed it and how regularly it is actually taken; a difference between the prescription and the intake is usually the single most important precipitant and is found only by asking the wife to bring the strips.",
          "Ask about drugs that matter for stroke: any antiplatelet or anticoagulant, NSAIDs for joint pain bought over the counter, steroids in indigenous preparations that raise blood pressure and sugar, and any recent stoppage of antihypertensives.",
          "Record previous hospital admissions, any surgery, any transfusion, and any history of tuberculosis or jaundice, and specifically any previous head injury or fall in the last 3 months that would raise the possibility of a chronic subdural haematoma.",
          "Socio-economic details decide what is possible: a pension of a fixed amount, a wife who is herself hypertensive, a son in the city, a two-storey house with the bedroom upstairs, a squat toilet, and 40 km to the nearest physiotherapist - each of these becomes an item in the rehabilitation plan.",
          "Ask what the family believes caused the stroke, what they expect from treatment and whether they have already consulted a traditional healer or started an oil massage, because the counselling that follows must start from where they are.",
        ],
      },
      {
        heading: "General and neurological examination to demonstrate",
        points: [
          "General survey: conscious and oriented, a right-handed man with a BMI of 27 kg/m2 and a waist of 98 cm, pulse 84 per minute and regular in rate and rhythm with all peripheral pulses palpable, blood pressure 168/96 mmHg in the right arm and 164/94 in the left, afebrile, no pallor, no carotid bruit on either side, no xanthelasma and no neck stiffness.",
          "Higher functions: alert, attentive, oriented in time, place and person, with fluent speech, intact comprehension, naming and repetition, and a mild flaccid dysarthria; test specifically for left-sided neglect by double simultaneous stimulation, line bisection and asking him to draw a clock, and for anosognosia by asking what is wrong with his left hand.",
          "Cranial nerves: visual acuity and fields by confrontation normal in all quadrants, pupils equal and reacting, full extra-ocular movements with no gaze preference, a left upper motor neuron facial weakness sparing the forehead, tongue midline, and a normal gag - and say that you tested the gag but rely on a formal swallow screen.",
          "Motor system: normal bulk, tone reduced in the left arm and increasing in the left leg on day 2, power 2/5 at the left shoulder and elbow, 1/5 in the left hand grip, 3/5 at the left hip and knee and 2/5 at the ankle, with 5/5 on the right; left pronator drift and a positive left arm and leg drift.",
          "Reflexes: left biceps, triceps, supinator, knee and ankle jerks brisker than the right, left plantar extensor with a positive Hoffmann sign, right plantar flexor, and no clonus yet; sensation reduced to pin-prick and light touch over the left face, arm and leg with impaired joint position sense in the left fingers and toes.",
          "Cerebellar signs cannot be assessed on the weak side and are normal on the right; gait cannot be tested safely; complete the examination with the fundus (grade 2 hypertensive changes and scattered dot haemorrhages of non-proliferative diabetic retinopathy), the feet (loss of monofilament sensation at three sites bilaterally) and the cardiovascular system (normal heart sounds, no murmur, no signs of failure).",
        ],
      },
      {
        heading: "Localising the lesion and grading the deficit before the summary",
        points: [
          "Put the findings together aloud: a left upper motor neuron facial weakness with left arm-predominant hemiparesis, left hemisensory loss including cortical modalities, and visual and spatial neglect, all without aphasia in a right-handed man, localise to the right cerebral hemisphere in the territory of the right middle cerebral artery, involving the cortex and not merely the internal capsule.",
          "Explain why it is not lacunar: a pure motor hemiparesis affecting face, arm and leg equally with no sensory or cortical signs would be a capsular lacune; the presence of cortical sensory loss and neglect makes a larger cortical or subcortical infarct from a branch or trunk occlusion more likely.",
          "Grade the deficit with the NIH Stroke Scale and give the number - for this patient about 11 (facial palsy 2, left arm 3, left leg 2, sensory 1, dysarthria 1, extinction and inattention 2) - and give the pre-stroke and current modified Rankin Scale (0 and 4 respectively).",
          "State the mechanism you favour and why: in a hypertensive, diabetic smoker with no atrial fibrillation on examination and no cardiac history, large-artery atherosclerosis of the carotid or intracranial middle cerebral artery is the likeliest cause, with a cardioembolic source to be excluded by rhythm monitoring and echocardiography.",
          "Only then give the summary statement, in one sentence, so that the examiner hears a diagnosis that has been reasoned to rather than announced.",
        ],
      },
    ],
    summaryStatement:
      "This is a 62-year-old right-handed retired schoolteacher, a poorly controlled hypertensive for 12 years and type 2 diabetic for 9 years with retinopathy and peripheral neuropathy, and a heavy beedi smoker, who presents with a sudden-onset, non-progressive left upper motor neuron facial weakness and left arm-predominant hemiparesis with hemisensory loss, cortical sensory impairment and left-sided neglect, noticed on waking 2 days ago, without headache, vomiting, seizure or altered consciousness, and with a normal CT on day 1, a regular pulse and no carotid bruit - a clinical picture of an acute ischaemic stroke in the territory of the right middle cerebral artery, most probably due to large-artery atherosclerosis, with an NIHSS of about 11 and a current modified Rankin Scale of 4, outside the window for reperfusion therapy and now in the phase of secondary prevention and rehabilitation.",
    differential: [
      {
        diagnosis: "Acute ischaemic stroke in the right middle cerebral artery territory from large-artery atherosclerosis",
        forIt:
          "Sudden onset with a deficit maximal at onset, a cortical pattern of left hemiparesis with neglect and cortical sensory loss, a normal early CT, and every major risk factor for atherosclerosis in a man of 62.",
        againstIt:
          "Nothing clinically, but the mechanism cannot be confirmed at the bedside; a cardioembolic source is found in about a fifth of such patients on monitoring and echocardiography, and the infarct and the vessel must be shown on imaging.",
      },
      {
        diagnosis: "Hypertensive intracerebral haemorrhage in the right putamen or internal capsule",
        forIt:
          "A poorly controlled hypertensive with a blood pressure of 168/96 on day 2; a deep haemorrhage produces exactly this hemiparesis with hemisensory loss.",
        againstIt:
          "No headache, vomiting or depression of consciousness at onset, no progression over hours, and a CT on day 1 reported as normal - haemorrhage is never missed by CT in the first 24 hours, so this is excluded provided the film is seen and confirmed.",
      },
      {
        diagnosis: "Chronic subdural haematoma or an intracranial tumour",
        forIt:
          "Age over 60, and the deficit was noticed on waking so its true onset is uncertain; both can present with a hemiparesis that the family perceives as sudden.",
        againstIt:
          "No head injury, no anticoagulant use, no headache or drowsiness, no fluctuation of the deficit and no progression over 48 hours, and the CT was normal; a subdural or a tumour would have been seen, though a small isodense subdural can be missed and an MRI settles any doubt.",
      },
      {
        diagnosis: "Stroke mimic - hypoglycaemia, Todd's paresis or hemiplegic migraine",
        forIt:
          "A diabetic on glimepiride who woke with a deficit, and a seizure in sleep with a post-ictal paresis could have gone unwitnessed.",
        againstIt:
          "The deficit has persisted unchanged for 48 hours with a normal capillary glucose, there is no tongue bite, incontinence or history of seizures, no headache, and cortical sensory loss with neglect is not a feature of hypoglycaemia or Todd's paresis.",
      },
    ],
    investigations: [
      {
        test: "Capillary blood glucose at first contact, then fasting and post-prandial glucose and HbA1c",
        why: "Hypoglycaemia is the commonest treatable stroke mimic and must be excluded before anything else; HbA1c defines the diabetes control that the secondary prevention plan must correct.",
        expected:
          "Capillary glucose 210 mg/dL at presentation; HbA1c around 9.5%, confirming long-standing poor control rather than stress hyperglycaemia.",
      },
      {
        test: "Non-contrast CT scan of the head, reviewed personally, and repeated or replaced by MRI with diffusion-weighted imaging if the first film was normal",
        why: "CT excludes haemorrhage and a mass lesion at once but is normal in up to half of ischaemic strokes in the first 24 hours; diffusion-weighted MRI shows the infarct within minutes of onset and defines its size and territory.",
        expected:
          "CT on day 2 showing a hypodense area in the right insular cortex and frontoparietal operculum with loss of grey-white differentiation and no haemorrhagic transformation; MRI diffusion restriction in the right middle cerebral artery territory, sparing the basal ganglia.",
      },
      {
        test: "12-lead ECG at admission and continuous or Holter rhythm monitoring for at least 24-72 hours",
        why: "To look for atrial fibrillation, which changes the antithrombotic from an antiplatelet to an anticoagulant, and for a recent or old myocardial infarction and left ventricular hypertrophy as markers of end-organ damage.",
        expected:
          "Sinus rhythm with left ventricular hypertrophy by voltage criteria and a strain pattern; no paroxysmal atrial fibrillation on 24 hours of monitoring, which does not exclude it and justifies longer monitoring if the stroke is cortical and no other cause is found.",
      },
      {
        test: "Fasting lipid profile, complete blood count, renal function with electrolytes, liver function tests, urine albumin-to-creatinine ratio and ESR",
        why: "The lipid profile sets the statin baseline, the creatinine and potassium decide the choice and dose of antihypertensive and of metformin, the albuminuria stages the diabetic kidney, the blood count excludes polycythaemia and thrombocytosis, and the ESR screens for vasculitis and endocarditis.",
        expected:
          "LDL cholesterol 140 mg/dL, triglycerides 210 mg/dL, HDL 34 mg/dL; haemoglobin 13.5 g/dL, creatinine 1.1 mg/dL with an eGFR of about 70 mL/min, potassium 4.2 mmol/L, urine albumin-to-creatinine ratio 80 mg/g (moderately increased), ESR 18 mm in the first hour.",
      },
      {
        test: "Carotid and vertebral duplex ultrasonography, followed by CT or MR angiography of the neck and intracranial vessels if a stenosis is found",
        why: "A symptomatic internal carotid stenosis of 70-99% on the side of the stroke is an indication for endarterectomy within 2 weeks, and intracranial atherosclerosis, common in Indian patients, changes the intensity of medical treatment.",
        expected:
          "Right internal carotid stenosis of 50-60% with a heterogeneous plaque and a peak systolic velocity of 150-200 cm/s, left carotid with intimal thickening only; angiography confirming the degree of stenosis and showing a patent right middle cerebral artery.",
      },
      {
        test: "Transthoracic echocardiography, with transoesophageal echocardiography reserved for a cortical infarct with no cause found",
        why: "To look for a cardiac source of embolism - a dilated left atrium, mitral stenosis, a left ventricular thrombus or an akinetic segment, valvular vegetations - and to document the left ventricular hypertrophy and function that stage the hypertension.",
        expected:
          "Concentric left ventricular hypertrophy with an ejection fraction of 58%, grade 1 diastolic dysfunction, a normal-sized left atrium, no thrombus, no valvular lesion and no regional wall motion abnormality.",
      },
      {
        test: "Bedside swallow screen at admission, chest radiograph, and a fundus and foot examination recorded as part of the diabetic assessment",
        why: "Dysphagia is present in about half of hemispheric strokes and aspiration pneumonia is the commonest cause of death in the first week; the radiograph looks for aspiration and for the cardiomegaly of hypertension; the retinopathy and neuropathy define the diabetic complications that the examiner marks separately.",
        expected:
          "A passed water swallow test with no cough or wet voice, a chest film with a cardiothoracic ratio of 0.52 and clear lung fields, non-proliferative diabetic retinopathy with grade 2 hypertensive changes, and loss of protective sensation in both feet.",
      },
    ],
    management: [
      {
        heading: "The acute phase on day 2 - what the family physician does now",
        points: [
          "He is outside the 4.5-hour window for intravenous thrombolysis and the 6-24 hour window for thrombectomy, so treatment is **aspirin 300 mg at once (once haemorrhage is excluded on CT) and then 75-150 mg daily**, with clopidogrel 75 mg substituted if aspirin is not tolerated; in a minor stroke (NIHSS 3 or less) presenting within 24 hours, dual therapy with clopidogrel for 21 days would have been given, but neither the severity nor the timing allows it here.",
          "**Do not lower the blood pressure in the first 48-72 hours unless it exceeds 220/120 mmHg** (or 185/110 if reperfusion were planned) or there is heart failure, aortic dissection or hypertensive encephalopathy; the penumbra depends on perfusion pressure, and the antihypertensives given at the nursing home should be held and reintroduced after 72 hours.",
          "Keep the blood glucose between 140 and 180 mg/dL with subcutaneous insulin if needed, avoid hypoglycaemia, keep the temperature below 37.5 C with paracetamol and treat any infection, and give oxygen only if saturation falls below 94% - the three physiological targets that protect the penumbra.",
          "Nil by mouth until a bedside swallow screen is passed, then a soft diet with supervised feeding sitting upright; nasogastric feeding within 24 hours if the screen fails, with a speech-language reassessment before it is removed.",
          "Prevent the complications that kill: 30 degrees head-up positioning, 2-hourly turning and a pressure-relieving mattress, intermittent pneumatic compression or, if unavailable, early mobilisation and hydration for venous thromboembolism (low-dose heparin from day 2 if immobile), a bladder scan rather than a routine catheter, and physiotherapy starting within 24-48 hours with the family taught the positioning of the affected shoulder.",
          "Admit or refer to a centre with CT, monitoring and a physiotherapist under the district stroke pathway; the family physician's role before transfer is the glucose, the airway, the position, the swallow screen, the aspirin and the accurate documentation of the time of onset.",
        ],
      },
      {
        heading: "Secondary prevention - antithrombotic, statin and blood pressure",
        points: [
          "**Antiplatelet for life:** aspirin 75 mg daily or clopidogrel 75 mg daily; switch to a **DOAC or warfarin (INR 2-3)** only if atrial fibrillation or another cardioembolic source is found, starting about 4-14 days after a moderate stroke once haemorrhagic transformation has been excluded, and never combine long-term aspirin with an anticoagulant without a specific indication.",
          "**High-intensity statin:** atorvastatin 40-80 mg at night regardless of the baseline LDL, targeting an **LDL below 70 mg/dL** (SPARCL reduced recurrent stroke by 16%, and the Treat Stroke to Target trial showed fewer events with a target below 70 than below 100), with ezetimibe 10 mg added if the target is not reached in 8-12 weeks; repeat the lipid profile at 3 months and liver enzymes only if symptomatic.",
          "**Blood pressure:** reintroduce drugs after 72 hours aiming at **below 130/80 mmHg**, using a thiazide-like diuretic with an ACE inhibitor or ARB as the base (PROGRESS: perindopril with indapamide cut recurrent stroke by 43%), which also suits his albuminuria; amlodipine is added as the third agent, and a home monitor and a reading diary are prescribed like a drug.",
          "**Carotid revascularisation:** a symptomatic stenosis of 70-99% needs endarterectomy within 2 weeks of the event, and 50-69% is considered case by case; at 50-60% on the symptomatic side he is referred to a vascular surgeon for a decision on the angiogram, and intensive medical therapy is continued whatever is decided.",
          "Write the antithrombotic, the statin and the blood pressure drugs on one card in the local language with the reason for each, because at one year fewer than half of Indian stroke patients are still on all three, and adherence is the intervention with the largest effect size.",
        ],
      },
      {
        heading: "Diabetes, tobacco and lifestyle",
        points: [
          "Aim for an **HbA1c of about 7%** without hypoglycaemia: continue metformin (eGFR above 45), stop glimepiride while intake is uncertain and restart cautiously, and prefer an SGLT2 inhibitor or a GLP-1 receptor agonist as the add-on for their cardiovascular and renal benefit; pioglitazone reduces recurrent stroke in insulin-resistant patients (IRIS trial) but is avoided here because of weight gain and fluid retention with left ventricular hypertrophy.",
          "**Complete cessation of beedis** is the single most effective lifestyle intervention, halving recurrent stroke risk within 2-5 years; offer brief advice at every visit, nicotine replacement or bupropion, and enrol him with the tobacco cessation service; the wife and son are asked to keep the house tobacco-free.",
          "Salt to **under 5 g a day** - no pickle, papad or added salt at the table, the advice given to the person who cooks; a diet built on the family's own rice, vegetables, pulses and fish, with alcohol stopped for 3 months and then limited to nil or one drink, and a target weight loss of 5-7%.",
          "Physical activity is prescribed as part of rehabilitation: assisted walking from the first week progressing to 30 minutes of walking on most days as recovery allows, with the physiotherapist setting the programme.",
          "Screen the wife and the children for hypertension, diabetes and tobacco use at the same visit, because the family history and the shared diet make them the next patients.",
        ],
      },
      {
        heading: "Rehabilitation, complications and the family",
        points: [
          "Rehabilitation starts on day 1 and is task-oriented: correct positioning of the paralysed shoulder to prevent subluxation and pain, passive then active-assisted range of motion, sitting balance, transfers, standing and gait training with a quadripod stick and an ankle-foot orthosis if the foot drops, and hand function work with constraint-induced movement therapy once some extension returns.",
          "Anticipate and treat the specific complications: spasticity (stretching, positioning, oral baclofen or botulinum toxin for a focal problem), shoulder pain, post-stroke depression in a third of patients (screen at 4-6 weeks with the PHQ-9 and treat with an SSRI), urinary incontinence, constipation, falls and pressure sores.",
          "Dysphagia review and a speech-language therapist for the dysarthria; a home programme is written for the wife, who becomes the primary therapist, with pictures rather than text.",
          "Counsel the family about the expected course: most motor recovery occurs in the first 3 months and continues to 6 months, the leg recovers more than the arm, and neglect tends to improve; set concrete goals such as walking indoors with a stick by 3 months and independent toileting.",
          "Practical matters the family will not ask about: moving the bed downstairs, a commode chair, a rail in the bathroom, the disability certificate, a caregiver allowance if available, and a discussion about driving, which is not permitted for at least a month and not until a formal assessment.",
        ],
      },
      {
        heading: "Follow-up and the family physician's register",
        points: [
          "Review at 1 week after discharge, then monthly for 3 months and 3-monthly thereafter, each visit checking blood pressure, capillary glucose, adherence to the three drug classes, tobacco, mood, swallowing, the skin and the shoulder, and the functional goal set at the last visit.",
          "Laboratory follow-up: lipid profile and liver enzymes at 3 months, HbA1c 3-monthly until stable then 6-monthly, creatinine and potassium 2 weeks after starting or increasing the ACE inhibitor and then annually, and an annual fundus, foot and urine albumin check.",
          "Enter him in the practice non-communicable disease register and on the NP-NCD platform so that free drugs from the Health and Wellness Centre are not interrupted, and check that the PM-JAY card covers the carotid surgery if it is advised.",
          "Teach the family the FAST message for recurrence and the address of the nearest thrombolysis-capable hospital, because the next event, if it comes, should reach a CT within the window that this one missed.",
        ],
      },
    ],
    viva: [
      {
        q: "Why was this patient not thrombolysed, and could anything have been done differently?",
        a: "He woke with the deficit, so the time last known well was 10 pm, 8 hours before he was found and 16 hours before he reached a hospital - outside the 4.5-hour window for alteplase or tenecteplase. Wake-up stroke can be treated within 4.5 hours of waking if MRI shows a diffusion-FLAIR mismatch (WAKE-UP trial), and thrombectomy can be offered up to 24 hours with a large-vessel occlusion and a favourable perfusion study (DAWN and DEFUSE-3), but neither was available and he arrived too late for both. The lesson is that the family did not recognise the signs and went to a centre without a stroke pathway; the FAST message and knowing where the nearest CT is are the two things that would have changed the outcome.",
      },
      {
        q: "How do you decide clinically whether this is a cortical or a lacunar stroke, and why does it matter?",
        a: "A lacunar syndrome is a pure motor hemiparesis, a pure sensory stroke, a sensorimotor stroke, ataxic hemiparesis or dysarthria-clumsy hand, with no cortical signs. The presence of neglect, cortical sensory loss, a visual field defect, aphasia or a gaze preference indicates cortical involvement. It matters because a lacune is small-vessel disease and needs only medical treatment, whereas a cortical infarct points to large-artery atherosclerosis or embolism from the heart, so the carotids and the heart must be studied and the treatment may include endarterectomy or anticoagulation.",
      },
      {
        q: "What is your blood pressure target after a stroke and when do you start treating?",
        a: "In the first 48-72 hours, permissive hypertension: treat only above 220/120 mmHg, or above 185/110 if reperfusion therapy is planned, and lower gently by not more than 15% in 24 hours. After 72 hours, or at discharge in a stable patient, start long-term treatment aiming for below 130/80 mmHg. The preferred regimen is a thiazide-like diuretic with an ACE inhibitor or ARB, from the PROGRESS trial, adding a calcium channel blocker as needed; the lower target applies unless the patient has a bilateral severe carotid stenosis, where 140/90 is safer until the carotid is treated.",
      },
      {
        q: "Which antiplatelet, at what dose, and is there a role for dual antiplatelet therapy here?",
        a: "Aspirin 300 mg as a loading dose within 48 hours once haemorrhage is excluded, then aspirin 75-150 mg daily or clopidogrel 75 mg daily indefinitely. Dual antiplatelet therapy with aspirin and clopidogrel for 21 days reduces early recurrence after a minor stroke (NIHSS 3 or less) or a high-risk TIA when started within 24 hours (CHANCE and POINT), and for 90 days after a stroke due to a symptomatic intracranial stenosis of 70-99% (SAMMPRIS). This patient has an NIHSS of 11 and presented at 48 hours, so dual therapy would add bleeding without benefit and he gets a single agent.",
      },
      {
        q: "What statin dose will you use and what target will you aim for?",
        a: "Atorvastatin 40-80 mg, or rosuvastatin 20 mg, started during the admission irrespective of the baseline LDL. The SPARCL trial showed that atorvastatin 80 mg reduced recurrent stroke by 16% and major cardiovascular events by 20%, and the Treat Stroke to Target trial showed that an LDL target below 70 mg/dL prevents more events than a target of 90-110. So the target is LDL below 70 mg/dL, with ezetimibe added if a maximal statin does not reach it. Statins are continued for life; the only reason to stop is intolerance, and a raised transaminase below three times normal is not one.",
      },
      {
        q: "How would you screen this patient for dysphagia, and why does it matter so much?",
        a: "Before anything is given by mouth, a bedside screen: the patient sits upright and alert, and is given a teaspoon of water three times and then a small glass of water while the examiner watches for coughing, choking, drooling, a wet or gurgling voice, or a fall in saturation. Any of these fails the screen and the patient stays nil by mouth with a nasogastric tube until a speech-language therapist assesses him. It matters because dysphagia occurs in about half of hemispheric strokes and aspiration pneumonia is the leading cause of death in the first week, and because the family will otherwise start feeding him as an act of care.",
      },
      {
        q: "When is carotid endarterectomy indicated after a stroke and how soon should it be done?",
        a: "For a symptomatic internal carotid stenosis of 70-99% on the side of a non-disabling stroke or TIA, endarterectomy reduces the 5-year risk of ipsilateral stroke by about 16% absolute (NASCET and ECST), and the benefit is greatest if surgery is done within 2 weeks of the event and falls sharply after 12 weeks. For 50-69% stenosis the benefit is smaller and is considered in men, in those with hemispheric rather than retinal symptoms, and with a low perioperative risk; below 50% there is no benefit. Near-occlusion and a disabling stroke are not operated on. Stenting is an alternative in younger patients or where the neck is hostile.",
      },
      {
        q: "What will you tell the family about the prognosis and the chance of another stroke?",
        a: "About 20-25% of patients with a stroke of this severity die within a year, mostly from complications in the first month, and of the survivors about half regain independence for basic activities. Recovery is fastest in the first 3 months and most of what will return has returned by 6 months; the leg recovers better than the hand. The risk of another stroke is highest in the first weeks - around 10% in the first year without treatment - and is more than halved by taking the antiplatelet, the statin and the blood pressure drugs every day, stopping beedis and controlling the diabetes. The family should know the FAST signs and the nearest hospital with CT, and should reach it within an hour of any new symptom.",
      },
    ],
    pitfalls: [
      "Presenting the deficit without checking and stating the capillary glucose, which is the first act in any patient with a focal deficit and is asked about in almost every stroke viva.",
      "Lowering the blood pressure aggressively in the first 72 hours because the reading looks alarming; permissive hypertension protects the penumbra and the examiner will ask for the threshold and the target by number.",
      "Giving aspirin, or an injection into the muscle, before haemorrhage has been excluded on CT, or accepting a report of a normal CT without asking to see the film and its timing.",
      "Allowing feeding before a swallow screen, and forgetting the pressure areas, the bladder and the paralysed shoulder in the management plan - the complications that decide survival in the first fortnight.",
      "Describing the weakness without localising it - the examiner wants to hear cortical versus lacunar and right middle cerebral artery territory, with the NIHSS and modified Rankin Scale as numbers.",
      "Leaving the risk-factor work-up incomplete: no lipid profile, no carotid Doppler, no rhythm monitoring or echocardiogram, so that the secondary prevention plan has no evidence base and the carotid that needs surgery is never found.",
    ],
    references: [
      "AHA/ASA Guidelines for the Early Management of Patients with Acute Ischemic Stroke, 2019 update",
      "AHA/ASA Guideline for the Prevention of Stroke in Patients with Stroke and Transient Ischemic Attack, 2021",
      "NICE Guideline NG128, Stroke and transient ischaemic attack in over 16s: diagnosis and initial management, updated 2022",
      "Indian Academy of Neurology guidelines on secondary prevention of stroke, 2022",
      "SPARCL trial (atorvastatin after stroke or TIA), NEJM 2006; Treat Stroke to Target trial, NEJM 2020",
      "PROGRESS Collaborative Group, perindopril-based blood pressure lowering after stroke, Lancet 2001",
      "CHANCE and POINT trials of dual antiplatelet therapy after minor stroke and high-risk TIA, NEJM 2013 and 2018",
      "Harrison's Principles of Internal Medicine, 21st edition, 2022 - cerebrovascular diseases",
      "Hutchison's Clinical Methods, 24th edition, 2018 - the nervous system",
    ],
  },
  {
    id: "neurology-case-2",
    title: "Short case: acute unilateral facial weakness - examining and presenting a lower motor neuron facial palsy",
    kind: "short",
    subjectId: "neurology",
    opening:
      "A 34-year-old woman, a tailor with no known illness, presents with drooping of the right side of the face noticed on waking 3 days ago, inability to close the right eye, water dribbling from the right angle of the mouth when she drinks, and a dull ache behind the right ear that began the day before the weakness, with no limb weakness, no change in hearing, no rash and no fever.",
    minutes: 15,
    frequency: "core",
    sections: [
      {
        heading: "The instruction and the first ten seconds - inspection at rest",
        points: [
          "The examiner will say 'examine this patient's face' or 'examine the cranial nerves'; before touching the patient, stand at the foot of the bed and describe what is seen at rest, because facial asymmetry is a diagnosis made by inspection and the marks for it are given in the first half minute.",
          "At rest the right side of the face is smooth: the right forehead has lost its horizontal creases, the right palpebral fissure is wider than the left, the right nasolabial fold is flattened and the right angle of the mouth droops, and saliva has collected at the right corner.",
          "Look for the clues to the cause while still inspecting: a vesicular rash on the pinna or in the external auditory meatus, a swelling over the parotid, a scar behind the ear, a hypopigmented anaesthetic patch on the face or arm that would suggest leprosy, and whether the eye is red or watering.",
          "Ask the patient to speak and note that the labial consonants are slurred and that she covers her mouth with her hand - the functional consequences are part of the findings.",
          "State the handedness and ask her to smile, and describe the asymmetry that appears: the left angle of the mouth is drawn up and the right does not move, so that the face deviates to the left.",
        ],
      },
      {
        heading: "Testing the muscles of facial expression in order, from above down",
        points: [
          "Ask her to look up and wrinkle the forehead: the left forehead furrows and the right stays smooth, and the right eyebrow cannot be raised - this is the finding that separates a lower motor neuron from an upper motor neuron lesion and it must be tested and stated first.",
          "Ask her to close both eyes tightly against resistance: the left closes with the lashes buried, the right does not close fully, a 4 mm band of sclera remains visible, and as she tries the right eyeball rolls upwards and outwards - Bell's phenomenon, which is a normal synkinesis made visible by the failure of lid closure.",
          "Ask her to show her teeth, blow out the cheeks against resistance and whistle: the right cheek cannot be puffed and air escapes from the right corner, the right side of the mouth does not retract, and she cannot purse the lips.",
          "Ask her to tense the neck as if grimacing: the right platysma does not stand out; and demonstrate that emotional and volitional movements are equally lost, since a purely volitional weakness with preserved emotional smiling would point to a cortical lesion.",
          "Grade the weakness on the House-Brackmann scale and give the number - here grade IV, moderately severe dysfunction with incomplete eye closure and obvious asymmetry at rest - so that recovery can be measured at the next visit.",
        ],
      },
      {
        heading: "Localising the lesion along the course of the nerve",
        points: [
          "Test taste on the anterior two-thirds of the tongue with salt and sugar on each side with the tongue protruded and held: loss on the right indicates that the lesion is proximal to the point where the chorda tympani leaves the nerve in the facial canal.",
          "Ask about hyperacusis - whether ordinary sounds are unpleasantly loud in the right ear - which indicates involvement of the nerve to stapedius, proximal to its branch in the vertical part of the canal.",
          "Ask about dryness of the right eye or, conversely, tearing; reduced lacrimation places the lesion at or proximal to the geniculate ganglion where the greater petrosal nerve leaves, whereas tearing is more often from lid failure and exposure.",
          "Examine the external auditory canal and tympanic membrane with an otoscope, and the palate and pinna, for the vesicles of herpes zoster; palpate the parotid gland and the mastoid, and look behind the ear for the scar of mastoid surgery.",
          "Present the conclusion of this step as a location, not a disease: an infranuclear lesion of the right facial nerve, proximal to the chorda tympani and the nerve to stapedius but with lacrimation preserved, placing it in the facial canal distal to the geniculate ganglion.",
        ],
      },
      {
        heading: "Excluding an upper motor neuron lesion and the neighbouring nerves",
        points: [
          "Say explicitly why this is not an upper motor neuron lesion: the forehead is involved, the weakness is equal for emotional and volitional movement, and there is no accompanying weakness of the arm or leg on the same side, no dysarthria beyond the labial slurring, and no hyperreflexia or extensor plantar on the right.",
          "Examine the fifth nerve - facial sensation in the three divisions, the corneal reflex on both sides, and the masseters and pterygoids - because a lesion at the cerebellopontine angle involves the fifth nerve early and a lost corneal reflex on the affected side is the sign that changes the diagnosis.",
          "Examine the sixth nerve for lateral rectus weakness and the eighth nerve with a whispered voice, Rinne and Weber tests: a pontine lesion involves the sixth nerve with the seventh, and an acoustic neuroma produces sensorineural deafness before facial weakness.",
          "Test cerebellar function on the right - finger-nose, heel-shin, rapid alternating movements and gait - and examine the other side of the face carefully, since bilateral facial palsy is a different differential altogether: Guillain-Barre syndrome, sarcoidosis, Lyme disease, leprosy and HIV seroconversion.",
          "Complete the screen with the limbs for weakness and reflexes, palpation of the ulnar and greater auricular nerves for thickening, and a general look for the lymphadenopathy, parotid enlargement or skin lesions that would point to a systemic cause.",
        ],
      },
      {
        heading: "The eye and the complications - what happens if this is neglected",
        points: [
          "Examine the right eye closely: the cornea should be clear and the conjunctiva white; a red eye, photophobia, a dull corneal reflection or a fluorescein-staining defect means exposure keratopathy, which is the one complication of a facial palsy that costs sight and the one the examiner expects the candidate to have thought of.",
          "Ask about and look for the late sequelae that appear after 3-4 months in incompletely recovered palsies: synkinesis (the eye closes when she smiles or the mouth twitches when she blinks), tearing while eating (crocodile tears from misdirected regeneration), and hemifacial spasm or contracture that makes the affected side look tighter at rest.",
          "Check that she can drink from a cup and retain food in the mouth, and ask about weight loss and embarrassment at work, since the functional and psychological burden is real and is part of the presentation.",
          "Note the blood pressure and ask about polyuria and polydipsia, because diabetes and hypertension are associated with facial palsy and are found for the first time in a proportion of adults presenting with it.",
        ],
      },
      {
        heading: "Presenting the findings, then the diagnosis",
        points: [
          "Present the positive findings in the order they were found: 'On inspection there is asymmetry of the face at rest with loss of the right forehead creases, widening of the right palpebral fissure, flattening of the right nasolabial fold and drooping of the right angle of the mouth; on testing there is weakness of frontalis, orbicularis oculi with incomplete closure and a Bell's phenomenon, buccinator, orbicularis oris and platysma on the right, with loss of taste on the anterior two-thirds of the right side of the tongue and hyperacusis, and preserved lacrimation.'",
          "Then give the significant negatives: 'The corneal reflex is present bilaterally, the fifth, sixth and eighth nerves are normal, there are no cerebellar signs, no long-tract signs, no vesicles in the ear or on the palate, no parotid swelling, no thickened nerves and no skin lesions, and the cornea is clear.'",
          "Only now name the localisation and the diagnosis: 'These findings indicate a right lower motor neuron facial nerve palsy of infranuclear type, localised to the facial canal distal to the geniculate ganglion, House-Brackmann grade IV, and in the absence of any cause on examination the most likely diagnosis is idiopathic facial palsy - Bell's palsy - presenting on day 3.'",
          "Offer, unasked, the two things you would do before she leaves: confirm that the eye is protected and check a capillary glucose, and say that the diagnosis is one of exclusion that will be revisited if recovery has not begun by 3 weeks.",
        ],
      },
    ],
    summaryStatement:
      "This is a 34-year-old right-handed woman with no known illness who presents with a 3-day history of acute right-sided facial weakness preceded by retro-auricular pain, with on examination a right lower motor neuron facial palsy involving the forehead, incomplete eye closure with a Bell's phenomenon, loss of taste on the anterior two-thirds of the right tongue and hyperacusis with preserved lacrimation, House-Brackmann grade IV, with intact fifth, sixth and eighth cranial nerves, no cerebellar or long-tract signs, no vesicles, no parotid mass and a clear cornea - an infranuclear right facial nerve palsy most probably idiopathic in origin, presenting within the window in which corticosteroids improve the chance of complete recovery.",
    differential: [
      {
        diagnosis: "Bell's palsy (idiopathic acute lower motor neuron facial palsy)",
        forIt:
          "Onset over 24-48 hours, preceding retro-auricular pain, an isolated unilateral lower motor neuron facial weakness with involvement of taste and stapedius, and a normal examination otherwise - the pattern that accounts for about 70% of all acute facial palsies.",
        againstIt:
          "It remains a diagnosis of exclusion; a progressive course over more than 3 weeks, no recovery by 3-4 months, recurrence on the same side, or any other cranial nerve sign would mean the label was wrong and imaging is required.",
      },
      {
        diagnosis: "Ramsay Hunt syndrome (herpes zoster oticus)",
        forIt:
          "Ear pain preceding the palsy is typical, and the palsy in zoster is more severe and recovers less well, so it must be looked for in every case.",
        againstIt:
          "No vesicles on the pinna, in the external auditory canal or on the ipsilateral palate, no vertigo, tinnitus or hearing loss, and pain that is dull rather than burning; the rash can appear after the palsy, so the ear is re-examined at the next visit.",
      },
      {
        diagnosis: "Suppurative otitis media, cholesteatoma or a parotid tumour",
        forIt:
          "Ear pain and facial weakness together in a country where chronic suppurative otitis media is common, and a malignant parotid tumour presents with facial weakness before a mass is obvious.",
        againstIt:
          "A normal tympanic membrane and canal with no discharge, no previous ear disease, no parotid mass or lymphadenopathy, and an acute rather than slowly progressive onset.",
      },
      {
        diagnosis: "Cerebellopontine angle lesion, or a pontine stroke or demyelinating plaque",
        forIt:
          "Any lower motor neuron facial weakness can arise from the nucleus or from the nerve at the angle, and a young woman with a cranial nerve palsy raises multiple sclerosis.",
        againstIt:
          "No involvement of the fifth, sixth or eighth nerves, an intact corneal reflex, normal hearing, no cerebellar signs and no long-tract signs, and an acute complete onset rather than a progressive one; a pontine lesion would be expected to involve the sixth nerve or the corticospinal tract.",
      },
    ],
    investigations: [
      {
        test: "Capillary blood glucose, fasting glucose and HbA1c, and blood pressure recorded at the first visit",
        why: "Diabetes and hypertension are associated with facial palsy and are often undiagnosed; the result also decides how safely a course of prednisolone can be given and how closely the sugar must be watched during it.",
        expected: "Normal in most patients; a fasting glucose above 126 mg/dL or an HbA1c of 6.5% or more diagnoses diabetes, which is then managed alongside the steroid course.",
      },
      {
        test: "Complete blood count and ESR",
        why: "To screen for the systemic causes when the presentation is atypical - sarcoidosis, lymphoma, HIV and other infections - and as a baseline before steroids.",
        expected: "Normal in Bell's palsy; a markedly raised ESR, lymphopenia or an abnormal film shifts the diagnosis away from an idiopathic palsy.",
      },
      {
        test: "Otoscopy and, where hearing or ear symptoms are present, pure-tone audiometry with tympanometry",
        why: "To exclude middle ear disease and cholesteatoma and to document sensorineural loss, which would point to the cerebellopontine angle rather than the facial canal.",
        expected: "A normal canal and tympanic membrane and normal hearing thresholds in Bell's palsy; a conductive loss suggests middle ear disease and a sensorineural loss suggests an acoustic neuroma.",
      },
      {
        test: "Serology guided by the setting - HIV, and VZV or Lyme serology where the history or endemicity suggests them; slit-skin smear if leprosy is suspected",
        why: "Facial palsy can be the presenting feature of HIV seroconversion and of neurological Lyme disease in endemic areas, and in India leprosy remains a cause of facial palsy, classically with lagophthalmos from a zygomatic branch lesion.",
        expected: "Negative in Bell's palsy; a positive result changes the treatment entirely and the palsy is then managed as part of the systemic disease.",
      },
      {
        test: "MRI of the brain and internal auditory meatus with gadolinium, reserved for atypical cases",
        why: "Indicated if the palsy progresses beyond 3 weeks, fails to show any recovery by 3-4 months, recurs on the same side, is accompanied by other cranial nerve or cerebellar signs, or if a parotid mass is felt; routine imaging of a typical Bell's palsy is not required and shows only non-specific enhancement of the nerve.",
        expected: "Normal or showing enhancement of the labyrinthine and geniculate segments in Bell's palsy; a cerebellopontine angle mass, a pontine lesion or a parotid tumour in the alternatives.",
      },
      {
        test: "Electroneurography or nerve conduction study of the facial nerve at 10-14 days in a complete palsy",
        why: "In a complete (House-Brackmann VI) palsy, a compound muscle action potential reduced by more than 90% compared with the normal side by day 14 predicts poor recovery and identifies the few patients in whom surgical decompression is debated.",
        expected: "Amplitude preserved above 10% of the normal side in an incomplete palsy, indicating a good prognosis; not needed at all in a grade IV palsy that is already recovering.",
      },
    ],
    management: [
      {
        heading: "Corticosteroids - the treatment that changes the outcome, given early",
        points: [
          "**Prednisolone 60 mg daily (1 mg/kg, maximum 60-80 mg) for 5 days, then tapered over the next 5 days**, or 25 mg twice daily for 10 days, started **within 72 hours of onset**; the Scottish and Scandinavian trials showed complete recovery in about 94% with prednisolone against 82% without, and the benefit is lost if treatment starts late.",
          "Steroids are given even in diabetes and hypertension, with capillary glucose checked daily and the antihypertensive continued; in pregnancy prednisolone is safe and is used because the palsy is more severe in the third trimester; avoid in active peptic ulcer, uncontrolled infection and untreated tuberculosis.",
          "Explain that steroids increase the chance of a full recovery but that most patients begin to improve within 3 weeks with or without them, so that the family neither expects an overnight cure nor blames the tablets for a slow course.",
          "There is no place for vitamin B12 injections, physiotherapy with electrical stimulation, or the indigenous oil massages commonly used; they cost money and delay the eye care.",
        ],
      },
      {
        heading: "Antivirals - a limited, defined role",
        points: [
          "Aciclovir or valaciclovir alone is no better than placebo; **added to prednisolone, valaciclovir 1 g three times daily for 7 days** gives a small additional benefit in severe or complete palsies (House-Brackmann V-VI) and may be offered in those, but not routinely in a grade IV palsy.",
          "In Ramsay Hunt syndrome antivirals are mandatory: **aciclovir 800 mg five times daily (or valaciclovir 1 g three times daily) for 7 days with prednisolone**, started as early as possible, because recovery is poorer than in Bell's palsy and the risk of postherpetic neuralgia is real.",
          "Antivirals are also given if vesicles appear after treatment has started, which is why the ear and palate are re-examined at every visit in the first week.",
        ],
      },
      {
        heading: "Protecting the eye - the complication that must be prevented",
        points: [
          "**Artificial tears (carboxymethylcellulose or hypromellose) every 1-2 hours during the day and a lubricating ointment at night**, with the eyelid taped closed horizontally or an eye pad used during sleep, and sunglasses or protective glasses outdoors and while riding a two-wheeler.",
          "Teach the patient to close the lid manually with a finger several times a day, to avoid dust and smoke, and to report a red or painful eye, photophobia or blurred vision the same day; any of these means exposure keratitis and needs fluorescein staining and an ophthalmologist.",
          "In a complete palsy that is slow to recover, refer for a temporary tarsorrhaphy or an upper-lid gold weight before the cornea is damaged, not after.",
        ],
      },
      {
        heading: "Rehabilitation, follow-up and when to refer",
        points: [
          "Facial exercises in front of a mirror - raising the brow, closing the eye, smiling, puffing the cheeks - for 10 minutes three times a day once movement begins to return, with massage of the cheek; formal facial neuromuscular retraining helps synkinesis in slow recoveries, while electrical stimulation has no benefit and may worsen synkinesis.",
          "Review at 1 week for the eye and the ear, at 3 weeks to confirm that recovery has begun, and at 3 months to grade the outcome; about 70-85% of all Bell's palsies and over 90% of incomplete palsies recover completely, most beginning to improve within 3 weeks and complete by 3-6 months.",
          "Refer to neurology or ENT if there is no improvement by 3 weeks, if the palsy is complete and the electroneurography is unfavourable, if it recurs, or if any atypical feature appears; refer to ophthalmology for any corneal sign; late synkinesis and hemifacial spasm respond to botulinum toxin.",
          "Advise on eating and drinking through the unaffected side with a straw, on returning to work at once with the eye protected, and reassure about the 7-10% chance of recurrence, which is higher in diabetes and in pregnancy and does not itself mean a sinister cause.",
        ],
      },
    ],
    viva: [
      {
        q: "How do you distinguish an upper from a lower motor neuron facial weakness, and why is the forehead spared in the former?",
        a: "In a lower motor neuron lesion all the muscles on one side are weak, including frontalis and orbicularis oculi, so the forehead cannot be wrinkled and the eye cannot be closed. In an upper motor neuron lesion the lower face is weak but the forehead and eye closure are relatively spared, because the part of the facial nucleus supplying the upper face receives corticobulbar fibres from both hemispheres, whereas the lower face is supplied only from the opposite hemisphere. In addition, an upper motor neuron weakness is often worse for volitional than for emotional movement, and is usually accompanied by weakness of the arm or leg on the same side.",
      },
      {
        q: "How do you localise a lower motor neuron facial palsy along the course of the nerve?",
        a: "By the branches given off in sequence. Loss of lacrimation implies a lesion at or proximal to the geniculate ganglion, where the greater petrosal nerve leaves. Hyperacusis implies a lesion proximal to the nerve to stapedius in the vertical part of the facial canal. Loss of taste on the anterior two-thirds of the tongue implies a lesion proximal to the chorda tympani, which leaves 5-6 mm above the stylomastoid foramen. A lesion at or beyond the stylomastoid foramen, for example in the parotid, gives motor weakness alone with taste, hearing and lacrimation intact. Associated fifth, sixth or eighth nerve signs place the lesion in the pons or at the cerebellopontine angle.",
      },
      {
        q: "What is Bell's phenomenon and what is its significance?",
        a: "On attempted eye closure the eyeball rolls upwards and outwards so that the cornea disappears under the upper lid. It is a normal protective synkinesis present in most people, which becomes visible only when orbicularis oculi is too weak to close the lid. Its presence in a facial palsy is reassuring for the cornea, because the cornea is tucked under the lid during sleep; its absence, in the few people who lack it, means a higher risk of exposure keratopathy and calls for more aggressive eye protection.",
      },
      {
        q: "What is the House-Brackmann grading and why record it?",
        a: "A six-grade scale of facial nerve function: grade I is normal; II mild dysfunction with slight weakness on close inspection and complete eye closure; III moderate, with obvious but not disfiguring asymmetry, complete eye closure with effort and some synkinesis; IV moderately severe, with disfiguring asymmetry and incomplete eye closure; V severe, with barely perceptible movement and asymmetry at rest; and VI total paralysis. It is recorded at presentation and at each visit because it defines who needs an antiviral added, who needs electroneurography, and whether recovery is on course.",
      },
      {
        q: "What are the causes of bilateral facial palsy?",
        a: "Guillain-Barre syndrome is the commonest acute cause and must be sought by testing the limbs and reflexes; then sarcoidosis (Heerfordt syndrome with uveitis and parotitis), Lyme disease in endemic areas, HIV seroconversion, leprosy, diphtheria, bilateral Bell's palsy, Melkersson-Rosenthal syndrome, brainstem lesions, leukaemic or carcinomatous meningeal infiltration and basal skull fracture. Bilateral palsy is therefore never called idiopathic without investigation.",
      },
      {
        q: "What is the evidence for steroids and antivirals in Bell's palsy?",
        a: "Two large randomised trials - the Scottish Bell's Palsy trial (Sullivan, NEJM 2007) with prednisolone 25 mg twice daily for 10 days and the Scandinavian trial (Engstrom, Lancet Neurology 2008) with prednisolone 60 mg for 5 days tapering - showed that prednisolone started within 72 hours raised complete recovery at 9-12 months from about 82% to about 94%, with a number needed to treat of about 8. Aciclovir or valaciclovir alone had no benefit, and added to prednisolone gave no significant benefit overall, with a possible small gain in complete palsies. The American Academy of Neurology and the AAO-HNS guidelines therefore recommend steroids for all, and antivirals only as an addition in severe palsy.",
      },
      {
        q: "Which patients with a facial palsy need imaging?",
        a: "Those in whom the diagnosis of Bell's palsy cannot be sustained: a weakness that progresses beyond 3 weeks or is slowly progressive from the start, no sign of recovery by 3-4 months, recurrence on the same side, involvement of other cranial nerves or cerebellar or long-tract signs, a parotid mass, chronic ear disease, a history of malignancy, or a palsy confined to a single branch. MRI of the brain and internal auditory meatus with contrast is the study; a CT of the temporal bone is added if middle ear disease or a fracture is suspected.",
      },
      {
        q: "What is the prognosis of Bell's palsy and what are the late complications?",
        a: "About 70-85% recover completely; incomplete palsies recover completely in more than 90%, complete palsies in about 60%. Improvement usually begins within 3 weeks, and a palsy that has not started to improve by then has a worse outlook. Poor prognostic factors are a complete palsy, age over 60, diabetes, hypertension, severe pain, and a loss of more than 90% of the compound muscle action potential by day 14. Late complications of aberrant regeneration are synkinesis, crocodile tears, hemifacial spasm and contracture; recurrence occurs in about 7-10%.",
      },
    ],
    pitfalls: [
      "Naming Bell's palsy before the ear, the palate, the parotid and the other cranial nerves have been examined - it is a diagnosis of exclusion and the examiner is watching for the otoscope, the corneal reflex and the palpation of the parotid.",
      "Calling forehead involvement an upper motor neuron sign, or the reverse; the forehead is the discriminating finding and it must be tested against resistance and stated first.",
      "Testing the eye without looking at the cornea and without asking about redness and pain, and leaving the eye protection out of the management - the one complication that costs sight.",
      "Starting steroids after the 72-hour window has passed without saying so, or prescribing an antiviral alone, or adding electrical stimulation, vitamins and massage as if they were treatment.",
      "Testing taste and hearing carelessly - taste with the tongue withdrawn into the mouth, or hearing without the Rinne and Weber tests - so that the localisation offered is guesswork.",
      "Forgetting the Indian differentials - leprosy, chronic suppurative otitis media and diabetes - and forgetting to examine the other side of the face, because a bilateral palsy is a different disease.",
    ],
    references: [
      "American Academy of Neurology evidence-based guideline update: steroids and antivirals for Bell palsy, Neurology 2012",
      "American Academy of Otolaryngology-Head and Neck Surgery Clinical Practice Guideline: Bell's Palsy, 2013",
      "Sullivan FM et al., Early treatment with prednisolone or acyclovir in Bell's palsy, NEJM 2007",
      "Engstrom M et al., Prednisolone and valaciclovir in Bell's palsy: a randomised, double-blind, placebo-controlled, multicentre trial, Lancet Neurology 2008",
      "Hutchison's Clinical Methods, 24th edition, 2018 - the nervous system and the cranial nerves",
      "Harrison's Principles of Internal Medicine, 21st edition, 2022 - trigeminal neuralgia, Bell's palsy and other cranial nerve disorders",
    ],
  },
];

const subject: Subject = {
  id: "neurology",
  title: "Neurology",
  blurb: "Headache, stroke, seizures, vertigo, neuropathy, dementia and central nervous system infection.",
  icon: "Brain",
  papers: ["II"],
  topics,
  cases,
};

export default subject;
