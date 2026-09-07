import { Component, type ErrorInfo, type ReactNode } from "react";

/**
 * A crash in one screen should not blank the whole app, and a learner mid-
 * revision should be told what to do rather than shown an empty page.
 */
export default class ErrorBoundary extends Component<
  { children: ReactNode },
  { error: Error | null }
> {
  state: { error: Error | null } = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("FM Prep crashed:", error, info.componentStack);
  }

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;
    return (
      <div className="mx-auto max-w-lg px-4 py-16">
        <h1 className="text-xl font-bold text-slate-900">Something broke on this screen</h1>
        <p className="mt-2 leading-relaxed text-slate-700">
          Your progress and your imported documents are stored on this device and are not affected.
        </p>
        <p className="mt-3 rounded-lg border border-slate-200 bg-white p-3 font-mono text-xs text-slate-600">
          {error.message}
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
        >
          Reload the app
        </button>
      </div>
    );
  }
}
