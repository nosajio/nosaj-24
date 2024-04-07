"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const getBreadcrumbUrl = (arr: string[], index: number) => {
  return `/${arr.slice(0, index + 1).join("/")}`;
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  if (paths.length === 0) {
    return null;
  }

  return paths.map((p, i, arr) => (
    <div key={p} className="hidden font-normal md:flex">
      <span className="duration-400 mx-1 text-soot-300 animate-in fade-in">
        /
      </span>
      <Link
        className="duration-400 rounded px-2 text-soot-600 animate-in fade-in slide-in-from-left-4 fill-mode-both hover:bg-soot-100 hover:text-soot-900"
        style={{
          animationDelay: `${(i * 100).toString()}ms`,
        }}
        href={getBreadcrumbUrl(arr, i)}
      >
        {p}
      </Link>
    </div>
  ));
}
