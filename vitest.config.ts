import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./vitest.setup.ts'],
        exclude: [
            'node_modules',
            'playwright',
            '.next',
            // add other folders as needed
        ],
        coverage: {
            reporter: ['text', 'json', 'html'],
            exclude: [
                '**/tests/**',
                '**/*.spec.tsx',
                '**/*.test.tsx',
                '**/vitest.setup.ts',
            ],
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});
