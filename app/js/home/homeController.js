app.controller('HomeController', ['$scope', '$location', 'HomeService',
    function($scope, $location, HomeService, UrlService) {

        HomeService.get().then(function(data) {
            $scope.title = data.data.title;
            $scope.subTitle = data.data.subTitle;
            $scope.bodyText = data.data.bodyText;
            $scope.conclusion = data.data.conclusion;
        });
    }
]);

app.factory('HomeService', ['$http', function($http) {

    var getDataFromJson = function() {
        var promise = $http.get('app/JSON/home.json').success(function(data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);