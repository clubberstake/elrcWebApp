app.factory('UrlService', ['$http', function($http) {

    var baseUrl = 'http://localhost:8080/';

    var getArchivePodcasts = function(name) {
        console.log(baseUrl + 'archive/all_podcasts');

        var promise = $http.get(baseUrl + 'archive/all_podcasts').success(function(data) {
            return data;
        });

        console.log(promise);
        return promise;
    };

    var getArtist = function() {}

    return {
        getArchivePodcasts: getArchivePodcasts,
        getArtist: getArtist
    }
}]);

/*
        var adminDeleteAccountDelete = function(id, lastName) {
            var promise = $http.delete(baseUrl + 'DeleteAccount' + '/?id=' + id + '&lastName=' + lastName).success(function(data) {
                return data;
            });

            return promise;
        };

        var valuesControllerSamplePost = function(student) {
            var promise = $http.post(baseUrl + 'values', JSON.stringify(student)).success(function(data) {
                return data;
            });

            return promise;
        };*/