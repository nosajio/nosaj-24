import Posts from "@/components/posts";
import Projects from "@/components/projects";
import { listPosts } from "@/lib/posts";
import projects from "@/projects/project-index";

export default async function Home() {
  const posts = await listPosts();

  return (
    <main>
      <div className="container">
        <Posts posts={posts} max={3} />
        <Projects projects={projects} className="mt-12" />
      </div>
    </main>
  );
}
