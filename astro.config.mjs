import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import siteConfigToolbar from "./site-config-toolbar/integration.ts";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), siteConfigToolbar()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Geist",
      cssVariable: "--font-geist",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Ruda",
      cssVariable: "--font-ruda",
		},
		{
      provider: fontProviders.fontsource(),
      name: "EB Garamond",
      cssVariable: "--font-eb-garamond",
    },
		{
      provider: fontProviders.fontsource(),
      name: "Roboto Slab",
      cssVariable: "--font-roboto-slab",
    },
  ],
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
    },
  },
  site: "https://pj-gardenworm.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
	base: ""
});
