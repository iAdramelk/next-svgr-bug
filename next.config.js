module.exports = {
  reactStrictMode: true,
  images: {
    path: "/_next/image/",
    disableStaticImages: true,
    domains: ["i.ytimg.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          issuer: /\.[mjt]sx?$/,
          resourceQuery: /react/,
          use: "@svgr/webpack",
        },
        {
          type: "asset/resource",
        },
      ],
    });

    return config;
  }
}
