import type { ClinicalCase, Subject, Topic } from "../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "obstetrics-antenatal-care",
  title: "Antenatal care under RCH and PMSMA",
  oneLiner:
    "Antenatal care is the planned, protocolised supervision of a pregnant woman from registration in the first trimester to delivery, delivered in India through the RCH programme as a minimum of four antenatal visits with the Mother and Child Protection Card, free investigations, IFA and calcium supplementation, Td immunisation and a specialist check on the 9th of every month under Pradhan Mantri Surakshit Matritva Abhiyan.",
  frequency: "core",
  keywords: [
    "ANC",
    "antenatal care",
    "RCH",
    "PMSMA",
    "Pradhan Mantri Surakshit Matritva Abhiyan",
    "MCP card",
    "Mother and Child Protection Card",
    "JSY",
    "Janani Suraksha Yojana",
    "JSSK",
    "LaQshya",
    "IFA",
    "Td immunisation",
    "EDD",
    "Naegele rule",
    "high risk pregnancy",
    "danger signs",
    "birth preparedness",
    "WHO 8 contacts",
  ],
  sections: [
    {
      heading: "What antenatal care is meant to achieve",
      points: [
        "**Aims:** confirm and date the pregnancy, screen and treat conditions that kill (anaemia, hypertensive disorders, diabetes, infection), immunise against tetanus, supplement iron-folic acid and calcium, prepare for institutional delivery, and identify the high-risk woman early enough to refer her while there is still time.",
        "**Early registration is the single most examinable point:** every pregnancy should be registered within 12 weeks of the last menstrual period, because dating, first-trimester screening, anaemia correction and the MTP window all depend on it.",
        "The **Mother and Child Protection (MCP) Card** is the legal and clinical record, held by the woman, carrying identification, obstetric history, every weight and blood pressure, all investigations, the birth plan and the immunisation schedule; the family physician should write in it at every visit.",
        "India's maternal mortality ratio has fallen to **97 per 100,000 live births (SRS 2018-20)** against an SDG target of 70 by 2030, and the fall is attributed largely to institutional delivery, skilled birth attendance and anaemia control rather than to any new technology.",
        "**Financial entitlements to quote:** Janani Suraksha Yojana (cash incentive for institutional delivery), Janani Shishu Suraksha Karyakram (free delivery, drugs, diagnostics, diet, blood and transport for mother and sick newborn), and Pradhan Mantri Matru Vandana Yojana (maternity benefit for the first live birth).",
        "The family physician's specific value is continuity: she sees the woman before conception, through pregnancy, at delivery or referral, in the postnatal period, and for contraception - so preconception folic acid, drug review and chronic disease optimisation are her responsibility, not the obstetrician's.",
      ],
    },
    {
      heading: "The visit schedule: Indian minimum and the WHO model",
      points: [
        "**Government of India minimum: four antenatal visits.** First within 12 weeks (at registration), second between 14 and 26 weeks, third between 28 and 34 weeks, and fourth between 36 weeks and term.",
        "**WHO 2016 recommends eight antenatal contacts** - one in the first trimester, two in the second (20 and 26 weeks) and five in the third (30, 34, 36, 38 and 40 weeks) - because eight contacts reduce perinatal mortality compared with four; India has adopted this in principle while the programme indicator remains four.",
        "**PMSMA:** on the 9th of every month, every pregnant woman in her second or third trimester gets a free, assured, comprehensive and quality antenatal check-up by an obstetrician or a trained medical officer at a designated facility, with the specific purpose of detecting and colour-coding high-risk pregnancies.",
        "The **extended PMSMA (e-PMSMA)** adds named follow-up: a woman identified as high risk is given a red sticker on her MCP card, tracked by name through the ANMOL/RCH portal, and given an incentive for completing four high-risk visits.",
        "**Every visit, without exception, records:** weight, blood pressure, pallor, oedema, urine for albumin and sugar, symphysio-fundal height, fetal heart rate after 20 weeks, fetal lie and presentation after 32 weeks, and a repeat of the danger-sign counselling.",
        "**Birth preparedness and complication readiness** is discussed from the third visit: the place of delivery, the person who will accompany, transport arrangements and the 102/108 ambulance number, money set aside, the blood group and two potential donors identified.",
      ],
    },
    {
      heading: "Dating the pregnancy and the first-visit history",
      points: [
        "**Naegele's rule:** expected date of delivery = first day of the last menstrual period + 9 months + 7 days, valid only for a certain LMP with regular 28-day cycles; add or subtract the difference from 28 days if cycles are longer or shorter.",
        "**A first-trimester crown-rump length is the most accurate dating tool** and should override the LMP if they differ by more than 7 days before 14 weeks, by more than 10 days between 14 and 22 weeks, or by more than 14 days after 22 weeks.",
        "History at booking: age, parity, the obstetric formula (gravida, para, living, abortions), interpregnancy interval, previous caesarean or instrumental delivery, previous stillbirth or neonatal death, previous pre-eclampsia, gestational diabetes or postpartum haemorrhage.",
        "Medical history that changes the plan: hypertension, diabetes, heart disease, thyroid disease, epilepsy, tuberculosis, asthma, chronic kidney disease, sickle cell disease or thalassaemia trait, and every drug including ayurvedic and over-the-counter preparations.",
        "**Consanguinity, family history of thalassaemia, and previous baby with a congenital anomaly** should be actively asked in Indian practice, since carrier screening for beta-thalassaemia and haemoglobinopathies is now recommended at booking in high-prevalence communities.",
        "Ask about tobacco in every form, alcohol, domestic violence and mental health at booking and at least once more in the third trimester; **do not ask about violence with a family member present.**",
      ],
    },
    {
      heading: "Investigations and what each one changes",
      points: [
        "**At registration:** haemoglobin, blood group with Rh typing, urine routine and microscopy, blood sugar by the DIPSI 75 g test, HIV, VDRL/RPR, HBsAg, and a dating ultrasound; malaria and thalassaemia screening where prevalent.",
        "Haemoglobin is repeated at least at each of the four visits, and always at 28-30 weeks and at 36 weeks - **the third trimester is when anaemia decompensates.**",
        "**Rh-negative women** need an indirect Coombs test at booking and at 28 weeks, the husband's blood group, and anti-D 300 microgram at 28 weeks and within 72 hours of delivery of an Rh-positive baby.",
        "**Ultrasound in India follows the PCPNDT Act:** every scan requires a signed Form F, the machine and centre must be registered, and a conspicuous notice stating that sex determination is a punishable offence must be displayed. Three scans are standard - dating at 6-11 weeks, nuchal translucency with the dual marker at 11-13+6 weeks, and the anomaly scan at 18-20 weeks, with a growth scan at 32-36 weeks if indicated.",
        "**HIV testing is opt-out** under the National AIDS Control Programme; a reactive test triggers immediate lifelong antiretroviral therapy for the mother, which reduces vertical transmission from about 30% to under 2%.",
        "Syphilis screening with VDRL is mandatory and, when reactive, treated with **benzathine penicillin 2.4 million units IM as a single dose** (three weekly doses in late latent disease), because untreated maternal syphilis causes stillbirth, prematurity and congenital syphilis.",
      ],
    },
    {
      heading: "Supplementation, immunisation and routine prescriptions",
      points: [
        "**Iron-folic acid:** one red IFA tablet (60 mg elemental iron plus 500 microgram folic acid) daily from the second trimester, for at least 180 days antenatally and 180 days postpartum, in every non-anaemic pregnant woman.",
        "**Folic acid 400 microgram daily is started preconceptionally** and continued through the first trimester; the dose is **5 mg daily** in women with a previous neural tube defect, on antiepileptics, with diabetes, obesity or a haemoglobinopathy.",
        "**Calcium 500 mg twice daily (1 g elemental calcium per day) with vitamin D from 14 weeks**, for six months antenatally and six months postpartum, to reduce pre-eclampsia and improve bone health; calcium and IFA must be taken at different times of day since calcium blocks iron absorption.",
        "**Albendazole 400 mg as a single dose after the first trimester** (usually in the second trimester) in hookworm-endemic areas, as part of the Anemia Mukt Bharat package.",
        "**Td immunisation:** two doses 4 weeks apart, the first as early as possible in pregnancy, replacing the older TT schedule; a single booster dose suffices if the woman received two doses within the preceding 3 years.",
        "**Low-dose aspirin 75-150 mg at night from 12-16 weeks until 36 weeks** is given to women at high risk of pre-eclampsia, and is the single most effective preventive prescription in antenatal care.",
      ],
    },
    {
      heading: "Danger signs, high-risk marking and referral",
      points: [
        "**The danger signs every woman must be able to repeat back:** bleeding per vaginum, severe headache with blurred vision, convulsions or loss of consciousness, fever with or without foul discharge, severe abdominal pain, leaking of fluid, reduced or absent fetal movements, and breathlessness at rest or swelling of the face and hands.",
        "**Reduced fetal movement is the commonest late danger sign to be dismissed;** teach the daily fetal movement count from 28 weeks (Cardiff 'count to ten' method) and treat fewer than ten movements in twelve hours as an indication for same-day assessment.",
        "High-risk conditions that should be marked on the MCP card and referred for delivery at a facility with blood and an operating theatre: age under 18 or over 35, height under 145 cm, severe anaemia, previous caesarean, malpresentation at term, multiple pregnancy, hypertensive disorder, diabetes, heart disease, previous stillbirth, and grand multiparity.",
        "**Symphysio-fundal height in centimetres should equal the gestational age in weeks (plus or minus 2 cm) between 24 and 36 weeks;** a lag of more than 3 cm means growth restriction, oligohydramnios or wrong dates until an ultrasound says otherwise.",
        "Counsel on nutrition (an extra 350 kcal and 23 g of protein a day in the second and third trimesters), rest, avoidance of heavy work in late pregnancy, and the fact that **no radiological, dental or minor surgical procedure need be denied to a pregnant woman if it is genuinely indicated.**",
        "Every referral must be written, must state the reason and the findings, must go to a named facility, and must be accompanied by the MCP card - **an oral referral is the commonest reason a woman never arrives.**",
      ],
    },
  ],
  tables: [
    {
      heading: "Antenatal visit schedule: Indian programme versus WHO 2016",
      columns: ["Contact", "Government of India (4 visits)", "WHO 2016 (8 contacts)", "Key action"],
      rows: [
        ["1", "Within 12 weeks", "Up to 12 weeks", "Registration, MCP card, full investigation panel, dating scan, Td-1"],
        ["2", "14-26 weeks", "20 weeks", "Anomaly scan at 18-20 weeks, IFA and calcium, albendazole, Td-2"],
        ["3", "28-34 weeks", "26 and 30 weeks", "Repeat haemoglobin and blood sugar, anti-D at 28 weeks if Rh negative"],
        ["4", "36 weeks to term", "34, 36, 38 and 40 weeks", "Presentation and lie, birth plan, danger signs, place of delivery"],
      ],
    },
    {
      heading: "Routine antenatal prescriptions with exact doses",
      columns: ["Item", "Dose", "When", "Note"],
      rows: [
        ["Folic acid", "400 microgram PO OD (5 mg if high risk)", "Preconception to 12 weeks", "5 mg for previous NTD, antiepileptics, diabetes, obesity"],
        ["Iron-folic acid (red tablet)", "60 mg elemental iron + 500 microgram folic acid PO OD", "2nd trimester onward, 180 days", "Plus 180 days postpartum"],
        ["Calcium", "500 mg PO BD with vitamin D", "From 14 weeks, 6 months", "Take separately from IFA"],
        ["Albendazole", "400 mg PO single dose", "After first trimester", "Anemia Mukt Bharat, hookworm-endemic areas"],
        ["Td vaccine", "0.5 mL IM, two doses 4 weeks apart", "As early as possible", "One booster if 2 doses within 3 years"],
        ["Aspirin", "75-150 mg PO at night", "12-16 to 36 weeks", "High risk of pre-eclampsia only"],
      ],
    },
  ],
  redFlags: [
    "Any bleeding per vaginum after 20 weeks - do not perform a vaginal examination, refer to a facility with blood and an operating theatre.",
    "Blood pressure 140/90 mmHg or more after 20 weeks, or any headache with blurred vision, epigastric pain or vomiting - pre-eclampsia until proven otherwise.",
    "Convulsion or unconsciousness in a pregnant or recently delivered woman - eclampsia; give magnesium sulphate before transfer, do not wait for a diagnosis.",
    "Fever above 38 degrees C with foul-smelling discharge or abdominal tenderness - sepsis, start antibiotics and refer the same day.",
    "Absent fetal movements for 12 hours or fewer than ten movements in 12 hours after 28 weeks - same-day fetal assessment.",
    "Symphysio-fundal height more than 3 cm below the gestational age, or no increase over two visits - growth restriction, refer for ultrasound and Doppler.",
    "Breathlessness at rest, orthopnoea or a diastolic murmur in a pregnant woman - undiagnosed rheumatic heart disease, refer to a cardiac-obstetric unit.",
    "Haemoglobin below 7 g/dL at any gestation, or below 9 g/dL beyond 36 weeks - refer for parenteral iron or transfusion and plan delivery in an equipped facility.",
  ],
  pearls: [
    "Register every pregnancy within 12 weeks - dating, screening, anaemia correction and the legal window for MTP all collapse if she comes late.",
    "Four visits is the Indian programme minimum, eight is the WHO recommendation, and PMSMA is the specialist check on the 9th of every month - know all three numbers.",
    "A first-trimester crown-rump length beats the LMP; once an early scan has dated the pregnancy the EDD is never changed by a later scan.",
    "Calcium and iron given at the same time is a wasted prescription - separate them by at least two hours.",
    "Symphysio-fundal height in centimetres equals gestational age in weeks between 24 and 36 weeks; a 3 cm lag is an investigation, not a reassurance.",
    "The PCPNDT Act does not restrict ultrasound for a clinical indication - it restricts disclosure of fetal sex. Never let fear of the Act deny a woman a needed scan.",
    "Aspirin 75-150 mg at night from 12-16 weeks in a high-risk woman prevents about two in three cases of early-onset pre-eclampsia; it is the cheapest thing in the antenatal file.",
    "Write the referral, name the facility, hand over the MCP card - a verbal referral is how women are lost between clinic and hospital.",
  ],
  theory: [
    {
      id: "obstetrics-antenatal-care-t1",
      paper: "IV",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 24-year-old primigravida registers at your urban health centre at 10 weeks of amenorrhoea. Outline the components of antenatal care you will provide, the investigations you will order with their justification, and how you will identify and act on a high-risk pregnancy.",
      openingLines: [
        "Antenatal care is the systematic supervision of a pregnant woman from registration to delivery, aimed at maintaining maternal health, detecting and treating complications early, preparing for a safe institutional delivery, and preparing the couple for parenthood and contraception.",
        "In India it is delivered under the Reproductive, Maternal, Newborn, Child and Adolescent Health strategy as a minimum of four antenatal visits, supplemented by a specialist check on the 9th of every month under Pradhan Mantri Surakshit Matritva Abhiyan.",
      ],
      answer: [
        {
          heading: "1. Registration and the first visit",
          points: [
            "Register within 12 weeks and issue the Mother and Child Protection Card, which is the woman-held clinical and legal record.",
            "Confirm the pregnancy, calculate the expected date of delivery by Naegele's rule (LMP + 9 months + 7 days), and confirm dating by crown-rump length on a first-trimester scan.",
            "Take a full obstetric, medical, surgical, drug, family and social history including consanguinity, tobacco and alcohol use, domestic violence and mental health.",
            "Examine: height, weight and body mass index, pallor, pulse, blood pressure, thyroid, breast, cardiovascular and respiratory systems, and an abdominal examination.",
          ],
        },
        {
          heading: "2. The visit schedule",
          points: [
            "Government of India minimum four visits: within 12 weeks, 14-26 weeks, 28-34 weeks and 36 weeks to term.",
            "WHO 2016 recommends eight contacts (12, 20, 26, 30, 34, 36, 38 and 40 weeks), which reduces perinatal mortality.",
            "PMSMA provides a free specialist antenatal check on the 9th of each month in the second and third trimesters, with colour-coded marking and named follow-up of high-risk women under e-PMSMA.",
            "At every visit: weight, blood pressure, pallor, oedema, urine albumin and sugar, symphysio-fundal height, fetal heart rate after 20 weeks, lie and presentation after 32 weeks.",
          ],
        },
        {
          heading: "3. Investigations and their justification",
          points: [
            "Haemoglobin at booking and repeated at each visit - anaemia complicates over half of Indian pregnancies and is a leading indirect cause of maternal death.",
            "Blood group and Rh typing - to identify the Rh-negative woman needing indirect Coombs testing and anti-D prophylaxis, and to arrange donors.",
            "Urine routine and microscopy - asymptomatic bacteriuria is treated to prevent pyelonephritis and preterm labour; proteinuria screens for pre-eclampsia.",
            "DIPSI 75 g oral glucose test at booking and repeated at 24-28 weeks - gestational diabetes affects 10-15% of Indian women.",
            "HIV (opt-out), VDRL and HBsAg - all three have effective interventions that prevent vertical transmission.",
            "Ultrasound: dating at 6-11 weeks, nuchal translucency with dual marker at 11-13+6 weeks, anomaly scan at 18-20 weeks, growth scan at 32-36 weeks if indicated, each with PCPNDT Form F.",
          ],
        },
        {
          heading: "4. Supplementation, immunisation and advice",
          points: [
            "Folic acid 400 microgram daily to 12 weeks; iron-folic acid (60 mg elemental iron with 500 microgram folic acid) daily from the second trimester for 180 days antenatally and 180 days postpartum.",
            "Calcium 500 mg twice daily from 14 weeks for six months; albendazole 400 mg single dose after the first trimester.",
            "Td vaccine two doses four weeks apart, or a single booster if two doses were given within the last three years.",
            "Nutrition: an additional 350 kcal and 23 g of protein daily; rest, avoidance of heavy work in late pregnancy, and continued normal activity otherwise.",
            "Counsel on the danger signs and confirm the woman can repeat them back at every visit.",
          ],
        },
        {
          heading: "5. Identifying and acting on high risk",
          points: [
            "Mark as high risk: age under 18 or over 35, height under 145 cm, primigravida or grand multipara, severe anaemia, previous caesarean, previous stillbirth or neonatal death, hypertensive disorder, diabetes, heart disease, multiple pregnancy, malpresentation at term or Rh-negative status.",
            "High-risk women receive aspirin 75-150 mg at night from 12-16 weeks where pre-eclampsia risk is high, additional visits, and a planned delivery at a facility with blood and an operating theatre.",
            "Prepare a birth plan: place of delivery, escort, transport with the 108/102 number, money, blood group and two identified donors.",
            "Refer in writing, to a named facility, with the MCP card, stating the reason and findings; use the JSY, JSSK and PMMVY entitlements to remove the financial barrier.",
          ],
        },
      ],
      mustDraw: [
        "A table of the four Government of India antenatal visits against the eight WHO contacts, with the key action at each.",
        "A list-format box of the eight antenatal danger signs.",
      ],
      markSplit: [
        { part: "Definition, aims and registration", marks: 2 },
        { part: "Visit schedule including PMSMA", marks: 2 },
        { part: "Investigations with justification", marks: 3 },
        { part: "Supplementation, immunisation and counselling", marks: 1.5 },
        { part: "High-risk identification and referral", marks: 1.5 },
      ],
      keywords: ["antenatal care", "PMSMA", "MCP card", "four visits", "DIPSI", "high-risk pregnancy"],
    },
    {
      id: "obstetrics-antenatal-care-t2",
      paper: "IV",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on Pradhan Mantri Surakshit Matritva Abhiyan.",
      openingLines: [
        "Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA) was launched by the Ministry of Health and Family Welfare in June 2016 to provide assured, comprehensive and quality antenatal care, free of cost, to every pregnant woman in her second and third trimester on the 9th of every month.",
        "Its central purpose is the detection and named follow-up of high-risk pregnancy, on the principle that maternal deaths cluster in a small identifiable group of women.",
      ],
      answer: [
        {
          heading: "Structure of the programme",
          points: [
            "Held on the 9th of every month at designated government health facilities; if the 9th is a holiday, the session is held on the next working day.",
            "Care is provided by an obstetrician, a physician or a trained medical officer, with the explicit involvement of private-sector volunteers through the 'I Pledge for 9' initiative.",
            "Services are free and include clinical examination, a full investigation panel, ultrasound where available, IFA and calcium, Td immunisation and counselling.",
            "Every woman receives a sticker on her MCP card: green for a normal pregnancy and red for a high-risk pregnancy.",
          ],
        },
        {
          heading: "Extended PMSMA (e-PMSMA)",
          points: [
            "Introduced to close the gap between identification and treatment: a high-risk woman is tracked by name through the RCH portal and ANMOL application.",
            "The ASHA receives an incentive for ensuring the woman completes four additional high-risk antenatal visits and delivers at an appropriate facility.",
            "A high-risk pregnancy is linked to a delivery point capable of managing it, with a written birth plan and blood arrangement.",
          ],
        },
        {
          heading: "High-risk conditions specifically sought",
          points: [
            "Severe anaemia (haemoglobin below 7 g/dL), hypertensive disorders of pregnancy, gestational diabetes, and hypothyroidism.",
            "Previous caesarean section, malpresentation, multiple pregnancy, Rh-negative status, and a bad obstetric history.",
            "Age under 18 or over 35, short stature, and any medical disorder such as heart disease, tuberculosis, HIV or epilepsy.",
          ],
        },
        {
          heading: "Significance and limitations",
          points: [
            "PMSMA has substantially increased the proportion of women receiving at least one specialist antenatal check and has improved detection of high-risk pregnancy.",
            "Its limitation is that a single monthly session cannot substitute for continuous antenatal care, and the yield depends on the availability of an obstetrician and of ultrasound at the session.",
            "For the family physician, PMSMA is the day to send every second- and third-trimester woman on her panel who has not yet had a specialist review.",
          ],
        },
      ],
      mustDraw: ["A flow chart: PMSMA session on the 9th - screening - green or red sticker - e-PMSMA named follow-up - linked delivery point."],
      markSplit: [
        { part: "Definition, launch and structure", marks: 2 },
        { part: "e-PMSMA and high-risk tracking", marks: 1.5 },
        { part: "Conditions sought and significance", marks: 1.5 },
      ],
      keywords: ["PMSMA", "9th of every month", "high-risk pregnancy", "e-PMSMA", "I Pledge for 9"],
    },
    {
      id: "obstetrics-antenatal-care-t3",
      paper: "IV",
      kind: "enumerate",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Enumerate the danger signs in pregnancy and state the action to be taken for each.",
      openingLines: [
        "Danger signs are symptoms and signs that indicate a life-threatening obstetric complication and require the woman to reach a facility without delay.",
        "They are counselled at every antenatal visit, written on the Mother and Child Protection Card, and the woman should be able to repeat them back before she leaves the clinic.",
      ],
      answer: [
        {
          heading: "Bleeding and pain",
          points: [
            "Bleeding per vaginum at any gestation - before 20 weeks suspect abortion or ectopic pregnancy; after 20 weeks suspect placenta praevia or abruption. Do not perform a vaginal examination; secure intravenous access and refer to a facility with blood and an operating theatre.",
            "Severe continuous abdominal pain, especially with a tense tender uterus - abruptio placentae or uterine rupture; resuscitate and transfer immediately.",
          ],
        },
        {
          heading: "Hypertensive and neurological",
          points: [
            "Severe headache with blurring of vision, epigastric pain or vomiting - impending eclampsia; check blood pressure and urine albumin, give antihypertensive and magnesium sulphate loading dose, refer.",
            "Convulsions or loss of consciousness - eclampsia; left lateral position, airway, oxygen, magnesium sulphate 4 g IV over 5-15 minutes plus 10 g IM, then transfer.",
            "Swelling of the face and hands, or a sudden weight gain of more than 2 kg in a week - assess for pre-eclampsia.",
          ],
        },
        {
          heading: "Infective and respiratory",
          points: [
            "Fever above 38 degrees C, with or without foul-smelling vaginal discharge - chorioamnionitis, urinary infection or malaria; investigate, start antibiotics, refer if unwell.",
            "Breathlessness at rest, orthopnoea or palpitations - severe anaemia or heart disease; sit up, give oxygen, refer the same day.",
            "Burning micturition with loin pain and fever - pyelonephritis, which precipitates preterm labour; admit for intravenous antibiotics.",
          ],
        },
        {
          heading: "Fetal and membrane-related",
          points: [
            "Reduced or absent fetal movements - fewer than ten movements in twelve hours after 28 weeks needs same-day cardiotocography or ultrasound.",
            "Leaking of watery fluid per vaginum - premature rupture of membranes; sterile speculum examination only, no digital examination, antibiotics and referral.",
            "Uterine contractions before 37 weeks - preterm labour; refer for tocolysis, antenatal corticosteroids and magnesium sulphate for neuroprotection.",
          ],
        },
      ],
      markSplit: [
        { part: "Bleeding and pain", marks: 1.5 },
        { part: "Hypertensive and neurological signs", marks: 1.5 },
        { part: "Infective and respiratory signs", marks: 1 },
        { part: "Fetal and membrane-related signs", marks: 1 },
      ],
      keywords: ["danger signs", "eclampsia", "antepartum haemorrhage", "reduced fetal movements", "PROM"],
    },
  ],
  mcqs: [
    {
      id: "obstetrics-antenatal-care-q1",
      stem: "A 22-year-old woman with regular 35-day cycles reports her last menstrual period began on 1 March 2025. Using Naegele's rule corrected for her cycle length, what is her expected date of delivery?",
      options: [
        "8 December 2025",
        "15 December 2025",
        "1 December 2025",
        "22 December 2025",
        "8 November 2025",
      ],
      answer: 1,
      explanation:
        "Naegele's rule adds 9 months and 7 days to the first day of the LMP, giving 8 December 2025 for a 28-day cycle. Because her cycle is 35 days, ovulation is 7 days later than in a 28-day cycle, so 7 days are added, giving 15 December 2025. The unadjusted 8 December answer is the classic trap of ignoring cycle length. Subtracting days (1 December) applies to a short cycle, and 22 December over-corrects by 14 days; 8 November reflects the wrong direction of the 3-month subtraction.",
      difficulty: "moderate",
    },
    {
      id: "obstetrics-antenatal-care-q2",
      stem: "A primigravida books at 9 weeks. Her dating scan gives a crown-rump length corresponding to 8 weeks 1 day, six days less than her LMP-derived gestation. How should the expected date of delivery be assigned?",
      options: [
        "Keep the LMP-based EDD as the discrepancy is within 7 days",
        "Change the EDD to the scan date because ultrasound is always more accurate",
        "Average the LMP and scan dates",
        "Repeat the scan at 20 weeks and decide then",
        "Use the scan only if the LMP is uncertain",
      ],
      answer: 0,
      explanation:
        "Before 14 weeks the LMP-derived date is retained if the crown-rump length agrees within 7 days; only a discrepancy greater than 7 days redates the pregnancy. Automatically adopting the scan date discards a reliable LMP and causes unnecessary redating and later mislabelling of post-datism. Averaging is not an accepted method, waiting until 20 weeks abandons the most accurate dating window since biometry error widens with gestation, and using the scan only for an uncertain LMP ignores that a scan does override a certain LMP when the difference exceeds the threshold.",
      difficulty: "moderate",
    },
    {
      id: "obstetrics-antenatal-care-q3",
      stem: "At which gestational age should a pregnant woman in India be given the single dose of albendazole recommended under Anemia Mukt Bharat?",
      options: [
        "At registration in the first trimester",
        "Any time after the first trimester, usually in the second trimester",
        "Only after 36 weeks",
        "Within 48 hours of delivery",
        "Albendazole is contraindicated in pregnancy",
      ],
      answer: 1,
      explanation:
        "Albendazole 400 mg is given as a single dose after the first trimester, conventionally in the second trimester, as part of the Anemia Mukt Bharat six-point package in hookworm-endemic areas. First-trimester use is avoided on theoretical teratogenic grounds, which is why the first option is wrong. Waiting until 36 weeks or the postpartum period wastes the benefit of deworming on antenatal haemoglobin, and albendazole is not contraindicated in pregnancy after the first trimester - WHO explicitly recommends it in endemic settings.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-antenatal-care-q4",
      stem: "A 29-year-old woman at 30 weeks has a symphysio-fundal height of 25 cm; at her previous visit four weeks earlier it was 24 cm. Blood pressure is 118/76 mmHg and fetal movements are normal. What is the most appropriate next step?",
      options: [
        "Reassure and review at 34 weeks",
        "Advise a high-protein diet and recheck in two weeks",
        "Arrange an ultrasound for fetal biometry, amniotic fluid and umbilical artery Doppler",
        "Admit for immediate delivery",
        "Start iron supplementation and reassess",
      ],
      answer: 2,
      explanation:
        "A symphysio-fundal height 5 cm less than the gestational age with only 1 cm of growth in four weeks is static growth and mandates ultrasound for biometry, amniotic fluid index and umbilical artery Doppler to identify fetal growth restriction. Reassurance and dietary advice waste the window in which surveillance and timed delivery prevent stillbirth. Immediate delivery at 30 weeks without any assessment of fetal wellbeing is unjustified, and iron does not correct a growth problem.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-antenatal-care-q5",
      stem: "A woman attends for her first antenatal visit at 8 weeks. She had a previous baby with spina bifida. What dose of folic acid should she receive?",
      options: [
        "400 microgram daily",
        "1 mg daily",
        "5 mg daily",
        "400 microgram daily plus vitamin B12",
        "No folic acid is useful at 8 weeks",
      ],
      answer: 2,
      explanation:
        "A previous pregnancy affected by a neural tube defect places her in the high-risk group, for whom 5 mg of folic acid daily is recommended preconceptionally and through the first trimester; the same dose applies to women on antiepileptics, with diabetes, obesity or a haemoglobinopathy. The 400 microgram dose is for average-risk women, and 1 mg is an intermediate dose with no guideline basis in this setting. Adding B12 does not address the recurrence risk, and folic acid is still worth giving at 8 weeks even though neural tube closure is complete, since supplementation is continued to 12 weeks and the dose statement is what is being tested.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-antenatal-care-q6",
      stem: "Which of the following is a mandatory requirement under the Pre-Conception and Pre-Natal Diagnostic Techniques Act before performing an obstetric ultrasound in India?",
      options: [
        "Written consent of the husband",
        "Completion and retention of Form F with the indication and the woman's details",
        "Approval from the district medical officer for each scan",
        "Two doctors must be present during the scan",
        "The scan must be performed only after 18 weeks",
      ],
      answer: 1,
      explanation:
        "The PCPNDT Act requires that every prenatal diagnostic procedure be recorded on Form F, retained for two years, with the registered centre and qualified operator named, and a notice displayed that sex determination is an offence. Spousal consent is not required for an ultrasound - only the woman's consent. There is no per-scan district approval, no requirement for two doctors, and no gestational restriction; the Act regulates disclosure of fetal sex, not the clinical indication or timing of the scan.",
      difficulty: "moderate",
    },
    {
      id: "obstetrics-antenatal-care-q7",
      stem: "A 33-year-old woman with chronic hypertension on labetalol books at 11 weeks. Apart from continuing her antihypertensive, which intervention most reduces her risk of pre-eclampsia?",
      options: [
        "Aspirin 75-150 mg at night started now and continued to 36 weeks",
        "Bed rest from 20 weeks",
        "Salt restriction to under 2 g sodium per day",
        "Vitamin C and vitamin E supplementation",
        "Low-molecular-weight heparin from 16 weeks",
      ],
      answer: 0,
      explanation:
        "Low-dose aspirin begun between 12 and 16 weeks and continued until 36 weeks reduces preterm pre-eclampsia by roughly 60% in high-risk women, and chronic hypertension is a single high-risk factor that qualifies on its own. Bed rest has no preventive value and increases thromboembolic risk. Salt restriction lowers blood pressure modestly but has never been shown to prevent pre-eclampsia. Antioxidant vitamins were tested in large trials and failed, and heparin is reserved for antiphospholipid syndrome or thromboprophylaxis, not routine pre-eclampsia prevention.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "obstetrics-antenatal-care-c1",
      front: "Minimum number of antenatal visits under the Government of India programme, and their timing?",
      back: "Four: within 12 weeks, 14-26 weeks, 28-34 weeks, and 36 weeks to term. WHO 2016 recommends eight contacts.",
    },
    {
      id: "obstetrics-antenatal-care-c2",
      front: "What is PMSMA and when is it held?",
      back: "Pradhan Mantri Surakshit Matritva Abhiyan - free assured specialist antenatal check-up for every second- and third-trimester woman on the 9th of every month, with green or red high-risk stickers on the MCP card.",
    },
    {
      id: "obstetrics-antenatal-care-c3",
      front: "Naegele's rule.",
      back: "EDD = first day of LMP + 9 months + 7 days, for a regular 28-day cycle; add or subtract the days by which the cycle exceeds or falls short of 28.",
    },
    {
      id: "obstetrics-antenatal-care-c4",
      front: "Composition and duration of the national IFA tablet in pregnancy.",
      back: "60 mg elemental iron plus 500 microgram folic acid, one tablet daily from the second trimester for 180 days antenatally and 180 days postpartum.",
    },
    {
      id: "obstetrics-antenatal-care-c5",
      front: "Calcium supplementation in pregnancy: dose and duration.",
      back: "500 mg twice daily (1 g elemental calcium per day) from 14 weeks for six months antenatally and six months postpartum; taken separately from iron.",
    },
    {
      id: "obstetrics-antenatal-care-c6",
      front: "Td immunisation schedule in pregnancy.",
      back: "Two doses 0.5 mL IM four weeks apart, the first as early as possible; a single booster if two doses were received within the last three years.",
    },
    {
      id: "obstetrics-antenatal-care-c7",
      front: "When is folic acid 5 mg daily used instead of 400 microgram?",
      back: "Previous neural tube defect, antiepileptic drugs, pregestational diabetes, obesity, haemoglobinopathy, and malabsorption.",
    },
    {
      id: "obstetrics-antenatal-care-c8",
      front: "Aspirin for pre-eclampsia prevention: dose and timing.",
      back: "75-150 mg at night, started between 12 and 16 weeks and continued until 36 weeks, in women with high-risk factors.",
    },
    {
      id: "obstetrics-antenatal-care-c9",
      front: "Expected relationship between symphysio-fundal height and gestation.",
      back: "Between 24 and 36 weeks the height in centimetres equals the gestational age in weeks plus or minus 2 cm; a lag of more than 3 cm needs ultrasound.",
    },
    {
      id: "obstetrics-antenatal-care-c10",
      front: "The three routine antenatal ultrasounds and their timing.",
      back: "Dating scan 6-11 weeks, nuchal translucency with dual marker 11-13+6 weeks, anomaly scan 18-20 weeks; growth scan 32-36 weeks if indicated. Form F is mandatory for each.",
    },
    {
      id: "obstetrics-antenatal-care-c11",
      front: "Name the three financial schemes supporting maternity care in India.",
      back: "Janani Suraksha Yojana (institutional delivery incentive), Janani Shishu Suraksha Karyakram (free delivery, drugs, diagnostics, diet, blood and transport), Pradhan Mantri Matru Vandana Yojana (maternity benefit).",
    },
    {
      id: "obstetrics-antenatal-care-c12",
      front: "India's current maternal mortality ratio and the SDG target.",
      back: "97 per 100,000 live births (SRS 2018-20); the SDG 3.1 target is below 70 per 100,000 by 2030.",
    },
  ],
  references: [
    "Guidelines for Antenatal Care and Skilled Attendance at Birth by ANMs, LHVs and Staff Nurses, MoHFW, Government of India",
    "Pradhan Mantri Surakshit Matritva Abhiyan operational guidelines and e-PMSMA guidance note, MoHFW, 2016 and 2022",
    "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience, 2016",
    "FOGSI Good Clinical Practice Recommendations on Antenatal Care, 2019",
    "Williams Obstetrics, 26th edition, 2022 - prenatal care",
    "Anemia Mukt Bharat Operational Guidelines, MoHFW, 2018",
  ],
});

topics.push({
  id: "obstetrics-anaemia-pregnancy",
  title: "Anaemia in pregnancy and Anemia Mukt Bharat",
  oneLiner:
    "Anaemia in pregnancy is a haemoglobin below 11 g/dL at any gestation, graded by the Government of India as mild 10-10.9, moderate 7-9.9, severe 4-6.9 and very severe below 4 g/dL, and managed under Anemia Mukt Bharat with oral iron-folic acid, intravenous iron for moderate anaemia beyond the first trimester or oral-iron failure, and transfusion reserved for severe anaemia near term or with decompensation.",
  frequency: "core",
  keywords: [
    "anaemia in pregnancy",
    "Anemia Mukt Bharat",
    "AMB",
    "iron deficiency anaemia",
    "IFA",
    "iron sucrose",
    "ferric carboxymaltose",
    "packed red cells",
    "NFHS-5",
    "megaloblastic anaemia",
    "thalassaemia trait",
    "serum ferritin",
    "T4A T4S",
    "hookworm",
    "erythrocyte protoporphyrin",
    "peripheral smear",
  ],
  sections: [
    {
      heading: "Definition, grading and burden",
      points: [
        "**WHO and Government of India define anaemia in pregnancy as haemoglobin below 11 g/dL**; a haemoglobin of 10.5 g/dL in the second trimester is accepted by some authorities because of physiological haemodilution, but the programme threshold in India remains 11 g/dL throughout.",
        "**Indian grading:** mild 10.0-10.9 g/dL, moderate 7.0-9.9 g/dL, severe 4.0-6.9 g/dL, and very severe below 4 g/dL. The grade, not the symptoms, decides the route of iron.",
        "Postpartum anaemia is defined as haemoglobin below 10 g/dL, and the non-pregnant adult woman threshold is 12 g/dL - **three different cut-offs that are routinely confused in vivas.**",
        "**NFHS-5 (2019-21) found anaemia in 52.2% of pregnant women** aged 15-49, up from 50.4% in NFHS-4, making India's the highest national burden in the world despite decades of supplementation.",
        "Physiological anaemia of pregnancy results from a plasma volume expansion of 40-50% against a red cell mass rise of only 20-30%, is maximal at 30-32 weeks, and does **not** take the haemoglobin below 10 g/dL - anything lower is pathological.",
        "**Anaemia contributes to about 20-40% of maternal deaths in India**, directly through high-output cardiac failure and indirectly by making an otherwise survivable postpartum haemorrhage fatal.",
      ],
    },
    {
      heading: "Causes and how they are told apart",
      points: [
        "**Iron deficiency accounts for over half of anaemia in Indian pregnancy** - dietary iron intake is low and phytate-rich, iron stores are already depleted before conception, and hookworm infestation and repeated closely spaced pregnancies drain what remains.",
        "**Megaloblastic anaemia** from folate or vitamin B12 deficiency is the second commonest, occurs in the third trimester and puerperium, and is suggested by a macrocytic or dimorphic picture with hypersegmented neutrophils.",
        "**Dimorphic anaemia (combined iron and folate/B12 deficiency) is the classic Indian pattern** and the reason a peripheral smear is worth more than an MCV alone.",
        "Haemoglobinopathies matter regionally: beta-thalassaemia trait (microcytosis with a normal or high red cell count and a normal or raised ferritin), sickle cell disease in central India, and HbE in the north-east.",
        "Other causes: malaria, chronic kidney disease, tuberculosis and HIV, chronic blood loss from haemorrhoids, and aplastic anaemia of pregnancy which is rare but presents with pancytopenia.",
        "**Distinguishing iron deficiency from thalassaemia trait:** in iron deficiency the RDW is high, the red cell count is low and the Mentzer index (MCV divided by RBC count) exceeds 13; in thalassaemia trait the red cell count is preserved and the Mentzer index is below 13, and HbA2 above 3.5% on electrophoresis confirms it.",
      ],
    },
    {
      heading: "The Anemia Mukt Bharat strategy",
      points: [
        "**Anemia Mukt Bharat (2018) is a 6x6x6 strategy** - six target beneficiary groups, six interventions and six institutional mechanisms - aiming to reduce anaemia prevalence by three percentage points per year.",
        "**The six interventions:** prophylactic iron-folic acid supplementation; deworming; intensified year-round behaviour change communication including the Test-Treat-Talk approach; testing and treatment using digital methods; mandatory fortification of foods with iron; and addressing non-nutritional causes such as malaria, fluorosis and haemoglobinopathies.",
        "**Prophylaxis in pregnancy:** one red IFA tablet (60 mg elemental iron with 500 microgram folic acid) daily from the second trimester, for 180 days antenatally and a further 180 days postpartum.",
        "**Treatment of mild and moderate anaemia:** two IFA tablets a day (120 mg elemental iron with 1 mg folic acid), given in two divided doses, for 180 days, followed by the prophylactic dose for another 180 days.",
        "**Testing is by digital haemoglobinometer at the point of care** so that treatment starts the same day; the programme's 'Test-Treat-Talk' anaemia camps use this to close the diagnosis-to-treatment gap.",
        "**Albendazole 400 mg as a single dose after the first trimester** in hookworm-endemic areas, and a second dose is not given in pregnancy.",
      ],
    },
    {
      heading: "Oral iron: how to give it and why it fails",
      points: [
        "Give iron **on an empty stomach, one hour before food, with vitamin C-containing citrus or lemon water**, and never with tea, coffee, milk, calcium tablets, antacids or phytate-rich meals - these can halve absorption.",
        "**Expected response: a reticulocyte rise by day 5-7 and a haemoglobin rise of about 0.8-1 g/dL every 2 weeks** (roughly 2 g/dL in 4 weeks). Failure to rise by 1 g/dL in 4 weeks defines oral iron failure.",
        "**Continue iron for three months after the haemoglobin normalises** to replenish stores, which take far longer to fill than the haemoglobin takes to rise.",
        "Gastrointestinal side effects (nausea, metallic taste, epigastric pain, constipation, black stools) affect a third of women; manage by taking the tablet after a light snack, splitting the dose, or switching to alternate-day dosing, which improves fractional absorption by lowering hepcidin.",
        "**The five reasons oral iron fails, which must be excluded before calling it failure:** she is not taking it, she is taking it with tea or calcium, there is ongoing blood loss, there is malabsorption or infection, or the diagnosis is wrong (thalassaemia, B12 deficiency, anaemia of chronic disease).",
        "Ferrous sulphate, fumarate, gluconate and ascorbate differ only in elemental iron content; **carbonyl iron and iron polymaltose are better tolerated but not better absorbed**, and their higher cost is not justified by outcome data.",
      ],
    },
    {
      heading: "Parenteral iron and transfusion",
      points: [
        "**Indications for intravenous iron:** moderate anaemia (7-9.9 g/dL) after 12 weeks, any anaemia not responding to 4 weeks of adequate oral iron, intolerance to oral iron, severe anaemia after 34 weeks as an adjunct, and anaemia diagnosed after 30 weeks when there is no time for oral therapy.",
        "**Iron sucrose 200 mg in 100 mL normal saline infused over 15-30 minutes, on alternate days, to a maximum of 600 mg per week**, with the total dose calculated as: iron deficit (mg) = 2.4 x body weight (kg) x (target haemoglobin - actual haemoglobin in g/dL), plus 500 mg for stores.",
        "**Ferric carboxymaltose 1000-1500 mg as a single infusion in 250 mL normal saline over 15-30 minutes**, permitted after 12 weeks (many Indian protocols prefer after 14 weeks), corrects the whole deficit in one sitting and is the pragmatic choice for a woman who cannot return repeatedly.",
        "**Iron dextran is avoided** because of anaphylaxis; intramuscular iron is painful, stains the skin and is no longer recommended when intravenous access is available. Every intravenous iron infusion needs a test observation period and resuscitation drugs at hand.",
        "**Transfusion of packed red cells is indicated for:** haemoglobin below 7 g/dL after 34 weeks, haemoglobin below 5 g/dL at any gestation, any anaemia with cardiac failure, hypoxia, infection or active bleeding, and a woman in labour or needing urgent surgery with a haemoglobin below 8 g/dL.",
        "Transfuse **packed cells, not whole blood, slowly, one unit over 3-4 hours with furosemide 20 mg intravenously** between units in a decompensated woman; a unit of packed cells raises haemoglobin by about 1 g/dL. Exchange transfusion is considered for very severe anaemia with failure near term.",
      ],
    },
    {
      heading: "Effects, prevention and the family physician's role",
      points: [
        "**Maternal effects:** fatigue and poor work capacity, increased susceptibility to infection, preterm labour, pre-eclampsia, poor tolerance of even moderate blood loss, high-output cardiac failure, and puerperal sepsis; **the most dangerous moments are the second stage, immediately after delivery, and the first postpartum day, when the autotransfusion of uterine blood overloads a failing heart.**",
        "**Fetal effects:** intrauterine growth restriction, low birth weight, prematurity, poor iron stores at birth with anaemia in infancy, and increased perinatal mortality.",
        "Prevention operates before pregnancy: weekly iron-folic acid supplementation for adolescent girls under the WIFS programme, correction of anaemia before conception, birth spacing of at least 24 months, and treatment of hookworm.",
        "**Delayed cord clamping for 1-3 minutes at delivery gives the newborn 80-100 mL of extra blood** and is the single cheapest intervention against infant anaemia; it is recommended for all births where the baby does not need immediate resuscitation.",
        "Food fortification (double-fortified salt with iron and iodine, fortified wheat flour and rice under the public distribution system) is a programme-level intervention the family physician should know and endorse.",
        "**Document the haemoglobin at booking, at 28-30 weeks and at 36 weeks in every antenatal record**; a woman who reaches labour with an uncorrected haemoglobin of 7 g/dL represents a failure of antenatal care, not an emergency of labour.",
      ],
    },
  ],
  tables: [
    {
      heading: "Grading of anaemia in pregnancy and the route of iron",
      columns: ["Grade", "Haemoglobin (g/dL)", "Treatment", "Where"],
      rows: [
        ["Mild", "10.0-10.9", "2 IFA tablets daily (120 mg elemental iron) for 180 days", "Outpatient, community"],
        ["Moderate", "7.0-9.9", "Oral iron if under 12 weeks; intravenous iron if beyond 12 weeks or oral failure", "PHC/CHC with resuscitation facility"],
        ["Severe", "4.0-6.9", "Intravenous iron; transfusion if after 34 weeks, in labour, or decompensated", "FRU or district hospital"],
        ["Very severe", "Below 4.0", "Packed cell transfusion, often with diuretic cover; treat cardiac failure", "Admit, tertiary care"],
      ],
    },
    {
      heading: "Parenteral iron preparations",
      columns: ["Preparation", "Dose per sitting", "Regimen", "Cautions"],
      rows: [
        ["Iron sucrose", "200 mg in 100 mL normal saline over 15-30 min", "Alternate days, maximum 600 mg per week", "Safe after first trimester; observe 30 min"],
        ["Ferric carboxymaltose", "1000-1500 mg in 250 mL normal saline over 15-30 min", "Single sitting, repeat after 1 week if needed", "After 12-14 weeks; hypophosphataemia"],
        ["Iron dextran", "Total dose infusion", "Rarely used", "Anaphylaxis risk; avoid"],
        ["Iron sorbitol citrate (IM)", "1.5 mg/kg deep IM daily", "Obsolete where IV access exists", "Painful, skin staining, abscess"],
      ],
    },
    {
      heading: "Distinguishing iron deficiency from thalassaemia trait",
      columns: ["Parameter", "Iron deficiency", "Beta-thalassaemia trait"],
      rows: [
        ["Red cell count", "Low", "Normal or high"],
        ["RDW", "High (above 15%)", "Normal"],
        ["Mentzer index (MCV/RBC)", "Above 13", "Below 13"],
        ["Serum ferritin", "Low (under 30 ng/mL)", "Normal or raised"],
        ["HbA2 on electrophoresis", "Normal or low", "Above 3.5%"],
        ["Response to oral iron", "Haemoglobin rises 1 g/dL in 4 weeks", "No response"],
      ],
    },
  ],
  redFlags: [
    "Haemoglobin below 5 g/dL at any gestation, or below 7 g/dL after 34 weeks - admit for transfusion, do not manage as an outpatient.",
    "Anaemia with breathlessness at rest, orthopnoea, basal crepitations or a raised jugular venous pressure - anaemic heart failure, sit up, oxygen, furosemide and urgent referral.",
    "Anaemia with fever, jaundice or splenomegaly - malaria, haemolysis or infection, not simple iron deficiency; investigate before giving iron.",
    "No haemoglobin rise after four weeks of correctly taken oral iron - stop calling it iron deficiency and look for bleeding, thalassaemia, B12 deficiency or chronic disease.",
    "Pancytopenia or a bleeding tendency with anaemia - aplastic anaemia or leukaemia of pregnancy, refer for haematology assessment.",
    "Severe anaemia detected for the first time in labour - anticipate postpartum haemorrhage, arrange blood before delivery and manage the third stage actively.",
    "Anaphylaxis or hypotension during an intravenous iron infusion - stop the infusion, adrenaline 0.5 mg IM, and never restart that preparation.",
  ],
  pearls: [
    "The Indian cut-offs are 11 g/dL in pregnancy, 10 g/dL postpartum and 12 g/dL in the non-pregnant woman - quote the right one for the right patient.",
    "Physiological haemodilution never takes the haemoglobin below 10 g/dL; do not explain away a haemoglobin of 8 g/dL as physiological.",
    "Moderate anaemia beyond 12 weeks in an Indian antenatal clinic means intravenous iron, not another prescription for tablets she has not been taking.",
    "The commonest cause of oral iron failure is that the tablet is being swallowed with tea or with the calcium tablet - ask before you escalate.",
    "Iron deficit (mg) = 2.4 x weight in kg x (target Hb - actual Hb) + 500 mg for stores. Memorise it; it is asked as a calculation.",
    "Transfusion corrects the number, not the deficiency - always give iron after transfusion, because a transfused woman still has empty stores.",
    "Mentzer index below 13 with a normal red cell count means think thalassaemia trait and order electrophoresis, not more iron.",
    "Delayed cord clamping for 1-3 minutes is free, requires no equipment, and prevents infant anaemia - it should be written into every delivery protocol.",
  ],
  theory: [
    {
      id: "obstetrics-anaemia-pregnancy-t1",
      paper: "IV",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 26-year-old woman, gravida 3 para 2, presents at 30 weeks of gestation with a haemoglobin of 7.2 g/dL. Discuss the classification, causes, effects and management of anaemia in pregnancy with reference to the national programme.",
      openingLines: [
        "Anaemia in pregnancy is defined by WHO and the Government of India as a haemoglobin concentration below 11 g/dL at any period of gestation; this woman at 7.2 g/dL has moderate anaemia bordering on severe.",
        "It affects 52.2% of pregnant Indian women (NFHS-5) and contributes directly or indirectly to a fifth to two-fifths of maternal deaths, chiefly by converting a survivable haemorrhage into a fatal one.",
      ],
      answer: [
        {
          heading: "1. Classification",
          points: [
            "By severity (Government of India): mild 10.0-10.9 g/dL, moderate 7.0-9.9 g/dL, severe 4.0-6.9 g/dL, very severe below 4.0 g/dL.",
            "By morphology: microcytic hypochromic (iron deficiency, thalassaemia), macrocytic (folate or vitamin B12 deficiency), dimorphic (combined - the commonest Indian pattern), and normocytic (acute blood loss, chronic disease, haemolysis).",
            "By aetiology: deficiency anaemias, haemorrhagic anaemias, haemolytic anaemias, bone marrow failure and anaemia of chronic disease.",
          ],
        },
        {
          heading: "2. Causes in the Indian context",
          points: [
            "Iron deficiency in more than half - poor dietary iron, phytate-rich cereal diet, low pre-pregnancy stores, closely spaced pregnancies and menorrhagia before conception.",
            "Hookworm infestation, malaria, and chronic infection such as tuberculosis and HIV.",
            "Folate and vitamin B12 deficiency, especially in strict vegetarians and in multiple pregnancy.",
            "Haemoglobinopathies - beta-thalassaemia trait, sickle cell disease in central India, HbE in the north-east.",
            "Blood loss - antepartum haemorrhage, haemorrhoids, and repeated pregnancy losses.",
          ],
        },
        {
          heading: "3. Effects on mother and fetus",
          points: [
            "Maternal: fatigue and reduced work capacity, infection, preterm labour, pre-eclampsia, cardiac failure (most dangerous at 30-32 weeks, in the second stage, and immediately after delivery), poor tolerance of blood loss, postpartum haemorrhage, puerperal sepsis, failed lactation and postpartum depression.",
            "Fetal: intrauterine growth restriction, low birth weight, prematurity, intrauterine death in severe anaemia, poor neonatal iron stores and infantile anaemia.",
          ],
        },
        {
          heading: "4. Investigation of this woman",
          points: [
            "Complete blood count with red cell indices, peripheral smear and reticulocyte count; serum ferritin where affordable, remembering ferritin rises with infection.",
            "Stool for ova and cysts (hookworm), urine routine, blood sugar, and a peripheral smear for malaria parasite where endemic.",
            "Haemoglobin electrophoresis if the smear is microcytic with a normal red cell count and there is no response to iron.",
            "Assess for decompensation: pulse, respiratory rate, jugular venous pressure, basal crepitations, and a cardiac murmur.",
          ],
        },
        {
          heading: "5. Management",
          points: [
            "At 30 weeks with a haemoglobin of 7.2 g/dL and no decompensation, intravenous iron is the treatment of choice: iron sucrose 200 mg in 100 mL normal saline over 15-30 minutes on alternate days to a maximum of 600 mg per week, or ferric carboxymaltose 1000-1500 mg as a single infusion.",
            "Calculate the deficit: 2.4 x weight (kg) x (11 minus 7.2) plus 500 mg for stores.",
            "Transfuse packed red cells if the haemoglobin falls below 7 g/dL after 34 weeks, below 5 g/dL at any time, or if there is cardiac failure, infection or active bleeding - one unit over 3-4 hours with furosemide 20 mg intravenously in a decompensated woman.",
            "Treat the cause: albendazole 400 mg single dose, folic acid, vitamin B12 if the smear is macrocytic, and antimalarials if indicated.",
            "Plan delivery at a facility with blood: active management of the third stage with oxytocin 10 IU intramuscularly, prophylactic tranexamic acid where risk is high, delayed cord clamping, and vigilance for postpartum haemorrhage and for pulmonary oedema in the first 24 hours.",
            "Continue oral iron for three months after the haemoglobin normalises, then the prophylactic dose for 180 days postpartum; counsel on contraception and a 24-month birth interval.",
          ],
        },
      ],
      mustDraw: [
        "A table of anaemia grading with haemoglobin ranges and the corresponding route of iron.",
        "The iron deficit formula written out: iron deficit (mg) = 2.4 x weight (kg) x (target Hb - actual Hb) + 500 mg.",
      ],
      markSplit: [
        { part: "Definition, grading and burden", marks: 2 },
        { part: "Causes", marks: 2 },
        { part: "Maternal and fetal effects", marks: 2 },
        { part: "Investigations", marks: 1 },
        { part: "Treatment including intravenous iron, transfusion and delivery plan", marks: 3 },
      ],
      keywords: ["anaemia in pregnancy", "Anemia Mukt Bharat", "iron sucrose", "transfusion threshold", "dimorphic anaemia"],
    },
    {
      id: "obstetrics-anaemia-pregnancy-t2",
      paper: "IV",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on Anemia Mukt Bharat.",
      openingLines: [
        "Anemia Mukt Bharat, launched in 2018 by the Ministry of Health and Family Welfare, is India's national anaemia control strategy built on a 6x6x6 framework - six target beneficiary groups, six interventions and six institutional mechanisms.",
        "Its stated goal is to reduce the prevalence of anaemia by three percentage points per year across the life cycle.",
      ],
      answer: [
        {
          heading: "The six target groups",
          points: [
            "Children 6-59 months, children 5-9 years, adolescent girls and boys 10-19 years.",
            "Women of reproductive age 15-49 years, pregnant women, and lactating women.",
          ],
        },
        {
          heading: "The six interventions",
          points: [
            "Prophylactic iron-folic acid supplementation - in pregnancy one red tablet (60 mg elemental iron plus 500 microgram folic acid) daily for 180 days antenatally and 180 days postpartum.",
            "Deworming with albendazole 400 mg - in pregnancy a single dose after the first trimester.",
            "Intensified year-round behaviour change communication, including the Test-Treat-Talk approach and delayed cord clamping at every birth.",
            "Testing and treatment of anaemia using digital haemoglobinometers at the point of care.",
            "Mandatory fortification of foods - double-fortified salt, fortified wheat flour and rice through the public distribution system and mid-day meals.",
            "Addressing non-nutritional causes - malaria, fluorosis, haemoglobinopathies and hookworm - in endemic pockets.",
          ],
        },
        {
          heading: "Treatment protocol in pregnancy under the programme",
          points: [
            "Mild and moderate anaemia: two IFA tablets daily (120 mg elemental iron with 1 mg folic acid) for 180 days, then prophylaxis for 180 days postpartum.",
            "Moderate anaemia beyond the first trimester or failure of oral iron: intravenous iron sucrose or ferric carboxymaltose at a facility with resuscitation.",
            "Severe anaemia: refer to a first referral unit for parenteral iron or transfusion, with the transfusion thresholds of haemoglobin below 7 g/dL after 34 weeks or below 5 g/dL at any gestation.",
          ],
        },
        {
          heading: "Performance and limitations",
          points: [
            "NFHS-5 showed anaemia in pregnancy rose from 50.4% to 52.2%, indicating the strategy has not yet reversed the trend.",
            "Barriers are compliance with a 180-day tablet regimen, side effects, weak supply chains, and failure to escalate from oral to intravenous iron when it is due.",
            "The family physician's contribution is to test at every visit, to confirm the tablets are actually being taken and taken correctly, and to escalate on time.",
          ],
        },
      ],
      mustDraw: ["A 6x6x6 box: the six target groups, six interventions and six institutional mechanisms of Anemia Mukt Bharat."],
      markSplit: [
        { part: "Definition, launch and 6x6x6 framework", marks: 1 },
        { part: "Six interventions", marks: 2 },
        { part: "Pregnancy treatment protocol with doses", marks: 1.5 },
        { part: "Performance and limitations", marks: 0.5 },
      ],
      keywords: ["Anemia Mukt Bharat", "6x6x6", "IFA", "deworming", "food fortification", "Test Treat Talk"],
    },
    {
      id: "obstetrics-anaemia-pregnancy-t3",
      paper: "IV",
      kind: "differentiate",
      marks: 5,
      minutes: 8,
      frequency: "less-common",
      question: "Differentiate between iron deficiency anaemia and beta-thalassaemia trait in a pregnant woman, and state why the distinction matters.",
      openingLines: [
        "Both produce a microcytic hypochromic anaemia in a pregnant woman, but they demand opposite management: one is treated with iron and the other is made worse by unnecessary iron and requires partner screening.",
        "The distinction is made on the red cell count, the red cell distribution width, the Mentzer index, ferritin and haemoglobin electrophoresis.",
      ],
      answer: [
        {
          heading: "Points of difference",
          points: [
            "Red cell count: low in iron deficiency, normal or raised in thalassaemia trait.",
            "Red cell distribution width: raised above 15% in iron deficiency (anisocytosis), normal in thalassaemia trait where the cells are uniformly small.",
            "Mentzer index (MCV divided by red cell count): above 13 in iron deficiency, below 13 in thalassaemia trait.",
            "Serum ferritin: low, usually below 30 ng/mL, in iron deficiency; normal or raised in thalassaemia trait.",
            "Peripheral smear: anisopoikilocytosis and pencil cells in iron deficiency; target cells and basophilic stippling in thalassaemia trait.",
            "HbA2 on electrophoresis: normal or low in iron deficiency, above 3.5% in beta-thalassaemia trait.",
            "Response to oral iron: haemoglobin rises by about 1 g/dL in 4 weeks in iron deficiency, no response in thalassaemia trait.",
          ],
        },
        {
          heading: "Why the distinction matters",
          points: [
            "Continuing high-dose iron in thalassaemia trait risks iron overload and delays the correct diagnosis.",
            "A diagnosis of beta-thalassaemia trait obliges screening of the husband; if both are carriers there is a one-in-four risk of thalassaemia major in each pregnancy, and prenatal diagnosis by chorionic villus sampling at 11-13 weeks should be offered.",
            "Iron deficiency can coexist with thalassaemia trait and mask a raised HbA2, so ferritin should be corrected before electrophoresis is interpreted.",
            "Under the National Health Mission, thalassaemia carrier screening is offered in high-prevalence states, and the family physician is often the first to raise the possibility.",
          ],
        },
      ],
      mustDraw: ["A two-column comparison table: red cell count, RDW, Mentzer index, ferritin, smear findings, HbA2 and response to iron."],
      markSplit: [
        { part: "Haematological points of difference", marks: 3 },
        { part: "Clinical consequences and partner screening", marks: 2 },
      ],
      keywords: ["Mentzer index", "HbA2", "thalassaemia trait", "ferritin", "carrier screening"],
    },
  ],
  mcqs: [
    {
      id: "obstetrics-anaemia-pregnancy-q1",
      stem: "A 25-year-old woman at 26 weeks has a haemoglobin of 8.4 g/dL. She has been taking one IFA tablet daily for six weeks with her morning tea. What is the most appropriate next step?",
      options: [
        "Transfuse one unit of packed red cells",
        "Start intravenous iron sucrose immediately",
        "Increase to two IFA tablets daily taken away from tea and with lemon water, and recheck the haemoglobin in four weeks",
        "Order haemoglobin electrophoresis before any change in treatment",
        "Add vitamin B12 injections",
      ],
      answer: 2,
      explanation:
        "She has moderate anaemia but has never had a fair trial of oral iron, because tea reduces non-haem iron absorption by up to 60% and she is on a prophylactic rather than a therapeutic dose. The correct step is a therapeutic dose of 120 mg elemental iron daily taken correctly, with reassessment at four weeks. Transfusion is far outside the thresholds of haemoglobin below 7 g/dL after 34 weeks or below 5 g/dL at any gestation. Intravenous iron is reserved for genuine oral iron failure, intolerance, or late gestation, none of which applies until a proper trial has been given. Electrophoresis and B12 come into play only if the correctly given iron fails.",
      difficulty: "moderate",
    },
    {
      id: "obstetrics-anaemia-pregnancy-q2",
      stem: "A 28-year-old woman weighing 50 kg at 32 weeks has a haemoglobin of 7.0 g/dL and iron deficiency confirmed. Using the standard formula with a target haemoglobin of 11 g/dL, what total dose of parenteral iron is required?",
      options: [
        "480 mg",
        "980 mg",
        "1200 mg",
        "500 mg",
        "1500 mg",
      ],
      answer: 1,
      explanation:
        "The deficit formula is 2.4 x weight in kg x (target haemoglobin minus actual haemoglobin), plus 500 mg for stores: 2.4 x 50 x 4 = 480 mg, plus 500 mg = 980 mg. The 480 mg option is the classic error of omitting the 500 mg store replacement, which leaves the woman anaemic again within weeks. The 500 mg option is the store component alone, 1200 mg does not follow from the formula, and 1500 mg is a ferric carboxymaltose maximum single dose rather than this woman's calculated requirement.",
      difficulty: "moderate",
    },
    {
      id: "obstetrics-anaemia-pregnancy-q3",
      stem: "A 30-year-old woman at 36 weeks has a haemoglobin of 6.4 g/dL, is breathless on climbing stairs, and has bibasal crepitations with a raised jugular venous pressure. What is the most appropriate management?",
      options: [
        "Ferric carboxymaltose 1500 mg as a single infusion",
        "Two IFA tablets daily and review in two weeks",
        "Slow transfusion of packed red cells with furosemide cover and admission",
        "Immediate caesarean section",
        "Exchange transfusion of whole blood",
      ],
      answer: 2,
      explanation:
        "Severe anaemia after 34 weeks with signs of decompensated high-output cardiac failure requires admission and slow packed cell transfusion, one unit over 3-4 hours with intravenous furosemide 20 mg between units, because the circulation cannot tolerate a volume load. Intravenous iron takes 2-3 weeks to raise the haemoglobin and cannot save a woman who is already in failure. Oral iron is entirely inadequate at this stage. Caesarean section adds blood loss and anaesthetic risk without treating the anaemia. Exchange transfusion is reserved for very severe anaemia, generally below 4 g/dL with failure, and packed cells with diuretic cover achieve the same result more simply here.",
      difficulty: "moderate",
    },
    {
      id: "obstetrics-anaemia-pregnancy-q4",
      stem: "A pregnant woman has haemoglobin 9.6 g/dL, MCV 68 fL, red cell count 5.4 million/microlitre, RDW 13.2% and serum ferritin 78 ng/mL. What is the most likely diagnosis?",
      options: [
        "Iron deficiency anaemia",
        "Beta-thalassaemia trait",
        "Anaemia of chronic disease",
        "Megaloblastic anaemia",
        "Physiological anaemia of pregnancy",
      ],
      answer: 1,
      explanation:
        "Microcytosis with a high red cell count, a normal RDW, a Mentzer index of 12.6 (below 13) and a normal ferritin is the classic profile of beta-thalassaemia trait, and haemoglobin electrophoresis showing HbA2 above 3.5% will confirm it. Iron deficiency gives a low red cell count, a high RDW and a low ferritin. Anaemia of chronic disease is usually normocytic with a raised ferritin as an acute phase reactant but a low red cell count. Megaloblastic anaemia is macrocytic. Physiological anaemia does not produce an MCV of 68 fL.",
      difficulty: "moderate",
    },
    {
      id: "obstetrics-anaemia-pregnancy-q5",
      stem: "Under Anemia Mukt Bharat, what is the composition of the iron-folic acid tablet given to pregnant women and for how long is it prescribed?",
      options: [
        "100 mg elemental iron with 500 microgram folic acid, for 100 days antenatally",
        "60 mg elemental iron with 500 microgram folic acid, daily for 180 days antenatally and 180 days postpartum",
        "45 mg elemental iron with 400 microgram folic acid, weekly through pregnancy",
        "60 mg elemental iron with 1 mg folic acid, for 90 days only",
        "20 mg elemental iron with 100 microgram folic acid, daily throughout pregnancy",
      ],
      answer: 1,
      explanation:
        "The national red IFA tablet for pregnancy contains 60 mg of elemental iron with 500 microgram of folic acid, given daily from the second trimester for 180 days antenatally and a further 180 days postpartum. The 100 mg and 45 mg formulations do not correspond to the pregnancy tablet; 45 mg weekly is the adolescent WIFS blue tablet regimen. Ninety days was the older schedule replaced by the 180-plus-180-day schedule, and 20 mg with 100 microgram is the paediatric syrup strength.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-anaemia-pregnancy-q6",
      stem: "At what point in a pregnancy complicated by severe anaemia is the risk of acute pulmonary oedema greatest?",
      options: [
        "At 12-16 weeks when plasma volume begins to expand",
        "At 30-32 weeks, during the second stage of labour, and immediately after delivery",
        "Only during the antenatal period",
        "At 20 weeks when the uterus reaches the umbilicus",
        "Six weeks after delivery",
      ],
      answer: 1,
      explanation:
        "The three danger points are 30-32 weeks when plasma volume expansion peaks and cardiac output is maximal, the second stage when the effort of bearing down raises venous return, and the immediate postpartum period when contraction of the uterus autotransfuses about 500 mL into the circulation. Twelve to sixteen weeks is too early for the haemodynamic load to be critical. Restricting the risk to the antenatal period ignores that most anaemic cardiac failure occurs peripartum. Twenty weeks and six weeks postpartum are not recognised danger points.",
      difficulty: "moderate",
    },
    {
      id: "obstetrics-anaemia-pregnancy-q7",
      stem: "A woman with moderate anaemia at 16 weeks is to receive intravenous iron sucrose. Which statement about its administration is correct?",
      options: [
        "The whole calculated deficit may be given in one sitting",
        "A maximum of 200 mg is given per sitting, on alternate days, up to 600 mg per week",
        "It must be given as an intramuscular injection",
        "It is contraindicated at any gestation",
        "A test dose of 25 mg over 15 minutes is mandatory before every dose in current protocols",
      ],
      answer: 1,
      explanation:
        "Iron sucrose is limited to 200 mg per sitting, diluted in 100 mL of normal saline and infused over 15-30 minutes, on alternate days, with a weekly ceiling of 600 mg; this is why ferric carboxymaltose, which can deliver 1000-1500 mg at once, is preferred when a woman cannot attend repeatedly. Total dose infusion in one sitting applies to ferric carboxymaltose, not iron sucrose. Iron sucrose is an intravenous preparation only. It is not contraindicated in pregnancy beyond the first trimester and is in fact the programme's standard. Iron sucrose does not require a formal test dose, though observation for 30 minutes with resuscitation facilities available is expected.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "obstetrics-anaemia-pregnancy-c1",
      front: "Haemoglobin cut-offs: pregnancy, postpartum, non-pregnant woman.",
      back: "Pregnancy below 11 g/dL, postpartum below 10 g/dL, non-pregnant adult woman below 12 g/dL.",
    },
    {
      id: "obstetrics-anaemia-pregnancy-c2",
      front: "Government of India grading of anaemia in pregnancy.",
      back: "Mild 10.0-10.9, moderate 7.0-9.9, severe 4.0-6.9, very severe below 4.0 g/dL.",
    },
    {
      id: "obstetrics-anaemia-pregnancy-c3",
      front: "NFHS-5 prevalence of anaemia in pregnant Indian women.",
      back: "52.2% (up from 50.4% in NFHS-4) - the highest national burden in the world.",
    },
    {
      id: "obstetrics-anaemia-pregnancy-c4",
      front: "Anemia Mukt Bharat: what does 6x6x6 stand for?",
      back: "Six target beneficiary groups, six interventions and six institutional mechanisms, aiming to cut anaemia by 3 percentage points per year.",
    },
    {
      id: "obstetrics-anaemia-pregnancy-c5",
      front: "Therapeutic oral iron dose for mild or moderate anaemia in pregnancy.",
      back: "Two IFA tablets daily = 120 mg elemental iron with 1 mg folic acid, for 180 days, then prophylaxis for 180 days postpartum.",
    },
    {
      id: "obstetrics-anaemia-pregnancy-c6",
      front: "Iron deficit formula for parenteral iron.",
      back: "Iron deficit (mg) = 2.4 x body weight (kg) x (target Hb - actual Hb in g/dL), plus 500 mg for stores.",
    },
    {
      id: "obstetrics-anaemia-pregnancy-c7",
      front: "Iron sucrose dosing limits.",
      back: "200 mg in 100 mL normal saline over 15-30 minutes per sitting, alternate days, maximum 600 mg per week.",
    },
    {
      id: "obstetrics-anaemia-pregnancy-c8",
      front: "Ferric carboxymaltose dose and gestational limit.",
      back: "1000-1500 mg in 250 mL normal saline over 15-30 minutes as a single sitting, after 12-14 weeks of gestation.",
    },
    {
      id: "obstetrics-anaemia-pregnancy-c9",
      front: "Transfusion thresholds in pregnancy anaemia.",
      back: "Hb below 7 g/dL after 34 weeks, Hb below 5 g/dL at any gestation, or any anaemia with cardiac failure, hypoxia, infection or active bleeding.",
    },
    {
      id: "obstetrics-anaemia-pregnancy-c10",
      front: "Expected haemoglobin response to correctly taken oral iron.",
      back: "Reticulocytosis by day 5-7, haemoglobin rise of about 0.8-1 g/dL every two weeks; no rise in four weeks defines oral iron failure.",
    },
    {
      id: "obstetrics-anaemia-pregnancy-c11",
      front: "Three time points at which an anaemic woman is most likely to develop cardiac failure.",
      back: "30-32 weeks (peak plasma volume), the second stage of labour, and immediately after delivery (uterine autotransfusion).",
    },
    {
      id: "obstetrics-anaemia-pregnancy-c12",
      front: "How long is delayed cord clamping recommended and what does it give the baby?",
      back: "1-3 minutes after birth in a baby not needing resuscitation; it transfers 80-100 mL of blood and prevents infant iron deficiency.",
    },
  ],
  references: [
    "Anemia Mukt Bharat Operational Guidelines, MoHFW, Government of India, 2018",
    "Guidelines for Control of Anaemia: National Iron Plus Initiative, MoHFW",
    "FOGSI General Clinical Practice Recommendations on Management of Iron Deficiency Anaemia in Pregnancy, 2016",
    "WHO Recommendations on Anaemia Diagnosis and Management in Pregnancy, 2016 and 2024 update",
    "National Family Health Survey (NFHS-5) 2019-21, India Fact Sheet",
    "Williams Obstetrics, 26th edition, 2022 - haematological disorders",
  ],
});

topics.push({
  id: "obstetrics-hypertensive-disorders",
  title: "Hypertensive disorders of pregnancy, pre-eclampsia and eclampsia",
  oneLiner:
    "Hypertensive disorders of pregnancy are hypertension of 140/90 mmHg or more on two occasions four hours apart after 20 weeks, classified as gestational hypertension, pre-eclampsia with or without severe features, eclampsia, chronic hypertension and chronic hypertension with superimposed pre-eclampsia; magnesium sulphate prevents and treats eclamptic convulsions and delivery is the only cure.",
  frequency: "core",
  keywords: [
    "pre-eclampsia",
    "eclampsia",
    "PIH",
    "gestational hypertension",
    "magnesium sulphate",
    "Pritchard regimen",
    "Zuspan regimen",
    "labetalol",
    "nifedipine",
    "methyldopa",
    "HELLP syndrome",
    "calcium gluconate",
    "proteinuria",
    "sFlt-1 PlGF",
    "abruptio placentae",
    "antenatal corticosteroids",
  ],
  sections: [
    {
      heading: "Definitions and classification",
      points: [
        "**Hypertension in pregnancy** is a systolic blood pressure of 140 mmHg or more and/or a diastolic of 90 mmHg or more, on two occasions at least 4 hours apart, measured in the sitting position with an appropriate cuff, using Korotkoff phase V for the diastolic.",
        "**Gestational hypertension:** new hypertension after 20 weeks without proteinuria or other features, resolving by 12 weeks postpartum. About a quarter progress to pre-eclampsia, so it is a diagnosis under review, not a discharge.",
        "**Pre-eclampsia:** hypertension after 20 weeks with proteinuria (300 mg or more in 24 hours, a urine protein-creatinine ratio of 0.3 or more, or dipstick 2+ if quantification is unavailable), **or, in the absence of proteinuria, hypertension with any maternal organ dysfunction or uteroplacental dysfunction** - the ISSHP 2018 definition that examiners now expect.",
        "**Pre-eclampsia with severe features:** systolic 160 mmHg or more or diastolic 110 mmHg or more, platelets below 100,000/microlitre, transaminases twice normal, creatinine above 1.1 mg/dL or doubled, pulmonary oedema, or new cerebral or visual symptoms. **Massive proteinuria and fetal growth restriction are no longer criteria for 'severe' in ACOG's definition**, though they still change management.",
        "**Eclampsia** is a generalised tonic-clonic convulsion in a woman with pre-eclampsia, not attributable to another cause; it may occur antepartum (about 50%), intrapartum (about 25%) or postpartum (about 25%, up to 6 weeks after delivery), and **in about a fifth of cases hypertension and proteinuria are minimal or absent before the fit.**",
        "**Chronic hypertension** is hypertension before 20 weeks or persisting beyond 12 weeks postpartum; **superimposed pre-eclampsia** is new proteinuria or new organ dysfunction on a background of chronic hypertension, and carries the worst outcomes of all the categories.",
      ],
    },
    {
      heading: "Pathophysiology and risk factors worth quoting",
      points: [
        "Pre-eclampsia is a **two-stage disease**: stage one is defective trophoblastic invasion of the spiral arterioles, which remain narrow and high-resistance; stage two is the resulting placental ischaemia releasing antiangiogenic factors (soluble fms-like tyrosine kinase-1 and soluble endoglin) that cause maternal systemic endothelial dysfunction.",
        "Endothelial dysfunction explains every feature: vasospasm causes hypertension, glomerular endotheliosis causes proteinuria, capillary leak causes oedema and pulmonary oedema, hepatic sinusoidal fibrin deposition causes epigastric pain, and cerebral vasospasm with oedema causes convulsions.",
        "**High-risk factors (one is enough to warrant aspirin):** previous pre-eclampsia, chronic hypertension, pregestational diabetes, chronic kidney disease, autoimmune disease such as SLE or antiphospholipid syndrome, and multiple pregnancy.",
        "**Moderate-risk factors (two are needed):** first pregnancy, age 40 or above, body mass index 30 kg/m2 or above, family history of pre-eclampsia, interpregnancy interval of more than 10 years, and multiple pregnancy conception by assisted reproduction.",
        "**Aspirin 75-150 mg at night from 12-16 weeks until 36 weeks reduces preterm pre-eclampsia by about 60%** (ASPRE trial), and calcium 1.5-2 g daily reduces pre-eclampsia in populations with low calcium intake, which includes most of India.",
        "The **sFlt-1 to PlGF ratio** is available in Indian tertiary centres: a ratio below 38 makes pre-eclampsia within one week very unlikely (high negative predictive value) and is used to avoid unnecessary admission.",
      ],
    },
    {
      heading: "Assessment of a woman with raised blood pressure",
      points: [
        "Confirm the blood pressure with correct technique after 5 minutes of rest, sitting, arm at heart level, appropriate cuff; **a small cuff on a large arm is the commonest cause of a spurious diagnosis.**",
        "Symptoms to elicit specifically: persistent frontal or occipital headache, blurring of vision or flashes of light, epigastric or right hypochondrial pain, nausea and vomiting, breathlessness, reduced urine output and reduced fetal movements.",
        "Examination: blood pressure, weight and any rapid gain, pedal and facial oedema, epigastric tenderness, deep tendon reflexes and clonus, fundus for retinal changes, chest for basal crepitations, and symphysio-fundal height with fetal heart rate.",
        "**Investigations at diagnosis:** urine dipstick with a spot protein-creatinine ratio or 24-hour protein, complete blood count with platelets, serum creatinine, liver transaminases, uric acid, lactate dehydrogenase, and peripheral smear for haemolysis.",
        "Fetal assessment: ultrasound for growth, amniotic fluid index and umbilical artery Doppler, plus cardiotocography or a non-stress test; **an absent or reversed end-diastolic flow changes the delivery decision immediately.**",
        "**HELLP syndrome** (Haemolysis, Elevated Liver enzymes, Low Platelets) is diagnosed on LDH 600 IU/L or more with schistocytes, AST or ALT twice the upper limit, and platelets below 100,000/microlitre; it may present with epigastric pain and vomiting and **normal or only mildly raised blood pressure.**",
      ],
    },
    {
      heading: "Antihypertensive treatment: exact drugs and doses",
      points: [
        "**Treat when blood pressure is 140/90 mmHg or more** (the CHIPS and CHAP trials support treating mild chronic and gestational hypertension to a target of 135/85 mmHg); **severe hypertension of 160/110 mmHg or more is an emergency requiring treatment within 30-60 minutes.**",
        "**Oral labetalol 100 mg twice daily**, increased every 2-3 days to a maximum of 800 mg three times daily (2400 mg per day). Avoid in asthma and in heart block.",
        "**Oral nifedipine:** immediate-release 10 mg, repeated every 20-30 minutes for up to 3-5 doses in severe hypertension, then maintenance with the retard preparation 10-20 mg twice or three times daily, maximum 120 mg per day. **Do not give sublingually** - the fall is uncontrolled and causes fetal distress.",
        "**Oral methyldopa 250 mg three times daily**, increased to a maximum of 1 g three times daily (3 g per day); safe but slow in onset and associated with postnatal depression, so it is avoided after delivery.",
        "**Intravenous labetalol for severe hypertension:** 20 mg slow IV bolus over 2 minutes, then 40 mg after 10 minutes, then 80 mg every 10 minutes to a maximum cumulative dose of 300 mg; or an infusion of 1-2 mg/min titrated to response.",
        "**Intravenous hydralazine:** 5 mg slowly over 5 minutes, repeated 5-10 mg every 20 minutes to a maximum of 20-30 mg, or an infusion of 0.5-10 mg/hour. Preload with 250-500 mL of crystalloid to blunt the reflex tachycardia and maternal hypotension.",
        "**Absolutely contraindicated:** ACE inhibitors and angiotensin receptor blockers (fetal renal dysgenesis, oligohydramnios, skull hypoplasia, neonatal renal failure), atenolol (fetal growth restriction), and diuretics as first-line agents since the plasma volume in pre-eclampsia is already contracted.",
      ],
    },
    {
      heading: "Magnesium sulphate: the regimens, monitoring and antidote",
      points: [
        "**Magnesium sulphate is the drug of choice for preventing and treating eclamptic convulsions** - the Magpie trial showed it halves the risk of eclampsia, and the Collaborative Eclampsia Trial showed it is superior to both diazepam and phenytoin for preventing recurrent fits.",
        "**Pritchard (intramuscular) regimen - the standard where infusion pumps are unavailable, and the one to write in an Indian exam:** loading dose 4 g of 20% solution intravenously over 5 minutes PLUS 10 g of 50% solution deep intramuscularly (5 g into each buttock with 1 mL of 2% lignocaine); maintenance 5 g of 50% solution deep intramuscularly into alternate buttocks every 4 hours, continued for 24 hours after delivery or after the last convulsion, whichever is later.",
        "**Zuspan (intravenous) regimen:** loading dose 4 g of 20% solution intravenously over 15-20 minutes, followed by a maintenance infusion of 1 g per hour for 24 hours after delivery or the last fit. Some units use 2 g/hour if fits recur.",
        "**Sibai regimen:** 6 g loading intravenously over 15-20 minutes then 2 g per hour by infusion. **Low-dose (Dhaka) regimen:** 4 g IV plus 6 g IM loading, then 2.5 g IM every 4 hours - used where magnesium toxicity risk is high in small women.",
        "**A recurrent convulsion on magnesium is treated with a further 2 g of 20% magnesium sulphate intravenously over 5 minutes** (2-4 g if the woman is large); if fits still continue, consider intubation and an alternative anticonvulsant, and image the brain to exclude a stroke or venous sinus thrombosis.",
        "**Before every maintenance dose check three things:** respiratory rate at least 16 per minute, urine output at least 30 mL per hour (100 mL in the last 4 hours), and the patellar (knee) reflex present. **Loss of the patellar reflex is the earliest sign of toxicity** and occurs at about 8-10 mEq/L, respiratory depression at 12 mEq/L and cardiac arrest at above 25-30 mEq/L; the therapeutic range is 4-7 mEq/L.",
        "**Antidote: calcium gluconate 1 g (10 mL of a 10% solution) intravenously over 10 minutes**, kept ready at the bedside with every magnesium sulphate prescription. Magnesium is renally excreted, so halve or omit the maintenance dose if urine output falls or creatinine rises.",
      ],
    },
    {
      heading: "Delivery, the acute fit and postpartum care",
      points: [
        "**Delivery is the only cure.** Deliver at 37 weeks for gestational hypertension or pre-eclampsia without severe features; deliver at 34 weeks or immediately for pre-eclampsia with severe features, and immediately at any gestation for eclampsia, HELLP, abruption, pulmonary oedema, non-reassuring fetal status or uncontrollable hypertension.",
        "**Give antenatal corticosteroids** - betamethasone 12 mg intramuscularly 24 hours apart for two doses, or dexamethasone 6 mg intramuscularly 12-hourly for four doses - between 24 and 34 weeks, but **never delay delivery for steroids in eclampsia or a deteriorating mother.**",
        "**Immediate management of an eclamptic fit (the sequence to recite):** call for help, turn the woman into the left lateral position, protect the airway and give oxygen by mask at 8-10 L/min, do not restrain the limbs or force anything into the mouth, secure intravenous access, give magnesium sulphate loading, control the blood pressure, catheterise and chart hourly urine output, and plan delivery once the woman is stable - **stabilise first, deliver second; caesarean section during a fit kills.**",
        "Fluids are restricted to **80 mL per hour or 1 mL/kg/hour** because pre-eclampsia is a leaky, volume-contracted state and the commonest iatrogenic death is pulmonary oedema from over-transfusion of crystalloid.",
        "**Mode of delivery is decided obstetrically, not by the diagnosis:** a favourable cervix at term allows induction and vaginal delivery with a shortened second stage; caesarean is for obstetric indications, an unfavourable cervix at early gestation, or a deteriorating fetus.",
        "**Postpartum:** continue magnesium sulphate for 24 hours, continue antihypertensives (labetalol or nifedipine, both compatible with breastfeeding; avoid methyldopa because of depression), monitor blood pressure for at least 72 hours in hospital and again at day 7-10, and remember that **44% of eclampsia occurs postpartum** - a woman with a headache in the first week after delivery must have her blood pressure taken.",
        "Counsel at discharge: a 15-20% recurrence risk in the next pregnancy, the need for aspirin from 12 weeks next time, and a **lifelong doubling of cardiovascular and stroke risk** requiring annual blood pressure, glucose and lipid checks - this long-term follow-up is exactly the family physician's job.",
      ],
    },
  ],
  tables: [
    {
      heading: "Classification of hypertensive disorders of pregnancy",
      columns: ["Category", "Onset", "Proteinuria / organ dysfunction", "Key point"],
      rows: [
        ["Chronic hypertension", "Before 20 weeks or persisting past 12 weeks postpartum", "Absent unless superimposed", "Needs aspirin and pre-eclampsia surveillance"],
        ["Gestational hypertension", "After 20 weeks", "Absent", "Up to 25% progress to pre-eclampsia"],
        ["Pre-eclampsia", "After 20 weeks", "Present, or organ dysfunction without proteinuria", "Deliver at 37 weeks if no severe features"],
        ["Pre-eclampsia with severe features", "After 20 weeks", "BP 160/110, platelets under 100,000, AST/ALT x2, creatinine over 1.1 mg/dL, pulmonary oedema, cerebral or visual symptoms", "Magnesium sulphate and delivery from 34 weeks"],
        ["Eclampsia", "Any time after 20 weeks up to 6 weeks postpartum", "Convulsion, may occur with minimal hypertension", "Stabilise, magnesium sulphate, then deliver"],
        ["Superimposed pre-eclampsia", "After 20 weeks on chronic hypertension", "New proteinuria or new organ dysfunction", "Worst maternal and perinatal outcomes"],
      ],
    },
    {
      heading: "Magnesium sulphate regimens compared",
      columns: ["Regimen", "Loading dose", "Maintenance", "Duration"],
      rows: [
        ["Pritchard (IM)", "4 g of 20% IV over 5 min PLUS 10 g of 50% deep IM (5 g each buttock)", "5 g of 50% deep IM into alternate buttocks every 4 hours", "24 hours after delivery or last fit"],
        ["Zuspan (IV)", "4 g of 20% IV over 15-20 min", "1 g per hour by IV infusion", "24 hours after delivery or last fit"],
        ["Sibai (IV)", "6 g IV over 15-20 min", "2 g per hour by IV infusion", "24 hours after delivery or last fit"],
        ["Low-dose Dhaka", "4 g IV plus 6 g IM", "2.5 g IM every 4 hours", "24 hours after delivery or last fit"],
        ["Recurrent fit", "Additional 2 g of 20% IV over 5 minutes", "Continue existing maintenance", "Reassess for intracranial cause if fits persist"],
      ],
    },
    {
      heading: "Antihypertensives in pregnancy: doses and limits",
      columns: ["Drug", "Route and dose", "Maximum", "Caution"],
      rows: [
        ["Labetalol", "100 mg PO BD, titrate every 2-3 days", "800 mg TDS (2400 mg/day)", "Asthma, heart block, bradycardia"],
        ["Labetalol (severe HTN)", "20 mg IV, then 40 mg, then 80 mg every 10 min", "300 mg cumulative", "Monitor pulse; neonatal bradycardia"],
        ["Nifedipine (immediate release)", "10 mg PO, repeat every 20-30 min", "3-5 doses acutely; 120 mg/day", "Never sublingual; headache, flushing"],
        ["Nifedipine retard", "10-20 mg PO BD-TDS", "120 mg/day", "Interaction with magnesium: watch hypotension"],
        ["Methyldopa", "250 mg PO TDS", "1 g TDS (3 g/day)", "Slow onset; avoid postpartum (depression)"],
        ["Hydralazine", "5 mg slow IV, repeat 5-10 mg every 20 min", "20-30 mg", "Preload 250-500 mL crystalloid; tachycardia"],
        ["Calcium gluconate (antidote)", "1 g = 10 mL of 10% IV over 10 min", "Repeat as needed", "Keep at the bedside with magnesium"],
      ],
    },
  ],
  redFlags: [
    "Blood pressure 160/110 mmHg or more at any gestation - severe hypertension, treat within 30-60 minutes, do not send home for review.",
    "Headache with visual disturbance, epigastric pain, vomiting or hyperreflexia with clonus - imminent eclampsia, start magnesium sulphate before transfer.",
    "Convulsion or unconsciousness in a pregnant or recently delivered woman - eclampsia until proven otherwise; magnesium sulphate first, diagnosis later.",
    "Platelets below 100,000/microlitre, AST or ALT above twice normal, or LDH above 600 IU/L with epigastric pain - HELLP syndrome; deliver, and do not be reassured by a modest blood pressure.",
    "Breathlessness with basal crepitations and low oxygen saturation - pulmonary oedema, usually iatrogenic from fluid overload; sit up, oxygen, furosemide 40 mg IV, stop fluids.",
    "Vaginal bleeding with a woody hard tender uterus and fetal distress in a pre-eclamptic woman - abruptio placentae, resuscitate and deliver.",
    "Urine output below 30 mL per hour or 100 mL in 4 hours on magnesium sulphate - withhold the next dose, check the patellar reflex and respiratory rate.",
    "A woman presenting up to six weeks postpartum with headache or a fit - postpartum eclampsia accounts for a quarter or more of cases.",
  ],
  pearls: [
    "Proteinuria is no longer required for the diagnosis of pre-eclampsia; hypertension after 20 weeks with any maternal organ dysfunction or uteroplacental dysfunction is enough (ISSHP 2018).",
    "Magnesium sulphate is an anticonvulsant, not an antihypertensive - the blood pressure needs labetalol, nifedipine or hydralazine in addition, always.",
    "Learn Pritchard by its numbers: 4 g IV plus 10 g IM loading, then 5 g IM every 4 hours for 24 hours. Zuspan is 4 g IV then 1 g per hour.",
    "Three checks before every magnesium maintenance dose: respiratory rate 16 or more, urine output 30 mL/hour or more, patellar reflex present. Calcium gluconate 1 g IV sits beside the syringe.",
    "Never give sublingual nifedipine - the precipitous fall causes fetal distress and maternal stroke; use the oral immediate-release capsule swallowed whole.",
    "Fluid at 80 mL/hour, not more. Pulmonary oedema from overzealous crystalloid is a leading iatrogenic cause of death in pre-eclampsia.",
    "Stabilise before you deliver: an eclamptic woman taken to theatre mid-fit, unresuscitated, is a maternal death waiting to happen.",
    "Delivery cures pre-eclampsia but not immediately - a quarter to nearly half of eclampsia happens after delivery, so surveillance continues for at least 72 hours and again at day 7-10.",
    "A woman who has had pre-eclampsia carries double the lifetime cardiovascular risk; put her on an annual blood pressure, glucose and lipid review in your practice.",
  ],
  theory: [
    {
      id: "obstetrics-hypertensive-disorders-t1",
      paper: "IV",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 22-year-old primigravida at 34 weeks is brought to your clinic having had a generalised convulsion at home. Her blood pressure is 170/116 mmHg and urine dipstick shows 3+ protein. Describe your immediate management and subsequent care, including the magnesium sulphate regimen you would use.",
      openingLines: [
        "This is eclampsia - a generalised tonic-clonic convulsion in a woman with pre-eclampsia, not attributable to any other cause - and it is an obstetric emergency with a maternal case fatality of 1-5% and a perinatal mortality of 15-30%.",
        "The priorities in order are: control the fit and prevent recurrence with magnesium sulphate, control the blood pressure, stabilise the mother, and only then plan delivery, which is the definitive treatment.",
      ],
      answer: [
        {
          heading: "1. Immediate resuscitation",
          points: [
            "Call for help and note the time; do not leave the woman alone.",
            "Turn her into the left lateral position to prevent aortocaval compression and aspiration; clear the airway with suction and insert an oral airway or mouth gag if it can be placed safely.",
            "Give oxygen 8-10 L/min by face mask; do not restrain the limbs or force anything between the teeth during the fit.",
            "Secure two wide-bore intravenous cannulae, send blood for complete blood count, platelets, creatinine, liver enzymes, uric acid, LDH, grouping and cross-matching.",
            "Catheterise with an indwelling catheter and chart hourly urine output; protect from injury with cot sides.",
          ],
        },
        {
          heading: "2. Magnesium sulphate - Pritchard regimen",
          points: [
            "Loading dose: 4 g of 20% magnesium sulphate intravenously over 5 minutes, plus 10 g of 50% solution deep intramuscularly, 5 g into each buttock with 1 mL of 2% lignocaine.",
            "Maintenance: 5 g of 50% solution deep intramuscularly into alternate buttocks every 4 hours.",
            "Continue for 24 hours after delivery or 24 hours after the last convulsion, whichever is later.",
            "The alternative Zuspan regimen is 4 g of 20% intravenously over 15-20 minutes followed by an infusion of 1 g per hour; it needs a pump and continuous supervision.",
            "A recurrent fit is treated with a further 2 g of 20% magnesium sulphate intravenously over 5 minutes.",
            "Before each maintenance dose confirm: respiratory rate at least 16 per minute, urine output at least 30 mL per hour, and a present patellar reflex. Keep calcium gluconate 1 g (10 mL of 10%) at the bedside for intravenous administration over 10 minutes if toxicity occurs.",
          ],
        },
        {
          heading: "3. Blood pressure control",
          points: [
            "The target is a systolic of 140-150 mmHg and a diastolic of 90-100 mmHg; do not drop the pressure abruptly, as placental perfusion is pressure-dependent.",
            "Labetalol 20 mg slow intravenously over 2 minutes, then 40 mg after 10 minutes, then 80 mg every 10 minutes to a maximum cumulative dose of 300 mg.",
            "Alternatives: oral nifedipine immediate-release 10 mg repeated every 20-30 minutes for up to 3-5 doses, or hydralazine 5 mg intravenously repeated 5-10 mg every 20 minutes to a maximum of 20-30 mg with a 250-500 mL crystalloid preload.",
            "Maintenance thereafter with oral labetalol 100-200 mg twice or three times daily or nifedipine retard 10-20 mg twice daily.",
          ],
        },
        {
          heading: "4. Fluids, monitoring and fetal assessment",
          points: [
            "Restrict fluids to 80 mL per hour (about 1 mL/kg/hour) - pulmonary oedema from over-infusion is a leading iatrogenic cause of death.",
            "Monitor pulse, blood pressure, respiratory rate, oxygen saturation, reflexes and urine output hourly; repeat platelets, creatinine and liver enzymes 12-hourly.",
            "Assess the fetus with cardiotocography once the mother is stable; transient fetal bradycardia during and after a fit is common and usually recovers - it is not by itself an indication for immediate caesarean section in an unstabilised mother.",
          ],
        },
        {
          heading: "5. Delivery and postpartum care",
          points: [
            "Deliver once the mother is stabilised, ideally within 6-12 hours; at 34 weeks a single course of antenatal corticosteroids may be given if delivery can safely be deferred, but stabilisation and delivery are never delayed for steroids in eclampsia.",
            "Mode of delivery is an obstetric decision: induction and vaginal delivery with a shortened second stage if the cervix is favourable and the fetus is reassuring; caesarean section for obstetric indications, an unfavourable cervix or fetal compromise.",
            "Avoid ergometrine in the third stage because it raises the blood pressure - use oxytocin 10 IU intramuscularly.",
            "Continue magnesium sulphate and antihypertensives for 24 hours postpartum; monitor blood pressure for at least 72 hours in hospital and review at day 7-10.",
            "Counsel on a 15-20% recurrence risk, the need for aspirin from 12 weeks in the next pregnancy, contraception, and lifelong annual cardiovascular risk assessment.",
          ],
        },
      ],
      mustDraw: [
        "A flow chart of eclampsia management: call for help - left lateral, airway, oxygen - IV access - magnesium sulphate loading - antihypertensive - catheterise - stabilise - deliver.",
        "A table comparing the Pritchard and Zuspan magnesium sulphate regimens with exact doses.",
      ],
      markSplit: [
        { part: "Definition and immediate resuscitation", marks: 2 },
        { part: "Magnesium sulphate regimen with doses and monitoring", marks: 3 },
        { part: "Blood pressure control with drug doses", marks: 2 },
        { part: "Fluids, monitoring and fetal assessment", marks: 1 },
        { part: "Delivery and postpartum care", marks: 2 },
      ],
      keywords: ["eclampsia", "magnesium sulphate", "Pritchard regimen", "labetalol", "calcium gluconate", "fluid restriction"],
    },
    {
      id: "obstetrics-hypertensive-disorders-t2",
      paper: "IV",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on HELLP syndrome.",
      openingLines: [
        "HELLP syndrome is a severe variant of pre-eclampsia characterised by Haemolysis, Elevated Liver enzymes and Low Platelets, described by Weinstein in 1982.",
        "It complicates 0.5-0.9% of all pregnancies and 10-20% of cases of severe pre-eclampsia, and it may occur with only mildly raised blood pressure and without proteinuria, which is why it is missed.",
      ],
      answer: [
        {
          heading: "Diagnostic criteria (Tennessee classification)",
          points: [
            "Haemolysis: abnormal peripheral smear with schistocytes and burr cells, serum LDH 600 IU/L or more, or total bilirubin 1.2 mg/dL or more.",
            "Elevated liver enzymes: AST (or ALT) at least twice the upper limit of normal, usually 70 IU/L or more.",
            "Low platelets: platelet count below 100,000 per microlitre.",
            "The Mississippi classification grades severity by platelet count: class 1 below 50,000, class 2 50,000-100,000, class 3 100,000-150,000.",
          ],
        },
        {
          heading: "Clinical features",
          points: [
            "Right hypochondrial or epigastric pain in up to 90%, nausea and vomiting in about half, malaise for several days that is often mistaken for a viral illness.",
            "Hypertension may be absent or mild in 15-20%, and proteinuria may be absent - HELLP is a biochemical diagnosis.",
            "Complications: disseminated intravascular coagulation, abruptio placentae, acute kidney injury, pulmonary oedema, subcapsular liver haematoma and hepatic rupture, retinal detachment and stroke.",
          ],
        },
        {
          heading: "Management",
          points: [
            "Admit to a facility with blood bank and intensive care; stabilise the mother first.",
            "Magnesium sulphate for seizure prophylaxis by the Pritchard or Zuspan regimen, and antihypertensives for a blood pressure of 160/110 mmHg or more.",
            "Delivery is the definitive treatment at any gestation beyond 34 weeks and in any deteriorating mother; between 24 and 34 weeks give corticosteroids and deliver within 24-48 hours if the mother is stable.",
            "Transfuse platelets if the count is below 20,000 per microlitre, or below 50,000 before caesarean section; use fresh frozen plasma and cryoprecipitate for disseminated intravascular coagulation.",
            "Corticosteroids improve the platelet count transiently but do not improve maternal or perinatal outcome, and are given for fetal lung maturity rather than for the syndrome itself.",
            "Continue monitoring for 48-96 hours postpartum, when the platelet nadir typically occurs before recovery.",
          ],
        },
      ],
      mustDraw: ["A table of the Tennessee criteria (LDH, AST/ALT, platelets) and the Mississippi classes."],
      markSplit: [
        { part: "Definition and diagnostic criteria", marks: 2 },
        { part: "Clinical features and complications", marks: 1.5 },
        { part: "Management including delivery timing and transfusion", marks: 1.5 },
      ],
      keywords: ["HELLP", "Tennessee criteria", "Mississippi classification", "schistocytes", "subcapsular haematoma"],
    },
    {
      id: "obstetrics-hypertensive-disorders-t3",
      paper: "IV",
      kind: "chart-flow",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Draw a flow chart for the management of severe pre-eclampsia at 32 weeks at a primary health centre, and state when and how you would transfer the woman.",
      openingLines: [
        "Severe pre-eclampsia at 32 weeks in a primary health centre is a stabilise-and-transfer problem: the definitive treatment is delivery, which cannot safely be undertaken here, but the woman must not travel unstabilised.",
        "The sequence is assess, give magnesium sulphate, control the blood pressure, communicate with the receiving facility, and transfer with an escort and the drugs running.",
      ],
      answer: [
        {
          heading: "Step 1 - Recognise and assess",
          points: [
            "Confirm blood pressure 160/110 mmHg or more, or any level with severe headache, visual disturbance, epigastric pain, vomiting, oliguria or hyperreflexia with clonus.",
            "Dipstick the urine, check reflexes, listen to the chest, count the respiratory rate, and record the fetal heart rate and symphysio-fundal height.",
          ],
        },
        {
          heading: "Step 2 - Magnesium sulphate loading",
          points: [
            "Pritchard loading dose: 4 g of 20% magnesium sulphate intravenously over 5 minutes plus 10 g of 50% deep intramuscularly (5 g each buttock with 1 mL of 2% lignocaine).",
            "Record the time; the next 5 g intramuscular dose is due 4 hours later if transfer is prolonged.",
            "Keep calcium gluconate 1 g (10 mL of 10%) drawn up in the ambulance.",
          ],
        },
        {
          heading: "Step 3 - Control blood pressure",
          points: [
            "Oral nifedipine immediate-release 10 mg, repeated after 20-30 minutes if the pressure remains 160/110 mmHg or more, up to three doses; or intravenous labetalol 20 mg then 40 mg then 80 mg at 10-minute intervals.",
            "Target 140-150/90-100 mmHg; do not aim for normal readings.",
          ],
        },
        {
          heading: "Step 4 - Supportive measures and steroids",
          points: [
            "Catheterise, chart urine output, restrict intravenous fluids to 80 mL per hour.",
            "Give the first dose of betamethasone 12 mg intramuscularly (or dexamethasone 6 mg intramuscularly) for fetal lung maturity - this must never delay transfer.",
            "Nil by mouth, left lateral position, oxygen if saturation is below 95%.",
          ],
        },
        {
          heading: "Step 5 - Transfer",
          points: [
            "Telephone the receiving obstetric unit, name the woman, state the blood pressure, the magnesium dose and time given, and confirm a bed and blood availability.",
            "Transfer by 108 ambulance with a trained escort, the magnesium and antihypertensive drugs, calcium gluconate, an intravenous line running slowly, and the MCP card and a written referral note.",
            "Do not transfer during an active convulsion or before the loading dose has been given.",
          ],
        },
      ],
      mustDraw: ["The five-step flow chart with drug names and doses written at each step."],
      markSplit: [
        { part: "Recognition and assessment", marks: 1 },
        { part: "Magnesium sulphate loading with exact dose", marks: 1.5 },
        { part: "Blood pressure control with drug doses", marks: 1.5 },
        { part: "Steroids, fluids and transfer protocol", marks: 1 },
      ],
      keywords: ["severe pre-eclampsia", "stabilise and transfer", "magnesium sulphate", "betamethasone", "referral"],
    },
  ],
  mcqs: [
    {
      id: "obstetrics-hypertensive-disorders-q1",
      stem: "Which of the following most accurately describes the Pritchard regimen of magnesium sulphate?",
      options: [
        "4 g intravenously over 15-20 minutes followed by 1 g per hour by infusion",
        "4 g of 20% intravenously over 5 minutes plus 10 g of 50% deep intramuscularly, then 5 g of 50% intramuscularly every 4 hours",
        "6 g intravenously over 20 minutes followed by 2 g per hour by infusion",
        "10 g of 50% intramuscularly as a single dose repeated after 6 hours",
        "4 g intravenously plus 6 g intramuscularly, then 2.5 g intramuscularly every 4 hours",
      ],
      answer: 1,
      explanation:
        "Pritchard is the intramuscular regimen: 4 g of 20% solution intravenously over 5 minutes plus 10 g of 50% deep intramuscularly (5 g into each buttock), then 5 g of 50% intramuscularly into alternate buttocks every 4 hours, continued 24 hours after delivery or the last convulsion. The first option is Zuspan and the third is Sibai, both intravenous infusion regimens requiring a pump. The fourth omits the intravenous loading component entirely and would leave the woman unprotected in the first hour. The fifth is the low-dose Dhaka regimen used where toxicity risk is high.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-hypertensive-disorders-q2",
      stem: "A woman on maintenance magnesium sulphate has a respiratory rate of 10 per minute and absent knee jerks. What is the immediate action?",
      options: [
        "Give calcium gluconate 1 g intravenously over 10 minutes and stop magnesium sulphate",
        "Give furosemide 40 mg intravenously to increase magnesium excretion",
        "Reduce the magnesium dose by half and continue",
        "Give naloxone 0.4 mg intravenously",
        "Start a phenytoin infusion instead",
      ],
      answer: 0,
      explanation:
        "Absent patellar reflexes with a respiratory rate below 12-16 per minute indicates magnesium toxicity, and the antidote is calcium gluconate 1 g (10 mL of 10% solution) intravenously over 10 minutes with immediate cessation of magnesium. Furosemide does increase renal magnesium loss but is far too slow and risks hypovolaemia in a volume-contracted pre-eclamptic. Halving the dose is inadequate once respiratory depression has appeared. Naloxone reverses opioids, not magnesium. Switching to phenytoin does not treat the existing toxicity and phenytoin is inferior to magnesium for eclampsia in any case.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-hypertensive-disorders-q3",
      stem: "A 30-year-old at 33 weeks has a blood pressure of 168/112 mmHg, a platelet count of 78,000/microlitre, AST 140 IU/L, LDH 720 IU/L and epigastric pain. Urine protein is 1+. What is the diagnosis and the definitive treatment?",
      options: [
        "Gestational hypertension; start oral labetalol and review weekly",
        "Acute fatty liver of pregnancy; give N-acetylcysteine",
        "HELLP syndrome; stabilise and deliver",
        "Viral hepatitis; supportive care and serology",
        "Pre-eclampsia without severe features; deliver at 37 weeks",
      ],
      answer: 2,
      explanation:
        "Haemolysis with LDH above 600 IU/L, AST more than twice normal and platelets below 100,000 per microlitre in a hypertensive woman with epigastric pain fulfils the Tennessee criteria for HELLP syndrome, and delivery after stabilisation is the definitive treatment regardless of gestation beyond 34 weeks or in any deteriorating mother. Gestational hypertension excludes organ dysfunction by definition and a weekly review would be dangerous here. Acute fatty liver features hypoglycaemia, coagulopathy and a raised bilirubin with normal-to-modest transaminase rise. Viral hepatitis does not produce thrombocytopenia with hypertension. Waiting to 37 weeks ignores the severe features already present.",
      difficulty: "moderate",
    },
    {
      id: "obstetrics-hypertensive-disorders-q4",
      stem: "A 27-year-old at 30 weeks with severe pre-eclampsia becomes breathless with bibasal crepitations and oxygen saturation of 88% two hours after admission, during which she received 1.5 litres of Ringer lactate. What is the most likely cause and the immediate management?",
      options: [
        "Pulmonary embolism; start therapeutic low-molecular-weight heparin",
        "Pulmonary oedema from fluid overload; sit her up, oxygen, furosemide 40 mg IV and stop the infusion",
        "Aspiration pneumonia; start broad-spectrum antibiotics",
        "Magnesium toxicity; give calcium gluconate",
        "Anaphylaxis to magnesium; give adrenaline",
      ],
      answer: 1,
      explanation:
        "Pre-eclampsia is a low-oncotic-pressure, capillary-leak state with a contracted plasma volume, so 1.5 litres of crystalloid in two hours readily produces pulmonary oedema - a leading iatrogenic cause of maternal death, which is why fluids are capped at 80 mL per hour. Treatment is upright posture, oxygen, intravenous furosemide 40 mg and cessation of the infusion. Pulmonary embolism is possible but far less likely with this exact fluid history and bibasal crepitations. There is no history of aspiration. Magnesium toxicity causes respiratory depression with a slow rate and absent reflexes, not crepitations with tachypnoea, and anaphylaxis would present with rash, bronchospasm and hypotension.",
      difficulty: "moderate",
    },
    {
      id: "obstetrics-hypertensive-disorders-q5",
      stem: "Which antihypertensive should be avoided in the second and third trimesters of pregnancy?",
      options: [
        "Labetalol",
        "Nifedipine",
        "Methyldopa",
        "Enalapril",
        "Hydralazine",
      ],
      answer: 3,
      explanation:
        "ACE inhibitors such as enalapril are contraindicated after the first trimester because they cause fetal renal dysgenesis, oligohydramnios, pulmonary hypoplasia, skull hypoplasia and neonatal anuric renal failure; the same applies to angiotensin receptor blockers. Labetalol, nifedipine and methyldopa are the three standard oral agents in pregnancy, and hydralazine is a first-line parenteral agent for severe hypertension. Atenolol, not listed here, is the beta-blocker to avoid because of fetal growth restriction.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-hypertensive-disorders-q6",
      stem: "A 19-year-old primigravida at 36 weeks has a blood pressure of 146/94 mmHg on two occasions six hours apart, no proteinuria, normal platelets, normal liver and renal function, and normal fetal growth. What is the correct classification and plan?",
      options: [
        "Pre-eclampsia; start magnesium sulphate",
        "Gestational hypertension; antihypertensive to a target of 135/85 mmHg, weekly surveillance and delivery at 37-39 weeks",
        "Chronic hypertension; investigate for secondary causes",
        "White coat hypertension; reassure and discharge",
        "Severe pre-eclampsia; deliver immediately",
      ],
      answer: 1,
      explanation:
        "New hypertension after 20 weeks without proteinuria or organ dysfunction is gestational hypertension; the CHIPS and CHAP evidence supports treating to a target of about 135/85 mmHg, with weekly assessment because up to a quarter progress to pre-eclampsia, and delivery around 37-39 weeks. Magnesium sulphate is for eclampsia or pre-eclampsia with severe features, neither of which she has. Chronic hypertension requires onset before 20 weeks. Dismissing it as white coat hypertension without out-of-office confirmation risks missing progression, and immediate delivery is unjustified at this severity.",
      difficulty: "moderate",
    },
    {
      id: "obstetrics-hypertensive-disorders-q7",
      stem: "A woman delivered five days ago presents with a severe headache and a blood pressure of 172/110 mmHg. She had no hypertension during pregnancy. What is the most appropriate initial management?",
      options: [
        "Reassure - hypertension after delivery is physiological and self-limiting",
        "Start an antihypertensive and give magnesium sulphate, treating this as postpartum pre-eclampsia",
        "Refer for CT brain before any treatment",
        "Give paracetamol and review in one week",
        "Start a combined oral contraceptive to regulate the blood pressure",
      ],
      answer: 1,
      explanation:
        "Postpartum pre-eclampsia and eclampsia can occur up to six weeks after delivery in a woman with no antenatal hypertension, and roughly a quarter to nearly half of eclampsia is postpartum, so severe hypertension with headache demands antihypertensive treatment and magnesium sulphate seizure prophylaxis. Calling it physiological or treating it with paracetamol risks an eclamptic fit or a stroke. Imaging is appropriate if there are focal signs or if fits continue despite magnesium, but it must not delay treatment of a pressure of 172/110 mmHg. A combined oral contraceptive is contraindicated in uncontrolled hypertension and in the early postpartum period.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "obstetrics-hypertensive-disorders-c1",
      front: "Definition of pre-eclampsia (ISSHP 2018).",
      back: "Hypertension after 20 weeks with proteinuria (300 mg/24 h, PCR 0.3, or dipstick 2+), OR with maternal organ dysfunction or uteroplacental dysfunction even without proteinuria.",
    },
    {
      id: "obstetrics-hypertensive-disorders-c2",
      front: "Severe features of pre-eclampsia.",
      back: "BP 160/110 mmHg or more, platelets under 100,000/microlitre, AST/ALT twice normal, creatinine over 1.1 mg/dL or doubled, pulmonary oedema, new cerebral or visual symptoms.",
    },
    {
      id: "obstetrics-hypertensive-disorders-c3",
      front: "Pritchard magnesium sulphate regimen.",
      back: "Loading 4 g of 20% IV over 5 min PLUS 10 g of 50% deep IM (5 g each buttock); maintenance 5 g of 50% IM into alternate buttocks every 4 hours for 24 hours after delivery or the last fit.",
    },
    {
      id: "obstetrics-hypertensive-disorders-c4",
      front: "Zuspan magnesium sulphate regimen.",
      back: "Loading 4 g of 20% IV over 15-20 minutes, then an infusion of 1 g per hour for 24 hours after delivery or the last convulsion.",
    },
    {
      id: "obstetrics-hypertensive-disorders-c5",
      front: "Three checks before every maintenance dose of magnesium sulphate.",
      back: "Respiratory rate 16 per minute or more, urine output 30 mL per hour or more (100 mL in 4 hours), and a present patellar reflex.",
    },
    {
      id: "obstetrics-hypertensive-disorders-c6",
      front: "Antidote to magnesium sulphate toxicity, with dose.",
      back: "Calcium gluconate 1 g = 10 mL of a 10% solution intravenously over 10 minutes; stop the magnesium.",
    },
    {
      id: "obstetrics-hypertensive-disorders-c7",
      front: "Therapeutic and toxic serum magnesium levels.",
      back: "Therapeutic 4-7 mEq/L; loss of patellar reflex 8-10 mEq/L; respiratory depression 12 mEq/L; cardiac arrest above 25-30 mEq/L.",
    },
    {
      id: "obstetrics-hypertensive-disorders-c8",
      front: "Intravenous labetalol regimen for severe hypertension in pregnancy.",
      back: "20 mg slow IV, then 40 mg after 10 min, then 80 mg every 10 min, to a maximum cumulative 300 mg; or infusion 1-2 mg/min.",
    },
    {
      id: "obstetrics-hypertensive-disorders-c9",
      front: "Hydralazine dose for severe hypertension in pregnancy.",
      back: "5 mg slow IV over 5 minutes, repeat 5-10 mg every 20 minutes to a maximum of 20-30 mg, after a 250-500 mL crystalloid preload.",
    },
    {
      id: "obstetrics-hypertensive-disorders-c10",
      front: "Fluid rate in severe pre-eclampsia and why.",
      back: "80 mL per hour (about 1 mL/kg/h). The plasma volume is contracted and capillaries leak, so over-infusion causes pulmonary oedema - a leading iatrogenic cause of death.",
    },
    {
      id: "obstetrics-hypertensive-disorders-c11",
      front: "Tennessee criteria for HELLP syndrome.",
      back: "LDH 600 IU/L or more (or bilirubin 1.2 mg/dL with schistocytes), AST/ALT at least twice normal, platelets below 100,000 per microlitre.",
    },
    {
      id: "obstetrics-hypertensive-disorders-c12",
      front: "Timing of delivery in hypertensive disorders.",
      back: "37 weeks for gestational hypertension or pre-eclampsia without severe features; 34 weeks for severe features; immediate delivery for eclampsia, HELLP, abruption, pulmonary oedema or non-reassuring fetal status.",
    },
  ],
  references: [
    "FOGSI-ICOG Good Clinical Practice Recommendations on Pre-eclampsia and Eclampsia, 2019",
    "ISSHP Classification, Diagnosis and Management Recommendations for Hypertensive Disorders of Pregnancy, 2018",
    "ACOG Practice Bulletin 222: Gestational Hypertension and Preeclampsia, 2020",
    "WHO Recommendations: Policy of Interventionist versus Expectant Management of Severe Pre-eclampsia before Term, 2018",
    "Maternal Health Division, MoHFW - Guidelines for Management of Pregnancy Induced Hypertension including Eclampsia",
    "Williams Obstetrics, 26th edition, 2022 - hypertensive disorders",
  ],
});

topics.push({
  id: "obstetrics-gdm",
  title: "Gestational diabetes: the DIPSI and FOGSI approach",
  oneLiner:
    "Gestational diabetes mellitus is carbohydrate intolerance first recognised in pregnancy, screened in India by the DIPSI single-step non-fasting 75 g oral glucose test with a 2-hour plasma glucose of 140 mg/dL or more as the diagnostic threshold, treated first with medical nutrition therapy and then with metformin or insulin, targeting fasting under 95 mg/dL and 2-hour postprandial under 120 mg/dL.",
  frequency: "core",
  keywords: [
    "GDM",
    "gestational diabetes",
    "DIPSI",
    "FOGSI",
    "75 g OGTT",
    "IADPSG",
    "medical nutrition therapy",
    "metformin",
    "insulin",
    "macrosomia",
    "shoulder dystocia",
    "neonatal hypoglycaemia",
    "MNT",
    "self-monitoring of blood glucose",
    "postpartum OGTT",
    "national GDM guideline",
  ],
  sections: [
    {
      heading: "Definition, burden and why India screens differently",
      points: [
        "**Gestational diabetes mellitus (GDM) is carbohydrate intolerance of variable severity with onset or first recognition during pregnancy**; overt diabetes detected in the first trimester (fasting 126 mg/dL or more, random 200 mg/dL or more, or HbA1c 6.5% or more) is classified as **diabetes in pregnancy**, not GDM, and is managed as pre-existing diabetes.",
        "**Prevalence in India is 10-14.3% by DIPSI criteria**, higher in urban than rural areas and higher in the south and west; Indian women have an 11-fold higher risk of developing GDM than Caucasian women at the same body mass index.",
        "**The DIPSI (Diabetes in Pregnancy Study Group India) single-step test:** 75 g of anhydrous glucose in 300 mL of water, drunk over 5-10 minutes, **irrespective of the last meal**, with a single venous plasma glucose measured at 2 hours. **2-hour value of 140 mg/dL or more diagnoses GDM.** A value of 120-139 mg/dL is decreased gestational glucose tolerance, which merits nutrition therapy and repeat testing.",
        "The test is deliberately non-fasting because **an Indian woman who is told to come fasting frequently does not come at all**; the single-step, single-sample design converts screening and diagnosis into one visit and is what the Government of India National Guidelines for Diagnosis and Management of Gestational Diabetes Mellitus (2014, updated 2018) adopted for the public system.",
        "If the woman vomits within 30 minutes of the glucose load, the test is repeated the next day; if she vomits after 30 minutes, the test continues.",
        "**IADPSG/WHO 2013 criteria** (used by many private and academic centres) require a fasting 75 g OGTT with three samples: fasting 92 mg/dL or more, 1-hour 180 mg/dL or more, or 2-hour 153 mg/dL or more - **any one abnormal value diagnoses GDM.** Know both sets; examiners ask which one India's programme uses and why.",
      ],
    },
    {
      heading: "When and whom to test",
      points: [
        "**The national guideline tests every pregnant woman, twice: once at the first antenatal contact (booking) and again at 24-28 weeks**, universal screening being justified by the very high Indian prevalence and the poor sensitivity of risk-factor-based screening in this population.",
        "If the first test is done before 24 weeks and is negative, it **must** be repeated at 24-28 weeks, because insulin resistance peaks with placental lactogen output in the late second trimester.",
        "A woman diagnosed at booking is more likely to have undiagnosed pre-existing type 2 diabetes; check HbA1c and screen for retinopathy and nephropathy in that setting.",
        "**Risk factors that make early testing and a lower threshold for repeat testing sensible:** age above 25 years in Indian women, body mass index 25 kg/m2 or above, previous GDM, previous macrosomic baby above 3.5 kg, previous unexplained stillbirth or congenital anomaly, first-degree family history of diabetes, polycystic ovary syndrome, and a history of recurrent abortions.",
        "**Testing after 28 weeks is still worthwhile** in a woman who has not been tested, and glycosuria or polyhydramnios or a large-for-dates fetus at any gestation should prompt an immediate test.",
        "The FOGSI-ICOG position is aligned with the national guideline: **universal, single-step, non-fasting DIPSI testing in the public system, with the fasting IADPSG approach acceptable where women can reliably attend fasting.**",
      ],
    },
    {
      heading: "Medical nutrition therapy and glycaemic targets",
      points: [
        "**Medical nutrition therapy (MNT) is first-line for two weeks in every newly diagnosed woman**, aiming for euglycaemia with adequate nutrition and appropriate weight gain, and it alone controls 70-85% of GDM.",
        "Total calories are 30-35 kcal/kg of ideal body weight for a woman of normal weight, 25 kcal/kg if overweight, and about 40 kcal/kg if underweight; **carbohydrate is restricted to 40-50% of calories, protein raised to 20%, fat 30%, with a minimum of 175 g of carbohydrate a day to avoid ketosis.**",
        "**Three small meals and three snacks**, with a bedtime snack to prevent overnight starvation ketosis; complex carbohydrates and low glycaemic index foods (whole wheat, millets, brown rice, dal, vegetables) replacing polished rice, sugar and refined flour.",
        "**Glycaemic targets: fasting plasma glucose below 95 mg/dL, 1-hour postprandial below 140 mg/dL, and 2-hour postprandial below 120 mg/dL** (the national guideline follows the 2-hour target). HbA1c below 6% is desirable where it is available.",
        "**Self-monitoring of blood glucose** with a glucometer is ideal (fasting and 2-hour post-breakfast, post-lunch and post-dinner); where this is unaffordable the programme uses a fasting and 2-hour post-breakfast value at each visit.",
        "**Exercise: 30 minutes of moderate activity daily**, most practically a brisk walk for 15-20 minutes after each major meal, which lowers postprandial glucose substantially at no cost.",
      ],
    },
    {
      heading: "Drug treatment: metformin and insulin",
      points: [
        "**If the 2-hour postprandial glucose remains 120 mg/dL or more, or fasting remains 95 mg/dL or more, after two weeks of medical nutrition therapy, start drug treatment** - the national guideline's trigger.",
        "**Metformin is the first-line oral agent in the Indian national guideline**: start 500 mg once or twice daily with meals and increase every week to a maximum of 2000-2500 mg per day in divided doses. It crosses the placenta but has not been shown to be teratogenic or to harm the fetus in the MiG trial and its follow-up.",
        "**Add insulin if the target is not met on the maximum tolerated dose of metformin**, or if the fasting glucose exceeds 110-120 mg/dL or the 2-hour value exceeds 160-180 mg/dL at diagnosis, when the national guideline recommends starting insulin directly.",
        "**Insulin starting dose 0.1-0.2 units/kg/day**, usually as human premixed 30/70 insulin twice daily before breakfast and dinner, or as basal NPH at bedtime with regular insulin before meals; titrate by 2-4 units every 2-3 days against the highest out-of-range value. **Total requirement typically reaches 0.7-1.0 units/kg/day by the third trimester.**",
        "**Insulins with the best safety data in pregnancy** are human regular and NPH, and the rapid analogues aspart and lispro; **detemir is approved in pregnancy, glargine is widely used off-label with reassuring data, and glulisine and degludec are avoided for lack of data.**",
        "**Glibenclamide (glyburide) is second-line at best** - it crosses the placenta, is associated with more neonatal hypoglycaemia and macrosomia than insulin, and is not preferred in current Indian practice; **other sulphonylureas, pioglitazone, SGLT2 inhibitors and GLP-1 agonists are contraindicated.**",
      ],
    },
    {
      heading: "Fetal surveillance, delivery and intrapartum care",
      points: [
        "Fetal surveillance: an **anomaly scan at 18-20 weeks with particular attention to the fetal heart** (cardiac anomalies are commoner in pregestational diabetes), growth scans every 3-4 weeks from 28 weeks with amniotic fluid assessment, and daily fetal movement counting from 28 weeks.",
        "Add twice-weekly non-stress tests from 32-34 weeks in women on insulin, with poor control, hypertension, or growth restriction; **well-controlled diet-managed GDM does not need intensive antenatal testing.**",
        "**Timing of delivery: 39-40 weeks for well-controlled GDM on diet alone; 38-39 weeks if on insulin or metformin; earlier for poor control, macrosomia, hypertension or fetal compromise.** Do not allow a GDM pregnancy to go beyond 40 weeks.",
        "**Elective caesarean section should be discussed when the estimated fetal weight is 4000-4500 g or more**, because of the risk of shoulder dystocia; below that, vaginal delivery is appropriate with an anticipated and rehearsed shoulder dystocia drill.",
        "**Intrapartum:** monitor capillary glucose hourly to 2-hourly, aim for 70-110 mg/dL, omit the morning dose of subcutaneous insulin in the woman going into labour, and use an insulin-dextrose infusion in the woman on high insulin doses. Most women on diet or metformin need no intrapartum insulin.",
        "**Neonatal care:** anticipate hypoglycaemia (check blood glucose at 30 minutes to 1 hour and before feeds for the first 24 hours), hypocalcaemia, hypomagnesaemia, polycythaemia, hyperbilirubinaemia and respiratory distress; **early and frequent breastfeeding is the single best prevention of neonatal hypoglycaemia.**",
      ],
    },
    {
      heading: "Postpartum follow-up and long-term risk",
      points: [
        "**Stop all antidiabetic drugs immediately after delivery** in a woman with GDM; insulin requirements fall abruptly with delivery of the placenta.",
        "**Check a fasting or random plasma glucose before discharge**, and perform a **75 g oral glucose tolerance test at 6-12 weeks postpartum** to reclassify her as normal, prediabetic or diabetic - the national guideline mandates this and it is the step most often omitted.",
        "**Lifelong risk: about 50% of women with GDM develop type 2 diabetes within 5-10 years**, and Indian women progress faster than most populations; annual or at least biennial screening with fasting glucose or HbA1c is required for life.",
        "**Breastfeeding for at least 3-6 months reduces the mother's future diabetes risk and the child's obesity risk**, and should be actively supported; metformin and insulin are both compatible with breastfeeding.",
        "**Contraception:** progestogen-only pills, the levonorgestrel intrauterine system and the copper intrauterine device are all suitable; combined oral contraceptives are acceptable in a woman with GDM and no vascular disease, and depot medroxyprogesterone acetate is best avoided where metabolic risk is high.",
        "**Counsel about the next pregnancy:** preconception weight optimisation, folic acid, and testing at the first antenatal contact, because the recurrence rate of GDM is 30-70%. The offspring carries a raised lifetime risk of obesity and diabetes - **the fetal origins of adult disease argument that makes GDM a family medicine problem, not just an obstetric one.**",
      ],
    },
  ],
  tables: [
    {
      heading: "DIPSI versus IADPSG/WHO 2013 diagnostic criteria",
      columns: ["Feature", "DIPSI (Indian national programme)", "IADPSG / WHO 2013"],
      rows: [
        ["Fasting required", "No - test irrespective of last meal", "Yes - 8 hour fast"],
        ["Glucose load", "75 g anhydrous glucose in 300 mL water", "75 g anhydrous glucose"],
        ["Samples", "One, at 2 hours", "Three: fasting, 1 hour, 2 hours"],
        ["Diagnostic threshold", "2-hour plasma glucose 140 mg/dL or more", "Fasting 92, 1-hour 180, or 2-hour 153 mg/dL or more (any one)"],
        ["Intermediate category", "120-139 mg/dL = decreased gestational glucose tolerance", "Not defined"],
        ["Advantage", "Single visit, single sample, high uptake", "Higher sensitivity, derived from HAPO outcome data"],
      ],
    },
    {
      heading: "Glycaemic targets and treatment escalation in GDM",
      columns: ["Parameter", "Target", "Action if not met"],
      rows: [
        ["Fasting plasma glucose", "Below 95 mg/dL", "Start metformin or basal insulin"],
        ["1-hour postprandial", "Below 140 mg/dL", "Adjust meal composition, then drug"],
        ["2-hour postprandial", "Below 120 mg/dL", "Trigger for drug therapy after 2 weeks of MNT"],
        ["HbA1c", "Below 6%", "Intensify therapy"],
        ["Intrapartum capillary glucose", "70-110 mg/dL", "Insulin-dextrose infusion"],
      ],
    },
    {
      heading: "Drugs in gestational diabetes",
      columns: ["Drug", "Dose", "Place in therapy", "Comment"],
      rows: [
        ["Metformin", "500 mg OD-BD with meals, up to 2000-2500 mg/day", "First-line oral agent (Indian guideline)", "Crosses placenta; no teratogenicity shown"],
        ["Human premixed 30/70 insulin", "0.1-0.2 units/kg/day, split before breakfast and dinner", "First-line injectable", "Titrate by 2-4 units every 2-3 days"],
        ["NPH insulin", "Bedtime basal, 0.1-0.2 units/kg", "Fasting hyperglycaemia", "Combine with regular insulin premeal"],
        ["Insulin aspart or lispro", "Premeal, 4-6 units titrated", "Postprandial spikes", "Approved and preferred rapid analogues"],
        ["Glibenclamide", "2.5-5 mg OD-BD", "Second-line at best", "Crosses placenta; more neonatal hypoglycaemia"],
        ["Contraindicated", "-", "-", "Pioglitazone, SGLT2 inhibitors, GLP-1 agonists, other sulphonylureas"],
      ],
    },
  ],
  redFlags: [
    "Fasting plasma glucose 126 mg/dL or more, random 200 mg/dL or more, or HbA1c 6.5% or more in the first trimester - this is overt diabetes in pregnancy, not GDM; refer and manage as pre-existing diabetes.",
    "Ketonuria with hyperglycaemia, vomiting and abdominal pain - diabetic ketoacidosis, which occurs at lower glucose levels in pregnancy and carries a high fetal loss rate; admit immediately.",
    "Estimated fetal weight above 4000 g, or an abdominal circumference above the 95th centile with polyhydramnios - macrosomia; plan the mode of delivery with an obstetrician.",
    "Sudden polyhydramnios or a rapid rise in symphysio-fundal height in a diabetic pregnancy - poor control or fetal anomaly, refer for scan.",
    "Reduced fetal movements or absent movements in a poorly controlled diabetic pregnancy - unexplained late stillbirth is the feared complication; assess the same day.",
    "Recurrent maternal hypoglycaemia on insulin, especially at night - reduce the dose; hypoglycaemia in late pregnancy may also signal placental insufficiency.",
    "No postpartum 75 g oral glucose tolerance test at 6-12 weeks - a system red flag, since half these women develop type 2 diabetes within a decade.",
  ],
  pearls: [
    "The DIPSI test is non-fasting on purpose: a 75 g load and one 2-hour sample, with 140 mg/dL or more diagnosing GDM. Say 'irrespective of the last meal' in the exam - that phrase carries the mark.",
    "India screens every pregnant woman twice: at booking and again at 24-28 weeks. A negative early test does not excuse her from the second one.",
    "A 2-hour value of 120-139 mg/dL is decreased gestational glucose tolerance - not normal, not GDM; give nutrition therapy and retest.",
    "Two weeks of medical nutrition therapy first, then drugs if the 2-hour value stays at 120 mg/dL or more. Metformin is first-line in the Indian guideline; insulin is added or started directly if control is far off.",
    "Never give ergometrine-style shortcuts here: pioglitazone, SGLT2 inhibitors and GLP-1 agonists have no place in pregnancy, and glibenclamide is at best second-line.",
    "Stop the metformin or insulin the moment the placenta is out; the commonest postpartum error is continuing a drug the woman no longer needs.",
    "The 6-12 week postpartum 75 g oral glucose tolerance test is the highest-yield preventive act in the whole GDM pathway - book it before she leaves the ward.",
    "A 15-20 minute walk after each meal is the cheapest and most effective postprandial glucose intervention available to an Indian family physician.",
  ],
  theory: [
    {
      id: "obstetrics-gdm-t1",
      paper: "IV",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "Discuss the screening, diagnosis and management of gestational diabetes mellitus in India, including the DIPSI criteria, treatment targets and postpartum follow-up.",
      openingLines: [
        "Gestational diabetes mellitus is carbohydrate intolerance of variable severity with onset or first recognition during the present pregnancy; hyperglycaemia meeting overt diabetes criteria in the first trimester is instead classified as diabetes in pregnancy.",
        "It affects 10-14.3% of Indian pregnancies, and because Indian women carry an 11-fold higher risk than Caucasian women at the same body mass index, the Government of India recommends universal rather than risk-based screening.",
      ],
      answer: [
        {
          heading: "1. Screening strategy",
          points: [
            "Universal screening of every pregnant woman, twice: at the first antenatal contact and again at 24-28 weeks.",
            "A negative test before 24 weeks must be repeated at 24-28 weeks, when placental insulin resistance peaks.",
            "Testing is still worthwhile after 28 weeks in a woman not previously tested, and is mandatory if there is glycosuria, polyhydramnios or a large-for-dates uterus.",
          ],
        },
        {
          heading: "2. The DIPSI test and diagnostic criteria",
          points: [
            "Give 75 g of anhydrous glucose in 300 mL of water, drunk over 5-10 minutes, irrespective of the last meal.",
            "Measure a single venous plasma glucose at 2 hours.",
            "2-hour plasma glucose 140 mg/dL or more diagnoses gestational diabetes; 120-139 mg/dL is decreased gestational glucose tolerance requiring nutrition therapy and retesting.",
            "Repeat the test the next day if the woman vomits within 30 minutes of the load.",
            "The alternative IADPSG/WHO 2013 criteria require a fasting test with three samples: fasting 92, 1-hour 180, or 2-hour 153 mg/dL or more, any one abnormal value being diagnostic. India chose the single-step non-fasting test because fasting attendance is poor and the single visit maximises coverage.",
          ],
        },
        {
          heading: "3. Medical nutrition therapy",
          points: [
            "First-line for two weeks; it alone controls 70-85% of women.",
            "Calories 30-35 kcal/kg ideal body weight (25 kcal/kg if overweight, 40 kcal/kg if underweight); carbohydrate 40-50%, protein 20%, fat 30%, with a minimum of 175 g carbohydrate daily.",
            "Three small meals with three snacks including a bedtime snack; low glycaemic index foods, whole grains and millets replacing polished rice and refined flour.",
            "Thirty minutes of moderate exercise daily, ideally a 15-20 minute walk after each major meal.",
          ],
        },
        {
          heading: "4. Glycaemic targets and drug therapy",
          points: [
            "Targets: fasting below 95 mg/dL, 1-hour postprandial below 140 mg/dL, 2-hour postprandial below 120 mg/dL, HbA1c below 6%.",
            "If the 2-hour value remains 120 mg/dL or more after two weeks of nutrition therapy, start metformin 500 mg once or twice daily with meals, increasing weekly to a maximum of 2000-2500 mg per day.",
            "Add insulin if the target is unmet on maximum metformin, or start insulin directly if the fasting value exceeds 110-120 mg/dL or the 2-hour value exceeds 160-180 mg/dL at diagnosis.",
            "Insulin 0.1-0.2 units/kg/day, usually premixed 30/70 twice daily, titrated by 2-4 units every 2-3 days; human regular, NPH, aspart and lispro are the preferred preparations.",
            "Glibenclamide is second-line at best; pioglitazone, SGLT2 inhibitors and GLP-1 agonists are contraindicated.",
          ],
        },
        {
          heading: "5. Fetal surveillance and delivery",
          points: [
            "Anomaly scan at 18-20 weeks, growth scans every 3-4 weeks from 28 weeks, daily fetal movement counting from 28 weeks, and twice-weekly non-stress tests from 32-34 weeks in women on insulin or with poor control.",
            "Deliver at 39-40 weeks if diet-controlled and 38-39 weeks if on drugs; do not go beyond 40 weeks.",
            "Discuss elective caesarean section if the estimated fetal weight is 4000-4500 g or more; otherwise plan a vaginal delivery with a rehearsed shoulder dystocia drill.",
            "Intrapartum capillary glucose hourly to 2-hourly with a target of 70-110 mg/dL; omit the morning insulin dose when labour starts.",
            "Anticipate neonatal hypoglycaemia, hypocalcaemia, polycythaemia, jaundice and respiratory distress; check the baby's glucose at 30-60 minutes and support early breastfeeding.",
          ],
        },
        {
          heading: "6. Postpartum and long term",
          points: [
            "Stop metformin and insulin immediately after delivery and check a plasma glucose before discharge.",
            "Perform a 75 g oral glucose tolerance test at 6-12 weeks postpartum to reclassify her.",
            "About half of women with GDM develop type 2 diabetes within 5-10 years; arrange lifelong annual or biennial screening.",
            "Encourage breastfeeding for at least 3-6 months, advise weight optimisation before the next pregnancy, and provide contraception; recurrence in a future pregnancy is 30-70%.",
          ],
        },
      ],
      mustDraw: [
        "A table comparing DIPSI and IADPSG criteria (fasting requirement, samples, thresholds).",
        "A flow chart: universal screening at booking and 24-28 weeks - DIPSI 75 g - 2-hour value - MNT for 2 weeks - metformin - insulin - delivery - postpartum OGTT.",
      ],
      markSplit: [
        { part: "Definition, burden and screening strategy", marks: 2 },
        { part: "DIPSI test and diagnostic criteria", marks: 2 },
        { part: "Medical nutrition therapy and targets", marks: 2 },
        { part: "Drug therapy with doses", marks: 2 },
        { part: "Delivery, neonatal care and postpartum follow-up", marks: 2 },
      ],
      keywords: ["GDM", "DIPSI", "75 g OGTT", "metformin", "insulin", "postpartum OGTT"],
    },
    {
      id: "obstetrics-gdm-t2",
      paper: "IV",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on the maternal and fetal complications of gestational diabetes mellitus.",
      openingLines: [
        "Untreated or poorly controlled gestational diabetes affects the mother through the mechanical and metabolic consequences of fetal overgrowth, and the fetus through hyperinsulinaemia driven by maternal glucose crossing a placenta that insulin cannot cross.",
        "The Pedersen hypothesis explains almost all of it: maternal hyperglycaemia produces fetal hyperglycaemia, which produces fetal hyperinsulinaemia, which produces macrosomia and, at birth, hypoglycaemia.",
      ],
      answer: [
        {
          heading: "Maternal complications",
          points: [
            "Antenatal: polyhydramnios, pre-eclampsia (two- to three-fold increase), recurrent urinary and genital infections including candidiasis, preterm labour, and progression to diabetic ketoacidosis in severe cases.",
            "Intrapartum: obstructed labour and prolonged labour from a macrosomic fetus, shoulder dystocia with its perineal and sphincter injuries, increased operative and caesarean delivery, and postpartum haemorrhage from an overdistended uterus.",
            "Postpartum: wound infection, delayed lactation, and a roughly 50% risk of type 2 diabetes within 5-10 years with a 30-70% recurrence of GDM in a future pregnancy.",
            "Long term: increased lifetime risk of metabolic syndrome, hypertension and cardiovascular disease.",
          ],
        },
        {
          heading: "Fetal and neonatal complications",
          points: [
            "Macrosomia (birth weight above 4000 g) with truncal fat deposition, which is why shoulder dystocia is disproportionately common even at moderate birth weights.",
            "Unexplained intrauterine death in the last weeks of a poorly controlled pregnancy.",
            "Congenital malformations - these belong chiefly to pregestational diabetes and include caudal regression syndrome, cardiac and neural tube defects; true GDM appearing after organogenesis carries a much smaller anomaly risk.",
            "Birth injury: shoulder dystocia, brachial plexus injury (Erb palsy), clavicular fracture and perinatal asphyxia.",
            "Neonatal metabolic problems: hypoglycaemia in the first 24 hours, hypocalcaemia, hypomagnesaemia, polycythaemia and hyperbilirubinaemia.",
            "Respiratory distress syndrome from delayed surfactant maturation even at near-term gestations.",
          ],
        },
        {
          heading: "Long-term consequences for the offspring",
          points: [
            "Childhood and adolescent obesity, impaired glucose tolerance and metabolic syndrome - the fetal origins of adult disease.",
            "This intergenerational transmission is the main public health argument for aggressive detection and control of GDM in India.",
          ],
        },
      ],
      mustDraw: ["A two-column table of maternal versus fetal/neonatal complications, divided into antenatal, intrapartum and postnatal."],
      markSplit: [
        { part: "Maternal complications", marks: 2 },
        { part: "Fetal and neonatal complications", marks: 2 },
        { part: "Long-term offspring risk and public health significance", marks: 1 },
      ],
      keywords: ["macrosomia", "shoulder dystocia", "neonatal hypoglycaemia", "Pedersen hypothesis", "caudal regression"],
    },
    {
      id: "obstetrics-gdm-t3",
      paper: "IV",
      kind: "define-classify",
      marks: 5,
      minutes: 8,
      frequency: "less-common",
      question: "Define gestational diabetes mellitus and classify hyperglycaemia in pregnancy. State the diagnostic thresholds for each category.",
      openingLines: [
        "Hyperglycaemia first detected in pregnancy is not a single entity: WHO 2013 divides it into diabetes mellitus in pregnancy and gestational diabetes mellitus, and this distinction changes both the anomaly risk and the management.",
        "Gestational diabetes mellitus is carbohydrate intolerance of variable severity with onset or first recognition during the present pregnancy, not meeting the criteria for overt diabetes.",
      ],
      answer: [
        {
          heading: "Classification of hyperglycaemia in pregnancy",
          points: [
            "Pregestational (overt) diabetes: type 1 or type 2 diabetes diagnosed before conception. White's classification (classes A to T) grades it by age of onset, duration and vascular complications, and is still asked in vivas.",
            "Diabetes mellitus in pregnancy (WHO 2013): hyperglycaemia first detected during pregnancy that meets non-pregnant diagnostic criteria - fasting plasma glucose 126 mg/dL or more, 2-hour value 200 mg/dL or more after a 75 g load, random 200 mg/dL or more with symptoms, or HbA1c 6.5% or more.",
            "Gestational diabetes mellitus: hyperglycaemia first detected in pregnancy that is above normal but below the overt diabetes thresholds.",
          ],
        },
        {
          heading: "Diagnostic thresholds",
          points: [
            "DIPSI (Indian national programme): 75 g non-fasting load, 2-hour venous plasma glucose 140 mg/dL or more diagnoses GDM; 120-139 mg/dL is decreased gestational glucose tolerance.",
            "IADPSG/WHO 2013: fasting 75 g load with fasting 92-125 mg/dL, 1-hour 180 mg/dL or more, or 2-hour 153-199 mg/dL - any one value diagnoses GDM.",
            "Carpenter and Coustan (100 g, 3-hour test, two or more abnormal values): fasting 95, 1-hour 180, 2-hour 155, 3-hour 140 mg/dL - the older two-step American approach.",
          ],
        },
        {
          heading: "Why the classification matters",
          points: [
            "Diabetes in pregnancy detected in the first trimester implies hyperglycaemia during organogenesis and therefore a raised risk of congenital malformation, needing an anomaly scan with fetal echocardiography and screening for retinopathy and nephropathy.",
            "True gestational diabetes appearing in the second half of pregnancy does not carry the same anomaly risk, and its complications are those of fetal overgrowth.",
            "Both require postpartum reclassification with a 75 g oral glucose tolerance test at 6-12 weeks.",
          ],
        },
      ],
      mustDraw: ["A table of diagnostic thresholds: DIPSI, IADPSG/WHO 2013 and Carpenter-Coustan side by side."],
      markSplit: [
        { part: "Definition", marks: 1 },
        { part: "Classification of hyperglycaemia in pregnancy", marks: 2 },
        { part: "Diagnostic thresholds of each criterion set", marks: 2 },
      ],
      keywords: ["GDM definition", "diabetes in pregnancy", "White classification", "IADPSG", "Carpenter Coustan"],
    },
  ],
  mcqs: [
    {
      id: "obstetrics-gdm-q1",
      stem: "A 27-year-old woman at 26 weeks attends the antenatal clinic having eaten breakfast two hours earlier. According to the Government of India guideline, what should be done?",
      options: [
        "Ask her to return fasting the next morning for a 75 g oral glucose tolerance test",
        "Give 75 g of glucose now and measure the plasma glucose at 2 hours",
        "Check a random blood sugar only",
        "Do a 100 g three-hour test",
        "Defer testing to 32 weeks",
      ],
      answer: 1,
      explanation:
        "The DIPSI single-step test is performed irrespective of the last meal precisely so that a woman who has eaten need not be sent away and lost to follow-up; 75 g of glucose is given and a single venous plasma glucose is measured at 2 hours, with 140 mg/dL or more diagnosing GDM. Sending her back fasting is the practice the national guideline was designed to replace, and each such return visit loses women. A random blood sugar is neither sensitive nor a recognised diagnostic test. The 100 g three-hour Carpenter-Coustan test is the older American two-step approach, not the Indian protocol, and deferring to 32 weeks delays treatment through the period of maximum fetal growth.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-gdm-q2",
      stem: "A DIPSI test at 25 weeks gives a 2-hour plasma glucose of 132 mg/dL. What is the correct interpretation and action?",
      options: [
        "Normal; no further action",
        "Gestational diabetes; start metformin",
        "Decreased gestational glucose tolerance; give medical nutrition therapy and repeat the test",
        "Overt diabetes in pregnancy; start insulin",
        "The test is invalid because she was not fasting",
      ],
      answer: 2,
      explanation:
        "A 2-hour value of 120-139 mg/dL on the DIPSI test is decreased gestational glucose tolerance - an intermediate category that is not normal and not yet GDM - and is managed with medical nutrition therapy and a repeat test. Calling it normal misses a woman at risk of progression. Starting metformin is premature since even frank GDM gets two weeks of nutrition therapy first. Overt diabetes requires a fasting value of 126 mg/dL or more, a 2-hour value of 200 mg/dL or more, or HbA1c 6.5% or more. The test is valid precisely because it is designed to be performed non-fasting.",
      difficulty: "moderate",
    },
    {
      id: "obstetrics-gdm-q3",
      stem: "A woman with GDM has completed two weeks of medical nutrition therapy. Her fasting plasma glucose is 88 mg/dL and her 2-hour postprandial values are 132, 128 and 136 mg/dL. What is the next step?",
      options: [
        "Continue nutrition therapy alone and review in four weeks",
        "Start metformin 500 mg with meals and titrate upwards",
        "Start premixed insulin 20 units twice daily",
        "Admit for an insulin infusion",
        "Repeat the DIPSI test",
      ],
      answer: 1,
      explanation:
        "The Indian national guideline sets the drug threshold at a 2-hour postprandial value of 120 mg/dL or more persisting after two weeks of nutrition therapy; her values are consistently above that although her fasting glucose is normal, so metformin is started as the first-line oral agent and titrated. Continuing diet alone accepts sustained postprandial hyperglycaemia through the period of maximum fetal fat deposition. Twenty units of premixed insulin twice daily is an arbitrary and excessive starting dose - insulin is begun at 0.1-0.2 units/kg/day and only when metformin fails or control is far off. An insulin infusion is for ketoacidosis or labour, and repeating the diagnostic test adds nothing once the diagnosis is made.",
      difficulty: "moderate",
    },
    {
      id: "obstetrics-gdm-q4",
      stem: "A woman diagnosed with GDM at 12 weeks has a fasting plasma glucose of 138 mg/dL and HbA1c of 7.4%. How should she be classified and managed?",
      options: [
        "Gestational diabetes; medical nutrition therapy for two weeks",
        "Diabetes mellitus in pregnancy; start insulin, arrange a detailed anomaly scan with fetal echocardiography, and screen for retinopathy and nephropathy",
        "Decreased gestational glucose tolerance; diet only",
        "Type 1 diabetes; start basal-bolus insulin and check autoantibodies",
        "Stress hyperglycaemia; repeat in four weeks",
      ],
      answer: 1,
      explanation:
        "A fasting glucose of 126 mg/dL or more or an HbA1c of 6.5% or more in early pregnancy meets the WHO 2013 definition of diabetes mellitus in pregnancy, which almost always represents previously undiagnosed type 2 diabetes; management is as for pregestational diabetes, with insulin, a detailed anomaly scan including fetal echocardiography because organogenesis occurred in hyperglycaemia, and screening for existing microvascular disease. Two weeks of nutrition therapy alone at this level of hyperglycaemia is unsafe. She is not in the intermediate category, autoantibody testing does not change immediate management and type 1 diabetes is far less likely, and calling it stress hyperglycaemia with a repeat in four weeks wastes the first trimester.",
      difficulty: "moderate",
    },
    {
      id: "obstetrics-gdm-q5",
      stem: "Which is the correct glycaemic target set for a woman with gestational diabetes on treatment?",
      options: [
        "Fasting below 126 mg/dL, 2-hour postprandial below 200 mg/dL",
        "Fasting below 95 mg/dL, 1-hour postprandial below 140 mg/dL, 2-hour postprandial below 120 mg/dL",
        "Fasting below 70 mg/dL, 2-hour postprandial below 100 mg/dL",
        "Fasting below 110 mg/dL, 2-hour postprandial below 160 mg/dL",
        "HbA1c below 8% with no glucose targets",
      ],
      answer: 1,
      explanation:
        "The accepted targets are a fasting plasma glucose below 95 mg/dL, a 1-hour postprandial below 140 mg/dL and a 2-hour postprandial below 120 mg/dL, with HbA1c below 6%. The first option quotes the diagnostic thresholds for non-pregnant diabetes, which are far too lax in pregnancy. The third option sets a fasting target below the normal range and would cause maternal hypoglycaemia. The fourth is the pre-pregnancy general target for a person with diabetes, not a pregnancy target. HbA1c alone is inadequate in pregnancy because it lags behind and red cell turnover is altered.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-gdm-q6",
      stem: "A woman with diet-controlled GDM delivers a 3.6 kg baby at 39 weeks. What should be arranged before she leaves your care?",
      options: [
        "Continue metformin for six weeks postpartum",
        "A 75 g oral glucose tolerance test at 6-12 weeks postpartum and lifelong periodic diabetes screening",
        "An HbA1c at 12 months only",
        "No follow-up is required as GDM resolves after delivery",
        "Fasting insulin and C-peptide at six weeks",
      ],
      answer: 1,
      explanation:
        "A 75 g oral glucose tolerance test at 6-12 weeks postpartum reclassifies the woman as normal, prediabetic or diabetic, and is mandated by the national guideline; thereafter she needs lifelong annual or biennial screening because roughly half of women with GDM develop type 2 diabetes within 5-10 years. She was diet-controlled, so there is no metformin to continue, and drugs are in any case stopped at delivery. Waiting a year for an HbA1c misses early conversion and postpones intervention. Assuming resolution is the commonest and most damaging error in the whole pathway. Fasting insulin and C-peptide are research measures that do not guide primary care management.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-gdm-q7",
      stem: "A woman with insulin-treated GDM has an estimated fetal weight of 4300 g at 38 weeks with normal liquor and a reactive non-stress test. What is the most appropriate delivery plan?",
      options: [
        "Await spontaneous labour up to 41 weeks",
        "Induce labour immediately with misoprostol",
        "Discuss elective caesarean section because of the risk of shoulder dystocia",
        "Perform an external cephalic version",
        "Deliver by vacuum extraction at 39 weeks",
      ],
      answer: 2,
      explanation:
        "An estimated fetal weight of 4000-4500 g or more in a diabetic pregnancy is the accepted threshold at which elective caesarean section should be discussed, because the truncal fat distribution of the diabetic macrosomic fetus makes shoulder dystocia and brachial plexus injury disproportionately likely. Waiting to 41 weeks is contraindicated in any drug-treated diabetic pregnancy, which is delivered at 38-39 weeks. Induction with misoprostol in a woman with a 4.3 kg fetus courts an obstructed labour and shoulder dystocia. External cephalic version treats malpresentation, which is not the issue. Planned vacuum extraction with suspected macrosomia increases, rather than reduces, the risk of shoulder dystocia and brachial plexus injury.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "obstetrics-gdm-c1",
      front: "The DIPSI test in one line.",
      back: "75 g anhydrous glucose in 300 mL water, irrespective of the last meal, single venous plasma glucose at 2 hours; 140 mg/dL or more diagnoses GDM.",
    },
    {
      id: "obstetrics-gdm-c2",
      front: "DIPSI value of 120-139 mg/dL means what?",
      back: "Decreased gestational glucose tolerance - give medical nutrition therapy and repeat the test.",
    },
    {
      id: "obstetrics-gdm-c3",
      front: "IADPSG / WHO 2013 thresholds on the fasting 75 g OGTT.",
      back: "Fasting 92 mg/dL or more, 1-hour 180 mg/dL or more, 2-hour 153 mg/dL or more; any one value diagnoses GDM.",
    },
    {
      id: "obstetrics-gdm-c4",
      front: "When does the Indian programme screen for GDM?",
      back: "Universally, twice: at the first antenatal contact and again at 24-28 weeks. An early negative test must be repeated.",
    },
    {
      id: "obstetrics-gdm-c5",
      front: "Glycaemic targets in GDM.",
      back: "Fasting below 95 mg/dL, 1-hour postprandial below 140 mg/dL, 2-hour postprandial below 120 mg/dL, HbA1c below 6%.",
    },
    {
      id: "obstetrics-gdm-c6",
      front: "When is drug therapy started in GDM?",
      back: "When the 2-hour postprandial remains 120 mg/dL or more, or fasting 95 mg/dL or more, after two weeks of medical nutrition therapy.",
    },
    {
      id: "obstetrics-gdm-c7",
      front: "First-line drug for GDM in the Indian national guideline, and its dose.",
      back: "Metformin 500 mg once or twice daily with meals, titrated weekly to a maximum of 2000-2500 mg per day.",
    },
    {
      id: "obstetrics-gdm-c8",
      front: "Starting insulin dose in GDM and how it is titrated.",
      back: "0.1-0.2 units/kg/day, usually premixed 30/70 before breakfast and dinner, titrated by 2-4 units every 2-3 days against the highest out-of-range value.",
    },
    {
      id: "obstetrics-gdm-c9",
      front: "Antidiabetic drugs contraindicated in pregnancy.",
      back: "Pioglitazone, SGLT2 inhibitors, GLP-1 receptor agonists and sulphonylureas other than glibenclamide; glibenclamide itself is second-line at best.",
    },
    {
      id: "obstetrics-gdm-c10",
      front: "Timing of delivery in GDM.",
      back: "39-40 weeks if diet-controlled, 38-39 weeks if on metformin or insulin; discuss caesarean if the estimated fetal weight is 4000-4500 g or more.",
    },
    {
      id: "obstetrics-gdm-c11",
      front: "Postpartum test and its timing after GDM.",
      back: "75 g oral glucose tolerance test at 6-12 weeks postpartum to reclassify; then lifelong annual or biennial screening.",
    },
    {
      id: "obstetrics-gdm-c12",
      front: "Long-term risks after GDM, for mother and child.",
      back: "Mother: about 50% develop type 2 diabetes within 5-10 years, with 30-70% recurrence of GDM. Child: raised lifetime risk of obesity, impaired glucose tolerance and metabolic syndrome.",
    },
  ],
  references: [
    "National Guidelines for Diagnosis and Management of Gestational Diabetes Mellitus, Maternal Health Division, MoHFW, 2014 (reprinted 2018)",
    "DIPSI (Diabetes in Pregnancy Study Group India) guidelines for the diagnosis and management of GDM",
    "FOGSI-ICOG Good Clinical Practice Recommendations on Gestational Diabetes Mellitus, 2018",
    "WHO Diagnostic Criteria and Classification of Hyperglycaemia First Detected in Pregnancy, 2013",
    "ADA Standards of Care in Diabetes - Management of Diabetes in Pregnancy, 2024",
    "Williams Obstetrics, 26th edition, 2022 - diabetes mellitus",
  ],
});

topics.push({
  id: "obstetrics-labour-partograph",
  title: "Recognition of labour, the partograph and when to refer",
  oneLiner:
    "Labour is the onset of regular, painful uterine contractions producing progressive cervical effacement and dilatation, and the partograph is the single-page graphic record of the active first stage on which cervical dilatation plotted against time, with its alert and action lines, tells a medical officer at a primary health centre whether progress is normal, whether the woman must be referred, and how much time there is to move her.",
  frequency: "core",
  keywords: [
    "partograph",
    "partogram",
    "alert line",
    "action line",
    "true labour",
    "false labour",
    "stages of labour",
    "AMTSL",
    "active management of third stage",
    "referral in labour",
    "BEmOC",
    "CEmOC",
    "FRU",
    "cord prolapse",
    "preterm labour",
    "antenatal corticosteroids",
    "skilled birth attendant",
    "WHO Labour Care Guide",
  ],
  sections: [
    {
      heading: "Diagnosing labour and separating it from false labour",
      points: [
        "**True labour is diagnosed by regular painful contractions that increase in frequency, duration and intensity, accompanied by progressive cervical effacement and dilatation;** the show (blood-stained mucus from the cervical plug) and rupture of membranes support the diagnosis but neither is required for it.",
        "False labour (Braxton Hicks activity) produces irregular contractions of unchanging intensity that are felt in the lower abdomen rather than radiating from the back, are relieved by walking, sedation or an analgesic, and **produce no cervical change on two examinations four hours apart** - this cervical criterion is the only one that settles the argument.",
        "The **latent phase of the first stage** runs from the onset of regular contractions to 4 cm of dilatation (5 cm in the 2018 WHO intrapartum recommendations) and can normally last up to 20 hours in a primigravida and 14 hours in a multipara; it is not plotted on the partograph and a woman in the latent phase should not be admitted to a labour bed, augmented or referred for slow progress.",
        "The **active phase** runs from 4 cm to full dilatation and is expected to progress at not less than 1 cm per hour; WHO 2018 accepts that the active phase usually does not exceed 12 hours in a first labour and 10 hours in subsequent labours.",
        "**Rupture of membranes is confirmed by a sterile speculum examination showing pooling of liquor in the posterior fornix;** nitrazine paper turning blue (pH above 6.5), ferning on a dried slide and placental alpha-microglobulin-1 tests support it, and a digital examination is avoided in prelabour rupture because it introduces infection without adding information.",
        "The admission assessment covers the onset and pattern of pains, membranes, fetal movements, bleeding, previous labours and any high-risk marking on the MCP card, then pulse, blood pressure, temperature, pallor, fundal height, lie, presentation, fifths of head palpable per abdomen, contractions in 10 minutes, and the fetal heart rate counted for a full minute immediately after a contraction.",
      ],
    },
    {
      heading: "The stages of labour and what the attendant does in each",
      points: [
        "**First stage** extends from the onset of true labour to full dilatation of the cervix (10 cm); the woman is encouraged to walk and take oral fluids, the bladder is emptied every two hours, and **vaginal examinations are done every four hours in the active phase** unless there is a specific indication, because frequent examinations raise the risk of sepsis without improving outcome.",
        "**Second stage** runs from full dilatation to delivery of the baby and is allowed up to 3 hours in a primigravida and 2 hours in a multipara (WHO 2018), provided the fetal heart is normal and descent is occurring; the woman pushes only with contractions, in the position she prefers, and **routine episiotomy is not recommended** - it is reserved for instrumental delivery, fetal distress or a rigid perineum.",
        "**Third stage** is from delivery of the baby to delivery of the placenta and membranes and should be complete within 30 minutes; it is managed actively (see below) because active management cuts postpartum haemorrhage by about 60%.",
        "**Fourth stage** is the first two hours after the placenta, when most primary postpartum haemorrhage occurs: pulse, blood pressure, uterine tone, bleeding and bladder are checked every 15 minutes for the first hour and every 30 minutes for the second, and the mother is not left alone.",
        "**Immediate newborn care runs in parallel:** dry and stimulate, assess breathing within the first minute (the Golden Minute), skin-to-skin contact, delayed cord clamping at 1-3 minutes in a baby who is breathing, initiation of breastfeeding within one hour, vitamin K 1 mg IM (0.5 mg if under 1500 g), and no bathing for at least 24 hours.",
      ],
    },
    {
      heading: "Active management of the third stage (AMTSL)",
      points: [
        "**Oxytocin 10 units IM within one minute of delivery of the baby, after ruling out a second twin,** is the single most effective component of AMTSL and is the uterotonic of choice; where oxytocin cannot be given, misoprostol 600 microgram orally is the alternative for prevention.",
        "**Controlled cord traction** is applied only by a skilled attendant, only once the uterus has contracted, with counter-traction above the pubic symphysis to prevent inversion; it is an optional component in the WHO 2012 recommendations and is omitted by an unskilled attendant.",
        "**Delayed cord clamping at 1-3 minutes** is now part of the package for every baby not needing resuscitation; it raises the neonatal iron store and reduces anaemia in infancy without increasing maternal bleeding.",
        "Uterine massage after delivery of the placenta is done to confirm a contracted uterus and to expel clots; **the placenta and membranes are inspected for completeness** and the perineum, vagina and cervix for tears before the mother is moved.",
        "**Ergometrine 0.2 mg IM is an alternative uterotonic but is contraindicated in hypertension, pre-eclampsia and heart disease,** so oxytocin is preferred in every woman in whom the blood pressure is not known to be normal.",
      ],
    },
    {
      heading: "The WHO modified partograph: what is recorded and how",
      points: [
        "**The modified partograph starts when the woman enters the active phase at 4 cm** (the earlier composite partograph began in the latent phase and was abandoned because it was too complex to use); the WHO Labour Care Guide of 2020 begins at 5 cm and adds a time-based alert per centimetre, but the modified partograph remains the tool taught to skilled birth attendants in India.",
        "**The alert line** starts at 4 cm and rises at 1 cm per hour to reach 10 cm at six hours; **the action line** is drawn parallel to it, four hours to the right. Cervical dilatation is plotted as an X every four hours and the first X is always placed on the alert line.",
        "**Fetal condition** is recorded at the top: fetal heart rate every 30 minutes (normal 110-160 per minute), liquor at each vaginal examination (I intact, C clear, M meconium, B blood-stained, A absent) and moulding (0, +, ++, +++, with +++ meaning the skull bones overlap and cannot be separated by finger pressure - a sign of cephalopelvic disproportion).",
        "**Progress of labour** is the middle section: cervical dilatation (X), descent of the head in fifths palpable per abdomen (O, from 5/5 to 0/5, where 2/5 or less means engaged), and contractions every 30 minutes as the number in ten minutes with duration coded by shading - dots for under 20 seconds, hatching for 20-40 seconds, solid for over 40 seconds.",
        "**Drugs** are recorded in the third section: oxytocin as units per litre and drops per minute, and any other drugs or intravenous fluids given with the time.",
        "**Maternal condition** is the lowest section: pulse every 30 minutes, blood pressure every four hours, temperature every two hours, and urine volume with protein and acetone whenever passed; a rising pulse with a falling blood pressure is the earliest sign of concealed bleeding or sepsis and is easily missed if these rows are left blank.",
      ],
    },
    {
      heading: "Reading the partograph and deciding when to refer",
      points: [
        "**Progress to the left of the alert line is normal;** a plot that moves onto or to the right of the alert line means the active phase is slower than 1 cm per hour, and at a primary health centre or any facility without caesarean capacity **crossing the alert line is the signal to refer**, because the four-hour gap before the action line is the time it takes to reach a first referral unit.",
        "**Crossing the action line demands a decision by a doctor able to intervene:** rupture of membranes with oxytocin augmentation if there is no cephalopelvic disproportion, or caesarean section if there is; augmentation is never started at a facility that cannot perform a caesarean, since it converts slow labour into obstructed labour and uterine rupture.",
        "Descent that fails while dilatation continues, moulding of ++ or more, and contractions that are strong yet unproductive point to **obstruction**, and the physical signs - a rising retraction (Bandl's) ring, oedematous vulva, haematuria, a tender lower segment and maternal exhaustion with fever and tachycardia - mean the woman must be transferred with a catheter in place and without further augmentation.",
        "**Fetal indications for referral from a primary health centre** are a fetal heart rate persistently below 110 or above 160 per minute, thick meconium with a fetal heart abnormality, cord prolapse, and absent liquor with poor progress.",
        "**Maternal indications** are any antepartum haemorrhage, hypertension of 140/90 mmHg or more or a convulsion, fever above 38 degrees C, membranes ruptured for more than 18 hours, a previous caesarean or uterine surgery, malpresentation or a non-engaged head in a primigravida at term, multiple pregnancy, preterm labour before 37 weeks, severe anaemia, and a third stage exceeding 30 minutes.",
        "**The referral itself has a checklist:** intravenous line running, oxygen if needed, left lateral position, the partograph and a written referral slip with the reason and the findings, magnesium sulphate or antibiotics or corticosteroids already given where indicated, a relative as escort, the 108 or 102 ambulance under JSSK, and a phone call ahead to the receiving unit.",
      ],
    },
    {
      heading: "Emergencies the family physician must handle before transfer",
      points: [
        "**Cord prolapse:** put the woman in the knee-chest or exaggerated Sims position, push the presenting part off the cord with two fingers in the vagina and keep them there during transfer, fill the bladder with 500 mL of saline through a catheter if the journey is long, do not handle the cord, and send her for immediate caesarean section.",
        "**Preterm labour between 24 and 34 weeks:** give the first dose of antenatal corticosteroid before transfer - **dexamethasone 6 mg IM every 12 hours for four doses, or betamethasone 12 mg IM two doses 24 hours apart** - because a single dose given at the primary health centre still reduces neonatal respiratory distress and intraventricular haemorrhage.",
        "Tocolysis to gain the 48 hours the steroid needs is with **nifedipine 20 mg orally, then 10-20 mg every 6-8 hours for up to 48 hours,** never in the presence of bleeding, chorioamnionitis or fetal compromise; magnesium sulphate 4 g IV is given for fetal neuroprotection when delivery before 32 weeks is imminent.",
        "**Prelabour rupture of membranes at term:** speculum only, record the colour of the liquor and the fetal heart, start ampicillin or amoxicillin if rupture exceeds 18 hours, and refer; **preterm prelabour rupture** additionally receives erythromycin 250 mg four times daily for ten days and corticosteroids.",
        "**Shoulder dystocia** is signalled by the turtle sign after delivery of the head: call for help, McRoberts manoeuvre (hyperflexion of the thighs on the abdomen), suprapubic pressure, then internal rotation manoeuvres or delivery of the posterior arm; fundal pressure is never applied.",
        "**Retained placenta beyond 30 minutes** with bleeding is managed with oxytocin infusion, bladder emptying and controlled cord traction, then referral for manual removal under anaesthesia; a placenta that is not bleeding still needs transfer within the hour because bleeding starts without warning.",
      ],
    },
  ],
  tables: [
    {
      heading: "Observations on the WHO modified partograph and their frequency",
      columns: ["Section", "Observation", "Frequency", "Abnormal finding that changes management"],
      rows: [
        ["Fetal condition", "Fetal heart rate", "Every 30 minutes", "Below 110 or above 160 per minute, or late decelerations after a contraction"],
        ["Fetal condition", "Liquor and moulding", "Every vaginal examination", "Thick meconium, absent liquor, moulding ++ or more"],
        ["Progress", "Cervical dilatation (X)", "Every 4 hours", "Plot on or right of the alert line: refer; right of the action line: intervene"],
        ["Progress", "Descent of head (O)", "Every 4 hours", "No descent despite good contractions - obstruction"],
        ["Progress", "Contractions per 10 minutes", "Every 30 minutes", "Fewer than 3 in 10 minutes each under 40 seconds in the active phase - inadequate"],
        ["Drugs", "Oxytocin, drugs, IV fluids", "As given", "Oxytocin in a facility without caesarean capacity is itself a management error"],
        ["Maternal condition", "Pulse", "Every 30 minutes", "Above 100 per minute - dehydration, bleeding, sepsis"],
        ["Maternal condition", "Blood pressure", "Every 4 hours", "140/90 mmHg or above, or a fall below 90 systolic"],
        ["Maternal condition", "Temperature", "Every 2 hours", "38 degrees C or above - chorioamnionitis"],
        ["Maternal condition", "Urine volume, protein, acetone", "Every void", "Oliguria, proteinuria, ketonuria"],
      ],
    },
    {
      heading: "Signal functions of emergency obstetric care",
      columns: ["Level", "Signal functions", "Typical Indian facility"],
      rows: [
        ["Basic emergency obstetric care (BEmOC, 7 functions)", "Parenteral antibiotics, parenteral uterotonics, parenteral anticonvulsants (magnesium sulphate), manual removal of placenta, removal of retained products (MVA), assisted vaginal delivery (vacuum), basic neonatal resuscitation", "24x7 primary health centre, some community health centres"],
        ["Comprehensive emergency obstetric care (CEmOC, 9 functions)", "All seven BEmOC functions plus caesarean section and blood transfusion", "First referral unit: community health centre, sub-district and district hospitals"],
      ],
    },
  ],
  redFlags: [
    "Cervical dilatation plotted on or to the right of the alert line at any facility without caesarean capacity - refer now, the action line is four hours away and so is the hospital.",
    "Fetal heart rate persistently below 110 or above 160 per minute, or thick meconium with a slow fetal heart - fetal compromise; left lateral, oxygen, stop oxytocin, refer.",
    "Cord felt in the vagina or seen at the vulva - cord prolapse; knee-chest position, elevate the presenting part, immediate transfer for caesarean.",
    "Bandl's ring, haematuria, vulval oedema or a tender lower segment - obstructed labour with impending rupture; catheterise, no augmentation, transfer.",
    "Bleeding per vaginum in labour with a tense tender uterus or a change in the fetal heart - abruption; two wide-bore lines, crystalloid, refer to a unit with blood.",
    "Contractions before 37 weeks - preterm labour; give the first dose of dexamethasone 6 mg IM and nifedipine 20 mg before the ambulance leaves.",
    "Third stage exceeding 30 minutes, or any bleeding with the placenta undelivered - retained placenta; oxytocin, empty bladder, refer for manual removal.",
  ],
  pearls: [
    "The one criterion that separates true from false labour is cervical change - nothing else in the history settles it.",
    "Plot the first X on the alert line; the partograph is a decision tool, not a record, and a partograph filled in after delivery has served no purpose.",
    "Alert line means refer from a primary health centre; action line means act in a hospital. The four hours between them is the transfer time the tool was designed around.",
    "Oxytocin augmentation in a facility that cannot do a caesarean section converts slow labour into a ruptured uterus - the drug is only as safe as the theatre behind it.",
    "Oxytocin 10 units IM within one minute of birth is the most effective single act in the labour room; it prevents more deaths than everything else in the third stage combined.",
    "A single dose of dexamethasone 6 mg IM before transfer in preterm labour is not wasted - most of the benefit accrues within 24 hours and the second dose can be given at the referral unit.",
    "A referral is complete when the IV line is running, the partograph travels with her, the receiving unit has been phoned, and a relative is in the ambulance.",
  ],
  theory: [
    {
      id: "obstetrics-labour-partograph-t1",
      paper: "IV",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "Describe the WHO modified partograph. How does it help the medical officer at a primary health centre decide when to refer a woman in labour? Add a note on the preparation of the woman for referral.",
      openingLines: [
        "The partograph is a single-page graphic record of the progress of labour, plotting cervical dilatation against time alongside the fetal and maternal condition, designed by Philpott and Castle and modified by WHO in 2000 to begin at the active phase of 4 cm.",
        "Its purpose is early recognition of abnormal progress so that a woman can be referred or delivered before obstructed labour, uterine rupture, sepsis or fetal death occur, and its use has been shown to reduce prolonged labour, augmentation, caesarean section and intrapartum stillbirth.",
      ],
      answer: [
        {
          heading: "1. Structure of the modified partograph",
          points: [
            "Identification: name, gravida, para, hospital number, date and time of admission, time of rupture of membranes.",
            "Fetal condition (top): fetal heart rate every 30 minutes, liquor (I, C, M, B, A) and moulding (0 to +++) at every vaginal examination.",
            "Progress of labour (middle): cervical dilatation as X every 4 hours, descent of the head in fifths as O, and contractions per 10 minutes every 30 minutes with duration shown by shading.",
            "The alert line runs from 4 cm at a slope of 1 cm per hour to 10 cm at 6 hours; the action line is parallel and 4 hours to the right.",
            "Drugs and fluids: oxytocin as units per litre and drops per minute, and all other drugs with the time.",
            "Maternal condition (bottom): pulse every 30 minutes, blood pressure every 4 hours, temperature every 2 hours, urine volume, protein and acetone at every void.",
          ],
        },
        {
          heading: "2. Rules of plotting",
          points: [
            "Plotting begins only when the woman is in the active phase at 4 cm with at least two contractions in 10 minutes; the first X is placed on the alert line at the time of the examination.",
            "Latent-phase labour is recorded on the admission notes, not the graph, and is reassessed every 4 hours; the woman is transferred to the graph when she reaches 4 cm.",
            "Vaginal examination is repeated every 4 hours, or earlier if membranes rupture, the fetal heart becomes abnormal, or the woman feels the urge to push.",
          ],
        },
        {
          heading: "3. Interpretation and the referral decision",
          points: [
            "Plot to the left of the alert line: normal progress - continue supportive care, no intervention.",
            "Plot on or to the right of the alert line: progress is slower than 1 cm per hour - at a primary health centre this is the indication to refer, because the four hours to the action line correspond to the transfer time to a first referral unit.",
            "Plot at or beyond the action line: the woman must be at a facility with caesarean capacity where a doctor decides between amniotomy with oxytocin augmentation and caesarean section after excluding cephalopelvic disproportion.",
            "Other partograph findings that mandate referral regardless of the dilatation line: fetal heart below 110 or above 160, thick meconium, moulding ++ or more, absent descent with good contractions, pulse above 100, blood pressure 140/90 or above, temperature 38 degrees C or above, and membranes ruptured beyond 18 hours.",
            "Conditions that prevent a woman from being managed on a partograph at a primary health centre at all: previous caesarean, malpresentation, multiple pregnancy, antepartum haemorrhage, preterm labour, severe anaemia and hypertensive disease - these are referred at admission.",
          ],
        },
        {
          heading: "4. Preparing the woman for referral",
          points: [
            "Secure an intravenous line with Ringer lactate running, give oxygen if the fetal heart is abnormal, and place the woman in the left lateral position.",
            "Give whatever the condition demands before departure: magnesium sulphate loading dose for pre-eclampsia, antibiotics for prolonged rupture of membranes or fever, dexamethasone 6 mg IM for preterm labour, and elevation of the presenting part for cord prolapse.",
            "Catheterise the bladder in obstructed labour and stop any oxytocin.",
            "Send the partograph and a written referral slip stating the reason, the findings and the time; phone the receiving unit; arrange the 108 ambulance under JSSK; send a relative and a health worker as escort.",
          ],
        },
        {
          heading: "5. Limitations",
          points: [
            "The 1 cm per hour rule overestimates the pace of normal labour in many women, which led WHO in 2018 to define the active phase from 5 cm and in 2020 to publish the Labour Care Guide; the modified partograph nonetheless remains the tool in use in Indian skilled birth attendant training.",
            "The partograph fails when it is filled in retrospectively, when the latent phase is plotted, or when the alert line is crossed and no one is empowered to act.",
          ],
        },
      ],
      mustDraw: [
        "A labelled diagram of the modified partograph showing the three sections, the alert line from 4 cm at 0 hours to 10 cm at 6 hours, and the action line 4 hours to the right.",
        "A table of observations with their frequency.",
      ],
      markSplit: [
        { part: "Definition and purpose", marks: 1 },
        { part: "Structure with diagram", marks: 3 },
        { part: "Rules of plotting", marks: 1 },
        { part: "Interpretation and referral criteria", marks: 3 },
        { part: "Preparation for referral", marks: 1.5 },
        { part: "Limitations", marks: 0.5 },
      ],
      keywords: ["partograph", "alert line", "action line", "referral", "active phase", "obstructed labour"],
    },
    {
      id: "obstetrics-labour-partograph-t2",
      paper: "IV",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "core",
      question: "Write a short note on active management of the third stage of labour.",
      openingLines: [
        "Active management of the third stage of labour (AMTSL) is a package of interventions applied immediately after the birth of the baby to hasten separation and delivery of the placenta and to prevent atonic postpartum haemorrhage, the leading direct cause of maternal death in India.",
        "Compared with expectant (physiological) management it reduces postpartum haemorrhage of 1000 mL or more by about 60% and the need for transfusion and additional uterotonics.",
      ],
      answer: [
        {
          heading: "Components",
          points: [
            "Uterotonic: oxytocin 10 units IM within one minute of the birth of the baby, after palpating the abdomen to exclude a second twin; oxytocin is the drug of choice for its speed, safety in hypertension and low cost.",
            "Alternatives where oxytocin is unavailable: misoprostol 600 microgram orally, or ergometrine 0.2 mg IM (contraindicated in hypertension and heart disease), or carbetocin 100 microgram IM where cold-chain storage is unreliable.",
            "Delayed cord clamping at 1-3 minutes after birth in every baby who does not need immediate resuscitation.",
            "Controlled cord traction by a skilled attendant only: wait for the uterus to contract, apply steady downward traction on the cord while the other hand pushes the uterus upward above the symphysis (Brandt-Andrews), and stop if the placenta does not descend within 30-40 seconds, waiting for the next contraction.",
            "Uterine massage after delivery of the placenta until the uterus is contracted, then palpation of the uterus every 15 minutes for two hours.",
          ],
        },
        {
          heading: "After the placenta",
          points: [
            "Examine the placenta and membranes for completeness and the cord for the number of vessels.",
            "Inspect the perineum, vagina and cervix for tears and repair them; estimate blood loss with a calibrated drape rather than by eye, since visual estimation underestimates by half.",
            "Record the time of placental delivery, the drug given and the blood loss on the partograph and case sheet.",
          ],
        },
        {
          heading: "Precautions and complications",
          points: [
            "Traction on the cord without counter-traction, or before the uterus has contracted, risks uterine inversion and cord snapping.",
            "Oxytocin is given IM, never as an IV bolus, because a rapid intravenous bolus causes hypotension.",
            "A placenta undelivered at 30 minutes is a retained placenta: give an oxytocin infusion, empty the bladder, repeat controlled cord traction once, and refer for manual removal if it fails.",
          ],
        },
      ],
      mustDraw: ["A flow chart: birth of baby - exclude second twin - oxytocin 10 units IM within 1 minute - clamp cord at 1-3 minutes - controlled cord traction with counter-traction - uterine massage - examine placenta and perineum."],
      markSplit: [
        { part: "Definition and rationale", marks: 1 },
        { part: "Components with doses", marks: 2.5 },
        { part: "Care after the placenta and precautions", marks: 1.5 },
      ],
      keywords: ["AMTSL", "oxytocin 10 units IM", "controlled cord traction", "delayed cord clamping", "postpartum haemorrhage prevention"],
    },
  ],
  mcqs: [
    {
      id: "obstetrics-labour-partograph-q1",
      stem: "A 23-year-old primigravida at term is in labour at a 24x7 primary health centre. Her cervix was 4 cm at 10:00 and 6 cm at 14:00, plotted on the modified partograph. Contractions are 3 in 10 minutes lasting 30-40 seconds and the fetal heart is 140 per minute. What is the most appropriate action?",
      options: [
        "Start an oxytocin infusion to augment labour",
        "Perform amniotomy and reassess in 2 hours",
        "Refer to the first referral unit now with the partograph",
        "Continue supportive care and reassess at 18:00",
        "Give pethidine and repeat the examination in 4 hours",
      ],
      answer: 2,
      explanation:
        "Dilatation of 2 cm in 4 hours is slower than the 1 cm per hour of the alert line, so the plot has crossed to the right of the alert line; at a facility without caesarean capacity this is the referral signal, because the four hours to the action line are the transfer time to a first referral unit. Oxytocin and amniotomy are action-line interventions that belong only in a hospital with a theatre, since augmentation at a primary health centre converts slow labour into obstructed labour and rupture. Waiting until 18:00 wastes the window the alert line exists to protect, and pethidine does nothing for progress.",
      difficulty: "moderate",
    },
    {
      id: "obstetrics-labour-partograph-q2",
      stem: "On the WHO modified partograph, at what cervical dilatation is the first plot made and where is it placed?",
      options: [
        "At 3 cm, on the latent phase line",
        "At 4 cm, on the alert line",
        "At 4 cm, on the action line",
        "At 5 cm, at the time of admission wherever it falls",
        "At full dilatation, on the second-stage line",
      ],
      answer: 1,
      explanation:
        "The modified partograph is begun when the woman enters the active phase at 4 cm, and the first X is always placed on the alert line so that progress is judged against the 1 cm per hour slope from the moment plotting begins. The old composite partograph plotted the latent phase and was abandoned as too complex, so option one describes a discarded tool. Placing the first plot on the action line would remove the four-hour buffer the design depends on. The 2020 WHO Labour Care Guide begins at 5 cm, but it is a different instrument with its own time-based alerts, and there is no second-stage line on the partograph.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-labour-partograph-q3",
      stem: "Which of the following is the correct uterotonic component of active management of the third stage of labour?",
      options: [
        "Oxytocin 10 units IM within one minute of delivery of the baby",
        "Oxytocin 10 units as a rapid IV bolus after delivery of the placenta",
        "Ergometrine 0.2 mg IM to every woman irrespective of blood pressure",
        "Misoprostol 800 microgram sublingual as the first choice",
        "Carboprost 250 microgram IM immediately after birth",
      ],
      answer: 0,
      explanation:
        "Oxytocin 10 units IM within one minute of the birth, after excluding a second twin, is the WHO and MoHFW uterotonic of choice for prevention of postpartum haemorrhage. A rapid IV bolus of oxytocin causes hypotension and the drug is given before, not after, the placenta. Ergometrine is contraindicated in hypertensive and cardiac women, so it cannot be given to every woman blindly. Misoprostol 600 microgram orally is the prophylactic alternative when oxytocin is unavailable; the 800 microgram sublingual dose is a treatment dose. Carboprost is a second-line treatment for atonic haemorrhage, not a prophylactic.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-labour-partograph-q4",
      stem: "A multipara at 38 weeks has spontaneous rupture of membranes at a primary health centre and the nurse feels a pulsating loop of cord in the vagina. The cervix is 5 cm and the fetal heart is 90 per minute. What should be done first?",
      options: [
        "Replace the cord into the uterus and wait for vaginal delivery",
        "Knee-chest position, push the presenting part up with fingers in the vagina, and transfer for immediate caesarean",
        "Start oxytocin to expedite vaginal delivery",
        "Apply a vacuum extractor at 5 cm",
        "Give tocolysis and observe for one hour",
      ],
      answer: 1,
      explanation:
        "Cord prolapse with a live fetus at 5 cm is a surgical emergency: the woman is placed in the knee-chest or exaggerated Sims position, the presenting part is pushed off the cord and held there during transfer, the bladder may be filled with 500 mL of saline for a long journey, and she goes for caesarean section. Attempting to replace the cord causes spasm of the cord vessels and is ineffective. Oxytocin would worsen compression with each contraction, and vacuum extraction is impossible before full dilatation. Tocolysis is an adjunct to reduce contractions during transfer, not a substitute for delivery, and observation for an hour would result in fetal death.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-labour-partograph-q5",
      stem: "A woman at 31 weeks presents to a primary health centre with regular painful contractions and a cervix of 3 cm. Which drug should be given before transfer, and in what dose?",
      options: [
        "Dexamethasone 6 mg IM, first of four doses 12 hours apart",
        "Betamethasone 12 mg orally, single dose",
        "Dexamethasone 24 mg IV as a single bolus",
        "Hydrocortisone 100 mg IV every 6 hours",
        "Prednisolone 40 mg orally daily for 3 days",
      ],
      answer: 0,
      explanation:
        "Antenatal corticosteroids between 24 and 34 weeks reduce neonatal respiratory distress syndrome, intraventricular haemorrhage and death, and the MoHFW guideline authorises the medical officer or ANM at the primary health centre to give dexamethasone 6 mg IM 12-hourly for four doses, starting the first before referral. Betamethasone is given as 12 mg IM twice 24 hours apart, not orally. A single 24 mg bolus does not provide the sustained exposure that matures the fetal lung and is not a recommended schedule. Hydrocortisone and prednisolone are largely inactivated by placental 11-beta-hydroxysteroid dehydrogenase and do not reach the fetus in useful amounts.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-labour-partograph-q6",
      stem: "A woman reports painful abdominal tightenings every 10-15 minutes for six hours. On examination the cervix is closed, uneffaced and posterior, and a repeat examination four hours later is unchanged. What is the diagnosis?",
      options: [
        "Latent phase of the first stage of labour",
        "False labour",
        "Prolonged latent phase",
        "Active phase with secondary arrest",
        "Prelabour rupture of membranes",
      ],
      answer: 1,
      explanation:
        "Contractions without any cervical effacement or dilatation on two examinations four hours apart define false labour, whatever their frequency or discomfort. The latent phase requires cervical change, however slow, in addition to contractions, so neither the latent phase nor a prolonged latent phase can be diagnosed with a closed, uneffaced cervix. Secondary arrest is an active-phase diagnosis at 4 cm or more. Nothing in the vignette suggests rupture of membranes.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "obstetrics-labour-partograph-c1",
      front: "Definition of true labour and the single criterion that separates it from false labour.",
      back: "Regular painful contractions increasing in frequency, duration and intensity with progressive cervical effacement and dilatation; cervical change on serial examination is the deciding criterion.",
    },
    {
      id: "obstetrics-labour-partograph-c2",
      front: "Where do the alert and action lines of the modified partograph start and how are they drawn?",
      back: "Alert line from 4 cm at 0 hours rising 1 cm per hour to 10 cm at 6 hours; action line parallel, 4 hours to the right. The first X is placed on the alert line.",
    },
    {
      id: "obstetrics-labour-partograph-c3",
      front: "Frequency of observations on the partograph: fetal heart, contractions, pulse, vaginal examination, blood pressure, temperature.",
      back: "Fetal heart every 30 min, contractions every 30 min, pulse every 30 min, vaginal examination and blood pressure every 4 hours, temperature every 2 hours.",
    },
    {
      id: "obstetrics-labour-partograph-c4",
      front: "Meaning of crossing the alert line and crossing the action line.",
      back: "Alert line crossed: progress slower than 1 cm/hour - refer from a facility without caesarean capacity. Action line crossed: a doctor at a CEmOC facility must decide between augmentation and caesarean.",
    },
    {
      id: "obstetrics-labour-partograph-c5",
      front: "Components of active management of the third stage of labour.",
      back: "Oxytocin 10 units IM within 1 minute of birth after excluding a second twin, delayed cord clamping at 1-3 minutes, controlled cord traction with counter-traction by a skilled attendant, uterine massage after the placenta.",
    },
    {
      id: "obstetrics-labour-partograph-c6",
      front: "Seven signal functions of basic emergency obstetric care, and the two that make it comprehensive.",
      back: "Parenteral antibiotics, uterotonics and anticonvulsants, manual removal of placenta, removal of retained products, assisted vaginal delivery, neonatal resuscitation; plus caesarean section and blood transfusion for CEmOC.",
    },
    {
      id: "obstetrics-labour-partograph-c7",
      front: "Antenatal corticosteroid regimens and gestational window.",
      back: "24 to 34 weeks: dexamethasone 6 mg IM every 12 hours for 4 doses, or betamethasone 12 mg IM twice 24 hours apart; the first dose is given before referral.",
    },
    {
      id: "obstetrics-labour-partograph-c8",
      front: "Duration limits of the stages of labour (WHO 2018).",
      back: "Active first stage usually not beyond 12 hours in a first labour and 10 hours in later labours; second stage up to 3 hours in a primigravida and 2 hours in a multipara; third stage within 30 minutes.",
    },
    {
      id: "obstetrics-labour-partograph-c9",
      front: "First aid for cord prolapse at a primary health centre.",
      back: "Knee-chest or exaggerated Sims position, elevate the presenting part with two fingers in the vagina and keep them there, fill the bladder with 500 mL saline for a long transfer, do not handle the cord, immediate transfer for caesarean.",
    },
  ],
  references: [
    "Guidelines for Antenatal Care and Skilled Attendance at Birth by ANMs, LHVs and Staff Nurses, MoHFW, Government of India, 2010",
    "Dakshata and LaQshya Labour Room Quality Improvement Initiative guidelines, MoHFW, 2015 and 2017",
    "WHO Recommendations: Intrapartum Care for a Positive Childbirth Experience, 2018",
    "WHO Labour Care Guide: User's Manual, 2020",
    "WHO Recommendations for the Prevention and Treatment of Postpartum Haemorrhage, 2012, and update on uterotonics, 2018",
    "Williams Obstetrics, 26th edition, 2022 - normal labour and abnormal labour",
    "DC Dutta's Textbook of Obstetrics, 9th edition, 2018 - normal labour and the partograph",
  ],
});

topics.push({
  id: "obstetrics-pph",
  title: "Postpartum haemorrhage: first response, uterotonics and transfer",
  oneLiner:
    "Postpartum haemorrhage is blood loss of 500 mL or more after vaginal birth or 1000 mL or more after caesarean section within 24 hours of delivery, or any loss that makes the woman haemodynamically unstable, and it is the leading direct cause of maternal death in India; its first response is simultaneous resuscitation, uterine massage, oxytocin infusion, tranexamic acid and a search for the cause using the four Ts, with transfer arranged the moment bleeding does not stop.",
  frequency: "core",
  keywords: [
    "PPH",
    "postpartum haemorrhage",
    "atonic PPH",
    "traumatic PPH",
    "four Ts",
    "oxytocin infusion",
    "misoprostol",
    "carboprost",
    "methylergometrine",
    "tranexamic acid",
    "WOMAN trial",
    "bimanual compression",
    "aortic compression",
    "condom tamponade",
    "balloon tamponade",
    "NASG",
    "non-pneumatic anti-shock garment",
    "shock index",
    "E-MOTIVE",
    "secondary PPH",
  ],
  sections: [
    {
      heading: "Definition, burden and classification",
      points: [
        "**Postpartum haemorrhage is defined as blood loss of 500 mL or more after a vaginal birth, or 1000 mL or more after a caesarean section, within 24 hours of delivery; severe PPH is loss of 1000 mL or more by any route,** and any loss that causes signs of hypovolaemia is treated as PPH regardless of the measured volume, because an anaemic Indian woman with a haemoglobin of 8 g/dL tolerates far less than the textbook 500 mL.",
        "**Primary PPH occurs within 24 hours of birth; secondary PPH occurs from 24 hours to 12 weeks postpartum** and is usually due to retained products of conception or endometritis, occasionally to a subinvoluted placental site or gestational trophoblastic disease.",
        "PPH causes about a quarter of maternal deaths in India and is the commonest direct cause; **most deaths occur within two to four hours of the onset of bleeding,** which is why the first response at the place of delivery, not the referral hospital, decides survival.",
        "**Visual estimation underestimates blood loss by 30-50%;** a calibrated under-buttock drape, weighing of soaked pads (1 g equals 1 mL) and the shock index (heart rate divided by systolic blood pressure, normally below 0.9 after delivery) are the tools that catch bleeding early.",
        "The E-MOTIVE bundle recommended by WHO in 2023 is the present standard of first response: **Early detection with a calibrated drape, Massage of the uterus, Oxytocic drugs, Tranexamic acid, IV fluids, and Examination with Escalation,** delivered as a bundle within 15 minutes rather than one step at a time.",
      ],
    },
    {
      heading: "Causes: the four Ts, and who is at risk",
      points: [
        "**Tone (about 70%):** uterine atony from an overdistended uterus (twins, polyhydramnios, macrosomia), prolonged or precipitate labour, oxytocin augmentation, grand multiparity, chorioamnionitis, a full bladder, retained placental fragments, uterine-relaxing drugs (magnesium sulphate, nifedipine, halogenated anaesthetics), and previous PPH.",
        "**Trauma (about 20%):** tears of the perineum, vagina and cervix, extension of a caesarean incision, uterine rupture, and uterine inversion; **a well-contracted uterus with continuing bright red bleeding means trauma until the tract has been examined.**",
        "**Tissue (about 10%):** retained placenta or membranes, a succenturiate lobe, and the morbidly adherent placenta (accreta spectrum) that is rising with the caesarean rate.",
        "**Thrombin (about 1%):** pre-existing coagulopathy (von Willebrand disease, thrombocytopenia) or acquired disseminated intravascular coagulation from abruption, amniotic fluid embolism, severe pre-eclampsia, HELLP syndrome, intrauterine fetal death or sepsis; **dilutional coagulopathy after massive transfusion belongs here too.**",
        "**Risk factors identified antenatally should change the place of delivery:** previous PPH, anaemia below 9 g/dL, multiple pregnancy, grand multiparity, placenta praevia or accreta, large fibroids, and bleeding disorders; yet **two-thirds of PPH occurs in women with no risk factor,** so every birth attendant must be ready for it.",
      ],
    },
    {
      heading: "The first fifteen minutes: resuscitation and uterotonics together",
      points: [
        "**Call for help and start everything at once:** one person massages the uterus and gives drugs, one secures access and fluids, one records and calls the ambulance; time of onset and every intervention are written on the case sheet as they happen.",
        "**Airway, breathing, circulation:** lie the woman flat with legs elevated, oxygen at 10-15 L per minute by mask, **two wide-bore (16 or 18 gauge) intravenous cannulae** with blood drawn for haemoglobin, grouping and cross-matching, and coagulation, and warmed Ringer lactate or normal saline run fast - up to 2 L in the first 30 minutes, then reassess; **avoid more than 3.5 L of clear fluid before blood arrives** because of dilutional coagulopathy.",
        "**Massage the uterus firmly through the abdominal wall until it contracts, empty the bladder with a catheter, and give oxytocin 20 units in 500 mL of Ringer lactate or normal saline at 40-60 drops per minute,** continuing at 20-40 drops per minute once bleeding is controlled; **no more than 3 L of intravenous fluid containing oxytocin** is given, because oxytocin is antidiuretic and causes water intoxication.",
        "**Tranexamic acid 1 g IV over 10 minutes is given within three hours of birth as soon as PPH is diagnosed, repeated once after 30 minutes if bleeding continues** - the WOMAN trial showed it cuts death from bleeding by about one-third when given early, and it works whatever the cause.",
        "**If the uterus stays soft despite oxytocin: methylergometrine 0.2 mg IM or slow IV, repeated after 15 minutes to a maximum of five doses (1 mg), never in hypertension, pre-eclampsia or heart disease; carboprost (15-methyl prostaglandin F2-alpha) 250 microgram IM every 15 minutes to a maximum of 8 doses (2 mg), never in asthma; misoprostol 800 microgram sublingual as a single dose** where injectable drugs are unavailable or in addition to them.",
        "**Check the placenta and membranes, and examine the perineum, vagina and cervix with good light** while the drugs are working: a contracted uterus with bleeding means a tear or a retained fragment, and the treatment is a suture or a manual removal, not a fifth uterotonic.",
      ],
    },
    {
      heading: "Mechanical measures that buy time for transfer",
      points: [
        "**Bimanual compression:** a gloved fist in the anterior fornix pressing against the anterior uterine wall while the abdominal hand pulls the fundus forward and compresses the uterus between the two; it controls atonic bleeding almost immediately and is held until uterotonics act or transport arrives.",
        "**External aortic compression:** a closed fist pressed just above and slightly to the left of the umbilicus against the vertebral column until the femoral pulse disappears; used when the bleeding is torrential, during transfer, or when bimanual compression is not possible.",
        "**Uterine balloon (condom) tamponade:** a condom tied over a Foley catheter is inserted into the uterine cavity and filled with 300-500 mL of saline until bleeding stops, the vagina is packed to keep it in place, oxytocin infusion is continued, antibiotics are given, and the balloon is left for 12-24 hours; success in atonic PPH exceeds 85% and it is the single most useful device at a first referral unit.",
        "**The non-pneumatic anti-shock garment (NASG)** is a neoprene compression suit applied from ankles to abdomen that shunts blood to the vital organs, halves mortality in referral settings, and is removed only at the receiving hospital, one segment at a time, when the woman is stable and blood is available.",
        "**Uterine inversion** - a mass at the introitus with shock out of proportion to blood loss and no palpable fundus - is replaced immediately by pushing the fundus up through the cervix with the flat of the hand before the cervical ring contracts; uterotonics are given only after replacement, and the placenta is not removed before the uterus is back.",
      ],
    },
    {
      heading: "Referral, hospital management and secondary PPH",
      points: [
        "**Refer when bleeding continues after massage, one uterotonic and bladder emptying, or when the woman is in shock, or when the placenta is retained beyond 30 minutes with bleeding;** she travels with two lines running, oxytocin infusing, bimanual or aortic compression if needed, the NASG on, a catheter in, a referral note stating the estimated loss and drugs given, and a relative who can donate blood.",
        "**At the first referral unit:** blood transfusion (O-negative or group-specific uncross-matched if the loss is massive), fresh frozen plasma and platelets in a 1:1:1 pattern in massive haemorrhage, manual removal of the placenta or evacuation of retained products under anaesthesia, repair of tears, and balloon tamponade if not already placed.",
        "**Surgical steps in order of increasing radicality:** uterine compression sutures (B-Lynch), stepwise uterine devascularisation (uterine and utero-ovarian artery ligation), internal iliac artery ligation, and hysterectomy, which is life-saving and should not be delayed while the woman exsanguinates; interventional radiology embolisation is an option where it exists.",
        "**Secondary PPH** presents from day 2 to week 12 with fresh bleeding, a subinvoluted bulky tender uterus, fever and foul lochia; the family physician gives broad-spectrum antibiotics (amoxicillin-clavulanate with metronidazole, or ampicillin with gentamicin and metronidazole if admitted), an oxytocic, arranges an ultrasound for retained products, and refers for evacuation if products are seen or bleeding is heavy; a beta-hCG is sent because choriocarcinoma presents this way.",
        "**After the event:** correct the anaemia with parenteral iron, discuss the cause and the recurrence risk (about 10-15% for atonic PPH), counsel that the next delivery must be in a hospital with blood, and watch for Sheehan syndrome (failure of lactation, amenorrhoea, hypothyroidism and adrenal insufficiency) in the months after severe haemorrhage with hypotension.",
      ],
    },
  ],
  tables: [
    {
      heading: "Uterotonic and haemostatic drugs in postpartum haemorrhage with exact doses",
      columns: ["Drug", "Prevention dose", "Treatment dose", "Contraindication or caution"],
      rows: [
        ["Oxytocin", "10 units IM within 1 minute of birth", "20 units in 500 mL Ringer lactate at 40-60 drops per minute; not more than 3 L of oxytocin-containing fluid", "Never as a rapid IV bolus (hypotension); antidiuretic effect"],
        ["Misoprostol", "600 microgram orally when oxytocin unavailable", "800 microgram sublingual single dose", "Shivering and fever; no absolute contraindication"],
        ["Methylergometrine", "0.2 mg IM after delivery of the anterior shoulder (not preferred)", "0.2 mg IM or slow IV, repeat every 15 minutes up to 5 doses (1 mg)", "Hypertension, pre-eclampsia, heart disease, retained placenta"],
        ["Carboprost (15-methyl PGF2-alpha)", "Not used for prevention", "250 microgram IM every 15 minutes up to 8 doses (2 mg)", "Asthma; caution in cardiac, renal and hepatic disease"],
        ["Carbetocin", "100 microgram IM or slow IV, single dose", "Not licensed for treatment", "Heat-stable formulation useful where cold chain fails"],
        ["Tranexamic acid", "Not routine for prevention after vaginal birth", "1 g IV over 10 minutes within 3 hours of birth, repeat 1 g after 30 minutes if bleeding continues", "Active thromboembolic disease"],
      ],
    },
    {
      heading: "Estimating blood loss from the woman's response",
      columns: ["Blood loss", "Percentage of volume", "Signs", "Shock index (HR / SBP)"],
      rows: [
        ["500-1000 mL", "10-15%", "Usually none; palpitations, mild tachycardia", "Below 0.9"],
        ["1000-1500 mL", "15-25%", "Tachycardia above 100, narrow pulse pressure, delayed capillary refill, weakness", "0.9-1.2"],
        ["1500-2000 mL", "25-35%", "Systolic 70-80 mmHg, restlessness, pallor, oliguria", "1.2-1.5"],
        ["Above 2000 mL", "Above 35%", "Systolic below 70 mmHg, collapse, air hunger, anuria", "Above 1.5"],
      ],
    },
  ],
  redFlags: [
    "Bleeding that soaks a pad in under five minutes, or a steady trickle that has not stopped after fifteen minutes of massage and oxytocin - this is PPH, escalate now.",
    "Shock index above 0.9, pulse above 100 or systolic below 90 mmHg after delivery - concealed or underestimated loss; two lines, fluids, tranexamic acid and prepare to transfer.",
    "A well-contracted uterus with continuing bright red bleeding - genital tract trauma or a retained fragment; examine with a good light, do not keep adding uterotonics.",
    "Mass at the introitus with sudden shock and no palpable fundus - uterine inversion; replace at once, before the cervical ring closes.",
    "Placenta undelivered at 30 minutes with bleeding - retained placenta; oxytocin infusion, catheterise, one further attempt at controlled cord traction, refer for manual removal.",
    "Bleeding from puncture sites, oozing from tears despite suturing, or blood that does not clot in the tube - coagulopathy; needs fresh frozen plasma and platelets, not more oxytocin.",
    "Fresh bleeding with fever and foul lochia after the second day - secondary PPH; antibiotics, oxytocic, ultrasound and referral for evacuation, and send a beta-hCG.",
  ],
  pearls: [
    "500 mL vaginal, 1000 mL caesarean, or any loss that makes her unstable - the definition has three arms and the third one matters most in an anaemic woman.",
    "Tone, trauma, tissue, thrombin - and the proportions 70, 20, 10, 1. Say them in that order and examine in that order.",
    "Oxytocin 10 units IM to prevent, 20 units in 500 mL at 40-60 drops per minute to treat, never a bolus, never more than 3 litres with oxytocin in it.",
    "Tranexamic acid 1 g IV within three hours, repeat once after 30 minutes - it is the one drug that works irrespective of the cause, and every hour of delay costs a tenth of its benefit.",
    "Carboprost and asthma, ergometrine and hypertension - two contraindications, two marks, and two deaths if forgotten.",
    "A contracted uterus that still bleeds is a tear until you have looked; a soft uterus that will not contract is a full bladder until you have catheterised.",
    "Bimanual compression, aortic compression and a condom catheter cost nothing and stop bleeding on the road - the referral hospital cannot help a woman who arrives dead.",
  ],
  theory: [
    {
      id: "obstetrics-pph-t1",
      paper: "IV",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "Define postpartum haemorrhage and enumerate its causes. A woman delivered at your primary health centre thirty minutes ago and is bleeding heavily; the placenta was delivered complete. Describe your management step by step until she is handed over at the first referral unit.",
      openingLines: [
        "Postpartum haemorrhage is blood loss of 500 mL or more after vaginal birth or 1000 mL or more after caesarean section within 24 hours of delivery, or any blood loss sufficient to cause haemodynamic instability; primary PPH occurs within 24 hours and secondary PPH from 24 hours to 12 weeks.",
        "It is the leading direct cause of maternal death in India, most deaths occurring within two to four hours of onset, so the outcome is decided by the first response at the place of delivery.",
      ],
      answer: [
        {
          heading: "1. Causes - the four Ts",
          points: [
            "Tone (70%): atony from overdistension, prolonged or precipitate labour, grand multiparity, chorioamnionitis, full bladder, retained fragments, uterine relaxants, previous PPH.",
            "Trauma (20%): perineal, vaginal and cervical tears, uterine rupture, uterine inversion.",
            "Tissue (10%): retained placenta or membranes, succenturiate lobe, placenta accreta spectrum.",
            "Thrombin (1%): inherited bleeding disorders and acquired coagulopathy from abruption, pre-eclampsia, HELLP, sepsis, amniotic fluid embolism or massive transfusion.",
          ],
        },
        {
          heading: "2. Immediate response - all at once, within the first 15 minutes",
          points: [
            "Call for help; assign one person to the uterus and drugs, one to access and fluids, one to record and call the 108 ambulance.",
            "Assess airway and breathing; lie flat with legs raised; oxygen 10-15 L per minute by mask; pulse, blood pressure, shock index every 5 minutes.",
            "Two 16-18 gauge cannulae; blood for haemoglobin, grouping and cross-match, and clotting; warmed Ringer lactate 1-2 L fast.",
            "Massage the uterus until firm; catheterise the bladder.",
            "Oxytocin 20 units in 500 mL Ringer lactate at 40-60 drops per minute.",
            "Tranexamic acid 1 g IV over 10 minutes, repeated after 30 minutes if bleeding continues.",
          ],
        },
        {
          heading: "3. Find the cause while the drugs act",
          points: [
            "Uterus soft: atony - continue massage and oxytocin; add methylergometrine 0.2 mg IM if blood pressure is normal, or carboprost 250 microgram IM if not asthmatic, repeating every 15 minutes; misoprostol 800 microgram sublingual if injectables are unavailable.",
            "Uterus firm and bleeding continues: examine the perineum, vagina and cervix in good light with a speculum; suture tears; pack a bleeding cervical tear that cannot be sutured and refer.",
            "Re-examine the placenta for a missing cotyledon or a vessel running to the edge of the membranes; explore the uterus if a fragment is suspected.",
            "Bleeding from puncture sites or non-clotting blood: coagulopathy - she needs blood products, not more uterotonics; expedite transfer.",
          ],
        },
        {
          heading: "4. If bleeding persists - mechanical control and transfer",
          points: [
            "Bimanual compression, or external aortic compression if torrential.",
            "Condom balloon tamponade with 300-500 mL saline, vaginal pack, continued oxytocin, antibiotics.",
            "Apply the non-pneumatic anti-shock garment if available.",
            "Transfer with two lines running, oxytocin infusing, catheter in, compression maintained, a referral note with times, estimated loss and every drug given, a phone call ahead, and relatives who can donate blood.",
          ],
        },
        {
          heading: "5. At the first referral unit and afterwards",
          points: [
            "Blood transfusion, fresh frozen plasma and platelets in massive haemorrhage; examination under anaesthesia; balloon tamponade; B-Lynch suture, uterine artery ligation, internal iliac ligation, and hysterectomy without delay if these fail.",
            "Antibiotic prophylaxis after manual procedures; thromboprophylaxis once bleeding has stopped.",
            "Afterwards: parenteral iron, counselling about the cause and recurrence, a plan for hospital delivery next time, and vigilance for Sheehan syndrome.",
          ],
        },
      ],
      mustDraw: [
        "A flow chart: PPH recognised - call for help - ABC and two lines - massage and catheter - oxytocin infusion and tranexamic acid - four Ts examination - second-line uterotonics - bimanual compression and balloon tamponade - transfer.",
        "A table of uterotonics with dose, route, maximum and contraindication.",
      ],
      markSplit: [
        { part: "Definition and classification", marks: 1.5 },
        { part: "Causes - four Ts", marks: 1.5 },
        { part: "Immediate resuscitation and first-line drugs with doses", marks: 3 },
        { part: "Finding and treating the cause; second-line drugs", marks: 2 },
        { part: "Mechanical measures and safe transfer", marks: 1.5 },
        { part: "Hospital care and follow-up", marks: 0.5 },
      ],
      keywords: ["PPH", "four Ts", "oxytocin 20 units in 500 mL", "tranexamic acid 1 g", "bimanual compression", "balloon tamponade", "referral"],
    },
    {
      id: "obstetrics-pph-t2",
      paper: "IV",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write a short note on the prevention of postpartum haemorrhage at the primary care level.",
      openingLines: [
        "Prevention of postpartum haemorrhage begins in the antenatal clinic with correction of anaemia and identification of risk, continues in labour with avoidance of prolonged labour and active management of the third stage, and ends with vigilant observation for two hours after the placenta.",
        "Active management of the third stage alone reduces severe PPH by about 60%, and every birth attendant in India is trained and authorised to deliver it.",
      ],
      answer: [
        {
          heading: "Antenatal measures",
          points: [
            "Screen for and treat anaemia so that the haemoglobin exceeds 10-11 g/dL at term; a woman with a haemoglobin under 9 g/dL cannot afford a normal blood loss.",
            "Identify risk: previous PPH, multiple pregnancy, grand multiparity, polyhydramnios, large baby, placenta praevia or previous caesarean (accreta risk), fibroids and bleeding disorders; plan delivery at a facility with blood and an operating theatre.",
            "Blood group and Rh typing recorded on the MCP card; two identified donors as part of the birth plan; registration for JSSK entitlements including free blood.",
          ],
        },
        {
          heading: "Intrapartum measures",
          points: [
            "Use the partograph to prevent prolonged labour; avoid unsupervised oxytocin and precipitate delivery; keep the bladder empty.",
            "Active management of the third stage: oxytocin 10 units IM within one minute of birth after excluding a second twin, delayed cord clamping, controlled cord traction by a skilled attendant, uterine massage after the placenta.",
            "Misoprostol 600 microgram orally where oxytocin is unavailable; in home deliveries the ASHA may give it under the programme.",
            "Examine the placenta and membranes for completeness and the genital tract for tears; repair tears promptly.",
          ],
        },
        {
          heading: "Postpartum measures",
          points: [
            "Observe for two hours: pulse, blood pressure, uterine tone, lochia and bladder every 15 minutes for the first hour and every 30 minutes for the second.",
            "Measure blood loss with a calibrated drape rather than by estimation; treat a shock index above 0.9 as bleeding.",
            "Ensure the labour room has an emergency tray: oxytocin, methylergometrine, carboprost or misoprostol, tranexamic acid, wide-bore cannulae, Ringer lactate, a condom catheter kit and the referral transport number.",
          ],
        },
      ],
      mustDraw: ["A three-column table: antenatal, intrapartum, postpartum preventive measures."],
      markSplit: [
        { part: "Antenatal measures", marks: 1.5 },
        { part: "Intrapartum measures including AMTSL with doses", marks: 2 },
        { part: "Postpartum observation and preparedness", marks: 1.5 },
      ],
      keywords: ["PPH prevention", "AMTSL", "anaemia correction", "calibrated drape", "birth preparedness"],
    },
  ],
  mcqs: [
    {
      id: "obstetrics-pph-q1",
      stem: "A 30-year-old woman delivers vaginally at a community health centre and bleeds 700 mL within twenty minutes despite oxytocin 10 units IM given at birth. Her blood pressure is 150/100 mmHg and she has no history of asthma. The uterus is soft. Which second-line uterotonic is most appropriate?",
      options: [
        "Methylergometrine 0.2 mg IM",
        "Carboprost 250 microgram IM",
        "Oxytocin 10 units as an IV bolus",
        "Misoprostol 25 microgram vaginally",
        "Carbetocin 100 microgram IM repeated every 15 minutes",
      ],
      answer: 1,
      explanation:
        "With a blood pressure of 150/100 mmHg methylergometrine is contraindicated because its alpha-adrenergic vasoconstriction can precipitate a hypertensive crisis or stroke; carboprost 250 microgram IM, repeatable every 15 minutes to a maximum of 8 doses, is the correct choice in a non-asthmatic woman. A rapid intravenous bolus of oxytocin causes hypotension and is never given; the treatment route is an infusion of 20 units in 500 mL. Misoprostol 25 microgram is an induction dose, not a haemorrhage dose - the treatment dose is 800 microgram sublingual. Carbetocin is a single-dose prophylactic agent, not a repeated treatment drug.",
      difficulty: "moderate",
    },
    {
      id: "obstetrics-pph-q2",
      stem: "In the WOMAN trial, tranexamic acid reduced death from bleeding in postpartum haemorrhage. What is the correct dose and timing for its use?",
      options: [
        "1 g IV over 10 minutes within 3 hours of birth, repeated once after 30 minutes if bleeding continues",
        "500 mg orally every 8 hours for 5 days",
        "2 g IV bolus at the time of delivery in every woman",
        "1 g IV only after uterotonics have failed and at least 3 hours have elapsed",
        "10 mg/kg IV infusion over 24 hours",
      ],
      answer: 0,
      explanation:
        "Tranexamic acid 1 g IV over 10 minutes given as soon as PPH is recognised, within three hours of birth, with a second 1 g dose if bleeding continues after 30 minutes or restarts within 24 hours, is the WHO 2017 recommendation derived from the WOMAN trial; its benefit falls by about 10% for every 15 minutes of delay and is lost beyond three hours. Oral dosing is far too slow for an emergency. A routine 2 g bolus at every delivery is not recommended for prevention after vaginal birth. Waiting until three hours have elapsed reverses the trial's central finding, and a 24-hour infusion regimen is an orthopaedic or trauma protocol, not the obstetric one.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-pph-q3",
      stem: "A woman is bleeding after delivery. The uterus is well contracted and the placenta and membranes are complete. Bright red blood continues to flow. What is the most likely cause and the most appropriate next step?",
      options: [
        "Uterine atony; give carboprost",
        "Genital tract trauma; examine the cervix, vagina and perineum with a speculum and good light",
        "Coagulopathy; transfuse fresh frozen plasma",
        "Retained placenta; perform manual removal",
        "Uterine inversion; replace the uterus",
      ],
      answer: 1,
      explanation:
        "Persistent bright red bleeding from a firmly contracted uterus with a complete placenta is genital tract trauma - a cervical, vaginal or perineal tear - until the tract has been inspected under good light with a speculum, and the treatment is suture, not another uterotonic. Atony is excluded by the firm uterus. Coagulopathy is a diagnosis of exclusion suggested by oozing from puncture sites and non-clotting blood, not by a single site of bright bleeding. The placenta is documented complete, so retained tissue is unlikely, and inversion presents with a mass at the introitus and an absent fundus, not a well-contracted uterus.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-pph-q4",
      stem: "What is the correct oxytocin regimen for the treatment of atonic postpartum haemorrhage?",
      options: [
        "10 units IM once, repeated after 1 hour",
        "20 units in 500 mL of Ringer lactate at 40-60 drops per minute, not exceeding 3 L of oxytocin-containing fluid",
        "5 units IV bolus every 5 minutes until bleeding stops",
        "40 units in 100 mL normal saline as a rapid bolus",
        "2.5 units in 500 mL at 10 drops per minute",
      ],
      answer: 1,
      explanation:
        "The treatment regimen is 20 units of oxytocin in 500 mL of Ringer lactate or normal saline run at 40-60 drops per minute until the uterus contracts and then slowed, with a ceiling of 3 L of oxytocin-containing fluid because of its antidiuretic effect and the risk of water intoxication. A single IM dose repeated hourly is a prophylactic dose and far too slow for active haemorrhage. Rapid intravenous boluses of oxytocin cause hypotension and are never given. The 2.5 units in 500 mL at 10 drops per minute regimen is the starting dose for augmentation of labour, not for haemorrhage.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-pph-q5",
      stem: "A woman presents to a family physician nine days after a home delivery with fresh vaginal bleeding, fever of 38.5 degrees C, foul-smelling lochia and a bulky tender uterus. Which of the following is the best initial management?",
      options: [
        "Reassure that lochia rubra can persist for two weeks",
        "Oral iron and review in one week",
        "Broad-spectrum antibiotics with metronidazole, an oxytocic, ultrasound for retained products, and referral for evacuation if products are present",
        "Immediate hysterectomy",
        "Methotrexate for presumed choriocarcinoma",
      ],
      answer: 2,
      explanation:
        "Fresh bleeding with fever, foul lochia and a subinvoluted tender uterus after the first 24 hours is secondary postpartum haemorrhage from endometritis with retained products, and the correct response is antibiotics covering anaerobes (amoxicillin-clavulanate with metronidazole, or ampicillin, gentamicin and metronidazole if admitted), an oxytocic, an ultrasound, and evacuation under antibiotic cover if products are seen or bleeding is heavy; a beta-hCG is sent to exclude trophoblastic disease. Reassurance and iron ignore sepsis that can progress to septic shock. Hysterectomy is a last resort for uncontrollable bleeding or uterine necrosis, not an initial step, and choriocarcinoma is diagnosed by a persistently raised hCG, not treated empirically.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-pph-q6",
      stem: "Which of the following mechanical measures is applied by pressing a closed fist just above and to the left of the umbilicus against the vertebral column until the femoral pulse disappears?",
      options: [
        "Bimanual uterine compression",
        "External aortic compression",
        "Controlled cord traction",
        "Uterine balloon tamponade",
        "Credé's manoeuvre",
      ],
      answer: 1,
      explanation:
        "External aortic compression occludes the aorta below the renal arteries against the lumbar spine and is used for torrential bleeding, during transfer, or when bimanual compression is impossible; disappearance of the femoral pulse confirms adequate pressure. Bimanual compression uses a fist in the anterior vaginal fornix against the abdominal hand. Controlled cord traction delivers the placenta and Credé's manoeuvre is an obsolete fundal expression that risks inversion. Balloon tamponade is intrauterine, not external.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "obstetrics-pph-c1",
      front: "Definition of postpartum haemorrhage, primary and secondary.",
      back: "Blood loss of 500 mL or more after vaginal birth or 1000 mL or more after caesarean within 24 hours, or any loss causing instability. Primary: within 24 hours. Secondary: 24 hours to 12 weeks.",
    },
    {
      id: "obstetrics-pph-c2",
      front: "The four Ts of PPH with their approximate share.",
      back: "Tone 70% (atony), Trauma 20% (tears, rupture, inversion), Tissue 10% (retained placenta, accreta), Thrombin 1% (coagulopathy).",
    },
    {
      id: "obstetrics-pph-c3",
      front: "Oxytocin dose for prevention and for treatment of PPH.",
      back: "Prevention: 10 units IM within one minute of birth. Treatment: 20 units in 500 mL Ringer lactate at 40-60 drops per minute, maximum 3 L of oxytocin-containing fluid, never an IV bolus.",
    },
    {
      id: "obstetrics-pph-c4",
      front: "Tranexamic acid in PPH: dose, timing, evidence.",
      back: "1 g IV over 10 minutes within 3 hours of birth, repeat 1 g after 30 minutes if bleeding continues; WOMAN trial 2017 - one-third reduction in death from bleeding.",
    },
    {
      id: "obstetrics-pph-c5",
      front: "Doses, maximums and contraindications of methylergometrine and carboprost.",
      back: "Methylergometrine 0.2 mg IM or slow IV every 15 minutes up to 5 doses (1 mg) - contraindicated in hypertension and heart disease. Carboprost 250 microgram IM every 15 minutes up to 8 doses (2 mg) - contraindicated in asthma.",
    },
    {
      id: "obstetrics-pph-c6",
      front: "Misoprostol doses in PPH.",
      back: "Prevention 600 microgram orally where oxytocin is unavailable; treatment 800 microgram sublingual as a single dose.",
    },
    {
      id: "obstetrics-pph-c7",
      front: "Shock index: formula and threshold after delivery.",
      back: "Heart rate divided by systolic blood pressure; above 0.9 after delivery indicates significant haemorrhage, above 1.5 severe.",
    },
    {
      id: "obstetrics-pph-c8",
      front: "Condom balloon tamponade: how much fluid and how long is it left?",
      back: "A condom over a Foley catheter filled with 300-500 mL saline until bleeding stops, vagina packed, oxytocin infusion and antibiotics continued, removed after 12-24 hours.",
    },
    {
      id: "obstetrics-pph-c9",
      front: "Components of the WHO E-MOTIVE bundle for PPH (2023).",
      back: "Early detection with a calibrated drape, Massage, Oxytocic drugs, Tranexamic acid, IV fluids, Examination and Escalation - delivered together within 15 minutes.",
    },
  ],
  references: [
    "WHO Recommendations for the Prevention and Treatment of Postpartum Haemorrhage, 2012; uterotonic update 2018; tranexamic acid recommendation 2017; E-MOTIVE bundle recommendation 2023",
    "Guidance Note on Prevention and Management of Postpartum Haemorrhage, Maternal Health Division, MoHFW, Government of India, 2015",
    "WOMAN Trial Collaborators. Effect of early tranexamic acid administration on mortality in women with post-partum haemorrhage. Lancet 2017",
    "FOGSI Good Clinical Practice Recommendations on Postpartum Haemorrhage, 2022",
    "Williams Obstetrics, 26th edition, 2022 - obstetrical haemorrhage",
    "DC Dutta's Textbook of Obstetrics, 9th edition, 2018 - complications of the third stage of labour",
  ],
});

topics.push({
  id: "obstetrics-early-pregnancy-bleeding",
  title: "Early pregnancy bleeding, ectopic pregnancy and abortion care under the MTP Act 2021",
  oneLiner:
    "Bleeding before 20 weeks is a miscarriage, an ectopic pregnancy or a molar pregnancy until proven otherwise; the family physician's task is to confirm the pregnancy with a urine test, recognise shock, avoid a rough pelvic examination, arrange a transvaginal ultrasound with serum beta-hCG, give anti-D to the Rh-negative woman, and know both the drug regimens for miscarriage and medical abortion and the legal framework of the Medical Termination of Pregnancy (Amendment) Act 2021.",
  frequency: "common",
  keywords: [
    "miscarriage",
    "abortion",
    "threatened abortion",
    "incomplete abortion",
    "missed abortion",
    "septic abortion",
    "ectopic pregnancy",
    "tubal pregnancy",
    "methotrexate",
    "discriminatory zone",
    "beta-hCG",
    "molar pregnancy",
    "hydatidiform mole",
    "gestational trophoblastic disease",
    "MTP Act 2021",
    "medical termination of pregnancy",
    "mifepristone",
    "misoprostol",
    "manual vacuum aspiration",
    "MVA",
    "comprehensive abortion care",
    "anti-D",
  ],
  sections: [
    {
      heading: "The approach to bleeding in early pregnancy",
      points: [
        "**Every woman of reproductive age with lower abdominal pain, vaginal bleeding, fainting or shoulder-tip pain has a urine pregnancy test before anything else,** because a ruptured ectopic pregnancy presenting as 'gastroenteritis' or 'urinary infection' is still a cause of avoidable death in India, and the woman may deny the possibility of pregnancy.",
        "The three diagnoses that matter are **miscarriage (10-20% of clinical pregnancies), ectopic pregnancy (1-2%) and molar pregnancy (about 1 in 1000);** cervical ectropion, polyps, vaginitis and implantation bleeding are the benign remainder and are diagnoses of exclusion.",
        "**Assess for shock first:** pulse, blood pressure, pallor, cold peripheries and the shock index; a woman with a pulse over 100, systolic under 90 or a tender rigid abdomen is resuscitated with two wide-bore cannulae and referred to a facility with an operating theatre and blood before any imaging.",
        "A gentle speculum examination shows whether blood is coming from the os and whether products are visible in the cervix - **products in the os are removed with sponge forceps, which stops the bleeding and the vasovagal bradycardia they cause;** a bimanual examination is done gently and is avoided altogether if an ectopic pregnancy is suspected and ultrasound is available.",
        "**Transvaginal ultrasound with a quantitative serum beta-hCG** is the investigation pair: an intrauterine gestational sac should be visible on transvaginal scan when hCG exceeds the discriminatory level of 1500-2000 mIU/mL (about 3500 mIU/mL on a transabdominal scan); an empty uterus above this level is an ectopic pregnancy or a completed miscarriage until proven otherwise.",
        "**Rh-negative women receive anti-D after any bleeding episode, miscarriage, ectopic pregnancy or termination:** 50 microgram (250 IU) IM before 12 weeks and 300 microgram (1500 IU) IM after 12 weeks, within 72 hours; this is the item most often forgotten in the emergency room.",
      ],
    },
    {
      heading: "Miscarriage: types and management the family physician can deliver",
      points: [
        "**Threatened miscarriage:** bleeding with a closed os and a viable pregnancy on scan; about 85% continue. There is no evidence for bed rest, and **vaginal micronised progesterone 400 mg twice daily until 16 weeks helps only the woman who has bleeding and one or more previous miscarriages** (PRISM trial, 2019); the woman is warned of the danger signs and rescanned in 7-14 days if there is doubt.",
        "**Inevitable and incomplete miscarriage:** open os with products partly passed; the options are expectant management for up to two weeks in a stable woman with a small residual, **misoprostol 600 microgram orally as a single dose (or 400 microgram sublingually)**, or manual vacuum aspiration if bleeding is heavy, sepsis is present or the uterus is over 12 weeks size.",
        "**Missed miscarriage (early fetal demise):** a closed os with a crown-rump length of 7 mm or more without cardiac activity, or a mean sac diameter of 25 mm or more without an embryo, confirmed on two scans a week apart or by a second observer; **mifepristone 200 mg orally followed 24-48 hours later by misoprostol 800 microgram vaginally** (MifeMiso trial, 2020) completes the process in over 80%, with MVA as the surgical alternative.",
        "**Complete miscarriage:** bleeding has settled, the os is closed and the uterus is empty on scan; a serum hCG that falls by more than 50% in 48 hours confirms it, and a woman without a scan-documented prior intrauterine pregnancy is followed with hCG because an ectopic pregnancy can mimic this picture.",
        "**Septic abortion** - fever, foul discharge, a tender uterus and often a history of an unsafe procedure - receives intravenous ampicillin 2 g, gentamicin 5 mg/kg and metronidazole 500 mg, tetanus toxoid with immunoglobulin if the procedure was unsafe, fluid resuscitation, and evacuation of the uterus within hours of starting antibiotics; bowel injury, a foreign body and gas gangrene must be considered, and the woman is referred to a unit with a surgeon.",
        "**Manual vacuum aspiration (MVA) is the surgical method of choice under 12 weeks** because it is done under paracervical block and oral analgesia, at a primary or community health centre by a trained provider, with a fraction of the perforation and infection risk of sharp curettage; WHO recommends that dilatation and curettage be abandoned where MVA is available.",
      ],
    },
    {
      heading: "Ectopic pregnancy: recognition, methotrexate and surgery",
      points: [
        "**Risk factors** are previous ectopic pregnancy, tubal surgery or sterilisation, pelvic inflammatory disease, an intrauterine device in place, assisted reproduction, smoking and a history of infertility; 95% are tubal and 70% of those are ampullary, but **half of ectopic pregnancies occur in women with no risk factor.**",
        "The classical triad is **amenorrhoea, lower abdominal pain and irregular dark bleeding;** rupture adds syncope, shoulder-tip pain from diaphragmatic irritation, abdominal distension, guarding and shock disproportionate to the visible blood loss, and the cervical excitation and adnexal tenderness on examination that must not be repeated once elicited.",
        "**Serial hCG:** a normal intrauterine pregnancy roughly doubles the hCG every 48 hours; a rise of less than 50% in 48 hours with an empty uterus indicates a failing pregnancy of uncertain location, and a plateau or slow rise is an ectopic until located; a single hCG value cannot make or exclude the diagnosis.",
        "**Methotrexate 50 mg per square metre IM as a single dose** is offered when the woman is haemodynamically stable, the ectopic is unruptured with a mass under 3.5 cm, there is no fetal cardiac activity, the hCG is under 5000 mIU/mL (best results under 1500-3000), liver, renal and blood counts are normal, she is not breastfeeding and she can return for follow-up; **hCG is repeated on days 4 and 7 and a fall of at least 15% between them predicts success,** with a second dose if it fails.",
        "**After methotrexate** she avoids folic acid, NSAIDs, alcohol and intercourse until hCG is undetectable, is warned that separation pain on days 2-7 is common but that worsening pain or faintness means rupture, and is told to avoid conception for three months.",
        "**Surgery** - laparoscopic salpingectomy, or salpingotomy when the other tube is diseased - is the treatment for a ruptured ectopic, haemodynamic instability, a mass over 3.5 cm, fetal cardiac activity, or hCG above 5000; a ruptured ectopic in a primary care setting is resuscitated with crystalloid, two lines and oxygen and transferred with a relative who can give blood, not kept for a scan.",
      ],
    },
    {
      heading: "Molar pregnancy and gestational trophoblastic disease",
      points: [
        "**A complete hydatidiform mole (46,XX, entirely paternal, no fetal tissue) presents with bleeding, a uterus larger than dates, hyperemesis, early pre-eclampsia before 20 weeks, theca-lutein cysts and an hCG above 100,000 mIU/mL,** with the snowstorm or bunch-of-grapes appearance on ultrasound; a partial mole (69,XXY, triploid) has fetal parts and lower hCG and is often diagnosed only on histology of a missed miscarriage.",
        "**Treatment is suction evacuation under oxytocin cover with histology of all tissue,** anti-D for the Rh-negative woman, a chest radiograph, and baseline thyroid function because hCG stimulates the thyroid receptor.",
        "**Follow-up is serum hCG weekly until three consecutive negative values, then monthly for six months after a complete mole** (and until negative for a partial mole); the woman uses reliable contraception - combined pills are acceptable once hCG is falling - and defers the next pregnancy for six to twelve months, with an early scan and a postnatal hCG in that pregnancy.",
        "**Gestational trophoblastic neoplasia** (15-20% after a complete mole, 1-5% after a partial) is diagnosed by an hCG plateau over three weeks, a rise over two weeks, or persistence at six months, and by choriocarcinoma presenting with secondary PPH, haemoptysis or a brain metastasis; low-risk disease is cured with methotrexate and folinic acid in over 95%.",
      ],
    },
    {
      heading: "Medical termination of pregnancy: the MTP (Amendment) Act 2021 and the Rules",
      points: [
        "**The Medical Termination of Pregnancy Act 1971, amended in 2021, permits termination by a registered medical practitioner on the opinion of one RMP up to 20 weeks and of two RMPs from 20 to 24 weeks,** the latter only for categories specified in Rule 3B: survivors of rape, sexual assault or incest; minors; women whose marital status changed during the pregnancy through widowhood or divorce; women with physical disabilities; mentally ill women; pregnancies with fetal malformation carrying a substantial risk of incompatibility with life or serious handicap; and pregnancies in humanitarian settings, disasters or emergencies declared by government.",
        "**The grounds** are risk to the woman's life or grave injury to her physical or mental health, substantial risk of serious fetal handicap, pregnancy from rape (presumed to constitute grave injury to mental health), and **failure of a contraceptive used by any woman or her partner** - the 2021 amendment replaced 'married woman or her husband' with 'any woman or her partner', extending the contraceptive-failure ground to unmarried women.",
        "**Beyond 24 weeks a state-level Medical Board** (a gynaecologist, a paediatrician, a radiologist or sonologist and any other member the government notifies) may permit termination for substantial fetal abnormality, giving its opinion within three days and the procedure within five; in an emergency to save the woman's life, any RMP may terminate at any gestation at any place without the opinion requirements (Section 5).",
        "**Consent is the woman's own if she is 18 years or older and of sound mind;** for a minor or a mentally ill woman the consent of a guardian is required, and the husband's consent is never required. A pregnant minor is reported under the POCSO Act, but the 2021 amendment and the Rules protect her identity, and the Supreme Court (2022) has held that the RMP need not disclose the minor's identity when the minor and guardian request confidentiality and the termination is consensual.",
        "**Confidentiality is statutory:** the name and particulars of a woman who has undergone termination are not revealed except to a person authorised by law, and breach is punishable with imprisonment up to one year and a fine. The place must be a government hospital or a place approved by the District Level Committee, records are kept in the admission register (Form III) for five years, the opinion is recorded on Form I and the monthly report goes to the Chief Medical Officer on Form II; the woman signs consent on Form C.",
        "**The MTP Rules 2021 raised the outpatient medical-abortion window from 7 to 9 weeks (63 days):** mifepristone 200 mg orally, then 24-48 hours later misoprostol 800 microgram buccally, vaginally or sublingually, prescribed by an RMP with access to an approved place; the woman is reviewed at two weeks with a urine test or scan, and 12-20 week terminations use mifepristone 200 mg followed by misoprostol 400 microgram vaginally or sublingually every three hours to a maximum of five doses. **Sex-selective termination is a separate offence under the PCPNDT Act** and is never a lawful ground.",
      ],
    },
    {
      heading: "Post-abortion care and counselling",
      points: [
        "**Comprehensive abortion care under the MoHFW 2018 guidelines** means the procedure, post-abortion contraception, treatment of complications and counselling delivered at the same visit; a woman who leaves without a contraceptive method returns pregnant within the year in a substantial minority.",
        "**Fertility returns within two weeks of a first-trimester abortion,** so every method except the diaphragm can be started the same day: a copper IUCD or levonorgestrel intrauterine system immediately after a surgical abortion or once the medical abortion is confirmed complete, DMPA, the combined pill, the progestogen-only pill, centchroman, or an implant.",
        "**Warning signs after any abortion or miscarriage** are bleeding soaking more than two pads an hour for two hours, fever, foul discharge, severe or increasing pain, and fainting; a woman who has had a medical abortion is told that bleeding is heavier than a period for a day or two and lighter for up to two weeks, and that she must return if the pregnancy test is still positive at two weeks.",
        "Grief after miscarriage is real and often unacknowledged in the family; **the family physician names it, says that nothing she did caused it, gives the recurrence figure honestly (about 15-20% after one loss, 25-30% after two) and investigates only after three consecutive losses** (antiphospholipid antibodies, parental karyotype, uterine cavity assessment, thyroid function).",
        "Folic acid is restarted before the next attempt, chronic conditions are optimised, and the interpregnancy interval after a miscarriage need not exceed the time the couple needs - the WHO six-month recommendation after miscarriage is not supported by later data.",
      ],
    },
  ],
  tables: [
    {
      heading: "Types of miscarriage: findings and management",
      columns: ["Type", "Bleeding and pain", "Cervical os", "Ultrasound", "Management"],
      rows: [
        ["Threatened", "Slight bleeding, mild or no pain", "Closed", "Viable intrauterine pregnancy", "Reassure, warn of danger signs; vaginal progesterone 400 mg BD only if previous miscarriage"],
        ["Inevitable", "Heavy bleeding, cramping", "Open", "Sac low or in the cervix", "Misoprostol 600 microgram oral or MVA; anti-D if Rh negative"],
        ["Incomplete", "Heavy, continues", "Open, products may be seen", "Retained products, thick endometrium", "Remove products from the os; misoprostol 600 microgram oral or MVA; antibiotics if infected"],
        ["Complete", "Settled after passage of products", "Closed", "Empty uterus", "Confirm with scan or falling hCG; no further treatment"],
        ["Missed", "Minimal or none; loss of symptoms", "Closed", "CRL 7 mm or more without cardiac activity, or MSD 25 mm or more without embryo", "Mifepristone 200 mg then misoprostol 800 microgram vaginal at 24-48 h, or MVA; expectant if she prefers"],
        ["Septic", "Bleeding with fever, foul discharge", "Open, tender", "Retained products, gas or collection", "IV ampicillin, gentamicin, metronidazole; tetanus prophylaxis; evacuate; refer"],
      ],
    },
    {
      heading: "MTP Act 1971 as amended in 2021: the provisions that are examined",
      columns: ["Provision", "1971 Act", "2021 Amendment and Rules"],
      rows: [
        ["Gestation with one RMP opinion", "Up to 12 weeks", "Up to 20 weeks"],
        ["Gestation with two RMP opinions", "12 to 20 weeks", "20 to 24 weeks, only for the seven Rule 3B categories"],
        ["Beyond 24 weeks", "Not permitted except to save life", "Medical Board may permit for substantial fetal abnormality; Section 5 emergency provision unchanged"],
        ["Contraceptive failure ground", "Married woman or her husband", "Any woman or her partner"],
        ["Confidentiality", "Register confidential", "Explicit statutory protection; disclosure punishable with imprisonment up to one year and fine"],
        ["Outpatient medical abortion window", "Up to 7 weeks (2003 Rules)", "Up to 9 weeks (63 days) with mifepristone and misoprostol"],
        ["Consent", "Woman if 18 or older; guardian for minor or mentally ill", "Unchanged; the husband's consent is not required"],
      ],
    },
  ],
  redFlags: [
    "Pain, fainting or shoulder-tip pain with a positive pregnancy test - ruptured ectopic pregnancy; two lines, crystalloid, oxygen, transfer to a theatre with blood, no delay for a scan.",
    "Bleeding with pulse above 100 or systolic below 90 mmHg - resuscitate and refer; remove any products visible in the os on the way.",
    "Fever, foul discharge and a tender uterus after a miscarriage or a procedure - septic abortion; antibiotics within the hour, tetanus prophylaxis, evacuation and referral.",
    "Uterus larger than dates with hyperemesis, bleeding or blood pressure above 140/90 before 20 weeks - molar pregnancy; hCG and ultrasound, refer for suction evacuation.",
    "Empty uterus on transvaginal scan with hCG above 1500-2000 mIU/mL - pregnancy of unknown location that is an ectopic until proven otherwise; serial hCG under specialist care.",
    "Worsening pain, faintness or a falling haemoglobin after methotrexate for an ectopic pregnancy - tubal rupture; do not attribute it to separation pain, refer for surgery.",
    "Fresh bleeding, haemoptysis or neurological symptoms in the months after a molar pregnancy or any pregnancy - choriocarcinoma; send an hCG.",
  ],
  pearls: [
    "A urine pregnancy test costs less than the cheapest analgesic; do it in every woman of reproductive age with abdominal pain before you write a diagnosis.",
    "Discriminatory zone: an intrauterine sac should be seen on transvaginal scan once hCG exceeds 1500-2000 mIU/mL; an empty uterus above that is an ectopic until located.",
    "Methotrexate 50 mg per square metre IM once; hCG on days 4 and 7; a 15% fall between them means it is working.",
    "Misoprostol 600 microgram orally for an incomplete miscarriage; mifepristone 200 mg then misoprostol 800 microgram vaginally for a missed miscarriage; MVA, not curettage, if surgery is needed.",
    "One RMP to 20 weeks, two RMPs to 24 weeks for the seven categories, a Medical Board beyond - and the contraceptive-failure ground now covers any woman or her partner.",
    "The husband's consent is never required for an MTP; the woman's is, and a guardian's for a minor or a mentally ill woman.",
    "Anti-D after every bleed, miscarriage, ectopic or termination in the Rh-negative woman: 50 microgram before 12 weeks, 300 microgram after, within 72 hours.",
    "Products in the os cause bleeding and bradycardia - a sponge holder removes both problems in ten seconds.",
  ],
  theory: [
    {
      id: "obstetrics-early-pregnancy-bleeding-t1",
      paper: "IV",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "A 26-year-old woman with eight weeks of amenorrhoea presents to your clinic with lower abdominal pain and vaginal spotting for one day. Discuss the differential diagnosis, your evaluation, and the management of each of the important possibilities at the level of a family physician.",
      openingLines: [
        "Bleeding in early pregnancy affects about one in four pregnancies and has three diagnoses that determine survival and future fertility: miscarriage, ectopic pregnancy and gestational trophoblastic disease.",
        "The family physician's role is to recognise the emergency, confirm the pregnancy and its location with a urine test, transvaginal ultrasound and serum beta-hCG, treat what can be treated at the primary level, give anti-D to the Rh-negative woman, and refer the rest with resuscitation already begun.",
      ],
      answer: [
        {
          heading: "1. Differential diagnosis",
          points: [
            "Miscarriage - threatened, inevitable, incomplete, complete, missed or septic; the commonest cause, 10-20% of clinical pregnancies.",
            "Ectopic pregnancy - 1-2% of pregnancies; the dangerous cause, with pain preceding bleeding, dark scanty loss, and syncope or shoulder-tip pain on rupture.",
            "Hydatidiform mole - uterus larger than dates, hyperemesis, very high hCG, snowstorm on scan.",
            "Non-obstetric causes - cervical ectropion or polyp, cervicitis, vaginal trauma, and rarely cervical carcinoma; implantation bleeding is a diagnosis of exclusion.",
          ],
        },
        {
          heading: "2. Evaluation",
          points: [
            "History: amount and colour of bleeding, passage of tissue, character and side of pain, syncope, shoulder-tip pain, risk factors for ectopic pregnancy (previous ectopic, tubal surgery, PID, IUCD, ART), and any attempt at termination.",
            "Examination: pulse, blood pressure, shock index, pallor, abdominal tenderness and guarding; a gentle speculum to see the source of bleeding and any products in the os, which are removed; a gentle bimanual for uterine size, os and adnexal tenderness, omitted if ectopic is suspected and ultrasound is available.",
            "Investigations: urine pregnancy test, haemoglobin, blood group and Rh, serum quantitative beta-hCG, transvaginal ultrasound; an intrauterine sac should be seen when hCG exceeds 1500-2000 mIU/mL.",
            "Serial hCG at 48 hours when no intrauterine pregnancy is seen: a rise below 50% or a plateau indicates a failing or ectopic pregnancy.",
          ],
        },
        {
          heading: "3. Management of miscarriage",
          points: [
            "Threatened with a viable pregnancy: reassurance, danger signs, no bed rest; vaginal progesterone 400 mg twice daily to 16 weeks only if she has had a previous miscarriage.",
            "Incomplete or inevitable: remove products from the os; misoprostol 600 microgram orally single dose; manual vacuum aspiration if bleeding is heavy, sepsis is present or size exceeds 12 weeks.",
            "Missed: mifepristone 200 mg then misoprostol 800 microgram vaginally at 24-48 hours, or MVA, or expectant management by choice.",
            "Septic: IV ampicillin, gentamicin and metronidazole, tetanus prophylaxis, fluid resuscitation, evacuation and referral.",
            "Anti-D 50 microgram IM within 72 hours for the Rh-negative woman before 12 weeks (300 microgram after 12 weeks).",
          ],
        },
        {
          heading: "4. Management of ectopic pregnancy",
          points: [
            "Ruptured or unstable: two wide-bore lines, crystalloid, oxygen, cross-match, immediate transfer for laparotomy or laparoscopy; the woman is not kept for a scan.",
            "Stable, unruptured, mass under 3.5 cm, no cardiac activity, hCG under 5000 mIU/mL, normal blood counts and liver and renal function, reliable follow-up: methotrexate 50 mg per square metre IM single dose with hCG on days 4 and 7 (fall of at least 15% between them), and a second dose if not.",
            "Advice after methotrexate: avoid folic acid, NSAIDs, alcohol and intercourse until hCG is undetectable; return for worsening pain; avoid conception for three months.",
            "Surgery for failed medical treatment, hCG above 5000, cardiac activity, or a mass over 3.5 cm; salpingectomy is standard, salpingotomy if the other tube is damaged.",
          ],
        },
        {
          heading: "5. Management of molar pregnancy and follow-up counselling",
          points: [
            "Refer for suction evacuation with histology; hCG weekly until three negatives then monthly for six months; reliable contraception; defer pregnancy six to twelve months; treat persistent or rising hCG as gestational trophoblastic neoplasia.",
            "For all: post-abortion contraception the same day, warning signs, grief acknowledged, recurrence risk stated honestly, folic acid before the next pregnancy, and investigation after three consecutive losses.",
          ],
        },
      ],
      mustDraw: [
        "A flow chart: positive pregnancy test with bleeding - shock? resuscitate and refer - stable: transvaginal scan and hCG - intrauterine pregnancy (viable, missed, incomplete) versus empty uterus (hCG above discriminatory zone: ectopic; below: repeat at 48 hours).",
        "A table of the types of miscarriage with os, scan and management.",
      ],
      markSplit: [
        { part: "Differential diagnosis", marks: 1.5 },
        { part: "Evaluation including hCG and ultrasound logic", marks: 2.5 },
        { part: "Management of miscarriage with drug doses", marks: 2.5 },
        { part: "Management of ectopic pregnancy including methotrexate criteria", marks: 2.5 },
        { part: "Molar pregnancy and counselling", marks: 1 },
      ],
      keywords: ["early pregnancy bleeding", "miscarriage", "ectopic pregnancy", "methotrexate", "misoprostol", "discriminatory zone", "anti-D"],
    },
    {
      id: "obstetrics-early-pregnancy-bleeding-t2",
      paper: "IV",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write a short note on the salient features of the Medical Termination of Pregnancy (Amendment) Act 2021.",
      openingLines: [
        "The Medical Termination of Pregnancy Act 1971 legalised abortion in India on defined grounds by registered medical practitioners at approved places; the Amendment Act of 2021, with the Rules notified in October 2021, widened the gestational limits, extended the contraceptive-failure ground to unmarried women, created Medical Boards for terminations beyond 24 weeks and made confidentiality a statutory duty.",
        "The Act remains a provider-protection law rather than a rights-based one: it defines when a doctor may lawfully terminate, and every termination outside it is an offence under the Indian Penal Code or the Bharatiya Nyaya Sanhita.",
      ],
      answer: [
        {
          heading: "Gestational limits and opinions",
          points: [
            "Up to 20 weeks: the opinion of one registered medical practitioner formed in good faith (previously 12 weeks).",
            "20 to 24 weeks: the opinion of two RMPs, only for the categories in Rule 3B - survivors of rape, sexual assault or incest; minors; change of marital status during pregnancy (widowhood, divorce); women with physical disabilities; mentally ill women; substantial fetal abnormality; and pregnancies in humanitarian settings, disasters or emergencies.",
            "Beyond 24 weeks: a state Medical Board (gynaecologist, paediatrician, radiologist or sonologist, and any other member notified) may permit termination for substantial fetal abnormality, deciding within three days.",
            "Section 5: to save the woman's life, any RMP may terminate at any gestation at any place without the opinion and place requirements.",
          ],
        },
        {
          heading: "Grounds and consent",
          points: [
            "Grounds: risk to life or grave injury to physical or mental health; substantial risk of serious physical or mental handicap in the child; pregnancy from rape (presumed grave mental injury); failure of any contraceptive used by any woman or her partner - the phrase 'married woman or her husband' was deleted.",
            "Consent: the woman's own written consent if 18 or older and of sound mind; a guardian's for a minor or a mentally ill woman; the spouse's consent is not required.",
          ],
        },
        {
          heading: "Confidentiality, place, provider and records",
          points: [
            "Identity and particulars are disclosed only to a person authorised by law; breach is punishable with imprisonment up to one year and a fine.",
            "Place: government hospitals without separate approval; private places approved by the District Level Committee.",
            "Provider: an RMP with the training or experience prescribed in the Rules; the Rules 2021 permit outpatient medical abortion with mifepristone and misoprostol up to 9 weeks by an RMP with access to an approved place.",
            "Records: Form C (consent), Form I (RMP opinion), Form II (monthly report to the Chief Medical Officer), Form III (admission register kept for five years).",
          ],
        },
        {
          heading: "Limitations",
          points: [
            "Sex-selective termination remains an offence under the PCPNDT Act; the woman's request alone is still not a ground; access beyond 20 weeks depends on category rather than need; and the mandatory-reporting duty under POCSO for minors deters adolescents, partly mitigated by the Supreme Court's 2022 ruling protecting identity.",
          ],
        },
      ],
      mustDraw: ["A two-column table comparing the 1971 Act and the 2021 Amendment on gestational limits, opinions, the contraceptive-failure clause and confidentiality."],
      markSplit: [
        { part: "Gestational limits, opinions and Medical Board", marks: 2 },
        { part: "Grounds and consent", marks: 1.5 },
        { part: "Confidentiality, place, provider and records", marks: 1 },
        { part: "Limitations", marks: 0.5 },
      ],
      keywords: ["MTP Act 2021", "20 weeks", "24 weeks", "Medical Board", "Rule 3B", "contraceptive failure", "confidentiality"],
    },
  ],
  mcqs: [
    {
      id: "obstetrics-early-pregnancy-bleeding-q1",
      stem: "A 28-year-old woman with seven weeks of amenorrhoea has mild pelvic pain and spotting. Serum beta-hCG is 2400 mIU/mL and a transvaginal ultrasound shows an empty uterus with a 2 cm right adnexal mass and no free fluid. She is haemodynamically stable. What is the most likely diagnosis?",
      options: [
        "Complete miscarriage",
        "Threatened miscarriage with a corpus luteum",
        "Ectopic pregnancy",
        "Normal early intrauterine pregnancy too small to see",
        "Molar pregnancy",
      ],
      answer: 2,
      explanation:
        "An hCG above the transvaginal discriminatory zone of 1500-2000 mIU/mL with no intrauterine sac and an adnexal mass is an ectopic pregnancy until proven otherwise. A normal intrauterine pregnancy at this hCG level would be visible on transvaginal scan, so the fourth option is excluded by the discriminatory principle. Threatened miscarriage requires a visible intrauterine pregnancy. Complete miscarriage cannot be assumed without a documented prior intrauterine pregnancy or a rapidly falling hCG, because the ectopic mimics it exactly. A mole produces a very high hCG with an intrauterine snowstorm, not an empty uterus.",
      difficulty: "moderate",
    },
    {
      id: "obstetrics-early-pregnancy-bleeding-q2",
      stem: "Which of the following makes a woman with an ectopic pregnancy unsuitable for single-dose methotrexate?",
      options: [
        "Serum hCG of 1800 mIU/mL",
        "Adnexal mass of 2.5 cm",
        "Fetal cardiac activity in the adnexal mass",
        "Absence of free fluid in the pelvis",
        "Haemoglobin of 11.5 g/dL",
      ],
      answer: 2,
      explanation:
        "Fetal cardiac activity is a contraindication to medical management because failure and rupture rates rise sharply; the other absolute exclusions are haemodynamic instability, rupture, a mass over 3.5 cm, hCG above 5000 mIU/mL, abnormal liver, renal or blood counts, breastfeeding and inability to follow up. An hCG of 1800 and a mass of 2.5 cm both fall within the favourable range. Absence of free fluid argues against rupture and favours methotrexate rather than excluding it, and a normal haemoglobin is reassuring.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-early-pregnancy-bleeding-q3",
      stem: "A 22-year-old unmarried woman requests termination of a 19-week pregnancy that resulted from failure of the condom she and her partner used. Under the MTP Act as amended in 2021, which statement is correct?",
      options: [
        "Termination is not permitted because she is unmarried",
        "Termination requires the opinion of two registered medical practitioners",
        "Termination is permitted on the opinion of one registered medical practitioner on the ground of contraceptive failure",
        "Termination requires the permission of a Medical Board",
        "Termination requires the consent of her parents",
      ],
      answer: 2,
      explanation:
        "The 2021 amendment replaced 'married woman or her husband' with 'any woman or her partner' in the contraceptive-failure explanation, so an unmarried woman qualifies, and at 19 weeks only one RMP's opinion is needed since the single-opinion limit was raised from 12 to 20 weeks. Two opinions apply from 20 to 24 weeks for the Rule 3B categories, and a Medical Board only beyond 24 weeks for fetal abnormality. An adult of sound mind gives her own consent; parental or spousal consent is not required.",
      difficulty: "moderate",
    },
    {
      id: "obstetrics-early-pregnancy-bleeding-q4",
      stem: "A woman at nine weeks has an incomplete miscarriage with moderate bleeding and is haemodynamically stable. No products are visible in the os. Which is the most appropriate medical management?",
      options: [
        "Misoprostol 600 microgram orally as a single dose",
        "Misoprostol 25 microgram vaginally every 6 hours",
        "Mifepristone 200 mg alone",
        "Oxytocin 10 units IM",
        "Methotrexate 50 mg per square metre IM",
      ],
      answer: 0,
      explanation:
        "WHO recommends misoprostol 600 microgram orally (or 400 microgram sublingually) as a single dose for incomplete miscarriage under 13 weeks, with manual vacuum aspiration reserved for heavy bleeding, infection or larger uteri. The 25 microgram vaginal dose is a labour-induction regimen for a term uterus. Mifepristone alone is inadequate; it is used before misoprostol for missed miscarriage and for termination. Oxytocin is ineffective on the first-trimester uterus, which has few oxytocin receptors, and methotrexate is a treatment for ectopic pregnancy and trophoblastic neoplasia, not miscarriage.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-early-pregnancy-bleeding-q5",
      stem: "An Rh-negative woman undergoes medical abortion at eight weeks of gestation. What anti-D immunoglobulin prophylaxis is appropriate?",
      options: [
        "None, because sensitisation does not occur before 12 weeks",
        "50 microgram (250 IU) IM within 72 hours",
        "300 microgram (1500 IU) IM within 72 hours",
        "300 microgram IM at 28 weeks only",
        "50 microgram IM only if the partner is Rh-positive and a Kleihauer test is positive",
      ],
      answer: 1,
      explanation:
        "Sensitisation can occur from about 6 weeks onward, so every Rh-negative woman receives anti-D after a termination, miscarriage or ectopic pregnancy; the dose is 50 microgram (250 IU) before 12 weeks and 300 microgram (1500 IU) at or after 12 weeks, given within 72 hours. The 300 microgram dose at 28 weeks is routine antenatal prophylaxis in an ongoing pregnancy, not the response to a sensitising event. The Kleihauer test quantifies large fetomaternal haemorrhage after 20 weeks and is not needed before a first-trimester dose, and waiting for the partner's group only delays a cheap intervention.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-early-pregnancy-bleeding-q6",
      stem: "After suction evacuation of a complete hydatidiform mole, which follow-up schedule of serum hCG is recommended?",
      options: [
        "A single hCG at six weeks",
        "Weekly until three consecutive negative values, then monthly for six months",
        "Monthly for one year regardless of values",
        "Every 48 hours for two weeks",
        "No follow-up is needed if the histology is benign",
      ],
      answer: 1,
      explanation:
        "Weekly hCG until three consecutive normal values and then monthly for six months detects the 15-20% of complete moles that progress to gestational trophoblastic neoplasia, defined by a plateau over three weeks, a rise over two weeks or persistence at six months. A single value at six weeks misses late rises, and monthly-only testing from the outset misses the early plateau. Forty-eight-hourly testing is the interval for a pregnancy of unknown location, not for mole surveillance. Benign histology does not exclude neoplasia because the diagnosis of neoplasia is biochemical, not histological.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "obstetrics-early-pregnancy-bleeding-c1",
      front: "Discriminatory zone for beta-hCG on transvaginal and transabdominal ultrasound.",
      back: "An intrauterine sac should be visible above 1500-2000 mIU/mL on transvaginal scan and above about 3500 mIU/mL on transabdominal scan; an empty uterus above this level is an ectopic until proven otherwise.",
    },
    {
      id: "obstetrics-early-pregnancy-bleeding-c2",
      front: "Criteria for single-dose methotrexate in ectopic pregnancy, and the dose.",
      back: "Stable, unruptured, mass under 3.5 cm, no fetal cardiac activity, hCG under 5000 mIU/mL, normal counts and liver and renal function, not breastfeeding, able to follow up; 50 mg per square metre IM; hCG on days 4 and 7 with a 15% fall.",
    },
    {
      id: "obstetrics-early-pregnancy-bleeding-c3",
      front: "Ultrasound criteria for a missed miscarriage.",
      back: "Crown-rump length 7 mm or more with no cardiac activity, or mean sac diameter 25 mm or more with no embryo, confirmed on a repeat scan a week later or by a second observer.",
    },
    {
      id: "obstetrics-early-pregnancy-bleeding-c4",
      front: "Drug regimens for incomplete and missed miscarriage.",
      back: "Incomplete: misoprostol 600 microgram orally (or 400 microgram sublingually) single dose. Missed: mifepristone 200 mg orally then misoprostol 800 microgram vaginally 24-48 hours later; MVA is the surgical alternative.",
    },
    {
      id: "obstetrics-early-pregnancy-bleeding-c5",
      front: "Gestational limits and opinions under the MTP Act as amended in 2021.",
      back: "Up to 20 weeks one RMP; 20-24 weeks two RMPs for the seven Rule 3B categories; beyond 24 weeks a Medical Board for substantial fetal abnormality; any gestation to save life under Section 5.",
    },
    {
      id: "obstetrics-early-pregnancy-bleeding-c6",
      front: "The seven Rule 3B categories eligible for termination between 20 and 24 weeks.",
      back: "Survivors of rape, sexual assault or incest; minors; change of marital status during pregnancy (widowhood or divorce); physical disability; mental illness; substantial fetal abnormality; humanitarian settings, disasters or emergencies.",
    },
    {
      id: "obstetrics-early-pregnancy-bleeding-c7",
      front: "Outpatient medical abortion regimen and the gestational window under the MTP Rules 2021.",
      back: "Up to 9 weeks (63 days): mifepristone 200 mg orally, then misoprostol 800 microgram buccally, vaginally or sublingually 24-48 hours later; review at two weeks.",
    },
    {
      id: "obstetrics-early-pregnancy-bleeding-c8",
      front: "Anti-D doses after a sensitising event in an Rh-negative woman.",
      back: "50 microgram (250 IU) IM before 12 weeks; 300 microgram (1500 IU) IM at or after 12 weeks; within 72 hours of the event.",
    },
    {
      id: "obstetrics-early-pregnancy-bleeding-c9",
      front: "hCG surveillance after evacuation of a complete mole, and the definition of gestational trophoblastic neoplasia.",
      back: "Weekly until three consecutive negatives, then monthly for six months. Neoplasia: plateau over three weeks, rise over two weeks, or persistence at six months.",
    },
  ],
  references: [
    "The Medical Termination of Pregnancy (Amendment) Act, 2021, and the Medical Termination of Pregnancy (Amendment) Rules, 2021, Government of India",
    "Comprehensive Abortion Care: Training and Service Delivery Guidelines, Maternal Health Division, MoHFW, 2nd edition, 2018",
    "WHO Abortion Care Guideline, 2022",
    "NICE Guideline NG126: Ectopic Pregnancy and Miscarriage - Diagnosis and Initial Management, 2019, updated 2023",
    "ACOG Practice Bulletin 193: Tubal Ectopic Pregnancy, 2018",
    "Coomarasamy A et al. PRISM trial: progesterone in women with bleeding in early pregnancy. NEJM 2019; Chu JJ et al. MifeMiso trial. Lancet 2020",
    "FOGSI Good Clinical Practice Recommendations on Rh-negative Pregnancy and Anti-D Prophylaxis, 2017",
    "Williams Obstetrics, 26th edition, 2022 - abortion, ectopic pregnancy and gestational trophoblastic disease",
  ],
});

topics.push({
  id: "obstetrics-postnatal-care",
  title: "Postnatal care, breastfeeding and postpartum contraception",
  oneLiner:
    "The puerperium is the six weeks after delivery in which the reproductive organs return to the non-pregnant state, and postnatal care is the scheduled supervision of mother and newborn in that period - a 48-hour facility stay, home-based newborn care visits by the ASHA on days 3, 7, 14, 21, 28 and 42, examination for bleeding, sepsis, hypertension, thromboembolism and depression, support for exclusive breastfeeding, and a contraceptive method chosen before the six-week check.",
  frequency: "common",
  keywords: [
    "puerperium",
    "postnatal care",
    "PNC",
    "HBNC",
    "home-based newborn care",
    "lochia",
    "involution",
    "puerperal sepsis",
    "postpartum depression",
    "EPDS",
    "postpartum blues",
    "postpartum psychosis",
    "breastfeeding",
    "exclusive breastfeeding",
    "attachment",
    "mastitis",
    "engorgement",
    "MAA programme",
    "IMS Act",
    "LAM",
    "lactational amenorrhoea",
    "PPIUCD",
    "Antara",
    "Chhaya",
    "postpartum contraception",
  ],
  sections: [
    {
      heading: "Normal puerperium and the schedule of postnatal contacts",
      points: [
        "**The uterus is at the umbilicus immediately after delivery, involutes at about one finger-breadth (1 cm) a day, is no longer palpable abdominally by day 10-14 and returns to its non-pregnant size by six weeks;** a uterus that stays bulky and tender, or lochia that stays red beyond a week, is subinvolution from retained products or infection.",
        "**Lochia** is rubra (red, days 1-4), serosa (pink-brown, days 5-10) and alba (yellow-white, up to three to six weeks); foul-smelling lochia is endometritis until proven otherwise, and a return of fresh bleeding after day 7 is secondary postpartum haemorrhage.",
        "**After an institutional delivery the mother and baby stay 48 hours under JSSK** (the period in which most primary haemorrhage, eclampsia and neonatal collapse occur), with pulse, blood pressure, temperature, fundal tone, lochia, bladder and breastfeeding checked every 15 minutes for two hours and then at least four times a day.",
        "**Home-based newborn care (HBNC) visits by the ASHA follow on days 3, 7, 14, 21, 28 and 42 after an institutional delivery, with an additional visit on day 1 after a home delivery;** the ASHA weighs the baby, checks temperature and feeding, looks for the newborn danger signs and refers to the medical officer or the special newborn care unit, and is paid for the completed schedule.",
        "**The facility postnatal contacts are within 24 hours, at day 3, at day 7 and at six weeks** (WHO 2022 recommends the first 24 hours, 48-72 hours, days 7-14 and six weeks); the six-week visit is the one at which contraception, the haemoglobin, the blood pressure in a woman who had pre-eclampsia, and the post-GDM glucose tolerance test are all due.",
        "**Routine prescriptions continue:** iron-folic acid for 180 days postpartum, calcium for six months, analgesia for perineal pain, and **anti-D 300 microgram IM within 72 hours to the Rh-negative mother of an Rh-positive baby**; rubella (MR) vaccine is given postpartum to the seronegative woman, with the advice to avoid pregnancy for one month.",
      ],
    },
    {
      heading: "The postnatal examination and the mother's danger signs",
      points: [
        "**Examine at every contact:** temperature, pulse, blood pressure, pallor, breasts and nipples, the fundal height and tenderness, the lochia, the perineal or caesarean wound, the calves for tenderness and swelling, the bladder for retention, and the mother's mood and sleep; ask about feeding, pain, bleeding and how she is coping, and speak to her alone at least once.",
        "**Puerperal sepsis** - temperature of 38 degrees C or more on any two of the first ten days excluding the first 24 hours, with foul lochia, a tender uterus and tachycardia - is usually endometritis from anaerobes, streptococci and Escherichia coli; the family physician takes a high vaginal swab and blood culture where possible, starts **amoxicillin-clavulanate 625 mg three times daily with metronidazole 400 mg three times daily** for mild cases, and admits for intravenous ampicillin, gentamicin and metronidazole if she is unwell, because group A streptococcal sepsis kills within hours.",
        "**Postpartum hypertension:** blood pressure above 140/90 mmHg in the first week is checked daily in a woman who had pre-eclampsia, because **eclampsia occurs after delivery in up to 40% of cases, most within 48 hours but some up to a week;** headache, visual disturbance or epigastric pain postpartum is treated as impending eclampsia and referred, and antihypertensives (nifedipine or labetalol) are continued and tapered over weeks, not stopped at discharge.",
        "**Venous thromboembolism** is at its highest incidence in the first three weeks postpartum; unilateral calf pain or swelling, or breathlessness with chest pain, is referred the same day for compression ultrasound or CT pulmonary angiography, and low-molecular-weight heparin is started before the result if the suspicion is high, since it is safe in breastfeeding.",
        "**Urinary problems:** retention after a long labour or an epidural is catheterised before the bladder is overdistended; stress incontinence and a feeling of prolapse are treated with pelvic floor exercises from the first days and reviewed at six weeks; dysuria with fever is a urinary infection until cultured.",
        "**The mother's danger signs, taught before discharge:** heavy bleeding or large clots, fever, foul discharge, severe headache or blurred vision or a fit, breathlessness or chest pain, calf pain, a red painful breast, a wound that is red or discharging, inability to pass urine, and feeling unable to cope or thoughts of harming herself or the baby.",
      ],
    },
    {
      heading: "Mood after delivery: blues, depression and psychosis",
      points: [
        "**Postpartum blues affect 50-80% of women, begin on day 3-5, consist of tearfulness, lability and anxiety without loss of function, and resolve within two weeks;** they need reassurance, sleep and support, not drugs, but a woman whose blues have not settled by two weeks is screened for depression.",
        "**Postpartum depression affects 10-20% of Indian women** and is screened for with the Edinburgh Postnatal Depression Scale at the six-week visit and whenever there is concern; **a score of 13 or more, or any positive answer to item 10 on self-harm, needs assessment the same day.** Risk factors are a previous depression, a difficult birth, a female child in a family that wanted a son, domestic violence, poverty and lack of support.",
        "Mild depression is treated with structured psychosocial support (the Thinking Healthy Programme delivered by community health workers is the evidence base from South Asia), sleep protection and involvement of the family; **moderate and severe depression receive sertraline 50-100 mg daily, which is the antidepressant with the lowest milk transfer, and breastfeeding is continued.**",
        "**Postpartum psychosis affects 1-2 per 1000 births, begins within the first two weeks, presents with confusion, insomnia, delusions about the baby, hallucinations and rapid mood swings, and is a psychiatric emergency** because of the risk of suicide and infanticide; the woman is never left alone with the baby and is admitted the same day, ideally to a mother-baby unit, and half have underlying bipolar disorder.",
        "Ask every father too; paternal depression is common, and a mother whose husband and mother-in-law understand what depression is has a far better chance of recovery than one told she is ungrateful.",
      ],
    },
    {
      heading: "Breastfeeding: initiation, technique and the national framework",
      points: [
        "**Breastfeeding is initiated within one hour of birth, is exclusive for six months (no water, honey, ghutti or formula), complementary feeds start at six months, and breastfeeding continues to two years and beyond;** colostrum in the first three days is rich in secretory IgA and is never discarded. Exclusive breastfeeding prevents about 13% of under-five deaths and is the single most effective child survival intervention.",
        "**Good positioning** has four signs - the baby's head and body in a straight line, the face turned to the breast with the nose opposite the nipple, the body held close to the mother, and the whole body supported; **good attachment** has four - the chin touching the breast, the mouth wide open, the lower lip turned outward, and more areola visible above the upper lip than below.",
        "Feed on demand, at least eight to twelve times in 24 hours including at night, letting the baby finish the first breast to get the fat-rich hindmilk before offering the second; **adequacy is judged by six or more wet nappies a day after day 4, regaining the birth weight by two weeks, and a gain of at least 500 g a month,** not by the mother's perception of her supply.",
        "**Expressed breast milk** by hand or pump is the answer to separation, work and the sick or preterm baby; it keeps for up to six hours at room temperature, 24 hours in a refrigerator and three months in a deep freezer, and is fed by cup or spoon, never by bottle.",
        "**The framework:** the Infant Milk Substitutes, Feeding Bottles and Infant Foods Act 1992, amended 2003, bans promotion of formula, bottles and infant foods for children under two and forbids health workers from accepting gifts from manufacturers; the Baby-Friendly Hospital Initiative (1991, Ten Steps revised 2018); and the **Mothers' Absolute Affection (MAA) programme of 2016,** which trains ASHAs and facility staff in counselling and supports breastfeeding at the facility and in the community.",
        "**Contraindications are few:** classic galactosaemia in the infant (absolute), maternal chemotherapy, radioactive iodine, amiodarone and ergot derivatives; HIV is not a contraindication in India - the mother on antiretroviral therapy breastfeeds exclusively for six months; hepatitis B and C are not contraindications; active tuberculosis continues breastfeeding with a mask, the mother's treatment and isoniazid prophylaxis for the baby; a herpes lesion on the breast rules out that breast only.",
      ],
    },
    {
      heading: "Breastfeeding problems the family physician treats",
      points: [
        "**Sore or cracked nipples are almost always poor attachment,** not a weak nipple; correct the latch, break suction with a finger before removing the baby, apply hindmilk to the nipple after feeds, avoid soap, and check for infant tongue-tie and candida if the pain persists.",
        "**Engorgement on days 3-5** - both breasts hot, heavy and shiny with a low-grade fever - is treated by feeding more often, expressing a little before the feed to soften the areola, warm compresses before and cold after, and paracetamol or ibuprofen; it is not a reason to stop feeding.",
        "**A blocked duct** is a tender wedge-shaped lump without systemic illness, relieved by continued feeding from that breast with the baby's chin pointing at the lump, massage toward the nipple, and correction of a tight brassiere or a missed feed.",
        "**Mastitis** - a red, hot, tender segment with fever above 38.5 degrees C and malaise, usually Staphylococcus aureus - is treated by continuing to feed from the affected breast (the milk is not harmful to the baby), **flucloxacillin or dicloxacillin 500 mg every 6 hours, or cephalexin 500 mg every 6 hours, for 10-14 days**, an NSAID, and review in 48 hours; failure to improve or a fluctuant mass means an abscess, drained by ultrasound-guided aspiration or incision, with feeding continued from the other breast.",
        "**Perceived insufficient milk is the commonest reason for stopping;** confirm adequacy by weight and wet nappies, increase the frequency of feeds and skin-to-skin contact, address the mother's rest and fluids, remove any formula top-ups, and reserve domperidone 10 mg three times daily as a galactagogue for a genuine deficit after these measures.",
        "**Inverted nipples** are managed antenatally with reassurance and postnatally with attachment help, a syringe technique to draw the nipple out before feeds, or a breast shell; most babies attach to the breast, not the nipple, and succeed.",
      ],
    },
    {
      heading: "Postpartum contraception: timing and choice of method",
      points: [
        "**Ovulation can return as early as day 25 in a woman who is not breastfeeding, so contraception must be in place by three weeks;** in the fully breastfeeding woman the lactational amenorrhoea method (LAM) is 98% effective while all three criteria hold - **amenorrhoea, exclusive or nearly exclusive breastfeeding day and night, and a baby under six months** - and the woman is told that the failure of any one criterion ends the method.",
        "**Birth spacing of at least 24 months from delivery to the next conception** (three years in the Indian programme message) halves the risk of preterm birth, low birth weight and maternal anaemia; the method is chosen during the antenatal period, not at the six-week visit, so that it is available at the delivery.",
        "**The postpartum intrauterine device (PPIUCD, copper 380A)** is inserted within 10 minutes of placental delivery, during caesarean section, or within 48 hours of delivery; **it is not inserted between 48 hours and four to six weeks** because of the higher expulsion and perforation risk, and an interval IUCD is placed thereafter; expulsion is about 5-10% higher than for interval insertion, so a follow-up at six weeks checks the threads.",
        "**Postpartum sterilisation** by minilaparotomy is done within seven days of delivery or after six weeks, and at caesarean section; the woman must be over 22 and under 49 with at least one living child, and consent is taken from her alone, never from the husband or a family member.",
        "**Progestogen-only methods are safe from delivery in the breastfeeding woman:** injectable DMPA 150 mg IM every three months (Antara), the progestogen-only pill, and the etonogestrel implant now entering the national programme; **centchroman (ormeloxifene, Chhaya) 30 mg twice weekly for three months then weekly** is non-hormonal and does not affect lactation. **Combined pills are contraindicated (WHO MEC category 4) before six weeks in the breastfeeding woman, category 3 from six weeks to six months, and category 3 before 21 days in the non-breastfeeding woman** because of thromboembolism.",
        "**Condoms** are offered to every couple from the resumption of intercourse and are the bridge between LAM and a long-acting method; **emergency contraception with levonorgestrel 1.5 mg within 72 hours** is safe during breastfeeding.",
      ],
    },
  ],
  tables: [
    {
      heading: "Postnatal contact schedule in the Indian programme",
      columns: ["Contact", "Timing", "By whom", "What is done"],
      rows: [
        ["Facility stay", "First 48 hours", "Staff nurse, medical officer", "Vitals every 15 min for 2 h then 4-hourly, bleeding, breastfeeding initiation, BCG, OPV-0, hepatitis B birth dose, vitamin K, danger signs taught"],
        ["HBNC visit 1", "Day 3 (day 1 also for home deliveries)", "ASHA", "Weight, temperature, feeding, cord, jaundice, mother's bleeding and fever, referral if danger sign"],
        ["HBNC visits 2-6", "Days 7, 14, 21, 28 and 42", "ASHA", "Same checks; weight trend; exclusive breastfeeding reinforced; contraception counselling"],
        ["Facility postnatal check", "Within 24 h, day 3, day 7, 6 weeks", "ANM or medical officer", "Full examination of mother, EPDS screening, haemoglobin, blood pressure if hypertensive, OGTT if GDM, contraception, immunisation at 6 weeks"],
        ["Young child visits (HBYC)", "3, 6, 9, 12 and 15 months", "ASHA", "Growth, complementary feeding, immunisation, development"],
      ],
    },
    {
      heading: "Postpartum contraception: when each method may be started",
      columns: ["Method", "Breastfeeding woman", "Non-breastfeeding woman", "Note"],
      rows: [
        ["LAM", "From birth to 6 months while amenorrhoeic and exclusively feeding", "Not applicable", "98% effective; ends when any criterion fails"],
        ["PPIUCD (Cu 380A)", "Within 10 min of placenta, at caesarean, or within 48 h; else after 4-6 weeks", "Same", "Avoid 48 h to 4-6 weeks; check threads at 6 weeks"],
        ["Postpartum sterilisation", "Within 7 days or after 6 weeks; at caesarean", "Same", "Woman's own consent; age 22-49; one living child"],
        ["DMPA 150 mg IM 3-monthly (Antara)", "From delivery (WHO MEC 2 before 6 weeks; permitted in India)", "From delivery", "Delayed return of fertility 6-12 months"],
        ["Progestogen-only pill", "From delivery (MEC 2 before 6 weeks)", "From delivery", "Same time daily"],
        ["Centchroman 30 mg (Chhaya)", "From delivery", "From delivery", "Twice weekly 3 months then weekly; non-hormonal"],
        ["Combined oral contraceptive", "Not before 6 weeks (MEC 4); MEC 3 to 6 months", "After 21 days (42 days if VTE risk factors)", "Oestrogen reduces milk supply"],
        ["Condom", "From resumption of intercourse", "Same", "Bridge method; protects against STI"],
        ["Emergency pill (LNG 1.5 mg)", "Any time within 72 h of unprotected sex", "Same", "Safe in lactation"],
      ],
    },
  ],
  redFlags: [
    "Bleeding soaking a pad in under an hour, or fresh bleeding returning after day 7 - secondary postpartum haemorrhage; uterotonic, antibiotics, refer for evacuation.",
    "Temperature 38 degrees C or more with foul lochia and a tender uterus, or any postpartum fever with hypotension - puerperal sepsis; antibiotics within the hour, admit if unwell.",
    "Headache, visual disturbance, epigastric pain or a fit in the first week after delivery - postpartum eclampsia; magnesium sulphate loading dose and transfer.",
    "Unilateral calf swelling or pain, or breathlessness with pleuritic chest pain - venous thromboembolism; same-day imaging, start low-molecular-weight heparin if suspicion is high.",
    "Confusion, insomnia for several nights, delusions about the baby or hallucinations in the first two weeks - postpartum psychosis; never leave her alone with the baby, admit the same day.",
    "Any thought of self-harm or of harming the baby, or an EPDS score of 13 or more - same-day psychiatric assessment.",
    "Newborn not feeding, fast breathing above 60 per minute, chest indrawing, fever or hypothermia, lethargy, convulsions, jaundice of palms and soles, or umbilical pus - refer to the special newborn care unit.",
  ],
  pearls: [
    "Days 3, 7, 14, 21, 28 and 42 - six ASHA visits after an institutional delivery, seven after a home delivery with day 1 added.",
    "Four signs of attachment: chin touching the breast, mouth wide open, lower lip turned out, more areola above than below. Every sore nipple is a latch problem first.",
    "Mastitis is treated by feeding from the affected breast, not by stopping - flucloxacillin or cephalexin 500 mg 6-hourly for 10-14 days, review at 48 hours.",
    "LAM has three conditions - amenorrhoea, exclusive feeding, baby under six months - and the method ends the day any one of them ends.",
    "PPIUCD within 48 hours or after six weeks, never in between; combined pills never before six weeks in a breastfeeding woman.",
    "Blues peak on day 3-5 and are gone by two weeks; depression is an EPDS of 13 or more at six weeks; psychosis is confusion and delusions in the first fortnight and is an emergency.",
    "Sertraline is the antidepressant for a breastfeeding mother; low-molecular-weight heparin is her anticoagulant; both are compatible with continued feeding.",
    "Anti-D 300 microgram within 72 hours of delivering an Rh-positive baby is a postnatal task - it is missed most often when the baby's blood group result arrives after discharge.",
  ],
  theory: [
    {
      id: "obstetrics-postnatal-care-t1",
      paper: "IV",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "Describe the postnatal care of the mother and the newborn during the first six weeks after a normal delivery at the primary care level, including the schedule of contacts, the examination, the danger signs, support for breastfeeding and counselling for contraception.",
      openingLines: [
        "The puerperium is the period of about six weeks after delivery during which the genital organs and the maternal physiology return to the non-pregnant state and lactation is established; over half of maternal deaths and two-thirds of neonatal deaths occur in this period, most in the first week.",
        "Postnatal care in India is delivered as a 48-hour facility stay under JSSK, home-based newborn care visits by the ASHA on days 3, 7, 14, 21, 28 and 42, and facility contacts within 24 hours, at day 3, day 7 and six weeks.",
      ],
      answer: [
        {
          heading: "1. Care in the first 48 hours at the facility",
          points: [
            "Mother: pulse, blood pressure, temperature, fundal tone, lochia and bladder every 15 minutes for two hours and four-hourly thereafter; early ambulation; perineal care; analgesia; iron-folic acid and calcium continued; anti-D 300 microgram within 72 hours if Rh-negative with an Rh-positive baby.",
            "Newborn: skin-to-skin contact, breastfeeding within one hour, vitamin K 1 mg IM, BCG, OPV-0 and hepatitis B birth dose, cord left dry, no bath for 24 hours, weight recorded, examination for anomalies and danger signs.",
            "Before discharge: danger signs for mother and baby taught and repeated back; MCP card completed; JSY payment; the ASHA informed of the discharge date.",
          ],
        },
        {
          heading: "2. Schedule of postnatal contacts",
          points: [
            "HBNC visits by the ASHA on days 3, 7, 14, 21, 28 and 42 (day 1 added after a home delivery): weight, temperature, feeding, cord and skin, jaundice, mother's bleeding, fever and mood, referral of any danger sign.",
            "Facility contacts at 24 hours, day 3, day 7 and six weeks by the ANM or medical officer.",
            "At six weeks: full examination, haemoglobin, blood pressure if there was hypertension, 75 g OGTT if there was gestational diabetes, EPDS screening, contraception, and the six-week immunisations for the baby.",
          ],
        },
        {
          heading: "3. Examination of the mother and the danger signs",
          points: [
            "Temperature, pulse, blood pressure, pallor, breasts, fundal height and tenderness, lochia, perineum, calves, bladder and mood at every contact.",
            "Danger signs: heavy bleeding, fever or foul lochia, severe headache or visual disturbance or fits, breathlessness or chest pain, calf pain, red painful breast, wound infection, urinary retention, and low mood or thoughts of self-harm.",
            "Specific conditions: puerperal sepsis (fever 38 degrees C or more on two of the first ten days) - antibiotics and admission if unwell; postpartum eclampsia (up to 40% of eclampsia is postpartum) - magnesium sulphate and transfer; venous thromboembolism - same-day imaging and heparin.",
            "Mood: blues (50-80%, days 3-5, resolves in two weeks), depression (10-20%, EPDS 13 or more, sertraline if moderate or severe), psychosis (1-2 per 1000, first two weeks, emergency admission).",
          ],
        },
        {
          heading: "4. Support for breastfeeding",
          points: [
            "Initiation within one hour, exclusive breastfeeding for six months, complementary feeding from six months, breastfeeding to two years.",
            "Teach positioning (head and body in line, facing the breast, held close, whole body supported) and attachment (chin touching the breast, mouth wide open, lower lip everted, more areola above than below); feed on demand at least 8-12 times in 24 hours.",
            "Judge adequacy by six or more wet nappies a day, regain of birth weight by two weeks and gain of 500 g a month.",
            "Manage sore nipples by correcting the latch, engorgement by frequent feeding and expression, mastitis by continued feeding with flucloxacillin or cephalexin 500 mg 6-hourly for 10-14 days; explain the IMS Act and the MAA programme; teach expression and cup feeding for the working mother.",
          ],
        },
        {
          heading: "5. Newborn care at home and contraception",
          points: [
            "Newborn: exclusive breastfeeding, warmth and kangaroo care for the low-birth-weight baby, dry cord care, hand hygiene, immunisation on schedule, and the danger signs - not feeding, fast breathing, chest indrawing, fever or cold to touch, lethargy, convulsions, jaundice of palms and soles, umbilical pus.",
            "Contraception counselled antenatally and confirmed at six weeks: LAM while its three criteria hold; PPIUCD within 48 hours or an interval IUCD after six weeks; postpartum sterilisation within seven days or after six weeks; DMPA, progestogen-only pill or centchroman from delivery; combined pills not before six weeks in the breastfeeding woman; condoms from resumption of intercourse; birth spacing of at least two years.",
          ],
        },
      ],
      mustDraw: [
        "A table of the postnatal contact schedule with who provides each contact and what is done.",
        "A box listing the maternal danger signs and the newborn danger signs side by side.",
      ],
      markSplit: [
        { part: "Definition and the first 48 hours", marks: 2 },
        { part: "Schedule of contacts", marks: 1.5 },
        { part: "Examination, danger signs and complications", marks: 2.5 },
        { part: "Breastfeeding support", marks: 2 },
        { part: "Newborn home care and contraception", marks: 2 },
      ],
      keywords: ["postnatal care", "HBNC", "puerperal sepsis", "postpartum depression", "breastfeeding", "attachment", "PPIUCD", "LAM"],
    },
    {
      id: "obstetrics-postnatal-care-t2",
      paper: "IV",
      kind: "enumerate",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Enumerate the contraceptive options available to a breastfeeding woman in the postpartum period, stating when each may be started and one important caution for each.",
      openingLines: [
        "Postpartum contraception aims to achieve a birth-to-conception interval of at least 24 months; in the breastfeeding woman the method must not reduce milk supply or reach the infant in harmful amounts, and it must be in place before ovulation returns, which the lactational amenorrhoea method delays only while its criteria hold.",
        "The WHO Medical Eligibility Criteria (2015) and the Indian Reference Manual for Postpartum Family Planning govern the timing below.",
      ],
      answer: [
        {
          heading: "Non-hormonal methods",
          points: [
            "Lactational amenorrhoea method: from birth to six months, 98% effective only while she is amenorrhoeic, feeding exclusively day and night, and the baby is under six months - caution: any supplementary feed, a period, or the sixth month ends it.",
            "Postpartum IUCD (copper 380A): within 10 minutes of the placenta, at caesarean, or within 48 hours; otherwise after four to six weeks - caution: not between 48 hours and four to six weeks; expulsion 5-10% higher than interval insertion, so threads are checked at six weeks.",
            "Female sterilisation by minilaparotomy: within seven days of delivery, at caesarean, or after six weeks - caution: permanent; the woman's own written consent, age 22-49, at least one living child.",
            "Condoms: from the resumption of intercourse - caution: user-dependent, so pair with LAM and bridge to a long-acting method.",
            "Centchroman (ormeloxifene, Chhaya) 30 mg: from delivery, twice weekly for three months then weekly - caution: delayed or prolonged cycles; no effect on lactation.",
          ],
        },
        {
          heading: "Progestogen-only methods",
          points: [
            "DMPA 150 mg IM every three months (Antara): from delivery in the Indian programme (WHO MEC category 2 before six weeks) - caution: delayed return of fertility for 6-12 months and irregular bleeding.",
            "Progestogen-only pill: from delivery - caution: must be taken at the same time daily.",
            "Etonogestrel implant: from delivery where available - caution: irregular bleeding; requires a trained provider for removal.",
            "Levonorgestrel intrauterine system: within 48 hours or after four weeks - caution: cost and availability.",
          ],
        },
        {
          heading: "Combined hormonal methods and emergency contraception",
          points: [
            "Combined oral contraceptive: not before six weeks (MEC 4) and preferably not before six months (MEC 3) in the breastfeeding woman - caution: oestrogen reduces milk volume and raises thromboembolic risk in the early puerperium.",
            "Emergency contraception with levonorgestrel 1.5 mg within 72 hours (up to 120 hours) or a copper IUCD within five days: any time - caution: not a regular method.",
          ],
        },
      ],
      markSplit: [
        { part: "Non-hormonal methods with timing and caution", marks: 2.5 },
        { part: "Progestogen-only methods", marks: 1.5 },
        { part: "Combined methods and emergency contraception", marks: 1 },
      ],
      keywords: ["postpartum contraception", "LAM", "PPIUCD", "DMPA", "Chhaya", "WHO MEC", "birth spacing"],
    },
  ],
  mcqs: [
    {
      id: "obstetrics-postnatal-care-q1",
      stem: "Under the Home-Based Newborn Care scheme, on which days does the ASHA visit a mother and baby after an institutional delivery?",
      options: [
        "Days 1, 3, 7, 14, 21, 28 and 42",
        "Days 3, 7, 14, 21, 28 and 42",
        "Days 1, 2, 3 and 7",
        "Days 7, 14, 28 and 42",
        "Weekly for six weeks",
      ],
      answer: 1,
      explanation:
        "After an institutional delivery, where the first 48 hours are spent in the facility, the ASHA makes six HBNC visits on days 3, 7, 14, 21, 28 and 42; the day 1 visit is added only after a home delivery, making seven visits in that case, which is why the first option applies to home births and not to this question. The other schedules do not correspond to the programme, which was designed so that the visits cluster in the first week when most neonatal deaths occur and continue to the six-week postnatal check.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-postnatal-care-q2",
      stem: "A woman who delivered five weeks ago is exclusively breastfeeding, is amenorrhoeic and wants to rely on the lactational amenorrhoea method. Which of the following would end the protection of LAM?",
      options: [
        "The baby sleeping for four hours at night",
        "Starting the baby on water and diluted cow's milk at three months",
        "The mother returning to work but expressing milk every three hours",
        "The mother developing mastitis and continuing to feed",
        "The mother taking paracetamol for perineal pain",
      ],
      answer: 1,
      explanation:
        "LAM requires exclusive or nearly exclusive breastfeeding, amenorrhoea and an infant under six months; introducing water and cow's milk breaks exclusivity, reduces suckling, and allows ovulation to return, so protection ends. A single four-hour night interval is compatible with the method as long as feeding is otherwise frequent day and night. Expressing every three hours maintains near-exclusive lactation, and neither mastitis with continued feeding nor paracetamol affects the criteria. The method also ends at six months or with the first menstrual bleed.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-postnatal-care-q3",
      stem: "A breastfeeding mother four weeks after delivery asks for the combined oral contraceptive pill. According to the WHO Medical Eligibility Criteria, what category applies?",
      options: [
        "Category 1 - no restriction",
        "Category 2 - advantages outweigh risks",
        "Category 3 - risks usually outweigh advantages",
        "Category 4 - unacceptable health risk",
        "The pill may be used if she doubles the dose to maintain lactation",
      ],
      answer: 3,
      explanation:
        "Combined hormonal contraception is WHO MEC category 4 in the breastfeeding woman before six weeks postpartum because of the thromboembolic risk of the early puerperium and the effect of oestrogen on milk supply; it becomes category 3 from six weeks to six months and category 2 after six months. Categories 1 and 2 do not apply at four weeks, and category 3 applies only after six weeks. Doubling the dose is nonsensical and would worsen both risks. She should be offered a progestogen-only or non-hormonal method now.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-postnatal-care-q4",
      stem: "A woman three weeks postpartum has a red, hot, tender wedge of the right breast, fever of 38.8 degrees C and body ache. There is no fluctuant swelling. What is the most appropriate management?",
      options: [
        "Stop breastfeeding from the right breast and bind it firmly",
        "Continue breastfeeding from both breasts, give flucloxacillin 500 mg 6-hourly for 10-14 days and an NSAID, review in 48 hours",
        "Incision and drainage under general anaesthesia",
        "Bromocriptine to suppress lactation",
        "Topical antifungal cream and review in a week",
      ],
      answer: 1,
      explanation:
        "Lactational mastitis is treated by keeping the breast drained through continued feeding or expression from the affected side (the milk is safe for the baby), an anti-staphylococcal antibiotic such as flucloxacillin, dicloxacillin or cephalexin 500 mg 6-hourly for 10-14 days, analgesia, and review at 48 hours for a developing abscess. Stopping feeding and binding the breast causes stasis, worsens the infection and precipitates abscess formation. Incision is reserved for a fluctuant abscess, and even then ultrasound-guided aspiration is preferred. Bromocriptine is not indicated and has cardiovascular risks, and candida causes nipple pain without fever or a hot erythematous wedge.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-postnatal-care-q5",
      stem: "A woman is seen 12 days after delivery. She has not slept for three nights, is confused, believes the baby has been replaced by an evil spirit, and hears voices commanding her. What is the most appropriate action?",
      options: [
        "Reassure the family that postpartum blues resolve by two weeks",
        "Start sertraline and review in two weeks",
        "Admit the same day to a psychiatric facility, ideally with the baby under supervision, and do not leave her alone with the infant",
        "Advise the family to arrange a religious ritual and review in a week",
        "Give diazepam at night and continue breastfeeding at home",
      ],
      answer: 2,
      explanation:
        "Confusion, insomnia, delusions about the baby and command hallucinations in the first two weeks are postpartum psychosis, a psychiatric emergency with a real risk of suicide and infanticide, requiring same-day admission and continuous supervision of mother and baby; antipsychotic treatment and assessment for bipolar disorder follow. Blues never include psychotic features and are already past their usual window. Sertraline with a two-week review treats depression, not psychosis, and leaves her unsupervised. Deferring to a ritual delays care during the period of maximum danger, and a sedative at home addresses none of the risk.",
      difficulty: "easy",
    },
    {
      id: "obstetrics-postnatal-care-q6",
      stem: "A woman who delivered vaginally 5 days ago requests an intrauterine device before she goes home to her village. What is the correct advice?",
      options: [
        "Insert a copper IUCD now, since she is within the first week",
        "Insertion is deferred until 6 weeks because the risk of expulsion and perforation is higher between 48 hours and 4-6 weeks; offer an interim method",
        "An IUCD is contraindicated in breastfeeding women",
        "Insert the IUCD only after her first menstrual period",
        "Give DMPA now and never insert an IUCD after a vaginal delivery",
      ],
      answer: 1,
      explanation:
        "The post-placental and immediate postpartum windows for IUCD insertion close at 48 hours; between 48 hours and four to six weeks the involuting uterus carries a higher risk of expulsion and perforation (WHO MEC category 3), so insertion is deferred to the six-week visit and a bridge method such as condoms, progestogen-only pill or DMPA is provided. Breastfeeding is not a contraindication to a copper IUCD - it is in fact an ideal method for the lactating woman. Waiting for menstruation is unnecessary and risks a pregnancy before the first period, and the IUCD is entirely appropriate after vaginal delivery once the window is right.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "obstetrics-postnatal-care-c1",
      front: "HBNC visit schedule after institutional and home delivery.",
      back: "Institutional: days 3, 7, 14, 21, 28 and 42 (six visits). Home delivery: day 1 added (seven visits). HBYC follows at 3, 6, 9, 12 and 15 months.",
    },
    {
      id: "obstetrics-postnatal-care-c2",
      front: "Definition of puerperal sepsis.",
      back: "Temperature of 38 degrees C or more on any two of the first ten days after delivery, excluding the first 24 hours, usually with foul lochia and a tender uterus.",
    },
    {
      id: "obstetrics-postnatal-care-c3",
      front: "Four signs of good attachment at the breast.",
      back: "Chin touching the breast, mouth wide open, lower lip turned outward, more areola visible above the upper lip than below.",
    },
    {
      id: "obstetrics-postnatal-care-c4",
      front: "How is adequacy of breastfeeding judged?",
      back: "Six or more wet nappies a day after day 4, regaining birth weight by two weeks, and gaining at least 500 g a month in the first six months.",
    },
    {
      id: "obstetrics-postnatal-care-c5",
      front: "Treatment of lactational mastitis.",
      back: "Continue feeding from the affected breast; flucloxacillin, dicloxacillin or cephalexin 500 mg every 6 hours for 10-14 days; NSAID; review at 48 hours; aspirate or drain if an abscess forms.",
    },
    {
      id: "obstetrics-postnatal-care-c6",
      front: "The three criteria of the lactational amenorrhoea method and its efficacy.",
      back: "Amenorrhoea, exclusive or nearly exclusive breastfeeding day and night, infant under six months; 98% effective while all three hold.",
    },
    {
      id: "obstetrics-postnatal-care-c7",
      front: "Timing windows for PPIUCD insertion.",
      back: "Within 10 minutes of placental delivery, during caesarean, or within 48 hours of birth; not between 48 hours and 4-6 weeks; interval insertion thereafter.",
    },
    {
      id: "obstetrics-postnatal-care-c8",
      front: "Blues, depression and psychosis after delivery: frequency, onset and key feature.",
      back: "Blues 50-80%, day 3-5, resolve by 2 weeks. Depression 10-20%, EPDS 13 or more, sertraline if moderate or severe. Psychosis 1-2 per 1000, first 2 weeks, confusion and delusions - emergency admission.",
    },
    {
      id: "obstetrics-postnatal-care-c9",
      front: "Combined oral contraceptive in the postpartum period by WHO MEC.",
      back: "Breastfeeding: category 4 before 6 weeks, 3 from 6 weeks to 6 months, 2 thereafter. Not breastfeeding: category 3 before 21 days (4 with VTE risk factors), then 2.",
    },
    {
      id: "obstetrics-postnatal-care-c10",
      front: "Dose schedule of centchroman (Chhaya) and DMPA (Antara).",
      back: "Centchroman 30 mg twice weekly for 3 months then once weekly, non-hormonal, safe in lactation. DMPA 150 mg IM every 3 months, can start from delivery.",
    },
  ],
  references: [
    "Guidelines for Antenatal Care and Skilled Attendance at Birth by ANMs, LHVs and Staff Nurses - postnatal care section, MoHFW, Government of India",
    "Home Based Newborn Care Operational Guidelines, MoHFW, revised 2014, and Home Based Care for Young Child guidelines, 2018",
    "Reference Manual for Postpartum Family Planning, Family Planning Division, MoHFW, 2016",
    "WHO Medical Eligibility Criteria for Contraceptive Use, 5th edition, 2015",
    "WHO Recommendations on Maternal and Newborn Care for a Positive Postnatal Experience, 2022",
    "Mothers' Absolute Affection (MAA) Programme operational guidelines, MoHFW, 2016; Infant Milk Substitutes, Feeding Bottles and Infant Foods Act 1992, amended 2003",
    "Williams Obstetrics, 26th edition, 2022 - the puerperium and contraception",
    "DC Dutta's Textbook of Obstetrics, 9th edition, 2018 - normal and abnormal puerperium",
  ],
});

const cases: ClinicalCase[] = [
  {
    id: "obstetrics-case-1",
    title: "Antenatal woman at 33 weeks with moderate anaemia and pre-eclampsia",
    kind: "long",
    subjectId: "obstetrics",
    opening:
      "A 24-year-old primigravida at 33 weeks and 2 days by a first-trimester scan, registered at 22 weeks, presents to the antenatal clinic with easy fatiguability and breathlessness on climbing one flight of stairs for 6 weeks and swelling of both feet for 2 weeks; her haemoglobin is 8.2 g/dL and her blood pressure 150/96 mmHg with 2+ proteinuria on dipstick.",
    minutes: 30,
    frequency: "core",
    sections: [
      {
        heading: "How to open the presentation",
        points: [
          "Give the identifying data, the gestational age with the method of dating, the gravidity and parity, and the presenting complaints in the order the woman gave them, each with its duration, before any detail - the first thirty seconds tell the examiner whether you have a picture of the case or a pile of facts.",
          "Say: 'Mrs X, a 24-year-old homemaker from a village 30 km from the district hospital, primigravida at 33 weeks and 2 days by a 9-week scan, registered late at 22 weeks, presents with easy fatiguability and breathlessness on moderate exertion for 6 weeks and bilateral pedal swelling for 2 weeks, and was found at this visit to have a haemoglobin of 8.2 g/dL and a blood pressure of 150/96 mmHg with 2+ proteinuria.'",
          "Add the negatives that matter at once: no headache, no blurring of vision, no epigastric pain, no vomiting, no reduced fetal movements, no bleeding or leaking per vaginum, no orthopnoea, no palpitations and no fever.",
          "State the current treatment honestly, because it changes the plan: one iron-folic acid tablet daily since 22 weeks taken on perhaps half the days because of nausea, calcium 500 mg twice daily, two doses of Td, and no antihypertensive.",
        ],
      },
      {
        heading: "History of the present pregnancy",
        points: [
          "Date the pregnancy properly: the first day of the last menstrual period, the regularity of cycles, contraceptive use before conception, and the crown-rump length on the first scan, stating that the scan date is used when it differs from the menstrual date by more than 7 days.",
          "Describe the antenatal care she has actually received - the number of visits, whether the MCP card has weights and blood pressures at each, what investigations were done at registration and their results, and whether she was seen on a PMSMA day by a specialist.",
          "Take the trimester-wise history: hyperemesis, bleeding or fever in the first trimester, the timing of quickening, the anomaly scan at 18-20 weeks, the DIPSI glucose test at 24-28 weeks and its value, and the pattern of weight gain.",
          "Ask when the blood pressure was last known to be normal, because a normal reading recorded at 22 weeks is what separates pre-eclampsia from chronic hypertension when there is no pre-pregnancy record.",
          "Cover fetal wellbeing in the mother's own terms: the daily pattern of fetal movements, any day on which movements seemed fewer, and whether she has been taught to count them.",
        ],
      },
      {
        heading: "History directed at the anaemia",
        points: [
          "Characterise the symptoms and their functional impact: fatigue, breathlessness graded by the activity that provokes it, palpitations, giddiness on standing, and whether she can still do her household work - decompensation is a clinical diagnosis and this is where it begins.",
          "Look for the cause of iron deficiency: a diet of rice or chapati with little pulses or green leafy vegetables, tea with meals, pica for mud or raw rice, heavy menstrual bleeding before conception, previous anaemia, hookworm exposure from walking barefoot, and any history of malaria.",
          "Ask about iron intake as it really happened: the number of tablets in the strip that are actually gone, gastric upset or black stools, the reason for stopping, and whether any injectable iron or transfusion has ever been given.",
          "Enquire about features that point away from simple iron deficiency - jaundice, a family history of anaemia or thalassaemia, consanguinity, a previous child with anaemia, bleeding gums, glossitis or paraesthesiae suggesting folate or B12 deficiency, and chronic cough or fever suggesting tuberculosis.",
          "Ask about the previous obstetric outcome, or in a primigravida the reproductive plans, because the interval to the next pregnancy is the main determinant of whether iron stores will ever be rebuilt.",
        ],
      },
      {
        heading: "History directed at the hypertension",
        points: [
          "Ask specifically for the symptoms of severe pre-eclampsia in the order they are dangerous: persistent frontal or occipital headache not relieved by rest, blurring of vision or flashes of light, epigastric or right hypochondrial pain, vomiting, breathlessness at rest, and a fall in urine output.",
          "Establish the onset and progression of the oedema - feet only, or also the face and fingers on waking, and whether rings have become tight - while stating that oedema itself is no longer a diagnostic criterion.",
          "Search for risk factors: first pregnancy, family history of pre-eclampsia in the mother or sister, chronic hypertension, renal disease, diabetes, obesity, a pregnancy interval over 10 years, multiple pregnancy, and an autoimmune disorder.",
          "Ask about renal or urinary symptoms - dysuria, frequency, flank pain and previous urinary infection - because a urinary tract infection is the commonest reason for a false-positive proteinuria in the clinic.",
          "Record any drugs taken for the swelling from a chemist, especially diuretics or non-steroidal analgesics, and whether she was ever advised aspirin or additional calcium.",
        ],
      },
      {
        heading: "Past, menstrual, family and socio-economic history",
        points: [
          "Past history of hypertension, renal disease, diabetes, tuberculosis, rheumatic fever, blood transfusion and any surgery, and the menstrual history with the age at menarche and the cycle before conception.",
          "Family history of hypertension, pre-eclampsia, diabetes, thalassaemia and twins, and whether the parents or siblings are known to have early cardiovascular disease.",
          "Socio-economic history in usable terms: the husband's occupation and income, the family's food security, the distance and transport to the nearest facility with blood and an operating theatre, and who will decide about admission when it is advised.",
          "Ask what she and the family believe about the swelling and the tiredness, and whether they expect a home delivery, because the birth plan you propose has to fit the family that will carry it out.",
        ],
      },
      {
        heading: "General and systemic examination to demonstrate",
        points: [
          "General survey: build and nutrition with height, pre-pregnancy and present weight, pallor graded in the lower palpebral conjunctiva, tongue and nail beds, koilonychia, glossitis, angular stomatitis, icterus, pedal and sacral oedema, and facial puffiness.",
          "Vitals with the technique stated: pulse rate and volume, blood pressure in the sitting position with the arm at heart level using an appropriately sized cuff and Korotkoff V for the diastolic, repeated after 4 hours to satisfy the definition, respiratory rate and temperature.",
          "Cardiovascular examination for the signs of decompensated anaemia and the signs that exclude it: the jugular venous pressure, a hyperdynamic apex, a soft ejection systolic flow murmur, a third heart sound, basal crepitations and tender hepatomegaly.",
          "Fundus examination for the retinal arteriolar narrowing, haemorrhages and papilloedema of severe hypertension, and for the silver wiring and arteriovenous nipping that would point to chronic disease.",
          "Deep tendon reflexes at the knee and the ankle for hyperreflexia and clonus, and a check for epigastric and right hypochondrial tenderness, stating that these are the signs of imminent eclampsia.",
          "Urine examination at the bedside: a dipstick for protein on a clean-catch midstream sample, repeated on a second sample, with the result reported as the number of pluses and the specific gravity.",
        ],
      },
      {
        heading: "Obstetric examination and fetal assessment",
        points: [
          "Inspect the abdomen for the shape of the uterus, striae, the linea nigra, scars and fetal movements, then measure the symphysis-fundal height with the tape reversed - here 30 cm at 33 weeks, a lag of 3 cm that must be reported and interpreted.",
          "Perform the Leopold manoeuvres in order - fundal grip, lateral grips, Pawlik's grip and the pelvic grip - and report a singleton fetus in longitudinal lie, cephalic presentation with the back on the left, head not engaged, with an estimated fetal weight and a clinically normal or reduced liquor volume.",
          "Auscultate the fetal heart with a fetoscope or Doppler for a full minute at the anterior shoulder and report the rate and regularity, stating the normal range of 110-160 per minute.",
          "State that a vaginal examination is not indicated at this visit in a woman who is not in labour and has no bleeding, and that a speculum examination would only be needed if she reported leaking.",
          "Close the examination with the assessment of the pelvis deferred to term, the breasts examined for inverted nipples with antenatal breastfeeding counselling in mind, and the plan for a growth scan with Doppler stated before the examiner asks for it.",
        ],
      },
    ],
    summaryStatement:
      "This is a 24-year-old primigravida at 33 weeks and 2 days of gestation, registered late, with a singleton live fetus in cephalic presentation, who has moderate anaemia of pregnancy with a haemoglobin of 8.2 g/dL, most probably from iron deficiency, on irregular oral iron and without cardiac decompensation, together with new-onset hypertension after 20 weeks with significant proteinuria consistent with pre-eclampsia without severe features at present, and a symphysis-fundal height lagging by 3 cm that raises the possibility of fetal growth restriction; she is a high-risk pregnancy needing admission, intravenous iron, oral antihypertensive therapy, antenatal corticosteroids, fetal surveillance and a planned delivery at a first referral unit with blood available.",
    differential: [
      {
        diagnosis: "Pre-eclampsia without severe features complicating moderate iron deficiency anaemia",
        forIt:
          "Primigravida, blood pressure of 150/96 mmHg first recorded after 20 weeks with a normal reading at 22 weeks, 2+ proteinuria on two samples, fresh oedema of feet and face, and a microcytic hypochromic anaemia with a low ferritin in a woman on erratic oral iron.",
        againstIt:
          "Nothing clinically against it; severe features are absent only until the platelet count, transaminases and creatinine are seen, and the diagnosis must be reviewed at every visit because it progresses.",
      },
      {
        diagnosis: "Chronic hypertension with superimposed pre-eclampsia",
        forIt:
          "Late registration means there is no first-trimester blood pressure, and chronic hypertension is frequently unmasked for the first time in pregnancy.",
        againstIt:
          "A documented blood pressure of 110/70 mmHg at 22 weeks, no family history of early hypertension, no retinal changes of chronic disease and no left ventricular hypertrophy on examination; a persistently raised blood pressure beyond 12 weeks postpartum would reopen the question.",
      },
      {
        diagnosis: "Anaemia from a cause other than iron deficiency - dimorphic anaemia, thalassaemia trait or hookworm and malaria in an endemic area",
        forIt:
          "A predominantly cereal diet with little animal protein and green vegetables can produce combined iron and folate deficiency, and a microcytic anaemia that does not respond to iron in an Indian woman is thalassaemia trait until proved otherwise.",
        againstIt:
          "No jaundice, no splenomegaly, no family history of anaemia or consanguinity, a red cell distribution width above 15% and a Mentzer index above 13 favour iron deficiency; a ferritin below 30 microgram/L confirms it, and HbA2 electrophoresis is reserved for the woman whose indices do not fit.",
      },
      {
        diagnosis: "Heart disease in pregnancy - rheumatic mitral stenosis or peripartum cardiomyopathy - as the cause of the breathlessness and oedema",
        forIt:
          "Exertional breathlessness and bilateral pedal oedema in the third trimester, and rheumatic heart disease remains a leading cause of maternal death from indirect causes in India.",
        againstIt:
          "No orthopnoea or paroxysmal nocturnal dyspnoea, a normal jugular venous pressure, a soft ejection systolic flow murmur without a diastolic murmur or a loud first heart sound, no third heart sound and clear lung bases; an echocardiogram is warranted only if any of these appear.",
      },
    ],
    investigations: [
      {
        test: "Haemoglobin, complete blood count with red cell indices, red cell distribution width, reticulocyte count and peripheral smear",
        why: "To grade the anaemia, to characterise it as microcytic hypochromic and to obtain the platelet count that the pre-eclampsia work-up also needs in the same sample.",
        expected: "Haemoglobin 8.2 g/dL, MCV below 80 fL, MCH below 27 pg, RDW above 15%, a smear with microcytosis, hypochromia and pencil cells, and a platelet count above 150,000/microlitre.",
      },
      {
        test: "Serum ferritin, with HbA2 electrophoresis if the Mentzer index is below 13",
        why: "Ferritin is the most specific single test of iron stores and settles the choice of intravenous iron; electrophoresis is needed only when the indices suggest thalassaemia trait, because iron given to a thalassaemic woman with full stores does harm.",
        expected: "Ferritin below 30 microgram/L, and below 15 microgram/L in most such women; the value is falsely raised by infection or inflammation, so interpret it with the C-reactive protein.",
      },
      {
        test: "Urine protein-creatinine ratio on a spot sample or a 24-hour urinary protein, with urine microscopy and culture",
        why: "To convert the dipstick into a quantified proteinuria that satisfies the definition of pre-eclampsia, and to exclude a urinary infection as the cause of the protein.",
        expected: "A protein-creatinine ratio of 0.3 or more, equivalent to 300 mg or more of protein in 24 hours, with a sterile culture and no pus cells.",
      },
      {
        test: "Platelet count, AST and ALT, serum creatinine, serum uric acid, LDH and serum bilirubin",
        why: "To look for the laboratory severe features and for HELLP syndrome, which may be present before any symptom, and to obtain a baseline for the twice-weekly monitoring that follows.",
        expected: "Platelets above 100,000/microlitre, transaminases below twice the upper limit, creatinine below 1.1 mg/dL and a uric acid that is often raised above 5.5 mg/dL; any severe value changes the diagnosis and the timing of delivery.",
      },
      {
        test: "Obstetric ultrasound with fetal biometry, estimated fetal weight, amniotic fluid index, placental localisation and umbilical artery Doppler",
        why: "The 3 cm lag in fundal height in a woman with pre-eclampsia demands an objective assessment for fetal growth restriction and placental insufficiency.",
        expected: "An estimated fetal weight below the 10th centile with a raised umbilical artery pulsatility index or absent end-diastolic flow would establish growth restriction and bring delivery forward; normal biometry and a normal Doppler allow expectant management to 37 weeks.",
      },
      {
        test: "Non-stress test by cardiotocography, repeated twice weekly",
        why: "To document fetal wellbeing now and to follow it during expectant management, with a daily fetal movement count between tests.",
        expected: "A reactive trace - a baseline of 110-160 per minute with at least two accelerations of 15 beats lasting 15 seconds in 20 minutes - and no decelerations.",
      },
      {
        test: "Blood grouping and Rh typing, cross-matching of two units of packed red cells, and the HIV, HBsAg and VDRL tests if not already recorded on the MCP card",
        why: "A woman with anaemia and pre-eclampsia is at high risk of abruption and postpartum haemorrhage and tolerates blood loss badly; blood must be arranged before delivery, not after it starts.",
        expected: "Group and cross-match ready at the facility of planned delivery; the infection screen is usually negative but a positive result changes the delivery plan and the newborn's care.",
      },
      {
        test: "Stool examination for hookworm ova, a malaria rapid test where endemic, and the DIPSI 75 g glucose test if it was not done at 24-28 weeks",
        why: "To find the treatable causes of blood loss and haemolysis behind the anaemia, and to complete the screening that late registration may have missed.",
        expected: "Hookworm ova in a barefoot rural woman, a negative malaria test, and a 2-hour plasma glucose below 140 mg/dL; a value of 140 mg/dL or more would add gestational diabetes to the problem list.",
      },
    ],
    management: [
      {
        heading: "Immediate decisions at the table",
        points: [
          "**Admit her** - moderate anaemia beyond 12 weeks and pre-eclampsia at 33 weeks are each an indication for care at a first referral unit or district hospital, and together they place her firmly in the high-risk register on the MCP card.",
          "Four-hourly blood pressure, daily weight and urine protein, a symptom check for headache, visual disturbance and epigastric pain at every round, a daily fetal movement count, and twice-weekly platelets, transaminases and creatinine.",
          "Give **antenatal corticosteroids now** - betamethasone 12 mg intramuscularly, two doses 24 hours apart, or dexamethasone 6 mg intramuscularly 12-hourly for four doses - because she is between 24 and 34 weeks and may need delivery within days.",
          "Explain to the woman and her husband in plain words that the pregnancy is now high-risk, that delivery will be planned in hospital at or before 37 weeks, and that she should report a headache, blurring of vision, pain under the ribs or reduced fetal movements immediately, at any hour.",
        ],
      },
      {
        heading: "Controlling the blood pressure",
        points: [
          "Treat because the blood pressure is 140/90 mmHg or more, aiming for 135/85 mmHg: **oral labetalol 100 mg twice daily**, increased every 2-3 days to a maximum of 800 mg three times daily, or **nifedipine retard 10-20 mg twice or three times daily** to a maximum of 120 mg per day; methyldopa 250 mg three times daily is the third option and is stopped after delivery.",
          "If the blood pressure reaches **160/110 mmHg or more, treat within 30-60 minutes**: nifedipine immediate-release 10 mg orally, repeated every 20-30 minutes for up to 3-5 doses, or labetalol 20 mg intravenously over 2 minutes, then 40 mg after 10 minutes, then 80 mg every 10 minutes to a cumulative maximum of 300 mg, or hydralazine 5 mg intravenously over 5 minutes repeated every 20 minutes to 20-30 mg.",
          "Severe hypertension, or any severe feature, is also the indication for **magnesium sulphate by the Pritchard regimen** - 4 g of 20% solution intravenously over 5 minutes plus 10 g of 50% solution deep intramuscularly, then 5 g intramuscularly 4-hourly - with calcium gluconate 1 g at the bedside.",
          "**Never give nifedipine sublingually** and never give ergometrine to this woman at delivery; angiotensin-converting enzyme inhibitors, angiotensin receptor blockers, atenolol and diuretics have no place in her treatment.",
          "Aspirin is not started now - its role is prevention from 12-16 weeks - but it is written into the plan for her next pregnancy; calcium 500 mg twice daily continues, taken at a different time from the iron.",
        ],
      },
      {
        heading: "Correcting the anaemia",
        points: [
          "Moderate anaemia at 33 weeks is an indication for **intravenous iron, not another prescription of tablets**: there are not enough weeks left for oral iron to rebuild the haemoglobin before delivery.",
          "Calculate the deficit: iron deficit (mg) = 2.4 x body weight (kg) x (target haemoglobin - actual haemoglobin) + 500 mg for stores; for her 52 kg and a target of 11 g/dL this is 2.4 x 52 x 2.8 + 500, about 850 mg, rounded to 1000 mg.",
          "Give **iron sucrose 200 mg in 100 mL normal saline over 15-30 minutes on alternate days, five infusions, not exceeding 600 mg in a week**, with the woman observed for 30 minutes after each dose and adrenaline 0.5 mg intramuscular available; or **ferric carboxymaltose 1000 mg in 250 mL normal saline over 15-30 minutes as a single infusion** if she cannot come back repeatedly.",
          "Give albendazole 400 mg as a single dose if it has not been given this pregnancy, treat malaria if the test is positive, and continue folic acid; once the intravenous course is complete, restart one IFA tablet daily and continue it for 180 days after delivery.",
          "Recheck the haemoglobin 2 weeks after the last infusion expecting a rise of at least 1 g/dL; transfusion of packed cells is reserved for a haemoglobin below 7 g/dL after 34 weeks, below 5 g/dL at any gestation, or any decompensation, given slowly with furosemide 20 mg intravenously between units.",
        ],
      },
      {
        heading: "Fetal surveillance and the timing of delivery",
        points: [
          "Daily fetal movement counting, a non-stress test twice weekly, and a growth scan with umbilical artery Doppler every 2 weeks, or weekly if the estimated fetal weight is below the 10th centile.",
          "**Deliver at 37 weeks if she remains without severe features**; deliver at 34 weeks or immediately, after stabilisation, if severe features develop, if there is growth restriction with absent or reversed end-diastolic flow, eclampsia, HELLP, abruption or a non-reassuring fetal status.",
          "Plan an induced vaginal delivery with cervical ripening; caesarean section is for obstetric indications only, and a woman with a haemoglobin under 10 g/dL who needs surgery should have blood cross-matched and available in the theatre.",
          "In labour: continuous or half-hourly fetal heart monitoring, blood pressure hourly, magnesium sulphate if severe features are present, restricted intravenous fluids at 80 mL per hour to avoid pulmonary oedema, a shortened second stage if the pressure is uncontrolled, and **active management of the third stage with oxytocin 10 units intramuscularly - not ergometrine.**",
          "Keep two units of packed cells ready, treat the third stage as the moment of highest risk in an anaemic heart, and manage any postpartum haemorrhage aggressively and early because she has no reserve.",
        ],
      },
      {
        heading: "Postpartum care, contraception and the next pregnancy",
        points: [
          "Continue magnesium sulphate for 24 hours after delivery if it was started, check the blood pressure 4-hourly for 72 hours and again at day 7-10, and continue labetalol or nifedipine, both compatible with breastfeeding, tapering as the pressure settles over the following weeks.",
          "Continue one IFA tablet daily for 180 days postpartum, recheck the haemoglobin at 6 weeks, and treat the whole household under Anemia Mukt Bharat, screening the adolescent sisters and the mother-in-law who cooks.",
          "Contraception must respect the hypertension: a postpartum intrauterine device within 48 hours or at 6 weeks, or a progestogen-only method, with the combined pill avoided while the blood pressure remains raised (WHO MEC category 3 or 4) and delayed anyway until 6 months in a breastfeeding woman.",
          "Counsel on the 15-20% recurrence risk of pre-eclampsia, the need for aspirin 75-150 mg at night from 12-16 weeks in the next pregnancy, a birth interval of at least 2 years with iron stores rebuilt first, and the lifelong doubling of cardiovascular risk that warrants an annual blood pressure, glucose and lipid check.",
          "Complete the MCP card, the discharge summary and the ASHA's home visit schedule, and fix the date of the 6-week postnatal visit before she leaves.",
        ],
      },
    ],
    viva: [
      {
        q: "Why do you call this a high-risk pregnancy, and where should she deliver?",
        a: "She has two conditions that each raise maternal mortality - pre-eclampsia and moderate anaemia - and they compound each other: anaemia leaves no reserve for the haemorrhage that hypertensive disease and abruption make more likely, and a stiff hypertensive circulation tolerates transfusion poorly. She must deliver at a first referral unit with blood, a caesarean facility and magnesium sulphate, and the referral must be made now, while she is stable, under JSSK transport.",
      },
      {
        q: "Why intravenous iron rather than oral tablets, and how do you calculate the dose?",
        a: "Oral iron raises haemoglobin by about 1 g/dL every 2-3 weeks at best, and she has taken it unreliably; at 33 weeks with a haemoglobin of 8.2 g/dL there is not enough time before delivery. Iron deficit in mg = 2.4 x weight in kg x (target Hb - actual Hb) + 500 mg for stores, which for 52 kg and a target of 11 g/dL is about 850 mg, given as 1000 mg of iron sucrose in five infusions of 200 mg on alternate days, or as a single 1000 mg ferric carboxymaltose infusion.",
      },
      {
        q: "What are the severe features of pre-eclampsia, and what changes if she develops one?",
        a: "Systolic 160 mmHg or more or diastolic 110 mmHg or more, platelets below 100,000/microlitre, transaminases twice normal, creatinine above 1.1 mg/dL, pulmonary oedema, or new cerebral or visual symptoms. Any one of them means magnesium sulphate for seizure prophylaxis, urgent control of blood pressure within 30-60 minutes, and delivery at 34 weeks or immediately after stabilisation instead of waiting for 37 weeks.",
      },
      {
        q: "Which antihypertensives are safe in pregnancy, and which are contraindicated?",
        a: "Labetalol, nifedipine and methyldopa are the oral drugs, with intravenous labetalol and hydralazine for severe hypertension. Angiotensin-converting enzyme inhibitors and angiotensin receptor blockers are contraindicated because of fetal renal failure, oligohydramnios and skull hypoplasia; atenolol causes growth restriction, and diuretics deplete an already contracted plasma volume and are reserved for pulmonary oedema.",
      },
      {
        q: "Why must ergometrine be avoided in the third stage for this woman?",
        a: "Ergometrine is an alpha-agonist that causes intense vasoconstriction and a sudden rise in blood pressure, which in a pre-eclamptic woman can precipitate a hypertensive crisis, eclampsia, stroke or pulmonary oedema. Oxytocin 10 units intramuscularly is the uterotonic of choice, with misoprostol 600 microgram orally as the alternative where oxytocin is unavailable.",
      },
      {
        q: "When will you deliver her and why not now?",
        a: "At 37 weeks if she remains without severe features, because the fetus gains lung maturity and weight for every week beyond 33, while the risk to the mother is controllable with surveillance. Delivery is brought forward to 34 weeks or immediately for severe features, uncontrolled hypertension, HELLP, eclampsia, abruption, growth restriction with abnormal Doppler, or a non-reassuring fetal heart; the corticosteroids given today are the insurance for that possibility.",
      },
      {
        q: "At which moments is an anaemic woman in greatest danger, and why?",
        a: "The second stage, the third stage and the first postpartum day. Each contraction and the emptying of the uterus after delivery return 300-500 mL of blood into a circulation whose heart is already working at high output to compensate for low oxygen carriage, so a woman who has coped for months can go into failure within minutes of delivery; hence the shortened second stage, restricted fluids, slow transfusion with a diuretic and close observation for 24 hours.",
      },
      {
        q: "What will you tell her about the next pregnancy and about her own future health?",
        a: "Pre-eclampsia recurs in 15-20% of subsequent pregnancies, so she needs early registration, aspirin 75-150 mg at night from 12-16 weeks until 36 weeks, calcium, and a haemoglobin corrected before conception with a birth interval of at least 2 years. Her own risk of hypertension, ischaemic heart disease and stroke is doubled for life, so she should have her blood pressure, glucose and lipids checked every year - a task the family physician, not the obstetrician, will carry out.",
      },
    ],
    pitfalls: [
      "Writing another prescription of IFA tablets for a haemoglobin of 8.2 g/dL at 33 weeks: moderate anaemia beyond 12 weeks, and any anaemia after 30 weeks, is an indication for intravenous iron.",
      "Calling the dipstick proteinuria 'significant' without quantifying it or excluding urinary infection, or in the other direction dismissing the case as gestational hypertension without checking the urine at all.",
      "Attributing the breathlessness and oedema to pregnancy without examining the jugular venous pressure, the lung bases and the heart sounds - the examiner is waiting to hear that decompensation has been excluded.",
      "Ignoring the 3 cm fundal height lag; a pre-eclamptic placenta produces growth restriction, and a growth scan with Doppler is part of the initial work-up, not an afterthought.",
      "Giving nifedipine sublingually for a high reading, or allowing ergometrine to be given in the third stage because the delivery room routine uses it.",
      "Forgetting antenatal corticosteroids at 33 weeks, or conversely delaying an indicated delivery to complete the steroid course in a woman who is deteriorating.",
    ],
    references: [
      "Anemia Mukt Bharat Operational Guidelines, MoHFW, Government of India, 2018",
      "FOGSI General Clinical Practice Recommendations on Management of Iron Deficiency Anaemia in Pregnancy, 2016",
      "FOGSI-ICOG Good Clinical Practice Recommendations on Pre-eclampsia and Eclampsia, 2019",
      "ACOG Practice Bulletin 222: Gestational Hypertension and Preeclampsia, 2020",
      "Maternal Health Division, MoHFW - Guidelines for Management of Pregnancy Induced Hypertension including Eclampsia",
      "Guidelines for Antenatal Care and Skilled Attendance at Birth by ANMs, LHVs and Staff Nurses, MoHFW, Government of India",
      "Williams Obstetrics, 26th edition, 2022 - hypertensive disorders and haematological disorders",
      "DC Dutta's Textbook of Obstetrics, 9th edition, 2018 - anaemia in pregnancy and hypertensive disorders",
    ],
  },
  {
    id: "obstetrics-case-2",
    title: "OSCE: magnesium sulphate for severe pre-eclampsia - regimen, monitoring and antidote",
    kind: "osce",
    subjectId: "obstetrics",
    opening:
      "A 28-year-old G2P1 at 35 weeks is brought to a primary health centre with a blood pressure of 170/112 mmHg, a severe headache and blurring of vision for 3 hours; the station asks you to prescribe and prepare magnesium sulphate, state what you will monitor, and tell the nurse when to withhold a dose and what to give if toxicity occurs.",
    minutes: 10,
    frequency: "core",
    sections: [
      {
        heading: "Reading the station and the first sixty seconds",
        points: [
          "State the diagnosis aloud before touching a vial: a blood pressure of 170/112 mmHg with headache and visual symptoms after 20 weeks is pre-eclampsia with severe features - imminent eclampsia - and the indication for magnesium sulphate is seizure prophylaxis, not treatment of a fit that has already happened.",
          "Call for help, place the woman in the left lateral position on a bed with raised sides, secure an 18-gauge intravenous line, send blood for platelets, transaminases and creatinine, catheterise the bladder for an hourly urine chart, and dipstick the first urine for protein.",
          "Tell the examiner that severe hypertension must be treated within 30-60 minutes alongside the magnesium, that a fetal heart rate is recorded, and that the referral ambulance is called at this point, because the loading dose is given here and the delivery happens at the first referral unit.",
          "Check the vial: in India magnesium sulphate is supplied as a 50% solution, 1 g in 2 mL, in 2 mL ampoules or 10 mL vials, and say so - the whole station turns on converting grams to millilitres correctly.",
        ],
      },
      {
        heading: "Preparing and giving the Pritchard loading dose",
        points: [
          "The intravenous part: 4 g of a 20% solution over 5 minutes - draw 8 mL of the 50% solution (4 g) and add 12 mL of sterile water or normal saline to make 20 mL of 20%, and inject it slowly over not less than 5 minutes while talking to the woman and watching her breathing.",
          "The intramuscular part: 10 g of the 50% solution - 20 mL - given as 5 g (10 mL) deep into the upper outer quadrant of each buttock with 1 mL of 2% lignocaine drawn into the same syringe, using a long 21-gauge needle, after aspirating to avoid a vessel.",
          "State the total loading dose as 14 g - 4 g intravenous plus 10 g intramuscular - and record the time of each injection on the case sheet, because the first maintenance dose is due 4 hours from the intramuscular loading dose.",
          "Explain the alternative in one sentence: the Zuspan regimen is 4 g of 20% intravenously over 15-20 minutes followed by an infusion of 1 g per hour, which needs an infusion pump and is therefore the hospital regimen, not the primary health centre one.",
        ],
      },
      {
        heading: "The maintenance dose and the three-point check before every dose",
        points: [
          "Maintenance is 5 g of the 50% solution - 10 mL - deep intramuscularly into alternate buttocks every 4 hours, continued for 24 hours after delivery or after the last convulsion, whichever is later.",
          "Before each dose three things must be present: a respiratory rate of at least 16 per minute, a urine output of at least 30 mL per hour or 100 mL in the previous 4 hours, and a patellar reflex that can be elicited; if any one is absent the dose is withheld and the doctor is called.",
          "Between doses the nurse records the blood pressure every 15 minutes until it is below 160/110 mmHg and then every 30 minutes, the respiratory rate and oxygen saturation hourly, the urine output hourly on the catheter chart, the patellar reflex 4-hourly, and the fetal heart every 30 minutes.",
          "Say that magnesium is excreted by the kidney, so in a woman with oliguria or a creatinine above 1.1 mg/dL the maintenance dose is halved or omitted and a serum magnesium level is sent where the laboratory can do it.",
        ],
      },
      {
        heading: "Recognising toxicity and giving the antidote",
        points: [
          "Toxicity follows the serum level in order: the therapeutic range is 4-7 mEq/L, the patellar reflex disappears at 8-10 mEq/L, respiratory depression appears at about 12 mEq/L and cardiac arrest occurs above 25-30 mEq/L - which is why the reflex is checked before each dose and not after it.",
          "Loss of the patellar reflex is the earliest sign and is the reason to withhold the next dose; a respiratory rate below 16, slurred speech, drowsiness, flushing, double vision or a falling oxygen saturation mean the antidote is given at once.",
          "The antidote is calcium gluconate 1 g - 10 mL of a 10% solution - intravenously over 10 minutes, repeated if needed, with the airway supported and the woman ventilated with a bag and mask until she breathes adequately.",
          "Show the examiner that the ampoule of calcium gluconate, a 10 mL syringe and a bag-valve-mask are kept at the bedside from the moment the first dose is drawn up; a prescription for magnesium sulphate without calcium gluconate beside it is an incomplete prescription.",
        ],
      },
      {
        heading: "Controlling the blood pressure alongside",
        points: [
          "Give nifedipine 10 mg immediate-release orally, swallowed and not placed under the tongue, and repeat every 20-30 minutes for up to 3-5 doses until the pressure is below 160/110 mmHg, or labetalol 20 mg intravenously over 2 minutes, then 40 mg after 10 minutes, then 80 mg every 10 minutes to a cumulative 300 mg, avoiding labetalol in asthma and heart block.",
          "Hydralazine 5 mg intravenously over 5 minutes, repeated at 5-10 mg every 20 minutes to a maximum of 20-30 mg, is the third option and needs 250-500 mL of crystalloid beforehand to blunt the reflex tachycardia and hypotension.",
          "The target is 140-150/90-100 mmHg, not normal - a fall below 130/80 mmHg reduces placental perfusion and the fetal heart must be listened to after every dose.",
          "Nifedipine and magnesium given together can occasionally produce profound hypotension or neuromuscular weakness; it is still the standard combination at the primary level, and the answer to the examiner is closer monitoring, not withholding either drug.",
        ],
      },
      {
        heading: "If she convulses at the station",
        points: [
          "Call for help, turn her fully to the left lateral position, protect her from injury, give oxygen by mask at 8-10 L per minute, do not restrain the limbs and do not force anything into the mouth; most fits stop within 60-90 seconds and the airway is suctioned once they do.",
          "If magnesium has not yet been given, give the full Pritchard loading dose now; if she convulses despite the loading dose, give a further 2 g of 20% solution - 4 mL of 50% diluted to 10 mL - intravenously over 5 minutes, and only if fits continue consider intubation and an alternative anticonvulsant with brain imaging at the referral hospital.",
          "Recheck the blood pressure and treat it, confirm the catheter is draining, note the time and duration of the fit and the fetal heart when it has stopped, and repeat the three-point check before the next maintenance dose.",
          "Stabilise first and deliver second: the decision to deliver is made at the first referral unit once the fits are controlled and the pressure is down, and a caesarean section performed during a fit kills the mother.",
        ],
      },
      {
        heading: "Referral and documentation",
        points: [
          "Refer to a first referral unit after the loading dose, with the intravenous line running slowly at 80 mL per hour, oxygen, the left lateral position in the ambulance, a nurse escort and the 108 ambulance under JSSK, and telephone the receiving unit before she leaves.",
          "The referral note carries the diagnosis, the blood pressure readings, the exact dose, route and time of every magnesium and antihypertensive dose, the time the next maintenance dose is due, the urine output, the fetal heart and whether calcium gluconate travels with her.",
          "She is 35 weeks, beyond the 24-34 week window in which the national guideline gives antenatal corticosteroids, so steroids are not a reason to delay transfer; had she been 33 weeks the first dose of betamethasone 12 mg intramuscularly would be given before she leaves.",
          "Close by telling the examiner that the magnesium continues for 24 hours after delivery, that 44% of eclampsia occurs postpartum, and that the woman and her husband have been told, in their own language, why she is being moved.",
        ],
      },
    ],
    summaryStatement:
      "A 28-year-old G2P1 at 35 weeks with pre-eclampsia with severe features - blood pressure 170/112 mmHg with headache and visual symptoms - who needs seizure prophylaxis with magnesium sulphate by the Pritchard regimen, urgent oral or intravenous antihypertensive treatment within 30-60 minutes, hourly monitoring of respiratory rate, urine output and patellar reflexes with calcium gluconate at the bedside, and transfer to a first referral unit for delivery once she is stable.",
    differential: [
      {
        diagnosis: "Pre-eclampsia with severe features (imminent eclampsia)",
        forIt:
          "Hypertension of 160/110 mmHg or more with new cerebral and visual symptoms after 20 weeks satisfies the definition on its own, before any laboratory result.",
        againstIt:
          "Nothing against it; the only question is whether HELLP syndrome or eclampsia has already supervened, which the platelet count, transaminases and the next few minutes will answer.",
      },
      {
        diagnosis: "Eclampsia",
        forIt:
          "The same severe features with the highest risk of a convulsion in the next hours; a fit witnessed at home may not have been reported.",
        againstIt:
          "No convulsion has been observed and there is no tongue bite, incontinence or post-ictal confusion; the management differs only in that a fit makes delivery immediate after stabilisation.",
      },
      {
        diagnosis: "Chronic hypertension with superimposed pre-eclampsia",
        forIt:
          "A multiparous woman may have had hypertension between pregnancies that was never recorded, and superimposed disease is often earlier and more severe.",
        againstIt:
          "A normal blood pressure recorded at the first-trimester visit on the MCP card and a normal pressure between pregnancies exclude it; the acute management today is identical either way.",
      },
      {
        diagnosis: "Another cause of headache and visual symptoms - migraine, posterior reversible encephalopathy, cerebral venous thrombosis or intracranial haemorrhage",
        forIt:
          "Headache and visual disturbance can be primary neurological events, and pregnancy itself raises the risk of venous thrombosis.",
        againstIt:
          "The severe hypertension with proteinuria explains the symptoms and they should ease as the pressure is controlled; focal deficits, neck stiffness, fever, a reduced conscious level between fits or symptoms persisting after control demand imaging at the referral hospital.",
      },
    ],
    investigations: [
      {
        test: "Urine dipstick for protein now, with a spot protein-creatinine ratio at the referral unit",
        why: "Proteinuria supports the diagnosis and its absence does not exclude it once severe features are present; the dipstick is done because it takes a minute, and quantification follows.",
        expected: "2+ or more on the dipstick and a protein-creatinine ratio of 0.3 or more.",
      },
      {
        test: "Complete blood count with platelet count and a peripheral smear",
        why: "Thrombocytopenia below 100,000/microlitre is a severe feature and, with schistocytes, points to HELLP syndrome or disseminated intravascular coagulation.",
        expected: "Platelets above 100,000/microlitre in uncomplicated disease; a falling count or fragmented red cells change the urgency and the route of delivery.",
      },
      {
        test: "AST, ALT, LDH and serum bilirubin",
        why: "Transaminases twice the upper limit define a severe feature and, with haemolysis and low platelets, complete the diagnosis of HELLP syndrome.",
        expected: "Normal in most women at this stage; AST or ALT above 70 IU/L with LDH above 600 IU/L means HELLP and immediate delivery after stabilisation.",
      },
      {
        test: "Serum creatinine and uric acid",
        why: "A creatinine above 1.1 mg/dL is a severe feature and, because magnesium is renally excreted, decides whether the maintenance dose is reduced.",
        expected: "Creatinine below 1.1 mg/dL and uric acid often raised above 5.5 mg/dL.",
      },
      {
        test: "Coagulation profile - prothrombin time, APTT and fibrinogen - if the platelets are low or there is bleeding",
        why: "To detect disseminated intravascular coagulation, which alters anaesthetic choice and the need for blood products before delivery.",
        expected: "Normal unless HELLP or abruption has developed; a fibrinogen below 200 mg/dL is the earliest coagulation abnormality of abruption.",
      },
      {
        test: "Blood grouping and Rh typing with cross-matching of two units of packed red cells",
        why: "Abruption, HELLP and postpartum haemorrhage are all more likely, and the referral unit should have blood ready before she arrives.",
        expected: "Group and cross-match available at the receiving facility, sent with the referral note.",
      },
      {
        test: "Fetal heart rate now, and a non-stress test with ultrasound biometry and umbilical artery Doppler at the referral unit",
        why: "To document fetal wellbeing before transfer and to detect growth restriction or placental insufficiency that would influence the mode and timing of delivery.",
        expected: "A fetal heart of 110-160 per minute; a non-reactive trace or absent end-diastolic flow brings delivery forward and favours caesarean section.",
      },
      {
        test: "Serum magnesium where available",
        why: "It is not needed for routine monitoring, which is clinical, but is useful when reflexes are lost, when renal function is impaired, or when a dose has been withheld.",
        expected: "Therapeutic 4-7 mEq/L; loss of patellar reflex at 8-10 mEq/L and respiratory depression at about 12 mEq/L.",
      },
    ],
    management: [
      {
        heading: "The prescription to write, exactly",
        points: [
          "**Pritchard loading:** magnesium sulphate 4 g as 20% solution intravenously over 5 minutes (8 mL of 50% diluted to 20 mL) plus 10 g of 50% solution deep intramuscularly, 5 g (10 mL) in each buttock with 1 mL of 2% lignocaine.",
          "**Pritchard maintenance:** 5 g of 50% solution (10 mL) deep intramuscularly into alternate buttocks every 4 hours, for 24 hours after delivery or the last fit, whichever is later.",
          "**Recurrent fit on magnesium:** a further 2 g of 20% solution intravenously over 5 minutes.",
          "**Zuspan alternative where a pump exists:** 4 g of 20% intravenously over 15-20 minutes, then 1 g per hour by infusion for 24 hours after delivery or the last fit.",
          "**Antidote, written on the same sheet:** calcium gluconate 1 g (10 mL of 10%) intravenously over 10 minutes, kept at the bedside.",
        ],
      },
      {
        heading: "The monitoring chart the nurse keeps",
        points: [
          "Before every maintenance dose: respiratory rate at least 16 per minute, urine output at least 30 mL per hour (100 mL in 4 hours), patellar reflex present - **withhold the dose if any one fails and call the doctor.**",
          "Blood pressure every 15 minutes until below 160/110 mmHg and then every 30 minutes; pulse, respiratory rate and oxygen saturation hourly; hourly urine output on the catheter chart; patellar reflex 4-hourly; conscious level and symptoms at every round.",
          "Fetal heart every 30 minutes and after every antihypertensive dose; intravenous fluids limited to 80 mL per hour with the chest auscultated for crepitations, because pulmonary oedema is the commonest cause of death in these women after the fit itself.",
          "Every dose with its time and route, every blood pressure and every check written on one sheet that travels with the woman.",
        ],
      },
      {
        heading: "Antihypertensive treatment within 30-60 minutes",
        points: [
          "Nifedipine 10 mg immediate-release orally, repeated every 20-30 minutes up to 3-5 doses, never sublingually; or labetalol 20 mg intravenously over 2 minutes, then 40 mg, then 80 mg every 10 minutes to a cumulative 300 mg; or hydralazine 5 mg intravenously over 5 minutes, repeated 5-10 mg every 20 minutes to 20-30 mg.",
          "Target 140-150/90-100 mmHg; then start or continue oral maintenance with labetalol 100 mg twice daily titrated to 800 mg three times daily, or nifedipine retard 10-20 mg twice or three times daily to 120 mg per day.",
          "No ergometrine at delivery, no diuretics except for pulmonary oedema, no angiotensin-converting enzyme inhibitors or angiotensin receptor blockers.",
        ],
      },
      {
        heading: "Delivery and the postpartum day",
        points: [
          "At 35 weeks with severe features the answer is delivery once she is stable, at the first referral unit, by induction if the cervix and the fetal status allow and by caesarean section for obstetric indications; magnesium continues through labour and for 24 hours after delivery.",
          "Active management of the third stage with oxytocin 10 units intramuscularly, strict fluid balance, blood pressure 4-hourly for 72 hours and again at day 7-10, and antihypertensives continued at discharge with labetalol or nifedipine rather than methyldopa.",
          "Counsel at discharge on the 15-20% recurrence risk, aspirin from 12-16 weeks in the next pregnancy, contraception that avoids the combined pill while the pressure is raised, and lifelong annual cardiovascular risk checks.",
        ],
      },
    ],
    viva: [
      {
        q: "Why magnesium sulphate rather than diazepam or phenytoin?",
        a: "The Collaborative Eclampsia Trial showed magnesium sulphate more than halves the recurrence of fits compared with diazepam or phenytoin, with fewer maternal and neonatal complications, and the Magpie trial showed it halves the risk of a first fit in pre-eclampsia. It also does not sedate the mother or depress the newborn the way diazepam does.",
      },
      {
        q: "How does magnesium sulphate prevent convulsions?",
        a: "It is a central N-methyl-D-aspartate receptor antagonist that raises the seizure threshold, it dilates cerebral vessels and relieves the vasospasm that underlies the encephalopathy, it stabilises neuronal membranes, and at the neuromuscular junction it competes with calcium to reduce acetylcholine release - which is also why the reflexes go first when the level is too high.",
      },
      {
        q: "Why is the patellar reflex lost before breathing is affected?",
        a: "Because the effects are dose-dependent in a fixed order: neuromuscular blockade at the junction abolishes the tendon reflex at 8-10 mEq/L, respiratory muscle weakness follows at about 12 mEq/L, and cardiac conduction fails above 25-30 mEq/L; the reflex therefore serves as a built-in early warning that costs nothing to check.",
      },
      {
        q: "The woman has passed only 60 mL of urine in the last 4 hours. What do you do?",
        a: "Withhold the maintenance dose, because magnesium is excreted entirely by the kidney and will accumulate; check the catheter is not blocked, give a measured fluid bolus of 250-500 mL only if she is clinically dry and the chest is clear, send a creatinine and a serum magnesium, examine the reflexes and respiratory rate, and resume at half the dose or as an infusion once the output recovers.",
      },
      {
        q: "When would you prefer the Zuspan regimen?",
        a: "Where an infusion pump and continuous nursing observation are available, because the intravenous regimen avoids the painful and occasionally abscess-forming intramuscular injections and allows the rate to be adjusted to renal function; at a primary health centre without a pump the Pritchard regimen is safer because a bolus cannot run in uncontrolled.",
      },
      {
        q: "She has a second fit 30 minutes after the loading dose. What next?",
        a: "Left lateral, airway, oxygen, then a further 2 g of 20% magnesium sulphate intravenously over 5 minutes; if fits still continue she needs intubation, an alternative anticonvulsant such as intravenous lorazepam or levetiracetam under anaesthetic supervision, and imaging of the brain at the referral hospital to exclude haemorrhage or venous thrombosis, with delivery as soon as she is stable.",
      },
      {
        q: "How long does magnesium continue after delivery and why?",
        a: "For 24 hours after delivery or after the last convulsion, whichever is later, because 44% of eclampsia occurs postpartum and the risk persists into the first days; the blood pressure is likewise monitored for 72 hours and again at day 7-10.",
      },
      {
        q: "What is the exact dose of calcium gluconate, and how is it given?",
        a: "1 g, which is 10 mL of a 10% solution, intravenously over 10 minutes, repeated if the respiratory depression persists, while the airway is supported with bag and mask ventilation and the magnesium is stopped; it must be at the bedside before the first dose of magnesium is drawn up.",
      },
    ],
    pitfalls: [
      "Pushing the intravenous loading dose fast - 4 g over 5 minutes in the Pritchard regimen and over 15-20 minutes in the Zuspan regimen; a rapid bolus causes flushing, hypotension and respiratory arrest.",
      "Injecting the 50% solution intravenously undiluted, or miscalculating the volume - 1 g is 2 mL of 50%, so 4 g is 8 mL diluted to 20 mL for the intravenous dose and 10 g is 20 mL for the intramuscular dose.",
      "Withholding magnesium because the woman 'has not fitted yet' - severe features are the indication for prophylaxis, and waiting for the first convulsion is the error the Magpie trial was designed to end.",
      "Giving a maintenance dose without the three-point check, or checking the reflexes after the dose instead of before it.",
      "Giving nifedipine under the tongue, or dropping the blood pressure below 130/80 mmHg and compromising the placenta.",
      "Delaying transfer to 'complete the investigations', delivering during a fit, or sending the woman without the time and dose of magnesium written on the referral note so that the receiving unit repeats the loading dose.",
    ],
    references: [
      "FOGSI-ICOG Good Clinical Practice Recommendations on Pre-eclampsia and Eclampsia, 2019",
      "Maternal Health Division, MoHFW - Guidelines for Management of Pregnancy Induced Hypertension including Eclampsia",
      "Managing Complications in Pregnancy and Childbirth: A Guide for Midwives and Doctors, WHO, 2nd edition, 2017",
      "WHO Recommendations for Prevention and Treatment of Pre-eclampsia and Eclampsia, 2011",
      "ACOG Practice Bulletin 222: Gestational Hypertension and Preeclampsia, 2020",
      "Williams Obstetrics, 26th edition, 2022 - hypertensive disorders",
      "DC Dutta's Textbook of Obstetrics, 9th edition, 2018 - hypertensive disorders in pregnancy",
    ],
  },
];

const subject: Subject = {
  id: "obstetrics",
  title: "Obstetrics",
  blurb: "Antenatal care, anaemia, hypertensive disease, gestational diabetes, labour and postpartum haemorrhage.",
  icon: "Baby",
  papers: ["IV"],
  topics,
  cases,
};

export default subject;
