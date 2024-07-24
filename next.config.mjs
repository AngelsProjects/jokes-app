import bundleAnalyzer from '@next/bundle-analyzer'

/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== 'production'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
  productionBrowserSourceMaps: false,
  eslint: {
    ignoreDuringBuilds: true
  },
  reactStrictMode: true,
  trailingSlash: true
}

export default withBundleAnalyzer(nextConfig)
