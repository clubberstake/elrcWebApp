app.controller('HomeController', ['$scope', 'HomeService', '$log', '$window',
    function($scope, HomeService, $log, $window) {
        var vm = $scope;

        HomeService.getHomepage();

        vm.filter = function(key) {
            $log.log('Requested filtering on key: "' + key + '"');
            $window.alert('Requested filtering on key: "' + key + '"');
        };
    }
]);

app.factory('HomeService', ['UrlService', function(UrlService) {
    var getHomepage = function() {
        UrlService.getHomepage().then(function(promise) {
            console.log(promise.data);
            console.log(promise.data.id);
            console.log(promise.data.title);
            console.log(promise.data.desc);
            console.log(promise.data.embedded_url);
        })
    };

    return {
        getHomepage: getHomepage
    }
}]);