import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Ajuste importante para GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: "/leetcode-tracker/",
});
