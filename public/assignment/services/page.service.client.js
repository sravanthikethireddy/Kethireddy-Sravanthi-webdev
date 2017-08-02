/**
 * Created by Sravanthi Kethireddy on 7/19/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

    function PageService($http) {


        var api = {
            "createPage": createPage,
            "findAllPagesByWebsiteId": findAllPagesByWebsiteId,
            "findPageById": findPageById,
            "updatePage": updatePage,
            "deletePage": deletePage


        };
        return api;

        function createPage(websiteId, page) {
            var url = '/api/website/' + websiteId + '/page';
            return $http.post(url, page);

        }

        function findAllPagesByWebsiteId(websiteId) {
            var url = '/api/website/' + websiteId + '/page';
            return $http.get(url);

        }

        function findPageById(pageId) {
            var url = '/api/page/' + pageId;
            return $http.get(url);


        }

        function updatePage(pageId, page) {
            var url = '/api/page/' + pageId;
            return $http.put(url, page);

        }

        function deletePage(pageId) {
            var url = '/api/page/' + pageId;
            return $http.delete(url);

        }

    }

})();