import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  server: {
    host: true,
    port: 3000, // you can specify the port you want to use
    proxy: {
      "/api": {
        target: "http://localhost:5000", // The backend server URL
        changeOrigin: true,
      },
    },
  },
});
