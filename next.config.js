/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export"
};

const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer(nextConfig);
