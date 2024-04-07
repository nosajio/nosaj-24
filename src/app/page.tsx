import PostsGrid from "@/components/posts-grid";
import { listPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await listPosts();

  return (
    <main>
      <div className="container">
        <PostsGrid posts={posts} max={3} />
      </div>
    </main>
  );
}
