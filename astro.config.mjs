import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

const SITE_URL = "https://austincooke.github.io";
const REPO_NAME = "portfolio-site";
const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: SITE_URL,
  base: isProd ? `/${REPO_NAME}` : "/",
  integrations: [tailwind(), sitemap()],
  output: "static"
});
