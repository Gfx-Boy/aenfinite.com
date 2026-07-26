import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for deployment on any static host / Nginx
  // Remove this line if you want to use SSR with Node.js server
  // output: 'export',
  
  // Trailing slash to match original WordPress URL structure
  trailingSlash: true,
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aenfinite.com',
      },
    ],
    unoptimized: true, // Set to false if using Vercel
  },

  // Redirects from old & URLs to new clean URLs
  async redirects() {
    return [
      // Old city/cities pages -> new /locations/ structure (2026-07-25)
      {
        source: '/cities/los-angeles-ca/:path*',
        destination: '/locations/los-angeles/',
        permanent: true,
      },
      {
        source: '/cities/san-diego-ca/:path*',
        destination: '/locations/san-diego/',
        permanent: true,
      },
      {
        source: '/cities/:path*',
        destination: '/locations/',
        permanent: true,
      },
      {
        source: '/city/:path*',
        destination: '/locations/',
        permanent: true,
      },

      // Services with & in URL
      {
        source: '/services/ai-chatbots-&-virtual-assistants/',
        destination: '/services/ai-chatbots-and-virtual-assistants/',
        permanent: true,
      },
      {
        source: '/services/software-&-platform-development/',
        destination: '/services/software-and-platform-development/',
        permanent: true,
      },
      {
        source: '/services/workflow-&-business-automation/',
        destination: '/services/workflow-and-business-automation/',
        permanent: true,
      },
      // Work with & in URL
      {
        source: '/work/web-design-&-development/',
        destination: '/work/web-design-and-development/',
        permanent: true,
      },
      // City with & in URL
      {
        source: '/city/ai-&-technology-solutions/',
        destination: '/city/ai-and-technology-solutions/',
        permanent: true,
      },
      {
        source: '/city/design-&-creative-solutions/',
        destination: '/city/design-and-creative-solutions/',
        permanent: true,
      },
      {
        source: '/city/marketing-&-digtal-solutions/',
        destination: '/city/marketing-and-digital-solutions/',
        permanent: true,
      },
      // Cities - map old paths
      {
        source: '/Cities/los-angeles-ca/ai-chatbots-virtual-assistants-los-angeles-ca/',
        destination: '/cities/los-angeles-ca/ai-chatbots-virtual-assistants/',
        permanent: true,
      },
      {
        source: '/Cities/los-angeles-ca/graphic-design-branding-los-angeles-ca/',
        destination: '/cities/los-angeles-ca/graphic-design-branding/',
        permanent: true,
      },
      {
        source: '/Cities/los-angeles-ca/software-development-los-angeles-ca/',
        destination: '/cities/los-angeles-ca/software-development/',
        permanent: true,
      },
      {
        source: '/Cities/los-angeles-ca/web-design-marketing-agency-los-angeles-ca/',
        destination: '/cities/los-angeles-ca/web-design-marketing-agency/',
        permanent: true,
      },
      {
        source: '/Cities/los-angeles-ca/web-designing-and-digital-marketing-agency-los-angeles-ca/',
        destination: '/cities/los-angeles-ca/web-designing-and-digital-marketing-agency/',
        permanent: true,
      },
      {
        source: '/Cities/san-diego-ca/web-design-marketing-agency-san-diego-ca/',
        destination: '/cities/san-diego-ca/web-design-marketing-agency/',
        permanent: true,
      },
      // NOTE: case-fix redirects (e.g. /work/Olly/ -> /work/olly/) were removed.
      // Next.js matches redirect sources case-INsensitively, so each of those
      // rules also matched its own destination and caused an infinite 308 loop,
      // making the pages unreachable. Case normalization now lives in middleware.ts.
      // Services old URL fixes
      {
        source: '/services/website-design/',
        destination: '/services/web-design/',
        permanent: true,
      },
      // Services that never existed -> closest real page (old SEO/external links)
      {
        source: '/services/motion-graphics/',
        destination: '/services/graphic-design/',
        permanent: true,
      },
      {
        source: '/services/print-design/',
        destination: '/services/graphic-design/',
        permanent: true,
      },
      {
        source: '/services/3d-design/',
        destination: '/services/graphic-design/',
        permanent: true,
      },
      {
        source: '/services/photography/',
        destination: '/services/graphic-design/',
        permanent: true,
      },
      {
        source: '/services/video-production/',
        destination: '/services/graphic-design/',
        permanent: true,
      },
      {
        source: '/services/social-media-design/',
        destination: '/services/social-media-marketing/',
        permanent: true,
      },
      {
        source: '/services/custom-development/',
        destination: '/services/custom-web-development/',
        permanent: true,
      },
      // Renamed work item
      {
        source: '/work/afropop/',
        destination: '/work/afropopup/',
        permanent: true,
      },
      // Old top-level partner-with-us URLs
      {
        source: '/partner-with-us/:path*',
        destination: '/agency/partner-with-us/:path*',
        permanent: true,
      },
      // Blog posts that were never migrated -> blog index
      {
        source: '/blog/:slug+',
        destination: '/blog/',
        permanent: false,
      },
      // Legacy URLs still in Google's index (from old site versions)
      { source: '/about', destination: '/agency/', permanent: true },
      { source: '/portfolio', destination: '/featured-work/', permanent: true },
      { source: '/privacy', destination: '/privacy-policy/', permanent: true },
      { source: '/terms', destination: '/privacy-policy/', permanent: true },
      { source: '/sitemap', destination: '/sitemap.xml', permanent: true },
      { source: '/Aenfinite', destination: '/', permanent: true },
      { source: '/services/e-commerce', destination: '/services/e-commerce-websites/', permanent: true },
      { source: '/services/web-development', destination: '/services/custom-web-development/', permanent: true },
      { source: '/services/mobile-development', destination: '/services/app-development/', permanent: true },
      { source: '/services/seo', destination: '/services/search-engine-optimization/', permanent: true },
      { source: '/services/content-creation', destination: '/services/digital-marketing/', permanent: true },
      { source: '/work/global-design-solutions/', destination: '/work/global-design-solution/', permanent: true },
      { source: '/work/services/', destination: '/services/', permanent: true },
    ];
  },

  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/wp-content/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/wp-includes/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache JS files aggressively
        source: '/js/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Next.js static assets
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // WebP/optimized images
        source: '/:path*.webp',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
