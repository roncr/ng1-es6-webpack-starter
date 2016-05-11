import angular from 'angular';
import uiRouter from 'angular-ui-router';

import appConstants from './config/app.contants';
import appRun from './config/app.run';
import Components from './components/components';
import CommonComponents from './common/common';
import AppComponent from './app.component';

angular.module('app', [
    uiRouter,
    Components.name,
    CommonComponents.name
])
    .constant(appConstants)
    .config(($locationProvider) => {
        'ngInject'; // Annotates code to use ngAnnotate
        // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-configure-your-server-to-work-with-html5mode
        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .run(appRun)
    .component('app', AppComponent);