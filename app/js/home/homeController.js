app.controller('HomeController', ['$scope', 'HomeService', '$log', '$window', '$sce',
    function ($scope, HomeService, $log, $window, $sce) {
        var vm = $scope;

        HomeService.getShowPage().then(function (promise) {
            $scope.shows = promise.data;
            var i = $scope.shows.length;
            $scope.mainFeaturedTitle = $scope.shows[0].podcastTitle;
            $scope.mainFeatured = $sce.trustAsResourceUrl($scope.shows[0].embeddedURL);
            $scope.mainFeaturedDesc = $scope.shows[0].podcastDesc;
            $scope.bottomLeftTitle = $scope.shows[1].podcastTitle;
            $scope.bottomLeftFeatured = $sce.trustAsResourceUrl($scope.shows[1].embeddedURL);
            $scope.bottomMiddleTitle = $scope.shows[2].podcastTitle;
            $scope.bottomMiddleFeatured = $sce.trustAsResourceUrl($scope.shows[2].embeddedURL);
            $scope.bottomRightTitle = $scope.shows[3].podcastTitle;
            $scope.bottomRightFeatured = $sce.trustAsResourceUrl($scope.shows[3].embeddedURL);
            console.log($scope.shows);
        });

        vm.filter = function (key) {
            $log.log('Requested filtering on key: "' + key + '"');
            $window.alert('Requested filtering on key: "' + key + '"');
        };
    }
]);

app.factory('HomeService', ['UrlService', function (UrlService) {
    var getShowPage = function () {
        return UrlService.getShowPage();
    };
    return {
        getShowPage: getShowPage
    }
}]);