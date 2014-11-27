/*
 * name        : linkedin.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';


module.exports = function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs, ctrl) {
      var adjustment = Math.max(screen.width, 1980) / 1024,
          fontSize = 20 * adjustment;
      element.css('font-size', fontSize + 'px');
    }
  };
};
