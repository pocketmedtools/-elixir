import { useEffect, useRef, useState } from "react";

/**
 * Date entry that always reads day / month / year, whatever the phone's
 * language setting (the built-in date box follows the device and often shows
 * month first). Value in and out is "YYYY-MM-DD", like a native date input;
 * "" while incomplete or impossible (e.g. 31/02). The calendar button still
 * opens the phone's date picker.
 */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function isoFromParts(dd: string, mm: string, yyyy: string): string {
  if (!/^\d{1,2}$/.test(dd) || !/^\d{1,2}$/.test(mm) || !/^\d{4}$/.test(yyyy)) return "";
  const d = Number(dd), m = Number(mm), y = Number(yyyy);
  if (y < 1900 || y > 2100 || m < 1 || m > 12 || d < 1) return "";
  const dt = new Date(y, m - 1, d);
  if (dt.getFullYear() !== y || dt.getMonth() !== m - 1 || dt.getDate() !== d) return "";
  return `${yyyy}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

function partsFromIso(iso: string): [string, string, string] {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  return m ? [m[3], m[2], m[1]] : ["", "", ""];
}

const box =
  "w-full rounded-lg border-2 border-slate-300 bg-white px-1 py-2.5 text-center text-base font-semibold text-slate-900 outline-none focus:border-slate-900";

export default function DateDMY({
  value,
  onChange,
  label,
}: {
  value: string;
  onChange: (iso: string) => void;
  /** Accessible name, e.g. "First day of last period". */
  label: string;
}) {
  const [[dd, mm, yyyy], setParts] = useState(() => partsFromIso(value));
  const picker = useRef<HTMLInputElement>(null);

  // Follow outside changes (calendar pick, "New patient", restored entries).
  useEffect(() => {
    if (value !== isoFromParts(dd, mm, yyyy)) {
      if (value) setParts(partsFromIso(value));
      else if (isoFromParts(dd, mm, yyyy)) setParts(["", "", ""]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const update = (next: [string, string, string]) => {
    setParts(next);
    const iso = isoFromParts(...next);
    if (iso !== value) onChange(iso);
  };

  const digits = (v: string, n: number) => v.replace(/\D/g, "").slice(0, n);
  const full = isoFromParts(dd, mm, yyyy);
  const typedAll = dd.length > 0 && mm.length > 0 && yyyy.length === 4;

  return (
    <div>
      <div className="flex items-center gap-1.5" role="group" aria-label={label}>
        <input type="text" inputMode="numeric" placeholder="DD" aria-label={`${label} day`} data-adv="2"
          value={dd} onChange={(e) => update([digits(e.target.value, 2), mm, yyyy])} className={`${box} flex-[2]`} />
        <span className="font-black text-slate-500">/</span>
        <input type="text" inputMode="numeric" placeholder="MM" aria-label={`${label} month`} data-adv="2"
          value={mm} onChange={(e) => update([dd, digits(e.target.value, 2), yyyy])} className={`${box} flex-[2]`} />
        <span className="font-black text-slate-500">/</span>
        <input type="text" inputMode="numeric" placeholder="YYYY" aria-label={`${label} year`}
          value={yyyy} onChange={(e) => update([dd, mm, digits(e.target.value, 4)])} className={`${box} flex-[3]`} />
        <span className="relative shrink-0">
          <button type="button" aria-label={`${label}: pick from calendar`}
            onClick={() => {
              const el = picker.current;
              if (!el) return;
              try {
                el.showPicker();
              } catch {
                el.focus();
                el.click();
              }
            }}
            className="rounded-lg border-2 border-slate-300 bg-white px-2.5 py-2 text-lg leading-none">
            📅
          </button>
          <input ref={picker} type="date" tabIndex={-1} aria-hidden value={full}
            onChange={(e) => update(partsFromIso(e.target.value))}
            className="pointer-events-none absolute inset-0 h-full w-full opacity-0" />
        </span>
      </div>
      {full ? (
        <p className="mt-1 text-xs font-bold text-slate-600">
          {Number(dd)} {MONTHS[Number(mm) - 1]} {yyyy}
        </p>
      ) : typedAll ? (
        <p className="mt-1 text-xs font-bold text-red-700">Not a real date — check day and month.</p>
      ) : null}
    </div>
  );
}

/** Date (day/month/year) + time; value "YYYY-MM-DDTHH:MM" like datetime-local. */
export function DateTimeDMY({
  value,
  onChange,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  label: string;
}) {
  const [date, setDate] = useState(() => value.slice(0, 10));
  const [time, setTime] = useState(() => value.slice(11, 16));
  useEffect(() => {
    if (value && value !== `${date}T${time}`) {
      setDate(value.slice(0, 10));
      setTime(value.slice(11, 16));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  const emit = (d: string, t: string) => onChange(d && t ? `${d}T${t}` : "");
  return (
    <div className="space-y-1.5">
      <DateDMY label={label} value={date} onChange={(d) => { setDate(d); emit(d, time); }} />
      <input type="time" aria-label={`${label} time`} value={time}
        onChange={(e) => { setTime(e.target.value); emit(date, e.target.value); }}
        className={box} />
    </div>
  );
}
