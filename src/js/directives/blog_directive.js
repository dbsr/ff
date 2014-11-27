/*
 * name        : blog_directive.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';


module.exports = [
  function() {
    return {
      link: function(scope, element, attrs) {
        var $portals = $('.portals'),
            position = $portals.position(),
            scrollTo = position.top;
      }
    };
  }
];

