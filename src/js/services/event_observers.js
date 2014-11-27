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
    var Observer = function(evtName) {
      var self = this;
      self.name = evtName;
      self.subscribers = [];
  
      self.notify = function() {
        if(!self.subscribers.length) {
          return;
        }
        angular.forEach(self.subscribers, function(subscriber) {
          subscriber($window);
        });
      };
      angular.element($window).bind(self.name, self.notify);
    };
    var observers = {};
    angular.forEach(['scroll', 'resize'], 
        function(evtName) {
          observers[evtName] = new Observer(evtName);
        });
    return observers;
  }];
