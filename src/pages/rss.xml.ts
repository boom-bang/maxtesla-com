import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { SITE } from "@/consts";

export async function GET(context: APIContext) {
  const posts = (await getCollection("posts", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary ?? "",
      pubDate: post.data.date,
      link: `/posts/${post.id}`,
      categories: post.data.tags,
    })),
    customData: `<language>${SITE.locale.toLowerCase()}</language>`,
  });
}
