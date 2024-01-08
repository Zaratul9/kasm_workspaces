/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: "Zaratul9's Custom Workspaces",
    description: "The custom store for Zaratul9's supported workspaces.",
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/Zaratul9/kasm_workspaces',
    contactUrl: 'https://github.com/Zaratul9/kasm_workspaces',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm_workspaces/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
