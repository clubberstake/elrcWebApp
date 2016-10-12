app.controller('ArchiveController', ['$scope', '$location', 'ArchiveService',
    function ($scope, $location, HomeService) {

        HomeService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.subTitle = data.data.subTitle;
            $scope.bodyText = data.data.bodyText;
            $scope.conclusion = data.data.conclusion;
        });

    }]);


app.factory('ArchiveService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('app/JSON/archiveJSON.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}]);