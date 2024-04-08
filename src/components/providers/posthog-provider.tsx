"use client";

import { posthog } from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { type ReactNode } from "react";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST;

if (typeof window !== "undefined" && POSTHOG_KEY && POSTHOG_HOST) {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
  });
}
export function CSPostHogProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
