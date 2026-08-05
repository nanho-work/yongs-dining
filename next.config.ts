const isStaticExport = process.env.STATIC_EXPORT === '1';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isStaticExport ? 'export' : undefined,
  trailingSlash: true,
  assetPrefix: isStaticExport ? '/' : undefined,
  images: {
    unoptimized: isStaticExport,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 3840],
    qualities: [70, 75, 80],
  },
};

export default nextConfig;
