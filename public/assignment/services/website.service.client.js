/**
 * Created by Sravanthi Kethireddy on 7/19/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);
    function WebsiteService() {
        var websites = [
            {"_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem"},
            {"_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem"},
            {"_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem"},
            {"_id": "890", "name": "Go", "developerId": "123", "description": "Lorem"},
            {"_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem"},
            {"_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem"},
            {"_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem"}
        ];
        var api = {
            "createWebsite": createWebsite,
            "findWebsitesByUser": findWebsitesByUser,
            "findWebsiteById": findWebsiteById,
            "updateWebsite": updateWebsite,
            "deleteWebsite": deleteWebsite


        };
        return api;
        function createWebsite(userId, website) {
            website._id = (new Date()).getTime();
            website.developerId = userId;
            websites.push(website);
            return website;
        }

        function findWebsitesByUser(userId) {
            var userSites = [];
            for (var w in websites) {
                var website = websites[w];
                if (website.developerId === userId) {
                    userSites.push(website)
                }

            }
            return userSites;

        }

        function findWebsiteById(websiteId) {
            for (var w in websites) {
                var website = websites[w];
                if (website._id === websiteId) {
                    return angular.copy(website)
                }
            }
            return null;

        }

        function updateWebsite(websiteId, newSite) {
            for (var w in websites) {
                if (websites[w]._id === websiteId) {
                    websites[w].name = newSite.name;
                    websites[w].description = newSite.description;
                }
            }
        }

        function deleteWebsite(websiteId) {
            for (var w in websites) {
                var site = websites[w];
                if (site._id === websiteId) {
                    websites.splice(w, 1)
                }
            }

        }

    }

})();