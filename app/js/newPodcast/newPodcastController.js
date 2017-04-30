app.controller('newPodcastController', ['$scope', 'newPodcastService', '$log', '$window', '$sce',
    function ($scope, newPodcastService, $log, $window, $sce) {

        var vm = $scope;
        newPodcastService.getArchivePodcasts().then(function(promise) {
            $scope.archive = promise.data;
            var i = 0;
            for (i = 0; i < $scope.archive.length; i++){
                 $scope.archive[i].podcastName = $sce.trustAsResourceUrl($scope.archive[i].podcastName);
            }
            console.log($scope.archive);
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

    var getArchivePodcasts = function () {
       return UrlService.getArchivePodcasts();
    };

    var postNewPodcastInfo = function (someJsonData) {
        UrlService.postNewPodcastInfo();
    };

    return {
        getArchivePodcasts: getArchivePodcasts,
        postNewPodcastInfo: postNewPodcastInfo
    }

}]);





