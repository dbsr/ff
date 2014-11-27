/*
 * name        : route_transition.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

module.exports = [
  function () {
    return {
      restrict: 'A',
      scope: true,
      link: function (scope, el, attrs) {
        scope.$on('$routeChangeStart', function () {
          el.addClass('routeTransition-out');
          el.removeClass('routeTransition-set');
        });
        scope.$on('$routeChangeSuccess', function () {
          el.addClass('routeTransition-set');
          el.removeClass('routeTransition-out');
        });
      }
    };
  }];
