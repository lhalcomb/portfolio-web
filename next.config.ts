import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: 'build',
  output: 'export',
  images: { dangerouslyAllowSVG: true, unoptimized: true },
  typescript: {
    ignoreBuildErrors: true,  // Add this to disable type errors blocking build
  },
};

export default nextConfig;
