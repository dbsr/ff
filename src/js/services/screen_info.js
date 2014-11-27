/*
 * name        : screen_info.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

module.exports = [
  function() {
    return {
      getDevice: function() {
        var screenDevice = angular.element('body').css('content');
        return screenDevice;
      }
    };
  }];
