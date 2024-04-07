import Posts from "@/components/posts";
import { listPublishedPosts } from "@/lib/posts";

export default async function PostsPage() {
  const posts = await listPublishedPosts();

  return (
    <div className="container">
      <Posts posts={posts} />
    </div>
  );
}
