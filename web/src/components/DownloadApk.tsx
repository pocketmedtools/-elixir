import { APK_URL, isWebsite } from "../lib/platform";

/** Android app download — rendered on the website only, never inside the app. */
export default function DownloadApk({ compact = false }: { compact?: boolean }) {
  if (!isWebsite()) return null;
  return (
    <div className={`rounded-xl border-2 border-emerald-900 bg-emerald-800 text-white ${compact ? "p-3" : "p-4"}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-base font-extrabold">Get the Android app</p>
          <p className="text-xs font-semibold text-white/85">Works offline · free · no sign-up needed</p>
        </div>
        <a href={APK_URL} download="Pocket-Med.apk"
          className="rounded-lg bg-white px-4 py-2.5 text-sm font-black text-emerald-900 hover:bg-emerald-50">
          ⬇ Download APK
        </a>
      </div>
      {!compact && (
        <p className="mt-2 text-[11px] leading-snug text-white/85">
          Chrome shows “File might be harmful” for every app from outside the Play Store — tap “Download anyway”,
          then open the file to install.
        </p>
      )}
    </div>
  );
}
