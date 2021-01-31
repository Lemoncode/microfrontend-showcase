const helpers = require("./helpers");

module.exports = (env = {}) => {
  const { assetEmbedLimit = 5000 } = env;

  return {
    context: helpers.srcPath, // src
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
      rules: [
        // Generic rule for source code.
        {
          test: /\.(jsx?|tsx?)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        // Generic rule for vendor css. NO CSS Modules.
        {
          test: /\.css$/,
          include: /node_modules/,
          use: [{ loader: "style-loader" }, { loader: "css-loader" }],
        },
        // Generic rules for assets.
        {
          test: /\.(woff)(\?v=\d+\.\d+\.\d+)?$/,
          loader: `url-loader?limit=${assetEmbedLimit}&outputPath=assets&mimetype=font/woff`,
        },
        {
          test: /\.(woff2)(\?v=\d+\.\d+\.\d+)?$/,
          loader: `url-loader?limit=${assetEmbedLimit}&outputPath=assets&mimetype=font/woff2`,
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: `url-loader?limit=${assetEmbedLimit}&outputPath=assets&mimetype=font/ttf`,
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: `url-loader?limit=${assetEmbedLimit}&outputPath=assets&mimetype=font/otf`,
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: `url-loader?limit=${assetEmbedLimit}&outputPath=assets&mimetype=image/svg+xml`,
        },
        {
          test: /\.(png|jpe?g|ico|gif)?$/,
          loader: `url-loader?limit=${assetEmbedLimit}&outputPath=assets`,
        },
      ],
    },
  };
};
