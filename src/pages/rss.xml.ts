import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { contentSlug } from "@/lib/contentSlug";

export async function GET(context: { site: URL }) {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return rss({
    title: "Portfolio Blog",
    description: "Engineering updates and project notes.",
    site: context.site.toString(),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.publishedAt,
      link: `/blog/${contentSlug(post.id)}/`
    }))
  });
}
