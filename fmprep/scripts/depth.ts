/**
 * Does every point carry its reasoning and its source?
 *
 * `npm run prose` measures shape - how long a point is, whether it holds one
 * fact. This measures substance, which is a different failure: a point can be
 * short, sharp and still be an unsupported assertion.
 *
 * Three things are counted per subject.
 *
 *   reason   the point gives a because, not only a what. A reason clause is
 *            introduced by " - ", or by one of a small set of connectives, and
 *            it is what separates a specialist answer from a list.
 *   source   the point ends in a bracketed guideline or standard text, so a
 *            reader can trace the figure. An untraceable number is a number a
 *            reader cannot use.
 *   recent   the source names a year from the last decade, or an edition. A
 *            citation of a 2009 guideline superseded twice is worse than none.
 *
 *   npm run depth              # every subject
 *   npm run depth cardiovascular
 */
import { ensureAll, subjects } from "../src/content/index";

await ensureAll();

const CITE = /\[[^\]]{2,60}\]\s*$/;
const YEAR = /\b(19|20)\d{2}\b/;
const EDITION = /\b\d{1,2}(?:e|th ed|nd ed|rd ed|st ed)\b/i;
// A reason clause: an em-free dash used as a connective, or a plain connective.
const REASON = /(?: - | because | since | so that | which is why |, so |, as )/i;
const THIS_YEAR = 2026;
const want = process.argv[2];

const rows: { id: string; n: number; reason: number; source: number; recent: number }[] = [];
for (const s of subjects()) {
  if (want && s.id !== want) continue;
  const pts = [
    ...s.topics.flatMap((t) => t.sections.flatMap((x) => x.points)),
    ...s.topics.flatMap((t) => (t.theory ?? []).flatMap((q) => q.answer.flatMap((a) => a.points))),
  ];
  let reason = 0, source = 0, recent = 0;
  for (const p of pts) {
    const body = p.replace(CITE, "");
    if (REASON.test(body)) reason++;
    const m = p.match(CITE);
    if (!m) continue;
    source++;
    const tag = m[0];
    const y = tag.match(YEAR);
    if (EDITION.test(tag) || (y && THIS_YEAR - Number(y[0]) <= 10)) recent++;
  }
  rows.push({ id: s.id, n: pts.length, reason, source, recent });
}

const pct = (a: number, b: number) => (b ? Math.round((a / b) * 100) : 0);
rows.sort((a, b) => pct(a.source, a.n) - pct(b.source, b.n));
console.log("subject                    points  reason  source  current");
for (const r of rows) {
  console.log(
    `${r.id.padEnd(26)} ${String(r.n).padStart(5)}  ` +
      `${String(pct(r.reason, r.n)).padStart(5)}%  ${String(pct(r.source, r.n)).padStart(5)}%  ` +
      `${String(pct(r.recent, Math.max(1, r.source))).padStart(6)}%`,
  );
}
const tot = rows.reduce((a, r) => ({ n: a.n + r.n, reason: a.reason + r.reason, source: a.source + r.source, recent: a.recent + r.recent }), { n: 0, reason: 0, source: 0, recent: 0 });
console.log(`\n${"ALL".padEnd(26)} ${String(tot.n).padStart(5)}  ${String(pct(tot.reason, tot.n)).padStart(5)}%  ${String(pct(tot.source, tot.n)).padStart(5)}%  ${String(pct(tot.recent, Math.max(1, tot.source))).padStart(6)}%`);
console.log("\nTarget: reason over 70%, source over 70%, current over 90% of the sources given.");
console.log('"current" is the share of citations naming an edition or a year within the last decade.');
