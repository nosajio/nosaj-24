import { listRecommendedPosts, loadPost } from "@/lib/posts";
import { format } from "date-fns/format";
import { type Metadata, type ResolvingMetadata } from "next";
import Link from "next/link";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: PostPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { metadata: postMeta } = await loadPost(params.slug);
  const parentMetadata = await parent;
  return {
    title: postMeta.title,
    description: postMeta.summary,
    authors: {
      name: postMeta.author,
      url: `https://nosaj.io/posts/${postMeta.slug}`,
    },
    openGraph: {
      images: [
        ...(postMeta.cover ? [postMeta.cover] : []),
        ...(parentMetadata.openGraph?.images ?? []),
      ],
    },
    twitter: {
      images: [
        ...(postMeta.cover ? [postMeta.cover] : []),
        ...(parentMetadata.twitter?.images ?? []),
      ],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { Body, metadata: postMeta } = await loadPost(params.slug);
  const recommended = await listRecommendedPosts(postMeta);
  console.log(recommended);

  return (
    <article className="container flex flex-col gap-y-12">
      <header>
        <h1 className="text-3xl font-bold">{postMeta.title}</h1>
        <div className="mt-4 text-sm text-soot-500">
          {format(postMeta.date, "MMMM d, yyyy")}
        </div>
      </header>
      <section className="prose-lg prose-soot prose-a:underline prose-a:decoration-soot-300 prose-a:underline-offset-2 hover:prose-a:italic prose-blockquote:border-l-2 prose-blockquote:border-l-soot-200 prose-ol:list-decimal prose-ul:list-disc prose-img:rounded-sm">
        <Body />
      </section>
      <footer className="pt-12 text-lg">
        {recommended.length > 0 && (
          <>
            <h1 className="mb-4 text-xl font-semibold">More stuff</h1>
            <ul className="flex flex-col gap-2">
              {recommended.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/posts/${p.slug}`}
                    className="-ml-2 rounded px-2 py-1 text-soot-600 hover:bg-soot-100 hover:text-soot-900 dark:text-soot-300 hover:dark:bg-soot-900 hover:dark:text-soot-50"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </footer>
    </article>
  );
}
