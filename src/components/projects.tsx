import { type ReactNode } from "react";

interface Project {
  title: string;
  summary: string;
  symbol: ReactNode;
  note: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: Readonly<ProjectsProps>) {
  const totalRows = Math.ceil(projects.length / 2);
  return (
    <section className="flex flex-col gap-y-6">
      <h1 className="text-2xl font-bold text-soot-300">Work</h1>

      <div
        className="flex gap-6 lg:grid lg:grid-cols-2"
        style={{
          gridTemplateRows: `repeat(${totalRows.toString()}, 1fr)`,
        }}
      >
        {projects.map((p) => (
          <article className="max-w-96" key={p.title}>
            <h2 className="mb-2 text-lg font-medium">{p.title}</h2>
            {p.summary ? <p className="text-soot-800">{p.summary}</p> : null}
            {p.note ? <p className="text-soot-500">{p.note}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
