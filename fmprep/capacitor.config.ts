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
    /* The web view paints its own ground before the app's CSS loads. Left at
       the default white it flashed against the cream page on every cold
       start. */
    backgroundColor: "#f7ead5",
  },
  /* The status bar and the splash sit outside the web view, so they have to be
     told the palette separately or the app opens on a white slab and settles
     into cream a moment later. */
  backgroundColor: "#f7ead5",
  plugins: {
    SplashScreen: {
      /* Hidden by the app once it has painted, not on a timer, so the first
         thing seen is the library rather than a blank page. */
      launchAutoHide: false,
      backgroundColor: "#f7ead5",
      showSpinner: false,
      androidScaleType: "CENTER_CROP",
    },
    /* Live updates, self-hosted: the app itself checks version.json and
       downloads the new web bundle (src/lib/liveUpdate.ts). Nothing is sent
       to Capgo's servers. */
    CapacitorUpdater: {
      autoUpdate: false,
      statsUrl: "",
      appReadyTimeout: 15000,
    },
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#1a5336",
    },
  },
};

export default config;
