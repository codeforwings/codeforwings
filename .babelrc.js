/**
 *
 * https://npm.runkit.com/babel-plugin-module-resolver
 * IntelliJ/WebStorm: You can mark your module directories as "resources root" e.g if you have ../../../utils/MyUtilFn you can mark ../../../utils as "resources root". This has the problem that your alias also has to be named utils. The second option is to add a webpack.config.js to your project and use it under File->Settings->Languages&Frameworks->JavaScript->Webpack. This will trick webstorm into resolving the paths and you can use any alias you want e.g.:
 var path = require('path');

 module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      utils: path.resolve(__dirname, '../../../utils/MyUtilFn'),
    },
  },
};
 * @type {[string, {root: string[], alias: {"~": string}}][]}
 */
import * as path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
// const path = require('path');
// console.log(path.resolve(__dirname));
const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      // root: ["/"],
      alias: {
        "~": "./dist_npm_package",
        // "~": path.resolve(__dirname, '../dist_npm_package'),
        // utils: path.resolve(__dirname, './dist_npm_package'),
        // utils: path.resolve(__dirname, './dist_npm_package'),

      }
    }

  ]

];
export default {plugins}
