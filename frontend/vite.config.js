import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@/ui": "/src/components/elements",
      "@/layout": "/src/components/layout",
      "@/shared": "/src/components/shared",
      "@/features": "/src/features",
      "@/lib": "/src/lib",
      "@/pages": "/src/pages",
    },
  },
});
