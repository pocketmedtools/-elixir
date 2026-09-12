import { ensureAll, subjects } from "../src/content/index";
await ensureAll();
const CITE = /\[[^\]]{2,60}\]\s*$/;
const REASON = /(?: - | because | since | so that | which is why |, so |, as )/i;
for (const s of subjects()) {
  if (s.id !== "renal-urology") continue;
  for (const t of s.topics) {
    for (const sec of t.sections) for (const p of sec.points) {
      const body = p.replace(CITE, "");
      const miss = [!REASON.test(body) ? "R" : "", !CITE.test(p) ? "S" : ""].join("");
      if (miss) console.log(`${miss}\t${t.id}\t${p}`);
    }
    for (const q of t.theory ?? []) for (const a of q.answer) for (const p of a.points) {
      const body = p.replace(CITE, "");
      const miss = [!REASON.test(body) ? "R" : "", !CITE.test(p) ? "S" : ""].join("");
      if (miss) console.log(`${miss}\t${q.id}\t${p}`);
    }
  }
}
