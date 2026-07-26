import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Prevent webpack from trying to bundle these server-only packages.
  // gray-matter pulls in esprima which is not compatible with the webpack bundler.
  serverExternalPackages: ["gray-matter", "esprima"],
};

export default nextConfig;
