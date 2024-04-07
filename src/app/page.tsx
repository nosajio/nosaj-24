import Posts from "@/components/posts";
import { listPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await listPosts();

  return (
    <main>
      <div className="container">
        <Posts posts={posts} max={3} />
      </div>
    </main>
  );
}
