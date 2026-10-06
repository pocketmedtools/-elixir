/**
 * Today's topic on the home page, with the state of the 8 AM reminder and a
 * button that fires a notification at once so the phone can be checked.
 */
import { useEffect, useState } from "react";
import { Bell, BellOff, BookOpen } from "lucide-react";
import {
  DAILY_HOUR,
  armDailyTopic,
  reminderStatus,
  sendTestNotification,
  topicOfToday,
  type ReminderStatus,
} from "../lib/dailyTopic";
import { allSubjectsLoaded, ensureAll } from "../content/index";
import type { StudyView } from "./StudyModule";

export default function DailyTopicCard({ onGo }: { onGo: (view: StudyView) => void }) {
  const [status, setStatus] = useState<ReminderStatus | null>(null);
  const [note, setNote] = useState("");
  const ready = allSubjectsLoaded();

  useEffect(() => {
    if (!ready) void ensureAll();
  }, [ready]);

  useEffect(() => {
    void reminderStatus().then(setStatus).catch(() => setStatus("web"));
  }, []);

  const today = ready ? topicOfToday() : null;
  const hour = `${DAILY_HOUR > 12 ? DAILY_HOUR - 12 : DAILY_HOUR}:00 ${DAILY_HOUR >= 12 ? "PM" : "AM"}`;

  const turnOn = async () => {
    setNote("");
    const s = await armDailyTopic(true).catch(() => "off" as ReminderStatus);
    setStatus(s);
    if (s === "denied" || s === "off") setNote("Allow notifications for FM Prep in phone Settings → Apps → FM Prep → Notifications.");
  };

  const test = async () => {
    const ok = await sendTestNotification().catch(() => false);
    setNote(ok ? "Sent — check your notification panel." : "Blocked. Allow notifications in phone Settings → Apps → FM Prep → Notifications.");
    if (ok) await turnOn();
  };

  return (
    <section className="mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm ink-spine" style={{ ["--row-ink" as string]: "#0f3460" }}>
      <div className="text-[12px] font-bold uppercase tracking-wider text-slate-500">Today's topic</div>
      {today ? (
        <button
          type="button"
          onClick={() => onGo({ name: "topic", id: today.topic.id })}
          className="mt-1.5 flex w-full items-start gap-2 text-left"
        >
          <BookOpen className="mt-1 h-4 w-4 shrink-0" aria-hidden />
          <span>
            <span className="block text-[16px] font-bold text-slate-900">{today.topic.title}</span>
            <span className="block text-[13px] text-slate-600">{today.subjectTitle} · tap to read</span>
          </span>
        </button>
      ) : (
        <div className="mt-1.5 text-[14px] text-slate-500">Loading…</div>
      )}

      {status && status !== "web" && (
        <div className="mt-3 flex flex-wrap items-center gap-2 text-[13px]">
          {status === "on" ? (
            <span className="flex items-center gap-1.5 font-semibold" style={{ color: "#14532d" }}>
              <Bell className="h-3.5 w-3.5" aria-hidden /> Reminder every day at {hour}
            </span>
          ) : (
            <button
              type="button"
              onClick={() => void turnOn()}
              className="flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-2 font-bold text-white"
            >
              <BellOff className="h-3.5 w-3.5" aria-hidden /> Turn on daily reminder
            </button>
          )}
          <button
            type="button"
            onClick={() => void test()}
            className="rounded-lg border border-slate-300 px-3 py-2 font-semibold text-slate-700"
          >
            Send test notification
          </button>
        </div>
      )}
      {note && <div className="mt-2 text-[13px] text-slate-600">{note}</div>}
    </section>
  );
}
