import { useEffect, useState, useSyncExternalStore } from "react";
import {
  cdFraction, cdRemaining, formatCountdown, formatStopwatch, hmToMs, swElapsed,
} from "../lib/timerMath";
import { getTimer, subscribeTimer, timerActions, type TimerMode } from "../lib/timerStore";

const GREEN = "#116f39";
const GREEN_DARK = "#0b4d27";
const GREEN_PALE = "#e3efe6";
const TRACK = "#e3cda8";
const INK = "#1c1b19";
const MUTED = "#6d6b67";
const MAROON = "#85282f";

const CX = 170;
const CY = 170;

function polar(deg: number, r: number): [number, number] {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [CX + r * Math.cos(rad), CY + r * Math.sin(rad)];
}

/** Filled pie slice from angle a0 to a1 (degrees, clockwise from 12 o'clock). */
function slice(a0: number, a1: number, r: number): string {
  const span = a1 - a0;
  if (span <= 0.05) return "";
  if (span >= 359.95) return `M ${CX} ${CY - r} A ${r} ${r} 0 1 1 ${CX - 0.01} ${CY - r} Z`;
  const [x0, y0] = polar(a0, r);
  const [x1, y1] = polar(a1, r);
  return `M ${CX} ${CY} L ${x0.toFixed(2)} ${y0.toFixed(2)} A ${r} ${r} 0 ${span > 180 ? 1 : 0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)} Z`;
}

function arc(a0: number, a1: number, r: number): string {
  const span = Math.min(a1 - a0, 359.95);
  if (span <= 0.05) return "";
  const [x0, y0] = polar(a0, r);
  const [x1, y1] = polar(a0 + span, r);
  return `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${r} ${r} 0 ${span > 180 ? 1 : 0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
}

/** Round dial: the green inside sweeps with the time, the hand marks "now". */
function Dial({
  mode, greenFrom, greenTo, hand, outer, big, small, alert,
}: {
  mode: TimerMode;
  greenFrom: number;
  greenTo: number;
  hand: number;
  outer: number | null;
  big: string;
  small: string;
  alert: boolean;
}) {
  const [hx, hy] = polar(hand, 126);
  return (
    <svg viewBox="0 0 340 340" className="mx-auto w-full max-w-[20rem]" role="img" aria-label={`${small} ${big}`}>
      <circle cx={CX} cy={CY} r="150" fill="#fcf4e6" stroke={TRACK} strokeWidth="2" />
      <circle cx={CX} cy={CY} r="126" fill={alert ? "#f6e1e1" : GREEN_PALE} />
      <path d={slice(greenFrom, greenTo, 126)} fill={alert ? MAROON : GREEN} />
      {/* outer track: minutes of the hour (stopwatch) */}
      <circle cx={CX} cy={CY} r="138" fill="none" stroke={TRACK} strokeWidth="6" />
      {outer != null && <path d={arc(0, outer, 138)} fill="none" stroke={GREEN_DARK} strokeWidth="6" strokeLinecap="round" />}
      {Array.from({ length: 60 }, (_, i) => {
        const major = i % 5 === 0;
        const [x1, y1] = polar(i * 6, major ? 141 : 144);
        const [x2, y2] = polar(i * 6, 149);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={MUTED} strokeWidth={major ? 2.2 : 1} />;
      })}
      {mode === "stopwatch" &&
        Array.from({ length: 12 }, (_, i) => {
          const [x, y] = polar(i * 30, 162);
          return (
            <text key={i} x={x} y={y + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill="#3a3733">
              {i * 5}
            </text>
          );
        })}
      <line x1={CX} y1={CY} x2={hx} y2={hy} stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx={hx} cy={hy} r="6" fill={INK} />
      <circle cx={CX} cy={CY} r="66" fill="#fcf4e6" stroke={TRACK} strokeWidth="2" />
      <text x={CX} y={CY + 6} textAnchor="middle" fontSize={big.length > 8 ? 24 : 28} fontWeight="900" fill={alert ? MAROON : INK}
        style={{ fontVariantNumeric: "tabular-nums" }}>
        {big}
      </text>
      <text x={CX} y={CY + 28} textAnchor="middle" fontSize="11" fontWeight="800" fill={MUTED} letterSpacing="1.5">
        {small}
      </text>
    </svg>
  );
}

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
    dial = (
      <Dial mode="timer" greenFrom={alert ? 0 : elapsedDeg} greenTo={alert ? 360 : cd.totalMs > 0 ? 360 : 0}
        hand={alert ? 0 : elapsedDeg} outer={null} big={formatCountdown(left)}
        small={alert ? "TIME'S UP" : cd.status === "paused" ? "PAUSED" : cd.status === "running" ? "REMAINING" : "SET"}
        alert={alert} />
    );
  } else {
    const e = swElapsed(sw, now);
    const secDeg = ((e % 60000) / 60000) * 360;
    dial = (
      <Dial mode="stopwatch" greenFrom={0} greenTo={secDeg} hand={secDeg}
        outer={((e % 3600000) / 3600000) * 360} big={formatStopwatch(e)}
        small={sw.running ? "RUNNING" : e > 0 ? "PAUSED" : "STOPWATCH"} alert={false} />
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
                      className={`rounded-full border-2 px-3 py-1.5 text-sm font-extrabold ${totalMin === p ? "border-[#116f39] bg-[#116f39] text-white" : "border-slate-300 bg-white text-slate-800"}`}>
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
                <button type="button" onClick={() => timerActions.pause()} className={`${btn} bg-[#9a5b00] text-white`}>Pause</button>
              ) : (
                <button type="button" disabled={cd.status === "done" || cd.remainingMs <= 0}
                  onClick={() => timerActions.start()} className={`${btn} bg-[#116f39] text-white`}>
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
                <button type="button" onClick={() => timerActions.swPause()} className={`${btn} bg-[#9a5b00] text-white`}>Pause</button>
              ) : (
                <button type="button" onClick={() => timerActions.swStart()} className={`${btn} bg-[#116f39] text-white`}>
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
