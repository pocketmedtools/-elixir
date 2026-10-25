import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Camera, ChevronLeft, Image as ImageIcon, Mic, Pin, Plus, Search, Square, Trash2, Video } from "lucide-react";
import {
  deleteBlob, deleteNote, emptyNote, getBlob, kindOf, listNotes, newId, putBlob, saveNote,
  type Attachment, type Note,
} from "../lib/notesDb";
import { isNativeApp, LIVE_SITE } from "../lib/liveUpdate";
import { useFitHeight } from "../lib/useFitHeight";

/**
 * Quick notes (black theme). Opening Notes goes straight to a blank note to
 * write in; photos, video and voice are added from the toolbar at the bottom.
 * "All notes" lists, searches and reopens saved notes. Stored on the device.
 */

const ORANGE = "#ff9f0a";

function when(t: number): string {
  const d = new Date(t);
  return d.toDateString() === new Date().toDateString()
    ? d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true })
    : d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

const fmtSecs = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

export default function NotesTool() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [mode, setMode] = useState<"edit" | "list">("edit");
  const [current, setCurrent] = useState<Note>(() => emptyNote());
  const [query, setQuery] = useState("");

  const refresh = useCallback(() => listNotes().then(setNotes).catch(() => setNotes([])), []);
  useEffect(() => { refresh(); }, [refresh]);

  const openNote = (n: Note) => { setCurrent(n); setMode("edit"); };
  const newNote = () => { setCurrent(emptyNote()); setMode("edit"); };

  const saved = useMemo(() => notes.filter((n) => n.text.trim() || n.attachments.length), [notes]);
  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? saved.filter((n) => n.text.toLowerCase().includes(q)) : saved;
  }, [saved, query]);

  // The black panel is sized to the screen, so the toolbar is always fully
  // visible at the bottom; only the note area scrolls.
  const fit = useFitHeight<HTMLElement>(380);
  return (
    <div className="mx-auto max-w-xl px-2 pt-2">
      <h2 className="sr-only">Notes</h2>
      <section ref={fit.ref} style={fit.height ? { height: fit.height } : undefined}
        className={`flex ${fit.height ? "" : "min-h-[calc(100dvh-7.5rem)]"} flex-col overflow-hidden rounded-t-[2rem] rounded-b-[1.5rem] bg-black px-4 pb-4 pt-4 text-white`}>
        {mode === "edit" ? (
          <Editor key={current.id} note={current} savedCount={saved.length}
            onChange={refresh} onAll={() => { refresh(); setMode("list"); }} onNew={newNote} />
        ) : (
          <>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold">All notes</p>
              <button type="button" onClick={newNote} aria-label="New note"
                className="flex h-11 w-11 items-center justify-center rounded-full text-black transition active:scale-90" style={{ background: ORANGE }}>
                <Plus size={26} strokeWidth={2.5} />
              </button>
            </div>
            <label className="mt-3 flex items-center gap-2 rounded-xl px-3 py-2.5" style={{ background: "#1c1c1e" }}>
              <Search size={18} className="text-[#8e8e93]" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search notes" aria-label="Search notes"
                style={{ background: "transparent", color: "#fff" }} className="w-full text-base placeholder:text-[#8e8e93] outline-none" />
            </label>
            {shown.length === 0 ? (
              <p className="mt-10 text-center text-sm text-[#8e8e93]">{query ? "No notes match." : "No saved notes yet."}</p>
            ) : (
              <ul className="mt-4 min-h-0 flex-1 space-y-2 overflow-y-auto">
                {shown.map((n) => {
                  const lines = n.text.trim().split("\n");
                  const count = (k: Attachment["kind"]) => n.attachments.filter((a) => a.kind === k).length;
                  return (
                    <li key={n.id}>
                      <button type="button" onClick={() => openNote(n)} className="w-full rounded-2xl px-4 py-3 text-left transition active:scale-[0.99]" style={{ background: "#1c1c1e" }}>
                        <div className="flex items-start justify-between gap-2">
                          <p className="line-clamp-1 flex items-center gap-1.5 text-base font-semibold">
                            {n.pinned && <Pin size={14} className="shrink-0" style={{ color: ORANGE }} />}
                            {lines[0] || (count("image") ? "Photo" : count("video") ? "Video" : count("audio") ? "Voice note" : "Note")}
                          </p>
                          <span className="shrink-0 text-xs text-[#8e8e93]">{when(n.updatedAt)}</span>
                        </div>
                        {lines[1] && <p className="mt-0.5 line-clamp-2 text-sm text-[#a1a1a6]">{lines.slice(1).join(" ")}</p>}
                        {n.attachments.length > 0 && (
                          <p className="mt-1.5 flex items-center gap-3 text-xs text-[#a1a1a6]">
                            {count("image") > 0 && <span className="flex items-center gap-1"><ImageIcon size={13} />{count("image")}</span>}
                            {count("video") > 0 && <span className="flex items-center gap-1"><Video size={13} />{count("video")}</span>}
                            {count("audio") > 0 && <span className="flex items-center gap-1"><Mic size={13} />{count("audio")}</span>}
                          </p>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
            <p className="mt-auto pt-6 text-center text-[11px] text-[#636366]">Notes, photos, videos and voice notes stay on this device only.</p>
          </>
        )}
      </section>
    </div>
  );
}

// Each toolbar action has its own soft colour with a darker icon of the same hue.
const TINT = {
  Camera: ["#cfe6ff", "#0b4a7a"],
  Gallery: ["#d3f3df", "#14633a"],
  Video: ["#e6dcff", "#4b2a8a"],
  Voice: ["#ffe1cf", "#9a3b0b"],
} as const;

function ToolButton({ label, onClick, children }: { label: keyof typeof TINT; onClick: () => void; children: React.ReactNode }) {
  const [bg, ink] = TINT[label];
  return (
    <button type="button" onClick={onClick} aria-label={label}
      className="flex flex-1 flex-col items-center gap-1 rounded-2xl py-2.5 text-[11px] font-bold transition active:scale-90"
      style={{ background: bg, color: ink }}>
      {children}
      {label}
    </button>
  );
}

const hasContent = (n: Note) => !!n.text.trim() || n.attachments.length > 0;

function Editor({ note, savedCount, onChange, onAll, onNew }: {
  note: Note;
  savedCount: number;
  onChange: () => void;
  onAll: () => void;
  onNew: () => void;
}) {
  const [draft, setDraft] = useState<Note>(note);
  const [urls, setUrls] = useState<Record<string, string>>({});
  const [viewer, setViewer] = useState<string | null>(null);
  const [msg, setMsg] = useState<{ text: string; apk?: boolean } | null>(null);
  const photoIn = useRef<HTMLInputElement>(null);
  const galleryIn = useRef<HTMLInputElement>(null);
  const videoIn = useRef<HTMLInputElement>(null);
  const saveTimer = useRef<number | null>(null);
  const latest = useRef(draft);
  latest.current = draft;

  // Load attachment blobs as object URLs; free them when the note closes.
  const urlsRef = useRef(urls);
  urlsRef.current = urls;
  useEffect(() => {
    let alive = true;
    (async () => {
      const map: Record<string, string> = {};
      for (const a of note.attachments) {
        const b = await getBlob(a.id);
        if (b) map[a.id] = URL.createObjectURL(b);
      }
      if (alive) setUrls((u) => ({ ...map, ...u }));
    })();
    return () => { alive = false; };
  }, [note]);
  useEffect(() => () => Object.values(urlsRef.current).forEach((u) => URL.revokeObjectURL(u)), []);

  // A note is stored only once it has something in it.
  const persist = useCallback(async (n: Note) => {
    if (hasContent(n)) await saveNote(n);
    else await deleteNote(n);
    onChange();
  }, [onChange]);

  const update = (patch: Partial<Note>, now = true) => {
    const next = { ...latest.current, ...patch, updatedAt: Date.now() };
    setDraft(next);
    if (saveTimer.current) window.clearTimeout(saveTimer.current);
    if (now) persist(next);
    else saveTimer.current = window.setTimeout(() => { saveTimer.current = null; persist(next); }, 400);
  };
  const flush = async () => {
    if (saveTimer.current) { window.clearTimeout(saveTimer.current); saveTimer.current = null; }
    await persist(latest.current);
  };
  // Leaving the tool mid-typing still saves the last words.
  useEffect(() => () => {
    if (saveTimer.current) { window.clearTimeout(saveTimer.current); if (hasContent(latest.current)) saveNote(latest.current); }
  }, []);

  const addBlob = async (blob: Blob, name: string) => {
    const kind = kindOf(blob.type || "");
    if (!kind) { setMsg({ text: "That file type is not supported." }); return; }
    const id = newId();
    await putBlob(id, blob);
    const a: Attachment = { id, kind, mime: blob.type, name, size: blob.size, createdAt: Date.now() };
    setUrls((u) => ({ ...u, [id]: URL.createObjectURL(blob) }));
    update({ attachments: [...latest.current.attachments, a] });
  };
  const onFiles = async (files: FileList | null) => {
    if (!files) return;
    for (const f of Array.from(files)) await addBlob(f, f.name);
  };
  const removeAttachment = async (a: Attachment) => {
    if (!window.confirm(`Delete this ${a.kind === "image" ? "photo" : a.kind === "audio" ? "voice note" : "video"}?`)) return;
    await deleteBlob(a.id);
    update({ attachments: latest.current.attachments.filter((x) => x.id !== a.id) });
  };

  // ---- voice recording ----
  const [rec, setRec] = useState<{ mr: MediaRecorder; started: number } | null>(null);
  const [secs, setSecs] = useState(0);
  const chunks = useRef<Blob[]>([]);
  useEffect(() => {
    if (!rec) return;
    const iv = window.setInterval(() => setSecs(Math.floor((Date.now() - rec.started) / 1000)), 250);
    return () => window.clearInterval(iv);
  }, [rec]);

  /** Say exactly why the microphone could not start, and how to fix it. */
  const micProblem = async (err: unknown): Promise<{ text: string; apk?: boolean }> => {
    if (isNativeApp()) {
      try {
        const { App } = await import("@capacitor/app");
        if ((Number((await App.getInfo()).build) || 0) < 5) {
          return { text: "Voice notes need the latest app version (2.3). Install it once — your notes stay.", apk: true };
        }
      } catch { /* ignore */ }
    }
    const name = (err as { name?: string })?.name ?? "";
    if (name === "NotAllowedError" || name === "SecurityError") {
      return { text: "Microphone permission was refused. Tap Voice again and choose Allow — or turn it on in phone Settings → Apps → Pocket-Med → Permissions → Microphone." };
    }
    if (name === "NotFoundError") return { text: "No microphone was found on this device." };
    if (name === "NotReadableError") return { text: "The microphone is busy in another app (call or recorder). Close it and try again." };
    return { text: "Could not start the microphone on this device." };
  };

  const startAudio = async () => {
    setMsg(null);
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      setMsg(await micProblem(new Error("unsupported")));
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream);
      chunks.current = [];
      mr.ondataavailable = (e) => { if (e.data.size) chunks.current.push(e.data); };
      mr.onstop = () => {
        stream.getTracks().forEach((t) => t.stop());
        const blob = new Blob(chunks.current, { type: mr.mimeType || "audio/webm" });
        if (blob.size) addBlob(blob, `Voice note · ${new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true })}`);
      };
      mr.start(250);
      setSecs(0);
      setRec({ mr, started: Date.now() });
    } catch (err) {
      setMsg(await micProblem(err));
    }
  };
  const stopAudio = () => { if (rec && rec.mr.state !== "inactive") rec.mr.stop(); setRec(null); };
  useEffect(() => () => { if (rec && rec.mr.state !== "inactive") rec.mr.stop(); }, [rec]);

  const images = draft.attachments.filter((a) => a.kind === "image");
  const media = draft.attachments.filter((a) => a.kind !== "image");

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex shrink-0 items-center justify-between">
        <button type="button" onClick={async () => { await flush(); onAll(); }}
          className="flex items-center gap-0.5 text-base font-semibold transition active:opacity-60" style={{ color: ORANGE }}>
          <ChevronLeft size={22} /> All notes{savedCount ? ` (${savedCount})` : ""}
        </button>
        <div className="flex items-center gap-1">
          <button type="button" aria-label={draft.pinned ? "Unpin" : "Pin"} onClick={() => update({ pinned: !draft.pinned })}
            className="rounded-full p-2 transition active:scale-90" style={{ color: draft.pinned ? ORANGE : "#8e8e93" }}>
            <Pin size={21} fill={draft.pinned ? ORANGE : "none"} />
          </button>
          <button type="button" aria-label="Delete note"
            onClick={async () => {
              if (hasContent(latest.current) && !window.confirm("Delete this note?")) return;
              if (saveTimer.current) { window.clearTimeout(saveTimer.current); saveTimer.current = null; }
              await deleteNote(latest.current); onChange(); onNew();
            }}
            className="rounded-full p-2 text-[#8e8e93] transition active:scale-90"><Trash2 size={21} /></button>
          <button type="button" aria-label="New note" onClick={async () => { await flush(); onNew(); }}
            className="rounded-full p-2 transition active:scale-90" style={{ color: ORANGE }}><Plus size={24} /></button>
        </div>
      </div>
      <p className="mt-1 shrink-0 text-center text-xs text-[#8e8e93]">
        {new Date(draft.updatedAt).toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: true })}
      </p>

      <div className="mt-2 min-h-0 flex-1 overflow-y-auto">
      <textarea value={draft.text} autoFocus onChange={(e) => update({ text: e.target.value }, false)}
        placeholder="Start writing…" aria-label="Note text"
        style={{ background: "transparent", color: "#fff" }}
        className="block h-[60%] min-h-[9rem] w-full resize-none text-lg leading-relaxed placeholder:text-[#636366] outline-none" />

      {images.length > 0 && (
        <div className="mt-2 grid grid-cols-3 gap-2">
          {images.map((a) => (
            <div key={a.id} className="relative">
              {urls[a.id] && (
                <button type="button" onClick={() => setViewer(urls[a.id])} className="block w-full">
                  <img src={urls[a.id]} alt="" className="aspect-square w-full rounded-xl object-cover" />
                </button>
              )}
              <button type="button" aria-label="Delete photo" onClick={() => removeAttachment(a)}
                className="absolute right-1 top-1 rounded-full bg-black/70 p-1 text-white"><Trash2 size={14} /></button>
            </div>
          ))}
        </div>
      )}
      {media.map((a) => (
        <div key={a.id} className="mt-2 rounded-2xl p-2" style={{ background: "#1c1c1e" }}>
          {urls[a.id] && (a.kind === "video"
            ? <video src={urls[a.id]} controls playsInline className="w-full rounded-xl" />
            : <audio src={urls[a.id]} controls className="w-full" />)}
          <div className="mt-1 flex items-center justify-between px-1 text-xs text-[#8e8e93]">
            <span className="flex items-center gap-1">{a.kind === "video" ? <Video size={13} /> : <Mic size={13} />}{a.kind === "video" ? "Video" : a.name}</span>
            <button type="button" onClick={() => removeAttachment(a)} className="flex items-center gap-1 font-semibold text-[#ff453a]"><Trash2 size={13} />Delete</button>
          </div>
        </div>
      ))}

      {msg && (
        <div className="mt-3 rounded-xl px-3 py-2 text-sm" style={{ background: "#3a1d1d", color: "#ffb4ad" }}>
          {msg.text}
          {msg.apk && <a href={`${LIVE_SITE}Pocket-Med.apk`} target="_blank" rel="noreferrer" className="ml-1 font-bold underline">Download</a>}
        </div>
      )}

      </div>

      <div className="mt-3 shrink-0">
        {rec ? (
          <div className="flex items-center gap-3 rounded-2xl px-4 py-3" style={{ background: "#2c1414" }}>
            <span className="relative flex h-3.5 w-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff453a] opacity-75" />
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-[#ff453a]" />
            </span>
            <span className="notes-wave flex h-6 items-end gap-[3px]" aria-hidden>
              {Array.from({ length: 14 }, (_, i) => <span key={i} style={{ animationDelay: `${(i % 7) * 0.09}s` }} />)}
            </span>
            <span className="ml-auto text-base font-semibold tabular-nums">{fmtSecs(secs)}</span>
            <button type="button" onClick={stopAudio} aria-label="Stop recording"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff453a] text-white transition active:scale-90">
              <Square size={16} fill="#fff" />
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <ToolButton label="Camera" onClick={() => photoIn.current?.click()}><Camera size={22} /></ToolButton>
            <ToolButton label="Gallery" onClick={() => galleryIn.current?.click()}><ImageIcon size={22} /></ToolButton>
            <ToolButton label="Video" onClick={() => videoIn.current?.click()}><Video size={22} /></ToolButton>
            <ToolButton label="Voice" onClick={startAudio}><Mic size={22} /></ToolButton>
          </div>
        )}
      </div>

      <input ref={photoIn} type="file" accept="image/*" capture="environment" hidden onChange={(e) => { onFiles(e.target.files); e.target.value = ""; }} />
      <input ref={galleryIn} type="file" accept="image/*,video/*,audio/*" multiple hidden onChange={(e) => { onFiles(e.target.files); e.target.value = ""; }} />
      <input ref={videoIn} type="file" accept="video/*" capture="environment" hidden onChange={(e) => { onFiles(e.target.files); e.target.value = ""; }} />

      {viewer && (
        <button type="button" onClick={() => setViewer(null)} aria-label="Close photo"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-3">
          <img src={viewer} alt="" className="max-h-full max-w-full rounded-lg" />
        </button>
      )}
    </div>
  );
}
