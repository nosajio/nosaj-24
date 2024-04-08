"use client";

import { type Project } from "@/projects/project-index";
import { useState } from "react";
import { BsChevronExpand } from "react-icons/bs";

interface ProjectsProps {
  projects: Project[];
  max?: number;
}

export default function Projects({ projects, max }: Readonly<ProjectsProps>) {
  const [showAll, setShowAll] = useState(false);
  const displayProjects =
    !showAll && max !== undefined ? projects.slice(0, max) : projects;

  return (
    <div className="flex flex-col gap-8">
      {displayProjects.map((p) => (
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
      {displayProjects.length < projects.length && (
        <footer>
          <button
            type="button"
            className="-ml-2 inline-flex items-center gap-x-1 rounded px-2 text-soot-600 hover:bg-soot-100 hover:text-soot-900 dark:text-soot-300 hover:dark:bg-soot-900 hover:dark:text-soot-50"
            onClick={() => {
              setShowAll(true);
            }}
          >
            <BsChevronExpand className="size-5 transition" />
            Show all
          </button>
        </footer>
      )}
    </div>
  );
}
