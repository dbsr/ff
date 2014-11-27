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
  '$timeout',
  'pageData',
  function($scope, $rootScope, $element, $timeout, pageData) {
    console.log('wtf');
    pageData
      .then(function(pageData) {
        console.log(pageData.pageData, pageData.pageData.forEach);
        angular.forEach(
            pageData.pageData,
            function(val, key) {
              if(key.indexOf($rootScope.curPortal) !== -1) {
                $scope[key.replace($rootScope.curPortal + '_', '')] = val;
                console.log(key);
              }
            });
      });
  }];
