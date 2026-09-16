/**
 * Which points still fail, exactly?
 *
 * `npm run depth` gives the share. This gives the list, so a pass can be
 * worked point by point without reading a 400 KB file to find them.
 *
 *   npm run failing cardiovascular              # per-topic counts
 *   npm run failing cardiovascular reason       # every point with no reason
 *   npm run failing cardiovascular source       # every point with no citation
 *   npm run failing cardiovascular stale        # every point with a stale or undated citation
 *   npm run failing cardiovascular all          # any of the three
 *
 * Add a topic id as a fourth argument to restrict to one topic. Output is one
 * JSON object per line: {topic, kind, text}. The text is the exact string in
 * the file, so it can be passed straight to `npm run apply`.
 */
import { ensureAll, subjects } from "../src/content/index";
import { classify } from "./lib/citations";

await ensureAll();

const CITE = /\[[^\]]{2,60}\]\s*$/;
const REASON = /(?: - | because | since | so that | which is why |, so |, as )/i;

const [id, kind = "counts", topicId] = process.argv.slice(2);
const s = subjects().find((x) => x.id === id);
if (!s) { console.error(`no subject ${id}`); process.exit(1); }

type Fail = "reason" | "source" | "stale";
const fails = (p: string): Fail[] => {
  const out: Fail[] = [];
  const m = p.match(CITE);
  if (!REASON.test(p.replace(CITE, ""))) out.push("reason");
  if (!m) out.push("source");
  else if (["stale", "undated"].includes(classify(m[0]))) out.push("stale");
  return out;
};

for (const t of s.topics) {
  if (topicId && t.id !== topicId) continue;
  const pts = [
    ...t.sections.flatMap((x) => x.points),
    ...(t.theory ?? []).flatMap((q) => q.answer.flatMap((a) => a.points)),
  ];
  const c = { reason: 0, source: 0, stale: 0 };
  for (const p of pts) {
    const f = fails(p);
    for (const k of f) c[k]++;
    if (kind === "counts") continue;
    if (kind === "all" ? f.length : f.includes(kind as Fail))
      console.log(JSON.stringify({ topic: t.id, kind: f.join("+"), text: p }));
  }
  if (kind === "counts")
    console.log(
      `${t.id.padEnd(48)} ${String(pts.length).padStart(4)} pts  ` +
        `reason ${String(c.reason).padStart(3)}  source ${String(c.source).padStart(3)}  stale ${String(c.stale).padStart(3)}`,
    );
}
