import { usePersist } from "../lib/lastState";
import { evaluate, formatResult } from "../lib/calcMath";

const KEYS: { k: string; kind?: "op" | "fn" | "eq" }[][] = [
  [{ k: "AC", kind: "fn" }, { k: "( )", kind: "fn" }, { k: "%", kind: "fn" }, { k: "÷", kind: "op" }],
  [{ k: "7" }, { k: "8" }, { k: "9" }, { k: "×", kind: "op" }],
  [{ k: "4" }, { k: "5" }, { k: "6" }, { k: "−", kind: "op" }],
  [{ k: "1" }, { k: "2" }, { k: "3" }, { k: "+", kind: "op" }],
  [{ k: "0" }, { k: "." }, { k: "⌫", kind: "fn" }, { k: "=", kind: "eq" }],
];

// Number keys use the calendar's pastel day colours, each with a dark ink
// of the same hue for clear contrast.
const TINTS: Record<string, [string, string]> = {
  "7": ["#dbe7f3", "#1f3b73"], "8": ["#dcefea", "#1b6b62"], "9": ["#e3eff7", "#2b6a91"],
  "4": ["#e2f0dc", "#2f6b28"], "5": ["#f8efcf", "#7a5c00"], "6": ["#f8e1ea", "#9c3a64"],
  "1": ["#f5d9e3", "#8e1244"], "2": ["#dbe7f3", "#1f3b73"], "3": ["#dcefea", "#1b6b62"],
  "0": ["#e2f0dc", "#2f6b28"], ".": ["#f8efcf", "#7a5c00"],
};

const isOp = (c: string) => "+−×÷".includes(c);

export default function CalculatorTool() {
  const [expr, setExpr] = usePersist("calc", "expr", "");
  const [history, setHistory] = usePersist<string[]>("calc", "history", []);

  const live = expr ? evaluate(expr) : null;

  const press = (k: string) => {
    if (k === "AC") return setExpr("");
    if (k === "⌫") return setExpr((e) => e.slice(0, -1));
    if (k === "=") {
      const r = evaluate(expr);
      if (r == null) return;
      setHistory((h) => [`${expr} = ${formatResult(r)}`, ...h].slice(0, 5));
      return setExpr(/e/i.test(String(r)) ? expr : String(r));
    }
    if (k === "( )") {
      const open = (expr.match(/\(/g) ?? []).length - (expr.match(/\)/g) ?? []).length;
      const last = expr.slice(-1);
      const close = open > 0 && /[0-9.)%]/.test(last);
      return setExpr(expr + (close ? ")" : /[0-9.)%]/.test(last) ? "×(" : "("));
    }
    if (isOp(k)) {
      if (!expr) return setExpr(k === "−" ? "−" : "");
      // Replace a trailing operator instead of stacking two.
      return setExpr(isOp(expr.slice(-1)) ? expr.slice(0, -1) + k : expr + k);
    }
    if (k === ".") {
      const tail = expr.split(/[+−×÷()%]/).pop() ?? "";
      if (tail.includes(".")) return;
      return setExpr(expr + (tail === "" ? "0." : "."));
    }
    setExpr(expr + k);
  };

  return (
    <div className="mx-auto max-w-sm px-3 py-5">
      <h2 className="text-xl font-extrabold tracking-tight text-slate-900">Calculator</h2>

      <section className="mt-3 rounded-2xl border-2 border-slate-300 bg-white p-4">
        <div className="min-h-[5.5rem] text-right" aria-live="polite">
          <p className={`break-all ${/^-?\d*\.?\d+$/.test(expr) ? `font-black text-slate-900 ${expr.length > 12 ? "text-3xl" : "text-4xl"}` : `font-bold text-slate-700 ${expr.length > 16 ? "text-xl" : "text-2xl"}`}`} style={{ fontVariantNumeric: "tabular-nums" }}>{expr || "0"}</p>
          {(() => {
            // After "=" the expression is just the answer: don't repeat it.
            const plain = /^-?\d*\.?\d+$/.test(expr);
            const txt = live != null && !plain ? `= ${formatResult(live)}` : "\u00a0";
            return (
              <p className={`mt-1 break-all font-black text-slate-900 ${txt.length > 14 ? "text-2xl" : txt.length > 10 ? "text-3xl" : "text-4xl"}`}
                style={{ fontVariantNumeric: "tabular-nums" }}>
                {txt}
              </p>
            );
          })()}
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {KEYS.flat().map(({ k, kind }) => (
            <button key={k} type="button" aria-label={k === "⌫" ? "Backspace" : k} onClick={() => press(k)}
              style={!kind && TINTS[k] ? { background: TINTS[k][0], color: TINTS[k][1] } : undefined}
              className={`h-14 rounded-xl text-xl font-black transition active:scale-95 ${
                kind === "eq" ? "bg-[#7e22ce] text-white"
                  : kind === "op" ? "bg-[#efe3fb] text-[#7e22ce]"
                  : kind === "fn" ? "bg-[#f1e2c8] text-slate-800"
                  : "border border-white/70 shadow-sm"
              }`}>
              {k}
            </button>
          ))}
        </div>
      </section>

      {history.length > 0 && (
        <section className="mt-3 rounded-xl border-2 border-slate-200 bg-white p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-black uppercase tracking-wide text-slate-500">Recent</p>
            <button type="button" onClick={() => setHistory([])} className="text-xs font-bold text-slate-500 underline">Clear</button>
          </div>
          <ul className="mt-1 space-y-1 text-right text-sm font-semibold text-slate-700" style={{ fontVariantNumeric: "tabular-nums" }}>
            {history.map((h, i) => (
              <li key={i}>
                <button type="button" className="w-full text-right" onClick={() => setExpr(h.split(" = ")[0])}>{h}</button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
