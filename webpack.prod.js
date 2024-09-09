const { merge } = require("webpack-merge");
const path = require('path');
const common = require("./webpack.common.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

process.env["NODE_ENV"] = "production";

module.exports = merge([
  common,
  {
    mode: "production",
    devtool:false,
    output: {
      path: path.resolve(__dirname, 'build'), // Add this to specify the build folder
      filename: 'bundle.js',
    },
    optimization: {
      minimize: true,
      minimizer: [
        // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        // `...`,
        new CssMinimizerPlugin(),
      ],
    },
    performance: {
      hints: false
    }
  },
]);
