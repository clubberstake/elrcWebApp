app.controller('HomeController', ['$scope', 'HomeService', '$log', '$window', '$sce',
    function($scope, HomeService, $log, $window, $sce) {
        var vm = $scope;

        HomeService.getHomepage().then(function(promise){
            $scope.shows = promise.data;
            console.log($scope.shows);
        });

        vm.filter = function(key) {
            $log.log('Requested filtering on key: "' + key + '"');
            $window.alert('Requested filtering on key: "' + key + '"');
        };
    }
]);

app.factory('HomeService', ['UrlService', function(UrlService) {
    var getHomepage = function() {
       return UrlService.getHomepage(); 
    };
    return {
        getHomepage: getHomepage
    }
}]);