/*
 * name        : top_button.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';


module.exports = [
  'eventObservers',
  function(eventObservers) {
    return {
      link: function(scope, element, attrs) {
        eventObservers.resize.subscribers.push(
            function(win) {
              var posRight = null,
                  width = win.innerWidth;
              if(width > 1023) {
                var contentWidth = (width * 0.7) > 1024 ? 
                  1024 : width * 0.7;
                posRight = contentWidth < 1024 ? 
                  '15%' : (width - 1024) * 0.5 + 'px';
              } else if (width > 540) {
                posRight = width * 0.05;
              }
              element.css('right',posRight);
            });
      }
    };
  }];

