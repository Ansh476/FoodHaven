import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // esbuild: {
  //   jsxInject: `import React from 'react'`,  // Automatically inject React in JSX files
  // },
  test: {
    environment: 'jsdom',
    setupFiles: './setupTests.js',
    globals: true,  // Ensure `expect` and other globals are available
  },
});



// npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
// npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
// npm install --save-dev jsdom
