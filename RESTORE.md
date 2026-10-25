# Pocket-Med — backup and restore

Everything needed to rebuild Pocket-Med exactly is kept in **three places**:

| Where | What | Updated |
|---|---|---|
| This GitHub repository | All source code, full history, tests, build setup | Every change |
| GitHub **Releases → `backup-YYYY-MM`** | Self-contained copy: source + full history, every npm package (offline rebuild), built website, Android APK | Weekly (one release per month) |
| Your own safe place (Google Drive / email to yourself) | The **private signing key** file + its password | Once — keep it forever |

The weekly backup run also re-installs everything from scratch and runs all 84,000+
calculator checks. If anything ever breaks, the run fails and GitHub emails the owner.

## Rebuild with one command

On any computer with Node.js 22+ (and Git):

```bash
git clone https://github.com/pocketmedtools/-elixir.git pocket-med
cd pocket-med
./rebuild.sh            # install + all checks + build website into web/dist
./rebuild.sh --serve    # same, then open http://localhost:4173
./rebuild.sh --apk      # also build the Android app (needs Java 21 + Android SDK)
```

Or ask Claude Code: **"Rebuild Pocket-Med from the repository"** — the project notes in
`CLAUDE.md` describe every tool, design rule and the release process.

## If GitHub or npm ever lose things

From any `backup-YYYY-MM` release, download the files and run:

```bash
git clone pocket-med-source.bundle pocket-med      # full history from the backup file
cd pocket-med
./rebuild.sh --offline ../pocket-med-npm-cache.tgz  # no internet needed for packages
```

`pocket-med-site.zip` is the finished website: unzip and upload to any static host
(GitHub Pages, Netlify, Vercel, Firebase Hosting) and the app works again immediately.

## Signing key (Android updates)

Android accepts an update only if it is signed by the same key as the installed app.

- The app is signed with a **private key** kept as the GitHub secret
  `POCKETMED_SIGNING_KEY` (format: `password.base64-of-PKCS12`), and a signed
  hand-over (lineage) from the original public key so older installs update without
  losing data.
- **Keep the copy of `POCKETMED_SIGNING_KEY` you were given in a safe place.** If it is
  lost, a new key would force every user to uninstall and reinstall (losing saved data).
- To restore it on a new repository: Settings → Secrets and variables → Actions →
  New repository secret → name `POCKETMED_SIGNING_KEY`, paste the value.

## Phones and future devices

- **Android**: APK from the website. Update the Capacitor version and `targetSdkVersion`
  about once a year (the monthly Dependabot proposals help) so new Android versions keep
  installing it.
- **iPhone / iPad / any computer**: open the website in Safari/Chrome → Share →
  **Add to Home Screen**. It works offline like an app.
- A native App Store app needs an Apple Developer account (USD 99/year); the code is
  ready for it (Capacitor supports iOS).
