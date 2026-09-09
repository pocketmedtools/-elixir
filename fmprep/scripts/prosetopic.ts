/**
 * Which topics still read like paragraphs, within one subject.
 *
 * The rewrite ran per subject-half, and a weekly limit cut some halves off, so
 * the state is now mixed inside a file. This lists each topic with its mean
 * point length and over-200 share, so a finishing pass can target only the ones
 * still long rather than re-cutting what is already done.
 */
import { ensureAll, subjects } from "../src/content/index";
await ensureAll();
const want = process.argv[2];
for (const s of subjects()) {
  if (want && s.id !== want) continue;
  console.log(`\n== ${s.id} ==`);
  for (const t of s.topics) {
    const pts = [
      ...t.sections.flatMap((x) => x.points),
      ...(t.theory ?? []).flatMap((q) => q.answer.flatMap((a) => a.points)),
    ];
    const mean = Math.round(pts.reduce((n, p) => n + p.length, 0) / pts.length);
    const long = pts.filter((p) => p.length > 200).length;
    const flag = mean > 150 || long / pts.length > 0.1 ? "  <-- LONG" : "";
    console.log(`  ${String(mean).padStart(4)}c  ${String(long).padStart(2)}/${String(pts.length).padStart(2)}>200  ${t.id}${flag}`);
  }
}
