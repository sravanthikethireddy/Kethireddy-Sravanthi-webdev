(function () {
    angular
        .module("lastfmApp", [])
        .controller("searchController", searchController)
        .service("musicService", musicService);

    var key = "30a06320e1f7730fcc166e7d758722e0";

    function searchController(musicService) {
        var model = this;
        var secret = "1baca427e4875f2769f9baf6966b9aed";
        // var baseUrl = "http://ws.audioscrobbler.com/2.0/?method=METHOD&PARAMS&api_key=API_KEY&format=json";
        var baseUrl = "http://ws.audioscrobbler.com";
        model.searchTracksofArtist = searchTracksofArtist;

        function init() {

        }

        init();

        function searchTracksofArtist(artist) {
            // alert(artist);
            musicService
                .searchTracksofArtist(artist)
                .then(rendertracks);
        }

        function rendertracks(tracks) {
            model.tracks = tracks;
        }


    }

    function musicService($http) {
        this.searchTracksofArtist = searchTracksofArtist;

        function searchTracksofArtist(artist) {
            var url = "http://ws.audioscrobbler.com/2.0/?method=user.getartisttracks&user=rj&artist=" + artist + "+&api_key=" + key;
            return $http.get(url)
                .then(function (response) {
                    return response.data
                });
        }
    }
})();