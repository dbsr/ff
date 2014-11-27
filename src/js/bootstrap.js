/*
 * name        : bootstrap.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

module.exports = function(app, services, controllers, directives) {
  angular.forEach({
    service: services,
    controller: controllers,
    directive: directives
  }, function(values, key) {
    angular.forEach(values, function(component, name) {
      app[key](name, component);
    });
  });
};
