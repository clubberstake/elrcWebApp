app.controller('ArchiveController', ['$scope', 'ArchiveService', '$log', '$window',
    function($scope, ArchiveService, $log, $window) {
        var vm = $scope;

        ArchiveService.getArchivePodcasts();

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
            console.log(promise.data.id);
            console.log(promise.data.podcastName);
            console.log(promise.data.podcastThumbnail);
        })
    };

    return {
        getArchivePodcasts: getArchivePodcasts
    }
    
}]);