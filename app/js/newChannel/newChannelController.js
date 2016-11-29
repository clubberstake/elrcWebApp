app.controller('newChannelController', ['$scope', '$location', 'newChannelService',
    function ($scope, $location, HomeService) {

        HomeService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.subTitle = data.data.subTitle;
            $scope.bodyText = data.data.bodyText;
            $scope.conclusion = data.data.conclusion;
        });

        $scope.isEditingArtist = false;
        $scope.checkOKButton = function(){
         return $scope.isEditingArtist ? "Update" : "Create";
        };

    }]);


app.factory('newChannelService', ['$http', function ($http) {

    var getDataFromJson = function () {
        var promise = $http.get('app/JSON/newChannel.json').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        get: getDataFromJson
    }

}])

 app.controller('ctrlMonth', function($scope) {  
  $scope.months = ['Artis 1','Artist 2','Artist 3','Artist 4','Artist 5','Artist 6','Artist 7','Artist 8','Artist 9','Artist 10','Artist 11','Artist 12'];  
  $scope.selected = [];
  $scope.move = function(index)
  {
    $scope.selected.push($scope.months[index]);
    $scope.months.splice(index,1);
  };
  $scope.moveBack = function(index)
  {
    $scope.months.push($scope.selected[index]);
    $scope.selected.splice(index,1);
  };
 }); 


