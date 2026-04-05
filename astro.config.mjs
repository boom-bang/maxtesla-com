// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

/**
 * Custom rehype plugin: add `rel="nofollow"` to every <a> in markdown/MDX
 * content by default. Authors opt out per-link via markdown title syntax:
 *
 *   [text](https://example.com "dofollow")
 *
 * The plugin strips the "dofollow" title and leaves `rel` untouched. Any
 * existing `rel` values on the anchor are preserved; `nofollow` is appended
 * only if it isn't already present.
 *
 * Scope: Astro only runs this on markdown/MDX content, so .astro-level links
 * (nav, prev/next, footer) are unaffected.
 */
function rehypeNofollowByDefault() {
  /** @param {any} node */
  const walk = (node) => {
    if (node.type === "element" && node.tagName === "a") {
      const props = (node.properties ??= {});

      if (props.title === "dofollow") {
        delete props.title;
      } else {
        const existing = Array.isArray(props.rel)
          ? [...props.rel]
          : typeof props.rel === "string"
            ? props.rel.split(/\s+/).filter(Boolean)
            : [];
        if (!existing.includes("nofollow")) existing.push("nofollow");
        props.rel = existing;
      }
    }
    if (node.children) for (const child of node.children) walk(child);
  };
  /** @param {any} tree */
  return (tree) => walk(tree);
}

// https://astro.build/config
export default defineConfig({
  site: "https://maxtesla.com",
  trailingSlash: "never",
  integrations: [react(), mdx(), sitemap()],
  adapter: vercel({
    webAnalytics: { enabled: true },
    imageService: true,
  }),
  output: "static",
  server: {
    port: 4321,
    host: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    rehypePlugins: [rehypeNofollowByDefault],
    shikiConfig: {
      themes: {
        light: "vitesse-light",
        dark: "vitesse-black",
      },
      // Emit CSS variables for both themes instead of baking in one.
      // Our `html.dark` / `html.light` CSS then picks the active theme.
      defaultColor: false,
      wrap: true,
    },
  },
});
