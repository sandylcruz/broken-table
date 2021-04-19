require("dotenv").config();

const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname),
    filename: "../backend/app/assets/javascripts/bundle.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      MAPS_API_KEY: `"${process.env.MAPS_API_KEY}"`,
    }),
  ],
  module: {
    rules: [
      {
        test: [/\.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
          },
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/env", "@babel/react"],
            },
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true,
            },
          },
        ],
      },
    ],
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", "*", ".", "node_modules"],
  },
};
