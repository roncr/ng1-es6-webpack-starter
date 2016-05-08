'use strict';

import fs       from 'fs';
import gulp     from 'gulp';
import path     from 'path';
import chalk    from 'chalk';
import yargs    from 'yargs';
import webpack  from 'webpack';
import gutil    from 'gulp-util';
import rename   from 'gulp-rename';
import serve    from 'browser-sync';
import template from 'gulp-template';
import colorsSupported      from 'supports-color';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import historyApiFallback   from 'connect-history-api-fallback';


// Variables

let args = yargs.argv;
let config = {
    root: 'src',
    app: 'app',
    components: 'app/components',
    main: 'app.js',
    generator: 'generator'
};


// Paths Map
let paths = {
    entry: path.join(__dirname, config.root, config.app, config.main),
    generatorTemplates: path.join(__dirname, config.generator, 'component/**/*.**')
};



// Utils
let resolveToComponents = (glob = '') => {
    return path.join(config.root, config.components, glob); // app/components/{glob}
};

// Checks if a file/directory exists
let exists = (path) => {
    let exists;

    try {
        fs.accessSync(path, fs.F_OK);
        exists = true;
    } catch (e) {
        exists = false;
    }

    return exists;
}



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

gulp.task('component', () => {
    const cap = (val) => {
        return val.charAt(0).toUpperCase() + val.slice(1);
    };
    const name = args.name,
        parentPath = path.join(__dirname, args.path) || resolveToComponents(),
        destPath = path.join(parentPath, name),
        componentExists = exists(destPath);

    if(!componentExists || args.force) {
        return gulp.src(paths.generatorTemplates)
            .pipe(template({
                name: name,
                upCaseName: cap(name)
            }))
            .pipe(rename((path) => {
                path.basename = path.basename.replace('temp', name);
            }))
            .pipe(gulp.dest(destPath))
            .on('end', function(){
                gutil.log('Component created at:', chalk.magenta(destPath));
            });
    } else {
        gutil.log(chalk.red("ERROR:","Component already exists at", destPath));
    }
});

gulp.task('watch', ['serve']);

gulp.task('default', ['serve']);