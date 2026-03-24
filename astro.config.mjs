import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kamilbernaerts.github.io',
  base: '/website',
  build: {
    assets: '_assets'
  }
});
