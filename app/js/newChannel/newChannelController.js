app.controller('newChannelController', ['$scope', '$location', 'newChannelService',
    function ($scope, $location, HomeService) {

        HomeService.get().then(function (data) {
            $scope.title = data.data.title;
            $scope.subTitle = data.data.subTitle;
            $scope.bodyText = data.data.bodyText;
            $scope.conclusion = data.data.conclusion;
        });

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

}]);


function adminProc(evt, adminProc) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(adminProc).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


function noArtist()
{
  alert("A new artist must be created before continuing.");
}

function noChannel()
{
  alert("A new channel must be created before continuing.");
}