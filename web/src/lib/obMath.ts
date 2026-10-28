/**
 * Obstetric dating.
 *
 * All methods reduce to one anchor: the conception-equivalent date
 * (= ovulation/fertilization). GA counts from a nominal LMP 14 days before
 * that anchor; EDD is anchor + 266 days (= LMP + 280 in a 28-day cycle).
 *
 * - LMP with cycle correction: ovulation is assumed (cycleLength − 14) days
 *   after LMP, so a 35-day cycle shifts EDD 7 days later than Naegele.
 * - IVF: fertilization date is known exactly — for a day-5 (blastocyst)
 *   transfer it is transfer − 5 days; day-3 transfer − 3 days.
 * - IUI / known ovulation: that date is the anchor itself.
 */

export type ObMethod = "lmp" | "ivf5" | "ivf3" | "ovulation" | "scan" | "edd";

export type ObResult = {
  gaWeeks: number;
  gaDays: number;
  gaLabel: string;
  edd: Date;
  conceptionDate: Date;
  /** Nominal (working) LMP back-calculated from the dating anchor. */
  derivedLmp: Date;
  trimester: 1 | 2 | 3;
  postTerm: boolean;
  preViable: boolean;
  note: string;
};

const DAY_MS = 86_400_000;

/**
 * Calendar-day arithmetic. Adding 24-hour blocks of milliseconds drifts by an
 * hour across a daylight-saving change, which moved the EDD/LMP a whole day in
 * DST time zones; setDate() always lands on local midnight of the right date.
 */
function addDays(d: Date, days: number): Date {
  const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  x.setDate(x.getDate() + days);
  return x;
}

function daysBetween(a: Date, b: Date): number {
  const utc = (x: Date) => Date.UTC(x.getFullYear(), x.getMonth(), x.getDate());
  return Math.floor((utc(b) - utc(a)) / DAY_MS);
}

export function calculateGestation(
  method: ObMethod,
  anchorDate: Date,
  today: Date,
  cycleLengthDays = 28,
  gaAtScanDays?: number,
): ObResult | null {
  if (Number.isNaN(anchorDate.getTime())) return null;

  let conception: Date;
  let note: string;
  switch (method) {
    case "edd": {
      // Anchor = the EDD itself (e.g. printed on a scan report).
      // LMP = EDD − 280 days; conception = EDD − 266 days.
      conception = addDays(anchorDate, -266);
      note =
        "Dated from a known EDD: LMP back-calculated as EDD − 280 days (Naegele reversed). Use the earliest scan's EDD — it should not be changed by later scans (ACOG CO 700).";
      break;
    }
    case "scan": {
      // Anchor = scan date; GA at scan supplies the offset. Ultrasound
      // dating (CRL < 14 wk) is the most accurate method after IVF (ACOG
      // Committee Opinion 700).
      if (gaAtScanDays == null || !Number.isInteger(gaAtScanDays) || gaAtScanDays < 35 || gaAtScanDays > 294) return null;
      conception = addDays(anchorDate, 14 - gaAtScanDays);
      const w = Math.floor(gaAtScanDays / 7);
      const d = gaAtScanDays % 7;
      note = `Dated by ultrasound: ${w}w${d}d on the scan date. First-trimester CRL dating is accurate to ±5–7 days; accuracy falls with gestation (±2 wk in T2, ±3 wk in T3).`;
      break;
    }
    case "lmp": {
      // Never guess: an impossible cycle length gives no result instead of a
      // silently clamped (wrong) EDD.
      if (!isValidCycle(cycleLengthDays)) return null;
      const cycle = cycleLengthDays;
      const ovulationOffset = cycle - 14;
      conception = addDays(anchorDate, ovulationOffset);
      note =
        cycle === 28
          ? "Standard 28-day cycle (Naegele)."
          : `Corrected for a ${cycle}-day cycle: dates shift ${cycle - 28 > 0 ? "+" : ""}${cycle - 28} days versus Naegele.`;
      break;
    }
    case "ivf5":
      conception = addDays(anchorDate, -5);
      note = "IVF day-5 (blastocyst) transfer: fertilization = transfer date − 5 days. Most precise dating available.";
      break;
    case "ivf3":
      conception = addDays(anchorDate, -3);
      note = "IVF day-3 transfer: fertilization = transfer date − 3 days. Most precise dating available.";
      break;
    case "ovulation":
      conception = anchorDate;
      note = "Dated from known ovulation / IUI day.";
      break;
  }

  const nominalLmp = addDays(conception, -14);
  const totalDays = daysBetween(nominalLmp, today);
  if (totalDays < 0 || totalDays > 45 * 7) return null;

  const gaWeeks = Math.floor(totalDays / 7);
  const gaDays = totalDays % 7;
  const edd = addDays(conception, 266);
  const trimester: ObResult["trimester"] =
    gaWeeks < 14 ? 1 : gaWeeks < 28 ? 2 : 3;

  return {
    gaWeeks,
    gaDays,
    gaLabel: `${gaWeeks} weeks ${gaDays} day${gaDays === 1 ? "" : "s"}`,
    edd,
    conceptionDate: conception,
    derivedLmp: nominalLmp,
    trimester,
    postTerm: gaWeeks >= 42,
    preViable: gaWeeks < 24,
    note,
  };
}

