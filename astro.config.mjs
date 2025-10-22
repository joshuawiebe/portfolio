// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://joshuawiebe.github.io/portfolio/",
  base: "/portfolio/",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});

