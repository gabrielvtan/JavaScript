const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");


// entry point is where you want to start the application
// output is where do you want to bundle up the code 
// in loaders - we state that we are taking all js files, excluding node_modules, and applying the babel-loader with the present of es2015
module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './app.js'
  },
  output: {
    filename: '_build/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  plugins: [
    // uglify js
    new UglifyJsPlugin({
      uglifyOptions : {
        ie8: false,
        output: {
            comments: false
        }
      } 
    }),
    // env plugin
    new webpack.DefinePlugin({
      'proccess.env': { NODE_ENV: JSON.stringify(nodeEnv)}
    })
  ]
}