const CracoAlias = require("craco-alias");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "jsconfig",
        jsConfigPath: "jsconfig.paths.json",
      },
    },
  ],
  webpack: {
    // 번들 확인
    // plugins: [new BundleAnalyzerPlugin()],
    optimization: {
      splitChunks: {
        cacheGroups: {
          // vendor 코드 (dependencies)들을 다른 chunk에 분리하기
          vendors: {
            test: /[\\/]node_modules[\\/]/i,
            chunks: "all",
          },
        },
      },
      // 런타임 chunk
      runtimeChunk: { name: "runtime" },
    },
  },
};
