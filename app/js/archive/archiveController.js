app.controller('ArchiveController', ['$scope', 'ArchiveService', '$log', '$window',
  function($scope, ArchiveService, $log, $window) {
    var vm = $scope;

    ArchiveService.get().then(function(response) {
      $log.log('ArchiveService result:', response.data);
    });

    vm.filter = function(key) {
      $log.log('Requested filtering on key: "' + key + '"');
      $window.alert('Requested filtering on key: "' + key + '"');
    };
  }
]);

app.factory('ArchiveService', ['$http', function($http) {
  var service = {
    get: get
  };

  return service;

  /////

  function get() {
    return $http.get('app/JSON/archiveJSON.json');
  };
}]);
