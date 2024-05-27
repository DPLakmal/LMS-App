/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'th.bing.com',
      'upload.wikimedia.org',
      'foundr.com',
      'avatar.iran.liara.run',
      'lh3.googleusercontent.com',
      'firebasestorage.googleapis.com',
    ],
  },
  webpack: (config, { isServer }) => {
    // Add a rule to handle .node files
    config.module.rules.push({
      test: /\.node$/,
      use: 'file-loader',
    })
    return config
  },
}

export default nextConfig
