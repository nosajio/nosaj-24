"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const buildLink = (arr: string[], index: number) => {
  return `/${arr.slice(0, index + 1).join("/")}`;
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  if (paths.length === 0) {
    return null;
  }

  return (
    <>
      {paths.map((p, i, arr) => (
        <div key={p} className="flex gap-x-2 font-normal">
          <span className="text-soot-300">/</span>
          <Link href={buildLink(arr, i)}>{p}</Link>
        </div>
      ))}
    </>
  );
}
