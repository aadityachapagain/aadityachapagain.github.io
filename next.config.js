// next.config.js
const staticRemotePath = "aadiimages.imgix.net"

let assetPrefix = ''
let basePath = ''

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: staticRemotePath,
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
}