/*
 * name        : subscribers.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

module.exports = [
  '$window',
  function($window) {
    var observers = {};
    angular.forEach(['scroll', 'resize'], 
        function(evtName) {
          observers[evtName] = [];
          angular.element($window).bind(evtName, 
            function(data) {
              var curEvtName = data.type;
              angular.forEach(observers[curEvtName],
                function(subscriber) {
                  subscriber($window);
                });
            });
        });
    return observers;
  }];
