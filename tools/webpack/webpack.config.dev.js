// Plugin responsible for creation of app index.html
import HtmlWebpackPlugin from 'html-webpack-plugin';
// Node path manager
import path from 'path';
// Webpack
import webpack from 'webpack';

// NODE_ENV Global
const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development'),
};

// Default configuration for webpack in development mode
export default {
  // Webpack entry path
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    'react-hot-loader/patch',
    path.resolve('src/index.js'),
  ],
  // Webpack output path
  output: {
    path: path.resolve('build'),
    publicPath: '/',
    filename: 'static/js/bundle.js',
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
        loader: 'style!css?sourceMap&-autoprefixer!postcss',
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
  // Automatically require files with .js or .jsx extensions
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  // Create low quality source map
  devtool: 'eval-cheap-module-source-map',
  // Setup plugins
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/favicon.ico',
      inject: true,
      template: './src/index.html',
    }),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
