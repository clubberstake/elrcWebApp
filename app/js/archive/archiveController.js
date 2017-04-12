app.controller('ArchiveController', ['$scope', 'ArchiveService', '$log', '$window',
    function($scope, ArchiveService, $log, $window) {
        var vm = $scope;

      ArchiveService.getArchivePodcasts().then(function(promise){
          $scope.archive = promise.data;
      });

        vm.filter = function(key) {
            $log.log('Requested filtering on key: "' + key + '"');
            $window.alert('Requested filtering on key: "' + key + '"');
        };
    }
]);

app.factory('ArchiveService', ['UrlService', function(UrlService) {
    var getArchivePodcasts = function() {
        return UrlService.getArchivePodcasts();
    };
    return {
        getArchivePodcasts: getArchivePodcasts
    }
    
}]);