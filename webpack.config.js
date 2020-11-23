const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'react-collapse-object',
    libraryTarget: 'umd'
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
        exclude: [/node_modules/, /.storybook/, /.vscode/, /src\/\**\/\*.stories.tsx/],
      },
    ],
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, 'src')
    },
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: '_',
    },
  }
}