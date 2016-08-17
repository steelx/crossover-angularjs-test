/**
 * @ngdoc directive
 * @name <metrics>
 * @description
 * # metricsDirective.js
 * Directive of the crossoverTestAjinkyaApp module
 */
angular.module('crossoverTestAjinkyaApp')
  .directive('metrics', [metricsDirective]);

function metricsDirective() {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    scope: {
      test: '=',
      maintainability: '=',
      security: '=',
      workmanship: '='
    },
    templateUrl: 'scripts/metrics/metrics.html',
    link: function (scope) {
      scope.testClass = (Number(scope.test) < 70) ? 'arrow-down': 'arrow-up';
      scope.maintainabilityClass = (Number(scope.maintainability) < 70) ? 'arrow-down': 'arrow-up';
      scope.securityClass = (Number(scope.security) < 70) ? 'arrow-left': 'arrow-right';
      scope.workmanshipClass = (Number(scope.workmanship) < 70) ? 'arrow-left': 'arrow-right';
    }
  };
}
