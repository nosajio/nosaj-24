import { listRecommendedPosts, loadPost } from "@/lib/posts";
import { format } from "date-fns/format";
import Link from "next/link";

interface PostPage {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPage) {
  const { Body, metadata } = await loadPost(params.slug);
  const recommended = await listRecommendedPosts(metadata);

  return (
    <article className="container-prose flex flex-col gap-y-12">
      <header>
        <h1 className="text-3xl font-semibold">{metadata.title}</h1>
        <div className="mt-4 text-sm text-soot-500">
          {format(metadata.date, "MMMM d, yyyy")}
        </div>
      </header>
      <section className="prose">
        <Body />
      </section>
      <footer>
        <h1 className="mb-4 text-lg font-semibold">More stuff</h1>
        <ul className="flex flex-col gap-2">
          {recommended.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/posts/${p.slug}`}
                className="-ml-2 rounded px-2 py-1 text-soot-600 hover:bg-soot-100 hover:text-soot-900"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
}
