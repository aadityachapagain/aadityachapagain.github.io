// next.config.js

let assetPrefix = "";
let basePath = "";

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: "custom",
    loaderFile: "./lib/imgixLoader.ts"
  },
  reactStrictMode: true,
  swcMinify: true
};
