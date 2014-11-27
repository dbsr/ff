/*
 * name        : urlparse.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

module.exports = [
  '$location',
  function($location) {
    var url = $location.url(),
        params = {},
        rawParams = url.match(/[?&][^=]+=[^&]+/g);
    ['investors', 'students', 'highschools', 'universities'].forEach(
        function(portal) {
          if(url.indexOf('/' + portal) > -1) {
            params.curPortal = portal;
          }
        });

    if(rawParams) {
        rawParams.forEach(
          function(param) {
            var split = param.split('='),
                key = split[0].replace(/[&?]/, ''),
                val = split[1];
            params[key] = decodeURIComponent(val);
          });
    }
    return params;
  }
];
