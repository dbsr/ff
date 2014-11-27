/*
 * name        : base.js
 * description : base controller
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

'use strict';

module.exports = [
    '$scope',
    '$rootScope',
    function($scope, $rootScope) {
      $scope.activate = function(idx) {
        var curQ = $scope.items[idx];
        if(curQ.active) {
          curQ.active = false;
        } else {
          angular.forEach($scope.items, function(q) {
            q.active = false;
          });
          curQ.active = true;
        }
      };
      $scope.items = $rootScope.faqItems;
    }
  ];
