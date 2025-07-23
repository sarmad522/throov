import type { NextConfig } from "next";
// next.config.ts

const nextConfig = {
  experimental: {
    turbo: false, // ✅ disable Turbopack
  },
};

export default nextConfig;

