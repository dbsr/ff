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
            var widthHeight = {
                  width: win.innerWidth
                },
                attribute = 'font-size',
                mqContent = null;
            try {
              mqContent = element.css('content').split(',');
            } catch(e) {
            }
            if(!mqContent || mqContent.length < 2) {
              return;
            }
            var bSize = parseInt(mqContent[0].replace(/['"]/g, '')),
                bWidth = parseInt(mqContent[1].replace(/['"]/g, '')),
                diff = widthHeight.width / bWidth,
                newNum = bSize * diff;
            element.css(attribute, newNum.toString() + 'px');
          });
        eventObservers.resize.notify();
      }
    };
  }];
