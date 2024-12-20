const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

// TODO: generate manifest and set web accessible resources
// TODO: generate entry points

module.exports = {
  mode: "development",
  entry: {
    "popup/popup": "./src/popup/popup.js",
    "content-scripts/newApp": "./src/content-scripts/newApp.js",
    "components/newApp": "./src/components/newApp.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "**/*.html",
          to: "[path][name][ext]",
          context: "src/",
        },
      ],
    }),
  ],
};
