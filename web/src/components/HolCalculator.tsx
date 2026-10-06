import { useEffect, useState } from "react";
import DateDMY from "./DateDMY";
import { usePersist } from "../lib/lastState";
import { format12h, hoursOfLife, localDateTime, type AmPm } from "../lib/holMath";
import SaveButton from "./SaveButton";

const sel =
  "rounded-lg border-2 border-slate-300 bg-white px-2 py-2.5 text-base font-semibold text-slate-900 outline-none focus:border-slate-900";
const HOURS = Array.from({ length: 12 }, (_, i) => i + 1);
const MINUTES = Array.from({ length: 60 }, (_, i) => i);

function todayStr(): string {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

function fmtDate(d: Date): string {
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

/** Date + 12-hour time with an AM/PM switch. */
function DateTime12({
  id, label, date, setDate, hour, setHour, minute, setMinute, ampm, setAmpm,
}: {
  id: string; label: string;
  date: string; setDate: (v: string) => void;
  hour: string; setHour: (v: string) => void;
  minute: string; setMinute: (v: string) => void;
  ampm: AmPm; setAmpm: (v: AmPm) => void;
}) {
  return (
    <fieldset className="space-y-2">
      <legend className="text-xs font-bold text-slate-700">{label}</legend>
      <DateDMY value={date} onChange={setDate} label={`${label} date`} />
      <div className="flex items-center gap-1.5">
        <select id={`${id}-hour`} value={hour} onChange={(e) => setHour(e.target.value)} className={`${sel} flex-1`} aria-label={`${label} hour`}>
          <option value="">hh</option>
          {HOURS.map((h) => (<option key={h} value={h}>{String(h).padStart(2, "0")}</option>))}
        </select>
        <span className="text-lg font-black text-slate-900">:</span>
        <select id={`${id}-minute`} value={minute} onChange={(e) => setMinute(e.target.value)} className={`${sel} flex-1`} aria-label={`${label} minute`}>
          <option value="">mm</option>
          {MINUTES.map((m) => (<option key={m} value={m}>{String(m).padStart(2, "0")}</option>))}
        </select>
        <div className="flex overflow-hidden rounded-lg border-2 border-slate-900" role="radiogroup" aria-label={`${label} AM or PM`}>
          {(["AM", "PM"] as const).map((p) => (
            <button key={p} type="button" role="radio" aria-checked={ampm === p} onClick={() => setAmpm(p)}
              className={`px-3 py-2.5 text-sm font-black ${ampm === p ? "bg-slate-900 text-white" : "bg-white text-slate-800"}`}>
              {p}
            </button>
          ))}
        </div>
      </div>
    </fieldset>
  );
}

export default function HolCalculator() {
  const [bDate, setBDate] = usePersist("hol", "bDate", todayStr);
  const [bHour, setBHour] = usePersist("hol", "bHour", "");
  const [bMin, setBMin] = usePersist("hol", "bMin", "");
  const [bAmpm, setBAmpm] = usePersist<AmPm>("hol", "bAmpm", "AM");

  const [toNow, setToNow] = usePersist("hol", "toNow", true);
  const [tDate, setTDate] = usePersist("hol", "tDate", todayStr);
  const [tHour, setTHour] = usePersist("hol", "tHour", "");
  const [tMin, setTMin] = usePersist("hol", "tMin", "");
  const [tAmpm, setTAmpm] = usePersist<AmPm>("hol", "tAmpm", "AM");

  // Re-render every 30 s so "till now" stays current.
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    if (!toNow) return;
    const t = window.setInterval(() => setNow(new Date()), 30000);
    return () => window.clearInterval(t);
  }, [toNow]);

  const birth =
    bHour !== "" && bMin !== "" ? localDateTime(bDate, Number(bHour), Number(bMin), bAmpm) : null;
  const at = toNow
    ? now
    : tHour !== "" && tMin !== ""
      ? localDateTime(tDate, Number(tHour), Number(tMin), tAmpm)
      : null;
  const r = birth && at ? hoursOfLife(birth, at) : null;
  const err =
    birth && at && !r
      ? toNow
        ? "Birth time is in the future — check the date, time and AM/PM."
        : "The second time is before birth — check the dates and AM/PM."
      : null;

  return (
    <div className="mx-auto max-w-xl px-3 py-5">
      <h2 className="text-xl font-extrabold tracking-tight text-slate-900">Hours of Life</h2>

      <section className="mt-3 space-y-4 rounded-xl border-2 border-slate-300 bg-white p-4">
        <DateTime12 id="birth" label="Date and time of birth"
          date={bDate} setDate={setBDate} hour={bHour} setHour={setBHour}
          minute={bMin} setMinute={setBMin} ampm={bAmpm} setAmpm={setBAmpm} />

        <div>
          <span className="text-xs font-bold text-slate-700">Calculate up to</span>
          <div className="mt-1 grid grid-cols-2 gap-1.5" role="radiogroup" aria-label="Calculate up to">
            {[true, false].map((v) => (
              <button key={String(v)} type="button" role="radio" aria-checked={toNow === v}
                onClick={() => { setToNow(v); setNow(new Date()); }}
                className={`rounded-lg border-2 px-2 py-2.5 text-sm font-extrabold ${toNow === v ? "border-slate-900 bg-slate-900 text-white" : "border-slate-300 bg-white text-slate-800"}`}>
                {v ? "Now" : "Another time"}
              </button>
            ))}
          </div>
        </div>

        {!toNow && (
          <DateTime12 id="at" label="Date and time (e.g. sample taken)"
            date={tDate} setDate={setTDate} hour={tHour} setHour={setTHour}
            minute={tMin} setMinute={setTMin} ampm={tAmpm} setAmpm={setTAmpm} />
        )}

        {err && <p className="text-sm font-bold text-red-700">{err}</p>}
      </section>

      {r && birth && at && (
        <section className="mt-4 overflow-hidden rounded-xl border-2 border-slate-900 bg-white">
          <div className="bg-sky-900 px-4 py-3 text-white">
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/80">
              Hours of life {toNow ? "now" : "at the chosen time"}
            </p>
            <p className="mt-0.5 text-4xl font-black leading-tight">{r.hours} h</p>
            <p className="mt-1 text-sm font-semibold text-white/90">
              {r.days} day{r.days === 1 ? "" : "s"} {r.remHours} h {r.remMinutes} min · exact {r.exactHours} h
            </p>
          </div>
          <dl className="divide-y-2 divide-slate-200 text-sm">
            <div className="flex justify-between gap-3 px-4 py-3">
              <dt className="font-bold uppercase tracking-wide text-slate-600">Day of life</dt>
              <dd className="font-extrabold text-slate-900">Day {r.dayOfLife}</dd>
            </div>
            <div className="flex justify-between gap-3 px-4 py-3">
              <dt className="font-bold uppercase tracking-wide text-slate-600">Born</dt>
              <dd className="font-extrabold text-slate-900">{fmtDate(birth)}, {format12h(birth)}</dd>
            </div>
            <div className="flex justify-between gap-3 px-4 py-3">
              <dt className="font-bold uppercase tracking-wide text-slate-600">{toNow ? "Now" : "At"}</dt>
              <dd className="font-extrabold text-slate-900">{fmtDate(at)}, {format12h(at)}</dd>
            </div>
          </dl>
        </section>
      )}

      {!r && !err && (
        <p className="mt-3 text-sm font-semibold text-slate-600">Enter the birth date and time — hours of life appear instantly.</p>
      )}

      <p className="mt-3 text-[11px] leading-snug text-slate-500">
        Hours of life = completed hours since birth (used on bilirubin and newborn charts). Day 1 = the first 24 hours. Uses this device's clock and time zone.
      </p>

      <SaveButton
        tool="Hours of Life"
        build={() =>
          r && birth && at
            ? {
                title: `Hours of life ${r.hours} h (day ${r.dayOfLife})`,
                detail: [
                  `Born ${fmtDate(birth)}, ${format12h(birth)}`,
                  `${toNow ? "Calculated at" : "At"} ${fmtDate(at)}, ${format12h(at)}`,
                  `${r.days} d ${r.remHours} h ${r.remMinutes} min`,
                ].join(" · "),
              }
            : null
        }
      />
    </div>
  );
}
