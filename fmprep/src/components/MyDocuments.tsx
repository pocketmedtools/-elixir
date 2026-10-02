/**
 * "My documents" — the learner's own material, in folders.
 *
 * Built for a library of hundreds of files: documents live in folders the
 * reader makes (Burns, Seminars, Thesis), each opened on its own with its own
 * "add files" button, and one search box at the top looks through every
 * document's name, folder and full text at once. Each file keeps its original
 * bytes and its complete extracted text; nothing is summarised or rewritten.
 */
import { useEffect, useMemo, useRef, useState, useSyncExternalStore, type CSSProperties, type ReactNode } from "react";
import {
  addFiles,
  addText,
  createFolder,
  deleteDoc,
  deleteFolder,
  folders,
  formatBytes,
  getDocs,
  getVersion,
  isLoaded,
  load,
  renameFolder,
  searchLibrary,
  subscribe,
  updateDoc,
  wordCount,
  type StudyDoc,
} from "../lib/docs";
import { getVersion as getStudyVersion, isDocRead, subscribe as subscribeStudy } from "../lib/store";
import { BackBar, Chip, Empty, RowButton, inkAt } from "./ui";

const KIND_LABEL: Record<StudyDoc["kind"], string> = {
  text: "Text",
  markdown: "Notes",
  pdf: "PDF",
  docx: "Word",
  html: "HTML",
  image: "Image",
  other: "File",
};

/** The folder last open, so the app reopens inside it. */
const OPEN_KEY = "FMPREP_DOCS_FOLDER";
const ALL = "__all__";

function readOpen(): string | null {
  try {
    return localStorage.getItem(OPEN_KEY);
  } catch {
    return null;
  }
}
function writeOpen(v: string | null) {
  try {
    if (v) localStorage.setItem(OPEN_KEY, v);
    else localStorage.removeItem(OPEN_KEY);
  } catch {
    /* storage blocked */
  }
}

