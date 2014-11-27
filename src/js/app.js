'use strict';

var controllers = require('./controllers'),
    services = require('./services'),
    directives = require('./directives');

// Create our application instance
var app = angular.module('biApp', [
  'ngSanitize',
  'ngRoute',
  'angularSmoothscroll',
  'angulartics',
  'angulartics.google.analytics',
  'ngSocial'
]);

require('./bootstrap')(app, services, controllers, directives);


// Set up routing
app.config(function ($routeProvider, $locationProvider, $logProvider, $analyticsProvider, $sceDelegateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/index_tpl',
        controller: 'BaseCtrl',
        pageTitle: 'Welcome'
      })
      .when('/investors', {
        templateUrl: '/partials/investors_tpl',
        controller: 'BaseCtrl',
        pageTitle: 'Investors'
      })
      .when('/investors/form?/:form_height/:form_url*', {
        templateUrl: '/partials/investors_tpl',
        controller: 'BaseCtrl',
        pageTitle: 'Investors'
      })
      .when('/students', {
        templateUrl: '/partials/students_tpl',
        controller: 'BaseCtrl',
        pageTitle: 'Students'
      })
      .when('/students/form?/:form_height/:form_url*', {
        templateUrl: '/partials/students_tpl',
        controller: 'BaseCtrl',
        pageTitle: 'students'
      })
      .when('/universities', {
        templateUrl: '/partials/universities_tpl',
        controller: 'BaseCtrl',
        pageTitle: 'Universities'
      })
      .when('/universities/form?/:form_height/:form_url*', {
        templateUrl: '/partials/universities_tpl',
        controller: 'BaseCtrl',
        pageTitle: 'universities'
      })
      .when('/highschools', {
        templateUrl: '/partials/highschools_tpl',
        controller: 'BaseCtrl',
        pageTitle: 'High Schools'
      })
      .when('/highschools/form?/:form_height/:form_url*', {
        templateUrl: '/partials/highschools_tpl',
        controller: 'BaseCtrl',
        pageTitle: 'highschools'
      })
      .when('/about', {
        templateUrl: '/partials/about_tpl',
        controller: 'BaseCtrl',
        pageTitle: 'About'
      })
      .when('/about/form?/:form_height/:form_url*', {
        templateUrl: '/partials/about_tpl',
        controller: 'BaseCtrl',
        pageTitle: 'About'
      })
      .when('/form/:form_height/:form_url*', {
        templateUrl: '/partials/form_tpl',
        controller: 'FormCtrl',
        pageTitle: 'Form'
      })
      .when('/news/:slug', {
        templateUrl: '/partials/index_tpl',
        controller: 'BaseCtrl',
        pageTitle: 'News'
      })
      .when('/redirect/close', {
        templateUrl: '/partials/redirect_close_tpl'
      })
      .when('/investors/:custom_name', {
        templateUrl: '/partials/custom_tpl',
        controller: 'BaseCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });

app.run([
    '$timeout',
    '$rootScope',
    '$anchorScroll',
    '$route',
    'pageData',
    function($timeout, $rootScope, $anchorScroll, $route, pageData) {
      pageData
       .then(function(data) {
          $rootScope.faqItems = data.faqItems;
          $rootScope.pageData = data.pageData;
          $rootScope.custom = data.custom;
       });
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
