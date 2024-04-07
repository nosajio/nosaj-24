import { type PostMeta } from "@/lib/posts";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

interface PostsProps {
  posts: PostMeta[];
  max?: number;
}

export default function Posts({ posts, max }: Readonly<PostsProps>) {
  const displayPosts = max !== undefined ? posts.slice(0, max) : posts;
  return (
    <>
      <div className="flex flex-col gap-6">
        {displayPosts.map((p) => (
          <Link href={`/posts/${p.slug}`} key={p.title} className="group">
            <article>
              <h2 className="text-lg font-medium transition dark:group-hover:text-white">
                {p.title}
              </h2>
              {p.summary ? (
                <p className="text-soot-500 transition group-hover:text-soot-800 dark:group-hover:text-soot-200">
                  {p.summary}
                </p>
              ) : null}
            </article>
          </Link>
        ))}
      </div>
      {posts.length > displayPosts.length && (
        <footer className="">
          <Link
            href="/posts"
            className="group -ml-2 inline-flex items-center gap-x-0.5 rounded px-2 text-soot-600 hover:bg-soot-100 hover:text-soot-900 dark:text-soot-300 hover:dark:bg-soot-900 hover:dark:text-soot-50"
          >
            All posts{" "}
            <BiChevronRight className="size-5 transition group-hover:translate-x-1" />
          </Link>
        </footer>
      )}
    </>
  );
}
