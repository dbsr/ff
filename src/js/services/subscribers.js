/*
 * name        : subscribers.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

module.exports = function() {
  var Observer = function(doNotify) {
    var self = this;
    self.doNotify = doNotify;
    self.queue = [];
    self.subscribe = function(subscriber) {
      self.queue.push(subscriber);
      self.notify();
    };

    self.notify = function() {
      var args = self.doNotify();
      self.queue.forEach(function(subscriber) {
        subscriber(args);
      });
    };
  };
  var notifiers = {};
  return {
    create: function(name, doNotify) {
      notifiers[name] = new Observer(doNotify);
    },
    notifiers: notifiers
  };
};
