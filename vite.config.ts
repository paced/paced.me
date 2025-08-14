import react from "@vitejs/plugin-react-swc";
import vike from "vike/plugin";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
  },
  plugins: [react(), vike()],
});
