const nextConfig = {
  // Only use assetPrefix when explicitly deploying to production subdirectory
  assetPrefix: process.env.USE_ASSET_PREFIX === 'true' ? process.env.NEXT_PUBLIC_SITE_URL_PROD : undefined,

  // Enforce trailing slashes in URLs
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
