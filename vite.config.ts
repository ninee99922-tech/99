import { fileURLToPath, URL } from "node:url";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  // Use relative asset paths so the app works from a GitHub Pages project URL.
  base: "./",
  plugins: [viteReact()],
  build: {
    outDir: "dist/client",
  },
  server: {
    port: 8820,
    host: true,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
