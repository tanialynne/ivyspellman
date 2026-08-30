import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.figma.com',
        pathname: '/api/**',
      },
    ],
  },

  experimental: {
    scrollRestoration: true,
  },

  // Security response headers. Low risk on a static brochure site with no
  // logins, but free — and the first thing any scanner reports as missing.
  // CSP is deliberately omitted: it needs report-only testing first against
  // Next's inline scripts and Google Fonts before it can be enforced.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },

  compress: true,
  trailingSlash: false,
  poweredByHeader: false,
};

export default nextConfig;
