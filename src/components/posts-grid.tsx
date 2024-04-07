import { type PostMeta } from "@/lib/posts";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

interface PostsGrid {
  posts: PostMeta[];
  max?: number;
}

export default function PostsGrid({ posts, max }: Readonly<PostsGrid>) {
  const displayPosts = max !== undefined ? posts.slice(0, max) : posts;
  const totalRows = Math.ceil(displayPosts.length / 2);
  return (
    <section className="flex flex-col gap-y-6">
      <h1 className="text-2xl font-bold text-soot-300">Posts</h1>

      <div
        className="flex gap-6 lg:grid lg:grid-cols-2"
        style={{
          gridTemplateRows: `repeat(${totalRows.toString()}, 1fr)`,
        }}
      >
        {displayPosts.map((p) => (
          <Link href={`/posts/${p.slug}`} key={p.title}>
            <article className="max-w-96">
              <h2 className="mb-2 text-lg font-medium">{p.title}</h2>
              {p.summary ? <p className="text-soot-500">{p.summary}</p> : null}
            </article>
          </Link>
        ))}
      </div>
      {posts.length > displayPosts.length && (
        <footer className="">
          <Link
            href="/posts"
            className="group -ml-2 inline-flex items-center gap-x-0.5 rounded px-2 text-soot-600 hover:bg-soot-100 hover:text-soot-900"
          >
            All posts{" "}
            <BiChevronRight className="size-5 transition group-hover:translate-x-1" />
          </Link>
        </footer>
      )}
    </section>
  );
}
