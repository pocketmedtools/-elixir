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
