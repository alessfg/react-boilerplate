// Ensure CSS works in all browsers
import autoprefixer from 'autoprefixer';
// Extract CSS into its own file
import ExtractTextPlugin from 'extract-text-webpack-plugin';
// Plugin responsible for creation of app index.html
import HtmlWebpackPlugin from 'html-webpack-plugin';
// Node path manager
import path from 'path';
// Webpack
import webpack from 'webpack';

// NODE_ENV Global
const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
};

// Default configuration for webpack in production mode
export default {
  // Webpack entry path
  entry: path.resolve('src/index.js'),
  // Webpack output path
  output: {
    path: path.resolve('build'),
    publicPath: '/',
    filename: 'static/js/[name].[chunkhash:8].min.js',
  },
  // Webpack modules
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint',
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&-autoprefixer!postcss'),
      },
      {
        // Always store these extensions in a separate file
        test: /\.(jpg|png|gif)(\?.*)?$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[ext]',
        },
      },
      {
        // Try to store these extensions as an inline data URL if below limit
        test: /\.(svg|eot|ttf|woff|woff2)(\?.*)?$/,
        loader: 'url',
        query: {
          name: 'static/media/[name].[ext]',
          limit: 10000,
        },
      },
    ],
  },
  // Use autoprefixer with the PostCSS loader
  postcss: () => [autoprefixer],
  // Automatically require files with .js or .jsx extensions
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  // Create source map
  devtool: 'source-map',
  // Setup plugins
  plugins: [
    new ExtractTextPlugin('static/css/[name].[contenthash:8].min.css'),
    new HtmlWebpackPlugin({
      favicon: './src/favicon.ico',
      inject: true,
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new webpack.DefinePlugin(GLOBALS),
    // Optimization plugins
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
