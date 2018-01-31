require.config({
    waitSeconds: 7,
    baseUrl: '',
    //urlArgs: "rbust=" + key,
    skipDataMain: false,
    //enforceDefine: false,
    baseUrl: 'scripts',
    paths: {
        //'angular': '../libs/angular.min',
        //'angular': 'http://code.ionicframework.com/1.3.3/js/ionic.bundle.min.js',
        'ionic': '../libs/ionic.bundle.min',
        //'angular-route': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular-route.js',
        //'angular-route': '../libs/angular-route.min',
        'uirouter': '../libs/angular-ui-router.min',
        'key': '../js/key',
    },
    //Remember: only use shim config for non-AMD scripts,
    //scripts that do not already call define(). The shim
    //config will not work correctly if used on AMD scripts,
    //in particular, the exports and init config will not
    //be triggered, and the deps config will be confusing
    //for those cases.
    shim: {
        'ionic': { exports: 'ionic' },
        //'angular-route': { exports: 'angular-route' },
        'uirouter': { deps: ['ionic'] },
        'key': { exports: 'key', 'deps': ['ionic'] },
    }
});

// define(['angular','app'], function(){
//     console.log('main.js')
// });

// Start the main app logic.
//requirejs(['app', 'uirouter', '../controllers/democtrl']);
//requirejs(['app', 'routes', 'run']);
//requirejs(['app', 'config', 'run', 'routes']);
requirejs(['ionic', 'uirouter', 'boot']);