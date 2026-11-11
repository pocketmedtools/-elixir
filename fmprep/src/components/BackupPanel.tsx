/**
 * Backup and restore for "My documents" (see lib/backup.ts).
 *
 * In the app, every document is copied automatically to the phone's
 * Documents › FM Prep backup folder, which survives uninstalling the app. If
 * documents in that backup are missing here (storage cleared, app
 * reinstalled), a banner offers them back in one tap.
 */
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  backupMissingCount,
  backupStatus,
  downloadBackupZip,
  hasNativeBackup,
  restoreFromFolder,
  restoreFromPicked,
  subscribeBackup,
  syncBackup,
  type RestoreResult,
} from "../lib/backup";
import { getDocs } from "../lib/docs";

const when = (t: number) =>
  new Date(t).toLocaleString("en-IN", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });

export default function BackupPanel() {
  const native = hasNativeBackup();
  const status = useSyncExternalStore(subscribeBackup, backupStatus);
  const [missing, setMissing] = useState(0);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");
  const pick = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    let live = true;
    void backupMissingCount().then((n) => live && setMissing(n));
    return () => {
      live = false;
    };
  }, [status?.at]);

  const report = (r: RestoreResult) => {
    setMsg(
      `${r.restored} document${r.restored === 1 ? "" : "s"} restored` +
        (r.skipped ? `, ${r.skipped} already here` : "") +
        (r.missing.length ? `. ${r.missing.length} file${r.missing.length === 1 ? " was" : "s were"} not found: ${r.missing.slice(0, 3).join(", ")}${r.missing.length > 3 ? "…" : ""}` : "") +
        ".",
    );
    void backupMissingCount().then(setMissing);
  };

  /* Restore straight from Documents › FM Prep backup. */
  const restore = async () => {
    setBusy(true);
    setMsg("");
    try {
      const r = await restoreFromFolder();
      report(r);
    } catch {
      setMsg(
        "This install of the app cannot read that folder by itself (Android hides files an earlier install wrote). Tap “Choose backup files” and select every file in Documents › FM Prep backup.",
      );
    } finally {
      setBusy(false);
    }
  };

  /* The file picker must open from the tap itself, or Android blocks it. */
  const choose = () => {
    setMsg("");
    pick.current?.click();
  };

  const onPicked = async (files: FileList | null) => {
    if (!files?.length) return;
    setBusy(true);
    try {
      report(await restoreFromPicked([...files]));
    } catch (e) {
      setMsg(e instanceof Error ? e.message : "Could not restore from these files.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="mt-4 rounded-xl border p-3 text-[13.5px] leading-relaxed" style={{ borderColor: "var(--rule, #e5d5b8)", background: "var(--card, #fff)" }}>
      <p className="font-bold text-slate-900">Backup and restore</p>
      {native ? (
        <p className="mt-1 text-slate-700">
          Every document is copied automatically to your phone's <b>Documents › FM Prep backup</b> folder. It stays even if the
          app is uninstalled or its data is cleared.
          {status && (
            <span className="block mt-1" style={{ color: status.ok ? "#14532d" : "#9a1b1b" }}>
              {status.ok
                ? `✓ ${status.count} document${status.count === 1 ? "" : "s"} backed up · ${when(status.at)}`
                : `Backup failed (${status.error ?? "unknown"}). Tap Back up now to try again.`}
            </span>
          )}
        </p>
      ) : (
        <p className="mt-1 text-slate-700">
          Documents are kept in this browser only. Download a backup now and then, and keep it safe.
        </p>
      )}

      {missing > 0 && (
        <button
          type="button"
          disabled={busy}
          onClick={() => void restore()}
          className="mt-2 w-full rounded-lg px-3 py-2.5 text-sm font-bold text-white"
          style={{ background: "#9a3412" }}
        >
          {missing} document{missing === 1 ? "" : "s"} in your backup {missing === 1 ? "is" : "are"} not on this device - restore
        </button>
      )}

      <div className="mt-2 flex flex-wrap gap-2">
        {native ? (
          <button
            type="button"
            disabled={busy}
            onClick={() => {
              setMsg("");
              void syncBackup();
            }}
            className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800"
          >
            Back up now
          </button>
        ) : (
          <button
            type="button"
            disabled={busy || getDocs().length === 0}
            onClick={() => void downloadBackupZip()}
            className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800"
          >
            Download backup (.zip)
          </button>
        )}
        {native && (
          <button
            type="button"
            disabled={busy}
            onClick={() => void restore()}
            className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800"
          >
            {busy ? "Working…" : "Restore from backup folder"}
          </button>
        )}
        <button
          type="button"
          disabled={busy}
          onClick={choose}
          className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800"
        >
          {native ? "Choose backup files…" : "Restore from a backup .zip…"}
        </button>
      </div>
      {msg && <p className="mt-2 text-slate-800">{msg}</p>}
      {native && (
        <p className="mt-2 text-[12px] text-slate-500">
          To restore on a new phone or after reinstalling: Choose backup files… › open Documents › FM Prep backup › select
          all files (⋮ › Select all) › Select.
        </p>
      )}
      <input ref={pick} type="file" multiple className="hidden" onChange={(e) => { void onPicked(e.target.files); e.target.value = ""; }} />
    </section>
  );
}
