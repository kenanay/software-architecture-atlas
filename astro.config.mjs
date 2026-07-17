import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://kenanay.github.io/software-architecture-atlas/",
  integrations: [mdx(), sitemap()],
  output: "static",
  build: { format: "directory" },
});
