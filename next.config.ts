import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  sassOptions: {
    includePaths: [path.join(process.cwd(), "node_modules/bootstrap/scss"), path.join(process.cwd(), "src/styles")],
  },
};

export default nextConfig;
