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
var getTemp = function(name){














}

var getTemp = function(name){














}
//Ryan
var getTemp = function(name){














}
var getTemp = function(name){














}
var getTemp = function(name){














}
//Khalid
var getTemp = function(name){














}
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
        getNewChannelInfo: getNewChannelInfo
    };
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