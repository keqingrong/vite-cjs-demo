import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: false,
    commonjsOptions: {
      include: /node_modules|libs/,
    }
  }
})
