const path = require('path');

module.exports = (env) => {
  console.log('NODE_ENV: ', env.NODE_ENV);
  return {
    mode: process.env.NODE_ENV || 'development',
    entry: './client/index.js',
    output: {
      publicPath: path.resolve(__dirname, '/build/'),
      path: path.join(__dirname, '/build'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\jsx?/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        {
          test: /scss$/,
          exclude: /node_modules/,
          loaders: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      publicPath: path.resolve(__dirname, '/build/'),
      compress: true,
      port: 8080,
      proxy: {
        '/api/': {
          target: 'http://localhost:3000/',
          secure: false,
        },
      },
    },
  };
};
