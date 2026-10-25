import { useState, useSyncExternalStore } from "react";
import {
  getCurrentProfile,
  getVersion,
  requestPasswordReset,
  resetPassword,
  signIn,
  signOut,
  signUp,
  subscribe,
  verifyResetCode,
} from "../lib/accounts";
import { APK_URL, isWebsite } from "../lib/platform";
import ToolIcon, { TOOL_TEXT } from "./ToolIcon";

export type MenuTarget =
  | "home" | "pedDose" | "growth" | "bp" | "nbWeight" | "hol" | "bili" | "bmi" | "crCl" | "regimen" | "insulin" | "ob" | "ancScan" | "bishop" | "calc" | "calendar" | "notes" | "timer" | "saved" | "report";

const LINK_GROUPS: {
  heading: string | null;
  links: { id: MenuTarget; label: string }[];
}[] = [
  { heading: null, links: [{ id: "home", label: "Home" }] },
  {
    heading: "Pediatrics",
    links: [
      { id: "pedDose", label: "Ped Dose Calculator" },
      { id: "growth", label: "Growth Charts" },
      { id: "bp", label: "Ped-BP" },
      { id: "hol", label: "Hours of Life" },
      { id: "nbWeight", label: "Newborn Weight Loss" },
      { id: "bili", label: "Neonatal Jaundice (Bili)" },
    ],
  },
  { heading: "OBG", links: [{ id: "ob", label: "OB / EDD" }, { id: "ancScan", label: "ANC Scan (Growth & Doppler)" }, { id: "bishop", label: "Modified Bishop Score" }] },
  {
    heading: "Medicine",
    links: [
      { id: "crCl", label: "Creatinine Clearance" },
      { id: "insulin", label: "Insulin" },
      { id: "regimen", label: "Polypharm" },
      { id: "bmi", label: "BMI" },
    ],
  },
  { heading: "General", links: [{ id: "timer", label: "Timer / Stopwatch" }, { id: "calc", label: "Calculator" }, { id: "calendar", label: "Calendar" }, { id: "notes", label: "Notes" }] },
  {
    heading: null,
    links: [
      { id: "saved", label: "Saved Calculations" },
      { id: "report", label: "Report an Issue" },
    ],
  },
];

const inputCls =
  "mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500";

