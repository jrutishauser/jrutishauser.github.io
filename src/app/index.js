'use strict';

angular.module('jrutishausergithubio', ['ngAnimate', 'ngSanitize', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
		controllerAs: 'main'
      })
	  .state('about', {
	  	url: '/about',
	  	templateUrl: 'app/about/about.html'
	  	})
	  .state('hausbrewer', {
	  	url: '/hausbrewer',
	  	templateUrl: 'app/hausbrewer/hausbrewer.html'
	  	})
	  .state('susannabot', {
	  	url: '/susannabot',
	  	templateUrl: 'app/susannabot/susannabot.html'
	  	})
	  .state('colorclock', {
	  	url: '/colorclock',
	  	templateUrl: 'app/colorclock/colorclock.html'
	  	})
	  .state('work', {
	 	url: '/work',
	 	templateUrl: 'app/work/work.html'
	 	})
	  .state('blog', {
	  	url: '/blog',
	  	templateUrl: 'app/blog/blog.html',
		controller: 'BlogCtrl',
		controllerAs: 'blog'
	  })
	 .state('social', {
	 	url: '/social',
	 	templateUrl: 'app/social/social.html'
	 })
	  ;
    $urlRouterProvider.otherwise('/');
  })
;
