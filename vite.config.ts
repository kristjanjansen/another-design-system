import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import preserveDirectives from "rollup-preserve-directives";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), preserveDirectives()],
  build: {
    outDir: "./dist",
    lib: {
      entry: ["./components/index.ts"],
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
