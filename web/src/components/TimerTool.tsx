import { useEffect, useState, useSyncExternalStore } from "react";
import {
  cdFraction, cdRemaining, formatCountdown, formatStopwatch, hmToMs, swElapsed,
} from "../lib/timerMath";
import { getTimer, subscribeTimer, timerActions } from "../lib/timerStore";

// Classic stopwatch face (like the phone's Clock app): white dial, bold
// 05–60 numerals, a long purple hand and a small minutes sub-dial. The timer
// shows the time left as a coloured sector inside the dial.
const PURPLE = "#7e22ce";
const INK = "#1c1b19";
const TICK = "#b9b9bf";
const CORAL = "#e0464f";

const CX = 170;
const CY = 170;

function polar(deg: number, r: number, cx = CX, cy = CY): [number, number] {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}

/** Filled sector from a0 to a1 (degrees clockwise from 12 o'clock). */
function sector(a0: number, a1: number, r: number): string {
  const span = a1 - a0;
  if (span <= 0.05) return "";
  if (span >= 359.95) return `M ${CX} ${CY - r} A ${r} ${r} 0 1 1 ${CX - 0.01} ${CY - r} Z`;
  const [x0, y0] = polar(a0, r);
  const [x1, y1] = polar(a1, r);
  return `M ${CX} ${CY} L ${x0.toFixed(2)} ${y0.toFixed(2)} A ${r} ${r} 0 ${span > 180 ? 1 : 0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)} Z`;
}

function Dial({
  hand, fill, digitsA, digitsB, label, subHand, alert,
}: {
  hand: number;
  /** Coloured countdown sector (timer only). */
  fill: { from: number; to: number; color: string } | null;
  /** Black part of the digits, then the purple part. */
  digitsA: string;
  digitsB: string;
  label: string;
  /** Minutes sub-dial hand (stopwatch only, 0–30 min). */
  subHand: number | null;
  alert: boolean;
}) {
  const [hx, hy] = polar(hand, 138);
  const [tx, ty] = polar(hand + 180, 18);
  const SX = CX, SY = CY + 66;
  const accent = alert ? CORAL : PURPLE;
  return (
    <svg viewBox="0 0 340 340" className="mx-auto w-full max-w-[21rem]" role="img" aria-label={`${label} ${digitsA}${digitsB}`}>
      <defs>
        <filter id="pm-dial-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000" floodOpacity="0.16" />
        </filter>
      </defs>
      <circle cx={CX} cy={CY} r="160" fill="#f6f6f8" filter="url(#pm-dial-shadow)" />
      {fill && fill.to - fill.from > 0.05 && (
        <path d={sector(fill.from, fill.to, 104)} fill={fill.color} fillOpacity="0.22" stroke={fill.color} strokeOpacity="0.55" strokeWidth="1.5" />
      )}
      {Array.from({ length: 60 }, (_, i) => {
        const major = i % 5 === 0;
        const [x1, y1] = polar(i * 6, major ? 136 : 140);
        const [x2, y2] = polar(i * 6, 150);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={major ? INK : TICK} strokeWidth={major ? 2.6 : 1.4} strokeLinecap="round" />;
      })}
      {Array.from({ length: 12 }, (_, i) => {
        const [x, y] = polar(i * 30, 118);
        return (
          <text key={i} x={x} y={y + 6} textAnchor="middle" fontSize="17" fontWeight="800" fill={INK}>
            {i === 0 ? "60" : String(i * 5).padStart(2, "0")}
          </text>
        );
      })}
      <text x={CX} y={CY - 40} textAnchor="middle" fontSize={digitsA.length + digitsB.length > 8 ? 28 : 34} fontWeight="900"
        style={{ fontVariantNumeric: "tabular-nums" }}>
        <tspan fill={INK}>{digitsA}</tspan>
        <tspan fill={accent}>{digitsB}</tspan>
      </text>
      <text x={CX} y={CY - 18} textAnchor="middle" fontSize="10" fontWeight="800" fill="#6d6b67" letterSpacing="1.5">{label}</text>
      {subHand != null && (
        <g>
          {Array.from({ length: 30 }, (_, i) => {
            const major = i % 5 === 0;
            const [x1, y1] = polar(i * 12, major ? 25 : 28, SX, SY);
            const [x2, y2] = polar(i * 12, 32, SX, SY);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={major ? INK : TICK} strokeWidth={major ? 1.6 : 1} />;
          })}
          {[0, 5, 10, 15, 20, 25].map((m) => {
            const [x, y] = polar(m * 12, 17, SX, SY);
            return <text key={m} x={x} y={y + 3} textAnchor="middle" fontSize="7" fontWeight="700" fill={INK}>{m === 0 ? 30 : String(m).padStart(2, "0")}</text>;
          })}
          {(() => {
            const [mx, my] = polar(subHand, 22, SX, SY);
            return <line x1={SX} y1={SY} x2={mx} y2={my} stroke={INK} strokeWidth="2.5" strokeLinecap="round" />;
          })()}
          <circle cx={SX} cy={SY} r="3" fill={INK} />
        </g>
      )}
      <line x1={tx} y1={ty} x2={hx} y2={hy} stroke={accent} strokeWidth="4" strokeLinecap="round" />
      <circle cx={CX} cy={CY} r="8" fill={INK} />
      <circle cx={CX} cy={CY} r="4" fill={accent} />
      <circle cx={CX} cy={CY} r="1.8" fill="#fff" />
    </svg>
  );
}

