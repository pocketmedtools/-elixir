/**
 * Modified Bishop score (Calder, 1974): Bishop's 1964 score with cervical
 * LENGTH in cm replacing percentage effacement. Total 0–13.
 *
 * Interpretation and induction advice:
 *  - NICE NG207 (2021, Inducing labour): Bishop score ≤ 6 → offer cervical
 *    ripening (vaginal dinoprostone, oral misoprostol, or a balloon catheter);
 *    > 6 → amniotomy and IV oxytocin.
 *  - ACOG Practice Bulletin 107 / Committee Opinion: score ≥ 8 → chance of
 *    vaginal delivery after induction similar to spontaneous labour; ≤ 6
 *    unfavourable.
 *  - WHO 2022 (induction of labour): low-dose misoprostol (25 µg oral every
 *    2 h or vaginal every 6 h) or balloon catheter for an unripe cervix.
 *  - Previous caesarean: avoid misoprostol (uterine rupture); a balloon
 *    catheter is preferred for ripening (NICE NG207, ACOG PB 205).
 *  - Dilatation "closed" means < 1 cm (Calder's table: 0 cm).
 */

export interface BishopItem {
  id: "dilation" | "length" | "station" | "consistency" | "position";
  label: string;
  options: { label: string; points: number }[];
}

export const BISHOP_ITEMS: BishopItem[] = [
  {
    id: "dilation",
    label: "Dilatation (cm)",
    options: [
      { label: "Closed", points: 0 },
      { label: "1–2", points: 1 },
      { label: "3–4", points: 2 },
      { label: "≥ 5", points: 3 },
    ],
  },
  {
    id: "length",
    label: "Length (cm)",
    options: [
      { label: "> 4", points: 0 },
      { label: "2–4", points: 1 },
      { label: "1–2", points: 2 },
      { label: "< 1", points: 3 },
    ],
  },
  {
    id: "station",
    label: "Station",
    options: [
      { label: "−3", points: 0 },
      { label: "−2", points: 1 },
      { label: "−1 / 0", points: 2 },
      { label: "+1 / +2", points: 3 },
    ],
  },
  {
    id: "consistency",
    label: "Consistency",
    options: [
      { label: "Firm", points: 0 },
      { label: "Medium", points: 1 },
      { label: "Soft", points: 2 },
    ],
  },
  {
    id: "position",
    label: "Position",
    options: [
      { label: "Posterior", points: 0 },
      { label: "Mid", points: 1 },
      { label: "Anterior", points: 2 },
    ],
  },
];

export type BishopAnswers = Partial<Record<BishopItem["id"], number>>;

/** Total from the chosen option index per item; null until all five are chosen. */
export function bishopTotal(a: BishopAnswers): number | null {
  let total = 0;
  for (const item of BISHOP_ITEMS) {
    const i = a[item.id];
    if (i == null || !item.options[i]) return null;
    total += item.options[i].points;
  }
  return total;
}

export interface BishopPlan {
  band: "unfavourable" | "favourable";
  title: string;
  action: string;
  note: string;
}

/** NICE NG207 (2021): Bishop score ≤ 6 unfavourable, > 6 favourable. */
export function bishopPlan(total: number): BishopPlan {
  if (total <= 6) {
    return {
      band: "unfavourable",
      title: "Unfavourable cervix",
      action: "Cervical ripening: vaginal dinoprostone, oral misoprostol 25 µg 2-hourly, or balloon catheter; reassess, then amniotomy + oxytocin.",
      note: "Previous caesarean: use a balloon catheter; avoid misoprostol.",
    };
  }
  return {
    band: "favourable",
    title: "Favourable cervix",
    action: "Amniotomy and IV oxytocin.",
    note: total >= 8 ? "Score ≥ 8: chance of vaginal birth similar to spontaneous labour." : "Score 7: favourable by NICE; ≥ 8 is most favourable.",
  };
}
