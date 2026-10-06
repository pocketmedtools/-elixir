import { useEffect, useState, useSyncExternalStore } from "react";
import { cdRemaining, formatCountdown } from "../lib/timerMath";
import { getTimer, subscribeTimer, timerActions } from "../lib/timerStore";

/**
 * On every other screen: a "Time's up" bar when the timer ends, and a small
 * chip with the time left while it runs (tap to open the timer).
 */
export default function TimerFloat({ onOpen, hidden }: { onOpen: () => void; hidden: boolean }) {
  const st = useSyncExternalStore(subscribeTimer, getTimer);
  const running = st.cd.status === "running";
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (!running || hidden) return;
    const iv = window.setInterval(() => setNow(Date.now()), 500);
    return () => window.clearInterval(iv);
  }, [running, hidden]);

  if (hidden) return null; // the Timer screen shows its own alarm and time
  if (st.alarm) {
    return (
      <div role="alert" className="fixed inset-x-3 top-3 z-[70] mx-auto flex max-w-md items-center justify-between gap-3 rounded-xl bg-[#85282f] px-4 py-3 text-white shadow-lg">
        <button type="button" onClick={onOpen} className="text-left text-base font-black">⏰ Timer finished</button>
        <button type="button" onClick={() => timerActions.dismissAlarm()}
          className="rounded-lg bg-white px-3 py-2 text-sm font-black text-[#85282f]">
          Stop
        </button>
      </div>
    );
  }
  if (!running) return null;
  return (
    <button type="button" onClick={onOpen} aria-label="Open timer"
      className="fixed bottom-3 left-3 z-[55] rounded-full bg-[#116f39] px-3.5 py-2 text-sm font-black text-white shadow-lg"
      style={{ fontVariantNumeric: "tabular-nums" }}>
      ⏲ {formatCountdown(cdRemaining(st.cd, now))}
    </button>
  );
}
