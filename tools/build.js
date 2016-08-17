// Colors for console logs
import chalk from 'chalk';
// Webpack
import webpack from 'webpack';
// Webpack production config
import config from './webpack/webpack.config.prod';

// Signal start of production build
console.log(chalk.cyan('Creating an optimized production build...'));

// Compile webpack with production config
const compiler = webpack(config);

// Run webpack compiler and log any pertinent errors and/or warnings
compiler.run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    process.exit(1);
  }

  const jsonStats = stats.toJson();
  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }
  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalk.red(warning)));
  }
  return console.log(chalk.cyan('Compiled successfully!'));
});
