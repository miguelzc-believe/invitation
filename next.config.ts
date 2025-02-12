import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false, // Mejor rendimiento
  optimizeFonts: true,
  compress: true,
};

export default nextConfig;
