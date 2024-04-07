import Posts from "@/components/posts";
import { listPosts } from "@/lib/posts";

export default async function PostsPage() {
  const posts = await listPosts();

  return (
    <div className="container">
      <Posts posts={posts} />
    </div>
  );
}
