app.controller('ArtistController', ['$scope', '$location', 'ArtistService',
    function ($scope, $location, HomeService) {

        HomeService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.subTitle = data.data.subTitle;
            $scope.bodyText = data.data.bodyText;
            $scope.conclusion = data.data.conclusion;
        });

    }]);


app.factory('ArtistService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('app/JSON/artistJSON.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);