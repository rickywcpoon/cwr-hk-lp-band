/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Conditional based on environment - only ignore during development
    ignoreDuringBuilds: process.env.NODE_ENV === 'development',
  },
  typescript: {
    // Conditional based on environment - only ignore during development  
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },
  images: {
    unoptimized: false, // CRITICAL: Enable optimization for performance
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
}

export default nextConfig
