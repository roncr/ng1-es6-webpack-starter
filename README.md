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

Generate components ([More details](#generating-components)):

    gulp component --name <component name>

## Generating components
New components can be auto-generated to simplify and speed up the development process. To do so, you must use:

    gulp component --name name [--path path] [-force]

This command will generate a component an all its minimal files at `src/app/components`, the command uses this parameters:
* *name*: component name, remember to use camelCase
* *path*: (Optional) provide a different path relative to the working directory, for instance in order to create a common component, you must use `--path src/app/common`
* *force* (Optional) if a folder with the same `name` already exists an error is thrown, the `force` parameter creates the component overwriting the existing files.

The generated component will have the following structure:

    componentName/
        componentName.component.js
        componentName.controller.js
        componentName.html
        componentName.js
        componentName.scss
        componentName.spec.js

## ESLint

Some other ESLint config files:
* [ESLint Standard](https://github.com/feross/eslint-config-standard)
* [Google](https://github.com/sindresorhus/eslint-config-xo)

## More

For more visit the [wiki](https://github.com/roncr/ng1-es6-webpack-starter/wiki).


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
* chalk - Print console messages with colors
* gulp-template - Replace strings in a template
* gulp-rename - Rename files.

More Webpack loaders: https://webpack.github.io/docs/list-of-loaders.html

##### TODO
* generate documentation
* end to end testing

## Credits

This starter app is based on the [NG6-Starter](https://github.com/AngularClass/NG6-starter) by [AngularClass](https://angularclass.com/).

This app only have my personal preferences, please go to the original NG6-Starter project for the latest version.