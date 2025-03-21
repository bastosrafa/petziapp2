import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";
<<<<<<< HEAD
=======
import tsconfigPaths from "vite-tsconfig-paths"; // 🔹 Corrige alias automaticamente no Vite
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
<<<<<<< HEAD
=======
    tsconfigPaths(), // 🔹 Garante que os aliases sejam resolvidos corretamente
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
      },
      devOptions: {
        enabled: true,
      },
      manifest: {
<<<<<<< HEAD
        name: "Generic App", // TODO: Informar o nome do seu app
        short_name: "GenericApp", // TODO: Informar o nome do seu app
        description: "A generic app", // TODO: Alterar a descrição
=======
        name: "PetziApp", // TODO: Informar o nome do seu app
        short_name: "Petzia", // TODO: Informar o nome do seu app
        description: "Saúde animal", // TODO: Alterar a descrição
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8
        theme_color: "#000000",
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "apple-touch-icon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
<<<<<<< HEAD
    },
  },
=======
      "@services": path.resolve(__dirname, "./src/services"), // 🔹 Garante que services sempre seja referenciado corretamente
      "@components": path.resolve(__dirname, "./src/components"), // 🔹 Alias para componentes
    },
  },
  server: {
    port: 5173, // 🔥 Porta fixa para evitar mudança automática
    strictPort: true, // 🔒 Não muda a porta se estiver em uso
    open: true, // 🚀 Abre automaticamente no navegador ao rodar `npm run dev`
  },
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8
});
