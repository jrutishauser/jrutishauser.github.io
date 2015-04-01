'use strict';

angular.module('jrutishausergithubio', ['ngSanitize', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
	  .state('home.about', {
	  	url: '/about',
	  	templateUrl: 'app/about/about.html',
	  	controller: 'AboutCtrl',
	  	controllerAs: 'about'
	  })
	  .state('home.work', {
	  	url: '/work',
	  	templateUrl: 'app/work/work.html',
	  	controller: 'WorkCtrl',
	  	controllerAs: 'work'
	  })
	  .state('home.blog', {
	  	url: '/blog',
	  	templateUrl: 'app/blog/blog.html',
	  	controller: 'BlogCtrl',
	  	controllerAs: 'blog'
	  })
	  ;//end states
    $urlRouterProvider.otherwise('/');
  })
;
