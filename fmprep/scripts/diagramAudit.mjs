/**
 * Mechanical audit of every diagram: the faults a reader would see but a type
 * check would not. It answers four questions per diagram.
 *
 *   Does its key name a topic that exists?      an orphan diagram is never drawn
 *   Is every string plain ASCII?                em dashes and arrows break the
 *                                               canvas renderer in the APK
 *   Is every label short enough to fit a box?   over ~52 characters it wraps to
 *                                               three lines and the shape breaks
 *   Does the shape hold?                        a compare row with the wrong
 *                                               cell count, an empty branch arm
 *
 * What it cannot check is whether the diagram is clinically right; that is the
 * per-subject read against the topic digests in review/.
 *
 *   npm run diagrams
 */
import { readFileSync, readdirSync } from "node:fs";
const root = new URL("../", import.meta.url).pathname;
process.chdir(root);
const SUBJ = readdirSync("src/diagrams").filter(f => f.endsWith(".ts") && f !== "index.ts").map(f => f.replace(/\.ts$/, "")).filter(f => !f.startsWith("_"));
let issues = 0;
for (const s of SUBJ) {
  const mod = (await import(`${root}src/diagrams/${s}.ts`)).default;
  const content = readFileSync(`src/content/${s}.ts`, "utf8");
  const ids = new Set([...content.matchAll(/^  id: "([a-z0-9-]+)"/gm)].map(m => m[1]));
  const say = (m) => { console.log(`${s}: ${m}`); issues++; };
  for (const [key, list] of Object.entries(mod)) {
    if (!ids.has(key)) say(`key "${key}" is not a topic id`);
    for (const d of list) {
      const tag = `${key} / "${d.heading}"`;
      if (!d.heading || !d.heading.trim()) say(`${key}: empty heading`);
      const texts = [];
      const walk = (v) => {
        if (typeof v === "string") texts.push(v);
        else if (Array.isArray(v)) v.forEach(walk);
        else if (v && typeof v === "object") Object.values(v).forEach(walk);
      };
      walk(d);
      for (const t of texts) {
        const bad = [...t].filter(c => c.charCodeAt(0) > 126);
        if (bad.length) say(`${tag}: non-ASCII ${JSON.stringify([...new Set(bad)].join(""))} in ${JSON.stringify(t.slice(0, 70))}`);
      }
      const labels = [];
      const collectLabels = (v) => {
        if (v && typeof v === "object") {
          if (typeof v.label === "string") labels.push(v.label);
          Object.values(v).forEach(collectLabels);
        } else if (Array.isArray(v)) v.forEach(collectLabels);
      };
      collectLabels(d);
      for (const l of labels) if (l.length > 52) say(`${tag}: label ${l.length} chars: ${JSON.stringify(l.slice(0, 60))}`);
      if (d.kind === "compare") {
        const n = d.columns.length;
        d.rows.forEach((r, i) => { if (r.length !== n) say(`${tag}: row ${i} has ${r.length} cells, ${n} columns`); });
      }
      if (d.kind === "branch") {
        if (d.arms.length < 2) say(`${tag}: only ${d.arms.length} arm(s)`);
        d.arms.forEach(a => { if (!a.steps || !a.steps.length) say(`${tag}: empty arm "${a.label}"`); });
      }
      if (d.kind === "cycle" && d.steps.length < 3) say(`${tag}: cycle of ${d.steps.length}`);
      if (d.kind === "flow" && d.steps.length < 2) say(`${tag}: flow of ${d.steps.length}`);
      if (d.kind === "ladder" && d.steps.length < 2) say(`${tag}: ladder of ${d.steps.length}`);
    }
  }
}
console.log(issues ? `\n${issues} mechanical issues` : "\nno mechanical issues across all subjects");
process.exitCode = issues ? 1 : 0;
