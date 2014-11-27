/*
 * name        : post.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';

module.exports = [
  '$location',
  'getPost',
  function($routeParams, getPost) {
    return {
      templateUrl: '/partials/post_tpl',
      link: function(scope, element, attrs) {
        scope.wtf2 = 'asd';
        var slug = $routeParams.slug || '';
        getPost(slug)
          .then(function(post) {
            scope.post = post;
            scope.wtf = post.status;
          });
      }
    };
  }];
