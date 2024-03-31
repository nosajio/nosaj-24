import { listPosts } from "@/lib/posts";
import Link from "next/link";

export default async function PostsPage() {
  const posts = await listPosts();

  return (
    <div className="container">
      {posts.map((p) => (
        <div className="flex flex-col gap-y-1" key={p.title}>
          <h1 className="text-lg font-medium">
            <Link href={`/posts/${p.slug}`}>{p.title}</Link>
          </h1>
          <p className="text-soot-500">
            <Link href={`/posts/${p.slug}`}>{p.summary}</Link>
          </p>
        </div>
      ))}
    </div>
  );
}
