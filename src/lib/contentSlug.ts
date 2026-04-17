/** URL path segment from a content collection entry `id` (e.g. `post.md` → `post`). */
export function contentSlug(entryId: string): string {
  return entryId.replace(/\.mdx?$/, "");
}
