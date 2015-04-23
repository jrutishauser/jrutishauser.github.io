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
	  ;

    $urlRouterProvider.otherwise('/');
  })
;
