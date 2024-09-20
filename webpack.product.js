//webpack.config.js
const path = require('path');

//https://webpack.js.org/concepts/entry-points/#separate-app-and-vendor-entries
module.exports = {
  mode: "production",
  // devtool: "inline-source-map",
  entry: {
    game: "./src/module/game/Game.ts",
    loader: "./src/module/load/Loader.ts",
    main: "./src/App.ts",
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