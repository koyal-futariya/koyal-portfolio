module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't include node modules in client-side bundle
      config.resolve.fallback = {
        ...config.resolve.fallback,
        dns: false,
        fs: false,
        net: false,
        tls: false
      };
    }
    return config;
  }
}
