import { type ReactNode } from "react";

export default function SymbolTile({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="12" className="fill-transparent" />
      <g className="origin-center animate-in zoom-in dark:text-soot-100">
        {children}
      </g>
    </svg>
  );
}
