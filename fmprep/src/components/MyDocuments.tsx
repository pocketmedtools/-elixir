/**
 * "My documents" — the learner's own material.
 *
 * A whole project folder can be picked at once. Each file keeps its original
 * bytes and its complete extracted text; nothing is summarised, shortened or
 * rewritten. Subdivisions are plain named collections, so a project can be
 * split the way its owner already thinks about it.
 */
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import {
  addFiles,
  addText,
  collections,
  deleteDoc,
  formatBytes,
  getDocs,
  getVersion,
  isLoaded,
  load,
  subscribe,
  updateDoc,
  wordCount,
  type StudyDoc,
} from "../lib/docs";
import { BackBar, Chip, Empty, RowButton } from "./ui";

const KIND_LABEL: Record<StudyDoc["kind"], string> = {
  text: "Text",
  markdown: "Notes",
  pdf: "PDF",
  docx: "Word",
  html: "HTML",
  image: "Image",
  other: "File",
};

export default function MyDocuments({
  onBack,
  onOpenDoc,
}: {
  onBack: () => void;
  onOpenDoc: (id: string) => void;
}) {
  useSyncExternalStore(subscribe, getVersion);
  const docs = getDocs();
  const [collection, setCollection] = useState("FM Project");
  const [filter, setFilter] = useState<string | "all">("all");
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

  const names = collections();
  const shown = useMemo(
    () => (filter === "all" ? docs : docs.filter((d) => d.collection === filter)),
    [docs, filter],
  );

  const grouped = useMemo(() => {
    const map = new Map<string, StudyDoc[]>();
    for (const d of shown) {
      const list = map.get(d.collection) ?? [];
      list.push(d);
      map.set(d.collection, list);
    }
    return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, [shown]);

  const importFiles = async (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    const files = Array.from(fileList);
    setProblems([]);
    setBusy(`Reading ${files.length} file${files.length > 1 ? "s" : ""}…`);
    const result = await addFiles(files, collection);
    setBusy(null);
    setProblems(result.failed);
    if (result.added.length) setFilter(collection.trim() || "Unfiled");
  };

  return (
    <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
      <BackBar onBack={onBack} label="Study" />
      <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">My documents</h1>
      <p className="mt-1 leading-relaxed text-slate-700">
        Bring in your own notes, project files and case write-ups. The whole text is kept, word for word, and the
        original file is stored alongside it so it can be taken out again unchanged. Everything stays on this
        device and works with no network.
      </p>

      <section className="mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <label className="block text-xs font-semibold text-slate-700">
          Add into this subdivision
          <input
            value={collection}
            onChange={(e) => setCollection(e.target.value)}
            list="fm-collections"
            placeholder="FM Project"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-base text-slate-900 outline-none focus:ring-2 focus:ring-slate-500"
          />
        </label>
        <datalist id="fm-collections">
          {["FM Project", "Case Presentations", "Seminars", "Journal Club", "Thesis", ...names].map((n) => (
            <option key={n} value={n} />
          ))}
        </datalist>

        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white"
          >
            Choose files
          </button>
          <button
            type="button"
            onClick={() => folderRef.current?.click()}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800"
          >
            Choose a whole folder
          </button>
          <button
            type="button"
            onClick={() => setPasteOpen((p) => !p)}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800"
          >
            Paste notes
          </button>
        </div>

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

        <p className="mt-2 text-[11px] leading-snug text-slate-500">
          PDF and Word (.docx) text is extracted in the app itself. Scanned PDFs hold pictures of text, so they
          are stored and shown but cannot be searched.
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
                await addText(pasteTitle, pasteBody, collection);
                setPasteTitle("");
                setPasteBody("");
                setPasteOpen(false);
                setFilter(collection.trim() || "Unfiled");
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
      </section>

      {names.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
              filter === "all" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"
            }`}
          >
            All ({docs.length})
          </button>
          {names.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setFilter(n)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                filter === n ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"
              }`}
            >
              {n} ({docs.filter((d) => d.collection === n).length})
            </button>
          ))}
        </div>
      )}

      {docs.length === 0 ? (
        <Empty
          title="Nothing imported yet"
          body="Pick the folder your Family Medicine project lives in, or choose individual files. Word and PDF files become searchable text; the originals are kept as they are."
        />
      ) : (
        grouped.map(([name, list]) => (
          <section key={name} className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
              {name} · {list.length} document{list.length > 1 ? "s" : ""}
            </h2>
            <div className="mt-2 space-y-2">
              {list.map((doc) => (
                <div key={doc.id} className="relative">
                  <RowButton
                    onClick={() => onOpenDoc(doc.id)}
                    title={doc.title}
                    subtitle={
                      <>
                        {KIND_LABEL[doc.kind]} · {formatBytes(doc.bytes)}
                        {doc.pages ? ` · ${doc.pages} pages` : ""}
                        {doc.text ? ` · ${wordCount(doc.text).toLocaleString("en-IN")} words` : " · no text extracted"}
                      </>
                    }
                    right={<Chip>{new Date(doc.addedAt).toLocaleDateString("en-IN")}</Chip>}
                  />
                  <div className="mt-1 flex flex-wrap gap-3 pl-1 text-[11px] font-semibold text-slate-500">
                    <button
                      type="button"
                      onClick={() => {
                        const next = window.prompt("Rename this document", doc.title);
                        if (next != null && next.trim()) void updateDoc(doc.id, { title: next.trim() });
                      }}
                    >
                      Rename
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const next = window.prompt("Move to which subdivision?", doc.collection);
                        if (next != null && next.trim()) void updateDoc(doc.id, { collection: next.trim() });
                      }}
                    >
                      Move
                    </button>
                    <button
                      type="button"
                      className="text-rose-700"
                      onClick={() => {
                        if (window.confirm(`Delete "${doc.title}"? The stored copy is removed from this device.`))
                          void deleteDoc(doc.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
