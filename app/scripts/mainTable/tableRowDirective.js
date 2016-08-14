/**
 * @ngdoc function
 * @name <table-row>
 * @description
 * # tableRowDirective.js
 * Directive of the crossoverTestAjinkyaApp module
 */
angular.module('crossoverTestAjinkyaApp')
  .directive('tableRow', [tableRowDirective]);

function tableRowDirective() {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'scripts/mainTable/tableRow.html',
    scope: {
      row: '=',
      state: '='
    },
    link: function (scope) {

      switch (scope.state) {
        case 'RUNNING':
          scope.className = 'running';
          break;
        case 'REJECTED':
          scope.className = 'rejected';
          break;
        case 'ACCEPTED':
          scope.className = 'accepted';
          break;
        case 'COMPLETE':
          scope.className = 'complete';
          break;
        default:
          scope.className = 'pending';
          break;
      }

      console.log(_scope.className);
    }
  };
}
