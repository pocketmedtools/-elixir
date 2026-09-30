/**
 * Hours of life (HOL) from a birth date and a 12-hour clock time (AM/PM),
 * using the device's local time zone.
 *
 * 12:xx AM = 00:xx (midnight hour); 12:xx PM = 12:xx (noon hour).
 * Hours of life = completed hours since birth (floor), as used on
 * bilirubin nomograms and newborn charts. Day of life counts the first
 * 24 hours as day 1.
 */

export type AmPm = "AM" | "PM";

/** Convert a 12-hour clock reading to 24-hour hours (0–23). */
export function to24h(hour12: number, ampm: AmPm): number | null {
  if (!Number.isInteger(hour12) || hour12 < 1 || hour12 > 12) return null;
  if (ampm === "AM") return hour12 === 12 ? 0 : hour12;
  return hour12 === 12 ? 12 : hour12 + 12;
}

/** Build a local Date from "YYYY-MM-DD" + 12-hour time. */
export function localDateTime(dateStr: string, hour12: number, minute: number, ampm: AmPm): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr);
  if (!m) return null;
  const h = to24h(hour12, ampm);
  if (h == null || !Number.isInteger(minute) || minute < 0 || minute > 59) return null;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), h, minute, 0, 0);
  // Reject impossible dates such as 2026-02-30 that Date silently rolls over.
  if (d.getFullYear() !== Number(m[1]) || d.getMonth() !== Number(m[2]) - 1 || d.getDate() !== Number(m[3])) return null;
  return d;
}

export interface HoursOfLife {
  /** Completed hours since birth (the HOL value used clinically). */
  hours: number;
  /** Exact hours with decimals, e.g. 36.5. */
  exactHours: number;
  days: number;
  remHours: number;
  remMinutes: number;
  /** Day of life with the first 24 h counted as day 1. */
  dayOfLife: number;
}

export function hoursOfLife(birth: Date, at: Date): HoursOfLife | null {
  const ms = at.getTime() - birth.getTime();
  if (!Number.isFinite(ms) || ms < 0) return null;
  const totalMin = Math.floor(ms / 60000);
  const hours = Math.floor(totalMin / 60);
  return {
    hours,
    exactHours: Math.round((ms / 3600000) * 10) / 10,
    days: Math.floor(hours / 24),
    remHours: hours % 24,
    remMinutes: totalMin % 60,
    dayOfLife: Math.floor(hours / 24) + 1,
  };
}

/** "02:30 PM" style formatting for display. */
export function format12h(d: Date): string {
  const h = d.getHours();
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${String(h12).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`;
}
