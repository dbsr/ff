/*
 * name        : dynamic_size.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

module.exports = [
  '$window',
  'subscribers',
  function($window, subscribers) {
    return {
      link: function(scope, element, attrs) {
        var observer = new subscribers.Observer(
            function() {
              return {width: $window.innerWidth, height: $window.innerHeight, x: $window.scrollX, y: $window.scrollY};
            });
        angular.element($window).bind('resize', function() {
          observer.notify();
          scope.$apply();
        });
        observer.notify();
        subscribers.resizeEvent = observer;
      }
    };
  }];
