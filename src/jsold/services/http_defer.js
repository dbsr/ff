'use strict';

// Async service
app.service('httpDefer', function($http, $q) {
  return {
    get: function(url) {
      var deferred = $q.defer();
      $http({method: 'GET', url: url}).success(function(response) {
        deferred.resolve(response);
      });
      return deferred.promise;
    }
  };
});
