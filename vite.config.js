import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from "vite";


export default defineConfig({
  base: "",
  // plugins: [
  //   legacy({
  //     targets: ["ios>=10", "safari >= 10.1"],
  //     modernPolyfills: true,
  //     renderLegacyChunks: true,
  //     additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
  //   }),
  // ],
});
