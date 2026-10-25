import { useEffect, useState, useSyncExternalStore } from "react";
import { activeTool, addHistory } from "../lib/calcHistory";
import {
  getCurrentProfile,
  getVersion,
  saveCalculation,
  subscribe,
} from "../lib/accounts";

export default function SaveButton({
  tool,
  build,
}: {
  tool: string;
  /** Return null when there is nothing meaningful to save yet. */
  build: () => { title: string; detail: string } | null;
}) {
  useSyncExternalStore(subscribe, getVersion);
  const profile = getCurrentProfile();
  const [flash, setFlash] = useState<string | null>(null);

  // Auto-history: once a finished result has stayed the same for 2.5 s,
  // add it to this tool's "last 5" list (shown at the top of the tool).
  let payload: { title: string; detail: string } | null = null;
  try {
    payload = build();
  } catch {
    payload = null;
  }
  const key = payload ? `${payload.title}\u0001${payload.detail}` : "";
  useEffect(() => {
    if (!key) return;
    const toolId = activeTool();
    const [title, detail] = key.split("\u0001");
    const t = window.setTimeout(() => { if (toolId) addHistory(toolId, title, detail); }, 2500);
    return () => window.clearTimeout(t);
  }, [key]);

  const onSave = () => {
    const payload = build();
    if (!payload) {
      setFlash("Nothing to save yet — complete the calculation first.");
    } else if (!profile) {
      // Signing in is only asked for here: open the menu at the account form.
      window.dispatchEvent(new Event("pm-open-account"));
      setFlash("Sign in (or sign up) in the menu, then tap Save again.");
    } else if (saveCalculation(tool, payload.title, payload.detail)) {
      setFlash(`Saved to ${profile.name}'s account ✓`);
    }
    window.setTimeout(() => setFlash(null), 2600);
  };

  return (
    <div className="mt-4 print:hidden">
      <button
        type="button"
        onClick={onSave}
        className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
      >
        💾 Save this calculation
      </button>
      {flash && <p className="mt-1.5 text-xs font-medium text-slate-600">{flash}</p>}
    </div>
  );
}
