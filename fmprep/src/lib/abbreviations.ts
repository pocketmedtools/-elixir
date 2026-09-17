/**
 * Medical short forms, so a search finds a chart written the other way round.
 *
 * A reader types what an examiner says. "GCS" found seven charts and "Glasgow"
 * two, because the index only ever held the literal words: a chart headed
 * "Glasgow Coma Scale" was invisible to "GCS", and one headed "GCS" invisible
 * to anyone who spelled it out. Neither is a spelling mistake - they are the
 * same thing, and the search has to know it.
 *
 * Expansion happens at query time rather than by padding 1,330 haystacks with
 * synonyms: a term matches if the entry contains the term OR any of its
 * alternates, which gets both directions from one table and keeps the index
 * honest about what it actually holds.
 *
 * Keys are lowercase. Both directions are derived, so each pair is written once.
 */

/** short form -> what it stands for. */
export const ABBREVIATIONS: Record<string, string[]> = {
  // Scores, scales and criteria
  gcs: ["glasgow coma scale", "glasgow coma"],
  nyha: ["new york heart association"],
  ccs: ["canadian cardiovascular society"],
  "curb-65": ["curb65"],
  curb: ["curb-65", "curb65"],
  psi: ["pneumonia severity index"],
  apgar: ["appearance pulse grimace activity respiration"],
  mmse: ["mini mental state examination", "mini-mental"],
  moca: ["montreal cognitive assessment"],
  phq: ["patient health questionnaire"],
  "phq-9": ["patient health questionnaire"],
  gad: ["generalised anxiety disorder", "generalized anxiety disorder"],
  "gad-7": ["generalised anxiety disorder"],
  audit: ["alcohol use disorders identification test"],
  cage: ["cut down annoyed guilty eye-opener"],
  ciwa: ["clinical institute withdrawal assessment"],
  ess: ["epworth sleepiness scale"],
  edss: ["expanded disability status scale"],
  "cha2ds2-vasc": ["cha2ds2", "chads"],
  "cha2ds2-va": ["cha2ds2"],
  "has-bled": ["hasbled"],
  meld: ["model for end stage liver disease"],
  ranson: ["ranson criteria"],
  bisap: ["bedside index of severity in acute pancreatitis"],
  qsofa: ["quick sofa"],
  sofa: ["sequential organ failure assessment"],
  sirs: ["systemic inflammatory response syndrome"],
  news: ["national early warning score"],
  rcri: ["revised cardiac risk index"],
  hints: ["head impulse nystagmus test of skew"],
  fast: ["face arm speech time"],
  nihss: ["nih stroke scale"],
  abcd2: ["abcd2 score"],
  wells: ["wells score", "wells criteria"],
  perc: ["pulmonary embolism rule out criteria"],
  ottawa: ["ottawa rules"],
  centor: ["centor criteria", "mcisaac"],
  mcisaac: ["centor"],
  asa: ["american society of anesthesiologists", "aspirin", "acetylsalicylic acid"],
  bmi: ["body mass index"],
  muac: ["mid upper arm circumference", "mid-upper arm circumference"],
  sga: ["small for gestational age", "subjective global assessment"],

  // Cardiovascular
  mi: ["myocardial infarction"],
  ami: ["acute myocardial infarction"],
  acs: ["acute coronary syndrome"],
  stemi: ["st elevation myocardial infarction"],
  nstemi: ["non st elevation myocardial infarction"],
  ihd: ["ischaemic heart disease", "ischemic heart disease"],
  cad: ["coronary artery disease"],
  chf: ["congestive heart failure"],
  hf: ["heart failure"],
  hfref: ["heart failure with reduced ejection fraction"],
  hfpef: ["heart failure with preserved ejection fraction"],
  af: ["atrial fibrillation"],
  svt: ["supraventricular tachycardia"],
  vt: ["ventricular tachycardia"],
  vf: ["ventricular fibrillation"],
  lvh: ["left ventricular hypertrophy"],
  ef: ["ejection fraction"],
  bp: ["blood pressure"],
  htn: ["hypertension"],
  dvt: ["deep vein thrombosis"],
  pe: ["pulmonary embolism", "pre-eclampsia", "preeclampsia"],
  pad: ["peripheral arterial disease"],
  abi: ["ankle brachial index"],
  rhd: ["rheumatic heart disease"],
  arf: ["acute rheumatic fever", "acute renal failure"],
  ecg: ["electrocardiogram", "ekg"],
  echo: ["echocardiogram", "echocardiography"],
  pci: ["percutaneous coronary intervention"],
  cabg: ["coronary artery bypass"],
  arni: ["angiotensin receptor neprilysin inhibitor"],
  acei: ["ace inhibitor", "angiotensin converting enzyme"],
  arb: ["angiotensin receptor blocker"],
  ldl: ["low density lipoprotein"],
  hdl: ["high density lipoprotein"],
  tg: ["triglyceride"],
  cvd: ["cardiovascular disease"],
  ascvd: ["atherosclerotic cardiovascular disease"],

  // Respiratory
  copd: ["chronic obstructive pulmonary disease"],
  cap: ["community acquired pneumonia"],
  hap: ["hospital acquired pneumonia"],
  ards: ["acute respiratory distress syndrome"],
  osa: ["obstructive sleep apnoea", "obstructive sleep apnea"],
  ild: ["interstitial lung disease"],
  fev1: ["forced expiratory volume"],
  fvc: ["forced vital capacity"],
  pefr: ["peak expiratory flow"],
  abg: ["arterial blood gas"],
  ltot: ["long term oxygen therapy"],
  niv: ["non invasive ventilation"],
  tb: ["tuberculosis"],
  dots: ["directly observed treatment"],
  mdr: ["multidrug resistant"],
  ntep: ["national tuberculosis elimination programme"],
  cxr: ["chest radiograph", "chest x-ray", "chest xray"],

  // Endocrine and metabolic
  dm: ["diabetes mellitus"],
  t1dm: ["type 1 diabetes"],
  t2dm: ["type 2 diabetes"],
  gdm: ["gestational diabetes"],
  dka: ["diabetic ketoacidosis"],
  hhs: ["hyperosmolar hyperglycaemic state", "hyperosmolar hyperglycemic state"],
  ogtt: ["oral glucose tolerance test"],
  hba1c: ["glycated haemoglobin", "glycosylated haemoglobin"],
  tsh: ["thyroid stimulating hormone"],
  t3: ["triiodothyronine"],
  t4: ["thyroxine"],
  pcos: ["polycystic ovary syndrome"],
  sglt2: ["sodium glucose cotransporter"],
  "glp-1": ["glucagon like peptide"],

  // Renal and urology
  ckd: ["chronic kidney disease"],
  aki: ["acute kidney injury"],
  egfr: ["estimated glomerular filtration rate", "glomerular filtration"],
  gfr: ["glomerular filtration rate"],
  uti: ["urinary tract infection"],
  bph: ["benign prostatic hyperplasia"],
  luts: ["lower urinary tract symptoms"],
  psa: ["prostate specific antigen"],
  acr: ["albumin creatinine ratio"],
  rrt: ["renal replacement therapy"],
  esrd: ["end stage renal disease"],

  // Neurology
  cva: ["cerebrovascular accident", "stroke"],
  tia: ["transient ischaemic attack", "transient ischemic attack"],
  sah: ["subarachnoid haemorrhage", "subarachnoid hemorrhage"],
  icp: ["intracranial pressure"],
  csf: ["cerebrospinal fluid"],
  eeg: ["electroencephalogram"],
  emg: ["electromyography"],
  ncs: ["nerve conduction study"],
  gbs: ["guillain barre", "group b streptococcus"],
  ms: ["multiple sclerosis"],
  pd: ["parkinson disease", "peritoneal dialysis"],
  bppv: ["benign paroxysmal positional vertigo"],
  lmn: ["lower motor neurone", "lower motor neuron"],
  umn: ["upper motor neurone", "upper motor neuron"],
  ct: ["computed tomography"],
  mri: ["magnetic resonance imaging"],

  // Obstetrics and gynaecology
  anc: ["antenatal care"],
  pph: ["postpartum haemorrhage", "post partum haemorrhage"],
  iugr: ["intrauterine growth restriction"],
  pprom: ["preterm prelabour rupture of membranes"],
  prom: ["prelabour rupture of membranes", "premature rupture of membranes"],
  lscs: ["lower segment caesarean", "caesarean section"],
  ocp: ["oral contraceptive pill"],
  iud: ["intrauterine device"],
  "iucd": ["intrauterine contraceptive device"],
  hrt: ["hormone replacement therapy"],
  pid: ["pelvic inflammatory disease"],
  aub: ["abnormal uterine bleeding"],
  mtp: ["medical termination of pregnancy"],
  edd: ["expected date of delivery"],
  lmp: ["last menstrual period"],
  ifa: ["iron folic acid"],

  // Paediatrics
  sam: ["severe acute malnutrition"],
  mam: ["moderate acute malnutrition"],
  ors: ["oral rehydration solution", "oral rehydration salts"],
  imnci: ["integrated management of neonatal and childhood illness"],
  uip: ["universal immunisation programme", "universal immunization programme"],
  aefi: ["adverse event following immunisation"],
  bcg: ["bacille calmette guerin"],
  dpt: ["diphtheria pertussis tetanus"],
  opv: ["oral polio vaccine"],
  hbnc: ["home based newborn care"],
  lbw: ["low birth weight"],
  nnj: ["neonatal jaundice"],
  rds: ["respiratory distress syndrome"],
  adhd: ["attention deficit hyperactivity disorder"],

  // Infectious disease
  hiv: ["human immunodeficiency virus"],
  aids: ["acquired immunodeficiency syndrome"],
  art: ["antiretroviral therapy"],
  pep: ["post exposure prophylaxis"],
  prep: ["pre exposure prophylaxis"],
  sti: ["sexually transmitted infection"],
  rti: ["reproductive tract infection", "respiratory tract infection"],
  hbv: ["hepatitis b"],
  hcv: ["hepatitis c"],
  hbsag: ["hepatitis b surface antigen"],
  dengue: ["dhf", "dss"],
  amr: ["antimicrobial resistance"],
  ssti: ["skin and soft tissue infection"],

  // Gastro and liver
  gerd: ["gastro oesophageal reflux", "gastroesophageal reflux"],
  gord: ["gastro oesophageal reflux"],
  ibs: ["irritable bowel syndrome"],
  ibd: ["inflammatory bowel disease"],
  uc: ["ulcerative colitis"],
  cld: ["chronic liver disease"],
  nafld: ["non alcoholic fatty liver"],
  masld: ["metabolic dysfunction associated steatotic liver"],
  ugib: ["upper gastrointestinal bleeding"],
  lft: ["liver function test"],
  "h pylori": ["helicobacter pylori"],
  hpylori: ["helicobacter pylori"],
  ppi: ["proton pump inhibitor"],

  // Musculoskeletal, skin, eye and ENT
  ra: ["rheumatoid arthritis"],
  oa: ["osteoarthritis"],
  sle: ["systemic lupus erythematosus"],
  axspa: ["axial spondyloarthritis"],
  as: ["ankylosing spondylitis"],
  nsaid: ["non steroidal anti inflammatory"],
  dmard: ["disease modifying antirheumatic drug"],
  csom: ["chronic suppurative otitis media"],
  om: ["otitis media"],
  aom: ["acute otitis media"],
  ome: ["otitis media with effusion"],
  arc: ["allergic rhinoconjunctivitis"],
  iop: ["intraocular pressure"],
  poag: ["primary open angle glaucoma"],
  pacg: ["primary angle closure glaucoma"],
  dr: ["diabetic retinopathy"],
  armd: ["age related macular degeneration"],
  amd: ["age related macular degeneration"],

  // Practice, public health and exam
  phc: ["primary health centre"],
  chc: ["community health centre"],
  asha: ["accredited social health activist"],
  anm: ["auxiliary nurse midwife"],
  nhm: ["national health mission"],
  ncd: ["non communicable disease"],
  imr: ["infant mortality rate"],
  mmr: ["maternal mortality ratio", "measles mumps rubella"],
  u5mr: ["under five mortality rate"],
  tfr: ["total fertility rate"],
  dalys: ["disability adjusted life years"],
  daly: ["disability adjusted life year"],
  qaly: ["quality adjusted life year"],
  rct: ["randomised controlled trial", "randomized controlled trial"],
  nnt: ["number needed to treat"],
  nnh: ["number needed to harm"],
  rr: ["relative risk", "respiratory rate"],
  or: ["odds ratio"],
  ci: ["confidence interval"],
  ebm: ["evidence based medicine"],
  sop: ["standard operating procedure"],
  osce: ["objective structured clinical examination"],
  pyq: ["previous year question"],
  cgt: ["comprehensive geriatric assessment"],
  cga: ["comprehensive geriatric assessment"],
  adl: ["activities of daily living"],
  iadl: ["instrumental activities of daily living"],
  eol: ["end of life"],
};

/** what it stands for -> short form, derived so each pair is written once. */
const REVERSE: Record<string, string[]> = (() => {
  const out: Record<string, string[]> = {};
  for (const [short, longs] of Object.entries(ABBREVIATIONS))
    for (const long of longs) (out[long] ??= []).push(short);
  return out;
})();

/**
 * Every spelling a search term should also match. Always includes the term
 * itself, so a word with no entry behaves exactly as before.
 */
export function alternates(term: string): string[] {
  const t = term.toLowerCase();
  const out = new Set<string>([t]);
  for (const x of ABBREVIATIONS[t] ?? []) out.add(x);
  for (const x of REVERSE[t] ?? []) out.add(x);
  // A long form typed in part ("glasgow coma") should still reach its short form.
  for (const [long, shorts] of Object.entries(REVERSE))
    if (long.includes(t) && t.length >= 4) for (const s of shorts) out.add(s);
  return [...out];
}

export const ABBREVIATION_COUNT = Object.keys(ABBREVIATIONS).length;
