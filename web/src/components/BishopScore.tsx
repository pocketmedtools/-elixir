import { usePersist } from "../lib/lastState";
import { BISHOP_ITEMS, bishopPlan, bishopTotal, type BishopAnswers } from "../lib/bishopMath";
import SaveButton from "./SaveButton";

const BAND_BG = { unfavourable: "bg-red-700", intermediate: "bg-amber-700", favourable: "bg-emerald-800" } as const;

export default function BishopScore() {
  const [answers, setAnswers] = usePersist<BishopAnswers>("bishop", "answers", {});
  const [prevCs, setPrevCs] = usePersist("bishop", "prevCs", false);
  const total = bishopTotal(answers);
  const plan = total != null ? bishopPlan(total, prevCs) : null;
  const partial = BISHOP_ITEMS.reduce((s, it) => {
    const i = answers[it.id];
    return s + (i != null ? it.options[i]?.points ?? 0 : 0);
  }, 0);
  const done = BISHOP_ITEMS.filter((it) => answers[it.id] != null).length;

  return (
    <div className="mx-auto max-w-xl px-3 py-5">
      <h2 className="text-xl font-extrabold tracking-tight text-slate-900">Modified Bishop Score</h2>

      <section className="mt-3 space-y-4 rounded-xl border-2 border-slate-300 bg-white p-4">
        {BISHOP_ITEMS.map((item) => (
          <div key={item.id}>
            <p className="text-xs font-bold text-slate-700">{item.label}</p>
            <div className={`mt-1 grid gap-1.5 ${item.options.length === 4 ? "grid-cols-4" : "grid-cols-3"}`} role="radiogroup" aria-label={item.label}>
              {item.options.map((o, i) => {
                const on = answers[item.id] === i;
                return (
                  <button key={o.label} type="button" role="radio" aria-checked={on}
                    onClick={() => setAnswers((a) => ({ ...a, [item.id]: i }))}
                    className={`rounded-lg border-2 px-1 py-2 text-center text-sm font-extrabold leading-tight ${on ? "border-slate-900 bg-slate-900 text-white" : "border-slate-300 bg-white text-slate-800"}`}>
                    {o.label}
                    <span className={`block text-[10px] font-bold ${on ? "text-white/80" : "text-slate-500"}`}>{o.points} pt</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
        <label className="flex items-start gap-2 text-sm font-semibold text-slate-800">
          <input type="checkbox" checked={prevCs} onChange={(e) => setPrevCs(e.target.checked)} className="mt-1 h-4 w-4" />
          Previous caesarean / uterine scar
        </label>
      </section>

      {plan && total != null ? (
        <section className="mt-4 overflow-hidden rounded-xl border-2 border-slate-900 bg-white">
          <div className={`${BAND_BG[plan.band]} px-4 py-3 text-white`}>
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/80">Modified Bishop score</p>
            <p className="text-4xl font-black leading-tight">{total} <span className="text-lg font-bold text-white/80">/ 13</span></p>
            <p className="mt-1 text-base font-extrabold">{plan.title}</p>
          </div>
          <ul className="list-disc space-y-1.5 py-3 pl-9 pr-4 text-sm font-semibold text-slate-800">
            {plan.steps.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </section>
      ) : (
        <p className="mt-4 text-sm font-semibold text-slate-600">
          {done === 0 ? "Tap one option in each row — the score and plan appear instantly." : `${done} of 5 chosen · ${partial} points so far`}
        </p>
      )}

      <p className="mt-3 text-[11px] leading-snug text-slate-500">
        Modified Bishop (Calder 1974): cervical length replaces effacement; total 0–13. ≤ 6 unfavourable, &gt; 6 favourable (NICE NG207, 2021);
        ≥ 8 best chance of vaginal birth (ACOG). Ripening: dinoprostone, oral misoprostol 25 µg 2-hourly or balloon catheter (WHO 2022).
      </p>

      <SaveButton
        tool="Modified Bishop Score"
        build={() =>
          plan && total != null
            ? {
                title: `Modified Bishop ${total}/13 — ${plan.band}`,
                detail: BISHOP_ITEMS.map((it) => `${it.label.split(" (")[0]}: ${it.options[answers[it.id]!].label}`).join(" · ") + (prevCs ? " · previous CS" : ""),
              }
            : null
        }
      />
    </div>
  );
}
