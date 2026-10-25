/**
 * Calculator expression evaluator (no eval). Supports + − × ÷, parentheses,
 * decimals, unary minus and postfix % (divide by 100). Results are rounded to
 * 12 significant digits so 0.1 + 0.2 shows 0.3.
 */

type Tok = { t: "num"; v: number } | { t: "op"; v: string } | { t: "(" } | { t: ")" } | { t: "%" };

const PREC: Record<string, number> = { "+": 1, "-": 1, "*": 2, "/": 2, neg: 3 };

function tokenize(src: string): Tok[] | null {
  const s = src.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-").replace(/\s+/g, "");
  const out: Tok[] = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (/[0-9.]/.test(c)) {
      let j = i;
      while (j < s.length && /[0-9.]/.test(s[j])) j++;
      const txt = s.slice(i, j);
      if ((txt.match(/\./g) ?? []).length > 1 || txt === ".") return null;
      out.push({ t: "num", v: Number(txt) });
      i = j;
    } else if ("+-*/".includes(c)) {
      out.push({ t: "op", v: c });
      i++;
    } else if (c === "(") { out.push({ t: "(" }); i++; }
    else if (c === ")") { out.push({ t: ")" }); i++; }
    else if (c === "%") { out.push({ t: "%" }); i++; }
    else return null;
  }
  return out;
}

export function evaluate(src: string): number | null {
  const toks = tokenize(src);
  if (!toks || !toks.length) return null;
  const output: (number | string)[] = [];
  const ops: string[] = [];
  let prev: Tok | null = null;
  for (const tk of toks) {
    if (tk.t === "num") output.push(tk.v);
    else if (tk.t === "%") {
      if (!prev || (prev.t !== "num" && prev.t !== ")" && prev.t !== "%")) return null;
      output.push("%");
    } else if (tk.t === "op") {
      const unary = !prev || prev.t === "op" || prev.t === "(";
      if (unary) {
        if (tk.v === "-") ops.push("neg");
        else if (tk.v !== "+") return null;
      } else {
        while (ops.length) {
          const top = ops[ops.length - 1];
          if (top !== "(" && PREC[top] >= PREC[tk.v]) output.push(ops.pop()!);
          else break;
        }
        ops.push(tk.v);
      }
    } else if (tk.t === "(") ops.push("(");
    else {
      while (ops.length && ops[ops.length - 1] !== "(") output.push(ops.pop()!);
      if (!ops.length) return null;
      ops.pop();
    }
    prev = tk;
  }
  while (ops.length) {
    const op = ops.pop()!;
    if (op === "(") return null;
    output.push(op);
  }
  const st: number[] = [];
  for (const x of output) {
    if (typeof x === "number") st.push(x);
    else if (x === "%" || x === "neg") {
      if (!st.length) return null;
      const a = st.pop()!;
      st.push(x === "%" ? a / 100 : -a);
    } else {
      if (st.length < 2) return null;
      const b = st.pop()!, a = st.pop()!;
      st.push(x === "+" ? a + b : x === "-" ? a - b : x === "*" ? a * b : a / b);
    }
  }
  if (st.length !== 1 || !Number.isFinite(st[0])) return null;
  return Number(st[0].toPrecision(12));
}

/** Indian-style digit grouping with up to 10 decimals, e.g. 1,23,456.5 */
export function formatResult(n: number): string {
  // Very large/small: scientific notation with all 12 significant digits kept.
  if (Math.abs(n) >= 1e15 || (Math.abs(n) < 1e-9 && n !== 0)) return Number(n.toPrecision(12)).toExponential();
  return n.toLocaleString("en-IN", { maximumFractionDigits: 10 });
}
