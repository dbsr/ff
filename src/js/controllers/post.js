/*
 * name        : post.js
 * author      : Daan Mathot (dydrmntion@gmail.com)
 * license     : see LICENSE
 */

/* jshint node: true */
'use strict';



module.exports = [
  '$scope',
  '$routeParams',
  '$location',
  '$anchorScroll',
  '$window',
  'getPost',
  function($scope, $routeParams, $location, $anchorScroll, $window, getPost) {
    var slug = $routeParams.slug || '';
    getPost(slug)
      .then(function(post) {
        $scope.post = post.post;
        var date = new Date($scope.post.publication_date);
        $scope.post.date = date.toDateString();
        if(post.next) {
          $scope.next = '/news/' + post.next;
        }
        if(post.prev) {
          $scope.prev = '/news/' + post.prev;
        }
        if(slug.length) {
          var $portals = $('.portals'),
              topY = $portals.position().top,
              height = $portals.height();
          if($window.innerWidth < 540) {
            $location.hash('post');
            $anchorScroll();
          } else if($window.innerWidth < 1024) {
            $window.scrollTo(0, topY);
          } else {
            $window.scrollTo(0, topY - 64);
          }
        }
      });
  }];
