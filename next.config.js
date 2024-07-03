const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  swcMinify: true,
  experimental: {
    outputStandalone: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }

    return config;
  },
};

module.exports = nextConfig;
