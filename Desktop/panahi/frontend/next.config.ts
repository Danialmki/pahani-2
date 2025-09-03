import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/**",
      },
      // Your local IP for development
      {
        protocol: "http",
        hostname: "185.253.121.180",
        port: "4000",
        pathname: "/**",
      },
      // Allow all local IPs for development
      {
        protocol: "http",
        hostname: "172.20.10.6",
        port: "4000",
        pathname: "/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://185.253.121.180:4000/api',
  },
  output: 'standalone',
};

export default nextConfig;
