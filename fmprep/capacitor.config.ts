import type { CapacitorConfig } from "@capacitor/cli";

/**
 * FM Prep as an Android app.
 *
 * Capacitor wraps the built web app in a native shell. The Android project is
 * generated in CI from this file rather than committed, so the repository
 * carries no Gradle tree and nothing here can drift from the web build. The
 * app id is its own namespace; it shares nothing with Pocket-Med.
 */
const config: CapacitorConfig = {
  appId: "in.fmprep.app",
  appName: "FM Prep",
  webDir: "dist",
  android: {
    allowMixedContent: false,
  },
};

export default config;
