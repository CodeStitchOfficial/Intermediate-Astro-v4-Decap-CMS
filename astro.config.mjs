import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.yourwebsite.com',
  integrations: [icon(), sitemap({
    filter: (page) => !page.includes('/admin'),
    changefreq: 'weekly',
    priority: 0.7
  })]
});