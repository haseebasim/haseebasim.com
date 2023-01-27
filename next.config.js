/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        dirs: ['pages', 'components']
    },

    reactStrictMode: true,
    swcMinify: true
};

module.exports = nextConfig;
