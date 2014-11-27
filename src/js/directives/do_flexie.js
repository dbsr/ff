/*
 * name        : do_flexie.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

module.exports = [
  '$window',
  '$rootScope',
  function($window, $rootScope) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        if($('html').hasClass('no-flexbox')) {
          $rootScope.$watch('tplLoaded', function(nVal) {
            var val = nVal || null;
            if(val) {
              $('<script>', {
                type: 'text/javascript',
                src: '/vendor/flexie/src/flexie.js'
              }).appendTo('body');

            }
          });
        }
      }
    };
  }
];
