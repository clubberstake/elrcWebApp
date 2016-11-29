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
		})
		.when('/newChannel', {
			templateUrl: 'app/js/newChannel/newChannel.html',
			controller: 'newChannelController'	
		})
		.when('/newPodcast', {
			templateUrl: 'app/js/newPodcast/newPodcast.html',
			controller: 'newPodcastController'	
		})
		.when('/newArtist', {
			templateUrl: 'app/js/newArtist/newArtist.html',
			controller: 'newArtistController'	
		})

		.when('/artist', {
			templateUrl: 'app/js/artist/artist.html',
			controller: 'ArtistController'	
		})
		.otherwise({
			redirectTo: '/home'
		});
}]);
