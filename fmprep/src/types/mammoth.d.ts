/**
 * mammoth ships its browser build without types. Only extractRawText is used,
 * and only to pull the complete text out of a .docx the user imported.
 */
declare module "mammoth/mammoth.browser" {
  export function extractRawText(input: { arrayBuffer: ArrayBuffer }): Promise<{
    value: string;
    messages: { type: string; message: string }[];
  }>;
}
