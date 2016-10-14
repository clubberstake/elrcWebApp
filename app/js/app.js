var app = angular.module('elrcWebApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'app/js/home/home.html',
		controller: 'HomeController'
	})
	.when('/podcast', {
			templateUrl: 'app/js/podcast/podcast.html',
			controller: 'PodcastController'
	})
	.when('/login', {
			templateUrl: 'app/js/login/login.html',
			controller: 'LoginController'
	})
		.when('/archive', {
			templateUrl: 'app/js/archive/archive.html',
			controller: 'ArchiveController'	
		}).otherwise({
			redirectTo: '/home'
		});
}]);
