import initMDX from "@next/mdx";
import rehypePrettyCode from 'rehype-pretty-code';

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: 'vesper'
}

const withMDX = initMDX({
  options: {
    rehypePlugins: [[rehypePrettyCode, options]]
  }
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);
