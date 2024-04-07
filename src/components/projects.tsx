import { cn } from "@/lib/utils";
import { type Project } from "@/projects/project-index";

interface ProjectsProps {
  projects: Project[];
  className?: string;
}

export default function Projects({
  projects,
  className,
}: Readonly<ProjectsProps>) {
  return (
    <section className={cn("flex flex-col gap-y-6", className)}>
      <h1 className="text-2xl font-bold text-soot-300">Work</h1>
      <div className="flex flex-col gap-8">
        {projects.map((p) => (
          <article className="flex gap-4" key={p.title}>
            {p.symbol}
            <div>
              <h2 className=" font-medium">{p.title}</h2>
              {p.summary ? <p className="text-soot-800">{p.summary}</p> : null}
              {p.note ? <p className="text-soot-500">{p.note}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
