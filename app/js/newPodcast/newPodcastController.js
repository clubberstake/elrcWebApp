app.controller('newPodcastController', ['$scope', 'newPodcastController', '$log', '$window',
    function ($scope, newPodcastService, $location, $log, $window) {

        var vm = $scope;
        newPodcastService.getNewPodcastInfo();

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
        UrlService.getNewPodcastInfo().then(function (promise) {
            console.log(promise.data);
        })
    };

    var postNewPodcastInfo = function (someJsonData) {
        UrlService.postNewPodcastInfo(someJsonData);
    };

    return {
        getNewPodcastInfo: getNewPodcastInfo,
        postNewPodcastInfo: postNewPodcastInfo
    }

}]);





