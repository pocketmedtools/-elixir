import { useEffect, useState, useSyncExternalStore } from "react";
import {
  cdFraction, cdRemaining, formatCountdown, formatStopwatch, hmToMs, swElapsed,
} from "../lib/timerMath";
import { getTimer, subscribeTimer, timerActions, type TimerMode } from "../lib/timerStore";

// Watch-face palette: deep navy face, warm gold bezel, bright rings. Every
// pairing is high contrast (white/amber/teal on navy).
const FACE = "#132238";
const FACE_EDGE = "#0b1626";
const BEZEL = "#c9a24d";
const TRACK = "#25385a";
const TICK = "#7f93b2";
const TICK_MAJOR = "#e6ecf5";
const TEXT = "#ffffff";
const SUB = "#a9b8cf";
const AMBER = "#f5b83d";
const ORANGE = "#f07c3a";
const TEAL = "#2dd4bf";
const SKY = "#38bdf8";
const CORAL = "#ff6b6b";

const CX = 170;
const CY = 170;

function polar(deg: number, r: number): [number, number] {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [CX + r * Math.cos(rad), CY + r * Math.sin(rad)];
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
  const R = 112;
  const [hx, hy] = polar(hand, R);
  const span = greenTo - greenFrom;
  // Timer: amber→orange, turning coral in the last 10 % and at time-up.
  // Stopwatch: teal→sky, with an amber inner arc for the minutes.
  const urgent = mode === "timer" && !alert && span > 0 && span <= 36;
  const ring = alert || urgent ? CORAL : `url(#pm-ring-${mode})`;
  return (
    <svg viewBox="0 0 340 340" className="mx-auto w-full max-w-[20rem]" role="img" aria-label={`${small} ${big}`}>
      <defs>
        <linearGradient id="pm-ring-timer" gradientUnits="userSpaceOnUse" x1="60" y1="40" x2="280" y2="300">
          <stop offset="0" stopColor={AMBER} />
          <stop offset="1" stopColor={ORANGE} />
        </linearGradient>
        <linearGradient id="pm-ring-stopwatch" gradientUnits="userSpaceOnUse" x1="60" y1="40" x2="280" y2="300">
          <stop offset="0" stopColor={TEAL} />
          <stop offset="1" stopColor={SKY} />
        </linearGradient>
        <radialGradient id="pm-face" cx="50%" cy="42%" r="60%">
          <stop offset="0" stopColor="#1c3150" />
          <stop offset="1" stopColor={FACE} />
        </radialGradient>
      </defs>
      <circle cx={CX} cy={CY} r="162" fill={FACE_EDGE} />
      <circle cx={CX} cy={CY} r="156" fill="url(#pm-face)" stroke={BEZEL} strokeWidth="3" />
      {Array.from({ length: 60 }, (_, i) => {
        const major = i % 5 === 0;
        const [x1, y1] = polar(i * 6, major ? 134 : 139);
        const [x2, y2] = polar(i * 6, 145);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={major ? TICK_MAJOR : TICK} strokeWidth={major ? 2.4 : 1} strokeLinecap="round" />;
      })}
      {mode === "stopwatch" &&
        Array.from({ length: 12 }, (_, i) => {
          const [x, y] = polar(i * 30, 124);
          return (
            <text key={i} x={x} y={y + 4} textAnchor="middle" fontSize="10" fontWeight="700" fill={SUB}>
              {i * 5}
            </text>
          );
        })}
      <circle cx={CX} cy={CY} r={mode === "stopwatch" ? 102 : R} fill="none" stroke={TRACK} strokeWidth="10" />
      {span >= 359.9 ? (
        <circle cx={CX} cy={CY} r={mode === "stopwatch" ? 102 : R} fill="none" stroke={ring} strokeWidth="10" />
      ) : (
        <path d={arc(greenFrom, greenTo, mode === "stopwatch" ? 102 : R)} fill="none" stroke={ring} strokeWidth="10" strokeLinecap="round" />
      )}
      {outer != null && (
        <>
          <circle cx={CX} cy={CY} r="86" fill="none" stroke={TRACK} strokeWidth="3" />
          <path d={arc(0, outer, 86)} fill="none" stroke={AMBER} strokeWidth="3" strokeLinecap="round" />
        </>
      )}
      {!alert && (() => {
        const [kx, ky] = mode === "stopwatch" ? polar(hand, 102) : [hx, hy];
        return <circle cx={kx} cy={ky} r="8" fill={TEXT} stroke={FACE} strokeWidth="3" />;
      })()}
      <text x={CX} y={CY + 8} textAnchor="middle" fontSize={big.length > 8 ? 28 : 32} fontWeight="900" fill={alert ? CORAL : TEXT}
        style={{ fontVariantNumeric: "tabular-nums" }}>
        {big}
      </text>
      <text x={CX} y={CY + 32} textAnchor="middle" fontSize="11" fontWeight="800" fill={alert ? CORAL : SUB} letterSpacing="1.5">
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
                      className={`rounded-full border-2 px-3 py-1.5 text-sm font-extrabold ${totalMin === p ? "border-[#132238] bg-[#132238] text-[#f5b83d]" : "border-slate-300 bg-white text-slate-800"}`}>
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
                <button type="button" onClick={() => timerActions.pause()} className={`${btn} bg-[#f5b83d] text-[#132238]`}>Pause</button>
              ) : (
                <button type="button" disabled={cd.status === "done" || cd.remainingMs <= 0}
                  onClick={() => timerActions.start()} className={`${btn} bg-[#132238] text-white`}>
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
                <button type="button" onClick={() => timerActions.swPause()} className={`${btn} bg-[#f5b83d] text-[#132238]`}>Pause</button>
              ) : (
                <button type="button" onClick={() => timerActions.swStart()} className={`${btn} bg-[#132238] text-white`}>
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
