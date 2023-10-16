/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // so that styled components works
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
};

module.exports = nextConfig;
