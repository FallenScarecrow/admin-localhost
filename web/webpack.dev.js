const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");

const config = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    historyApiFallback: true,
    compress: true,
    open: true,
    hot: false,
    liveReload: true,
  },
};

module.exports = merge(common, config);
