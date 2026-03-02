/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/SoulCherish",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
