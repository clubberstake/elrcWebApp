app.controller('PodcastController', ['$scope', 'PodcastService', '$log', '$window', '$sce',
    function($scope, PodcastService, $log, $window, $sce) {
        var vm = $scope;
       
        PodcastService.getShowPage().then(function(promise) {
            $scope.shows = promise.data;
            var i = 0;
            for (i = 0; i < $scope.shows.length; i++){
                $scope.shows[i].showImage = $sce.trustAsResourceUrl($scope.shows[i].showImage);
                $scope.shows[i].embeddedURL = $sce.trustAsResourceUrl($scope.shows[i].embeddedURL);
            }
            console.log($scope.shows);
        });

        vm.filter = function(key) {
            $log.log('Requested filtering on key: "' + key + '"');
            $window.alert('Requested filtering on key: "' + key + '"');
        };
    }
]);



app.factory('PodcastService', ['UrlService', function(UrlService) {
    var getShowPage = function() {
        return UrlService.getShowPage();
    };
    return {
        getShowPage: getShowPage
    }
    
}]);
