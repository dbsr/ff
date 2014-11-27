'use strict';

// Create our application instance
var app = angular.module('biApp', [
  'ngSanitize',
  'ngRoute',
  'angularSmoothscroll',
  'btford.markdown',
  'angulartics',
  'angulartics.google.analytics',
  'ngSocial'
]);


// Set up routing
app.config(function ($routeProvider, $locationProvider, $analyticsProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/index_tpl',
        controller: 'baseCtrl',
        pageTitle: 'Welcome'
      })
      .when('/investors', {
        templateUrl: 'partials/investors_tpl',
        controller: 'baseCtrl',
        pageTitle: 'Investors'
      })
      .when('/students', {
        templateUrl: 'partials/students_tpl',
        controller: 'baseCtrl',
        pageTitle: 'Students'
      })
      .when('/universities', {
        templateUrl: 'partials/universities_tpl',
        controller: 'baseCtrl',
        pageTitle: 'Universities'
      })
      .when('/highschools', {
        templateUrl: 'partials/highschools_tpl',
        controller: 'baseCtrl',
        pageTitle: 'High Schools'
      })
      .when('/contact', {
        templateUrl: 'partials/contact_tpl',
        controller: 'baseCtrl',
        pageTitle: 'Contact'
      });
    $locationProvider.html5Mode(true);
  });

app.run([

    '$http',
    '$timeout',
    '$rootScope',
    '$location',
    '$anchorScroll',
    '$route',
    'httpDefer',
    function($http, $timeout, $rootScope, $location, $anchorScroll, $route, httpDefer) {
      // pre-populate pageData
      $rootScope.pageData = {};
      $timeout(function() {
        var promise = httpDefer.get('/api/page_data/retrieve');
        promise.then(function(pages) {
          $rootScope.pageData = pages;
        });
      }, 500);
      $rootScope.metaDescription = '';
      $rootScope.$on('$routeChangeSuccess', function() {
        // set current page title
        var pageTitle = $route.current.pageTitle || '?';
        $rootScope.pageTitle = pageTitle;
        // wait for digest before anchorscroll
        $timeout(function() {
          $anchorScroll();
        });
      });
    }
  ]);
