/**
 * One classification a day, as a notification on the phone.
 *
 * The rotation is deterministic - `chartOfTheDay` picks by day number, so the
 * notification, the card on the charts screen and anything else asking on the
 * same date all name the same chart, and every score comes round once before
 * any repeats.
 *
 * Scheduling is done for a fortnight at a time rather than as one repeating
 * alarm, because a repeating notification can only carry fixed text: the point
 * here is that each day names a different chart. Fourteen concrete
 * notifications, re-armed whenever the app is opened, gives that without
 * needing a server or a push certificate.
 *
 * This is the installed Android app only. A web page cannot raise a
 * notification once its tab is closed without a push service behind it, and a
 * daily study reminder is not worth that.
 */
import type { ChartEntry } from "./chartIndex";
import { chartOfTheDay, dayNumber } from "./chartIndex";

/** How many days ahead to lay down concrete notifications. */
const HORIZON = 14;
/** Local hour the notification arrives. */
const HOUR = 8;

type Plugin = {
  checkPermissions(): Promise<{ display: string }>;
  requestPermissions(): Promise<{ display: string }>;
  getPending(): Promise<{ notifications: { id: number }[] }>;
  cancel(o: { notifications: { id: number }[] }): Promise<void>;
  schedule(o: { notifications: unknown[] }): Promise<void>;
  addListener(e: string, cb: (a: { notification: { extra?: { chartId?: string } } }) => void): void;
};

/** Native only. On the web the import is skipped entirely. */
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

/**
 * Arms the next fortnight of daily notifications and returns how many were
 * scheduled. Safe to call on every launch: pending ones are cleared first, so
 * re-arming never stacks duplicates.
 */
export async function armDailyChart(index: ChartEntry[]): Promise<number> {
  const LN = await plugin();
  if (!LN || !index.length) return 0;

  let perm = await LN.checkPermissions();
  if (perm.display !== "granted") perm = await LN.requestPermissions();
  if (perm.display !== "granted") return 0;

  const pending = await LN.getPending();
  const ours = pending.notifications.filter((n) => n.id >= 41_000 && n.id < 42_000);
  if (ours.length) await LN.cancel({ notifications: ours });

  const now = Date.now();
  const today = dayNumber(now);
  const notifications = [];
  for (let i = 0; i < HORIZON; i++) {
    const day = today + i;
    const entry = chartOfTheDay(index, day);
    if (!entry) continue;
    const at = new Date(now);
    at.setDate(at.getDate() + i);
    at.setHours(HOUR, 0, 0, 0);
    if (at.getTime() <= now) continue; // today's hour has already passed
    notifications.push({
      id: 41_000 + (day % 1000),
      title: entry.heading,
      body: `${entry.subjectTitle} - ${entry.topicTitle}. Tap to open the chart.`,
      schedule: { at },
      extra: { chartId: entry.id },
    });
  }
  if (!notifications.length) return 0;
  await LN.schedule({ notifications });
  return notifications.length;
}

/**
 * Calls back with the chart id when a notification is tapped, so the app can
 * open that chart rather than the home screen.
 */
export async function onDailyChartTapped(open: (chartId: string) => void): Promise<void> {
  const LN = await plugin();
  if (!LN) return;
  LN.addListener("localNotificationActionPerformed", (a) => {
    const id = a.notification?.extra?.chartId;
    if (id) open(id);
  });
}
