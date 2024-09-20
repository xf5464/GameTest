//webpack.config.js
const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/App.ts",
    game: "./src/module/game/Game.ts",
    loader: "./src/module/load/Loader.ts",
  },
  output: {
    filename: '[name].bundle.js',
  },
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     filename: "app-bundle.js" // <--- Will be compiled to this single file
//   },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};