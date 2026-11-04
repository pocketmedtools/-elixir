import type { Topic } from "../../../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "gastro-hepatology-gallstones-biliary",
  title: "Gallstone disease, cholecystitis and cholangitis",
  frequency: "core",
  oneLiner:
    "**Cholelithiasis** is stone formation in the gallbladder from **cholesterol supersaturation, nucleation and gallbladder stasis**; it presents as **biliary colic**, **acute cholecystitis** (graded by **Tokyo 2018**), **choledocholithiasis** (risk-stratified by **ASGE 2019**) and **acute cholangitis**, which needs **antibiotics plus timely biliary drainage by ERCP** - and in North India long-standing stones carry the added shadow of **gallbladder cancer**.",
  keywords: [
    "cholelithiasis",
    "gallstones",
    "biliary colic",
    "acute calculous cholecystitis",
    "acalculous cholecystitis",
    "choledocholithiasis",
    "CBD stone",
    "acute cholangitis",
    "Charcot triad",
    "Reynolds pentad",
    "Murphy sign",
    "Tokyo guidelines TG18",
    "ASGE 2019",
    "ERCP",
    "MRCP",
    "EUS",
    "HIDA scan",
    "Mirizzi syndrome",
    "gallstone ileus",
    "gallbladder cancer",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "**Cholelithiasis** means stones in the gallbladder; **choledocholithiasis** means stones in the common bile duct (CBD), which are secondary (migrated from the gallbladder) in most adults and primary (formed in the duct) behind strictures or in recurrent pyogenic cholangitis. [Harrison 22e]",
        "Gallstones are found in **10-15% of adults in Western countries**; about **80% remain asymptomatic** for life, and only **1-4% per year** develop biliary colic or a complication. [Harrison 22e]",
        "India has a marked **north-south gradient**: community ultrasound surveys found gallstones in about **6% of adults in Kashmir and the North** against about **1-2% in South India**, with the highest load along the **Gangetic belt** (Uttar Pradesh, Bihar, West Bengal, Assam). [Khuroo, Gut 1989; ISG]",
        "**Cholesterol (mixed) stones** predominate in North India and the West (about 80%), whereas **pigment stones** are relatively commoner in South India and in haemolytic disease. [Harrison 22e]",
        "**Laparoscopic cholecystectomy** is one of the commonest elective operations in Indian district hospitals and is covered under **PM-JAY** packages. [NHA PM-JAY HBP 2022]",
        "**Acute cholecystitis** develops in about **10-20%** of untreated symptomatic patients, and **CBD stones** coexist in about **10-15%** of patients undergoing cholecystectomy. [Harrison 22e]",
        "**Acute cholangitis** carries a mortality of under 5% when drained in time but **20-30% or more** in severe (Grade III) disease with delayed drainage. [TG18]",
        "**Gallbladder cancer (GBC)** incidence in women of North and North-East India is **among the highest in the world**, and **gallstones are present in 70-90%** of patients with GBC. [ICMR-NCDIR PBCR 2020]",
      ],
    },
    {
      heading: "Aetiology and risk factors",
      points: [
        "The classic **'5 F' profile - female, fertile, fat, forty, fair** - reflects oestrogen raising biliary cholesterol secretion and progesterone slowing gallbladder emptying. [Harrison 22e]",
        "**Pregnancy and oral oestrogen** (combined pill, HRT) raise risk; sludge appears in up to **30% of pregnancies** and often clears post-partum. [Harrison 22e]",
        "**Obesity, metabolic syndrome, diabetes and MASLD** raise risk, but so does **rapid weight loss** (very-low-calorie diets, bariatric surgery) - up to **30% form stones** within 6 months of bariatric surgery. [Harrison 22e]",
        "**Drugs**: ceftriaxone (calcium-ceftriaxone sludge, 'pseudolithiasis'), octreotide, fibrates (clofibrate), oestrogens and long-term **total parenteral nutrition** (gallbladder stasis). [Harrison 22e]",
        "**Black pigment stones** form with **chronic haemolysis** (sickle cell disease, thalassaemia, hereditary spherocytosis), **cirrhosis** and **ileal disease or resection** (enterohepatic cycling of unconjugated bilirubin). [Harrison 22e]",
        "**Brown pigment stones** form in the ducts with **biliary infection and stasis** - parasites (Ascaris, Clonorchis), strictures and recurrent pyogenic cholangitis. [Harrison 22e]",
        "**Genetic factors**: variants in the hepatic cholesterol transporter **ABCG5/ABCG8** and a strong family history; high-risk ethnic groups include Native Americans and North Indians. [Harrison 22e]",
        "Indian dietary hypotheses for North India (high-fat ghee diet, low fibre, contaminated water) are plausible but unproven; age and female sex remain the strongest risks. [ISG]",
      ],
    },
    {
      heading: "Pathophysiology",
      points: [
        "Cholesterol is held in bile by **bile salts and phospholipid (lecithin) micelles**; when cholesterol exceeds their carrying capacity, bile becomes **supersaturated (lithogenic)** - the Admirand-Small triangle. [Harrison 22e]",
        "Stone formation needs **three defects together**: cholesterol supersaturation, accelerated **nucleation** (mucin glycoprotein from the gallbladder wall acts as a scaffold) and **gallbladder hypomotility** (stasis allows crystals to grow). [Harrison 22e]",
        "**Biliary colic** is not colic: a stone impacts in the **cystic duct or Hartmann pouch** after a fatty meal (cholecystokinin-driven contraction), giving **steady visceral pain** that ends when the stone falls back. [Harrison 22e]",
        "**Acute cholecystitis** follows **persistent cystic duct obstruction**: trapped bile, lysolecithin (from phospholipase A) and prostaglandins inflame the wall; bacterial infection (E. coli, Klebsiella, Enterococcus, anaerobes) is **secondary**. [Harrison 22e]",
        "When inflammation touches the **parietal peritoneum**, pain moves from the epigastrium to the **right upper quadrant** and **Murphy sign** appears; wall ischaemia leads to **gangrene, empyema and perforation**. [Harrison 22e]",
        "**Acute cholangitis** = **obstruction plus infection** of the bile duct: raised intraductal pressure (above about **20-25 cm H2O**) drives bacteria and endotoxin across hepatocyte tight junctions into blood (**cholangiovenous reflux**), causing rapid sepsis - hence 'drain the duct' is the cure. [TG18]",
        "A stone at the **ampulla** can block the pancreatic duct as well, so the same CBD stone causes **jaundice, cholangitis and biliary pancreatitis** (see the acute pancreatitis topic). [Harrison 22e]",
        "**Chronic inflammation from long-standing large stones** drives metaplasia-dysplasia-carcinoma in the gallbladder wall - the link to **gallbladder cancer**. [ICMR GBC consensus]",
      ],
    },
    {
      heading: "Classification and grading - Tokyo 2018 (TG18)",
      points: [
        "**TG18 acute cholecystitis diagnosis**: **A** local inflammation (Murphy sign, RUQ mass/pain/tenderness), **B** systemic inflammation (fever, raised CRP, raised WBC), **C** imaging findings; **suspected = A + B, definite = A + B + C**. [TG18]",
        "**Cholecystitis Grade III (severe)**: dysfunction of any organ - hypotension needing noradrenaline or dopamine 5 mcg/kg/min or more, reduced consciousness, **PaO2/FiO2 under 300**, oliguria or **creatinine over 2.0 mg/dL**, **PT-INR over 1.5**, **platelets under 100,000/mm3**. [TG18]",
        "**Cholecystitis Grade II (moderate)**: any one of **WBC over 18,000/mm3**, palpable tender RUQ mass, **symptoms for more than 72 hours**, or marked local inflammation (gangrenous or emphysematous cholecystitis, pericholecystic or hepatic abscess, biliary peritonitis). [TG18]",
        "**Cholecystitis Grade I (mild)**: neither Grade II nor III - healthy patient, mild local inflammation, cholecystectomy safe. [TG18]",
        "**TG18 cholangitis diagnosis**: **A** systemic inflammation (fever over 38 °C or rigors; WBC under 4,000 or over 10,000, CRP 1 mg/dL or more), **B** cholestasis (bilirubin 2 mg/dL or more; liver enzymes over 1.5 times ULN), **C** imaging (biliary dilatation or a cause - stone, stricture, stent); **definite = A + B + C**. [TG18]",
        "**Cholangitis Grade II (moderate)**: any **two** of WBC over 12,000 or under 4,000, fever 39 °C or more, **age 75 years or more**, **bilirubin 5 mg/dL or more**, albumin under 0.7 times the lower limit of normal; **Grade III** uses the same organ-dysfunction list as cholecystitis. [TG18]",
        "**Charcot triad** (fever, RUQ pain, jaundice) has high specificity but **only about 26% sensitivity**, which is why TG13/TG18 replaced it with the A-B-C criteria; **Reynolds pentad** adds shock and confusion. [TG18]",
        "**Mirizzi syndrome** (stone in Hartmann pouch or cystic duct compressing the common hepatic duct) is graded by **Csendes types I-V** by the size of the cholecystobiliary fistula. [Bailey and Love 28e]",
        "**Stone types**: cholesterol (yellow, radiolucent), black pigment (calcium bilirubinate, often radio-opaque, haemolysis/cirrhosis) and brown pigment (soft, ductal, infection); only **10-15% of gallstones are radio-opaque** on plain X-ray. [Harrison 22e]",
      ],
    },
    {
      heading: "Clinical features - history",
      points: [
        "**Biliary colic**: steady epigastric or RUQ pain building over minutes, lasting **30 minutes to 6 hours**, often 1-3 hours after a fatty or heavy meal or at night, radiating to the **right scapula or shoulder tip**, with nausea and vomiting. [Harrison 22e]",
        "Pain lasting **more than 6 hours**, or with fever, suggests **acute cholecystitis** rather than simple colic. [Harrison 22e]",
        "**Flatulence, bloating, fatty food intolerance and belching** are not gallstone symptoms - they persist after cholecystectomy, so stones found while investigating dyspepsia are usually incidental. [Harrison 22e]",
        "**Choledocholithiasis** presents with colic plus **fluctuating jaundice, dark urine and pale stools**; pain with intermittent jaundice favours stone, **painless progressive jaundice** favours malignancy. [Harrison 22e]",
        "**Cholangitis** presents with fever with **rigors**, RUQ pain and jaundice; elderly patients may present with only **confusion, hypotension or falls**. [TG18]",
        "**Elderly and diabetic patients** may have minimal pain and no fever even with **gangrenous or emphysematous cholecystitis** - a low threshold for imaging is needed. [WSES 2020]",
        "In a North Indian woman over 50 with long-standing stones, **new constant pain, anorexia, weight loss or jaundice** must raise suspicion of **gallbladder cancer**. [ICMR GBC consensus]",
      ],
    },
    {
      heading: "Examination findings",
      points: [
        "**Murphy sign**: inspiratory arrest when the examiner's fingers press under the right costal margin during deep inspiration - sensitivity about 65%, lower in the elderly. [Harrison 22e]",
        "**Sonographic Murphy sign** (maximal tenderness over the gallbladder under the probe) is more reliable than the bedside sign. [TG18]",
        "A **tender RUQ mass** suggests a distended inflamed gallbladder, empyema or an omental phlegmon - a Grade II feature. [TG18]",
        "**Courvoisier law**: a palpable, non-tender gallbladder in a jaundiced patient is **unlikely to be due to stones** (a chronically fibrosed stone-bearing gallbladder cannot distend) - think periampullary or pancreatic head cancer. [Bailey and Love 28e]",
        "**Boas sign** (hyperaesthesia below the right scapula) is a classical but rarely useful sign of cholecystitis. [Bailey and Love 28e]",
        "**Jaundice, fever and hypotension** together mean cholangitis with sepsis until proved otherwise; check capillary refill, urine output and sensorium (qSOFA). [TG18]",
        "**Generalised peritonitis** suggests gallbladder perforation; a **hard, irregular RUQ mass with hepatomegaly** suggests gallbladder cancer. [Bailey and Love 28e]",
      ],
    },
    {
      heading: "Differential diagnosis",
      points: [
        "**Peptic ulcer disease and functional dyspepsia** - pain related to hunger or meals, relieved by antacids, normal ultrasound (see the acid peptic disease topic). [Harrison 22e]",
        "**Acute pancreatitis** - pain radiating to the back, **lipase over 3 times ULN**; but gallstones are its commonest cause in India, so both may coexist. [ACG 2024]",
        "**Inferior wall myocardial infarction** - always take an **ECG** in a diabetic or elderly patient with epigastric pain. [Harrison 22e]",
        "**Right lower lobe pneumonia, acute hepatitis, liver abscess and Fitz-Hugh-Curtis perihepatitis** all give RUQ pain and fever. [Harrison 22e]",
        "**Right renal colic and pyelonephritis** - loin pain radiating to the groin, haematuria, renal angle tenderness. [Harrison 22e]",
        "**Acute appendicitis (high retrocaecal or in pregnancy)** can mimic cholecystitis. [Bailey and Love 28e]",
        "For obstructive jaundice: **periampullary or pancreatic cancer, cholangiocarcinoma, GBC, benign stricture, PSC and choledochal cyst** - imaging decides. [Harrison 22e]",
      ],
    },
    {
      heading: "Investigations",
      points: [
        "**Abdominal ultrasound** is the first test: sensitivity **over 95% for gallbladder stones** (mobile echogenic foci with posterior acoustic shadowing); cholecystitis signs are **wall over 4 mm**, distension, pericholecystic fluid and sonographic Murphy sign. [TG18]",
        "**CBD diameter**: normal up to about **6 mm** with the gallbladder in situ (slightly more in the elderly) and up to **8-10 mm after cholecystectomy**; ultrasound sees CBD stones in only about **50%**. [ASGE 2019]",
        "**Blood tests**: CBC, CRP, bilirubin (direct), ALP, GGT, ALT/AST, **lipase**, creatinine, INR, lactate and **blood cultures before antibiotics** in suspected cholangitis. [TG18]",
        "A transient **ALT/AST rise to several hundred IU/L** within 24-48 hours can occur with a passing CBD stone and may mimic hepatitis. [Harrison 22e]",
        "**HIDA (cholescintigraphy)** is the most accurate test for acute cholecystitis (sensitivity about 96%) - non-filling of the gallbladder at 4 hours (or 30 minutes after morphine) confirms cystic duct obstruction; used when ultrasound is equivocal. [Harrison 22e]",
        "**CECT abdomen** is for complications (gangrene, emphysema, perforation, abscess) and for suspected malignancy; it misses many cholesterol stones. [TG18]",
        "**MRCP** (sensitivity about 90% for CBD stones, poorer under 5 mm) and **EUS** (the most sensitive test for small CBD stones and microlithiasis) are used for **intermediate-risk** choledocholithiasis. [ASGE 2019]",
        "**ERCP** is now a **therapeutic, not diagnostic, test** - reserve it for high-probability CBD stones or cholangitis because of its **post-ERCP pancreatitis risk of about 3-10%**. [ASGE 2019]",
        "**CA 19-9 and CECT/MRI with staging** are needed when imaging shows gallbladder wall thickening, a mass or a polyp over 10 mm; CA 19-9 is also raised by cholangitis, so interpret after drainage. [ICMR GBC consensus]",
      ],
    },
    {
      heading: "Choledocholithiasis risk - ASGE 2019",
      points: [
        "**High probability** (any one): **CBD stone seen on ultrasound or cross-sectional imaging**, **total bilirubin over 4 mg/dL plus a dilated CBD**, or **ascending cholangitis** - go straight to **ERCP** (pre-operative ERCP or laparoscopic CBD exploration). [ASGE 2019]",
        "**Intermediate probability** (any one): **abnormal liver biochemistry**, **age over 55 years**, or a **dilated CBD** on imaging - confirm with **EUS or MRCP** (or intra-operative cholangiography/laparoscopic ultrasound) before ERCP. [ASGE 2019]",
        "**Low probability**: none of the above - proceed to **cholecystectomy** without further ductal imaging. [ASGE 2019]",
        "ASGE 2019 dropped the 2010 use of **gallstone pancreatitis** and bilirubin 1.8-4 mg/dL as predictors, which over-referred patients to ERCP. [ASGE 2019]",
        "**ESGE 2019** is similar: ERCP for a CBD stone seen on ultrasound or cholangitis; EUS/MRCP for persistent suspicion; and **removal of all CBD stones, even asymptomatic ones**. [ESGE 2019]",
        "**Single-stage laparoscopic cholecystectomy with CBD exploration** is as effective as two-stage ERCP then cholecystectomy, with shorter stay, where surgical expertise exists. [ESGE 2019]",
      ],
    },
    {
      heading: "Management in OPD / primary care",
      points: [
        "**Asymptomatic gallstones**: reassure and **do not operate routinely** - lifetime complication risk is low and surgical risk exceeds benefit. [EASL 2016]",
        "Exceptions where **prophylactic cholecystectomy** is advised: **porcelain gallbladder**, **stones over 3 cm**, **gallbladder polyp 10 mm or more**, coexisting polyp with stones, haemolytic anaemia (sickle cell), and planned bariatric or other upper-abdominal surgery. [EASL 2016; ESGAR 2022]",
        "**In high-GBC regions of North and North-East India**, many Indian surgeons offer cholecystectomy for long-standing or large asymptomatic stones in women; this is a regional practice argued from GBC risk, not a universal guideline recommendation. [ICMR GBC consensus]",
        "**Biliary colic** - analgesia with an NSAID: **diclofenac 75 mg IM** once (or 50 mg oral 8-hourly) or **ketorolac 30 mg IV/IM**; NSAIDs relieve pain as well as opioids and **reduce progression to cholecystitis**. [EASL 2016]",
        "Avoid **antispasmodics alone** (hyoscine is less effective than NSAIDs) and avoid NSAIDs in CKD, active peptic ulcer, late pregnancy and dehydration. [EASL 2016]",
        "After **one attack of uncomplicated biliary colic**, refer for **elective laparoscopic cholecystectomy** - about 50-70% have recurrent pain within 2 years. [EASL 2016]",
        "**Ursodeoxycholic acid (UDCA) dissolution**, 10-15 mg/kg/day orally for 6-24 months, works only for **small (under 5-10 mm) radiolucent cholesterol stones in a functioning gallbladder**; about **50% recur within 5 years**, so it is rarely used. [EASL 2016]",
        "**UDCA 500-600 mg/day for 6 months after bariatric surgery** reduces new stone formation. [EASL 2016]",
        "**Diet**: no specific diet dissolves stones; small low-fat meals may reduce colic while awaiting surgery; regular meals and gradual weight loss reduce stone formation. [EASL 2016]",
      ],
    },
    {
      heading: "Management in IPD / emergency",
      points: [
        "**Admit** all suspected acute cholecystitis and cholangitis: nil by mouth or clear fluids, **IV crystalloid**, analgesia, blood cultures, and **antibiotics within 1 hour if septic** (within 6 hours otherwise). [TG18]",
        "**Grade I cholecystitis**: **early laparoscopic cholecystectomy** - ideally within **72 hours**, acceptable up to **7 days of admission and 10 days from onset**; delayed (interval) surgery at 6 weeks has higher readmission rates. [TG18; WSES 2020]",
        "**Grade II**: early cholecystectomy in an **experienced centre** if CCI and ASA allow; otherwise antibiotics and **percutaneous transhepatic gallbladder drainage (PTGBD)** with later surgery. [TG18]",
        "**Grade III**: organ support and antibiotics; early cholecystectomy only at an advanced centre if organ dysfunction (cardiovascular or renal) reverses rapidly, and no jaundice, neurological or respiratory failure, **CCI 3 or less and ASA 2 or less**; otherwise urgent gallbladder drainage. [TG18]",
        "**Endoscopic ultrasound-guided gallbladder drainage (EUS-GBD)** with a lumen-apposing stent is an alternative to percutaneous drainage in high-risk patients unfit for surgery. [TG18]",
        "**Cholangitis drainage timing**: Grade I - drain if no response in 24 hours; **Grade II - early drainage (within 24-48 hours)**; **Grade III - urgent drainage** once resuscitated; **ERCP with sphincterotomy and stone extraction or stent** is first choice, PTBD if ERCP fails. [TG18]",
        "**Antibiotic duration**: cholecystitis Grade I-II - stop **within 24 hours of cholecystectomy**; Grade III or cholangitis - **4-7 days after source control**; **2 weeks** for Enterococcus or Streptococcus bacteraemia. [TG18]",
        "**Post-ERCP pancreatitis prophylaxis**: **rectal diclofenac or indomethacin 100 mg** just before or after ERCP plus aggressive Ringer lactate in average-risk patients. [ESGE 2020]",
        "**Acalculous cholecystitis** (ICU, burns, sepsis, TPN, post-op) - antibiotics and **percutaneous cholecystostomy**; mortality is high. [Harrison 22e]",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**Pregnancy**: gallstone disease is the second commonest non-obstetric surgical problem; **laparoscopic cholecystectomy is safe in any trimester**, ideally the second, and **ERCP with fetal shielding** is safe for CBD stones or cholangitis. [SAGES 2017]",
        "Conservative management of symptomatic gallstones in pregnancy carries **recurrence in up to 50%** and higher fetal loss with complicated disease - so operate rather than wait. [SAGES 2017]",
        "**Elderly (75 or more)**: higher rates of gangrenous cholecystitis and cholangitis Grade II by age alone; **frailty and CCI**, not age, decide surgery versus drainage. [TG18]",
        "**Diabetes**: higher risk of **emphysematous cholecystitis** (gas in gallbladder wall, Clostridium; commoner in men) - needs urgent cholecystectomy. [Harrison 22e]",
        "**Cirrhosis**: laparoscopic cholecystectomy is acceptable in **Child-Pugh A and selected B**; avoid in Child C - percutaneous drainage instead. [WSES 2020]",
        "**Children**: gallstones suggest **haemolytic disease** (thalassaemia, sickle cell, hereditary spherocytosis) or ceftriaxone use; screen the haemogram. [Nelson 22e]",
        "**Resource-limited setting**: where ERCP is unavailable, stabilise, start antibiotics (ceftriaxone plus metronidazole) and transfer Grade II-III cholangitis early; percutaneous drainage is the bridge. [TG18]",
      ],
    },
    {
      heading: "Complications and prognosis",
      points: [
        "**Gallbladder**: empyema, **gangrene, perforation** (localised abscess or bile peritonitis), **emphysematous cholecystitis**, Mirizzi syndrome and cholecystoenteric fistula. [Harrison 22e]",
        "**Gallstone ileus**: a stone over 2.5 cm erodes into the duodenum and impacts at the **ileocaecal valve**; **Rigler triad** - pneumobilia, small-bowel obstruction and an ectopic gallstone; **Bouveret syndrome** is gastric outlet obstruction by a duodenal stone. [Bailey and Love 28e]",
        "**Duct**: obstructive jaundice, cholangitis, **biliary pancreatitis**, secondary biliary cirrhosis and liver abscess (see the liver abscess topic). [Harrison 22e]",
        "**After cholecystectomy**: **bile duct injury** (about 0.3-0.5% laparoscopic - prevented by the **critical view of safety**), bile leak, retained CBD stone and **post-cholecystectomy syndrome**. [SAGES 2020]",
        "**Gallbladder cancer**: risk factors are **long-standing large stones, porcelain gallbladder, polyp 10 mm or more, anomalous pancreaticobiliary ductal junction, chronic typhoid carrier state and obesity**; median survival in advanced disease is about **12 months**. [ICMR GBC consensus]",
        "**Incidental GBC** is found in about **1% of cholecystectomy specimens** in North India - so every gallbladder removed in a high-incidence region should go for **histopathology**. [ICMR GBC consensus]",
        "Prognosis of uncomplicated gallstone disease after cholecystectomy is excellent; mortality of elective laparoscopic cholecystectomy is **under 0.1%**. [Harrison 22e]",
      ],
    },
    {
      heading: "Referral, follow-up and gallbladder polyps",
      points: [
        "**Refer same day**: fever with jaundice, sepsis, persistent pain over 6 hours, peritonism, pancreatitis, or jaundice with CBD dilatation. [TG18]",
        "**Refer electively**: symptomatic gallstones for cholecystectomy; incidental stones with prophylactic indications; any gallbladder wall thickening or mass. [EASL 2016]",
        "**Gallbladder polyps (ESGAR/EAES/EFISDS/ESGE 2022)**: **10 mm or more - cholecystectomy**; **6-9 mm with a risk factor** (age over 60, PSC, **Asian ethnicity**, sessile polyp or focal wall thickening over 4 mm) - cholecystectomy; 6-9 mm without risk factors or 5 mm or less with risk factors - ultrasound at **6 months, 1 year and 2 years**; 5 mm or less without risk factors - no follow-up. [ESGAR 2022]",
        "Growth of a polyp by **2 mm or more within 2 years** or to 10 mm means cholecystectomy. [ESGAR 2022]",
        "After ERCP clearance of CBD stones, do **cholecystectomy during the same admission or within 2 weeks** - delay increases recurrent biliary events. [ESGE 2019]",
        "**After cholecystectomy**, check the histopathology report; if T1b or higher GBC, refer to a hepatobiliary oncology centre for **revision radical cholecystectomy**. [ICMR GBC consensus]",
      ],
    },
    {
      heading: "Gallbladder cancer in North India",
      points: [
        "GBC is the commonest biliary tract cancer in India and a leading digestive cancer in **women of UP, Bihar, West Bengal, Assam and the North-East**. [ICMR-NCDIR PBCR 2020]",
        "Proposed Indian contributors besides stones: **heavy metals and pesticides in Gangetic water**, mustard oil adulterants, chronic **Salmonella typhi carriage**, and genetic susceptibility. [ICMR GBC consensus]",
        "Presentation is late: **pain, anorexia, weight loss, jaundice** (hilar invasion), palpable mass; **fewer than 20-30% are resectable** at diagnosis. [ICMR GBC consensus]",
        "**T1a (lamina propria)**: simple cholecystectomy is enough; **T1b and above**: **extended (radical) cholecystectomy** - gallbladder with a 2 cm wedge of segments IVb/V and regional lymphadenectomy. [NCCN 2024]",
        "**Adjuvant capecitabine** for 6 months after resection (BILCAP) is standard. [ESMO 2023]",
        "**Advanced GBC**: **gemcitabine-cisplatin plus durvalumab** (TOPAZ-1, 2022) or **plus pembrolizumab** (KEYNOTE-966, 2023) is the new first-line standard; palliative biliary stenting for jaundice. [ESMO 2023]",
      ],
    },
    {
      heading: "Latest guideline updates",
      points: [
        "**TG18** remains the current Tokyo guideline: it validated TG13 diagnostic and severity criteria and **allowed early cholecystectomy in selected Grade III cholecystitis** at advanced centres. [TG18]",
        "**ASGE 2019** replaced the 2010 choledocholithiasis criteria with **stricter high-risk criteria** (stone on imaging, bilirubin over 4 with dilated duct, or cholangitis), sparing unnecessary ERCP. [ASGE 2019]",
        "**ESGE 2019** CBD stone guideline: remove all CBD stones; EUS or MRCP for intermediate risk; large-balloon dilatation after sphincterotomy for difficult stones. [ESGE 2019]",
        "**ESGAR 2022** gallbladder polyp guideline added **Asian ethnicity** as a risk factor, lowering the threshold for surgery in Indian patients with 6-9 mm polyps. [ESGAR 2022]",
        "**ACG 2024 acute pancreatitis** guideline: in gallstone pancreatitis, **urgent ERCP (within 24 hours) only with cholangitis**, not for pancreatitis alone; same-admission cholecystectomy for mild disease. [ACG 2024]",
        "**Biliary tract cancer**: addition of immunotherapy (durvalumab or pembrolizumab) to gemcitabine-cisplatin is now first-line in ESMO 2023 and NCCN 2024. [ESMO 2023]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "Viva favourite: **state TG18 grading of cholangitis and when to drain** - drainage timing follows the grade. [TG18]",
        "Common mistake: ordering **diagnostic ERCP** in an intermediate-risk patient - EUS or MRCP first. [ASGE 2019]",
        "Common mistake: treating dyspepsia with incidental gallstones by cholecystectomy - **bloating and belching persist** afterwards. [EASL 2016]",
        "Know **Courvoisier law**, **Rigler triad**, **Charcot triad and Reynolds pentad**, and **Mirizzi syndrome** - all one-line eponym questions. [Bailey and Love 28e]",
        "Know why **ceftriaxone** causes pseudolithiasis and why **ileal resection** causes stones - both appear as MCQs. [Harrison 22e]",
        "In written answers, a **TG18 table plus an ASGE flow chart** earns most of the marks. [Examiner practice]",
      ],
    },
  ],
  tables: [
    {
      heading: "Tokyo 2018 severity grading - cholecystitis versus cholangitis",
      columns: ["Grade", "Acute cholecystitis", "Acute cholangitis", "Action"],
      rows: [
        [
          "Grade III (severe)",
          "Any organ dysfunction: hypotension on vasopressor, reduced consciousness, PaO2/FiO2 < 300, creatinine > 2.0 mg/dL or oliguria, INR > 1.5, platelets < 100,000",
          "Same organ dysfunction list",
          "ICU support; urgent drainage (cholangitis) or PTGBD; early LC only at advanced centre with favourable predictors",
        ],
        [
          "Grade II (moderate)",
          "Any one: WBC > 18,000; tender RUQ mass; symptoms > 72 h; marked local inflammation (gangrenous, emphysematous, abscess, biliary peritonitis)",
          "Any two: WBC > 12,000 or < 4,000; fever >= 39 C; age >= 75; bilirubin >= 5 mg/dL; hypoalbuminaemia",
          "Early LC in experienced centre or PTGBD; early ERCP drainage for cholangitis",
        ],
        [
          "Grade I (mild)",
          "None of the above; healthy patient with mild inflammation",
          "None of the above",
          "Early LC; antibiotics and drainage if no response in 24 h (cholangitis)",
        ],
      ],
    },
    {
      heading: "ASGE 2019 risk of choledocholithiasis",
      columns: ["Risk", "Predictors (any one)", "Next step"],
      rows: [
        [
          "High",
          "CBD stone on ultrasound or cross-sectional imaging; total bilirubin > 4 mg/dL plus dilated CBD; ascending cholangitis",
          "ERCP (pre-operative) or laparoscopic CBD exploration at cholecystectomy",
        ],
        [
          "Intermediate",
          "Abnormal liver biochemistry; age > 55 years; dilated CBD on imaging",
          "EUS or MRCP (or intra-operative cholangiography / laparoscopic ultrasound)",
        ],
        ["Low", "None of the above", "Cholecystectomy without further ductal imaging"],
      ],
    },
    {
      heading: "Drugs in gallstone disease",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        [
          "Diclofenac",
          "75 mg IM once, or 50 mg orally 8-hourly; or 100 mg rectally",
          "Single dose to 48 h for colic; rectal 100 mg peri-ERCP",
          "Peptic ulcer, AKI, avoid in CKD, third trimester, asthma with NSAID sensitivity",
        ],
        [
          "Ketorolac",
          "30 mg IV/IM (15 mg if over 65 years or under 50 kg) 6-hourly",
          "Maximum 5 days",
          "GI bleeding, renal impairment",
        ],
        [
          "Ceftriaxone + metronidazole",
          "Ceftriaxone 2 g IV once daily + metronidazole 500 mg IV 8-hourly",
          "Grade I-II; stop within 24 h of cholecystectomy; 4-7 days after drainage in cholangitis",
          "Biliary sludge with ceftriaxone, disulfiram reaction with metronidazole",
        ],
        [
          "Piperacillin-tazobactam",
          "4.5 g IV 6- to 8-hourly (extended infusion in sepsis)",
          "Grade II-III cholangitis or healthcare-associated infection; 4-7 days after source control",
          "Penicillin allergy, hypokalaemia, adjust in renal failure",
        ],
        [
          "Meropenem",
          "1 g IV 8-hourly",
          "Grade III or known ESBL; de-escalate by culture",
          "Seizures (rare), C. difficile, reserve drug - antimicrobial stewardship",
        ],
        [
          "Ursodeoxycholic acid (UDCA)",
          "10-15 mg/kg/day orally in divided doses; 500-600 mg/day for prophylaxis",
          "6-24 months for dissolution; 6 months after bariatric surgery",
          "Diarrhoea; useless for pigment, calcified or large stones and non-functioning gallbladder",
        ],
      ],
    },
    {
      heading: "Differential diagnosis of RUQ pain with or without jaundice",
      columns: ["Condition", "Clinical clue", "Discriminating test"],
      rows: [
        ["Biliary colic", "Steady RUQ pain 30 min to 6 h after fatty meal, afebrile", "USG: stones, normal wall"],
        ["Acute cholecystitis", "Pain > 6 h, fever, Murphy sign", "USG: wall > 4 mm, pericholecystic fluid; HIDA non-filling"],
        ["Acute cholangitis", "Fever with rigors, jaundice, RUQ pain", "Raised bilirubin and ALP, dilated CBD"],
        ["Acute pancreatitis", "Epigastric pain to back, vomiting", "Lipase > 3 times ULN"],
        ["Acute viral hepatitis", "Prodrome, tender liver, jaundice", "ALT in thousands, IgM anti-HAV / anti-HEV"],
        ["Liver abscess", "Fever, tender hepatomegaly, intercostal tenderness", "USG: hypoechoic lesion"],
        ["Inferior wall MI", "Diabetic or elderly, sweating", "ECG, troponin"],
        ["Gallbladder cancer", "Older woman, weight loss, hard mass, painless jaundice", "CECT: mass, CA 19-9 raised"],
      ],
    },
    {
      heading: "Key investigations and cut-offs",
      columns: ["Test", "Use", "Cut-off / finding"],
      rows: [
        ["Ultrasound abdomen", "First test for stones and cholecystitis", "Sensitivity > 95% for GB stones; wall > 4 mm; CBD > 6 mm dilated"],
        ["HIDA scan", "Equivocal cholecystitis", "Non-visualisation of gallbladder at 4 h"],
        ["MRCP", "Intermediate-risk CBD stone", "Sensitivity about 90%; poorer for stones < 5 mm"],
        ["EUS", "Intermediate risk, microlithiasis", "Most sensitive for small CBD stones"],
        ["ERCP", "Therapy: high-risk CBD stone, cholangitis", "Post-ERCP pancreatitis 3-10%"],
        ["CECT abdomen", "Complications, suspected GBC", "Gas in wall, perforation, mass, nodes"],
        ["Bilirubin", "ASGE risk and TG18 grading", "> 4 mg/dL plus dilated duct = high risk; >= 5 mg/dL = cholangitis Grade II factor"],
      ],
    },
  ],
  redFlags: [
    "Fever with rigors plus jaundice - acute cholangitis needing antibiotics and biliary drainage",
    "Hypotension, confusion, oliguria or INR > 1.5 with biliary sepsis - TG18 Grade III",
    "RUQ pain lasting more than 6 hours or a tender RUQ mass - acute cholecystitis or empyema",
    "Generalised peritonitis or gas in the gallbladder wall - perforation or emphysematous cholecystitis",
    "Biliary pain with lipase over 3 times ULN - gallstone pancreatitis",
    "Painless progressive jaundice, weight loss or a hard RUQ mass - gallbladder or periampullary cancer",
    "Vomiting and distension in an elderly woman with known stones - gallstone ileus",
  ],
  pearls: [
    "Biliary colic is a misnomer - the pain is **steady**, lasting 30 minutes to 6 hours.",
    "**Charcot triad** is specific but insensitive (about 26%) - use TG18 A + B + C criteria.",
    "Cholangitis is cured by **drainage**, not by antibiotics alone.",
    "ASGE high risk: **stone seen, bilirubin over 4 with dilated duct, or cholangitis** - go to ERCP.",
    "**Courvoisier law**: palpable non-tender gallbladder with jaundice is unlikely to be stones.",
    "**Rigler triad** of gallstone ileus: pneumobilia, small-bowel obstruction, ectopic stone.",
    "Asymptomatic stones are left alone - except porcelain gallbladder, stones over 3 cm, polyp 10 mm or more, haemolytic disease.",
    "In North India, send **every cholecystectomy specimen for histopathology** - incidental GBC is not rare.",
    "**Critical view of safety** prevents bile duct injury in laparoscopic cholecystectomy.",
  ],
  mcqs: [
    {
      id: "gastro-hepatology-gallstones-biliary-q1",
      stem: "A 62-year-old man has fever 39.4 C with rigors, jaundice and RUQ pain. WBC 14,800/mm3, bilirubin 6.2 mg/dL, BP 118/74 mmHg, sensorium normal, creatinine 1.0 mg/dL, INR 1.1. Ultrasound shows a dilated CBD with a distal stone. According to TG18, what is the severity grade?",
      options: [
        "Grade I (mild) cholangitis",
        "Grade II (moderate) cholangitis",
        "Grade III (severe) cholangitis",
        "Suspected, not definite, cholangitis",
      ],
      answer: 1,
      explanation:
        "He meets definite cholangitis (systemic inflammation, cholestasis and imaging). Grade II needs any two of WBC over 12,000, fever 39 C or more, age 75 or more, bilirubin 5 mg/dL or more or hypoalbuminaemia - he has three. Grade III needs organ dysfunction, which he does not have, and Grade I is excluded because Grade II factors are present. Grade II needs early ERCP drainage.",
      difficulty: "moderate",
    },
    {
      id: "gastro-hepatology-gallstones-biliary-q2",
      stem: "A 48-year-old woman with symptomatic gallstones has ALT 110 IU/L, bilirubin 1.6 mg/dL and a CBD of 7 mm on ultrasound with no stone seen. She has no fever. Per ASGE 2019, the best next step is:",
      options: [
        "Direct ERCP with sphincterotomy",
        "Laparoscopic cholecystectomy without further imaging",
        "EUS or MRCP to look for a CBD stone",
        "Oral ursodeoxycholic acid for 6 months",
      ],
      answer: 2,
      explanation:
        "Abnormal liver tests and a dilated CBD are intermediate-risk predictors, so a CBD stone should be confirmed by EUS or MRCP before ERCP. Direct ERCP is reserved for high risk (stone on imaging, bilirubin over 4 with dilated duct, or cholangitis). Cholecystectomy without ductal imaging is for low risk only. UDCA does not clear CBD stones.",
      difficulty: "moderate",
    },
    {
      id: "gastro-hepatology-gallstones-biliary-q3",
      stem: "Which finding in an asymptomatic patient with gallstones is an accepted indication for prophylactic cholecystectomy?",
      options: [
        "Postprandial bloating and belching",
        "Multiple 4 mm stones in a normal gallbladder",
        "Type 2 diabetes mellitus",
        "A 12 mm gallbladder polyp alongside the stones",
      ],
      answer: 3,
      explanation:
        "A gallbladder polyp of 10 mm or more carries malignant potential and is an indication for cholecystectomy (ESGAR 2022). Bloating and belching are not biliary symptoms and persist after surgery. Small stones alone do not justify surgery, and diabetes is no longer considered an indication for prophylactic cholecystectomy.",
      difficulty: "easy",
    },
    {
      id: "gastro-hepatology-gallstones-biliary-q4",
      stem: "A 74-year-old woman has colicky abdominal pain, distension and bilious vomiting. Plain X-ray shows dilated small-bowel loops, air in the biliary tree and a rounded opacity in the right iliac fossa. The diagnosis is:",
      options: [
        "Gallstone ileus",
        "Mirizzi syndrome",
        "Emphysematous cholecystitis",
        "Bouveret syndrome",
      ],
      answer: 0,
      explanation:
        "Rigler triad - pneumobilia, small-bowel obstruction and an ectopic gallstone (usually at the ileocaecal valve) - defines gallstone ileus through a cholecystoduodenal fistula. Bouveret syndrome is gastric outlet obstruction from a duodenal stone, not distal small-bowel obstruction. Mirizzi syndrome causes jaundice by extrinsic hepatic duct compression, and emphysematous cholecystitis shows gas in the gallbladder wall, not obstruction.",
      difficulty: "easy",
    },
    {
      id: "gastro-hepatology-gallstones-biliary-q5",
      stem: "A 40-year-old woman with acute calculous cholecystitis, Grade I by TG18, was admitted 2 days after pain began. She is otherwise fit. What does TG18 recommend?",
      options: [
        "Antibiotics now and interval cholecystectomy after 6-8 weeks",
        "Percutaneous gallbladder drainage followed by antibiotics",
        "Early laparoscopic cholecystectomy during this admission",
        "Oral UDCA and dietary fat restriction",
      ],
      answer: 2,
      explanation:
        "TG18 recommends early laparoscopic cholecystectomy for Grade I cholecystitis, ideally within 72 hours and acceptable within 7 days of admission. Interval surgery after 6-8 weeks has higher readmission and recurrence rates. Percutaneous drainage is for high-risk patients with Grade II-III disease who cannot tolerate surgery, and UDCA has no role in acute cholecystitis.",
      difficulty: "easy",
    },
  ],
  theory: [
    {
      id: "gastro-hepatology-gallstones-biliary-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "core",
      question:
        "Discuss the aetiopathogenesis, clinical features, diagnosis (Tokyo 2018 criteria) and management of acute cholangitis.",
      openingLines: [
        "Acute cholangitis is infection of an obstructed biliary tree, most often by a CBD stone, in which raised intraductal pressure drives bacteria and endotoxin into the blood.",
        "It is diagnosed and graded by the Tokyo 2018 (TG18) criteria, and its cure is antibiotics plus timely biliary drainage, usually by ERCP.",
      ],
      answer: [
        {
          heading: "Aetiology",
          points: [
            "CBD stones (commonest), benign stricture, malignant obstruction (periampullary, cholangiocarcinoma, GBC), blocked stent, post-ERCP, parasites (Ascaris), recurrent pyogenic cholangitis.",
            "Organisms: E. coli, Klebsiella, Enterococcus, Enterobacter, anaerobes (Bacteroides) in elderly or post-anastomosis.",
          ],
        },
        {
          heading: "Pathogenesis",
          points: [
            "Obstruction plus bacterial colonisation; intraductal pressure above 20-25 cm H2O opens tight junctions and causes cholangiovenous and cholangiolymphatic reflux.",
            "Bacteraemia and endotoxaemia lead to sepsis and organ failure - the reason drainage is curative.",
          ],
        },
        {
          heading: "Clinical features",
          points: [
            "Charcot triad (fever with rigors, RUQ pain, jaundice) in only about a quarter; Reynolds pentad adds shock and confusion.",
            "Elderly may present with confusion or hypotension alone.",
          ],
        },
        {
          heading: "TG18 diagnostic criteria",
          points: [
            "A: fever > 38 C or rigors; WBC < 4,000 or > 10,000, CRP >= 1 mg/dL.",
            "B: bilirubin >= 2 mg/dL; ALP, GGT, AST, ALT > 1.5 times ULN.",
            "C: biliary dilatation or evidence of cause on imaging. Suspected = A + B or C; definite = A + B + C.",
          ],
        },
        {
          heading: "Severity grading",
          points: [
            "Grade III: any organ dysfunction (vasopressor, confusion, PaO2/FiO2 < 300, creatinine > 2, INR > 1.5, platelets < 1 lakh).",
            "Grade II: two of WBC > 12,000 or < 4,000, fever >= 39 C, age >= 75, bilirubin >= 5 mg/dL, hypoalbuminaemia.",
            "Grade I: neither.",
          ],
        },
        {
          heading: "Investigations",
          points: [
            "CBC, CRP, LFT, lipase, creatinine, INR, lactate, blood cultures; ultrasound; MRCP or CECT if cause unclear.",
          ],
        },
        {
          heading: "Management",
          points: [
            "Resuscitation, blood cultures, antibiotics within 1 hour if septic: ceftriaxone + metronidazole (Grade I-II) or piperacillin-tazobactam / meropenem (Grade III).",
            "Drainage: Grade I if no response in 24 h; Grade II early (24-48 h); Grade III urgent after stabilisation - ERCP with sphincterotomy and stone extraction or stent; PTBD if ERCP fails.",
            "Antibiotics 4-7 days after source control; cholecystectomy in same admission once stable.",
          ],
        },
      ],
      mustDraw: [
        "TG18 diagnostic criteria A-B-C box and severity grading table",
        "Flow chart: suspected cholangitis to grade to timing of drainage",
      ],
      markSplit: [
        { part: "Definition, aetiology and pathogenesis", marks: 2 },
        { part: "Clinical features and TG18 criteria", marks: 3 },
        { part: "Investigations", marks: 1 },
        { part: "Management including drainage timing", marks: 4 },
      ],
      keywords: ["Charcot triad", "Reynolds pentad", "TG18", "ERCP", "PTBD", "biliary drainage"],
    },
    {
      id: "gastro-hepatology-gallstones-biliary-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "common",
      question: "Write a short note on management of asymptomatic gallstones and choledocholithiasis risk stratification.",
      openingLines: [
        "Asymptomatic gallstones develop symptoms at only 1-4% per year, so expectant management is the rule.",
        "The ASGE 2019 guideline stratifies the probability of a CBD stone into high, intermediate and low risk to decide between ERCP, EUS/MRCP and direct cholecystectomy.",
      ],
      answer: [
        {
          heading: "Asymptomatic stones",
          points: [
            "Reassure; no routine cholecystectomy.",
            "Exceptions: porcelain gallbladder, stones > 3 cm, polyp >= 10 mm, haemolytic anaemia, during bariatric surgery; in high-GBC regions of North India surgery is often offered for large long-standing stones.",
          ],
        },
        {
          heading: "ASGE 2019 risk",
          points: [
            "High: CBD stone on imaging, bilirubin > 4 mg/dL with dilated duct, or cholangitis - ERCP.",
            "Intermediate: abnormal LFT, age > 55, dilated CBD - EUS or MRCP.",
            "Low: none - cholecystectomy.",
          ],
        },
        {
          heading: "After ductal clearance",
          points: ["Cholecystectomy in the same admission or within 2 weeks; send specimen for histopathology."],
        },
      ],
      mustDraw: ["ASGE 2019 three-tier flow chart"],
      markSplit: [
        { part: "Asymptomatic stones and exceptions", marks: 2 },
        { part: "ASGE risk stratification flow", marks: 3 },
      ],
      keywords: ["asymptomatic gallstones", "porcelain gallbladder", "ASGE 2019", "MRCP", "EUS"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - Diseases of the gallbladder and bile ducts",
    "Tokyo Guidelines 2018 (TG18): diagnostic criteria, severity grading and management of acute cholangitis and cholecystitis, J Hepatobiliary Pancreat Sci 2018",
    "ASGE guideline on the role of endoscopy in the evaluation and management of choledocholithiasis, Gastrointest Endosc 2019",
    "ESGE guideline: Endoscopic management of common bile duct stones, update 2019",
    "EASL Clinical Practice Guidelines on the prevention, diagnosis and treatment of gallstones, J Hepatol 2016",
    "ESGAR/EAES/EFISDS/ESGE joint guideline on gallbladder polyps, Eur Radiol 2022",
    "WSES guidelines on acute calculous cholecystitis, World J Emerg Surg 2020",
    "ICMR Consensus Document for Management of Gallbladder Cancer, ICMR; ICMR-NCDIR Report of National Cancer Registry Programme 2020",
  ],
});

export default topics;
