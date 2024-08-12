import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // to remove this error of prop-types package we add below optimizeDeps code
  // 504 (Outdated Optimize Dep) while using react-vite
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
});
