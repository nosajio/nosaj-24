import { PostMeta } from "@/lib/posts";
import { type FC } from "react";
import { z } from "zod";

interface PostPage {
  params: {
    slug: string;
  };
}

const MDXPostImport = z.object({
  metadata: PostMeta,
  default: z.custom<FC>(),
});

export default async function PostPage({ params }: PostPage) {
  const post = MDXPostImport.parse(await import(`@/posts/${params.slug}.mdx`));
  const Body = post.default;

  const { metadata } = post;
  return (
    <article className="container">
      <div className="text-sm mb-4">{metadata.date}</div>
      <h1 className="text-4xl font-bold">{metadata.title}</h1>
      <div className="prose mt-9">
        <Body />
      </div>
    </article>
  );
}
