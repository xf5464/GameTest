//webpack.config.js
const path = require('path');

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    // compress: true,
    port: 8090, // 你可以选择任何未被占用的端口
    // open: true, // 这将在服务器启动时自动打开浏览器
  },
  entry: {
    app: "./src/App.ts",
    game: "./src/module/game/Game.ts",
    loader: "./src/module/load/Loader.ts",
  },
  output: {
    filename: '[name].js',
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