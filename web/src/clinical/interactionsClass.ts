/**
 * Class-level drug interactions, expanded into explicit pairs.
 *
 * The curated pair list covers 58 interactions; these rules add the
 * well-established class effects (Stockley / BNF Appendix 1 / Lexicomp
 * "major" or "avoid" level) for every member drug present in the app.
 * A curated pair always wins — rules never duplicate or override it.
 */
import type { PracticalInteraction } from "./types";

type Rule = {
  a: string[];
  b: string[];
  severity: PracticalInteraction["severity"];
  effect: string;
  action: string;
};

const NSAIDS = ["ibuprofen", "diclofenac", "naproxen", "indomethacin", "mefenamic-acid", "piroxicam", "ketorolac", "etoricoxib", "celecoxib"];
const ANTIPLATELETS = ["aspirin", "clopidogrel", "ticagrelor", "cilostazol"];
const DOACS = ["apixaban", "rivaroxaban", "edoxaban", "dabigatran"];
const STRONG_INDUCERS = ["rifampicin", "carbamazepine", "phenytoin", "phenobarbital"];
const STRONG_3A4_INHIBITORS = ["clarithromycin", "erythromycin", "itraconazole-adult", "posaconazole", "voriconazole"];
const SSRI_SNRI = ["sertraline", "escitalopram", "fluoxetine", "paroxetine", "fluvoxamine", "duloxetine", "venlafaxine"];
const TCAS = ["imipramine", "nortriptyline"];
const SEROTONERGIC_OPIOIDS = ["tramadol", "tapentadol", "methadone"];
const TRIPTANS = ["sumatriptan", "rizatriptan"];
const ACEI = ["enalapril", "ramipril", "perindopril", "lisinopril", "captopril"];
const ARB = ["telmisartan", "losartan", "olmesartan", "valsartan", "irbesartan", "azilsartan"];
const THIAZIDES = ["hydrochlorothiazide", "chlorthalidone", "indapamide"];
const BETA_BLOCKERS = ["atenolol", "metoprolol", "bisoprolol", "propranolol", "carvedilol", "nebivolol", "labetalol", "sotalol"];
const SULFONYLUREAS = ["glimepiride", "gliclazide", "glipizide", "glibenclamide"];
const BENZODIAZEPINES = ["diazepam", "diazepam-adult", "lorazepam", "clonazepam", "alprazolam", "clobazam"];
const OPIOIDS = ["morphine", "oxycodone", "tapentadol", "tramadol", "codeine", "methadone", "buprenorphine", "fentanyl-patch"];
const STATINS_3A4 = ["atorvastatin"];
const STATINS = ["atorvastatin", "rosuvastatin", "pravastatin", "pitavastatin"];
const NITRATES = ["isosorbide-mononitrate", "glyceryl-trinitrate"];
const PDE5 = ["sildenafil", "tadalafil"];
const CALCINEURIN = ["cyclosporine", "tacrolimus"];
/** Known-risk QT prolongers (CredibleMeds "known risk of TdP"). */
const QT_HIGH = ["amiodarone", "dronedarone", "sotalol"];
const QT_OTHER = ["haloperidol", "chlorpromazine", "ziprasidone", "methadone", "domperidone", "ondansetron", "clarithromycin", "erythromycin", "azithromycin", "levofloxacin", "ciprofloxacin", "fluconazole", "voriconazole", "escitalopram", "hydroxychloroquine", "chloroquine", "quinine"];

