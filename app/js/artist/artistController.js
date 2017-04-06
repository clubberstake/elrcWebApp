app.controller('ArtistController', ['$scope', 'ArtistService', '$log', '$window',
    function($scope, ArtistService, $log, $window) {
        var vm = $scope;

       $scope.artists = ArtistService.getArtistPage();

        vm.filter = function(key) {
            $log.log('Requested filtering on key: "' + key + '"');
            $window.alert('Requested filtering on key: "' + key + '"');
        };
    }
]);

app.factory('ArtistService', ['UrlService', function(UrlService) {
    var getArtistPage = function() {
        UrlService.getArtistPage().then(function(promise) {
            $scope.djName = promise.data[0]
            console.log(promise.data);
            return promise.data;
        })
    };

    return {
        getArtistPage: getArtistPage
    }
}]);