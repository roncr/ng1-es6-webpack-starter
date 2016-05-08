'use strict';

import gulp    from 'gulp';
import webpack from 'webpack';
import path    from 'path';
import serve   from 'browser-sync';
import gutil   from 'gulp-util';
import colorsSupported      from 'supports-color';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import historyApiFallback   from 'connect-history-api-fallback';

// **************************************
// Variables

let config = {
    root: 'src',
    app: 'app',
    components: 'app/components',
    main: 'app.js'
};

// **************************************
// Paths Map
let paths = {
    entry: path.join(__dirname, config.root, config.app, config.main)
};



// **************************************
// Tasks

gulp.task('prod', (cb) => {
    const webpackConfig = require('./webpack.dist.config');
    webpackConfig.entry.app = paths.entry;

    webpack(webpackConfig, (err, stats) => {
        if(err)  {
            throw new gutil.PluginError("webpack", err);
        }

        gutil.log("[webpack]", stats.toString({
            colors: colorsSupported,
            chunks: false,
            errorDetails: true
        }));

        cb();
    });
});

gulp.task('serve', () => {
    const webpackConfig = require('./webpack.dev.config');
    webpackConfig.entry.app = [
        // this modules required to make HRM working
        // it responsible for all this webpack magic
        'webpack-hot-middleware/client?reload=true',
        // application entry point
        paths.entry
    ];

    var compiler = webpack(webpackConfig);

    serve({
        port: process.env.PORT || 3000,
        open: false,
        server: {baseDir: config.root},
        middleware: [
            historyApiFallback(),
            webpackDevMiddleware(compiler, {
                stats: {
                    colors: colorsSupported,
                    chunks: false,
                    modules: false
                },
                publicPath: webpackConfig.output.publicPath
            }),
            webpackHotMiddleware(compiler)
        ]
    });
});

gulp.task('watch', ['serve']);

gulp.task('default', ['serve']);