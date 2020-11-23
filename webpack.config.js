const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  // optimization: {
  //   runtimeChunk: true
  // },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, 'src')
    },
    extensions: [ '.tsx', '.ts', '.js' ],
  },
}