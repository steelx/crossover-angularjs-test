/**
 * @ngdoc function
 * @name buildStatusService
 * @description
 * # buildStatusService.js
 * Service of the crossoverTestAjinkyaApp to fetch data
 */
angular.module('crossoverTestAjinkyaApp')
  .factory('buildStatusService', ['$q', buildStatusService]);

function buildStatusService($q) {
  'use strict';

  var data = [
    {
      "id": 1,
      "machine": "Tenrox-R1_1231",
      "owner": "cpeters0",
      "time_started": "1471198446",
      "state": "RUNNING",
      "metrics": {}
    },
    {
      "id": 2,
      "machine": "Tenrox-R1_1232",
      "owner": "pgarza1",
      "time_started": "1470609043",
      "state": "REJECTED",
      "metrics": {
        "test": 64,
        "maintainability": 53,
        "security": 64,
        "workmanship": 72
      },
      "build": {
        "debug": true,
        "release": true
      },
      "unitTest": {
        "codeCount": 152,
        "passed": 132,
        "coveredPercent": 76
      },
      "functionalTest": {
        "codeCount": 6466,
        "passed": 4321,
        "coveredPercent": 23
      }
    },
    {
      "id": 3,
      "machine": "Tenrox-R1_1233",
      "owner": "ddunn2",
      "time_started": "1472391399",
      "state": "ACCEPTED",
      "metrics": {
        "test": 70,
        "maintainability": 73,
        "security": 64,
        "workmanship": 72
      },
      "build": {
        "debug": true,
        "release": true
      },
      "unitTest": {
        "codeCount": 160,
        "passed": 142,
        "coveredPercent": 78
      },
      "functionalTest": {
        "codeCount": 4666,
        "passed": 4011,
        "coveredPercent": 70
      }
    },
    {
      "id": 4,
      "machine": "Tenrox-R1_1234",
      "owner": "wwest3",
      "time_started": "1470901574",
      "state": "COMPLETE",
      "metrics": {
        "test": 74,
        "maintainability": 77,
        "security": 66,
        "workmanship": 75
      },
      "build": {
        "debug": true,
        "release": true
      },
      "unitTest": {
        "codeCount": 150,
        "passed": 142,
        "coveredPercent": 80
      },
      "functionalTest": {
        "codeCount": 5656,
        "passed": 5066,
        "coveredPercent": 75
      }
    },
    {
      "id": 5,
      "machine": "Tenrox-R1_1230",
      "owner": "jpalmer4",
      "time_started": "1472455370",
      "state": "REJECTED",
      "metrics": {
        "test": 44,
        "maintainability": 40,
        "security": 56,
        "workmanship": 65
      }
    },
    {
      "id": 44,
      "machine": "Tenrox-R1_1235",
      "owner": "steel",
      "time_started": "1471198446",
      "state": "PENDING"
    }
  ];


  function getStatus() {
    var def = $q.defer();
    // Mocking http state here
    def.resolve(data);

    return  def.promise;
  }

  return {
    get: getStatus
  };
}
