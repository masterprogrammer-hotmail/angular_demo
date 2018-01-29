require.config({
    baseUrl: 'scripts',
    paths: {
        'angular': '../libs/angular.min',
    },
    //Remember: only use shim config for non-AMD scripts,
    //scripts that do not already call define(). The shim
    //config will not work correctly if used on AMD scripts,
    //in particular, the exports and init config will not
    //be triggered, and the deps config will be confusing
    //for those cases.
    shim: {
        'angular': { exports: 'angular' },
    }
});

// define(['angular','app'], function(){
//     console.log('main.js')
// });

// Start the main app logic.
requirejs(['../js/app', '../controllers/democtrl']);