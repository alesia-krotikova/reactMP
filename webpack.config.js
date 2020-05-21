const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
          { loader: "style-loader" },
          { loader: "css-modules-typescript-loader"},
          { loader: "css-loader", options: { modules: true } },
          { loader: "sass-loader" },
        ]
      },
    ]
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.scss' ],
  },

  devtool: isDevMod ? 'eval-source-map' : 'none',

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  optimization: !isDevMod && {
    minimizer: [new UglifyJsPlugin()],
  },
};
