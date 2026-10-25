import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  deleteBlob, deleteNote, emptyNote, getBlob, kindOf, listNotes, newId, putBlob, saveNote,
  type Attachment, type Note,
} from "../lib/notesDb";

/**
 * Quick notes (black theme): write text, take or pick photos, record video
 * and voice notes. Everything is stored on this device only.
 */

type Quick = "photo" | "video" | "audio" | "gallery" | null;

const card = "rounded-2xl bg-[#1c1c1e]";
const chip = "flex flex-col items-center justify-center gap-1 rounded-2xl bg-[#1c1c1e] px-2 py-3 text-xs font-semibold text-white active:scale-95 transition";

function when(t: number): string {
  const d = new Date(t);
  const today = new Date();
  return d.toDateString() === today.toDateString()
    ? d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true })
    : d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

const fmtSecs = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

export default function NotesTool() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [pendingQuick, setPendingQuick] = useState<Quick>(null);

  const refresh = useCallback(() => listNotes().then(setNotes).catch(() => setNotes([])), []);
  useEffect(() => { refresh(); }, [refresh]);

  const start = async (quick: Quick) => {
    const n = emptyNote();
    await saveNote(n);
    await refresh();
    setPendingQuick(quick);
    setOpenId(n.id);
  };

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? notes.filter((n) => n.text.toLowerCase().includes(q)) : notes;
  }, [notes, query]);

  const open = notes.find((n) => n.id === openId) ?? null;

  return (
    <div className="mx-auto max-w-xl px-2 pt-2">
      <h2 className="sr-only">Notes</h2>
      <section className="min-h-[calc(100dvh-7.5rem)] rounded-t-[2rem] rounded-b-[1.5rem] bg-black px-4 pb-6 pt-4 text-white">
        {open ? (
          <Editor key={open.id} note={open} quick={pendingQuick} onQuickDone={() => setPendingQuick(null)}
            onChange={refresh} onClose={() => { setOpenId(null); refresh(); }} />
        ) : (
          <>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold">Notes</p>
              <button type="button" onClick={() => start(null)} aria-label="New note"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff9f0a] text-3xl font-light leading-none text-black">+</button>
            </div>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search notes"
              style={{ background: "#1c1c1e", color: "#fff" }}
              className="mt-3 w-full rounded-xl bg-[#1c1c1e] px-4 py-2.5 text-base text-white placeholder:text-[#8e8e93] outline-none" />
            <div className="mt-3 grid grid-cols-4 gap-2">
              <button type="button" className={chip} onClick={() => start(null)}><span className="text-xl">✏️</span>Write</button>
              <button type="button" className={chip} onClick={() => start("photo")}><span className="text-xl">📷</span>Photo</button>
              <button type="button" className={chip} onClick={() => start("video")}><span className="text-xl">🎥</span>Video</button>
              <button type="button" className={chip} onClick={() => start("audio")}><span className="text-xl">🎙️</span>Voice</button>
            </div>

            {shown.length === 0 ? (
              <p className="mt-10 text-center text-sm text-[#8e8e93]">{query ? "No notes match." : "No notes yet — tap Write, Photo, Video or Voice."}</p>
            ) : (
              <ul className="mt-4 space-y-2">
                {shown.map((n) => {
                  const lines = n.text.trim().split("\n");
                  const counts = (k: Attachment["kind"]) => n.attachments.filter((a) => a.kind === k).length;
                  return (
                    <li key={n.id}>
                      <button type="button" onClick={() => setOpenId(n.id)} className={`${card} w-full px-4 py-3 text-left`}>
                        <div className="flex items-start justify-between gap-2">
                          <p className="line-clamp-1 text-base font-semibold">{n.pinned ? "📌 " : ""}{lines[0] || (n.attachments.length ? "Attachment note" : "New note")}</p>
                          <span className="shrink-0 text-xs text-[#8e8e93]">{when(n.updatedAt)}</span>
                        </div>
                        {lines[1] && <p className="mt-0.5 line-clamp-2 text-sm text-[#a1a1a6]">{lines.slice(1).join(" ")}</p>}
                        {n.attachments.length > 0 && (
                          <p className="mt-1 text-xs text-[#a1a1a6]">
                            {[counts("image") && `📷 ${counts("image")}`, counts("video") && `🎥 ${counts("video")}`, counts("audio") && `🎙️ ${counts("audio")}`].filter(Boolean).join("   ")}
                          </p>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
            <p className="mt-6 text-center text-[11px] text-[#636366]">Notes, photos, videos and voice notes stay on this device only.</p>
          </>
        )}
      </section>
    </div>
  );
}

function Editor({ note, quick, onQuickDone, onChange, onClose }: {
  note: Note;
  quick: Quick;
  onQuickDone: () => void;
  onChange: () => void;
  onClose: () => void;
}) {
  const [draft, setDraft] = useState<Note>(note);
  const [urls, setUrls] = useState<Record<string, string>>({});
  const [viewer, setViewer] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const photoIn = useRef<HTMLInputElement>(null);
  const galleryIn = useRef<HTMLInputElement>(null);
  const videoIn = useRef<HTMLInputElement>(null);
  const saveTimer = useRef<number | null>(null);
  const latest = useRef(draft);
  latest.current = draft;

  // Load attachment blobs into object URLs for display.
  useEffect(() => {
    let alive = true;
    const made: string[] = [];
    (async () => {
      const map: Record<string, string> = {};
      for (const a of draft.attachments) {
        if (urls[a.id]) { map[a.id] = urls[a.id]; continue; }
        const b = await getBlob(a.id);
        if (b) { const u = URL.createObjectURL(b); made.push(u); map[a.id] = u; }
      }
      if (alive) setUrls(map);
    })();
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draft.attachments.length]);
  const urlsRef = useRef(urls);
  urlsRef.current = urls;
  useEffect(() => () => Object.values(urlsRef.current).forEach((u) => URL.revokeObjectURL(u)), []);

  const persist = useCallback(async (n: Note) => {
    await saveNote(n);
    onChange();
  }, [onChange]);

  const update = (patch: Partial<Note>, now = true) => {
    const next = { ...latest.current, ...patch, updatedAt: Date.now() };
    setDraft(next);
    if (saveTimer.current) window.clearTimeout(saveTimer.current);
    if (now) persist(next);
    else saveTimer.current = window.setTimeout(() => persist(next), 400);
  };

  // Flush a pending text save and drop a completely empty note on close.
  const close = async () => {
    if (saveTimer.current) window.clearTimeout(saveTimer.current);
    const n = latest.current;
    if (!n.text.trim() && n.attachments.length === 0) await deleteNote(n);
    else await saveNote(n);
    onClose();
  };

  const addBlob = async (blob: Blob, name: string) => {
    const kind = kindOf(blob.type || "");
    if (!kind) { setMsg("That file type is not supported."); return; }
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
    if (!window.confirm(`Delete this ${a.kind === "image" ? "photo" : a.kind}?`)) return;
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

  const startAudio = async () => {
    setMsg(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream);
      chunks.current = [];
      mr.ondataavailable = (e) => { if (e.data.size) chunks.current.push(e.data); };
      mr.onstop = () => {
        stream.getTracks().forEach((t) => t.stop());
        const blob = new Blob(chunks.current, { type: mr.mimeType || "audio/webm" });
        if (blob.size) addBlob(blob, `Voice note ${new Date().toLocaleTimeString("en-IN")}`);
      };
      mr.start();
      setSecs(0);
      setRec({ mr, started: Date.now() });
    } catch {
      setMsg("Microphone not available. Allow microphone access for Pocket-Med (in the Android app, install the latest APK once).");
    }
  };
  const stopAudio = () => { rec?.mr.stop(); setRec(null); };
  useEffect(() => () => { if (rec && rec.mr.state !== "inactive") rec.mr.stop(); }, [rec]);

  // Quick-capture action chosen on the list screen.
  useEffect(() => {
    if (!quick) return;
    const t = window.setTimeout(() => {
      if (quick === "photo") photoIn.current?.click();
      if (quick === "video") videoIn.current?.click();
      if (quick === "gallery") galleryIn.current?.click();
      if (quick === "audio") startAudio();
      onQuickDone();
    }, 50);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tool = "flex flex-1 flex-col items-center gap-1 rounded-xl bg-[#1c1c1e] py-2.5 text-[11px] font-semibold text-white active:scale-95 transition";

  return (
    <div>
      <div className="flex items-center justify-between">
        <button type="button" onClick={close} className="text-base font-semibold text-[#ff9f0a]">‹ Notes</button>
        <div className="flex items-center gap-4">
          <button type="button" aria-label={draft.pinned ? "Unpin" : "Pin"} onClick={() => update({ pinned: !draft.pinned })}
            className={`text-xl ${draft.pinned ? "" : "opacity-50"}`}>📌</button>
          <button type="button" aria-label="Delete note"
            onClick={async () => { if (window.confirm("Delete this note?")) { await deleteNote(latest.current); onClose(); } }}
            className="text-xl">🗑️</button>
        </div>
      </div>
      <p className="mt-2 text-center text-xs text-[#8e8e93]">{new Date(draft.updatedAt).toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: true })}</p>

      <textarea value={draft.text} autoFocus={!quick} onChange={(e) => update({ text: e.target.value }, false)}
        placeholder="Start writing…" aria-label="Note text"
        style={{ background: "transparent", color: "#fff" }}
        className="mt-2 min-h-[30vh] w-full resize-none bg-transparent text-lg leading-relaxed text-white placeholder:text-[#636366] outline-none" />

      {draft.attachments.length > 0 && (
        <div className="mt-2 space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {draft.attachments.filter((a) => a.kind === "image").map((a) => (
              <div key={a.id} className="relative">
                {urls[a.id] && (
                  <button type="button" onClick={() => setViewer(urls[a.id])} className="block w-full">
                    <img src={urls[a.id]} alt="" className="aspect-square w-full rounded-xl object-cover" />
                  </button>
                )}
                <button type="button" aria-label="Delete photo" onClick={() => removeAttachment(a)}
                  className="absolute right-1 top-1 rounded-full bg-black/70 px-1.5 text-sm">✕</button>
              </div>
            ))}
          </div>
          {draft.attachments.filter((a) => a.kind !== "image").map((a) => (
            <div key={a.id} className={`${card} relative p-2`}>
              {urls[a.id] && (a.kind === "video"
                ? <video src={urls[a.id]} controls playsInline className="w-full rounded-xl" />
                : <audio src={urls[a.id]} controls className="w-full" />)}
              <div className="mt-1 flex items-center justify-between px-1 text-xs text-[#8e8e93]">
                <span>{a.kind === "video" ? "🎥 Video" : "🎙️ " + a.name}</span>
                <button type="button" onClick={() => removeAttachment(a)} className="font-semibold text-[#ff453a]">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {msg && <p className="mt-3 rounded-xl bg-[#3a1d1d] px-3 py-2 text-sm text-[#ff9a92]">{msg}</p>}

      {rec ? (
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-[#2c1414] px-4 py-3">
          <span className="flex items-center gap-2 text-base font-semibold">
            <span className="h-3 w-3 animate-pulse rounded-full bg-[#ff453a]" /> Recording {fmtSecs(secs)}
          </span>
          <button type="button" onClick={stopAudio} className="rounded-full bg-[#ff453a] px-4 py-2 text-sm font-bold">Stop</button>
        </div>
      ) : (
        <div className="mt-4 flex gap-2">
          <button type="button" className={tool} onClick={() => photoIn.current?.click()}><span className="text-lg">📷</span>Camera</button>
          <button type="button" className={tool} onClick={() => galleryIn.current?.click()}><span className="text-lg">🖼️</span>Gallery</button>
          <button type="button" className={tool} onClick={() => videoIn.current?.click()}><span className="text-lg">🎥</span>Video</button>
          <button type="button" className={tool} onClick={startAudio}><span className="text-lg">🎙️</span>Voice</button>
        </div>
      )}

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
