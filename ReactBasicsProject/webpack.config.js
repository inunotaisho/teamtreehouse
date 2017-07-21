
module.exports = {
  devtool: 'inline-sourcemap',
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: [
          'react-hot-loader',
          'babel-loader'
        ]
      },
      {
        test:/\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
};