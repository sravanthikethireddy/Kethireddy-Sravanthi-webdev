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
            "findAllWebsitesForUser": findAllWebsitesForUser,
            "findWebsiteById": findWebsiteById,
            "updateWebsite": updateWebsite,
            "deleteWebsite": deleteWebsite


        };
        return api;

        function createWebsite(userId, website) {
            var url = '/api/user/' + userId + '/website';
            return $http.post(url, website);

        }

        function findAllWebsitesForUser(userId) {
            var url = "/api/user/" + userId + "/website";
            return $http.get(url);


        }

        function findWebsiteById(websiteId) {
            var url = '/api/website/' + websiteId;
            return $http.get(url);


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