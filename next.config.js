// next.config.js
const staticRemotePath = "aadiimages.imgix.net"

let assetPrefix = ''
let basePath = ''

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: "custom",
    loaderFile: "./lib/imgixLoader.ts"

  },
  reactStrictMode: true,
  swcMinify: true,
}