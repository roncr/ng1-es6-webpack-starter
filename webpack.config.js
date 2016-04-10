var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var root = 'src';

module.exports = {
    devtool: 'sourcemap',
    entry: {},
    module: {
        preLoaders: [
            { test: /\.js/, loader: 'eslint' }
        ],
        loaders: [
            { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loaders: ['ng-annotate','babel'] },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.scss$/, loaders: ['style','css','sass'] },
            { test: /\.css$/, loader: ['style','css'] },
            { test: /\.(png|gif|jpe?g|svg)$/i, loader: 'url', query: { limit: 10000 } }
        ]
    },
    plugins: [
        // Injects bundles in your index.html instead of wiring all manually.
        // It also adds hash to all injected assets so we don't have problems
        // with cache purging during deployment.
        new HtmlWebpackPlugin({
            template: path.join(root, 'index.html'),
            inject: 'body', // inject all scripts into body
            hash: true
        }),

        // Automatically move all modules defined outside of application directory to vendor bundle.
        // If you are using more complicated project structure, consider to specify common chunks manually.
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                return module.resource && module.resource.indexOf(path.resolve(__dirname, root)) === -1;
            }
        })
    ]
};