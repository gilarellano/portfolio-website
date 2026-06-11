/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { dev }) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    // iCloud Drive evicts webpack's on-disk cache mid-write (its
    // "*.pack.gz_ -> *.pack.gz" rename fails with ENOENT). Keep the cache in
    // memory during dev so it never writes those files. (.next is on iCloud.)
    if (dev) {
      config.cache = { type: 'memory' }
    }

    return config
  },
}

export default nextConfig
