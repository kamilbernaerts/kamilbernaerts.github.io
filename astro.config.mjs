import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kamilbernaerts.com',
  // The Outreach page was renamed; old links keep working.
  redirects: {
    '/outreach': '/public-speaking/',
  },
  build: {
    assets: '_assets'
  }
});
