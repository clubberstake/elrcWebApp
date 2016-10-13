var app = angular.module('elrcWebApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
		templateUrl: 'app/js/home/home.html',
		controller: 'HomeController'
	})
		
		.otherwise({
            redirectTo: '/home'
        });
}]);