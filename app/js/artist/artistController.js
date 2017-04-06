app.controller('ArtistController', ['$scope', 'ArtistService', '$log', '$window',
    function($scope, ArtistService, $log, $window) {
        var vm = $scope;

        ArtistService.getArtistPage().then(function(promise) {
            $scope.artists = promise.data;
            console.log($scope.artists);
        });

        vm.filter = function(key) {
            $log.log('Requested filtering on key: "' + key + '"');
            $window.alert('Requested filtering on key: "' + key + '"');
        };
    }
]);

app.factory('ArtistService', ['UrlService', function(UrlService) {
    var getArtistPage = function() {
        return UrlService.getArtistPage();
    };

    return {
        getArtistPage: getArtistPage
    }
}]);