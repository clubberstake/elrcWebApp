app.controller('newPodcastController', ['$scope','newPodcastService', '$log', '$window',
    function ($scope ,newPodcastService, $location,  $log, $window) {

  var vm = $scope;
 newPodcastService.getNewPodcastInfo();

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


app.factory('newPodcastService', ['UrlService', function (UrlService) {

    var getNewPodcastInfo = function () {
         UrlService.getNewPodcastInfo().then(function(promise) {
            console.log(promise.data);
        })
    };

    return {
        getNewPodcastInfo: getNewPodcastInfo
    }

}]);


