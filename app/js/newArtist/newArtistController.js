app.controller('newArtistController', ['$scope','newArtistService', '$log', '$window',
    function ($scope ,newArtistService, $location,  $log, $window) {

  var vm = $scope;
 newArtistService.getNewArtistInfo();

        vm.filter = function(key){
              $log.log('Requested filtering on key: "' + key + '"');
              $window.alert('Requested filtering on key: "' + key + '"');
        }

        vm.isEditingArtist = false;
        vm.checkOKButton = function(){
         return vm.isEditingArtist ? "Update" : "Create";
        };



    // },
    // // function($scope, $location, HomeService){
    // //      HomeService.get().then(function (data) {
    // //         $scope.title = data.data.title;
    // //         $scope.subTitle = data.data.subTitle;
    // //         $scope.bodyText = data.data.bodyText;
    // //         $scope.conclusion = data.data.conclusion;
    // //     });
    }]);


app.factory('newArtistService', ['UrlService', function (UrlService) {

    var getNewArtistInfo = function () {
         UrlService.getNewArtistInfo().then(function(promise) {
            console.log(promise.data);
        })
    };

    return {
        getNewArtistInfo: getNewArtistInfo
    }

}]);

