/**
 * True only on the public website. The installed Android app (Capacitor,
 * served from https://localhost) never offers the APK download.
 */
export function isWebsite(): boolean {
  const cap = (window as unknown as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor;
  if (cap?.isNativePlatform?.()) return false;
  return window.location.hostname.endsWith("github.io");
}

export const APK_URL = `${import.meta.env.BASE_URL}Pocket-Med.apk`;
