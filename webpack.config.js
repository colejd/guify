/* global __dirname, require, module*/

const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

let libraryName = 'guify';

let plugins = [], outputFile;

module.exports = (env, argv) => {

  console.log(`Current mode=${argv.mode}\n`)

  if (argv.mode === 'production') { // Uses --mode argument to webpack, or NODE_ENV if not defined.
    outputFile = libraryName + '.min.js';
  } else if (argv.mode === 'development') {
    let linter = new ESLintPlugin();
    plugins.push(linter);
    outputFile = libraryName + '.js';
  } else {
    throw new Error(`Invalid development mode ${argv.mode}!`)
  }

  let config = {
    entry: __dirname + '/src/guify.js',
    devtool: 'source-map',
    output: {
      path: __dirname + '/lib',
      filename: outputFile,
      library: {
        type: 'umd',
      },
    },
    module: {
      rules: [
        { // Process js files
          test: /\.js$/i,
          loader: 'babel-loader',
          exclude: /(node_modules|bower_components)/
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
      //   { // Lint all js files with eslint-loader
      //     test: /(\.jsx|\.js)$/,
      //     loader: 'eslint-loader',
      //     exclude: /node_modules/
      //   }
      ]
    },
    resolve: {
      modules: [path.resolve('./node_modules'), path.resolve('./src')],
      extensions: ['.json', '.js'],
    },
    plugins: plugins,
    devServer: {
      compress: true,
      port: 9000,
      static: {
        directory: path.join(__dirname, ''),
        serveIndex: true,
      },
      open: {
        target: ['/example'],
      }
    }
  }

  return config
}
