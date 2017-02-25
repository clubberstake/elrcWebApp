app.controller('LoginController', ['$scope', 'LoginService', '$log', '$window', '$location',
    function ($scope, LoginService, $log, $window, $location) {


        LoginService.getLoginInfo().then(function (promise) {
            console.log("vm: " + promise);
            $scope.title = promise.data.title;
        });

    }]);


app.factory('LoginService', ['UrlService', function (UrlService) {

    var getLoginInfo = function () {
        return UrlService.getLoginInfo();
    };

    return {
        getLoginInfo: getLoginInfo
    }
}]);