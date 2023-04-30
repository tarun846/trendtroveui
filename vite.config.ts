/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9000,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@root": path.resolve(__dirname, ""),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
