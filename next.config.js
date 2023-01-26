// next.config.js

const isGithubActions = process.env.GITHUB_ACTIONS || false
const staticRemotePath = "aadiimages.imgix.net"

let assetPrefix = '/'
let basePath = ''

if (isGithubActions) {

  assetPrefix = `${staticRemotePath}/`
  basePath = ``
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: 'imgix',
    path: 'aadiimages.imgix.net',
  },
}