/**
 * One topic a day, as a notification on the phone at 8 in the morning.
 *
 * The plan is laid down every time the app opens - not only when one
 * particular screen is visited, which is why the earlier daily chart never
 * arrived for anyone who did not open the charts screen. Fourteen days of
 * concrete notifications are scheduled, each naming a different topic, and a
 * plain daily reminder repeats after that so a reader who stays away for
 * weeks still gets nudged.
 *
 * Topics not yet opened come first, the most-examined (core) before the rest,
 * taken in turn across subjects so consecutive days do not all come from one
 * book. Opening the app re-plans, so a topic read early drops out.
 *
 * Inexact alarms that are allowed to fire in Doze: a reading reminder that
 * arrives a few minutes late is fine, and asking for the exact-alarm
 * permission sent people to a system settings page every time it re-armed.
 */
import { ensureAll, topicOrder, type IndexedTopic } from "../content/index";
import { FREQUENCY_ORDER } from "./types";
import { getState } from "./store";

const HORIZON = 14;
/** Hour and minute the reminder arrives, local time. */
export const DAILY_HOUR = 8;
const BASE_ID = 43_000;
const REPEAT_ID = 43_999;
const TEST_ID = 43_998;
const OLD_CHART_RANGE: [number, number] = [41_000, 42_000];
const CHANNEL = "fmprep-daily-topic";

type Notif = { id: number };
type Plugin = {
  checkPermissions(): Promise<{ display: string }>;
  requestPermissions(): Promise<{ display: string }>;
  getPending(): Promise<{ notifications: Notif[] }>;
  cancel(o: { notifications: Notif[] }): Promise<void>;
  schedule(o: { notifications: unknown[] }): Promise<unknown>;
  createChannel?(c: unknown): Promise<void>;
  addListener(e: string, cb: (a: { notification: { extra?: Record<string, string> } }) => void): void;
};

