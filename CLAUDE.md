# Pocket-Med — project notes for Claude

Pocket-Med is a free, offline clinical calculator app for doctors (paediatrics, OBG,
medicine) built by a non-coder clinician. Health app: **accuracy first** — every
calculation change needs tests in `web/scripts/verifyDatabases.ts` and
`web/scripts/crosscheck.ts` (84,060 cases, must stay at 0 failures).

- Website: https://pocketmedtools.github.io/-elixir/ (GitHub Pages, branch `gh-pages`)
- APK: https://pocketmedtools.github.io/-elixir/Pocket-Med.apk (appId `com.pocketmed.app`)
- Repo: github.com/pocketmedtools/-elixir (old name indrakumarh0012-bit/-elixir redirects)
- The active app is `web/` only. Root Python files (`app.py`, `elixir_ai.py`…) and
  `NEW_SMART_ELIXIR/` are an old Streamlit project — not shipped.

## Rebuild / restore
`./rebuild.sh` (see RESTORE.md). Monthly backups: releases `backup-YYYY-MM`.

## Stack
React 19 + TypeScript + Vite + Tailwind 4, Capacitor 7 Android wrapper, lucide-react icons.
No server: everything runs and is stored on the device (localStorage / IndexedDB).

## Hard rules from the owner
- Never show the owner's email address anywhere in the app or repo text. It is only
  base64-encoded inside `web/src/lib/reportChannel.ts` (FormSubmit relay).
- Never show the owner's personal name in the app, links or pages.
- Dates are DD/MM/YYYY everywhere (`DateDMY.tsx`).
- No sign-in screen on launch; sign-in lives in the menu (`SideMenu.tsx`, `#pm-account`)
  and opens only when saving.
- Tool order: Paediatrics, OBG, Medicine, then General (Timer, Calculator, Calendar, Notes).
- Top bar shows only the 4 most recently used tools; ← back to Home, ✕ Close on the right.
- Last state of every tool persists (`usePersist` in `lib/lastState.ts`); last 5 results
  per tool (`lib/calcHistory.ts`, `ToolHistory.tsx`).
- Design: clean, premium, "standard" medical look; no childish emoji icons.

## Tools (src/components → src/lib maths)
Paediatric dose, Growth (WHO/IAP), BP centiles, Newborn weight loss, HOL, Bilirubin (AAP
2022), BMI, Creatinine clearance, Polypharmacy regimen analyser, Insulin, OB wheel (EDD =
LMP+280+(cycle−28), Naegele also shown), ANC Scan (INTERGROWTH-21st biometry, Hadlock EFW,
UA/MCA/UtA/DV Dopplers, Delphi FGR, scan schedule), Modified Bishop (NICE ≤6/>6),
Timer/Stopwatch with sub-timers, Calculator (iPhone style), Calendar, Notes (text/photo/
video/voice, IndexedDB), Saved calculations, Report an issue.

## Release loop (what "ship it" means)
1. Work on the session branch from `origin/main`.
2. Bump `CACHE_VERSION` in `web/public/sw.js` for any web change.
3. `cd web && npx tsc -b && npm test && npx vite build --base=./`, check screens with Playwright.
4. Commit, push, open PR, squash-merge. `deploy-pages.yml` publishes the site;
   `android-apk.yml` builds and publishes the APK (and copies it to gh-pages).
5. Installed apps pick up web changes by **live update** (`lib/liveUpdate.ts`,
   `version.json`) on next open. A change that needs native code/permissions requires
   a new APK: bump `versionCode`/`versionName` in `web/android/app/build.gradle` and,
   if older APKs can't run it, `LIVE_MIN_NATIVE` in `web/vite.config.ts`.

## Android signing (important)
- Original key: public `signing-key` release (`pocketmed-release.keystore`, pass `pocketmed`).
  It is public, so since APK 2.5 the build re-signs with the private key in secret
  `POCKETMED_SIGNING_KEY` ("password.base64-PKCS12", alias `pocketmed`) plus a lineage
  (old → new, rollback disallowed, `--rotation-min-sdk-version 28`).
- Once phones have a rotated APK, never ship an APK signed only with the old key — it will
  not install over it. Keep both keys and the lineage approach forever.

## Accounts and reports
- Accounts are device-local (`lib/accounts.ts`): phone + SHA-256 password hash.
  Forgot password = phone → 4-digit code (shown on screen; no SMS server) → new password.
  Real SMS would need a provider (e.g. Firebase Phone Auth) wired into `requestPasswordReset`.
- Sign-ups and issue reports go to the owner's inbox via FormSubmit (needs one-time
  activation email click on the inbox side).

## Commit / PR conventions
No model names in commits, PRs or code. Commit trailer and PR footer as given by the
session's attribution settings.
