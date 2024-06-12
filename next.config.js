/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: "images.pexels.com"
      }
    ]
  },
  output: 'export',
  basePath: '/giftcard',
}

module.exports = nextConfig
