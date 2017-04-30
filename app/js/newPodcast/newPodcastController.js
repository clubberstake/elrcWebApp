app.controller('newPodcastController', ['$scope', 'newPodcastService', '$log', '$window', '$sce',
    function ($scope, newPodcastService, $location, $log, $window, $sce) {

        var vm = $scope;
        newPodcastService.getNewPodcastInfo().then(function(promise) {
            $scope.artists = promise.data;
            var i = 0;
            for (i = 0; i < $scope.artists.length; i++){
                 $scope.artists[i].djImage = $sce.trustAsResourceUrl($scope.artists[i].djImage);
            }
            console.log($scope.artists);
        });

        vm.filter = function (key) {
            $log.log('Requested filtering on key: "' + key + '"');
            $window.alert('Requested filtering on key: "' + key + '"');
        }

        vm.isEditingPodcast = false;
        vm.checkOKButton = function () {
            return vm.isEditingPodcast ? "Update" : "Create";
        };

        var jsonData = {
            "podcastTitle": "Podcast Title",
            "podcastURL": "Podcast URL",
            "podcastDescription": "Podcast Description",
            "showID": "1"
        };

        newPodcastService.postNewPodcastInfo(jsonData);

    }]);


app.factory('newPodcastService', ['UrlService', function (UrlService) {

    var getNewPodcastInfo = function () {
       return UrlService.getNewPodcastInfo();
    };

    var postNewPodcastInfo = function (someJsonData) {
        UrlService.postNewPodcastInfo();
    };

    return {
        getNewPodcastInfo: getNewPodcastInfo,
        postNewPodcastInfo: postNewPodcastInfo
    }

}]);





