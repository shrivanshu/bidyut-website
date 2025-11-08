import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    {
      name: "async-css-loader",
      transformIndexHtml(html) {
        return html.replace(
          /<link rel="stylesheet"([^>]+href=\"[^\"]*\/assets\/css[^\"]*\"[^>]*)>/g,
          (match, attrs) => `
    <link rel="preload" as="style"${attrs} onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet"${attrs}></noscript>`
        );
      },
    },
  ],
  server: {
    port: 3000,
    open: true,
    hmr: process.env.DISABLE_HMR === 'true' ? false : undefined,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'gsap', 'framer-motion'],
    exclude: []
  },
  esbuild: {
    minify: mode === 'development',
    treeShaking: true
  },
  build: {
    outDir: 'build',
    sourcemap: mode === 'production' ? false : true, // Enable sourcemaps in dev for debugging
    minify: mode === 'development' ? 'esbuild' : 'terser',
    target: 'es2020', // Modern browsers for better tree-shaking
    assetsInlineLimit: 4096, // Inline small assets
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Simplified chunking for development mode
          if (mode === 'development') {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) {
                return 'vendor-react';
              }
              if (id.includes('gsap')) {
                return 'vendor-gsap';
              }
              if (id.includes('framer-motion')) {
                return 'vendor-framer';
              }
              return 'vendor-shared';
            }
            return 'app';
          }

          // Production chunking
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('gsap')) {
              return 'vendor-gsap';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('three') || id.includes('@react-three')) {
              return 'vendor-three';
            }
            if (id.includes('react-router') || id.includes('react-helmet')) {
              return 'vendor-router';
            }
            // Group remaining node_modules into shared chunk
            return 'vendor-shared';
          }
          // Route-based code splitting
          if (id.includes('/src/Pages/')) {
            const pageName = id.split('/Pages/')[1].split('.')[0].toLowerCase();
            return `page-${pageName}`;
          }
          // Locales chunking
          if (id.includes('/src/locales/')) {
            return 'locales';
          }
          // Components chunking
          if (id.includes('/src/Component/')) {
            return 'components';
          }
          // Home components chunking
          if (id.includes('/src/home_components/')) {
            return 'home-components';
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return 'assets/img/[name]-[hash][extname]';
          }
          if (/css/i.test(extType)) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[ext]/[name]-[hash][extname]';
        },
      }
    },
    chunkSizeWarningLimit: 1000,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
        passes: 3,
        ecma: 2020,
        module: true,
        toplevel: true,
        unsafe_arrows: true,
        unsafe_methods: true,
        unsafe_proto: true,
        keep_infinity: true
      },
      mangle: {
        safari10: true,
        toplevel: true,
        module: true
      },
      format: {
        comments: false,
        ecma: 2020
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  css: {
    postcss: './postcss.config.js'
  }
}))
