app.controller('newArtistController', ['$scope', 'newArtistService', '$log', '$window', '$sce',
    function($scope, newArtistService, $log, $window, $sce) {

        var vm = $scope;
        newArtistService.getArtistPage().then(function(promise) {
            $scope.artists = promise.data;
            var i = 0;
            for (i = 0; i < $scope.artists.length; i++){
                 $scope.artists[i].djImage = $sce.trustAsResourceUrl($scope.artists[i].djImage);
            }
            console.log($scope.artists);
        })

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



app.controller('chooseArtist', function($scope){
    var dropdown = document.getElementById(dropdown);
    var nameField = document.getElementById(nameField);

    
});

app.factory('newArtistService', ['UrlService', function(UrlService) {

    var getArtistPage  = function() {
        return UrlService.getArtistPage ();
    };

    var postNewArtistInfo = function(someJsonData) {
        return UrlService.postNewArtistInfo();
    };

    return {
        getArtistPage : getArtistPage ,
        postNewArtistInfo: postNewArtistInfo,
    }

}]);