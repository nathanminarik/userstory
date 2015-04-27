angular.module('appRoutes', ['ngRoute'])


.config(function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/', {
			templateUrl: 'app/views/pages/home.html',
		})
		.when('/test', {
			templateUrl: 'app/views/pages/test.html',
		})

	$locationProvider.html5Mode(true);

})