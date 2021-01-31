const webpack = require("webpack");
const merge = require("webpack-merge");
const helpers = require("./helpers");
const configCommon = require("./common");
const configStandalone = require("./standalone");

module.exports = (env = {}) =>
  merge(configCommon(env), configStandalone(env), {
    mode: "development",
    devtool: "eval-source-map",
    output: {
      filename: "[name].[hash].js",
    },
    devServer: {
      inline: true,
      host: "localhost",
      port: 3002,
      stats: "minimal",
      historyApiFallback: true,
      hot: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  });
