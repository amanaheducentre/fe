import type { NextConfig } from "next";
import pj from "./package.json";

const hostingEnv = process.env.HOSTING_ENV;
let basePath = "";
let assetPrefix = "";

if (hostingEnv == "GH_PAGES") {
  basePath = `/${pj.name}`;
  assetPrefix = `/${pj.name}`;
}

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: assetPrefix,
};

export default nextConfig;
