var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');

config.debug = false;
config.devtool = false;
config.output = {
    filename: '[name].bundle.js',
    publicPath: '',
    path: path.resolve(__dirname, 'dist')
};

config.plugins = config.plugins.concat([

    // This plugin looks for similar chunks and files
    // and merges them for better caching by the user
    new webpack.optimize.DedupePlugin(),

    // This plugins optimizes chunks and modules by
    // how much they are used in your app
    new webpack.optimize.OccurenceOrderPlugin(),

    // This plugin prevents Webpack from creating chunks
    // that would be too small to be worth loading separately
    new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 51200, // ~50kb
    }),

    // Reduces bundles total size
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        mangle: {

            // You can specify all variables that should not be mangled.
            // For example if your vendor dependency doesn't use modules
            // and relies on global variables. Most of angular modules relies on
            // angular global variable, so we should keep it unchanged
            except: ['$super', '$', 'exports', 'require', 'angular']
        }
    }),

    // This plugins defines various variables that we can set to false
    // in production to avoid code related to them from being compiled
    // in our final bundle
    new webpack.DefinePlugin({
        __SERVER__:      false,
        __DEVELOPMENT__: false,
        __DEVTOOLS__:    false,
        'process.env':   {
            BABEL_ENV: 'production',
        },
    }),
]);

module.exports = config;