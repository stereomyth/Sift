module.exports = {
  module: {
    rules: [
      {
        test: /\.postcss$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};
