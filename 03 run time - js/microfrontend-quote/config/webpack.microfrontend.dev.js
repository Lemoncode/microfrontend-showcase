const merge = require("webpack-merge");
const configCommon = require("./common");
const configMicrofrontend = require("./microfrontend");

module.exports = (env = {}) =>
  // Indicar al url-loader que siempre embeba los assets
  merge(configCommon({ ...env, assetEmbedLimit: true }), configMicrofrontend(env), {
    mode: "development",
    devtool: "eval-source-map",
    optimization: {
      minimize: false, // Desactivar minificacion
    },
  });
