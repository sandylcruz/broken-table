const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname),
    filename: "../backend/app/assets/javascripts/bundle.js",
  },
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
    extensions: [".js", "*"],
  },
};
