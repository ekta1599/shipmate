/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  experimental: {
    newNextLinkBehavior: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  swcMinify: true,
};

module.exports = nextConfig;