/**
 * @ngdoc function
 * @name crossoverTestAjinkyaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crossoverTestAjinkyaApp
 */
angular.module('crossoverTestAjinkyaApp')
  .controller('MainTableController', [
    'buildStatusService',
    MainTableController
  ]);

function MainTableController(buildStatusService) {
  'use strict';

  var MainTableCtrl = this;
  MainTableCtrl.loading = true;

  //init
  fetchStatus();

  function fetchStatus() {
    buildStatusService.get()
      .then(
        function (success) {
          MainTableCtrl.stats = success;
        },
        function (error) {
          //err
        }
      )
      .then(function () {
        //finally
        MainTableCtrl.loading = false;
      });
  }
}
