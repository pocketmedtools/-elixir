/**
 * Is the library written in points, or in paragraphs wearing bullets?
 *
 * The house style is one fact per point, carrying its number and the guideline
 * it comes from. This measures the distance from that, per subject, so the
 * rewrite has a progress bar rather than an opinion.
 *
 *   length   a point over 200 characters is a paragraph
 *   split    two or more sentences in one point is two or more points
 *   number   a clinical point with no figure in it is usually vague
 *   source   a bracketed guideline or year, so the reader can check it
 */
import { ensureAll, subjects } from "../src/content/index";

await ensureAll();

/** "[NICE NG28]", "[ADA 2025]", "[WHO 2022]", "(RCOG 2023)" and the like. */
const SOURCE = /\[[^\]]*(?:\d{4}|NICE|WHO|ADA|ICMR|NACO|RCOG|IAP|ESC|AHA|ACC|GINA|GOLD|KDIGO|ILAE|MDS|IDSA|NTEP|NBEMS|Park|Harrison|Nelson|Williams|Shaw|Dutta|Bailey|Dhingra|BNF|IPC|MoHFW)[^\]]*\]/i;
const NUMBER = /\d/;

type Row = { id: string; points: number; long: number; multi: number; num: number; src: number; mean: number };
const rows: Row[] = [];
let all = { points: 0, long: 0, multi: 0, num: 0, src: 0, chars: 0 };

for (const subject of subjects()) {
  const r: Row = { id: subject.id, points: 0, long: 0, multi: 0, num: 0, src: 0, mean: 0 };
  let chars = 0;
  for (const topic of subject.topics) {
    const points = [
      ...topic.sections.flatMap((s) => s.points),
      ...(topic.theory ?? []).flatMap((q) => q.answer.flatMap((a) => a.points)),
    ];
    for (const p of points) {
      r.points++;
      chars += p.length;
      if (p.length > 200) r.long++;
      if ((p.match(/[.;] /g) ?? []).length >= 2) r.multi++;
      if (NUMBER.test(p)) r.num++;
      if (SOURCE.test(p)) r.src++;
    }
  }
  r.mean = r.points ? Math.round(chars / r.points) : 0;
  rows.push(r);
  all.points += r.points; all.long += r.long; all.multi += r.multi;
  all.num += r.num; all.src += r.src; all.chars += chars;
}

const pct = (n: number, d: number) => (d ? `${Math.round((n / d) * 100)}%` : "-");
rows.sort((a, b) => b.long / b.points - a.long / a.points);

console.log("subject                    points  mean  >200c  multi  number  source");
for (const r of rows) {
  console.log(
    `${r.id.padEnd(24)} ${String(r.points).padStart(6)} ${String(r.mean).padStart(5)}` +
      ` ${pct(r.long, r.points).padStart(6)} ${pct(r.multi, r.points).padStart(6)}` +
      ` ${pct(r.num, r.points).padStart(7)} ${pct(r.src, r.points).padStart(7)}`,
  );
}
console.log(
  `\nALL${" ".repeat(21)} ${String(all.points).padStart(6)} ${String(Math.round(all.chars / all.points)).padStart(5)}` +
    ` ${pct(all.long, all.points).padStart(6)} ${pct(all.multi, all.points).padStart(6)}` +
    ` ${pct(all.num, all.points).padStart(7)} ${pct(all.src, all.points).padStart(7)}`,
);
console.log("\nTarget: mean under 140, >200c under 5%, multi under 3%, number over 85%, source over 60%.");
