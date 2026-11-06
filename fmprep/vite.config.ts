import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { cpSync, existsSync, createReadStream } from "node:fs";
import { join, resolve, normalize } from "node:path";

/**
 * pdf.js needs data files to draw a PDF exactly as printed: character maps,
 * the 14 standard fonts (for PDFs that do not embed them), colour profiles
 * and the JPEG 2000 / JBIG2 decoders used by scanned pages. They are copied
 * from pdfjs-dist into dist/pdfjs/ on every build, so the app has them
 * offline, and served from node_modules during development.
 */
const PDF_ASSETS = ["cmaps", "standard_fonts", "wasm", "iccs"];
function pdfjsAssets(): Plugin {
  const src = resolve(__dirname, "node_modules/pdfjs-dist");
  let outDir = "dist";
  return {
    name: "fmprep-pdfjs-assets",
    configResolved(c) {
      outDir = resolve(c.root, c.build.outDir);
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const m = req.url?.match(/\/pdfjs\/([^?]+)/);
        if (!m) return next();
        const file = normalize(join(src, decodeURIComponent(m[1])));
        if (!file.startsWith(src) || !existsSync(file)) return next();
        createReadStream(file).pipe(res);
      });
    },
    closeBundle() {
      for (const dir of PDF_ASSETS) {
        cpSync(join(src, dir), join(outDir, "pdfjs", dir), { recursive: true });
      }
    },
  };
}

export default defineConfig({
  // Served from /fm/ on the project site alongside the clinical app; the
  // Netlify/Vercel builds and `npm run build:site` override this.
  base: "/",
  plugins: [react(), tailwindcss(), pdfjsAssets()],
  server: { host: true, port: 5174, strictPort: true },
  preview: { host: true, port: 5174, strictPort: true },
});
