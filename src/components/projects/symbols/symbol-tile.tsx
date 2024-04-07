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
      <rect
        width="64"
        height="64"
        rx="12"
        className="fill-white animate-in fade-in dark:fill-soot-900"
      />
      <g className="origin-center animate-in zoom-in">{children}</g>
    </svg>
  );
}