export default function SideMenu({
  open,
  onClose,
  onNavigate,
}: {
  open: boolean;
  onClose: () => void;
  onNavigate: (t: MenuTarget) => void;
}) {
  useSyncExternalStore(subscribe, getVersion);
  const profile = getCurrentProfile();
  const [mode, setMode] = useState<"signin" | "signup" | "forgot">("signin");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  if (!open) return null;

  const submit = async () => {
    setBusy(true);
    setErr(null);
    const result =
      mode === "signup"
        ? await signUp("", phone, password)
        : await signIn(phone, password);
    setBusy(false);
    if (!result.ok) {
      setErr(result.error);
      return;
    }
    setPhone("");
    setPassword("");
    setMode("signin");
  };

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-label="Menu">
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 h-full w-full bg-slate-900/40"
      />
      <div className="absolute left-0 top-0 flex h-full w-72 max-w-[85vw] flex-col overflow-y-auto bg-white shadow-2xl">
        <div className="border-b border-slate-200 p-3">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Pocket-Med" className="h-10 w-auto" />
        </div>
        <nav className="flex-1 p-2">
          {LINK_GROUPS.map((group, gi) => (
            <div key={group.heading ?? `group-${gi}`} className="mb-1 last:mb-0">
              {group.heading && (
                <p className="section-label px-3 pb-1 pt-2 text-[12px]">
                  {group.heading}
                </p>
              )}
              {group.links.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => {
                    onNavigate(l.id);
                    onClose();
                  }}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-slate-900 hover:bg-slate-100"
                >
                  <ToolIcon id={l.id} className={`h-4.5 w-4.5 ${TOOL_TEXT[l.id]}`} /> {l.label}
                </button>
              ))}
            </div>
          ))}
          {/* Direct APK download — only meaningful when browsing the website */}
          {isWebsite() && (
            <div className="mt-1">
              <a
                href={APK_URL}
                download="Pocket-Med.apk"
                className="flex w-full items-center gap-3 rounded-lg bg-emerald-50 px-3 py-2.5 text-left text-sm font-bold text-emerald-900 hover:bg-emerald-100"
              >
                ⬇ Download Android app (APK)
              </a>
              <p className="px-3 pt-1 text-[10px] leading-snug text-slate-500">
                Chrome asks "File might be harmful" for EVERY app installed
                outside the Play Store — tap "Download anyway", then open the
                file from the notification shade to install.
              </p>
            </div>
          )}
        </nav>
        <div id="pm-account" className="border-t border-slate-200 p-4">
          {!profile && (
            <p className="mb-2 text-[11px] font-semibold text-slate-600">
              Optional — only needed to save calculations to an account.
            </p>
          )}
          {profile ? (
            <>
              <p className="text-sm font-bold text-slate-900">{profile.phone}</p>
              {profile.name !== profile.phone && (
                <p className="text-xs text-slate-600">{profile.name}</p>
              )}
              <button
                type="button"
                onClick={signOut}
                className="mt-2 text-xs font-semibold text-rose-700 underline"
              >
                Sign out
              </button>
            </>
          ) : mode === "forgot" ? (
            <ForgotPassword
              initialPhone={phone}
              onDone={() => { setPhone(""); setPassword(""); setErr(null); setMode("signin"); }}
            />
          ) : (
            <>
              <div className="flex rounded-lg bg-slate-100 p-1 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => { setMode("signin"); setErr(null); }}
                  className={`flex-1 rounded-md px-2 py-1.5 ${mode === "signin" ? "bg-white text-slate-900 shadow" : "text-slate-600"}`}
                >
                  Sign in
                </button>
                <button
                  type="button"
                  onClick={() => { setMode("signup"); setErr(null); }}
                  className={`flex-1 rounded-md px-2 py-1.5 ${mode === "signup" ? "bg-white text-slate-900 shadow" : "text-slate-600"}`}
                >
                  Sign up
                </button>
              </div>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                inputMode="tel"
                className={inputCls}
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={mode === "signup" ? "Password (min 6 digits)" : "Password"}
                type="password"
                inputMode="numeric"
                className={inputCls}
              />
              {err && <p className="mt-1 text-xs text-red-700">{err}</p>}
              {mode === "signin" && (
                <button
                  type="button"
                  onClick={() => { setErr(null); setMode("forgot"); }}
                  className="mt-1.5 text-xs font-bold text-sky-800 underline"
                >
                  Forgot password?
                </button>
              )}
              <button
                type="button"
                onClick={submit}
                disabled={busy}
                className="mt-2 w-full rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
              >
                {mode === "signup" ? "Create account" : "Sign in"}
              </button>
              <p className="mt-2 text-[11px] leading-snug text-slate-600">
                Saved calculations stay on this device. At sign-up your phone number is shared once with the app maintainer for records.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/** Forgot password: phone number → 4-digit code → new password. */
function ForgotPassword({ initialPhone, onDone }: { initialPhone: string; onDone: () => void }) {
  const [step, setStep] = useState<"phone" | "code" | "newpass">("phone");
  const [phone, setPhone] = useState(initialPhone);
  const [code, setCode] = useState("");
  const [shown, setShown] = useState<string | null>(null);
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const send = () => {
    setErr(null);
    setCode("");
    const r = requestPasswordReset(phone);
    if (!r.ok) { setErr(r.error); return; }
    setShown(r.code);
    setStep("code");
  };
  const check = () => {
    const r = verifyResetCode(phone, code);
    if (!r.ok) { setErr(r.error); return; }
    setErr(null);
    setStep("newpass");
  };
  const save = async () => {
    if (pw !== pw2) { setErr("The two passwords don't match."); return; }
    setBusy(true);
    const r = await resetPassword(phone, pw);
    setBusy(false);
    if (!r.ok) { setErr(r.error); return; }
    onDone();
  };

  return (
    <div>
      <p className="text-sm font-black text-slate-900">Reset password</p>
      <p className="mt-0.5 text-[11px] font-semibold text-slate-500">
        Step {step === "phone" ? 1 : step === "code" ? 2 : 3} of 3 —{" "}
        {step === "phone" ? "your phone number" : step === "code" ? "enter the 4-digit code" : "choose a new password"}
      </p>

      {step === "phone" && (
        <>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Registered phone number"
            inputMode="tel" className={inputCls} />
          {err && <p className="mt-1 text-xs text-red-700">{err}</p>}
          <button type="button" onClick={send} className={primaryCls}>Send code</button>
        </>
      )}

      {step === "code" && (
        <>
          {shown && (
            <div className="mt-2 rounded-lg border-2 border-sky-200 bg-sky-50 px-3 py-2">
              <p className="text-[11px] font-bold text-sky-900">Your code for {phone}</p>
              <p className="text-2xl font-black tracking-[0.4em] text-sky-950" data-testid="reset-code">{shown}</p>
              <p className="text-[10px] leading-snug text-sky-900">Valid 5 minutes. Accounts are kept on this phone only, so the code is shown here.</p>
            </div>
          )}
          <input value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 4))}
            placeholder="• • • •" inputMode="numeric" autoComplete="one-time-code" maxLength={4} aria-label="4-digit code"
            className={`${inputCls} text-center text-xl font-black tracking-[0.5em]`} />
          {err && <p className="mt-1 text-xs text-red-700">{err}</p>}
          <button type="button" onClick={check} disabled={code.length !== 4} className={primaryCls}>Verify code</button>
          <button type="button" onClick={send} className="mt-1.5 text-xs font-bold text-sky-800 underline">Resend code</button>
        </>
      )}

      {step === "newpass" && (
        <>
          <input value={pw} onChange={(e) => setPw(e.target.value)} placeholder="New password (min 6)" type="password"
            inputMode="numeric" className={inputCls} />
          <input value={pw2} onChange={(e) => setPw2(e.target.value)} placeholder="Repeat new password" type="password"
            inputMode="numeric" className={inputCls} />
          {err && <p className="mt-1 text-xs text-red-700">{err}</p>}
          <button type="button" onClick={save} disabled={busy} className={primaryCls}>Save & sign in</button>
        </>
      )}

      <button type="button" onClick={onDone} className="mt-2 block text-xs font-semibold text-slate-600 underline">
        ← Back to sign in
      </button>
    </div>
  );
}

const primaryCls =
  "mt-2 w-full rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-50";
