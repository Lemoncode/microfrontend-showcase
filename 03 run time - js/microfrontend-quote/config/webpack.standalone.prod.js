const merge = require("webpack-merge");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const helpers = require("./helpers");
const configCommon = require("./common");
const configStandalone = require("./standalone");

module.exports = (env = {}) =>
  merge(configCommon(env), configStandalone(env), {
    mode: "production",
    devtool: "none",
    output: {
      filename: `[name]-${helpers.versionName}.js`,
    },
    optimization: {
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vendorGroup: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            enforce: true,
          },
        },
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "index.html",
        hash: true,
        chunksSortMode: "manual",
        chunks: ["manifest", "vendor", helpers.bundleName],
      }),
    ],
  });
