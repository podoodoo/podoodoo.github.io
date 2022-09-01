/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  experimental: { images: { allowFutureImage: true } },
}
