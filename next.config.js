// next.config.js

const isGithubActions = process.env.GITHUB_ACTIONS || false
const staticRemotePath = "aadiimages.imgix.net"

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
    const repo = process.env.GITHUB_REPOSITORY.split('/')[1]
  
    assetPrefix = `/${repo}/`
    basePath = `/${repo}`
  }

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: 'imgix',
    path: 'https://aadiimages.imgix.net/',
  },
}