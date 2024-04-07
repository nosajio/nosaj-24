import { glob } from "glob";
import { FC } from "react";
import { z, type SafeParseError, type SafeParseSuccess } from "zod";

export const PostHeader = z.object({
  published: z.boolean().optional(),
  title: z.string(),
  date: z.string(),
  author: z.string(),
  cover: z.string().url().optional(),
  summary: z.string().optional(),
});
export type PostHeader = z.infer<typeof PostHeader>;

export const PostMeta = PostHeader.extend({
  slug: z.string().describe("The filename without the .mdx"),
  file: z.string().describe("The path to the file"),
});
export type PostMeta = z.infer<typeof PostMeta>;

export const POSTS_PATH = "src/posts";

const getSlug = (path: string) => /(?<slug>[^/]+)\.mdx$/.exec(path)?.[1] ?? "";

export async function listPosts() {
  const paths = await glob(`${POSTS_PATH}/*.mdx`);
  const files = await Promise.allSettled(
    paths.map(
      async (f): Promise<[string, unknown]> => [
        f,
        await import(`@/posts/${f.replace(`${POSTS_PATH}/`, "")}`),
      ],
    ),
  );

  const headers = files
    .filter(
      (v): v is PromiseFulfilledResult<[string, { metadata?: unknown }]> =>
        v.status === "fulfilled",
    )
    .map((v): [string, SafeParseSuccess<unknown> | SafeParseError<unknown>] => [
      v.value[0],
      PostHeader.safeParse(v.value[1].metadata),
    ])
    .filter((m): m is [string, SafeParseSuccess<PostHeader>] => m[1].success)
    .map((m) => ({
      file: m[0],
      ...m[1].data,
    }));

  const metas = headers
    .map(
      (m) =>
        ({
          slug: getSlug(m.file),
          ...m,
        }) as PostMeta,
    )
    // Sort by date decending
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return metas;
}

export async function listRecommendedPosts(forPost: PostMeta, max = 3) {
  const posts = await listPosts();
  return posts.filter((p) => p.slug !== forPost.slug).slice(0, max);
}

const MDXPostImport = z.object({
  metadata: PostHeader,
  default: z.custom<FC>(),
});

export async function loadPost(slug: string) {
  try {
    const file = `@/posts/${slug}.mdx`;
    const post = await import(`@/posts/${slug}.mdx`);
    const { metadata: header, default: Body } = MDXPostImport.parse(post);
    const metadata: PostMeta = {
      ...header,
      file,
      slug,
    };
    return {
      metadata,
      Body,
    };
  } catch (err) {
    console.error(err);
    throw new Error("Post loader error");
  }
}
