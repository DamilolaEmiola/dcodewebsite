/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
    trailingSlash: true,

    images: {
      unoptimized: true, // Required for static export
      formats: ["image/avif", "image/webp"],
      minimumCacheTTL: 86400,
    },

    reactStrictMode: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
