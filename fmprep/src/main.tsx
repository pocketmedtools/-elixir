import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import { hasLiveUpdates, markAppReady } from "./lib/liveUpdate";

// Tell the live updater this bundle started; without it the plugin rolls
// back to the previous bundle after a few seconds.
markAppReady();

// Registered relative to BASE_URL so the app works from a sub-path (the
// project site serves it at /fm/) as well as from a domain root.
// In the installed app a service worker would keep serving the old files
// after a live update, so it is not used there (and any old one is removed).
if (hasLiveUpdates() && "serviceWorker" in navigator) {
  void navigator.serviceWorker
    .getRegistrations()
    .then((rs) => rs.forEach((r) => void r.unregister()))
    .catch(() => {});
} else if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const base = import.meta.env.BASE_URL;
    navigator.serviceWorker
      .register(`${base}sw.js`, { scope: base })
      .then((reg) => {
        reg.update().catch(() => {});
        // Reload once when an updated worker takes over, so a new release is
        // seen immediately rather than on some later visit.
        const hadController = !!navigator.serviceWorker.controller;
        let reloaded = false;
        navigator.serviceWorker.addEventListener("controllerchange", () => {
          if (!hadController || reloaded) return;
          reloaded = true;
          window.location.reload();
        });
      })
      .catch(() => {
        // Not fatal: the app still runs, it just will not install or cache.
      });
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
