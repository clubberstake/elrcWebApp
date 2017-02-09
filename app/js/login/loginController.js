app.controller('LoginController', ['$scope', 'LoginService', '$log', '$window', '$location',
    function ($scope, LoginService, $log, $window, $location) {

        //    LoginService.getLoginInfo().then(function (data) {
        //    $scope.title = data.data.title;
        //  });

        LoginService.getLoginInfo().then(function (promise) {
            console.log("vm: " + promise);
            $scope.title = promise.data.title;
        });

        // vm.filter = function (key) {
        //     $log.log('Requested filtering on key: "' + key + '"');
        //     $window.alert('Requested filtering on key: "' + key + '"');
        // };

    }]);


app.factory('LoginService', ['UrlService', function (UrlService) {

    var getLoginInfo = function () {
        return UrlService.getLoginInfo();
    };

    return {
        getLoginInfo: getLoginInfo
    }
}]);