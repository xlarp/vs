const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
    optimizeCss: true,
    turbo: {
      resolveExtensions: [
        ".mdx",
        ".tsx",
        ".ts",
        ".jsx",
        ".js",
        ".mjs",
        ".json",
      ],
    },
  },
  compiler: {
    styledComponents: {
      ssr: true,
    },
    removeConsole: {
      exclude: ["error", "warn"],
    },
  },
};

module.exports = nextConfig;
