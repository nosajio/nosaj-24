import { listPosts } from "@/lib/posts";
import Link from "next/link";

export default async function Home() {
  const posts = await listPosts();

  return (
    <main>
      {/* Posts */}
      <section className="container flex flex-col gap-y-6">
        <h1 className="text-xl font-bold">Posts</h1>

        <div className="">
          {posts.map((p) => (
            <Link href={`/posts/${p.slug}`} key={p.title}>
              <article className="">
                <h2 className="text-lg font-medium">{p.title}</h2>
                {p.summary ? <p className="text-soot-500">{p.summary}</p> : null}
              </article>
            </Link>
          ))}
        </div>

        <footer className="">
          <Link href="/posts">All posts</Link>
        </footer>
      </section>
    </main>
  );
}
