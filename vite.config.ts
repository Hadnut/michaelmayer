/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import legacy from '@vitejs/plugin-legacy';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/michaelmayer/",
  build: { sourcemap: true },
  plugins: [
    react(),
    legacy({ targets: ['defaults'] }),
    visualizer({ emitFile: true, gzipSize: true }),
  ],
  // https://vitest.dev/config/
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      all: true,
      provider: 'v8',
      include: ['src'],
    },
  },
});
