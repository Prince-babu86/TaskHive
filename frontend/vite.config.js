import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
// import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy:{
      "/user" :"http://localhost:4000/",
      "/Api" :"http://localhost:4000/",
      "/task" :"http://localhost:4000/",
    }
  },
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'TaskHive',
        short_name: 'TaskHive',
        description: 'A Progressive Web App built with Vite and React',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'https://i.pinimg.com/736x/9d/79/71/9d79719cabcbd3c17040071a66f07aa4.jpg',
            sizes: '192x192',
            type: 'image/jpg',
          },
          {
            src: 'https://i.pinimg.com/736x/9d/79/71/9d79719cabcbd3c17040071a66f07aa4.jpg',
            sizes: '512x512',
            type: 'image/jpg',
          },
          {
            src: 'https://i.pinimg.com/736x/9d/79/71/9d79719cabcbd3c17040071a66f07aa4.jpg',
            sizes: '512x512',
            type: 'image/jpg',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});