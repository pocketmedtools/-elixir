import { usePersist } from "../lib/lastState";
import {
  BIOMETRY_RANGE, SCAN_SCHEDULE, SERIAL_NOTES, UA_RANGE, assessLiquor, biometryCentile, efwCentile,
  gaLabel, hadlockEfw, mcaPsvMoM, scanPlan, scheduleStatus, uaCentile,
  type BiometryParam, type Centile, type DvFlow, type Tone, type UaFlow,
} from "../lib/ancScanMath";
import SaveButton from "./SaveButton";

const TONE: Record<Tone, string> = {
  ok: "bg-emerald-800",
  watch: "bg-amber-700",
  check: "bg-sky-800",
  treat: "bg-red-700",
  urgent: "bg-purple-900",
  emergency: "bg-red-950",
};

const field =
  "w-full min-w-0 rounded-lg border-2 border-slate-300 bg-white px-3 py-2.5 text-base font-semibold text-slate-900 outline-none focus:border-slate-900";
const sel =
  "w-full rounded-lg border-2 border-slate-300 bg-white px-2 py-2.5 text-base font-semibold text-slate-900 outline-none focus:border-slate-900";
const seg = (on: boolean) =>
  `rounded-lg border-2 px-2 py-2 text-sm font-extrabold ${on ? "border-slate-900 bg-slate-900 text-white" : "border-slate-300 bg-white text-slate-800"}`;
const card = "rounded-xl border-2 border-slate-300 bg-white p-4";
const label = "text-xs font-bold text-slate-700";

const num = (s: string): number | undefined => {
  if (s.trim() === "") return undefined;
  const n = Number(s);
  return Number.isFinite(n) ? n : undefined;
};

function bandColor(c: number): string {
  if (c < 3) return "#85282f";
  if (c < 10) return "#b35c00";
  if (c > 97) return "#4a2c6d";
  if (c > 90) return "#6a4a9a";
  return "#116f39";
}

/** Horizontal centile bar with 3rd/10th/50th/90th/97th marks. */
function CentileBar({ name, value, c, note }: { name: string; value: string; c: Centile | null; note?: string }) {
  return (
    <div className="py-2">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-sm font-extrabold text-slate-900">{name}</span>
        <span className="text-sm font-bold text-slate-700">
          {value}
          {c && (
            <span className="ml-2 rounded-md px-1.5 py-0.5 text-xs font-black text-white" style={{ background: bandColor(c.centile) }}>
              {c.centile < 1 ? "< 1st" : c.centile > 99 ? "> 99th" : `${Math.round(c.centile)}th`} centile
            </span>
          )}
        </span>
      </div>
      {c ? (
        <div className="relative mt-1.5 h-3 rounded-full bg-[#ebe0cc]">
          <div className="absolute inset-y-0 left-0 rounded-l-full bg-[#f3d6d6]" style={{ width: "10%" }} />
          <div className="absolute inset-y-0 right-0 rounded-r-full bg-[#e6dcf0]" style={{ width: "10%" }} />
          {[3, 10, 50, 90, 97].map((m) => (
            <span key={m} className="absolute inset-y-0 w-px bg-slate-500" style={{ left: `${m}%` }} />
          ))}
          <span className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow"
            style={{ left: `${Math.min(99.5, Math.max(0.5, c.centile))}%`, background: bandColor(c.centile) }} />
        </div>
      ) : null}
      {note && <p className="mt-1 text-[11px] font-semibold text-slate-500">{note}</p>}
    </div>
  );
}

const PARAMS: { id: BiometryParam; label: string }[] = [
  { id: "bpd", label: "BPD" },
  { id: "hc", label: "HC" },
  { id: "ac", label: "AC" },
  { id: "fl", label: "FL" },
];

