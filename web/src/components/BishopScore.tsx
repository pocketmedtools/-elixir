import { usePersist } from "../lib/lastState";
import { BISHOP_ITEMS, bishopPlan, bishopTotal, type BishopAnswers } from "../lib/bishopMath";
import SaveButton from "./SaveButton";

/**
 * The standard Bishop chart: score columns 0–3 across, one row per cervical
 * feature. Tap the cell that matches the examination.
 */
export default function BishopScore() {
  const [answers, setAnswers] = usePersist<BishopAnswers>("bishop", "answers", {});
  const total = bishopTotal(answers);
  const plan = total != null ? bishopPlan(total) : null;
  const done = BISHOP_ITEMS.filter((it) => answers[it.id] != null).length;

  return (
    <div className="mx-auto max-w-xl px-3 py-5">
      <h2 className="text-xl font-extrabold tracking-tight text-slate-900">Modified Bishop Score</h2>

      <div className="mt-3 overflow-hidden rounded-xl border-2 border-slate-300 bg-white">
        <table className="w-full table-fixed border-collapse text-center text-sm">
          <thead>
            <tr className="bg-[#f1e2c8] text-xs font-black text-slate-700">
              <th className="w-[24%] px-2 py-2 text-left">Score</th>
              {[0, 1, 2, 3].map((n) => <th key={n} className="py-2">{n}</th>)}
            </tr>
          </thead>
          <tbody>
            {BISHOP_ITEMS.map((item) => (
              <tr key={item.id} className="border-t-2 border-slate-200">
                <th scope="row" className="px-2 py-1.5 text-left text-xs font-extrabold leading-tight text-slate-800">{item.label}</th>
                {[0, 1, 2, 3].map((col) => {
                  const idx = item.options.findIndex((o) => o.points === col);
                  if (idx < 0) return <td key={col} className="bg-slate-50" />;
                  const on = answers[item.id] === idx;
                  return (
                    <td key={col} className="p-1">
                      <button type="button" aria-pressed={on} aria-label={`${item.label}: ${item.options[idx].label}`}
                        onClick={() => setAnswers((a) => ({ ...a, [item.id]: idx }))}
                        className={`w-full rounded-md border-2 px-0 py-2 ${item.options[idx].label.length > 5 ? "text-[11px] tracking-tight" : "text-[13px]"} font-extrabold leading-tight ${on ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white text-slate-800"}`}>
                        {item.options[idx].label}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {plan && total != null ? (
        <section className="mt-4 overflow-hidden rounded-xl border-2 border-slate-900 bg-white">
          <div className={`flex items-center justify-between gap-3 px-4 py-3 text-white ${plan.band === "favourable" ? "bg-emerald-800" : "bg-red-700"}`}>
            <div>
              <p className="text-lg font-black">{plan.title}</p>
              <p className="text-xs font-bold text-white/85">{plan.band === "favourable" ? "Score > 6" : "Score ≤ 6"} (NICE)</p>
            </div>
            <p className="text-4xl font-black leading-none">{total}<span className="text-base font-bold text-white/80">/13</span></p>
          </div>
          <div className="px-4 py-3 text-sm">
            <p className="font-extrabold text-slate-900">{plan.action}</p>
            <p className="mt-1 font-semibold text-slate-600">{plan.note}</p>
          </div>
        </section>
      ) : (
        <p className="mt-4 text-sm font-semibold text-slate-600">
          {done === 0 ? "Tap one box in each row." : `${done} of 5 rows done`}
        </p>
      )}

      <p className="mt-3 text-[11px] leading-snug text-slate-500">
        Modified Bishop (Calder): cervical length replaces effacement. NICE NG207 (2021) and WHO 2022 induction of labour guidance.
      </p>

      <SaveButton
        tool="Modified Bishop Score"
        build={() =>
          plan && total != null
            ? {
                title: `Modified Bishop ${total}/13 — ${plan.title}`,
                detail: BISHOP_ITEMS.map((it) => `${it.label.split(" (")[0]}: ${it.options[answers[it.id]!].label}`).join(" · "),
              }
            : null
        }
      />
    </div>
  );
}
