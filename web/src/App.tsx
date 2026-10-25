import { Fragment, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { clearLast, usePersist, type Codec } from "./lib/lastState";
import HomeScreen from "./components/HomeScreen";
import SavedScreen from "./components/SavedScreen";
import SideMenu, { type MenuTarget } from "./components/SideMenu";
import BmiCalculator from "./components/BmiCalculator";
import BiliTool from "./components/BiliTool";
import BpCentiles from "./components/BpCentiles";
import CreatinineClearance from "./components/CreatinineClearance";
import GrowthCalculator from "./components/GrowthCalculator";
import InsulinTool from "./components/InsulinTool";
import PediatricDosageCalculator from "./components/PediatricDosageCalculator";
import HolCalculator from "./components/HolCalculator";
import TimerTool from "./components/TimerTool";
import AncScanTool from "./components/AncScanTool";
import BishopScore from "./components/BishopScore";
import CalculatorTool from "./components/CalculatorTool";
import CalendarTool from "./components/CalendarTool";
import TimerFloat from "./components/TimerFloat";
import NotesTool from "./components/NotesTool";
import { NotebookPen } from "lucide-react";
import ToolHistory from "./components/ToolHistory";
import { setActiveTool } from "./lib/calcHistory";
import NewbornWeightLoss from "./components/NewbornWeightLoss";
import ObCalculator from "./components/ObCalculator";
import RegimenAnalyzerUI from "./components/RegimenAnalyzerUI";
import ReportIssue from "./components/ReportIssue";
import ToolIcon, { TOOL_HEX } from "./components/ToolIcon";
import { getVersion, subscribe } from "./lib/accounts";
import { isNativeApp } from "./lib/liveUpdate";

type AppTab = MenuTarget;

// Recently used tools (most recent first), keeping only tools that still exist.
const RECENT_CODEC: Codec<AppTab[]> = {
  save: (list) => list,
  load: (raw) =>
    Array.isArray(raw) ? (raw.filter((t) => typeof t === "string" && t in TOOL_HEX) as AppTab[]).slice(0, 4) : undefined,
};

// Only reopen a tool that still exists in this version.
const TAB_CODEC: Codec<AppTab> = {
  save: (t) => t,
  load: (raw) => (typeof raw === "string" && raw in TOOL_HEX ? (raw as AppTab) : undefined),
};

export default function App() {
  // Reopens on the tool that was open last (entries are kept per tool).
  const [tab, setTab] = usePersist<AppTab>("app", "tab", "home", TAB_CODEC);
  // Bumped by "New patient" to remount the open tool with empty entries.
  const [resetKey, setResetKey] = useState(0);
  const clearable = !["home", "saved", "report", "timer", "calc", "calendar", "notes"].includes(tab);
  const [menuOpen, setMenuOpen] = useState(false);
  useSyncExternalStore(subscribe, getVersion);
  // No sign-in screen: the app opens straight onto the last calculation.
  // Signing in (only needed to save to an account) lives in the ☰ menu; the
  // Save button asks for it by opening the menu at the account section.
  useEffect(() => {
    const open = () => {
      setMenuOpen(true);
      window.setTimeout(() => document.getElementById("pm-account")?.scrollIntoView({ behavior: "smooth" }), 80);
    };
    window.addEventListener("pm-open-account", open);
    return () => window.removeEventListener("pm-open-account", open);
  }, []);

  // Back: menu open → close it; a tool open → Home; on Home → close the app.
  // Without this the Android back gesture did nothing on Home (the app's
  // back handler swallowed it), so the app could not be closed by swiping.
  const tabRef = useRef(tab);
  tabRef.current = tab;
  const menuRef = useRef(menuOpen);
  menuRef.current = menuOpen;
  const native = isNativeApp();
  const exitApp = () => {
    import("@capacitor/app").then(({ App }) => App.exitApp()).catch(() => {});
  };
  useEffect(() => {
    if (!native) return;
    let handle: { remove: () => void } | null = null;
    let cancelled = false;
    import("@capacitor/app")
      .then(({ App }) =>
        App.addListener("backButton", () => {
          if (menuRef.current) setMenuOpen(false);
          else if (tabRef.current !== "home") setTab("home");
          else App.exitApp();
        }),
      )
      .then((h) => {
        if (cancelled) h.remove();
        else handle = h;
      })
      .catch(() => {});
    return () => {
      cancelled = true;
      handle?.remove();
    };
  }, [native, setTab]);
  // Website: the browser Back button returns from a tool to Home too.
  useEffect(() => {
    if (native) return;
    const onPop = () => {
      setMenuOpen(false);
      setTab("home");
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [native, setTab]);
  useEffect(() => {
    if (native || tab === "home") return;
    if (!(window.history.state && window.history.state.pmTool)) window.history.pushState({ pmTool: true }, "");
  }, [native, tab]);

  // Inputs marked data-adv="N" jump focus to the next field once N digits
  // are typed, so a full entry never needs a manual tap on the next box.
  useEffect(() => {
    const onInput = (e: Event) => {
      const el = e.target;
      if (!(el instanceof HTMLInputElement)) return;
      const adv = Number(el.dataset.adv);
      if (!adv) return;
      if (el.value.replace(/\D/g, "").length < adv) return;
      const scope = el.closest("main") ?? document.body;
      const fields = Array.from(
        scope.querySelectorAll<HTMLElement>("input, select, textarea"),
      ).filter((f) => !f.hasAttribute("disabled"));
      const i = fields.indexOf(el);
      if (i >= 0 && i + 1 < fields.length) fields[i + 1].focus();
    };
    document.addEventListener("input", onInput);
    return () => document.removeEventListener("input", onInput);
  }, []);

  // Ordered to match the home-screen categories: Pediatrics, OBG, Utilities, Medicine.
  const tabs: {
    id: AppTab;
    label: string;
    shortLabel: string;
    active: string;
    idle: string;
  }[] = [
    {
      id: "pedDose",
      label: "Ped Dose Calculator",
      shortLabel: "Ped Dose",
      active: "bg-blue-900 text-white shadow-sm",
      idle: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    },
    {
      id: "growth",
      label: "Growth Charts",
      shortLabel: "Growth",
      active: "bg-violet-900 text-white shadow-sm",
      idle: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    },
    {
      id: "bp",
      label: "Ped-BP",
      shortLabel: "Ped-BP",
      active: "bg-cyan-900 text-white shadow-sm",
      idle: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    },
    {
      id: "hol",
      label: "Hours of Life",
      shortLabel: "HOL",
      active: "bg-sky-900 text-white shadow-sm",
      idle: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    },
    {
      id: "nbWeight",
      label: "Newborn Wt Loss",
      shortLabel: "NB Wt",
      active: "bg-lime-900 text-white shadow-sm",
      idle: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    },
    {
      id: "bili",
      label: "Jaundice (Bili)",
      shortLabel: "Bili",
      active: "bg-yellow-900 text-white shadow-sm",
      idle: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    },
    {
      id: "ob",
      label: "OB / EDD",
      shortLabel: "OB",
      active: "bg-fuchsia-900 text-white shadow-sm",
      idle: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    },
    {
      id: "ancScan",
      label: "ANC Scan",
      shortLabel: "ANC Scan",
      active: "bg-violet-900 text-white shadow-sm",
      idle: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    },
    {
      id: "bishop",
      label: "Bishop Score",
      shortLabel: "Bishop",
      active: "bg-rose-900 text-white shadow-sm",
      idle: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    },
    {
      id: "calc",
      label: "Calculator",
      shortLabel: "Calc",
      active: "bg-slate-900 text-white shadow-sm",
      idle: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    },
    {
      id: "calendar",
      label: "Calendar",
      shortLabel: "Calendar",
      active: "bg-teal-900 text-white shadow-sm",
      idle: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    },
    {
      id: "notes",
      label: "Notes",
      shortLabel: "Notes",
      active: "bg-slate-900 text-white shadow-sm",
      idle: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    },
    {
      id: "timer",
      label: "Timer",
      shortLabel: "Timer",
      active: "bg-green-900 text-white shadow-sm",
      idle: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    },
    {
      id: "crCl",
      label: "Creatinine Clearance",
      shortLabel: "CrCl",
      active: "bg-teal-900 text-white shadow-sm",
      idle: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    },
    {
      id: "insulin",
      label: "Insulin",
      shortLabel: "Insulin",
      active: "bg-indigo-900 text-white shadow-sm",
      idle: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    },
    {
      id: "regimen",
      label: "Polypharm",
      shortLabel: "Polypharm",
      active: "bg-rose-900 text-white shadow-sm",
      idle: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    },
    {
      id: "bmi",
      label: "BMI",
      shortLabel: "BMI",
      active: "bg-emerald-900 text-white shadow-sm",
      idle: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    },
  ];

  setActiveTool(tab);
  // Top bar shows only the 4 most recently used tools.
  const [recent, setRecent] = usePersist<AppTab[]>("app", "recent", [], RECENT_CODEC);
  useEffect(() => {
    if (tab === "home" || tab === "saved" || tab === "report") return;
    setRecent((prev) => (prev[0] === tab ? prev : [tab, ...prev.filter((x) => x !== tab)].slice(0, 4)));
  }, [tab, setRecent]);
  const recentTabs = recent
    .map((id) => tabs.find((t) => t.id === id))
    .filter((t): t is (typeof tabs)[number] => !!t);

  // Quick logo pop on open, then straight to the last tool.
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setSplash(false), 1100);
    return () => clearTimeout(t);
  }, []);
  const splashEl = splash ? (
    <div className="splash" aria-hidden>
      <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" />
    </div>
  ) : null;

  return (
    <div className="flex min-h-screen flex-col">
      {splashEl}
      <header className="app-header border-b border-[var(--line)]" style={{ background: "var(--card)" }}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-3 gap-y-2 px-3 py-2.5 md:px-6">
          <div className="flex shrink-0 items-center gap-2">
            {tab !== "home" && (
              <button
                type="button"
                aria-label="Back to Home"
                onClick={() => setTab("home")}
                className="rounded-lg border-2 border-slate-300 bg-white px-2.5 py-1 text-lg font-black leading-none text-slate-800"
              >
                ←
              </button>
            )}
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="rounded-lg px-2 py-1.5 text-xl leading-none text-slate-700 hover:bg-slate-100"
            >
              ☰
            </button>
            <button
              type="button"
              onClick={() => setTab("home")}
              className="flex items-center"
            >
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Pocket-Med"
                className="h-10 w-auto"
              />
            </button>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              aria-label="Notes"
              onClick={() => setTab("notes")}
              className={`rounded-lg border-2 px-2.5 py-1.5 leading-none transition active:scale-90 ${tab === "notes" ? "border-black bg-black text-white" : "border-slate-300 bg-white text-slate-800"}`}
            >
              <NotebookPen size={20} strokeWidth={2.2} />
            </button>
            {native && (
              <button
                type="button"
                aria-label="Close app"
                onClick={exitApp}
                className="rounded-lg border-2 border-slate-300 bg-white px-2.5 py-1 text-lg font-black leading-none text-slate-800"
              >
                ✕
              </button>
            )}
          </div>
          {recentTabs.length > 0 && (
            <nav className="flex w-full flex-wrap items-center gap-1.5" aria-label="Recently used tools">
              {recentTabs.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id)}
                  className="rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition sm:text-sm"
                  style={
                    tab === t.id
                      ? { background: TOOL_HEX[t.id], borderColor: TOOL_HEX[t.id], color: "#ffffff" }
                      : { background: "var(--card-2)", borderColor: "var(--line)", color: TOOL_HEX[t.id] }
                  }
                >
                  <span className="hidden sm:inline">{t.label}</span>
                  <span className="sm:hidden">{t.shortLabel}</span>
                </button>
              ))}
            </nav>
          )}
        </div>
        <div className="brand-ribbon" />
      </header>

      <TimerFloat hidden={tab === "timer"} raised={tab === "notes" || tab === "calc"} onOpen={() => setTab("timer")} />
      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} onNavigate={(t) => setTab(t)} />

      <main className={`tool-stage tool-${tab} flex-1`}>
        <ToolIcon id={tab} className="tool-watermark" strokeWidth={1} style={{ color: TOOL_HEX[tab] }} />
        {clearable && (
          <div className="mx-auto -mb-3 flex max-w-4xl justify-between gap-2 px-3 pt-3" style={{ position: "relative", zIndex: 30 }}>
            <ToolHistory tool={tab} />
            <button
              type="button"
              onClick={() => {
                if (window.confirm("Clear all entries in this tool for a new patient?")) {
                  clearLast(tab);
                  setResetKey((k) => k + 1);
                }
              }}
              className="rounded-lg border-2 border-slate-300 bg-white px-3 py-1.5 text-xs font-extrabold text-slate-800"
            >
              ↺ New patient
            </button>
          </div>
        )}
        <Fragment key={resetKey}>
        {tab === "home" && <HomeScreen onOpen={(t) => setTab(t)} />}
        {tab === "saved" && <SavedScreen />}
        {tab === "pedDose" && <PediatricDosageCalculator />}
        {tab === "growth" && <GrowthCalculator />}
        {tab === "bp" && <BpCentiles />}
        {tab === "hol" && <HolCalculator />}
        {tab === "nbWeight" && <NewbornWeightLoss />}
        {tab === "bili" && <BiliTool />}
        {tab === "bmi" && <BmiCalculator />}
        {tab === "crCl" && <CreatinineClearance />}
        {tab === "regimen" && <RegimenAnalyzerUI />}
        {tab === "insulin" && <InsulinTool />}
        {tab === "ob" && <ObCalculator />}
        {tab === "ancScan" && <AncScanTool />}
        {tab === "bishop" && <BishopScore />}
        {tab === "timer" && <TimerTool />}
        {tab === "calc" && <CalculatorTool />}
        {tab === "notes" && <NotesTool />}
        {tab === "calendar" && <CalendarTool />}
        {tab === "report" && <ReportIssue />}
        </Fragment>
      </main>

      {/* Clinical disclaimer: not shown on the general tools (calculator, timer, calendar). */}
      {!["calc", "timer", "calendar", "notes"].includes(tab) && (
        <footer className="border-t border-[var(--line)] bg-[var(--card)] px-3 py-4 text-center text-xs leading-relaxed text-[var(--muted)] md:px-6">
          Pocket-Med is a clinical decision-support tool for licensed healthcare
          professionals. It does not replace clinical judgment, diagnosis, or
          emergency care. Verify all doses and plans before prescribing.
        </footer>
      )}
    </div>
  );
}