function highlight(text: string, words: string[]): ReactNode {
  if (!words.length) return text;
  const esc = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = text.split(new RegExp(`(${esc.join("|")})`, "gi"));
  return parts.map((p, i) =>
    words.some((w) => w === p.toLowerCase()) ? (
      <mark key={i} className="rounded bg-amber-200 px-0.5">
        {p}
      </mark>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}

const ReadBadge = () => (
  <span className="rounded-full px-2.5 py-1 text-xs font-bold text-white" style={{ background: "#14532d" }}>
    ✓ Read
  </span>
);

export default function MyDocuments({
  onBack,
  onOpenDoc,
}: {
  onBack: () => void;
  /** Open a document; a search phrase, when given, is highlighted inside it. */
  onOpenDoc: (id: string, query?: string) => void;
}) {
  useSyncExternalStore(subscribe, getVersion);
  useSyncExternalStore(subscribeStudy, getStudyVersion);
  const docs = getDocs();
  const allFolders = folders();

  const [open, setOpenState] = useState<string | null>(() => readOpen());
  const setOpen = (v: string | null) => {
    setOpenState(v);
    writeOpen(v);
  };
  const [query, setQuery] = useState("");
  const [typed, setTyped] = useState("");
  const [readFilter, setReadFilter] = useState<"all" | "unread" | "read">("all");
  const [busy, setBusy] = useState<string | null>(null);
  const [problems, setProblems] = useState<{ name: string; error: string }[]>([]);
  const [pasteOpen, setPasteOpen] = useState(false);
  const [pasteTitle, setPasteTitle] = useState("");
  const [pasteBody, setPasteBody] = useState("");
  const fileRef = useRef<HTMLInputElement | null>(null);
  const folderRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!isLoaded()) void load();
  }, []);

  // Search waits for a pause in typing, so a long library stays smooth.
  useEffect(() => {
    const t = window.setTimeout(() => setQuery(typed.trim()), 220);
    return () => window.clearTimeout(t);
  }, [typed]);

  const words = useMemo(() => query.toLowerCase().split(/\s+/).filter((w) => w.length >= 2), [query]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const results = useMemo(() => (words.length ? searchLibrary(query) : []), [query, docs]);

  // A folder that no longer exists (renamed or deleted elsewhere) falls back to the list.
  const folderName = open && (open === ALL || allFolders.includes(open)) ? open : null;
  const inFolder = useMemo(
    () => (folderName === ALL ? docs : docs.filter((d) => d.collection === folderName)),
    [docs, folderName],
  );
  const readCount = inFolder.filter((d) => isDocRead(d.id)).length;
  const shown = inFolder.filter((d) =>
    readFilter === "all" ? true : readFilter === "read" ? isDocRead(d.id) : !isDocRead(d.id),
  );

  const target = folderName && folderName !== ALL ? folderName : "Unfiled";
  const importFiles = async (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    const files = Array.from(fileList);
    setProblems([]);
    setBusy(`Adding ${files.length} file${files.length > 1 ? "s" : ""} to ${target}…`);
    const result = await addFiles(files, target);
    setBusy(
      result.added.length
        ? `Added ${result.added.length} file${result.added.length > 1 ? "s" : ""} to ${target}.`
        : null,
    );
    setProblems(result.failed);
  };

  const newFolder = () => {
    const name = window.prompt("Name of the new folder (for example: Burns, Seminars, Thesis)");
    if (name && name.trim()) setOpen(createFolder(name));
  };

  const pill = (active: boolean) =>
    `rounded-lg border px-2 py-2 text-sm font-bold ${
      active ? "border-slate-900 bg-slate-900 text-white" : "border-slate-300 bg-white text-slate-800"
    }`;

  /* ------------------------------ search ------------------------------ */
  const searchBox = (
    <div className="mt-4">
      <input
        value={typed}
        onChange={(e) => setTyped(e.target.value)}
        type="search"
        placeholder="Search all documents - names and words inside"
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none focus:ring-2 focus:ring-slate-500"
      />
    </div>
  );

  const searchResults = (
    <section className="mt-4">
      <p className="text-xs font-semibold text-slate-500">
        {results.length === 0
          ? `Nothing found for "${query}" in ${docs.length} documents.`
          : `${results.length} document${results.length > 1 ? "s" : ""} found`}
      </p>
      <div className="mt-2 space-y-2">
        {results.map((r, ri) => (
          <button
            key={r.doc.id}
            type="button"
            onClick={() => onOpenDoc(r.doc.id, r.count ? query : undefined)}
            className="ink-spine block w-full rounded-xl border border-slate-200 bg-white p-3.5 text-left shadow-sm"
            style={{ "--row-ink": inkAt(ri) } as CSSProperties}
          >
            <span className="flex items-start gap-2">
              <span className="min-w-0 flex-1 text-[16.5px] font-bold leading-snug" style={{ color: inkAt(ri) }}>
                {highlight(r.doc.title, words)}
              </span>
              {isDocRead(r.doc.id) && <ReadBadge />}
            </span>
            <span className="mt-1 flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
              <Chip tone="teal">{r.doc.collection}</Chip>
              <span>{KIND_LABEL[r.doc.kind]}</span>
              {r.count > 0 && (
                <span className="font-semibold text-slate-700">
                  · {r.count >= 500 ? "500+" : r.count} match{r.count > 1 ? "es" : ""} inside
                </span>
              )}
            </span>
            {r.snippet && (
              <span className="mt-2 block text-[14.5px] leading-relaxed text-slate-700">
                {highlight(r.snippet, words)}
              </span>
            )}
          </button>
        ))}
      </div>
    </section>
  );

  /* ------------------------------ folders ----------------------------- */
  const folderList = (
    <section className="mt-5">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
          {allFolders.length} folder{allFolders.length === 1 ? "" : "s"} · {docs.length} documents
        </h2>
        <button type="button" onClick={newFolder} className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white">
          + New folder
        </button>
      </div>
      <div className="mt-3 space-y-2">
        <RowButton
          ink={inkAt(0)}
          onClick={() => setOpen(ALL)}
          title="All documents"
          subtitle={`${docs.length} documents · ${docs.filter((d) => isDocRead(d.id)).length} read`}
          right={<span className="text-slate-400">▸</span>}
        />
        {allFolders.map((f, fi) => {
          const list = docs.filter((d) => d.collection === f);
          const r = list.filter((d) => isDocRead(d.id)).length;
          return (
            <RowButton
              key={f}
              ink={inkAt(fi + 1)}
              onClick={() => setOpen(f)}
              title={`📁 ${f}`}
              subtitle={
                list.length
                  ? `${list.length} document${list.length > 1 ? "s" : ""} · ${r} read · ${list.length - r} to read`
                  : "Empty - open it to add files"
              }
              right={r === list.length && list.length > 0 ? <ReadBadge /> : <span className="text-slate-400">▸</span>}
            />
          );
        })}
      </div>
      {allFolders.length === 0 && (
        <Empty title="No folders yet" body="Make a folder for each subject or project, then open it and add files into it." />
      )}
    </section>
  );

  /* --------------------------- one folder ----------------------------- */
  const folderView = folderName && (
    <section className="mt-4">
      <button type="button" onClick={() => setOpen(null)} className="text-sm font-semibold text-slate-600">
        ← All folders
      </button>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-bold text-slate-900">{folderName === ALL ? "All documents" : `📁 ${folderName}`}</h2>
        {folderName !== ALL && (
          <div className="flex gap-3 text-xs font-semibold text-slate-600">
            <button
              type="button"
              onClick={() => {
                const next = window.prompt("Rename this folder", folderName);
                if (next && next.trim() && next.trim() !== folderName)
                  void renameFolder(folderName, next).then(() => setOpen(next.trim()));
              }}
            >
              Rename folder
            </button>
            <button
              type="button"
              className="text-rose-700"
              onClick={() => {
                if (inFolder.length === 0) {
                  void deleteFolder(folderName, false).then(() => setOpen(null));
                  return;
                }
                if (!window.confirm(`Delete the folder "${folderName}"?`)) return;
                const alsoDocs = window.confirm(
                  `Also delete its ${inFolder.length} document${inFolder.length > 1 ? "s" : ""} from this phone?\n\nOK = delete them too\nCancel = keep them (they move to "Unfiled")`,
                );
                void deleteFolder(folderName, alsoDocs).then(() => setOpen(null));
              }}
            >
              Delete folder
            </button>
          </div>
        )}
      </div>

      <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
        <p className="text-xs font-semibold text-slate-600">Add into {target}</p>
        <div className="mt-2 grid grid-cols-3 gap-2">
          <button type="button" onClick={() => fileRef.current?.click()} className="rounded-lg bg-slate-900 px-2 py-2 text-sm font-semibold text-white">
            Add files
          </button>
          <button
            type="button"
            onClick={() => folderRef.current?.click()}
            className="rounded-lg border border-slate-300 bg-white px-2 py-2 text-sm font-semibold text-slate-800"
          >
            Whole folder
          </button>
          <button
            type="button"
            onClick={() => setPasteOpen((p) => !p)}
            className="rounded-lg border border-slate-300 bg-white px-2 py-2 text-sm font-semibold text-slate-800"
          >
            Paste notes
          </button>
        </div>
        <p className="mt-2 text-[11px] leading-snug text-slate-500">
          You can select many files at once. HTML, PDF, Word and text files are all searchable.
        </p>
        {pasteOpen && (
          <div className="mt-3 border-t border-slate-200 pt-3">
            <input
              value={pasteTitle}
              onChange={(e) => setPasteTitle(e.target.value)}
              placeholder="Title"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-500"
            />
            <textarea
              value={pasteBody}
              onChange={(e) => setPasteBody(e.target.value)}
              placeholder="Paste or type the text. It is stored exactly as entered."
              rows={6}
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-500"
            />
            <button
              type="button"
              disabled={!pasteBody.trim()}
              onClick={async () => {
                await addText(pasteTitle, pasteBody, target);
                setPasteTitle("");
                setPasteBody("");
                setPasteOpen(false);
              }}
              className="mt-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white disabled:opacity-50"
            >
              Save these notes
            </button>
          </div>
        )}
        {busy && <p className="mt-2 text-sm font-semibold text-slate-700">{busy}</p>}
        {problems.length > 0 && (
          <ul className="mt-2 space-y-1 text-xs text-rose-800">
            {problems.map((p, i) => (
              <li key={i}>
                <span className="font-semibold">{p.name}:</span> {p.error}
              </li>
            ))}
          </ul>
        )}
      </div>

      {inFolder.length > 0 && (
        <div className="mt-3 grid grid-cols-3 gap-2">
          <button type="button" onClick={() => setReadFilter("all")} className={pill(readFilter === "all")}>
            All ({inFolder.length})
          </button>
          <button type="button" onClick={() => setReadFilter("unread")} className={pill(readFilter === "unread")}>
            Unread ({inFolder.length - readCount})
          </button>
          <button type="button" onClick={() => setReadFilter("read")} className={pill(readFilter === "read")}>
            Read ({readCount})
          </button>
        </div>
      )}

      {inFolder.length === 0 ? (
        <Empty title="This folder is empty" body="Tap Add files above and pick as many files as you like." />
      ) : (
        <div className="mt-3 space-y-2">
          {shown.map((doc, di) => (
            <div key={doc.id}>
              <RowButton
                ink={inkAt(di)}
                onClick={() => onOpenDoc(doc.id)}
                title={doc.title}
                subtitle={
                  <>
                    {folderName === ALL ? `${doc.collection} · ` : ""}
                    {KIND_LABEL[doc.kind]} · {formatBytes(doc.bytes)}
                    {doc.pages ? ` · ${doc.pages} pages` : ""}
                    {doc.text ? ` · ${wordCount(doc.text).toLocaleString("en-IN")} words` : " · no text extracted"}
                  </>
                }
                right={isDocRead(doc.id) ? <ReadBadge /> : <Chip>{new Date(doc.addedAt).toLocaleDateString("en-IN")}</Chip>}
              />
              <div className="mt-1 flex flex-wrap items-center gap-3 pl-1 text-[11px] font-semibold text-slate-500">
                <button
                  type="button"
                  onClick={() => {
                    const next = window.prompt("Rename this document", doc.title);
                    if (next != null && next.trim()) void updateDoc(doc.id, { title: next.trim() });
                  }}
                >
                  Rename
                </button>
                <label className="flex items-center gap-1">
                  Move to
                  <select
                    value=""
                    onChange={(e) => {
                      let to = e.target.value;
                      if (to === "__new__") to = createFolder(window.prompt("Name of the new folder") ?? "");
                      if (to && to !== doc.collection) void updateDoc(doc.id, { collection: to });
                    }}
                    className="rounded border border-slate-300 bg-white px-1 py-0.5 text-[11px] text-slate-700"
                  >
                    <option value="">{doc.collection}</option>
                    {allFolders
                      .filter((f) => f !== doc.collection)
                      .map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    <option value="__new__">+ New folder…</option>
                  </select>
                </label>
                <button
                  type="button"
                  className="text-rose-700"
                  onClick={() => {
                    if (window.confirm(`Delete "${doc.title}"? The stored copy is removed from this phone.`))
                      void deleteDoc(doc.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {shown.length === 0 && (
            <p className="py-6 text-center text-sm text-slate-500">
              {readFilter === "unread" ? "Everything here is read. 🎉" : "Nothing marked as read yet."}
            </p>
          )}
        </div>
      )}
    </section>
  );

  return (
    <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
      <BackBar onBack={onBack} label="Study" />
      <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">My documents</h1>

      {searchBox}
      {words.length ? searchResults : folderName ? folderView : folderList}

      <input
        ref={fileRef}
        type="file"
        multiple
        accept=".pdf,.docx,.txt,.md,.markdown,.csv,.json,.html,.htm,.rtf,.log,image/*"
        onChange={(e) => {
          void importFiles(e.target.files);
          e.target.value = "";
        }}
        className="hidden"
      />
      <input
        ref={folderRef}
        type="file"
        multiple
        // Folder picking is a Chrome/Edge/Safari attribute, not standard DOM typing.
        {...({ webkitdirectory: "", directory: "" } as Record<string, string>)}
        onChange={(e) => {
          void importFiles(e.target.files);
          e.target.value = "";
        }}
        className="hidden"
      />
    </div>
  );
}
