require.config({
    baseUrl: 'scripts',

    // alias libraries paths
    paths: {
        'angular': '../libs/angular.min',
        //'app': '../js/app',
        //'demoController': '../controllers/democtrl',
        //'formController': '../controllers/form1ctrl'
        //'domReady': '../libs/domReady'
    },
    //Remember: only use shim config for non-AMD scripts,
    //scripts that do not already call define(). The shim
    //config will not work correctly if used on AMD scripts,
    //in particular, the exports and init config will not
    //be triggered, and the deps config will be confusing
    //for those cases.
    shim: {
        /*'app': {
            'deps': [ 'angular', 'demoController', 'formController' ]
        },

        'demoController' : {
            'deps': [ 'angular' ]
        },

        'formController' : {
            'deps': [ 'angular' ]
        }*/
        'angular': { exports: 'angular' },
        //'domReady': { exports: 'domReady' }
    },

});
/*
require(['app'], function() {
    angular.bootstrap(document, ['app']);
});*/

//require(['domReady!'], function (doc) {
    //This function is called once the DOM is ready,
    //notice the value for 'domReady!' is the current
    //document.
    
//});


// Start the main app logic.
// Use file paths or Aliases
require([
    '../js/app', 
    '../controllers/democtrl', 
    '../controllers/form1ctrl'
]);


/*
define(['require', 'domReady'], function(require, domReady) {
    domReady(function() {
        require([     
            '../js/app',       
            '../controllers/democtrl', 
            '../controllers/form1ctrl',            
        ], function(app) {
            //app.initialize();
        });
    });
});*/

/*
// Start the main app logic.
require(['domReady'], function (domReady) {
    domReady(function () {
        //This function is called once the DOM is ready.
        //It will be safe to query the DOM and manipulate
        //DOM nodes in this function.

        // Start the main app logic.
        // Use file paths or Aliases
        require([
            '../js/app', 
            '../controllers/democtrl', 
            '../controllers/form1ctrl'
        ]);
    });
  });*/