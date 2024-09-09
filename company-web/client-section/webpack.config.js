// // webpack.config.js
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: {
//     main: './src/index.js',
//     other: './src/other.js',
//   },
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     clean: true,
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './public/index.html',
//       filename: 'index.html',
//       chunks: ['main'],
//     }),
//     new HtmlWebpackPlugin({
//       template: './public/other.html',
//       filename: 'other.html',
//       chunks: ['other'],
//     }),
//   ],
//   resolve: {
//     extensions: ['.js', '.jsx'], // Add .jsx if you're using JSX files
//   },
//   module: {
//     rules: [
//         {
//           test: /\.js$/,
//           exclude: /node_modules/,
//           use: {
//             loader: 'babel-loader',
//             options: {
//               presets: ['@babel/preset-env', '@babel/preset-react']
//             }
//           },
//         },
//       ],
//   },
// };
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isOther = process.env.ENTRY_POINT === 'other';

module.exports = {
  entry: isOther ? './src/other.js' : './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: isOther ? './public/other.html' : './public/index.html',
      filename: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'), // Serve static files from 'public' directory
    },
    open: true,
  },
};



