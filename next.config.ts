import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/careers",
        destination: "https://careers.bhavishyatech.com",
        permanent: false,
      },
      {
        source: "/careers/:path*",
        destination: "https://careers.bhavishyatech.com/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
