import { glob } from "glob";
import { z, type SafeParseError, type SafeParseSuccess } from "zod";

export const PostMeta = z.object({
  published: z.boolean().optional(),
  title: z.string(),
  date: z.string(),
  author: z.string(),
  cover: z.string().url().optional(),
  summary: z.string().optional(),
});
export type PostMeta = z.infer<typeof PostMeta>;

export const PostMetaExtra = PostMeta.extend({
  slug: z.string().describe("The filename without the .mdx"),
  file: z.string().describe("The path to the file"),
});
export type PostMetaExtra = z.infer<typeof PostMetaExtra>;

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

  const metas = files
    .filter(
      (v): v is PromiseFulfilledResult<[string, { metadata?: unknown }]> =>
        v.status === "fulfilled",
    )
    .map((v): [string, SafeParseSuccess<unknown> | SafeParseError<unknown>] => [
      v.value[0],
      PostMeta.safeParse(v.value[1].metadata),
    ])
    .filter((m): m is [string, SafeParseSuccess<PostMeta>] => m[1].success)
    .map((m) => ({
      file: m[0],
      ...m[1].data,
    }));

  const extra = metas.map(
    (m) =>
      ({
        slug: getSlug(m.file),
        ...m,
      }) as PostMetaExtra,
  );

  return extra;
}
