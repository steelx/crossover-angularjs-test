/**
 * @ngdoc directive
 * @name <percentile-num>
 * @description
 * # percentileNumDirective.js
 * Directive of the crossoverTestAjinkyaApp module
 */
angular.module('crossoverTestAjinkyaApp')
  .directive('percentileNum', [percentileNumDirective]);

function percentileNumDirective() {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    scope: {
      total: '=',
      passed: '='
    },
    templateUrl: 'scripts/percentileNum/percentileNum.html',
    link: function (scope) {
      scope.percentage = Math.round((Number(scope.passed)/Number(scope.total)) * 100);
    }
  };
}
