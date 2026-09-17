/**
 * The parts of the Android app that sit outside the web view.
 *
 * The status bar and the splash screen are drawn by the system, not by the
 * page, so they have to be told the palette separately. Left at their defaults
 * the app opened on a white slab with white system text - invisible - and
 * settled into the cream page a moment later. That flash is most of what makes
 * a wrapped web app feel like a wrapped web app.
 *
 * Every call is a no-op on the web, where these plugins do not exist.
 */

const native = () =>
  Boolean((globalThis as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor?.isNativePlatform?.());

/** The page's own ground, so nothing the system draws fights it. */
const PAPER = "#fdfbf7";

export async function dressNativeShell(): Promise<void> {
  if (!native()) return;

  try {
    const { StatusBar, Style } = await import("@capacitor/status-bar");
    // Dark glyphs: the bar is cream, so the clock and the icons have to be ink.
    await StatusBar.setStyle({ style: Style.Light });
    await StatusBar.setBackgroundColor({ color: PAPER });
    await StatusBar.setOverlaysWebView({ overlay: false });
  } catch {
    // An older shell without the plugin still runs; it just keeps its defaults.
  }

  try {
    const { SplashScreen } = await import("@capacitor/splash-screen");
    // Hidden once React has painted, rather than on a timer, so the first
    // thing seen is the library and never a blank page.
    await SplashScreen.hide({ fadeOutDuration: 180 });
  } catch {
    /* no splash plugin in this build */
  }
}
