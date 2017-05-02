app.controller('ArchiveController', ['$scope', 'ArchiveService', '$log', '$window', '$sce',
    function($scope, ArchiveService, $log, $window, $sce) {
        var vm = $scope;

      ArchiveService.getArchivePodcasts().then(function(promise){
            $scope.archive = promise.data;
            var i = 0;
            for (i = 0; i < $scope.archive.length; i++){
                 $scope.archive[i].podcastThumbnail = $sce.trustAsResourceUrl($scope.archive[i].podcastThumbnail);
            }
            console.log($scope.archive);
      });

        vm.filter = function(key) {
            $log.log('Requested filtering on key: "' + key + '"');
            $window.alert('Requested filtering on key: "' + key + '"');
            if(key == 'newest-to-oldest')
            {
             for(i = $scope.archive.length -1; i > 0; i++)
              {
                 $scope.archive[i].podcastThumbnail = $sce.trustAsResourceUrl($scope.archive[i].podcastThumbnail);
              }
            }
            else{
                 for (i = 0; i < $scope.archive.length; i++){
                 $scope.archive[i].podcastThumbnail = $sce.trustAsResourceUrl($scope.archive[i].podcastThumbnail);
            }
            }
         
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
