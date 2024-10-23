import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            manifest: {
                name: "ARAMES",
                short_name: "ARMS",
                description: "Your app description",
                theme_color: "#ffffff",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icons: [
                    {
                        src: "./icons/manifest-icon-192.maskable.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "./icons/manifest-icon-512.maskable.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        }),
    ],
});
