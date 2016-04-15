# Angular 1 - Webpack Starter

Starter project for an AngularJS application using Babel and Webpack.

## Features
* ES6
* Sass
* ESLint

## Requirements

* Gulp >= 3.9.1
* Node >= 4.x
* NPM >= 3.8.x

## Tasks
Run development mode, supports watch and hot reload:

    npm start

Run production mode:

    npm run prod



#### Dependencies
* gulp - Build system.
* webpack - Module loader.
* babel-core - ES6 transpiler.
* babel-presets-es2015 - ES6 Support.
* browser-sync - Development server.
* connect-history-api-fallback - Dev server fallback to enable SPA.
* gulp-util - Utility functions for gulp tasks.
* supports-color - Detect if a terminarl suports colors.
* html-webpack-plugin - Injects bundles in your index.html instead of wiring all manually.
* ng-annotate-loader - To auto-generate bracket notation.
* babel-loader - Run babel with webpack.
* raw-loader - Loads HTML into Webpack.
* style-loader - Transforms the CSS into `<style>` tag.
* css-loader - Processes URLs, fonts and other resources.
* sass-loader - Compiles SASS with Webpack.
* file-loader - Emits the file into the output folder and returns the (relative) url. (Used for images handling).
* url-loader - The url loader works like the file loader, but can return a Data Url if the file is smaller than a limit. (Used for images handling).
* eslint - JS Linter.
* eslint-loader - ESLint with Webpack.
* babel-eslint - ESLint using Babel as the parser.
* jasmine-core - Unit Testing
* karma - Tets runner
* karma-jasmine - Karma - Jasmine integration
* karma-phantomjs-launcher - PhantomJS Launcher
* phantomjs-prebuilt - PhantomJS
* karma-mochar-reporter - Mocha reporter
* karma-webpack - Webpack with karma
* karma-sourcemap-loader - Karma plugin that locates and loads existing javascript source map files.

More Webpack loaders: https://webpack.github.io/docs/list-of-loaders.html

#### ESLint

Some other ESLint config files:
* [ESLint Standard](https://github.com/feross/eslint-config-standard)
* [Google](https://github.com/sindresorhus/eslint-config-xo)

#### More

For more visit the [wiki](https://github.com/roncr/ng1-es6-webpack-starter/wiki).

##### TODO
* component generation
* generate documentation
* end to end testing
* compare why browser-sync + webpack-dev-middleware + webpack-hot-middleware vs webpack-dev-server

## Credits

This starter app is based on the [NG6-Starter](https://github.com/AngularClass/NG6-starter) by [AngularClass](https://angularclass.com/).

This app only have my personal preferences, please go to the original NG6-Starter project for the latest version.