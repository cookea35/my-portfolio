import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    description: z.string().optional(),
    tech: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    githubUrl: z.string().url(),
    demoUrl: z.string().url().optional(),
    coverImage: z.string().optional()
  })
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true)
  })
});

export const collections = { projects, blog };
