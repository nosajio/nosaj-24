"use client";

import { BiChevronLeft, BiErrorCircle } from "react-icons/bi";

interface PostErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function PostError({ error }: Readonly<PostErrorProps>) {
  const handleBack = () => {
    window.history.back();
  };
  const backButton = (
    <button
      className="group -ml-2 mb-8 inline-flex items-center gap-x-0.5 self-start rounded px-2 text-soot-600 hover:bg-soot-100 hover:text-soot-900"
      type="button"
      onClick={handleBack}
    >
      <BiChevronLeft className="size-5 transition group-hover:-translate-x-1" />{" "}
      Back
    </button>
  );

  return (
    <div className="container">
      {backButton}
      <div className="flex gap-4">
        <BiErrorCircle className="size-9 text-soot-500 [grid-area:icon]" />
        <div className="flex flex-col gap-y-3">
          <h1 className="flex items-center text-lg font-medium">
            Error loading post
          </h1>
          <div className="font-mono text-sm text-soot-500">{error.message}</div>
        </div>
      </div>
    </div>
  );
}
