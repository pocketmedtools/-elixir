/**
 * Office files shown as they were made, and their text pulled out for search.
 *
 * - Word (.docx): docx-preview lays the file out as real pages: page size,
 *   margins, fonts, colours, tables, headers, footers, images, columns.
 * - PowerPoint (.pptx): pptx-preview draws every slide with its shapes,
 *   colours, pictures, tables and charts, one slide under the next.
 * - Excel (.xlsx, .xls, .ods): SheetJS turns each sheet into a grid, one tab
 *   per sheet.
 *
 * All three libraries are loaded only when such a file is opened.
 */

/** Text of a PowerPoint file, slide by slide, for search and Text view. */
export async function pptxToText(data: ArrayBuffer): Promise<{ text: string; slides: number }> {
  const JSZip = (await import("jszip")).default;
  const zip = await JSZip.loadAsync(data);
  const names = Object.keys(zip.files)
    .filter((n) => /^ppt\/slides\/slide\d+\.xml$/.test(n))
    .sort((a, b) => Number(a.match(/\d+/g)!.pop()) - Number(b.match(/\d+/g)!.pop()));
  const out: string[] = [];
  for (const [i, name] of names.entries()) {
    const xml = await zip.file(name)!.async("string");
    const doc = new DOMParser().parseFromString(xml, "application/xml");
    const paras: string[] = [];
    for (const p of Array.from(doc.getElementsByTagNameNS("*", "p"))) {
      const t = Array.from(p.getElementsByTagNameNS("*", "t"))
        .map((n) => n.textContent ?? "")
        .join("");
      if (t.trim()) paras.push(t);
    }
    out.push(`[Slide ${i + 1}]\n${paras.join("\n")}`);
  }
  return { text: out.join("\n\n").trim(), slides: names.length };
}

/** Text of a spreadsheet, sheet by sheet, as comma-separated rows. */
export async function sheetToText(data: ArrayBuffer): Promise<string> {
  const XLSX = await import("xlsx");
  const wb = XLSX.read(data, { type: "array" });
  return wb.SheetNames.map((n) => `[Sheet: ${n}]\n${XLSX.utils.sheet_to_csv(wb.Sheets[n], { blankrows: false })}`)
    .join("\n\n")
    .trim();
}

/** Every sheet as an HTML table, in order. */
export async function sheetToTables(data: ArrayBuffer): Promise<{ name: string; html: string }[]> {
  const XLSX = await import("xlsx");
  const wb = XLSX.read(data, { type: "array", cellStyles: true });
  return wb.SheetNames.map((name) => ({
    name,
    html: XLSX.utils.sheet_to_html(wb.Sheets[name], { header: "", footer: "" }),
  }));
}

/** A Word file laid out as its real pages into `into`. */
export async function renderDocx(data: Blob, into: HTMLElement): Promise<void> {
  const { renderAsync } = await import("docx-preview");
  into.innerHTML = "";
  await renderAsync(data, into, into, {
    className: "docx",
    inWrapper: true,
    ignoreWidth: false,
    ignoreHeight: false,
    ignoreFonts: false,
    breakPages: true,
    ignoreLastRenderedPageBreak: false,
    renderHeaders: true,
    renderFooters: true,
    renderFootnotes: true,
    renderEndnotes: true,
    useBase64URL: true,
    experimental: true,
  });
}

/** PowerPoint slides, one under another, drawn into `into` at `width` px. */
export async function renderPptx(data: ArrayBuffer, into: HTMLElement): Promise<() => void> {
  const { init } = await import("pptx-preview");
  into.innerHTML = "";
  const size = await slideSize(data);
  const width = 960;
  const previewer = init(into, { width, height: Math.round(width * size), mode: "list" });
  await previewer.preview(data);
  return () => previewer.destroy();
}

/** Height / width of the slides (16:9, 4:3 or custom), from presentation.xml. */
async function slideSize(data: ArrayBuffer): Promise<number> {
  try {
    const JSZip = (await import("jszip")).default;
    const zip = await JSZip.loadAsync(data);
    const xml = (await zip.file("ppt/presentation.xml")?.async("string")) ?? "";
    const m = xml.match(/<p:sldSz[^>]*\bcx="(\d+)"[^>]*\bcy="(\d+)"/);
    if (m) return Number(m[2]) / Number(m[1]);
  } catch {
    /* fall through to 16:9 */
  }
  return 9 / 16;
}
