app.factory('UrlService', ['$http', function($http) {

    var baseUrl = 'http://localhost:8080/';

var getNewChannelInfo = function(id){
    console.log(baseUrl + 'admin/newChannel');

    var promise = $http.get(baseUrl + 'admin/newChannel').success(function(data){
        return data;
    });

    console.log(promise);
    return promise;
};

var getNewChannel = function(){}

var getNewArtistInfo = function(id){
    console.log(baseUrl + 'admin/newArtist');

    var promise = $http.get(baseUrl + 'admin/newArtist').success(function(data){
        return data;
    });

    console.log(promise);
    return promise;
};

var getNewArtist = function(){}

var getNewPodcastInfo = function(id){
    console.log(baseUrl + 'admin/newPodcast');

    var promise = $http.get(baseUrl + 'admin/newPodcast').success(function(data){
        return data;
    });

    console.log(promise);
    return promise;
};

var getNewPodcast = function(){}
    
var getLoginInfo = function(id){
    console.log(baseUrl + 'admin/login');

    var promise = $http.get(baseUrl + 'admin/login?title=AdminLogin').success(function(data){
        return data;
    });

 console.log(promise);
    return promise;
};

var getLogin = function(){}

    var getArchivePodcasts = function(name) {
        console.log(baseUrl + 'archive/all_podcasts');

        var promise = $http.get(baseUrl + 'archive/all_podcasts').success(function(data) {
            return data;
        });

        console.log(promise);
        return promise;
    };

    var getArtist = function() {}
    
//Nate
var getHomepage = function(name) {
        console.log(baseUrl + '/home/featuredPodcasts');

        var promise = $http.get(baseUrl + '/home/featuredPodcasts').success(function(data) {
            return data;
        });

        console.log(promise);
        return promise;
    };
//Ryan
var getShowPage = function(name) {
        console.log(baseUrl + '/shows/artistShow');

        var promise = $http.get(baseUrl + '/shows/artistShow').success(function(data) {
            return data;
        });

        console.log(promise);
        return promise;
};

//Khalid
var getArtistPage = function(name) {
        console.log(baseUrl + '/artists/all_artists');

        var promise = $http.get(baseUrl + '/artists/all_artists').success(function(data) {
            return data;
        });

        console.log(promise);
        return promise;
    };
var getTemp = function(name){














}
var getTemp = function(name){














}
var getTemp = function(name){














}



    return {
        getArchivePodcasts: getArchivePodcasts,
        getArtist: getArtist,
        getLoginInfo: getLoginInfo,
        getLogin: getLogin,
        getNewPodcast: getNewPodcast,
        getNewPodcastInfo: getNewPodcastInfo,  
        getNewArtistInfo: getNewArtistInfo,
        getNewChannelInfo: getNewChannelInfo,
        getHomepage: getHomepage,
<<<<<<< HEAD
        getArtistPage: getArtistPage
    };
=======
        getShowPage: getShowPage    };
>>>>>>> 505c4d99465801c6d15208b8416e7198b6a96ba1
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