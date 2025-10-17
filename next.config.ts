import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        // Redirect non-www to www for SEO consolidation
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "assexmarkets.com",
          },
        ],
        destination: "https://www.assexmarkets.com/:path*",
        permanent: true, // 301 redirect - tells search engines this is permanent
      },
    ];
  },
};

export default nextConfig;