async function plugin(): Promise<Plugin | null> {
  const cap = (globalThis as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor;
  if (!cap?.isNativePlatform?.()) return null;
  try {
    const m = await import("@capacitor/local-notifications");
    return m.LocalNotifications as unknown as Plugin;
  } catch {
    return null;
  }
}

export type ReminderStatus = "on" | "off" | "denied" | "web";

/** The day's topic order: unread first, core first, subjects interleaved. */
export function plannedTopics(): IndexedTopic[] {
  const read = getState().topics;
  const order = topicOrder();
  const rank = (t: IndexedTopic) => {
    const r = FREQUENCY_ORDER.indexOf(t.topic.frequency);
    return r < 0 ? FREQUENCY_ORDER.length : r;
  };
  const pick = (list: IndexedTopic[]) => {
    // Round-robin across subjects within each frequency band.
    const out: IndexedTopic[] = [];
    for (let band = 0; band <= FREQUENCY_ORDER.length; band++) {
      const bySubject = new Map<string, IndexedTopic[]>();
      for (const t of list) if (rank(t) === band) bySubject.set(t.subjectId, [...(bySubject.get(t.subjectId) ?? []), t]);
      const queues = [...bySubject.values()];
      while (queues.some((q) => q.length)) for (const q of queues) if (q.length) out.push(q.shift()!);
    }
    return out;
  };
  const unread = order.filter((t) => !read[t.topic.id]);
  const done = order.filter((t) => read[t.topic.id]).sort((a, b) => read[a.topic.id].readAt - read[b.topic.id].readAt);
  return [...pick(unread), ...done];
}

/** Today's topic - the same one the notification named this morning. */
export function topicOfToday(): IndexedTopic | null {
  return plannedTopics()[0] ?? null;
}

async function ensureChannel(LN: Plugin) {
  try {
    await LN.createChannel?.({
      id: CHANNEL,
      name: "Daily topic",
      description: "One study topic every morning",
      importance: 4,
      visibility: 1,
      vibration: true,
    });
  } catch {
    /* older Android: no channels */
  }
}

/** Current state of the reminder, without prompting. */
export async function reminderStatus(): Promise<ReminderStatus> {
  const LN = await plugin();
  if (!LN) return "web";
  const perm = await LN.checkPermissions();
  if (perm.display === "denied") return "denied";
  if (perm.display !== "granted") return "off";
  const pending = await LN.getPending();
  return pending.notifications.some((n) => n.id >= BASE_ID && n.id <= REPEAT_ID) ? "on" : "off";
}

/**
 * Lay down the next fortnight of daily topics. Safe on every launch: our
 * pending notifications are cleared first, so re-arming never stacks.
 * `ask` decides whether a missing permission is requested now.
 */
export async function armDailyTopic(ask = true): Promise<ReminderStatus> {
  const LN = await plugin();
  if (!LN) return "web";
  let perm = await LN.checkPermissions();
  if (perm.display !== "granted" && ask) perm = await LN.requestPermissions();
  if (perm.display !== "granted") return perm.display === "denied" ? "denied" : "off";

  await ensureAll();
  const plan = plannedTopics();
  if (!plan.length) return "off";
  await ensureChannel(LN);

  const pending = await LN.getPending();
  const stale = pending.notifications.filter(
    (n) =>
      (n.id >= BASE_ID && n.id <= REPEAT_ID && n.id !== TEST_ID) ||
      (n.id >= OLD_CHART_RANGE[0] && n.id < OLD_CHART_RANGE[1]),
  );
  if (stale.length) await LN.cancel({ notifications: stale });

  const now = new Date();
  const notifications: unknown[] = [];
  let k = 0;
  for (let d = 0; d < HORIZON + 1 && k < plan.length; d++) {
    const at = new Date(now);
    at.setDate(now.getDate() + d);
    at.setHours(DAILY_HOUR, 0, 0, 0);
    if (at.getTime() <= now.getTime() + 60_000) continue; // today's 8 am has passed
    const t = plan[k++];
    notifications.push({
      id: BASE_ID + d,
      channelId: CHANNEL,
      title: `Today's topic: ${t.topic.title}`,
      body: `${t.subjectTitle}. Tap to read it now.`,
      largeBody: `${t.subjectTitle} - ${t.topic.oneLiner}`.slice(0, 400),
      schedule: { at, allowWhileIdle: true },
      isExactNotification: false,
      extra: { topicId: t.topic.id },
    });
  }
  // After the fortnight: a plain reminder every day until the app is opened again.
  const after = new Date(now);
  after.setDate(now.getDate() + HORIZON + 1);
  after.setHours(DAILY_HOUR, 0, 0, 0);
  notifications.push({
    id: REPEAT_ID,
    channelId: CHANNEL,
    title: "Your topic for today is waiting",
    body: "Open FM Prep to read today's topic.",
    schedule: { at: after, every: "day", allowWhileIdle: true },
    isExactNotification: false,
    extra: {},
  });
  await LN.schedule({ notifications });
  return "on";
}

/** A notification shown right now, to check the phone displays them. */
export async function sendTestNotification(): Promise<boolean> {
  const LN = await plugin();
  if (!LN) return false;
  let perm = await LN.checkPermissions();
  if (perm.display !== "granted") perm = await LN.requestPermissions();
  if (perm.display !== "granted") return false;
  await ensureChannel(LN);
  await ensureAll();
  const t = topicOfToday();
  await LN.schedule({
    notifications: [
      {
        id: TEST_ID,
        channelId: CHANNEL,
        title: t ? `Today's topic: ${t.topic.title}` : "FM Prep test",
        body: t ? `${t.subjectTitle}. Tap to read it now.` : "Notifications are working.",
        extra: t ? { topicId: t.topic.id } : {},
      },
    ],
  });
  return true;
}

/** Opens the named topic when a daily notification is tapped. */
export async function onDailyTopicTapped(open: (topicId: string) => void): Promise<void> {
  const LN = await plugin();
  if (!LN) return;
  LN.addListener("localNotificationActionPerformed", (a) => {
    const id = a.notification?.extra?.topicId;
    if (id) open(id);
  });
}