const RULES: Rule[] = [
  { a: ["warfarin"], b: [...NSAIDS, ...ANTIPLATELETS], severity: "Major",
    effect: "Additive bleeding risk (antiplatelet effect and gastric mucosal injury) on top of anticoagulation; NSAIDs may also raise the INR.",
    action: "Avoid unless clearly indicated (e.g. specialist-directed antiplatelet therapy). If unavoidable: gastroprotection with a PPI, close INR and bleeding monitoring; prefer paracetamol for pain." },
  { a: ["warfarin"], b: ["cotrimoxazole", "amiodarone", "voriconazole", "itraconazole-adult", "clarithromycin", "erythromycin", "ciprofloxacin", "levofloxacin", "tinidazole", "ornidazole", "secnidazole"], severity: "Major",
    effect: "Raises the INR (CYP2C9/3A4 inhibition or reduced vitamin K flora) — risk of serious bleeding.",
    action: "Check INR within 3–5 days of starting and after stopping; reduce warfarin as needed (amiodarone usually needs a 30–50% dose reduction)." },
  { a: ["warfarin"], b: STRONG_INDUCERS, severity: "Major",
    effect: "Enzyme induction lowers warfarin levels — INR falls and clots may recur; INR rises when the inducer is stopped.",
    action: "Monitor INR closely when starting or stopping the inducer; large warfarin dose changes are often needed." },
  { a: DOACS, b: STRONG_INDUCERS, severity: "Major",
    effect: "Strong CYP3A4/P-gp induction markedly lowers DOAC levels — loss of anticoagulant effect (stroke / VTE risk).",
    action: "Avoid the combination; use an alternative anticoagulant (e.g. warfarin with INR monitoring or LMWH)." },
  { a: DOACS, b: [...NSAIDS, ...ANTIPLATELETS], severity: "Major",
    effect: "Additive bleeding risk.",
    action: "Combine only with a clear indication (e.g. recent ACS/stent, specialist plan) for the shortest time; add a PPI; avoid NSAIDs." },
  { a: ["apixaban", "rivaroxaban", "edoxaban"], b: STRONG_3A4_INHIBITORS, severity: "Major",
    effect: "Strong CYP3A4/P-gp inhibition raises DOAC levels — bleeding risk.",
    action: "Avoid strong azoles/clarithromycin with rivaroxaban/apixaban; choose a non-interacting antimicrobial or monitor closely for bleeding." },
  { a: ["dabigatran", "edoxaban"], b: ["clarithromycin", "verapamil", "amiodarone", "dronedarone"], severity: "Major",
    effect: "P-gp inhibition raises dabigatran/edoxaban levels — bleeding risk (dronedarone + dabigatran is contraindicated).",
    action: "Avoid dronedarone; otherwise reduce the DOAC dose per label (e.g. dabigatran 110 mg BD with verapamil) and monitor renal function and bleeding." },
  { a: ["linezolid"], b: [...SSRI_SNRI, ...TCAS, ...SEROTONERGIC_OPIOIDS, ...TRIPTANS], severity: "Major",
    effect: "Linezolid is a reversible MAO inhibitor — serotonin syndrome (agitation, hyperthermia, clonus, autonomic instability).",
    action: "Avoid; if linezolid is essential, stop the serotonergic drug (washout) or monitor closely for serotonin toxicity for 2 weeks." },
  { a: ["tramadol", "tapentadol"], b: [...SSRI_SNRI, ...TCAS], severity: "Major",
    effect: "Serotonin syndrome and lowered seizure threshold; CYP2D6 inhibitors (fluoxetine, paroxetine) also reduce tramadol analgesia.",
    action: "Prefer a non-serotonergic analgesic; if combined, use the lowest dose and counsel on serotonin toxicity and seizures." },
  { a: TRIPTANS, b: SSRI_SNRI, severity: "Moderate",
    effect: "Rare serotonin syndrome.",
    action: "Usually acceptable; counsel the patient and stop if agitation, tremor or hyperthermia occur." },
  { a: ["lithium"], b: [...NSAIDS, ...ACEI, ...ARB, ...THIAZIDES], severity: "Major",
    effect: "Reduced renal lithium clearance — lithium toxicity (tremor, confusion, ataxia, arrhythmia).",
    action: "Avoid if possible; otherwise reduce the lithium dose and check levels within 5–7 days and after any dose change, with renal function." },
  { a: ACEI, b: ARB, severity: "Major",
    effect: "Dual RAAS blockade — hyperkalaemia, hypotension and acute kidney injury without outcome benefit (ONTARGET).",
    action: "Do not combine; use one agent at full dose." },
  { a: ["spironolactone"], b: ["potassium-chloride", "cotrimoxazole"], severity: "Major",
    effect: "Hyperkalaemia (potassium load or trimethoprim's amiloride-like effect).",
    action: "Avoid potassium supplements with spironolactone; if cotrimoxazole is needed, check K⁺ and creatinine within 3–5 days." },
  { a: [...ACEI, ...ARB], b: ["spironolactone", "cotrimoxazole"], severity: "Major",
    effect: "Hyperkalaemia, especially in the elderly, CKD and diabetes.",
    action: "Check K⁺ and creatinine before and 1 week after starting; stop if K⁺ > 5.5." },
  { a: [...ACEI, ...ARB], b: ["potassium-chloride"], severity: "Moderate",
    effect: "Hyperkalaemia risk.",
    action: "Use potassium supplements only with a documented low K⁺; recheck K⁺ within 1 week." },
  { a: STRONG_3A4_INHIBITORS, b: [...STATINS_3A4, "colchicine", "carbamazepine", "digoxin", ...CALCINEURIN], severity: "Major",
    effect: "CYP3A4/P-gp inhibition raises levels of the second drug — myopathy/rhabdomyolysis (statin), fatal colchicine toxicity, carbamazepine or digoxin toxicity, calcineurin-inhibitor nephrotoxicity.",
    action: "Avoid or withhold the second drug during the course (e.g. pause atorvastatin); choose azithromycin or a non-interacting antifungal where possible; monitor levels for carbamazepine, digoxin, tacrolimus/ciclosporin." },
  { a: ["colchicine"], b: STATINS, severity: "Moderate",
    effect: "Additive myopathy risk.",
    action: "Counsel to report muscle pain/weakness; check CK if symptomatic, particularly in CKD." },
  { a: CALCINEURIN, b: STRONG_INDUCERS, severity: "Major",
    effect: "Induction lowers tacrolimus/ciclosporin levels — graft rejection risk.",
    action: "Avoid; if unavoidable, increase the dose with frequent trough-level monitoring." },
  { a: ["verapamil", "diltiazem"], b: BETA_BLOCKERS, severity: "Major",
    effect: "Additive negative chronotropy and inotropy — bradycardia, AV block, heart failure.",
    action: "Avoid, especially IV verapamil with a β-blocker; if combined orally, monitor heart rate, ECG and BP." },
  { a: ["verapamil", "diltiazem", "clarithromycin", "erythromycin"], b: ["digoxin"], severity: "Major",
    effect: "Raised digoxin levels (P-gp inhibition) — digoxin toxicity; additive AV block with CCBs.",
    action: "Halve the digoxin dose or check levels within a week; monitor heart rate and ECG." },
  { a: ["ciprofloxacin", "fluvoxamine"], b: ["tizanidine"], severity: "Contraindicated",
    effect: "CYP1A2 inhibition raises tizanidine levels about 10-fold — profound hypotension and sedation.",
    action: "Contraindicated — use an alternative antibiotic/antidepressant or muscle relaxant." },
  { a: ["ciprofloxacin", "fluvoxamine"], b: ["theophylline", "clozapine"], severity: "Major",
    effect: "CYP1A2 inhibition raises theophylline/clozapine levels — seizures, arrhythmia, clozapine toxicity.",
    action: "Avoid or reduce the dose and monitor levels; prefer a non-interacting alternative." },
  { a: ["clarithromycin", "erythromycin"], b: ["theophylline"], severity: "Moderate",
    effect: "Raised theophylline levels (nausea, tachyarrhythmia, seizures).",
    action: "Prefer azithromycin; otherwise monitor theophylline levels." },
  { a: ["clozapine"], b: ["carbamazepine"], severity: "Major",
    effect: "Additive bone-marrow suppression (agranulocytosis) and lower clozapine levels.",
    action: "Avoid the combination." },
  { a: OPIOIDS, b: BENZODIAZEPINES, severity: "Major",
    effect: "Additive CNS and respiratory depression — sedation, respiratory arrest, death (FDA boxed warning).",
    action: "Avoid; if essential, use the lowest doses for the shortest time with monitoring; naloxone available." },
  { a: PDE5, b: NITRATES, severity: "Contraindicated",
    effect: "Severe, refractory hypotension and myocardial ischaemia.",
    action: "Contraindicated — no nitrate within 24 h of sildenafil or 48 h of tadalafil." },
  { a: SULFONYLUREAS, b: ["fluconazole", "cotrimoxazole", "clarithromycin"], severity: "Moderate",
    effect: "Raised sulfonylurea levels — hypoglycaemia.",
    action: "Monitor glucose closely during the course; consider reducing the sulfonylurea dose, especially in the elderly or in CKD." },
  { a: ["phenytoin"], b: ["fluconazole", "voriconazole", "cotrimoxazole"], severity: "Moderate",
    effect: "Inhibited phenytoin metabolism — toxicity (nystagmus, ataxia, confusion).",
    action: "Monitor phenytoin levels and clinical signs; reduce dose as needed." },
  { a: ["methotrexate"], b: NSAIDS, severity: "Major",
    effect: "Reduced methotrexate clearance — marrow and renal toxicity (especially with higher doses).",
    action: "Avoid with anticancer-dose methotrexate; with weekly low-dose RA therapy use caution and monitor FBC and creatinine." },
  { a: ["febuxostat"], b: ["azathioprine", "mercaptopurine"], severity: "Contraindicated",
    effect: "Xanthine-oxidase inhibition — azathioprine/mercaptopurine toxicity (severe myelosuppression).",
    action: "Contraindicated with febuxostat." },
  { a: ["clopidogrel"], b: ["esomeprazole"], severity: "Moderate",
    effect: "CYP2C19 inhibition reduces clopidogrel activation.",
    action: "Prefer pantoprazole if a PPI is needed." },
  { a: QT_HIGH, b: [...QT_HIGH, ...QT_OTHER], severity: "Major",
    effect: "Additive QT prolongation with a known-risk antiarrhythmic — torsades de pointes.",
    action: "Avoid; if unavoidable, baseline and follow-up ECG (stop if QTc > 500 ms or rises > 60 ms) and keep K⁺ ≥ 4 and Mg²⁺ normal." },
  { a: QT_OTHER, b: QT_OTHER, severity: "Moderate",
    effect: "Additive QT prolongation — torsades risk, higher with low K⁺/Mg²⁺, bradycardia, structural heart disease or high doses.",
    action: "Check baseline QTc and electrolytes; avoid in congenital long QT or QTc > 470–500 ms; use the lowest effective doses." },
];

const pairKey = (a: string, b: string) => (a < b ? `${a}|${b}` : `${b}|${a}`);

/** Expand the rules into explicit pairs, skipping any pair already curated. */
export function classInteractions(curated: PracticalInteraction[], drugIds: Set<string>): PracticalInteraction[] {
  const seen = new Set(curated.map((x) => pairKey(x.drugAId, x.drugBId)));
  const out: PracticalInteraction[] = [];
  for (const r of RULES) {
    for (const a of r.a) {
      for (const b of r.b) {
        if (a === b || !drugIds.has(a) || !drugIds.has(b)) continue;
        const k = pairKey(a, b);
        if (seen.has(k)) continue;
        seen.add(k);
        out.push({ drugAId: a, drugBId: b, severity: r.severity, clinicalEffect: r.effect, managementAction: r.action, isPracticallyDocumented: true });
      }
    }
  }
  return out;
}
