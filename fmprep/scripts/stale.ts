/**
 * Which citations are out of date, and where exactly?
 *
 * `npm run depth` gives the share; this gives the list, so a pass can be worked
 * rather than guessed at. A citation is stale when it names neither an edition
 * nor a year inside the last decade - a reader who traces it lands on a
 * guideline that has since been replaced.
 *
 *   npm run stale                    # every subject, counts only
 *   npm run stale preventive         # that subject, by topic
 *   npm run stale preventive tags    # the distinct stale tags, commonest first
 *
 * What this does NOT do, because it has been read that way and it matters:
 * a clean run here is not evidence that the content is current. This reads
 * the year printed inside a tag and nothing else. It never opens the
 * guideline, so a point tagged [ADA 2025] passes whether or not ADA 2025
 * said it, and whether or not ADA 2026 has since changed the number. For the
 * list of citations whose body has reissued since the tag was written - which
 * is 40 per cent of the library - use `npm run guidelines`.
 */
import { ensureAll, subjects } from "../src/content/index";
import { classify } from "./lib/citations";

await ensureAll();

const CITE = /\[[^\]]{2,60}\]\s*$/;

const stale = (tag: string) => ["stale", "undated"].includes(classify(tag));

const want = process.argv[2];
const mode = process.argv[3];

for (const s of subjects()) {
  if (want && s.id !== want) continue;
  const tally = new Map<string, number>();
  let total = 0, bad = 0;
  const byTopic: { title: string; bad: number; n: number }[] = [];

  for (const t of s.topics) {
    const pts = [
      ...t.sections.flatMap((x) => x.points),
      ...(t.theory ?? []).flatMap((q) => q.answer.flatMap((a) => a.points)),
    ];
    let tb = 0, tn = 0;
    for (const p of pts) {
      const m = p.match(CITE);
      if (!m) continue;
      tn++; total++;
      if (!stale(m[0])) continue;
      tb++; bad++;
      tally.set(m[0], (tally.get(m[0]) ?? 0) + 1);
    }
    byTopic.push({ title: t.title, bad: tb, n: tn });
  }

  console.log(`\n${s.id}  ${bad}/${total} citations stale`);
  if (!want) continue;
  for (const t of byTopic.sort((a, b) => b.bad - a.bad))
    if (t.bad) console.log(`  ${String(t.bad).padStart(4)}/${String(t.n).padEnd(5)} ${t.title}`);
  if (mode === "tags")
    for (const [tag, n] of [...tally].sort((a, b) => b[1] - a[1]))
      console.log(`  ${String(n).padStart(4)}  ${tag}`);
}
