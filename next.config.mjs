/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
    domains: [],
  },
  // This ensures that CSS Modules work properly with Next.js
  webpack(config) {
    return config;
  },
};

export default nextConfig;
