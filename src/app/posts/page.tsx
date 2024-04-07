import PostsGrid from "@/components/posts-grid";
import { listPosts } from "@/lib/posts";

export default async function PostsPage() {
  const posts = await listPosts();

  return (
    <div className="container">
      <PostsGrid posts={posts} />
    </div>
  );
}
