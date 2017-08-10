/**
 * Created by Sravanthi Kethireddy on 7/19/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    function WebsiteService($http) {

        var api = {
            "createWebsite": createWebsite,
            "findWebsitesByUser": findWebsitesByUser,
            "findWebsiteById": findWebsiteById,
            "updateWebsite": updateWebsite,
            "deleteWebsite": deleteWebsite


        };
        return api;

        function createWebsite(userId, website) {
            var url = '/api/user/' + userId + '/website';
            return $http.post(url, website);

        }

        function findWebsitesByUser(userId) {
            var url = "/api/user/"+userId+"/website";
            return $http.get(url);
                // .then(function (response) {
                //     console.log(userId)
                //     return response.data;
                // });


        }

        function findWebsiteById(websiteId) {
            var url = '/api/website/' + websiteId;
            return $http.get(url);
                // .then(function (response) {
                //     return response.data;
                // });


        }

        function updateWebsite(websiteId, newSite) {
            var url = '/api/website/' + websiteId;
            return $http.put(url, newSite);

        }

        function deleteWebsite(websiteId) {
            var url = '/api/website/' + websiteId;
            return $http.delete(url);


        }

    }

})();