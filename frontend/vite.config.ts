import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { prodAliases } from './vite-prod-alias'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode)
  },
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : []
  },
  optimizeDeps: {
    include: ['react/jsx-runtime', 'react/jsx-dev-runtime', 'gsap', 'gsap/ScrollTrigger'],
    exclude: ['@google/generative-ai']
  },
  server: {
    hmr: mode === 'production' ? false : { overlay: false },
    fs: { strict: false },
    port: 3000,
    open: true,
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'Cache-Control': 'public, max-age=31536000, immutable'
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      }
    }
  },
  build: {
    outDir: 'build',
    sourcemap: false,
    minify: 'terser',
    target: 'es2020',
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom/client')) return 'react-dom';
            if (id.includes('react-dom')) return 'react-dom';
            if (id.includes('react-router')) return 'react-router';
            if (id.includes('scheduler')) return 'react-dom';
            if (id.includes('react') && !id.includes('react-dom') && !id.includes('react-router')) return 'react';
            if (id.includes('framer-motion')) return 'framer';
            if (id.includes('gsap/ScrollTrigger')) return 'gsap-plugins';
            if (id.includes('gsap')) return 'gsap';
            if (id.includes('three')) return 'three';
            if (id.includes('lucide-react') || id.includes('react-icons')) return 'icons';
            if (id.includes('react-helmet')) return 'helmet';
          }
          // Split large components into separate chunks
          if (id.includes('src/Component/home_components')) return 'home-components';
          if (id.includes('src/Pages') && !id.includes('Home_page')) return 'pages';
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false
      }
    },
    chunkSizeWarningLimit: 1000,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 2
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      ...(mode === 'production' ? prodAliases : {})
    }
  },
  css: {
    postcss: './postcss.config.js'
  }
}))
