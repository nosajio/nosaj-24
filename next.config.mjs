import initMDX from "@next/mdx";

const withMDX = initMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);
