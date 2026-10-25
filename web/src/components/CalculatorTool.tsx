import { useEffect, useRef, useState } from "react";
import { usePersist } from "../lib/lastState";
import { evaluate, formatResult } from "../lib/calcMath";

const KEYS: { k: string; kind?: "op" | "fn" | "eq" }[][] = [
  [{ k: "⌫", kind: "fn" }, { k: "AC", kind: "fn" }, { k: "%", kind: "fn" }, { k: "÷", kind: "op" }],
  [{ k: "7" }, { k: "8" }, { k: "9" }, { k: "×", kind: "op" }],
  [{ k: "4" }, { k: "5" }, { k: "6" }, { k: "−", kind: "op" }],
  [{ k: "1" }, { k: "2" }, { k: "3" }, { k: "+", kind: "op" }],
  [{ k: "( )", kind: "fn" }, { k: "0" }, { k: "." }, { k: "=", kind: "eq" }],
];

const isOp = (c: string) => "+−×÷".includes(c);

export default function CalculatorTool() {
  const [expr, setExpr] = usePersist("calc", "expr", "");
  const [history, setHistory] = usePersist<string[]>("calc", "history", []);

  const live = expr ? evaluate(expr) : null;
  // Brief "pop" on the key just tapped (plus a tiny vibration) so every tap is confirmed.
  const [tapped, setTapped] = useState<{ k: string; n: number } | null>(null);
  const tap = (k: string) => {
    setTapped((t) => ({ k, n: (t?.n ?? 0) + 1 }));
    try { navigator.vibrate?.(12); } catch { /* not supported */ }
    press(k);
  };

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

  // Phone-calculator look: black body, dark-grey digits, light-grey
  // functions, orange operators; fills the screen below the app header.
  const plain = /^-?\d*\.?\d+$/.test(expr);
  const result = live != null && !plain ? formatResult(live) : null;
  const main = result ?? (expr || "0");
  // Panel runs from just under the header to the very bottom of the screen;
  // keys sit at the bottom, so all the space above is for long sums.
  const panel = useRef<HTMLElement>(null);
  const [height, setHeight] = useState<number | null>(null);
  useEffect(() => {
    const fit = () => {
      const el = panel.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      setHeight(Math.max(420, window.innerHeight - top - 6));
    };
    fit();
    window.addEventListener("resize", fit);
    // The header can grow after mount (recent-tools row), so re-fit on its size changes.
    const header = document.querySelector("header");
    const ro = header && typeof ResizeObserver !== "undefined" ? new ResizeObserver(fit) : null;
    if (header && ro) ro.observe(header);
    return () => {
      window.removeEventListener("resize", fit);
      ro?.disconnect();
    };
  }, []);
  return (
    <div className="mx-auto max-w-md px-2 pt-2">
      <h2 className="sr-only">Calculator</h2>
      <section ref={panel} style={height ? { height } : undefined}
        className={`flex ${height ? "" : "min-h-[calc(100dvh-7.5rem)]"} flex-col rounded-t-[2rem] rounded-b-[1.5rem] bg-black px-4 pb-4 pt-4 text-white`}>
        {history.length > 0 && (
          <div className="flex items-start justify-between gap-2 text-sm text-[#8e8e93]" style={{ fontVariantNumeric: "tabular-nums" }}>
            <button type="button" onClick={() => setHistory([])} className="text-xs font-semibold underline">Clear</button>
            <ul className="space-y-0.5 text-right">
              {history.slice(0, 3).map((h, i) => (
                <li key={i}>
                  <button type="button" className="text-right" onClick={() => setExpr(h.split(" = ")[0])}>{h}</button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-auto min-h-0 overflow-y-auto pb-3 text-right" aria-live="polite" style={{ fontVariantNumeric: "tabular-nums" }}>
          <p className={`min-h-[1.75rem] break-all text-2xl font-light text-[#a5a5aa] ${result ? "" : "invisible"}`}>{expr || "0"}</p>
          <p className={`break-all font-light leading-none ${main.length > 24 ? "text-3xl" : main.length > 14 ? "text-4xl" : main.length > 9 ? "text-5xl" : "text-7xl"}`}>{main}</p>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {KEYS.flat().map(({ k, kind }) => (
            <button key={tapped?.k === k ? `${k}-${tapped.n}` : k} type="button" aria-label={k === "⌫" ? "Backspace" : k} onClick={() => tap(k)}
              className={`calc-key aspect-square w-full rounded-full leading-none transition active:brightness-125 ${tapped?.k === k ? "calc-pop" : ""} ${
                kind === "eq" || kind === "op" ? "bg-[#ff9f0a] text-[2.2rem] font-medium text-white"
                  : kind === "fn" ? "bg-[#a5a5a5] text-[1.6rem] font-semibold text-black"
                  : "bg-[#333333] text-[2.2rem] font-normal text-white"
              }`}>
              {k}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
