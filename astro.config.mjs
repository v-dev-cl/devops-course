import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://v-dev-cl.github.io',
  base: '/devops-course',
  integrations: [react(), mdx()],
  vite: { plugins: [tailwindcss()] },
});
