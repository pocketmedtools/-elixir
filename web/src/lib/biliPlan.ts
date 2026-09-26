/**
 * Turns a bilirubin assessment into a short bedside plan: one decision, what
 * to do about phototherapy, and when to repeat the bilirubin. Wording follows
 * AAP 2022 (KAS 6, 12, 15, 17–23, Fig 7) and NICE CG98.
 */
import type { AapAssessment } from "./aapBili";
import type { BiliAssessment, TcbAssessment } from "./biliMath";

export type PlanTone = "ok" | "watch" | "check" | "treat" | "urgent" | "emergency";

export interface BiliPlan {
  tone: PlanTone;
  title: string;
  phototherapy: string;
  repeat: string;
  /** At most three short follow-on steps. */
  steps: string[];
}

const mg = (v: number) => `${v.toFixed(1)} mg/dL`;

export function aapPlan(
  a: AapAssessment,
  ageHours: number,
  tcb: { invalid: boolean; needsTsb: boolean } | null,
): BiliPlan {
  const extra: string[] = [];
  if (a.rapidRise) extra.push("Rising fast — send DAT (possible haemolysis).");
  if (ageHours < 24) extra.push("Jaundice in first 24 h — look for haemolysis.");

  if (tcb && (tcb.invalid || tcb.needsTsb)) {
    return {
      tone: "check",
      title: tcb.invalid ? "TcB not valid — send TSB" : "Send TSB now",
      phototherapy: "Decide on the TSB result",
      repeat: "Measure serum bilirubin (TSB) now",
      steps: [
        tcb.invalid
          ? "TcB is unreliable on phototherapy or within 24 h of stopping."
          : "TcB is within 3 mg/dL of the phototherapy line or ≥ 15 mg/dL.",
        ...extra,
      ].slice(0, 3),
    };
  }

  switch (a.zone) {
    case "exchange":
      return {
        tone: "emergency",
        title: "Exchange transfusion",
        phototherapy: "Intensive phototherapy NOW",
        repeat: "TSB every 2 h",
        steps: [
          "Urgent exchange transfusion — notify blood bank, type & crossmatch.",
          "IV + oral hydration; NICU / neonatologist now.",
          "Repeat TSB before starting: if below exchange line and no encephalopathy signs, may defer.",
        ],
      };
    case "escalation":
      return {
        tone: "urgent",
        title: "Escalation of care",
        phototherapy: "Intensive phototherapy NOW",
        repeat: "TSB every 2 h",
        steps: [
          "Medical emergency — NICU / neonatologist; STAT CBC, albumin, type & crossmatch.",
          "IV + oral hydration. IVIG 0.5–1 g/kg if DAT positive.",
          `Exchange if TSB reaches ${mg(a.t.exchange)} or any encephalopathy signs.`,
        ],
      };
    case "photo":
      return {
        tone: "treat",
        title: "Start phototherapy",
        phototherapy: "START intensive phototherapy",
        repeat: "TSB within 12 h of starting",
        steps: [
          `Stop when TSB is below ${mg(a.t.photo - 2)} (2 mg/dL under today's line).`,
          "Send CBC, blood group & DAT; G6PD if no cause found.",
          ...extra,
        ].slice(0, 3),
      };
    case "below": {
      const d = a.belowPhoto;
      const tag = tcb ? "TcB or TSB" : "TSB or TcB";
      if (ageHours < 12)
        return {
          tone: "ok",
          title: "No phototherapy now",
          phototherapy: "Not needed",
          repeat: "Bilirubin at 24–48 h of age",
          steps: ["Too early for discharge timing guidance (< 12 h).", ...extra].slice(0, 3),
        };
      if (d < 2)
        return ageHours < 24
          ? {
              tone: "watch",
              title: "Close to the line",
              phototherapy: "Consider starting",
              repeat: "TSB in 4–8 h",
              steps: ["Delay discharge.", ...extra].slice(0, 3),
            }
          : {
              tone: "watch",
              title: "Close to the line",
              phototherapy: "Consider starting (or home phototherapy)",
              repeat: "TSB in 4–24 h",
              steps: ["If discharged without phototherapy: close follow-up.", ...extra].slice(0, 3),
            };
      if (d < 3.5)
        return { tone: "watch", title: "Below the line — recheck", phototherapy: "Not needed", repeat: `${tag} in 4–24 h`, steps: extra };
      if (d < 5.5)
        return { tone: "ok", title: "Below the line", phototherapy: "Not needed", repeat: `${tag} in 1–2 days`, steps: extra };
      if (d < 7)
        return {
          tone: "ok",
          title: "Well below the line",
          phototherapy: "Not needed",
          repeat: ageHours < 72 ? "Follow-up within 2 days" : "Clinical judgment",
          steps: extra,
        };
      return {
        tone: "ok",
        title: "Well below the line",
        phototherapy: "Not needed",
        repeat: ageHours < 72 ? "Follow-up within 3 days" : "Clinical judgment",
        steps: extra,
      };
    }
  }
}

const um = (v: number) => `${Math.round(v)} µmol/L`;

export function nicePlan(r: BiliAssessment, ageHours: number, tcb: TcbAssessment | null): BiliPlan {
  const extra: string[] = [];
  if (r.ratePerHour != null && r.ratePerHour > 8.5) extra.push("Rising > 8.5 µmol/L/h — intensified phototherapy; IVIG if Rh/ABO.");
  if (ageHours < 24) extra.push("Jaundice in first 24 h — SBR within 2 h, look for haemolysis & sepsis.");

  if (tcb && tcb.needsSerum)
    return {
      tone: "check",
      title: tcb.invalid ? "TcB not valid — send serum" : "Send serum bilirubin now",
      phototherapy: "Decide on the serum result",
      repeat: "Serum bilirubin (SBR) now",
      steps: [tcb.reasons[0] ?? "", ...extra].filter(Boolean).slice(0, 3),
    };
  if (tcb)
    return {
      tone: "ok",
      title: "TcB below serum-check level",
      phototherapy: "Not needed",
      repeat: "Recheck within 24 h if still jaundiced",
      steps: extra,
    };

  switch (r.zone) {
    case "exchange":
      return {
        tone: "emergency",
        title: "Exchange transfusion",
        phototherapy: "Intensified (multiple) phototherapy NOW",
        repeat: "SBR every 4–6 h",
        steps: [
          "Exchange transfusion unless SBR falls below the line while preparing.",
          "Look for acute bilirubin encephalopathy — treat as emergency.",
        ],
      };
    case "photo":
      return {
        tone: "treat",
        title: "Start phototherapy",
        phototherapy: "START phototherapy",
        repeat: "SBR 4–6 h after starting, then 6–12 hourly",
        steps: [
          `Stop when SBR is below ${um(r.thresholds.photo - 50)} = ${((r.thresholds.photo - 50) / 17.1).toFixed(1)} mg/dL (50 µmol/L under the line).`,
          "Check rebound 12–18 h after stopping.",
          ...extra,
        ].slice(0, 3),
      };
    case "consider":
      return { tone: "watch", title: "Close to the line", phototherapy: "Consider starting", repeat: "SBR in 6 h", steps: extra };
    case "repeat":
      return { tone: "watch", title: "Below the line — recheck", phototherapy: "Not needed", repeat: "SBR in 6–12 h", steps: extra };
    case "below":
      return { tone: "ok", title: "Below the line", phototherapy: "Not needed", repeat: "Only if jaundice deepens", steps: extra };
  }
}
