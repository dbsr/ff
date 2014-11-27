/*
 * name        : faq.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

module.exports = function() {
  return {
    items: {},
    addFaqItem: function(key, value) {
      var m = key.match(/([0-9]+)_(.*)/),
          idx = parseInt(m[1]),
          qa = m[2];
      if(!this.items.idx) {
        this.items[idx] = {};
      }
      this.items[idx][qa] = value;
    }
  };
};
