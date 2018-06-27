const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/js/main.js"
  },
  output: {
    path: path.resolve(__dirname, "dist/scripts"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env", "stage-2"]
          }
        }
      }
    ]
  },
  devtool: "inline-source-map"
};
