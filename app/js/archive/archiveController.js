app.controller('ArchiveController', ['$scope', 'ArchiveService', '$log', '$window',
    function($scope, ArchiveService, $log, $window) {
        var vm = $scope;

       $scope.archive = ArchiveService.getArchivePodcasts();

        vm.filter = function(key) {
            $log.log('Requested filtering on key: "' + key + '"');
            $window.alert('Requested filtering on key: "' + key + '"');
        };
    }
]);

app.factory('ArchiveService', ['UrlService', function(UrlService) {
    var getArchivePodcasts = function() {
        UrlService.getArchivePodcasts().then(function(promise) {
            console.log(promise.data);
            return promise.data;
        })
    };
    return {
        getArchivePodcasts: getArchivePodcasts
    }
    
}]);