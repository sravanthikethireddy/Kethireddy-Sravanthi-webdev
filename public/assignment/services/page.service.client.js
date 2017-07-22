/**
 * Created by Sravanthi Kethireddy on 7/19/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);
    function PageService() {
        var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
        ];

        var api = {
            "createPage": createPage,
            "findPageByWebsiteId": findPageByWebsiteId,
            "findPageById": findPageById,
            "updatePage": updatePage,
            "deletePage": deletePage


        };
        return api;
        function createPage(websiteId, page) {
            page._id = String(new Date().getTime());
            page.developerId = websiteId;
            pages.push(page);
        }

        function findPageByWebsiteId(websiteId) {
            var websitePages = [];
            for (var p in pages) {
                // var website = websites[w];
                if (pages[p].websiteId === websiteId) {
                    websitePages.push(pages[p])
                }

            }
            return websitePages;

        }

        function findPageById(pageId) {
            for (var p in pages) {
                // var website = websites[w];
                if (pages[p]._id === pageId) {
                    return angular.copy(pages[p])
                }
            }
            return null;

        }

        function updatePage(pageId, page) {
            for (var p in pages) {
                if (pages[p]._id === pageId) {
                    pages[p].name = page.name;
                    pages[p].description = newSite.description;
                    pages[p].websiteId = page.websiteId;
                }
            }
        }

        function deletePage(pageId) {
            for (var p in pages) {
                // var site = websites[w];
                if (pages[p]._id === pageId) {
                    pages.splice(p, 1)
                }
            }

        }

    }

})();