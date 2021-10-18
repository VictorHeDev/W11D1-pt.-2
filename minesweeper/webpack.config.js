const path = require('path');

module.exports = {
  entry: './frontend/react_minesweeper.jsx',
  output: {
    path: path.resolve(__dirname),
    filename: 'main.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\/js?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
          },
        },
      },
    ],
  },
};
