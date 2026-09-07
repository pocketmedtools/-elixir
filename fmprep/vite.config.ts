import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Served from /fm/ on the project site alongside the clinical app; the
  // Netlify/Vercel builds and `npm run build:site` override this.
  base: "/",
  plugins: [react(), tailwindcss()],
  server: { host: true, port: 5174, strictPort: true },
  preview: { host: true, port: 5174, strictPort: true },
});
