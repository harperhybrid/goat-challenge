/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // This will completely ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // This will completely ignore ESLint errors during build
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
