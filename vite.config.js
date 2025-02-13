import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
    root,
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                basicTypes: resolve(root, 'basicTypes', 'index.html'),
                functionTypes: resolve(root, 'functionTypes', 'index.html'),
                // nested: resolve(root, 'nested/index.html'),
            }
    }
    },
    server: {
        port: 2720
    }
})