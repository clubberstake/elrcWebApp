app.controller('PodcastController', ['$scope', 'PodcastService', '$log', '$window',
    function($scope, PodcastService, $log, $window) {
        var vm = $scope;

        PodcastService.getShowPage();

        vm.filter = function(key) {
            $log.log('Requested filtering on key: "' + key + '"');
            $window.alert('Requested filtering on key: "' + key + '"');
        };
    }
]);

app.factory('PodcastService', ['UrlService', function(UrlService) {
    var getShowPage = function() {
        UrlService.getShowPage().then(function(promise) {
            console.log(promise.data);
            console.log(promise.data.show_id);
            console.log(promise.data.show_name);
            console.log(promise.data.show_desc);
            console.log(promise.data.show_image);
            console.log(promise.data.dj_name);
            console.log(promise.data.embedded_url);
            console.log(promise.data.podcast_title);
            console.log(promise.data.podcast_decs);
        })
    };

    return {
        getShowPage: getShowPage
    }
    
}]);