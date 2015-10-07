(function() {
  'use strict';

  // Configure RequireJS to shim Jasmine
  require.config({
    baseUrl: '../app',
    paths: {
      'jasmine': '../vendors/jasmine-core/jasmine',
      'jasmine-html': '../vendors/jasmine-core/jasmine-html',
      'boot': '../vendors/jasmine-core/boot',
      'jquery' : '../vendors/jquery.min',
      '_' : '../vendors/lodash.min'
    },
    shim: {
      'jasmine-html': {
        deps: ['jasmine'],
      },
      'boot': {
        deps: ['jasmine', 'jasmine-html'],
      }
    }
  });

  // Define all of your specs here. These are RequireJS modules.
  var specs = [
    '../tests/ZombifySpec'
  ];

  // Load Jasmine - This will still create all of the normal Jasmine browser globals unless `boot.js` is re-written to use the
  // AMD or UMD specs. `boot.js` will do a bunch of configuration and attach it's initializers to `window.onload()`. Because
  // we are using RequireJS `window.onload()` has already been triggered so we have to manually call it again. This will
  // initialize the HTML Reporter and execute the environment.
  require(['boot'], function () {

    // Load the specs
    require(specs, function () {
      // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
      window.onload();
    });
  });
})();
