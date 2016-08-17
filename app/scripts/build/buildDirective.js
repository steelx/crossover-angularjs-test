/**
 * @ngdoc directive
 * @name <build>
 * @description
 * # buildDirective.js
 * Directive of the crossoverTestAjinkyaApp module
 */
angular.module('crossoverTestAjinkyaApp')
  .directive('build', [buildDirective]);

function buildDirective() {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    scope: {
      debug: '=',
      release: '='
    },
    templateUrl: 'scripts/build/build.html'
  };
}
