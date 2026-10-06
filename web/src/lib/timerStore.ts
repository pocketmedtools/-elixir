/**
 * App-wide timer/stopwatch state. Lives outside the Timer screen so a running
 * timer keeps going (and its alarm still rings) while another tool is open,
 * and is saved to the device so a reload or app update does not lose it.
 */
import {
  cdAdd, cdPause, cdReset, cdStart, cdTick, newCountdown, newStopwatch,
  swLap, swPause, swReset, swStart, type Countdown, type Stopwatch,
} from "./timerMath";

export type TimerMode = "timer" | "stopwatch";

export interface TimerState {
  mode: TimerMode;
  cd: Countdown;
  sw: Stopwatch;
  /** True while the finished-timer alarm is sounding. */
  alarm: boolean;
}

const KEY = "POCKETMED_TIMER";

function load(): TimerState {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const s = JSON.parse(raw) as TimerState;
      if (s && s.cd && s.sw) return { ...s, alarm: false };
    }
  } catch {
    /* fall through to a fresh state */
  }
  return { mode: "timer", cd: newCountdown(5 * 60000), sw: newStopwatch(), alarm: false };
}

let state: TimerState = load();
const listeners = new Set<() => void>();

function set(next: TimerState): void {
  state = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* storage blocked: still works for this session */
  }
  listeners.forEach((l) => l());
  syncTicker();
}

export const getTimer = (): TimerState => state;

export function subscribeTimer(l: () => void): () => void {
  listeners.add(l);
  return () => listeners.delete(l);
}

// ---------- alarm ----------
let audio: AudioContext | null = null;
let beepLoop: number | null = null;
let alarmStop: number | null = null;

/** Create/resume audio inside a tap so the alarm is allowed to sound later. */
function unlockAudio(): void {
  try {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    audio ??= new AC();
    if (audio.state === "suspended") audio.resume().catch(() => {});
  } catch {
    audio = null;
  }
}

function beep(): void {
  if (!audio) return;
  const t0 = audio.currentTime;
  for (let i = 0; i < 3; i++) {
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    osc.type = "sine";
    osc.frequency.value = 880;
    const t = t0 + i * 0.22;
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.35, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
    osc.connect(gain).connect(audio.destination);
    osc.start(t);
    osc.stop(t + 0.18);
  }
}

function startAlarm(): void {
  stopAlarmSound();
  beep();
  navigator.vibrate?.([400, 200, 400, 200, 400]);
  beepLoop = window.setInterval(() => {
    beep();
    navigator.vibrate?.([400, 200, 400]);
  }, 1500);
  // Ring for one minute at most, then stay silent with the banner showing.
  alarmStop = window.setTimeout(stopAlarmSound, 60000);
}

function stopAlarmSound(): void {
  if (beepLoop != null) window.clearInterval(beepLoop);
  if (alarmStop != null) window.clearTimeout(alarmStop);
  beepLoop = alarmStop = null;
  navigator.vibrate?.(0);
}

// ---------- ticker: notices the end of a running countdown on any screen ----------
let ticker: number | null = null;

function check(): void {
  const next = cdTick(state.cd, Date.now());
  if (next !== state.cd) {
    set({ ...state, cd: next, alarm: true });
    startAlarm();
  }
}

function syncTicker(): void {
  const need = state.cd.status === "running";
  if (need && ticker == null) ticker = window.setInterval(check, 250);
  if (!need && ticker != null) {
    window.clearInterval(ticker);
    ticker = null;
  }
}

if (typeof window !== "undefined") {
  syncTicker();
  // A timer that ended while the app was closed: show it as finished, quietly.
  const ended = cdTick(state.cd, Date.now());
  if (ended !== state.cd) set({ ...state, cd: ended, alarm: false });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") check();
  });
}

// ---------- actions ----------
export const timerActions = {
  setMode(mode: TimerMode) {
    set({ ...state, mode });
  },
  setLength(totalMs: number) {
    if (state.cd.status === "running") return;
    set({ ...state, cd: newCountdown(totalMs), alarm: false });
  },
  start() {
    unlockAudio();
    set({ ...state, cd: cdStart(state.cd, Date.now()) });
  },
  pause() {
    set({ ...state, cd: cdPause(state.cd, Date.now()) });
  },
  reset() {
    stopAlarmSound();
    set({ ...state, cd: cdReset(state.cd), alarm: false });
  },
  addMinute() {
    unlockAudio();
    stopAlarmSound();
    set({ ...state, cd: cdAdd(state.cd, 60000, Date.now()), alarm: false });
  },
  dismissAlarm() {
    stopAlarmSound();
    set({ ...state, alarm: false });
  },
  swStart() {
    set({ ...state, sw: swStart(state.sw, Date.now()) });
  },
  swPause() {
    set({ ...state, sw: swPause(state.sw, Date.now()) });
  },
  swLap() {
    set({ ...state, sw: swLap(state.sw, Date.now()) });
  },
  swReset() {
    set({ ...state, sw: swReset() });
  },
};
