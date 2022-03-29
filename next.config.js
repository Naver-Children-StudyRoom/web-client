/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/main',
        permanent: false,
      },
    ]
  },
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
}

module.exports = nextConfig
