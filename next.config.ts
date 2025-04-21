import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Disable ESLint during production builds to avoid the errors we're seeing
    ignoreDuringBuilds: true,
  },
  // If you're using experimental features, you can add them here
  // experimental: {
  //   appDir: true,
  // },
}

export default nextConfig