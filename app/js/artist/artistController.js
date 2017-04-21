app.controller('ArtistController', ['$scope', 'ArtistService', '$log', '$window', '$sce',
    function($scope, ArtistService, $log, $window, $sce) {
        var vm = $scope;

        ArtistService.getArtistPage().then(function(promise) {
            $scope.artists = promise.data;
            var i = 0;
            for (i = 0; i < $scope.artists.length; i++){
                 $scope.artists[i].djImage = $sce.trustAsResourceUrl($scope.artists[i].djImage);
            }
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