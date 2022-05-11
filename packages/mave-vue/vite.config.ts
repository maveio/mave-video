import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("mave-"),
        },
      },
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "mave-vue",
    },
    outDir: "dist",
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