export default function AncScanTool() {
  const [view, setView] = usePersist<"growth" | "schedule">("ancScan", "view", "growth");
  const [gaW, setGaW] = usePersist("ancScan", "gaW", 32);
  const [gaD, setGaD] = usePersist("ancScan", "gaD", 0);
  const [unit, setUnit] = usePersist<"mm" | "cm">("ancScan", "unit", "mm");
  const [bpd, setBpd] = usePersist("ancScan", "bpd", "");
  const [hc, setHc] = usePersist("ancScan", "hc", "");
  const [ac, setAc] = usePersist("ancScan", "ac", "");
  const [fl, setFl] = usePersist("ancScan", "fl", "");
  const [efwReport, setEfwReport] = usePersist("ancScan", "efwReport", "");
  const [prev, setPrev] = usePersist("ancScan", "prevCentile", "");
  const [sdp, setSdp] = usePersist("ancScan", "sdp", "");
  const [afi, setAfi] = usePersist("ancScan", "afi", "");
  const [uaPi, setUaPi] = usePersist("ancScan", "uaPi", "");
  const [uaFlow, setUaFlow] = usePersist<UaFlow>("ancScan", "uaFlow", "normal");
  const [mcaPi, setMcaPi] = usePersist("ancScan", "mcaPi", "");
  const [cprLow5, setCprLow5] = usePersist("ancScan", "cprLow5", false);
  const [utaHigh, setUtaHigh] = usePersist("ancScan", "utaHigh", false);
  const [dv, setDv] = usePersist<DvFlow>("ancScan", "dv", "normal");
  const [psv, setPsv] = usePersist("ancScan", "psv", "");
  const [diabetes, setDiabetes] = usePersist("ancScan", "diabetes", false);

  const ga = gaW + gaD / 7;
  const toMm = (s: string) => {
    const v = num(s);
    return v == null ? undefined : unit === "cm" ? v * 10 : v;
  };
  const vals: Record<BiometryParam, number | undefined> = { bpd: toMm(bpd), hc: toMm(hc), ac: toMm(ac), fl: toMm(fl) };
  const setters: Record<BiometryParam, [string, (v: string) => void]> = { bpd: [bpd, setBpd], hc: [hc, setHc], ac: [ac, setAc], fl: [fl, setFl] };
  const cent = (p: BiometryParam) => (vals[p] != null ? biometryCentile(p, ga, vals[p]!) : null);

  const calcEfw = hadlockEfw(vals);
  const efwG = num(efwReport) ?? calcEfw?.grams ?? null;
  const efwC = efwG != null ? efwCentile(ga, efwG) : null;
  const uaPiN = num(uaPi);
  const uaC = uaPiN != null ? uaCentile("pi", ga, uaPiN) : null;
  const mcaPiN = num(mcaPi);
  const cpr = uaPiN && mcaPiN ? Math.round((mcaPiN / uaPiN) * 100) / 100 : null;
  const liquor = assessLiquor(num(sdp), num(afi));
  const mom = num(psv) != null ? mcaPsvMoM(ga, num(psv)!) : null;
  const acC = cent("ac");

  const plan = scanPlan({
    ga,
    acCentile: acC?.centile ?? null,
    efwCentile: efwC?.centile ?? null,
    efwGrams: efwG,
    prevCentile: num(prev) ?? null,
    uaPiCentile: uaC?.centile ?? null,
    uaFlow,
    cpr,
    cprLow5,
    utaHigh,
    dv,
    liquor,
    mcaMoM: mom,
    diabetes,
  });
  const anyInput = acC != null || efwC != null || uaFlow !== "normal" || dv !== "normal" || liquor != null || mom != null || uaC != null;
  const sched = scheduleStatus(ga);

  return (
    <div className="mx-auto max-w-xl px-3 py-5">
      <h2 className="text-xl font-extrabold tracking-tight text-slate-900">ANC Scan</h2>

      <div className="mt-3 grid grid-cols-2 gap-1.5" role="radiogroup" aria-label="Section">
        <button type="button" role="radio" aria-checked={view === "growth"} onClick={() => setView("growth")} className={seg(view === "growth")}>
          Growth &amp; Doppler
        </button>
        <button type="button" role="radio" aria-checked={view === "schedule"} onClick={() => setView("schedule")} className={seg(view === "schedule")}>
          Scan schedule
        </button>
      </div>

      <section className={`mt-3 ${card}`}>
        <span className={label}>Gestational age (by dating scan)</span>
        <div className="mt-1 flex items-center gap-2">
          <select aria-label="Gestation weeks" value={gaW} onChange={(e) => setGaW(Number(e.target.value))} className={sel}>
            {Array.from({ length: 37 }, (_, i) => i + 6).map((w) => <option key={w} value={w}>{w} wk</option>)}
          </select>
          <span className="font-black text-slate-700">+</span>
          <select aria-label="Gestation days" value={gaD} onChange={(e) => setGaD(Number(e.target.value))} className={sel}>
            {Array.from({ length: 7 }, (_, i) => i).map((d) => <option key={d} value={d}>{d} d</option>)}
          </select>
        </div>
      </section>

      {view === "schedule" ? (
        <>
          {sched.missedNote && (
            <p className="mt-3 rounded-xl bg-amber-700 px-4 py-3 text-sm font-bold text-white">{sched.missedNote}</p>
          )}
          <ol className="mt-3 space-y-2">
            {SCAN_SCHEDULE.map((s) => {
              const now = sched.current.includes(s);
              const next = sched.next?.id === s.id;
              const past = ga >= s.to;
              return (
                <li key={s.id} className={`rounded-xl border-2 p-3 ${now ? "border-emerald-800 bg-white" : "border-slate-300 bg-white"} ${past ? "opacity-70" : ""}`}>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-base font-extrabold text-slate-900">{s.name}</p>
                      <p className="text-xs font-bold text-slate-600">{s.window}</p>
                    </div>
                    <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-black text-white ${now ? "bg-emerald-800" : next ? "bg-sky-800" : past ? "bg-slate-500" : "bg-slate-400"}`}>
                      {now ? "DUE NOW" : next ? "NEXT" : past ? "WINDOW PASSED" : "LATER"}
                    </span>
                  </div>
                  {(now || next) && (
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-800">
                      {s.checks.map((c) => <li key={c}>{c}</li>)}
                    </ul>
                  )}
                </li>
              );
            })}
          </ol>
          <div className={`mt-3 ${card}`}>
            <p className="section-label text-[13px]">Also</p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-800">
              {SERIAL_NOTES.map((n) => <li key={n}>{n}</li>)}
            </ul>
          </div>
        </>
      ) : (
        <>
          {/* Biometry */}
          <section className={`mt-3 ${card}`}>
            <div className="flex items-center justify-between gap-2">
              <p className="section-label text-[13px]">Biometry</p>
              <div className="flex gap-1" role="radiogroup" aria-label="Biometry unit">
                {(["mm", "cm"] as const).map((u) => (
                  <button key={u} type="button" role="radio" aria-checked={unit === u} onClick={() => setUnit(u)} className={`${seg(unit === u)} px-3 py-1`}>{u}</button>
                ))}
              </div>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {PARAMS.map((p) => (
                <label key={p.id} className={label}>
                  {p.label} ({unit})
                  <input type="number" inputMode="decimal" aria-label={p.label} value={setters[p.id][0]}
                    onChange={(e) => setters[p.id][1](e.target.value)} className={`mt-1 ${field}`} />
                </label>
              ))}
              <label className={label}>
                EFW on report (g) — optional
                <input type="number" inputMode="numeric" aria-label="EFW on report" value={efwReport} onChange={(e) => setEfwReport(e.target.value)}
                  placeholder={calcEfw ? String(calcEfw.grams) : ""} className={`mt-1 ${field}`} />
              </label>
              <label className={label}>
                Previous AC/EFW centile — optional
                <input type="number" inputMode="decimal" aria-label="Previous centile" value={prev} onChange={(e) => setPrev(e.target.value)} className={`mt-1 ${field}`} />
              </label>
            </div>
            {(ga < BIOMETRY_RANGE.min) && <p className="mt-2 text-xs font-bold text-red-700">Biometry centiles apply from 14 weeks.</p>}
          </section>

          {/* Liquor */}
          <section className={`mt-3 ${card}`}>
            <p className="section-label text-[13px]">Liquor</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <label className={label}>
                SDP / DVP (cm) — preferred
                <input type="number" inputMode="decimal" aria-label="SDP" value={sdp} onChange={(e) => setSdp(e.target.value)} className={`mt-1 ${field}`} />
              </label>
              <label className={label}>
                AFI (cm)
                <input type="number" inputMode="decimal" aria-label="AFI" value={afi} onChange={(e) => setAfi(e.target.value)} className={`mt-1 ${field}`} />
              </label>
            </div>
          </section>

          {/* Doppler */}
          <section className={`mt-3 ${card}`}>
            <p className="section-label text-[13px]">Doppler</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <label className={label}>
                Umbilical artery PI
                <input type="number" inputMode="decimal" aria-label="UA PI" value={uaPi} onChange={(e) => setUaPi(e.target.value)} className={`mt-1 ${field}`} />
              </label>
              <label className={label}>
                MCA PI
                <input type="number" inputMode="decimal" aria-label="MCA PI" value={mcaPi} onChange={(e) => setMcaPi(e.target.value)} className={`mt-1 ${field}`} />
              </label>
            </div>
            <span className={`mt-3 block ${label}`}>UA end-diastolic flow</span>
            <div className="mt-1 grid grid-cols-3 gap-1.5" role="radiogroup" aria-label="UA end-diastolic flow">
              {([["normal", "Present"], ["aedf", "Absent"], ["redf", "Reversed"]] as const).map(([v, t]) => (
                <button key={v} type="button" role="radio" aria-checked={uaFlow === v} onClick={() => setUaFlow(v)} className={seg(uaFlow === v)}>{t}</button>
              ))}
            </div>
            <span className={`mt-3 block ${label}`}>Ductus venosus</span>
            <div className="mt-1 grid grid-cols-3 gap-1.5" role="radiogroup" aria-label="Ductus venosus">
              {([["normal", "Normal / not done"], ["highPi", "PI > 95th"], ["absentA", "a-wave absent/rev"]] as const).map(([v, t]) => (
                <button key={v} type="button" role="radio" aria-checked={dv === v} onClick={() => setDv(v)} className={`${seg(dv === v)} text-xs`}>{t}</button>
              ))}
            </div>
            <div className="mt-3 space-y-2">
              <label className="flex items-start gap-2 text-sm font-semibold text-slate-800">
                <input type="checkbox" checked={cprLow5} onChange={(e) => setCprLow5(e.target.checked)} className="mt-1 h-4 w-4" />
                Report says CPR or MCA PI below the 5th centile
              </label>
              <label className="flex items-start gap-2 text-sm font-semibold text-slate-800">
                <input type="checkbox" checked={utaHigh} onChange={(e) => setUtaHigh(e.target.checked)} className="mt-1 h-4 w-4" />
                Mean uterine artery PI above the 95th centile
              </label>
              <label className="flex items-start gap-2 text-sm font-semibold text-slate-800">
                <input type="checkbox" checked={diabetes} onChange={(e) => setDiabetes(e.target.checked)} className="mt-1 h-4 w-4" />
                Mother has diabetes (GDM / pre-existing)
              </label>
            </div>
            <label className={`mt-3 block ${label}`}>
              MCA peak systolic velocity (cm/s) — if anaemia suspected (Rh/alloimmunisation, parvovirus)
              <input type="number" inputMode="decimal" aria-label="MCA PSV" value={psv} onChange={(e) => setPsv(e.target.value)} className={`mt-1 ${field}`} />
            </label>
          </section>

          {/* Results */}
          {anyInput ? (
            <>
              <section className="mt-4 overflow-hidden rounded-xl border-2 border-slate-900 bg-white">
                <div className={`${TONE[plan.tone]} px-4 py-3 text-white`}>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-white/80">{gaLabel(ga)} wk · {plan.growthLabel}</p>
                  <p className="mt-0.5 text-lg font-black leading-snug">{plan.title}</p>
                  {plan.reasons.length > 0 && <p className="mt-1 text-xs font-semibold text-white/90">{plan.reasons.join(" · ")}</p>}
                </div>
                <dl className="divide-y-2 divide-slate-200 text-sm">
                  <div className="px-4 py-3">
                    <dt className="text-[11px] font-black uppercase tracking-wide text-slate-500">Surveillance</dt>
                    <dd className="mt-0.5 font-bold text-slate-900">{plan.surveillance}</dd>
                  </div>
                  <div className="px-4 py-3">
                    <dt className="text-[11px] font-black uppercase tracking-wide text-slate-500">Delivery</dt>
                    <dd className="mt-0.5 font-bold text-slate-900">{plan.delivery}</dd>
                  </div>
                  {plan.actions.length > 0 && (
                    <div className="px-4 py-3">
                      <dt className="text-[11px] font-black uppercase tracking-wide text-slate-500">Also</dt>
                      <dd className="mt-1">
                        <ul className="list-disc space-y-1 pl-5 font-semibold text-slate-800">
                          {plan.actions.map((a) => <li key={a}>{a}</li>)}
                        </ul>
                      </dd>
                    </div>
                  )}
                </dl>
              </section>

              <section className={`mt-3 ${card}`}>
                <p className="section-label text-[13px]">Centiles (INTERGROWTH-21st)</p>
                <div className="divide-y divide-slate-200">
                  {efwG != null && (
                    <CentileBar name="EFW" value={`${efwG} g`} c={efwC}
                      note={num(efwReport) != null ? "EFW from report" : calcEfw?.formula} />
                  )}
                  {PARAMS.map((p) => vals[p.id] != null && (
                    <CentileBar key={p.id} name={p.label} value={`${Math.round(vals[p.id]! * 10) / 10} mm`} c={cent(p.id)} />
                  ))}
                  {uaPiN != null && (
                    <CentileBar name="UA PI" value={String(uaPiN)} c={uaC}
                      note={ga < UA_RANGE.min ? "UA Doppler centiles apply from 24 weeks." : undefined} />
                  )}
                  {cpr != null && (
                    <div className="flex items-baseline justify-between py-2 text-sm">
                      <span className="font-extrabold text-slate-900">CPR (MCA PI ÷ UA PI)</span>
                      <span className={`font-black ${cpr < 1 ? "text-red-700" : "text-slate-900"}`}>{cpr}{cpr < 1 ? " — abnormal (< 1)" : ""}</span>
                    </div>
                  )}
                  {mom != null && (
                    <div className="flex items-baseline justify-between py-2 text-sm">
                      <span className="font-extrabold text-slate-900">MCA-PSV</span>
                      <span className={`font-black ${mom > 1.5 ? "text-red-700" : "text-slate-900"}`}>{mom} MoM{mom > 1.5 ? " — > 1.5" : ""}</span>
                    </div>
                  )}
                  {liquor && (
                    <div className="flex items-baseline justify-between gap-3 py-2 text-sm">
                      <span className="font-extrabold text-slate-900">Liquor</span>
                      <span className={`text-right font-black ${liquor.kind === "normal" ? "text-slate-900" : "text-red-700"}`}>{liquor.label}</span>
                    </div>
                  )}
                </div>
              </section>
            </>
          ) : (
            <p className="mt-4 text-sm font-semibold text-slate-600">Enter AC/FL (and other parameters) or Doppler findings — the classification and plan appear instantly.</p>
          )}

          <details className="mt-3 rounded-lg border border-slate-300 bg-white p-3 text-[11px] leading-snug text-slate-600">
            <summary className="cursor-pointer text-xs font-bold text-slate-800">Definitions and sources</summary>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              <li>SGA: AC or EFW &lt; 10th centile. LGA: &gt; 90th. Macrosomia: EFW ≥ 4000 g.</li>
              <li>Early FGR (&lt; 32 wk): AC/EFW &lt; 3rd, or UA absent/reversed EDF, or AC/EFW &lt; 10th with UtA PI &gt; 95th and/or UA PI &gt; 95th.</li>
              <li>Late FGR (≥ 32 wk): AC/EFW &lt; 3rd, or ≥ 2 of: AC/EFW &lt; 10th; crossing &gt; 2 quartiles; CPR &lt; 5th or UA PI &gt; 95th (Delphi consensus, Gordijn 2016; ISUOG 2020).</li>
              <li>Biometry: INTERGROWTH-21st fetal growth standards (Papageorghiou, Lancet 2014). EFW: Hadlock 1985; centiles on the INTERGROWTH-21st Hadlock EFW standard (Stirnemann, UOG 2020).</li>
              <li>UA PI centiles: INTERGROWTH-21st (Drukker, AJOG 2020), 24–40 wk. CPR &lt; 1 is always abnormal; for the 5th centile use the report&apos;s chart. MCA-PSV MoM: Mari, NEJM 2000.</li>
              <li>Liquor: oligohydramnios SDP &lt; 2 cm or AFI ≤ 5 cm; polyhydramnios SDP ≥ 8 cm or AFI ≥ 24 cm (SMFM/ACOG).</li>
              <li>Management: ISUOG 2020 FGR guideline; ACOG/SMFM Consult #52 &amp; CO 828; RCOG Green-top 31 (2024); WHO 2022 corticosteroids. Decide with the full clinical picture.</li>
            </ul>
          </details>

          <SaveButton
            tool="ANC Scan"
            build={() =>
              anyInput
                ? {
                    title: `${gaLabel(ga)} wk scan — ${plan.title}`,
                    detail: [
                      efwG != null && `EFW ${efwG} g${efwC ? ` (${Math.round(efwC.centile)}th)` : ""}`,
                      acC && `AC ${Math.round(acC.centile)}th`,
                      uaC && `UA PI ${uaPiN} (${Math.round(uaC.centile)}th)`,
                      uaFlow !== "normal" && `UA ${uaFlow.toUpperCase()}`,
                      cpr != null && `CPR ${cpr}`,
                      liquor?.label,
                      plan.delivery,
                    ].filter(Boolean).join(" · "),
                  }
                : null
            }
          />
        </>
      )}
    </div>
  );
}
