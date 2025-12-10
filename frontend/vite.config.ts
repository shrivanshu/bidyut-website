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
    include: ['react/jsx-runtime', 'react/jsx-dev-runtime'],
    exclude: ['@google/generative-ai']
  },
  server: {
    hmr: mode === 'production' ? false : { overlay: false },
    fs: { strict: false },
    port: 3000,
    open: true,
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
    modulePreload: {
      polyfill: true
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom')) return 'react-dom';
            if (id.includes('react-router')) return 'react-router';
            if (id.includes('scheduler')) return 'react-dom';
            if (id.includes('react') && !id.includes('react-dom') && !id.includes('react-router')) return 'react';
            if (id.includes('framer-motion')) return 'framer';
            if (id.includes('gsap')) return 'gsap';
            if (id.includes('three')) return 'three';
            if (id.includes('lucide-react') || id.includes('react-icons')) return 'icons';
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
      treeshake: true
    },
    chunkSizeWarningLimit: 1000,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      mangle: {
        safari10: true
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
