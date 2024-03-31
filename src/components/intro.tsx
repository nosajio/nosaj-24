"use client";

import { usePathname } from "next/navigation";

export default function Intro() {
  const path = usePathname();

  return path === "/" ? (
    <div className="font-mono text-sm text-soot-400">designer &amp; engineer</div>
  ) : null;
}
