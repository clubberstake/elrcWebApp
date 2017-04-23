app.controller('newChannelController', ['$scope', 'newChannelService', '$log', '$window',
    function ($scope, newChannelService, $location, $log, $window) {

        var vm = $scope;
        newChannelService.getNewShowInfo();

        vm.filter = function (key) {
            $log.log('Requested filtering on key: "' + key + '"');
            $window.alert('Requested filtering on key: "' + key + '"');
        }

        vm.isEditingArtist = false;
        vm.checkOKButton = function () {
            return vm.isEditingArtist ? "Update" : "Create";
        };

       var jsonData = {
           "showName": "Generic Name",
           "showDesc": "Generic Description",
           "artistNames": "Multiple Artist Names",
           "showImage":"image.jpg"
       };

          newChannelService.postNewShowInfo(jsonData);

    }]);


app.factory('newChannelService', ['UrlService', function (UrlService) {

    var getNewShowInfo = function () {
        UrlService.getNewShowInfo().then(function (promise) {
            console.log(promise.data);
        })
    };

    var postNewShowInfo = function(someJsonData){
        UrlService.postNewShowInfo(someJsonData);
    };

    return {
        getNewShowInfo: getNewShowInfo,
        postNewShowInfo:postNewShowInfo
    }

}]);

app.controller('ctrlMonth', function ($scope) {
    $scope.months = ['Artist 1', 'Artist 2', 'Artist 3', 'Artist 4', 'Artist 5', 'Artist 6', 'Artist 7', 'Artist 8', 'Artist 9', 'Artist 10', 'Artist 11', 'Artist 12'];
    $scope.selected = [];
    $scope.move = function (index) {
        $scope.selected.push($scope.months[index]);
        $scope.months.splice(index, 1);
    };
    $scope.moveBack = function (index) {
        $scope.months.push($scope.selected[index]);
        $scope.selected.splice(index, 1);
    };

     function ClearText(){
         document.getElementsByClassName("clearable").reset();
     }
});


