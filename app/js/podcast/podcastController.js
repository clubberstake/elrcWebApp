app.controller('PodcastController', ['$scope', 'PodcastService', '$log', '$window',
    function($scope, PodcastService, $log, $window) {
        var vm = $scope;

        $scope.show = PodcastService.getShowPage();

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
            return promise.data;
        })
    };
    return {
        getShowPage: getShowPage
    }
    
}]);