/*
 * name        : dynamic_size.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

module.exports = [
  'eventObservers',
  function(eventObservers) {
    return {
      scope: {
        attribute: '@?',
      },
      link: function(scope, element, attrs) {
        eventObservers.resize.subscribers.push(
          function(win) {
            var width = win.innerWidth,
                bSize = element.data('base-font-size'),
                bWidth = width < 1024 ? 540 : 1024;
            if(!bSize) {
              bSize = element.css('font-size').replace('px', '');
              element.data('base-font-size', bSize);
            }
            var newSize = (bSize * (width / bWidth)) + 'px';
            console.log(newSize, bSize, width, bWidth);
            element.css('font-size', newSize);
          });
        eventObservers.resize.notify();
      }
    };
  }];
