/**
 * @ngdoc directive
 * @name <percentile-bar>
 * @description
 * # percentileBarDirective.js
 * Directive of the crossoverTestAjinkyaApp module
 */
angular.module('crossoverTestAjinkyaApp')
  .directive('percentileBar', [percentileBarDirective]);

function percentileBarDirective() {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    scope: {
      covered: '='
    },
    templateUrl: 'scripts/percentileBar/percentileBar.html'
  };
}
