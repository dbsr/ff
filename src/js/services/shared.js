/*
 * name        : shared.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

module.exports = [
  '$location',
  function($location) {
    return {
      getCurPortal: function() {
        var pathSplit = $location.path().split('/');
        return pathSplit.length > 0 ? pathSplit[1] : false;
      }
    };
  }];
