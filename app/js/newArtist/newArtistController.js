app.controller('newArtistController', ['$scope', 'newArtistService', '$log', '$window',
    function($scope, newArtistService, $location, $log, $window) {

        var vm = $scope;
        newArtistService.getNewArtistInfo();

        vm.filter = function(key) {
            $log.log('Requested filtering on key: "' + key + '"');
            $window.alert('Requested filtering on key: "' + key + '"');
        }

        vm.isEditingArtist = false;
        vm.checkOKButton = function() {
            return vm.isEditingArtist ? "Update" : "Create";
        };

        var jsonData = {
            "firstName": "John",
            "lastName": "Doe",
            "djName":"Doe Master Skratch",
            "artistDesc": "Generic Description",
            "artistImage":"image"
        };

        newArtistService.postNewArtistInfo(jsonData);
    }
]);


app.factory('newArtistService', ['UrlService', function(UrlService) {

    var getNewArtistInfo = function() {
        UrlService.getNewArtistInfo().then(function(promise) {
            console.log(promise.data);
        })
    };

    var postNewArtistInfo = function(someJsonData) {
        UrlService.postNewArtistInfo(someJsonData);
    };

    return {
        getNewArtistInfo: getNewArtistInfo,
        postNewArtistInfo: postNewArtistInfo,
    }

}]);