const pad2 = (n: number) => String(n).padStart(2, "0");

const sel =
  "w-full rounded-lg border-2 border-slate-300 bg-white px-2 py-2.5 text-lg font-bold text-slate-900 outline-none focus:border-slate-900";
const btn = "rounded-xl px-4 py-3 text-base font-black shadow-sm transition active:scale-[0.98] disabled:opacity-40";
const PRESETS = [1, 2, 5, 10, 15, 30, 60];

function fmtClock(t: number): string {
  return new Date(t).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true });
}

function lengthLabel(ms: number): string {
  const m = Math.round(ms / 60000);
  const h = Math.floor(m / 60);
  return [h ? `${h} h` : "", m % 60 ? `${m % 60} min` : ""].filter(Boolean).join(" ") || "0 min";
}

export default function TimerTool() {
  const st = useSyncExternalStore(subscribeTimer, getTimer);
  const { mode, cd, sw } = st;
  const running = (mode === "timer" && cd.status === "running") || (mode === "stopwatch" && sw.running);

  // Smooth motion while running; a slow tick otherwise keeps the clock honest.
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    let raf = 0;
    let iv = 0;
    if (running) {
      const loop = () => {
        setNow(Date.now());
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    } else {
      setNow(Date.now());
      iv = window.setInterval(() => setNow(Date.now()), 1000);
    }
    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(iv);
    };
  }, [running]);

  const totalMin = Math.round(cd.totalMs / 60000);
  const setH = Math.floor(totalMin / 60);
  const setM = totalMin % 60;
  const editable = cd.status === "idle";

  let dial;
  if (mode === "timer") {
    const left = cdRemaining(cd, now);
    const elapsedDeg = (1 - cdFraction(cd, now)) * 360;
    const alert = cd.status === "done";
    const urgent = cd.status === "running" && cdFraction(cd, now) <= 0.1;
    // MM:SS under an hour, H:MM:SS above — keeps the digits inside the numerals.
    const full = formatCountdown(left);
    const t = full.startsWith("00:") ? full.slice(3) : full.replace(/^0/, "");
    dial = (
      <Dial hand={alert ? 0 : elapsedDeg}
        fill={alert ? { from: 0, to: 360, color: CORAL } : cd.totalMs > 0 ? { from: elapsedDeg, to: 360, color: urgent ? CORAL : PURPLE } : null}
        digitsA={t.slice(0, t.length - 2)} digitsB={t.slice(-2)}
        label={alert ? "TIME'S UP" : cd.status === "paused" ? "PAUSED" : cd.status === "running" ? "REMAINING" : "SET"}
        subHand={null} alert={alert} />
    );
  } else {
    const e = swElapsed(sw, now);
    const cs = Math.floor(e / 10);
    const sec = Math.floor(cs / 100);
    const h = Math.floor(sec / 3600);
    const mm = Math.floor((sec % 3600) / 60);
    dial = (
      <Dial hand={((e % 60000) / 60000) * 360} fill={null}
        digitsA={`${h ? `${h}:` : ""}${pad2(mm)}:`} digitsB={`${pad2(sec % 60)}.${pad2(cs % 100)}`}
        label={sw.running ? "RUNNING" : e > 0 ? "PAUSED" : "STOPWATCH"}
        subHand={((e % 1800000) / 1800000) * 360} alert={false} />
    );
  }

  const swE = swElapsed(sw, now);

  return (
    <div className="mx-auto max-w-xl px-3 py-5">
      <h2 className="text-xl font-extrabold tracking-tight text-slate-900">Timer / Stopwatch</h2>

      <div className="mt-3 grid grid-cols-2 gap-1.5" role="radiogroup" aria-label="Mode">
        {(["timer", "stopwatch"] as const).map((m) => (
          <button key={m} type="button" role="radio" aria-checked={mode === m} onClick={() => timerActions.setMode(m)}
            className={`rounded-lg border-2 px-2 py-2.5 text-sm font-extrabold ${mode === m ? "border-slate-900 bg-slate-900 text-white" : "border-slate-300 bg-white text-slate-800"}`}>
            {m === "timer" ? "⏲ Timer" : "⏱ Stopwatch"}
          </button>
        ))}
      </div>

      <section className="mt-4 rounded-xl border-2 border-slate-300 bg-white p-4">
        {dial}

        {mode === "timer" && (
          <>
            {cd.status === "done" && (
              <div className="mt-3 flex items-center justify-between gap-3 rounded-xl bg-[#85282f] px-4 py-3 text-white">
                <p className="text-base font-black">⏰ Time's up</p>
                {st.alarm && (
                  <button type="button" onClick={() => timerActions.dismissAlarm()}
                    className="rounded-lg bg-white px-3 py-2 text-sm font-black text-[#85282f]">
                    Stop alarm
                  </button>
                )}
              </div>
            )}

            {editable ? (
              <div className="mt-4 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <label className="text-xs font-bold text-slate-700">
                    Hours
                    <select aria-label="Hours" value={setH} className={`${sel} mt-1`}
                      onChange={(e) => timerActions.setLength(hmToMs(Number(e.target.value), setM))}>
                      {Array.from({ length: 24 }, (_, i) => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </label>
                  <label className="text-xs font-bold text-slate-700">
                    Minutes
                    <select aria-label="Minutes" value={setM} className={`${sel} mt-1`}
                      onChange={(e) => timerActions.setLength(hmToMs(setH, Number(e.target.value)))}>
                      {Array.from({ length: 60 }, (_, i) => <option key={i} value={i}>{String(i).padStart(2, "0")}</option>)}
                    </select>
                  </label>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {PRESETS.map((p) => (
                    <button key={p} type="button" onClick={() => timerActions.setLength(p * 60000)}
                      className={`rounded-full border-2 px-3 py-1.5 text-sm font-extrabold ${totalMin === p ? "border-[#7e22ce] bg-[#7e22ce] text-white" : "border-slate-300 bg-white text-slate-800"}`}>
                      {p === 60 ? "1 h" : `${p} min`}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <p className="mt-3 text-center text-sm font-bold text-slate-700">
                Set {lengthLabel(cd.totalMs)}
                {cd.status === "running" && cd.endAt != null && <> · ends {fmtClock(cd.endAt)}</>}
              </p>
            )}

            <div className="mt-4 grid grid-cols-3 gap-2">
              {cd.status === "running" ? (
                <button type="button" onClick={() => timerActions.pause()} className={`${btn} bg-white text-[#7e22ce] border-2 border-[#7e22ce]`}>Pause</button>
              ) : (
                <button type="button" disabled={cd.status === "done" || cd.remainingMs <= 0}
                  onClick={() => timerActions.start()} className={`${btn} bg-[#7e22ce] text-white`}>
                  {cd.status === "paused" ? "Resume" : "Start"}
                </button>
              )}
              <button type="button" onClick={() => timerActions.addMinute()} disabled={cd.totalMs <= 0 && cd.status === "idle"}
                className={`${btn} border-2 border-slate-300 bg-white text-slate-900`}>+1 min</button>
              <button type="button" onClick={() => timerActions.reset()} disabled={cd.status === "idle"}
                className={`${btn} border-2 border-slate-300 bg-white text-slate-900`}>Reset</button>
            </div>
          </>
        )}

        {mode === "stopwatch" && (
          <>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {sw.running ? (
                <button type="button" onClick={() => timerActions.swPause()} className={`${btn} bg-white text-[#7e22ce] border-2 border-[#7e22ce]`}>Pause</button>
              ) : (
                <button type="button" onClick={() => timerActions.swStart()} className={`${btn} bg-[#7e22ce] text-white`}>
                  {swE > 0 ? "Resume" : "Start"}
                </button>
              )}
              {sw.running ? (
                <button type="button" onClick={() => timerActions.swLap()} className={`${btn} border-2 border-slate-300 bg-white text-slate-900`}>Lap</button>
              ) : (
                <button type="button" onClick={() => timerActions.swReset()} disabled={swE === 0}
                  className={`${btn} border-2 border-slate-300 bg-white text-slate-900`}>Reset</button>
              )}
            </div>
            {sw.laps.length > 0 && (
              <ol className="mt-4 divide-y-2 divide-slate-200 rounded-lg border-2 border-slate-200 text-sm">
                {sw.laps.map((t, i) => ({ n: i + 1, t, split: t - (sw.laps[i - 1] ?? 0) })).reverse().map((l) => (
                  <li key={l.n} className="flex justify-between gap-3 px-3 py-2" style={{ fontVariantNumeric: "tabular-nums" }}>
                    <span className="font-bold text-slate-600">Lap {l.n}</span>
                    <span className="font-extrabold text-slate-900">+{formatStopwatch(l.split)}</span>
                    <span className="font-semibold text-slate-600">{formatStopwatch(l.t)}</span>
                  </li>
                ))}
              </ol>
            )}
          </>
        )}
      </section>

      <p className="mt-3 text-[11px] leading-snug text-slate-500">
        Keeps running while you use other tools. The alarm rings and vibrates when the timer ends while the app is open;
        if the phone is locked or the app is in the background, you will see it when you return.
      </p>
    </div>
  );
}
