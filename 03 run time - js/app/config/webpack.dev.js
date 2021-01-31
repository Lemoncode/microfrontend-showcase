const webpack = require("webpack");
const merge = require("webpack-merge");
const helpers = require("./helpers");
const configCommon = require("./webpack.common");

module.exports = (env = {}) =>
  merge(configCommon(env), {
    mode: "development",
    devtool: "eval-source-map",
    output: {
      filename: "[name].[hash].js",
    },
    devServer: {
      contentBase: [
        helpers.resolveFromRootPath("../microfrontend-clock/build/microfrontend/"),
        helpers.resolveFromRootPath("../microfrontend-quote/build/microfrontend/"),
      ],
      contentBasePublicPath: "/microfrontends",
      inline: true,
      host: "localhost",
      port: 3000,
      stats: "minimal",
      historyApiFallback: true,
      hot: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  });
