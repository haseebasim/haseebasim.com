/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['pages', 'components']
  },
  images: {
    domains: ['ripeseed-landing-page.s3.amazonaws.com']
  },
  reactStrictMode: true,
  swcMinify: true
};

module.exports = nextConfig;
