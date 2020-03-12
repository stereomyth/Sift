const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/render.js',

  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    contentBase: './dist',
    hot: true,
    host: '0.0.0.0',
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.postcss$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sift',
      template: 'src/index.ejs',
    }),
    new VueLoaderPlugin(),
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
  },
};
