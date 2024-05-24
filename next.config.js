/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'azureapis.blob.core.windows.net',
        port: '',
        pathname: '/share-account/**',
      },
      {
        protocol: 'https',
        hostname: 'azureapis.blob.core.windows.net',
        port: '',
        pathname: '/common/**',
      },
      {
        protocol: 'https',
        hostname: 'azureapis.blob.core.windows.net',
        port: '',
        pathname: '/public/**',
      },
    ],
  },
  includePaths: [path.join(__dirname, 'styles')],
};

module.exports = nextConfig;
