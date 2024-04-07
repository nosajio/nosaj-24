import { type Project } from "@/projects/project-index";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: Readonly<ProjectsProps>) {
  return (
    <div className="flex flex-col gap-8">
      {projects.map((p) => (
        <article className="flex gap-4" key={p.title}>
          {p.symbol}
          <div>
            <h2 className="font-medium">{p.title}</h2>
            {p.summary ? (
              <p className="text-soot-700 dark:text-soot-300">{p.summary}</p>
            ) : null}
            {p.note ? <p className="text-soot-500">{p.note}</p> : null}
          </div>
        </article>
      ))}
    </div>
  );
}
