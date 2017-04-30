app.factory('UrlService', ['$http', function ($http) {

    var baseUrl = 'http://localhost:8080/';

    var getNewArtistInfo = function (id) {
        console.log(baseUrl + 'artist/all_artists');

        var promise = $http.get(baseUrl + 'artist/all_artists').success(function (data) {
            return data;
        });

        return promise;
    };

    var postNewArtistInfo = function (user) {
        console.log(baseUrl + 'admin/newArtist');

        var promise = $http.post(baseUrl + 'admin/newArtist', JSON.stringify(user)).success(function (data) {
            console.log('Save was a success');
            return data;
        });

        return promise;
    };

    var getNewShowInfo = function (id) {
        console.log(baseUrl + 'admin/newShow');

        var promise = $http.get(baseUrl + 'admin/newShow').success(function (data) {
            return data;
        });

        return promise;
    };

    var postNewShowInfo = function (user) {
        console.log(baseUrl + 'admin/newShow');

        var promise = $http.post(baseUrl + 'admin/newShow', JSON.stringify(user)).success(function (data) {
            console.log('Save was a success');
            return data;
        });

        return promise;
    };

    var getNewPodcastInfo = function (id) {
        console.log(baseUrl + 'admin/newPodcast');

        var promise = $http.get(baseUrl + 'admin/newPodcast').success(function (data) {
            return data;
        });

        return promise;
    };

    var postNewPodcastInfo = function (user) {
        console.log(baseUrl + 'admin/newPodcast');

        var promise = $http.post(baseUrl + 'admin/newPodcast', JSON.stringify(user)).success(function (data) {
            console.log('Save was a success');
            return data;
        });

        return promise;
    };

    var getLoginInfo = function (id) {
        console.log(baseUrl + 'admin/login');

        var promise = $http.get(baseUrl + 'admin/login?title=AdminLogin').success(function (data) {
            return data;
        });

        return promise;
    };

    var getArchivePodcasts = function (name) {
        console.log(baseUrl + 'archive/all_podcasts');

        var promise = $http.get(baseUrl + 'archive/all_podcasts').success(function (data) {
            return data;
        });

        return promise;
    };

    var getShowPage = function (name) {
        console.log(baseUrl + 'shows/artistShow');

        var promise = $http.get(baseUrl + 'shows/artistShow').success(function (data) {
            return data;
        });

        return promise;
    };

    var getArtistPage = function (name) {
        console.log(baseUrl + 'artists/all_artists');

        var promise = $http.get(baseUrl + 'artists/all_artists').success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        getArchivePodcasts: getArchivePodcasts,
        getLoginInfo: getLoginInfo,
        getNewShowInfo: getNewShowInfo,
        postNewShowInfo: postNewShowInfo,
        getNewPodcastInfo: getNewPodcastInfo,
        postNewPodcastInfo: postNewPodcastInfo,
        getNewArtistInfo: getNewArtistInfo,
        postNewArtistInfo: postNewArtistInfo,
        getShowPage: getShowPage,
        getArtistPage: getArtistPage,
    }
}]);