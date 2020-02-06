module.exports = env => {
  return {
    mode: env,
    output: {
      filename: '[name].min.js',
    },
    // devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader'
        },
      ],
    },
  }
};