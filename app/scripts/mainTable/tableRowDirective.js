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
    transclude: true,
    link: function (scope) {
      scope.isDisplayChart = false;
      scope.showChart = showChart;

      switch (scope.state) {
        case 'RUNNING':
          displayBars('running');
          break;
        case 'REJECTED':
          displayBars('rejected');
          break;
        case 'ACCEPTED':
          displayBars('accepted');
          break;
        case 'COMPLETE':
          displayBars('complete');
          break;
        default:
          displayBars('pending');
          break;
      }

      function displayBars(className) {
        scope.className = className;

        if(scope.row.hasOwnProperty('metrics') && !isEmptyObj(scope.row.metrics)){
          if(scope.row.metrics && isPassing(scope.row.metrics, 'metrics')){
            scope.isMetrics = true;
          }
        }
        if(scope.row.hasOwnProperty('build') && !isEmptyObj(scope.row.build)){
          if(scope.row.build && isPassing(scope.row.build, 'build')){
            scope.isBuild = true;
          }
        }
        if(scope.row.hasOwnProperty('unitTest') && !isEmptyObj(scope.row.unitTest)){
          if(scope.row.unitTest && isPassing(scope.row.unitTest, 'unitTest')){
            scope.isUnitTest = true;
          }
        }
        if(scope.row.hasOwnProperty('functionalTest') && !isEmptyObj(scope.row.functionalTest)){
          if(scope.row.functionalTest && isPassing(scope.row.functionalTest, 'functionalTest')){
            scope.isfunctionalTest = true;
          }
        }
      }

      function isPassing(obj, keyname) {

        if(keyname === 'metrics'){
          return obj.test >= 70 && obj.maintainability >= 70 && obj.security >= 70 && obj.workmanship >= 70;
        }

        if(keyname === 'build'){
          return obj.debug && obj.release;
        }

        if(keyname === 'unitTest'){
          return ((obj.passed * 100) / obj.codeCount ) >= 70;
        }

        if(keyname === 'functionalTest'){
          return ((obj.passed * 100) / obj.codeCount ) >= 70;
        }

      }

      function isEmptyObj(obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object
      }


      function showChart() {
        scope.isDisplayChart = !scope.isDisplayChart;
      }

    }
  };
}
