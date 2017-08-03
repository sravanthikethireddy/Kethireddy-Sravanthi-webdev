/**
 * Created by Sravanthi Kethireddy on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($routeParams, $location, PageService) {
        var model = this;
        model.userId = $routeParams['uid'];
        model.websiteId = $routeParams['wid'];
        model.pageId = $routeParams['pid'];
        model.updatePage = updatePage;
        model.deletePage = deletePage;

        function init() {
            model.page = PageService.findPageById(model.pageId);
            model.pages = PageService.findAllPagesByWebsiteId(model.websiteId);
        }

        init();

        function updatePage(newPage) {
            var success = PageService.updatePage(model.pageId, newPage);
            if (success) {
                $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page');
                model.message = "Page updated";
            }
            else {
                model.error = "Page not updated";
            }

        }

        function deletePage() {
            var success = PageService.deletePage(model.pageId);
            if (success) {
                $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page');
            }
            else {
                model.error = "Page not deleted";
            }
        }

    }

})();