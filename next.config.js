// next.config.js
const staticRemotePath = "aadiimages.imgix.net"

let assetPrefix = ''
let basePath = ''

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: 'imgix',
    path: 'https://aadiimages.imgix.net/',
  },
}