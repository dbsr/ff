/*
 * name        : test_service.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';


module.exports = [
  '$q',
  '$timeout',
  function($q, $timeout) {
    var defer = $q.defer();
    $timeout(
      function() {
        defer.resolve(+new Date());
      }, 5000);
    return {
      data: defer.promise
    };
  }];
