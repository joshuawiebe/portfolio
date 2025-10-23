import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://joshuawiebe.github.io/portfolio/",
  base: "/portfolio/",
  output: "static",
  integrations: [tailwind({
    // Configure content paths for better performance
    applyBaseStyles: false,
  })],
});

