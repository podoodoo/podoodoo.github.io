/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "timyang.vercel.app"],
  },
  experimental: { images: { allowFutureImage: true } },
  swcMinify: true,
}
