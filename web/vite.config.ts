import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'
import type { Plugin } from 'vite'

// One id per commit, identical for the website build and the APK build, so the
// installed app knows whether the published site is newer than what it runs.
const BUILD_ID = (process.env.GITHUB_SHA ?? '').slice(0, 7) || `dev-${Date.now()}`

// Android versionCode of the APK this source builds. A web bundle is only
// pushed to installed apps whose versionCode is at least LIVE_MIN_NATIVE;
// raise it when a change needs a new APK (new native plugin, permission).
const LIVE_MIN_NATIVE = 4
function nativeVersion(): number {
  try {
    const gradle = readFileSync('android/app/build.gradle', 'utf8')
    return Number(/versionCode\s+(\d+)/.exec(gradle)?.[1] ?? 0)
  } catch {
    return 0
  }
}

/**
 * Writes version.json next to index.html: the build id plus every file the
 * installed app must download to run this version (with byte sizes, checked
 * after download so a cut-off transfer is never switched to).
 */
function versionManifest(): Plugin {
  let outDir = 'dist'
  return {
    name: 'pm-version-manifest',
    apply: 'build',
    configResolved(c) {
      outDir = resolve(c.root, c.build.outDir)
    },
    closeBundle() {
      const skip = new Set(['version.json', 'sw.js', 'icon-1024.png', 'Pocket-Med.apk'])
      const files: { p: string; s: number }[] = []
      const walk = (dir: string) => {
        for (const name of readdirSync(dir)) {
          const full = join(dir, name)
          if (statSync(full).isDirectory()) walk(full)
          else if (!skip.has(name)) files.push({ p: relative(outDir, full).split('\\').join('/'), s: statSync(full).size })
        }
      }
      walk(outDir)
      writeFileSync(
        join(outDir, 'version.json'),
        JSON.stringify({ build: BUILD_ID, native: nativeVersion(), minNative: LIVE_MIN_NATIVE, files }),
      )
    },
  }
}

const CURSOR_VM_HOSTS = [
  '42cb064804a6ebdb4e3b-pod-fgje5lxmmja27nvmmeihdgm7ve-5173.us1.cursorvm.com',
  'p-5173-pod-fgje5lxmmja27nvmmeihdgm7ve-42cb064804a6ebdb4e3b-us1.agent.cvm.dev',
]

export default defineConfig({
  // Absolute base for the web/Netlify build: the SPA catch-all rewrite serves
  // index.html for unknown paths, and relative asset URLs would then resolve
  // against that path and 404 into the rewrite (blank page). The Capacitor
  // build needs relative URLs instead and passes --base=./ (see build:android).
  base: '/',
  plugins: [react(), tailwindcss(), versionManifest()],
  define: {
    __BUILD_ID__: JSON.stringify(BUILD_ID),
    __NATIVE_VERSION__: String(nativeVersion()),
  },
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: [...CURSOR_VM_HOSTS, '.cursorvm.com', '.agent.cvm.dev'],
    hmr: {
      protocol: 'wss',
      clientPort: 443,
    },
  },
  preview: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: [...CURSOR_VM_HOSTS, '.cursorvm.com', '.agent.cvm.dev'],
  },
})
