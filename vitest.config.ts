/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineConfig({
  resolve: {
    alias: {
      "~": resolve(__dirname, "./"),
    },
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    Vuetify(),
  ],
  test: {
    globals: true,
    environment: "happy-dom",
    reporters: "verbose",
    coverage: {
      reporter: ["html", "json", "text", "lcov"],
    },
    server: {
      deps: {
        inline: ["vuetify"],
      },
    },
  },
});
