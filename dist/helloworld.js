(function() {
    'use strict';
    var MODULE_NAME = 'helloworld';
    var angular;
    
    if (typeof module === 'object' && module.exports) {
      angular = require('angular');
      module.exports = MODULE_NAME;
    } else {
      angular = window.angular;
    }

    angular.module(MODULE_NAME, []).directive('ngHelloWorld', function() {
        return {
            restrict: 'A',
            template: "Hello world"
        };
    });
}());
