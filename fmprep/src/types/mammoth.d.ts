/**
 * mammoth ships its browser build without types. Only extractRawText is used,
 * and only to pull the complete text out of a .docx the user imported.
 */
declare module "mammoth/mammoth.browser" {
  export function extractRawText(input: { arrayBuffer: ArrayBuffer }): Promise<{
    value: string;
    messages: { type: string; message: string }[];
  }>;
  export function convertToHtml(input: { arrayBuffer: ArrayBuffer }): Promise<{
    value: string;
    messages: { type: string; message: string }[];
  }>;
}

/* pdf.js legacy build: same API as the modern one. */
declare module "pdfjs-dist/legacy/build/pdf.min.mjs" {
  const pdfjs: unknown;
  export = pdfjs;
}
