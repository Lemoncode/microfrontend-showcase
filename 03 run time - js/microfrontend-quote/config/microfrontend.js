const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CopyWebpackPlugin = require("copy-webpack-plugin");
const helpers = require("./helpers");

module.exports = (env = {}) => ({
  entry: {
    [helpers.bundleName]: ["./microfrontend.entrypoint.tsx"],
  },
  output: {
    path: helpers.buildMicrofrontendPath,
    filename: `[name].js`,
    // Esta es la forma mas sencilla de exportar la librería al hacer microfrontends
    // aunque no la más compatible de cara a consumirla para otros usos.
    libraryTarget: "var",
    library: helpers.bundleNamePascalCase,
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: `${helpers.rootPath}/package.json`,
        to: `${helpers.buildMicrofrontendPath}/package.json`,
      },
      {
        from: `${helpers.srcPath}/microfrontend.d.ts`,
        to: `${helpers.buildMicrofrontendPath}/${helpers.bundleName}.d.ts`,
      },
    ]),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
      reportFilename: "report/report.html",
    }),
  ],
});
