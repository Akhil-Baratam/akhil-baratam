import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Placeholder photography. Swap these for real assets in /public before launch.
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;
