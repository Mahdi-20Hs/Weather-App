const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devserver:{
    static: './dist'
  },
  optimization: {
    runtimeChunk: 'single',
  },
  entry: './src/main.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: 'asset/resource'
      }
    ]
  }
}