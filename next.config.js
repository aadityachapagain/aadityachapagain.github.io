// next.config.js

let assetPrefix = "";
let basePath = "";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: "custom",
    loaderFile: "./lib/imgixLoader.ts"
  },
  reactStrictMode: true
};

module.exports = nextConfig;