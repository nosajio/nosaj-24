import { listRecommendedPosts, loadPost } from "@/lib/posts";
import { format } from "date-fns/format";

interface PostPage {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPage) {
  const { Body, metadata } = await loadPost(params.slug);
  const recommended = await listRecommendedPosts(metadata);

  return (
    <article className="container-prose">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold">{metadata.title}</h1>
        <div className="mt-4 text-sm text-soot-500">
          {format(metadata.date, "MMMM d, yyyy")}
        </div>
      </header>
      <div className="prose">
        <Body />
      </div>
    </article>
  );
}
