import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS && !process.env.PLAYWRIGHT_TEST;
let repo = 'talk_hub';

// Get the repo name if we are inside GitHub Actions
if (process.env.GITHUB_REPOSITORY) {
  repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
}

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  transpilePackages: ["@gdg/ui-theme"],
  basePath: isGithubActions ? `/${repo}` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? `/${repo}` : '',
  },
};

export default nextConfig;
