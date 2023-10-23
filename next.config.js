/** @type {import('next').NextConfig} */

const dev = {
  REACT_APP_HOST: "http://localhost:3001",
  URL: "http://localhost:3000",
};
const nextConfig = {
  reactStrictMode: true,
  env: dev,
};

module.exports = nextConfig;
