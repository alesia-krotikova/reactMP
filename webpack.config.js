const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      { test: /\.scss$/,
        use: [
          (isDevMod ? "style-loader" : MiniCssExtractPlugin.loader),
          { loader: "css-modules-typescript-loader"},
          { loader: "css-loader", options: { modules: true } },
          { loader: "sass-loader" },
        ],
      },
    ]
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.scss' ],
  },

  devtool: isDevMod ? 'eval-source-map' : 'none',

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    (!isDevMod && new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[contenthash].css',
      })
    ),
  ],

  optimization: !isDevMod && {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
