import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	root: './public',
	dest: './dist',
  build: {
		outDir: '../dist',
		rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/index.html'),
        mirror: resolve(__dirname, 'public/mirror/index.html'),
				vr: resolve(__dirname, 'public/vr/index.html')
      }
    }
	}
})