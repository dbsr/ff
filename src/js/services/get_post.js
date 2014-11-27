/*
 * name        : post.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

module.exports = [
  '$http',
  '$q',
  function($http, $q) {
    return function(slug) {
        var defer = $q.defer();
        slug = slug || '';
        $http.get('/api/post/' + slug)
          .success(function(post) {
            defer.resolve(post);
          });
        return defer.promise;
      };
  }];
