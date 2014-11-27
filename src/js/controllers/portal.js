/*
 * name        : portal.js
 * description : portal pages controller
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

module.exports = [
  '$scope',
  '$rootScope',
  '$element',
  '$routeParams',
  '$q',
  '$location',
  'pageData',
  function($scope, $rootScope, $element, $routeParams, $q, $location, pageData) {
    var curPortal = $element.data('cur-portal');
    if(curPortal === 'custom') {
      curPortal = $routeParams.custom_name;
    }

    $scope.createQuery = function(query) {
      var q = 'pageData' + '.' + curPortal + '_' + query;
      return q;
    };
  }];
