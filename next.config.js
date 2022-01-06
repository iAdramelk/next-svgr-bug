module.exports = {
  reactStrictMode: true,
  images: {
    path: "/_next/image/",
    disableStaticImages: true,
    domains: ["i.ytimg.com"],
  },
  webpack: (config) => {
    config.output.assetModuleFilename = "static/images/[hash][ext]";

    config.module.rules.push({
      test: /\.(png|jpg|webp|gif|mp4|webm|ogg|swf|ogv|woff2)$/i,
      type: "asset/resource",
    });

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
