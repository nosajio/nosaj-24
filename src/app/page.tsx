import Posts from "@/components/posts";
import Projects from "@/components/projects";
import { listPublishedPosts } from "@/lib/posts";
import projects from "@/projects/project-index";

export default async function Home() {
  const posts = await listPublishedPosts();

  return (
    <main>
      <div className="container">
        <section className="flex flex-col gap-y-6">
          <h1 className="text-2xl font-bold text-soot-300 dark:text-soot-700">
            Posts
          </h1>
          <Posts posts={posts} max={3} />
        </section>
        <section className="mt-12 flex flex-col gap-y-6">
          <h1 className="text-2xl font-bold text-soot-300 dark:text-soot-700">
            Work
          </h1>
          <Projects projects={projects} />
        </section>
      </div>
    </main>
  );
}
