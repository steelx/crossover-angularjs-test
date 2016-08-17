/**
 * @ngdoc directive
 * @name <pie-chart>
 * @description
 * # pieChartDirective.js
 * Directive of the crossoverTestAjinkyaApp module
 */
angular.module('crossoverTestAjinkyaApp')
  .directive('pieChart', ['drawPieChart', pieChartDirective]);

function pieChartDirective(drawPieChart) {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    scope: {
      total: '=',
      passed: '='
    },
    link: function (scope, elem) {
      elem.addClass('chart');
      elem.drawPieChart([
        { title: "Passed", value: Number(scope.passed), color: "#72AC4D" },
        { title: "Failed", value: (Number(scope.total) - Number(scope.passed)), color: "#EB7D3B" }
      ]);
    }
  };
}
