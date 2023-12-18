import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path";

// https://vitejs.dev/config
export default defineConfig({
    plugins: [vue()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                html1: resolve(__dirname, 'src/092-break-up.html'),
                html2: resolve(__dirname, 'src/authentication.html'),
                html3: resolve(__dirname, 'src/lottie.html'),
                html4: resolve(__dirname, 'src/text-transfer.html'),
                html5: resolve(__dirname, 'src/type-recorder.html'),
                html6: resolve(__dirname, 'src/diary.html'),
            },
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
        }
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js',
        },
    }
})
