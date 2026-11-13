import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://registry.isotc211.org',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [vue()],
  vite: {
    plugins: [tailwindcss()],
  },
})
