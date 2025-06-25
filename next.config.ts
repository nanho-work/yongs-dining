const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/yongs-dining" : "",
  assetPrefix: isProd ? "/yongs-dining" : "",
};

export default nextConfig;