app.controller('ArtistController', ['$scope', 'ArtistService', '$log', '$window',
    function($scope, ArtistService, $log, $window) {
        var vm = $scope;

        ArtistService.getArtistPage();

        vm.filter = function(key) {
            $log.log('Requested filtering on key: "' + key + '"');
            $window.alert('Requested filtering on key: "' + key + '"');
        };
    }
]);

app.factory('ArtistService', ['UrlService', function(UrlService) {
    var getArtistPage = function() {
        UrlService.getArtistPage().then(function(promise) {
            console.log(promise.data);
            console.log(promise.data.artist_id);
            console.log(promise.data.artist_name);
            console.log(promise.data.artist_desc);
            console.log(promise.data.dj_name);
            console.log(promise.data.dj_desc);
            console.log(promise.data.dj_image);
        })
    };

    return {
        getArtistPage: getArtistPage
    }
}]);