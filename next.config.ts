import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tts-ecommerce.s3.ap-southeast-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