/**
 * ACOG Committee Opinion 700 re-dating thresholds: if the ultrasound EDD
 * differs from the LMP EDD by MORE than this many days at the given scan
 * gestational age, the ultrasound becomes the official EDD.
 */
export function acogRedatingThresholdDays(gaAtScanDays: number): {
  threshold: number;
  window: string;
} {
  if (gaAtScanDays <= 8 * 7 + 6) return { threshold: 5, window: "≤ 8w6d" };
  if (gaAtScanDays <= 15 * 7 + 6) return { threshold: 7, window: "9w0d – 15w6d" };
  if (gaAtScanDays <= 21 * 7 + 6) return { threshold: 10, window: "16w0d – 21w6d" };
  if (gaAtScanDays <= 27 * 7 + 6) return { threshold: 14, window: "22w0d – 27w6d" };
  return { threshold: 21, window: "≥ 28w0d" };
}

/**
 * Naegele's calendar rule: LMP + 7 days − 3 months + 1 year (+ cycle − 28
 * days). Months have unequal lengths, so this can differ from the standard
 * LMP + 280 days by up to ±3 days; the app's EDD uses the 280-day rule
 * (ACOG CO 700, RCOG, WHO, FOGSI). A day that does not exist in the target
 * month (e.g. 31 → February) is clamped to that month's last day.
 */
export function naegeleEdd(lmp: Date, cycleLengthDays = 28): Date {
  const plus7 = addDays(lmp, 7);
  const y = plus7.getFullYear() + (plus7.getMonth() >= 3 ? 1 : 0);
  const m = (plus7.getMonth() + 9) % 12;
  const last = new Date(y, m + 1, 0).getDate();
  const base = new Date(y, m, Math.min(plus7.getDate(), last));
  const cycle = Math.min(Math.max(cycleLengthDays || 28, 20), 45);
  return addDays(base, cycle - 28);
}

/** Usual cycle length the LMP method accepts: whole days, 20–45. */
export function isValidCycle(c: unknown): c is number {
  return typeof c === "number" && Number.isInteger(c) && c >= 20 && c <= 45;
}

/**
 * GA read on a scan as weeks + days → total days, or an error message.
 * Weeks must be whole 5–42, days whole 0–6 (blank days = 0).
 */
export function scanGaDays(weeks: number | "", days: number | ""): { days: number } | { error: string } | null {
  if (weeks === "") return null;
  const d = days === "" ? 0 : days;
  if (!Number.isInteger(weeks) || weeks < 5 || weeks > 42) return { error: "Weeks must be a whole number from 5 to 42." };
  if (!Number.isInteger(d) || d < 0 || d > 6) return { error: "Days must be a whole number from 0 to 6." };
  const total = weeks * 7 + d;
  if (total > 294) return { error: "GA on the scan cannot be more than 42w0d." };
  return { days: total };
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** "Sat 10/10/2026" — day/month/year with the weekday. */
export function formatDMY(d: Date): string {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${WEEKDAYS[d.getDay()]} ${p(d.getDate())}/${p(d.getMonth() + 1)}/${d.getFullYear()}`;
}

export function diffDays(a: Date, b: Date): number {
  return daysBetween(a, b);
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}
