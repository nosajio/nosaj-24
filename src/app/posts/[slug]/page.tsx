import { PostHeader } from "@/lib/posts";
import { type FC } from "react";
import { z } from "zod";

interface PostPage {
  params: {
    slug: string;
  };
}

const MDXPostImport = z.object({
  metadata: PostHeader,
  default: z.custom<FC>(),
});

export default async function PostPage({ params }: PostPage) {
  const post = MDXPostImport.parse(await import(`@/posts/${params.slug}.mdx`));
  const Body = post.default;

  const { metadata } = post;
  return (
    <article className="container-prose">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold">{metadata.title}</h1>
      </header>
      <div className="prose">
        <div className="mt-4 text-sm text-soot-500">{metadata.date}</div>
        <Body />
      </div>
    </article>
  );
}
