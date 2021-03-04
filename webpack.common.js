require("dotenv").config({});

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlReplaceWebpackPlugin = require("html-replace-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["./src/index.ts"],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.ts$/i,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      { test: /\.json$/, 
        loader: 'json-loader' },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: `${__dirname}/public`,
    publicPath: "/",
    filename: "index.js",
    library: "",
    libraryTarget: "window",
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: false,
    }),
    new HtmlReplaceWebpackPlugin([
      {
        pattern: "YOUR_API_KEY",
        replacement: process.env.GOOGLE_MAPS_API_KEY,
      },
    ]),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
};
