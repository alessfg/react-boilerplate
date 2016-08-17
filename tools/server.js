// Colors for console logs
import chalk from 'chalk';
// Automatically open browser
import opn from 'opn';
// Webpack
import webpack from 'webpack';
// Webpack dev server
import WebpackDevServer from 'webpack-dev-server';
// Webpack development config
import config from './webpack/webpack.config.dev';

// Compile webpack with development config
const compiler = webpack(config);

// Create new webpack dev server instance
const server = new WebpackDevServer(compiler, {
  historyApiFallback: true,
  hot: true,
  stats: 'minimal',
});

// Start webpack dev server
server.listen(3000, err => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(chalk.cyan('Starting the development server...'));
  opn('http://localhost:3000');
});
