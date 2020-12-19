const path = require("path");
const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  entry: "./src/index.ts",
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  watchOptions: {
    ignored: 'node_modules/**'
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
}