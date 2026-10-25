import { useState } from "react";

/** Wall-calendar look: teal month banner, coloured weekday header, pastel day columns. */
const DAYS = [
  { name: "SUNDAY", head: "#1f3b73", tint: "#dbe7f3" },
  { name: "MONDAY", head: "#2a9d8f", tint: "#dcefea" },
  { name: "TUESDAY", head: "#5fa8d3", tint: "#e3eff7" },
  { name: "WEDNESDAY", head: "#52a447", tint: "#e2f0dc" },
  { name: "THURSDAY", head: "#d9a400", tint: "#f8efcf" },
  { name: "FRIDAY", head: "#e07ba5", tint: "#f8e1ea" },
  { name: "SATURDAY", head: "#c2185b", tint: "#f5d9e3" },
];
const MONTHS = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

/** Fixed-date national days (India) and New Year. */
const FIXED: Record<string, string> = {
  "0-1": "New Year's Day",
  "0-26": "Republic Day",
  "7-15": "Independence Day",
  "9-2": "Gandhi Jayanti",
  "11-25": "Christmas",
};

export default function CalendarTool() {
  const today = new Date();
  const [view, setView] = useState({ y: today.getFullYear(), m: today.getMonth() });
  const first = new Date(view.y, view.m, 1);
  const days = new Date(view.y, view.m + 1, 0).getDate();
  const lead = first.getDay();
  const rows = Math.ceil((lead + days) / 7);
  const isToday = (d: number) => view.y === today.getFullYear() && view.m === today.getMonth() && d === today.getDate();
  const shift = (n: number) => setView((v) => {
    const d = new Date(v.y, v.m + n, 1);
    return { y: d.getFullYear(), m: d.getMonth() };
  });

  return (
    <div className="mx-auto max-w-xl px-3 py-5">
      <h2 className="text-xl font-extrabold tracking-tight text-slate-900">Calendar</h2>

      <div className="mt-3 flex items-center justify-between gap-2">
        <button type="button" aria-label="Previous month" onClick={() => shift(-1)}
          className="rounded-lg border-2 border-slate-300 bg-white px-4 py-2 text-lg font-black text-slate-800">‹</button>
        <button type="button" onClick={() => setView({ y: today.getFullYear(), m: today.getMonth() })}
          className="rounded-lg border-2 border-slate-300 bg-white px-4 py-2 text-sm font-extrabold text-slate-800">Today</button>
        <button type="button" aria-label="Next month" onClick={() => shift(1)}
          className="rounded-lg border-2 border-slate-300 bg-white px-4 py-2 text-lg font-black text-slate-800">›</button>
      </div>

      <section className="mt-3 overflow-hidden rounded-md border-2 border-[#9ccfcf] bg-white shadow-md">
        <div className="bg-[#5bb5b5] py-2 text-center text-white">
          <span className="text-2xl font-light tracking-[0.12em]">{MONTHS[view.m]}</span>
          <span className="ml-2 text-xl font-light">{view.y}</span>
        </div>
        <div className="grid grid-cols-7">
          {DAYS.map((d) => (
            <div key={d.name} className="py-1 text-center text-[10px] font-bold tracking-wide text-white" style={{ background: d.head }}>
              <span className="sm:hidden">{d.name.slice(0, 3)}</span>
              <span className="hidden sm:inline">{d.name}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {Array.from({ length: rows * 7 }, (_, i) => {
            const d = i - lead + 1;
            const col = i % 7;
            const inMonth = d >= 1 && d <= days;
            const holiday = inMonth ? FIXED[`${view.m}-${d}`] : undefined;
            const now = inMonth && isToday(d);
            return (
              <div key={i} className="relative h-16 border-b border-r border-white/70 px-0.5 pt-1 text-center"
                style={{ background: DAYS[col].tint }}>
                {inMonth && (
                  <>
                    <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-lg font-semibold ${
                      now ? "bg-[#2a9d8f] text-white" : holiday ? "text-[#2a9d8f]" : "text-slate-800"
                    }`}>
                      {d}
                    </span>
                    {holiday && <p className="text-[7px] font-semibold leading-tight text-slate-600">{holiday}</p>}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <p className="mt-3 text-center text-sm font-bold text-slate-700">
        Today: {today.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
      </p>
    </div>
  );
}
