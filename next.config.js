/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true, // this one is allowed
  },
};

module.exports = nextConfig;
