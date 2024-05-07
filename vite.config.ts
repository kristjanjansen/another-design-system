import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import preserveDirectives from "rollup-preserve-directives";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true }), preserveDirectives()],
  build: {
    outDir: "./dist",
    lib: {
      entry: ["./components/index.ts"],
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        chunkFileNames: "[name].js",
        assetFileNames: "styles[extname]",
      },
    },
  },
});
