import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactStrictMode: true,
  basePath: isDev ? "" : "/fe",
  assetPrefix: isDev ? "" : "/fe",
  images: {
    unoptimized: isDev ? false : true,
  },
};

export default nextConfig;
