/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    /**
     * lucide-react and motion both ship thousands of modules. Without this,
     * dev compiles (and to a lesser extent prod bundles) pull in far more of
     * them than the handful of icons actually imported.
     */
    optimizePackageImports: ["lucide-react", "motion"],
  },

  // Long-lived caching for the hero video and poster, which never change
  // per-deploy under these filenames.
  async headers() {
    return [
      {
        source: "/:file(hero.mp4|hero-poster.jpg)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
