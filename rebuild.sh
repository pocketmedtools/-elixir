#!/usr/bin/env bash
# Pocket-Med: rebuild everything with one command. See RESTORE.md.
#
#   ./rebuild.sh                         install, run all calculator checks, build the website (web/dist)
#   ./rebuild.sh --apk                   also build the Android app (needs Java 21 + Android SDK)
#   ./rebuild.sh --offline cache.tgz     install npm packages from a backup's pocket-med-npm-cache.tgz
#   ./rebuild.sh --serve                 afterwards, open the website at http://localhost:4173
set -euo pipefail
cd "$(dirname "$0")"

APK=0; SERVE=0; OFFLINE=""
while [ $# -gt 0 ]; do
  case "$1" in
    --apk) APK=1 ;;
    --serve) SERVE=1 ;;
    --offline) OFFLINE="$(cd "$(dirname "$2")" && pwd)/$(basename "$2")"; shift ;;
    *) echo "Unknown option: $1"; exit 1 ;;
  esac
  shift
done

step() { printf '\n\033[1;34m== %s ==\033[0m\n' "$1"; }

step "Checking tools"
command -v node >/dev/null || { echo "Install Node.js $(cat .nvmrc) (https://nodejs.org) and run again."; exit 1; }
NODE_MAJOR=$(node -p 'process.versions.node.split(".")[0]')
[ "$NODE_MAJOR" -ge "$(cat .nvmrc)" ] || echo "Warning: Node $(cat .nvmrc)+ recommended, found $(node -v)."
echo "Node $(node -v), npm $(npm -v)"

cd web
step "Installing packages (exact versions from package-lock.json)"
if [ -n "$OFFLINE" ]; then
  TMP=$(mktemp -d); tar -xzf "$OFFLINE" -C "$TMP"
  npm ci --offline --cache "$TMP/npm-cache"
else
  npm ci
fi

step "Running all calculator checks (84,000+ cases)"
npm test

step "Building the website"
npx tsc -b
npx vite build --base=./
echo "Website ready in web/dist - upload that folder to any static host (GitHub Pages, Netlify...)."

if [ "$APK" = 1 ]; then
  step "Building the Android app"
  command -v java >/dev/null || { echo "Install Java 21 and the Android SDK (ANDROID_HOME) for --apk."; exit 1; }
  npx cap sync android
  (cd android && chmod +x gradlew && ./gradlew assembleRelease --no-daemon)
  echo "APK: web/android/app/build/outputs/apk/release/app-release.apk"
  echo "Note: phones only accept it as an UPDATE when signed like the published app (see RESTORE.md, 'Signing key')."
fi

if [ "$SERVE" = 1 ]; then
  step "Serving at http://localhost:4173 (Ctrl+C to stop)"
  npx vite preview --base=./ --port 4173
fi
