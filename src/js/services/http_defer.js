'use strict';

// Async service
module.exports = [
  '$http',
  '$q',
  function($http, $q) {
    return {
      get: function(url) {
        var deferred = $q.defer();
        $http({method: 'GET', url: url}).success(function(response) {
          deferred.resolve(response);
        });
        return deferred.promise;
      }
    };
  }
];
